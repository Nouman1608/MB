---
resourceId: "mb-ap-calcab-7.4-revision-notes"
title: "Reasoning Using Slope Fields: Revision Notes (Calculus AB 7.4)"
description: "One-page recap of reasoning with slope fields: families and particular solutions, constant solutions, sketching through a point, long-run behaviour and concavity."
course: "calculus-ab"
unit: 7
topics: ["7.4"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-7.4-study-guide"]
learningObjectives:
  - "Recall how to sketch a particular solution and find constant solutions"
  - "Recall which derivative answers which question about a solution"
skills: ["4", "2", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-7.4-study-guide", "mb-ap-calcab-7.4-practice", "mb-ap-calcab-7.4-checklist"]
next: "mb-ap-calcab-7.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "Solutions are functions; a differential equation usually has a whole family of them, and one point picks one."
  - "Constant solution y = c: dy/dx = 0 for every x when y = c."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, figures and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/7-4-reasoning-slope-fields-study-guide/). This topic is shared by Calculus AB and Calculus BC.

## Recap

- A **solution** of a differential equation is a **function**. Usually there are infinitely many, forming a **family**.
- The slope field shows the whole family: every curve that follows the segments is one member.
- An **initial condition** (a point on the curve) selects one **particular solution**.
- To sketch it: start at the point, follow the segments **right and left**, keep the curve smooth and tangent to the segments, and stop at the edge of the field.
- A **constant solution** y = c is a horizontal line along which every segment is flat. Nearby solutions level off towards it or move away from it; they do not cross it.
- A curve of zero slopes that is **not horizontal** is not a solution.

## Key relationships

| Question about a solution | Tool |
|---|---|
| Increasing or decreasing? | Sign of dy/dx |
| Relative max or min? | dy/dx = 0 with a sign change (or with d²y/dx² ≠ 0) |
| Concave up or down? | Sign of d²y/dx² (implicit differentiation, then substitute dy/dx) |
| Approximate value? | Tangent line at the known point; concave up → underestimate, concave down → overestimate |
| Constant solutions? | Values of y that make dy/dx = 0 for every x |
| Long run? | Which constant (or straight-line) solution the curves approach |
| dy/dx depends on x only | Solutions are vertical shifts: y = F(x) + C |
| dy/dx depends on y only | Solutions are horizontal shifts of each other |

## Assumptions behind the method

- Sketches are estimates. Support every claim with the equation.
- For the equations in these pages, solution curves do not cross (a uniqueness result beyond the course). Justify in writing with slopes, not by quoting it.

## Mistakes to avoid

1. Sketching only to the right of the given point.
2. Calling a sloping line of flat segments a solution.
3. Drawing a curve that crosses a constant solution.
4. Differentiating y as if it were a constant when finding d²y/dx².
5. Leaving d²y/dx² in terms of dy/dx before evaluating.
6. Saying a solution "reaches" a value it only approaches.

## Quick self-check

1. Find the constant solutions of dy/dx = y(y − 4). Is a solution with y(0) = 2 increasing or decreasing? *(y = 0 and y = 4. At y = 2, dy/dx = 2(−2) = −4 < 0, so decreasing, and it falls towards y = 0.)*
2. For dy/dx = x + y, find d²y/dx² and its sign at (1, −3). *(d²y/dx² = 1 + dy/dx. At (1, −3), dy/dx = −2, so d²y/dx² = −1: concave down.)*
3. Is y = 2x a solution of dy/dx = 2x − y? *(No. Its slope is 2, but on that line the equation gives 2x − 2x = 0.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/7-4-reasoning-slope-fields-practice/).
