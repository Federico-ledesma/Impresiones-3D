// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://Federico-ledesma.github.io',
  base: '/Impresiones-3D',

  vite: {
    plugins: [tailwindcss()]
  }
});