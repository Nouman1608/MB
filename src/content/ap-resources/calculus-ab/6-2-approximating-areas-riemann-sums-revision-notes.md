---
resourceId: "mb-ap-calcab-6.2-revision-notes"
title: "Approximating Areas with Riemann Sums: Revision Notes (Calculus AB 6.2)"
description: "One-page recap of left, right, midpoint and trapezoidal sums, uneven partitions, and the rules for deciding whether an estimate is too big or too small."
course: "calculus-ab"
unit: 6
topics: ["6.2"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-6.2-study-guide"]
learningObjectives:
  - "Recall the four approximating sums and the over/under rules"
  - "Spot the common errors in Riemann sum questions before making them"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "mixed"
related: ["mb-ap-calcab-6.2-study-guide", "mb-ap-calcab-6.2-practice", "mb-ap-calcab-6.2-checklist"]
next: "mb-ap-calcab-6.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "Each term is width × height; the height comes from the left end, right end, midpoint, or the average of both ends."
  - "Increasing/decreasing decides left and right; concavity decides midpoint and trapezoid."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the figures and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/6-2-approximating-areas-riemann-sums-study-guide/). This topic is shared by Calculus AB and Calculus BC.

## Recap

- To estimate the area under a curve from a to b, split [a, b] into subintervals, find (width × height) on each, and add.
- **Uniform** partition: every width is Δx = (b − a)/n. **Nonuniform**: use each subinterval's own width.
- The function can be given by a formula, a graph, a table or a description.
- With a table, a midpoint sum is possible only if the table gives values at the midpoints of the subintervals you use.
- In context, the sum estimates an accumulated change, with units (rate units) × (input units).

## Key relationships

| Sum | One term on [xᵢ₋₁, xᵢ] |
|---|---|
| Left, L | f(xᵢ₋₁) × Δxᵢ |
| Right, R | f(xᵢ) × Δxᵢ |
| Midpoint, M | f(middle of the subinterval) × Δxᵢ |
| Trapezoidal, T | ½[f(xᵢ₋₁) + f(xᵢ)] × Δxᵢ |

Same partition: **T = (L + R)/2**.

| f on [a, b] | Too small | Too big |
|---|---|---|
| increasing | L | R |
| decreasing | R | L |
| concave up | M | T |
| concave down | T | M |

## Assumptions behind the over/under rules

- The property (increasing, decreasing, concave up or down) must hold on the **whole** interval.
- A table alone does not show behaviour between readings; you need it stated, or information about f′ or f″.
- If f is linear, T and M are exact.

## Mistakes to avoid

1. Using Δx = (b − a)/n when the widths are unequal.
2. Including the last value in a left sum, or the first value in a right sum.
3. Averaging two table values and calling it a "midpoint" value.
4. Using concavity to judge L or R, or monotonicity to judge M or T.
5. Forgetting the ½ in trapezoid terms.
6. Giving a value with no set-up on a calculator-active question.

## Quick self-check

Let f(x) = x² on [1, 3] with two subintervals of width 1.

1. Find L and R. *(L = 1 + 4 = 5; R = 4 + 9 = 13)*
2. Find T and M. *(T = 9; M = 1.5² + 2.5² = 8.5)*
3. The exact area is 26/3 ≈ 8.667. Which of the four sums are underestimates, and why? *(L, because f is increasing on [1, 3]; and M, because f is concave up)*

Next: [practice questions](/advanced-course-resources/calculus-ab/6-2-approximating-areas-riemann-sums-practice/).
