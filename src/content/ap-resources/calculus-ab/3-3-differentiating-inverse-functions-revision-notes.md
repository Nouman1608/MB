---
resourceId: "mb-ap-calcab-3.3-revision-notes"
title: "Differentiating Inverse Functions: Revision Notes (Calculus AB 3.3)"
description: "One-page recap of derivatives of inverse functions: the reciprocal-slope rule, the matching-input step, vertical tangents and the mistakes that cost marks."
course: "calculus-ab"
unit: 3
topics: ["3.3"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-3.3-study-guide"]
learningObjectives:
  - "Recall the rule for the derivative of an inverse and the condition it needs"
  - "Spot the wrong-input error before making it"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-3.3-study-guide", "mb-ap-calcab-3.3-practice", "mb-ap-calcab-3.3-checklist"]
next: "mb-ap-calcab-3.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "If f(a) = b, the inverse has slope 1/f′(a) at x = b."
  - "Find the matching input a first. Never use f′(b)."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the graph, the derivation and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/3-3-differentiating-inverse-functions-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: f⁻¹ is the inverse function, not 1/f. (f⁻¹)′(b) is the derivative of the inverse at b.

## Recap

- The graph of f⁻¹ is the graph of f reflected in y = x. The point (a, b) moves to (b, a).
- Reflection swaps rise and run, so the slope m becomes **1/m** at the matching point.
- **Derivation:** differentiate f(g(x)) = x with the chain rule to get f′(g(x)) · g′(x) = 1.
- You do **not** need a formula for the inverse. One pair f(a) = b and the value f′(a) are enough.
- If f′(a) = 0, the inverse has a **vertical tangent** at (b, a) and is not differentiable there.

## Key relationships

| Situation | What to use |
|---|---|
| g is the inverse of f | g′(x) = 1/f′(g(x)), provided f′(g(x)) ≠ 0 |
| You know f(a) = b | g′(b) = 1/f′(a) |
| Implicit route | y = g(x) means f(y) = x, so dy/dx = 1/f′(y) |
| Leibniz form | dx/dy = 1/(dy/dx) at matching points |
| Tangent to g at x = b | y = a + (1/f′(a))(x − b) |
| Composition, e.g. H(x) = g(kx) | H′(x) = k · g′(kx) |
| Table of f, f′ | Find b in the f(x) row, read a above it, then use f′(a) |

## Assumptions behind the method

- f is one-to-one on the interval used (for example, f′ keeps one sign there), so the inverse exists.
- f is differentiable at a, and f′(a) ≠ 0.
- The value a is the one in the stated domain. If f(x) = b has two solutions, the domain restriction picks one.

## Mistakes to avoid

1. **Using 1/f′(b)** instead of 1/f′(a).
2. **Reading f⁻¹ as 1/f.**
3. **Forgetting the reciprocal** and answering f′(a).
4. **Flipping the sign.** A decreasing function has a decreasing inverse.
5. **Saying "the derivative is 0"** where f′(a) = 0. The inverse has a vertical tangent there and no derivative.
6. **Dropping the chain-rule factor** in compositions such as g(3x).

## Quick self-check

1. f(x) = x⁵ + 3x + 1 and g is its inverse. Find g′(5). *(1/8: f(1) = 5 and f′(1) = 8)*
2. f is decreasing, f(4) = 10 and f′(4) = −2. Find (f⁻¹)′(10). *(−1/2)*
3. f(x) = x³. Is the inverse differentiable at x = 0? *(No. f′(0) = 0, so ∛x has a vertical tangent at the origin.)*
4. Check the rule on eˣ and ln x. *(1/e^(ln x) = 1/x, the known derivative of ln x)*

Next: [practice questions](/advanced-course-resources/calculus-ab/3-3-differentiating-inverse-functions-practice/).
