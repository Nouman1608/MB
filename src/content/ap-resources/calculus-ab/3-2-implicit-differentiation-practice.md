---
resourceId: "mb-ap-calcab-3.2-practice"
title: "Implicit Differentiation: Practice Questions (Calculus AB 3.2)"
description: "Seven original Marlbridge practice questions on implicit differentiation: slopes, tangent lines, and horizontal and vertical tangents, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 3
topics: ["3.2"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "The chain rule and the product rule"
  - "Equation of a line through a point with a given slope"
prerequisiteResources: ["mb-ap-calcab-3.2-study-guide"]
learningObjectives:
  - "Differentiate equations in x and y implicitly and solve for dy/dx"
  - "Evaluate dy/dx at a point and write a tangent line"
  - "Find points with horizontal or vertical tangent lines"
  - "Explain each step of an implicit differentiation"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Angles are in radians. Give exact answers."
related: ["mb-ap-calcab-3.2-study-guide", "mb-ap-calcab-3.2-revision-notes", "mb-ap-calcab-3.2-checklist"]
next: "mb-ap-calcab-3.2-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, angles in radians, and exact answers. In every question y is treated as a differentiable function of x near the points involved. Notation: dy/dx is the derivative of y with respect to x; e^y means e raised to the power y. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

The point (2, 3) lies on the curve x³ + y² = 17. What is the value of dy/dx at (2, 3)?

- (A) −12
- (B) −1/2
- (C) −2
- (D) 2

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Differentiate: 3x² + 2y · dy/dx = 0, so dy/dx = −3x²/(2y). At (2, 3): −12/6 = −2.

- (A) is −3x² at x = 2. It stops before dividing by 2y, as if d/dx [y²] were dy/dx alone.
- (B) is the reciprocal, −2y/(3x²). It comes from dividing the wrong way when isolating dy/dx.
- (D) loses the minus sign when moving 3x² to the other side.
</details>

## Question 2 (multiple choice · core)

If xy + y² = 6, which expression is dy/dx?

- (A) −y/(x + 2y)
- (B) −3y/x
- (C) −1/2
- (D) −(x + 2y)/y

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Product rule on xy, chain rule on y²: y + x · dy/dx + 2y · dy/dx = 0. Collect and factor: dy/dx · (x + 2y) = −y. So dy/dx = −y/(x + 2y).

- (B) forgets dy/dx on y²: y + x · dy/dx + 2y = 0 gives dy/dx = −3y/x.
- (C) differentiates xy as y only, dropping x · dy/dx: y + 2y · dy/dx = 0 gives −1/2.
- (D) is the reciprocal of the correct answer, from dividing the wrong way.
</details>

## Question 3 (multiple choice · core)

The curve x² + y² − 4x + 2y = 20 has dy/dx = (2 − x)/(y + 1). At which of these points is the tangent line to the curve horizontal?

- (A) (2, −1)
- (B) (−3, −1)
- (C) (7, −1)
- (D) (2, 4)

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Horizontal means dy/dx = 0, so the numerator 2 − x = 0, giving x = 2. Substitute x = 2 into the curve: 4 + y² − 8 + 2y = 20, so y² + 2y − 24 = 0, which factors as (y + 6)(y − 4) = 0. So y = 4 or y = −6. Of these, (2, 4) is listed. At (2, 4) the denominator is 5, not 0. ✓

- (A) has x = 2 but is not on the curve: 4 + 1 − 8 − 2 = −5, not 20. (It is the centre of the circle (x − 2)² + (y + 1)² = 25.)
- (B) and (C) are on the curve, but there y + 1 = 0, so the denominator is 0 and the numerator is not. Those are **vertical** tangents.
</details>

## Question 4 (multiple choice · core)

The curve y + sin y = 4x passes through the origin. What is dy/dx at (0, 0)?

- (A) 1/2
- (B) 2
- (C) 3
- (D) 4

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Differentiate: dy/dx + cos y · dy/dx = 4. Factor: dy/dx · (1 + cos y) = 4, so dy/dx = 4/(1 + cos y). At y = 0: 4/(1 + 1) = 2.

- (A) is the reciprocal, (1 + cos y)/4.
- (C) forgets the chain rule on sin y, writing dy/dx + cos y = 4, so dy/dx = 4 − cos 0 = 3.
- (D) ignores the sin y term entirely.
</details>

## Question 5 (constructed response · core)

Consider the curve x² + 3xy + y² = 11.

(a) Show that the point (1, 2) lies on the curve.
(b) Find dy/dx in terms of x and y.
(c) Find the equation of the tangent line to the curve at (1, 2).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** 1² + 3(1)(2) + 2² = 1 + 6 + 4 = 11. ✓

**(b)** Differentiate each term. The middle term needs the product rule: d/dx [3xy] = 3y + 3x · dy/dx.

2x + 3y + 3x · dy/dx + 2y · dy/dx = 0

Collect and factor: dy/dx · (3x + 2y) = −(2x + 3y). So

**dy/dx = −(2x + 3y)/(3x + 2y)**

**(c)** At (1, 2): dy/dx = −(2 + 6)/(3 + 4) = −8/7. Tangent line: **y = 2 − (8/7)(x − 1)**.

| Point | What earns it |
|---|---|
| 1 | Correct derivative of 3xy using the product rule |
| 1 | dy/dx attached to the y² term, dy/dx terms collected and factored |
| 1 | dy/dx = −(2x + 3y)/(3x + 2y) or equivalent |
| 1 | Slope −8/7 from both coordinates, and a correct tangent line |

Part (a) is a check and is not scored separately, but a tangent line at a point not on the curve earns no final point.
</details>

## Question 6 (constructed response · core)

Consider the curve x² + xy + y² = 27.

(a) Show that dy/dx = −(2x + y)/(x + 2y).
(b) Find every point on the curve where the tangent line is horizontal.
(c) Find every point on the curve where the tangent line is vertical.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Differentiate: 2x + (y + x · dy/dx) + 2y · dy/dx = 0. Collect: dy/dx · (x + 2y) = −(2x + y). Divide: dy/dx = −(2x + y)/(x + 2y). ✓

**(b)** Horizontal: numerator 0, so 2x + y = 0, which means y = −2x. Substitute into the curve: x² + x(−2x) + 4x² = 3x² = 27, so x = ±3. Points: **(3, −6) and (−3, 6)**. Check the denominator x + 2y: −9 and 9, both nonzero. ✓

**(c)** Vertical: denominator 0, so x + 2y = 0, which means x = −2y. Substitute: 4y² − 2y² + y² = 3y² = 27, so y = ±3. Points: **(−6, 3) and (6, −3)**. Check the numerator 2x + y: −9 and 9, both nonzero. ✓

| Point | What earns it |
|---|---|
| 1 | Correct implicit derivative with the product rule on xy |
| 1 | Sets the numerator to 0 and substitutes y = −2x into the curve |
| 1 | Both horizontal points, (3, −6) and (−3, 6) |
| 1 | Both vertical points, (−6, 3) and (6, −3), with the other part of the fraction checked to be nonzero |

A common error in (b) is to stop at "y = −2x". That is a line, not a point; it must be combined with the curve's equation.
</details>

## Question 7 (constructed response · stretch)

Consider the curve e^(y − 1) + x²y = 2.

(a) Show that (1, 1) lies on the curve, and find dy/dx in terms of x and y.
(b) Find the equation of the tangent line at (1, 1).
(c) Explain why the curve has no vertical tangent lines.
(d) Find the exact coordinates of every point on the curve where the tangent line is horizontal.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** e⁰ + 1 × 1 = 1 + 1 = 2. ✓ Differentiate: e^(y − 1) needs the chain rule (the inner function y − 1 has derivative dy/dx), and x²y needs the product rule:

e^(y − 1) · dy/dx + 2xy + x² · dy/dx = 0

So dy/dx · (e^(y − 1) + x²) = −2xy, and **dy/dx = −2xy/(e^(y − 1) + x²)**.

**(b)** At (1, 1): dy/dx = −2/(1 + 1) = −1. Tangent line: **y = 1 − (x − 1)**, which is y = 2 − x.

**(c)** A vertical tangent needs the denominator e^(y − 1) + x² to be 0. But e^(y − 1) > 0 for every y and x² ≥ 0, so the denominator is always positive. It is never 0, so there are no vertical tangents.

**(d)** Horizontal needs −2xy = 0, so x = 0 or y = 0.

- If y = 0: the curve gives e⁻¹ + 0 = 2, which is false (e⁻¹ ≈ 0.37). No point.
- If x = 0: the curve gives e^(y − 1) = 2, so y − 1 = ln 2 and y = 1 + ln 2.

So the only point is **(0, 1 + ln 2)**. There the denominator is e^(ln 2) + 0 = 2 ≠ 0. ✓

| Point | What earns it |
|---|---|
| 1 | Chain rule on e^(y − 1) and product rule on x²y, giving the correct dy/dx |
| 1 | Tangent line y = 2 − x (or equivalent) |
| 1 | Argues the denominator is always positive because e^(y − 1) > 0 and x² ≥ 0 |
| 1 | Tests both x = 0 and y = 0 against the curve and finds only (0, 1 + ln 2) |
</details>

## How did you do?

- **Q1 or Q4 wrong:** reread "The key idea: y is a function of x" in the [study guide](/advanced-course-resources/calculus-ab/3-2-implicit-differentiation-study-guide/): every y term gains dy/dx.
- **Q2 or Q5 wrong:** redo Worked example 1; the product rule on xy gives two terms.
- **Q3 or Q6 wrong:** see "Horizontal and vertical tangent lines" and Worked example 2. Always substitute back into the curve.
- **Q7 wrong:** see Worked example 3 on exponential terms, and check the signs of each part of dy/dx.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/3-2-implicit-differentiation-checklist/).
