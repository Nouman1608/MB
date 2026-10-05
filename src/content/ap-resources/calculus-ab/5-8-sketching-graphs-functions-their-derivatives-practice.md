---
resourceId: "mb-ap-calcab-5.8-practice"
title: "Sketching Graphs of Functions and Their Derivatives: Practice Questions (Calculus AB 5.8)"
description: "Seven original Marlbridge practice questions on describing and sketching f from formulas, graphs of f′ and tables, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 5
topics: ["5.8"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Sign charts for f′ and f″"
prerequisiteResources: ["mb-ap-calcab-5.8-study-guide"]
learningObjectives:
  - "Identify increase, extrema, concavity and inflection points of f from f′ and f″ in analytical, graphical and numerical form"
  - "Justify each feature with the sign or the behaviour of f′ or f″"
  - "Describe or sketch the graph of f, and describe the graph of f′ from features of f"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Give exact coordinates for key points."
related: ["mb-ap-calcab-5.8-study-guide", "mb-ap-calcab-5.8-revision-notes", "mb-ap-calcab-5.8-checklist"]
next: "mb-ap-calcab-5.8-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, angles in radians, and every function in Questions 1–6 is twice differentiable on its domain unless the question says otherwise. Question 7 deliberately includes a point where the derivative does not exist. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

A function f has derivative f′(x) = x²(x − 4). Which statement is true?

- (A) f has a relative maximum at x = 0 and a relative minimum at x = 4.
- (B) f has a relative minimum at x = 4 and no relative extremum at x = 0.
- (C) f has a relative minimum at x = 0 and a relative maximum at x = 4.
- (D) f has a relative maximum at x = 4 and no relative extremum at x = 0.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Sign chart for f′ = x²(x − 4): x² ≥ 0 always, so the sign comes from (x − 4). f′ < 0 for x < 0, f′ < 0 for 0 < x < 4, f′ > 0 for x > 4. At x = 4, f′ changes from − to +: relative minimum. At x = 0, f′ = 0 but stays negative on both sides: no extremum.

- (A) assumes every zero of f′ is an extremum and that they alternate.
- (C) also assumes alternation, and gets x = 4 the wrong way round.
- (D) reverses the sign change at x = 4.
</details>

## Question 2 (multiple choice · foundation)

On the interval 1 < x < 4, f′(x) < 0 and f″(x) > 0. Which description of the graph of f on this interval is correct?

- (A) Falling, and flattening out as x increases
- (B) Falling, and getting steeper as x increases
- (C) Rising, and getting steeper as x increases
- (D) Rising, and flattening out as x increases

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** f′ < 0 means f is decreasing (falling). f″ > 0 means f′ is increasing: the slopes are negative but moving towards 0, so the fall becomes less steep. The graph is concave up.

- (B) is the shape for f′ < 0 and f″ < 0 (concave down).
- (C) and (D) need f′ > 0. They take the sign of f″ as if it were the sign of f′.
</details>

## Question 3 (multiple choice · core)

The graph of a function f has a relative maximum at (−1, 4) and a relative minimum at (3, −2). It is concave down for x < 1, concave up for x > 1 and has a point of inflection at (1, 1). Which describes the graph of f′?

- (A) It crosses the x-axis at x = −1 and x = 3 and has its lowest point at x = 1.
- (B) It crosses the x-axis at x = −1 and x = 3 and has its highest point at x = 1.
- (C) It crosses the x-axis only at x = 1.
- (D) It crosses the x-axis at x = −1, x = 1 and x = 3.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The extrema of f are where f′ changes sign, so f′ crosses the axis at x = −1 and x = 3. Concave down for x < 1 means f′ is decreasing there; concave up for x > 1 means f′ is increasing. So f′ has its lowest point at x = 1.

- (B) reverses the link between concavity and the trend of f′.
- (C) puts a zero of f′ at the inflection point. At an inflection point f′ has a peak or trough, not a zero.
- (D) adds the inflection point as a zero, which is the same error as (C).
</details>

## Question 4 (multiple choice · core)

The table gives values of f′ for a function f. You are also told that f″(x) > 0 for all x.

| x | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| f′(x) | −3 | −1 | 0 | 2 | 5 |

Which statement must be true?

- (A) f has a relative minimum at x = 2, and the graph of f is concave up.
- (B) f has a relative maximum at x = 2.
- (C) The graph of f has a point of inflection at x = 2.
- (D) f is increasing on 0 < x < 4.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** f″ > 0 everywhere, so f′ is increasing everywhere and the graph of f is concave up. An increasing f′ with f′(2) = 0 is negative before x = 2 and positive after. So f′ changes from − to + and f has a relative minimum at x = 2.

- (B) reverses the sign change.
- (C) needs f″ to change sign, but f″ > 0 everywhere.
- (D) ignores the negative values f′(0) = −3 and f′(1) = −1: f is decreasing on 0 < x < 2.
</details>

## Question 5 (constructed response · core)

A function f is continuous on −2 ≤ x ≤ 4 and twice differentiable on −2 < x < 4. Some values of f are f(−2) = 1, f(0) = 4, f(1) = 3, f(3) = −1 and f(4) = 0. The signs of f′ and f″ are:

| Interval or point | −2 < x < 0 | x = 0 | 0 < x < 1 | x = 1 | 1 < x < 3 | x = 3 | 3 < x < 4 |
|---|---|---|---|---|---|---|---|
| f′ | + | 0 | − | − | − | 0 | + |
| f″ | − | − | − | 0 | + | + | + |

(a) Find the x-coordinates of all relative extrema of f on −2 < x < 4. Classify each and justify.
(b) Find the coordinates of the point of inflection. Justify.
(c) On which interval is f decreasing and concave down? Describe what f′ is doing there.
(d) Describe a sketch of f on −2 ≤ x ≤ 4, with labelled key points.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** At x = 0, f′ changes from + to −: **relative maximum** at x = 0 (value 4). At x = 3, f′ changes from − to +: **relative minimum** at x = 3 (value −1). (The second derivative test also works: f′(0) = 0 with f″(0) < 0, and f′(3) = 0 with f″(3) > 0.)

**(b)** f″ changes from − to + at x = 1, so the graph has a point of inflection at **(1, 3)**.

**(c)** On **0 < x < 1**, f′ < 0 and f″ < 0. There f′ is negative and decreasing, so the slopes become more and more negative: the graph falls more and more steeply.

**(d)** From (−2, 1), rise as a cap to the maximum (0, 4). Fall more and more steeply to the inflection point (1, 3). Keep falling but flatten out (a cup) to the minimum (3, −1). Rise, getting steeper, to (4, 0).

| Point | What earns it |
|---|---|
| 1 | Relative maximum at x = 0 with the reason "f′ changes from positive to negative" (or f′(0) = 0 and f″(0) < 0) |
| 1 | Relative minimum at x = 3 with a correct reason |
| 1 | Inflection point (1, 3) because f″ changes sign there (not just "f″(1) = 0") |
| 1 | Interval 0 < x < 1, with f′ negative and decreasing |
| 1 | Sketch or description passes through all five given points with the correct direction and bend in every interval |
</details>

## Question 6 (graph · core)

The graph of f′, the derivative of a function f, is shown for 0 ≤ x ≤ 2π. It crosses the x-axis at x = π, has its highest point at (π/2, 2) and its lowest point at (3π/2, −2).

<figure>
<svg viewBox="0 0 520 260" role="img" aria-labelledby="q6-title q6-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="q6-title">Graph of f′ for 0 ≤ x ≤ 2π, a single smooth wave</title>
<desc id="q6-desc">A smooth wave starting at (0, 0). It rises to a highest point at (π/2, 2), falls through the x-axis at (π, 0), reaches a lowest point at (3π/2, −2) and rises back to (2π, 0). The curve is above the x-axis for 0 &lt; x &lt; π and below it for π &lt; x &lt; 2π. Tick marks are at π/2, π, 3π/2 and 2π on the x-axis and at −2, −1, 1 and 2 on the y-axis.</desc>
<rect x="0" y="0" width="520" height="260" fill="#ffffff"/>
<line x1="40" y1="130" x2="500" y2="130" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="60" y1="240" x2="60" y2="20" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="162.1" y1="126" x2="162.1" y2="134"/><line x1="264.2" y1="126" x2="264.2" y2="134"/><line x1="366.3" y1="126" x2="366.3" y2="134"/><line x1="468.4" y1="126" x2="468.4" y2="134"/>
<line x1="56" y1="50" x2="64" y2="50"/><line x1="56" y1="90" x2="64" y2="90"/><line x1="56" y1="170" x2="64" y2="170"/><line x1="56" y1="210" x2="64" y2="210"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="162.1" y="148">π/2</text><text x="276" y="120">π</text><text x="366.3" y="120">3π/2</text><text x="468.4" y="120">2π</text><text x="505" y="126">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="52" y="54">2</text><text x="52" y="94">1</text><text x="52" y="174">−1</text><text x="52" y="214">−2</text><text x="52" y="22">y</text>
</g>
<g stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 4">
<line x1="60" y1="50" x2="162.1" y2="50"/><line x1="60" y1="210" x2="366.3" y2="210"/>
</g>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="60.0,130.0 68.5,119.6 77.0,109.3 85.5,99.4 94.0,90.0 102.5,81.3 111.1,73.4 119.6,66.5 128.1,60.7 136.6,56.1 145.1,52.7 153.6,50.7 162.1,50.0 170.6,50.7 179.1,52.7 187.6,56.1 196.1,60.7 204.6,66.5 213.2,73.4 221.7,81.3 230.2,90.0 238.7,99.4 247.2,109.3 255.7,119.6 264.2,130.0 272.7,140.4 281.2,150.7 289.7,160.6 298.2,170.0 306.7,178.7 315.3,186.6 323.8,193.5 332.3,199.3 340.8,203.9 349.3,207.3 357.8,209.3 366.3,210.0 374.8,209.3 383.3,207.3 391.8,203.9 400.3,199.3 408.8,193.5 417.4,186.6 425.9,178.7 434.4,170.0 442.9,160.6 451.4,150.7 459.9,140.4 468.4,130.0"/>
<text x="180" y="40" font-size="13" fill="#1d2b44">y = f′(x)</text>
</svg>
<figcaption>Figure for Question 6. The graph of f′ (not f) on 0 ≤ x ≤ 2π. Dashed lines mark the highest value, 2, and the lowest value, −2.</figcaption>
</figure>

(a) On which interval is f increasing? Justify.
(b) Find the x-coordinate of the relative extremum of f on 0 < x < 2π. Classify it and justify.
(c) Find the x-coordinates of the points of inflection of the graph of f. Justify.
(d) You are told f(0) = 1, f(π/2) = 3, f(π) = 5, f(3π/2) = 3 and f(2π) = 1. Describe the graph of f.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** f′ > 0 (graph above the axis) for 0 < x < π, so f is **increasing on 0 ≤ x ≤ π**.

**(b)** At **x = π**, f′ changes from positive to negative, so f has a **relative maximum** there.

**(c)** f′ is increasing on 0 < x < π/2, decreasing on π/2 < x < 3π/2 and increasing on 3π/2 < x < 2π. A change from increasing to decreasing (or the reverse) in f′ is a change in the concavity of f. So the points of inflection are at **x = π/2 and x = 3π/2**.

**(d)** From (0, 1) the graph rises and steepens (concave up) to the inflection point (π/2, 3), where its slope is 2. It rises more slowly (concave down) to the maximum (π, 5), falls more and more steeply to the inflection point (3π/2, 3), with slope −2, then flattens out (concave up) as it falls to (2π, 1).

| Point | What earns it |
|---|---|
| 1 | (a): increasing on 0 ≤ x ≤ π because f′ > 0 there (open interval also acceptable) |
| 1 | (b): relative maximum at x = π because f′ changes from positive to negative |
| 1 | (c): x = π/2 and x = 3π/2 |
| 1 | (c): justification that f′ changes from increasing to decreasing (or decreasing to increasing) there, or that f′ has a relative extremum there |
| 1 | (d): correct order of shapes through all five points, with the cap around x = π and cups at both ends |</details>

## Question 7 (constructed response · stretch)

Let f(x) = 3x^(2/3) − x, defined for all real x.

(a) Find f′(x). Find all critical points, and state which one is a point where f′ does not exist.
(b) Find the intervals on which f is increasing or decreasing, and classify each critical point.
(c) Find f″(x). Explain why the graph of f has no point of inflection.
(d) Describe the graph of f, including the points at x = −8, 0, 8 and 27 and the shape near x = 0.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** f′(x) = 3 · (2/3)x^(−1/3) − 1 = 2x^(−1/3) − 1 = 2/x^(1/3) − 1. f′(x) = 0 when x^(1/3) = 2, so **x = 8**. f′(0) does not exist (division by 0), but f(0) = 0 is defined, so **x = 0** is also a critical point.

**(b)** Test each interval:

- x < 0: x^(1/3) < 0, so 2/x^(1/3) < 0 and f′ < 0. For example f′(−1) = −3.
- 0 < x < 8: 0 < x^(1/3) < 2, so 2/x^(1/3) > 1 and f′ > 0. For example f′(1) = 1.
- x > 8: x^(1/3) > 2, so 2/x^(1/3) < 1 and f′ < 0. For example f′(27) = −1/3.

f is decreasing on x ≤ 0, increasing on 0 ≤ x ≤ 8 and decreasing on x ≥ 8. **Relative minimum at x = 0** (f′ changes − to +). **Relative maximum at x = 8** (f′ changes + to −).

**(c)** f″(x) = −(2/3)x^(−4/3) = −2/(3x^(4/3)). Since x^(4/3) = (x^(1/3))⁴ > 0 for every x ≠ 0, f″(x) < 0 for all x ≠ 0. The graph is concave down on both sides of x = 0, so the concavity never changes and there is no point of inflection.

**(d)** Key points: f(−8) = 12 + 8 = 20, f(0) = 0, f(8) = 12 − 8 = 4, f(27) = 27 − 27 = 0. The graph falls through (−8, 20) to a **cusp** at (0, 0), where f′ → −∞ from the left and +∞ from the right. It rises to the maximum (8, 4), then falls through (27, 0). It is concave down throughout.

| Point | What earns it |
|---|---|
| 1 | Correct f′, with critical points x = 8 (f′ = 0) and x = 0 (f′ undefined) |
| 1 | Correct sign of f′ on all three intervals |
| 1 | Relative minimum at x = 0 and relative maximum at x = 8, each with a sign-change reason |
| 1 | Correct f″ and the reason f″ < 0 for all x ≠ 0, so no change of concavity |
| 1 | Description with the four points, the cusp at the origin and concave down throughout |

Acceptable alternative for (b) at x = 8: the second derivative test (f′(8) = 0, f″(8) = −1/24 < 0). It cannot be used at x = 0, where f′ does not exist.
</details>

## How did you do?

- **Q1, Q2 or Q4 wrong:** reread "What a sketch has to show", the four basic shapes and Worked example 3 in the [study guide](/advanced-course-resources/calculus-ab/5-8-sketching-graphs-functions-their-derivatives-study-guide/).
- **Q3 or Q6 wrong:** revisit Worked example 2, Figure 2 and "Going the other way". Remember: peaks of f′ are inflection points of f.
- **Q5 or Q7 wrong:** work through Worked example 1 again and build a full sign chart before you sketch.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/5-8-sketching-graphs-functions-their-derivatives-checklist/).
