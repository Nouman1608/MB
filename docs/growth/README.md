# Search Intelligence & Demand-Led Growth — engine architecture

Programme home: `docs/programme-register.md`. This directory holds the tooling and
findings for that programme's Search Console / indexing / analytics workstreams
(WS1-WS3, WS9-WS12, WS17).

## Why CSV-first, not connector-first

No Google Search Console or GA4 MCP connector was available to this session
(checked against the live connector registry, 1 Sep 2026 — Google Drive was the
only connected Google product). A prior session (Flagship Dominance/Trust
Programme, Phase 7, ~31 Aug 2026) did have direct GSC access for a one-time
review; that access is not available here, and there is no guarantee it will be
available to any specific future session either. Building the demand engine so
it depends on a specific connector being live would make it fragile to exactly
this kind of access gap.

The architecture instead is:

```
PRIVATE EXPORT (CSV today) / API / CONNECTOR  →  NORMALIZED RECORD  →  ANALYSIS  →  PRIVATE REPORT  →  EDITORIAL ACTION
```

`scripts/growth/types.mjs` defines the normalized shapes (`SearchPerformanceRecord`,
`ConversionEvent`, `IndexingPageRecord`). `scripts/growth/gsc-opportunity-report.mjs`
is the first import+analysis path: it reads Search Console's own CSV export
format and produces the query/page opportunity report described in Section 7-9
of the programme brief. A future GSC API path, GA4 Data API path, or connector
path (Supermetrics, if the owner authorizes it) should normalize into the same
records and reuse the same scoring function — not fork the analysis logic.

## Live-API path (D-125, 2 Sep 2026)

A second ingestion path now exists alongside the CSV path below:
`functions/_lib/gsc-refresh.ts` (Cron-triggered daily, and manually via the
"Refresh now" button on `/admin/search-demand/`) pulls live data from the
Search Console API into a Cloudflare D1 database (`mb-search-demand`), and
`/admin/search-demand/` (`src/pages/admin/search-demand.astro` +
`functions/api/admin/search-demand.ts`) renders it as a queryable,
historical trend dashboard -- not just a point-in-time report. Both paths
share the exact same scoring function (`scripts/growth/scoring.mjs`, moved
out of `gsc-opportunity-report.mjs` for this purpose), per this document's
own instruction below not to fork the analysis logic.

This is a deliberate, explicit, owner-directed departure from this
section's "not a build-time/production dependency" default (Section 44 of
the original brief) -- the live path DOES now depend on production
Cron/D1/Google-account access, on purpose, because the owner asked for "a
live, queryable historical-trend dashboard (charts over time, not just
latest report)" rather than the lighter CSV/report-only approach. See
`docs/decision-log.md`, D-125, for the full account of that decision,
including why it runs counter to this section's original principle rather
than pretending it doesn't. The CSV path below is unaffected and still
works standalone (e.g. for a one-off broader export the live path's row
caps don't cover) -- this is an addition, not a replacement.

## Not a build-time dependency

Nothing under `scripts/growth/` is imported by `astro.config.mjs`, the `build`
script, or any page. It's a standalone reporting tool run manually or via CI,
never a dependency of the production site. This matches Section 44's principle:
`PRODUCTION WEBSITE → direct dependency on Google account access` is the
architecture explicitly being avoided.

## Running it

```
npm run growth:gsc -- --input <folder> --out .growth-private/reports/gsc-opportunity-<date>.md
```

`<folder>` should contain the CSVs Search Console's own UI produces from
**Performance report → Export → Download CSV**, unzipped:

- `Queries.csv` — Top queries, Clicks, Impressions, CTR, Position
- `Pages.csv` — Top pages, Clicks, Impressions, CTR, Position

With no `--input`, or an input folder missing both files, the script prints
`IMPLEMENTED_AWAITING_DATA` and exits cleanly — this is the expected state
until a real export is supplied, not an error.

`.growth-private/` is gitignored. **Never commit a real export or a report
built from one** — see "Owner follow-up data" below for why, and
`docs/growth/README.md`'s own instruction against committing private GSC/GA4
data to a public repository (Section 44 of the programme brief).

## Known CSV-import limitation

Search Console's standalone Queries/Pages CSV export does not carry a
per-query ranking URL — that requires either the GSC UI's per-query "Pages"
filter (manual, one query at a time) or the Search Console API with
`dimensions: ['query', 'page']`. Until one of those is available,
`QUERY_PAGE_MISMATCH` and `CANNIBALIZATION` (Section 7 E/F) are not
auto-populated by the CSV path — the script says so explicitly rather than
guessing a mapping.

## Owner follow-up data

To move the workstreams below from `IMPLEMENTED_AWAITING_DATA` to `COMPLETE`:

**GSC** (Search Console → Performance → Export, and → Indexing → Pages → Export):
- Queries.csv + Pages.csv for the last 28 days
- The same for the previous comparable 28-day period (enables growth-rate scoring)
- A full Indexing → Pages export (reason-by-reason counts, for `docs/growth/indexing-audit-2026-09-01.md`'s open item)
- Ideally, the query dimension filtered per flagship code (0620/0625/0580/9701/9702) for `docs/growth/README.md`'s flagship report

**GA4** (Reports → Library, or Explore → export):
- Pages and screens
- Landing page
- Events (all custom events, not just key events)
- Conversions / key events
- Traffic acquisition

None of these are required for this programme to keep moving — see
`docs/programme-register.md` for what's already done without them.

## Update, 2 Sep 2026: real Indexing/Coverage data ingested

The owner supplied a real Search Console "Pages" (Coverage) export
(`marlbridge.com-Coverage-2026-09-01.zip`) — the reason-by-reason indexing
breakdown Section 12-17 needed is now real data, not `AWAITING_DATA`. See
`docs/growth/indexing-audit-2026-09-02-real-data.md`.

**Still not supplied**: a Performance export (`Queries.csv` + `Pages.csv` with
clicks/impressions/CTR/position). `npm run growth:gsc` and the flagship
demand report both remain `IMPLEMENTED_AWAITING_DATA` until that exists — the
Coverage export and the Performance export are two different GSC reports and
this session received only the former. See "Owner follow-up data" above for
exactly what to export next.

## Update, 2 Sep 2026: real Performance data ingested

The owner supplied a real Search Console Performance export
(`marlbridge.com-Performance-on-Search-2026-09-02.zip`, containing
`Queries.csv` + `Pages.csv`). `npm run growth:gsc` was run against it and is
no longer `IMPLEMENTED_AWAITING_DATA` for the current 28-day window.

The full report (real account data) is saved to
`.growth-private/gsc-opportunity-report-2026-09-02.md`, which is gitignored
and was not committed -- per this file's own instruction above, a report
built from a real export does not belong in the public repository. What can
be recorded here, in aggregate:

- 1,000 queries classified: 1 `CTR_OPPORTUNITY`, 7 `EMERGING_DEMAND`,
  992 `LOW_PRIORITY`. No `HIGH`-priority query opportunities in this window.
- Flagship-code query demand (0620/0625/0580/9701/9702) is minimal in this
  window: a single matching query, 2 impressions, position ~61 -- too sparse
  to draw a conclusion from.
- Page-level report: highest-impression pages are mostly at position 40-80
  with near-0% CTR, consistent with a site still building initial ranking
  authority rather than an on-page problem to fix.
- `QUERY_PAGE_MISMATCH` / `CANNIBALIZATION` are still not populated -- this is
  the pre-documented CSV-export limitation above (needs per-query GSC UI
  filtering or API `dimensions: ['query','page']`), not something the new
  data resolved.
- No comparable prior-28-day export was supplied, so growth-rate / trend
  scoring is not yet possible -- only a single-period snapshot.

Given the low query/impression volumes and lack of a comparison period, this
data does not yet support specific on-page changes -- see the priority order
at the top of the programme brief: a decision not to change a page is valid
when evidence doesn't support changing it. Re-running this report in 28 days
against a fresh export (kept alongside this one) will start showing trend
data.
