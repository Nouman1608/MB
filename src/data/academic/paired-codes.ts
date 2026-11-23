/**
 * P9 (audit Nov 2026) -- one line for each course whose official specification
 * carries two codes, shown on the board hub so a reader is not left wondering
 * why a course has "0450 / 0264". Every sentence restates a fact already
 * recorded (and sourced) in matrix.ts and assessments.ts for the course; none
 * is new. Keyed `board/qualification/subject`.
 */
import type { Combination } from './matrix';

export const PAIRED_CODE_NOTES: Readonly<Record<string, string>> = {
  'cambridge/igcse/business': '0450 is the 2026 syllabus (its last exams are in 2026); 0264 replaces it, with first exams in 2027.',
  'cambridge/igcse/english-literature': '0475 (A*-G grades) and 0992 (9-1 grades) are the same content under two grading scales.',
  'cambridge/igcse/geography': '0460 (A*-G grades) and 0976 (9-1 grades) are the same content under two grading scales.',
  'cambridge/o-level/urdu-language': '3247 is Urdu as a First Language; 3248 is Urdu as a Second Language. They are two separate syllabuses.',
};

export const pairedCodeNote = (c: Pick<Combination, 'boardSlug' | 'qualificationSlug' | 'subjectSlug'>): string | undefined =>
  PAIRED_CODE_NOTES[`${c.boardSlug}/${c.qualificationSlug}/${c.subjectSlug}`];

/**
 * "ICT" is the name students search for. The A Level course is officially
 * "Information Technology" (9626); the list shows it as "Information Technology (ICT)",
 * so ICT is named the same way on every board and qualification.
 */
export const tileSubjectName = (c: Pick<Combination, 'subject' | 'subjectAlias'>): string =>
  c.subjectAlias && !c.subject.includes(c.subjectAlias) ? `${c.subject} (${c.subjectAlias})` : c.subject;
