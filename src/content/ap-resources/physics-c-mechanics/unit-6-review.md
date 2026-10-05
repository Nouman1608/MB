---
resourceId: "mb-ap-physcm-u6-review"
title: "Energy and Momentum of Rotating Systems: Mixed Unit Review (Physics C: Mechanics Unit 6)"
description: "A one-hour mixed review of rotational energy and angular momentum: the big ideas that link Topics 6.1 to 6.6, a summary table and seven original questions that each combine two or more topics."
course: "physics-c-mechanics"
unit: 6
topics: []
resourceType: "unit-review"
prerequisites:
  - "You have studied Topics 6.1 to 6.6"
  - "Rotational inertia, torque and Newton's second law for rotation (Unit 5)"
prerequisiteResources: ["mb-ap-physcm-u6-diagnostic"]
learningObjectives:
  - "Connect rotational energy, torque work, angular impulse and angular momentum into one toolkit for rotating systems"
  - "Solve multi-step problems that combine two or more Unit 6 topics"
  - "Decide whether to use energy, angular impulse or conservation of angular momentum, and justify the choice of system"
  - "Analyse rolling with and without slipping, including the energy that kinetic friction dissipates"
  - "Use energy and angular momentum together to describe orbits, and use experimental data to find a torque"
skills: ["1", "2", "3"]
studyMinutes: 60
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculus by hand; a calculator for arithmetic and square roots. Angles in radians, angular speeds in rad/s. We use g = 9.8 m/s² and G = 6.67 × 10⁻¹¹ N·m²/kg². Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-u6-diagnostic", "mb-ap-physcm-6.1-checklist", "mb-ap-physcm-6.2-checklist", "mb-ap-physcm-6.3-checklist", "mb-ap-physcm-6.4-checklist", "mb-ap-physcm-6.5-checklist", "mb-ap-physcm-6.6-checklist"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Energy questions use ½Iω² and W = ∫τ dθ; timing questions use L = Iω and angular impulse = ∫τ dt."
  - "Angular momentum is constant only for a system with zero net external torque about the chosen axis. Choose the system and the axis first."
  - "Conserving L does not conserve K: internal work can add or remove rotational kinetic energy."
  - "Rolling without slipping links v_cm = rω and loses no energy; slipping breaks the link and kinetic friction dissipates energy."
  - "Orbits use both conservation laws, with U = −GMm/r: E and L are constant in any orbit, and only a thrust can change them."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

This review links the six topics of Unit 6 (Energy and Momentum of Rotating Systems). Try the seven questions **without notes**; each combines two or more topics. These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric, not official scoring. Use g = 9.8 m/s² and G = 6.67 × 10⁻¹¹ N·m²/kg². All planets are fictional. Do the [Unit 6 diagnostic](/advanced-course-resources/physics-c-mechanics/unit-6-diagnostic/) first if you have not.

## Big ideas of the unit

- **Spinning bodies store kinetic energy.** K_rot = ½Iω², and a body that moves and spins has K = ½Mv_cm² + ½I_cm ω² ([Topic 6.1](/advanced-course-resources/physics-c-mechanics/6-1-rotational-kinetic-energy-study-guide/)).
- **Torques change that energy through an angle.** W = ∫τ dθ is the area under a τ–θ graph, and W_net = ΔK_rot ([Topic 6.2](/advanced-course-resources/physics-c-mechanics/6-2-torque-work-study-guide/)).
- **Torques change angular momentum over time.** Angular impulse ∫τ dt is the area under a τ–t graph and equals ΔL; τ_net is the slope of L–t. A point object moving in a straight line still has L = r × p about a point off its line ([Topic 6.3](/advanced-course-resources/physics-c-mechanics/6-3-angular-momentum-angular-impulse-study-guide/)).
- **The system decides what is conserved.** Internal torques cancel in pairs. With zero net external torque about an axis, L about it is constant, even if the shape changes. Constant L does not mean constant K ([Topic 6.4](/advanced-course-resources/physics-c-mechanics/6-4-conservation-angular-momentum-study-guide/)).
- **Rolling ties translation to rotation.** Without slipping, v_cm = rω and static friction does no work. While slipping, there is no link and kinetic friction dissipates energy ([Topic 6.5](/advanced-course-resources/physics-c-mechanics/6-5-rolling-study-guide/)).
- **Orbits use both conservation laws.** Gravity exerts no torque about the planet's centre, so L is constant; E is constant with U = −GMm/r ([Topic 6.6](/advanced-course-resources/physics-c-mechanics/6-6-motion-orbiting-satellites-study-guide/)).

## Key relationships and methods

| Idea | Relationship or method |
|---|---|
| Kinetic energy | K_rot = ½Iω²; K = ½Mv_cm² + ½I_cm ω² |
| Work by a torque | W = ∫τ dθ (area under τ–θ); W_net = ΔK_rot |
| Angular momentum | rigid body L = Iω; point object L = r × p, size mvr sin θ |
| Angular impulse | ∫τ dt (area under τ–t) = ΔL; τ_net = dL/dt |
| Conservation | net external torque zero about an axis → L about it constant |
| Rolling without slipping | v_cm = rω, a_cm = rα; with I_cm = βMr², K = ½M(1 + β)v_cm² |
| Rolling while slipping | v_cm ≠ rω; kinetic friction dissipates energy |
| Gravitational energy | U = −GMm/r, zero at infinite separation |
| Circular orbit | v = √(GM/r); K = −½U; E = ½U = −GMm/(2r) |
| Escape | E = 0, so v_esc = √(2GM/r) |

## Question 1 (multiple choice · mixed)

A yo-yo, modelled as a uniform solid cylinder, has its string wound round its outer edge, with the top end held still. Released from rest, it falls with the string vertical and unwinding without slipping. How fast is its centre moving after it has fallen 0.60 m?

- (A) 2.4 m/s
- (B) 2.8 m/s
- (C) 3.4 m/s
- (D) 4.8 m/s

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The string does not slip, so v = rω, as in rolling. The point where the string leaves the yo-yo is momentarily at rest, so tension does no work. Energy: Mgh = ½Mv² + ½(½Mr²)(v/r)² = ¾Mv², so v = √(4gh/3) = √7.84 = 2.8 m/s.

- (A) uses I = Mr², the value for a hoop.
- (C) is free fall, √(2gh), with no energy in the spin.
- (D) counts only the rotational energy, ¼Mv² = Mgh.
</details>

## Question 2 (multiple choice · mixed)

Satellite P moves in a circular orbit of radius r around a planet. Satellite Q, with twice P's mass, moves in a circular orbit of radius 9r around the same planet. What is the ratio L_Q/L_P of their angular momenta about the planet's centre?

- (A) 2/3
- (B) 2
- (C) 6
- (D) 18

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** In a circular orbit v = √(GM/r), so L = mvr = m√(GMr). Q has twice the mass and √9 = 3 times the √r, so L_Q/L_P = 2 × 3 = 6.

- (A) uses v = √(GM/r) but drops the factor r in L = mvr.
- (B) treats angular momentum per kilogram as the same in every orbit. It is constant **within** one orbit, not between orbits.
- (D) gives both satellites the same speed. The farther satellite moves more slowly.
</details>

## Question 3 (multiple choice · mixed)

A platform turns freely on a frictionless vertical axle. A motor on it winds two masses inward along rails. The total rotational inertia is 5.0 kg·m² at first, and ω rises from 2.0 rad/s to 5.0 rad/s. How much work does the motor do?

- (A) 15 J
- (B) 21 J
- (C) 25 J
- (D) 53 J

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** No external torque acts, so L = 5.0 × 2.0 = 10 kg·m²/s stays constant and the final I = 10 ÷ 5.0 = 2.0 kg·m². K rises from ½(5.0)(2.0)² = 10 J to ½(2.0)(5.0)² = 25 J. The motor's internal forces supply the 15 J difference. Constant L does not mean zero work: internal forces exert no net **torque**, but they can do work.

- (B) uses the final I for both energies: ½(2.0)(5.0² − 2.0²) = 21 J.
- (C) is the final kinetic energy, not the change.
- (D) keeps I = 5.0 kg·m² at the end.
</details>

## Question 4 (constructed response · mixed)

Take the direction of spin as positive. A flywheel (I = 0.50 kg·m²) starts from rest on a frictionless axle. A motor exerts τ(t) = 6.0 − 1.5t (N·m, t in s) from t = 0 to t = 4.0 s, then switches off.

(a) Find the angular impulse delivered and the angular velocity at t = 4.0 s.
(b) Find ω(t) and the angle turned in the first 4.0 s.
(c) Find the motor's work in two ways: from the kinetic energy, and from ∫τ dθ.
(d) A student estimates the work as (average torque) × (angle) = 3.0 × 64 = 192 J. Explain why this overestimates it.
(e) Sketch the L–t graph from 0 to 6.0 s and describe its key features.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** ∫₀⁴ (6.0 − 1.5t) dt = 24 − 12 = **12 N·m·s** = ΔL, so **ω = 12 ÷ 0.50 = 24 rad/s**.

**(b)** ω(t) = (1/I)∫₀ᵗ τ dt = (6.0t − 0.75t²) ÷ 0.50 = **12t − 1.5t²**. θ(t) = 6.0t² − 0.50t³, so θ(4.0) = 96 − 32 = **64 rad** (about 10 turns).

**(c)** From energy: W = ½(0.50)(24)² = **144 J**. From torque: dθ = ω dt, so W = ∫₀⁴ (6.0 − 1.5t)(12t − 1.5t²) dt = [36t² − 9.0t³ + 0.5625t⁴]₀⁴ = 576 − 576 + 144 = **144 J** ✓.

**(d)** 3.0 N·m is the **time** average. The torque is largest early on, when the wheel turns slowly and covers little angle. The angle average is only 144 ÷ 64 = 2.25 N·m.

**(e)** L rises from 0 along a curve that starts steep (slope 6.0 N·m) and flattens, reaching 12 kg·m²/s at 4.0 s with zero slope. From 4.0 s to 6.0 s it is flat: no torque acts.

| Point | What earns it |
|---|---|
| 1 | (a) 12 N·m·s and 24 rad/s from impulse = ΔL |
| 1 | (b) ω(t) by integration with ω₀ = 0 |
| 1 | (b) θ(t) and 64 rad |
| 1 | (c) 144 J both ways, with dθ = ω dt |
| 1 | (d) time-average versus angle-average argument |
| 1 | (e) concave-down rise to 12 kg·m²/s, flat after 4.0 s, slope = τ |

**Total: 6 points.**
</details>

## Question 5 (constructed response · mixed)

Take **+x to the right** and **clockwise as positive** (the sense of rolling to the right). A uniform solid cylinder (M = 2.0 kg, r = 0.10 m) is released from rest on a rough ramp. It rolls without slipping until its centre has dropped 0.90 m, rolls right across a rough level floor, then runs onto an **icy (frictionless) ramp** that rises to the right.

(a) Find v_cm and ω on the level floor.
(b) Explain why ω stays constant on the icy ramp, and find how high the centre rises.
(c) Account for all of the cylinder's original 17.6 J of gravitational energy at that highest point.
(d) It slides back onto the rough floor, moving left at the speed in (a). Find the velocity of its contact point, and state the direction of kinetic friction.
(e) Using angular momentum about a point on the floor, find its velocity once it rolls without slipping again, and the energy dissipated.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Mgh = ¾Mv², so v = √(4gh/3) = **3.4 m/s** (3.43 m/s) and ω = v/r = **34 rad/s**.

**(b)** On ice, gravity and the normal force act through the centre, so neither has a torque about it: **ω stays 34 rad/s**. Only translational energy becomes height: h = v²/(2g) = 11.76 ÷ 19.6 = **0.60 m**.

**(c)** At the top: Mgh = 11.8 J; K_trans = 0; K_rot = ½(½Mr²)ω² = 5.9 J. Total 17.6 J ✓.

**(d)** v_cm = −3.43 m/s and the spin is still clockwise, so the bottom moves at v_cm − rω = −3.43 − 3.43 = **−6.9 m/s** (left) relative to the floor. Kinetic friction acts **to the right**.

**(e)** Friction acts along the floor, and the normal force and weight cancel along one vertical line, so the net torque about a floor point is zero. L = Mrv_cm + I_cm ω = 2.0(0.10)(−3.43) + 0.010(34.3) = −0.343 kg·m²/s. Rolling, L = ³⁄₂Mrv, so **v = −1.1 m/s** (1.1 m/s to the left, a third of before). Then K = ¾(2.0)(1.14)² = 2.0 J, so **15.7 J** has been dissipated.

| Point | What earns it |
|---|---|
| 1 | (a) 3.4 m/s and 34 rad/s |
| 1 | (b) no torque about the centre, so ω constant |
| 1 | (b) 0.60 m from translational energy only |
| 1 | (c) 11.8 J + 5.9 J = 17.6 J |
| 1 | (d) −6.9 m/s, friction to the right |
| 1 | (e) L about a floor point conserved, v = 1.1 m/s left |
| 1 | (e) 15.7 J dissipated |

**Total: 7 points.**
</details>

## Question 6 (constructed response · mixed)

A 500 kg satellite moves in a circular orbit of radius r₀ = 8.0 × 10⁶ m around the fictional planet Veyra (mass 5.0 × 10²⁴ kg). A thruster then pushes it **forward along its velocity** for 300 s, raising its speed to 1.10 times the circular speed. Treat the burn as short, so r stays r₀.

(a) Find the circular orbit speed.
(b) Find the average thrust and the angular impulse it delivers about Veyra's centre. Show that this equals the change in L.
(c) Show that the satellite is still bound, and explain why E and L are constant after the burn.
(d) Find the satellite's greatest distance from Veyra's centre, and its speed there.
(e) Describe how its K, U and E change over one orbit after the burn.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** GM = 6.67 × 10⁻¹¹ × 5.0 × 10²⁴ = 3.34 × 10¹⁴ N·m²/kg. v_c = √(GM/r₀) = **6.5 × 10³ m/s** (6457 m/s).

**(b)** v_p = 1.10 × 6457 = 7102 m/s, so Δv = 646 m/s. F = mΔv/Δt = 500 × 646 ÷ 300 = **1.1 × 10³ N**. The thrust is perpendicular to the radius, so the angular impulse is Fr₀Δt = **2.6 × 10¹² kg·m²/s**. ΔL = mr₀Δv = 500 × 8.0 × 10⁶ × 646 = 2.6 × 10¹² kg·m²/s ✓.

**(c)** v_esc = √2 × 6457 = 9.1 × 10³ m/s > 7102 m/s, so E < 0 (E = −8.2 × 10⁹ J). After the burn only gravity acts: it is conservative (E constant) and points at Veyra's centre, so has no torque about it (L constant).

**(d)** At the far point r_a, the velocity is again perpendicular to the radius. L gives v_a = v_p r₀/r_a. Energy: ½v_p² − GM/r₀ = ½v_a² − GM/r_a. Solving gives r_a = r₀(1.21 ÷ 0.79) = **1.2 × 10⁷ m** (1.23 × 10⁷ m), and v_a = 7102 × 8.0 ÷ 12.25 = **4.6 × 10³ m/s**.

**(e)** E stays at −8.2 × 10⁹ J. Going out, U rises and K falls equally; coming back, the reverse. K is largest at r₀.

| Point | What earns it |
|---|---|
| 1 | (a) 6.5 × 10³ m/s |
| 1 | (b) thrust 1.1 × 10³ N and angular impulse Fr₀Δt |
| 1 | (b) matches mr₀Δv = 2.6 × 10¹² kg·m²/s |
| 1 | (c) bound (speed below escape or E < 0), with reasons for constant E and L |
| 1 | (d) both conservation laws used, r_a = 1.2 × 10⁷ m and v_a = 4.6 × 10³ m/s |
| 1 | (e) E constant; K and U trade, K largest at r₀ |

**Total: 6 points.**
</details>

## Question 7 (constructed response · mixed)

A bicycle wheel (I = 0.12 kg·m²) spins freely on a fixed axle. A student records its angular speed every 10 s (invented data):

| t (s) | 0 | 10 | 20 | 30 | 40 |
|---|---|---|---|---|---|
| ω (rad/s) | 20.0 | 17.1 | 13.9 | 11.0 | 8.0 |

(a) Describe what to plot to find the friction torque, and find it.
(b) Find the angular impulse of friction from 0 to 40 s.
(c) Estimate the angle the wheel turns from 0 to 40 s.
(d) Check that the work done by friction matches the loss of kinetic energy.
(e) Predict when the wheel stops, stating your assumption. Describe the ω–t graph if the friction torque grew with speed.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Plot **ω against t**. The best-fit slope is α = −0.30 rad/s², so the friction torque is τ = Iα = 0.12 × (−0.30) = **−0.036 N·m**. The points lie near a line, so the torque is nearly constant.

**(b)** Angular impulse = ΔL = 0.12 × (8.0 − 20.0) = **−1.4 kg·m²/s** (or τΔt = −0.036 × 40).

**(c)** The angle is the area under the ω–t graph. The trapezium rule gives **560 rad** (about 89 turns).

**(d)** W = τΔθ = −0.036 × 560 = −20 J. ΔK = ½(0.12)(8.0² − 20.0²) = −20.2 J. They agree to 2 significant figures ✓.

**(e)** With a constant torque, the remaining 8.0 rad/s takes 8.0 ÷ 0.30 = 27 s, so the wheel stops at about **67 s**. If the torque grew with speed, the graph would be steepest at the start and flatten as the wheel slows (concave up).

| Point | What earns it |
|---|---|
| 1 | (a) ω–t plot, slope = α, τ = Iα = −0.036 N·m |
| 1 | (b) −1.4 kg·m²/s from ΔL or τΔt |
| 1 | (c) area under ω–t, about 560 rad |
| 1 | (d) −20 J both ways |
| 1 | (e) about 67 s, assuming constant friction torque |
| 1 | (e) concave-up curve, steeper at high ω |

**Total: 6 points.** Accept slopes from −0.29 to −0.31 rad/s².
</details>

## How did you do?

Questions 1 to 3 score 1 point each, Question 5 scores 7 and Questions 4, 6 and 7 score 6 each: 28 in all. The total shows what to revisit; it does not predict an exam score.

- **Q1 or Q5(a)–(c):** split K into translation and rotation; see the [Topic 6.1 checklist](/advanced-course-resources/physics-c-mechanics/6-1-rotational-kinetic-energy-checklist/).
- **Q4(c)–(d) or Q7(c)–(d):** practise W = ∫τ dθ; see the [Topic 6.2 checklist](/advanced-course-resources/physics-c-mechanics/6-2-torque-work-checklist/).
- **Q2, Q4(a), (e), Q6(b) or Q7(a)–(b):** link angular impulse, ΔL and L–t slopes; see the [Topic 6.3 checklist](/advanced-course-resources/physics-c-mechanics/6-3-angular-momentum-angular-impulse-checklist/).
- **Q3 or Q5(e):** name the system and axis first; see the [Topic 6.4 checklist](/advanced-course-resources/physics-c-mechanics/6-4-conservation-angular-momentum-checklist/).
- **Q1 or Q5:** use v_cm = rω only while rolling without slipping; see the [Topic 6.5 checklist](/advanced-course-resources/physics-c-mechanics/6-5-rolling-checklist/).
- **Q2 or Q6:** use U = −GMm/r and both conservation laws; see the [Topic 6.6 checklist](/advanced-course-resources/physics-c-mechanics/6-6-motion-orbiting-satellites-checklist/).

After revising, retake the matching part of the [Unit 6 diagnostic](/advanced-course-resources/physics-c-mechanics/unit-6-diagnostic/), then try this review again later.
