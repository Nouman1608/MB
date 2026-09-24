#!/usr/bin/env node
/**
 * D-286 -- build-failing checks for src/data/diagnostics.ts.
 *
 * A diagnostic is a fixed selection of questions from the published practice
 * bank. This fails the build if any selected question stops existing (a
 * practice file renamed, renumbered or removed), belongs to another code,
 * breaks the stated selection rules, or if a set drifts far from its
 * "about 10 minutes" promise. Run: npm run validate:diagnostics
 */
import { DIAGNOSTIC_SETS } from '../src/data/diagnostics.ts';
import { flagshipSpecs } from '../src/utils/academic/index.ts';
import { buildClientQuestions } from '../src/utils/practice/client-questions.ts';

const problems = [];
const seen = new Set();
for (const set of DIAGNOSTIC_SETS) {
  const key = `${set.code}/${set.slug}`;
  if (seen.has(key)) problems.push(`${key}: duplicate set`);
  seen.add(key);
  const spec = flagshipSpecs().find((f) => f.code === set.code);
  if (!spec) { problems.push(`${key}: ${set.code} is not a flagship code with a practice bank`); continue; }
  if (spec.boardSlug !== set.boardSlug || spec.qualificationSlug !== set.qualificationSlug || spec.subjectSlug !== set.subjectSlug) {
    problems.push(`${key}: board/qualification/subject do not match the flagship spec for ${set.code}`);
  }
  const bank = buildClientQuestions(spec);
  let marks = 0;
  const topics = new Set();
  for (const id of set.questionIds) {
    const q = bank.find((x) => x.id === id);
    if (!q) { problems.push(`${key}: question ${id} is not in the ${set.code} practice bank`); continue; }
    marks += q.marks;
    const text = q.qHtml.replace(/<[^>]+>/g, ' ');
    if (/diagram|figure|graph below|shown below|the table|table below/i.test(text)) problems.push(`${key}: ${id} refers to a figure or table the diagnostic cannot show`);
    const extendedSet = set.tier === 'extended';
    if (extendedSet && set.code !== '0620') problems.push(`${key}: only 0620 sets can be marked tier 'extended'`);
    if (/Background|beyond the .*syllabus|not examinable/i.test(text)) problems.push(`${key}: ${id} is marked Background/beyond the syllabus`);
    if (!extendedSet && /Extended/i.test(text)) problems.push(`${key}: ${id} is marked Extended, but the set is not an Extended set`);
    if (!extendedSet && set.code === '0620' && q.tier === 'supplement') problems.push(`${key}: ${id} is Supplement-only (Extended), but the set is for both tiers`);
    if (q.marks > 4) problems.push(`${key}: ${id} is worth ${q.marks} marks; diagnostic questions are 2-3 marks`);
    const topic = q.topics[0]?.key.split('/')[0];
    if (!topic) problems.push(`${key}: ${id} has no syllabus topic tag, so its result cannot be reported by topic`);
    topics.add(topic);
  }
  if (set.questionIds.length < 4 || set.questionIds.length > 8) problems.push(`${key}: ${set.questionIds.length} questions; keep a diagnostic at 4-8`);
  if (marks > 16) problems.push(`${key}: ${marks} marks is too many for about ${set.minutes} minutes`);
  if (topics.size < Math.min(4, set.questionIds.length)) problems.push(`${key}: only ${topics.size} distinct topics sampled`);
  console.log(`  ${key}: ${set.questionIds.length} questions, ${marks} marks, ${topics.size} topics${set.setReview ? `, reviewed by ${set.setReview.reviewerSlug}` : ', set not yet teacher-reviewed'}`);
}
if (problems.length) {
  console.error(`\nFAIL: ${problems.length} diagnostic problem(s):\n${problems.map((p) => '  x ' + p).join('\n')}`);
  process.exit(1);
}
console.log(`PASS: ${DIAGNOSTIC_SETS.length} diagnostic sets valid.`);
