---
resourceId: "mb-ap-calcab-6.6-revision-notes"
title: "Applying Properties of Definite Integrals: Revision Notes (Calculus AB 6.6)"
description: "One-page recap of evaluating definite integrals with geometry and with the properties for constants, sums, reversed limits, adjacent intervals and discontinuities."
course: "calculus-ab"
unit: 6
topics: ["6.6"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-6.6-study-guide"]
learningObjectives:
  - "Recall the properties of definite integrals and the area formulas used with them"
  - "Spot the common errors before making them"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-6.6-study-guide", "mb-ap-calcab-6.6-practice", "mb-ap-calcab-6.6-checklist"]
next: "mb-ap-calcab-6.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Integral = area above the axis − area below the axis."
  - "Constants come out, sums split, reversed limits change the sign, adjacent intervals add."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the graph and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/6-6-applying-properties-definite-integrals-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **∫ (a to b) f(x) dx** is the definite integral of f from a to b.

## Recap

- If the region is made of rectangles, triangles, trapezoids or parts of circles, the integral is the sum of their areas, with **minus** for parts below the axis.
- y = √(r² − x²) is a semicircle of radius r above the axis; its area is (1/2)πr².
- The properties below let you combine integral values you are given, without knowing f.
- **Holes and jumps are allowed.** Changing f at one point does not change the integral. At a jump, split the interval and use the right formula on each piece.
- **Vertical asymptotes are not allowed** here. Those are improper integrals, a Calculus BC topic.

## Key relationships

| Property | Rule |
|---|---|
| Zero width | ∫ (a to a) f = 0 |
| Reversed limits | ∫ (b to a) f = −∫ (a to b) f |
| Constant multiple | ∫ (a to b) k·f = k ∫ (a to b) f |
| Sum and difference | ∫ (a to b) (f ± g) = ∫ (a to b) f ± ∫ (a to b) g |
| Adjacent intervals | ∫ (a to b) f + ∫ (b to c) f = ∫ (a to c) f (any order of a, b, c) |
| Constant integrand | ∫ (a to b) k dx = k(b − a) |

**Not rules:** ∫ fg ≠ (∫ f)(∫ g); ∫ |f| ≠ |∫ f| unless f keeps one sign; ∫ (f + k) ≠ ∫ f + k.

## Assumptions behind the method

- f and g are integrable on an interval containing all the limits used (continuous, or bounded with finitely many holes or jumps).
- Signed area: a region below the axis gives a negative contribution.

## Mistakes to avoid

1. **Treating an integral as total area** and ignoring negative regions.
2. **Adding k instead of k(b − a)** when a constant is added to the integrand.
3. **Forgetting the minus sign** when the limits are reversed.
4. **Using the formula from the wrong piece** at a jump.
5. **Using r² as the radius** in √(r² − x²).
6. **Splitting a product** of functions.

## Quick self-check

1. ∫ (1 to 9) f = 4 and ∫ (5 to 9) f = 6. Find ∫ (1 to 5) f. *(−2)*
2. Find ∫ (−6 to 6) √(36 − x²) dx. *(18π)*
3. ∫ (2 to 5) f = 7. Find ∫ (5 to 2) [f(x) + 1] dx. *(−(7 + 3) = −10)*

Next: [practice questions](/advanced-course-resources/calculus-ab/6-6-applying-properties-definite-integrals-practice/).
