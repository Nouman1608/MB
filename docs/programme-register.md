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

| Programme | Status | Scope | Last update | Next action |
|---|---|---|---|---|
| **Marlbridge Global Growth Programme** (marketing calendar, GA4, Deliverables A-H) | MAINTENANCE | Content calendar, measurement spec, approval/risk register, production pack | 1 Sep 2026 (`programme-status.md`) | Small open items only — see below |
| **v1.x Closure Release** (WS1-9) | COMPLETE | Not detailed in this session's available sources beyond its name and closure date | Closed 27 Aug 2026 | None known |
| **v2.0 MEGA PROGRAMME** (WS0-21 + WS-IB) | COMPLETE | Assessment-structure data model (141/160 ACTIVE combinations — confirmed live by this session's own `validate:academic` run), IB programme (WS-IB) | Closed 28 Aug 2026 | IB licence documentation still not filed (Risk R13, still open per `programme-status.md`) |
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

- IB licence documentation (Risk R13) — still not filed.
- Section 11 roles (growth lead, producer, designer) — not individually named.
- R11 backup safeguarding contact — not named.
- Weeks 9-12 pathway/A-Level content slot — no confirmed reviewer.
- Confirm with the owner what build command Cloudflare's Git integration
  actually runs for the `mb` Worker — `programme-status.md` flags this as
  still unconfirmed as of 1 Sep 2026, and it's the site's real production
  gate, not `deploy.yml`.
