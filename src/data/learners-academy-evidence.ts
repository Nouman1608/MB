/**
 * Conversion & trust round, follow-up (2026-09-07, D-150).
 *
 * Results and reviews published by LEARNERS ACADEMY — not by Marlbridge.
 *
 * WHY THIS IS A SEPARATE FILE FROM src/data/outcomes.ts
 *
 * `outcomes.ts` is for Marlbridge's own consented student outcomes, and is
 * still correctly empty. Nothing in this file belongs there. These students
 * studied at Learners Academy; these reviews were left about Learners
 * Academy on Learners Academy's Google Business Profile. Folding them into
 * Marlbridge's own outcomes would misattribute another organisation's
 * results to this one — the same error the site already guards against when
 * it insists a teacher's previous school is not an endorsement.
 *
 * What makes publishing this honest is the relationship, stated on the
 * site's own homepage since v1.x: Learners Academy is the founding academy
 * behind Marlbridge, and its teaching continues under the Marlbridge name.
 * Every renderer of this data MUST therefore attribute it to Learners
 * Academy by name and link to the source page. It must never be presented
 * as "our students said" in Marlbridge's voice.
 *
 * OWNER AUTHORITY. D-034 recorded that Learners Academy was approved as
 * evidence for PRICING AND FACULTY ONLY, and that "its academic taxonomy,
 * results, testimonials or unsupported claims are NOT imported." The owner
 * explicitly lifted that restriction for results and testimonials on
 * 2026-09-07 ("you can use from learnersacademy.com.pk"). That override is
 * recorded in D-150. The taxonomy and unsupported-claims half of D-034
 * STANDS and was not lifted.
 *
 * WHAT IS DELIBERATELY NOT IMPORTED, and must not be added later without a
 * new owner decision:
 *   - "4,200+ A & A* grades" and "9+ years teaching" from the Learners
 *     Academy homepage. These are lifetime aggregates with no published
 *     basis, year or method. The results-season figures below are checkable;
 *     those are not.
 *   - Any AggregateRating, Review or similar rating JSON-LD. The 4.6★ is
 *     Learners Academy's Google rating for Learners Academy. Emitting it as
 *     structured data on a Marlbridge page would assert a review rating for
 *     the wrong entity — a fabricated rating in Google's eyes regardless of
 *     the number being real somewhere else. It is shown as attributed plain
 *     text with a link out, and nothing more.
 *   - Full surnames. The source publishes first names and initials only
 *     because some of these students are minors. That constraint travels
 *     with the data.
 *
 * ARITHMETIC CHECKED, not copied on trust: 4 + 30 + 16 + 1 = 51 grades, and
 * (4 + 30) / 51 = 66.7%, consistent with the published 67%.
 */

export const LA_EVIDENCE = {
  sourceName: 'Learners Academy',
  sourceUrl: 'https://learnersacademy.com.pk/results/',
  /** Date the figures below were read from the source page. */
  verifiedOn: '2026-09-07',
  season: 'the August 2026 results season',

  /**
   * The full spread, including the grades most academies leave out. Keeping
   * the B's and the C is the single thing that makes this page credible
   * rather than promotional — do not trim this to the top two rows.
   */
  grades: [
    { grade: 'A*', count: 4 },
    { grade: 'A', count: 30 },
    { grade: 'B', count: 16 },
    { grade: 'C', count: 1 },
  ],
  totalGrades: 51,
  studentsReporting: 44,
  topGradePercent: 67,

  /**
   * Essential context, not a footnote: most of these results are Business
   * Studies, because they were sent to one teacher who teaches it. Omitting
   * this would imply a spread of results across every subject Marlbridge
   * teaches, which these figures do not evidence.
   */
  subjectNote:
    'Most of these grades are Business Studies, because most were sent directly to Nouman Ahmed, who teaches it. The rest are Economics, Accounting and Urdu. They are not a sample across every subject taught.',
  verificationNote:
    'Each grade was shared by the student or parent after results day, and checked against the official Cambridge International Statement of Results where one was sent.',

  /** Published with first name and initial only — see the header note. */
  testimonials: [
    {
      quote:
        'Seeing her achieve an A* in Business has filled our hearts with immense pride and happiness… You not only taught her the subject but also motivated her, built her confidence, and encouraged her to always aim higher.',
      attribution: 'Parent of Ayesha K.',
      result: 'A* — A Level Business',
    },
    {
      quote:
        'You did far more than just teach the syllabus — you inspired confidence in me and made learning a truly memorable journey. Your lessons and kindness will stay with me for a lifetime.',
      attribution: 'Arham K.',
      result: 'B — A Level Business',
    },
    {
      quote:
        "I got a B — though after giving the paper I was expecting an A. It's still good for A Level standards, Alhumdulillah, and in sha Allah will only get better under your guidance.",
      attribution: 'Subhan A.',
      result: 'B — A Level Business',
    },
    {
      quote:
        "Thank you so much for all your help and guidance throughout. Couldn't have done it without you. JazakAllah Khair Sir.",
      attribution: 'Ibrahim A.',
      result: 'A — Business Studies',
    },
  ],

  /** Displayed as attributed text only. NEVER as rating structured data. */
  googleRating: {
    score: 4.6,
    reviewCount: 32,
    profileUrl: 'https://learnersacademy.com.pk/results/',
    note: "Learners Academy's own Google rating, for Learners Academy.",
  },
} as const;
