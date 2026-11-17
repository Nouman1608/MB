// Place copies of existing topic figures on revision-notes (and other) pages.
// Each docs/reports/topic-images/revision-notes/<page-slug>.json holds
//   { "page": "<page-slug>", "placements": [ { "src": "https://img.marlbridge.com/...webp", "after": "## Heading" } ] }
// The <figure> markup (alt, caption, size) is copied exactly from a page that already shows that image.
// Idempotent: images already on the page are skipped.
//
// Usage: node scripts/topic-figures/place-revision-figures.mjs [--dry-run] [--check] [page-slug ...]
//   --check  validate only (headings exist, images known); writes nothing
import fs from 'node:fs';
import path from 'node:path';
import { insertIntoFile } from './insert-lib.mjs';

const R = 'src/content/resources';
const DIR = 'docs/reports/topic-images/revision-notes';
const args = process.argv.slice(2);
const dry = args.includes('--dry-run') || args.includes('--check');
const only = new Set(args.filter((a) => !a.startsWith('--')));

// src -> exact <figure> markup, taken from study guides first (the figure's home), then any page.
const index = new Map();
const files = fs.readdirSync(R).filter((f) => f.endsWith('.md'));
const order = [...files.filter((f) => !/-(revision-notes|practice)\.md$/.test(f)), ...files.filter((f) => /-(revision-notes|practice)\.md$/.test(f))];
for (const f of order) {
  const md = fs.readFileSync(path.join(R, f), 'utf8');
  for (const m of md.matchAll(/<figure class="topic-figure">[^]*?<\/figure>/g)) {
    const src = /<img src="([^"]+)"/.exec(m[0])?.[1];
    if (src && !index.has(src)) index.set(src, m[0]);
  }
}

let pages = 0, inserted = 0, skipped = 0;
const problems = [];
for (const f of fs.readdirSync(DIR).filter((f) => f.endsWith('.json') && f !== 'candidates.json').sort()) {
  let spec;
  try { spec = JSON.parse(fs.readFileSync(path.join(DIR, f), 'utf8')); }
  catch (e) { problems.push(`${f}: bad JSON (${e.message})`); continue; }
  const slug = spec.page || f.slice(0, -5);
  if (only.size && !only.has(slug)) continue;
  const file = path.join(R, `${slug}.md`);
  if (!fs.existsSync(file)) { problems.push(`${slug}: page not found`); continue; }
  const blocks = [];
  for (const p of spec.placements || []) {
    const fig = index.get(p.src);
    if (!fig) { problems.push(`${slug}: image not on any page: ${p.src}`); continue; }
    blocks.push({ after: p.after, figure: fig, src: p.src });
  }
  const r = insertIntoFile(file, blocks, { dry });
  problems.push(...r.problems.map((x) => `${slug}: ${x}`));
  inserted += r.inserted; skipped += r.skipped;
  if (r.inserted) pages++;
}
console.log(`${dry ? '[no write] ' : ''}pages changed: ${pages}, figures placed: ${inserted}, already present: ${skipped}`);
if (problems.length) { console.log('problems:\n  ' + problems.join('\n  ')); process.exitCode = 1; }
