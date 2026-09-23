/**
 * Revision-tools round (2026-09-23, D-286) -- five focused tuition sections.
 *
 * Each entry turns an EXISTING academic hub URL
 * (/boards/{board}/{qualification}/{subject}/) into the page that also
 * answers the tuition questions for that syllabus. No new URL is created:
 * the hub already ranks for the syllabus code, and a second
 * "...-online-tuition" page would compete with it.
 *
 * WHY THESE FIVE (no enquiry-by-subject data exists; Search Console clicks
 * are thin and spread thinly -- see D-286 for the numbers):
 *   0620 IGCSE Chemistry  -- 55 resources, 185 self-check questions,
 *                            diagnostic; taught by Nouman Ahmed.
 *   0580 IGCSE Mathematics-- the IGCSE maths practice pages are among the
 *                            site's most-clicked resources; three named
 *                            Mathematics teachers.
 *   9701 A Level Chemistry-- the largest resource set on the site (121),
 *                            375 questions, two diagnostics.
 *   9702 A Level Physics  -- 75 resources, 229 questions, two diagnostics;
 *                            three named Physics teachers.
 *   9609 A Level Business -- the only subject with attributable results and
 *                            testimonials (Learners Academy, Business
 *                            Studies); two named Business teachers.
 *
 * EVERYTHING SHOWN IS DERIVED OR SOURCED:
 *   - teachers: utils/content/subject-teachers.ts (sourced subjectsTaught);
 *   - fees and class format: src/data/pricing.ts (never restated here);
 *   - topics: src/data/academic/syllabus-topics.ts;
 *   - results: src/data/learners-academy-evidence.ts, only where
 *     `showLearnersAcademyEvidence` is true AND the evidence is for this
 *     subject, always labelled as Learners Academy's.
 * The only prose in this file is `audience`, `approach` and `faqs`, and it
 * states nothing that is not already published elsewhere on the site.
 */

export interface TuitionPage {
  boardSlug: string;
  qualificationSlug: string;
  subjectSlug: string;
  /** Who the tuition is for -- factual, no outcome promises. */
  audience: string;
  /** How lessons are run, in terms already published (formats, trial). */
  approach: string;
  /** Show Learners Academy's attributed results block (subject must match). */
  showLearnersAcademyEvidence: boolean;
  /** Programme slug for the existing trial-context allow-list. */
  programSlug: 'igcse' | 'a-levels';
  /** Extra subject-specific FAQs. Generic fee/format FAQs are added by the component from pricing.ts. */
  faqs: readonly { question: string; answer: string }[];
}

export const TUITION_PAGES: readonly TuitionPage[] = [
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'igcse',
    subjectSlug: 'chemistry',
    programSlug: 'igcse',
    audience:
      'Students taking Cambridge IGCSE Chemistry (0620), at Core or Extended tier, who want live lessons from a named Chemistry teacher, online from anywhere or in person at the academy in Lahore.',
    approach:
      'Classes are taught against the 0620 syllabus. Between classes, students can use the free 0620 self-check questions, the 10-minute diagnostic and the printable syllabus checklist on this site.',
    showLearnersAcademyEvidence: false,
    faqs: [
      {
        question: 'Do you teach Core or Extended 0620?',
        answer:
          'Both. 0620 is a tiered syllabus: Extended candidates study the Core content plus the Supplement content. Tell us which tier the school has entered the student for, or choose "Not sure" on the trial form and the teacher will help you check.',
      },
    ],
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'igcse',
    subjectSlug: 'mathematics',
    programSlug: 'igcse',
    audience:
      'Students taking Cambridge IGCSE Mathematics (0580), at Core or Extended tier, who want live lessons from a named Mathematics teacher, online from anywhere or in person at the academy in Lahore.',
    approach:
      'Classes are taught against the 0580 syllabus. Between classes, students can use the free 0580 self-check questions and the printable syllabus checklist on this site.',
    showLearnersAcademyEvidence: false,
    faqs: [
      {
        question: 'Do you teach Core or Extended 0580?',
        answer:
          'Both. 0580 is a tiered syllabus. Tell us which tier the school has entered the student for, or choose "Not sure" on the trial form and the teacher will help you check.',
      },
    ],
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'a-level',
    subjectSlug: 'chemistry',
    programSlug: 'a-levels',
    audience:
      'Students taking Cambridge International AS & A Level Chemistry (9701), in the AS year or the full A Level, who want live lessons from a named Chemistry teacher, online from anywhere or in person at the academy in Lahore.',
    approach:
      'Classes are taught against the 9701 syllabus: AS content (Topics 1–22) and A Level content (Topics 23–37). Between classes, students can use the free 9701 self-check questions, the two 10-minute diagnostics and the printable syllabus checklist.',
    showLearnersAcademyEvidence: false,
    faqs: [
      {
        question: 'Can my child join for the AS year only?',
        answer:
          'Yes, you can enquire for AS Level only or for the full A Level. Say which on the trial form and we will confirm what is available at the level and time you need.',
      },
    ],
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'a-level',
    subjectSlug: 'physics',
    programSlug: 'a-levels',
    audience:
      'Students taking Cambridge International AS & A Level Physics (9702), in the AS year or the full A Level, who want live lessons from a named Physics teacher, online from anywhere or in person at the academy in Lahore.',
    approach:
      'Classes are taught against the 9702 syllabus: AS content (Topics 1–11) and A Level content (Topics 12–25). Between classes, students can use the free 9702 self-check questions, the two 10-minute diagnostics and the printable syllabus checklist.',
    showLearnersAcademyEvidence: false,
    faqs: [
      {
        question: 'Can my child join for the AS year only?',
        answer:
          'Yes, you can enquire for AS Level only or for the full A Level. Say which on the trial form and we will confirm what is available at the level and time you need.',
      },
    ],
  },
  {
    boardSlug: 'cambridge',
    qualificationSlug: 'a-level',
    subjectSlug: 'business',
    programSlug: 'a-levels',
    audience:
      'Students taking Cambridge International AS & A Level Business (9609), in the AS year or the full A Level, who want live lessons from a named Business teacher, online from anywhere or in person at the academy in Lahore.',
    approach:
      'Classes are taught against the 9609 syllabus. Between classes, students can use the free 9609 study guides, revision notes and practice questions, and the printable syllabus checklist.',
    showLearnersAcademyEvidence: true,
    faqs: [
      {
        question: 'Can my child join for the AS year only?',
        answer:
          'Yes, you can enquire for AS Level only or for the full A Level. Say which on the trial form and we will confirm what is available at the level and time you need.',
      },
    ],
  },
] as const;

export const tuitionPageFor = (boardSlug: string, qualificationSlug: string, subjectSlug: string): TuitionPage | undefined =>
  TUITION_PAGES.find((t) => t.boardSlug === boardSlug && t.qualificationSlug === qualificationSlug && t.subjectSlug === subjectSlug);
