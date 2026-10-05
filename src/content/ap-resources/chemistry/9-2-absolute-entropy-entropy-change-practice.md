---
resourceId: "mb-ap-chem-9.2-practice"
title: "Absolute Entropy and Entropy Change: Practice Questions (Chemistry 9.2)"
description: "Seven original Marlbridge practice questions on calculating standard entropy changes from standard molar entropies, with full worked solutions and suggested mark points."
course: "chemistry"
unit: 9
topics: ["9.2"]
resourceType: "practice-questions"
prerequisites:
  - "Predicting the sign of ΔS from moles of gas"
  - "Converting a mass to moles"
prerequisiteResources: ["mb-ap-chem-9.2-study-guide"]
learningObjectives:
  - "Calculate ΔS° for reactions and phase changes from standard molar entropies"
  - "Convert ΔS° between J K⁻¹ mol⁻¹ and kJ K⁻¹ mol⁻¹ and scale it to a given amount of substance"
  - "Work backwards from ΔS° to an unknown standard molar entropy"
  - "Find and explain errors in an entropy calculation using a sign check"
skills: ["5", "6"]
studyMinutes: 40
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "S° at 298 K (J K⁻¹ mol⁻¹): C(graphite) 5.7, CO(g) 197.7, CO₂(g) 213.8, CH₄(g) 186.3, C₂H₆(g) 229.2, C₂H₅OH(l) 160.7, C₆H₆(l) 173.4, C₆H₆(g) 269.2, H₂(g) 130.7, O₂(g) 205.2, H₂O(l) 70.0, H₂O(g) 188.8, HCl(g) 186.9, Cl₂(g) 223.1. Molar masses: H 1.008, C 12.01, O 16.00 g mol⁻¹"
related: ["mb-ap-chem-9.2-study-guide", "mb-ap-chem-9.2-revision-notes", "mb-ap-chem-9.2-checklist"]
next: "mb-ap-chem-9.2-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Predict the sign from moles of gas before you calculate, then check."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline.

Data for every question: standard molar entropies at 298 K, in J K⁻¹ mol⁻¹.

| Substance | S° | Substance | S° |
|---|---|---|---|
| C(graphite) | 5.7 | C₆H₆(g) | 269.2 |
| CO(g) | 197.7 | H₂(g) | 130.7 |
| CO₂(g) | 213.8 | O₂(g) | 205.2 |
| CH₄(g) | 186.3 | H₂O(l) | 70.0 |
| C₂H₆(g) | 229.2 | H₂O(g) | 188.8 |
| C₂H₅OH(l) | 160.7 | HCl(g) | 186.9 |
| C₆H₆(l) | 173.4 | Cl₂(g) | 223.1 |

Molar masses: H 1.008, C 12.01, O 16.00 g mol⁻¹.

## Question 1 (multiple choice · foundation)

What is ΔS° for the reaction C(graphite) + CO₂(g) → 2 CO(g)?

- (A) −21.8 J K⁻¹ mol⁻¹
- (B) −175.9 J K⁻¹ mol⁻¹
- (C) +175.9 J K⁻¹ mol⁻¹
- (D) +181.6 J K⁻¹ mol⁻¹

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** ΔS° = 2 S°(CO) − [S°(C) + S°(CO₂)] = 2(197.7) − (5.7 + 213.8) = 395.4 − 219.5 = **+175.9 J K⁻¹ mol⁻¹**. Check: moles of gas go from 1 to 2, so a positive value is expected.

- (A) ignores the coefficient 2 on CO: 197.7 − 219.5.
- (B) subtracts the wrong way round (reactants minus products).
- (D) treats graphite as having S° = 0, as if it were an enthalpy of formation: 395.4 − 213.8. Elements have positive S° values.
</details>

## Question 2 (multiple choice · core)

What is ΔS° for the reaction H₂(g) + Cl₂(g) → 2 HCl(g)?

- (A) +727.6 J K⁻¹ mol⁻¹
- (B) +20.0 J K⁻¹ mol⁻¹
- (C) −20.0 J K⁻¹ mol⁻¹
- (D) −166.9 J K⁻¹ mol⁻¹

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** ΔS° = 2(186.9) − (130.7 + 223.1) = 373.8 − 353.8 = **+20.0 J K⁻¹ mol⁻¹**.

Moles of gas are equal (2 on each side), so Topic 9.1 predicts a **small** value whose sign cannot be found by counting. The calculation settles it: small and positive.

- (A) adds every value instead of subtracting reactants from products.
- (C) subtracts in the wrong order.
- (D) forgets the coefficient 2 on HCl: 186.9 − 353.8.
</details>

## Question 3 (multiple choice · core)

For the combustion of methane, CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(l), which value is ΔS° expressed in kJ K⁻¹ mol⁻¹?

- (A) −0.2429 kJ K⁻¹ mol⁻¹
- (B) −242.9 kJ K⁻¹ mol⁻¹
- (C) −0.0053 kJ K⁻¹ mol⁻¹
- (D) +0.2429 kJ K⁻¹ mol⁻¹

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Products: 213.8 + 2(70.0) = 353.8. Reactants: 186.3 + 2(205.2) = 596.7. ΔS° = 353.8 − 596.7 = −242.9 J K⁻¹ mol⁻¹. Dividing by 1000 gives **−0.2429 kJ K⁻¹ mol⁻¹**. Check: 3 mol of gas → 1 mol of gas, so negative.

- (B) has the right number in joules but the wrong unit. It is 1000 times too large in kJ.
- (C) uses H₂O(g) (188.8) instead of H₂O(l). That gives −5.3 J K⁻¹ mol⁻¹, but the equation shows liquid water.
- (D) has the sign reversed (reactants minus products).
</details>

## Question 4 (calculation · core)

Ethanol burns completely in oxygen:

C₂H₅OH(l) + 3 O₂(g) → 2 CO₂(g) + 3 H₂O(l)

(a) Predict the sign of ΔS° without calculating. Give a reason.
(b) Calculate ΔS° for the reaction.
(c) Calculate the entropy change when 9.21 g of ethanol burns completely.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** **Negative.** Moles of gas: 3 (all O₂) on the left; 2 (CO₂) on the right. Ethanol and water are liquids, so they are not counted.

**(b)** Products: 2(213.8) + 3(70.0) = 427.6 + 210.0 = 637.6 J K⁻¹ mol⁻¹.
Reactants: 160.7 + 3(205.2) = 160.7 + 615.6 = 776.3 J K⁻¹ mol⁻¹.
ΔS° = 637.6 − 776.3 = **−138.7 J K⁻¹ mol⁻¹**. This agrees with (a).

**(c)** M(C₂H₅OH) = 2(12.01) + 6(1.008) + 16.00 = 46.068 g mol⁻¹.
n = 9.21 g ÷ 46.068 g mol⁻¹ = 0.19992 mol, which is 0.19992 mol of reaction (1 mol of ethanol per mole of reaction).
ΔS = 0.19992 mol × (−138.7 J K⁻¹ mol⁻¹) = **−27.7 J K⁻¹**.

| Point | What earns it |
|---|---|
| 1 | (a) Negative, with a correct count of gas moles (3 → 2) |
| 1 | (b) Correct products and reactants sums, including 3 × S°(O₂) |
| 1 | (b) −138.7 J K⁻¹ mol⁻¹ with unit |
| 1 | (c) −27.7 J K⁻¹ (moles of ethanol × ΔS°); accept a value carried forward from (b) |

Common error: using H₂O(g) gives +217.7 J K⁻¹ mol⁻¹, which contradicts the prediction in (a). That disagreement is your signal to check the state symbols.
</details>

## Question 5 (calculation · core)

For the reaction C₂H₄(g) + H₂(g) → C₂H₆(g), ΔS° = −120.8 J K⁻¹ mol⁻¹. Use this value and the data table to calculate the standard molar entropy of ethene, C₂H₄(g).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

1. ΔS° = S°(C₂H₆) − [S°(C₂H₄) + S°(H₂)].
2. −120.8 = 229.2 − S°(C₂H₄) − 130.7.
3. S°(C₂H₄) = 229.2 − 130.7 + 120.8 = **219.3 J K⁻¹ mol⁻¹**.

**Check.** A gas value between those of H₂ (130.7) and C₂H₆ (229.2) is sensible: ethene has two fewer atoms than ethane.

| Point | What earns it |
|---|---|
| 1 | Correct expression with C₂H₄ and H₂ both on the reactant side |
| 1 | 219.3 J K⁻¹ mol⁻¹ with unit |

Common error: substituting the entropy change as +120.8 gives S°(C₂H₄) = −22.3 J K⁻¹ mol⁻¹. A negative absolute entropy is impossible, so this answer should never be accepted.
</details>

## Question 6 (constructed response · core)

Carbon monoxide burns in oxygen:

2 CO(g) + O₂(g) → 2 CO₂(g)

(a) Predict the sign of ΔS° and justify it.
(b) Calculate ΔS° for the reaction.
(c) Calculate the entropy change when 5.60 g of CO burns completely.
(d) A student reports ΔS° = +32.2 J K⁻¹ mol⁻¹ for this reaction. Identify the error and explain how a sign check would have caught it.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** **Negative.** Moles of gas: 2 + 1 = 3 on the left; 2 on the right. Fewer moles of gas means matter is less dispersed.

**(b)** Products: 2(213.8) = 427.6 J K⁻¹ mol⁻¹. Reactants: 2(197.7) + 205.2 = 600.6 J K⁻¹ mol⁻¹.
ΔS° = 427.6 − 600.6 = **−173.0 J K⁻¹ mol⁻¹**.

**(c)** M(CO) = 12.01 + 16.00 = 28.01 g mol⁻¹; n(CO) = 5.60 ÷ 28.01 = 0.19993 mol.
The equation uses 2 mol of CO per mole of reaction, so moles of reaction = 0.19993 ÷ 2 = 0.099964 mol.
ΔS = 0.099964 mol × (−173.0 J K⁻¹ mol⁻¹) = **−17.3 J K⁻¹**.

**(d)** The student left out O₂, as if its S° were zero: 427.6 − 395.4 = +32.2. O₂ is an element, but elements have positive S° values. The prediction in (a) was negative (3 mol of gas → 2 mol), so a positive answer should have prompted a recheck.

| Point | What earns it |
|---|---|
| 1 | (a) Negative, with gas moles 3 → 2 |
| 1 | (b) −173.0 J K⁻¹ mol⁻¹, including S°(O₂) and both coefficients |
| 1 | (c) Moles of reaction found by halving moles of CO |
| 1 | (c) −17.3 J K⁻¹ (carry forward from (b) accepted) |
| 1 | (d) Identifies that O₂ was omitted or set to zero **and** states that the positive sign contradicts the moles-of-gas prediction |

Common error in (c): multiplying moles of CO directly by ΔS° gives −34.6 J K⁻¹, twice the correct value.
</details>

## Question 7 (explanation · stretch)

Benzene evaporates easily at room temperature: C₆H₆(l) → C₆H₆(g).

(a) Calculate ΔS° for this process.
(b) Explain the sign and size of your answer at the particle level.
(c) A classmate says: "Hydrogen gas is an element in its standard state, so its S° must be zero, just like its enthalpy of formation." Explain why this is wrong.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** ΔS° = 269.2 − 173.4 = **+95.8 J K⁻¹ mol⁻¹**.

**(b)** In the liquid, benzene molecules are held close together by intermolecular forces and can only move past one another. In the gas, they are far apart and move freely through a much larger volume. Matter becomes much more dispersed, so ΔS° is positive and large, as expected for liquid → gas.

**(c)** Enthalpies of formation are measured **relative** to the elements, so an element in its standard state is zero by definition. Entropy is measured from a **true zero**: a perfect crystal at 0 K. Hydrogen gas at 298 K has far more matter and energy dispersal than a perfect crystal at 0 K, so its absolute entropy is positive (130.7 J K⁻¹ mol⁻¹ in the table).

| Point | What earns it |
|---|---|
| 1 | (a) +95.8 J K⁻¹ mol⁻¹ |
| 1 | (b) Particle-level reason: molecules separate and spread through a larger volume (matter more dispersed) |
| 1 | (c) ΔH°f values are relative to elements (zero by definition), but S° is absolute, measured from zero for a perfect crystal at 0 K |
| 1 | (c) States that every substance at 298 K, element or compound, has positive S° |

Do not award (b) for "the gas is more disordered" without describing what the molecules are doing.
</details>

## How did you do?

- **Q1, Q2 or Q6(d) wrong:** re-read the misconceptions about coefficients and elements in the [study guide](/advanced-course-resources/chemistry/9-2-absolute-entropy-entropy-change-study-guide/).
- **Q3 wrong:** practise the J-to-kJ conversion and check state symbols, as in Worked example 1.
- **Q4(c) or Q6(c) wrong:** remember that ΔS° is per mole of **reaction**; find moles of reaction first.
- **Q5 wrong:** follow Worked example 3, and reject any negative S°.
- **Q7 incomplete:** link the number to what the particles are doing.

Then tick off the [topic checklist](/advanced-course-resources/chemistry/9-2-absolute-entropy-entropy-change-checklist/).
