---
resourceId: "mb-ap-chem-3.13-practice"
title: "Beer-Lambert Law: Practice Questions (Chemistry 3.13)"
description: "Seven original Marlbridge practice questions on A = εbc, choosing a wavelength, calibration curves, dilution and lab errors, with worked solutions and suggested mark points."
course: "chemistry"
unit: 3
topics: ["3.13"]
resourceType: "practice-questions"
prerequisites:
  - "Rearranging A = εbc"
  - "Dilution calculations"
prerequisiteResources: ["mb-ap-chem-3.13-study-guide"]
learningObjectives:
  - "Calculate concentration, molar absorptivity or absorbance with A = εbc"
  - "Use a calibration curve and a dilution factor to find an unknown concentration"
  - "Justify the choice of wavelength for an absorbance measurement"
  - "Predict and explain the effect of an experimental error on a calculated concentration"
skills: ["2", "3", "5", "6"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Absorbance has no unit; ε in M⁻¹ cm⁻¹, b in cm, c in M. Round only at the end"
related: ["mb-ap-chem-3.13-study-guide", "mb-ap-chem-3.13-revision-notes", "mb-ap-chem-3.13-checklist"]
next: "mb-ap-chem-3.13-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "For error questions, state the effect on A first, then on c."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. All dyes and complexes named here are invented, and all data are invented. Use A = εbc, where A has no unit, ε is in M⁻¹ cm⁻¹, b is in cm and c is in M (mol L⁻¹). Unless a question says otherwise, every reading is taken after zeroing the spectrophotometer with a blank.

## Question 1 (multiple choice · foundation)

A complex ion has ε = 1.20 × 10⁴ M⁻¹ cm⁻¹ at its wavelength of maximum absorbance. A solution of the complex in a cuvette with path length 0.500 cm has an absorbance of 0.540. What is the concentration of the complex?

- (A) 2.25 × 10⁻⁵ M
- (B) 4.50 × 10⁻⁵ M
- (C) 9.00 × 10⁻⁵ M
- (D) 1.11 × 10⁴ M

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** c = A ÷ (εb) = 0.540 ÷ (1.20 × 10⁴ M⁻¹ cm⁻¹ × 0.500 cm) = 0.540 ÷ 6.00 × 10³ M⁻¹ = 9.00 × 10⁻⁵ M.

- (A) multiplies by b instead of dividing by it (0.540 × 0.500 ÷ 1.20 × 10⁴).
- (B) ignores the path length, as if b were 1.00 cm.
- (D) inverts the equation (εb ÷ A). A concentration of ten thousand molar is impossible, and the units would not cancel.
</details>

## Question 2 (multiple choice · core)

A solution of a coloured complex gives A = 0.30 in a 1.00 cm cuvette. Which change, with nothing else changed, would give an absorbance of about 0.60?

- (A) Measuring the same solution in a 0.50 cm cuvette
- (B) Diluting the solution with an equal volume of water and measuring it in a 2.00 cm cuvette
- (C) Measuring the same solution in a 2.00 cm cuvette
- (D) Filling the 1.00 cm cuvette with twice the volume of the same solution

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** A is proportional to b. Doubling the path length doubles the number of absorbing particles the beam meets, so A = 0.30 × 2 = 0.60.

- (A) halves b, so A = 0.15.
- (B) halves c but doubles b. The product bc is unchanged, so A stays 0.30.
- (D) makes the liquid deeper, but the beam crosses the same 1.00 cm width at the same concentration, so A stays 0.30.
</details>

## Question 3 (multiple choice · core)

A student records these absorbances for one standard solution of an invented dye, Dye T, in the same cuvette:

| Wavelength (nm) | 430 | 480 | 530 | 580 | 630 |
|---|---|---|---|---|---|
| A | 0.08 | 0.21 | 0.47 | 0.62 | 0.35 |

She will use one wavelength to build a calibration curve for Dye T. Which choice, with its reason, is best?

- (A) 430 nm, because the most light reaches the detector at this wavelength
- (B) 530 nm, because it is in the middle of the range tested
- (C) 580 nm, because absorbance changes most for a given change in concentration
- (D) Any of the wavelengths, because ε for Dye T is the same at every wavelength

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** 580 nm gives the largest absorbance for this solution, so it has the largest ε. The calibration line is steepest there, which makes the measurement most sensitive. It is also nearest the top of the peak, where a small wavelength drift changes A least.

- (A) A strong signal at the detector is not the aim. Here A is small, so small reading errors become a large fraction of A.
- (B) The middle of the tested range has no special meaning; 530 nm is on the side of the peak.
- (D) The table itself shows that A, and therefore ε, changes with wavelength.
</details>

## Question 4 (multiple choice · core)

A student zeroes the spectrophotometer with a clean blank and measures a set of standards correctly. When she measures the unknown, she leaves a fingerprint on the side of the cuvette in the light path. What is the effect on the calculated concentration of the unknown?

- (A) Too high, because the fingerprint stops some light reaching the detector, so the measured absorbance is too high
- (B) Too low, because less light reaches the detector, so the measured absorbance is too low
- (C) No effect, because the blank corrects for anything on the cuvette
- (D) Too high, because the fingerprint increases the molar absorptivity of the dye

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The fingerprint absorbs and scatters light. Less light reaching the detector is read as a larger absorbance, and c = A ÷ (εb) is then too high.

- (B) has the link backwards: less light transmitted means a **higher** absorbance.
- (C) The blank was measured in a clean cuvette, so it cannot cancel a fingerprint added later.
- (D) ε is a property of the dye at that wavelength. A fingerprint on the glass cannot change it.
</details>

## Question 5 (calculation · core)

Standards of an invented complex, Complex Z, are measured at λmax in a 1.00 cm cuvette:

| c (× 10⁻⁴ M) | 1.00 | 2.00 | 3.00 | 4.00 |
|---|---|---|---|---|
| A | 0.120 | 0.240 | 0.361 | 0.479 |

(a) Use the data to find the molar absorptivity of Complex Z.
(b) An unknown solution of Complex Z gives A = 0.300 in the same cuvette. Find its concentration.
(c) Predict the absorbance of the unknown in a 0.500 cm cuvette.

<details>
<summary>Worked solution</summary>

**(a)** The points lie on a straight line through the origin. Gradient = 0.479 ÷ 4.00 × 10⁻⁴ M ≈ 1.20 × 10³ M⁻¹ (a least-squares fit of all four points, with or without forcing it through the origin, also gives 1.20 × 10³ M⁻¹ to 3 significant figures). Gradient = εb, so ε = 1.20 × 10³ M⁻¹ ÷ 1.00 cm = **1.20 × 10³ M⁻¹ cm⁻¹**.

**(b)** c = A ÷ (εb) = 0.300 ÷ (1.20 × 10³ M⁻¹ cm⁻¹ × 1.00 cm) = **2.50 × 10⁻⁴ M**. This lies between the 2.00 and 3.00 × 10⁻⁴ M standards, so the reading is inside the calibrated range.

**(c)** A is proportional to b: A = 0.300 × (0.500 ÷ 1.00) = **0.150**.

Suggested mark points (4): 1 for finding the gradient from the data; 1 for ε = 1.20 × 10³ M⁻¹ cm⁻¹ with unit; 1 for 2.50 × 10⁻⁴ M; 1 for 0.150. Accept any ε from 1.19 × 10³ to 1.21 × 10³ M⁻¹ cm⁻¹ and answers to (b) and (c) carried forward from it.
</details>

## Question 6 (constructed response · core)

A student finds the concentration of an invented red dye, Dye M, in a fruit drink. All readings are at 505 nm, the dye's λmax, in a 1.00 cm cuvette.

- A standard solution of Dye M, 3.00 × 10⁻⁵ M, gives A = 0.396.
- The student dilutes 10.0 mL of the drink to 25.0 mL with water. The diluted drink gives A = 0.264.

(a) Calculate the molar absorptivity of Dye M at 505 nm.
(b) Calculate the concentration of Dye M in the original (undiluted) drink.
(c) Before adding the diluted drink, the student rinsed the cuvette with water and did not dry it, leaving water droplets inside. Predict the effect on the concentration found in (b). Justify your answer.
(d) A second student measures the same solutions at 450 nm, where Dye M absorbs only weakly. Explain why 505 nm is the better choice.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** ε = A ÷ (bc) = 0.396 ÷ (1.00 cm × 3.00 × 10⁻⁵ M) = **1.32 × 10⁴ M⁻¹ cm⁻¹**.

**(b)** Diluted drink: c = 0.264 ÷ (1.32 × 10⁴ M⁻¹ cm⁻¹ × 1.00 cm) = 2.00 × 10⁻⁵ M.
Dilution factor = 25.0 mL ÷ 10.0 mL = 2.50. Original drink: c = 2.00 × 10⁻⁵ M × 2.50 = **5.00 × 10⁻⁵ M**.

**(c)** The calculated concentration would be **too low**. The droplets dilute the solution in the cuvette, so the beam meets fewer dye particles and the measured absorbance is lower than it should be. Since c = A ÷ (εb), a lower A gives a lower c.

**(d)** At 505 nm ε is largest, so a given concentration gives the largest absorbance and the steepest calibration line. A small change in concentration then produces a clear change in A, and reading errors are a smaller fraction of each measurement. At 450 nm the absorbances are small, so the same reading errors cause a larger percentage error in c.

| Point | What earns it |
|---|---|
| 1 | ε = 1.32 × 10⁴ M⁻¹ cm⁻¹, with working and unit |
| 1 | Concentration of the diluted drink, 2.00 × 10⁻⁵ M |
| 1 | Multiplies by the dilution factor 2.50 to reach 5.00 × 10⁻⁵ M |
| 1 | States "too low" **and** links it to the dilution lowering the measured absorbance |
| 1 | Links λmax (largest ε or absorbance) to greater sensitivity or a smaller relative error |

Accept the proportion method in (b): 3.00 × 10⁻⁵ M × (0.264 ÷ 0.396) × 2.50. Do not award the point in (c) for "too low" without a reason, or for "inaccurate" without a direction.
</details>

## Question 7 (explanation · stretch)

Two solutions of the same coloured complex are measured at the same wavelength. Solution P has concentration 2.0 × 10⁻⁴ M and is in a 1.0 cm cuvette. Solution Q has concentration 1.0 × 10⁻⁴ M and is in a 2.0 cm cuvette.

(a) A student claims: "P has the larger absorbance because it is more concentrated." Evaluate this claim at the particle level.
(b) A third sample of the complex has some fine solid suspended in it, so it looks slightly cloudy. Explain how this affects the concentration calculated from its absorbance.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** The claim is **incorrect**. Absorbance depends on how many absorbing particles the light meets as it crosses the cuvette, which is set by **both** concentration and path length. P has twice as many particles per centimetre, but the light crosses only 1.0 cm of it; Q has half as many per centimetre, but the light crosses 2.0 cm. The product bc is 2.0 × 10⁻⁴ M cm for both, ε is the same (same species and wavelength), so the absorbances are **equal**.

**(b)** The suspended solid scatters light, so less light reaches the detector. The instrument records this lost light as extra absorbance, even though the scattering is not absorption by the complex. The measured A is too high, so the calculated concentration is **too high**.

| Point | What earns it |
|---|---|
| 1 | States that A depends on the number of absorbing particles in the light path, set by both b and c |
| 1 | Concludes the absorbances are equal, using the equal product bc (or equal particles in the beam) |
| 1 | Explains that the solid scatters light so less reaches the detector, and concludes the calculated c is too high |
</details>

## How did you do?

- **Q1 or Q5 wrong:** practise rearranging A = εbc and checking that the units cancel in the [study guide](/advanced-course-resources/chemistry/3-13-beer-lambert-law-study-guide/) (Worked examples 1 and 2).
- **Q2 or Q7(a) wrong:** re-read "Why b and c matter: counting particles in the beam".
- **Q3 or Q6(d) incomplete:** link λmax to the size of ε and the sensitivity of the measurement.
- **Q4, Q6(c) or Q7(b) wrong:** use the chain "effect on A, then effect on c" from Worked example 3.

Then tick off the [topic checklist](/advanced-course-resources/chemistry/3-13-beer-lambert-law-checklist/).
