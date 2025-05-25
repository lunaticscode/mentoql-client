import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ssgGeneratorPlugin from "./ssgGeneratorPlugin";
import { API_PROXY_PATH } from "./src/consts/api";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig((config) => {
  const plugins = [react, vanillaExtractPlugin, ssgGeneratorPlugin];
  if (config.isSsrBuild) plugins.pop();
  return {
    plugins: plugins.map((p) => p()),
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
