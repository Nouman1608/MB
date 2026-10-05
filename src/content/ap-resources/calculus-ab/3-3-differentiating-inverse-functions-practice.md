---
resourceId: "mb-ap-calcab-3.3-practice"
title: "Differentiating Inverse Functions: Practice Questions (Calculus AB 3.3)"
description: "Seven original Marlbridge practice questions on derivatives of inverse functions from formulas, tables, graphs and a context, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 3
topics: ["3.3"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "The chain rule and derivatives of polynomials and eˣ"
prerequisiteResources: ["mb-ap-calcab-3.3-study-guide"]
learningObjectives:
  - "Find the derivative of an inverse at a point from a formula, a table or a graph"
  - "Write tangent lines to the graph of an inverse function"
  - "Recognise where an inverse is not differentiable"
  - "Confirm an answer using an explicit inverse or a reasonableness check"
skills: ["1", "2", "3", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Give exact answers (fractions, not decimals) unless a question asks for an interpretation in other units."
related: ["mb-ap-calcab-3.3-study-guide", "mb-ap-calcab-3.3-revision-notes", "mb-ap-calcab-3.3-checklist"]
next: "mb-ap-calcab-3.3-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, exact answers unless stated, and f⁻¹ means the inverse function (not 1/f). The heater in Question 5 is fictional. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

Let f(x) = x⁵ + 4x − 1, and let g be the inverse of f. What is g′(4)?

- (A) 1/1284
- (B) 1/81
- (C) 1/9
- (D) 9

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** First find the matching input: f(1) = 1 + 4 − 1 = 4, so g(4) = 1. Then f′(x) = 5x⁴ + 4, so f′(1) = 9. The rule gives g′(4) = 1/f′(1) = 1/9.

- (A) is 1/f′(4) = 1/(5 · 256 + 4). It evaluates f′ at the output 4 instead of the matching input 1.
- (B) is 1/[f′(1)]² = 1/81. It squares the slope; the inverse rule needs only the plain reciprocal 1/f′(1).
- (D) is f′(1) itself. It forgets to take the reciprocal.
</details>

## Question 2 (multiple choice · core)

The function p is differentiable and increasing, and q is the inverse of p. Selected values are shown.

| x | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| p(x) | 2 | 4 | 7 | 11 |
| p′(x) | 3/2 | 5/2 | 7/2 | 5 |

What is q′(4)?

- (A) 1/11
- (B) 1/5
- (C) 2/5
- (D) 5/2

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Find 4 in the p(x) row: p(2) = 4, so q(4) = 2. Then q′(4) = 1/p′(2) = 1/(5/2) = 2/5.

- (A) is 1/p(4). It confuses the inverse function with the reciprocal of p.
- (B) is 1/p′(4). It reads the column x = 4 instead of the column where p(x) = 4.
- (D) is p′(2). It finds the right column but forgets to take the reciprocal.
</details>

## Question 3 (multiple choice · core)

A function f is differentiable and decreasing. Its graph passes through (2, 5), and the tangent line to f at that point has slope −4. Which statement about the graph of f⁻¹ is true?

- (A) It passes through (5, 2) with slope −1/4 there.
- (B) It passes through (5, 2) with slope 1/4 there.
- (C) It passes through (5, 2) with slope −4 there.
- (D) It passes through (2, 5) with slope −1/4 there.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Since f(2) = 5, the inverse has f⁻¹(5) = 2, so (5, 2) is on its graph. The slope there is 1/f′(2) = 1/(−4) = −1/4.

- (B) changes the sign. Reflection in y = x keeps the sign of a slope; a decreasing function has a decreasing inverse.
- (C) keeps the slope of f instead of taking the reciprocal.
- (D) has the right slope at the wrong point. The coordinates swap when you reflect.
</details>

## Question 4 (multiple choice · core)

Let f(x) = x³ − 3x² + 3x + 2. Then f is increasing for all x, and it has an inverse g. Which statement about g at x = 3 is true?

- (A) g′(3) = 0
- (B) g′(3) = 1/12
- (C) g is not differentiable at x = 3; its graph has a vertical tangent there.
- (D) g is not defined at x = 3, because f is not one-to-one.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Note that f(x) = (x − 1)³ + 3, so f(1) = 3 and g(3) = 1. But f′(x) = 3(x − 1)², so f′(1) = 0. The tangent to f at (1, 3) is horizontal, so the tangent to g at (3, 1) is vertical. The rule 1/f′(1) would need division by 0, so g′(3) does not exist.

- (A) confuses a horizontal tangent on f with a horizontal tangent on g. The reflection of a horizontal line is vertical.
- (B) is 1/f′(3) = 1/12. It evaluates f′ at 3, which is an output of f. The matching input is 1, where f′ is 0.
- (D) is false. A function can have f′ = 0 at a single point and still be increasing and one-to-one, as (x − 1)³ + 3 is.
</details>

## Question 5 (constructed response · core)

A fictional laboratory heater warms a tank of water. The temperature, in degrees Celsius, t minutes after it is switched on is

**T = f(t) = 15 + 4t + 0.1t², for 0 ≤ t ≤ 20.**

Let g be the inverse of f, so g(T) is the time, in minutes, at which the temperature is T.

(a) Explain why g exists on the interval of temperatures 15 ≤ T ≤ 135.
(b) Find g(65).
(c) Find g′(65), and give its units.
(d) Interpret g′(65) in the context of the heater.
(e) Find g′(97.5). Explain why it is smaller than g′(65).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** f′(t) = 4 + 0.2t, which is at least 4 for 0 ≤ t ≤ 20. So f is increasing, hence one-to-one, on this interval. Its outputs run from f(0) = 15 to f(20) = 135, so g exists for 15 ≤ T ≤ 135.

**(b)** Solve f(t) = 65: 0.1t² + 4t − 50 = 0, or t² + 40t − 500 = 0, so (t − 10)(t + 50) = 0. Only t = 10 is in the domain. So **g(65) = 10**.

**(c)** f′(10) = 4 + 2 = 6 °C per minute. So g′(65) = 1/f′(10) = **1/6 minute per °C**.

**(d)** When the water is at 65 °C, the time needed for the temperature to rise by one more degree is about 1/6 minute (10 seconds).

**(e)** f(15) = 15 + 60 + 22.5 = 97.5, so g(97.5) = 15. f′(15) = 4 + 3 = 7, so g′(97.5) = **1/7 minute per °C** (about 8.6 seconds). The water is warming faster at t = 15 than at t = 10 (7 °C per minute compared with 6), so each degree takes less time.

| Point | What earns it |
|---|---|
| 1 | Shows f′(t) > 0 on the interval (or another valid one-to-one argument) |
| 1 | g(65) = 10, rejecting t = −50 because it is outside the domain |
| 1 | g′(65) = 1/f′(10) = 1/6 |
| 1 | Correct units, minutes per °C, and an interpretation that names the temperature 65 °C |
| 1 | g′(97.5) = 1/7 with a reason that links the smaller value to the faster heating rate |

Acceptable check for (c): solving for t gives g(T) = −20 + 5√(10 + 0.4T). Differentiating gives g′(T) = 1/√(10 + 0.4T), and g′(65) = 1/√36 = 1/6.
</details>

## Question 6 (constructed response · core)

Let h(x) = 2x + e^(x − 1), and let k be the inverse of h.

(a) Explain why k exists.
(b) Find k(3) and k′(3).
(c) Write an equation for the line tangent to the graph of k at x = 3.
(d) Let P(x) = x · k(x). Find P′(3).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** h′(x) = 2 + e^(x − 1). Since e^(x − 1) > 0, h′(x) > 2 for all x. So h is always increasing, which makes it one-to-one, and k exists.

**(b)** h(1) = 2 + e⁰ = 3, so **k(3) = 1**. Then h′(1) = 2 + 1 = 3, so **k′(3) = 1/h′(1) = 1/3**.

**(c)** The point is (3, 1) and the slope is 1/3: **y = 1 + (1/3)(x − 3)**.

**(d)** By the product rule, P′(x) = k(x) + x · k′(x). So P′(3) = k(3) + 3k′(3) = 1 + 3(1/3) = **2**.

| Point | What earns it |
|---|---|
| 1 | h′(x) = 2 + e^(x − 1) and the conclusion that h′ > 0, so h is one-to-one |
| 1 | k(3) = 1, found from h(1) = 3 |
| 1 | k′(3) = 1/h′(1) = 1/3, with h′ evaluated at 1, not 3 |
| 1 | Tangent line through (3, 1) with slope 1/3 |
| 1 | Product rule applied correctly, P′(3) = 2 |

A common error in (b) is 1/h′(3) = 1/(2 + e²). That uses the wrong input.
</details>

## Question 7 (constructed response · stretch)

Let f(x) = x² + 2x for x ≥ −1, and let g be the inverse of f.

A student writes: "g′(8) = 1/f′(8) = 1/(2 · 8 + 2) = 1/18."

(a) Explain the student's error.
(b) Find the correct value of g′(8).
(c) Confirm your answer by finding a formula for g(x) and differentiating it.
(d) Explain why the domain is restricted to x ≥ −1, and describe the graph of g at the point (−1, −1).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The student evaluated f′ at 8, which is an output of f (an input of g). The rule needs f′ at the matching input a, where f(a) = 8.

**(b)** Solve a² + 2a = 8: a² + 2a − 8 = 0, so (a + 4)(a − 2) = 0. Since a ≥ −1, a = 2, and g(8) = 2. f′(x) = 2x + 2, so f′(2) = 6. Therefore **g′(8) = 1/6**.

**(c)** Write y = x² + 2x = (x + 1)² − 1. Then (x + 1)² = y + 1, and x + 1 ≥ 0 on the domain, so x = −1 + √(y + 1). Swapping letters, g(x) = −1 + √(x + 1). Then g′(x) = 1/(2√(x + 1)), and g′(8) = 1/(2 · 3) = 1/6. The two methods agree.

**(d)** Without a restriction, f would not be one-to-one: for example f(0) = f(−2) = 0. The vertex is at x = −1, so x ≥ −1 keeps the right-hand half, where f is increasing. At x = −1, f(−1) = −1 and f′(−1) = 0, so the graph of f has a horizontal tangent at (−1, −1). The graph of g therefore has a **vertical tangent** at (−1, −1), and g is not differentiable there. This agrees with g′(x) = 1/(2√(x + 1)), which grows without bound as x → −1 from the right.

| Point | What earns it |
|---|---|
| 1 | Identifies that f′ was evaluated at the output 8 instead of the matching input |
| 1 | Finds a = 2, rejecting a = −4 because of the domain |
| 1 | g′(8) = 1/f′(2) = 1/6 |
| 1 | Correct inverse formula and derivative giving 1/6 |
| 1 | Explains the one-to-one reason for x ≥ −1 **and** states the vertical tangent at (−1, −1) because f′(−1) = 0 |

Acceptable alternative for (c): implicit differentiation of x = y² + 2y gives 1 = (2y + 2) dy/dx, and at y = 2 this gives dy/dx = 1/6.
</details>

## How did you do?

- **Q1, Q2 or Q7(a) wrong:** revisit the three-step method in "Deriving the rule with the chain rule" and Worked example 2 in the [study guide](/advanced-course-resources/calculus-ab/3-3-differentiating-inverse-functions-study-guide/). Always find the matching input first.
- **Q3 wrong:** reread "The idea" and Figure 1. Coordinates swap; the sign of the slope stays.
- **Q4 or Q7(d) wrong:** see "When the inverse is not differentiable".
- **Q5 or Q6 wrong:** redo Worked example 1, including the tangent line and the checks.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/3-3-differentiating-inverse-functions-checklist/).
