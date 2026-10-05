---
resourceId: "mb-ap-chem-5.3-practice"
title: "Concentration Changes Over Time: Practice Questions (Chemistry 5.3)"
description: "Seven original Marlbridge practice questions on integrated rate laws, finding reaction order from data, rate constants from slopes and first-order half-life, with worked solutions."
course: "chemistry"
unit: 5
topics: ["5.3"]
resourceType: "practice-questions"
prerequisites:
  - "Using natural logarithms on a calculator"
prerequisiteResources: ["mb-ap-chem-5.3-study-guide"]
learningObjectives:
  - "Identify the order of a reaction from concentration–time data"
  - "Find a rate constant and its units from a straight-line plot"
  - "Use the integrated rate laws and half-life to calculate concentrations and times"
  - "Justify a claim about reaction order or half-life with evidence from data"
skills: ["5", "6"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Integrated rate laws: [A]ₜ − [A]₀ = −kt; ln[A]ₜ − ln[A]₀ = −kt; 1/[A]ₜ − 1/[A]₀ = kt; t½ = 0.693/k. Use ln, not log"
related: ["mb-ap-chem-5.3-study-guide", "mb-ap-chem-5.3-revision-notes", "mb-ap-chem-5.3-checklist"]
next: "mb-ap-chem-5.3-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Check time units against the units of k before substituting."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. All reactions and data are invented unless a real isotope is named. Data for every question: [A]ₜ − [A]₀ = −kt; ln[A]ₜ − ln[A]₀ = −kt; 1/[A]ₜ − 1/[A]₀ = kt; t½ = 0.693/k. Temperature is constant in every question.

## Question 1 (multiple choice · foundation)

For the decomposition of an invented compound A, a plot of 1/[A] against time is a straight line with a slope of 0.15 M⁻¹ min⁻¹. Which of the following is correct?

- (A) rate = k[A], with k = 0.15 min⁻¹
- (B) rate = k[A]², with k = 0.15 M⁻¹ min⁻¹
- (C) rate = k[A]², with k = −0.15 M⁻¹ min⁻¹
- (D) rate = k, with k = 0.15 M min⁻¹

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** A straight 1/[A] against t plot means the reaction is second order in A. For second order the slope is +k, so k = 0.15 M⁻¹ min⁻¹, and these units match a second-order rate constant.

- (A) is the conclusion for a straight ln[A] plot (first order). The units min⁻¹ also do not match a 1/[A] slope.
- (C) gets the order right but the sign wrong. 1/[A] rises as [A] falls, so the slope is positive, and k is never negative.
- (D) is the conclusion for a straight [A] plot (zero order).
</details>

## Question 2 (multiple choice · core)

An invented reaction is first order in reactant B, with k = 0.0231 min⁻¹. What percentage of the starting B is left after 90.0 min?

- (A) 0%
- (B) 6.25%
- (C) 12.5%
- (D) 25.0%

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** t½ = 0.693 ÷ 0.0231 min⁻¹ = 30.0 min. 90.0 min is 3 half-lives, so the fraction left is (½)³ = 1/8 = 12.5%.

- (A) assumes each half-life removes half of the **starting** amount, so the reaction would be finished after 2 half-lives. Each half-life removes half of what is **left**.
- (B) is (½)⁴, four half-lives: a counting error.
- (D) is (½)², two half-lives: a counting error.
</details>

## Question 3 (multiple choice · core)

The concentration of an invented reactant C is measured during one experiment.

| t (s) | 0 | 20 | 40 | 60 |
|---|---|---|---|---|
| [C] (M) | 0.240 | 0.200 | 0.160 | 0.120 |

Which statement is correct?

- (A) The reaction is first order in C, with k = 2.0 × 10⁻³ s⁻¹.
- (B) The reaction is zero order in C, with k = 2.0 × 10⁻³ M s⁻¹.
- (C) The reaction is zero order in C, with k = −2.0 × 10⁻³ M s⁻¹.
- (D) The reaction is second order in C, because the half-life gets shorter.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** [C] falls by exactly 0.040 M every 20 s, so the [C] against t plot is straight: zero order. slope = (0.120 − 0.240) M ÷ 60 s = −2.0 × 10⁻³ M s⁻¹, and k = −slope = 2.0 × 10⁻³ M s⁻¹.

- (A) uses the right number but the wrong order and units. The ln[C] values (−1.427, −1.609, −1.833, −2.120) do not change by a constant amount, so the ln plot is not straight.
- (C) gives a negative rate constant. The slope is negative; k is positive.
- (D) is backwards. Second-order half-lives get **longer** as the reactant is used up; shorter half-lives point to zero order.
</details>

## Question 4 (calculation · core)

An invented reactant D decomposes in a first-order reaction with k = 4.5 × 10⁻³ s⁻¹. The starting concentration is 0.0800 M.

(a) Calculate [D] after 3.00 minutes.
(b) Calculate the time, in seconds, for [D] to fall to 0.0100 M.

<details>
<summary>Worked solution</summary>

**(a)** Convert time to match k: 3.00 min = 180 s.
ln[D]ₜ = ln(0.0800) − (4.5 × 10⁻³ s⁻¹)(180 s) = −2.526 − 0.810 = −3.336
[D]ₜ = e^−3.336 = **0.0356 M**

**(b)** ln(0.0800 / 0.0100) = kt, so t = ln 8 ÷ 4.5 × 10⁻³ s⁻¹ = 2.079 ÷ 0.0045 s⁻¹ = **462 s**.

Check: t½ = 0.693 ÷ 0.0045 = 154 s. 0.0800 → 0.0100 M is three half-lives, and 3 × 154 = 462 s.

Suggested mark points (3): 1 for converting 3.00 min to 180 s; 1 for 0.0356 M; 1 for 462 s (by the integrated law or by three half-lives).

Common error: substituting t = 3.00 with k in s⁻¹ gives 0.0789 M, which is barely below the start. That should look wrong: 3 minutes is more than one half-life.
</details>

## Question 5 (constructed response · core)

A student follows the fading of an invented dye, D, by measuring its concentration with a spectrophotometer (absorbance is proportional to [D]).

| t (min) | 0 | 20 | 40 | 60 | 80 |
|---|---|---|---|---|---|
| [D] (× 10⁻⁵ M) | 4.00 | 3.12 | 2.43 | 1.89 | 1.47 |

(a) Determine the order of the reaction in D. Justify your answer with values calculated from the data.
(b) Determine the rate constant, with units.
(c) Calculate the half-life.
(d) Explain why the student could have plotted absorbance instead of concentration and still found the same order and k.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Calculate ln[D] (with [D] in M): −10.127, −10.375, −10.625, −10.876, −11.128. The differences are −0.248, −0.250, −0.251, −0.252, which are constant within the rounding of the data. **ln[D] against t is straight, so the reaction is first order in D.**
For comparison, [D] falls by 0.88, 0.69, 0.54, 0.42 (× 10⁻⁵ M) and 1/[D] rises by 0.705, 0.910, 1.18, 1.51 (× 10⁴ M⁻¹). Neither is constant.

**(b)** slope = (−11.128 − (−10.127)) ÷ (80 − 0) min = −0.0125 min⁻¹, so **k = 0.0125 min⁻¹** (1.25 × 10⁻² min⁻¹).

**(c)** t½ = 0.693 ÷ 0.0125 min⁻¹ = **55.4 min**.

**(d)** If absorbance A = (constant) × [D], then ln A = ln(constant) + ln[D]. The constant only shifts the line up or down; it does not change the slope. So ln A against t is straight whenever ln[D] against t is, with the same slope −k.

| Point | What earns it |
|---|---|
| 1 | Calculates ln[D] values (or plots ln[D] against t) and shows they change by a constant amount in equal times |
| 1 | Concludes first order **and** shows at least one other plot is not straight |
| 1 | k = 0.0125 min⁻¹ with correct units, from the slope |
| 1 | t½ = 55.4 min using k from (b) |
| 1 | Explains that a proportionality constant changes only the intercept of the ln plot, not its slope |

Accept k from a best-fit line between 0.0124 and 0.0126 min⁻¹. Accept "the time to halve is constant" as evidence in (a) if supported by values.
</details>

## Question 6 (constructed response · core)

An invented compound Y decomposes in a reaction that is second order in Y, with k = 0.540 M⁻¹ s⁻¹. The starting concentration is 0.0250 M.

(a) Calculate the time for [Y] to fall from 0.0250 M to 0.0125 M.
(b) Calculate the time for [Y] to fall from 0.0125 M to 0.00625 M.
(c) A student says: "The second half-life is longer because k gets smaller as the reaction goes on." Evaluate this claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** 1/[Y]ₜ − 1/[Y]₀ = kt, so t = (1/0.0125 − 1/0.0250) M⁻¹ ÷ 0.540 M⁻¹ s⁻¹ = (80.0 − 40.0) ÷ 0.540 = **74.1 s**.

**(b)** t = (1/0.00625 − 1/0.0125) ÷ 0.540 = (160.0 − 80.0) ÷ 0.540 = **148 s**.

**(c)** The claim is **incorrect**. k depends on temperature, not on concentration, so it stays at 0.540 M⁻¹ s⁻¹ throughout. The second half-life is longer because the rate law is rate = k[Y]². When [Y] halves, the rate falls to one quarter (from 3.38 × 10⁻⁴ to 8.44 × 10⁻⁵ M s⁻¹), so it takes longer to remove the next half.

| Point | What earns it |
|---|---|
| 1 | 74.1 s using the second-order integrated law |
| 1 | 148 s (about double the first half-life) |
| 1 | States k is constant at constant temperature |
| 1 | Explains the longer half-life by the rate depending on [Y]², so the rate falls as [Y] falls |
</details>

## Question 7 (explanation · stretch)

Carbon-14 is radioactive with a half-life of about 5700 years. A student says: "A 2.0 g sample of carbon-14 takes twice as long to lose half its carbon-14 as a 1.0 g sample, because there is twice as much to decay."

(a) Explain why radioactive decay follows a first-order rate law.
(b) Evaluate the student's claim.
(c) What mass of carbon-14 remains from the 2.0 g sample after 17 100 years?

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Each nucleus decays on its own, without colliding with anything, and has the same chance of decaying in a given time. So the number of decays per unit time is proportional to the number of nuclei present: rate = kN, which is first order.

**(b)** The claim is **incorrect**. The larger sample has twice as many nuclei, but it also decays twice as fast, because the rate is proportional to the amount present. For a first-order process t½ = 0.693/k, which does not depend on the starting amount. Both samples lose half their carbon-14 in about 5700 years.

**(c)** 17 100 ÷ 5700 = 3 half-lives, so (½)³ = 1/8 remains: 2.0 g × 1/8 = **0.25 g**.

| Point | What earns it |
|---|---|
| 1 | Links rate proportional to the number of nuclei to a first-order rate law |
| 1 | States the half-life is independent of the starting amount (t½ = 0.693/k has no amount in it) |
| 1 | Explains why: double the nuclei gives double the rate |
| 1 | 0.25 g, using three half-lives |
</details>

## How did you do?

- **Q1 or Q3 wrong:** re-read the table "The three integrated rate laws" in the [study guide](/advanced-course-resources/chemistry/5-3-concentration-changes-over-time-study-guide/), especially the slope signs.
- **Q2, Q4 or Q7 wrong:** review "Half-life" and Worked example 2. Count half-lives on paper.
- **Q5 or Q6 incomplete:** your answer needs evidence (calculated values) and a reason, not only the conclusion.

Then tick off the [topic checklist](/advanced-course-resources/chemistry/5-3-concentration-changes-over-time-checklist/).
