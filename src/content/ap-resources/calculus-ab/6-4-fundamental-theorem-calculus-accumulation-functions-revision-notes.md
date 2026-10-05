---
resourceId: "mb-ap-calcab-6.4-revision-notes"
title: "The Fundamental Theorem of Calculus and Accumulation Functions: Revision Notes (Calculus AB 6.4)"
description: "One-page recap of accumulation functions, the theorem d/dx ∫ (a to x) f(t) dt = f(x), its variations with a lower limit or chain rule, and the mistakes to avoid."
course: "calculus-ab"
unit: 6
topics: ["6.4"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-6.4-study-guide"]
learningObjectives:
  - "Recall the accumulation form of the Fundamental Theorem of Calculus and its condition"
  - "Recall the sign and chain-rule variations and the common errors"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-6.4-study-guide", "mb-ap-calcab-6.4-practice", "mb-ap-calcab-6.4-checklist"]
next: "mb-ap-calcab-6.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "g(x) = ∫ (a to x) f(t) dt is a function of x with g(a) = 0."
  - "f continuous ⇒ g′(x) = f(x)."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the diagrams and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/6-4-fundamental-theorem-calculus-accumulation-functions-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **∫ (a to x) f(t) dt** means the definite integral of f(t) from t = a to t = x.

## Recap

- A definite integral with a variable upper limit defines a new function: **g(x) = ∫ (a to x) f(t) dt**, the signed area under f from a to x.
- t is a dummy variable. x is the input of g and must not appear inside the integral.
- **g(a) = 0.** If x < a, the area is collected from right to left and its sign is reversed.
- **Theorem:** if f is continuous on an interval containing a, then **g′(x) = f(x)** on that interval.
- Reason: g(x + h) − g(x) is a thin strip of area about f(x) · h. Divide by h and let h → 0.
- Consequence: every continuous function has an antiderivative, even if no formula can be written for it.

## Key relationships

| Expression | Derivative with respect to x |
|---|---|
| ∫ (a to x) f(t) dt | f(x) |
| ∫ (x to b) f(t) dt | −f(x) |
| ∫ (a to u(x)) f(t) dt | f(u(x)) · u′(x) |
| ∫ (u(x) to b) f(t) dt | −f(u(x)) · u′(x) |
| ∫ (c to x) f(t) dt, any other constant c | f(x) as well: changing the constant start only adds a constant |

Values of g come from signed areas (geometry). Slopes of g come from heights of f.

## Assumptions behind the method

- f is continuous on an interval that contains the constant limit and every value of x (or u(x)) used.
- Corners in the graph of f are allowed; jumps are not.
- The chain rule form needs u to be differentiable.

## Mistakes to avoid

1. **Differentiating the integrand** instead of substituting x into it.
2. **Writing g(a) = f(a).** It is 0.
3. **Missing the factor u′(x)** when the upper limit is a function of x.
4. **Missing the minus sign** when x is the lower limit.
5. **Adding unsigned areas** when part of f is below the axis.
6. **Writing x inside the integral** as well as in a limit.

## Quick self-check

1. d/dx ∫ (1 to x) (t³ + 2t) dt = ? *(x³ + 2x)*
2. d/dx ∫ (x to 4) sin(√t) dt = ? *(−sin(√x), for x > 0)*
3. d/dx ∫ (0 to 5x) cos(t²) dt = ? *(5 cos(25x²))*
4. If g(x) = ∫ (3 to x) f(t) dt, what is g(3)? *(0)*

Next: [practice questions](/advanced-course-resources/calculus-ab/6-4-fundamental-theorem-calculus-accumulation-functions-practice/).
