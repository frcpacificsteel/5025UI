import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  root: resolve(import.meta.dirname),
  resolve: {
    alias: {
      '@pacific-steel-5025/ui': resolve(import.meta.dirname, '../src/index.ts'),
    },
  },
  // The catalog intentionally imports every component into one visual inventory.
  build: { chunkSizeWarningLimit: 800 },
});
