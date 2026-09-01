/**
 * Flagship Dominance/Trust Programme, Sections 46-47 -- a typed data model
 * for the practice-question bank, backed by real Zod schemas (via
 * `astro/zod`, already bundled with Astro -- no new dependency, matching
 * this repo's standing aversion to adding one for something the toolchain
 * already carries).
 *
 * Two related but distinct shapes exist in this bank, and this file types
 * both:
 *
 *   - `PracticeQuestion` (src/utils/practice/bank.ts) -- the raw parsed
 *     question, still carrying `questionMarkdown`/`answerMarkdown` and its
 *     full `topicsByQualification` map. This is what
 *     `scripts/validate-practice-bank.mjs` already checks for parse
 *     coverage and structural-markdown leakage -- this schema adds
 *     field-level shape/invariant checking that validator doesn't do
 *     (empty strings, non-positive marks, missing topic slugs, etc.).
 *   - `ClientQuestion` (src/utils/practice/client-questions.ts) -- the
 *     per-code array actually served to the browser (as of D-105, via
 *     src/pages/practice-data/[code].json.ts), already HTML-converted and
 *     topic-labelled. This is the shape the practice engine's client-side
 *     JavaScript depends on at runtime -- a malformed entry here would be
 *     a real, user-visible break (a blank question card, a missing topic
 *     badge), not just an internal-data-quality issue.
 *
 * `scripts/validate-practice-question-schema.mjs` runs both schemas
 * against the real, live-built bank (not fixtures) as part of
 * `npm run validate:academic`.
 */
import { z } from 'astro/zod';

export const TopicRefSchema = z.object({
  topicSlug: z.string().min(1, 'topicSlug must not be empty'),
  subtopicSlug: z.string().min(1, 'subtopicSlug must not be empty'),
});

/** Raw parsed question, as produced by src/utils/practice/bank.ts. */
export const PracticeQuestionSchema = z.object({
  id: z.string().min(1, 'id must not be empty'),
  resourceSlug: z.string().min(1, 'resourceSlug must not be empty'),
  resourceTitle: z.string().min(1, 'resourceTitle must not be empty'),
  syllabusCodes: z.array(z.string().min(1)).min(1, 'syllabusCodes must list at least one code'),
  topicsByQualification: z.record(z.string(), z.array(TopicRefSchema)),
  questionNumber: z.number().int().positive('questionNumber must be a positive integer'),
  questionMarkdown: z.string().min(1, 'questionMarkdown must not be empty'),
  answerMarkdown: z.string().min(1, 'answerMarkdown must not be empty'),
  marks: z.number().int().positive('marks must be a positive integer'),
});
export type PracticeQuestionShape = z.infer<typeof PracticeQuestionSchema>;

export const ClientTopicSchema = z.object({
  key: z.string().min(1, 'topic key must not be empty'),
  label: z.string().min(1, 'topic label must not be empty'),
});

/**
 * The array actually served to the browser (src/pages/practice-data/
 * [code].json.ts, and formerly the inline <script type="application/json">
 * this replaced -- see D-104/D-105). `qHtml`/`aHtml` are HTML by this
 * point, not markdown -- this schema does not re-validate the markdown
 * conversion itself (validate-practice-bank.mjs's structural-leakage check
 * already covers that upstream), only that the shape the client engine
 * actually depends on at runtime is well-formed.
 */
export const ClientQuestionSchema = z.object({
  id: z.string().min(1, 'id must not be empty'),
  qHtml: z.string().min(1, 'qHtml must not be empty'),
  aHtml: z.string().min(1, 'aHtml must not be empty'),
  marks: z.number().int().positive('marks must be a positive integer'),
  resourceSlug: z.string().min(1, 'resourceSlug must not be empty'),
  resourceTitle: z.string().min(1, 'resourceTitle must not be empty'),
  topics: z.array(ClientTopicSchema),
});
export type ClientQuestionShape = z.infer<typeof ClientQuestionSchema>;
