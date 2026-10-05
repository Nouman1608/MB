---
resourceId: "mb-ap-calcbc-10.4-revision-notes"
title: "Integral Test for Convergence: Revision Notes (Calculus BC 10.4)"
description: "One-page recap of the integral test: the three conditions, the rectangle picture behind it, a model justification and the mistakes that cost marks."
course: "calculus-bc"
unit: 10
topics: ["10.4"]
resourceType: "revision-notes"
calculusScope: "bc-only"
prerequisiteResources: ["mb-ap-calcbc-10.4-study-guide"]
learningObjectives:
  - "Recall the integral test, its conditions and its conclusion"
  - "Spot the common errors in using the integral test before making them"
skills: ["3"]
studyMinutes: 10
difficulty: "stretch"
calculator: "mixed"
calculatorNote: "Improper integrals by hand; a calculator may only give decimal values where one is allowed."
related: ["mb-ap-calcbc-10.4-study-guide", "mb-ap-calcbc-10.4-practice", "mb-ap-calcbc-10.4-checklist"]
next: "mb-ap-calcbc-10.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only."
  - "f positive, continuous, decreasing for x ≥ N: the series and the integral from N behave the same way."
  - "The integral's value is not the sum."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the rectangle diagram and worked examples, use the [full study guide](/advanced-course-resources/calculus-bc/10-4-integral-test-convergence-study-guide/). **BC-only material.** Prerequisites (decreasing functions 5.3, substitution 6.9, parts 6.11, improper integrals 6.13, nth term test 10.3) are on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

## Recap

- Write aₙ = f(n). Draw width-1 rectangles of height aₙ.
- Rectangles **below** the curve: a₂ + … + aₙ ≤ ∫ from 1 to ∞ of f. A finite integral caps the partial sums, so the series converges.
- Rectangles **above** the curve: a₁ + … + aₙ ≥ ∫ from 1 to n + 1 of f. An infinite integral drags the partial sums up without bound, so the series diverges.
- Use the test after the nth term test has been inconclusive (aₙ → 0).

## Key relationships

| Item | Statement | Note |
|---|---|---|
| Conditions | f positive, continuous, decreasing for x ≥ N | "Decreasing" usually from f′(x) < 0 |
| Conclusion | ∑ from N to ∞ of aₙ and ∫ from N to ∞ of f(x) dx both converge or both diverge | Never gives the sum |
| Improper integral | ∫ from N to ∞ of f = lim (b → ∞) of ∫ from N to b of f | Show the limit |
| Starting point | Finitely many terms do not affect convergence | Choose N where f starts decreasing |
| Background bound | ∫ from 1 to ∞ of f ≤ ∑ from 1 to ∞ of aₙ ≤ a₁ + ∫ from 1 to ∞ of f | Not required; a useful check |

**Model justification:** "f(x) = … is positive, continuous and decreasing for x ≥ N because …. ∫ from N to ∞ of f(x) dx = lim (b → ∞) of … = … (converges / diverges). So by the integral test, ∑ aₙ converges / diverges."

## Mistakes to avoid

1. Claiming the sum equals the integral.
2. Leaving out the conditions, or not showing *why* f is decreasing.
3. Requiring "decreasing" from n = 1 when it only starts later; or applying the test to a function that is never decreasing on any [N, ∞), such as (2 + cos x)/x².
4. Using the test on terms that change sign.
5. Writing an antiderivative but no limit as b → ∞.
6. Arguing "f(x) → 0, so the integral converges".

## Quick self-check

1. ∑ 3/(n + 2)²? *(∫ from 1 to ∞ of 3/(x + 2)² dx = 1, finite: converges, but the sum is not 1)*
2. ∑ 1/(2n + 5)? *(∫ from 1 to b = ½ ln((2b + 5)/7) → ∞: diverges)*
3. Why can't you use the integral test on ∑ (−1)ⁿ/n²? *(The terms are not all positive)*

Next: [practice questions](/advanced-course-resources/calculus-bc/10-4-integral-test-convergence-practice/).
