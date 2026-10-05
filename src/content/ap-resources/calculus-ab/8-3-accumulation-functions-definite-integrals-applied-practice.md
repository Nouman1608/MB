---
resourceId: "mb-ap-calcab-8.3-practice"
title: "Accumulation Functions and Definite Integrals in Applied Contexts: Practice Questions (Calculus AB 8.3)"
description: "Seven original Marlbridge practice questions on net change, amount functions, rates in and out and interpreting integrals in context, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 8
topics: ["8.3"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Evaluating definite integrals by antiderivatives and with a calculator"
  - "The candidates test for absolute extrema"
prerequisiteResources: ["mb-ap-calcab-8.3-study-guide"]
learningObjectives:
  - "Interpret definite integrals of rates in context, with units and the time interval"
  - "Find amounts from a starting value and an integral of a rate"
  - "Distinguish net change from total change"
  - "Use rates in and out to decide when an amount increases and to find its greatest or least value"
skills: ["3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Questions 1, 2, 3, 5 and 7: no calculator. Questions 4 and 6: graphing calculator allowed; use radians and give answers to three decimal places."
related: ["mb-ap-calcab-8.3-study-guide", "mb-ap-calcab-8.3-revision-notes", "mb-ap-calcab-8.3-checklist"]
next: "mb-ap-calcab-8.3-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written reasoning."
  - "Questions 4 and 6 are calculator-active; the rest are not."
  - "Shared practice for Calculus AB and Calculus BC students."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. All contexts and data are invented. Assumptions: **no calculator** except in Questions 4 and 6; angles in radians; calculator answers to three decimal places. Notation: ∫ (a to b) r(t) dt means the definite integral of r(t) from t = a to t = b. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

R(t) is the rate at which rain falls on a weather station, in millimetres per hour, where t is hours after midnight. Which statement is the correct meaning of ∫ (2 to 5) R(t) dt = 9?

- (A) Between 02:00 and 05:00, 9 mm of rain fell on the station.
- (B) At 05:00 the rain was falling 9 mm per hour faster than at 02:00.
- (C) The average rate of rainfall between 02:00 and 05:00 was 9 mm per hour.
- (D) By 05:00, a total of 9 mm of rain had fallen since midnight.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** R is a rate in mm per hour, so its integral over 2 ≤ t ≤ 5 is the amount of rain, in mm, that fell during that interval.

- (B) describes R(5) − R(2), the change in the rate, not the integral.
- (C) confuses the total with the average rate. The average rate would be 9/3 = 3 mm per hour.
- (D) uses the wrong interval. The integral starts at t = 2, not at midnight.
</details>

## Question 2 (multiple choice · core)

The temperature of an oven is T(t) degrees Celsius, t minutes after it is switched on. T(0) = 20 and T′(t) = 48 − 6t for 0 ≤ t ≤ 8. What is T(6)?

- (A) 32
- (B) 180
- (C) 200
- (D) 308

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** T(6) = T(0) + ∫ (0 to 6) (48 − 6t) dt = 20 + [48t − 3t²] from 0 to 6 = 20 + (288 − 108) = 20 + 180 = 200 °C.

- (A) adds the rate at t = 6 to the starting value: 20 + T′(6) = 20 + 12. A rate at one instant is not a change.
- (B) is the net change only; it forgets the starting temperature of 20 °C.
- (D) integrates 48 but drops the −6t term: 20 + 288.
</details>

## Question 3 (multiple choice · core)

People enter a sports hall at a rate E(t) people per minute and leave at a rate X(t) people per minute, where t is minutes after 18:00. At 18:00 there are 40 people in the hall. Which expression gives the number of people in the hall at time t = m?

- (A) ∫ (0 to m) [E(t) − X(t)] dt
- (B) 40 + E(m) − X(m)
- (C) 40 + ∫ (0 to m) [E(t) − X(t)] dt
- (D) 40 + ∫ (0 to m) [X(t) − E(t)] dt

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Number now = number at the start + net accumulated change. The net rate is (rate in) − (rate out) = E(t) − X(t), integrated from 0 to m.

- (A) gives only the change since 18:00; it leaves out the 40 people already there.
- (B) uses the net rate at one instant, in people per minute, instead of integrating it.
- (D) has the sign reversed: people leaving would increase the count.
</details>

## Question 4 (multiple choice · calculator · core)

In a harbour model, the depth of water changes at a rate D′(t) = 1.2 cos(πt/6) metres per hour, where t is hours after 06:00. For 0 ≤ t ≤ 8, what is the total distance moved by the water level, counting rises and falls as positive?

- (A) 1.985 m
- (B) 2.292 m
- (C) 4.277 m
- (D) 6.568 m

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Total change is ∫ (0 to 8) |D′(t)| dt ≈ 6.568 m. D′ is positive on 0 < t < 3 (the level rises about 2.292 m) and negative on 3 < t < 8 (it falls about 4.277 m). Total = 2.292 + 4.277 ≈ 6.568.

- (A) is the size of the net change, |∫ (0 to 8) D′(t) dt| ≈ |−1.985|. The rise and the fall partly cancel there.
- (B) counts only the rise from t = 0 to t = 3.
- (C) counts only the fall from t = 3 to t = 8.
</details>

## Question 5 (table · no calculator · core)

A house has solar panels and a home battery. P(t) is the power produced by the panels, in kilowatts (kW), t hours after 06:00. Selected values:

| t (hours) | 0 | 2 | 3 | 5 | 6 |
|---|---|---|---|---|---|
| P(t) (kW) | 0.4 | 2.6 | 3.4 | 4.0 | 3.8 |

(a) Use a trapezoidal sum with the four subintervals in the table to estimate ∫ (0 to 6) P(t) dt. Explain the meaning of this integral in context, with units.
(b) Find ∫ (2 to 5) P′(t) dt and explain its meaning.
(c) The battery holds 5 kWh at 06:00. All the panel energy goes into the battery, and the house draws energy from the battery at a constant 2 kW. Use your answer to (a) to estimate the energy in the battery at 12:00.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The subintervals have widths 2, 1, 2 and 1.

Trapezoids: 2(0.4 + 2.6)/2 = 3.0; 1(2.6 + 3.4)/2 = 3.0; 2(3.4 + 4.0)/2 = 7.4; 1(4.0 + 3.8)/2 = 3.9.

Sum: **17.3**. Meaning: the panels produce about 17.3 kilowatt-hours of energy between 06:00 and 12:00.

**(b)** ∫ (2 to 5) P′(t) dt = P(5) − P(2) = 4.0 − 2.6 = **1.4**. The power output of the panels is 1.4 kW higher at 11:00 than at 08:00. (This is a change in power, not an amount of energy.)

**(c)** Energy at 12:00 ≈ 5 + ∫ (0 to 6) P(t) dt − ∫ (0 to 6) 2 dt ≈ 5 + 17.3 − 12 = **10.3 kWh**.

| Point | What earns it |
|---|---|
| 1 | Trapezoidal sum set up with the correct unequal widths and value 17.3 |
| 1 | Interpretation: energy produced, between 06:00 and 12:00, in kWh |
| 1 | ∫ (2 to 5) P′(t) dt = P(5) − P(2) = 1.4, interpreted as the change in power output in kW between 08:00 and 11:00 |
| 1 | 5 + 17.3 − 2 × 6 = 10.3 kWh, showing the starting value and the energy drawn |

No mark for (a) if equal widths are assumed. In (c), follow through from an incorrect value in (a).
</details>

## Question 6 (constructed response · calculator · core)

Passengers wait in a ferry terminal hall. For 0 ≤ t ≤ 40, where t is in minutes, passengers arrive at a rate A(t) = 20 + 15 sin(t/8) people per minute and board the ferry at a constant rate of 24 people per minute. At t = 0 there are 150 passengers in the hall. Let H(t) be the number of passengers in the hall.

(a) How many passengers arrive during the 40 minutes?
(b) Is the number of passengers in the hall increasing or decreasing at t = 30? Give a reason.
(c) Find H(40).
(d) Find the greatest number of passengers in the hall during 0 ≤ t ≤ 40. Justify your answer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** ∫ (0 to 40) A(t) dt ≈ **885.961 passengers**.

**(b)** H′(30) = A(30) − 24 ≈ −12.573 < 0, so the number is **decreasing**: passengers board faster than they arrive.

**(c)** H(40) = 150 + ∫ (0 to 40) [A(t) − 24] dt ≈ 150 + 885.961 − 960 = **75.961**, about 76 passengers.

**(d)** H′(t) = A(t) − 24 = 15 sin(t/8) − 4. Solve H′(t) = 0 on the calculator: t ≈ 2.159 and t ≈ 22.973. H′ is negative before 2.159, positive between 2.159 and 22.973, and negative after 22.973. So the only local maximum inside the interval is at t ≈ 22.973. Candidates:

| t | H(t) |
|---|---|
| 0 | 150 |
| 2.159 | ≈ 145.707 |
| 22.973 | ≈ 293.762 |
| 40 | ≈ 75.961 |

The greatest number is **about 293.762, so about 294 passengers, at t ≈ 22.973 minutes**.

| Point | What earns it |
|---|---|
| 1 | (a) Integral of A from 0 to 40, value 885.961 |
| 1 | (b) Compares A(30) with 24 (or computes H′(30) < 0) and concludes decreasing |
| 1 | (c) 150 + ∫ (0 to 40) [A(t) − 24] dt, value 75.961 |
| 1 | (d) Sets A(t) − 24 = 0 and finds t ≈ 22.973 as the point where H′ changes from + to − |
| 1 | (d) Compares H at the endpoints and the critical points and states the maximum 293.762 |

A sign-chart argument with "H increases then decreases, so the maximum is at 22.973" earns the last point only if the endpoint values are also compared or the argument shows H decreases on all of [22.973, 40] and H(22.973) > H(0).
</details>

## Question 7 (constructed response · no calculator · stretch)

The mass of a community compost heap is C(t) kilograms, t weeks after a count, for 0 ≤ t ≤ 6. The heap's mass changes at a rate r(t) = 6t² − 30t + 24 kilograms per week. C(0) = 40.

(a) Find C′(3) and explain its meaning.
(b) Find ∫ (1 to 4) r(t) dt and explain its meaning.
(c) Find the least mass of the heap during 0 ≤ t ≤ 6. Justify your answer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** C′(3) = r(3) = 54 − 90 + 24 = **−12**. At t = 3 weeks, the mass of the heap is decreasing at 12 kg per week.

**(b)** An antiderivative of r is 2t³ − 15t² + 24t. ∫ (1 to 4) r(t) dt = (128 − 240 + 96) − (2 − 15 + 24) = −16 − 11 = **−27**. Meaning: the heap's mass decreases by a net 27 kg between week 1 and week 4.

**(c)** r(t) = 6(t − 1)(t − 4), so r = 0 at t = 1 and t = 4. r > 0 on 0 < t < 1, r < 0 on 1 < t < 4, r > 0 on 4 < t < 6. Use C(x) = 40 + 2x³ − 15x² + 24x:

| t | C(t) (kg) |
|---|---|
| 0 | 40 |
| 1 | 40 + 11 = 51 |
| 4 | 40 − 16 = 24 |
| 6 | 40 + 36 = 76 |

The least mass is **24 kg, at t = 4 weeks**. r changes from negative to positive at t = 4, and C(4) is smaller than every other candidate.

| Point | What earns it |
|---|---|
| 1 | (a) C′(3) = −12 with "decreasing at 12 kg per week at t = 3" |
| 1 | (b) Value −27 from a correct antiderivative |
| 1 | (b) Interpretation: net decrease of 27 kg between t = 1 and t = 4 |
| 1 | (c) Critical points t = 1 and t = 4 from r(t) = 0 |
| 1 | (c) Compares C at 0, 1, 4 and 6 and states the minimum 24 kg at t = 4 |

Acceptable alternative for (c): C(4) = C(0) + ∫ (0 to 4) r(t) dt, computed directly, with the endpoint comparison.
</details>

## How did you do?

- **Q1, Q5(a) or Q5(b) wrong:** reread Worked example 3 (interpretations) in the [study guide](/advanced-course-resources/calculus-ab/8-3-accumulation-functions-definite-integrals-applied-study-guide/). Check units and the time interval.
- **Q2 or Q3 wrong:** revisit "From net change to an amount function". The starting value is part of the answer.
- **Q4 wrong:** see the net versus total change part of Worked example 1.
- **Q6 or Q7(c) wrong:** redo Worked example 2 and the section "Greatest and least amounts". Compare all candidates, including the endpoints.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/8-3-accumulation-functions-definite-integrals-applied-checklist/).
