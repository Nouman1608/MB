#!/usr/bin/env node
/**
 * Validates that commercial/teaching claims in the `subjects` collection are
 * backed by the approved academic matrix — not just a generic status field.
 *
 * v1.2 WS2 replaced the old free-floating `status: "available"` field with
 * `marlbridgeTeaches`, a real business field that is now cross-checked here
 * as a hard build failure rather than a warning: after the WS2 migration,
 * every subject whose page claims `marlbridgeTeaches: "teaching"` is
 * expected to have real ACTIVE matrix evidence (the one prior exception,
 * languages.md, was corrected to `not-confirmed` in that same migration,
 * since "Languages" has no matrix subject entry of its own). If a future
 * edit sets `marlbridgeTeaches: "teaching"` on a subject the matrix does
 * not support, that is exactly the unsupported-claim class of bug this
 * release exists to prevent, so it now fails the build rather than warning:
 *
 *   1. FAIL (fatal) — a subject's marlbridgeTeaches field is "teaching" but
 *      the matrix has no ACTIVE combination for it.
 *   2. FAIL (fatal) — a subject's own FAQ text actively claims Marlbridge
 *      teaches a specific qualification (e.g. "Marlbridge teaches O Level
 *      Chemistry") that is not backed by an ACTIVE matrix combination for
 *      that subject. Unlike (1), this is copy actively publishing a claim,
 *      so it fails the build rather than just warning.
 *   3. FAIL (fatal) — a subject's FAQ text cites a syllabus code (e.g.
 *      "syllabus 0620") that does not match the qualificationCode on an
 *      ACTIVE matrix row for that subject.
 *
 * Phase 10 hardening added a fourth, coarser check at qualification level
 * (not tied to one subject), covering the two other places Marlbridge
 * states which qualifications it teaches:
 *
 *   4. FAIL (fatal) — the Contact page's FAQ (src/pages/contact/index.astro)
 *      or a program's FAQ (src/content/programs/*.md) claims Marlbridge
 *      teaches a qualification (e.g. "Marlbridge teaches GCSE") that has no
 *      ACTIVE matrix row for ANY subject. Programs carry zero FAQ entries
 *      today, so this is currently a no-op there — it exists so a future
 *      edit is checked from day one.
 *
 * Runs as part of `npm run build`.
 */
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { execSync } from 'node:child_process';

const tsx = (file) =>
  execSync(
    `node --experimental-strip-types --no-warnings -e "` +
    `import('./${file}').then(m => process.stdout.write(JSON.stringify(m.default ?? m)))"`,
    { encoding: 'utf8', cwd: process.cwd() },
  );

const { MATRIX } = JSON.parse(tsx('src/data/academic/matrix.ts'));
const { SUBJECTS } = JSON.parse(tsx('src/data/academic/subjects.ts'));

// Rows that are actually live/public. (The fuller board/qualification
// "offered" checks already ran in validate-academic-matrix.mjs earlier in
// the same `npm run validate:academic` chain — if those disagree with this
// simpler ACTIVE+ACTIVE filter, that script fails the build first.)
const activeRows = MATRIX.filter((c) => c.marlbridgeStatus === 'ACTIVE' && c.boardOfferingStatus === 'ACTIVE');

// The matrix's subjectSlug and the src/content/subjects/*.md filename can
// differ (e.g. matrix 'english-language' -> content file 'english.md',
// per subjects.ts hubId) — same indirection src/pages/boards/.../[subject]
// .astro already uses via subjectBySlug().hubId. Without this map, this
// script would key ACTIVE rows by the raw matrix slug, look them up by
// content filename, miss the match, and wrongly warn that a subject with
// real ACTIVE evidence (e.g. English) has none — Workstream 4 audit finding.
const hubIdBySubjectSlug = new Map(SUBJECTS.map((s) => [s.slug, s.hubId ?? s.slug]));
const keyFor = (subjectSlug) => hubIdBySubjectSlug.get(subjectSlug) ?? subjectSlug;

const qualsBySubject = new Map(); // content-filename slug -> Set(qualificationSlug)
const codesBySubject = new Map(); // content-filename slug -> Set(qualificationCode)
for (const c of activeRows) {
  const key = keyFor(c.subjectSlug);
  if (!qualsBySubject.has(key)) qualsBySubject.set(key, new Set());
  qualsBySubject.get(key).add(c.qualificationSlug);
  if (c.qualificationCode) {
    if (!codesBySubject.has(key)) codesBySubject.set(key, new Set());
    codesBySubject.get(key).add(c.qualificationCode);
  }
}

const scalarField = (fm, name) => {
  const m = fm.match(new RegExp(`^${name}:\\s*"?([A-Za-z-]+)"?\\s*$`, 'm'));
  return m ? m[1] : undefined;
};

/** Parses a `faqs:` block of `- question: "..." \n answer: "..."` entries. */
const faqEntries = (fm) => {
  // (?![\s\S]) is the reliable JS idiom for "true end of string" — \Z is NOT
  // a supported anchor in JS regex (it silently fails to match), which would
  // make this block invisible whenever faqs: is the last frontmatter field.
  const block = fm.match(/^faqs:\s*\n([\s\S]*?)(?=^\S|(?![\s\S]))/m);
  if (!block) return [];
  const chunks = block[1].split(/^\s*-\s+/m).slice(1);
  return chunks.map((chunk) => ({
    question: (chunk.match(/question:\s*"([^"]*)"/) || [])[1] ?? '',
    answer: (chunk.match(/answer:\s*"([^"]*)"/) || [])[1] ?? '',
  }));
};

// Qualification name -> slug, for matching FAQ prose against the matrix.
const QUALIFICATION_NAMES = [
  ['A Level', 'a-level'],
  ['AS Level', 'a-level'],
  ['O Level', 'o-level'],
  ['IGCSE', 'igcse'],
];

const warnings = [];
const errors = [];

const dir = 'src/content/subjects';
const files = (await readdir(dir)).filter((f) => f.endsWith('.md'));
for (const file of files) {
  const raw = await readFile(join(dir, file), 'utf8');
  const fm = raw.split('---')[1] ?? '';
  const at = `${dir}/${file}`;
  const teaches = scalarField(fm, 'marlbridgeTeaches');
  const activeQuals = qualsBySubject.get(file.replace(/\.md$/, '')) ?? new Set();
  const activeCodes = codesBySubject.get(file.replace(/\.md$/, '')) ?? new Set();

  if (teaches === 'teaching' && activeQuals.size === 0) {
    errors.push(`${at}: marlbridgeTeaches is "teaching" but the academic matrix has no ACTIVE combination for this subject — an unsupported "taught" claim (badge, FAQ, or prose) cannot ship without matrix evidence.`);
  }

  for (const { question, answer } of faqEntries(fm)) {
    const claimsTeaching = /\b(teaches|taught by|is taught)\b/i.test(answer);
    if (claimsTeaching) {
      for (const [name, slug] of QUALIFICATION_NAMES) {
        if (answer.includes(name) && !activeQuals.has(slug)) {
          errors.push(`${at}: FAQ "${question}" claims Marlbridge teaches ${name}, but the matrix has no ACTIVE ${slug} combination for this subject.`);
        }
      }
    }
    const codeMatches = [...answer.matchAll(/syllabus\s+(\d{4})/gi)].map((m) => m[1]);
    for (const code of codeMatches) {
      if (!activeCodes.has(code)) {
        errors.push(`${at}: FAQ "${question}" cites syllabus ${code}, which is not an ACTIVE matrix code for this subject (expected one of: ${[...activeCodes].join(', ') || '(none)'}).`);
      }
    }
  }
}

// -----------------------------------------------------------------------
// SITE-WIDE QUALIFICATION-TEACHING CLAIMS (Phase 10 hardening)
//
// The check above only covers src/content/subjects/*.md, at
// subject+qualification granularity. Two other places state which
// qualifications Marlbridge teaches, in coarser, qualification-only terms:
// the Contact page's hardcoded FAQ (src/pages/contact/index.astro) and each
// program's own faqs: frontmatter (src/content/programs/*.md — empty on
// all 8 today, checked anyway so a future edit is covered from day one
// rather than after the fact).
//
// Split into sentences before testing, so a hedge sentence right next to
// an affirmative one ("GCSE ... teaching in development") is judged on its
// own words rather than dragged in by a neighbouring sentence's "teaches".
// Qualification names are matched with \b word boundaries specifically so
// "GCSE" cannot false-positive-match inside "IGCSE".
// -----------------------------------------------------------------------
const activeQualSlugs = new Set(activeRows.map((c) => c.qualificationSlug));

const QUALIFICATION_SLUGS = [
  ['IGCSE', 'igcse'], ['GCSE', 'gcse'], ['AS Level', 'as-level'],
  ['A Level', 'a-level'], ['O Level', 'o-level'],
];

const sentencesOf = (text) => text.split(/(?<=[.!?])\s+/).filter(Boolean);

/** Extracts { question, answer } pairs from a .astro file's inline `question: '...'` / `answer: '...'` literals. */
const jsFaqEntries = (src) => {
  const entries = [];
  const re = /question:\s*'((?:[^'\\]|\\.)*)'\s*,\s*answer:\s*'((?:[^'\\]|\\.)*)'/gs;
  for (const m of src.matchAll(re)) entries.push({ question: m[1], answer: m[2] });
  return entries;
};

const checkQualificationClaims = (at, faqs) => {
  for (const { question, answer } of faqs) {
    for (const sentence of sentencesOf(answer)) {
      if (!/\b(teaches|taught by|is taught)\b/i.test(sentence)) continue;
      for (const [name, slug] of QUALIFICATION_SLUGS) {
        if (new RegExp(`\\b${name}\\b`).test(sentence) && !activeQualSlugs.has(slug)) {
          errors.push(`${at}: FAQ "${question}" claims Marlbridge teaches ${name} ("${sentence.trim()}"), but the matrix has no ACTIVE ${slug} combination for any subject.`);
        }
      }
    }
  }
};

const contactSrc = await readFile('src/pages/contact/index.astro', 'utf8');
checkQualificationClaims('src/pages/contact/index.astro', jsFaqEntries(contactSrc));

let programFiles = [];
try { programFiles = (await readdir('src/content/programs')).filter((f) => f.endsWith('.md')); } catch { /* no programs dir */ }
for (const file of programFiles) {
  const raw = await readFile(join('src/content/programs', file), 'utf8');
  const fm = raw.split('---')[1] ?? '';
  checkQualificationClaims(`src/content/programs/${file}`, faqEntries(fm));
}

// -----------------------------------------------------------------------
// v1.2 WS2 — status/copy contradiction guard.
//
// This is the exact bug class the GCSE programme page shipped with: its
// `marlbridgeTeaches` field (formerly `status`) said one thing while its
// own prose said the opposite ("Teaching is being developed and is not
// yet offered" on a page whose status claimed active teaching — or the
// inverse: upbeat "currently taught" language on a page that is not
// actually confirmed as taught). Both directions are checked, on every
// subjects/*.md and programs/*.md body.
// -----------------------------------------------------------------------
const NOT_OFFERED_PHRASES = [
  /not yet offered/i, /being developed/i, /not currently (taught|offered)/i,
  /no longer offered/i, /not yet available/i,
];
const ACTIVELY_TAUGHT_PHRASES = [
  /currently taught/i, /is taught by marlbridge/i, /marlbridge teaches/i,
];

const checkCopyContradiction = async (collectionDir) => {
  let files = [];
  try { files = (await readdir(collectionDir)).filter((f) => f.endsWith('.md')); } catch { return; }
  for (const file of files) {
    const raw = await readFile(join(collectionDir, file), 'utf8');
    const [, fm, ...bodyParts] = raw.split('---');
    const body = bodyParts.join('---');
    const teaches = scalarField(fm, 'marlbridgeTeaches');
    const at = `${collectionDir}/${file}`;
    if (teaches === 'teaching' && NOT_OFFERED_PHRASES.some((re) => re.test(body))) {
      errors.push(`${at}: marlbridgeTeaches is "teaching" but the page body still contains "not yet offered"-style language — update the copy or correct the field, they cannot both be true.`);
    }
    if (teaches !== 'teaching' && ACTIVELY_TAUGHT_PHRASES.some((re) => re.test(body))) {
      errors.push(`${at}: marlbridgeTeaches is "${teaches}" (not "teaching") but the page body claims Marlbridge currently/actively teaches this — update the copy or correct the field, they cannot both be true.`);
    }
  }
};

await checkCopyContradiction('src/content/subjects');
await checkCopyContradiction('src/content/programs');

if (warnings.length) {
  console.warn(`\nCommercial-claims check — ${warnings.length} warning(s) (non-fatal):\n`);
  for (const w of warnings) console.warn(`  • ${w}`);
  console.warn('');
}

if (errors.length) {
  console.error(`\nCommercial-claims validation FAILED — ${errors.length} problem(s):\n`);
  for (const e of errors) console.error(`  • ${e}`);
  console.error('');
  process.exit(1);
}
console.log('Commercial claims OK (subject, Contact-page and program FAQs match the approved academic matrix).');
