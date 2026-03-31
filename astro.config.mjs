// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lostincloud.pt',
  output: 'static',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'pt',
        locales: { pt: 'pt-PT', en: 'en' },
      },
    }),
  ],
});
