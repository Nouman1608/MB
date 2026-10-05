---
resourceId: "mb-ap-calcab-5.2-practice"
title: "Extreme Value Theorem, Global Versus Local Extrema, and Critical Points: Practice Questions (Calculus AB 5.2)"
description: "Seven original Marlbridge practice questions on the Extreme Value Theorem, critical points and global versus local extrema, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 5
topics: ["5.2"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Derivative rules, including fractional powers"
  - "Continuity on an interval"
prerequisiteResources: ["mb-ap-calcab-5.2-study-guide"]
learningObjectives:
  - "Find all critical points of a function, including those where the derivative does not exist"
  - "Decide whether the Extreme Value Theorem applies and explain why"
  - "Explain the link between local extrema and critical points, and its limits"
  - "Reason about where a global extremum can occur"
skills: ["1", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Give exact answers; decimals only as a check."
related: ["mb-ap-calcab-5.2-study-guide", "mb-ap-calcab-5.2-revision-notes", "mb-ap-calcab-5.2-checklist"]
next: "mb-ap-calcab-5.2-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, exact answers, and all contexts and data are fictional. EVT means the Extreme Value Theorem; in your own written answers, name it in full. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

What are the critical points of f(x) = 2x³ + 3x² − 12x + 5?

- (A) x = −2 and x = 1
- (B) x = −1 and x = 2
- (C) x = −1/2 only
- (D) x = 1 only

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** f′(x) = 6x² + 6x − 12 = 6(x² + x − 2) = 6(x + 2)(x − 1). This is 0 at x = −2 and x = 1. f′ is a polynomial, so it exists everywhere and there are no other critical points.

- (B) has the signs flipped: it solves (x − 2)(x + 1) = 0 instead of (x + 2)(x − 1) = 0.
- (C) solves f″(x) = 12x + 6 = 0. That is about concavity (Topic 5.6), not critical points.
- (D) loses the root x = −2, for example by dividing both sides by (x + 2).
</details>

## Question 2 (multiple choice · core)

For which function does the Extreme Value Theorem guarantee a maximum value and a minimum value on the given interval?

- (A) f(x) = tan x on [0, π]
- (B) f(x) = (x² − 1)/(x − 1) on [0, 2]
- (C) f(x) = x² on (−1, 3)
- (D) f(x) = √(x + 4) + cos x on [−4, 5]

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** √(x + 4) is continuous for x ≥ −4, and cos x is continuous everywhere, so their sum is continuous on the closed interval [−4, 5]. The theorem needs only continuity on a closed interval; it does not matter that √(x + 4) has no derivative at x = −4.

- (A) tan x is undefined at x = π/2, which is inside [0, π].
- (B) is undefined at x = 1 (a hole), so it is not continuous on [0, 2]. It happens to have a maximum and a minimum anyway, but the theorem does not guarantee them.
- (C) The interval is open. x² has no maximum on (−1, 3), because values approach 9 but x = 3 is excluded.
</details>

## Question 3 (multiple choice · core)

How many critical points does g(x) = |x² − 4| have?

- (A) 1
- (B) 2
- (C) 3
- (D) 4

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** For −2 < x < 2, g(x) = 4 − x², so g′(x) = −2x, which is 0 at x = 0. For |x| > 2, g(x) = x² − 4, so g′(x) = 2x, which is never 0 there. At x = ±2 the graph has corners: at x = 2 the left-hand derivative is −4 and the right-hand derivative is 4, so g′(2) does not exist (and similarly at −2). g is defined at all three points. Critical points: x = −2, 0, 2.

- (A) counts only g′ = 0 and misses the corners.
- (B) counts only the corners and misses x = 0.
- (D) has no basis: there is no fourth point where g′ is 0 or undefined.
</details>

## Question 4 (multiple choice · core)

A function f is differentiable for all x, and f′(3) = 0. Which statement must be true?

- (A) f has a local extremum at x = 3.
- (B) x = 3 is a critical point of f, but f may or may not have a local extremum there.
- (C) f has its global maximum at x = 3.
- (D) f′(x) changes sign at x = 3.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** f′(3) = 0 and f is defined at 3, so 3 is a critical point by definition. A critical point is only a candidate: f(x) = (x − 3)³ has f′(3) = 0 but no extremum at 3.

- (A) reverses the true statement. Local extrema occur at critical points; critical points need not be extrema.
- (C) Even a local maximum need not be global, and here there may be no extremum at all.
- (D) The example (x − 3)³ has f′(x) = 3(x − 3)² ≥ 0 on both sides, so no sign change.
</details>

## Question 5 (constructed response · core)

Let h(x) = x^(1/3)(x + 4), where x^(1/3) is the cube root of x.

(a) Show that h′(x) = 4(x + 1)/(3x^(2/3)) for x ≠ 0.
(b) Find all critical points of h, giving a reason for each.
(c) Show that h has no local extremum at x = 0.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Expand: h(x) = x^(4/3) + 4x^(1/3). Then h′(x) = (4/3)x^(1/3) + (4/3)x^(−2/3). Factor out (4/3)x^(−2/3): h′(x) = (4/3)x^(−2/3)(x + 1) = 4(x + 1)/(3x^(2/3)).

**(b)** The top is 0 when x = −1, so h′(−1) = 0. The bottom is 0 when x = 0, so h′(0) does not exist; h(0) = 0 is defined. Critical points: **x = −1 and x = 0**.

**(c)** h(0) = 0. For small x > 0, x^(1/3) > 0 and x + 4 > 0, so h(x) > 0 (for example, h(0.001) ≈ 0.4). For small x < 0 (with x > −4), x^(1/3) < 0 and x + 4 > 0, so h(x) < 0 (for example, h(−0.001) ≈ −0.4). So there are points arbitrarily close to 0 with h above h(0) and with h below h(0). h(0) is neither a local maximum nor a local minimum. (The graph has a vertical tangent at 0.)

| Point | What earns it |
|---|---|
| 1 | Correct differentiation and simplification to 4(x + 1)/(3x^(2/3)) |
| 1 | x = −1 as a critical point because h′(−1) = 0 |
| 1 | x = 0 as a critical point because h′(0) does not exist **and** h(0) is defined |
| 1 | Sign of h on each side of 0 compared with h(0) = 0, concluding no local extremum |

Acceptable alternative for (c): h′(x) > 0 for x near 0 on both sides (the top is near 4 and the bottom is positive), so h is increasing through 0 and has no extremum there. This uses ideas from Topic 5.3.
</details>

## Question 6 (constructed response · core)

The water temperature in a fictional outdoor pond is T(t) °C, t hours after 06:00, for 0 ≤ t ≤ 12. T is differentiable. Some values are shown.

| t (hours) | 0 | 3 | 6 | 8 | 12 |
|---|---|---|---|---|---|
| T(t) (°C) | 14 | 19 | 25 | 24 | 16 |

(a) Explain why T must have a maximum value on [0, 12].
(b) A student says: "The maximum temperature is 25 °C, at t = 6." Explain why the table does not justify this.
(c) Explain why the maximum value cannot occur at t = 0 or t = 12.
(d) Hence explain why T′(c) = 0 for some c in (0, 12).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** T is differentiable, so it is continuous on the closed interval [0, 12]. By the Extreme Value Theorem, T has a maximum value on [0, 12].

**(b)** The table shows only five times. Between them the temperature could rise above 25 °C, for example somewhere between t = 6 and t = 8. The maximum value is at least 25 °C, but it is not known exactly.

**(c)** T(6) = 25 is greater than T(0) = 14 and T(12) = 16. So neither endpoint value is the largest value of T on [0, 12].

**(d)** The maximum occurs at some c strictly inside (0, 12). An interior global maximum is also a local maximum, because T(c) ≥ T(t) for all nearby t. Every local extremum occurs at a critical point, and T is differentiable, so T′(c) exists and must equal 0.

| Point | What earns it |
|---|---|
| 1 | Continuity on the **closed** interval [0, 12] (from differentiability) and the Extreme Value Theorem named |
| 1 | Explains that values between table entries are unknown, so 25 °C is only a lower bound for the maximum |
| 1 | Compares T(6) with both endpoint values |
| 1 | Interior maximum is a local maximum, hence a critical point, and differentiability gives T′(c) = 0 |

Note on (d): the Mean Value Theorem on [0, 12] does not give this. It gives T′(c) = (16 − 14)/12 = 1/6 for some c, not 0. The argument through the interior maximum is the one that works.
</details>

## Question 7 (constructed response · stretch)

Let f(x) = x³ + kx, where k is a constant.

(a) Find the critical points of f in terms of k. Consider k > 0, k = 0 and k < 0.
(b) Explain why, for every value of k, f has a maximum value on [−2, 2].
(c) Take k = 3. Without a table or graph, explain why the maximum value of f on [−2, 2] must occur at an endpoint, and find it.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** f′(x) = 3x² + k, which exists for every x.

- If k > 0: 3x² + k ≥ k > 0, so f′ is never 0. **No critical points.**
- If k = 0: f′(x) = 3x² = 0 only at **x = 0**.
- If k < 0: 3x² = −k gives **x = ±√(−k/3)**, two critical points.

**(b)** f is a polynomial, so it is continuous on the closed interval [−2, 2] for every k. By the Extreme Value Theorem, f has a maximum value there.

**(c)** With k = 3, part (a) shows f has no critical points. If the maximum occurred at some c inside (−2, 2), it would be a local maximum, and every local maximum occurs at a critical point. There are none, so the maximum must be at x = −2 or x = 2. f(−2) = −8 − 6 = −14 and f(2) = 8 + 6 = 14. The maximum value is **14, at x = 2**.

| Point | What earns it |
|---|---|
| 1 | f′(x) = 3x² + k with the correct critical points in all three cases |
| 1 | Polynomial, so continuous on the closed interval, and the Extreme Value Theorem named |
| 1 | Argues that an interior maximum would need a critical point, and there is none when k = 3 |
| 1 | Compares f(−2) = −14 and f(2) = 14 and states the maximum value 14 at x = 2 |
</details>

## How did you do?

- **Q1, Q3 or Q5 wrong:** redo Worked examples 1 and 2 in the [study guide](/advanced-course-resources/calculus-ab/5-2-extreme-value-theorem-global-versus-study-guide/), looking at the top **and** bottom of f′.
- **Q2 or Q6(a) wrong:** reread "The Extreme Value Theorem, part by part" and Worked example 3.
- **Q4 or Q7(c) wrong:** reread "Critical points" and Figure 2: local extrema need critical points, not the other way round.
- **Q6(b)–(d) wrong:** reread "Global versus local extrema" and Figure 1.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/5-2-extreme-value-theorem-global-versus-checklist/).
