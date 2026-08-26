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

export interface RegionPricing {
  readonly region: string;
  readonly currency: string;
  readonly symbol: string;
  readonly igcse: number;
  readonly aLevel: number;
}

/** Countries/regions with a confirmed published rate. Every other country
 * must be told to enquire — no currency conversion is ever invented. */
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
  perClass: 5000,
  unit: 'per class',
  deliveryMode: 'One-to-one only -- no group tuition option for IB.',
  unsupportedRegionNote: 'No confirmed IB rate exists yet for regions outside Pakistan -- enquire and Marlbridge will confirm a fee.',
  verifiedDate: '2026-08-22',
} as const;

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
  { region: 'Saudi Arabia', currency: 'SAR', symbol: 'SAR', igcse: 49, aLevel: 56 },
  { region: 'United Arab Emirates', currency: 'AED', symbol: 'AED', igcse: 48, aLevel: 54 },
  { region: 'Qatar', currency: 'QAR', symbol: 'QAR', igcse: 47, aLevel: 54 },
  { region: 'Kuwait', currency: 'KWD', symbol: 'KWD', igcse: 3.773, aLevel: 4.312 },
  { region: 'Bahrain', currency: 'BHD', symbol: 'BHD', igcse: 4.872, aLevel: 5.568 },
  { region: 'Oman', currency: 'OMR', symbol: 'OMR', igcse: 4.984, aLevel: 5.696 },
  { region: 'United Kingdom', currency: 'GBP', symbol: '£', igcse: 9, aLevel: 11 },
  { region: 'Europe', currency: 'EUR', symbol: '€', igcse: 11, aLevel: 12 },
] as const;

export const ONE_TO_ONE_TERMS = {
  unit: 'per class',
  deliveryMode: 'One-to-one only -- these rates are not available as group tuition.',
  verifiedDate: '2026-08-23',
  conversionNote: 'Only the Pakistan rate above was directly set by Marlbridge. The other eight regions are currency conversions of that same Pakistan rate, computed from exchange rates dated 2026-08-22 (source: exchangerate-api.com) and applied 2026-08-23 -- they are not independently published regional rates and will be refreshed periodically as exchange rates move.',
  notPermanentNote: 'These fees are reviewed periodically and are not guaranteed to remain unchanged. The date above is when they were last confirmed or converted.',
} as const;

export const PRICING_TERMS = {
  unit: 'per subject, per month',
  multiSubjectDiscount: { minSubjects: 3, percentOff: 20 },
  siblingDiscount: { maxSiblings: 2, percentOff: 10 },
  /** Owner confirmed directly in chat, 2026-08-26 (docs/decision-log.md D-043): the
   * multi-subject and sibling discounts combine (stack) for a family that qualifies
   * for both -- they are not mutually exclusive. Both discounts apply to group
   * classes only, never to one-to-one tuition (already stated separately in the
   * one-to-one FAQ answer below). */
  discountsStack: true,
  freeTrial: 'The initial trial/demo class is free.',
  unsupportedRegionNote: 'Countries without a listed rate above are not priced automatically — enquire and Marlbridge will confirm a fee for your region. No currency conversion is applied on your behalf.',
  notPermanentNote: 'These fees are reviewed periodically and are not guaranteed to remain unchanged. The date below is when they were last confirmed.',
  /** Owner confirmed directly in chat, 2026-08-26 (D-043). Group-class length/frequency
   * is a fixed format; one-to-one length is fixed but the number of classes taken is
   * left to the student/family, so no fixed frequency is stated for it. */
  classFormat: {
    group: '45 to 50 minutes per class, 3 classes a week, per subject.',
    oneToOne: '1 hour per class. How many classes you take is up to you.',
  },
  /** Owner confirmed directly in chat, 2026-08-26 (D-043). */
  billing: 'Fees are billed monthly, starting once your free trial class has taken place.',
  paymentMethods: ['bank transfer', 'international wire transfer'] as readonly string[],
  enrolmentFee: 'There is no separate registration or enrolment fee — the fee shown above is the only cost.',
  cancellationPolicy: "You can cancel or pause at any time. The month you've already paid for isn't refunded, but you won't be billed again once you cancel.",
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
