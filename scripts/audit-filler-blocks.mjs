#!/usr/bin/env node
/**
 * D-536 (owner decision) -- filler-block audit. WARN ONLY: always exits 0.
 *
 * Reads src/content/resources/*.md and src/content/ap-resources/**\/*.md
 * (source only; no build) and reports, per page, three kinds of repeated
 * "filler" block. Definitions (a page = one markdown file; a block = the
 * content under one ## / ### / #### heading):
 *
 *   [a] more-than-one-mistakes-block  The page has 2+ headings whose text
 *       is "Common mistakes", "Common errors", "Common pitfalls", "Exam
 *       traps" or "Where marks are (usually) lost" (also "Mistakes to
 *       avoid"). Only a heading counts, never a sentence in prose.
 *   [b] more-than-one-checklist       The page has 2+ headings containing
 *       the word "checklist" (e.g. "Quick revision checklist",
 *       "Before/during exam checklist").
 *   [c] faq-repeats-body-bullet       An answer in the page's "Frequently
 *       asked questions" section contains, as a whole, a bullet (or numbered
 *       item) from elsewhere on the page. Both sides are lower-cased with
 *       punctuation removed; a bullet must be 30+ characters
 *       avoids matching stubs such as
 *       "Define the term").
 *
 * Baseline: scripts/filler-blocks-baseline.json lists the pages already
 * known per rule. Only pages NOT in the baseline are printed as new
 * warnings; the counts of all pages are always printed.
 *   node scripts/audit-filler-blocks.mjs                   report
 *   node scripts/audit-filler-blocks.mjs --update-baseline write baseline from the current tree
 *   node scripts/audit-filler-blocks.mjs --all             list every flagged page, not just new ones
 *
 * Run via `npm run audit:filler-blocks`, wired into `npm run audit:all`.
 */
import { readdirSync, readFileSync, writeFileSync, existsSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOTS = ['src/content/resources', 'src/content/ap-resources'];
const BASELINE = 'scripts/filler-blocks-baseline.json';
const args = new Set(process.argv.slice(2));

const MISTAKES = /^(common (mistakes|errors|pitfalls)|exam traps|mistakes to avoid|where marks are (usually )?lost)\b/i;
const CHECKLIST = /\bchecklist\b/i;
const FAQ_HEADING = /^frequently asked questions\b/i;
const MIN_BULLET_CHARS = 30;

function* walk(dir) {
  if (!existsSync(dir)) return;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* walk(p);
    else if (name.endsWith('.md')) yield p;
  }
}

const norm = (s) =>
  s.toLowerCase().replace(/[`*_>]/g, '').replace(/\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/[^\p{L}\p{N}]+/gu, ' ').trim();

function analyse(text) {
  const body = text.replace(/\r\n/g, '\n').replace(/^---\n[\s\S]*?\n---\n?/, '');
  const sections = [];
  let cur = { heading: '', lines: [] };
  let inFence = false;
  for (const line of body.split('\n')) {
    if (/^```/.test(line)) inFence = !inFence;
    const h = !inFence && line.match(/^#{2,4}\s+(.+?)\s*#*$/);
    if (h) {
      sections.push(cur);
      cur = { heading: h[1].replace(/[*_`]/g, '').trim(), lines: [] };
    } else cur.lines.push(line);
  }
  sections.push(cur);

  const mistakes = sections.filter((s) => MISTAKES.test(s.heading)).length;
  const checklists = sections.filter((s) => CHECKLIST.test(s.heading)).length;

  const faq = sections.filter((s) => FAQ_HEADING.test(s.heading)).flatMap((s) => s.lines);
  // FAQ answers: lines not starting a question (**...**) joined per question.
  const answers = [];
  for (const line of faq) {
    if (/^\*\*.+\*\*\s*$/.test(line.trim())) answers.push('');
    else if (answers.length) answers[answers.length - 1] += ' ' + line;
  }
  const normAnswers = answers.map(norm).filter(Boolean);
  const bullets = new Set();
  for (const s of sections) {
    if (FAQ_HEADING.test(s.heading)) continue;
    for (const line of s.lines) {
      const m = line.match(/^\s*(?:[-*+]|\d+[.)])\s+(.+)$/);
      if (!m) continue;
      const b = norm(m[1]);
      if (b.length >= MIN_BULLET_CHARS) bullets.add(b);
    }
  }
  let repeats = 0;
  for (const b of bullets) if (normAnswers.some((a) => a.includes(b))) repeats++;
  return { mistakes, checklists, repeats };
}

const found = { 'more-than-one-mistakes-block': [], 'more-than-one-checklist': [], 'faq-repeats-body-bullet': [] };
let pages = 0;
for (const root of ROOTS) {
  for (const file of walk(root)) {
    pages++;
    const r = analyse(readFileSync(file, 'utf8'));
    const id = relative('.', file).replace(/\\/g, '/');
    if (r.mistakes > 1) found['more-than-one-mistakes-block'].push(id);
    if (r.checklists > 1) found['more-than-one-checklist'].push(id);
    if (r.repeats > 0) found['faq-repeats-body-bullet'].push(id);
  }
}
for (const k of Object.keys(found)) found[k].sort();

if (args.has('--update-baseline')) {
  writeFileSync(BASELINE, JSON.stringify({ generatedFrom: 'scripts/audit-filler-blocks.mjs', pages, rules: found }, null, 2) + '\n');
  console.log(`Baseline written to ${BASELINE} (${pages} pages scanned).`);
  for (const [k, v] of Object.entries(found)) console.log(`  ${k}: ${v.length}`);
  process.exit(0);
}

const baseline = existsSync(BASELINE) ? JSON.parse(readFileSync(BASELINE, 'utf8')).rules ?? {} : {};
console.log(`Filler-block audit (warn only): ${pages} pages scanned.`);
let fresh = 0;
for (const [rule, ids] of Object.entries(found)) {
  const known = new Set(baseline[rule] ?? []);
  const added = ids.filter((id) => !known.has(id));
  fresh += added.length;
  console.log(`  ${rule}: ${ids.length} page(s) flagged, ${added.length} not in baseline`);
  for (const id of args.has('--all') ? ids : added) console.log(`    WARN ${rule}: ${id}`);
}
if (fresh) console.log(`${fresh} new warning(s). Fix the page, or run with --update-baseline if the owner accepts it. (Warn only: exit 0.)`);
else console.log('No pages outside the baseline.');
process.exit(0);
