---
resourceId: "mb-ap-calcbc-10.15-revision-notes"
title: "Representing Functions as Power Series: Revision Notes (Calculus BC 10.15)"
description: "One-page recap of building power series from known series: geometric rewriting, substitution, powers of x, term-by-term calculus, intervals and the mistakes that cost marks."
course: "calculus-bc"
unit: 10
topics: ["10.15"]
resourceType: "revision-notes"
calculusScope: "bc-only"
prerequisiteResources: ["mb-ap-calcbc-10.15-study-guide"]
learningObjectives:
  - "Recall the four starting series and the operations that turn them into new series"
  - "Spot the common errors with constants, substitutions and endpoints before making them"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "stretch"
calculator: "mixed"
calculatorNote: "Series are built by hand; a calculator may only check a partial sum against a function value where one is allowed."
related: ["mb-ap-calcbc-10.15-study-guide", "mb-ap-calcbc-10.15-practice", "mb-ap-calcbc-10.15-checklist"]
next: "mb-ap-calcbc-10.15-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "BC only."
  - "Change a known series; do not differentiate f over and over."
  - "Radius stays the same under term-by-term calculus; endpoints must be tested again."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the reasons, the graph and the worked examples, use the [full study guide](/advanced-course-resources/calculus-bc/10-15-representing-functions-as-power-series-study-guide/). **BC-only material.** Prerequisites (geometric series 10.2, radius and interval of convergence 10.13, Maclaurin series 10.14) are on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

## Recap

- Start from **1/(1 − x)**, **eˣ**, **sin x** or **cos x**, and change the series the way the function changes.
- A power series with a positive radius is the Taylor series of its sum, so any correct route gives the same series. The coefficient of xⁿ is f⁽ⁿ⁾(0)/n!.
- Inside the interval of convergence you can differentiate and integrate term by term.

## Key relationships

| Operation | Example | Interval |
|---|---|---|
| Geometric form a/(1 − r) | 2/(5 − x) = (2/5) · 1/(1 − x/5) = Σ 2xⁿ/5ⁿ⁺¹ | \|x/5\| < 1: −5 < x < 5 (geometric endpoints always diverge) |
| Substitute | e^(−x²) = Σ (−1)ⁿ x^(2n)/n! | All real x |
| Multiply or divide by xᵏ | (1 − cos x)/x² = 1/2 − x²/24 + x⁴/720 − … | Same as the original series |
| Differentiate | 1/(1 − x)² = Σ from n = 1 of n xⁿ⁻¹ | Same radius; retest endpoints |
| Integrate | ln(4 + x) = ln 4 + Σ (−1)ⁿ xⁿ⁺¹/((n + 1)4ⁿ⁺¹) | −4 < x ≤ 4 (gained x = 4) |

## Assumptions

- Series are about x = 0 unless a centre c is given; then use powers of (x − c).
- "Valid" means the series converges **and** equals the function there.

## Mistakes to avoid

1. **No 1 in front.** Rewrite 5/(3 + x) as (5/3) · 1/(1 + x/3) first.
2. **Substituting outside the powers.** sin(3x) has (3x)³ = 27x³.
3. **Old interval after a substitution.** Put the new r into |r| < 1.
4. **Missing constant after integrating.** Check the value at the centre.
5. **Assuming endpoints carry over.** Only the radius is guaranteed.
6. **Coefficient used as the derivative.** f⁽ⁿ⁾(0) = n! × (coefficient of xⁿ).
7. **Using a series outside its interval.** The function may exist there; the series does not equal it.

## Quick self-check

1. Write the series for 1/(1 − x³) and its interval. *(1 + x³ + x⁶ + x⁹ + … = Σ x^(3n), for −1 < x < 1)*
2. Write the first three nonzero terms of the series for (sin x)/x. *(1 − x²/6 + x⁴/120)*
3. Find the coefficient of x⁵ in the series for x e^(2x). *(2⁴/4! = 2/3)*
4. Use x/(1 − x)² = Σ n xⁿ to find Σ from n = 1 of n/3ⁿ. *(x = 1/3 gives 3/4)*

Next: [practice questions](/advanced-course-resources/calculus-bc/10-15-representing-functions-as-power-series-practice/).
