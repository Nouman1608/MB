---
resourceId: "mb-ap-calcbc-10.11-revision-notes"
title: "Finding Taylor Polynomial Approximations of Functions: Revision Notes (Calculus BC 10.11)"
description: "One-page recap of Taylor polynomials: the f⁽ⁿ⁾(a)/n! coefficient, building from a derivative table, reading derivatives back, estimating values and the mistakes that cost marks."
course: "calculus-bc"
unit: 10
topics: ["10.11"]
resourceType: "revision-notes"
calculusScope: "bc-only"
prerequisiteResources: ["mb-ap-calcbc-10.11-study-guide"]
learningObjectives:
  - "Recall the Taylor polynomial formula about x = a and its Maclaurin case"
  - "Spot the common errors in building and using Taylor polynomials"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "mixed"
calculatorNote: "Build polynomials by hand; a calculator may evaluate them where one is allowed. Radians for trig."
related: ["mb-ap-calcbc-10.11-study-guide", "mb-ap-calcbc-10.11-practice", "mb-ap-calcbc-10.11-checklist"]
next: "mb-ap-calcbc-10.11-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only."
  - "Coefficient of (x − a)ⁿ = f⁽ⁿ⁾(a)/n!."
  - "Estimates are best close to the centre."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the derivation, the graph and worked examples, use the [full study guide](/advanced-course-resources/calculus-bc/10-11-finding-taylor-polynomial-approximations-functions-study-guide/). **BC-only material.** Prerequisites (higher derivatives 3.6, local linearity 4.6, factorials) are on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

## Recap

- A Taylor polynomial about x = a matches f **and its first n derivatives** at a.
- The tangent line is P₁. Each higher degree matches one more derivative, so the fit near a improves.
- Differentiating (x − a)ⁿ n times gives n!, which is why each coefficient divides by n!.
- Use Pₙ to **estimate f(x) for x near a**. Far from a, the estimate can be poor.
- In many cases Pₙ approaches f as n grows, but only on some interval (Topic 10.13).

## Key relationships

| Idea | Formula or fact | Note |
|---|---|---|
| Coefficient | cₙ = f⁽ⁿ⁾(a)/n! | 0! = 1, 2! = 2, 3! = 6, 4! = 24 |
| Taylor polynomial | Pₙ(x) = Σ from k = 0 to n of f⁽ᵏ⁾(a)/k! · (x − a)ᵏ | Powers of (x − a), not x |
| Maclaurin polynomial | Centre a = 0 | Powers of x |
| Reading backwards | f⁽ᵏ⁾(a) = k! × coefficient of (x − a)ᵏ | Coefficient 4 on (x − a)² means f″(a) = 8 |
| cos x about 0 | P₄(x) = 1 − x²/2 + x⁴/24 | Odd coefficients are 0 |
| sin x about 0 | P₃(x) = x − x³/6 = P₄(x) | Degree 3 but only two nonzero terms |

## Assumptions

- f has the derivatives you need at x = a.
- Trig functions use radians.
- "nth-degree" means the highest power is at most n; "first n nonzero terms" can need a higher degree.

## Mistakes to avoid

1. **No factorial:** writing f‴(a)(x − a)³ instead of f‴(a)/6 · (x − a)³.
2. **Wrong centre:** using xᵏ when the centre is a ≠ 0, or reading (x + 3) as centre 3.
3. **Derivatives at the wrong point:** always evaluate at the centre a, not at the x you are estimating.
4. **Coefficient read as derivative** when working backwards.
5. **Trusting the estimate far from a.**

## Quick self-check

1. Find the second-degree Maclaurin polynomial for e^(3x). *(1 + 3x + (9/2)x²)*
2. Find the second-degree Taylor polynomial for sin x about x = π/2. *(1 − ½(x − π/2)²)*
3. If f⁽⁴⁾(1) = 48, what is the coefficient of (x − 1)⁴? *(48/24 = 2)*

Next: [practice questions](/advanced-course-resources/calculus-bc/10-11-finding-taylor-polynomial-approximations-functions-practice/).
