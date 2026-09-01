# Marlbridge — Search Intelligence Execution Round: Final Report

2 September 2026. Branch `growth/search-intelligence-execution-round-2026-09-02`, PR [#46](https://github.com/Nouman1608/MB/pull/46), merged to `main` at commit `8f9e6fdf118b68033c821b076f14b26c9a11e357`. Continues PR #45 (merged 1 Sep 2026, commit `0a1e95d5`).

## A. Baseline

PR #45 confirmed merged and clean before starting (`pull_request_read` → `mergeable_state: clean`, then re-verified `main`'s HEAD matched the merge commit). Fresh clone, full gate run before any edits: build, all 11 audits, all 11 validators, `astro check`, `npm audit` — all clean. This confirmed the round was starting from a genuinely stable base, not an assumed one.

## B. Real Search Console data ingested

The owner-supplied `marlbridge.com-Coverage-2026-09-01.zip` was unzipped and inspected directly rather than assumed. It is a **Coverage/Indexing** export (`Chart.csv`, `Critical issues.csv`, `Non-critical issues.csv`, `Metadata.csv`) — **not** a Performance export (no Queries.csv/Pages.csv, so no clicks/impressions/CTR/position data exists). This distinction is stated explicitly because the two are easy to conflate and unlock different workstreams.

Real reason-by-reason breakdown, from `Critical issues.csv`: Alternate page with proper canonical tag 714 (81.1%), Page with redirect 100 (11.4%), Discovered — currently not indexed 56 (6.4%), Crawled — currently not indexed 6 (0.7%), Excluded by 'noindex' tag 4 (0.5%). Full writeup, including a corrected theory for the 714 figure (see D), in `docs/growth/indexing-audit-2026-09-02-real-data.md`.

**Not supplied this round**: a Performance export. `npm run growth:gsc` and the flagship demand/opportunity report both remain `IMPLEMENTED_AWAITING_DATA` — the tooling is built and tested against synthetic fixtures only.

## C. GSC opportunity report (query/page mismatch, quick wins, etc.)

Not run — blocked on the missing Performance export (see B). `scripts/growth/gsc-opportunity-report.mjs` exists, is documented, and correctly prints `IMPLEMENTED_AWAITING_DATA` with exact export instructions when run without input. `QUERY_PAGE_MISMATCH`/`CANNIBALIZATION` remain flagged as a real, documented limitation of the CSV-import path (needs GSC API or per-query UI filtering) rather than silently unpopulated.

## D. Indexing — real breakdown, and a self-correction

Completed using real data (see B). While writing this up, a **prior session's own claim was checked against the actual code and found wrong**: the 1 September report attributed the 714 "Alternate page with proper canonical tag" pages to the site's en/ar/ur/bn locale/hreflang architecture. Reading `src/layouts/LocaleLayout.astro` and `src/components/seo/Meta.astro` directly shows every locale page is self-canonical — hreflang is a separate mechanism from canonical, so locale pages cannot be the cause. The corrected, better-supported theory (query-string/trailing-slash URL variants, given `trailingSlash: 'always'` in `astro.config.mjs`) is backed by an arithmetic consistency check (1,283 indexed + 880 not-indexed = 2,163 known URLs vs 1,323 sitemap URLs; the ~840 gap is almost exactly matched by 714 + 100 = 814 "Website"-sourced reasons). Flagged as a strong theory, not proven — confirming the exact variant pattern needs a URL-level export not supplied this round.

## E. 0580 / 0625 examiner evidence — full review, not a sample

The prior round explicitly sampled ~400 of ~4,000 combined lines. This round reads **both complete extracted PDF texts end to end** — all 2,108 lines of the 0580 report and all 1,887 lines of the 0625 report — and records a traceable per-question table rather than a curated top-N list. Result: **docs/growth/0580-0625-examiner-evidence-full-review-2026-09-02.md** (~155 distinct 0580 items across Papers 11/12/13/21/22/23/31; ~140 distinct 0625 items across Papers 11/12/13/21/22/23/31/32/33/41/42/43/51 and a partial 52). The document states plainly which paper variants were **not** present in the fetched text at all (0580/33, 41–43; 0625/53, 61–63) and makes no claims about them. Every item is classified EXAMINER_REPORT and paraphrased in original words — no source text copied. The superseded 1 September document was marked SUPERSEDED with a pointer, not deleted, preserving the historical record.

## F. Evidence-backed insights applied to content

Of the ~295 total evidence items, roughly 60 mapped cleanly to existing Marlbridge resources and were applied as small, cited "Examiner report insight" additions — **14 files touched** (11 Mathematics, 3 Physics — the only 3 of 0625's 6 syllabus topics Marlbridge currently covers). Every addition is original prose with an explicit source citation (`*Source: Cambridge International, [subject] [code] Principal Examiner Report, June 2024 series, Paper(s) [list] (verified 2026-09-02).*`), following the site's existing citation convention. Roughly half of the 0625 evidence (electricity/magnetism, nuclear physics, space physics) has no matching resource at all and is recorded as informational-only rather than forced onto an unrelated page or used to justify creating new pages (out of scope for a research/evidence pass).

## G. Practice-usage analytics — real instrumentation, not a plan

Reused the existing, single analytics system. `src/components/analytics/ConsentAnalytics.astro` now also defines a shared `window.mbTrack(eventName, params)` helper — a thin wrapper around the existing `gtag('event', ...)` call that strips any parameter key matching a PII denylist (`email`, `name`, `phone`, `address`, `answer_text`, `question_text`, `password`, `token`) before sending. The already-live `generate_lead` and `whatsapp_click` events were deliberately left untouched (a working conversion path, not touched to use a helper it doesn't need).

`src/pages/practice/[code]/index.astro` now fires 9 of the 11 named events: `practice_start`, `question_answered`, `question_correct`, `question_incorrect`, `quiz_complete` (diagnostic mode only — the only mode with a real, defined end), `retry`, `error_notebook_add` (gated on a genuinely new wrong entry, not every repeat), `weak_topic_click`, `teacher_support_click`. `bookmark_question` and `resource_from_practice` are correctly **NOT_APPLICABLE** — no bookmark feature exists, and the only resource links live in a `<noscript>` fallback unreachable when analytics can fire at all. Full design rationale, including the Section-7 "every answer is an event" volume-model decision, is in `docs/growth/practice-analytics-events.md`.

Only structured, non-PII context is ever sent (spec code, board, qualification, subject, topic, question id, marks, mode, correctness, counts, percentages) — never question/answer text, personal responses, emails, or names.

## H. Validation (Section 10)

`scripts/test-practice-analytics.mjs` — 24 checks, all passing: every implemented event present in source; both NOT_APPLICABLE events confirmed absent from code (not just from the design doc); no `track()` call anywhere includes a banned key; `question_answered` confirmed to carry only the opaque `question_id`, never `qHtml`/`aHtml`; `error_notebook_add`'s new-entry gate confirmed in code; `quiz_complete` confirmed wired only into `showDiagnosticResults()`; the PII denylist's actual stripping *behavior* re-implemented and tested in isolation (not just "the array contains 'email'"); a negative fixture (an injected `email` field) confirmed caught by the same scan. Existing suites re-run and unaffected: `test-negative-validation-suite.mjs` (32/32), `test-cross-board-regression.mjs` (all pass).

## I. Practice-usage reporting + teacher-support attribution

`scripts/growth/practice-analytics-report.mjs` (new) turns a GA4 export into a markdown engagement report — most-practiced topics, mode split, self-reported correct/incorrect rate by topic, retry rate, error-notebook/weak-topic counts, diagnostic completions. Follows the existing `gsc-opportunity-report.mjs` convention exactly (graceful `IMPLEMENTED_AWAITING_DATA` exit-0 with no input, never-fabricates-data banner). Explicitly documents what it does **not** compute (a true diagnostic completion *rate*, since there's no `diagnostic_start` event to form a denominator) rather than inventing one.

`docs/growth/teacher-support-attribution.md` documents the real parameters of `teacher_support_click` and `generate_lead`, and proposes GA4's own session-scoped funnel/path exploration (using GA4's default `client_id`/session_id — nothing invented) as the honest attribution approach, with explicit limits stated (correlation ≠ causation, no cross-device de-duplication, consent-gated visibility). **Every number in the document is AWAITING_DATA** — no GA4 export exists yet.

## J. Programme reconciliation

`docs/growth/authority-practice-tools-growth-reconciliation-2026-09-02.md` classifies every workstream of the AUTHORITY/PRACTICE/TOOLS/GROWTH programme (WS1–WS25) against the live repo and decision log, not the plan alone. Finding: **WS1–21 all COMPLETE and verified live**; WS22 SUPERSEDED by the later Flagship Dominance/Trust programme's WCAG/i18n/CWV work; WS23/WS25 NOT_STARTED (no scope was ever recorded anywhere); WS24 SUPERSEDED/NOT_STARTED. This also surfaced and corrected a real error in `docs/growth/linkable-assets-outreach.md`, which wrongly claimed the syllabus-change tracker and exam-calendar tool were unbuilt — both already existed (D-070, D-072), confirmed live in this session's own build. `docs/programme-register.md` updated to reflect the closure.

## K. Data-driven optimization batch

**Not performed this round.** The brief's priority order for this batch (positions 4–15, high-impression/low-CTR, positions 15–30, wrong canonical ranking) requires the Performance export that was not supplied (see B/C). Per the operating rule that a decision not to change a page is valid when evidence doesn't support changing it, no pages were speculatively edited to simulate this workstream. The correct next step is named in the 30-day plan below.

## L. Validation, commit, PR, merge

Full local gate run before any commit: `npm run build` (1,329 pages), `npm run audit:all` (0 problems across 11 audits), `npm run validate:academic` (all 11 validators pass), `npm run check` (0 errors, 16 pre-existing hints), `npm audit` (0 vulnerabilities), `test-practice-analytics.mjs` (24/24), `test-negative-validation-suite.mjs` (32/32), `test-cross-board-regression.mjs` (all pass) — all green before pushing.

28 files (21 modified, 7 new) pushed across 9 commits to `growth/search-intelligence-execution-round-2026-09-02` via authenticated GitHub API writes, branched cleanly off `main`'s HEAD. PR #46 opened, its file list verified against the local diff (all 28 files present with real, non-empty content), then merged to `main` (commit `8f9e6fdf`).

## M. Deployment

`main` auto-deploys to production via Cloudflare's Git integration on merge — no manual step. Post-merge, `https://marlbridge.com/` was fetched and confirmed live and rendering correctly (nothing broken by the merge). Full propagation of a Cloudflare Git-integration build typically completes within a few minutes of the merge; a script-level check of the deployed practice page's analytics wiring was not performed as part of this session (text-fetch tooling doesn't reliably surface inline `<script>` contents) — worth a quick manual check in a browser as a follow-up.

## N. Definition of Done — self-check against this round's real deliverables

- No GSC, GA4, or examiner-report data was fabricated anywhere — every figure is either read from the supplied real export, computed from those numbers with a stated formula, or explicitly marked AWAITING_DATA/IMPLEMENTED_AWAITING_DATA.
- No analytics event was fired for a feature that doesn't exist (`bookmark_question`, `resource_from_practice` correctly NOT_APPLICABLE, verified in code by a negative test, not just asserted in prose).
- No question/answer text, personal responses, emails, or names are ever sent to analytics — enforced by a structural PII denylist, not just design discipline, and verified with an injected-PII negative test.
- Examiner-report content is original paraphrase with source citations throughout — no source PDF text copied, no scratch copies retained.
- Only genuinely evidence-backed insights were applied to content, and only where a clean resource match existed; no new pages were created to receive orphaned evidence.
- No architecture was restarted, no hundreds of new pages were created, no validators were loosened, no force-push or history rewrite occurred.
- Two real errors from the prior round's own work were caught and corrected in place (the canonical/hreflang theory in D; the "tools not yet built" claim in J) rather than left standing.
- Full validator/audit/build/test gate passed before every commit; PR merged cleanly; production site confirmed live post-merge.
- This report does not promise ranking results and does not launch a new "mega programme" — see the plan below.

## O. Next 30 days

1. Export a real GSC **Performance** report (Queries.csv + Pages.csv, ideally with a prior comparable period) and run `npm run growth:gsc` for the first live opportunity report — this unblocks C, K, and the flagship demand report all at once.
2. Export the per-reason URL lists for "Alternate page with proper canonical tag," "Crawled — currently not indexed," and "Discovered — currently not indexed" from the GSC UI to confirm the theory in D and complete the per-URL reviews still marked PARTIAL.
3. Once real practice-page traffic accumulates, register `topic`, `practice_mode`, and `duration_bucket` as GA4 custom dimensions (Admin → Custom definitions) so `npm run growth:practice-report` can produce more than totals-only output.
4. Do a quick manual browser check that the deployed practice page's `mbTrack` calls are actually firing (Network tab, `collect` requests) — the fastest real confirmation beyond the automated static tests.

## P. Next 60–90 days

- Once a Performance export exists, run the first genuinely data-driven optimization batch (≤10–20 pages, following the brief's priority order) — do not skip straight to a broad rewrite.
- Pull a GA4 Explore funnel (`teacher_support_click` → `generate_lead`) once enough volume exists, and report the raw counts alongside any rate, per `docs/growth/teacher-support-attribution.md`.
- Read the remaining 0580/0625 paper variants not present in this round's fetched text (0580/33, 41–43; 0625/53, 61–63) once available, and pull the June 2025 series once Cambridge publishes it, to confirm which patterns genuinely recur across series rather than appearing once.
- Consider whether to build 0625 content for Electricity & Magnetism, Nuclear Physics, and Space Physics — a real, deliberate scope decision for the owner, not a side effect of the examiner-report review that surfaced the gap.

**Operating model going forward: measure → analyze → improve → measure again.** Not a new phase, not more pages by default — the next concrete unlock is real GSC Performance data, not more research or more content.
