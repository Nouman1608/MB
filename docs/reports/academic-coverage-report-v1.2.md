# Academic Coverage Report v1.2

Generated: 2026-08-18T14:39:49.485Z

Rows: 139 (every ACTIVE board x qualification x subject combination)

Full machine-readable data: `academic-coverage-report-v1.2.json` (30 columns) and `academic-coverage-report-v1.2.csv`. This file is a summary only — see those files for the per-combination detail.


## Coverage by board

| Board | Combinations | Official source verified | Topic map published | >=1 resource |
|---|---|---|---|---|
| AQA | 25 | 4 | 0 | 3 |
| Cambridge | 54 | 9 | 9 | 9 |
| OCR | 12 | 12 | 0 | 0 |
| OxfordAQA | 30 | 30 | 0 | 0 |
| Pearson Edexcel | 18 | 0 | 0 | 0 |

## Risk flags across all 139 rows

| Risk | Count |
|---|---|
| no-topic-map | 130 |
| zero-resources | 127 |
| no-official-source | 84 |
| evidence-is-blanket-authorization-not-subject-specific-confirmation | 74 |
| none | 9 |

## Known gaps this report makes visible (not fixed in v1.2)

- Pearson Edexcel has zero `syllabuses.ts` entries — every Edexcel row's `officialSource1`/`specStatus` is NO_DATA/unverified regardless of whether the board genuinely offers the qualification.
- `namedReviewer` is NO_DATA for all 139 rows — no reviewer field exists in the resources content schema yet (see v1.2 WS7).
- `assessmentStatus` is NO_DATA for all 139 rows — assessment structure (paper count, weighting, tiering) is not modeled as a distinct, queryable field anywhere in this repository today; where it's covered, it's folded into free-text `boardSummary`/topic notes.
- `tier`/`priorityScore` are NO_DATA here — the v1.1 report's prioritisation (Tier 1/2/3, evidence-based scores) covered the 127 zero-resource rows as they stood at v1.1 and is not mechanically re-derived in this file; see `academic-coverage-report-v1.1.md` for that analysis and methodology.
- quiz/flashcard/video/diagnostic resource-type counts are 0 for every row because those resource types are not implemented anywhere on the site (the resources schema's `resourceType` enum has 7 real values) — 0 here means "not built", not "unmeasured".
