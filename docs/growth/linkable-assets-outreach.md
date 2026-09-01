# Linkable assets & ethical outreach — inventory and methodology

Programme: Search Intelligence & Demand-Led Growth (Sections 33-38, WS13-16).

## Real linkable assets that already exist (audited against the live repo, 1 Sep 2026)

| Asset | Location | Last-updated signal | Methodology disclosed? |
|---|---|---|---|
| Flagship practice-gap dashboard | `/admin/practice-gaps/` (unlisted, noindex by design — see the page's own header comment) | Generated at build time | Yes, in-page |
| Grade-threshold data | `src/data/academic` (grade-threshold validator, 5 syllabus records / 73 routes) | Sourced + verification-dated per record (validator requirement) | Per-record source URL, yes |
| Practice-question bank | `/practice/[code]/` | 649 questions, 5 flagship specs | Reviewed-by-teachers claim, audited clean |
| Assessment-structure data | `src/data/academic/assessments.ts` | 146 records, each with an official source URL + verification date (validator-enforced) | Yes, structurally enforced |
| Academic hub pages (160) | `/boards/[board]/[qualification]/[subject]/` | — | — |
| Syllabus/specification change tracker | `/syllabus-updates/` | Built at v2.0/AUTHORITY-PROGRAMME time (D-070) | Yes, in-page |
| Exam calendar | `/exam-calendar/` | Built at v2.0/AUTHORITY-PROGRAMME time (D-072) | Yes, in-page |
| Command-word guide | `/command-words/` | Built at v2.0/AUTHORITY-PROGRAMME time (D-071) | Yes, in-page |
| Grade-threshold explorer | `/grade-thresholds/` | Built at v2.0/AUTHORITY-PROGRAMME time (D-073) | Yes, in-page |

**Correction, 2 Sep 2026 (Search Intelligence Execution Round):** this
document previously stated the syllabus-change tracker and exam-calendar
tool were "not yet built." That was wrong — both existed already, along
with a command-word guide and grade-threshold explorer, all shipped under
the AUTHORITY/PRACTICE/TOOLS/GROWTH programme (D-070 through D-073) and
confirmed live in this session's own fresh build. See
`docs/growth/authority-practice-tools-growth-reconciliation-2026-09-02.md`
for the full reconciliation. The four rows above replace that incorrect
claim; nothing further needs building for those four asset types.

## Quality bar (Section 34) — checked against the assets above

- Clear methodology: partially — assessment/grade-threshold data cites sources
  per-record, but there's no single "how we verify this" page linking all of
  it together.
- Stable URL: yes for all listed assets.
- Last-updated: implicit (git history) but not surfaced to a visitor on most
  pages — a real, small gap.
- Citation-ready explanations: yes for the academic hub / assessment data,
  given the source-URL requirement already enforced by validators.

## Outreach target categories (Section 35) — framework, not a completed campaign

This session did not conduct outreach — that's an ongoing relationship-building
activity, not a one-session deliverable, and fabricating prospect contacts or
outcomes is explicitly prohibited (Section 36: "Do not fabricate metrics").
What's provided instead is the qualification framework the programme brief
asks for (Section 35-37), ready for a human (or a future session with real
outreach tooling) to populate:

**Target categories**: schools using Cambridge/Edexcel/Oxford AQA syllabuses in
Pakistan and the Gulf (Marlbridge's existing regional focus, per
`docs/growth/README.md` cross-reference to the site's Pakistan/Gulf pages);
independent education bloggers covering IGCSE/A Level; curriculum-guide sites;
student/parent community moderators; academic newsletters; legitimate
education directories.

**Qualification checklist per prospect** (fill in manually, real contacts only):

| Field | Fill with |
|---|---|
| Domain | |
| Page/contact | public professional contact only — no scraped personal emails |
| Relevance | which Marlbridge asset would genuinely help their audience |
| Asset match | which of the assets in the table above |
| Outreach reason | one sentence, specific — see the message-quality note below |
| Status | not started / contacted / responded / linked |
| Result | |

**Message quality (Section 37)**: lead with the specific asset and why it's
useful to *their* audience — never a generic "please link to us" ask, and
never a paid-link request unless the owner explicitly authorizes one compliant
with search-engine guidelines.

## Status

**IMPLEMENTED as a framework and asset audit; outreach itself not started.**
The next concrete step is the owner (or a session with real contact-research
tooling — e.g. a connected CRM/enrichment MCP, none available this session)
populating the prospect table with real, qualified contacts.
