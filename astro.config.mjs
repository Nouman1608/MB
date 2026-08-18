import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { readdirSync, readFileSync } from 'node:fs';

/**
 * lastmod lookup for the sitemap (Phase 6 — technical SEO / crawlability).
 *
 * @astrojs/sitemap does not read content-collection dates on its own, so
 * every URL was previously written to sitemap-0.xml with no <lastmod> at
 * all. This reads updatedDate (falling back to publishedDate) directly out
 * of each resource/article's frontmatter and keys it by the page path, so
 * genuinely dated content gets a genuine <lastmod> instead of none. Pages
 * with no real date (hubs, subjects, programs, static pages) are left
 * without lastmod rather than given a fabricated one.
 */
function buildLastmodMap() {
  const map = new Map();
  const collections = [
    { dir: 'src/content/resources', urlPrefix: '/resources/' },
    { dir: 'src/content/articles', urlPrefix: '/articles/' },
  ];
  for (const { dir, urlPrefix } of collections) {
    let files;
    try {
      files = readdirSync(new URL(dir + '/', import.meta.url)).filter((f) => f.endsWith('.md'));
    } catch {
      continue;
    }
    for (const file of files) {
      const raw = readFileSync(new URL(`${dir}/${file}`, import.meta.url), 'utf-8');
      const frontmatter = raw.split('---')[1] ?? '';
      const updated = frontmatter.match(/^updatedDate:\s*(\S+)/m)?.[1];
      const published = frontmatter.match(/^publishedDate:\s*(\S+)/m)?.[1];
      const date = updated ?? published;
      if (!date) continue;
      const slug = file.replace(/\.md$/, '');
      map.set(`${urlPrefix}${slug}/`, new Date(date).toISOString());
    }
  }
  return map;
}

const lastmodBySlug = buildLastmodMap();

export default defineConfig({
  site: 'https://marlbridge.com',
  trailingSlash: 'always',
  output: 'static',
  build: { format: 'directory' },
  /**
   * Astro 7 changed the default from `true` (HTML-aware whitespace
   * compression, preserving a single space between inline elements per the
   * HTML spec) to `'jsx'` (strips inter-element whitespace the way React
   * does). This site's templates rely on the old behavior in many places
   * (e.g. "7 resources" + "IGCSE" rendered as adjacent inline elements) —
   * the new default silently ran words together sitewide. Pinned to `true`
   * to keep the pre-upgrade rendering, verified via a full before/after
   * text-content diff during the Astro 5->7 upgrade.
   */
  compressHTML: true,
  integrations: [
    sitemap({
      // Excluded: private/internal routes only.
      filter: (page) => !page.includes('/styleguide'),
      serialize(item) {
        const path = new URL(item.url).pathname;
        const lastmod = lastmodBySlug.get(path);
        return lastmod ? { ...item, lastmod } : item;
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
