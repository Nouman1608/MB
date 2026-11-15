/**
 * D-339 (2026-09-27) -- "Syllabus points covered" on a resource page.
 *
 * The resource library audit found that 22 of the 55 pages written for both
 * Cambridge IGCSE Chemistry 0620 (tiered: Core / Extended) and O Level 5070
 * (not tiered) never say which parts are Core and which are Extended only.
 * A Core candidate cannot tell, for example, that mole calculations (0620
 * 3.3) are Supplement content.
 *
 * This lists the syllabus points a resource is mapped to (its own
 * `syllabusTopics`), with the tier taken ONLY from the subtopic's `tier`
 * where `tierVerified` is true (read from the printed syllabus table), and
 * the 9701 stage (AS / A Level) from the topic. Nothing is inferred: an
 * unverified tier is not shown.
 *
 * D-448 (2026-11-15, academic-quality remediation, findings A and E) --
 * topic MEMBERSHIP is not topic COVERAGE. Before this, every topic-level
 * mapping (an entry with no `subtopic`) was printed as "<topic> (whole
 * topic)", including the 835 entries whose own resource also listed only
 * some of that topic's subtopics -- e.g. the 0620 page teaching 2.1-2.3
 * showed "2 Atoms, elements and compounds (whole topic)". Now:
 *   - a topic-level entry alongside subtopic entries of the same topic is
 *     membership only: no row of its own; the group carries a factual
 *     "N of the M subtopics" context line instead;
 *   - a topic-level entry on its own is shown as "(topic-level mapping)":
 *     the page belongs to the topic, and which outcomes it covers is not
 *     itemised;
 *   - "(whole topic)" / "(all Core content)" appear ONLY when the entry
 *     carries an explicit `coverage` claim, which
 *     scripts/validate-academic-content.mjs checks against the taxonomy.
 * The syllabus record is chosen by the resource's own `syllabusSeries`
 * where a full record for that series exists (e.g. 5014 2025-2026, still
 * sat), and otherwise the current record -- never a 'future' one.
 */
import { SYLLABUS_VERSIONS, type SyllabusVersion } from '../../data/academic/syllabus-topics.ts';
import { SEPARATE_AS_QUALIFICATION_BOARDS } from '../content/level-label.ts';

export type TierLabel = 'Core' | 'Extended only' | 'Core and Extended';
export type CoverageClaim = 'whole-topic' | 'whole-topic-core';

export interface SyllabusPoint {
  number: string;
  name: string;
  tier?: TierLabel;
  /** 'subtopic' = a mapped subtopic; 'topic' = a topic-level row (no subtopic named). */
  level: 'subtopic' | 'topic';
  /** Set only for a topic row with a validated explicit coverage claim. */
  coverage?: CoverageClaim;
}

/** A parent topic the resource lists subtopics of, with how many it lists. */
export interface TopicContext {
  number: string;
  name: string;
  listed: number;
  /** Subtopics recorded for the topic in the syllabus record. */
  recorded: number;
  /** True when the record's subtopic list is complete (`subtopicsComplete`). */
  recordComplete: boolean;
}

export interface SyllabusPointGroup {
  code: string;
  /** The syllabus series the points are numbered against. */
  series: string;
  /** e.g. 'AS Level' / 'A Level' for 9701; undefined when not staged. */
  stage?: string;
  tiered: boolean;
  points: SyllabusPoint[];
  /** Parent topics this resource covers only through named subtopics. */
  topicContext: TopicContext[];
}

export interface MappingInput {
  qualification: string;
  topic: string;
  subtopic?: string;
  coverage?: CoverageClaim;
}

const TIER: Record<string, TierLabel> = { core: 'Core', supplement: 'Extended only', both: 'Core and Extended' };

/** Topic-row suffix. Exported so the rendered-label audit uses the same words. */
export function topicRowSuffix(coverage: CoverageClaim | undefined): string {
  if (coverage === 'whole-topic') return ' (whole topic)';
  if (coverage === 'whole-topic-core') return ' (all Core content)';
  return ' (topic-level mapping)';
}

/**
 * The syllabus record a resource's points are numbered against: the
 * non-future record whose series equals the resource's `syllabusSeries`,
 * else the current record. `codes` narrows to the resource's declared codes.
 */
export function versionFor(board: string, qualification: string, subject: string, codes: readonly string[] | undefined, series: string | undefined): SyllabusVersion | undefined {
  const candidates = SYLLABUS_VERSIONS.filter((v) =>
    v.boardSlug === board && v.qualificationSlug === qualification && v.subjectSlug === subject && v.status !== 'future'
    && (!codes?.length || codes.includes(v.syllabusCode)));
  return (series ? candidates.find((v) => v.syllabusSeries === series) : undefined) ?? candidates.find((v) => v.status === 'current');
}

const byNumber = (a: { number: string }, b: { number: string }) => {
  const pa = a.number.split('.').map(Number), pb = b.number.split('.').map(Number);
  return (pa[0] - pb[0]) || ((pa[1] ?? 0) - (pb[1] ?? 0));
};

export function syllabusPointsFor(input: {
  boards: readonly string[];
  subject: string;
  syllabusTopics: readonly MappingInput[];
  syllabusCodes?: readonly string[];
  syllabusSeries?: string;
}): SyllabusPointGroup[] {
  const groups: SyllabusPointGroup[] = [];
  const quals = [...new Set(input.syllabusTopics.map((m) => m.qualification))];
  for (const board of input.boards) {
    for (const q of quals) {
      const v = versionFor(board, q, input.subject, input.syllabusCodes, input.syllabusSeries);
      if (!v) continue;
      const mine = input.syllabusTopics.filter((x) => x.qualification === q);
      const points: SyllabusPoint[] = [];
      const topicContext: TopicContext[] = [];
      const stages = new Set<string>();
      for (const m of mine) {
        const t = v.topics.find((x) => x.slug === m.topic);
        if (!t) continue;
        if (t.stage) stages.add(t.stage);
        if (m.subtopic) {
          const s = t.subtopics.find((x) => x.slug === m.subtopic);
          if (!s) continue;
          if (points.some((p) => p.number === s.number)) continue;
          points.push({ number: s.number, name: s.name, level: 'subtopic', tier: v.tiered && s.tier && s.tierVerified ? TIER[s.tier] : undefined });
          continue;
        }
        const listed = new Set(mine.filter((x) => x.topic === m.topic && x.subtopic && t.subtopics.some((s) => s.slug === x.subtopic)).map((x) => x.subtopic));
        if (listed.size > 0) {
          // Membership only: the named subtopics carry the coverage.
          if (!topicContext.some((c) => c.number === String(t.number))) {
            topicContext.push({ number: String(t.number), name: t.name, listed: listed.size, recorded: t.subtopics.length, recordComplete: !!v.subtopicsComplete });
          }
          continue;
        }
        if (points.some((p) => p.number === String(t.number))) continue;
        points.push({ number: String(t.number), name: t.name, level: 'topic', coverage: m.coverage });
      }
      if (!points.length) continue;
      points.sort(byNumber);
      topicContext.sort(byNumber);
      // D-449: on a board whose AS is a separate qualification (AQA), the A Level's AS part is "AS content", not "AS Level".
      const separateAs = SEPARATE_AS_QUALIFICATION_BOARDS.includes(board);
      const stage = stages.size === 1
        ? ([...stages][0] === 'AS' ? (separateAs ? 'AS content of the A Level' : 'AS Level') : 'A Level')
        : stages.size > 1 ? (separateAs ? 'AS and A Level content' : 'AS and A Level') : undefined;
      if (!groups.some((g) => g.code === v.syllabusCode)) groups.push({ code: v.syllabusCode, series: v.syllabusSeries, stage, tiered: v.tiered, points, topicContext });
    }
  }
  return groups;
}

/** Reader-facing context line for a parent topic, e.g. "3 of the 7 subtopics in topic 2, Atoms, elements and compounds". */
export function topicContextText(c: TopicContext): string {
  const of = c.listed >= c.recorded
    ? (c.recordComplete ? `all ${c.recorded} subtopics` : `all ${c.recorded} subtopics recorded here`)
    : `${c.listed} of the ${c.recorded} subtopics${c.recordComplete ? '' : ' recorded here'}`;
  return `${of} in topic ${c.number}, ${c.name}`;
}
