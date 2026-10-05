---
resourceId: "mb-ap-calcab-8.9-revision-notes"
title: "Volume with the Disc Method: Revolving Around the x- or y-Axis: Revision Notes (Calculus AB 8.9)"
description: "One-page recap of the disc method about the x- and y-axes: the formula, how to choose the radius, variable and limits, and the mistakes that cost marks."
course: "calculus-ab"
unit: 8
topics: ["8.9"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-8.9-study-guide"]
learningObjectives:
  - "Recall the disc-method formulas for the x-axis and the y-axis"
  - "Spot the common errors in disc-method setups before making them"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "mixed"
related: ["mb-ap-calcab-8.9-study-guide", "mb-ap-calcab-8.9-practice", "mb-ap-calcab-8.9-checklist"]
next: "mb-ap-calcab-8.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "Disc volume = π ∫ (radius)², integrated along the axis."
  - "x-axis: dx and x-limits. y-axis: dy, y-limits and x written in terms of y."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the picture, the reasoning and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/8-9-volume-disc-method-revolving-around-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **π ∫ (a to b) [f(x)]² dx** means π times the definite integral of [f(x)]² from x = a to x = b.

## Recap

- Spinning a region about an axis it touches gives a solid whose slices, cut at right angles to the axis, are **discs**.
- Each disc has area π(radius)². The volume is the integral of that area along the axis. It is the cross-section method of Topics 8.7 and 8.8 with a circular slice.
- The **radius** is the distance from the axis to the curve, measured at right angles to the axis.
- About the **y-axis**, slices are horizontal: write the curve as x = g(y) and use y-limits.
- Volumes are in **cubic units** and are never negative.

## Key relationships

| Axis | Slice | Radius | Volume |
|---|---|---|---|
| x-axis | vertical, thickness dx | f(x) | π ∫ (a to b) [f(x)]² dx |
| y-axis | horizontal, thickness dy | g(y), from x = g(y) | π ∫ (c to d) [g(y)]² dy |
| Any curve below the x-axis | vertical | \|f(x)\| | still π ∫ [f(x)]² dx (the square removes the sign) |
| Check | — | widest radius R, length L | V is less than the cylinder πR²L |

Useful rewrites for the y-axis: y = x² (x ≥ 0) → x = √y; y = x³ → x = y^(1/3); y = eˣ → x = ln y.

## Assumptions behind the method

- The region touches the axis along the whole interval. If there is a gap, the slices are washers (Topic 8.11).
- The solid is formed by one full turn.
- The radius function is continuous on the interval.

## Mistakes to avoid

1. **No π**, or **2π** instead of π.
2. **Not squaring** the radius, or squaring the integral instead of the integrand.
3. **dx with a y-axis rotation** (or y-limits with dx).
4. **Using the diameter** as the radius.
5. **Integrating (3x − x²)² without expanding** (or without a substitution).
6. **Square units** on a volume.
7. **Rounding early** on a calculator question; give three decimal places at the end.

## Quick self-check

1. Region under y = √x for 0 ≤ x ≤ 4, spun about the x-axis. Volume? *(π ∫ (0 to 4) x dx = 8π)*
2. Region between y = x² (x ≥ 0), the y-axis and y = 4, spun about the y-axis. Volume? *(x = √y, so π ∫ (0 to 4) y dy = 8π)*
3. True or false: π ∫ (0 to 2) x³ dx is the volume when the region under y = x³ on [0, 2] is spun about the x-axis. *(False: the radius x³ must be squared, giving π ∫ (0 to 2) x⁶ dx.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/8-9-volume-disc-method-revolving-around-practice/).
