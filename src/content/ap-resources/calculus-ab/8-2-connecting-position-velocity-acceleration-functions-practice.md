---
resourceId: "mb-ap-calcab-8.2-practice"
title: "Connecting Position, Velocity, and Acceleration Using Integrals: Practice Questions (Calculus AB 8.2)"
description: "Seven original Marlbridge practice questions on motion with integrals: positions, velocities, displacement, total distance and average speed, from formulas and graphs, with solutions."
course: "calculus-ab"
unit: 8
topics: ["8.2"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Evaluating definite integrals with antiderivatives (Topic 6.7)"
  - "Velocity, speed and direction of motion (Topic 4.2)"
prerequisiteResources: ["mb-ap-calcab-8.2-study-guide"]
learningObjectives:
  - "Find positions and velocities from rates and starting values"
  - "Find displacement and total distance, by hand, from a graph and with a calculator"
  - "Justify where an object is farthest left or right using the sign of velocity"
  - "Compare the motion of two objects using integrals"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "No calculator except in Question 6, where a graphing calculator is allowed. Give calculator answers correct to three decimal places."
related: ["mb-ap-calcab-8.2-study-guide", "mb-ap-calcab-8.2-revision-notes", "mb-ap-calcab-8.2-checklist"]
next: "mb-ap-calcab-8.2-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: motion is along a straight line, **no calculator except in Question 6** (graphing calculator allowed, radian mode, answers correct to three decimal places), exact answers elsewhere, and every velocity and acceleration function is continuous. Notation: ∫ (a to b) v(t) dt means the definite integral of v(t) from t = a to t = b. The context in Question 5 is invented. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

A particle moves along a line with velocity v(t) = 2t − 6, for 0 ≤ t ≤ 5. What is the total distance travelled by the particle over this interval?

- (A) −5
- (B) 5
- (C) 9
- (D) 13

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** v changes sign at t = 3 (negative before, positive after). ∫ (0 to 3) (2t − 6) dt = 9 − 18 = −9, and ∫ (3 to 5) (2t − 6) dt = (25 − 30) − (9 − 18) = 4. Distance = |−9| + |4| = 13.

- (A) is the displacement, ∫ (0 to 5) v(t) dt = −5. A distance cannot be negative.
- (B) is |displacement|. Putting the absolute value outside the integral lets the backward and forward motion cancel.
- (C) counts only the backward part, from t = 0 to 3, and misses the 4 units travelled after the turn.
</details>

## Question 2 (multiple choice · core)

An object moves along a line with velocity v(t) = 3√t for t ≥ 1. At t = 1 the object is at position x = 4. What is its position at t = 9?

- (A) 52
- (B) 54
- (C) 56
- (D) 58

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** x(9) = x(1) + ∫ (1 to 9) 3t^(1/2) dt. An antiderivative is 2t^(3/2), so the integral is 2(27) − 2(1) = 52. Then x(9) = 4 + 52 = 56.

- (A) is the displacement, 52, with the starting position left out.
- (B) is 2(9)^(3/2) = 54. It evaluates the antiderivative at the top only, as if the motion started at t = 0, and also leaves out the starting position.
- (D) is 54 + 4. It adds the starting position but still ignores the lower limit t = 1.
</details>

## Question 3 (multiple choice · core)

A cart has acceleration a(t) = 2t + 1, in m/s², and velocity v(0) = −4 m/s. What is the velocity of the cart at t = 3?

- (A) 7 m/s
- (B) 8 m/s
- (C) 12 m/s
- (D) 16 m/s

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** v(3) = v(0) + ∫ (0 to 3) (2t + 1) dt = −4 + (9 + 3) = 8 m/s.

- (A) is a(3) = 7, the acceleration at t = 3, not the velocity. The units would be m/s².
- (C) is the change in velocity, 12 m/s, without the starting velocity.
- (D) subtracts the starting velocity instead of adding it: 12 − (−4) = 16.
</details>

## Question 4 (multiple choice · core)

A particle moves along a line with continuous velocity v(t) and position x(t). Which expression always gives the total distance travelled by the particle from t = 0 to t = 6?

- (A) ∫ (0 to 6) v(t) dt
- (B) |∫ (0 to 6) v(t) dt|
- (C) ∫ (0 to 6) |v(t)| dt
- (D) |x(6)| − |x(0)|

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Speed is |v(t)|, which is never negative, so integrating it counts every unit of motion in either direction.

- (A) is the displacement, x(6) − x(0). Backward motion cancels forward motion.
- (B) is the size of the displacement. It equals the distance only when the particle never changes direction.
- (D) compares distances from the origin, not distance travelled. A particle that goes from x = −3 to x = 3 has |x(6)| − |x(0)| = 0, yet it has moved at least 6 units.
</details>

## Question 5 (graph · constructed response · core)

A toy train moves along a straight track. Its velocity v(t), in metres per second, is shown below for 0 ≤ t ≤ 8 seconds. At t = 0 the train is at x = 1 m.

<figure>
<svg viewBox="0 0 520 300" role="img" aria-labelledby="train-title train-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="train-title">Velocity graph of the toy train in Question 5</title>
<desc id="train-desc">Velocity v(t), in metres per second, against time t, in seconds, for 0 ≤ t ≤ 8, drawn on a grid. The graph is made of straight segments joining (0, −2), (2, 2), (5, 2), (6, 0) and (8, −4). It crosses the t-axis going upwards at t = 1 and going downwards at t = 6.</desc>
<rect x="0" y="0" width="520" height="300" fill="#ffffff"/>
<g stroke="#c8ccd4" stroke-width="1">
<line x1="115" y1="20" x2="115" y2="270"/><line x1="170" y1="20" x2="170" y2="270"/><line x1="225" y1="20" x2="225" y2="270"/><line x1="280" y1="20" x2="280" y2="270"/><line x1="335" y1="20" x2="335" y2="270"/><line x1="390" y1="20" x2="390" y2="270"/><line x1="445" y1="20" x2="445" y2="270"/><line x1="500" y1="20" x2="500" y2="270"/>
<line x1="60" y1="50" x2="500" y2="50"/><line x1="60" y1="80" x2="500" y2="80"/><line x1="60" y1="110" x2="500" y2="110"/><line x1="60" y1="170" x2="500" y2="170"/><line x1="60" y1="200" x2="500" y2="200"/><line x1="60" y1="230" x2="500" y2="230"/><line x1="60" y1="260" x2="500" y2="260"/>
</g>
<line x1="40" y1="140" x2="510" y2="140" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="60" y1="285" x2="60" y2="15" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="115" y="156">1</text><text x="170" y="156">2</text><text x="225" y="156">3</text><text x="280" y="156">4</text><text x="335" y="156">5</text><text x="390" y="156">6</text><text x="445" y="156">7</text><text x="500" y="156">8</text><text x="512" y="134">t</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="52" y="54">3</text><text x="52" y="84">2</text><text x="52" y="114">1</text><text x="52" y="144">0</text><text x="52" y="174">−1</text><text x="52" y="204">−2</text><text x="52" y="234">−3</text><text x="52" y="264">−4</text><text x="52" y="22">v</text>
</g>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="60,200 170,80 335,80 390,140 500,260"/>
<circle cx="60" cy="200" r="4" fill="#1d2b44"/><circle cx="500" cy="260" r="4" fill="#1d2b44"/>
</svg>
<figcaption>Velocity of the toy train, v(t) in m/s, for 0 ≤ t ≤ 8 s. Grid squares are 1 s wide and 1 m/s high.</figcaption>
</figure>

(a) Find the position of the train at t = 2 and at t = 8.
(b) Find the total distance the train travels over 0 ≤ t ≤ 8.
(c) Find the train's leftmost (most negative) position on 0 ≤ t ≤ 8. Justify your answer.
(d) Find the train's average velocity over 0 ≤ t ≤ 8.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

Signed areas from the graph: [0, 1]: triangle below, −1; [1, 2]: triangle above, +1; [2, 5]: rectangle, +6; [5, 6]: triangle, +1; [6, 8]: triangle below, −4.

**(a)** x(2) = 1 + (−1 + 1) = **1 m**. x(8) = 1 + (−1 + 1 + 6 + 1 − 4) = 1 + 3 = **4 m**.

**(b)** Distance = 1 + 1 + 6 + 1 + 4 = **13 m**.

**(c)** v changes from negative to positive at t = 1, and from positive to negative at t = 6. So the candidates are t = 0, 1, 6 and 8:

| t | 0 | 1 | 6 | 8 |
|---|---|---|---|---|
| x(t) (m) | 1 | 0 | 8 | 4 |

The leftmost position is **x = 0 m, at t = 1**.

**(d)** Average velocity = displacement ÷ time = 3/8 = **0.375 m/s**.

| Point | What earns it |
|---|---|
| 1 | x(2) = 1 and x(8) = 4, each as x(0) plus a signed area |
| 1 | Total distance 13 m, adding areas without signs |
| 1 | Identifies t = 1 and t = 6 as direction changes from the sign of v, and compares x at the candidates and end points |
| 1 | Leftmost position 0 m at t = 1, **and** average velocity 3/8 m/s |

A common error in (c) is to choose t = 0 because v(0) is the most negative velocity. The most negative velocity is not the most negative position.
</details>

## Question 6 (constructed response · calculator · core)

A particle moves along the x-axis with velocity v(t) = 6 sin(t/2) − 2 for 0 ≤ t ≤ 8. At t = 0 the particle is at x = −1. A graphing calculator is allowed.

(a) Find all times in 0 < t < 8 at which the particle changes direction. Justify.
(b) Find the position of the particle at t = 8.
(c) Find the total distance travelled by the particle over 0 ≤ t ≤ 8.
(d) Find the particle's greatest position (farthest right) on 0 ≤ t ≤ 8.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Solve v(t) = 0 on the calculator: t ≈ **0.680** and t ≈ **5.604**. v(0) = −2 < 0, v is positive between the two zeros, and v(8) ≈ −6.541 < 0. So v changes sign at both times, and the particle changes direction at each.

**(b)** x(8) = −1 + ∫ (0 to 8) v(t) dt ≈ −1 + 3.84372 ≈ **2.844**.

**(c)** Distance = ∫ (0 to 8) |v(t)| dt ≈ **21.716**. (Check by pieces: 0.673 + 12.780 + 8.263 = 21.716.)

**(d)** Candidates are the end points and the direction changes:

- x(0) = −1
- x(0.680) ≈ −1 − 0.673 = −1.673
- x(5.604) ≈ −1 + ∫ (0 to 5.604) v(t) dt ≈ **11.107**
- x(8) ≈ 2.844

The greatest position is about **11.107**, at t ≈ 5.604.

| Point | What earns it |
|---|---|
| 1 | Both times, with a sign change of v given as the reason |
| 1 | x(8) ≈ 2.844, with x(0) = −1 included |
| 1 | Distance ≈ 21.716, from ∫ \|v\| (or from correct pieces) |
| 1 | Greatest position ≈ 11.107, from comparing candidates |

A "candidates" list without the end points is incomplete: the farthest right position could, in principle, be at t = 0 or t = 8.
</details>

## Question 7 (constructed response · stretch)

Two particles, A and B, move along the same straight line. Both are at x = 0 when t = 0. For t ≥ 0, the velocity of A is v_A(t) = 4t − t² and the velocity of B is v_B(t) = 3.

(a) Use integrals to find expressions for the positions x_A(t) and x_B(t).
(b) Show that for t > 0 the particles are at the same position only at t = 3.
(c) Explain why particle A is never ahead of (to the right of) particle B for t > 0.
(d) Find the displacement and the total distance travelled by particle A over 0 ≤ t ≤ 6.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** x_A(t) = 0 + ∫ (0 to t) (4s − s²) ds = **2t² − t³/3**. x_B(t) = 0 + ∫ (0 to t) 3 ds = **3t**.

**(b)** x_A(t) − x_B(t) = 2t² − t³/3 − 3t = −(t/3)(t² − 6t + 9) = −(t/3)(t − 3)². For t > 0 this is 0 only when t = 3. Check: x_A(3) = 18 − 9 = 9 and x_B(3) = 9.

**(c)** For t > 0, both t/3 > 0 and (t − 3)² ≥ 0, so x_A(t) − x_B(t) = −(t/3)(t − 3)² ≤ 0. Particle A is never to the right of B. At t = 3 it just catches up: v_A(3) = 12 − 9 = 3 = v_B, so the two have equal velocity there and A drops behind again.

**(d)** v_A(t) = t(4 − t) is positive on (0, 4) and negative on (4, 6]. ∫ (0 to 4) v_A dt = 32 − 64/3 = 32/3 and ∫ (4 to 6) v_A dt = 0 − 32/3 = −32/3. So the displacement is **0** and the total distance is 32/3 + 32/3 = **64/3**.

| Point | What earns it |
|---|---|
| 1 | Both positions from integrals with the starting value 0 |
| 1 | Factors x_A − x_B as −(t/3)(t − 3)² and concludes t = 3 only |
| 1 | Uses the sign of the factored difference to show A is never ahead |
| 1 | Displacement 0 and distance 64/3, splitting at t = 4 |

Acceptable alternative for (c): x_A − x_B has derivative v_A − v_B = −(t − 1)(t − 3), so the gap decreases on (0, 1), increases on (1, 3) to a maximum of 0 at t = 3, and decreases after. The factored form is quicker.
</details>

## How did you do?

- **Q1 or Q4 wrong:** reread "Total distance: the integral of speed" in the [study guide](/advanced-course-resources/calculus-ab/8-2-connecting-position-velocity-acceleration-functions-study-guide/).
- **Q2 or Q3 wrong:** see "Displacement: the integral of velocity" and Worked example 1: always add the starting value.
- **Q5 wrong:** redo Worked example 2 and Figure 2.
- **Q6 wrong:** redo Worked example 3, and list end points as candidates.
- **Q7 wrong:** practise writing positions as starting value plus integral, then compare them algebraically.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/8-2-connecting-position-velocity-acceleration-functions-checklist/).
