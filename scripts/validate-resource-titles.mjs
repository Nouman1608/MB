#!/usr/bin/env node
/**
 * D-516 -- resource search titles: every resource page's <title> source
 * (seoTitle, or the title with its course added by resourceSearchTitle())
 * must be unique across the library.
 *
 * Reads front matter only, so it runs before the build (it is part of
 * `npm run validate:academic`). audit-metadata.mjs makes the same check on
 * the built pages; this one fails in seconds and names the two files.
 *
 * `--report` prints every title the course was added to, with its length.
 *
 * Run: node --experimental-strip-types scripts/validate-resource-titles.mjs
 */
import { loadResources } from './lib/academic-qa-data.mjs';
import { resourceSearchTitle, RESOURCE_TITLE_TARGET } from '../src/utils/seo/resource-title.ts';

const report = process.argv.includes('--report');
const resources = loadResources().filter((r) => !r.draft && r.reviewStatus !== 'draft');

const byTitle = new Map();
const changed = [];
for (const r of resources) {
  const before = r.seoTitle || r.title;
  const after = resourceSearchTitle({ ...r, seoTitle: r.seoTitle || undefined });
  if (after !== before) changed.push({ slug: r.slug, before, after });
  byTitle.set(after, [...(byTitle.get(after) ?? []), r.slug]);
}

const duplicates = [...byTitle].filter(([, slugs]) => slugs.length > 1);
const overTarget = changed.filter((c) => c.after.length > RESOURCE_TITLE_TARGET).length;

console.log(`Resource search titles -- ${resources.length} resources checked.`);
console.log(`  Course context added to ${changed.length} title(s); ${overTarget} of those are over ${RESOURCE_TITLE_TARGET} characters (kept whole, never cut).`);
if (report) for (const c of changed) console.log(`  ${c.slug}\n    was: ${c.before}\n    now: ${c.after} (${c.after.length})`);

for (const [title, slugs] of duplicates) {
  console.error(`  ✗ "${title}" is the search title of ${slugs.length} resources: ${slugs.join(', ')}`);
  console.error('    Give one of them a seoTitle, or make the authored titles differ.');
}
console.log(`${duplicates.length === 0 ? 'PASS' : 'FAIL'}: ${duplicates.length} duplicate search title(s).`);
process.exit(duplicates.length === 0 ? 0 : 1);
