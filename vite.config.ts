import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // This must match your repository name on GitHub
  base: "/okech-law/",
  
  plugins: [react()],
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src"),
    },
  },
  
  // Sets the root directory for the app source code
  root: path.resolve(__dirname, "client"),
  
  build: {
    // Outputs the build to the 'dist' folder in the project root
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
});