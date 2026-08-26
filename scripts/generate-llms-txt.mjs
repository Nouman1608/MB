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
const SITE_DESCRIPTION =
  'Marlbridge helps learners build the knowledge, confidence and skills they need to succeed in school, examinations, higher education and beyond.';

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
  const shortDescMatch = fm.match(/^shortDescription:\s*"([^"]*)"\s*$/m);
  const slug = file.replace(/\.md$/, '');
  const title = titleMatch ? titleMatch[1] : slug;
  const desc = shortDescMatch ? shortDescMatch[1] : '';
  subjectLines.push(`- [${title}](${SITE_URL}/subjects/${slug}/)${desc ? `: ${desc}` : ''}`);
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
  '## More',
  '',
  `- [Boards directory](${SITE_URL}/boards/): every examination board Marlbridge publishes material for.`,
  `- [Qualifications directory](${SITE_URL}/levels/): every qualification level Marlbridge publishes material for.`,
  studyResourcesLine,
  `- [Programs](${SITE_URL}/programs/): Marlbridge's teaching programs by qualification.`,
  `- [Tutoring](${SITE_URL}/tutoring/)`,
  `- [For Schools](${SITE_URL}/schools/)`,
  `- [About Marlbridge](${SITE_URL}/about/)`,
  `- [Contact](${SITE_URL}/contact/)`,
  '',
];

await writeFile('public/llms.txt', lines.join('\n'), 'utf8');
console.log(`public/llms.txt generated -- ${boardLines.length} boards, ${qualLines.length} qualifications, ${subjectLines.length} subjects.`);
