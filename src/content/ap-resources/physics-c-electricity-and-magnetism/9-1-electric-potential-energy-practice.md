---
resourceId: "mb-ap-physcem-9.1-practice"
title: "Electric Potential Energy: Practice Questions (Physics C: E&M 9.1)"
description: "Seven original Marlbridge practice questions on electric potential energy: signs, factors of change, systems of charges, graphs and calculus, with solutions and mark points."
course: "physics-c-electricity-and-magnetism"
unit: 9
topics: ["9.1"]
resourceType: "practice-questions"
prerequisites:
  - "U = kq₁q₂/r and the sum over pairs"
prerequisiteResources: ["mb-ap-physcem-9.1-study-guide"]
learningObjectives:
  - "Calculate the electric potential energy of two or more point charges"
  - "Find the work done by external and electric forces when charges are rearranged"
  - "Predict factors of change in U and in F from their dependence on r"
  - "Sketch and interpret graphs of U against position, including the link F = −dU/dr"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "k = 8.99 × 10⁹ N·m²/C², e = 1.60 × 10⁻¹⁹ C. Give numerical answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-9.1-study-guide", "mb-ap-physcem-9.1-revision-notes", "mb-ap-physcem-9.1-checklist"]
next: "mb-ap-physcem-9.1-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Questions 6 and 7 ask for sketches and for F = −dU/dr."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based course. Data for every question: k = 1/(4πε₀) = 8.99 × 10⁹ N·m²/C² and e = 1.60 × 10⁻¹⁹ C. Potential energy is zero when the charges are infinitely far apart. "Slowly" means no kinetic energy is gained. A scientific calculator is assumed; round only at the end.

## Question 1 (multiple choice · foundation)

Two point charges, +q and −q, are a distance d apart. How much work must an external agent do to move them slowly until they are infinitely far apart?

- (A) +kq²/d
- (B) −kq²/d
- (C) +kq²/d²
- (D) 0, because the charges are equal and opposite

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The starting energy is U_i = k(+q)(−q)/d = −kq²/d, and the final energy is 0. W_ext = U_f − U_i = 0 − (−kq²/d) = +kq²/d. This makes sense: the charges attract, so you must pull them apart and do positive work.

- (B) is the potential energy of the starting arrangement, not the work needed to change it.
- (C) has units of N·m²/C² × C²/m² = N, a force, not an energy. It uses the Coulomb's-law 1/r² by mistake.
- (D) confuses the **net charge** of the system (zero) with its **energy**. U depends on the product q₁q₂, which is not zero.
</details>

## Question 2 (multiple choice · core)

Two small charged spheres, +2.0 nC and +6.0 nC, are 0.30 m apart; the system's potential energy is U₀. The +2.0 nC charge is replaced by a +4.0 nC charge, and the separation is increased to 0.90 m. What is the new potential energy?

- (A) (2/9)U₀
- (B) (2/3)U₀
- (C) (3/2)U₀
- (D) 6U₀

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** U ∝ q₁q₂/r. Doubling one charge doubles U; tripling r divides U by 3. The factor is 2 × (1/3) = 2/3. With numbers: U₀ = (8.99 × 10⁹)(2.0 × 10⁻⁹)(6.0 × 10⁻⁹) ÷ 0.30 = 3.60 × 10⁻⁷ J, and the new value is 2.40 × 10⁻⁷ J.

- (A) divides by 3² = 9, as if U ∝ 1/r². That is the force rule, not the energy rule.
- (C) inverts the factor: it multiplies by the separation factor (3) and divides by the charge factor (2).
- (D) multiplies by 3 for the separation instead of dividing.
</details>

## Question 3 (multiple choice · core)

Four identical point charges +q sit at the corners of a square of side a. What is the total electric potential energy of the system?

- (A) 4kq²/a
- (B) (4 + √2)kq²/a
- (C) (8 + 2√2)kq²/a
- (D) 5kq²/a

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Four charges make 4 × 3/2 = 6 pairs: 4 along the sides (distance a) and 2 across the diagonals (distance √2 a). U = 4kq²/a + 2kq²/(√2 a) = (4 + √2)kq²/a ≈ 5.41kq²/a.

- (A) forgets the two diagonal pairs.
- (C) counts each of the 6 pairs twice, which happens if you sum over every charge and every other charge without halving.
- (D) uses 2a, not √2 a, for the diagonal, giving 2 × kq²/(2a) = kq²/a for the diagonals.
</details>

## Question 4 (calculation · foundation)

In a scattering experiment an alpha particle (charge +2e) comes to rest for an instant 3.0 × 10⁻¹⁴ m from the centre of a gold nucleus (charge +79e). Treat both as point charges.

(a) Calculate the electric potential energy of the alpha–gold system at this separation, in joules and in MeV (1 MeV = 1.60 × 10⁻¹³ J).
(b) State how much work an external agent would have to do to bring the alpha particle slowly from very far away to this point, and explain the sign.

<details>
<summary>Worked solution</summary>

1. (a) U = kq₁q₂/r = (8.99 × 10⁹)(2 × 1.60 × 10⁻¹⁹)(79 × 1.60 × 10⁻¹⁹) ÷ (3.0 × 10⁻¹⁴) = **1.21 × 10⁻¹² J**.
2. In MeV: 1.21 × 10⁻¹² ÷ 1.60 × 10⁻¹³ = **7.6 MeV**.
3. (b) W_ext = U_f − U_i = 1.21 × 10⁻¹² J − 0 = **+1.21 × 10⁻¹² J**. It is positive because both charges are positive and repel, so the agent must push the alpha particle in against the repulsion.

Suggested mark points (3): 1 for substituting both charges as multiples of e; 1 for U = 1.21 × 10⁻¹² J and its MeV value; 1 for W_ext = +U with a reason for the positive sign.

Common error: using only one factor of e, giving a value 1.60 × 10⁻¹⁹ times too small.
</details>

## Question 5 (calculation · core)

Three point charges are fixed on the x-axis: q_A = +4.0 nC at x = 0, q_B = −1.0 nC at x = 0.10 m and q_C = +2.0 nC at x = 0.30 m.

(a) Calculate the total electric potential energy of the system.
(b) q_B is moved slowly to a point very far away. Calculate the work done by the external agent.
(c) Calculate the work done by the electric forces during this move.

<details>
<summary>Worked solution</summary>

1. (a) Pairs: U_AB = k(4.0 × 10⁻⁹)(−1.0 × 10⁻⁹) ÷ 0.10 = −3.60 × 10⁻⁷ J. U_BC = k(−1.0 × 10⁻⁹)(2.0 × 10⁻⁹) ÷ 0.20 = −8.99 × 10⁻⁸ J. U_AC = k(4.0 × 10⁻⁹)(2.0 × 10⁻⁹) ÷ 0.30 = +2.40 × 10⁻⁷ J.
2. U_total = −3.60 × 10⁻⁷ − 0.899 × 10⁻⁷ + 2.40 × 10⁻⁷ = **−2.10 × 10⁻⁷ J**.
3. (b) After the move only the A–C pair remains: U_f = +2.40 × 10⁻⁷ J. W_ext = U_f − U_i = 2.40 × 10⁻⁷ − (−2.10 × 10⁻⁷) = **+4.50 × 10⁻⁷ J**. This equals −(U_AB + U_BC): only the pairs that include B change.
4. (c) W_electric = −ΔU = **−4.50 × 10⁻⁷ J**. Both A and C attract the negative charge B back as it moves away.

Suggested mark points (4): 1 for three correct pair terms with signs; 1 for the total −2.10 × 10⁻⁷ J; 1 for W_ext = U_f − U_i = +4.50 × 10⁻⁷ J; 1 for the work done by electric forces with the opposite sign.

Common error: using 0.30 m for the B–C distance. Measure each pair's own separation: B and C are 0.20 m apart.
</details>

## Question 6 (constructed response · core)

A small sphere with charge +Q is fixed. A second small sphere with charge +q can be placed at different distances r from it. When r = 0.10 m, the system's electric potential energy is 7.2 × 10⁻⁶ J.

(a) Calculate U at r = 0.20 m and at r = 0.40 m.
(b) On one set of axes, sketch U against r from r = 0.05 m to r = 0.40 m. Label the values at 0.10 m, 0.20 m and 0.40 m.
(c) Show that the magnitude of the electric force at r = 0.10 m is 7.2 × 10⁻⁵ N.
(d) A student says: "When r doubles, U halves, so the force must also halve." Evaluate this claim.
(e) The +q sphere is replaced by one with charge −q. Describe how your sketch from (b) changes.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** U ∝ 1/r. Doubling r halves U: U(0.20 m) = **3.6 × 10⁻⁶ J**. Doubling again: U(0.40 m) = **1.8 × 10⁻⁶ J**.

**(b)** A positive, decreasing curve, concave up, that approaches the r-axis but never crosses it. It passes through (0.10 m, 7.2 × 10⁻⁶ J), (0.20 m, 3.6 × 10⁻⁶ J) and (0.40 m, 1.8 × 10⁻⁶ J), and through 1.44 × 10⁻⁵ J at 0.05 m.

**(c)** U = kQq/r, so kQq = Ur = (7.2 × 10⁻⁶)(0.10) = 7.2 × 10⁻⁷ N·m². The force is F = −dU/dr = kQq/r² = 7.2 × 10⁻⁷ ÷ (0.10)² = **7.2 × 10⁻⁵ N**, positive, so repulsive. (Equivalently, F = U/r for this pair.)

**(d)** The claim is wrong. The force is the negative slope of U(r), not its value. Since F = kQq/r², doubling r divides F by **4**: F(0.20 m) = 1.8 × 10⁻⁵ N. On the graph, the curve is much less steep at 0.20 m than at 0.10 m.

**(e)** U becomes negative at every r, with the same sizes: the curve is reflected in the r-axis. It now rises towards zero as r increases. The positive slope means F_r = −dU/dr is negative: an attractive force.

| Point | What earns it |
|---|---|
| 1 | Both values in (a), using U ∝ 1/r |
| 1 | Sketch: positive, decreasing, concave up, approaching zero, with the three labelled values |
| 1 | Finds kQq or uses F = −dU/dr to reach 7.2 × 10⁻⁵ N |
| 1 | Rejects the claim, using the slope (or F ∝ 1/r²) and giving the factor 1/4 |
| 1 | Reflected curve below the axis, linked to an attractive force |

Accept a correct answer to (d) based only on Coulomb's law, provided the factor of 4 is stated.
</details>

## Question 7 (constructed response · stretch)

Two point charges, each +Q, are fixed at (−a, 0) and (+a, 0). A third charge +q can move in the plane.

(a) The third charge is on the y-axis at (0, y). Write an expression for the total electric potential energy U(y) of the three-charge system.
(b) Use your answer to (a) to derive the y-component of the electric force on +q.
(c) Sketch U against y for −3a ≤ y ≤ 3a. Sketch also U against x when +q is on the x-axis between the fixed charges (−a < x < a). Use your sketches to decide whether the origin is a stable position for +q along each axis.
(d) Take Q = 5.0 nC, q = 2.0 nC and a = 0.10 m. Find the total U with +q at the origin, and the work an external agent does to bring +q slowly from very far away along the y-axis to the origin.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Three pairs. The fixed pair: kQ²/(2a), a constant. Each fixed charge with q: kQq/√(a² + y²).
**U(y) = kQ²/(2a) + 2kQq/√(a² + y²)**

**(b)** F_y = −dU/dy = −2kQq × (−½)(a² + y²)^(−3/2) × 2y = **2kQqy/(a² + y²)^(3/2)**. For y > 0 this is positive: +q is pushed away from the origin.

**(c)** Along y: U has a **maximum** at y = 0 (value kQ²/(2a) + 2kQq/a). It falls symmetrically on both sides towards kQ²/(2a), not to zero, because the fixed pair keeps its energy. A small push along y lowers U, so the origin is **unstable** along the y-axis.
Along x: U(x) = kQ²/(2a) + kQq[1/(a − x) + 1/(a + x)] = kQ²/(2a) + 2kQqa/(a² − x²). This has a **minimum** at x = 0 and rises without limit as x → ±a. A small push along x raises U, so the origin is **stable** along the x-axis. (Check: d²U/dx² = 4kQq/a³ > 0 at x = 0, and d²U/dy² = −2kQq/a³ < 0.)

**(d)** kQ²/(2a) = (8.99 × 10⁹)(5.0 × 10⁻⁹)² ÷ 0.20 = 1.12 × 10⁻⁶ J. 2kQq/a = 2(8.99 × 10⁹)(5.0 × 10⁻⁹)(2.0 × 10⁻⁹) ÷ 0.10 = 1.80 × 10⁻⁶ J.
Total U at the origin = **2.92 × 10⁻⁶ J**.
W_ext = U(0) − U(∞) = 2.92 × 10⁻⁶ − 1.12 × 10⁻⁶ = **1.80 × 10⁻⁶ J**. Only the two pairs that include q change; the energy of the fixed pair is the same before and after.

| Point | What earns it |
|---|---|
| 1 | U(y) with all three pair terms, including the constant fixed-pair term |
| 1 | Correct derivative giving F_y = 2kQqy/(a² + y²)^(3/2) |
| 1 | U(y) sketch: maximum at y = 0, symmetric, levelling off at kQ²/(2a) |
| 1 | U(x) sketch: minimum at x = 0, rising steeply near x = ±a |
| 1 | Stability conclusions for both axes, justified by the shape of U |
| 1 | U(0) = 2.92 × 10⁻⁶ J and W_ext = 1.80 × 10⁻⁶ J |

Accept U(y) written without the constant fixed-pair term if it is stated that only changes matter; the sketch should then level off at zero. Carry forward an error in (a) once.
</details>

## How did you do?

- **Q1 or Q4 wrong:** re-read "Energy stored in an arrangement of charges" in the [study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/9-1-electric-potential-energy-study-guide/).
- **Q2 or Q6 wrong:** revisit "Signs, sizes and the U(r) graph" and Figure 1.
- **Q3 or Q5 wrong:** work through "Systems of three or more charges" and Worked example 1.
- **Q7 incomplete:** go back to "Deriving U from the work done" and Worked example 2.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/9-1-electric-potential-energy-checklist/).
