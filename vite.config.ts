import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  base: '/blog-client/',
  plugins: [react()],
  resolve: {
    alias: {
      "@app": resolve(__dirname, "src/app"),
      "@pages": resolve(__dirname, "src/pages"),
      "@widgets": resolve(__dirname, "src/widgets"),
      "@features": resolve(__dirname, "src/features"),
      "@entities": resolve(__dirname, "src/entities"),
      "@shared": resolve(__dirname, "src/shared"),
    },
  },
});
