---
resourceId: "mb-ap-chem-5.5-practice"
title: "Collision Model: Practice Questions (Chemistry 5.5)"
description: "Seven original Marlbridge practice questions on successful collisions, orientation, collision frequency and Maxwell–Boltzmann curves, with full explanations and suggested mark points."
course: "chemistry"
unit: 5
topics: ["5.5"]
resourceType: "practice-questions"
prerequisites:
  - "Writing the rate law of an elementary step"
prerequisiteResources: ["mb-ap-chem-5.5-study-guide"]
learningObjectives:
  - "Identify the conditions for a successful collision and apply them to a given reaction"
  - "Predict how concentration and temperature change the collision frequency and the fraction of successful collisions"
  - "Interpret and sketch Maxwell–Boltzmann distributions at two temperatures"
  - "Build a particle-level argument that explains a measured change in rate"
skills: ["1", "5", "6"]
studyMinutes: 40
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Questions 5 and 6 use simple ratios only. Any exponential values you need are given in the question"
related: ["mb-ap-chem-5.5-study-guide", "mb-ap-chem-5.5-revision-notes", "mb-ap-chem-5.5-checklist"]
next: "mb-ap-chem-5.5-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written answers."
  - "In every explanation, say which of frequency, energy and orientation changes, and which do not."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. All rate data are invented for practice. Assume every reaction in this set is a single elementary step unless the question says otherwise.

## Question 1 (multiple choice · foundation)

In a sample of gas, reactant molecules collide with each other billions of times per second, yet the reaction takes several minutes. Which statement best explains this?

- (A) Most molecules in the sample never collide with a molecule of the other reactant.
- (B) Most collisions have too little energy, the wrong orientation, or both, so they do not lead to reaction.
- (C) The activation energy increases as the reaction proceeds, so later collisions fail.
- (D) Each successful collision produces only a very small mass of product.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** A collision succeeds only if it has at least the activation energy **and** a suitable orientation. In most reactions only a small fraction of collisions meet both conditions, so the reaction is far slower than the collision frequency suggests.

- (A) is false: in a mixed gas, every molecule meets molecules of the other reactant very often.
- (C) is false: Eₐ is a property of the reaction step and does not change as the reaction proceeds.
- (D) may be true of a single event, but it does not explain the problem. If every collision worked, the huge number of collisions would still finish the reaction almost at once.
</details>

## Question 2 (multiple choice · core)

For the elementary step P + Q → R, the concentration of P is tripled at constant temperature. Which row is correct?

| | Collisions between P and Q per second | Fraction of collisions that are successful |
|---|---|---|
| (A) | tripled | tripled |
| (B) | tripled | unchanged |
| (C) | unchanged | tripled |
| (D) | increased ninefold | unchanged |

- (A) Row (A)
- (B) Row (B)
- (C) Row (C)
- (D) Row (D)

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Three times as many P particles means each Q particle meets P three times as often, so the collision frequency triples. Temperature and particle shapes are unchanged, so the same fraction of collisions has enough energy and the right orientation. The rate triples.

- (A) wrongly links concentration to collision energy. Concentration does not change how hard particles hit.
- (C) mixes up the two effects.
- (D) squares the factor, as if P appeared twice in the step. The step has one P, so the step is first order in P.
</details>

## Question 3 (multiple choice · core)

Two Maxwell–Boltzmann curves are drawn for the same sample of gas at temperatures T₁ and T₂, where T₂ > T₁. Which statement is correct?

- (A) The T₂ curve has a higher peak than the T₁ curve, because more particles are moving fast.
- (B) The area under the T₂ curve is larger, because the particles have more energy.
- (C) The area under the T₂ curve to the right of Eₐ is larger, and the activation energy is the same.
- (D) The T₂ curve has a lower activation energy, so more collisions are successful.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** At the higher temperature the curve is flatter and shifted to higher energy, so more of its area lies beyond Eₐ. Eₐ itself is a property of the reaction and does not depend on temperature.

- (A) is wrong: the higher-temperature peak is **lower** (and further right), because the same number of particles is spread over a wider range of energies.
- (B) is wrong: the total area represents the total number of particles, which is unchanged.
- (D) is wrong: temperature does not change Eₐ.
</details>

## Question 4 (multiple choice · core)

The elementary step Cl + NOCl → Cl₂ + NO takes place in the gas phase. In NOCl, the nitrogen atom is bonded to both the oxygen atom and the chlorine atom. Which collision is most likely to lead to reaction, assuming it has enough energy?

- (A) The Cl atom strikes the chlorine atom of NOCl.
- (B) The Cl atom strikes the oxygen atom of NOCl.
- (C) The Cl atom strikes the nitrogen atom of NOCl from the side opposite the chlorine.
- (D) Any of these, because a single atom has no orientation.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The product Cl₂ needs a new Cl–Cl bond, while the N–Cl bond breaks. That can happen only if the incoming Cl atom meets the chlorine end of NOCl.

- (B) puts the Cl atom next to oxygen. No Cl–Cl bond can form there.
- (C) brings Cl to nitrogen, far from the chlorine it must bond to.
- (D) is a trap: the single Cl atom looks the same from every direction, but NOCl does not. Orientation depends on **both** particles.
</details>

## Question 5 (calculation · core)

The step X + Y → Z is elementary. At a fixed temperature, a student measures these initial rates (invented data).

| Trial | [X] (M) | [Y] (M) | Initial rate (M s⁻¹) |
|---|---|---|---|
| 1 | 0.020 | 0.010 | 4.0 × 10⁻⁶ |
| 2 | 0.060 | 0.010 | ? |
| 3 | 0.010 | 0.040 | ? |

(a) Write the rate law and calculate k, with units.
(b) Predict the initial rates in trials 2 and 3.
(c) Explain, in terms of collisions, why the rate in trial 2 differs from trial 1.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The step is elementary with one X and one Y, so **rate = k[X][Y]**.
k = 4.0 × 10⁻⁶ M s⁻¹ ÷ (0.020 M × 0.010 M) = **0.020 M⁻¹ s⁻¹**.

**(b)** Trial 2: [X] is tripled, [Y] unchanged, so rate = 3 × 4.0 × 10⁻⁶ = **1.2 × 10⁻⁵ M s⁻¹** (or 0.020 × 0.060 × 0.010).
Trial 3: [X] is halved and [Y] is quadrupled, so rate = ½ × 4 × 4.0 × 10⁻⁶ = **8.0 × 10⁻⁶ M s⁻¹**.

**(c)** In trial 2 there are three times as many X particles in the same volume, so X–Y collisions happen three times as often. The temperature is the same, so the same fraction of collisions has at least Eₐ and a suitable orientation. Three times as many successful collisions per second gives three times the rate.

| Point | What earns it |
|---|---|
| 1 | Rate law k[X][Y] **and** k = 0.020 M⁻¹ s⁻¹ with correct units |
| 1 | Both rates in (b) correct |
| 1 | Links the higher [X] to a higher collision frequency |
| 1 | States that the fraction of successful collisions is unchanged because temperature is unchanged |

Accept an answer to (b) carried forward from an incorrect k. Do not award the last point for "more collisions" alone.
</details>

## Question 6 (constructed response · core)

A student warms an elementary gas-phase reaction from 290 K to 310 K at constant concentrations. The rate increases by a factor of about 4. Data from a standard model (given, not to be calculated): the fraction of collisions with energy ≥ Eₐ rises by a factor of 3.8, and the collision frequency rises by 3.4%.

(a) Sketch, on one set of axes, Maxwell–Boltzmann curves for the gas at 290 K and at 310 K. Label the axes and both curves, and mark Eₐ.
(b) Use your sketch to explain why the rate increases.
(c) The student says: "The rate goes up because the molecules collide more often when they are hotter." Evaluate this claim using the data.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Axes: number of particles (y) against kinetic energy (x). Both curves start at the origin. The 310 K curve has a **lower peak, further right**, and a **thicker tail**. Eₐ is marked well into the tail, beyond both peaks. The two curves should look as if they enclose about the same area.

**(b)** At 310 K a larger area lies to the right of Eₐ, so a larger fraction of particles, and so of collisions, have at least the activation energy. Orientation is unaffected. More of the collisions succeed, so the rate increases.

**(c)** The claim is **partly true but misses the main cause**. Hotter molecules do collide more often, but only 3.4% more often. That alone would raise the rate by about 3%, not fourfold. The main cause is the 3.8-fold rise in the fraction of collisions with energy ≥ Eₐ. Together, 3.8 × 1.034 ≈ 3.9, which matches the observed factor of about 4.

| Point | What earns it |
|---|---|
| 1 | Sketch: labelled axes, and the 310 K curve with a lower peak shifted to higher energy |
| 1 | Eₐ marked in the tail, with a larger area beyond Eₐ for 310 K |
| 1 | (b) Links the larger area beyond Eₐ to a larger fraction of successful collisions |
| 1 | (c) Uses the data to show collision frequency is a minor effect and the energy fraction is the main one |

Do not award the first point if the 310 K peak is drawn taller than the 290 K peak.
</details>

## Question 7 (explanation · stretch)

Two elementary gas-phase steps, I and II, are studied at the same temperature and with the same reactant concentrations. Collision frequencies are about the same for both. Step I has the smaller activation energy, yet step II is faster.

(a) Explain how both facts can be true, using the collision model.
(b) Suggest a feature of the reacting particles in step I that could cause this.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Rate depends on the number of collisions per second **that have both enough energy and a suitable orientation**. Step I has the smaller Eₐ, so a larger fraction of its collisions are energetic enough. But if its orientation requirement is much stricter, only a tiny share of those energetic collisions are lined up correctly. Step II can then have more successful collisions per second overall, even though fewer of its collisions reach its higher Eₐ.

**(b)** The reacting particles in step I are large or have an awkward shape, so the reactive atoms are reached only from a narrow range of directions; collisions on any other part of the molecule cannot form the new bond. (Small, round particles, such as single atoms reacting with each other, would have almost no orientation limit.)

| Point | What earns it |
|---|---|
| 1 | States that a successful collision needs **both** enough energy and correct orientation |
| 1 | Explains that a stricter orientation requirement in step I can outweigh its larger energy fraction |
| 1 | A reasonable particle feature: large or unsymmetrical molecules with a small reactive site |
</details>

## How did you do?

- **Q1, Q4 or Q7 wrong:** re-read "What makes a collision successful" and Figure 1 in the [study guide](/advanced-course-resources/chemistry/5-5-collision-model-study-guide/).
- **Q2 or Q5 wrong:** revisit Worked example 1. Concentration changes collision frequency, not the fraction that succeed.
- **Q3 or Q6 wrong:** compare your sketch with Figure 2 and read "How temperature changes the curve".

Then tick off the [topic checklist](/advanced-course-resources/chemistry/5-5-collision-model-checklist/).
