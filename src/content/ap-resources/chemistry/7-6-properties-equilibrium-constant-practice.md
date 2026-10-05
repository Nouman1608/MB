---
resourceId: "mb-ap-chem-7.6-practice"
title: "Properties of the Equilibrium Constant: Practice Questions (Chemistry 7.6)"
description: "Seven original Marlbridge practice questions on reversing, multiplying and adding equations to find K or Q, with worked solutions and suggested mark points."
course: "chemistry"
unit: 7
topics: ["7.6"]
resourceType: "practice-questions"
prerequisites:
  - "Writing Kc and Kp expressions from a balanced equation"
  - "Powers, reciprocals and square roots on a calculator"
prerequisiteResources: ["mb-ap-chem-7.6-study-guide"]
learningObjectives:
  - "Find K for a reversed or rescaled equation"
  - "Combine the K values of several steps into K for an overall reaction"
  - "Apply the same manipulations to Q"
  - "Prove a manipulation rule from the equilibrium expressions"
skills: ["5", "6"]
studyMinutes: 40
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "All K values and concentrations are invented for practice; K is written without units. Keep unrounded values until the final step"
related: ["mb-ap-chem-7.6-study-guide", "mb-ap-chem-7.6-revision-notes", "mb-ap-chem-7.6-checklist"]
next: "mb-ap-chem-7.6-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Write down what you did to each equation before you touch the numbers."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Every K value and concentration is invented for practice, including those given for real substances. In each question all values are at the same temperature, and K is written without units.

## Question 1 (multiple choice · foundation)

For H₂(g) + I₂(g) ⇌ 2 HI(g), Kc = 64. What is Kc for HI(g) ⇌ ½ H₂(g) + ½ I₂(g) at the same temperature?

- (A) 0.0078
- (B) 0.016
- (C) 0.125
- (D) 8.0

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The new equation is the original **reversed** and **halved**. Reverse: 1/64. Halve: take the square root. Kc = √(1/64) = 1/8 = 0.125.

- (A) is 1/(2 × 64): it halves K instead of taking the square root.
- (B) is 1/64: it reverses the equation but forgets the halving.
- (D) is √64: it halves the equation but forgets to reverse it.
</details>

## Question 2 (multiple choice · core)

For A(g) + 2 B(g) ⇌ C(g), K = 3.0 × 10⁻². What is K for 3 A(g) + 6 B(g) ⇌ 3 C(g)?

- (A) 1.0 × 10⁻²
- (B) 2.7 × 10⁻⁵
- (C) 9.0 × 10⁻²
- (D) 3.7 × 10⁴

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Every coefficient is multiplied by 3, so every power in the expression is tripled and K is cubed: (3.0 × 10⁻²)³ = 2.7 × 10⁻⁵.

- (A) divides K by 3.
- (C) multiplies K by 3, treating K like ΔH.
- (D) is 1/K³: it cubes correctly but also inverts, as if the equation had been reversed.
</details>

## Question 3 (multiple choice · core)

Two invented steps:

- X(g) + Y(g) ⇌ XY(g), K₁ = 2.0 × 10³
- XY(g) + Y(g) ⇌ XY₂(g), K₂ = 5.0 × 10⁻⁶

What is K for the overall reaction X(g) + 2 Y(g) ⇌ XY₂(g)?

- (A) 2.5 × 10⁻⁹
- (B) 1.0 × 10⁻²
- (C) 2.0 × 10³
- (D) 4.0 × 10⁸

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Adding the two steps gives the overall equation (XY cancels), so K = K₁ × K₂ = 2.0 × 10³ × 5.0 × 10⁻⁶ = 1.0 × 10⁻².

- (A) is K₂ ÷ K₁: it divides instead of multiplying.
- (C) is K₁ + K₂ (the 5.0 × 10⁻⁶ makes no visible difference): adding is the rule for ΔH, not K.
- (D) is K₁ ÷ K₂.
</details>

## Question 4 (calculation · core)

Two invented reactions:

- (1) 2 A(g) ⇌ B(g), K₁ = 25
- (2) B(g) + C(g) ⇌ D(g), K₂ = 4.0 × 10⁻³

(a) Find K for D(g) ⇌ 2 A(g) + C(g).
(b) Show that your answer is correct by writing out the expressions.

<details>
<summary>Worked solution</summary>

**(a)** Adding (1) and (2) gives 2 A + C ⇌ D (B cancels), with K = K₁ × K₂ = 25 × 4.0 × 10⁻³ = 0.10. The target is this equation **reversed**, so K = 1 / 0.10 = **10**.

**(b)** K₁ = [B]/[A]² and K₂ = [D]/([B][C]).
K₁ × K₂ = [B]/[A]² × [D]/([B][C]) = [D]/([A]²[C]).
The target expression is [A]²[C]/[D], which is 1/(K₁ × K₂). ✓

Suggested mark points (3): 1 for adding the equations so that B cancels; 1 for inverting to get K = 10; 1 for the expression proof showing B cancels.

Common errors: 0.10 (forgetting to reverse); 250 (adding 1/K₁ and 1/K₂ instead of multiplying them).
</details>

## Question 5 (constructed response · core)

A flask contains [CO] = 0.25 M, [Cl₂] = 0.080 M and [COCl₂] = 0.60 M at one moment.

(a) Calculate Q for CO(g) + Cl₂(g) ⇌ COCl₂(g).
(b) Use your answer to (a), not the concentrations, to find Q for (i) COCl₂(g) ⇌ CO(g) + Cl₂(g) and (ii) 2 CO(g) + 2 Cl₂(g) ⇌ 2 COCl₂(g). Then check (ii) directly from the concentrations.
(c) At this temperature, K for COCl₂(g) ⇌ CO(g) + Cl₂(g) is 0.010. Is the mixture at equilibrium? Justify your answer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Q = [COCl₂] / ([CO][Cl₂]) = 0.60 / (0.25 × 0.080) = 0.60 / 0.020 = **30**.

**(b)** (i) Reversed: Q = 1/30 = **0.033** (0.0333).
(ii) Doubled: Q = 30² = **900**. Direct check: (0.60)² / ((0.25)² × (0.080)²) = 0.36 / (0.0625 × 0.0064) = 0.36 / 0.000400 = 900 ✓.

**(c)** Compare Q and K for the **same** equation. For COCl₂ ⇌ CO + Cl₂, Q = 0.033 and K = 0.010. Q ≠ K, so the mixture is **not** at equilibrium. (Equivalently, for the forward equation K = 1/0.010 = 100 while Q = 30.)

| Point | What earns it |
|---|---|
| 1 | Q = 30 with the correct expression |
| 1 | Q = 0.033 for the reverse, by inverting |
| 1 | Q = 900 for the doubled equation, by squaring, with a correct direct check |
| 1 | Not at equilibrium, comparing Q and K for the same version of the equation |

Do not award the last point for comparing Q = 30 with K = 0.010 directly: they belong to different equations.
</details>

## Question 6 (constructed response · core)

A possible three-step pathway for forming hydrogen bromide uses these invented values:

- Step 1: Br₂(g) ⇌ 2 Br(g), K₁ = 4.0 × 10⁻⁶
- Step 2: Br(g) + H₂(g) ⇌ HBr(g) + H(g), K₂ = 5.0 × 10⁻⁸
- Step 3: H(g) + Br(g) ⇌ HBr(g), K₃ = 2.0 × 10²⁰

(a) Show that the three steps add up to H₂(g) + Br₂(g) ⇌ 2 HBr(g), and name the intermediates.
(b) Calculate K for the overall reaction.
(c) Calculate K for HBr(g) ⇌ ½ H₂(g) + ½ Br₂(g).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Add the left sides: Br₂ + Br + H₂ + H + Br. Add the right sides: 2 Br + HBr + H + HBr. Cancel 2 Br and H from both sides: **H₂ + Br₂ ⇌ 2 HBr** ✓. The intermediates are **Br and H** atoms: each is made in one step and used in another.

**(b)** K = K₁ × K₂ × K₃ = 4.0 × 10⁻⁶ × 5.0 × 10⁻⁸ × 2.0 × 10²⁰ = **4.0 × 10⁷**.

**(c)** The target is the overall equation reversed and halved: K = 1/√(4.0 × 10⁷) = 1 / 6.32 × 10³ = **1.6 × 10⁻⁴**.

| Point | What earns it |
|---|---|
| 1 | Correct cancellation shown, and Br and H named as intermediates |
| 1 | K = 4.0 × 10⁷ by multiplying all three K values |
| 1 | K = 1.6 × 10⁻⁴ using both the reciprocal and the square root |

Allow the answer to (b) carried forward into (c).
</details>

## Question 7 (evaluation · stretch)

For N₂O₄(g) ⇌ 2 NO₂(g), Kc = 0.0050 at a certain temperature. An equilibrium mixture at this temperature contains [N₂O₄] = 0.18 M and [NO₂] = 0.030 M.

A student writes the equation as ½ N₂O₄(g) ⇌ NO₂(g) and claims: "Halving the equation halves K, so the new Kc is 0.0025."

(a) Show that the mixture is at equilibrium for the original equation.
(b) Use the same concentrations to calculate Kc for ½ N₂O₄(g) ⇌ NO₂(g), and evaluate the student's claim.
(c) Explain, using the expressions, why the correct rule is "take the square root", and why the concentrations in the flask do not change when the equation is rewritten.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Kc = [NO₂]² / [N₂O₄] = (0.030)² / 0.18 = 0.00090 / 0.18 = 0.0050 ✓.

**(b)** For the halved equation, Kc = [NO₂] / [N₂O₄]^½ = 0.030 / √0.18 = 0.030 / 0.424 = **0.071** (0.0707). The claim is **incorrect**: 0.071 is √0.0050, not 0.0050 ÷ 2 = 0.0025.

**(c)** Halving the coefficients halves each power: [NO₂]² becomes [NO₂]¹ and [N₂O₄]¹ becomes [N₂O₄]^½. Halving every power of an expression is the same as taking its square root, so the new Kc = (old Kc)^½. The flask holds the same chemicals at the same concentrations; writing the equation differently only changes which combination of those concentrations we call K, so the number changes while the mixture does not.

| Point | What earns it |
|---|---|
| 1 | Kc = 0.0050 confirmed with the squared term |
| 1 | Kc = 0.071 for the halved equation, with the claim rejected |
| 1 | Powers halved, so K is square-rooted |
| 1 | The mixture is unchanged; only the expression (and so the number) changes |
</details>

## How did you do?

- **Q1 or Q2 wrong:** re-read Rules 1 and 2 in the [study guide](/advanced-course-resources/chemistry/7-6-properties-equilibrium-constant-study-guide/).
- **Q3, Q4 or Q6 wrong:** work through Worked example 2 and Figure 1 again, checking which species cancel.
- **Q5 incomplete:** see "The same rules apply to Q", and always compare Q and K for the same equation.
- **Q7 incomplete:** write the expressions out in full; the rule follows from the powers.

Then tick off the [topic checklist](/advanced-course-resources/chemistry/7-6-properties-equilibrium-constant-checklist/).
