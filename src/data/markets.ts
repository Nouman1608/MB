/**
 * D-302/D-303 -- country market experiences for the International Growth
 * programme (owner brief, 23 Sep 2026).
 *
 * Every fact here is one of:
 *   - owner-stated (teaching from Lahore; online worldwide; fees, D-012/
 *     D-043/D-149/D-297),
 *   - computed from site data (taught combinations, pricing rows), or
 *   - a fixed public fact (standard UTC offsets), or
 *   - Marlbridge's own Google Search Console evidence (`searchedHubs`:
 *     the hub pages that searchers located in that country found most
 *     often, Performance report, last 3 months, exported 2026-09-23).
 *
 * Nothing here claims a local branch, address, partner school, local
 * teacher, regulation status, pass rate or student number. Country pages
 * that are not listed here are not published (see docs/decision-log.md
 * D-303 for the countries deliberately not given a page yet).
 *
 * D-460 (owner, 15 Nov 2026) -- Saudi Arabia, Kuwait, Bahrain, Oman and
 * Europe get pages; this lifts the D-303 hold for the four Gulf countries.
 * There is no Search Console or GA4 evidence for them in the repo, so they
 * have no `searchedHubs` and no cities, and their boards are every board
 * with classes, in the site's own order, not a local ranking. Their fees
 * are the rows already in src/data/pricing.ts.
 */

import { taughtOnly } from '../utils/academic';
import { courseSubjectNameOverride } from './academic/matrix';
import { PRICING_TERMS } from './pricing';

/** D7 (owner, audit round 3) -- region pages no longer say teachers are
 * available 24 hours a day, 7 days a week; they state the real reply hours,
 * from the one record of them (PRICING_TERMS.enquiryResponse, D-346). */
const REPLY_HOURS = PRICING_TERMS.enquiryResponse.summary;

/**
 * True when the board hub at `path` (/boards/<board>/<qual>/<subject>/) is a
 * combination Marlbridge teaches classes in. Used so a Search Console hub
 * that only has free resources is labelled as such, never implied taught.
 */
export function hubIsTaught(path: string): boolean {
  const m = path.match(/^\/boards\/([^/]+)\/([^/]+)\/([^/]+)\/$/);
  if (!m) return false;
  return taughtOnly().some((c) => c.boardSlug === m[1] && c.qualificationSlug === m[2] && c.subjectSlug === m[3]);
}

export const RESOURCES_ONLY_SUFFIX = ' (free resources only, no classes at the moment)';

export type MarketSlug =
  | 'pakistan' | 'uk' | 'uae' | 'qatar' | 'malaysia' | 'singapore'
  | 'oman' | 'europe';

export interface MarketHubLink {
  /** Path of an existing board hub page. */
  readonly path: string;
  readonly label: string;
}

/** One row of the time table for a region with several zones (D-460). */
export interface MarketTimeZone {
  /** Example countries and the part of the year, e.g. "France and Germany, late October to late March". */
  readonly where: string;
  /** Name of the zone; the UTC offset is printed from `utcOffsetHours`. */
  readonly zone: string;
  readonly utcOffsetHours: number;
}

export interface Market {
  readonly slug: MarketSlug;
  readonly path: string;
  readonly name: string;
  /** Region name as used in src/data/pricing.ts. */
  readonly pricingRegion: string;
  readonly utcOffsetHours: number;
  readonly timeZoneLabel: string;
  /**
   * Boards (slugs) most relevant to families in this country, in order.
   * Where `searchedHubs` is empty there is no local evidence: list every
   * board with classes, in the site's own order (D-460).
   */
  readonly focusBoards: readonly string[];
  /**
   * Hub pages searchers in this country found most often. Empty when there
   * is no such evidence (D-460): the page then leaves the section out and
   * does not call the boards "most relevant".
   */
  readonly searchedHubs: readonly MarketHubLink[];
  /** Curricula Marlbridge does NOT teach that families here may be asked about. */
  readonly notOffered: string;
  readonly faqs: readonly { question: string; answer: string }[];
  /**
   * Main cities, used only to name where students are (8 Oct 2026, buyer
   * searches name the city, e.g. "igcse tutor dubai"). Never a claim of a
   * local office or teacher: every page states there is none.
   */
  readonly cities: readonly string[];
  /** Overrides the computed page title (D-415: Singapore leads with IB). */
  readonly pageTitle?: string;
  /**
   * Where `searchedHubs` came from, when it is not the 23 Sep 2026 Search
   * Console export (D-415: Singapore uses GA4, bot sessions excluded).
   */
  readonly searchedHubsNote?: string;
  /**
   * Qualifications left out of the "tutors by subject" list (D-415: in
   * Singapore "O Level" reads as the national Singapore-Cambridge O-Level).
   */
  readonly tutorListExcludes?: readonly string[];
  /** Overrides the computed meta description (D-460: keeps Saudi Arabia's under 160 characters). */
  readonly pageDescription?: string;
  /**
   * D-460 -- a region with several time zones or daylight saving (Europe).
   * The page shows one row per entry instead of the single-offset table.
   * Standard UTC offsets and clock-change months: fixed public facts.
   */
  readonly timeZones?: readonly MarketTimeZone[];
  /** With `timeZones`: replaces the computed "N hours behind Lahore". */
  readonly timeSummary?: string;
  /**
   * Owner-approved local facts (26 Nov 2026, UAE: reports/owner-decisions-2/
   * uae-facts-draft.md). Each paragraph is a sourced statement; `sources` are
   * printed in a "Sources" line with the date they were read.
   */
  readonly localFacts?: {
    readonly heading: string;
    readonly groups: readonly { readonly heading: string; readonly paragraphs: readonly string[] }[];
    readonly sources: readonly { readonly label: string; readonly url: string }[];
    readonly readOn: string;
  };
  /** Extra sentences after `notOffered` on the "What we do not teach" section (not in the FAQ). */
  readonly notOfferedExtra?: readonly string[];
}

/** Lahore, where every live class is taught from: UTC+5, no daylight saving. */
export const LAHORE_UTC_OFFSET = 5;

/** Formats an hour-of-day (can be fractional or out of range) as "h:mm am/pm". */
export function clock(hour: number): string {
  const h = ((hour % 24) + 24) % 24;
  const whole = Math.floor(h);
  const mins = Math.round((h - whole) * 60);
  const suffix = whole < 12 ? 'am' : 'pm';
  const h12 = whole % 12 === 0 ? 12 : whole % 12;
  return `${h12}:${String(mins).padStart(2, '0')} ${suffix}`;
}

/** Local after-school and weekend-morning times and the Lahore time they fall at. */
export function timeRows(utcOffsetHours: number) {
  const diff = LAHORE_UTC_OFFSET - utcOffsetHours;
  return [16, 17, 18, 19, 20].map((local) => ({ local: clock(local), lahore: clock(local + diff) }));
}

/**
 * D-460 -- every board Marlbridge teaches, in the order of BOARDS
 * (src/data/academic/boards.ts). Used by markets with no local search
 * evidence, so no board is presented as locally "most relevant". The page
 * drops any board without taught classes and marks one-to-one-only boards.
 */
const ALL_TAUGHT_BOARDS: readonly string[] = ['cambridge', 'edexcel', 'aqa', 'oxfordaqa', 'ocr', 'ib'];

export const MARKETS: readonly Market[] = [
  {
    slug: 'uae',
    cities: ['Dubai', 'Abu Dhabi', 'Sharjah'],
    path: '/uae/',
    name: 'United Arab Emirates',
    pricingRegion: 'United Arab Emirates',
    utcOffsetHours: 4,
    timeZoneLabel: 'UTC+4 (Gulf Standard Time, no daylight saving)',
    focusBoards: ['edexcel', 'cambridge', 'oxfordaqa', 'aqa', 'ib'],
    searchedHubs: [
      { path: '/boards/edexcel/igcse/biology/', label: 'Pearson Edexcel IGCSE Biology' },
      { path: '/boards/edexcel/a-level/physics/', label: 'Pearson Edexcel A Level Physics' },
      { path: '/boards/edexcel/a-level/business/', label: 'Pearson Edexcel A Level Business' },
      { path: '/boards/cambridge/igcse/biology/', label: 'Cambridge IGCSE Biology' },
      { path: '/boards/cambridge/igcse/physics/', label: 'Cambridge IGCSE Physics' },
      { path: '/boards/cambridge/a-level/accounting/', label: 'Cambridge A Level Accounting' },
    ],
    notOffered:
      'Marlbridge does not teach the UAE Ministry of Education curriculum, the Indian CBSE or ICSE curricula, the American high-school curriculum, or the French Baccalauréat. It teaches the British-style international qualifications listed on this page, and the IB and Advanced Placement (AP) one-to-one.',
    notOfferedExtra: [
      'In Abu Dhabi, the Abu Dhabi Department of Education and Knowledge (ADEK) requires all private schools, whatever their curriculum, to teach the UAE Ministry of Education (MoE) subjects, and exemptions are not authorised. ADEK defines MoE subjects as the mandatory subjects that all private and charter schools in the UAE must teach under the Ministry of Education's requirements. Marlbridge does not teach the MoE subjects, so families need them from their child's school; Marlbridge classes are extra to them and do not replace them.',
      'ADEK's Curriculum Policy took effect in Academic Year 2024/25 (Fall term), with compliance from 2025/26 (Fall term).',
    ],
    localFacts: {
      heading: 'Schools in the UAE: the facts we can source',
      groups: [
        {
          heading: 'Dubai private schools, 2024-25 (KHDA data)',
          paragraphs: [
            'Dubai's private schools had 387,441 students across 227 schools in 2024-25. These figures are Knowledge and Human Development Authority (KHDA) data, as published by the Dubai Media Office on 9 January 2025. Dubai private schools offer 17 curricula.',
            'In Dubai's private schools in 2024-25 the UK curriculum is the most popular, with 37% of students, followed by Indian (26%), US (14%), International Baccalaureate (7%) and UK/IB (4%). These are shares of students, not of schools, and the UK share is not split by exam board.',
          ],
        },
        {
          heading: 'New Dubai schools announced in August 2025',
          paragraphs: [
            'Of six new Dubai private schools announced in August 2025, five follow the UK curriculum and one the French curriculum (Dubai Media Office, 24 August 2025). That announcement gives 233 schools as the sector total at that date. It is a separate count from the 227 schools of 2024-25 above, so the two numbers are not combined.',
          ],
        },
        {
          heading: 'Abu Dhabi: external exam bodies',
          paragraphs: [
            'ADEK's Curriculum Policy defines affiliation as a school being approved to offer specific external exams, naming Cambridge Education as an example. It gives no share for any exam board.',
          ],
        },
      ],
      sources: [
        { label: 'Dubai Media Office, Dubai's private school sector (9 January 2025)', url: 'https://mediaoffice.ae/en/news/2025/january/09-01/dubais-private-school-sector' },
        { label: 'Dubai Media Office, Dubai academic year (24 August 2025)', url: 'https://mediaoffice.ae/en/news/2025/august/24-08/dubai-academic-year' },
        { label: 'ADEK, School Curriculum Policy v1.2 (September 2025), sections 7.2 and 7.4', url: 'https://www.adek.gov.ae/-/media/Project/TAMM/ADEK/Policies/School-Policies/Teaching-and-Learning/ADEK_S_Curriculum-Policy_EN_v1_2.pdf' },
      ],
      readOn: '26 November 2026',
    },
    faqs: [
      {
        question: 'Does Marlbridge have a centre in the UAE?',
        answer:
          'No. Marlbridge has no office, branch or teacher based in the UAE. Every class is taught live online by a named subject teacher from our academy in Lahore, Pakistan.',
      },
      {
        question: 'What time would classes be in the UAE?',
        answer:
          'The UAE is one hour behind Lahore all year, so a 5:00 pm class in Dubai or Abu Dhabi is 6:00 pm in Lahore. Group class times are agreed with the families in each group and confirmed before the trial; one-to-one class times are agreed with you before the first class. ' + REPLY_HOURS,
      },
      {
        question: 'Can my child be taught for Pearson Edexcel International GCSE or International A Level?',
        answer:
          'Yes. Pearson Edexcel International GCSE and International A Level subjects are taught, alongside Cambridge IGCSE and A Level, OxfordAQA and AQA. Each subject page names the exact specification code it is taught against.',
      },
      {
        question: 'Is IB tuition available in the UAE?',
        answer:
          'IB Diploma and MYP tuition is one-to-one only, in 1-hour classes. The IB fee is set in Pakistan rupees; the UAE figure on this page is an indicative conversion, and the exact fee is confirmed in writing before any payment.',
      },
    ],
  },
  {
    slug: 'qatar',
    cities: ['Doha'],
    path: '/qatar/',
    name: 'Qatar',
    pricingRegion: 'Qatar',
    utcOffsetHours: 3,
    timeZoneLabel: 'UTC+3 (Arabia Standard Time, no daylight saving)',
    focusBoards: ['edexcel', 'cambridge', 'ib', 'oxfordaqa', 'aqa'],
    searchedHubs: [
      { path: '/boards/edexcel/igcse/biology/', label: 'Pearson Edexcel IGCSE Biology' },
      { path: '/boards/ib/ib-myp/myp-individuals-and-societies/', label: 'IB MYP Individuals and Societies' },
      { path: '/boards/cambridge/igcse/computer-science/', label: 'Cambridge IGCSE Computer Science' },
      { path: '/boards/cambridge/a-level/ict/', label: 'Cambridge A Level Information Technology' },
      { path: '/boards/edexcel/a-level/physics/', label: 'Pearson Edexcel A Level Physics' },
      { path: '/boards/aqa/a-level/english-language/', label: 'AQA A Level English Language' },
    ],
    notOffered:
      'Marlbridge does not teach the Qatari national curriculum, the Indian CBSE or ICSE curricula, or the American high-school curriculum. It teaches the British-style international qualifications listed on this page, and the IB and Advanced Placement (AP) one-to-one.',
    faqs: [
      {
        question: 'Does Marlbridge have a centre in Qatar?',
        answer:
          'No. Marlbridge has no office, branch or teacher based in Qatar. Every class is taught live online by a named subject teacher from our academy in Lahore, Pakistan.',
      },
      {
        question: 'What time would classes be in Qatar?',
        answer:
          'Qatar is two hours behind Lahore all year, so a 5:00 pm class in Doha is 7:00 pm in Lahore. Group class times are agreed with the families in each group and confirmed before the trial; one-to-one class times are agreed with you before the first class. ' + REPLY_HOURS,
      },
      {
        question: 'My child is in an IB school in Doha. Can Marlbridge help?',
        answer:
          'IB Diploma tuition is available one-to-one in the subjects listed on the IB board page, and MYP tuition in Mathematics, Sciences and Language Acquisition. Some IB subject pages, such as MYP Individuals and Societies, have free study resources but no classes at the moment. IB classes are 1 hour each; the Qatar IB figure on this page is an indicative conversion of the Pakistan fee, confirmed in writing before any payment.',
      },
      {
        question: 'What does tuition cost from Qatar?',
        answer:
          'Group classes have a set Qatar fee per subject per month, shown on this page in QAR. One-to-one prices are shown as indicative conversions of the Pakistan rate, and the exact fee is confirmed in writing before any payment.',
      },
    ],
  },
  {
    slug: 'malaysia',
    cities: ['Kuala Lumpur', 'Penang', 'Johor Bahru'],
    path: '/malaysia/',
    name: 'Malaysia',
    pricingRegion: 'Malaysia',
    utcOffsetHours: 8,
    timeZoneLabel: 'UTC+8 (Malaysia Time, no daylight saving)',
    focusBoards: ['cambridge', 'edexcel', 'oxfordaqa', 'ib'],
    searchedHubs: [
      { path: '/boards/cambridge/igcse/physics/', label: 'Cambridge IGCSE Physics' },
      { path: '/boards/cambridge/igcse/chemistry/', label: 'Cambridge IGCSE Chemistry' },
      { path: '/boards/cambridge/igcse/biology/', label: 'Cambridge IGCSE Biology' },
      { path: '/boards/cambridge/a-level/economics/', label: 'Cambridge A Level Economics' },
      { path: '/boards/oxfordaqa/igcse/chemistry/', label: 'OxfordAQA IGCSE Chemistry' },
      { path: '/boards/cambridge/igcse/accounting/', label: 'Cambridge IGCSE Accounting' },
    ],
    notOffered:
      'Marlbridge does not teach the Malaysian national curriculum (KSSM), SPM, STPM, the UEC or the Malaysian matriculation programme. It teaches the international qualifications listed on this page, and the IB one-to-one.',
    faqs: [
      {
        question: 'Does Marlbridge have a centre in Malaysia?',
        answer:
          'No. Marlbridge has no office, branch or teacher based in Malaysia. Every class is taught live online by a named subject teacher from our academy in Lahore, Pakistan.',
      },
      {
        question: 'What time would classes be in Malaysia?',
        answer:
          'Malaysia is three hours ahead of Lahore all year, so a 5:00 pm class in Kuala Lumpur is 2:00 pm in Lahore. Group class times are agreed with the families in each group and confirmed before the trial; one-to-one class times are agreed with you before the first class. ' + REPLY_HOURS,
      },
      {
        question: 'Why are the Malaysia fees marked "indicative"?',
        answer:
          'Marlbridge has not set a separate Malaysia price. The ringgit figures are conversions of the Pakistan fee at the exchange rate recorded on the date shown, so families can see the approximate cost. The exact fee is confirmed in writing before any payment.',
      },
      {
        question: 'Can I pay in ringgit?',
        answer:
          'Fees are paid by bank transfer or international wire transfer. The currency and exact amount are confirmed in writing when a place is offered.',
      },
    ],
  },
  {
    /**
     * D-415 (owner, 10 Oct 2026). Singapore was left without a page in D-303
     * (Search Console: 9 clicks / 900 impressions). Most GA4 "Singapore"
     * sessions are bots (0.2 s engagement, D-403); `searchedHubs` uses only
     * the ~21 Singapore sessions with 5 s or more of engagement, July to
     * 9 Oct 2026, mapped from their landing pages to the course pages, all
     * taught. Fees: Singapore dollar conversions of the Pakistan fee, all
     * indicative (owner, D-416).
     */
    slug: 'singapore',
    cities: [],
    pageTitle: 'Online IB, IGCSE & A Level Tutors in Singapore',
    tutorListExcludes: ['o-level'],
    path: '/singapore/',
    name: 'Singapore',
    pricingRegion: 'Singapore',
    utcOffsetHours: 8,
    timeZoneLabel: 'UTC+8 (Singapore Standard Time, no daylight saving)',
    focusBoards: ['ib', 'cambridge', 'edexcel', 'oxfordaqa'],
    searchedHubs: [
      { path: '/boards/ib/ib-dp/mathematics-analysis-and-approaches/', label: 'IB DP Mathematics: Analysis and Approaches' },
      { path: '/boards/ib/ib-dp/computer-science/', label: 'IB DP Computer Science' },
      { path: '/boards/ib/ib-dp/economics/', label: 'IB DP Economics' },
      { path: '/boards/ib/ib-myp/myp-language-acquisition/', label: 'IB MYP Language Acquisition' },
      { path: '/boards/cambridge/a-level/chemistry/', label: 'Cambridge A Level Chemistry' },
      { path: '/boards/edexcel/a-level/economics/', label: 'Pearson Edexcel A Level Economics' },
    ],
    searchedHubsNote:
      "From Marlbridge's own Google Analytics data for visits from Singapore that stayed at least five seconds (July to October 2026, automated traffic excluded), grouped by course. Each page gives the official syllabus or specification, how it is assessed, and free study material.",
    notOffered:
      'Marlbridge does not teach the Singapore national curriculum or its national examinations, including the PSLE, the Singapore-Cambridge GCE O-Level, N-Level and A-Level, and the Singapore-Cambridge Secondary Education Certificate (SEC). These are different examinations from Cambridge International IGCSE, O Level and AS & A Level, which are taught. It also does not teach the American high-school curriculum or the Indian CBSE or ICSE curricula; Advanced Placement (AP) courses are taught one-to-one.',
    faqs: [
      {
        question: 'Does Marlbridge have a centre in Singapore?',
        answer:
          'No. Marlbridge has no office, branch or teacher based in Singapore. Every class is taught live online by a named subject teacher from our academy in Lahore, Pakistan.',
      },
      {
        question: 'What time would classes be in Singapore?',
        answer:
          'Singapore is three hours ahead of Lahore all year, so a 5:00 pm class in Singapore is 2:00 pm in Lahore. Group class times are agreed with the families in each group and confirmed before the trial; one-to-one class times are agreed with you before the first class. ' + REPLY_HOURS,
      },
      {
        question: 'Is this tuition for the Singapore O-Level or A-Level?',
        answer:
          'No. Marlbridge teaches the international qualifications taken at international schools: Cambridge International IGCSE, O Level and AS & A Level, Pearson Edexcel International GCSE and International A Level, OxfordAQA, and the IB. The Singapore-Cambridge GCE and SEC examinations taken in Singapore government schools have their own syllabuses and are not taught.',
      },
      {
        question: 'My child is in an IB school in Singapore. Can Marlbridge help?',
        answer:
          'Yes. IB Diploma tuition is available one-to-one in the subjects listed on the IB board page, and MYP tuition in Mathematics, Sciences and Language Acquisition. IB classes are 1 hour each; the Singapore dollar IB figure on this page is an indicative conversion of the Pakistan fee, confirmed in writing before any payment.',
      },
      {
        question: 'What does tuition cost from Singapore?',
        answer:
          'Fees are shown on this page in Singapore dollars. Marlbridge has not set a separate Singapore price: the figures are conversions of the Pakistan fee at the exchange rate recorded on the date shown, so you can see the approximate cost, and the exact fee is confirmed in writing before any payment.',
      },
    ],
  },
  /**
   * D-460 (owner, 15 Nov 2026) -- Saudi Arabia, Kuwait, Bahrain and Oman.
   * D-483 (owner, 16 Nov 2026): Saudi Arabia, Kuwait and Bahrain folded back
   * into /gulf/ (301) -- too close to each other to stand alone. Oman stays.
   * D-303 kept these on /gulf/ for lack of search demand; the owner has now
   * asked for a page each. No local search evidence is held, so there are no
   * `searchedHubs` and no cities. Group fees are the owner-set rows in
   * pricing.ts (D-012/D-043/D-149); one-to-one and IB are its conversions.
   * UTC offsets are the ones /gulf/ already publishes.
   */
  {
    slug: 'oman',
    cities: [],
    path: '/oman/',
    name: 'Oman',
    pricingRegion: 'Oman',
    utcOffsetHours: 4,
    timeZoneLabel: 'UTC+4 (Gulf Standard Time, no daylight saving)',
    focusBoards: ALL_TAUGHT_BOARDS,
    searchedHubs: [],
    notOffered:
      'Marlbridge does not teach the Omani national curriculum or the Indian CBSE or ICSE curricula. It teaches the British qualifications listed on this page (GCSE, IGCSE, O Level and A Level), and the IB one-to-one.',
    faqs: [
      {
        question: 'Does Marlbridge have a centre in Oman?',
        answer:
          'No. Marlbridge has no office, branch or teacher based in Oman. Every class is taught live online by a named subject teacher from our academy in Lahore, Pakistan.',
      },
      {
        question: 'What time would classes be in Oman?',
        answer:
          'Oman is one hour behind Lahore all year, so a 5:00 pm class in Oman is 6:00 pm in Lahore. Group class times are agreed with the families in each group and confirmed before the trial; one-to-one class times are agreed with you before the first class. ' + REPLY_HOURS,
      },
      {
        question: 'What does tuition cost from Oman?',
        answer:
          'Group classes have a set Oman fee per subject per month, shown on this page in OMR. One-to-one and IB prices are shown as indicative conversions of the Pakistan rate, and the exact fee is confirmed in writing before any payment.',
      },
      {
        question: 'Why are the Oman fees written to three decimal places?',
        answer:
          'The Omani rial is divided into 1,000 baisa, so prices in OMR are normally written to three decimal places. The fees on this page follow that convention.',
      },
    ],
  },
  {
    /**
     * D-460 (owner, 15 Nov 2026) -- Europe, the region of the euro rows in
     * pricing.ts (the UK has its own page and its own GBP rows). Europe has
     * no single clock: `timeZones` gives the three main zones in winter and
     * summer, and `utcOffsetHours` (Central European Time) is not printed.
     * D-467 (owner, 15 Nov 2026): the Europe fee covers "all Europe outside
     * UK", euro and non-euro countries alike. The time table adds the zones
     * that are not on WET/CET/EET (Iceland; Türkiye, Belarus, western Russia).
     */
    slug: 'europe',
    cities: [],
    path: '/europe/',
    name: 'Europe',
    pricingRegion: 'Europe',
    utcOffsetHours: 1,
    timeZoneLabel:
      'most countries are on Western, Central or Eastern European Time and put their clocks forward one hour from late March to late October',
    timeSummary: 'two to five hours behind Lahore in most of Europe, depending on the country and the time of year',
    timeZones: [
      { where: 'Iceland, all year', zone: 'GMT', utcOffsetHours: 0 },
      { where: 'Ireland and mainland Portugal, late October to late March', zone: 'GMT / Western European Time', utcOffsetHours: 0 },
      { where: 'Ireland and mainland Portugal, late March to late October', zone: 'Irish Standard Time / Western European Summer Time', utcOffsetHours: 1 },
      { where: 'Most of mainland Europe (for example France, Germany, Italy, Spain, Poland, Sweden), late October to late March', zone: 'Central European Time', utcOffsetHours: 1 },
      { where: 'Most of mainland Europe (for example France, Germany, Italy, Spain, Poland, Sweden), late March to late October', zone: 'Central European Summer Time', utcOffsetHours: 2 },
      { where: 'Eastern Europe (for example Greece, Finland, Romania, Ukraine), late October to late March', zone: 'Eastern European Time', utcOffsetHours: 2 },
      { where: 'Eastern Europe (for example Greece, Finland, Romania, Ukraine), late March to late October', zone: 'Eastern European Summer Time', utcOffsetHours: 3 },
      { where: 'Türkiye, Belarus and western Russia, all year', zone: 'UTC+3', utcOffsetHours: 3 },
    ],
    focusBoards: ALL_TAUGHT_BOARDS,
    searchedHubs: [],
    notOffered:
      'Marlbridge does not teach the national curricula or national school-leaving examinations of European countries, for example the French Baccalauréat. It teaches the British qualifications listed on this page (GCSE, IGCSE, O Level and A Level), and the IB one-to-one.',
    faqs: [
      {
        question: 'Does Marlbridge have a centre in Europe?',
        answer:
          'No. Marlbridge has no office, branch or teacher based anywhere in Europe. Every class is taught live online by a named subject teacher from our academy in Lahore, Pakistan.',
      },
      {
        question: 'What time would classes be in Europe?',
        answer:
          'It depends on the country and the time of year. Lahore is four hours ahead of Central European Time in winter and three hours ahead in summer, so a 5:00 pm class in France or Germany is 9:00 pm in Lahore in winter and 8:00 pm in summer. Group class times are agreed with the families in each group and confirmed before the trial; one-to-one class times are agreed with you before the first class. ' + REPLY_HOURS,
      },
      {
        question: 'What does tuition cost from Europe?',
        answer:
          'Group classes have a set Europe fee per subject per month, shown on this page in euros. One-to-one and IB prices are shown as indicative conversions of the Pakistan rate, and the exact fee is confirmed in writing before any payment.',
      },
      {
        question: 'Which countries does this page cover?',
        answer:
          'Every country in Europe except the United Kingdom, whether or not it uses the euro. Fees for all of them are shown here in euros, and the exact fee is confirmed in writing before any payment.',
      },
      {
        question: 'Is this page for students in the United Kingdom?',
        answer:
          'No. The United Kingdom has its own page, with fees in pounds and UK class times. This page gives the fees Marlbridge has set in euros for Europe.',
      },
    ],
  },
];

export const marketBySlug = (slug: MarketSlug): Market | undefined => MARKETS.find((m) => m.slug === slug);

/**
 * Conversion round (8 Oct 2026) -- "tutor by subject" links on the country
 * pages. Search Console (6 Sep-5 Oct) gave /pakistan/, /uae/ and /qatar/ no
 * impressions at all, and buyer searches such as "igcse online tutoring"
 * ranked 80-95: those pages named boards, never a subject a family searches
 * for. Each entry is a course Marlbridge really teaches (taughtOnly()), named
 * the way its hub names it, linking to the hub and to a free trial with the
 * course pre-filled (D-330). Nothing local is claimed.
 */
const SUBJECT_PRIORITY = [
  'mathematics', 'physics', 'chemistry', 'biology', 'english-language', 'computer-science',
  'economics', 'business', 'accounting', 'english-literature', 'ict', 'islamiyat', 'pakistan-studies', 'urdu-language',
];
/** Pakistan's own order: O Level is the main route there. */
export const PAKISTAN_QUALIFICATION_ORDER = ['o-level', 'igcse', 'a-level', 'gcse', 'ib-dp', 'ib-myp'];
/** Elsewhere families mostly sit IGCSE and A Level; O Level comes last. */
const INTERNATIONAL_QUALIFICATION_ORDER = ['igcse', 'a-level', 'gcse', 'ib-dp', 'ib-myp', 'o-level'];

export interface TutorCourse {
  readonly key: string;
  readonly label: string;
  readonly code?: string;
  readonly hubHref: string;
  readonly trialHref: string;
}

/** At most `perSubject` courses per subject, so one subject cannot fill the list. */
export function tutorCoursesFor(
  boards: readonly string[],
  limit: number,
  perSubject = 2,
  qualificationOrder: readonly string[] = INTERNATIONAL_QUALIFICATION_ORDER,
  /**
   * D-413 -- subjects outside SUBJECT_PRIORITY that a page should still list
   * (up to perSubject courses each, after the main list), e.g. Sociology on
   * /uk/, where A Level Sociology searches reach the site.
   */
  extraSubjects: readonly string[] = [],
): TutorCourse[] {
  const rank = (list: readonly string[], v: string) => {
    const i = list.indexOf(v);
    return i === -1 ? list.length : i;
  };
  const perSubjectCount = new Map<string, number>();
  const byPriority = (a: ReturnType<typeof taughtOnly>[number], b: ReturnType<typeof taughtOnly>[number]) =>
      rank(SUBJECT_PRIORITY, a.subjectSlug) - rank(SUBJECT_PRIORITY, b.subjectSlug)
      || rank(boards, a.boardSlug) - rank(boards, b.boardSlug)
      || rank(qualificationOrder, a.qualificationSlug) - rank(qualificationOrder, b.qualificationSlug);
  const capped = (c: ReturnType<typeof taughtOnly>[number]) => {
    const n = perSubjectCount.get(c.subjectSlug) ?? 0;
    perSubjectCount.set(c.subjectSlug, n + 1);
    return n < perSubject;
  };
  const onBoards = taughtOnly().filter((c) => boards.includes(c.boardSlug));
  const main = onBoards.filter((c) => !extraSubjects.includes(c.subjectSlug)).sort(byPriority).filter(capped).slice(0, limit);
  const extra = onBoards.filter((c) => extraSubjects.includes(c.subjectSlug)).sort(byPriority).filter(capped);
  return [...main, ...extra]
    .map((c) => {
      const key = `${c.boardSlug}/${c.qualificationSlug}/${c.subjectSlug}`;
      const subject = courseSubjectNameOverride(c.boardSlug, c.qualificationSlug, c.subjectSlug) ?? c.subject;
      const qualification = c.qualification.startsWith('IB ') ? c.qualification : `${c.board} ${c.qualification}`;
      return {
        key,
        label: `${qualification} ${subject}`,
        code: c.qualificationCode && /\d/.test(c.qualificationCode) ? c.qualificationCode : undefined,
        hubHref: `/boards/${key}/`,
        trialHref: `/trial/?course=${encodeURIComponent(key)}&source=region`,
      };
    });
}
