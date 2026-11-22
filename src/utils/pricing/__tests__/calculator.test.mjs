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

test('one-to-one-only courses (D-335): Rs 6,000 per class, conversions elsewhere, no discounts', () => {
  const pk = calculateFee({ region: 'Pakistan', format: 'one-to-one-only', classes: 4 });
  assert.equal(pk.currency, 'PKR');
  assert.equal(pk.total, 24000);
  assert.equal(pk.indicative, false);
  const us = calculateFee({ region: 'Other countries', format: 'one-to-one-only' });
  assert.equal(us.currency, 'USD');
  assert.equal(us.total, 22);
  // D-517: the US dollar fee is set by Marlbridge.
  assert.equal(us.indicative, false);
  const kw = calculateFee({ region: 'Kuwait', format: 'one-to-one-only', classes: 3 });
  assert.equal(kw.total, 19.98);
  assert.equal(kw.discountPercent, 0);
});

// D-459 -- the "fees for your region" card at the top of /pricing/ shows exactly what the two tables show.
test('region card: one card per group-fee row, in table order, each agreeing with both table rows', async () => {
  const { REGION_FEE_CARDS } = await import('../region-card.ts');
  const { formatFee, isIndicative, INDICATIVE_NOTE } = await import('../../../data/pricing.ts');
  assert.deepEqual(REGION_FEE_CARDS.map((c) => c.region), REGION_PRICING.map((r) => r.region));
  for (const card of REGION_FEE_CARDS) {
    const g = REGION_PRICING.find((r) => r.region === card.region);
    const o = ONE_TO_ONE_PRICING.find((r) => r.region === card.region);
    assert.ok(o, `${card.region} has a one-to-one row`);
    assert.equal(card.group.igcse, `${formatFee(g.igcse, g.currency)} ${g.currency}`, card.region);
    assert.equal(card.group.aLevel, `${formatFee(g.aLevel, g.currency)} ${g.currency}`, card.region);
    assert.equal(card.group.indicative, isIndicative(g), `${card.region} group indicative mark`);
    assert.equal(card.oneToOne.igcse, `${formatFee(o.igcse, o.currency)} ${o.currency}`, card.region);
    assert.equal(card.oneToOne.aLevel, `${formatFee(o.aLevel, o.currency)} ${o.currency}`, card.region);
    assert.equal(card.oneToOne.indicative, isIndicative(o), `${card.region} one-to-one indicative mark`);
    // The note is the tables' own note, shown only when a figure on the card is indicative.
    assert.equal(card.note, isIndicative(g) || isIndicative(o) ? INDICATIVE_NOTE : '', `${card.region} note`);
  }
});

test('region card: Pakistan is first and carries no indicative mark; the UAE label matches the tables', async () => {
  const { REGION_FEE_CARDS } = await import('../region-card.ts');
  const pk = REGION_FEE_CARDS[0];
  assert.equal(pk.region, 'Pakistan');
  assert.equal(pk.group.indicative, false);
  assert.equal(pk.oneToOne.indicative, false);
  assert.equal(pk.note, '');
  assert.equal(REGION_FEE_CARDS.find((c) => c.region === 'United Arab Emirates').label, 'United Arab Emirates (UAE)');
  // Three-decimal currencies keep their precision, as in the tables.
  assert.match(REGION_FEE_CARDS.find((c) => c.region === 'Kuwait').group.igcse, /^\d+\.\d{3} KWD$/);
});
