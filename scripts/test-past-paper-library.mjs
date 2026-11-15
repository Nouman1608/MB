#!/usr/bin/env node
/**
 * D-TBD (15 Nov 2026) -- the past-paper library publishes nothing until the
 * manifest lists something.
 *
 * This repository never ships a placeholder: no empty page, no empty section,
 * no "coming soon". For the library that means an empty manifest must give
 * no page, no link on a course page and no sitemap URL, and a manifest entry
 * must give a listing. This test proves both without running a build, by
 * calling the functions that decide what is generated
 * (src/utils/past-papers/library.ts and manifest.ts): the pages' own
 * getStaticPaths and the course page's link are those functions and nothing
 * else, and the sitemap is built from the pages that exist.
 *
 *   [A] No entries: no path, no index, no course page, no link on any of the
 *       active courses.
 *   [B] The committed manifest: whatever it holds, pages exist only for
 *       courses with entries. While it is empty (as shipped) that is nothing.
 *   [C] A fixture entry, in a temporary folder: a listing by year and
 *       session, for that course and no other.
 *   [D] Broken fixtures: each rule of checkManifest() rejects its case.
 *   [E] The same fixture placed in the real manifest folder, read by the
 *       real loader and the real validator, then removed, and the folder
 *       checked to be exactly as it was.
 *   [F] Only the library's own pages and the course page read the manifest,
 *       so nothing else on the site can change when it does.
 *
 * The fixture names a real course so that it passes the course rule, and a
 * file address that does not exist. It is never committed.
 *
 * Run: node --experimental-strip-types scripts/test-past-paper-library.mjs
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { activeOnly } from '../src/utils/academic/index.ts';
import { courseCodes } from '../src/utils/academic/course-codes.ts';
import { BOARD_SESSIONS, PAST_PAPER_FILE_HOSTS, PAST_PAPER_PUBLIC_PREFIX } from '../src/data/past-papers/config.ts';
import { COURSES_DIR, checkManifest, courseFileName, loadLibrary, readCourseFiles } from '../src/utils/past-papers/manifest.ts';
import {
  PAST_PAPERS_INDEX_PATH, courseLibrary, courseListing, courseStaticPaths, hubLibraryLink, indexStaticPaths,
  libraryCourses, libraryPaths, pastPapersCoursePath,
} from '../src/utils/past-papers/library.ts';

let passed = 0;
let failed = 0;
const check = (ok, label, detail = '') => {
  if (ok) { console.log(`  ✓ ${label}`); passed++; } else { console.log(`  ✗ ${label}${detail ? `\n      ${detail}` : ''}`); failed++; }
};
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);

const active = activeOnly();
const realDir = resolve(process.cwd(), COURSES_DIR);
const dirListing = () => (existsSync(realDir) ? readdirSync(realDir).sort() : []);

console.log('Past-paper library — nothing is generated without a manifest entry\n');

// ---------------------------------------------------------------------------
console.log('[A] No entries');
{
  const none = checkManifest([]);
  check(none.entries.length === 0 && none.problems.length === 0, 'an empty manifest is valid and has no entries');
  check(readCourseFiles(join(tmpdir(), 'mb-no-such-folder')).length === 0, 'a missing manifest folder reads as empty');
  check(same(libraryPaths([]), []), 'no URL path is generated');
  check(same(indexStaticPaths([]), []), 'getStaticPaths for /past-papers/ is empty: the index page does not exist');
  check(same(courseStaticPaths([]), []), 'getStaticPaths for the course pages is empty: no course page exists');
  check(same(libraryCourses([]), []), 'no course is listed');
  const linked = active.filter((c) => hubLibraryLink(c, []) !== undefined || courseLibrary(c, []) !== undefined);
  check(linked.length === 0, `none of the ${active.length} active course pages gets a past-papers link`, linked.map((c) => pastPapersCoursePath(c)).join(', '));
}

// ---------------------------------------------------------------------------
console.log('\n[B] The committed manifest');
const committedFiles = readCourseFiles();
let committed = [];
{
  let loadError = '';
  try { committed = loadLibrary(); } catch (e) { loadError = e.message; }
  check(loadError === '', 'the committed manifest loads (every entry passes the rules)', loadError);
  const withEntries = new Set(committed.map((e) => `${e.board}/${e.qualification}/${e.subject}`));
  const paths = libraryPaths();
  const expected = withEntries.size === 0 ? [] : [PAST_PAPERS_INDEX_PATH, ...active.filter((c) => withEntries.has(`${c.boardSlug}/${c.qualificationSlug}/${c.subjectSlug}`)).map(pastPapersCoursePath)];
  check(same(paths, expected), `pages exist only for courses with entries (${paths.length} path(s) for ${withEntries.size} course(s))`, `got ${JSON.stringify(paths)}`);
  const stray = active.filter((c) => !withEntries.has(`${c.boardSlug}/${c.qualificationSlug}/${c.subjectSlug}`) && hubLibraryLink(c) !== undefined);
  check(stray.length === 0, 'a course without entries gets no past-papers link');
  if (committedFiles.length === 0) {
    check(committed.length === 0 && paths.length === 0 && indexStaticPaths().length === 0 && courseStaticPaths().length === 0,
      'the manifest is empty, as shipped: no page, no link and no sitemap URL comes from it');
  } else {
    console.log(`  · the manifest holds ${committedFiles.length} course file(s) and ${committed.length} document(s)`);
  }
}

// ---------------------------------------------------------------------------
// The fixture: a real active course that has no course file in the manifest.
const taken = new Set(committedFiles.map((f) => f.source));
const fixtureCourse =
  active.find((c) => c.boardSlug === 'cambridge' && c.qualificationSlug === 'igcse' && c.subjectSlug === 'chemistry' && !taken.has(courseFileName(c.boardSlug, c.qualificationSlug, c.subjectSlug, [...courseCodes(c)][0])))
  ?? active.find((c) => BOARD_SESSIONS[c.boardSlug].length > 0 && courseCodes(c).size > 0 && !taken.has(courseFileName(c.boardSlug, c.qualificationSlug, c.subjectSlug, [...courseCodes(c)][0])));
if (!fixtureCourse) {
  console.log('\n  ✗ no active course is free to carry the fixture');
  process.exit(1);
}
const fc = fixtureCourse;
const code = [...courseCodes(fc)][0];
const session = BOARD_SESSIONS[fc.boardSlug].find((s) => s !== 'specimen');
const host = PAST_PAPER_FILE_HOSTS[0];
const fixtureName = courseFileName(fc.boardSlug, fc.qualificationSlug, fc.subjectSlug, code);
const fileUrl = (name) => `https://${host}/test-fixture/${name}`;
const FIXTURE_NOTE = 'Test fixture only: this is not a rights statement.';
const fixture = () => ({
  board: fc.boardSlug,
  qualification: fc.qualificationSlug,
  subject: fc.subjectSlug,
  syllabusCode: code,
  rightsNote: FIXTURE_NOTE,
  files: [
    { year: 2024, session, paper: '4', variant: '2', type: 'question-paper', file: fileUrl('qp-4-2.pdf') },
    { year: 2024, session, paper: '4', variant: '2', type: 'mark-scheme', file: fileUrl('ms-4-2.pdf') },
    { year: 2024, session, type: 'examiner-report', file: fileUrl('er.pdf') },
    { year: 2023, session, paper: '2', type: 'question-paper', file: fileUrl('qp-2-2023.pdf') },
  ],
});
const ctx = { hosts: PAST_PAPER_FILE_HOSTS, rightsNotes: {}, publicDir: resolve(process.cwd(), 'public'), currentYear: 2026 };
const checkFixture = (data, name = fixtureName, context = ctx) => checkManifest([{ source: name, data }], context);

// ---------------------------------------------------------------------------
console.log(`\n[C] A fixture entry (${fc.board} ${fc.qualification} ${fc.subject} ${code}, in a temporary folder)`);
const tmp = mkdtempSync(join(tmpdir(), 'mb-past-papers-'));
try {
  check(readCourseFiles(tmp).length === 0, 'an empty manifest folder reads as empty');
  writeFileSync(join(tmp, fixtureName), JSON.stringify(fixture(), null, 2));
  const { entries, problems } = checkManifest(readCourseFiles(tmp), ctx);
  check(problems.length === 0 && entries.length === 4, 'the fixture file is read from disk and all 4 documents pass the rules', problems.join(' | '));
  check(entries.every((e) => e.board === fc.boardSlug && e.qualification === fc.qualificationSlug && e.subject === fc.subjectSlug && e.syllabusCode === code && e.rightsNote === FIXTURE_NOTE),
    'every entry carries the course identity, the syllabus code and the rights note');
  const coursePath = pastPapersCoursePath(fc);
  check(same(libraryPaths(entries), [PAST_PAPERS_INDEX_PATH, coursePath]), `the paths generated are the index and ${coursePath}, and no other`);
  check(indexStaticPaths(entries).length === 1 && courseStaticPaths(entries).length === 1, 'getStaticPaths now yields the index page and one course page');
  const link = hubLibraryLink(fc, entries);
  check(link?.href === coursePath && /^4 documents published by /.test(link?.detail ?? ''), 'the course page gets a link that states the count and the board', JSON.stringify(link));
  const others = active.filter((c) => c !== fc && hubLibraryLink(c, entries) !== undefined);
  check(others.length === 0, `the other ${active.length - 1} course pages get no link`);
  const listing = courseListing(libraryCourses(entries)[0]);
  check(same(listing.map((y) => y.year), [2024, 2023]), 'the listing is by year, newest first');
  check(listing[0].sessions.length === 1 && listing[0].sessions[0].label.endsWith(' 2024') && listing[0].sessions[0].count === 3, 'each year is divided by session, named with its year');
  const rows = listing[0].sessions[0].papers;
  check(same(rows.map((r) => r.label), ['Paper 4, variant 2', 'Whole series']), 'documents are grouped by paper and variant; a document with no paper is listed for the whole series');
  check(same(rows[0].documents.map((d) => d.label), ['Question paper', 'Mark scheme']) && rows[1].documents[0].label === 'Examiner report', 'each link is labelled with what the document is');
  const names = listing.flatMap((y) => y.sessions.flatMap((s) => s.papers.flatMap((p) => p.documents.map((d) => d.accessibleName))));
  check(new Set(names).size === names.length && names.every((n) => n.includes(fc.board) && n.includes(code)), 'every link has its own accessible name, which names the board and the syllabus code');
  const wording = JSON.stringify([link, listing]);
  check(!/\b(official|free)\b/i.test(wording), 'no generated label says "official" or "free"');
} finally {
  rmSync(tmp, { recursive: true, force: true });
}

// ---------------------------------------------------------------------------
console.log('\n[D] Broken fixtures are rejected');
{
  const rejects = (label, rule, data, { name = fixtureName, context = ctx } = {}) => {
    const { problems, entries } = checkFixture(data, name, context);
    const hit = problems.some((p) => p.startsWith(`[${rule}]`));
    check(hit, `[${rule}] ${label}`, `problems: ${JSON.stringify(problems)}; entries: ${entries.length}`);
  };
  const withFile = (patch, index = 0) => { const f = fixture(); f.files[index] = { ...f.files[index], ...patch }; return f; };
  const without = (obj, key) => { const copy = { ...obj }; delete copy[key]; return copy; };

  check(checkManifest([{ source: fixtureName, data: undefined, parseError: 'not valid JSON (test)' }], ctx).problems[0]?.startsWith('[1]'), '[1] a file that is not valid JSON');
  rejects('a course file under the wrong name', 1, fixture(), { name: 'papers.json' });
  rejects('an unknown field (a misspelt "varient")', 1, withFile({ varient: '2' }));
  rejects('a course file with no documents', 1, { ...fixture(), files: [] });
  rejects('a course that is not in the academic matrix', 2, { ...fixture(), subject: 'astrology' });
  rejects('a syllabus code that is not one of the course\'s codes', 2, { ...fixture(), syllabusCode: '0000' });
  rejects('a session the vocabulary does not have', 3, withFile({ session: 'summer' }));
  const offSession = Object.keys({ january: 1, march: 1, june: 1, october: 1, november: 1 }).find((s) => !BOARD_SESSIONS[fc.boardSlug].includes(s));
  if (offSession) rejects(`a session ${fc.board} does not run ("${offSession}")`, 3, withFile({ session: offSession }));
  rejects('a year in the future', 3, withFile({ year: 2031 }));
  rejects('a year that is not a whole number', 3, withFile({ year: '2024' }));
  rejects('a document type that is not in DOCUMENT_TYPES', 4, withFile({ type: 'confidential-instructions' }));
  rejects('a question paper with no paper named', 4, { ...fixture(), files: [without(fixture().files[0], 'paper')] });
  rejects('a variant with no paper', 4, withFile({ variant: '2' }, 2));
  rejects('two entries for the same document', 5, { ...fixture(), files: [...fixture().files, { ...fixture().files[0], file: fileUrl('copy.pdf') }] });
  rejects('one file listed as two documents', 6, withFile({ file: fileUrl('qp-4-2.pdf') }, 1));
  rejects('a URL on a host that is not allow-listed', 6, withFile({ file: 'https://papers.example.org/qp-4-2.pdf' }));
  rejects('a URL that is not https', 6, withFile({ file: `http://${host}/test-fixture/qp-4-2.pdf` }));
  rejects('a path under public/ that does not exist', 6, withFile({ file: `${PAST_PAPER_PUBLIC_PREFIX}test-fixture/qp-4-2.pdf` }));
  rejects('a path outside the papers folder', 6, withFile({ file: '/images/logo.pdf' }));
  rejects('a file of the wrong type', 6, withFile({ file: fileUrl('qp-4-2.docx') }));
  rejects('a Cambridge Confidential Instructions file', 6, withFile({ file: fileUrl('0620_s24_ci_52.pdf') }));
  rejects('no rights note for the board, the course or the entry', 7, without(fixture(), 'rightsNote'));
  rejects('a rights note too short to record a basis', 7, { ...fixture(), rightsNote: 'ok' });
  rejects('a placeholder rights note', 7, { ...fixture(), rightsNote: 'TODO: the owner will fill this in later' });
  const boardNote = checkFixture(without(fixture(), 'rightsNote'), fixtureName, { ...ctx, rightsNotes: { [fc.boardSlug]: FIXTURE_NOTE } });
  check(boardNote.problems.length === 0 && boardNote.entries.every((e) => e.rightsNote === FIXTURE_NOTE), '[7] a note recorded for the board covers its entries');

  // A path under public/ is accepted only when the file is really there.
  const pub = mkdtempSync(join(tmpdir(), 'mb-public-'));
  try {
    mkdirSync(join(pub, PAST_PAPER_PUBLIC_PREFIX, 'test-fixture'), { recursive: true });
    writeFileSync(join(pub, PAST_PAPER_PUBLIC_PREFIX, 'test-fixture', 'qp-4-2.pdf'), '');
    const local = checkFixture(withFile({ file: `${PAST_PAPER_PUBLIC_PREFIX}test-fixture/qp-4-2.pdf` }), fixtureName, { ...ctx, publicDir: pub });
    check(local.problems.length === 0, '[6] a path under public/papers/ is accepted when the file exists', local.problems.join(' | '));
  } finally {
    rmSync(pub, { recursive: true, force: true });
  }
}

// ---------------------------------------------------------------------------
console.log('\n[E] The fixture in the real manifest folder, then restored');
{
  const node = (args) => {
    try {
      return { code: 0, out: execFileSync(process.execPath, ['--experimental-strip-types', '--no-warnings', ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }) };
    } catch (e) {
      return { code: e.status ?? 1, out: `${e.stdout ?? ''}${e.stderr ?? ''}` };
    }
  };
  const realPaths = () => node(['-e', "import('./src/utils/past-papers/library.ts').then((m) => process.stdout.write(JSON.stringify(m.libraryPaths())))"]);
  const before = dirListing();
  const pathsBefore = realPaths();
  const validatorBefore = node(['scripts/validate-past-papers.mjs']);
  const target = join(realDir, fixtureName);
  check(!existsSync(target), `${COURSES_DIR}/${fixtureName} does not exist before the test`);
  if (!existsSync(target)) {
    const createdDir = !existsSync(realDir);
    // Also removed if the run is interrupted between here and the finally block.
    const removeFixture = () => { rmSync(target, { force: true }); if (createdDir) rmSync(realDir, { recursive: true, force: true }); };
    process.on('exit', removeFixture);
    process.on('SIGINT', () => process.exit(130));
    try {
      mkdirSync(realDir, { recursive: true });
      writeFileSync(target, JSON.stringify(fixture(), null, 2));
      const during = realPaths();
      const expected = [...new Set([PAST_PAPERS_INDEX_PATH, ...JSON.parse(pathsBefore.out || '[]'), pastPapersCoursePath(fc)])];
      check(during.code === 0 && same([...JSON.parse(during.out)].sort(), expected.sort()), `the real loader now generates ${pastPapersCoursePath(fc)}`, during.out);
      const validator = node(['scripts/validate-past-papers.mjs']);
      const lines = validator.out.split('\n').filter((l) => l.includes('✗'));
      check(lines.every((l) => /✗ \[8\]/.test(l)), 'the real validator finds no fault in the fixture itself (rules [1] to [7])', validator.out);
      const policySaysNoReproduction = /does not reproduce[^.]*past-exam questions/i.test(readFileSync('src/pages/legal/editorial-policy.astro', 'utf8').replace(/\s+/g, ' '));
      if (policySaysNoReproduction) {
        check(validator.code !== 0 && lines.some((l) => l.includes('editorial-policy.astro')), '[8] and it stops the build while the editorial policy still says Marlbridge does not reproduce past papers');
      }
      const guide = `src/content/resources/cambridge-igcse-chemistry-0620-past-papers.md`;
      if (fixtureName === 'cambridge-igcse-chemistry-0620.json' && existsSync(guide) && /\b(?:do|does) not host\b/i.test(readFileSync(guide, 'utf8'))) {
        check(lines.some((l) => l.includes('cambridge-igcse-chemistry-0620-past-papers.md')), '[8] and while that course\'s guide still says "We do not host any papers"');
      }
    } finally {
      removeFixture();
    }
    check(!existsSync(target) && same(dirListing(), before), 'the fixture is removed and the manifest folder is exactly as it was');
    const pathsAfter = realPaths();
    check(pathsAfter.code === pathsBefore.code && pathsAfter.out === pathsBefore.out, `the real loader is back to its earlier output (${pathsBefore.out || 'error'})`);
    const validatorAfter = node(['scripts/validate-past-papers.mjs']);
    check(validatorAfter.code === validatorBefore.code && validatorAfter.out === validatorBefore.out, `the real validator is back to its earlier result (exit ${validatorBefore.code})`, validatorAfter.out);
  }
}

// ---------------------------------------------------------------------------
console.log('\n[F] What reads the manifest');
{
  // Every source file that imports the library. If a page is added to this
  // list, it must render nothing for an empty manifest, and say so here.
  const ALLOWED = [
    'src/pages/boards/[board]/[qualification]/[subject].astro',
    'src/pages/past-papers/[...root].astro',
    'src/pages/past-papers/[board]/[qualification]/[subject].astro',
    'src/utils/past-papers/library.ts',
    'src/utils/past-papers/manifest.ts',
  ];
  const walk = (dir, out = []) => {
    for (const name of readdirSync(dir)) {
      if (name === 'content') continue; // Markdown content cannot import code.
      const p = join(dir, name);
      if (statSync(p).isDirectory()) walk(p, out);
      else if (/\.(astro|ts|mjs|js)$/.test(name)) out.push(p);
    }
    return out;
  };
  const readers = [...walk('src'), 'astro.config.mjs']
    .filter((p) => /from\s+['"][^'"]*past-papers\/[^'"]*['"]/.test(readFileSync(p, 'utf8')))
    .map((p) => p.split('\\').join('/'))
    .sort();
  check(same(readers, [...ALLOWED].sort()), 'only the library pages, the course page and the library\'s own modules import it', `importers: ${readers.join(', ')}`);
  check(!readers.includes('astro.config.mjs'), 'the sitemap has no rule of its own for the library: it lists the pages that exist');
}

console.log(`\n${failed === 0 ? 'PASS' : 'FAIL'}: ${passed} check(s) passed, ${failed} failed.`);
process.exit(failed === 0 ? 0 : 1);
