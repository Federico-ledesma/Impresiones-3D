// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 1. La dirección URL final donde se va a ver tu página
  site: 'https://github.io',

  // 2. El nombre exacto de tu repositorio en GitHub con barras laterales
  base: '/Impresiones-3D/',

  vite: {
    plugins: [tailwindcss()]
  }
});