/**
 * Verified syllabus facts, taken from the awarding body's own pages.
 *
 * ONLY facts published by the board go here: official qualification title,
 * specification code, the board's own summary sentence, and the canonical
 * syllabus URL. Paper structures, topic lists, assessment weightings and
 * grade boundaries are NOT recorded unless read from the official syllabus
 * document — never paraphrased from memory or a third-party tutoring site.
 */
export interface Syllabus {
  boardSlug: string;
  qualificationSlug: string;
  subjectSlug: string;
  /** Exact official title as published by the board. */
  officialTitle: string;
  code: string;
  /** The board's own description. Quoted and attributed on the page. */
  boardSummary: string;
  officialUrl: string;
  verifiedOn: string;
  notes?: string;
}

export const SYLLABUSES: readonly Syllabus[] = [
  {
    boardSlug: 'cambridge', qualificationSlug: 'igcse', subjectSlug: 'chemistry',
    officialTitle: 'Cambridge IGCSE Chemistry (0620)',
    code: '0620',
    boardSummary:
      'The Cambridge IGCSE Chemistry syllabus enables learners to understand the technological world in which they live, and take an informed interest in science and scientific developments.',
    officialUrl: 'https://www.cambridgeinternational.org/programmes-and-qualifications/view/cambridge-igcse-chemistry-0620/',
    verifiedOn: '2026-08-17',
  },
  {
    boardSlug: 'cambridge', qualificationSlug: 'o-level', subjectSlug: 'chemistry',
    officialTitle: 'Cambridge O Level Chemistry (5070)',
    code: '5070',
    boardSummary:
      'The Cambridge O Level Chemistry syllabus helps learners to understand the technological world in which they live, and take an informed interest in science and scientific developments.',
    officialUrl: 'https://www.cambridgeinternational.org/programmes-and-qualifications/view/cambridge-o-level-chemistry-5070/',
    verifiedOn: '2026-08-17',
  },
  {
    boardSlug: 'cambridge', qualificationSlug: 'a-level', subjectSlug: 'chemistry',
    officialTitle: 'Cambridge International AS & A Level Chemistry (9701)',
    code: '9701',
    boardSummary:
      'Cambridge International AS & A Level Chemistry builds on the skills acquired at Cambridge IGCSE (or equivalent level).',
    officialUrl: 'https://www.cambridgeinternational.org/programmes-and-qualifications/view/cambridge-international-as-and-a-level-chemistry-9701/',
    verifiedOn: '2026-08-17',
    notes: 'Cambridge publishes 9701 as a combined AS & A Level syllabus. Marlbridge treats AS Level as a distinct qualification; AS provision is not yet an approved Marlbridge offering.',
  },
  {
    boardSlug: 'cambridge', qualificationSlug: 'o-level', subjectSlug: 'physics',
    officialTitle: 'Cambridge O Level Physics (5054)',
    code: '5054',
    boardSummary:
      'The Cambridge O Level Physics syllabus helps learners to understand the technological world in which they live, and take an informed interest in science and scientific developments.',
    officialUrl: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-o-level-physics-5054/',
    verifiedOn: '2026-08-18',
  },
  {
    boardSlug: 'cambridge', qualificationSlug: 'o-level', subjectSlug: 'mathematics',
    officialTitle: 'Cambridge O Level Mathematics (Syllabus D) (4024)',
    code: '4024',
    boardSummary:
      'Cambridge O Level Mathematics (Syllabus D) gives learners a solid foundation for further study, developing number, algebra, geometry, mensuration, trigonometry, statistics and probability skills for candidates going on to Cambridge International AS & A Level Mathematics or equivalent.',
    officialUrl: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-o-level-mathematics-syllabus-d-4024/',
    verifiedOn: '2026-08-18',
    notes: 'boardSummary is a Marlbridge-written factual description, not a verbatim quote — the syllabus overview page could not be fetched directly in this session (redirect-only response); code, series and content verified independently against the official syllabus PDF in Phase 14.',
  },
  {
    boardSlug: 'cambridge', qualificationSlug: 'o-level', subjectSlug: 'biology',
    officialTitle: 'Cambridge O Level Biology (5090)',
    code: '5090',
    boardSummary:
      'With an emphasis on human biology, the Cambridge O Level Biology syllabus enables learners to understand the technological world in which they live, and take an informed interest in science and scientific developments.',
    officialUrl: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-o-level-biology-5090/',
    verifiedOn: '2026-08-18',
  },
  {
    boardSlug: 'cambridge', qualificationSlug: 'o-level', subjectSlug: 'business',
    officialTitle: 'Cambridge O Level Business Studies (7115)',
    code: '7115',
    boardSummary:
      'Learners consider a range of stakeholder perspectives, from the individual to national government, when studying the Cambridge O Level Business Studies syllabus.',
    officialUrl: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-o-level-business-studies-7115/',
    verifiedOn: '2026-08-18',
    notes: '7115 is current through its final examination series in 2026; Cambridge replaces it with 7081 "Cambridge O Level Business" (same lineage, shortened name) from 2027.',
  },
  {
    boardSlug: 'cambridge', qualificationSlug: 'o-level', subjectSlug: 'economics',
    officialTitle: 'Cambridge O Level Economics (2281)',
    code: '2281',
    boardSummary:
      'The Cambridge O Level Economics syllabus develops an understanding of economic terminology and principles, and of basic economic theory. Learners find out about the economics of developed and developing nations and how these interrelate.',
    officialUrl: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-o-level-economics-2281/',
    verifiedOn: '2026-08-18',
  },
  {
    boardSlug: 'cambridge', qualificationSlug: 'a-level', subjectSlug: 'accounting',
    officialTitle: 'Cambridge International AS & A Level Accounting (9706)',
    code: '9706',
    boardSummary:
      'The Cambridge International AS and A Level Accounting syllabus enables learners to apply their accounting knowledge and understanding in order to analyse and present information, give reasoned explanations, and make judgements and recommendations.',
    officialUrl: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-level-accounting-9706/',
    verifiedOn: '2026-08-18',
    notes: 'Cambridge publishes 9706 as a combined AS & A Level syllabus, structured in stages (AS: Topics 1-2, A Level: Topics 3-4).',
  },
  {
    boardSlug: 'aqa', qualificationSlug: 'a-level', subjectSlug: 'accounting',
    officialTitle: 'AQA A-level Accounting (7127)',
    code: '7127',
    boardSummary:
      "AQA Accounting helps develop students' interest in the subject and their analytical and critical thinking skills.",
    officialUrl: 'https://www.aqa.org.uk/subjects/accounting/a-level/accounting-7127',
    verifiedOn: '2026-08-18',
    notes: 'Confirmed live and current (not withdrawn): next exam listed as 17 May 2027, specification first teaching 2017, subject content spans 18 topics from the role of the accountant through ethical considerations.',
  },

  // ===========================================================================
  // OCR — verified directly at ocr.org.uk (Cambridge OCR), 2026-08-18. OCR is
  // NOT offered by Marlbridge (see boards.ts, matrix.ts) — these entries exist
  // as real, verified reference data so OCR is first-class in the model,
  // ready if Marlbridge ever decides to offer it. GCSE quotes below were
  // captured directly from ocr.org.uk's individual GCSE qualification pages;
  // A-Level quotes were re-verified live in this session.
  // ===========================================================================
  {
    boardSlug: 'ocr', qualificationSlug: 'gcse', subjectSlug: 'chemistry',
    officialTitle: 'OCR GCSE Chemistry A (Gateway Science) (J248)',
    code: 'J248',
    boardSummary:
      "Our GCSE Chemistry A (Gateway Science) qualification develops students' broad scientific knowledge as well as their conceptual understanding of a range of topics within chemistry itself. They develop practical and problem-solving skills and an ability to evaluate claims based on science through critical analysis.",
    officialUrl: 'https://www.ocr.org.uk/qualifications/gcse/chemistry-a-gateway-science-j248-from-2016/',
    verifiedOn: '2026-08-18',
    notes: 'Qualification number 601/8663/X. A parallel "Twenty First Century Science" suite (Chemistry B, J258) also exists; J248 (Gateway Science) recorded here for consistency with a single-code-per-subject pattern.',
  },
  {
    boardSlug: 'ocr', qualificationSlug: 'gcse', subjectSlug: 'physics',
    officialTitle: 'OCR GCSE Physics A (Gateway Science) (J249)',
    code: 'J249',
    boardSummary:
      "Our GCSE in Physics A (Gateway Science) introduces students to the key concepts of physics, integrating theory with practical skills. It helps students develop their knowledge of scientific methodology and their conceptual understanding of physics and how this can be applied to the world around them.",
    officialUrl: 'https://www.ocr.org.uk/qualifications/gcse/physics-a-gateway-science-j249-from-2016/',
    verifiedOn: '2026-08-18',
    notes: 'Qualification number 601/8651/3.',
  },
  {
    boardSlug: 'ocr', qualificationSlug: 'gcse', subjectSlug: 'biology',
    officialTitle: 'OCR GCSE Biology A (Gateway Science) (J247)',
    code: 'J247',
    boardSummary:
      "Our GCSE in Biology A (Gateway Science) helps students develop their biological knowledge and scientific thinking. They discover how key concepts in biology make sense of the observed diversity of natural phenomena. Practical skills are integrated with the theoretical topics.",
    officialUrl: 'https://www.ocr.org.uk/qualifications/gcse/biology-a-gateway-science-j247-from-2016/',
    verifiedOn: '2026-08-18',
    notes: 'Qualification number 601/8589/2.',
  },
  {
    boardSlug: 'ocr', qualificationSlug: 'gcse', subjectSlug: 'mathematics',
    officialTitle: 'OCR GCSE (9-1) Mathematics (J560)',
    code: 'J560',
    boardSummary:
      "Our GCSE (9-1) Mathematics qualification encourages students to develop a positive attitude towards the subject and recognise the importance of mathematics in daily life. Students build on a sound base of conceptual understanding to apply mathematical techniques in a variety of authentic contexts.",
    officialUrl: 'https://www.ocr.org.uk/qualifications/gcse/mathematics-j560-from-2015/',
    verifiedOn: '2026-08-18',
    notes: 'Qualification number 601/4606/0.',
  },
  {
    boardSlug: 'ocr', qualificationSlug: 'gcse', subjectSlug: 'business',
    officialTitle: 'OCR GCSE Business (J204)',
    code: 'J204',
    boardSummary:
      "Our GCSE in Business equips students with the skills and confidence to explore how different business situations affect decision-making. They develop their understanding of concepts, objectives and terminology, and the impact of contemporary issues on business operations.",
    officialUrl: 'https://www.ocr.org.uk/qualifications/gcse/business-j204-from-2017/',
    verifiedOn: '2026-08-18',
    notes: 'Qualification number 603/0295/1.',
  },
  {
    boardSlug: 'ocr', qualificationSlug: 'gcse', subjectSlug: 'economics',
    officialTitle: 'OCR GCSE Economics (J205)',
    code: 'J205',
    boardSummary:
      "Our GCSE in Economics introduces students to basic economic concepts and helps them develop the appropriate range of analytical, critical and reasoning skills to enable them to think as economists. They learn how consumers, producers and governments interact in markets nationally and internationally.",
    officialUrl: 'https://www.ocr.org.uk/qualifications/gcse/economics-j205-from-2017/',
    verifiedOn: '2026-08-18',
    notes: 'Qualification number 603/0143/0.',
  },
  {
    boardSlug: 'ocr', qualificationSlug: 'a-level', subjectSlug: 'chemistry',
    officialTitle: 'OCR A Level Chemistry A (H432)',
    code: 'H432',
    boardSummary:
      'Our A Level Chemistry A qualification is a content-led course designed to develop theoretical and practical chemistry skills, knowledge and understanding.',
    officialUrl: 'https://www.ocr.org.uk/qualifications/as-and-a-level/chemistry-a-h032-h432-from-2015/',
    verifiedOn: '2026-08-18',
    notes: 'Qualification number 601/5255/2. Sibling AS Level Chemistry A is H032, qualification number 601/5256/4 — not recorded as a separate matrix row (this repo records A Level codes, not AS siblings, for other boards too).',
  },
  {
    boardSlug: 'ocr', qualificationSlug: 'a-level', subjectSlug: 'physics',
    officialTitle: 'OCR A Level Physics A (H556)',
    code: 'H556',
    boardSummary:
      'Our A Level in Physics A, enables students to build on their knowledge of the laws of physics, applying their understanding to solve problems on topics ranging from subatomic particles to the entire universe. They also have the opportunity to develop all the relevant practical skills.',
    officialUrl: 'https://www.ocr.org.uk/qualifications/as-and-a-level/physics-a-h156-h556-from-2015/',
    verifiedOn: '2026-08-18',
    notes: 'Qualification number 601/4743/X.',
  },
  {
    boardSlug: 'ocr', qualificationSlug: 'a-level', subjectSlug: 'biology',
    officialTitle: 'OCR A Level Biology A (H420)',
    code: 'H420',
    boardSummary:
      'Our A Level in Biology A allows students to develop relevant practical skills alongside essential knowledge and understanding of a range of biological concepts and scientific methods. Biological mathematics and problem-solving skills can be fully integrated into teaching and learning.',
    officialUrl: 'https://www.ocr.org.uk/qualifications/as-and-a-level/biology-a-h020-h420-from-2015/',
    verifiedOn: '2026-08-18',
    notes: 'Qualification number 601/4260/1.',
  },
  {
    boardSlug: 'ocr', qualificationSlug: 'a-level', subjectSlug: 'mathematics',
    officialTitle: 'OCR A Level Mathematics A (H240)',
    code: 'H240',
    boardSummary:
      'Our new A Level Mathematics A qualification has been developed to provide students with a coherent course of study to develop mathematical understanding. Students are encouraged to think, act and communicate mathematically, providing them with the skills to analyse situations in mathematics and elsewhere.',
    officialUrl: 'https://www.ocr.org.uk/qualifications/as-and-a-level/mathematics-a-h230-h240-from-2017/',
    verifiedOn: '2026-08-18',
    notes: 'Qualification number 603/1038/8.',
  },
  {
    boardSlug: 'ocr', qualificationSlug: 'a-level', subjectSlug: 'business',
    officialTitle: 'OCR A Level Business (H431)',
    code: 'H431',
    boardSummary:
      "Our A Level Business qualification stimulates and encourages students' interest in how business works. It fosters an understanding of business operations in a variety of contexts and helps students develop a range of relevant generic skills and ways of thinking.",
    officialUrl: 'https://www.ocr.org.uk/qualifications/as-and-a-level/business-h031-h431-from-2015/',
    verifiedOn: '2026-08-18',
    notes: 'Qualification number 601/4675/8. H431 is current: final first teach September 2025, final assessment summer 2027. OCR\'s replacement A Level Business (H436) has first teach September 2026 — recorded here as a future transition, not yet the current code (mirrors how Cambridge O Level Business 7115→7081 is handled above).',
  },
  {
    boardSlug: 'ocr', qualificationSlug: 'a-level', subjectSlug: 'economics',
    officialTitle: 'OCR A Level Economics (H460)',
    code: 'H460',
    boardSummary:
      'Our refreshed Economics A Level qualification gives a strong grounding in both micro- and macroeconomics, and applies both to the modern world, making it topical and engaging. It helps students develop the skills, knowledge and understanding that will enable them to think and reason as economists.',
    officialUrl: 'https://www.ocr.org.uk/qualifications/as-and-a-level/economics-h060-h460-from-2019/',
    verifiedOn: '2026-08-18',
    notes: 'Qualification number 601/4799/4.',
  },

  // ===========================================================================
  // AQA — verified directly at aqa.org.uk specification pages, 2026-08-18.
  // ===========================================================================
  {
    boardSlug: 'aqa', qualificationSlug: 'gcse', subjectSlug: 'english-language',
    officialTitle: 'AQA GCSE English Language (8700)',
    code: '8700',
    boardSummary:
      "The specification will enable students of all abilities to develop the skills they need to read, understand and analyse a wide range of different texts covering the 19th, 20th and 21st century time periods as well as to write clearly, coherently and accurately using a range of vocabulary and sentence structures.",
    officialUrl: 'https://www.aqa.org.uk/subjects/english/gcse/english-8700/specification',
    verifiedOn: '2026-08-18',
    notes: "Assessed across two equally-weighted papers: Paper 1 'Explorations in Creative Reading and Writing' and Paper 2 'Writers' Viewpoints and Perspectives', plus a separately-reported spoken language endorsement (not counted in the GCSE grade). Fully co-teachable with AQA GCSE English Literature (8702).",
  },
  {
    boardSlug: 'aqa', qualificationSlug: 'gcse', subjectSlug: 'world-history',
    officialTitle: 'AQA GCSE History (8145)',
    code: '8145',
    boardSummary:
      "AQA's GCSE History enables students to study different aspects of the past, so they can engage with key issues such as conflict, understand what drives change and how the past influences the present.",
    officialUrl: 'https://www.aqa.org.uk/subjects/history/gcse/history-8145/specification',
    verifiedOn: '2026-08-18',
    notes: "Subject content is organised into two components: 'Understanding the Modern World' and 'Shaping the Nation', including a historic environment study of specified sites (the specified sites are refreshed periodically — the 2026-2028 series list was current at verification).",
  },
  {
    boardSlug: 'aqa', qualificationSlug: 'a-level', subjectSlug: 'sociology',
    officialTitle: 'AQA A-level Sociology (7192)',
    code: '7192',
    boardSummary:
      "This qualification offers an engaging and effective introduction to Sociology. Students will learn the fundamentals of the subject and develop skills valued by higher education and employers, including critical analysis, independent thinking and research.",
    officialUrl: 'https://www.aqa.org.uk/subjects/sociology/a-level/sociology-7192/specification',
    verifiedOn: '2026-08-18',
    notes: "Subject content spans three components: Education with Theory and Methods, Topics in Sociology (options), and Crime and Deviance with Theory and Methods. Assessment uses short-answer and extended-essay questions, including a 'methods in context' question. AS (7191) and A-level are co-teachable within the first year of study.",
  },
] as const;

export const syllabusFor = (b: string, q: string, s: string): Syllabus | undefined =>
  SYLLABUSES.find((x) => x.boardSlug === b && x.qualificationSlug === q && x.subjectSlug === s);
