---
resourceId: "mb-ap-calcab-8.5-revision-notes"
title: "Finding the Area Between Curves Expressed as Functions of y: Revision Notes (Calculus AB 8.5)"
description: "One-page recap of area with horizontal strips: right minus left, y-limits, rewriting curves as x in terms of y, choosing dx or dy, and the errors that cost marks."
course: "calculus-ab"
unit: 8
topics: ["8.5"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-8.5-study-guide"]
learningObjectives:
  - "Recall the horizontal-strip area formula and the steps for setting it up"
  - "Decide quickly whether dx or dy gives the simpler integral"
skills: ["1"]
studyMinutes: 10
difficulty: "core"
calculator: "mixed"
related: ["mb-ap-calcab-8.5-study-guide", "mb-ap-calcab-8.5-practice", "mb-ap-calcab-8.5-checklist"]
next: "mb-ap-calcab-8.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Area = ∫ (bottom to top) [right − left] dy."
  - "Limits are y-values; the integrand must be in terms of y."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the diagram and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/8-5-finding-area-between-curves-expressed-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **∫ (c to d) [R(y) − L(y)] dy** means the definite integral of R(y) − L(y) from y = c to y = d.

## Recap

- Slice the region into **thin horizontal strips**. Each strip has length right − left and thickness Δy.
- The Riemann sum Σ [R(yᵢ) − L(yᵢ)] Δy becomes ∫ (c to d) [R(y) − L(y)] dy.
- Write every boundary as **x = (expression in y)**. For example, y = ln x becomes x = eʸ, and y = x³ becomes x = ∛y.
- **Limits** are the bottom and top edges: given horizontal lines, or the y-coordinates where the curves meet.
- **Right curve:** test one y-value strictly between the limits; the larger x is on the right.
- dx and dy give the **same area**. Choose the set-up that needs one integral and no ± square roots.

## Key relationships

| Situation | Area integral |
|---|---|
| R(y) ≥ L(y) for c ≤ y ≤ d | ∫ (c to d) [R(y) − L(y)] dy |
| Region between x = g(y) and the y-axis, g(y) ≥ 0 | ∫ (c to d) [g(y) − 0] dy |
| Region left of the y-axis, g(y) ≤ 0 | ∫ (c to d) [0 − g(y)] dy |
| Curves meet at y = c and y = d | Solve R(y) = L(y) for c and d |
| Same region with vertical strips | ∫ (a to b) [top − bottom] dx (Topic 8.4) |

## When dy is the better choice

- A boundary is a sideways parabola, such as x = 5 − y², or any curve given as x = g(y).
- Vertical strips would meet a different curve partway across, forcing a split.
- Rewriting y = f(x) as x = g(y) turns a hard antiderivative into an easy one (for example ln x into eʸ).

## Mistakes to avoid

1. **Left minus right**, giving a negative "area".
2. **x-values as limits** in a dy integral.
3. **An integrand still in x**, such as ∫ ln x dy.
4. **Asking which curve is on top** in a dy set-up. The question is which is on the right.
5. **Missing brackets or dy**, so the integral is ambiguous.
6. **Rounding intersection values** before using them on a calculator.

## Quick self-check

1. Find the area enclosed by x = y² and x = 4. *(Limits y = −2 and 2; ∫ (−2 to 2) (4 − y²) dy = 32/3)*
2. The curves x = 6 − y² and x = 2 meet where? *(6 − y² = 2, so y = ±2. The area is again 32/3: it is the same shape, reflected and moved.)*
3. Your dy integral gives −9. What went wrong? *(You subtracted left − right. The area is 9.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/8-5-finding-area-between-curves-expressed-practice/).
