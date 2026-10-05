---
resourceId: "mb-ap-calcab-2.8-revision-notes"
title: "The Product Rule: Revision Notes (Calculus AB 2.8)"
description: "One-page recap of the product rule: the formula, why f′g′ is wrong, using the rule with tables, three-factor products and the slips that cost marks."
course: "calculus-ab"
unit: 2
topics: ["2.8"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-2.8-study-guide"]
learningObjectives:
  - "Recall the product rule and when it is needed"
  - "Spot the common product rule errors before making them"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-2.8-study-guide", "mb-ap-calcab-2.8-practice", "mb-ap-calcab-2.8-checklist"]
next: "mb-ap-calcab-2.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "(f · g)′ = f′ · g + f · g′, never f′ · g′."
  - "With a table, substitute f(a), f′(a), g(a), g′(a) into the rule."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the area picture, the proof and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/2-8-product-rule-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **f′(x)** and **d/dx f(x)** both mean the derivative of f.

## Recap

- For a product of two differentiable functions: **(f · g)′ = f′ · g + f · g′**.
- In words: differentiate one factor at a time and add the two results.
- The derivative of a product is **not** the product of the derivatives.
- Why it works: a rectangle with sides f and g grows by two strips, g · Δf and f · Δg, plus a corner that becomes negligible.
- The proof subtracts and adds f(x + h)g(x), and uses the fact that differentiable functions are continuous.
- A constant factor needs no product rule: (c · g)′ = c · g′.

## Key relationships

| Situation | Derivative |
|---|---|
| f(x) · g(x) | f′(x)g(x) + f(x)g′(x) |
| c · g(x), c constant | c · g′(x) |
| u · v · w | u′vw + uv′w + uvw′ |
| Table at x = a | f′(a)g(a) + f(a)g′(a) |
| x · ln x | ln x + 1 |
| xⁿ · eˣ | n·x^(n − 1)·eˣ + xⁿ·eˣ = eˣ·x^(n − 1)(n + x) |

## Assumptions behind the rule

- Both factors must be differentiable at the point.
- Each factor's input is plain x here. Compositions such as sin(x²) need the chain rule (Topic 3.1).
- Quotients need the quotient rule (Topic 2.9).

## Mistakes to avoid

1. **Writing f′ · g′.** Check: for x² · x³ = x⁵ the derivative is 5x⁴, not 2x · 3x² = 6x³.
2. **Dropping a term** by treating one factor as a constant.
3. **Losing the minus sign** from d/dx cos x = −sin x inside the rule.
4. **Using f(a)g(a)** (the value) when the question asks for the slope.
5. **Not factoring** a common factor such as eˣ before solving y′ = 0.

## Quick self-check

1. Differentiate x³eˣ. *(3x²eˣ + x³eˣ = x²(x + 3)eˣ)*
2. Differentiate sin x cos x. *(cos x · cos x + sin x · (−sin x) = cos²x − sin²x)*
3. f(1) = 4, f′(1) = 2, g(1) = −3, g′(1) = 1. Find (f · g)′(1). *(2(−3) + 4(1) = −2)*
4. Do you need the product rule for 5 ln x? *(No: it is a constant multiple, so the derivative is 5/x.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/2-8-product-rule-practice/).
