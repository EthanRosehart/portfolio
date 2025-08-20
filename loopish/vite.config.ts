import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isCI = !!process.env.GITHUB_ACTIONS;
const isProjectPage = true; // this repo deploys to ethanrosehart.github.io/portfolio

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' && isProjectPage ? '/portfolio/' : '/',
  build: { outDir: 'dist' }
}));
