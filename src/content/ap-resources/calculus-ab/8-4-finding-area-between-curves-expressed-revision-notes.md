---
resourceId: "mb-ap-calcab-8.4-revision-notes"
title: "Finding the Area Between Curves Expressed as Functions of x: Revision Notes (Calculus AB 8.4)"
description: "One-page recap of area between curves with vertical strips: top minus bottom, finding limits and the top curve, regions below the axis, splitting, and the errors that cost marks."
course: "calculus-ab"
unit: 8
topics: ["8.4"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-8.4-study-guide"]
learningObjectives:
  - "Recall the area formula and the steps for setting it up"
  - "Spot the common errors in area-between-curves questions before making them"
skills: ["4"]
studyMinutes: 10
difficulty: "core"
calculator: "mixed"
related: ["mb-ap-calcab-8.4-study-guide", "mb-ap-calcab-8.4-practice", "mb-ap-calcab-8.4-checklist"]
next: "mb-ap-calcab-8.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Area = ∫ (left to right) [top − bottom] dx."
  - "Limits are x-values, usually from solving f(x) = g(x)."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the diagram and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/8-4-finding-area-between-curves-expressed-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **∫ (a to b) [f(x) − g(x)] dx** means the definite integral of f(x) − g(x) from x = a to x = b.

## Recap

- Slice the region into **thin vertical strips**. Each strip has height top − bottom and width Δx.
- The Riemann sum Σ [f(xᵢ) − g(xᵢ)] Δx becomes the integral ∫ (a to b) [f(x) − g(x)] dx.
- **Limits** are the left and right edges: given vertical lines, or the x-coordinates where the curves meet.
- **Top curve:** test one x-value strictly between the limits.
- Top − bottom works **above, below or across the x-axis**. The x-axis is just the curve y = 0.
- If the top or the bottom boundary **changes formula**, split the integral at that x-value.

## Key relationships

| Situation | Area integral |
|---|---|
| f above g on [a, b] | ∫ (a to b) [f(x) − g(x)] dx |
| f above the x-axis | ∫ (a to b) [f(x) − 0] dx |
| f below the x-axis | ∫ (a to b) [0 − f(x)] dx |
| Top changes from f to h at x = c | ∫ (a to c) [f(x) − g(x)] dx + ∫ (c to b) [h(x) − g(x)] dx |
| Curves meet at x = a and x = b | Solve f(x) = g(x) for a and b |

## Assumptions behind the method

- Both functions are continuous on [a, b].
- One curve stays on top on each interval you integrate over. (If the curves cross inside, see Topic 8.6.)
- Each vertical line crosses the region in one piece, from one bottom curve to one top curve.

## Mistakes to avoid

1. **Bottom minus top**, giving a negative "area".
2. **Using y-coordinates as limits** in a dx integral.
3. **Splitting at the x-axis** when it is not a boundary.
4. **Integrating only the top curve.**
5. **Leaving out brackets or dx**, so the integral is ambiguous.
6. **Rounding intersection points** before evaluating on a calculator.

## Quick self-check

1. Find the area enclosed by y = x² and y = x. *(They meet at x = 0 and x = 1; x is on top; ∫ (0 to 1) (x − x²) dx = 1/6)*
2. Find the area between y = 4 − x² and the x-axis. *(Limits −2 and 2; ∫ (−2 to 2) (4 − x²) dx = 32/3)*
3. Your area integral gives −5. What went wrong? *(With one curve on top throughout, you subtracted bottom − top. The area is 5.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/8-4-finding-area-between-curves-expressed-practice/).
