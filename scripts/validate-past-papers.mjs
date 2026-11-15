#!/usr/bin/env node
/**
 * D-TBD (15 Nov 2026) -- build-failing checks for the past-paper library
 * manifest (src/data/past-papers/courses/*.json, settings in
 * src/data/past-papers/config.ts).
 *
 * Owner decision, 15 Nov 2026: "I will take full responsibility of the
 * licensing; host the past papers." The owner supplies the files and lists
 * them in the manifest; this script decides whether a listing may be built
 * from it. It reads source files only: no build, no network. A file URL is
 * checked against the allow-list of hosts, not fetched.
 *
 * Rules [1] to [7] live in src/utils/past-papers/manifest.ts (checkManifest),
 * the same function the pages load the library through, so the script and
 * the build cannot disagree:
 *
 *   [1] Course file  valid JSON, known fields only, named
 *                    <board>-<qualification>-<subject>-<code>.json.
 *   [2] Course       an active course in the academic matrix, and one of
 *                    that course's syllabus codes.
 *   [3] Session      a session recorded for the board in BOARD_SESSIONS, and
 *                    a whole-number year that is not in the future.
 *   [4] Document     a type in DOCUMENT_TYPES; a paper where the type needs
 *                    one; a variant only with a paper.
 *   [5] Identity     no two entries with the same course, code, year,
 *                    session, paper, variant and type.
 *   [6] File         a file that exists under public/papers/, or an https
 *                    URL on a host in PAST_PAPER_FILE_HOSTS; the right file
 *                    type; listed once; not Confidential Instructions (D-111).
 *   [7] Rights note  the owner's note on the basis for hosting, for the
 *                    board, the course file or the entry.
 *
 * One rule is checked here, because it reads pages, not the manifest:
 *
 *   [8] Copy         once the library lists a document, no page may still
 *                    say that Marlbridge does not host or reproduce papers:
 *                    the editorial policy's copyright paragraph, and the
 *                    past-papers guide of each course that has entries
 *                    ("We do not host any papers"). The same "they cannot
 *                    both be true" guard as validate-commercial-claims.mjs.
 *
 * An empty manifest passes: nothing is listed, so nothing is generated.
 * Run: node --experimental-strip-types scripts/validate-past-papers.mjs
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { readCourseFiles, checkManifest, COURSES_DIR } from '../src/utils/past-papers/manifest.ts';
import { libraryCourses, libraryPaths } from '../src/utils/past-papers/library.ts';

const rawFiles = readCourseFiles();
const { entries, problems } = checkManifest(rawFiles);

// ---- [8] Copy that a hosted document would contradict ----------------------
const EDITORIAL_POLICY = 'src/pages/legal/editorial-policy.astro';
const RESOURCES_DIR = 'src/content/resources';
const NO_REPRODUCTION = /does not reproduce[^.]*past-exam questions/i;
const NO_HOSTING = /\b(?:do|does) not host\b[^.;:]*/i;

if (rawFiles.length > 0) {
  if (existsSync(EDITORIAL_POLICY)) {
    const policy = readFileSync(EDITORIAL_POLICY, 'utf8').replace(/\s+/g, ' ');
    if (NO_REPRODUCTION.test(policy)) {
      problems.push(`[8] ${EDITORIAL_POLICY}: the "Copyright and original questions" paragraph still says Marlbridge "does not reproduce ... past-exam questions, or mark schemes", while the manifest lists hosted exam-board documents. The owner must reword that paragraph before the first document is listed (the ar/ur/bn versions in src/i18n/pages/legal.ts need the same check by a translator).`);
    }
  }

  const frontmatterList = (fm, field) =>
    (fm.match(new RegExp(`^${field}:\\s*\\[([^\\]]*)\\]`, 'm'))?.[1] ?? '').split(',').map((v) => v.trim().replace(/["']/g, '')).filter(Boolean);
  const guides = existsSync(RESOURCES_DIR)
    ? readdirSync(RESOURCES_DIR).filter((f) => f.endsWith('.md')).flatMap((file) => {
        const text = readFileSync(`${RESOURCES_DIR}/${file}`, 'utf8').replace(/\r\n/g, '\n');
        const fm = text.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
        if (!/^resourceType:\s*"?past-papers"?\s*$/m.test(fm)) return [];
        const claim = text.slice(text.indexOf('\n---', 4)).match(NO_HOSTING)?.[0];
        return [{ file, boards: frontmatterList(fm, 'boards'), codes: frontmatterList(fm, 'syllabusCodes').map((c) => c.toUpperCase()), claim }];
      })
    : [];
  for (const course of libraryCourses(entries)) {
    const board = course.combination.boardSlug;
    for (const guide of guides) {
      if (!guide.claim || !guide.boards.includes(board) || !guide.codes.some((code) => course.codes.includes(code))) continue;
      problems.push(`[8] ${RESOURCES_DIR}/${guide.file}: the guide says "${guide.claim.trim()}", but the manifest lists ${course.entries.length} hosted document(s) for ${course.combination.board} ${course.combination.qualification} ${course.combination.subject} (${course.codes.join(', ')}). Update that sentence (it can link to ${course.path}).`);
    }
  }
}

if (problems.length > 0) {
  console.error('Past-paper manifest validation FAILED:');
  for (const p of problems) console.error(`  ✗ ${p}`);
  console.error(`\n${problems.length} problem(s) found across ${rawFiles.length} course file(s) in ${COURSES_DIR}/.`);
  process.exit(1);
}

if (rawFiles.length === 0) {
  console.log(`Past-paper manifest OK — empty (no course files in ${COURSES_DIR}/): no library page, link or sitemap URL is generated.`);
} else {
  const courses = libraryCourses(entries);
  console.log(`Past-paper manifest OK — ${rawFiles.length} course file(s), ${entries.length} document(s) for ${courses.length} course(s); ${libraryPaths(entries).length} page(s) will be generated.`);
}
