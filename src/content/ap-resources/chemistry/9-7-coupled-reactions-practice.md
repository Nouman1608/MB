---
resourceId: "mb-ap-chem-9.7-practice"
title: "Coupled Reactions: Practice Questions (Chemistry 9.7)"
description: "Seven original Marlbridge practice questions on driving unfavourable processes with outside energy or coupled reactions, with worked solutions and suggested mark points."
course: "chemistry"
unit: 9
topics: ["9.7"]
resourceType: "practice-questions"
prerequisites:
  - "Using the sign of ΔG° to judge thermodynamic favourability"
prerequisiteResources: ["mb-ap-chem-9.7-study-guide"]
learningObjectives:
  - "Add coupled reactions and their ΔG° values, reversing or scaling equations where needed"
  - "Identify common intermediates and outside energy sources"
  - "Combine equilibrium constants of coupled steps"
  - "Justify whether a proposed coupling will work"
skills: ["4", "5", "6"]
studyMinutes: 40
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "R = 8.314 J mol⁻¹ K⁻¹; ΔG° for ATP + H₂O → ADP + Pᵢ = −30.5 kJ mol⁻¹. Other reaction data in these questions are invented."
related: ["mb-ap-chem-9.7-study-guide", "mb-ap-chem-9.7-revision-notes", "mb-ap-chem-9.7-checklist"]
next: "mb-ap-chem-9.7-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working or reasoning."
  - "Write the overall equation before you add ΔG° values."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Data for every question: R = 8.314 J mol⁻¹ K⁻¹; for ATP + H₂O → ADP + Pᵢ, ΔG° = −30.5 kJ mol⁻¹. All other reactions and values are invented for practice.

## Question 1 (multiple choice · foundation)

An unfavourable reaction is coupled to a favourable reaction, and the overall process is thermodynamically favourable. Which statement is correct?

- (A) The coupling lowers the activation energy of the unfavourable reaction, so it becomes favourable.
- (B) The ΔG° of the unfavourable step becomes negative once it is coupled.
- (C) The two reactions share a common intermediate, and the sum of their ΔG° values is negative.
- (D) The favourable reaction can take place in a separate container, as long as both containers are at the same temperature.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Coupled reactions are linked by a species made in one step and used in the other. Adding the equations cancels that intermediate, and adding the ΔG° values gives the overall ΔG°, which must be negative.

- (A) describes a catalyst. Lowering the activation energy changes the rate, not ΔG°.
- (B) is wrong because each step keeps its own ΔG°. Only the overall reaction has a negative ΔG°.
- (D) misses the link. Reactions in separate containers share no intermediate, so the favourable one simply releases its energy as heat.
</details>

## Question 2 (multiple choice · core)

Use the two reactions below.

- Reaction I: A + B → C  ΔG° = +27.4 kJ mol⁻¹
- Reaction II: B + E → D  ΔG° = +41.9 kJ mol⁻¹

What is ΔG° for the overall reaction A + D → C + E?

- (A) +69.3 kJ mol⁻¹
- (B) +14.5 kJ mol⁻¹
- (C) −14.5 kJ mol⁻¹
- (D) −69.3 kJ mol⁻¹

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** D is a reactant in the target, so reverse Reaction II: D → B + E, ΔG° = −41.9 kJ mol⁻¹. Now add it to Reaction I. B is made in the reversed Reaction II and used in Reaction I, so it is the common intermediate and cancels:

A + D → C + E  ΔG° = +27.4 + (−41.9) = −14.5 kJ mol⁻¹.

- (A) adds the two values without reversing Reaction II.
- (B) reverses Reaction I instead of Reaction II, giving the reverse of the target reaction.
- (D) reverses both reactions. Reaction I is needed in its original direction, because A and C appear on the same sides as in the target.
</details>

## Question 3 (multiple choice · core)

Which process is a thermodynamically unfavourable change that happens because an outside source supplies energy to it?

- (A) Iron rusting slowly in damp air
- (B) A battery discharging while it powers a torch
- (C) Plugging in a rechargeable battery so that it recharges
- (D) A gas stove flame that keeps burning after it has been lit with a spark

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Discharging a battery is favourable. Recharging forces the reverse reaction, which is unfavourable, and the electrical energy from the charger drives it.

- (A) Rusting is favourable; it is slow, but it does not need an energy supply.
- (B) Discharging is the favourable direction; the battery *gives out* electrical energy.
- (D) The spark only supplies the activation energy to start a favourable reaction. Once lit, the combustion continues by itself.
</details>

## Question 4 (calculation · core)

A cell must carry out a reaction with ΔG° = +52.0 kJ mol⁻¹. It couples the reaction to the hydrolysis of ATP.

(a) Show that one ATP per reaction event is not enough.
(b) Find the smallest whole number of ATP that makes the overall process favourable, and the overall ΔG°.
(c) Calculate K for the overall coupled process at 310 K.

<details>
<summary>Worked solution</summary>

**(a)** +52.0 + (−30.5) = **+21.5 kJ mol⁻¹**. Still positive, so not favourable.

**(b)** With 2 ATP: +52.0 + 2(−30.5) = **−9.0 kJ mol⁻¹**. So **2 ATP** is the minimum.

**(c)** K = e^(−ΔG°/RT) = e^(9000 J mol⁻¹ / (8.314 J mol⁻¹ K⁻¹ × 310 K)) = e^(3.49) = **33**.

Suggested mark points (3): 1 for showing that one ATP leaves ΔG° positive; 1 for 2 ATP with ΔG° = −9.0 kJ mol⁻¹; 1 for K ≈ 33 with ΔG° converted to J mol⁻¹.

Common error: using −9.0 kJ (not J) in the exponent gives K ≈ 1.0, which would mean neither side is favoured.
</details>

## Question 5 (calculation · core)

Two reactions are coupled through a common intermediate. At 298 K, the unfavourable step has K₁ = 3.2 × 10⁻⁴ and the favourable step has K₂ = 5.0 × 10⁶.

(a) Calculate K for the overall reaction.
(b) Calculate ΔG° for the overall reaction at 298 K, in kJ mol⁻¹.
(c) Check your answer to (b) by finding ΔG°₁ and ΔG°₂ separately.

<details>
<summary>Worked solution</summary>

**(a)** K(overall) = K₁ × K₂ = 3.2 × 10⁻⁴ × 5.0 × 10⁶ = **1.6 × 10³**.

**(b)** ΔG° = −RT ln K = −(8.314 × 298) × ln(1600) = −18 280 J mol⁻¹ = **−18.3 kJ mol⁻¹**.

**(c)** ΔG°₁ = −(8.314 × 298) ln(3.2 × 10⁻⁴) = +19.9 kJ mol⁻¹; ΔG°₂ = −(8.314 × 298) ln(5.0 × 10⁶) = −38.2 kJ mol⁻¹. Sum = **−18.3 kJ mol⁻¹**, which agrees with (b).

Suggested mark points (3): 1 for multiplying (not adding) the K values; 1 for ΔG° = −18.3 kJ mol⁻¹ with correct sign; 1 for a consistent check in (c).

Common error: adding the K values gives about 5.0 × 10⁶, which is just K₂ and ignores the unfavourable step.
</details>

## Question 6 (constructed response · stretch)

*All values are invented and apply at the furnace temperature, 1200 K.*

A fictional metal M is extracted from its oxide, MO. Decomposing the oxide alone is unfavourable:

(1) MO(s) → M(s) + ½O₂(g)  ΔG° = +245 kJ mol⁻¹

A plant manager plans to add carbon:

(2) C(s) + ½O₂(g) → CO(g)  ΔG° = −218 kJ mol⁻¹

(a) Identify the common intermediate in reactions (1) and (2).
(b) Write the overall equation and calculate its ΔG°.
(c) The manager claims: "Adding carbon will always make the extraction favourable, because burning carbon releases energy." Evaluate this claim.
(d) An engineer suggests a different reducing agent, R: R(s) + ½O₂(g) → RO(s), ΔG° = −265 kJ mol⁻¹. Show whether this coupling works, and calculate K for the overall reaction at 1200 K.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** O₂(g): it is a product of reaction (1) and a reactant in reaction (2).

**(b)** MO(s) + C(s) → M(s) + CO(g); ΔG° = +245 + (−218) = **+27 kJ mol⁻¹**.

**(c)** The claim is **incorrect**. A favourable partner reaction only drives the unfavourable one if the overall ΔG° is negative. Here the carbon reaction releases less free energy (218 kJ mol⁻¹) than the oxide decomposition needs (245 kJ mol⁻¹), so the overall ΔG° is +27 kJ mol⁻¹ and the overall reaction is still unfavourable at 1200 K (K ≈ 0.07).

**(d)** MO(s) + R(s) → M(s) + RO(s); ΔG° = +245 + (−265) = **−20 kJ mol⁻¹**, so the coupling works.
K = e^(20 000 / (8.314 × 1200)) = e^(2.00) = **7.4**.

| Point | What earns it |
|---|---|
| 1 | O₂ identified as the common intermediate |
| 1 | Correct overall equation and ΔG° = +27 kJ mol⁻¹ |
| 1 | States the claim is wrong **and** links it to the overall ΔG° being positive (partner's −218 is smaller in size than +245) |
| 1 | ΔG° = −20 kJ mol⁻¹ for the R coupling, with the conclusion that it is favourable |
| 1 | K ≈ 7.4 with ΔG° in J mol⁻¹ and T = 1200 K |

Accept a carried-forward ΔG° in (d). Do not award the point in (c) for "the claim is wrong" without a reason based on the overall ΔG°.
</details>

## Question 7 (explanation · stretch)

A student wants to make an unfavourable reaction go. She sets up the reaction mixture in one flask and burns some methane in a burner on the bench beside it. Nothing happens in the flask.

(a) Explain why the burning methane does not drive the reaction in the flask, even though combustion has a large negative ΔG°.
(b) Describe two different ways she could supply the free energy the reaction needs. For each, give one real example.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** The combustion and the reaction in the flask are not coupled: they share no common intermediate, so there is no chemical link through which the free energy released by combustion can be passed to the reaction. The energy from combustion is simply released as heat to the surroundings. (Warming the flask only changes the temperature; it does not supply the free energy in a form that makes the reaction's products favoured.)

**(b)** Any two of:
- **Outside energy source, electrical:** an electrolytic cell or a charger supplies electrical energy, for example decomposing water into H₂ and O₂, or recharging a battery.
- **Outside energy source, light:** light energy drives the conversion of CO₂ and water to glucose in photosynthesis.
- **Coupling:** link the reaction to a favourable reaction through a common intermediate so that the overall ΔG° is negative, for example coupling to ATP hydrolysis in cells, or burning the sulfur released from a metal sulfide ore.

| Point | What earns it |
|---|---|
| 1 | No common intermediate / no chemical link between the two reactions |
| 1 | Energy from combustion is lost as heat rather than used by the reaction |
| 1 | First valid method with a real example |
| 1 | Second, different valid method with a real example |
</details>

## How did you do?

- **Q1 or Q7 wrong:** re-read "Coupled reactions and the common intermediate" in the [study guide](/advanced-course-resources/chemistry/9-7-coupled-reactions-study-guide/).
- **Q2 or Q6 wrong:** practise reversing equations so the intermediate cancels (Worked example 1).
- **Q4 or Q5 wrong:** review "What happens to K?" and Worked example 2; check you converted kJ to J.
- **Q3 wrong:** compare outside energy sources with activation energy in the study guide.

Then tick off the [topic checklist](/advanced-course-resources/chemistry/9-7-coupled-reactions-checklist/).
