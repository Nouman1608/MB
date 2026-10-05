---
resourceId: "mb-ap-physcm-u3-review"
title: "Work, Energy, and Power: Mixed Unit Review (Physics C: Mechanics Unit 3)"
description: "A one-hour mixed review of calculus-based work and energy: the big ideas that link Topics 3.1 to 3.5, a summary table and seven original questions that each combine two or more topics."
course: "physics-c-mechanics"
unit: 3
topics: []
resourceType: "unit-review"
prerequisites:
  - "You have studied Topics 3.1 to 3.5"
  - "Differentiating and integrating polynomials"
prerequisiteResources: ["mb-ap-physcm-u3-diagnostic"]
learningObjectives:
  - "Connect kinetic energy, work, potential energy, energy conservation and power into one method for analysing motion"
  - "Solve multi-step problems that combine two or more Unit 3 topics"
  - "Choose a system and say which forces do work on it and which are stored as potential energy"
  - "Move between force, potential energy and power with derivatives and integrals"
  - "Use experimental force data to find stored energy and test a prediction"
skills: ["1", "2", "3"]
studyMinutes: 60
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculus by hand; a calculator for arithmetic and square roots. We use g = 9.8 m/s², the value on the course equation table. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-u3-diagnostic", "mb-ap-physcm-3.1-checklist", "mb-ap-physcm-3.2-checklist", "mb-ap-physcm-3.3-checklist", "mb-ap-physcm-3.4-checklist", "mb-ap-physcm-3.5-checklist"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Every energy problem starts the same way: name the system, then list the forces that do work on it from outside."
  - "Work is ∫F·dr. The net work on an object equals its change in kinetic energy."
  - "A conservative force inside the system is stored as potential energy: ΔU = −W and F_x = −dU/dx. Never count it twice."
  - "With no external work and no friction inside, K + U is constant. Friction turns mechanical energy into thermal energy."
  - "Power is the rate of energy change: P = dW/dt = F·v, and W = ∫P dt."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

This review pulls together the five topics of Unit 3 (Work, Energy, and Power). Read the big ideas and table, then try the seven mixed-topic questions **without notes**. These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric, not official scoring. Use g = 9.8 m/s² and ignore air resistance unless told otherwise. If you have not yet done the [Unit 3 diagnostic](/advanced-course-resources/physics-c-mechanics/unit-3-diagnostic/), do it first.

## Big ideas of the unit

- **Kinetic energy is a scalar that depends on the frame.** K = ½mv². Observers in relative motion measure different K, and even different ΔK ([Topic 3.1](/advanced-course-resources/physics-c-mechanics/3-1-translational-kinetic-energy-study-guide/)).
- **Work moves energy across a system boundary.** W = ∫F·dr along the path: the signed area under an F‖–x graph. Only the component along the displacement of the point of application counts ([Topic 3.2](/advanced-course-resources/physics-c-mechanics/3-2-work-study-guide/)).
- **Net work changes kinetic energy.** W_net = ΔK, with rate form dK/dt = F_net·v.
- **Conservative forces have potential energy; friction does not.** Conservative work is path-independent and ΔU = −W. Friction and air resistance do path-dependent work ([Topic 3.3](/advanced-course-resources/physics-c-mechanics/3-3-potential-energy-study-guide/)).
- **Derivatives go from energy to force.** F_x = −dU/dx points downhill on the U(x) graph. Minima are stable equilibria; maxima are unstable.
- **The system decides the bookkeeping.** ΔK + ΔU + ΔE_th = W_ext. Gravity is either an external force doing work or U_g inside the system, never both ([Topic 3.4](/advanced-course-resources/physics-c-mechanics/3-4-conservation-energy-study-guide/)).
- **Power is the rate of all of this.** P = dW/dt = F·v and W = ∫P dt. Average power is W/Δt, not average force times average velocity ([Topic 3.5](/advanced-course-resources/physics-c-mechanics/3-5-power-study-guide/)).

## Key relationships and methods

| Idea | Relationship or method |
|---|---|
| Kinetic energy | K = ½mv² = ½m(v_x² + v_y² + v_z²); dK/dt = m v·a |
| Work | W = ∫ₐᵇ F·dr; constant force: W = F·d = Fd cos θ |
| Work–energy theorem | W_net = ΔK |
| Ideal spring | U_s = ½k(Δx)²; W_s = −ΔU_s |
| Potential energy | ΔU = −W_c; F_x = −dU/dx; stable where d²U/dx² > 0 |
| Gravity | U_g = −Gm₁m₂/r (zero at infinity); ΔU_g ≈ mgΔy near a surface |
| Energy rule | ΔK + ΔU + ΔE_th = W_ext; E_th from sliding friction = ∫f_k ds |
| Motion from U(x) | K = E − U(x); turning points where U = E |
| Power | P_avg = W/Δt; P = dW/dt = F·v = F‖v; W = ∫P dt |
| Frames | ΔK′ = ΔK − m u·Δv for a frame moving at constant u |

## Question 1 (multiple choice · mixed)

Take **+x east and +y north** on level, frictionless ice. A 2.0 kg puck has velocity v(t) = (3.0) î + (4.0t) ĵ (m/s). What power does the net force deliver at t = 1.0 s?

- (A) 16 W
- (B) 25 W
- (C) 32 W
- (D) 40 W

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** a = dv/dt = 4.0 ĵ m/s², so F_net = 8.0 ĵ N. At 1.0 s, P = F·v = (8.0)(4.0) = 32 W. Check: K = 9.0 + 16t², so dK/dt = 32t = 32 W.

- (A) is the average power from 0 to 1.0 s, (25 − 9.0) J ÷ 1.0 s.
- (B) is K(1.0 s) ÷ 1.0 s, as if all the energy were gained from rest.
- (D) is |F||v|. Only the component of F along v delivers power.
</details>

## Question 2 (multiple choice · mixed)

A 0.50 kg block slides at 4.0 m/s onto a rough strip of floor 1.0 m long, with μ_k = 0.20. After the strip it reaches a smooth section and hits an ideal spring, k = 100 N/m. What is the greatest compression of the spring?

- (A) 0.17 m
- (B) 0.25 m
- (C) 0.28 m
- (D) 0.32 m

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** K₀ = ½(0.50)(4.0)² = 4.0 J. Friction does −μ_k mgd = −0.98 J, so 3.02 J reaches the spring. At greatest compression ½(100)x² = 3.02, so x = 0.25 m.

- (A) drops the ½ in U_s = ½kx².
- (C) ignores friction, using the full 4.0 J.
- (D) adds the friction energy instead of subtracting it.
</details>

## Question 3 (multiple choice · mixed)

Take **+x to the right**. A small object moves without friction in a system with U(x) = 4.0x³. As it passes x = 0.50 m, its velocity is +2.0 m/s. At what rate is its kinetic energy changing?

- (A) −6.0 W
- (B) +6.0 W
- (C) −1.0 W
- (D) 0, because mechanical energy is conserved

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** F_x = −dU/dx = −12x² = −3.0 N at x = 0.50 m. It is the only force doing work, so dK/dt = F_x v_x = −6.0 W: the object climbs the U(x) graph and slows, while U rises at 6.0 J/s.

- (B) drops the minus sign, giving the rate of change of U.
- (C) is −U(0.50) × v. Power uses the force, not the energy.
- (D) Only K + U is constant; K and U each change.
</details>

## Question 4 (constructed response · mixed)

Take **+y upward**, y = 0 at the start. A winch lifts a 50 kg crate from rest. The cable tension falls with height: T(y) = 600 − 40y (N, y in m), for 0 ≤ y ≤ 5.0 m.

(a) Find the work done by the cable on the crate from y = 0 to y = 5.0 m.
(b) Using the crate + Earth system, find the crate's speed at y = 5.0 m.
(c) Find the height at which the crate moves fastest, and that speed.
(d) Find the power the cable delivers at that height.
(e) For (b), a student writes W_cable + W_g = ΔK + ΔU_g, with W_g = −mgΔy, and gets a negative ΔK. Explain the error.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Integrate the varying tension: W = ∫₀⁵ (600 − 40y) dy = [600y − 20y²]₀⁵ = 3000 − 500 = **2.5 × 10³ J**.

**(b)** For crate + Earth, only the cable does external work: ΔK + ΔU_g = W_cable. ΔU_g = mgΔy = 50 × 9.8 × 5.0 = 2450 J. So ΔK = 2500 − 2450 = 50 J, and v = √(2 × 50 ÷ 50) = **1.4 m/s**.

**(c)** The speed is greatest where the net force is zero: 600 − 40y = mg = 490, giving **y = 2.75 m (2.8 m)**. There, W_cable = 600(2.75) − 20(2.75)² = 1498.75 J and ΔU_g = 490 × 2.75 = 1347.5 J, so K = 151.25 J and v = √(2 × 151.25 ÷ 50) = **2.5 m/s** (2.46 m/s).

**(d)** The cable is parallel to the velocity, so P = Tv = 490 × 2.46 = **1.2 kW** (1.21 kW).

**(e)** The student counts gravity twice. For crate + Earth, gravity is stored as U_g, not also an external force. Use either the crate alone (W_cable + W_g = ΔK) or crate + Earth (W_cable = ΔK + ΔU_g).

| Point | What earns it |
|---|---|
| 1 | (a) Integrates the varying tension to get 2.5 × 10³ J |
| 1 | (b) Energy equation for the chosen system; 1.4 m/s |
| 1 | (c) Zero net force gives y = 2.75 m |
| 1 | (c) 2.5 m/s from the energy at that height |
| 1 | (d) P = Tv = 1.2 kW |
| 1 | (e) Double counting of gravity, with one correct system choice |

**Total: 6 points.** Carry forward an incorrect speed from (c) into (d).
</details>

## Question 5 (constructed response · mixed)

Take **+y downward**, y = 0 at a jump platform, with U_g = 0 there. A 60 kg jumper steps off from rest, tied to a cord of natural length 15 m. Model the cord as slack for y ≤ 15 m and as an ideal spring, k = 150 N/m, when stretched. Treat the jumper as a particle.

(a) Write the potential energy of the jumper–cord–Earth system as a function of y for y > 15 m.
(b) Find the jumper's speed at the moment the cord becomes taut.
(c) Find the greatest speed and the value of y at which it occurs.
(d) Find the lowest point of the jump.
(e) At the instant of greatest speed, find the power delivered to the jumper by gravity and by the cord. Explain how your answers agree with (c).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** U(y) = **−mgy + ½k(y − 15)²** = −588y + 75(y − 15)² (J). U_g is negative below the chosen zero.

**(b)** Free fall for 15 m: v = √(2 × 9.8 × 15) = **17 m/s** (17.1 m/s).

**(c)** K = E − U(y) with E = 0, so K is greatest where U is least: dU/dy = −mg + k(y − 15) = 0, so the stretch is mg/k = 588 ÷ 150 = 3.92 m and **y = 19 m** (18.9 m). There, K = 588(18.92) − 75(3.92)² = 9.97 × 10³ J, so **v = 18 m/s** (18.2 m/s).

**(d)** At the lowest point K = 0, so U = 0: 75x² = 588(15 + x), with x the stretch, giving x = 15.5 m. The lowest point is **y = 30 m** (30.5 m).

**(e)** Gravity: P = mgv = 588 × 18.2 = **+11 kW** (10.7 kW). Cord: 150 × 3.92 = 588 N upward while the jumper moves down, so P = **−11 kW**. The net power is zero, so dK/dt = 0: the condition for the greatest K in (c).

| Point | What earns it |
|---|---|
| 1 | (a) Both terms of U(y) with correct signs |
| 1 | (b) 17 m/s from the free-fall drop |
| 1 | (c) dU/dy = 0 (or zero net force) gives y = 19 m |
| 1 | (c) 18 m/s from K = E − U at that point |
| 1 | (d) K = 0 energy equation giving 30 m |
| 1 | (e) Equal and opposite powers, linked to dK/dt = 0 |

**Total: 6 points.**
</details>

## Question 6 (constructed response · mixed)

Take **+x along a level, frictionless track**. A 2.0 kg cart passes x = 0 at +3.0 m/s at t = 0. A horizontal cable from a fixed motor pulls it forward. The power delivered to the cart rises linearly from 0 to 40 W between t = 0 and 2.0 s, then stays at 40 W until t = 5.0 s.

(a) Find the work done by the cable from t = 0 to t = 5.0 s.
(b) Find the cart's speed at t = 2.0 s and at t = 5.0 s.
(c) Find the cable tension just after t = 2.0 s and at t = 5.0 s. Explain why it falls.
(d) Find the average power over the 5.0 s. Why is it not the average tension times the average speed?
(e) An observer in a car moves at a constant +3.0 m/s. Find the cart's ΔK in that frame, and explain why it differs from (a).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** W = ∫P dt, the area under the P–t graph: ½(2.0)(40) + (3.0)(40) = 40 + 120 = **160 J**.

**(b)** Only the cable does work, so ΔK = W. K₀ = ½(2.0)(3.0)² = 9.0 J. At 2.0 s, K = 9.0 + 40 = 49 J, so v = √(2 × 49 ÷ 2.0) = **7.0 m/s**. At 5.0 s, K = 9.0 + 160 = 169 J, so **v = 13 m/s**.

**(c)** T = P/v. Just after 2.0 s: 40 ÷ 7.0 = **5.7 N**. At 5.0 s: 40 ÷ 13 = **3.1 N**. At constant power, a faster cart needs less force.

**(d)** P_avg = W/Δt = 160 ÷ 5.0 = **32 W**. Tension and speed both change, and the product of two averages is not the average of the product.

**(e)** In the moving frame the cart goes from 0 to 10 m/s, so ΔK′ = ½(2.0)(10)² = **100 J**. The tension is the same in both frames, but in the car's frame the cart moves 15 m less, so the cable does less work. Check: ΔK′ = ΔK − m u Δv = 160 − (2.0)(3.0)(10) = 100 J.

| Point | What earns it |
|---|---|
| 1 | (a) Area under P–t, 160 J |
| 1 | (b) Adds the initial 9.0 J to get 7.0 m/s and 13 m/s |
| 1 | (c) T = P/v at both times, with the reason it falls |
| 1 | (d) 32 W from W/Δt, with the averaging argument |
| 1 | (e) 100 J, explained by frame-dependent speed and displacement |

**Total: 5 points.** Carry forward an incorrect speed from (b) into (c).
</details>

## Question 7 (constructed response · mixed)

Take **+x in the direction of compression**. Students compress a toy launcher's spring in steps and read the force with a sensor. The data are invented for practice:

| Compression x (m) | 0 | 0.020 | 0.040 | 0.060 | 0.080 | 0.100 |
|---|---|---|---|---|---|---|
| Force F (N) | 0 | 9.0 | 16 | 22 | 27 | 31 |

A 0.050 kg ball fired horizontally from a compression of 0.100 m leaves at 7.9 m/s (light gate).

(a) Decide whether the spring is ideal.
(b) Estimate the energy stored at x = 0.100 m. Why is ½kx² with k = 31 ÷ 0.100 a poor method here?
(c) Predict the launch speed if all the stored energy became the ball's kinetic energy.
(d) Find the fraction of the stored energy the ball receives, and suggest where the rest goes.
(e) When does the area in (b) equal the spring's potential energy?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** F/x is 450, 400, 367, 338 and 310 N/m. It falls, so F is not proportional to x: the spring is **not ideal** (it softens).

**(b)** The stored energy is the work done to compress the spring: the area under the F–x graph. Using trapezia of width 0.020 m: 0.090 + 0.25 + 0.38 + 0.49 + 0.58 = **1.8 J** (1.79 J). ½kx² with k = 310 N/m gives 1.55 J; it assumes a straight line to the final point, below the real curve.

**(c)** ½(0.050)v² = 1.79, so v = √71.6 = **8.5 m/s**.

**(d)** K = ½(0.050)(7.9)² = 1.56 J, so the fraction is 1.56 ÷ 1.79 = **0.87**. The missing 0.23 J goes to friction and to the moving spring and plunger.

**(e)** The spring force must be **conservative**: on release it follows the same F–x curve, so the work done on it is fully recoverable.

| Point | What earns it |
|---|---|
| 1 | (a) F/x not constant, so not ideal |
| 1 | (b) Area under the F–x data, 1.8 J |
| 1 | (b) Why ½kx² fails for a non-linear force |
| 1 | (c) 8.5 m/s from the stored energy |
| 1 | (d) Fraction 0.87 with a sensible place for the missing energy |
| 1 | (e) Same curve on release (conservative force) |

**Total: 6 points.** A smooth-curve area of about 1.8 J also earns the (b) point.
</details>

## How did you do?

Questions 1 to 3 score 1 point each; Questions 4, 5 and 7 score 6; Question 6 scores 5: 26 in all. The total shows what to revisit; it does not predict an exam score.

- **Q1 or Q6(e) incomplete:** revisit K from components and in other frames with the [Topic 3.1 checklist](/advanced-course-resources/physics-c-mechanics/3-1-translational-kinetic-energy-checklist/).
- **Q2, Q4(a) or Q7(b) incomplete:** practise work integrals and F–x areas with the [Topic 3.2 checklist](/advanced-course-resources/physics-c-mechanics/3-2-work-checklist/).
- **Q3, Q5(a) or Q7(e) incomplete:** revisit F_x = −dU/dx and conservative forces with the [Topic 3.3 checklist](/advanced-course-resources/physics-c-mechanics/3-3-potential-energy-checklist/).
- **Q4(b), Q4(e) or Q5(c)–(d) incomplete:** name the system before any energy equation. Use the [Topic 3.4 checklist](/advanced-course-resources/physics-c-mechanics/3-4-conservation-energy-checklist/).
- **Q4(d), Q5(e) or Q6(a)–(d) incomplete:** link P to F·v at each instant and use W = ∫P dt, with the [Topic 3.5 checklist](/advanced-course-resources/physics-c-mechanics/3-5-power-checklist/).

After revising, retake the matching [Unit 3 diagnostic](/advanced-course-resources/physics-c-mechanics/unit-3-diagnostic/) questions, then retry this review a few days later.
