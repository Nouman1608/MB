#!/usr/bin/env node
/**
 * Font-binary integrity safeguard (Aug 2026 SEO remediation, Phase 11,
 * item 13 of the 14-test list in Section 15 of the brief).
 *
 * Catches the exact regression found and fixed in D-025: six font files
 * in public/fonts/ were byte-identical copies of a DIFFERENT weight's
 * file, served under their own filename/weight as if they were correct
 * -- e.g. requesting weight 500 actually downloaded the weight-400 binary
 * (a real Google Fonts CSS2 API quirk when multiple weights are
 * requested in one query). This wastes bandwidth (a "duplicate" weight
 * that renders identically to another, never as intended) and is
 * invisible to a visual check since the browser just renders the wrong
 * weight without erroring.
 *
 * Method: hash every font file in public/fonts/; if two files whose
 * filenames declare DIFFERENT weights hash identically, that's a real
 * "duplicate binary presented as an unrelated weight" -- fail. Two
 * files of the SAME declared weight (e.g. latin vs latin-ext subsets of
 * the same weight) are allowed to differ or coincidentally match --
 * only cross-weight identity is a bug.
 *
 * Exits 1 on any problem found, matching the other audit-*.mjs scripts.
 */
import { readFile, readdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

const FONTS_DIR = 'public/fonts';

function parseWeight(filename) {
  // e.g. newsreader-latin-500.woff2 -> family "newsreader-latin", weight 500
  const m = filename.match(/^(.+)-(\d{3})\.woff2?$/);
  if (!m) return null;
  return { family: m[1].replace(/-latin(-ext)?$/, ''), weight: m[2], filename };
}

const files = (await readdir(FONTS_DIR)).filter((f) => /\.woff2?$/.test(f));
const parsed = files.map(parseWeight).filter(Boolean);

const hashes = new Map(); // sha256 -> [{filename, family, weight}]
for (const entry of parsed) {
  const buf = await readFile(join(FONTS_DIR, entry.filename));
  const hash = createHash('sha256').update(buf).digest('hex');
  if (!hashes.has(hash)) hashes.set(hash, []);
  hashes.get(hash).push(entry);
}

const problems = [];
for (const [hash, entries] of hashes) {
  if (entries.length < 2) continue;
  const weights = new Set(entries.map((e) => e.weight));
  if (weights.size > 1) {
    problems.push(
      `Byte-identical font binary (sha256 ${hash.slice(0, 12)}...) shared across DIFFERENT declared weights: ` +
      entries.map((e) => `${e.filename} (weight ${e.weight})`).join(', ') +
      ' -- one or more of these was fetched incorrectly and is not actually its own weight.'
    );
  }
}

console.log('Font-binary integrity audit');
console.log(`  Font files scanned: ${parsed.length}`);
console.log(`  Distinct binaries: ${hashes.size}`);
console.log('');

if (problems.length === 0) {
  console.log('PASS: 0 problem(s) found.');
  process.exit(0);
} else {
  console.log(`FAIL: ${problems.length} problem(s) found:\n`);
  for (const p of problems) console.log(`  - ${p}`);
  process.exit(1);
}
