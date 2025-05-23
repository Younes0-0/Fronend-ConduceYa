// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import path from 'path';
import auth from 'auth-astro';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),

  // 🧩 Añade esto: 
  vite: {
    resolve: {
    alias: {
         // alias          → carpeta real
        '@':             path.resolve(__dirname, './src'),
        '@components':   path.resolve(__dirname, './src/components'),
        '@layouts':      path.resolve(__dirname, './src/layouts'),
        '@pages':        path.resolve(__dirname, './src/pages'),
      }
    }
  },

  integrations: [auth()]
});