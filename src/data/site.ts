export const site = {
  name: 'Marlbridge',
  tagline: 'Bridging Knowledge and Opportunity.',
  url: 'https://marlbridge.com',
  defaultDescription:
    'Marlbridge helps learners build the knowledge, confidence and skills they need to succeed in school, examinations, higher education and beyond.',
  locale: 'en',
  founding: 'Learners Academy — a Marlbridge education institution.',
  /** Only add entries for accounts that actually exist (used for sameAs). */
  social: [] as Array<{ label: string; href: string }>,
  ogImage: '/images/brand/marlbridge-og.png',

  /**
   * Editorial photography slots. Drop a real photograph into src/assets/,
   * import it here, and write its alt text — the layout does not change.
   *
   *   import academy from '../assets/learners-academy-teaching.jpg';
   *   image: academy,
   *   alt: 'A teacher working through a chemistry problem with two students at Learners Academy',
   *
   * Never an AI-generated person and never stock photography.
   */
  academyPhoto: {
    image: undefined as ImageMetadata | undefined,
    alt: 'Teaching at Learners Academy',
  },
  classroomPhoto: {
    image: undefined as ImageMetadata | undefined,
    alt: 'A Marlbridge classroom during a lesson',
  },
} as const;

export type Site = typeof site;
