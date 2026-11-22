/**
 * Reads the built sitemap: dist/sitemap-index.xml and every child file it
 * lists. The audits used to read dist/sitemap-0.xml directly; the sitemap is
 * now split by page type (src/utils/seo/sitemap-groups.ts), so they go
 * through here and see every child file whatever it is called.
 */
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

export const SITE = 'https://marlbridge.com';

const locs = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

/** [{ file, url, xml, urls: [{ loc, lastmod }] }] for each child sitemap in the index. */
export function readSitemapFiles(dist = 'dist') {
  const indexPath = join(dist, 'sitemap-index.xml');
  if (!existsSync(indexPath)) throw new Error(`${indexPath} not found -- run \`npm run build\` first.`);
  return locs(readFileSync(indexPath, 'utf8')).map((url) => {
    const file = new URL(url).pathname.replace(/^\//, '');
    const xml = readFileSync(join(dist, file), 'utf8');
    const urls = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => ({
      loc: m[1].match(/<loc>([^<]+)<\/loc>/)?.[1],
      lastmod: m[1].match(/<lastmod>([^<]+)<\/lastmod>/)?.[1],
    }));
    return { file, url, xml, urls };
  });
}

/** Every URL in the sitemap, as absolute URLs. */
export const readSitemapUrls = (dist = 'dist') => readSitemapFiles(dist).flatMap((f) => f.urls.map((u) => u.loc));

/** Every URL in the sitemap, as site-relative paths ("/pricing/"). */
export const readSitemapPaths = (dist = 'dist') => readSitemapUrls(dist).map((u) => u.replace(SITE, ''));
