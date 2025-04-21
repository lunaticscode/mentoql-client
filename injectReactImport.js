import { readdirSync, readFileSync, statSync, writeFileSync } from "fs";
import path from "path";

const injectReactImport = (file) => {
  try {
    const fileContent = readFileSync(file, { encoding: "utf-8" }).toString();

    if (fileContent && !fileContent.includes("import React from")) {
      writeFileSync(
        file,
        `import React from 'react';//* by-auto-react-import\ntypeof React;//* by-auto-react-import\n${fileContent}`.trim()
      );
      console.log("💉 injectReactImport :: ", file);
    }
  } catch (err) {
    console.error(`(!) injectReactImport Error, targetFile: ${file}\n`, err);
  }
};

const recur = (parentDir) => {
  const fileNames = readdirSync(parentDir);
  if (fileNames.length) {
    for (const fileName of fileNames) {
      const filePath = path.resolve(parentDir, fileName);
      const file = statSync(filePath);
      if (file.isDirectory()) {
        recur(filePath);
      } else {
        if (fileName.includes(".tsx")) {
          injectReactImport(filePath);
        }
      }
    }
  }
};

recur(process.cwd(), "src");
