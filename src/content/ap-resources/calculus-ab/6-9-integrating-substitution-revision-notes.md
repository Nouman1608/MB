---
resourceId: "mb-ap-calcab-6.9-revision-notes"
title: "Integrating Using Substitution: Revision Notes (Calculus AB 6.9)"
description: "One-page recap of u-substitution: spotting the inner function, adjusting constants, rewriting leftover x, changing limits in definite integrals, and the slips that cost marks."
course: "calculus-ab"
unit: 6
topics: ["6.9"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-6.9-study-guide"]
learningObjectives:
  - "Recall the substitution rule and the steps of the method"
  - "Recall how the limits change in a definite integral"
  - "Spot the common substitution errors before making them"
skills: ["1", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-6.9-study-guide", "mb-ap-calcab-6.9-practice", "mb-ap-calcab-6.9-checklist"]
next: "mb-ap-calcab-6.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Substitution reverses the chain rule: let u be the inner function and rewrite everything in u."
  - "In a definite integral, the limits change to u-values."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the area diagram and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/6-9-integrating-substitution-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **∫ (a to b) f(x) dx** is the definite integral from x = a to x = b.

## Recap

- Substitution is the **chain rule backwards**. It works when the integrand is (outer function of an inner function) × (derivative of the inner function), up to a constant.
- Steps: choose u, find du, rewrite **everything** in u, integrate, substitute back, add + C, check by differentiating.
- **Constants can be adjusted** (du = 2x dx gives x dx = du/2). **Variables cannot.**
- If an x is left over, solve u = g(x) for x and replace it.
- In a **definite integral**, change the limits to u = g(a) and u = g(b) and finish in u. Or go back to x first. Never mix the two.

## Key relationships

| Idea | Rule |
|---|---|
| Substitution rule | ∫ f(g(x)) g′(x) dx = F(g(x)) + C, where F′ = f |
| Linear inner function | ∫ f(ax + b) dx = (1/a) F(ax + b) + C |
| Changing limits | ∫ (a to b) f(g(x)) g′(x) dx = ∫ (g(a) to g(b)) f(u) du |
| Derivative over function | ∫ g′(x)/g(x) dx = ln|g(x)| + C |
| A standard result | ∫ tan x dx = −ln|cos x| + C |

Typical choices of u: the base of a power, the inside of a root, the exponent of e, the input of sin or cos, a denominator whose derivative is in the numerator.

## Assumptions behind the method

- u = g(x) must be differentiable, with g′ continuous, on the interval you integrate over.
- The outer function f must be continuous on the u-values that g takes there.
- The integral must become a function of u alone, with nothing left in x.

## Mistakes to avoid

1. **Missing the constant factor** (for example, forgetting the 1/2 when du = 2x dx).
2. **Dividing by a variable** to make du appear.
3. **Keeping x-limits** with an antiderivative in u.
4. **Swapping limits** that come out in the "wrong" order, without changing the sign.
5. **Forgetting + C** on an indefinite integral.
6. **Leaving x and u mixed** in the same integral.

## Quick self-check

1. Find ∫ 3x² e^(x³) dx. *(e^(x³) + C, with u = x³)*
2. Find ∫ sin(4x) dx. *(−(1/4) cos(4x) + C)*
3. Evaluate ∫ (0 to 2) x(x² + 1)² dx. *(62/3: with u = x² + 1 the integral is (1/2) ∫ (1 to 5) u² du = (1/2)(125 − 1)/3)*

Next: [practice questions](/advanced-course-resources/calculus-ab/6-9-integrating-substitution-practice/).
