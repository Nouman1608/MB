---
resourceId: "mb-ap-calcab-8.7-practice"
title: "Volumes with Cross Sections: Squares and Rectangles: Practice Questions (Calculus AB 8.7)"
description: "Seven original Marlbridge practice questions on volumes with square and rectangular cross sections, across x and across y, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 8
topics: ["8.7"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Area between curves with vertical and horizontal strips"
  - "Evaluating definite integrals with antiderivatives and with a calculator"
prerequisiteResources: ["mb-ap-calcab-8.7-study-guide"]
learningObjectives:
  - "Write volume integrals for square and rectangular cross sections with correct limits and dx or dy"
  - "Find the side length of a cross section from the boundaries of the base"
  - "Evaluate volumes exactly and to three decimal places"
  - "Interpret a cross-sectional area and a volume in context, with units"
skills: ["1", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Questions 1, 2, 3, 5 and 7: no calculator. Questions 4 and 6: graphing calculator allowed; use radians, store unrounded values and give answers to three decimal places."
related: ["mb-ap-calcab-8.7-study-guide", "mb-ap-calcab-8.7-revision-notes", "mb-ap-calcab-8.7-checklist"]
next: "mb-ap-calcab-8.7-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. The context in Question 6 is invented. Assumptions: **no calculator** except in Questions 4 and 6; angles in radians; exact answers unless a calculator is allowed, then three decimal places. In every question the cross sections stand at right angles to the base. Notation: ∫ (a to b) A(x) dx means the definite integral of A(x) from x = a to x = b. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

The base of a solid is the triangle bounded by y = x, the x-axis and the line x = 3. Cross sections perpendicular to the x-axis are squares. What is the volume of the solid?

- (A) 9/2
- (B) 9
- (C) 81/4
- (D) 9π

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** At position x the segment across the base runs from y = 0 up to y = x, so s(x) = x and A(x) = x². V = ∫ (0 to 3) x² dx = [x³/3] from 0 to 3 = 9.

- (A) is ∫ (0 to 3) x dx, the area of the base. The side was never squared.
- (C) uses s³ instead of s², ∫ (0 to 3) x³ dx = 81/4. The area of a square is s², and the integral supplies the third dimension.
- (D) puts π into the area, as if the slices were circles of radius x. That is the disc method, not square slices.
</details>

## Question 2 (multiple choice · core)

The base of a solid is the region enclosed by y = √x and y = x². Cross sections perpendicular to the x-axis are squares. What is the volume?

- (A) 1/9
- (B) 9/70
- (C) 3/10
- (D) 1/3

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The curves meet where √x = x², at x = 0 and x = 1. At x = 1/4, √x = 1/2 and x² = 1/16, so √x is on top. s(x) = √x − x², and A(x) = (√x − x²)² = x − 2x^(5/2) + x⁴. V = ∫ (0 to 1) (x − 2x^(5/2) + x⁴) dx = 1/2 − 4/7 + 1/5 = (35 − 40 + 14)/70 = 9/70.

- (A) squares the area of the base, (1/3)² = 1/9. The square must be taken slice by slice, before integrating.
- (C) squares each curve separately: ∫ (0 to 1) [(√x)² − (x²)²] dx = ∫ (0 to 1) (x − x⁴) dx = 3/10. (f − g)² is not f² − g².
- (D) is the area of the base, ∫ (0 to 1) (√x − x²) dx.
</details>

## Question 3 (multiple choice · core)

The base of a solid is the region bounded by y = ln x, the x-axis and the line x = e. Cross sections perpendicular to the **y-axis** are squares. Which integral gives the volume?

- (A) ∫ (1 to e) (ln x)² dx
- (B) ∫ (0 to 1) (e − eʸ)² dy
- (C) ∫ (0 to 1) (e² − e^(2y)) dy
- (D) ∫ (0 to e) (e − eʸ)² dy

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The base runs from y = 0 up to y = ln e = 1. A horizontal segment at height y starts on the curve, where x = eʸ, and ends on the line x = e. So s(y) = e − eʸ, A(y) = (e − eʸ)², and V = ∫ (0 to 1) (e − eʸ)² dy. (Its value is 2e − e²/2 − 1/2 ≈ 1.242.)

- (A) uses slices perpendicular to the x-axis. That describes a different solid, with volume e − 2 ≈ 0.718.
- (C) squares the right and left boundaries separately. The side must be found first and then squared.
- (D) uses x-values, 0 to e, as limits for a dy integral. With dy the limits are y-values.
</details>

## Question 4 (multiple choice · calculator · core)

Let R be the region in the first quadrant enclosed by y = 2 sin x and y = x/2. R is the base of a solid whose cross sections perpendicular to the x-axis are rectangles. Each rectangle has its base in R and height equal to x. What is the volume of the solid?

- (A) 1.300
- (B) 2.040
- (C) 2.058
- (D) 2.600

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The curves meet at x = 0 and, from the calculator, at x = B ≈ 2.475. At x = 1, 2 sin 1 ≈ 1.683 and 1/2 = 0.5, so 2 sin x is on top. The side is s(x) = 2 sin x − x/2, and the rectangle has area s(x) × x. V = ∫ (0 to B) x(2 sin x − x/2) dx ≈ 2.600.

- (A) uses the triangle formula (1/2) × base × height. These slices are rectangles, so there is no 1/2.
- (B) is ∫ (0 to B) (2 sin x − x/2) dx, the area of the base. The height x was left out.
- (C) treats the slices as squares, ∫ (0 to B) (2 sin x − x/2)² dx. The question gives the height as x, not as the side.
</details>

## Question 5 (constructed response · no calculator · core)

The base of a solid S is the region R enclosed by y = x² and y = 6 − x.

(a) Find the x-coordinates of the points where the boundaries meet, and the length s(x) of a vertical segment across R.
(b) Cross sections of S perpendicular to the x-axis are squares. Find the volume of S.
(c) A second solid T has the same base R, but its cross sections perpendicular to the x-axis are rectangles of constant height 2. Find the volume of T, and explain why it equals twice the area of R.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** x² = 6 − x gives x² + x − 6 = 0, so (x + 3)(x − 2) = 0 and **x = −3 or x = 2**. At x = 0 the line gives 6 and the parabola gives 0, so the line is on top. **s(x) = 6 − x − x²**.

**(b)** V = ∫ (−3 to 2) (6 − x − x²)² dx. Expand: (6 − x − x²)² = x⁴ + 2x³ − 11x² − 12x + 36. An antiderivative is x⁵/5 + x⁴/2 − 11x³/3 − 6x² + 36x. At x = 2 it is 496/15; at x = −3 it is −711/10. The difference is 496/15 + 711/10 = (992 + 2133)/30 = 3125/30 = **625/6 cubic units**.

**(c)** Each rectangle has area 2s(x), so V = ∫ (−3 to 2) 2(6 − x − x²) dx = 2 ∫ (−3 to 2) (6 − x − x²) dx. The integral is the area of R, which is 125/6. So V = **125/3 cubic units**. The constant 2 comes out of the integral, and what is left, ∫ s(x) dx, is exactly the area of R.

| Point | What earns it |
|---|---|
| 1 | (a) x = −3 and x = 2, with s(x) = 6 − x − x² and a reason the line is on top |
| 1 | (b) Integral ∫ (−3 to 2) (6 − x − x²)² dx with limits and dx |
| 1 | (b) Value 625/6 |
| 1 | (c) Volume 125/3 |
| 1 | (c) Explains that the constant height factors out, leaving ∫ s dx = area of R |

A response that writes ∫ [(6 − x)² − (x²)²] dx in (b) earns no point for the integral.
</details>

## Question 6 (constructed response · calculator · core)

A garden designer builds a raised flower bed along a straight path. At a distance x metres from one end of the bed, for 0 ≤ x ≤ 6, the bed is w(x) = 1.2 + 0.4 sin(x/2) metres wide, and the soil in it is d(x) = 0.3 + 0.04x metres deep. Cross sections of the soil perpendicular to the path are rectangles of width w(x) and height d(x).

(a) Find the area of the cross section at x = 3. Give units and say what the value means.
(b) Write an integral expression for the volume of soil, and find its value.
(c) Find the average area of a cross section of the soil over 0 ≤ x ≤ 6.
(d) Soil is sold in bags of 0.05 m³. How many bags must the designer buy to fill the bed?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** w(3) = 1.2 + 0.4 sin 1.5 ≈ 1.599 m and d(3) = 0.42 m. A(3) = w(3) d(3) ≈ **0.672 m²**. A vertical cut across the bed, 3 metres from the end, shows about 0.672 square metres of soil.

**(b)** V = **∫ (0 to 6) (1.2 + 0.4 sin(x/2))(0.3 + 0.04x) dx ≈ 3.701 m³**.

**(c)** Average area = V/6 ≈ 3.701/6 ≈ **0.617 m²** (Topic 8.1: the average value of A over [0, 6]).

**(d)** V/0.05 ≈ 74.01. Seventy-four bags hold only 3.700 m³, which is slightly too little, so the designer needs **75 bags**. Use the unrounded volume here: rounding first can hide how close the number is to a whole number.

| Point | What earns it |
|---|---|
| 1 | (a) 0.672 with units m² and a meaning tied to the bed at x = 3 |
| 1 | (b) Integral of w(x) d(x) with limits 0 and 6 and dx |
| 1 | (b) Value 3.701 m³ |
| 1 | (c) 0.617 m², from the volume divided by 6 |
| 1 | (d) 75 bags, with the reason for rounding up |

In (b), a decimal with no integral expression does not earn the expression point.
</details>

## Question 7 (constructed response · no calculator · stretch)

For a constant b > 1, let R be the region bounded by y = 1/x, the x-axis, x = 1 and x = b.

(a) A solid with base R has square cross sections perpendicular to the x-axis. Show that its volume is 1 − 1/b.
(b) Find the value of b for which this volume is 4/5.
(c) A second solid with base R has rectangular cross sections perpendicular to the x-axis, each with height x. Find its volume in terms of b, and its value for the b found in (b).
(d) Explain why the volume in (a) stays below 1 for every b, while the volume in (c) can be as large as you like.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The segment at x runs from y = 0 to y = 1/x, so s(x) = 1/x and A(x) = 1/x². V = ∫ (1 to b) x⁻² dx = [−1/x] from 1 to b = −1/b + 1 = **1 − 1/b**.

**(b)** 1 − 1/b = 4/5 gives 1/b = 1/5, so **b = 5**.

**(c)** A(x) = (1/x) × x = 1 for every x. V = ∫ (1 to b) 1 dx = **b − 1**. For b = 5, V = **4 cubic units**.

**(d)** In (a), 1/b > 0, so 1 − 1/b < 1 for every b. The square slices shrink fast (area 1/x²), so far-out slices add very little. In (c) every slice has area 1, so the solid is a prism of length b − 1, and its volume grows without limit as b grows.

| Point | What earns it |
|---|---|
| 1 | (a) A(x) = 1/x² from s(x) = 1/x |
| 1 | (a) Correct antiderivative and limits giving 1 − 1/b |
| 1 | (b) b = 5 |
| 1 | (c) A(x) = 1, so V = b − 1, and V = 4 when b = 5 |
| 1 | (d) Uses 1/b > 0 for (a) and constant slice area for (c) |
</details>

## How did you do?

- **Q1 or Q2 wrong:** revisit "The base and the side length" and Worked example 1 in the [study guide](/advanced-course-resources/calculus-ab/8-7-volumes-cross-sections-squares-rectangles-study-guide/). Find s, then square it.
- **Q3 wrong:** redo Worked example 2. Slices perpendicular to the y-axis need right − left in y, y-limits and dy.
- **Q4 or Q6 wrong:** reread the rectangle rows of the area table and Worked example 3. Write A = base × height before integrating.
- **Q5(c) or Q7 wrong:** practise taking constants out of the integral and comparing slice areas.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/8-7-volumes-cross-sections-squares-rectangles-checklist/).
