---
resourceId: "mb-ap-physcem-u8-review"
title: "Electric Charges, Fields and Gauss's Law: Mixed Unit Review (Physics C: E&M Unit 8)"
description: "A mixed review of Unit 8: the big ideas that link charge, force, field, flux and Gauss's law, a summary table and seven original questions that combine topics, with rubrics."
course: "physics-c-electricity-and-magnetism"
unit: 8
topics: []
resourceType: "unit-review"
prerequisites:
  - "You have studied Topics 8.1 to 8.6"
  - "Integrating simple functions, and the area and volume elements 2πs ds and 4πr² dr"
prerequisiteResources: ["mb-ap-physcem-u8-diagnostic"]
learningObjectives:
  - "Connect charge, Coulomb force, electric field, flux and Gauss's law in one picture"
  - "Choose between integration and Gauss's law for a given charge distribution"
  - "Solve multi-step problems that combine two or more Unit 8 topics"
  - "Check answers with limiting cases, continuity and units"
skills: ["1", "2", "3"]
studyMinutes: 60
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "k = 1/(4πε₀) = 8.99 × 10⁹ N·m²/C²; ε₀ = 8.85 × 10⁻¹² C²/(N·m²); e = 1.60 × 10⁻¹⁹ C; electron mass 9.11 × 10⁻³¹ kg; g = 9.8 m/s². Give answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-u8-diagnostic", "mb-ap-physcem-8.1-checklist", "mb-ap-physcem-8.2-checklist", "mb-ap-physcem-8.3-checklist", "mb-ap-physcem-8.4-checklist", "mb-ap-physcem-8.5-checklist", "mb-ap-physcem-8.6-checklist"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Charge makes a field; the field acts on other charges with F = qE."
  - "Find a field by integrating point-charge pieces, or by Gauss's law when there is spherical, cylindrical or planar symmetry."
  - "Net flux through a closed surface depends only on the enclosed charge: Φ = q_enc/ε₀."
  - "Check every result: far away it should look like a point charge, and E should be continuous where there is no surface charge."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

This review joins the six topics of Unit 8. Read the big ideas and the table, then try the questions; each uses at least two topics. These are **original Marlbridge practice questions**, not past exam questions, and the mark tables are a **suggested Marlbridge rubric**, not an official scoring guideline. All data are invented for practice. If you have not taken it yet, start with the [Unit 8 diagnostic](/advanced-course-resources/physics-c-electricity-and-magnetism/unit-8-diagnostic/).

## Big ideas of the unit

- **Charge is the starting point.** It is a scalar, comes in whole multiples of e and is conserved: a system's net charge changes only when charge crosses its boundary ([8.1](/advanced-course-resources/physics-c-electricity-and-magnetism/8-1-electric-charge-electric-force-study-guide/), [8.2](/advanced-course-resources/physics-c-electricity-and-magnetism/8-2-conservation-electric-charge-process-charging-study-guide/)).
- **Charging moves electrons.** Friction and contact move them between objects; induction and polarisation move them within an object. Grounding links an object to Earth's huge supply.
- **Force and field are two views of one interaction.** The field E = F/q₀ belongs to the source charges; the force qE belongs to the charge placed in it ([8.3](/advanced-course-resources/physics-c-electricity-and-magnetism/8-3-electric-fields-study-guide/)).
- **Superposition is the main method.** Add forces or fields from several charges as vectors, by components. A continuous charge is the same idea with an integral ([8.4](/advanced-course-resources/physics-c-electricity-and-magnetism/8-4-electric-fields-charge-distributions-study-guide/)).
- **Symmetry first.** Components that cancel in pairs need no calculation, for point charges or for a ring or arc.
- **Flux counts field through a surface.** Φ = ∫E·dA, with outward normals on a closed surface, so entering flux is negative ([8.5](/advanced-course-resources/physics-c-electricity-and-magnetism/8-5-electric-flux-study-guide/)).
- **Gauss's law links flux back to charge.** The net flux through any closed surface is q_enc/ε₀. It is always true, but it gives E easily only with spherical, cylindrical or planar symmetry ([8.6](/advanced-course-resources/physics-c-electricity-and-magnetism/8-6-gauss-law-study-guide/)).
- **Conductors and insulators differ.** In equilibrium a conductor has E = 0 inside and its excess charge on the surface; an insulator can hold charge, and a field, inside.
- **Checks connect everything.** Far from any finite charge, E → kQ/r². The infinite line from integration (8.4) matches Gauss's law (8.6).

## Key relationships and methods

| Idea | Relationship | When to use it |
|---|---|---|
| Quantised charge | q = ne | Counting electrons moved |
| Coulomb's law | F = kq₁q₂/r² (sizes of the charges), along the line joining them | Up to four point charges, or high symmetry |
| Field and force | E = F/q₀; F = qE | Any field; force on a negative charge is opposite to E |
| Point charge | E = kq/r² | Also outside any spherically symmetric charge |
| Continuous charge | E = ∫k dq/r², component by component | Rods, rings, arcs, lines |
| Ring on its axis | E = kQz/(z² + a²)^(3/2) | Points on the axis |
| Rod on its bisector | E = kQ/[x√(x² + L²/4)] | Becomes 2kλ/x for a long rod |
| Flux | Φ = E·A (uniform field, flat surface); Φ = ∫E·dA | Sign from the area vector |
| Gauss's law | ∮E·dA = q_enc/ε₀ | Spheres, coaxial cylinders, pillboxes |
| Standard Gauss results | Sphere: kQ/r² outside, kQr/R³ inside (uniform); line: λ/(2πε₀r); sheet: σ/(2ε₀) | Check continuity at the surface |
| Non-uniform density | q_enc = ∫ρ dV, with dV = 4πr² dr or 2πrL dr | ρ given as a function |

## Question 1 (multiple choice · mixed)

Two identical small metal spheres, A (+8.0 nC) and B (−2.0 nC), are a distance d apart and attract each other with a force of magnitude F. They are touched together and then returned to the same separation d. Which row describes the new situation?

- (A) Repulsive force 9F/16; the field at the midpoint between them is now zero.
- (B) Repulsive force 9F/16; the field at the midpoint is unchanged, because charge is conserved.
- (C) Repulsive force 25F/16; the field at the midpoint is now zero.
- (D) Attractive force 9F/16; the field at the midpoint is now zero.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The total charge, +6.0 nC, is conserved and shared equally: +3.0 nC each. The force now depends on (3.0)(3.0) = 9 instead of (8.0)(2.0) = 16, so it is 9F/16, and like charges repel. At the midpoint, two equal charges at equal distances give equal and opposite fields, so E = 0. Before contact, both fields there pointed towards B.

- (B) The total is conserved, but the field depends on how the charge is distributed.
- (C) shares the sizes, (8.0 + 2.0)/2 = 5.0 nC each, ignoring the negative sign.
- (D) forgets that both spheres now have the same sign.
</details>

## Question 2 (multiple choice · mixed)

A very long straight wire with uniform charge per unit length λ passes through the centre of an imaginary sphere of radius R. What is the net electric flux through the sphere?

- (A) 2λR/ε₀
- (B) λR/ε₀
- (C) λ/(2πε₀R)
- (D) It cannot be found, because E is not constant over the surface of the sphere.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The sphere encloses a length 2R of wire, a diameter, so q_enc = 2λR. Gauss's law gives Φ = q_enc/ε₀ = 2λR/ε₀ for any closed surface.

- (B) uses the radius instead of the diameter as the enclosed length.
- (C) is the field of the line at distance R. It has units of N/C, not flux.
- (D) Gauss's law is always true, so the net flux is known. Symmetry is needed only to find E itself.
</details>

## Question 3 (multiple choice · mixed)

An insulating sphere of radius R carries charge Q spread uniformly through its volume. Its field has its largest value, E_max, at r = R. At which distances from the centre is E = E_max/2?

- (A) R/2 and √2 R
- (B) R/2 and 2R
- (C) √2 R only
- (D) R/√2 and √2 R

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Inside, Gauss's law gives E ∝ r, so E halves at r = R/2. Outside, E ∝ 1/r², so E halves at r = √2 R.

- (B) uses E ∝ 1/r outside, the rule for a line charge.
- (C) treats the field inside as zero, which is true for a conductor but not for this insulator.
- (D) uses E ∝ r² inside, which would need a density that grows with r.
</details>

## Question 4 (constructed response · mixed)

A straight wire 2.0 m long carries +6.0 nC spread uniformly. Point P is 0.050 m from the wire's midpoint, on its perpendicular bisector.

(a) Use Gauss's law with a coaxial cylinder to derive the field of an **infinitely long** line with charge per unit length λ.
(b) Explain why Gauss's law cannot give the exact field of this finite wire, but why the result of (a) is still a good model at P.
(c) The exact field on the bisector is E = kQ/[x√(x² + L²/4)]. Calculate it at P, and compare it with the infinite-line value.
(d) An electron is released from rest at P. Find the magnitude and direction of its initial acceleration.
(e) Predict, without the exact formula, the field at 0.10 m from the midpoint.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Take a coaxial cylinder of radius r and length ℓ. By symmetry E is radial and the same size all over the curved side, so the flux there is E(2πrℓ). E is parallel to the end caps, so they add nothing. q_enc = λℓ. So E(2πrℓ) = λℓ/ε₀ and **E = λ/(2πε₀r)**.

**(b)** Near the ends of a finite wire, E is not perpendicular to the wire and its size varies along the cylinder, so E cannot come out of the flux integral. But P is 0.050 m from a 2.0 m wire, so from P the wire looks infinite.

**(c)** λ = 6.0 × 10⁻⁹ ÷ 2.0 = 3.0 × 10⁻⁹ C/m. Exact: E = (8.99 × 10⁹)(6.0 × 10⁻⁹) ÷ [0.050 × √(0.050² + 1.0²)] = **1.08 × 10³ N/C** (1077 N/C). Infinite line: E = (3.0 × 10⁻⁹) ÷ (2π × 8.85 × 10⁻¹² × 0.050) = **1.08 × 10³ N/C** (1079 N/C). They differ by about 0.15%.

**(d)** a = eE/m = (1.60 × 10⁻¹⁹)(1077) ÷ (9.11 × 10⁻³¹) = **1.9 × 10¹⁴ m/s²**, directed **towards the wire**, opposite to E, because the electron is negative.

**(e)** The wire still looks infinite, so E ∝ 1/r and doubling r halves E: about **5.4 × 10² N/C** (exact: 537 N/C).

| Point | What earns it |
|---|---|
| 1 | Coaxial cylinder: flux E(2πrℓ) through the curved side, zero through the end caps |
| 1 | q_enc = λℓ, giving E = λ/(2πε₀r) |
| 1 | (b) Symmetry fails near the ends, so E is not constant on the cylinder; P is much closer than L |
| 1 | (c) Both values about 1.08 × 10³ N/C with a comparison |
| 1 | (d) 1.9 × 10¹⁴ m/s² towards the wire |
| 1 | (e) About 5.4 × 10² N/C from the 1/r dependence |

Total: 6 points.
</details>

## Question 5 (constructed response · mixed)

Inside a charged insulating ball of radius R, the field is radial and outward with E = βr³ (r ≤ R), where β is a positive constant.

(a) Find the flux through a concentric sphere of radius r ≤ R.
(b) Use Gauss's law to find the charge enclosed within radius r, then show that the charge density is ρ(r) = 5ε₀βr².
(c) Write E for r > R and show that it matches the inside field at r = R.
(d) For β = 2.0 × 10⁶ N/(C·m³) and R = 0.10 m, calculate the total charge and ρ at the surface.
(e) The ball sits at the centre of a closed cubic box of side 0.30 m. Find the net flux through the box, and explain why you can do this even though E is not constant over the box.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** E is radial and constant on the sphere: Φ = E(4πr²) = **4πβr⁵**.

**(b)** Gauss's law: q_enc(r) = ε₀Φ = **4πε₀βr⁵**. A thin shell from r to r + dr holds dq = ρ(4πr²) dr, so ρ = (1/(4πr²)) dq/dr = (1/(4πr²))(20πε₀βr⁴) = **5ε₀βr²**.

**(c)** Outside, all the charge Q = 4πε₀βR⁵ is enclosed: E(4πr²) = Q/ε₀, so **E = βR⁵/r²**. At r = R this is βR³, the same as the inside formula, so E is continuous.

**(d)** Q = 4π(8.85 × 10⁻¹²)(2.0 × 10⁶)(0.10)⁵ = **2.2 × 10⁻⁹ C**. Surface density: ρ(R) = 5(8.85 × 10⁻¹²)(2.0 × 10⁶)(0.10)² = **8.9 × 10⁻⁷ C/m³**. Check: kQ/R² = 2.0 × 10³ N/C = βR³.

**(e)** Φ = Q/ε₀ = 4πβR⁵ = **2.5 × 10² N·m²/C** (251 N·m²/C). Gauss's law gives the **net** flux through any closed surface from the enclosed charge; symmetry is needed only to find E itself.

| Point | What earns it |
|---|---|
| 1 | Φ = 4πβr⁵ |
| 1 | q_enc = 4πε₀βr⁵ from Gauss's law |
| 1 | ρ from dq = ρ4πr² dr, giving 5ε₀βr² |
| 1 | Outside field βR⁵/r² and continuity at r = R shown |
| 1 | Q = 2.2 × 10⁻⁹ C and ρ(R) = 8.9 × 10⁻⁷ C/m³ |
| 1 | Box flux 251 N·m²/C with the reason |

Total: 6 points.
</details>

## Question 6 (constructed response · mixed)

Two identical small conducting balls, each of mass 0.20 g, hang from insulating threads 0.50 m long, tied to the same point. Ball A starts with a negative charge and ball B is neutral. The balls touch, then come to rest 0.080 m apart.

(a) Draw a free-body diagram for one ball at rest.
(b) Find the charge on each ball, and the charge A had at the start.
(c) Which way did electrons move when the balls touched, and how many moved?
(d) Ball B is then touched by an identical neutral ball, which is taken away. State the new charge on each of A and B. Explain whether the two threads still make equal angles with the vertical, and whether the balls settle closer together or further apart than before.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Weight mg down, tension T along the thread, and electric repulsion F horizontal, away from the other ball.

**(b)** Each thread makes angle θ with the vertical, where sin θ = 0.040 ÷ 0.50 = 0.080, so θ = 4.59°. Balancing forces: F = mg tan θ = (2.0 × 10⁻⁴)(9.8)(0.0803) = 1.57 × 10⁻⁴ N. The charges are equal, so kq²/d² = F gives q = d√(F/k) = 0.080 × √(1.57 × 10⁻⁴ ÷ 8.99 × 10⁹) = **1.06 × 10⁻⁸ C**. Each ball carries **−11 nC** (−10.6 nC), so A started with **−21 nC** (−21.2 nC).

**(c)** A had excess electrons; half of them moved **from A to B**: N = (1.06 × 10⁻⁸) ÷ (1.60 × 10⁻¹⁹) = **6.6 × 10¹⁰ electrons**.

**(d)** Touching B to an identical neutral ball shares B's charge equally, so **B now carries −5.3 nC** and **A keeps −10.6 nC** (about −11 nC). The threads **still hang at equal angles**: the electric forces on A and B are a third-law pair, equal in size even though the charges differ, and the balls have equal weights and equal threads. At any separation the repulsion depends on the product q_Aq_B, which has halved, so the old separation no longer gives balance. The balls swing inwards until the smaller sideways pull of the tilted threads matches the weaker repulsion: they settle **closer together** than 0.080 m.

| Point | What earns it |
|---|---|
| 1 | Free-body diagram with weight, tension and horizontal electric force |
| 1 | F = mg tan θ ≈ 1.6 × 10⁻⁴ N |
| 1 | q ≈ −11 nC each and −21 nC at the start, by conservation |
| 1 | Electrons from A to B, about 6.6 × 10¹⁰ |
| 1 | (d) New charges: A about −11 nC, B about −5.3 nC |
| 1 | (d) Equal angles from the third-law pair, and a smaller separation because the repulsion is weaker at every distance |

Total: 6 points.
</details>

## Question 7 (constructed response · mixed)

A small charged probe tip, q = +5.0 nC, is held at height h above the centre of a flat circular detector plate of radius a.

(a) Explain why the flux through the plate cannot be found from Φ = EA, and choose a suitable area element.
(b) Show that the flux through the plate is Φ = (q/(2ε₀))[1 − h/√(h² + a²)], taking the area vector to point away from q.
(c) Find the limit of Φ as a becomes very large, and explain the result using Gauss's law.
(d) Evaluate Φ for h = 0.030 m and a = 0.040 m, and state what fraction of the charge's total flux passes through the plate.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The field changes in size and direction across the plate: strongest and perpendicular at the centre, weaker and slanted near the edge. Use thin rings of radius s: dA = 2πs ds. On each ring, E has one size and one angle to the plate.

**(b)** On a ring, the distance to q is √(s² + h²) and only the perpendicular part of E counts: E_⊥ = [kq/(s² + h²)] × h/√(s² + h²). So

Φ = ∫₀ᵃ kqh (2πs ds)/(s² + h²)^(3/2) = 2πkqh [1/h − 1/√(h² + a²)] = **(q/(2ε₀))[1 − h/√(h² + a²)]**, using 2πk = 1/(2ε₀).

**(c)** As a → ∞, h/√(h² + a²) → 0, so **Φ → q/(2ε₀)**. Gauss's law gives a total flux q/ε₀; an infinite plane splits the space around q into two identical halves, so half of it crosses the plane.

**(d)** √(0.030² + 0.040²) = 0.050 m, so the bracket is 1 − 0.60 = 0.40. q/(2ε₀) = 5.0 × 10⁻⁹ ÷ (2 × 8.85 × 10⁻¹²) = 282 N·m²/C, so **Φ = 1.1 × 10² N·m²/C** (113 N·m²/C). The total flux is q/ε₀ = 565 N·m²/C, so the plate receives **20%** of it.

| Point | What earns it |
|---|---|
| 1 | E varies across the plate; ring element dA = 2πs ds |
| 1 | Perpendicular component with the factor h/√(s² + h²) |
| 1 | Integral evaluated correctly, giving the stated result |
| 1 | Limit q/(2ε₀) explained as half of the total flux q/ε₀ |
| 1 | Φ ≈ 113 N·m²/C |
| 1 | Fraction 0.20 of the total |

Total: 6 points. Carry forward an error in (b) into (d) once.
</details>

## How did you do?

Questions 1–3 are worth 1 point each and Questions 4–7 are worth 6 each, 27 in all. Look at **where** you lost points, not just how many.

- **Charge sharing, electron counts or Coulomb's law (Q1, Q6):** use the [8.1 checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/8-1-electric-charge-electric-force-checklist/) and the [8.2 checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/8-2-conservation-electric-charge-process-charging-checklist/).
- **Field direction or F = qE (Q1, Q4(d)):** use the [8.3 checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/8-3-electric-fields-checklist/).
- **Integrals for E (Q4(c)):** use the [8.4 checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/8-4-electric-fields-charge-distributions-checklist/).
- **Flux signs or surface integrals (Q7):** use the [8.5 checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/8-5-electric-flux-checklist/).
- **Gaussian surfaces or enclosed charge (Q2, Q3, Q4(a), Q5):** use the [8.6 checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/8-6-gauss-law-checklist/).

If you have not done it yet, the [Unit 8 diagnostic](/advanced-course-resources/physics-c-electricity-and-magnetism/unit-8-diagnostic/) gives a quick topic-by-topic check.
