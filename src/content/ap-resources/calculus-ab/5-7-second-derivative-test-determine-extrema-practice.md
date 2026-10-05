---
resourceId: "mb-ap-calcab-5.7-practice"
title: "Using the Second Derivative Test to Determine Extrema: Practice Questions (Calculus AB 5.7)"
description: "Seven original Marlbridge practice questions on classifying critical points with the second derivative test, inconclusive cases and absolute extrema, with suggested rubrics."
course: "calculus-ab"
unit: 5
topics: ["5.7"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Finding critical points and second derivatives"
prerequisiteResources: ["mb-ap-calcab-5.7-study-guide"]
learningObjectives:
  - "Classify critical points with the second derivative test and justify the conclusion"
  - "Recognise an inconclusive second derivative test and finish with the first derivative test"
  - "Decide when a relative extremum is also an absolute extremum on an interval"
skills: ["1", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Leave e and logarithms in exact answers."
related: ["mb-ap-calcab-5.7-study-guide", "mb-ap-calcab-5.7-revision-notes", "mb-ap-calcab-5.7-checklist"]
next: "mb-ap-calcab-5.7-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, exact answers, and every function named is twice differentiable on its domain unless the question says otherwise. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

A function f satisfies f′(4) = 0 and f″(4) = −3. Which statement must be true?

- (A) f has a relative maximum at x = 4.
- (B) f has a relative minimum at x = 4.
- (C) The graph of f has a point of inflection at x = 4.
- (D) No conclusion about x = 4 is possible without more information.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** f′(4) = 0 gives a horizontal tangent, and f″(4) < 0 means the graph is concave down there. By the second derivative test, f has a relative maximum at x = 4.

- (B) swaps the cases. Negative f″ means concave down, a cap, so a maximum.
- (C) confuses the test with inflection points. An inflection point needs the concavity to change; here f″(4) is negative, not zero, and nothing suggests a sign change.
- (D) would be right if f″(4) were 0. Since f″(4) is nonzero, the test is conclusive.
</details>

## Question 2 (multiple choice · core)

Let f(x) = x³ − 6x² − 15x + 2. At which value or values of x does f have a relative minimum?

- (A) x = −1 only
- (B) x = 2 only
- (C) x = 5 only
- (D) x = −1 and x = 5

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** f′(x) = 3x² − 12x − 15 = 3(x − 5)(x + 1), so the critical points are x = −1 and x = 5. f″(x) = 6x − 12. f″(5) = 18 > 0, so x = 5 is a relative minimum (f(5) = −98). f″(−1) = −18 < 0, so x = −1 is a relative maximum (f(−1) = 10).

- (A) swaps the cases: f″(−1) < 0 gives a maximum, not a minimum.
- (B) is where f″(x) = 0. That is the point of inflection, and f′(2) = −27 ≠ 0, so it is not a critical point.
- (D) lists both critical points without testing them.
</details>

## Question 3 (multiple choice · core)

The table gives values of f′ and f″ for a twice-differentiable function f.

| x | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| f′(x) | 0 | 0 | −2 | 0 |
| f″(x) | 0 | 5 | −4 | −1 |

At which value of x must f have a relative maximum?

- (A) x = 1
- (B) x = 2
- (C) x = 3
- (D) x = 4

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** At x = 4, f′(4) = 0 and f″(4) = −1 < 0, so the second derivative test gives a relative maximum.

- (A): f′(1) = 0 but f″(1) = 0. The test is inconclusive, so a maximum is possible but not certain.
- (B): f′(2) = 0 and f″(2) > 0, which is a relative minimum.
- (C): f″(3) < 0, but f′(3) = −2, so x = 3 is not a critical point. The graph is falling there, not turning.
</details>

## Question 4 (multiple choice · core)

For which function is the second derivative test **inconclusive** at x = 0, even though the function **does** have a relative minimum at x = 0?

- (A) y = 3x² + x⁴
- (B) y = x⁶ + 2
- (C) y = x⁵ − 1
- (D) y = 4 − x⁴

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** For y = x⁶ + 2: y′ = 6x⁵ and y″ = 30x⁴, so y′(0) = 0 and y″(0) = 0, and the test is inconclusive. But y′ is negative for x < 0 and positive for x > 0, so the first derivative test gives a relative minimum (value 2).

- (A) has a minimum at 0, but y″(0) = 6 > 0, so the test is conclusive, not inconclusive.
- (C) is inconclusive (y′(0) = y″(0) = 0), but y′ = 5x⁴ is positive on both sides, so there is no extremum.
- (D) is inconclusive, but y′ = −4x³ changes from positive to negative, so it is a relative maximum.
</details>

## Question 5 (constructed response · core)

Let g(x) = x² ln x for x > 0.

(a) Find the critical point of g.
(b) Use the second derivative test to classify it.
(c) Explain why g has an absolute minimum on x > 0 at this point, and find the absolute minimum value.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Product rule: g′(x) = 2x ln x + x² · (1/x) = 2x ln x + x = x(2 ln x + 1). For x > 0, x ≠ 0, so g′(x) = 0 when ln x = −1/2, giving **x = e^(−1/2)** (about 0.607). g′ exists for all x > 0, so this is the only critical point.

**(b)** g″(x) = 2 ln x + 2 + 1 = 2 ln x + 3. At x = e^(−1/2): g″ = 2(−1/2) + 3 = 2 > 0. Since g′(e^(−1/2)) = 0 and g″(e^(−1/2)) > 0, g has a **relative minimum** there.

**(c)** g is continuous on the interval x > 0 and x = e^(−1/2) is its only critical point there. A relative minimum at the only critical point of a continuous function on an interval is the absolute minimum on that interval. Value: g(e^(−1/2)) = e^(−1) · (−1/2) = **−1/(2e)** (about −0.184).

| Point | What earns it |
|---|---|
| 1 | Correct g′(x) = 2x ln x + x (product rule) |
| 1 | Critical point x = e^(−1/2) |
| 1 | g″ = 2 ln x + 3, with g″(e^(−1/2)) = 2 > 0 and the conclusion "relative minimum" citing g′ = 0 and g″ > 0 |
| 1 | Uses the one-critical-point rule (continuous, only critical point on x > 0) and gives −1/(2e) |

Acceptable alternative for (c): show g′ < 0 for 0 < x < e^(−1/2) and g′ > 0 for x > e^(−1/2), so g decreases then increases on the whole interval.
</details>

## Question 6 (constructed response · core)

A function f has derivative f′(x) = (x − 1)³(x + 2).

(a) Find f″(x) in factored form.
(b) Use the second derivative test at x = −2. State your conclusion with a reason.
(c) Show that the second derivative test gives no conclusion at x = 1. Then decide what happens at x = 1, with a reason.
(d) A student writes: "f″(1) = 0, so f has no maximum or minimum at x = 1." Comment on the student's reasoning.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Product rule: f″(x) = 3(x − 1)²(x + 2) + (x − 1)³ = (x − 1)²[3(x + 2) + (x − 1)] = **(x − 1)²(4x + 5)**.

**(b)** f′(−2) = 0 and f″(−2) = (−3)²(−8 + 5) = 9(−3) = −27 < 0. So f has a **relative maximum** at x = −2.

**(c)** f′(1) = 0 and f″(1) = 0, so the test is inconclusive. Use the first derivative test. Near x = 1, the factor (x + 2) is positive. (x − 1)³ is negative for x < 1 and positive for x > 1. So f′ changes from negative to positive at x = 1, and f has a **relative minimum** at x = 1.

**(d)** The student's conclusion is false and the reasoning is invalid. f″(1) = 0 does not rule out an extremum; it only means the second derivative test cannot decide. Part (c) shows there is a relative minimum.

| Point | What earns it |
|---|---|
| 1 | Correct f″(x) = (x − 1)²(4x + 5), or an equivalent unfactored form |
| 1 | Relative maximum at x = −2, citing f′(−2) = 0 and f″(−2) < 0 |
| 1 | States f″(1) = 0 so the test is inconclusive, then shows f′ changes from negative to positive at x = 1: relative minimum |
| 1 | Explains that f″(1) = 0 means "no conclusion", not "no extremum" |
</details>

## Question 7 (constructed response · stretch)

Let h(x) = x³ − 27x.

(a) Find the absolute minimum value of h on the interval x > 0. Justify your answer.
(b) Find the absolute maximum value of h on the interval −7 < x < 0. Justify your answer.
(c) A student says: "h has a relative minimum at x = 3, so h(3) is the absolute minimum on −7 < x < 7." Explain why the student's reasoning fails, and decide whether h has an absolute minimum on −7 < x < 7.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

h′(x) = 3x² − 27 = 3(x − 3)(x + 3), so the critical points are x = 3 and x = −3. h″(x) = 6x.

**(a)** On x > 0 the only critical point is x = 3. h′(3) = 0 and h″(3) = 18 > 0, so x = 3 is a relative minimum. h is a polynomial, so it is continuous on x > 0. By the one-critical-point rule, h(3) = 27 − 81 = **−54** is the absolute minimum on x > 0.

**(b)** On −7 < x < 0 the only critical point is x = −3. h′(−3) = 0 and h″(−3) = −18 < 0, so it is a relative maximum. By the same rule, h(−3) = −27 + 81 = **54** is the absolute maximum on −7 < x < 0.

**(c)** On −7 < x < 7 there are **two** critical points, x = −3 and x = 3, so the one-critical-point rule does not apply. In fact h(3) = −54 is not the lowest value: for example h(−6.5) = −99.125 < −54. As x → −7 from the right, h(x) → −154, but x = −7 is not in the interval, so the value −154 is never reached. Every value of h on the interval is above −154, yet values come as close to −154 as you like. So h has **no absolute minimum** on −7 < x < 7.

| Point | What earns it |
|---|---|
| 1 | h′ = 3(x − 3)(x + 3) and h″ = 6x |
| 1 | (a): relative minimum at x = 3 by the second derivative test, then absolute by the one-critical-point rule (continuity and "only critical point" both stated); value −54 |
| 1 | (b): relative maximum at x = −3, absolute on −7 < x < 0 by the same rule; value 54 |
| 1 | (c): identifies two critical points, so the rule's condition fails |
| 1 | (c): shows a value below −54 (or the behaviour near x = −7) and concludes there is no absolute minimum on the open interval |

Acceptable alternative for (a) and (b): a sign chart for h′ on the interval showing the function decreases then increases (or increases then decreases).
</details>

## How did you do?

- **Q1, Q2 or Q3 wrong:** reread "The second derivative test" and Figure 1 in the [study guide](/advanced-course-resources/calculus-ab/5-7-second-derivative-test-determine-extrema-study-guide/). Remember the test starts with f′(c) = 0.
- **Q4 or Q6 wrong:** revisit "When the test says nothing", Figure 2 and Worked example 2.
- **Q5 or Q7 wrong:** reread "From relative to absolute: the one-critical-point rule" and Worked example 3, and check each condition of the rule.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/5-7-second-derivative-test-determine-extrema-checklist/).
