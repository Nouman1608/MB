---
resourceId: "mb-ap-physcm-7.2-practice"
title: "Frequency and Period of SHM: Practice Questions (Physics C: Mechanics 7.2)"
description: "Seven original Marlbridge calculus-based practice questions on SHM period and frequency: ω from equations of motion, springs, pendulum derivation, factors of change and linearised data."
course: "physics-c-mechanics"
unit: 7
topics: ["7.2"]
resourceType: "practice-questions"
prerequisites:
  - "The SHM equation d²x/dt² = −(k/m)x (Topic 7.1)"
  - "Effective spring constants for springs in series and parallel"
prerequisiteResources: ["mb-ap-physcm-7.2-study-guide"]
learningObjectives:
  - "Find ω, T and f from an equation of motion or from m and k"
  - "Derive the small-angle period of a simple pendulum from Newton's second law"
  - "Predict how period and frequency change when mass, spring constant, length or g change"
  - "Linearise period data to find a spring constant, and use periods to measure g"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculator for arithmetic and square roots. g = 9.8 m/s² on Earth. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-7.2-study-guide", "mb-ap-physcm-7.2-revision-notes", "mb-ap-physcm-7.2-checklist"]
next: "mb-ap-physcm-7.2-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Read ω² from the equation of motion before reaching for a formula."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. In every formula, x is in m and t in s, so each numerical coefficient carries whatever unit makes the term correct. Springs are ideal and strings light unless stated, and pendulums swing through small angles. Use g = 9.8 m/s² on Earth. Tarn is a fictional moon. Round final answers to 2 significant figures unless told otherwise.

## Question 1 (multiple choice · foundation)

Take **+x to the right**, origin at equilibrium. Newton's second law for a cart gives d²x/dt² = −49x. What is the period of its motion?

- (A) 0.13 s
- (B) 0.14 s
- (C) 0.90 s
- (D) 44 s

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The constant is ω² = 49 s⁻², so ω = 7.0 rad/s and T = 2π/ω = 2π ÷ 7.0 = 0.90 s.

- (A) uses 2π/ω² = 2π ÷ 49. The constant in the equation is ω², not ω.
- (B) is 1/ω = 1 ÷ 7.0. That treats ω as a frequency in hertz and forgets the 2π.
- (D) is 2πω. The period is 2π divided by ω, not multiplied.
</details>

## Question 2 (multiple choice · core)

A block of mass m oscillates on one spring of constant k with period T. It is replaced by a block of mass 2m, hung from **two** of the same springs joined end to end. What is the new period?

- (A) T/√2
- (B) T
- (C) √2 T
- (D) 2T

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Two equal springs in series have k_eff = k/2. The new period is 2π√(2m ÷ (k/2)) = 2π√(4m/k) = 2T.

- (A) ignores the doubled mass and treats joining springs end to end as making them stiffer (k_eff = 2k): 2π√(m/2k) = T/√2.
- (B) assumes joining springs end to end makes them stiffer (k_eff = 2k), which would cancel the doubled mass. Series springs are softer.
- (C) includes the doubled mass but ignores the change in spring constant.
</details>

## Question 3 (multiple choice · core)

A pendulum clock and a clock driven by a mass on a spring both keep correct time at sea level on Earth. Both are taken to a fictional planet where g is 1.5 times as large. Which statement is correct?

- (A) Both clocks run fast.
- (B) The pendulum clock runs fast; the spring clock keeps correct time.
- (C) The pendulum clock runs slow; the spring clock keeps correct time.
- (D) Both clocks keep correct time, because neither period depends on mass.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** T_pendulum = 2π√(ℓ/g): with g × 1.5, T falls by a factor 1/√1.5 ≈ 0.82. The pendulum completes more cycles per real second, so the clock runs fast. T_spring = 2π√(m/k) has no g, so the spring clock is unaffected.

- (A) assumes the spring's period depends on g. Gravity only shifts the spring's equilibrium.
- (C) gets the direction wrong: a stronger field gives a **shorter** pendulum period, so the clock gains time.
- (D) mixes up mass and g. Mass cancels for the pendulum, but g does not.
</details>

## Question 4 (calculation · core)

Take **+y upward**, origin at equilibrium. A 1500 kg test platform rests on four identical vertical springs, side by side, each with k = 2.0 × 10⁴ N/m. Treat the platform as a block that moves only up and down.

(a) Find the period and frequency of its vertical oscillation.
(b) A 300 kg load is fixed to the platform. Find the new period and frequency.
(c) By what factor did the period change? Check this using a factor-of-change argument.

<details>
<summary>Worked solution</summary>

1. **(a)** Parallel springs: k_eff = 4 × 2.0 × 10⁴ = 8.0 × 10⁴ N/m. T = 2π√(1500 ÷ 8.0 × 10⁴) = **0.86 s**. f = 1/T = **1.2 Hz**.
2. **(b)** T = 2π√(1800 ÷ 8.0 × 10⁴) = **0.94 s**. f = **1.1 Hz**.
3. **(c)** 0.942 ÷ 0.860 = **1.10**. Factor of change: mass × 1800/1500 = 1.2, so T × √1.2 = 1.10. They agree.

Suggested mark points (3): 1 for k_eff = 8.0 × 10⁴ N/m; 1 for both periods and frequencies; 1 for the factor √1.2 ≈ 1.10.

Common error: using one spring's k. That gives a period twice as long, because the four springs share the load.
</details>

## Question 5 (derivation · core)

A simple pendulum has a bob of mass m on a light string of length ℓ. Let s be the bob's displacement measured **along its arc** from the lowest point, positive to the right, and θ = s/ℓ the angle from the vertical.

(a) Find the component of the net force on the bob along the arc, in terms of m, g and θ.
(b) Use Newton's second law along the arc to write a differential equation for s.
(c) Show that for small angles the motion is SHM, and find its period.
(d) Explain physically why the period does not depend on m.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The tension is perpendicular to the arc, so it has no component along it. The weight's component along the arc is **−mg sin θ**: it points back toward the lowest point.

**(b)** m d²s/dt² = −mg sin θ = −mg sin(s/ℓ).

**(c)** For small θ in radians, sin(s/ℓ) ≈ s/ℓ, so **d²s/dt² = −(g/ℓ)s**. This has the SHM form with ω² = g/ℓ. So ω = √(g/ℓ) and **T = 2π√(ℓ/g)**.

**(d)** The restoring force is a part of the weight, which is proportional to m. The inertia that resists the change in motion is also m. A heavier bob is pulled back harder in exact proportion to how much harder it is to accelerate, so its motion is the same.

| Point | What earns it |
|---|---|
| 1 | (a) Tangential component −mg sin θ, with tension correctly excluded |
| 1 | (b) Newton's second law along the arc with s = ℓθ |
| 1 | (c) Small-angle approximation in radians giving d²s/dt² = −(g/ℓ)s |
| 1 | (c) Identifies ω² = g/ℓ and reaches T = 2π√(ℓ/g) |
| 1 | (d) Weight and inertia both proportional to m, so m cancels |

**Alternative method.** Using torque about the pivot, τ = −mgℓ sin θ with I = mℓ², earns the (a)–(c) points if each step is shown.
</details>

## Question 6 (constructed response · stretch)

A student hangs a 0.500 kg block from n identical springs side by side (n = 1 to 5) and times 20 cycles for each:

| n | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| T (s) | 0.993 | 0.702 | 0.574 | 0.497 | 0.444 |

(a) Show that the model predicts T² = (4π²m/k) × (1/n), where k is the constant of one spring.
(b) State what to plot to get a straight line through the origin.
(c) Use the data to find k.
(d) Describe a graph that tests the power of n in T ∝ nᵖ without assuming p = −½, and state the value of p you expect.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** n springs in parallel have k_eff = nk. So T = 2π√(m/(nk)), and squaring: **T² = (4π²m/k)(1/n)**.

**(b)** Plot **T² (s²) against 1/n**. The model gives a straight line through the origin with slope 4π²m/k.

**(c)** T² values: 0.986, 0.493, 0.329, 0.247, 0.197 s² at 1/n = 1, 0.50, 0.33, 0.25, 0.20. The best-fit slope is **0.986 s²**. So k = 4π² × 0.500 ÷ 0.986 = **20 N/m**.

**(d)** Plot **ln T against ln n**. If T = Cnᵖ, then ln T = ln C + p ln n, a straight line with slope p. The model predicts **p = −0.50**; these data give a slope of −0.50.

| Point | What earns it |
|---|---|
| 1 | (a) k_eff = nk and correct squaring of the period formula |
| 1 | (b) T² against 1/n, with slope identified as 4π²m/k |
| 1 | (c) Slope found from the data (not a single point) |
| 1 | (c) k = 20 N/m with unit (carry forward an incorrect slope) |
| 1 | (d) Log–log graph with slope = p, and p = −½ predicted |

**Alternative method for (c).** Fitting T against 1/√n gives slope 2π√(m/k) = 0.993 s, and k = 20 N/m. This earns both (c) points.
</details>

## Question 7 (constructed response · stretch)

An astronaut on the fictional moon Tarn has two devices. A simple pendulum of length 0.500 m has a period of 2.22 s there. A block on a vertical spring had a period of 0.80 s on Earth.

(a) Find g on Tarn.
(b) Find the period of the spring device on Tarn.
(c) Find the static stretch of the spring on Earth and on Tarn.
(d) A second astronaut says: "On Tarn the spring stretches less, so it acts stiffer and should oscillate faster." Explain the error.
(e) Show how the spring device alone could still be used to measure g on Tarn.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** g = 4π²ℓ/T² = 4π² × 0.500 ÷ 2.22² = **4.0 m/s²**.

**(b)** T = 2π√(m/k) contains no g, so T is still **0.80 s**.

**(c)** From T = 2π√(d/g), d = gT²/(4π²). On Earth: d = 9.8 × 0.64 ÷ 39.5 = **0.16 m**. On Tarn: d = 4.0 × 0.64 ÷ 39.5 = **0.065 m**.

**(d)** k is a property of the spring and does not change. The spring stretches less only because the weight is smaller. The period depends on m/k, which is the same on both worlds. In T = 2π√(d/g), both d and g fall by the same factor, so their ratio, and T, do not change.

**(e)** Measure the static stretch d on Tarn and the period T. Then g = 4π²d/T² = 4π² × 0.065 ÷ 0.80² ≈ **4.0 m/s²**, agreeing with (a).

| Point | What earns it |
|---|---|
| 1 | (a) g = 4.0 m/s² from the pendulum |
| 1 | (b) Spring period unchanged, with the reason (no g in 2π√(m/k)) |
| 1 | (c) Both static stretches |
| 1 | (d) k unchanged; d and g scale together so d/g is constant |
| 1 | (e) g = 4π²d/T² from the spring's sag and period |
</details>

## How did you do?

- **Q1 wrong:** re-read "From the equation of motion to the period" in the [study guide](/advanced-course-resources/physics-c-mechanics/7-2-frequency-period-shm-study-guide/).
- **Q2 or Q4 wrong:** revisit effective spring constants and Worked example 1.
- **Q3 or Q7 wrong:** compare which quantities appear in each period formula; see "Factors of change" and Worked example 3.
- **Q5 incomplete:** follow the pendulum derivation and Figure 1.
- **Q6 incomplete:** compare with Worked example 2 and Figure 2.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/7-2-frequency-period-shm-checklist/).
