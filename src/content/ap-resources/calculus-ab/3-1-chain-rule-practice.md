---
resourceId: "mb-ap-calcab-3.1-practice"
title: "The Chain Rule: Practice Questions (Calculus AB 3.1)"
description: "Seven original Marlbridge practice questions on the chain rule, from formulas, tables and rates with units, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 3
topics: ["3.1"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Derivatives of powers, trig functions, eˣ and ln x"
  - "The product rule"
prerequisiteResources: ["mb-ap-calcab-3.1-study-guide"]
learningObjectives:
  - "Differentiate composite functions, including ones with several layers"
  - "Find the derivative of a composite at a point from a table"
  - "Interpret a chain of rates using units"
  - "Find and correct a chain-rule error in someone else's work"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Angles are in radians. Give exact answers unless a question asks otherwise."
related: ["mb-ap-calcab-3.1-study-guide", "mb-ap-calcab-3.1-revision-notes", "mb-ap-calcab-3.1-checklist"]
next: "mb-ap-calcab-3.1-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, angles in radians, and exact answers unless stated. All contexts and data are invented. Notation: f′(x) and dy/dx both mean the derivative with respect to x; sin³x means (sin x)³. This set is for both Calculus AB and Calculus BC students.

Questions 3 and 6 use this table of values for two differentiable functions f and g.

| x | f(x) | f′(x) | g(x) | g′(x) |
|---|---|---|---|---|
| 0 | 2 | −3 | 1 | 4 |
| 1 | 3 | 5 | 2 | −2 |
| 2 | 0 | 1 | 0 | 6 |

## Question 1 (multiple choice · foundation)

What is d/dx [(5 − 2x)⁶]?

- (A) 6(5 − 2x)⁵
- (B) −12(5 − 2x)⁵
- (C) 12(5 − 2x)⁵
- (D) −12(5 − 2x)⁶

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Outer: u⁶, inner: u = 5 − 2x. The derivative of the outer is 6(5 − 2x)⁵, and the derivative of the inside is −2. Multiply: 6(5 − 2x)⁵ · (−2) = −12(5 − 2x)⁵.

- (A) forgets to multiply by the derivative of the inside.
- (C) uses +2 as the derivative of 5 − 2x, losing the minus sign.
- (D) multiplies by 6 and by −2 but forgets to lower the power from 6 to 5.
</details>

## Question 2 (multiple choice · core)

Let f(x) = ln(x² + 4). What is f′(2)?

- (A) 1/8
- (B) 1/2
- (C) 4
- (D) ln 8

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Outer: ln u, inner: u = x² + 4. f′(x) = (1/(x² + 4)) · 2x = 2x/(x² + 4). At x = 2: 4/8 = 1/2.

- (A) is 1/(x² + 4) at x = 2: the derivative of the outer function without the factor 2x.
- (C) is 2x at x = 2: only the derivative of the inside.
- (D) is f(2), the value of the function, not its derivative.
</details>

## Question 3 (multiple choice · core)

Use the table above. Let h(x) = f(g(x)). What is h′(0)?

- (A) −18
- (B) −12
- (C) 5
- (D) 20

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** h′(0) = f′(g(0)) · g′(0). Inside first: g(0) = 1, so f′(g(0)) = f′(1) = 5. Then g′(0) = 4. So h′(0) = 5 × 4 = 20.

- (A) reverses the composition: g′(f(0)) · f′(0) = g′(2) · (−3) = 6 × (−3) = −18. That is the derivative of g(f(x)).
- (B) evaluates the outer derivative at 0 instead of at g(0): f′(0) · g′(0) = (−3)(4) = −12.
- (C) is f′(g(0)) alone: it forgets to multiply by g′(0).
</details>

## Question 4 (multiple choice · core)

In a fictional model, the cost C (in dollars) of heating a tank of water depends on the water temperature T (in °C), with dC/dT = 0.40 dollars per °C at the current temperature. The temperature is rising at 1.5 °C per minute. At what rate is the cost changing with respect to time?

- (A) 0.27 dollars per minute
- (B) 0.60 dollars per minute
- (C) 1.90 dollars per minute
- (D) 3.75 dollars per minute

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Chain rule in Leibniz form: dC/dt = (dC/dT) · (dT/dt) = 0.40 × 1.5 = 0.60. Units: (dollars/°C) × (°C/minute) = dollars/minute.

- (A) divides, 0.40/1.5 ≈ 0.27. The units would be dollars·minute/°C², not dollars per minute.
- (C) adds the rates, 0.40 + 1.5. Rates with different units cannot be added.
- (D) divides the other way, 1.5/0.40 = 3.75, giving °C² per dollar-minute.
</details>

## Question 5 (error analysis · core)

A student is asked to differentiate y = e^(cos 2x). The student writes:

dy/dx = e^(cos 2x) · (−sin 2x)

(a) Identify the layers of y, from outside to inside.
(b) Explain the student's error and write the correct derivative.
(c) Find the exact value of dy/dx at x = π/4, and compare it with the value given by the student's answer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Three layers: the exponential eᵘ (outside), then cos v, then 2x (inside).

**(b)** The student differentiated the outer two layers correctly but stopped one layer too early. The innermost function 2x has derivative 2, and that factor is missing. Correct:

dy/dx = e^(cos 2x) · (−sin 2x) · 2 = **−2 sin(2x) e^(cos 2x)**

**(c)** At x = π/4: 2x = π/2, cos(π/2) = 0 and sin(π/2) = 1. So dy/dx = −2 × 1 × e⁰ = **−2**. The student's answer gives −1 × e⁰ = −1, which is half the correct value.

| Point | What earns it |
|---|---|
| 1 | Names the missing factor: the derivative of the innermost function 2x, which is 2 |
| 1 | Correct derivative −2 sin(2x) e^(cos 2x) (any equivalent form) |
| 1 | dy/dx = −2 at x = π/4, with cos(π/2) = 0 and sin(π/2) = 1 shown |
</details>

## Question 6 (constructed response · core)

Use the table above.

(a) Let p(x) = [f(x)]³. Find p′(1).
(b) Let q(x) = g(x²). Find q′(1).
(c) Let r(x) = x · f(g(x)). Find r′(1).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Outer: u³, inner: f(x). p′(x) = 3[f(x)]² · f′(x). So p′(1) = 3 × 3² × 5 = **135**.

**(b)** Outer: g, inner: x². q′(x) = g′(x²) · 2x. So q′(1) = g′(1) × 2 = (−2)(2) = **−4**.

**(c)** r is a product, and its second factor is a composite. Product rule, then chain rule:

r′(x) = 1 · f(g(x)) + x · f′(g(x)) · g′(x)

At x = 1: g(1) = 2, so f(g(1)) = f(2) = 0 and f′(g(1)) = f′(2) = 1. With g′(1) = −2:

r′(1) = 0 + 1 × 1 × (−2) = **−2**

| Point | What earns it |
|---|---|
| 1 | (a) Uses 3[f(x)]² f′(x) and gets 135 |
| 1 | (b) Includes the factor 2x from the inner function x² and gets −4 |
| 1 | (c) Applies the product rule with the chain rule in the second term |
| 1 | (c) Evaluates f and f′ at g(1) = 2 (not at 1) and gets −2 |

Common error in (b): writing q′(1) = g′(1) = −2, which drops the factor 2x. Common error in (c): using f(1) = 3 and f′(1) = 5, which evaluates at x instead of at g(x).
</details>

## Question 7 (constructed response · stretch)

Let g(x) = (x² − 4x)³.

(a) Find g′(x) and write it as a product of linear factors and a constant.
(b) Find every x-value where the graph of g has a horizontal tangent line, and give the point on the graph for each.
(c) Find the equation of the tangent line to the graph of g at x = 1.
(d) Explain why expanding (x² − 4x)³ before differentiating is a poor strategy here, even though it gives the same answer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Outer: u³, inner: u = x² − 4x, with derivative 2x − 4.

g′(x) = 3(x² − 4x)² · (2x − 4)

Factor: x² − 4x = x(x − 4), so (x² − 4x)² = x²(x − 4)², and 2x − 4 = 2(x − 2). So

**g′(x) = 6x²(x − 4)²(x − 2)**

**(b)** g′(x) = 0 when x = 0, x = 4 or x = 2. Points: g(0) = 0, g(4) = 0, g(2) = (4 − 8)³ = (−4)³ = −64. So **(0, 0), (2, −64) and (4, 0)**.

**(c)** g(1) = (1 − 4)³ = −27. g′(1) = 6 × 1 × 9 × (−1) = −54. Tangent line: **y = −27 − 54(x − 1)**, which is y = 27 − 54x.

**(d)** Expanding gives x⁶ − 12x⁵ + 48x⁴ − 64x³. Differentiating that is correct, but it takes longer, gives more chances for arithmetic slips, and hides the factored form you need in (b). The chain rule keeps the factor (x² − 4x) visible.

| Point | What earns it |
|---|---|
| 1 | Correct chain rule: 3(x² − 4x)²(2x − 4) |
| 1 | Correct fully factored form 6x²(x − 4)²(x − 2) |
| 1 | All three x-values and the points (0, 0), (2, −64), (4, 0) |
| 1 | Tangent line at x = 1 with point (1, −27) and slope −54 |

Part (d) is for discussion and is not scored. An answer to (b) that finds only x = 2 (setting 2x − 4 = 0) loses the third point: the factor (x² − 4x)² is also 0 at x = 0 and x = 4.
</details>

## How did you do?

- **Q1 or Q2 wrong:** reread "The chain rule" in the [study guide](/advanced-course-resources/calculus-ab/3-1-chain-rule-study-guide/) and say "times the derivative of the inside" aloud.
- **Q3 or Q6 wrong:** redo Worked example 2 (tables). Find g(a) before you look up f′.
- **Q4 wrong:** see "Leibniz form and units" and Figure 1.
- **Q5 or Q7 wrong:** see "More than two layers" and Worked example 3 on combining rules.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/3-1-chain-rule-checklist/).
