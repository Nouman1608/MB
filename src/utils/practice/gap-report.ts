/**
 * Flagship Dominance/Trust Programme, Section 13 -- the flagship gap
 * dashboard.
 *
 * The brief's own text for §13 does not specify an exact data model, and
 * every prior phase of this programme declined to guess at one rather
 * than build something shallow or wrong. This round the owner picked a
 * concrete, bounded reading directly: practice-question coverage gaps --
 * for the five flagship specifications the practice engine already covers
 * (see FLAGSHIP_DEFINITIONS in ../academic/index.ts), which of the
 * syllabus's own official topics/subtopics (src/data/academic/
 * syllabus-topics.ts, the same taxonomy the practice engine itself reads
 * via topicsFor()) currently have zero practice questions written against
 * them.
 *
 * This deliberately does NOT attempt the other candidate readings of
 * "gap" surfaced while scoping this (content-depth thinness, search-
 * demand-weighted priority) -- those were explicitly not chosen this
 * round; see docs/decision-log.md D-108.
 *
 * Scope note: this can only ever cover the five flagship codes, because
 * practiceQuestionsForCode()/buildPracticeBank() themselves only parse
 * questions for flagship-relevant files (see bank.ts's own header comment)
 * -- there is no practice-question data for any other syllabus to report
 * a gap against.
 *
 * Two measurement caveats, found while building and verifying this
 * against the real data (not assumed -- checked against the actual
 * frontmatter and syllabus-topics.ts entries), both surfaced explicitly
 * rather than silently producing a misleading number:
 *
 *   1. A handful of topics in syllabus-topics.ts are recorded name-only,
 *      with an empty `subtopics: []` -- an honest, already-disclosed
 *      partial taxonomy (e.g. 0580 Mathematics has NO subtopic-level
 *      detail recorded for any topic yet; 0625 Physics has it for
 *      Topics 1-2 only, per that file's own `notes` field). There is
 *      nothing to measure a subtopic-level gap against for these, so
 *      they're reported separately as `topicsWithoutTaxonomy`, not
 *      silently folded into either "gap" or "covered."
 *   2. Some existing practice-questions resource files tag their
 *      `syllabusTopics:` frontmatter at topic level only (no `subtopic:`
 *      field) -- src/utils/practice/bank.ts's parser requires both
 *      fields together, so these questions carry no subtopic mapping at
 *      all in `topicsByQualification`, and every subtopic under that
 *      topic would otherwise show as a false "zero questions" gap even
 *      though real, shipped questions exist for the topic (verified:
 *      igcse-physics-thermal-physics-practice.md and
 *      igcse-physics-motion-forces-and-energy-practice.md, both 0625,
 *      are exactly this case). Rather than changing bank.ts's parser or
 *      the frontmatter (a content-tagging change, out of scope this
 *      round per the owner's own instruction to hold §14 content-depth
 *      work), this file independently re-reads the same frontmatter
 *      block to detect topic-only tagging and reports it as
 *      `topicOnlyTagged`, so a reader isn't misled into thinking a topic
 *      has no content at all.
 */
import { readFileSync, readdirSync } from 'node:fs';
import { flagshipSpecs } from '../academic/index.ts';
import { topicsFor } from '../../data/academic/syllabus-topics.ts';
import { practiceQuestionsForCode } from './bank.ts';

const RESOURCES_DIR = 'src/content/resources';

export interface SubtopicCoverage {
  topicNumber: number;
  topicName: string;
  topicSlug: string;
  subtopicNumber: string;
  subtopicName: string;
  subtopicSlug: string;
  /** How many parsed practice questions map to this exact subtopic. */
  questionCount: number;
}

export interface TopicOnlyTagging {
  topicNumber: number;
  topicName: string;
  topicSlug: string;
  resourceSlug: string;
  resourceTitle: string;
  /** How many parsed practice questions this resource file contributes to the bank. */
  questionCount: number;
}

export interface FlagshipGapReport {
  code: string;
  boardSlug: string;
  qualificationSlug: string;
  subjectSlug: string;
  syllabusSeries: string;
  /** Total parsed practice questions for this code. */
  totalQuestions: number;
  totalSubtopics: number;
  coveredSubtopics: number;
  coveragePct: number;
  /** Subtopics with zero practice questions AND no topic-only-tagged content covering their parent topic -- the actual "gap" list. */
  gaps: SubtopicCoverage[];
  /** Subtopics with 1-2 questions -- not a gap, but thin enough to flag. */
  thin: SubtopicCoverage[];
  /** Topics recorded name-only in syllabus-topics.ts (subtopics: []) -- not measurable at subtopic level, not counted as gap or covered. */
  topicsWithoutTaxonomy: { topicNumber: number; topicName: string; topicSlug: string }[];
  /** Resource files tagged to a topic but not a specific subtopic -- their questions exist but aren't attributable to any single subtopic row above. */
  topicOnlyTagged: TopicOnlyTagging[];
}

/** Subtopics at or below this question count are surfaced as "thin" (but not counted as a hard gap). */
const THIN_THRESHOLD = 2;

/**
 * Re-reads a resource file's `syllabusTopics:` frontmatter block, same
 * shape bank.ts's parseSyllabusTopics() reads, but keeps entries that
 * have a topic and qualification with NO subtopic (bank.ts's own parser
 * drops those, since the client-facing practice engine needs a full
 * topic+subtopic pair to build a display label -- see that file's
 * parseSyllabusTopics()). This is deliberately a separate, narrow re-read
 * rather than a change to bank.ts's parsing behaviour or output shape.
 */
function parseTopicOnlyEntries(fm: string): { qualification: string; topicSlug: string }[] {
  const blockMatch = fm.match(/syllabusTopics:\n((?:  -.*\n(?:    .*\n)*)*)/);
  if (!blockMatch) return [];
  const entries = blockMatch[1].split(/\n {2}- /).filter(Boolean);
  const out: { qualification: string; topicSlug: string }[] = [];
  for (const entry of entries) {
    const qualification = entry.match(/qualification:\s*"?([\w-]+)/)?.[1];
    const topicSlug = entry.match(/topic:\s*"?([\w-]+)/)?.[1];
    const subtopicSlug = entry.match(/subtopic:\s*"?([\w-]+)/)?.[1];
    if (qualification && topicSlug && !subtopicSlug) out.push({ qualification, topicSlug });
  }
  return out;
}

function parseFrontmatterField(fm: string, key: string): string | null {
  const m = fm.match(new RegExp(`^${key}:\\s*"?(.+?)"?$`, 'm'));
  return m ? m[1].trim() : null;
}

export function buildGapReports(): FlagshipGapReport[] {
  let resourceFiles: string[] = [];
  try {
    resourceFiles = readdirSync(RESOURCES_DIR).filter((f) => f.endsWith('.md'));
  } catch {
    resourceFiles = [];
  }

  return flagshipSpecs().map((spec) => {
    const topicMeta = topicsFor(spec.boardSlug, spec.qualificationSlug, spec.subjectSlug);
    const questions = practiceQuestionsForCode(spec.code);

    const countByKey = new Map<string, number>();
    for (const q of questions) {
      const entries = q.topicsByQualification[spec.qualificationSlug] ?? [];
      for (const t of entries) {
        const key = `${t.topicSlug}/${t.subtopicSlug}`;
        countByKey.set(key, (countByKey.get(key) ?? 0) + 1);
      }
    }

    // Topic-only tagging: re-scan the resource files that actually contributed
    // questions to THIS code's bank (not every resource file -- only ones
    // already established as flagship-relevant by bank.ts itself).
    const resourceSlugsInBank = new Set(questions.map((q) => q.resourceSlug));
    const questionCountByResourceSlug = new Map<string, number>();
    for (const q of questions) {
      questionCountByResourceSlug.set(q.resourceSlug, (questionCountByResourceSlug.get(q.resourceSlug) ?? 0) + 1);
    }
    const topicOnlyTagged: TopicOnlyTagging[] = [];
    const topicsWithTopicOnlyContent = new Set<string>();
    for (const file of resourceFiles) {
      const resourceSlug = file.replace(/\.md$/, '');
      if (!resourceSlugsInBank.has(resourceSlug)) continue;
      const raw = readFileSync(`${RESOURCES_DIR}/${file}`, 'utf-8');
      const fm = raw.split(/^---$/m)[1] ?? '';
      const title = parseFrontmatterField(fm, 'title') ?? file;
      for (const entry of parseTopicOnlyEntries(fm)) {
        if (entry.qualification !== spec.qualificationSlug) continue;
        const topic = topicMeta?.topics.find((t) => t.slug === entry.topicSlug);
        if (!topic) continue;
        topicOnlyTagged.push({
          topicNumber: topic.number,
          topicName: topic.name,
          topicSlug: topic.slug,
          resourceSlug,
          resourceTitle: title,
          questionCount: questionCountByResourceSlug.get(resourceSlug) ?? 0,
        });
        topicsWithTopicOnlyContent.add(topic.slug);
      }
    }

    const allSubtopics: SubtopicCoverage[] = [];
    const topicsWithoutTaxonomy: FlagshipGapReport['topicsWithoutTaxonomy'] = [];
    if (topicMeta) {
      for (const topic of topicMeta.topics) {
        if (topic.subtopics.length === 0) {
          topicsWithoutTaxonomy.push({ topicNumber: topic.number, topicName: topic.name, topicSlug: topic.slug });
          continue;
        }
        for (const st of topic.subtopics) {
          const key = `${topic.slug}/${st.slug}`;
          allSubtopics.push({
            topicNumber: topic.number,
            topicName: topic.name,
            topicSlug: topic.slug,
            subtopicNumber: st.number,
            subtopicName: st.name,
            subtopicSlug: st.slug,
            questionCount: countByKey.get(key) ?? 0,
          });
        }
      }
    }

    // A zero-count subtopic whose parent topic has topic-only-tagged content
    // isn't a clean "no content at all" gap -- exclude it from the hard gap
    // list (it's disclosed instead via topicOnlyTagged), but it also isn't
    // provably "covered" at subtopic level, so it's excluded from
    // coveredSubtopics too rather than silently inflating the coverage %.
    const gaps = allSubtopics.filter((s) => s.questionCount === 0 && !topicsWithTopicOnlyContent.has(s.topicSlug));
    const thin = allSubtopics.filter((s) => s.questionCount > 0 && s.questionCount <= THIN_THRESHOLD);
    const coveredSubtopics = allSubtopics.filter((s) => s.questionCount > 0).length;

    return {
      code: spec.code,
      boardSlug: spec.boardSlug,
      qualificationSlug: spec.qualificationSlug,
      subjectSlug: spec.subjectSlug,
      syllabusSeries: topicMeta?.syllabusSeries ?? 'unknown',
      totalQuestions: questions.length,
      totalSubtopics: allSubtopics.length,
      coveredSubtopics,
      coveragePct: allSubtopics.length ? Math.round((coveredSubtopics / allSubtopics.length) * 100) : 0,
      gaps,
      thin,
      topicsWithoutTaxonomy,
      topicOnlyTagged,
    };
  });
}
