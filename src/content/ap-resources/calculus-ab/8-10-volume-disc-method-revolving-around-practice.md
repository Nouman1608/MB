---
resourceId: "mb-ap-calcab-8.10-practice"
title: "Volume with the Disc Method: Revolving Around Other Axes: Practice Questions (Calculus AB 8.10)"
description: "Seven original Marlbridge practice questions on disc-method volumes about lines such as y = k and x = h, with calculator and non-calculator parts, full solutions and suggested rubrics."
course: "calculus-ab"
unit: 8
topics: ["8.10"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "The disc method about the x- and y-axes (Topic 8.9)"
  - "Evaluating definite integrals with antiderivatives and with a calculator"
prerequisiteResources: ["mb-ap-calcab-8.10-study-guide"]
learningObjectives:
  - "Write the radius of a disc as a distance from a horizontal or vertical axis of revolution"
  - "Set up disc integrals about other axes with the correct variable and limits"
  - "Evaluate those volumes exactly and with a calculator"
  - "Decide whether the disc method applies to a region and an axis"
skills: ["1", "2"]
studyMinutes: 50
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Questions 1, 2, 3, 5 and 7: no calculator. Questions 4 and 6: graphing calculator allowed; use radians, store unrounded values and give answers to three decimal places."
related: ["mb-ap-calcab-8.10-study-guide", "mb-ap-calcab-8.10-revision-notes", "mb-ap-calcab-8.10-checklist"]
next: "mb-ap-calcab-8.10-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions: **no calculator** except in Questions 4 and 6; angles in radians; exact answers unless a calculator is allowed, then three decimal places. Notation: π ∫ (a to b) [radius]² dx means π times the definite integral of the squared radius from x = a to x = b. Every solid is formed by one full turn about the stated line. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

The region bounded by y = eˣ, the line y = e² and the y-axis is spun about the line y = e². Which expression gives the volume of the solid?

- (A) π ∫ (0 to 2) (e⁴ − e^(2x)) dx
- (B) π ∫ (0 to 2) e^(2x) dx
- (C) π ∫ (0 to 2) (e² − eˣ)² dx
- (D) π ∫ (1 to e²) (ln y)² dy

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The curve meets y = e² at x = 2, and the region lies below the line from x = 0 to x = 2, so the line is its top edge all the way. The axis is horizontal, so slice vertically. Radius = axis height − curve height = e² − eˣ. Square it and integrate in x.

- (A) squares the two heights separately: (e²)² − (eˣ)². That is a washer-style expression, and here it is wrong because there is no hole.
- (B) measures the radius from the x-axis, not from y = e².
- (D) spins the same region about the y-axis (radius ln y, from x = ln y), not about y = e².
</details>

## Question 2 (multiple choice · core)

The region bounded by y = x² and the line y = 1 is spun about the line y = 1. What is the volume of the solid?

- (A) 2π/5
- (B) 4π/3
- (C) 8π/5
- (D) 16π/15

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The curve meets y = 1 at x = −1 and x = 1. The region lies below the line, which is its top edge. Radius = 1 − x². V = π ∫ (−1 to 1) (1 − x²)² dx = π ∫ (−1 to 1) (1 − 2x² + x⁴) dx = π(2 − 4/3 + 2/5) = 16π/15.

- (A) uses x² as the radius (the distance to the x-axis): π ∫ (−1 to 1) x⁴ dx = 2π/5.
- (B) forgets to square the radius: π ∫ (−1 to 1) (1 − x²) dx = 4π/3.
- (C) squares each term separately, 1 − x⁴: π ∫ (−1 to 1) (1 − x⁴) dx = 8π/5.
</details>

## Question 3 (multiple choice · core)

The region bounded by y = √x, the x-axis and the line x = 1 is spun about the line x = 1. What is the volume of the solid?

- (A) 8π/15
- (B) π/6
- (C) π/5
- (D) 4π/5

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The axis is vertical, so slice horizontally and use dy. The region runs from y = 0 to y = 1. At height y the curve is at x = y² and the axis is at x = 1, so the radius is 1 − y². V = π ∫ (0 to 1) (1 − y²)² dy = π(1 − 2/3 + 1/5) = 8π/15.

- (B) is π ∫ (0 to 1) (1 − √x)² dx. It uses vertical slices for a vertical axis; it is actually the volume of a different region spun about y = 1.
- (C) measures the radius from the y-axis: π ∫ (0 to 1) y⁴ dy = π/5.
- (D) squares term by term, 1 − y⁴: π(1 − 1/5) = 4π/5.
</details>

## Question 4 (multiple choice · calculator · core)

The region bounded by y = 1/(1 + x²) and the line y = 0.2 is spun about the line y = 0.2. To three decimal places, what is the volume of the solid?

- (A) 1.227
- (B) 2.455
- (C) 4.232
- (D) 4.735

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** 1/(1 + x²) = 0.2 when 1 + x² = 5, so x = ±2. The curve is above the line between them, and the line is the bottom edge of the region. Radius = 1/(1 + x²) − 0.2. V = π ∫ (−2 to 2) [1/(1 + x²) − 0.2]² dx ≈ 2.455.

- (A) integrates only from 0 to 2, which is half of the solid.
- (C) squares the two heights separately: π ∫ (−2 to 2) [1/(1 + x²)² − 0.04] dx ≈ 4.232.
- (D) measures the radius from the x-axis: π ∫ (−2 to 2) [1/(1 + x²)]² dx ≈ 4.735.
</details>

## Question 5 (constructed response · core)

Let R be the region bounded by y = x³, the x-axis and the line x = 2.

(a) Find the volume of the solid formed when R is spun about the line x = 2.
(b) Explain why the disc method alone does not give the volume when R is spun about the line y = 8.
(c) Let S be the region bounded by y = x³, the line y = 8 and the y-axis. Find the volume of the solid formed when S is spun about the line y = 8.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** R lies under the curve, between the curve and the line x = 2, from y = 0 to y = 8. The line x = 2 is its right edge all the way, so discs work. Vertical axis: slice horizontally. At height y the curve is at x = y^(1/3), so the radius is 2 − y^(1/3).

V = π ∫ (0 to 8) (2 − y^(1/3))² dy = π ∫ (0 to 8) (4 − 4y^(1/3) + y^(2/3)) dy.

The parts: ∫ (0 to 8) 4 dy = 32; ∫ (0 to 8) 4y^(1/3) dy = 4 × (3/4) × 8^(4/3) = 3 × 16 = 48; ∫ (0 to 8) y^(2/3) dy = (3/5) × 32 = 96/5.

V = π(32 − 48 + 96/5) = **16π/5** (about 10.053).

**(b)** R touches the line y = 8 only at the point (2, 8). For every other x between 0 and 2 there is a gap between the top of R (the curve) and the line. Each vertical slice therefore sweeps out a washer, with a hole of radius 8 − x³, not a full disc.

**(c)** S lies above the curve and below the line y = 8, from x = 0 to x = 2, and the line is its top edge all the way. Radius = 8 − x³.

V = π ∫ (0 to 2) (8 − x³)² dx = π ∫ (0 to 2) (64 − 16x³ + x⁶) dx = π(128 − 64 + 128/7) = **576π/7** (about 258.508).

| Point | What earns it |
|---|---|
| 1 | Radius 2 − y^(1/3) with dy and limits 0 to 8 in (a) |
| 1 | Value 16π/5 |
| 1 | (b): R does not reach the line y = 8 except at one point, so the slices are washers, not discs |
| 1 | (c): π ∫ (0 to 2) (8 − x³)² dx |
| 1 | Value 576π/7 |

A response to (a) that uses π ∫ (0 to 2) (2 − x)² dx (vertical slices) earns neither (a) mark.
</details>

## Question 6 (constructed response · calculator · core)

Let R be the region bounded by y = ln x, the x-axis and the line x = e.

(a) Explain why the solid formed by spinning R about the line x = e can be found with discs, and state the variable of integration.
(b) Write, but do not evaluate, an integral for the volume of this solid.
(c) Use a calculator to find the volume.
(d) A student writes the volume as π ∫ (1 to e) (e − x)² dx. Give two reasons why this is wrong.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** ln x = 0 at x = 1 and ln e = 1, so R lies under the curve from (1, 0) to (e, 1), between the curve and the line x = e. The line x = e is R's right edge for every height from y = 0 to y = 1, so each horizontal slice is a full disc. The axis is vertical, so integrate with respect to **y**.

**(b)** At height y the curve is at x = eʸ (from y = ln x). The axis is further right, so radius = e − eʸ.

**V = π ∫ (0 to 1) (e − eʸ)² dy**

**(c)** V ≈ **3.902 cubic units**. (Sense check: the largest radius is e − 1 ≈ 1.718 at y = 0, and the solid is 1 unit tall, so it fits inside a cylinder of volume π(e − 1)² ≈ 9.276.)

**(d)** First, the axis is vertical, so the slices must be horizontal with thickness dy; vertical slices of thickness dx run parallel to the axis and do not sweep out discs. Second, the curve y = ln x does not appear anywhere in the student's integral, so the integral cannot depend on the shape of R. (Its value, about 5.313, is not the volume.)

| Point | What earns it |
|---|---|
| 1 | (a): the line x = e is a boundary of R for 0 ≤ y ≤ 1, so discs; variable y |
| 1 | (b): radius e − eʸ, with π, the square, dy and limits 0 to 1 |
| 1 | (c): 3.902 |
| 1 | (d): two valid reasons, for example wrong variable for a vertical axis and the curve missing from the radius |
</details>

## Question 7 (constructed response · stretch)

For k > 0, the region R_k is bounded by y = x² and the line y = k. It is spun about the line y = k.

(a) Show that the volume of the solid is V(k) = (16/15)πk^(5/2).
(b) Find the value of k for which V(k) = 512π/15.
(c) The solid fits exactly inside a cylinder whose radius is the largest disc radius and whose length is the width of R_k. Show that V(k) is the same fraction of this cylinder's volume for every k, and find that fraction.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The curve meets y = k at x = ±√k. The line is the top edge of R_k, and the radius is k − x².

V(k) = π ∫ (−√k to √k) (k − x²)² dx = π ∫ (−√k to √k) (k² − 2kx² + x⁴) dx.

The integrand is even, so V(k) = 2π ∫ (0 to √k) (k² − 2kx² + x⁴) dx = 2π[k²x − (2k/3)x³ + x⁵/5] from 0 to √k.

At x = √k: k^(5/2) − (2/3)k^(5/2) + (1/5)k^(5/2) = (8/15)k^(5/2). So V(k) = 2π × (8/15)k^(5/2) = **(16/15)πk^(5/2)**.

**(b)** (16/15)πk^(5/2) = 512π/15 gives k^(5/2) = 32 = 2⁵, so k = 2² = **4**.

**(c)** The largest radius is k (at x = 0) and the width is 2√k, so the cylinder has volume πk² × 2√k = 2πk^(5/2). Then V(k) ÷ 2πk^(5/2) = (16/15) ÷ 2 = **8/15**, which does not depend on k.

| Point | What earns it |
|---|---|
| 1 | Correct integral π ∫ (−√k to √k) (k − x²)² dx with limits from k = x² |
| 1 | Correct expansion and evaluation to (16/15)πk^(5/2) |
| 1 | k = 4 |
| 1 | Cylinder volume 2πk^(5/2) and the constant ratio 8/15 |

Check: with k = 1, V = 16π/15, which matches Question 2.
</details>

## How did you do?

- **Q1, Q2 or Q4 wrong:** reread "What changes when the axis moves" and Worked example 1 in the [study guide](/advanced-course-resources/calculus-ab/8-10-volume-disc-method-revolving-around-study-guide/). Measure from the axis of revolution, and square the whole radius.
- **Q3, Q5(a) or Q6 wrong:** redo Worked example 2: a vertical axis needs horizontal slices, dy and x written in terms of y.
- **Q5(b) wrong:** see "The axis must be part of the boundary".
- **Q7 wrong:** practise expanding (k − x²)² and using symmetry; compare the cylinder checks in the worked examples.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/8-10-volume-disc-method-revolving-around-checklist/).
