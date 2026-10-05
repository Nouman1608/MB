---
resourceId: "mb-ap-calcab-4.1-practice"
title: "Interpreting the Meaning of the Derivative in Context: Practice Questions (Calculus AB 4.1)"
description: "Seven original Marlbridge practice questions on derivatives in context: units, interpretation sentences, table estimates and second derivatives, with full solutions."
course: "calculus-ab"
unit: 4
topics: ["4.1"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Differentiating polynomials"
  - "Estimating a derivative from a table of values"
prerequisiteResources: ["mb-ap-calcab-4.1-study-guide"]
learningObjectives:
  - "State the units of a first or second derivative in context"
  - "Interpret a derivative value with a complete sentence"
  - "Estimate a derivative from a table and interpret the estimate"
  - "Distinguish a derivative from a function value, an average rate and an exact change"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Give units with every rate."
related: ["mb-ap-calcab-4.1-study-guide", "mb-ap-calcab-4.1-revision-notes", "mb-ap-calcab-4.1-checklist"]
next: "mb-ap-calcab-4.1-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. All functions and data are invented models. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, and every rate must be given with units. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

The volume of air in a balloon is V(t) cubic centimetres, where t is measured in seconds. What are the units of V′(t)?

- (A) cubic centimetres
- (B) cubic centimetres per second
- (C) seconds per cubic centimetre
- (D) cubic centimetre-seconds

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The units of a derivative are (units of the function) ÷ (units of the input): cm³ ÷ s, which is cubic centimetres per second.

- (A) are the units of V(t) itself, an amount, not a rate.
- (C) divides the wrong way round: that would be the units of dt/dV.
- (D) multiplies the units. A rate is a quotient, not a product.
</details>

## Question 2 (multiple choice · core)

In a model of the air above a city, T(h) is the air temperature in °C at an altitude of h kilometres. It is given that T′(2) = −6.5. Which statement is the best interpretation?

- (A) At an altitude of 2 km, the air temperature is −6.5 °C.
- (B) At an altitude of 2 km, the air temperature is decreasing at a rate of 6.5 °C per kilometre of altitude.
- (C) The air temperature falls by exactly 6.5 °C between altitudes of 2 km and 3 km.
- (D) At an altitude of 2 km, the altitude is decreasing at a rate of 6.5 km per °C.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** T′(2) is the rate of change of temperature with respect to altitude, at h = 2. The units are °C per km, and the negative sign means the temperature is decreasing as altitude increases.

- (A) describes T(2), the temperature itself, not its rate of change.
- (C) treats the derivative as the exact change over the next unit of input. T′(2) only gives an approximation of T(3) − T(2), because the rate may change between 2 km and 3 km.
- (D) swaps the roles of input and output. T′ is "temperature per kilometre", not "kilometres per degree".
</details>

## Question 3 (multiple choice · core)

The concentration of chlorine in a swimming pool, C(t) milligrams per litre, is measured t hours after treatment.

| t (hours) | 0 | 2 | 5 | 9 |
|---|---|---|---|---|
| C(t) (mg/L) | 3.0 | 2.6 | 2.1 | 1.7 |

Using the data, which is the best estimate of C′(3.5)?

- (A) −1/6 milligrams per litre per hour
- (B) −0.5 milligrams per litre per hour
- (C) −6 hours per milligram per litre
- (D) 2.35 milligrams per litre

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The closest data on either side of t = 3.5 are at t = 2 and t = 5. C′(3.5) ≈ (2.1 − 2.6)/(5 − 2) = −0.5/3 = −1/6 mg/L per hour. At 3.5 hours after treatment, the concentration is decreasing at about 1/6 mg/L per hour.

- (B) is the change in C, −0.5 mg/L, but it is not divided by the 3 hours.
- (C) divides time by concentration, giving the reciprocal of the rate with upside-down units.
- (D) is the average of the two concentrations. It estimates C(3.5), not C′(3.5), and its units are not a rate.
</details>

## Question 4 (multiple choice · core)

B(t) is the total number of bicycles a hire shop has rented out since 8 a.m., where t is hours after 8 a.m. It is given that B′(3) = 12 and B″(3) = −4. Which statement is correct at 11 a.m.?

- (A) Bicycles are being rented at 12 per hour, and this rate is decreasing at 4 bicycles per hour per hour.
- (B) 12 bicycles have been rented so far, and 4 have been returned.
- (C) The total number of bicycles rented is decreasing at 4 bicycles per hour.
- (D) Bicycles are being rented at 12 per hour, and the total number rented is decreasing.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** B′(3) = 12 is the rental rate at t = 3 (11 a.m.), in bicycles per hour. B″(3) = −4 is the rate of change of that rate, in bicycles per hour per hour. Negative means the rental rate is falling, even though rentals are still happening.

- (B) reads B′(3) as the total B(3), and invents "returns" from the second derivative.
- (C) treats B″ as if it were B′. The total is increasing, because B′(3) > 0.
- (D) gets B′ right, but a negative second derivative does not make the total decrease. Only the rate of increase is getting smaller.
</details>

## Question 5 (constructed response · core)

A model for the number of visitors inside a museum t hours after it opens at 9 a.m. is

**N(t) = 240t − 30t², for 0 ≤ t ≤ 8.**

(a) Find N′(1.5). Give units and interpret your answer in context.
(b) It is given that N′(6) = −120. Interpret this in context.
(c) A student says: "Since N′(1.5) = 150, there will be exactly 150 more visitors inside at t = 2.5." Use the model to test this claim and explain the result.
(d) At what clock time is the number of visitors inside momentarily not changing? How many visitors are inside then?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** N′(t) = 240 − 60t, so N′(1.5) = 240 − 90 = **150 visitors per hour**. At 10:30 a.m. (t = 1.5 hours), the number of visitors inside the museum is increasing at a rate of 150 visitors per hour.

**(b)** At 3 p.m. (t = 6 hours), the number of visitors inside is decreasing at a rate of 120 visitors per hour.

**(c)** N(1.5) = 360 − 67.5 = 292.5 and N(2.5) = 600 − 187.5 = 412.5. The actual change is 120, not 150. N′(1.5) is the rate at one instant. Because N′(t) = 240 − 60t falls as t increases, visitors arrive more slowly during that hour than at t = 1.5, so the rate overestimates the change.

**(d)** N′(t) = 0 when 240 − 60t = 0, so t = 4, which is **1 p.m.** Then N(4) = 960 − 480 = **480 visitors**.

| Point | What earns it |
|---|---|
| 1 | N′(1.5) = 150 with units of visitors per hour |
| 1 | Interpretation in (a) or (b) naming the quantity, the time, the direction and the rate with units (both must be correct for this point) |
| 1 | Computes N(2.5) − N(1.5) = 120 and explains that a derivative is an instantaneous rate, not an exact change over an hour |
| 1 | t = 4 from N′(t) = 0, stated as 1 p.m., with 480 visitors |

A model that gives non-whole numbers of visitors is acceptable here; you do not need to round in (c).
</details>

## Question 6 (constructed response · core)

The thickness of ice on a lake, I(t) centimetres, is measured t days after the start of a cold spell. I is differentiable.

| t (days) | 0 | 6 | 10 | 16 | 20 |
|---|---|---|---|---|---|
| I(t) (cm) | 2.0 | 5.0 | 6.6 | 8.4 | 9.2 |

(a) Use the data to estimate I′(13). Show your working and give units.
(b) Interpret your answer to (a) in context. Then give the rate in millimetres per day.
(c) Find the average rate of change of I over 0 ≤ t ≤ 20. Explain why it is not the same as your estimate in (a).
(d) What do the data suggest about the sign of I″(t)? Explain what this means for the ice.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Use t = 10 and t = 16, the closest values around 13: I′(13) ≈ (8.4 − 6.6)/(16 − 10) = 1.8/6 = **0.3 cm per day**.

**(b)** On day 13, the thickness of the ice is increasing at a rate of about 0.3 centimetres per day. That is **3 millimetres per day**.

**(c)** (9.2 − 2.0)/(20 − 0) = 7.2/20 = **0.36 cm per day**. This is an average over 20 days, while I′(13) is the rate at a single day. The two need not match because the growth rate changes during the period.

**(d)** The average rates over successive intervals are 0.5, 0.4, 0.3 and 0.2 cm per day. They are decreasing, which suggests I′ is decreasing, so **I″(t) < 0**. In context, the ice is still getting thicker, but more slowly as time passes.

| Point | What earns it |
|---|---|
| 1 | Difference quotient using t = 10 and t = 16, giving 0.3, with cm per day |
| 1 | Interpretation with day 13, "increasing", rate and units; and 3 mm per day |
| 1 | Average rate 0.36 cm per day, with the distinction between an interval and an instant |
| 1 | I″ negative, supported by the decreasing interval rates, and explained as thickening more slowly |

Using any other pair of points for (a) is acceptable only if justified, but t = 10 and t = 16 give the best estimate because they are closest to 13.
</details>

## Question 7 (constructed response · stretch)

A car's tank holds F litres of fuel after the car has travelled x kilometres on a journey, so F = f(x). It is given that f′(150) = −0.08.

(a) State the units of f′(150) and interpret f′(150) = −0.08 in context.
(b) A student writes: "After 150 km there are 0.08 litres of fuel left." Explain the error.
(c) Estimate how much fuel the car uses in the next 10 km after the 150 km mark.
(d) At the moment the car passes the 150 km mark, it is travelling at a steady 90 km per hour. Find the rate of change of fuel with respect to **time** at that moment. Show how the units combine.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Units: litres per kilometre. After 150 km of the journey, the amount of fuel in the tank is decreasing at a rate of 0.08 litres per kilometre travelled.

**(b)** The student has read the derivative as a function value. The amount of fuel left after 150 km is f(150), which is not given. f′(150) is a rate, the fuel used per kilometre at that point.

**(c)** Change ≈ f′(150) × 10 = −0.08 × 10 = −0.8. The car uses about **0.8 litres**. This is an estimate, because the rate may change over the 10 km.

**(d)** The input x is now changing with time at dx/dt = 90 km per hour. Then

dF/dt = (dF/dx)(dx/dt) = (−0.08 litres per km) × (90 km per hour) = **−7.2 litres per hour**.

The kilometres cancel, leaving litres per hour. At that moment the fuel in the tank is decreasing at 7.2 litres per hour.

| Point | What earns it |
|---|---|
| 1 | Units litres per km, with an interpretation that says "decreasing" (or "changing at −0.08") and names 150 km |
| 1 | Explains that f′(150) is a rate, while the amount left is f(150) |
| 1 | Estimates about 0.8 litres used and says it is approximate |
| 1 | −7.2 litres per hour, with the units shown cancelling (or the chain rule stated) |

Common wrong answers in (d): 0.08 ÷ 90 ≈ 0.00089 or 90 ÷ 0.08 = 1125. Neither has units of litres per hour. Checking units first avoids both.
</details>

## How did you do?

- **Q1, Q3 or Q7(a) wrong:** revisit "Units of a derivative" and Figure 1 in the [study guide](/advanced-course-resources/calculus-ab/4-1-interpreting-meaning-derivative-context-study-guide/).
- **Q2, Q5(a) or Q5(b) wrong:** reread "Writing an interpretation sentence" and Worked example 1.
- **Q5(c), Q6(c) or Q7(b) wrong:** see the misconceptions about f(a), average rates and exact changes.
- **Q4 or Q6(d) wrong:** redo Worked example 3 on second derivatives.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/4-1-interpreting-meaning-derivative-context-checklist/).
