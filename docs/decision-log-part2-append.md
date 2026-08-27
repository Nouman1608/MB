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

## D-028 — Phase 6: canonical/redirect audit and _redirects maintainability guard

- **Date:** 2026-08-25.
- **Workstream:** Aug 2026 SEO remediation, Phase 6.
- **Context on scope:** the brief's Section 11 gives GSC category counts
  (385 alternate-canonical, 1 noindex-excluded, 489 crawled-not-indexed,
  48 discovered-not-indexed) and refers to "the supplied Google Search
  Console exports," but no actual URL-level export/file was ever
  provided in this session (only the summary counts survived the
  compaction that also lost the original brief, before it was
  re-pasted). Per the brief's own instruction to classify "the full
  export... where possible," and consistent with this engagement's
  standing rule to verify real repository/production state rather than
  guess, this phase proceeded as a repo-derived canonical/redirect
  health audit covering everything checkable from the actual built
  site and `_redirects` source of truth, rather than fabricating a
  385-row classification with no real data behind it.
- **What was built:** `scripts/audit-redirects.mjs` (new, wired to
  `npm run audit:redirects`), which reads the built `dist/` output and
  `public/_redirects` and checks five things: (1) no sitemap URL is
  also a redirect source; (2) no redirect chains or loops among the
  967 static rules; (3) every static redirect target resolves to a
  real built page; (4) no internal link in any built page points at a
  URL that is itself a redirect source (should link straight to the
  final destination); (5) no two different built pages emit the same
  `<link rel="canonical">` href. Also added a `_redirects`
  maintainability guard inside the same script: Cloudflare Pages caps
  `_redirects` at 2,000 static + 100 dynamic rules (confirmed via
  Cloudflare's own docs, matching the ceiling already noted in a code
  comment in `scripts/generate-redirects.mjs`); the audit now warns at
  85% of the static ceiling and fails outright at or over it, so
  future growth can't silently start dropping rules in production with
  no build-time signal. Current state: 967 static + 1 wildcard rule,
  well within headroom (~48% of the static budget).
- **Real findings, fixed:** the audit caught 2 genuine internal links
  pointing at redirect sources instead of final destinations --
  `the-basic-economic-problem-practice.md` and
  `fundamentals-of-accounting-practice.md` both had a hand-written
  "Related:" link to a pre-consolidation slug (from the Aug 23
  duplicate-content sweep, D-010) that 301-redirects rather than
  linking directly to the surviving resource. Both fixed to link
  straight at the real target
  (`igcse-economics-basic-problem-revision-notes`,
  `igcse-accounting-fundamentals-revision-notes`), verified both files
  exist as real content. Re-running the audit after the fix: 0
  problems (0 chains, 0 loops, 0 broken redirect targets, 0 sitemap/
  redirect overlaps, 0 duplicate canonicals, 0 redirect-pointing
  internal links).
- **No fixes needed for:** canonicals (generated identically from each
  page's own `path` prop via `Meta.astro` -- structurally can't
  diverge or duplicate, confirmed empirically across all 1,122 pages);
  redirect chains/loops (none exist); broken redirect targets (none).
- **Guardrail check:** no redesign; every finding traced to the real
  built site, not assumed; the two link fixes are single-line edits
  correcting a stale slug reference, nothing else touched.
- **Status:** implemented on `feature/seo-phase6-redirect-audit`, full
  validation gate green (astro check, validate:academic, build,
  cross-board-regression, negative-validation-suite, sitemap-noindex
  safeguard, audit:metadata, audit:structured-data, audit:redirects,
  unit tests [13/13], npm audit [0 vulnerabilities], tsc --noEmit,
  wrangler deploy --dry-run).

## D-029 — Phase 9: internal-link graph audit, sitewide

- **Date:** 2026-08-25.
- **Workstream:** Aug 2026 SEO remediation, Phase 9.
- **What was built:** `scripts/audit-internal-links.mjs` (new, wired to
  `npm run audit:internal-links`), which reads the built `dist/` output
  and checks three things across every one of the 1,122 indexable
  pages: (1) no broken internal links -- every internal `href` resolves
  to a real built page or a valid `_redirects` source (a link that
  targets a redirect *source* rather than its destination is a
  separate finding, already covered by `audit:redirects` from D-028, so
  this script doesn't double-report it); (2) no orphan pages -- every
  sitemap URL except the homepage must have at least one inbound
  internal link from some other built page; (3) no non-descriptive
  anchor text ("click here", "read more", "here", "this page", "link",
  "learn more", "more" used as the full visible link text).
- **Independent confirmation of the earlier subagent finding:** the
  Phase 4 subagent (D-027) reported no internal-linking gap for the 3
  named priority hub pages, reasoning that subject hub pages already
  auto-list every board/qualification combination via
  `offeringsForSubject()`. This audit checks the claim exhaustively
  rather than by spot-check: result is 0 broken links, 0 orphan pages,
  0 generic-anchor instances across all 1,122 indexable pages and
  1,122 distinct internal link targets found. The subagent's finding
  holds sitewide, not just for the 3 pages it looked at directly.
- **Board-aware cross-linking:** the 4 priority resource pages already
  got board-appropriate "Related resources" links in D-027 (e.g. the
  Cambridge O-Level Urdu page links to the Cambridge IGCSE Urdu
  equivalent and to Edexcel A-Level Urdu, not to an unrelated board's
  unrelated subject). Extending this pattern sitewide to every resource
  page is the larger Phase 12 content-cluster effort, not a Phase 9
  scope item -- Phase 9 was link-graph *health* (broken/orphan/generic-
  anchor), which is now a permanent, enforced-on-every-build check.
- **Guardrail check:** no redesign; read-only audit script, no content
  or template changed this phase; the clean result reflects real
  measurement, not an assumption -- the full anchor-text and href graph
  of the built site was parsed, not sampled.
- **Status:** implemented on `feature/seo-phase9-internal-links`, full
  validation gate green (astro check, validate:academic, build,
  cross-board-regression, negative-validation-suite, sitemap-noindex
  safeguard, audit:metadata, audit:structured-data, audit:redirects,
  audit:internal-links, unit tests [13/13], npm audit [0
  vulnerabilities], tsc --noEmit, wrangler deploy --dry-run).

## D-030 — Phase 11: all 14 automated safeguard tests wired and green

- **Date:** 2026-08-25.
- **Workstream:** Aug 2026 SEO remediation, Phase 11.
- **What was done:** mapped every one of the 14 required checks from
  Section 15 of the brief to a real, runnable script and ran the full
  set against the built site. 10 of the 14 were already enforced by
  scripts from earlier phases (Phase 2's `test-sitemap-noindex.mjs`;
  Phase 6's `audit-redirects.mjs`; Phase 9's `audit-internal-links.mjs`;
  Phase 10's `audit-structured-data.mjs`; the pre-existing
  `validate:academic` chain for board-aware filtering and syllabus-topic
  mappings). Two genuine gaps were closed this phase:
  - `scripts/audit-content-integrity.mjs` (new, `npm run
    audit:content-integrity`) -- covers items 4/5/6: no indexable
    zero-resource hub page (cross-checks the sitemap against the
    literal "no original Marlbridge resource yet" fallback phrase in
    each hub page's own rendered meta description); no metadata claim
    of N resources when the page body actually links to zero; no
    self-canonical that is itself a redirect source. Checked all 160
    academic hub pages, 0 problems.
  - `scripts/audit-fonts.mjs` (new, `npm run audit:fonts`) -- covers
    item 13: hashes every file in `public/fonts/` and fails if two
    files declaring DIFFERENT weights are byte-identical, which is
    exactly the bug found and hand-fixed in D-025 (a Google Fonts CSS2
    API quirk silently returned the 400-weight binary for a 500-weight
    request). That fix was never previously backed by a regression
    test; it is now. Checked 14 font files, 14 distinct binaries, 0
    problems.
  - Both new scripts wired into `package.json`, plus a new `npm run
    audit:all` convenience script chaining all six `audit:*` checks and
    the sitemap-noindex safeguard in one command.
  - Full mapping table (all 14 items, which script enforces each, and
    the clean result) written to
    `docs/reports/phase11-safeguard-tests.md`.
- **Guardrail check:** no redesign; two new read-only audit scripts, no
  content or template changed this phase; every "PASS" in the mapping
  table reflects a real script execution against the real built output
  this session, not an assumption of correctness.
- **Status:** implemented on `feature/seo-phase11-safeguard-tests`, full
  validation gate green (astro check, validate:academic, build,
  cross-board-regression, negative-validation-suite, `npm run
  audit:all` [all 6 checks + sitemap-noindex], unit tests [13/13], npm
  audit [0 vulnerabilities], tsc --noEmit, wrangler deploy --dry-run).

## D-031 — Phase 12: resource clusters for Urdu, Islamiyat, English Literature, Computer Science, Economics, Accounting

- **Date:** 2026-08-25/26.
- **Workstream:** Aug 2026 SEO remediation, Phase 12.
- **Scope decision:** the coverage report (`npm run coverage:academic`)
  showed real, uncovered topic gaps in every one of the 6 priority
  subjects across every board/qualification -- full coverage would have
  meant many dozens of new syllabus-verified resource files. Asked the
  user how to scope this; chosen approach was one complete, well-
  verified cluster (study guide + revision notes + practice questions,
  cross-linked) per subject, targeting the single highest-value real
  gap in each -- matching the brief's literal wording and keeping the
  batch of new content bounded and fully verifiable in one session.
- **Gap identification method:** rather than trust filename-pattern
  matching (which produced two false positives -- see below), wrote a
  one-off Python script grouping every resource by its
  `(boards, qualifications, syllabusTopics)` triple and flagging any
  study-guide group with no matching revision-notes/practice-questions
  in the SAME group. This caught two real false leads before any agent
  wasted effort on them: `a-level-oxfordaqa-computer-science-procedural-
  programming.md` already had a matching cluster under the differently-
  named `a-computer-science-procedural-revision-notes.md` /
  `-practice.md`; `a-level-oxfordaqa-accounting-role-of-the-accountant.md`
  already had one under `a-accounting-role-revision-notes.md` /
  `-practice.md`. Both were confirmed via frontmatter (`boards`,
  `syllabusCodes`, `syllabusTopics`), not guessed. Result: Computer
  Science and Accounting already had a complete cluster before this
  phase started -- no new content was needed for either, and none was
  fabricated to hit an artificial "6 clusters" quota. Only "Related
  resources" cross-links were added to those two guides, completing the
  triad's explicit interlinking without duplicating content.
- **4 real gaps found and filled**, each verified against the relevant
  official board syllabus (via WebSearch/web_fetch for 3, and directly
  from the existing guide's own already-cited, already-verified 2026
  syllabus PDF for the 4th):
  - **Urdu** -- Cambridge O-Level 3247/3248, Paper 1 Reading and
    Writing: `o-level-cambridge-urdu-first-and-second-language-
    revision-notes.md` and `-practice.md` (new).
  - **Islamiyat** -- Cambridge O-Level 2058, Paper 1:
    `o-level-islamiyat-paper-1-revision-notes.md` and `-practice.md`
    (new).
  - **English Literature** -- Cambridge A-Level 9695, Paper 1 Drama and
    Poetry: `a-level-english-literature-paper-1-drama-and-poetry-
    revision-notes.md` and `-practice.md` (new). English Literature had
    ZERO complete clusters anywhere in the repo before this phase,
    across every board -- the largest real gap of the 6 subjects, and
    directly relevant since Cambridge A-Level English Literature was
    one of the 8 named GSC priority pages from Phase 4. Practice
    questions use original, Marlbridge-written extracts rather than any
    named current set text, since the current examination series' set
    texts could not be independently confirmed this session -- avoiding
    the fabrication risk explicitly guarded against in this project's
    standing rules.
  - **Economics** -- Cambridge O-Level 2281, Topic 2 The Allocation of
    Resources: `o-level-economics-the-allocation-of-resources-revision-
    notes.md` and `-practice.md` (new, written directly from the
    existing guide's content, which was itself verified against the
    official 697295-2026-syllabus.pdf on 2026-08-24 -- no new external
    research needed since the guide already carried full section-by-
    section coverage of 2.1 through 2.11).
- **Cross-linking:** all 6 guide files (2 pre-existing complete + 4
  newly-completed) now carry a "Related resources" section pointing to
  their revision-notes and practice-questions siblings, and each new
  revision-notes/practice-questions file links back to its guide and to
  its sibling.
- **Guardrail check:** no redesign; no fabricated syllabus facts, mark
  schemes, or set texts; no duplicate content created (2 planned
  clusters turned out to already exist and were left alone rather than
  padded); every practice-questions file opens with the sitewide
  original-content disclaimer.
- **Status:** implemented on `feature/seo-phase12-resource-clusters`,
  full validation gate green on the combined 1,130-page build (astro
  check, validate:academic, build, cross-board-regression, negative-
  validation-suite, `npm run audit:all` [all 6 audits + sitemap-
  noindex safeguard], unit tests [13/13], npm audit [0 vulnerabilities],
  tsc --noEmit, wrangler deploy --dry-run).

## D-032 — QIGT Section 3: real publication-state enforcement + editorial-policy honesty fix

- **Date:** 2026-08-26.
- **Workstream:** Quality/Indexing/Growth/Trust (QIGT) remediation programme, Section 3 (Quality assurance).
- **Baseline finding:** the required `reviewStatus` enum
  (draft/review-pending/reviewed/changes-requested/archived) and `reviewer`
  reference already existed in `content.config.ts` for resources and
  articles (from an earlier session, docs/decision-log.md D-006). Current
  real data is honest -- 0 of 731 resources and only 1 of 4 articles
  claim `reviewed`, with a real, sourced reviewer on file for that one
  article. But NONE of this was enforced or displayed anywhere: no page
  template read `reviewStatus`/`reviewer`/`isReviewer`, no JSON-LD builder
  emitted a reviewer, and no validator checked the rules the schema
  implies. A genuine, verified gap existed in draft/archived gating:
  resources had no filtering mechanism at all (a `draft` or `archived`
  resource would still build, index and appear in the sitemap); articles
  had a working boolean `draft` field but a SEPARATE, unchecked
  `reviewStatus: "draft"` enum value that could silently disagree with it;
  authors had an equivalent unenforced `publicationState` field.
- **What was built:**
  - `reviewedDate` (optional, coerced date) added to both resources and
    articles schema -- when a genuine review actually happened, distinct
    from authoring dates.
  - `getResources()`, `getArticles()`, `getAuthors()`
    (`src/utils/content/collections.ts`) now all exclude `draft` content
    from routing by default; `getArticles()` also now checks
    `reviewStatus !== 'draft'` in addition to the pre-existing boolean
    field, reconciling the two mechanisms so they cannot disagree.
    `src/utils/content/related.ts` and `resourcesAvailableFor()`
    (`src/utils/content/status.ts`) — every place that lists, links to, or
    counts resources/articles — updated the same way, so a draft item
    can never appear in a listing, related-content block, or subject
    resource-count badge whose own page doesn't actually get built.
  - `astro.config.mjs` gained `buildArchivedContentExclusions()` (mirrors
    the existing `buildIndexabilityExclusions()` pattern): `archived`
    resources/articles still build (so old links don't 404) but are
    excluded from the sitemap, matching the page-level `noindex` the
    templates now derive from `reviewStatus === 'archived'`.
  - `src/pages/resources/[slug].astro` and `src/pages/articles/[slug].astro`
    both now compute a single `genuinelyReviewed` boolean (reviewStatus
    is exactly `'reviewed'`, AND the `reviewer` reference resolves, AND
    that author has `isReviewer: true`) and reuse the SAME computed value
    for both the visible "Reviewed by [name] on [date]" byline and the
    JSON-LD `editor` property (new optional param on
    `articleNode()`, `src/utils/schema/article.ts`) -- there is no
    separate code path where schema could claim a reviewer the page
    itself doesn't show.
  - `scripts/validate-review-integrity.mjs` (new, wired into
    `npm run validate:academic`): reviewStatus "reviewed" or
    "changes-requested" requires a `reviewer` field; that reviewer must
    exist in `src/content/authors/`; that author must have
    `isReviewer: true`; `reviewedDate` must not precede `publishedDate`
    and must not be in the future. Applies identically to every
    `resourceType` -- practice-questions and exam-preparation get no
    weaker rule, addressing the brief's specific concern about those
    types.
  - 5 new negative-fixture tests added to
    `scripts/test-negative-validation-suite.mjs` (section [I]), each
    mutating a real resource file, asserting the validator fails with
    the right message, and restoring the original -- all 5 pass (11/11
    suite total).
  - `docs/reports/review-priority-queue-2026-08-26.md`: the required
    review-priority queue. GSC-based criteria (impressions, positions
    4-20) are explicitly flagged as unavailable this session (no export
    supplied) rather than fabricated; the remaining criteria are
    data-driven from the real repository (225 worked-answer/practice
    resources, 58 on a confirmed spec-transition syllabus, 204 with a
    named author, 244 remainder).
- **Real, verified editorial-policy contradiction found and fixed:**
  `src/pages/legal/editorial-policy.astro` stated "Marlbridge has not yet
  published real, named individual author profiles" and that content
  "carries the Marlbridge Academic Team byline... until real individual
  author profiles are introduced." This is false today: 373 of 731
  resources (majority) already carry a real named individual author
  (`nouman-ahmed`, `iftikhar-azeemi`, `muhammad-ghazali-siddiqui`, and 5
  others), each with a genuine, sourced author page. Rewrote the
  "Editorial policy" and "Authorship and accountability" sections to
  describe the real current state (most resources named-authored, a
  minority organisationally bylined, author pages state only verified
  facts, author and reviewer are explicitly distinct roles). Also
  rewrote "Academic review policy" to honestly describe the newly-
  enforced reviewer model instead of flatly denying any reviewer
  mechanism exists -- it now states plainly that review is real but
  incomplete (one article reviewed so far, the rest honestly
  review-pending), rather than either overclaiming or underclaiming.
  `lastUpdated` bumped to 26 August 2026.
- **Guardrail check:** no fact invented -- every authorship/reviewer
  count cited in the policy rewrite was grepped directly from the
  content files, not assumed; no resource or article was bulk-marked
  reviewed; archived/draft handling is additive (no existing content
  changed state) and only activates once a future editor actually sets
  one of those values.
- **Status:** implemented on `feature/qa-review-integrity`, full
  validation gate green (astro check, validate:academic [now including
  validate-review-integrity.mjs], build, cross-board-regression,
  negative-validation-suite [11/11], `npm run audit:all`, unit tests
  [13/13], npm audit [0 vulnerabilities], tsc --noEmit, wrangler deploy
  --dry-run).

## D-033 — QIGT Section 4: indexing-efficiency audit + /search/ noindex fix

- **Date:** 2026-08-26.
- **Workstream:** QIGT programme, Section 4 (Indexing efficiency).
- **Scope note:** the brief's GSC baseline (501/923/385/489/48/1) comes
  from an export not re-available this session and predates the entire
  preceding SEO remediation programme (D-023 through D-031). Rather than
  force a stale reconciliation, verified the CURRENT technical state
  directly -- full itemised results in
  `docs/reports/qigt-indexing-workstream-2026-08-26.md`.
- **Real gap found and fixed:** `/search/` (the Pagefind results page)
  was indexable despite having no fixed content of its own -- results
  render entirely client-side into a container no crawler populates.
  Added `noindex={true}` to `src/pages/search/index.astro` and excluded
  `/search/` from the sitemap in `astro.config.mjs`. Deliberately made
  the page-level fix first and ran `test-sitemap-noindex.mjs` before the
  sitemap-side fix -- it correctly failed ("in the sitemap but its own
  page renders a noindex robots meta tag"), real proof the safeguard
  built in the prior programme (D-023/D-024) actually catches drift
  rather than just existing.
- **Everything else checked came back clean, not re-implemented:**
  self-canonicals (structurally guaranteed by `Meta.astro`), HTTP→HTTPS
  redirect (verified live), trailing-slash consistency
  (`trailingSlash: 'always'`), no redirected/noindexed/chained/looped
  URLs in the sitemap (already enforced by `audit-redirects.mjs` and
  `test-sitemap-noindex.mjs` from the prior programme), robots.txt
  access, sitemap-index validity, query-parameter indexability (the
  `/resources/` filters are client-side DOM filtering, no URL params
  generated), locale hreflang/canonicals (verified against the existing
  i18n architecture, no change needed).
- **www/non-www finding, explicitly NOT fixed here:** `www.marlbridge.com`
  does not resolve at all (times out), rather than redirecting to the
  bare domain. This is a DNS/Cloudflare-dashboard setting outside this
  repository -- recorded as an infrastructure recommendation, not
  silently left unmentioned, and not attempted without dashboard access
  being explicitly requested.
- **Redirect-inventory audit:** reviewed every redirect-generation
  category in `scripts/generate-redirects.mjs` against its own
  documented rationale; found no synthetic, never-public, speculative
  redirect -- every rule traces to a genuinely-was-live URL shape
  (flattened resource type-prefixed paths, the `/learning/` → `/articles/`
  rename, or a named, dated, decision-logged content consolidation). No
  redirects removed.
- **Page-uniqueness / crawled-not-indexed risk:** the templates most
  likely responsible for that GSC category (thin academic hub pages)
  were the direct subject of the immediately preceding SEO programme;
  re-verified 0 remain below the substantial-original-guidance bar
  (`audit-content-integrity.mjs`, 160/160 checked, 0 problems). No
  further consolidation identified as necessary without a fresh,
  URL-level GSC export to confirm which specific pages are still
  affected.
- **Guardrail check:** no canonical URL changed; the one fix made
  (`/search/` noindex) does not remove or hide the page from users, only
  from search indexing, and is the standard, widely-recommended
  treatment for a client-rendered internal search page.
- **Status:** implemented on `feature/qigt-indexing-repairs`, full
  validation gate green (astro check, validate:academic, build,
  cross-board-regression, negative-validation-suite [11/11],
  `npm run audit:all`, unit tests [13/13], npm audit [0 vulnerabilities],
  tsc --noEmit, wrangler deploy --dry-run).

## D-034 — QIGT Section 5: trust-consistency workstream (pricing display, teaching-location, authorship, licensing, trial flow)

- **Date:** 2026-08-26.
- **Workstream:** QIGT programme, Section 5 (Trust consistency).
- **Pricing display bug fixed (duplicated currency):** `src/pages/pricing/index.astro` rendered every fee as
  `{symbol} {amount} {currency}/unit` -- for regions where the symbol already IS the ISO code (SAR, AED, QAR,
  KWD, BHD, OMR) this produced literal duplication ("SAR 270 SAR/subject/month"), and even where symbol and
  code differ (Rs/PKR, £/GBP) it showed both together, exactly the defect class the brief named. Standardised
  every fee cell, the IB card and both pricing FAQ answers on a single format -- amount + ISO currency code
  only, unit stated separately (e.g. "270 SAR /subject/month", "19,000 PKR /subject/month") -- across the two
  region tables, the one-to-one table, the IB card and the two FAQ answers that previously spelled out symbol
  + code together. No amount, rounding or region was changed; `src/data/pricing.ts` (the canonical source) was
  not touched. Confirmed the three localised homepages (`/ar/`, `/bn/`, `/ur/`) do NOT have this bug -- they
  already show currency in its own labelled table column, separate from the symbol+amount cell, and needed no
  change. Re-ran `validate-pricing-consistency.mjs` after the fix -- still 0 hard-coded fee values outside
  `pricing.ts` across 879 files.
- **Teaching-location wording:** checked homepage (`GlobalVision.astro`), About, Tutoring and Contact for
  consistency. All four already say the same thing in compatible wording -- in-person teaching in Pakistan,
  online for learners elsewhere, resource library open to anyone -- no contradiction found, no change made.
- **Authorship-policy contradiction found beyond D-032's editorial-policy fix:** `src/pages/about/index.astro`
  still claimed "Study material published on Marlbridge is written **and reviewed** by subject specialists"
  (an unqualified, blanket review claim) and separately implied ALL published work carries the organisational
  "Marlbridge Academic Team" byline. Both were false against current data: only 1 of 735 published
  resources+articles has `reviewStatus: reviewed` (`where-igcse-maths-marks-are-lost-early.md`; re-verified
  directly via grep against `src/content/`, matching the review-integrity validator's own count), and 373/731
  resources already carry a real named author, not the organisational byline (the same fact D-032 already used
  to fix `editorial-policy.astro`). Rewrote both paragraphs on About to state the true, current split (most
  resources named-authored, a minority organisationally credited; review is a separate, accountable,
  not-yet-universal check) -- bringing About into the same honest framing D-032 already established elsewhere,
  rather than inventing new wording independently.
- **Licensing contradiction found and reconciled:** `/schools/` explicitly tells schools "No licence, no
  account, no attribution required" to use published resources with their classes, while `/legal/terms/`'s
  "Using our content" section told the same audience to "write to us first" for exactly that use -- a direct
  page-to-page contradiction for the same audience (not just vague inconsistency). Reconciled by narrowing
  Terms to carve out an explicit exception matching what Schools already grants (class use, no permission
  needed) while keeping the "write to us first" requirement for the different, still-real cases Terms actually
  intends to gate -- republishing under another name, resale, other partnerships. Did not touch the sitewide
  footer copyright notice ("© 2026 Marlbridge. All rights reserved.") -- a standard ownership assertion, not
  itself a reuse restriction, so it does not conflict with a specific permission grant elsewhere. The deeper
  question of exactly how far the schools' class-use permission extends (bulk printing, LMS upload,
  modification) is a genuine unresolved scope question, not something inferable from existing wording --
  flagged for the business-decisions register (task #81), not resolved here.
- **Free Trial Class form flow built:** the header/mobile-menu "Free Trial Class" button previously linked to
  the generic five-field `/contact/` enquiry form (`kind="student"`), with qualification/board/subject/level
  left to free-text in the message hint -- exactly the gap the brief named. Added a `trial` `EnquiryKind`
  (`functions/_lib/enquiry-validation.ts`, `src/utils/forms/submit.ts`) with structured required fields
  (qualification, exam board, subject) plus optional availability, and a new dedicated page at `/trial/`
  (`routes.trial`) using `EnquiryForm kind="trial"`; both header buttons now point at `/trial/` instead of
  `/contact/`. Qualification/board/subject dropdown options are read live from `QUALIFICATIONS`/`BOARDS`/
  `SUBJECTS` in `src/utils/academic/`/`src/data/academic/` (the same verified academic-matrix data every board
  hub page already uses), plus IELTS and "General academic support" added on top since both are genuinely
  taught per the existing Contact FAQ but sit outside the examined-syllabus matrix. Deliberately did NOT add a
  separate "level" field distinct from qualification -- in this site's own data model qualification already IS
  the level (see `LEVEL_FOR_QUALIFICATION`), so a second field would either duplicate it or invent a
  schooling-year concept the site does not otherwise use; documented this consolidation in the code comment
  rather than silently doing something different from the brief's literal field list. The submission
  confirmation copy states plainly this is a request, not a confirmed booking, and makes no response-time
  promise (none exists to promise). Added 5 new unit tests for the `trial` kind (required-field validation,
  successful submission, email-body rendering) -- `functions/api/__tests__/enquiry-validation.test.mjs` now
  16/16 passing; updated `test-negative-validation-suite.mjs`'s stale "11 cases" reference to 16.
- **Explicitly identified as genuinely unresolved, not invented an answer for:** discount stacking (can the
  multi-subject and sibling discounts combine?), class duration/frequency, cancellation/refund rules, payment
  schedule/fees, and the precise scope of the schools' content-licence grant. All five are real gaps in
  publicly stated policy, none inferable from existing evidence -- routed to the business-decisions register
  (task #81) rather than guessed at here.
- **Guardrail check:** no business fact, price, or academic claim was invented; `pricing.ts` amounts are
  unchanged; the only qualification/board/subject options exposed anywhere are ones the site already publicly
  claims to teach.
- **Status:** implemented on `feature/qigt-trust-consistency`, full validation gate green (astro build,
  `validate:academic` chain incl. `validate-pricing-consistency.mjs` and `validate-review-integrity.mjs`,
  `audit:all`, `enquiry-validation.test.mjs` [16/16], `test-negative-validation-suite.mjs` [11/11]).

## D-035 — QIGT Section 6: demand-led optimization audit of 10 named GSC priority pages

- **Date:** 2026-08-26.
- **Workstream:** QIGT programme, Section 6 (Demand-led search optimization).
- **Scope:** the 10 pages the brief named as ranking positions 4-20 for real queries --
  4 board-hub pages (`/boards/cambridge/a-level/english-literature/`,
  `/boards/cambridge/o-level/urdu-language/`, `/boards/oxfordaqa/igcse/pakistan-studies/`,
  `/boards/cambridge/igcse/urdu-language/`) and 6 resource pages (`o-level-cambridge-urdu-first-and-second-language`,
  `igcse-islamiyat-paper-1`, `a-group-2-quantitative-trends`, `organic-chemistry-formulae-and-naming`,
  `a-physics-medical-physics-revision-notes`, `a-arenes-and-halogenoarenes`), each re-checked fresh against a
  12-point on-page checklist (direct-answer opening, title/description with spec code, visible syllabus code,
  topic-mapped headings, tables where useful, real cross-linking, accurate schema, currency of any spec-code/year
  claims) rather than assumed already-done from the prior SEO programme's Phase 4/Phase 12 work.
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
