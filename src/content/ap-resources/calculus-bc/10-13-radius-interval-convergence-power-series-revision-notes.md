---
resourceId: "mb-ap-calcbc-10.13-revision-notes"
title: "Radius and Interval of Convergence of Power Series: Revision Notes (Calculus BC 10.13)"
description: "One-page recap of radius and interval of convergence: the ratio-test method, the endpoint tests, the Taylor-coefficient link and term-by-term calculus."
course: "calculus-bc"
unit: 10
topics: ["10.13"]
resourceType: "revision-notes"
calculusScope: "bc-only"
prerequisiteResources: ["mb-ap-calcbc-10.13-study-guide"]
learningObjectives:
  - "Recall the steps for finding a radius and interval of convergence"
  - "Spot the common errors in radius and endpoint work before making them"
skills: ["1", "2"]
studyMinutes: 10
difficulty: "core"
calculator: "none-needed"
calculatorNote: "All of this topic is done by hand."
related: ["mb-ap-calcbc-10.13-study-guide", "mb-ap-calcbc-10.13-practice", "mb-ap-calcbc-10.13-checklist"]
next: "mb-ap-calcbc-10.13-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only."
  - "Ratio test on the whole term gives |x − c| < R."
  - "Test both endpoints with a different test."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the number-line diagram and worked examples, use the [full study guide](/advanced-course-resources/calculus-bc/10-13-radius-interval-convergence-power-series-study-guide/). **BC-only material.** Prerequisites (geometric series 10.2, p-series 10.5, alternating series test 10.7, ratio test 10.8) are on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

## Recap

- A power series centred at c is Σ aₙ(x − c)ⁿ. It always converges at x = c (sum a₀).
- It converges **only at c** (R = 0), **for all x** (R = ∞), or **for |x − c| < R** and diverges for |x − c| > R.
- The endpoints c ± R must be tested one at a time.
- If R > 0, the series is the Taylor series of its sum f about c.

## The method

1. Form |uₙ₊₁/uₙ| using the **whole term** uₙ = aₙ(x − c)ⁿ.
2. Take the limit as n → ∞. Set it **< 1**.
3. Rewrite as |x − c| < R. Factor out any coefficient of x first.
4. Substitute each endpoint and test the numerical series.
5. Write the interval with the correct brackets.

## Key relationships

| Idea | Fact | Example |
|---|---|---|
| Limit is 0 for all x | R = ∞ | Σ xⁿ/n! |
| Limit is ∞ for x ≠ c | R = 0 | Σ n! xⁿ |
| Coefficient on x | \|2x − 5\| < 1 means \|x − 5/2\| < 1/2, so R = 1/2 | Interval [2, 3] for Σ (2x − 5)ⁿ/n² |
| Coefficients and derivatives | f⁽ⁿ⁾(c) = n! · aₙ | a₄ = 1/6 gives f⁽⁴⁾(c) = 4 |
| Term-by-term calculus | Same R; endpoints may change | Σ xⁿ/n² on [−1, 1]; derivative on [−1, 1) |

## Endpoint tests

- Σ 1/nᵖ: p-series (converges if p > 1).
- Alternating with terms decreasing to 0: alternating series test.
- Terms not tending to 0: nth term test (diverges).
- Never the ratio test: its limit is 1 at an endpoint.

## Mistakes to avoid

1. Calling the interval length the radius (length is 2R).
2. Reading R from |2x − 5| < 1 without factoring.
3. Wrong centre sign: (x + 1)ⁿ is centred at −1.
4. Skipping the endpoints, or testing them with the ratio test.
5. Leaving out a conditionally convergent endpoint.
6. Assuming a differentiated series keeps the same endpoints.

## Quick self-check

1. Radius of Σ xⁿ/4ⁿ? *(4)*
2. Interval of Σ from n = 1 to ∞ of (x − 1)ⁿ/n? *([0, 2): x = 2 gives Σ 1/n, which diverges; x = 0 gives Σ (−1)ⁿ/n, which converges)*
3. If f(x) = Σ from n = 0 to ∞ of (x − 2)ⁿ/(n + 1) for |x − 2| < 1, what is f‴(2)? *(3! · 1/4 = 3/2)*

Next: [practice questions](/advanced-course-resources/calculus-bc/10-13-radius-interval-convergence-power-series-practice/).
