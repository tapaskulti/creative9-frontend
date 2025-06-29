import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",  // Ensures correct asset paths
  build: {
    outDir: "dist", // Output directory
    emptyOutDir: true, // Ensures the directory is cleared before build
  }
})
