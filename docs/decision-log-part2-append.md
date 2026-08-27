## D-024 — 27 pages expanded past the indexability bar instead of staying noindexed

- **Date:** 2026-08-25.
- **Workstream:** Follow-up to D-023, same feature branch. User reviewed
  the 27-page noindex impact from D-023, asked why noindexing was
  necessary rather than adding content, and -- after being told 7 pages
  needed only small, already-verifiable additions while 19 IB pages
  needed real per-subject research -- chose to do all 27 now rather than
  defer the IB ones.
- **Real bug found and fixed along the way:** `LEVEL_FOR_QUALIFICATION`
  (utils/academic/index.ts) had no entry for `as-level` qualifications.
  AQA AS Business (the matrix's only `as-level` row) could therefore
  never match a resource by `level`, regardless of content -- a
  structural gap independent of word count. Added `'as-level':
  'a-levels'`, matching how AS-stage content is already tagged elsewhere
  (`level: ["a-levels"]` + `stage: "AS"`, e.g. the existing 9701 pattern).
  This single fix retroactively surfaced 3 pre-existing, substantial
  resources (2,433 words combined) that were already written and tagged
  correctly but structurally invisible on this page.
- **Content added:**
  - New file `src/content/resources/aqa-as-level-business-course-structure.md`
    (subject-guides, 503 words) -- written directly from already-verified
    syllabus/topics data already in `syllabuses.ts`/`syllabus-topics.ts`
    (verifiedOn 2026-08-19), plus one fact (Paper 1/Paper 2 marks,
    weighting, AOs) confirmed via aqa.org.uk's scheme-of-assessment page
    this session.
  - 7 existing study-guide/subject-guide files (6 English Literature
    across AQA/Edexcel/OxfordAQA + AQA GCSE History) each got a new,
    factual "Assessment at a glance" section -- exam duration, marks,
    weighting, and question structure -- verified against the official
    board specification page already cited at the bottom of each file
    (aqa.org.uk, qualifications.pearson.com, oxfordaqa.com). Two of the
    seven also honestly noted a genuine spec refresh (AQA 7717 for 2027,
    OxfordAQA 9675/9275 revisions) without inventing any future content.
  - 19 IB subject-guide files (14 DP, 5 MYP) each got a new "How it's
    assessed" section, researched against ibo.org subject briefs
    (cross-checked against secondary sources where the primary brief was
    thin), covering SL/HL paper structure and IA weighting for DP
    subjects, and MYP's actual criterion-based model (four criteria per
    subject group, 1-8 scale) for MYP subjects -- explicitly not
    described using DP terminology, since the two programmes' assessment
    models are structurally different.
  - Caught and fixed one internal inconsistency during review: the IB
    History file's original intro (2020 brief) named "six key concepts",
    while the new assessment section (current 2028-examined syllabus)
    named "four specified historical concepts" -- same underlying ideas,
    consolidated differently across syllabus versions. Added one bridging
    sentence explaining this rather than leaving an unreconciled
    contradiction on the page.
  - Where a source didn't give a confirmable number (e.g. one Computer
    Science paper weighting, one ESS paper split), the relevant section
    describes the component without a fabricated percentage, per the
    guardrail against inventing facts.
- **Effect:** All 27 pages now clear the 400-word substantial-content
  bar under `isIndexableAcademicPage()` (D-023) purely on content
  volume/quality -- no threshold or logic change. Rebuilt: 1,123 pages
  (+1 for the new AS Business resource), sitemap 1,122 URLs, exactly
  1,123 minus 404.html -- the only page still noindexed. Full validation
  gate green (astro check, validate:academic, build, cross-board-
  regression, negative-validation-suite, sitemap-noindex safeguard, unit
  tests, npm audit, tsc --noEmit, wrangler deploy --dry-run).
- **Guardrail check:** no content states future syllabus years/reforms
  beyond what a source explicitly confirmed; no fabricated marks or
  weightings; MYP and DP are not conflated; no new duplicate/near-
  duplicate resource files were created (all 26 of the 27 were expansions
  of existing files in place); the one new file (AS Business) fills a
  genuine gap rather than duplicating existing content.
- **Status:** implemented on `feature/seo-indexability-policy`, same
  branch as D-023; not yet merged to `main`.

## D-025 — Phase 3/5/7/10 of the SEO remediation: classification, metadata, fonts, structured data

- **Date:** 2026-08-25.
- **Workstream:** Continuation of the Aug 2026 SEO remediation brief,
  after D-023/D-024 (Phases 1+2) merged to `main`. User said "go ahead
  and do the rest as well" -- proceeding phase by phase, mechanical/
  scriptable phases first.
- **Phase 3 (classification):** Built `docs/reports/seo-page-classification.json`
  and a readable `.md` companion, classifying all 160 ACTIVE
  board+qualification+subject combinations by indexability, resource
  depth and syllabus-verification status. Result: 9 strong (8+
  resources), 110 adequate (2-7), 18 minimal (exactly 1 matching
  resource -- down from 39 before D-024's expansion work, since most of
  that work deepened existing files rather than adding new ones), 23
  syllabus-unverified (all 19 IB DP/MYP combinations plus 4 others), 0
  not-indexable. The "0 not-indexable" figure directly confirms D-023's
  policy + D-024's content work are both holding.
- **Phase 5 (metadata audit):** Scanned all 1,122 built pages'
  `<title>` and meta description. Result was already very clean: 0
  missing, 0 duplicate descriptions, exactly 1 duplicate title pair --
  `src/content/resources/forces-and-motion.md` (Cambridge O Level
  Physics) and `edexcel-igcse-physics-forces-and-motion.md` (Edexcel
  IGCSE Physics) both used the bare title "Forces and Motion" with no
  board/qualification prefix, unlike the sitewide convention. Fixed by
  setting the existing (previously unused anywhere in the repo)
  `seoTitle` frontmatter field to a board-specific value on each --
  `title` (used for the on-page heading, breadcrumbs and internal
  cross-links) is untouched, only the `<title>` tag changes.
- **Phase 7 (fonts) -- real bug found, not just a performance nit:**
  Hash-compared every `public/fonts/*.woff2`. Found the Newsreader and
  Public Sans 500/600-weight files were byte-identical to their
  respective 400-weight files (Newsreader 400≡500, Public Sans
  400≡500≡600, both latin and latin-ext subsets) -- meaning `font-weight:
  500`/`600` in CSS was silently serving regular-weight glyphs. This is
  a visual defect, not merely a wasted-download one: any UI element
  styled with those weights was never actually rendering bolder text.
  Re-fetched the genuine static-weight files individually from Google
  Fonts (a combined `wght@400;500` query incorrectly returned the same
  URL for both weights -- fetching each weight in its own request
  returned correct, distinct URLs) and verified via `fontTools` that
  each replacement file now reports the correct `OS/2.usWeightClass`
  (500/600) and is structurally valid, not just byte-different. Also
  added a `/fonts/*` rule to `public/_headers` (previously absent, so
  fonts fell back to the default no-cache HTML policy) at a 30-day
  `Cache-Control`, matching the reasoning already used for `/images/*`.
  Checked preload usage (`BaseLayout.astro`, `LocaleLayout.astro`):
  already minimal and correct -- only the two base-weight fonts actually
  needed for above-the-fold render are preloaded, so no "unnecessary
  preload" problem existed despite the brief's concern; the real font
  problem was the duplicate binaries, not preload count.
- **Phase 10 (structured data):** Validated JSON-LD across all 1,122
  pages (5,308 typed nodes once `@graph` wrappers are unpacked
  correctly -- an early version of the check script wrongly flagged
  every `@graph`-wrapped page as "missing @type" by checking the
  wrapper object instead of its graph nodes; corrected before trusting
  the result). Result: 0 invalid JSON, 0 missing `@type`, sensible type
  distribution (EducationalOrganization, WebSite, WebPage on every
  page; BreadcrumbList on 979; Article on 727; Course on 167; Person on
  19; FAQPage on 49). No fixes needed -- structured data is clean.
- **Known gap, not addressed this round:** Phase 4 (the 8 named GSC
  priority pages with their exact stats) and the specific 14-item list
  for Phase 11 were given as literal text in the original brief, which
  is no longer available verbatim in this session (only a summary of
  its structure survived context compaction) -- proceeding on those two
  phases would mean guessing at page identities/query terms/test
  specifics rather than working from real GSC evidence, which
  contradicts the brief's own evidence-first method. Flagged to the
  user rather than fabricated.
- **Guardrail check:** no redesign; no invented facts (font weight
  claims verified via fontTools, not assumed); no page's
  content/structure changed, only metadata and static asset files.
- **Status:** implemented directly on `main` via
  `fix/seo-phase-3-5-7-10`, full validation gate green (astro check,
  validate:academic, build, cross-board-regression, negative-validation-
  suite, sitemap-noindex safeguard, unit tests, npm audit, tsc --noEmit,
  wrangler deploy --dry-run).

## D-026 — Phase 8: real Lighthouse/PageSpeed baseline captured

- **Date:** 2026-08-25.
- **Workstream:** Aug 2026 SEO remediation, Phase 8.
- **What was done:** Ran a real, on-demand Lighthouse test against
  production (`https://marlbridge.com/`) via pagespeed.web.dev, through
  the browser (not the API directly -- the PageSpeed Insights REST
  endpoint returned empty via the fetch tool, so the interactive site was
  used instead; this is a legitimate escalation to a JS-rendered page,
  not a workaround of a content restriction). Confirmed via Cloudflare's
  own response headers that the deploy from D-025 was live before
  running the test. Results: Mobile 92/96/100/100 (Performance/
  Accessibility/Best Practices/SEO), Desktop 98/96/100/100. No CrUX
  field data exists yet (traffic below the reporting threshold) --
  reported honestly as lab-only data, not presented as real-user
  metrics. Full detail in `docs/reports/lighthouse-2026-08-25.md`.
- **Honest limitation:** No prior Lighthouse baseline exists from before
  this session's changes, so this is not a true before/after comparison
  -- it establishes the baseline going forward. The brief asked for real
  (not invented) measurement; a real single measurement was captured,
  but claiming a "before" figure would have meant fabricating one, which
  the guardrails explicitly forbid.
- **Status:** documentation-only change (`docs/reports/`), no code or
  content touched, committed directly to `main`.

## D-027 — Phase 4: the 8 named GSC priority pages, plus remaining query-term mappings

- **Date:** 2026-08-25.
- **Workstream:** Aug 2026 SEO remediation, Phase 4.
- **What was done:**
  1. **Sitewide hub-page description fix** (`src/pages/boards/[board]/[qualification]/[subject].astro`):
     replaced the single fixed-boilerplate `<meta description>` template
     (identical wording across all 160 hub pages, the exact problem
     Section 9 of the brief flagged) with a generator that reflects real
     per-page differentiators -- syllabus code, the actual resource
     types present, and resource count, with an honest "no original
     Marlbridge resource yet" fallback for the zero-resource case. This
     is the smallest coherent fix: rather than hand-writing 3 one-off
     descriptions for the named priority pages, the shared template was
     corrected so all 160 hub pages benefit and the underlying
     duplicate-description mechanism can't recur. Re-ran
     `npm run audit:metadata` after the change: 0 missing, 0 duplicate
     titles, 0 duplicate descriptions.
  2. **3 priority hub pages verified/refined**
     (`src/data/academic/syllabuses.ts`): Cambridge A-level English
     Literature (9695) -- confirmed the successor 2027-2028 syllabus
     (721410) is already published and noted its unchanged four-paper
     structure; Cambridge O-Level Urdu (3247/3248) -- confirmed 3248's
     successor 2027-2029 syllabus (721465) is already published;
     Cambridge O-Level Computer Science (2210) -- checked against the
     board's own page and found already current, left unchanged. No
     internal-linking gap found for these pages: subject hub pages
     already auto-list every board/qualification combination via
     `offeringsForSubject()`, so no orphaned or under-linked priority
     page existed.
  3. **4 priority resource pages enriched**: added a direct-answer
     opening paragraph to each (Urdu O-Level Paper 1, Islamiyat IGCSE
     Paper 1, A-level Chemistry Group 2 trends, A-level Chemistry
     halogenoarenes), addressing Section 6's "answer the query in the
     first two sentences" requirement without altering existing content.
     Added "Related resources" sections (previously absent) to the Urdu
     and Islamiyat pages, cross-linking to the matching practice-question
     and revision-note resources plus the adjacent-level equivalent.
     Corrected one real staleness caught in the process: the Urdu
     O-Level Second Language (3248) resource page still cited the
     2024-2026 syllabus PDF; updated to the already-published 2027-2029
     successor (721465), consistent with the `syllabuses.ts` finding
     above.
  4. **6 remaining Section 7 query terms mapped to their correct
     canonical pages and verified/corrected**, closing the gap between
     the 8 named pages and the fuller query list:
     - "a level economics syllabus 2027" / "economics a level syllabus
       2027" -- Cambridge 9708 already current (2026-2028, unchanged);
       AQA 7136 confirmed genuinely current for June 2027 via AQA's own
       published key-dates page; Edexcel YEC11/XEC11 corrected to state
       honestly that it is an evergreen 2018 spec with no year-versioned
       reissue, rather than implying a "2027 syllabus" exists.
     - "cambridge a level english language syllabus" -- 9093 was stale
       (notes still cited the 2024-2026 version); corrected to the
       already-published 2027-2028 version (721359) with full paper
       weightings added.
     - "5070 syllabus 2028" / "physics o level syllabus 2028" -- brief
       mislabelled 5070 as Physics; corrected both real pages: O-Level
       Chemistry (5070, confirmed current, 2026-2028) and O-Level
       Physics (5054, confirmed current, 2026-2028, previously had no
       notes field at all -- added paper structure).
     - "edexcel igcse physics syllabus" -- 4PH1 already current (Issue
       4, September 2024), no change needed.
     - "cambridge a level accounting syllabus" -- 9706 updated to
       Version 2 (Dec 2025), added corrected topic-range and paper
       structure detail.
     - "estimation of physical quantities" -- confirmed the existing
       AQA A-level Physics resource covers this exactly; added a direct
       two-sentence answer opening (order-of-magnitude estimation,
       distinct from precise measurement).
     No future exam series was stated as confirmed unless found on the
     board's own official page; where a query implied a future syllabus
     that does not yet exist (Edexcel Economics, Edexcel IGCSE Physics
     as evergreen specs), this is stated honestly rather than silently
     dropped.
- **Guardrail check:** no redesign; no new pages created; no fact
  asserted without a board-cited source verified this session; existing
  content only added to, never rewritten or deleted; template change is
  the minimal shared fix rather than N one-off patches.
- **Status:** implemented on `feature/seo-phase4-priority-pages`, full
  validation gate green (astro check, validate:academic, build,
  cross-board-regression, negative-validation-suite, sitemap-noindex
  safeguard -- now 0 noindexed pages, confirming the earlier word-count
  expansion fully cleared the indexability bar -- audit:metadata,
  audit:structured-data, unit tests [13/13], npm audit [0
  vulnerabilities], tsc --noEmit, wrangler deploy --dry-run).
