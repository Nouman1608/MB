---
resourceId: "mb-ap-calcab-2.3-revision-notes"
title: "Estimating Derivatives of a Function at a Point: Revision Notes (Calculus AB 2.3)"
description: "One-page recap of estimating a derivative at a point from a table, a graph or a calculator, with the difference quotients, units and the mistakes that cost marks."
course: "calculus-ab"
unit: 2
topics: ["2.3"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-2.3-study-guide"]
learningObjectives:
  - "Recall the forward, backward and symmetric difference quotients and when to use each"
  - "Spot the common errors in table, graph and calculator estimates before making them"
skills: ["1", "2", "4"]
studyMinutes: 10
difficulty: "foundation"
calculator: "mixed"
related: ["mb-ap-calcab-2.3-study-guide", "mb-ap-calcab-2.3-practice", "mb-ap-calcab-2.3-checklist"]
next: "mb-ap-calcab-2.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "Estimate f′(a) with the gradient of a short secant or of the drawn tangent."
  - "Show the difference quotient with values, then give units and, if asked, an interpretation."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the figures and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/2-3-estimating-derivatives-function-point-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **f′(a) = lim (h → 0) (f(a + h) − f(a))/h**; the symbol ≈ means "approximately".

## Recap

- f′(a) is a limit, so a table or graph only lets you **estimate** it.
- **Table:** use the closest data points on an interval that **contains a**. Divide by the change in x, not the number of rows.
- **Graph:** f′(a) is the gradient of the tangent at (a, f(a)). Read two grid points **on the tangent line**, not on the curve.
- **Sign check:** rising graph, f′ > 0; falling graph, f′ < 0; smooth peak or trough, f′ = 0.
- **Calculator:** write the setup, such as f′(3), then the value to three decimal places. Use radian mode.
- **Units:** units of f per unit of x.

## Key relationships

| Estimate | Formula (h > 0) | Notes |
|---|---|---|
| Forward | (f(a + h) − f(a))/h | Uses a and a point to the right |
| Backward | (f(a) − f(a − h))/h | Uses a point to the left and a |
| Symmetric | (f(a + h) − f(a − h))/(2h) | Usually the most accurate for the same h |
| Table, a between entries p and q | (f(q) − f(p))/(q − p) | Use the closest entries either side of a |
| Tangent through (x₁, y₁) and (x₂, y₂) | (y₂ − y₁)/(x₂ − x₁) | Points must lie on the tangent |

With even spacing, symmetric = (forward + backward)/2.

## Assumptions behind the method

- The function is differentiable at a; otherwise there is nothing to estimate (Topic 2.4).
- The function changes smoothly between table values, so a short secant is close to the tangent.
- The tangent line on a graph is drawn accurately, and the grid points you read lie on it.

## Mistakes to avoid

1. **Computing f(a)/a** instead of a change in f over a change in x.
2. **Using an interval that does not contain a.**
3. **Giving only a number** with no quotient shown.
4. **Reading points on the curve** when a tangent is drawn.
5. **Missing or wrong units**, or describing a total change instead of a rate.
6. **Writing = instead of ≈** for an estimate.
7. **Trusting a calculator at a corner.** It can give a number where no derivative exists.

## Quick self-check

1. f(1.0) = 3, f(1.2) = 3.8 and f(1.4) = 5.1. Estimate f′(1.2). *(f′(1.2) ≈ (5.1 − 3)/(1.4 − 1.0) = 5.25)*
2. The tangent to y = g(x) at x = 2 passes through (0, 5) and (4, −1). Estimate g′(2). *(−6/4 = −1.5)*
3. h(t) is the height of a balloon in metres, t seconds after release, and h′(7) ≈ 2.4. What does this mean? *(At t = 7 seconds the balloon is rising at about 2.4 metres per second.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/2-3-estimating-derivatives-function-point-practice/).
