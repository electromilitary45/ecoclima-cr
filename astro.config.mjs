import { defineConfig } from 'astro/config';

// https://astro.build/config
// Base /ecoclima-cr/ necesario para GitHub Pages de repositorio (no usuario)
export default defineConfig({
  site: 'https://electromilitary45.github.io',
  base: '/ecoclima-cr/',
  output: 'static',
});
