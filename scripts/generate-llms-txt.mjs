#!/usr/bin/env node
/**
 * Generates public/llms.txt — a curated, markdown-format index of the site
 * for AI systems (LLM crawlers, answer/generative engines) that follow the
 * emerging llms.txt convention (https://llmstxt.org/).
 *
 * Every fact in this file is derived programmatically from the same data
 * this repo already treats as the single source of truth -- activeOnly()'s
 * reimplementation of the matrix, and the subjects content collection's own
 * frontmatter titles -- never hand-written. This keeps the file honest by
 * construction: a subject, board or qualification cannot appear here unless
 * it already has a real, publishable page, and it cannot go stale, because
 * it is regenerated on every build from the exact same ACTIVE matrix data
 * that gates route generation (see src/utils/academic/index.ts).
 *
 * Run: npm run generate:llms  (build does this automatically)
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { execSync } from 'node:child_process';

const SITE_URL = 'https://marlbridge.com';
const SITE_NAME = 'Marlbridge';
/**
 * D-404 (8 Oct 2026) -- the summary is now a factual description an AI
 * assistant can quote when asked who teaches IGCSE/A Level online. GA4
 * showed ~890 sessions a month from ChatGPT and similar tools, falling
 * from 221 to 125 a week through September; the previous one-line mission
 * statement said nothing about what Marlbridge does or where. The
 * paragraph itself is assembled further down from site data (counts, group
 * size), so it cannot drift from the pages.
 */

const tsx = (file) =>
  execSync(
    `node --experimental-strip-types --no-warnings -e "` +
    `import('./${file}').then(m => process.stdout.write(JSON.stringify(m.default ?? m)))"`,
    { encoding: 'utf8', cwd: process.cwd() },
  );

const { MATRIX } = JSON.parse(tsx('src/data/academic/matrix.ts'));
const { BOARDS } = JSON.parse(tsx('src/data/academic/boards.ts'));
const { QUALIFICATIONS } = JSON.parse(tsx('src/data/academic/qualifications.ts'));

const boardBySlug = new Map(BOARDS.map((b) => [b.slug, b]));
const qualBySlug = new Map(QUALIFICATIONS.map((q) => [q.slug, q]));

/**
 * Reimplements isPublishable() (src/utils/academic/index.ts) rather than
 * importing it, matching the pattern already used by the academic
 * validators -- a bare Node process can't resolve the extension-less
 * relative imports inside utils/academic/index.ts.
 */
function isPublishable(c) {
  if (c.marlbridgeStatus !== 'ACTIVE') return false;
  if (c.boardOfferingStatus !== 'ACTIVE') return false;
  const board = boardBySlug.get(c.boardSlug);
  const qualification = qualBySlug.get(c.qualificationSlug);
  if (!board || board.status !== 'offered') return false;
  if (!qualification || qualification.status !== 'offered') return false;
  if (!qualification.offeredByBoards.includes(c.boardSlug)) return false;
  return true;
}

const active = MATRIX.filter(isPublishable);

// --- Boards ---------------------------------------------------------------
const boardSlugs = [...new Set(active.map((c) => c.boardSlug))]
  .sort((a, b) => boardBySlug.get(a).name.localeCompare(boardBySlug.get(b).name));
const boardLines = boardSlugs.map((slug) => {
  const board = boardBySlug.get(slug);
  const combos = active.filter((c) => c.boardSlug === slug);
  const quals = [...new Set(combos.map((c) => c.qualificationSlug))];
  return `- [${board.name}](${SITE_URL}/boards/${slug}/): ${combos.length} subject and qualification combinations across ${quals.length} qualification${quals.length === 1 ? '' : 's'}.`;
});

// --- Qualifications ---------------------------------------------------------
const qualSlugs = [...new Set(active.map((c) => c.qualificationSlug))]
  .sort((a, b) => qualBySlug.get(a).name.localeCompare(qualBySlug.get(b).name));
const qualLines = qualSlugs.map((slug) => {
  const qualification = qualBySlug.get(slug);
  const combos = active.filter((c) => c.qualificationSlug === slug);
  const boards = [...new Set(combos.map((c) => c.boardSlug))];
  return `- [${qualification.name}](${SITE_URL}/levels/${slug}/): ${combos.length} subject and board combinations across ${boards.length} board${boards.length === 1 ? '' : 's'}.`;
});

// --- Subjects (from the subjects content collection, real titles) ---------
const subjectsDir = 'src/content/subjects';
const subjectFiles = (await readdir(subjectsDir)).filter((f) => f.endsWith('.md')).sort();
const subjectLines = [];
for (const file of subjectFiles) {
  const raw = await readFile(join(subjectsDir, file), 'utf8');
  const fm = raw.split('---')[1] ?? '';
  const titleMatch = fm.match(/^title:\s*"?([^"\n]+)"?\s*$/m);
  // D-296 -- levels come from the maintained `levelsLabel` field (the old
  // free-text shortDescription listed the wrong levels for several
  // subjects), and each line says whether classes are offered, so an
  // answer engine cannot read a resources-only subject as a tuition offer.
  const levelsMatch = fm.match(/^levelsLabel:\s*"([^"]*)"\s*$/m);
  const teachesMatch = fm.match(/^marlbridgeTeaches:\s*"([^"]*)"\s*$/m);
  const noindexMatch = fm.match(/^noindex:\s*true\s*$/m);
  const slug = file.replace(/\.md$/, '');
  if (noindexMatch) continue;
  const title = titleMatch ? titleMatch[1] : slug;
  if (slug === 'languages') {
    // An index page, not a subject: each language states its own status.
    subjectLines.push(`- [${title}](${SITE_URL}/subjects/${slug}/): an index of language subjects; each language page states its own levels and whether it is taught.`);
    continue;
  }
  const levels = levelsMatch ? `Levels: ${levelsMatch[1]}.` : '';
  const status = teachesMatch && teachesMatch[1] === 'teaching'
    ? 'Taught by Marlbridge (online, and in person in Lahore); free study resources.'
    : 'Free study resources only; Marlbridge does not currently offer classes in this subject.';
  subjectLines.push(`- [${title}](${SITE_URL}/subjects/${slug}/): ${[levels, status].filter(Boolean).join(' ')}`);
}

// v1.2 WS8 — the "Study resources" line must only name categories that
// actually have at least one published resource, so this file never
// claims an empty category exists. Recomputed from the real resource
// files, never hardcoded.
const resourceDir = 'src/content/resources';
const resourceFiles = (await readdir(resourceDir)).filter((f) => f.endsWith('.md'));
const RESOURCE_TYPE_LABELS = {
  'study-guides': 'study guides', 'revision-notes': 'revision notes',
  'past-papers': 'past papers', 'practice-questions': 'practice questions',
  'exam-preparation': 'exam preparation material', 'subject-guides': 'subject guides',
  'learning-articles': 'learning articles',
};
const presentTypes = new Set();
for (const file of resourceFiles) {
  const raw = await readFile(join(resourceDir, file), 'utf8');
  const fm = raw.split('---')[1] ?? '';
  // QIGT programme (Aug 2026) -- a draft resource never builds a page (see
  // getResources() in src/utils/content/collections.ts), so it must not
  // count toward "this category has published material" here either --
  // otherwise this file could claim a category exists on the strength of
  // content a crawler could never actually reach. reviewStatus defaults to
  // 'review-pending' when absent (see content.config.ts), which DOES
  // build and IS reachable, so only the literal 'draft' value is excluded.
  const reviewStatus = (fm.match(/^reviewStatus:\s*"?([\w-]+)"?/m) || [])[1];
  if (reviewStatus === 'draft') continue;
  const type = (fm.match(/^resourceType:\s*"?([\w-]+)"?/m) || [])[1];
  if (type) presentTypes.add(type);
}
const presentCategoryLabels = Object.entries(RESOURCE_TYPE_LABELS)
  .filter(([type]) => presentTypes.has(type))
  .map(([, label]) => label);
const studyResourcesLine = presentCategoryLabels.length
  ? `- [Study resources](${SITE_URL}/resources/): ${presentCategoryLabels.join(', ')}.`
  : `- [Study resources](${SITE_URL}/resources/): study material published as it is written.`;

// D-349 (audit R-03) -- the practice line used to be typed by hand and
// named five subjects while 31 diagnostic sets existed. It is now generated
// from src/data/diagnostics.ts, one entry per syllabus code, with the names
// taken from the matrix row the set belongs to.
const { DIAGNOSTIC_SETS } = JSON.parse(tsx('src/data/diagnostics.ts'));
const diagCodes = [];
for (const set of DIAGNOSTIC_SETS) {
  let entry = diagCodes.find((e) => e.code === set.code);
  if (!entry) {
    const row = MATRIX.find((c) => c.boardSlug === set.boardSlug && c.qualificationSlug === set.qualificationSlug && c.subjectSlug === set.subjectSlug);
    const label = row ? `${row.board} ${row.qualification} ${row.subject}` : `${set.boardSlug} ${set.qualificationSlug} ${set.subjectSlug}`;
    entry = { code: set.code, label, sets: [] };
    diagCodes.push(entry);
  }
  entry.sets.push(`[${set.slug}](${SITE_URL}/practice/${set.code}/diagnostic/${set.slug}/)`);
}
const diagnosticLines = diagCodes.map((e) => `- ${e.label} (${e.code}): ${e.sets.join(', ')}.`);

// D-349 (audit R-03) -- teacher profiles, from the authors collection.
const authorsDir = 'src/content/authors';
const teacherLines = [];
for (const file of (await readdir(authorsDir)).filter((f) => f.endsWith('.md')).sort()) {
  const fm = (await readFile(join(authorsDir, file), 'utf8')).split('---')[1] ?? '';
  if (!/^entityType:\s*person\s*$/m.test(fm)) continue;
  if (/^publicationState:\s*draft\s*$/m.test(fm)) continue;
  // D-408 -- reviewer-only profiles (no subjects taught) are not listed as teachers.
  if (/^subjectsTaught:\s*\[\s*\]/m.test(fm)) continue;
  const name = (fm.match(/^name:\s*"([^"]+)"/m) || [])[1];
  const role = (fm.match(/^role:\s*"([^"]+)"/m) || [])[1];
  if (!name) continue;
  teacherLines.push(`- [${name}](${SITE_URL}/authors/${file.replace(/\.md$/, '')}/)${role ? `: ${role}.` : ''}`);
}

// D-389 -- advanced-course (AP) library: listed only once AP_LIBRARY_PUBLIC is true
// (src/data/ap/config.ts). Neutral wording plus the College Board attribution.
const apConfig = await import('../src/data/ap/config.ts').catch((e) => { console.warn(`llms.txt: AP library config not read (${e.message}); AP section omitted.`); return null; });
const apLines = [];
if (apConfig?.AP_LIBRARY_PUBLIC) {
  const { AP_COURSES } = await import('../src/data/ap/frameworks.ts');
  apLines.push('', '## Advanced courses (US curriculum)', '', `- [Advanced-course study library](${SITE_URL}${apConfig.AP_LIBRARY_BASE}): original study guides, revision notes, practice and checklists mapped to the 2026-27 College Board course frameworks (May 2027 exams). ${apConfig.AP_TRADEMARK_ATTRIBUTION}`);
  for (const c of AP_COURSES) apLines.push(`- [${c.officialName.replace(/^AP /, 'AP® ')}](${SITE_URL}${apConfig.AP_LIBRARY_BASE}${c.slug}/): ${c.units.length} units; exam ${c.examDate}.`);
}

const { REGION_PRICING, PRICING_TERMS, PRICING_VERIFIED_DATE } = JSON.parse(tsx('src/data/pricing.ts'));
// Only the keys are needed; the full topic records exceed execSync's buffer.
const CURRENT_SYLLABUS_KEYS = JSON.parse(execSync(
  `node --experimental-strip-types --no-warnings -e "` +
  `import('./src/data/academic/syllabus-topics.ts').then(m => process.stdout.write(JSON.stringify(` +
  `m.SYLLABUS_VERSIONS.filter(v => v.status === 'current').map(v => v.boardSlug + '/' + v.qualificationSlug + '/' + v.subjectSlug))))"`,
  { encoding: 'utf8', cwd: process.cwd() },
));

const taughtCombos = active.filter((c) => c.classesOffered !== false);
const publishedResources = resourceFiles.length;
const SITE_DESCRIPTION =
  `Marlbridge is an online tutoring service for IGCSE, O Level, GCSE, AS & A Level and IB students, operated by Learners Academy in Lahore, Pakistan. ` +
  `Subject teachers teach live classes one-to-one or in small groups of up to ${PRICING_TERMS.maxGroupSize}, online for students anywhere and in person in Lahore; the first trial class is free. ` +
  `Classes are offered in ${taughtCombos.length} board, qualification and subject combinations (Cambridge, Pearson Edexcel, AQA, OxfordAQA, OCR and IB), ` +
  `and the site publishes ${publishedResources.toLocaleString('en-GB')} free study resources, printable syllabus checklists and exam tools. Marlbridge has no office outside Pakistan.`;

/**
 * D-404 -- one line per course page, with its official code, so an
 * assistant asked about "0620 chemistry" or "9709 tutor" can cite the exact
 * page. Only publishable combinations with a current syllabus record (the
 * same records that build the printable checklists) are listed, and each
 * says whether classes are offered.
 */
const currentSyllabus = new Set(CURRENT_SYLLABUS_KEYS);
const courseLines = active
  .filter((c) => currentSyllabus.has(`${c.boardSlug}/${c.qualificationSlug}/${c.subjectSlug}`))
  .sort((a, b) => `${a.board} ${a.qualification} ${a.subject}`.localeCompare(`${b.board} ${b.qualification} ${b.subject}`))
  .map((c) => {
    const key = `${c.boardSlug}/${c.qualificationSlug}/${c.subjectSlug}`;
    const code = c.qualificationCode && /\d/.test(c.qualificationCode) ? ` (${c.qualificationCode})` : '';
    const name = c.qualification.startsWith('IB ') ? `${c.qualification} ${c.subject}` : `${c.board} ${c.qualification} ${c.subject}`;
    const status = c.classesOffered === false ? 'free resources only, no classes at the moment' : 'classes offered (free trial)';
    return `- [${name}${code}](${SITE_URL}/boards/${key}/): syllabus, topics, assessment and free resources; ${status}; [printable checklist](${SITE_URL}/checklists/${key}/).`;
  });

const feeLines = REGION_PRICING.map((r) => {
  const sym = r.symbol ?? r.currency;
  const fee = (n) => `${sym}${/[A-Za-z]$/.test(sym) ? ' ' : ''}${Number(n).toLocaleString('en-GB')}`;
  const kind = r.status === 'indicative' ? ' Indicative: a currency conversion of the Pakistan fee, confirmed in writing before any payment.' : '';
  return `- ${r.region}: ${fee(r.igcse)} (GCSE, IGCSE, O Level) and ${fee(r.aLevel)} (AS and A Level) per subject per month, group classes.${kind}`;
});

const lines = [
  `# ${SITE_NAME}`,
  '',
  `> ${SITE_DESCRIPTION}`,
  '',
  '## Boards',
  '',
  ...boardLines,
  '',
  '## Qualifications',
  '',
  ...qualLines,
  '',
  '## Subjects',
  '',
  ...subjectLines,
  '',
  '## Courses by syllabus code',
  '',
  ...courseLines,
  '',
  '## Free exam tools',
  '',
  `- [Grade threshold explorer](${SITE_URL}/grade-thresholds/): Cambridge grade boundaries by syllabus, with the official tables they come from.`,
  `- [Exam calendar](${SITE_URL}/exam-calendar/): Cambridge entry deadlines, exam windows and results days for the next series, from Cambridge's own key-dates documents.`,
  `- [Command words](${SITE_URL}/command-words/): what each exam command word (describe, explain, evaluate and others) asks the student to do.`,
  `- [Syllabus updates](${SITE_URL}/syllabus-updates/): changes to syllabuses and specifications between exam years.`,
  '',
  '## Group class fees',
  '',
  `Monthly group fees per subject by region, last confirmed ${PRICING_VERIFIED_DATE}. One-to-one and IB fees are per class; the [pricing page](${SITE_URL}/pricing/) has them and marks any figure that is a currency conversion rather than a set price. ${PRICING_TERMS.freeTrial}`,
  '',
  ...feeLines,
  '',
  '## More',
  '',
  `- [Boards directory](${SITE_URL}/boards/): every examination board Marlbridge publishes material for.`,
  `- [Qualifications directory](${SITE_URL}/levels/): every qualification level Marlbridge publishes material for.`,
  studyResourcesLine,
  // D-286 -- the free revision tools.
  `- [Revision planner](${SITE_URL}/revision-planner/): free weekly revision plan from a student's subjects, exam dates, free time and topic confidence; runs in the browser, no account.`,
  `- [Practice and 10-minute diagnostics](${SITE_URL}/practice/): self-marked study checks and self-check questions with worked answers; ${DIAGNOSTIC_SETS.length} diagnostic sets across ${diagCodes.length} syllabus codes (listed under "Diagnostics" below).`,
  `- [Printable syllabus checklists](${SITE_URL}/checklists/)`,
  `- [Free trial class](${SITE_URL}/trial/): request a free trial class with a subject teacher (we match a specialist teacher and confirm a time).`,
  `- [Programs](${SITE_URL}/programs/): Marlbridge's programs by qualification; each program page says whether it is taught now.`,
  `- [Tutoring](${SITE_URL}/tutoring/): the teachers and how classes work; each teacher's profile is listed under "Teachers" below.`,
  `- [Pricing](${SITE_URL}/pricing/): group fees per subject per month by region, one-to-one and IB fees per class, discounts and the free trial class.`,
  `- [International online tutoring](${SITE_URL}/international-tutoring/): all classes are taught live online from Lahore, Pakistan (in person in Lahore too); class times by time zone and fees by country. Marlbridge has no office outside Pakistan.`,
  `- Country pages: [Pakistan](${SITE_URL}/pakistan/), [United Kingdom](${SITE_URL}/uk/), [United Arab Emirates](${SITE_URL}/uae/), [Qatar](${SITE_URL}/qatar/), [Malaysia](${SITE_URL}/malaysia/), [Gulf](${SITE_URL}/gulf/).`,
  `- [For Schools](${SITE_URL}/schools/)`,
  `- [About Marlbridge](${SITE_URL}/about/): Marlbridge is the international branch of Learners Academy (https://learnersacademy.com.pk), which operates it; its teachers teach under the Marlbridge name.`,
  `- [Contact](${SITE_URL}/contact/)`,
  '',
  '## Diagnostics',
  '',
  ...diagnosticLines,
  '',
  '## Teachers',
  '',
  ...teacherLines,
  ...apLines,
  '',
];

await writeFile('public/llms.txt', lines.join('\n'), 'utf8');
console.log(`public/llms.txt generated -- ${boardLines.length} boards, ${qualLines.length} qualifications, ${subjectLines.length} subjects, ${courseLines.length} courses.`);
