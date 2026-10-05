---
resourceId: "mb-ap-chem-7.10-practice"
title: "Reaction Quotient and Le Châtelier's Principle: Practice Questions (Chemistry 7.10)"
description: "Seven original Marlbridge practice questions on using Q and K to explain equilibrium shifts after concentration, volume, dilution and temperature changes, with suggested mark points."
course: "chemistry"
unit: 7
topics: ["7.10"]
resourceType: "practice-questions"
prerequisites:
  - "Writing Qc and Qp expressions"
  - "Le Châtelier's principle (Topic 7.9)"
prerequisiteResources: ["mb-ap-chem-7.10-study-guide"]
learningObjectives:
  - "Predict the direction of reaction by comparing Q with K"
  - "Calculate Q after a concentration, volume or dilution change"
  - "Explain why temperature changes K but the other stresses change Q"
  - "Find and check a new equilibrium mixture after a stress"
  - "Evaluate a claim about concentrations at a new equilibrium"
skills: ["5", "6"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "All K values are invented for practice; treat K and Q as unitless. Concentrations in M, partial pressures in atm"
related: ["mb-ap-chem-7.10-study-guide", "mb-ap-chem-7.10-revision-notes", "mb-ap-chem-7.10-checklist"]
next: "mb-ap-chem-7.10-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "Write the Q expression first, then substitute, then compare with K."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Every equilibrium constant below is an invented value for practice. Treat K and Q as unitless; concentrations are in M and partial pressures in atm.

## Question 1 (multiple choice · foundation)

At a certain temperature, a reaction mixture has Q = 3.2 × 10⁻³. The equilibrium constant at this temperature is K = 1.5 × 10⁻². Which statement is correct?

- (A) The net reaction goes forward, and the reactant concentrations decrease.
- (B) The net reaction goes in reverse, and the product concentrations decrease.
- (C) The mixture is at equilibrium, because Q and K are both much smaller than 1.
- (D) K decreases until it is equal to Q.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Q (0.0032) is smaller than K (0.015), so the mixture has too few products. The net reaction goes forward: reactants are used up and products form until Q rises to K.

- (B) is the result for Q > K.
- (C) confuses "small" with "equal". Equilibrium requires Q = K exactly.
- (D) gets the cause and effect backwards: at constant temperature K is fixed, and it is Q that changes.
</details>

## Question 2 (multiple choice · foundation)

For a gas-phase equilibrium, which change alters the **value of K**?

- (A) Adding more of one reactant at constant volume
- (B) Halving the volume of the container
- (C) Raising the temperature
- (D) Adding a catalyst

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** K depends on temperature. A temperature change alters K; the concentrations then adjust until Q matches the new K.

- (A) changes Q (it falls), not K.
- (B) changes Q by a factor that depends on the gas coefficients, but K is unchanged.
- (D) speeds up the forward and reverse reactions equally; neither Q nor K changes.
</details>

## Question 3 (multiple choice · core)

Silver ions form a complex with ammonia in water:

Ag⁺(aq) + 2NH₃(aq) ⇌ Ag(NH₃)₂⁺(aq)

An equilibrium mixture is diluted with water to exactly twice its volume. Just after dilution, before any reaction, what is Q, and which way does the system react?

- (A) Q = ½K; the net reaction goes forward
- (B) Q = 2K; the net reaction goes in reverse
- (C) Q = 4K; the net reaction goes in reverse
- (D) Q = ¼K; the net reaction goes forward

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Every concentration is halved. Q = [Ag(NH₃)₂⁺] / ([Ag⁺][NH₃]²), so

Q = (½) / ((½)(½)²) × K = (½) / (⅛) × K = 4K.

Q > K, so the complex partly breaks apart (reverse). Factor rule check: Δn = 1 − 3 = −2 and s = ½, so Q = (½)⁻² K = 4K.

- (A) halves only the complex concentration and leaves the reactant terms unchanged.
- (B) forgets to square the NH₃ term: (½) / ((½)(½)) = 2.
- (D) inverts the factor: it treats dilution as if it favoured the side with fewer particles.
</details>

## Question 4 (multiple choice · core)

For 2NO(g) + O₂(g) ⇌ 2NO₂(g), an equilibrium mixture is in a cylinder with a piston. At constant temperature, the volume is doubled. What is Qp just after the change, and which way does the system react?

- (A) Qp = ½Kp; the net reaction goes forward
- (B) Qp = 2Kp; the net reaction goes in reverse
- (C) Qp = Kp; there is no net reaction
- (D) Qp = 2Kp; the net reaction goes forward

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Doubling the volume halves every partial pressure:

Qp = (½)² / ((½)² × ½) × Kp = 2Kp.

Q > K, so the net reaction goes in reverse, towards the side with more gas molecules (3 on the left, 2 on the right), as Le Châtelier's principle predicts.

- (A) has the factor upside down.
- (C) would be true only if the numbers of gas molecules on each side were equal.
- (D) has the right Q but the wrong direction: Q > K means reverse.
</details>

## Question 5 (calculation · core)

For CH₄(g) + H₂O(g) ⇌ CO(g) + 3H₂(g), Kc = 0.26 at the temperature of a reactor. A sample of the reactor gas has [CH₄] = 0.20 M, [H₂O] = 0.30 M, [CO] = 0.15 M and [H₂] = 0.60 M.

(a) Calculate Qc.
(b) Is the mixture at equilibrium? If not, state the direction of the net reaction and which concentrations increase.

<details>
<summary>Worked solution</summary>

**(a)** Qc = [CO][H₂]³ / ([CH₄][H₂O])
= (0.15)(0.60)³ / ((0.20)(0.30))
= (0.15)(0.216) / 0.060
= 0.0324 / 0.060 = **0.54**.

**(b)** Qc = 0.54 > Kc = 0.26, so the mixture is **not** at equilibrium. It has too many products, so the net reaction goes **in reverse**. [CH₄] and [H₂O] increase; [CO] and [H₂] decrease.

Suggested mark points (3): 1 for a correct Qc expression with [H₂] cubed; 1 for Qc = 0.54; 1 for "reverse" with CH₄ and H₂O increasing, justified by Q > K.

Common error: forgetting the cube on [H₂] gives Qc = 1.5, which still exceeds K but is the wrong value.
</details>

## Question 6 (constructed response · stretch)

For the gas-phase reaction X₂(g) + Y₂(g) ⇌ 2XY(g), Kc = 64 at 400 K and Kc = 25 at 600 K. A rigid 1.00 L flask holds an equilibrium mixture at 400 K: [X₂] = [Y₂] = 0.050 M and [XY] = 0.40 M.

(a) Is the forward reaction exothermic or endothermic? Justify your answer.
(b) The flask is heated to 600 K. Explain why the mixture is no longer at equilibrium, and predict the direction of the net reaction.
(c) Calculate the concentrations of all three gases when the new equilibrium is reached at 600 K.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** K **decreases** as the temperature rises, so at the higher temperature the equilibrium mixture contains relatively less product. Heating favours the endothermic direction, which must therefore be the reverse. The forward reaction is **exothermic**.

**(b)** In a rigid flask, heating does not change the amounts or the volume, so the concentrations and Q stay the same at that instant: Q = (0.40)² / ((0.050)(0.050)) = 0.16 / 0.0025 = 64. But K at 600 K is 25. Now **Q = 64 > K = 25**, so the net reaction goes **in reverse**.

**(c)** Let z mol L⁻¹ of X₂ form. Then [X₂] = [Y₂] = 0.050 + z and [XY] = 0.40 − 2z.

(0.40 − 2z)² / (0.050 + z)² = 25. Both sides are perfect squares, so take square roots:

(0.40 − 2z) / (0.050 + z) = 5 → 0.40 − 2z = 0.25 + 5z → 7z = 0.15 → z = 0.0214.

New concentrations: [X₂] = [Y₂] = **0.071 M**; [XY] = **0.357 M**. Check: (0.3571)² / (0.07143)² = 25.0. ✓

| Point | What earns it |
|---|---|
| 1 | Exothermic, because K falls as temperature rises |
| 1 | Q unchanged at the instant of heating (concentrations unchanged) but K changes |
| 1 | Q = 64 > K = 25, so the net reaction is reverse |
| 1 | Correct setup with 2z for XY and square root taken |
| 1 | Correct final concentrations with a check that Q = 25 |

Accept answers rounded to 2 or 3 significant figures.
</details>

## Question 7 (constructed response · core)

For PCl₅(g) ⇌ PCl₃(g) + Cl₂(g), Kc = 0.040 at a fixed temperature. A 1.00 L flask holds an equilibrium mixture with [PCl₅] = 0.25 M, [PCl₃] = 0.10 M and [Cl₂] = 0.10 M. Then 0.10 mol of Cl₂ is added at constant temperature and volume.

(a) Calculate Qc just after the addition, and predict the direction of the net reaction.
(b) At the new equilibrium, [PCl₅] = 0.2825 M. Calculate [PCl₃] and [Cl₂], and show that the mixture is at equilibrium.
(c) A student claims: "After the system adjusts, [Cl₂] goes back to 0.10 M." Evaluate the claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** [Cl₂] becomes 0.20 M. Qc = (0.10)(0.20) / 0.25 = **0.080**. Q > K (0.080 > 0.040), so the net reaction goes **in reverse**.

**(b)** [PCl₅] rose by 0.2825 − 0.25 = 0.0325 M, so 0.0325 M of PCl₃ and of Cl₂ reacted.
[PCl₃] = 0.10 − 0.0325 = **0.0675 M**; [Cl₂] = 0.20 − 0.0325 = **0.1675 M**.
Check: Qc = (0.0675)(0.1675) / 0.2825 = 0.0400 = Kc. ✓

**(c)** The claim is **incorrect**. At the new equilibrium [Cl₂] = 0.1675 M, which is lower than the 0.20 M just after the addition but higher than the original 0.10 M. The system only partly uses up the added Cl₂. What returns to its old value is Q (equal to K = 0.040), not the individual concentrations.

| Point | What earns it |
|---|---|
| 1 | Qc = 0.080 with [Cl₂] = 0.20 M used |
| 1 | Reverse, because Q > K |
| 1 | Uses the 1 : 1 : 1 ratio to find [PCl₃] = 0.0675 M and [Cl₂] = 0.1675 M |
| 1 | Shows Qc = 0.040 at the new equilibrium |
| 1 | Rejects the claim, stating that [Cl₂] stays above 0.10 M and that only Q returns to K |
</details>

## How did you do?

- **Q1, Q2 or Q5 wrong:** re-read "Comparing Q with K" and the stress table in the [study guide](/advanced-course-resources/chemistry/7-10-reaction-quotient-le-ch-teliers-study-guide/).
- **Q3 or Q4 wrong:** practise the factor rule and remember to raise each term to its coefficient.
- **Q6 or Q7 incomplete:** say *what* changed (Q or K), compare them, and only then give the direction.

Then tick off the [topic checklist](/advanced-course-resources/chemistry/7-10-reaction-quotient-le-ch-teliers-checklist/).
