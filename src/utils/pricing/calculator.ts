/**
 * D-330 (2026-09-25) -- the fee calculator on /pricing/.
 *
 * Pure functions over the canonical pricing data in src/data/pricing.ts: no
 * price, percentage or rounding rule is restated here. The page calls
 * `calculateFee` in the browser; src/utils/pricing/__tests__/calculator.test.mjs
 * checks it against the tables and the published worked example.
 *
 * Only rules the owner has confirmed are applied:
 *   - group fees are per subject, per month, at the IGCSE or A Level rate;
 *   - 20% off for 3 or more subjects, 10% sibling discount, added together
 *     (D-083), group classes only;
 *   - one-to-one, IB and the D-335 one-to-one-only courses are per class, never discounted.
 * Owner decisions of 25 Sep 2026 (D-331, register items 21 and 22):
 *   - IGCSE-rate and A-Level-rate subjects count together towards the
 *     3-subject discount (e.g. 2 IGCSE + 1 A Level gets 20% off);
 *   - with siblings, each enrolled child gets 10% off their own fees.
 * No personal information is asked for.
 */
import {
  REGION_PRICING, ONE_TO_ONE_PRICING, IB_PRICING, IB_USD_PRICING, PRICING_TERMS,
  ONE_TO_ONE_ONLY_PRICING, oneToOneOnlyConversionFor,
  THREE_DECIMAL_CURRENCIES, ibConversionFor, isIndicative, formatFee,
} from '../../data/pricing.ts';

export type Format = 'group' | 'one-to-one' | 'ib' | 'one-to-one-only';
export type Tier = 'igcse' | 'aLevel';

export interface CalcInput {
  region: string;
  format: Format;
  /** group: number of IGCSE/GCSE/O Level subjects and of AS/A Level subjects. */
  igcseSubjects?: number;
  aLevelSubjects?: number;
  /** group: a brother or sister is also enrolled in group classes. */
  sibling?: boolean;
  /** one-to-one: which rate. */
  tier?: Tier;
  /** ib: which programme (matters only for the US dollar price). */
  ibProgramme?: 'myp' | 'dp';
  /** one-to-one / ib: optional number of classes to total. */
  classes?: number;
}

export interface CalcLine { label: string; amount: number }
export interface CalcResult {
  ok: boolean;
  currency: string;
  /** e.g. 'per month' or 'per class' or 'for 8 classes' */
  period: string;
  lines: CalcLine[];
  subtotal: number;
  discountPercent: number;
  discountAmount: number;
  total: number;
  indicative: boolean;
  notes: string[];
  /** true when an unrecorded rule means the family should ask for a written quote. */
  needsQuote: boolean;
}

const clampInt = (n: unknown, max = 20): number => {
  const v = Math.floor(Number(n));
  return Number.isFinite(v) && v > 0 ? Math.min(v, max) : 0;
};

/** Round to the currency's precision: 3 decimals for KWD/BHD/OMR, whole units otherwise. */
export function roundFor(currency: string, amount: number): number {
  return THREE_DECIMAL_CURRENCIES.has(currency) ? Math.round(amount * 1000) / 1000 : Math.round(amount);
}

export const REGIONS: readonly string[] = REGION_PRICING.map((r) => r.region);

function empty(currency: string, period: string, notes: string[], needsQuote = true): CalcResult {
  return { ok: false, currency, period, lines: [], subtotal: 0, discountPercent: 0, discountAmount: 0, total: 0, indicative: false, notes, needsQuote };
}

export function calculateFee(input: CalcInput): CalcResult {
  const notes: string[] = [];

  if (input.format === 'group') {
    const row = REGION_PRICING.find((r) => r.region === input.region);
    if (!row) return empty('', 'per month', ['This region has no group-class price. Please ask us for a written quote.']);
    const n1 = clampInt(input.igcseSubjects);
    const n2 = clampInt(input.aLevelSubjects);
    const lines: CalcLine[] = [];
    if (n1) lines.push({ label: `${n1} × IGCSE / GCSE / O Level subject${n1 > 1 ? 's' : ''} at ${formatFee(row.igcse, row.currency)}`, amount: roundFor(row.currency, n1 * row.igcse) });
    if (n2) lines.push({ label: `${n2} × AS / A Level subject${n2 > 1 ? 's' : ''} at ${formatFee(row.aLevel, row.currency)}`, amount: roundFor(row.currency, n2 * row.aLevel) });
    const subtotal = roundFor(row.currency, n1 * row.igcse + n2 * row.aLevel);
    if (!lines.length) return empty(row.currency, 'per month', ['Choose at least one subject.'], false);

    let discountPercent = 0;
    const needsQuote = false;
    const total = n1 + n2;
    const { minSubjects, percentOff: multiPct } = PRICING_TERMS.multiSubjectDiscount;
    if (total >= minSubjects) {
      discountPercent += multiPct;
      notes.push(`${multiPct}% multi-subject discount: ${minSubjects} or more subjects taken together, at either level (IGCSE and A Level subjects count together).`);
    }
    if (input.sibling) {
      discountPercent += PRICING_TERMS.siblingDiscount.percentOff;
      notes.push(`${PRICING_TERMS.siblingDiscount.percentOff}% sibling discount, applied to this learner's fees. Each enrolled brother or sister also gets ${PRICING_TERMS.siblingDiscount.percentOff}% off their own fees, however many children are enrolled.`);
    }
    if (discountPercent > PRICING_TERMS.multiSubjectDiscount.percentOff && input.sibling) {
      notes.push('The two discounts are added together, not applied one after the other.');
    }
    const after = roundFor(row.currency, subtotal * (1 - discountPercent / 100));
    const indicative = isIndicative(row);
    if (indicative) notes.push('Indicative: a currency conversion of the Pakistan fee. The exact fee is confirmed in writing before any payment.');
    return { ok: true, currency: row.currency, period: 'per month', lines, subtotal, discountPercent, discountAmount: roundFor(row.currency, subtotal - after), total: after, indicative, notes, needsQuote };
  }

  if (input.format === 'one-to-one') {
    const row = ONE_TO_ONE_PRICING.find((r) => r.region === input.region);
    if (!row) return empty('', 'per class', ['This region has no one-to-one price. Please ask us for a written quote.']);
    const tier: Tier = input.tier === 'aLevel' ? 'aLevel' : 'igcse';
    const perClass = tier === 'aLevel' ? row.aLevel : row.igcse;
    const n = clampInt(input.classes, 200);
    const label = tier === 'aLevel' ? 'AS / A Level' : 'IGCSE / GCSE / O Level';
    const lines = [{ label: `One-to-one ${label}, 1-hour class`, amount: perClass }];
    notes.push('One-to-one classes are charged per class. The multi-subject and sibling discounts do not apply.');
    const indicative = isIndicative(row);
    if (indicative) notes.push('Indicative: a currency conversion of the Pakistan fee. The exact fee is confirmed in writing before any payment.');
    if (!n) return { ok: true, currency: row.currency, period: 'per class', lines, subtotal: perClass, discountPercent: 0, discountAmount: 0, total: perClass, indicative, notes, needsQuote: false };
    const total = roundFor(row.currency, perClass * n);
    lines.push({ label: `× ${n} class${n > 1 ? 'es' : ''}`, amount: total });
    return { ok: true, currency: row.currency, period: `for ${n} class${n > 1 ? 'es' : ''}`, lines, subtotal: total, discountPercent: 0, discountAmount: 0, total, indicative, notes, needsQuote: false };
  }

  // D-335: OCR courses and OxfordAQA Islamiyat / Pakistan Studies -- one-to-one only, per class, no discounts.
  if (input.format === 'one-to-one-only') {
    let currency = ONE_TO_ONE_ONLY_PRICING.currency as string;
    let perClass = ONE_TO_ONE_ONLY_PRICING.perClass as number;
    let indicative = false;
    if (input.region !== ONE_TO_ONE_ONLY_PRICING.region) {
      const conv = oneToOneOnlyConversionFor(input.region);
      if (!conv) return empty('', 'per class', ['There is no price for this region. Please ask us for a written quote.']);
      currency = conv.currency; perClass = conv.perClass; indicative = true;
    }
    notes.push(`${ONE_TO_ONE_ONLY_PRICING.courses}: ${ONE_TO_ONE_ONLY_PRICING.deliveryMode}`);
    if (indicative) notes.push('Indicative: a currency conversion of the Pakistan fee. The exact fee is confirmed in writing before any payment.');
    const lines = [{ label: 'One-to-one class', amount: perClass }];
    const n = clampInt(input.classes, 200);
    if (!n) return { ok: true, currency, period: 'per class', lines, subtotal: perClass, discountPercent: 0, discountAmount: 0, total: perClass, indicative, notes, needsQuote: false };
    const total = roundFor(currency, perClass * n);
    lines.push({ label: `× ${n} class${n > 1 ? 'es' : ''}`, amount: total });
    return { ok: true, currency, period: `for ${n} class${n > 1 ? 'es' : ''}`, lines, subtotal: total, discountPercent: 0, discountAmount: 0, total, indicative, notes, needsQuote: false };
  }

  // IB: one-to-one only, per class, no discounts.
  let currency = '';
  let perClass = 0;
  let indicative = false;
  if (input.region === IB_PRICING.region) { currency = IB_PRICING.currency; perClass = IB_PRICING.perClass; }
  else if (input.region === IB_USD_PRICING.region) { currency = IB_USD_PRICING.currency; perClass = input.ibProgramme === 'myp' ? IB_USD_PRICING.myp : IB_USD_PRICING.dp; }
  else {
    const conv = ibConversionFor(input.region);
    if (!conv) return empty('', 'per class', ['There is no IB price for this region. Please ask us for a written quote.']);
    currency = conv.currency; perClass = conv.perClass; indicative = true;
  }
  notes.push('IB is one-to-one only, 1 hour per class. The multi-subject and sibling discounts do not apply.');
  if (indicative) notes.push('Indicative: a currency conversion of the Pakistan IB fee. The exact fee is confirmed in writing before any payment.');
  const progLabel = input.ibProgramme === 'myp' ? 'IB MYP' : 'IB Diploma Programme';
  const lines = [{ label: `${progLabel}, 1-hour one-to-one class`, amount: perClass }];
  const n = clampInt(input.classes, 200);
  if (!n) return { ok: true, currency, period: 'per class', lines, subtotal: perClass, discountPercent: 0, discountAmount: 0, total: perClass, indicative, notes, needsQuote: false };
  const total = roundFor(currency, perClass * n);
  lines.push({ label: `× ${n} class${n > 1 ? 'es' : ''}`, amount: total });
  return { ok: true, currency, period: `for ${n} class${n > 1 ? 'es' : ''}`, lines, subtotal: total, discountPercent: 0, discountAmount: 0, total, indicative, notes, needsQuote: false };
}
