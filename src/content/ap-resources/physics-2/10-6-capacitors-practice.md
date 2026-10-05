---
resourceId: "mb-ap-phys2-10.6-practice"
title: "Capacitors: Practice Questions (Physics 2 10.6)"
description: "Seven original Marlbridge practice questions on capacitance, parallel-plate geometry, stored energy, dielectrics, deflection between plates and a capacitance experiment."
course: "physics-2"
unit: 10
topics: ["10.6"]
resourceType: "practice-questions"
prerequisites:
  - "Using C = Q/ΔV, C = κε₀A/d, E = ΔV/d and U_C = ½QΔV"
prerequisiteResources: ["mb-ap-phys2-10.6-study-guide"]
learningObjectives:
  - "Calculate capacitance, charge, field and stored energy for a parallel-plate capacitor"
  - "Predict changes for isolated and connected capacitors"
  - "Model a charged particle between plates as a projectile"
  - "Plan an experiment on capacitance and analyse its data with a linear graph"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "ε₀ = 8.85 × 10⁻¹² C²/(N·m²), e = 1.60 × 10⁻¹⁹ C, proton mass 1.67 × 10⁻²⁷ kg. Ignore edge effects. Give answers to 2 or 3 significant figures as the data justify"
related: ["mb-ap-phys2-10.6-study-guide", "mb-ap-phys2-10.6-revision-notes", "mb-ap-phys2-10.6-checklist"]
next: "mb-ap-phys2-10.6-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "Before any 'what changes' question, decide whether Q or ΔV is fixed."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Data and assumptions for every question: ε₀ = 8.85 × 10⁻¹² C²/(N·m²); e = 1.60 × 10⁻¹⁹ C; proton mass 1.67 × 10⁻²⁷ kg; all capacitors are parallel-plate with edge effects ignored; a dielectric fills the gap between the plates; Q means the charge on one plate. A scientific calculator is assumed. Round only at the end.

## Question 1 (multiple choice · foundation)

A capacitor has +6.0 µC on one plate and −6.0 µC on the other when the potential difference across it is 3.0 V. What is its capacitance?

- (A) 18 µF
- (B) 4.0 µF
- (C) 2.0 µF
- (D) 0.50 µF

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** C = Q/ΔV = 6.0 µC ÷ 3.0 V = 2.0 µF. Q is the charge on one plate.

- (A) multiplies Q by ΔV instead of dividing.
- (B) adds the sizes of the charges on both plates (12 µC) before dividing. The capacitor's total charge is zero; Q is the charge on one plate.
- (D) divides ΔV by Q, which is the inverse of capacitance.
</details>

## Question 2 (multiple choice · core)

A capacitor is charged and then disconnected from the battery. One plate is then slid sideways so that the plates overlap over only half of their original area. The separation does not change. What happens to the potential difference and to the field between the overlapping parts of the plates?

- (A) ΔV doubles and E doubles.
- (B) ΔV doubles and E stays the same.
- (C) ΔV halves and E stays the same.
- (D) ΔV stays the same and E doubles.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The capacitor is isolated, so Q is fixed. Halving the effective area halves C = ε₀A/d, so ΔV = Q/C doubles. With d unchanged, E = ΔV/d doubles too. (Equivalently, E = Q/(ε₀A): the same charge is crowded onto half the area.)

- (B) is the result for doubling the **separation** of an isolated capacitor. Here d is unchanged, so a doubled ΔV means a doubled E.
- (C) gets the direction of the change in C wrong: less area means less capacitance, not more. It is also inconsistent: with d unchanged, E = ΔV/d must change whenever ΔV does.
- (D) treats the capacitor as still connected to the battery, which would hold ΔV fixed.
</details>

## Question 3 (multiple choice · core)

A capacitor stays connected to a battery while a slab of dielectric with κ = 2.0 is slid in to fill the gap. What happens to the charge on each plate and to the energy stored?

- (A) Q doubles and U_C doubles.
- (B) Q stays the same and U_C halves.
- (C) Q doubles and U_C quadruples.
- (D) Q halves and U_C halves.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The battery holds ΔV fixed. C doubles, so Q = CΔV doubles. U_C = ½C(ΔV)² also doubles. The battery supplies the extra charge and energy.

- (B) is the isolated case (Q fixed). The battery is still connected here.
- (C) uses U_C = Q²/(2C) with the old C. When Q doubles, C has also doubled, so U_C only doubles.
- (D) has C changing the wrong way. A dielectric always increases the capacitance.
</details>

## Question 4 (multiple choice · core)

A 2.5 µF capacitor is charged to 40 V. How much energy does it store?

- (A) 4.0 × 10⁻³ J
- (B) 2.0 × 10⁻³ J
- (C) 1.0 × 10⁻⁴ J
- (D) 5.0 × 10⁻⁵ J

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** U_C = ½C(ΔV)² = 0.5 × (2.5 × 10⁻⁶ F)(40 V)² = 2.0 × 10⁻³ J.

- (A) leaves out the ½, as if every bit of charge moved through the full 40 V.
- (C) is CΔV = 1.0 × 10⁻⁴, which is the charge Q in coulombs, not an energy.
- (D) is ½CΔV, which forgets to square ΔV.
</details>

## Question 5 (calculation · core)

An engineer needs a 2.0 nF capacitor. She uses two metal foils separated by a plastic film 0.050 mm thick with dielectric constant κ = 2.5.

(a) Calculate the area of foil needed.
(b) Without the film (air gap of the same thickness), what area would be needed?
(c) The finished capacitor is connected to 30 V. Calculate the charge on each foil, the field in the film and the energy stored.

<details>
<summary>Worked solution</summary>

1. (a) A = Cd/(κε₀) = (2.0 × 10⁻⁹ F)(5.0 × 10⁻⁵ m) ÷ (2.5 × 8.85 × 10⁻¹²) = **4.52 × 10⁻³ m²** (about 45 cm², a square roughly 6.7 cm on a side).
2. (b) With κ = 1 the area must be 2.5 times larger: **1.13 × 10⁻² m²**.
3. (c) Q = CΔV = (2.0 × 10⁻⁹ F)(30 V) = **6.0 × 10⁻⁸ C**.
4. E = ΔV/d = 30 V ÷ 5.0 × 10⁻⁵ m = **6.0 × 10⁵ V/m**.
5. U_C = ½C(ΔV)² = 0.5 × (2.0 × 10⁻⁹)(30)² = **9.0 × 10⁻⁷ J**.

Suggested mark points (4): 1 for rearranging C = κε₀A/d and converting 0.050 mm to 5.0 × 10⁻⁵ m; 1 for A = 4.52 × 10⁻³ m²; 1 for the factor of κ in (b); 1 for all three values in (c). Accept E found from E = Q/(κε₀A).

Common error: leaving d in millimetres, which makes the area 1000 times too large.
</details>

## Question 6 (constructed response · core)

Two horizontal plates are 4.0 cm apart and 6.0 cm long. The top plate is at a higher potential than the bottom plate, and the potential difference is 200 V. A proton enters along the midline, moving parallel to the plates at 3.0 × 10⁵ m/s.

(a) State the direction of the electric force on the proton and sketch its path between the plates and just after it leaves.
(b) Calculate the acceleration of the proton, and justify ignoring gravity.
(c) Calculate how far the proton has been deflected when it leaves the plates. Does it hit a plate?
(d) A student doubles the potential difference to 400 V. Predict, without repeating the full calculation, whether the proton now hits a plate.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The field points from the higher-potential (top) plate to the lower (bottom) plate: downward. The proton is positive, so the force is **downward**. Between the plates the path is a downward-curving **parabola**, starting horizontal. After the plates it continues in a **straight line** at an angle below the horizontal.

**(b)** E = ΔV/d = 200 V ÷ 0.040 m = 5.0 × 10³ V/m. F = eE = 8.0 × 10⁻¹⁶ N. a = F/m = 8.0 × 10⁻¹⁶ ÷ 1.67 × 10⁻²⁷ = **4.79 × 10¹¹ m/s²**. The weight is mg = 1.6 × 10⁻²⁶ N, about 2 × 10⁻¹¹ of the electric force, so gravity is negligible.

**(c)** Time between the plates: t = L/v₀ = 0.060 ÷ 3.0 × 10⁵ = 2.0 × 10⁻⁷ s. Deflection: y = ½at² = 0.5 × (4.79 × 10¹¹)(2.0 × 10⁻⁷)² = **9.6 × 10⁻³ m** (0.96 cm). The proton starts 2.0 cm from each plate, so it **does not hit**.

**(d)** The time between the plates does not change (v₀ and L are the same). y = ½at² and a ∝ E ∝ ΔV, so doubling ΔV doubles y to about **1.92 cm**. That is still less than 2.0 cm, so the proton **just misses** the bottom plate.

| Point | What earns it |
|---|---|
| 1 | Force downward, linked to E pointing from high to low potential and the proton being positive |
| 1 | Sketch: parabola between the plates, straight line after |
| 1 | a = 4.79 × 10¹¹ m/s² with E = 5.0 × 10³ V/m |
| 1 | Gravity justified as negligible by comparing mg with eE (or g with a) |
| 1 | y ≈ 0.96 cm from y = ½at² with t = L/v₀, and "does not hit" |
| 1 | (d) Uses y ∝ ΔV at fixed t to predict 1.92 cm and "just misses" |

For (d), also accept a full recalculation. Do not award (d) for "it hits because the force is doubled" with no comparison to 2.0 cm.
</details>

## Question 7 (constructed response · stretch)

A student wants to test whether the capacitance of two parallel plates is inversely proportional to their separation. She has two square aluminium plates 0.20 m × 0.20 m, sets of thin insulating spacers, a ruler, a micrometer and a capacitance meter.

(a) Describe a procedure. Say what she varies, what she measures and what she keeps constant.
(b) Her results are below. State what she should plot to get a straight line if C ∝ 1/d, and add a row of the values to plot.

| d (mm) | 1.0 | 2.0 | 3.0 | 4.0 | 5.0 |
|---|---|---|---|---|---|
| C (pF) | 362 | 183 | 124 | 94 | 76 |

(c) Use the gradient of a best-fit line to estimate ε₀.
(d) The best-fit line does not pass exactly through the origin. Suggest one reason.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Place the plates face to face with spacers of one thickness between them, at the corners, so the gap is air. Measure the gap d with the micrometer (several places, then average). Connect the capacitance meter to the two plates and record C. Repeat for at least five spacings. Keep the plate area, the alignment of the plates (fully overlapping), the leads and their positions, and the surroundings the same.

**(b)** Plot **C against 1/d**. The values of 1/d are 1.00, 0.500, 0.333, 0.250 and 0.200 mm⁻¹.

**(c)** A best-fit line gives a gradient of about **357 pF·mm**, which is 3.57 × 10⁻¹³ F·m. The gradient should equal ε₀A, so ε₀ ≈ 3.57 × 10⁻¹³ ÷ 0.040 = **8.9 × 10⁻¹² C²/(N·m²)**, within about 1% of the accepted 8.85 × 10⁻¹². (A line through the first and last points gives 357.5 pF·mm and the same estimate.)

**(d)** The intercept is about +5 pF. Likely causes: the **stray capacitance** of the leads and meter, which adds a roughly constant amount to every reading; or **edge effects**, which add a little capacitance outside the plates' area.

| Point | What earns it |
|---|---|
| 1 | Varies d using spacers and measures it with the micrometer |
| 1 | Measures C with the meter for at least five values of d, keeping A and the setup fixed |
| 1 | Plots C against 1/d (or 1/C against d), with correct 1/d values |
| 1 | Gradient found from the line (accept 350–365 pF·mm), with units |
| 1 | ε₀ = gradient ÷ A, giving about 8.9 × 10⁻¹² C²/(N·m²) |
| 1 | A sensible reason for the nonzero intercept (stray capacitance or edge effects) |

Accept a plot of 1/C against d with the gradient equal to 1/(ε₀A). A gradient from two points read off the best-fit line (not from two data points that lie off it) is expected.
</details>

## How did you do?

- **Q1 or Q4 wrong:** re-read "Two plates, equal and opposite charge" and "Energy stored in a capacitor" in the [study guide](/advanced-course-resources/physics-2/10-6-capacitors-study-guide/).
- **Q2 or Q3 wrong:** redo Worked example 2 and the "Held fixed" table. Decide what is fixed first.
- **Q5 wrong:** check every unit conversion, then redo Worked example 1.
- **Q6 wrong:** compare with Worked example 3; set it up like a projectile problem.
- **Q7 incomplete:** re-read the paragraph on testing C ∝ 1/d in "What sets the capacitance".

Then tick off the [topic checklist](/advanced-course-resources/physics-2/10-6-capacitors-checklist/).
