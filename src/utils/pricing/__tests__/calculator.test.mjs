// D-330 -- the /pricing/ fee calculator agrees with the canonical data and the published example.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { calculateFee, roundFor } from '../calculator.ts';
import { REGION_PRICING, ONE_TO_ONE_PRICING, IB_PRICING, IB_USD_PRICING, IB_CONVERSIONS, discountWorkedExample } from '../../../data/pricing.ts';

test('matches the published worked example (3 IGCSE subjects, Pakistan, both discounts = 30% off)', () => {
  const ex = discountWorkedExample();
  const r = calculateFee({ region: ex.region, format: 'group', igcseSubjects: ex.subjectCount, sibling: true });
  assert.equal(r.subtotal, ex.beforeDiscount);
  assert.equal(r.discountPercent, ex.combinedPercent);
  assert.equal(r.total, ex.afterDiscount);
  assert.equal(r.period, 'per month');
  assert.equal(r.needsQuote, false);
});

test('group: every region row prices one subject exactly as the table', () => {
  for (const row of REGION_PRICING) {
    const a = calculateFee({ region: row.region, format: 'group', igcseSubjects: 1 });
    const b = calculateFee({ region: row.region, format: 'group', aLevelSubjects: 1 });
    assert.equal(a.total, row.igcse, row.region);
    assert.equal(b.total, row.aLevel, row.region);
    assert.equal(a.currency, row.currency);
    assert.equal(a.indicative, row.status === 'indicative', `${row.region} indicative flag`);
    assert.equal(a.discountPercent, 0);
  }
});

test('group: 2 subjects get no multi-subject discount; 3 same-rate subjects get 20%', () => {
  assert.equal(calculateFee({ region: 'Pakistan', format: 'group', aLevelSubjects: 2 }).discountPercent, 0);
  const r = calculateFee({ region: 'Pakistan', format: 'group', aLevelSubjects: 3 });
  assert.equal(r.subtotal, 72000);
  assert.equal(r.discountPercent, 20);
  assert.equal(r.total, 57600);
});

test('group: sibling alone is 10%; mixed IGCSE + A Level baskets get the 20% multi-subject discount (D-331)', () => {
  const s = calculateFee({ region: 'Pakistan', format: 'group', igcseSubjects: 1, sibling: true });
  assert.equal(s.total, 17100);
  const m = calculateFee({ region: 'Pakistan', format: 'group', igcseSubjects: 2, aLevelSubjects: 1 });
  assert.equal(m.subtotal, 2 * 19000 + 24000);
  assert.equal(m.discountPercent, 20);
  assert.equal(m.total, 49600);
  assert.equal(m.needsQuote, false);
  const ms = calculateFee({ region: 'Pakistan', format: 'group', igcseSubjects: 2, aLevelSubjects: 1, sibling: true });
  assert.equal(ms.discountPercent, 30);
  assert.equal(ms.total, 43400);
  assert.ok(ms.notes.some((n) => /Each enrolled brother or sister also gets 10%/.test(n)));
});

test('group: 3-decimal currencies keep 3 decimals', () => {
  const r = calculateFee({ region: 'Kuwait', format: 'group', igcseSubjects: 3 });
  assert.equal(r.total, roundFor('KWD', 3 * 22.5 * 0.8));
  assert.equal(r.total, 54);
  const o = calculateFee({ region: 'Oman', format: 'one-to-one', tier: 'igcse', classes: 3 });
  assert.equal(o.total, 14.952);
});

test('one-to-one: per class by default, never discounted, totals only when classes are given', () => {
  for (const row of ONE_TO_ONE_PRICING) {
    const r = calculateFee({ region: row.region, format: 'one-to-one', tier: 'aLevel' });
    assert.equal(r.total, row.aLevel, row.region);
    assert.equal(r.period, 'per class');
  }
  const n = calculateFee({ region: 'Pakistan', format: 'one-to-one', tier: 'igcse', classes: 8, sibling: true, igcseSubjects: 5 });
  assert.equal(n.total, 8 * 3500);
  assert.equal(n.discountPercent, 0);
  assert.equal(n.period, 'for 8 classes');
});

test('IB: Pakistan, conversions (indicative) and US dollar MYP/DP', () => {
  assert.equal(calculateFee({ region: 'Pakistan', format: 'ib', ibProgramme: 'dp' }).total, IB_PRICING.perClass);
  assert.equal(calculateFee({ region: 'Other countries', format: 'ib', ibProgramme: 'myp' }).total, IB_USD_PRICING.myp);
  assert.equal(calculateFee({ region: 'Other countries', format: 'ib', ibProgramme: 'dp' }).total, IB_USD_PRICING.dp);
  for (const c of IB_CONVERSIONS) {
    const r = calculateFee({ region: c.region, format: 'ib', ibProgramme: 'dp' });
    assert.equal(r.total, c.perClass);
    assert.equal(r.indicative, true);
  }
});

test('unknown region or no subjects: no invented price', () => {
  assert.equal(calculateFee({ region: 'Atlantis', format: 'group', igcseSubjects: 2 }).ok, false);
  assert.equal(calculateFee({ region: 'Pakistan', format: 'group' }).ok, false);
});
