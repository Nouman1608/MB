---
resourceId: "mb-ap-phys1-1.5-practice"
title: "Vectors and Motion in Two Dimensions: Practice Questions (Physics 1 1.5)"
description: "Seven original Marlbridge practice questions on vector components, adding displacements, horizontal and angled projectiles and a launch experiment, with worked solutions and suggested mark points."
course: "physics-1"
unit: 1
topics: ["1.5"]
resourceType: "practice-questions"
prerequisites:
  - "Right-angled triangle trigonometry and the constant-acceleration equations in one dimension"
prerequisiteResources: ["mb-ap-phys1-1.5-study-guide"]
learningObjectives:
  - "Resolve vectors into components and add vectors by components with correct signs and quadrants"
  - "Solve horizontal-launch and angled-launch projectile problems by treating each axis separately"
  - "Predict how flight time and range change when launch speed or height change"
  - "Process launch data into a straight-line graph and use its slope"
  - "Derive a symbolic expression for range and use it to evaluate a claim"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra and trigonometry only, no calculus; calculator in degree mode. g = 9.8 m/s². Give answers to 2 or 3 significant figures as shown; keep unrounded values until the last step"
related: ["mb-ap-phys1-1.5-study-guide", "mb-ap-phys1-1.5-revision-notes", "mb-ap-phys1-1.5-checklist"]
next: "mb-ap-phys1-1.5-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its axes. Use them for every sign."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This is the algebra-based course, so no calculus is needed. Use g = 9.8 m/s² and ignore air resistance. Set your calculator to degrees. Keep unrounded values in your calculator until the end. Any scientific calculator is fine.

## Question 1 (multiple choice · foundation)

Take **+x east and +y north**, looking down on a flat floor. A toy car moves at 12 m/s in a direction 30° south of east. Which pair gives its velocity components (v_x, v_y)?

- (A) (+10.4 m/s, −6.0 m/s)
- (B) (+6.0 m/s, −10.4 m/s)
- (C) (+10.4 m/s, +6.0 m/s)
- (D) (+6.0 m/s, −6.0 m/s)

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The angle is measured from the +x (east) axis, so the east component is next to it: v_x = 12 cos 30° = +10.4 m/s. The north–south component is opposite the angle: 12 sin 30° = 6.0 m/s, and it points **south**, so v_y = −6.0 m/s. Check: √(10.4² + 6.0²) = 12 m/s.

- (B) swaps sin and cos, as if the angle were measured from the y-axis.
- (C) gets the sizes right but ignores that south is the −y direction.
- (D) splits the 12 m/s equally between the axes. Components only add to the magnitude through Pythagoras, never by simple sharing.
</details>

## Question 2 (multiple choice · core)

Take **+y up**. A ball is thrown from level ground at an angle above the horizontal. Which statement about the ball at the highest point of its path is correct?

- (A) Its velocity is zero and its acceleration is zero.
- (B) Its velocity is zero and its acceleration is 9.8 m/s² downward.
- (C) Its velocity is horizontal and not zero, and its acceleration is 9.8 m/s² downward.
- (D) Its velocity is horizontal and not zero, and its acceleration is zero.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** At the top, only the vertical component v_y is zero. The horizontal component never changes (a_x = 0), so the ball is still moving sideways at v_x0. Gravity still acts, so a_y = −9.8 m/s² throughout the flight.

- (A) makes both classic errors: it forgets v_x, and it confuses "v_y = 0" with "no acceleration".
- (B) forgets the horizontal motion. Only a ball thrown straight up is momentarily at rest at the top.
- (D) has the velocity right, but if the acceleration were zero at the top, v_y would stay zero and the ball would never come down.
</details>

## Question 3 (multiple choice · core)

Take **+x horizontal and +y up**. A ball rolls off a horizontal table at speed v and lands a horizontal distance d from the table. The experiment is repeated with the table **four times as high** and the ball leaving the edge at speed **2v**. How far from the table does it land now?

- (A) 2d
- (B) 4d
- (C) 8d
- (D) 16d

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The fall time depends only on the height: h = ½ g t², so t = √(2h / g) and t is proportional to √h. Four times the height gives √4 = 2 times the time. The horizontal distance is x = v_x0 t, so it is multiplied by 2 (speed) × 2 (time) = 4.

- (A) accounts for the doubled speed but forgets that the higher table also gives a longer fall time.
- (C) treats the fall time as proportional to h (×4) instead of √h (×2).
- (D) squares both factors, as if distance depended on v² and on h. That is not what x = v_x0 √(2h / g) says.
</details>

## Question 4 (calculation · core)

Take **+x east and +y north**. A floor-cleaning robot moves 3.0 m due east. It then turns and moves 4.0 m in a direction 30° west of north. The two moves take 12 s in total.

(a) Find the size and direction of the robot's resultant displacement.
(b) Find its average velocity and its average speed for the 12 s.

<details>
<summary>Worked solution</summary>

**(a)**

1. Move 1: A_x = +3.0 m, A_y = 0.
2. Move 2: the angle is measured from **north** (the y-axis), so the y-component is next to it. B_x = −4.0 sin 30° = −2.0 m (west). B_y = +4.0 cos 30° = +3.46 m.
3. Resultant: R_x = 3.0 − 2.0 = +1.0 m; R_y = 0 + 3.46 = +3.46 m.
4. Size: R = √(1.0² + 3.46²) = **3.6 m**. Both components are positive, so the direction is tan⁻¹(3.46 ÷ 1.0) = **74° north of east**.

**(b)** Average velocity = 3.61 m ÷ 12 s = **0.30 m/s at 74° north of east**. Average speed = (3.0 + 4.0) m ÷ 12 s = **0.58 m/s**.

Suggested mark points (4): 1 for the components of move 2 with correct signs (cos for the north component); 1 for adding components; 1 for 3.6 m at 74° north of east; 1 for both averages, with the average velocity given a direction.

Common error: adding the lengths, 3.0 + 4.0 = 7.0 m. That is the distance travelled, not the displacement.
</details>

## Question 5 (calculation · core)

Take **+x horizontal away from the cliff and +y up**, with the origin at the foot of the cliff. In a quarry, a stone is thrown horizontally at 8.0 m/s from the top of a vertical rock face 25 m high. It lands on flat ground below.

(a) How long is the stone in the air?
(b) How far from the foot of the rock face does it land?
(c) Find the stone's velocity just before it lands, as a size and a direction.

<details>
<summary>Worked solution</summary>

**(a)** Vertical motion: v_y0 = 0, y₀ = 25 m, a_y = −9.8 m/s². It lands when y = 0: 0 = 25 − 4.9 t², so t = √(25 ÷ 4.9) = **2.26 s** (2.3 s to 2 s.f.).

**(b)** Horizontal motion at constant velocity: x = 8.0 m/s × 2.259 s = **18 m**.

**(c)** v_x = 8.0 m/s (unchanged). v_y = −9.8 × 2.259 = −22.1 m/s. Size = √(8.0² + 22.1²) = **24 m/s** (23.5 m/s). Direction: tan⁻¹(22.1 ÷ 8.0) = **70° below the horizontal**.

Suggested mark points (5): 1 for using only the vertical motion to find t; 1 for 2.3 s; 1 for 18 m; 1 for v_y = −22 m/s with v_x unchanged; 1 for 24 m/s at 70° below the horizontal.

Common error: dividing height by horizontal speed, 25 ÷ 8.0 = 3.1 s. The horizontal speed has nothing to do with how long the stone takes to fall.
</details>

## Question 6 (constructed response · stretch)

Take **+x horizontal and +y up**. A student releases a steel ball from the same mark on a short ramp fixed to the edge of an adjustable table, so it leaves the edge horizontally. She changes the table height h and measures the horizontal landing distance d from a point directly below the edge. Her averaged results (rounded to the nearest millimetre) are:

| h (m) | 0.20 | 0.40 | 0.60 | 0.80 | 1.00 |
|---|---|---|---|---|---|
| d (m) | 0.303 | 0.429 | 0.525 | 0.606 | 0.678 |

She claims that the ball leaves the ramp with the same speed every time, and that d is proportional to √h.

(a) Describe how she should make the measurements so that the launch speed stays constant and d is measured accurately.
(b) Explain what she should plot to get a straight line if the claim is true, and why.
(c) Use the data to find the slope of that line and the ball's launch speed.
(d) State whether the data support the claim, with a reason.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Release the ball from rest at the same marked point on the ramp each time, without pushing it, and keep the ramp fixed to the table so its angle and exit edge do not change. Measure h with a metre rule held vertically. Use a plumb line to mark the point on the floor directly below the edge, and carbon paper to record each landing spot. Repeat each height several times and average d.

**(b)** From the vertical motion, h = ½ g t², so t = √(2h / g). Horizontally, d = v_x0 t = v_x0 √(2 / g) × √h. If v_x0 is constant, d is proportional to √h. So plot **d (vertical axis, m) against √h (horizontal axis, m^½)**. The points should lie on a straight line through the origin with slope v_x0 √(2 / g).

**(c)**

| h (m) | 0.20 | 0.40 | 0.60 | 0.80 | 1.00 |
|---|---|---|---|---|---|
| √h (m^½) | 0.447 | 0.632 | 0.775 | 0.894 | 1.000 |
| d (m) | 0.303 | 0.429 | 0.525 | 0.606 | 0.678 |

Slope from the first and last points = (0.678 − 0.303) ÷ (1.000 − 0.447) = **0.678 m^½**. Since √(2 / g) = √(2 ÷ 9.8) = 0.452 s/m^½, the launch speed is v_x0 = 0.678 ÷ 0.452 = **1.5 m/s**.

**(d)** The data **support** the claim. The ratio d ÷ √h is 0.678 m^½ for every row (to within rounding), so the points lie on one straight line through the origin. A constant ratio means a constant launch speed. By contrast, d ÷ h falls from 1.5 to 0.68, so d is **not** proportional to h.

| Point | What earns it |
|---|---|
| 1 | Same release point and fixed ramp, plus a sensible way to measure d (plumb line, carbon paper or repeats) |
| 1 | Derives d = v_x0 √(2h / g) by linking the two axes through t |
| 1 | Plots d against √h and states the expected straight line through the origin |
| 1 | Slope about 0.68 m^½ and launch speed 1.5 m/s |
| 1 | Supports the claim **because** d ÷ √h is constant (straight line through the origin) |

**Alternative method.** Plotting d² against h also gives a straight line through the origin, with slope 2v_x0² / g = 0.46 m. This earns full credit if the slope is linked correctly to v_x0. A slope from a best-fit line through all five points (0.678 m^½) is better practice than a two-point slope.
</details>

## Question 7 (constructed response · stretch)

Take **+x horizontal in the direction of travel and +y up**. Two identical balls are launched from level ground at the same speed, v₀ = 15.0 m/s. Ball P is launched at 30.0° above the horizontal and ball Q at 60.0°. Both land on the same level ground.

A student says: "Ball Q will land farther away, because it stays in the air longer."

(a) Starting from the component equations, derive an expression for the range R in terms of v₀, θ and g.
(b) Calculate the time of flight and the range of each ball.
(c) Evaluate the student's claim.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Components: v_x0 = v₀ cos θ and v_y0 = v₀ sin θ. Vertically, the ball returns to y = 0 when 0 = v_y0 t − ½ g t², so t = 2v₀ sin θ / g. Horizontally, R = v_x0 t, so **R = 2v₀² sin θ cos θ / g**.

**(b)**

| Ball | v_x0 (m/s) | v_y0 (m/s) | t = 2v_y0 / g (s) | R = v_x0 t (m) |
|---|---|---|---|---|
| P (30.0°) | 13.0 | 7.50 | 1.53 | 19.9 |
| Q (60.0°) | 7.50 | 13.0 | 2.65 | 19.9 |

**(c)** The claim is **incorrect**. Ball Q does stay in the air longer, 1.73 times as long as P. But it moves across more slowly: its horizontal component is 7.50 m/s, not 13.0 m/s. Range depends on the **product** of time and horizontal speed. In R = 2v₀² sin θ cos θ / g, swapping sin θ and cos θ (30° and 60°) leaves the product unchanged, so both balls land 19.9 m away. Q goes three times higher (8.61 m against 2.87 m), but not farther.

| Point | What earns it |
|---|---|
| 1 | Time of flight 2v₀ sin θ / g from the vertical motion |
| 1 | R = 2v₀² sin θ cos θ / g by combining with the horizontal motion |
| 1 | Correct times (1.53 s and 2.65 s) |
| 1 | Both ranges 19.9 m |
| 1 | Rejects the claim because a longer time is offset by a smaller horizontal velocity |

Using the identity 2 sin θ cos θ = sin 2θ is fine but not needed. An answer that reaches the conclusion from the numbers in (b) alone, with the trade-off explained, earns the last point.
</details>

## How did you do?

- **Q1 or Q4 wrong:** re-read "Resolving a vector into components", the warning about cos and sin, and Worked example 1 in the [study guide](/advanced-course-resources/physics-1/1-5-vectors-motion-two-dimensions-study-guide/).
- **Q2 wrong:** study Figure 2 and Worked example 3. Only v_y is zero at the top.
- **Q3 wrong:** go back to "Predicting changes without starting again".
- **Q5 wrong:** follow Worked example 2 step by step. Find the time from the vertical motion first.
- **Q6 or Q7 incomplete:** your reasoning needs the link between the axes: the shared time t. See "Planning a launch experiment".

Then tick off the [topic checklist](/advanced-course-resources/physics-1/1-5-vectors-motion-two-dimensions-checklist/).
