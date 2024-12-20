import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Specify the output directory if needed, default is 'dist'
    outDir: "dist", // Ensures Vite outputs to the dist directory
    rollupOptions: {
      input: "/index.html", // Ensure that the entry point is correct for single-page apps (SPA)
    },
  },
});
