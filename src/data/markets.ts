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
 */

import { taughtOnly } from '../utils/academic';

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

export type MarketSlug = 'pakistan' | 'uk' | 'uae' | 'qatar' | 'malaysia';

export interface MarketHubLink {
  /** Path of an existing board hub page. */
  readonly path: string;
  readonly label: string;
}

export interface Market {
  readonly slug: MarketSlug;
  readonly path: string;
  readonly name: string;
  /** Region name as used in src/data/pricing.ts. */
  readonly pricingRegion: string;
  readonly utcOffsetHours: number;
  readonly timeZoneLabel: string;
  /** Boards (slugs) most relevant to families in this country, in order. */
  readonly focusBoards: readonly string[];
  readonly searchedHubs: readonly MarketHubLink[];
  /** Curricula Marlbridge does NOT teach that families here may be asked about. */
  readonly notOffered: string;
  readonly faqs: readonly { question: string; answer: string }[];
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

export const MARKETS: readonly Market[] = [
  {
    slug: 'uae',
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
      'Marlbridge does not teach the UAE Ministry of Education curriculum, the Indian CBSE or ICSE curricula, the American curriculum or Advanced Placement (AP), or the French Baccalauréat. It teaches the British-style international qualifications listed on this page, and the IB one-to-one.',
    faqs: [
      {
        question: 'Does Marlbridge have a centre in the UAE?',
        answer:
          'No. Marlbridge has no office, branch or teacher based in the UAE. Every class is taught live online by a named subject teacher from our academy in Lahore, Pakistan.',
      },
      {
        question: 'What time would classes be in the UAE?',
        answer:
          'The UAE is one hour behind Lahore all year, so a 5:00 pm class in Dubai or Abu Dhabi is 6:00 pm in Lahore. After-school and weekend times are agreed with the teacher before the first class.',
      },
      {
        question: 'Can my child be taught for Pearson Edexcel International GCSE or International A Level?',
        answer:
          'Yes. Pearson Edexcel International GCSE and International A Level subjects are taught, alongside Cambridge IGCSE and A Level, OxfordAQA and AQA. Each subject page names the exact specification code it is taught against.',
      },
      {
        question: 'Is IB tuition available in the UAE?',
        answer:
          'IB Diploma and MYP tuition is one-to-one only. A fixed IB fee is published for Pakistan only; for the UAE, Marlbridge confirms the IB fee in writing when you enquire.',
      },
    ],
  },
  {
    slug: 'qatar',
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
      { path: '/boards/cambridge/a-level/ict/', label: 'Cambridge A Level ICT' },
      { path: '/boards/edexcel/a-level/physics/', label: 'Pearson Edexcel A Level Physics' },
      { path: '/boards/aqa/a-level/english-language/', label: 'AQA A Level English Language' },
    ],
    notOffered:
      'Marlbridge does not teach the Qatari national curriculum, the Indian CBSE or ICSE curricula, or the American curriculum and Advanced Placement (AP). It teaches the British-style international qualifications listed on this page, and the IB one-to-one.',
    faqs: [
      {
        question: 'Does Marlbridge have a centre in Qatar?',
        answer:
          'No. Marlbridge has no office, branch or teacher based in Qatar. Every class is taught live online by a named subject teacher from our academy in Lahore, Pakistan.',
      },
      {
        question: 'What time would classes be in Qatar?',
        answer:
          'Qatar is two hours behind Lahore all year, so a 5:00 pm class in Doha is 7:00 pm in Lahore. After-school and weekend times are agreed with the teacher before the first class.',
      },
      {
        question: 'My child is in an IB school in Doha. Can Marlbridge help?',
        answer:
          'IB Diploma tuition is available one-to-one in the subjects listed on the IB board page, and MYP tuition in Mathematics, Sciences and Language Acquisition. Some IB subject pages, such as MYP Individuals and Societies, have free study resources but no classes at the moment. The IB fee for Qatar is confirmed in writing when you enquire.',
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
          'Malaysia is three hours ahead of Lahore all year, so a 5:00 pm class in Kuala Lumpur is 2:00 pm in Lahore, well within the Lahore teaching day. Times are agreed with the teacher before the first class.',
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
];

export const marketBySlug = (slug: MarketSlug): Market | undefined => MARKETS.find((m) => m.slug === slug);
