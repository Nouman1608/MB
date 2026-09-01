# Indexing audit — 1 September 2026

Programme: Search Intelligence & Demand-Led Growth (WS2/WS3). Status: **partial**
— everything derivable from the live repo and build output is below; the
reason-by-reason GSC breakdown (Section 12-16) requires a fresh Search Console
**Indexing → Pages** export, which was not supplied and could not be pulled
live (no GSC connector available this session — see `docs/growth/README.md`).

## What's confirmed from this session's own fresh build (HEAD `cf57e7e`)

Ran `npm run build` + `npm run audit:all` directly against a fresh clone, 1 Sep 2026:

- **1,329 pages built**, **1,323 sitemap URLs** (the 6-page gap is the noindexed
  search shells — `/search/`, `/ar/search/`, `/ur/search/`, `/bn/search/` — plus
  the admin gap-dashboard page, all deliberately excluded from the sitemap; see
  `astro.config.mjs`'s sitemap filter and `audit:content-integrity`'s pass).
- **Sitemap / noindex agreement: clean.** All 1,323 sitemap URLs resolved to a
  built page, all indexable (no accidental `noindex`). This directly answers
  Section 13's KEEP/NOINDEX/REDIRECT question for everything currently in the
  sitemap: nothing in it is wrongly excluded from indexing eligibility.
- **Redirects: 1,270 rules** (1,269 static + 1 wildcard), audited clean against
  the live route set — no redirect points at a 404, no redirect loop.
- **i18n: clean.** All 19 translated routes × 4 locales (en/ar/ur/bn, 76 pages)
  have correct self-canonical + reciprocal hreflang + lang/dir. This is the
  expected, by-design source of "Alternate page with proper canonical tag"
  exclusions in GSC (Section 13's second row) — not a defect.
- **No orphan pages, no broken internal links** (`audit:internal-links`, 0
  problems across 1,329 pages / 1,327 distinct link targets).
- **`robots.txt`**: `Allow: /` for all user-agents, sitemap declared. No
  accidental disallow rules found.

None of this proves what GSC has actually indexed — it proves the site is not
*creating* indexing problems for anything currently in its own route set. The
gap between "technically indexable" and "actually indexed" is exactly what a
Pages export would show.

## Last known GSC headline figures (historical context only — do not treat as current)

From the Flagship Dominance/Trust Programme's Phase 7 one-time GSC review
(~31 Aug 2026, `docs/flagship-trust-programme-phase7-2026-08-31.md` per the
project cache — a session with real, temporary GSC access that is not available
to this session):

- Sitemap: 1,270 discovered pages, status Success, last read 31 Aug — close to
  but not identical to this session's fresh 1,323-URL count, consistent with a
  few days of continued page growth.
- Roughly **1.28K pages indexed, ~880 known URLs not indexed**. Stated reasons
  included "Page with redirect" and "Alternate page with proper canonical tag"
  (both expected, matching the redirect/i18n findings above) and
  "Discovered/Crawled — currently not indexed" (normal backlog for a young,
  fast-growing site). **A full reason-by-reason breakdown was never captured**
  — the GSC UI became unresponsive mid-check in that session and it was never
  revisited.

**This is nine-plus-day-old data from a access window this session does not
have. Do not quote it as current.** It is preserved here only so the next
session with real GSC access doesn't have to rediscover it from scratch.

## Expected-exclusion policy (Section 13)

| GSC reason | Expected on this site? | Why |
|---|---|---|
| Alternate page with proper canonical tag | **Yes** | en/ar/ur/bn canonical + hreflang architecture, confirmed clean above |
| Page with redirect | **Yes** | 1,270 confirmed-clean redirect rules |
| Discovered — currently not indexed | Likely, temporary | Normal crawl backlog for a site this size/age; only a concern if the same URLs persist across multiple monthly checks |
| Crawled — currently not indexed | Needs page-quality review per URL | Cannot be assessed without the actual URL list — see below |
| Blocked by robots.txt | **No** — would be unexpected | `robots.txt` allows all; any hit here would be a real bug |
| Excluded by noindex | Only `/search/*` and `/admin/*` | Confirmed the only current noindex targets; any other URL here would be a real bug |
| Soft 404 / Not found / Server error | **No** — would be unexpected | Would need investigation, not left unaddressed |

## What's still genuinely open

1. A fresh **Indexing → Pages** GSC export, filtered per reason, with sample
   URLs — needed to fill in "Crawled — currently not indexed" and confirm the
   "Discovered" backlog isn't growing unboundedly. See
   `docs/growth/README.md`, "Owner follow-up data."
2. Once that export exists, run it through a `Crawled — currently not indexed`
   sample audit per Section 14 (content depth, canonical, orphan status,
   thin-combination risk) — the classification buckets (KEEP+IMPROVE,
   KEEP+WAIT, MERGE, NOINDEX, REDIRECT, REMOVE, GSC BACKLOG) are defined in
   the programme brief and ready to apply once real URLs are in hand.

**Status: IMPLEMENTED_AWAITING_DATA** for the reason-by-reason breakdown;
**COMPLETE** for everything determinable from the live repo/build.
