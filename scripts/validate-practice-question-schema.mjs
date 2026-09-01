#!/usr/bin/env node
/**
 * Flagship Dominance/Trust Programme, Sections 46-47 -- typed practice-
 * question data model validator.
 *
 * scripts/validate-practice-bank.mjs already checks parse *coverage* (does
 * every flagship-relevant file parse to at least one question) and
 * structural-markdown *leakage* (no stray "## " heading or "---" divider
 * inside a question's own text). Neither checks the *shape* of what comes
 * out the other end -- a question with `marks: 0`, an empty `id`, or a
 * `topicsByQualification` entry with a blank subtopic slug would sail
 * through both of those checks and still be a real, malformed question.
 * This validates the shape, against the real Zod schemas in
 * src/utils/practice/schema.ts, for:
 *
 *   [1] Every raw PracticeQuestion the parser produces (buildPracticeBank()).
 *   [2] Every ClientQuestion actually served to the browser, for every
 *       flagship code (buildClientQuestions() -- the exact function both
 *       the practice page and the /practice-data/{code}.json endpoint call,
 *       so this validates what genuinely ships, not a separate copy of it).
 *   [3] Two cross-field invariants Zod's per-object shape checking can't
 *       express on its own:
 *       - No duplicate `id` within one flagship code's question set -- the
 *         client engine looks questions up by id in several places
 *         (updateNotebook, updateSpacedRetry, markAttempt); a duplicate id
 *         would make those lookups pick the wrong question silently.
 *       - buildClientQuestions(spec).length matches
 *         practiceQuestionsForCode(spec.code).length exactly -- guards
 *         against a future edit to buildClientQuestions silently dropping
 *         or duplicating questions during the topic-label/HTML-conversion
 *         step.
 *   [4] dataHashFor is actually deterministic -- calling it twice on the
 *       same ClientQuestion[] must produce the same hash. D-105's caching
 *       correctness depends entirely on this: the cache-busting query
 *       string only works if the hash is a pure function of the content.
 *
 * Run as part of `npm run validate:academic`. Exits 1 on any problem.
 */
import { buildPracticeBank, practiceQuestionsForCode } from '../src/utils/practice/bank.ts';
import { flagshipSpecs } from '../src/utils/academic/index.ts';
import { buildClientQuestions, dataHashFor } from '../src/utils/practice/client-questions.ts';
import { PracticeQuestionSchema, ClientQuestionSchema } from '../src/utils/practice/schema.ts';

const problems = [];

function reportZodErrors(label, result) {
  if (result.success) return;
  for (const issue of result.error.issues) {
    const path = issue.path.length ? `.${issue.path.join('.')}` : '';
    problems.push(`${label}${path}: ${issue.message}`);
  }
}

// [1] Raw parsed questions.
const bank = buildPracticeBank();
for (const q of bank) {
  reportZodErrors(`[1] PracticeQuestion ${q.id}`, PracticeQuestionSchema.safeParse(q));
}

// [2] Client-facing questions, per flagship code -- the exact shape that
// actually ships (D-105: via src/pages/practice-data/[code].json.ts).
let totalClientQuestions = 0;
for (const spec of flagshipSpecs()) {
  const sourceQuestions = practiceQuestionsForCode(spec.code);
  if (sourceQuestions.length === 0) continue; // no /practice/{code}/ route exists for this spec -- nothing to validate

  const clientQuestions = buildClientQuestions(spec);
  totalClientQuestions += clientQuestions.length;

  for (const cq of clientQuestions) {
    reportZodErrors(`[2] ClientQuestion ${spec.code}/${cq.id}`, ClientQuestionSchema.safeParse(cq));
  }

  // [3a] No duplicate ids within this code's question set.
  const seenIds = new Map();
  for (const cq of clientQuestions) {
    if (seenIds.has(cq.id)) {
      problems.push(`[3] ${spec.code}: duplicate question id "${cq.id}" (first seen at index ${seenIds.get(cq.id)}, again at index ${clientQuestions.indexOf(cq)}) -- the client engine looks questions up by id and would silently resolve to the wrong one.`);
    } else {
      seenIds.set(cq.id, clientQuestions.indexOf(cq));
    }
  }

  // [3b] buildClientQuestions must not silently drop or duplicate questions
  // relative to the raw parsed bank for this code.
  if (clientQuestions.length !== sourceQuestions.length) {
    problems.push(`[3] ${spec.code}: buildClientQuestions() produced ${clientQuestions.length} question(s) but practiceQuestionsForCode() parsed ${sourceQuestions.length} -- these should always match 1:1.`);
  }

  // [4] dataHashFor determinism -- D-105's long-lived caching (public/_headers'
  // /practice-data/* immutable rule) depends on this being a pure function.
  const h1 = dataHashFor(clientQuestions);
  const h2 = dataHashFor(clientQuestions);
  if (h1 !== h2) {
    problems.push(`[4] ${spec.code}: dataHashFor() returned different hashes (${h1} vs ${h2}) for the identical input -- it must be deterministic, or the /practice-data/{code}.json?v={hash} cache-busting scheme is unsound.`);
  }
  if (!/^[0-9a-f]{10}$/.test(h1)) {
    problems.push(`[4] ${spec.code}: dataHashFor() returned "${h1}", not the expected 10-character lowercase hex string.`);
  }
}

if (problems.length > 0) {
  console.error('Practice-question schema validation FAILED:');
  for (const p of problems) console.error(`  ✗ ${p}`);
  console.error(`\n${problems.length} problem(s) found.`);
  process.exit(1);
}

console.log(`Practice-question schema validation OK — ${bank.length} raw question(s) and ${totalClientQuestions} client question(s) across ${flagshipSpecs().length} flagship specifications, all schema-valid; no duplicate ids, no count drift, dataHashFor deterministic.`);
