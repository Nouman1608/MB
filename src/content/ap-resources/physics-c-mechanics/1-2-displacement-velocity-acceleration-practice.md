---
resourceId: "mb-ap-physcm-1.2-practice"
title: "Displacement, Velocity, and Acceleration: Practice Questions (Physics C: Mechanics 1.2)"
description: "Seven original Marlbridge calculus-based practice questions on velocity and acceleration as derivatives, integration with initial conditions, derivations and sensor data."
course: "physics-c-mechanics"
unit: 1
topics: ["1.2"]
resourceType: "practice-questions"
prerequisites:
  - "Differentiating and integrating polynomials"
prerequisiteResources: ["mb-ap-physcm-1.2-study-guide"]
learningObjectives:
  - "Differentiate x(t) to find v_x(t) and a_x(t), and integrate a_x(t) with initial conditions"
  - "Find displacement and distance travelled from v_x(t)"
  - "Use the signs of v_x and a_x to decide whether an object speeds up or slows down"
  - "Derive the constant-acceleration equations and state their condition"
  - "Linearise sensor data for a time-dependent acceleration and extract a constant"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculus by hand; calculator for arithmetic only. g = 9.8 m/s² if needed. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-1.2-study-guide", "mb-ap-physcm-1.2-revision-notes", "mb-ap-physcm-1.2-checklist"]
next: "mb-ap-physcm-1.2-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics", "exam-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its axis. Polynomial coefficients carry units."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. In every formula, x is in m, v_x in m/s, a_x in m/s² and t in s, so each numerical coefficient carries whatever unit makes the term correct. Use g = 9.8 m/s² if needed. Round final answers to 2 significant figures unless told otherwise. A calculator is used only for arithmetic.

## Question 1 (multiple choice · foundation)

Take **+x to the right**. A particle's position is x(t) = 5.0 + 2.0t − 1.0t³. What is its velocity at t = 2.0 s?

- (A) +0.50 m/s
- (B) −2.0 m/s
- (C) −10 m/s
- (D) −12 m/s

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** v_x = dx/dt = 2.0 − 3.0t², so v_x(2.0) = 2.0 − 12 = −10 m/s (moving left at 10 m/s).

- (A) divides position by time: x(2.0) = 1.0 m, and 1.0 m ÷ 2.0 s = 0.50 m/s. Position over clock time is not velocity.
- (B) is the average velocity from 0 to 2.0 s: (1.0 − 5.0) m ÷ 2.0 s. It is a secant slope, not the instantaneous value.
- (D) differentiates twice: a_x = −6.0t gives −12 m/s² at 2.0 s. That is the acceleration, with the wrong unit attached.
</details>

## Question 2 (multiple choice · core)

Take **+x to the right**. A cart has a_x(t) = 6.0t and an initial velocity v_x0 = −4.0 m/s at t = 0. What is its velocity at t = 2.0 s?

- (A) +8.0 m/s
- (B) +12 m/s
- (C) +16 m/s
- (D) +20 m/s

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** v_x = v_x0 + ∫₀ᵗ 6.0t dt = −4.0 + 3.0t². At t = 2.0 s: −4.0 + 12 = +8.0 m/s.

- (B) leaves out the initial velocity. The integral gives only the *change* in velocity (+12 m/s).
- (C) adds the size of v_x0 instead of its signed value: 12 + 4.0. The cart started moving left, so its initial velocity is −4.0 m/s.
- (D) treats the acceleration as constant at its final value, a_x(2.0) = 12 m/s², for the whole 2.0 s: −4.0 + 12 × 2.0. The acceleration grows from 0, so this overestimates the change.
</details>

## Question 3 (multiple choice · core)

Take **+x to the right**. A particle has x(t) = t³ − 6.0t². At t = 1.0 s, which statement is correct?

- (A) It is speeding up, because v_x and a_x are both negative.
- (B) It is slowing down, because a_x is negative.
- (C) It is slowing down, because v_x is negative.
- (D) It is neither, because x is negative, so the particle is behind the origin.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** v_x = 3.0t² − 12t = −9.0 m/s and a_x = 6.0t − 12 = −6.0 m/s² at t = 1.0 s. Both are negative, so velocity and acceleration point the same way and the speed increases.

- (B) uses the rule "negative acceleration means slowing down". The sign of a_x alone shows only its direction.
- (C) confuses moving left with slowing down. A negative velocity means motion in −x.
- (D) judges motion from position. x = −5.0 m tells you where the particle is, not how its speed is changing.
</details>

## Question 4 (calculation · core)

Take **+x to the right**, with the particle at x₀ = 0 at t = 0. Its velocity is v_x(t) = 3.0t² − 12t + 9.0. Find (a) the displacement and (b) the distance travelled from t = 0 to t = 4.0 s.

<details>
<summary>Worked solution</summary>

1. Integrate: x(t) = 0 + ∫₀ᵗ (3.0t² − 12t + 9.0) dt = t³ − 6.0t² + 9.0t.
2. **(a)** Displacement = x(4.0) − x(0) = 64 − 96 + 36 = **+4.0 m**.
3. Turning points: v_x = 3.0(t − 1.0)(t − 3.0) = 0 at t = 1.0 s and 3.0 s. Positions: x(1.0) = 4.0 m, x(3.0) = 0, x(4.0) = 4.0 m.
4. **(b)** Distance = |4.0 − 0| + |0 − 4.0| + |4.0 − 0| = 4.0 + 4.0 + 4.0 = **12 m**.

Suggested mark points (3): 1 for x(t) by integration; 1 for the displacement; 1 for splitting at the turning points and adding the sizes.

Common error: reporting ∫₀⁴ v_x dt = 4.0 m as the distance. That is the displacement; the middle leg moves backwards.
</details>

## Question 5 (constructed response · core)

Take **+x along the motion**. A particle has constant acceleration a_x. At t = 0 it is at x₀ with velocity v_x0.

(a) Starting from a_x = dv_x/dt, derive an expression for v_x(t).
(b) Use your answer to (a) to derive an expression for x(t).
(c) Using the chain rule, derive v_x² = v_x0² + 2a_x(x − x₀).
(d) State the condition under which all three results hold, and explain which step of your derivation needs it.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** dv_x = a_x dt. Integrate from (0, v_x0) to (t, v_x): v_x − v_x0 = a_x t, so **v_x = v_x0 + a_x t**.

**(b)** dx = v_x dt = (v_x0 + a_x t) dt. Integrate from (0, x₀) to (t, x): **x = x₀ + v_x0 t + ½a_x t²**.

**(c)** a_x = dv_x/dt = (dv_x/dx)(dx/dt) = v_x (dv_x/dx). So a_x dx = v_x dv_x. Integrate: a_x(x − x₀) = ½(v_x² − v_x0²), giving **v_x² = v_x0² + 2a_x(x − x₀)**.

**(d)** The acceleration must be **constant**. In each integral, a_x was taken outside the integral sign (∫a_x dt = a_x t; ∫a_x dx = a_x(x − x₀)). That is only valid if a_x does not change with t or x.

| Point | What earns it |
|---|---|
| 1 | (a) Separates and integrates with the initial condition v_x0 |
| 1 | (b) Integrates v_x(t) with the initial condition x₀ to reach the quadratic |
| 1 | (c) Uses the chain rule to write a_x = v_x dv_x/dx |
| 1 | (c) Integrates both sides with correct limits to reach the result |
| 1 | (d) States constant acceleration **and** identifies taking a_x outside the integral as the step that needs it |

**Alternative methods.** For (b), indefinite integrals with a constant found from x(0) = x₀ are equally valid. For (c), eliminating t between (a) and (b) algebraically earns both (c) points if every step is shown, since it still relies on constant a_x.
</details>

## Question 6 (constructed response · stretch)

Take **+x along a level track**, origin at the start. A fan cart starts from rest at t = 0. The fan speeds up so that the student predicts a_x = ct, where c is a constant. A motion sensor gives:

| t (s) | 0.50 | 1.00 | 1.50 | 2.00 | 2.50 |
|---|---|---|---|---|---|
| x (m) | 0.013 | 0.100 | 0.338 | 0.800 | 1.563 |

(a) Show that the prediction gives x = ct³/6.
(b) State what to plot against what to obtain a straight line through the origin if the prediction is correct.
(c) Use the data to find c, with its unit.
(d) Find the cart's velocity at t = 2.00 s.
(e) Describe a second graph that tests the power of t without assuming it is 3.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** v_x = 0 + ∫₀ᵗ ct dt = ct²/2. Then x = 0 + ∫₀ᵗ (ct²/2) dt = **ct³/6**.

**(b)** Plot **x (m) on the vertical axis against t³ (s³) on the horizontal axis**. The prediction gives a straight line through the origin with slope c/6.

**(c)** Values of t³: 0.125, 1.00, 3.375, 8.00, 15.625 s³. Each x ÷ t³ is about 0.100 m/s³ (for example 0.800 ÷ 8.00 = 0.100), and a best-fit line through the origin also gives slope 0.100 m/s³. So c = 6 × 0.100 = **0.60 m/s³**.

**(d)** v_x = ct²/2 = 0.60 × (2.00)² ÷ 2 = **1.2 m/s**.

**(e)** If x = kt^n, then ln x = ln k + n ln t. Plot **ln x against ln t**. The slope gives n; these data give a slope of about 3.0, supporting a_x ∝ t. (Plotting log₁₀ x against log₁₀ t works the same way.)

| Point | What earns it |
|---|---|
| 1 | (a) Two integrations, each using the initial condition (starts from rest at the origin) |
| 1 | (b) x against t³, with the slope identified as c/6 |
| 1 | (c) c = 0.60 m/s³ from the slope, with correct unit |
| 1 | (d) 1.2 m/s from v_x = ct²/2 (carry forward an incorrect c) |
| 1 | (e) Log–log graph with the slope identified as the power of t |

**Alternative method for (c).** Find average velocities between readings, plot them against midpoint times, and fit v_x = ct²/2. This is valid but less precise because the intervals are long; it earns the point if c is within 0.55–0.65 m/s³.
</details>

## Question 7 (explanation · stretch)

A student says: "For any motion, the average velocity over an interval equals the mean of the starting and ending velocities, (v_x0 + v_x)/2."

Take **+x along the motion**. Test the claim for a particle that starts from rest at the origin with a_x = ct (c is a positive constant), over the interval 0 to T. Then state when the claim is true.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**Model answer.** From Question 6, v_x = ct²/2 and x = ct³/6.

- True average velocity: v_avg = Δx/Δt = (cT³/6) ÷ T = **cT²/6**.
- Mean of end velocities: (0 + cT²/2)/2 = **cT²/4**.

These differ, so the claim is **false** in general: the true average is only 2/3 of the student's value. The particle moves slowly for most of the interval and fast only near the end, so the time-weighted average is lower than the mean of the end values.

The claim is true when acceleration is **constant**. Then v_x is a linear function of t, the v_x–t graph is a straight line, and the area under it (the displacement) equals Δt × (v_x0 + v_x)/2, the area of a trapezium.

| Point | What earns it |
|---|---|
| 1 | Finds the true average velocity cT²/6 from Δx/Δt |
| 1 | Finds the mean of end velocities cT²/4 and concludes the claim fails |
| 1 | Explains the difference physically or graphically (more time spent at low speed; curve below the straight chord) |
| 1 | States the claim holds for constant acceleration, with the trapezium or linear-v_x reason |

A numerical test with a chosen c and T (for example c = 0.60 m/s³ and T = 2.0 s gives 0.40 m/s against 0.60 m/s) earns the first two points.
</details>

## How did you do?

- **Q1 or Q3 wrong:** re-read "From averages to derivatives" and the sign chart in Worked example 1 of the [study guide](/advanced-course-resources/physics-c-mechanics/1-2-displacement-velocity-acceleration-study-guide/).
- **Q2 or Q4 wrong:** revisit "From derivatives back to position" and Worked example 2. Add initial conditions; split at v_x = 0 for distance.
- **Q5 incomplete:** go through "Deriving the constant-acceleration equations" step by step.
- **Q6 or Q7 incomplete:** your reasoning must say *why* a graph is straight or *why* an average differs. Compare with Figure 2 and the failure of constant-a equations in Worked example 2.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/1-2-displacement-velocity-acceleration-checklist/).
