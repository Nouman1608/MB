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
    aliases: [],
    status: 'future',
    notes: 'NOT offered by Learners Academy. No evidence found on the source site. Architecturally supported only — must never generate public routes until verified.',
  },
] as const;

export const boardBySlug = (slug: string): Board | undefined =>
  BOARDS.find((b) => b.slug === slug);
