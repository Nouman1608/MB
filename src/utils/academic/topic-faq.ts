/**
 * P2 / P3 / P5 (audit Nov 2026) -- the "What topics does <course> cover?" FAQ
 * answer, built from the course's topic record so the count it states is the
 * number of items it lists.
 *
 * Three shapes of record exist:
 *   - an ordinary list of topics: "11 topics: ...";
 *   - a list whose names repeat (Cambridge 9708 names its AS topic 2 and its
 *     A Level topic 7 "The price system and the microeconomy"): every entry
 *     gets its number and AS / A Level label, so 11 topics read as 11;
 *   - a list whose top-level entries are papers ("Paper 1", "Paper 2" in
 *     Cambridge 2058 / 0493), each holding the real topics as subtopics: the
 *     answer says "2 papers, 8 topics" and names them under their paper,
 *     instead of calling the two papers "2 topics".
 */
import type { SyllabusTopic } from '../../data/academic/syllabus-topics.ts';

const isPaperEntry = (t: Pick<SyllabusTopic, 'name' | 'subtopics'>) => /^Paper \d+$/i.test(t.name.trim()) && t.subtopics.length > 0;

export function topicListFaq(topics: readonly SyllabusTopic[]): { count: number; text: string; shape: 'papers' | 'repeated-names' | 'plain' } {
  if (topics.length > 0 && topics.every(isPaperEntry)) {
    const n = topics.length;
    const m = topics.reduce((s, t) => s + t.subtopics.length, 0);
    const text = `${n} papers and ${m} topics in the current syllabus: ${topics
      .map((t) => `${t.name} (${t.subtopics.map((s) => `${s.number} ${s.name}`).join('; ')})`)
      .join('; ')}.`;
    return { count: m, text, shape: 'papers' };
  }
  const names = topics.map((t) => t.name);
  const repeated = new Set(names).size !== names.length;
  if (repeated) {
    const label = (t: SyllabusTopic) => (t.stage === 'A' ? ' (A Level only)' : t.stage === 'AS' ? ' (AS)' : '');
    return {
      count: topics.length,
      text: `${topics.length} topics in the current syllabus: ${topics.map((t) => `${t.number}. ${t.name}${label(t)}`).join('; ')}.`,
      shape: 'repeated-names',
    };
  }
  return { count: topics.length, text: `${topics.length} topics in the current syllabus: ${names.join('; ')}.`, shape: 'plain' };
}
