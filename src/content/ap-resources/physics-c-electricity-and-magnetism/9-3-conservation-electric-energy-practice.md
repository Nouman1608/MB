---
resourceId: "mb-ap-physcem-9.3-practice"
title: "Conservation of Electric Energy: Practice Questions (Physics C: E&M 9.3)"
description: "Seven original Marlbridge practice questions on energy conservation for moving charges: ΔU = qΔV, speeds, turning points, potential graphs and two-body systems, with full solutions."
course: "physics-c-electricity-and-magnetism"
unit: 9
topics: ["9.3"]
resourceType: "practice-questions"
prerequisites:
  - "Using ΔU = qΔV and ΔK = −ΔU"
prerequisiteResources: ["mb-ap-physcem-9.3-study-guide"]
learningObjectives:
  - "Find changes in potential and kinetic energy for charges moving through a potential difference"
  - "Decide from signs whether a charge speeds up, slows down or turns back"
  - "Use E = −dV/dx and energy conservation together for a given V(x)"
  - "Combine energy and momentum conservation when two charged objects both move"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "e = 1.602 × 10⁻¹⁹ C, mₑ = 9.11 × 10⁻³¹ kg, mₚ = 1.67 × 10⁻²⁷ kg, 1/(4πε₀) = 8.99 × 10⁹ N·m²/C². Give numerical answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-9.3-study-guide", "mb-ap-physcem-9.3-revision-notes", "mb-ap-physcem-9.3-checklist"]
next: "mb-ap-physcem-9.3-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Question 6 needs calculus; Question 7 combines energy with momentum and asks for an experimental plan."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based course. Data for every question: e = 1.602 × 10⁻¹⁹ C, mₑ = 9.11 × 10⁻³¹ kg, mₚ = 1.67 × 10⁻²⁷ kg and 1/(4πε₀) = 8.99 × 10⁹ N·m²/C². Ignore gravity unless told otherwise. All charges move in a vacuum. A scientific calculator is assumed; round only at the end.

## Question 1 (multiple choice · foundation)

An electron moves from a point where the potential is +20 V to a point where the potential is +80 V. Only the electric force acts on it. What is the change in its kinetic energy?

- (A) +9.6 × 10⁻¹⁸ J
- (B) −9.6 × 10⁻¹⁸ J
- (C) +1.6 × 10⁻¹⁷ J
- (D) +1.3 × 10⁻¹⁷ J

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** ΔV = 80 V − 20 V = +60 V. ΔU = qΔV = (−1.602 × 10⁻¹⁹ C)(+60 V) = −9.6 × 10⁻¹⁸ J. With only the electric force doing work, ΔK = −ΔU = **+9.6 × 10⁻¹⁸ J** (60 eV). A negative charge speeds up when it moves to higher potential.

- (B) treats the electron as positive: it gives ΔU, or ΔK for a proton, not ΔK for an electron.
- (C) adds the two potentials (100 V) instead of subtracting them.
- (D) uses the final potential (80 V) instead of the potential **difference**.
</details>

## Question 2 (multiple choice · core)

Particle X has charge q and mass m. Particle Y has charge 2q and mass 4m. Each is released from rest and accelerated through the same potential difference. What is the ratio of their final speeds, v_Y / v_X?

- (A) 1/2
- (B) 1/√2
- (C) 2
- (D) √2

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** From rest, ½mv² = |q||ΔV|, so v = √(2|q||ΔV|/m) and v ∝ √(q/m). For Y, q/m is (2q)/(4m) = ½ of X's value, so v_Y/v_X = √(1/2) = **1/√2 ≈ 0.71**.

- (A) is the ratio of q/m. It forgets the square root.
- (C) is the ratio of kinetic energies, K_Y/K_X = 2q/q. Y gains more energy but is four times heavier.
- (D) inverts the correct ratio.
</details>

## Question 3 (multiple choice · core)

Points P, Q, R and S lie in order along a straight line in a static electric field. The potentials are V_P = +50 V, V_Q = −30 V, V_R = +10 V and V_S = +60 V, and the potential changes smoothly between neighbouring points, staying below +50 V everywhere between P and R. A proton is released from rest at P and moves along the line under the electric force only. Which statement is correct?

- (A) Its kinetic energy at R is 40 eV, and it cannot reach S.
- (B) Its kinetic energy at R is 10 eV, and it reaches S.
- (C) Its kinetic energy at R is 40 eV, and it reaches S with 10 eV.
- (D) Its kinetic energy at R is 80 eV, and it cannot reach S.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Total energy = U at P = e(50 V) = 50 eV (taking K_P = 0). At R, U = 10 eV, so K = 50 − 10 = **40 eV**. At S, U would be 60 eV, which is more than the total energy, so K would be negative. The proton stops at a turning point between R and S, where V = +50 V, and goes back.

- (B) uses the potential at R as the kinetic energy.
- (C) gets R right but allows a negative kinetic energy at S (or flips the sign of ΔV from P to S).
- (D) is the kinetic energy at Q, the lowest-potential point, not at R.
</details>

## Question 4 (calculation · core)

Two large parallel plates are 0.020 m apart. Plate M is at 0 V and plate N is at −30 V. An electron passes through a small hole in M, moving directly towards N with speed 4.0 × 10⁶ m/s.

(a) Find the electron's initial kinetic energy in joules and in electron-volts.
(b) Show that the electron reaches N, and find its speed there.
(c) What is the most negative potential N could have for the electron still to reach it?

<details>
<summary>Worked solution</summary>

1. (a) K_i = ½mₑv² = ½(9.11 × 10⁻³¹ kg)(4.0 × 10⁶ m/s)² = **7.29 × 10⁻¹⁸ J**. In eV: 7.29 × 10⁻¹⁸ ÷ 1.602 × 10⁻¹⁹ = **45.5 eV**.
2. (b) Moving from M to N, ΔV = −30 V − 0 = −30 V. For the electron, ΔU = qΔV = (−e)(−30 V) = +30 eV = 4.81 × 10⁻¹⁸ J. The electron moves to lower potential, so it slows down.
3. K_N = K_i − ΔU = 45.5 eV − 30 eV = 15.5 eV = 2.48 × 10⁻¹⁸ J. This is positive, so the electron reaches N.
4. v_N = √(2 × 2.48 × 10⁻¹⁸ ÷ 9.11 × 10⁻³¹) = **2.3 × 10⁶ m/s**.
5. (c) The electron just reaches N when all 45.5 eV is turned into potential energy: e|ΔV| = 45.5 eV, so V_N = **−45.5 V**. Any more negative and it turns back before N.

Suggested mark points (4): 1 for K_i in both units; 1 for ΔU = +30 eV with the correct sign reasoning (negative charge to lower V); 1 for v_N ≈ 2.3 × 10⁶ m/s; 1 for −45.5 V.

Common error: the plate separation is not needed. Energy depends only on the potential difference.
</details>

## Question 5 (calculation · core)

A small sphere carrying +3.0 × 10⁻⁹ C is held fixed. A proton is fired from very far away directly towards the centre of the sphere with speed 2.0 × 10⁵ m/s.

(a) Find the distance of closest approach.
(b) Find the proton's speed when it is twice that distance from the sphere.
(c) The proton's initial speed is doubled. By what factor does the distance of closest approach change?

<details>
<summary>Worked solution</summary>

Take U = 0 when the proton is very far away. The fixed sphere's kinetic energy does not change, so all the energy change is the proton's.

1. (a) K_i = ½mₚv² = ½(1.67 × 10⁻²⁷)(2.0 × 10⁵)² = 3.34 × 10⁻¹⁷ J. At closest approach K = 0, so kQe/r_min = K_i.
   r_min = kQe/K_i = (8.99 × 10⁹)(3.0 × 10⁻⁹)(1.602 × 10⁻¹⁹) ÷ (3.34 × 10⁻¹⁷) = **0.13 m** (0.129 m).
2. (b) At 2r_min, U = kQe/(2r_min) = ½K_i. So K = K_i − ½K_i = ½K_i, and v = v_i/√2 = **1.4 × 10⁵ m/s**.
3. (c) r_min = kQe/K_i ∝ 1/v². Doubling v multiplies K_i by 4, so r_min becomes **¼** as large (about 0.032 m).

Suggested mark points (4): 1 for energy conservation with U = kQq/r and U = 0 far away; 1 for r_min ≈ 0.13 m; 1 for K = ½K_i at 2r_min and v ≈ 1.4 × 10⁵ m/s; 1 for the factor ¼ with reasoning from r_min ∝ 1/v².

Common error: halving r_min in (c) because "twice the speed means twice the energy". Kinetic energy depends on v².
</details>

## Question 6 (constructed response · core)

In a region along the x-axis, the electric potential is V(x) = V₀[(x/a)² − 2(x/a)] for 0 ≤ x ≤ 3a, where V₀ = 200 V and a = 0.050 m. A proton is released from rest at x = 0.

(a) Derive an expression for the x-component of the electric field, E_x(x), and evaluate it at x = 0.
(b) Derive an expression for the proton's kinetic energy K(x).
(c) Find where the proton turns back, and where its speed is greatest.
(d) Calculate the greatest speed.
(e) Sketch the proton's potential energy U(x) from x = 0 to x = 3a. Add a horizontal line for its total energy, and label the turning point and the point of greatest speed.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** E_x = −dV/dx = −V₀[2x/a² − 2/a] = **(2V₀/a)(1 − x/a)**. At x = 0: E_x = 2(200 V) ÷ 0.050 m = **8.0 × 10³ V/m**, in the +x direction, so the proton is pushed towards +x.

**(b)** V(0) = 0 and K(0) = 0. Energy conservation: K(x) = −q[V(x) − V(0)] = **eV₀(2x/a − x²/a²)**.

**(c)** K = 0 again when 2x/a − x²/a² = 0, so x = 0 or **x = 2a = 0.10 m**: the turning point. K is greatest where dK/dx = eV₀(2/a − 2x/a²) = 0, so **x = a = 0.050 m**. This is where V is lowest (−V₀) and where E_x = 0.

**(d)** K_max = eV₀ = 200 eV = 3.20 × 10⁻¹⁷ J. v_max = √(2 × 3.20 × 10⁻¹⁷ ÷ 1.67 × 10⁻²⁷) = **1.96 × 10⁵ m/s**.

**(e)** U(x) = eV(x) is a parabola opening upward: 0 at x = 0, a minimum of −200 eV at x = a, back to 0 at x = 2a, and +600 eV at x = 3a. The total-energy line is horizontal at U = 0. The turning point is where the curve crosses the line at x = 2a; the greatest speed is at the minimum, x = a, where the gap between line and curve is largest. The proton oscillates between x = 0 and x = 2a.

| Point | What earns it |
|---|---|
| 1 | E_x = −dV/dx differentiated correctly |
| 1 | E_x(0) = 8.0 × 10³ V/m with a direction stated |
| 1 | K(x) = −qΔV with V(0) = 0 used |
| 1 | Turning point x = 2a, from K = 0 |
| 1 | Greatest speed at x = a, justified (dK/dx = 0, or lowest V, or E_x = 0) |
| 1 | v_max ≈ 1.96 × 10⁵ m/s |
| 1 | Sketch: upward parabola, horizontal total-energy line at U = 0, both points labelled correctly |

Accept answers for (c) found from the sketch or from E_x changing sign at x = a, if the reasoning is stated.
</details>

## Question 7 (constructed response · stretch)

Two small charged spheres sit on a frictionless, horizontal, insulating surface. Sphere A has mass 2.0 g and sphere B has mass 6.0 g; each carries +4.0 × 10⁻⁸ C. They are held 0.040 m apart (centre to centre) and released from rest at the same moment.

(a) Calculate the electric potential energy of the system at release.
(b) Explain why the spheres do not end up with equal speeds, and find each sphere's speed when they are very far apart.
(c) Without calculating speeds, compare the kinetic energies of A and B at any instant.
(d) Outline an experiment to test your prediction in (b).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** U₀ = kq_Aq_B/r = (8.99 × 10⁹)(4.0 × 10⁻⁸)² ÷ 0.040 = **3.60 × 10⁻⁴ J**.

**(b)** No external horizontal force acts, so the system's momentum stays zero: m_Av_A = m_Bv_B. The lighter sphere must move faster. When they are very far apart, U → 0 and all of U₀ has become kinetic energy:

½m_Av_A² + ½m_Bv_B² = U₀, with v_B = (m_A/m_B)v_A = v_A/3.

½(0.0020)v_A² + ½(0.0060)(v_A/3)² = 3.60 × 10⁻⁴ J gives v_A² = 0.270 m²/s², so **v_A = 0.52 m/s** and **v_B = 0.17 m/s**, in opposite directions.

**(c)** K = p²/(2m) and both spheres always have the same magnitude of momentum, so K_A/K_B = m_B/m_A = 3. A always has three times the kinetic energy of B (here 2.70 × 10⁻⁴ J and 0.90 × 10⁻⁴ J at the end).

**(d)** One possible plan: use two light, charged gliders on a level air track. Measure each glider's mass with a balance and each charge with a charge sensor (electrometer). Release them from rest at a measured separation. Film the motion with a ruler in view, or use motion sensors, and find each speed once the separation is large (for example 10 times the starting value, where about 90% of U₀ has been converted). Compare the speeds and their ratio with the predictions (ratio m_B/m_A). Repeat for several starting separations and check that the total final kinetic energy is close to kq_Aq_B(1/r₀ − 1/r_f). Do it in dry air to limit charge leakage.

| Point | What earns it |
|---|---|
| 1 | U₀ = 3.60 × 10⁻⁴ J |
| 1 | Momentum conservation stated, so m_Av_A = m_Bv_B |
| 1 | Energy conservation: total K at the end equals U₀ |
| 1 | v_A ≈ 0.52 m/s and v_B ≈ 0.17 m/s |
| 1 | K_A = 3K_B, justified from equal momentum magnitudes |
| 1 | Procedure: measures masses, charges and starting separation, and how speeds are found |
| 1 | Procedure: compares with prediction, repeats, and names one source of error (leakage, friction, non-point charges) |

Common error: giving all of U₀ to sphere A, which gives v_A = 0.60 m/s and breaks momentum conservation. Accept a plan that uses a different measuring method if it gives speeds and compares them with the prediction.
</details>

## How did you do?

- **Q1 or Q2 wrong:** re-read "Energy bookkeeping" and "Signs" in the [study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/9-3-conservation-electric-energy-study-guide/), then Worked example 1.
- **Q3 or Q5 wrong:** revisit "Energy diagrams and turning points" and Figure 1.
- **Q4 wrong:** check the sign of q and of ΔV in every step.
- **Q6 incomplete:** work through Worked example 2, then link E = −dV/dx (Topic 9.2) to the energy method.
- **Q7 incomplete:** see the last misconception in the guide and "Designing an experiment".

Then tick off the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/9-3-conservation-electric-energy-checklist/).
