---
resourceId: "mb-ap-physcm-3.1-practice"
title: "Translational Kinetic Energy: Practice Questions (Physics C: Mechanics 3.1)"
description: "Seven original Marlbridge practice questions on translational kinetic energy: components, factors of change, K–t graphs with calculus, launcher data and frame dependence."
course: "physics-c-mechanics"
unit: 3
topics: ["3.1"]
resourceType: "practice-questions"
prerequisites:
  - "Differentiating polynomials (Topic 1.2)"
  - "Projectile motion and relative velocity (Topics 1.4 and 1.5)"
prerequisiteResources: ["mb-ap-physcm-3.1-study-guide"]
learningObjectives:
  - "Calculate K from mass and velocity components"
  - "Predict factors of change in K when mass and speed change"
  - "Find K(t) from a velocity function and decide when K rises or falls"
  - "Sketch and justify K–t and K–x graphs"
  - "Linearise data to test a kinetic-energy claim"
  - "Compare kinetic energies and energy changes measured in two frames"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculus by hand; calculator for arithmetic. g = 9.8 m/s². Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-3.1-study-guide", "mb-ap-physcm-3.1-revision-notes", "mb-ap-physcm-3.1-checklist"]
next: "mb-ap-physcm-3.1-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its axis or frame. Coefficients in formulas carry units."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. In every formula, v_x is in m/s and t in s, so each coefficient carries the unit that makes the term correct. Use g = 9.8 m/s² and ignore air resistance. Round final answers to 2 significant figures unless told otherwise.

## Question 1 (multiple choice · foundation)

Take **+x east and +y north**. A 3.0 kg puck slides on level ice with velocity **v** = (4.0, −3.0) m/s. What is its kinetic energy?

- (A) 1.5 J
- (B) 7.5 J
- (C) 38 J
- (D) 75 J

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** v² = 4.0² + (−3.0)² = 25 m²/s², so K = ½(3.0)(25) = 37.5 J ≈ 38 J.

- (A) adds the components as signed numbers first: 4.0 + (−3.0) = 1.0 m/s, giving ½(3.0)(1.0)² = 1.5 J. Components must be squared before adding.
- (B) uses the speed without squaring it: ½(3.0)(5.0) = 7.5. That has the wrong unit (kg·m/s) and is not an energy.
- (D) forgets the ½: (3.0)(25) = 75 J.
</details>

## Question 2 (multiple choice · core)

A rocket sled burns fuel during a run. By the end, its mass has fallen to **half** its starting value and its speed is **three times** its starting value. By what factor has its kinetic energy changed?

- (A) 1.5
- (B) 4.5
- (C) 6.0
- (D) 18

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** K ∝ mv², so the factor is (½)(3)² = 4.5.

- (A) treats K as proportional to v: (½)(3) = 1.5. The speed must be squared.
- (C) doubles the mass instead of halving it and forgets the square: 2 × 3 = 6.
- (D) doubles the mass instead of halving it: 2 × 9 = 18.
</details>

## Question 3 (multiple choice · core)

Take **+x along a level frictionless track**. A cart starts from rest at x = 0 and is pushed by a **constant** net force in the +x direction. Which graph correctly shows its kinetic energy K against its position x?

- (A) A straight line through the origin
- (B) A parabola through the origin, curving upward
- (C) A curve through the origin that rises steeply, then flattens
- (D) A horizontal line above the axis

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** With constant acceleration from rest, v² = 2a_x x. So K = ½mv² = ½m(2a_x x) = ma_x x, which is proportional to x. The slope is ma_x, the constant net force.

- (B) is the shape of K against **time**. Since v = a_x t, K = ½ma_x²t², a parabola in t but not in x.
- (C) is the shape of **speed** against x: v = √(2a_x x).
- (D) would mean constant K, which needs zero net force.
</details>

## Question 4 (calculation · core)

Take **+x to the right**. A 0.80 kg cart has velocity v_x(t) = 2.0t² − 8.0t for 0 ≤ t ≤ 5.0 s.

(a) Find K at t = 1.0 s.
(b) Find dK/dt at t = 1.0 s and state whether K is increasing or decreasing then.
(c) State the intervals in which K increases.
(d) Find the greatest value of K in the interval, and when it occurs.

<details>
<summary>Worked solution</summary>

1. **(a)** v_x(1.0) = 2.0 − 8.0 = −6.0 m/s. K = ½(0.80)(−6.0)² = **14 J** (14.4 J). The negative velocity does not make K negative.
2. **(b)** a_x = dv_x/dt = 4.0t − 8.0, so a_x(1.0) = −4.0 m/s². dK/dt = m v_x a_x = 0.80 × (−6.0) × (−4.0) = **+19 J/s** (19.2 J/s). K is **increasing**: v_x and a_x have the same sign, so the cart speeds up (moving left).
3. **(c)** dK/dt = 0.80 × 2.0t(t − 4.0) × 4.0(t − 2.0) = 6.4t(t − 2.0)(t − 4.0). It is positive for **0 < t < 2.0 s** and **4.0 s < t ≤ 5.0 s**. It is negative for 2.0 s < t < 4.0 s.
4. **(d)** Candidates: the turning point t = 2.0 s, where v_x = −8.0 m/s and K = 25.6 J, and the end point t = 5.0 s, where v_x = +10 m/s and K = **40 J**. The greatest K is **40 J at t = 5.0 s**.

Suggested mark points (4): 1 for K(1.0) with the square removing the sign; 1 for dK/dt = m v_x a_x with the correct sign and conclusion; 1 for both intervals; 1 for checking the end point and finding 40 J.

Common error: stopping at the turning point t = 2.0 s. A maximum of K can occur at the end of an interval, where the speed is largest.
</details>

## Question 5 (graph sketch · core)

Two identical 0.20 kg blocks start with speed 10 m/s at t = 0.

- Block P is launched as a projectile at 30° above the horizontal from level ground.
- Block Q is launched up a frictionless ramp inclined at 30°, along the ramp. It stops and slides back down.

(a) On one set of axes, sketch K against t for each block from t = 0 until it returns to its launch point. Label key values of K and t.
(b) Explain, using the direction of the acceleration relative to the velocity, why one minimum is zero and the other is not.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**Key values.** Both start with K₀ = ½(0.20)(10)² = **10 J**.

- **P:** v_x = 10 cos 30° = 8.66 m/s stays constant; v_y = 5.0 − 9.8t. Top at t = 5.0 ÷ 9.8 = **0.51 s**, where K_min = ½(0.20)(8.66)² = **7.5 J**. Back at launch height at **1.0 s** (1.02 s) with 10 J.
- **Q:** acceleration along the ramp is g sin 30° = 4.9 m/s² down the slope. It stops at t = 10 ÷ 4.9 = **2.0 s** (2.04 s), where K = **0**, and returns at **4.1 s** (4.08 s) with 10 J.

**(a)** Both graphs are U-shaped parabolas in t, symmetric about their minima. P's is narrow and shallow (10 J → 7.5 J → 10 J over about 1.0 s). Q's is wide and touches the t-axis (10 J → 0 → 10 J over about 4.1 s).

**(b)** For P, the acceleration is vertical. At the top it is perpendicular to the horizontal velocity, so dK/dt = m**v** · **a** = 0 while the speed is still 8.66 m/s. Only the vertical component of velocity is lost. For Q, the acceleration is along the ramp, on the same line as the velocity (opposite to it on the way up), so it can reduce the speed all the way to zero.

| Point | What earns it |
|---|---|
| 1 | Both curves start and end at 10 J |
| 1 | P has a non-zero minimum of 7.5 J near 0.51 s |
| 1 | Q reaches K = 0 near 2.0 s and returns near 4.1 s |
| 1 | Curves drawn as smooth U-shapes with zero slope at the minimum (not V-shapes) |
| 1 | (b) Links P's non-zero minimum to acceleration perpendicular to velocity at the top, and Q's zero to acceleration along the line of the velocity |
</details>

## Question 6 (experimental analysis · stretch)

A spring launcher pushes carts of different mass along a level track. A student claims: **"The launcher gives every cart the same kinetic energy."** A light gate measures each cart's speed just after launch.

| m (kg) | 0.25 | 0.50 | 0.75 | 1.00 | 1.25 |
|---|---|---|---|---|---|
| v (m/s) | 3.81 | 2.67 | 2.20 | 1.89 | 1.70 |

(a) If the claim is true, show that v² should be proportional to 1/m.
(b) Explain why a graph of v against m would be less useful for testing the claim.
(c) Find v² and 1/m for each cart, and use the gradient of a line through the origin to find the kinetic energy.
(d) State whether the data support the claim, with a reason.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** K = ½mv² with K constant gives **v² = 2K × (1/m)**: a straight line through the origin with gradient 2K.

**(b)** v against m is a curve (v ∝ 1/√m). It is hard to judge by eye whether a curve has exactly the predicted shape, and its gradient is not a constant.

**(c)**

| 1/m (kg⁻¹) | 4.00 | 2.00 | 1.33 | 1.00 | 0.80 |
|---|---|---|---|---|---|
| v² (m²/s²) | 14.5 | 7.13 | 4.84 | 3.57 | 2.89 |

The best-fit line through the origin has gradient ≈ 3.6 J/kg (3.62). So 2K ≈ 3.6 J and **K ≈ 1.8 J**. As a check, ½mv² for each cart gives 1.81, 1.78, 1.82, 1.79 and 1.81 J.

**(d)** **Yes.** The points lie close to a straight line through the origin, and the separate K values agree to within about 2%, which is within the scatter you would expect from timing. Over this range of masses, the launcher gives each cart about 1.8 J.

| Point | What earns it |
|---|---|
| 1 | (a) Rearranges to v² = 2K/m and identifies gradient 2K |
| 1 | (b) Explains that v–m is curved, so the test is weaker |
| 1 | (c) Correct table of v² and 1/m |
| 1 | (c) K ≈ 1.8 J from gradient ÷ 2, with unit |
| 1 | (d) Supports the claim using the straight line through the origin or the agreement of individual K values |

**Alternative method.** Plotting K = ½mv² against m and showing a horizontal line earns (c) and (d) if the values are shown.
</details>

## Question 7 (constructed response · stretch)

Take **+x in the direction of travel**. A train moves at a steady 20 m/s relative to the ground. A passenger throws a 0.15 kg ball forward along the aisle: it goes from rest to 3.0 m/s **relative to the train**.

(a) Find the ball's change in kinetic energy measured by the passenger.
(b) Find the ball's change in kinetic energy measured by an observer on the ground.
(c) For one-dimensional motion, show that ΔK_ground − ΔK_train = m u Δv, where u is the train's velocity and Δv the ball's change in velocity. Check it with your answers.
(d) A student says: "Energy is conserved, so the two observers must agree about ΔK." Explain the error.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Train frame: 0 → 3.0 m/s. ΔK = ½(0.15)(3.0)² = **0.68 J** (0.675 J).

**(b)** Ground frame: 20 → 23 m/s. ΔK = ½(0.15)(23² − 20²) = ½(0.15)(129) = **9.7 J** (9.675 J).

**(c)** Ground velocity = train-frame velocity + u. So ΔK_ground = ½m[(v_f + u)² − (v_i + u)²] = ½m(v_f² − v_i²) + mu(v_f − v_i) = ΔK_train + muΔv. Check: (0.15)(20)(3.0) = 9.0 J, and 9.675 − 0.675 = 9.0 J. ✓

**(d)** Kinetic energy depends on the frame because speed does. Energy conservation holds **within** each frame, but the two frames need not give the same values of K or ΔK. In the ground frame the passenger's hand moves 20 m/s faster during the throw, so it transfers more energy to the ball (you will see this as work in Topic 3.2).

| Point | What earns it |
|---|---|
| 1 | (a) 0.68 J |
| 1 | (b) 9.7 J, from K_f − K_i, not ½m(Δv)² |
| 1 | (c) Correct algebra from v_ground = v_train + u |
| 1 | (c) Numerical check of 9.0 J |
| 1 | (d) States that K depends on the frame, so observers can disagree about ΔK without breaking any law |
</details>

## How did you do?

- **Q1 or Q2 wrong:** re-read "Kinetic energy is a scalar" and the factor-of-change table in the [study guide](/advanced-course-resources/physics-c-mechanics/3-1-translational-kinetic-energy-study-guide/).
- **Q3 or Q5 wrong:** revisit "How K depends on mass and speed" (graph shapes), Worked example 2 and Figure 1.
- **Q4 incomplete:** work through Worked example 1 and the rule dK/dt = m v_x a_x.
- **Q6 or Q7 incomplete:** your answer must say *why* a graph is straight, or *why* frames disagree. Compare with Worked example 3.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/3-1-translational-kinetic-energy-checklist/).
