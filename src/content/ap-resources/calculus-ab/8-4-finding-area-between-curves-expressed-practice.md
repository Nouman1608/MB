---
resourceId: "mb-ap-calcab-8.4-practice"
title: "Finding the Area Between Curves Expressed as Functions of x: Practice Questions (Calculus AB 8.4)"
description: "Seven original Marlbridge practice questions on the area between curves with vertical strips, including calculator intersections, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 8
topics: ["8.4"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Evaluating definite integrals with antiderivatives and with a calculator"
  - "Solving quadratic equations"
prerequisiteResources: ["mb-ap-calcab-8.4-study-guide"]
learningObjectives:
  - "Write area integrals with correct limits, brackets and dx"
  - "Find intersection points and the top curve, by algebra or with a calculator"
  - "Evaluate areas exactly and to three decimal places"
  - "Explain why top minus bottom works for regions below the x-axis"
skills: ["4"]
studyMinutes: 50
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Questions 1, 2, 3, 5 and 7: no calculator. Questions 4 and 6: graphing calculator allowed; use radians, store unrounded values and give answers to three decimal places."
related: ["mb-ap-calcab-8.4-study-guide", "mb-ap-calcab-8.4-revision-notes", "mb-ap-calcab-8.4-checklist"]
next: "mb-ap-calcab-8.4-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. The context in Question 6 is invented. Assumptions: **no calculator** except in Questions 4 and 6; angles in radians; exact answers unless a calculator is allowed, then three decimal places. Notation: ∫ (a to b) [f(x) − g(x)] dx means the definite integral of f(x) − g(x) from x = a to x = b. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

Which integral gives the area of the region enclosed by y = √x and y = x/2?

- (A) ∫ (0 to 4) [√x − x/2] dx
- (B) ∫ (0 to 4) [x/2 − √x] dx
- (C) ∫ (0 to 2) [√x − x/2] dx
- (D) ∫ (0 to 4) [√x + x/2] dx

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** √x = x/2 gives x = x²/4, so x(x − 4) = 0 and x = 0 or x = 4. At x = 1, √1 = 1 and 1/2 = 0.5, so √x is on top. The area is ∫ (0 to 4) [√x − x/2] dx = 16/3 − 4 = 4/3.

- (B) subtracts bottom minus top; it gives −4/3.
- (C) uses 2, the y-coordinate of the intersection point (4, 2), as the upper limit. In a dx integral the limits are x-values.
- (D) adds the curves. A strip's height is a difference, not a sum.
</details>

## Question 2 (multiple choice · core)

What is the area of the region enclosed by y = x² and y = 2x + 3?

- (A) 9
- (B) 32/3
- (C) 20
- (D) −32/3

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** x² = 2x + 3 gives x² − 2x − 3 = 0, so (x − 3)(x + 1) = 0 and x = −1 or x = 3. At x = 0 the line is at 3 and the parabola at 0, so the line is on top. Area = ∫ (−1 to 3) (2x + 3 − x²) dx = [x² + 3x − x³/3] from −1 to 3 = 9 − (−5/3) = 32/3.

- (A) integrates from 0 to 3 instead of from −1 to 3, missing the part of the region left of the y-axis.
- (C) is the area under the line alone, ∫ (−1 to 3) (2x + 3) dx, which includes space below the parabola.
- (D) subtracts in the wrong order. An area cannot be negative.
</details>

## Question 3 (multiple choice · core)

What is the area of the region between y = cos x and y = sin x for 0 ≤ x ≤ π/4?

- (A) √2 − 1
- (B) 1 − √2
- (C) 1
- (D) √2

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** On 0 < x < π/4, cos x > sin x (for example at x = 0, cos 0 = 1 > 0 = sin 0). Area = ∫ (0 to π/4) [cos x − sin x] dx = [sin x + cos x] from 0 to π/4 = (√2/2 + √2/2) − (0 + 1) = √2 − 1 ≈ 0.414.

- (B) uses sin x − cos x, bottom minus top, so the sign is wrong.
- (C) uses sin x − cos x as the antiderivative, getting the sign of ∫ sin x dx wrong: (√2/2 − √2/2) − (0 − 1) = 1.
- (D) evaluates the antiderivative at π/4 only and forgets to subtract its value at 0.
</details>

## Question 4 (multiple choice · calculator · core)

Let R be the region in the first quadrant enclosed by y = 6x/(x² + 1) and y = x². What is the area of R?

- (A) 1.455
- (B) 2.446
- (C) 3.902
- (D) 5.357

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The curves meet at x = 0 and, from the calculator, at x = B ≈ 1.634. At x = 1, 6x/(x² + 1) = 3 and x² = 1, so 6x/(x² + 1) is on top. Area = ∫ (0 to B) [6x/(x² + 1) − x²] dx ≈ 2.446.

- (A) is the area under the lower curve only, ∫ (0 to B) x² dx.
- (C) is the area under the upper curve only, down to the x-axis.
- (D) adds the two areas instead of subtracting.
</details>

## Question 5 (constructed response · no calculator · core)

Let f(x) = 6x − x² and g(x) = x² − 2x. R is the region enclosed by the graphs of f and g.

(a) Find the x-coordinates of the points where the graphs meet.
(b) Write, but do not evaluate, an integral expression for the area of R. Show how you know which function is on top.
(c) Find the area of R.
(d) The graph of g lies below the x-axis for 0 < x < 2. Explain why you do not need to split your integral at x = 2.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** 6x − x² = x² − 2x gives 2x² − 8x = 0, so 2x(x − 4) = 0 and **x = 0 or x = 4**.

**(b)** At x = 1, f(1) = 5 and g(1) = −1, so f is on top. Area = **∫ (0 to 4) [(6x − x²) − (x² − 2x)] dx**.

**(c)** The integrand simplifies to 8x − 2x². ∫ (0 to 4) (8x − 2x²) dx = [4x² − 2x³/3] from 0 to 4 = 64 − 128/3 = **64/3**.

**(d)** Each vertical strip has height f(x) − g(x), the distance from the bottom curve up to the top curve. That distance does not depend on where the x-axis is: moving both curves up or down by the same amount leaves it unchanged. So the integral of f − g gives the area whether or not the region crosses the x-axis.

| Point | What earns it |
|---|---|
| 1 | (a) Both intersection x-values, 0 and 4, from solving f(x) = g(x) |
| 1 | (b) Correct integrand f(x) − g(x) with a test value showing f is on top, limits 0 and 4, and dx |
| 1 | (c) Correct antiderivative and the value 64/3 |
| 1 | (d) Explains that the strip height f − g is a vertical distance between the curves and is unaffected by the x-axis |

A response that splits at x = 2 and still reaches 64/3 earns (c) but not (d).
</details>

## Question 6 (constructed response · calculator · core)

An engineer models the cross-section of a flood channel dug across flat farmland. Measured across the channel, x metres from a marker post, the ground surface is at height G(x) = 4 + sin(x/5) metres and the bottom of the channel is at height C(x) = 0.06(x − 9)² + 1 metres, both above a fixed reference level. The channel is the region between the two graphs where G(x) ≥ C(x).

(a) Find the x-coordinates where the channel bottom meets the ground surface.
(b) Write an integral expression for the area of the cross-section, and find its value.
(c) The channel is 40 m long and has the same cross-section all along. Find the volume of earth removed.
(d) Explain the meaning of G(9) − C(9) in context, and give its value.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Solve G(x) = C(x) with the calculator: x = a ≈ **1.573** and x = b ≈ **16.002**. Store both values.

**(b)** At x = 9, G(9) ≈ 4.974 and C(9) = 1, so G is on top. Area = **∫ (a to b) [G(x) − C(x)] dx ≈ 37.974 m²**.

**(c)** Volume = cross-section area × length ≈ 37.974 × 40 ≈ **1518.942 m³**. (Use the stored area, not 37.974, in the multiplication.)

**(d)** G(9) − C(9) ≈ 3.974. It is the depth of the channel, in metres, 9 m from the marker post: the vertical distance from the channel bottom to the ground surface. It is also the height of one vertical strip in the area integral.

| Point | What earns it |
|---|---|
| 1 | (a) Both intersection values, 1.573 and 16.002 |
| 1 | (b) Integral with limits a and b, integrand G(x) − C(x) and dx |
| 1 | (b) Area 37.974 m² |
| 1 | (c) Volume 1518.942 m³ with units |
| 1 | (d) Value 3.974 interpreted as the channel depth at x = 9, in metres |

Units are needed for the point in (c). In (b), a decimal with no integral expression does not earn the expression point.
</details>

## Question 7 (constructed response · no calculator · stretch)

For a constant k > 0, let R be the region enclosed by y = x² and y = kx.

(a) Show that the area of R is k³/6.
(b) Find the value of k for which the area of R is 36.
(c) For this value of k, show that the vertical line x = k/2 divides R into two regions of equal area. Explain why this happens.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** x² = kx gives x(x − k) = 0, so x = 0 or x = k. For 0 < x < k, kx − x² = x(k − x) > 0, so the line is on top. Area = ∫ (0 to k) (kx − x²) dx = [kx²/2 − x³/3] from 0 to k = k³/2 − k³/3 = **k³/6**.

**(b)** k³/6 = 36 gives k³ = 216, so **k = 6**.

**(c)** With k = 6, the line x = 3 splits R. Left part: ∫ (0 to 3) (6x − x²) dx = 27 − 9 = 18. Right part: ∫ (3 to 6) (6x − x²) dx = 36 − 18 = 18. The parts are equal. Reason: the strip height 6x − x² = x(6 − x) takes the same value at 3 + u and 3 − u, so the heights are symmetric about x = 3, and each half collects the same area.

| Point | What earns it |
|---|---|
| 1 | (a) Limits 0 and k with justification that kx ≥ x² between them |
| 1 | (a) Correct antiderivative leading to k³/6 |
| 1 | (b) k = 6 |
| 1 | (c) Both part-areas equal to 18 (or one equal to 18 = 36/2) |
| 1 | (c) Explains the equality by the symmetry of the strip height about x = 3 |
</details>

## How did you do?

- **Q1, Q2 or Q5(a)–(b) wrong:** revisit "The method, step by step" and Worked example 1 in the [study guide](/advanced-course-resources/calculus-ab/8-4-finding-area-between-curves-expressed-study-guide/). Limits are x-values; test for the top curve.
- **Q3 wrong:** recheck antiderivatives of sin x and cos x, and evaluate at both limits.
- **Q4 or Q6 wrong:** redo Worked example 2. Store the intersection values and write the integral before using the calculator.
- **Q5(d) wrong:** reread "Why the x-axis does not matter".
- **Q7 wrong:** practise writing the area as a function of a constant, then solving for it.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/8-4-finding-area-between-curves-expressed-checklist/).
