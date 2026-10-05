---
resourceId: "mb-ap-physcm-u2-review"
title: "Force and Translational Dynamics: Mixed Unit Review (Physics C: Mechanics Unit 2)"
description: "A one-hour mixed review of forces and Newton's laws with calculus: the big ideas linking Topics 2.1 to 2.10, a summary table and seven original questions that each combine two or more topics."
course: "physics-c-mechanics"
unit: 2
topics: []
resourceType: "unit-review"
prerequisites:
  - "You have studied Topics 2.1 to 2.10"
  - "Differentiating, integrating and separating variables, as in Unit 1 and Topic 2.9"
prerequisiteResources: ["mb-ap-physcm-u2-diagnostic"]
learningObjectives:
  - "Connect systems, free-body diagrams and Newton's three laws into one method for any force problem"
  - "Solve multi-step problems that combine friction, springs, drag, gravity and circular motion"
  - "Decide when static friction holds, and switch to kinetic friction when it does not"
  - "Set up and solve Newton's second law when the force depends on time or velocity"
  - "Explain why a system's center of mass responds only to external forces"
skills: ["1", "2", "3"]
studyMinutes: 60
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculus by hand; a calculator for arithmetic, powers of ten, e^x, ln and trigonometry (degrees). Use g = 9.8 m/s² (10 m/s² is equally acceptable) and G = 6.67 × 10⁻¹¹ N·m²/kg². Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-u2-diagnostic", "mb-ap-physcm-2.1-checklist", "mb-ap-physcm-2.2-checklist", "mb-ap-physcm-2.3-checklist", "mb-ap-physcm-2.4-checklist", "mb-ap-physcm-2.5-checklist", "mb-ap-physcm-2.6-checklist", "mb-ap-physcm-2.7-checklist", "mb-ap-physcm-2.8-checklist", "mb-ap-physcm-2.9-checklist", "mb-ap-physcm-2.10-checklist"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Every dynamics problem starts the same way: name the system, draw its free-body diagram, choose axes, then write ΣF = ma one axis at a time."
  - "Only external forces change the motion of a system's center of mass; internal forces cancel in third-law pairs."
  - "Each force has its own model: GMm/r², μF_N, −kx, −kv. Find F_N from the forces first; it is not always mg."
  - "If the force depends on time or velocity, the acceleration does too. Integrate, or separate variables; never use constant-acceleration equations."
  - "Circular motion is the second law with a = v²/r toward the center, supplied by real forces."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

This review pulls together the ten topics of Unit 2 (Force and Translational Dynamics). Read the big ideas and the table, then try the seven questions **without notes**. Each combines two or more topics. These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric, not official scoring. If you have not yet done the [Unit 2 diagnostic](/advanced-course-resources/physics-c-mechanics/unit-2-diagnostic/), do it first.

## Big ideas of the unit

- **The system comes first.** Choosing a boundary decides which forces are external. A system can be treated as one particle at its center of mass, found by Σmx/M or ∫x dm/M ([Topic 2.1](/advanced-course-resources/physics-c-mechanics/2-1-systems-center-mass-study-guide/)).
- **Every force needs a "by what, on what".** Free-body diagrams show only forces on the system, one arrow each, no components ([Topic 2.2](/advanced-course-resources/physics-c-mechanics/2-2-forces-free-body-diagrams-study-guide/)).
- **Forces come in pairs on different objects.** Swap the names to find the partner. Internal pairs cancel, so only external forces move the center of mass; tension is a chain of such pairs ([Topic 2.3](/advanced-course-resources/physics-c-mechanics/2-3-newtons-third-law-study-guide/)).
- **ΣF = 0 means constant velocity, not rest.** Each axis is its own condition, judged in an inertial frame ([Topic 2.4](/advanced-course-resources/physics-c-mechanics/2-4-newtons-first-law-study-guide/)).
- **ΣF = ma links forces to Unit 1 calculus.** Differentiate v(t) to find the force; integrate F(t)/m to find v(t) ([Topic 2.5](/advanced-course-resources/physics-c-mechanics/2-5-newtons-second-law-study-guide/)).
- **Each force has a model.** Gravity GMm/r² with r from the center ([2.6](/advanced-course-resources/physics-c-mechanics/2-6-gravitational-force-study-guide/)); friction up to μ_sF_N or equal to μ_kF_N ([2.7](/advanced-course-resources/physics-c-mechanics/2-7-kinetic-static-friction-study-guide/)); springs −kx ([2.8](/advanced-course-resources/physics-c-mechanics/2-8-spring-forces-study-guide/)); drag −kv ([2.9](/advanced-course-resources/physics-c-mechanics/2-9-resistive-forces-study-guide/)).
- **Find the normal force, never assume it.** F_N changes on slopes, with angled pushes and in accelerating lifts, and friction and scale readings change with it.
- **Circular motion is the second law pointing inward.** Real forces supply mv²/r; a changing speed adds a tangential part ([Topic 2.10](/advanced-course-resources/physics-c-mechanics/2-10-circular-motion-study-guide/)).

## Key relationships and methods

| Idea | Relationship or method |
|---|---|
| Center of mass | x_cm = Σmᵢxᵢ/M; x_cm = (1/M)∫x λ(x) dx with M = ∫λ dx |
| Third law | F_B on A = −F_A on B; same type, different objects |
| Second law | ΣF_x = ma_x for the chosen system; a_x(t) = ΣF_x(t)/m, then integrate |
| Gravity | F = Gm₁m₂/r²; g = GM/r²; inside a uniform sphere F ∝ r |
| Apparent weight | N = m(g + a_y), +y up |
| Friction | static: \|f\| ≤ μ_sF_N (equal to what is needed); kinetic: f = μ_kF_N, against relative motion |
| Springs | F_x = −kx; series 1/k_eq = Σ1/kᵢ (same force); parallel k_eq = Σkᵢ (same stretch) |
| Linear drag | m dv/dt = F − kv; v_T = F/k; τ = m/k; v = v_T(1 − e^(−t/τ)) from rest |
| Circular motion | a_c = v²/r = 4π²r/T² inward; a_t = dv/dt; orbit T² = 4π²r³/(GM) |

## Question 1 (multiple choice · mixed)

A satellite moves in a circular orbit at a height above Earth's surface equal to Earth's radius. An astronaut floats inside it. What is the size of the astronaut's acceleration? (The surface field is 9.8 N/kg.)

- (A) 0
- (B) 2.5 m/s²
- (C) 4.9 m/s²
- (D) 9.8 m/s²

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The orbit radius is 2R from Earth's center, so g = 9.8/2² = 2.45 m/s². Gravity is the only force, so this field is the astronaut's centripetal acceleration. She floats because the cabin has the same acceleration, so the floor need not push on her.

- (A) confuses floating (zero apparent weight) with zero acceleration. A circular path always needs an inward acceleration.
- (C) treats the field as falling with 1/r.
- (D) ignores the height entirely.
</details>

## Question 2 (multiple choice · mixed)

A coin sits on a turntable spinning at a steady 0.75 revolutions per second. For coin and turntable, μ_s = 0.30 and μ_k = 0.20. What is the greatest distance from the axis at which the coin can ride without slipping?

- (A) 5.2 m
- (B) 0.83 m
- (C) 0.13 m
- (D) 0.088 m

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Static friction is the only horizontal force, so it supplies the inward acceleration: m(2πf)²r ≤ μ_s mg. The mass cancels: r_max = μ_s g/(2πf)² = 2.94 ÷ 22.2 = **0.13 m**.

- (A) leaves out 2π altogether, treating revolutions per second as rad/s.
- (B) uses 2πf² instead of (2πf)².
- (D) uses μ_k. The coin does not slide relative to the turntable, so static friction applies.
</details>

## Question 3 (multiple choice · mixed)

A uniform rope of mass m lies straight on a smooth floor. A force F pulls its front end along the rope's line, so the rope accelerates. What is the tension at a point 0.30 of the rope's length from the **back** end?

- (A) F
- (B) 0.70F
- (C) 0.50F
- (D) 0.30F

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The whole rope has a = F/m. The piece behind the point has mass 0.30m, and its only horizontal force is the tension there: T = 0.30m × F/m = **0.30F**.

- (A) treats the rope as ideal. A rope with mass needs a net force on every piece to accelerate it.
- (B) uses the mass in front of the point. That piece is pulled by F and held back by T.
- (C) is the tension at the midpoint.
</details>

## Question 4 (constructed response · mixed)

Block A (5.0 kg) sits on a rough slope at 30°. A light string parallel to the slope runs from A up over a light, frictionless pulley at the top to a hanging block B. Between A and the slope, μ_s = 0.40 and μ_k = 0.25. Take **+x up the slope** for A and **+ downward** for B.

(a) Draw free-body diagrams for A and for B, with B moving down.
(b) Find the smallest mass of B that makes A start to slide **up** the slope.
(c) B has mass 5.0 kg. Find the acceleration and the tension.
(d) Find the speed after B has fallen 0.80 m from rest.
(e) A student says the tension is 49 N, B's weight. Explain the error.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** A: gravity (Earth on A) down; normal force (slope on A) perpendicular to the slope; tension (string on A) up the slope; friction (slope on A) **down** the slope, opposing A's motion relative to the slope. B: gravity down, tension up.

**(b)** F_N = 5.0 × 9.8 cos 30° = 42.4 N, so the static limit is 0.40 × 42.4 = 17.0 N. Just before slipping, B's weight must match the down-slope gravity component plus maximum static friction: m_B g = 24.5 + 17.0, so **m_B = 4.2 kg** (4.23 kg).

**(c)** 5.0 kg > 4.2 kg, so the blocks slide and kinetic friction, 0.25 × 42.4 = 10.6 N, acts. System A + B (tension internal): (5.0 + 5.0)a = 49 − 24.5 − 10.6, so **a = 1.4 m/s²** (1.39). Block B: 49 − T = 5.0a, so **T = 42 N**.

**(d)** a is constant, so v² = 2ad = 2 × 1.39 × 0.80, giving **v = 1.5 m/s**.

**(e)** T = mg only if B has no acceleration. B accelerates downward, so the net force on it points down and T < m_B g.

| Point | What earns it |
|---|---|
| 1 | (a) Correct forces on both blocks, friction down the slope, no components drawn |
| 1 | (b) F_N = mg cos θ and the static limit 17 N |
| 1 | (b) 4.2 kg from the balance at the point of slipping |
| 1 | (c) Uses kinetic friction and the total mass to get 1.4 m/s² |
| 1 | (c) T = 42 N from one block |
| 1 | (d) 1.5 m/s, and (e) T < m_B g because B accelerates |

**Total: 6 points.** Carry forward an incorrect a into (c) and (d).
</details>

## Question 5 (constructed response · mixed)

Take **+y upward**. A 0.60 kg block hangs from two identical ideal springs, each 150 N/m, joined end to end, from the ceiling of a lift. A damper stops the block bouncing, so it moves with the lift. The lift starts from rest at t = 0 with a_y(t) = 2.0 − 0.50t for 0 ≤ t ≤ 4.0 s.

(a) Find the equivalent spring constant and the total stretch when the lift is at rest.
(b) Find the total stretch as a function of t, and its values at t = 0 and t = 4.0 s.
(c) Find the lift's velocity at t = 4.0 s. Explain why the stretch then equals the at-rest value.
(d) A student says: "The block is at rest relative to the lift, so the spring force equals its weight." Evaluate this claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** In series, 1/k_eq = 1/150 + 1/150, so **k_eq = 75 N/m**. At rest, k_eq s = mg, so s = 5.88 ÷ 75 = **7.8 cm** (0.0784 m).

**(b)** In the ground frame the block accelerates with the lift: k_eq s − mg = ma_y, so s = m(g + a_y)/k_eq = 0.60(11.8 − 0.50t)/75 = **0.0944 − 0.0040t** (m). At t = 0, **9.4 cm**; at t = 4.0 s, **7.8 cm**. Each spring stretches half as much.

**(c)** v_y = ∫₀ᵗ (2.0 − 0.50t) dt = 2.0t − 0.25t², so **v_y = 4.0 m/s** at 4.0 s. Then a_y = 0, so the forces on the block balance (first law) and the stretch equals the at-rest value, even though the lift is moving. The spring responds to acceleration, not velocity.

**(d)** Wrong. The lift's frame accelerates, so it is not inertial. In the ground frame the block accelerates upward, so the spring force must exceed the weight by ma_y: 7.1 N against 5.9 N at t = 0.

| Point | What earns it |
|---|---|
| 1 | (a) k_eq = 75 N/m from the series rule |
| 1 | (a) 7.8 cm from k_eq s = mg |
| 1 | (b) Second law gives s = m(g + a_y)/k_eq |
| 1 | (b) 9.4 cm and 7.8 cm |
| 1 | (c) 4.0 m/s by integration, with a_y = 0 so ΣF = 0 |
| 1 | (d) Rejects the claim: non-inertial frame, spring force exceeds mg while a_y > 0 |

**Total: 6 points.**
</details>

## Question 6 (constructed response · mixed)

Take **+x forward**. A 2.0 kg toy boat starts from rest. Its propeller gives a constant forward thrust of 3.0 N, and the water exerts a drag F_r = −kv with k = 1.5 kg/s.

(a) Write Newton's second law for the boat, and find its terminal speed and time constant.
(b) Solve for v(t) by separating variables.
(c) Find the acceleration at t = 0, and the time to reach 1.8 m/s.
(d) At terminal speed the propeller stops. Find the greatest distance the boat can then coast. A student uses the initial deceleration as constant and gets 1.3 m. Explain why the true value is larger.
(e) The thrust is doubled. State the effect on the terminal speed and on the time constant.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Horizontally: m dv/dt = F − kv. At terminal speed ΣF = 0 (first law), so v_T = F/k = **2.0 m/s**; τ = m/k = **1.3 s** (1.33 s).

**(b)** dv/(F − kv) = dt/m. Integrating from (0, 0) to (t, v): −(1/k) ln[(F − kv)/F] = t/m, so **v = 2.0(1 − e^(−0.75t))** (m/s).

**(c)** At t = 0 there is no drag: a = 3.0 ÷ 2.0 = **1.5 m/s²**. 1.8 m/s is 90% of v_T: e^(−t/τ) = 0.10, so t = τ ln 10 = **3.1 s**.

**(d)** Now m dv/dt = −kv, so v = v_T e^(−t/τ) and x → v_Tτ = mv_T/k = **2.7 m**. The drag weakens as the boat slows, so it decelerates less and coasts further than the constant-deceleration estimate, 2.0² ÷ (2 × 1.5) = 1.3 m.

**(e)** v_T = F/k **doubles** to 4.0 m/s; τ = m/k is **unchanged**, because it does not involve F.

| Point | What earns it |
|---|---|
| 1 | (a) Equation with correct signs; v_T = 2.0 m/s and τ = 1.3 s |
| 1 | (b) Separates variables with matching limits |
| 1 | (b) v = 2.0(1 − e^(−0.75t)) |
| 1 | (c) 1.5 m/s² and 3.1 s |
| 1 | (d) 2.7 m, with the weakening drag explained |
| 1 | (e) v_T doubles, τ unchanged, with reasons |

**Total: 6 points.**
</details>

## Question 7 (constructed response · mixed)

Two fictional stars orbit each other far from other bodies: M₁ = 2.0 × 10³⁰ kg and M₂ = 6.0 × 10²⁹ kg, a constant 1.5 × 10¹¹ m apart. Each moves in a circle about their common center of mass. Take **+x from star 1 toward star 2**, origin at star 1.

(a) Find the position of the center of mass, and the radius of each star's orbit.
(b) Find the gravitational force on each star, and compare the two forces.
(c) Explain why the center of mass stays at rest.
(d) Using star 1's motion, show that T² = 4π²d³/[G(M₁ + M₂)], and find T in days.
(e) Find the ratio of the stars' speeds.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** x_cm = M₂d/(M₁ + M₂) = (6.0 × 10²⁹ × 1.5 × 10¹¹) ÷ 2.6 × 10³⁰ = **3.5 × 10¹⁰ m** from star 1. So r₁ = 3.5 × 10¹⁰ m and r₂ = d − r₁ = **1.2 × 10¹¹ m**.

**(b)** F = GM₁M₂/d² = (6.67 × 10⁻¹¹)(2.0 × 10³⁰)(6.0 × 10²⁹) ÷ (1.5 × 10¹¹)² = **3.6 × 10²⁷ N** on each, toward the other star. The forces are a third-law pair: equal and opposite.

**(c)** Take both stars as the system. The gravitational pair is internal and cancels, and there is no external force, so the center of mass does not accelerate: starting at rest, it stays at rest.

**(d)** Gravity supplies star 1's centripetal force: GM₁M₂/d² = M₁(4π²/T²)r₁. Substitute r₁ = M₂d/(M₁ + M₂): GM₂/d² = 4π²M₂d/[T²(M₁ + M₂)], which rearranges to the result. T = 2π√(d³/(G × 2.6 × 10³⁰)) = 2.8 × 10⁷ s ≈ **320 days**.

**(e)** Both stars share the period, so v = 2πr/T and v₁/v₂ = r₁/r₂ = M₂/M₁ = **0.30**. The lighter star moves faster.

| Point | What earns it |
|---|---|
| 1 | (a) x_cm and both orbit radii |
| 1 | (b) 3.6 × 10²⁷ N, equal on both by the third law |
| 1 | (c) Internal forces cancel and no external force acts |
| 1 | (d) Uses the separation d in Newton's law but r₁ for the circle |
| 1 | (d) Derivation and T ≈ 320 days |
| 1 | (e) Ratio 0.30 from the shared period |

**Total: 6 points.** Using r₁ in place of d in Newton's law of gravitation is the most common error.
</details>

## How did you do?

Questions 1 to 3 are worth 1 point each and Questions 4 to 7 are worth 6 points each, for 27 in all. The total shows what to revisit; it does not predict an exam score.

- **Q3, Q4(a) or Q7(b)–(c) incomplete:** name the system and sort internal from external forces. Use the [Topic 2.2 checklist](/advanced-course-resources/physics-c-mechanics/2-2-forces-free-body-diagrams-checklist/) and the [Topic 2.3 checklist](/advanced-course-resources/physics-c-mechanics/2-3-newtons-third-law-checklist/).
- **Q5(c)–(d) or Q6(a) incomplete:** revisit equilibrium and inertial frames with the [Topic 2.4 checklist](/advanced-course-resources/physics-c-mechanics/2-4-newtons-first-law-checklist/), then the [Topic 2.5 checklist](/advanced-course-resources/physics-c-mechanics/2-5-newtons-second-law-checklist/).
- **Q1 or Q7 incomplete:** measure r from the center. Use the [Topic 2.1 checklist](/advanced-course-resources/physics-c-mechanics/2-1-systems-center-mass-checklist/), the [Topic 2.6 checklist](/advanced-course-resources/physics-c-mechanics/2-6-gravitational-force-checklist/) and the [Topic 2.10 checklist](/advanced-course-resources/physics-c-mechanics/2-10-circular-motion-checklist/).
- **Q2 or Q4 incomplete:** find F_N first, then test static friction. Use the [Topic 2.7 checklist](/advanced-course-resources/physics-c-mechanics/2-7-kinetic-static-friction-checklist/).
- **Q5(a)–(b) incomplete:** ask "same force or same stretch?" with the [Topic 2.8 checklist](/advanced-course-resources/physics-c-mechanics/2-8-spring-forces-checklist/).
- **Q6 incomplete:** practise separating variables with the [Topic 2.9 checklist](/advanced-course-resources/physics-c-mechanics/2-9-resistive-forces-checklist/).

After you revise, retake the matching part of the [Unit 2 diagnostic](/advanced-course-resources/physics-c-mechanics/unit-2-diagnostic/), then try this review again a few days later.
