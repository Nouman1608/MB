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
 * WHY THESE THREE CODES. Only 0620, 9701 and 9702 have enough questions
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
    audience: 'For first-year students, and for A Level students checking their AS foundations.',
    questionIds: [
      'as-atomic-structure-particles-radius-and-isotopes-practice-q2',
      'as-chem-stoichiometry-practice-q3',
      'as-chemistry-bonding-practice-q3',
      'as-chem-acids-bases-practice-q2',
      'as-chem-kinetics-practice-q1',
      'as-chem-hydrocarbons-practice-q1',
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
    audience: 'For second-year students who have studied the A Level topics.',
    questionIds: [
      'a-chemistry-energetics-entropy-practice-q1',
      'a-equilibria-acids-buffers-practice-q5',
      'a-chemistry-transition-elements-practice-q2',
      'a-arenes-and-halogenoarenes-practice-q1',
      'a-chemistry-carboxylic-acids-acyl-practice-q3',
      'a-chemistry-nmr-practice-q2',
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
    audience: 'For first-year students, and for A Level students checking their AS foundations.',
    questionIds: [
      'as-physics-quantities-units-practice-q2',
      'as-physics-kinematics-practice-q8',
      'as-physics-dynamics-practice-q2',
      'as-physics-work-energy-practice-q2',
      'as-physics-electricity-practice-q2',
      'as-physics-dc-circuits-practice-q7',
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
    audience: 'For second-year students who have studied the A Level topics.',
    questionIds: [
      'a-physics-circular-motion-practice-q2',
      'a-physics-gravitational-fields-practice-q3',
      'a-physics-ideal-gases-practice-q2',
      'a-physics-oscillations-practice-q1',
      'a-physics-electric-fields-practice-q7',
      'a-physics-quantum-physics-practice-q3',
    ],
    minutes: 10,
  },
] as const;

export const diagnosticPath = (s: Pick<DiagnosticSet, 'code' | 'slug'>): string =>
  `/practice/${s.code}/diagnostic/${s.slug}/`;

export const diagnosticsForCode = (code: string): DiagnosticSet[] =>
  DIAGNOSTIC_SETS.filter((s) => s.code === code);
