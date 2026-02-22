import { defineConfig } from 'vite';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/ttt/' : '/',
  plugins: [wasm(), topLevelAwait()],
  optimizeDeps: { exclude: ['@dimforge/rapier3d'] },
});
