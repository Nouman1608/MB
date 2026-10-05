---
resourceId: "mb-ap-calcbc-u9-review"
title: "Parametric Equations, Polar Coordinates and Vector-Valued Functions: Mixed Unit Review (Calculus BC Unit 9)"
description: "The big ideas of parametric, polar and vector-valued functions in one place, a methods summary table, and seven original mixed questions with worked solutions and rubrics."
course: "calculus-bc"
unit: 9
topics: []
resourceType: "unit-review"
calculusScope: "bc-only"
prerequisites:
  - "Work through the Unit 9 topics, or at least the Unit 9 diagnostic"
prerequisiteResources: ["mb-ap-calcbc-u9-diagnostic"]
learningObjectives:
  - "Connect parametric curves, vector-valued functions and polar curves as one set of ideas: a point whose coordinates depend on one variable"
  - "Choose between slope, velocity, speed, displacement, distance, arc length and area by reading what a question asks for"
  - "Answer multi-part questions that combine several Unit 9 topics, with and without a calculator"
  - "Write complete justifications for direction of motion, changing speed, concavity and which polar curve is outer"
skills: ["1", "2", "3"]
studyMinutes: 60
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "A graphing calculator is allowed for Question 5 only; give decimals to 3 decimal places and use radian mode. All other questions are no calculator: leave π, e and surds exact."
related: ["mb-ap-calcbc-u9-diagnostic", "mb-ap-calcbc-9.1-checklist", "mb-ap-calcbc-9.2-checklist", "mb-ap-calcbc-9.3-checklist", "mb-ap-calcbc-9.4-checklist", "mb-ap-calcbc-9.5-checklist", "mb-ap-calcbc-9.6-checklist", "mb-ap-calcbc-9.7-checklist", "mb-ap-calcbc-9.8-checklist", "mb-ap-calcbc-9.9-checklist"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only: Unit 9 is not part of Calculus AB."
  - "Parametric, vector and polar curves all describe a point by one variable; derivatives with respect to that variable give slope, velocity and concavity."
  - "Integrals of velocity give displacement and position; integrals of speed give distance travelled, which is arc length for a path traced once."
  - "Polar area uses ½ ∫ r² dθ, and between two curves ½ ∫ (R² − r²) dθ, with limits from where the curves meet."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**BC only.** Unit 9, Parametric Equations, Polar Coordinates, and Vector-Valued Functions, is part of Calculus BC only; Calculus AB students do not need this page.

Use this page after Unit 9 or the [Unit 9 diagnostic](/advanced-course-resources/calculus-bc/unit-9-diagnostic/). These are **original Marlbridge practice questions**, not past exam questions, with invented contexts and data. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not official scoring. A calculator is allowed for Question 5 only. Angles are in radians.

## Big ideas of the unit

- **One variable drives both coordinates.** A parametric curve gives x and y as functions of t. A vector-valued function r(t) = ⟨x(t), y(t)⟩ is the same thing written as a position vector ([Topic 9.1](/advanced-course-resources/calculus-bc/9-1-defining-differentiating-parametric-equations-study-guide/), [Topic 9.4](/advanced-course-resources/calculus-bc/9-4-defining-differentiating-vector-valued-functions-study-guide/)).
- **Slope comes from the chain rule.** dy/dx = (dy/dt) ÷ (dx/dt) when dx/dt ≠ 0. Horizontal tangent: dy/dt = 0 and dx/dt ≠ 0; vertical tangent: the other way round ([Topic 9.1](/advanced-course-resources/calculus-bc/9-1-defining-differentiating-parametric-equations-study-guide/)).
- **Concavity needs one more division.** d²y/dx² is d/dt (dy/dx) divided by dx/dt. It is not y″(t), the second component of r″(t) ([Topic 9.2](/advanced-course-resources/calculus-bc/9-2-second-derivatives-parametric-equations-study-guide/)).
- **Calculus on vectors works one component at a time.** Differentiate or integrate each component, each with its own constant ([Topic 9.4](/advanced-course-resources/calculus-bc/9-4-defining-differentiating-vector-valued-functions-study-guide/), [Topic 9.5](/advanced-course-resources/calculus-bc/9-5-integrating-vector-valued-functions-study-guide/)).
- **Position = starting position + integral of velocity.** The known position can be at any time, not only t = 0 ([Topic 9.5](/advanced-course-resources/calculus-bc/9-5-integrating-vector-valued-functions-study-guide/)).
- **Motion in the plane:** the signs of x′ and y′ give direction, speed is √(x′² + y′²), and the speed increases when v · a > 0. The integral of speed is distance travelled ([Topic 9.6](/advanced-course-resources/calculus-bc/9-6-solving-motion-problems-parametric-vector-study-guide/)).
- **Arc length is the integral of speed**, when the curve is traced once. Length is always at least the straight-line distance between the ends ([Topic 9.3](/advanced-course-resources/calculus-bc/9-3-finding-arc-lengths-curves-given-study-guide/)).
- **A polar curve is a parametric curve in θ:** x = r cos θ, y = r sin θ. dr/dθ says whether the point moves towards or away from the pole; dy/dx gives the slope ([Topic 9.7](/advanced-course-resources/calculus-bc/9-7-defining-polar-coordinates-differentiating-polar-study-guide/)).
- **Polar area is built from thin sectors:** ½ ∫ r² dθ for one curve, ½ ∫ (R² − r²) dθ between two, with limits from r = 0 or where the curves meet ([Topic 9.8](/advanced-course-resources/calculus-bc/9-8-finding-area-polar-region-area-study-guide/), [Topic 9.9](/advanced-course-resources/calculus-bc/9-9-finding-area-region-bounded-two-study-guide/)).

## Key relationships and methods

| You see or need | What to do | Topics |
|---|---|---|
| Slope of a parametric or vector curve | (dy/dt) ÷ (dx/dt) | 9.1, 9.4 |
| Horizontal / vertical tangent | dy/dt = 0, dx/dt ≠ 0 / dx/dt = 0, dy/dt ≠ 0 | 9.1 |
| Concavity | d/dt (dy/dx) ÷ (dx/dt) | 9.2 |
| Velocity and acceleration | r′(t) and r″(t), component by component | 9.4, 9.6 |
| Position from velocity | r(b) = r(a) + ∫ from a to b of v(t) dt | 9.5 |
| Speed; speed increasing? | √(x′² + y′²); sign of v · a | 9.6 |
| Distance travelled or arc length | ∫ √(x′² + y′²) dt | 9.3, 9.6 |
| Polar to parametric | x = r cos θ, y = r sin θ | 9.7 |
| Towards or away from the pole | Compare the signs of r and dr/dθ | 9.7 |
| Area of a polar region | ½ ∫ r² dθ over one tracing | 9.8 |
| Area between polar curves | ½ ∫ (R² − r²) dθ; test which is outer | 9.9 |

## Question 1 (multiple choice · mixed)

A curve is given by x = eᵗ and y = t². For which values of t is dy/dx positive and the curve concave down?

- (A) 0 < t < 1
- (B) t > 1
- (C) t < 0
- (D) t > 0

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** dy/dx = 2t/eᵗ = 2t e^(−t), which is positive for t > 0. Then d/dt (dy/dx) = 2e^(−t)(1 − t), and dividing by dx/dt = eᵗ gives d²y/dx² = 2(1 − t)e^(−2t). This is negative for t > 1, so both conditions hold for t > 1.

- (A) is where the slope is positive but the curve is concave up.
- (C) is where the slope is negative.
- (D) checks the slope only.

Topics: 9.1, 9.2.
</details>

## Question 2 (multiple choice · mixed)

A particle moves with position r(t) = ⟨eᵗ cos t, eᵗ sin t⟩ for 0 ≤ t ≤ π/2. Which gives the distance it travels and the length of its displacement vector?

- (A) Distance √2(e^(π/2) − 1); displacement length √(1 + e^π)
- (B) Distance √2 e^(π/2); displacement length √(1 + e^π)
- (C) Distance e^(π/2) − 1; displacement length √(1 + e^π)
- (D) Distance √(1 + e^π); displacement length √2(e^(π/2) − 1)

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** x′ = eᵗ(cos t − sin t) and y′ = eᵗ(sin t + cos t). Squaring and adding gives 2e^(2t), so the speed is √2 eᵗ and the distance is √2(e^(π/2) − 1), about 5.389. The particle starts at (1, 0) and ends at (0, e^(π/2)), so the displacement has length √(1 + e^π), about 4.913.

- (B) forgets the lower limit.
- (C) integrates x′ + y′ instead of the speed. It is even shorter than the displacement, which is impossible.
- (D) swaps the two answers.

Topics: 9.3, 9.4, 9.6.
</details>

## Question 3 (multiple choice · mixed)

A polar curve r = f(θ) has f(π/3) = 2 and f′(π/3) = −1. Let A(β) = ½ ∫ from 0 to β of (f(θ))² dθ. Which describes dA/dβ at β = π/3, and the motion of the point (f(θ), θ) as θ increases through π/3?

- (A) dA/dβ = 2; moving towards the pole
- (B) dA/dβ = 2; moving away from the pole
- (C) dA/dβ = −1; moving towards the pole
- (D) dA/dβ = 4; moving towards the pole

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** By the Fundamental Theorem of Calculus, dA/dβ = ½(f(β))² = ½(4) = 2: the swept area grows at 2 square units per radian. r = 2 > 0 and dr/dθ = −1 < 0, so the distance from the pole is decreasing.

- (B) reverses the meaning of dr/dθ < 0 when r > 0.
- (C) uses f′ instead of ½f².
- (D) leaves out the ½.

Topics: 9.7, 9.8.
</details>

## Question 4 (constructed response · mixed)

A particle moves in the plane for 0 ≤ t ≤ 4 with velocity v(t) = ⟨2t − 2, t² − 4⟩. At t = 0 it is at (1, 2).

(a) Find r(t) and the position at t = 3.
(b) Find the equation of the tangent line to the path at t = 3.
(c) Find d²y/dx² at t = 3. Is the path concave up or concave down there?
(d) Find the speed at t = 3. Is the speed increasing or decreasing? Justify.
(e) For which t is the particle moving left and down?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** x(t) = 1 + ∫ from 0 to t of (2s − 2) ds = t² − 2t + 1 = (t − 1)². y(t) = 2 + ∫ from 0 to t of (s² − 4) ds = t³/3 − 4t + 2. At t = 3: **(4, −1)**.

**(b)** dy/dx = (t² − 4)/(2t − 2) = 5/4 at t = 3. Tangent line: **y + 1 = (5/4)(x − 4)**.

**(c)** By the quotient rule, d/dt (dy/dx) = (t² − 2t + 4)/(2(t − 1)²), which is 14/16 = 7/8 at t = 3. Divide by dx/dt = 4: **d²y/dx² = 7/32 > 0, concave up**.

**(d)** v(3) = ⟨4, 5⟩, so the speed is **√41**. a(t) = ⟨2, 2t⟩, so a(3) = ⟨2, 6⟩ and v · a = 8 + 30 = 38 > 0. The speed is **increasing**.

**(e)** x′ < 0 for t < 1 and y′ < 0 for t < 2. Both hold for **0 ≤ t < 1**.

| Point | What earns it |
|---|---|
| 1 | x(t) and y(t), each with its constant from (1, 2) |
| 1 | Position (4, −1) |
| 1 | Slope 5/4 and the tangent line |
| 1 | d/dt (dy/dx) divided by dx/dt |
| 1 | 7/32 and concave up |
| 1 | √41, and increasing justified by v · a > 0 |
| 1 | 0 ≤ t < 1, from the signs of both components |

Total: 7 points. Topics: 9.1, 9.2, 9.5, 9.6.
</details>

## Question 5 (constructed response · mixed)

**Calculator allowed.** A fictional robotic cart moves across a flat courtyard. Its position is in metres, with x east and y north, and t is in seconds. For 0 ≤ t ≤ 6,

**dx/dt = 2 + cos(t²/4)  and  dy/dt = 3 cos(0.5t) − 0.2t.**

At t = 0 the cart is at (5, 2).

(a) Explain why the cart never moves west.
(b) Find the cart's greatest y-coordinate for 0 ≤ t ≤ 6. Justify your answer.
(c) Find the cart's position at t = 6.
(d) Find the speed at t = 4. Is the speed increasing or decreasing at t = 4? Justify.
(e) Find the total distance the cart travels for 0 ≤ t ≤ 6.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** cos(t²/4) ≥ −1, so dx/dt ≥ 1 > 0. The x-coordinate always increases, so the cart never moves west.

**(b)** dy/dt = 0 at **t ≈ 2.770** (the only zero in the interval). dy/dt > 0 before it (y′(1) ≈ 2.433) and < 0 after it (y′(4) ≈ −2.048), so y has its maximum there. y(2.770) = 2 + ∫ from 0 to 2.770 of y′(t) dt ≈ **7.129 m**. (Ends: y(0) = 2, y(6) ≈ −0.753.)

**(c)** x(6) = 5 + ∫ from 0 to 6 of x′(t) dt ≈ 18.406 and y(6) = 2 + ∫ from 0 to 6 of y′(t) dt ≈ −0.753. Position **(18.406, −0.753)**.

**(d)** v(4) ≈ ⟨1.346, −2.048⟩, so the speed is **≈ 2.451 m/s**. Differentiating each component, a(4) ≈ ⟨1.514, −1.564⟩. v · a ≈ 2.037 + 3.204 ≈ 5.242 > 0, so the speed is **increasing**.

**(e)** Distance = ∫ from 0 to 6 of √((x′)² + (y′)²) dt ≈ **19.323 m**.

| Point | What earns it |
|---|---|
| 1 | (a): dx/dt ≥ 1 > 0 |
| 1 | t ≈ 2.770 with the sign change of dy/dt |
| 1 | y ≈ 7.129 using the starting value 2 |
| 1 | (18.406, −0.753) with both integrals shown |
| 1 | Speed ≈ 2.451 |
| 1 | Increasing, from v · a > 0 |
| 1 | Distance ≈ 19.323 from the integral of speed |

Total: 7 points. Topics: 9.3, 9.4, 9.5, 9.6.
</details>

## Question 6 (constructed response · mixed)

The circles r = 2√3 sin θ and r = 2 cos θ are drawn on the same polar axes.

(a) For r = 2√3 sin θ, find dr/dθ at θ = π/6. Is the point moving towards or away from the pole? Give a reason.
(b) Find the slope of r = 2 cos θ at θ = π/6.
(c) Find the angle, other than at the pole, where the circles meet. For 0 < θ < π/6 and π/6 < θ < π/2, state which circle is nearer the pole, with a test value in each.
(d) Find the exact area of the region inside both circles.
(e) Find the exact area inside r = 2 cos θ but outside r = 2√3 sin θ.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** dr/dθ = 2√3 cos θ = **3** at π/6. r = √3 > 0 and dr/dθ > 0, so the point is moving **away from the pole**.

**(b)** On r = 2 cos θ: x = 2 cos²θ and y = 2 sin θ cos θ = sin 2θ. dx/dθ = −2 sin 2θ = −√3 and dy/dθ = 2 cos 2θ = 1 at π/6. **Slope = −1/√3.**

**(c)** 2√3 sin θ = 2 cos θ gives tan θ = 1/√3, so **θ = π/6** (both r = √3). At θ = π/12: 2√3 sin θ ≈ 0.897 and 2 cos θ ≈ 1.932, so **r = 2√3 sin θ is nearer** on (0, π/6). At θ = π/3: 3 and 1, so **r = 2 cos θ is nearer** on (π/6, π/2).

**(d)** The region inside both is bounded by the nearer curve:
Area = ½ ∫ from 0 to π/6 of 12 sin²θ dθ + ½ ∫ from π/6 to π/2 of 4 cos²θ dθ = (π/2 − 3√3/4) + (π/3 − √3/4) = **5π/6 − √3** (about 0.886).

**(e)** The circle r = 2 cos θ has radius 1, so its area is π. Subtract (d): π − (5π/6 − √3) = **π/6 + √3** (about 2.256).

| Point | What earns it |
|---|---|
| 1 | dr/dθ = 3 and "away", using r > 0 |
| 1 | dx/dθ and dy/dθ from x = r cos θ, y = r sin θ |
| 1 | Slope −1/√3 |
| 1 | θ = π/6 and the nearer curve on each interval, with test values |
| 1 | Correct sum of two integrals with limits 0, π/6, π/2 |
| 1 | 5π/6 − √3 |
| 1 | π/6 + √3 |

Total: 7 points. Topics: 9.7, 9.8, 9.9.
</details>

## Question 7 (constructed response · mixed)

The end of a tight thread unwinding from a spool traces the curve x = 2 cos t + 2t sin t, y = 2 sin t − 2t cos t, for 0 ≤ t ≤ π, in centimetres.

(a) Show that dx/dt = 2t cos t and dy/dt = 2t sin t. Hence find dy/dx.
(b) Find the points where the curve has a vertical tangent and a horizontal tangent, for 0 < t ≤ π.
(c) Find d²y/dx² in terms of t, and the interval of t on which the curve is concave up.
(d) Find the exact length of the curve for 0 ≤ t ≤ π.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** dx/dt = −2 sin t + (2 sin t + 2t cos t) = 2t cos t, by the product rule. dy/dt = 2 cos t − (2 cos t − 2t sin t) = 2t sin t. So **dy/dx = tan t**, for t ≠ π/2.

**(b)** Vertical: dx/dt = 0 at t = π/2, where dy/dt = π ≠ 0. Point **(π, 2)**. Horizontal: dy/dt = 0 at t = π, where dx/dt = −2π ≠ 0. Point **(−2, 2π)**. (At t = 0 both derivatives are 0, so the formula says nothing there.)

**(c)** d/dt (tan t) = sec²t; divide by dx/dt = 2t cos t: **d²y/dx² = 1/(2t cos³t)**. This is positive when cos t > 0: **concave up for 0 < t < π/2**.

**(d)** (dx/dt)² + (dy/dt)² = 4t²(cos²t + sin²t) = 4t², so the speed is 2t for t ≥ 0. The speed is positive for t > 0, so the curve is traced once and its length is ∫ from 0 to π of 2t dt = **π² cm** (about 9.870).

| Point | What earns it |
|---|---|
| 1 | Both derivatives with the product rule, and dy/dx = tan t |
| 1 | Vertical tangent at (π, 2), checking dy/dt ≠ 0 |
| 1 | Horizontal tangent at (−2, 2π), checking dx/dt ≠ 0 |
| 1 | d²y/dx² = 1/(2t cos³t), dividing by dx/dt |
| 1 | Concave up for 0 < t < π/2 |
| 1 | Integrand simplified to 2t, and length π² |

Total: 6 points. Topics: 9.1, 9.2, 9.3.
</details>

## How did you do?

Add up your points from Questions 4–7 (27 in total) and your correct answers to Questions 1–3. The total is only a guide, not a predicted exam score. More useful: note **which topics** your lost points came from (each answer lists them), then tick off those topic checklists:

[9.1](/advanced-course-resources/calculus-bc/9-1-defining-differentiating-parametric-equations-checklist/) ·
[9.2](/advanced-course-resources/calculus-bc/9-2-second-derivatives-parametric-equations-checklist/) ·
[9.3](/advanced-course-resources/calculus-bc/9-3-finding-arc-lengths-curves-given-checklist/) ·
[9.4](/advanced-course-resources/calculus-bc/9-4-defining-differentiating-vector-valued-functions-checklist/) ·
[9.5](/advanced-course-resources/calculus-bc/9-5-integrating-vector-valued-functions-checklist/) ·
[9.6](/advanced-course-resources/calculus-bc/9-6-solving-motion-problems-parametric-vector-checklist/) ·
[9.7](/advanced-course-resources/calculus-bc/9-7-defining-polar-coordinates-differentiating-polar-checklist/) ·
[9.8](/advanced-course-resources/calculus-bc/9-8-finding-area-polar-region-area-checklist/) ·
[9.9](/advanced-course-resources/calculus-bc/9-9-finding-area-region-bounded-two-checklist/)

If many topics need work, go back to the [Unit 9 diagnostic](/advanced-course-resources/calculus-bc/unit-9-diagnostic/) and use its "Your next step" table to choose where to start.
