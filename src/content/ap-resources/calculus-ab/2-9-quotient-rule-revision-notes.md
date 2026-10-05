---
resourceId: "mb-ap-calcab-2.9-revision-notes"
title: "The Quotient Rule: Revision Notes (Calculus AB 2.9)"
description: "One-page recap of the quotient rule: the formula in the right order, the reciprocal special case, when to rewrite instead, and the mistakes that cost marks."
course: "calculus-ab"
unit: 2
topics: ["2.9"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-2.9-study-guide"]
learningObjectives:
  - "Recall the quotient rule in the correct order and the condition for using it"
  - "Spot the common quotient-rule errors before making them"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-2.9-study-guide", "mb-ap-calcab-2.9-practice", "mb-ap-calcab-2.9-checklist"]
next: "mb-ap-calcab-2.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "(f/g)′ = (g f′ − f g′)/g², where g(x) ≠ 0."
  - "Bottom first, minus sign, bottom squared."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the derivation, the graph and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/2-9-quotient-rule-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: fractions are written on one line. **[A] / [B]²** means all of A divided by the square of B.

## Recap

- If q(x) = f(x)/g(x), with f and g differentiable and **g(x) ≠ 0**, then **q′(x) = [g(x)f′(x) − f(x)g′(x)] / [g(x)]²**.
- Say it as: bottom times derivative of top, minus top times derivative of bottom, over bottom squared.
- The rule comes from the product rule applied to f = q · g, then solving for q′.
- **(f/g)′ is not f′/g′.** Test: x²/x = x has derivative 1, but f′/g′ = 2x.
- The derivative does not exist where the bottom is 0.

## Key relationships

| Situation | Derivative |
|---|---|
| General quotient f/g | [g f′ − f g′] / g² |
| Reciprocal 1/g | −g′ / g² |
| Constant bottom, f(x)/c | f′(x)/c |
| Constant top over a power, c/xⁿ | rewrite as c x⁻ⁿ: −n c x⁻ⁿ⁻¹ |
| Values from a table at x = a | [g(a)f′(a) − f(a)g′(a)] / [g(a)]² |
| Tangent line at x = a | y = q(a) + q′(a)(x − a) |

## Assumptions behind the rule

- f and g are both differentiable at the point.
- g is not 0 at the point. If g(a) = 0, the quotient is undefined at a.
- The rule is one valid method. If the fraction simplifies, or one part is a constant, rewriting first gives the same answer with less algebra.

## Mistakes to avoid

1. **Wrong order** in the numerator. This flips the sign of the whole answer.
2. **Differentiating the denominator** instead of squaring it.
3. **Dropping brackets**, so the minus sign only hits the first term of f g′.
4. **Expanding (g(x))²**. Leave it factored.
5. **Using f′/g′.**
6. **Cancelling terms** in the original fraction (only whole factors cancel).

## Quick self-check

1. Differentiate x/(x + 1). *(1/(x + 1)²: the top of the rule is (x + 1)(1) − x(1) = 1)*
2. Differentiate 3/x² without the quotient rule. *(Rewrite as 3x⁻², so −6x⁻³ = −6/x³)*
3. f(1) = 2, f′(1) = 3, g(1) = 1, g′(1) = 4. Find (f/g)′(1). *((1)(3) − (2)(4))/1² = −5)*

Next: [practice questions](/advanced-course-resources/calculus-ab/2-9-quotient-rule-practice/).
