/** Examination boards. Canonical names and permanent slugs. */
export type BoardSlug = 'cambridge' | 'edexcel' | 'aqa' | 'ocr' | 'oxfordaqa';

export interface Board {
  slug: BoardSlug;
  /** Canonical display name. Use exactly this string in copy and schema. */
  name: string;
  /** Alternative names seen in source material. Never used in URLs. */
  aliases: readonly string[];
  /**
   * offered  — verified as currently taught by Learners Academy
   * future   — architecturally supported, not currently offered
   */
  status: 'offered' | 'future';
  /** Evidence for the status above. */
  source?: string;
  notes?: string;
}

export const BOARDS: readonly Board[] = [
  {
    slug: 'cambridge',
    name: 'Cambridge',
    aliases: ['CAIE', 'Cambridge CAIE', 'Cambridge International', 'CIE'],
    status: 'offered',
    source: 'https://learnersacademy.com.pk/ (nav + "Which exam boards do you teach?" FAQ)',
  },
  {
    slug: 'edexcel',
    name: 'Pearson Edexcel',
    aliases: ['Edexcel', 'Pearson', 'Pearson Edexcel International'],
    status: 'offered',
    source: 'https://learnersacademy.com.pk/ (nav + "Which exam boards do you teach?" FAQ)',
    notes: 'Learners Academy labels this "Edexcel". Marlbridge canonical name is "Pearson Edexcel"; slug stays /edexcel/.',
  },
  {
    slug: 'aqa',
    name: 'AQA',
    aliases: ['AQA UK Board'],
    status: 'offered',
    source: 'https://learnersacademy.com.pk/ (nav + "Which exam boards do you teach?" FAQ)',
  },
  {
    slug: 'oxfordaqa',
    name: 'OxfordAQA',
    aliases: ['Oxford AQA', 'OxfordAQA International Qualifications', 'Oxford International AQA Examinations'],
    status: 'offered',
    source: 'https://www.oxfordaqa.com/ — verified 2026-08-18 (v1.0 WS4).',
    notes: 'A fully separate awarding body from AQA (the UK board, slug "aqa" above) despite sharing the AQA name — OxfordAQA is AQA\'s international-qualifications arm, administratively and academically distinct, and is NEVER merged with, or treated as a subcategory of, plain "aqa" in this repository. Owner-authorized as an active Marlbridge teaching offering 2026-08-18 (MARLBRIDGE v1.0 directive). Offers exactly three qualification families: International GCSE, International AS and International A-level — no O Level, no UK GCSE, no UK A-level. Every combination below is independently verified against oxfordaqa.com, 2026-08-18; a prior code-snapshot table was explicitly not trusted and every code was re-fetched from the live qualification page. See matrix.ts for full per-row evidence and source URLs.',
  },
  {
    slug: 'ocr',
    name: 'OCR',
    aliases: ['Cambridge OCR'],
    status: 'offered',
    source: 'https://www.ocr.org.uk/ — verified 2026-08-18, re-verified 2026-08-18 (v1.0 WS3). OCR now brands as "Cambridge OCR" (part of Cambridge University Press & Assessment), administratively distinct from Cambridge International (the cambridge board slug in this repo). OCR is UK-domestic only: offers GCSE and AS/A-Level, not O-Level or IGCSE.',
    notes: 'Owner-authorized as an active Marlbridge teaching offering 2026-08-18 (MARLBRIDGE v1.0 directive: Marlbridge teaches all supported subjects across all supported boards) — supersedes the earlier "not offered, architecturally supported only" status. Full official-specification research is on file (see matrix.ts OCR rows and syllabuses.ts): verified codes and board summaries for GCSE and A-Level Chemistry, Physics, Biology, Mathematics, Business and Economics, all fetched directly from ocr.org.uk 2026-08-18 and spot-re-verified 2026-08-18 (GCSE Chemistry J248 confirmed current via live June 2024 exam-series papers; A-Level Business H431 confirmed current — its H436 successor spec has first teaching September 2026, which has not yet begun, so H431 remains the live code through final assessment summer 2027). OCR does not offer Accounting at either level (confirmed absent from its full subject catalogues). Not offered by Learners Academy directly — evidence tier is board-verified, not la-course.',
  },
] as const;

export const boardBySlug = (slug: string): Board | undefined =>
  BOARDS.find((b) => b.slug === slug);
