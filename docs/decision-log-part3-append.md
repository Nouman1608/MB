- **7 of 10 already compliant, verified not re-edited:** the board-hub template
  (`src/pages/boards/[board]/[qualification]/[subject].astro`) already generates the checklist items
  programmatically for every combination (code-bearing title/lead, direct-answer opening, syllabus-topic
  headings from real board data, honest resource counts, cross-links, accurate `Course` schema), so all 4 hub
  pages passed as-is; 3 of the 6 resource pages (Urdu O-Level/1st-2nd-language, Islamiyat Paper 1, organic
  chemistry naming) were already compliant from the prior programme's work.
- **3 real, narrow gaps found and fixed:** `a-group-2-quantitative-trends.md` and
  `a-arenes-and-halogenoarenes.md` each ended their "Related resources" list with a bare, unlinked "Cambridge
  AS & A Level Chemistry hub" line while every sibling bullet was a real link -- both linked to
  `/boards/cambridge/a-level/chemistry/`. `a-physics-medical-physics-revision-notes.md` opened with generic
  sitewide boilerplate ("Condensed for the final weeks...") with its syllabus code (9702) appearing only in
  frontmatter, never in visible text -- rewrote the opening to name topic/code/series up front and added a
  "Related resources" section linking to the parent study guide and the Physics board hub. Diff: 3 files,
  11 insertions, 3 deletions -- no new pages, no amounts/facts invented, no bulk content added.
- **No syllabus code/year corrections needed:** spot-checked against Cambridge's own published pages for
  9695 (Literature in English) and 3247 (Urdu First Language) -- both already matched `src/data/academic/
  syllabuses.ts`.
- **Explicitly out of scope, flagged not fixed:** ~30 other `*-revision-notes.md` files across the site share
  the same "Condensed for the final weeks..." generic-opening convention as the one file fixed here -- a
  sitewide pattern, not one of the 10 named pages, left untouched rather than expanding scope unprompted.
- **Guardrail check:** no canonical URL, price, credential or syllabus fact changed; every added link points to
  a real, already-published page.
- **Status:** implemented on `feature/qigt-demand-optimization` (delegated to a subagent with the full checklist
  and ground rules, diff verified directly against the report before merge), full validation gate green
  (`npm run build` 1132 pages, `validate:academic`, `audit:all`, `npm run check` -- 0 errors/warnings/hints).

## D-036 — QIGT Section 7 (search): Pagefind primary-content scoping + filters

- **Date:** 2026-08-26.
- **Workstream:** QIGT programme, Section 7 (Search/Pagefind).
- **Primary-content region fixed:** the production build log showed "Did not find a
  data-pagefind-body element on the site -- Indexing all `<body>` elements", meaning every
  search result on the site carried duplicate header nav, footer and WhatsApp-button text
  alongside the real content, diluting relevance. Added `data-pagefind-body` to the single
  `<main id="main">` element in `src/layouts/BaseLayout.astro` and `src/layouts/LocaleLayout.astro`
  -- together these two `<main>` elements are the sole content wrapper for every page on the
  site (`PageLayout.astro` wraps `BaseLayout.astro`; only `en`/direct-`BaseLayout` pages and the
  three locale pages exist). Confirmed via a clean rebuild: "Found a data-pagefind-body element
  on the site -- Ignoring pages without this tag."
- **Filters added, all from real existing frontmatter, none invented:** `src/pages/resources/[slug].astro`
  now tags Subject and Level (already visible fields) plus Board, Qualification and Resource
  type (not otherwise displayed on this template) via `data-pagefind-filter`; Board/Qualification/
  Resource-type use a `hidden aria-hidden="true"` block since making them visible for the first
  time on 731 pages was outside this workstream's scope -- Pagefind's own docs confirm filter
  capture still applies inside a hidden element. `src/pages/articles/[slug].astro` tags Subject
  (existing visible links) and a literal "Article" Resource-type value. Verified in the built
  HTML that captured values are real and correct (e.g. `Board:Cambridge`, `Qualification:A Level`,
  `Resource type:Study Guides`) -- rebuild log confirms "Indexed 5 filters". `/search/`'s existing
  Default Pagefind UI (`PagefindUI`, no config change made) auto-renders filter checkboxes for
  any indexed filter, per Pagefind's own UI documentation -- no separate filters config needed.
- **Not touched:** the `/resources/` index page's own client-side subject/level dropdown filters
  (already built, task #56/D-pre-QIGT) -- a separate system from Pagefind search, out of this
  item's scope. The Default vs. Component Pagefind UI choice -- left on Default UI (still
  supported per Pagefind's own docs) rather than migrating to Component UI, since that would be
  a UI rebuild disproportionate to what this workstream asked for.
- **Guardrail check:** every filter value is read live from the same frontmatter/data files every
  other page on the site already uses (board/qualification names from `src/data/academic/`,
  resource-type titles from `resourceCategoryMeta`) -- nothing hand-typed, nothing new claimed.
- **Status:** implemented directly on `main`-bound branch `feature/qigt-search-filters`, full
  validation gate green (`npm run build` -- 1132 pages, 5 filters indexed; `validate:academic`;
  `audit:all`; `npm run check` -- 140 files, 0 errors/warnings/hints).

## D-037 — QIGT Section 7 (IA): empty-category navigation + subject-summary qualification honesty

- **Date:** 2026-08-26.
- **Workstream:** QIGT programme, IA/homepage-honesty item (task #78).
- **Empty categories confirmed:** Past Papers and Exam Preparation (`resourceType` values) genuinely have
  0 published resources (verified directly against `src/content/resources/`); Learning Articles (a third
  `resourceType`, distinct from the separate `articles` collection) also has 0. `/resources/` itself already
  handled this honestly from an earlier session (`v1.x CLOSURE WS6`) -- every type gets a real section with a
  truthful "No ... published yet -- in development" state, never hidden, never filled with filler. That page
  was NOT changed. What was fixed: two of the three empty categories (Past Papers, Exam Preparation) were
  linked from `footerNav.resources` in `src/data/navigation.ts` -- meaning literally every one of 1132 pages
  on the site repeatedly promoted two empty sections in its footer. Removed both from the footer nav (leaving
  the sections themselves fully intact and reachable via `/resources/`) and added "Practice Questions" in
  their place -- a real, 225-resource category that, oddly, was not previously linked from the footer at all.
  Same fix applied to the homepage's own resource-category card grid (`src/components/sections/
  ResourcesSection.astro`, the single most prominent page on the site): now filters to categories with
  `counts[slug] > 0` before rendering, so the homepage shows 4 real categories instead of 7 (including 3 that
  read "0 published"). Learning Articles was never linked from footer/homepage to begin with, so no change
  was needed there beyond what `/resources/` already does.
- **Subject-summary qualification-label honesty -- a real, more serious bug than expected:** while checking
  the homepage subject cards (`SubjectsSection.astro`, which display each subject's hand-authored
  `levelsLabel` frontmatter string), cross-referenced all 35 subjects' `levelsLabel` against the real,
  currently-ACTIVE academic matrix (`activeOnly()` logic re-derived independently) and confirmed against
  actually-built pages in `dist/boards/`. Found 11 subjects where the label was wrong -- not just on the
  homepage, but on the subject's own hub page (`/subjects/<slug>/`), which displays the same string directly
  above a "Choose your board and qualification" section listing the real combinations live -- meaning these
  pages were self-contradicting. Two kinds of error: **omission** (biology/chemistry/physics/geography/
  computer-science/world-history each missing "IB Diploma Programme" despite a real, live `/boards/ib/ib-dp/
  <subject>/` page existing; several also missing GCSE; mathematics missing "IB Middle Years Programme";
  business missing IGCSE, GCSE, AS Level AND IB DP; economics and psychology each missing 2-3 real
  qualifications) and **false claim** (Accounting's label said "O · A Level" -- Cambridge O Level Accounting
  does not exist in the matrix and no such page has ever been built; the real offering is IGCSE + A Level).
  Corrected all 11 `levelsLabel` values in `src/content/subjects/*.md` to exactly match the live matrix,
  verified programmatically afterward (33/35 subjects now parse-clean against the matrix; the remaining 2 --
  English and Languages -- are deliberately not qualification-enumerable this way: English spans multiple
  canonical subject entities and Languages already uses the honest "Selected levels" label for the same
  reason, both left untouched). Re-verified the two most-affected labels (`Accounting`, `Economics`) directly
  in the rebuilt HTML.
- **Guardrail check:** every corrected qualification claim was verified against a real, live, already-built
  page (`dist/boards/.../index.html`) before being added -- nothing added on the strength of the matrix data
  alone. No canonical URL changed; no resource content added; the empty-category sections themselves were not
  deleted, hidden from search, or altered in wording.
- **Status:** implemented directly on `main`-bound branch `feature/qigt-ia-honesty`, full validation gate
  green (`npm run build` -- 1132 pages; `validate:academic`; `audit:all` incl. 0 orphan pages after the nav
  change; `npm run check` -- 140 files, 0 errors/warnings/hints).

## D-038 — QIGT Section 8: AEO/GEO/AIO schema and llms.txt truthfulness pass

- **Date:** 2026-08-26.
- **Workstream:** QIGT programme, Section 8 (AEO/GEO/AIO / structured data / llms.txt).
- **Scope:** audited every schema-emitting utility (`src/utils/schema/*.ts`) and every `llms.txt` data path
  against the brief's specific concerns -- FAQ schema mirroring, Course/offering exaggeration,
  Organization/EducationalOrganization identity conflicts, and draft/archived content leaking into `llms.txt`.
  `npm run audit:structured-data` already checks syntactic validity (valid JSON, `@type`/`@context` present)
  but not semantic truthfulness, so this pass was manual/targeted rather than re-running an existing script.
- **FAQ schema mirroring -- verified airtight, no fix needed:** checked all 7 call sites of `faqNode()`
  (`/trial/`, `/contact/`, `/pricing/`, subject hubs, board hubs, qualification hubs, program pages) and
  confirmed every single one passes the exact same array to `faqNode()` and the visible `<FAQ items={...}>`
  component -- structurally guaranteed to match, not just currently matching.
- **Course schema -- verified minimal, no fix needed:** `courseNode()` emits only name/description/provider,
  no `offers`, `aggregateRating`, `hasCourseInstance` or enrollment claims; both call sites are gated to only
  ever run for genuinely ACTIVE, Marlbridge-taught combinations (one explicit check, one structurally
  guaranteed by route generation itself already filtering to `isPublishable()`).
- **Organization/EducationalOrganization identity -- verified no conflict, no fix needed:** exactly one
  `EducationalOrganization` node exists site-wide (`organization.ts`'s `siteGraph()`, `@id`
  `/#organization`); the "Marlbridge Academic Team" org-byline uses a distinct `Organization` type with its
  own `@id` and an explicit `parentOrganization` link back to the main entity (pre-existing design from an
  earlier session, `v1.2 WS7`) -- confirmed by grepping the entire codebase for the literal
  `'EducationalOrganization'` string (exactly one occurrence).
- **Real gap found and fixed -- llms.txt draft-resource leak:** `scripts/generate-llms-txt.mjs`'s "Study
  resources" line already only names resourceType categories with at least one real file present (a prior
  session's `v1.2 WS8` fix, still correct) -- but it counted ANY file with that `resourceType`, including a
  hypothetical `reviewStatus: draft` one, which never builds a page and is unreachable
  (`getResources()` excludes drafts -- see D-032/#73). Currently 0 draft resources exist, so this was not yet
  producing a live false claim, but it is a real, verified latent bug that would silently misstate the file's
  own stated honesty guarantee ("cannot appear here unless it already has a real, publishable page") the
  moment the draft state -- now a real, enforced feature -- is actually used. Added a `reviewStatus === 'draft'`
  skip. Confirmed behavior-preserving for current content (`git diff public/llms.txt` -- no output) and
  confirmed the existing negative-fixture test `[E]` (adds/removes a past-papers resource, asserts the line
  appears/disappears) still passes unchanged.
- **llms.txt never described as a ranking mechanism:** grepped the entire `src/` tree for any public-facing
  mention of `llms.txt` -- none exists anywhere on the site, so there is no description of it to be wrong
  about.
- **Guardrail check:** no schema property, FAQ answer, course description or llms.txt line was added or
  reworded with new claims -- the only change was closing a latent gap in an existing draft-exclusion rule.
- **Status:** implemented directly on `main`-bound branch `feature/qigt-aeo-truthfulness`, full validation
  gate green (`npm run build`; `validate:academic`; `audit:all`; `npm run check` -- 0 errors/warnings/hints;
  `enquiry-validation.test.mjs` 23/23; `test-negative-validation-suite.mjs` 11/11 incl. `[E]`).

## D-039 — QIGT Section 9: performance + accessibility, fresh multi-page evidence

- **Date:** 2026-08-26.
- **Workstream:** QIGT programme, Section 9 (Performance + accessibility).
- **Method:** real Lighthouse v13.4.1 runs (mobile, simulated throttling) against a local
  `astro preview` server built from this exact session's code -- not production, since several
  of today's merges might not have finished deploying at measurement time (production
  verification belongs to the deployment workstream, #83). Full method note, including how
  Chrome was made to run in this sandbox (`apt-get download` + `dpkg-deb -x` + `LD_LIBRARY_PATH`,
  no root required), and the complete before/after metrics table for all 6 required pages
  (homepage, resource page, board hub, resources index, Free Trial form, search) are in
  `docs/reports/qigt-performance-accessibility-2026-08-26.md`.
- **Real accessibility bugs found and fixed (all verified with a second Lighthouse pass, not
  assumed):**
  1. `--color-gold-600` (`src/styles/global.css`) measured 4.47:1 against `--color-ivory` --
     just under the 4.5:1 AA threshold -- flagged on every page tested. Darkened to `#7A5E10`
     (5.56:1 ivory, 6.11:1 white).
  2. `text-gold-500` (the on-navy gold token) was misused on light-surface numbered-list markers
     in `ResourcesSection.astro` and `resources/index.astro` -- switched to `text-gold-600`.
  3. Resource/article markdown body links relied on color alone to be distinguishable from
     surrounding text (axe `link-in-text-block`) -- added a scoped underline rule to the
     `<Content />` wrapper in both templates.
  4. The cookie-consent banner's Cookie Policy link had no explicit text color, so it fell
     through to the global light-background `a` color rule -- **1.1:1 contrast** against the
     banner's navy-900 background (essentially unreadable). Added `text-on-navy`.
  5. Footer copyright/founding-year text used a hardcoded `#6E7D93` (4.38:1 against navy-900,
     under threshold) instead of the existing `text-on-navy-mute` token (8.06:1) -- swapped in.
  - Net result: accessibility went from 93-97 across the 6 pages (color-contrast failing on
    all 6, link-in-text-block on 1) to **100/100 on all 6**, confirmed by rerunning Lighthouse
    after each fix.
- **Real performance issue found, documented, NOT fixed this pass:** `/resources/` scores
  Performance 71 with a 1,370ms Total Blocking Time. Root cause verified directly via the
  `mainthread-work-breakdown` audit: the page renders all 731 resource cards into the DOM at
  once (existing subject/level filters hide non-matching cards via the `hidden` attribute
  rather than removing them), producing ~5,200 DOM nodes and 3.7s of Style & Layout work on
  first paint. A structural fix (pagination, virtualization, or lazy per-section rendering)
  would mean restructuring the existing, working, already-tested client-side filter logic --
  more risk than this workstream's "smallest safe change" scope justifies without dedicated
  follow-up testing. Recorded as a recommendation for a future session rather than either
  silently left unmentioned or rushed under time pressure.
- **Confirmed already compliant, not touched:** heading order, accessible names/labels, ARIA
  attributes, `html[lang]`, form-field labeling, tabindex/focus order, target size -- none of
  these were ever flagged by axe-core across any of the 6 pages, in either the before or after
  run.
- **Guardrail check:** every color change is a token-level fix restoring an already-intended
  design relationship (a token's stated purpose vs. its actual measured contrast) -- no new
  color was invented, no visual redesign occurred, and each fix was scoped to exactly the
  elements that were actually failing.
- **Status:** implemented directly on `main`-bound branch `feature/qigt-perf-a11y`, full
  validation gate green (`npm run build`; `validate:academic`; `audit:all`; `npm run check` --
  0 errors/warnings/hints); accessibility verified via real before/after Lighthouse runs, not
  static audit alone.
