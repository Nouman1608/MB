---
resourceId: "mb-ap-physcm-u1-diagnostic"
title: "Kinematics: Unit Diagnostic (Physics C: Mechanics Unit 1)"
description: "A 30-minute check of calculus-based kinematics: ten original questions on vectors, derivatives and integrals of motion, graphs, reference frames and projectiles, each linked to a topic guide."
course: "physics-c-mechanics"
unit: 1
topics: []
resourceType: "unit-diagnostic"
prerequisites:
  - "You have studied some or all of Topics 1.1 to 1.5"
  - "Differentiating and integrating polynomials"
learningObjectives:
  - "Find out which Unit 1 topics you can already handle and which ones to revisit"
  - "Test vector components, magnitudes and relative velocities in two dimensions"
  - "Test differentiation and integration of position, velocity and acceleration with initial conditions"
  - "Test reading slopes, curvature and factors of change from graphs and equations"
  - "Test projectile motion as two independent one-dimensional motions"
skills: ["1", "2", "3"]
studyMinutes: 30
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculus by hand; a calculator for arithmetic, square roots and trigonometry (degrees). We use g = 9.8 m/s²; answers with g = 10 m/s² are equally acceptable"
related: ["mb-ap-physcm-u1-review", "mb-ap-physcm-1.2-study-guide", "mb-ap-physcm-1.3-study-guide", "mb-ap-physcm-1.5-study-guide"]
next: "mb-ap-physcm-u1-review"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Ten short questions, one or more for every Unit 1 topic. Each answer links to the guide for that topic."
  - "It finds gaps. It is not a past exam, it is not calibrated and it gives no predicted score."
  - "Work without notes for about 30 minutes, then mark yourself and use the table at the end."
  - "Questions 1 to 7 are multiple choice; Questions 8 to 10 need short written working."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**What this is for.** This diagnostic helps you decide which Unit 1 (Kinematics) topics to revisit before you move on. It has one question for each topic, two for the larger Topics 1.2 and 1.3, and three short written questions. These are **original Marlbridge practice questions**, not past exam questions. The set is not calibrated against real exam results, so it **does not give a predicted score**. Treat each wrong answer as a pointer to one topic, not as a grade.

**How to sit it.** Allow about 30 minutes. Close your notes. A calculator is fine for arithmetic and trigonometry (the course exam allows a four-function, scientific or graphing calculator), but do the calculus by hand. Use g = 9.8 m/s² and ignore air resistance; g = 10 m/s² gives answers that round the same way or very close. Positions are in m, velocities in m/s, accelerations in m/s² and t in s, so each numerical coefficient carries the unit that makes its term correct. Every question states its axes.

## Question 1 (multiple choice · 1.1)

Take **+x east and +y north**. Two displacements are A = (2.0 î − 5.0 ĵ) m and B = (−6.0 î + 2.0 ĵ) m. What is the magnitude of A − B?

- (A) 5.0 m
- (B) 10.6 m
- (C) 11.7 m
- (D) 15 m

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Subtract component by component: A − B = (2.0 − (−6.0)) î + (−5.0 − 2.0) ĵ = (8.0 î − 7.0 ĵ) m. Its magnitude is √(8.0² + 7.0²) = √113 = 10.6 m.

- (A) is |A + B| = |−4.0 î − 3.0 ĵ| = 5.0 m. It adds the vectors instead of subtracting them.
- (C) adds the magnitudes, |A| + |B| = 5.39 + 6.32 = 11.7 m. Magnitudes add only when two vectors point the same way.
- (D) adds the sizes of the components, 8.0 + 7.0. Perpendicular components combine by Pythagoras.

**If you missed this:** read "Adding vectors by components" in the [Topic 1.1 study guide](/advanced-course-resources/physics-c-mechanics/1-1-scalars-vectors-study-guide/).
</details>

## Question 2 (multiple choice · 1.2)

Take **+x to the right**. A particle moves with x(t) = 4.0t² − 1.0t³ for t ≥ 0. What is its acceleration at the moment (after t = 0) when it is momentarily at rest?

- (A) 0
- (B) +8.0 m/s²
- (C) −8.0 m/s²
- (D) −16 m/s²

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** v_x = dx/dt = 8.0t − 3.0t², which is zero at t = 8.0/3.0 = 2.67 s. Then a_x = dv_x/dt = 8.0 − 6.0t = 8.0 − 16 = −8.0 m/s².

- (A) assumes that zero velocity means zero acceleration. The velocity is still changing at that instant, from positive to negative.
- (B) is a_x at t = 0, not at the moment the particle stops.
- (D) evaluates only the −6.0t term and drops the constant 8.0.

**If you missed this:** read "From averages to derivatives" and Worked example 1 in the [Topic 1.2 study guide](/advanced-course-resources/physics-c-mechanics/1-2-displacement-velocity-acceleration-study-guide/).
</details>

## Question 3 (multiple choice · 1.2)

Take **+x to the right**. A particle is at x₀ = +3.0 m at t = 0, and its velocity is v_x(t) = 6.0 − 2.0t. Where is it at t = 5.0 s?

- (A) x = +5.0 m
- (B) x = +8.0 m
- (C) x = +12 m
- (D) x = +13 m

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Integrate with the initial condition: x(t) = 3.0 + ∫₀ᵗ (6.0 − 2.0t) dt = 3.0 + 6.0t − 1.0t². At t = 5.0 s, x = 3.0 + 30 − 25 = +8.0 m.

- (A) is the displacement, x(5.0) − x₀ = +5.0 m. The integral gives a change in position; you must add x₀.
- (C) is the position at t = 3.0 s, where v_x = 0 and the particle turns around. It then moves back 4.0 m.
- (D) is the distance travelled, 9.0 m out plus 4.0 m back. Distance is not a position.

**If you missed this:** read "From derivatives back to position: integration" in the [Topic 1.2 study guide](/advanced-course-resources/physics-c-mechanics/1-2-displacement-velocity-acceleration-study-guide/).
</details>

## Question 4 (multiple choice · 1.3)

Take **+x to the right**. At t = 2.0 s, an object's position–time graph has a **negative slope** and **curves upward** (it is concave up). What is the object doing at that instant?

- (A) Moving in the −x direction and speeding up
- (B) Moving in the −x direction and slowing down
- (C) Moving in the +x direction and slowing down
- (D) Momentarily at rest, with a positive acceleration

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The slope of the x–t graph is v_x, so v_x < 0: the object moves in −x. Upward curvature means a_x = d²x/dt² > 0. The velocity and acceleration have opposite signs, so the object slows down.

- (A) reads "curves upward" as "speeding up". Curvature gives the sign of a_x; you must compare it with the sign of v_x.
- (C) takes the positive acceleration as the direction of motion. The direction of motion is the sign of the slope.
- (D) would need a flat tangent (zero slope). Here the slope is negative.

**If you missed this:** read "The graph links: slopes down, areas up" in the [Topic 1.3 study guide](/advanced-course-resources/physics-c-mechanics/1-3-representing-motion-study-guide/).
</details>

## Question 5 (multiple choice · 1.3)

A cart starts from rest and speeds up with constant acceleration a. After a distance d its speed is v. In a second run, the cart starts from rest with acceleration a/2 over the **same distance** d. What is its final speed?

- (A) v/4
- (B) v/2
- (C) v/√2
- (D) v

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The equation with no t gives v² = 2ad, so v ∝ √a for a fixed distance. Halving a multiplies v by 1/√2 ≈ 0.71.

- (A) squares the factor instead of taking its square root.
- (B) assumes v ∝ a. That is true for the same **time** (v = at), but here the distance is fixed and the second run takes longer.
- (D) assumes the final speed depends only on the distance.

**If you missed this:** read "Functional dependence and factors of change" in the [Topic 1.3 study guide](/advanced-course-resources/physics-c-mechanics/1-3-representing-motion-study-guide/).
</details>

## Question 6 (multiple choice · 1.4)

Take **+x east and +y north**, with velocities measured relative to still water W. Boat A moves at 6.0 m/s north. Boat B moves at 8.0 m/s east. What is the velocity of B as measured by an observer on A?

- (A) 10 m/s, 37° south of east
- (B) 10 m/s, 37° north of east
- (C) 14 m/s, between east and north
- (D) 2.0 m/s east

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** v_BA = v_BW + v_WA = v_BW − v_AW = (8.0 î) − (6.0 ĵ) = (8.0 î − 6.0 ĵ) m/s. Magnitude √(8.0² + 6.0²) = 10 m/s; direction tan⁻¹(6.0/8.0) = 37° south of east.

- (B) adds v_AW instead of subtracting it, which flips the north–south component.
- (C) adds the speeds as numbers. The velocities are perpendicular, so combine components.
- (D) subtracts the speeds as numbers, as if the boats moved along one line.

**If you missed this:** read "Notation: subscripts that name the observer" in the [Topic 1.4 study guide](/advanced-course-resources/physics-c-mechanics/1-4-reference-frames-relative-motion-study-guide/).
</details>

## Question 7 (multiple choice · 1.5)

Take **+x horizontal and +y up**. A ball is launched over level ground at 20 m/s, 60° above the horizontal. At the highest point of its path, what are its speed and its acceleration?

- (A) Speed 0; acceleration 0
- (B) Speed 0; acceleration 9.8 m/s² downward
- (C) Speed 10 m/s; acceleration 9.8 m/s² downward
- (D) Speed 17 m/s; acceleration 9.8 m/s² downward

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Only v_y is zero at the top. v_x never changes, because a_x = 0: v_x = 20 cos 60° = 10 m/s. The acceleration is (0, −9.8) m/s² at every point of the flight.

- (A) and (B) set the whole speed to zero. Only the vertical component vanishes.
- (D) uses 20 sin 60° = 17 m/s, the **vertical** component at launch, which is exactly the one that has become zero.

**If you missed this:** read "Projectile motion: a special case" in the [Topic 1.5 study guide](/advanced-course-resources/physics-c-mechanics/1-5-motion-two-three-dimensions-study-guide/).
</details>

## Question 8 (short answer · 1.2)

Take **+x forward**. A particle passes the origin at t = 0 with v_x0 = +4.0 m/s. Its acceleration is a_x(t) = −1.5t.

(a) Find v_x(t).
(b) Find the time when the particle stops.
(c) Find its position at that moment.
(d) A student uses v_x² = v_x0² + 2a_x Δx with the average acceleration over the stop, −1.73 m/s², and gets 4.6 m. Explain why this is wrong.

<details>
<summary>Answer and explanation</summary>

**(a)** v_x = 4.0 + ∫₀ᵗ (−1.5t) dt = **4.0 − 0.75t²** (m/s).

**(b)** 4.0 − 0.75t² = 0 gives t² = 5.33, so **t = 2.3 s** (2.31 s).

**(c)** x = ∫₀ᵗ (4.0 − 0.75t²) dt = 4.0t − 0.25t³. At t = 2.31 s: x = 9.24 − 3.08 = **6.2 m**.

**(d)** That equation comes from integrating a **constant** acceleration. Here a_x grows in size with time. The particle keeps most of its speed early on and slows sharply only near the end, so it travels further than a uniform slowdown would. Integrating v_x(t), as in (c), is the only valid method.

**If you missed this:** work through Worked example 2 in the [Topic 1.2 study guide](/advanced-course-resources/physics-c-mechanics/1-2-displacement-velocity-acceleration-study-guide/).
</details>

## Question 9 (short answer · 1.4)

Take **+x east and +y north**, with all values measured relative to the ground G. Car P drives north at a constant 15 m/s. Car Q drives west at 20 m/s.

(a) Find v_QP, the velocity of Q relative to P, in unit vector notation and as a magnitude and direction.
(b) Car Q now brakes. In the ground frame its acceleration is 3.0 m/s² east, while P keeps a constant velocity. State Q's acceleration as measured from P, and give the reason.

<details>
<summary>Answer and explanation</summary>

**(a)** v_QP = v_QG + v_GP = v_QG − v_PG = (−20 î) − (15 ĵ) = **(−20 î − 15 ĵ) m/s**. Magnitude √(20² + 15²) = **25 m/s**, at tan⁻¹(15/20) = **37° south of west**.

**(b)** **3.0 m/s² east**, the same as in the ground frame. P moves at constant velocity, so P's frame is inertial. Differentiating v_QP = v_QG − v_PG gives a_QP = a_QG − 0.

**If you missed this:** read "Converting measurements between frames" in the [Topic 1.4 study guide](/advanced-course-resources/physics-c-mechanics/1-4-reference-frames-relative-motion-study-guide/).
</details>

## Question 10 (short answer · 1.5)

Take **+x horizontal and +y up**, origin at a nozzle at ground level. A water jet leaves the nozzle at 14 m/s, 40° above the horizontal. It hits a window 3.0 m above the ground while it is **coming down**.

(a) Find the two components of the launch velocity.
(b) Find the time at which the water hits the window.
(c) Find the horizontal distance from the nozzle to the window.

<details>
<summary>Answer and explanation</summary>

**(a)** v_x0 = 14 cos 40° = **10.7 m/s**; v_y0 = 14 sin 40° = **9.0 m/s**.

**(b)** y = 9.0t − 4.9t² = 3.0, so 4.9t² − 9.0t + 3.0 = 0. The roots are t = 0.44 s (going up) and t = 1.40 s (coming down). The question says coming down, so **t = 1.4 s**. Check: the top is at 9.0/9.8 = 0.92 s, and 1.40 s is later.

**(c)** a_x = 0, so x = 10.7 × 1.40 = **15 m**. With g = 10 m/s², you get 1.36 s and 15 m.

**If you missed this:** read "One motion, two one-dimensional problems" and Worked example 1 in the [Topic 1.5 study guide](/advanced-course-resources/physics-c-mechanics/1-5-motion-two-three-dimensions-study-guide/).
</details>

## Your next step

Mark each question right or wrong. For short answers, count a question as missed if any part went wrong.

| Topic | Question(s) | If you missed it, read |
|---|---|---|
| 1.1 Scalars and Vectors | 1 | [Topic 1.1 study guide](/advanced-course-resources/physics-c-mechanics/1-1-scalars-vectors-study-guide/) |
| 1.2 Displacement, Velocity, and Acceleration | 2, 3, 8 | [Topic 1.2 study guide](/advanced-course-resources/physics-c-mechanics/1-2-displacement-velocity-acceleration-study-guide/) |
| 1.3 Representing Motion | 4, 5 | [Topic 1.3 study guide](/advanced-course-resources/physics-c-mechanics/1-3-representing-motion-study-guide/) |
| 1.4 Reference Frames and Relative Motion | 6, 9 | [Topic 1.4 study guide](/advanced-course-resources/physics-c-mechanics/1-4-reference-frames-relative-motion-study-guide/) |
| 1.5 Motion in Two or Three Dimensions | 7, 10 | [Topic 1.5 study guide](/advanced-course-resources/physics-c-mechanics/1-5-motion-two-three-dimensions-study-guide/) |

## How to use your result

- **Read the explanation for every question, including the ones you got right.** A right answer for a wrong reason is still a gap.
- **Missed one question in a topic?** Read the named section, then try that topic's practice set.
- **Missed two or more in a topic, or most of a short answer?** Work through the whole study guide for that topic, then its practice set and checklist.
- **Missed questions across several topics?** Start with Topic 1.2. Derivatives, integrals and initial conditions feed every other topic in the unit.
- **Got everything right?** Go straight to the [mixed unit review](/advanced-course-resources/physics-c-mechanics/unit-1-review/), where each question combines two or more topics.

Your result here is a guide to what to study next. It does not predict an exam score.
