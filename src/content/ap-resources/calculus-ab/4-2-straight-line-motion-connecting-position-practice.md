---
resourceId: "mb-ap-calcab-4.2-practice"
title: "Straight-Line Motion: Connecting Position, Velocity, and Acceleration: Practice Questions (Calculus AB 4.2)"
description: "Seven original Marlbridge practice questions on straight-line motion: velocity, acceleration, speed, direction changes and total distance, with full solutions."
course: "calculus-ab"
unit: 4
topics: ["4.2"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Differentiating polynomials and products involving eˣ"
  - "Sign analysis of a factored expression"
prerequisiteResources: ["mb-ap-calcab-4.2-study-guide"]
learningObjectives:
  - "Find velocity, acceleration and speed from a position function"
  - "Decide when an object is at rest, changes direction, speeds up or slows down, with justification"
  - "Estimate acceleration from a velocity table and interpret it"
  - "Find displacement and total distance from positions at turning points"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "No calculator except in Question 6, where a graphing calculator is allowed. Give answers to 3 decimal places where a calculator is used."
related: ["mb-ap-calcab-4.2-study-guide", "mb-ap-calcab-4.2-revision-notes", "mb-ap-calcab-4.2-checklist"]
next: "mb-ap-calcab-4.2-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. All functions and data are invented. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: motion is along a straight line, the positive direction is right (or up) unless stated, and **no calculator** except in Question 6. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

A particle moves along the x-axis with position x(t) = 2t³ − 15t² + 36t for t ≥ 0. At which times is the particle at rest?

- (A) t = 0 only
- (B) t = 2.5 only
- (C) t = 2 and t = 3
- (D) t = 0, t = 2 and t = 3

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** At rest means v(t) = 0. v(t) = 6t² − 30t + 36 = 6(t² − 5t + 6) = 6(t − 2)(t − 3), which is 0 at t = 2 and t = 3.

- (A) solves x(t) = 0. That is where the particle is at the origin, not where it is at rest. (x(t) = t(2t² − 15t + 36) and the quadratic has no real roots.)
- (B) solves a(t) = 12t − 30 = 0. That is where the acceleration is 0.
- (D) mixes the root of x with the roots of v. At t = 0, v(0) = 36, so the particle is moving.
</details>

## Question 2 (multiple choice · core)

A particle moves along a horizontal line with velocity v(t) = t² − 4t + 3. Which statement is true at t = 2.5?

- (A) The particle is moving left and slowing down.
- (B) The particle is moving left and speeding up.
- (C) The particle is moving right and slowing down.
- (D) The particle is moving right and speeding up.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** v(2.5) = 6.25 − 10 + 3 = −0.75 < 0, so it is moving left. a(t) = 2t − 4, so a(2.5) = 1 > 0. The signs are opposite, so the speed is decreasing: slowing down.

- (B) assumes positive acceleration always means speeding up. Here the velocity is negative, so a positive acceleration pushes it towards 0.
- (C) reads the direction from the acceleration instead of the velocity.
- (D) uses the sign of a for both the direction and the change in speed.
</details>

## Question 3 (multiple choice · core)

A particle moves along a line with velocity v(t) = t² − 5t + 4 for 0 ≤ t ≤ 5. On which interval or intervals is the **speed** of the particle increasing?

- (A) 1 < t < 2.5 and 4 < t < 5
- (B) 2.5 < t < 5 only
- (C) 0 < t < 1 and 4 < t < 5
- (D) 0 < t < 2.5 only

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** v(t) = (t − 1)(t − 4): positive on (0, 1), negative on (1, 4), positive on (4, 5). a(t) = 2t − 5: negative before 2.5, positive after. Speed increases where v and a have the same sign: on (1, 2.5) both are negative, and on (4, 5) both are positive.

- (B) is where a > 0, which is where the *velocity* increases. On (2.5, 4) the velocity is negative and rising towards 0, so the speed is falling.
- (C) is where v > 0, the particle moving right. Direction alone does not decide speeding up.
- (D) is where a < 0. On (0, 1) the particle moves right while a < 0, so it is slowing down.
</details>

## Question 4 (multiple choice · core)

A particle moves along the x-axis with position x(t) = t⁴ − 8t², in metres, for 0 ≤ t ≤ 3 seconds. What is the total distance travelled?

- (A) 7 m
- (B) 9 m
- (C) 25 m
- (D) 41 m

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** v(t) = 4t³ − 16t = 4t(t − 2)(t + 2). On (0, 2), v < 0; on (2, 3), v > 0. So the particle turns at t = 2. x(0) = 0, x(2) = 16 − 32 = −16, x(3) = 81 − 72 = 9. Distance = |−16 − 0| + |9 − (−16)| = 16 + 25 = 41 m.

- (A) subtracts the sizes of the two positions, 16 − 9 = 7. That has no meaning for distance.
- (B) is the displacement x(3) − x(0). It ignores the leftward leg.
- (C) counts only the second leg, from −16 to 9.
</details>

## Question 5 (constructed response · core)

A cart moves on a straight track. Its velocity v(t), in metres per second, is differentiable and is measured at selected times t, in seconds.

| t (s) | 0 | 3 | 5 | 8 | 12 |
|---|---|---|---|---|---|
| v(t) (m/s) | 2.0 | 3.5 | 1.0 | −1.5 | −0.5 |

(a) Use the data to estimate a(4). Give units and interpret your answer.
(b) Must the cart be at rest at some time between t = 5 and t = 8? Justify your answer.
(c) It is known that v(10) = −0.9. Use the data to estimate a(10), then decide whether the cart is speeding up or slowing down at t = 10. Justify.
(d) Find the average acceleration of the cart over 0 ≤ t ≤ 12.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** a(4) ≈ (v(5) − v(3))/(5 − 3) = (1.0 − 3.5)/2 = **−1.25 m/s²**. At t = 4 seconds, the velocity of the cart is decreasing at about 1.25 metres per second per second.

**(b)** Yes. v is differentiable, so it is continuous. v(5) = 1.0 > 0 and v(8) = −1.5 < 0, so by the Intermediate Value Theorem there is a time c in (5, 8) with v(c) = 0. The cart is at rest at that time. (Because v goes from positive to negative, the cart also changes direction somewhere in this interval.)

**(c)** a(10) ≈ (v(12) − v(8))/(12 − 8) = (−0.5 − (−1.5))/4 = **0.25 m/s²**. Since v(10) = −0.9 < 0 and a(10) ≈ 0.25 > 0, the signs are opposite, so the cart is **slowing down** at t = 10.

**(d)** (v(12) − v(0))/(12 − 0) = (−0.5 − 2.0)/12 = **−5/24 m/s²**, about −0.208 m/s².

| Point | What earns it |
|---|---|
| 1 | Difference quotient for a(4) giving −1.25, with units m/s² and a correct interpretation |
| 1 | Continuity of v, the sign change between t = 5 and t = 8, and the conclusion v(c) = 0 by the IVT |
| 1 | Estimate a(10) ≈ 0.25 and conclude slowing down because v and a have opposite signs |
| 1 | Average acceleration −5/24 m/s² (or −0.208) |

A response to (c) that says "a > 0, so speeding up" earns no point: the sign of v must be considered.
</details>

## Question 6 (constructed response · core · calculator allowed)

In a model, a ball is thrown straight up from a balcony. Its height above the ground, in metres, at time t seconds is

**h(t) = 1.2 + 9.8t − 4.9t², for t ≥ 0 until it hits the ground.**

(a) Find v(t) and a(t), with units.
(b) Find the greatest height of the ball. Justify that it is the greatest.
(c) Find the time when the ball hits the ground and its speed at that moment.
(d) Is the ball speeding up or slowing down at t = 0.5? At t = 1.5? Justify both.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** v(t) = h′(t) = **9.8 − 9.8t m/s**. a(t) = v′(t) = **−9.8 m/s²** (constant).

**(b)** v(t) = 0 when t = 1. v > 0 for t < 1 (rising) and v < 0 for t > 1 (falling), so the height is greatest at t = 1. h(1) = 1.2 + 9.8 − 4.9 = **6.1 m**.

**(c)** Solve 1.2 + 9.8t − 4.9t² = 0 with a calculator (or the quadratic formula). The positive root is t = 1 + √61/7 ≈ **2.116 s**. Using the stored (unrounded) root, v = 9.8 − 9.8t = −1.4√61 ≈ −10.934, so the speed is about **10.934 m/s**. (Using the rounded 2.116 gives −10.937; keep the full value in the calculator to avoid this rounding error.)

**(d)** At t = 0.5: v = 4.9 > 0 and a = −9.8 < 0. Opposite signs, so the ball is **slowing down** (rising, losing speed). At t = 1.5: v = −4.9 < 0 and a = −9.8 < 0. Same signs, so it is **speeding up** (falling faster).

| Point | What earns it |
|---|---|
| 1 | Correct v(t) and a(t) with units m/s and m/s² |
| 1 | t = 1 from v = 0, sign change of v as justification, and maximum height 6.1 m |
| 1 | Ground time ≈ 2.116 s and speed ≈ 10.934 m/s (positive) |
| 1 | Both conclusions in (d), each justified by comparing signs of v and a |

Accept 2.115 or 2.116 for the time and 10.93 or 10.934 for the speed. Giving the velocity −10.934 as the speed loses the point in (c).
</details>

## Question 7 (constructed response · stretch)

A particle moves along the x-axis with position x(t) = t²e^(−t) for 0 ≤ t ≤ 5.

(a) Show that v(t) = t(2 − t)e^(−t) and a(t) = (t² − 4t + 2)e^(−t).
(b) At what time does the particle change direction? Justify.
(c) Is the particle speeding up or slowing down at t = 1? At t = 3? Justify.
(d) Find the exact total distance travelled for 0 ≤ t ≤ 5.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Product rule: v(t) = 2te^(−t) + t²(−e^(−t)) = (2t − t²)e^(−t) = t(2 − t)e^(−t). Again: a(t) = (2 − 2t)e^(−t) − (2t − t²)e^(−t) = (t² − 4t + 2)e^(−t).

**(b)** e^(−t) > 0 always, so the sign of v is the sign of t(2 − t). For 0 < t < 2, v > 0; for 2 < t < 5, v < 0. The velocity changes sign at **t = 2**, so the particle changes direction there (from right to left). At t = 0, v = 0 too, but that is the start of the interval.

**(c)** At t = 1: v(1) = e^(−1) > 0 and a(1) = (1 − 4 + 2)e^(−1) = −e^(−1) < 0. Opposite signs: **slowing down**. At t = 3: v(3) = −3e^(−3) < 0 and a(3) = (9 − 12 + 2)e^(−3) = −e^(−3) < 0. Same signs: **speeding up**.

**(d)** x(0) = 0, x(2) = 4e^(−2), x(5) = 25e^(−5). Distance = (4e^(−2) − 0) + (4e^(−2) − 25e^(−5)) = **8e^(−2) − 25e^(−5)**, about 0.914.

| Point | What earns it |
|---|---|
| 1 | Correct use of the product rule for both v and a |
| 1 | t = 2, justified by the sign change of v (using e^(−t) > 0) |
| 1 | Both conclusions in (c), each with the signs of v and a stated |
| 1 | Splits at t = 2 and gives 8e^(−2) − 25e^(−5) |

A common wrong answer for (d) is x(5) − x(0) = 25e^(−5) ≈ 0.168, which is the displacement, not the distance.
</details>

## How did you do?

- **Q1 or Q7(b) wrong:** reread "Direction of motion" in the [study guide](/advanced-course-resources/calculus-ab/4-2-straight-line-motion-connecting-position-study-guide/).
- **Q2, Q3, Q5(c), Q6(d) or Q7(c) wrong:** reread "Speeding up and slowing down" and redo Worked example 2.
- **Q4 or Q7(d) wrong:** redo Worked example 1 and Figure 1 on total distance.
- **Q5(a), Q5(d) or Q6(a) wrong:** check units and the definitions of average and instantaneous acceleration.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/4-2-straight-line-motion-connecting-position-checklist/).
