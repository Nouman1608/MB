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
    offeredByBoards: ['cambridge', 'edexcel', 'oxfordaqa'],
    source: 'https://learnersacademy.com.pk/ (IGCSE nav column); OxfordAQA International GCSE added 2026-08-18 (v1.0 WS4) per owner authorization and oxfordaqa.com verification.',
    notes: 'FIXED 2026-08-18 (v1.0 WS5): removed plain "aqa" from this list — it was a pre-existing data-model bug. AQA (UK) offers no IGCSE at all (see CONFLICT-01 in matrix.ts, and the explicit aqa|igcse NOT_SUPPORTED rows there); the "IGCSE" grouping Learners Academy used for AQA subjects is contradicted by the syllabus codes, which are AQA GCSE codes. Leaving "aqa" in this list meant the build-time rule 7 check (a qualification-offering combination is only ACTIVE-eligible if the board is listed here) could not have caught a future accidental aqa|igcse ACTIVE row. "oxfordaqa" (OxfordAQA International GCSE) is correct and distinct — never conflate the two despite the shared "AQA" name.',
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
    offeredByBoards: ['cambridge', 'edexcel', 'aqa', 'ocr', 'oxfordaqa'],
    source: 'https://learnersacademy.com.pk/ (A Levels nav column); OCR A Level added 2026-08-18 (v1.0 WS3) per owner authorization and ocr.org.uk verification; OxfordAQA International A-level added 2026-08-18 (v1.0 WS4) per owner authorization and oxfordaqa.com verification — neither from Learners Academy nav.',
  },
  {
    slug: 'as-level',
    name: 'AS Level',
    aliases: ['AS'],
    status: 'offered',
    offeredByBoards: ['aqa'],
    source: 'https://www.aqa.org.uk/subjects/business (AS Business 7131/7137, verified as a distinct AQA qualification)',
    notes: 'Marked offered 2026-08-18 per Marlbridge business decision. Only AQA (plain) has row-level AS evidence in the matrix today (Business, representative row) — Cambridge markets 9701 etc. as combined AS & A Level rather than a separately taught AS route, and OxfordAQA (added 2026-08-18, v1.0 WS4) follows the identical "International AS and A-level [Subject]" combined-page convention, so both are recorded under the a-level slug rather than here — that distinction is preserved and NOT changed by this status flip.',
  },
  {
    slug: 'gcse',
    name: 'GCSE',
    aliases: ['UK GCSE'],
    status: 'offered',
    offeredByBoards: ['aqa', 'ocr'],
    source: 'https://www.aqa.org.uk/subjects (AQA qualification catalogue: GCSE / AS / A-level); https://www.ocr.org.uk/qualifications/gcse/ (OCR GCSE, added 2026-08-18, v1.0 WS3)',
    notes: 'RECLASSIFIED from IGCSE — see CONFLICT-01 in matrix.ts: Learners Academy labelled these "IGCSE" but the codes are AQA GCSE codes; AQA offers no IGCSE. Marked offered 2026-08-18 per Marlbridge business decision to teach all represented boards/qualifications. OCR GCSE added 2026-08-18 (v1.0 WS3) per owner authorization and ocr.org.uk verification.',
  },
] as const;

export const qualificationBySlug = (slug: string): Qualification | undefined =>
  QUALIFICATIONS.find((q) => q.slug === slug);
