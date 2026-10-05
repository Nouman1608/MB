---
resourceId: "mb-ap-calcbc-10.3-revision-notes"
title: "The nth Term Test for Divergence: Revision Notes (Calculus BC 10.3)"
description: "One-page recap of the nth term test: why convergent series have terms that approach 0, how to write the divergence justification, and the inconclusive case."
course: "calculus-bc"
unit: 10
topics: ["10.3"]
resourceType: "revision-notes"
calculusScope: "bc-only"
prerequisiteResources: ["mb-ap-calcbc-10.3-study-guide"]
learningObjectives:
  - "Recall the nth term test and its two possible outcomes"
  - "Spot the common errors in using the nth term test before making them"
skills: ["3"]
studyMinutes: 10
difficulty: "core"
calculator: "none-needed"
calculatorNote: "All limits by hand; a calculator never proves convergence or divergence."
related: ["mb-ap-calcbc-10.3-study-guide", "mb-ap-calcbc-10.3-practice", "mb-ap-calcbc-10.3-checklist"]
next: "mb-ap-calcbc-10.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only."
  - "lim aₙ ≠ 0 or does not exist → ∑ aₙ diverges."
  - "lim aₙ = 0 → no conclusion from this test."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the proof, the graph and worked examples, use the [full study guide](/advanced-course-resources/calculus-bc/10-3-nth-term-test-divergence-study-guide/). **BC-only material.** Prerequisites (limits at infinity 1.15, L'Hospital's Rule 4.7, partial sums 10.1, geometric series 10.2) are on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

## Recap

- A series has a **sequence of terms** aₙ and a **sequence of partial sums** Sₙ = a₁ + … + aₙ. It converges when **Sₙ** has a finite limit.
- Since aₙ = Sₙ − Sₙ₋₁, a convergent series must have aₙ → S − S = 0.
- So if aₙ does **not** approach 0, the series diverges. This is the nth term test.
- The test **never** proves convergence.
- Used forwards: if you know ∑ aₙ converges, you may use aₙ → 0 in a limit.

## Key relationships

| Limit of the terms | Conclusion | Example |
|---|---|---|
| Non-zero number L | Diverges | ∑ 3n/(4n + 1): aₙ → 3/4 |
| ±∞ | Diverges | ∑ (1.02)ⁿ: aₙ → ∞ |
| Does not exist (oscillates) | Diverges | ∑ (−1)ⁿ n/(3n + 2): aₙ swings between about ±1/3 |
| 0 | **No conclusion**; use another method | 1 + ½ + ½ + ⅓ + ⅓ + ⅓ + …: terms → 0, but each block adds 1, so it diverges |

**Model justification:** "lim (n → ∞) of aₙ = … ≠ 0, so by the nth term test, ∑ aₙ diverges."

## Finding the limit

- Rational terms: compare the highest powers (equal powers → ratio of leading coefficients).
- 1^∞, ∞ · 0, 0/0 forms: rewrite with a continuous x and use logarithms or L'Hospital's Rule. Example: (1 + 2/n)ⁿ → e².
- Terms with a factor (−1)ⁿ: check the size first. If the size approaches a non-zero number, the terms swing and the limit does not exist.
- The starting index and the first few terms never affect the limit.

## Mistakes to avoid

1. Writing "converges" because aₙ → 0.
2. Saying the series "converges to L" because the **terms** approach L.
3. Calling an oscillating limit "inconclusive". If the limit does not exist, it is not 0: diverges.
4. Treating (1 + k/n)ⁿ as → 1. It tends to eᵏ.
5. Leaving out the limit value or the name of the test in a justification.

## Quick self-check

1. ∑ (4n + 1)/(9n − 2)? *(aₙ → 4/9 ≠ 0, diverges)*
2. ∑ n²/(n³ + 1)? *(aₙ → 0, nth term test inconclusive)*
3. ∑ cos(1/n)? *(aₙ → cos 0 = 1 ≠ 0, diverges)*

Next: [practice questions](/advanced-course-resources/calculus-bc/10-3-nth-term-test-divergence-practice/).
