// scripts/growth/__tests__/scoring.test.mjs
//
// Locks the behaviour of classifyQuery() -- the single scoring
// implementation shared by the CSV-import engine
// (gsc-opportunity-report.mjs) and the live-API path
// (functions/api/admin/search-demand.ts), per scoring.mjs's own header
// comment. No test previously existed for this logic (it lived inline in
// gsc-opportunity-report.mjs, itself untested); added now because a
// second, permanent caller depends on it.
//
// Run with:
//   node --test scripts/growth/__tests__/scoring.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { classifyQuery } from '../scoring.mjs';

test('QUICK_WIN band: position 4-15 with enough impressions', () => {
  const r = classifyQuery({ query: 'igcse chemistry past papers', clicks: 3, impressions: 50, ctr: 0.06, position: 8.2 });
  assert.equal(r.opportunityType, 'QUICK_WIN');
  assert.ok(r.score >= 40);
  assert.match(r.reason, /quick-win band/);
});

test('NEAR_PAGE_ONE band: position 16-20', () => {
  const r = classifyQuery({ query: 'a level physics revision', clicks: 0, impressions: 25, ctr: 0, position: 18 });
  assert.equal(r.opportunityType, 'NEAR_PAGE_ONE');
});

test('EMERGING_DEMAND band: position 21-50 with modest impressions', () => {
  const r = classifyQuery({ query: 'cambridge geography notes', clicks: 0, impressions: 20, ctr: 0, position: 30 });
  assert.equal(r.opportunityType, 'EMERGING_DEMAND');
});

test('CTR_OPPORTUNITY: high impressions, CTR well below the position-appropriate floor', () => {
  const r = classifyQuery({ query: 'igcse maths syllabus', clicks: 1, impressions: 200, ctr: 0.005, position: 2 });
  assert.equal(r.opportunityType, 'CTR_OPPORTUNITY');
  assert.match(r.reason, /CTR/);
});

test('CTR_OPPORTUNITY can stack on top of a position-based type without overwriting it', () => {
  // position 8 -> QUICK_WIN already assigned; CTR below the ~3% floor for
  // that band should add to the score/reason but the type stays QUICK_WIN
  // (only overwritten when the type would otherwise be LOW_PRIORITY).
  const r = classifyQuery({ query: 'cambridge biology topic 4', clicks: 1, impressions: 200, ctr: 0.005, position: 8 });
  assert.equal(r.opportunityType, 'QUICK_WIN');
  assert.match(r.reason, /CTR/);
});

test('flagship specification code adds points and is named in the reason', () => {
  const withCode = classifyQuery({ query: 'cambridge igcse 0620 chemistry syllabus', clicks: 0, impressions: 20, ctr: 0, position: 30 });
  const withoutCode = classifyQuery({ query: 'cambridge igcse chemistry syllabus', clicks: 0, impressions: 20, ctr: 0, position: 30 });
  assert.ok(withCode.score > withoutCode.score);
  assert.match(withCode.reason, /flagship specification code/);
});

test('LOW_PRIORITY: no qualifying signal at all', () => {
  const r = classifyQuery({ query: 'unrelated random query', clicks: 0, impressions: 2, ctr: 0, position: 80 });
  assert.equal(r.opportunityType, 'LOW_PRIORITY');
  assert.equal(r.priority, 'LOW');
});

test('priority bands follow the documented score thresholds', () => {
  const high = classifyQuery({ query: '0620 chemistry', clicks: 5, impressions: 500, ctr: 0.005, position: 6 });
  assert.equal(high.priority, 'HIGH');
});
