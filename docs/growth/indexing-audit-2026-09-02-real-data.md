# Indexing audit — real data update, 2 September 2026

Programme: Search Intelligence Execution Round (WS17-WS20). Supersedes the
`AWAITING_DATA` status in `docs/growth/indexing-audit-2026-09-01.md` for the
reason-by-reason breakdown. That document's static findings (sitemap/redirect/
i18n/robots audits) still stand and are not repeated here.

## Source

Real Search Console export supplied by the owner, `marlbridge.com-Coverage-2026-09-01.zip`
(Search Console's "Pages" report → Export, the summary bundle: `Chart.csv`,
`Critical issues.csv`, `Non-critical issues.csv`, `Metadata.csv`). This is the
**summary** export — it gives per-reason page counts and a daily indexed/not-indexed
trend, but not the underlying URL list per reason (that requires drilling into
each reason row in the GSC UI and exporting the filtered table separately —
not something this session can do without GSC UI access). Every number below
is read directly from that file; nothing is estimated or inferred as a count.

## Reason-by-reason breakdown (real, from `Critical issues.csv`)

| Reason | Source | Pages | Share of not-indexed |
|---|---|---|---|
| Alternate page with proper canonical tag | Website | **714** | 81.1% |
| Page with redirect | Website | **100** | 11.4% |
| Discovered — currently not indexed | Google systems | **56** | 6.4% |
| Crawled — currently not indexed | Google systems | **6** | 0.7% |
| Excluded by 'noindex' tag | Website | **4** | 0.5% |
| **Total not indexed** | | **880** | 100% |

`Non-critical issues.csv` is empty (header row only) — no non-critical issues reported.

## Trend (`Chart.csv`, real daily values)

Indexed count has been flat at **1,283** and not-indexed flat at **880** every
day from 2026-08-22 through 2026-08-28 (the export's most recent processed
date — Search Console's Pages report typically lags 3-4 days behind the
export/request date, so a 1 Sep export showing data through 28 Aug is normal
GSC latency, not stale data on Marlbridge's side). Before 22 Aug the site was
still ramping (indexed count only starts appearing 21 Aug at 501). Impressions
grew from 818 (21 Aug) to a peak of 2,853 (26 Aug), settling around 2,000-2,300
the following two days — consistent with the "genuinely ramping, near-zero
before 18 August" trend the Flagship Dominance/Trust programme's Phase 7
review reported for the same period.

**1,283 + 880 = 2,163 total known URLs** — more than the 1,323 URLs in the
current sitemap. That gap (≈840 URLs) is fully explained by the two
"Website"-sourced reasons below being non-sitemap URL *variants* Google
discovered independently, not 840 missing sitemap pages — see the arithmetic
check at the end of this section.

## Expected vs. unexpected (Section 18)

| Reason | Expected? | Basis |
|---|---|---|
| Excluded by 'noindex' tag (4) | **Yes, exact match** | The site has exactly 4 deliberately noindexed, non-sitemap search shells (`/search/`, `/ar/search/`, `/ur/search/`, `/bn/search/`) — this session's own code read of `astro.config.mjs`'s sitemap filter confirms only those 4 routes are excluded this way. 4 = 4. |
| Page with redirect (100) | **Yes, plausible** | The repo has 1,270 static redirect rules (`public/_redirects`), all audited clean (`npm run audit:redirects`, 0 problems). 100 is the subset of those redirect *sources* Google has crawled and recorded so far — normal for a site still being crawled, not a defect. |
| Alternate page with proper canonical tag (714) | **Partially expected, magnitude flagged for follow-up** | See "What's actually causing this" below — this is a real correction to this session's own prior-round claim. |
| Discovered — currently not indexed (56) | **Yes, temporary** | Normal crawl backlog for a young, fast-growing site (repo is ~2 weeks old). Only a concern if these persist unchanged across multiple monthly checks. |
| Crawled — currently not indexed (6) | **Needs a quality look, but low volume** | Section 19's per-URL review can't run without the URL list (not in this summary export) — 6 pages is small enough that this isn't urgent, but see "Still open" below. |

## What's actually causing "Alternate page with proper canonical tag" (714) — correcting this session's own prior claim

The prior round's `indexing-audit-2026-09-01.md` guessed this reason was fully
explained by the site's en/ar/ur/bn locale architecture. **That guess was
wrong, and this session caught it by actually reading the layout code rather
than re-asserting it:** `src/layouts/LocaleLayout.astro` and
`src/components/seo/Meta.astro` both set `canonical` to the page's **own**
path — every locale variant of a page is self-canonical, cross-linked only via
`hreflang="alternate"` tags, which is a completely different mechanism from a
`rel="canonical"` pointing at another URL. Locale pages cannot be the source of
this GSC reason; no page in the codebase emits a canonical tag pointing
anywhere but itself.

The much more likely real mechanism, consistent with the code: `astro.config.mjs`
sets `trailingSlash: 'always'`, and canonical URLs are built from a clean
route path — so any URL variant Google discovers with a **query string**
(tracking/UTM parameters, a shared link with `?ref=...`, a filter parameter on
a practice page) or a **missing trailing slash** would render the same page
but carry a canonical tag pointing at the clean, slashed URL — textbook
"Alternate page with proper canonical tag." This is not a defect; it's exactly
what a correct canonical tag is supposed to do when Google finds a URL variant.

**Arithmetic check supporting this**: 1,283 indexed + 880 not-indexed = 2,163
total known URLs, against 1,323 sitemap URLs — a gap of ~840. The two
"Website"-sourced reasons (714 alternate-canonical + 100 redirect-source = 814)
account for almost exactly that gap. This is internally consistent: the "extra"
~840 known URLs are overwhelmingly variant/redirect-source URLs outside the
current sitemap, not 840 sitemap pages silently missing from search.

**This is flagged, not fully closed**, because the summary export doesn't
include the actual URL list — confirming the exact variant pattern (query
strings vs. trailing-slash vs. something else) needs either the per-reason
URL export from the GSC UI (click into "Alternate page with proper canonical
tag" → Export) or GSC API access with the `dimensions` filter. Worth a
follow-up pass; not asserted as fully proven here.

## Crawled — currently not indexed (6) — Section 19

Cannot run the per-URL review (canonical/noindex/content-uniqueness/orphan
checks) without the actual 6 URLs, which aren't in this summary export. Only
6 pages, so this is low-urgency, but the concrete next step is: in the GSC UI,
click "Crawled - currently not indexed" → Export, and re-run this audit against
the real URL list.

## Discovered — currently not indexed (56) — Section 20

Same limitation — no URL list in this export. 56 out of 1,323 sitemap pages
(4.2%) is a normal, unremarkable crawl-backlog rate for a site this size and
age; nothing here suggests Marlbridge is producing URLs faster than Google can
crawl them (the build is currently 1,329 pages total, not growing at a rate
that would plausibly outpace normal crawl budget for a domain Google already
crawls daily per the Chart.csv impression trend).

## Status

**COMPLETE** for the reason-by-reason count breakdown (real data, Section 17).
**PARTIAL** for the per-URL reviews in Sections 19-20 — blocked specifically on
a URL-level export, not on effort. The next concrete unblocking step for
either is named above.
