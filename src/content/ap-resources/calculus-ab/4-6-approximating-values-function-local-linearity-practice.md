---
resourceId: "mb-ap-calcab-4.6-practice"
title: "Local Linearity and Linearization: Practice Questions (Calculus AB 4.6)"
description: "Seven original Marlbridge practice questions on tangent line approximations, linearization and overestimates or underestimates, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 4
topics: ["4.6"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Writing the equation of a tangent line"
  - "Second derivatives"
prerequisiteResources: ["mb-ap-calcab-4.6-study-guide"]
learningObjectives:
  - "Write a linearization and use it to estimate a function value"
  - "Decide whether a tangent line estimate is an overestimate or an underestimate, with a reason"
  - "Explain in context how an estimate compares with the actual value"
  - "Judge when a tangent line estimate is unreliable"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Where an actual value is given, it is only for comparison with your estimate."
related: ["mb-ap-calcab-4.6-study-guide", "mb-ap-calcab-4.6-revision-notes", "mb-ap-calcab-4.6-checklist"]
next: "mb-ap-calcab-4.6-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, every function is differentiable where it is used, and every context is fictional. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

A differentiable function f has f(4) = 7 and f′(4) = −2. What is the estimate of f(4.3) given by the tangent line to the graph of f at x = 4?

- (A) 6.4
- (B) 7.6
- (C) −0.6
- (D) −1.6

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** L(x) = 7 − 2(x − 4). So f(4.3) ≈ L(4.3) = 7 − 2(0.3) = 7 − 0.6 = 6.4.

- (B) adds 0.6 instead of subtracting it: it ignores the negative slope.
- (C) is only the estimated change, f′(4)(0.3). It forgets to add the starting value f(4) = 7.
- (D) uses x instead of (x − 4): 7 − 2(4.3) = −1.6.
</details>

## Question 2 (multiple choice · core)

Let g(x) = √(1 + 3x). Which of the following is the linearization of g at x = 1?

- (A) L(x) = 2 + (3/4)(x − 1)
- (B) L(x) = 2 + (1/4)(x − 1)
- (C) L(x) = 2 + (3/4)x
- (D) L(x) = (3/4)(x − 1)

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** g(1) = √4 = 2. By the chain rule, g′(x) = 3/(2√(1 + 3x)), so g′(1) = 3/(2 × 2) = 3/4. Then L(x) = g(1) + g′(1)(x − 1) = 2 + (3/4)(x − 1).

- (B) forgets the factor 3 from the chain rule: 1/(2√4) = 1/4.
- (C) uses x in place of (x − 1), so the line does not pass through (1, 2).
- (D) leaves out g(1) = 2, so the line passes through (1, 0) instead of (1, 2).
</details>

## Question 3 (multiple choice · core)

A function f has f(2) = 10, f′(2) = 3 and f″(x) > 0 for all x. The tangent line at x = 2 is used to estimate f(2.5). Which statement is true?

- (A) The estimate is 11.5, and it is an overestimate.
- (B) The estimate is 11.5, and it is an underestimate.
- (C) The estimate is 11.5, and it is exact because f is increasing.
- (D) The estimate is 8.5, and it is an underestimate.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** L(2.5) = 10 + 3(0.5) = 11.5. Because f″ > 0, the graph bends upward and the tangent line lies below it, so 11.5 is less than f(2.5): an underestimate.

- (A) swaps the rule. Bending upward puts the line below the curve.
- (C) confuses increasing with straight. An increasing function can still bend, so the line and curve differ away from x = 2.
- (D) subtracts the change instead of adding it, even though the slope is positive.
</details>

## Question 4 (multiple choice · core)

T(t) is the temperature, in °C, of a loaf of bread t minutes after it comes out of an oven. At t = 10, T(10) = 78 and T′(10) = −2.4. Using the tangent line at t = 10, what is the best estimate of the temperature at t = 12.5?

- (A) 72 °C
- (B) 75.6 °C
- (C) 84 °C
- (D) 48 °C

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The step is 12.5 − 10 = 2.5 minutes. T(12.5) ≈ 78 + (−2.4)(2.5) = 78 − 6 = 72 °C.

- (B) uses a step of 1 minute instead of 2.5: 78 − 2.4.
- (C) adds 6 instead of subtracting it. The bread is cooling, so the temperature should fall.
- (D) multiplies the rate by 12.5 instead of the step 2.5: 78 − 2.4 × 12.5 = 48.
</details>

## Question 5 (constructed response · core)

Let f(x) = 1/x.

(a) Write the linearization of f at x = 5.
(b) Use it to estimate 1/4.9, as a decimal.
(c) Is your estimate an overestimate or an underestimate? Justify your answer using f″.
(d) The actual value of 1/4.9 is 0.20408 to five decimal places. Is this consistent with your answer to (c)?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** f(5) = 1/5 = 0.2. f′(x) = −1/x², so f′(5) = −1/25 = −0.04. **L(x) = 0.2 − 0.04(x − 5).**

**(b)** The step is 4.9 − 5 = −0.1. L(4.9) = 0.2 − 0.04(−0.1) = 0.2 + 0.004 = **0.204**.

**(c)** f″(x) = 2/x³, which is positive for x > 0, including every x between 4.9 and 5. So the graph bends upward near x = 5 and the tangent line lies below it. The estimate **0.204 is an underestimate**.

**(d)** 0.204 < 0.20408, so the estimate is slightly too low, which is consistent with (c). The error is about 0.00008.

| Point | What earns it |
|---|---|
| 1 | Correct f(5) and f′(5) = −1/25 in the linearization |
| 1 | L(4.9) = 0.204, with the negative step handled correctly |
| 1 | Underestimate, justified by f″(x) = 2/x³ > 0 near x = 5 (or "the graph bends upward, so the line is below it") |
| 1 | Correct comparison in (d) |
</details>

## Question 6 (constructed response · core)

H(t) is the height, in metres, of a young tree t years after it was planted. At t = 9 the tree is 8 m tall, and for t > 0 its growth rate is H′(t) = 1.2/√t metres per year.

(a) Find H′(9) and explain its meaning in context.
(b) Use the tangent line at t = 9 to estimate the height of the tree at t = 9.5.
(c) Is the estimate in (b) too high or too low? Justify your answer.
(d) A student uses the same line to estimate the height at t = 15 and gets 10.4 m. Explain why this estimate is less reliable than the one in (b), and say whether it is too high or too low.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** H′(9) = 1.2/√9 = 1.2/3 = **0.4 m per year**. At 9 years after planting, the tree's height is increasing at 0.4 metres per year.

**(b)** L(t) = 8 + 0.4(t − 9). H(9.5) ≈ 8 + 0.4(0.5) = **8.2 m**. About nine and a half years after planting, the tree is approximately 8.2 m tall.

**(c)** H″(t) = −0.6/t^(3/2), which is negative for all t > 0. The growth rate is decreasing, so the graph of H bends downward and the tangent line lies above it. The estimate of 8.2 m is **too high** (an overestimate).

**(d)** 15 is 6 years from 9, while 9.5 is only half a year away. Over 6 years the growth rate falls a lot (from 0.4 m per year to 1.2/√15, about 0.31 m per year), but the line assumes it stays at 0.4. So the error is much bigger. Since H″ < 0 on the whole interval, 10.4 m is still an **overestimate**, and by more than in (b).

| Point | What earns it |
|---|---|
| 1 | H′(9) = 0.4 with units and a correct interpretation (rate of change of height at t = 9) |
| 1 | Estimate 8.2 m from a correct linearization |
| 1 | Overestimate, justified by H″ < 0 (or by H′ decreasing) |
| 1 | Explains that the step is much larger, so the rate changes more over the interval, and states that 10.4 m is an overestimate |
</details>

## Question 7 (constructed response · stretch)

Let f(x) = x³ − 3x + 1.

(a) Write the linearization L(x) of f at x = 0, and use it to estimate f(0.2) and f(−0.2).
(b) Find f″(x). Use it to decide whether each estimate in (a) is an overestimate or an underestimate, and explain why the two answers differ.
(c) The equation f(x) = 0 has a solution between 0 and 1. Solve L(x) = 0 to estimate it. Then evaluate f at your estimate and comment on the result.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** f(0) = 1. f′(x) = 3x² − 3, so f′(0) = −3. **L(x) = 1 − 3x.** Then f(0.2) ≈ 1 − 0.6 = **0.4** and f(−0.2) ≈ 1 + 0.6 = **1.6**.

**(b)** f″(x) = 6x. For 0 < x ≤ 0.2, f″(x) > 0: the graph bends upward, the tangent line is below it, so 0.4 is an **underestimate**. For −0.2 ≤ x < 0, f″(x) < 0: the graph bends downward, the line is above it, so 1.6 is an **overestimate**. The answers differ because f″ changes sign at x = 0, the point of tangency. (Check: f(0.2) = 0.408 and f(−0.2) = 1.592.)

**(c)** 1 − 3x = 0 gives x = **1/3**. Then f(1/3) = 1/27 − 1 + 1 = 1/27, about 0.037. This is close to 0 but not equal to it, so x = 1/3 is an approximate solution, not an exact one. The value is positive and f is decreasing there (f′(1/3) = −8/3 < 0), so the actual solution is a little more than 1/3.

| Point | What earns it |
|---|---|
| 1 | L(x) = 1 − 3x with both estimates, 0.4 and 1.6 |
| 1 | f″(x) = 6x, with underestimate for x = 0.2 and overestimate for x = −0.2, each justified by the sign of f″ on that side |
| 1 | Explains that f″ changes sign at the point of tangency, so the sides behave differently |
| 1 | x = 1/3 from L(x) = 0, with f(1/3) = 1/27 and a comment that it is close to, but not exactly, a solution |
</details>

## How did you do?

- **Q1, Q2 or Q5(a)–(b) wrong:** revisit "The linearization formula" and Worked example 1 in the [study guide](/advanced-course-resources/calculus-ab/4-6-approximating-values-function-local-linearity-study-guide/).
- **Q3, Q5(c) or Q7(b) wrong:** reread "Overestimate or underestimate?" and Figure 1.
- **Q4 or Q6 wrong:** redo Worked example 2 (context) and Worked example 3.
- **Q6(d) or Q7(c) wrong:** look again at the error table in Worked example 1: estimates get worse further from a.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/4-6-approximating-values-function-local-linearity-checklist/).
