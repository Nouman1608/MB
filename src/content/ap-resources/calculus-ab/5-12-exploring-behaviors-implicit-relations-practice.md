---
resourceId: "mb-ap-calcab-5.12-practice"
title: "Exploring Behaviors of Implicit Relations: Practice Questions (Calculus AB 5.12)"
description: "Seven original Marlbridge practice questions on critical points, increasing and decreasing behaviour and second derivatives of implicit curves, with full solutions and rubrics."
course: "calculus-ab"
unit: 5
topics: ["5.12"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Implicit differentiation, first and second derivatives"
prerequisiteResources: ["mb-ap-calcab-5.12-study-guide"]
learningObjectives:
  - "Find horizontal and vertical tangents and other critical points of implicit curves"
  - "Use the sign of dy/dx in terms of x and y to describe where y increases or decreases"
  - "Classify critical points with d²y/dx² written in terms of x, y and dy/dx"
  - "Recognise when the dy/dx formula gives no conclusion"
skills: ["1", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Give exact answers."
related: ["mb-ap-calcab-5.12-study-guide", "mb-ap-calcab-5.12-revision-notes", "mb-ap-calcab-5.12-checklist"]
next: "mb-ap-calcab-5.12-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator** and exact answers. Notation: y′ means dy/dx and y″ means d²y/dx². This set is for both Calculus AB and Calculus BC students.

Questions 1 and 2 use the curve **y² + y = x² − 8x + 18**, for which dy/dx = (2x − 8)/(2y + 1).

## Question 1 (multiple choice · foundation)

At which points does the curve y² + y = x² − 8x + 18 have a horizontal tangent?

- (A) (4, 1) and (4, −2)
- (B) (4, 1) only
- (C) (4, 2) and (4, −1)
- (D) (4, −1/2)

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** dy/dx = 0 needs 2x − 8 = 0, so x = 4. Substitute into the curve: y² + y = 16 − 32 + 18 = 2, so y² + y − 2 = 0, (y + 2)(y − 1) = 0, y = 1 or y = −2. The denominator 2y + 1 is 3 and −3 at these points, both nonzero. Both points are horizontal tangents.

- (B) stops after finding one root of the quadratic in y. One x-value can give two points on an implicit curve.
- (C) factors y² + y − 2 wrongly as (y − 2)(y + 1). Check: (4, 2) gives 4 + 2 = 6, not 2, so it is not on the curve.
- (D) sets the **denominator** to 0. That is the condition for a vertical tangent, and in fact (4, −1/2) is not on the curve.
</details>

## Question 2 (multiple choice · core)

For the same curve, implicit differentiation of (2y + 1)y′ = 2x − 8 gives 2(y′)² + (2y + 1)y″ = 2. Which statement is true?

- (A) y has a relative minimum at (4, 1) and a relative maximum at (4, −2).
- (B) y has a relative maximum at (4, 1) and a relative minimum at (4, −2).
- (C) y has a relative minimum at both points.
- (D) The second derivative test cannot be used, because y″ depends on y.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** At both points y′ = 0, so the equation becomes (2y + 1)y″ = 2 and y″ = 2/(2y + 1). At (4, 1): y″ = 2/3 > 0, concave up, so a relative minimum. At (4, −2): y″ = 2/(−3) = −2/3 < 0, concave down, so a relative maximum.

- (B) swaps the signs, perhaps by reading −2/3 as belonging to (4, 1).
- (C) reads y″ = 2 from the right-hand side without dividing by 2y + 1, which is negative at (4, −2).
- (D) is false. You substitute the coordinates of the point, and the result is a number whose sign you can read.
</details>

## Question 3 (multiple choice · core)

Which of the following lists every critical point of the relation x = y³ − 3y + 1?

- (A) (−1, 1) and (3, −1)
- (B) (1, −1) and (−1, 3)
- (C) (−1, 1) only
- (D) There are none, because dy/dx is never 0.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Differentiate with respect to x: 1 = (3y² − 3)y′, so dy/dx = 1/(3y² − 3). This is never 0, but it **does not exist** when 3y² − 3 = 0, that is y = ±1. y = 1 gives x = 1 − 3 + 1 = −1; y = −1 gives x = −1 + 3 + 1 = 3. Both points are critical points (with vertical tangents).

- (B) writes the coordinates in the wrong order. For example (1, −1) would need 1 = −1 + 3 + 1 = 3, which is false.
- (C) uses only y = 1 and forgets y = −1.
- (D) forgets the second half of the definition: a point where dy/dx does not exist is also a critical point.
</details>

## Question 4 (multiple choice · core)

For the ellipse 3x² + y² = 12, dy/dx = −3x/y. On which parts of the curve is y increasing as x increases?

- (A) Where the point is in the first or third quadrant
- (B) Where the point is in the second or fourth quadrant
- (C) Where y > 0
- (D) Where x < 0

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** y increases when dy/dx > 0. Since dy/dx = −3x/y, this happens when x/y < 0, that is when x and y have opposite signs: quadrants II and IV. For example, at (−1, 3) dy/dx = 1 > 0, and at (1, −3) dy/dx = 1 > 0.

- (A) forgets the minus sign. At (1, 3), in the first quadrant, dy/dx = −1 < 0.
- (C) looks only at the denominator. On the upper half, dy/dx > 0 only for x < 0.
- (D) looks only at the numerator. On the lower half with x < 0, such as (−1, −3), dy/dx = −1 < 0.
</details>

## Question 5 (constructed response · core)

Consider the curve y³ + x²y = 8.

(a) Show that dy/dx = −2xy/(x² + 3y²).
(b) Explain why y > 0 at every point of the curve, and hence show the curve has no vertical tangents.
(c) Find every point where the tangent is horizontal.
(d) Justify that y has an absolute maximum at the point in (c), and give the maximum value.
(e) Find d²y/dx² at that point and say what it tells you.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Differentiate: 3y²y′ + (2xy + x²y′) = 0. So y′(x² + 3y²) = −2xy and y′ = −2xy/(x² + 3y²).

**(b)** The equation is y(x² + y²) = 8. The point (0, 0) is not on the curve, so x² + y² > 0, and the product is positive only if **y > 0**. Then x² + 3y² > 0, so the denominator is never 0 and there are **no vertical tangents**.

**(c)** The numerator −2xy = 0 needs x = 0 (since y ≠ 0). At x = 0, y³ = 8, so y = 2. The point is **(0, 2)**.

**(d)** Because y > 0 and the denominator is positive, dy/dx has the opposite sign to x. For x < 0, dy/dx > 0, so y is increasing; for x > 0, dy/dx < 0, so y is decreasing. (0, 2) is the only critical point, and y increases on every part of the curve to its left and decreases on every part to its right. So y = **2** is the absolute maximum value of y on the curve.

**(e)** Differentiate y′(x² + 3y²) = −2xy: y″(x² + 3y²) + y′(2x + 6y·y′) = −2y − 2x·y′. At (0, 2), y′ = 0, so 12y″ = −4 and **y″ = −1/3 < 0**. The curve is concave down at (0, 2), which agrees with a maximum.

| Point | What earns it |
|---|---|
| 1 | Correct implicit differentiation, including the product rule on x²y |
| 1 | Explains y > 0 and that the denominator is never 0 |
| 1 | Horizontal tangent only at (0, 2), with the curve's equation used to find y |
| 1 | Sign of dy/dx explained (opposite to x, because y > 0 and the denominator is positive), with the conclusion that y = 2 is the absolute maximum |
| 1 | y″ = −1/3 and the conclusion "concave down, consistent with a maximum" |
</details>

## Question 6 (constructed response · core)

Consider the curve x² − 4xy + 5y² = 4.

(a) Show that dy/dx = (2y − x)/(5y − 2x).
(b) Find the points where the tangent is horizontal.
(c) Use the second derivative to decide whether y has a relative maximum or minimum at each point in (b).
(d) Find the points where the tangent is vertical.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Differentiate: 2x − (4y + 4x·y′) + 10y·y′ = 0. So y′(10y − 4x) = 4y − 2x, and dividing by 2: y′ = (2y − x)/(5y − 2x).

**(b)** Numerator 2y − x = 0 gives x = 2y. Substitute: 4y² − 8y² + 5y² = 4, so y² = 4 and y = ±2. The points are **(4, 2)** and **(−4, −2)**. Denominator 5y − 2x is 10 − 8 = 2 and −10 + 8 = −2, both nonzero.

**(c)** Write y′ = N/D with N = 2y − x and D = 5y − 2x. By the quotient rule, y″ = (N′D − N·D′)/D², where N′ = 2y′ − 1. At a horizontal tangent N = 0 and y′ = 0, so y″ = N′/D = −1/D.
At (4, 2): y″ = −1/2 < 0, so y has a **relative maximum** of 2 at x = 4.
At (−4, −2): y″ = −1/(−2) = 1/2 > 0, so y has a **relative minimum** of −2 at x = −4.

**(d)** Denominator 5y − 2x = 0 gives y = 2x/5. Substitute: x² − 8x²/5 + 4x²/5 = x²/5 = 4, so x = ±2√5 and y = ±4√5/5. The numerator 2y − x is −2√5/5 at (2√5, 4√5/5), and +2√5/5 at the other point, both nonzero. The vertical tangents are at **(2√5, 4√5/5)** and **(−2√5, −4√5/5)**.

| Point | What earns it |
|---|---|
| 1 | Correct implicit differentiation, including the product rule on −4xy |
| 1 | Both horizontal-tangent points, found by solving x = 2y with the curve, with the denominator checked |
| 1 | A correct expression for y″, or its correct value, at a horizontal tangent |
| 1 | Correct classification of both points, with the sign of y″ as the reason |
| 1 | Both vertical-tangent points, with the numerator checked |
</details>

## Question 7 (constructed response · stretch)

Consider the curve y² = x³ − 3x + 2.

(a) Find dy/dx.
(b) Find every point on the curve where the numerator of dy/dx is 0. Which of these are horizontal tangents?
(c) Classify each horizontal tangent using d²y/dx².
(d) Find any vertical tangents.
(e) At one point from (b) the formula gives 0/0. Use the fact that x³ − 3x + 2 = (x − 1)²(x + 2) to describe the curve near that point.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** 2y·y′ = 3x² − 3, so dy/dx = (3x² − 3)/(2y).

**(b)** 3x² − 3 = 0 gives x = ±1. At x = −1: y² = −1 + 3 + 2 = 4, so the points are (−1, 2) and (−1, −2), where 2y = ±4 ≠ 0. These are **horizontal tangents**. At x = 1: y² = 0, so the point is (1, 0). There 2y = 0 too, so dy/dx is 0/0: **not** a horizontal tangent by this test.

**(c)** Differentiate 2y·y′ = 3x² − 3: 2(y′)² + 2y·y″ = 6x. At a horizontal tangent y′ = 0, so y″ = 3x/y.
At (−1, 2): y″ = −3/2 < 0, so y has a **relative maximum** there.
At (−1, −2): y″ = 3/2 > 0, so y has a **relative minimum** there.

**(d)** The denominator 2y = 0 gives y = 0, so x³ − 3x + 2 = 0, which gives x = 1 or x = −2. At (−2, 0) the numerator is 3(4) − 3 = 9 ≠ 0, so there is a **vertical tangent at (−2, 0)**. At (1, 0) both parts are 0, as found in (b).

**(e)** y² = (x − 1)²(x + 2), so near x = 1 the curve is made of two pieces, y = (x − 1)√(x + 2) and y = −(x − 1)√(x + 2). They cross at (1, 0). Their slopes there are √3 and −√3. So the curve crosses itself at (1, 0) with two different tangent lines. That is why the single formula gave 0/0.

| Point | What earns it |
|---|---|
| 1 | dy/dx = (3x² − 3)/(2y) |
| 1 | Horizontal tangents at (−1, 2) and (−1, −2), with (1, 0) rejected because the denominator is also 0 |
| 1 | y″ = 3x/y at a horizontal tangent (or correct values −3/2 and 3/2) |
| 1 | Relative maximum at (−1, 2) and relative minimum at (−1, −2), with the sign of y″ as the reason |
| 1 | Vertical tangent at (−2, 0), with the numerator checked |
| 1 | Explains 0/0 at (1, 0): two branches cross there, with slopes ±√3 |
</details>

## How did you do?

- **Q1 or Q3 wrong:** reread "Critical points of an implicit relation" in the [study guide](/advanced-course-resources/calculus-ab/5-12-exploring-behaviors-implicit-relations-study-guide/), and solve the line with the curve to get points.
- **Q2, Q6 or Q7(c) wrong:** redo Worked example 1, step 5: at a horizontal tangent, every y′ term in y″ is 0.
- **Q4 or Q5 wrong:** see "Increasing, decreasing and concavity" and Worked example 2.
- **Q7(b) or Q7(e) wrong:** see "When both N and D are 0".

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/5-12-exploring-behaviors-implicit-relations-checklist/).
