/**
 * Audit T9 (23 Nov 2026) -- the exam years a flashcard deck's syllabus is
 * examined, and whether it is being phased out, read from the same assessment
 * records the course pages use (src/data/academic/assessments.ts), so a deck
 * label can never disagree with the course page. A deck whose syllabusCode
 * names two syllabuses ("9625 / 9725") gets one entry per syllabus.
 */
import type { FlashcardDeck } from './types.ts';
import { assessmentsFor } from '../academic/assessments.ts';

export interface DeckExamInfo {
  code: string;
  /** "exams 2026–2028", "exams from 2027" or "exams 2026". */
  years: string;
  /** True for a syllabus being taught out or withdrawn: no longer the one new students sit. */
  outgoing: boolean;
  /** Full plain-English label, e.g. "7132: exams 2025–2027 (outgoing syllabus, last exams 2027)". */
  label: string;
}

export function deckExamInfo(d: Pick<FlashcardDeck, 'boardSlug' | 'qualificationSlug' | 'subjectSlug' | 'syllabusCode'>): DeckExamInfo[] {
  const codes = d.syllabusCode.split('/').map((s) => s.trim());
  return assessmentsFor(d.boardSlug, d.qualificationSlug, d.subjectSlug)
    .filter((r) => codes.includes(r.code))
    .slice()
    .sort((a, b) => codes.indexOf(a.code) - codes.indexOf(b.code))
    .map((r) => {
      const first = r.firstAssessment;
      const last = r.finalAssessment;
      const years = last ? (last === first ? `exams ${first}` : `exams ${first}–${last}`) : `exams from ${first}`;
      const outgoing = r.specStatus === 'legacy-teach-out' || r.specStatus === 'withdrawn';
      const tail = outgoing ? ` (outgoing syllabus${last ? `, last exams ${last}` : ''})` : '';
      return { code: r.code, years, outgoing, label: `${r.code}: ${years}${tail}` };
    });
}
