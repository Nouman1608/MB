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
} as const;

export type Site = typeof site;
