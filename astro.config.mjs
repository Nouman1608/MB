import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://marlbridge.com',
  trailingSlash: 'always',
  output: 'static',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      // Excluded: private routes and pages that carry noindex.
      filter: (page) => !page.includes('/styleguide') && !page.includes('/legal/'),
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
