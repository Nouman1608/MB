---
resourceId: "mb-ap-chem-5.8-practice"
title: "Reaction Mechanism and Rate Law: Practice Questions (Chemistry 5.8)"
description: "Seven original Marlbridge practice questions on writing rate laws from mechanisms with a slow first step and testing mechanisms against rate data, with worked solutions."
course: "chemistry"
unit: 5
topics: ["5.8"]
resourceType: "practice-questions"
prerequisites:
  - "Writing a rate law for an elementary step"
  - "Finding reaction orders from initial-rate data"
prerequisiteResources: ["mb-ap-chem-5.8-study-guide"]
learningObjectives:
  - "Write the rate law predicted by a mechanism whose first step is slow"
  - "Predict how the rate changes when concentrations change, and give the units of k"
  - "Use an experimental rate law to accept or reject proposed mechanisms"
  - "Explain why kinetic evidence cannot prove a mechanism"
skills: ["5", "6"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Concentrations in M (mol L⁻¹), rates in M s⁻¹; all species and data are fictional"
related: ["mb-ap-chem-5.8-study-guide", "mb-ap-chem-5.8-revision-notes", "mb-ap-chem-5.8-checklist"]
next: "mb-ap-chem-5.8-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Find the slow step first, then write its rate law from its coefficients."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. All species and data are fictional. Concentrations are in M (mol L⁻¹) and rates in M s⁻¹. In every mechanism, steps are labelled slow or fast.

## Question 1 (multiple choice · foundation)

The fictional reaction W₂ + 2Q → 2WQ is proposed to occur by this mechanism:

Step 1 (slow): W₂ → 2W
Step 2 (fast): W + Q → WQ

What rate law does this mechanism predict?

- (A) rate = k[W₂][Q]²
- (B) rate = k[W₂]
- (C) rate = k[W][Q]
- (D) rate = k[W₂][Q]

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Step 1 is the slow first step, and it is unimolecular in W₂, so rate = k[W₂]. (Step 2 happens twice for each step 1, which is how the steps add up to W₂ + 2Q → 2WQ.)

- (A) is written from the overall equation's coefficients, which do not describe a collision.
- (C) is the rate law of the fast step and contains the intermediate W.
- (D) wrongly includes Q, which reacts only after the slow step, so the reaction is zero order in Q.
</details>

## Question 2 (multiple choice · core)

A fictional reaction A + B + C → ABC has this mechanism:

Step 1 (slow): A + B → AB
Step 2 (fast): AB + C → ABC

If [A] is doubled and [C] is tripled at the same time, by what factor does the initial rate change?

- (A) 1
- (B) 2
- (C) 6
- (D) 18

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The slow first step gives rate = k[A][B]. Doubling [A] doubles the rate. C reacts only in the fast step, so it is zero order: tripling [C] has no effect. Total factor: 2 × 1 = 2.

- (A) ignores the change in [A].
- (C) treats the reaction as first order in C (2 × 3).
- (D) treats it as second order in C (2 × 3²).
</details>

## Question 3 (multiple choice · core)

For the fictional reaction R + 2S → RS₂, experiments give rate = k[R][S]. Which proposed mechanism is consistent with both the overall equation and the rate law?

- (A) Step 1 (slow): S + S → S₂. Step 2 (fast): S₂ + R → RS₂.
- (B) Step 1 (slow): R + S → RS. Step 2 (fast): RS + S → RS₂.
- (C) One step: R + 2S → RS₂.
- (D) Step 1 (slow): R + S → RS. Step 2 (fast): RS + R → R₂S.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The steps add to R + 2S → RS₂ (RS cancels), and the slow first step R + S gives rate = k[R][S], which matches.

- (A) adds up correctly but predicts rate = k[S]², which has the wrong orders.
- (C) adds up but, as an elementary step, predicts rate = k[R][S]². It is also termolecular, so unlikely.
- (D) predicts the right rate law, but the steps add up to 2R + S → R₂S, a different reaction. A mechanism must pass both tests.
</details>

## Question 4 (calculation · core)

A fictional compound RO₂ decomposes when a small amount of Z is added. The proposed mechanism is:

Step 1 (slow): Z + RO₂ → ZO + RO
Step 2 (fast): ZO + RO₂ → Z + RO + O₂

(a) Write the overall equation and identify the catalyst and the intermediate.
(b) Write the rate law predicted by the mechanism, and give the units of k.
(c) k = 2.5 M⁻¹ s⁻¹. Calculate the rate when [Z] = 1.0 × 10⁻³ M and [RO₂] = 0.40 M.
(d) A student says: "Z cannot affect the rate because it is not in the overall equation." Use your answers to evaluate this claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Add: Z + RO₂ + ZO + RO₂ → ZO + RO + Z + RO + O₂. Cancel Z and ZO: **2RO₂ → 2RO + O₂**. Z is the **catalyst** (used in step 1, given back in step 2). ZO is the **intermediate** (made in step 1, used in step 2).

**(b)** Slow first step: Z + RO₂, so **rate = k[Z][RO₂]**. Second order overall, so k has units **M⁻¹ s⁻¹**.

**(c)** Rate = 2.5 M⁻¹ s⁻¹ × (1.0 × 10⁻³ M) × 0.40 M = **1.0 × 10⁻³ M s⁻¹**.

**(d)** The claim is **incorrect**. Z is a reactant in the slow step, so [Z] appears in the rate law: doubling [Z] would double the rate (to 2.0 × 10⁻³ M s⁻¹ under the conditions in (c)). A catalyst is not used up overall, but it can still control the rate.

| Point | What earns it |
|---|---|
| 1 | Correct overall equation |
| 1 | Z identified as catalyst and ZO as intermediate |
| 1 | rate = k[Z][RO₂], from the slow step |
| 1 | Units M⁻¹ s⁻¹ |
| 1 | 1.0 × 10⁻³ M s⁻¹ |
| 1 | Claim rejected **because** Z is in the slow step (so in the rate law) |

Allow (c) carried forward from an incorrect rate law in (b).
</details>

## Question 5 (constructed response · core)

Initial-rate data for the fictional reaction 2U + V → U₂V at constant temperature:

| Experiment | [U] (M) | [V] (M) | Initial rate (M s⁻¹) |
|---|---|---|---|
| 1 | 0.10 | 0.10 | 2.0 × 10⁻⁴ |
| 2 | 0.20 | 0.10 | 4.0 × 10⁻⁴ |
| 3 | 0.10 | 0.30 | 6.0 × 10⁻⁴ |

(a) Determine the rate law and the value of k, with units.
(b) Two mechanisms are proposed. Mechanism A: Step 1 (slow): U + V → UV; Step 2 (fast): UV + U → U₂V. Mechanism B: Step 1 (slow): U + U → U₂; Step 2 (fast): U₂ + V → U₂V. Decide which mechanism is consistent with your rate law, and explain.
(c) Use your rate law to predict the initial rate when [U] = 0.25 M and [V] = 0.20 M.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Experiments 1 → 2: [U] doubles, [V] constant, rate doubles (4.0 ÷ 2.0 = 2), so **first order in U**. Experiments 1 → 3: [V] triples, [U] constant, rate triples (6.0 ÷ 2.0 = 3), so **first order in V**. Rate = k[U][V].
k = 2.0 × 10⁻⁴ M s⁻¹ ÷ (0.10 M × 0.10 M) = **0.020 M⁻¹ s⁻¹** (experiments 2 and 3 give the same value).

**(b)** Both mechanisms add up to 2U + V → U₂V (UV and U₂ cancel). Mechanism A's slow first step predicts rate = k[U][V], which **matches**. Mechanism B's slow first step predicts rate = k[U]², which would make the rate × 4 in experiment 2 and unchanged in experiment 3; the data show × 2 and × 3, so **B is rejected**. Mechanism A is consistent (but not proven).

**(c)** Rate = 0.020 M⁻¹ s⁻¹ × 0.25 M × 0.20 M = **1.0 × 10⁻³ M s⁻¹**.

| Point | What earns it |
|---|---|
| 1 | First order in U, with the pair of experiments used |
| 1 | First order in V, with the pair of experiments used |
| 1 | k = 0.020 M⁻¹ s⁻¹ with correct units |
| 1 | Mechanism A accepted because its slow step predicts k[U][V] |
| 1 | Mechanism B rejected because it predicts k[U]², which the data contradict |
| 1 | 1.0 × 10⁻³ M s⁻¹ |
</details>

## Question 6 (constructed response · core)

The fictional reaction 2A₂B → 2A₂ + B₂ is proposed to occur by:

Step 1 (slow): A₂B → A₂ + B
Step 2 (fast): B + A₂B → A₂ + B₂

A student claims: "The reaction is second order in A₂B, because its coefficient in the balanced equation is 2."

(a) Show that the mechanism is consistent with the overall equation.
(b) Evaluate the student's claim.
(c) k = 4.0 × 10⁻³ s⁻¹. Calculate the rate when [A₂B] = 0.25 M, and the rate when [A₂B] is halved. State what the student's claim would have predicted for the halved concentration.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Add: A₂B + B + A₂B → A₂ + B + A₂ + B₂. Cancel B: **2A₂B → 2A₂ + B₂**.

**(b)** The claim is **incorrect**. The overall equation is not an elementary step, so its coefficient does not give the order. The slow first step is unimolecular in A₂B, so the mechanism predicts **rate = k[A₂B]: first order**. The second A₂B is used only in the fast step, after the bottleneck.

**(c)** Rate = 4.0 × 10⁻³ s⁻¹ × 0.25 M = **1.0 × 10⁻³ M s⁻¹**. Halving [A₂B] halves the rate: **5.0 × 10⁻⁴ M s⁻¹**. The student's second-order claim would predict the rate falling to one quarter, not one half. (The unit of k, s⁻¹, is itself a clue that the rate law is first order.)

| Point | What earns it |
|---|---|
| 1 | Correct sum with B cancelled |
| 1 | Claim rejected because overall coefficients do not set the order |
| 1 | Rate law k[A₂B] from the slow, unimolecular first step |
| 1 | 1.0 × 10⁻³ M s⁻¹ and 5.0 × 10⁻⁴ M s⁻¹ |
| 1 | States that a second-order law would predict one quarter of the rate |
</details>

## Question 7 (explanation · stretch)

For the fictional reaction CD + 2E → C + DE₂, the experimental rate law is rate = k[CD][E]. Two mechanisms are proposed.

Mechanism 1: Step 1 (slow): CD + E → C + DE. Step 2 (fast): DE + E → DE₂.
Mechanism 2: Step 1 (slow): CD + E → CDE. Step 2 (fast): CDE + E → C + DE₂.

(a) Show that both mechanisms are consistent with the overall equation and with the rate law.
(b) Explain why the rate law cannot be used to decide between them.
(c) Describe one piece of evidence that could support one mechanism over the other.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Mechanism 1: cancel DE → CD + 2E → C + DE₂. Mechanism 2: cancel CDE → CD + 2E → C + DE₂. In both, the slow first step is a collision of one CD with one E, so both predict **rate = k[CD][E]**, which matches.

**(b)** The rate law reflects only the particles that collide in the slow step (and anything before it). Both slow steps involve one CD and one E, so they give the same rate law. What happens in the fast steps afterwards, including which intermediate forms, has no effect on the rate law.

**(c)** Detecting an intermediate that only one mechanism predicts: finding **DE** in the reacting mixture would support mechanism 1; finding **CDE** would support mechanism 2. (Detection supports a mechanism; it does not prove it.)

| Point | What earns it |
|---|---|
| 1 | Both sums and both predicted rate laws shown |
| 1 | Same reacting particles in both slow steps, so the same rate law |
| 1 | Rate law gives no information about the steps after the slow step |
| 1 | Names the intermediate to look for (DE or CDE) and the mechanism each would support |
</details>

## How did you do?

- **Q1, Q2 or Q6 wrong:** re-read "Writing the rate law from a mechanism" in the [study guide](/advanced-course-resources/chemistry/5-8-reaction-mechanism-rate-law-study-guide/). Use the slow step, never the overall equation.
- **Q3 or Q5(b) wrong:** practise Worked example 2: a mechanism must add up **and** predict the rate law.
- **Q4 or Q5 calculations wrong:** check your units of k and the order of each reactant.
- **Q7 incomplete:** your answer needs the idea that the rate law says nothing about steps after the slow step.

Then tick off the [topic checklist](/advanced-course-resources/chemistry/5-8-reaction-mechanism-rate-law-checklist/).
