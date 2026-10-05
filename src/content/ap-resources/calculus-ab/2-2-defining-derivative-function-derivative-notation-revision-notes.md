---
resourceId: "mb-ap-calcab-2.2-revision-notes"
title: "Defining the Derivative of a Function and Using Derivative Notation: Revision Notes (Calculus AB 2.2)"
description: "One-page recap of the derivative function from the limit definition, the notations f′(x), dy/dx and y′, units, and the tangent line equation y − f(a) = f′(a)(x − a)."
course: "calculus-ab"
unit: 2
topics: ["2.2"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-2.2-study-guide"]
learningObjectives:
  - "Recall the definition of f′(x), the three notations and the tangent line equation"
  - "Spot the common errors with derivative notation and tangent lines before making them"
skills: ["1", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-2.2-study-guide", "mb-ap-calcab-2.2-practice", "mb-ap-calcab-2.2-checklist"]
next: "mb-ap-calcab-2.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "f′(x) = lim (h → 0) (f(x + h) − f(x))/h, wherever the limit exists."
  - "f′(x), dy/dx and y′ all name the derivative; f′(a) is the slope of the tangent at (a, f(a))."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the tangent-line graph and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/2-2-defining-derivative-function-derivative-notation-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **lim (h → 0) g(h)** means "the limit as h approaches 0 of g(h)". **f′(x)** is read "f prime of x".

## Recap

- Keep the point as a variable x in the Topic 2.1 definition, and you get a **function**, f′.
- Inside the limit, x is fixed and only h changes. Cancel h (h ≠ 0) before letting h → 0.
- f′(x) exists only where the limit exists. It never exists where f is undefined, and it can fail where f is defined (√x at x = 0).
- **f′(a)** is a number: the slope of the tangent line at (a, f(a)), and the instantaneous rate of change at a.
- Units of f′ = units of f ÷ units of x.
- A derivative can be shown analytically (formula), numerically (table), graphically (tangent slopes) or verbally (a rate in words).

## Key relationships

| Idea | Formula or notation | Notes |
|---|---|---|
| Derivative function | f′(x) = lim (h → 0) (f(x + h) − f(x))/h | Provided the limit exists |
| Notations for y = f(x) | f′(x), dy/dx, y′, d/dx (f(x)) | All mean the same thing |
| Value at a point | f′(a), or dy/dx at x = a | Find f′(x) first, then substitute |
| Tangent line at x = a | y − f(a) = f′(a)(x − a) | Point (a, f(a)), slope f′(a) |
| Results from the guide | d/dx (2x² − 3x + 1) = 4x − 3; d/dx (3/(x + 1)) = −3/(x + 1)² | Both found from the definition |

## Mistakes to avoid

1. **Using the formula f′(x) as a tangent slope.** The slope must be the number f′(a).
2. **Swapping height and slope.** Height f(a), slope f′(a).
3. **Substituting first.** f(2) is a constant; its "derivative" 0 is not f′(2).
4. **Writing f(x) + h for f(x + h).**
5. **Splitting dy/dx** into separate pieces in this unit.
6. **Missing units** in a context answer.

## Quick self-check

1. Use the definition to find g′(x) for g(x) = x² + 4x. *(2x + 4: the quotient is 2x + 4 + h for h ≠ 0)*
2. Find the tangent line to y = x² + 4x at x = 1. *(Point (1, 5), slope 6: y − 5 = 6(x − 1), or y = 6x − 1)*
3. If P(t) is a population and t is in years, what are the units of dP/dt? *(Individuals, such as people, per year)*

Next: [practice questions](/advanced-course-resources/calculus-ab/2-2-defining-derivative-function-derivative-notation-practice/).
