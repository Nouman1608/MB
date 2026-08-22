#!/usr/bin/env node
/**
 * Warns when two or more resources declare the exact same official
 * syllabus scope (subject + boards + qualifications + stage + resourceType
 * + the full set of syllabusTopics topic/subtopic pairs).
 *
 * Background: a site-wide audit (2026-08-23, see docs/decision-log.md
 * D-010) found the weekly `marlbridge-weekly-study-guides` scheduled task
 * had independently generated 27 genuine duplicate resource pairs (54
 * files) under two different slug conventions for the identical syllabus
 * scope, most within a single afternoon of rapid-fire runs. A naive
 * "does a file with a similar name already exist" check is not reliable
 * enough to catch this -- the automation had picked slugs like
 * `as-chem-equilibria-practice` and `as-chemistry-equilibria-practice` for
 * the exact same board/qualification/subject/subtopic, which don't look
 * alike as strings but ARE identical in the one thing that actually
 * matters: the official syllabus scope declared in frontmatter.
 *
 * This script is deliberately a WARNING, not a hard build-breaking error,
 * and is NOT wired into `npm run validate:academic`. The same audit also
 * found 12 pairs that share an identical scope signature but are
 * genuinely different content -- the official taxonomy simply doesn't
 * split some topics as finely as the actual resources do (e.g.
 * "forces-and-motion" vs "moments-and-stability", both tagged only to O
 * Level Physics 5054's single "1.5 Forces" subtopic, but one is about
 * Newton's laws and the other is about turning effects and stability).
 * Telling those two situations apart requires reading the actual prose,
 * which only a human or an agent with judgment can do -- a script can only
 * raise the flag, not resolve it. Treat every warning below as "read both
 * files before deciding," never as "delete one automatically."
 *
 * Usage: node scripts/check-duplicate-resource-scope.mjs
 *   Optionally restrict the report to groups that include one of a given
 *   set of files (handy for the weekly automation, which only cares
 *   whether ITS new file collides with something pre-existing):
 *     node scripts/check-duplicate-resource-scope.mjs --only-involving <slug1>,<slug2>,...
 */
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const RES_DIR = 'src/content/resources';

const field = (fm, name) => {
  const m = fm.match(new RegExp(`${name}:\\s*"([^"]*)"`));
  return m ? m[1] : '';
};

const arrayField = (fm, name) => {
  const m = fm.match(new RegExp(`${name}:\\s*\\[([^\\]]*)\\]`));
  if (!m) return [];
  return [...m[1].matchAll(/"([^"]*)"/g)].map((x) => x[1]).sort();
};

const syllabusTopicsOf = (fm) => {
  const block = fm.match(/^syllabusTopics:\s*\n((?:  - .*\n(?:    .*\n)*)*)/m);
  if (!block) return [];
  const pairs = [];
  for (const entry of block[1].split(/\n(?=  - )/)) {
    const t = entry.match(/topic:\s*"([^"]*)"/);
    const st = entry.match(/subtopic:\s*"([^"]*)"/);
    pairs.push(`${t ? t[1] : ''}::${st ? st[1] : ''}`);
  }
  return pairs.sort();
};

const files = (await readdir(RES_DIR)).filter((f) => f.endsWith('.md'));

const groups = new Map();
for (const fname of files) {
  const text = await readFile(join(RES_DIR, fname), 'utf8');
  const fmMatch = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!fmMatch) continue;
  const fm = fmMatch[1];

  const subject = field(fm, 'subject');
  const boards = arrayField(fm, 'boards');
  const quals = arrayField(fm, 'qualifications');
  const stage = field(fm, 'stage');
  const resourceType = field(fm, 'resourceType');
  const topics = syllabusTopicsOf(fm);

  if (topics.length === 0) continue; // nothing to compare -- can't claim scope overlap

  const sig = JSON.stringify({ subject, boards, quals, stage, resourceType, topics });
  if (!groups.has(sig)) groups.set(sig, []);
  groups.get(sig).push(fname);
}

const dupeGroups = [...groups.entries()].filter(([, fs]) => fs.length > 1);

const onlyIdx = process.argv.indexOf('--only-involving');
let filtered = dupeGroups;
if (onlyIdx !== -1 && process.argv[onlyIdx + 1]) {
  const wanted = new Set(process.argv[onlyIdx + 1].split(',').map((s) => `${s.trim()}.md`));
  filtered = dupeGroups.filter(([, fs]) => fs.some((f) => wanted.has(f)));
}

if (filtered.length === 0) {
  console.log(
    onlyIdx !== -1
      ? 'No existing resource shares an official syllabus scope with the file(s) checked. Safe to proceed, pending your own read of the content.'
      : `No resource pairs share an identical official syllabus scope, across ${files.length} resource file(s).`
  );
  process.exit(0);
}

console.log(`WARNING: ${filtered.length} group(s) of resources share an identical official syllabus scope.`);
console.log('This does NOT necessarily mean they are duplicates -- some pairs are genuinely');
console.log('different content sharing one coarse official subtopic label. READ BOTH FILES');
console.log('before deciding whether to merge, redirect, or leave them as-is.\n');

for (const [sig, fs] of filtered) {
  const { subject, boards, quals, stage, resourceType } = JSON.parse(sig);
  console.log(`[${subject} | ${boards.join('+')} | ${quals.join('+')} | stage=${stage || '(none)'} | ${resourceType}]`);
  for (const f of fs) console.log(`   - ${f}`);
  console.log('');
}

// Exit 0 even when warnings are found -- this is intentionally not a hard
// gate. The caller (the weekly automation, or a human) decides what to do.
process.exit(0);
