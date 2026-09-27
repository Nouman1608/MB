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
 * unverified tier is not shown, and a topic-level mapping is shown as the
 * whole topic.
 */
import { topicsFor } from '../../data/academic/syllabus-topics.ts';

export type TierLabel = 'Core' | 'Extended only' | 'Core and Extended';

export interface SyllabusPoint {
  number: string;
  name: string;
  tier?: TierLabel;
}

export interface SyllabusPointGroup {
  code: string;
  /** e.g. 'AS Level' / 'A Level' for 9701; undefined when not staged. */
  stage?: string;
  tiered: boolean;
  points: SyllabusPoint[];
}

const TIER: Record<string, TierLabel> = { core: 'Core', supplement: 'Extended only', both: 'Core and Extended' };

export function syllabusPointsFor(input: {
  boards: readonly string[];
  subject: string;
  syllabusTopics: readonly { qualification: string; topic: string; subtopic?: string }[];
  syllabusCodes?: readonly string[];
}): SyllabusPointGroup[] {
  const groups: SyllabusPointGroup[] = [];
  const quals = [...new Set(input.syllabusTopics.map((m) => m.qualification))];
  for (const board of input.boards) {
    for (const q of quals) {
      const v = topicsFor(board, q, input.subject);
      if (!v) continue;
      if (input.syllabusCodes?.length && !input.syllabusCodes.includes(v.syllabusCode)) continue;
      const points: SyllabusPoint[] = [];
      const stages = new Set<string>();
      for (const m of input.syllabusTopics.filter((x) => x.qualification === q)) {
        const t = v.topics.find((x) => x.slug === m.topic);
        if (!t) continue;
        if (t.stage) stages.add(t.stage);
        if (m.subtopic) {
          const s = t.subtopics.find((x) => x.slug === m.subtopic);
          if (!s) continue;
          if (points.some((p) => p.number === s.number)) continue;
          points.push({ number: s.number, name: s.name, tier: v.tiered && s.tier && s.tierVerified ? TIER[s.tier] : undefined });
        } else if (!points.some((p) => p.number === String(t.number))) {
          points.push({ number: String(t.number), name: `${t.name} (whole topic)` });
        }
      }
      if (!points.length) continue;
      points.sort((a, b) => {
        const pa = a.number.split('.').map(Number), pb = b.number.split('.').map(Number);
        return (pa[0] - pb[0]) || ((pa[1] ?? 0) - (pb[1] ?? 0));
      });
      const stage = stages.size === 1 ? ([...stages][0] === 'AS' ? 'AS Level' : 'A Level') : stages.size > 1 ? 'AS and A Level' : undefined;
      if (!groups.some((g) => g.code === v.syllabusCode)) groups.push({ code: v.syllabusCode, stage, tiered: v.tiered, points });
    }
  }
  return groups;
}
