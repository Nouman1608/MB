#!/usr/bin/env node
/**
 * Flagship Dominance/Trust Programme, Section 13 -- CLI/portable companion
 * to the on-site gap dashboard (src/pages/admin/practice-gaps.astro).
 *
 * Reporting only, same as scripts/academic-coverage-dashboard.mjs before
 * it: never fails the build, not part of `npm run validate:academic` or
 * `npm run audit:all`. Writes a JSON and a Markdown report to
 * docs/reports/ from the exact same computation
 * (src/utils/practice/gap-report.ts) the on-site dashboard uses, so the
 * two can never drift -- this exists purely so the owner has a portable
 * copy (to open, diff over time, or cross-reference against their own
 * past-paper source files) without needing to open the site.
 *
 * Usage: node --experimental-strip-types scripts/practice-gap-report.mjs
 */
import { writeFile, mkdir } from 'node:fs/promises';
import { buildGapReports } from '../src/utils/practice/gap-report.ts';
import { boardBySlug } from '../src/data/academic/boards.ts';
import { qualificationBySlug } from '../src/data/academic/qualifications.ts';
import { subjectBySlug } from '../src/data/academic/subjects.ts';

const reports = buildGapReports();
const generatedAt = new Date().toISOString();

const specLabel = (r) => {
  const board = boardBySlug(r.boardSlug)?.name ?? r.boardSlug;
  const qual = qualificationBySlug(r.qualificationSlug)?.name ?? r.qualificationSlug;
  const subject = subjectBySlug(r.subjectSlug)?.name ?? r.subjectSlug;
  return `${board} ${qual} ${subject}`;
};

await mkdir('docs/reports', { recursive: true });

await writeFile(
  'docs/reports/practice-gap-report.json',
  JSON.stringify({ generatedAt, reports }, null, 2) + '\n',
  'utf-8'
);

const lines = [];
lines.push('# Practice-question gap report');
lines.push('');
lines.push(`Generated ${generatedAt}. Section 13 scope: practice-question coverage gaps for the`);
lines.push('five flagship specifications only -- see src/utils/practice/gap-report.ts for the full');
lines.push('rationale and docs/decision-log.md D-108 for what this deliberately does not attempt.');
lines.push('');

const totalGaps = reports.reduce((s, r) => s + r.gaps.length, 0);
const totalThin = reports.reduce((s, r) => s + r.thin.length, 0);
lines.push(`**${totalGaps} zero-question subtopics, ${totalThin} thin (1-2 question) subtopics, across all 5 codes.**`);
lines.push('');

for (const r of reports) {
  lines.push(`## ${specLabel(r)} (${r.code}, ${r.syllabusSeries})`);
  lines.push('');
  lines.push(
    `${r.totalQuestions} questions · ${r.coveredSubtopics}/${r.totalSubtopics} subtopics covered (${r.coveragePct}%)`
  );
  lines.push('');
  if (r.gaps.length === 0) {
    lines.push('No zero-question subtopics.');
  } else {
    lines.push(`### Gaps — zero questions (${r.gaps.length})`);
    lines.push('');
    for (const g of r.gaps) {
      lines.push(`- ${g.topicNumber}. ${g.topicName} — ${g.subtopicNumber} ${g.subtopicName}`);
    }
  }
  lines.push('');
  if (r.thin.length > 0) {
    lines.push(`### Thin — 1-2 questions (${r.thin.length})`);
    lines.push('');
    for (const t of r.thin) {
      lines.push(`- ${t.topicNumber}. ${t.topicName} — ${t.subtopicNumber} ${t.subtopicName} (${t.questionCount})`);
    }
    lines.push('');
  }
  if (r.topicOnlyTagged.length > 0) {
    lines.push(`### Topic-tagged only, not subtopic-level (${r.topicOnlyTagged.length})`);
    lines.push('');
    lines.push('Real questions exist for these topics, but the source frontmatter doesn\'t say which');
    lines.push('subtopic -- excluded from both the gap list and the coverage count above.');
    lines.push('');
    for (const t of r.topicOnlyTagged) {
      lines.push(`- ${t.topicNumber}. ${t.topicName} — ${t.resourceSlug} (${t.questionCount} question${t.questionCount === 1 ? '' : 's'})`);
    }
    lines.push('');
  }
  if (r.topicsWithoutTaxonomy.length > 0) {
    lines.push(`### No subtopic taxonomy recorded (${r.topicsWithoutTaxonomy.length})`);
    lines.push('');
    lines.push('The official syllabus topic data records these topics by name only -- nothing to');
    lines.push('measure a subtopic-level gap against yet.');
    lines.push('');
    for (const t of r.topicsWithoutTaxonomy) {
      lines.push(`- ${t.topicNumber}. ${t.topicName}`);
    }
    lines.push('');
  }
}

await writeFile('docs/reports/practice-gap-report.md', lines.join('\n') + '\n', 'utf-8');

console.log(`Wrote docs/reports/practice-gap-report.json and .md -- ${totalGaps} gaps, ${totalThin} thin, across ${reports.length} flagship codes.`);
