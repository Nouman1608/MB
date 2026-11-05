#!/usr/bin/env node
/**
 * D-439 -- early warning for the content-store ceiling.
 *
 * Astro keeps every content entry (Markdown source plus rendered HTML) in one
 * data store, written and read as a single JSON string. V8 cannot hold a
 * string longer than about 536 million characters (2^29 - 24), however much
 * memory Node is given, so once the store passes that size the build fails
 * and no --max-old-space-size setting can fix it.
 *
 * On 5 Nov 2026 the store was about 319 million characters (59% of the
 * limit). This check runs after a build (in audit:all) and:
 *   - warns at 75% of the limit, so there is time to plan the fix;
 *   - fails at 90%, before the build itself starts failing.
 *
 * The fix, when it is needed, is to move the largest collections out of the
 * single store (for example, loading the resource Markdown per page), not to
 * raise the heap again.
 */
import { statSync } from 'node:fs';

const V8_MAX_STRING = 2 ** 29 - 24;
const WARN = 0.75;
const FAIL = 0.9;

// `astro build` writes node_modules/.astro/; `astro dev` writes .astro/.
const candidates = ['node_modules/.astro/data-store.json', '.astro/data-store.json'];
const found = candidates
  .map((path) => { try { const s = statSync(path); return { path, bytes: s.size, mtime: s.mtimeMs }; } catch { return null; } })
  .filter(Boolean)
  .sort((a, b) => b.mtime - a.mtime);

if (found.length === 0) {
  console.log('Content store size: no data-store.json found (run a build first). Skipped.');
  process.exit(0);
}

// The store is almost entirely ASCII, so bytes are a close upper bound on characters.
const { path, bytes } = found[0];
const share = bytes / V8_MAX_STRING;
const pct = (share * 100).toFixed(1);
const msg = `Content store size: ${(bytes / 1e6).toFixed(0)} MB in ${path}, ${pct}% of the ${(V8_MAX_STRING / 1e6).toFixed(0)}M-character string limit.`;

if (share >= FAIL) {
  console.error(`FAIL: ${msg} Builds will soon fail outright. Move the largest collections out of the single content store (see D-439).`);
  process.exit(1);
}
if (share >= WARN) {
  console.warn(`WARN: ${msg} Plan the move of the largest collections out of the single content store (see D-439).`);
  process.exit(0);
}
console.log(`PASS: ${msg}`);
