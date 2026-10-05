---
resourceId: "mb-ap-physcem-u9-review"
title: "Electric Potential: Mixed Unit Review (Physics C: E&M Unit 9)"
description: "A mixed review of Unit 9: the big ideas that link potential energy, potential, field and energy conservation, a summary table and seven original questions that combine topics, with rubrics."
course: "physics-c-electricity-and-magnetism"
unit: 9
topics: []
resourceType: "unit-review"
prerequisites:
  - "You have studied Topics 9.1 to 9.3"
  - "Gauss's law fields for spheres and lines (Topic 8.6), and integrating simple functions"
prerequisiteResources: ["mb-ap-physcem-u9-diagnostic"]
learningObjectives:
  - "Connect potential energy, potential, field and kinetic energy in one picture"
  - "Choose between adding point-charge potentials, integrating k dq/r and integrating the field"
  - "Solve multi-step problems that combine two or more Unit 9 topics"
  - "Check answers with signs, limiting cases and the link E = −dV/dx"
skills: ["1", "2", "3"]
studyMinutes: 60
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "k = 1/(4πε₀) = 8.99 × 10⁹ N·m²/C²; ε₀ = 8.85 × 10⁻¹² C²/(N·m²); e = 1.60 × 10⁻¹⁹ C; electron mass 9.11 × 10⁻³¹ kg; proton mass 1.67 × 10⁻²⁷ kg. Give answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-u9-diagnostic", "mb-ap-physcem-9.1-checklist", "mb-ap-physcem-9.2-checklist", "mb-ap-physcem-9.3-checklist"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Potential energy belongs to a system of charges; potential V = U/q belongs to a point in space."
  - "Find V by adding kq/r as numbers, by integrating k dq/r, or from ΔV = −∫E·dl. Find E back from E_x = −dV/dx."
  - "With only electric forces, ΔK = −ΔU = −qΔV. Keep the sign of q and write ΔV = V_final − V_initial."
  - "Check every result: E points to lower V, and far away every finite charge looks like a point charge."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

This review joins the three topics of Unit 9. Each question uses at least two topics. These are **original Marlbridge practice questions**, not past exam questions, and the mark tables are a **suggested Marlbridge rubric**, not an official scoring guideline. All data are invented for practice. If you have not taken it yet, start with the [Unit 9 diagnostic](/advanced-course-resources/physics-c-electricity-and-magnetism/unit-9-diagnostic/).

## Big ideas of the unit

- **Energy is the scalar view.** Unit 8 used forces and fields; Unit 9 uses energy, so you add numbers, not vectors.
- **Potential energy belongs to a system.** U is the work an external agent does to assemble the charges from infinitely far apart. For a pair, U = kq₁q₂/r; for more charges, add every pair once ([9.1](/advanced-course-resources/physics-c-electricity-and-magnetism/9-1-electric-potential-energy-study-guide/)).
- **Potential belongs to a point.** V = U/q for a test charge, so V depends only on the source charges. For point charges, V = Σkq/r ([9.2](/advanced-course-resources/physics-c-electricity-and-magnetism/9-2-electric-potential-study-guide/)).
- **Continuous charges need one scalar integral.** V = ∫k dq/r has no components. Rings, arcs and rods on their own line or bisector are the standard cases.
- **Field and potential are linked both ways.** ΔV = −∫E·dl goes from field to potential (use it when Gauss's law gives E); E_x = −dV/dx goes back.
- **Value and slope differ.** V can be zero where E is not, and large where E is zero; likewise U and the force.
- **Equipotentials cross field lines at right angles.** Close spacing means a strong field.
- **Energy conservation follows charges.** ΔK = −qΔV with only electric forces; W_ext = ΔK + ΔU otherwise. The path never matters ([9.3](/advanced-course-resources/physics-c-electricity-and-magnetism/9-3-conservation-electric-energy-study-guide/)).
- **Graphs of U show turning points and equilibria.** K = 0 where U equals the total energy; F = 0 where dU/dx = 0.

## Key relationships and methods

| Idea | Relationship | When to use it |
|---|---|---|
| Pair energy | U = kq₁q₂/r (signs kept) | Two charges; add every pair once for more |
| Work | W_ext = ΔU (slowly); W_electric = −ΔU | Rearranging charges |
| Force from energy | F_r = −dU/dr | Equilibria and stability |
| Potential | V = U/q; ΔU = qΔV | Any source; 1 V = 1 J/C |
| Point charges | V = Σkq_i/r_i | Scalar sum, no angles |
| Continuous charge | V = ∫k dq/r | Ring on its axis: kQ/√(R² + x²); arc at centre: kQ/R; rod: logarithms |
| From field | ΔV = −∫E·dl | Long wire: (λ/2πε₀) ln(b/a); uniform field: −EΔx |
| To field | E_x = −dV/dx | V given as a function or graph |
| Equipotentials | E ≈ ΔV/Δs in size, perpendicular to the lines | Maps and sketches |
| Energy conservation | ΔK = −qΔV; 1 eV = 1.60 × 10⁻¹⁹ J | Speeds, turning points |

## Question 1 (multiple choice · mixed)

Charge +Q is fixed at (−a, 0) and charge −Q at (+a, 0). An external agent moves a small charge +q slowly from very far away, along the y-axis, to the origin. How much work does the agent do?

- (A) 0
- (B) +2kQq/a
- (C) −2kQq/a
- (D) More than zero, because the field along the y-axis is not zero, so the agent must push against it.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Every point on the y-axis is equally far from both charges, so V = kQ/r − kQ/r = 0 there, and far away. W_ext = qΔV = 0. The field on the axis is not zero, but it points along +x, at right angles to the path: the y-axis is an equipotential.

- (B) adds the sizes of the two potentials, ignoring the sign of −Q.
- (C) makes the same mistake with the opposite sign.
- (D) Work needs a field component **along** the path, not just a non-zero field.
</details>

## Question 2 (multiple choice · mixed)

A thin ring of radius R carries charge +Q spread uniformly. A proton (charge e, mass m) is placed at the centre and given a tiny nudge along the axis. What is its speed when it is a distance √3 R from the centre, on the axis?

- (A) √(ekQ/(mR))
- (B) √(2ekQ/(mR))
- (C) √(ekQ/(2mR))
- (D) Zero, because the field at the centre is zero, so the proton is never pushed.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** On the axis V = kQ/√(R² + x²). At the centre V = kQ/R; at x = √3 R, V = kQ/(2R). The proton loses potential energy e(kQ/R − kQ/2R) = ekQ/(2R), so ½mv² = ekQ/(2R) and v = √(ekQ/(mR)).

- (B) uses the full drop to V = 0, the speed very far away.
- (C) forgets the ½ in ½mv².
- (D) E = 0 only at the centre. Once nudged, the proton is pushed outward.
</details>

## Question 3 (multiple choice · mixed)

Three small spheres, each with charge +q, are held at the corners of an equilateral triangle of side d. Two are kept fixed and the third is released. What kinetic energy does it have when it is very far away?

- (A) 2kq²/d
- (B) 3kq²/d
- (C) kq²/d
- (D) 2kq²/d², because two forces push it

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Only the two pairs that include the released sphere change, each from kq²/d to zero, so ΔK = −ΔU = +2kq²/d.

- (B) is the energy of the whole system, which includes the pair that does not change.
- (C) counts only one pair.
- (D) has units of force, not energy.
</details>

## Question 4 (constructed response · mixed)

A thin rod of length L = 0.40 m lies along the x-axis from x = −0.20 m to x = +0.20 m and carries +6.0 nC spread uniformly. Point P is on the y-axis (the rod's perpendicular bisector) at y = 0.15 m.

(a) Show that V(y) = kλ ln{[√(L²/4 + y²) + L/2] / [√(L²/4 + y²) − L/2]} on the bisector.
(b) Calculate V at P.
(c) Use E_y = −dV/dy to show that the field on the bisector is E_y = kQ/[y√(y² + L²/4)], and evaluate it at P.
(d) A proton is released from rest at P. Find its speed when it is very far away.
(e) Find V at P if the rod is modelled as a point charge at the origin, and explain why this is too large.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** λ = Q/L. A piece at position x has charge λ dx and is √(x² + y²) from P:

V = ∫ kλ dx/√(x² + y²), from −L/2 to L/2, = kλ [ln(x + √(x² + y²))] from −L/2 to L/2.

Writing s = √(L²/4 + y²), this is kλ ln[(s + L/2)/(s − L/2)], the stated result.

**(b)** λ = 6.0 × 10⁻⁹ ÷ 0.40 = 1.5 × 10⁻⁸ C/m, so kλ = 134.85 V. At P, s = √(0.04 + 0.0225) = 0.25 m and the ratio is 0.45/0.05 = 9. V = 134.85 × ln 9 = **296 V**.

**(c)** ds/dy = y/s. Then dV/dy = kλ (y/s)[1/(s + L/2) − 1/(s − L/2)] = kλ (y/s)(−L)/(s² − L²/4) = −kλL/(sy), since s² − L²/4 = y². So E_y = kλL/(ys) = **kQ/[y√(y² + L²/4)]**, the Topic 8.4 result. At P: (8.99 × 10⁹)(6.0 × 10⁻⁹) ÷ (0.15 × 0.25) = **1.44 × 10³ V/m**, away from the rod.

**(d)** By symmetry the proton moves straight out along the bisector. K = 296 eV = 4.74 × 10⁻¹⁷ J. v = √(2 × 4.74 × 10⁻¹⁷ ÷ 1.67 × 10⁻²⁷) = **2.4 × 10⁵ m/s**.

**(e)** kQ/y = (8.99 × 10⁹)(6.0 × 10⁻⁹) ÷ 0.15 = **360 V**. The model puts all the charge 0.15 m from P, but every real piece except the middle one is further away.

| Point | What earns it |
|---|---|
| 1 | Integral of kλ dx/√(x² + y²) with correct limits |
| 1 | V(P) ≈ 296 V |
| 1 | Correct derivative leading to kQ/[y√(y² + L²/4)] |
| 1 | E(P) ≈ 1.44 × 10³ V/m, directed away from the rod |
| 1 | Energy conservation, K = eV(P), v ≈ 2.4 × 10⁵ m/s |
| 1 | 360 V, with the reason that real pieces are further away |

Total: 6 points. Carry forward an error in (b) into (d) once.
</details>

## Question 5 (constructed response · mixed)

A small bead with charge q = +3.0 nC and mass 1.0 × 10⁻⁴ kg slides on a frictionless horizontal insulating track along the x-axis. Fixed charges sit at the ends of the track: Q = +2.0 nC at x = 0 and 4Q = +8.0 nC at x = d = 0.30 m.

(a) Write the total electric potential energy U(x) of the three-charge system for 0 < x < d.
(b) Use F_x = −dU/dx to find the equilibrium position, and state whether it is stable.
(c) Find the electric potential at the equilibrium position due to the fixed charges. Explain how V can be large where E = 0.
(d) The bead is released from rest at x = d/6. Find where its speed is greatest, and that speed.
(e) Find the other turning point of the bead's motion.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Three pairs: **U(x) = k(Q)(4Q)/d + kqQ/x + 4kqQ/(d − x)**. The first term is constant (4.79 × 10⁻⁷ J).

**(b)** F_x = −dU/dx = kqQ/x² − 4kqQ/(d − x)². Setting this to zero: (d − x)² = 4x², so d − x = 2x and **x = d/3 = 0.10 m**. The second derivative is positive, so U has a minimum: **stable** along the track.

**(c)** V = kQ/(d/3) + 4kQ/(2d/3) = 9kQ/d = **539 V**. E is minus the slope of V, and V has a minimum here, so E = 0; the value is large because both charges are positive.

**(d)** The speed is greatest where U is least, at **x = d/3**. In units of kqQ/d, U(d/6) = 6 + 4.8 = 10.8 and U(d/3) = 3 + 6 = 9. So K_max = 1.8kqQ/d = 1.8(8.99 × 10⁹)(3.0 × 10⁻⁹)(2.0 × 10⁻⁹) ÷ 0.30 = 3.24 × 10⁻⁷ J, and v = √(2 × 3.24 × 10⁻⁷ ÷ 1.0 × 10⁻⁴) = **0.080 m/s**.

**(e)** At a turning point U = U(d/6). With u = x/d: 1/u + 4/(1 − u) = 10.8, which gives 10.8u² − 7.8u + 1 = 0. The roots are u = 1/6 (the start) and **u = 5/9**: the bead turns back at **x = 0.167 m** and oscillates between 0.050 m and 0.167 m.

| Point | What earns it |
|---|---|
| 1 | U(x) with all three pair terms |
| 1 | F_x = −dU/dx set to zero, giving x = d/3 |
| 1 | Stability justified by a minimum of U |
| 1 | V = 539 V, with E linked to the slope, not the value |
| 1 | Greatest speed at d/3, v ≈ 0.080 m/s |
| 1 | Turning point x = 5d/9 ≈ 0.167 m from U = U(d/6) |

Total: 6 points. Accept U(x) without the constant term if it is said that only changes matter.
</details>

## Question 6 (constructed response · mixed)

An insulating sphere of radius R = 0.050 m carries Q = +8.0 nC spread uniformly through its volume. A narrow tunnel along a diameter does not change the field. Gauss's law gives E = kQ/r² outside and E = kQr/R³ inside, both radially outward. The course does not list a sphere for potential integrals, so treat this as stretch practice.

(a) Use ΔV = −∫E·dl with V(∞) = 0 to find V(R).
(b) Show that V(0) − V(R) = kQ/(2R), and find V(0).
(c) A proton is released from rest at the centre. Find its speed at the surface and very far away.
(d) Sketch V against r from 0 to 3R, labelling V(0), V(R) and V(2R).
(e) An electron is released from rest far away, in line with the tunnel. Describe its motion and find its speed at the centre.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** V(R) = −∫ from ∞ to R of kQ/r² dr = kQ/R = (8.99 × 10⁹)(8.0 × 10⁻⁹) ÷ 0.050 = **1.44 × 10³ V**.

**(b)** V(0) − V(R) = ∫₀ᴿ kQr/R³ dr = kQ/(2R) = **719 V**. So V(0) = 1.5kQ/R = **2.16 × 10³ V**.

**(c)** Surface: K = 719 eV, v = √(2 × 719 × 1.60 × 10⁻¹⁹ ÷ 1.67 × 10⁻²⁷) = **3.7 × 10⁵ m/s**. Far away: K = 2158 eV (three times as much), v = **6.4 × 10⁵ m/s**, √3 times faster.

**(d)** Inside, V = kQ(3R² − r²)/(2R³): a downward parabola, flat at r = 0 (E = 0) at 2.16 × 10³ V. It joins kQ/r smoothly at 1.44 × 10³ V (E is continuous), passes 719 V at 2R and falls towards zero.

**(e)** It speeds up all the way to the centre, then slows on the far side. With zero total energy it just escapes and never returns. At the centre K = e(2158 V), so v = √(2 × 2158 × 1.60 × 10⁻¹⁹ ÷ 9.11 × 10⁻³¹) = **2.8 × 10⁷ m/s**, about 9% of the speed of light, so ½mv² is still a fair model.

| Point | What earns it |
|---|---|
| 1 | V(R) = kQ/R ≈ 1.44 × 10³ V with the integral |
| 1 | Inside integral giving kQ/(2R) and V(0) ≈ 2.16 × 10³ V |
| 1 | Both proton speeds |
| 1 | Sketch: flat top at r = 0, smooth join at R, 1/r outside, three labels |
| 1 | Electron fastest at the centre, then slows and just escapes (zero total energy) |
| 1 | v ≈ 2.8 × 10⁷ m/s |

Total: 6 points.
</details>

## Question 7 (constructed response · mixed)

Students model a long charged wire with a thin rod in a large tank and measure the potential at distances r from its axis, relative to a reference electrode:

| r (m) | 0.020 | 0.040 | 0.080 | 0.160 | 0.320 |
|---|---|---|---|---|---|
| V (V) | 200 | 162 | 126 | 87 | 51 |

(a) Starting from E = λ/(2πε₀r), show that V should be a straight line when plotted against ln(r/r₀), with r₀ = 0.020 m, and state the predicted gradient.
(b) Plot V against ln(r/r₀) and find the gradient of the best-fit line.
(c) Find λ.
(d) Explain why the equipotentials are coaxial cylinders, and why, for equal steps of potential, each radius is a fixed multiple of the one before.
(e) An electron is released from rest at r = 0.320 m. Find its kinetic energy and speed at r = 0.020 m.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** V(r) − V(r₀) = −∫ from r₀ to r of λ/(2πε₀r′) dr′ = −(λ/2πε₀) ln(r/r₀). So V = V(r₀) − 2kλ ln(r/r₀): a straight line with **gradient −2kλ = −λ/(2πε₀)**.

**(b)** ln(r/r₀) = 0, 0.693, 1.386, 2.079 and 2.773. The points lie close to a straight line with gradient about **−54 V** (best fit −53.8 V).

**(c)** λ = −gradient ÷ (2k) = 53.8 ÷ (2 × 8.99 × 10⁹) = **3.0 × 10⁻⁹ C/m**.

**(d)** By symmetry V depends only on r, so equipotentials are cylinders around the rod, at right angles to the radial field. A fixed step ΔV changes ln r by ΔV/(2kλ), so r is multiplied by the same factor each time (about 2.5 for 50 V steps): the lines spread out where the field is weaker.

**(e)** The electron moves to higher potential, so it speeds up. ΔV = 200 − 51 = 149 V, so K = **149 eV = 2.4 × 10⁻¹⁷ J**, and v = √(2 × 2.38 × 10⁻¹⁷ ÷ 9.11 × 10⁻³¹) = **7.2 × 10⁶ m/s**.

| Point | What earns it |
|---|---|
| 1 | Integral of E giving V linear in ln(r/r₀) |
| 1 | Predicted gradient −2kλ |
| 1 | Graph with labelled, scaled axes and a straight best-fit line |
| 1 | Gradient about −54 V from the line, not from one data pair |
| 1 | λ ≈ 3.0 × 10⁻⁹ C/m |
| 1 | Cylinders and constant ratio of radii explained |
| 1 | 149 eV and v ≈ 7.2 × 10⁶ m/s, with the reason it speeds up |

Total: 7 points.
</details>

## How did you do?

Questions 1–3 score 1 point each, 4–6 score 6 each and 7 scores 7: 28 in all. Look at **where** you lost points.

- **Pair energies, work and F = −dU/dr (Q3, Q5(a)–(b)):** use the [9.1 checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/9-1-electric-potential-energy-checklist/).
- **Superposition, integrals for V, E = −dV/dx or equipotentials (Q1, Q4(a)–(c) and (e), Q5(c), Q6(a)–(b) and (d), Q7(a)–(d)):** use the [9.2 checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/9-2-electric-potential-checklist/).
- **Speeds, turning points and signs of ΔK (Q2, Q4(d), Q5(d)–(e), Q6(c) and (e), Q7(e)):** use the [9.3 checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/9-3-conservation-electric-energy-checklist/).

If you have not done it yet, the [Unit 9 diagnostic](/advanced-course-resources/physics-c-electricity-and-magnetism/unit-9-diagnostic/) gives a quick topic-by-topic check.
