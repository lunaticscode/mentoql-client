import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import ssgGeneratorPlugin from "./ssgGeneratorPlugin";
// ssgGeneratorPlugin()

import {} from "vite";

// function InjectEnvPlugin(): Plugin {
//   return {
//     name: "inject-env-plugin",
//     enforce: "pre",
//     apply: "build",

//     renderChunk(code, chunk) {
//       if (!chunk.fileName.endsWith(".js")) return null;
//       const env = loadEnv("production", process.cwd());
//       const serverBaseUrl = JSON.stringify(env.VITE_SERVER_BASE_URL);
//       // 정적으로 치환
//       const replacedCode = code.replace(
//         /__VITE_SERVER_BASE_URL__/g,
//         serverBaseUrl
//       );
//       return {
//         code: replacedCode,
//         map: null,
//       };
//     },
//   };
// }

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [react(), ssgGeneratorPlugin()],
    define: {
      __VITE_SERVER_BASE_URL__: JSON.stringify(env.VITE_SERVER_BASE_URL),
    },
    server: {
      proxy: {
        "/api": {
          target: "http://localhost:8080",
          changeOrigin: true,
        },
      },
    },
  };
});
