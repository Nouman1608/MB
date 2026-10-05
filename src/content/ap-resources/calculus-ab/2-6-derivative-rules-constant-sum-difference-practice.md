---
resourceId: "mb-ap-calcab-2.6-practice"
title: "Derivative Rules: Constant, Sum, Difference and Constant Multiple: Practice Questions (Calculus AB 2.6)"
description: "Seven original Marlbridge practice questions on the constant, sum, difference and constant multiple rules, polynomials, tables and tangent lines, with full solutions and rubrics."
course: "calculus-ab"
unit: 2
topics: ["2.6"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "The power rule for xʳ"
  - "Expanding brackets and the laws of exponents"
prerequisiteResources: ["mb-ap-calcab-2.6-study-guide"]
learningObjectives:
  - "Differentiate polynomials and sums of powers term by term"
  - "Apply the rules to tables of values for unknown functions"
  - "Rewrite expressions before differentiating and explain why splitting products or quotients fails"
  - "Use derivatives to find tangent lines, horizontal tangents and unknown coefficients"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Give exact answers."
related: ["mb-ap-calcab-2.6-study-guide", "mb-ap-calcab-2.6-revision-notes", "mb-ap-calcab-2.6-checklist"]
next: "mb-ap-calcab-2.6-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, and exact answers unless stated. The water-tank context in Question 5 is invented. Notation: f′(x), dy/dx and d/dx[…] all mean the derivative with respect to x; fractional exponents are written in brackets, e.g. x^(1/2). This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

Let f(x) = 3x⁴ − x²/2 + 5x − π². What is f′(x)?

- (A) 12x³ − x + 5
- (B) 12x³ − x + 5 − 2π
- (C) 12x³ − 2x + 5
- (D) 4x³ − x + 5

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Term by term: d/dx[3x⁴] = 12x³; d/dx[x²/2] = (1/2)(2x) = x; d/dx[5x] = 5; and π² is a constant, so its derivative is 0. So f′(x) = 12x³ − x + 5.

- (B) treats π² as if it were a variable and "differentiates" it to 2π. π² is a number.
- (C) ignores the constant multiple 1/2 on x², giving 2x instead of x.
- (D) uses the power rule on x⁴ but drops the coefficient 3. The constant multiple rule keeps it: 3 × 4x³ = 12x³.
</details>

## Question 2 (multiple choice · core)

The table gives values of two differentiable functions f and g and their derivatives at x = 1.

| x | f(x) | f′(x) | g(x) | g′(x) |
|---|---|---|---|---|
| 1 | 4 | −2 | 3 | 5 |

Let h(x) = 2f(x) − 3g(x) + 6x². What is h′(1)?

- (A) −7
- (B) −13
- (C) 11
- (D) 23

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** By the sum, difference and constant multiple rules, h′(x) = 2f′(x) − 3g′(x) + 12x. So h′(1) = 2(−2) − 3(5) + 12(1) = −4 − 15 + 12 = −7.

- (B) uses 6x² at x = 1 (which is 6) instead of its derivative 12x (which is 12): −4 − 15 + 6 = −13.
- (C) uses the function values f(1) and g(1) instead of the derivatives: 2(4) − 3(3) + 12 = 11.
- (D) loses the minus sign in front of 3g′(1): −4 + 15 + 12 = 23.
</details>

## Question 3 (multiple choice · core)

Let f(x) = (x³ − 8x + 2)/x² for x ≠ 0. What is f′(2)?

- (A) 5/2
- (B) 1
- (C) 7/2
- (D) −3/2

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The denominator is a single term, so split the fraction: f(x) = x − 8x⁻¹ + 2x⁻². Then f′(x) = 1 + 8x⁻² − 4x⁻³. At x = 2: 1 + 8/4 − 4/8 = 1 + 2 − 1/2 = 5/2.

- (B) differentiates top and bottom separately: (3x² − 8)/(2x) at x = 2 is (12 − 8)/4 = 1. The derivative of a quotient is not the quotient of the derivatives.
- (C) gets the sign of the last term wrong: d/dx[2x⁻²] is −4x⁻³, not +4x⁻³. That gives 1 + 2 + 1/2 = 7/2.
- (D) is f(2) = (8 − 16 + 2)/4 = −3/2, the function value, not the derivative.
</details>

## Question 4 (multiple choice · core)

At which x-values does the graph of p(x) = x³ − 3x² − 9x + 4 have a horizontal tangent line?

- (A) x = −1 and x = 3
- (B) x = 1 and x = −3
- (C) x = 0 and x = 2
- (D) x = 1 only

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** A horizontal tangent has slope 0. p′(x) = 3x² − 6x − 9 = 3(x² − 2x − 3) = 3(x − 3)(x + 1). This is 0 at x = 3 and x = −1.

- (B) factors correctly in form but with the signs swapped, as if p′(x) were 3(x + 3)(x − 1).
- (C) treats −9x as a constant and drops it, leaving 3x² − 6x = 3x(x − 2) = 0.
- (D) differentiates twice: 6x − 6 = 0. The slope of the tangent is the first derivative.
</details>

## Question 5 (constructed response · core)

The volume of water in a tank is modelled by V(t) = 0.5t³ − 6t² + 30t + 200 litres, where t is the time in minutes, for 0 ≤ t ≤ 10.

(a) Find V′(t).
(b) Find V′(2), with units, and explain what it means in context.
(c) A second tank holds W(t) = V(t) + 150 litres. Explain, using a derivative rule, how W′(t) compares with V′(t).
(d) Show that V′(t) = 1.5[(t − 4)² + 4], and hence explain why the volume is increasing for all t in 0 ≤ t ≤ 10.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Term by term: V′(t) = 0.5(3t²) − 6(2t) + 30 − 0 = **1.5t² − 12t + 30**.

**(b)** V′(2) = 1.5(4) − 24 + 30 = **12 litres per minute**. At t = 2 minutes, the volume of water is increasing at a rate of 12 litres per minute.

**(c)** W′(t) = V′(t) + 0 = V′(t), by the sum rule and the constant rule. The extra 150 litres changes how much water there is, but not how fast the amount is changing. The two tanks fill at the same rate at every moment.

**(d)** Expand: 1.5[(t − 4)² + 4] = 1.5[t² − 8t + 16 + 4] = 1.5t² − 12t + 30 = V′(t). Since (t − 4)² ≥ 0, V′(t) ≥ 1.5 × 4 = 6 > 0 for every t. A positive rate of change means the volume is always increasing. The smallest rate is 6 litres per minute, at t = 4.

| Point | What earns it |
|---|---|
| 1 | Correct V′(t) = 1.5t² − 12t + 30 |
| 1 | V′(2) = 12 **with units** (litres per minute) |
| 1 | Interpretation: the rate at which the volume is changing at t = 2, increasing |
| 1 | W′(t) = V′(t), naming the constant rule (derivative of 150 is 0) |
| 1 | Shows the expansion **and** uses (t − 4)² ≥ 0 to conclude V′(t) > 0 |

"The tank has 12 litres at t = 2" earns no interpretation point: V′(2) is a rate, not an amount.
</details>

## Question 6 (constructed response · core)

(a) Let f(x) = (2x − 1)². Expand f(x) and find f′(x).
(b) A student writes f′(x) = 2(2x − 1), "using the power rule on the bracket". Show that the student's derivative gives the wrong slope at x = 1.
(c) Let g(x) = (6x³ − √x)/(2x) for x > 0. Write g(x) as a sum of powers of x and find g′(1).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** f(x) = 4x² − 4x + 1, so **f′(x) = 8x − 4**.

**(b)** The correct slope at x = 1 is f′(1) = 8 − 4 = 4. The student's formula gives 2(2 − 1) = 2. The values differ, so the student is wrong. The power rule applies to powers of x, not to powers of a bracket: the student has ignored that the inside, 2x − 1, changes twice as fast as x. (The chain rule in Unit 3 deals with this directly.)

**(c)** Split the fraction, since the denominator 2x is a single term:

g(x) = 6x³/(2x) − x^(1/2)/(2x) = 3x² − (1/2)x^(−1/2).

Then g′(x) = 6x − (1/2)(−1/2)x^(−3/2) = 6x + (1/4)x^(−3/2).

At x = 1: g′(1) = 6 + 1/4 = **25/4**.

| Point | What earns it |
|---|---|
| 1 | Correct expansion and f′(x) = 8x − 4 |
| 1 | Shows f′(1) = 4 against the student's value 2 and states the student is wrong |
| 1 | Rewrites g(x) = 3x² − (1/2)x^(−1/2) |
| 1 | Correct g′(x), with the sign of the second term positive |
| 1 | g′(1) = 25/4 |

In (b), the comparison must use x = 1 as the question asks. Accept equivalent forms in (c), e.g. 6x + 1/(4x^(3/2)).
</details>

## Question 7 (constructed response · stretch)

The curve y = ax³ + bx, where a and b are constants, passes through the point (1, 5). The tangent line to the curve at x = 1 has slope 9.

(a) Find a and b.
(b) Find the other point on the curve where the tangent line has slope 9.
(c) Write the equations of the tangent lines at both points, and describe how they are related.
(d) Explain why no tangent line to this curve has slope 2.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** dy/dx = 3ax² + b. The point gives a(1)³ + b(1) = 5, so a + b = 5. The slope gives 3a(1)² + b = 9, so 3a + b = 9. Subtract: 2a = 4, so **a = 2** and **b = 3**. The curve is y = 2x³ + 3x.

**(b)** dy/dx = 6x² + 3. Solve 6x² + 3 = 9: x² = 1, so x = 1 or x = −1. At x = −1, y = 2(−1) + 3(−1) = −5. The other point is **(−1, −5)**.

**(c)** At (1, 5): y − 5 = 9(x − 1), so **y = 9x − 4**. At (−1, −5): y + 5 = 9(x + 1), so **y = 9x + 4**. The two lines have the same slope, so they are **parallel** (and distinct, since their y-intercepts differ).

**(d)** dy/dx = 6x² + 3. Since x² ≥ 0, dy/dx ≥ 3 for every x. So the slope can never be 2. (Solving 6x² + 3 = 2 gives x² = −1/6, which has no real solution.)

| Point | What earns it |
|---|---|
| 1 | Correct derivative 3ax² + b, using the constant multiple rule on a and b |
| 1 | Both equations a + b = 5 and 3a + b = 9 |
| 1 | a = 2, b = 3 |
| 1 | x = −1 and the point (−1, −5) |
| 1 | Both tangent equations, and the statement that they are parallel |
| 1 | Uses 6x² + 3 ≥ 3 (or no real solution) to explain why slope 2 is impossible |
</details>

## How did you do?

- **Q1 or Q5(a) wrong:** revisit "The four rules" and "Differentiating polynomials term by term" in the [study guide](/advanced-course-resources/calculus-ab/2-6-derivative-rules-constant-sum-difference-study-guide/).
- **Q2 wrong:** reread "Unknown functions": use derivative values, not function values.
- **Q3 or Q6 wrong:** redo Worked example 2 and the "Rewrite first" list.
- **Q4 or Q7 wrong:** redo Worked examples 1 and 3 (tangent lines and horizontal tangents).
- **Q5(c) wrong:** look again at Figure 1: adding a constant shifts the graph without changing any slope.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/2-6-derivative-rules-constant-sum-difference-checklist/).
