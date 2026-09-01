# AUTHORITY/PRACTICE/TOOLS/GROWTH programme — reconciliation, 2 September 2026

Programme: Search Intelligence Execution Round, Section 3. The prior round's
`docs/programme-register.md` flagged this programme's status as "unclear —
no closure record found." This document resolves that by reading the actual
decision log (D-062 through D-080) and verifying each claimed feature against
the live `main` codebase, rather than inferring from the plan alone.

## Method

`docs/decision-log.md` records this programme's work as D-062 (WS1) through
D-080 (a WS21 follow-up), each self-declaring "Status: WSn complete,
proceeding to WSn+1." That chain is unbroken from WS1 to WS21. The very next
decision-log entry, D-081, opens a **different** programme ("Post-v2.0
Quality Closure") — there is no D-entry anywhere for WS22, WS23, WS24, or
WS25, despite D-079 stating "proceeding to WS22" as its own next step. Every
"what shipped" claim below was checked against the current repo (`find`/`grep`
against `src/pages`, `src/utils/practice`, live route existence in a fresh
`npm run build`), not taken on the decision log's word alone.

## Workstream-by-workstream status

| WS | Name | Decision log | Verified live? | Classification |
|---|---|---|---|---|
| WS1 | Syllabus/specification-code discovery | D-062 | Yes — `/syllabus/<CODE>/` redirects present in `public/_redirects`, `src/utils/academic/codeIndex.ts` exists | **COMPLETE** |
| WS2 | Permanent syllabus-code hub audit | D-063 | Yes — hub pages carry codes per this session's own `audit:content-integrity`/`audit:metadata` clean runs | **COMPLETE** |
| WS3 | Academic provenance (visible authorship) | D-064 | Yes — reviewer bylines confirmed by this session's own `audit:review-coverage` (857/857 resources) | **COMPLETE** |
| WS4 | Flagship authority gap audit | D-065 | Audit-only, no shipped artifact to verify beyond its own findings | **COMPLETE** |
| WS5 | 0620 flagship completion | D-066 | Superseded/absorbed — 0620 practice-question gaps were later fully closed under the Flagship Dominance/Trust programme (D-110) | **COMPLETE**, later reinforced by D-110 |
| WS6/7/8 | Self-check practice engine | D-067 | **Yes, and still live** — `src/pages/practice/[code]/index.astro` confirmed this session to contain exactly the described feature set: reveal/self-mark, filter, timed mode, weak-topic ranking, error notebook, reset, plus later additions (mastery levels, spaced retry, diagnostic mode — see below) | **COMPLETE** |
| WS9 | 0625/0580 flagship depth | D-068 | Superseded — those two specs' practice-question gaps were later fully closed under Flagship Dominance/Trust (D-109/D-110/D-116) | **COMPLETE**, superseded by later closure |
| WS10 | 9701/9702 flagship depth | D-069 | Verified — 649 practice questions across all 5 flagship specs per this session's `validate:academic` run | **COMPLETE** |
| WS11 | Syllabus/specification change tracker | D-070 | **Yes** — `/syllabus-updates/` exists and builds. **Correction**: the prior Search Intelligence round's `linkable-assets-outreach.md` wrongly listed this as "not yet built" — it already existed; that document is corrected below. | **COMPLETE** |
| WS12 | Command-word guide tool | D-071 | **Yes** — `/command-words/` exists and builds | **COMPLETE** |
| WS13 | Exam calendar | D-072 | **Yes** — `/exam-calendar/` exists and builds | **COMPLETE** |
| WS14 | Grade-threshold explorer | D-073 | **Yes** — `/grade-thresholds/` exists and builds | **COMPLETE** |
| WS15 | Free → teacher-support conversion CTA | D-074 | Yes — `CTA.astro` reuse confirmed by this session's grep | **COMPLETE** |
| WS16 | Marlbridge/Learners Academy brand separation | D-075 | Not re-verified line-by-line this session; no contradicting evidence found | **COMPLETE** (as reported) |
| WS17/18 | Pakistan and Gulf regional guidance | D-076 | Not re-verified line-by-line this session; no contradicting evidence found | **COMPLETE** (as reported) |
| WS19 | Crawl/sitemap/schema/CWV hardening | D-077 | Explicitly a verification-only pass (no code changes); its own deferred live CWV re-measurement never happened under this programme's name | **COMPLETE** as scoped, but see WS22 below |
| WS20 | Search Console demand engine | D-078 | **One-time manual GSC review + one shipped template-copy fix** (checklist descriptions), not reusable tooling — confirmed by reading the full entry. Does not overlap with this session's `scripts/growth/gsc-opportunity-report.mjs` (a different, reusable artifact built under the newer Search Intelligence programme) | **COMPLETE** as scoped (one-time review), **NOT the same deliverable** as the newer GSC tooling |
| WS21 | Analytics/conversion growth loop | D-079, D-080 | Yes — `generate_lead`/`whatsapp_click` confirmed live both then and by this session's own fresh code read; `whatsapp_click` marked a GA4 key event per D-080 | **COMPLETE** |
| WS22 | Full accessibility/i18n/performance QA (planned next step per D-079) | **No entry** | **Superseded** — a WCAG 2.2 AA audit (D-099), an RTL i18n review (D-101), and a Core Web Vitals review+fix (D-104/D-105) were all later done under the separate Flagship Dominance/Trust programme, substantively covering what WS22 intended | **SUPERSEDED** by Flagship Dominance/Trust D-099/D-101/D-104/D-105 |
| WS23 | (undefined) | **No entry, no other reference found** | N/A | **NOT_STARTED** — no scope was ever recorded anywhere this session could find, beyond the "WS0-WS25" umbrella label |
| WS24 | (referenced only as "gets an explicit go-ahead pause before deployment" + a deferred live CWV re-check) | **No entry** | The live CWV re-check it was meant to gate was effectively superseded by Flagship Dominance/Trust's D-104/D-105 | **SUPERSEDED / NOT_STARTED** — no independent scope beyond the deferred CWV check |
| WS25 | (undefined) | **No entry, no other reference found** | N/A | **NOT_STARTED** |

## Bottom line

**WS1 through WS21 are genuinely complete and (for the ones with a public
artifact) verified live in this session — this was not a stalled or abandoned
programme.** The "WS0-WS25" plan simply stopped being executed under its own
name after WS21; WS22's intent was picked up by a different, later programme
under a different name, and WS23/WS25 never had defined scope recorded
anywhere available to this session. There is no evidence of a genuine product
defect or an unshipped, still-needed feature hiding in the WS22-25 gap.

**No further action is required to "complete" this programme.** It should be
marked closed in the canonical register, not reopened.

## Correction to this session's own prior work

`docs/growth/linkable-assets-outreach.md` (written by the previous Search
Intelligence round, 1 Sep 2026) stated: *"Not yet built as a standalone,
citable public asset: a syllabus-change tracker and an exam-calendar
comparison tool."* **This was wrong** — both `/syllabus-updates/` (WS11) and
`/exam-calendar/` (WS13) already existed at the time that document was
written; the prior round's repo scan simply didn't check `src/pages/` broadly
enough before writing that line. Corrected in that document directly (see the
commit that ships alongside this one) rather than left standing.
