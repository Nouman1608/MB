/**
 * MARLBRIDGE v1.x CLOSURE — WS2.
 *
 * Single typed source of truth for every public fee claim, FAQ answer and
 * pricing structured-data statement across the site. Every page that shows
 * a price MUST read from here — nothing hard-codes a number anywhere else.
 *
 * Source: current Learners Academy pricing model, owner-approved for
 * publication under the Marlbridge name (business-scope decision, v1.x
 * CLOSURE prompt, 20 August 2026). Learners Academy is approved ONLY as
 * evidence for pricing and faculty information — its academic taxonomy,
 * results, testimonials or unsupported claims are NOT imported.
 *
 * Qualification mapping (owner-approved):
 *   - GCSE, International GCSE (IGCSE) and Cambridge O Level all use the
 *     IGCSE fee tier.
 *   - International AS, AS and A Level all use the A Level fee tier.
 * All fees are per subject, per month.
 */

import { FX_RATES, fxRateDate, fxRateNote } from './fx-policy.ts';

/** Date the owner-set GROUP fees (REGION_PRICING rows without a status) were
 * last confirmed. It is the group section's date, not the page's: the page
 * date is PRICING_LAST_VERIFIED, derived at the foot of this file (D-517). */
export const PRICING_VERIFIED_DATE = '2026-08-20';

export type FeeTier = 'igcse' | 'a-level';

/** Which Marlbridge qualification labels map to which fee tier. Anything
 * not listed here (SAT, IELTS, Academic Support) has no fixed per-subject
 * fee and must route to an enquiry, never a fabricated number. IB has its
 * own fixed per-class rate (see IB_PRICING below) but is deliberately not
 * folded into this per-subject-per-month tier system -- its pricing shape
 * is genuinely different, not just a missing entry here. */
export const QUALIFICATION_TIER: Record<string, FeeTier> = {
  'gcse': 'igcse',
  'igcse': 'igcse',
  'o-level': 'igcse',
  'international-as': 'a-level',
  'as-level': 'a-level',
  'a-level': 'a-level',
};

/**
 * D-297 -- every published fee says what kind of figure it is.
 *   'confirmed'  -- set directly by the owner in that currency. Shown as
 *                   "Set by Marlbridge" (PRICE_STATUS_LABEL). Never described
 *                   as a conversion or tied to an exchange-rate date.
 *   'indicative' -- a currency conversion of the owner-set Pakistan rate
 *                   (FX_RATES in src/data/fx-policy.ts), shown so families
 *                   can see the approximate cost in their own currency; the
 *                   exact fee is confirmed on enquiry. Always labelled as
 *                   such wherever it is shown.
 *
 * D-517 (owner, 22 Nov 2026) -- which rows are which:
 *   group       set: Pakistan, Saudi Arabia, UAE, Qatar, Kuwait, Bahrain,
 *               Oman, UK, Europe. Indicative: Malaysia, Singapore, US dollars.
 *   one-to-one  set: Pakistan and US dollars. Indicative: every other row.
 *   IB, AP, OCR, OxfordAQA Islamiyat / Pakistan Studies (one-to-one only)
 *               set: Pakistan and US dollars. Indicative: every other row.
 */
export type PriceStatus = 'confirmed' | 'indicative';

export interface RegionPricing {
  readonly region: string;
  readonly currency: string;
  readonly symbol: string;
  readonly igcse: number;
  readonly aLevel: number;
  /** Omitted means 'confirmed'. */
  readonly status?: PriceStatus;
}

export const priceStatus = (r: RegionPricing): PriceStatus => r.status ?? 'confirmed';
export const isIndicative = (r: RegionPricing): boolean => priceStatus(r) === 'indicative';

/** D-517 -- the words shown for each status, the same in every fee table. */
export const PRICE_STATUS_LABEL: Readonly<Record<PriceStatus, string>> = {
  confirmed: 'Set by Marlbridge',
  indicative: 'Indicative',
};
export const statusLabel = (r: { readonly status?: PriceStatus }): string => PRICE_STATUS_LABEL[r.status ?? 'confirmed'];
/** The same two labels for use inside a sentence or beside a figure. */
export const PRICE_STATUS_INLINE: Readonly<Record<PriceStatus, string>> = {
  confirmed: 'set by Marlbridge',
  indicative: 'indicative',
};
export const statusInline = (r: { readonly status?: PriceStatus }): string => PRICE_STATUS_INLINE[r.status ?? 'confirmed'];

/** D-517 -- what the two labels mean for a parent, in one line. */
export const PRICE_STATUS_EXPLAINER =
  '"Set by Marlbridge" means the fee is fixed in that currency, and it is the amount you are invoiced. "Indicative" means the amount is a guide in your currency, converted from a set fee; what you are invoiced may differ slightly with the exchange rate.';

/** D-297 -- the one explanation shown next to any indicative figure.
 * D-517 -- says what it means for the invoice, and no longer reads as if it
 * covered every row outside Pakistan. */
export const INDICATIVE_NOTE =
  'Indicative: a guide in your currency, converted from the Pakistan fee. What you are invoiced may differ slightly with the exchange rate, and the exact fee is confirmed in writing before any payment.';

/** Monthly group fees by region. All rows are owner-set ('confirmed')
 * except Malaysia, which the owner asked on 23 Sep 2026 to be shown as the
 * current PKR->MYR conversion of the Pakistan rate ('indicative', D-297).
 * Every other country is told to enquire. */
export const REGION_PRICING: readonly RegionPricing[] = [
  { region: 'Pakistan', currency: 'PKR', symbol: 'Rs', igcse: 19000, aLevel: 24000 },
  { region: 'Saudi Arabia', currency: 'SAR', symbol: 'SAR', igcse: 270, aLevel: 330 },
  { region: 'United Arab Emirates', currency: 'AED', symbol: 'AED', igcse: 270, aLevel: 330 },
  { region: 'Qatar', currency: 'QAR', symbol: 'QAR', igcse: 270, aLevel: 330 },
  { region: 'Kuwait', currency: 'KWD', symbol: 'KWD', igcse: 22.5, aLevel: 27.5 },
  { region: 'Bahrain', currency: 'BHD', symbol: 'BHD', igcse: 27.5, aLevel: 33.5 },
  { region: 'Oman', currency: 'OMR', symbol: 'OMR', igcse: 28.0, aLevel: 34.0 },
  { region: 'United Kingdom', currency: 'GBP', symbol: '£', igcse: 60, aLevel: 75 },
  { region: 'Europe', currency: 'EUR', symbol: '€', igcse: 70, aLevel: 90 },
  // D-297 -- Rs 19,000 / Rs 24,000 at 68.01 PKR per MYR (FX_RATES, 2026-09-23).
  { region: 'Malaysia', currency: 'MYR', symbol: 'RM', igcse: 279, aLevel: 353, status: 'indicative' },
  // D-416 -- owner, 10 Oct 2026: Singapore dollar prices for /singapore/.
  // Rs 19,000 / Rs 24,000 at 216.20 PKR per SGD (FX_RATES, 2026-10-05).
  { region: 'Singapore', currency: 'SGD', symbol: 'S$', igcse: 88, aLevel: 111, status: 'indicative' },
  // D-311 -- owner, 24 Sep 2026: "use the USD price" for every country
  // without a set fee. Rs 19,000 / Rs 24,000 at 276.97 PKR per USD
  // (FX_RATES, 2026-09-24), rounded to whole dollars.
  { region: 'Other countries', currency: 'USD', symbol: 'US$', igcse: 69, aLevel: 87, status: 'indicative' },
] as const;

/**
 * IB tuition (Diploma Programme and Middle Years Programme) has a
 * structurally different pricing shape from REGION_PRICING/FeeTier above:
 * it is charged per class (not per subject per month), delivered
 * one-to-one only (no group option), and a confirmed rate exists for
 * Pakistan only. Owner confirmed directly in chat, 2026-08-22 (see
 * docs/decision-log.md D-009). Deliberately NOT folded into
 * REGION_PRICING -- doing so would either fabricate IB rates for the
 * other eight regions or misrepresent a per-class rate as a per-month one.
 */
export const IB_PRICING = {
  region: 'Pakistan',
  currency: 'PKR',
  symbol: 'Rs',
  // D-311 -- owner, 24 Sep 2026: "IB classes will be one to one only and the
  // charges are Rs 6000 per class, 1 hour class each" (was Rs 5,000, D-009).
  perClass: 6000,
  unit: 'per 1-hour class',
  deliveryMode: 'One-to-one only, 1 hour per class. There is no group option for IB.',
  unsupportedRegionNote: 'The Pakistan and US dollar IB fees are set by Marlbridge. IB fees in the other listed currencies are indicative conversions of the Pakistan fee; countries without their own row pay the US dollar IB price. The exact fee is confirmed in writing before any payment.',
  verifiedDate: '2026-09-24',
} as const;

export interface IbConversion {
  readonly region: string;
  readonly currency: string;
  readonly symbol: string;
  readonly perClass: number;
  /** D-517: 'confirmed' only for an owner-set row (the US dollar AP/OCR fee). */
  readonly status: PriceStatus;
}

/**
 * D-311 -- the owner asked (24 Sep 2026) for the Pakistan IB fee to be
 * converted for other regions. Every row is an indicative conversion of
 * IB_PRICING.perClass at the FX_RATES snapshot (src/data/fx-policy.ts),
 * rounded like formatFee (whole units; 3 decimals for KWD/BHD/OMR).
 * validate-fx-policy.mjs [2f] fails the build if any row drifts from what
 * FX_RATES implies.
 */
export const IB_CONVERSIONS: readonly IbConversion[] = [
  { region: 'Saudi Arabia', currency: 'SAR', symbol: 'SAR', perClass: 81, status: 'indicative' },
  { region: 'United Arab Emirates', currency: 'AED', symbol: 'AED', perClass: 79, status: 'indicative' },
  { region: 'Qatar', currency: 'QAR', symbol: 'QAR', perClass: 79, status: 'indicative' },
  { region: 'Kuwait', currency: 'KWD', symbol: 'KWD', perClass: 6.660, status: 'indicative' },
  { region: 'Bahrain', currency: 'BHD', symbol: 'BHD', perClass: 8.124, status: 'indicative' },
  { region: 'Oman', currency: 'OMR', symbol: 'OMR', perClass: 8.310, status: 'indicative' },
  { region: 'United Kingdom', currency: 'GBP', symbol: '£', perClass: 16, status: 'indicative' },
  { region: 'Europe', currency: 'EUR', symbol: '€', perClass: 19, status: 'indicative' },
  { region: 'Malaysia', currency: 'MYR', symbol: 'RM', perClass: 88, status: 'indicative' },
  { region: 'Singapore', currency: 'SGD', symbol: 'S$', perClass: 28, status: 'indicative' },
] as const;

/**
 * D-313 -- owner, 24 Sep 2026: IB for "Other countries" is priced in US
 * dollars directly (not converted): MYP US$22, Diploma Programme US$25 per
 * 1-hour one-to-one class. Owner-set, so 'confirmed'.
 */
export const IB_USD_PRICING = {
  region: 'Other countries',
  currency: 'USD',
  symbol: 'US$',
  myp: 22,
  dp: 25,
  unit: 'per 1-hour one-to-one class',
  status: 'confirmed' as PriceStatus,
  verifiedDate: '2026-09-24',
} as const;

export const ibConversionFor = (region: string): IbConversion | undefined =>
  IB_CONVERSIONS.find((r) => r.region === region);

/**
 * D-335 -- owner, 25 Sep 2026: OCR courses, and OxfordAQA Islamiyat and
 * Pakistan Studies, are taught but "only one to one classes are being
 * offered and the one to one charges would be Rs 6,000 per class, you can
 * do the conversions in other currencies". No group option for these.
 *
 * D-517 -- owner, 22 Nov 2026: the Pakistan and US dollar fees are set by
 * Marlbridge (the US dollar fee was shown as indicative until then). Every
 * other row is an indicative conversion of Rs 6,000 at the FX_RATES snapshot
 * (src/data/fx-policy.ts); validate-fx-policy.mjs [2g] checks each row.
 */
export const ONE_TO_ONE_ONLY_PRICING = {
  region: 'Pakistan',
  currency: 'PKR',
  symbol: 'Rs',
  perClass: 6000,
  unit: 'per class',
  // D-391 -- owner, 5 Oct 2026: "only one to one classes will be offered with Rs 6000 per class" for AP.
  courses: 'AP courses, OCR courses, and OxfordAQA Islamiyat and Pakistan Studies',
  deliveryMode: 'One-to-one only. There is no group option for these courses, and the multi-subject and sibling discounts do not apply.',
  verifiedDate: '2026-09-25',
} as const;

export const ONE_TO_ONE_ONLY_CONVERSIONS: readonly IbConversion[] = [
  { region: 'Saudi Arabia', currency: 'SAR', symbol: 'SAR', perClass: 81, status: 'indicative' },
  { region: 'United Arab Emirates', currency: 'AED', symbol: 'AED', perClass: 79, status: 'indicative' },
  { region: 'Qatar', currency: 'QAR', symbol: 'QAR', perClass: 79, status: 'indicative' },
  { region: 'Kuwait', currency: 'KWD', symbol: 'KWD', perClass: 6.660, status: 'indicative' },
  { region: 'Bahrain', currency: 'BHD', symbol: 'BHD', perClass: 8.124, status: 'indicative' },
  { region: 'Oman', currency: 'OMR', symbol: 'OMR', perClass: 8.310, status: 'indicative' },
  { region: 'United Kingdom', currency: 'GBP', symbol: '£', perClass: 16, status: 'indicative' },
  { region: 'Europe', currency: 'EUR', symbol: '€', perClass: 19, status: 'indicative' },
  { region: 'Malaysia', currency: 'MYR', symbol: 'RM', perClass: 88, status: 'indicative' },
  { region: 'Singapore', currency: 'SGD', symbol: 'S$', perClass: 28, status: 'indicative' },
  { region: 'Other countries', currency: 'USD', symbol: 'US$', perClass: 22, status: 'confirmed' },
] as const;

/** D-338 -- one short line for pages that list OCR or OxfordAQA among the
 * boards taught next to group fees (UK page, GCSE/A Level/IGCSE programmes),
 * so a family on those courses is not quoted a group format that does not exist. */
export const ONE_TO_ONE_ONLY_NOTE = `${'OCR courses, and OxfordAQA Islamiyat and Pakistan Studies'}, are taught one-to-one only (no group option); the multi-subject and sibling discounts do not apply.`;

export const oneToOneOnlyConversionFor = (region: string): IbConversion | undefined =>
  ONE_TO_ONE_ONLY_CONVERSIONS.find((r) => r.region === region);

/** Board + subject slugs taught one-to-one only (D-335). */
const ONE_TO_ONE_ONLY_BOARDS: readonly string[] = ['ocr'];
const ONE_TO_ONE_ONLY_BOARD_SUBJECTS: Readonly<Record<string, readonly string[]>> = {
  oxfordaqa: ['islamiyat', 'pakistan-studies'],
};
export function isOneToOneOnlyCourse(boardSlug: string, subjectSlug: string): boolean {
  return ONE_TO_ONE_ONLY_BOARDS.includes(boardSlug) || (ONE_TO_ONE_ONLY_BOARD_SUBJECTS[boardSlug]?.includes(subjectSlug) ?? false);
}

/**
 * One-to-one (1:1) class pricing for IGCSE and A Level tiers -- a separate
 * per-class, one-to-one-only rate distinct from REGION_PRICING above (which
 * is per subject, per month, and does not assume 1:1 delivery). Owner
 * confirmed the Pakistan rate directly in chat, 2026-08-23 (Rs 3,500/class
 * IGCSE, Rs 4,000/class A Level; see docs/decision-log.md D-012).
 *
 * IMPORTANT -- unlike IB_PRICING, the owner explicitly authorized computing
 * real currency conversions for the other eight regions here (rather than
 * requiring a separate confirmed rate for each). Only the Pakistan row below
 * is an owner-set rate; the other eight rows are currency conversions of
 * that same Pakistan rate, computed from live PKR exchange rates fetched
 * from open.er-api.com (exchangerate-api.com), rate date 2026-08-22, applied
 * 2026-08-23. SAR/AED/QAR/GBP/EUR are rounded to the nearest whole unit;
 * KWD/BHD/OMR keep 3-decimal precision (see THREE_DECIMAL_CURRENCIES below),
 * consistent with how those three currencies are already handled elsewhere
 * in this file. These converted rows are NOT independently-set regional
 * rates the way REGION_PRICING's rows are -- see ONE_TO_ONE_TERMS.conversionNote.
 */
export const ONE_TO_ONE_PRICING: readonly RegionPricing[] = [
  { region: 'Pakistan', currency: 'PKR', symbol: 'Rs', igcse: 3500, aLevel: 4000 },
  { region: 'Saudi Arabia', currency: 'SAR', symbol: 'SAR', igcse: 49, aLevel: 56, status: 'indicative' },
  { region: 'United Arab Emirates', currency: 'AED', symbol: 'AED', igcse: 48, aLevel: 54, status: 'indicative' },
  { region: 'Qatar', currency: 'QAR', symbol: 'QAR', igcse: 47, aLevel: 54, status: 'indicative' },
  { region: 'Kuwait', currency: 'KWD', symbol: 'KWD', igcse: 3.773, aLevel: 4.312, status: 'indicative' },
  { region: 'Bahrain', currency: 'BHD', symbol: 'BHD', igcse: 4.872, aLevel: 5.568, status: 'indicative' },
  { region: 'Oman', currency: 'OMR', symbol: 'OMR', igcse: 4.984, aLevel: 5.696, status: 'indicative' },
  { region: 'United Kingdom', currency: 'GBP', symbol: '£', igcse: 9, aLevel: 11, status: 'indicative' },
  { region: 'Europe', currency: 'EUR', symbol: '€', igcse: 11, aLevel: 12, status: 'indicative' },
  // D-297 -- Rs 3,500 / Rs 4,000 at 68.01 PKR per MYR (FX_RATES, 2026-09-23).
  { region: 'Malaysia', currency: 'MYR', symbol: 'RM', igcse: 51, aLevel: 59, status: 'indicative' },
  // D-416 -- Rs 3,500 / Rs 4,000 at 216.20 PKR per SGD (FX_RATES, 2026-10-05).
  { region: 'Singapore', currency: 'SGD', symbol: 'S$', igcse: 16, aLevel: 19, status: 'indicative' },
  // D-313 -- owner-set US dollar one-to-one rate, 24 Sep 2026 (US$13 IGCSE,
  // US$15 A Level); replaces the D-311 conversion (13 / 14).
  { region: 'Other countries', currency: 'USD', symbol: 'US$', igcse: 13, aLevel: 15 },
] as const;

export const ONE_TO_ONE_TERMS = {
  unit: 'per class',
  deliveryMode: 'One-to-one only -- these rates are not available as group tuition.',
  /** Date the Pakistan one-to-one fee was confirmed (D-012). */
  verifiedDate: '2026-08-23',
  /** Date the owner set the US dollar one-to-one fee (D-313). */
  usdVerifiedDate: '2026-09-24',
  /** Date of the exchange rates used for the first conversions (Gulf, UK and
   * Europe rows, D-012). Those rates were not recorded; FX_RATES holds the
   * 2026-08-26 snapshot the rows are checked against. */
  firstConversionRateDate: '2026-08-22',
  // D-517: the rate sources and dates are no longer written into this
  // sentence; ONE_TO_ONE_RATE_NOTE below builds them from the data.
  conversionNote: 'Of the one-to-one fees, the Pakistan and US dollar rates are set by Marlbridge. The one-to-one figures for the other regions are indicative currency conversions of the Pakistan rate. They are not independently published regional rates, are refreshed as exchange rates move, and the exact fee is confirmed in writing before any payment.',
  notPermanentNote: 'These fees are reviewed periodically and are not guaranteed to remain unchanged.',  // D-349 (R-01): no "date above/below"; each page prints its own dated line next to this note.
} as const;

export const PRICING_TERMS = {
  unit: 'per subject, per month',
  multiSubjectDiscount: { minSubjects: 3, percentOff: 20 },
  /** D-332 -- owner, 25 Sep 2026: no cap on the number of siblings. Every
   * enrolled brother or sister gets 10% off their own group fees (D-331 item
   * 22). The old `maxSiblings: 2` ("up to 2 siblings") was removed so no page
   * can print a cap the owner never set. `summary` is the one English wording
   * every page uses; translations mirror it in their own copy objects. */
  siblingDiscount: {
    percentOff: 10,
    summary: "10% off each enrolled sibling's own group fees. Every brother or sister enrolled in group classes gets it, however many children are enrolled.",
  },
  /** Owner confirmed directly in chat, 2026-08-26 (docs/decision-log.md D-043): the
   * multi-subject and sibling discounts combine (stack) for a family that qualifies
   * for both -- they are not mutually exclusive. Both discounts apply to group
   * classes only, never to one-to-one tuition (already stated separately in the
   * one-to-one FAQ answer below). */
  discountsStack: true,
  /** Post-v2.0 Quality Closure WS9 (2026-08-30): the arithmetic for a family
   * that qualifies for BOTH discounts at once was not previously recorded
   * anywhere -- only the fact that they stack (D-043) was. Owner directly
   * confirmed (in this session, via a multiple-choice question presenting
   * both options with a worked example) that the two discounts are ADDED
   * together and applied once, not applied successively to an
   * already-discounted amount. For a family qualifying for both: combined
   * discount = multiSubjectDiscount.percentOff + siblingDiscount.percentOff
   * (20 + 10 = 30%), applied as a single 30% reduction -- NOT
   * (1 - 0.20) * (1 - 0.10) = 28%. Both remain group-classes-only per
   * D-043; see discountCombinationExample below for the published worked
   * example and formatFee/feeFor for the actual per-region numbers this is
   * computed from. */
  discountCombinationMethod: 'additive' as const,
  /** D-296 -- owner confirmed 23 Sep 2026 that the trial is a free real
   * teaching class ("demo" undersold that). */
  freeTrial: 'The first trial class is free.',
  // D-297 -- the old second sentence ("No currency conversion is applied on
  // your behalf") sat next to tables that do contain labelled conversions.
  // D-311 -- countries without their own row now see the US dollar row
  // (an indicative conversion), per the owner's 24 Sep 2026 instruction.
  // D-517 -- "The group figures" read as every group figure on the page; only
  // the US dollar group fee is meant. The AP/OCR US dollar fee is now set too.
  unsupportedRegionNote: 'Families in countries without their own row use the US dollar prices ("Other countries"). The US dollar group fee is an indicative conversion of the Pakistan fee; the US dollar one-to-one, IB, AP and OCR prices are set by Marlbridge. The exact fee is confirmed in writing before any payment.',
  notPermanentNote: 'These fees are reviewed periodically and are not guaranteed to remain unchanged.',  // D-349 (R-01): see ONE_TO_ONE_TERMS.notPermanentNote.
  /** Owner confirmed directly in chat, 2026-08-26 (D-043). Group-class length/frequency
   * is a fixed format; one-to-one length is fixed but the number of classes taken is
   * left to the student/family, so no fixed frequency is stated for it. */
  classFormat: {
    group: '45 to 50 minutes per class, 3 classes a week, per subject.',
    oneToOne: '1 hour per class. How many classes you take is up to you.',
  },
  /** Owner confirmed directly in chat, 2026-08-26 (D-043).
   * D-517 -- owner, 22 Nov 2026: group tuition is billed per subject per
   * month; one-to-one is billed per class. "Fees are billed monthly" was true
   * of group classes only and sat on pages that also sell one-to-one. */
  billing: 'Group tuition is billed per subject, per month. One-to-one tuition is billed per class. Billing starts once your free trial class has taken place.',
  /** The same rule for a place that is about one format only. */
  billingByFormat: {
    group: 'Group tuition is billed per subject, per month, starting once your free trial class has taken place.',
    oneToOne: 'One-to-one tuition is billed per class, starting once your free trial class has taken place.',
  },
  paymentMethods: ['bank transfer', 'international wire transfer'] as readonly string[],
  /** D-296 -- no longer says "the fee shown above": the sentence also appears
   * on pages that show no fee (home, tutoring, trial, programme pages). */
  enrolmentFee: 'There is no separate registration or enrolment fee — the tuition fee is the only cost.',
  cancellationPolicy: "You can cancel or pause at any time. The month you've already paid for isn't refunded, but you won't be billed again once you cancel.",
  /** D-522 -- owner, 23 Nov 2026: the "month you've already paid for" sentence
   * is about monthly billing, so it does not belong beside one-to-one tuition,
   * which is billed per class. This is the part that holds for one-to-one. */
  cancellationPolicyOneToOne: 'You can cancel or pause at any time.',
  /**
   * Owner confirmed directly in chat, 2026-09-06 (see docs/decision-log.md
   * D-149). Three service facts that were previously stated nowhere on the
   * site, added here rather than written inline on any page so that every
   * surface quotes one reviewed wording.
   *
   * `maxGroupSize` is a published ceiling, not a target: it is the number a
   * family is entitled to hold Marlbridge to, so it must never be raised in
   * this file without the owner re-confirming it.
   */
  maxGroupSize: 15,
  /**
   * What the free trial actually is. Owner confirmed 2026-09-06: the trial
   * mirrors the format the student is considering rather than being a
   * separate fixed-length session -- so its duration is deliberately derived
   * from `classFormat` above rather than restated as its own number, which
   * would be a second source of truth able to drift from the first.
   */
  trialFormat: {
    group: 'If you are considering group tuition, the trial is a real group class -- same length and same teacher as the classes that follow.',
    oneToOne: 'If you are considering one-to-one tuition, the trial is an individual class with the teacher.',
    summary: 'The free trial runs in whichever format you are considering: a real group class, or an individual one-to-one class.',
  },
  /**
   * Response commitment. D-337 -- owner, 27 Sep 2026: WhatsApp within one
   * hour between 9am and 10pm Pakistan time, email the same day. Replaces
   * the D-149 / 2026-09-06 promise (email two working days, WhatsApp one),
   * which read as slow to a parent comparing tutors the same evening. The
   * hours window is stated so an overnight message does not create a promise
   * nobody is rostered to keep.
   * D-346 -- owner, 27 Sep 2026: the window is 8am to 11pm Pakistan time,
   * every day (answers audit N-05, which asked which days it covers).
   */
  enquiryResponse: {
    whatsappReplyHours: 1,
    whatsappHoursPkt: '8am to 11pm, every day',
    summary: 'We reply to WhatsApp messages within an hour, between 8am and 11pm Pakistan time every day, and to email enquiries the same day.',
    short: 'WhatsApp replies within an hour (8am–11pm Pakistan time, every day); email the same day.',
  },
  /** D-332 -- owner, 25 Sep 2026: group class times are arranged per group
   * (agreed with the families in it) and confirmed before the trial.
   * D7 (owner, audit round 3, 25 Nov 2026): the old `teacherAvailability`
   * sentence ("Teachers are available 24 hours a day, 7 days a week ...", D-311)
   * is retired site-wide; pages state the real reply hours (enquiryResponse). */
  groupClassTimes: "Group class times are agreed with the families in each group, and we confirm them in the time zone of the country you give us before the trial.",
  /** D-331 item 24 / D-332 -- owner: no notice period is needed to move a
   * confirmed trial class. Published on /trial/ (FAQ and success panel). */
  trialReschedule: 'Yes. To move a confirmed trial class, reply to our email or message us on WhatsApp. No notice period is needed.',
  /** Date the three fields above were confirmed by the owner. */
  serviceTermsVerifiedDate: '2026-09-06',
} as const;

/** Currencies conventionally quoted to 3 decimal places (KWD, BHD, OMR use
 * fils/baisa subunits at 1/1000, not 1/100 like most currencies) -- the
 * approved rate sheet itself writes these as e.g. "22.500", so that exact
 * precision is preserved rather than stripped. */
export const THREE_DECIMAL_CURRENCIES = new Set(['KWD', 'BHD', 'OMR']);

/** Format a fee amount without inventing precision the source data doesn't have. */
export function formatFee(amount: number, currency?: string): string {
  if (currency && THREE_DECIMAL_CURRENCIES.has(currency)) {
    return amount.toFixed(3);
  }
  return Number.isInteger(amount) ? amount.toLocaleString('en-US') : amount.toString();
}

export function feeFor(region: RegionPricing, tier: FeeTier): number {
  return tier === 'igcse' ? region.igcse : region.aLevel;
}

/** The combined percentage off when a family qualifies for both the
 * multi-subject and the sibling discount at once. Computed from the two
 * approved percentages rather than hard-coded, so it can never drift out of
 * sync with PRICING_TERMS.multiSubjectDiscount/siblingDiscount if either is
 * ever revised. See PRICING_TERMS.discountCombinationMethod's doc comment
 * for the owner decision this implements (additive, not successive). */
export function combinedDiscountPercent(): number {
  return PRICING_TERMS.multiSubjectDiscount.percentOff + PRICING_TERMS.siblingDiscount.percentOff;
}

/** A concrete, real-numbers worked example for the pricing page and FAQ:
 * a family taking `exampleSubjectCount` IGCSE-tier subjects in Pakistan
 * (the region with a directly owner-set, non-converted rate) who also
 * qualify for the sibling discount. Every number here is derived from
 * REGION_PRICING/PRICING_TERMS, not restated as a separate literal, so the
 * example can never silently drift from the real fee data. */
export function discountWorkedExample() {
  const region = REGION_PRICING.find((r) => r.region === 'Pakistan')!;
  const subjectCount = Math.max(PRICING_TERMS.multiSubjectDiscount.minSubjects, 3);
  const perSubject = region.igcse;
  const beforeDiscount = perSubject * subjectCount;
  const combinedPercent = combinedDiscountPercent();
  const afterDiscount = Math.round(beforeDiscount * (1 - combinedPercent / 100));
  return {
    region: region.region,
    currency: region.currency,
    subjectCount,
    perSubject,
    beforeDiscount,
    combinedPercent,
    afterDiscount,
  };
}

/**
 * D-517 -- exchange-rate source and date lines, shown beside INDICATIVE rows
 * only. Built from FX_RATES (src/data/fx-policy.ts), the one record of each
 * rate's date, so no page restates a date.
 */
const indicativeCurrencies = (rows: readonly { readonly currency: string; readonly status?: PriceStatus }[]): string[] =>
  rows.filter((r) => r.status === 'indicative').map((r) => r.currency);
/** Group table: Malaysia, Singapore and US dollar rows. */
export const GROUP_RATE_NOTE = fxRateNote(indicativeCurrencies(REGION_PRICING));
/** One-to-one table. The Gulf, UK and Europe rows were converted at the
 * 2026-08-22 rates (ONE_TO_ONE_TERMS.firstConversionRateDate). */
export const ONE_TO_ONE_RATE_NOTE = fxRateNote(
  indicativeCurrencies(ONE_TO_ONE_PRICING),
  Object.fromEntries(FX_RATES.filter((r) => !r.asOf).map((r) => [r.currency, ONE_TO_ONE_TERMS.firstConversionRateDate])),
);
/** IB table, and the AP / OCR / OxfordAQA one-to-one-only table. */
export const IB_RATE_NOTE = fxRateNote(indicativeCurrencies(IB_CONVERSIONS));
export const ONE_TO_ONE_ONLY_RATE_NOTE = fxRateNote(indicativeCurrencies(ONE_TO_ONE_ONLY_CONVERSIONS));

/**
 * D-517 -- every dated fact on the pricing page, one entry per fact. The
 * page-level "last verified" is the latest of them, so it can never be older
 * than a section it sits above. Nothing here is a new verification: each
 * value is read from the record that already held it.
 */
export const PRICING_DATES: Readonly<Record<string, string>> = {
  'group fees set by Marlbridge': PRICING_VERIFIED_DATE,
  'Pakistan one-to-one fee': ONE_TO_ONE_TERMS.verifiedDate,
  'US dollar one-to-one fee': ONE_TO_ONE_TERMS.usdVerifiedDate,
  'IB fee': IB_PRICING.verifiedDate,
  'US dollar IB fee': IB_USD_PRICING.verifiedDate,
  'AP, OCR and OxfordAQA one-to-one fee': ONE_TO_ONE_ONLY_PRICING.verifiedDate,
  'first one-to-one conversion rates': ONE_TO_ONE_TERMS.firstConversionRateDate,
  ...Object.fromEntries(FX_RATES.map((r) => [`${r.currency} exchange rate`, fxRateDate(r.currency)])),
};
/** ISO dates sort as text, so the last one is the most recent. */
export const PRICING_LAST_VERIFIED: string = Object.values(PRICING_DATES).sort().at(-1)!;
