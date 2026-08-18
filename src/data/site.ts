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
  /**
   * Verified facts about the founding academy. Every field is optional and
   * UNSET until the business supplies something checkable — the /about/ page
   * renders each block only when its field is filled, so nothing here can be
   * guessed, and adding a fact later needs no template change.
   *
   * Do not populate from memory or inference. Founding year, city, campus
   * count, student numbers, accreditation, awards and partnerships are all
   * off-limits until confirmed in writing.
   */
  about: {
    foundingYear: undefined as string | undefined,
    city: undefined as string | undefined,
    country: undefined as string | undefined,
    /** Longer founding narrative, once written and approved. */
    story: undefined as string | undefined,
  },

  /**
   * v1.x WS2 -- public, non-secret identifiers only. A GA4 Measurement ID
   * and a Turnstile SITE key are both meant to be visible in client-side
   * HTML/JS; neither is a credential. The matching secrets
   * (TURNSTILE_SECRET_KEY, RESEND_API_KEY) live only as Cloudflare Pages
   * environment variables and are never placed in source. See
   * docs/decision-log.md D-002 and D-003.
   */
  analytics: {
    ga4MeasurementId: 'G-TB89R669JL' as string | undefined,
  },
  turnstile: {
    siteKey: '0x4AAAAAAEUSRy7-wI4BXSlD' as string | undefined,
  },

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
