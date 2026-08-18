/** Examination boards. Canonical names and permanent slugs. */
export type BoardSlug = 'cambridge' | 'edexcel' | 'aqa' | 'ocr';

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
    slug: 'ocr',
    name: 'OCR',
    aliases: ['Cambridge OCR'],
    status: 'future',
    source: 'https://www.ocr.org.uk/ — verified 2026-08-18. OCR now brands as "Cambridge OCR" (part of Cambridge University Press & Assessment), administratively distinct from Cambridge International (the cambridge board slug in this repo). OCR is UK-domestic only: offers GCSE and AS/A-Level, not O-Level or IGCSE.',
    notes: 'NOT offered by Learners Academy or Marlbridge — a business decision, not a data gap. Full official-specification research is on file (see matrix.ts OCR rows and syllabuses.ts): verified codes and board summaries for GCSE and A-Level Chemistry, Physics, Biology, Mathematics, Business and Economics, all fetched directly from ocr.org.uk 2026-08-18. OCR does not offer Accounting at either level (confirmed absent from its full subject catalogues). Architecturally supported only — must never generate public routes until Marlbridge decides to offer it.',
  },
] as const;

export const boardBySlug = (slug: string): Board | undefined =>
  BOARDS.find((b) => b.slug === slug);
