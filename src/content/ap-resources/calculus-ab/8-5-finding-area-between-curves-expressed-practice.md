---
resourceId: "mb-ap-calcab-8.5-practice"
title: "Finding the Area Between Curves Expressed as Functions of y: Practice Questions (Calculus AB 8.5)"
description: "Seven original Marlbridge practice questions on the area between curves with horizontal strips, including rewriting curves and calculator intersections, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 8
topics: ["8.5"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Evaluating definite integrals with antiderivatives and with a calculator"
  - "Rearranging y = f(x) as x = g(y)"
prerequisiteResources: ["mb-ap-calcab-8.5-study-guide"]
learningObjectives:
  - "Write area integrals in y with correct limits, brackets and dy"
  - "Find y-limits and the right-hand curve, by algebra or with a calculator"
  - "Rewrite curves as functions of y and choose between dx and dy"
  - "Evaluate areas exactly and to three decimal places"
skills: ["1"]
studyMinutes: 50
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Questions 1, 2, 3, 5 and 7: no calculator. Questions 4 and 6: graphing calculator allowed; use radians, store unrounded values and give answers to three decimal places."
related: ["mb-ap-calcab-8.5-study-guide", "mb-ap-calcab-8.5-revision-notes", "mb-ap-calcab-8.5-checklist"]
next: "mb-ap-calcab-8.5-checklist"
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
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. The context in Question 6 is invented. Assumptions: **no calculator** except in Questions 4 and 6; angles in radians; exact answers unless a calculator is allowed, then three decimal places. Notation: ∫ (c to d) [R(y) − L(y)] dy means the definite integral of R(y) − L(y) from y = c to y = d. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

The curve x = y² − 2y and the y-axis enclose a region. Which integral gives its area?

- (A) ∫ (0 to 2) [0 − (y² − 2y)] dy
- (B) ∫ (0 to 2) (y² − 2y) dy
- (C) ∫ (−1 to 0) [0 − (y² − 2y)] dy
- (D) ∫ (0 to 2) [(y² − 2y) + 0] dx

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The curve meets the y-axis (x = 0) where y² − 2y = 0, so y = 0 or y = 2. At y = 1 the curve is at x = −1, which is left of the y-axis. So the right boundary is x = 0 and the left boundary is x = y² − 2y. The area is ∫ (0 to 2) (2y − y²) dy = 4 − 8/3 = 4/3.

- (B) subtracts left minus right; it gives −4/3.
- (C) uses −1 and 0, the x-values of the region's leftmost point and of the y-axis, as limits. In a dy integral the limits are y-values.
- (D) writes dx with an integrand in y and y-limits. The variable of integration must match both.
</details>

## Question 2 (multiple choice · core)

What is the area of the region enclosed by x = 8 − y² and x = y²?

- (A) 32/3
- (B) 64/3
- (C) 80/3
- (D) −64/3

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** 8 − y² = y² gives y² = 4, so y = −2 or y = 2. At y = 0, 8 − 0 = 8 and 0² = 0, so x = 8 − y² is on the right. Area = ∫ (−2 to 2) [(8 − y²) − y²] dy = ∫ (−2 to 2) (8 − 2y²) dy = [8y − 2y³/3] from −2 to 2 = (16 − 16/3) − (−16 + 16/3) = 64/3.

- (A) integrates only from 0 to 2, giving half the region.
- (C) integrates only the right curve, ∫ (−2 to 2) (8 − y²) dy, which measures out to the y-axis instead of to the left curve.
- (D) subtracts left minus right. An area cannot be negative.
</details>

## Question 3 (multiple choice · core)

R is the region in the first quadrant bounded by y = x³, the line y = 8 and the y-axis. What is the area of R?

- (A) 4
- (B) 12
- (C) 16
- (D) 1024

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Use horizontal strips. Rewrite y = x³ as x = ∛y = y^(1/3). For 0 < y < 8 each strip runs from the y-axis (x = 0) to x = y^(1/3). Area = ∫ (0 to 8) y^(1/3) dy = [(3/4) y^(4/3)] from 0 to 8 = (3/4)(16) = 12. Check with vertical strips: ∫ (0 to 2) (8 − x³) dx = 16 − 4 = 12.

- (A) is ∫ (0 to 2) x³ dx, the area **below** the curve, between it and the x-axis. That is the other part of the 2-by-8 rectangle.
- (C) is the whole rectangle, 2 × 8.
- (D) writes the curve as x = y³ instead of x = y^(1/3): ∫ (0 to 8) y³ dy = 1024. Solving y = x³ for x gives a cube root, not a cube.
</details>

## Question 4 (multiple choice · calculator · core)

R is the region enclosed by x = 2y − y² and x = sin y, for y ≥ 0. What is the area of R?

- (A) 0.227
- (B) 0.671
- (C) 0.898
- (D) 1.569

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Both curves pass through the origin. The calculator gives the other intersection at y = B ≈ 1.236; store it. At y = 0.5, 2y − y² = 0.75 and sin 0.5 ≈ 0.479, so x = 2y − y² is on the right. Area = ∫ (0 to B) [(2y − y²) − sin y] dy ≈ 0.227.

- (B) is ∫ (0 to B) sin y dy, the region between the left curve and the y-axis only.
- (C) is ∫ (0 to B) (2y − y²) dy, the region between the right curve and the y-axis.
- (D) adds the two curves instead of subtracting.
</details>

## Question 5 (constructed response · no calculator · core)

R is the region enclosed by the curves x = y² − 4y and x = 2y − y².

(a) Find the coordinates of the points where the curves meet.
(b) Write, but do not evaluate, an integral in y for the area of R. Show how you know which curve is on the right.
(c) Find the area of R.
(d) Explain why an integral with respect to x would need more than one integral.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** y² − 4y = 2y − y² gives 2y² − 6y = 0, so 2y(y − 3) = 0 and y = 0 or y = 3. At y = 0, x = 0; at y = 3, x = 9 − 12 = −3. The points are **(0, 0) and (−3, 3)**.

**(b)** At y = 1, 2y − y² = 1 and y² − 4y = −3. So x = 2y − y² is on the right. Area = **∫ (0 to 3) [(2y − y²) − (y² − 4y)] dy**.

**(c)** The integrand simplifies to 6y − 2y². ∫ (0 to 3) (6y − 2y²) dy = [3y² − 2y³/3] from 0 to 3 = 27 − 18 = **9**.

**(d)** Both curves are parabolas opening sideways. The left one, x = y² − 4y, has its leftmost point at (−4, 2), and the right one, x = 2y − y², has its rightmost point at (1, 1). A vertical line can meet a sideways parabola twice, so the top and bottom boundaries change as you move across the region: near x = −3.5 both come from the left curve, near x = −1 the bottom is the left curve and the top is the right curve, and near x = 0.5 both come from the right curve. Written as functions of x, each branch needs a ± square root, and the dx area needs several pieces. Every horizontal line, by contrast, meets the left curve once and the right curve once, so one dy integral is enough.

| Point | What earns it |
|---|---|
| 1 | (a) Both intersection points, from solving the two expressions for x equal |
| 1 | (b) Integrand right − left with a test value, limits 0 and 3, and dy |
| 1 | (c) Correct antiderivative and the value 9 |
| 1 | (d) Explains that vertical lines meet a sideways parabola twice, so the top or bottom boundary changes and the region must be split |

A dx set-up that correctly reaches 9 earns (c). In (b), limits −3 and 0 (x-values) do not earn the point.
</details>

## Question 6 (constructed response · calculator · core)

A gardener plans a flower bed next to a straight path. y metres north of the path, the bed stretches from x = L(y) to x = R(y), where x is measured in metres east of a marker post (negative x is west of the post):

- R(y) = 2 + sin(y/2)
- L(y) = 0.4(y − 3.5)² − 0.5

The bed is the region where L(y) ≤ x ≤ R(y).

(a) Find the values of y where the two boundaries meet.
(b) Write an integral expression for the area of the bed, and find its value.
(c) The gardener spreads mulch 0.05 m deep over the whole bed. Find the volume of mulch needed.
(d) Find R(2) − L(2) and explain its meaning in context.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Solve R(y) = L(y) on the calculator: y = c ≈ **0.810** and y = d ≈ **6.056**. Store both.

**(b)** At y = 3.5, R(3.5) ≈ 2.984 and L(3.5) = −0.5, so R is on the right. Area = **∫ (c to d) [R(y) − L(y)] dy ≈ 12.118 m²**.

**(c)** Volume = area × depth ≈ 12.118 × 0.05 ≈ **0.606 m³**. (Use the stored area in the multiplication.)

**(d)** R(2) ≈ 2.841 and L(2) = 0.4, so R(2) − L(2) ≈ **2.441 m**. It is the east–west width of the bed 2 m north of the path. It is also the length of one horizontal strip in the area integral.

| Point | What earns it |
|---|---|
| 1 | (a) Both values, 0.810 and 6.056, found from R(y) = L(y) |
| 1 | (b) Integral with limits c and d, integrand R(y) − L(y) and dy |
| 1 | (b) Area 12.118 m² |
| 1 | (c) Volume 0.606 m³ with units |
| 1 | (d) Value 2.441 interpreted as the width of the bed 2 m north of the path, in metres |

In (b), a decimal with no integral expression does not earn the expression point. Units are needed for the point in (c).
</details>

## Question 7 (constructed response · no calculator · stretch)

R is the region bounded by y = ln x, the x-axis and the vertical line x = e.

(a) Write the area of R as an integral with respect to y, and evaluate it.
(b) Hence state the value of ∫ (1 to e) ln x dx, and explain why it equals your answer to (a).
(c) Use the same idea, with the line x = e² instead, to find the exact value of ∫ (1 to e²) ln x dx.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The region runs from y = 0 (at the point (1, 0)) up to y = ln e = 1 (at the point (e, 1)). Rewrite y = ln x as x = eʸ. A horizontal strip at height y runs from x = eʸ on the left to x = e on the right. Area = ∫ (0 to 1) (e − eʸ) dy = [ey − eʸ] from 0 to 1 = (e − e) − (0 − 1) = **1**.

**(b)** ln x ≥ 0 for 1 ≤ x ≤ e, so ∫ (1 to e) ln x dx is the area between y = ln x and the x-axis from x = 1 to x = e. That is exactly region R, measured with vertical strips instead. So **∫ (1 to e) ln x dx = 1**.

**(c)** With x = e², the region runs from y = 0 to y = ln e² = 2. Area = ∫ (0 to 2) (e² − eʸ) dy = [e²y − eʸ] from 0 to 2 = (2e² − e²) − (0 − 1) = **e² + 1** (about 8.389). By the same reasoning as (b), ∫ (1 to e²) ln x dx = e² + 1.

**Why this works.** The rectangle 0 ≤ x ≤ e², 0 ≤ y ≤ 2 has area 2e². The part to the left of the curve is ∫ (0 to 2) eʸ dy = e² − 1. What is left over, e² + 1, is the area under ln x.

| Point | What earns it |
|---|---|
| 1 | (a) Rewrites the curve as x = eʸ and uses y-limits 0 and 1 |
| 1 | (a) Integrand e − eʸ (right − left) and the value 1 |
| 1 | (b) Explains that the dx integral and the dy integral measure the same region, with ln x ≥ 0 on [1, e] |
| 1 | (c) Limits 0 and 2 with integrand e² − eʸ |
| 1 | (c) Value e² + 1 |

BC students who use integration by parts to check (b) and (c) should get the same values; the rubric awards the points for the horizontal-strip method.
</details>

## How did you do?

- **Q1, Q2 or Q5(a)–(b) wrong:** revisit "The method, step by step" and Worked example 1 in the [study guide](/advanced-course-resources/calculus-ab/8-5-finding-area-between-curves-expressed-study-guide/). Limits are y-values; test for the right curve.
- **Q3 or Q7 wrong:** redo Worked example 2. Rewrite y = f(x) as x = g(y) carefully before integrating.
- **Q4 or Q6 wrong:** redo Worked example 3. Store the intersection values and write the integral before using the calculator.
- **Q5(d) wrong:** reread "Choosing dx or dy".

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/8-5-finding-area-between-curves-expressed-checklist/).
