---
resourceId: "mb-ap-physcm-3.3-practice"
title: "Potential Energy: Practice Questions (Physics C: Mechanics 3.3)"
description: "Seven original Marlbridge calculus-based practice questions on potential energy: F = −dU/dx, equilibrium and stability, nonideal springs, pair energies, U(x) data and path dependence."
course: "physics-c-mechanics"
unit: 3
topics: ["3.3"]
resourceType: "practice-questions"
prerequisites:
  - "Differentiating and integrating polynomials and powers of r"
prerequisiteResources: ["mb-ap-physcm-3.3-study-guide"]
learningObjectives:
  - "Find a conservative force from U(x) and give its direction"
  - "Locate and classify equilibrium positions from U(x) by calculus and by graph shape"
  - "Derive a potential energy function from a nonideal force and use it"
  - "Sketch U(r) and F(r) for an interaction and mark their key features"
  - "Estimate forces and equilibrium positions from a table of U(x) values"
  - "Explain with numbers why friction has no potential energy"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculus by hand; calculator for arithmetic only. g = 9.8 m/s², G = 6.67 × 10⁻¹¹ N·m²/kg². Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-3.3-study-guide", "mb-ap-physcm-3.3-revision-notes", "mb-ap-physcm-3.3-checklist"]
next: "mb-ap-physcm-3.3-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its axis or its zero of potential energy."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. In every formula, U is in J, x and r are in m and F is in N, so each numerical coefficient carries whatever unit makes the term correct. Use g = 9.8 m/s² and G = 6.67 × 10⁻¹¹ N·m²/kg². Round final answers to 2 significant figures unless told otherwise.

## Question 1 (multiple choice · foundation)

Take **+x to the right**. A system's potential energy is U(x) = 3.0x² − 2.0x³. What is the conservative force on the moving object at x = 2.0 m?

- (A) +12 N
- (B) −12 N
- (C) +2.0 N
- (D) −4.0 N

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** F_x = −dU/dx = −(6.0x − 6.0x²). At x = 2.0 m: −(12 − 24) = +12 N. The graph slopes downward there, so the force points to +x, towards lower U.

- (B) is dU/dx without the minus sign. The force points down the slope of U(x), not up it.
- (C) divides the potential energy by position: U(2.0) = −4.0 J, and −U/x = +2.0. Force is minus the slope, not minus U over x.
- (D) is the value of U(2.0) itself, given a force unit. Energy and force are different quantities.
</details>

## Question 2 (multiple choice · core)

Take **+x to the right**. A system has U(x) = (1.0 J/m³)x³ − (3.0 J/m²)x² for x between −1.0 m and 4.0 m. Which statement about equilibrium positions is correct?

- (A) x = 0 is unstable and x = 2.0 m is stable.
- (B) x = 0 is stable because U = 0 there, and x = 2.0 m is unstable because U is negative there.
- (C) The equilibrium positions are x = 0 and x = 3.0 m, where U = 0.
- (D) x = 0 and x = 2.0 m are both stable, because the force is zero at each.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** dU/dx = 3.0x² − 6.0x = 0 at x = 0 and x = 2.0 m. d²U/dx² = 6.0x − 6.0 is −6.0 J/m² at x = 0 (maximum, unstable) and +6.0 J/m² at x = 2.0 m (minimum, U = −4.0 J, stable).

- (B) judges stability by the value of U. Stability depends on the curvature: a maximum is unstable whatever its value.
- (C) looks for zeros of U instead of zeros of its slope. At x = 3.0 m, F_x = −(27 − 18) = −9.0 N, so it is not an equilibrium.
- (D) correctly finds both equilibria but treats every equilibrium as stable. Zero force tells you only that it is an equilibrium; the force after a small push decides stability.
</details>

## Question 3 (multiple choice · core)

Three small spheres, each of mass m, lie in a straight line with equal gaps d between neighbours (so the outer two are 2d apart). With U = 0 at infinite separation, what is the gravitational potential energy of the three-sphere system?

- (A) −2Gm²/d
- (B) −5Gm²/(2d)
- (C) −3Gm²/d
- (D) −5Gm²/d

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** There are three pairs: two neighbour pairs at d and one outer pair at 2d. U = −Gm²/d − Gm²/d − Gm²/(2d) = −5Gm²/(2d).

- (A) includes only the neighbour pairs. The outer spheres also attract each other, even with the middle sphere between them.
- (C) counts three pairs but puts all of them at separation d.
- (D) counts each pair twice (U₁₂ and U₂₁ as separate terms). Each pair contributes once.
</details>

## Question 4 (calculation · core)

Take **+x in the direction of stretch**, with x = 0 at the relaxed length. A stiffening spring exerts F_x = −kx − βx³ with k = 120 N/m and β = 4.0 × 10³ N/m³.

(a) Derive U(x), with U = 0 at x = 0.
(b) Find the change in potential energy as the stretch increases from 0.10 m to 0.20 m.
(c) Find the work done by the spring force over the same stretch, and compare (b) with the answer an ideal spring of k = 120 N/m would give.

<details>
<summary>Worked solution</summary>

1. **(a)** U(x) = −∫₀ˣ F_x dx′ = ∫₀ˣ (kx′ + βx′³) dx′ = **½kx² + ¼βx⁴**.
2. **(b)** U(0.10) = 0.60 + 0.10 = 0.70 J. U(0.20) = 2.4 + 1.6 = 4.0 J. ΔU = **+3.3 J**.
3. **(c)** W_spring = −ΔU = **−3.3 J**. The spring force points to −x while the end moves to +x, so its work is negative. An ideal spring gives ΔU = ½(120)(0.040 − 0.010) = **1.8 J**, so the stiffening term nearly doubles the energy stored over this range.

Suggested mark points (4): 1 for integrating with the minus sign and the chosen zero; 1 for both values of U; 1 for ΔU = 3.3 J; 1 for W = −3.3 J with the sign explained.

Common error: using ½k(Δx)² with Δx = 0.10 m. That treats the spring as ideal and also ignores that energy depends on x², not on the change in x.
</details>

## Question 5 (constructed response · core)

Take **+r outward** from a fixed magnet. A small magnet on a smooth track interacts with it, and a model gives U(r) = A/r² − B/r with A = 0.090 J·m² and B = 0.60 J·m, where r is the separation.

(a) Derive an expression for F_r(r).
(b) Find the equilibrium separation r₀ and the value of U there.
(c) Show that the equilibrium is stable.
(d) Find F_r at r = 0.20 m and at r = 0.50 m, and say whether each force is attractive or repulsive.
(e) Sketch U(r) and F_r(r) for r from about 0.1 m to 1 m on aligned axes. Label r₀, where U = 0, and the long-range behaviour.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** F_r = −dU/dr = **2A/r³ − B/r²**.

**(b)** F_r = 0 when 2A/r = B, so **r₀ = 2A/B = 0.30 m**. U(r₀) = 0.090/0.090 − 0.60/0.30 = 1.0 − 2.0 = **−1.0 J**.

**(c)** d²U/dr² = 6A/r⁴ − 2B/r³ = 66.7 − 44.4 = **+22 J/m²** at r₀. It is positive, so r₀ is a minimum of U: stable. (Equivalently, F_r > 0 just inside r₀ and F_r < 0 just outside, so the force pushes back either way.)

**(d)** F_r(0.20) = 0.18/0.0080 − 0.60/0.040 = 22.5 − 15 = **+7.5 N: repulsive** (outward). F_r(0.50) = 1.44 − 2.40 = **−0.96 N: attractive** (inward).

**(e)** U(r): large and positive at small r, crosses zero at r = A/B = 0.15 m, minimum of −1.0 J at 0.30 m, then rises towards zero from below as r grows. F_r(r): large and positive at small r, zero at r₀ = 0.30 m, negative beyond, with its most negative value (about −0.99 N) at 0.45 m, then tending to zero. The F_r graph crosses zero exactly where U has its minimum.

| Point | What earns it |
|---|---|
| 1 | (a) F_r = −dU/dr differentiated correctly |
| 1 | (b) r₀ = 0.30 m and U(r₀) = −1.0 J |
| 1 | (c) Positive second derivative, or force-direction argument, gives stable |
| 1 | (d) Both forces with correct signs and attractive/repulsive labels |
| 1 | (e) U(r) sketch: zero crossing at 0.15 m, minimum at 0.30 m, approaches 0 from below |
| 1 | (e) F_r(r) sketch: zero at 0.30 m, aligned with the U minimum, negative and tending to 0 at large r |
</details>

## Question 6 (constructed response · stretch)

Take **+x up a smooth slope**, measured from a magnet fixed at the bottom. A cart on the slope is repelled by the magnet. The slope is set so that the component of the cart's weight along it has magnitude 2.0 N. Students use a force sensor to build this table of the potential energy of the cart–magnet–Earth system (the zero of U is arbitrary, so only differences matter):

| x (m) | 0.10 | 0.12 | 0.14 | 0.16 | 0.18 | 0.20 | 0.22 |
|---|---|---|---|---|---|---|---|
| U (J) | 0.700 | 0.657 | 0.637 | 0.633 | 0.638 | 0.650 | 0.667 |

(a) Estimate the force on the cart at x = 0.12 m and state its direction.
(b) Estimate the equilibrium position and say whether it is stable or unstable. Explain.
(c) A model gives U(x) = C/x + (2.0 N)x. Derive the equilibrium position x₀ in terms of C.
(d) Use your answer to (b) to estimate C, with its unit.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Use the readings either side: dU/dx ≈ (0.637 − 0.700) ÷ (0.14 − 0.10) = −1.6 J/m. So F_x ≈ **+1.6 N, up the slope** (away from the magnet). Here the magnet's push is larger than the 2.0 N weight component down the slope, so the net force points up.

**(b)** U is smallest at about **x = 0.16 m**, where the slope changes sign. It is a **minimum, so the equilibrium is stable**: below it the force points up the slope, above it the force points down, so a small displacement either way is pushed back.

**(c)** F_x = −dU/dx = C/x² − 2.0. Setting F_x = 0 gives **x₀ = √(C / 2.0 N)**.

**(d)** C = (2.0 N)x₀² = 2.0 × (0.16)² = **0.051 J·m** (about 0.05 J·m; the table resolution limits precision).

| Point | What earns it |
|---|---|
| 1 | (a) Slope from neighbouring readings, with F_x = −dU/dx |
| 1 | (a) About +1.6 N with direction up the slope (accept 1.4–1.8 N) |
| 1 | (b) Equilibrium about 0.16 m, identified from the minimum (accept 0.15–0.17 m) |
| 1 | (b) Stable, with a force-direction reason on both sides |
| 1 | (c) Differentiates and sets F_x = 0 to reach x₀ = √(C/2.0 N) |
| 1 | (d) C ≈ 0.05 J·m with unit (carry forward from (b)) |

**Alternative method for (a).** A one-sided slope from 0.12 m to 0.14 m gives about +1.0 N; it earns the first point but is less accurate than the centred estimate.
</details>

## Question 7 (explanation · stretch)

A student says: "Friction does negative work when I drag a box, so the box–floor system must store that energy as friction potential energy."

A 12 kg crate is dragged at constant speed across a level floor from point P to point Q, which are 5.0 m apart. The coefficient of kinetic friction is 0.30. Path 1 is straight. Path 2 goes 3.0 m east then 4.0 m north. Use numbers to show that the student is wrong.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**Model answer.** The friction force has size μmg = 0.30 × 12 × 9.8 = 35.3 N and always opposes the motion, so its work is −(35.3 N) × (path length).

- Path 1: W_f = −35.3 × 5.0 = **−176 J**.
- Path 2: W_f = −35.3 × 7.0 = **−247 J**.

The start and end points are the same, but the work differs. A potential energy must depend only on position, so a change ΔU = −W would have to equal both +176 J and +247 J. That is impossible. Going P → Q → P along path 1 gives W_f = −353 J around a closed loop, not zero. So friction is **not conservative** and has **no potential energy**. The energy is dissipated as thermal energy (and some sound); it cannot be recovered by moving the crate back.

Compare gravity: lifting the crate onto a 1.0 m platform by any route changes U_g by mgΔy = 118 J, because gravity's work depends only on the start and end heights.

| Point | What earns it |
|---|---|
| 1 | Friction work on both paths: −176 J and −247 J |
| 1 | States that U must depend only on position, so different works for the same endpoints rule out a potential energy |
| 1 | Closed-loop work is non-zero (or path dependence named as the test) |
| 1 | Says where the energy goes (thermal energy or sound) |
</details>

## How did you do?

- **Q1 or Q2 wrong:** re-read "Force from potential energy" and "Equilibrium and stability" in the [study guide](/advanced-course-resources/physics-c-mechanics/3-3-potential-energy-study-guide/), then Worked example 1.
- **Q3 wrong:** revisit "Systems with three or more objects". List the pairs before writing any term.
- **Q4 wrong:** go back to Worked example 3: integrate the actual force, keep the minus sign.
- **Q5 or Q6 incomplete:** compare your sketches and slope estimates with Figure 1. The force graph is minus the slope of the energy graph.
- **Q7 incomplete:** re-read "Potential energy belongs to a system" on conservative forces.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/3-3-potential-energy-checklist/).
