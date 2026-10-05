---
resourceId: "mb-ap-calcab-u5-review"
title: "Analytical Applications of Differentiation: Mixed Unit Review (Calculus AB Unit 5)"
description: "The big ideas of Analytical Applications of Differentiation in one place, a methods summary table, and seven original mixed questions with worked solutions and rubrics."
course: "calculus-ab"
unit: 5
topics: []
resourceType: "unit-review"
calculusScope: "ab-and-bc"
prerequisites:
  - "Work through the Unit 5 topics, or at least the Unit 5 diagnostic"
prerequisiteResources: ["mb-ap-calcab-u5-diagnostic"]
learningObjectives:
  - "Connect the Mean Value and Extreme Value Theorems, sign charts, concavity and optimization as one set of ideas"
  - "Choose between the First Derivative Test, the second derivative test and the Candidates Test for a given question"
  - "Answer multi-part questions that combine several Unit 5 topics, from formulas, graphs, tables and implicit relations"
  - "Write complete justifications that name a theorem's conditions, a sign change or a comparison of candidates"
skills: ["1", "2", "3"]
studyMinutes: 60
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Leave e, ln and surds in exact answers; where a decimal is needed, the question gives the value to use."
related: ["mb-ap-calcab-u5-diagnostic", "mb-ap-calcab-5.1-checklist", "mb-ap-calcab-5.2-checklist", "mb-ap-calcab-5.3-checklist", "mb-ap-calcab-5.4-checklist", "mb-ap-calcab-5.5-checklist", "mb-ap-calcab-5.6-checklist", "mb-ap-calcab-5.7-checklist", "mb-ap-calcab-5.8-checklist", "mb-ap-calcab-5.9-checklist", "mb-ap-calcab-5.10-checklist", "mb-ap-calcab-5.11-checklist", "mb-ap-calcab-5.12-checklist"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Existence theorems need their conditions checked first: continuity on a closed interval, plus differentiability inside for the Mean Value Theorem."
  - "Critical points are only candidates; a sign change of f′, the sign of f″ or a comparison of values decides what each one is."
  - "The sign of f′ gives increasing or decreasing; the direction of f′ (the sign of f″) gives concavity."
  - "Optimization is the same method in context: build one function of one variable, find the absolute extremum, then answer in words with units."
  - "Shared review for Calculus AB and Calculus BC students."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Use this page after studying Unit 5, Analytical Applications of Differentiation, or after the [Unit 5 diagnostic](/advanced-course-resources/calculus-ab/unit-5-diagnostic/). The unit is shared by Calculus AB and Calculus BC; every question is for both courses. These are **original Marlbridge practice questions**, not past exam questions, with invented contexts and data. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not official scoring. No calculator for any question.

## Big ideas of the unit

- **Existence theorems promise without locating.** The Mean Value Theorem gives a c with f′(c) equal to the average rate; the Extreme Value Theorem gives a maximum and a minimum. State the conditions first ([5.1](/advanced-course-resources/calculus-ab/5-1-mean-value-theorem-study-guide/), [5.2](/advanced-course-resources/calculus-ab/5-2-extreme-value-theorem-global-versus-study-guide/)).
- **Critical points are where to look, not what you find**: c in the domain with f′(c) = 0 or undefined ([5.2](/advanced-course-resources/calculus-ab/5-2-extreme-value-theorem-global-versus-study-guide/)).
- **The sign of f′ gives direction**, and a sign change of f′ at a point where f is continuous gives a relative extremum ([5.3](/advanced-course-resources/calculus-ab/5-3-determining-intervals-on-which-function-study-guide/), [5.4](/advanced-course-resources/calculus-ab/5-4-first-derivative-test-determine-relative-study-guide/)).
- **Absolute extrema need a global argument**: compare all candidates on a closed interval, or use the one-critical-point rule on any interval ([5.5](/advanced-course-resources/calculus-ab/5-5-candidates-test-determine-absolute-global-study-guide/), [5.7](/advanced-course-resources/calculus-ab/5-7-second-derivative-test-determine-extrema-study-guide/)).
- **The direction of f′ gives concavity.** Points of inflection are where concavity changes, not simply where f″ = 0 ([5.6](/advanced-course-resources/calculus-ab/5-6-determining-concavity-functions-over-their-study-guide/)).
- **f″ can classify a critical point**: f″(c) > 0 minimum, f″(c) < 0 maximum, f″(c) = 0 no conclusion ([5.7](/advanced-course-resources/calculus-ab/5-7-second-derivative-test-determine-extrema-study-guide/)).
- **One story, three graphs.** Zeros of f′ match turning points of f; turning points of f′ match inflection points of f ([5.8](/advanced-course-resources/calculus-ab/5-8-sketching-graphs-functions-their-derivatives-study-guide/), [5.9](/advanced-course-resources/calculus-ab/5-9-connecting-function-its-first-derivative-study-guide/)).
- **Optimization is the same toolkit in context**: one function, a domain, a justified absolute extremum, an answer in words ([5.10](/advanced-course-resources/calculus-ab/5-10-introduction-optimization-problems-study-guide/), [5.11](/advanced-course-resources/calculus-ab/5-11-solving-optimization-problems-study-guide/)).
- **Implicit curves use the same tests**; dy/dx and d²y/dx² may contain y, so substitute the point ([5.12](/advanced-course-resources/calculus-ab/5-12-exploring-behaviors-implicit-relations-study-guide/)).

## Key relationships and methods

| You see or need | What to do | Topics |
|---|---|---|
| "Must there be a c with f′(c) = k?" | Conditions, an average rate equal to k, name the Mean Value Theorem | 5.1 |
| "Must f have a maximum?" | Continuous on a closed interval → Extreme Value Theorem | 5.2 |
| Critical points | f′ = 0 or undefined, and f defined there | 5.2, 5.12 |
| Increasing / decreasing | Sign of f′ on each interval | 5.3 |
| Relative max / min | f′ changes + to − / − to +; or f″ < 0 / f″ > 0 where f′ = 0 | 5.4, 5.7 |
| Absolute extrema | Closed interval: candidates. Any interval: one critical point rule | 5.5, 5.7 |
| Concavity and inflection | f′ increasing / decreasing; f″ changes sign | 5.6, 5.9 |
| Graph of f′ given | Above/below axis → direction of f; rising/falling → concavity | 5.8, 5.9 |
| Optimization | Build f, state the domain, justify, interpret | 5.10, 5.11 |

## Question 1 (multiple choice · mixed)

A function g is twice differentiable on [0, 8]. Its only critical point in (0, 8) is x = 3, and g″(3) = −4. Also g(0) = 1, g(3) = 10 and g(8) = −2. Which statement is true?

- (A) The absolute maximum value is 10; the minimum needs more values of g.
- (B) The absolute maximum value is 10 and the absolute minimum value is −2.
- (C) g has a relative minimum at x = 3, because g″(3) < 0.
- (D) The absolute maximum value is 10 and the absolute minimum value is 1.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** g is continuous on [0, 8], so both extrema exist (Extreme Value Theorem), and they are among the candidates g(0) = 1, g(3) = 10 and g(8) = −2: largest 10, smallest −2.

- (A) There are no other candidates.
- (C) reverses the second derivative test.
- (D) forgets the right endpoint.

Topics: 5.2, 5.5, 5.7.
</details>

## Question 2 (multiple choice · mixed)

The derivative of a function f is f′(x) = x²e⁻ˣ. Which statement is true?

- (A) A relative minimum at x = 0; a point of inflection at x = 2 only
- (B) A relative minimum at x = 0 and a relative maximum at x = 2
- (C) No relative extrema; a point of inflection at x = 2 only
- (D) No relative extrema; points of inflection at x = 0 and x = 2

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** f′ ≥ 0 everywhere and never changes sign, so f has no relative extrema. f″(x) = x(2 − x)e⁻ˣ is negative, then positive on (0, 2), then negative: concavity changes at x = 0 and x = 2.

- (A) treats the zero of f′ at x = 0 as a minimum. f′ does not change sign there.
- (B) reads the turning points of f′ as extrema of f.
- (C) misses x = 0, where f″ also changes sign.

Topics: 5.4, 5.6, 5.9.
</details>

## Question 3 (multiple choice · mixed)

A rectangle has two sides on the positive x- and y-axes and its fourth corner on the curve y = e^(−x/2), where x > 0. What is the greatest possible area of the rectangle?

- (A) 2
- (B) 1/√e
- (C) 2/e
- (D) There is no greatest area, because the domain x > 0 is not a closed interval.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** A(x) = xe^(−x/2). A′(x) = e^(−x/2)(1 − x/2), which is 0 only at x = 2 and changes from positive to negative there. x = 2 is the only critical point on x > 0 and gives a relative maximum, so it gives the absolute maximum: A(2) = 2e⁻¹ = 2/e.

- (A) is the width x = 2, not the area.
- (B) comes from differentiating e^(−x/2) as −e^(−x/2), which gives x = 1.
- (D) The one-critical-point rule works on open intervals.

Topics: 5.4, 5.7, 5.10, 5.11.
</details>

## Question 4 (constructed response · mixed)

The function f is continuous on [−2, 6] with f(0) = 3. The graph of its derivative f′ is made of three straight segments joining (−2, −2), (0, 2), (4, −2) and (6, 2). It crosses the x-axis at x = −1, x = 2 and x = 5. You are also told that f(−2) = 3, f(−1) = 2, f(2) = 5, f(5) = 2 and f(6) = 3.

(a) Find the x-coordinates of all relative extrema of f on (−2, 6). Classify each and justify.
(b) Find the open interval(s) on which f is both increasing and concave down. Justify.
(c) Find the absolute maximum and absolute minimum values of f on [−2, 6]. Justify.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** f′ changes from negative to positive at x = −1 and x = 5: **relative minimums**. f′ changes from positive to negative at x = 2: **relative maximum**.

**(b)** f is increasing where f′ > 0: on (−1, 2) and (5, 6). f is concave down where f′ is decreasing: on (0, 4), where f″ is the slope of the middle segment, (−2 − 2)/4 = −1. Both hold only on **(0, 2)**.

**(c)** f is continuous on the closed interval, so compare the candidates:

| x | −2 | −1 | 2 | 5 | 6 |
|---|---|---|---|---|---|
| f(x) | 3 | 2 | 5 | 2 | 3 |

The **absolute maximum value is 5, at x = 2**. The **absolute minimum value is 2, at both x = −1 and x = 5**.

| Point | What earns it |
|---|---|
| 1 | Minimums at −1 and 5, maximum at 2 |
| 1 | Each justified by a sign change of f′ |
| 1 | Increasing on (−1, 2) and (5, 6), because f′ > 0 |
| 1 | Concave down on (0, 4), because f′ decreases |
| 1 | Both on (0, 2) only |
| 1 | All five candidates compared |
| 1 | Maximum 5 at x = 2; minimum 2 at x = −1 and x = 5 |

Total: 7 points. Topics: 5.3, 5.4, 5.5, 5.6, 5.9.
</details>

## Question 5 (constructed response · mixed)

A fictional city bike scheme finds that when it charges p dollars per day, N(p) = 400e^(−p/10) bikes are hired per day. Each hire costs the scheme $4 to provide. Prices from $4 to $30 are allowed.

(a) Show that the daily profit, in dollars, is P(p) = 400(p − 4)e^(−p/10).
(b) Find the price that maximises daily profit on 4 ≤ p ≤ 30. Justify your answer.
(c) Find the maximum daily profit, using e^(−1.4) ≈ 0.2466, and interpret it in context.
(d) A manager says that the price that gives the greatest revenue also gives the greatest profit. Find the revenue-maximising price and respond.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Each hire earns p dollars and costs 4 dollars, so the profit per hire is p − 4. Profit = (p − 4) × N(p) = **400(p − 4)e^(−p/10)**.

**(b)** Product rule: P′(p) = 400e^(−p/10) + 400(p − 4)(−1/10)e^(−p/10) = 40e^(−p/10)(10 − (p − 4)) = **40e^(−p/10)(14 − p)**. P′ changes from positive to negative at p = 14, its only zero, so **p = $14** gives the absolute maximum. (Or compare candidates: P(4) = 0, P(14) = 4000e^(−1.4), P(30) = 10400e^(−3).)

**(c)** P(14) = 400(10)e^(−1.4) = 4000e^(−1.4) ≈ 4000 × 0.2466 = **$986.40** per day. The greatest daily profit the scheme can make is about $986, by charging $14 per day.

**(d)** R(p) = 400pe^(−p/10), so R′(p) = 40e^(−p/10)(10 − p) = 0 at **p = $10**. The manager is wrong: P′(10) = 160e⁻¹ > 0, so profit is still rising at $10. A higher price loses some hires, but each lost hire also saves $4.

| Point | What earns it |
|---|---|
| 1 | (p − 4) × N(p) |
| 1 | Correct P′(p) |
| 1 | p = 14, justified as an absolute maximum |
| 1 | $986.40 per day, interpreted with the price |
| 1 | Revenue-maximising price $10 |
| 1 | Response: 10 ≠ 14, or P′(10) > 0 |

Total: 6 points. Topics: 5.4, 5.7, 5.10, 5.11.
</details>

## Question 6 (constructed response · mixed)

Consider the curve x² + 2xy + 2y² = 25.

(a) Show that dy/dx = −(x + y)/(x + 2y).
(b) Find the points on the curve where the tangent line is horizontal.
(c) Use d²y/dx² to decide whether y has a relative maximum or a relative minimum at each point in (b).
(d) Find the points on the curve where the tangent line is vertical.
(e) Show that the equation can be written as (x + y)² + y² = 25. Hence explain why the y-values in (b) are the greatest and least y-values on the whole curve.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Differentiate with respect to x: 2x + 2y + 2xy′ + 4yy′ = 0. So (2x + 4y)y′ = −(2x + 2y), and **dy/dx = −(x + y)/(x + 2y)**.

**(b)** dy/dx = 0 when y = −x. Substitute: x² − 2x² + 2x² = 25, so x = ±5: **(5, −5) and (−5, 5)**, where x + 2y ≠ 0.

**(c)** Differentiate (x + 2y)y′ = −(x + y) again: (1 + 2y′)y′ + (x + 2y)y″ = −(1 + y′). Where y′ = 0, this gives (x + 2y)y″ = −1.

- At (5, −5): x + 2y = −5, so y″ = 1/5 > 0: **relative minimum**.
- At (−5, 5): x + 2y = 5, so y″ = −1/5 < 0: **relative maximum**.

**(d)** The tangent is vertical where x + 2y = 0 and x + y ≠ 0. Substitute x = −2y: 4y² − 4y² + 2y² = 25, so y = ±5/√2 = ±5√2/2. The points are **(−5√2, 5√2/2) and (5√2, −5√2/2)**.

**(e)** (x + y)² + y² = x² + 2xy + 2y², so the curve is (x + y)² + y² = 25. Since (x + y)² ≥ 0, y² ≤ 25 and −5 ≤ y ≤ 5. Both bounds are reached, at (−5, 5) and (5, −5).

| Point | What earns it |
|---|---|
| 1 | Implicit differentiation, product rule on 2xy |
| 1 | (5, −5) and (−5, 5) |
| 1 | (x + 2y)y″ = −1 where y′ = 0 |
| 1 | Minimum at (5, −5), maximum at (−5, 5), with signs of y″ |
| 1 | Both vertical tangent points |
| 1 | (e): identity and −5 ≤ y ≤ 5 linked to (b) |

Total: 6 points. Topics: 5.2, 5.7, 5.12.
</details>

## Question 7 (constructed response · mixed)

A fictional weather balloon rises and then starts to sink. Its height above the ground is h(t) metres, t minutes after launch. h is twice differentiable. Some values are shown.

| t (minutes) | 0 | 2 | 5 | 9 | 12 |
|---|---|---|---|---|---|
| h(t) (metres) | 40 | 120 | 210 | 230 | 190 |

(a) Explain why there must be a time in (2, 5) when the balloon is rising at 30 metres per minute.
(b) Use the data to explain why the graph of h cannot be concave up on the whole interval 2 < t < 9.
(c) You are also told that h′(9) = 0 and h″(t) < 0 for 5 < t < 12. Explain why 230 m is the greatest height of the balloon for 5 ≤ t ≤ 12.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** h is differentiable, so it is continuous on [2, 5] and differentiable on (2, 5). The average rate is (210 − 120)/(5 − 2) = 30 metres per minute. By the Mean Value Theorem there is a c in (2, 5) with **h′(c) = 30**: at that moment the balloon is rising at 30 metres per minute.

**(b)** By the Mean Value Theorem, h′(c₁) = 30 for some c₁ in (2, 5) and h′(c₂) = (230 − 210)/4 = 5 for some c₂ in (5, 9). So c₁ < c₂ but h′(c₂) < h′(c₁). Concave up would make h′ increasing, so the graph **cannot be concave up** on all of (2, 9).

**(c)** h″ < 0 on (5, 12), so h′ is decreasing there. With h′(9) = 0, h′ > 0 on (5, 9) and h′ < 0 on (9, 12): h rises up to t = 9 and falls after it. So h(9) = 230 is the **absolute maximum height on [5, 12]**, not just a relative one.

| Point | What earns it |
|---|---|
| 1 | Conditions, average rate 30, theorem named, units |
| 1 | Rates 30 and 5 placed in (2, 5) and (5, 9) |
| 1 | Contradiction with h′ increasing |
| 1 | h′ changes from positive to negative at t = 9 |
| 1 | Conclusion for all of [5, 12] |

Total: 5 points. Topics: 5.1, 5.3, 5.6, 5.7.
</details>

## How did you do?

Add up your points from Questions 4–7 (24 in total) and your correct answers to Questions 1–3. The total is only a guide, not a predicted exam score. More useful: note **which topics** your lost points came from (each answer lists them), then tick off those topic checklists:

[5.1](/advanced-course-resources/calculus-ab/5-1-mean-value-theorem-checklist/) ·
[5.2](/advanced-course-resources/calculus-ab/5-2-extreme-value-theorem-global-versus-checklist/) ·
[5.3](/advanced-course-resources/calculus-ab/5-3-determining-intervals-on-which-function-checklist/) ·
[5.4](/advanced-course-resources/calculus-ab/5-4-first-derivative-test-determine-relative-checklist/) ·
[5.5](/advanced-course-resources/calculus-ab/5-5-candidates-test-determine-absolute-global-checklist/) ·
[5.6](/advanced-course-resources/calculus-ab/5-6-determining-concavity-functions-over-their-checklist/) ·
[5.7](/advanced-course-resources/calculus-ab/5-7-second-derivative-test-determine-extrema-checklist/) ·
[5.8](/advanced-course-resources/calculus-ab/5-8-sketching-graphs-functions-their-derivatives-checklist/) ·
[5.9](/advanced-course-resources/calculus-ab/5-9-connecting-function-its-first-derivative-checklist/) ·
[5.10](/advanced-course-resources/calculus-ab/5-10-introduction-optimization-problems-checklist/) ·
[5.11](/advanced-course-resources/calculus-ab/5-11-solving-optimization-problems-checklist/) ·
[5.12](/advanced-course-resources/calculus-ab/5-12-exploring-behaviors-implicit-relations-checklist/)

If many topics need work, go back to the [Unit 5 diagnostic](/advanced-course-resources/calculus-ab/unit-5-diagnostic/) and use its "Your next step" table to choose where to start.
