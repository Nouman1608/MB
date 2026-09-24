# Marlbridge — canonical programme register

Created 1 September 2026 by the Search Intelligence & Demand-Led Growth
programme, per that programme's own Section 5 instruction to normalize the
site's overlapping programme history into one current record. **Read this
file first**, before starting any further Claude-facing work on this repo.

This register is built from the project-cache documents available to this
session (`programme-status.md`, `flagship-programme-summary-2026-09-01.md`,
and the earlier `flagship-trust-programme-phase*.md` series) plus this
session's own direct repo inspection (HEAD `cf57e7e`, `npm run build` +
`npm run audit:all` + `npm run validate:academic`, all clean, 1 Sep 2026).
Where this session has not independently verified a claim from those
documents, that's stated rather than presented as confirmed.

## Current status, 25 Sep 2026 00:30 PKT — read this first

*Added by the register reconciliation (D-328). The 1-2 Sep 2026 table further down is kept as
history. Where the two disagree, this section is current.*

States used separately: **owner decision** · **implemented** (in source on `main`) · **tests
passed** · **merged** · **deployed** (Cloudflare Workers Builds succeeded for that commit) ·
**independently verified** (checked on production or by the audit, with the date) · **still
unverified**.

| Programme | Current state | Evidence | What is still missing |
|---|---|---|---|
| Content audit (rounds 1-60, audit instance) | Paused after round 60. No audit finding open. | `docs/audit/README.md` (round 60, run 2026-09-22 20:02 PKT) | 79 resources added after round 19 unread; repairs from D-285 onward unchecked; HANDOFF §5 items 2, 5, 6 open |
| Repair programme (D-138 to D-284) | Merged, deployed; every declared closure independently checked by the audit | Rounds 12-60 | Nothing from the audit |
| International Growth (D-295 to D-308) | Merged 2026-09-23 22:47 PKT (`a4f1f9b8`), deployed, verified live 2026-09-25 00:05 PKT | Country pages return 200; admin API returns 401 | Owner items 7, 8, 14, 16, 18 in `docs/business-decisions-register.md` |
| Revision tools and diagnostics (D-286 to D-326) | Merged, deployed. 31 diagnostic sets across 19 syllabuses. **No set has been reviewed as a set by a subject teacher**; every set page says so | `src/data/diagnostics.ts` (`setReview` unset on all 31); live `/practice/0620/diagnostic/core/` | Teacher review of each set (see `docs/content-review/diagnostic-set-review.md`); academic check of the 71 practice files added 24 Sep |
| CI gate (`.github/workflows/deploy.yml`) | **Repaired.** Failed on all 18 pushes from the International Growth merge (`a4f1f9b8`, 23 Sep 23:50 PKT, which carried D-297/D-298) to D-326; passes again from `d6cf86ae` (PR #76, run 36044833918) | D-327 | — |
| Measurement of resource → diagnostic/practice → trial journeys | **Baseline measured** (GA4, 28 Aug to 24 Sep): 1 diagnostic page view, 0 completions, 6 leads. Too early to judge; no new content commissioned | `docs/growth/journey-measurement-2026-09-25.md` | Re-measure on 24 Oct 2026; owner to register `cta_location` in GA4 |
| Search Intelligence & Demand-Led Growth (1 Sep) | Tooling live (D-122 to D-125, D-285); the "ACTIVE" row below is historical | `/admin/search-demand/` live, API key enforced | — |

**CI is not the production gate.** Cloudflare's Git integration builds and deploys every push to
`main` whether or not the GitHub "CI gate" passes: `a1235b59` (D-326) failed `validate` and was
still deployed by Workers Builds. The CI gate reports; it does not block. What command
Cloudflare's build runs is **still unrecorded** — it can only be read in the Cloudflare dashboard
(Workers & Pages → `mb` → Settings → Build). Until it is recorded, a red CI run is the only
signal that a broken change went live.

**Carried-forward items at the bottom of this file:** the Section 11 roles, the R11 backup
safeguarding contact and the Weeks 9-12 reviewer are still unanswered anywhere in the repository
or project documents. Each needs a name from the owner.

---

## Programme table as of 1-2 Sep 2026 (history)

| Programme | Status | Scope | Last update | Next action |
|---|---|---|---|---|
| **Marlbridge Global Growth Programme** (marketing calendar, GA4, Deliverables A-H) | MAINTENANCE | Content calendar, measurement spec, approval/risk register, production pack | 1 Sep 2026 (`programme-status.md`) | Small open items only — see below |
| **v1.x Closure Release** (WS1-9) | COMPLETE | Not detailed in this session's available sources beyond its name and closure date | Closed 27 Aug 2026 | None known |
| **v2.0 MEGA PROGRAMME** (WS0-21 + WS-IB) | COMPLETE | Assessment-structure data model (141/160 ACTIVE combinations — confirmed live by this session's own `validate:academic` run), IB programme (WS-IB) | Closed 28 Aug 2026 | Risk R13 (IB licence documentation) resolved 2026-09-04 -- owner decided it is no longer a precondition for modeling DP assessment records; see D-127 |
| **AUTHORITY/PRACTICE/TOOLS/GROWTH MEGA PROGRAMME** (WS1-21 of a planned WS0-25) | **COMPLETE (reconciled 2 Sep 2026)** — WS1-21 all shipped and verified live; WS22 superseded by Flagship Dominance/Trust's later WCAG/i18n/CWV work; WS23/WS25 never had defined scope; WS24 had no independent scope beyond a deferred CWV check also superseded | Practice engine, syllabus-code discovery, syllabus-change tracker, command-word guide, exam calendar, grade-threshold explorer, teacher-support CTA, Pakistan/Gulf pages, brand-separation work, one-time GSC review | Reconciled 2 Sep 2026 | None — closed. Full detail in `docs/growth/authority-practice-tools-growth-reconciliation-2026-09-02.md` |
| **Flagship Dominance/Trust Programme** (57-section brief, D-090 → D-118) | COMPLETE for its 8 phases | Trust rollout, WCAG audit, technical SEO, Core Web Vitals, flagship gap dashboard, 0620/9701/9702 examiner-report depth audit, 0580 taxonomy correction | 1 Sep 2026 (D-118) | Two genuinely open items carried into the programme below: the 0580/0625 examiner-report gap (now partially resolved — see `docs/growth/0580-0625-examiner-evidence-2026-09-01.md`) and the GSC "demand engine" itself (now started — see below) |
| **Search Intelligence & Demand-Led Growth Programme** (this one — 60-section brief) | ACTIVE | GSC demand-engine tooling, indexing audit, examiner-evidence follow-up, practice/conversion analytics audit, content-decision engine, linkable-asset audit | 1 Sep 2026 | See `docs/growth/` for each workstream's status; practice-event instrumentation is the top queued build |

## Update, 2 September 2026 (Search Intelligence Execution Round)

The AUTHORITY/PRACTICE/TOOLS/GROWTH programme row above is now reconciled,
not guessed at — see `docs/growth/authority-practice-tools-growth-reconciliation-2026-09-02.md`.
Bottom line: it was not stalled or abandoned. WS1-21 all shipped and are
verified live in the current codebase; WS22's intent was later covered by a
different programme; WS23 and WS25 never had recorded scope; WS24 had no
independent scope beyond a deferred check that was also later covered
elsewhere. No further action needed on this programme.

This update also corrects a real error in the previous round's
`docs/growth/linkable-assets-outreach.md`, which wrongly stated the
syllabus-change tracker and exam-calendar tool didn't exist yet — both
already existed (D-070/D-072), along with the command-word guide (D-071) and
grade-threshold explorer (D-073). Corrected in that document directly.

## Overlap and supersession notes (the actual point of this register)

- **Search Console review**: the Flagship Dominance/Trust Programme did a
  **one-time** GSC review in its Phase 7 (~31 Aug 2026, real but temporary
  access). This programme picks up where that left off — building the
  **ongoing tooling** (`scripts/growth/gsc-opportunity-report.mjs`) that
  Phase 7 explicitly said it was not attempting. Not duplicate work; the two
  are sequential.
- **0580/0625 examiner evidence**: Flagship Dominance/Trust (D-111/112/115/117)
  found this blocked using the owner's own folders and available material.
  This programme found real official examiner reports via direct web search
  (not the owner's folders) — see `docs/growth/0580-0625-examiner-evidence-2026-09-01.md`.
  This is a genuine update, not a contradiction: different search method, same
  underlying question, better answer.
- **Practice-gap work**: Flagship Dominance/Trust's D-108-D-117 closed
  *content* gaps (missing practice questions against real subtopics). This
  programme's practice-analytics audit (`docs/growth/practice-conversion-analytics.md`)
  is about *usage instrumentation* (do we know which topics students actually
  struggle with) — a different question the prior programme didn't attempt.
  Not duplicate work.
- **AUTHORITY/PRACTICE/TOOLS/GROWTH programme's status is now resolved
  (2 Sep 2026), not a gap.** WS1-21 shipped and are verified live; see the
  "Update, 2 September 2026" section above.

## Governance rule (Section 50 of the brief that created this register)

Before starting new work on this repo, read this file. If a workstream you're
about to start overlaps a row above marked ACTIVE or MAINTENANCE, check that
row's "Next action" and the relevant detail doc first — don't restart work
already recorded here.

## Still-open items carried forward from prior programmes (not resolved by this pass)

- Section 11 roles (growth lead, producer, designer) — not individually named.
- R11 backup safeguarding contact — not named.
- Weeks 9-12 pathway/A-Level content slot — no confirmed reviewer.
- Confirm with the owner what build command Cloudflare's Git integration
  actually runs for the `mb` Worker — `programme-status.md` flags this as
  still unconfirmed as of 1 Sep 2026, and it's the site's real production
  gate, not `deploy.yml`.
