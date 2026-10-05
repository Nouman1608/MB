---
resourceId: "mb-ap-calcab-8.10-revision-notes"
title: "Volume with the Disc Method: Revolving Around Other Axes: Revision Notes (Calculus AB 8.10)"
description: "One-page recap of discs about lines such as y = k and x = h: the radius as a distance from the axis, the choice of dx or dy, and the sign errors that cost marks."
course: "calculus-ab"
unit: 8
topics: ["8.10"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-8.10-study-guide"]
learningObjectives:
  - "Recall the disc formulas for horizontal and vertical axes of revolution"
  - "Spot sign and variable errors in the radius before making them"
skills: ["1", "2"]
studyMinutes: 10
difficulty: "core"
calculator: "mixed"
related: ["mb-ap-calcab-8.10-study-guide", "mb-ap-calcab-8.10-practice", "mb-ap-calcab-8.10-checklist"]
next: "mb-ap-calcab-8.10-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "Radius = distance from the axis of revolution to the curve, written larger minus smaller."
  - "Axis y = k: dx. Axis x = h: dy, with x written in terms of y."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the picture, the reasoning and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/8-10-volume-disc-method-revolving-around-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **π ∫ (a to b) [radius]² dx** means π times the definite integral of the squared radius from x = a to x = b.

## Recap

- The disc method works about **any horizontal or vertical line**, not only the coordinate axes.
- Each slice is cut at right angles to the axis. Its radius is the **distance from the axis to the curve**.
- The region must **touch the axis along its whole length**. Otherwise the slices are washers (Topics 8.11 and 8.12).
- Spinning about y = k is the same as shifting the region and the axis down by k, then spinning about the x-axis.
- Volumes are in **cubic units** and never negative.

## Key relationships

| Axis | Curve | Radius | Volume |
|---|---|---|---|
| y = k, curve below | y = f(x) | k − f(x) | π ∫ (a to b) [k − f(x)]² dx |
| y = k, curve above | y = f(x) | f(x) − k | π ∫ (a to b) [f(x) − k]² dx |
| x = h, curve to the left | x = g(y) | h − g(y) | π ∫ (c to d) [h − g(y)]² dy |
| x = h, curve to the right | x = g(y) | g(y) − h | π ∫ (c to d) [g(y) − h]² dy |
| Negative axis, e.g. y = −2 | y = f(x) above | f(x) + 2 | π ∫ [f(x) + 2]² dx |

## Assumptions behind the method

- The axis is a boundary of the region on the whole interval.
- The solid is formed by one full turn.
- Limits are measured along the axis: x-limits for a horizontal axis, y-limits for a vertical axis.

## Mistakes to avoid

1. **Measuring the radius from the x- or y-axis** instead of from the axis of revolution.
2. **Sign slips with a negative axis:** f(x) − (−2) = f(x) + 2.
3. **Squaring term by term:** (1 − √x)² = 1 − 2√x + x, not 1 − x.
4. **dx for a vertical axis**, or x-limits with dy.
5. **Using discs when the region does not reach the axis.**
6. **Leaving out π**, or using 2π.

## Quick self-check

1. The triangle bounded by y = x, y = 2 and the y-axis is spun about y = 2. Volume? *(Radius 2 − x, so π ∫ (0 to 2) (2 − x)² dx = 8π/3, the volume of a cone of radius 2 and height 2.)*
2. A region is spun about x = 4. Which differential do you use? *(dy, because the axis is vertical.)*
3. The curve y = f(x) is above the axis y = −3. What is the radius? *(f(x) + 3)*

Next: [practice questions](/advanced-course-resources/calculus-ab/8-10-volume-disc-method-revolving-around-practice/).
