---
resourceId: "mb-ap-calcab-8.8-practice"
title: "Volumes with Cross Sections: Triangles and Semicircles: Practice Questions (Calculus AB 8.8)"
description: "Seven original Marlbridge practice questions on volumes with triangular, semicircular and other cross sections, including a table-based estimate, with full solutions and rubrics."
course: "calculus-ab"
unit: 8
topics: ["8.8"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Volumes with square and rectangular cross sections"
  - "Trapezoidal sums from a table (Topic 6.2)"
prerequisiteResources: ["mb-ap-calcab-8.8-study-guide"]
learningObjectives:
  - "Write volume integrals for triangular and semicircular cross sections, across x or across y"
  - "Choose the correct area formula in terms of the side s for each shape"
  - "Estimate a volume from a table of measurements and compare it with a model"
  - "Solve for an unknown constant from a given volume"
skills: ["1", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Questions 1, 2, 3, 5 and 7: no calculator. Questions 4 and 6: graphing calculator allowed; use radians, store unrounded values and give answers to three decimal places."
related: ["mb-ap-calcab-8.8-study-guide", "mb-ap-calcab-8.8-revision-notes", "mb-ap-calcab-8.8-checklist"]
next: "mb-ap-calcab-8.8-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written reasoning."
  - "Questions 4 and 6 are calculator-active; the rest are not."
  - "Shared practice for Calculus AB and Calculus BC students."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. The context and the measurements in Question 6 are invented. Assumptions: **no calculator** except in Questions 4 and 6; angles in radians; exact answers unless a calculator is allowed, then three decimal places. In every question the cross sections stand at right angles to the base, and s means the side of a cross section that lies in the base. Notation: ∫ (a to b) A(x) dx means the definite integral of A(x) from x = a to x = b. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

The base of a solid is the triangle bounded by y = x, the x-axis and the line x = 4. Cross sections perpendicular to the x-axis are semicircles with their diameters in the base. What is the volume?

- (A) 8π/3
- (B) 16π/3
- (C) 32π/3
- (D) 64π/3

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** s(x) = x, the diameter. The radius is x/2, so A(x) = (1/2)π(x/2)² = (π/8)x². V = (π/8) ∫ (0 to 4) x² dx = (π/8)(64/3) = 8π/3.

- (B) uses a full circle, (π/4)x². The slices are half circles.
- (C) uses x as the radius of the semicircle, (π/2)x². The side in the base is the diameter.
- (D) is π ∫ (0 to 4) x² dx, the disc-method volume for revolving the base about the x-axis. That is a different solid.
</details>

## Question 2 (multiple choice · core)

The base of a solid is the region bounded by y = x³, the y-axis and the line y = 8. Cross sections perpendicular to the **y-axis** are equilateral triangles. What is the volume?

- (A) 3√3
- (B) 24√3/5
- (C) 48√3/5
- (D) 96/5

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** At height y, a horizontal segment runs from the y-axis, x = 0, to the curve, x = y^(1/3). So s(y) = y^(1/3) and s² = y^(2/3). V = (√3/4) ∫ (0 to 8) y^(2/3) dy = (√3/4) × (3/5) × 8^(5/3) = (√3/4)(96/5) = 24√3/5.

- (A) forgets to square the side: (√3/4) ∫ (0 to 8) y^(1/3) dy = (√3/4)(12) = 3√3.
- (C) uses √3/2, the height factor of an equilateral triangle, instead of the area factor √3/4.
- (D) is ∫ (0 to 8) y^(2/3) dy, the volume with square slices.
</details>

## Question 3 (multiple choice · core)

The base of a solid is the region under y = √(sin x) and above the x-axis, for 0 ≤ x ≤ π. Cross sections perpendicular to the x-axis are isosceles right triangles with the **hypotenuse** in the base. What is the volume?

- (A) 1/2
- (B) √3/2
- (C) 1
- (D) 2

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** s(x) = √(sin x), so s² = sin x. With the hypotenuse in the base, A = s²/4 = (sin x)/4. V = (1/4) ∫ (0 to π) sin x dx = (1/4)[−cos x] from 0 to π = (1/4)(2) = 1/2.

- (B) uses the equilateral formula: (√3/4)(2) = √3/2.
- (C) uses s²/2, the formula for a leg in the base.
- (D) uses squares, ∫ (0 to π) sin x dx = 2.
</details>

## Question 4 (multiple choice · calculator · core)

The base of a solid is the region enclosed by y = 3/(1 + x²) and y = x² − 1. Cross sections perpendicular to the x-axis are semicircles with their diameters in the base. What is the volume?

- (A) 4.524
- (B) 7.900
- (C) 15.800
- (D) 31.600

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The curves meet at x = −√2 and x = √2 (the calculator confirms ±1.414). At x = 0, 3/(1 + 0) = 3 and 0 − 1 = −1, so 3/(1 + x²) is on top. s(x) = 3/(1 + x²) − (x² − 1). V = (π/8) ∫ (−√2 to √2) [3/(1 + x²) − x² + 1]² dx ≈ 7.900.

- (A) squares the boundaries separately: (π/8) ∫ [(3/(1 + x²))² − (x² − 1)²] dx ≈ 4.524.
- (C) uses full circles, (π/4)s², which doubles the answer.
- (D) uses s as the radius, (π/2)s², which is four times the answer.
</details>

## Question 5 (constructed response · no calculator · core)

The base of a solid is the region R enclosed by y = 1 − x² and y = x² − 1.

(a) Find the length s(x) of a vertical segment across R, and the limits of integration.
(b) Cross sections perpendicular to the x-axis are semicircles with diameters in R. Find the volume.
(c) Cross sections perpendicular to the x-axis are instead equilateral triangles. Find the volume.
(d) Show that the ratio of the volume in (c) to the volume in (b) is 2√3/π, and explain why this ratio would be the same for any base region.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** 1 − x² = x² − 1 gives x² = 1, so the limits are **x = −1 and x = 1**. At x = 0 the top curve is at 1 and the bottom at −1. s(x) = (1 − x²) − (x² − 1) = **2 − 2x²**.

**(b)** s² = 4(1 − x²)² = 4 − 8x² + 4x⁴. ∫ (−1 to 1) (4 − 8x² + 4x⁴) dx = 8 − 16/3 + 8/5 = 64/15. V = (π/8)(64/15) = **8π/15** (about 1.676).

**(c)** V = (√3/4)(64/15) = **16√3/15** (about 1.848).

**(d)** (16√3/15) ÷ (8π/15) = 2√3/π ≈ 1.103. For any base, the two volumes are (√3/4) ∫ s² dx and (π/8) ∫ s² dx. The same integral ∫ s² dx appears in both and cancels, leaving (√3/4) ÷ (π/8) = 2√3/π.

| Point | What earns it |
|---|---|
| 1 | (a) Limits −1 and 1 with s(x) = 2 − 2x² |
| 1 | (b) Semicircle area (π/8)s² (or radius 1 − x²) in a correct integral |
| 1 | (b) Value 8π/15 |
| 1 | (c) Value 16√3/15 |
| 1 | (d) Ratio 2√3/π, with the reason that ∫ s² dx is common to both and cancels |

Equivalent setup for (b): radius r = 1 − x², A = (1/2)π(1 − x²)².
</details>

## Question 6 (constructed response · calculator · core)

A baker's mould for a log-shaped cake is 30 cm long. Cross sections perpendicular to its length are semicircles. The diameter of the semicircle, d(x) centimetres, was measured at five places, x centimetres from one end:

| x (cm) | 0 | 6 | 15 | 24 | 30 |
|---|---|---|---|---|---|
| d(x) (cm) | 8 | 10 | 11 | 10 | 7 |

(a) Find the area of the cross section at x = 15. Give units.
(b) Use a trapezoidal sum with the four subintervals in the table to estimate the volume of the mould.
(c) The baker models the diameter by d(x) = 8 + 0.4x − 0.014x² for 0 ≤ x ≤ 30. Write an integral for the volume using the model, and evaluate it.
(d) According to the model, where is the cross-sectional area greatest, and what is that area?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** A(15) = (π/8)(11)² = 121π/8 ≈ **47.517 cm²**.

**(b)** A(x) = (π/8)d(x)². The subintervals have widths 6, 9, 9 and 6.

Volume ≈ (π/8)[6(64 + 100)/2 + 9(100 + 121)/2 + 9(121 + 100)/2 + 6(100 + 49)/2]
= (π/8)(492 + 994.5 + 994.5 + 447) = (π/8)(2928) = 366π ≈ **1149.823 cm³**.

**(c)** V = **∫ (0 to 30) (π/8)(8 + 0.4x − 0.014x²)² dx ≈ 1142.189 cm³**. This is within 1% of the estimate in (b).

**(d)** A = (π/8)d², and d > 0 on [0, 30], so A is greatest where d is greatest. d′(x) = 0.4 − 0.028x = 0 at x ≈ **14.286 cm**; d′ changes from positive to negative there, so it is a maximum. d(14.286) ≈ 10.857 cm, so the greatest area is (π/8)(10.857)² ≈ **46.290 cm²**.

| Point | What earns it |
|---|---|
| 1 | (a) 47.517 cm², from (π/8)(11)² |
| 1 | (b) Trapezoidal sum with the unequal widths 6, 9, 9, 6, using areas (not diameters) |
| 1 | (b) Value 1149.823 cm³ |
| 1 | (c) Integral of (π/8)d(x)² from 0 to 30, with value 1142.189 cm³ |
| 1 | (d) x ≈ 14.286 with a reason it is a maximum, and area 46.290 cm² |

A trapezoidal sum of the diameters, squared afterwards, does not earn the method point in (b).
</details>

## Question 7 (constructed response · no calculator · stretch)

Let R be the region bounded by y = √x, the x-axis and the line x = 9.

(a) A solid with base R has cross sections perpendicular to the x-axis that are right triangles. One leg lies in R, and the other leg has length kx, where k > 0 is a constant. Show that the volume is 243k/5.
(b) Find k if the volume is 81.
(c) A different solid with base R has cross sections perpendicular to the **y-axis** that are isosceles right triangles with the hypotenuse in R. Find its volume.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The leg in R is s(x) = √x. The other leg is kx. A(x) = (1/2)(√x)(kx) = (k/2)x^(3/2). V = (k/2) ∫ (0 to 9) x^(3/2) dx = (k/2)[(2/5)x^(5/2)] from 0 to 9 = (k/2)(2/5)(243) = **243k/5**.

**(b)** 243k/5 = 81 gives k = 405/243 = **5/3**.

**(c)** In y, the region runs from y = 0 to y = √9 = 3. A horizontal segment at height y goes from the curve, x = y², to the line x = 9, so s(y) = 9 − y². A(y) = s²/4 = (9 − y²)²/4.
V = (1/4) ∫ (0 to 3) (81 − 18y² + y⁴) dy = (1/4)[81y − 6y³ + y⁵/5] from 0 to 3 = (1/4)(243 − 162 + 243/5) = (1/4)(648/5) = **162/5** (32.4).

| Point | What earns it |
|---|---|
| 1 | (a) A(x) = (1/2)(√x)(kx) |
| 1 | (a) Correct antiderivative and limits giving 243k/5 |
| 1 | (b) k = 5/3 |
| 1 | (c) s(y) = 9 − y² with y-limits 0 and 3 and dy |
| 1 | (c) A = s²/4 and the value 162/5 |
</details>

## How did you do?

- **Q1, Q3 or Q4 wrong:** reread "The area formulas, derived" and Figure 1 in the [study guide](/advanced-course-resources/calculus-ab/8-8-volumes-cross-sections-triangles-semicircles-study-guide/). Check radius s/2 and leg or hypotenuse.
- **Q2 or Q7(c) wrong:** redo Worked example 2. Slices perpendicular to the y-axis need right − left in y.
- **Q5 wrong:** practise finding ∫ s² dx once and multiplying by each shape's constant.
- **Q6 wrong:** see "Other shapes and given areas", and review trapezoidal sums with unequal widths.
- **Q7(a)–(b) wrong:** write A = (1/2) × base × height with both lengths in terms of x.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/8-8-volumes-cross-sections-triangles-semicircles-checklist/).
