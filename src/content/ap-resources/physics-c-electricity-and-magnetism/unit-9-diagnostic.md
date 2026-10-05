---
resourceId: "mb-ap-physcem-u9-diagnostic"
title: "Electric Potential: Unit Diagnostic (Physics C: E&M Unit 9)"
description: "A 30-minute check of Unit 9: eight original Marlbridge questions on electric potential energy, potential, fields from potential and energy conservation, each linked to a guide."
course: "physics-c-electricity-and-magnetism"
unit: 9
topics: []
resourceType: "unit-diagnostic"
prerequisites:
  - "You have studied, or at least started, Topics 9.1 to 9.3"
learningObjectives:
  - "Find out which Unit 9 topics you can already use with confidence"
  - "Spot the specific mistakes behind any wrong answers"
  - "Choose the study guide to revisit for each topic you missed"
skills: ["1", "2", "3"]
studyMinutes: 30
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "k = 1/(4πε₀) = 8.99 × 10⁹ N·m²/C²; ε₀ = 8.85 × 10⁻¹² C²/(N·m²); e = 1.60 × 10⁻¹⁹ C; electron mass 9.11 × 10⁻³¹ kg. Give answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-u9-review", "mb-ap-physcem-9.1-study-guide", "mb-ap-physcem-9.2-study-guide", "mb-ap-physcem-9.3-study-guide"]
next: "mb-ap-physcem-u9-review"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Eight short questions cover all three Unit 9 topics, with extra weight on electric potential (9.2); allow about 30 minutes."
  - "Questions 5 and 8 need short written working; the rest are multiple choice."
  - "Every answer says why each wrong option is tempting and which guide to read if you missed it."
  - "This is a check of what to revisit, not a score prediction."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**What this is for.** This diagnostic shows which Unit 9 topics to revisit. Every topic has at least two questions, and electric potential (9.2), the largest, has more. These are **original Marlbridge practice questions**, not past exam questions. They are not calibrated against real exam results, and your result is **not** a predicted score.

**How to take it.** Work without notes for about 30 minutes, and write each answer before you open the explanation. A scientific calculator is assumed. Data for every question: k = 1/(4πε₀) = 8.99 × 10⁹ N·m²/C², ε₀ = 8.85 × 10⁻¹² C²/(N·m²), e = 1.60 × 10⁻¹⁹ C and electron mass mₑ = 9.11 × 10⁻³¹ kg. Potential and potential energy are zero infinitely far away unless a question says otherwise. All data are invented for practice.

## Question 1 (multiple choice · 9.1)

Point charges +2q and −q are a distance d apart. An external agent moves them slowly until they are 3d apart. How much work does the agent do?

- (A) +4kq²/(3d)
- (B) −4kq²/(3d)
- (C) +2kq²/(3d)
- (D) +16kq²/(9d)

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** U_i = k(+2q)(−q)/d = −2kq²/d and U_f = −2kq²/(3d). With no change in kinetic energy, W_ext = U_f − U_i = −2kq²/(3d) + 2kq²/d = **+4kq²/(3d)**. The charges attract, so the agent must pull them apart: positive work.

- (B) is the work done by the **electric** force, −ΔU.
- (C) is the size of the final energy, not the change.
- (D) makes U fall by a factor of 9 when r triples, as if U ∝ 1/r². That is the force rule.

**If you missed this:** read "Deriving U from the work done" in the [9.1 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/9-1-electric-potential-energy-study-guide/).
</details>

## Question 2 (multiple choice · 9.1)

Two small charged spheres are 0.20 m apart, and the electric potential energy of the pair is −4.0 μJ. Which statement is correct?

- (A) The force between them is attractive with magnitude 2.0 × 10⁻⁵ N, and separating them completely takes +4.0 μJ of external work.
- (B) The force is repulsive with magnitude 2.0 × 10⁻⁵ N, because U is negative.
- (C) The force is attractive with magnitude 1.0 × 10⁻⁴ N, and separating them completely takes +4.0 μJ of external work.
- (D) The force is attractive with magnitude 2.0 × 10⁻⁵ N, and separating them completely takes −4.0 μJ of external work.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Negative U means unlike charges, so the force is attractive. For a pair, U = C/r with C = kq₁q₂, and F_r = −dU/dr = C/r² = U/r. So |F| = (4.0 × 10⁻⁶) ÷ 0.20 = **2.0 × 10⁻⁵ N**. Moving to infinity takes W_ext = 0 − (−4.0 μJ) = **+4.0 μJ**.

- (B) reads the sign of U backwards. Negative U goes with attraction.
- (C) divides U by r², treating energy like a force.
- (D) quotes U itself as the work. The work is the **change** in U.

**If you missed this:** read "Signs, sizes and the U(r) graph" in the [9.1 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/9-1-electric-potential-energy-study-guide/).
</details>

## Question 3 (multiple choice · 9.2)

A thin plastic semicircle of radius 0.12 m carries +4.0 nC spread uniformly. A point charge of −2.0 nC is fixed 0.30 m from the semicircle's centre of curvature, in a direction you are not told. What is the electric potential at the centre of curvature?

- (A) 240 V
- (B) 300 V
- (C) 360 V
- (D) It cannot be found without the direction of the point charge.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Every piece of the arc is 0.12 m from the centre, so V_arc = kQ/R = (8.99 × 10⁹)(4.0 × 10⁻⁹) ÷ 0.12 = 300 V. The point charge adds k(−2.0 × 10⁻⁹) ÷ 0.30 = −60 V. Potentials add as numbers: V = **240 V**.

- (B) leaves out the point charge.
- (C) drops the sign of the −2.0 nC charge.
- (D) Potential is a scalar: only distances matter. (Direction matters for the **field**.)

**If you missed this:** read "Point charges and scalar superposition" and "Continuous charge" in the [9.2 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/9-2-electric-potential-study-guide/).
</details>

## Question 4 (multiple choice · 9.2)

Along the x-axis, the potential rises steadily from 0 V at x = 0 to 40 V at x = 0.20 m. It stays at 40 V up to x = 0.50 m, then falls steadily to −20 V at x = 0.60 m. Where is the field strongest, and what is it there?

- (A) Between 0.50 m and 0.60 m: 600 V/m in the +x direction
- (B) Between 0.50 m and 0.60 m: 600 V/m in the −x direction
- (C) Between 0.20 m and 0.50 m, where the potential is highest
- (D) Between 0 and 0.20 m: 200 V/m in the +x direction

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** E_x = −dV/dx. On the last section, dV/dx = (−20 − 40) ÷ 0.10 = −600 V/m, so E_x = **+600 V/m**. The other sloping section gives only 200 V/m.

- (B) forgets the minus sign. E points towards **lower** potential, which is +x here.
- (C) confuses the value of V with its slope. V is flat there, so E = 0.
- (D) has the wrong section and the wrong direction: on the first section E_x = −200 V/m, pointing in −x.

**If you missed this:** read "From field to potential, and back" in the [9.2 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/9-2-electric-potential-study-guide/).
</details>

## Question 5 (short answer · 9.2)

In a region of space the field is E = αx î, where α = 3.0 × 10³ V/m². The field has no y- or z-component.

(a) Find V(0.20 m) − V(0), the potential difference between x = 0.20 m and x = 0 along the x-axis.
(b) A student instead goes from the origin up to (0, 0.10 m), then across to (0.20 m, 0.10 m). Explain why the potential difference she finds is the same.
(c) A −2.0 nC charge is moved slowly from x = 0 to x = 0.20 m. Find the work done by the external agent.
(d) Equipotentials are drawn every 15 V, starting from V = 0 at x = 0. Find the positions of the first four, and say what their spacing tells you.

<details>
<summary>Answer and explanation</summary>

**(a)** ΔV = −∫E·dl = −∫₀^0.20 αx dx = −α(0.20)²/2 = **−60 V**. The potential falls along the field.

**(b)** On the first leg E has no y-component, so E·dl = 0 and V does not change. The second leg is the same x-integral as in (a). The field is conservative: any path gives **−60 V**.

**(c)** W_ext = ΔU = qΔV = (−2.0 × 10⁻⁹)(−60) = **+1.2 × 10⁻⁷ J**. A negative charge moving to lower potential gains potential energy, so the agent must do positive work.

**(d)** V(x) = −αx²/2. Setting V = −15, −30, −45 and −60 V gives x = **0.100, 0.141, 0.173 and 0.200 m**. They are planes perpendicular to x. The gaps shrink as x grows, so the field gets **stronger** with x, as E = αx says.

Check yourself: 1 mark each for (a), the path argument in (b), the work with its sign in (c), and the positions with the link from spacing to field strength in (d) (4 in total).

**If you missed this:** read "From field to potential, and back" and "Equipotential maps" in the [9.2 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/9-2-electric-potential-study-guide/).
</details>

## Question 6 (multiple choice · 9.2)

An equipotential map shows lines at 50 V, 40 V, 30 V and 20 V. Near point X, neighbouring lines are 1.0 cm apart. Near point Y they are 4.0 cm apart. Which statement is correct?

- (A) E is about 1.0 × 10³ V/m at X and 2.5 × 10² V/m at Y. At both points it crosses the lines at right angles, pointing towards the 20 V line.
- (B) The sizes are as in (A), but E points towards the 50 V line.
- (C) E is about 2.5 × 10² V/m at X and 1.0 × 10³ V/m at Y, because more of the field fits in the wider gap.
- (D) The sizes are as in (A), but E points along the lines, because charges move along equipotentials.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** |E| ≈ ΔV/Δs: (10 V) ÷ (0.010 m) = **1.0 × 10³ V/m** at X and (10 V) ÷ (0.040 m) = **2.5 × 10² V/m** at Y. E is perpendicular to every equipotential and points towards lower potential.

- (B) points E uphill in potential.
- (C) inverts the rule. Closely spaced equipotentials mean a strong field.
- (D) If E had a component along a line, V would change along it.

**If you missed this:** read "Equipotential maps" and Figure 1 in the [9.2 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/9-2-electric-potential-study-guide/).
</details>

## Question 7 (multiple choice · 9.3)

A bead with charge +3.0 μC slides along a frictionless, horizontal insulating wire. It starts at point A (V = 500 V) with 1.2 mJ of kinetic energy. The wire passes through point C (V = 800 V) and then ends at point B (V = 200 V). Which statement is correct?

- (A) The bead passes C and reaches B with 2.1 mJ of kinetic energy.
- (B) The bead cannot pass C, because C is at a higher potential than A.
- (C) The bead reaches B with 0.30 mJ of kinetic energy.
- (D) The bead reaches B with 3.0 mJ of kinetic energy.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** From A to C, ΔU = qΔV = (3.0 × 10⁻⁶)(+300) = 0.90 mJ. That is less than 1.2 mJ, so the bead passes C with 0.30 mJ. Only the end points matter for B: ΔU = (3.0 × 10⁻⁶)(200 − 500) = −0.90 mJ, so K_B = 1.2 + 0.90 = **2.1 mJ**.

- (B) ignores the starting kinetic energy. The bead stops only if the rise in U exceeds 1.2 mJ.
- (C) is the kinetic energy at C, not at B.
- (D) adds the fall from C to B (1.8 mJ) but forgets the rise from A to C.

**If you missed this:** read "Energy bookkeeping for a moving charge" and "Energy diagrams and turning points" in the [9.3 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/9-3-conservation-electric-energy-study-guide/).
</details>

## Question 8 (short answer · 9.3 and 9.2)

A 6.0 V battery is connected across two parallel metal plates 3.0 mm apart in a vacuum. An electron leaves the negative plate from rest.

(a) Which plate is at the higher potential, and what keeps the potential difference in place?
(b) Find the electron's kinetic energy when it reaches the other plate, in eV and in joules, and its speed.
(c) Find the field between the plates.
(d) The gap is doubled with the same battery. State what happens to the field and to the final speed.

<details>
<summary>Answer and explanation</summary>

**(a)** The plate joined to the positive terminal is 6.0 V higher. Chemical reactions in the battery separate positive and negative charge and keep the terminals at different potentials.

**(b)** The electron moves to a potential 6.0 V higher. ΔU = qΔV = (−e)(+6.0 V) = −6.0 eV, so K = **6.0 eV = 9.6 × 10⁻¹⁹ J**. v = √(2K/mₑ) = √(2 × 9.6 × 10⁻¹⁹ ÷ 9.11 × 10⁻³¹) = **1.5 × 10⁶ m/s**.

**(c)** For a uniform field, E = ΔV/d = 6.0 ÷ 0.0030 = **2.0 × 10³ V/m**, pointing from the positive plate to the negative plate.

**(d)** The field **halves** to 1.0 × 10³ V/m, but the speed is **unchanged**: kinetic energy depends only on the potential difference, not on the distance.

Check yourself: 1 mark each for (a), the energy in both units, the speed, and (c) with (d) correct (4 in total).

**If you missed this:** for (b) and (d), read the [9.3 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/9-3-conservation-electric-energy-study-guide/); for (a) and (c), read "Batteries" and "From field to potential, and back" in the [9.2 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/9-2-electric-potential-study-guide/).
</details>

## Your next step

Count a short answer as missed if you lost more than one mark.

| Topic | Question(s) | If you missed it, read |
|---|---|---|
| 9.1 Electric potential energy | 1, 2 | [9.1 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/9-1-electric-potential-energy-study-guide/) |
| 9.2 Electric potential | 3, 4, 5, 6, 8(a) and (c) | [9.2 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/9-2-electric-potential-study-guide/) |
| 9.3 Conservation of electric energy | 7, 8(b) and (d) | [9.3 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/9-3-conservation-electric-energy-study-guide/) |

## How to use your result

- **Missed nothing in a topic?** Skip its study guide for now and go straight to the [mixed unit review](/advanced-course-resources/physics-c-electricity-and-magnetism/unit-9-review/), which joins the topics together.
- **Missed one topic?** Read that study guide, then do its practice set before the review.
- **Missed questions in all three topics?** Work through 9.1 to 9.3 in order: potential is potential energy per charge, and energy conservation uses both.
- **Sign errors in several answers?** Write ΔV = V_final − V_initial and keep the sign of every charge.
- **Got it right but guessed?** Treat it as missed.
