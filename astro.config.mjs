import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jeviwaugh.com',
  output: 'static',
  trailingSlash: 'always',
  publicDir: './static',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      // Dual themes driven by the site's own data-theme, not prefers-color-scheme.
      themes: {
        light: 'github-light',
        dark: 'github-dark-default',
      },
      defaultColor: false,
    },
  },
});
