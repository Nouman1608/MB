/**
 * Revision-tools round (2026-09-23, D-286) -- the 10-minute study
 * diagnostics.
 *
 * WHAT A DIAGNOSTIC IS HERE. A short, fixed set of questions spread across
 * a syllabus, taken from Marlbridge's own published practice-questions
 * resources (the same bank /practice/{code}/ serves -- see
 * src/utils/practice/bank.ts). Nothing here is new educational content:
 * every question and worked answer is already public on the site. What
 * this file adds is a *selection*.
 *
 * WHY A FIXED LIST, NOT A RANDOM DRAW. A fixed set can be reviewed as a
 * set by a subject teacher (does it cover the right spread, are the answers
 * sound, is ~10 minutes realistic?) and gives every student the same check.
 * `setReview` records that review once it has actually happened; until
 * then the page says plainly that the set has not been checked as a set.
 *
 * D-315 (2026-09-24): 0580, 0625, 4CH1 and 4PH1 now have sets too (see
 * docs/decision-log.md D-315); the paragraph below is the original D-286 note.
 *
 * WHY THESE THREE CODES (D-286). Only 0620, 9701 and 9702 have enough questions
 * tagged to syllabus topics to cover a spread of topics (0580 has 26 of 82
 * questions with no topic tag and no Number/Algebra questions; 0625's 32
 * questions carry no topic tags at all). See D-286.
 *
 * MARKING. The bank's answers are prose mark schemes, not machine-checkable
 * answers, so every question is SELF-ASSESSED: the student compares their
 * own written answer with the worked answer and awards the marks. The page
 * labels this on every question. No automatic marking is claimed.
 *
 * SELECTION RULES used to choose each set (repeatable, stated so a
 * reviewer can check them): one question per chosen topic, topics spread
 * across the syllabus order; 2-3 marks each; no question that depends on a
 * diagram, graph or table the bank cannot show; no question marked
 * "Extended", "Background" or "beyond the syllabus"; for 0620, no
 * Supplement-only (Extended) question, so Core and Extended candidates can
 * both use it; answers must render cleanly. `scripts/validate-diagnostics.mjs`
 * (part of validate:academic) fails the build if an id stops existing in
 * the bank or moves to another syllabus code.
 */

export interface DiagnosticSet {
  /** URL segment under /practice/{code}/diagnostic/ -- '' for the only set of a code. */
  slug: string;
  code: string;
  boardSlug: string;
  qualificationSlug: string;
  subjectSlug: string;
  /**
   * D-312 -- 'extended' marks a 0620 set built from Supplement content for
   * Extended candidates. Without it a 0620 set must stay answerable by
   * both tiers (no Supplement-only question).
   */
  tier?: 'extended';
  /**
   * D-312 -- when the set's questions were written to match a real exam
   * series, the series they are modelled on (shown on the page). The
   * questions are original; no exam-board text is reproduced.
   */
  modelledOn?: string;
  /** Plain label for the part of the syllabus covered. */
  scopeLabel: string;
  /** One sentence on who the set is for. */
  audience: string;
  /** Question ids from the practice bank, in the order asked. */
  questionIds: readonly string[];
  /** Approximate minutes, stated to the student. */
  minutes: number;
  /**
   * Set only once a named subject teacher has reviewed THIS SET as a set
   * (spread, answers, timing). Never filled in advance.
   */
  setReview?: { reviewerSlug: string; reviewedOn: string };
}

export const DIAGNOSTIC_SETS: readonly DiagnosticSet[] = [
  {
    slug: 'core',
    code: '0620',
    boardSlug: 'cambridge',
    qualificationSlug: 'igcse',
    subjectSlug: 'chemistry',
    scopeLabel: 'Six topics across the syllabus, Core content',
    modelledOn: 'the Cambridge IGCSE Chemistry June 2025 Paper 3 series',
    audience: 'For Core and Extended candidates. Every question is on content both tiers study.',
    // D-312 (2026-09-24): six original questions modelled on the June 2025
    // Paper 3 series. Each answer names the real paper question to try next.
    questionIds: [
      'states-of-matter-practice-q11',
      'formulae-equations-and-the-mole-practice-q9',
      'metals-reactivity-practice-q10',
      'alcohols-and-carboxylic-acids-practice-q10',
      'identification-tests-practice-q10',
      'electrolysis-practice-q10',
    ],
    minutes: 10,
  },
  {
    slug: 'extended',
    code: '0620',
    boardSlug: 'cambridge',
    qualificationSlug: 'igcse',
    subjectSlug: 'chemistry',
    tier: 'extended',
    scopeLabel: 'Six topics across the syllabus, Extended (Supplement) content',
    modelledOn: 'the Cambridge IGCSE Chemistry June 2025 Paper 4 series',
    audience: 'For Extended candidates (Papers 2 and 4). Core candidates should use the Core diagnostic.',
    // D-312 (2026-09-24): six original questions modelled on the June 2025
    // Paper 4 series. Each answer names the real paper question to try next.
    questionIds: [
      'atomic-structure-practice-q13',
      'formulae-equations-and-the-mole-practice-q10',
      'redox-reactions-practice-q8',
      'rates-of-reaction-practice-q8',
      'alcohols-and-carboxylic-acids-practice-q11',
      'acids-bases-and-salts-practice-q11',
    ],
    minutes: 10,
  },
  {
    slug: 'as',
    code: '9701',
    boardSlug: 'cambridge',
    qualificationSlug: 'a-level',
    subjectSlug: 'chemistry',
    scopeLabel: 'AS Level content (Topics 1–22)',
    modelledOn: 'the Cambridge AS & A Level Chemistry June 2025 Paper 2 series',
    audience: 'For first-year students, and for A Level students checking their AS foundations.',
    // D-314 (2026-09-24): original questions modelled on the June 2025 series;
    // each answer names the real paper question to try next.
    questionIds: [
      'as-atomic-structure-particles-radius-and-isotopes-practice-q12',
      'as-chem-states-structure-practice-q8',
      'as-chemistry-hess-law-practice-q8',
      'as-chem-kinetics-practice-q8',
      'as-chem-alcohols-practice-q9',
      'as-chem-hydrocarbons-practice-q9',
    ],
    minutes: 10,
  },
  {
    slug: 'a-level',
    code: '9701',
    boardSlug: 'cambridge',
    qualificationSlug: 'a-level',
    subjectSlug: 'chemistry',
    scopeLabel: 'A Level content (Topics 23–37)',
    modelledOn: 'the Cambridge AS & A Level Chemistry June 2025 Paper 4 series',
    audience: 'For second-year students who have studied the A Level topics.',
    // D-314 (2026-09-24): original questions modelled on the June 2025 series;
    // each answer names the real paper question to try next.
    questionIds: [
      'a-chemistry-energetics-entropy-practice-q11',
      'a-equilibria-acids-buffers-practice-q12',
      'a-transition-elements-colour-stereoisomerism-and-stability-constants-practice-q11',
      'a-reaction-kinetics-rate-equations-practice-q11',
      'a-chemistry-nmr-practice-q11',
      'a-chemistry-electrochemistry-practice-q10',
    ],
    minutes: 10,
  },
  {
    slug: 'as',
    code: '9702',
    boardSlug: 'cambridge',
    qualificationSlug: 'a-level',
    subjectSlug: 'physics',
    scopeLabel: 'AS Level content (Topics 1–11)',
    modelledOn: 'the Cambridge AS & A Level Physics June 2025 Paper 2 series',
    audience: 'For first-year students, and for A Level students checking their AS foundations.',
    // D-314 (2026-09-24): original questions modelled on the June 2025 series;
    // each answer names the real paper question to try next.
    questionIds: [
      'as-physics-kinematics-practice-q10',
      'as-physics-work-energy-practice-q10',
      'as-physics-forces-density-pressure-practice-q11',
      'as-physics-superposition-practice-q12',
      'as-physics-dynamics-practice-q9',
      'as-physics-electricity-practice-q10',
    ],
    minutes: 10,
  },
  {
    slug: 'a-level',
    code: '9702',
    boardSlug: 'cambridge',
    qualificationSlug: 'a-level',
    subjectSlug: 'physics',
    scopeLabel: 'A Level content (Topics 12–25)',
    modelledOn: 'the Cambridge AS & A Level Physics June 2025 Paper 4 series',
    audience: 'For second-year students who have studied the A Level topics.',
    // D-314 (2026-09-24): original questions modelled on the June 2025 series;
    // each answer names the real paper question to try next.
    questionIds: [
      'a-physics-circular-motion-practice-q9',
      'a-physics-gravitational-fields-practice-q12',
      'a-physics-ideal-gases-practice-q10',
      'a-physics-oscillations-practice-q10',
      'a-physics-capacitance-practice-q9',
      'a-physics-quantum-physics-practice-q9',
    ],
    minutes: 10,
  },
  {
    slug: 'core',
    code: '0580',
    boardSlug: 'cambridge',
    qualificationSlug: 'igcse',
    subjectSlug: 'mathematics',
    scopeLabel: 'Six topics across the syllabus, Core content',
    audience: 'For Core and Extended candidates. Every question is on content both tiers study.',
    // D-315 (2026-09-24): six original questions, one per topic. No 0580
    // papers were available, so the set is written from the syllabus.
    questionIds: [
      'igcse-mathematics-number-practice-q12',
      'igcse-mathematics-algebra-and-graphs-practice-q16',
      'igcse-mathematics-geometry-practice-q10',
      'igcse-mathematics-mensuration-practice-q10',
      'igcse-mathematics-trigonometry-practice-q9',
      'igcse-mathematics-probability-practice-q8',
    ],
    minutes: 10,
  },
  {
    slug: 'core',
    code: '0625',
    boardSlug: 'cambridge',
    qualificationSlug: 'igcse',
    subjectSlug: 'physics',
    scopeLabel: 'Four topics across the syllabus, Core content',
    audience: 'For Core and Extended candidates. Every question is on content both tiers study.',
    // D-315 (2026-09-24): six original questions across four topics. No 0625
    // papers were available, so the set is written from the syllabus.
    questionIds: [
      'igcse-physics-motion-forces-and-energy-practice-q12',
      'igcse-physics-motion-forces-and-energy-practice-q13',
      'igcse-physics-thermal-physics-practice-q13',
      'igcse-physics-waves-practice-q10',
      'igcse-physics-electricity-and-magnetism-practice-q1',
      'igcse-physics-electricity-and-magnetism-practice-q2',
    ],
    minutes: 10,
  },
  {
    slug: 'all-topics',
    code: '4CH1',
    boardSlug: 'edexcel',
    qualificationSlug: 'igcse',
    subjectSlug: 'chemistry',
    scopeLabel: 'All four topic areas of the specification',
    modelledOn: 'the Pearson Edexcel International GCSE Chemistry June 2024 papers (1CR and 2CR)',
    audience: 'For all 4CH1 candidates (the qualification is not tiered).',
    // D-315 (2026-09-24): original questions modelled on the June 2024 papers and mark schemes.
    questionIds: [
      'igcse-edexcel-chemistry-principles-practice-q12',
      'igcse-edexcel-chemistry-principles-practice-q13',
      'edexcel-igcse-chemistry-reactivity-practice-q8',
      'edexcel-igcse-chemistry-physical-chemistry-practice-q1',
      'edexcel-igcse-chemistry-physical-chemistry-practice-q2',
      'edexcel-igcse-chemistry-organic-practice-q1',
    ],
    minutes: 10,
  },
  {
    slug: 'all-topics',
    code: '4PH1',
    boardSlug: 'edexcel',
    qualificationSlug: 'igcse',
    subjectSlug: 'physics',
    scopeLabel: 'Six topics across the specification',
    modelledOn: 'the Pearson Edexcel International GCSE Physics June 2024 papers (1PR and 2PR)',
    audience: 'For all 4PH1 candidates (the qualification is not tiered).',
    // D-315 (2026-09-24): original questions modelled on the June 2024 papers and mark schemes.
    questionIds: [
      'edexcel-igcse-physics-forces-motion-practice-q11',
      'edexcel-igcse-physics-electricity-practice-q9',
      'edexcel-igcse-physics-waves-practice-q10',
      'edexcel-igcse-physics-solids-liquids-gases-practice-q10',
      'edexcel-igcse-physics-magnetism-practice-q10',
      'edexcel-igcse-physics-radioactivity-practice-q12',
    ],
    minutes: 10,
  },
  {
    slug: 'as',
    code: '9708',
    boardSlug: 'cambridge',
    qualificationSlug: 'a-level',
    subjectSlug: 'economics',
    scopeLabel: 'Four AS topics',
    modelledOn: 'the Cambridge International AS & A Level Economics June 2025 Paper 2 series and its examiner report',
    audience: 'For AS and A Level Economics candidates taking the AS papers.',
    // D-319 (2026-09-24): original questions modelled on the June 2025 papers (analysis only; no board text reproduced).
    questionIds: [
      'a-level-economics-basic-ideas-practice-q9',
      'a-level-economics-price-system-practice-q10',
      'a-level-economics-government-microeconomic-intervention-practice-q8',
      'a-level-economics-macroeconomy-practice-q2',
      'a-level-economics-macroeconomy-practice-q3',
    ],
    minutes: 10,
  },
  {
    slug: 'as',
    code: '9609',
    boardSlug: 'cambridge',
    qualificationSlug: 'a-level',
    subjectSlug: 'business',
    scopeLabel: 'Four AS topics',
    modelledOn: 'the Cambridge International AS & A Level Business June 2025 Paper 1 series and its examiner report',
    audience: 'For AS and A Level Business candidates taking the AS papers.',
    // D-319 (2026-09-24): original questions modelled on the June 2025 papers (analysis only; no board text reproduced).
    questionIds: [
      'a-business-environment-practice-q8',
      'a-level-business-hrm-practice-q8',
      'a-level-business-hrm-practice-q9',
      'a-level-business-marketing-practice-q8',
      'a-level-business-operations-practice-q1',
    ],
    minutes: 10,
  },
  {
    slug: 'as',
    code: '9618',
    boardSlug: 'cambridge',
    qualificationSlug: 'a-level',
    subjectSlug: 'computer-science',
    scopeLabel: 'Four AS topics',
    modelledOn: 'the Cambridge International AS & A Level Computer Science June 2025 Paper 1 series and its examiner report',
    audience: 'For AS and A Level Computer Science candidates taking Paper 1.',
    // D-319 (2026-09-24): original questions modelled on the June 2025 papers (analysis only; no board text reproduced).
    questionIds: [
      'a-computer-science-data-representation-practice-q11',
      'a-computer-science-data-representation-practice-q12',
      'a-level-computer-science-communication-practice-q9',
      'a-level-computer-science-processor-fundamentals-practice-q10',
      'a-level-computer-science-databases-practice-q1',
    ],
    minutes: 10,
  },
  {
    slug: 'all-topics',
    code: '5070',
    boardSlug: 'cambridge',
    qualificationSlug: 'o-level',
    subjectSlug: 'chemistry',
    scopeLabel: 'Five topic areas of the syllabus',
    modelledOn: 'the Cambridge O Level Chemistry June 2025 Paper 2 and its mark scheme',
    audience: 'For all 5070 candidates (the qualification is not tiered).',
    // D-319 (2026-09-24): original questions modelled on the June 2025 papers (analysis only; no board text reproduced).
    questionIds: [
      'periodic-table-practice-q11',
      'petroleum-alkanes-and-alkenes-practice-q13',
      'chemistry-of-the-environment-practice-q11',
      'identification-tests-practice-q11',
      'formulae-equations-and-the-mole-practice-q11',
      'organic-chemistry-practice-q10',
    ],
    minutes: 10,
  },
  {
    slug: 'as',
    code: '9709',
    boardSlug: 'cambridge',
    qualificationSlug: 'a-level',
    subjectSlug: 'mathematics',
    scopeLabel: 'Four AS papers: Pure 1, Pure 2, Mechanics, Probability & Statistics 1',
    modelledOn: 'the Cambridge International AS & A Level Mathematics June 2025 Papers 12, 42 and 52',
    audience: 'For AS and A Level Mathematics candidates.',
    // D-321 (2026-09-24): original questions modelled on the June 2025 question papers (analysis only; no board text reproduced).
    questionIds: [
      'a-level-mathematics-pure-1-mixed-practice-q3',
      'a-level-mathematics-pure-1-mixed-practice-q4',
      'a-level-mathematics-pure-mathematics-2-practice-q3',
      'a-level-mathematics-mechanics-practice-q1',
      'a-level-mathematics-probability-statistics-1-practice-q1',
    ],
    minutes: 10,
  },
  {
    slug: 'all-topics',
    code: '4024',
    boardSlug: 'cambridge',
    qualificationSlug: 'o-level',
    subjectSlug: 'mathematics',
    scopeLabel: 'Six topic areas of the syllabus',
    modelledOn: 'the Cambridge O Level Mathematics June 2025 Papers 12 and 22',
    audience: 'For all 4024 candidates (the qualification is not tiered).',
    // D-321 (2026-09-24): original questions modelled on the June 2025 question papers (analysis only; no board text reproduced).
    questionIds: [
      'o-level-mathematics-number-practice-q4',
      'o-level-mathematics-coordinate-geometry-practice-q2',
      'o-level-mathematics-mensuration-practice-q2',
      'o-level-mathematics-trigonometry-practice-q4',
      'o-level-mathematics-geometry-practice-q1',
      'o-level-mathematics-probability-practice-q1',
    ],
    minutes: 10,
  },
  {
    slug: 'core',
    code: '0610',
    boardSlug: 'cambridge',
    qualificationSlug: 'igcse',
    subjectSlug: 'biology',
    scopeLabel: 'Four topics, Core content',
    modelledOn: 'the Cambridge IGCSE Biology June 2024 Paper 42, its mark scheme and examiner report',
    audience: 'For Core and Extended candidates (Core content only).',
    // D-323 (2026-09-24): original questions modelled on past papers (analysis only; no board text reproduced).
    questionIds: [
      'igcse-biology-respiration-practice-q4',
      'igcse-biology-coordination-response-practice-q2',
      'igcse-biology-reproduction-practice-q2',
      'igcse-biology-inheritance-practice-q4',
    ],
    minutes: 10,
  },
  {
    slug: 'as',
    code: '9700',
    boardSlug: 'cambridge',
    qualificationSlug: 'a-level',
    subjectSlug: 'biology',
    scopeLabel: 'Five AS topics',
    modelledOn: 'the Cambridge International AS & A Level Biology June 2024 Paper 22, its mark scheme and examiner report',
    audience: 'For AS and A Level Biology candidates taking the AS papers.',
    // D-323 (2026-09-24): original questions modelled on past papers (analysis only; no board text reproduced).
    questionIds: [
      'a-level-biology-cell-structure-practice-q2',
      'a-level-biology-cell-membranes-practice-q1',
      'a-level-biology-transport-in-mammals-practice-q2',
      'a-level-biology-infectious-diseases-practice-q2',
      'a-level-biology-immunity-practice-q3',
    ],
    minutes: 10,
  },
  {
    slug: 'all-topics',
    code: '5054',
    boardSlug: 'cambridge',
    qualificationSlug: 'o-level',
    subjectSlug: 'physics',
    scopeLabel: 'Five topic areas of the syllabus',
    modelledOn: 'the Cambridge O Level Physics June 2025 Paper 22',
    audience: 'For all 5054 candidates (the qualification is not tiered).',
    // D-323 (2026-09-24): original questions modelled on past papers (analysis only; no board text reproduced).
    questionIds: [
      'kinematics-practice-q6',
      'o-level-physics-thermal-physics-practice-q4',
      'o-level-physics-waves-practice-q2',
      'o-level-physics-electricity-and-magnetism-practice-q3',
      'o-level-physics-nuclear-physics-practice-q2',
    ],
    minutes: 10,
  },
  {
    slug: 'all-topics',
    code: '2281',
    boardSlug: 'cambridge',
    qualificationSlug: 'o-level',
    subjectSlug: 'economics',
    scopeLabel: 'Four topic areas of the syllabus',
    modelledOn: 'the Cambridge O Level Economics June 2024 Paper 22, its mark scheme and examiner report',
    audience: 'For all 2281 candidates.',
    // D-323 (2026-09-24): original questions modelled on past papers (analysis only; no board text reproduced).
    questionIds: [
      'o-level-economics-basic-economic-problem-practice-q3',
      'o-level-economics-government-and-the-macroeconomy-practice-q2',
      'o-level-economics-government-and-the-macroeconomy-practice-q4',
      'o-level-economics-economic-development-practice-q1',
      'o-level-economics-international-trade-practice-q1',
    ],
    minutes: 10,
  },
  {
    slug: 'all-topics',
    code: '7115',
    boardSlug: 'cambridge',
    qualificationSlug: 'o-level',
    subjectSlug: 'business',
    scopeLabel: 'Four topic areas of the syllabus',
    modelledOn: 'the Cambridge O Level Business Studies June 2024 Paper 12, its mark scheme and examiner report',
    audience: 'For all 7115 candidates.',
    // D-323 (2026-09-24): original questions modelled on past papers (analysis only; no board text reproduced).
    questionIds: [
      'o-level-business-marketing-practice-q2',
      'o-level-business-operations-management-practice-q6',
      'o-level-business-financial-information-and-decisions-practice-q1',
      'o-level-business-external-influences-practice-q3',
    ],
    minutes: 10,
  },
  {
    slug: 'all-topics',
    code: '2210',
    boardSlug: 'cambridge',
    qualificationSlug: 'o-level',
    subjectSlug: 'computer-science',
    scopeLabel: 'Five topics from Paper 1',
    modelledOn: 'the Cambridge O Level Computer Science June 2025 Paper 12 and its mark scheme',
    audience: 'For all 2210 candidates.',
    // D-323 (2026-09-24): original questions modelled on past papers (analysis only; no board text reproduced).
    questionIds: [
      'o-level-computer-science-data-representation-practice-q7',
      'o-level-computer-science-hardware-practice-q2',
      'o-level-computer-science-software-practice-q2',
      'o-level-computer-science-internet-and-its-uses-practice-q2',
      'o-level-computer-science-automated-and-emerging-technologies-practice-q5',
    ],
    minutes: 10,
  },
  {
    slug: 'extended',
    code: '0610',
    boardSlug: 'cambridge',
    qualificationSlug: 'igcse',
    subjectSlug: 'biology',
    tier: 'extended',
    scopeLabel: 'Five topics, Extended content',
    modelledOn: 'the Cambridge IGCSE Biology June 2024 Paper 42, its mark scheme and examiner report',
    audience: 'For Extended candidates.',
    // D-324 (2026-09-24): original questions; see decision log for sources (analysis only; no board text reproduced).
    questionIds: [
      'igcse-biology-enzymes-practice-q3',
      'igcse-biology-plant-nutrition-practice-q4',
      'igcse-biology-transport-in-plants-practice-q6',
      'igcse-biology-coordination-response-practice-q3',
      'igcse-biology-inheritance-practice-q1',
    ],
    minutes: 10,
  },
  {
    slug: 'extended',
    code: '0580',
    boardSlug: 'cambridge',
    qualificationSlug: 'igcse',
    subjectSlug: 'mathematics',
    tier: 'extended',
    scopeLabel: 'Five topic areas, Extended content',
    audience: 'For Extended candidates.',
    // D-324 (2026-09-24): original questions; see decision log for sources (analysis only; no board text reproduced).
    questionIds: [
      'igcse-mathematics-number-extended-practice-q1',
      'igcse-mathematics-algebra-extended-practice-q2',
      'igcse-mathematics-trigonometry-extended-practice-q1',
      'igcse-mathematics-statistics-and-probability-extended-practice-q3',
      'igcse-mathematics-statistics-and-probability-extended-practice-q4',
    ],
    minutes: 10,
  },
  {
    slug: 'extended',
    code: '0625',
    boardSlug: 'cambridge',
    qualificationSlug: 'igcse',
    subjectSlug: 'physics',
    tier: 'extended',
    scopeLabel: 'Four topic areas, Extended content',
    audience: 'For Extended candidates.',
    // D-324 (2026-09-24): original questions; see decision log for sources (analysis only; no board text reproduced).
    questionIds: [
      'igcse-physics-motion-forces-and-energy-extended-practice-q2',
      'igcse-physics-thermal-physics-extended-practice-q1',
      'igcse-physics-electricity-and-magnetism-extended-practice-q2',
      'igcse-physics-electricity-and-magnetism-extended-practice-q5',
      'igcse-physics-nuclear-physics-extended-practice-q3',
    ],
    minutes: 10,
  },
  {
    slug: 'a-level',
    code: '9700',
    boardSlug: 'cambridge',
    qualificationSlug: 'a-level',
    subjectSlug: 'biology',
    scopeLabel: 'Four A Level topics',
    modelledOn: 'the Cambridge International AS & A Level Biology June 2024 Paper 42, its mark scheme and examiner report',
    audience: 'For A Level Biology candidates in their second year.',
    // D-324 (2026-09-24): original questions; see decision log for sources (analysis only; no board text reproduced).
    questionIds: [
      'a-level-biology-respiration-practice-q1',
      'a-level-biology-homeostasis-practice-q3',
      'a-level-biology-control-and-coordination-practice-q4',
      'a-level-biology-control-and-coordination-practice-q6',
      'a-level-biology-inheritance-practice-q3',
    ],
    minutes: 10,
  },
  {
    slug: 'a-level',
    code: '9708',
    boardSlug: 'cambridge',
    qualificationSlug: 'a-level',
    subjectSlug: 'economics',
    scopeLabel: 'Four A Level topics',
    modelledOn: 'the Cambridge International AS & A Level Economics June 2024 Paper 42, its mark scheme and examiner report',
    audience: 'For A Level Economics candidates in their second year.',
    // D-324 (2026-09-24): original questions; see decision log for sources (analysis only; no board text reproduced).
    questionIds: [
      'a-level-economics-price-system-a-level-practice-q2',
      'a-level-economics-government-microeconomic-intervention-a-level-practice-q2',
      'a-level-economics-government-macroeconomic-intervention-a-level-practice-q4',
      'a-level-economics-government-macroeconomic-intervention-a-level-practice-q7',
      'a-level-economics-international-economic-issues-a-level-practice-q2',
    ],
    minutes: 10,
  },
  {
    slug: 'a-level',
    code: '9609',
    boardSlug: 'cambridge',
    qualificationSlug: 'a-level',
    subjectSlug: 'business',
    scopeLabel: 'Four A Level topics',
    modelledOn: 'the Cambridge International AS & A Level Business June 2024 Paper 32, its mark scheme and examiner report',
    audience: 'For A Level Business candidates in their second year.',
    // D-324 (2026-09-24): original questions; see decision log for sources (analysis only; no board text reproduced).
    questionIds: [
      'a-level-business-hrm-a-level-practice-q1',
      'a-level-business-marketing-a-level-practice-q1',
      'a-level-business-marketing-a-level-practice-q2',
      'a-level-business-operations-a-level-practice-q1',
      'a-level-business-finance-a-level-practice-q1',
    ],
    minutes: 10,
  },
  {
    slug: 'a-level',
    code: '9618',
    boardSlug: 'cambridge',
    qualificationSlug: 'a-level',
    subjectSlug: 'computer-science',
    scopeLabel: 'Four A Level topics',
    modelledOn: 'the Cambridge International AS & A Level Computer Science June 2025 Paper 31, its mark scheme and examiner report',
    audience: 'For A Level Computer Science candidates in their second year.',
    // D-324 (2026-09-24): original questions; see decision log for sources (analysis only; no board text reproduced).
    questionIds: [
      'a-level-computer-science-data-representation-a-level-practice-q5',
      'a-level-computer-science-data-representation-a-level-practice-q1',
      'a-level-computer-science-communication-internet-a-level-practice-q4',
      'a-level-computer-science-system-software-a-level-practice-q4',
      'a-level-computer-science-further-programming-a-level-practice-q2',
    ],
    minutes: 10,
  },
  {
    slug: 'a-level',
    code: '9709',
    boardSlug: 'cambridge',
    qualificationSlug: 'a-level',
    subjectSlug: 'mathematics',
    scopeLabel: 'Pure Mathematics 3 with AS applied topics',
    modelledOn: 'the Cambridge International AS & A Level Mathematics June 2025 Paper 32',
    audience: 'For A Level Mathematics candidates taking Paper 3. Its Probability & Statistics 1 question is also in the AS diagnostic.',
    // D-324 (2026-09-24): original questions; see decision log for sources (analysis only; no board text reproduced).
    // D-329 (2026-09-25): the S1 question (practice-q1) is shared with 9709/as on purpose.
    // Paper 5 is on every A Level route (9709 syllabus v4, "Three routes"), so S1 belongs
    // here. No other existing S1 question is worth 3 marks: swapping in a 4-mark one breaks
    // the 16-mark limit unless a Pure 3 question (the set's main paper) or the Pure 1 question
    // (leaving 3 topics, below the minimum of 4) is dropped. So the repeat is disclosed in
    // `audience` rather than replaced.
    questionIds: [
      'a-level-mathematics-pure-3-algebra-calculus-practice-q5',
      'a-level-mathematics-pure-3-trig-vectors-complex-practice-q3',
      'a-level-mathematics-pure-3-trig-vectors-complex-practice-q8',
      'a-level-mathematics-pure-1-mixed-practice-q8',
      'a-level-mathematics-mechanics-practice-q3',
      'a-level-mathematics-probability-statistics-1-practice-q1',
    ],
    minutes: 10,
  },
  {
    slug: 'paper-2',
    code: '2210',
    boardSlug: 'cambridge',
    qualificationSlug: 'o-level',
    subjectSlug: 'computer-science',
    scopeLabel: 'Paper 2: algorithms, programming, databases and logic',
    modelledOn: 'the Cambridge O Level Computer Science June 2025 Paper 22 and its mark scheme',
    audience: 'For all 2210 candidates.',
    // D-324 (2026-09-24): original questions; see decision log for sources (analysis only; no board text reproduced).
    questionIds: [
      'o-level-computer-science-algorithm-design-practice-q2',
      'o-level-computer-science-programming-practice-q2',
      'o-level-computer-science-databases-practice-q3',
      'o-level-computer-science-boolean-logic-practice-q4',
      'o-level-computer-science-boolean-logic-practice-q5',
    ],
    minutes: 10,
  },
] as const;

export const diagnosticPath = (s: Pick<DiagnosticSet, 'code' | 'slug'>): string =>
  `/practice/${s.code}/diagnostic/${s.slug}/`;

export const diagnosticsForCode = (code: string): DiagnosticSet[] =>
  DIAGNOSTIC_SETS.filter((s) => s.code === code);
