---
resourceId: "mb-ap-calcab-6.5-practice"
title: "Interpreting the Behavior of Accumulation Functions Involving Area: Practice Questions (Calculus AB 6.5)"
description: "Seven original Marlbridge practice questions on reading extrema, concavity and values of an accumulation function from a graph, table, formula or description, with suggested rubrics."
course: "calculus-ab"
unit: 6
topics: ["6.5"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "First and second derivative tests and the candidates test (Unit 5)"
prerequisiteResources: ["mb-ap-calcab-6.5-study-guide"]
learningObjectives:
  - "Identify where an accumulation function increases, decreases and changes concavity from information about its integrand"
  - "Locate and justify relative and absolute extrema of an accumulation function"
  - "Reason about an accumulation function from a table and a verbal description"
skills: ["2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Give exact answers, using π where it appears."
related: ["mb-ap-calcab-6.5-study-guide", "mb-ap-calcab-6.5-revision-notes", "mb-ap-calcab-6.5-checklist"]
next: "mb-ap-calcab-6.5-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, exact answers, and every function called f or r is continuous. Notation: ∫ (a to x) f(t) dt means the definite integral of f(t) from t = a to t = x. The context in Question 6 and all its data are invented. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

A function f is continuous on [−4, 6]. You are told that f(t) > 0 for −4 < t < −1, f(t) < 0 for −1 < t < 3 and f(t) > 0 for 3 < t < 6. Also, f is decreasing on (−4, 1) and increasing on (1, 6). Let g(x) = ∫ (0 to x) f(t) dt. At which value of x in the open interval (−4, 6) does g have a relative maximum?

- (A) x = −1
- (B) x = 1
- (C) x = 3
- (D) both x = −1 and x = 3

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** g′ = f. At x = −1, f changes from positive to negative, so g changes from increasing to decreasing: a relative maximum.

- (B) is where f has its minimum, so g has a **point of inflection** there, not an extremum.
- (C) is a relative **minimum**: f changes from negative to positive at 3.
- (D) treats every zero of f as a maximum. The direction of the sign change decides the type.
</details>

## Question 2 (multiple choice · core)

Let g(x) = ∫ (0 to x) (t² − 6t + 8) dt. On which interval is g both decreasing and concave down?

- (A) (2, 3)
- (B) (3, 4)
- (C) (2, 4)
- (D) (−∞, 3)

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** g′(x) = x² − 6x + 8 = (x − 2)(x − 4), which is negative on (2, 4), so g is decreasing there. g″(x) = 2x − 6, which is negative for x < 3, so g is concave down there. Both hold on (2, 3).

- (B) is where g is decreasing but concave **up** (g″ > 0 for x > 3).
- (C) is where g is decreasing; it ignores the concavity condition.
- (D) is where g is concave down; it ignores the decreasing condition (g is increasing for x < 2).
</details>

## Question 3 (multiple choice · core)

Let g(x) = ∫ (0 to x) (t − 1)²(t + 2) dt. How many relative extrema does g have?

- (A) 0
- (B) 1
- (C) 2
- (D) 4

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** g′(x) = (x − 1)²(x + 2). The factor (x − 1)² is never negative, so the sign of g′ is the sign of x + 2, except that g′(1) = 0. g′ changes from negative to positive at x = −2 (a relative minimum). At x = 1, g′ is positive on both sides, so there is no extremum there.

- (A) misses the sign change at x = −2.
- (C) counts both zeros of g′ without checking for a sign change.
- (D) also counts the zeros of g″ = 3(x − 1)(x + 1). Those are points of inflection, not extrema.
</details>

## Question 4 (multiple choice · core)

A function f is continuous on [0, 10]. Its graph crosses the t-axis only at t = 3 and t = 7. The graph and the t-axis enclose three regions: from 0 to 3 the region lies above the axis and has area 5; from 3 to 7 it lies below and has area 8; from 7 to 10 it lies above and has area 6. Let g(x) = ∫ (0 to x) f(t) dt. What is the absolute maximum value of g on [0, 10]?

- (A) 3
- (B) 5
- (C) 11
- (D) 19

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Candidates: endpoints 0 and 10 and the sign changes at 3 and 7. g(0) = 0, g(3) = 5, g(7) = 5 − 8 = −3, g(10) = −3 + 6 = 3. The largest is 5, at x = 3.

- (A) is g(10). The endpoint is not the maximum, because g lost 8 units between 3 and 7.
- (C) adds the two positive areas, 5 + 6, and ignores the negative region in between.
- (D) adds all three areas as positive: the total area, not a value of g.
</details>

## Question 5 (graph · core)

<figure>
<svg viewBox="0 0 520 280" role="img" aria-labelledby="p65-title p65-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p65-title">Graph of f for Question 5</title>
<desc id="p65-desc">The graph of f on −4 ≤ t ≤ 4. From t = −4 to t = 0 it is a semicircle of radius 2 below the t-axis, centred at (−2, 0), with lowest point (−2, −2). From t = 0 it is a straight line rising to (2, 2), then a straight line falling through (3, 0) to (4, −2). The semicircular region is dotted (below the axis). The triangle from t = 0 to t = 3 above the axis is hatched. The small triangle from t = 3 to t = 4 below the axis is dotted.</desc>
<rect x="0" y="0" width="520" height="280" fill="#ffffff"/>
<defs><pattern id="p65-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="1" opacity="0.35"/></pattern><pattern id="p65-dots" width="7" height="7" patternUnits="userSpaceOnUse"><circle cx="3.5" cy="3.5" r="1.3" fill="#1d2b44" opacity="0.6"/></pattern></defs>
<polygon points="60.0,150.0 65.0,171.9 70.0,180.5 75.0,186.9 80.0,192.0 85.0,196.3 90.0,200.0 95.0,203.2 100.0,206.0 105.0,208.5 110.0,210.6 115.0,212.5 120.0,214.2 125.0,215.6 130.0,216.8 135.0,217.8 140.0,218.6 145.0,219.2 150.0,219.6 155.0,219.9 160.0,220.0 165.0,219.9 170.0,219.6 175.0,219.2 180.0,218.6 185.0,217.8 190.0,216.8 195.0,215.6 200.0,214.2 205.0,212.5 210.0,210.6 215.0,208.5 220.0,206.0 225.0,203.2 230.0,200.0 235.0,196.3 240.0,192.0 245.0,186.9 250.0,180.5 255.0,171.9 260.0,150.0" fill="url(#p65-dots)" stroke="#1d2b44" stroke-width="1"/>
<polygon points="260,150 360,80 410,150" fill="url(#p65-hatch)" stroke="#1d2b44" stroke-width="1"/>
<polygon points="410,150 460,220 460,150" fill="url(#p65-dots)" stroke="#1d2b44" stroke-width="1"/>
<line x1="40" y1="150" x2="490" y2="150" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="260" y1="250" x2="260" y2="40" stroke="#1d2b44" stroke-width="1.5"/>
<text x="494" y="146" font-size="12" fill="#1d2b44">t</text><text x="266" y="44" font-size="12" fill="#1d2b44">y</text>
<g stroke="#1d2b44" stroke-width="1"><line x1="60" y1="146" x2="60" y2="154"/><line x1="110" y1="146" x2="110" y2="154"/><line x1="160" y1="146" x2="160" y2="154"/><line x1="210" y1="146" x2="210" y2="154"/><line x1="310" y1="146" x2="310" y2="154"/><line x1="360" y1="146" x2="360" y2="154"/><line x1="410" y1="146" x2="410" y2="154"/><line x1="460" y1="146" x2="460" y2="154"/><line x1="256" y1="220" x2="264" y2="220"/><line x1="256" y1="185" x2="264" y2="185"/><line x1="256" y1="115" x2="264" y2="115"/><line x1="256" y1="80" x2="264" y2="80"/></g>
<g font-size="12" fill="#1d2b44" text-anchor="middle"><text x="60" y="142">−4</text><text x="110" y="142">−3</text><text x="160" y="142">−2</text><text x="210" y="142">−1</text><text x="310" y="166">1</text><text x="360" y="166">2</text><text x="410" y="142">3</text><text x="460" y="142">4</text></g>
<g font-size="12" fill="#1d2b44" text-anchor="start"><text x="268" y="224">−2</text><text x="268" y="189">−1</text><text x="268" y="119">1</text><text x="268" y="84">2</text></g>
<polyline points="60.0,150.0 65.0,171.9 70.0,180.5 75.0,186.9 80.0,192.0 85.0,196.3 90.0,200.0 95.0,203.2 100.0,206.0 105.0,208.5 110.0,210.6 115.0,212.5 120.0,214.2 125.0,215.6 130.0,216.8 135.0,217.8 140.0,218.6 145.0,219.2 150.0,219.6 155.0,219.9 160.0,220.0 165.0,219.9 170.0,219.6 175.0,219.2 180.0,218.6 185.0,217.8 190.0,216.8 195.0,215.6 200.0,214.2 205.0,212.5 210.0,210.6 215.0,208.5 220.0,206.0 225.0,203.2 230.0,200.0 235.0,196.3 240.0,192.0 245.0,186.9 250.0,180.5 255.0,171.9 260.0,150.0 360,80 460,220" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<text x="372" y="76" font-size="13" fill="#1d2b44">y = f(t)</text>
<text x="160" y="244" font-size="12" fill="#1d2b44" text-anchor="middle">semicircle, radius 2</text>
</svg>
<figcaption>Figure for Question 5. A semicircle of radius 2 on [−4, 0], then segments through (0, 0), (2, 2), (3, 0) and (4, −2). Dotted regions lie below the t-axis; hatched lies above.</figcaption>
</figure>

The graph of the continuous function f on −4 ≤ t ≤ 4 is shown above. Let g(x) = ∫ (0 to x) f(t) dt.

(a) Find g(−4), g(−2) and g(4).
(b) Find the intervals on which g is increasing, and the x-value of each relative extremum of g in (−4, 4). Justify.
(c) Find the x-values of the points of inflection of the graph of g. Give a reason.
(d) Find the absolute maximum and absolute minimum values of g on [−4, 4]. Justify.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The semicircle has area (1/2)π(2²) = 2π and lies below the axis, so ∫ (−4 to 0) f(t) dt = −2π. Then g(−4) = ∫ (0 to −4) f = −(−2π) = **2π**. Half the semicircle lies on [−2, 0], so g(−2) = −(−π) = **π**. From 0 to 3: a triangle with base 3 and height 2, area 3. From 3 to 4: a triangle below the axis with area 1. So g(4) = 3 − 1 = **2**.

**(b)** f > 0 on (0, 3), so **g is increasing on [0, 3]**. f < 0 on (−4, 0) and (3, 4), so g is decreasing there. g′ = f changes from negative to positive at x = 0, so g has a **relative minimum at x = 0**. g′ = f changes from positive to negative at x = 3, so g has a **relative maximum at x = 3**.

**(c)** g″ = f′. f is decreasing on (−4, −2), increasing on (−2, 2) and decreasing on (2, 4). f′ changes sign at t = −2 and t = 2, so **g has points of inflection at x = −2 and x = 2**.

**(d)** Candidates: g(−4) = 2π ≈ 6.28, g(0) = 0, g(3) = 3, g(4) = 2. **Absolute maximum 2π, at x = −4. Absolute minimum 0, at x = 0.** The maximum is at an endpoint, because area below the axis left of 0 counts as positive when you move from 0 back to −4.

| Point | What earns it |
|---|---|
| 1 | g(−4) = 2π, g(−2) = π and g(4) = 2, with the sign change from reversed limits shown |
| 1 | g increasing on [0, 3]; relative min at 0 and relative max at 3, each justified by the sign change of g′ = f |
| 1 | Inflection points at x = −2 and x = 2, because f changes between increasing and decreasing there |
| 1 | Candidates test with all four values; absolute max 2π at x = −4 and absolute min 0 at x = 0 |
</details>

## Question 6 (constructed response · core)

A museum opens at t = 0 and closes at t = 8, where t is in hours. The net rate at which people enter the museum (arrivals minus departures) is R(t) people per hour. R is continuous and **strictly decreasing** on [0, 8]. Some values are shown.

| t (hours) | 0 | 2 | 4 | 6 | 8 |
|---|---|---|---|---|---|
| R(t) (people per hour) | 90 | 50 | 10 | −40 | −80 |

At t = 0 there are 120 people in the museum. Let P(x) = 120 + ∫ (0 to x) R(t) dt for 0 ≤ x ≤ 8.

(a) Find P′(2) and interpret it in context.
(b) At what time is the number of people in the museum greatest? Give an interval of length 2 hours that contains this time, and justify your answer.
(c) Is the graph of P concave up or concave down on (0, 8)? Explain. Does P have a point of inflection?
(d) Use a trapezoidal sum with the four intervals in the table to estimate P(8).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** P′(x) = R(x), so **P′(2) = 50 people per hour**. Two hours after opening, the number of people in the museum is increasing at 50 people per hour.

**(b)** R is continuous with R(4) = 10 > 0 and R(6) = −40 < 0, so by the Intermediate Value Theorem R(c) = 0 for some c in **(4, 6)**. Because R is strictly decreasing, this is the only zero, R > 0 before c and R < 0 after c. So P′ = R changes from positive to negative at c, and c is the only critical point. P increases up to c and decreases after it, so **P is greatest at t = c, between 4 and 6 hours**.

**(c)** P″ = R′, and R is strictly decreasing, so the graph of **P is concave down** on (0, 8). The concavity never changes, so P has **no point of inflection**.

**(d)** Each interval is 2 hours wide:

2 × (90 + 50)/2 + 2 × (50 + 10)/2 + 2 × (10 − 40)/2 + 2 × (−40 − 80)/2 = 140 + 60 − 30 − 120 = 50

So **P(8) ≈ 120 + 50 = 170 people**.

| Point | What earns it |
|---|---|
| 1 | P′(2) = 50 with a correct interpretation (rate of change of the number of people, with units and time) |
| 1 | Interval (4, 6) from the IVT, with the change of sign of R from positive to negative |
| 1 | Concave down because P″ = R′ < 0, and no inflection point |
| 1 | Trapezoidal sum 50 and P(8) ≈ 170 |
</details>

## Question 7 (constructed response · stretch)

Let g(x) = ∫ (0 to x) t(t − 3)² dt for all real x.

(a) Find the critical points of g.
(b) Classify each critical point. A student says "g′(3) = 0, so g has a relative maximum or minimum at x = 3". Explain whether the student is right.
(c) Find the x-values of the points of inflection of the graph of g. Justify.
(d) Without finding a formula for g, explain why g(x) ≥ 0 for every real x.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The integrand is a polynomial, so it is continuous and g′(x) = x(x − 3)². This is 0 at **x = 0 and x = 3**.

**(b)** (x − 3)² ≥ 0, so the sign of g′ follows the sign of x except at x = 3. For example g′(−1) = −16 and g′(2) = 2. At x = 0, g′ changes from negative to positive: **relative minimum**. At x = 3, g′ is positive on both sides (g′(2) = 2, g′(4) = 4): **no extremum**. The student is wrong: g′(3) = 0 gives a horizontal tangent, but an extremum needs a sign change.

**(c)** g″(x) = (x − 3)² + 2x(x − 3) = (x − 3)(3x − 3) = 3(x − 1)(x − 3). g″ > 0 for x < 1, g″ < 0 for 1 < x < 3, g″ > 0 for x > 3. g″ changes sign at both, so the **points of inflection are at x = 1 and x = 3**.

**(d)** g′ ≤ 0 for x ≤ 0, so g is decreasing on (−∞, 0]. g′ ≥ 0 for x ≥ 0, so g is increasing on [0, ∞). So the smallest value of g anywhere is g(0) = ∫ (0 to 0) … = 0. Therefore g(x) ≥ 0 for every x.

| Point | What earns it |
|---|---|
| 1 | g′(x) = x(x − 3)² and critical points x = 0 and x = 3 |
| 1 | Relative minimum at 0, and no extremum at 3 because g′ does not change sign there |
| 1 | g″ = 3(x − 1)(x − 3), with sign changes giving inflection points at 1 and 3 |
| 1 | g decreasing then increasing about x = 0, with g(0) = 0 the minimum, so g ≥ 0 |

Acceptable alternative for (d): for x > 0 the integrand is ≥ 0, so the area is ≥ 0; for x < 0 the integrand is ≤ 0 and the limits run right to left, so the two negatives make the integral ≥ 0.
</details>

## How did you do?

- **Q1, Q3 or Q7(b) wrong:** reread "How features of f show up in g" in the [study guide](/advanced-course-resources/calculus-ab/6-5-interpreting-behavior-accumulation-functions-involving-study-guide/). An extremum needs a sign change in f.
- **Q2 or Q7(c) wrong:** redo Worked example 2: concavity of g comes from f′.
- **Q4 or Q5 wrong:** redo Worked example 1 and its candidates table. Watch the sign of areas to the left of the starting point.
- **Q6 wrong:** redo Worked example 3 on tables and descriptions.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/6-5-interpreting-behavior-accumulation-functions-involving-checklist/).
