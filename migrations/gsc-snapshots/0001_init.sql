-- migrations/gsc-snapshots/0001_init.sql
--
-- Schema for the mb-search-demand D1 database (D-125, Search Console
-- demand-engine live-API path). Applied directly against the live database
-- via the Cloudflare API on 2 Sep 2026 -- this file is kept for
-- reproducibility and disaster recovery (e.g. `wrangler d1 execute
-- mb-search-demand --remote --file=migrations/gsc-snapshots/0001_init.sql`
-- against a freshly created database of the same name), not as a pending
-- step against the database wrangler.jsonc already points at.
--
-- gsc_snapshots: one row per (date, dimension, key) -- dimension is
-- 'query' or 'page', key is the query string or page URL. UNIQUE on those
-- three columns lets a re-fetch of an already-stored date (Search Console
-- revises recent days' numbers for a few days after they first appear)
-- overwrite in place via INSERT OR REPLACE, rather than accumulating
-- duplicate/stale rows. See functions/_lib/gsc-refresh.ts.
CREATE TABLE IF NOT EXISTS gsc_snapshots (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  date TEXT NOT NULL,
  dimension TEXT NOT NULL CHECK (dimension IN ('query', 'page')),
  key TEXT NOT NULL,
  clicks INTEGER NOT NULL,
  impressions INTEGER NOT NULL,
  ctr REAL NOT NULL,
  position REAL NOT NULL,
  fetched_at TEXT NOT NULL,
  UNIQUE(date, dimension, key)
);

CREATE INDEX IF NOT EXISTS idx_gsc_snapshots_date ON gsc_snapshots(date);
CREATE INDEX IF NOT EXISTS idx_gsc_snapshots_dimension_key ON gsc_snapshots(dimension, key);

-- gsc_refresh_log: one row per (dimension, run) -- an audit trail of every
-- automatic (Cron) or manual ("Refresh now" button) refresh, so the
-- dashboard can show "last refreshed at X, N rows, any errors" without
-- guessing. Never read by the scoring/aggregation logic itself.
CREATE TABLE IF NOT EXISTS gsc_refresh_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  run_at TEXT NOT NULL,
  date_range_start TEXT NOT NULL,
  date_range_end TEXT NOT NULL,
  dimension TEXT NOT NULL,
  row_count INTEGER NOT NULL,
  status TEXT NOT NULL,
  detail TEXT
);
