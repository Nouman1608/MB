#!/usr/bin/env node
/**
 * Validates src/data/featured-teachers.ts (D-151).
 *
 * The pin is an explicit owner instruction about who appears first in every
 * public teacher listing. At runtime a slug that no longer matches an author
 * simply no-ops, so the site stays up -- but that also means a typo, or an
 * author being renamed or unpublished, would silently stop the instruction
 * being carried out with nothing on the page to show it. This check fails the
 * build instead, so it is caught before shipping rather than noticed months
 * later.
 *
 * Fails when a pinned slug: has no author file; is not entityType 'person';
 * or is not publicationState 'published' (an unpublished profile is filtered
 * out of every listing, so pinning it is a no-op).
 *
 * Runs as part of `npm run validate:academic`.
 */
import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const AUTHORS_DIR = 'src/content/authors';
const PIN_FILE = 'src/data/featured-teachers.ts';

const src = await readFile(PIN_FILE, 'utf8');
const block = src.match(/PINNED_TEACHER_SLUGS[^=]*=\s*\[([\s\S]*?)\]/);
if (!block) {
  console.error(`FAIL: could not find PINNED_TEACHER_SLUGS in ${PIN_FILE}.`);
  process.exit(1);
}
const slugs = [...block[1].matchAll(/'([^']+)'/g)].map((m) => m[1]);

if (slugs.length === 0) {
  console.log('Pinned-teacher check -- no slugs pinned; nothing to verify.');
  process.exit(0);
}

const files = (await readdir(AUTHORS_DIR)).filter((f) => f.endsWith('.md'));
const problems = [];

for (const slug of slugs) {
  const file = `${slug}.md`;
  if (!files.includes(file)) {
    problems.push(`  x ${slug} -- no ${AUTHORS_DIR}/${file}`);
    continue;
  }
  const fm = await readFile(join(AUTHORS_DIR, file), 'utf8');
  const entityType = fm.match(/^entityType:\s*(.+)$/m)?.[1]?.trim().replace(/['"]/g, '');
  const state = fm.match(/^publicationState:\s*(.+)$/m)?.[1]?.trim().replace(/['"]/g, '') ?? 'published';
  if (entityType !== 'person') {
    problems.push(`  x ${slug} -- entityType is "${entityType}", not "person"`);
  }
  if (state !== 'published') {
    problems.push(`  x ${slug} -- publicationState is "${state}"; it is filtered out of every listing, so the pin does nothing`);
  }
}

const dupes = slugs.filter((s, i) => slugs.indexOf(s) !== i);
if (dupes.length) problems.push(`  x duplicate slug(s): ${[...new Set(dupes)].join(', ')}`);

console.log(`Pinned-teacher check -- ${slugs.length} pinned slug(s): ${slugs.join(', ')}`);
if (problems.length) {
  console.error(`\nFAIL: ${problems.length} problem(s) found.\n${problems.join('\n')}`);
  console.error(`\nFix the slug in ${PIN_FILE}, or remove it if that teacher should no longer be pinned.`);
  process.exit(1);
}
console.log('PASS: every pinned slug resolves to a published person.');
