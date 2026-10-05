---
resourceId: "mb-ap-calcab-3.4-practice"
title: "Differentiating Inverse Trigonometric Functions: Practice Questions (Calculus AB 3.4)"
description: "Seven original Marlbridge practice questions on derivatives of arcsin, arccos and arctan, including chain-rule, tangent-line and derivation questions, with suggested rubrics."
course: "calculus-ab"
unit: 3
topics: ["3.4"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "The chain rule and the product rule"
  - "Exact values of trigonometric functions at π/6, π/4 and π/3"
prerequisiteResources: ["mb-ap-calcab-3.4-study-guide"]
learningObjectives:
  - "Differentiate inverse trigonometric functions with inner functions"
  - "Evaluate derivatives exactly and write tangent lines"
  - "Derive an inverse trigonometric derivative by implicit differentiation"
  - "Decide where an inverse trigonometric expression is defined and differentiable"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Work in radians and give exact answers with π and surds."
related: ["mb-ap-calcab-3.4-study-guide", "mb-ap-calcab-3.4-revision-notes", "mb-ap-calcab-3.4-checklist"]
next: "mb-ap-calcab-3.4-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, angles in radians, standard ranges for the inverse trigonometric functions, and exact answers unless stated. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

What is d/dx arctan(5x)?

- (A) 1/(1 + 25x²)
- (B) 5/(1 + 25x²)
- (C) 5/(1 + 5x²)
- (D) 5/√(1 − 25x²)

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** With u = 5x and u′ = 5, d/dx arctan u = u′/(1 + u²) = 5/(1 + (5x)²) = 5/(1 + 25x²).

- (A) forgets the chain-rule factor u′ = 5.
- (C) squares only the x, writing 5x² instead of (5x)² = 25x².
- (D) uses the arcsin formula instead of the arctan formula.
</details>

## Question 2 (multiple choice · core)

Let f(x) = arccos(2x). What is f′(1/4)?

- (A) −4/√3
- (B) 4/√3
- (C) −2/√3
- (D) −8/√15

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** f′(x) = −2/√(1 − (2x)²) = −2/√(1 − 4x²). At x = 1/4, 1 − 4/16 = 3/4 and √(3/4) = √3/2. So f′(1/4) = −2/(√3/2) = −4/√3, which is −4√3/3.

- (B) drops the minus sign. arccos is decreasing, so its derivative is negative.
- (C) forgets the chain-rule factor 2: −1/(√3/2) = −2/√3.
- (D) squares only the x: −2/√(1 − x²) at x = 1/4 is −2/√(15/16) = −8/√15.
</details>

## Question 3 (multiple choice · core)

Sine, restricted to [−π/2, π/2], has inverse arcsin. Using the inverse-function rule, which expression equals the derivative of arcsin x at x = √3/2?

- (A) 1/cos(π/3)
- (B) cos(π/3)
- (C) 1/cos(√3/2)
- (D) 1/sin(π/3)

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** arcsin(√3/2) = π/3, because sin(π/3) = √3/2. The inverse-function rule gives 1/sin′(π/3) = 1/cos(π/3) = 1/(1/2) = 2. The formula 1/√(1 − 3/4) = 1/(1/2) = 2 agrees.

- (B) forgets to take the reciprocal.
- (C) evaluates cosine at the input √3/2 instead of at the matching angle π/3.
- (D) uses sin as if it were the derivative of sin. The derivative of sin is cos.
</details>

## Question 4 (multiple choice · core)

Let g(x) = arcsin(x − 2). For which values of x does g′(x) exist?

- (A) 1 ≤ x ≤ 3
- (B) 1 < x < 3
- (C) −1 < x < 1
- (D) all real x

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** g′(x) = 1/√(1 − (x − 2)²). This needs 1 − (x − 2)² > 0, so −1 < x − 2 < 1, which gives 1 < x < 3.

- (A) is where g is **defined**. At the endpoints x = 1 and x = 3 the denominator is 0, and the graph has vertical tangents.
- (C) is the interval for arcsin x itself. It ignores the shift by 2.
- (D) confuses arcsin with arctan, which is differentiable everywhere.
</details>

## Question 5 (constructed response · core)

Let f(x) = arctan(x/3).

(a) Find f′(x), and simplify it to a single fraction with no fractions inside it.
(b) Write an equation for the line tangent to the graph of f at x = 3.
(c) Explain why f is increasing for all x.
(d) Find the greatest value of f′(x), and say where it occurs. What happens to f′(x) as x becomes very large?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** With u = x/3 and u′ = 1/3: f′(x) = (1/3)/(1 + x²/9). Multiply top and bottom by 9: **f′(x) = 3/(9 + x²)**.

**(b)** f(3) = arctan 1 = π/4. f′(3) = 3/(9 + 9) = 1/6. The tangent line is **y = π/4 + (1/6)(x − 3)**.

**(c)** The numerator 3 is positive and 9 + x² ≥ 9 > 0, so f′(x) > 0 for every x. A function with a positive derivative everywhere is increasing.

**(d)** The fraction 3/(9 + x²) is largest when the denominator is smallest, which is at x = 0. The greatest value is f′(0) = 3/9 = **1/3**. As x becomes very large (in either direction), 9 + x² grows without bound, so f′(x) gets close to 0: the graph levels off.

| Point | What earns it |
|---|---|
| 1 | Correct chain-rule derivative, in any equivalent form |
| 1 | Simplified to 3/(9 + x²) |
| 1 | f(3) = π/4 and slope 1/6 |
| 1 | Tangent line y = π/4 + (1/6)(x − 3), or equivalent |
| 1 | f′ > 0 for all x because numerator and denominator are both positive |
| 1 | Maximum slope 1/3 at x = 0, **and** f′ → 0 as \|x\| grows |
</details>

## Question 6 (constructed response · core)

(a) Let y = arccos x, for −1 < x < 1, so that cos y = x with 0 < y < π. Use implicit differentiation to show that dy/dx = −1/√(1 − x²). Justify the sign of the square root.
(b) Confirm your result using the identity arcsin x + arccos x = π/2.
(c) Explain why arccos is not differentiable at x = 1.
(d) Find the derivative of arccos x at x = 0, and explain what it means for the graph.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Differentiate cos y = x with respect to x: −sin y · dy/dx = 1, so dy/dx = −1/sin y. From sin²y + cos²y = 1, sin y = ±√(1 − x²). Since 0 < y < π, sin y > 0, so sin y = +√(1 − x²). Therefore dy/dx = −1/√(1 − x²).

**(b)** Differentiate the identity: d/dx arcsin x + d/dx arccos x = 0. So d/dx arccos x = −d/dx arcsin x = −1/√(1 − x²). This agrees with (a).

**(c)** At x = 1 the denominator √(1 − x²) is 0, so the formula is undefined. Geometrically, arccos(1) = 0, and cos has a horizontal tangent at y = 0 (since −sin 0 = 0). The reflection of a horizontal tangent is vertical, so the graph of arccos has a vertical tangent at (1, 0).

**(d)** At x = 0: −1/√1 = **−1**. The graph of arccos crosses the y-axis at (0, π/2) with slope −1.

| Point | What earns it |
|---|---|
| 1 | Implicit differentiation giving −sin y · dy/dx = 1 |
| 1 | Replaces sin y by √(1 − x²) with the reason sin y > 0 for 0 < y < π |
| 1 | Correct confirmation from the identity |
| 1 | Explains non-differentiability at x = 1 (zero denominator or vertical tangent) |
| 1 | Derivative −1 at x = 0, with the point (0, π/2) |

Acceptable alternative for (a): the inverse-function rule, 1/cos′(arccos x) = 1/(−sin(arccos x)) = −1/√(1 − x²), with the same sign argument.
</details>

## Question 7 (constructed response · stretch)

A function h is differentiable for all x. You are told that h(2) = 1/2, h′(2) = 3 and h(5) = 1.2. Let

- g(x) = arcsin(h(x))
- k(x) = arctan(h(x))

(a) Find g′(2), and give your answer in the form a√3.
(b) Find k′(2).
(c) Write an equation for the line tangent to the graph of g at x = 2.
(d) Explain why g(5) is not defined, but k(5) is.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** By the chain rule, g′(x) = h′(x)/√(1 − [h(x)]²). At x = 2: g′(2) = 3/√(1 − 1/4) = 3/(√3/2) = 6/√3 = **2√3**.

**(b)** k′(x) = h′(x)/(1 + [h(x)]²). At x = 2: k′(2) = 3/(1 + 1/4) = 3/(5/4) = **12/5**.

**(c)** g(2) = arcsin(1/2) = π/6. The tangent line is **y = π/6 + 2√3(x − 2)**.

**(d)** arcsin only accepts inputs from −1 to 1, because sine never goes outside that interval. Since h(5) = 1.2 > 1, arcsin(1.2) does not exist, so g(5) is not defined. arctan accepts every real number, so k(5) = arctan(1.2) is defined.

| Point | What earns it |
|---|---|
| 1 | Chain-rule form for g′ with h′(x) on top and [h(x)]² under the root |
| 1 | g′(2) = 2√3 |
| 1 | k′(2) = 12/5 |
| 1 | Tangent line through (2, π/6) with slope 2√3 |
| 1 | Domain argument: arcsin needs inputs in [−1, 1]; arctan needs no restriction |

A common error in (a) is 1/√(1 − 1/4) = 2/√3, which forgets the factor h′(2) = 3.
</details>

## How did you do?

- **Q1, Q2 or Q7(a)–(b) wrong:** revisit "Using the chain rule" and Worked example 1 in the [study guide](/advanced-course-resources/calculus-ab/3-4-differentiating-inverse-trigonometric-functions-study-guide/). Square the whole inner function.
- **Q3 or Q6 wrong:** reread "Deriving the derivative of arcsin x" and Worked example 3. The inverse-function rule needs the matching angle.
- **Q4 or Q7(d) wrong:** see "Why the ranges are restricted" and "Where the derivatives fail".
- **Q5 wrong:** redo Worked examples 1 and 2, including the tangent line.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/3-4-differentiating-inverse-trigonometric-functions-checklist/).
