---
resourceId: "mb-ap-calcbc-10.10-revision-notes"
title: "Alternating Series Error Bound: Revision Notes (Calculus BC 10.10)"
description: "One-page recap of the alternating series error bound: the conditions, the bound, how many terms you need, overestimates and underestimates, and the mistakes that cost marks."
course: "calculus-bc"
unit: 10
topics: ["10.10"]
resourceType: "revision-notes"
calculusScope: "bc-only"
prerequisiteResources: ["mb-ap-calcbc-10.10-study-guide"]
learningObjectives:
  - "Recall the alternating series error bound and its conditions"
  - "Spot the common errors in error-bound questions before making them"
skills: ["1"]
studyMinutes: 10
difficulty: "core"
calculator: "mixed"
calculatorNote: "Keep fractions exact or keep 6 decimal places in partial sums; round only the final answer."
related: ["mb-ap-calcbc-10.10-study-guide", "mb-ap-calcbc-10.10-practice", "mb-ap-calcbc-10.10-checklist"]
next: "mb-ap-calcbc-10.10-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only."
  - "|S − Sₙ| ≤ aₙ₊₁, the size of the first omitted term."
  - "Check the alternating series test conditions before using the bound."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the zigzag picture, the proof and worked examples, use the [full study guide](/advanced-course-resources/calculus-bc/10-10-alternating-series-error-bound-study-guide/). **BC-only material.** Prerequisites (Topics 10.1, 10.7 and 10.9) are on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

## Recap

- Set-up: Σ (−1)ⁿ⁺¹ aₙ with aₙ > 0, sum S, partial sum Sₙ.
- **Conditions** (the alternating series test): signs alternate, aₙ decreasing, aₙ → 0.
- **Bound:** |S − Sₙ| ≤ aₙ₊₁. The error is at most the first term you left out.
- **S lies between Sₙ and Sₙ₊₁**, because the partial sums zigzag in on S.
- **Direction:** the error has the sign of the first omitted term.

## Key relationships

| Task | Method | Example |
|---|---|---|
| Bound the error of Sₙ | Compute aₙ₊₁ | For S₄ of Σ (−1)ⁿ⁺¹/(n · 2ⁿ): bound a₅ = 1/160 |
| Show error < tolerance | Compute aₙ₊₁, then say it is less than the tolerance | 1/160 = 0.00625 < 0.01 |
| How many terms? | Solve aₙ₊₁ < tolerance for the smallest n | Σ (−1)ⁿ⁺¹/(n³ + 1) within 0.001: n + 1 = 10, so 9 terms |
| Over or under? | Sign of first omitted term: + means Sₙ is too small, − means too big | S₄ above: 5th term is +, so S₄ underestimates |
| Interval for S | Between Sₙ and Sₙ ± aₙ₊₁ (in the direction of the next term) | S₄ ≤ S ≤ S₄ + a₅ |

## Assumptions to state

- The series is alternating.
- The term sizes decrease (at least from the point where you stop onwards).
- The term sizes approach 0.

If any of these fails, this bound is not justified. For non-alternating Taylor remainders, Topic 10.12 (Lagrange) is the tool.

## Mistakes to avoid

1. **Using aₙ** instead of aₙ₊₁.
2. **Calling the bound the error.** Say "at most".
3. **No comparison with the tolerance.** Finish the sentence: "… which is less than 0.01".
4. **Off-by-one in counting terms**, especially when the series starts at n = 0.
5. **Wrong direction.** Look at the sign of the next term, not the last one you added.
6. **Early rounding** of partial sums.

## Quick self-check

1. For Σ (−1)ⁿ⁺¹/n⁵, give a bound for |S − S₂|. *(a₃ = 1/243 ≈ 0.00412)*
2. For Σ (−1)ⁿ⁺¹/(4n), how many terms guarantee an error below 0.01? *(Need 1/(4(n + 1)) < 0.01, so n + 1 > 25: n + 1 = 26, so 25 terms.)*
3. A convergent alternating series meeting the conditions has S₇ = 2.316, and its 8th term is −0.005. Give an interval for S. *(2.311 ≤ S ≤ 2.316: S₇ is an overestimate.)*

Next: [practice questions](/advanced-course-resources/calculus-bc/10-10-alternating-series-error-bound-practice/).
