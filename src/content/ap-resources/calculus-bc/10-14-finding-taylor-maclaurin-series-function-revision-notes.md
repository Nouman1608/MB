---
resourceId: "mb-ap-calcbc-10.14-revision-notes"
title: "Finding Taylor or Maclaurin Series for a Function: Revision Notes (Calculus BC 10.14)"
description: "One-page recap of Taylor and Maclaurin series: the general formula, the four series to know with their intervals, reading derivatives from coefficients and the common slips."
course: "calculus-bc"
unit: 10
topics: ["10.14"]
resourceType: "revision-notes"
calculusScope: "bc-only"
prerequisiteResources: ["mb-ap-calcbc-10.14-study-guide"]
learningObjectives:
  - "Recall the Taylor series formula and the four foundation Maclaurin series"
  - "Spot the common errors in building and reading Taylor series before making them"
skills: ["1", "2"]
studyMinutes: 10
difficulty: "core"
calculator: "none-needed"
calculatorNote: "Building and reading series is done by hand."
related: ["mb-ap-calcbc-10.14-study-guide", "mb-ap-calcbc-10.14-practice", "mb-ap-calcbc-10.14-checklist"]
next: "mb-ap-calcbc-10.14-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only."
  - "Taylor series about c: Σ f⁽ⁿ⁾(c)(x − c)ⁿ/n!."
  - "Know eˣ, sin x, cos x and 1/(1 − x) by heart, with intervals."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the derivations, the partial-sum graph and worked examples, use the [full study guide](/advanced-course-resources/calculus-bc/10-14-finding-taylor-maclaurin-series-function-study-guide/). **BC-only material.** Prerequisites (Taylor polynomials 10.11, radius and interval 10.13, geometric series 10.2) are on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

## Recap

- **Taylor series about c:** f(c) + f′(c)(x − c) + f″(c)(x − c)²/2! + … = Σ f⁽ⁿ⁾(c)(x − c)ⁿ/n!.
- **Maclaurin series:** the same with c = 0.
- **Taylor polynomial Pₙ** = the partial sum up to the (x − c)ⁿ term.
- To build a series from scratch: find several derivatives at c, spot the pattern, divide by n!, write the general term, then find the interval.

## The four series to know

| f(x) | Series | Interval |
|---|---|---|
| eˣ | Σ xⁿ/n! = 1 + x + x²/2! + x³/3! + … | all real x |
| sin x | Σ (−1)ⁿ x^(2n+1)/(2n + 1)! = x − x³/3! + x⁵/5! − … | all real x |
| cos x | Σ (−1)ⁿ x^(2n)/(2n)! = 1 − x²/2! + x⁴/4! − … | all real x |
| 1/(1 − x) | Σ xⁿ = 1 + x + x² + … (geometric, ratio x) | −1 < x < 1 |

## Key relationships

| Idea | Fact | Example |
|---|---|---|
| Coefficient to derivative | f⁽ⁿ⁾(c) = n! · aₙ | a₅ = −7/120 gives f⁽⁵⁾(c) = −7 |
| Local behaviour | sign of a₁ gives increasing or decreasing; sign of a₂ gives concavity | a₁ = −3, a₂ = 2: decreasing, concave up |
| New centre | powers of (x − c) | eˣ = Σ e⁻¹(x + 1)ⁿ/n! about −1 |
| Substitution | replace x by the whole expression | e^(−2x) = Σ (−2x)ⁿ/n! |
| Recognising sums | match powers, factorials, signs | Σ 3ⁿ/n! = e³ |

## Mistakes to avoid

1. Leaving out the n! in the coefficient.
2. Writing xⁿ instead of (x − c)ⁿ for a centre c ≠ 0.
3. Swapping the sin and cos patterns (odd/even powers and factorials).
4. Using 1/(1 − x) = Σ xⁿ when |x| ≥ 1.
5. Treating a coefficient as the derivative itself.
6. Forgetting to give the general term or the interval when asked.

## Quick self-check

1. First three nonzero terms of the Maclaurin series for cos x? *(1 − x²/2 + x⁴/24)*
2. The Taylor series for f about x = 2 has (x − 2)⁴ coefficient 1/3. Find f⁽⁴⁾(2). *(4! · 1/3 = 8)*
3. What is 1 − 1/3! + 1/5! − 1/7! + … exactly? *(sin 1)*

Next: [practice questions](/advanced-course-resources/calculus-bc/10-14-finding-taylor-maclaurin-series-function-practice/).
