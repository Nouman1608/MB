---
resourceId: "mb-ap-phys2-9.2-practice"
title: "The Ideal Gas Law: Practice Questions (Physics 2 9.2)"
description: "Seven original Marlbridge practice questions on the ideal gas model, PV = nRT = Nk_BT, factor-of-change reasoning, gas graphs and absolute zero, with full solutions."
course: "physics-2"
unit: 9
topics: ["9.2"]
resourceType: "practice-questions"
prerequisites:
  - "Using PV = nRT and PV = Nk_BT with T in kelvin"
prerequisiteResources: ["mb-ap-phys2-9.2-study-guide"]
learningObjectives:
  - "Identify the assumptions of the ideal gas model"
  - "Apply the ideal gas law with correct units and absolute temperature"
  - "Predict factors of change in P, V or T"
  - "Plot and interpret gas data, including extrapolating to absolute zero"
  - "Compare the pressures of different gas samples and justify the comparison"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "R = 8.31 J/(mol·K), k_B = 1.38 × 10⁻²³ J/K, N_A = 6.02 × 10²³ mol⁻¹. All gases are ideal. Add 273 to convert °C to K. Give answers to 3 significant figures unless the data justify fewer"
related: ["mb-ap-phys2-9.2-study-guide", "mb-ap-phys2-9.2-revision-notes", "mb-ap-phys2-9.2-checklist"]
next: "mb-ap-phys2-9.2-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "Every temperature in the ideal gas law must be in kelvin."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Data and assumptions for every question: R = 8.31 J/(mol·K); k_B = 1.38 × 10⁻²³ J/K; N_A = 6.02 × 10²³ mol⁻¹; every gas is ideal; T(K) = T(°C) + 273; 1 L = 10⁻³ m³. All experimental data are fictional. A scientific calculator is assumed. Round only at the end. You will need graph paper for Question 6.

## Question 1 (multiple choice · foundation)

Which statement is **not** an assumption of the classical ideal gas model?

- (A) The atoms collide elastically with each other and with the walls.
- (B) The total volume of the atoms is negligible compared with the volume of the container.
- (C) The atoms attract each other, which slows them down between collisions.
- (D) At any instant, the velocities of the atoms point in random directions.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The model assumes that the only significant forces on an atom act during collisions. Between collisions there are no forces, so each atom moves in a straight line at constant speed. Attractions between atoms are exactly what the model leaves out.

- (A) is an assumption: collisions conserve kinetic energy.
- (B) is an assumption: the atoms are tiny compared with the space the gas fills.
- (D) is an assumption: no direction of motion is special.
</details>

## Question 2 (multiple choice · core)

A fixed amount of gas is in a cylinder with a movable piston. The volume of the gas is halved, and at the same time its absolute temperature is increased by 50%. By what factor does the pressure change?

- (A) 3.0
- (B) 0.75
- (C) 1.5
- (D) 2.0

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** P = nRT/V. The new temperature is 1.5T and the new volume is 0.5V, so the new pressure is (1.5 ÷ 0.5) × P = 3.0P.

- (B) multiplies 1.5 by 0.5, as if pressure were proportional to volume. Pressure is inversely proportional to volume.
- (C) includes the temperature change but ignores the change in volume.
- (D) includes the volume change but ignores the change in temperature.
</details>

## Question 3 (multiple choice · core)

A sealed, rigid container holds gas at 1.20 × 10⁵ Pa and 27 °C. The gas is heated to 127 °C. What is its new pressure?

- (A) 1.60 × 10⁵ Pa
- (B) 5.64 × 10⁵ Pa
- (C) 0.900 × 10⁵ Pa
- (D) 0.400 × 10⁵ Pa

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Rigid and sealed means V and n are constant, so P ∝ T with T in kelvin. T₁ = 300 K and T₂ = 400 K, so P₂ = (1.20 × 10⁵ Pa)(400 ÷ 300) = 1.60 × 10⁵ Pa.

- (B) uses the Celsius ratio 127 ÷ 27. Ratios of temperatures only make sense on the absolute scale.
- (C) inverts the ratio (300 ÷ 400), as if heating lowered the pressure.
- (D) is only the **increase** in pressure, (1.20 × 10⁵ Pa)(100 ÷ 300). The question asks for the new pressure.
</details>

## Question 4 (multiple choice · core)

A fixed amount of ideal gas is kept at constant temperature while its volume is changed. Which graph is a straight line through the origin?

- (A) P against V
- (B) P against 1/V
- (C) PV against V
- (D) 1/P against 1/V

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** At constant n and T, P = (nRT) × (1/V). This has the form y = mx, so P against 1/V is a straight line through the origin with gradient nRT.

- (A) is a curve (an isotherm). P falls as V rises, but not linearly.
- (C) is a horizontal line, because PV = nRT is constant. It does not pass through the origin.
- (D) 1/P = V/(nRT), so 1/P is proportional to V. Plotted against 1/V that gives a curve, not a line.
</details>

## Question 5 (calculation · core)

A sealed, flexible plastic bag holds 0.0300 m³ of air at 1.00 × 10⁵ Pa and 17 °C. It is carried up a mountain to a place where the pressure is 0.700 × 10⁵ Pa and the temperature is −13 °C. The bag stretches freely, so the pressure inside always equals the pressure outside. Calculate (a) the number of moles of air in the bag, (b) the number of molecules and (c) the new volume of the bag.

<details>
<summary>Worked solution</summary>

1. T₁ = 17 + 273 = 290 K and T₂ = −13 + 273 = 260 K.
2. (a) n = PV/(RT) = (1.00 × 10⁵ Pa)(0.0300 m³) ÷ [(8.31 J/(mol·K))(290 K)] = 3000 J ÷ 2409.9 J/mol = **1.24 mol**.
3. (b) N = nN_A = 1.2449 × 6.02 × 10²³ = **7.49 × 10²³ molecules**.
4. (c) The bag is sealed, so n is fixed: V₂ = V₁ × (P₁/P₂) × (T₂/T₁) = (0.0300 m³)(1.00 ÷ 0.700)(260 ÷ 290) = **0.0384 m³**.

Suggested mark points (4): 1 for converting both temperatures to kelvin; 1 for n = 1.24 mol; 1 for N = 7.49 × 10²³; 1 for V₂ = 0.0384 m³. For (c), using n from (a) in V₂ = nRT₂/P₂ is equally valid and gives the same answer.

Common error: using Celsius in the ratio. (−13) ÷ 17 is negative, which would give a negative volume. That impossible answer is a clear sign the temperatures must be in kelvin. Note also the interpretation: lower pressure makes the bag expand, cooling makes it shrink, and here the pressure effect wins, so the bag gets bigger overall.
</details>

## Question 6 (constructed response · core)

A student seals some gas in a rigid flask of volume 2.00 × 10⁻³ m³ and records its pressure at five temperatures (fictional data).

| T (°C) | 10 | 30 | 50 | 70 | 90 |
|---|---|---|---|---|---|
| P (kPa) | 94.0 | 100.3 | 107.5 | 113.9 | 120.6 |

(a) On graph paper, plot P against T in °C. Choose scales so that you can extend the graph down to zero pressure. Draw a best-fit line.
(b) Use your graph to estimate absolute zero in °C. Explain why this value has to be found by extrapolation.
(c) Use the gradient of your line to estimate the amount of gas in the flask.
(d) The experiment is repeated with the same flask holding twice as much gas. Describe how the new line compares with the first one.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Temperature axis from about −300 °C to 100 °C; pressure axis from 0 to about 130 kPa, both labelled with units. The five points lie close to a straight line. A best-fit line passes through about (0 °C, 90.6 kPa) and (100 °C, 124.0 kPa).

**(b)** Gradient = (124.0 − 90.6) kPa ÷ 100 °C = 0.334 kPa/°C. The pressure must fall by 90.6 kPa from its value at 0 °C, which takes 90.6 ÷ 0.334 = 271 °C. So absolute zero ≈ **−271 °C** (accept −260 °C to −285 °C from a hand-drawn line). The gas cannot be cooled to zero pressure in practice: a real gas would liquefy long before, and the ideal gas model would stop applying. So the line has to be extended beyond the data.

**(c)** At constant volume, P = (nR/V)T, so the gradient is nR/V. A 1 °C step equals a 1 K step, so the gradient is 334 Pa/K. n = (334 Pa/K)(2.00 × 10⁻³ m³) ÷ 8.31 J/(mol·K) = **0.0804 mol** (accept 0.076 to 0.084 mol).

**(d)** With twice as much gas, nR/V doubles, so the gradient doubles (about 0.668 kPa/°C) and every pressure is twice as large. The line is **steeper** but still meets the temperature axis at the **same** point as the first line (about −271 °C from these data; ideally −273 °C), because P = 0 only when T = 0 K whatever the amount of gas.

| Point | What earns it |
|---|---|
| 1 | Axes labelled with quantities and units; scales that reach about −300 °C and 0 kPa; points plotted correctly |
| 1 | A single straight best-fit line (not joined dot to dot) extended to P = 0 |
| 1 | Absolute zero between −260 °C and −285 °C, with the method shown (intercept read or calculated from the gradient) |
| 1 | Explains that real gases condense before reaching zero pressure, so extrapolation is needed |
| 1 | Identifies gradient = nR/V and gets n between 0.076 and 0.084 mol |
| 1 | Line for doubled gas is steeper (twice the gradient) **and** has the same temperature intercept, with a reason |

Accept a gradient found from two well-separated points on the best-fit line, or from the end data points if the line passes through them. Carry forward a gradient error from (b) into (c) once.
</details>

## Question 7 (constructed response · stretch)

Three sealed, rigid containers hold ideal gases:

| Container | Volume (m³) | Number of atoms | Temperature (K) |
|---|---|---|---|
| X | 2.0 × 10⁻³ | 4.0 × 10²² | 300 |
| Y | 4.0 × 10⁻³ | 6.0 × 10²² | 400 |
| Z | 1.0 × 10⁻³ | 2.0 × 10²² | 450 |

(a) Rank the pressures in the three containers from greatest to least. If two are equal, say so. Show how you decided.
(b) A student says: "Y has the most atoms, so the gas in Y must have the greatest pressure." Evaluate this claim.
(c) Container X is heated at constant volume until its pressure equals the pressure in Z. Find the new temperature of X.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** P = Nk_BT/V. Since k_B is the same for all three, compare NT/V:

- X: (4.0 × 10²²)(300) ÷ (2.0 × 10⁻³) = 6.0 × 10²⁷, so P_X = 6.0 × 10²⁷ × 1.38 × 10⁻²³ = 8.28 × 10⁴ Pa
- Y: (6.0 × 10²²)(400) ÷ (4.0 × 10⁻³) = 6.0 × 10²⁷, so P_Y = 8.28 × 10⁴ Pa
- Z: (2.0 × 10²²)(450) ÷ (1.0 × 10⁻³) = 9.0 × 10²⁷, so P_Z = 1.24 × 10⁵ Pa

Ranking: **Z > X = Y**.

**(b)** The claim is wrong. Pressure depends on the number of atoms **per unit volume** and on the temperature, not on the number of atoms alone. Y has the most atoms, but they are spread through the largest volume, so its atoms per unit volume (1.5 × 10²⁵ m⁻³) is less than Z's (2.0 × 10²⁵ m⁻³). Z also has the highest temperature, so its atoms hit the walls harder and more often. Z has the greatest pressure even though it has the fewest atoms.

**(c)** For X, N and V are fixed, so P ∝ T. T_new = 300 K × (P_Z ÷ P_X) = 300 K × (9.0 ÷ 6.0) = **450 K**.

| Point | What earns it |
|---|---|
| 1 | Uses P = Nk_BT/V (or compares NT/V) for all three containers |
| 1 | Correct ranking Z > X = Y, including the tie between X and Y |
| 1 | Rejects the claim, pointing out that pressure depends on N/V and T, not N alone |
| 1 | Supports the evaluation with evidence from the data (for example, Z has the fewest atoms but the greatest pressure, or Y's larger volume) |
| 1 | T_new = 450 K, using P ∝ T at constant N and V |

Accept a comparison of ratios without calculating any pressure in pascals. In (c), accept T_new = P_Z V_X ÷ (N_X k_B) = 450 K.
</details>

## How did you do?

- **Q1 wrong:** re-read "The ideal gas model" in the [study guide](/advanced-course-resources/physics-2/9-2-ideal-gas-law-study-guide/).
- **Q2, Q3 or Q5 wrong:** revisit "Using the law to predict changes". Check that every temperature is in kelvin first.
- **Q4 wrong:** compare the graph types in "Graphs of gas behaviour".
- **Q6 incomplete:** work through Worked example 2 again, then redo the graph.
- **Q7 incomplete:** compare N/V and T, not N alone.

Then tick off the [topic checklist](/advanced-course-resources/physics-2/9-2-ideal-gas-law-checklist/).
