---
resourceId: "mb-ap-calcab-5.3-practice"
title: "Determining Intervals on Which a Function Is Increasing or Decreasing: Practice Questions (Calculus AB 5.3)"
description: "Seven original Marlbridge practice questions on intervals of increase and decrease from formulas, graphs of f′ and contexts, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 5
topics: ["5.3"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Derivative rules, including the product and chain rules"
  - "Factoring polynomials"
prerequisiteResources: ["mb-ap-calcab-5.3-study-guide"]
learningObjectives:
  - "Find intervals of increase and decrease from a formula using a sign chart for the derivative"
  - "Read intervals of increase and decrease of f from a graph of f′"
  - "Interpret the sign of a rate of change in context"
  - "Write justifications that name the derivative and its sign"
skills: ["2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Give exact answers and write intervals in interval notation or as inequalities."
related: ["mb-ap-calcab-5.3-study-guide", "mb-ap-calcab-5.3-revision-notes", "mb-ap-calcab-5.3-checklist"]
next: "mb-ap-calcab-5.3-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, exact answers, and intervals may be written as open intervals. Any context and data are invented for practice. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

Let f(x) = x⁴ − 8x². On which intervals is f decreasing?

- (A) (−2, 0) and (2, ∞)
- (B) (−∞, −2) and (0, 2)
- (C) (−2, 2)
- (D) (−∞, 0)

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** f′(x) = 4x³ − 16x = 4x(x + 2)(x − 2), which is 0 at x = −2, 0 and 2. Test values: f′(−3) = −60, f′(−1) = 12, f′(1) = −12, f′(3) = 60. So f′ < 0 on (−∞, −2) and (0, 2), and f is decreasing there.

- (A) lists the intervals where f′ > 0, so these are where f is **increasing**.
- (C) ignores the split point x = 0, where f′ changes sign. On (−2, 0), f′ is positive.
- (D) looks only at the factor x and forgets the factors (x + 2) and (x − 2).
</details>

## Question 2 (multiple choice · core)

The derivative of a function f is f′(x) = (x − 1)²(x + 3). What is the largest interval on which f is increasing?

- (A) (−3, 1)
- (B) (−3, ∞)
- (C) (1, ∞)
- (D) (−∞, −3)

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** f′ = 0 at x = −3 and x = 1. Test values: f′(−4) = −25 < 0, f′(0) = 3 > 0, f′(2) = 5 > 0. The squared factor (x − 1)² is never negative, so f′ does **not** change sign at x = 1. f′ > 0 on (−3, ∞) except at the single point x = 1, so f is increasing on (−3, ∞).

- (A) assumes the sign must change at every zero of f′, so it stops at x = 1. f is increasing on (−3, 1), but that is not the largest interval.
- (C) also treats x = 1 as the end of the interval of increase and keeps only the part to the right of it.
- (D) is where f′ < 0, so f is **decreasing** there.
</details>

## Question 3 (multiple choice · core)

Let g(x) = x²e⁻ˣ. On which interval is g increasing?

- (A) (0, 2)
- (B) (−∞, 0) and (2, ∞)
- (C) (−∞, 0)
- (D) (0, ∞)

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** By the product rule, g′(x) = 2xe⁻ˣ − x²e⁻ˣ = x(2 − x)e⁻ˣ. Since e⁻ˣ > 0 for all x, the sign of g′ is the sign of x(2 − x). That is positive only for 0 < x < 2. So g is increasing on (0, 2).

- (B) gives the intervals where g′ < 0, where g is decreasing.
- (C) multiplies the two derivatives, (2x)(−e⁻ˣ) = −2xe⁻ˣ, instead of using the product rule. That expression is positive for x < 0.
- (D) uses only the factor x and ignores (2 − x).
</details>

## Question 4 (multiple choice · core)

The graph of f′, the derivative of a function f, is above the x-axis and falling on the interval (1, 4). Which statement must be true?

- (A) f is increasing on (1, 4).
- (B) f is decreasing on (1, 4).
- (C) f′(x) < 0 on (1, 4).
- (D) f is increasing on (1, 4) only if f(1) > 0.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** "Above the x-axis" means f′(x) > 0 on (1, 4), so f is increasing there.

- (B) reads the **direction** of the graph of f′ instead of its **sign**. A falling f′ tells you about concavity, not about whether f rises.
- (C) confuses "falling" with "negative". The values of f′ are positive, just getting smaller.
- (D) mixes up the value of f with its derivative. Whether f is increasing has nothing to do with the sign of f(1).
</details>

## Question 5 (graph of f′ · core)

The function f is continuous on −3 ≤ x ≤ 5. The graph of its derivative f′ is shown below. It is made of straight segments joining (−3, 2), (−1, −2), (2, 1), (3, 1) and (5, −1).

<figure>
<svg viewBox="0 0 520 260" role="img" aria-labelledby="q5-title q5-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="q5-title">Graph of f′ for Question 5</title>
<desc id="q5-desc">A graph of f′ made of straight segments from (−3, 2) down to (−1, −2), up to (2, 1), level to (3, 1), then down to (5, −1). It crosses the x-axis at x = −2, x = 1 and x = 4.</desc>
<rect x="0" y="0" width="520" height="260" fill="#ffffff"/>
<line x1="40" y1="140" x2="490" y2="140" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="210" y1="230" x2="210" y2="45" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="60" y1="136" x2="60" y2="144"/><line x1="110" y1="136" x2="110" y2="144"/><line x1="160" y1="136" x2="160" y2="144"/><line x1="260" y1="136" x2="260" y2="144"/><line x1="310" y1="136" x2="310" y2="144"/><line x1="360" y1="136" x2="360" y2="144"/><line x1="410" y1="136" x2="410" y2="144"/><line x1="460" y1="136" x2="460" y2="144"/>
<line x1="206" y1="70" x2="214" y2="70"/><line x1="206" y1="105" x2="214" y2="105"/><line x1="206" y1="175" x2="214" y2="175"/><line x1="206" y1="210" x2="214" y2="210"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="60" y="158">−3</text><text x="98" y="158">−2</text><text x="160" y="128">−1</text><text x="266" y="158">1</text><text x="310" y="158">2</text><text x="360" y="158">3</text><text x="410" y="128">4</text><text x="460" y="128">5</text>
<text x="500" y="144">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="202" y="74">2</text><text x="202" y="109">1</text><text x="202" y="179">−1</text><text x="202" y="214">−2</text><text x="226" y="42">y</text>
</g>
<polyline points="60,70 160,210 310,105 360,105 460,175" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<text x="330" y="95" font-size="13" fill="#1d2b44">y = f′(x)</text>
</svg>
<figcaption>Graph of f′ for Question 5. This is the derivative, not f itself.</figcaption>
</figure>

(a) Find the intervals on which f is increasing. Justify your answer.
(b) Find the intervals on which f is decreasing. Justify your answer.
(c) On which interval is f′ increasing while f is decreasing?
(d) Is f(3) greater than or less than f(1)? Justify your answer without finding f.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

First locate the zeros of f′. The segment from (−3, 2) to (−1, −2) crosses the axis at x = −2. The segment from (−1, −2) to (2, 1) has slope 1, so it crosses at x = 1. The segment from (3, 1) to (5, −1) crosses at x = 4.

**(a)** f is increasing on (−3, −2) and on (1, 4), because f′(x) > 0 on those intervals (the graph of f′ is above the x-axis).

**(b)** f is decreasing on (−2, 1) and on (4, 5), because f′(x) < 0 on those intervals (the graph of f′ is below the x-axis).

**(c)** f′ is increasing on (−1, 2) (the segment going up). f is decreasing on (−2, 1). Both are true on **(−1, 1)**. On this interval f is still falling, but less and less steeply.

**(d)** f(3) > f(1). f is increasing on (1, 4) because f′(x) > 0 there, and 1 and 3 both lie in [1, 4], where f is continuous. So f(3) > f(1).

| Point | What earns it |
|---|---|
| 1 | Zeros of f′ at x = −2, 1 and 4 |
| 1 | (a) Increasing on (−3, −2) and (1, 4), with a reason that uses the sign of f′ |
| 1 | (b) Decreasing on (−2, 1) and (4, 5), with a reason that uses the sign of f′ |
| 1 | (c) (−1, 1) |
| 1 | (d) f(3) > f(1), justified by f increasing on an interval containing [1, 3] because f′ > 0 |

A reason such as "because f′ is going up" earns no justification point in (a) or (b): it is the sign of f′ that matters.
</details>

## Question 6 (constructed response · core)

A storage tank holds water. For 0 ≤ t ≤ 8, where t is in hours, the volume of water in the tank changes at the rate

**V′(t) = 3t² − 24t + 36 litres per hour.**

(a) Find the time intervals during which the volume of water in the tank is increasing. Justify your answer.
(b) Find V′(4) and explain its meaning in context.
(c) Without finding V, explain whether there is more water in the tank at t = 6 or at t = 2.
(d) A student says: "V′ is increasing on 4 < t < 6, so the volume of water is increasing then." Explain the error.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** V′(t) = 3(t² − 8t + 12) = 3(t − 2)(t − 6), which is 0 at t = 2 and t = 6.

| Interval | Test value | V′(test value) | Sign |
|---|---|---|---|
| 0 < t < 2 | t = 1 | 15 | + |
| 2 < t < 6 | t = 4 | −12 | − |
| 6 < t < 8 | t = 7 | 15 | + |

The volume is increasing on 0 < t < 2 and on 6 < t < 8, because V′(t) > 0 on those intervals.

**(b)** V′(4) = 48 − 96 + 36 = −12. At time t = 4 hours, the volume of water in the tank is decreasing at a rate of 12 litres per hour.

**(c)** There is more water at t = 2. V′(t) < 0 for 2 < t < 6, so V is decreasing on that interval, and V(6) < V(2).

**(d)** Whether V is increasing depends on the **sign** of V′, not on whether V′ is rising. On 4 < t < 6, V′ is rising (from −12 towards 0) but it is still negative, so the volume is **decreasing**, just more slowly.

| Point | What earns it |
|---|---|
| 1 | Factors V′ (or solves V′ = 0) to get t = 2 and t = 6 |
| 1 | Increasing on 0 < t < 2 and 6 < t < 8, with the reason V′(t) > 0 |
| 1 | V′(4) = −12 with units, interpreted as the volume decreasing at 12 litres per hour at t = 4 |
| 1 | More water at t = 2, because V′ < 0 (V decreasing) on 2 < t < 6 |
| 1 | Explains that V′ is negative on 4 < t < 6, so the volume is decreasing although V′ is increasing |
</details>

## Question 7 (constructed response · stretch)

Let k(x) = x^(2/3)(x − 10), defined for all real x (the cube root of a negative number is negative).

(a) Show that k′(x) = 5(x − 4) / (3x^(1/3)) for x ≠ 0.
(b) Explain why x = 0 must appear on the sign chart for k′, even though k′(0) is not 0.
(c) Find the intervals on which k is increasing and the intervals on which k is decreasing. Justify your answer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Expand first: k(x) = x^(5/3) − 10x^(2/3). Then

k′(x) = (5/3)x^(2/3) − (20/3)x^(−1/3).

Take out the common factor (5/3)x^(−1/3):

k′(x) = (5/3)x^(−1/3)(x − 4) = 5(x − 4)/(3x^(1/3)).

**(b)** At x = 0 the denominator 3x^(1/3) is 0, so k′(0) does not exist. k′ can change sign where it is undefined, not only where it is 0, so x = 0 is a split point. (x = 0 is a critical point of k because k(0) = 0 is defined but k′(0) is not.)

**(c)** Split points: x = 0 and x = 4.

| Interval | Test value | Sign of x − 4 | Sign of x^(1/3) | k′(test value) |
|---|---|---|---|---|
| (−∞, 0) | x = −1 | − | − | 25/3 > 0 |
| (0, 4) | x = 1 | − | + | −5 < 0 |
| (4, ∞) | x = 8 | + | + | 10/3 > 0 |

k is increasing on (−∞, 0) and on (4, ∞), because k′(x) > 0 there. k is decreasing on (0, 4), because k′(x) < 0 there.

| Point | What earns it |
|---|---|
| 1 | Correct derivative of x^(5/3) − 10x^(2/3) (or correct product rule) |
| 1 | Factors to 5(x − 4)/(3x^(1/3)) |
| 1 | States that k′ is undefined at x = 0 and that a derivative can change sign there |
| 1 | Correct signs of k′ on all three intervals |
| 1 | Correct conclusions for increasing and decreasing, each with the sign of k′ as the reason |

Acceptable alternative for (a): product rule, k′(x) = (2/3)x^(−1/3)(x − 10) + x^(2/3), then put over the common denominator 3x^(1/3).
</details>

## How did you do?

- **Q1 or Q3 wrong:** redo Worked example 1 and the sign-chart method in the [study guide](/advanced-course-resources/calculus-ab/5-3-determining-intervals-on-which-function-study-guide/).
- **Q2 wrong:** reread "A single zero does not break the pattern" (the x³ example).
- **Q4 or Q5 wrong:** redo Worked example 2 and Figure 1: read the **sign** of f′, not its direction.
- **Q6 wrong:** see "Increasing and decreasing in context".
- **Q7 wrong:** see "When the domain has a gap" and the list of split points.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/5-3-determining-intervals-on-which-function-checklist/).
