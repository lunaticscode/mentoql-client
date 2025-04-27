import React from "react"; // for generating-ssg-files
typeof React; // for generating-ssg-files
import { resolve, join, dirname } from "node:path";
import { Plugin } from "vite";
import { config } from "dotenv";
import { renderToStaticMarkup } from "react-dom/server";

import {
  readFileSync,
  writeFileSync,
  statSync,
  readdirSync,
  mkdirSync,
} from "node:fs";

import { StaticRouter } from "react-router-dom";

const mergeNginxConfigFile = (addedConfig: string) => `
server {
  listen       80;
  listen  [::]:80;
  server_name  localhost;
  root   /usr/share/nginx/html;
      
  ${addedConfig}
}`;

const cleanupReactImport = (file: string) => {
  try {
    const fileContent = readFileSync(file, { encoding: "utf-8" }).toString();
    if (
      fileContent &&
      fileContent.includes("typeof React;//* by-auto-react-import")
    ) {
      writeFileSync(
        file,
        fileContent.split("typeof React;//* by-auto-react-import")[1].trim()
      );
      console.log("🧹 cleanupReactImport :: ", file);
    }
  } catch (err) {
    console.error(`(!) cleanupReactImport Error, targetFile: ${file}\n`, err);
  }
};

const recur = (parentDir: string) => {
  const fileNames = readdirSync(parentDir);
  if (fileNames.length) {
    for (const fileName of fileNames) {
      const filePath = resolve(parentDir, fileName);
      const file = statSync(filePath);
      if (file.isDirectory()) {
        recur(filePath);
      } else {
        if (fileName.includes(".tsx")) {
          cleanupReactImport(filePath);
        }
      }
    }
  }
};

const ssgGeneratorPlugin = (): Plugin => {
  return {
    name: "vite-plugin-ssg",
    apply: "build",
    async closeBundle() {
      try {
        await config();
        (globalThis as any).VITE_SERVER_BASE_URL =
          process.env.VITE_SERVER_BASE_URL;
        const App = (await import("./src/App")).default;
        const pathsToPrerender = ["/", "/signin", "/mento"];

        const baseHtmlTemplate = readFileSync(
          resolve(process.cwd(), "dist", "index.html"),
          { encoding: "utf-8" }
        );
        let addedNginxLocatinBlock = "";

        for (const path of pathsToPrerender) {
          const pageHtml = renderToStaticMarkup(
            <StaticRouter location={path}>
              <App />
            </StaticRouter>
          );
          const nginxLocationBlockContent = `
        location ${path} {
            try_files $uri ${resolve(path, "index.html")}; 
        }`;
          addedNginxLocatinBlock =
            addedNginxLocatinBlock + nginxLocationBlockContent;

          const ssgIndexHtmlContent = baseHtmlTemplate
            .toString()
            .replace("<!--page-content-->", pageHtml);

          const outputPath = resolve(
            join(process.cwd(), "dist", path, "index.html")
          );

          mkdirSync(dirname(outputPath), { recursive: true });
          writeFileSync(outputPath, ssgIndexHtmlContent);
          console.log(`📄 [Generated] ${outputPath}`);
        }
        const nginxConfFilePath = resolve(process.cwd(), "nginx.conf");
        writeFileSync(
          nginxConfFilePath,
          mergeNginxConfigFile(addedNginxLocatinBlock)
        );
        console.log("✅ [SSG] Static generation completed.");
      } catch (err) {
        console.error("❌ closeBundle Error ::\n", err);
      } finally {
        recur(resolve(process.cwd(), "src"));
      }
    },
  };
};

export default ssgGeneratorPlugin;
