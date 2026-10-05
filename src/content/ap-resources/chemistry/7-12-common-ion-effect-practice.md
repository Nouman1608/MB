---
resourceId: "mb-ap-chem-7.12-practice"
title: "Common-Ion Effect: Practice Questions (Chemistry 7.12)"
description: "Seven original Marlbridge practice questions on the common-ion effect: Le Châtelier reasoning, solubility with a common ion, K_sp from data and experimental design."
course: "chemistry"
unit: 7
topics: ["7.12"]
resourceType: "practice-questions"
prerequisites:
  - "Calculating molar solubility from K_sp (Topic 7.11)"
prerequisiteResources: ["mb-ap-chem-7.12-study-guide"]
learningObjectives:
  - "Predict the effect of adding a common ion, or a non-common ion, on solubility and ion concentrations"
  - "Calculate molar solubility in a solution containing a common ion and check the approximation"
  - "Calculate K_sp from solubility data collected in a common-ion solution"
  - "Explain how a change in experimental procedure involving a common ion alters results"
skills: ["2", "5", "6"]
studyMinutes: 40
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "All K_sp values are at 25 °C. Salts named with letters (B, P, W, M, X, Z, Y, Q, T) are fictional. All sodium, potassium and nitrate salts used to supply ions are soluble"
related: ["mb-ap-chem-7.12-study-guide", "mb-ap-chem-7.12-revision-notes", "mb-ap-chem-7.12-checklist"]
next: "mb-ap-chem-7.12-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "Put the common ion into the K_sp expression before you simplify, then check the approximation."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. All K_sp values are at 25 °C. Salts named with capital letters (B, P, W, M, X, Z, Y, Q, T) are fictional. Every sodium, potassium and nitrate salt used to supply ions is soluble and fully dissociated. Assume volumes do not change when a solid is added.

## Question 1 (multiple choice · foundation)

Solid KF is dissolved in a saturated solution of the fictional salt BF₂, with undissolved BF₂ present. The temperature stays constant. Which statement describes the changes once equilibrium is re-established?

- (A) [B²⁺] decreases and K_sp stays the same.
- (B) [B²⁺] decreases and K_sp decreases.
- (C) [B²⁺] increases and K_sp stays the same.
- (D) [B²⁺] stays the same and K_sp increases.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** F⁻ is a common ion. Adding it makes Q = [B²⁺][F⁻]² greater than K_sp, so B²⁺ and F⁻ precipitate as BF₂ until Q = K_sp again. [B²⁺] ends lower. K_sp depends only on temperature, which has not changed.

- (B) confuses solubility with K_sp. The solubility falls; the constant does not.
- (C) gets the direction of the shift wrong: adding a product shifts the equilibrium towards the solid.
- (D) K_sp cannot change at constant temperature, and [B²⁺] must fall to bring Q back to K_sp.
</details>

## Question 2 (multiple choice · core)

The fictional 1:1 salt PW has K_sp = 2.5 × 10⁻¹¹. What is its molar solubility in 0.050 M NaW?

- (A) 5.0 × 10⁻⁶ M
- (B) 1.0 × 10⁻⁸ M
- (C) 5.0 × 10⁻¹⁰ M
- (D) 1.3 × 10⁻¹² M

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** K_sp = [P⁺][W⁻] = s(0.050 + s) ≈ 0.050 s, so s = 2.5 × 10⁻¹¹ ÷ 0.050 = 5.0 × 10⁻¹⁰ M. Check: s is tiny compared with 0.050, so the approximation holds.

- (A) is √K_sp, the solubility in **pure water**. It ignores the common ion.
- (B) divides by c², which would be right only if W⁻ were squared in the expression (a 1:2 salt).
- (D) multiplies K_sp by c instead of dividing.
</details>

## Question 3 (multiple choice · core)

The fictional salt MX₂ (K_sp = 1.0 × 10⁻⁹) dissolves as MX₂(s) ⇌ M²⁺(aq) + 2 X⁻(aq). In which liquid is its molar solubility **lowest**?

- (A) Pure water
- (B) 0.10 M NaX
- (C) 0.10 M M(NO₃)₂
- (D) 0.10 M NaNO₃

<details>
<summary>Answer and explanation</summary>

**Answer: (B).**

| Liquid | Set-up | s (mol L⁻¹) |
|---|---|---|
| Pure water | 4s³ = K_sp | 6.3 × 10⁻⁴ |
| 0.10 M NaX | s(0.10)² = K_sp | 1.0 × 10⁻⁷ |
| 0.10 M M(NO₃)₂ | (0.10)(2s)² = K_sp | 5.0 × 10⁻⁵ |
| 0.10 M NaNO₃ | no common ion: 4s³ = K_sp | 6.3 × 10⁻⁴ |

- (A) has no common ion, so the solubility is highest.
- (C) does lower the solubility, but M²⁺ appears only to the first power in K_sp, so its effect is much smaller than that of X⁻, which is squared.
- (D) contains neither M²⁺ nor X⁻, so in this model it does not change the solubility.
</details>

## Question 4 (multiple choice · core)

A student finds K_sp for a 1:1 salt by measuring how much dissolves, then calculating K_sp = s². Instead of distilled water, she uses tap water that already contains a small concentration of the salt's anion. How does this change her calculated K_sp?

- (A) It is too low, because the anion already present reduces the amount of salt that dissolves.
- (B) It is too high, because the extra anion increases the product of the ion concentrations.
- (C) It is unchanged, because K_sp depends only on temperature.
- (D) It is too low, because the anion already present lowers the true K_sp.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The anion is a common ion, so less salt dissolves and her measured s is smaller than in pure water. Her formula s² ignores the extra anion, so her calculated value is too low.

- (B) The true ion product is still K_sp at equilibrium. Her **calculated** value uses only s², which is too small.
- (C) The true K_sp is indeed unchanged, but the question asks about her calculated value, which uses the wrong formula.
- (D) gets the direction right but for the wrong reason: the true K_sp does not change.
</details>

## Question 5 (calculation · core)

The fictional salt Z₂Y dissolves as Z₂Y(s) ⇌ 2 Z⁺(aq) + Y²⁻(aq), with K_sp = 5.0 × 10⁻¹².

(a) Calculate its molar solubility in pure water.
(b) Calculate its molar solubility in 0.020 M ZNO₃. Show that any approximation you make is valid.
(c) Without a full calculation, explain why 0.020 M ZNO₃ lowers the solubility more than 0.020 M Na₂Y would.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** [Z⁺] = 2s, [Y²⁻] = s. K_sp = (2s)²(s) = 4s³, so s = ∛(5.0 × 10⁻¹² ÷ 4) = ∛(1.25 × 10⁻¹²) = **1.1 × 10⁻⁴ M**.

**(b)** [Z⁺] = 0.020 + 2s ≈ 0.020 and [Y²⁻] = s.
K_sp = (0.020)²s = 4.0 × 10⁻⁴ s, so s = 5.0 × 10⁻¹² ÷ 4.0 × 10⁻⁴ = **1.25 × 10⁻⁸ M** (1.3 × 10⁻⁸ M to 2 significant figures).
Check: 2s = 2.5 × 10⁻⁸, about 0.0001% of 0.020, so ignoring it is valid. The solubility is about 8600 times lower than in pure water.

**(c)** Z⁺ is squared in the K_sp expression; Y²⁻ is not. Fixing [Z⁺] at 0.020 M divides K_sp by (0.020)², but fixing [Y²⁻] at 0.020 M divides it by only 0.020 (and leaves a square root to take). So the same concentration of Z⁺ has a much bigger effect. (For reference, s in 0.020 M Na₂Y is √(K_sp ÷ 0.080) = 7.9 × 10⁻⁶ M.)

| Point | What earns it |
|---|---|
| 1 | s in pure water = 1.1 × 10⁻⁴ M from 4s³ = K_sp |
| 1 | Common ion placed correctly: K_sp = (0.020)²s, or (0.020 + 2s)²s |
| 1 | s = 1.25 × 10⁻⁸ M with the approximation checked |
| 1 | Explains the bigger effect of Z⁺ through the squared term in K_sp |
</details>

## Question 6 (calculation · core)

A chemist measures the solubility of the fictional salt QF₂ (QF₂(s) ⇌ Q²⁺(aq) + 2 F⁻(aq)) in 0.0300 M NaF. At equilibrium, [Q²⁺] = 4.4 × 10⁻⁶ M.

(a) Calculate K_sp for QF₂.
(b) Use your K_sp to predict the molar solubility of QF₂ in pure water.
(c) A classmate calculates K_sp as 4s³ using s = 4.4 × 10⁻⁶ M. State his value and explain what is wrong with his method.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** s = [Q²⁺] = 4.4 × 10⁻⁶ M. [F⁻] = 0.0300 + 2s ≈ 0.0300 M (2s is under 0.03% of 0.0300).
K_sp = [Q²⁺][F⁻]² = (4.4 × 10⁻⁶)(0.0300)² = **4.0 × 10⁻⁹**.

**(b)** In pure water, K_sp = 4s³, so s = ∛(4.0 × 10⁻⁹ ÷ 4) = ∛(1.0 × 10⁻⁹) = **1.0 × 10⁻³ M**, about 230 times more than in 0.0300 M NaF.

**(c)** His value: 4 × (4.4 × 10⁻⁶)³ = **3.4 × 10⁻¹⁶**. The formula 4s³ assumes [F⁻] = 2s, which is only true in pure water. Here almost all of the F⁻ came from NaF, so [F⁻] is 0.0300 M, not 8.8 × 10⁻⁶ M. His method ignores the common ion and gives a K_sp far too small.

| Point | What earns it |
|---|---|
| 1 | [F⁻] taken as 0.0300 M (common ion) and squared |
| 1 | K_sp = 4.0 × 10⁻⁹ |
| 1 | Pure-water s = 1.0 × 10⁻³ M from 4s³ (carry forward their K_sp) |
| 1 | Classmate's value 3.4 × 10⁻¹⁶ with the reason: [F⁻] ≠ 2s when NaF is present |
</details>

## Question 7 (constructed response · stretch)

A saturated solution of the fictional 1:1 salt TY (TY(s) ⇌ T⁺(aq) + Y⁻(aq)) is filtered to remove all undissolved solid. The clear filtrate is split between two beakers.

(a) Solid NaY is dissolved in beaker 1. Predict what you would observe, and explain using Q and K_sp.
(b) Solid NaNO₃ is dissolved in beaker 2. Predict what you would observe, and explain.
(c) Once beaker 1 reaches equilibrium, [Y⁻] = 0.050 M and [T⁺] = 6.0 × 10⁻⁸ M. Calculate K_sp for TY.
(d) Calculate [T⁺] in the original saturated solution, and the percentage of the T⁺ ions that precipitated in beaker 1.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** A **precipitate of TY forms**. The filtrate was saturated, so Q = K_sp. Adding Y⁻ (a common ion) raises [Y⁻], so Q = [T⁺][Y⁻] becomes greater than K_sp. The reverse reaction happens: T⁺ and Y⁻ combine to form solid TY until Q falls back to K_sp.

**(b)** **No visible change.** Na⁺ and NO₃⁻ do not appear in the K_sp expression, so Q still equals K_sp and the equilibrium does not shift.

**(c)** K_sp = [T⁺][Y⁻] = (6.0 × 10⁻⁸)(0.050) = **3.0 × 10⁻⁹**.

**(d)** In the original saturated solution, [T⁺] = [Y⁻] = s and K_sp = s², so [T⁺] = √(3.0 × 10⁻⁹) = **5.5 × 10⁻⁵ M**.
Percentage precipitated = (5.48 × 10⁻⁵ − 6.0 × 10⁻⁸) ÷ 5.48 × 10⁻⁵ × 100 = **99.9%**.

| Point | What earns it |
|---|---|
| 1 | Beaker 1: precipitate, because Q > K_sp after Y⁻ is added (or Le Châtelier shift to the solid) |
| 1 | Beaker 2: no change, because neither added ion is in the K_sp expression |
| 1 | K_sp = 3.0 × 10⁻⁹ using [Y⁻] = 0.050 M |
| 1 | Original [T⁺] = 5.5 × 10⁻⁵ M and about 99.9% precipitated (carry forward their K_sp) |

Do not award the point in (a) for "a precipitate forms" without the Q or Le Châtelier reason. A K_sp of [T⁺]² = 3.6 × 10⁻¹⁵ in (c) earns no credit: it ignores the common ion.
</details>

## How did you do?

- **Q1 or Q7(a)–(b) wrong:** re-read "What a common ion does" and "What changes and what does not" in the [study guide](/advanced-course-resources/chemistry/7-12-common-ion-effect-study-guide/).
- **Q2, Q3 or Q5 wrong:** practise putting c into the right place in the K_sp expression, as in Worked example 1.
- **Q4 or Q6 wrong:** go through Worked example 2: a common ion changes the solubility you measure, not K_sp.
- **Q7(c)–(d) incomplete:** use the common-ion concentration for that ion, and s² only for the pure saturated solution.

Then tick off the [topic checklist](/advanced-course-resources/chemistry/7-12-common-ion-effect-checklist/).
