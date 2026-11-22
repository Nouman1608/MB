#!/usr/bin/env node
/**
 * READ-ONLY report (Nov 2026 SEO audit, B1): duplicate and malformed resource
 * URLs. Reads src/content/resources/*.md and prints counts and examples; it
 * renames, deletes and redirects nothing.
 *
 *   node scripts/report-resource-slugs.mjs [--json out.json]
 *
 * It reports:
 *   1. total resource count
 *   2. groups with an identical body (exact) and a near-identical body
 *      (MinHash over 5-word shingles, estimated Jaccard >= 0.85)
 *   3. "twin" slugs: the same slug once syllabus-code tokens are removed
 *   4. slugs that break the dominant pattern (repeated tokens, subject name
 *      repeated at the end, no board or qualification, over-long/truncated)
 *   5. how slugs are generated (they are the file names; see the output)
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

const DIR = new URL('../src/content/resources/', import.meta.url);
const BOARDS = new Set(['cambridge', 'edexcel', 'pearson', 'aqa', 'ocr', 'oxfordaqa', 'ib', 'ap', 'cie', 'caie', 'wjec']);
const QUALS = new Set(['igcse', 'gcse', 'o', 'a', 'as', 'level', 'ial', 'ib', 'dp', 'myp', 'ap']);
const CODE = /^(?:\d{4}|[a-z]{2,4}\d{2,4}[a-z]?|\d{4}[a-z])$/; // 7402, 0417, yet01, h432

function front(raw) {
  const parts = raw.split(/^---\s*$/m);
  const fm = parts[1] ?? '';
  const get = (k) => fm.match(new RegExp(`^${k}:\\s*"?(.*?)"?\\s*$`, 'm'))?.[1];
  return {
    title: get('title') ?? '', type: get('resourceType'), subject: get('subject'),
    boards: (get('boards') ?? '').replace(/[\[\]"' ]/g, '').split(',').filter(Boolean),
    quals: (get('qualifications') ?? '').replace(/[\[\]"' ]/g, '').split(',').filter(Boolean),
    codes: (get('syllabusCodes') ?? '').replace(/[\[\]"' ]/g, '').split(',').filter(Boolean),
    status: get('reviewStatus'), body: parts.slice(2).join('---'),
  };
}

const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const fnv = (str, seed) => { let h = 2166136261 ^ seed; for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; } return h >>> 0; };
const NH = 64;
function minhash(words) {
  const sig = new Array(NH).fill(0xffffffff);
  for (let i = 0; i + 5 <= words.length; i++) {
    const sh = words.slice(i, i + 5).join(' ');
    for (let k = 0; k < NH; k++) { const h = fnv(sh, k * 7919); if (h < sig[k]) sig[k] = h; }
  }
  return sig;
}

const files = (await readdir(DIR)).filter((f) => f.endsWith('.md'));
const docs = [];
for (const f of files) {
  const raw = await readFile(new URL(f, DIR), 'utf8');
  const d = front(raw);
  const words = norm(d.body).split(' ').filter(Boolean);
  docs.push({ slug: f.slice(0, -3), ...d, words: words.length, hash: createHash('sha1').update(words.join(' ')).digest('hex'), sig: words.length >= 40 ? minhash(words) : null });
}

// 2a exact
const byHash = new Map();
for (const d of docs) { if (d.words < 40) continue; (byHash.get(d.hash) ?? byHash.set(d.hash, []).get(d.hash)).push(d); }
const exact = [...byHash.values()].filter((g) => g.length > 1);

// 2b near (LSH, 16 bands x 4 rows, then verify)
const parent = new Map(docs.map((d) => [d.slug, d.slug]));
const find = (x) => { while (parent.get(x) !== x) { parent.set(x, parent.get(parent.get(x))); x = parent.get(x); } return x; };
const union = (a, b) => parent.set(find(a), find(b));
const bands = new Map();
for (const d of docs) {
  if (!d.sig) continue;
  for (let b = 0; b < 16; b++) {
    const key = `${b}:${d.sig.slice(b * 4, b * 4 + 4).join(',')}`;
    (bands.get(key) ?? bands.set(key, []).get(key)).push(d);
  }
}
const sim = (a, b) => { let n = 0; for (let k = 0; k < NH; k++) if (a.sig[k] === b.sig[k]) n++; return n / NH; };
const near = new Map(); // slug pair key -> sim
for (const bucket of bands.values()) {
  if (bucket.length < 2 || bucket.length > 40) continue;
  for (let i = 0; i < bucket.length; i++) for (let j = i + 1; j < bucket.length; j++) {
    const s = sim(bucket[i], bucket[j]);
    if (s >= 0.85 && bucket[i].hash !== bucket[j].hash) { near.set(`${bucket[i].slug}|${bucket[j].slug}`, s); union(bucket[i].slug, bucket[j].slug); }
  }
}
const nearGroups = new Map();
for (const d of docs) if (d.sig) { const r = find(d.slug); (nearGroups.get(r) ?? nearGroups.set(r, []).get(r)).push(d); }
const nearOnly = [...nearGroups.values()].filter((g) => g.length > 1 && !g.every((d) => d.hash === g[0].hash));

// 3 twins (same slug once code tokens are dropped)
const stripCodes = (slug) => slug.split('-').filter((t) => !CODE.test(t)).join('-');
const byStripped = new Map();
for (const d of docs) { const k = stripCodes(d.slug); (byStripped.get(k) ?? byStripped.set(k, []).get(k)).push(d); }
const twins = [...byStripped.values()].filter((g) => g.length > 1 && new Set(g.map((d) => d.slug)).size > 1);

// 4 pattern breakers
const first = new Map();
const issues = { repeatedToken: [], subjectTail: [], noBoardOrQual: [], tooLong: [], truncatedCollision: [] };
for (const d of docs) {
  const t = d.slug.split('-');
  first.set(t[0], (first.get(t[0]) ?? 0) + 1);
  if (t.some((x, i) => i > 0 && x === t[i - 1] && x.length > 1) || /(?:^|-)(\w+(?:-\w+){1,3})-\1(?:-|$)/.test(d.slug)) issues.repeatedToken.push(d.slug);
  if (/-(?:cambridge|edexcel|aqa|ocr|oxfordaqa|pearson)-(?:igcse|gcse|o-level|a-level|as-level|ial)-[a-z-]+$/.test(d.slug) || /-(?:igcse|gcse|o-level|a-level)-(?:maths|mathematics|biology|chemistry|physics|english)$/.test(d.slug)) issues.subjectTail.push(d.slug);
  if (!t.some((x) => BOARDS.has(x)) && !t.some((x) => QUALS.has(x)) && !t.some((x) => CODE.test(x))) issues.noBoardOrQual.push(d.slug);
  if (d.slug.length >= 100) issues.tooLong.push(d.slug);
}
const prefixes = new Map();
for (const d of docs) { const p = d.slug.split('-').slice(0, 2).join('-'); prefixes.set(p, (prefixes.get(p) ?? 0) + 1); }

const out = {
  total: docs.length,
  exactGroups: exact.length, exactPages: exact.reduce((n, g) => n + g.length, 0),
  nearGroups: nearOnly.length, nearPages: nearOnly.reduce((n, g) => n + g.length, 0),
  twinGroups: twins.length, twinPages: twins.reduce((n, g) => n + g.length, 0),
  issueCounts: Object.fromEntries(Object.entries(issues).map(([k, v]) => [k, v.length])),
  firstTokens: [...first].sort((a, b) => b[1] - a[1]).slice(0, 15),
  topPrefixes: [...prefixes].sort((a, b) => b[1] - a[1]).slice(0, 15),
  examples: {
    exact: exact.slice(0, 5).map((g) => g.map((d) => d.slug)),
    near: nearOnly.slice(0, 8).map((g) => g.map((d) => `${d.slug} (${d.words}w)`)),
    twins: twins.slice(0, 8).map((g) => g.map((d) => d.slug)),
    ...Object.fromEntries(Object.entries(issues).map(([k, v]) => [k, v.slice(0, 8)])),
  },
};
console.log(JSON.stringify(out, null, 2));
const jsonArg = process.argv.indexOf('--json');
if (jsonArg > 0) {
  await writeFile(process.argv[jsonArg + 1], JSON.stringify({ ...out, exact: exact.map((g) => g.map((d) => d.slug)), near: nearOnly.map((g) => g.map((d) => d.slug)), twins: twins.map((g) => g.map((d) => d.slug)), issues }, null, 1));
}
