---
resourceId: "mb-ap-chem-9.6-practice"
title: "Free Energy of Dissolution: Practice Questions (Chemistry 9.6)"
description: "Seven original Marlbridge practice questions on the enthalpy and entropy of dissolving salts, ΔG° and K_sp, and the limits of the model, with worked solutions."
course: "chemistry"
unit: 9
topics: ["9.6"]
resourceType: "practice-questions"
prerequisites:
  - "ΔG° = ΔH° − TΔS° and ΔG° = −RT ln K (Topics 9.3 and 9.5)"
prerequisiteResources: ["mb-ap-chem-9.6-study-guide"]
learningObjectives:
  - "Identify the sign of the enthalpy and entropy contribution of each factor in dissolving"
  - "Calculate ΔG° of dissolution and K_sp from ΔH° and ΔS°, and the reverse"
  - "Explain why salts with small, highly charged ions can be sparingly soluble"
  - "Evaluate how well a simple model predicts solubility"
skills: ["4", "5", "6"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "R = 8.314 J mol⁻¹ K⁻¹. T(K) = T(°C) + 273. All salts and values are invented for practice"
related: ["mb-ap-chem-9.6-study-guide", "mb-ap-chem-9.6-revision-notes", "mb-ap-chem-9.6-checklist"]
next: "mb-ap-chem-9.6-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry", "exam-chemistry"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Explanations should name the opposing enthalpy and entropy contributions, not just one."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Data for every question: R = 8.314 J mol⁻¹ K⁻¹; ΔG° = ΔH° − TΔS°; ΔG° = −RT ln K_sp. Every salt and value below is invented for practice.

## Question 1 (multiple choice · foundation)

When an ionic solid dissolves in water, which change **decreases** the entropy of the system?

- (A) Ions leaving their fixed positions in the solid
- (B) Water molecules being held in ordered shells around the ions
- (C) Ions spreading out through the whole volume of the solution
- (D) The solid lattice breaking up into separate ions

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Ion–dipole attractions hold water molecules in particular orientations close to each ion. Fewer arrangements are possible for those water molecules, so entropy decreases. This is part of the solvent reorganisation factor.

- (A) and (D) describe factor 1. Ions that were locked in a lattice gain freedom, so entropy increases.
- (C) Spreading through a larger volume gives more possible arrangements, so entropy increases.
</details>

## Question 2 (multiple choice · core)

For an invented salt at 298 K, ΔH°(dissolution) = +12.0 kJ mol⁻¹ and ΔS°(dissolution) = +50.0 J mol⁻¹ K⁻¹. Which statement is correct?

- (A) ΔG° is positive because dissolving is endothermic, so K_sp < 1.
- (B) ΔG° is negative, K_sp > 1, and the salt becomes more soluble as the temperature rises.
- (C) ΔG° is negative, K_sp > 1, and the salt becomes less soluble as the temperature rises.
- (D) ΔG° is positive at 298 K but becomes negative below 240 K.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** ΔG° = 12.0 − (298)(0.0500) = 12.0 − 14.9 = −2.9 kJ mol⁻¹, so K_sp = e^(2900/2477.6) = 3.2, which is greater than 1. Dissolving is endothermic, so K_sp increases as the temperature rises.

- (A) judges by ΔH° alone. The entropy term −TΔS° = −14.9 kJ mol⁻¹ outweighs ΔH°.
- (C) gets ΔG° right but the temperature effect wrong. For endothermic dissolving, K_sp rises with T.
- (D) reverses the logic. ΔG° = 0 at 240 K; **above** 240 K the −TΔS° term wins and ΔG° is negative, so ΔG° is already negative at 298 K.
</details>

## Question 3 (multiple choice · core)

For an invented salt MX, ΔG°(dissolution) = +34.2 kJ mol⁻¹ at 298 K. What is K_sp?

- (A) 1.0 × 10⁻⁶
- (B) 9.9 × 10⁵
- (C) 0.99
- (D) 1.6 × 10⁻¹⁴

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** K_sp = e^(−ΔG°/RT) = e^(−34 200/2477.6) = e^(−13.80) = 1.0 × 10⁻⁶. A positive ΔG° gives K_sp < 1: the salt is sparingly soluble.

- (B) drops the minus sign. A positive ΔG° cannot give K_sp > 1.
- (C) leaves ΔG° in kJ, so the exponent is about a thousand times too small.
- (D) uses 10^(−13.80) instead of e^(−13.80).
</details>

## Question 4 (calculation · core)

An invented salt has K_sp = 2.0 × 10⁻³ at 298 K, and its dissolving is endothermic with ΔH° = +22.0 kJ mol⁻¹.

(a) Calculate ΔG° of dissolution at 298 K.
(b) Calculate ΔS° of dissolution.
(c) Use your answers to explain why this salt is only slightly soluble.

<details>
<summary>Worked solution</summary>

**(a)** ΔG° = −RT ln K_sp = −(8.314)(298) ln(2.0 × 10⁻³) = −(2477.6)(−6.215) = +15 397 J mol⁻¹ = **+15.4 kJ mol⁻¹**.

**(b)** ΔG° = ΔH° − TΔS°, so ΔS° = (ΔH° − ΔG°) ÷ T = (22.0 − 15.40) kJ mol⁻¹ ÷ 298 K = 0.0222 kJ mol⁻¹ K⁻¹ = **+22.2 J mol⁻¹ K⁻¹**.

**(c)** Dissolving is endothermic, which works against it. The entropy change is positive, which works for it, but TΔS° is only 6.6 kJ mol⁻¹, not enough to outweigh ΔH° = 22.0 kJ mol⁻¹. So ΔG° is positive and K_sp is less than 1.

Suggested mark points (3): 1 for ΔG° = +15.4 kJ mol⁻¹ with the correct sign; 1 for ΔS° = +22.2 J mol⁻¹ K⁻¹ (units converted consistently); 1 for an explanation comparing the sizes of ΔH° and TΔS°.

Common error: using ΔG° = +15.4 with ΔH° in J, which gives a meaningless ΔS°. Keep both in kJ, then convert.
</details>

## Question 5 (constructed response · core)

For an invented salt, separating the ions of 1 mol of solid requires an estimated +700 kJ. The ion–water attractions and solvent reorganisation together release an estimated −690 kJ. The entropy change of dissolving is ΔS° = +45 J mol⁻¹ K⁻¹.

(a) Calculate ΔH° of dissolution.
(b) Calculate ΔG° and K_sp at 298 K, and state whether dissolving is favoured.
(c) Each estimate above may be uncertain by about 1%. Explain why this makes it hard to predict whether the salt dissolves.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** ΔH° = +700 + (−690) = **+10 kJ mol⁻¹**.

**(b)** ΔG° = 10 − (298)(0.045) = 10 − 13.41 = **−3.4 kJ mol⁻¹**. K_sp = e^(3410/2477.6) = e^1.376 = **4.0**. ΔG° < 0 and K_sp > 1, so dissolving is favoured.

**(c)** ΔH° is the small difference between two large terms. 1% of 700 kJ is 7.0 kJ and 1% of 690 kJ is 6.9 kJ; each is comparable to ΔH° itself. If the two errors act in opposite directions, ΔH° could lie anywhere from about −4 to +24 kJ mol⁻¹, so ΔG° could range from about −17 kJ mol⁻¹ (K_sp about 10³, very soluble) to about +10 kJ mol⁻¹ (K_sp about 0.01, sparingly soluble). The sign of ΔG° cannot be trusted from such estimates. This is why the CED says predicting the total free energy of dissolution is challenging.

| Point | What earns it |
|---|---|
| 1 | ΔH° = +10 kJ mol⁻¹ |
| 1 | ΔG° = −3.4 kJ mol⁻¹ with ΔS° converted to kJ |
| 1 | K_sp ≈ 4.0 and the conclusion that dissolving is favoured |
| 1 | Explains that a small percentage error in a large term is comparable to the small net value, so the sign of ΔG° could change |

Accept a qualitative answer in (c) if it clearly links the large cancelling terms to the uncertain sign.
</details>

## Question 6 (constructed response · core)

Two invented salts are compared. Salt P has large ions with charges +1 and −1; its ΔS°(dissolution) = +75 J mol⁻¹ K⁻¹. Salt R contains a small 3+ cation; its ΔS°(dissolution) = −150 J mol⁻¹ K⁻¹ and ΔH°(dissolution) = −35.0 kJ mol⁻¹.

(a) Explain, at the particle level, why ΔS° is positive for P but negative for R.
(b) Calculate ΔG° and K_sp for R at 298 K.
(c) Predict, with a reason, whether R becomes more or less soluble at 350 K. Support your answer with a calculation.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** For both salts, ions leaving the ordered solid and spreading through the solution increases entropy. Water molecules held in ordered shells around the ions decrease it. P's large, singly charged ions attract water weakly, so few water molecules are ordered and the entropy gain wins: ΔS° > 0. R's small 3+ cation attracts water molecules very strongly and holds many of them tightly in place, so the ordering wins: ΔS° < 0.

**(b)** ΔG° = −35.0 − (298)(−0.150) = −35.0 + 44.7 = **+9.7 kJ mol⁻¹**. K_sp = e^(−9700/2477.6) = e^(−3.915) = **0.020**. Dissolving is not favoured, even though it is exothermic.

**(c)** **Less soluble.** Dissolving is exothermic, so K_sp falls as temperature rises. At 350 K: ΔG° = −35.0 + (350)(0.150) = +17.5 kJ mol⁻¹, and K_sp = e^(−17 500/(8.314 × 350)) = e^(−6.014) = 2.4 × 10⁻³, smaller than at 298 K.

| Point | What earns it |
|---|---|
| 1 | Identifies the opposing entropy effects: freeing the ions (+) and ordering water (−) |
| 1 | Links the small, highly charged cation to stronger ordering of water, so the negative term wins for R |
| 1 | ΔG° = +9.7 kJ mol⁻¹ and K_sp ≈ 0.020 |
| 1 | Less soluble at 350 K, supported by ΔG° = +17.5 kJ mol⁻¹ or K_sp ≈ 2.4 × 10⁻³ |
</details>

## Question 7 (evaluation · stretch)

A student writes: "A salt dissolves in water if, and only if, the ion–water attractions release more energy than is needed to separate the ions in the solid." Evaluate this claim, referring to all three factors in dissolving and to free energy.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**Model answer.** The claim describes only the enthalpy change. It is right that separating the ions needs energy and that ion–water attractions release energy, and that the balance between these (with the smaller cost of disrupting water–water attractions) sets ΔH° of dissolution. But whether a salt dissolves depends on ΔG° = ΔH° − TΔS°, not on ΔH° alone.

The claim fails in both directions. A salt can dissolve when dissolving is endothermic, because freeing the ions gives a large entropy increase that makes ΔG° negative; ammonium nitrate, used in cold packs, is an example. A salt can also be sparingly soluble when dissolving is exothermic, because small or highly charged ions order many water molecules, making ΔS° strongly negative and ΔG° positive. The claim is therefore incorrect as an "if and only if" rule. A better statement is: "A salt is very soluble when ΔG° of dissolution is negative, which depends on both the enthalpy and the entropy changes of all three factors."

| Point | What earns it |
|---|---|
| 1 | Recognises that the claim covers only enthalpy (factors 1 and 3, with factor 2) |
| 1 | States that solubility depends on ΔG° = ΔH° − TΔS° |
| 1 | Gives a valid case where endothermic dissolving still occurs because of a positive ΔS° |
| 1 | Gives a valid case where exothermic dissolving is not favoured because of a negative ΔS° from ordering water |
</details>

## How did you do?

- **Q1 or Q6(a) wrong:** re-read the table in "Three factors at the particle level" in the [study guide](/advanced-course-resources/chemistry/9-6-free-energy-dissolution-study-guide/).
- **Q2, Q3 or Q4 wrong:** practise the ΔG° and K_sp conversions in Worked examples 1 and 2, keeping kJ and J consistent.
- **Q5 or Q7 incomplete:** revisit "Why predictions are hard" and Worked example 3.

Then tick off the [topic checklist](/advanced-course-resources/chemistry/9-6-free-energy-dissolution-checklist/).
