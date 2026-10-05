---
resourceId: "mb-ap-chem-6.9-practice"
title: "Hess's Law: Practice Questions (Chemistry 6.9)"
description: "Seven original Marlbridge practice questions on Hess's law: reversing, scaling and adding equations, step sequences and energy-conservation reasoning, with suggested mark points."
course: "chemistry"
unit: 6
topics: ["6.9"]
resourceType: "practice-questions"
prerequisites:
  - "Writing balanced equations with state symbols"
  - "Sign convention for ΔH (Topic 6.6)"
prerequisiteResources: ["mb-ap-chem-6.9-study-guide"]
learningObjectives:
  - "Apply the reverse, multiply and add rules to ΔH values"
  - "Choose and change given equations so they add to a target equation"
  - "Represent a process as a sequence of steps and add their enthalpy changes"
  - "Use conservation of energy to judge whether two measured routes agree"
skills: ["3", "5", "6"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "All ΔH values are in kJ mol⁻¹, per mole of reaction as written. All substances are fictional; their values are invented for practice."
related: ["mb-ap-chem-6.9-study-guide", "mb-ap-chem-6.9-revision-notes", "mb-ap-chem-6.9-checklist"]
next: "mb-ap-chem-6.9-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Write each changed equation before you combine ΔH values."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. All ΔH values are in kJ mol⁻¹, per mole of reaction as written. The elements and compounds (A, D, E, G, J, L, M, Q, R, T, X, Z and their compounds; each letter stands for one element throughout this page) are fictional, and their values are invented for practice.

## Question 1 (multiple choice · foundation)

For the reaction 2A(g) + Q₂(g) → 2AQ(g), ΔH = −164 kJ mol⁻¹. What is ΔH for AQ(g) → A(g) + ½Q₂(g)?

- (A) −164 kJ mol⁻¹
- (B) −82 kJ mol⁻¹
- (C) +82 kJ mol⁻¹
- (D) +164 kJ mol⁻¹

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The new equation is the given one **reversed** (sign flips: +164) and **halved** (every coefficient × ½: +82).

- (A) does neither operation.
- (B) halves but forgets to flip the sign. Breaking AQ apart must absorb the energy that forming it released.
- (D) flips the sign but forgets to halve. The new equation involves only 1 mol AQ, not 2.
</details>

## Question 2 (multiple choice · core)

Two equations are known:

- (1) D(s) + 2X₂(g) → DX₄(g)  ΔH₁
- (2) DX₂(g) + X₂(g) → DX₄(g)  ΔH₂

Which expression gives ΔH for D(s) + X₂(g) → DX₂(g)?

- (A) ΔH₁ + ΔH₂
- (B) ΔH₁ − ΔH₂
- (C) ΔH₂ − ΔH₁
- (D) 2ΔH₁ − ΔH₂

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** D(s) is only in (1), on the left, coefficient 1: use (1) as written. DX₂ is only in (2), but on the **left**; the target needs it on the right, so reverse (2): DX₄(g) → DX₂(g) + X₂(g), ΔH = −ΔH₂.

Adding: D(s) + 2X₂(g) + DX₄(g) → DX₄(g) + DX₂(g) + X₂(g). DX₄ cancels, and one X₂ cancels, leaving D(s) + X₂(g) → DX₂(g). So ΔH = ΔH₁ − ΔH₂.

- (A) uses (2) without reversing it, so DX₂ would end up on the left.
- (C) reverses (1) instead of (2), which puts D(s) on the wrong side.
- (D) doubles (1), which would need 2 D(s) in the target.
</details>

## Question 3 (multiple choice · core)

Use the data to find ΔH for L(s) + 3/2 M₂(g) → LM₃(g).

- (1) L(s) + M₂(g) → LM₂(g)  ΔH₁ = −150 kJ mol⁻¹
- (2) 2LM₂(g) → L₂M₄(g)  ΔH₂ = −56 kJ mol⁻¹
- (3) L₂M₄(g) + M₂(g) → 2LM₃(g)  ΔH₃ = −124 kJ mol⁻¹

- (A) −330 kJ mol⁻¹
- (B) −302 kJ mol⁻¹
- (C) −268 kJ mol⁻¹
- (D) −240 kJ mol⁻¹

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The target makes **1** LM₃, but (3) makes 2, so use ½ × (3). Then L₂M₄ must cancel, so use ½ × (2) as well. Then LM₂ (1 mol) cancels with (1).

| Used | Changed equation | ΔH |
|---|---|---|
| (1) | L(s) + M₂(g) → LM₂(g) | −150 |
| ½ × (2) | LM₂(g) → ½L₂M₄(g) | −28 |
| ½ × (3) | ½L₂M₄(g) + ½M₂(g) → LM₃(g) | −62 |
| Sum | L(s) + 3/2 M₂(g) → LM₃(g) | **−240** |

- (A) adds the three values without halving (2) and (3); that would make 2 LM₃.
- (B) halves (2) but not (3).
- (C) halves (3) but not (2).
</details>

## Question 4 (calculation · core)

Use the data to calculate ΔH for G₂J₃(s) + G(s) → 3GJ(s).

- (1) 4G(s) + 3J₂(g) → 2G₂J₃(s)  ΔH₁ = −1640 kJ mol⁻¹
- (2) 2G(s) + J₂(g) → 2GJ(s)  ΔH₂ = −500 kJ mol⁻¹

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

1. G₂J₃ is needed on the **left** with coefficient 1: reverse (1) and multiply by ½.
   G₂J₃(s) → 2G(s) + 3/2 J₂(g)  ΔH = −½ × (−1640) = **+820 kJ mol⁻¹**
2. GJ is needed on the right with coefficient 3: multiply (2) by 3/2.
   3G(s) + 3/2 J₂(g) → 3GJ(s)  ΔH = 3/2 × (−500) = **−750 kJ mol⁻¹**
3. Add. J₂: 3/2 on each side, cancels. G: 3 on the left, 2 on the right, so **1 G(s) remains on the left**. The sum is G₂J₃(s) + G(s) → 3GJ(s), the target.
4. ΔH = +820 + (−750) = **+70 kJ mol⁻¹**.

| Point | What earns it |
|---|---|
| 1 | Reverses (1) and halves it, with ΔH = +820 |
| 1 | Multiplies (2) by 3/2, with ΔH = −750 |
| 1 | ΔH = +70 kJ mol⁻¹, with the cancelling shown or the changed equations summing to the target |

Common error: reversing (1) without halving gives +1640 − 750 = +890 kJ mol⁻¹. That equation would involve 2 G₂J₃, not 1.
</details>

## Question 5 (constructed response · core)

The fictional reaction T(s) + R₂(g) → TR₂(g) can be represented as three steps:

- Step 1: T(s) → T(g)  ΔH = +180 kJ mol⁻¹
- Step 2: R₂(g) → 2R(g)  ΔH = +240 kJ mol⁻¹
- Step 3: T(g) + 2R(g) → TR₂(g)  ΔH = −620 kJ mol⁻¹

(a) Show that the three steps add up to the overall reaction.
(b) Calculate ΔH for the overall reaction.
(c) Identify which steps are endothermic, and explain why the overall reaction is still exothermic.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Adding: T(s) + R₂(g) + T(g) + 2R(g) → T(g) + 2R(g) + TR₂(g). T(g) and 2R(g) appear on both sides and cancel, leaving T(s) + R₂(g) → TR₂(g).

**(b)** ΔH = +180 + 240 + (−620) = **−200 kJ mol⁻¹**.

**(c)** Steps 1 and 2 are **endothermic**: they separate particles (turning the solid into gaseous atoms and breaking the R–R bond), which needs energy. Step 3 is exothermic because two T–R bonds form. The energy released in step 3 (620 kJ) is greater than the total absorbed in steps 1 and 2 (420 kJ), so the overall reaction releases energy.

| Point | What earns it |
|---|---|
| 1 | Shows T(g) and 2R(g) cancelling to give the overall equation |
| 1 | ΔH = −200 kJ mol⁻¹ with sign and unit |
| 1 | Identifies steps 1 and 2 as endothermic, linked to separating particles or breaking bonds |
| 1 | Compares energy released (620) with energy absorbed (420) to explain the negative overall ΔH |

The steps need not be the real mechanism; they are a valid route because they start and end with the same substances.
</details>

## Question 6 (argumentation · core)

A student studies one change by two routes using a coffee-cup calorimeter.

- Route A (one step): measured ΔH = −452 kJ mol⁻¹
- Route B (two steps): step 1 measured ΔH = −318 kJ mol⁻¹; step 2 measured ΔH = −139 kJ mol⁻¹

The student concludes: "Hess's law does not hold for this change, because the two routes give different answers."

(a) Calculate the overall ΔH for route B.
(b) Using conservation of energy, explain what Hess's law predicts about routes A and B.
(c) Evaluate the student's conclusion.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** −318 + (−139) = **−457 kJ mol⁻¹**.

**(b)** Both routes start with the same substances and end with the same substances. Energy is conserved, so the net thermal energy transferred to the surroundings must be the same whichever route is taken. Hess's law predicts that route B's total equals route A's ΔH.

**(c)** The conclusion is **not justified**. The two results differ by 5 kJ mol⁻¹, about 1% of 452 kJ mol⁻¹. A difference this small is explained by measurement error, for example thermal energy lost from the calorimeter to the room, the heat absorbed by the cup and thermometer, or limited thermometer precision. Route B has two measurements, so its errors can add up. A real failure of Hess's law would mean energy was created or destroyed, which does not happen.

| Point | What earns it |
|---|---|
| 1 | −457 kJ mol⁻¹ |
| 1 | Same start and end + energy conserved, so the totals must be equal |
| 1 | Rejects the conclusion and gives a specific source of experimental error (or notes the ~1% difference is within likely error) |
</details>

## Question 7 (multi-step · stretch)

A fictional element E forms a compound EZ₃ that is a liquid at 25 °C. Use the data:

- (1) 2E(s) + 3Z₂(g) → 2EZ₃(g)  ΔH₁ = −700 kJ mol⁻¹
- (2) EZ₃(l) → EZ₃(g)  ΔH₂ = +32 kJ mol⁻¹
- (3) EZ₃(g) + Z₂(g) → EZ₅(g)  ΔH₃ = −88 kJ mol⁻¹

(a) Calculate ΔH for E(s) + 3/2 Z₂(g) → EZ₃(l).
(b) Calculate ΔH for EZ₃(l) + Z₂(g) → EZ₅(g).
(c) A student says the answer to (b) must be −88 kJ mol⁻¹, "because EZ₃(l) and EZ₃(g) are the same compound". Explain why the student is wrong.
(d) Without further calculation, give ΔH for 2EZ₅(g) → 2EZ₃(l) + 2Z₂(g).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Use ½ × (1): E(s) + 3/2 Z₂(g) → EZ₃(g), ΔH = −350. Then reverse (2): EZ₃(g) → EZ₃(l), ΔH = −32. EZ₃(g) cancels. ΔH = −350 + (−32) = **−382 kJ mol⁻¹**.

**(b)** Use (2) then (3): EZ₃(l) → EZ₃(g) (+32), then EZ₃(g) + Z₂(g) → EZ₅(g) (−88). EZ₃(g) cancels. ΔH = +32 + (−88) = **−56 kJ mol⁻¹**.

**(c)** The liquid and the gas are different **states** with different energies. In the liquid, attractions between EZ₃ molecules lower the energy, so 32 kJ mol⁻¹ must be absorbed to separate the molecules before they can react as a gas. Starting from the liquid therefore releases less energy overall: −56, not −88 kJ mol⁻¹.

**(d)** This is the answer to (b) reversed and doubled: −2 × (−56) = **+112 kJ mol⁻¹**.

| Point | What earns it |
|---|---|
| 1 | Halves (1) to get −350 for forming 1 mol EZ₃(g) |
| 1 | (a) −382 kJ mol⁻¹, including the reversed vaporization step |
| 1 | (b) −56 kJ mol⁻¹ |
| 1 | (c) The vaporization step absorbs energy because attractions in the liquid must be overcome |
| 1 | (d) +112 kJ mol⁻¹, applying both reverse and multiply rules |

Accept a correct (d) carried forward from an incorrect (b).
</details>

## How did you do?

- **Q1 or Q4 wrong:** revise the three rules in the [study guide](/advanced-course-resources/chemistry/6-9-hesss-law-study-guide/) and write the changed equation before changing ΔH.
- **Q2 or Q3 wrong:** use the six-step strategy and Worked examples 1 and 2; pay attention to partial cancelling.
- **Q5 or Q7 incomplete:** treat physical changes and bond breaking as steps with their own ΔH.
- **Q6 incomplete:** your answer needs the conservation-of-energy reason, not only the numbers.

Then tick off the [topic checklist](/advanced-course-resources/chemistry/6-9-hesss-law-checklist/).
