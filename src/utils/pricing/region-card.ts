/**
 * D-457 (15 Nov 2026) -- the "fees for your region" card at the top of /pricing/.
 *
 * Pure functions over the canonical pricing data in src/data/pricing.ts. One
 * card per REGION_PRICING row: that region's group fees and its
 * ONE_TO_ONE_PRICING row, formatted exactly as the two tables on the page
 * format them (`formatFee` amount, then the ISO currency code), each with the
 * same indicative flag the table row carries. No amount, date, rounding rule
 * or note is restated here: the note is INDICATIVE_NOTE itself.
 *
 * src/components/tools/RegionFeeCard.astro renders the first card on the
 * server and embeds the full list as JSON for the region select, so the
 * browser never formats a fee. src/utils/pricing/__tests__/calculator.test.mjs
 * checks every card against the table rows.
 */
import {
  REGION_PRICING, ONE_TO_ONE_PRICING, INDICATIVE_NOTE, formatFee, isIndicative,
  type RegionPricing,
} from '../../data/pricing.ts';

/** One table row, as the card shows it. */
export interface RegionFeeBlock {
  /** GCSE / IGCSE / O Level amount with its currency code, e.g. "19,000 PKR". */
  igcse: string;
  /** AS / A Level amount with its currency code. */
  aLevel: string;
  /** True when the table row is marked "Indicative" (D-297). */
  indicative: boolean;
}

export interface RegionFeeCard {
  /** The REGION_PRICING region name: the value of the region select. */
  region: string;
  /** The row header as the tables print it, e.g. "United Arab Emirates (UAE)". */
  label: string;
  /** The wording in the region select, the same as the fee calculator's. */
  optionLabel: string;
  /** Group classes, per subject per month. */
  group: RegionFeeBlock;
  /** One-to-one classes, per class. Null if the region has no one-to-one row. */
  oneToOne: RegionFeeBlock | null;
  /** INDICATIVE_NOTE when either block is indicative, otherwise empty. */
  note: string;
}

const money = (amount: number, currency: string): string => `${formatFee(amount, currency)} ${currency}`;

const block = (row: RegionPricing): RegionFeeBlock => ({
  igcse: money(row.igcse, row.currency),
  aLevel: money(row.aLevel, row.currency),
  indicative: isIndicative(row),
});

export function regionFeeCard(row: RegionPricing): RegionFeeCard {
  const one = ONE_TO_ONE_PRICING.find((r) => r.region === row.region);
  const group = block(row);
  const oneToOne = one ? block(one) : null;
  return {
    region: row.region,
    label: row.region === 'United Arab Emirates' ? `${row.region} (UAE)` : row.region,
    optionLabel: row.region === 'Other countries' ? 'Another country (US dollars)' : row.region,
    group,
    oneToOne,
    note: group.indicative || oneToOne?.indicative ? INDICATIVE_NOTE : '',
  };
}

/** One card per group-fee row, in table order (Pakistan first). */
export const REGION_FEE_CARDS: readonly RegionFeeCard[] = REGION_PRICING.map(regionFeeCard);
