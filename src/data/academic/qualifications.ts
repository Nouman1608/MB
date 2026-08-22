/**
 * Qualifications / levels.
 *
 * IGCSE, O Level and GCSE are DISTINCT qualifications and must never be
 * treated as interchangeable. Which boards offer which qualification is
 * recorded per board below, and enforced by the matrix — not assumed.
 */
export type QualificationSlug = 'igcse' | 'o-level' | 'gcse' | 'as-level' | 'a-level' | 'ib-myp' | 'ib-dp';

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
  /**
   * v1.x CLOSURE WS6 -- one factual paragraph for the /levels/<slug>/ hub
   * page. Grounded strictly in facts already established above (which
   * boards actually offer it, and how it differs from adjacent
   * qualifications) -- never a generic "what is IGCSE" marketing blurb.
   */
  about: string;
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
    about: 'IGCSE (International GCSE) is a qualification aimed at students outside the UK, offered here by Cambridge, Pearson Edexcel and OxfordAQA. It differs from the UK-domestic GCSE (a separate qualification below, taken in England and offered by different boards) and from Cambridge O Level, which is an older, related but distinct Cambridge qualification. Typically studied over two years before A Level or IB.',
  },
  {
    slug: 'o-level',
    name: 'O Level',
    aliases: ['GCE O Level', 'O Levels'],
    status: 'offered',
    offeredByBoards: ['cambridge'],
    source: 'https://learnersacademy.com.pk/ (O Levels nav column lists Cambridge only)',
    notes: 'Only Cambridge offers O Level at Learners Academy. Edexcel and AQA O Level are NOT offered.',
    about: 'Cambridge O Level is a qualification offered exclusively by Cambridge International in this Marlbridge model -- Pearson Edexcel and AQA do not offer an O Level route here. It predates IGCSE and remains current in several countries alongside it; O Level and IGCSE are distinct qualifications with separate syllabus codes, not interchangeable names for the same thing.',
  },
  {
    slug: 'a-level',
    name: 'A Level',
    aliases: ['A Levels', 'GCE A Level', 'IAL', 'International A Level'],
    status: 'offered',
    offeredByBoards: ['cambridge', 'edexcel', 'aqa', 'ocr', 'oxfordaqa'],
    source: 'https://learnersacademy.com.pk/ (A Levels nav column); OCR A Level added 2026-08-18 (v1.0 WS3) per owner authorization and ocr.org.uk verification; OxfordAQA International A-level added 2026-08-18 (v1.0 WS4) per owner authorization and oxfordaqa.com verification — neither from Learners Academy nav.',
    about: 'A Level (and its international counterpart, International A Level / IAL) is the qualification typically studied after IGCSE, O Level or GCSE, ahead of university entry. Marlbridge publishes A Level material across all five boards it teaches -- Cambridge and OxfordAQA both examine it as a combined AS & A Level route rather than separately taught AS, while Pearson Edexcel and AQA offer AS as its own qualification (see AS Level below).',
  },
  {
    slug: 'as-level',
    name: 'AS Level',
    aliases: ['AS'],
    status: 'offered',
    offeredByBoards: ['aqa'],
    source: 'https://www.aqa.org.uk/subjects/business (AS Business 7131/7137, verified as a distinct AQA qualification)',
    notes: 'Marked offered 2026-08-18 per Marlbridge business decision. Only AQA (plain) has row-level AS evidence in the matrix today (Business, representative row) — Cambridge markets 9701 etc. as combined AS & A Level rather than a separately taught AS route, and OxfordAQA (added 2026-08-18, v1.0 WS4) follows the identical "International AS and A-level [Subject]" combined-page convention, so both are recorded under the a-level slug rather than here — that distinction is preserved and NOT changed by this status flip.',
    about: 'AS Level is a standalone one-year qualification, distinct from the first year of a full A Level. AQA is the only board recorded here with a genuinely separate AS route; Cambridge and OxfordAQA teach towards a combined AS & A Level qualification instead, so those are listed under A Level rather than here.',
  },
  {
    slug: 'gcse',
    name: 'GCSE',
    aliases: ['UK GCSE'],
    status: 'offered',
    offeredByBoards: ['aqa', 'ocr'],
    source: 'https://www.aqa.org.uk/subjects (AQA qualification catalogue: GCSE / AS / A-level); https://www.ocr.org.uk/qualifications/gcse/ (OCR GCSE, added 2026-08-18, v1.0 WS3)',
    notes: 'RECLASSIFIED from IGCSE — see CONFLICT-01 in matrix.ts: Learners Academy labelled these "IGCSE" but the codes are AQA GCSE codes; AQA offers no IGCSE. Marked offered 2026-08-18 per Marlbridge business decision to teach all represented boards/qualifications. OCR GCSE added 2026-08-18 (v1.0 WS3) per owner authorization and ocr.org.uk verification.',
    about: 'GCSE is the UK-domestic qualification taken by school students in England, distinct from the internationally-aimed IGCSE. Marlbridge publishes GCSE material for AQA and OCR, the two UK-domestic boards it teaches -- Cambridge, Pearson Edexcel and OxfordAQA are recorded under IGCSE instead, since none of them offer a UK GCSE route in this model.',
  },
  {
    slug: 'ib-myp',
    name: 'IB Middle Years Programme',
    aliases: ['MYP', 'IB MYP'],
    status: 'offered',
    offeredByBoards: ['ib'],
    source: 'Owner confirmed directly in chat, 2026-08-22: IB teaching (MYP and DP) has started at Marlbridge.',
    about: 'The Middle Years Programme (MYP) is the IB\'s curriculum framework for ages 11-16, studied before the Diploma Programme. It groups subjects more broadly than Cambridge/Edexcel-style qualifications -- for example a single integrated "Sciences" subject rather than separate Biology/Chemistry/Physics -- and is assessed through internally-graded criteria rather than an external board exam at every subject.',
  },
  {
    slug: 'ib-dp',
    name: 'IB Diploma Programme',
    aliases: ['IB Diploma', 'IBDP', 'DP'],
    status: 'offered',
    offeredByBoards: ['ib'],
    source: 'Owner confirmed directly in chat, 2026-08-22: IB teaching (MYP and DP) has started at Marlbridge.',
    about: 'The Diploma Programme (DP) is the IB\'s two-year pre-university qualification for ages 16-19, roughly comparable in stage to A Level. Each DP subject is studied at either Standard Level (SL) or Higher Level (HL), and every diploma candidate also completes three compulsory core elements (the extended essay, theory of knowledge, and creativity/activity/service) alongside their six chosen subjects.',
  },
] as const;

export const qualificationBySlug = (slug: string): Qualification | undefined =>
  QUALIFICATIONS.find((q) => q.slug === slug);
