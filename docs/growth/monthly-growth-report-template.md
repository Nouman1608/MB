# Monthly growth report — template

Programme: Search Intelligence & Demand-Led Growth (Section 42). Copy this
into a dated file (`docs/growth/reports/YYYY-MM.md` locally under
`.growth-private/` if it contains real account data, or here in `docs/growth/`
if every figure is either non-sensitive or already public) each month.

## 1. Search
- Clicks / impressions / CTR / average position (this month vs. prior month, vs. same month last year if available)
- Top movers: queries that gained or lost the most positions
- `npm run growth:gsc` opportunity counts by type and priority

## 2. Indexing
- Sitemap URL count, indexed count, not-indexed count, reason breakdown
- Any new/unexpected exclusion reasons vs. last month

## 3. Flagship specifications (0620 / 0625 / 0580 / 9701 / 9702)
- Per-spec: clicks, impressions, position trend, practice-question coverage (`npm run report:practice-gaps`), assessment-record coverage (`npm run validate:academic` coverage line)

## 4. Practice usage
- Starts, completion rate, accuracy, retry rate per flagship spec (once instrumented — see `docs/growth/practice-conversion-analytics.md`)

## 5. Conversions
- `generate_lead`, `whatsapp_click` counts and trend (both confirmed live GA4 key events per `docs/programme-status.md`)
- Source-page breakdown once GA4 export/API access exists

## 6. External authority
- New links/mentions found (only if independently verified — do not report unconfirmed claims)
- Outreach status from `docs/growth/linkable-assets-outreach.md`'s prospect table

## 7. Content actions
- What shipped this month, and which `docs/growth/content-decision-engine.md` criterion justified each

## 8. Technical health
- `npm run audit:all`, `npm run validate:academic`, `astro check`, `npm audit` — pass/fail and any new findings
- Core Web Vitals spot-check on 2-3 representative + practice pages

Every section should mark itself **COMPLETE**, **IMPLEMENTED_AWAITING_DATA**, or
**BLOCKED** — never silently omit a section because the data wasn't available
this month.
