---
resourceId: "mb-ap-calcab-5.4-practice"
title: "Using the First Derivative Test to Determine Relative (Local) Extrema: Practice Questions (Calculus AB 5.4)"
description: "Seven original Marlbridge practice questions on the First Derivative Test from formulas, graphs of f′ and piecewise functions, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 5
topics: ["5.4"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Sign charts for f′ (Topic 5.3)"
  - "Derivatives of polynomial, exponential and logarithmic functions"
prerequisiteResources: ["mb-ap-calcab-5.4-study-guide"]
learningObjectives:
  - "Classify critical points with the First Derivative Test"
  - "Find the value of a relative extremum"
  - "Locate relative extrema from a graph of f′"
  - "Recognise when the test does not apply"
  - "Write justifications based on the change of sign of f′"
skills: ["2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Leave values such as e⁻³ and 1/e exact."
related: ["mb-ap-calcab-5.4-study-guide", "mb-ap-calcab-5.4-revision-notes", "mb-ap-calcab-5.4-checklist"]
next: "mb-ap-calcab-5.4-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, exact answers, and ln means the natural logarithm. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

The derivative of a function f is f′(x) = (x + 1)(x − 3)². Which statement is true?

- (A) f has a relative minimum at x = −1 and no other relative extrema.
- (B) f has a relative maximum at x = −1 and a relative minimum at x = 3.
- (C) f has a relative minimum at x = −1 and a relative maximum at x = 3.
- (D) f has a relative maximum at x = −1 and no other relative extrema.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Critical points: x = −1 and x = 3. Test values: f′(−2) = (−1)(25) = −25, f′(0) = (1)(9) = 9, f′(4) = (5)(1) = 5. f′ changes from negative to positive at x = −1, so f has a relative minimum there. f′ is positive on both sides of x = 3, so f has neither at x = 3.

- (B) reverses the sign change at x = −1 and assumes the sign also changes at x = 3.
- (C) gets x = −1 right but assumes every zero of f′ is an extremum. The squared factor (x − 3)² does not change sign.
- (D) reverses the order of the signs at x = −1: f′ goes from − to +, which is a minimum.
</details>

## Question 2 (multiple choice · core)

Let f(x) = x³ − 12x + 5. What is the relative maximum value of f?

- (A) −2
- (B) 21
- (C) −11
- (D) 2

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** f′(x) = 3x² − 12 = 3(x − 2)(x + 2), so the critical points are x = −2 and x = 2. f′(−3) = 15 > 0, f′(0) = −12 < 0, f′(3) = 15 > 0. f′ changes from positive to negative at x = −2, so the relative maximum is at x = −2. Its value is f(−2) = −8 + 24 + 5 = 21.

- (A) is the **location** of the maximum, not its value.
- (C) is f(2), the relative **minimum** value.
- (D) is the location of the relative minimum.
</details>

## Question 3 (multiple choice · core)

Let g(x) = x ln x for x > 0. Which statement is true?

- (A) g has a relative minimum at x = 1/e.
- (B) g has a relative maximum at x = 1/e.
- (C) g has a relative minimum at x = 1.
- (D) g has no relative extrema.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** By the product rule, g′(x) = ln x + x · (1/x) = ln x + 1. g′(x) = 0 when ln x = −1, so x = 1/e. Test values: g′(e⁻²) = −2 + 1 = −1 < 0 and g′(1) = 0 + 1 = 1 > 0. g′ changes from negative to positive at x = 1/e, so g has a relative minimum there (value g(1/e) = −1/e).

- (B) reverses the direction of the sign change.
- (C) forgets the "+ 1" from the product rule and solves ln x = 0.
- (D) would only be true if g′ kept one sign. But g′ = ln x + 1 is negative for 0 < x < 1/e and positive for x > 1/e.
</details>

## Question 4 (multiple choice · core)

A differentiable function f has f′(2) = 0. Which statement is a correct justification that f has a relative maximum at x = 2?

- (A) f′(2) = 0.
- (B) f′(x) changes from positive to negative at x = 2.
- (C) The graph of f′ has a maximum at x = 2.
- (D) f(2) is greater than f(0).

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** This is exactly the condition in the First Derivative Test, and f is continuous at 2 because it is differentiable.

- (A) only shows that x = 2 is a critical point. It could be a maximum, a minimum or neither.
- (C) is about the graph of f′, not f. In fact, if f′ has a maximum value of 0 at x = 2, then f′ ≤ 0 on both sides, so f′ cannot change from positive to negative at x = 2. Usually f is decreasing through x = 2 and has **neither** a maximum nor a minimum there.
- (D) compares f(2) with one other value. A relative maximum needs f(2) ≥ f(x) for all x near 2.
</details>

## Question 5 (graph of f′ · core)

The function f is continuous on −4 ≤ x ≤ 5. The graph of its derivative f′ is shown below. It is made of straight segments joining (−4, 2), (−2, −2), (0, 0), (1, −2), (3, 2) and (5, 1).

<figure>
<svg viewBox="0 0 520 260" role="img" aria-labelledby="q5b-title q5b-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="q5b-title">Graph of f′ for Question 5</title>
<desc id="q5b-desc">A graph of f′ made of straight segments from (−4, 2) down to (−2, −2), up to (0, 0), down to (1, −2), up to (3, 2), then down gently to (5, 1). It crosses the x-axis at x = −3 and x = 2, and touches the x-axis at x = 0 without crossing it.</desc>
<rect x="0" y="0" width="520" height="260" fill="#ffffff"/>
<line x1="40" y1="140" x2="495" y2="140" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="240" y1="230" x2="240" y2="45" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="60" y1="136" x2="60" y2="144"/><line x1="105" y1="136" x2="105" y2="144"/><line x1="150" y1="136" x2="150" y2="144"/><line x1="195" y1="136" x2="195" y2="144"/><line x1="285" y1="136" x2="285" y2="144"/><line x1="330" y1="136" x2="330" y2="144"/><line x1="375" y1="136" x2="375" y2="144"/><line x1="420" y1="136" x2="420" y2="144"/><line x1="465" y1="136" x2="465" y2="144"/>
<line x1="236" y1="70" x2="244" y2="70"/><line x1="236" y1="105" x2="244" y2="105"/><line x1="236" y1="175" x2="244" y2="175"/><line x1="236" y1="210" x2="244" y2="210"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="60" y="158">−4</text><text x="95" y="158">−3</text><text x="150" y="128">−2</text><text x="195" y="128">−1</text><text x="285" y="128">1</text><text x="340" y="158">2</text><text x="375" y="158">3</text><text x="420" y="158">4</text><text x="465" y="158">5</text>
<text x="505" y="144">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="232" y="74">2</text><text x="232" y="109">1</text><text x="232" y="179">−1</text><text x="232" y="214">−2</text><text x="256" y="42">y</text>
</g>
<polyline points="60,70 150,210 240,140 285,210 375,70 465,105" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<text x="395" y="66" font-size="13" fill="#1d2b44">y = f′(x)</text>
</svg>
<figcaption>Graph of f′ for Question 5. This is the derivative, not f itself.</figcaption>
</figure>

(a) Find the x-coordinate of each relative maximum of f on −4 < x < 5. Justify your answer.
(b) Find the x-coordinate of each relative minimum of f on −4 < x < 5. Justify your answer.
(c) Does f have a relative extremum at x = 0? Justify your answer.
(d) The graph of f′ has a lowest point at x = −2. A student says f has a relative minimum at x = −2. Is the student right? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

First locate the zeros of f′. The segment from (−4, 2) to (−2, −2) has slope −2 and crosses the axis at x = −3. The graph touches the axis at (0, 0). The segment from (1, −2) to (3, 2) has slope 2 and crosses at x = 2. So the critical points in −4 < x < 5 are x = −3, 0 and 2.

**(a)** f has a relative maximum at **x = −3**, because f′ changes from positive to negative at x = −3.

**(b)** f has a relative minimum at **x = 2**, because f′ changes from negative to positive at x = 2.

**(c)** No. f′(0) = 0, but f′(x) < 0 on both sides of x = 0 (on (−3, 0) and on (0, 2)). f′ does not change sign, so f has neither a relative maximum nor a relative minimum at x = 0.

**(d)** No. f′(−2) = −2, which is not 0, and f′ exists there, so x = −2 is not a critical point of f. f′ < 0 on both sides of x = −2, so f is decreasing through x = −2. The lowest point of the graph of f′ is where f is decreasing most steeply, not a minimum of f.

| Point | What earns it |
|---|---|
| 1 | Zeros of f′ at x = −3, 0 and 2 |
| 1 | (a) x = −3, with "f′ changes from positive to negative" as the reason |
| 1 | (b) x = 2, with "f′ changes from negative to positive" as the reason |
| 1 | (c) Neither at x = 0, because f′ does not change sign (negative on both sides) |
| 1 | (d) Not a minimum: f′(−2) ≠ 0 (or f′ < 0 on both sides), so f is decreasing there |
</details>

## Question 6 (constructed response · core)

A function p is defined by

- p(x) = x² + 1 for x < 1
- p(x) = 1 − x for x ≥ 1

(a) Find p′(x) for x < 1 and for x > 1. Show that p′ changes from positive to negative at x = 1.
(b) Is p continuous at x = 1? Show your reasoning.
(c) A student says: "p′ changes from positive to negative at x = 1, so by the First Derivative Test p has a relative maximum at x = 1." Explain why the test cannot be used here, and decide whether p has a relative maximum at x = 1.
(d) Find any other relative extremum of p, and justify it.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** For x < 1, p′(x) = 2x. For x > 1, p′(x) = −1. On 0 < x < 1, p′(x) = 2x > 0. For x > 1, p′(x) = −1 < 0. So p′ changes from positive to negative at x = 1.

**(b)** No. As x → 1 from the left, p(x) = x² + 1 → 2. But p(1) = 1 − 1 = 0. The left-hand limit (2) is not equal to p(1) (0), so p is not continuous at x = 1.

**(c)** The First Derivative Test needs p to be continuous at x = 1, and it is not. In fact p(1) = 0 is **not** a relative maximum: for x just less than 1, p(x) is close to 2, which is greater than p(1). (It is not a relative minimum either, because for x just greater than 1, p(x) = 1 − x < 0 = p(1).) So p has neither at x = 1.

**(d)** For x < 1, p′(x) = 2x = 0 at x = 0. p′(−1/2) = −1 < 0 and p′(1/2) = 1 > 0, so p′ changes from negative to positive at x = 0, and p is continuous there. p has a relative minimum at x = 0, with value p(0) = 1.

| Point | What earns it |
|---|---|
| 1 | p′(x) = 2x for x < 1 and p′(x) = −1 for x > 1, with the sign change shown |
| 1 | Not continuous at 1: left-hand limit 2 ≠ p(1) = 0 |
| 1 | States that the test requires continuity at x = 1 |
| 1 | Concludes no relative maximum at x = 1, using a nearby value greater than p(1) |
| 1 | Relative minimum at x = 0 (value 1), justified by p′ changing from negative to positive |
</details>

## Question 7 (constructed response · stretch)

Let r(x) = (x² − 3)eˣ.

(a) Show that r′(x) = (x + 3)(x − 1)eˣ.
(b) Find the x-coordinates of all relative extrema of r and classify each one. Justify your answers.
(c) Find the exact value of each relative extremum.
(d) A student writes: "r′(−3) = 0 and r′(1) = 0, so r has a relative maximum at one of them and a relative minimum at the other." Explain why this is not a valid justification.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Product rule: r′(x) = 2x · eˣ + (x² − 3)eˣ = (x² + 2x − 3)eˣ = (x + 3)(x − 1)eˣ.

**(b)** eˣ > 0 for all x, so the sign of r′ is the sign of (x + 3)(x − 1). Critical points: x = −3 and x = 1.

| Interval | Test value | (x + 3)(x − 1) | Sign of r′ |
|---|---|---|---|
| (−∞, −3) | x = −4 | (−1)(−5) = 5 | + |
| (−3, 1) | x = 0 | (3)(−1) = −3 | − |
| (1, ∞) | x = 2 | (5)(1) = 5 | + |

r has a relative maximum at x = −3, because r′ changes from positive to negative there. r has a relative minimum at x = 1, because r′ changes from negative to positive there.

**(c)** r(−3) = (9 − 3)e⁻³ = **6e⁻³**. r(1) = (1 − 3)e = **−2e**.

**(d)** r′(c) = 0 only shows that c is a critical point. A critical point need not be an extremum at all (f′ may keep its sign), and even if both are extrema, r′ = 0 does not say which is which. The justification must give the change of sign of r′ at each point.

| Point | What earns it |
|---|---|
| 1 | Correct product rule and factorisation to (x + 3)(x − 1)eˣ |
| 1 | Uses eˣ > 0 (or test values) to find the sign of r′ on each interval |
| 1 | Relative maximum at x = −3 and relative minimum at x = 1, each justified by the sign change of r′ |
| 1 | Values 6e⁻³ and −2e |
| 1 | Explains that r′ = 0 identifies candidates only; the change of sign decides |

Decimal values (about 0.299 and −5.44) are acceptable as a check, but exact answers are expected.
</details>

## How did you do?

- **Q1 or Q3 wrong:** redo Worked example 1 in the [study guide](/advanced-course-resources/calculus-ab/5-4-first-derivative-test-determine-relative-study-guide/), especially the "neither" case.
- **Q2 or Q7(c) wrong:** reread "Mixing up location and value" in the misconceptions list.
- **Q4 or Q7(d) wrong:** reread "Writing a justification".
- **Q5 wrong:** use the table "Reading extrema from a graph of f′".
- **Q6 wrong:** reread "When the test does not apply".

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/5-4-first-derivative-test-determine-relative-checklist/).
