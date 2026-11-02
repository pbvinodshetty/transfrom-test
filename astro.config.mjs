import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://transformlifeprograms.com',
  trailingSlash: 'always',
  devToolbar: {
    enabled: false,
  },
  integrations: [sitemap()],
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
});
