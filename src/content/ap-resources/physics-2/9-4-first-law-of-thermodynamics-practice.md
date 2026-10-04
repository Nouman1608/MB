---
resourceId: "mb-ap-phys2-9.4-practice"
title: "The First Law of Thermodynamics: Practice Questions (Physics 2 9.4)"
description: "Seven original Marlbridge practice questions on ΔU = Q + W, work from PV graphs, special processes and cycles, with full solutions and suggested mark points."
course: "physics-2"
unit: 9
topics: ["9.4"]
resourceType: "practice-questions"
prerequisites:
  - "Using ΔU = Q + W with W as the work done on the gas"
prerequisiteResources: ["mb-ap-phys2-9.4-study-guide"]
learningObjectives:
  - "Apply the first law with the course sign convention"
  - "Find the work done on a gas from a PV graph, including its sign"
  - "Compare isothermal and adiabatic processes using PV diagrams"
  - "Analyse each step of a cycle and the cycle as a whole"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "R = 8.31 J/(mol·K). All gases are ideal and monatomic. Give answers to 3 significant figures unless the data justify fewer"
related: ["mb-ap-phys2-9.4-study-guide", "mb-ap-phys2-9.4-revision-notes", "mb-ap-phys2-9.4-checklist"]
next: "mb-ap-phys2-9.4-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2", "exam-physics-2"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "W always means the work done ON the gas."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Data and assumptions for every question: R = 8.31 J/(mol·K); every gas is ideal and monatomic, so U = (3/2)nRT = (3/2)PV; W is the work done **on** the gas, so ΔU = Q + W and W = −PΔV at constant pressure. A scientific calculator is assumed. Round only at the end.

## Question 1 (multiple choice · foundation)

A gas absorbs 500 J of energy by heating. At the same time it expands and does 200 J of work on its surroundings. What is the change in the internal energy of the gas?

- (A) +700 J
- (B) +300 J
- (C) −300 J
- (D) −700 J

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The gas does 200 J of work on the surroundings, so the work done **on** the gas is W = −200 J. Then ΔU = Q + W = 500 J + (−200 J) = +300 J.

- (A) adds the 200 J as if work were done on the gas. This is the error of using ΔU = Q + W but putting in the work done *by* the gas.
- (C) gets the size right but flips the overall sign, as if the 500 J left the gas.
- (D) treats both transfers as energy leaving the gas.
</details>

## Question 2 (multiple choice · core)

A gas is in a cylinder with insulated walls. A piston compresses it very quickly. Which row describes the process?

- (A) Q = 0, W > 0, and the temperature of the gas rises
- (B) Q = 0, W < 0, and the temperature of the gas falls
- (C) Q < 0, W > 0, and the temperature of the gas stays constant
- (D) Q > 0, W = 0, and the temperature of the gas rises

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Insulated walls and a fast process mean no energy moves by heating, so Q = 0 (adiabatic). The piston pushes inward, so work is done on the gas: W > 0. Then ΔU = Q + W = W > 0, and since U ∝ T for an ideal gas, T rises.

- (B) uses the "work done by the gas" sign (negative for a compression) inside ΔU = Q + W, mixing two conventions.
- (C) treats the compression as isothermal. That would need energy to leave by heating, which the insulation prevents.
- (D) reasons "the temperature rose, so heat must have been added" and ignores the work done by the piston.
</details>

## Question 3 (multiple choice · core)

A gas expands from 2.0 × 10⁻³ m³ to 5.0 × 10⁻³ m³. On a PV diagram the process is a straight line, with the pressure falling from 4.0 × 10⁵ Pa to 1.0 × 10⁵ Pa. What is the work done on the gas?

- (A) −750 J
- (B) +750 J
- (C) −300 J
- (D) −1200 J

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The area under the straight line is a trapezium: ½(4.0 × 10⁵ Pa + 1.0 × 10⁵ Pa)(3.0 × 10⁻³ m³) = 750 J. The gas expands (the path goes to the right), so the work done on the gas is negative: W = −750 J.

- (B) has the correct area but ignores the direction of the path. Expansion means W < 0 in this convention.
- (C) uses only the final pressure: (1.0 × 10⁵ Pa)(3.0 × 10⁻³ m³) = 300 J. The pressure was not constant.
- (D) uses only the initial pressure: (4.0 × 10⁵ Pa)(3.0 × 10⁻³ m³) = 1200 J.
</details>

## Question 4 (multiple choice · core)

0.20 mol of gas in a rigid, sealed container is heated from 290 K to 340 K. How much energy is transferred to the gas by heating?

- (A) 125 J
- (B) 208 J
- (C) 83.1 J
- (D) 0 J

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** A rigid container means constant volume, so W = 0 and Q = ΔU = (3/2)nRΔT = 1.5 × 0.20 mol × 8.31 J/(mol·K) × 50 K = 124.65 J ≈ 125 J.

- (B) uses (5/2)nRΔT = 208 J, the result for constant **pressure**, where the gas also does work.
- (C) uses nRΔT = 83.1 J, which is the size of PΔV in an isobaric process, not a change in internal energy.
- (D) confuses "no work" with "no heating" (isochoric with adiabatic). The temperature rose with W = 0, so Q cannot be zero.
</details>

## Question 5 (calculation · core)

A gas is compressed at a constant pressure of 1.5 × 10⁵ Pa from 4.0 × 10⁻³ m³ to 2.5 × 10⁻³ m³. Calculate (a) the work done on the gas, (b) the change in its internal energy and (c) the energy transferred by heating. State whether energy enters or leaves by heating.

<details>
<summary>Worked solution</summary>

1. ΔV = 2.5 × 10⁻³ − 4.0 × 10⁻³ = −1.5 × 10⁻³ m³.
2. (a) W = −PΔV = −(1.5 × 10⁵ Pa)(−1.5 × 10⁻³ m³) = **+225 J**.
3. (b) U = (3/2)PV, so at constant P, ΔU = (3/2)PΔV = 1.5 × (1.5 × 10⁵)(−1.5 × 10⁻³) = **−338 J** (−337.5 J).
4. (c) Q = ΔU − W = −337.5 J − 225 J = **−563 J** (−562.5 J). Q is negative, so 563 J **leaves** the gas by heating.

Suggested mark points (3): 1 for W = +225 J with the correct sign; 1 for ΔU = −338 J; 1 for Q = −563 J with "leaves the gas". Finding the temperatures is not needed, but a method that uses PV = nRT with any assumed n and reaches the same ΔU is equally valid.

Common error: writing W = −225 J ("work is negative for gases"). Compression means work is done on the gas, so W > 0. Also note the interpretation: 225 J of work is done on the gas, yet its temperature falls, because even more energy leaves by heating.
</details>

## Question 6 (constructed response · core)

Two identical samples of gas start in the same state, pressure P₀ and volume V₀. Sample 1 expands **isothermally** to volume 2V₀. Sample 2 expands **adiabatically** to volume 2V₀.

(a) On one PV diagram, sketch both processes, starting from the same point. Label each curve.
(b) For which sample is the magnitude of the work done on the gas greater? Justify using your diagram.
(c) State the sign of Q for each sample, and compare the final temperatures of the two samples. Justify using the first law.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Both curves start at (V₀, P₀) and move to the right, curving down. The adiabatic curve is **steeper** and ends at a lower pressure at 2V₀. The isothermal curve ends at P₀/2 (because PV is constant).

**(b)** The isothermal curve lies above the adiabatic curve at every volume between V₀ and 2V₀, so the area under it is larger. So |W| is greater for **sample 1 (isothermal)**. In both cases the gas expands, so W < 0 for both.

**(c)** Sample 1: ΔU = 0 (constant T), so Q = −W > 0: energy **enters** by heating. Sample 2: Q = 0 by definition. Then ΔU = W < 0, so U falls and the temperature falls. Sample 1 ends at its starting temperature, so **sample 1 ends hotter** than sample 2.

| Point | What earns it |
|---|---|
| 1 | Sketch: both curves start at the same point and go to 2V₀, with the adiabatic curve steeper and ending lower, both labelled |
| 1 | Identifies sample 1 as having the larger |W| **because** its curve lies higher, so the area under it is larger |
| 1 | Sample 1: ΔU = 0 so Q = −W, which is positive |
| 1 | Sample 2: Q = 0 so ΔU = W < 0, and its temperature falls |
| 1 | Concludes sample 1 ends at the higher temperature, linked to the ΔU values (or to the final pressures at the same volume, using PV = nRT) |

Accept the reasoning in (c) based on final pressures: at the same volume 2V₀, the lower pressure of sample 2 means a lower temperature, by PV = nRT. Do not award the (b) point for "isothermal" with no reference to areas or pressures.
</details>

## Question 7 (constructed response · stretch)

A gas follows the triangular cycle A → B → C → A:

- A: 1.0 × 10⁻³ m³, 1.0 × 10⁵ Pa
- B: 3.0 × 10⁻³ m³, 1.0 × 10⁵ Pa (A → B at constant pressure)
- C: 1.0 × 10⁻³ m³, 3.0 × 10⁵ Pa (B → C along a straight line; C → A at constant volume)

(a) Calculate the net work done on the gas in one cycle.
(b) Calculate W, ΔU and Q for each of the three steps, and the net Q for the cycle.
(c) A student says: "T_B = T_C, so B → C is an isothermal process." Evaluate this claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The enclosed triangle has area ½ × (2.0 × 10⁻³ m³)(2.0 × 10⁵ Pa) = 200 J. Tracing A → B → C → A goes right along the bottom, then up and to the left, then down: **counterclockwise**. The compression B → C happens at higher pressure than the expansion A → B, so more work is done on the gas than by it: **W_net = +200 J**.

**(b)** Using U = (3/2)PV: U_A = 150 J, U_B = 450 J, U_C = 450 J.

| Step | W (J) | ΔU (J) | Q (J) |
|---|---|---|---|
| A → B | −(1.0 × 10⁵)(2.0 × 10⁻³) = −200 | +300 | +500 |
| B → C | +½(1.0 + 3.0) × 10⁵ × 2.0 × 10⁻³ = +400 | 0 | −400 |
| C → A | 0 | −300 | −300 |
| **Cycle** | **+200** | **0** | **−200** |

**(c)** The student is right that T_B = T_C, because P_B V_B = P_C V_C = 300 J. But the process is **not** isothermal. Along the line, at the midpoint (2.0 × 10⁻³ m³, 2.0 × 10⁵ Pa), PV = 400 J, which is greater than 300 J. So the temperature rises and then falls back. An isotherm is a curve PV = constant, not a straight line.

| Point | What earns it |
|---|---|
| 1 | Net work magnitude 200 J from the enclosed area (or from summing the step works) |
| 1 | Correct sign, +200 J, linked to the counterclockwise direction or to compression at higher pressure |
| 1 | Correct W for all three steps, including W = 0 for C → A |
| 1 | Correct ΔU for all three steps (from U = (3/2)PV or (3/2)nRΔT) |
| 1 | Correct Q for each step and Q_net = −200 J, consistent with ΔU_cycle = 0 |
| 1 | Rejects the claim **with evidence** that T changes along B → C (for example PV = 400 J at the midpoint) |

Accept a method for (b) that finds Q only for A → B and C → A, then uses Q_net = −W_net to get Q for B → C. Carry forward errors from (a) into (b) once.
</details>

## How did you do?

- **Q1, Q2 or Q5 wrong:** re-read "Two ways to change internal energy" and the piston derivation in the [study guide](/advanced-course-resources/physics-2/9-4-first-law-of-thermodynamics-study-guide/). Check the sign of W first.
- **Q3 wrong:** revisit "PV diagrams": area for size, direction for sign.
- **Q4 or Q6 wrong:** compare the rows of the "Four special processes" table.
- **Q7 incomplete:** work through Worked example 2 again, then redo the triangle.

Then tick off the [topic checklist](/advanced-course-resources/physics-2/9-4-first-law-of-thermodynamics-checklist/).
