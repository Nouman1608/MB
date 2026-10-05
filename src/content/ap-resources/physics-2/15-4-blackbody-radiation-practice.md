---
resourceId: "mb-ap-phys2-15.4-practice"
title: "Blackbody Radiation: Practice Questions (Physics 2 15.4)"
description: "Seven original Marlbridge practice questions on blackbody curves, Wien's law, the Stefan–Boltzmann law and Planck's quantum idea, with full solutions and suggested mark points."
course: "physics-2"
unit: 15
topics: ["15.4"]
resourceType: "practice-questions"
prerequisites:
  - "Using λ_max = b/T and P = σAT⁴ with T in kelvin"
prerequisiteResources: ["mb-ap-phys2-15.4-study-guide"]
learningObjectives:
  - "Apply Wien's law and the Stefan–Boltzmann law, including by ratios"
  - "Sketch and compare blackbody curves at different temperatures"
  - "Explain why the blackbody spectrum needed quantum theory"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "b = 2.898 × 10⁻³ m·K, σ = 5.67 × 10⁻⁸ W/(m²·K⁴). Treat every object as an ideal blackbody. Give answers to 3 significant figures unless the data justify fewer"
related: ["mb-ap-phys2-15.4-study-guide", "mb-ap-phys2-15.4-revision-notes", "mb-ap-phys2-15.4-checklist"]
next: "mb-ap-phys2-15.4-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2", "exam-physics-2"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "Temperatures in both laws are in kelvin."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Data for every question: Wien's constant b = 2.898 × 10⁻³ m·K; Stefan–Boltzmann constant σ = 5.67 × 10⁻⁸ W/(m²·K⁴); every object is an ideal blackbody; λ_max = b/T and P = σAT⁴, with T in kelvin. The stars in these questions are invented. A scientific calculator is assumed. Round only at the end.

## Question 1 (multiple choice · foundation)

The radiation from a glowing object has its peak intensity per unit wavelength at 1.45 µm. What is the temperature of the object?

- (A) 2.00 × 10³ K
- (B) 2.00 × 10⁻³ K
- (C) 5.00 × 10⁻⁴ K
- (D) 4.20 × 10⁻⁹ K

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** T = b/λ_max = (2.898 × 10⁻³ m·K) ÷ (1.45 × 10⁻⁶ m) = 1999 K ≈ 2.00 × 10³ K.

- (B) divides by 1.45 without converting micrometres to metres.
- (C) inverts the law: λ_max/b instead of b/λ_max.
- (D) multiplies b by λ_max. The units would be m²·K, not K, which shows it cannot be right.
</details>

## Question 2 (multiple choice · core)

Two blackbodies have temperatures of 3000 K and 6000 K. Which statement correctly compares their spectra?

- (A) The 6000 K body emits more at every wavelength, and its peak wavelength is half that of the 3000 K body.
- (B) The 6000 K body emits more at short wavelengths but less at long wavelengths, because its peak has moved.
- (C) The 6000 K body emits more at every wavelength, and its peak wavelength is twice that of the 3000 K body.
- (D) The 6000 K body has its peak at half the wavelength, and it emits twice as much total power per unit area.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** A hotter blackbody's curve lies above a cooler one at every wavelength. By Wien's law, λ_max ∝ 1/T, so doubling T halves the peak wavelength.

- (B) assumes the curves cross. They never do: the hotter curve is higher everywhere, including the long-wavelength tail.
- (C) treats λ_max as proportional to T.
- (D) gets the peak right but uses P/A ∝ T instead of T⁴. The power per unit area is 2⁴ = 16 times larger.
</details>

## Question 3 (multiple choice · core)

A small blackbody sphere is heated from 300 K to 600 K. By what factor does the power it emits increase?

- (A) 2
- (B) 4
- (C) 8
- (D) 16

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** P ∝ T⁴ for a fixed area, so the factor is (600/300)⁴ = 2⁴ = 16.

- (A) assumes P ∝ T.
- (B) assumes P ∝ T², perhaps confusing the T⁴ law with the r² in the area formula.
- (C) assumes P ∝ T³.
</details>

## Question 4 (multiple choice · core)

Star X and star Y have the same surface temperature. The radius of star X is 3 times the radius of star Y. Which row is correct?

- (A) P_X = 9 P_Y, and both stars have the same peak wavelength
- (B) P_X = 3 P_Y, and both stars have the same peak wavelength
- (C) P_X = 9 P_Y, and star X has the shorter peak wavelength
- (D) P_X = 81 P_Y, and both stars have the same peak wavelength

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** At the same T, P ∝ A ∝ r², so P_X/P_Y = 3² = 9. The peak wavelength depends only on temperature (λ_max = b/T), so it is the same for both.

- (B) uses P ∝ r instead of r².
- (C) wrongly links a larger, more powerful star with a shorter peak wavelength. Size does not change the shape of the curve.
- (D) applies the fourth power to the radius instead of the temperature.
</details>

## Question 5 (calculation · core)

The heating element of a small electric grill has a surface area of 1.5 × 10⁻³ m² and runs at 1100 K.

(a) Calculate the power it radiates.
(b) Calculate its peak wavelength and state the region of the electromagnetic spectrum.
(c) The element is turned up so that it radiates 300 W. Calculate its new temperature.

<details>
<summary>Worked solution</summary>

1. (a) P = σAT⁴ = (5.67 × 10⁻⁸ W/(m²·K⁴))(1.5 × 10⁻³ m²)(1100 K)⁴. Here (1100)⁴ = 1.464 × 10¹² K⁴, so P = **125 W** (124.5 W).
2. (b) λ_max = (2.898 × 10⁻³ m·K) ÷ 1100 K = 2.63 × 10⁻⁶ m = **2.63 µm**, in the **infrared**.
3. (c) T⁴ = P/(σA) = 300 W ÷ [(5.67 × 10⁻⁸)(1.5 × 10⁻³)] W/K⁴, so T = **1370 K** (1370.4 K).
4. Ratio check: T_new/T = (300/124.5)^(1/4) = 1.246, and 1.246 × 1100 K = 1370 K.

Suggested mark points (4): 1 for substituting correctly into P = σAT⁴ with T in kelvin; 1 for P ≈ 125 W; 1 for 2.63 µm and infrared; 1 for T ≈ 1.37 × 10³ K by either method.

Common error: in (c), scaling T by 300/125 = 2.4 to get about 2640 K. The power scales with T⁴, so the temperature only needs to rise by the fourth root of 2.4.
</details>

## Question 6 (constructed response · core)

A blackbody at temperature T₀ has its peak at wavelength λ₀.

(a) On one set of axes of intensity per unit wavelength against wavelength, sketch the spectrum at T₀ and the spectrum of the same body at 2T₀. Label each curve and mark both peak wavelengths in terms of λ₀.
(b) Using your sketch, describe two ways the two curves differ. Justify each with a law or principle.
(c) State the ratio of the total power at 2T₀ to the total power at T₀, and state how this ratio appears on your graph.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Both curves start near zero at short wavelength, rise to a single peak and fall with a long tail. The T₀ curve peaks at λ₀. The 2T₀ curve peaks at **λ₀/2**, is much taller, and lies **above** the T₀ curve at every wavelength.

**(b)** (i) The 2T₀ peak is at half the wavelength, because λ_max = b/T is inversely proportional to T. (ii) The 2T₀ curve is higher at every wavelength, because a hotter blackbody emits more at all wavelengths; the total emitted power rises steeply with T.

**(c)** P ∝ T⁴, so P(2T₀)/P(T₀) = 2⁴ = **16**. On the graph, the **area under** the 2T₀ curve is 16 times the area under the T₀ curve.

| Point | What earns it |
|---|---|
| 1 | Correct shape for both curves: near zero at short λ, single peak, long tail at long λ |
| 1 | 2T₀ curve above the T₀ curve at all wavelengths (no crossing) |
| 1 | Peaks marked at λ₀ and λ₀/2, justified by Wien's law |
| 1 | Ratio 16, from P ∝ T⁴ |
| 1 | Links the power ratio to the ratio of areas under the curves |

Accept a peak-height ratio larger than 16 in the sketch (it is actually 32), as long as the curves do not cross and the 2T₀ curve is clearly taller. Do not award the third point for peaks in the correct order with no mention of halving.
</details>

## Question 7 (constructed response · stretch)

Astronomers measure an invented star. Its spectrum is continuous, with peak intensity per unit wavelength at 725 nm. Its total power output is 2.0 × 10²⁶ W.

(a) Calculate the surface temperature of the star.
(b) Calculate the radius of the star.
(c) A student says: "The peak is in the red, so the star gives out red light only and no blue light." Evaluate this claim.
(d) Explain why a model of thermal radiation based only on classical physics could not describe this star's spectrum at short wavelengths, and what assumption Planck made to fix it.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** T = b/λ_max = (2.898 × 10⁻³ m·K) ÷ (725 × 10⁻⁹ m) = 3997 K ≈ **4.00 × 10³ K**.

**(b)** P = σ(4πR²)T⁴, so R = √[P ÷ (4πσT⁴)] = √[2.0 × 10²⁶ W ÷ (4π × 5.67 × 10⁻⁸ × 3997⁴)] = **1.05 × 10⁹ m**. (Power per square metre: σT⁴ = 1.45 × 10⁷ W/m².)

**(c)** The claim is wrong. A blackbody spectrum is **continuous**: the star emits at every wavelength, including blue, just less at blue than at red. The peak only shows where the emission per unit wavelength is greatest. (Because more of its visible output is at the red end, the star looks orange-red.)

**(d)** Classical physics gave every possible wave pattern in the radiation an equal share of thermal energy, and there are more and more of these patterns at shorter wavelengths. It predicted that emission keeps rising as wavelength gets shorter, without limit, so the star would emit enormous amounts of ultraviolet and an infinite total power. Planck assumed that light of frequency f is emitted only in packets of energy E = hf. Short-wavelength light has high f, so each packet is large, and with limited thermal energy such packets are rarely emitted. The curve therefore falls to zero at short wavelengths, matching the observed peak and fall-off.

| Point | What earns it |
|---|---|
| 1 | T ≈ 4.00 × 10³ K from Wien's law with λ in metres |
| 1 | Uses P = σ(4πR²)T⁴ and rearranges for R |
| 1 | R ≈ 1.05 × 10⁹ m |
| 1 | Rejects the claim: the spectrum is continuous, so blue light is emitted (less of it) |
| 1 | Classical prediction: emission grows without limit at short wavelengths |
| 1 | Planck: energy emitted in quanta E = hf; large quanta at high f are rarely emitted, so emission falls at short wavelengths |

Carry an error in T from (a) into (b) once. Using T = 4000 K exactly gives R = 1.05 × 10⁹ m, which is also accepted.
</details>

## How did you do?

- **Q1 or Q5 wrong:** re-read "Wien's law" and "The Stefan–Boltzmann law" in the [study guide](/advanced-course-resources/physics-2/15-4-blackbody-radiation-study-guide/), then redo Worked example 2. Check your units first.
- **Q2 or Q6 wrong:** study Figure 1 and the four curve features, then sketch the curves from memory.
- **Q3 or Q4 wrong:** practise ratios: P ∝ AT⁴ and λ_max ∝ 1/T, as in Worked example 1.
- **Q7 incomplete:** revisit "Why classical physics failed".

Then tick off the [topic checklist](/advanced-course-resources/physics-2/15-4-blackbody-radiation-checklist/).
