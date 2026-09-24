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
import { readFileSync, existsSync } from 'node:fs';

// D-328 (2026-09-25): a set's `setReview` puts "This set was reviewed by <name>"
// on a public page, so it must name a real, subject-matched reviewer and a real
// date. Until now nothing checked it, because no set had one. Same bar as
// validate-review-integrity.mjs uses for resource reviews: the author exists and
// has isReviewer: true. In addition the reviewer's role must name the set's
// subject, and the date must be a real ISO date that is not in the future.
const SUBJECT_ROLE = {
  biology: /biology/i, business: /business/i, chemistry: /chemistry/i,
  'computer-science': /computer science/i, economics: /economics/i,
  mathematics: /mathematics|statistics/i, physics: /physics/i,
};
function authorFrontmatter(slug) {
  const file = `src/content/authors/${slug}.md`;
  if (!existsSync(file)) return null;
  const fm = readFileSync(file, 'utf8').replace(/\r\n/g, '\n').split('\n---')[0];
  return {
    role: fm.match(/^role:\s*"?([^"\n]*)"?/m)?.[1] ?? '',
    isReviewer: /^isReviewer:\s*true\s*$/m.test(fm),
  };
}
const today = new Date().toISOString().slice(0, 10);
// D-324: Cambridge IGCSE syllabuses with Core/Extended tiers that have diagnostic sets.
const TIERED = ['0620', '0610', '0580', '0625'];

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
    if (/diagram|\bfig(ure)?\.?\s*\d|the figure|figure below|graph below|shown below|the table|table below/i.test(text.replace(/significant figures?/gi, ''))) problems.push(`${key}: ${id} refers to a figure or table the diagnostic cannot show`);
    const extendedSet = set.tier === 'extended';
    if (extendedSet && !TIERED.includes(set.code)) problems.push(`${key}: only tiered IGCSE sets (${TIERED.join(', ')}) can be marked tier 'extended'`);
    // D-329: a diagnostic shows one question on its own, so it must not lean on another
    // question in its source file ("the Bicycle class from Question 1", "the same system
    // as Question 4"). Only the question text is checked: answers legitimately name real
    // past-paper questions ("Try the real question next: ... Question 4").
    if (/\bQuestions? \d+\b|\b(previous|above|earlier|last|preceding) question\b/i.test(text)) problems.push(`${key}: ${id} refers to another question the diagnostic does not show`);
    if (/Background(?! (radiation|count))|beyond the .*syllabus|not examinable/i.test(text)) problems.push(`${key}: ${id} is marked Background/beyond the syllabus`);
    if (!extendedSet && TIERED.includes(set.code) && /Extended|Supplement/i.test(text)) problems.push(`${key}: ${id} is marked Extended, but the set is not an Extended set`);
    if (!extendedSet && set.code === '0620' && q.tier === 'supplement') problems.push(`${key}: ${id} is Supplement-only (Extended), but the set is for both tiers`);
    if (q.marks > 4) problems.push(`${key}: ${id} is worth ${q.marks} marks; diagnostic questions are 2-3 marks`);
    const topic = q.topics[0]?.key.split('/')[0];
    if (!topic) problems.push(`${key}: ${id} has no syllabus topic tag, so its result cannot be reported by topic`);
    topics.add(topic);
  }
  if (set.setReview) {
    const { reviewerSlug, reviewedOn } = set.setReview;
    const a = authorFrontmatter(reviewerSlug);
    if (!a) problems.push(`${key}: setReview names reviewer "${reviewerSlug}", who has no file in src/content/authors/`);
    else {
      if (!a.isReviewer) problems.push(`${key}: setReview reviewer "${reviewerSlug}" is not isReviewer: true`);
      const re = SUBJECT_ROLE[set.subjectSlug];
      if (!re || !re.test(a.role)) problems.push(`${key}: setReview reviewer "${reviewerSlug}" (${a.role || 'no role'}) does not teach ${set.subjectSlug}`);
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(reviewedOn) || Number.isNaN(Date.parse(reviewedOn))) problems.push(`${key}: setReview reviewedOn "${reviewedOn}" is not an ISO date (YYYY-MM-DD)`);
    else if (reviewedOn > today) problems.push(`${key}: setReview reviewedOn ${reviewedOn} is in the future`);
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
