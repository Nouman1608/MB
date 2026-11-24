# SEO-FIX-MAP (Phase 0, 24 Nov 2026, PKT)

Worktree `C:\Users\nouma\repos\MB-seo-fixes-2`, branch `seo-fixes-2`, from origin/main @ 6c746ce60.
Baseline build of the same commit (for before-evidence): `C:\Users\nouma\repos\MB-seo-baseline\dist` (appears when `MB-seo-baseline.done` exists next to it).
Do NOT push or deploy. Do NOT run a full `npm run build` in the shared worktree (45+ min, collides); the lead builds. Use targeted scripts/tests, or read the baseline dist.
`node_modules` is not in the shared worktree: junction it to the baseline's after its `npm ci` finishes.

## Already merged on main (mark DONE ELSEWHERE only after you verify the code)
- PR 227 (`seo/audit-part-a`): meta descriptions complete, article:modified_time, no address in JSON-LD, teacher photo alt, noindex author pagination, related-article matching (`src/utils/content/related.ts`).
- PR 230: noindexed author pages 2+ kept out of the sitemap.
- PR 231 (`seo/audit-nov-2026-b`): 3,117 slug renames (`src/worker/slug-redirects.json`, keys are old slugs under /resources/), 10 twin pages retired, sitemap hreflang + index lastmod.
- D-516: split child sitemaps already exist (`src/utils/seo/sitemap-groups.ts`: pages, courses, resources, practice, advanced-courses, articles, authors, author-archives, localized). The brief's S2.1 may therefore be largely DONE: verify counts in the baseline dist.
- Local branch `seo/audit-nov-2026` is the old combined branch; its 3 commits are the content of 227 and 231, so it is not a missing merge.

## Where things are generated
- `<head>`: `src/components/seo/Meta.astro` (title, description, canonical, robots, hreflang, og:*, twitter:*, article:*, JSON-LD @graph). Helpers `src/utils/seo/meta.ts` (pageTitle, metaDescription, absoluteUrl), `hub-titles.ts`, `resource-title.ts`, `indexability.ts`.
- Locale pages: `src/layouts/LocaleLayout.astro` (own head, og:image at ~l.94), `src/i18n/routes.ts` (localePath, TRANSLATED_LOCALES, translationKey), pages under `src/pages/[locale]/`.
- Layouts: `src/layouts/{BaseLayout,PageLayout,LocaleLayout}.astro`.
- JSON-LD builders: `src/utils/schema/{organization,breadcrumb,article,course,faq,person,video}.ts`; sameAs/social list in `src/data/site.ts` (Wikidata Q141667044 is in `social`; it EXISTS on wikidata.org, label "Marlbridge", checked 24 Nov).
- Sitemaps: `astro.config.mjs` (@astrojs/sitemap, lastmod lookup, exclusions, per-type children), `src/utils/seo/sitemap-groups.ts`. Tests: `scripts/test-sitemap-groups.mjs`, `scripts/test-sitemap-noindex.mjs`. robots: `public/robots.txt` (Allow all, points at /sitemap-index.xml).
- Worker: `src/worker/index.ts` (www->apex 301, /resources/<old-slug> 301 from slug-redirects.json), `public/_headers`, `public/_redirects`, `wrangler.jsonc` (`run_worker_first: true`).
- Related content: `src/utils/content/{related,next-steps,resource-next-steps,subject-teachers}.ts`, `src/components/layout/RelatedGrid.astro`.
- Page templates: `src/pages/resources/[slug].astro`, `src/pages/boards/[board]/[qualification]/[subject].astro`, `src/pages/advanced-course-resources/`, `src/pages/authors/`, `src/pages/checklists/`.
- Audit scripts: `scripts/audit-{metadata,structured-data,internal-links,redirects}.mjs`, `scripts/test-i18n-routes.mjs`.
- Totals: `/subjects/`, `/resources/` hub pages and `src/data/` counters (S4.3 finds the source).

## File ownership
- S1: `src/components/seo/**`, `src/layouts/**`, `src/utils/schema/**`, `src/utils/seo/meta.ts`, `src/data/site.ts` (footer/sameAs only), `src/pages/[locale]/**` head wiring.
- S2: `astro.config.mjs`, `src/utils/seo/sitemap-groups.ts`, `src/utils/seo/indexability.ts`, `public/robots.txt`, sitemap scripts/tests.
- S3: report only, plus alt-text fixes in image components/content it names to the lead. Does not touch R2.
- S4: `src/utils/content/**`, hub/total pages, internal-link rewrites, `src/worker/**` untouched.
- S5: new files only (`src/content/**` pilot resource, `docs/`, report md). No edits to existing templates.
Needing a change in another owner's file: write it into your report under "REQUEST TO LEAD".

## Cache finding (lead, curl 24 Nov 12:41 UTC)
`cache-control: public, max-age=0, must-revalidate` (from Workers Assets) yet `cf-cache-status: HIT` on /exam-calendar/, /programs/, /levels/, with no `age` header and identical bodies for the plain and `?v=` URLs: Cloudflare is caching HTML at the edge, ignoring the origin header, and the cache key appears to ignore the query string. That points to a zone Cache Rule ("Cache Everything"/edge TTL override) rather than the Worker. See SEO-FIX-REPORT.md for what to change.
