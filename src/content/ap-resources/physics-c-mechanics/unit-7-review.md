---
resourceId: "mb-ap-physcm-u7-review"
title: "Oscillations: Mixed Unit Review (Physics C: Mechanics Unit 7)"
description: "A one-hour mixed review of calculus-based oscillations: the big ideas that link Topics 7.1 to 7.5, a summary table and seven original questions that each combine two or more topics."
course: "physics-c-mechanics"
unit: 7
topics: []
resourceType: "unit-review"
prerequisites:
  - "You have studied Topics 7.1 to 7.5"
  - "Torque, rotational inertia and the parallel axis theorem (Unit 5)"
prerequisiteResources: ["mb-ap-physcm-u7-diagnostic"]
learningObjectives:
  - "Connect the SHM condition, period, x(t), energy and pendulums into one method for any oscillator"
  - "Solve multi-step problems that combine two or more Unit 7 topics"
  - "Find ω from a force law, a potential energy function or a rotational equation of motion"
  - "Use energy and starting conditions together to find amplitude, phase and timings"
  - "Use timing data and a linearised graph to find g from a physical pendulum"
skills: ["1", "2", "3"]
studyMinutes: 60
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculus by hand; a calculator for arithmetic, square roots and trigonometry in radian mode. We use g = 9.8 m/s²; answers with g = 10 m/s² are equally acceptable. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-u7-diagnostic", "mb-ap-physcm-7.1-checklist", "mb-ap-physcm-7.2-checklist", "mb-ap-physcm-7.3-checklist", "mb-ap-physcm-7.4-checklist", "mb-ap-physcm-7.5-checklist"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Every oscillation problem starts the same way: find equilibrium, measure the displacement from it and write Newton's second law."
  - "If the result is d²x/dt² = −ω²x (or the same in θ), the motion is SHM and T = 2π/ω, whatever the amplitude."
  - "x = A cos(ωt + φ₀) gives v_max = Aω and a_max = Aω²; the starting position and velocity fix A and φ₀."
  - "Total energy is constant and equals ½kA²; K and U trade places twice per cycle."
  - "Pendulums use τ = Iα with I about the pivot; gravity pendulums need small angles, torsion pendulums do not need g."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

This review links the five topics of Unit 7 (Oscillations). Read the big ideas and table, then try the seven mixed questions **without notes**. These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric, not official scoring. Use g = 9.8 m/s² (10 m/s² is equally acceptable) and keep your calculator in radian mode. Springs are ideal unless stated. If you have not yet done the [Unit 7 diagnostic](/advanced-course-resources/physics-c-mechanics/unit-7-diagnostic/), do it first.

## Big ideas of the unit

- **SHM is defined by the force.** Measure displacement from equilibrium and check that the net force is −k × displacement. A constant force such as gravity only moves the equilibrium ([Topic 7.1](/advanced-course-resources/physics-c-mechanics/7-1-defining-simple-harmonic-motion-shm-study-guide/)).
- **Any smooth well is nearly SHM for small swings.** Near a minimum of U(x), k_eff = d²U/dx² ([Topic 7.1](/advanced-course-resources/physics-c-mechanics/7-1-defining-simple-harmonic-motion-shm-study-guide/)).
- **The equation of motion gives the period.** Rearrange to d²x/dt² = −ω²x, read off ω, then T = 2π/ω ([Topic 7.2](/advanced-course-resources/physics-c-mechanics/7-2-frequency-period-shm-study-guide/)).
- **The system sets ω; the start sets A and φ₀.** x = A cos(ωt + φ₀). Differentiate for v_x and a_x; use the signs of cos φ₀ and sin φ₀ to choose the quadrant ([Topic 7.3](/advanced-course-resources/physics-c-mechanics/7-3-representing-analyzing-shm-study-guide/)).
- **Amplitude changes energy and speeds, not the period.** v_max = Aω, a_max = Aω² and E = ½kA² all grow with A; T does not ([Topics 7.3](/advanced-course-resources/physics-c-mechanics/7-3-representing-analyzing-shm-study-guide/) and [7.4](/advanced-course-resources/physics-c-mechanics/7-4-energy-simple-harmonic-oscillators-study-guide/)).
- **Energy is often the quickest route.** K + U = ½kA² links position, speed and amplitude without the phase ([Topic 7.4](/advanced-course-resources/physics-c-mechanics/7-4-energy-simple-harmonic-oscillators-study-guide/)).
- **Resonance:** driving at the natural frequency builds amplitude ([Topic 7.3](/advanced-course-resources/physics-c-mechanics/7-3-representing-analyzing-shm-study-guide/)).
- **Pendulums are rotational SHM.** τ = Iα with τ = −mgd sin θ ≈ −mgdθ gives T = 2π√(I/(mgd)), with I about the pivot. A torsion pendulum uses τ = −κθ instead ([Topic 7.5](/advanced-course-resources/physics-c-mechanics/7-5-simple-physical-pendulums-study-guide/)).

## Key relationships and methods

| Idea | Relationship or method |
|---|---|
| SHM condition | m a_x = −kΔx, Δx from equilibrium; constant forces shift equilibrium only |
| Small oscillations in a well | k_eff = d²U/dx² at the minimum |
| Equation of motion | d²x/dt² = −ω²x; then T = 2π/ω, f = 1/T = ω/2π |
| Spring | ω = √(k/m); vertical spring T = 2π√(d/g), d = static stretch |
| Solution | x = A cos(ωt + φ₀); v_x = −Aω sin(ωt + φ₀); a_x = −ω²x |
| Starting conditions | A = √(x₀² + (v_x0/ω)²); cos φ₀ = x₀/A, sin φ₀ = −v_x0/(Aω) |
| Extremes | v_max = Aω at x = 0; a_max = Aω² at x = ±A |
| Energy | E = K + U = ½kA²; K = ½k(A² − x²); K = U at x = ±A/√2; K and U repeat every T/2 |
| Physical pendulum | T = 2π√(I/(mgd)), I = I_cm + md² about the pivot, small angles |
| Simple and torsion pendulums | T = 2π√(ℓ/g); T = 2π√(I/κ) (no g, no small-angle step) |

## Question 1 (multiple choice · mixed)

A block on a spring oscillates with period T and greatest acceleration a. It is replaced by a block with **one quarter of the mass** on the same spring, released from the **same amplitude**. What are the new period and greatest acceleration?

- (A) T/4; 16a
- (B) T/2; 4a
- (C) T/2; 2a
- (D) 2T; a/4

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** ω = √(k/m), so a quarter of the mass doubles ω and halves T. With the same A, a_max = Aω² becomes 4 times as large.

- (A) uses T ∝ m instead of √m, so ω is 4 times as large and a_max 16 times.
- (C) halves T correctly but scales a_max like v_max = Aω, which only doubles.
- (D) inverts both dependences: a lighter block oscillates faster.
</details>

## Question 2 (multiple choice · mixed)

A 0.40 kg object oscillates on a horizontal spring. A data logger shows that the spring's potential energy has a maximum of 0.20 J and that its graph **repeats every 0.50 s**. What is the amplitude?

- (A) 0.013 m
- (B) 0.080 m
- (C) 0.11 m
- (D) 0.16 m

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** U repeats twice per cycle, so the period of the motion is T = 1.0 s and ω = 2π rad/s. Then k = mω² = 0.40 × 39.5 = 15.8 N/m, and ½kA² = 0.20 J gives A = √(0.40 ÷ 15.8) = 0.16 m.

- (A) is E/k with no square root and no factor 2.
- (B) treats 0.50 s as the period of x. The energy repeats at T/2.
- (C) uses E = kA², dropping the ½.
</details>

## Question 3 (multiple choice · mixed)

Take **+x along a straight track**. A 0.10 kg bead moves in a system with potential energy U(x) = (0.50 J)[1 − cos(x ÷ 0.20 m)]. What is the period of **small** oscillations about x = 0?

- (A) 0.56 s
- (B) 0.79 s
- (C) 2.8 s
- (D) 0.089 s

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** U has a minimum at x = 0. d²U/dx² = (0.50 ÷ 0.20²) cos(x ÷ 0.20), so k_eff = 12.5 N/m at x = 0. ω = √(12.5 ÷ 0.10) = 11.2 rad/s and T = 2π/ω = 0.56 s.

- (B) expands U ≈ 6.25x² and takes 6.25 as k. U = ½kx² means k is **twice** the coefficient of x².
- (C) uses k = 0.50 N/m, forgetting the chain-rule factor 1/0.20² in each derivative.
- (D) is 1/ω, not 2π/ω.
</details>

## Question 4 (constructed response · mixed)

Take **+y upward**, origin at equilibrium. A platform fixed to the top of a vertical spring (k = 200 N/m) carries a small 0.010 kg coin. The platform and coin together have mass 0.50 kg. The platform is pushed down 1.5 cm below equilibrium and released at t = 0.

(a) Find how far the spring is compressed at equilibrium.
(b) Show that the motion is SHM and find ω and T. Check T with the static compression.
(c) Write y(t), and find v_max and a_max.
(d) Find the normal force on the coin at the top and at the bottom of the motion.
(e) Find the largest amplitude for which the coin stays on the platform. Compare it with (a) and explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** kd = mg, so d = 0.50 × 9.8 ÷ 200 = **0.0245 m** (2.5 cm).

**(b)** At displacement y the compression is d − y, so F_net = k(d − y) − mg = −ky. Then d²y/dt² = −(k/m)y = −(400 s⁻²)y: SHM with **ω = 20 rad/s** and **T = 0.31 s**. Check: 2π√(d/g) = 2π√(0.0245 ÷ 9.8) = 0.31 s.

**(c)** It starts at rest at the bottom, y = −A: **y = −(0.015 m) cos(20t)**. v_max = Aω = **0.30 m/s**; a_max = Aω² = **6.0 m/s²**.

**(d)** For the coin, N − m_c g = m_c a_y. At the top, a_y = −6.0 m/s²: N = 0.010(9.8 − 6.0) = **0.038 N**. At the bottom, a_y = +6.0 m/s²: N = 0.010(9.8 + 6.0) = **0.16 N**.

**(e)** Contact is lost at the top if N reaches zero, that is when a_max = g. So A_max = g/ω² = 9.8 ÷ 400 = **0.0245 m**, equal to d. At that amplitude the spring just reaches its natural length at the top, so both fall at g. Any larger, and the stretched spring pulls the platform down faster than g while only gravity acts on the coin, so it lifts off.

| Point | What earns it |
|---|---|
| 1 | (a) d from kd = mg |
| 1 | (b) Net force −ky using kd = mg, and ω = 20 rad/s |
| 1 | (b) T = 0.31 s, confirmed with 2π√(d/g) |
| 1 | (c) y(t) with the correct sign or phase for a release at the bottom |
| 1 | (c) v_max = 0.30 m/s and a_max = 6.0 m/s² |
| 1 | (d) Both normal forces from Newton's second law on the coin |
| 1 | (e) A_max = g/ω² = 0.0245 m, linked to the spring reaching its natural length |

**Total: 7 points.** y = (0.015 m) cos(20t + π) is equally correct in (c).
</details>

## Question 5 (constructed response · mixed)

Take **+x to the right** of equilibrium. A 0.20 kg glider is attached to a spring with k = 20 N/m. A sensor shows that the system's kinetic energy has a greatest value of 0.090 J. At t = 0 the glider is to the right of equilibrium, moving toward it, and its kinetic energy is one quarter of its greatest value.

(a) Find ω, the amplitude and v_max.
(b) Find x₀ and v_x0 at t = 0.
(c) Find φ₀ and write x(t) in the form A cos(ωt + φ₀).
(d) Find the first time after t = 0 at which K = U, and the first time the glider passes through equilibrium.
(e) Sketch K and U against time for one period, marking the times in (d).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** ω = √(20 ÷ 0.20) = **10 rad/s** (T = 0.63 s). E = 0.090 J = ½kA², so **A = 0.095 m** (0.0949 m). ½mv_max² = E gives **v_max = 0.95 m/s**.

**(b)** K = E/4 means U = 3E/4, so x₀² = ¾A² and **x₀ = +0.082 m** (A√3/2). The speed is v_max/2, and the glider moves toward equilibrium, in −x: **v_x0 = −0.47 m/s**.

**(c)** cos φ₀ = x₀/A = 0.866 and sin φ₀ = −v_x0/(Aω) = +0.50. Both point to the first quadrant: **φ₀ = π/6 = 0.52 rad**. So **x = (0.095 m) cos(10t + 0.52)**.

**(d)** K = U at x = ±A/√2, first when 10t + π/6 = π/4: **t = 0.026 s**. Equilibrium is first reached when 10t + π/6 = π/2: **t = 0.10 s** (0.105 s).

**(e)** K starts at 0.0225 J, passes 0.045 J at t = 0.026 s, peaks at 0.090 J at t = 0.10 s, is zero at t = 0.26 s (x = −A) and repeats every T/2 = 0.31 s. U = 0.090 J − K: it starts at 0.0675 J and is zero at t = 0.10 s.

| Point | What earns it |
|---|---|
| 1 | (a) ω, A from ½kA² = E, and v_max |
| 1 | (b) x₀ from U = 3E/4 |
| 1 | (b) v_x0 = −v_max/2 with the correct sign |
| 1 | (c) φ₀ = π/6 from both cos φ₀ and sin φ₀, and x(t) |
| 1 | (d) Both times |
| 1 | (e) K and U sketches that repeat every T/2, cross at the (d) time and sum to a constant |

**Total: 6 points.** Carry forward an incorrect A or φ₀.
</details>

## Question 6 (constructed response · mixed)

A student hangs uniform rods of different lengths L from a pivot through one end and times 20 small swings for each. The data are invented for practice:

| L (m) | 0.20 | 0.40 | 0.60 | 0.80 | 1.00 |
|---|---|---|---|---|---|
| time for 20 swings (s) | 14.6 | 20.8 | 25.5 | 29.2 | 32.9 |

(a) Starting from T = 2π√(I/(mgd)), show that T² = (8π²/(3g))L for a uniform rod pivoted at one end (I = mL²/3).
(b) State what to plot to get a straight line through the origin. Calculate the plotted values.
(c) Use the slope to find g.
(d) Compare the 0.60 m rod's period with that of a 0.60 m simple pendulum. Explain the difference, and find the simple pendulum length that matches the rod.
(e) The 1.00 m rod is cut in half and the top half is hung from its end. Predict its period with a factor-of-change argument.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** d = L/2, so T = 2π√((mL²/3) ÷ (mgL/2)) = 2π√(2L/(3g)). Squaring: **T² = (8π²/(3g))L**. The mass cancels.

**(b)** Plot **T² (s²) against L (m)**. T = 0.730, 1.04, 1.275, 1.46, 1.645 s, so T² = **0.533, 1.08, 1.63, 2.13, 2.71 s²**.

**(c)** The best-fit line has slope ≈ 2.70 s²/m and passes very close to the origin. g = 8π² ÷ (3 × 2.70) ≈ **9.8 m/s²** (accept 9.6 to 10.0 m/s²).

**(d)** Rod: T = 1.275 s (model 1.27 s). Simple pendulum: 2π√(0.60 ÷ 9.8) = **1.55 s**. The rod is faster, by a factor √(2/3) ≈ 0.82: mass near the pivot adds little to I but still gives torque. Equivalent length: I/(md) = 2L/3 = **0.40 m**.

**(e)** T ∝ √L, so halving L multiplies T by 1/√2: 1.645 × 0.707 = **1.2 s** (1.16 s).

| Point | What earns it |
|---|---|
| 1 | (a) Substitutes I = mL²/3 and d = L/2, and reaches the linear form |
| 1 | (b) T² against L, with correct values |
| 1 | (c) g from the slope of a best-fit line, in the accepted range, with unit |
| 1 | (d) Both periods, with the reason (mass near the pivot) |
| 1 | (d) l_eq = 0.40 m |
| 1 | (e) 1.2 s from T ∝ √L |

**Total: 6 points.**
</details>

## Question 7 (constructed response · mixed)

Take **counterclockwise as positive**. A uniform 2.0 kg rod of length 1.20 m swings about a pivot at its top end. It is released from rest at 12° to the vertical.

(a) Find ω and T for small oscillations.
(b) Using the SHM solution θ = θ_max cos(ωt), find the greatest angular speed and the greatest speed of the rod's lower end.
(c) Use energy conservation with the exact gravitational potential energy, mgd(1 − cos θ), to find the greatest angular speed again. Compare it with (b).
(d) Explain why the two answers differ in the direction they do.
(e) How often does the rod's kinetic energy reach its greatest value?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** I = mL²/3 = 0.96 kg·m² and d = 0.60 m. ω = √(mgd/I) = √(11.76 ÷ 0.96) = **3.5 rad/s**; T = 2π/3.5 = **1.8 s** (1.80 s).

**(b)** θ_max = 12° = 0.209 rad. dθ/dt = −ωθ_max sin(ωt), so the greatest angular speed is ωθ_max = 3.5 × 0.209 = **0.733 rad/s**. The lower end moves at 0.733 × 1.20 = **0.88 m/s**.

**(c)** ΔU = mgd(1 − cos 12°) = 11.76 × 0.0219 = 0.257 J. ½IΩ² = 0.257 J gives **Ω = 0.732 rad/s**. The SHM value is larger, by only about 0.2%.

**(d)** The SHM model uses ½mgdθ², slightly **larger** than mgd(1 − cos θ), so it stores slightly more energy at release and gives a larger top speed. (Equivalently, sin θ < θ, so the true torque is weaker.)

**(e)** K is greatest each time the rod passes the vertical, twice per cycle: every **T/2 = 0.90 s**.

| Point | What earns it |
|---|---|
| 1 | (a) I about the pivot and d = L/2 used in ω = √(mgd/I) |
| 1 | (a) ω = 3.5 rad/s and T = 1.8 s |
| 1 | (b) ωθ_max with θ in radians, and the end speed |
| 1 | (c) Energy equation with ½IΩ² and the exact ΔU |
| 1 | (c) and (d) Comparison, with the reason (½mgdθ² > mgd(1 − cos θ), or sin θ < θ) |
| 1 | (e) T/2 = 0.90 s |

**Total: 6 points.**
</details>

## How did you do?

Questions 1 to 3 score 1 point each, Question 4 scores 7 and Questions 5 to 7 score 6 each: 28 in all. The total shows what to revisit; it does not predict an exam score.

- **Q3 or Q4(a)–(b):** find equilibrium first, then the net force about it. Use the [Topic 7.1 checklist](/advanced-course-resources/physics-c-mechanics/7-1-defining-simple-harmonic-motion-shm-checklist/).
- **Q1, Q6(e) or any period:** practise period formulas and factors of change with the [Topic 7.2 checklist](/advanced-course-resources/physics-c-mechanics/7-2-frequency-period-shm-checklist/).
- **Q1, Q4(c)–(e) or Q5(b)–(d):** check v_max = Aω, a_max = Aω² and the quadrant of φ₀. Use the [Topic 7.3 checklist](/advanced-course-resources/physics-c-mechanics/7-3-representing-analyzing-shm-checklist/).
- **Q2, Q5 or Q7(c)–(e):** link energy to amplitude; energy repeats every T/2. Use the [Topic 7.4 checklist](/advanced-course-resources/physics-c-mechanics/7-4-energy-simple-harmonic-oscillators-checklist/).
- **Q6 or Q7(a)–(b):** take I about the pivot and d to the centre of mass. Use the [Topic 7.5 checklist](/advanced-course-resources/physics-c-mechanics/7-5-simple-physical-pendulums-checklist/).

After revising, retake the matching [Unit 7 diagnostic](/advanced-course-resources/physics-c-mechanics/unit-7-diagnostic/) questions, then retry this review a few days later.
