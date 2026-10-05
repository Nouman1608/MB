---
resourceId: "mb-ap-calcab-2.8-practice"
title: "The Product Rule: Practice Questions (Calculus AB 2.8)"
description: "Seven original Marlbridge practice questions on the product rule with formulas and tables, horizontal tangents and three-factor products, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 2
topics: ["2.8"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Derivatives of powers of x, sin x, cos x, eˣ and ln x"
  - "Point–slope form of a straight line"
prerequisiteResources: ["mb-ap-calcab-2.8-study-guide"]
learningObjectives:
  - "Apply the product rule to products of familiar functions"
  - "Use the product rule with values from a table"
  - "Find tangent lines and horizontal tangents of products"
  - "Explain why (f · g)′ is not f′ · g′"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Angles are in radians. Give exact answers unless a question asks for a decimal."
related: ["mb-ap-calcab-2.8-study-guide", "mb-ap-calcab-2.8-revision-notes", "mb-ap-calcab-2.8-checklist"]
next: "mb-ap-calcab-2.8-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, angles in radians, ln means the natural logarithm, and exact answers unless stated. The functions f and g in the table questions are invented for practice and are differentiable everywhere. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

What is d/dx (x⁴ cos x)?

- (A) −4x³ sin x
- (B) 4x³ cos x − x⁴ sin x
- (C) 4x³ cos x + x⁴ sin x
- (D) 4x³ cos x

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** With f(x) = x⁴ and g(x) = cos x: f′(x)g(x) + f(x)g′(x) = 4x³ cos x + x⁴(−sin x) = 4x³ cos x − x⁴ sin x.

- (A) multiplies the derivatives, 4x³ · (−sin x). The derivative of a product is not the product of the derivatives.
- (C) uses d/dx cos x = +sin x, losing the minus sign.
- (D) treats cos x as a constant and keeps only the first term.
</details>

## Question 2 (multiple choice · core)

The table gives values of f, g and their derivatives at x = 1.

| x | f(x) | f′(x) | g(x) | g′(x) |
|---|---|---|---|---|
| 1 | 2 | −3 | −1 | 4 |

If P(x) = f(x) · g(x), what is P′(1)?

- (A) −12
- (B) −5
- (C) 11
- (D) −2

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** P′(1) = f′(1)g(1) + f(1)g′(1) = (−3)(−1) + (2)(4) = 3 + 8 = 11.

- (A) is f′(1) · g′(1) = (−3)(4), the product of the derivatives.
- (B) subtracts the two terms, 3 − 8. That minus sign belongs to the quotient rule, not the product rule.
- (D) is P(1) = f(1) · g(1) = (2)(−1), the value of the product rather than its slope.
</details>

## Question 3 (multiple choice · core)

If y = x² ln x, what is the value of dy/dx at x = e?

- (A) 2
- (B) e
- (C) 3e
- (D) e²

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** dy/dx = 2x · ln x + x² · (1/x) = 2x ln x + x. At x = e: 2e(1) + e = 3e.

- (A) multiplies the derivatives: 2x · (1/x) = 2.
- (B) subtracts the terms, 2e − e. The product rule adds.
- (D) is y(e) = e² · ln e = e², the value of the function, not the slope.
</details>

## Question 4 (multiple choice · core)

For 0 < x < π, at which value of x does the graph of y = eˣ sin x have a horizontal tangent line?

- (A) π/4
- (B) π/2
- (C) 3π/4
- (D) π

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** dy/dx = eˣ sin x + eˣ cos x = eˣ(sin x + cos x). Since eˣ > 0, dy/dx = 0 only when sin x + cos x = 0, that is sin x = −cos x. In 0 < x < π this is x = 3π/4.

- (A) solves sin x − cos x = 0. That comes from the sign error d/dx sin x = −cos x, which turns the derivative into eˣ(sin x − cos x).
- (B) is where sin x alone has a horizontal tangent. The factor eˣ also changes, so its derivative contributes a term.
- (D) is where y = 0 (and it is outside the open interval). A zero of y is not a zero of the slope.
</details>

## Question 5 (constructed response · core)

Let m(x) = (2x + 1)eˣ.

(a) Show that m′(x) = (2x + 3)eˣ.
(b) Find the exact coordinates of the point where the graph of m has a horizontal tangent line.
(c) Find the equation of the tangent line to the graph of m at x = 0.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Factors: 2x + 1 (derivative 2) and eˣ (derivative eˣ). m′(x) = 2 · eˣ + (2x + 1) · eˣ = eˣ(2 + 2x + 1) = **(2x + 3)eˣ**.

**(b)** eˣ is never 0, so m′(x) = 0 only when 2x + 3 = 0, which gives **x = −3/2**. Then m(−3/2) = (2(−3/2) + 1)e^(−3/2) = (−3 + 1)e^(−3/2) = **−2e^(−3/2)**, about −0.446. The point is **(−3/2, −2e^(−3/2))**.

**(c)** m(0) = (0 + 1)e⁰ = 1. m′(0) = (0 + 3)e⁰ = 3. Tangent line: **y = 1 + 3x**.

| Point | What earns it |
|---|---|
| 1 | Correct use of the product rule, with both terms shown, and factoring to (2x + 3)eˣ |
| 1 | Sets m′(x) = 0, reasons that eˣ ≠ 0, and finds x = −3/2 |
| 1 | Correct y-coordinate −2e^(−3/2) (a decimal alone does not earn the point; exact form is required) |
| 1 | Tangent line y = 1 + 3x (any equivalent form) |
</details>

## Question 6 (constructed response · core)

The table gives values of f, g and their derivatives at x = 2.

| x | f(x) | f′(x) | g(x) | g′(x) |
|---|---|---|---|---|
| 2 | −1 | 3 | 5 | −4 |

(a) Let P(x) = f(x) · g(x). Find P′(2).
(b) Let R(x) = 3x · f(x). Find R′(2).
(c) Let S(x) = [f(x)]². Find S′(2) by writing S as a product.
(d) A student claims P′(2) = f′(2) · g′(2). Use your answer to (a) to show the claim is false.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** P′(2) = f′(2)g(2) + f(2)g′(2) = (3)(5) + (−1)(−4) = 15 + 4 = **19**.

**(b)** The factors are 3x (derivative 3) and f(x). R′(x) = 3 · f(x) + 3x · f′(x). So R′(2) = 3(−1) + 3(2)(3) = −3 + 18 = **15**.

**(c)** S(x) = f(x) · f(x). By the product rule, S′(x) = f′(x)f(x) + f(x)f′(x) = 2f(x)f′(x). So S′(2) = 2(−1)(3) = **−6**.

**(d)** f′(2) · g′(2) = (3)(−4) = −12, but P′(2) = 19. The two values are different, so (f · g)′ ≠ f′ · g′ in general. One counterexample is enough to show a general claim is false.

| Point | What earns it |
|---|---|
| 1 | P′(2) = 19 with the product rule written out |
| 1 | R′(2) = 15, treating 3x as a factor with derivative 3 |
| 1 | S′(2) = −6 via S = f · f |
| 1 | Computes f′(2)g′(2) = −12 and compares it with 19 to reject the claim |
</details>

## Question 7 (constructed response · stretch)

(a) Use the product rule twice to show that for differentiable u, v and w,
(u · v · w)′ = u′ · v · w + u · v′ · w + u · v · w′.
(b) Let y = x eˣ cos x. Find dy/dx.
(c) Find the equation of the tangent line to y = x eˣ cos x at x = 0.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Group the product as (u · v) · w. Apply the product rule with first factor u · v and second factor w:

(u · v · w)′ = (u · v)′ · w + (u · v) · w′.

Apply the product rule again to (u · v)′ = u′ · v + u · v′:

(u · v · w)′ = (u′ · v + u · v′) · w + u · v · w′ = **u′vw + uv′w + uvw′**.

**(b)** u = x, v = eˣ, w = cos x, with u′ = 1, v′ = eˣ, w′ = −sin x.

**dy/dx = eˣ cos x + x eˣ cos x − x eˣ sin x**

**(c)** At x = 0: y = 0 · 1 · 1 = 0. dy/dx = (1)(1) + 0 − 0 = 1. The tangent line is **y = x**.

| Point | What earns it |
|---|---|
| 1 | Groups two factors and applies the product rule once, correctly |
| 1 | Applies it a second time and reaches the three-term formula |
| 1 | Correct dy/dx in (b), including the minus sign from d/dx cos x |
| 1 | Point (0, 0), slope 1 and the line y = x |

Acceptable alternative for (a): group as u · (v · w) instead. The result is the same.
</details>

## How did you do?

- **Q1 or Q3 wrong:** revisit "The rule" and "Why the derivative of a product is not f′ · g′" in the [study guide](/advanced-course-resources/calculus-ab/2-8-product-rule-study-guide/).
- **Q2 or Q6 wrong:** redo Worked example 2 (tables). Keep the value f(a)g(a) separate from the slope.
- **Q4 or Q5 wrong:** redo Worked examples 1 and 3. Factor out eˣ and use the fact that it is never 0.
- **Q7 wrong:** reread "Three factors" under "When to use it, and when not to".

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/2-8-product-rule-checklist/).
