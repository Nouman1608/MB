#!/usr/bin/env node
/**
 * Validates the academic matrix and exports it in machine-readable form.
 * Runs as part of `npm run build` — a violation FAILS the build rather than
 * shipping a wrong or accidentally-public academic URL.
 *
 * Rules enforced:
 *   1. Every row references a known board, qualification and subject slug.
 *   2. Status is one of ACTIVE | FUTURE | UNKNOWN | NOT_SUPPORTED.
 *   3. No duplicate board+qualification+subject rows.
 *   4. ACTIVE requires a non-empty source (evidence).
 *   5. ACTIVE requires the board to be 'offered'  (blocks OCR going public).
 *   6. ACTIVE requires the qualification to be 'offered' (blocks GCSE/AS).
 *   7. ACTIVE requires that board to actually offer that qualification
 *      (blocks e.g. Edexcel/AQA O Level).
 *   8. Slugs are lowercase, hyphenated, URL-safe.
 *
 * Writes academic-matrix.json (full) and academic-matrix.csv (review copy) to
 * the repo root. Neither is published — they are review artefacts.
 */
import { writeFile } from 'node:fs/promises';
import { execSync } from 'node:child_process';

const tsx = (file) =>
  execSync(
    `node --experimental-strip-types --no-warnings -e "` +
    `import('./${file}').then(m => process.stdout.write(JSON.stringify(m.default ?? m)))"`,
    { encoding: 'utf8', cwd: process.cwd() },
  );

const { MATRIX } = JSON.parse(tsx('src/data/academic/matrix.ts'));
const { BOARDS } = JSON.parse(tsx('src/data/academic/boards.ts'));
const { QUALIFICATIONS } = JSON.parse(tsx('src/data/academic/qualifications.ts'));
const { SUBJECTS } = JSON.parse(tsx('src/data/academic/subjects.ts'));

const STATUSES = new Set(['ACTIVE', 'FUTURE', 'UNKNOWN', 'NOT_SUPPORTED']);
const EVIDENCE = new Set(['marlbridge', 'la-course', 'board', 'index', 'none']);
const SLUG = /^[a-z0-9]+(-[a-z0-9]+)*$/;

const boards = new Map(BOARDS.map((b) => [b.slug, b]));
const quals = new Map(QUALIFICATIONS.map((q) => [q.slug, q]));
const subjects = new Map(SUBJECTS.map((s) => [s.slug, s]));

const errors = [];
const seen = new Set();

for (const [i, c] of MATRIX.entries()) {
  const at = `row ${i} (${c.boardSlug}/${c.qualificationSlug}/${c.subjectSlug})`;

  if (!STATUSES.has(c.marlbridgeStatus)) errors.push(`${at}: invalid marlbridgeStatus "${c.marlbridgeStatus}"`);
  for (const [label, slug] of [['board', c.boardSlug], ['qualification', c.qualificationSlug], ['subject', c.subjectSlug]]) {
    if (!SLUG.test(slug)) errors.push(`${at}: ${label} slug "${slug}" is not URL-safe lowercase-hyphenated`);
  }

  const board = boards.get(c.boardSlug);
  const qual = quals.get(c.qualificationSlug);
  const subject = subjects.get(c.subjectSlug);
  if (!board) errors.push(`${at}: unknown board "${c.boardSlug}"`);
  if (!qual) errors.push(`${at}: unknown qualification "${c.qualificationSlug}"`);
  if (!subject) errors.push(`${at}: unknown subject "${c.subjectSlug}"`);

  const key = `${c.boardSlug}|${c.qualificationSlug}|${c.subjectSlug}`;
  if (seen.has(key)) errors.push(`${at}: duplicate combination`);
  seen.add(key);

  if (!STATUSES.has(c.boardOfferingStatus)) errors.push(`${at}: invalid boardOfferingStatus`);
  if (!EVIDENCE.has(c.evidence)) errors.push(`${at}: invalid evidence tier "${c.evidence}"`);
  if (c.evidence === 'boilerplate') errors.push(`${at}: boilerplate is never valid evidence`);

  // Marlbridge ACTIVE is the only thing that publishes a URL.
  if (c.marlbridgeStatus === 'ACTIVE') {
    if (!c.source || !c.source.trim()) errors.push(`${at}: Marlbridge ACTIVE requires a source`);
    if (c.evidence === 'index' || c.evidence === 'none') {
      errors.push(`${at}: Marlbridge ACTIVE requires evidence stronger than "${c.evidence}"`);
    }
    if (c.boardOfferingStatus !== 'ACTIVE') {
      errors.push(`${at}: Marlbridge ACTIVE but the board does not offer it (boardOfferingStatus=${c.boardOfferingStatus})`);
    }
    if (board && board.status !== 'offered') errors.push(`${at}: Marlbridge ACTIVE but board "${c.boardSlug}" is "${board.status}"`);
    if (qual && qual.status !== 'offered') errors.push(`${at}: Marlbridge ACTIVE but qualification "${c.qualificationSlug}" is "${qual.status}"`);
    if (qual && board && !qual.offeredByBoards.includes(c.boardSlug)) {
      errors.push(`${at}: Marlbridge ACTIVE but "${board.name}" is not listed as offering "${qual.name}"`);
    }
  }
}

// ---------------------------------------------------------------------------
// EXPLICIT NEGATIVE VALIDATORS (v1.0 WS5, 2026-08-18)
//
// Defense in depth: rule 7 above already blocks any ACTIVE row whose board
// isn't listed in that qualification's offeredByBoards (see qualifications.ts).
// This section hardcodes the specific forbidden board+qualification pairs
// named in the MARLBRIDGE v1.0 master directive directly, so a future edit
// to qualifications.ts's offeredByBoards arrays cannot silently reopen one
// of these — this list must independently agree with that data, not merely
// depend on it. (This exact category of gap was found and fixed in this
// same commit: qualifications.ts previously listed "aqa" as offering
// "igcse", which would have silently defeated rule 7 for that one pair.)
// ---------------------------------------------------------------------------
const FORBIDDEN_COMBINATIONS = [
  ['aqa', 'igcse'], ['aqa', 'o-level'],
  ['ocr', 'igcse'], ['ocr', 'o-level'],
  ['oxfordaqa', 'o-level'], ['oxfordaqa', 'gcse'],
];
for (const c of MATRIX) {
  if (c.marlbridgeStatus !== 'ACTIVE') continue;
  for (const [board, qual] of FORBIDDEN_COMBINATIONS) {
    if (c.boardSlug === board && c.qualificationSlug === qual) {
      errors.push(`row (${c.boardSlug}/${c.qualificationSlug}/${c.subjectSlug}): FORBIDDEN combination — "${board}" does not offer "${qual}" under any circumstance; this can never be ACTIVE.`);
    }
  }
}

// AQA / OxfordAQA are separate boards that happen to share a name — a
// syllabus code recorded under one must never also appear recorded under
// the other, since that would be exactly the kind of silent cross-board
// mislabelling the master directive calls out by name.
{
  const aqaCodes = new Set();
  const oxfordaqaCodes = new Set();
  for (const c of MATRIX) {
    if (!c.qualificationCode) continue;
    const codes = c.qualificationCode.split('/').map((s) => s.trim()).filter(Boolean);
    if (c.boardSlug === 'aqa') for (const code of codes) aqaCodes.add(code);
    if (c.boardSlug === 'oxfordaqa') for (const code of codes) oxfordaqaCodes.add(code);
  }
  for (const code of aqaCodes) {
    if (oxfordaqaCodes.has(code)) errors.push(`AQA/OxfordAQA code cross-leakage: "${code}" is recorded under both boards — a code belongs to exactly one board.`);
  }
}

// A publicly-published (ACTIVE) combination with board/marlbridge-tier
// evidence must carry a dated source, not just a bare URL — otherwise
// there is no way to tell a fact was ever actually re-checked.
const YEAR = /\b20\d{2}\b/;
for (const c of MATRIX) {
  if (c.marlbridgeStatus !== 'ACTIVE') continue;
  if (c.evidence !== 'board' && c.evidence !== 'marlbridge') continue;
  if (!YEAR.test(c.source ?? '') && !YEAR.test(c.notes ?? '')) {
    errors.push(`row (${c.boardSlug}/${c.qualificationSlug}/${c.subjectSlug}): ACTIVE with ${c.evidence}-tier evidence but no verification date (a 4-digit year) found in source or notes.`);
  }
}

if (errors.length) {
  console.error(`\nAcademic matrix validation FAILED — ${errors.length} problem(s):\n`);
  for (const e of errors) console.error(`  • ${e}`);
  console.error('');
  process.exit(1);
}

const counts = MATRIX.reduce((acc, c) => ({ ...acc, [c.marlbridgeStatus]: (acc[c.marlbridgeStatus] ?? 0) + 1 }), {});
const boardCounts = MATRIX.reduce((acc, c) => ({ ...acc, [c.boardOfferingStatus]: (acc[c.boardOfferingStatus] ?? 0) + 1 }), {});
const publishable = MATRIX.filter(
  (c) => c.marlbridgeStatus === 'ACTIVE' && c.boardOfferingStatus === 'ACTIVE'
    && boards.get(c.boardSlug)?.status === 'offered'
    && quals.get(c.qualificationSlug)?.status === 'offered'
    && quals.get(c.qualificationSlug)?.offeredByBoards.includes(c.boardSlug),
);

await writeFile('academic-matrix.json', JSON.stringify({
  generated: new Date().toISOString(),
  source: 'https://learnersacademy.com.pk/',
  marlbridgeStatusCounts: counts,
  boardOfferingStatusCounts: boardCounts,
  publishableCount: publishable.length,
  boards: BOARDS, qualifications: QUALIFICATIONS, subjects: SUBJECTS,
  matrix: MATRIX,
}, null, 2) + '\n', 'utf8');

const esc = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
await writeFile('academic-matrix.csv',
  ['board,boardSlug,qualification,qualificationSlug,subject,subjectSlug,boardOfferingStatus,marlbridgeStatus,evidence,qualificationCode,source,notes']
    .concat(MATRIX.map((c) => [c.board, c.boardSlug, c.qualification, c.qualificationSlug,
      c.subject, c.subjectSlug, c.boardOfferingStatus, c.marlbridgeStatus, c.evidence,
      c.qualificationCode, c.source, c.notes].map(esc).join(',')))
    .join('\n') + '\n', 'utf8');

console.log(`Academic matrix OK — ${MATRIX.length} rows`);
console.log(`  Marlbridge: ${Object.entries(counts).map(([k, v]) => `${k}:${v}`).join(' ')}`);
console.log(`  Board:      ${Object.entries(boardCounts).map(([k, v]) => `${k}:${v}`).join(' ')}`);
console.log(`  Publishable now: ${publishable.length}`);

// ---------------------------------------------------------------------------
// APPROVED SCOPE LOCK
// Business decision, 2026-08-18: Marlbridge teaches every subject and board
// currently represented in this repository's data model (matrix.ts, boards.ts,
// qualifications.ts) — superseding the earlier Chemistry-only scope. This is
// NOT a data-entry convenience: the list below is still a hardcoded snapshot,
// not derived live from isPublishable(), so any future row that becomes
// newly publishable WITHOUT a matching update here still fails the build.
// OCR stays excluded until its own dedicated research/approval (see boards.ts).
// If this list changes without a corresponding written approval, the build
// fails — so no academic route can go public by accident.
//
// UPDATED 2026-08-18 (v1.0 WS2, business status migration + source
// reconciliation): 20 rows that previously carried marlbridgeStatus UNKNOWN
// (English Literature across four boards, Pakistan Studies, Islamiyat,
// Geography, Global Perspectives, Environmental Management, Urdu Language,
// Statistics, Commerce) were independently re-verified against official
// awarding-body sources (cambridgeinternational.org, qualifications.pearson.com,
// aqa.org.uk) and flipped ACTIVE. Two rows (Urdu Literature at Cambridge
// IGCSE/O Level) were confirmed NOT to exist as a distinct qualification and
// were left NOT_SUPPORTED rather than fabricated. See matrix.ts for full
// per-row evidence and source URLs.
//
// UPDATED 2026-08-18 (v1.0 WS3, OCR revalidation): OCR's 12 GCSE/A-Level
// rows (already board-verified against ocr.org.uk in a prior session) were
// spot-re-verified and flipped from marlbridgeStatus FUTURE to ACTIVE under
// the same owner authorization. boards.ts and qualifications.ts updated to
// match (OCR board status offered; OCR added to gcse/a-level offeredByBoards).
//
// UPDATED 2026-08-18 (v1.0 WS4, OxfordAQA integration): added OxfordAQA as
// a fifth, fully separate board (never merged with plain AQA). 30 new
// combinations (17 International GCSE + 13 International AS/A-level)
// independently verified against live oxfordaqa.com qualification pages —
// a prior unverified snapshot table was explicitly discarded rather than
// trusted. See matrix.ts OxfordAQA rows for full evidence and source URLs.
// ---------------------------------------------------------------------------
const APPROVED = [
  'aqa|a-level|accounting',
  'aqa|a-level|biology',
  'aqa|a-level|business',
  'aqa|a-level|chemistry',
  'aqa|a-level|computer-science',
  'aqa|a-level|economics',
  'aqa|a-level|english-language',
  'aqa|a-level|english-literature',
  'aqa|a-level|law',
  'aqa|a-level|mathematics',
  'aqa|a-level|physics',
  'aqa|a-level|psychology',
  'aqa|a-level|sociology',
  'aqa|as-level|business',
  'aqa|gcse|biology',
  'aqa|gcse|business',
  'aqa|gcse|chemistry',
  'aqa|gcse|economics',
  'aqa|gcse|english-language',
  'aqa|gcse|english-literature',
  'aqa|gcse|mathematics',
  'aqa|gcse|physics',
  'aqa|gcse|psychology',
  'aqa|gcse|sociology',
  'aqa|gcse|world-history',
  'cambridge|a-level|accounting',
  'cambridge|a-level|biology',
  'cambridge|a-level|business',
  'cambridge|a-level|chemistry',
  'cambridge|a-level|computer-science',
  'cambridge|a-level|economics',
  'cambridge|a-level|english-language',
  'cambridge|a-level|english-literature',
  'cambridge|a-level|geography',
  'cambridge|a-level|global-perspectives',
  'cambridge|a-level|ict',
  'cambridge|a-level|law',
  'cambridge|a-level|mathematics',
  'cambridge|a-level|physics',
  'cambridge|a-level|psychology',
  'cambridge|a-level|sociology',
  'cambridge|a-level|world-history',
  'cambridge|igcse|accounting',
  'cambridge|igcse|biology',
  'cambridge|igcse|business',
  'cambridge|igcse|chemistry',
  'cambridge|igcse|commerce',
  'cambridge|igcse|computer-science',
  'cambridge|igcse|economics',
  'cambridge|igcse|english-literature',
  'cambridge|igcse|environmental-management',
  'cambridge|igcse|geography',
  'cambridge|igcse|global-perspectives',
  'cambridge|igcse|ict',
  'cambridge|igcse|islamiyat',
  'cambridge|igcse|mathematics',
  'cambridge|igcse|pakistan-studies',
  'cambridge|igcse|physics',
  'cambridge|igcse|sociology',
  'cambridge|igcse|statistics',
  'cambridge|igcse|urdu-language',
  'cambridge|igcse|world-history',
  'cambridge|o-level|biology',
  'cambridge|o-level|business',
  'cambridge|o-level|chemistry',
  'cambridge|o-level|commerce',
  'cambridge|o-level|computer-science',
  'cambridge|o-level|economics',
  'cambridge|o-level|english-language',
  'cambridge|o-level|environmental-management',
  'cambridge|o-level|geography',
  'cambridge|o-level|islamiyat',
  'cambridge|o-level|mathematics',
  'cambridge|o-level|pakistan-studies',
  'cambridge|o-level|physics',
  'cambridge|o-level|sociology',
  'cambridge|o-level|statistics',
  'cambridge|o-level|urdu-language',
  'cambridge|o-level|world-history',
  'edexcel|a-level|accounting',
  'edexcel|a-level|biology',
  'edexcel|a-level|business',
  'edexcel|a-level|chemistry',
  'edexcel|a-level|economics',
  'edexcel|a-level|english-literature',
  'edexcel|a-level|law',
  'edexcel|a-level|mathematics',
  'edexcel|a-level|physics',
  'edexcel|a-level|urdu-language',
  'edexcel|igcse|biology',
  'edexcel|igcse|chemistry',
  'edexcel|igcse|economics',
  'edexcel|igcse|english-language',
  'edexcel|igcse|english-literature',
  'edexcel|igcse|mathematics',
  'edexcel|igcse|physics',
  'edexcel|igcse|world-history',
  // UPDATED 2026-08-22: IB added as a sixth board (Middle Years + Diploma
  // Programme). Owner confirmed directly in chat that IB teaching has
  // started. 21 combinations: 16 DP + 5 MYP. See boards.ts/matrix.ts and
  // docs/decision-log.md D-008/D-009 for full evidence.
  'ib|ib-dp|biology',
  'ib|ib-dp|business',
  'ib|ib-dp|chemistry',
  'ib|ib-dp|computer-science',
  'ib|ib-dp|economics',
  'ib|ib-dp|environmental-systems-and-societies',
  'ib|ib-dp|geography',
  'ib|ib-dp|global-politics',
  'ib|ib-dp|language-a-language-and-literature',
  'ib|ib-dp|language-a-literature',
  'ib|ib-dp|language-b',
  'ib|ib-dp|mathematics-analysis-and-approaches',
  'ib|ib-dp|mathematics-applications-and-interpretation',
  'ib|ib-dp|physics',
  'ib|ib-dp|psychology',
  'ib|ib-dp|world-history',
  'ib|ib-myp|mathematics',
  'ib|ib-myp|myp-design',
  'ib|ib-myp|myp-individuals-and-societies',
  'ib|ib-myp|myp-language-acquisition',
  'ib|ib-myp|myp-sciences',
  'ocr|a-level|biology',
  'ocr|a-level|business',
  'ocr|a-level|chemistry',
  'ocr|a-level|economics',
  'ocr|a-level|mathematics',
  'ocr|a-level|physics',
  'ocr|gcse|biology',
  'ocr|gcse|business',
  'ocr|gcse|chemistry',
  'ocr|gcse|economics',
  'ocr|gcse|mathematics',
  'ocr|gcse|physics',
  'oxfordaqa|a-level|accounting',
  'oxfordaqa|a-level|biology',
  'oxfordaqa|a-level|business',
  'oxfordaqa|a-level|chemistry',
  'oxfordaqa|a-level|computer-science',
  'oxfordaqa|a-level|economics',
  'oxfordaqa|a-level|english-language',
  'oxfordaqa|a-level|english-literature',
  'oxfordaqa|a-level|geography',
  'oxfordaqa|a-level|mathematics',
  'oxfordaqa|a-level|physics',
  'oxfordaqa|a-level|psychology',
  'oxfordaqa|a-level|sociology',
  'oxfordaqa|igcse|accounting',
  'oxfordaqa|igcse|biology',
  'oxfordaqa|igcse|business',
  'oxfordaqa|igcse|chemistry',
  'oxfordaqa|igcse|computer-science',
  'oxfordaqa|igcse|economics',
  'oxfordaqa|igcse|english-language',
  'oxfordaqa|igcse|english-literature',
  'oxfordaqa|igcse|geography',
  'oxfordaqa|igcse|islamiyat',
  'oxfordaqa|igcse|mathematics',
  'oxfordaqa|igcse|pakistan-studies',
  'oxfordaqa|igcse|physics',
  'oxfordaqa|igcse|psychology',
  'oxfordaqa|igcse|sociology',
  'oxfordaqa|igcse|urdu-language',
  'oxfordaqa|igcse|world-history',
].sort();

const actual = publishable.map((c) => `${c.boardSlug}|${c.qualificationSlug}|${c.subjectSlug}`).sort();
const same = actual.length === APPROVED.length && actual.every((v, i) => v === APPROVED[i]);
if (!same) {
  console.error('\nAPPROVED SCOPE LOCK FAILED — publishable set does not match the approved scope.');
  console.error(`  approved:    ${APPROVED.join(', ')}`);
  console.error(`  publishable: ${actual.join(', ') || '(none)'}`);
  console.error('  Update APPROVED in this script only alongside a written approval.\n');
  process.exit(1);
}
console.log(`  Approved scope lock: OK (${APPROVED.length} combinations).`);
