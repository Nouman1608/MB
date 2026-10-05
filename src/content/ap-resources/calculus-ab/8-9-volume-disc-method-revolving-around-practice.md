---
resourceId: "mb-ap-calcab-8.9-practice"
title: "Volume with the Disc Method: Revolving Around the x- or y-Axis: Practice Questions (Calculus AB 8.9)"
description: "Seven original Marlbridge practice questions on disc-method volumes about the x- and y-axes, including a table estimate and calculator integrals, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 8
topics: ["8.9"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Evaluating definite integrals with antiderivatives and with a calculator"
  - "Trapezoidal sums from a table (Topic 6.2)"
prerequisiteResources: ["mb-ap-calcab-8.9-study-guide"]
learningObjectives:
  - "Set up disc-method integrals about the x-axis and the y-axis with the correct radius, variable and limits"
  - "Evaluate disc-method volumes exactly and with a calculator"
  - "Estimate a volume of revolution from a table of radii"
  - "Explain when the disc method applies and when it does not"
skills: ["1", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Questions 1, 2, 3, 5 and 7: no calculator. Questions 4 and 6: graphing calculator allowed; use radians, store unrounded values and give answers to three decimal places."
related: ["mb-ap-calcab-8.9-study-guide", "mb-ap-calcab-8.9-revision-notes", "mb-ap-calcab-8.9-checklist"]
next: "mb-ap-calcab-8.9-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. The context and data in Question 6 are invented. Assumptions: **no calculator** except in Questions 4 and 6; angles in radians; exact answers unless a calculator is allowed, then three decimal places. Notation: π ∫ (a to b) [f(x)]² dx means π times the definite integral of [f(x)]² from x = a to x = b. Every solid is formed by one full turn about the stated axis. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

The region bounded by y = eˣ, the x-axis, x = 0 and x = 1 is spun about the x-axis. Which expression gives the volume of the solid?

- (A) π ∫ (0 to 1) e^(x²) dx
- (B) 2π ∫ (0 to 1) e^(2x) dx
- (C) π [∫ (0 to 1) eˣ dx]²
- (D) π ∫ (0 to 1) e^(2x) dx

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The radius at x is eˣ, so each disc has area π(eˣ)² = πe^(2x). Integrate along the x-axis from 0 to 1. (Its value is π(e² − 1)/2 ≈ 10.036, but you were only asked for the expression.)

- (A) squares the exponent instead of the function: (eˣ)² = e^(2x), not e^(x²).
- (B) uses 2π, which belongs to the circumference 2πr, not the disc area πr².
- (C) squares the integral instead of the radius. Each slice must be squared before you add the slices.
</details>

## Question 2 (multiple choice · core)

The region bounded by y = 1/x, the x-axis, x = 1 and x = 4 is spun about the x-axis. What is the volume of the solid?

- (A) 3/4
- (B) 3π/4
- (C) 15π/16
- (D) π ln 4

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** V = π ∫ (1 to 4) (1/x)² dx = π ∫ (1 to 4) x⁻² dx = π[−1/x] from 1 to 4 = π(−1/4 + 1) = 3π/4.

- (A) leaves out π, so it is the integral of the squared radius, not a volume.
- (C) puts the limits into the integrand 1/x² instead of into the antiderivative: π(1 − 1/16) = 15π/16.
- (D) forgets to square the radius: π ∫ (1 to 4) (1/x) dx = π ln 4.
</details>

## Question 3 (multiple choice · core)

The region bounded by y = √x, the y-axis and the line y = 2 is spun about the y-axis. What is the volume of the solid?

- (A) 8π/3
- (B) 8π
- (C) 32π/5
- (D) 64π/5

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The region lies between the y-axis and the curve, so slice horizontally. At height y the curve is at x = y² (from y = √x), so the radius is y². The region runs from y = 0 to y = 2. V = π ∫ (0 to 2) (y²)² dy = π ∫ (0 to 2) y⁴ dy = π(32/5) = 32π/5.

- (A) forgets to square the radius: π ∫ (0 to 2) y² dy = 8π/3.
- (B) is π ∫ (0 to 4) (√x)² dx. That spins the region under the curve (a different region) about the x-axis (a different axis).
- (D) uses 2π instead of π.
</details>

## Question 4 (multiple choice · calculator · core)

The region bounded by y = x e^(−x), the x-axis and the line x = 3 is spun about the x-axis. To three decimal places, what is the volume of the solid?

- (A) 0.235
- (B) 0.737
- (C) 1.473
- (D) 2.516

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The curve meets the x-axis at x = 0 and is positive on (0, 3], so the region touches the axis from x = 0 to x = 3. V = π ∫ (0 to 3) (x e^(−x))² dx ≈ 0.737.

- (A) leaves out π: ∫ (0 to 3) x² e^(−2x) dx ≈ 0.235.
- (C) uses 2π instead of π.
- (D) forgets to square the radius: π ∫ (0 to 3) x e^(−x) dx ≈ 2.516.
</details>

## Question 5 (constructed response · core)

Let R be the region in the first quadrant bounded by y = 4 − x², the x-axis and the y-axis.

(a) Find the volume of the solid formed when R is spun about the x-axis.
(b) Find the volume of the solid formed when R is spun about the y-axis.
(c) The answers to (a) and (b) are different. Explain why, by describing the radius of a typical disc in each case.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** R runs from x = 0 to x = 2 (where 4 − x² = 0) and touches the x-axis all the way. Radius 4 − x².

V = π ∫ (0 to 2) (4 − x²)² dx = π ∫ (0 to 2) (16 − 8x² + x⁴) dx = π[16x − 8x³/3 + x⁵/5] from 0 to 2 = π(32 − 64/3 + 32/5) = **256π/15** (about 53.617).

**(b)** R also touches the y-axis all the way, from y = 0 to y = 4. Solve y = 4 − x² for x (x ≥ 0): x = √(4 − y). Radius √(4 − y).

V = π ∫ (0 to 4) (√(4 − y))² dy = π ∫ (0 to 4) (4 − y) dy = π[4y − y²/2] from 0 to 4 = π(16 − 8) = **8π** (about 25.133).

**(c)** In (a) each disc is vertical and its radius is the height of R above the x-axis, up to 4. In (b) each disc is horizontal and its radius is the width of R from the y-axis, at most 2. The two solids have different shapes, so their volumes differ. Spinning the same region about different axes does not give the same solid.

| Point | What earns it |
|---|---|
| 1 | Correct integral for (a): π ∫ (0 to 2) (4 − x²)² dx, with π, the square and limits |
| 1 | Value 256π/15 |
| 1 | Correct integral for (b) in y: π ∫ (0 to 4) (4 − y) dy (or with √(4 − y) squared), with y-limits 0 and 4 |
| 1 | Value 8π, and an explanation in (c) that the radius is a vertical distance in one case and a horizontal distance in the other |

A response that uses dx with limits 0 to 4 in (b) earns neither of the (b) marks.
</details>

## Question 6 (constructed response · calculator · core)

A candle maker pours wax into a mould. The solid candle is the shape formed by spinning a region about the vertical y-axis. At height y centimetres above the base, the candle's radius is r(y) centimetres. Selected values are in the table. (The data are invented.)

| y (cm) | 0 | 4 | 8 | 12 | 16 |
|---|---|---|---|---|---|
| r(y) (cm) | 3 | 4.5 | 5 | 4.5 | 3 |

(a) Write an integral expression, in terms of r, for the volume of the candle. Include units.
(b) Use a trapezoidal sum with the four subintervals in the table to estimate the volume of the candle.
(c) The candle maker models the radius by r(y) = 3 + y/2 − y²/32 for 0 ≤ y ≤ 16. Check that this model agrees with the table, then use it to find the volume of the candle.
(d) Interpret the answer to (c) in context.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Each horizontal slice is a disc of radius r(y) and thickness dy. **V = π ∫ (0 to 16) [r(y)]² dy cubic centimetres.**

**(b)** The slice areas πr² at the five heights are 9π, 20.25π, 25π, 20.25π and 9π cm². Each subinterval is 4 cm wide.

Trapezoidal sum = (4/2)[9π + 2(20.25π) + 2(25π) + 2(20.25π) + 9π] = 2π(149) = **298π ≈ 936.195 cm³**.

**(c)** Check: r(0) = 3; r(4) = 3 + 2 − 0.5 = 4.5; r(8) = 3 + 4 − 2 = 5; r(12) = 3 + 6 − 4.5 = 4.5; r(16) = 3 + 8 − 8 = 3. All five match.

V = π ∫ (0 to 16) (3 + y/2 − y²/32)² dy ≈ **961.746 cm³** (exactly 4592π/15).

**(d)** The candle contains about 961.746 cubic centimetres of wax (just under one litre), if the model is accurate. The table estimate in (b) is about 2.7% lower; with only five readings the trapezoids cannot follow the curve exactly.

| Point | What earns it |
|---|---|
| 1 | Integral in (a) with π, r(y) squared, dy and limits 0 to 16 |
| 1 | Trapezoidal sum in (b) using areas πr² (not radii) with the correct weights; 298π or 936.195 |
| 1 | Checks the model against the table and sets up π ∫ (0 to 16) (3 + y/2 − y²/32)² dy |
| 1 | 961.746 with units cm³, interpreted as the volume of wax in the candle |

A trapezoidal sum of the radii alone, multiplied by π at the end, earns no mark for (b): squaring must happen at each height.
</details>

## Question 7 (constructed response · stretch)

For b > 0, let R_b be the region bounded by y = 2√x, the x-axis and the line x = b.

(a) Show that the solid formed by spinning R_b about the x-axis has volume V(b) = 2πb².
(b) Find the value of b for which this volume is 18π.
(c) Take b = 3. A student says the volume when R₃ is spun about the **y-axis** is π ∫ (0 to 2√3) (y²/4)² dy. Explain why this is not correct, and name the method that is needed.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** R_b touches the x-axis from x = 0 to x = b. The radius is 2√x, so V(b) = π ∫ (0 to b) (2√x)² dx = π ∫ (0 to b) 4x dx = π[2x²] from 0 to b = **2πb²**.

**(b)** 2πb² = 18π gives b² = 9, so **b = 3** (b > 0).

**(c)** R₃ lies to the **right** of the curve x = y²/4 (from y = 2√x), between the curve and the line x = 3. It does not touch the y-axis except at the origin. The student's integral uses radius y²/4: that is the volume of the solid formed by spinning the *other* region, between the y-axis and the curve, from y = 0 to y = 2√3. For R₃, each horizontal slice is a disc of radius 3 with a hole of radius y²/4 cut out: a **washer**. The washer method (Topic 8.11) is needed.

| Point | What earns it |
|---|---|
| 1 | Correct integral π ∫ (0 to b) (2√x)² dx and simplification to 2πb² |
| 1 | b = 3, with the negative root rejected |
| 1 | Explains that R₃ does not touch the y-axis, so there is a gap between the region and the axis |
| 1 | Identifies that the student's integral spins the region between the y-axis and the curve, and that washers (outer radius 3, inner radius y²/4) are needed |
</details>

## How did you do?

- **Q1, Q2 or Q4 wrong:** reread "The disc method" and Worked example 1 in the [study guide](/advanced-course-resources/calculus-ab/8-9-volume-disc-method-revolving-around-study-guide/). Square the radius, keep π, never 2π.
- **Q3 or Q5(b) wrong:** redo Worked example 2 and "Revolving about the y-axis": slice horizontally, write x in terms of y, use y-limits.
- **Q6 wrong:** remember that a table gives radii, and each slice's area is π times the radius squared. Worked example 3 shows the calculator notation.
- **Q7(c) wrong:** see the third point under "The disc method": discs need the region to touch the axis.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/8-9-volume-disc-method-revolving-around-checklist/).
