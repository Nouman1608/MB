#!/usr/bin/env node
/**
 * Nov 2026 SEO audit (B1 twins, approved 23 Nov 2026) -- ten pairs of resources
 * that cover one syllabus subtopic under two slugs (one with the syllabus code,
 * one without). The fuller page survives (more words; on a near tie the one with
 * the code); the other file is deleted, every reference to it is pointed at the
 * survivor, and the Worker 301s the old URL (src/worker/slug-redirects.json).
 *
 * Word counts (retired -> survivor): rate-equations 1,535 -> 3,601 (+practice
 * 1,177 -> 2,262); CS big-data-practice 1,190 -> 1,220 (tie, code kept),
 * big-data-revision-notes 1,084 -> 1,473; data-structures-practice 1,171 -> 1,368,
 * -revision-notes 1,233 -> 1,668; GCSE chemistry atomic-structure practice
 * 1,247 -> 2,147, revision-notes 2,290 -> 3,056; GCSE sociology 1,491 -> 3,538;
 * O Level environmental management exam preparation 1,423 -> 1,694.
 */
import { readdirSync, readFileSync, writeFileSync, unlinkSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const RES = join(ROOT, 'src/content/resources');
const SELF = fileURLToPath(import.meta.url);
const MAP_FILE = join(ROOT, 'src/worker/slug-redirects.json');
const PAIRS = {
  'aqa-a-level-chemistry-7405-rate-equations': 'aqa-a-level-chemistry-rate-equations',
  'aqa-a-level-chemistry-7405-rate-equations-practice': 'aqa-a-level-chemistry-rate-equations-practice',
  'aqa-a-level-computer-science-big-data-practice': 'aqa-a-level-computer-science-7517-big-data-practice',
  'aqa-a-level-computer-science-7517-big-data-revision-notes': 'aqa-a-level-computer-science-big-data-revision-notes',
  'aqa-a-level-computer-science-7517-data-structures-practice': 'aqa-a-level-computer-science-data-structures-practice',
  'aqa-a-level-computer-science-7517-data-structures-revision-notes': 'aqa-a-level-computer-science-data-structures-revision-notes',
  'aqa-gcse-chemistry-atomic-structure-practice': 'aqa-gcse-chemistry-8462-atomic-structure-practice',
  'aqa-gcse-chemistry-atomic-structure-revision-notes': 'aqa-gcse-chemistry-8462-atomic-structure-revision-notes',
  'aqa-gcse-sociology-research-methods': 'aqa-gcse-sociology-8192-research-methods',
  'cambridge-o-level-environmental-management-exam-preparation': 'cambridge-o-level-environmental-management-exam-preparation-2027-2029',
};
for (const [o, n] of Object.entries(PAIRS)) {
  if (!existsSync(join(RES, `${o}.md`)) || !existsSync(join(RES, `${n}.md`))) throw new Error(`missing file for ${o} -> ${n}`);
  if (PAIRS[n]) throw new Error(`chain at ${n}`);
}
const map = JSON.parse(readFileSync(MAP_FILE, 'utf8'));
for (const [o, n] of Object.entries(PAIRS)) {
  unlinkSync(join(RES, `${o}.md`));
  map[o] = n;
}
for (const k of Object.keys(map)) if (PAIRS[map[k]]) map[k] = PAIRS[map[k]]; // no chains
writeFileSync(MAP_FILE, JSON.stringify(map) + '\n');

const TEXT = /\.(md|mdx|astro|ts|tsx|mjs|js|json|yml|yaml|txt|csv)$/;
const SKIP = new Set(['node_modules', 'dist', '.git', '.growth-private', '.astro']);
const TOKEN = /[a-z0-9][a-z0-9-]{18,}[a-z0-9]/g;
let files = 0, refs = 0;
const walk = (dir) => {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(e.name)) continue;
    const p = join(dir, e.name);
    if (e.isDirectory()) { walk(p); continue; }
    if (!TEXT.test(e.name) || p === MAP_FILE || p === SELF) continue;
    const raw = readFileSync(p, 'utf8');
    const out = raw.replace(TOKEN, (t) => (PAIRS[t] ? (refs++, PAIRS[t]) : t));
    if (out !== raw) { writeFileSync(p, out); files++; }
  }
};
for (const d of ['src', 'scripts', 'functions', 'public']) walk(join(ROOT, d));
console.log(`retired ${Object.keys(PAIRS).length}; references rewritten: ${refs} in ${files} files; map size ${Object.keys(map).length}`);
