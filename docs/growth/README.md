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
