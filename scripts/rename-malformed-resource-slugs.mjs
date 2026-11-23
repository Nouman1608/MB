#!/usr/bin/env node
/**
 * Nov 2026 SEO audit (B1, approved 23 Nov 2026) -- rename resources whose slug
 * breaks the board-qualification-subject-code-topic-type pattern:
 *   1. `ib-ib-...` slugs (doubled prefix and the subject repeated 2-3 times),
 *   2. a trailing echo of the board, qualification and subject
 *      (`...-differentiation-cambridge-igcse-maths`),
 *   3. stems of 100+ characters, cut at a word boundary.
 * The `-practice` / `-revision-notes` suffix is kept, and every file of one
 * stem gets the same new stem, so sibling pages stay together.
 *
 *   node scripts/rename-malformed-resource-slugs.mjs            # dry run, writes the map only
 *   node scripts/rename-malformed-resource-slugs.mjs --apply    # rename files + rewrite references
 *
 * The map (old -> new) is written to src/worker/slug-redirects.json; the Worker
 * answers every old URL with a 301 to the new one (src/worker/index.ts), so the
 * redirects ship in the same deploy as the renames.
 */
import { readdirSync, readFileSync, writeFileSync, renameSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const RES = join(ROOT, 'src/content/resources');
const MAP_FILE = join(ROOT, 'src/worker/slug-redirects.json');
const APPLY = process.argv.includes('--apply');

const BOARDS = ['cambridge', 'edexcel', 'aqa', 'ocr', 'oxfordaqa'];
const STOP = new Set(['a', 'an', 'the', 'of', 'and', 'or', 'to', 'for', 'with', 'in', 'on', 'at', 'by', 'from', 'as', 'that', 'which', 'is', 'are', 'their', 'its', 'between', 'into', 'about']);
const MAX_STEM = 90;

const files = readdirSync(RES).filter((f) => f.endsWith('.md')).map((f) => f.slice(0, -3));
const existing = new Set(files);
const splitType = (s) => {
  const m = s.match(/^(.*?)(-practice|-revision-notes)$/);
  return m ? [m[1], m[2]] : [s, ''];
};

/** Collapse an adjacent repeated run of 1-4 tokens: "world-history-world-history" -> "world-history". */
function dedupeRuns(tokens) {
  let out = tokens.slice();
  for (let n = 4; n >= 1; n--) {
    for (let i = 0; i + 2 * n <= out.length; i++) {
      if (out.slice(i, i + n).join('-') === out.slice(i + n, i + 2 * n).join('-') && out.slice(i, i + n).join('').length > 3) {
        out.splice(i + n, n);
        i = -1;
      }
    }
  }
  return out;
}

function fixStem(stem) {
  let s = stem;
  // 1. ib-ib-...
  if (s.startsWith('ib-ib-')) {
    s = s.slice(3);
    const last = s.lastIndexOf('-ib-');
    if (last > 0) s = s.slice(last + 1); // keep the final "ib-dp-<subject>-<topic>" part
    s = dedupeRuns(s.split('-')).join('-');
  }
  // 2. echoed board-qualification-subject tail
  const t = s.split('-');
  const board = t[0];
  if (BOARDS.includes(board)) {
    for (let i = 4; i < t.length - 1; i++) {
      const qual2 = t.slice(i + 1, i + 3).join('-');
      const isQual = /^(a-level|as-level|o-level)$/.test(qual2) || /^(alevel|aslevel|olevel|gcse|igcse|ial)$/.test(t[i + 1] ?? '');
      if (t[i] === board && isQual && t.length - i <= 6) {
        // A trailing number after the echoed subject ("...-cambridge-alevel-maths-3") names a paper or part; keep it.
        const trailing = /^\d+$/.test(t[t.length - 1]) ? `-${t[t.length - 1]}` : '';
        s = t.slice(0, i).join('-') + trailing;
        break;
      }
    }
  }
  // 3. long stems
  if (s.length > MAX_STEM) {
    const words = s.split('-');
    let acc = '';
    for (const w of words) {
      if ((acc + '-' + w).length > MAX_STEM) break;
      acc = acc ? `${acc}-${w}` : w;
    }
    const parts = acc.split('-');
    while (parts.length > 4 && (STOP.has(parts[parts.length - 1]) || parts[parts.length - 1].length < 2)) parts.pop();
    s = parts.join('-');
  }
  return s;
}

const stems = new Map(); // stem -> [slug]
for (const slug of files) {
  const [stem] = splitType(slug);
  (stems.get(stem) ?? stems.set(stem, []).get(stem)).push(slug);
}

const map = {};
const skipped = [];
const claimed = new Set();
for (const [stem, slugs] of stems) {
  const next = fixStem(stem);
  if (next === stem) continue;
  const targets = slugs.map((slug) => next + splitType(slug)[1]);
  const clash = targets.find((t, i) => (existing.has(t) && !slugs.includes(t)) || claimed.has(t) || targets.indexOf(t) !== i);
  if (clash) { skipped.push({ stem, next, clash }); continue; }
  slugs.forEach((slug, i) => { map[slug] = targets[i]; claimed.add(targets[i]); });
}

const entries = Object.entries(map);
console.log(`resources: ${files.length}; to rename: ${entries.length}; skipped (collision): ${skipped.length}`);
const byRule = { ibib: 0, echo: 0, long: 0, other: 0 };
for (const [o, n] of entries) {
  if (o.startsWith('ib-ib-')) byRule.ibib++;
  else if (n.length < o.length && o.length >= 100 && !/-(aqa|cambridge|edexcel|ocr|oxfordaqa)-/.test(o.slice(30))) byRule.long++;
  else byRule.echo++;
}
console.log('by rule (approx):', byRule);
console.log('examples:'); entries.filter((_, i) => i % Math.ceil(entries.length / 24) === 0).forEach(([o, n]) => console.log(`  ${o}\n    -> ${n}`));
if (skipped.length) { console.log('skipped examples:'); skipped.slice(0, 8).forEach((s) => console.log('  ', JSON.stringify(s))); }
writeFileSync(MAP_FILE, JSON.stringify(map, null, 0) + '\n');
console.log(`map written: ${MAP_FILE}`);

if (!APPLY) process.exit(0);

// ---- apply: rename files, then rewrite every reference by whole-token lookup ----
for (const [o, n] of entries) renameSync(join(RES, `${o}.md`), join(RES, `${n}.md`));
console.log('files renamed');

const TEXT = /\.(md|mdx|astro|ts|tsx|mjs|js|json|yml|yaml|txt|csv)$/;
const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.growth-private', '.astro']);
const SCAN = ['src', 'scripts', 'functions', 'public'].map((d) => join(ROOT, d));
const TOKEN = /[a-z0-9][a-z0-9-]{18,}[a-z0-9]/g;
let changedFiles = 0, replaced = 0;
const walk = (dir) => {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(e.name)) continue;
    const p = join(dir, e.name);
    if (e.isDirectory()) { walk(p); continue; }
    if (!TEXT.test(e.name) || p === MAP_FILE) continue;
    const raw = readFileSync(p, 'utf8');
    const out = raw.replace(TOKEN, (tok, offset) => {
      const n = map[tok];
      if (!n) return tok;
      // img.marlbridge.com/<slug>--NN-name.webp is a different token (has "--"), never matched here.
      replaced++;
      return n;
    });
    if (out !== raw) { writeFileSync(p, out); changedFiles++; }
  }
};
for (const d of SCAN) if (existsSync(d)) walk(d);
console.log(`references rewritten: ${replaced} in ${changedFiles} files`);
