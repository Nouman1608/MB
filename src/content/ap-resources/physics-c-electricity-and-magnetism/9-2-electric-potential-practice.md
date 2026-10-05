---
resourceId: "mb-ap-physcem-9.2-practice"
title: "Electric Potential: Practice Questions (Physics C: E&M 9.2)"
description: "Seven original Marlbridge practice questions on electric potential: superposition, arcs and rings, equipotential maps, E = −dV/dx and integrating the field, with solutions."
course: "physics-c-electricity-and-magnetism"
unit: 9
topics: ["9.2"]
resourceType: "practice-questions"
prerequisites:
  - "V = kq/r, V = ∫k dq/r, ΔV = −∫E·dl and E_x = −dV/dx"
prerequisiteResources: ["mb-ap-physcem-9.2-study-guide"]
learningObjectives:
  - "Calculate the potential of point charges and of continuous charge distributions"
  - "Find fields from potentials and potential differences from fields"
  - "Read equipotential maps to find field strength and direction"
  - "Draw quantitative graphs of V against position"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "k = 8.99 × 10⁹ N·m²/C², ε₀ = 8.85 × 10⁻¹² C²/(N·m²). Give numerical answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-9.2-study-guide", "mb-ap-physcem-9.2-revision-notes", "mb-ap-physcem-9.2-checklist"]
next: "mb-ap-physcem-9.2-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Questions 6 and 7 need calculus: set up the integral or derivative before you evaluate it."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based course. Data for every question: k = 1/(4πε₀) = 8.99 × 10⁹ N·m²/C² and ε₀ = 8.85 × 10⁻¹² C²/(N·m²). V = 0 infinitely far away unless a question says otherwise. A scientific calculator is assumed; round only at the end.

## Question 1 (multiple choice · foundation)

Four point charges sit at the corners of a square: +q at the two top corners and −q at the two bottom corners. Which statement about the centre of the square is correct?

- (A) V = 0 and E = 0
- (B) V = 0 and E ≠ 0
- (C) V ≠ 0 and E = 0
- (D) V ≠ 0 and E ≠ 0

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** All four charges are the same distance from the centre, so V = k(q + q − q − q)/r = 0. For the field, each top charge pushes a positive test charge downward and away, and each bottom charge pulls it downward and towards it. The horizontal components cancel, but the vertical components all point **down** (from the + side to the − side) and add. So E ≠ 0.

- (A) assumes that zero potential means zero field.
- (C) has it the wrong way round. It would describe four **equal** charges: V = 4kq/r but E = 0 by symmetry.
- (D) is wrong about V: the potential is a scalar sum of +, +, − and − terms of equal size, which is zero.
</details>

## Question 2 (multiple choice · core)

A charge of 3.0 nC is spread uniformly along a quarter-circle arc of radius 0.15 m. What is the electric potential at the centre of curvature of the arc?

- (A) 180 V
- (B) 45 V
- (C) 114 V
- (D) 1.2 × 10³ V

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Every piece of the arc is 0.15 m from the centre, so V = ∫k dq/R = kQ/R = (8.99 × 10⁹)(3.0 × 10⁻⁹) ÷ 0.15 = 180 V. The angle of the arc does not matter.

- (B) divides by 4, as if a quarter-circle gave a quarter of the potential of a full ring. That would only be true for a quarter of the **same** charge; here the whole 3.0 nC is on the arc.
- (C) includes a factor 2/π. Factors like this come from resolving **field** components; potential has no components.
- (D) is kQ/R², which is the size of a point-charge **field**, in N/C, not a potential.
</details>

## Question 3 (multiple choice · core)

In a region of a lab tank, the equipotentials are straight, parallel lines at x = 0, 2.0 cm, 4.0 cm and 6.0 cm, with potentials 60 V, 50 V, 40 V and 30 V. What is the electric field in this region?

- (A) 500 V/m in the +x direction
- (B) 500 V/m in the −x direction
- (C) 5.0 V/m in the +x direction
- (D) 1.5 × 10³ V/m in the +x direction

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** E_x = −dV/dx = −(−10 V)/(0.020 m) = +500 V/m. The potential falls in the +x direction, and E points towards lower potential. E is perpendicular to the equipotentials, so it has no y-component.

- (B) has the right size but points towards **higher** potential, forgetting the minus sign in E_x = −dV/dx.
- (C) divides 10 V by 2.0 without converting centimetres to metres.
- (D) divides a potential (30 V) by a distance (0.020 m) instead of using the potential **difference** over that distance.
</details>

## Question 4 (calculation · core)

Along the x-axis in a certain region the electric potential is V(x) = (200 V/m²)x² − (80 V/m)x + 12 V, with x in metres.

(a) Find an expression for E_x(x).
(b) Calculate E_x at x = 0.50 m and state its direction.
(c) Find where E_x = 0, and the potential there.
(d) Calculate the force on a −3.0 nC charge at x = 0.50 m.

<details>
<summary>Worked solution</summary>

1. (a) E_x = −dV/dx = −[(400 V/m²)x − 80 V/m] = **(80 V/m) − (400 V/m²)x**.
2. (b) At x = 0.50 m: E_x = 80 − 200 = **−120 V/m**, so 120 V/m in the **−x direction**.
3. (c) E_x = 0 when 400x = 80, so **x = 0.20 m**. There V = 200(0.04) − 80(0.20) + 12 = **4.0 V**, the minimum of V(x). A flat V(x) graph means zero field.
4. (d) F_x = qE_x = (−3.0 × 10⁻⁹ C)(−120 V/m) = **+3.6 × 10⁻⁷ N**, in the +x direction. A negative charge feels a force opposite to E, towards higher potential.

Suggested mark points (4): 1 for E_x = −dV/dx with the minus sign; 1 for −120 V/m with direction; 1 for x = 0.20 m and V = 4.0 V; 1 for the force with the correct sign and direction.

Common error: forgetting the minus sign, which reverses every direction in (b) and (d).
</details>

## Question 5 (calculation · core)

Three point charges sit at three corners of a square of side 0.20 m: +4.0 nC at A (0, 0), +4.0 nC at B (0.20 m, 0) and −6.0 nC at C (0.20 m, 0.20 m). Corner D (0, 0.20 m) is empty, and M is the centre of the square.

(a) Calculate the potential at D.
(b) Calculate the potential at M.
(c) A +1.5 nC charge is moved slowly from D to M. Calculate the work done by the external agent.

<details>
<summary>Worked solution</summary>

1. (a) Distances from D: A is 0.20 m, C is 0.20 m and B is the diagonal, √2 × 0.20 = 0.283 m.
V_D = (8.99 × 10⁹)[4.0 × 10⁻⁹/0.20 + 4.0 × 10⁻⁹/0.283 − 6.0 × 10⁻⁹/0.20] = (8.99 × 10⁹)(4.14 × 10⁻⁹ C/m) = **37.2 V**.
2. (b) All three charges are half a diagonal, 0.141 m, from M. V_M = k(4.0 + 4.0 − 6.0) × 10⁻⁹ ÷ 0.141 = **127 V**.
3. (c) W_ext = ΔU = q(V_M − V_D) = (1.5 × 10⁻⁹)(127.1 − 37.2) = **1.35 × 10⁻⁷ J**. It is positive: the charge moves to a higher potential.

Suggested mark points (4): 1 for the correct distances, including the diagonal; 1 for V_D; 1 for V_M; 1 for W = q(V_M − V_D) with the correct sign.

Common error: using V_D − V_M, which gives −1.35 × 10⁻⁷ J. Final minus initial.
</details>

## Question 6 (constructed response · core)

A thin ring of radius R = 0.080 m carries Q = +4.0 nC spread uniformly. Point P is on the ring's axis, a distance x from its centre.

(a) Derive an expression for V(x) by integrating k dq/r.
(b) Use your answer to find E_x on the axis.
(c) Calculate V at x = 0, 0.060 m, 0.15 m and 0.30 m. Plot V against x from 0 to 0.30 m with scaled, labelled axes.
(d) Use your graph to explain why E = 0 at the centre even though V is greatest there.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Every piece dq is the same distance r = √(R² + x²) from P, so V = ∫k dq/√(R² + x²) = [k/√(R² + x²)] ∫dq = **kQ/√(R² + x²)**.

**(b)** E_x = −dV/dx = −kQ × (−½)(R² + x²)^(−3/2) × 2x = **kQx/(R² + x²)^(3/2)**. This is the ring field from Topic 8.4, found here without any vector components.

**(c)** kQ = (8.99 × 10⁹)(4.0 × 10⁻⁹) = 35.96 V·m.

| x (m) | √(R² + x²) (m) | V (V) |
|---|---|---|
| 0 | 0.080 | 450 |
| 0.060 | 0.100 | 360 |
| 0.15 | 0.170 | 212 |
| 0.30 | 0.310 | 116 |

The graph starts flat at 450 V at x = 0, falls most steeply at intermediate x, then falls slowly, like kQ/x for large x. Axes: x in m (0 to 0.30), V in V (0 to 500).

**(d)** At x = 0 the graph has a horizontal tangent (dV/dx = 0), so E_x = −dV/dx = 0. The **value** of V is greatest there, but the field depends on the **slope**. This matches the symmetry: pieces on opposite sides of the ring cancel each other's fields at the centre.

| Point | What earns it |
|---|---|
| 1 | Takes √(R² + x²) out of the integral because it is the same for every dq |
| 1 | E_x = kQx/(R² + x²)^(3/2) from a correct derivative |
| 1 | All four V values correct |
| 1 | Graph: scaled and labelled axes with units, points plotted, smooth curve with zero slope at x = 0 |
| 1 | Explains E = 0 at the centre from the zero slope, not the value of V |

Accept V values to 2 significant figures.
</details>

## Question 7 (constructed response · stretch)

A very long solid insulating cylinder of radius R has uniform charge density ρ > 0. From Gauss's law, the field is E = ρr/(2ε₀) inside (r ≤ R) and E = ρR²/(2ε₀r) outside, pointing radially outward.

(a) Explain why you cannot take V = 0 infinitely far from this cylinder.
(b) Derive V(0) − V(R), the potential difference between the axis and the surface.
(c) Derive V(R) − V(2R).
(d) Evaluate both for ρ = 3.0 × 10⁻⁶ C/m³ and R = 0.020 m. Which point (axis, surface or r = 2R) has the highest potential?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Outside, V(r) − V(r′) = (ρR²/2ε₀) ln(r′/r). As r′ → ∞, ln(r′/r) → ∞, so the potential difference to infinity is infinite. (The model cylinder is infinitely long, so it holds infinite charge.) Only differences between finite points make sense.

**(b)** V(R) − V(0) = −∫₀ᴿ E dr, so V(0) − V(R) = ∫₀ᴿ ρr/(2ε₀) dr = ρR²/(4ε₀).
**V(0) − V(R) = ρR²/(4ε₀)**

**(c)** V(R) − V(2R) = ∫ from R to 2R of ρR²/(2ε₀r) dr = (ρR²/2ε₀) ln 2.
**V(R) − V(2R) = (ρR²/2ε₀) ln 2**

**(d)** ρR² = (3.0 × 10⁻⁶)(0.020)² = 1.2 × 10⁻⁹ C/m.
V(0) − V(R) = 1.2 × 10⁻⁹ ÷ (4 × 8.85 × 10⁻¹²) = **33.9 V**.
V(R) − V(2R) = [1.2 × 10⁻⁹ ÷ (2 × 8.85 × 10⁻¹²)] × 0.693 = **47.0 V**.
The **axis** has the highest potential: it is 33.9 V above the surface, which is 47.0 V above r = 2R (80.9 V in total). This fits E pointing outward, towards lower V.

| Point | What earns it |
|---|---|
| 1 | Explains the divergence of the logarithm (or infinite total charge) |
| 1 | Uses V(0) − V(R) = +∫E dr with the correct sign reasoning |
| 1 | ρR²/(4ε₀) from integrating the inside field |
| 1 | (ρR²/2ε₀) ln 2 from integrating the outside field |
| 1 | Both numbers correct |
| 1 | Identifies the axis as highest, justified by the direction of E |

Accept the outside result written as (λ/2πε₀) ln 2 with λ = ρπR². Carry forward one sign error consistently.
</details>

## How did you do?

- **Q1 or Q2 wrong:** re-read "Point charges and scalar superposition" and the arc entry in "Continuous charge" in the [study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/9-2-electric-potential-study-guide/).
- **Q3 or Q4 wrong:** revisit "From field to potential, and back" and Figure 1.
- **Q5 wrong:** work through Worked example 1 again.
- **Q6 or Q7 incomplete:** go back to Worked examples 2 and 3.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/9-2-electric-potential-checklist/).
