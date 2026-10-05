---
resourceId: "mb-ap-calcab-5.10-practice"
title: "Introduction to Optimization Problems: Practice Questions (Calculus AB 5.10)"
description: "Seven original Marlbridge practice questions on setting up and solving optimization problems, with full solutions, distractor explanations and suggested rubrics."
course: "calculus-ab"
unit: 5
topics: ["5.10"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "The candidates test and the first and second derivative tests (Topics 5.4 to 5.7)"
prerequisiteResources: ["mb-ap-calcab-5.10-study-guide"]
learningObjectives:
  - "Write a quantity to optimise as a function of one variable on a stated interval"
  - "Find maximum and minimum values with critical points and endpoints"
  - "Justify that a critical point gives an absolute extremum"
  - "Recognise the same structure in problems set in different situations"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Give exact answers; Question 5 tells you which approximations to use when comparing values."
related: ["mb-ap-calcab-5.10-study-guide", "mb-ap-calcab-5.10-revision-notes", "mb-ap-calcab-5.10-checklist"]
next: "mb-ap-calcab-5.10-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, angles in radians, and exact answers unless stated. All situations and data are fictional. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

What is the maximum value of f(x) = 2x³ − 9x² + 12x on the closed interval [0, 3]?

- (A) 3
- (B) 4
- (C) 5
- (D) 9

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** f′(x) = 6x² − 18x + 12 = 6(x − 1)(x − 2), so the critical points are x = 1 and x = 2. Candidates: f(0) = 0, f(1) = 2 − 9 + 12 = 5, f(2) = 16 − 36 + 24 = 4, f(3) = 54 − 81 + 36 = 9. The largest is 9, at the endpoint x = 3.

- (A) is the location of the maximum, x = 3, not its value.
- (B) is f(2), the relative minimum.
- (C) is f(1), the relative maximum. Without the endpoint check you would stop here, but f(3) is larger.
</details>

## Question 2 (multiple choice · core)

A rectangle has a perimeter of 50 cm. One side is x cm. Which function and interval should be used to find the largest possible area?

- (A) A(x) = x(25 − x), 0 < x < 25
- (B) A(x) = x(50 − x), 0 < x < 50
- (C) A(x) = x(50 − 2x), 0 < x < 25
- (D) A(x) = x(25 − x), 0 < x < 50

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The constraint is 2x + 2y = 50, so y = 25 − x. Then A = xy = x(25 − x). Both sides must be positive: x > 0 and 25 − x > 0, so 0 < x < 25.

- (B) uses x + y = 50, forgetting that a perimeter counts each side twice.
- (C) uses 2x + y = 50, which is the constraint for three sides only (as when a wall forms the fourth side).
- (D) has the right function but the wrong interval: for x ≥ 25 the other side would be zero or negative.
</details>

## Question 3 (multiple choice · core)

Two positive numbers x and y have product xy = 48. What is the smallest possible value of x + 3y?

- (A) 8√3
- (B) 12
- (C) 16
- (D) 24

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** From the constraint, y = 48/x, so S(x) = x + 3(48/x) = x + 144/x for x > 0. S′(x) = 1 − 144/x² = 0 gives x = 12 (reject −12, which is not positive). S″(x) = 288/x³ > 0 for x > 0, and x = 12 is the only critical point, so it gives the absolute minimum. Then y = 4 and S = 12 + 12 = 24.

- (A) drops the 3, minimising x + 48/x instead. That gives x = 4√3 and a sum of 8√3.
- (B) is the location, x = 12, not the minimum value.
- (C) is x + y = 12 + 4, the wrong quantity.
</details>

## Question 4 (multiple choice · core)

A function k is differentiable on the open interval (0, 10). Its only critical point in (0, 10) is at x = 4, and k′ changes from positive to negative at x = 4. Which conclusion is justified?

- (A) k has its absolute maximum on (0, 10) at x = 4.
- (B) k has its absolute minimum on (0, 10) at x = 4.
- (C) k has a relative maximum at x = 4, but nothing can be said about an absolute maximum without endpoint values.
- (D) k(4) = 0.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The sign change of k′ from positive to negative makes x = 4 a relative maximum. k is continuous (it is differentiable), and x = 4 is its only critical point on the interval, so k increases all the way up to x = 4 and decreases all the way after it. The relative maximum is therefore the absolute maximum on (0, 10).

- (B) reverses the first derivative test.
- (C) is too cautious. On an open interval with a single critical point, the sign change of k′ already proves an absolute maximum; no endpoint values are needed.
- (D) confuses k′(4) = 0 with k(4) = 0.
</details>

## Question 5 (constructed response · core)

Let h(x) = x + 2 cos x on the closed interval [0, π]. You may use π ≈ 3.14 and √3 ≈ 1.73 when comparing values.

(a) Find the critical points of h in [0, π].
(b) Find the absolute maximum and absolute minimum values of h on [0, π]. Justify your answer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** h′(x) = 1 − 2 sin x. Setting h′(x) = 0 gives sin x = 1/2, so **x = π/6 and x = 5π/6** in [0, π]. h′ exists everywhere, so there are no other critical points.

**(b)** h is continuous on the closed interval [0, π], so use the candidates test.

| x | 0 | π/6 | 5π/6 | π |
|---|---|---|---|---|
| h(x), exact | 2 | π/6 + √3 | 5π/6 − √3 | π − 2 |
| h(x), approximately | 2 | ≈ 2.26 | ≈ 0.89 | ≈ 1.14 |

Working: cos(π/6) = √3/2, so h(π/6) = π/6 + 2(√3/2) = π/6 + √3. cos(5π/6) = −√3/2, so h(5π/6) = 5π/6 − √3. cos π = −1, so h(π) = π − 2.

**Absolute maximum π/6 + √3 (about 2.26), at x = π/6. Absolute minimum 5π/6 − √3 (about 0.89), at x = 5π/6.**

| Point | What earns it |
|---|---|
| 1 | Correct h′(x) = 1 − 2 sin x |
| 1 | Both critical points π/6 and 5π/6, and no others in [0, π] |
| 1 | Evaluates h at both critical points **and** both endpoints |
| 1 | Correct maximum and minimum values, each with its location, justified by comparing all four candidates |

Note: the second derivative test alone (h″(π/6) = −√3 < 0) shows only a relative maximum. It does not show that h(π/6) beats the endpoint value h(0) = 2, so it does not earn the last point without the comparison.
</details>

## Question 6 (constructed response · core)

A community garden plans a rectangular vegetable bed with area 96 m². The front edge faces a path and uses decorative edging costing $8 per metre. The other three edges use plain edging costing $4 per metre. Let x be the length of the front edge, in metres.

(a) Show that the total edging cost, in dollars, is C(x) = 12x + 768/x, and state the interval of allowed values of x.
(b) Find the value of x that minimises the cost. Justify that it gives the absolute minimum.
(c) Find the minimum cost and the dimensions of the bed.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Let y be the depth of the bed (the two side edges). The front edge costs 8x. The back edge costs 4x and the two side edges cost 4y each. So C = 8x + 4x + 8y = 12x + 8y. The constraint is xy = 96, so y = 96/x. Then **C(x) = 12x + 8(96/x) = 12x + 768/x**, for **x > 0**.

**(b)** C′(x) = 12 − 768/x². Setting C′(x) = 0 gives x² = 64, so **x = 8** (reject x = −8, since a length is positive). C″(x) = 1536/x³, so C″(8) = 3 > 0: a relative minimum. It is the only critical point on (0, ∞), and C is continuous there, so x = 8 gives the absolute minimum.

**(c)** y = 96/8 = 12. **Minimum cost C(8) = 96 + 96 = $192**, with a front edge of 8 m and a depth of 12 m.

Check: C(6) = 72 + 128 = 200 and C(12) = 144 + 64 = 208, both above 192.

| Point | What earns it |
|---|---|
| 1 | Cost expression 12x + 8y (or equivalent) from the two prices |
| 1 | Uses xy = 96 to reach C(x) = 12x + 768/x, with x > 0 |
| 1 | C′(x) = 12 − 768/x² and critical point x = 8 |
| 1 | Justifies absolute minimum: C″(8) > 0 (or C′ changes from negative to positive) **and** only critical point |
| 1 | Minimum cost $192 with dimensions 8 m by 12 m |

Acceptable alternative for (b): C′(x) < 0 for 0 < x < 8 and C′(x) > 0 for x > 8, so C decreases then increases.
</details>

## Question 7 (constructed response · stretch)

Find the points on the curve y = x² that are closest to the point (0, 3).

(a) Write the square of the distance from (x, x²) to (0, 3) as a function D(x), and explain why minimising D gives the same points as minimising the distance itself.
(b) Find the critical points of D.
(c) Find the closest points and the smallest distance. Justify that it is the absolute minimum.
(d) A student says the closest point must be (0, 0), the point on the curve directly below (0, 3). Use your work to explain why the student is wrong.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** D(x) = (x − 0)² + (x² − 3)² = x² + x⁴ − 6x² + 9 = **x⁴ − 5x² + 9**. Distance is √D, and distances are never negative. For non-negative numbers, a smaller square means a smaller number, so the same x minimises both. Working with D avoids differentiating a square root.

**(b)** D′(x) = 4x³ − 10x = 2x(2x² − 5). Critical points: **x = 0 and x = ±√(5/2) = ±√10/2**.

**(c)** D(±√(5/2)) = (5/2)² − 5(5/2) + 9 = 25/4 − 50/4 + 36/4 = 11/4. D(0) = 9.

Justification: D is even, so look at x ≥ 0 first. On (0, ∞) the only critical point is √(5/2). D′(1) = −6 < 0 and D′(2) = 12 > 0, so D′ changes from negative to positive there: D decreases and then increases, so √(5/2) gives the smallest value of D for x > 0. That value, 11/4, is also smaller than D(0) = 9. By symmetry the same holds for x < 0.

**The closest points are (√10/2, 5/2) and (−√10/2, 5/2)**, and **the smallest distance is √(11/4) = √11/2**.

**(d)** At x = 0, D″(0) = −10 < 0 (or: D′ changes from positive to negative at x = 0). So (0, 0) is a **relative maximum** of the distance, not a minimum: points on the curve just to either side of (0, 0) are closer to (0, 3). Its distance is 3, compared with √11/2, which is less than 2.

| Point | What earns it |
|---|---|
| 1 | D(x) = x⁴ − 5x² + 9 with a valid reason for using the squared distance |
| 1 | D′(x) = 4x³ − 10x and all three critical points |
| 1 | D at the critical points: 11/4 and 9 |
| 1 | Justifies the absolute minimum (sign change or single critical point on (0, ∞), plus comparison with x = 0 and symmetry) |
| 1 | Both closest points and the distance √11/2 |
| 1 | Explains that x = 0 gives a relative maximum of D, so (0, 0) is not closest |
</details>

## How did you do?

- **Q1 or Q5 wrong:** revisit Worked example 1 (candidates test) in the [study guide](/advanced-course-resources/calculus-ab/5-10-introduction-optimization-problems-study-guide/), and always include endpoints.
- **Q2 or Q3 wrong:** reread "The common structure" and practise turning the constraint into a one-variable function.
- **Q4 wrong:** reread step 7 of "The method": the single-critical-point argument.
- **Q6 or Q7 wrong:** redo Worked example 2 and check that you proved the extreme value, not just found a critical point.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/5-10-introduction-optimization-problems-checklist/).
