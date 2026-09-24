#!/usr/bin/env node
/**
 * D-328 (2026-09-25) -- print a review pack for the 10-minute diagnostics.
 *
 * A diagnostic set may only carry `setReview` (and so show "This set was
 * reviewed by <name>" on its page) after a named subject teacher has checked
 * THAT SET: the spread of topics, each worked answer, the mark points, the
 * real-paper pointer in each answer, and the timing. This script prints what
 * the teacher needs to do that, straight from the live data, so the pack can
 * never drift from what students see.
 *
 * Usage:
 *   npm run review:diagnostics -- chemistry            one subject
 *   npm run review:diagnostics -- 0620                 one syllabus code
 *   npm run review:diagnostics -- all > pack.md        everything
 *
 * Output is Markdown. It changes nothing.
 */
import { DIAGNOSTIC_SETS } from '../src/data/diagnostics.ts';
import { flagshipSpecs } from '../src/utils/academic/index.ts';
import { buildClientQuestions } from '../src/utils/practice/client-questions.ts';

const filter = (process.argv[2] ?? 'all').toLowerCase();
const text = (html) => html.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();

const sets = DIAGNOSTIC_SETS.filter((s) => filter === 'all' || s.subjectSlug === filter || s.code.toLowerCase() === filter);
if (!sets.length) {
  console.error(`No diagnostic sets match "${filter}". Use a subject slug (e.g. chemistry), a code (e.g. 0620) or "all".`);
  process.exit(1);
}

const out = [];
out.push(`# Diagnostic set review pack: ${filter}`);
out.push('');
out.push(`Generated ${new Date().toISOString().slice(0, 16).replace('T', ' ')} UTC from \`src/data/diagnostics.ts\`. ${sets.length} set(s).`);
out.push('');
out.push('For each set, tick every box or write what is wrong. A set is "reviewed" only when every box is ticked or every problem has been fixed and re-checked. Send the completed pack back with your name and the date.');
out.push('');
for (const set of sets) {
  const spec = flagshipSpecs().find((f) => f.code === set.code);
  const bank = buildClientQuestions(spec);
  const qs = set.questionIds.map((id) => bank.find((q) => q.id === id));
  const marks = qs.reduce((n, q) => n + (q?.marks ?? 0), 0);
  out.push(`## ${set.code} ${set.slug} — ${set.scopeLabel}`);
  out.push('');
  out.push(`Page: https://marlbridge.com/practice/${set.code}/diagnostic/${set.slug}/  ·  ${qs.length} questions, ${marks} marks, stated time ${set.minutes} minutes`);
  if (set.modelledOn) out.push(`Modelled on: ${set.modelledOn}`);
  out.push(`Audience: ${set.audience}`);
  out.push(`Current review status: ${set.setReview ? `reviewed by ${set.setReview.reviewerSlug} on ${set.setReview.reviewedOn}` : 'not reviewed as a set'}`);
  out.push('');
  out.push('Set as a whole:');
  out.push('- [ ] The topics are a fair spread of the syllabus for the stated audience');
  out.push(`- [ ] ${marks} marks can realistically be done in about ${set.minutes} minutes`);
  out.push('- [ ] Nothing in the set is outside the syllabus or the wrong tier');
  out.push('');
  qs.forEach((q, i) => {
    if (!q) { out.push(`### Q${i + 1} — MISSING from the practice bank`); return; }
    out.push(`### Q${i + 1} — ${q.id} [${q.marks} marks] — topic: ${q.topics[0]?.key ?? 'none'}`);
    out.push(`Source file: src/content/resources/${q.resourceSlug}.md`);
    out.push('');
    out.push(`**Question.** ${text(q.qHtml)}`);
    out.push('');
    out.push(`**Worked answer shown to students.** ${text(q.aHtml)}`);
    out.push('');
    out.push('- [ ] The answer is correct and complete');
    out.push('- [ ] The mark points award exactly the stated marks');
    if (/Try the real question next/.test(q.aHtml)) out.push('- [ ] The "Try the real question next" paper and question number are right');
    if (/Examiner insight|Mark-scheme insight/.test(q.aHtml)) out.push('- [ ] The examiner/mark-scheme insight matches the published examiner report or mark scheme');
    out.push('');
  });
  out.push('Reviewer name: ____________________  Date checked: ____________');
  out.push('');
}
console.log(out.join('\n'));
