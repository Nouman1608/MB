---
resourceId: "mb-ap-phys2-10.4-practice"
title: "Electric Potential Energy: Practice Questions (Physics 2 10.4)"
description: "Seven original Marlbridge practice questions on electric potential energy: pairs of charges, factor changes, U–r graphs, sums over pairs and external work, with full solutions."
course: "physics-2"
unit: 10
topics: ["10.4"]
resourceType: "practice-questions"
prerequisites:
  - "Using U_E = kq₁q₂/r with signs, and adding over pairs"
prerequisiteResources: ["mb-ap-phys2-10.4-study-guide"]
learningObjectives:
  - "Calculate U_E for a pair of charges and for systems of three or four charges"
  - "Predict how U_E changes when charges or separations change"
  - "Sketch and interpret U_E–r graphs and justify claims about negative energy"
  - "Find external work from a change in U_E, and link U_E to kinetic energy when charges are released"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "k = 9.0 × 10⁹ N·m²/C². U_E = 0 at infinite separation. Give answers to 3 significant figures unless the data justify fewer"
related: ["mb-ap-phys2-10.4-study-guide", "mb-ap-phys2-10.4-revision-notes", "mb-ap-phys2-10.4-checklist"]
next: "mb-ap-phys2-10.4-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2", "exam-physics-2"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "Keep the signs of the charges in every U_E term."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Data and assumptions for every question: k = 1/(4πε₀) = 9.0 × 10⁹ N·m²/C²; U_E = kq₁q₂/r with the signs of the charges; U_E = 0 at infinite separation; charges are point charges; "slowly" means the charges start and end at rest, so W_ext = ΔU_E. A scientific calculator is assumed. Round only at the end.

## Question 1 (multiple choice · foundation)

A +4.0 μC charge and a +6.0 μC charge are 30 cm apart. What is the electric potential energy of the system?

- (A) 0.72 J
- (B) 2.4 J
- (C) −0.72 J
- (D) 7.2 × 10⁻³ J

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** U_E = (9.0 × 10⁹)(4.0 × 10⁻⁶)(6.0 × 10⁻⁶) ÷ 0.30 m = 0.72 J. Both charges are positive, so U_E is positive.

- (B) divides by r² = 0.090 m². That is the pattern of the force, not the energy.
- (C) has the wrong sign. Like charges repel, so work had to be done to push them together: U_E > 0.
- (D) uses r = 30 instead of 0.30 m, forgetting to convert centimetres to metres.
</details>

## Question 2 (multiple choice · core)

Two small charged spheres have U_E = 0.90 J. The charge on one sphere is doubled and the separation is tripled. What is the new electric potential energy?

- (A) 0.60 J
- (B) 0.20 J
- (C) 5.4 J
- (D) 1.35 J

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** U_E ∝ q₁q₂/r. Doubling one charge gives × 2; tripling r gives × 1/3. New U_E = 0.90 J × 2/3 = 0.60 J.

- (B) uses × 1/9 for the distance (1/r²): 0.90 × 2/9 = 0.20 J.
- (C) multiplies by 3 for the distance as well as by 2 for the charge, as if energy grew with separation.
- (D) uses 3/2 instead of 2/3, swapping the two factors.
</details>

## Question 3 (multiple choice · core)

An electron and a proton are held a distance r apart. An external force slowly moves them until they are 2r apart. Which statement is correct?

- (A) U_E of the system increases, and the external force does positive work.
- (B) U_E of the system decreases, and the external force does positive work.
- (C) U_E of the system increases, and the external force does negative work.
- (D) U_E of the system decreases, and the external force does negative work.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The charges have opposite signs, so U_E = −ke²/r at the start and −ke²/(2r) at the end. −ke²/(2r) is closer to zero, so U_E **increases**. With no change in kinetic energy, W_ext = ΔU_E > 0. This fits the physics: the charges attract, so you must pull to separate them.

- (B) sees the size of U_E halve and calls that a decrease. A change from a negative value toward zero is an increase.
- (C) has U_E right but contradicts W_ext = ΔU_E.
- (D) would be right for two **like** charges moving apart.
</details>

## Question 4 (multiple choice · core)

Four equal charges +q sit at the corners of a square of side a. What is the total electric potential energy of the system?

- (A) 4kq²/a
- (B) (4 + √2)kq²/a
- (C) (4 + 2√2)kq²/a
- (D) (8 + 2√2)kq²/a

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Four charges make 6 pairs: 4 along the sides (distance a) and 2 across the diagonals (distance √2 a). Total = 4 × kq²/a + 2 × kq²/(√2 a) = (4 + 2/√2)kq²/a = (4 + √2)kq²/a ≈ 5.41kq²/a.

- (A) leaves out the two diagonal pairs.
- (C) uses a/√2 instead of √2 a for the diagonal length, which makes each diagonal term too large.
- (D) counts each pair twice (once from each end), doubling the answer.
</details>

## Question 5 (calculation · core)

Three charges lie on the x-axis: +1.0 μC at x = 0, −2.0 μC at x = 0.10 m and +3.0 μC at x = 0.30 m.

(a) Calculate the total electric potential energy of the system.
(b) The +3.0 μC charge is moved slowly to x = 0.50 m while the other two stay fixed. Calculate the work done by the external force.
(c) Explain the sign of your answer to (b) in terms of the forces on the +3.0 μC charge.

<details>
<summary>Worked solution</summary>

1. (a) Three pairs:
   - (+1.0, −2.0), r = 0.10 m: (9.0 × 10⁹)(1.0 × 10⁻⁶)(−2.0 × 10⁻⁶) ÷ 0.10 = −0.18 J
   - (+1.0, +3.0), r = 0.30 m: (9.0 × 10⁹)(1.0 × 10⁻⁶)(3.0 × 10⁻⁶) ÷ 0.30 = +0.09 J
   - (−2.0, +3.0), r = 0.20 m: (9.0 × 10⁹)(−2.0 × 10⁻⁶)(3.0 × 10⁻⁶) ÷ 0.20 = −0.27 J
   - Total U_E = **−0.36 J**.
2. (b) The (+1.0, −2.0) pair does not change. New distances: 0.50 m and 0.40 m.
   - (+1.0, +3.0): +0.054 J. (−2.0, +3.0): −0.135 J.
   - New total = −0.18 + 0.054 − 0.135 = −0.261 J.
   - W_ext = ΔU_E = −0.261 − (−0.36) = **+0.099 J**.
3. (c) The +3.0 μC charge is attracted by the nearer −2.0 μC charge more strongly than it is repelled by the +1.0 μC charge. The net electric force on it points back toward the others, so you must pull it outward: positive work.

Suggested mark points (4): 1 for all three pair energies with correct signs; 1 for the total −0.36 J; 1 for W_ext = +0.099 J (only the two changing pairs need recalculating); 1 for linking the positive sign to a net attraction toward the other charges.

Common error: recalculating the unchanged pair with new numbers, or leaving it out of both totals inconsistently. Since it is the same before and after, it cancels in ΔU_E either way.
</details>

## Question 6 (constructed response · core)

Small sphere A carries a fixed charge +Q. A second small sphere B is placed a distance r from A. In case 1, B carries +q. In case 2, B carries −q.

(a) On one set of axes, sketch U_E against r for both cases, from r₀/2 to 4r₀. Label each curve.
(b) In case 1, U_E = +0.40 J when r = r₀. State U_E in case 1 at 2r₀ and at r₀/2, and in case 2 at r₀.
(c) For each case, state the sign of the external work needed to move B slowly from r₀ to 2r₀, and give its value.
(d) A student says: "In case 2 the energy is negative, so the system has less than zero energy. That is impossible, so the sign must be wrong." Evaluate this claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Case 1: a curve above the r-axis, falling as r increases, steep at small r, approaching zero at large r. Case 2: the mirror image below the axis, rising toward zero. Neither curve crosses the axis.

**(b)** U_E ∝ 1/r. Case 1: at 2r₀, **+0.20 J**; at r₀/2, **+0.80 J**. Case 2 at r₀: **−0.40 J** (same size, opposite sign).

**(c)** Case 1: ΔU_E = 0.20 − 0.40 = −0.20 J, so **W_ext = −0.20 J** (negative: like charges push apart, and you only have to hold B back). Case 2: U_E at 2r₀ = −0.20 J, so ΔU_E = −0.20 − (−0.40) = +0.20 J and **W_ext = +0.20 J** (positive: you must pull B away from A).

**(d)** The claim is wrong. U_E is measured from a chosen zero: the energy when the charges are infinitely far apart. Negative U_E means the system has **less energy than at infinite separation**, so energy must be added to pull the charges apart. That fits case 2, where the charges attract. Only differences in U_E have physical meaning.

| Point | What earns it |
|---|---|
| 1 | Sketch: case 1 positive and falling toward zero; case 2 its mirror image below the axis, rising toward zero; both labelled |
| 1 | Correct values +0.20 J, +0.80 J and −0.40 J, using U_E ∝ 1/r |
| 1 | Case 1: W_ext = −0.20 J, with the sign |
| 1 | Case 2: W_ext = +0.20 J, with the sign |
| 1 | Explains that zero is set at infinite separation, so negative U_E is allowed |
| 1 | Links negative U_E to an attracting system that needs energy added to separate it |

Do not award the (b) point for values found with 1/r² (0.10 J and 1.6 J).
</details>

## Question 7 (constructed response · stretch)

Two small spheres, each of mass 4.0 g and charge +2.0 μC, are held 0.10 m apart on a level, frictionless, insulating surface. They are released from rest.

(a) Calculate the initial electric potential energy of the system.
(b) Calculate the speed of each sphere when they are 0.20 m apart.
(c) Calculate the speed of each sphere when they are very far apart.
(d) In a second trial, one sphere is held fixed and only the other is released from 0.10 m. Find its final speed when very far away, and explain why it is larger than your answer to (c).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** U_E = (9.0 × 10⁹)(2.0 × 10⁻⁶)² ÷ 0.10 = **0.36 J**.

**(b)** At 0.20 m, U_E = 0.36 ÷ 2 = 0.18 J. Energy is conserved, so the total kinetic energy is 0.36 − 0.18 = 0.18 J. The spheres have equal mass and the total momentum stays zero, so they move with equal speeds in opposite directions and share the kinetic energy equally: 0.090 J each. ½(0.0040 kg)v² = 0.090 J gives v = √45 = **6.71 m/s**.

**(c)** Very far apart, U_E → 0, so the total kinetic energy is 0.36 J, or 0.18 J each. ½(0.0040)v² = 0.18 gives v = √90 = **9.49 m/s**.

**(d)** Now the moving sphere receives all 0.36 J: ½(0.0040)v² = 0.36 gives v = √180 = **13.4 m/s**. It is faster because the same decrease in U_E goes into **one** sphere's kinetic energy instead of being split between two. (The fixed sphere's support does no work, since that sphere does not move.) The speed is √2 times larger.

| Point | What earns it |
|---|---|
| 1 | U_E = 0.36 J |
| 1 | U_E at 0.20 m = 0.18 J, so the system gains 0.18 J of kinetic energy |
| 1 | Equal sharing justified (equal masses and zero total momentum, or symmetry) |
| 1 | v = 6.71 m/s in (b) |
| 1 | v = 9.49 m/s in (c), from all of U_E becoming kinetic energy |
| 1 | v = 13.4 m/s in (d), explained by all the energy going to one sphere |

Carry forward an error in (a) once. Topic 10.7 develops this energy reasoning further.
</details>

## How did you do?

- **Q1 or Q5 wrong:** re-read "The equation and its sign" and Worked example 2 in the [study guide](/advanced-course-resources/physics-2/10-4-electric-potential-energy-study-guide/). Check the signs first.
- **Q2 wrong:** revisit "Predicting changes": energy goes as 1/r.
- **Q3 or Q6 wrong:** compare the two curves in Figure 1 and re-read "Work done to rearrange charges".
- **Q4 wrong:** re-read "Systems of more than two charges" and list every pair.
- **Q7 incomplete:** combine Worked example 1 with conservation of energy from Physics 1, then try again.

Then tick off the [topic checklist](/advanced-course-resources/physics-2/10-4-electric-potential-energy-checklist/).
