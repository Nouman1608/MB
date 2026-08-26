/**
 * MARLBRIDGE v1.x CLOSURE — WS8.
 *
 * FX-RATE POLICY.
 *
 * The one-to-one converted rates in ONE_TO_ONE_PRICING (src/data/pricing.ts)
 * are NOT independently-set regional prices. Only the Pakistan row of that
 * table is an owner-approved base rate; the other eight rows are currency
 * conversions of that same Pakistan PKR rate, applied once (2026-08-23) and
 * then left fixed as the site's published price until someone deliberately
 * revisits them (see ONE_TO_ONE_TERMS.conversionNote). That is a deliberate
 * choice, not an oversight: Marlbridge does not want its public fees moving
 * every time a currency market ticks, and every prior FX-conversion pass in
 * this repo's history has been a one-off, human-triggered event rather than
 * a live, request-time lookup.
 *
 * What was missing before this file existed: a typed, sourced record of
 * WHICH exchange rates produced the currently-published numbers, and an
 * automated way to notice when (a) that record is old enough that it should
 * be re-confirmed, or (b) the real world has moved far enough from it that
 * the published price is no longer a reasonable conversion and a human
 * needs to look at it. This file is that record; scripts/validate-fx-
 * policy.mjs is the automated check.
 *
 * THE POLICY, IN PLAIN TERMS:
 *   1. The PKR base rates (IB_PRICING.perClass, ONE_TO_ONE_PRICING's
 *      Pakistan row, REGION_PRICING's Pakistan row) are the only rates
 *      Marlbridge sets directly. They change ONLY when the owner explicitly
 *      approves a change, recorded in docs/decision-log.md. Nothing in this
 *      file, or any script that reads it, is permitted to alter them.
 *   2. FX_RATES below is a snapshot, not a live feed. It records the PKR
 *      value of one unit of each currency ONE_TO_ONE_PRICING converts to,
 *      as of FX_RATE_ASOF_DATE, from the named source. It exists so the
 *      conversion basis is inspectable and re-derivable, not so prices
 *      auto-update -- nothing in the build reads FX_RATES to compute a
 *      price shown on the site. Changing a displayed converted price is a
 *      content edit to pricing.ts, made deliberately, the same as any other
 *      fee change -- this file only tells you whether that edit is overdue.
 *   3. Two automated checks (scripts/validate-fx-policy.mjs) protect this
 *      policy:
 *        - Staleness: if today is more than FX_STALENESS_LIMIT_DAYS past
 *          FX_RATE_ASOF_DATE, the build fails until someone re-fetches
 *          current rates, updates FX_RATES and FX_RATE_ASOF_DATE, and
 *          records the refresh in the decision log -- even if no published
 *          price actually needs to change as a result.
 *        - Drift: if a currently-published ONE_TO_ONE_PRICING row has
 *          drifted more than FX_TOLERANCE_PERCENT from what FX_RATES would
 *          now produce, the build fails so a human decides whether to
 *          reprice that region -- the script never reprices it itself.
 *      Both checks are advisory-that-blocks: they force a human decision
 *      point, they do not make the decision.
 */

export interface FxRate {
  readonly currency: string;
  /** PKR value of one unit of this currency. E.g. 74.03 means 1 SAR was
   * worth PKR 74.03 as of FX_RATE_ASOF_DATE. */
  readonly pkrPerUnit: number;
}

/** exchangerate-api.com's free, no-key endpoint, PKR as the base currency
 * (https://open.er-api.com/v6/latest/PKR) -- the same provider and shape
 * already named in ONE_TO_ONE_TERMS.conversionNote for the original
 * 2026-08-22 conversion, so re-fetches are directly comparable. */
export const FX_RATE_SOURCE = 'https://open.er-api.com/v6/latest/PKR (provider: exchangerate-api.com)';

/** Date this snapshot was fetched and verified against the live source
 * above. Update this every time FX_RATES is refreshed. */
export const FX_RATE_ASOF_DATE = '2026-08-26';

/**
 * Snapshot of PKR-per-unit for every currency ONE_TO_ONE_PRICING converts
 * to, fetched live from FX_RATE_SOURCE on FX_RATE_ASOF_DATE and rounded to
 * 2 decimal places (the source API returns ~6 decimal places of a PKR-per-
 * foreign-currency-unit rate; more precision than any of Marlbridge's own
 * currency-formatting rules use, so it is trimmed here rather than carried
 * through unused). Verified consistent (within FX_TOLERANCE_PERCENT) with
 * the rates implied by ONE_TO_ONE_PRICING's already-published, owner-
 * approved conversions from the original 2026-08-22 pass -- see
 * scripts/validate-fx-policy.mjs's drift check.
 */
export const FX_RATES: readonly FxRate[] = [
  { currency: 'SAR', pkrPerUnit: 74.03 },
  { currency: 'AED', pkrPerUnit: 75.60 },
  { currency: 'QAR', pkrPerUnit: 76.28 },
  { currency: 'KWD', pkrPerUnit: 900.90 },
  { currency: 'BHD', pkrPerUnit: 738.55 },
  { currency: 'OMR', pkrPerUnit: 722.02 },
  { currency: 'GBP', pkrPerUnit: 378.64 },
  { currency: 'EUR', pkrPerUnit: 323.83 },
] as const;

/** How many days after FX_RATE_ASOF_DATE the snapshot is considered stale
 * and the build must fail until it is refreshed. 120 days (~4 months) is
 * long enough that a small tuition business isn't re-verifying rates every
 * few weeks, short enough that a snapshot never silently sits unreviewed
 * for a year or more. Refreshing FX_RATES does not, by itself, change any
 * published price -- see the drift check for that decision. */
export const FX_STALENESS_LIMIT_DAYS = 120;

/**
 * How far a published ONE_TO_ONE_PRICING converted amount may differ from
 * what FX_RATES would now produce (applying the same rounding rule as
 * formatFee) before it is flagged for owner review, as a percentage of the
 * FX_RATES-implied amount. Set generously enough to absorb two known,
 * legitimate sources of difference rather than false-alarming on them: (a)
 * whole-unit rounding on the smaller GBP/EUR amounts, where rounding a
 * ~9-12 unit price to the nearest whole unit is itself several percent;
 * (b) ordinary short-term currency movement between the original
 * conversion date and any later FX_RATES refresh. 8% comfortably covers
 * both in practice (see scripts/validate-fx-policy.mjs's own recorded
 * check against the 2026-08-26 snapshot) while still catching a currency
 * that has genuinely moved enough to warrant a re-price.
 */
export const FX_TOLERANCE_PERCENT = 8;

/** Currencies conventionally quoted to 3 decimal places (fils/baisa
 * subunits at 1/1000). Kept identical to pricing.ts's THREE_DECIMAL_CURRENCIES
 * -- re-declared as a frozen constant here (not merely re-exported) so this
 * file's own rounding logic is self-contained and cannot silently change if
 * pricing.ts's set is ever edited for an unrelated reason; validate-fx-
 * policy.mjs asserts the two sets stay identical. */
export const FX_THREE_DECIMAL_CURRENCIES: ReadonlySet<string> = new Set(['KWD', 'BHD', 'OMR']);

/** Apply a currency's FX_RATES conversion to a PKR amount, rounding the same
 * way pricing.ts's formatFee() would display it (whole units, except the
 * three fils/baisa currencies which keep 3-decimal precision). Used only by
 * the drift validator to compute "what FX_RATES implies today" for
 * comparison against the actually-published figure -- never used to write a
 * price back into pricing.ts. */
export function impliedConvertedAmount(pkrAmount: number, currency: string): number {
  const rate = FX_RATES.find((r) => r.currency === currency);
  if (!rate) throw new Error(`No FX_RATES entry for currency "${currency}"`);
  const raw = pkrAmount / rate.pkrPerUnit;
  return FX_THREE_DECIMAL_CURRENCIES.has(currency) ? Number(raw.toFixed(3)) : Math.round(raw);
}
