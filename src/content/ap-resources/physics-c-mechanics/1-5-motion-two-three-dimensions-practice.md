---
resourceId: "mb-ap-physcm-1.5-practice"
title: "Motion in Two or Three Dimensions: Practice Questions (Physics C: Mechanics 1.5)"
description: "Seven original Marlbridge calculus-based practice questions on motion in a plane: vector derivatives, independent components, non-uniform acceleration, projectiles and video data."
course: "physics-c-mechanics"
unit: 1
topics: ["1.5"]
resourceType: "practice-questions"
prerequisites:
  - "Resolving vectors into components (Topic 1.1)"
  - "Differentiating and integrating polynomials with initial conditions (Topic 1.2)"
prerequisiteResources: ["mb-ap-physcm-1.5-study-guide"]
learningObjectives:
  - "Differentiate and integrate position, velocity and acceleration component by component"
  - "Explain why a change in one component leaves the perpendicular component unchanged"
  - "Solve projectile problems where launch and landing heights differ"
  - "Derive the trajectory and level-ground range, and predict factors of change"
  - "Linearise video-analysis data to find g and a launch velocity, and design a test of independent components"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculus by hand; calculator for arithmetic and trigonometry (degrees). g = 9.8 m/s². Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-1.5-study-guide", "mb-ap-physcm-1.5-revision-notes", "mb-ap-physcm-1.5-checklist"]
next: "mb-ap-physcm-1.5-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its axes. Coefficients in r(t) and v(t) carry units."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. Positions are in m, velocities in m/s, accelerations in m/s² and t in s, so each coefficient carries the unit that makes its term correct. Use g = 9.8 m/s² and ignore air resistance. Round final answers to 2 significant figures unless told otherwise.

## Question 1 (multiple choice · foundation)

Take **+x east and +y north** on a sheet of frictionless ice. A puck slides east at a steady 3.0 m/s. From t = 0, a constant push gives it an acceleration of 0.50 m/s² **north**. Which statement describes the motion after t = 0?

- (A) The east component of velocity stays 3.0 m/s, and the path curves northward as a parabola.
- (B) The puck turns until it moves due north, then carries on north.
- (C) The east component falls as the north component grows, so the speed stays 3.0 m/s.
- (D) The puck moves in a straight line pointing between east and north.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** a_x = 0, so v_x = 3.0 m/s for ever. Along y, v_y = 0.50t and y = 0.25t². With x = 3.0t, the path is y = 0.25(x/3.0)², a parabola. A change in the north motion does not change the east motion.

- (B) assumes the push replaces the original motion. Nothing acts along x, so v_x never falls to zero.
- (C) assumes the two components share a fixed speed. They are independent: v_x stays 3.0 m/s while v_y grows, so the speed rises.
- (D) would be true only if the puck started from rest. Here v_x is constant and v_y grows, so the direction keeps changing.
</details>

## Question 2 (multiple choice · core)

Take **+x east and +y north**. A particle's position is r(t) = (1.0t³) i + (8.0t − 2.0t²) j. What is its speed at t = 1.0 s?

- (A) 5.0 m/s
- (B) 6.1 m/s
- (C) 7.0 m/s
- (D) 7.2 m/s

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** v = dr/dt = (3.0t²) i + (8.0 − 4.0t) j. At t = 1.0 s, v = 3.0 i + 4.0 j m/s, so the speed is √(3.0² + 4.0²) = 5.0 m/s.

- (B) is the size of the position vector, |r(1.0)| = √(1.0² + 6.0²) ≈ 6.1. Position is not velocity.
- (C) adds the components as numbers, 3.0 + 4.0. Perpendicular components combine by Pythagoras.
- (D) differentiates twice: a = 6.0 i − 4.0 j has size ≈ 7.2 m/s², an acceleration, not a speed.
</details>

## Question 3 (multiple choice · core)

Take **+x horizontal and +y up**. A ball rolls off a horizontal table top at speed v₀ and lands a horizontal distance D from the table's edge. A second ball rolls off a table **four times as high** at speed **2v₀**. How far from its table's edge does the second ball land?

- (A) 2D
- (B) 4D
- (C) 8D
- (D) 16D

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The fall starts with v_y0 = 0, so h = ½gt² and t = √(2h/g). Four times the height gives √4 = 2 times the fall time. The horizontal distance is v₀t, so it changes by 2 × 2 = 4: the ball lands at 4D.

- (A) doubles the speed but ignores the longer fall. The fall time depends on the height.
- (C) assumes the fall time is proportional to the height (4 times). Because h ∝ t², the time grows only as √h.
- (D) squares both factors (2² × 4). Distance is proportional to v₀, not v₀², and to √h, not h.
</details>

## Question 4 (calculation · core)

Take **+x horizontal and +y up**, origin at the launch point. A small drone moves in a vertical plane with velocity v(t) = (0.75t²) i + (4.0 − 2.0t) j. It is at the origin at t = 0.

(a) Find a(t), and the size and direction of the acceleration at t = 2.0 s.
(b) Find the time at which the drone is moving horizontally, and its speed and position then.
(c) Find its position at t = 4.0 s.

<details>
<summary>Worked solution</summary>

1. **(a)** a = dv/dt = (1.5t) i − 2.0 j. At t = 2.0 s, a = 3.0 i − 2.0 j m/s². Size √(3.0² + 2.0²) = **3.6 m/s²**, at tan⁻¹(2.0 ÷ 3.0) = **34° below the +x direction**.
2. **(b)** Moving horizontally means v_y = 0: 4.0 − 2.0t = 0, so **t = 2.0 s**. Then v = 0.75 × 4.0 = **3.0 m/s** (all horizontal).
3. Integrate with r(0) = 0: x = 0.25t³ and y = 4.0t − 1.0t². At 2.0 s: **r = 2.0 i + 4.0 j m**.
4. **(c)** At 4.0 s: x = 0.25 × 64 = 16 m; y = 16 − 16 = 0. So **r = 16 i m**: back at launch height, 16 m away.

Suggested mark points (4): 1 for a(t) and its size and direction at 2.0 s; 1 for t = 2.0 s from v_y = 0 with the speed; 1 for integrating each component with the initial condition; 1 for r at 4.0 s.

Common error: x = ½a_x t² with a_x = 3.0 m/s² (its value at 2.0 s) gives 6.0 m, not 2.0 m. a_x changes, so integrate.
</details>

## Question 5 (constructed response · core)

Take **+x horizontal toward a wall and +y up**, origin at the launch point on level ground. A ball is kicked at 18.0 m/s, 50.0° above the horizontal, toward a vertical wall 20.0 m away.

(a) Find how high above the ground the ball strikes the wall.
(b) Is the ball rising or falling when it strikes the wall? Justify your answer with a calculation.
(c) Find the ball's speed as it strikes the wall.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**Components.** v_x0 = 18.0 cos 50.0° = 11.57 m/s; v_y0 = 18.0 sin 50.0° = 13.79 m/s. a_x = 0, a_y = −9.8 m/s².

**(a)** From the x-motion: t = 20.0 ÷ 11.57 = 1.73 s. Use this same t in the y-motion: y = 13.79 × 1.73 − 4.9 × 1.73² = **9.2 m**.

**(b)** v_y = 13.79 − 9.8 × 1.73 = **−3.2 m/s**. The negative sign (with +y up) means the ball is **falling**. Equivalently, it peaked at t = 13.79 ÷ 9.8 = 1.41 s, before reaching the wall.

**(c)** v_x is still 11.57 m/s. Speed = √(11.57² + 3.15²) = **12 m/s**.

| Point | What earns it |
|---|---|
| 1 | Resolves the launch velocity into 11.6 m/s and 13.8 m/s components |
| 1 | Finds t from the x-motion and uses the **same** t in the y-motion |
| 1 | Height 9.2 m |
| 1 | (b) Falling, supported by a negative v_y or by t_top < t_wall |
| 1 | (c) Speed 12 m/s from both components (carry forward an incorrect v_y) |

**Alternative for (a).** Putting x = 20.0 m into the trajectory equation (Question 6) gives the same height and earns the second and third points.
</details>

## Question 6 (constructed response · core)

Take **+x horizontal and +y up**, origin at the launch point on level ground. A projectile is launched with speed v₀ at angle θ above the horizontal. Its acceleration is a = −g j.

(a) Starting from the acceleration, derive x(t) and y(t), stating the initial conditions you use.
(b) Show that the path is a parabola, y = x tan θ − gx² / (2v₀² cos²θ).
(c) Derive the range R on level ground in terms of v₀, θ and g.
(d) A student launches a second projectile at the same angle but with a speed 30% greater. By what factor does the range change? By what factor does the flight time change?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** x: v_x = v₀ cos θ + ∫₀ᵗ 0 dt = v₀ cos θ, so x = (v₀ cos θ)t, using x(0) = 0 and v_x(0) = v₀ cos θ.
y: v_y = v₀ sin θ + ∫₀ᵗ (−g) dt = v₀ sin θ − gt, so y = (v₀ sin θ)t − ½gt², using y(0) = 0 and v_y(0) = v₀ sin θ.

**(b)** From the x equation, t = x / (v₀ cos θ). Substitute into y: y = x tan θ − gx² / (2v₀² cos²θ). This is y = bx − cx² with constants b and c, which is a **parabola**.

**(c)** Land when y = 0 (and t ≠ 0): t = 2v₀ sin θ / g. Then R = v₀ cos θ × 2v₀ sin θ / g = **v₀² sin 2θ / g**.

**(d)** R ∝ v₀², so the range changes by 1.30² = **1.69 (about 1.7)**. The flight time is proportional to v₀, so it changes by **1.3**.

| Point | What earns it |
|---|---|
| 1 | (a) Integrates both components with the stated initial conditions |
| 1 | (b) Eliminates t correctly to reach the trajectory equation |
| 1 | (b) Identifies the y = bx − cx² form as a parabola |
| 1 | (c) Flight time from y = 0 and range v₀² sin 2θ / g (2v₀² sin θ cos θ / g is equally acceptable) |
| 1 | (d) Range factor 1.69 and time factor 1.3, each linked to the power of v₀ |

**Alternative for (c).** Solving the trajectory equation for the non-zero x with y = 0 also earns the point.
</details>

## Question 7 (data analysis and design · stretch)

Take **+x horizontal and +y up**, origin at the launch point. A student films a ball launched upward at an angle and measures its position from the video every 0.10 s, starting 0.10 s after launch:

| t (s) | 0.10 | 0.20 | 0.30 | 0.40 | 0.50 | 0.60 |
|---|---|---|---|---|---|---|
| x (m) | 0.322 | 0.639 | 0.963 | 1.278 | 1.601 | 1.918 |
| y (m) | 0.404 | 0.702 | 0.913 | 1.013 | 1.027 | 0.932 |

(a) Explain how the x data show that a_x = 0, and find v_x.
(b) Assuming a_y = −g, show that y/t = v_y0 − (g/2)t.
(c) Calculate y/t for each reading. Use a graph of y/t against t to find g and v_y0.
(d) Describe an experiment, using the same video method, to test the claim that a ball's vertical motion does not depend on its horizontal speed.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Each 0.10 s step increases x by about 0.32 m, so x rises linearly with t. A straight x–t graph has constant slope, so v_x is constant and a_x = 0. The slope (best-fit line, or x/t for each reading) gives **v_x = 3.2 m/s**.

**(b)** Integrating a_y = −g twice with y(0) = 0 gives y = v_y0 t − ½gt². Divide by t: **y/t = v_y0 − (g/2)t**, a straight line with slope −g/2 and intercept v_y0.

**(c)** y/t values: 4.04, 3.51, 3.04, 2.53, 2.05, 1.55 m/s. These fall on a straight line. The best-fit slope is about −4.95 m/s², so **g ≈ 9.9 m/s²** (accept 9.6 to 10.2 m/s²). The intercept is **v_y0 ≈ 4.5 m/s**. The value of g is within about 1% of 9.8 m/s², which supports a_y = −g.

**(d)** Example procedure. Roll the ball off a ramp whose end is horizontal and at a fixed height. Release it from different points on the ramp to change the launch speed. Film each run against a metre scale, camera square to the plane of motion. Find v_x from the x–t slope and the fall time from the y data. If the fall time is the same for every launch speed while the landing distance grows in proportion to v_x, the evidence supports independence. Repeat each speed and average.

| Point | What earns it |
|---|---|
| 1 | (a) Links equal x-steps (linear x–t) to constant v_x, and gives v_x ≈ 3.2 m/s |
| 1 | (b) Derives y/t = v_y0 − (g/2)t from integration or the constant-acceleration equation |
| 1 | (c) Correct y/t values and g from −2 × slope, in the accepted range |
| 1 | (c) v_y0 ≈ 4.5 m/s from the intercept |
| 1 | (d) Varies horizontal speed at fixed height, keeps other factors the same, and states what result would support the claim |

**Alternative for (c).** The first and last y/t values give a slope of (1.55 − 4.04) ÷ 0.50 = −4.98 m/s², so g ≈ 10.0 m/s². This earns the point, but a best-fit line uses all the data.
</details>

## How did you do?

- **Q1 or Q3 wrong:** re-read "One motion, two one-dimensional problems" and the patterns under "Projectile motion: a special case" in the [study guide](/advanced-course-resources/physics-c-mechanics/1-5-motion-two-three-dimensions-study-guide/).
- **Q2 or Q4 wrong:** revisit "Position, velocity and acceleration as vectors" and Worked example 2. Differentiate or integrate one component at a time.
- **Q5 or Q6 incomplete:** work through Worked example 1 and the projectile derivation. Use the same t in both components.
- **Q7 incomplete:** see "Investigating motion in a plane". Say what you vary, what you keep the same and what result would support the claim.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/1-5-motion-two-three-dimensions-checklist/).
