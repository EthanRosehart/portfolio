// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 Replace REPO_NAME with your repo name, e.g. 'loopish-ui'.
// If you’re NOT using GitHub Pages, you can delete the `base` line.
export default defineConfig({
  plugins: [react()],
  base: '/REPO_NAME/',
})
