---
resourceId: "mb-ap-calcab-2.5-revision-notes"
title: "Applying the Power Rule: Revision Notes (Calculus AB 2.5)"
description: "One-page recap of the power rule: where it comes from, how to rewrite roots and reciprocals as powers, and the exponent slips that cost marks."
course: "calculus-ab"
unit: 2
topics: ["2.5"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-2.5-study-guide"]
learningObjectives:
  - "Recall the power rule and the condition for using it"
  - "Rewrite roots and reciprocals as powers quickly and accurately"
  - "Spot the common exponent errors before making them"
skills: ["1"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-2.5-study-guide", "mb-ap-calcab-2.5-practice", "mb-ap-calcab-2.5-checklist"]
next: "mb-ap-calcab-2.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "d/dx[xʳ] = r·xʳ⁻¹ for any constant real r, where both sides are defined."
  - "Rewrite as a single power of x first, then differentiate."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the derivation from the limit definition, the graph and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/2-5-applying-power-rule-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: f′(x), dy/dx and d/dx[…] all mean "the derivative with respect to x". Fractional exponents are written in brackets, e.g. x^(2/3).

## Recap

- The derivative is defined as f′(x) = lim (h → 0) [f(x + h) − f(x)]/h. For x², x³, 1/x and √x this limit gives 2x, 3x², −1/x² and 1/(2√x).
- Those results share one pattern: the **power rule**.
- The rule works for **any constant exponent**: whole, negative, fractional or irrational.
- It applies only to a **single power of x**. Rewrite roots, reciprocals and simple products or quotients of powers first.
- Where xʳ⁻¹ is undefined (often x = 0), the derivative does not exist. Expect a vertical tangent, a cusp or a domain boundary.

## Key relationships

| Function | Rewrite | Derivative |
|---|---|---|
| xⁿ (n a positive integer) | — | n·xⁿ⁻¹ |
| x | x¹ | 1 |
| 1/xⁿ | x⁻ⁿ | −n·x⁻ⁿ⁻¹ = −n/xⁿ⁺¹ |
| √x | x^(1/2) | 1/(2√x), x > 0 |
| nth root of xᵐ | x^(m/n) | (m/n)·x^(m/n − 1) |
| xᵃ·xᵇ or xᵃ/xᵇ | xᵃ⁺ᵇ or xᵃ⁻ᵇ | combine first, then use the rule |

## Assumptions behind the rule

- The exponent r is a **constant**. If the variable is in the exponent (as in 2ˣ), this is not a power function.
- The base is x itself. Expressions like (2x + 1)³ need expanding now, or the chain rule later (Unit 3).
- The result holds only where x is in the domain of both xʳ and xʳ⁻¹.

## Mistakes to avoid

1. **−3 − 1 = −2.** Wrong: it is −4. Lowering a negative exponent makes it more negative.
2. **d/dx[1/x³] = 1/(3x²).** Rewrite as x⁻³: the answer is −3/x⁴.
3. **Keeping the old exponent**, e.g. (1/2)x^(1/2) for the derivative of √x.
4. **Differentiating factors separately**, e.g. treating x²√x as 2x times 1/(2√x).
5. **Using the rule on 2ˣ or on a constant like π².**
6. **Missing an undefined derivative** at x = 0 for exponents such as 1/3 or 2/3.

## Quick self-check

1. Find d/dx[x⁻³]. *(−3x⁻⁴ = −3/x⁴)*
2. Let f(x) = x^(5/3). Find f′(8). *(f′(x) = (5/3)x^(2/3), so f′(8) = (5/3)(4) = 20/3)*
3. Find the derivative of √x / x and evaluate it at x = 4. *(√x/x = x^(−1/2); derivative −(1/2)x^(−3/2); at 4 this is −(1/2)(1/8) = −1/16)*
4. Is x^(1/3) differentiable at 0? *(No. f′(x) = 1/(3x^(2/3)) has a zero denominator there: vertical tangent.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/2-5-applying-power-rule-practice/).
