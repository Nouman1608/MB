---
resourceId: "mb-ap-calcbc-7.5-practice"
title: "Approximating Solutions Using Euler’s Method: Practice Questions (Calculus BC 7.5)"
description: "Seven original Marlbridge practice questions on Euler’s method: single and repeated steps, backward steps, concavity and error, and a context problem, with rubrics."
course: "calculus-bc"
unit: 7
topics: ["7.5"]
resourceType: "practice-questions"
calculusScope: "bc-only"
prerequisites:
  - "Tangent line approximation (Topic 4.6) and differential equations (Topics 7.1–7.4)"
prerequisiteResources: ["mb-ap-calcbc-7.5-study-guide"]
learningObjectives:
  - "Carry out one or more Euler steps accurately, forwards and backwards"
  - "Decide whether an Euler estimate is too high or too low using the second derivative"
  - "Compare Euler estimates with a tangent line and with an exact solution"
  - "Apply Euler’s method in context and interpret the result with units"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Questions 1–5: no calculator. Questions 6 and 7: calculator allowed; keep full values between steps and give final decimals to 3 decimal places."
related: ["mb-ap-calcbc-7.5-study-guide", "mb-ap-calcbc-7.5-revision-notes", "mb-ap-calcbc-7.5-checklist"]
next: "mb-ap-calcbc-7.5-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC-only practice."
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. **BC-only material.** Assumptions: no calculator for Questions 1–5; in Questions 6 and 7 a calculator may be used, and final decimals should be given to 3 decimal places. Contexts and data are invented. "Euler’s method with step size h" always means yₙ₊₁ = yₙ + h · (slope at (xₙ, yₙ)).

## Question 1 (multiple choice · foundation)

Let y = f(x) be the solution of dy/dx = y² − x with f(1) = 2. Using one step of Euler’s method with step size 0.1, what is the approximation of f(1.1)?

- (A) 0.3
- (B) 2.29
- (C) 2.3
- (D) 5

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The slope at (1, 2) is 2² − 1 = 3. So f(1.1) ≈ 2 + 0.1 × 3 = 2.3.

- (A) is the change in y, 0.1 × 3. You must add it to the starting value 2.
- (B) uses the slope at x = 1.1 with the old y-value: 4 − 1.1 = 2.9, giving 2.29. The slope must be taken at the starting point (1, 2).
- (D) forgets to multiply by the step size: 2 + 3 = 5.
</details>

## Question 2 (multiple choice · core)

Let y = f(x) be the solution of dy/dx = 1 + xy with f(0) = 2. Using Euler’s method with two steps of equal size, what is the approximation of f(1)?

- (A) 3
- (B) 3.5
- (C) 3.625
- (D) 4.75

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** h = 0.5.
Step 1: slope at (0, 2) is 1 + 0 = 1, so y ≈ 2 + 0.5(1) = 2.5 at x = 0.5.
Step 2: slope at (0.5, 2.5) is 1 + 0.5 × 2.5 = 2.25, so y ≈ 2.5 + 0.5(2.25) = 3.625 at x = 1.

- (A) is one step of size 1 (or reusing the first slope for both steps): 2 + 1 × 1 = 3. That ignores the change in slope.
- (B) uses the new x but the old y in step 2: slope 1 + 0.5 × 2 = 2, giving 2.5 + 1 = 3.5. Both coordinates must be updated.
- (D) forgets the step size in step 2: 2.5 + 2.25 = 4.75.
</details>

## Question 3 (multiple choice · core)

Let y = f(x) be the solution of dy/dx = 4 − y with f(0) = 1. Euler’s method with two steps of size 0.5 is used to approximate f(1). Which statement is true?

- (A) The approximation is 3.25, and it is an overestimate because the solution is concave down.
- (B) The approximation is 3.25, and it is an underestimate because the solution is increasing.
- (C) The approximation is 3.25, and it is an overestimate because dy/dx > 0.
- (D) The approximation is 4, and it is an overestimate because the solution is concave down.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Step 1: slope 4 − 1 = 3, so y ≈ 1 + 1.5 = 2.5 at x = 0.5. Step 2: slope 4 − 2.5 = 1.5, so y ≈ 2.5 + 0.75 = 3.25 at x = 1. Then d²y/dx² = −dy/dx = −(4 − y), which is negative while y < 4, so the solutions are concave down and the tangent steps lie above the curve: an overestimate. (The exact solution is y = 4 − 3e^(−x), with f(1) ≈ 2.896.)

- (B) has the right number but the wrong conclusion. Whether y is increasing does not decide over or under; concavity does.
- (C) reaches the right conclusion for the wrong reason. dy/dx > 0 says the solution is increasing, which says nothing about whether the tangent lines lie above or below it.
- (D) uses one step of size 1 (1 + 1 × 3 = 4), not two steps of 0.5.
</details>

## Question 4 (multiple choice · core)

Let y = f(x) be the solution of dy/dx = x − 3y through the point (2, 1). Using one step of Euler’s method with step size −0.2, what is the approximation of f(1.8)?

- (A) 0.2
- (B) 0.8
- (C) 1.2
- (D) 1.24

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The slope at (2, 1) is 2 − 3 = −1. With h = −0.2: f(1.8) ≈ 1 + (−0.2)(−1) = 1.2. Moving left along a line of slope −1 makes y go **up**.

- (A) is the change in y (+0.2), not the new value.
- (B) uses h = +0.2 by mistake: 1 + 0.2(−1) = 0.8. That would approximate f(2.2), not f(1.8).
- (D) uses the slope at x = 1.8 (1.8 − 3 = −1.2) instead of at the starting point.
</details>

## Question 5 (constructed response · core, no calculator)

Let y = f(x) be the particular solution of **dy/dx = 2y − x** with f(0) = 1.

(a) Write the tangent line to the graph of f at x = 0 and use it to approximate f(0.4).
(b) Use Euler’s method with two steps of equal size, starting at x = 0, to approximate f(0.4). Show your steps.
(c) Find d²y/dx² in terms of x and y.
(d) Is your answer to (b) an overestimate or an underestimate of f(0.4)? Justify your answer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Slope at (0, 1) is 2(1) − 0 = 2. Tangent line: y = 1 + 2x. So **f(0.4) ≈ 1 + 0.8 = 1.8**.

**(b)** h = 0.2.

| Step | (xₙ, yₙ) | Slope 2yₙ − xₙ | 0.2 × slope | New point |
|---|---|---|---|---|
| 1 | (0, 1) | 2 | 0.4 | (0.2, 1.4) |
| 2 | (0.2, 1.4) | 2.8 − 0.2 = 2.6 | 0.52 | (0.4, 1.92) |

**f(0.4) ≈ 1.92.**

**(c)** d²y/dx² = 2 dy/dx − 1 = 2(2y − x) − 1 = **4y − 2x − 1**.

**(d)** For 0 ≤ x ≤ 0.4 and y ≥ 1 (true along the steps and for the solution, which starts at 1 with positive slope and keeps increasing), 4y − 2x − 1 ≥ 4 − 0.8 − 1 = 2.2 > 0. At the starting point it equals 3. The solutions are concave up in this region, so the Euler segments lie below the curve: **1.92 is an underestimate**.

| Point | What earns it |
|---|---|
| 1 | Tangent line y = 1 + 2x and the estimate 1.8 |
| 1 | Correct first Euler step to (0.2, 1.4) |
| 1 | Correct second step, slope 2.6 at (0.2, 1.4), giving 1.92 |
| 1 | d²y/dx² = 4y − 2x − 1, with the chain rule applied to y |
| 1 | "Underestimate", justified by d²y/dx² > 0 (concave up) in the relevant region |

Total: 5 points. The (d) point needs the sign of d²y/dx², not just "y is increasing". For reference (not needed): the exact value is f(0.4) = 0.45 + 0.75e^0.8 ≈ 2.119, so both estimates are low, and Euler (1.92) beats the single tangent line (1.8).
</details>

## Question 6 (constructed response · core, calculator allowed)

During steady rain, water flows into a rain barrel from a roof at 8 litres per hour and leaks out of a small hole at 0.6√W litres per hour, where W is the volume of water in litres. So **dW/dt = 8 − 0.6√W**, with t in hours. At t = 0 the barrel holds 100 litres.

(a) Find the rate of change of W at t = 0. Include units.
(b) Use Euler’s method with three steps of 1 hour to approximate W(3).
(c) Find d²W/dt² in terms of W. Use it to decide whether your answer to (b) is an overestimate or an underestimate.
(d) A classmate repeats (b) with six steps of 0.5 hours. Should the new estimate be larger or smaller than yours? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** dW/dt = 8 − 0.6√100 = 8 − 6 = **2 litres per hour**.

**(b)**

| Step | (tₙ, Wₙ) | Slope 8 − 0.6√Wₙ (L/h) | New W (L) |
|---|---|---|---|
| 1 | (0, 100) | 2 | 102 |
| 2 | (1, 102) | ≈ 1.940297 | ≈ 103.940297 |
| 3 | (2, 103.940297) | ≈ 1.882933 | ≈ 105.823230 |

**W(3) ≈ 105.823 litres.**

**(c)** d²W/dt² = −0.6 · (1/(2√W)) · dW/dt = **−(0.3/√W)(8 − 0.6√W)**.
For W < (8/0.6)² ≈ 177.8 L, 8 − 0.6√W > 0, so d²W/dt² < 0. The water stays between 100 L and 177.8 L here, so the solution is concave down and the Euler steps lie above it: **105.823 L is an overestimate**.

**(d)** **Smaller.** Halving the step size usually brings the estimate closer to the true value. Since the true value is below 105.823 L, the new estimate should be lower. (With h = 0.5 the estimate is about 105.781 L; a very fine step gives about 105.740 L.)

| Point | What earns it |
|---|---|
| 1 | 2 litres per hour, with units |
| 1 | Correct first two steps (102 and ≈ 103.940) |
| 1 | W(3) ≈ 105.823 L, with full values carried between steps |
| 1 | Correct d²W/dt² **and** "overestimate" justified by its negative sign |
| 1 | "Smaller", with the reason that a smaller step usually moves the estimate towards the true value, which lies below it |

Total: 5 points. For the third point, accept answers within 0.002 of 105.823 when working is shown. Rounding at each step (for example to 1 decimal place, which gives 105.8) does not earn the third point.
</details>

## Question 7 (constructed response · stretch, calculator allowed)

Let y = f(x) be the solution of **dy/dx = y(2 − x)** with f(0) = 1.

(a) Show that f(x) = e^(2x − x²/2) satisfies the differential equation and the initial condition.
(b) Without a calculator, use Euler’s method with two steps of 0.5 to approximate f(1).
(c) Use Euler’s method with four steps of 0.25 to approximate f(1).
(d) Find the error (exact value − estimate) in (b) and in (c). Comment on how the step size affected the error.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** f′(x) = e^(2x − x²/2) · (2 − x) = f(x)(2 − x). ✓ And f(0) = e⁰ = 1. ✓

**(b)** Step 1: slope at (0, 1) is 1 × 2 = 2, so y ≈ 1 + 1 = 2 at x = 0.5. Step 2: slope at (0.5, 2) is 2 × 1.5 = 3, so y ≈ 2 + 1.5 = **3.5** at x = 1.

**(c)**

| Step | (xₙ, yₙ) | Slope yₙ(2 − xₙ) | New y |
|---|---|---|---|
| 1 | (0, 1) | 2 | 1.5 |
| 2 | (0.25, 1.5) | 2.625 | 2.15625 |
| 3 | (0.5, 2.15625) | 3.234375 | ≈ 2.964844 |
| 4 | (0.75, 2.964844) | ≈ 3.706055 | ≈ 3.891357 |

**f(1) ≈ 3.891.**

**(d)** Exact: f(1) = e^1.5 ≈ 4.482.
Error with h = 0.5: e^1.5 − 3.5 ≈ **0.982**. Error with h = 0.25: e^1.5 − 3.891357 ≈ **0.590** (keep the unrounded values; 4.482 − 3.891 would give 0.591).
Halving the step size made the error smaller (by a factor of about 1.7 here), but did not remove it. Both estimates are too low, which matches d²y/dx² = y[(2 − x)² − 1] > 0 for 0 ≤ x < 1: the solution is concave up there.

| Point | What earns it |
|---|---|
| 1 | Derivative by the chain rule shown equal to y(2 − x), and f(0) = 1 checked |
| 1 | 3.5 from two correct steps |
| 1 | 3.891 from four correct steps, with full values carried |
| 1 | Both errors, about 0.982 and 0.590 (0.591 from rounded values is also fine) |
| 1 | Comment: smaller step gives smaller error, but the error is not zero |

Total: 5 points. The concavity remark in (d) is good practice but is not required for the last point.
</details>

## How did you do?

- **Q1 or Q4 wrong:** reread "The procedure" and "Stepping backwards" in the [study guide](/advanced-course-resources/calculus-bc/7-5-approximating-solutions-eulers-method-study-guide/).
- **Q2 or Q7 wrong:** practise the table layout from Worked example 1, updating both x and y every step.
- **Q3 or Q5(d) wrong:** work through "Overestimate or underestimate? Use concavity".
- **Q6 wrong:** compare with Worked example 2 (Euler’s method in context) and check your units.
- **Q7(d) wrong:** revisit "How step size affects accuracy".

Then tick off the [topic checklist](/advanced-course-resources/calculus-bc/7-5-approximating-solutions-eulers-method-checklist/).
