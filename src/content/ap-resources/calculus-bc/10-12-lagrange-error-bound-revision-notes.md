---
resourceId: "mb-ap-calcbc-10.12-revision-notes"
title: "Lagrange Error Bound: Revision Notes (Calculus BC 10.12)"
description: "One-page recap of the Lagrange error bound: the formula, choosing M, intervals for the true value, finding the degree needed and when the alternating series bound applies."
course: "calculus-bc"
unit: 10
topics: ["10.12"]
resourceType: "revision-notes"
calculusScope: "bc-only"
prerequisiteResources: ["mb-ap-calcbc-10.12-study-guide"]
learningObjectives:
  - "Recall the Lagrange error bound and the conditions on M"
  - "Spot the common errors in error-bound questions before making them"
skills: ["1"]
studyMinutes: 10
difficulty: "stretch"
calculator: "mixed"
calculatorNote: "Keep bounds exact where no calculator is allowed; otherwise evaluate and compare."
related: ["mb-ap-calcbc-10.12-study-guide", "mb-ap-calcbc-10.12-practice", "mb-ap-calcbc-10.12-checklist"]
next: "mb-ap-calcbc-10.12-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only."
  - "|f(x) − Pₙ(x)| ≤ M · |x − a|ⁿ⁺¹ / (n + 1)!."
  - "State the bound, then compare it with the target number."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the reasoning, the number-line diagram and worked examples, use the [full study guide](/advanced-course-resources/calculus-bc/10-12-lagrange-error-bound-study-guide/). **BC-only material.** You need Taylor polynomials (10.11) and the alternating series error bound (10.10); see the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

## Recap

- The **error** of a Taylor estimate is f(x) − Pₙ(x).
- **Lagrange error bound:** if |f⁽ⁿ⁺¹⁾(z)| ≤ M for all z between a and x, then
  **|f(x) − Pₙ(x)| ≤ M · |x − a|ⁿ⁺¹ / (n + 1)!**
- It is "the next Taylor term with the unknown derivative replaced by its worst case".
- The true value lies in **[Pₙ(x) − bound, Pₙ(x) + bound]**.
- The bound is a guarantee, not the actual error.

## Key relationships

| Step | What to do | Watch for |
|---|---|---|
| Degree | Identify n, the degree of the polynomial used | If the next coefficient is 0, Pₙ = Pₙ₊₁ and you may use the higher n |
| Derivative | Find f⁽ⁿ⁺¹⁾ | The next derivative, not f⁽ⁿ⁾ |
| M | Largest size of f⁽ⁿ⁺¹⁾ between a and x, or anything bigger | Check both ends; sin and cos give M = 1; for eᶻ round up (e.g. 3) |
| Bound | M times the distance to the power n + 1, divided by (n + 1)! | (n + 1)!, not n! |
| Conclusion | Write "bound < target" in words or symbols | The comparison earns the point |
| Degree needed | Increase n until the bound is below the target | Bound guarantees; actual error may already be smaller |
| Alternating option | Error at most the first omitted term | Only if terms alternate, shrink and tend to 0 |

## Assumptions

- f has an (n + 1)th derivative on the interval between a and x.
- Trig functions use radians.

## Mistakes to avoid

1. Using f⁽ⁿ⁾ or n! instead of f⁽ⁿ⁺¹⁾ and (n + 1)!.
2. Taking M at the centre when the derivative is bigger at the other end.
3. Treating the bound as the exact error.
4. Writing the bound but not the comparison sentence.
5. Using the alternating series bound when the terms do not alternate (for example eˣ at a positive x).

## Quick self-check

1. P₂ is used about x = a, the size of f‴ is at most 4 between a and x, and x − a = 0.3. What is the Lagrange bound? *(4(0.3)³/3! = 0.018)*
2. P₂(x) = 1 + x + x²/2 estimates e^0.2. Using M = 3, what is the bound? *(3(0.2)³/6 = 0.004)*
3. Why is M = 3 allowed in question 2? *(For 0 ≤ z ≤ 0.2, eᶻ ≤ e^0.2 < e < 3.)*

Next: [practice questions](/advanced-course-resources/calculus-bc/10-12-lagrange-error-bound-practice/).
