---
resourceId: "mb-ap-calcab-8.12-revision-notes"
title: "Volume with Washer Method: Revolving Around Other Axes: Revision Notes (Calculus AB 8.12)"
description: "One-page recap of washer volumes around any horizontal or vertical line: the radius rule, which boundary is outer, the formulas and the mistakes that cost marks."
course: "calculus-ab"
unit: 8
topics: ["8.12"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-8.12-study-guide"]
learningObjectives:
  - "Recall how to write radii as distances from a line y = k or x = h"
  - "Spot the common errors with shifted axes before making them"
skills: ["1", "2"]
studyMinutes: 10
difficulty: "core"
calculator: "mixed"
related: ["mb-ap-calcab-8.12-study-guide", "mb-ap-calcab-8.12-practice", "mb-ap-calcab-8.12-checklist"]
next: "mb-ap-calcab-8.12-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Radius = larger coordinate − smaller coordinate, measured from the axis."
  - "R comes from the boundary farther from the axis, which may be the lower or left-hand curve."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the diagram, explanations and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/8-12-volume-washer-method-revolving-around-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **π ∫ (a to b) [R(x)² − r(x)²] dx** means π times the definite integral from x = a to x = b; R is the outer radius and r the inner radius.

## Recap

- The washer method works around **any** horizontal or vertical line, not just the coordinate axes.
- Slices are perpendicular to the axis: vertical (dx) for y = k, horizontal (dy) for x = h.
- Each radius is a **distance from the axis**: larger coordinate minus smaller coordinate.
- **R** belongs to the boundary farther from the axis; **r** to the nearer one. Decide with a test point.
- Changing the axis changes the radii, so the same region can give very different volumes.

## Key relationships

| Axis | Where it is | Radius to the curve | Integrate in |
|---|---|---|---|
| y = k | above the region | k − f(x) | x |
| y = k | below the region | f(x) − k | x |
| x = h | right of the region | h − g(y) | y |
| x = h | left of the region | g(y) − h | y |

General form: V = π ∫ [R² − r²], with limits in the slice variable.

## Assumptions behind the method

- The axis does not pass through the inside of the region.
- R ≥ r ≥ 0 across the interval. If the boundaries swap, split the integral.
- Around a vertical line, both curves are written as x in terms of y.

## Mistakes to avoid

1. **"Top curve = R"** when the axis is above the region. There, the lower curve is farther away.
2. **Subtracting k** for an axis like y = −1. The distance is f(x) − (−1) = f(x) + 1.
3. **Ignoring the axis** and using the plain curve values.
4. **Shifting the final answer** instead of each radius.
5. **x-limits with dy** (or y-limits with dx).
6. **(R − r)²** instead of R² − r².

## Quick self-check

1. How far is the curve point at y = 2 from the axis y = 6? From the axis y = −3? *(4; 5)*
2. How far is the point x = 3 from the axis x = −2? *(3 − (−2) = 5)*
3. A vertical strip runs from y = 1 to y = 3 and is revolved around y = 4. Find R, r and the face area. *(R = 4 − 1 = 3, r = 4 − 3 = 1, area 8π)*

Next: [practice questions](/advanced-course-resources/calculus-ab/8-12-volume-washer-method-revolving-around-practice/).
