# Decision-log addendum — D-119 through D-124 (Search Intelligence & Demand-Led Growth Programme)

Drafted 1 September 2026. **Not yet appended to `docs/decision-log.md`** — that file is
~442KB / 6,185 lines, too large to round-trip through this session's tools as a single
full-file write (the git contents API this session's GitHub write access uses has no
append/patch primitive — every write replaces the whole file). Appending this text to the
end of `docs/decision-log.md` is a 30-second manual edit, or a five-minute task for any
future session with a lighter-weight way to patch a large file. The content below is final
and ready to paste in as-is, in the repo's own established entry format (matching D-118 and
earlier).

---


## D-119 — New engagement: Search Intelligence & Demand-Led Growth Programme (60-section brief); canonical programme register created

Started 1 September 2026. This programme's own brief (Section 5) required
normalizing the site's now-several overlapping programme records into one
current register before doing anything else — `docs/programme-register.md`
is that register, built from the project-cache documents this session had
visibility into (`claude/programme-status.md`,
`claude/flagship-programme-summary-2026-09-01.md`) plus this session's own
direct repo verification (fresh clone at HEAD `cf57e7e`; `npm run build`,
`npm run audit:all`, `npm run validate:academic` all run clean: 1,329 pages
built, 0 problems across every audit, 146 assessment records / 141 of 160
ACTIVE combinations modeled, 649 practice questions across 5 flagship specs).

One real gap surfaced by that reconciliation, not resolved here: the
"AUTHORITY/PRACTICE/TOOLS/GROWTH MEGA PROGRAMME" (WS1-21 of a planned WS0-25)
has no closure record in any source available to this session — last touched
~29 Aug 2026, status unknown. Flagged for the owner in the register rather
than guessed at.

No GSC or GA4 connector was available this session (checked directly against
the live connector registry — only Google Drive was connected). This
programme's data-dependent workstreams therefore run on a CSV-import
architecture rather than blocking on live access — see D-120.

## D-120 — Search Console demand-engine tooling built (CSV-import path)

`scripts/growth/gsc-opportunity-report.mjs` (+ `csv-lite.mjs`, a zero-dependency
CSV parser, + `types.mjs`, the normalized `SearchPerformanceRecord`/
`ConversionEvent` shapes) — ingests Search Console's own Performance-report CSV
export (`Queries.csv`, `Pages.csv`) and produces a deterministic, explainable
opportunity report (QUICK_WIN / CTR_OPPORTUNITY / NEAR_PAGE_ONE /
EMERGING_DEMAND / flagship-code cross-reference). Scoring formula and
rationale fully documented in `docs/growth/gsc-scoring-methodology.md` —
nothing hidden or ML-derived. Tested against a synthetic fixture (not real
Marlbridge data) to confirm the classification logic; the fixture was deleted
immediately after the test run, not committed.

Wired in as `npm run growth:gsc -- --input <folder>`. Not a build-time
dependency — nothing in `astro.config.mjs` or the `build` script imports
anything under `scripts/growth/`. With no `--input`, or an input folder
missing the expected files, it prints `IMPLEMENTED_AWAITING_DATA` and exits 0
— this is the expected state until a real owner-supplied export exists, not
an error condition.

Known limitation, documented rather than worked around with a guess: the
standalone Queries/Pages CSV export doesn't carry a per-query ranking URL, so
`QUERY_PAGE_MISMATCH` and `CANNIBALIZATION` aren't populated by this import
path — needs either the GSC UI's per-query Pages filter or API access with
`dimensions: ['query','page']`.

`.growth-private/` added to `.gitignore` — real exports and the reports built
from them must never be committed to this public repository.

## D-121 — Indexing audit: everything derivable statically, done; reason-by-reason GSC breakdown still needs a fresh export

`docs/growth/indexing-audit-2026-09-01.md`. Confirmed clean from this
session's own fresh build/audit run: sitemap/noindex agreement (1,323 URLs,
0 problems), redirect health (1,270 rules, 0 problems), i18n/hreflang (76
translated pages, 0 problems), no orphans/broken links, `robots.txt` allows
all with no accidental disallow. Preserved the Flagship Dominance/Trust
Programme's last known GSC headline figures (~31 Aug 2026: 1.28K indexed,
~880 not indexed, reason-by-reason breakdown never captured) explicitly
labeled as historical context, not current data. The full reason-by-reason
breakdown Section 12-16 asks for remains genuinely blocked on a fresh
Search Console Indexing → Pages export.

## D-122 — 0580/0625 examiner-report evidence: found and read (June 2024 series), updating the prior BLOCKED finding

`docs/growth/0580-0625-examiner-evidence-2026-09-01.md`. Direct web search
(not the owner's folders — the method the prior programme's D-111/112/115/117
had exhausted) found official Cambridge International Principal Examiner
Reports for both 0580 Mathematics and 0625 Physics, June 2024 series, freely
downloadable from `cambridgeinternational.org` with no login required. Read a
genuine, sourced sample from each (not the complete documents — coverage
explicitly disclosed in the doc) and extracted 9 patterns per subject, each
mapped to an existing syllabus topic, written in this session's own words
(not copied from the source). No candidate-error claim made without direct
examiner-report support, per Section 49. Scratch PDF content was not retained
beyond the `web_fetch` tool's own temporary cache, matching this repo's
standing practice.

This updates, not reverses, the prior finding: D-111/112/115/117 correctly
reported these as blocked given the search method and material available to
that session at the time. Applying any of the 18 patterns to actual
`src/content/` files is a separate, not-yet-done content task.

## D-123 — Practice/conversion analytics audited; content-decision engine and linkable-asset framework written

`docs/growth/practice-conversion-analytics.md`: confirmed, by direct code
search, that `generate_lead` and `whatsapp_click` fire correctly (matching
`claude/programme-status.md`'s record) and that `qualify_lead`/
`close_convert_lead` correctly never fire client-side (by design, not a gap).
Confirmed, also by direct code search, that **no practice-usage event
tracking exists at all** — not one of Section 26's ten event names is
instrumented on `src/pages/practice/`. This is a real, scoped, buildable gap,
queued as the top item in `docs/programme-register.md`'s next-30-days list
rather than built in this pass (deliberately sequenced after this round's
documentation-only changes so a live-page behavior change gets its own
build+audit+PR cycle).

`docs/growth/content-decision-engine.md` formalizes Section 41's new-content
rule (7 qualifying criteria; "fewer pages than a comparable subject" explicitly
excluded). `docs/growth/linkable-assets-outreach.md` audits the real existing
linkable assets (practice-gap dashboard, grade-threshold/assessment data with
per-record sourcing) and provides the outreach qualification framework —
no prospect contacts fabricated; outreach itself not attempted, per Section 36.

## D-124 — Gate run confirms this round's changes are documentation/tooling-only; no site content or behavior changed

Full gate re-run against the working tree after D-119-D-123: `npm run build`
(1,329 pages), `npm run audit:all` (0 problems across all 11 audits),
`npm run validate:academic` (all validators pass, same coverage figures as
D-119's baseline) — all clean, confirming this round touched no rendered
page. Changes are additive: `docs/programme-register.md`, `docs/growth/*`
(9 files), `scripts/growth/*` (3 files), one `package.json` script entry, one
`.gitignore` addition. Delivered via pull request (this session has real
GitHub write access via an authenticated MCP tool, unlike the git-bundle
handoff pattern prior sessions in this programme's history used) rather than
a direct push to `main` — `main` auto-deploys to production via Cloudflare's
Git integration, and a tooling/documentation round doesn't need to skip
review to reach it.
