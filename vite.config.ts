import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ssgGeneratorPlugin from "./ssgGeneratorPlugin";

export default defineConfig(() => {
  return {
    plugins: [react(), ssgGeneratorPlugin()],
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
