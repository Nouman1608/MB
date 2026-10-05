---
resourceId: "mb-ap-calcab-8.6-practice"
title: "Finding the Area Between Curves That Intersect at More Than Two Points: Practice Questions (Calculus AB 8.6)"
description: "Seven original Marlbridge practice questions on areas between curves that cross several times, net versus total, and absolute-value integrals, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 8
topics: ["8.6"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Evaluating definite integrals with antiderivatives and with a calculator"
  - "Factoring cubic polynomials"
prerequisiteResources: ["mb-ap-calcab-8.6-study-guide"]
learningObjectives:
  - "Find every crossing and write the area as a sum of integrals"
  - "Use ∫ |f − g| dx on a calculator"
  - "Distinguish a net (signed) integral from a total area"
  - "Read area information from given integral values"
skills: ["2"]
studyMinutes: 50
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Questions 1, 2, 3, 5 and 7: no calculator. Questions 4 and 6: graphing calculator allowed; use radians, store unrounded values and give answers to three decimal places."
related: ["mb-ap-calcab-8.6-study-guide", "mb-ap-calcab-8.6-revision-notes", "mb-ap-calcab-8.6-checklist"]
next: "mb-ap-calcab-8.6-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written reasoning."
  - "Questions 4 and 6 are calculator-active; the rest are not."
  - "Shared practice for Calculus AB and Calculus BC students."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. The context in Question 6 is invented. Assumptions: **no calculator** except in Questions 4 and 6; angles in radians; exact answers unless a calculator is allowed, then three decimal places. Notation: ∫ (a to b) |f(x) − g(x)| dx means the definite integral of the absolute value of f(x) − g(x) from x = a to x = b. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

f and g are continuous. Their graphs cross at x = 0, x = 2 and x = 5 only. The graph of f is above the graph of g for 0 < x < 2, and below it for 2 < x < 5. Which expression gives the area of the region between the graphs for 0 ≤ x ≤ 5?

- (A) ∫ (0 to 5) [f(x) − g(x)] dx
- (B) ∫ (0 to 2) [f(x) − g(x)] dx + ∫ (2 to 5) [g(x) − f(x)] dx
- (C) ∫ (0 to 2) [g(x) − f(x)] dx + ∫ (2 to 5) [f(x) − g(x)] dx
- (D) |∫ (0 to 5) [f(x) − g(x)] dx|

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Split at the crossing x = 2 and use top − bottom on each piece: f − g on [0, 2], g − f on [2, 5]. Both integrals are positive, so their sum is the area.

- (A) lets the piece on [2, 5] count as negative, so the two pieces cancel partly. It gives a net value.
- (C) uses bottom − top on both pieces. It gives the negative of the area.
- (D) takes the absolute value after the cancellation has already happened. It is only the size of the net value.
</details>

## Question 2 (multiple choice · core)

What is the total area of the regions enclosed by y = x³ − 2x² and y = 3x?

- (A) 32/3
- (B) 45/4
- (C) 71/6
- (D) −32/3

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** x³ − 2x² = 3x gives x(x² − 2x − 3) = 0, so x(x − 3)(x + 1) = 0 and x = −1, 0 or 3. Let d(x) = x³ − 2x² − 3x. At x = −0.5, d = 0.875 > 0 (cubic on top); at x = 1, d = −4 < 0 (line on top).

Area = ∫ (−1 to 0) d(x) dx + ∫ (0 to 3) [−d(x)] dx = 7/12 + 45/4 = 7/12 + 135/12 = 142/12 = 71/6.

- (A) is the size of the net value: ∫ (−1 to 3) d(x) dx = 7/12 − 45/4 = −32/3. The small piece has been subtracted from the large one.
- (B) is only the larger piece, on [0, 3]. It misses the crossing at x = −1.
- (D) is the net value itself. An area cannot be negative.
</details>

## Question 3 (multiple choice · core)

f and g are continuous on [0, 4], and f(x) − g(x) changes sign only at x = 1 and x = 3. You are told:

- ∫ (0 to 1) [f(x) − g(x)] dx = 2
- ∫ (1 to 3) [f(x) − g(x)] dx = −5
- ∫ (3 to 4) [f(x) − g(x)] dx = 1.5

What is the total area between the graphs of f and g for 0 ≤ x ≤ 4?

- (A) −1.5
- (B) 1.5
- (C) 4.5
- (D) 8.5

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Between sign changes, each integral is either all positive or all negative. The area adds the size of every piece: 2 + 5 + 1.5 = 8.5.

- (A) is the net value, 2 − 5 + 1.5. The pieces have cancelled.
- (B) is the size of the net value. Taking the absolute value at the end does not undo the cancellation.
- (C) makes the −5 positive but also flips the sign of the first piece: −2 + 5 + 1.5. On [0, 1] the integral is positive, so f is on top there and that piece adds 2.
</details>

## Question 4 (multiple choice · calculator · core)

What is the total area of the regions enclosed by y = x³ − 4x and y = sin x?

- (A) 0
- (B) 5.463
- (C) 8.000
- (D) 10.926

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The calculator gives three crossings: x = −A, 0 and A, with A ≈ 2.100. Store A. At x = −1, (−1)³ + 4 = 3 > sin(−1), so the cubic is on top on (−A, 0); at x = 1, 1 − 4 = −3 < sin 1, so sin x is on top on (0, A). Area = ∫ (−A to A) |x³ − 4x − sin x| dx ≈ 10.926.

- (A) is ∫ (−A to A) (x³ − 4x − sin x) dx without the absolute value. Both curves are odd functions, so the two pieces are equal in size and opposite in sign. They cancel exactly.
- (B) is only one of the two pieces.
- (C) uses ∫ (−2 to 2) |x³ − 4x| dx: the area between the cubic and the x-axis. It ignores y = sin x.
</details>

## Question 5 (constructed response · no calculator · core)

Let f(x) = x³ − 2x² and g(x) = x² − 2x.

(a) Find the coordinates of all points where the graphs of f and g meet.
(b) Determine which function is on top on each interval between these points. Show your test values.
(c) Find the total area of the regions enclosed by the two graphs.
(d) A student computes ∫ (0 to 2) [f(x) − g(x)] dx, gets 0, and says "the curves enclose no area". Explain the error.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** f(x) − g(x) = x³ − 3x² + 2x = x(x − 1)(x − 2). The graphs meet at x = 0, 1 and 2. Using g: **(0, 0), (1, −1) and (2, 0)**.

**(b)** At x = 0.5, f − g = 0.125 − 0.75 + 1 = 3/8 > 0, so **f is on top on (0, 1)**. At x = 1.5, f − g = 3.375 − 6.75 + 3 = −3/8 < 0, so **g is on top on (1, 2)**.

**(c)** An antiderivative of f − g is F(x) = x⁴/4 − x³ + x². F(0) = 0, F(1) = 1/4, F(2) = 4 − 8 + 4 = 0.

Area = ∫ (0 to 1) [f − g] dx + ∫ (1 to 2) [g − f] dx = (1/4 − 0) + (−(0 − 1/4)) = 1/4 + 1/4 = **1/2**.

**(d)** The integral of f − g counts the piece on (1, 2), where g is on top, as negative. Here the two pieces have the same size, 1/4, so they cancel exactly and the net value is 0. The curves do enclose two regions, with total area 1/2. To get an area, split at x = 1 (or integrate |f − g|).

| Point | What earns it |
|---|---|
| 1 | (a) All three points, from factoring f − g |
| 1 | (b) A correct test value in each interval with the correct conclusion |
| 1 | (c) Sets up two integrals split at x = 1, each top − bottom |
| 1 | (c) Correct antiderivative and total area 1/2 |
| 1 | (d) Explains that the piece where g is on top counts as negative and cancels the other piece, so the net value is not the area |
</details>

## Question 6 (constructed response · calculator · core)

A designer cuts a decorative brass inlay. With x and y in centimetres, the inlay is the region between the graphs of

- f(x) = 3 + sin(1.5x)
- g(x) = 0.4x + 1.8

for 0 ≤ x ≤ 6. The left and right edges are the vertical lines x = 0 and x = 6.

(a) Find all values of x in 0 < x < 6 where the graphs cross.
(b) Write an expression for the area of the inlay as a sum of integrals, each with a positive integrand.
(c) Find the area of the inlay.
(d) The brass sheet has a mass of 0.85 g per cm². Find the mass of the inlay.
(e) Explain why ∫ (0 to 6) [f(x) − g(x)] dx is smaller than your answer to (c).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Solve f(x) = g(x) on the calculator: x = p ≈ **2.287**, x = q ≈ **4.680** and x = r ≈ **5.413**. Store all three.

**(b)** Test values: f − g ≈ 1.797 at x = 1 (f on top), ≈ −1.059 at x = 3.5 (g on top), ≈ 0.138 at x = 5 (f on top), ≈ −0.457 at x = 5.8 (g on top).

**Area = ∫ (0 to p) [f − g] dx + ∫ (p to q) [g − f] dx + ∫ (q to r) [f − g] dx + ∫ (r to 6) [g − f] dx**

**(c)** Area = ∫ (0 to 6) |f(x) − g(x)| dx ≈ **4.871 cm²**. (The four pieces are about 3.004, 1.596, 0.069 and 0.203.)

**(d)** Mass ≈ 4.871 × 0.85 ≈ **4.141 g**. (Use the stored area.)

**(e)** ∫ (0 to 6) [f − g] dx ≈ 1.274. On (p, q) and (r, 6), g is above f, so f − g < 0 and those pieces are subtracted instead of added: 3.004 − 1.596 + 0.069 − 0.203 ≈ 1.274.

| Point | What earns it |
|---|---|
| 1 | (a) All three crossings, 2.287, 4.680 and 5.413 |
| 1 | (b) Four integrals split at the crossings, with the correct order (top − bottom) in each |
| 1 | (c) Area 4.871 cm² |
| 1 | (d) Mass 4.141 g with units |
| 1 | (e) Explains that the pieces where g is on top count as negative in the integral without the absolute value |

The single integral ∫ (0 to 6) |f − g| dx is a fully acceptable answer to (b) if the student also shows which function is on top on each piece in (b) or (e). Units are needed for the points in (c) and (d).
</details>

## Question 7 (constructed response · no calculator · stretch)

Consider the curves x = y³ − 6y and x = −y².

(a) Find the coordinates of all points where the curves meet.
(b) Explain why horizontal strips are a sensible choice here.
(c) Find the total area of the regions enclosed by the two curves.
(d) Find ∫ (−3 to 2) [(y³ − 6y) − (−y²)] dy, and explain why it differs from your answer to (c).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** y³ − 6y = −y² gives y³ + y² − 6y = 0, so y(y + 3)(y − 2) = 0 and y = −3, 0 or 2. The points are **(−9, −3), (0, 0) and (−4, 2)**.

**(b)** Both curves are given as x in terms of y. The cubic x = y³ − 6y is not a function of x (a vertical line can meet it three times), so a dx set-up would need inverse functions that cannot be written neatly. Horizontal strips use the formulas as given.

**(c)** Let d(y) = y³ + y² − 6y (cubic minus parabola). At y = −1, d = −1 + 1 + 6 = 6 > 0, so the cubic is on the right on (−3, 0). At y = 1, d = 1 + 1 − 6 = −4 < 0, so the parabola is on the right on (0, 2).

An antiderivative is G(y) = y⁴/4 + y³/3 − 3y². G(−3) = 81/4 − 9 − 27 = −63/4, G(0) = 0, G(2) = 4 + 8/3 − 12 = −16/3.

Area = ∫ (−3 to 0) d(y) dy + ∫ (0 to 2) [−d(y)] dy = 63/4 + 16/3 = 189/12 + 64/12 = **253/12** (about 21.083).

**(d)** ∫ (−3 to 2) d(y) dy = G(2) − G(−3) = −16/3 + 63/4 = **125/12** (about 10.417). This is 63/4 − 16/3: the piece on (0, 2), where the parabola is on the right, counts as negative. It is a net value, not the area.

| Point | What earns it |
|---|---|
| 1 | (a) All three points, from factoring |
| 1 | (b) A valid reason: the curves are functions of y, or the cubic fails the vertical-line test |
| 1 | (c) Correct right curve on each piece, with test values |
| 1 | (c) Area 253/12 from two dy integrals |
| 1 | (d) Value 125/12 with the explanation that the second piece is subtracted |
</details>

## How did you do?

- **Q1, Q3 or Q5(d) wrong:** reread "Net value or area?" and Worked example 3 in the [study guide](/advanced-course-resources/calculus-ab/8-6-finding-area-between-curves-that-study-guide/).
- **Q2 or Q5(a)–(c) wrong:** redo Worked example 1. Find every crossing, then test each piece separately.
- **Q4 or Q6 wrong:** redo Worked example 2. Put the absolute value inside the integral and store the crossings.
- **Q7 wrong:** review horizontal strips in [Topic 8.5](/advanced-course-resources/calculus-ab/8-5-finding-area-between-curves-expressed-study-guide/), then apply the same splitting idea to right − left.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/8-6-finding-area-between-curves-that-checklist/).
