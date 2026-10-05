---
resourceId: "mb-ap-physcm-7.4-practice"
title: "Energy of Simple Harmonic Oscillators: Practice Questions (Physics C: Mechanics 7.4)"
description: "Seven original Marlbridge calculus-based practice questions on oscillator energy: energy sharing, E = ½kA², energy graphs, a constancy proof, sensor data and a sudden push."
course: "physics-c-mechanics"
unit: 7
topics: ["7.4"]
resourceType: "practice-questions"
prerequisites:
  - "Spring potential energy and conservation of energy"
  - "x(t) = A cos(ωt + φ₀) and ω = √(k/m)"
prerequisiteResources: ["mb-ap-physcm-7.4-study-guide"]
learningObjectives:
  - "Find the share of kinetic and potential energy at any position"
  - "Use E = ½kA² = ½mv_max² to find amplitudes, speeds and spring constants"
  - "Show that the total energy of a spring oscillator is constant, and find K(t) and U(t)"
  - "Interpret energy–position and energy–time graphs, and linearise energy data"
  - "Predict how energy, amplitude and period change when the system changes"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra and calculus by hand; calculator for arithmetic only, in radian mode. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-7.4-study-guide", "mb-ap-physcm-7.4-revision-notes", "mb-ap-physcm-7.4-checklist"]
next: "mb-ap-physcm-7.4-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "The system is always the object and its spring, with x from equilibrium."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. The system is the object together with its spring, displacement x is measured from equilibrium, springs are ideal and surfaces frictionless unless stated. Energies are in J, x in m, v in m/s and t in s. Round final answers to 2 significant figures unless told otherwise.

## Question 1 (multiple choice · foundation)

A spring–object system oscillates with amplitude A. At the instant the object is at x = 0.60A, what fraction of the total energy is kinetic?

- (A) 0.36
- (B) 0.40
- (C) 0.64
- (D) 0.80

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** U/E = (½kx²)/(½kA²) = (x/A)² = 0.60² = 0.36, so K/E = 1 − 0.36 = 0.64.

- (A) is the **potential** energy fraction.
- (B) assumes U grows in proportion to x, giving U/E = 0.60. U depends on x².
- (D) is v/v_max = √0.64. That is a ratio of speeds, not of energies.
</details>

## Question 2 (multiple choice · core)

An object on a spring oscillates with period 0.80 s. A data logger plots the system's kinetic energy against time. How long does it take for the kinetic energy graph to repeat itself?

- (A) 0.20 s
- (B) 0.40 s
- (C) 0.80 s
- (D) 1.6 s

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** For x = A cos(ωt), K ∝ sin²(ωt) = ½[1 − cos(2ωt)], which has angular frequency 2ω. So K repeats every T/2 = 0.40 s. Physically, K is a maximum each time the object passes equilibrium, which happens twice per cycle (once in each direction).

- (A) is T/4, the time from a maximum of K to the next zero of K.
- (C) assumes K repeats with the same period as x. Speed, not velocity, sets K, so the direction of motion does not matter.
- (D) is 2T, from halving instead of doubling the frequency.
</details>

## Question 3 (multiple choice · core)

Two identical springs are used. Block P (mass m) and block Q (mass 4m) each oscillate with the same amplitude A. Which statement is correct?

- (A) The systems have equal total energy; Q's maximum speed is half of P's.
- (B) Q's system has 4 times the total energy; the maximum speeds are equal.
- (C) The systems have equal total energy and equal maximum speeds.
- (D) The systems have equal total energy; Q's maximum speed is a quarter of P's.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** E = ½kA² contains only k and A, so the totals are equal. Then ½mv_max² = E gives v_max ∝ 1/√m: four times the mass, half the maximum speed.

- (B) assumes energy is proportional to mass. At fixed k and A, the spring stores the same energy at the turning points.
- (C) forgets that the same kinetic energy with more mass means a smaller speed.
- (D) uses v_max ∝ 1/m instead of 1/√m.
</details>

## Question 4 (graph · core)

A 0.32 kg object oscillates on a horizontal spring. An energy–position graph shows the spring potential energy as a parabola through (−0.20 m, 1.0 J), (0, 0) and (+0.20 m, 1.0 J). A horizontal line shows the system's total energy, 0.64 J.

(a) Find the spring constant.
(b) Find the amplitude and the maximum speed.
(c) Find the object's speed at x = −0.080 m.
(d) Find the positions at which the kinetic energy is 3 times the potential energy.

<details>
<summary>Worked solution</summary>

1. **(a)** U = ½kx²: 1.0 = ½k(0.20)², so **k = 50 N/m**.
2. **(b)** The turning points are where the line meets the parabola: ½ × 50 × A² = 0.64, so **A = 0.16 m**. v_max = √(2E/m) = √(2 × 0.64/0.32) = **2.0 m/s**.
3. **(c)** U = ½ × 50 × 0.080² = 0.16 J, so K = 0.64 − 0.16 = 0.48 J and v = √(2 × 0.48/0.32) = **1.7 m/s**. The sign of x does not matter, because U depends on x².
4. **(d)** K = 3U means E = 4U, so U = 0.16 J. That is the value from (c): **x = ±0.080 m**, which is ±A/2.

Suggested mark points (5): 1 for k; 1 for A from the intersection; 1 for v_max; 1 for the speed at −0.080 m; 1 for both positions in (d).

Common error: in (d), setting x = 3/4 of A. The condition is about energies, and U depends on x², so x = A/2.
</details>

## Question 5 (constructed response · core)

Take **+x to the right**. A block of mass m on a spring of constant k obeys m d²x/dt² = −kx.

(a) Show that the total energy E = ½mv_x² + ½kx² does not change with time.
(b) The block's motion is x = A sin(ωt), with ω = √(k/m). Find K(t) and U(t), and show that K + U = ½kA².
(c) Show that K(t) can be written as ¼kA²[1 + cos(2ωt)], and state its period in terms of T.
(d) State the four times in the first period at which K = U.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** dE/dt = mv_x (dv_x/dt) + kx (dx/dt) = v_x(m d²x/dt² + kx). By the equation of motion the bracket is zero, so **dE/dt = 0**.

**(b)** v_x = Aω cos(ωt). K = ½mA²ω² cos²(ωt) = ½kA² cos²(ωt), using mω² = k. U = ½kA² sin²(ωt). K + U = ½kA²(cos² + sin²) = **½kA²**.

**(c)** cos²θ = ½(1 + cos 2θ), so K = **¼kA²[1 + cos(2ωt)]**. Its angular frequency is 2ω, so its period is **T/2**.

**(d)** K = U when cos²(ωt) = sin²(ωt), so ωt = π/4, 3π/4, 5π/4, 7π/4: **t = T/8, 3T/8, 5T/8, 7T/8**.

| Point | What earns it |
|---|---|
| 1 | (a) Differentiates E with the chain rule |
| 1 | (a) Uses the equation of motion to show the bracket is zero |
| 1 | (b) Correct K(t) and U(t), using k = mω² |
| 1 | (b) Uses sin² + cos² = 1 to reach ½kA² |
| 1 | (c) Double-angle form and period T/2 |
| 1 | (d) All four times |

**Alternative for (a).** Substituting x(t) and v_x(t) and showing the sum is a constant is acceptable for (a) only if it is clear that the same result holds for any A and phase.
</details>

## Question 6 (constructed response · stretch)

Take **+x to the right** of equilibrium. A 0.40 kg glider on a spring oscillates on a level air track. A sensor records its speed at several positions:

| x (m) | 0.000 | 0.030 | 0.060 | 0.090 | 0.110 |
|---|---|---|---|---|---|
| speed v (m/s) | 1.04 | 1.01 | 0.900 | 0.687 | 0.415 |

(a) Show that if energy is conserved, K = E − ½kx².
(b) State what to plot to obtain a straight line, and what the slope and vertical intercept represent.
(c) Use the data to find k and E.
(d) Find the amplitude.
(e) Find the period.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** E = K + U is constant and U = ½kx², so **K = E − ½kx²**.

**(b)** Plot **K (J) against x² (m²)**. The line has **slope −k/2** and **vertical intercept E**.

**(c)** K = ½mv²: 0.216, 0.204, 0.162, 0.094, 0.034 J. Values of x²: 0, 0.0009, 0.0036, 0.0081, 0.0121 m². A best-fit line gives slope ≈ −15 J/m² and intercept ≈ 0.217 J. So **k = 30 N/m** and **E = 0.22 J**.

**(d)** A = √(2E/k) = √(2 × 0.217/30) = **0.12 m**. (Equivalently, the line meets the x² axis at A² ≈ 0.0144 m².)

**(e)** ω = √(30/0.40) = 8.7 rad/s, so **T = 0.73 s**.

| Point | What earns it |
|---|---|
| 1 | (a) Energy conservation with U = ½kx² |
| 1 | (b) K against x², with slope −k/2 and intercept E |
| 1 | (c) Correct K values and k = 30 N/m from the slope (accept 29–31 N/m) |
| 1 | (c) E = 0.22 J from the intercept |
| 1 | (d) A = 0.12 m (carry forward) |
| 1 | (e) T = 0.73 s from ω = √(k/m) (carry forward) |

**Alternative method for (c).** Plotting v² against x² gives slope −k/m and intercept v_max². This is equally valid if k and E are then found correctly.
</details>

## Question 7 (explanation · stretch)

Take **+x to the right**. A 0.50 kg glider on a level, frictionless track oscillates on a spring with k = 72 N/m and amplitude 0.10 m. A small launcher can give the glider one very short push in the +x direction, with impulse 0.15 N·s. The push is so brief that the glider does not move noticeably while it acts. Consider two cases: in case 1 the push happens as the glider passes through equilibrium moving in +x; in case 2 it happens when the glider is momentarily at rest at x = +0.10 m. Give answers to (b) and (c) to 3 significant figures.

(a) Find the total energy, maximum speed and period before the push.
(b) For case 1, find the speed just after the push, the new total energy and the new amplitude.
(c) For case 2, find the new total energy, amplitude and maximum speed.
(d) A student says: "The same push always adds the same energy, so both cases end with the same amplitude." Use your answers to evaluate this claim. State what happens to the period in each case.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** E = ½ × 72 × 0.10² = **0.36 J**. ω = √(72/0.50) = 12 rad/s, so v_max = Aω = **1.2 m/s** and T = 2π/12 = **0.52 s**.

**(b)** The impulse changes the velocity by J/m = 0.15/0.50 = 0.30 m/s, so the glider leaves equilibrium at **1.50 m/s**. At x = 0 all the energy is kinetic: E = ½ × 0.50 × 1.50² = **0.563 J** (0.5625 J). Then A = √(2E/k) = √(1.125/72) = **0.125 m**.

**(c)** The glider gains 0.30 m/s from rest, so it gains K = ½ × 0.50 × 0.30² = 0.0225 J while U stays 0.36 J. E = **0.383 J** (0.3825 J), so A = √(2 × 0.3825/72) = **0.103 m** and v_max = √(2E/m) = **1.24 m/s**.

**(d)** The claim is false. Case 1 adds 0.5625 − 0.36 = 0.20 J; case 2 adds only 0.023 J, one-ninth as much. The same impulse does more work on a glider that is already moving, because the glider covers more distance while the force acts (equivalently, ΔK = ½m(v_f² − v_i²) is larger when v_i is larger). So the amplitudes differ: 0.125 m against 0.103 m. In both cases the period stays **0.52 s**, because m and k are unchanged: a bigger amplitude means more energy, not a longer period.

| Point | What earns it |
|---|---|
| 1 | (a) E, v_max and T |
| 1 | (b) Δv = J/m, giving 1.50 m/s at equilibrium |
| 1 | (b) E = 0.563 J and A = 0.125 m |
| 1 | (c) Adds the new kinetic energy to the unchanged potential energy: E = 0.383 J, A = 0.103 m, v_max = 1.24 m/s |
| 1 | (d) Rejects the claim, explaining that the energy added depends on the speed at the push, and states T = 0.52 s in both cases |
</details>

## How did you do?

- **Q1 or Q4 wrong:** re-read "Trading energy back and forth" and Figure 1 in the [study guide](/advanced-course-resources/physics-c-mechanics/7-4-energy-simple-harmonic-oscillators-study-guide/).
- **Q2 or Q5 wrong:** revisit "Why the total energy is constant" and "Energy against time" (Figure 2).
- **Q3 or Q7 wrong:** go through "Changing the amplitude, mass or spring" and Worked example 2.
- **Q6 incomplete:** your graph must be a straight line for a stated reason; compare with K = ½k(A² − x²).

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/7-4-energy-simple-harmonic-oscillators-checklist/).
