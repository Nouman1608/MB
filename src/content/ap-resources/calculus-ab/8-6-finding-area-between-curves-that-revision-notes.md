---
resourceId: "mb-ap-calcab-8.6-revision-notes"
title: "Finding the Area Between Curves That Intersect at More Than Two Points: Revision Notes (Calculus AB 8.6)"
description: "One-page recap of areas between curves that cross several times: find every crossing, split or use the absolute value, and never confuse net value with area."
course: "calculus-ab"
unit: 8
topics: ["8.6"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-8.6-study-guide"]
learningObjectives:
  - "Recall the two ways to write an area when the curves cross: a sum of integrals or one absolute-value integral"
  - "Spot the net-versus-total error before making it"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "mixed"
related: ["mb-ap-calcab-8.6-study-guide", "mb-ap-calcab-8.6-practice", "mb-ap-calcab-8.6-checklist"]
next: "mb-ap-calcab-8.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Area = ∫ (a to b) |f(x) − g(x)| dx = the sum of ∫ [top − bottom] dx over each piece."
  - "∫ (a to b) [f(x) − g(x)] dx with no absolute value is a net value, not an area."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the diagram and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/8-6-finding-area-between-curves-that-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **∫ (a to b) |f(x) − g(x)| dx** means the definite integral of the absolute value of f(x) − g(x) from x = a to x = b.

## Recap

- When the curves **cross inside** the interval, the top curve changes and the region splits into pieces.
- A strip's height is always the **distance** between the curves, |f(x) − g(x)|.
- **No calculator:** find every crossing, make a sign chart for f − g, and add ∫ [top − bottom] dx over each piece.
- **Calculator:** enter ∫ (a to b) |f(x) − g(x)| dx in one go. You still need the crossings if they are the region's ends.
- The same works sideways: ∫ (c to d) |R(y) − L(y)| dy, split wherever right and left swap.

## Key relationships

| Situation | Expression |
|---|---|
| f on top on [a, c], g on top on [c, b] | Area = ∫ (a to c) [f − g] dx + ∫ (c to b) [g − f] dx |
| Any number of crossings, calculator allowed | Area = ∫ (a to b) \|f − g\| dx |
| Net (signed) value | ∫ (a to b) [f − g] dx = (pieces with f on top) − (pieces with g on top) |
| Sign of ∫ over a piece where the curves do not cross | Positive: f on top. Negative: g on top. |

## Assumptions behind the method

- f and g are continuous on [a, b].
- You have found **every** crossing in [a, b]; between neighbouring crossings, f − g keeps one sign.
- Each test value lies strictly inside its piece, not at a crossing.

## Mistakes to avoid

1. **One integral of f − g** across all the pieces, so they cancel.
2. **Absolute value outside the integral**: |∫ (f − g) dx| is not the area.
3. **Missing a crossing**, especially one at x = 0 or near where the curves almost touch.
4. **One test value** used for the whole interval.
5. **Splitting at the x-axis** instead of at the crossings.
6. **Rounding crossings** before using them as limits.

## Quick self-check

1. Two curves cross at x = 1 and x = 4 inside [0, 6], and nowhere else. Without a calculator, how many integrals do you need for the area on [0, 6]? *(Three: on [0, 1], [1, 4] and [4, 6].)*
2. On three pieces, ∫ (f − g) dx equals 4, −7 and 2. Find the area and the net value. *(Area 4 + 7 + 2 = 13; net 4 − 7 + 2 = −1.)*
3. A student writes the area as |∫ (a to b) (f − g) dx|. When is this correct? *(Only when the curves do not cross between a and b.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/8-6-finding-area-between-curves-that-practice/).
