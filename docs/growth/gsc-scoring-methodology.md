# GSC opportunity scoring methodology

Implemented in `scripts/growth/gsc-opportunity-report.mjs`, function `classifyQuery`.
This document is the human-readable explanation the programme brief (Section 8)
requires: nothing in the score is hidden or ML-derived, every point is traceable
to a stated reason, and this file is the audit trail for the formula.

## Category assignment (Section 7)

A query is assigned exactly one primary type, in this priority order:

1. **QUICK_WIN** — position 4–15 **and** ≥20 impressions. Direct match to
   Section 7A: a page already ranks reasonably and a small improvement could
   move it onto page one.
2. **NEAR_PAGE_ONE** — position >15–20 **and** ≥20 impressions. Section 7C.
3. **EMERGING_DEMAND** — position 20–50 **and** ≥15 impressions. Section 7D.
4. **CTR_OPPORTUNITY** — can override a `LOW_PRIORITY` default (see below) when
   ≥50 impressions and CTR is below a position-typical floor (10% at position
   ≤3, 3% at position ≤10, 1% otherwise — well-known, generic SEO CTR-curve
   bands, not a Marlbridge-specific claim). Section 7B.
5. **LOW_PRIORITY** — default when none of the above apply. Section 7H.

`CONTENT_GAP` (7G), `QUERY_PAGE_MISMATCH` (7E) and `CANNIBALIZATION` (7F) are
not derivable from the standalone Queries.csv/Pages.csv shape — see
`docs/growth/README.md`'s "Known CSV-import limitation." They remain defined
in `scripts/growth/types.mjs`'s `OPPORTUNITY_TYPES` for when a richer import
path (API, per-query filter) is used.

## Score (0–100, uncapped in practice, used only for sorting)

| Factor | Points | Rationale |
|---|---|---|
| Position 4–15 (quick-win band) | +40 | Section 8: highest-leverage, closest to page one |
| Position 11–20 (near-page-one) | +25 | Real but less immediate opportunity |
| Position 20–50 with impressions | +15 | Section 8: "growth rate" proxy in the absence of a `--prev` comparison period |
| CTR below position-typical floor | +20 | Section 8: "CTR gap" factor |
| Flagship spec code (0620/0625/0580/9701/9702) present in query | +15 | Section 8: "flagship specification," "academic priority" |
| Impression volume | +1 per 100 impressions, capped at +20 | Raw demand signal, capped so a single huge-impression outlier can't dominate ranking |

## Priority band

`score ≥ 55` → **HIGH**, `score ≥ 30` → **MEDIUM**, else **LOW**. These
thresholds are a starting point, not a claim of statistical optimality —
adjust them in `classifyQuery` if a real export shows the bands producing an
unhelpfully large or small HIGH bucket, and note the change (with the date and
reason) in this file so the audit trail stays intact.

## Deliberately not scored

- **Practice availability, conversion potential, content coverage, ranking-page
  quality** (Section 8's remaining listed factors) require joining GSC data
  against the repo's own content/practice-coverage data
  (`scripts/practice-gap-report.mjs`, the academic matrix) — a real, doable
  join, not attempted in this first version to keep the scoring function's
  first cut auditable in isolation. Tracked as a follow-up in
  `docs/programme-register.md`.
