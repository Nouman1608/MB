# Academic Coverage Report v1.2

Generated: 2026-08-26T13:26:09.534Z

Rows: 160 (every ACTIVE board x qualification x subject combination). This report was
regenerated as part of the v1.x Closure Release's WS4 (report consolidation) after WS2
(translation) and WS6 (resource depth) both changed the underlying data it describes — see
`docs/decision-log.md` D-053 for the resource-depth work and D-051/D-052 for translation. The
row count grew from 139 (v1.2's original run) to 160 with the addition of the IB DP/MYP
programme; the resource-depth figures below reflect this session's work bringing every
previously single-resource combination to 2 or more.

Full machine-readable data: `academic-coverage-report-v1.2.json` (31 columns, including the
`indexable`/`totalQualifyingWordCount` fields added in this regeneration — see below) and
`academic-coverage-report-v1.2.csv`. This file is a summary only — see those files for the
per-combination detail.

## Coverage by board

| Board | Combinations | Official source verified | Topic map published | >=1 resource |
|---|---|---|---|---|
| AQA | 25 | 24 | 25 | 25 |
| Cambridge | 54 | 53 | 54 | 54 |
| International Baccalaureate | 21 | 0 | 2 | 21 |
| OCR | 12 | 12 | 10 | 12 |
| OxfordAQA | 30 | 30 | 28 | 30 |
| Pearson Edexcel | 18 | 18 | 18 | 18 |

The IB row shows `0` official-source-verified because `syllabuses.ts` (the field this column
reads) has no IB entries — IB's full syllabi sit behind a licensed teacher portal rather than a
free public specification PDF the way every other board's does, a genuine, disclosed limitation
(see D-053). IB's topic-map-published count of 2/21 reflects the two combinations (Economics DP,
Physics DP) with a real, sourced, unit-by-unit breakdown in `syllabus-topics.ts`; the remaining
19 are honestly marked `being-verified`, not silently assumed complete.

## Risk flags across all 160 rows (rows can carry more than one flag)

| Risk | Count |
|---|---|
| evidence-is-blanket-authorization-not-subject-specific-confirmation | 74 |
| none | 64 |
| no-official-source | 23 |
| no-topic-map | 23 |
| zero-resources | 0 |

`zero-resources` is now 0/160 (down from 127/139 at the v1.1 baseline and 34/160 immediately
before this session's WS6 work) — every ACTIVE combination has at least one resource, and (per
WS6, D-053) every combination that had exactly one now has two or three, except the 19
source-access-constrained IB combinations, which have two.

## Depth and quality (from the live data, not carried over from an earlier snapshot)

- Median resources per combination: 3 (target 8+; 9/160 combinations already meet this).
- Combinations with exactly 1 resource: **0/160** (WS6 target fully met).
- Median words per resource: 708 (target 900+).
- Resources under 900 words: 585/782.
- Resources under 400 words: 30/782 — mostly the intentionally condensed IB assessment-recall
  companions added in WS6 (D-053); no *combination's total* qualifying word count falls under the
  400-word indexability bar (see below), since every combination already carried an indexable
  resource before WS6's shorter companions were added on top.

## Indexability (regenerated this pass — previously hardcoded)

This report's `indexable` column previously read a hardcoded `true` for every row, with a
comment noting "no per-combination noindex mechanism exists." That was accurate when written but
went stale once `src/utils/seo/indexability.ts`'s `isIndexableAcademicPage()` policy shipped
(Phase 1 of the Aug 2026 SEO remediation) — the real policy noindexes a combination whose
qualifying resources (study-guides, revision-notes, subject-guides, practice-questions,
exam-preparation — not past-papers or learning-articles) sum to under 400 words. This report now
computes `indexable`/`totalQualifyingWordCount` live from the same threshold and resource-type
set as the real policy (loaded directly from `indexability.ts`, not duplicated by value, so the
two cannot silently drift apart). Current result: **0/160 combinations are below the indexability
bar** — every ACTIVE combination's hub page is indexable.

## Known gaps this report makes visible (not fixed in this pass — out of WS4's scope)

- Pearson Edexcel and IB have no `syllabuses.ts` entries in the "official source" sense this
  report checks (Edexcel's is a distinct, tracked gap from v1.1; IB's is the licensed-portal
  constraint described above) — both boards' `officialSource1`/`specStatus` read
  NO_DATA/unverified for that reason, not because the board isn't genuinely taught.
- `namedReviewer` is NO_DATA for all 160 rows — no reviewer field exists in the resources content
  schema yet.
- `assessmentStatus` is NO_DATA for all 160 rows in this report's own columns — assessment
  structure is tracked separately in `src/data/academic/assessments.ts`, which now has 12/160
  ACTIVE combinations with a real, sourced record (`npm run validate:assessments` reports this
  live); wiring that dataset into this report as a real column, rather than leaving it NO_DATA
  here, is future work, not done in this pass to keep WS4 to report regeneration rather than a
  new report-generator feature.
- `tier`/`priorityScore` remain NO_DATA — the v1.1 report's prioritisation covered the
  then-127 zero-resource rows and is not mechanically re-derived here; see
  `academic-coverage-report-v1.1.md` for that superseded analysis and methodology.
- quiz/flashcard/video/diagnostic resource-type counts are 0 for every row because those resource
  types are not implemented anywhere on the site (the resources schema's `resourceType` enum has
  7 real values) — 0 here means "not built", not "unmeasured".
