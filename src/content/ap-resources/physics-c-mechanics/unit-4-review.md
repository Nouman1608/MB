---
resourceId: "mb-ap-physcm-u4-review"
title: "Linear Momentum: Mixed Unit Review (Physics C: Mechanics Unit 4)"
description: "A one-hour mixed review of calculus-based linear momentum: the big ideas that link Topics 4.1 to 4.4, a summary table and seven original questions that each combine two or more topics."
course: "physics-c-mechanics"
unit: 4
topics: []
resourceType: "unit-review"
prerequisites:
  - "You have studied Topics 4.1 to 4.4"
  - "Energy conservation from Unit 3, and integrating simple functions of time"
prerequisiteResources: ["mb-ap-physcm-u4-diagnostic"]
learningObjectives:
  - "Connect momentum, impulse, system choice and collision type into one method for short interactions"
  - "Solve multi-step problems that combine two or more Unit 4 topics"
  - "Move between force–time and momentum–time graphs using areas and slopes"
  - "Combine momentum conservation across a collision with energy conservation before or after it"
  - "Use experimental data and a linearised graph to test conservation of momentum"
skills: ["1", "2", "3"]
studyMinutes: 60
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculus by hand; a calculator for arithmetic, square roots and trigonometry. We use g = 9.8 m/s². Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-u4-diagnostic", "mb-ap-physcm-4.1-checklist", "mb-ap-physcm-4.2-checklist", "mb-ap-physcm-4.3-checklist", "mb-ap-physcm-4.4-checklist"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Momentum p = mv is a vector. Add it by components; it links to kinetic energy through K = p²/(2m)."
  - "Net external force is the slope of a p–t graph; impulse, the signed area under an F–t graph, equals Δp."
  - "Choose the system so that unknown forces are internal. With no net external force, P and v_cm stay constant."
  - "Every collision conserves momentum. Kinetic energy decides the type: elastic, inelastic or perfectly inelastic."
  - "Use momentum across a short collision and energy for the motion before and after it, never energy across an inelastic collision."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

This review pulls the four topics of Unit 4 (Linear Momentum) together. Read the big ideas and the table, then try the seven questions **without notes**. Each one combines two or more topics. These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric, not official scoring. Use g = 9.8 m/s². Units are SI; tracks and air tables are level and frictionless unless stated. If you have not yet done the [Unit 4 diagnostic](/advanced-course-resources/physics-c-mechanics/unit-4-diagnostic/), do it first.

## Big ideas of the unit

- **Momentum is a vector that follows the velocity.** p = mv, so p_x = m dx/dt. Add momenta by components; equal and opposite momenta cancel, kinetic energies never do ([Topic 4.1](/advanced-course-resources/physics-c-mechanics/4-1-linear-momentum-study-guide/)).
- **K = p²/(2m) links the two quantities.** For the same momentum, the lighter object has more kinetic energy.
- **Force changes momentum.** F_net = dp/dt, so the net external force is the slope of a p–t graph. Impulse, J = ∫F dt, is the signed area under an F–t graph and equals Δp ([Topic 4.2](/advanced-course-resources/physics-c-mechanics/4-2-change-momentum-impulse-study-guide/)).
- **F = ma is a special case.** Constant mass gives F_net = m dv/dt; constant velocity with changing mass gives F_net = v dm/dt.
- **Internal impulses cancel.** Third-law forces give equal and opposite impulses, so only external forces change a system's total momentum, P = Mv_cm ([Topic 4.3](/advanced-course-resources/physics-c-mechanics/4-3-conservation-linear-momentum-study-guide/)).
- **The system is your choice.** Make unknown forces internal. Conservation can hold in one component and fail in another.
- **Collisions and explosions are short.** Compare just before with just after.
- **Kinetic energy sorts collisions.** Elastic keeps total K; inelastic loses some; perfectly inelastic (sticking) loses the most momentum allows, leaving ½Mv_cm² ([Topic 4.4](/advanced-course-resources/physics-c-mechanics/4-4-elastic-inelastic-collisions-study-guide/)).

## Key relationships and methods

| Idea | Relationship or method |
|---|---|
| Momentum | p = mv; p_x = m dx/dt; \|p\| = √(p_x² + p_y²) |
| Momentum and kinetic energy | K = p²/(2m); \|p\| = √(2mK) |
| Newton's second law | F_net = dp/dt; = ma (constant m); = v dm/dt (constant v) |
| Impulse | J = ∫F dt = signed area under F–t; F_avg = J/Δt |
| Impulse–momentum theorem | J_net = Δp = p_f − p_i |
| System momentum | P = Σmᵢvᵢ = Mv_cm; ΔP = J_ext |
| Conservation | ΣF_ext = 0 → P and v_cm constant (per component) |
| Classifying a collision | compare total K before and after; or approach and separation speeds (1D) |
| Perfectly inelastic | v = P/M; K_after = P²/(2M) is the minimum possible |
| Elastic, 1D | v₂ − v₁ = −(u₂ − u₁), solved with momentum conservation |
| Collision then energy | momentum across the collision; energy before and after it |

## Question 1 (multiple choice · mixed)

Take **+x to the right**. A 0.50 kg particle moves with x(t) = 2.0t³ − 6.0t for t ≥ 0. What is the net force on it at the instant it is momentarily at rest?

- (A) 0
- (B) +3.0 N
- (C) +6.0 N
- (D) +12 N

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** p_x = m dx/dt = 0.50(6.0t² − 6.0) = 3.0t² − 3.0, which is zero at t = 1.0 s. The net force is the slope: F_x = dp_x/dt = 6.0t = +6.0 N at t = 1.0 s.

- (A) assumes that zero momentum means zero force. The momentum is passing through zero and still changing.
- (B) uses the average acceleration from 0 to 1.0 s, 6.0 m/s², instead of the instantaneous value, 12 m/s².
- (D) is the acceleration, 12 m/s², with the mass left out.
</details>

## Question 2 (multiple choice · mixed)

Two identical pucks slide on an air table at the same speed v, at 90° to each other. They collide and stick together. What are the speed of the joined pucks and the fraction of the kinetic energy that remains?

- (A) 0; none
- (B) v; all of it
- (C) 0.71v; one-half
- (D) 0.71v; 0.71

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Each puck has momentum mv, at right angles, so P = √2 mv. With mass 2m, the speed is √2 mv ÷ 2m = v/√2 ≈ 0.71v. Kinetic energy: before 2 × ½mv² = mv²; after ½(2m)(v/√2)² = ½mv². Half remains.

- (A) treats the pucks as meeting head-on, so their momenta cancel. Perpendicular momenta add by Pythagoras.
- (B) adds the speeds as numbers and divides by 2, ignoring direction.
- (D) takes the kinetic energy fraction to equal the speed factor. K depends on v², so the factor is 0.71² = 0.50.
</details>

## Question 3 (multiple choice · mixed)

Take **+x to the right**. Ball A (0.40 kg) moving at +5.0 m/s strikes ball B (0.60 kg), which is at rest. A force sensor shows that the force on B rises steadily to 300 N and falls steadily to zero, over a total contact time of 10 ms. What is A's velocity just after the collision?

- (A) −2.5 m/s
- (B) +1.25 m/s
- (C) +2.0 m/s
- (D) +2.5 m/s

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The impulse on B is the triangle area, ½ × 300 × 0.010 = 1.5 N·s. By Newton's third law, A receives −1.5 N·s. So p_A = 0.40 × 5.0 − 1.5 = 0.50 kg·m/s and v_A = +1.25 m/s. Check: B moves at 2.5 m/s, ahead of A, and K falls from 5.0 J to 2.2 J.

- (A) uses the peak force as the average: 300 × 0.010 = 3.0 N·s. That would raise the total kinetic energy, which a collision cannot do.
- (C) is v_cm, the result if the balls stuck together. The data show they did not.
- (D) is B's velocity after the collision.
</details>

## Question 4 (constructed response · mixed)

Take **+x along the track**. Cart A (1.2 kg) is released from rest at a height of 0.45 m on a curved ramp and rolls onto a level track. There it couples to cart B (0.80 kg), which is at rest. The joined carts roll up a second ramp. Friction is negligible except during the coupling.

(a) Find A's speed at the bottom of the first ramp.
(b) Find the speed of the joined carts just after coupling.
(c) Find the height the joined carts reach.
(d) A student uses energy conservation for the whole journey: 1.2g(0.45) = 2.0g h, so h = 0.27 m. Explain the error, and find the fraction of kinetic energy kept in the coupling.
(e) The coupling is replaced by repelling magnets, so the collision is elastic. Find how high B rises up the second ramp, and explain why it can rise higher than A started.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Energy (Unit 3): u = √(2gh₁) = √(2 × 9.8 × 0.45) = **3.0 m/s** (2.97 m/s).

**(b)** Momentum across the short coupling, system A + B: 1.2 × 2.97 = 2.0v, so **v = 1.8 m/s** (1.78 m/s).

**(c)** Energy again after the coupling: h₂ = v² ÷ 2g = 1.78² ÷ 19.6 = **0.16 m**. Symbolically h₂ = h₁(m_A/M)² = 0.45 × 0.36.

**(d)** The coupling is perfectly inelastic. Nonconservative forces transform kinetic energy into internal energy and sound, so mechanical energy is not conserved across it. K before = 5.29 J, K after = 3.18 J: **60% is kept** (m_A/M = 1.2 ÷ 2.0).

**(e)** Elastic, B initially at rest: v_B = 2m_A u ÷ (m_A + m_B) = 2(1.2)(2.97) ÷ 2.0 = 3.56 m/s, so h_B = 3.56² ÷ 19.6 = **0.65 m**. B, the lighter cart, receives 5.1 J of the 5.3 J. Height depends on energy per kilogram, and B gets more per kilogram than A had.

| Point | What earns it |
|---|---|
| 1 | (a) 3.0 m/s from energy conservation |
| 1 | (b) Momentum conservation across the coupling, 1.8 m/s |
| 1 | (c) 0.16 m from energy after the coupling |
| 1 | (d) Identifies energy transformed in the inelastic coupling as the error |
| 1 | (d) 60% kept, with K values or m_A/M |
| 1 | (e) 0.65 m, with the energy-transfer explanation |

**Total: 6 points.** Carry an error in (a) forward.
</details>

## Question 5 (constructed response · mixed)

Take **+x along the track**. Cart A (0.50 kg) and cart B (1.5 kg) are latched together with a compressed spring between them and roll at +0.40 m/s. At t = 0 the latch releases. From t = 0 to T = 0.10 s, the spring pushes B with F_x(t) = F₀(1 − t²/T²), where F₀ = 9.0 N, and pushes A with the opposite force.

(a) Find the impulse on each cart.
(b) Find each cart's velocity after the push.
(c) Find the center-of-mass velocity before and after, and explain the result.
(d) Sketch p_A and p_B against t from t = 0 to t = T. Give the slopes at t = 0 and t = T and the end values, and say when p_A passes through zero.
(e) Find the energy released by the spring.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** J_B = ∫₀ᵀ F₀(1 − t²/T²) dt = F₀(T − T/3) = 2F₀T/3 = 2 × 9.0 × 0.10 ÷ 3 = **+0.60 N·s**. By Newton's third law, **J_A = −0.60 N·s**.

**(b)** p_B = 1.5 × 0.40 + 0.60 = 1.20 kg·m/s, so **v_B = +0.80 m/s**. p_A = 0.50 × 0.40 − 0.60 = −0.40 kg·m/s, so **v_A = −0.80 m/s**.

**(c)** Before: v_cm = 0.80 ÷ 2.0 = **+0.40 m/s**. After: (−0.40 + 1.20) ÷ 2.0 = **+0.40 m/s**. The spring is internal and there is no net external force, so P and v_cm cannot change.

**(d)** p_B rises from 0.60 to 1.20 kg·m/s; p_A falls from 0.20 to −0.40 kg·m/s. The slopes are the forces: **+9.0 N and −9.0 N at t = 0**, both **zero at t = T**, so both curves flatten at the end. The curves are mirror images (total 0.80 kg·m/s). p_A = 0.20 − 9.0t + 300t³ passes through zero at **t ≈ 0.023 s**, when A stops and reverses.

**(e)** K before = ½ × 2.0 × 0.40² = 0.16 J. K after = ½(0.50)(0.80)² + ½(1.5)(0.80)² = 0.16 + 0.48 = 0.64 J. The spring released **0.48 J**.

| Point | What earns it |
|---|---|
| 1 | (a) Integrates the force to get 0.60 N·s, with −0.60 N·s on A |
| 1 | (b) Both velocities, with signs, from p_i + J |
| 1 | (c) v_cm = 0.40 m/s both times, explained by internal forces |
| 1 | (d) End values and slopes ±9.0 N at t = 0 and zero at t = T |
| 1 | (d) p_A crosses zero near 0.023 s (accept 0.02 s) |
| 1 | (e) 0.48 J from the kinetic energy increase |

**Total: 6 points.**
</details>

## Question 6 (constructed response · mixed)

On an air table, take **+x east and +y north**. Puck A (0.30 kg) moves east at 2.0 m/s. Puck B (0.20 kg) moves north at 1.5 m/s. They collide, and just after, B moves east at 2.0 m/s.

(a) Find the total momentum and the center-of-mass velocity.
(b) Find A's velocity just after.
(c) Classify the collision with a calculation.
(d) Show that, whatever happens in a collision between these two pucks, at least 0.45 J of kinetic energy must remain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** P = (0.30 × 2.0, 0.20 × 1.5) = **(0.60, 0.30) kg·m/s**. v_cm = P ÷ 0.50 = **(1.2, 0.60) m/s**, size 1.3 m/s at 27° north of east.

**(b)** p_A = P − p_B = (0.60 − 0.40, 0.30 − 0) = (0.20, 0.30) kg·m/s. v_A = (0.67, 1.0) m/s: **1.2 m/s at 56° north of east**.

**(c)** K before = 0.60 + 0.225 = 0.825 J. K after = ½(0.30)(0.67² + 1.0²) + ½(0.20)(2.0²) = 0.217 + 0.40 = 0.617 J. Kinetic energy fell by 0.21 J (25%) and the pucks separate, so the collision is **inelastic**.

**(d)** No collision can change v_cm, so the kinetic energy of center-of-mass motion, ½Mv_cm² = P²/(2M) = (0.60² + 0.30²) ÷ 1.0 = **0.45 J**, always remains. Sticking leaves exactly this; (c) lies between 0.45 J and 0.825 J.

| Point | What earns it |
|---|---|
| 1 | (a) P in components and v_cm |
| 1 | (b) Conserves x and y separately to find p_A |
| 1 | (b) Size and direction of v_A |
| 1 | (c) Both kinetic energies, as scalars |
| 1 | (c) Classified as inelastic with the 25% loss |
| 1 | (d) P²/(2M) = 0.45 J with the fixed-v_cm argument |

**Total: 6 points.**
</details>

## Question 7 (constructed response · mixed)

Take **+x along the track**. Students test momentum conservation with sticking collisions. Cart A (0.50 kg) always moves at +0.60 m/s into cart B at rest; hook-and-loop strips make the carts stick. They change B's mass and measure the joined velocity v. The data are invented for practice:

| m_B (kg) | 0.25 | 0.50 | 0.75 | 1.00 | 1.50 |
|---|---|---|---|---|---|
| v (m/s) | 0.394 | 0.296 | 0.236 | 0.197 | 0.147 |

(a) Use momentum conservation to predict v in terms of m_A, u_A and M = m_A + m_B. State what to plot for a straight line through the origin, and what its slope should be.
(b) Calculate the plotted values, find the slope and compare it with your prediction.
(c) For m_B = 1.50 kg, find the fraction of kinetic energy transformed, and say where it went.
(d) Every v is 1 to 2% below the prediction. Suggest a cause and a change to the procedure that would test your suggestion.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** m_A u_A = Mv, so **v = m_A u_A / M**. Plot **v against 1/M**; the slope should be **m_A u_A = 0.30 kg·m/s**, the momentum before the collision.

**(b)** M = 0.75, 1.00, 1.25, 1.50, 2.00 kg, so 1/M = 1.33, 1.00, 0.80, 0.67, 0.50 kg⁻¹. The points lie on a line through the origin with slope about **0.296 kg·m/s** (accept 0.29 to 0.30). That is within about 1.5% of 0.30 kg·m/s, so momentum is conserved within the precision of the experiment.

**(c)** K before = ½ × 0.50 × 0.60² = 0.090 J. K after = ½ × 2.0 × 0.147² = 0.022 J, so about **76% is transformed** (75% ideally, m_B/M). Nonconservative forces in the strips turn it into internal energy and sound.

**(d)** Friction is an external force that removes momentum between the collision and the speed measurement. Measure v at several times after the collision and extrapolate back to the collision; if friction is the cause, the gap should shrink.

| Point | What earns it |
|---|---|
| 1 | (a) v = m_A u_A/M, with v against 1/M and slope m_A u_A |
| 1 | (b) Correct 1/M values and a straight-line judgement |
| 1 | (b) Slope about 0.30 kg·m/s compared with the prediction |
| 1 | (c) About 75% transformed, with a named destination |
| 1 | (d) External friction as the cause, with a test that would show it |

**Total: 5 points.** Multiplying M by v for each trial (all about 0.295 kg·m/s) also earns the (b) points if compared with 0.30 kg·m/s.
</details>

## How did you do?

Questions 1 to 3 are worth 1 point each, Questions 4 to 6 are worth 6 each and Question 7 is worth 5: 26 in all. The total shows what to revisit; it does not predict an exam score.

- **Q1 or Q2 incomplete:** revisit momentum from position functions, vector addition and K = p²/(2m) with the [Topic 4.1 checklist](/advanced-course-resources/physics-c-mechanics/4-1-linear-momentum-checklist/).
- **Q3 or Q5(a), (d) incomplete:** practise areas under F–t graphs and slopes of p–t graphs with the [Topic 4.2 checklist](/advanced-course-resources/physics-c-mechanics/4-2-change-momentum-impulse-checklist/).
- **Q5(c), Q6(a), (b) or Q7(a), (b) incomplete:** name the system and list external forces first. Use the [Topic 4.3 checklist](/advanced-course-resources/physics-c-mechanics/4-3-conservation-linear-momentum-checklist/).
- **Q4, Q6(c), (d) or Q7(c) incomplete:** compare total kinetic energy before and after, and never use energy across an inelastic collision. Use the [Topic 4.4 checklist](/advanced-course-resources/physics-c-mechanics/4-4-elastic-inelastic-collisions-checklist/).

After you revise, retake the matching part of the [Unit 4 diagnostic](/advanced-course-resources/physics-c-mechanics/unit-4-diagnostic/), then try this review again a few days later.
