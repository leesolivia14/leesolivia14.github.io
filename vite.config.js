import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // This specifies that the output directory will be 'dist'
  },
  base: "/leesolivia14.github.io/",
})
