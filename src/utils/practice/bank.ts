/**
 * v2.0 AUTHORITY/PRACTICE/TOOLS/GROWTH MEGA PROGRAMME WS6 -- the practice-
 * engine question bank.
 *
 * There is no structured (machine-gradable) question data anywhere in this
 * repository -- every `resourceType: "practice-questions"` file is prose:
 * numbered exam-style questions in a "## Questions" section, each with a
 * marks tag like `[3]`, followed by a matching numbered "## Answers"
 * section with full worked answers. This is genuinely useful content, but
 * it cannot honestly power an auto-graded multiple-choice quiz -- there is
 * no single machine-checkable "correct answer" field, and inventing one
 * (e.g. reducing a multi-part written answer to a fake MCQ) would mean
 * presenting content the site doesn't actually have.
 *
 * So the practice engine this file powers is a **self-check** engine, not
 * an auto-grader: the reader attempts a question, reveals the real worked
 * answer, and marks their own attempt right or wrong. This is an honest
 * reflection of what the underlying content actually supports, and is a
 * standard, well-understood study pattern (flashcard-style self-testing)
 * rather than a simulation of auto-grading the site can't really do.
 *
 * This module parses that existing prose into discrete, addressable
 * questions (one per top-level numbered item, sub-parts included as part
 * of the same question) for the five named flagship specifications only
 * (see FLAGSHIP_DEFINITIONS in ../academic/index.ts) -- the same
 * concentration-of-effort principle the whole growth programme applies
 * elsewhere.
 *
 * Post-v2.0 Quality Closure WS8 (2026-08-30): the parsing-coverage claim
 * this comment originally made ("verified against all 76 flagship files")
 * did not hold -- roughly half of the flagship-relevant files organise
 * their numbered items under "## Section A" / "## Section B" subheadings
 * rather than a single "## Questions" heading, and the parser silently
 * produced zero questions for every one of them (see the extraction logic
 * below and docs/decision-log.md D-087 for the fix and the real,
 * re-measured coverage). `scripts/validate-practice-bank.mjs` now asserts
 * this directly -- any flagship-relevant practice-questions file that
 * parses to zero questions fails validation, so this can't silently
 * regress again.
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { flagshipSpecs } from '../academic/index.ts';

export interface PracticeQuestion {
  id: string;
  resourceSlug: string;
  resourceTitle: string;
  syllabusCodes: string[];
  /** topic/subtopic slugs this question maps to, per qualification slug (igcse/a-level/etc). */
  topicsByQualification: Record<string, { topicSlug: string; subtopicSlug: string }[]>;
  questionNumber: number;
  questionMarkdown: string;
  answerMarkdown: string;
  marks: number;
}

const RESOURCES_DIR = 'src/content/resources';

function parseFrontmatterField(fm: string, key: string): string | null {
  const m = fm.match(new RegExp(`^${key}:\\s*"?(.+?)"?$`, 'm'));
  return m ? m[1].trim() : null;
}

function parseArrayField(fm: string, key: string): string[] {
  const m = fm.match(new RegExp(`${key}:\\s*\\[(.*?)\\]`));
  if (!m) return [];
  return m[1]
    .split(',')
    .map((s) => s.trim().replace(/^["']|["']$/g, ''))
    .filter(Boolean);
}

/** Parses the `syllabusTopics:` YAML-ish block into { qualification, topic, subtopic }[]. */
function parseSyllabusTopics(fm: string): { qualification: string; topicSlug: string; subtopicSlug: string }[] {
  const blockMatch = fm.match(/syllabusTopics:\n((?:  -.*\n(?:    .*\n)*)*)/);
  if (!blockMatch) return [];
  const entries = blockMatch[1].split(/\n {2}- /).filter(Boolean);
  const out: { qualification: string; topicSlug: string; subtopicSlug: string }[] = [];
  for (const entry of entries) {
    const qualification = entry.match(/qualification:\s*"?([\w-]+)/)?.[1];
    const topicSlug = entry.match(/topic:\s*"?([\w-]+)/)?.[1];
    const subtopicSlug = entry.match(/subtopic:\s*"?([\w-]+)/)?.[1];
    if (qualification && topicSlug && subtopicSlug) out.push({ qualification, topicSlug, subtopicSlug });
  }
  return out;
}

/** Splits a "## Questions" or "## Answers" section body into { number, text }[] by top-level `**N.**` markers. */
function splitNumbered(section: string): { number: number; text: string }[] {
  const markerRe = /\n\*\*(\d+)\./g;
  const marks: { index: number; number: number }[] = [];
  let m: RegExpExecArray | null;
  while ((m = markerRe.exec(section))) {
    marks.push({ index: m.index, number: Number(m[1]) });
  }
  const out: { number: number; text: string }[] = [];
  for (let i = 0; i < marks.length; i++) {
    const start = marks[i].index;
    const end = i + 1 < marks.length ? marks[i + 1].index : section.length;
    out.push({ number: marks[i].number, text: section.slice(start, end).trim() });
  }
  return out;
}

let cachedBank: PracticeQuestion[] | null = null;

export function buildPracticeBank(): PracticeQuestion[] {
  if (cachedBank) return cachedBank;

  const flagshipCodes = new Set(flagshipSpecs().map((f) => f.code));
  const files = readdirSync(RESOURCES_DIR).filter((f) => f.endsWith('.md'));
  const questions: PracticeQuestion[] = [];

  for (const file of files) {
    const raw = readFileSync(join(RESOURCES_DIR, file), 'utf-8');
    const parts = raw.split(/^---$/m);
    if (parts.length < 3) continue;
    const fm = parts[1];
    const body = parts.slice(2).join('---');

    const resourceType = parseFrontmatterField(fm, 'resourceType');
    if (resourceType !== 'practice-questions') continue;

    const syllabusCodes = parseArrayField(fm, 'syllabusCodes');
    if (!syllabusCodes.some((c) => flagshipCodes.has(c))) continue;

    const title = parseFrontmatterField(fm, 'title') ?? file;
    const resourceSlug = file.replace(/\.md$/, '');
    const topicEntries = parseSyllabusTopics(fm);
    const topicsByQualification: PracticeQuestion['topicsByQualification'] = {};
    for (const t of topicEntries) {
      (topicsByQualification[t.qualification] ??= []).push({ topicSlug: t.topicSlug, subtopicSlug: t.subtopicSlug });
    }

    if (!body.includes('## Answers')) continue;
    const [beforeAnswers, afterAnswersRaw] = body.split('## Answers');

    /**
     * Post-v2.0 Quality Closure WS8 (2026-08-30): a large share of the
     * flagship practice-questions files organise their numbered items
     * under "## Section A" / "## Section B" subheadings instead of (or as
     * well as) a single "## Questions" heading. Splitting strictly on
     * '## Questions' silently produced zero questions for every one of
     * those files -- the number-marker parser below never actually needs
     * that heading, since splitNumbered() keys entirely off the "**N.**"
     * markers themselves, and any prose before the very first marker is
     * already excluded automatically (marker-matching starts at the first
     * match, so an intro blockquote or a "## Questions"/"## Section A"
     * heading before question 1 never ends up in any question's text).
     * So: use the whole pre-Answers body when there's no single
     * "## Questions" heading to split on, rather than discarding real,
     * complete, numbered content (see docs/decision-log.md D-087). Any
     * "## Section X" subheading or standalone "---" divider that falls
     * *between* two numbered items (and would otherwise get swallowed
     * into the trailing text of whichever item precedes it) is stripped
     * below, in both the questions and answers sections -- this also
     * fixes a pre-existing, separate leak where the final question in
     * every file picked up a stray trailing "---" from the divider before
     * the "## Answers" heading.
     */
    const questionsSectionRaw = beforeAnswers.includes('## Questions')
      ? beforeAnswers.split('## Questions').slice(1).join('## Questions')
      : beforeAnswers;
    const answersSectionRaw = afterAnswersRaw.split(/\n## /)[0] ?? '';
    const stripStructuralNoise = (s: string): string =>
      s.replace(/^#{2,3}\s.*$/gm, '').replace(/^-{3,}\s*$/gm, '');
    const questionsSection = stripStructuralNoise(questionsSectionRaw);
    const answersSection = stripStructuralNoise(answersSectionRaw);

    const qItems = splitNumbered(questionsSection);
    const aItems = splitNumbered(answersSection);
    if (qItems.length === 0 || qItems.length !== aItems.length) continue;
    if (qItems.some((q, i) => q.number !== aItems[i].number)) continue;

    for (let i = 0; i < qItems.length; i++) {
      const marksFound = [...qItems[i].text.matchAll(/\[(\d+)\]/g)].map((m) => Number(m[1]));
      const marks = marksFound.reduce((sum, n) => sum + n, 0);
      questions.push({
        id: `${resourceSlug}-q${qItems[i].number}`,
        resourceSlug,
        resourceTitle: title,
        syllabusCodes,
        topicsByQualification,
        questionNumber: qItems[i].number,
        questionMarkdown: qItems[i].text,
        answerMarkdown: aItems[i].text,
        marks: marks || 1,
      });
    }
  }

  cachedBank = questions;
  return questions;
}

/** All parsed questions belonging to a given flagship syllabus code. */
export function practiceQuestionsForCode(code: string): PracticeQuestion[] {
  return buildPracticeBank().filter((q) => q.syllabusCodes.includes(code));
}
