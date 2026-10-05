---
resourceId: "mb-ap-calcab-8.8-revision-notes"
title: "Volumes with Cross Sections: Triangles and Semicircles: Revision Notes (Calculus AB 8.8)"
description: "One-page recap of volumes with triangular and semicircular cross sections: the area formulas in terms of s, the V = c ∫ s² dx shortcut, and the mistakes that cost marks."
course: "calculus-ab"
unit: 8
topics: ["8.8"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-8.8-study-guide"]
learningObjectives:
  - "Recall the area formulas for triangular and semicircular slices in terms of s"
  - "Spot the common errors in cross-section volumes before making them"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "mixed"
related: ["mb-ap-calcab-8.8-study-guide", "mb-ap-calcab-8.8-practice", "mb-ap-calcab-8.8-checklist"]
next: "mb-ap-calcab-8.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "V = ∫ A dx (or dy). Find s, write A in terms of s, integrate."
  - "Equilateral (√3/4)s²; right triangle leg s²/2; hypotenuse s²/4; semicircle (π/8)s²."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the derivations, the figure and the worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/8-8-volumes-cross-sections-triangles-semicircles-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **∫ (a to b) A(x) dx** means the definite integral of A(x) from x = a to x = b. **s** is the side of the slice that lies in the base.

## Recap

- The method is Topic 8.7's: **V = ∫ (a to b) A(x) dx**, built from thin slabs of volume A(x) Δx.
- Perpendicular to the x-axis: s(x) = top − bottom, x-limits, dx.
- Perpendicular to the y-axis: s(y) = right − left in y, y-limits, dy.
- Each standard shape has A = c s², so **V = c ∫ s² dx**.
- If the area A(x) is given as a function, integrate it directly.

## Key relationships

| Slice on side s | Area | Where it comes from |
|---|---|---|
| Equilateral triangle | (√3/4)s² | height (√3/2)s by Pythagoras |
| Isosceles right triangle, leg in base | s²/2 | legs s and s |
| Isosceles right triangle, hypotenuse in base | s²/4 | legs s/√2, or height s/2 |
| Triangle, base s, height h | (1/2)sh | height given in the question |
| Semicircle, diameter in base | (π/8)s² | radius s/2 |
| Circle, diameter in base | (π/4)s² | radius s/2 |

Ratio check: equilateral ÷ semicircle = (√3/4) ÷ (π/8) = 2√3/π ≈ 1.103 for every base.

## Assumptions behind the method

- Every slice stands at right angles to the base and perpendicular to the stated axis.
- The side s is a length across the base, so s ≥ 0 between the limits.
- One formula for s holds across the interval; otherwise split the integral.

## Mistakes to avoid

1. **Semicircle radius = s.** It is s/2. Using s makes the answer four times too big.
2. **Swapping the right-triangle cases**: leg s²/2, hypotenuse s²/4.
3. **Writing √3/2** for the equilateral constant. The area constant is √3/4.
4. **Writing f² − g²** instead of (f − g)².
5. **Mixing x and y** in a dy integral.
6. **Rounding a calculator limit** before integrating.

## Quick self-check

1. A semicircular slice has diameter 6. What is its area? *(9π/2: radius 3, so (1/2)π(3)².)*
2. An equilateral triangular slice has side 2. What is its area? *(√3: (√3/4)(4).)*
3. Two solids share a base. One has isosceles right triangles with the hypotenuse in the base, the other with a leg in the base. What is the ratio of their volumes? *(1 : 2, since (1/4) ÷ (1/2) = 1/2.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/8-8-volumes-cross-sections-triangles-semicircles-practice/).
