---
resourceId: "mb-ap-calcab-5.6-practice"
title: "Determining Concavity of Functions over Their Domains: Practice Questions (Calculus AB 5.6)"
description: "Seven original Marlbridge practice questions on concavity and points of inflection from formulas, a graph of f′ and a context, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 5
topics: ["5.6"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Finding second derivatives and sign charts"
prerequisiteResources: ["mb-ap-calcab-5.6-study-guide"]
learningObjectives:
  - "Find intervals of concavity and points of inflection from a formula for f, f′ or f″"
  - "Read concavity and inflection points of f from a graph of f′"
  - "Justify an inflection point by a sign change, and reject candidates without one"
  - "Interpret the signs of f′ and f″ in context"
skills: ["2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Give exact answers."
related: ["mb-ap-calcab-5.6-study-guide", "mb-ap-calcab-5.6-revision-notes", "mb-ap-calcab-5.6-checklist"]
next: "mb-ap-calcab-5.6-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, exact answers, and concavity stated on open intervals. The context in Question 3 is invented. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

On which interval is the graph of f(x) = x³ + 3x² − 5 concave down?

- (A) (−∞, −2)
- (B) (−∞, −1)
- (C) (−2, 0)
- (D) (−1, ∞)

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** f′(x) = 3x² + 6x and f″(x) = 6x + 6 = 6(x + 1). f″ < 0 when x < −1, so the graph is concave down on (−∞, −1).

- (A) is an interval where f′ = 3x(x + 2) > 0, so f is increasing there. That is not concavity.
- (C) is where f′ < 0, so f is decreasing there. Again, the sign of f′ does not decide concavity.
- (D) is where f″ > 0: concave **up**.
</details>

## Question 2 (multiple choice · core)

Let f(x) = x⁵ − 5x⁴. At which x-values does the graph of f have a point of inflection?

- (A) x = 3 only
- (B) x = 0 and x = 3
- (C) x = 0 and x = 4
- (D) x = 4 only

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** f″(x) = 20x³ − 60x² = 20x²(x − 3). The candidates are x = 0 and x = 3. The factor x² is never negative, so the sign of f″ is the sign of (x − 3): negative for x < 0, negative for 0 < x < 3, positive for x > 3. The sign changes only at x = 3.

- (B) treats x = 0 as an inflection point because f″(0) = 0. But f″ is negative on both sides of 0, so the graph is concave down on both sides.
- (C) and (D) use the zeros of f′(x) = 5x³(x − 4). Those are critical points, not inflection points.
</details>

## Question 3 (multiple choice · foundation)

The volume of water V(t) in an invented storage tank, t hours after a pump is switched on, satisfies V′(t) > 0 and V″(t) < 0 for 0 < t < 6. Which statement is true for 0 < t < 6?

- (A) The volume is increasing at an increasing rate.
- (B) The volume is increasing at a decreasing rate.
- (C) The volume is decreasing at a decreasing rate.
- (D) The volume is decreasing at an increasing rate.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** V′ > 0 means the volume is increasing. V″ < 0 means V′, the rate of increase, is itself decreasing. So the tank is filling, but more slowly as time passes. The graph of V is increasing and concave down.

- (A) would need V″ > 0.
- (C) and (D) would need V′ < 0. They read the sign of V″ as the direction of V.
</details>

## Question 4 (multiple choice · core)

The derivative of a function f is f′(x) = (x − 1)²(x + 2). At which x-values does the graph of f have a point of inflection?

- (A) x = −2 and x = 1
- (B) x = −1 and x = 1
- (C) x = −1 only
- (D) x = 1 only

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Product rule: f″(x) = 2(x − 1)(x + 2) + (x − 1)² = (x − 1)(2x + 4 + x − 1) = (x − 1)(3x + 3) = 3(x − 1)(x + 1). f″ is positive for x < −1, negative for −1 < x < 1 and positive for x > 1. It changes sign at both x = −1 and x = 1.

- (A) gives the zeros of f′, which are critical points.
- (C) rejects x = 1 because f′(1) = 0. A critical point can also be an inflection point: here f′ has a local minimum of 0 at x = 1.
- (D) misses x = −1, perhaps by not expanding f″ fully.
</details>

## Question 5 (graph · core)

The function f is continuous on [0, 8]. The graph of its derivative f′ consists of three line segments, joining the points (0, −2), (3, 4), (5, 0) and (8, 3).

<figure>
<svg viewBox="0 0 520 280" role="img" aria-labelledby="q5-title q5-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="q5-title">Graph of f′ made of three line segments on 0 ≤ x ≤ 8</title>
<desc id="q5-desc">The graph of f′ starts at (0, −2), rises in a straight line through (1, 0) to (3, 4), falls in a straight line to (5, 0), then rises in a straight line to (8, 3). The four corner points are marked with dots and labelled with their coordinates.</desc>
<rect x="0" y="0" width="520" height="280" fill="#ffffff"/>
<line x1="45" y1="167.5" x2="500" y2="167.5" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="60" y1="260" x2="60" y2="25" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="110.6" y1="163.5" x2="110.6" y2="171.5"/><line x1="161.2" y1="163.5" x2="161.2" y2="171.5"/><line x1="211.8" y1="163.5" x2="211.8" y2="171.5"/><line x1="262.4" y1="163.5" x2="262.4" y2="171.5"/><line x1="312.9" y1="163.5" x2="312.9" y2="171.5"/><line x1="363.5" y1="163.5" x2="363.5" y2="171.5"/><line x1="414.1" y1="163.5" x2="414.1" y2="171.5"/><line x1="464.7" y1="163.5" x2="464.7" y2="171.5"/>
<line x1="56" y1="222.5" x2="64" y2="222.5"/><line x1="56" y1="112.5" x2="64" y2="112.5"/><line x1="56" y1="57.5" x2="64" y2="57.5"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="110.6" y="185">1</text><text x="161.2" y="185">2</text><text x="211.8" y="185">3</text><text x="262.4" y="185">4</text><text x="312.9" y="185">5</text><text x="363.5" y="185">6</text><text x="414.1" y="185">7</text><text x="464.7" y="185">8</text><text x="500" y="162">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="53" y="226.5">−2</text><text x="53" y="116.5">2</text><text x="53" y="61.5">4</text><text x="53" y="32">y</text>
</g>
<polyline points="60,222.5 211.8,57.5 312.9,167.5 464.7,85" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<g fill="#1d2b44"><circle cx="60" cy="222.5" r="4"/><circle cx="211.8" cy="57.5" r="4"/><circle cx="312.9" cy="167.5" r="4"/><circle cx="464.7" cy="85" r="4"/></g>
<g font-size="12" fill="#1d2b44">
<text x="68" y="240">(0, −2)</text><text x="220" y="52">(3, 4)</text><text x="300" y="202">(5, 0)</text><text x="440" y="75">(8, 3)</text><text x="380" y="245">y = f′(x)</text>
</g>
</svg>
<figcaption>Graph of f′ for Question 5. It is the derivative, not f itself.</figcaption>
</figure>

(a) Find the open intervals on which the graph of f is concave up and concave down. Give a reason.
(b) Find the x-coordinates of all points of inflection of f. Give a reason.
(c) A student says: "x = 1 is a point of inflection because f′(1) = 0." Explain the error.
(d) Find f″(4).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** f′ is increasing on (0, 3) and (5, 8), so the graph of f is **concave up** there. f′ is decreasing on (3, 5), so the graph of f is **concave down** there.

**(b)** Concavity changes at **x = 3** (up to down) and at **x = 5** (down to up), and f is continuous there. These are the points of inflection. (f″ does not exist at the corners x = 3 and x = 5, but that does not matter: the concavity still changes.)

**(c)** f′(1) = 0, and f′ changes from negative to positive there, so f has a **local minimum** at x = 1. That is a statement about f′ crossing the axis. Concavity depends on whether f′ is increasing or decreasing, and f′ is increasing on both sides of x = 1, so the concavity does not change there.

**(d)** f″(4) is the slope of the f′ graph at x = 4, which is on the segment from (3, 4) to (5, 0). Slope = (0 − 4)/(5 − 3) = **−2**.

| Point | What earns it |
|---|---|
| 1 | Concave up on (0, 3) and (5, 8), concave down on (3, 5), with a reason based on f′ increasing or decreasing |
| 1 | Inflection points at x = 3 and x = 5, with a reason (concavity or the sign of f″ changes) |
| 1 | Explains that f′ = 0 at x = 1 signals a possible extremum, and that f′ is increasing on both sides, so no change of concavity |
| 1 | f″(4) = −2 from the slope of the segment |

Note: x = 5 is also a point where f′ = 0, but f′ ≥ 0 on both sides, so f has no local extremum there. It is an inflection point only.
</details>

## Question 6 (constructed response · core)

Let h(x) = x² + 8/x, for x ≠ 0.

(a) Show that h″(x) = 2(x³ + 8)/x³.
(b) Find the open intervals on which the graph of h is concave up and concave down.
(c) Find all points of inflection of the graph of h. Explain why there is no point of inflection at x = 0.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** h′(x) = 2x − 8/x². h″(x) = 2 + 16/x³ = (2x³ + 16)/x³ = **2(x³ + 8)/x³**.

**(b)** h″ is 0 when x³ = −8, so x = −2. h″ does not exist at x = 0. Check signs:

| Interval | x³ + 8 | x³ | h″ | Concavity |
|---|---|---|---|---|
| (−∞, −2) | − | − | + | concave up |
| (−2, 0) | + | − | − | concave down |
| (0, ∞) | + | + | + | concave up |

**(c)** At x = −2, h″ changes sign and h(−2) = 4 + 8/(−2) = 0. The point of inflection is **(−2, 0)**. Concavity also changes at x = 0, but h(0) is not defined, so there is no point on the graph at x = 0 and therefore no point of inflection.

| Point | What earns it |
|---|---|
| 1 | Correct h′ and h″ in the given form |
| 1 | Candidates x = −2 (h″ = 0) and x = 0 (h″ undefined) and a correct sign analysis |
| 1 | Correct intervals: up on (−∞, −2) and (0, ∞), down on (−2, 0) |
| 1 | Inflection point (−2, 0) with a sign-change reason, and x = 0 rejected because h(0) is not defined |
</details>

## Question 7 (constructed response · stretch)

Let f(x) = x³ + ax² + bx, where a and b are constants.

(a) The graph of f has a point of inflection at (1, −3). Find a and b.
(b) Using your values, confirm that the concavity of f really changes at x = 1.
(c) Let k(x) = (x − 1)⁴ − 3. Show that k″(1) = 0 and that k(1) = −3, but that (1, −3) is **not** a point of inflection of k.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** f″(x) = 6x + 2a. For an inflection point at x = 1 we need f″(1) = 0 (f″ is a polynomial, so it exists everywhere): 6 + 2a = 0, so **a = −3**. The point (1, −3) is on the graph: f(1) = 1 + a + b = 1 − 3 + b = −3, so **b = −1**.

**(b)** f″(x) = 6x − 6 = 6(x − 1). It is negative for x < 1 and positive for x > 1. The sign changes, so the graph changes from concave down to concave up at x = 1. And f(1) = 1 − 3 − 1 = −3, as required.

**(c)** k′(x) = 4(x − 1)³ and k″(x) = 12(x − 1)². So k″(1) = 0 and k(1) = 0 − 3 = −3. But 12(x − 1)² > 0 for every x ≠ 1, so the graph is concave up on both sides of x = 1. The concavity does not change, so (1, −3) is not a point of inflection (it is in fact the minimum point of k).

| Point | What earns it |
|---|---|
| 1 | Uses f″(1) = 0 to find a = −3 |
| 1 | Uses f(1) = −3 to find b = −1 |
| 1 | Shows f″ = 6(x − 1) changes sign at x = 1 |
| 1 | For k: k″(1) = 0, k(1) = −3, and k″ > 0 on both sides, so no change of concavity |
</details>

## How did you do?

- **Q1 or Q2 wrong:** revisit "The second derivative decides concavity" and Worked example 1 in the [study guide](/advanced-course-resources/calculus-ab/5-6-determining-concavity-functions-over-their-study-guide/).
- **Q4 or Q5 wrong:** redo Worked example 2 (concavity from a graph of f′).
- **Q6 or Q7 wrong:** reread "Points of inflection", especially the table with x⁴, ∛x and 1/x.
- **Q3 wrong:** see "Concavity in context".

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/5-6-determining-concavity-functions-over-their-checklist/).
