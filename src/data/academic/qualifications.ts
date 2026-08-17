/**
 * Qualifications / levels.
 *
 * IGCSE, O Level and GCSE are DISTINCT qualifications and must never be
 * treated as interchangeable. Which boards offer which qualification is
 * recorded per board below, and enforced by the matrix — not assumed.
 */
export type QualificationSlug = 'igcse' | 'o-level' | 'gcse' | 'as-level' | 'a-level';

export interface Qualification {
  slug: QualificationSlug;
  name: string;
  aliases: readonly string[];
  /**
   * offered  — verified as currently taught by Learners Academy
   * future   — supported by the model, not currently offered
   * unknown  — cannot be confirmed from the source; needs sign-off
   */
  status: 'offered' | 'future' | 'unknown';
  /** Boards verified to offer this qualification at Learners Academy. */
  offeredByBoards: readonly string[];
  source?: string;
  notes?: string;
}

export const QUALIFICATIONS: readonly Qualification[] = [
  {
    slug: 'igcse',
    name: 'IGCSE',
    aliases: ['International GCSE'],
    status: 'offered',
    offeredByBoards: ['cambridge', 'edexcel', 'aqa'],
    source: 'https://learnersacademy.com.pk/ (IGCSE nav column)',
    notes: 'See CONFLICT-01: the AQA IGCSE grouping is contradicted by the syllabus codes quoted on subject pages.',
  },
  {
    slug: 'o-level',
    name: 'O Level',
    aliases: ['GCE O Level', 'O Levels'],
    status: 'offered',
    offeredByBoards: ['cambridge'],
    source: 'https://learnersacademy.com.pk/ (O Levels nav column lists Cambridge only)',
    notes: 'Only Cambridge offers O Level at Learners Academy. Edexcel and AQA O Level are NOT offered.',
  },
  {
    slug: 'a-level',
    name: 'A Level',
    aliases: ['A Levels', 'GCE A Level', 'IAL', 'International A Level'],
    status: 'offered',
    offeredByBoards: ['cambridge', 'edexcel', 'aqa'],
    source: 'https://learnersacademy.com.pk/ (A Levels nav column)',
  },
  {
    slug: 'as-level',
    name: 'AS Level',
    aliases: ['AS'],
    status: 'unknown',
    offeredByBoards: [],
    notes: 'Learners Academy markets "A Level" without separating AS. AS may be taught inside A Level classes, or not offered as a distinct qualification. NEEDS CONFIRMATION before any AS route exists.',
  },
  {
    slug: 'gcse',
    name: 'GCSE',
    aliases: ['UK GCSE'],
    status: 'future',
    offeredByBoards: [],
    notes: 'No GCSE course pages exist on the Learners Academy site. See CONFLICT-01 — AQA syllabus codes quoted under "IGCSE" are in fact GCSE codes, so GCSE may in practice be taught under an IGCSE label. NEEDS CONFIRMATION.',
  },
] as const;

export const qualificationBySlug = (slug: string): Qualification | undefined =>
  QUALIFICATIONS.find((q) => q.slug === slug);
