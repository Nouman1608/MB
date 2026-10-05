---
resourceId: "mb-ap-chem-5.11-practice"
title: "Catalysis: Practice Questions (Chemistry 5.11)"
description: "Seven original Marlbridge practice questions on catalysts in mechanisms, rate laws, energy profiles and enzyme, acid–base and surface catalysis, with worked solutions."
course: "chemistry"
unit: 5
topics: ["5.11"]
resourceType: "practice-questions"
prerequisites:
  - "Writing a rate law from a mechanism whose first step is slow"
  - "Reading activation energies and ΔH from an energy profile"
prerequisiteResources: ["mb-ap-chem-5.11-study-guide"]
learningObjectives:
  - "Identify catalysts and intermediates in a proposed mechanism"
  - "Use initial-rate data to show that a catalyst appears in the rate law"
  - "Calculate forward and reverse barriers for catalysed and uncatalysed paths"
  - "Justify a claim about a catalyst with particle-level reasoning"
skills: ["3", "5", "6"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Energies in kJ mol⁻¹; concentrations in M; rates in M s⁻¹. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-chem-5.11-study-guide", "mb-ap-chem-5.11-revision-notes", "mb-ap-chem-5.11-checklist"]
next: "mb-ap-chem-5.11-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working or explanations."
  - "For every claim about a catalyst, say what happens to the collisions."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Reactions and data are invented unless a real substance is named. Energies are in kJ mol⁻¹ and are measured from the reactants unless stated.

## Question 1 (multiple choice · foundation)

A small amount of a catalyst is added to a reaction mixture kept at constant temperature. Which statement describes how the catalyst increases the rate?

- (A) It lowers the enthalpy change, ΔH, so less energy is needed for the reaction.
- (B) It provides an alternative reaction path with a lower activation energy, so a larger fraction of collisions are effective.
- (C) It increases the average kinetic energy of the reactant particles, so they collide harder.
- (D) It reacts completely with one reactant, so it must be added in a stoichiometric amount.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** A catalyst changes the mechanism. The new path has a lower highest barrier, so at the same temperature more collisions have enough energy to react.

- (A) ΔH depends only on the energies of reactants and products, which a catalyst does not change.
- (C) At constant temperature the average kinetic energy is unchanged. A catalyst moves the energy threshold, not the energy distribution.
- (D) A catalyst is regenerated in a later step, so a small amount can convert a large amount of reactant.
</details>

## Question 2 (multiple choice · core)

The reaction X₂ + 2 Y → 2 XY is thought to follow this mechanism:

- Step 1: X₂ + M → X₂M
- Step 2: X₂M + Y → XY + XM
- Step 3: XM + Y → XY + M

Which statement is correct?

- (A) M is a catalyst; X₂M and XM are intermediates.
- (B) M is an intermediate; X₂M is a catalyst.
- (C) XM is a catalyst because it appears in two steps.
- (D) M is a reactant because it is on the left side of step 1.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** M is a reactant in step 1 and a product in step 3, so it is used up and regenerated: a catalyst. X₂M is made in step 1 and used in step 2; XM is made in step 2 and used in step 3. Both are intermediates. Adding the steps and cancelling X₂M, XM and M gives X₂ + 2 Y → 2 XY.

- (B) reverses the definitions: an intermediate is produced first and consumed later, which describes X₂M, not M.
- (C) Appearing in two steps is not the test. XM is produced before it is consumed, so it is an intermediate.
- (D) M is on the left in step 1 but is given back in step 3, so it cancels and is not a reactant overall.
</details>

## Question 3 (multiple choice · core)

An uncatalysed reaction has a forward activation energy of 120 kJ mol⁻¹ and ΔH = +30 kJ mol⁻¹. With a catalyst, the highest transition state on the path is 70 kJ mol⁻¹ above the reactants. What is the activation energy for the **reverse** reaction on the **catalysed** path?

- (A) 40 kJ mol⁻¹
- (B) 70 kJ mol⁻¹
- (C) 90 kJ mol⁻¹
- (D) 100 kJ mol⁻¹

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The products are 30 kJ mol⁻¹ above the reactants. The reverse reaction starts at the products and must reach the highest point, 70 kJ mol⁻¹ above the reactants: 70 − 30 = 40 kJ mol⁻¹.

- (B) is the forward barrier on the catalysed path.
- (C) is the reverse barrier on the uncatalysed path (120 − 30). The catalyst lowers this too.
- (D) adds ΔH instead of subtracting it. That would be right only if the products were 30 kJ mol⁻¹ *below* the reactants.
</details>

## Question 4 (calculation · core)

The reaction A + B → P is catalysed by a dissolved metal ion, Cat. Initial rates were measured at constant temperature.

| Experiment | [A] (M) | [B] (M) | [Cat] (M) | Initial rate (M s⁻¹) |
|---|---|---|---|---|
| 1 | 0.10 | 0.10 | 0.0020 | 3.0 × 10⁻⁵ |
| 2 | 0.20 | 0.10 | 0.0020 | 6.0 × 10⁻⁵ |
| 3 | 0.10 | 0.30 | 0.0020 | 3.0 × 10⁻⁵ |
| 4 | 0.10 | 0.10 | 0.0050 | 7.5 × 10⁻⁵ |

(a) Find the order with respect to A, B and Cat.
(b) Write the rate law and calculate k, with units.
(c) Propose a two-step mechanism consistent with the rate law, with Cat consumed in the slow step.
(d) Calculate the initial rate when [A] = 0.25 M, [B] = 0.20 M and [Cat] = 0.0040 M.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Experiments 1 → 2: [A] doubles, rate doubles: **first order in A**. Experiments 1 → 3: [B] triples, rate unchanged: **zero order in B**. Experiments 1 → 4: [Cat] × 2.5, rate × 2.5 (7.5 ÷ 3.0): **first order in Cat**.

**(b)** rate = k[A][Cat]. From experiment 1: k = 3.0 × 10⁻⁵ ÷ (0.10 × 0.0020) = **0.15 M⁻¹ s⁻¹**. (Every experiment gives the same value.)

**(c)** Step 1 (slow): A + Cat → ACat. Step 2 (fast): ACat + B → P + Cat. The steps add to A + B → P; the slow first step gives rate = k[A][Cat]; B enters only after the slow step, so it is not in the rate law.

**(d)** rate = 0.15 × 0.25 × 0.0040 = **1.5 × 10⁻⁴ M s⁻¹**.

| Point | What earns it |
|---|---|
| 1 | All three orders, each supported by a pair of experiments |
| 1 | Rate law rate = k[A][Cat] |
| 1 | k = 0.15 with units M⁻¹ s⁻¹ |
| 1 | Any valid mechanism: one A and one Cat in the slow first step, Cat regenerated later, B after the slow step, steps add up |
| 1 | 1.5 × 10⁻⁴ M s⁻¹ (carry forward an incorrect k from (b)) |
</details>

## Question 5 (constructed response · core)

A compound S reacts with water: S + H₂O → P + Q. The reaction is very slow in pure water but fast when acid is added. A proposed mechanism is:

- Step 1 (fast, reversible): S + H₃O⁺ ⇌ SH⁺ + H₂O
- Step 2 (slow): SH⁺ + H₂O → T⁺
- Step 3 (fast): T⁺ + H₂O → P + Q + H₃O⁺

(a) Identify the catalyst and every intermediate. Justify your choices.
(b) Explain, in terms of the particles, why adding acid increases the rate.
(c) The experimental rate law is rate = k[S][H₃O⁺], with k = 2.4 M⁻¹ s⁻¹. Calculate the rate when [S] = 0.050 M and [H₃O⁺] = 0.010 M, and again when [H₃O⁺] = 0.0010 M.
(d) A student says: "[H₃O⁺] should fall during the reaction, because H₃O⁺ is a reactant in step 1." Evaluate this claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** **Catalyst: H₃O⁺.** It is a reactant in step 1 and is regenerated in step 3. **Intermediates: SH⁺ and T⁺.** Each is produced in one step and consumed in a later step. (Adding the steps gives S + H₂O → P + Q.)

**(b)** In acid, S gains a proton to form SH⁺. This is a new intermediate that reacts with water by a new elementary step (step 2) with a lower activation energy than any step available to neutral S. More collisions with water are therefore effective, so the rate increases. More H₃O⁺ means more S is converted to SH⁺ at any moment.

**(c)** rate = 2.4 × 0.050 × 0.010 = **1.2 × 10⁻³ M s⁻¹**. With [H₃O⁺] = 0.0010 M: rate = 2.4 × 0.050 × 0.0010 = **1.2 × 10⁻⁴ M s⁻¹**, ten times slower.

**(d)** The claim is **incorrect**. H₃O⁺ is used in step 1 but made again in step 3, so it cancels from the overall equation. Its total concentration stays constant during the reaction (apart from the small amount tied up as SH⁺ and T⁺ at any moment).

| Point | What earns it |
|---|---|
| 1 | H₃O⁺ as catalyst, with "used in step 1, regenerated in step 3" |
| 1 | SH⁺ and T⁺ as intermediates, with "made, then used" |
| 1 | Protonation gives a new intermediate and a new path with a lower activation energy, so more effective collisions |
| 1 | Both rates correct (1.2 × 10⁻³ and 1.2 × 10⁻⁴ M s⁻¹) |
| 1 | Rejects the claim and links it to regeneration in step 3 |
</details>

## Question 6 (constructed response · core)

Ethene reacts with hydrogen to form ethane, C₂H₄ + H₂ → C₂H₆. The reaction is extremely slow as a gas mixture but fast over finely divided nickel metal.

(a) Describe, in terms of bonds and surface-bound species, how the nickel surface provides a new reaction path.
(b) Name one new intermediate that is present on the catalysed path but not on the uncatalysed path.
(c) Two reaction vessels each hold 1.0 g of nickel: one as a fine powder, one as a single small cube. Predict which gives the faster reaction and justify your prediction at the particle level.
(d) A student says: "Nickel is a reactant, because nickel atoms form bonds to hydrogen." Explain why nickel is classed as a catalyst instead.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** H₂ molecules bind to nickel atoms on the surface, and the H–H bond breaks, leaving H atoms bonded to the surface. Ethene also binds to the surface. Surface H atoms then add to the ethene carbons in separate, low-barrier elementary steps, and ethane leaves. No high-barrier H₂–C₂H₄ collision is needed.

**(b)** Any one: H atoms bonded to the nickel surface; ethene bound to the surface; a surface-bound C₂H₅ group (ethene after one H has been added).

**(c)** The **powder** reacts faster. Only nickel atoms on the surface can bind reactants. The powder exposes far more surface atoms for the same mass, so more molecules bind and react at once.

**(d)** Nickel bonds to H and ethene, but these bonds break when ethane leaves. The nickel is regenerated unchanged and binds more reactant, so it is not in the overall equation: it is a catalyst.

| Point | What earns it |
|---|---|
| 1 | H₂ (or ethene) bonds to the surface, weakening or breaking the H–H bond |
| 1 | H atoms added in new elementary steps with lower barriers |
| 1 | A correct surface-bound intermediate |
| 1 | Powder faster, because more surface atoms (sites) per gram |
| 1 | Nickel regenerated / unchanged at the end, so not consumed overall |
</details>

## Question 7 (explanation · stretch)

An enzyme, E, catalyses the conversion of a substrate into a product in a cell. Without the enzyme the activation energy is 84 kJ mol⁻¹. With the enzyme, the substrate first binds to the active site to form an enzyme–substrate complex, and the highest barrier on the path is 50 kJ mol⁻¹. The temperature is the same in both cases.

(a) A student claims: "The enzyme speeds up the reaction by giving the substrate molecules more kinetic energy." Evaluate this claim.
(b) Give two separate particle-level reasons why binding to the enzyme increases the rate.
(c) Describe how the energy profile of the enzyme-catalysed path differs from the uncatalysed profile. Include the barrier values and what stays the same.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** The claim is **incorrect**. At the same temperature the substrate molecules have the same spread of kinetic energies. The enzyme lowers the barrier from 84 to 50 kJ mol⁻¹ (a drop of 34 kJ mol⁻¹), so a much larger fraction of collisions has enough energy.

**(b)**
- **Orientation:** the active site holds the substrate in place, so reacting groups meet in the right orientation and more encounters are effective.
- **Lower activation energy:** binding forms a new intermediate (the enzyme–substrate complex) and a new path whose elementary steps have lower barriers, for example because bonds in the bound substrate are strained or weakened.

**(c)** The catalysed profile has at least two humps with a dip between them for the enzyme–substrate complex (a new intermediate). Its highest point is 50 kJ mol⁻¹ above the reactants, compared with a single hump at 84 kJ mol⁻¹. Reactants and products are at the same energies on both, so ΔH is unchanged; the reverse barrier also drops by 34 kJ mol⁻¹.

| Point | What earns it |
|---|---|
| 1 | Rejects the claim: same temperature, same energy distribution |
| 1 | Lower barrier means a larger fraction of collisions have enough energy |
| 1 | Orientation reason linked to binding in the active site |
| 1 | New intermediate (enzyme–substrate complex) and new elementary steps |
| 1 | Profile: extra hump and dip, highest point 50 vs 84, reactant and product energies (ΔH) unchanged |
</details>

## How did you do?

- **Q1 or Q7(a) wrong:** re-read "Why a lower barrier means a faster reaction" and Figure 2 in the [study guide](/advanced-course-resources/chemistry/5-11-catalysis-study-guide/).
- **Q2 or Q5(a) wrong:** catalyst in first; intermediate out first.
- **Q3 wrong:** redo Worked example 2; measure every barrier from where that direction starts.
- **Q4 wrong:** redo Worked example 1.
- **Q5(b), Q6 or Q7 incomplete:** say *how*: new intermediate, new step, lower barrier or better orientation.

Then tick off the [topic checklist](/advanced-course-resources/chemistry/5-11-catalysis-checklist/).
