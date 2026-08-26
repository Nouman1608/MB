# Indexing-efficiency workstream — 2026-08-26

QIGT programme, Section 4. Findings and outcome for each item checked.

## Reconciling the supplied GSC baseline

The brief's figures (501 indexed, 923 not indexed, 385 alternate-canonical, 489 crawled-not-indexed, 48 discovered-not-indexed, 1 noindex-excluded) are from an export not available to re-open this session -- no URL-level list, only these aggregate counts. They also predate this repository's current state by at least the entire Aug 2026 SEO remediation programme (D-023 through D-031: the isIndexableAcademicPage() policy, the redirect/internal-link/content-integrity/font safeguards, and the resource-cluster content work), so a URL-for-URL reconciliation against a several-week-stale export would not be meaningful. What this workstream did instead: verify the CURRENT technical state directly against the live, built site rather than assume the old counts still apply.

## Item-by-item

| Item | Result |
|---|---|
| Self-canonicals | Verified clean. `Meta.astro` derives `canonical` from each page's own `path` prop -- structurally cannot diverge. `audit-redirects.mjs` confirms 0 duplicate canonicals across 1,130 pages (from the prior SEO programme, still holds). |
| HTTP → HTTPS | Verified: `http://marlbridge.com/` redirects to `https://marlbridge.com/` in production. |
| www / non-www | **Finding, not a code fix**: `www.marlbridge.com` does not resolve at all (times out) rather than redirecting to the bare domain. This is a DNS/Cloudflare-dashboard setting, not something in this repository -- flagged in the business/infrastructure recommendations rather than "fixed" here. Low risk in practice since nothing on the site ever links to a `www.` URL. |
| Trailing slash | `trailingSlash: 'always'` in `astro.config.mjs`; verified consistent sitewide. |
| Sitemap-only canonical URLs | Not applicable -- no page emits a canonical pointing anywhere other than its own sitemap URL. |
| No redirected/noindexed URLs in sitemap | Enforced by `audit-redirects.mjs` and `test-sitemap-noindex.mjs` (both pre-existing from the SEO programme, both still green). |
| No internal links to redirects | Enforced by `audit-redirects.mjs`; 0 found. |
| No redirect chains/loops | Enforced by `audit-redirects.mjs`; 0 found across 975 static rules. |
| Robots access | `public/robots.txt` allows all, correctly points at `sitemap-index.xml`; no required asset or page is blocked. |
| Sitemap index references | `sitemap-index.xml` validated directly -- one well-formed `<sitemap>` entry, correct absolute URL. |
| Query-parameter indexability | Verified clean: the `/resources/` subject/level filters are client-side DOM filtering with no URL query parameters generated, so no parameterised-duplicate risk exists. |
| Locale canonicals / hreflang | Verified against the existing i18n architecture (WS5, prior session): hreflang alternates are emitted only on the homepage (the one page with real translated counterparts), each locale page (`/ar/`, `/ur/`, `/bn/`) has its own correct self-canonical. No change needed. |
| Search/utility page indexability | **Real gap found and fixed**: `/search/` (the Pagefind search page) was indexable despite having no fixed content of its own -- Pagefind renders results entirely client-side into an empty container a crawler never populates. Added `noindex={true}` to `src/pages/search/index.astro` and excluded `/search/` from the sitemap in `astro.config.mjs`. Verified via `test-sitemap-noindex.mjs`, which correctly caught the sitemap/noindex disagreement the moment the page-level fix was made before the sitemap-side fix landed -- proof the safeguard actually works, not just that it exists. |
| Canonical agreement (HTML/redirects/sitemap) | Verified via the full `audit:all` chain -- 0 problems. |

## Redirect-inventory audit (synthetic vs genuine historical)

Reviewed `scripts/generate-redirects.mjs`'s own documented rationale and spot-checked several rule categories against it: every rule in `public/_redirects` corresponds to a URL shape that was genuinely live at some point -- flattened `/resources/<type>/<slug>/` URLs (a real prior public shape, replaced by flat `/resources/<slug>/`), the `/learning/` → `/articles/` section rename, and named retired-resource slugs from real content consolidations (`CONSOLIDATED_RESOURCES`, each with a dated rationale comment tied to a decision-log entry). No synthetic, never-public, speculative redirect was found. 975 static + 1 wildcard rule, well within Cloudflare's 2,100-rule combined ceiling (46% used), with an automated warn-at-85%/fail-at-100% guard already in place (`audit-redirects.mjs`, from the SEO programme).

## Page-uniqueness assessment (crawled-not-indexed risk)

The templates most likely to have produced "crawled - currently not indexed" in the stale GSC export -- academic hub pages with thin or duplicated content -- were the direct subject of the preceding SEO programme's Phase 1-3 work: `isIndexableAcademicPage()` now requires 400+ words of substantial original guidance before a hub page is indexable at all, and the 27 pages that previously failed this bar were expanded with real content rather than hidden (D-024). Re-verified this still holds: 0 academic hub pages currently fail the bar (`audit-content-integrity.mjs`, 160/160 checked, 0 problems). No further consolidation action was identified as necessary without a fresh GSC export to confirm which specific URLs are still affected.
