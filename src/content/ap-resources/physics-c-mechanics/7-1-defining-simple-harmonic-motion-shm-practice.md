---
resourceId: "mb-ap-physcm-7.1-practice"
title: "Defining Simple Harmonic Motion (SHM): Practice Questions (Physics C: Mechanics 7.1)"
description: "Seven original Marlbridge calculus-based practice questions on the SHM condition: force laws, shifted equilibria, vertical springs, k from U(x) and periodic motion that is not SHM."
course: "physics-c-mechanics"
unit: 7
topics: ["7.1"]
resourceType: "practice-questions"
prerequisites:
  - "Differentiating polynomials and simple powers of x"
  - "Newton's second law and F_x = −dU/dx"
prerequisiteResources: ["mb-ap-physcm-7.1-study-guide"]
learningObjectives:
  - "Decide from a force law, data or U(x) whether a motion is simple harmonic"
  - "Find equilibrium positions and effective spring constants, including k_eff = d²U/dx²"
  - "Derive the SHM equation of motion for a vertical spring from Newton's second law"
  - "Explain why some periodic motions are not simple harmonic"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Derivatives by hand; calculator for arithmetic only. g = 9.8 m/s². Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-7.1-study-guide", "mb-ap-physcm-7.1-revision-notes", "mb-ap-physcm-7.1-checklist"]
next: "mb-ap-physcm-7.1-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its axis. Coefficients in force and energy formulas carry units."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. In every formula, x is in m, F in N, U in J and t in s, so each numerical coefficient carries whatever unit makes the term correct. Springs are ideal and surfaces smooth unless stated. Use g = 9.8 m/s². Round final answers to 2 significant figures unless told otherwise.

## Question 1 (multiple choice · foundation)

Take **+x to the right**. Each force law gives the net force on an object moving along x. Which one produces simple harmonic motion?

- (A) F = −4.0x³
- (B) F = +4.0x
- (C) F = 6.0 − 3.0x
- (D) F = −2.0 N when x > 0, and +2.0 N when x < 0

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** F = 0 at x = 2.0 m. With u = x − 2.0, F = −3.0u: a restoring force proportional to the displacement from 2.0 m. That is SHM about x = 2.0 m with k = 3.0 N/m.

- (A) is restoring, but its size grows as x³, not x. The motion is periodic but not SHM.
- (B) points away from equilibrium on both sides. The equilibrium at x = 0 is unstable, so there is no oscillation.
- (D) is restoring, but its size is constant. It does not grow with displacement, so it is not SHM.
</details>

## Question 2 (multiple choice · core)

Take **+x to the right**, with x = 0 at equilibrium. A 0.50 kg block on a level, smooth surface is attached to a spring with k = 200 N/m. At one instant the block is at x = −3.0 cm and moving to the right. What is its acceleration at that instant?

- (A) −12 m/s²
- (B) +6.0 m/s²
- (C) +12 m/s²
- (D) +1.2 × 10³ m/s²

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** a_x = −(k/m)x = −(200 ÷ 0.50)(−0.030) = +12 m/s². The block is left of equilibrium, so the restoring force, and the acceleration, point right.

- (A) drops the minus sign in F = −kx, giving an acceleration away from equilibrium.
- (B) is the size of the force, kx = 6.0 N, written as an acceleration. It has not been divided by the mass.
- (D) uses x = 3.0 (centimetres) as if it were in metres.

The direction of the velocity plays no part: acceleration in SHM depends only on position.
</details>

## Question 3 (multiple choice · core)

Take **+x to the right**. An object moves along x in a system with U(x) = 3.0x² + 2.0x. Which statement is correct?

- (A) The motion is SHM about x = 0 with k = 3.0 N/m.
- (B) The motion is SHM about x = −0.33 m with k = 6.0 N/m.
- (C) The motion is SHM about x = −0.33 m with k = 3.0 N/m.
- (D) The motion is not SHM, because U(x) has a linear term.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** F_x = −dU/dx = −6.0x − 2.0. F = 0 at x = −1/3 m ≈ −0.33 m. d²U/dx² = 6.0 J/m² > 0, so this is a stable minimum with k = 6.0 N/m. Since U is exactly a parabola, the force is exactly −6.0(x + 1/3): SHM.

- (A) takes the coefficient of x² as k and ignores the shift. U = ½kx² means k is **twice** that coefficient, and the linear term moves the minimum.
- (C) finds the right equilibrium but again uses the x² coefficient instead of d²U/dx².
- (D) forgets that a linear term in U is a constant force. It shifts the equilibrium but leaves the motion SHM.
</details>

## Question 4 (calculation · core)

Take **+x along a level air track**, with x = 0 where an attached spring is relaxed. A fan on a 0.25 kg glider pushes it with a steady force. A sensor records the net force on the glider:

| x (cm) | 2.0 | 4.0 | 6.0 | 8.0 | 10.0 |
|---|---|---|---|---|---|
| F_net (N) | +1.20 | +0.40 | −0.40 | −1.20 | −2.00 |

(a) Show that the data fit F_net = F₀ − kx, and find F₀ and k.
(b) Find the equilibrium position.
(c) Is the motion SHM? Explain.
(d) Find the glider's acceleration at x = 10.0 cm and at x = 2.0 cm.

<details>
<summary>Worked solution</summary>

1. **(a)** Each 2.0 cm step changes F by −0.80 N, so the graph is a straight line with slope −0.80 N ÷ 0.020 m = **−40 N/m**. So k = 40 N/m. Extending back to x = 0: F₀ = 1.20 + 40 × 0.020 = **+2.0 N** (the fan force).
2. **(b)** F_net = 0 when x = 2.0 ÷ 40 = **0.050 m (5.0 cm)**.
3. **(c)** **Yes.** With u = x − 0.050 m, F_net = −40u. The net force is restoring and proportional to the displacement from 5.0 cm.
4. **(d)** At x = 0.100 m: F = −2.0 N, a = −2.0 ÷ 0.25 = **−8.0 m/s²**. At x = 0.020 m: F = +1.2 N, a = **+4.8 m/s²**.

Suggested mark points (4): 1 for k from the slope; 1 for F₀; 1 for the equilibrium and the SHM conclusion with u = x − x_e; 1 for both accelerations with signs.

Common error: dividing each F by its x to get k. The ratios (+60, +10, −6.7, −15, −20 N/m) are not constant, because x is not measured from equilibrium.
</details>

## Question 5 (constructed response · core)

Take **+y upward**, with y = 0 at the lower end of a vertical spring (spring constant k) when it is relaxed. A block of mass m is hung on the spring and set oscillating vertically.

(a) Find the equilibrium position y_e in terms of m, g and k.
(b) Show that the net force on the block at position y is −k(y − y_e).
(c) Write Newton's second law as a differential equation in u = y − y_e, and state what it shows.
(d) A student says: "Gravity always pulls down, so it cannot be part of a restoring force. The block cannot be in SHM." Explain the error.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** At position y (below the relaxed end, y < 0), the spring is stretched by −y and pulls up with force −ky. Equilibrium: −ky_e − mg = 0, so **y_e = −mg/k** (a distance mg/k below the relaxed end).

**(b)** F_net = −ky − mg = −ky + ky_e = **−k(y − y_e)**, using mg = −ky_e.

**(c)** m d²u/dt² = −ku, so **d²u/dt² = −(k/m)u**. This has the SHM form, so the block moves in SHM about y_e with the same k as the spring, as if gravity were absent.

**(d)** Gravity is constant, so it does not by itself restore. It moves the equilibrium position down by mg/k. The restoring force is the **net** force, and measured from the new equilibrium it is still proportional to displacement and opposite to it.

| Point | What earns it |
|---|---|
| 1 | (a) y_e = −mg/k from zero net force, with correct sign for +y up |
| 1 | (b) Net force written as spring force plus weight with correct signs |
| 1 | (b) Uses the equilibrium condition to reach −k(y − y_e) |
| 1 | (c) d²u/dt² = −(k/m)u and the conclusion that this is SHM about y_e |
| 1 | (d) Constant force shifts equilibrium; net force (not gravity alone) is the restoring force |

**Alternative method.** Measuring y downward throughout earns all points if the signs are consistent.
</details>

## Question 6 (constructed response · stretch)

Take **+x to the right**. A 0.20 kg bead slides on a smooth horizontal rod. A fixed object at x = 0 repels it, and a steady force of 8.0 N pushes it toward x = 0. The potential energy of the system, for x > 0, is modelled as U(x) = b/x + cx, with b = 2.0 J·m and c = 8.0 J/m.

(a) Find the equilibrium position.
(b) Show that it is stable.
(c) Show that small oscillations about it are approximately SHM, and find k_eff.
(d) Compare the exact force with the SHM model at x = 0.55 m and at x = 0.45 m.
(e) Explain why large oscillations are not SHM.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** F_x = −dU/dx = b/x² − c. F = 0 when x² = b/c = 0.25 m², so **x₀ = 0.50 m**.

**(b)** d²U/dx² = 2b/x³ = 4.0 ÷ 0.125 = **32 J/m² > 0** at x₀: a minimum of U, so a stable equilibrium.

**(c)** Near x₀, U ≈ U(x₀) + ½(32)(x − 0.50)², so F ≈ −32(x − 0.50). **k_eff = 32 N/m**, and d²u/dt² ≈ −(32 ÷ 0.20)u = −(160 s⁻²)u with u = x − 0.50 m.

**(d)** At x = 0.55 m: exact F = 2.0 ÷ 0.3025 − 8.0 = **−1.39 N**; model −32 × 0.05 = −1.60 N. At x = 0.45 m: exact F = 2.0 ÷ 0.2025 − 8.0 = **+1.88 N**; model +1.60 N.

**(e)** The exact force is not proportional to displacement: it is about 13% weaker than the model 5 cm to the right and 17% stronger 5 cm to the left. For large oscillations, U(x) is not a parabola (it is steeper on the side nearer x = 0), so F ≠ −kx and the motion is periodic but not SHM.

| Point | What earns it |
|---|---|
| 1 | (a) Sets dU/dx = 0 and finds x₀ = 0.50 m |
| 1 | (b) Second derivative positive at x₀, linked to stability |
| 1 | (c) k_eff = 32 N/m from d²U/dx², with the approximate equation of motion |
| 1 | (d) Both exact forces correct and compared with ±1.60 N |
| 1 | (e) Explains in terms of force not proportional to displacement (or U not parabolic, asymmetric well) |
</details>

## Question 7 (constructed response · stretch)

A small 0.30 kg block slides without friction on a V-shaped track: two straight inclines, each at 10° to the horizontal, meeting at the bottom. The block is released from rest a distance d up one incline (measured along the track) and slides back and forth. Ignore the short curved join at the bottom.

(a) Describe the net force along the track while the block is on one incline.
(b) Explain why the motion is periodic but not SHM.
(c) Find the period for d = 0.20 m and for d = 0.80 m.
(d) A spring oscillator's period does not depend on how far it is pulled before release. Use your answers to (c) to explain how this V-track motion differs.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Along the track, the net force is mg sin 10° = 0.30 × 9.8 × 0.174 = **0.51 N**, always directed down the slope toward the bottom. Its size is the same everywhere on the incline.

**(b)** The force is restoring (it always points toward the bottom), so the block oscillates and the motion repeats: it is periodic. But the force does **not** grow with displacement. SHM needs F = −kx; here the size of F is constant.

**(c)** Along one incline the acceleration is constant, g sin 10° = 1.70 m/s². Time from rest to the bottom: d = ½(g sin θ)t², so t = √(2d ÷ 1.70). One full cycle is four such legs.
- d = 0.20 m: t = 0.485 s, T = **1.9 s**.
- d = 0.80 m: t = 0.970 s, T = **3.9 s**.

**(d)** Starting four times further up doubles the period, so here T ∝ √d. For SHM, the force grows in proportion to the displacement, so a block released further away also accelerates harder, and the extra distance is covered in the same time. With a constant force, there is no such compensation.

| Point | What earns it |
|---|---|
| 1 | (a) Constant-size force mg sin θ, directed toward the bottom |
| 1 | (b) Periodic because restoring, not SHM because force not proportional to displacement |
| 1 | (c) Uses constant acceleration with four legs per cycle |
| 1 | (c) Both periods correct |
| 1 | (d) Period depends on amplitude here (T ∝ √d); explains why the linear force in SHM removes that dependence |
</details>

## How did you do?

- **Q1 or Q3 wrong:** re-read "The condition for SHM" and "Constant forces shift the equilibrium" in the [study guide](/advanced-course-resources/physics-c-mechanics/7-1-defining-simple-harmonic-motion-shm-study-guide/), and Worked example 1.
- **Q2 or Q4 wrong:** check that x is measured from equilibrium, in metres, and that you divided the net force by the mass.
- **Q5 incomplete:** go through Worked example 2 step by step.
- **Q6 or Q7 incomplete:** revisit "Small oscillations about any stable equilibrium", Worked example 3 and Figure 2.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/7-1-defining-simple-harmonic-motion-shm-checklist/).
