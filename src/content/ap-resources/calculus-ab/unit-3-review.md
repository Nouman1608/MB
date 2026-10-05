---
resourceId: "mb-ap-calcab-u3-review"
title: "Differentiation: Composite, Implicit, and Inverse Functions: Mixed Unit Review (Calculus AB Unit 3)"
description: "The big ideas of composite, implicit and inverse differentiation in one place, a methods table, and seven original mixed questions with worked solutions and rubrics."
course: "calculus-ab"
unit: 3
topics: []
resourceType: "unit-review"
calculusScope: "ab-and-bc"
prerequisites:
  - "Work through the Unit 3 topics, or at least the Unit 3 diagnostic"
prerequisiteResources: ["mb-ap-calcab-u3-diagnostic"]
learningObjectives:
  - "Connect the chain rule, implicit differentiation and inverse derivatives as one set of ideas"
  - "Choose a derivative procedure by reading the form of an expression or equation"
  - "Answer multi-part questions that combine several Unit 3 topics, from formulas and from tables"
  - "Write complete methods that show where each value comes from"
skills: ["1", "2", "3"]
studyMinutes: 60
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Angles are in radians, and all values are designed to be found by hand."
related: ["mb-ap-calcab-u3-diagnostic", "mb-ap-calcab-3.1-checklist", "mb-ap-calcab-3.2-checklist", "mb-ap-calcab-3.3-checklist", "mb-ap-calcab-3.4-checklist", "mb-ap-calcab-3.5-checklist", "mb-ap-calcab-3.6-checklist"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "The chain rule is the engine of the unit: implicit differentiation and inverse derivatives are both built from it."
  - "Evaluate an outer derivative at the inside value, and an inverse derivative at the matching input."
  - "Choose the first rule from the last operation; choose implicit differentiation when y is not on its own."
  - "A higher derivative is the same procedure again, so classify the expression afresh at each step."
  - "Shared review for Calculus AB and Calculus BC students."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Use this page after you have studied the topics of Unit 3, Differentiation: Composite, Implicit, and Inverse Functions, or after the [Unit 3 diagnostic](/advanced-course-resources/calculus-ab/unit-3-diagnostic/). The unit is shared by Calculus AB and Calculus BC, and every question here is for both courses. The questions below are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not official scoring. No calculator for any question; angles are in radians.

## Big ideas of the unit

- **Rates multiply through a composition.** If y depends on u and u depends on x, then dy/dx = (dy/du)(du/dx). The outer derivative is taken at the inside value, never at x ([Topic 3.1](/advanced-course-resources/calculus-ab/3-1-chain-rule-study-guide/)).
- **Count the layers.** Each layer gives one factor. Most slips in this unit are a missing factor from the innermost layer.
- **Implicit differentiation is the chain rule applied to y.** Treat y as a function of x, so every y term gains a factor dy/dx. Then collect and solve ([Topic 3.2](/advanced-course-resources/calculus-ab/3-2-implicit-differentiation-study-guide/)).
- **Implicit slopes depend on both coordinates.** Horizontal tangents need numerator 0; vertical tangents need denominator 0. Either way, solve together with the curve's equation.
- **An inverse swaps rise and run.** Differentiating f(g(x)) = x gives g′(b) = 1/f′(a) where f(a) = b. You need the matching input a, not a formula for the inverse ([Topic 3.3](/advanced-course-resources/calculus-ab/3-3-differentiating-inverse-functions-study-guide/)).
- **A horizontal tangent on f means a vertical tangent on f⁻¹**, so the inverse has no derivative there.
- **Inverse trig derivatives come from the same idea.** sin y = x, differentiated implicitly, gives 1/√(1 − x²); the restricted ranges fix the sign of each root ([Topic 3.4](/advanced-course-resources/calculus-ab/3-4-differentiating-inverse-trigonometric-functions-study-guide/)).
- **Choose the procedure from the form.** Rewrite first where you can, then let the last operation pick the first rule ([Topic 3.5](/advanced-course-resources/calculus-ab/3-5-selecting-procedures-calculating-derivatives-study-guide/)).
- **Higher derivatives repeat the process.** f″ exists only where f′ is differentiable, and implicit second derivatives must remember that y still depends on x ([Topic 3.6](/advanced-course-resources/calculus-ab/3-6-calculating-higher-order-derivatives-study-guide/)).

## Key relationships and methods

| You see or need | What to do | Topics |
|---|---|---|
| f(g(x)), or a power, root, exp, log or trig of an expression | Chain rule: f′(g(x)) · g′(x), one factor per layer | 3.1 |
| f(g(a)) from a table | Find g(a) first, then read f′ at that value | 3.1, 3.5 |
| Rates with units | dy/dt = (dy/du)(du/dt); the units cancel in the same way | 3.1 |
| An equation in x and y, not solved for y | Differentiate both sides, attach dy/dx to y terms, collect, solve | 3.2 |
| Horizontal or vertical tangent on an implicit curve | Numerator 0 or denominator 0, then solve with the curve | 3.2 |
| Derivative of f⁻¹ at b | Solve f(a) = b, then 1/f′(a), provided f′(a) ≠ 0 | 3.3 |
| arcsin u, arccos u, arctan u | u′/√(1 − u²), −u′/√(1 − u²), u′/(1 + u²) | 3.4 |
| A limit shaped like [f(a + h) − f(a)]/h | It is f′(a) | 3.5 |
| Single-term denominator, root or log of a product | Rewrite as powers or a sum of logs first | 3.5 |
| f″, f‴, f⁽ⁿ⁾ | Differentiate again; simplify before each step; look for a pattern | 3.6 |
| d²y/dx² for an implicit curve | Differentiate the differentiated equation again; substitute dy/dx | 3.2, 3.6 |

## Question 1 (multiple choice · mixed)

Let f(x) = e^(2x) + x. Then f is increasing, and g is its inverse. Let h(x) = g(x²). What is h′(1)?

- (A) 1/3
- (B) 2/3
- (C) 6
- (D) 2/(2e² + 1)

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** By the chain rule, h′(x) = g′(x²) · 2x, so h′(1) = 2g′(1). For g′(1), find the matching input: f(0) = 1 + 0 = 1, so g(1) = 0. Then f′(x) = 2e^(2x) + 1, so f′(0) = 3 and g′(1) = 1/3. So h′(1) = 2/3.

- (A) is g′(1) alone: it forgets the chain factor 2x.
- (C) is 2f′(0): it forgets the reciprocal.
- (D) is 2/f′(1): it evaluates f′ at the output 1, not the matching input 0.

Topics: 3.1, 3.3.
</details>

## Question 2 (multiple choice · mixed)

Let f(x) = arctan x. What is f″(1)?

- (A) −1/2
- (B) 1/2
- (C) −1/4
- (D) −1

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** f′(x) = 1/(1 + x²) = (1 + x²)⁻¹. Chain rule: f″(x) = −(1 + x²)⁻² · 2x = −2x/(1 + x²)². At x = 1: −2/4 = −1/2.

- (B) loses the minus sign from the power −1.
- (C) forgets the inner derivative 2x: −1/(1 + 1)².
- (D) does not square the denominator: −2x/(1 + x²) at x = 1.

Topics: 3.1, 3.4, 3.6.
</details>

## Question 3 (multiple choice · mixed)

The point (2, 1) lies on the curve ln y + xy = 2. Use the tangent line at (2, 1) to approximate the value of y on the curve near (2, 1) when x = 2.3.

- (A) 0.9
- (B) 0.7
- (C) 1
- (D) 1.1

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Check the point: ln 1 + 2 = 2. ✓ Differentiate: (1/y) · dy/dx + y + x · dy/dx = 0, so dy/dx = −y/(1/y + x) = −y²/(1 + xy). At (2, 1): −1/3. The tangent line is y = 1 − (1/3)(x − 2), which gives 1 − 0.1 = 0.9 at x = 2.3.

- (B) uses slope −1, from writing d/dx [ln y] as 1/y without dy/dx.
- (C) uses slope 0, from dropping the product rule on xy.
- (D) loses the minus sign of the slope.

Topics: 3.1, 3.2.
</details>

## Question 4 (constructed response · mixed)

The functions f and g are differentiable for all x. The function g is increasing, and w is the inverse of g. Selected values are shown.

| x | f(x) | f′(x) | g(x) | g′(x) |
|---|---|---|---|---|
| 0 | 3 | −3 | 1 | 1/2 |
| 1 | 1 | −3/2 | 2 | 3/2 |
| 2 | 0 | −1/2 | 4 | 5/2 |

(a) Let h(x) = f(g(x)). Find h′(0).
(b) Write an equation for the line tangent to the graph of w at x = 4.
(c) Let m(x) = arctan(f(x)). Find m′(0).
(d) Let p(x) = x · g(2x). Find p′(1).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Chain rule: h′(0) = f′(g(0)) · g′(0). Inside first: g(0) = 1, so f′(g(0)) = f′(1) = −3/2. Then h′(0) = (−3/2)(1/2) = **−3/4**.

**(b)** Find 4 in the g(x) column: g(2) = 4, so w(4) = 2. Then w′(4) = 1/g′(2) = 1/(5/2) = 2/5. The tangent line is **y = 2 + (2/5)(x − 4)**.

**(c)** m′(x) = f′(x)/(1 + [f(x)]²). At x = 0: −3/(1 + 9) = **−3/10**.

**(d)** Product rule, with the chain rule on g(2x): p′(x) = g(2x) + x · g′(2x) · 2. At x = 1: g(2) + 2g′(2) = 4 + 5 = **9**.

| Point | What earns it |
|---|---|
| 1 | (a) −3/4, with f′ evaluated at g(0) = 1 |
| 1 | (b) the point (4, 2) from g(2) = 4 |
| 1 | (b) slope 1/g′(2) = 2/5 and a correct tangent line |
| 1 | (c) −3/10 from the arctan chain-rule form |
| 1 | (d) 9, with both the product rule and the chain factor 2 |

Total: 5 points. Topics: 3.1, 3.3, 3.4, 3.5.

Common errors: f′(0)g′(0) = −3/2 in (a); 1/g′(4), which is not in the table, in (b); 13/2 in (d), which drops the chain factor 2.
</details>

## Question 5 (constructed response · mixed)

Consider the curve y³ + 3y = 2x² + 4.

(a) Find dy/dx in terms of x and y.
(b) Explain why the curve has no vertical tangent lines.
(c) Find every point on the curve where the tangent line is horizontal.
(d) Find d²y/dx² at the point you found in (c).
(e) Show that (√5, 2) is on the curve, and find the slope of the curve there.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Differentiate both sides; y³ and 3y need dy/dx:

3y² · dy/dx + 3 · dy/dx = 4x, so **dy/dx = 4x/(3y² + 3)**.

**(b)** A vertical tangent needs the denominator to be 0. But 3y² + 3 ≥ 3 for every y, so it is never 0.

**(c)** Horizontal needs 4x = 0, so x = 0. Then y³ + 3y = 4, or y³ + 3y − 4 = 0. This factors as (y − 1)(y² + y + 4) = 0. The quadratic has discriminant 1 − 16 = −15 < 0, so y = 1 is the only solution. The point is **(0, 1)**.

**(d)** Differentiate (3y² + 3) · dy/dx = 4x again. The left side is a product, and 3y² depends on x:

6y · (dy/dx)² + (3y² + 3) · d²y/dx² = 4.

At (0, 1), dy/dx = 0, so 6 · d²y/dx² = 4 and **d²y/dx² = 2/3**.

**(e)** 2³ + 3(2) = 14 and 2(5) + 4 = 14. ✓ Slope: 4√5/(12 + 3) = **4√5/15**.

| Point | What earns it |
|---|---|
| 1 | (a) dy/dx attached to both y terms, with dy/dx = 4x/(3y² + 3) |
| 1 | (b) Denominator at least 3, so never 0 |
| 1 | (c) x = 0 substituted into the curve |
| 1 | (c) Only (0, 1), with the quadratic factor shown to have no real roots |
| 1 | (d) Second differentiation with the product rule on (3y² + 3) · dy/dx |
| 1 | (d) d²y/dx² = 2/3 |
| 1 | (e) Point checked and slope 4√5/15 |

Total: 7 points. Topics: 3.1, 3.2, 3.6.

Acceptable alternative for (d): apply the quotient rule to 4x/(3y² + 3), then substitute dy/dx = 0. It gives the same value, 2/3.
</details>

## Question 6 (constructed response · mixed)

Let f(x) = x³ + arctan x, and let g be the inverse of f.

(a) Explain why g exists.
(b) Find g(0) and g′(0).
(c) Find the exact value of g′(1 + π/4).
(d) Let H(x) = arctan(g(x)). Find H′(1 + π/4).
(e) Differentiate f′(g(x)) · g′(x) = 1 to show that g″(x) = −f″(g(x)) · g′(x)/[f′(g(x))]². Then find g″(1 + π/4).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** f′(x) = 3x² + 1/(1 + x²). Since 3x² ≥ 0 and 1/(1 + x²) > 0, f′(x) > 0 for all x. So f is increasing, hence one-to-one, and g exists.

**(b)** f(0) = 0 + 0 = 0, so **g(0) = 0**. f′(0) = 1, so **g′(0) = 1/1 = 1**.

**(c)** f(1) = 1 + π/4, so g(1 + π/4) = 1. f′(1) = 3 + 1/2 = 7/2. So **g′(1 + π/4) = 2/7**.

**(d)** Chain rule with the arctan formula: H′(x) = g′(x)/(1 + [g(x)]²). At x = 1 + π/4: (2/7)/(1 + 1) = **1/7**.

**(e)** The left side is a product, and its first factor is a composite. Product rule, then chain rule:

f″(g(x)) · g′(x) · g′(x) + f′(g(x)) · g″(x) = 0.

Solve: g″(x) = −f″(g(x)) · [g′(x)]²/f′(g(x)). Since g′(x) = 1/f′(g(x)), this equals −f″(g(x)) · g′(x)/[f′(g(x))]², as required.

f″(x) = 6x − 2x/(1 + x²)², so f″(1) = 6 − 2/4 = 11/2. At x = 1 + π/4, where g = 1:

g″(1 + π/4) = −(11/2)(2/7)/(7/2)² = −(11/7) × (4/49) = **−44/343**.

| Point | What earns it |
|---|---|
| 1 | (a) f′(x) > 0 for all x, so f is one-to-one |
| 1 | (b) g(0) = 0 and g′(0) = 1 |
| 1 | (c) 2/7, using the matching input 1 and f′(1) = 7/2 |
| 1 | (d) 1/7, with g(1 + π/4) = 1 in the denominator |
| 1 | (e) Correct product and chain rule when differentiating f′(g(x)) · g′(x) |
| 1 | (e) f″(1) = 11/2 and g″(1 + π/4) = −44/343 |

Total: 6 points. Topics: 3.1, 3.3, 3.4, 3.6.
</details>

## Question 7 (constructed response · mixed)

Let f(x) = x · arcsin x + √(1 − x²), for −1 < x < 1.

(a) Name the rule you use first on each term of f. Then show that f′(x) = arcsin x.
(b) Find f″(x) and f″(1/2).
(c) Find f‴(x), and show that f‴(0) = 0.
(d) Write an equation for the line tangent to the graph of y = f′(x) at x = 1/2.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The first term is a product, so use the product rule. The second is a root of an expression, so use the chain rule.

- d/dx [x · arcsin x] = arcsin x + x/√(1 − x²).
- d/dx [√(1 − x²)] = (−2x)/(2√(1 − x²)) = −x/√(1 − x²).

Add: the two fractions cancel, so **f′(x) = arcsin x**.

**(b)** **f″(x) = 1/√(1 − x²)**. At x = 1/2: 1/√(3/4) = 2/√3 = **2√3/3**.

**(c)** Rewrite f″(x) = (1 − x²)^(−1/2). Chain rule: f‴(x) = (−1/2)(1 − x²)^(−3/2) · (−2x) = **x/(1 − x²)^(3/2)**. At x = 0 the numerator is 0, so **f‴(0) = 0**.

**(d)** The point is (1/2, f′(1/2)) = (1/2, π/6). The slope of f′ is f″(1/2) = 2√3/3. Tangent line: **y = π/6 + (2√3/3)(x − 1/2)**.

| Point | What earns it |
|---|---|
| 1 | (a) Product rule on x · arcsin x, with the arcsin derivative |
| 1 | (a) Chain rule on the root, and the cancellation to arcsin x |
| 1 | (b) f″(x) = 1/√(1 − x²) and f″(1/2) = 2√3/3 |
| 1 | (c) f‴(x) = x/(1 − x²)^(3/2), with f‴(0) = 0 |
| 1 | (d) Point (1/2, π/6) and slope 2√3/3 in a correct line |

Total: 5 points. Topics: 3.1, 3.4, 3.5, 3.6.

A common error in (d) is to use f(1/2) as the y-coordinate. The graph is of f′, so the point uses f′(1/2) = π/6.
</details>

## How did you do?

Add up your points from Questions 4–7 (23 in total) and your correct answers to Questions 1–3. The total is only a guide to how secure you are across the unit; it is not a predicted exam score. More useful is to look at **which topics** your lost points came from (each answer lists them), then tick off those topic checklists:

[3.1](/advanced-course-resources/calculus-ab/3-1-chain-rule-checklist/) ·
[3.2](/advanced-course-resources/calculus-ab/3-2-implicit-differentiation-checklist/) ·
[3.3](/advanced-course-resources/calculus-ab/3-3-differentiating-inverse-functions-checklist/) ·
[3.4](/advanced-course-resources/calculus-ab/3-4-differentiating-inverse-trigonometric-functions-checklist/) ·
[3.5](/advanced-course-resources/calculus-ab/3-5-selecting-procedures-calculating-derivatives-checklist/) ·
[3.6](/advanced-course-resources/calculus-ab/3-6-calculating-higher-order-derivatives-checklist/)

If many topics need work, go back to the [Unit 3 diagnostic](/advanced-course-resources/calculus-ab/unit-3-diagnostic/) and use its "Your next step" table to choose where to start.
