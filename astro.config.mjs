// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://shanavasv.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  },
  // Keep links from the old WordPress site working.
  redirects: {
    '/home/publications': '/publications/',
    '/blog': '/writing/',
    '/category/research': '/writing/',
    '/category/technology': '/writing/',
    '/category/uncategorized': '/writing/',
    '/portfolio/learnx': '/projects/learnx/',
    '/portfolio/learny': '/projects/learny/',
    '/portfolio/rashba-effect': '/projects/rashba-effect/',
    '/portfolio/electron-phonon-coupling': '/projects/electron-phonon-coupling/',
  },
});
