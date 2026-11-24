# SEO-FIX-REPORT

Written 24 Nov 2026, 15:59 PKT (this machine's clock). Branch `seo-fixes-2` (14 commits on origin/main @ 6c746ce60). Not pushed, not deployed.
Per-agent detail: `reports/S1.md` … `reports/S6.md`, plus `reports/S3-rename-plan.csv`, `reports/S3-r2-copy-commands.txt`, `reports/S5-*.md`.

## Verification run (on the final build of the branch)
| Check | Result |
|---|---|
| `npm run build` (setup, validators, Astro build, Pagefind) | passed, exit 0, 24,247 pages (rebuilt after the last commit) |
| `npm run check` (astro check) | 0 errors, 0 warnings |
| `audit-structured-data.mjs dist` | PASS, 0 problems (24,247 pages) |
| `audit-internal-links.mjs` | PASS: 0 broken, 0 orphans, 0 links to old slugs |
| `test-i18n-routes.mjs` | passed |
| `test-sitemap-groups.mjs`, `test-sitemap-noindex.mjs` | PASS, 23,831 URLs, none noindex |
| `check-duplicate-resource-scope.mjs` | PASS (after reviewed entry for the pilot) |
| `validate-ap-library.mjs` | 3,270 resources valid (also after the last commit) |
| S6 independent review of built HTML | see S6 rows; one pre-existing FAIL, no regressions |

Note: after the commit that fixed 602 AP checklist descriptions (0fe7bfd8e) the site was rebuilt (exit 0) and the structured-data, internal-link, sitemap and i18n checks were re-run: all PASS. A whole-dist re-count of ellipsis descriptions was not completed.

## Phase 0 findings
- **Git:** local branch `seo/audit-nov-2026` is not merged as a branch, but its 3 commits are the content of PR 227 (part A) and PR 231 (B1), both on main, as is PR 230. D-516 had already split the sitemaps.
- **PR 231 redirects, live curl:** the audited URL `/resources/ib-ib-dp-biology-dp-biology-ib-dp-biology-1-a1-1/` returns `301` with `Location: https://marlbridge.com/resources/ib-dp-biology-1-a1-1/`. 20 of 20 random entries from `slug-redirects.json` returned 301 to the exact new slug (checked twice, Phase 0 and S6).
- **Cache headers, live curl, 24 Nov:**
```
/exam-calendar/ /programs/ /levels/ :
  cache-control: public, max-age=0, must-revalidate
  cf-cache-status: HIT (S6 saw MISS on two of them, HIT on /levels/)
  no Age header; ?v=<random> copies also HIT with an identical body
```
  Cause (inferred from headers, I cannot see the dashboard): the origin (Workers Assets) correctly says "always revalidate", yet Cloudflare serves HTML from its edge cache, and the cache key ignores the query string. That points to a zone **Cache Rule** ("Cache Everything" / Edge TTL override) rather than the Worker, and no code in the repo sets s-maxage. **Owner action:** in the Cloudflare dashboard open Caching > Cache Rules (and Page Rules, if any) for marlbridge.com, find any rule that caches HTML or has "Edge TTL: use this TTL / ignore cache-control", and either delete it or set it to "Respect origin" for HTML. Cache key setting: do not ignore query strings. Then Caching > Configuration > Purge Everything (or purge the three URLs plus `/sitemap-index.xml`). A deploy then always serves fresh HTML. I purged nothing.

## Items
| Item | Status | Files | Evidence |
|---|---|---|---|
| S1.1 descriptions | VERIFIED CORRECT for the template and the 10 sampled pages; defects found by S6 (below) | n/a | 0 of 24,247 pages have a description over 155 characters; og and twitter descriptions equal the meta description everywhere. S6 also found 603 ellipsis descriptions (602 AP checklists, 1 Urdu), 5 pages with no description, 2 cut off with no full stop; identical in baseline. 602 fixed (see S1.1b). |
| S1.1b ellipsis in AP checklist descriptions | FIXED | 602 files in `src/content/ap-resources/*/` | `“I can…”` became `“I can”` in the description line only. |
| S1.1c titles over 60 characters | NEEDS OWNER | `src/utils/seo/resource-title.ts` (not changed) | 7,243 indexable titles over 60 (baseline 7,256): resources 6,808, flashcards 315, AP 96, practice 20, checklists 13, boards 7, authors 3. Needs authored `seoTitle` values or a shortening rule. |
| S1.1d translated page titles | FIXED | `src/layouts/LocaleLayout.astro` | `/ar/pricing/`: before `<title>الأسعار</title>`, after `<title>الأسعار — Marlbridge</title>` (when the result is 60 characters or fewer). |
| S1.2 article dates | VERIFIED CORRECT | `src/components/seo/Meta.astro` | `article:published_time` and `article:modified_time` present and equal to JSON-LD dates. "meta-article:published_time" was a summariser artefact. |
| S1.3 structured data | VERIFIED CORRECT | `scripts/audit-structured-data.mjs` (hardened) | 119,575 JSON-LD nodes parse. AggregateRating, Review, address, PostalAddress, ratingValue: 0 occurrences in all of dist. Breadcrumbs 24,012/24,012 match the visible ones. 1,025 FAQPage all match visible Q&A. 150 Course nodes: provider Marlbridge, no `educationalCredentialAwarded`. Minor (S6): Article nodes have no `image` property; no `hasCourseInstance` because that needs real session dates. |
| S1.4 hreflang | VERIFIED CORRECT | n/a | 79 pages with hreflang: all alternates exist, self-canonical, lang/dir right (rtl for ar, ur), reciprocal. Exception: the four noindex `/search/` pages (translated ones point at `/search/`, which has none; same in baseline, harmless). |
| S1.5 social images | REPORT ONLY / NEEDS OWNER | none | `sharp` is already a dependency, so no new package. Per-page images would be ~21,000 PNGs; recommend ~200 shared cards (per course, article, subject/level). Needs a TTF font on the Cloudflare build machine and a card design. Not implemented. Added alt text instead: `og:image:alt` and `twitter:image:alt` now on every page (baseline lacked them on 23,825 pages), value "Marlbridge". |
| S1.6 Wikidata | VERIFIED CORRECT | n/a | Q141667044 returns 200, label "Marlbridge". Footer link and `sameAs` kept. LinkedIn and Trustpilot return 403 to scripts: owner to check logged out. |
| S2.1 sitemap split | DONE ELSEWHERE (D-516), flashcards FIXED | `src/utils/seo/sitemap-groups.ts` | 10 child files, 23,831 URLs: advanced-courses 3,408; articles 15; author-archives 3; authors 25; courses 569; flashcards 1,376; localized 57; pages 40; practice 56; resources 18,282 (the earlier live count was 18,281 before the new pilot). 0 of 3,127 redirected slugs appear in any sitemap. |
| S2.2 lastmod | FIXED (partly) | `astro.config.mjs` | Real dates for flashcard hubs/topics, resource listings and advanced-course hubs. Still without lastmod because no real date exists: courses 10, pages 38, practice 56, localized 57. None equals the build date unless it traces to a real publish date (the pilot, 24 Nov). |
| S2.3 noindex pagination | VERIFIED CORRECT | n/a | Author resource list is the only paginated listing; page 2+ is `noindex, follow` and out of the sitemap, as is `/search/`. The 10 retired twins are in no sitemap. |
| S2.4 namespaces, hreflang in sitemap | VERIFIED CORRECT | n/a | No news/image/video namespaces. 76 URLs carry alternates, reciprocal. |
| S2.5 robots.txt | VERIFIED CORRECT | n/a | `Allow: /` and `Sitemap: https://marlbridge.com/sitemap-index.xml`; Cloudflare injects nothing. |
| S2.6 /checklists/ | REPORT ONLY / NEEDS OWNER | none | Not near-duplicates (AQA GCSE Biology checklist 734 words vs board page 1,929). Owner decision: keep the 167 pages indexable or noindex them (check impressions in `mb-search-demand` first). |
| S3.1 alt text | VERIFIED CORRECT | `TeacherPicture.astro` (comment only) | 54,579 content images on 6,643 pages, 0 missing, 0 empty alt; teacher photos use "Photograph of <name>". Report only: 14,052 alts (26%) are over 300 characters. |
| S3.2 board-neutral rename | REPORT ONLY / NEEDS OWNER | `reports/S3-rename-plan.csv`, `reports/S3-r2-copy-commands.txt` | 337 files (329 neutral, plus 4 A2-pill and 4 owner-reviewed kept); 3,876 references on 1,183 pages; all 337 old names live, all 337 new names 404 (not yet copied). Plan: copy in R2, verify, rewrite references, deploy, delete old only after a recrawl. Option A rewrites 1,183 pages; option B only the 812 non-Cambridge pages and the old files stay. Nothing executed. |
| S3.3 image sitemap | REPORT ONLY | none | Not worthwhile: Google dropped the descriptive image tags in 2022 and images are plain `<img>` on a crawlable host. |
| S4.1 related content | DONE ELSEWHERE (PR 227) | n/a | Verified in code. Soft spots (report only): article related resources match on subject only; `/programs/[slug]` on level only. |
| S4.2 AP path | REPORT ONLY, superseded in part by D-527 | n/a | `/advanced-course-resources/` was deliberate (D-389: College Board guidelines forbid its marks in URLs and meta tags). Owner has since lifted the metadata rule (D-527) and asked for AP on /boards/; the URL was not moved. A move would touch about 3,270 pages, 15 non-content files, ~13.8k in-body links, a wildcard 301, the sitemap-groups matcher and llms.txt. |
| S4.3 one site-wide total | FIXED | `src/utils/content/collections.ts`, About, editorial policy, `/resources/` hub | `getPublishedResourceTotal()` counts non-draft resources once. `public/llms.txt` was regenerated by the build: the stated total went from 18,308 to 18,309 (the pilot resource added one). `/subjects/` shows per-subject badges and no sum. |
| S4.4 broken internal links | VERIFIED CORRECT | `scripts/audit-internal-links.mjs` (check [4] added) | Source: 0 links to old slugs. Built site: 0 broken, 0 orphan, 0 old-slug links. |
| S5.1 top 20 topics | REPORT ONLY | `reports/S5-top20.md` | Ranked from a read-only query of D1 `mb-search-demand`; topic names only, no counts. Low volume, indicative. 3 of 20 are format searches. |
| S5.2 pilot 0620 moles | FIXED, UNREVIEWED | `src/content/resources/cambridge-igcse-chemistry-0620-moles-exam-style-questions-practice.md`, `reports/S5-pilot-derivations.txt`, entry in `check-duplicate-resource-scope.mjs` | 12 original questions, 38 marks. S6 re-derived every answer independently: all match, totals right, command words in the Cambridge glossary. S6 notes: Q11(a) awards three independent marks, so the marking key's "bare correct answer earns full marks" could be misread; the page title is 89 characters (suggest "Cambridge IGCSE Chemistry 0620 Moles: Exam-Style Questions"). `review-pending`: a teacher must check it. It joins the live `/practice/0620/` bank. |
| S5.3 past papers | REPORT ONLY / NEEDS OWNER | `reports/S5-past-papers-design.md` | Library code and tests exist but the manifest is empty; 59 of 166 courses have a past-papers resource page. Owner supplies the files, rights notes and connects `papers.marlbridge.com` to the bucket. |
| S5.4 differentiators | REPORT ONLY / NEEDS OWNER | `reports/S5.md` | "Free, no sign-up" is already stated; "no weekly limit" is stated nowhere and would be a new claim. Depth counts are supportable (166 courses, 30 OxfordAQA courses; ~211 Islamiyat, 127 Pakistan Studies, 214 Urdu resource files). No copy rewritten. |
| AP on /boards/ (owner request, D-527) | FIXED | `src/pages/boards/index.astro`, `src/data/ap/config.ts`, `src/pages/advanced-course-resources/[...root].astro`, `docs/decision-log.md` | Display-only card "AP® (Advanced Placement®)" linking to `/advanced-course-resources/`; matrix and nav untouched. `AP_MARK_IN_METADATA = true`. `/boards/` title before: `Exam Boards: Cambridge, Edexcel, AQA, OCR &amp; IB — Marlbridge`; after: `Exam Boards: Cambridge, Edexcel, AQA, OCR, IB &amp; AP`. AP index title before: `Advanced Course Study Library: STEM, Economics and English`; after: `AP Study Library: Free Notes and Practice for 15 Courses`. |
| Pre-existing defects from S6 | NEEDS OWNER | see list | Description missing on `/advanced-course-resources/calculus-bc/10-5-harmonic-series-p-series-revision-notes/`, `…10-5-…-study-guide/`, `…10-8-ratio-test-convergence-study-guide/`, `/resources/cambridge-igcse-mathematics-0580-ordering/`, `/resources/ocr-a-level-physics-ideal-gases-and-kinetic-theory/`; truncated description on `/resources/oxfordaqa-igcse-urdu-language-9264-my-studies/` and two OCR physics pages (capacitance…). Not fixed here. |

## NEEDS OWNER (questions)
1. **Cache:** will you remove or change the Cloudflare cache rule described above, then purge? (I did not.)
2. **Titles:** accept the ~7,200 titles over 60 characters, or have me add a shortening rule / `seoTitle` values?
3. **Social images:** approve about 200 shared cards, supply a design, and confirm a TTF font may be added to the build?
4. **Checklists:** keep the 167 `/checklists/` pages indexable, or noindex them?
5. **AP URLs:** now that D-527 lifts the metadata rule, do you also want the path moved to one containing "ap" (about 3,270 pages, wildcard 301), and the 3,270 AP resource files' own titles and descriptions rewritten from "(advanced course)" to AP wording?
6. **Image renames:** run the R2 copy, then option A (rewrite 1,183 pages) or option B (812 non-Cambridge pages)?
7. **"No weekly limit":** approve stating it? Where do you want the free / depth line placed?
8. **Pilot:** who is the teacher reviewer for the 0620 moles set; and shorten its title and tighten the Q11(a) marking wording?
9. **Past papers:** supply the paper files and rights notes per board and connect `papers.marlbridge.com`?
10. **Pre-existing description defects** listed in the last row: fix now?
11. **LinkedIn and Trustpilot `sameAs`:** please open both logged out and confirm they load (both return 403 to scripts).
12. **Merge:** open the PR for `seo-fixes-2`? The three public-facing changes to review first are the AP card, the AP metadata, and translated page titles.
