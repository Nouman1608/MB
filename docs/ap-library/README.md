# Advanced-course (College Board AP) learning library

Written 5 October 2026, 03:30 PKT (UTC+5). Decision log: D-389.

## What exists

| Piece | Where |
|---|---|
| Verified 2026-27 framework map (15 courses: units, topics, weightings, May 2027 exam format, practices, prerequisites) | `src/data/ap/frameworks.ts` → `framework-map.md` |
| Official source register (62 entries: 45 checked 5 Oct 2026, 17 for the four computer science and English courses checked 8 Nov 2026) | `src/data/ap/sources.ts` → `source-register.md` |
| Publication switch, neutral route base, trademark attribution, metadata switch | `src/data/ap/config.ts` |
| Content collection `apResources` (one Markdown file per resource, a folder per course) | `src/content/ap-resources/<course>/` (schema in `src/content.config.ts`) |
| Central index | `/advanced-course-resources/` (`src/pages/advanced-course-resources/[...root].astro`) |
| 15 course hubs with the full unit roadmap and per-topic status | `/advanced-course-resources/<course>/` |
| Resource pages (metadata panel, key points, next steps, sources, correction link) | `/advanced-course-resources/<course>/<resource>/` |
| Subject-hub links (Chemistry, Biology, Physics, Mathematics, Statistics, Economics, Computer Science, English, English Literature) | `src/components/ap/ApCourseLinks.astro`, used by `src/pages/subjects/[slug].astro` |
| Build-time validator (runs inside `validate:academic`) | `scripts/validate-ap-library.mjs` |
| Inventory, JSON manifest, framework map, source register | `scripts/ap-library-inventory.mjs` (`npm run report:ap-library`) |
| Metadata schema and content template | `metadata-schema.md`, `content-template.md` |
| Trademark / editorial / search-visibility note | `editorial-integration-note.md` |
| Handover for this batch | `handover-2026-10-05.md` |

## Computer science and English courses (added 8 Nov 2026)

Computer Science A, Computer Science Principles, English Language and Composition and English Literature and Composition are in the framework map, the validator, the inventory and the `apResources` course enum, and their hubs are built, but they have **no resources yet** (every topic shows as planned). Write resources for them as for the other courses.

- **Computer Science A:** 4 units, 53 topics (1.1–1.15, 2.1–2.12, 3.1–3.9, 4.1–4.17) from the Fall 2025 CED.
- **Computer Science Principles:** the CED's five big ideas are Units 1–5 (CRD, DAT, AAP, CSN, IOC); 35 topics with the CED's own numbers.
- **English Language and Composition / English Literature and Composition:** the CEDs number the units (Literature also titles them) but have **no numbered topics**. The topics in `frameworks.ts` (55 and 62) are Marlbridge groupings of each unit's CED skills and essential knowledge statements, recorded per topic in `cedRefs`, and the English Language unit titles are Marlbridge descriptions. Hubs and the framework map say so; never present these numbers as official. The exam is weighted by skill category (Language) or by genre across three units (Literature), not by unit.

## How it fits the existing site

The site's academic system (boards × qualifications × subjects, syllabus topics, grade thresholds, review ledger) is built around exam boards. AP is not an exam board in that matrix, and adding it there would have touched about 15 validators and every hub generator. The library is therefore a self-contained collection with its own data, pages and validator, reusing the site's layouts (`PageLayout`, `Section`, `Container`, `FAQ`, breadcrumbs), Tailwind tokens, `Meta` SEO component, schema helpers, the corrections form, Pagefind search (pages carry `data-pagefind-body` through the layout) and the `MB_PREVIEW_DRAFTS=1` preview convention used for workshops and videos. Maths is written in Unicode, as elsewhere on the site (no equation renderer exists); diagrams are inline, accessible SVG.

## Status (D-390, 5 Oct 2026 03:50 PKT)

**Live.** `AP_LIBRARY_PUBLIC = true` on the owner's instruction. Every resource shows "Checked by Marlbridge Academic Team" (D-388 meaning, not a teacher review).

**Complete for 2026-27 (D-393, D-394, 5 Oct 2026).** Every framework topic has a study guide, revision notes, practice set and checklist; every unit has a diagnostic and a mixed review; every course has two exam-skills guides. Current state, open decisions and next work: `handover-2026-10-05.md`.

## Preview and publish (history)

- Normal build (`npm run build`, what Cloudflare runs): **no library page is built**, the subject hubs show no AP links, the sitemap is unchanged. Verified: production build and `audit:all` pass with 0 problems.
- Preview build: `MB_PREVIEW_DRAFTS=1 npm run build` builds 56 pages (index, 11 hubs, 44 resources), all `noindex` with a "PREVIEW — not published" banner, excluded from the sitemap. `audit:all` passes on the preview build too (metadata, structured data, internal links, accessibility, sitemap/noindex agreement).
- To publish: settle the trademark question (see `editorial-integration-note.md`), get AP-teacher review of the pages you want live, then set `AP_LIBRARY_PUBLIC = true` in `src/data/ap/config.ts`. Optionally restrict to reviewed pages by changing the filter in `getApResources()` (`src/utils/ap/library.ts`).
