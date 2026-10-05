---
resourceId: "mb-ap-phys2-10.5-practice"
title: "Electric Potential: Practice Questions (Physics 2 10.5)"
description: "Seven original Marlbridge practice questions on electric potential, scalar superposition, conductors in contact, average field and equipotential maps, with full solutions."
course: "physics-2"
unit: 10
topics: ["10.5"]
resourceType: "practice-questions"
prerequisites:
  - "Using V = Σ kq/r and ΔU_E = qΔV with signs"
prerequisiteResources: ["mb-ap-phys2-10.5-study-guide"]
learningObjectives:
  - "Calculate the potential of a configuration of point charges"
  - "Find average fields and their directions from potential differences"
  - "Use equipotential maps to predict the motion of charged particles"
  - "Apply the equal-potential condition to conductors in contact"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "k = 9.0 × 10⁹ N·m²/C², e = 1.60 × 10⁻¹⁹ C. V = 0 infinitely far away. Give answers to 2 or 3 significant figures as the data justify"
related: ["mb-ap-phys2-10.5-study-guide", "mb-ap-phys2-10.5-revision-notes", "mb-ap-phys2-10.5-checklist"]
next: "mb-ap-phys2-10.5-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "Potential is a scalar: always add it with signs, never with components."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Data and assumptions for every question: k = 9.0 × 10⁹ N·m²/C²; e = 1.60 × 10⁻¹⁹ C; the potential is zero infinitely far from all charges; all charges are point charges unless stated; ΔU_E = qΔV. A scientific calculator is assumed. Round only at the end.

## Question 1 (multiple choice · foundation)

Two point charges, +Q and −Q, are fixed a distance d apart. Point M is exactly halfway between them. Which statement about M is correct?

- (A) The potential is zero and the field is zero.
- (B) The potential is zero and the field points toward −Q.
- (C) The potential is positive and the field points toward +Q.
- (D) The potential is zero and the field points toward +Q.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** M is the same distance from both charges, so kQ/(d/2) and k(−Q)/(d/2) cancel: V = 0. The field from +Q at M points away from +Q, toward −Q. The field from −Q at M points toward −Q. Both point the same way, so they add, and E points toward −Q.

- (A) assumes that V = 0 forces E = 0. Potentials cancel as scalars, but these two fields add as vectors.
- (C) ignores the negative charge's contribution to V, and gives the wrong field direction.
- (D) has the right V but the field reversed. The field points away from positive charge and toward negative charge.
</details>

## Question 2 (multiple choice · core)

A +6.0 nC point charge is at x = 0 and a −2.0 nC point charge is at x = 0.40 m. At which point **between** the charges is the electric potential zero?

- (A) x = 0.10 m
- (B) x = 0.20 m
- (C) x = 0.30 m
- (D) There is no such point between the charges.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** V = 0 when k(6.0 nC)/x = k(2.0 nC)/(0.40 − x). So 6.0(0.40 − x) = 2.0x, which gives 2.4 = 8.0x and x = 0.30 m. Check: 6.0/0.30 = 20 and 2.0/0.10 = 20, so the two terms cancel.

- (A) is closer to the larger charge; there V = 540 V − 60 V = +480 V.
- (B) is the midpoint. That works only for charges of equal size; here V = 270 V − 90 V = +180 V.
- (D) is wrong because the charges have opposite signs, so V changes from large positive values near +6.0 nC to large negative values near −2.0 nC, and must pass through zero between them.
</details>

## Question 3 (multiple choice · core)

At point X in a region of space, the electric field points due east. Which statement about the equipotential line through X is correct?

- (A) It runs east–west, and the potential increases toward the east.
- (B) It runs north–south, and the potential increases toward the east.
- (C) It runs north–south, and the potential decreases toward the east.
- (D) It runs east–west, and the potential is the same everywhere on it.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Equipotential lines are perpendicular to the field, so the line through X runs north–south. The field points toward lower potential, so V decreases toward the east.

- (A) draws the isoline along the field. Then the field would have a component along the isoline, which is impossible.
- (B) has the right orientation but the wrong direction of change: it puts E toward higher V.
- (D) is true of every equipotential, but this one cannot run east–west, parallel to the field.
</details>

## Question 4 (multiple choice · core)

Point P is at a potential of 220 V and point Q is at 120 V. Q is 0.050 m from P, in the direction of the field. What is the average electric field between P and Q?

- (A) 2.0 × 10³ V/m, directed from P toward Q
- (B) 2.0 × 10³ V/m, directed from Q toward P
- (C) 6.8 × 10³ V/m, directed from P toward Q
- (D) 5.0 V/m, directed from P toward Q

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** |E| = |ΔV|/Δr = (220 V − 120 V) ÷ 0.050 m = 2000 V/m. The field points from higher potential (P) to lower potential (Q).

- (B) has the correct size but points the field toward higher potential.
- (C) adds the potentials instead of subtracting: 340 V ÷ 0.050 m. Only the difference in V matters.
- (D) multiplies ΔV by the distance (100 × 0.050 = 5.0) instead of dividing.
</details>

## Question 5 (calculation · core)

A small conducting sphere of radius 2.0 cm carries +16 nC. A large, uncharged conducting sphere of radius 6.0 cm is far away. The spheres are joined by a long, thin conducting wire, and charge flows until it stops. Treat each sphere as isolated, so each acts like a point charge at its centre.

(a) Calculate the potential of the small sphere before it is connected.
(b) Calculate the charge on each sphere after the connection, and their common potential.
(c) State which way electrons flow along the wire, and calculate how many move.

<details>
<summary>Worked solution</summary>

1. (a) V = kQ/R = (9.0 × 10⁹)(16 × 10⁻⁹) ÷ 0.020 = **7.2 × 10³ V**. The large sphere starts at 0 V.
2. (b) After connection the surfaces are at the same potential: kQ₁/R₁ = kQ₂/R₂, so Q₁/Q₂ = R₁/R₂ = 1/3. Charge is conserved: Q₁ + Q₂ = 16 nC. So **Q₁ = 4.0 nC** (small) and **Q₂ = 12 nC** (large).
3. Common potential: V = (9.0 × 10⁹)(4.0 × 10⁻⁹) ÷ 0.020 = **1.8 × 10³ V**. (Check: (9.0 × 10⁹)(12 × 10⁻⁹) ÷ 0.060 = 1800 V.)
4. (c) Electrons move toward higher potential, so they flow **from the large sphere to the small sphere**. The large sphere becomes +12 nC because it loses electrons: N = 12 × 10⁻⁹ C ÷ 1.60 × 10⁻¹⁹ C = **7.5 × 10¹⁰ electrons**.

Suggested mark points (4): 1 for V = 7.2 × 10³ V; 1 for using equal potentials **and** charge conservation; 1 for Q₁ = 4.0 nC, Q₂ = 12 nC and V = 1.8 × 10³ V; 1 for the electron direction with 7.5 × 10¹⁰ electrons. Describing the flow as "positive charge moves from small to large" earns the direction mark only if it also says that the moving particles in a metal are electrons.

Common error: sharing the charge equally (8.0 nC each). That gives the small sphere 3600 V and the large one 1200 V, so charge would keep flowing.
</details>

## Question 6 (constructed response · core)

A small sphere carries an unknown charge. A map of the space around it shows three equipotential circles centred on the sphere: −90 V at radius 2.0 cm, −60 V at 3.0 cm and −30 V at 6.0 cm.

(a) Determine the sign and size of the charge on the sphere.
(b) Calculate the average field between the −90 V and −60 V circles and between the −60 V and −30 V circles. State the direction of the field.
(c) A proton is released at rest on the −30 V circle. Describe its motion, including how its acceleration changes. Justify using the map.
(d) Calculate the change in electric potential energy of the proton as it moves from the −30 V circle to the −60 V circle.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** V = kq/r gives q = Vr/k = (−90 V)(0.020 m) ÷ (9.0 × 10⁹) = **−2.0 × 10⁻¹⁰ C** (−0.20 nC). The other circles agree: (−60)(0.030) and (−30)(0.060) both give −1.8 V·m. The potential is negative, so the charge is negative.

**(b)** Between −90 V and −60 V: |E| = 30 V ÷ 0.010 m = **3.0 × 10³ V/m**. Between −60 V and −30 V: |E| = 30 V ÷ 0.030 m = **1.0 × 10³ V/m**. V increases outward (−90 → −30), and E points toward lower V, so E points **radially inward**, toward the sphere.

**(c)** A positive charge accelerates toward lower potential, so the proton moves **inward, toward the sphere**, perpendicular to the circles. Its speed increases. The circles get closer together as it moves in, so the field and hence the **acceleration increase**.

**(d)** ΔU_E = qΔV = (1.60 × 10⁻¹⁹ C)(−60 V − (−30 V)) = **−4.8 × 10⁻¹⁸ J**.

| Point | What earns it |
|---|---|
| 1 | Charge −2.0 × 10⁻¹⁰ C, with the sign justified by the negative potentials |
| 1 | Both average fields, 3.0 × 10³ V/m and 1.0 × 10³ V/m |
| 1 | Field direction radially inward, **because** V decreases inward |
| 1 | Proton moves inward with increasing speed, linked to moving toward lower V |
| 1 | Acceleration increases, linked to the circles getting closer (stronger field) |
| 1 | ΔU_E = −4.8 × 10⁻¹⁸ J with the negative sign |

Accept a justification in (c) based on E = kq/r² increasing as r decreases. Do not award the acceleration point for "it speeds up" alone: speed and acceleration are different claims.
</details>

## Question 7 (constructed response · stretch)

Four point charges sit at the corners of a square of side 0.20 m. The two bottom corners each hold +5.0 nC; the two top corners each hold −5.0 nC. O is the centre of the square, and M is the midpoint of the bottom side.

(a) Calculate the potential at O and at M.
(b) Calculate the work an external force must do to move a +2.0 nC charge slowly from O to M.
(c) A student says: "The potential at O is zero, so the electric field at O must be zero too." Evaluate this claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** O is the same distance from all four corners and the charges sum to zero, so **V_O = 0**. At M, the two positive charges are 0.10 m away. The two negative charges are √(0.10² + 0.20²) = 0.224 m away. With kq = (9.0 × 10⁹)(5.0 × 10⁻⁹) = 45 V·m:

V_M = 45 × (2 ÷ 0.10 − 2 ÷ 0.2236) = 45 × (20 − 8.944) = **498 V** (497.5 V).

**(b)** The charge moves slowly, so the external work equals the change in potential energy: W = qΔV = (2.0 × 10⁻⁹ C)(497.5 V − 0) = **9.95 × 10⁻⁷ J** (about 1.0 × 10⁻⁶ J).

**(c)** The claim is **wrong**. V is a scalar sum, so equal positive and negative terms cancel. E is a vector sum. At O each positive charge pushes a positive test charge away from it (upward and sideways), and each negative charge pulls it toward itself (also upward and sideways). The sideways parts cancel, but all four upward parts add. So E at O is nonzero and points from the positive side toward the negative side. (Its size, 4 × 2250 V/m × cos 45° ≈ 6.4 × 10³ V/m, is not needed.) Also, V rises from 0 at O to 498 V at M, which could not happen if the field were zero all along OM.

| Point | What earns it |
|---|---|
| 1 | V_O = 0, with equal distances and charges summing to zero |
| 1 | Correct distances to M (0.10 m and 0.224 m) |
| 1 | V_M ≈ 498 V, adding scalars with signs |
| 1 | W = qΔV ≈ 9.95 × 10⁻⁷ J, positive |
| 1 | Rejects the claim, contrasting scalar addition of V with vector addition of E |
| 1 | States that E at O points from the positive charges toward the negative charges (or uses the change in V along OM as evidence) |

Carry forward an error in V_M into (b) once.
</details>

## How did you do?

- **Q1 or Q7(c) wrong:** re-read "Common misconceptions" in the [study guide](/advanced-course-resources/physics-2/10-5-electric-potential-study-guide/). V and E add in different ways.
- **Q2 or Q7(a) wrong:** redo Worked example 1, keeping the sign of every charge.
- **Q3, Q4 or Q6 wrong:** revisit "Potential and field" and Worked example 2. E points toward lower V and is perpendicular to the isolines.
- **Q5 wrong:** re-read "Conductors in contact": equal potential, not equal charge.

Then tick off the [topic checklist](/advanced-course-resources/physics-2/10-5-electric-potential-checklist/).
