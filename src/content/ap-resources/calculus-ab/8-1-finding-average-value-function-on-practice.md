---
resourceId: "mb-ap-calcab-8.1-practice"
title: "Finding the Average Value of a Function on an Interval: Practice Questions (Calculus AB 8.1)"
description: "Seven original Marlbridge practice questions on the average value of a function from formulas, tables and given integrals, with and without a calculator, with full solutions."
course: "calculus-ab"
unit: 8
topics: ["8.1"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Evaluating definite integrals with antiderivatives (Topic 6.7)"
  - "Trapezoidal sums from tables (Topic 6.2)"
prerequisiteResources: ["mb-ap-calcab-8.1-study-guide"]
learningObjectives:
  - "Find average values from formulas, tables and given integral values"
  - "Find a value c where a function equals its average value, and justify that one exists"
  - "Distinguish average value from average rate of change, with units, in context"
skills: ["1", "2", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "No calculator except in Questions 4 and 6, where a graphing calculator is allowed. Give calculator answers correct to three decimal places."
related: ["mb-ap-calcab-8.1-study-guide", "mb-ap-calcab-8.1-revision-notes", "mb-ap-calcab-8.1-checklist"]
next: "mb-ap-calcab-8.1-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator except in Questions 4 and 6** (graphing calculator allowed, radian mode, answers correct to three decimal places), exact answers elsewhere, and every function is continuous on the interval used. Notation: ∫ (a to b) f(x) dx means the definite integral of f(x) from x = a to x = b. The contexts in Questions 2 and 6 are invented. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

What is the average value of f(x) = 4x³ + 1 on the interval [0, 2]?

- (A) 9
- (B) 16
- (C) 17
- (D) 18

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** f_avg = (1/2) ∫ (0 to 2) (4x³ + 1) dx. An antiderivative is x⁴ + x, so the integral is (16 + 2) − 0 = 18. Divide by the length 2: 18/2 = 9.

- (B) is the average rate of change, (f(2) − f(0))/2 = (33 − 1)/2 = 16. That uses only the end values.
- (C) is the middle of the range, (f(0) + f(2))/2 = (1 + 33)/2 = 17. That works only for linear functions.
- (D) is the integral itself. It forgets to divide by b − a = 2.
</details>

## Question 2 (multiple choice · core)

The wind speed W(t) at a weather station, in kilometres per hour, is recorded at selected times t, in hours.

| t (hours) | 0 | 2 | 4 | 8 | 10 |
|---|---|---|---|---|---|
| W(t) (km/h) | 12 | 16 | 20 | 14 | 30 |

Using a trapezoidal sum with the subintervals given by the table, what is the estimate of the average wind speed over 0 ≤ t ≤ 8?

- (A) 13.2 km/h
- (B) 15.5 km/h
- (C) 16.5 km/h
- (D) 18.4 km/h

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Only the interval [0, 8] is needed. Trapezoids: 2 × (12 + 16)/2 = 28; 2 × (16 + 20)/2 = 36; 4 × (20 + 14)/2 = 68. The total is 132 km. Divide by 8 hours: 132/8 = 16.5 km/h.

- (A) divides the correct total, 132, by 10 instead of 8, using the length of the whole table instead of the interval asked for.
- (B) is the plain mean of the four readings from t = 0 to 8, (12 + 16 + 20 + 14)/4. It ignores that the last gap is 4 hours, twice as long as the others.
- (D) is the plain mean of all five readings, (12 + 16 + 20 + 14 + 30)/5. It uses a value outside the interval and ignores the unequal gaps.
</details>

## Question 3 (multiple choice · core)

The average value of a function f on [0, 2] is 6, and the average value of f on [2, 8] is 2. What is the average value of f on [0, 8]?

- (A) 3
- (B) 4
- (C) 8
- (D) 24

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Turn each average back into an integral: ∫ (0 to 2) f(x) dx = 6 × 2 = 12 and ∫ (2 to 8) f(x) dx = 2 × 6 = 12. So ∫ (0 to 8) f(x) dx = 24, and the average value on [0, 8] is 24/8 = 3.

- (B) averages the two averages, (6 + 2)/2. That would be right only if the two intervals had equal lengths. Here the second interval is three times as long, so its average counts three times as much.
- (C) adds the two averages. Averages do not add.
- (D) is the total integral on [0, 8]. It forgets to divide by 8.
</details>

## Question 4 (multiple choice · calculator · core)

What is the average value of f(x) = ln(x² + 1) on [0, 3]? A graphing calculator is allowed.

- (A) 0.768
- (B) 1.135
- (C) 1.179
- (D) 3.406

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** f_avg = (1/3) ∫ (0 to 3) ln(x² + 1) dx. The calculator gives ∫ (0 to 3) ln(x² + 1) dx ≈ 3.40585, so f_avg ≈ 3.40585/3 ≈ 1.135.

- (A) is the average rate of change, (ln 10 − ln 1)/3 ≈ 0.768.
- (C) is f at the midpoint of the interval, ln(1.5² + 1) = ln 3.25 ≈ 1.179. The average value is not usually the value at the midpoint.
- (D) is the integral before dividing by 3.
</details>

## Question 5 (constructed response · core)

Let f(x) = 1/x².

(a) Find the average value of f on [1, 4]. Show your work.
(b) Find the value of c in [1, 4] for which f(c) equals the average value from (a).
(c) Without solving any equation, explain why such a value c must exist.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** f_avg = (1/(4 − 1)) ∫ (1 to 4) x⁻² dx. An antiderivative of x⁻² is −1/x, so the integral is (−1/4) − (−1) = 3/4. Then f_avg = (1/3)(3/4) = **1/4**.

**(b)** Solve 1/c² = 1/4. So c² = 4 and c = ±2. Only c = **2** lies in [1, 4].

**(c)** f is continuous on [1, 4], with f(1) = 1 and f(4) = 1/16. Since f is decreasing there, every value of f on [1, 4] lies between 1/16 and 1, and so does the average value 1/4. By the Intermediate Value Theorem, f takes the value 1/4 somewhere in [1, 4].

| Point | What earns it |
|---|---|
| 1 | Correct setup with the factor 1/3 and the integral of x⁻² from 1 to 4 |
| 1 | Correct antiderivative and evaluation, giving the average value 1/4 |
| 1 | c = 2, with c = −2 rejected because it is outside [1, 4] |
| 1 | Uses continuity and the Intermediate Value Theorem, with the average value between f(4) and f(1) |

Acceptable alternative for (c): any continuous function takes every value between its minimum and maximum on [a, b], and its average value lies between them.
</details>

## Question 6 (constructed response · calculator · core)

The depth of water in a tidal channel is modelled by D(t) = 3 + 1.2 sin(πt/6) metres, where t is the time in hours after the depth was first measured, for 0 ≤ t ≤ 4. A graphing calculator is allowed.

(a) Find the average depth of the water over 0 ≤ t ≤ 4. Give units.
(b) Find the average rate of change of the depth over 0 ≤ t ≤ 4. Give units.
(c) Explain, in context, what each of your answers to (a) and (b) means.
(d) Find the time t in [0, 4] at which the depth equals the average depth from (a).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Average depth = (1/4) ∫ (0 to 4) D(t) dt. The calculator gives ∫ (0 to 4) D(t) dt ≈ 15.4377, so the average depth is ≈ **3.859 metres**. (By hand: 3 + 27/(10π).)

**(b)** (D(4) − D(0))/(4 − 0) = (4.03923 − 3)/4 ≈ **0.260 metres per hour**.

**(c)** Over the 4 hours, the water was 3.859 m deep on average: a constant depth of 3.859 m for 4 hours would give the same value of ∫ (0 to 4) D(t) dt as the real, changing depth. Over the same 4 hours, the depth rose by about 0.260 m per hour on average; this compares only the depth at the start with the depth at the end.

**(d)** Solve D(t) = 3.85944 with a calculator: t ≈ **1.525 hours**. (The equation has a second solution, t ≈ 4.475, but it is outside [0, 4].)

| Point | What earns it |
|---|---|
| 1 | Average depth: (1/4) ∫ (0 to 4) D(t) dt ≈ 3.859 m, setup shown |
| 1 | Average rate of change ≈ 0.260 m per hour, with units |
| 1 | Correct meaning of both values in context, with "average depth" in metres and "average rate" in metres per hour |
| 1 | t ≈ 1.525, from an equation D(t) = (answer to (a)) |

Units matter here: an answer of "3.859 metres per hour" for (a) loses the units mark, because an average value has the units of D.
</details>

## Question 7 (constructed response · stretch)

A function h is differentiable, and h′ is continuous. You are told that h(2) = 9, h(10) = −3 and ∫ (2 to 10) h(x) dx = 20.

(a) Find the average value of h′ on [2, 10].
(b) Find the average value of h on [2, 10].
(c) A student says: "The average value of h on [2, 10] is (h(2) + h(10))/2 = 3." Explain why this is not justified.
(d) Must there be a value c in (2, 10) with h(c) equal to your answer to (b)? Justify your answer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Average value of h′ = (1/8) ∫ (2 to 10) h′(x) dx = (1/8)(h(10) − h(2)), by the Fundamental Theorem. So it is (1/8)(−3 − 9) = **−3/2**.

**(b)** Average value of h = (1/8) ∫ (2 to 10) h(x) dx = 20/8 = **5/2**.

**(c)** The average of the two end values uses only two points. The average value depends on every value of h on [2, 10], through the integral. The two agree only when h is linear, and nothing says h is linear. Here the integral gives 5/2, not 3.

**(d)** Yes. h is differentiable, so it is continuous on [2, 10]. Since h(10) = −3 < 5/2 < 9 = h(2), the Intermediate Value Theorem gives a c in (2, 10) with h(c) = 5/2.

| Point | What earns it |
|---|---|
| 1 | Uses ∫ (2 to 10) h′(x) dx = h(10) − h(2) to get −3/2 |
| 1 | Average value of h is 20/8 = 5/2 |
| 1 | Explains that the end-value average ignores the values in between (true only for linear h) |
| 1 | Continuity of h, 5/2 between h(10) and h(2), and the Intermediate Value Theorem named |

Note that (a) is the average rate of change of h. Parts (a) and (b) show again that averaging h′ and averaging h are different questions.
</details>

## How did you do?

- **Q1 or Q5 wrong:** redo Worked example 1 in the [study guide](/advanced-course-resources/calculus-ab/8-1-finding-average-value-function-on-study-guide/), and check you divided by b − a.
- **Q2 wrong:** see Worked example 2: weight each value by its width, and use only the interval asked for.
- **Q3 wrong:** go back to "The definition": average × length = integral.
- **Q4 or Q6 wrong:** see "With technology", and the units rule in "The definition".
- **Q6(c) or Q7 wrong:** reread "Average value or average rate of change?" and Figure 2.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/8-1-finding-average-value-function-on-checklist/).
