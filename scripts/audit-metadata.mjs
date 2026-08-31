#!/usr/bin/env node
/**
 * Phase 5 safeguard (Aug 2026 SEO remediation) -- sitewide metadata audit.
 *
 * Scans every built page's <title> and meta description for two things
 * search engines actively penalise: missing values, and values reused
 * verbatim across more than one URL (which reads as either duplicate or
 * templated-without-differentiation content).
 *
 * Requires a fresh `dist/` (run `npm run build` first). Not part of
 * `npm run validate:academic` for that reason -- run explicitly via
 * `npm run audit:metadata`, or as part of the pre-release QA gate
 * alongside test-sitemap-noindex.mjs and test-cross-board-regression.mjs.
 *
 * Exits 1 if anything is missing or duplicated, so it can be wired into
 * CI directly once desired.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (entry === 'index.html') out.push(p);
  }
  return out;
}

let files;
try {
  files = walk('dist');
} catch {
  console.error('dist/ not found -- run `npm run build` first.');
  process.exit(1);
}

const byTitle = new Map();
const byDesc = new Map();
const missing = [];

for (const f of files) {
  const html = readFileSync(f, 'utf8');
  const title = html.match(/<title>([\s\S]*?)<\/title>/)?.[1]?.trim();
  const desc = html.match(/<meta\s+name="description"\s+content="([^"]*)"/)?.[1]?.trim();
  const path = f.replace(/^dist/, '').replace(/index\.html$/, '') || '/';
  if (!title) missing.push({ path, issue: 'no <title>' });
  if (!desc) missing.push({ path, issue: 'no meta description' });
  if (title) {
    if (!byTitle.has(title)) byTitle.set(title, []);
    byTitle.get(title).push(path);
  }
  if (desc) {
    if (!byDesc.has(desc)) byDesc.set(desc, []);
    byDesc.get(desc).push(path);
  }
}

const dupTitles = [...byTitle.entries()].filter(([, paths]) => paths.length > 1);
const dupDescs = [...byDesc.entries()].filter(([, paths]) => paths.length > 1);

/**
 * Flagship Dominance/Trust programme -- self-duplicated title segment
 * check (Priority 2: "Practice Questions — Practice Questions" and the
 * same class of bug for any other repeated em-dash-separated segment).
 * Label-agnostic on purpose: rather than hardcoding a list of resource-type
 * labels here (which would drift from resourceCategoryMeta in
 * src/utils/content/collections.ts), this flags any title where two
 * ADJACENT " — "-separated segments are identical -- exactly the shape of
 * the bug regardless of which resource type produced it, and it does not
 * false-positive on titles that legitimately reuse a word non-adjacently.
 * The check is a SUFFIX match, not full-segment equality: the real bug
 * shape is "<prefix>: Practice Questions — Practice Questions", where the
 * first occurrence is the tail of a longer colon-joined segment, not a
 * standalone segment identical to the next one.
 */
const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const selfDupTitles = [];
for (const [title] of byTitle) {
  const segments = title.split(' — ').map((s) => s.trim());
  for (let i = 1; i < segments.length; i++) {
    const seg = segments[i];
    if (!seg) continue;
    const boundaryBefore = new RegExp(`(^|[:\\s])${escapeRegex(seg)}$`);
    if (boundaryBefore.test(segments[i - 1])) {
      selfDupTitles.push({ title, segment: seg });
      break;
    }
  }
}

console.log(`Metadata audit -- ${files.length} pages scanned.\n`);
console.log(`Missing title/description: ${missing.length}`);
for (const m of missing) console.log(`  ✗ ${m.path} -- ${m.issue}`);

console.log(`\nDuplicate titles: ${dupTitles.length} title(s) shared across ${dupTitles.reduce((s, [, p]) => s + p.length, 0)} pages`);
for (const [title, paths] of dupTitles) {
  console.log(`  ✗ "${title}"`);
  for (const p of paths) console.log(`      - ${p}`);
}

console.log(`\nDuplicate descriptions: ${dupDescs.length} description(s) shared across ${dupDescs.reduce((s, [, p]) => s + p.length, 0)} pages`);
for (const [desc, paths] of dupDescs) {
  console.log(`  ✗ "${desc.slice(0, 80)}${desc.length > 80 ? '...' : ''}"`);
  for (const p of paths) console.log(`      - ${p}`);
}

console.log(`\nSelf-duplicated title segments: ${selfDupTitles.length}`);
for (const { title, segment } of selfDupTitles) {
  console.log(`  ✗ "${title}" repeats the segment "${segment}" back-to-back`);
}

const problems = missing.length + dupTitles.length + dupDescs.length + selfDupTitles.length;
console.log(`\n${problems === 0 ? 'PASS' : 'FAIL'}: ${problems} problem(s) found.`);
process.exit(problems === 0 ? 0 : 1);
