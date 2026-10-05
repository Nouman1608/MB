---
resourceId: "mb-ap-calcab-8.7-revision-notes"
title: "Volumes with Cross Sections: Squares and Rectangles: Revision Notes (Calculus AB 8.7)"
description: "One-page recap of volumes with square and rectangular cross sections: the slab idea, side length from the base, area formulas, dx or dy, and the mistakes that cost marks."
course: "calculus-ab"
unit: 8
topics: ["8.7"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-8.7-study-guide"]
learningObjectives:
  - "Recall V = ∫ A(x) dx and the area formulas for square and rectangular slices"
  - "Spot the common errors in cross-section volumes before making them"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "mixed"
related: ["mb-ap-calcab-8.7-study-guide", "mb-ap-calcab-8.7-practice", "mb-ap-calcab-8.7-checklist"]
next: "mb-ap-calcab-8.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "Volume = ∫ (cross-sectional area) d(variable across the slices)."
  - "Square: A = s². Rectangle: A = s × height. s = top − bottom or right − left."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the figures, explanations and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/8-7-volumes-cross-sections-squares-rectangles-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **∫ (a to b) A(x) dx** means the definite integral of A(x) from x = a to x = b.

## Recap

- A solid with known cross sections is a stack of thin slabs. One slab has volume about A(x) Δx.
- Adding the slabs and letting Δx → 0 gives **V = ∫ (a to b) A(x) dx**.
- The solid stands on a **base** region R. Each cross section rests on a segment across R.
- Perpendicular to the x-axis: segment length **s(x) = top − bottom**, limits are x-values, integrate dx.
- Perpendicular to the y-axis: segment length **s(y) = right − left**, limits are y-values, integrate dy.
- Volume is in **cubic units**.

## Key relationships

| Slice | Area A | Volume |
|---|---|---|
| Square on side s | s² | ∫ [s(x)]² dx |
| Rectangle, height h(x) | s × h | ∫ s(x) h(x) dx |
| Rectangle, height = k × base | ks² | k ∫ [s(x)]² dx |
| Rectangle, constant height h | hs | h × (area of the base) |
| Any slice, same area A everywhere | A | A × length (a prism) |

## Assumptions behind the method

- Each cross section is perpendicular to the stated axis and stands at right angles to the base.
- The area A(x) is continuous on [a, b], so the Riemann sums approach the integral.
- One formula for s works across the whole interval. If the top or bottom boundary changes, split the integral, as in Topic 8.4.

## Mistakes to avoid

1. **Writing f² − g²** instead of (f − g)². Find s first, then square it.
2. **Forgetting to square**: ∫ s dx is the area of the base.
3. **Putting π** into a square or rectangle area.
4. **Mixing x and y**: a dy integral must be written entirely in y.
5. **Misreading the rectangle height**, for example using s/2 instead of s × s/2.
6. **Rounding a calculator limit** before integrating, or giving a decimal with no integral.

## Quick self-check

1. The base is the rectangle 0 ≤ x ≤ 4, 0 ≤ y ≤ 3. Slices perpendicular to the x-axis are squares. Find the volume. *(36: each square has side 3, so A = 9 and V = 9 × 4. It is a 4 × 3 × 3 box.)*
2. The base is the region under y = √x, above the x-axis, for 0 ≤ x ≤ 4. Slices perpendicular to the x-axis are squares. Find the volume. *(8: A = (√x)² = x and ∫ (0 to 4) x dx = 8.)*
3. A base region has area 5. Slices are rectangles of constant height 3. Find the volume. *(15: V = ∫ 3s dx = 3 × 5.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/8-7-volumes-cross-sections-squares-rectangles-practice/).
