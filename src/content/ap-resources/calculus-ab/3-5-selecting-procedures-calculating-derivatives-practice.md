---
resourceId: "mb-ap-calcab-3.5-practice"
title: "Selecting Procedures for Calculating Derivatives: Practice Questions (Calculus AB 3.5)"
description: "Seven original Marlbridge practice questions on choosing derivative rules: rewriting, product, quotient, chain, implicit, inverse and table values, with full solutions."
course: "calculus-ab"
unit: 3
topics: ["3.5"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "All derivative rules from Units 2 and 3 up to Topic 3.4"
prerequisiteResources: ["mb-ap-calcab-3.5-study-guide"]
learningObjectives:
  - "Choose an efficient derivative procedure from the form of an expression"
  - "Apply combinations of rules accurately, including with values from a table"
  - "Use implicit differentiation and the inverse-function rule when the question calls for them"
  - "Explain why one procedure is better than another"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Give exact answers. Angles are in radians."
related: ["mb-ap-calcab-3.5-study-guide", "mb-ap-calcab-3.5-revision-notes", "mb-ap-calcab-3.5-checklist"]
next: "mb-ap-calcab-3.5-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, angles in radians, and exact answers unless stated. Notation: f′(x) and dy/dx are derivatives, and d/dx [ … ] means "the derivative of". This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

Let f(x) = (x² + 3)/√x for x > 0. What is f′(4)?

- (A) 3
- (B) 45/16
- (C) 51/16
- (D) 32

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The bottom is a single term, so rewrite: f(x) = x^(3/2) + 3x^(−1/2). Power rule: f′(x) = (3/2)x^(1/2) − (3/2)x^(−3/2). At x = 4: (3/2)(2) − (3/2)(1/8) = 3 − 3/16 = 45/16.

- (A) differentiates x^(3/2) but treats 3x^(−1/2) as a constant, so the second term is lost.
- (C) drops the minus sign from the power rule on x^(−1/2), giving 3 + 3/16.
- (D) divides the derivative of the top by the derivative of the bottom: 2x ÷ (1/(2√x)) = 4x^(3/2) = 32. The derivative of a quotient is not the quotient of the derivatives.
</details>

## Question 2 (multiple choice · core)

What is d/dx [sin²(3x)]?

- (A) 2 sin(3x) cos(3x)
- (B) −6 sin(3x) cos(3x)
- (C) 6 sin(3x) cos(3x)
- (D) 6 cos(3x)

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** sin²(3x) means [sin(3x)]². The last operation is squaring, so the chain rule is needed twice. Outer: 2[sin(3x)]. Middle: derivative of sin(3x) is cos(3x) times 3. So the derivative is 2 sin(3x) × 3 cos(3x) = 6 sin(3x) cos(3x). (This also equals 3 sin(6x).)

- (A) forgets the innermost derivative, the 3 from 3x.
- (B) uses −cos as the derivative of sin, which flips the sign.
- (D) brings down the 2 and differentiates sin(3x), but drops the factor sin(3x) that the power rule keeps: the outer derivative of u² is 2u, not 2.
</details>

## Question 3 (multiple choice · core)

The functions f and g are differentiable. Some values are shown.

| x | f(x) | f′(x) | g(x) | g′(x) |
|---|---|---|---|---|
| 1 | 5 | 2 | 0 | −2 |
| 2 | −1 | 3 | 4 | 1 |

Let h(x) = f(x) · g(x²). What is h′(1)?

- (A) −4
- (B) −8
- (C) −10
- (D) −20

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The last operation is a product, so start with the product rule. The second factor, g(x²), needs the chain rule: d/dx [g(x²)] = g′(x²) · 2x.

h′(x) = f′(x) g(x²) + f(x) g′(x²) · 2x.

At x = 1, x² = 1: h′(1) = f′(1) g(1) + f(1) g′(1) × 2 = 2 × 0 + 5 × (−2) × 2 = −20.

- (A) multiplies the derivatives: f′(1) g′(1) = −4. That is not the product rule.
- (B) multiplies the derivatives and the chain factor: 2 × (−2) × 2 = −8. Still not the product rule.
- (C) uses the product rule but forgets the chain factor 2x from x².
</details>

## Question 4 (multiple choice · core)

Let f(x) = x³ + 2x + 1, and let g be the inverse function of f. What is g′(4)?

- (A) 1/50
- (B) 1/5
- (C) 5
- (D) 50

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** This is an inverse at a point, so use g′(b) = 1/f′(a) where f(a) = b. Solve f(a) = 4: a = 1 works, since 1 + 2 + 1 = 4. Then f′(x) = 3x² + 2, so f′(1) = 5 and g′(4) = 1/5.

- (A) uses 1/f′(4) = 1/50. The 4 is an output of f, so f′ must be evaluated at the input a = 1.
- (C) gives f′(1) and forgets the reciprocal.
- (D) gives f′(4), which makes both errors.
</details>

## Question 5 (constructed response · core)

A curve is given by x² + 3xy + y² = 11.

(a) Show that the point (1, 2) lies on the curve.
(b) Find dy/dx in terms of x and y.
(c) Find the equation of the tangent line to the curve at (1, 2).
(d) A student says: "I will solve for y first and then differentiate." Explain why implicit differentiation is the better procedure here.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** 1² + 3(1)(2) + 2² = 1 + 6 + 4 = 11. So (1, 2) is on the curve.

**(b)** Differentiate every term with respect to x. The term 3xy is a product, and y² needs the chain rule:

2x + 3(y + x · dy/dx) + 2y · dy/dx = 0

Collect the dy/dx terms: (3x + 2y) dy/dx = −(2x + 3y). So

**dy/dx = −(2x + 3y)/(3x + 2y)**, where 3x + 2y ≠ 0.

**(c)** At (1, 2): dy/dx = −(2 + 6)/(3 + 4) = **−8/7**. Tangent line: **y − 2 = −(8/7)(x − 1)**, which is y = −(8/7)x + 22/7.

**(d)** The equation is quadratic in y. Solving gives y = [−3x ± √(5x² + 44)]/2, which has two branches and a square root. Differentiating that needs the chain rule on the root, and you must pick the correct branch (the + branch gives y = 2 at x = 1). Implicit differentiation avoids both steps and gives one formula for every point. (The explicit route does give the same slope, −8/7, at (1, 2).)

| Point | What earns it |
|---|---|
| 1 | Substitutes (1, 2) and shows the left side equals 11 |
| 1 | Differentiates implicitly, with the product rule on 3xy **and** the chain rule on y² |
| 1 | Solves for dy/dx correctly |
| 1 | Slope −8/7 and a correct tangent line equation at (1, 2) |
| 1 | Gives a valid reason in (d): y is hard to isolate (quadratic in y, two branches, a root) |

Acceptable alternative for (c): substitute x = 1, y = 2 into the differentiated equation before solving: 2 + 3(2 + dy/dx) + 4 dy/dx = 0, so 7 dy/dx = −8.
</details>

## Question 6 (constructed response · core)

For each function, name the first rule you would use (or say what you would rewrite first), then find the derivative.

(a) y = arcsin(x/2), for −2 < x < 2
(b) y = ln(√(x² + 1))
(c) y = x e^(−x²)
(d) y = 5/x³, for x ≠ 0

(e) Which two of these are easiest after a rewrite? Explain briefly.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Inverse trig with an inside function: arcsin formula plus the chain rule. dy/dx = 1/√(1 − x²/4) × (1/2). Simplify: √(1 − x²/4) = √(4 − x²)/2, so **dy/dx = 1/√(4 − x²)**.

**(b)** Rewrite with log properties: y = (1/2) ln(x² + 1). Chain rule: dy/dx = (1/2) × 2x/(x² + 1) = **x/(x² + 1)**.

**(c)** The last operation is a product. Product rule, with the chain rule on e^(−x²): dy/dx = 1 · e^(−x²) + x · e^(−x²) · (−2x) = **e^(−x²)(1 − 2x²)**.

**(d)** Rewrite as a power: y = 5x⁻³. Power rule: dy/dx = −15x⁻⁴ = **−15/x⁴**.

**(e)** (b) and (d). In (b) the log rule turns the square root into a factor of 1/2. In (d) the single-term bottom becomes a negative power, so no quotient rule is needed.

| Point | What earns it |
|---|---|
| 1 | (a) Inverse trig derivative with the chain factor 1/2; any correct equivalent form |
| 1 | (b) Correct derivative x/(x² + 1), by rewriting or by a correct double chain rule |
| 1 | (c) Product rule with the chain rule on e^(−x²); any correct equivalent form |
| 1 | (d) −15/x⁴ (or −15x⁻⁴) |
| 1 | (e) Names (b) and (d) with a reason for each |

Acceptable alternative for (b): chain rule twice without rewriting: [1/√(x² + 1)] × [x/√(x² + 1)] = x/(x² + 1). For (d), the quotient rule also earns the point if it is applied correctly.
</details>

## Question 7 (constructed response · stretch)

Let f(x) = ln[(x² + 4)³ / √(2x + 1)] for x > −1/2.

(a) Use properties of logarithms to write f(x) as a sum or difference of simpler logarithms.
(b) Find f′(x).
(c) Find f′(0) and f′(2).
(d) Explain why rewriting first is a better procedure than differentiating the original form directly.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** ln(a/b) = ln a − ln b and ln(aⁿ) = n ln a. Since x² + 4 > 0 and 2x + 1 > 0 for x > −1/2, every log is defined:

**f(x) = 3 ln(x² + 4) − (1/2) ln(2x + 1)**.

**(b)** Chain rule on each term: f′(x) = 3 × 2x/(x² + 4) − (1/2) × 2/(2x + 1), so

**f′(x) = 6x/(x² + 4) − 1/(2x + 1)**.

**(c)** f′(0) = 0 − 1/1 = **−1**. f′(2) = 12/8 − 1/5 = 3/2 − 1/5 = **13/10**.

**(d)** The original form is ln of a quotient whose top is a cube and whose bottom is a root. Differentiating it directly needs the chain rule, then the quotient rule, then the chain rule again on both the cube and the root, followed by heavy simplifying. After rewriting, each term needs one short chain rule step. Fewer steps means fewer chances for a slip, and both methods give the same f′(x).

| Point | What earns it |
|---|---|
| 1 | Correct log rewrite, including the 3 and the 1/2 |
| 1 | Correct f′(x), with the inner derivatives 2x and 2 |
| 1 | f′(0) = −1 and f′(2) = 13/10 |
| 1 | Valid reason in (d), naming the rules the direct method would need |

Acceptable alternative for (b): direct differentiation, if simplified to an equivalent form. A decimal 1.3 for f′(2) is acceptable.
</details>

## How did you do?

- **Q1 or Q6(d) wrong:** revisit "Step 1: rewrite before you differentiate" in the [study guide](/advanced-course-resources/calculus-ab/3-5-selecting-procedures-calculating-derivatives-study-guide/).
- **Q2 or Q6(c) wrong:** reread "Step 2: find the last operation" and Figure 1. Count the layers before you differentiate.
- **Q3 wrong:** redo Worked example 2(a) and write the rule with letters before substituting.
- **Q4 wrong:** see "An inverse function at a point" and Worked example 2(c).
- **Q5 wrong:** see "An equation that mixes x and y" in Step 3.
- **Q7 wrong:** practise the log properties in Step 1, then redo Worked example 1.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/3-5-selecting-procedures-calculating-derivatives-checklist/).
