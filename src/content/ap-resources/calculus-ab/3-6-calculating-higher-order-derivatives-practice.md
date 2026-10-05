---
resourceId: "mb-ap-calcab-3.6-practice"
title: "Calculating Higher-Order Derivatives: Practice Questions (Calculus AB 3.6)"
description: "Seven original Marlbridge practice questions on second and higher derivatives: notation, patterns, existence and implicit second derivatives, with full solutions."
course: "calculus-ab"
unit: 3
topics: ["3.6"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "All derivative rules from Units 2 and 3, including implicit differentiation"
prerequisiteResources: ["mb-ap-calcab-3.6-study-guide"]
learningObjectives:
  - "Calculate second and higher derivatives accurately"
  - "Use patterns to find an nth derivative"
  - "Find and evaluate d²y/dx² for an implicitly defined curve"
  - "Decide whether a second derivative exists at a point and justify the answer"
skills: ["1", "3", "4"]
studyMinutes: 50
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Give exact answers. Angles are in radians."
related: ["mb-ap-calcab-3.6-study-guide", "mb-ap-calcab-3.6-revision-notes", "mb-ap-calcab-3.6-checklist"]
next: "mb-ap-calcab-3.6-checklist"
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
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, angles in radians, and exact answers unless stated. Notation: f″(x), y″ and d²y/dx² are second derivatives; f⁽ⁿ⁾(x) and dⁿy/dxⁿ are nth derivatives. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

Let f(x) = 4x⁵ − 3x² + 7x. What is f″(1)?

- (A) 21
- (B) 74
- (C) 80
- (D) 86

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** f′(x) = 20x⁴ − 6x + 7. f″(x) = 80x³ − 6. So f″(1) = 80 − 6 = 74.

- (A) is f′(1) = 20 − 6 + 7. It stops after one derivative.
- (C) loses the −6, as if −6x had derivative 0 instead of −6.
- (D) gets the sign of the −6 wrong.
</details>

## Question 2 (multiple choice · core)

If y = cos(2x), what is d⁴y/dx⁴?

- (A) cos(2x)
- (B) 8 cos(2x)
- (C) 16 cos(2x)
- (D) −16 cos(2x)

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Step by step: y′ = −2 sin(2x), y″ = −4 cos(2x), y‴ = 8 sin(2x), y⁽⁴⁾ = 16 cos(2x). Four steps bring the cosine cycle back to cos, and each step multiplies by 2, so the factor is 2⁴ = 16.

- (A) follows the cycle correctly but drops the chain factor 2 at every step.
- (B) multiplies 2 by 4 instead of raising 2 to the power 4.
- (D) has a sign slip: after four steps the cycle returns to +cos, not −cos.
</details>

## Question 3 (multiple choice · core)

The derivative of a function f is f′(x) = √(x² + 7). What is f″(3)?

- (A) 1/8
- (B) 3/4
- (C) 3/2
- (D) 4

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** f″ is the derivative of f′. Chain rule: f″(x) = (1/2)(x² + 7)^(−1/2) × 2x = x/√(x² + 7). At x = 3: 3/√16 = 3/4.

- (A) forgets the inner derivative 2x: 1/(2√16) = 1/8.
- (C) forgets the 1/2 from the power rule: 2x/√(x² + 7) = 6/4.
- (D) is f′(3) = √16. It evaluates the given derivative instead of differentiating it.
</details>

## Question 4 (multiple choice · core)

Let f(x) = e^(−3x). What is f⁽⁵⁾(0)?

- (A) 243
- (B) −15
- (C) −243
- (D) 1

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Each derivative multiplies by −3, so f⁽⁵⁾(x) = (−3)⁵ e^(−3x) = −243 e^(−3x). At x = 0, e⁰ = 1, so f⁽⁵⁾(0) = −243.

- (A) loses the sign. An odd power of a negative number is negative.
- (B) multiplies −3 by 5 instead of raising it to the power 5.
- (D) is f(0). It reads f⁽⁵⁾ as the function itself, or forgets the chain factors.
</details>

## Question 5 (constructed response · core)

A curve is defined by xy + y² = 10.

(a) Show that (3, 2) lies on the curve, and find dy/dx at that point.
(b) Differentiate your differentiated equation from (a) once more with respect to x, to obtain an equation involving y″. Then find d²y/dx² at (3, 2).
(c) Explain why you cannot treat x + 2y as a constant when differentiating the second time.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** 3 × 2 + 2² = 6 + 4 = 10, so the point is on the curve. Differentiate implicitly. The term xy needs the product rule, and y² the chain rule:

y + x y′ + 2y y′ = 0, so **y′ = −y/(x + 2y)**.

At (3, 2): y′ = −2/(3 + 4) = **−2/7**.

**(b)** Differentiate y + x y′ + 2y y′ = 0 again, term by term:

- d/dx [y] = y′
- d/dx [x y′] = y′ + x y″ (product rule)
- d/dx [2y y′] = 2(y′)² + 2y y″ (product rule)

So 2y′ + 2(y′)² + (x + 2y) y″ = 0, which gives

**y″ = −2y′(1 + y′)/(x + 2y)**.

At (3, 2), with y′ = −2/7: 1 + y′ = 5/7, so −2y′(1 + y′) = −2 × (−2/7) × (5/7) = 20/49. Divide by x + 2y = 7:

**d²y/dx² = 20/343**.

**(c)** y is a function of x, so x + 2y changes as x changes. Its derivative is 1 + 2y′, not 0. Ignoring this loses terms and gives a wrong y″.

| Point | What earns it |
|---|---|
| 1 | Verifies the point and finds y′ = −2/7 with correct implicit differentiation |
| 1 | Second differentiation uses the product rule on both x y′ and 2y y′ |
| 1 | Correct expression for y″ (any equivalent form) |
| 1 | d²y/dx² = 20/343 at (3, 2) |
| 1 | Explains in (c) that y depends on x, so its derivative is y′, not 0 |

Acceptable alternative for (b): apply the quotient rule to y′ = −y/(x + 2y), then substitute y′. This gives the same value, 20/343.
</details>

## Question 6 (constructed response · core)

Let f(x) = x|x|.

(a) Write f(x) without absolute value signs, using one formula for x ≥ 0 and one for x < 0.
(b) Find f′(x) for x > 0 and for x < 0. Use the definition of the derivative to show that f′(0) = 0. Hence show that f′(x) = 2|x| for all x.
(c) Find f″(x) for x ≠ 0.
(d) Does f″(0) exist? Justify your answer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** f(x) = x² for x ≥ 0, and f(x) = −x² for x < 0.

**(b)** For x > 0, f′(x) = 2x. For x < 0, f′(x) = −2x. At 0, use the definition:

f′(0) = lim (h → 0) [f(h) − f(0)]/h = lim (h → 0) h|h|/h = lim (h → 0) |h| = 0.

So f′(x) = 2x when x > 0, −2x when x < 0, and 0 at x = 0. This is exactly **f′(x) = 2|x|**.

**(c)** f″(x) = 2 for x > 0 and f″(x) = −2 for x < 0.

**(d)** **No.** Use the definition on f′:

[f′(h) − f′(0)]/h = 2|h|/h, which equals 2 for h > 0 and −2 for h < 0.

The one-sided limits are 2 and −2. They are different, so the limit does not exist and f″(0) does not exist. Graphically, f′ = 2|x| has a corner at x = 0. So f is differentiable everywhere, but f′ is not differentiable at 0.

| Point | What earns it |
|---|---|
| 1 | Correct piecewise form of f |
| 1 | Correct f′ on each side **and** f′(0) = 0 from the definition |
| 1 | f″(x) = 2 for x > 0 and −2 for x < 0 |
| 1 | Concludes f″(0) does not exist, with unequal one-sided limits (2 and −2) or the corner in f′ as the reason |

Acceptable alternative for (d): an argument that f′(x) = 2|x| has a corner at 0, provided it names the different slopes on each side.
</details>

## Question 7 (constructed response · stretch)

Let g(x) = x e^(2x).

(a) Find g′(x), g″(x) and g‴(x). Write each in the form (ax + b)e^(2x).
(b) Use your answers to suggest a formula for g⁽ⁿ⁾(x).
(c) Show that differentiating your formula for g⁽ⁿ⁾(x) gives your formula for g⁽ⁿ⁺¹⁾(x).
(d) Find g⁽¹⁰⁾(0).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Product rule, with the chain rule on e^(2x):

- g′(x) = e^(2x) + 2x e^(2x) = **(2x + 1)e^(2x)**
- g″(x) = 2e^(2x) + 2(2x + 1)e^(2x) = **(4x + 4)e^(2x)**
- g‴(x) = 4e^(2x) + 2(4x + 4)e^(2x) = **(8x + 12)e^(2x)**

**(b)** The x-coefficients are 2, 4, 8, which is 2ⁿ. The constants are 1, 4, 12, which is n × 2ⁿ⁻¹. So

**g⁽ⁿ⁾(x) = (2ⁿx + n·2ⁿ⁻¹)e^(2x) = 2ⁿ⁻¹(2x + n)e^(2x)**.

**(c)** Differentiate 2ⁿ⁻¹(2x + n)e^(2x) with the product rule:

2ⁿ⁻¹[2e^(2x) + 2(2x + n)e^(2x)] = 2ⁿ[1 + 2x + n]e^(2x) = 2ⁿ(2x + (n + 1))e^(2x).

This is the formula with n replaced by n + 1, as required.

**(d)** g⁽¹⁰⁾(0) = 2⁹ × (0 + 10) × e⁰ = 512 × 10 = **5120**.

| Point | What earns it |
|---|---|
| 1 | Correct g′ and g″ in the requested form |
| 1 | Correct g‴ = (8x + 12)e^(2x) |
| 1 | A correct general formula, consistent with n = 1, 2, 3 |
| 1 | Correct differentiation of the formula in (c), showing it matches n + 1 |
| 1 | g⁽¹⁰⁾(0) = 5120 |

Note: part (c) shows that the pattern carries on from each step to the next. A full proof by induction is not required in this course.
</details>

## How did you do?

- **Q1 or Q3 wrong:** revisit "The idea: differentiate the derivative" in the [study guide](/advanced-course-resources/calculus-ab/3-6-calculating-higher-order-derivatives-study-guide/).
- **Q2 or Q4 wrong:** reread "Patterns in higher derivatives" and Figure 1. Track the chain factor at every step.
- **Q5 wrong:** redo Worked example 2, including the alternative method.
- **Q6 wrong:** see the x^(4/3) example under "The idea", then compare it with the corner in Q6.
- **Q7 wrong:** practise the product rule with e^(kx), then write out three derivatives before guessing a pattern.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/3-6-calculating-higher-order-derivatives-checklist/).
