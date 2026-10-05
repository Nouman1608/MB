---
resourceId: "mb-ap-chem-9.10-practice"
title: "Cell Potential Under Nonstandard Conditions: Practice Questions (Chemistry 9.10)"
description: "Seven original Marlbridge practice questions on how concentration changes affect cell potential, cells running down, concentration cells and qualitative Nernst reasoning, with mark points."
course: "chemistry"
unit: 9
topics: ["9.10"]
resourceType: "practice-questions"
prerequisites:
  - "Calculating E°cell from standard reduction potentials"
  - "Writing a reaction quotient Q"
prerequisiteResources: ["mb-ap-chem-9.10-study-guide"]
learningObjectives:
  - "Predict whether E is greater or less than E° by comparing Q with 1"
  - "Explain why a cell potential falls to zero as a cell reaches equilibrium"
  - "Identify the anode and the direction of electron flow in a concentration cell"
  - "Replace Le Châtelier-style arguments with reasoning about Q and distance from equilibrium"
  - "Use the Nernst equation to support, not replace, a qualitative argument"
skills: ["5", "6"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "R = 8.314 J mol⁻¹ K⁻¹, F = 96,485 C mol⁻¹, T = 298 K, so RT/F = 0.0257 V. Standard reduction potentials are listed at the top of the page"
related: ["mb-ap-chem-9.10-study-guide", "mb-ap-chem-9.10-revision-notes", "mb-ap-chem-9.10-checklist"]
next: "mb-ap-chem-9.10-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written reasoning."
  - "For every change, say what happens to Q, then whether the cell is closer to or further from equilibrium."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Data for every question: E = E° − (RT/nF) ln Q, with RT/F = 0.0257 V at 298 K, and these standard reduction potentials.

| Half-reaction | E° (V) |
|---|---|
| Ag⁺(aq) + e⁻ → Ag(s) | +0.80 |
| Cu²⁺(aq) + 2e⁻ → Cu(s) | +0.34 |
| Co²⁺(aq) + 2e⁻ → Co(s) | −0.28 |
| Fe²⁺(aq) + 2e⁻ → Fe(s) | −0.44 |
| Cr³⁺(aq) + 3e⁻ → Cr(s) | −0.74 |
| Zn²⁺(aq) + 2e⁻ → Zn(s) | −0.76 |

## Question 1 (multiple choice · foundation)

A galvanic cell is connected to a small motor and left running. Eventually the voltmeter reads 0.00 V. Which statement is correct at that moment?

- (A) The reaction quotient Q equals the equilibrium constant K.
- (B) The reaction quotient Q equals 1.
- (C) Every reactant in the cell has been completely used up.
- (D) The standard cell potential E° has fallen to zero.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The cell potential is the drive towards equilibrium. When E = 0 there is no drive left, so the cell is at equilibrium: Q = K.

- (B) Q = 1 is standard conditions, where E = E°, which is not zero for a working cell.
- (C) At equilibrium some of every species remains, even if K is very large. A "dead" cell is at equilibrium, not necessarily empty.
- (D) E° is fixed for the reaction at a given temperature; only E changes as the concentrations change.
</details>

## Question 2 (multiple choice · core)

A galvanic cell runs the reaction Zn(s) + 2Ag⁺(aq) → Zn²⁺(aq) + 2Ag(s), starting at standard conditions. Which change would make the cell potential **larger** than E°?

- (A) Dissolving solid Zn(NO₃)₂ in the zinc half-cell
- (B) Adding NaCl(aq) to the silver half-cell, which precipitates AgCl
- (C) Dissolving solid AgNO₃ in the silver half-cell
- (D) Replacing the zinc strip with a zinc strip twice as large

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Q = [Zn²⁺] ÷ [Ag⁺]². Adding AgNO₃ raises [Ag⁺], so Q falls below 1. The cell is further from equilibrium, so E > E° (here E° = 0.80 − (−0.76) = 1.56 V).

- (A) raises [Zn²⁺], the product ion, so Q rises above 1 and E falls below E°.
- (B) removes Ag⁺ as solid AgCl, so [Ag⁺] falls, Q rises and E falls.
- (D) A solid is not in Q, and electrode size does not change the potential (it only changes how long the cell can run).
</details>

## Question 3 (multiple choice · core)

A concentration cell has a copper strip in 0.010 M Cu(NO₃)₂ and a copper strip in 1.0 M Cu(NO₃)₂, joined by a wire and a salt bridge. Which statement is correct?

- (A) The cell potential is zero, because E° = 0 for a concentration cell.
- (B) Electrons flow through the wire from the strip in 0.010 M Cu²⁺ to the strip in 1.0 M Cu²⁺.
- (C) Electrons flow through the wire from the strip in 1.0 M Cu²⁺ to the strip in 0.010 M Cu²⁺.
- (D) The cell potential increases as the cell runs, because the two concentrations become more equal.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** To reach equilibrium the concentrations must become equal. The dilute side gains Cu²⁺ only if copper is oxidised there (Cu → Cu²⁺ + 2e⁻), so it is the anode. Electrons leave the anode through the wire towards the concentrated side, where Cu²⁺ is reduced.

- (A) E° is zero, but E is not, because Q ≠ 1. The cell is far from equilibrium.
- (C) This would make the dilute side more dilute and the concentrated side more concentrated, moving away from equilibrium.
- (D) As the concentrations become more equal, the cell gets closer to equilibrium, so E **decreases** towards zero.
</details>

## Question 4 (constructed response · core)

A galvanic cell runs the reaction 2Cr(s) + 3Co²⁺(aq) → 2Cr³⁺(aq) + 3Co(s). In one experiment, [Cr³⁺] = 0.050 M and [Co²⁺] = 1.0 M.

(a) Calculate E° for the cell.
(b) Write the expression for Q and calculate its value.
(c) Predict whether E is greater than, less than or equal to E°, and justify your answer in terms of equilibrium.
(d) Use the Nernst equation to check your prediction.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Co²⁺ is reduced, Cr is oxidised: E° = (−0.28) − (−0.74) = **+0.46 V**.

**(b)** Solids are left out: **Q = [Cr³⁺]² ÷ [Co²⁺]³** = (0.050)² ÷ (1.0)³ = **0.0025**.

**(c)** Q < 1, so there is relatively less product than at standard conditions. The cell is **further from equilibrium** than at Q = 1, so the drive towards equilibrium is greater: **E > E°**.

**(d)** n = 6. E = 0.46 − (0.0257/6) ln(0.0025) = 0.46 + 0.026 = **0.49 V**, which is greater than 0.46 V, as predicted.

| Point | What earns it |
|---|---|
| 1 | E° = +0.46 V |
| 1 | Correct Q expression with squared and cubed terms, value 0.0025 |
| 1 | E > E°, justified by Q < 1 meaning the cell is further from equilibrium |
| 1 | Nernst check with n = 6, giving about 0.49 V |

Do not award the point in (c) for a Le Châtelier "shift" argument without reference to Q or distance from equilibrium.
</details>

## Question 5 (constructed response · core)

A zinc–copper cell runs Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s) (E° = +1.10 V). It starts with 1.0 M Zn²⁺ and 1.0 M Cu²⁺ in equal volumes and powers a small lamp.

(a) Describe how [Zn²⁺], [Cu²⁺] and Q change as the cell runs.
(b) Explain why the cell potential decreases over time.
(c) Later, [Zn²⁺] = 1.5 M and [Cu²⁺] = 0.50 M. Predict whether E is above or below 1.10 V, then estimate E with the Nernst equation.
(d) A student says: "The lamp goes out only when all the Cu²⁺ has been used up." Evaluate this claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Zn²⁺ is produced, so [Zn²⁺] **rises**; Cu²⁺ is used up, so [Cu²⁺] **falls**. Q = [Zn²⁺] ÷ [Cu²⁺], so Q **increases** from 1.

**(b)** As Q increases towards K, the reaction mixture gets closer to equilibrium. The cell potential is the drive towards equilibrium, so it gets smaller.

**(c)** Q = 1.5 ÷ 0.50 = 3.0, which is greater than 1, so **E < 1.10 V**. E = 1.10 − (0.0257/2) ln 3.0 = 1.10 − 0.014 = **1.09 V** (only slightly lower).

**(d)** The claim is **incorrect**. The lamp goes out when E = 0, which happens when Q = K and the cell is at equilibrium. K is very large for this cell (E° is large and positive), so very little Cu²⁺ remains, but some does. The cell stops because there is no drive left, not because a reactant is completely gone.

| Point | What earns it |
|---|---|
| 1 | (a) [Zn²⁺] up, [Cu²⁺] down, Q up |
| 1 | (b) Q approaches K, so the cell is closer to equilibrium and E decreases |
| 1 | (c) Q = 3.0 > 1 so E < E°, with E ≈ 1.09 V |
| 1 | (d) Claim rejected: E = 0 when Q = K (equilibrium), and some Cu²⁺ remains |
</details>

## Question 6 (constructed response · stretch)

A galvanic cell runs Fe(s) + 2Ag⁺(aq) → Fe²⁺(aq) + 2Ag(s), starting with 1.0 M Fe²⁺ and 1.0 M Ag⁺.

(a) A student adds solid AgNO₃ to the silver half-cell and writes: "E increases, because by Le Châtelier's principle the equilibrium shifts to the right." Evaluate the student's reasoning and give a correct justification.
(b) In a fresh cell, both half-cells are instead diluted with water so that [Fe²⁺] = 0.10 M and [Ag⁺] = 0.10 M. Predict whether E is greater than, less than or equal to E°, and justify your answer.
(c) Use the Nernst equation to estimate E for the conditions in (b).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The prediction (E increases) is correct, but the reasoning is **not valid**. Le Châtelier's principle describes a system **at equilibrium**; a working cell is not at equilibrium, which is why it has a voltage. Correct reasoning: Q = [Fe²⁺] ÷ [Ag⁺]². Adding Ag⁺ makes Q smaller than 1, so the cell is further from equilibrium, and the drive towards equilibrium (E) is larger.

**(b)** Q = 0.10 ÷ (0.10)² = **10**. Because [Ag⁺] is squared, diluting both solutions by the same factor **increases** Q. Q > 1, so the cell is closer to equilibrium: **E < E°**.

**(c)** E° = 0.80 − (−0.44) = 1.24 V; n = 2. E = 1.24 − (0.0257/2) ln 10 = 1.24 − 0.030 = **1.21 V**.

| Point | What earns it |
|---|---|
| 1 | (a) Identifies that Le Châtelier's principle does not apply because the cell is not at equilibrium |
| 1 | (a) Correct justification: added Ag⁺ lowers Q, so the cell is further from equilibrium and E rises |
| 1 | (b) Q = 10, recognising the effect of the squared [Ag⁺] term |
| 1 | (b) E < E° because Q > 1 brings the cell closer to equilibrium |
| 1 | (c) E° = 1.24 V and E ≈ 1.21 V with n = 2 |
</details>

## Question 7 (explanation · stretch)

A student builds a concentration cell from two zinc strips: one in 0.020 M Zn(NO₃)₂ and one in 0.80 M Zn(NO₃)₂, with equal volumes of solution and a KNO₃ salt bridge.

(a) Identify the anode and write its half-reaction.
(b) Explain why the cell gives a voltage even though E° = 0.
(c) Describe what happens to each concentration as the cell runs, and state the concentration in each beaker when the voltmeter reads zero.
(d) Estimate the starting potential, and explain why it is much smaller than the potential of a zinc–copper cell.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** The strip in **0.020 M** Zn²⁺ is the anode: Zn(s) → Zn²⁺(aq) + 2e⁻. Oxidation there raises the dilute concentration, which moves the cell towards equal concentrations (equilibrium).

**(b)** E° = 0 because both half-reactions are the same. But Q = 0.020 ÷ 0.80 = 0.025, not 1, so the cell is far from equilibrium. The difference in concentration gives a drive towards equilibrium, so E > 0.

**(c)** [Zn²⁺] in the dilute beaker **rises**; [Zn²⁺] in the concentrated beaker **falls** (Zn²⁺ is reduced to Zn there). With equal volumes, the voltmeter reads zero when both are **0.41 M** (the average of 0.020 M and 0.80 M).

**(d)** E = 0 − (0.0257/2) ln(0.025) = **+0.047 V**. It is small because E° = 0: the only drive comes from the concentration difference, and the RT/nF term is small. A zinc–copper cell also has a large E° (1.10 V) from two different half-reactions.

| Point | What earns it |
|---|---|
| 1 | (a) Anode is the zinc in 0.020 M, with Zn → Zn²⁺ + 2e⁻ |
| 1 | (b) Q ≠ 1 (cell not at equilibrium), so E ≠ 0 even though E° = 0 |
| 1 | (c) Dilute side rises, concentrated side falls, both 0.41 M at E = 0 |
| 1 | (d) E ≈ 0.047 V |
| 1 | (d) Explains the small size: E° = 0, so only the small concentration term contributes |
</details>

## How did you do?

- **Q1 or Q5(d) wrong:** re-read Worked example 3 ("a battery running down") in the [study guide](/advanced-course-resources/chemistry/9-10-cell-potential-under-nonstandard-conditions-study-guide/).
- **Q2, Q4 or Q6 wrong:** practise the chain "concentration → Q → closer to or further from equilibrium → E" (Figure 1 and Worked example 1).
- **Q3 or Q7 wrong:** review "Concentration cells" and Figure 2.
- **Used Le Châtelier anywhere?** Rewrite the argument using Q.

Then tick off the [topic checklist](/advanced-course-resources/chemistry/9-10-cell-potential-under-nonstandard-conditions-checklist/).
