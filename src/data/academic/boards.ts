/** Examination boards. Canonical names and permanent slugs. */
export type BoardSlug = 'cambridge' | 'edexcel' | 'aqa' | 'ocr' | 'oxfordaqa' | 'ib';

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
  /**
   * v1.x CLOSURE WS6 -- one factual paragraph for the board's /boards/<slug>/
   * hub page, so it explains what the board actually is rather than being a
   * bare directory listing. Grounded only in facts already verified above
   * (aliases/notes/source) -- never a marketing claim, never a fabricated
   * history or founding date.
   */
  about: string;
}

export const BOARDS: readonly Board[] = [
  {
    slug: 'cambridge',
    name: 'Cambridge',
    aliases: ['CAIE', 'Cambridge CAIE', 'Cambridge International', 'CIE'],
    status: 'offered',
    source: 'https://learnersacademy.com.pk/ (nav + "Which exam boards do you teach?" FAQ)',
    about: 'Cambridge International (formerly CIE, "Cambridge Assessment International Education") is the international-qualifications arm of Cambridge University Press & Assessment. It offers Cambridge IGCSE, Cambridge O Level and Cambridge International AS & A Level, taken by students in over 160 countries. It is administratively separate from OCR, which is the UK-domestic exam board also run by Cambridge University Press & Assessment.',
  },
  {
    slug: 'edexcel',
    name: 'Pearson Edexcel',
    aliases: ['Edexcel', 'Pearson', 'Pearson Edexcel International'],
    status: 'offered',
    source: 'https://learnersacademy.com.pk/ (nav + "Which exam boards do you teach?" FAQ)',
    notes: 'Learners Academy labels this "Edexcel". Marlbridge canonical name is "Pearson Edexcel"; slug stays /edexcel/.',
    about: 'Pearson Edexcel is a UK-based awarding body owned by Pearson. Internationally, it offers Edexcel International GCSE and International AS & A Level (IAL) qualifications, plus the UK domestic GCSE and GCE A Level for schools in England. Marlbridge publishes both the international and UK-domestic routes depending on the subject.',
  },
  {
    slug: 'aqa',
    name: 'AQA',
    aliases: ['AQA UK Board'],
    status: 'offered',
    source: 'https://learnersacademy.com.pk/ (nav + "Which exam boards do you teach?" FAQ)',
    about: 'AQA (the Assessment and Qualifications Alliance) is a UK domestic awarding body, offering GCSE and GCE A Level qualifications to schools in England. It is a separate organisation from OxfordAQA, its international-qualifications arm, which is listed as its own board below.',
  },
  {
    slug: 'oxfordaqa',
    name: 'OxfordAQA',
    aliases: ['Oxford AQA', 'OxfordAQA International Qualifications', 'Oxford International AQA Examinations'],
    status: 'offered',
    source: 'https://www.oxfordaqa.com/ — verified 2026-08-18 (v1.0 WS4).',
    notes: 'A fully separate awarding body from AQA (the UK board, slug "aqa" above) despite sharing the AQA name — OxfordAQA is AQA\'s international-qualifications arm, administratively and academically distinct, and is NEVER merged with, or treated as a subcategory of, plain "aqa" in this repository. Owner-authorized as an active Marlbridge teaching offering 2026-08-18 (MARLBRIDGE v1.0 directive). Offers exactly three qualification families: International GCSE, International AS and International A-level — no O Level, no UK GCSE, no UK A-level. Every combination below is independently verified against oxfordaqa.com, 2026-08-18; a prior code-snapshot table was explicitly not trusted and every code was re-fetched from the live qualification page. See matrix.ts for full per-row evidence and source URLs.',
    about: 'OxfordAQA is the international-qualifications arm of AQA (the UK board listed separately above) -- a distinct examining body despite the shared name, run jointly with Oxford International Education Group. It offers International GCSE, International AS and International A-level only, aimed at schools outside the UK.',
  },
  {
    slug: 'ocr',
    name: 'OCR',
    aliases: ['Cambridge OCR'],
    status: 'offered',
    source: 'https://www.ocr.org.uk/ — verified 2026-08-18, re-verified 2026-08-18 (v1.0 WS3). OCR now brands as "Cambridge OCR" (part of Cambridge University Press & Assessment), administratively distinct from Cambridge International (the cambridge board slug in this repo). OCR is UK-domestic only: offers GCSE and AS/A-Level, not O-Level or IGCSE.',
    notes: 'Owner-authorized as an active Marlbridge teaching offering 2026-08-18 (MARLBRIDGE v1.0 directive: Marlbridge teaches all supported subjects across all supported boards) — supersedes the earlier "not offered, architecturally supported only" status. Full official-specification research is on file (see matrix.ts OCR rows and syllabuses.ts): verified codes and board summaries for GCSE and A-Level Chemistry, Physics, Biology, Mathematics, Business and Economics, all fetched directly from ocr.org.uk 2026-08-18 and spot-re-verified 2026-08-18 (GCSE Chemistry J248 confirmed current via live June 2024 exam-series papers; A-Level Business H431 confirmed current — its H436 successor spec has first teaching September 2026, which has not yet begun, so H431 remains the live code through final assessment summer 2027). OCR does not offer Accounting at either level (confirmed absent from its full subject catalogues). Not offered by Learners Academy directly — evidence tier is board-verified, not la-course.',
    about: 'OCR ("Cambridge OCR") is a UK-domestic awarding body, part of Cambridge University Press & Assessment -- administratively distinct from Cambridge International (the "cambridge" board above), despite sharing a parent organisation. OCR offers UK GCSE and GCE A Level only; it does not offer O Level or IGCSE.',
  },
  {
    slug: 'ib',
    name: 'International Baccalaureate',
    aliases: ['IB', 'IBO', 'International Baccalaureate Organization'],
    status: 'offered',
    source: 'Owner confirmed directly in chat, 2026-08-22: IB teaching has started at Marlbridge (one-to-one only, Rs 5,000 per class, Pakistan). This is the same evidence tier used elsewhere in this repo for owner-supplied facts given directly in chat (see docs/decision-log.md D-007 for the WhatsApp number, added the same way).',
    notes: "Unlike Cambridge/Edexcel/AQA/OCR/OxfordAQA, the IB is a single awarding body offering its own distinct family of programmes (Middle Years Programme, Diploma Programme) rather than several boards competing over the same qualifications -- so it sits in this registry as one board with two qualifications (see qualifications.ts: ib-myp, ib-dp) rather than needing sibling boards. Academic content for the Diploma Programme subjects Economics and Physics is grounded in the IB's full internal subject guides (economics-guide.pdf, physics-guide.pdf), originally sourced under a 2026-08-22 owner confirmation regarding IB licensing; that licensing framing was retired by owner decision 2026-09-05 -- Marlbridge does not claim to hold, or to be pursuing, any formal IB license, and no such license is treated as required for this content. All other IB subjects (14 further DP subjects, 5 MYP subjects) are sourced only from the IB's own public subject-brief documents, which carry no such restriction, and are described at overview depth rather than full topic-by-topic syllabus detail.",
    about: 'The International Baccalaureate (IB) is a Geneva-based non-profit foundation offering four international education programmes; Marlbridge teaches subjects from two of them -- the Middle Years Programme (MYP, ages 11-16) and the Diploma Programme (DP, ages 16-19, the pre-university qualification). Unlike the other five boards on this site, the IB is not a national exam board but a single global awarding body with its own distinct curriculum and assessment model.',
  },
] as const;

export const boardBySlug = (slug: string): Board | undefined =>
  BOARDS.find((b) => b.slug === slug);
