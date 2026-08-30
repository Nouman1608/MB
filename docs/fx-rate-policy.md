# FX rate policy

Applies to: the one-to-one (1:1) class pricing table (`ONE_TO_ONE_PRICING` in
`src/data/pricing.ts`), shown on `/pricing/`.

## Policy at a glance (Post-v2.0 Quality Closure WS9, 2026-08-30)

The sections below already covered most of this in narrative form; this table
consolidates every point the closure brief asks an FX policy to cover in one
place, and is honest about the two points that are genuinely not yet
recorded anywhere rather than guessing at them.

| Point | Answer |
|---|---|
| Authoritative base fees and currency | PKR. Set directly by the owner for Pakistan only -- see "What Marlbridge actually sets" below. |
| Directly-approved vs. converted prices | Pakistan is the only directly-approved row in `ONE_TO_ONE_PRICING`. The other 8 regions are computed conversions of that one Pakistan rate, not independently negotiated prices. |
| Approved rate source | `open.er-api.com` (provider: exchangerate-api.com), PKR as base currency -- `FX_RATE_SOURCE` in `src/data/fx-policy.ts`. |
| Rate timestamp / application date | Snapshot fetched `FX_RATE_ASOF_DATE`; applied to the published price once, on 2026-08-23 -- see `ONE_TO_ONE_TERMS.conversionNote`. The two dates can differ: a later re-fetch of `FX_RATES` (to clear the staleness check) does not by itself change the published price's own application date. |
| Conversion direction | `FX_RATES` stores PKR-per-one-unit-of-foreign-currency (e.g. `{ currency: 'SAR', pkrPerUnit: 74.03 }` means 1 SAR = PKR 74.03). A converted price is computed as `PKR amount ÷ pkrPerUnit` -- see `impliedConvertedAmount()` in `src/data/fx-policy.ts`. |
| Precision and rounding | Whole units for every currency except KWD/BHD/OMR, which keep 3-decimal (fils/baisa) precision -- `THREE_DECIMAL_CURRENCIES` in `pricing.ts`, mirrored as `FX_THREE_DECIMAL_CURRENCIES` in `fx-policy.ts` (the validator asserts the two sets stay identical). |
| Refresh cadence | 120 days (`FX_STALENESS_LIMIT_DAYS`) -- see "Why 120 days and 8%" below. |
| Responsible approver | **Not yet recorded.** No named role or person is documented as the one who must review a staleness/drift failure or approve a resulting price change -- in practice this has been the owner directly (every base-rate and price change to date is owner-approved per the decision log), but no policy document says so explicitly. Proposed default, not yet confirmed: the site owner (Nouman Ahmed) is the approver for any FX-policy refresh or reprice, the same as every other pricing decision recorded in `docs/decision-log.md`. |
| Stale/unavailable rate behaviour | The build fails (`validate-fx-policy.mjs`'s staleness check) rather than silently continuing to publish an old snapshot or falling back to a guessed rate. No price changes automatically as a result -- a human must refresh `FX_RATES` and, separately, decide whether `ONE_TO_ONE_PRICING` itself needs updating. |
| Estimate vs. payable price | The 8 converted prices ARE the payable price, not an estimate shown with a disclaimer -- they are published and billed exactly like the directly-approved Pakistan rate, and only change via a deliberate content edit (same process as any other fee change), never automatically. There is currently no "estimate" pricing anywhere on the site. |
| When a quotation becomes fixed | **Not formally recorded as a distinct policy.** The site publishes one live price per region at any given time (no per-family locked-in quote is generated or stored); a family's actual monthly bill is whatever `ONE_TO_ONE_PRICING`/`REGION_PRICING` currently states, per the existing billing terms (`PRICING_TERMS.billing`: billed monthly, starting once the trial has taken place). This reading follows from how billing already works; it has not been separately put to the owner as its own decision, so it is stated here as the current de facto behaviour rather than a confirmed policy. |
| Bank/transfer fee treatment | **Genuinely unrecorded -- no source states this.** `PRICING_TERMS.paymentMethods` lists bank transfer and international wire transfer as accepted methods, but nothing says who bears any transfer/receiving fee a bank charges on top of the published price. Per this workstream's own instruction not to invent commercial terms, this is flagged as an open item below rather than answered either way. |

**Open items for the owner (added to `docs/business-decisions-register.md`,
not yet resolved):** who the named responsible approver is for FX-policy
refreshes and reprices, if not the owner by default as proposed above; and
whether the family or Marlbridge bears any bank/wire-transfer fee on top of
the published price.

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
