---
resourceId: "mb-ap-calcab-8.12-practice"
title: "Volume with Washer Method: Revolving Around Other Axes: Practice Questions (Calculus AB 8.12)"
description: "Seven original Marlbridge practice questions on washer-method volumes around horizontal and vertical lines other than the axes, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 8
topics: ["8.12"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Washer method around the x- or y-axis"
prerequisiteResources: ["mb-ap-calcab-8.12-study-guide"]
learningObjectives:
  - "Write radii as distances from a horizontal or vertical axis"
  - "Choose the outer and inner radius correctly when the axis is above, below or beside the region"
  - "Set up and evaluate washer integrals around other axes, exactly and with a calculator"
  - "Explain how and why the volume changes when the axis changes"
skills: ["1", "2"]
studyMinutes: 50
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Calculator allowed in Questions 4 and 6 only. Give exact answers elsewhere. With a calculator, store intermediate values and give final answers to three decimal places."
related: ["mb-ap-calcab-8.12-study-guide", "mb-ap-calcab-8.12-revision-notes", "mb-ap-calcab-8.12-checklist"]
next: "mb-ap-calcab-8.12-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written reasoning."
  - "Shared practice for Calculus AB and Calculus BC students."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. The machine part in Question 6 is invented. Assumptions: **no calculator** except in Questions 4 and 6; exact answers unless a calculator is allowed, then three decimal places. Notation: π ∫ (a to b) [R(x)² − r(x)²] dx means π times the definite integral from x = a to x = b; R is the outer radius and r the inner radius. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

The region enclosed by y = 4x − x² and y = x is revolved around the line y = −2. Which integral gives the volume?

- (A) π ∫ (0 to 3) [(4x − x² + 2)² − (x + 2)²] dx
- (B) π ∫ (0 to 3) [(4x − x² − 2)² − (x − 2)²] dx
- (C) π ∫ (0 to 3) [(4x − x²)² − x²] dx
- (D) π ∫ (0 to 3) [(4x − x² + 2) − (x + 2)]² dx

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** 4x − x² = x gives x² − 3x = 0, so x = 0 or x = 3. At x = 1 the parabola is at 3 and the line is at 1, so the parabola is farther from y = −2. The axis is below the region, so each distance is the y-value minus (−2): R = 4x − x² + 2 and r = x + 2. (The volume is 198π/5.)

- (B) subtracts 2. That measures distances from the line y = 2, not y = −2.
- (C) ignores the axis and measures from the x-axis.
- (D) subtracts the radii before squaring.
</details>

## Question 2 (multiple choice · core)

The region enclosed by y = 2x² and y = 2 is revolved around the line y = 3. What is the volume?

- (A) 48π/5
- (B) 32π/5
- (C) 64π/15
- (D) 18π/5

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** 2x² = 2 gives x = ±1. The axis y = 3 is above the region. At x = 0, the parabola is 3 units from the axis and the line is 1 unit away, so R = 3 − 2x² and r = 3 − 2 = 1. V = π ∫ (−1 to 1) [(3 − 2x²)² − 1] dx = π ∫ (−1 to 1) [8 − 12x² + 4x⁴] dx = 2π(8 − 4 + 4/5) = 48π/5.

- (B) revolves around the x-axis: π ∫ (−1 to 1) [2² − (2x²)²] dx.
- (C) squares the difference: π ∫ (−1 to 1) [(3 − 2x²) − 1]² dx.
- (D) uses r = 2, the height of the line, instead of its distance from the axis, 3 − 2 = 1.
</details>

## Question 3 (multiple choice · core)

The region bounded by y = x², y = 4 and the y-axis, with x ≥ 0, is revolved around the line x = −1. What is the volume?

- (A) 56π/3
- (B) 8π
- (C) 68π/3
- (D) 8π/3

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The axis is vertical, so slice horizontally: the region runs from x = 0 to x = √y, for 0 ≤ y ≤ 4. The axis x = −1 is to the left, so each distance is the x-value minus (−1). R = √y + 1 and r = 0 + 1 = 1. V = π ∫ (0 to 4) [(√y + 1)² − 1] dy = π ∫ (0 to 4) [y + 2√y] dy = π(8 + 32/3) = 56π/3.

- (B) revolves around the y-axis, where the region touches the axis, so it uses discs of radius √y.
- (C) forgets the hole: it uses a disc of radius √y + 1. The region starts at x = 0, one unit from the axis, so r = 1.
- (D) subtracts 1 instead of adding it, using √y − 1. The integral then comes out as −8π/3; dropping the sign gives this option.
</details>

## Question 4 (multiple choice · calculator · core)

The region enclosed by y = 3/(1 + x²) and y = 1 is revolved around the line y = −1. What is the volume, correct to three decimal places?

- (A) 49.697
- (B) 49.694
- (C) 13.211
- (D) 31.454

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** 3/(1 + x²) = 1 gives x² = 2, so x = ±√2. The axis is below the region, so add 1 to each y-value: R = 3/(1 + x²) + 1 and r = 1 + 1 = 2. V = π ∫ (−√2 to √2) [(3/(1 + x²) + 1)² − 4] dx ≈ 49.697.

- (B) rounds the limits to ±1.4 before integrating.
- (C) uses π[R − r]² = π[3/(1 + x²) − 1]². That is also the volume around y = 1, where the region touches the axis; it is not this solid.
- (D) revolves around the x-axis: R = 3/(1 + x²), r = 1.
</details>

## Question 5 (constructed response · core)

The triangle with vertices (0, 0), (2, 0) and (0, 2) is revolved around the line x = 3.

(a) Write the slanted side as x in terms of y.
(b) Find R(y) and r(y), explaining which side of the triangle gives each.
(c) Write and evaluate an integral for the volume.
(d) The solid is a cylinder with a frustum (a cone with its top cut off) removed. Use the cylinder volume πr²h and the frustum volume πh(R² + Rr + r²)/3 to check your answer.

<details>
<summary>Worked solution</summary>

**(a)** The slanted side joins (2, 0) and (0, 2): y = 2 − x, so x = 2 − y.

**(b)** Slice horizontally, for 0 ≤ y ≤ 2. The axis x = 3 is to the right of the triangle, so each distance is 3 minus the x-value. The left side, x = 0, is 3 units away; the slanted side is 3 − (2 − y) = 1 + y units away. The left side is farther, so **R(y) = 3** and **r(y) = 1 + y**.

**(c)** V = π ∫ (0 to 2) [9 − (1 + y)²] dy = π[18 − ((1 + y)³/3 from 0 to 2)] = π(18 − 26/3) = **28π/3 cubic units**.

**(d)** Cylinder: radius 3, height 2: 18π. Frustum: radii 3 and 1, height 2: π(2)(9 + 3 + 1)/3 = 26π/3. Difference: 18π − 26π/3 = 28π/3. The answers agree.

Suggested mark points (4): 1 for x = 2 − y; 1 for R = 3 and r = 1 + y with the reason (distance from x = 3); 1 for the integral with limits 0 and 2; 1 for 28π/3 with the geometric check. A common error is r = 2 − y (forgetting to measure from x = 3), which gives 46π/3.
</details>

## Question 6 (constructed response · calculator · core)

A metal part (invented for this question) is modelled by revolving a region around the line y = 4. The region is bounded by y = e^(x/2), y = 3 and the y-axis. Lengths are in centimetres.

(a) Find the exact x-coordinate where y = e^(x/2) meets y = 3.
(b) Find R(x) and r(x), explaining which curve gives the outer radius.
(c) Write an integral for the volume of the part and find it.
(d) Write, but do not evaluate, an integral for the volume if the same region were revolved around y = −1 instead.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** e^(x/2) = 3 gives x/2 = ln 3, so **x = 2 ln 3** (about 2.197).

**(b)** The axis y = 4 is above the region, so each distance is 4 minus the y-value. At x = 0, the curve is at 1, which is 3 units from the axis; the line y = 3 is 1 unit away. The lower curve is farther, so **R(x) = 4 − e^(x/2)** and **r(x) = 4 − 3 = 1**.

**(c)** V = π ∫ (0 to 2 ln 3) [(4 − e^(x/2))² − 1²] dx ≈ **28.144 cm³**. (Exact value, for checking: 6π(5 ln 3 − 4).)

**(d)** Now the axis is below the region, so add 1: R = 3 + 1 = 4 and r = e^(x/2) + 1.

V = π ∫ (0 to 2 ln 3) [4² − (e^(x/2) + 1)²] dx. (It evaluates to about 53.276.)

| Point | What earns it |
|---|---|
| 1 | x = 2 ln 3 |
| 1 | R = 4 − e^(x/2) and r = 1, with the reason that the curve is farther from y = 4 |
| 1 | Correct integral and 28.144 (cm³) |
| 1 | Correct integral for y = −1, with R = 4 and r = e^(x/2) + 1 |

Note on (d): the outer and inner boundaries swap. Around y = 4 the curve gives R; around y = −1 the line y = 3 gives R.
</details>

## Question 7 (constructed response · stretch)

S is the region enclosed by y = 2√x and y = x²/4.

(a) Find the volume when S is revolved around the line y = 5. Show the integral and evaluate it without a calculator.
(b) Write an integral in y for the volume when S is revolved around the line x = 5.
(c) Without evaluating (b), explain why the two volumes are equal.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

The curves meet where 2√x = x²/4, which gives x^(3/2) = 8, so x = 4 (and x = 0). The points are (0, 0) and (4, 4).

**(a)** At x = 1, 2√1 = 2 and 1/4 = 0.25, so y = 2√x is on top. The axis y = 5 is above the region, so the lower curve is farther away: R = 5 − x²/4 and r = 5 − 2√x.

V = π ∫ (0 to 4) [(5 − x²/4)² − (5 − 2√x)²] dx.

The integrand expands to x⁴/16 − 5x²/2 + 20√x − 4x. Integrating from 0 to 4:

64/5 − 160/3 + 320/3 − 32 = (192 − 800 + 1600 − 480)/15 = 512/15.

So **V = 512π/15 cubic units** (about 107.233).

**(b)** As x in terms of y: y = 2√x gives x = y²/4, and y = x²/4 gives x = 2√y (for x ≥ 0). At y = 1, y²/4 = 0.25 and 2√1 = 2. The axis x = 5 is to the right, so the curve nearer x = 0 is farther away: R = 5 − y²/4 and r = 5 − 2√y.

V = π ∫ (0 to 4) [(5 − y²/4)² − (5 − 2√y)²] dy.

**(c)** The integral in (b) is the integral in (a) with x renamed y, over the same limits. Geometrically, S is symmetric about the line y = x (swapping x and y turns each curve into the other), and that reflection swaps the axis y = 5 with the axis x = 5. So both solids have the same volume, 512π/15.

| Point | What earns it |
|---|---|
| 1 | Intersections and R = 5 − x²/4, r = 5 − 2√x with a reason |
| 1 | 512π/15 from correct integration |
| 1 | (b) curves rewritten in y with correct R and r, limits 0 to 4 |
| 1 | (c) symmetry about y = x, or identical integrands after renaming the variable |
</details>

## How did you do?

- **Q1, Q2 or Q6(b) wrong:** reread the radius table in "The same washers, a different axis" and Figure 1 in the [study guide](/advanced-course-resources/calculus-ab/8-12-volume-washer-method-revolving-around-study-guide/), then Worked example 1.
- **Q3, Q5 or Q7(b) wrong:** redo Worked example 2: vertical axis, horizontal slices, everything in y.
- **Q4 or Q6(d) wrong:** see "The same region, axis below" and Worked example 3.
- **Q7(c) wrong:** sketch S and the line y = x, then reflect the axis.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/8-12-volume-washer-method-revolving-around-checklist/).
