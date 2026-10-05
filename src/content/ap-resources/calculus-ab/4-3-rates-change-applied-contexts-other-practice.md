---
resourceId: "mb-ap-calcab-4.3-practice"
title: "Rates of Change in Applied Contexts Other Than Motion: Practice Questions (Calculus AB 4.3)"
description: "Seven original Marlbridge practice questions on derivatives as rates in cost, rainfall, density, chemistry and medicine contexts, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 4
topics: ["4.3"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Differentiation rules, including the product, quotient and chain rules"
prerequisiteResources: ["mb-ap-calcab-4.3-study-guide"]
learningObjectives:
  - "Interpret a first or second derivative in a non-motion context with correct units"
  - "Find a rate of change from a formula and estimate one from a table"
  - "Distinguish an amount, an average rate and an instantaneous rate"
  - "Explain why a derivative gives only an approximate change over the next unit"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Questions 1 to 6: no calculator. Question 7: a graphing calculator is allowed; give decimal answers to 3 decimal places."
related: ["mb-ap-calcab-4.3-study-guide", "mb-ap-calcab-4.3-revision-notes", "mb-ap-calcab-4.3-checklist"]
next: "mb-ap-calcab-4.3-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written reasoning."
  - "Shared practice for Calculus AB and Calculus BC students."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. All functions and data are invented models. Assumptions: **no calculator** for Questions 1 to 6; a graphing calculator is allowed for Question 7 (answers to 3 decimal places). This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

In a weather model, P(h) is the air pressure, in kilopascals (kPa), at an altitude of h metres. The model gives P′(1500) = −0.011. Which statement is the best interpretation?

- (A) At an altitude of 1500 metres, the air pressure is 0.011 kPa.
- (B) At an altitude of 1500 metres, the air pressure is decreasing at a rate of 0.011 kPa per metre of altitude.
- (C) Between altitudes 0 and 1500 metres, the air pressure falls by 0.011 kPa per metre on average.
- (D) At an altitude of 1500 metres, the altitude is decreasing at a rate of 0.011 metres per kPa.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** P′ has units kPa ÷ metres. A negative derivative means P is decreasing as h increases. The statement names the input value, the quantity, the direction and the rate with units.

- (A) confuses the rate P′(1500) with the amount P(1500).
- (C) describes an average rate over an interval. P′(1500) is the rate at one altitude only.
- (D) turns the units upside down and treats altitude as the output.
</details>

## Question 2 (multiple choice · core)

A workshop's cost of making q kites is C(q) = 500 + 12q − 0.02q² dollars, for 0 ≤ q ≤ 250. What is C′(100), and what are its units?

- (A) 8 dollars per kite
- (B) 10 dollars per kite
- (C) 15 dollars per kite
- (D) 1500 dollars

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** C′(q) = 12 − 0.04q, so C′(100) = 12 − 4 = 8. Units: dollars ÷ kites. At a production level of 100 kites, the cost is increasing at a rate of 8 dollars per kite.

- (B) differentiates 0.02q² as 0.02q, forgetting to multiply by the power 2.
- (C) is the average cost per kite, C(100)/100 = 1500/100. That is not a derivative.
- (D) is the total cost C(100), an amount, not a rate.
</details>

## Question 3 (multiple choice · core)

R(t) is the total rainfall, in millimetres, collected in a rain gauge t hours after a storm begins. Selected values are shown.

| t (hours) | 0 | 2 | 5 | 6 | 9 |
|---|---|---|---|---|---|
| R(t) (mm) | 0 | 3.0 | 10.5 | 12.0 | 15.6 |

Using the data, what is the best estimate of R′(5.5)?

- (A) 1.5 mm per hour
- (B) 2.5 mm per hour
- (C) 11.25 mm
- (D) 0.667 hours per mm

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Use the closest values either side of t = 5.5: R′(5.5) ≈ (12.0 − 10.5)/(6 − 5) = 1.5 mm per hour. At t = 5.5 hours, rain is collecting at approximately 1.5 mm per hour.

- (B) uses t = 2 and t = 5, (10.5 − 3.0)/3 = 2.5. That interval does not contain 5.5.
- (C) averages the two R values. That estimates the amount R(5.5), not the rate.
- (D) is the reciprocal, 1/1.5. The units are upside down.
</details>

## Question 4 (multiple choice · core)

W(t) is the mass, in kilograms, of a pollutant in a lake t days after a clean-up begins. At t = 4, W′(4) = −3 and W″(4) = 0.5. Which statement is true at t = 4?

- (A) The mass of pollutant is decreasing, and it is decreasing more slowly as time passes.
- (B) The mass of pollutant is decreasing, and it is decreasing faster as time passes.
- (C) The mass of pollutant is increasing at a rate of 0.5 kg per day.
- (D) There are 3 kg of pollutant in the lake.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** W′(4) < 0, so the mass is decreasing. W″(4) > 0, so W′ is increasing: it is negative but moving towards 0. The size of the rate is shrinking, so the decrease is slowing down.

- (B) reads W″ > 0 the wrong way. For a negative rate, a positive second derivative means the decrease slows.
- (C) treats W″ as if it were the rate of change of W. W″ is the rate of change of the rate, in kg per day².
- (D) treats the derivative W′(4) = −3 as the amount W(4).
</details>

## Question 5 (constructed response · core)

A metal rod is 50 cm long. The mass of the part of the rod from its left end to a point x cm along it is m(x) = 3x + 0.2x² grams, for 0 ≤ x ≤ 50.

(a) Find m′(20). Give units.
(b) Interpret m′(20) in context.
(c) Find the average rate of change of m over 0 ≤ x ≤ 50, and say what it means for the rod.
(d) Use m″ to explain how the density of the rod changes from the left end to the right end.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** m′(x) = 3 + 0.4x, so m′(20) = 3 + 8 = **11 grams per cm**.

**(b)** At the point 20 cm from the left end, the mass is increasing at a rate of 11 grams per centimetre of rod. In other words, the rod's linear density there is 11 g/cm.

**(c)** m(50) = 150 + 500 = 650 g and m(0) = 0. Average rate = (650 − 0)/(50 − 0) = **13 grams per cm**. This is the average density of the whole rod: total mass 650 g spread over 50 cm.

**(d)** m″(x) = 0.4 g/cm², which is positive for every x. So m′ increases along the rod: from 3 g/cm at the left end to 23 g/cm at the right end. The rod gets denser from left to right.

| Point | What earns it |
|---|---|
| 1 | m′(20) = 11 with units g/cm |
| 1 | Interpretation names the position (20 cm from the left end), the quantity (mass), increasing, and the rate with units |
| 1 | Average rate 13 g/cm from (m(50) − m(0))/50, identified as average density |
| 1 | m″ = 0.4 > 0 used to conclude the density increases along the rod |

Note the input here is distance, not time. The same unit rule applies.
</details>

## Question 6 (constructed response · core)

In a chemistry experiment, the concentration of a reactant A, in moles per litre (mol/L), is modelled by [A](t) = 0.80/(1 + 0.5t), where t is measured in seconds.

(a) Find [A]′(t).
(b) Find [A]′(2), with units, and interpret it.
(c) Chemists usually report the rate at which a reactant is used up as a positive number. What rate would they report at t = 2, and why is it positive?
(d) Find [A]″(2). Is the reactant being used up faster or more slowly as time passes? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Write [A](t) = 0.80(1 + 0.5t)⁻¹. By the chain rule, [A]′(t) = −0.80(1 + 0.5t)⁻² × 0.5 = **−0.4/(1 + 0.5t)²**.

**(b)** [A]′(2) = −0.4/(1 + 1)² = −0.4/4 = **−0.1 mol/L per second**. At t = 2 seconds, the concentration of A is decreasing at a rate of 0.1 mol/L per second.

**(c)** They would report **0.1 mol/(L·s)**. The "rate of using up A" describes a decrease, so it equals −[A]′(t). The minus sign is absorbed into the words "used up", just as "decreasing at a rate of 0.1" absorbs it.

**(d)** [A]″(t) = 0.4/(1 + 0.5t)³, so [A]″(2) = 0.4/8 = **0.05 mol/L per second²**. It is positive, so [A]′ is increasing towards 0. The concentration is still falling, but **more slowly**: the reactant is used up more slowly as time passes.

| Point | What earns it |
|---|---|
| 1 | Correct derivative −0.4/(1 + 0.5t)², using the chain rule (or the quotient rule) |
| 1 | [A]′(2) = −0.1 with units mol/L per second, interpreted at t = 2 with "decreasing" |
| 1 | Reports 0.1 and explains the sign is carried by "used up" (rate of use = −[A]′) |
| 1 | [A]″(2) = 0.05 > 0 and concludes the decrease is slowing |

Acceptable alternative for (a): the quotient rule on 0.80/(1 + 0.5t) gives (0 − 0.80 × 0.5)/(1 + 0.5t)², the same result.
</details>

## Question 7 (constructed response · stretch · calculator allowed)

The amount of a medicine in a patient's body t hours after an injection is modelled by A(t) = 200t·e^(−0.5t) milligrams, for t ≥ 0.

(a) Find A′(1) and A′(3), each to 3 decimal places, with units.
(b) Interpret A′(1) and A′(3) in context.
(c) Find A″(1) to 3 decimal places and interpret it.
(d) A student says: "A′(3) = −22.313, so the amount in the body at t = 4 will be exactly 22.313 mg less than at t = 3." Use the model to test this claim and explain the difference.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** By the product rule, A′(t) = 200e^(−0.5t) + 200t × (−0.5)e^(−0.5t) = 100e^(−0.5t)(2 − t).

- A′(1) = 100e^(−0.5) ≈ **60.653 mg per hour**.
- A′(3) = −100e^(−1.5) ≈ **−22.313 mg per hour**.

(A calculator's numerical derivative gives the same values.)

**(b)** At t = 1 hour, the amount of medicine in the body is increasing at a rate of about 60.653 mg per hour. At t = 3 hours, it is decreasing at a rate of about 22.313 mg per hour.

**(c)** A″(t) = 50e^(−0.5t)(t − 4), so A″(1) = −150e^(−0.5) ≈ **−90.980 mg per hour²**. At t = 1 hour, the amount is still increasing, but the rate of increase is falling by about 90.980 mg per hour each hour.

**(d)** A(3) ≈ 133.878 mg and A(4) ≈ 108.268 mg, so the actual change is about **−25.610 mg**, not −22.313 mg. The derivative gives the rate at the single instant t = 3. During the next hour the rate changes (it becomes more negative, since A″(3) < 0), so the derivative only approximates the change. The student's "exactly" is wrong.

| Point | What earns it |
|---|---|
| 1 | Both values A′(1) ≈ 60.653 and A′(3) ≈ −22.313 with units mg/h |
| 1 | Both interpretations with time, quantity, direction and rate (no double negatives) |
| 1 | A″(1) ≈ −90.980 interpreted as the rate of increase slowing |
| 1 | Computes the actual change ≈ −25.610 and explains that a derivative is a rate at one instant, so it gives only an approximate change |

Acceptable alternative for (d): any correct argument that the rate is not constant over 3 ≤ t ≤ 4, supported by a value such as A′(4) ≈ −27.067.
</details>

## How did you do?

- **Q1, Q4 or Q5(b) wrong:** reread "Writing an interpretation that earns credit" and "What the second derivative adds" in the [study guide](/advanced-course-resources/calculus-ab/4-3-rates-change-applied-contexts-other-study-guide/).
- **Q2 or Q6 wrong:** redo Worked example 1, and check every derivative with the unit rule.
- **Q3 wrong:** redo Worked example 2 (estimating from a table).
- **Q5(c) or Q7(d) wrong:** review the difference between an average rate, an instantaneous rate and an actual change.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/4-3-rates-change-applied-contexts-other-checklist/).
