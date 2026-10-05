---
resourceId: "mb-ap-phys1-7.2-practice"
title: "Frequency and Period of SHM: Practice Questions (Physics 1 7.2)"
description: "Seven original Marlbridge practice questions on period and frequency, spring and pendulum periods, factor of change, T² graphs and timing experiments, with worked solutions and suggested mark points."
course: "physics-1"
unit: 7
topics: ["7.2"]
resourceType: "practice-questions"
prerequisites:
  - "The SHM condition and a = −(k/m)x (Topic 7.1)"
prerequisiteResources: ["mb-ap-phys1-7.2-study-guide"]
learningObjectives:
  - "Convert between period and frequency"
  - "Use the spring and pendulum period equations, and predict factors of change"
  - "Find a spring constant from a T² graph of timing data"
  - "Derive a symbolic expression for a period from given quantities"
  - "Use experimental evidence to support or refute a claim about what a period depends on"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. g = 9.8 m/s². Use the π key. Give answers to 2 significant figures unless told otherwise; keep unrounded values until the last step"
related: ["mb-ap-phys1-7.2-study-guide", "mb-ap-phys1-7.2-revision-notes", "mb-ap-phys1-7.2-checklist"]
next: "mb-ap-phys1-7.2-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Check every period answer against the square-root rule before you move on."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This is the algebra-based course, so no calculus is needed. Use g = 9.8 m/s². Springs and strings are ideal, pendulums swing through small angles, and air resistance is negligible unless stated. Round final answers to 2 significant figures unless told otherwise, and keep unrounded values in your calculator until the end.

## Question 1 (multiple choice · foundation)

A platform used to shake test tubes oscillates in SHM with a frequency of 2.5 Hz. What is its period?

- (A) 2.5 s
- (B) 0.40 s
- (C) 16 s
- (D) 0.064 s

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** T = 1/f = 1 ÷ 2.5 Hz = 0.40 s.

- (A) gives the frequency a unit of seconds. Hz is cycles per second, the reciprocal of a time.
- (C) multiplies by 2π (2π × 2.5 ≈ 16). There is no 2π in T = 1/f.
- (D) divides by 2π as well, 1 ÷ (2π × 2.5). Again, T = 1/f has no 2π.
</details>

## Question 2 (multiple choice · core)

A block oscillates on a horizontal spring. The block is replaced by one with **twice the mass**, and the spring by one with **half the spring constant**. By what factor does the period change?

- (A) It stays the same.
- (B) It is multiplied by √2.
- (C) It is multiplied by 2.
- (D) It is multiplied by 4.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** T ∝ √(m/k). The ratio m/k becomes (2m) ÷ (½k) = 4(m/k). So T is multiplied by √4 = 2.

- (A) assumes the two changes cancel. Both changes make the period longer: more mass and a softer spring.
- (B) accounts for only one of the two changes.
- (D) forgets the square root: m/k is multiplied by 4, but T only by √4.
</details>

## Question 3 (multiple choice · core)

A small-angle pendulum has a period of 1.4 s. Which single change will **increase** its period?

- (A) Replace the bob with a heavier one of the same size.
- (B) Release it from 6° instead of 3°.
- (C) Make the string longer.
- (D) Move it to a place where g is slightly larger.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** T_p = 2π√(ℓ/g), so a longer string gives a longer period.

- (A) The bob's mass is not in the equation. A heavier bob has a larger restoring force but also more inertia, in the same proportion.
- (B) Both angles are small, so the motion is still SHM and the period does not depend on amplitude.
- (D) A larger g gives a **shorter** period, because T ∝ 1/√g.
</details>

## Question 4 (calculation · core)

A student wants to build a pendulum that takes exactly 1.50 s for each full cycle.

(a) Calculate the length needed.
(b) Calculate its frequency and the number of full cycles it completes in one minute.
(c) The student accidentally makes the string twice as long as in (a). Calculate the new period.

<details>
<summary>Worked solution</summary>

**(a)** Square T = 2π√(ℓ/g): T² = 4π²ℓ/g, so ℓ = gT² / 4π² = (9.8 × 1.50²) ÷ 39.48 = 22.05 ÷ 39.48 ≈ **0.56 m**.

**(b)** f = 1/T = 1 ÷ 1.50 s ≈ **0.67 Hz**. In 60 s: 60 ÷ 1.50 = **40 cycles**.

**(c)** T ∝ √ℓ, so doubling ℓ multiplies T by √2: 1.50 × 1.414 ≈ **2.1 s**.

Suggested mark points (4): 1 for rearranging to ℓ = gT²/4π²; 1 for 0.56 m; 1 for both parts of (b); 1 for 2.1 s using the √2 factor (or full recalculation).

Common errors: forgetting to square T gives 0.37 m; dropping the 4π² gives 22 m. Neither is a sensible length for a 1.5 s pendulum: compare with a 1 m pendulum, whose period is about 2 s.
</details>

## Question 5 (graph · core)

A student hangs different masses on one spring. For each, she times 10 full oscillations.

| m (kg) | 0.10 | 0.20 | 0.30 | 0.40 | 0.50 |
|---|---|---|---|---|---|
| time for 10 cycles (s) | 5.0 | 7.0 | 8.6 | 9.9 | 11.1 |

(a) State which quantity to plot against m to get a straight line, and explain why using the period equation.
(b) Calculate the values, describe the graph and use it to find the spring constant.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** From T = 2π√(m/k), squaring gives **T² = (4π²/k) m**. This has the form y = (slope) × x, so a graph of **T² (vertical) against m (horizontal)** is a straight line through the origin with slope 4π²/k.

**(b)** Divide each time by 10, then square:

| m (kg) | 0.10 | 0.20 | 0.30 | 0.40 | 0.50 |
|---|---|---|---|---|---|
| T (s) | 0.50 | 0.70 | 0.86 | 0.99 | 1.11 |
| T² (s²) | 0.25 | 0.49 | 0.74 | 0.98 | 1.23 |

The points lie close to a straight line through the origin. Read two points on the best-fit line (not data points), far apart: (0.05 kg, 0.12 s²) and (0.45 kg, 1.11 s²). Slope = (1.11 − 0.12) ÷ (0.45 − 0.05) = 0.99 ÷ 0.40 ≈ 2.5 s²/kg. k = 4π² ÷ slope = 39.48 ÷ 2.475 ≈ **16 N/m**.

| Point | What earns it |
|---|---|
| 1 | Chooses T² against m |
| 1 | Justifies it by squaring the period equation, slope = 4π²/k |
| 1 | Correct T values (time ÷ 10) and T² values |
| 1 | Slope from two points on the best-fit line, about 2.4 to 2.5 s²/kg |
| 1 | k ≈ 16 N/m, with unit |

A graph of T against m is a curve; using the slope of that curve earns no credit for the k value.
</details>

## Question 6 (derivation · stretch)

A block hangs at rest from a vertical spring, which is stretched by a distance d at equilibrium. The block is pulled down a little and released.

(a) Derive an expression for the period of the oscillation in terms of d and g only.
(b) Calculate the period when d = 6.2 cm.
(c) A different block stretches the same spring by twice as much. By what factor does the period change?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** At equilibrium the net force is zero: kd = mg, so **m/k = d/g**. Substitute into T = 2π√(m/k): **T = 2π√(d/g)**.

**(b)** T = 2π√(0.062 ÷ 9.8) ≈ **0.50 s**.

**(c)** T ∝ √d, so twice the stretch gives √2 ≈ **1.4 times** the period. (The new block has twice the mass, and T ∝ √m agrees.)

| Point | What earns it |
|---|---|
| 1 | Uses equilibrium: kd = mg |
| 1 | Substitutes m/k = d/g to get T = 2π√(d/g) |
| 1 | 0.50 s, with d converted to metres |
| 1 | Factor √2, with a reason |

This expression contains g even though T_s does not. That is not a contradiction: g only appears because d itself depends on g. For a given block and spring, k and m fix the period.
</details>

## Question 7 (constructed response · stretch)

A student claims: "A pendulum with a heavier bob swings more slowly." To test it, she keeps the length at 0.65 m and the release angle at 5°, and changes only the bob. For each bob she times 10 full swings.

| Bob mass (kg) | 0.050 | 0.10 | 0.20 |
|---|---|---|---|
| time for 10 swings (s) | 16.2 | 16.1 | 16.2 |

(a) Identify the independent, dependent and controlled variables.
(b) Calculate the predicted period from the pendulum equation and compare it with the data.
(c) Evaluate the claim, using the data and a physical explanation.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Independent: bob mass. Dependent: period (from the time for 10 swings). Controlled: length (0.65 m), release angle (5°, small), the place (same g).

**(b)** T = 2π√(0.65 ÷ 9.8) ≈ 1.62 s. The measured periods are 1.62, 1.61 and 1.62 s, which agree with each other and with the prediction to within 0.01 s.

**(c)** The claim is **refuted**. Quadrupling the mass (0.050 kg to 0.20 kg) changes the period by no more than 0.01 s, which is within the timing uncertainty. Explanation: the restoring force along the arc is about (mg/ℓ)s, so it is proportional to m. But the bob's inertia is also proportional to m. Its acceleration, a ≈ −(g/ℓ)s, does not depend on m, so the period does not either.

| Point | What earns it |
|---|---|
| 1 | All three variable types identified correctly |
| 1 | Predicted period ≈ 1.6 s |
| 1 | Notes the periods are equal within uncertainty, with a number or comparison |
| 1 | Restoring force and inertia are both proportional to m |
| 1 | Concludes the mass cancels, so the claim is refuted |

An answer that only quotes "m is not in the equation" earns the conclusion point but not the fourth point: the question asks for physical reasoning, not just the formula.
</details>

## How did you do?

- **Q1 wrong:** re-read "Period and frequency" in the [study guide](/advanced-course-resources/physics-1/7-2-frequency-period-shm-study-guide/).
- **Q2 or Q4(c) wrong:** use the factor-of-change table. Do not forget the square root.
- **Q3 or Q7 wrong:** go back to "The simple pendulum": why mass and (small) amplitude do not matter.
- **Q5 incomplete:** work through Worked example 2 and Figure 1. Plot T², not T.
- **Q6 incomplete:** combine the equilibrium condition kd = mg (Topic 7.1) with T_s.

Then tick off the [topic checklist](/advanced-course-resources/physics-1/7-2-frequency-period-shm-checklist/).
