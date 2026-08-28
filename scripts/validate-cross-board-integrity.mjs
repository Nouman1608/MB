#!/usr/bin/env node
/**
 * v1.2 WS1 — Cross-board academic integrity validator.
 *
 * Root cause fixed this release: syllabus-topics.ts's topicsFor() matched
 * only on qualificationSlug+subjectSlug, never boardSlug, so Cambridge's
 * topic list, tiering language (Core/Extended) and cambridgeinternational.org
 * citation silently rendered on every other board's page sharing the same
 * qualification+subject pair. Fixed by requiring an exact boardSlug match.
 * This script is the durable, build-failing guard against that class of bug
 * recurring — in this file's data, in syllabuses.ts, in matrix.ts, and in
 * resource frontmatter. Every rule here failed loudly against the pre-fix
 * code when exercised with injected negative fixtures (see WS1 report).
 *
 * Exit 1 on any violation. Run as part of `npm run validate:academic`.
 */
import { readFile } from 'node:fs/promises';
import { execSync } from 'node:child_process';

const load = (file) => JSON.parse(execSync(
  `node --experimental-strip-types --no-warnings -e "` +
  `import('./${file}').then(m => process.stdout.write(JSON.stringify(m.default ?? m)))"`,
  { encoding: 'utf8', cwd: process.cwd(), maxBuffer: 1024 * 1024 * 32 }));

let problems = 0;
const fail = (msg) => { console.error(`  ✗ ${msg}`); problems++; };
const ok = (msg) => console.log(`  ✓ ${msg}`);

/**
 * Verified official domain for each board (boards.ts `source` field).
 * Pearson Edexcel has no syllabuses.ts entries yet (documented gap) but is
 * included here so sourceUrl checks still work once entries are added.
 */
const BOARD_DOMAINS = {
  cambridge: 'www.cambridgeinternational.org',
  aqa: 'www.aqa.org.uk',
  ocr: 'www.ocr.org.uk',
  oxfordaqa: 'www.oxfordaqa.com',
  edexcel: 'qualifications.pearson.com',
  // v2.0 MEGA PROGRAMME WS-IB -- added when the first syllabuses.ts entries
  // for IB (Economics DP, Physics DP) were written; matches the same
  // ib: 'www.ibo.org' domain already registered in
  // scripts/validate-assessments.mjs's own BOARD_DOMAINS and already used
  // (pre-existing, unaffected by this change) as the sourceUrl host on
  // both IB entries in syllabus-topics.ts. This validator's Rule 1 never
  // hard-failed on IB's absence here because its check is conditional on
  // `expectedHost` existing at all (`if (host && expectedHost && ...)`),
  // but Rule 2 (syllabuses.ts) has no such fallback -- it hard-fails any
  // board missing from this map, which is exactly what surfaced this gap.
  ib: 'www.ibo.org',
};

const { MATRIX } = load('src/data/academic/matrix.ts');
const { SYLLABUSES } = load('src/data/academic/syllabuses.ts');
const { SYLLABUS_VERSIONS } = load('src/data/academic/syllabus-topics.ts');

// ---------------------------------------------------------------------
// Rule 1: topic-collection-belongs-to-page's-board.
// Every SYLLABUS_VERSIONS entry must declare a boardSlug, and that
// boardSlug must match a real board in the matrix for the exact same
// qualification+subject it claims to describe. An entry with a missing
// or mismatched boardSlug is exactly the shape of bug that caused the
// Cambridge-topic leak, so it is a hard failure.
// ---------------------------------------------------------------------
console.log('\n[1] Topic collections declare a real, ACTIVE, code-matching board');
for (const v of SYLLABUS_VERSIONS) {
  if (!v.boardSlug) { fail(`syllabus-topics.ts entry ${v.syllabusCode} (${v.qualificationSlug}/${v.subjectSlug}) has no boardSlug`); continue; }
  const row = MATRIX.find((c) => c.boardSlug === v.boardSlug && c.qualificationSlug === v.qualificationSlug && c.subjectSlug === v.subjectSlug);
  if (!row) { fail(`syllabus-topics.ts entry ${v.syllabusCode} claims boardSlug '${v.boardSlug}' for ${v.qualificationSlug}/${v.subjectSlug}, but no matrix row for that exact board+qualification+subject exists`); continue; }
  if (row.marlbridgeStatus !== 'ACTIVE') { fail(`syllabus-topics.ts entry ${v.syllabusCode} claims boardSlug '${v.boardSlug}' for ${v.qualificationSlug}/${v.subjectSlug}, but that combination is not ACTIVE (status: ${row.marlbridgeStatus}) — a topic collection cannot exist for a combination the board doesn't offer or Marlbridge doesn't teach`); continue; }
  // Cross-check the topic collection's own syllabusCode against the verified
  // syllabuses.ts registry for this exact board+qualification+subject, where
  // a registry entry exists. This is the check that actually catches a
  // Cambridge topic set being relabelled with another board's slug: the
  // code (e.g. Cambridge's 9701) will not match that other board's real
  // registered code (e.g. AQA's 7405), so the mislabel is caught even
  // though the board+qualification+subject combination itself is valid.
  const registryEntry = SYLLABUSES.find((s) => s.boardSlug === v.boardSlug && s.qualificationSlug === v.qualificationSlug && s.subjectSlug === v.subjectSlug);
  if (registryEntry && registryEntry.code !== v.syllabusCode) {
    fail(`syllabus-topics.ts entry for ${v.boardSlug}/${v.qualificationSlug}/${v.subjectSlug} has syllabusCode '${v.syllabusCode}', but syllabuses.ts's verified code for that exact board+qualification+subject is '${registryEntry.code}' — this topic collection does not belong to the board it claims`);
  }
  // Independent of the registry cross-check above (which only fires where
  // a syllabuses.ts entry happens to exist): every topic collection also
  // carries its own sourceUrl, and that URL's domain must belong to the
  // board it claims. This is the check that catches a topic set being
  // relabelled onto a board that has NO syllabuses.ts registry entry yet
  // (e.g. today's AQA/Edexcel gaps) — the sourceUrl still points at the
  // real originating board's domain even when the boardSlug field lies.
  if (v.sourceUrl) {
    let host;
    try { host = new URL(v.sourceUrl).hostname; } catch { host = null; }
    const expectedHost = BOARD_DOMAINS[v.boardSlug];
    if (host && expectedHost && host !== expectedHost) {
      fail(`syllabus-topics.ts entry for ${v.boardSlug}/${v.qualificationSlug}/${v.subjectSlug} has sourceUrl on '${host}', but ${v.boardSlug}'s official domain is '${expectedHost}' — this topic collection's own source citation contradicts the board it claims`);
    }
  }
}
if (!problems) ok(`${SYLLABUS_VERSIONS.length} topic collection(s) all declare a real, ACTIVE, code-matching board`);

// ---------------------------------------------------------------------
// Rule 2: official-source-domain-matches-declared-board.
// Every syllabuses.ts entry's officialUrl hostname must match the one
// true domain for that board. Domains below are the verified official
// domains on file for each board (boards.ts `source` field); Pearson
// Edexcel has no syllabuses.ts entries yet (documented gap, not a
// violation of this rule — see WS4/v1.3 backlog).
// ---------------------------------------------------------------------
console.log('\n[2] Official source URLs match the declared board\'s real domain');
let domainProblems = 0;
for (const s of SYLLABUSES) {
  const expected = BOARD_DOMAINS[s.boardSlug];
  if (!expected) { fail(`syllabuses.ts entry for ${s.boardSlug}/${s.qualificationSlug}/${s.subjectSlug} has no known official domain registered in this validator`); domainProblems++; continue; }
  let host;
  try { host = new URL(s.officialUrl).hostname; } catch { fail(`syllabuses.ts entry for ${s.boardSlug}/${s.qualificationSlug}/${s.subjectSlug} has an unparseable officialUrl: ${s.officialUrl}`); domainProblems++; continue; }
  if (host !== expected) { fail(`syllabuses.ts entry for ${s.boardSlug}/${s.qualificationSlug}/${s.subjectSlug} cites '${host}' but ${s.boardSlug}'s official domain is '${expected}'`); domainProblems++; }
}
if (!domainProblems) ok(`${SYLLABUSES.length} syllabus source URL(s) all match their declared board's real domain`);

// ---------------------------------------------------------------------
// Rule 3: spec-code-matches-board (no cross-board code collisions).
// A specification/qualification code is board-specific. If two
// different boards ever claim the identical code, that is either a
// data-entry error or a genuine legacy/revised-code collision that
// needs explicit resolution — never a silent coincidence.
// ---------------------------------------------------------------------
console.log('\n[3] No specification code is claimed by more than one board');
const byCode = new Map();
for (const c of MATRIX) {
  if (!c.qualificationCode) continue;
  if (!byCode.has(c.qualificationCode)) byCode.set(c.qualificationCode, []);
  byCode.get(c.qualificationCode).push(c);
}
let codeProblems = 0;
for (const [code, rows] of byCode) {
  const boards = new Set(rows.map((r) => r.boardSlug));
  if (boards.size > 1) { fail(`Specification code '${code}' is claimed by multiple boards: ${rows.map((r) => `${r.boardSlug}/${r.qualificationSlug}/${r.subjectSlug}`).join(', ')}`); codeProblems++; }
}
if (!codeProblems) ok(`${byCode.size} specification code(s) checked, each claimed by exactly one board`);

// ---------------------------------------------------------------------
// Rule 4: no duplicate (board, qualification, subject) matrix rows.
// A duplicate is exactly the shape that enables an applicability-date /
// legacy-vs-revised-code collision to silently pick the wrong row.
// ---------------------------------------------------------------------
console.log('\n[4] No duplicate board+qualification+subject matrix rows');
const seen = new Map();
let dupeProblems = 0;
for (const c of MATRIX) {
  const key = `${c.boardSlug}|${c.qualificationSlug}|${c.subjectSlug}`;
  if (seen.has(key)) { fail(`Duplicate matrix row for ${key}`); dupeProblems++; }
  seen.set(key, c);
}
if (!dupeProblems) ok(`${MATRIX.length} matrix rows, ${seen.size} unique board+qualification+subject combinations, 0 duplicates`);

// ---------------------------------------------------------------------
// Rule 5: resource-board-leak — every resource's frontmatter must
// explicitly declare `boards:`. An undeclared (implicitly empty/
// agnostic) `boards:` field is only safe when the resource genuinely
// contains no board-specific claims; this validator instead requires
// every resource to make that declaration explicitly, so an agnostic
// resource is an affirmative, reviewed choice rather than an omission
// that later silently starts rendering on every board's page.
// ---------------------------------------------------------------------
console.log('\n[5] Every resource explicitly declares its boards[] (no undeclared field)');
import { readdir } from 'node:fs/promises';
const resourceFiles = (await readdir('src/content/resources')).filter((f) => f.endsWith('.md'));
let undeclared = 0;
for (const f of resourceFiles) {
  const body = await readFile(`src/content/resources/${f}`, 'utf8');
  const frontmatter = body.split('---')[1] ?? '';
  if (!/^boards:/m.test(frontmatter)) { fail(`src/content/resources/${f} has no explicit boards: field in frontmatter`); undeclared++; }
}
if (!undeclared) ok(`${resourceFiles.length} resource file(s) all explicitly declare boards[]`);

// ---------------------------------------------------------------------
// Summary
// ---------------------------------------------------------------------
console.log('');
if (problems) {
  console.error(`CROSS-BOARD INTEGRITY CHECK FAILED — ${problems} problem(s).`);
  process.exit(1);
} else {
  console.log('Cross-board integrity OK — 0 problems across 5 rule categories.');
}
