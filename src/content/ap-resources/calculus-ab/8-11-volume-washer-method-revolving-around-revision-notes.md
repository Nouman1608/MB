---
resourceId: "mb-ap-calcab-8.11-revision-notes"
title: "Volume with Washer Method: Revolving Around the x- or y-Axis: Revision Notes (Calculus AB 8.11)"
description: "One-page recap of the washer method around the coordinate axes: outer and inner radii, the two volume formulas, rounding rules and the mistakes that cost marks."
course: "calculus-ab"
unit: 8
topics: ["8.11"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-8.11-study-guide"]
learningObjectives:
  - "Recall the washer formulas around the x-axis and the y-axis and when each applies"
  - "Spot the common washer-method errors before making them"
skills: ["1", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "mixed"
related: ["mb-ap-calcab-8.11-study-guide", "mb-ap-calcab-8.11-practice", "mb-ap-calcab-8.11-checklist"]
next: "mb-ap-calcab-8.11-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Gap between region and axis means ring-shaped slices: V = π ∫ [R² − r²]."
  - "R and r are distances from the axis; square each one separately."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the diagram, explanations and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/8-11-volume-washer-method-revolving-around-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **π ∫ (a to b) [R(x)² − r(x)²] dx** means π times the definite integral from x = a to x = b.

## Recap

- Slice the region **perpendicular to the axis**. If the slice reaches the axis, it spins into a disc. If there is a gap, it spins into a **washer** (a ring).
- A washer's face is a big circle minus a small circle: **area = π(R² − r²)**.
- **R** = distance from the axis to the farther edge of the slice. **r** = distance to the nearer edge.
- Adding thin washers gives a Riemann sum, which becomes the volume integral.
- The disc method is the washer method with r = 0.

## Key relationships

| Axis | Slices | Volume | Limits |
|---|---|---|---|
| x-axis | vertical, width dx | V = π ∫ (a to b) [R(x)² − r(x)²] dx | x-values |
| y-axis | horizontal, width dy | V = π ∫ (c to d) [R(y)² − r(y)²] dy | y-values |

For a region above the x-axis: R = top curve, r = bottom curve. For a region to the right of the y-axis: R = right curve, r = left curve (both written as x in terms of y).

## Assumptions behind the method

- R ≥ r ≥ 0 across the whole interval. If the curves swap which one is farther from the axis, split the integral there.
- The region lies entirely on one side of the axis.
- Both radii use the same variable as the slice thickness.

## Rounding (calculator questions)

- Store intersection values; do not retype rounded ones.
- Keep π inside the calculation and round only the final answer, usually to three decimal places.

## Mistakes to avoid

1. **Writing (R − r)²** instead of R² − r².
2. **Inner minus outer**, which gives a negative value.
3. **x-limits in a dy integral** (or y-limits in a dx integral).
4. **Using a disc** when the region does not touch the axis.
5. **Forgetting π** or putting it on one term only.
6. **Rounding a middle step**, then carrying on.

## Quick self-check

1. A washer has R = 3 and r = 1. What is the area of its face? *(π(9 − 1) = 8π)*
2. The rectangle between y = 1 and y = 3 for 0 ≤ x ≤ 2 is revolved around the x-axis. Find the volume. *(π ∫ (0 to 2) [9 − 1] dx = 16π, a thick-walled tube)*
3. With R = 5 and r = 3, compare R² − r² with (R − r)². *(16 and 4: the shortcut gives a quarter of the right face area)*

Next: [practice questions](/advanced-course-resources/calculus-ab/8-11-volume-washer-method-revolving-around-practice/).
