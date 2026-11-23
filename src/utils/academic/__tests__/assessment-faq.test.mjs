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

// D-509: the guides confirmed the totals; Paper 2 is 25 for the exams from May 2026 (owner's choice).
test('DP Language A: Language and Literature Paper 2 prints the confirmed 25 marks', () => {
  const s = answer(find('DP Language A: Language and Literature'));
  const p2 = s.split('; ').filter((x) => x.includes('Paper 2'));
  assert.ok(p2.length >= 2, 'Paper 2 appears for SL and HL');
  for (const x of p2) { assert.match(x, /\b25 marks\b/); assert.doesNotMatch(x, /mark total not confirmed/); }
  assert.match(s, /Paper 1 -- Guided Textual Analysis — 1h 15m, 20 marks/);
});

// D-509: the Literature guide confirms the HL Essay (20) and Individual Oral (40, 15 minutes).
test('DP Language A: Literature prints the confirmed HL Essay and Individual Oral totals', () => {
  const s = answer(find('DP Language A: Literature'));
  const parts = s.split(/; |\. (?=[A-Z]{2} candidates take)/).filter((x) => /HL Essay|Individual Oral/.test(x));
  assert.ok(parts.length >= 3, 'IO at SL and HL, HL Essay at HL');
  for (const x of parts) {
    assert.doesNotMatch(x, /mark total not confirmed/);
    assert.match(x, /HL Essay/.test(x) ? /\b20 marks\b/ : /0h 15m, 40 marks\b/);
  }
  assert.match(s, /Paper 2 -- Comparative Essay — 1h 45m, 25 marks/);
});

// P4 (audit Nov 2026): "Paper 1: Paper 1" -- the paper name must appear once.
test('componentLabel shows a paper name once', async () => {
  const { componentLabel } = await import('../assessment-faq.ts');
  assert.equal(componentLabel('Paper 1', 'Paper 1'), 'Paper 1');
  assert.equal(componentLabel('Paper 1', 'Paper 1 Reading'), 'Paper 1 Reading');
  assert.equal(componentLabel('Paper 1', 'Non-calculator (Core)'), 'Paper 1: Non-calculator (Core)');
  assert.equal(componentLabel('Paper 1', 'Paper 11 Extra'), 'Paper 1: Paper 11 Extra');
  for (const a of ASSESSMENTS) for (const c of a.components) {
    assert.ok(!/(Paper \d+)\b[:\s]+\1\b/i.test(componentLabel(c.paperCode, c.title)), `${a.code} ${c.paperCode}`);
  }
});
