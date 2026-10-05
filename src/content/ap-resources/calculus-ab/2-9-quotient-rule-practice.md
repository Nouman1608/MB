---
resourceId: "mb-ap-calcab-2.9-practice"
title: "The Quotient Rule: Practice Questions (Calculus AB 2.9)"
description: "Seven original Marlbridge practice questions on the quotient rule, from formulas, tables and a rate-of-change context, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 2
topics: ["2.9"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "The power rule and derivatives of eˣ and ln x"
  - "The product rule"
prerequisiteResources: ["mb-ap-calcab-2.9-study-guide"]
learningObjectives:
  - "Differentiate quotients with the quotient rule, in the correct order"
  - "Choose between the quotient rule and rewriting first"
  - "Use the quotient rule with table values and to write a tangent line"
  - "Interpret the derivative of a quotient in context, with units"
skills: ["1", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Give exact answers (fractions, not decimals) unless a question asks otherwise."
related: ["mb-ap-calcab-2.9-study-guide", "mb-ap-calcab-2.9-revision-notes", "mb-ap-calcab-2.9-checklist"]
next: "mb-ap-calcab-2.9-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, angles in radians, ln x is the natural logarithm, and exact answers unless stated. Notation: fractions are written on one line, so [A]/[B]² means all of A divided by the square of B. The context in Question 6 is invented. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

If y = (x − 1)/(x + 3), what is dy/dx?

- (A) −4/(x + 3)²
- (B) 4/(x + 3)²
- (C) 1
- (D) 4/(x + 3)

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Top: x − 1, derivative 1. Bottom: x + 3, derivative 1. Quotient rule, bottom first:

dy/dx = [(x + 3)(1) − (x − 1)(1)] / (x + 3)² = (x + 3 − x + 1)/(x + 3)² = 4/(x + 3)².

- (A) swaps the order in the numerator: (x − 1)(1) − (x + 3)(1) = −4. Swapping always flips the sign.
- (C) divides the derivatives: 1/1 = 1. The derivative of a quotient is not the quotient of the derivatives.
- (D) forgets to square the bottom.
</details>

## Question 2 (multiple choice · core)

Functions f and g are differentiable, with f(2) = 6, f′(2) = −1, g(2) = 3 and g′(2) = 2. Let h(x) = f(x)/g(x). What is h′(2)?

- (A) −5
- (B) −1/2
- (C) 5/3
- (D) −5/3

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** g(2) = 3 is not 0, so the rule applies.

h′(2) = [g(2)f′(2) − f(2)g′(2)] / [g(2)]² = [(3)(−1) − (6)(2)] / 3² = (−3 − 12)/9 = −15/9 = −5/3.

- (A) forgets to square the bottom: −15/3 = −5.
- (B) divides the derivatives: f′(2)/g′(2) = −1/2.
- (C) swaps the order in the numerator: (12 + 3)/9 = 5/3.
</details>

## Question 3 (multiple choice · core)

Let f(x) = (ln x)/x for x > 0. At which value of x does the graph of f have a horizontal tangent line?

- (A) x = 0
- (B) x = 1
- (C) x = e
- (D) There is no such value.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Top: ln x, derivative 1/x. Bottom: x, derivative 1.

f′(x) = [x · (1/x) − (ln x)(1)] / x² = (1 − ln x)/x².

A horizontal tangent needs f′(x) = 0. The bottom x² is positive for x > 0, so set the top to 0: 1 − ln x = 0, so ln x = 1 and x = e.

- (A) sets the denominator x² equal to 0. A fraction is 0 when its top is 0, not its bottom. Also, x = 0 is outside the domain.
- (B) solves f(x) = 0 instead of f′(x) = 0. At x = 1 the graph crosses the x-axis with slope f′(1) = 1.
- (D) may come from expecting no solution because ln x and x both increase. Their quotient can still level off.
</details>

## Question 4 (multiple choice · core)

What is the derivative of y = 6/x⁴?

- (A) −24/x⁵
- (B) 24/x⁵
- (C) −24/x³
- (D) 0

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Rewrite first: y = 6x⁻⁴. Power rule: dy/dx = 6 × (−4)x⁻⁵ = −24x⁻⁵ = −24/x⁵. The quotient rule also works: [x⁴(0) − 6(4x³)]/x⁸ = −24x³/x⁸ = −24/x⁵.

- (B) swaps the order in the quotient rule, which flips the sign.
- (C) lowers the power in the wrong direction: the exponent −4 becomes −5, not −3.
- (D) divides the derivatives: the top's derivative is 0, so f′/g′ = 0. That is not the derivative of the quotient.
</details>

## Question 5 (constructed response · core)

Let R(x) = eˣ/(x² + 1).

(a) Show that R′(x) = eˣ(x − 1)²/(x² + 1)².
(b) Explain why R′(x) ≥ 0 for every x. For which x is R′(x) = 0?
(c) Find the equation of the line tangent to the graph of R at x = 0.

<details>
<summary>Worked solution</summary>

**(a)** Top: eˣ, derivative eˣ. Bottom: x² + 1, derivative 2x.

R′(x) = [(x² + 1)eˣ − eˣ(2x)] / (x² + 1)² = eˣ(x² − 2x + 1)/(x² + 1)² = **eˣ(x − 1)²/(x² + 1)²**.

**(b)** eˣ > 0 for every x. (x − 1)² ≥ 0 for every x. (x² + 1)² > 0 for every x. So R′(x) is a positive number times a non-negative number divided by a positive number, which is ≥ 0. R′(x) = 0 only when (x − 1)² = 0, that is at **x = 1**.

**(c)** R(0) = e⁰/1 = 1. R′(0) = e⁰(0 − 1)²/1² = 1. Tangent line: **y = 1 + x**.

Suggested mark points (4): 1 for a correct quotient-rule set-up in the right order; 1 for factoring out eˣ to reach (x − 1)²; 1 for a sign argument for every factor and x = 1; 1 for y = 1 + x (or y − 1 = x).
</details>

## Question 6 (constructed response · core)

In an invented laboratory experiment, a dye is added to a tank of water. The concentration of dye at a sensor is modelled by

**C(t) = 20t/(t² + 4)** milligrams per litre, for 0 ≤ t ≤ 6,

where t is time in hours.

(a) Find C′(t). Simplify the numerator.
(b) Find C′(1). Give units and interpret the value in context.
(c) Find C′(3) and interpret its sign.
(d) Find the time when C′(t) = 0, and the concentration at that time.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Top: 20t, derivative 20. Bottom: t² + 4, derivative 2t.

C′(t) = [(t² + 4)(20) − (20t)(2t)] / (t² + 4)² = (20t² + 80 − 40t²)/(t² + 4)² = **(80 − 20t²)/(t² + 4)²**, which is 20(4 − t²)/(t² + 4)².

**(b)** C′(1) = (80 − 20)/(1 + 4)² = 60/25 = **12/5 mg per litre per hour**. At t = 1 hour, the concentration is increasing at 2.4 milligrams per litre per hour.

**(c)** C′(3) = (80 − 180)/(9 + 4)² = **−100/169 mg per litre per hour**. It is negative, so at t = 3 hours the concentration is decreasing.

**(d)** The bottom is always positive, so C′(t) = 0 when 80 − 20t² = 0, so t² = 4. In 0 ≤ t ≤ 6 this gives **t = 2 hours**. Then C(2) = 40/8 = **5 mg per litre**. The concentration rises until t = 2 and falls after it.

| Point | What earns it |
|---|---|
| 1 | Correct quotient rule in the right order for C′(t) |
| 1 | Simplified numerator 80 − 20t² (or equivalent) |
| 1 | C′(1) = 12/5 with units of mg per litre per hour **and** "increasing" at t = 1 |
| 1 | C′(3) = −100/169 with "decreasing" at t = 3 |
| 1 | t = 2 from setting the numerator to 0 (rejecting t = −2 as outside the domain) and C(2) = 5 mg per litre |

A reading of "the concentration is 2.4" in (b) earns no interpretation mark: C′(1) is a rate of change, not an amount.
</details>

## Question 7 (constructed response · stretch)

(a) Let q(x) = f(x)/g(x), where f, g and q are differentiable and g(x) ≠ 0. Starting from f(x) = q(x)g(x), use the product rule to show that q′(x) = [g(x)f′(x) − f(x)g′(x)]/[g(x)]².
(b) A student claims that (f/g)′ = f′/g′. Give a specific example, with x ≠ 0, that shows the claim is false.
(c) A differentiable function g has g(1) = 2 and g′(1) = −3. Find the derivative of 1/g(x) at x = 1, and the derivative of x²/g(x) at x = 1.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Product rule on f = q · g: f′ = q′g + qg′. Rearrange: q′g = f′ − qg′, so q′ = (f′ − qg′)/g. Substitute q = f/g: q′ = (f′ − fg′/g)/g. Multiply top and bottom by g: **q′ = (gf′ − fg′)/g²**.

**(b)** Take f(x) = x² and g(x) = x. For x ≠ 0, f/g = x, whose derivative is 1. But f′/g′ = 2x/1 = 2x, which is not 1 (for example, at x = 2 it is 4). So the claim is false.

**(c)** Reciprocal: d/dx [1/g] = −g′/g². At x = 1: −(−3)/2² = **3/4**.

For x²/g(x): top x², derivative 2x; bottom g. At x = 1: [g(1)(2)(1) − (1)²g′(1)]/[g(1)]² = [(2)(2) − (1)(−3)]/4 = (4 + 3)/4 = **7/4**.

| Point | What earns it |
|---|---|
| 1 | Applies the product rule correctly to f = qg |
| 1 | Solves for q′ and substitutes q = f/g to reach the quotient rule |
| 1 | A valid counterexample with both values computed |
| 1 | 3/4 for the reciprocal |
| 1 | 7/4 for x²/g(x), with the bottom function first |

Acceptable alternative for (b): any specific pair, such as f(x) = x and g(x) = x (quotient 1, derivative 0, but f′/g′ = 1).
</details>

## How did you do?

- **Q1, Q2 or Q4 wrong:** reread "The rule" and the table of three features in the [study guide](/advanced-course-resources/calculus-ab/2-9-quotient-rule-study-guide/). Write the bottom function first every time.
- **Q2 or Q7(c) wrong:** redo Worked example 2 (tables).
- **Q3, Q5 or Q6(d) wrong:** a fraction is 0 when its numerator is 0. See the interpretation after Worked example 1 and Figure 1.
- **Q4 wrong:** see "When not to use the quotient rule".
- **Q7(a) wrong:** reread "Where the rule comes from".

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/2-9-quotient-rule-checklist/).
