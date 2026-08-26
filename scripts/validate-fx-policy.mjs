#!/usr/bin/env node
// @ts-check
/**
 * v1.x CLOSURE WS8 — FX-rate policy validator.
 *
 * Two checks, both build-failing:
 *
 *   [1] Approved-base-rate protection. IB_PRICING.perClass,
 *       ONE_TO_ONE_PRICING's Pakistan row, and REGION_PRICING's Pakistan
 *       row are the only rates Marlbridge sets directly -- everything else
 *       in ONE_TO_ONE_PRICING is a currency conversion of the one-to-one
 *       Pakistan row. If any of these three change from the values
 *       recorded below, the build fails: not because the change is wrong,
 *       but because a base-fee change must be a deliberate, reviewed act
 *       with a decision-log entry, never an incidental edit. Update the
 *       APPROVED_BASE_RATES constant below in the SAME commit as the
 *       decision-log entry that authorizes the change.
 *
 *   [2] FX snapshot staleness and drift, using src/data/fx-policy.ts:
 *       - Staleness: fails if FX_RATE_ASOF_DATE is more than
 *         FX_STALENESS_LIMIT_DAYS in the past.
 *       - Drift: fails if any currently-published ONE_TO_ONE_PRICING
 *         converted amount differs from what FX_RATES implies today by
 *         more than FX_TOLERANCE_PERCENT. This does not mean the price is
 *         wrong -- it means a human should look at whether it still is.
 *
 * Usage: node --experimental-strip-types scripts/validate-fx-policy.mjs
 */
import {
  IB_PRICING,
  ONE_TO_ONE_PRICING,
  REGION_PRICING,
  THREE_DECIMAL_CURRENCIES,
} from '../src/data/pricing.ts';
import {
  FX_RATES,
  FX_RATE_ASOF_DATE,
  FX_RATE_SOURCE,
  FX_STALENESS_LIMIT_DAYS,
  FX_TOLERANCE_PERCENT,
  FX_THREE_DECIMAL_CURRENCIES,
  impliedConvertedAmount,
} from '../src/data/fx-policy.ts';

let problems = 0;

// --- [1] Approved base rates -----------------------------------------------

/** The only PKR figures Marlbridge sets directly. Changing any of these
 * requires a docs/decision-log.md entry recording explicit owner approval,
 * updated in the same commit as this constant. */
const APPROVED_BASE_RATES = {
  ibPerClass: 5000,
  oneToOnePakistanIgcse: 3500,
  oneToOnePakistanALevel: 4000,
  regionPakistanIgcse: 19000,
  regionPakistanALevel: 24000,
};

const oneToOnePakistan = ONE_TO_ONE_PRICING.find((r) => r.region === 'Pakistan');
const regionPakistan = REGION_PRICING.find((r) => r.region === 'Pakistan');

const baseChecks = [
  ['IB_PRICING.perClass', IB_PRICING.perClass, APPROVED_BASE_RATES.ibPerClass],
  ['ONE_TO_ONE_PRICING Pakistan igcse', oneToOnePakistan?.igcse, APPROVED_BASE_RATES.oneToOnePakistanIgcse],
  ['ONE_TO_ONE_PRICING Pakistan aLevel', oneToOnePakistan?.aLevel, APPROVED_BASE_RATES.oneToOnePakistanALevel],
  ['REGION_PRICING Pakistan igcse', regionPakistan?.igcse, APPROVED_BASE_RATES.regionPakistanIgcse],
  ['REGION_PRICING Pakistan aLevel', regionPakistan?.aLevel, APPROVED_BASE_RATES.regionPakistanALevel],
];

console.log('[1] Approved base rates unchanged from the last explicitly-approved value');
for (const [label, actual, approved] of baseChecks) {
  if (actual !== approved) {
    console.log(`  ✗ ${label}: is ${actual}, approved value is ${approved}.`);
    console.log('    If this change is real and owner-approved, update APPROVED_BASE_RATES in');
    console.log('    scripts/validate-fx-policy.mjs and record the approval in docs/decision-log.md');
    console.log('    in the same commit -- do not change this check without a paired decision-log entry.');
    problems++;
  } else {
    console.log(`  ✓ ${label}: ${actual} (unchanged)`);
  }
}

// --- [2a] FX snapshot staleness --------------------------------------------

console.log('\n[2a] FX rate snapshot is not stale');
const asOf = new Date(`${FX_RATE_ASOF_DATE}T00:00:00Z`);
const now = new Date();
const ageDays = Math.floor((now.getTime() - asOf.getTime()) / (1000 * 60 * 60 * 24));
if (Number.isNaN(asOf.getTime())) {
  console.log(`  ✗ FX_RATE_ASOF_DATE ("${FX_RATE_ASOF_DATE}") is not a valid date.`);
  problems++;
} else if (ageDays > FX_STALENESS_LIMIT_DAYS) {
  console.log(`  ✗ FX_RATES is ${ageDays} day(s) old (as of ${FX_RATE_ASOF_DATE}), past the ${FX_STALENESS_LIMIT_DAYS}-day limit.`);
  console.log(`    Re-fetch current rates from ${FX_RATE_SOURCE}, update FX_RATES and`);
  console.log('    FX_RATE_ASOF_DATE in src/data/fx-policy.ts, and record the refresh in docs/decision-log.md.');
  problems++;
} else if (ageDays < 0) {
  console.log(`  ✗ FX_RATE_ASOF_DATE ("${FX_RATE_ASOF_DATE}") is in the future.`);
  problems++;
} else {
  console.log(`  ✓ FX_RATES is ${ageDays} day(s) old (as of ${FX_RATE_ASOF_DATE}), within the ${FX_STALENESS_LIMIT_DAYS}-day limit.`);
}

// --- [2b] Rounding-rule consistency between pricing.ts and fx-policy.ts ---

console.log('\n[2b] Three-decimal currency set is identical in pricing.ts and fx-policy.ts');
{
  const a = [...THREE_DECIMAL_CURRENCIES].sort();
  const b = [...FX_THREE_DECIMAL_CURRENCIES].sort();
  if (JSON.stringify(a) !== JSON.stringify(b)) {
    console.log(`  ✗ pricing.ts THREE_DECIMAL_CURRENCIES (${a.join(', ')}) != fx-policy.ts FX_THREE_DECIMAL_CURRENCIES (${b.join(', ')})`);
    problems++;
  } else {
    console.log(`  ✓ Both list: ${a.join(', ')}`);
  }
}

// --- [2c] Drift between published conversions and current FX_RATES --------

console.log(`\n[2c] Published one-to-one conversions are within ${FX_TOLERANCE_PERCENT}% of what FX_RATES implies today`);
if (!oneToOnePakistan) {
  console.log('  ✗ No Pakistan row found in ONE_TO_ONE_PRICING -- cannot compute drift.');
  problems++;
} else {
  for (const row of ONE_TO_ONE_PRICING) {
    if (row.region === 'Pakistan') continue;
    /** @type {{ tierLabel: string, pkrBase: number, published: number }[]} */
    const tiers = [
      { tierLabel: 'igcse', pkrBase: oneToOnePakistan.igcse, published: row.igcse },
      { tierLabel: 'aLevel', pkrBase: oneToOnePakistan.aLevel, published: row.aLevel },
    ];
    for (const { tierLabel, pkrBase, published } of tiers) {
      let implied;
      try {
        implied = impliedConvertedAmount(pkrBase, row.currency);
      } catch (e) {
        const message = e instanceof Error ? e.message : String(e);
        console.log(`  ✗ ${row.region} (${row.currency}) ${tierLabel}: ${message}`);
        problems++;
        continue;
      }
      const diffPercent = implied === 0 ? 0 : (Math.abs(published - implied) / Math.abs(implied)) * 100;
      if (diffPercent > FX_TOLERANCE_PERCENT) {
        console.log(`  ✗ ${row.region} (${row.currency}) ${tierLabel}: published ${published}, FX_RATES implies ${implied} -- ${diffPercent.toFixed(1)}% drift, exceeds ${FX_TOLERANCE_PERCENT}%.`);
        console.log('    Review whether this region\'s converted price should be updated (owner approval required for the resulting');
        console.log('    published price, same as any other fee change), then record the decision in docs/decision-log.md.');
        problems++;
      } else {
        console.log(`  ✓ ${row.region} (${row.currency}) ${tierLabel}: published ${published}, FX_RATES implies ${implied} (${diffPercent.toFixed(1)}% drift)`);
      }
    }
  }
}

console.log('');
if (problems > 0) {
  console.log(`FX POLICY VALIDATION FAILED: ${problems} problem(s) found.`);
  process.exit(1);
}
console.log('FX policy validation PASSED: base rates unchanged, snapshot fresh, published conversions within tolerance.');
process.exit(0);
