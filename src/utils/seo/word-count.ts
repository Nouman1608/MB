/**
 * D-440 -- the one definition of "how many words does this resource have".
 *
 * The word count decides whether an academic hub page is indexable
 * (isIndexableAcademicPage, 400-word threshold) and so which hubs are in the
 * sitemap. Two places need it: astro.config.mjs (sitemap, which runs before
 * the content layer exists) and the hub page template (the robots meta). They
 * must agree exactly, so both call bodyWordCount().
 *
 * The page used to read `entry.body` from Astro's content store. That copy of
 * the Markdown source was about 120 MB of a 319 MB store, so the `resources`
 * and `apResources` loaders now set `retainBody: false` and the page reads the
 * count from the file instead. Checked on 5 Nov 2026 before the change: the
 * store's body and this function gave the same count for all 7,355 resources.
 */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

/** Words in the text after the front matter (everything after the second `---`). */
export const bodyWordCount = (raw: string): number =>
  raw.split('---').slice(2).join('---').trim().split(/\s+/).filter(Boolean).length;

const cache = new Map<string, number>();

/**
 * Word count of a content file, by the `filePath` Astro records on every
 * entry (relative to the project root). Cached: a hub page asks for every
 * resource of its combination, and many hubs share resources.
 *
 * Throws instead of returning 0 when the file cannot be read: a silent 0
 * would quietly mark real pages as thin and noindex them.
 */
export function resourceWordCount(filePath: string | undefined): number {
  if (!filePath) throw new Error('resourceWordCount: the entry has no filePath, so its word count cannot be read.');
  const hit = cache.get(filePath);
  if (hit !== undefined) return hit;
  const count = bodyWordCount(readFileSync(resolve(process.cwd(), filePath), 'utf-8'));
  cache.set(filePath, count);
  return count;
}
