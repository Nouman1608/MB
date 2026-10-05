---
resourceId: "mb-ap-calcab-6.10-revision-notes"
title: "Integrating Functions Using Long Division and Completing the Square: Revision Notes (Calculus AB 6.10)"
description: "One-page recap of rewriting integrands: when to divide, how to complete the square, the arctan and arcsin forms, splitting a numerator, and the slips that cost marks."
course: "calculus-ab"
unit: 6
topics: ["6.10"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-6.10-study-guide"]
learningObjectives:
  - "Recall when to use long division and when to complete the square"
  - "Recall the arctan and arcsin forms with the constant a"
  - "Spot the common errors in rewritten integrals before making them"
skills: ["1", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-6.10-study-guide", "mb-ap-calcab-6.10-practice", "mb-ap-calcab-6.10-checklist"]
next: "mb-ap-calcab-6.10-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Top degree ≥ bottom degree: divide first."
  - "Quadratic with no real roots: complete the square and aim for arctan (or arcsin under a root)."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the graph and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/6-10-integrating-functions-long-division-completing-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **∫ (a to b) f(x) dx** is the definite integral from x = a to x = b.

## Recap

- Some integrands only match a rule after you **rewrite them in an equivalent form**. The rewriting is algebra; the function's values do not change.
- **Compare degrees first.** If the top's degree is at least the bottom's, use **long division**: quotient + remainder/divisor. Check by multiplying back.
- For **1/(quadratic with no real roots)**, complete the square and use the arctan form.
- For **1/√(quadratic with a negative x² term)**, complete the square and use the arcsin form.
- For **(linear)/(quadratic)**, split the top into k × (derivative of the bottom) + constant. The first part gives ln; the second gives arctan.
- If the denominator factors into linear factors (for example x² − 4), you need partial fractions: BC only, Topic 6.12.

## Key relationships

| Situation | Rewrite | Result |
|---|---|---|
| Top-heavy rational function | Long division | Polynomial terms + a ln or arctan term |
| Completing the square | x² + bx + c = (x + b/2)² + (c − b²/4) | Sum of squares when b² − 4c < 0 |
| Arctan form (a > 0) | ∫ du/(a² + u²) | (1/a) arctan(u/a) + C |
| Arcsin form (a > 0) | ∫ du/√(a² − u²) | arcsin(u/a) + C |
| Derivative over function | ∫ g′(x)/g(x) dx | ln|g(x)| + C |

## Assumptions behind the method

- The rewritten form must equal the original for every x in the interval (check by expanding or multiplying back).
- The interval of integration must avoid zeros of the denominator, and for arcsin it must keep the expression under the root positive.
- In the arctan and arcsin forms, a is the **positive square root** of the constant, not the constant itself.

## Mistakes to avoid

1. **Integrating top and bottom separately.**
2. **Dropping the remainder** after long division.
3. **Using a² where a belongs**, for example 1/4 instead of 1/2 in front of arctan when the constant is 4.
4. **Sign slips** in (x − h)²: expand to check.
5. **Writing ln(quadratic)** when the top is not a multiple of the bottom's derivative.
6. **Using arctan for a quadratic that factors.**

## Quick self-check

1. Find ∫ x²/(x + 1) dx. *(x²/2 − x + ln|x + 1| + C, because x²/(x + 1) = x − 1 + 1/(x + 1))*
2. Find ∫ 1/(x² + 2x + 10) dx. *((1/3) arctan((x + 1)/3) + C, because x² + 2x + 10 = (x + 1)² + 9)*
3. Find ∫ 1/√(3 + 2x − x²) dx. *(arcsin((x − 1)/2) + C, because 3 + 2x − x² = 4 − (x − 1)²)*

Next: [practice questions](/advanced-course-resources/calculus-ab/6-10-integrating-functions-long-division-completing-practice/).
