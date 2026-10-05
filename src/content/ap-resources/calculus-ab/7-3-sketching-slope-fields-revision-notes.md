---
resourceId: "mb-ap-calcab-7.3-revision-notes"
title: "Sketching Slope Fields: Revision Notes (Calculus AB 7.3)"
description: "One-page recap of slope fields: what each segment means, how to draw a field from a table, the row and column patterns, and the checks for matching."
course: "calculus-ab"
unit: 7
topics: ["7.3"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-7.3-study-guide"]
learningObjectives:
  - "Recall what a slope field represents and how to draw one at given points"
  - "Use the row, column and zero-slope patterns to match equations and fields"
skills: ["2", "1"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-7.3-study-guide", "mb-ap-calcab-7.3-practice", "mb-ap-calcab-7.3-checklist"]
next: "mb-ap-calcab-7.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "Segment at (a, b) = short line with slope dy/dx evaluated at (a, b)."
  - "x only: identical columns. y only: identical rows. dy/dx = 0: horizontal segments."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, figures and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/7-3-sketching-slope-fields-study-guide/). This topic is shared by Calculus AB and Calculus BC.

## Recap

- A differential equation dy/dx = f(x, y) gives the slope of a solution curve at every point it passes through.
- A **slope field** shows this on a finite grid: at each point, a short segment with slope f(x, y).
- Each segment is a piece of a **tangent line** to the solution through that point. The segments are not the solution itself.
- Drawing one needs only substitution, no solving. That is why a field lets you estimate how solutions behave.
- Draw segments short, equal in length and centred on the points. Only the tilt carries information.

## Key relationships

| What you see in the field | What it tells you about dy/dx |
|---|---|
| Every column identical | dy/dx depends on x only |
| Every row identical | dy/dx depends on y only |
| Neither repeats | dy/dx depends on both x and y |
| Horizontal segment at (a, b) | dy/dx = 0 at (a, b) |
| Rising to the right | dy/dx > 0 |
| Falling to the right | dy/dx < 0 |
| Steeper segment | Larger \|dy/dx\| |

Method for sketching: **table → structure → draw**. Method for matching: **rows or columns → zero slopes → sign at a test point**.

## Assumptions behind the picture

- The axes use the same scale, so a slope of 1 looks like 45°. On unequal scales, only the relative steepness can be trusted.
- The field shows directions at the grid points only. Between the points you blend the directions smoothly.

## Mistakes to avoid

1. **Swapping coordinates.** In (1, −2), x = 1 and y = −2.
2. **Long lines** that run into the next point.
3. **Blank points** where the slope is 0. Draw a horizontal segment.
4. **Mixing up rows and columns.** x only gives identical columns.
5. **Matching on zero slopes alone.** 1 − y² and y² − 1 have the same flat rows but opposite signs.
6. **Inconsistent steepness**, for example drawing slopes 1/2 and 2 at the same angle.

## Quick self-check

1. For dy/dx = xy − 2, what is the slope of the segment at (2, 3)? *(2 × 3 − 2 = 4: a steep rise)*
2. For dy/dx = 3 − y, which segments are horizontal, and how do the segments look along y = 5? *(All segments on the row y = 3. Along y = 5 every segment has slope −2, so each row is identical and falls.)*
3. A field has identical columns and horizontal segments only along the y-axis. Does dy/dx depend on y? *(No. Identical columns mean dy/dx depends on x only.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/7-3-sketching-slope-fields-practice/).
