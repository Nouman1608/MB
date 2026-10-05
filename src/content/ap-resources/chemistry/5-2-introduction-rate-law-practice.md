---
resourceId: "mb-ap-chem-5.2-practice"
title: "Introduction to Rate Law: Practice Questions (Chemistry 5.2)"
description: "Seven original Marlbridge practice questions on rate laws: orders, rate constants and their units, rate changes and the method of initial rates, with worked solutions and suggested mark points."
course: "chemistry"
unit: 5
topics: ["5.2"]
resourceType: "practice-questions"
prerequisites:
  - "Writing a rate law and finding orders from initial rates"
prerequisiteResources: ["mb-ap-chem-5.2-study-guide"]
learningObjectives:
  - "Predict how the rate changes when concentrations change"
  - "Work out the units of k from the overall order"
  - "Determine a rate law and k from initial-rate data, including absorbance data"
  - "Evaluate claims about orders and the rate constant using evidence"
skills: ["5", "6"]
studyMinutes: 40
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Give rates and k to 2–3 significant figures with units. All rate data are invented for practice"
related: ["mb-ap-chem-5.2-study-guide", "mb-ap-chem-5.2-revision-notes", "mb-ap-chem-5.2-checklist"]
next: "mb-ap-chem-5.2-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Always state k with its units."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All rate data and rate constants are invented for practice. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. In every question, all the experiments in one table are at the same temperature.

## Question 1 (multiple choice · foundation)

A reaction has the rate law rate = k[A]²[B]. By what factor does the rate change if [A] is tripled and [B] is halved at the same time?

- (A) 1.5
- (B) 3.0
- (C) 4.5
- (D) 9.0

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Tripling [A] multiplies the rate by 3² = 9. Halving [B] multiplies it by ½. Together: 9 × ½ = 4.5.

- (A) treats A as first order (3 × ½).
- (B) ignores [B] and treats A as first order.
- (D) includes the effect of A but forgets that [B] was halved.
</details>

## Question 2 (multiple choice · foundation)

The rate law for a reaction is rate = k[X][Y]². What are the units of k when concentrations are in M and time is in seconds?

- (A) s⁻¹
- (B) M⁻¹ s⁻¹
- (C) M⁻² s⁻¹
- (D) M² s⁻¹

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The overall order is 1 + 2 = 3. k must turn M³ into M s⁻¹, so k has units M s⁻¹ ÷ M³ = M⁻² s⁻¹.

- (A) is for an overall first-order reaction.
- (B) is for an overall second-order reaction (it ignores the order in X).
- (D) gets the sign of the power wrong: (M² s⁻¹)(M³) = M⁵ s⁻¹, not M s⁻¹.
</details>

## Question 3 (multiple choice · core)

Which statement about the rate constant k for a reaction is correct?

- (A) k gets larger when the concentration of a reactant is increased.
- (B) k has the same value at every temperature.
- (C) At a fixed temperature, k has the same value whatever the starting concentrations.
- (D) k always has units of M s⁻¹, the same as the rate.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** k is a constant for a given reaction at a given temperature. Changing concentrations changes the rate, not k.

- (A) confuses k with the rate. The rate rises with concentration (for order above zero); k does not.
- (B) is false: k depends on temperature, and for almost all reactions it increases as temperature rises.
- (D) is true only for a zero-order reaction. The units of k depend on the overall order.
</details>

## Question 4 (calculation · core)

Hydrogen peroxide oxidises iodide ions in acid: H₂O₂(aq) + 2 I⁻(aq) + 2 H⁺(aq) → I₂(aq) + 2 H₂O(l). [H⁺] is the same in every experiment.

| Experiment | [H₂O₂] (M) | [I⁻] (M) | Initial rate (M s⁻¹) |
|---|---|---|---|
| 1 | 0.010 | 0.020 | 3.4 × 10⁻⁶ |
| 2 | 0.030 | 0.020 | 1.02 × 10⁻⁵ |
| 3 | 0.030 | 0.050 | 2.55 × 10⁻⁵ |

(a) Determine the order with respect to H₂O₂ and to I⁻.
(b) Write the rate law and calculate k with units.
(c) Calculate the initial rate when [H₂O₂] = 0.020 M and [I⁻] = 0.040 M.

<details>
<summary>Worked solution</summary>

**(a)** Experiments 1 → 2: [I⁻] fixed, [H₂O₂] × 3, rate × (1.02 × 10⁻⁵ ÷ 3.4 × 10⁻⁶) = × 3. So **first order in H₂O₂**.
Experiments 2 → 3: [H₂O₂] fixed, [I⁻] × 2.5, rate × (2.55 × 10⁻⁵ ÷ 1.02 × 10⁻⁵) = × 2.5. So **first order in I⁻**.

**(b)** rate = k[H₂O₂][I⁻]. From experiment 1: k = 3.4 × 10⁻⁶ ÷ (0.010 × 0.020) = **0.017 M⁻¹ s⁻¹**.

**(c)** rate = 0.017 × 0.020 × 0.040 = **1.4 × 10⁻⁵ M s⁻¹** (1.36 × 10⁻⁵ before rounding).

Suggested mark points (4): 1 for each order with the experiments compared; 1 for k with correct units; 1 for the rate in (c).

Common error: taking the coefficient 2 as the order in I⁻. That would predict a rate × 2.5² = 6.25 between experiments 2 and 3, but the data show × 2.5.
</details>

## Question 5 (calculation · core)

Nitrogen dioxide decomposes: 2 NO₂(g) → 2 NO(g) + O₂(g). At a certain temperature the rate law is rate = k[NO₂]² with k = 0.75 M⁻¹ s⁻¹, where "rate" is the rate of reaction, −½ Δ[NO₂]/Δt.

(a) Calculate the rate of reaction when [NO₂] = 0.0200 M.
(b) At that moment, how fast is NO₂ being used up?
(c) What [NO₂] gives a rate of reaction of 1.2 × 10⁻³ M s⁻¹?
(d) By what factor does the rate change if [NO₂] is halved?

<details>
<summary>Worked solution</summary>

**(a)** rate = 0.75 M⁻¹ s⁻¹ × (0.0200 M)² = **3.0 × 10⁻⁴ M s⁻¹**.

**(b)** −Δ[NO₂]/Δt = 2 × rate of reaction = **6.0 × 10⁻⁴ M s⁻¹**. (O₂ forms at 3.0 × 10⁻⁴ M s⁻¹, the same as the rate of reaction, because its coefficient is 1.)

**(c)** [NO₂]² = 1.2 × 10⁻³ ÷ 0.75 = 1.6 × 10⁻³ M², so [NO₂] = √(1.6 × 10⁻³) = **0.040 M**.

**(d)** (½)² = **¼**. The rate falls to a quarter.

Suggested mark points (4): one for each part. In (c), award the point only if the square root is taken.

Check for (c): the target rate is 4 times the rate in (a), so [NO₂] must be 2 times 0.0200 M. It is.
</details>

## Question 6 (constructed response · core)

A student studies the fading of a blue food dye by hypochlorite ions, OCl⁻, using a spectrophotometer with a 1.00 cm cell. The dye is the only coloured species. The initial rate is recorded as the rate at which absorbance falls.

| Experiment | [dye] (M) | [OCl⁻] (M) | Starting absorbance | Initial rate of absorbance decrease (s⁻¹) |
|---|---|---|---|---|
| 1 | 2.0 × 10⁻⁵ | 0.010 | 1.00 | 0.0030 |
| 2 | 3.0 × 10⁻⁵ | 0.010 | 1.50 | 0.0045 |
| 3 | 2.0 × 10⁻⁵ | 0.020 | 1.00 | 0.0060 |

(a) Explain why the rate of absorbance decrease can be used in place of the rate of decrease of [dye] when finding the orders.
(b) Determine the order with respect to the dye and to OCl⁻, and write the rate law.
(c) The product εb for the dye is 5.0 × 10⁴ M⁻¹. Convert the rate in experiment 1 to M s⁻¹ and calculate k with units.
(d) A student says: "In experiment 3 the rate doubled, so k doubled." Evaluate this claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** By the Beer–Lambert law, A = εbc. ε and b are the same in every experiment, so absorbance is directly proportional to [dye]. Any ratio of absorbance rates equals the same ratio of concentration rates.

**(b)** Experiments 1 → 2: [OCl⁻] fixed, [dye] × 1.5, rate × 1.5 (0.0045 ÷ 0.0030). **First order in dye.**
Experiments 1 → 3: [dye] fixed, [OCl⁻] × 2, rate × 2. **First order in OCl⁻.**
Rate law: **rate = k[dye][OCl⁻]**.

**(c)** Δ[dye]/Δt = (ΔA/Δt) ÷ εb = 0.0030 s⁻¹ ÷ 5.0 × 10⁴ M⁻¹ = **6.0 × 10⁻⁸ M s⁻¹**.
k = 6.0 × 10⁻⁸ ÷ (2.0 × 10⁻⁵ × 0.010) = **0.30 M⁻¹ s⁻¹**.

**(d)** The claim is **incorrect**. The rate doubled because [OCl⁻] doubled and the reaction is first order in OCl⁻. k is the same at a fixed temperature: experiment 3 gives (0.0060 ÷ 5.0 × 10⁴) ÷ (2.0 × 10⁻⁵ × 0.020) = 0.30 M⁻¹ s⁻¹, the same as experiment 1. Only a temperature change (or a catalyst) would change k.

| Point | What earns it |
|---|---|
| 1 | A ∝ [dye] because ε and b are constant (Beer–Lambert law) |
| 1 | Both orders with the experiments compared, and the rate law |
| 1 | Converts to 6.0 × 10⁻⁸ M s⁻¹ by dividing by εb |
| 1 | k = 0.30 M⁻¹ s⁻¹ with units |
| 1 | Rejects the claim: the rate change comes from [OCl⁻]; k is unchanged at constant temperature (supported by the same k from experiment 3) |
</details>

## Question 7 (constructed response · stretch)

For a reaction 2 A + B → C, a student claims the rate law must be rate = k[A]²[B] "because of the balanced equation". Invented initial-rate data:

| Experiment | [A] (M) | [B] (M) | Initial rate (M s⁻¹) |
|---|---|---|---|
| 1 | 0.10 | 0.10 | 4.0 × 10⁻⁴ |
| 2 | 0.20 | 0.10 | 8.0 × 10⁻⁴ |
| 3 | 0.30 | 0.20 | 4.8 × 10⁻³ |

(a) Determine the order with respect to A and with respect to B.
(b) Use the data to evaluate the student's claim.
(c) Write the correct rate law and calculate k with units.
(d) Which would raise the rate more: doubling [A] or doubling [B]? Justify.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Experiments 1 → 2: [B] fixed, [A] × 2, rate × 2. **First order in A.**
Experiments 1 → 3: [A] × 3 and [B] × 2; rate × (4.8 × 10⁻³ ÷ 4.0 × 10⁻⁴) = × 12. The A change accounts for × 3 (first order), so B accounts for 12 ÷ 3 = × 4. [B] doubled and the rate rose 4 times: **second order in B**.

**(b)** The claim is **incorrect**. If the rate law were k[A]²[B], doubling [A] in experiments 1 → 2 would multiply the rate by 4, but the data show × 2. Orders must come from experiment; they do not have to match the coefficients.

**(c)** rate = k[A][B]². k = 4.0 × 10⁻⁴ ÷ (0.10 × 0.10²) = **0.40 M⁻² s⁻¹**.

**(d)** Doubling [B] raises the rate more: × 2² = × 4, compared with × 2 for doubling [A].

| Point | What earns it |
|---|---|
| 1 | First order in A from experiments 1 and 2 |
| 1 | Second order in B, after removing the effect of A in experiment 3 |
| 1 | Rejects the claim using a specific data comparison |
| 1 | Correct rate law and k = 0.40 M⁻² s⁻¹ with units |
| 1 | Doubling [B] (× 4) beats doubling [A] (× 2), with the reason |
</details>

## How did you do?

- **Q1, Q5 or Q7(d) wrong:** revisit "What each order means" and Figure 1 in the [study guide](/advanced-course-resources/chemistry/5-2-introduction-rate-law-study-guide/).
- **Q2, Q3 or Q6(d) wrong:** re-read "The rate constant, k".
- **Q4, Q6(b) or Q7(a) wrong:** work through the method of initial rates and Worked example 2 again.

Then tick off the [topic checklist](/advanced-course-resources/chemistry/5-2-introduction-rate-law-checklist/).
