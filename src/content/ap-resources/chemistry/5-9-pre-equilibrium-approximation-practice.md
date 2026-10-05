---
resourceId: "mb-ap-chem-5.9-practice"
title: "Pre-Equilibrium Approximation: Practice Questions (Chemistry 5.9)"
description: "Seven original Marlbridge practice questions on deriving rate laws with a fast pre-equilibrium, half orders, catalysts and matching mechanisms to data, with suggested mark points."
course: "chemistry"
unit: 5
topics: ["5.9"]
resourceType: "practice-questions"
prerequisites:
  - "Writing rate laws for elementary steps"
  - "Finding orders from initial-rate data"
prerequisiteResources: ["mb-ap-chem-5.9-study-guide"]
learningObjectives:
  - "Derive rate laws for mechanisms with a fast reversible first step"
  - "Express an intermediate's concentration in terms of reactant concentrations"
  - "Calculate an overall rate constant, its units and a reaction rate from step data"
  - "Judge whether proposed mechanisms are consistent with experimental data"
skills: ["5", "6"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Concentrations in M (mol L⁻¹), time in s. All species and mechanisms are hypothetical."
related: ["mb-ap-chem-5.9-study-guide", "mb-ap-chem-5.9-revision-notes", "mb-ap-chem-5.9-checklist"]
next: "mb-ap-chem-5.9-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "In every derivation, show the slow step's rate law, the equilibrium expression and the substitution."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. All species, mechanisms and data are hypothetical. Concentrations are in M (mol L⁻¹) and time in seconds. "Fast ⇌" means a fast, reversible step that stays at equilibrium.

## Question 1 (multiple choice · foundation)

A reaction 2P + Q → P₂Q is proposed to occur by this mechanism:

Step 1: 2P ⇌ P₂ (fast)
Step 2: P₂ + Q → P₂Q (slow)

Which rate law is consistent with the mechanism?

- (A) rate = k[P][Q]
- (B) rate = k[P₂][Q]
- (C) rate = k[P]²[Q]
- (D) rate = k[P]²

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The slow step gives rate = k₂[P₂][Q]. P₂ is an intermediate. From the fast equilibrium, k₁[P]² = k₋₁[P₂], so [P₂] = (k₁ / k₋₁)[P]². Substituting: rate = (k₂k₁ / k₋₁)[P]²[Q].

- (A) treats the reaction as if one P and one Q collide in a single step.
- (B) is the slow step's rate law with the intermediate left in. It cannot be tested, because [P₂] cannot be set.
- (D) is the rate law you would get if step 1 were slow. It leaves out Q, which enters the slow step.
</details>

## Question 2 (multiple choice · foundation)

In a mechanism, the first step G₂ + H ⇌ G₂H is fast and reversible, with forward rate constant k₁ and reverse rate constant k₋₁. Which expression gives [G₂H] under the pre-equilibrium approximation?

- (A) (k₁ / k₋₁)[G₂][H]
- (B) (k₋₁ / k₁)[G₂][H]
- (C) k₁[G₂][H]
- (D) (k₁ / k₋₁)([G₂] + [H])

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Forward rate = reverse rate: k₁[G₂][H] = k₋₁[G₂H]. Divide both sides by k₋₁.

- (B) flips the ratio. A larger forward constant must give **more** G₂H, but (B) would give less.
- (C) is the forward **rate**, in M s⁻¹, not a concentration.
- (D) adds the concentrations. The forward step is bimolecular, so its rate depends on their product.
</details>

## Question 3 (multiple choice · core)

For the reaction L₂ + V → L₂V, experiments give rate = k[L₂]^½[V]. Which mechanism is consistent with this rate law?

- (A) One step: L₂ + V → L₂V
- (B) L₂ ⇌ 2L (fast); L + V → LV (slow); LV + L → L₂V (fast)
- (C) L₂ ⇌ 2L (fast); 2L + V → L₂V (slow)
- (D) L₂ → 2L (slow); L + V → LV (fast); LV + L → L₂V (fast)

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The slow step gives rate = k₂[L][V]. From the fast equilibrium, k₁[L₂] = k₋₁[L]², so [L] = (K₁[L₂])^½. Then rate = k₂K₁^½[L₂]^½[V]. The steps also add up to L₂ + V → L₂V.

- (A) gives rate = k[L₂][V]: first order in L₂, not one half.
- (C) gives rate = k₂[L]²[V] = k₂K₁[L₂][V]. Both L atoms enter the slow step, so the square root cancels.
- (D) has a slow first step, so rate = k[L₂], with no V at all.

A half order is a strong hint that a molecule splits in a fast step and only **one** of the fragments enters the slow step.
</details>

## Question 4 (calculation · core)

A + B + C → products is proposed to go by:

Step 1: A + B ⇌ AB (fast); k₁ = 2.4 × 10⁶ M⁻¹ s⁻¹, k₋₁ = 8.0 × 10⁸ s⁻¹
Step 2: AB + C → products (slow); k₂ = 5.0 × 10² M⁻¹ s⁻¹

(a) Derive the rate law. (b) Calculate the overall rate constant, with units. (c) Calculate the rate when [A] = 0.20 M, [B] = 0.10 M and [C] = 0.050 M. (d) Calculate [AB] under these conditions.

<details>
<summary>Worked solution</summary>

**(a)** Slow step: rate = k₂[AB][C]. Fast equilibrium: k₁[A][B] = k₋₁[AB], so [AB] = (k₁ / k₋₁)[A][B]. Rate = (k₂k₁ / k₋₁)[A][B][C].

**(b)** K₁ = k₁ / k₋₁ = 2.4 × 10⁶ ÷ 8.0 × 10⁸ = 3.0 × 10⁻³ M⁻¹.
k = k₂K₁ = 5.0 × 10² × 3.0 × 10⁻³ = **1.5 M⁻² s⁻¹** (third order overall, so M⁻² s⁻¹).

**(c)** Rate = 1.5 × 0.20 × 0.10 × 0.050 = **1.5 × 10⁻³ M s⁻¹**.

**(d)** [AB] = 3.0 × 10⁻³ × 0.20 × 0.10 = **6.0 × 10⁻⁵ M**. The intermediate is tiny compared with the reactants, as expected.

Suggested mark points (4): 1 for the rate law with no intermediate; 1 for k = 1.5 with units M⁻² s⁻¹; 1 for the rate; 1 for [AB]. Allow (c) carried forward from a wrong k.

Common error: dividing the wrong way (k₋₁ / k₁) gives about 333 instead of 3.0 × 10⁻³ M⁻¹, and k ≈ 1.7 × 10⁵, which is far too large.
</details>

## Question 5 (constructed response · core)

For the reaction J + 2K → JK₂, a student measures initial rates:

| Experiment | [J] (M) | [K] (M) | Initial rate (M s⁻¹) |
|---|---|---|---|
| 1 | 0.050 | 0.10 | 3.0 × 10⁻⁶ |
| 2 | 0.10 | 0.10 | 6.0 × 10⁻⁶ |
| 3 | 0.10 | 0.20 | 2.4 × 10⁻⁵ |

Three mechanisms are proposed:

- **I:** J + K → JK (slow); JK + K → JK₂ (fast)
- **II:** J + K ⇌ JK (fast); JK + K → JK₂ (slow)
- **III:** 2K ⇌ K₂ (fast); K₂ + J → JK₂ (slow)

(a) Find the order with respect to each reactant. (b) Calculate the rate constant, with units. (c) Derive the rate law predicted by each mechanism. (d) State which mechanism(s) are consistent with the data, and whether the data can decide between them.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Experiments 1 → 2: [J] doubles, [K] constant, rate doubles, so **first order in J**. Experiments 2 → 3: [K] doubles, [J] constant, rate × 4, so **second order in K**. Rate = k[J][K]².

**(b)** From experiment 1: k = 3.0 × 10⁻⁶ ÷ (0.050 × 0.10²) = **6.0 × 10⁻³ M⁻² s⁻¹**. (Experiments 2 and 3 give the same value.)

**(c)**
- I: slow first step, so rate = k₁[J][K].
- II: rate = k₂[JK][K]; [JK] = (k₁ / k₋₁)[J][K]; rate = (k₂k₁ / k₋₁)[J][K]².
- III: rate = k₂[K₂][J]; [K₂] = (k₁ / k₋₁)[K]²; rate = (k₂k₁ / k₋₁)[J][K]².

**(d)** Mechanisms **II and III** are both consistent; I is not (it predicts first order in K). The rate data **cannot** decide between II and III, because both give rate = k[J][K]². Evidence for one specific intermediate (JK or K₂) would be needed to favour one of them.

| Point | What earns it |
|---|---|
| 1 | Both orders, each justified from a pair of experiments |
| 1 | k = 6.0 × 10⁻³ with units M⁻² s⁻¹ |
| 1 | Correct rate law for I (from the slow first step) |
| 1 | Correct derivation for II **or** III, with the intermediate substituted out |
| 1 | Correct derivation for the other pre-equilibrium mechanism |
| 1 | Identifies II and III as consistent **and** states that the data cannot distinguish them |

Do not award the last point for "II is correct" alone: a matching rate law shows consistency, not proof.
</details>

## Question 6 (constructed response · core)

A dissolved species Cat speeds up the reaction S + T → ST. The proposed mechanism is:

Step 1: S + Cat ⇌ SCat (fast)
Step 2: SCat + T → ST + Cat (slow)

(a) Identify the catalyst and the intermediate, with a reason for each. (b) Derive the rate law. (c) Predict the effect on the rate of doubling [Cat] while [S] and [T] stay the same. (d) Explain why Cat appears in the rate law but not in the overall equation.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** **Cat** is the catalyst: it is used in step 1 and given back in step 2. **SCat** is the intermediate: it is made in step 1 and used up in step 2.

**(b)** Slow step: rate = k₂[SCat][T]. Fast equilibrium: k₁[S][Cat] = k₋₁[SCat], so [SCat] = (k₁ / k₋₁)[S][Cat]. Rate = (k₂k₁ / k₋₁)[S][Cat][T].

**(c)** The rate is first order in Cat, so the rate **doubles**.

**(d)** Cat is not used up overall, so it cancels when the steps are added. But it takes part in the fast step that makes the intermediate. More Cat means more SCat, so more molecules can go through the slow step each second. Unlike an intermediate, the catalyst's concentration is something you set, so it is allowed in the rate law.

| Point | What earns it |
|---|---|
| 1 | Catalyst and intermediate both correct, with reasons |
| 1 | Rate law with SCat replaced |
| 1 | Rate doubles |
| 1 | Explains that Cat cancels overall but controls [SCat] in the fast step |
</details>

## Question 7 (explanation · stretch)

For the reaction 2X + 2Y → X₂Y₂, a student is given the mechanism X + Y ⇌ XY (fast), XY + Y → XY₂ (slow), XY₂ + X → X₂Y₂ (fast), and writes "rate = k[XY][Y], because the slow step sets the rate".

(a) Explain what is wrong with the student's answer and give the correct rate law. (b) Explain, in terms of what happens to XY particles, why it is reasonable to treat step 1 as being at equilibrium. (c) Explain why X does not appear a second time in the rate law, even though step 3 uses another X.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** The slow step's rate law is right for step 2, but XY is an intermediate. Its concentration cannot be set or easily measured, so the rate law must be rewritten in terms of reactants. Using k₁[X][Y] = k₋₁[XY]: rate = (k₂k₁ / k₋₁)[X][Y]².

**(b)** Step 1 is fast in both directions, while step 2 is slow. A newly made XY is far more likely to fall apart back to X + Y than to react with Y. So XY forms and breaks up many times before step 2 removes it, and step 2 hardly disturbs the balance between the forward and reverse rates of step 1.

**(c)** Step 3 comes after the slow step. However fast or slow it is, it cannot change how quickly XY₂ is produced by step 2, which is the bottleneck. Only species that take part up to and including the slow step appear in the rate law.

| Point | What earns it |
|---|---|
| 1 | Identifies XY as an intermediate that cannot appear in the final rate law |
| 1 | Correct rate law rate = k[X][Y]² with a substitution shown |
| 1 | Reverse of step 1 much faster than step 2, so step 1 stays balanced |
| 1 | Steps after the slow step do not affect the rate law |
</details>

## How did you do?

- **Q1, Q2 or Q4 wrong:** re-read "The algebra in three lines" and Worked example 1 in the [study guide](/advanced-course-resources/chemistry/5-9-pre-equilibrium-approximation-study-guide/).
- **Q3 wrong:** work through Worked example 2 again; half orders come from a split molecule.
- **Q5 or Q6 incomplete:** show the substitution every time, and say "consistent with", not "proves".
- **Q7 incomplete:** your explanation needs the particle-level reason, not only the algebra.

Then tick off the [topic checklist](/advanced-course-resources/chemistry/5-9-pre-equilibrium-approximation-checklist/).
