---
resourceId: "mb-ap-calcab-5.5-practice"
title: "Using the Candidates Test to Find Absolute Extrema: Practice Questions (Calculus AB 5.5)"
description: "Seven original Marlbridge practice questions on absolute extrema over closed intervals, from tables, formulas and a context, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 5
topics: ["5.5"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Finding critical points, including where f′ does not exist"
prerequisiteResources: ["mb-ap-calcab-5.5-study-guide"]
learningObjectives:
  - "Apply the Candidates Test to polynomial, trigonometric, root and exponential functions"
  - "Decide whether the Candidates Test applies to a given function and interval"
  - "Report absolute extrema as values, with the x-values where they occur"
  - "Interpret an absolute extremum in context"
skills: ["1", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Question 6 allows a graphing calculator; give decimals to 3 places. All other questions are no calculator, with exact answers."
related: ["mb-ap-calcab-5.5-study-guide", "mb-ap-calcab-5.5-revision-notes", "mb-ap-calcab-5.5-checklist"]
next: "mb-ap-calcab-5.5-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions: **no calculator** except in Question 6, angles in radians, and exact answers unless stated. The context in Question 6 is invented. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

What is the absolute maximum value of f(x) = x² − 6x + 2 on the interval [0, 5]?

- (A) −7
- (B) −3
- (C) 2
- (D) 3

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** f is a polynomial, so it is continuous on [0, 5]. f′(x) = 2x − 6 = 0 at x = 3, which is inside the interval. Candidates: f(0) = 2, f(3) = 9 − 18 + 2 = −7, f(5) = 25 − 30 + 2 = −3. The largest value is 2, at the endpoint x = 0.

- (A) is the absolute **minimum** value, at the only critical point. A critical point is not automatically a maximum.
- (B) is f(5): it checks only the right endpoint.
- (D) is the x-value of the critical point, not a value of f.
</details>

## Question 2 (multiple choice · core)

Let f(x) = x + 2 cos x. What is the absolute minimum value of f on [0, π]?

- (A) π − 2
- (B) 5π/6 − √3
- (C) 2
- (D) π/6 + √3

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** f is continuous on [0, π]. f′(x) = 1 − 2 sin x = 0 when sin x = 1/2, so x = π/6 or x = 5π/6, both in the interval. Candidates:

- f(0) = 0 + 2(1) = 2
- f(π/6) = π/6 + 2(√3/2) = π/6 + √3 ≈ 2.256
- f(5π/6) = 5π/6 + 2(−√3/2) = 5π/6 − √3 ≈ 0.886
- f(π) = π + 2(−1) = π − 2 ≈ 1.142

The smallest is 5π/6 − √3.

- (A) is the value at the right endpoint. It is the smallest of the endpoint values, but the interior critical point x = 5π/6 is lower.
- (C) is the value at x = 0, the left endpoint.
- (D) is the absolute **maximum** value.
</details>

## Question 3 (multiple choice · core)

A function f is continuous on [−3, 5]. It is differentiable on (−3, 5) except at x = 1, and f′(x) = 0 only at x = −1 and x = 3. Some values of f are shown.

| x | −3 | −1 | 1 | 3 | 5 |
|---|---|---|---|---|---|
| f(x) | 4 | −2 | 7 | 1 | 7 |

Which statement is true?

- (A) The absolute maximum value of f is 7, and it occurs only at x = 1.
- (B) The absolute maximum value of f is 7, at x = 1 and x = 5; the absolute minimum value is −2, at x = −1.
- (C) f has no absolute maximum on [−3, 5], because f′(1) does not exist.
- (D) The absolute minimum value of f is 1, at x = 3.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** f is continuous on a closed interval, so the Candidates Test applies. The candidates are the endpoints −3 and 5, and the critical points −1, 1 (f′ does not exist) and 3 (f′ = 0). The table gives f at every candidate. The largest value, 7, occurs twice, at x = 1 and x = 5. The smallest, −2, occurs at x = −1.

- (A) forgets the endpoint x = 5, which ties for the maximum.
- (C) confuses "f′ does not exist" with "f is not continuous". A point where f′ does not exist is a candidate, not a reason the test fails.
- (D) uses the value at x = 3, a point where f′ = 0, but ignores x = −1, where f is lower still.
</details>

## Question 4 (multiple choice · core)

For which function and interval does the Candidates Test **not** guarantee the absolute extrema?

- (A) x³ − x on [−2, 2]
- (B) |x − 1| on [0, 3]
- (C) 1/(x − 2) on [0, 3]
- (D) √x on [0, 4]

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** 1/(x − 2) is not continuous at x = 2, which is inside [0, 3]. Near x = 2 the function grows without bound in both directions, so it has no absolute maximum or minimum on [0, 3].

- (A) is a polynomial on a closed interval. The test applies.
- (B) is continuous on [0, 3]. The corner at x = 1 makes f′(1) fail to exist, so x = 1 is simply one of the candidates.
- (D) is continuous on [0, 4] (from the right at 0). The test applies, and f′ failing to exist at the endpoint x = 0 does not matter, because endpoints are candidates anyway.
</details>

## Question 5 (constructed response · core)

Let f(x) = x√(9 − x²).

(a) Show that f′(x) = (9 − 2x²)/√(9 − x²).
(b) Find all critical points of f in the open interval (−2, 3).
(c) Find the absolute maximum and minimum values of f on [−2, 3]. Justify your answer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Product rule with the chain rule:

f′(x) = 1 · √(9 − x²) + x · (−2x)/(2√(9 − x²)) = √(9 − x²) − x²/√(9 − x²).

Write over a common denominator: f′(x) = ((9 − x²) − x²)/√(9 − x²) = **(9 − 2x²)/√(9 − x²)**.

**(b)** f′(x) = 0 when 9 − 2x² = 0, so x² = 9/2 and x = ±3/√2 = ±3√2/2 (about ±2.12). Only **x = 3√2/2** is in (−2, 3). f′ does not exist at x = ±3, but those are not inside (−2, 3). So x = 3√2/2 is the only critical point.

**(c)** f is continuous on [−2, 3], since 9 − x² ≥ 0 there. Candidates:

| x | −2 | 3√2/2 | 3 |
|---|---|---|---|
| f(x) | −2 · √5 = −2√5 | (3/√2) · (3/√2) = 9/2 | 3 · 0 = 0 |

The absolute maximum value is **9/2**, at x = 3√2/2. The absolute minimum value is **−2√5**, at x = −2.

| Point | What earns it |
|---|---|
| 1 | Correct product and chain rule, simplified to the given form |
| 1 | Solves 9 − 2x² = 0 and keeps only x = 3√2/2 (rejects −3√2/2 as outside the interval) |
| 1 | Evaluates f at x = −2, 3√2/2 and 3 |
| 1 | States both answers as values with their x-locations, with a reason that names continuity on the closed interval or the candidates |

Note: x = −3√2/2 gives f = −9/2 = −4.5, which is lower than −2√5 ≈ −4.472, but it is outside [−2, 3]. Using it loses the third and fourth points.
</details>

## Question 6 (constructed response · calculator · core)

In an invented laboratory demonstration, a dye is added to a tank of water. The concentration of dye at a sampling point is modelled by

C(t) = 12t·e^(−t/3) + 2, for 0 ≤ t ≤ 10,

where C is in milligrams per litre (mg/L) and t is in minutes.

(a) Find C′(t).
(b) Find the absolute maximum and absolute minimum concentrations for 0 ≤ t ≤ 10. Justify your answer.
(c) A student says: "The concentration is decreasing at t = 10, so the minimum must be at t = 10." Explain why the student is wrong.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Product rule: C′(t) = 12e^(−t/3) + 12t · (−1/3)e^(−t/3) = 12e^(−t/3) − 4t·e^(−t/3) = **4e^(−t/3)(3 − t)** mg/L per minute.

**(b)** e^(−t/3) is never 0 and C′ exists for all t, so the only critical point is t = 3. C is continuous on [0, 10]. Candidates (calculator values):

| t (min) | 0 | 3 | 10 |
|---|---|---|---|
| C(t) (mg/L) | 2 | 36e^(−1) + 2 ≈ 15.244 | 120e^(−10/3) + 2 ≈ 6.281 |

The absolute maximum concentration is about **15.244 mg/L**, at t = 3 minutes. The absolute minimum is **2 mg/L**, at t = 0.

**(c)** C is decreasing at t = 10 (C′(10) ≈ −0.999), so C(10) is lower than the values just before it. But that only compares t = 10 with nearby times. The minimum must be found by comparing all candidates. C(10) ≈ 6.281 is larger than C(0) = 2, so the minimum is at t = 0, the moment the dye was added.

| Point | What earns it |
|---|---|
| 1 | Correct C′(t) by the product and chain rules |
| 1 | Identifies t = 3 as the only critical point, with a reason (e^(−t/3) ≠ 0) |
| 1 | Evaluates C at t = 0, 3 and 10, and gives the maximum and minimum with units and times |
| 1 | Explains that decreasing at an endpoint does not make it the minimum; the candidates must be compared |

Rounding: write 15.244 and 6.281 to 3 decimal places. Answers that round during the working (for example, using e^(−1) ≈ 0.37) may give 15.32 and should be treated as an accuracy error.
</details>

## Question 7 (constructed response · stretch)

Let f(x) = x³ − 27x + k, where k is a constant.

(a) The absolute maximum value of f on [0, 4] is 10. Find k.
(b) Using your value of k, find the absolute minimum value of f on [0, 4].
(c) Now consider the **open** interval (0, 4). Does f have an absolute maximum there? Does it have an absolute minimum? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** f′(x) = 3x² − 27 = 3(x − 3)(x + 3). The critical point in (0, 4) is x = 3 (x = −3 is outside). Candidates:

f(0) = k, f(3) = 27 − 81 + k = k − 54, f(4) = 64 − 108 + k = k − 44.

The largest of these is always k, at x = 0. So k = 10.

**(b)** With k = 10: f(0) = 10, f(3) = −44, f(4) = −34. The absolute minimum value is **−44**, at x = 3.

**(c)** On (0, 4), x = 3 is still in the interval, so the absolute minimum **−44** at x = 3 still exists. But x = 0 is no longer included. Near x = 0, f decreases from values close to 10, so f(x) gets as close to 10 as you like without reaching it. Every value in (0, 4) is beaten by one closer to 0, so there is **no absolute maximum**.

| Point | What earns it |
|---|---|
| 1 | Finds x = 3 as the only critical point in the interval and expresses the three candidates in terms of k |
| 1 | Concludes the maximum is f(0) = k, so k = 10 |
| 1 | Absolute minimum −44 at x = 3 |
| 1 | Open interval: minimum still −44 at x = 3; no absolute maximum because the value 10 is approached but not reached |
</details>

## How did you do?

- **Q1 or Q3 wrong:** revisit "The Candidates Test, step by step" in the [study guide](/advanced-course-resources/calculus-ab/5-5-candidates-test-determine-absolute-global-study-guide/), especially the endpoints and ties.
- **Q2 or Q5 wrong:** redo Worked example 1 and check you kept only critical points inside the interval.
- **Q4 or Q7(c) wrong:** reread "When the test does not apply".
- **Q6 wrong:** check "With and without technology" and "How to write the answer".

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/5-5-candidates-test-determine-absolute-global-checklist/).
