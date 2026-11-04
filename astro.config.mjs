// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';
import { readFileSync } from 'node:fs';
import { transform } from 'lightningcss';

const { PUBLIC_SITE_URL } = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');

// https://astro.build/config
// Older phone browsers (Chrome < 111, Samsung Internet < 22) drop modern colour syntax such as oklab() and
// range media queries. This adds plain hex/rgba and min-width fallbacks to the built CSS so they never render black.
const legacyCss = {
  name: 'legacy-css-fallbacks',
  apply: 'build',
  enforce: 'post',
  generateBundle(_, bundle) {
    const targets = { chrome: 80 << 16, android: 80 << 16, safari: 13 << 16, firefox: 78 << 16, samsung: 12 << 16 };
    for (const file of Object.values(bundle)) {
      if (file.type !== 'asset' || !file.fileName.endsWith('.css')) continue;
      const out = transform({ filename: file.fileName, code: Buffer.from(file.source), targets, minify: true });
      file.source = out.code;
    }
  },
};

export default defineConfig({
  // Real domain; PUBLIC_SITE_URL overrides it.
  site: PUBLIC_SITE_URL || 'https://amancareservices.com',
  output: 'static',
  trailingSlash: 'always',
  // Keeps visual-QA screenshots clean.
  devToolbar: { enabled: false },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    // A bad edit from the admin panel stops the build here, with the file and field named.
    {
      name: 'content-validate',
      hooks: {
        'astro:build:start': async () => {
          const { validateContent } = await import('./src/lib/content-schema.ts');
          validateContent((file) => JSON.parse(readFileSync(new URL(`./src/content-data/${file}`, import.meta.url), 'utf8')));
        },
      },
    },
    sitemap({
      // 404 never listed. Disabled pages (40-day package) and draft posts are never built, so never listed.
      filter: (page) => !new URL(page).pathname.startsWith('/404'),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', ar: 'ar-SA' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss(), legacyCss],
  },
});
