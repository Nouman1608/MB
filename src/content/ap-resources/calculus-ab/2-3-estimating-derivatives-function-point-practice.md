---
resourceId: "mb-ap-calcab-2.3-practice"
title: "Estimating Derivatives of a Function at a Point: Practice Questions (Calculus AB 2.3)"
description: "Seven original Marlbridge practice questions on estimating derivatives from tables, tangent lines and a calculator, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 2
topics: ["2.3"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "The derivative at a point as a limit of a difference quotient (Topic 2.2)"
prerequisiteResources: ["mb-ap-calcab-2.3-study-guide"]
learningObjectives:
  - "Estimate a derivative at a point from a table, writing the difference quotient with values"
  - "Estimate a derivative from a tangent line drawn on a graph"
  - "Compare forward, backward and symmetric estimates and justify a choice"
  - "Use a calculator to find a derivative at a point and record the setup"
  - "Interpret a derivative estimate in context with units"
skills: ["1", "2", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Questions 1–5 and 7: no calculator. Question 6: a graphing calculator is needed. Give calculator answers correct to the decimal places stated."
related: ["mb-ap-calcab-2.3-study-guide", "mb-ap-calcab-2.3-revision-notes", "mb-ap-calcab-2.3-checklist"]
next: "mb-ap-calcab-2.3-checklist"
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
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions: **no calculator** for Questions 1–5 and 7; a graphing calculator for Question 6. All functions, contexts and data are invented for practice. Notation: f′(a) is the derivative of f at x = a, and ≈ means "approximately". This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

Selected values of a differentiable function f are shown.

| x | 1 | 1.5 | 2 | 2.5 | 3 |
|---|---|---|---|---|---|
| f(x) | 4.0 | 4.6 | 5.5 | 6.9 | 8.7 |

Using the data points on either side of x = 2, what is the best estimate of f′(2)?

- (A) 1.15
- (B) 2.3
- (C) 2.75
- (D) 4.6

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Use the neighbours x = 1.5 and x = 2.5: f′(2) ≈ (f(2.5) − f(1.5))/(2.5 − 1.5) = (6.9 − 4.6)/1 = 2.3.

- (A) divides by 2, the number of table steps, instead of the change in x, which is 1.
- (C) is f(2)/2 = 5.5/2. A derivative is a change in f over a change in x, not f(a)/a.
- (D) divides by 0.5, the width of one step, although the interval [1.5, 2.5] has width 1.
</details>

## Question 2 (multiple choice · core)

The graph of a function h is drawn with its tangent line at x = −1. The tangent line passes through the points (−3, 7) and (2, −3). What is the best estimate of h′(−1)?

- (A) −10
- (B) −2
- (C) −1/2
- (D) 2

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** h′(−1) is the gradient of the tangent: (−3 − 7)/(2 − (−3)) = −10/5 = −2.

- (A) uses the rise, −10, without dividing by the run, 5.
- (C) divides run by rise, 5/(−10), which is the reciprocal of the gradient.
- (D) loses the sign. The line falls from (−3, 7) to (2, −3), so the gradient must be negative.
</details>

## Question 3 (multiple choice · core)

W(t) is the number of litres of water in a rain barrel t hours after midnight. A student estimates W′(6) ≈ −1.8. Which statement is the best interpretation?

- (A) At 6 a.m., the barrel holds 1.8 litres less than it did at midnight.
- (B) At 6 a.m., the amount of water in the barrel is decreasing at about 1.8 litres per hour.
- (C) At 6 a.m., the barrel contains about −1.8 litres of water.
- (D) At 6 a.m., the water is decreasing at about 1.8 hours per litre.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** W′(6) is a rate of change at the instant t = 6. Its units are litres per hour, and the negative sign means the amount is decreasing.

- (A) describes a total change over the six hours since midnight. A derivative is a rate at one instant, not an accumulated change.
- (C) treats the derivative as a value of W. An amount of water cannot be negative; the sign belongs to the rate.
- (D) inverts the units. Units of W′ are units of W per unit of t: litres per hour.
</details>

## Question 4 (multiple choice · core)

Let f(x) = x³. Using h = 0.1, what is the symmetric difference quotient estimate of f′(2)? (You may use 2.1³ = 9.261 and 1.9³ = 6.859.)

- (A) 11.41
- (B) 12.01
- (C) 12.61
- (D) 24.02

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** (f(2.1) − f(1.9))/(2 × 0.1) = (9.261 − 6.859)/0.2 = 2.402/0.2 = 12.01. (The exact value, from Topic 2.2 or the power rule in Topic 2.5, is 12. The symmetric estimate is very close.)

- (A) is the backward quotient, (8 − 6.859)/0.1 = 11.41.
- (C) is the forward quotient, (9.261 − 8)/0.1 = 12.61.
- (D) divides by h = 0.1 instead of 2h = 0.2. The interval [1.9, 2.1] has width 0.2.
</details>

## Question 5 (table · core)

A delivery drone's altitude A(t), in metres, is recorded t seconds after take-off. A is differentiable.

| t (seconds) | 0 | 4 | 6 | 10 | 15 |
|---|---|---|---|---|---|
| A(t) (metres) | 12 | 30 | 37 | 44 | 41 |

(a) Estimate A′(5). Show the difference quotient you use and give units.
(b) Estimate A′(12) and interpret it in context.
(c) Give two different estimates of A′(6) using the table, and say which you would report and why.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** 5 lies between the table values 4 and 6. A′(5) ≈ (A(6) − A(4))/(6 − 4) = (37 − 30)/2 = **3.5 metres per second**.

**(b)** 12 lies between 10 and 15. A′(12) ≈ (A(15) − A(10))/(15 − 10) = (41 − 44)/5 = **−0.6 metres per second**. At t = 12 seconds, the drone's altitude is decreasing at about 0.6 metres per second; it is descending slowly.

**(c)** Any two of:

- Backward, [4, 6]: (37 − 30)/2 = 3.5 m/s
- Forward, [6, 10]: (44 − 37)/4 = 1.75 m/s
- Both neighbours, [4, 10]: (44 − 30)/6 ≈ 2.333 m/s

Report the estimate over [4, 10]. It has t = 6 inside the interval, so it uses information from both sides. The rate is clearly falling (3.5 before t = 6, 1.75 after), so a one-sided estimate is biased one way or the other. Choosing [4, 6] or [6, 10] with a reason is also acceptable.

| Point | What earns it |
|---|---|
| 1 | (a) Difference quotient (37 − 30)/(6 − 4) shown, value 3.5 |
| 1 | Correct units (metres per second) in (a) or (b) |
| 1 | (b) Value −0.6 with an interpretation naming t = 12, decreasing altitude and the rate |
| 1 | (c) Two correct estimates and a reason for the choice |

A bare number with no quotient earns no mark for (a). An interval that does not contain the time, such as [10, 15] for A′(6), earns no mark for that estimate.
</details>

## Question 6 (constructed response · core, calculator)

Let f(x) = √(1 + x³). Note that f(2) = 3.

(a) Use your calculator for arithmetic only to find the symmetric difference quotient estimate of f′(2) with h = 0.1. Give your answer to 4 decimal places.
(b) Find the forward difference quotient estimate of f′(2) with h = 0.1, to 4 decimal places.
(c) Use your calculator's numerical derivative feature to find f′(2). Write your answer as you would on an exam.
(d) Which of (a) and (b) is closer to (c)? Explain why this is expected.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** f(2.1) = √(1 + 9.261) ≈ 3.203280 and f(1.9) = √(1 + 6.859) ≈ 2.803391.

(f(2.1) − f(1.9))/0.2 ≈ 0.399889/0.2 ≈ **1.9994**.

If you round f(2.1) and f(1.9) to 4 decimal places first, you get (3.2033 − 2.8034)/0.2 = 1.9995. Both are accepted, but storing full values in the calculator avoids this drift.

**(b)** (f(2.1) − f(2))/0.1 ≈ (3.203280 − 3)/0.1 ≈ **2.0328**.

**(c)** **f′(2) = 2.000** (calculator). Write the setup f′(2), not calculator keystrokes.

**(d)** The symmetric estimate, 1.9994, is within 0.001 of 2.000. The forward estimate, 2.0328, is off by about 0.03. This is expected: the symmetric quotient uses points on both sides of x = 2, so the errors on each side largely cancel, while the forward quotient only sees the function to the right, where it is getting steeper.

| Point | What earns it |
|---|---|
| 1 | (a) Correct symmetric quotient set up with 2h = 0.2, value 1.9994 (or 1.9995) |
| 1 | (b) Forward quotient 2.0328 |
| 1 | (c) f′(2) = 2.000, with the setup f′(2) written |
| 1 | (d) Identifies the symmetric estimate as closer, with a reason about using both sides of x = 2 |
</details>

## Question 7 (constructed response · stretch)

Selected values of a differentiable function k are shown. The spacing is even.

| x | 0 | 0.5 | 1.0 | 1.5 | 2.0 |
|---|---|---|---|---|---|
| k(x) | 3.0 | 3.8 | 4.2 | 4.3 | 4.1 |

(a) For any function f and step h > 0, show that the symmetric difference quotient at a equals the average of the forward and backward quotients at a.
(b) Find the backward, forward and symmetric estimates of k′(1) from the table, and confirm your result in (a).
(c) A student estimates k′(1) as (k(2) − k(0))/(2 − 0) = 0.55. Explain why this is a less reliable estimate than the symmetric one in (b).
(d) Estimate k′(1.75) and say what its sign tells you about k.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Average of forward and backward:

½ × [(f(a + h) − f(a))/h + (f(a) − f(a − h))/h] = ½ × (f(a + h) − f(a − h))/h = (f(a + h) − f(a − h))/(2h).

The f(a) terms cancel, leaving the symmetric quotient.

**(b)** With h = 0.5:

- Backward: (4.2 − 3.8)/0.5 = 0.8
- Forward: (4.3 − 4.2)/0.5 = 0.2
- Symmetric: (4.3 − 3.8)/1.0 = **0.5**

Average of 0.8 and 0.2 is 0.5, as (a) predicts.

**(c)** The student's interval [0, 2] has width 2: twice the width of [0.5, 1.5] used in (b), and four times the step of 0.5. Over it, the gradient of k changes a great deal: the secant gradients on the four half-unit intervals are 1.6, 0.8, 0.2 and −0.4. A wide interval averages these very different rates, so it can be far from the rate at the single point x = 1. The closest data either side of 1 give the better estimate.

**(d)** k′(1.75) ≈ (k(2.0) − k(1.5))/(2.0 − 1.5) = (4.1 − 4.3)/0.5 = **−0.4**. The negative sign suggests k is decreasing near x = 1.75.

| Point | What earns it |
|---|---|
| 1 | (a) Correct algebra showing the f(a) terms cancel |
| 1 | (b) All three estimates correct (0.8, 0.2, 0.5) |
| 1 | (c) Explains that the wider interval averages rates that vary a lot, so it is less reliable at x = 1 |
| 1 | (d) Quotient over [1.5, 2.0] giving −0.4, and "decreasing" |

Acceptable alternative for (a): start from the symmetric quotient, add and subtract f(a) in the numerator, and split it into two fractions.
</details>

## How did you do?

- **Q1 or Q5 wrong:** revisit "Estimating from a table" and Worked example 1 in the [study guide](/advanced-course-resources/calculus-ab/2-3-estimating-derivatives-function-point-study-guide/).
- **Q2 wrong:** redo Worked example 2 and read two points on the tangent, not the curve.
- **Q3 wrong:** reread "Writing a complete answer": a derivative is a rate at an instant, with units of f per unit of x.
- **Q4, Q6 or Q7 wrong:** see "Three difference quotients", Figure 1 and Worked example 3.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/2-3-estimating-derivatives-function-point-checklist/).
