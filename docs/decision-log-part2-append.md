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
