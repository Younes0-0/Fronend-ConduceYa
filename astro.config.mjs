// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: vercel(),
    // 🧩 Añade esto: 
    vite: {
        resolve: {
        alias: {
            '@': './src',
            '@components': '/src/components',
            '@layouts': '/src/layouts',
            '@pages': '/src/pages'
        }
        }
    }
});
