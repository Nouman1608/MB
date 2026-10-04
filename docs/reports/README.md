# Reports

## Canonical, current (generated — never edit by hand)

| Report | Files | Command |
| --- | --- | --- |
| Academic coverage, one row per active board × qualification × subject combination | [`academic-coverage-current.md`](academic-coverage-current.md), [`.json`](academic-coverage-current.json), [`.csv`](academic-coverage-current.csv) | `npm run coverage:academic-v2` (`-- --check` fails if the committed files are out of date) |
| Academic-review ledger, one row per resource | [`academic-review/ledger-summary.md`](academic-review/ledger-summary.md), [`ledger.csv`](academic-review/ledger.csv), [`ledger.json`](academic-review/ledger.json) (totals), [`signoff-queue.md`](academic-review/signoff-queue.md), [`signoff-by-teacher.md`](academic-review/signoff-by-teacher.md) | `npm run report:review-ledger` (`npm run check:review-ledger` fails if out of date) |

Both generators write no wall-clock timestamp: running them twice on an unchanged
repository produces identical files. The coverage report states `dataAsOf`, the latest
date found in the data. Regenerate both after any change to resources, academic data or
review metadata, and commit the result with that change.

## Dated evidence (kept, not regenerated)

These record what was checked on a given date. They are not rewritten when the data changes.

| File | What it is |
| --- | --- |
| [`academic-review/pending-review-2026-10-04.json`](academic-review/pending-review-2026-10-04.json) | Repository-side verification of the 780 resources that were review-pending on 4 Oct 2026, checked against their official specifications. Read by the ledger. Not a teacher review or sign-off. |
| [`academic-review/tier-label-review-2026-10-04.md`](academic-review/tier-label-review-2026-10-04.md) | Question-by-question tier-label check of 28 Foundation/Higher practice files, 4 Oct 2026. |

## Historical (superseded)

| File | Date | Superseded by |
| --- | --- | --- |
| `academic-coverage-report-v1.2.json`, `academic-coverage-report-v1.2.csv` | last regenerated 28 Sep 2026 (`generatedAt` inside the JSON); frozen since 4 Oct 2026 | `academic-coverage-current.*` |
| `academic-coverage-report-v1.2.md` | written by hand 26 Aug 2026; its counts were never updated | `academic-coverage-current.md` |
| `academic-coverage-report-v1.1.md` | 18 Aug 2026 (139-combination matrix) | `academic-coverage-current.md` |

The remaining files in this folder are programme reports, each dated in its name or
heading (for example `v2.0-mega-programme-final-report-2026-08-28.md`); they describe the
repository on that date.
