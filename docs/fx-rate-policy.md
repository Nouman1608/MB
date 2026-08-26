# FX rate policy

Applies to: the one-to-one (1:1) class pricing table (`ONE_TO_ONE_PRICING` in
`src/data/pricing.ts`), shown on `/pricing/`.

## What Marlbridge actually sets

Marlbridge sets three PKR figures directly, by owner decision, and nothing else:

- The one-to-one Pakistan rate: Rs 3,500/class (IGCSE tier), Rs 4,000/class (A Level tier).
- The group-tuition Pakistan rate: Rs 19,000/month (IGCSE tier), Rs 24,000/month (A Level tier).
- The IB per-class Pakistan rate: Rs 5,000/class.

These are called the **approved base rates**. They change only when the owner explicitly
approves a change, recorded in `docs/decision-log.md`. No script, automation, or currency
movement can alter them — `scripts/validate-fx-policy.mjs` fails the build if any of the three
differs from the last approved value, on every build, forever.

## What the other eight one-to-one prices are

The one-to-one table also shows a price for Saudi Arabia, the UAE, Qatar, Kuwait, Bahrain, Oman,
the UK and Europe. None of these are independently published rates the way the Pakistan rate is.
They are currency conversions of the Pakistan rate, computed once (23 August 2026) from that
day's exchange rates and then left fixed as the published price. They will not silently change
if the currency market moves — Marlbridge does not want its fees drifting day to day with FX
rates, and a converted price only changes when someone deliberately updates it, exactly like any
other fee change.

## The FX rate snapshot

`src/data/fx-policy.ts` records a snapshot of PKR-per-unit for each of the eight currencies
above, fetched from a named, public source (`exchangerate-api.com`, via its free
`open.er-api.com` endpoint) on a recorded date. This snapshot exists so the conversion basis is
inspectable and re-derivable by anyone reading the code — it is not a live feed, and nothing in
the site build reads it to compute a price shown to a visitor.

Two automated checks run on every build (`npm run validate:academic`, or directly via
`npm run validate:fx-policy`):

1. **Staleness.** If the snapshot is more than 120 days old, the build fails until it is
   refreshed against the live source and the refresh is recorded in the decision log — whether
   or not any published price ends up changing as a result.
2. **Drift.** If a currently-published converted price has moved more than 8% away from what a
   fresh conversion of the snapshot would produce, the build fails so a human reviews whether
   that region's price should be updated. The check never changes a price itself; it only forces
   the question onto someone's desk.

## Why 120 days and 8%

Marlbridge is a small tuition business, not a trading desk — reviewing FX exposure every few
weeks would be wasted effort, and reviewing it once a year or less risks a stale conversion
nobody notices. 120 days (roughly four months) is a reasonable middle ground.

8% tolerance absorbs two ordinary, harmless sources of difference without false-alarming on
them: whole-unit rounding on the smaller GBP/EUR prices (rounding a price of roughly 9–12 units
to the nearest whole unit is itself a few percent), and ordinary short-term currency movement.
It is still tight enough to catch a currency that has genuinely moved enough to justify
reconsidering that region's price.

## What to do when the build fails here

- **Approved-base-rate check fails:** either the change was a mistake (revert it), or it is a
  real, owner-approved price change — in which case update
  `APPROVED_BASE_RATES` in `scripts/validate-fx-policy.mjs` to match, in the same commit as a
  new `docs/decision-log.md` entry recording who approved it and when.
- **Staleness check fails:** fetch current rates from the source named in
  `FX_RATE_SOURCE` (`src/data/fx-policy.ts`), update `FX_RATES` and `FX_RATE_ASOF_DATE`, and
  record the refresh in the decision log. This alone does not change any published price.
- **Drift check fails:** read the flagged region and currency, decide with the owner whether the
  published price should be updated, then either update `ONE_TO_ONE_PRICING` in
  `src/data/pricing.ts` (recording the change in the decision log, same as any other fee change)
  or, if the price should stay as-is for now, note that decision in the decision log so the next
  person doesn't re-litigate it from scratch.
