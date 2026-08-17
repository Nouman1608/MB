#!/usr/bin/env node
/**
 * Validates that commercial/teaching claims in the `subjects` collection are
 * backed by the approved academic matrix — not just a generic status field.
 *
 * Phase 8 found that all 10 subjects carry `status: "available"`, but only
 * Chemistry has an ACTIVE marlbridgeStatus row in the matrix (the other 9
 * have zero approved board+qualification combinations). Phase 9 re-confirmed
 * this. Rather than guess-editing 9 subjects' status without business
 * confirmation, the site instead gates every visible "taught" claim on real
 * matrix evidence (see offeringsForSubject() and its use in
 * src/pages/subjects/[slug].astro). This script is the build-time backstop
 * for that same rule, so a future edit can't quietly reintroduce an
 * unsupported teaching claim:
 *
 *   1. WARN (non-fatal) — a subject's status field says "available" but the
 *      matrix has no ACTIVE combination for it. This is the known, current,
 *      not-yet-business-confirmed state for 9 of 10 subjects; it is surfaced
 *      on every build rather than silently forgotten, but does not fail the
 *      build, since fixing it requires a business decision this repo cannot
 *      make on its own.
 *   2. FAIL (fatal) — a subject's own FAQ text actively claims Marlbridge
 *      teaches a specific qualification (e.g. "Marlbridge teaches O Level
 *      Chemistry") that is not backed by an ACTIVE matrix combination for
 *      that subject. Unlike (1), this is copy actively publishing a claim,
 *      so it fails the build rather than just warning.
 *   3. FAIL (fatal) — a subject's FAQ text cites a syllabus code (e.g.
 *      "syllabus 0620") that does not match the qualificationCode on an
 *      ACTIVE matrix row for that subject.
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

// Rows that are actually live/public. (The fuller board/qualification
// "offered" checks already ran in validate-academic-matrix.mjs earlier in
// the same `npm run validate:academic` chain — if those disagree with this
// simpler ACTIVE+ACTIVE filter, that script fails the build first.)
const activeRows = MATRIX.filter((c) => c.marlbridgeStatus === 'ACTIVE' && c.boardOfferingStatus === 'ACTIVE');

const qualsBySubject = new Map(); // subjectSlug -> Set(qualificationSlug)
const codesBySubject = new Map(); // subjectSlug -> Set(qualificationCode)
for (const c of activeRows) {
  if (!qualsBySubject.has(c.subjectSlug)) qualsBySubject.set(c.subjectSlug, new Set());
  qualsBySubject.get(c.subjectSlug).add(c.qualificationSlug);
  if (c.qualificationCode) {
    if (!codesBySubject.has(c.subjectSlug)) codesBySubject.set(c.subjectSlug, new Set());
    codesBySubject.get(c.subjectSlug).add(c.qualificationCode);
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
  const status = scalarField(fm, 'status');
  const activeQuals = qualsBySubject.get(file.replace(/\.md$/, '')) ?? new Set();
  const activeCodes = codesBySubject.get(file.replace(/\.md$/, '')) ?? new Set();

  if (status === 'available' && activeQuals.size === 0) {
    warnings.push(`${at}: status is "available" but the academic matrix has no ACTIVE combination for this subject — do not surface a public "taught" claim (badge, FAQ, or prose) without further business confirmation.`);
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
console.log('Commercial claims OK (subject FAQs match the approved academic matrix).');
