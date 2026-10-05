---
resourceId: "mb-ap-calcbc-9.1-revision-notes"
title: "Defining and Differentiating Parametric Equations: Revision Notes (Calculus BC 9.1)"
description: "One-page recap of parametric curves and dy/dx: the chain-rule formula, tangent lines, horizontal and vertical tangents, and the mistakes that cost marks."
course: "calculus-bc"
unit: 9
topics: ["9.1"]
resourceType: "revision-notes"
calculusScope: "bc-only"
prerequisiteResources: ["mb-ap-calcbc-9.1-study-guide"]
learningObjectives:
  - "Recall how to find dy/dx for a parametric curve and when the formula applies"
  - "Spot the common errors with parametric slopes before making them"
skills: ["1", "2"]
studyMinutes: 10
difficulty: "core"
calculator: "mixed"
calculatorNote: "Derivatives by hand; a calculator may only evaluate a slope or solve an equation where one is allowed. Angles in radians."
related: ["mb-ap-calcbc-9.1-study-guide", "mb-ap-calcbc-9.1-practice", "mb-ap-calcbc-9.1-checklist"]
next: "mb-ap-calcbc-9.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only."
  - "dy/dx = (dy/dt) ÷ (dx/dt), provided dx/dt ≠ 0."
  - "Given a point, find t first; a point can belong to more than one t."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the chain-rule derivation, the graphs and the worked examples, use the [full study guide](/advanced-course-resources/calculus-bc/9-1-defining-differentiating-parametric-equations-study-guide/). **BC-only material.** Prerequisites (basic derivatives 2.5–2.7, chain rule 3.1, tangent lines) are on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

## Recap

- A **parametric curve** gives x = f(t) and y = g(t). Each t gives one point; as t increases the point moves, so the curve has a **direction**.
- The curve can turn back or cross itself, so one point (x, y) may come from two values of t.
- By the chain rule, dy/dt = (dy/dx)(dx/dt). Divide by dx/dt to get the slope.
- dy/dx is usually a **function of t**. Substitute a value of t, not x.

## Key relationships

| Idea | Result | Note |
|---|---|---|
| Slope of tangent | dy/dx = (dy/dt) ÷ (dx/dt) | Only where dx/dt ≠ 0 |
| Tangent line at t = a | y − y(a) = m(x − x(a)), with m = dy/dx at t = a | Find the point and the slope from the same t |
| Horizontal tangent | dy/dt = 0 and dx/dt ≠ 0 | Check both conditions |
| Vertical tangent | dx/dt = 0 and dy/dt ≠ 0 | No sideways motion at that instant |
| Both zero | 0 ÷ 0: no conclusion | Simplify first or look at the graph |

## Meaning in context

- dy/dx is the **slope of the path**, in units of y per unit of x.
- It is not a speed and does not tell you the direction of travel. A positive dy/dx with dx/dt < 0 and dy/dt < 0 means moving **down and left** along a line that rises to the right.

## Mistakes to avoid

1. **Upside-down formula.** dy/dx is dy/dt on top, dx/dt underneath.
2. **Putting an x-value in for t.** Solve x(t) = x₀ and y(t) = y₀ for t first.
3. **Missing a second t.** Check every t that gives the point; each can have its own slope.
4. **Skipping the check** that dx/dt ≠ 0 at a horizontal-tangent candidate.
5. **Swapping horizontal and vertical**: dx/dt = 0 gives a vertical tangent.
6. **Chain-rule slips** inside dx/dt or dy/dt, for example d/dt [sin 3t] = 3 cos 3t.

## Quick self-check

1. For x = 2t − 1, y = t³, find dy/dx at t = 2. *(3t²/2 = 6)*
2. For x = cos t, y = sin t, find the slope at t = π/6. *(cos t ÷ (−sin t) = −√3)*
3. For x = t² − 6t, y = 2t + 1, where is the tangent vertical? *(dx/dt = 2t − 6 = 0 at t = 3, dy/dt = 2 ≠ 0; point (−9, 7))*

Next: [practice questions](/advanced-course-resources/calculus-bc/9-1-defining-differentiating-parametric-equations-practice/).
