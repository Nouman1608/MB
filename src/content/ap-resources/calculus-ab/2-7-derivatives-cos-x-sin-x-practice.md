---
resourceId: "mb-ap-calcab-2.7-practice"
title: "Derivatives of cos x, sin x, eˣ and ln x: Practice Questions (Calculus AB 2.7)"
description: "Seven original Marlbridge practice questions on the derivatives of sin x, cos x, eˣ and ln x, tangent lines and limits as derivatives, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 2
topics: ["2.7"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Exact values of sin and cos at multiples of π/6 and π/4"
  - "Point–slope form of a straight line"
prerequisiteResources: ["mb-ap-calcab-2.7-study-guide"]
learningObjectives:
  - "Differentiate combinations of sin x, cos x, eˣ, ln x and powers of x"
  - "Use these derivatives to find tangent lines and points with a given slope"
  - "Evaluate a limit by recognising it as a derivative"
  - "Justify a conclusion about slopes using the rules and earlier theorems"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Angles are in radians. Give exact answers unless a question asks for a decimal."
related: ["mb-ap-calcab-2.7-study-guide", "mb-ap-calcab-2.7-revision-notes", "mb-ap-calcab-2.7-checklist"]
next: "mb-ap-calcab-2.7-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, angles in radians, ln means the natural logarithm, and exact answers unless stated. Useful facts: e ≈ 2.718, so 2 < e < 3. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

Let f(x) = 5 sin x − 2 cos x. What is f′(π/3)?

- (A) 5/2 − √3
- (B) 5/2 + √3
- (C) 5√3/2 − 1
- (D) −5/2 − √3

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** f′(x) = 5 cos x − 2(−sin x) = 5 cos x + 2 sin x. At π/3: 5(1/2) + 2(√3/2) = 5/2 + √3.

- (A) uses d/dx cos x = sin x (no minus sign), giving f′(x) = 5 cos x − 2 sin x.
- (C) is f(π/3) = 5(√3/2) − 2(1/2), the value of the function, not its derivative.
- (D) swaps the signs of both rules, using d/dx sin x = −cos x and d/dx cos x = sin x.
</details>

## Question 2 (multiple choice · core)

What is lim (h → 0) [ln(e + h) − 1]/h?

- (A) 0
- (B) 1/e
- (C) 1
- (D) e

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Since ln e = 1, the limit is [f(e + h) − f(e)]/h with f(x) = ln x and a = e. So it equals f′(e) = 1/e.

- (A) treats the 0/0 form that substitution gives as the number 0.
- (C) uses the slope of ln x at x = 1 instead of at x = e. The point is a = e because the input is e + h.
- (D) inverts the rule, using x instead of 1/x as the derivative of ln x.
</details>

## Question 3 (multiple choice · foundation)

If y = 3eˣ − x³ + ln 7, what is dy/dx?

- (A) 3eˣ − 3x² + 1/7
- (B) 3eˣ − 3x²
- (C) 3x·e^(x − 1) − 3x²
- (D) 3eˣ − 3x² + ln 7

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Term by term: d/dx (3eˣ) = 3eˣ; d/dx (−x³) = −3x²; ln 7 is a constant, so its derivative is 0.

- (A) treats ln 7 as if it were ln x evaluated at 7. ln 7 is a fixed number, so its derivative is 0.
- (C) applies the power rule to eˣ. The power rule needs a variable base and a constant power; eˣ is the other way round.
- (D) keeps the constant instead of differentiating it.
</details>

## Question 4 (multiple choice · core)

For 0 < x < π, at which value of x does the graph of y = sin x + cos x have a horizontal tangent line?

- (A) π/4
- (B) π/2
- (C) 3π/4
- (D) π

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** dy/dx = cos x − sin x. A horizontal tangent needs dy/dx = 0, so cos x = sin x. In 0 < x < π this happens only at x = π/4.

- (B) is where sin x alone has a horizontal tangent. The cos x term also contributes to the slope.
- (C) solves sin x + cos x = 0. That is where y = 0, or what you get by using d/dx cos x = +sin x. Neither is the condition for a horizontal tangent.
- (D) is where cos x alone has a horizontal tangent (and it is not even inside the open interval).
</details>

## Question 5 (constructed response · core)

Let f(x) = eˣ − 2 ln x for x > 0.

(a) Find f′(x).
(b) Find the equation of the tangent line to the graph of f at x = 1.
(c) Explain why there is at least one value c with 1/2 < c < 1 at which the tangent line to the graph of f is horizontal.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** f′(x) = eˣ − 2/x.

**(b)** f(1) = e − 2 ln 1 = e − 0 = e. f′(1) = e − 2. The tangent line is

**y = e + (e − 2)(x − 1)**

Since 2 < e < 3, the slope e − 2 is positive (about 0.718). Expanding gives y = (e − 2)x + 2, so the line crosses the y-axis at 2.

**(c)** f′ is continuous on [1/2, 1], because eˣ and 2/x are both continuous for x > 0.

- f′(1/2) = e^(1/2) − 4. Since e < 4, √e < 2, so f′(1/2) < 2 − 4 < 0.
- f′(1) = e − 2 > 0.

f′ changes sign on the interval, so by the intermediate value theorem there is a c with 1/2 < c < 1 and f′(c) = 0. At that c the tangent line is horizontal. (A calculator check, not required, gives c ≈ 0.8526.)

| Point | What earns it |
|---|---|
| 1 | f′(x) = eˣ − 2/x |
| 1 | Correct point (1, e) and slope e − 2, with a correct tangent line equation |
| 1 | Shows f′(1/2) < 0 and f′(1) > 0 with a reason, not just decimals |
| 1 | States that f′ is continuous on [1/2, 1] and applies the intermediate value theorem to conclude f′(c) = 0 |

A conclusion with no mention of continuity does not earn the last point. The intermediate value theorem needs it.
</details>

## Question 6 (constructed response · core)

Evaluate each limit. In each case, name the function f and the number a that you are using.

(a) lim (h → 0) [sin(π/6 + h) − 1/2]/h
(b) lim (x → 0) (eˣ − 1)/x
(c) lim (x → π/2) cos x/(x − π/2)

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** sin(π/6) = 1/2, so this is [f(a + h) − f(a)]/h with f(x) = sin x, a = π/6. The limit is f′(π/6) = cos(π/6) = **√3/2**.

**(b)** e⁰ = 1, so this is [f(x) − f(a)]/(x − a) with f(x) = eˣ, a = 0. The limit is f′(0) = e⁰ = **1**.

**(c)** cos(π/2) = 0, so cos x = cos x − cos(π/2). This is [f(x) − f(a)]/(x − a) with f(x) = cos x, a = π/2. The limit is f′(π/2) = −sin(π/2) = **−1**.

| Point | What earns it |
|---|---|
| 1 | Recognises that each limit is a definition of the derivative (shown at least once, e.g. by writing f′(a) = lim [f(a + h) − f(a)]/h) |
| 1 | (a): f = sin x, a = π/6, answer √3/2 |
| 1 | (b): f = eˣ, a = 0, answer 1 |
| 1 | (c): f = cos x, a = π/2, answer −1, with the correct sign |

A correct value with no f and a named earns the value but not the first point. In (c), +1 means the sign of d/dx cos x was lost.
</details>

## Question 7 (constructed response · stretch)

(a) Find, in terms of a, the equation of the tangent line to y = ln x at the point where x = a (a > 0).
(b) Find the value of a for which this tangent line passes through the origin. Give the equation of that line.
(c) Find the point on y = eˣ whose tangent line passes through the origin, and give the equation of that line.
(d) Explain how your answers to (b) and (c) are related.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The point is (a, ln a) and the slope is 1/a. Tangent: **y = ln a + (1/a)(x − a)**.

**(b)** Put x = 0, y = 0: 0 = ln a + (1/a)(−a) = ln a − 1. So ln a = 1 and **a = e**. The line is y = 1 + (1/e)(x − e) = **x/e**.

**(c)** At (b, eᵇ) the slope is eᵇ. Tangent: y = eᵇ + eᵇ(x − b). Put x = 0, y = 0: 0 = eᵇ(1 − b). Since eᵇ > 0, b = 1. The point is **(1, e)** and the line is y = e + e(x − 1) = **ex**.

**(d)** y = ln x and y = eˣ are reflections in y = x. The point (e, 1) on ln x is the mirror image of (1, e) on eˣ. Reflecting swaps x and y, so the line y = x/e reflects to x = y/e, which is y = ex. The slopes 1/e and e are reciprocals, as the reflection predicts.

| Point | What earns it |
|---|---|
| 1 | Correct tangent line in terms of a, using slope 1/a |
| 1 | Solves ln a − 1 = 0 to get a = e and the line y = x/e |
| 1 | Point (1, e) and line y = ex on eˣ, with a reason why eᵇ ≠ 0 |
| 1 | Explains the reflection in y = x and the reciprocal slopes |
</details>

## How did you do?

- **Q1, Q3 or Q4 wrong:** revisit "The four new rules" and the misconceptions list in the [study guide](/advanced-course-resources/calculus-ab/2-7-derivatives-cos-x-sin-x-study-guide/). Check the minus sign on d/dx cos x and that constants differentiate to 0.
- **Q2 or Q6 wrong:** redo Worked example 3, "a limit that is really a derivative". Always name f and a.
- **Q5 wrong:** redo Worked example 1 (tangent lines), then review the intermediate value theorem from Topic 1.16.
- **Q7 wrong:** reread "Why ln x has derivative 1/x" and Figure 2.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/2-7-derivatives-cos-x-sin-x-checklist/).
