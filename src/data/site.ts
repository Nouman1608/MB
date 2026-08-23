import editorialBand from '../assets/editorial-band.jpg';
import academyPortrait from '../assets/academy-portrait.jpg';

export const site = {
  name: 'Marlbridge',
  tagline: 'Bridging Knowledge and Opportunity.',
  url: 'https://marlbridge.com',
  /**
   * v1.x Global Positioning update -- rewritten to read as a global
   * institute without claiming anything not yet true. "Online tutoring for
   * learners anywhere" and "nine countries" are both real today (live
   * online tutoring is taught to enrolled students outside Pakistan; see
   * src/data/pricing.ts for the nine priced regions). Deliberately does
   * NOT claim the free study library itself is multilingual -- the
   * /ar/, /ur/, /bn/ pages are translated landing pages, not translated
   * resources, so that claim would overclaim. Revisit this string if/when
   * the resource library itself is translated.
   */
  defaultDescription:
    'Live teaching from Pakistan. Online tutoring for learners anywhere. A free study library built for the international curricula studied across the Gulf, South Asia, the UK and beyond.',
  locale: 'en',
  founding: 'Learners Academy — a Marlbridge education institution.',
  /**
   * Only add entries for accounts that actually confirmed exist AND are
   * currently live (used for sameAs). Owner-confirmed 2026-08-23: LinkedIn
   * and Facebook exist but the exact profile URL is not yet confirmed here
   * -- do not guess a slug for either, add them once the real URL is
   * supplied. Threads (@marlbridge) exists but is currently suspended, so
   * it is deliberately NOT listed -- a sameAs link to a suspended profile
   * would point at a dead page rather than a live verification signal.
   */
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/marlbridgeofficial/' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@marlbridge' },
    { label: 'X', href: 'https://x.com/Marlbridgehq' },
  ] as Array<{ label: string; href: string }>,
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

  /**
   * v1.x CLOSURE WS7 -- editorial (non-documentary) imagery, replacing the
   * "photograph not yet available" placeholders until real photography
   * exists. Code-generated abstract/geometric art in the site's own
   * palette, not a photo of any real class, campus, teacher or student --
   * alt text says exactly that, honestly, rather than implying a real
   * photograph. Swap these for genuine photography (see the comment
   * above) whenever it becomes available; no template change needed.
   */
  academyPhoto: {
    image: academyPortrait as ImageMetadata | undefined,
    alt: 'Abstract editorial graphic in the Marlbridge colour palette -- not a photograph of an actual Learners Academy classroom or person',
  },
  classroomPhoto: {
    image: editorialBand as ImageMetadata | undefined,
    alt: 'Abstract editorial graphic in the Marlbridge colour palette -- not a photograph of an actual Marlbridge lesson or classroom',
  },
} as const;

export type Site = typeof site;
