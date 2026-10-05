---
resourceId: "mb-ap-chem-8.9-practice"
title: "Henderson-Hasselbalch Equation: Practice Questions (Chemistry 8.9)"
description: "Seven original Marlbridge practice questions on buffer pH: using the Henderson-Hasselbalch equation, mixing solutions, weak-base buffers and choosing a conjugate pair."
course: "chemistry"
unit: 8
topics: ["8.9"]
resourceType: "practice-questions"
prerequisites:
  - "Calculating pKa from K_a and pH from [H₃O⁺]"
prerequisiteResources: ["mb-ap-chem-8.9-study-guide"]
learningObjectives:
  - "Calculate buffer pH from concentrations or from moles after mixing"
  - "Use the pKa of the conjugate acid for a weak-base buffer"
  - "Find the ratio of components needed for a target pH and choose a suitable pair"
  - "Explain in words why a buffer's pH changes only slightly when a little acid or base is added"
skills: ["5", "6"]
studyMinutes: 40
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "pKa values at 25 °C: acetic acid 4.76, NH₄⁺ 9.25, H₂PO₄⁻ 7.20; K_w = 1.0 × 10⁻¹⁴. Acids named with letters (HX, HM, HR) are fictional. Give pH to two decimal places"
related: ["mb-ap-chem-8.9-study-guide", "mb-ap-chem-8.9-revision-notes", "mb-ap-chem-8.9-checklist"]
next: "mb-ap-chem-8.9-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "Base over acid in the log term, and use moles after mixing."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Data at 25 °C: pKa of acetic acid = 4.76; pKa of NH₄⁺ = 9.25; pKa of H₂PO₄⁻ = 7.20; K_w = 1.0 × 10⁻¹⁴. Acids named with letters (HX, HM, HR) are fictional. All sodium salts and NH₄Cl are soluble and fully dissociated.

## Question 1 (multiple choice · foundation)

A buffer contains 0.20 M HX and 0.20 M NaX. K_a of HX is 4.0 × 10⁻⁶. What is the pH of the buffer?

- (A) 3.05
- (B) 5.40
- (C) 8.60
- (D) 10.95

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** [X⁻]/[HX] = 0.20 ÷ 0.20 = 1, so log(1) = 0 and pH = pKa = −log(4.0 × 10⁻⁶) = 5.40.

- (A) is the pH of 0.20 M HX on its own (√(K_a × 0.20) gives [H₃O⁺] = 8.9 × 10⁻⁴ M). It ignores the X⁻ that is present.
- (C) is 14.00 − 5.40, the pKb of X⁻, not a pH.
- (D) is 14.00 − 3.05; it treats the answer to (A) as a pOH.
</details>

## Question 2 (multiple choice · core)

An acetic acid/acetate buffer has pH 4.46. What is the ratio [CH₃COO⁻]/[CH₃COOH]?

- (A) 0.30
- (B) 0.50
- (C) 0.94
- (D) 2.0

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** log([A⁻]/[HA]) = pH − pKa = 4.46 − 4.76 = −0.30, so the ratio = 10^−0.30 = 0.50. The pH is below the pKa, so there must be more acid than base: the ratio is less than 1.

- (A) uses the difference 0.30 as the ratio and forgets to take the antilog.
- (C) divides pH by pKa (4.46 ÷ 4.76); the equation has a log, not a quotient of pH values.
- (D) is the ratio upside down: it would give pH 5.06.
</details>

## Question 3 (multiple choice · core)

A buffer contains 0.30 M NH₃ and 0.10 M NH₄Cl. What is its pH?

- (A) 4.27
- (B) 5.23
- (C) 8.77
- (D) 9.73

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The acid is NH₄⁺ (pKa 9.25) and the base is NH₃. pH = 9.25 + log(0.30 ÷ 0.10) = 9.25 + 0.48 = 9.73.

- (A) is the pOH of the buffer (pKb 4.75 − 0.48). It is not the pH.
- (B) uses pKb = 4.75 in place of the pKa and adds log 3.
- (C) puts the acid on top of the ratio: 9.25 + log(1/3).

Quick sense check: there is three times as much base as acid, so the pH must be above 9.25. Only (D) is.
</details>

## Question 4 (multiple choice · core)

A small amount of HCl(aq) is added to a buffer made from equal amounts of a weak acid HA and its salt NaA. Which statement best explains why the pH falls only slightly?

- (A) The added H₃O⁺ reacts with A⁻ to form HA, so [A⁻]/[HA] changes only slightly.
- (B) The added H₃O⁺ reacts with HA, so the amount of weak acid falls.
- (C) The K_a of HA increases so that more HA ionises.
- (D) Any small amount of strong acid changes the pH of any solution only slightly.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The conjugate base removes the added acid: A⁻ + H₃O⁺ → HA + H₂O. Because both A⁻ and HA are present in large amounts, their ratio, and therefore log([A⁻]/[HA]), changes very little.

- (B) is wrong: an acid (HA) does not react with another acid (H₃O⁺). The base component does the work.
- (C) is wrong: K_a is constant at constant temperature.
- (D) is wrong: the same small amount in pure water can change the pH by several units. The small change is a property of the buffer.
</details>

## Question 5 (calculation · core)

25.0 mL of 0.120 M HM (pKa = 3.90) is mixed with 15.0 mL of 0.100 M NaM. Calculate the pH of the mixture.

<details>
<summary>Worked solution</summary>

1. n(HM) = 0.0250 L × 0.120 mol L⁻¹ = 0.00300 mol.
2. n(M⁻) = 0.0150 L × 0.100 mol L⁻¹ = 0.00150 mol.
3. Ratio n(M⁻)/n(HM) = 0.00150 ÷ 0.00300 = 0.500 (the total volume, 40.0 mL, cancels).
4. pH = 3.90 + log(0.500) = 3.90 − 0.30 = **3.60**.

Suggested mark points (3): 1 for both amounts in moles; 1 for the ratio with base on top; 1 for pH = 3.60.

Common error: using the original molarities, 0.100 ÷ 0.120, gives pH 3.82. That ignores the different volumes mixed.
</details>

## Question 6 (constructed response · core)

A student dissolves 0.0200 mol of the fictional weak acid HR (pKa = 4.60) in water and adds 0.0080 mol of solid NaOH. The final volume is 250.0 mL.

(a) Write the net ionic equation for the reaction between HR and NaOH.
(b) Calculate the amounts of HR and R⁻ after the reaction is complete.
(c) Calculate the pH of the final solution.
(d) State which form, HR or R⁻, is present in the larger amount, and explain how your answer to (c) is consistent with this.
(e) How many moles of NaOH, added to 0.0200 mol HR, would give a buffer with pH = 4.60? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** HR(aq) + OH⁻(aq) → R⁻(aq) + H₂O(l). The reaction goes to completion because OH⁻ is a strong base.

**(b)** OH⁻ is the limiting reactant. n(R⁻) = 0.0080 mol; n(HR) = 0.0200 − 0.0080 = **0.0120 mol**. (Concentrations in 250.0 mL: 0.0480 M HR and 0.0320 M R⁻.)

**(c)** pH = 4.60 + log(0.0080 ÷ 0.0120) = 4.60 + (−0.176) = **4.42**.

**(d)** HR is present in the larger amount. Then [R⁻]/[HR] < 1, the log term is negative, and the pH must be below the pKa: 4.42 < 4.60.

**(e)** pH = pKa when n(R⁻) = n(HR). Each mole of OH⁻ turns one mole of HR into R⁻, so half the acid must be converted: **0.0100 mol NaOH**, leaving 0.0100 mol of each.

| Point | What earns it |
|---|---|
| 1 | Correct net ionic equation with OH⁻ (spectator Na⁺ omitted) |
| 1 | 0.0120 mol HR and 0.0080 mol R⁻ |
| 1 | pH = 4.42 using the ratio of moles (or concentrations), base on top |
| 1 | HR in larger amount, linked to pH below pKa |
| 1 | 0.0100 mol NaOH, with the reason that equal amounts give pH = pKa |

Accept answers to (c) carried forward from an error in (b).
</details>

## Question 7 (constructed response · stretch)

A technician needs a buffer at pH 9.00. The available conjugate pairs are acetic acid/acetate (pKa 4.76), H₂PO₄⁻/HPO₄²⁻ (pKa 7.20) and NH₄⁺/NH₃ (pKa 9.25).

(a) Choose the most suitable pair and justify your choice.
(b) The technician uses 0.200 M NH₄Cl. Calculate the concentration of NH₃ needed.
(c) A colleague suggests the phosphate pair instead. Explain, with a calculation, why it would make a poor buffer at pH 9.00.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** **NH₄⁺/NH₃.** Its pKa (9.25) is closest to 9.00, so the ratio of base to acid needed is close to 1 and both components are present in large amounts.

**(b)** log([NH₃]/[NH₄⁺]) = 9.00 − 9.25 = −0.25, so [NH₃]/[NH₄⁺] = 10^−0.25 = 0.562.
[NH₃] = 0.562 × 0.200 M = **0.112 M**.

**(c)** For phosphate: [HPO₄²⁻]/[H₂PO₄⁻] = 10^(9.00 − 7.20) = 10^1.80 = 63. The acid component would be only about 1/63 of the base component. Added base would soon use up the small amount of H₂PO₄⁻, so the pH would not stay near 9.00. A ratio outside about 0.1 to 10 makes a poor buffer.

| Point | What earns it |
|---|---|
| 1 | Chooses NH₄⁺/NH₃ **and** links the choice to pKa being closest to the target pH |
| 1 | Ratio [NH₃]/[NH₄⁺] = 0.56 from pH − pKa = −0.25 |
| 1 | [NH₃] = 0.11 M |
| 1 | Phosphate ratio ≈ 63 (or "more than 10") calculated |
| 1 | Explains that one component would be too small to react with added base (or acid) |

Do not award the last point for "the pKa is wrong" without the reason about the small component.
</details>

## How did you do?

- **Q1, Q2 or Q3 wrong:** re-read "Reading the equation" and the weak-base section of the [study guide](/advanced-course-resources/chemistry/8-9-henderson-hasselbalch-equation-study-guide/).
- **Q5 or Q6 wrong:** practise working in moles (Worked example 2), and do the stoichiometry before the equation.
- **Q4 or Q7 incomplete:** your answer needs the *why*: which component reacts, and why a ratio far from 1 weakens a buffer.

Then tick off the [topic checklist](/advanced-course-resources/chemistry/8-9-henderson-hasselbalch-equation-checklist/).
