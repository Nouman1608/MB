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
    boardSlug: 'cambridge', qualificationSlug: 'a-level', subjectSlug: 'physics',
    officialTitle: 'Cambridge International AS & A Level Physics (9702)',
    code: '9702',
    boardSummary:
      'Cambridge International AS & A Level Physics develops a set of transferable skills including handling data, practical problem-solving, and applying the scientific method.',
    officialUrl: 'https://www.cambridgeinternational.org/programmes-and-qualifications/view/cambridge-international-as-and-a-level-physics-9702/',
    verifiedOn: '2026-08-18',
    notes: 'Cambridge publishes 9702 as a combined AS & A Level syllabus (AS Level topics 1-11, A Level topics 12-25), the same structure as 9701 Chemistry. Marlbridge treats AS Level as a distinct qualification; AS provision is not yet an approved Marlbridge offering.',
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
  // =========================================================================
  // OXFORDAQA — syllabus prose completed, v1.1 WS2, 2026-08-18. All 30 ACTIVE
  // combinations. Every officialTitle, code, boardSummary quote and notes fact
  // was independently re-verified against the current oxfordaqa.com
  // qualification page and its linked specification PDF on 2026-08-18 — not
  // carried over from the WS4 matrix source citations, which only referenced
  // the qualifications index page. boardSummary is a genuine short quote from
  // the board's own overview text; notes is original Marlbridge prose.
  // =========================================================================
  {
    boardSlug: 'oxfordaqa', qualificationSlug: 'igcse', subjectSlug: 'mathematics',
    officialTitle: 'OxfordAQA International GCSE Mathematics (9260)',
    code: '9260',
    boardSummary:
      'With a focus on Pure Maths, reasoning skills and the real-life application of mathematical concepts, the OxfordAQA International GCSE Mathematics qualification ensures that students have the best possible preparation for A-level, university and beyond.',
    officialUrl: 'https://www.oxfordaqa.com/qualifications/international-gcse-mathematics/',
    verifiedOn: '2026-08-18',
    notes: 'Content is organised into four areas — number, algebra, geometry and measures, and probability and statistics — assessed across two linear papers with no coursework. Candidates sit either the Core tier (grades 1-5) or the Extension tier (grades 4-9); both papers in a tier are equally weighted and a scientific calculator is permitted throughout. First teaching September 2016, first examined May/June 2018.',
  },
  {
    boardSlug: 'oxfordaqa', qualificationSlug: 'a-level', subjectSlug: 'mathematics',
    officialTitle: 'OxfordAQA International AS and A-level Mathematics (9660)',
    code: '9660',
    boardSummary:
      'This qualification has a strong emphasis on pure mathematics to equip students for undergraduate study.',
    officialUrl: 'https://www.oxfordaqa.com/qualifications/international-as-a-level-mathematics/',
    verifiedOn: '2026-08-18',
    notes: 'A modular qualification built from four units: two AS units (Pure Maths, and Pure Maths with Statistics and Mechanics) and two A2 units (further Pure Maths, plus a choice of a Statistics or a Mechanics option). The AS units can be certificated as a stand-alone International AS award or carried forward, each worth 20% of the full A-level; units can be resat any number of times with the best result counted. First teaching September 2017; first AS exams May/June 2018; first A-level exams May/June 2019.',
  },
  {
    boardSlug: 'oxfordaqa', qualificationSlug: 'igcse', subjectSlug: 'computer-science',
    officialTitle: 'OxfordAQA International GCSE Computer Science (9210)',
    code: '9210',
    boardSummary:
      'This International GCSE Computer Science specification is a motivating, hands-on course designed to enable you to teach computing as a real science, one in which practical application of skills is at the heart of your classroom.',
    officialUrl: 'https://www.oxfordaqa.com/qualifications/international-gcse-computer-science/',
    verifiedOn: '2026-08-18',
    notes: 'Covers algorithms, programming, data representation, computer systems, networks, cyber security, relational databases and SQL, and web page design, across two linear papers: an on-screen programming paper set against a pre-released skeleton program (available in C#, Python or Visual Basic) and a written paper on concepts and principles, each worth 50%. No coursework. First teaching September 2017, first examined May/June 2019.',
  },
  {
    boardSlug: 'oxfordaqa', qualificationSlug: 'a-level', subjectSlug: 'computer-science',
    officialTitle: 'OxfordAQA International AS and A-level Computer Science (9645)',
    code: '9645',
    boardSummary:
      'Through a practical approach that balances traditional and modern computing methodologies with programming and creativity, our International AS/A-level Computer Science course develops the skills needed for the future.',
    officialUrl: 'https://www.oxfordaqa.com/qualifications/international-as-a-level-computer-science/',
    verifiedOn: '2026-08-18',
    notes: 'A modular qualification spanning procedural and object-oriented programming, data structures and algorithms, computer organisation and architecture, theory of computation, networking and cyber security, databases and artificial intelligence, across two AS papers (an on-screen programming exam and a written paper, each 50% of AS/20% of A-level) and two further A2 papers. This is a recently revised specification: first teaching September 2024, first International AS exams May/June 2025, first International A-level exams May/June 2026.',
  },
  {
    boardSlug: 'oxfordaqa', qualificationSlug: 'igcse', subjectSlug: 'biology',
    officialTitle: 'OxfordAQA International GCSE Biology (9201)',
    code: '9201',
    boardSummary:
      'Prepare for further study with this thorough grounding in the practical skills needed to be a working scientist.',
    officialUrl: 'https://www.oxfordaqa.com/qualifications/international-gcse-biology/',
    verifiedOn: '2026-08-18',
    notes: "Covers organisation, bioenergetics, ecology, organisms' interaction with the environment, and inheritance, variation and evolution, across two linear papers of equal weight; either paper may draw on any part of the specification, and practical skills are assessed within the written papers rather than through a separate practical exam. First teaching September 2016, first examined May/June 2018.",
  },
  {
    boardSlug: 'oxfordaqa', qualificationSlug: 'a-level', subjectSlug: 'biology',
    officialTitle: 'OxfordAQA International AS and A-level Biology (9610)',
    code: '9610',
    boardSummary:
      'Thanks to relevant, up-to-date and motivating content, this International AS and A-level Biology specification gives students an excellent springboard to higher level study, allowing them to demonstrate the skills required for university study of subjects such as Biology, Medicine or Dentistry.',
    officialUrl: 'https://www.oxfordaqa.com/qualifications/international-as-a-level-biology/',
    verifiedOn: '2026-08-18',
    notes: 'Five units carry students from diversity of living organisms and biological systems/disease at AS through to populations and genes, control, and a synoptic paper at A2. Students complete ten required practical activities, assessed through the written papers rather than a separate practical exam; AS units are cashable as a stand-alone AS award or carried forward at 20% each toward the full A-level, with unlimited resits. First teaching September 2016; first AS exams May/June 2017; first A-level exams May/June 2018.',
  },
  {
    boardSlug: 'oxfordaqa', qualificationSlug: 'igcse', subjectSlug: 'chemistry',
    officialTitle: 'OxfordAQA International GCSE Chemistry (9202)',
    code: '9202',
    boardSummary:
      'This International GCSE Chemistry qualification contains a broad range of topics designed to engage students in chemistry whilst providing the knowledge and understanding required for progression to A-level.',
    officialUrl: 'https://www.oxfordaqa.com/qualifications/international-gcse-chemistry/',
    verifiedOn: '2026-08-18',
    notes: 'Ten topic areas run from atomic structure and bonding through quantitative chemistry, periodicity, rates and energy changes to organic chemistry, assessed across two equally weighted linear papers with practical knowledge examined through the written papers. First teaching September 2016, first examined May/June 2018.',
  },
  {
    boardSlug: 'oxfordaqa', qualificationSlug: 'a-level', subjectSlug: 'chemistry',
    officialTitle: 'OxfordAQA International AS and A-level Chemistry (9620)',
    code: '9620',
    boardSummary:
      'Mirroring the way many universities split their content, each section begins with an overview, which puts the topic into a broader chemical context and ensures understanding of the place of each topic within the subject.',
    officialUrl: 'https://www.oxfordaqa.com/qualifications/international-as-a-level-chemistry/',
    verifiedOn: '2026-08-18',
    notes: "Structured around physical, inorganic and organic chemistry across five units, with a dedicated Practical and Synoptic paper at A2 built on ten required practicals (assessed through written questions rather than a hands-on exam). AS units are worth 50% of the AS award or 20% each toward the full A-level. First teaching September 2019; first AS and A-level exams May/June 2020 — a later first-teaching cohort than OxfordAQA's Biology and Physics AS/A-level.",
  },
  {
    boardSlug: 'oxfordaqa', qualificationSlug: 'igcse', subjectSlug: 'physics',
    officialTitle: 'OxfordAQA International GCSE Physics (9203)',
    code: '9203',
    boardSummary:
      'This International GCSE Physics qualification is designed to engage students in physics. It brings the science to life for non-native English speakers, while teaching students to reason and work scientifically.',
    officialUrl: 'https://www.oxfordaqa.com/qualifications/international-gcse-physics/',
    verifiedOn: '2026-08-18',
    notes: 'Covers forces, energy, waves, the particle model of matter, electricity and magnetism, electricity generation and distribution, nuclear physics and space physics, across two equally weighted linear papers with practical knowledge examined through the written papers. First teaching September 2016, first examined May/June 2018.',
  },
  {
    boardSlug: 'oxfordaqa', qualificationSlug: 'a-level', subjectSlug: 'physics',
    officialTitle: 'OxfordAQA International AS and A-level Physics (9630)',
    code: '9630',
    boardSummary:
      'This International AS/A-level specification covers all topics that students are expected to be familiar with in order to study Physics at university. It features carefully balanced depth and breadth of content that includes topics with contemporary and international relevance such as renewable energy.',
    officialUrl: 'https://www.oxfordaqa.com/qualifications/international-as-a-level-physics/',
    verifiedOn: '2026-08-18',
    notes: 'Five units run from mechanics, materials and atoms through fields, energy and energy resources to a dedicated Physics in Practice paper built on ten required practicals, assessed through written questions. AS units are worth 50% of the AS award or 20% each toward the full A-level, with unlimited resits. First teaching September 2019; first AS and A-level exams May/June 2020.',
  },
  {
    boardSlug: 'oxfordaqa', qualificationSlug: 'igcse', subjectSlug: 'accounting',
    officialTitle: 'OxfordAQA International GCSE Accounting (9215)',
    code: '9215',
    boardSummary:
      'With a focus on practical skills and application, our International GCSE Accounting course is both professionally relevant and academically engaging for students.',
    officialUrl: 'https://www.oxfordaqa.com/qualifications/international-gcse-accounting/',
    verifiedOn: '2026-08-18',
    notes: 'Covers sources and recording of data, verification of accounting records, the development of the accounting model, preparing financial statements, and interpreting and communicating financial information, across two equally weighted written papers with no coursework. First teaching September 2024, first examined May/June 2026 — a recently launched specification.',
  },
  {
    boardSlug: 'oxfordaqa', qualificationSlug: 'a-level', subjectSlug: 'accounting',
    officialTitle: 'OxfordAQA International AS and A-level Accounting (9615)',
    code: '9615',
    boardSummary:
      'Our International AS/A-level Accounting course emphasises applying skills to practical contexts, so your students are ready to take on the challenges accountants face in the workplace.',
    officialUrl: 'https://www.oxfordaqa.com/qualifications/international-as-a-level-accounting/',
    verifiedOn: '2026-08-18',
    notes: 'Builds from the role of the accountant and the double-entry model through verification, financial statements for different business types, budgeting and costing methods, to capital investment appraisal and ethics. AS content is half of the A-level content, contributing 40% of the final A-level marks (A2 content the remaining 60%); students may sit AS in year one and A2 in year two, or take all units together at the end. A recently launched specification: first teaching September 2024, first AS exams May/June 2025, first A-level exams May/June 2026.',
  },
  {
    boardSlug: 'oxfordaqa', qualificationSlug: 'igcse', subjectSlug: 'business',
    officialTitle: 'OxfordAQA International GCSE Business (9225)',
    code: '9225',
    boardSummary:
      'Designed for students outside of the UK, the OxfordAQA International GCSE Business specification teaches learners real-world business planning and operations skills using international case studies and terminology to ensure it is relevant and motivating.',
    officialUrl: 'https://www.oxfordaqa.com/qualifications/international-gcse-business/',
    verifiedOn: '2026-08-18',
    notes: 'Covers business in the real world, influences on business, business operations, human resources, marketing and finance, across two equally weighted written papers with no coursework. First teaching September 2020, first examined May/June 2022.',
  },
  {
    boardSlug: 'oxfordaqa', qualificationSlug: 'a-level', subjectSlug: 'business',
    officialTitle: 'OxfordAQA International AS and A-level Business (9625 / 9725)',
    code: '9625 / 9725',
    boardSummary:
      'OxfordAQA International AS and A-level Business is a relevant and engaging specification that supports progression to further education and employment.',
    officialUrl: 'https://www.oxfordaqa.com/qualifications/international-as-a-level-business-revised/',
    verifiedOn: '2026-08-18',
    notes: 'OxfordAQA is running two specifications side by side during a transition: the legacy 9625 (first teaching September 2018) is open to its final AS exams in May/June 2026 and final A-level exams in May/June 2027, while the revised 9725 takes over for new starts from September 2026, with first AS exams May/June 2027 and first A-level exams May/June 2028. Both cover what is business, marketing, operations, human resources and finance at AS, with strategy, analysis and decision-making content added at A2; the revised specification restructures A2 assessment around case-study questions. Students beginning the course from September 2026 follow 9725; those already partway through follow 9625 to completion.',
  },
  {
    boardSlug: 'oxfordaqa', qualificationSlug: 'igcse', subjectSlug: 'economics',
    officialTitle: 'OxfordAQA International GCSE Economics (9214)',
    code: '9214',
    boardSummary:
      'With a focus on the real-world applications of economics, this International GCSE Economics course will stimulate and inspire your students.',
    officialUrl: 'https://www.oxfordaqa.com/qualifications/international-gcse-economics/',
    verifiedOn: '2026-08-18',
    notes: 'Split into how markets work (resource allocation, price determination, costs and profit, market failure) and how economies work (government policy, international trade, money and financial markets), across two equally weighted written papers with no coursework. First teaching September 2023, first examined May/June 2025 — a recently launched specification.',
  },
  {
    boardSlug: 'oxfordaqa', qualificationSlug: 'a-level', subjectSlug: 'economics',
    officialTitle: 'OxfordAQA International AS and A-level Economics (9640)',
    code: '9640',
    boardSummary:
      'Reflecting recent developments in international economics, this International AS/A-level specification places an emphasis on behavioural economics, the importance of financial markets, inequality within and between countries, and environmental issues.',
    officialUrl: 'https://www.oxfordaqa.com/qualifications/international-as-a-level-economics/',
    verifiedOn: '2026-08-18',
    notes: 'AS content covers the operation of markets, market failure and the role of government, plus the national economy in a global environment; A2 adds business behaviour and the distribution of income, and economic development and the global environment, with a quantitative skills strand running throughout. AS content is 50% of the A-level content but contributes 40% of the final marks (A2 the remaining 60%); AS and A2 can be taken across two years or together at the end. First teaching September 2020; first AS exams May/June 2021; first A-level exams May/June 2022.',
  },
  {
    boardSlug: 'oxfordaqa', qualificationSlug: 'igcse', subjectSlug: 'english-language',
    officialTitle: 'OxfordAQA International GCSE English Language (9270)',
    code: '9270',
    boardSummary:
      "Thanks to its rigorous summative assessment of students' skills and abilities, this International English GCSE specification offers excellent preparation for International AS and A-level English Language, as well as giving students a grounding in a wide variety of language that will stay with them for life.",
    officialUrl: 'https://www.oxfordaqa.com/qualifications/international-gcse-english-language/',
    verifiedOn: '2026-08-18',
    notes: 'Paper 1 (Literary Non-Fiction and Composition) is sat by all candidates; Paper 2 offers a choice between a Source-Based Reading and Directed Writing exam or a teacher-assessed, board-moderated non-exam assessment, weighted 60/40 with Paper 1. An optional Speaking and Listening endorsement is separately certificated. First teaching September 2016, first examined May/June 2018.',
  },
  {
    boardSlug: 'oxfordaqa', qualificationSlug: 'a-level', subjectSlug: 'english-language',
    officialTitle: 'OxfordAQA International AS and A-level English Language (9670)',
    code: '9670',
    boardSummary:
      'The assessment of this qualification reflects the style of assessment adopted at university level, providing an ideal platform for higher education.',
    officialUrl: 'https://www.oxfordaqa.com/qualifications/international-as-a-level-english-language/',
    verifiedOn: '2026-08-18',
    notes: 'Four units move from language and context and language and society at AS to language variation and a final language exploration unit at A2, the last offered as either an exam or a non-exam assessment (a language investigation, teacher-assessed and board-moderated). AS is separately certificated or carried forward at 20% per unit toward the full A-level, with unlimited resits. First teaching September 2017; first AS exams May/June 2018; first A-level exams May/June 2019.',
  },
  {
    boardSlug: 'oxfordaqa', qualificationSlug: 'igcse', subjectSlug: 'english-literature',
    officialTitle: 'OxfordAQA International GCSE English Literature (9275)',
    code: '9275',
    boardSummary:
      "This International GCSE qualification takes a skills-based approach to the study of English literature that is consistent across the genres. So whatever your students' interests, you can be sure that the course will develop skills in independent research and learning and provide invaluable preparation for higher level study.",
    officialUrl: 'https://www.oxfordaqa.com/qualifications/international-gcse-english-literature/',
    verifiedOn: '2026-08-18',
    notes: 'Two routes are offered: Route A (two exam papers on Prose and Drama, then Poetry and Unseen Texts) and Route B (the same Prose and Drama paper, a shorter Poetry paper, plus a teacher-assessed, board-moderated non-exam assessment). This specification is being revised for first teaching September 2026 with a refreshed set-text and poetry list; the current set texts and papers remain live for cohorts already underway, with final exams May/June 2027 and final resits November 2027. Students starting from September 2026 follow the revised set-text list.',
  },
  {
    boardSlug: 'oxfordaqa', qualificationSlug: 'a-level', subjectSlug: 'english-literature',
    officialTitle: 'OxfordAQA International AS and A-level English Literature (9675)',
    code: '9675',
    boardSummary:
      'This International AS and A-level English Literature specification encourages the independent study of a range of texts within a shared context, giving logic and meaning to the way that texts are grouped for study.',
    officialUrl: 'https://www.oxfordaqa.com/qualifications/international-as-a-level-english-literature/',
    verifiedOn: '2026-08-18',
    notes: 'Four units run from Elizabethan/Jacobean and later dramatic tragedy, through prose and poetry, to a selection of crime and mystery-themed texts at A2, with the final unit offered as either an unseen-texts exam or two teacher-assessed, board-moderated essays. AS is separately certificated or carried forward at 20% per unit toward the full A-level. First teaching September 2017; first AS exams May/June 2018; first A-level exams May/June 2019.',
  },
  {
    boardSlug: 'oxfordaqa', qualificationSlug: 'igcse', subjectSlug: 'geography',
    officialTitle: 'OxfordAQA International GCSE Geography (9230)',
    code: '9230',
    boardSummary:
      'OxfordAQA International GCSE Geography is a globally relevant course which introduces students to the fundamental theories, concepts and processes of geography at global, regional and local scales, with the opportunity for teachers to use relevant local examples.',
    officialUrl: 'https://www.oxfordaqa.com/qualifications/international-gcse-geography/',
    verifiedOn: '2026-08-18',
    notes: 'Living with the Physical Environment and Challenges in the Human Environment are assessed through two written papers, with a third paper on geographical and fieldwork skills; no coursework component. First teaching September 2018, first examined May/June 2020.',
  },
  {
    boardSlug: 'oxfordaqa', qualificationSlug: 'a-level', subjectSlug: 'geography',
    officialTitle: 'OxfordAQA International AS and A-level Geography (9635)',
    code: '9635',
    boardSummary:
      'This OxfordAQA International AS and A-level Geography specification blends the best of the AQA specification, which is the most popular specification in England, with ideas, concepts and approaches to learning which make it more appropriate for international schools.',
    officialUrl: 'https://www.oxfordaqa.com/qualifications/international-as-a-level-geography/',
    verifiedOn: '2026-08-18',
    notes: 'AS content (hazards plus a choice of hot deserts or coastal systems, and global systems/governance plus resource security) is examined across two papers; A2 adds further physical and human geography units plus a fieldwork and skills paper. AS units are worth 50% of the AS award or 20% each toward the full A-level, with unlimited resits. First teaching September 2018; first AS exams May/June 2019; first A-level exams May/June 2020.',
  },
  {
    boardSlug: 'oxfordaqa', qualificationSlug: 'igcse', subjectSlug: 'psychology',
    officialTitle: 'OxfordAQA International GCSE Psychology (9218)',
    code: '9218',
    boardSummary:
      "This International GCSE Psychology course has been designed to develop your students' knowledge of psychological concepts whilst broadening their independent thinking and research skills.",
    officialUrl: 'https://www.oxfordaqa.com/qualifications/international-gcse-psychology/',
    verifiedOn: '2026-08-18',
    notes: 'Paper 1 (Cognition and Behaviour) covers memory, perception, biopsychology and research methods; Paper 2 (Social Context and Behaviour) covers communication, social influences, mental health and research methods. The two papers are equally weighted with no coursework. First teaching September 2023, first examined May/June 2025 — a recently launched specification.',
  },
  {
    boardSlug: 'oxfordaqa', qualificationSlug: 'a-level', subjectSlug: 'psychology',
    officialTitle: 'OxfordAQA International AS and A-level Psychology (9685)',
    code: '9685',
    boardSummary:
      'These qualifications use an accessible and coherent topic-based approach to offer a stimulating, effective introduction to psychology.',
    officialUrl: 'https://www.oxfordaqa.com/qualifications/international-as-a-level-psychology/',
    verifiedOn: '2026-08-18',
    notes: 'AS units cover introductory topics in psychology and biopsychology, development and research methods; A2 adds advanced topics and research methods, and approaches and application. AS content is 50% of the A-level content but contributes 40% of the final marks (A2 the remaining 60%), with units resittable any number of times. First teaching September 2018; first AS exams May/June 2019; first A-level exams May/June 2020.',
  },
  {
    boardSlug: 'oxfordaqa', qualificationSlug: 'igcse', subjectSlug: 'sociology',
    officialTitle: 'OxfordAQA International GCSE Sociology (9292)',
    code: '9292',
    boardSummary:
      "OxfordAQA's International GCSE and A-level Sociology qualifications, available for first teaching from September 2026, offer students a powerful lens for understanding the world around them — from families and education to inequality and globalisation.",
    officialUrl: 'https://www.oxfordaqa.com/qualifications/international-gcse-sociology/',
    verifiedOn: '2026-08-18',
    notes: 'Paper 1 covers families, education and research methods; Paper 2 covers differences and inequalities, socialisation and social control, and research methods, with the two papers equally weighted and no coursework. This is a newly launched specification with no prior OxfordAQA GCSE Sociology to succeed: first teaching September 2026, first examined May/June 2028.',
  },
  {
    boardSlug: 'oxfordaqa', qualificationSlug: 'a-level', subjectSlug: 'sociology',
    officialTitle: 'OxfordAQA International AS and A-level Sociology (9690)',
    code: '9690',
    boardSummary:
      'A relevant, engaging specification with culturally relevant, contemporary topics – designed for international students to develop their critical thinking skills and prepare them for university study.',
    officialUrl: 'https://www.oxfordaqa.com/qualifications/international-as-a-level-sociology/',
    verifiedOn: '2026-08-18',
    notes: 'AS units cover families and socialisation/social control alongside research methods; A2 adds people and development, people and the environment, and people and technologies. This is a newly launched specification: first teaching September 2026, first AS exams May/June 2027, first A-level exams May/June 2028.',
  },
  {
    boardSlug: 'oxfordaqa', qualificationSlug: 'igcse', subjectSlug: 'world-history',
    officialTitle: 'OxfordAQA International GCSE History (9245)',
    code: '9245',
    boardSummary:
      'A truly international specification, which engages students with modern international relations, relevant and contemporary themes and perspectives, and long-term global historical developments.',
    officialUrl: 'https://www.oxfordaqa.com/qualifications/international-gcse-history/',
    verifiedOn: '2026-08-18',
    notes: 'Paper 1 offers a choice of International Relations depth studies and origins/development studies; Paper 2 offers a choice of a societal depth study and a thematic study in either technology or medicine, with some sections using pre-released sources. OxfordAQA publishes this qualification as International GCSE History; Marlbridge groups it under World History alongside the equivalent offering from other boards. A newly launched specification: first teaching 2026, first examined May/June 2028. OxfordAQA does not offer History at AS or A-level.',
  },
  {
    boardSlug: 'oxfordaqa', qualificationSlug: 'igcse', subjectSlug: 'islamiyat',
    officialTitle: 'OxfordAQA International GCSE Islamiat (9237)',
    code: '9237',
    boardSummary:
      'Our International GCSE Islamiat course integrates scripture and contextual knowledge to provide students a cohesive understanding of Islam, its teachings and texts.',
    officialUrl: 'https://www.oxfordaqa.com/qualifications/international-gcse-islamiat/',
    verifiedOn: '2026-08-18',
    notes: "Covers beliefs and teachings, practices, the life and teachings of the Prophet Muhammad, and sources of authority in Islam, with prescribed Qur'an and Hadith passages set out in the specification. Two equally weighted written papers, no coursework. OxfordAQA's own spelling is Islamiat. First examined May/June 2026 onwards. OxfordAQA does not offer Islamiat at AS or A-level — International GCSE is the only level offered.",
  },
  {
    boardSlug: 'oxfordaqa', qualificationSlug: 'igcse', subjectSlug: 'pakistan-studies',
    officialTitle: 'OxfordAQA International GCSE Pakistan Studies (9236)',
    code: '9236',
    boardSummary:
      "With a unique and modern syllabus, our International GCSE Pakistan Studies course offers students a thorough understanding of Pakistan's human and physical geography and its people's experiences throughout history and in recent times.",
    officialUrl: 'https://www.oxfordaqa.com/qualifications/international-gcse-pakistan-studies/',
    verifiedOn: '2026-08-18',
    notes: 'Paper 1 covers the Pakistan Movement (1857-1947) and Pakistan into the 21st century, with a choice between Islam in the subcontinent or the Mughal Empire; Paper 2 covers landscape and natural resources and people and economy, with a choice between globalisation and transport or a sustainable future. Two equally weighted written papers, no coursework. First examined May/June 2026 onwards. OxfordAQA does not offer Pakistan Studies at AS or A-level — International GCSE is the only level offered.',
  },
  {
    boardSlug: 'oxfordaqa', qualificationSlug: 'igcse', subjectSlug: 'urdu-language',
    officialTitle: 'OxfordAQA International GCSE Urdu (9264)',
    code: '9264',
    boardSummary:
      "Our International GCSE Urdu has been designed to develop your students' multilingualism alongside their communication and analytical skills.",
    officialUrl: 'https://www.oxfordaqa.com/qualifications/international-gcse-urdu/',
    verifiedOn: '2026-08-18',
    notes: "Built around three themes — identity and culture; local, national, international and global areas of interest; and current and future study and employment — assessed through a Reading, Grammar and Meaning paper (including English-to-Urdu translation) and a Writing paper, equally weighted with no coursework. OxfordAQA's official title for this qualification is simply Urdu, not Urdu Language. First teaching September 2024, first examined June 2026 onwards. OxfordAQA does not offer Urdu at AS or A-level — International GCSE is the only level offered.",
  },
  {
    boardSlug: 'edexcel', qualificationSlug: 'a-level', subjectSlug: 'physics',
    officialTitle: 'Pearson Edexcel International Advanced Level in Physics (YPH11)',
    code: 'YPH11',
    boardSummary:
      'The Pearson Edexcel International Advanced Subsidiary and Advanced Level in Physics develop knowledge and understanding of mechanics, materials, waves, electricity, fields, thermodynamics, radiation, particles, oscillations and cosmology, alongside practical, mathematical and problem-solving skills.',
    officialUrl: 'https://qualifications.pearson.com/en/qualifications/edexcel-international-advanced-levels/physics-2018.html',
    verifiedOn: '2026-08-18',
    notes: 'Modular qualification: the International Advanced Subsidiary (IAS, code XPH11) is claimed on completion of Units 1-3; the full International Advanced Level (IAL, code YPH11) requires all six units (1-6). Units 1, 2, 4 and 5 are content units; Units 3 and 6 are practical-skills-only externally examined papers. First teaching September 2018, first examination January 2019, current specification Issue 3 (July 2021).',
  },
  {
    boardSlug: 'edexcel', qualificationSlug: 'igcse', subjectSlug: 'physics',
    officialTitle: 'Pearson Edexcel International GCSE in Physics (4PH1)',
    code: '4PH1',
    boardSummary:
      'The Pearson Edexcel International GCSE in Physics gives students the opportunity to experience physics within the context of their general education, building a foundation for progression to Advanced GCE, International AS and A Level physics or equivalent qualifications.',
    officialUrl: 'https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/international-gcse-physics-2017.html',
    verifiedOn: '2026-08-18',
    notes: 'Untiered, linear qualification: two written papers taken in the same series (Paper 1, core content; Paper 2, all content including bold statements marked with a "P" reference that are Physics-only, not shared with the Science (Double Award) specification). Eight topics: Forces and motion; Electricity; Waves; Energy resources and energy transfers; Solids, liquids and gases; Magnetism and electromagnetism; Radioactivity and particles; Astrophysics. First teaching September 2017, first examination June 2019, current specification Issue 4 (September 2024).',
  },
  {
    boardSlug: 'aqa', qualificationSlug: 'gcse', subjectSlug: 'physics',
    officialTitle: 'AQA GCSE Physics (8463)',
    code: '8463',
    boardSummary:
      'This specification gives students the opportunity to study the more theoretical aspects of physics, such as astrophysics and particle physics, and covers the essential knowledge and skills for progression to further study.',
    officialUrl: 'https://www.aqa.org.uk/subjects/physics/gcse/physics-8463/specification',
    verifiedOn: '2026-08-19',
    notes: 'Untiered as a standalone Physics GCSE (Foundation/Higher content is flagged within each topic via "HT only", not via separate specifications). Eight topics: Energy, Electricity, Particle model of matter, Atomic structure, Forces, Waves, Magnetism and electromagnetism, and Space physics. Most content is co-teachable with GCSE Combined Science: Trilogy (8464); content marked "(physics only)" in the official specification is Physics-only. First teaching September 2016. Assessed across two written papers (Paper 1: Energy, Electricity, Particle model of matter, Atomic structure; Paper 2: Forces, Waves, Magnetism and electromagnetism, Space physics), each 1 hour 45 minutes.',
  },

  {
    boardSlug: 'aqa', qualificationSlug: 'a-level', subjectSlug: 'physics',
    officialTitle: 'AQA A-level Physics (7408)',
    code: '7408',
    boardSummary:
      "We've ensured that the AS and A-level are fully co-teachable. The AS exams include similar questions to those in the A-level, with less difficulty. We've provided five optional topics as part of the full A-level course so students can focus on their areas of interest: Astrophysics, Medical physics, Turning points in physics, Engineering physics, Electronics.",
    officialUrl: 'https://www.aqa.org.uk/subjects/physics/a-level/physics-7408/specification',
    verifiedOn: '2026-08-19',
    notes: 'First teaching September 2015. Sections 3.1-3.5 (Measurements and their errors; Particles and radiation; Waves; Mechanics and materials; Electricity) are shared with the co-teachable AS Physics (7407) and are typically taught in year 1. Sections 3.6-3.8 (Further mechanics and thermal physics; Fields and their consequences; Nuclear physics) are A-level only, typically taught in year 2. Students also study one of five optional A-level-only topics chosen by their centre: Astrophysics, Medical physics, Engineering physics, Turning points in physics, or Electronics. Assessed across three written papers plus separately-certificated practical endorsement based on 12 required practical activities.',
  },

  {
    boardSlug: 'cambridge', qualificationSlug: 'igcse', subjectSlug: 'mathematics',
    officialTitle: 'Cambridge IGCSE Mathematics (0580)',
    code: '0580',
    boardSummary:
      'Cambridge IGCSE Mathematics develops learners\' mathematical knowledge and skills through a syllabus which encourages enjoyment, confidence and further study. It supports learners in applying their mathematical knowledge and skills to their own lives and the world around them, and in communicating mathematics clearly.',
    officialUrl: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-mathematics-0580/',
    verifiedOn: '2026-08-19',
    notes: 'Tiered: Core subject content targets grades C-G, Extended subject content targets grades A*-C (Extended contains all Core content plus additional material). Nine top-level topics: Number, Algebra and graphs, Coordinate geometry, Geometry, Mensuration, Trigonometry, Transformations and vectors, Probability, Statistics -- not presented in a required teaching order. Syllabus for examination series 2025, 2026 and 2027.',
  },

  {
    boardSlug: 'cambridge', qualificationSlug: 'a-level', subjectSlug: 'mathematics',
    officialTitle: 'Cambridge International AS & A Level Mathematics (9709)',
    code: '9709',
    boardSummary:
      'Cambridge International AS and A Level Mathematics develops a set of transferable skills, including a deep understanding of mathematical principles, the ability to analyse problems logically, and skills in presenting a mathematical argument. It gives learners a strong foundation for progressing to further study.',
    officialUrl: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-level-mathematics-9709/',
    verifiedOn: '2026-08-19',
    notes: 'Modular: 6 papers spanning 3 content strands -- Pure Mathematics (Papers 1-3), Mechanics (Paper 4), Probability & Statistics (Papers 5-6). Different combinations of papers lead to different AS or A-level awards (for example, Paper 1+2 gives AS Pure Mathematics only; Paper 1, 3, 4 and 5 gives the full A-level with Mechanics and Probability & Statistics 1). Syllabus for examination series 2026 and 2027.',
  },

  {
    boardSlug: 'aqa', qualificationSlug: 'gcse', subjectSlug: 'mathematics',
    officialTitle: 'AQA GCSE Mathematics (8300)',
    code: '8300',
    boardSummary:
      "This specification matches the content set out in the Department for Education's Mathematics GCSE subject content document. This content is common to all exam boards, so students learn the same mathematics whichever awarding body their school uses.",
    officialUrl: 'https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/specification',
    verifiedOn: '2026-08-19',
    notes: 'Tiered: Foundation tier (grades 1-9, students awarded 1-5) and Higher tier (grades 4-9). Students take three question papers at the same tier. Six topic areas: Number, Algebra, Ratio proportion and rates of change, Geometry and measures, Probability, Statistics -- the weighting of each is prescribed by Ofqual and is common to all exam boards offering GCSE Mathematics.',
  },
  {
    boardSlug: 'edexcel', qualificationSlug: 'igcse', subjectSlug: 'mathematics',
    officialTitle: 'Pearson Edexcel International GCSE in Mathematics (Specification A) (4MA1)',
    code: '4MA1',
    boardSummary:
      'The Pearson Edexcel International GCSE in Mathematics (Specification A) requires students to use numerical skills in a purely mathematical way and in real-life situations, use algebra to set up and solve problems, use properties of angles and understand transformations, and use a range of statistical techniques and basic ideas of probability.',
    officialUrl: 'https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/mathematics-a-2016.html',
    verifiedOn: '2026-08-19',
    notes: 'Tiered: Foundation tier (grades 5-1) and Higher tier (grades 9-4, with an allowed grade 3). Two written papers per tier, 2 hours each, 100 marks. Specification Issue 2 (November 2017).',
  },
  {
    boardSlug: 'edexcel', qualificationSlug: 'a-level', subjectSlug: 'mathematics',
    officialTitle: 'Pearson Edexcel International Advanced Level in Mathematics (YMA01)',
    code: 'YMA01',
    boardSummary:
      'The Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics is a modular qualification built from externally-assessed units: four compulsory Pure Mathematics units plus a pair of applied units chosen from a fixed menu of Mechanics, Statistics and Decision Mathematics combinations.',
    officialUrl: 'https://qualifications.pearson.com/en/qualifications/edexcel-international-advanced-levels/mathematics-2018.html',
    verifiedOn: '2026-08-19',
    notes: "International Advanced Level (IAL, six units): compulsory P1-P4 (Pure Mathematics 1-4) plus one of the following pairs: M1+S1, M1+D1, M1+M2, S1+D1, or S1+S2. The International Advanced Subsidiary (IAS, code XMA01, three units) requires only P1, P2 plus one of M1/S1/D1, and is not recorded as a separate matrix row. Further Pure Mathematics units (FP1-FP3) and units M3/S3 belong to the separate Further Mathematics (YFM01) and Pure Mathematics (YPM01) awards, not to the plain Mathematics award, and are not represented here. Specification Issue 3 (April 2019).",
  },
  {
    boardSlug: 'aqa', qualificationSlug: 'a-level', subjectSlug: 'mathematics',
    officialTitle: 'AQA A-level Mathematics (7357)',
    code: '7357',
    boardSummary:
      'The subject content for A-level Mathematics is set out by the Department for Education (DfE) and is common across all exam boards. The content set out in this specification covers the complete A-level course of study.',
    officialUrl: 'https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357/specification',
    verifiedOn: '2026-08-19',
    notes: 'First teaching 2017. 21 lettered subject-content sections (A-S, plus a cross-cutting requirement on the use of large data sets in statistics) -- content and weighting are prescribed by the DfE and common to all boards offering A-level Mathematics, not set independently by AQA.',
  },

  {
    boardSlug: 'cambridge', qualificationSlug: 'a-level', subjectSlug: 'biology',
    officialTitle: 'Cambridge International AS & A Level Biology (9700)',
    code: '9700',
    boardSummary:
      "Cambridge International AS & A Level Biology develops a set of transferable skills including handling data, practical problem-solving and applying the scientific method, giving learners a strong foundation for progression to higher education in biology or related courses.",
    officialUrl: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-level-biology-9700/',
    verifiedOn: '2026-08-19',
    notes: 'Syllabus for exams in 2025, 2026 and 2027 (Version 1). AS Level covers Topics 1-11; A Level covers all 19 topics. Three routes: AS only, A Level staged over two years, or A Level in one series. Five papers: Paper 1 Multiple Choice, Paper 2 AS Structured Questions, Paper 3 Advanced Practical Skills, Paper 4 A Level Structured Questions, Paper 5 Planning, Analysis and Evaluation.',
  },
  {
    boardSlug: 'cambridge', qualificationSlug: 'igcse', subjectSlug: 'biology',
    officialTitle: 'Cambridge IGCSE Biology (0610)',
    code: '0610',
    boardSummary:
      "Cambridge IGCSE Biology helps learners understand the technological world in which they live, and take an informed interest in science and scientific developments, building an understanding of the scientific skills essential for progression to further study.",
    officialUrl: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-biology-0610/',
    verifiedOn: '2026-08-19',
    notes: 'Syllabus for exams in 2026, 2027 and 2028. Tiered: Core (Papers 1 and 3, grades C-G) and Extended (Papers 2 and 4, grades A*-G), plus one practical paper (5 or 6).',
  },
  {
    boardSlug: 'edexcel', qualificationSlug: 'a-level', subjectSlug: 'biology',
    officialTitle: 'Pearson Edexcel International Advanced Subsidiary/Advanced Level Biology (XBI11/YBI11)',
    code: 'YBI11',
    boardSummary:
      "The Pearson Edexcel International Advanced Subsidiary and Advanced Level in Biology cover major topics including biological molecules, diet, transport, health, cells, development, biodiversity, conservation, energy, the environment, microbiology, immunity, respiration, the internal environment, coordination and gene technology.",
    officialUrl: 'https://qualifications.pearson.com/en/qualifications/edexcel-international-advanced-levels/biology-2018.html',
    verifiedOn: '2026-08-19',
    notes: 'Issue 2 (February 2021), first teaching September 2018. Modular: IAS = Units 1-3 (Unit 3 is Practical Skills in Biology I); full IAL = Units 1-6 (Unit 6 is Practical Skills in Biology II). Units 4-5 are IA2-only content.',
  },
  {
    boardSlug: 'edexcel', qualificationSlug: 'igcse', subjectSlug: 'biology',
    officialTitle: 'Pearson Edexcel International GCSE in Biology (4BI1)',
    code: '4BI1',
    boardSummary:
      "The Pearson Edexcel International GCSE in Biology gives students the opportunity to experience biology within the context of their general education, providing a solid basis for progression to Advanced GCE level or equivalent qualifications.",
    officialUrl: 'https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses-and-edexcel-certificates/biology-2017.html',
    verifiedOn: '2026-08-19',
    notes: 'Issue 3 (September 2024), first teaching September 2017. Untiered, linear qualification: two written papers (Biology Paper 1 and Paper 2) taken in the same series.',
  },
  {
    boardSlug: 'aqa', qualificationSlug: 'gcse', subjectSlug: 'biology',
    officialTitle: 'AQA GCSE Biology (8461)',
    code: '8461',
    boardSummary:
      "AQA GCSE Biology builds on the skills, knowledge and understanding established in key stage 3, developing scientific knowledge and conceptual understanding through biology's key ideas and the ability to evaluate claims based on science.",
    officialUrl: 'https://www.aqa.org.uk/subjects/biology/gcse/biology-8461',
    verifiedOn: '2026-08-19',
    notes: 'First teaching September 2016. Linear, tiered: Foundation and Higher tier. Two written papers (Paper 1: topics 1-4; Paper 2: topics 5-7), each also drawing on Key ideas and Working scientifically.',
  },
  {
    boardSlug: 'aqa', qualificationSlug: 'a-level', subjectSlug: 'biology',
    officialTitle: 'AQA AS and A-level Biology (7401/7402)',
    code: '7402',
    boardSummary:
      "AQA A-level Biology develops essential knowledge and understanding of different areas of the subject and how they relate to each other, alongside practical, mathematical and problem-solving skills, providing a foundation for further study or employment.",
    officialUrl: 'https://www.aqa.org.uk/subjects/biology/a-level/biology-7402',
    verifiedOn: '2026-08-19',
    notes: 'First teaching September 2015. Sections 3.1-3.4 form the AS content (also taught in year 1 of the A-level); sections 3.5-3.8 are A-level only.',
  },


  {
    boardSlug: 'cambridge', qualificationSlug: 'a-level', subjectSlug: 'business',
    officialTitle: 'Cambridge International AS & A Level Business (9609)',
    code: '9609',
    boardSummary:
      'Cambridge International AS & A Level Business allows students to experience the diverse and dynamic world within which businesses exist, with a focus on how decisions are made.',
    officialUrl: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-level-business-9609/',
    verifiedOn: '2026-08-19',
    notes: 'Syllabus for exams in 2026, 2027 and 2028 (Version 2). AS Level covers topics 1.1-5.5 (business and its environment, human resource management, marketing, operations management, finance and accounting); A Level adds topics 6.1-10.4 building strategic depth in the same five areas.',
  },
  {
    boardSlug: 'cambridge', qualificationSlug: 'igcse', subjectSlug: 'business',
    officialTitle: 'Cambridge IGCSE Business Studies (0450)',
    code: '0450',
    boardSummary:
      'Learners consider a range of stakeholder perspectives, from the individual to national government, when studying the Cambridge IGCSE Business Studies syllabus.',
    officialUrl: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-business-studies-0450/',
    verifiedOn: '2026-08-19',
    notes: 'Syllabus for exams in 2026 (Version 2). Six topics: understanding business activity, people in business, marketing, operations management, financial information and decisions, and external influences on business activity.',
  },
  {
    boardSlug: 'edexcel', qualificationSlug: 'a-level', subjectSlug: 'business',
    officialTitle: 'Pearson Edexcel International Advanced Level Business (YBS11 / XBS11)',
    code: 'YBS11',
    boardSummary:
      'Pearson Edexcel International Advanced Level Business develops learners\' understanding of business concepts, decision-making and strategy through a modular four-unit structure.',
    officialUrl: 'https://qualifications.pearson.com/en/qualifications/edexcel-international-advanced-levels/business-2017.html',
    verifiedOn: '2026-08-19',
    notes: 'Issue 1, September 2017. Modular qualification: International AS (units 1-2, code XBS11) covering Marketing and people, and Managing business activities; full International A Level (units 1-4, code YBS11) adds Business decisions and strategy, and Global business.',
  },
  {
    boardSlug: 'aqa', qualificationSlug: 'gcse', subjectSlug: 'business',
    officialTitle: 'AQA GCSE Business (8132)',
    code: '8132',
    boardSummary:
      'AQA GCSE Business asks students to apply their knowledge and understanding to different business contexts ranging from small enterprises to large multinationals.',
    officialUrl: 'https://www.aqa.org.uk/subjects/business/gcse/business-8132',
    verifiedOn: '2026-08-19',
    notes: 'For first teaching from September 2017, linear qualification. Six subject-content sections: business in the real world, influences on business, business operations, human resources, marketing, and finance.',
  },
  {
    boardSlug: 'aqa', qualificationSlug: 'a-level', subjectSlug: 'business',
    officialTitle: 'AQA A-level Business (7132)',
    code: '7132',
    boardSummary:
      'AQA A-level Business asks students to study business in a variety of contexts and consider the interrelated nature of business activities and how they affect competitiveness.',
    officialUrl: 'https://www.aqa.org.uk/subjects/business/a-level/business-7132',
    verifiedOn: '2026-08-19',
    notes: 'For first teaching from September 2023; current for cohorts taking exams through summer 2027. AQA has accredited a replacement specification (7138) for first teaching from September 2026, running alongside 7132 during the transition. Ten subject-content sections spanning functional decision-making (marketing, operations, finance, HR) through to business strategy.',
  },
  {
    boardSlug: 'aqa', qualificationSlug: 'as-level', subjectSlug: 'business',
    officialTitle: 'AQA AS Business (7131)',
    code: '7131',
    boardSummary:
      'AQA AS Business is a stand-alone qualification sharing its subject content with the first half of AQA A-level Business, covering business decision-making in a functional context.',
    officialUrl: 'https://www.aqa.org.uk/subjects/business/as-level/business-7131',
    verifiedOn: '2026-08-19',
    notes: 'For first teaching from September 2023; current for cohorts taking exams through summer 2026. Covers the first six of the ten A-level Business (7132) sections: what is business, managers/leadership/decision making, and decision-making to improve marketing, operational, financial and human resource performance. AQA has accredited a replacement specification (7137) for first teaching from September 2026.',
  },


  {
    boardSlug: 'cambridge', qualificationSlug: 'a-level', subjectSlug: 'economics',
    officialTitle: 'Cambridge International AS & A Level Economics (9708)',
    code: '9708',
    boardSummary:
      'Cambridge International AS & A Level Economics allows students to experience the diverse and dynamic world within which economics exists, developing an understanding of both micro- and macroeconomic theory and how it can be applied.',
    officialUrl: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-level-economics-9708/',
    verifiedOn: '2026-08-19',
    notes: 'Syllabus for exams in 2026, 2027 and 2028 (Version 1, published September 2023). AS Level covers topics 1-6 (basic economic ideas and resource allocation, the price system and the microeconomy, government microeconomic intervention, the macroeconomy, government macroeconomic intervention, international economic issues); A Level adds topics 7-9 building further micro- and macroeconomic depth.',
  },
  {
    boardSlug: 'cambridge', qualificationSlug: 'igcse', subjectSlug: 'economics',
    officialTitle: 'Cambridge IGCSE Economics (0455)',
    code: '0455',
    boardSummary:
      'Cambridge IGCSE Economics gives learners a good foundation for further study, developing an understanding of economic terminology, theory and the tools of economic analysis.',
    officialUrl: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-economics-0455/',
    verifiedOn: '2026-08-19',
    notes: 'Syllabus for exams in 2026 (Version 2). Six topics: the basic economic problem, the allocation of resources, microeconomic decision makers, government and the macroeconomy, economic development, and international trade and globalisation.',
  },
  {
    boardSlug: 'edexcel', qualificationSlug: 'a-level', subjectSlug: 'economics',
    officialTitle: 'Pearson Edexcel International Advanced Level Economics (YEC11 / XEC11)',
    code: 'YEC11',
    boardSummary:
      'Pearson Edexcel International Advanced Level Economics develops learners\' understanding of markets, macroeconomic performance, business behaviour and the global economy through a modular four-unit structure.',
    officialUrl: 'https://qualifications.pearson.com/en/qualifications/edexcel-international-advanced-levels/economics-2018.html',
    verifiedOn: '2026-08-19',
    notes: 'Issue 2, June 2018, first teaching September 2018. Modular qualification: International AS (units WEC11, WEC12, code XEC11) covering Markets in action and Macroeconomic performance and policy; full International A Level (units WEC11-WEC14, code YEC11) adds Business behaviour and Developments in the global economy.',
  },
  {
    boardSlug: 'edexcel', qualificationSlug: 'igcse', subjectSlug: 'economics',
    officialTitle: 'Pearson Edexcel International GCSE Economics (4EC1)',
    code: '4EC1',
    boardSummary:
      'Pearson Edexcel International GCSE Economics introduces learners to economic concepts and their application to real-life situations, across microeconomics, business economics, macroeconomics and the global economy.',
    officialUrl: 'https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses-and-edexcel-certificates/economics-2017.html',
    verifiedOn: '2026-08-19',
    notes: 'Issue 3, February 2026, for first teaching September 2017, first examination June 2019. Linear qualification assessed across two equally weighted papers: Paper 1 (Microeconomics and Business Economics) and Paper 2 (Macroeconomics and the Global Economy).',
  },
  {
    boardSlug: 'aqa', qualificationSlug: 'gcse', subjectSlug: 'economics',
    officialTitle: 'AQA GCSE Economics (8136)',
    code: '8136',
    boardSummary:
      'AQA GCSE Economics looks at economic activity through the lens of consumers, producers, government and the workings of the global economy.',
    officialUrl: 'https://www.aqa.org.uk/subjects/economics/gcse/economics-8136',
    verifiedOn: '2026-08-19',
    notes: 'For first teaching from September 2017. Two subject-content sections: how markets work, and how the economy works.',
  },
  {
    boardSlug: 'aqa', qualificationSlug: 'a-level', subjectSlug: 'economics',
    officialTitle: 'AQA A-level Economics (7136)',
    code: '7136',
    boardSummary:
      'AQA A-level Economics is split into a microeconomics-focused section and a macroeconomics-focused section, while recognising the two are not entirely distinct areas of study.',
    officialUrl: 'https://www.aqa.org.uk/subjects/economics/a-level/economics-7136',
    verifiedOn: '2026-08-19',
    notes: 'For first teaching from September 2015. Two subject-content sections: individuals, firms, markets and market failure (microeconomics); and the national and international economy (macroeconomics).',
  },


  {
    boardSlug: 'cambridge', qualificationSlug: 'igcse', subjectSlug: 'accounting',
    officialTitle: 'Cambridge IGCSE Accounting (0452)',
    code: '0452',
    boardSummary:
      'Cambridge IGCSE Accounting is accepted by universities and employers as proof of an understanding of the theory and concepts of accounting, and the ways in which accounting is used in a variety of modern economic and business contexts. Learners focus on the skills of recording, reporting, presenting and interpreting financial information.',
    officialUrl: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-accounting-0452/',
    verifiedOn: '2026-08-19',
    notes: 'Version 2 syllabus, valid for exams in 2026 only (June, November, and March in India) — a single-year series that should be re-checked for a successor when next touched.',
  },
  {
    boardSlug: 'edexcel', qualificationSlug: 'a-level', subjectSlug: 'accounting',
    officialTitle: 'Pearson Edexcel International Advanced Subsidiary/Advanced Level in Accounting (YAC11 / XAC11)',
    code: 'YAC11',
    boardSummary:
      'Students develop an understanding of the importance of effective accounting information systems, the purposes, principles, concepts and techniques of accounting, and transferable skills of numeracy, communication, ICT, application, presentation, interpretation, analysis and evaluation in an accounting context.',
    officialUrl: 'https://qualifications.pearson.com/en/qualifications/edexcel-international-advanced-levels/accounting-2015.html',
    verifiedOn: '2026-08-19',
    notes: 'International Advanced Subsidiary code XAC11 (Unit 1 only); International Advanced Level code YAC11 (Unit 1 + Unit 2). Specification is Issue 2, reissued September 2018, first teaching September 2015, 100% externally assessed with January/June/October series.',
  },

  {
    boardSlug: 'cambridge', qualificationSlug: 'a-level', subjectSlug: 'computer-science',
    officialTitle: 'Cambridge International AS & A Level Computer Science (9618)',
    code: '9618',
    boardSummary:
      'This syllabus enables learners to understand the main principles of problem-solving using computers and gives them opportunities to develop their skills in a number of programming languages, together with the skills necessary to apply this understanding to develop computer based solutions to problems.',
    officialUrl: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-level-computer-science-9618/',
    verifiedOn: '2026-08-19',
    notes: 'Valid for exams in 2026 only, a single-year series that should be re-checked for a successor when next touched. Staged: AS (sections 1-12) and A Level (adds 13-20), assessed across four papers (Theory Fundamentals, Fundamental Problem-solving and Programming, Advanced Theory, Practical).',
  },
  {
    boardSlug: 'cambridge', qualificationSlug: 'igcse', subjectSlug: 'computer-science',
    officialTitle: 'Cambridge IGCSE Computer Science (0478)',
    code: '0478',
    boardSummary:
      'Cambridge IGCSE Computer Science is designed for learners who are already competent users of computer technology and who wish to further develop their computing skills and knowledge.',
    officialUrl: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-computer-science-0478/',
    verifiedOn: '2026-08-19',
    notes: 'Version 5, published December 2025, valid for the 2026, 2027 and 2028 series. Not tiered. Two components: Computer Systems (Topics 1-6) and Algorithms, Programming and Logic (Topics 7-10), each 50%.',
  },
  {
    boardSlug: 'cambridge', qualificationSlug: 'o-level', subjectSlug: 'computer-science',
    officialTitle: 'Cambridge O Level Computer Science (2210)',
    code: '2210',
    boardSummary:
      'Cambridge O Level Computer Science shares its content with Cambridge IGCSE Computer Science (0478), giving learners the same grounding in computer systems, algorithms, programming and logic under the O Level grading scale.',
    officialUrl: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-o-level-computer-science-2210/',
    verifiedOn: '2026-08-19',
    notes: 'Valid for the 2026, 2027 and 2028 series. Not tiered. Shares its 10-topic content and two-component structure directly with IGCSE 0478 — the syllabus PDF states textbooks endorsed for 0478 are suitable for 2210.',
  },
  {
    boardSlug: 'cambridge', qualificationSlug: 'a-level', subjectSlug: 'ict',
    officialTitle: 'Cambridge International AS & A Level Information Technology (9626)',
    code: '9626',
    boardSummary:
      'Cambridge International AS & A Level Information Technology gives learners the knowledge and skills to select and use a range of applications software to solve problems, and an understanding of how key applications are used in the outside world.',
    officialUrl: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-level-information-technology-9626/',
    verifiedOn: '2026-08-19',
    notes: 'Valid for the 2025, 2026 and 2027 series. Staged: AS (sections 1-11) and A Level (adds 12-21), assessed across four papers (Theory, Practical, Advanced Theory, Advanced Practical).',
  },
  {
    boardSlug: 'cambridge', qualificationSlug: 'igcse', subjectSlug: 'ict',
    officialTitle: 'Cambridge IGCSE Information and Communication Technology (0417)',
    code: '0417',
    boardSummary:
      'Cambridge IGCSE Information and Communication Technology develops learners\' skills so that they can use a range of software applications confidently and effectively, and requires them to demonstrate their ability to use ICT to solve problems.',
    officialUrl: 'https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-information-and-communication-technology-0417/',
    verifiedOn: '2026-08-19',
    notes: 'Valid for the 2026, 2027 and 2028 series. Not tiered. Three components: a theory paper plus two practical papers covering document/data/web-authoring skills. This is the plain A*-G qualification, distinct from the numeric-grade Cambridge IGCSE (9-1) ICT 0983 sibling syllabus, whose PDF was briefly and mistakenly fetched before this entry was corrected against the genuine 0417 source.',
  },
  {
    boardSlug: 'aqa', qualificationSlug: 'a-level', subjectSlug: 'computer-science',
    officialTitle: 'AQA A-level Computer Science (7517)',
    code: '7517',
    boardSummary:
      'AQA A-level Computer Science develops learners\' capacity for computational thinking, and their ability to design, program and evaluate computer systems to solve problems, supporting further study or employment in computing.',
    officialUrl: 'https://www.aqa.org.uk/subjects/computer-science/a-level/computer-science-7517',
    verifiedOn: '2026-08-19',
    notes: 'Confirmed live and current: first teaching 2015, 13 named subject-content sections (4.1-4.13) plus a non-exam-assessment computing practical project. Supports C#, Java, Python and VB.Net as programming languages.',
  },
] as const;

export const syllabusFor = (b: string, q: string, s: string): Syllabus | undefined =>
  SYLLABUSES.find((x) => x.boardSlug === b && x.qualificationSlug === q && x.subjectSlug === s);
