import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ssgGeneratorPlugin from "./ssgGeneratorPlugin";
import { API_PROXY_PATH } from "./src/consts/api";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig(() => {
  return {
    plugins: [react(), vanillaExtractPlugin(), ssgGeneratorPlugin()],
    server: {
      proxy: {
        [API_PROXY_PATH]: {
          target: "http://localhost:8080",
          changeOrigin: true,
        },
      },
    },
  };
});
