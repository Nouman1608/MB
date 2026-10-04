# Tier-label review of Foundation/Higher practice files — 4 October 2026

Part of the post-audit remediation programme (decision log D-386). This is a
**repository-side academic verification** of tier labels only. It is not a
teacher sign-off and does not change any resource's `reviewStatus`.

## Why

`npm run test:tools` failed (108/110) because 28 practice files added by D-382 to
D-384 sat in Foundation/Higher practice banks without the item-by-item tier check
that `HIGHER_LABELS_CHECKED` (`src/utils/practice/question-tier.ts`) requires. The
test reported only the first file it met (4MA1 applying number) and the three AQA
8300 questions whose label form the reader could not parse.

## Sources (downloaded 4 Oct 2026, official awarding-body copies only)

| Syllabus | Document | URL |
| --- | --- | --- |
| Pearson Edexcel International GCSE Mathematics A (4MA1) | Specification, Issue 2 | https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Mathematics%20A/2016/Specification%20and%20sample%20assessments/international-gcse-in-mathematics-spec-a.pdf |
| AQA GCSE Mathematics (8300) | Specification v1.0 | https://filestore.aqa.org.uk/resources/mathematics/specifications/AQA-8300-SP-2015.PDF |
| AQA GCSE Biology (8461) | Specification | https://filestore.aqa.org.uk/resources/biology/specifications/AQA-8461-SP-2016.PDF |
| AQA GCSE Chemistry (8462) | Specification | https://filestore.aqa.org.uk/resources/chemistry/specifications/AQA-8462-SP-2016.PDF |

Higher-only content: 4MA1 — statements in the Higher Tier section not present in the
Foundation Tier section (2.5 is "Higher Tier only"); 8300 — the "Higher content only"
column; 8461/8462 — statements marked "(HT only)".

## Method

Every question in the `## Questions` section of each file was mapped to the
specification statement(s) it tests and classified Foundation, Higher-only or mixed.
The rule for a "checked" file: every Higher-only question carries a whole-question
Higher label, every Higher-only part carries a part label, and no Foundation content
carries one. One reviewer per syllabus; the coordinating reviewer re-read the
specification text for every disputed or corrected call (4MA1 2.5/2.6B, 8300 N10,
8461 4.1.1.6) before any edit.

## Result

| Syllabus | Files | Questions | Correct as found | Label corrected |
| --- | ---: | ---: | ---: | ---: |
| 4MA1 | 12 | 142 | 138 | 4 |
| 8300 | 7 | 83 | 81 tier calls correct (15 mis-read by the parser) | 2 |
| 8461 | 4 | 46 | 45 | 1 |
| 8462 | 5 | 58 | 58 | 0 |
| **Total** | **28** | **329** | | **7 content corrections** |

### Content corrections (whole-question label moved to the Higher-only parts)

| File | Question | Reason (specification) |
| --- | --- | --- |
| `edexcel-igcse-maths-4ma1-simultaneous-linear-equations-practice` | Q9 → (b), (c) | (a) is 2.6A (both tiers); (b), (c) are 2.6B lines/intersection (Higher only) |
| `edexcel-igcse-maths-4ma1-simultaneous-linear-equations-practice` | Q12 → (b) | (a) is 2.6A; (b) parallel lines is 2.6B |
| `edexcel-igcse-maths-4ma1-use-of-symbols-and-algebraic-manipulation-practice` | Q11 → (c) | Only completing the square (2.2D) is Higher-only |
| `edexcel-igcse-maths-4ma1-percentages-ratio-and-proportion-practice` | Q7 (a) gains label | Writing w = kd is 2.5A (Higher Tier only); Foundation 1.7D is table work only |
| `aqa-gcse-maths-8300-measures-and-accuracy-practice` | Q10 → (a), (b) | Bounds (N16) Higher-only; (c) is a given-value unit conversion |
| `aqa-gcse-maths-8300-sequences-practice` | Q12 → (b), (c) | (a) generating terms is A23 basic; (b), (c) other sequences (A24 Higher) |
| `aqa-gcse-biology-8461-cell-structure-practice` | Q12 → (a) | 4.1.1.6: only "express the answer in standard form" is (HT only) |

Intro sentences in the 4MA1 simultaneous-equations, use-of-symbols and percentages
files and the 8300 measures file were updated to match.

### Parser correction

`explicitHigherTierFromLabel` now reads a calculator tag on either side of the tier
word — "(Higher, non-calculator)", "(Higher, calculator)" — and a separate leading
calculator tag before the label — "(non-calculator) (Higher)". Effect, measured by a
before/after snapshot of every question in all nine tiered banks (1,462 questions):
exactly 15 questions in 4 AQA 8300 files changed, all to Higher-only, and each one
was confirmed Higher-only against the 8300 "Higher content only" column (FDP Q8–Q10,
N10; graphs Q7, Q9, Q11, Q12; notation Q10, Q11; solving Q7–Q11; structure Q9). No
question in any previously checked file or any Cambridge bank changed.

### Borderline calls left as found (with reason)

- 4MA1 degree of accuracy Q10, inequalities Q4 and Q11(c), proportion Q1(b), use of
  symbols Q7(b) and Q11(a): set wholly in a Higher context or covered by the stated
  tier's statement.
- 8300 notation Q7 (surd binomial, covered by A4 additional foundation), measures
  Q7(b), sequences Q11(e).
- 8462 transition metals Q7(c): the mark scheme asks only for the change in ion
  charge (4.1.3.2, both tiers), not electron transfer (4.4.1.4, HT only).

## Final bank state

All five Foundation/Higher banks are fully tagged (0 untagged questions).
Higher-only (whole-question) counts: 4MA1 81/202, 8300 34/147, 8461 8/133, 8462 12/180,
8463 12/108. These totals are pinned in `src/utils/practice/__tests__/question-tier.test.mjs`.
