// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import auth from 'auth-astro';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),

  // Rutas de los componentes, layouts y páginas
  // Puedes usar '@' para referenciar la carpeta src
  vite: {
    resolve: {
    alias: {
        '@': process.cwd() + '/src',
        '@components':  process.cwd() + '/src/components',
        '@layouts': process.cwd() + '/src/layouts',     
        '@pages': process.cwd() + '/src/pages',      
      }
    }
  },

  integrations: [auth()]
});