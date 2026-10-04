#!/usr/bin/env node
/**
 * Canonical academic coverage report (npm run coverage:academic-v2).
 *
 * ONE command, ONE dataset, THREE formats, written together:
 *   docs/reports/academic-coverage-current.json
 *   docs/reports/academic-coverage-current.csv
 *   docs/reports/academic-coverage-current.md
 * One row per ACTIVE board x qualification x subject combination. The
 * Markdown is rendered from exactly the same rows and totals as the JSON and
 * CSV; no total in it is typed by hand.
 *
 * History: this script previously wrote docs/reports/academic-coverage-
 * report-v1.2.{json,csv} only, while the v1.2 Markdown summary was
 * hand-maintained and drifted (it still described a 782-resource state), and
 * it hard-coded namedReviewer as NO_DATA and derived "lastReview" from
 * publication dates. Post-audit remediation, 4 Oct 2026 (D-386), replaced
 * that: the v1.2 and v1.1 files are kept unchanged as dated historical
 * evidence (see docs/reports/README.md), and this script now writes only the
 * canonical current files above.
 *
 * Nothing is invented. A field with no real source is the literal "NO_DATA":
 *   - Demand is NO_DATA: no analytics, Search Console, CRM or enrolment data
 *     is read by this script, so nothing is ranked by demand.
 *   - Authors and reviewers are derived from each resource's own frontmatter
 *     (author, reviewer). "reviewed" means an accountable teacher is credited
 *     (owner decision D-379), not that a dated line-by-line check happened.
 *   - lastTeacherCredit is the latest real reviewedDate among the
 *     combination's resources (the date the reviewer credit was applied), or
 *     NO_DATA. It is never a publication date. lastPublishedOrUpdated is
 *     reported separately.
 *
 * Timestamp policy: no wall-clock time is written, so running the script
 * twice on unchanged data produces byte-identical files. Each file carries
 * `dataAsOf`, the latest date found in the data itself (resource
 * published/updated/reviewed dates, assessment and syllabus verification
 * dates). Staleness ("verification older than 180 days") is measured against
 * that same dataAsOf, so it is reproducible too.
 *
 * Usage: node scripts/academic-coverage-report-v2.mjs [--check]
 *   --check  regenerate in memory and exit 1 if the committed files differ.
 */
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { execSync } from 'node:child_process';

const CHECK = process.argv.includes('--check');
const OUT = {
  json: 'docs/reports/academic-coverage-current.json',
  csv: 'docs/reports/academic-coverage-current.csv',
  md: 'docs/reports/academic-coverage-current.md',
};
const STALE_DAYS = 180;
const DEPTH_TARGET = 8; // resources per combination
const THIN_WORDS = 900;
const NOINDEX_WORDS = 400;

const load = (file) => JSON.parse(execSync(
  `node --experimental-strip-types --no-warnings -e "` +
  `import('./${file}').then(m => process.stdout.write(JSON.stringify(m.default ?? m)))"`,
  { encoding: 'utf8', cwd: process.cwd(), maxBuffer: 1024 * 1024 * 32 }));

const { MATRIX } = load('src/data/academic/matrix.ts');
const { SYLLABUSES } = load('src/data/academic/syllabuses.ts');
const { SYLLABUS_VERSIONS } = load('src/data/academic/syllabus-topics.ts');
const { SUBJECTS: CANONICAL_SUBJECTS } = load('src/data/academic/subjects.ts');
const { QUALIFYING_RESOURCE_TYPES, SUBSTANTIAL_WORD_THRESHOLD } = load('src/utils/seo/indexability.ts');
const { ASSESSMENTS } = load('src/data/academic/assessments.ts');

/**
 * A combination's assessment completeness. Strict: every record for the
 * combination needs a source, a verification date, components with marks
 * and plausible durations, and an assessmentModel.
 */
function assessmentCompletenessFor(records) {
  if (records.length === 0) return 'NO_ASSESSMENT_RECORD';
  const allComplete = records.every((a) => {
    const hasSource = Boolean(a.officialSourceUrl && a.officialSourceUrl.trim());
    const hasDate = Boolean(a.verifiedOn && /^\d{4}-\d{2}-\d{2}$/.test(a.verifiedOn));
    const hasComponents = a.components.length > 0;
    const hasMarksAndDuration = a.components.every((c) => c.marks > 0 && (c.durationMinutes === null || c.durationMinutes > 0));
    const hasModel = Boolean(a.assessmentModel);
    return hasSource && hasDate && hasComponents && hasMarksAndDuration && hasModel;
  });
  return allComplete ? 'VERIFIED_COMPLETE' : 'VERIFIED_PARTIAL';
}

const matrixSlugsForContentId = new Map();
for (const s of CANONICAL_SUBJECTS) {
  const hub = s.hubId ?? s.slug;
  if (!matrixSlugsForContentId.has(hub)) matrixSlugsForContentId.set(hub, []);
  matrixSlugsForContentId.get(hub).push(s.slug);
}
const contentIdForMatrixSlug = new Map();
for (const [contentId, slugs] of matrixSlugsForContentId) for (const slug of slugs) contentIdForMatrixSlug.set(slug, contentId);
const hubIdFor = (matrixSlug) => contentIdForMatrixSlug.get(matrixSlug) ?? matrixSlug;

const LEVEL_FOR_QUALIFICATION = {
  igcse: 'igcse', 'o-level': 'o-levels', gcse: 'gcse', 'as-level': 'a-levels', 'a-level': 'a-levels',
  'ib-dp': 'ib', 'ib-myp': 'ib',
};

/** Mirrors isIndexableAcademicPage() in src/utils/seo/indexability.ts (same set and threshold, loaded live). */
function isIndexable(eligibleResources) {
  const total = eligibleResources
    .filter((r) => QUALIFYING_RESOURCE_TYPES.includes(r.resourceType))
    .reduce((sum, r) => sum + r.words, 0);
  return { indexable: total >= SUBSTANTIAL_WORD_THRESHOLD, totalQualifyingWordCount: total };
}

// ----------------------------------------------------------------- resources
const resourceDir = 'src/content/resources';
const resourceFiles = (await readdir(resourceDir)).filter((f) => f.endsWith('.md')).sort();
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
  const block = fm.match(/^syllabusTopics:\s*\n([\s\S]*?)(?=^\S|(?![\s\S]))/m);
  const topics = block ? block[1].split(/^\s*-\s+/m).slice(1).map((e) => ({
    qualification: (e.match(/qualification:\s*"?([a-z-]+)"?/) || [])[1],
    topic: (e.match(/topic:\s*"?([a-z0-9-]+)"?/) || [])[1],
  })) : [];
  const bodyWords = raw.split('---').slice(2).join('---').trim().split(/\s+/).filter(Boolean).length;
  resources.push({
    file,
    slug: file.replace(/\.md$/, ''),
    subject: get('subject'),
    resourceType: get('resourceType'),
    boards: getArray('boards'),
    levels: getArray('level'),
    words: bodyWords,
    publishedOrUpdated: get('updatedDate') ?? get('publishedDate'),
    author: get('author') ?? '',
    reviewer: get('reviewer') ?? '',
    reviewStatus: get('reviewStatus') ?? 'review-pending',
    reviewedDate: get('reviewedDate') ?? '',
    topics,
  });
}

// dataAsOf: the latest date that appears in the data itself.
const allDates = [
  ...resources.flatMap((r) => [r.publishedOrUpdated, r.reviewedDate]),
  ...ASSESSMENTS.map((a) => a.verifiedOn),
  ...SYLLABUSES.map((s) => s.verifiedOn),
  ...SYLLABUS_VERSIONS.map((v) => v.verifiedDate),
].filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d ?? '')).sort();
const dataAsOf = allDates[allDates.length - 1];
const daysBetween = (a, b) => Math.round((Date.parse(b) - Date.parse(a)) / 86400000);
const tally = (xs) => {
  const o = {};
  for (const x of xs) o[x] = (o[x] ?? 0) + 1;
  return Object.entries(o).sort((a, b) => b[1] - a[1] || (a[0] < b[0] ? -1 : 1)).map(([k, v]) => `${k} (${v})`).join('; ');
};

const activeRows = MATRIX.filter((c) => c.marlbridgeStatus === 'ACTIVE' && c.boardOfferingStatus === 'ACTIVE');

const rows = activeRows.map((c) => {
  const hubId = hubIdFor(c.subjectSlug);
  const syllabus = SYLLABUSES.find((s) => s.boardSlug === c.boardSlug && s.qualificationSlug === c.qualificationSlug && s.subjectSlug === c.subjectSlug);
  const topicVersion = SYLLABUS_VERSIONS.find((s) => s.boardSlug === c.boardSlug && s.qualificationSlug === c.qualificationSlug && s.subjectSlug === c.subjectSlug && s.status === 'current');
  const level = LEVEL_FOR_QUALIFICATION[c.qualificationSlug];
  const assessmentRecords = ASSESSMENTS.filter((a) => a.boardSlug === c.boardSlug && a.qualificationSlug === c.qualificationSlug && a.subjectSlug === c.subjectSlug);
  const assessmentCompleteness = assessmentCompletenessFor(assessmentRecords);
  const currentAssessment = assessmentRecords.find((a) => a.specStatus === 'current') ?? assessmentRecords[0];

  const eligible = resources.filter((r) =>
    r.subject === hubId &&
    r.levels.includes(level) &&
    (r.boards.length === 0 || r.boards.includes(c.boardSlug)));

  const countByType = Object.fromEntries(RESOURCE_TYPES.map((t) => [t, eligible.filter((r) => r.resourceType === t).length]));
  const published = eligible.map((r) => r.publishedOrUpdated).filter(Boolean).sort();
  const credited = eligible.filter((r) => r.reviewStatus === 'reviewed');
  const creditDates = credited.map((r) => r.reviewedDate).filter(Boolean).sort();
  const pending = eligible.filter((r) => r.reviewStatus !== 'reviewed');

  // Topic-map gaps: topics in the current topic map that no eligible resource maps to.
  let topicGaps = 'NO_DATA';
  if (topicVersion) {
    const mapped = new Set(eligible.flatMap((r) => r.topics.filter((t) => t.qualification === c.qualificationSlug).map((t) => t.topic)));
    topicGaps = topicVersion.topics.filter((t) => !mapped.has(t.slug)).map((t) => t.slug);
  }

  const verificationDate = syllabus?.verifiedOn ?? topicVersion?.verifiedDate ?? 'NO_DATA';
  const staleSyllabus = verificationDate !== 'NO_DATA' && daysBetween(verificationDate, dataAsOf) > STALE_DAYS;
  const staleAssessment = currentAssessment?.verifiedOn && daysBetween(currentAssessment.verifiedOn, dataAsOf) > STALE_DAYS;

  const risks = [];
  if (!syllabus) risks.push('no-official-source-record');
  if (!topicVersion) risks.push('no-topic-map');
  if (eligible.length === 0) risks.push('zero-resources');
  if (eligible.length > 0 && eligible.length < DEPTH_TARGET) risks.push(`under-${DEPTH_TARGET}-resources`);
  if (Array.isArray(topicGaps) && topicGaps.length) risks.push('topics-without-resources');
  if (assessmentCompleteness !== 'VERIFIED_COMPLETE') risks.push(`assessment-${assessmentCompleteness.toLowerCase()}`);
  if (staleSyllabus) risks.push('syllabus-verification-stale');
  if (staleAssessment) risks.push('assessment-verification-stale');
  if (c.evidence === 'board') risks.push('evidence-is-blanket-authorization-not-subject-specific-confirmation');

  let nextAction = 'Named-reviewer sign-off of review-pending resources.';
  if (!syllabus && eligible.length === 0) nextAction = 'Source the official specification, then write a first resource.';
  else if (!syllabus) nextAction = 'Source and verify the official specification summary.';
  else if (eligible.length === 0) nextAction = 'Write a first resource for this combination.';
  else if (!topicVersion) nextAction = 'Build a verified topic map from the official specification.';
  else if (assessmentCompleteness !== 'VERIFIED_COMPLETE') nextAction = 'Complete the assessment record from the official specification.';
  else if (Array.isArray(topicGaps) && topicGaps.length) nextAction = `Write resources for unmapped topics (${topicGaps.length}).`;
  else if (eligible.length < DEPTH_TARGET) nextAction = `Add resources to reach the ${DEPTH_TARGET}-resource depth target.`;
  else if (staleSyllabus || staleAssessment) nextAction = 'Re-check the official source (verification older than 180 days).';
  else if (!pending.length) nextAction = 'None.';

  const indexability = isIndexable(eligible);

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
    verificationDate,
    summaryStatus: syllabus ? 'published' : 'being-verified',
    topicMapStatus: topicVersion ? 'published' : 'being-verified',
    topicMapTopicCount: topicVersion ? topicVersion.topics.length : 0,
    topicsWithoutResources: Array.isArray(topicGaps) ? topicGaps.length : 'NO_DATA',
    topicsWithoutResourcesList: Array.isArray(topicGaps) ? topicGaps.join(';') : 'NO_DATA',
    assessmentStatus: assessmentRecords.length ? 'modeled' : 'not-modeled',
    assessmentRecordCount: assessmentRecords.length,
    assessmentCompleteness,
    assessmentModel: currentAssessment?.assessmentModel ?? 'NO_DATA',
    assessmentComponentCount: currentAssessment?.components.length ?? 0,
    assessmentSourceUrl: currentAssessment?.officialSourceUrl ?? 'NO_DATA',
    assessmentVerifiedOn: currentAssessment?.verifiedOn ?? 'NO_DATA',
    assessmentLifecycleStatus: currentAssessment?.specStatus ?? 'NO_DATA',
    studyGuideCount: countByType['study-guides'],
    revisionNoteCount: countByType['revision-notes'],
    pastPaperCount: countByType['past-papers'],
    practiceQuestionCount: countByType['practice-questions'],
    examPrepCount: countByType['exam-preparation'],
    subjectGuideCount: countByType['subject-guides'],
    learningArticleCount: countByType['learning-articles'],
    totalResourceCount: eligible.length,
    resourcesUnder900Words: eligible.filter((r) => r.words < THIN_WORDS).length,
    reviewedCount: credited.length,
    reviewPendingCount: pending.length,
    namedAuthors: eligible.length ? tally(eligible.map((r) => r.author || 'NO_AUTHOR')) : 'NO_DATA',
    namedReviewers: credited.length ? tally(credited.map((r) => r.reviewer || 'MISSING_REVIEWER')) : 'NO_DATA',
    lastTeacherCredit: creditDates.length ? creditDates[creditDates.length - 1] : 'NO_DATA',
    lastPublishedOrUpdated: published.length ? published[published.length - 1] : 'NO_DATA',
    demand: 'NO_DATA',
    teachingStatus: 'teaching',
    enrolmentStatus: 'enquire',
    indexable: indexability.indexable,
    totalQualifyingWordCount: indexability.totalQualifyingWordCount,
    evidence: c.evidence,
    risks: risks.length ? risks.join(';') : 'none',
    nextAction,
  };
});
// Stable, data-only order: the matrix order, grouped by board.
rows.sort((a, b) => (a.boardSlug < b.boardSlug ? -1 : a.boardSlug > b.boardSlug ? 1 : 0));

// ------------------------------------------------------------------ totals
const reviewStatusTotals = {};
for (const r of resources) reviewStatusTotals[r.reviewStatus] = (reviewStatusTotals[r.reviewStatus] ?? 0) + 1;
const byType = Object.fromEntries(RESOURCE_TYPES.map((t) => [t, resources.filter((r) => r.resourceType === t).length]));
const byBoard = {};
for (const r of resources) { const k = r.boards.length ? r.boards.join('+') : '(no board)'; byBoard[k] = (byBoard[k] ?? 0) + 1; }
const counts = rows.map((r) => r.totalResourceCount).sort((a, b) => a - b);
const median = (xs) => (xs.length ? xs[Math.floor(xs.length / 2)] : 0);
const wordCounts = resources.map((r) => r.words).sort((a, b) => a - b);
const totals = {
  dataAsOf,
  sourceResources: resources.length,
  activeCombinations: rows.length,
  combinationsWithOfficialSourceRecord: rows.filter((r) => r.specStatus === 'verified').length,
  combinationsWithTopicMap: rows.filter((r) => r.topicMapStatus === 'published').length,
  zeroResourceCombinations: rows.filter((r) => r.totalResourceCount === 0).length,
  combinationsUnderDepthTarget: rows.filter((r) => r.totalResourceCount < DEPTH_TARGET).length,
  combinationsWithTopicGaps: rows.filter((r) => typeof r.topicsWithoutResources === 'number' && r.topicsWithoutResources > 0).length,
  medianResourcesPerCombination: median(counts),
  medianWordsPerResource: median(wordCounts),
  resourcesUnder900Words: wordCounts.filter((w) => w < THIN_WORDS).length,
  resourcesUnder400Words: wordCounts.filter((w) => w < NOINDEX_WORDS).length,
  assessment: {
    VERIFIED_COMPLETE: rows.filter((r) => r.assessmentCompleteness === 'VERIFIED_COMPLETE').length,
    VERIFIED_PARTIAL: rows.filter((r) => r.assessmentCompleteness === 'VERIFIED_PARTIAL').length,
    NO_ASSESSMENT_RECORD: rows.filter((r) => r.assessmentCompleteness === 'NO_ASSESSMENT_RECORD').length,
  },
  reviewStatus: Object.fromEntries(Object.entries(reviewStatusTotals).sort()),
  resourcesByType: byType,
  resourcesByBoardTag: Object.fromEntries(Object.entries(byBoard).sort()),
  staleSyllabusVerifications: rows.filter((r) => r.risks.includes('syllabus-verification-stale')).length,
  staleAssessmentVerifications: rows.filter((r) => r.risks.includes('assessment-verification-stale')).length,
  demand: 'NO_DATA',
};

// ----------------------------------------------------------------- outputs
const headers = Object.keys(rows[0]);
const csvEscape = (v) => {
  const s = String(v ?? '');
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};
const csv = [headers.join(','), ...rows.map((r) => headers.map((h) => csvEscape(r[h])).join(','))].join('\n') + '\n';
const json = JSON.stringify({
  report: 'Marlbridge academic coverage report (canonical, current)',
  generator: 'scripts/academic-coverage-report-v2.mjs (npm run coverage:academic-v2)',
  timestampPolicy: 'No wall-clock time is written. dataAsOf is the latest date found in the data; staleness is measured against it.',
  dataAsOf,
  rowCount: rows.length,
  totals,
  rows,
}, null, 2) + '\n';

const table = (head, body) => `| ${head.join(' | ')} |\n| ${head.map(() => '---').join(' | ')} |\n${body.map((r) => `| ${r.join(' | ')} |`).join('\n')}`;
const boards = [...new Set(rows.map((r) => r.boardSlug))];
const boardTable = table(
  ['Board', 'Combinations', 'Official source record', 'Topic map', 'Resources', 'Under 8 resources', 'Assessment complete', 'Reviewed', 'Review-pending'],
  boards.map((b) => {
    const br = rows.filter((r) => r.boardSlug === b);
    return [br[0].board, br.length, br.filter((r) => r.specStatus === 'verified').length, br.filter((r) => r.topicMapStatus === 'published').length,
      br.reduce((s, r) => s + r.totalResourceCount, 0), br.filter((r) => r.totalResourceCount < DEPTH_TARGET).length,
      br.filter((r) => r.assessmentCompleteness === 'VERIFIED_COMPLETE').length,
      br.reduce((s, r) => s + r.reviewedCount, 0), br.reduce((s, r) => s + r.reviewPendingCount, 0)];
  }),
);
const qualTable = table(['Qualification', 'Combinations', 'Resources (per-combination count, a resource can count for more than one)'],
  [...new Set(rows.map((r) => r.qualification))].map((q) => { const qr = rows.filter((r) => r.qualification === q); return [q, qr.length, qr.reduce((s, r) => s + r.totalResourceCount, 0)]; }));
const comboTable = table(['Board', 'Qualification', 'Subject', 'Code', 'Resources', 'Reviewed / pending', 'Assessment', 'Topics without resources', 'Next action'],
  rows.map((r) => [r.board, r.qualification, r.subject, r.specCode, r.totalResourceCount, `${r.reviewedCount} / ${r.reviewPendingCount}`, `${r.assessmentCompleteness} (${r.assessmentModel})`, r.topicsWithoutResources, r.nextAction]));
const list = (xs, empty) => (xs.length ? xs.map((x) => `- ${x}`).join('\n') : `- ${empty}`);
const riskCounts = {};
for (const r of rows) for (const k of r.risks.split(';')) if (k !== 'none') riskCounts[k] = (riskCounts[k] ?? 0) + 1;
const missingReviewer = rows.filter((r) => r.reviewPendingCount > 0).map((r) => `${r.board} ${r.qualification} ${r.subject} (${r.specCode}): ${r.reviewPendingCount} review-pending resource(s) with no reviewer`);
const stale = rows.filter((r) => /stale/.test(r.risks)).map((r) => `${r.board} ${r.qualification} ${r.subject} (${r.specCode}): syllabus verified ${r.verificationDate}, assessment verified ${r.assessmentVerifiedOn}`);
const under = rows.filter((r) => r.totalResourceCount < DEPTH_TARGET).map((r) => `${r.board} ${r.qualification} ${r.subject} (${r.specCode}): ${r.totalResourceCount}`);
const gaps = rows.filter((r) => typeof r.topicsWithoutResources === 'number' && r.topicsWithoutResources > 0).map((r) => `${r.board} ${r.qualification} ${r.subject} (${r.specCode}): ${r.topicsWithoutResourcesList.split(';').join(', ')}`);
const zero = rows.filter((r) => r.totalResourceCount === 0).map((r) => `${r.board} ${r.qualification} ${r.subject} (${r.specCode})`);

const md = `# Academic coverage report — current (canonical)

**This is the canonical, current coverage report.** It is generated, never edited by
hand: \`npm run coverage:academic-v2\` writes this file, [\`academic-coverage-current.json\`](academic-coverage-current.json)
and [\`academic-coverage-current.csv\`](academic-coverage-current.csv) from one dataset in one run, so all three
agree. Older reports in this folder are dated historical evidence; see [README.md](README.md).

Data as of **${dataAsOf}** (the latest date found in the data; no generation timestamp is
written, so an unchanged repository regenerates identical files).

## Totals

${table(['Measure', 'Value'], [
  ['Source resources', totals.sourceResources],
  ['Active board × qualification × subject combinations', totals.activeCombinations],
  ['Combinations with an official-source record', `${totals.combinationsWithOfficialSourceRecord}/${totals.activeCombinations}`],
  ['Combinations with a topic map', `${totals.combinationsWithTopicMap}/${totals.activeCombinations}`],
  ['Zero-resource combinations', totals.zeroResourceCombinations],
  [`Combinations under ${DEPTH_TARGET} resources`, totals.combinationsUnderDepthTarget],
  ['Combinations with topics that have no resource', totals.combinationsWithTopicGaps],
  ['Median resources per combination', totals.medianResourcesPerCombination],
  ['Median words per resource', totals.medianWordsPerResource],
  [`Resources under ${THIN_WORDS} words`, totals.resourcesUnder900Words],
  [`Resources under ${NOINDEX_WORDS} words`, totals.resourcesUnder400Words],
  ['Demand', 'NO_DATA (no analytics, Search Console, CRM or enrolment source is read)'],
])}

### Assessment completeness

${table(['Completeness', 'Combinations'], Object.entries(totals.assessment))}

A combination is \`VERIFIED_COMPLETE\` when every assessment record for it has an official
source, a verification date, components with marks and durations, and an assessment model.

### Review status

${table(['reviewStatus', 'Resources'], Object.entries(totals.reviewStatus))}

\`reviewed\` means a named Marlbridge subject teacher is credited as accountable for the page
(owner decision D-379); it is not a record of a dated, line-by-line check. \`review-pending\`
pages have no accountable teacher yet. The per-resource detail, including the repository-side
verification of every pending page, is in [academic-review/ledger-summary.md](academic-review/ledger-summary.md).

### Resources by type

${table(['Type', 'Resources'], Object.entries(totals.resourcesByType))}

### Resources by board tag

${table(['boards', 'Resources'], Object.entries(totals.resourcesByBoardTag))}

## By board

${boardTable}

## By qualification

${qualTable}

## Known risks

${table(['Risk', 'Combinations'], Object.entries(riskCounts).sort((a, b) => b[1] - a[1]))}

## Zero-resource combinations

${list(zero, 'None.')}

## Combinations under the ${DEPTH_TARGET}-resource depth target

${list(under, 'None.')}

## Topic-map gaps (topics no resource maps to)

${list(gaps, 'None.')}

## Stale verification (older than ${STALE_DAYS} days before ${dataAsOf})

${list(stale, 'None.')}

## Missing reviewer

${list(missingReviewer, 'None.')}

## Recommended next action

${(() => {
  const counts = {};
  for (const r of rows) counts[r.nextAction.replace(/\(\d+\)/, '(n)')] = (counts[r.nextAction.replace(/\(\d+\)/, '(n)')] ?? 0) + 1;
  return table(['Next action', 'Combinations'], Object.entries(counts).sort((a, b) => b[1] - a[1]));
})()}

Overall: ${totals.reviewStatus['review-pending'] ? `the largest outstanding item is human sign-off: ${totals.reviewStatus['review-pending']} review-pending resources need a named, authorised reviewer (queue: [academic-review/signoff-queue.md](academic-review/signoff-queue.md)).` : 'no review-pending resources.'}

## Every combination

${comboTable}
`;

const outputs = { [OUT.json]: json, [OUT.csv]: csv, [OUT.md]: md };
if (CHECK) {
  let stale = 0;
  for (const [p, content] of Object.entries(outputs)) {
    const cur = existsSync(p) ? readFileSync(p, 'utf8') : null;
    if (cur !== content) { console.log(`✗ ${p} is out of date — run npm run coverage:academic-v2`); stale++; }
  }
  if (stale) process.exit(1);
  console.log('Coverage report is current.');
} else {
  await mkdir('docs/reports', { recursive: true });
  for (const [p, content] of Object.entries(outputs)) await writeFile(p, content);
  console.log(`Wrote ${OUT.md}, ${OUT.json}, ${OUT.csv} — ${rows.length} rows, data as of ${dataAsOf}.`);
}
console.log(`  Source resources: ${totals.sourceResources}; active combinations: ${totals.activeCombinations}`);
console.log(`  Official source record: ${totals.combinationsWithOfficialSourceRecord}/${rows.length}; topic map: ${totals.combinationsWithTopicMap}/${rows.length}; zero-resource: ${totals.zeroResourceCombinations}`);
console.log(`  Depth: median ${totals.medianResourcesPerCombination} per combination; ${totals.combinationsUnderDepthTarget} under ${DEPTH_TARGET}`);
console.log(`  Quality: median ${totals.medianWordsPerResource} words; ${totals.resourcesUnder900Words} under ${THIN_WORDS}; ${totals.resourcesUnder400Words} under ${NOINDEX_WORDS}`);
console.log(`  Assessment: ${JSON.stringify(totals.assessment)}`);
console.log(`  Review status: ${JSON.stringify(totals.reviewStatus)}`);
