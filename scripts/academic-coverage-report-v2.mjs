#!/usr/bin/env node
/**
 * v1.2 WS6 — full 30-column machine-readable coverage report, one row per
 * ACTIVE combination (139 rows). Supersedes the v1.1 report's simpler
 * eligible-resource-count-only shape (scripts/academic-coverage-report.mjs,
 * still kept for its own narrower purpose).
 *
 * Every field is computed from real repository data. Nothing is invented:
 * a column with no real source is written as the literal string "NO_DATA"
 * rather than guessed or left silently blank. In particular:
 *   - Demand/interest signals are not modeled anywhere in this repo, so no
 *     "demand" column exists in this report at all (consistent with the
 *     v1.1 report's NO_DATA convention for the same reason).
 *   - namedReviewer is NO_DATA for all 139 rows — no reviewer field exists
 *     in the resources schema yet (see v1.2 WS7).
 *   - quiz/flashcard/video/diagnostic resource-type counts are 0 for all
 *     rows — these resource types are not implemented on this site at all
 *     (the resources schema's resourceType enum has 7 real types; see
 *     content.config.ts). 0 here means "not built", not "unknown".
 *
 * Usage: node scripts/academic-coverage-report-v2.mjs [--json] [--csv]
 */
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { execSync } from 'node:child_process';

const load = (file) => JSON.parse(execSync(
  `node --experimental-strip-types --no-warnings -e "` +
  `import('./${file}').then(m => process.stdout.write(JSON.stringify(m.default ?? m)))"`,
  { encoding: 'utf8', cwd: process.cwd(), maxBuffer: 1024 * 1024 * 32 }));

const { MATRIX } = load('src/data/academic/matrix.ts');
const { SYLLABUSES } = load('src/data/academic/syllabuses.ts');
const { SYLLABUS_VERSIONS } = load('src/data/academic/syllabus-topics.ts');
const { SUBJECTS: CANONICAL_SUBJECTS } = load('src/data/academic/subjects.ts');

const matrixSlugsForContentId = new Map();
for (const s of CANONICAL_SUBJECTS) {
  const hub = s.hubId ?? s.slug;
  if (!matrixSlugsForContentId.has(hub)) matrixSlugsForContentId.set(hub, []);
  matrixSlugsForContentId.get(hub).push(s.slug);
}
const contentIdForMatrixSlug = new Map();
for (const [contentId, slugs] of matrixSlugsForContentId) {
  for (const slug of slugs) contentIdForMatrixSlug.set(slug, contentId);
}
const hubIdFor = (matrixSlug) => contentIdForMatrixSlug.get(matrixSlug) ?? matrixSlug;

const LEVEL_FOR_QUALIFICATION = {
  igcse: 'igcse', 'o-level': 'o-levels', gcse: 'gcse', 'as-level': 'a-levels', 'a-level': 'a-levels',
};

// -----------------------------------------------------------------------
// Load resource frontmatter directly (same pattern as the v1.1 script) so
// this runs standalone without an Astro content build.
// -----------------------------------------------------------------------
const resourceDir = 'src/content/resources';
const resourceFiles = (await readdir(resourceDir)).filter((f) => f.endsWith('.md'));
const RESOURCE_TYPES = [
  'study-guides', 'revision-notes', 'past-papers', 'practice-questions',
  'exam-preparation', 'subject-guides', 'learning-articles',
];
const resources = [];
for (const file of resourceFiles) {
  const raw = await readFile(join(resourceDir, file), 'utf8');
  const fm = raw.split('---')[1] ?? '';
  const get = (name) => (fm.match(new RegExp(`^${name}:\\s*"?([^"\\n]+)"?\\s*$`, 'm')) || [])[1];
  const getArray = (name) => {
    const m = fm.match(new RegExp(`^${name}:\\s*\\[([^\\]]*)\\]`, 'm'));
    if (!m) return [];
    return m[1].split(',').map((s) => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
  };
  const subject = get('subject');
  const resourceType = get('resourceType');
  const boards = getArray('boards');
  const levels = getArray('level');
  const updatedDate = get('updatedDate');
  const publishedDate = get('publishedDate');
  resources.push({ file, subject, resourceType, boards, levels, date: updatedDate ?? publishedDate });
}

const activeRows = MATRIX.filter((c) => c.marlbridgeStatus === 'ACTIVE' && c.boardOfferingStatus === 'ACTIVE');

const rows = activeRows.map((c) => {
  const hubId = hubIdFor(c.subjectSlug);
  const syllabus = SYLLABUSES.find((s) => s.boardSlug === c.boardSlug && s.qualificationSlug === c.qualificationSlug && s.subjectSlug === c.subjectSlug);
  const topicVersion = SYLLABUS_VERSIONS.find((s) => s.boardSlug === c.boardSlug && s.qualificationSlug === c.qualificationSlug && s.subjectSlug === c.subjectSlug && s.status === 'current');
  const level = LEVEL_FOR_QUALIFICATION[c.qualificationSlug];

  const eligibleResources = resources.filter((r) =>
    r.subject === hubId &&
    r.levels.includes(level) &&
    (r.boards.length === 0 || r.boards.includes(c.boardSlug)));

  const countByType = Object.fromEntries(RESOURCE_TYPES.map((t) => [t, eligibleResources.filter((r) => r.resourceType === t).length]));
  const NOT_IMPLEMENTED_TYPES = { quizCount: 0, flashcardCount: 0, videoCount: 0, diagnosticCount: 0 };

  const dates = eligibleResources.map((r) => r.date).filter(Boolean).sort();
  const lastReview = dates.length ? dates[dates.length - 1] : 'NO_DATA';

  const risks = [];
  if (!syllabus) risks.push('no-official-source');
  if (!topicVersion) risks.push('no-topic-map');
  if (eligibleResources.length === 0) risks.push('zero-resources');
  if (c.evidence === 'board') risks.push('evidence-is-blanket-authorization-not-subject-specific-confirmation');

  let nextAction = 'None — combination is resourced and sourced.';
  if (!syllabus && eligibleResources.length === 0) nextAction = 'Source the official specification, then write a first resource.';
  else if (!syllabus) nextAction = 'Source and verify the official specification/summary.';
  else if (eligibleResources.length === 0) nextAction = 'Write a first resource for this combination.';
  else if (!topicVersion) nextAction = 'Build a verified topic map from the official specification.';

  return {
    board: c.board,
    boardSlug: c.boardSlug,
    qualification: c.qualification,
    qualificationSlug: c.qualificationSlug,
    subject: c.subject,
    subjectSlug: c.subjectSlug,
    specCode: syllabus?.code ?? c.qualificationCode ?? 'NO_DATA',
    specStatus: syllabus ? 'verified' : 'unverified',
    specApplicability: topicVersion ? `${topicVersion.effectiveFrom}-${topicVersion.effectiveTo}` : 'NO_DATA',
    officialSource1: syllabus?.officialUrl ?? 'NO_DATA',
    officialSource2: topicVersion?.sourceUrl && topicVersion.sourceUrl !== syllabus?.officialUrl ? topicVersion.sourceUrl : 'NO_DATA',
    verificationDate: syllabus?.verifiedOn ?? topicVersion?.verifiedDate ?? 'NO_DATA',
    summaryStatus: syllabus ? 'published' : 'being-verified',
    topicMapStatus: topicVersion ? 'published' : 'being-verified',
    assessmentStatus: 'NO_DATA', // not modeled as a distinct field anywhere in this repo today
    studyGuideCount: countByType['study-guides'],
    revisionNoteCount: countByType['revision-notes'],
    pastPaperCount: countByType['past-papers'],
    practiceQuestionCount: countByType['practice-questions'],
    examPrepCount: countByType['exam-preparation'],
    subjectGuideCount: countByType['subject-guides'],
    learningArticleCount: countByType['learning-articles'],
    ...NOT_IMPLEMENTED_TYPES,
    totalResourceCount: eligibleResources.length,
    namedAuthor: eligibleResources.length ? 'Marlbridge Academic Team (organisation byline — see v1.2 WS7)' : 'NO_DATA',
    namedReviewer: 'NO_DATA', // no reviewer field exists in the resources schema — v1.2 WS7 gap
    lastReview,
    teachingStatus: 'teaching', // by definition of activeRows filter above
    enrolmentStatus: 'enquire', // no automated enrolment exists anywhere on the site — see v1.2 WS2/WS3
    indexable: true, // no per-combination noindex mechanism exists; all 139 leaf pages are indexable
    tier: 'NO_DATA', // v1.1's tiering covered only the 127 zero-resource rows at that time; not recomputed 1:1 here — see docs/reports/academic-coverage-report-v1.1.md for that analysis
    priorityScore: 'NO_DATA',
    evidence: c.evidence,
    risks: risks.length ? risks.join(';') : 'none',
    nextAction,
  };
});

await mkdir('docs/reports', { recursive: true });

const jsonPath = 'docs/reports/academic-coverage-report-v1.2.json';
await writeFile(jsonPath, JSON.stringify({ generatedAt: new Date().toISOString(), rowCount: rows.length, rows }, null, 2));

const headers = Object.keys(rows[0]);
const csvEscape = (v) => {
  const s = String(v ?? '');
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};
const csv = [headers.join(','), ...rows.map((r) => headers.map((h) => csvEscape(r[h])).join(','))].join('\n');
const csvPath = 'docs/reports/academic-coverage-report-v1.2.csv';
await writeFile(csvPath, csv);

// Summary stats for stdout + the markdown report.
const withSource = rows.filter((r) => r.specStatus === 'verified').length;
const withTopicMap = rows.filter((r) => r.topicMapStatus === 'published').length;
const withResources = rows.filter((r) => r.totalResourceCount > 0).length;
const zeroResource = rows.length - withResources;

console.log(`Wrote ${jsonPath} and ${csvPath} — ${rows.length} rows.`);
console.log(`  Official source verified: ${withSource}/${rows.length}`);
console.log(`  Topic map published: ${withTopicMap}/${rows.length}`);
console.log(`  At least one resource: ${withResources}/${rows.length} (zero-resource: ${zeroResource})`);
