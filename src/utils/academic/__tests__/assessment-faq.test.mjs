import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ASSESSMENTS } from '../../../data/academic/assessments.ts';
import { assessmentAnswer, isStagedAsA, sourceKind, TIER_LABEL } from '../assessment-faq.ts';

const answer = (a) => assessmentAnswer(a, { courseLabel: 'X', boardName: 'Board' });
const find = (code) => ASSESSMENTS.find((a) => a.code === code && a.specStatus === 'current');

// D-448 finding C: the exact defect -- HL figures with no level named.
test('IB DP Biology (HL-only record) names HL and says SL is not listed', () => {
  const s = answer(find('DP Biology'));
  assert.match(s, /^X \(DP Biology\) is assessed through: Higher Level \(HL\) candidates take: Paper 1/);
  assert.match(s, /These figures are for Higher Level \(HL\) only; figures for other levels are not listed on this page\./);
  assert.match(s, /Source: official Board subject brief/);
});

test('an SL and HL record keeps per-level grouping', () => {
  const both = ASSESSMENTS.find((a) => a.tiers.includes('sl') && a.tiers.includes('hl') && a.components.some((c) => c.tier === 'sl'));
  assert.ok(both, 'fixture: an SL+HL record exists');
  const s = answer(both);
  assert.match(s, /SL candidates take: /);
  assert.match(s, /HL candidates take: /);
});

test('a staged Cambridge AS & A Level record says "of the A Level" and flags the AS route', () => {
  const r = find('9701');
  assert.ok(isStagedAsA(r));
  const s = answer(r);
  assert.ok(!s.includes('% of the qualification'));
  assert.match(s, /15\.5% of the A Level/);
  assert.match(s, /A candidate taking the AS Level only sits fewer papers, weighted differently/);
});

test('9709 keeps both figures where an AS weighting is recorded', () => {
  assert.match(answer(find('9709')), /% of the AS Level/);
});

test('Core/Extended and Foundation/Higher records still group by tier', () => {
  assert.match(answer(find('0620')), /Core candidates take: .*Extended candidates take: /);
});

// System-wide regression net: no record with level- or route-specific
// figures may produce an answer that does not name its level(s).
test('every record with levels names each of them; no staged record says "of the qualification"', () => {
  const problems = [];
  for (const a of ASSESSMENTS) {
    const s = answer(a);
    const hasRoutes = a.components.some((c) => c.routeGroup?.length);
    const tiers = [...new Set(a.components.map((c) => c.tier).filter((t) => t && t !== 'not-tiered'))];
    if (!hasRoutes) for (const t of tiers) if (!s.includes(`${TIER_LABEL[t]}`) ) problems.push(`${a.code}: tier ${t} not named`);
    if (!hasRoutes && tiers.length >= 1 && !s.includes('candidates take:')) problems.push(`${a.code}: tiered figures without "candidates take:"`);
    if (isStagedAsA(a) && s.includes('% of the qualification')) problems.push(`${a.code}: staged AS/A weighting called "of the qualification"`);
  }
  assert.deepEqual(problems, []);
});

test('sourceKind names the linked document honestly', () => {
  assert.equal(sourceKind('https://www.ibo.org/globalassets/x/dp_sciences_biology_subject-brief_jan_2022_e.pdf'), 'subject brief');
  assert.equal(sourceKind('https://www.cambridgeinternational.org/Images/664563-2025-2027-syllabus.pdf'), 'specification');
  assert.equal(sourceKind('https://www.ibo.org/en/programmes/diploma-programme/curriculum/sciences/physics/'), 'course page');
});
