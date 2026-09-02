// scripts/growth/scoring.mjs
//
// The single, canonical opportunity-scoring function for the Search
// Console demand engine. Extracted from gsc-opportunity-report.mjs (the
// original CSV-import path) so that a second ingestion path -- the live
// GSC API path added under functions/api/admin/search-demand.ts and the
// Cron-triggered refresh in src/worker/index.ts -- can reuse the exact
// same scoring logic instead of forking it, per docs/growth/README.md's
// own explicit instruction: "A future GSC API path ... should normalize
// into the same records and reuse the same scoring function -- not fork
// the analysis logic."
//
// Deliberately zero Node-specific dependencies (no node:fs, node:path,
// etc.) beyond FLAGSHIP_CODES from ./types.mjs, which is itself dependency
// -free -- so this file can be imported both by the Node CLI script below
// and by Cloudflare Worker code (which runs on the Workers runtime, not
// Node) without any build-step translation.
//
// Input shape: { query, clicks, impressions, ctr, position } -- ctr as a
// 0-1 fraction, matching SearchPerformanceRecord in ./types.mjs. Output:
// the same object plus { opportunityType, score, priority, reason }.
//
// Every factor is visible in the returned "reason" string -- nothing here
// is a hidden or ML-derived score. Weights are intentionally simple
// (integer point values) so the ranking is auditable by a human without
// re-running anything. See docs/growth/gsc-scoring-methodology.md for the
// rationale behind each weight and worked examples.

import { FLAGSHIP_CODES } from './types.mjs';

export function classifyQuery(q) {
  const flagship = FLAGSHIP_CODES.some((code) => q.query.includes(code));
  let type = 'LOW_PRIORITY';
  let score = 0;
  const reasons = [];

  if (q.position >= 4 && q.position <= 15 && q.impressions >= 20) {
    type = 'QUICK_WIN';
    score += 40;
    reasons.push(`position ${q.position.toFixed(1)} is in the 4-15 quick-win band`);
  } else if (q.position > 15 && q.position <= 20 && q.impressions >= 20) {
    type = 'NEAR_PAGE_ONE';
    score += 25;
    reasons.push(`position ${q.position.toFixed(1)} is near page one (11-20 band)`);
  } else if (q.impressions >= 15 && q.position > 20 && q.position <= 50) {
    type = 'EMERGING_DEMAND';
    score += 15;
    reasons.push(`position ${q.position.toFixed(1)}, impressions present at 20-50 band`);
  }

  // CTR opportunity can stack with a position-based type if CTR is far
  // below what that position would typically earn (rough, well-known SEO
  // heuristic bands -- not claimed as Marlbridge-specific data).
  const expectedCtrFloor = q.position <= 3 ? 0.10 : q.position <= 10 ? 0.03 : 0.01;
  if (q.impressions >= 50 && q.ctr < expectedCtrFloor) {
    if (type === 'LOW_PRIORITY') type = 'CTR_OPPORTUNITY';
    score += 20;
    reasons.push(`CTR ${(q.ctr * 100).toFixed(2)}% is below the ~${(expectedCtrFloor * 100).toFixed(0)}% floor typical for position ${q.position.toFixed(1)}`);
  }

  if (flagship) {
    score += 15;
    reasons.push('matches a flagship specification code (0620/0625/0580/9701/9702)');
  }

  score += Math.min(20, Math.round(q.impressions / 100)); // impression-volume factor, capped
  if (q.impressions >= 20) reasons.push(`${q.impressions} impressions`);

  const priority = score >= 55 ? 'HIGH' : score >= 30 ? 'MEDIUM' : 'LOW';

  return { ...q, opportunityType: type, score, priority, reason: reasons.join('; ') || 'no qualifying signal in this export' };
}
