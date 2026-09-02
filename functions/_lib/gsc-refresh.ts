/**
 * functions/_lib/gsc-refresh.ts
 *
 * D-125 -- the actual data-pull for the live Search Console demand engine.
 * One function, runGscRefresh(env), called from two places that must stay
 * in lockstep: the Cron-triggered scheduled() handler in
 * src/worker/index.ts (automatic, daily) and the manual "Refresh now"
 * button on /admin/search-demand/ (functions/api/admin/search-demand.ts's
 * onRequestPost). Neither path touches site content -- this only reads
 * from Google's API and writes to this project's own D1 database. See
 * docs/decision-log.md, D-125, for why a live D1-backed store was built at
 * all (explicit owner direction) despite the Search Intelligence
 * programme's stated CSV-first/no-production-dependency default.
 *
 * WINDOW AND CAPS, AND WHY:
 * - Each run re-pulls the last GSC_LOOKBACK_DAYS days (not just "today"),
 *   one searchAnalytics.query call per day per dimension, because Search
 *   Console's own data for recent days is provisional and gets revised for
 *   up to a few days after -- re-fetching the same window and upserting
 *   (INSERT OR REPLACE keyed on date+dimension+key) lets those revisions
 *   land automatically instead of permanently storing a day's first,
 *   incomplete numbers.
 * - Looping one day at a time (rather than one call with `dimensions:
 *   ['date', dimension]` across the whole window) is deliberate: GSC's
 *   rowLimit applies to the whole response, sorted by clicks descending,
 *   not per date -- a single multi-day call could silently starve the
 *   lower-traffic days of any rows at all. Per-day calls guarantee up to
 *   GSC_ROW_LIMIT_PER_DAY rows for every single day in the window.
 * - GSC_ROW_LIMIT_PER_DAY=200 and GSC_LOOKBACK_DAYS=7 were chosen from the
 *   real traffic this session observed via the D-124 verification call
 *   (single-digit clicks/impressions on the sampled query) -- Marlbridge is
 *   a low-volume property today, so this cap is not expected to drop real
 *   rows in practice, but it is a real cap, not a guarantee of
 *   completeness, and is stated as such on the dashboard.
 * - History accumulates in D1 across every daily run (old dates are never
 *   deleted), so the queryable trend range grows day by day from whenever
 *   this first started running -- the 7-day re-fetch window is about
 *   correcting recent data, not limiting how much history the dashboard
 *   can show.
 * - Per-run subrequest budget: 1 OAuth token exchange + (7 days x 2
 *   dimensions) = 15 fetch() calls to Google, comfortably under the
 *   Workers Free plan's 50-subrequest-per-invocation limit. The OAuth
 *   token is fetched once per run and reused for every query call, both to
 *   stay under that budget and because signing/exchanging a JWT is the one
 *   real CPU-bound step here -- not worth repeating 14 times.
 * - Free-tier arithmetic, not yet independently load-tested: D1 Free
 *   allows far more than the <=2,800 row-writes/run this produces, and
 *   Workers Cron Triggers are available on the Free plan. If a run ever
 *   fails on a CPU-time or execution-duration limit in practice (not
 *   observed in this session's testing, which cannot invoke a live Cron
 *   trigger from outside Cloudflare), the fix is shrinking the window/cap
 *   further, not silently swallowing the error -- see the "errors" array
 *   this function returns and gsc_refresh_log's status column.
 */

import {
  getAccessToken,
  parseServiceAccountKey,
  querySearchAnalytics,
  type SearchAnalyticsRow,
} from './gsc-client.ts';

export interface D1Result {
  success: boolean;
  meta?: { changes?: number };
}

export interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
}

export interface D1Database {
  prepare(query: string): D1PreparedStatement;
  batch(statements: D1PreparedStatement[]): Promise<D1Result[]>;
}

export interface GscRefreshEnv {
  GSC_SERVICE_ACCOUNT_JSON?: string;
  DB?: D1Database;
}

const PROPERTY = 'sc-domain:marlbridge.com';
const DIMENSIONS = ['query', 'page'] as const;
const GSC_LOOKBACK_DAYS = 7;
const GSC_ROW_LIMIT_PER_DAY = 200;
const D1_BATCH_CHUNK_SIZE = 100;

function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

/**
 * GSC's own data typically lags 1-3 days behind real time and "today" is
 * usually empty or misleadingly partial -- the window ends at yesterday,
 * not today, matching the same choice already made (for the same reason)
 * in the CSV-import engine's guidance in docs/growth/README.md.
 */
function lookbackDates(days: number): string[] {
  const dates: string[] = [];
  const end = new Date();
  end.setUTCDate(end.getUTCDate() - 1);
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(end);
    d.setUTCDate(d.getUTCDate() - i);
    dates.push(isoDate(d));
  }
  return dates;
}

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export interface DimensionRefreshResult {
  dimension: (typeof DIMENSIONS)[number];
  rowsWritten: number;
  daysAttempted: number;
  daysFailed: number;
  errors: string[];
}

export interface GscRefreshResult {
  ok: boolean;
  message?: string;
  generatedAt: string;
  dateRange: { start: string; end: string };
  lookbackDays: number;
  rowLimitPerDay: number;
  dimensions: DimensionRefreshResult[];
}

export async function runGscRefresh(env: GscRefreshEnv): Promise<GscRefreshResult> {
  const generatedAt = new Date().toISOString();
  const dates = lookbackDates(GSC_LOOKBACK_DAYS);
  const dateRange = { start: dates[0], end: dates[dates.length - 1] };

  if (!env.GSC_SERVICE_ACCOUNT_JSON) {
    return {
      ok: false,
      message: 'GSC_SERVICE_ACCOUNT_JSON is not configured.',
      generatedAt,
      dateRange,
      lookbackDays: GSC_LOOKBACK_DAYS,
      rowLimitPerDay: GSC_ROW_LIMIT_PER_DAY,
      dimensions: [],
    };
  }
  if (!env.DB) {
    return {
      ok: false,
      message: 'DB (D1) binding is not configured.',
      generatedAt,
      dateRange,
      lookbackDays: GSC_LOOKBACK_DAYS,
      rowLimitPerDay: GSC_ROW_LIMIT_PER_DAY,
      dimensions: [],
    };
  }

  let accessToken: string;
  try {
    const key = parseServiceAccountKey(env.GSC_SERVICE_ACCOUNT_JSON);
    accessToken = await getAccessToken(key);
  } catch (err) {
    return {
      ok: false,
      message: `Could not obtain an access token: ${err instanceof Error ? err.message : String(err)}`,
      generatedAt,
      dateRange,
      lookbackDays: GSC_LOOKBACK_DAYS,
      rowLimitPerDay: GSC_ROW_LIMIT_PER_DAY,
      dimensions: [],
    };
  }

  const db = env.DB;
  const dimensionResults: DimensionRefreshResult[] = [];

  for (const dimension of DIMENSIONS) {
    const result: DimensionRefreshResult = {
      dimension,
      rowsWritten: 0,
      daysAttempted: 0,
      daysFailed: 0,
      errors: [],
    };

    const allStatements: D1PreparedStatement[] = [];
    const fetchedAt = new Date().toISOString();

    for (const date of dates) {
      result.daysAttempted += 1;
      let rows: SearchAnalyticsRow[] = [];
      try {
        const response = await querySearchAnalytics(accessToken, PROPERTY, {
          startDate: date,
          endDate: date,
          dimensions: [dimension],
          rowLimit: GSC_ROW_LIMIT_PER_DAY,
        });
        rows = response.rows ?? [];
      } catch (err) {
        result.daysFailed += 1;
        result.errors.push(`${date}: ${err instanceof Error ? err.message : String(err)}`);
        continue;
      }

      for (const row of rows) {
        const key = row.keys?.[0];
        if (!key) continue;
        allStatements.push(
          db
            .prepare(
              `INSERT OR REPLACE INTO gsc_snapshots (date, dimension, key, clicks, impressions, ctr, position, fetched_at)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            )
            .bind(
              date,
              dimension,
              key,
              row.clicks ?? 0,
              row.impressions ?? 0,
              row.ctr ?? 0,
              row.position ?? 0,
              fetchedAt,
            ),
        );
      }
    }

    for (const batch of chunk(allStatements, D1_BATCH_CHUNK_SIZE)) {
      try {
        await db.batch(batch);
        result.rowsWritten += batch.length;
      } catch (err) {
        result.errors.push(`D1 batch write failed: ${err instanceof Error ? err.message : String(err)}`);
      }
    }

    // One refresh_log row per dimension per run, recording the window
    // covered and whether every day for this dimension succeeded.
    await db
      .batch([
        db
          .prepare(
            `INSERT INTO gsc_refresh_log (run_at, date_range_start, date_range_end, dimension, row_count, status, detail)
             VALUES (?, ?, ?, ?, ?, ?, ?)`,
          )
          .bind(
            generatedAt,
            dateRange.start,
            dateRange.end,
            dimension,
            result.rowsWritten,
            result.errors.length === 0 ? 'ok' : 'partial_error',
            result.errors.length > 0 ? result.errors.join(' | ').slice(0, 2000) : null,
          ),
      ])
      .catch((err) => {
        result.errors.push(`refresh-log write failed: ${err instanceof Error ? err.message : String(err)}`);
      });

    dimensionResults.push(result);
  }

  const anyErrors = dimensionResults.some((d) => d.errors.length > 0);

  return {
    ok: !anyErrors,
    generatedAt,
    dateRange,
    lookbackDays: GSC_LOOKBACK_DAYS,
    rowLimitPerDay: GSC_ROW_LIMIT_PER_DAY,
    dimensions: dimensionResults,
  };
}
