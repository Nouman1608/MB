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
    status: 'offered',
    offeredByBoards: ['aqa'],
    source: 'https://www.aqa.org.uk/subjects/business (AS Business 7131/7137, verified as a distinct AQA qualification)',
    notes: 'Marked offered 2026-08-18 per Marlbridge business decision. Only AQA has row-level AS evidence in the matrix today (Business, representative row) — Cambridge markets 9701 etc. as combined AS & A Level rather than a separately taught AS route; that distinction is preserved and NOT changed by this status flip.',
  },
  {
    slug: 'gcse',
    name: 'GCSE',
    aliases: ['UK GCSE'],
    status: 'offered',
    offeredByBoards: ['aqa'],
    source: 'https://www.aqa.org.uk/subjects (AQA qualification catalogue: GCSE / AS / A-level)',
    notes: 'RECLASSIFIED from IGCSE — see CONFLICT-01 in matrix.ts: Learners Academy labelled these "IGCSE" but the codes are AQA GCSE codes; AQA offers no IGCSE. Marked offered 2026-08-18 per Marlbridge business decision to teach all represented boards/qualifications.',
  },
] as const;

export const qualificationBySlug = (slug: string): Qualification | undefined =>
  QUALIFICATIONS.find((q) => q.slug === slug);
