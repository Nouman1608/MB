/**
 * Flagship Dominance/Trust Programme, D-104 follow-up -- shared builder for
 * the practice engine's client-facing question payload.
 *
 * Previously this logic (markdown-to-HTML conversion, topic-label
 * resolution) lived only inside src/pages/practice/[code]/index.astro's
 * frontmatter, and the resulting array was embedded directly into the page
 * as inline JSON (see docs/decision-log.md D-104: on the two largest
 * flagship codes this inflated the HTML response by 180-280KB raw, with no
 * independent cache lifetime -- every repeat visit re-downloaded the full
 * question bank).
 *
 * Extracted here so the SAME logic can back both the page (which still
 * needs `clientQuestions.length` server-side, for the initial "Question 1
 * of N" text and the noscript fallback) and a new static JSON endpoint
 * (src/pages/practice-data/[code].json.ts) that serves the actual question
 * array as its own cacheable resource. One source of truth, not two
 * copies that could drift.
 */
import { practiceQuestionsForCode, type PracticeQuestion } from './bank.ts';
import { topicsFor } from '../../data/academic/syllabus-topics.ts';
import type { flagshipSpecs } from '../academic/index.ts';
import { createHash } from 'node:crypto';

export interface ClientQuestion {
  id: string;
  qHtml: string;
  aHtml: string;
  marks: number;
  resourceSlug: string;
  resourceTitle: string;
  topics: { key: string; label: string }[];
}

type FlagshipSpecWithCombination = ReturnType<typeof flagshipSpecs>[number];

// Small, deliberately-scoped markdown-to-HTML conversion -- the practice-
// questions prose only ever uses **bold**, `inline code`, occasional
// *italic*, and line breaks (verified against all 232 parsed questions
// before this was built; see docs/decision-log.md D-067). No tables, code
// fences, lists or links appear in this content, so a full markdown
// pipeline/dependency isn't needed -- this handles exactly what's there.
function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function mdToHtml(md: string): string {
  const withoutLeadingNumber = md.replace(/^\*\*\d+\.\*\*\s*/, '').replace(/^\*\*\d+\.\s*/, (m) => m);
  const escaped = escapeHtml(withoutLeadingNumber);
  const withCode = escaped.replace(/`([^`]+)`/g, '<code>$1</code>');
  const withBold = withCode.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  const withItalic = withBold.replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, '$1<em>$2</em>');
  const paragraphs = withItalic
    .split(/\n\n+/)
    .map((p) => `<p>${p.trim().replace(/\n/g, '<br />')}</p>`)
    .join('');
  return paragraphs;
}

/**
 * Builds the exact same ClientQuestion[] the practice page used to embed
 * inline, for a given flagship spec. Deterministic (no randomness), so the
 * page and the JSON endpoint always agree, and so `dataHash` below is
 * stable across a build.
 */
export function buildClientQuestions(spec: FlagshipSpecWithCombination): ClientQuestion[] {
  const questions = practiceQuestionsForCode(spec.code);
  const topicMeta = topicsFor(spec.boardSlug, spec.qualificationSlug, spec.subjectSlug);
  const topicLabel = new Map<string, string>();
  if (topicMeta) {
    for (const t of topicMeta.topics) {
      for (const st of t.subtopics) {
        topicLabel.set(`${t.slug}/${st.slug}`, `${t.name} — ${st.name}`);
      }
    }
  }

  return questions.map((q: PracticeQuestion) => {
    const entries = q.topicsByQualification[spec.qualificationSlug] ?? [];
    const topics = entries.map((t) => {
      const key = `${t.topicSlug}/${t.subtopicSlug}`;
      return { key, label: topicLabel.get(key) ?? key.replace(/-/g, ' ') };
    });
    return {
      id: q.id,
      qHtml: mdToHtml(q.questionMarkdown),
      aHtml: mdToHtml(q.answerMarkdown),
      marks: q.marks,
      resourceSlug: q.resourceSlug,
      resourceTitle: q.resourceTitle,
      topics,
    };
  });
}

/**
 * Short, stable content hash of a code's question payload -- used as a
 * cache-busting query param (`/practice-data/{code}.json?v={hash}`) so the
 * JSON response can carry a long, immutable Cache-Control safely: the URL
 * itself changes whenever the underlying content does, at the next build,
 * rather than relying on a short max-age and hoping.
 */
export function dataHashFor(clientQuestions: ClientQuestion[]): string {
  return createHash('sha256').update(JSON.stringify(clientQuestions)).digest('hex').slice(0, 10);
}
