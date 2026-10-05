---
resourceId: "mb-ap-calcbc-10.8-revision-notes"
title: "Ratio Test for Convergence: Revision Notes (Calculus BC 10.8)"
description: "One-page recap of the ratio test: the limit L and its three cases, cancelling powers and factorials, when the test fails, and the mistakes that cost marks."
course: "calculus-bc"
unit: 10
topics: ["10.8"]
resourceType: "revision-notes"
calculusScope: "bc-only"
prerequisiteResources: ["mb-ap-calcbc-10.8-study-guide"]
learningObjectives:
  - "Recall the ratio test and what each value of L means"
  - "Spot the common errors in ratio-test working before making them"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "none-needed"
calculatorNote: "No calculator needed; find L exactly by algebra."
related: ["mb-ap-calcbc-10.8-study-guide", "mb-ap-calcbc-10.8-practice", "mb-ap-calcbc-10.8-checklist"]
next: "mb-ap-calcbc-10.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only."
  - "L = lim |aₙ₊₁/aₙ|: L < 1 converges, L > 1 diverges, L = 1 no conclusion."
  - "Best for factorials and powers like 3ⁿ."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the reasoning behind the test, the ratio graph and full worked examples, use the [full study guide](/advanced-course-resources/calculus-bc/10-8-ratio-test-convergence-study-guide/). **BC-only material.** Prerequisites (geometric series 10.2, nth term test 10.3, p-series 10.5, comparison tests 10.6) are on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

## Recap

- Compute **L = lim (n → ∞) |aₙ₊₁/aₙ|** (next term over current term).
- **L < 1:** converges (Σ |aₙ| converges too). **L > 1 or L = ∞:** diverges. **L = 1:** no conclusion.
- Idea: in the long run the series behaves like a geometric series with ratio L.
- Only the limit matters; early ratios can be anything.
- Why L > 1 means divergence: from some point on each term is bigger in size than the one before, so the terms cannot tend to 0 (nth term test).
- Why L < 1 means convergence: the tail is smaller than a convergent geometric series, so a comparison finishes the job.

## Key relationships

| Algebra step | Result |
|---|---|
| (n + 1)!/n! | n + 1 |
| (2n + 2)!/(2n)! | (2n + 2)(2n + 1) |
| bⁿ⁺¹/bⁿ | b |
| (n + 1)ᵏ/nᵏ as n → ∞ | 1 |
| Polynomials of equal degree, ratio as n → ∞ | ratio of leading coefficients |

| Terms contain … | Use |
|---|---|
| n!, (2n)!, or powers like 3ⁿ | Ratio test |
| Only powers of n | p-series or comparison (ratio test gives L = 1) |
| Exactly a·rⁿ | Geometric series test (the ratio test also works) |

## Assumptions

- Terms must be non-zero, so that the ratio exists.
- Keep the absolute value bars when terms can be negative, such as (−2)ⁿ.

## Mistakes to avoid

1. **Upside-down ratio** aₙ/aₙ₊₁, which gives 1/L.
2. **"L = 1 so it diverges."** No conclusion: Σ 1/n diverges, Σ 1/n² converges, and both have L = 1.
3. **Factorial slips:** (n + 1)! = (n + 1) · n!, not n! + 1.
4. **Forgetting the exponential factor** when cancelling, which turns L = 1/4 into L = 1.
5. **No conclusion sentence.** Write: "L = … < 1, so the series converges by the ratio test."

## Quick self-check

1. Σ 4ⁿ/n! *(Ratio 4/(n + 1) → 0 < 1: converges.)*
2. Σ n³/2ⁿ *(Ratio (n + 1)³/(2n³) → 1/2 < 1: converges.)*
3. Σ (n + 5)/n² *(L = 1: no conclusion. Limit comparison with Σ 1/n shows it diverges.)*
4. Σ 2ⁿ/n² *(Ratio 2n²/(n + 1)² → 2 > 1: diverges.)*

Next: [practice questions](/advanced-course-resources/calculus-bc/10-8-ratio-test-convergence-practice/).
