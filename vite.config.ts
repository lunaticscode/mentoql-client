import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ssgGeneratorPlugin from "./ssgGeneratorPlugin";
export default defineConfig({
  plugins: [react(), ssgGeneratorPlugin()],
});
