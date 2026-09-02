/**
 * /api/admin/search-demand — Cloudflare Pages Function.
 *
 * D-125 -- the live-API demand-engine dashboard's backend. Two methods on
 * one path, matching functions/api/enquiry.ts's own GET+POST convention:
 *
 *   GET  -- reads and aggregates from D1 (functions/_lib gsc_snapshots
 *           table), classifies queries with the SAME scoring function the
 *           CSV-import engine uses (scripts/growth/scoring.mjs -- see that
 *           file and docs/growth/README.md for why this must not fork),
 *           and returns everything the dashboard page needs in one call.
 *           Read-only; safe to hit freely, does not call Google.
 *   POST -- runs functions/_lib/gsc-refresh.ts's runGscRefresh(), the same
 *           logic the Cron trigger runs automatically every day. This is
 *           the dashboard's "Refresh now" button and the way this session
 *           seeds the first data before the first scheduled run has fired.
 *           Each call makes ~15 real requests to Google's API (see
 *           gsc-refresh.ts's header comment) -- not something to poll or
 *           link publicly, matching this route's gating below.
 *
 * Gating: unlisted only (no auth exists anywhere on this static site) --
 * same convention as /admin/practice-gaps/ and the now-retired
 * gsc-verify.ts (D-125 removes that endpoint; its one job, proving the
 * credential worked, is done -- see docs/decision-log.md D-125).
 */

import { classifyQuery } from '../../../scripts/growth/scoring.mjs';
import { FLAGSHIP_CODES } from '../../../scripts/growth/types.mjs';
import { runGscRefresh, type D1Database } from '../../_lib/gsc-refresh.ts';

interface Env {
  GSC_SERVICE_ACCOUNT_JSON?: string;
  DB?: D1Database;
}

interface D1AllResult<T> {
  results: T[];
}

interface D1QueryableStatement {
  bind(...values: unknown[]): D1QueryableStatement;
  all<T = unknown>(): Promise<D1AllResult<T>>;
}

interface QueryableD1Database extends D1Database {
  prepare(query: string): D1QueryableStatement;
}

function jsonResponse(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
}

function daysAgoIso(days: number): string {
  const d = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
  return d.toISOString().slice(0, 10);
}

interface TrendRow {
  date: string;
  clicks: number;
  impressions: number;
  ctr: number | null;
  position: number | null;
}

interface AggregatedKeyRow {
  key: string;
  clicks: number;
  impressions: number;
  ctr: number | null;
  position: number | null;
}

interface RefreshLogRow {
  run_at: string;
  date_range_start: string;
  date_range_end: string;
  dimension: string;
  row_count: number;
  status: string;
  detail: string | null;
}

export const onRequestGet = async (context: { env: Env; request: Request }): Promise<Response> => {
  const { env, request } = context;

  if (!env.DB) {
    return jsonResponse(503, { ok: false, message: 'DB (D1) binding is not configured.' });
  }
  const db = env.DB as QueryableD1Database;

  const url = new URL(request.url);
  const trendDays = Math.min(365, Math.max(7, Number(url.searchParams.get('days')) || 90));
  const opportunityWindowDays = 28;
  const trendCutoff = daysAgoIso(trendDays);
  const opportunityCutoff = daysAgoIso(opportunityWindowDays);

  try {
    const [trendResult, queryAggResult, pageAggResult, refreshLogResult, rangeResult] = await Promise.all([
      db
        .prepare(
          `SELECT date,
                  SUM(clicks) AS clicks,
                  SUM(impressions) AS impressions,
                  CASE WHEN SUM(impressions) > 0 THEN SUM(clicks) * 1.0 / SUM(impressions) ELSE NULL END AS ctr,
                  CASE WHEN SUM(impressions) > 0 THEN SUM(position * impressions) * 1.0 / SUM(impressions) ELSE NULL END AS position
           FROM gsc_snapshots
           WHERE dimension = 'query' AND date >= ?
           GROUP BY date
           ORDER BY date ASC`,
        )
        .bind(trendCutoff)
        .all<TrendRow>(),
      db
        .prepare(
          `SELECT key,
                  SUM(clicks) AS clicks,
                  SUM(impressions) AS impressions,
                  CASE WHEN SUM(impressions) > 0 THEN SUM(clicks) * 1.0 / SUM(impressions) ELSE 0 END AS ctr,
                  CASE WHEN SUM(impressions) > 0 THEN SUM(position * impressions) * 1.0 / SUM(impressions) ELSE 0 END AS position
           FROM gsc_snapshots
           WHERE dimension = 'query' AND date >= ?
           GROUP BY key
           ORDER BY impressions DESC
           LIMIT 500`,
        )
        .bind(opportunityCutoff)
        .all<AggregatedKeyRow>(),
      db
        .prepare(
          `SELECT key,
                  SUM(clicks) AS clicks,
                  SUM(impressions) AS impressions,
                  CASE WHEN SUM(impressions) > 0 THEN SUM(clicks) * 1.0 / SUM(impressions) ELSE 0 END AS ctr,
                  CASE WHEN SUM(impressions) > 0 THEN SUM(position * impressions) * 1.0 / SUM(impressions) ELSE 0 END AS position
           FROM gsc_snapshots
           WHERE dimension = 'page' AND date >= ?
           GROUP BY key
           ORDER BY impressions DESC
           LIMIT 100`,
        )
        .bind(opportunityCutoff)
        .all<AggregatedKeyRow>(),
      db
        .prepare(`SELECT * FROM gsc_refresh_log ORDER BY run_at DESC LIMIT 10`)
        .all<RefreshLogRow>(),
      db
        .prepare(
          `SELECT MIN(date) AS minDate, MAX(date) AS maxDate, COUNT(DISTINCT date) AS distinctDays FROM gsc_snapshots`,
        )
        .all<{ minDate: string | null; maxDate: string | null; distinctDays: number }>(),
    ]);

    const classified = queryAggResult.results
      .map((r) => classifyQuery({ query: r.key, clicks: r.clicks, impressions: r.impressions, ctr: r.ctr ?? 0, position: r.position ?? 0 }))
      .filter((c) => c.opportunityType !== 'LOW_PRIORITY')
      .sort((a, b) => b.score - a.score)
      .slice(0, 200);

    const flagship = classified.filter((c) => FLAGSHIP_CODES.some((code) => c.query.includes(code)));

    return jsonResponse(200, {
      ok: true,
      generatedAt: new Date().toISOString(),
      dbRange: rangeResult.results[0] ?? { minDate: null, maxDate: null, distinctDays: 0 },
      trend: {
        windowDays: trendDays,
        rows: trendResult.results,
      },
      opportunities: {
        windowDays: opportunityWindowDays,
        rows: classified,
        flagshipRows: flagship,
        note:
          'Aggregated from up to the last ' +
          opportunityWindowDays +
          ' days of stored snapshots (capped at 200 queries/500 aggregated keys, sorted by opportunity score); see scripts/growth/scoring.mjs for the scoring rationale.',
      },
      pages: {
        windowDays: opportunityWindowDays,
        rows: pageAggResult.results,
      },
      refreshLog: refreshLogResult.results,
    });
  } catch (err) {
    return jsonResponse(500, {
      ok: false,
      message: 'Failed to read from D1.',
      detail: err instanceof Error ? err.message : String(err),
    });
  }
};

export const onRequestPost = async (context: { env: Env }): Promise<Response> => {
  const result = await runGscRefresh(context.env);
  return jsonResponse(result.ok ? 200 : 502, result);
};
