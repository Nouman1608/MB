---
resourceId: "mb-ap-calcab-8.11-practice"
title: "Volume with Washer Method: Revolving Around the x- or y-Axis: Practice Questions (Calculus AB 8.11)"
description: "Seven original Marlbridge practice questions on washer-method volumes around the x- and y-axes, with full solutions, rounding checks and suggested rubrics."
course: "calculus-ab"
unit: 8
topics: ["8.11"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Area between curves and the disc method"
prerequisiteResources: ["mb-ap-calcab-8.11-study-guide"]
learningObjectives:
  - "Set up washer-method integrals around the x-axis and the y-axis"
  - "Identify outer and inner radii with a test point"
  - "Evaluate volumes exactly and with a calculator, rounding correctly"
  - "Explain why (R − r)² does not give the area of a washer"
skills: ["1", "4"]
studyMinutes: 50
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Calculator allowed in Questions 3 and 6 only. Give exact answers elsewhere. With a calculator, store intermediate values and give final answers to three decimal places."
related: ["mb-ap-calcab-8.11-study-guide", "mb-ap-calcab-8.11-revision-notes", "mb-ap-calcab-8.11-checklist"]
next: "mb-ap-calcab-8.11-checklist"
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
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. The bead in Question 6 is invented. Assumptions: **no calculator** except in Questions 3 and 6; exact answers unless a calculator is allowed, then three decimal places. Notation: π ∫ (a to b) [R(x)² − r(x)²] dx means π times the definite integral from x = a to x = b; R is the outer radius and r the inner radius. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

The region enclosed by y = 2√x and y = x is revolved around the x-axis. Which expression gives the volume of the solid?

- (A) π ∫ (0 to 4) [4x − x²] dx
- (B) π ∫ (0 to 4) [2√x − x]² dx
- (C) π ∫ (0 to 4) [x² − 4x] dx
- (D) ∫ (0 to 4) [4x − x²] dx

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** 2√x = x gives 4x = x², so x = 0 or x = 4. At x = 1, 2√1 = 2 and 1 = 1, so y = 2√x is farther from the x-axis: R = 2√x and r = x. Then R² − r² = 4x − x², and the volume is π ∫ (0 to 4) [4x − x²] dx = 32π/3.

- (B) subtracts the radii and then squares. That is the square of the strip's length, not a washer's area; it gives 32π/15.
- (C) is inner squared minus outer squared. It gives −32π/3, a negative volume.
- (D) leaves out π, so it adds up R² − r² instead of the washer areas π(R² − r²).
</details>

## Question 2 (multiple choice · core)

The region enclosed by y = x² and y = 2x is revolved around the **y-axis**. What is the volume?

- (A) 8π/3
- (B) 64π/15
- (C) 8π/15
- (D) 4π/3

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The curves meet at (0, 0) and (2, 4). Around the y-axis, slice horizontally and write x in terms of y: x = √y and x = y/2, for 0 ≤ y ≤ 4. At y = 1, √1 = 1 and 1/2 = 0.5, so R = √y and r = y/2. V = π ∫ (0 to 4) [y − y²/4] dy = π(8 − 16/3) = 8π/3.

- (B) revolves around the x-axis instead: π ∫ (0 to 2) [4x² − x⁴] dx = 64π/15.
- (C) uses (R − r)² = (√y − y/2)², which is not the area of a washer.
- (D) uses the x-limits 0 and 2 in a dy integral. The region runs from y = 0 to y = 4.
</details>

## Question 3 (multiple choice · calculator · core)

S is the region bounded by y = eˣ, y = 3 − x and the y-axis. S is revolved around the x-axis. What is the volume, correct to three decimal places?

- (A) 10.916
- (B) 10.914
- (C) 3.719
- (D) 3.475

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The curves meet where eˣ = 3 − x. A calculator gives x = c ≈ 0.792060; store it. At x = 0, 3 − 0 = 3 and e⁰ = 1, so R = 3 − x and r = eˣ. V = π ∫ (0 to c) [(3 − x)² − e²ˣ] dx ≈ 10.916.

- (B) rounds the upper limit to 0.8 before integrating. That changes the third decimal place.
- (C) uses π ∫ (0 to c) [(3 − x) − eˣ]² dx: subtract-then-square.
- (D) is the integral without π: 10.916 / π ≈ 3.475.
</details>

## Question 4 (multiple choice · foundation)

A region is revolved around the x-axis. At x = 2 its outer radius is R(x) = x + 3 and its inner radius is r(x) = x + 1. What is the area of the washer-shaped cross section at x = 2?

- (A) 16π
- (B) 4π
- (C) 34π
- (D) 16

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** R(2) = 5 and r(2) = 3, so the area is π(5² − 3²) = π(25 − 9) = 16π.

- (B) is π(5 − 3)² = 4π: subtract-then-square.
- (C) adds the two circles, π(25 + 9), instead of removing the hole.
- (D) leaves out π.
</details>

## Question 5 (constructed response · core)

The region bounded by y = 2x, y = x and y = 4 is revolved around the y-axis.

(a) Find the corners of the region and write each boundary line as x in terms of y.
(b) Identify the outer and inner radii, with a reason.
(c) Write and evaluate an integral for the volume.
(d) The solid is a cone with a smaller cone removed. Use V = (1/3)πr²h to check your answer.

<details>
<summary>Worked solution</summary>

**(a)** y = 2x and y = x meet at (0, 0). y = 4 meets y = 2x at (2, 4) and meets y = x at (4, 4). As x in terms of y: y = 2x gives x = y/2, and y = x gives x = y.

**(b)** Slice horizontally. At y = 2, the line x = y is at x = 2 and the line x = y/2 is at x = 1. So x = y is farther from the y-axis: **R(y) = y** and **r(y) = y/2**.

**(c)** V = π ∫ (0 to 4) [y² − (y/2)²] dy = π ∫ (0 to 4) (3/4)y² dy = π (3/4)(64/3) = **16π cubic units**.

**(d)** Revolving the line x = y from y = 0 to 4 gives a cone of radius 4 and height 4: (1/3)π(16)(4) = 64π/3. The hole is a cone of radius 2 and height 4: (1/3)π(4)(4) = 16π/3. Difference: 48π/3 = 16π. The answers agree.

Suggested mark points (4): 1 for the corners and both lines as x in terms of y; 1 for R = y and r = y/2 with a test value; 1 for the correct dy integral with limits 0 and 4; 1 for 16π with the cone check.
</details>

## Question 6 (constructed response · calculator · core)

A craft studio (invented for this question) turns wooden beads. A bead is modelled by revolving, around the x-axis, the region between y = 3 − 0.1x² and y = 1 for 0 ≤ x ≤ 4. Lengths are in centimetres. The line y = 1 marks the edge of a hole drilled along the axis.

(a) Explain why the washer method is needed.
(b) Write an integral for the volume of wood in one bead and find it.
(c) The wood has density 0.7 g/cm³. Find the mass of one bead.
(d) A student rounds the volume to 66.8 cm³ before finding the mass. What mass does the student get, and why is it not acceptable?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The region lies between y = 1 and the curve, so there is a gap of 1 cm between it and the x-axis. Each vertical slice spins into a ring, not a solid disc. (The curve stays above 1: at x = 4 it is 3 − 1.6 = 1.4.)

**(b)** R(x) = 3 − 0.1x² and r(x) = 1.

V = π ∫ (0 to 4) [(3 − 0.1x²)² − 1²] dx ≈ **66.753 cm³**.

(Exact value, for checking: 2656π/125.)

**(c)** Mass = 0.7 × 66.75256… ≈ **46.727 g**, using the stored volume.

**(d)** 0.7 × 66.8 = 46.76 g. Rounding the middle result changed the answer in the second decimal place, so the final answer is not correct to three decimal places.

| Point | What earns it |
|---|---|
| 1 | Explains the gap between the region and the axis, so slices are rings |
| 1 | Correct integrand π[(3 − 0.1x²)² − 1²] with limits 0 and 4 |
| 1 | Volume 66.753 (cm³) |
| 1 | Mass 46.727 g from the unrounded volume, and 46.76 g explained as an early-rounding error |

Acceptable alternative for (b): volume of the solid bead without a hole (≈ 79.319) minus the drilled cylinder π(1²)(4) = 4π ≈ 12.566.
</details>

## Question 7 (constructed response · stretch)

S is the region in the first quadrant enclosed by y = x and y = x³.

(a) Find the volume of the solid formed when S is revolved around the x-axis.
(b) Find the volume of the solid formed when S is revolved around the y-axis.
(c) A student writes π ∫ (0 to 1) (x − x³)² dx for part (a). Find the student's value and explain the error in terms of the shape of a cross section.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

The curves meet where x = x³, so x = 0 or x = 1 in the first quadrant.

**(a)** At x = 0.5, y = x gives 0.5 and y = x³ gives 0.125. So R = x and r = x³.

V = π ∫ (0 to 1) [x² − x⁶] dx = π(1/3 − 1/7) = **4π/21** (about 0.598).

**(b)** Write x in terms of y: x = y and x = y^(1/3), for 0 ≤ y ≤ 1. At y = 0.125, y^(1/3) = 0.5 and y = 0.125, so R = y^(1/3) and r = y.

V = π ∫ (0 to 1) [y^(2/3) − y²] dy = π(3/5 − 1/3) = **4π/15** (about 0.838).

**(c)** π ∫ (0 to 1) (x² − 2x⁴ + x⁶) dx = π(1/3 − 2/5 + 1/7) = **8π/105** (about 0.239). Each cross section is a ring: a circle of radius x with a circle of radius x³ removed. Its area is πx² − πx⁶. The student's expression π(x − x³)² is the area of a single circle whose radius is the strip's length, which is not the ring.

| Point | What earns it |
|---|---|
| 1 | Correct radii for (a) with a test value and the integral π ∫ (0 to 1) [x² − x⁶] dx |
| 1 | 4π/21 |
| 1 | (b) rewritten in y with correct R and r, limits 0 to 1, and 4π/15 |
| 1 | (c) 8π/105 and the explanation that a washer's area is πR² − πr², not π(R − r)² |
</details>

## How did you do?

- **Q1 or Q4 wrong:** reread "From discs to washers" and Figure 1 in the [study guide](/advanced-course-resources/calculus-ab/8-11-volume-washer-method-revolving-around-study-guide/).
- **Q2, Q5 or Q7(b) wrong:** redo Worked example 2: around the y-axis, everything is in y.
- **Q3 or Q6 wrong:** reread "Rounding on calculator questions" and Worked example 3.
- **Q7(c) wrong:** see "The trap" after Worked example 1.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/8-11-volume-washer-method-revolving-around-checklist/).
