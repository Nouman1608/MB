---
resourceId: "mb-ap-calcab-7.6-revision-notes"
title: "Finding General Solutions Using Separation of Variables: Revision Notes (Calculus AB 7.6)"
description: "One-page recap of separable differential equations: how to spot them, the four-step method, handling ln|y| and the constant, and the errors that cost marks."
course: "calculus-ab"
unit: 7
topics: ["7.6"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-7.6-study-guide"]
learningObjectives:
  - "Recall the separation-of-variables method and when it applies"
  - "Spot the common errors with the constant, logarithms and non-separable equations before making them"
skills: ["1"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-7.6-study-guide", "mb-ap-calcab-7.6-practice", "mb-ap-calcab-7.6-checklist"]
next: "mb-ap-calcab-7.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "Separable means dy/dx = (x-part) × (y-part). Separate, antidifferentiate both sides, add one C, then solve for y."
  - "The constant goes in when you integrate, not at the end."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the family-of-curves graph and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/7-6-finding-general-solutions-separation-variables-study-guide/). This topic is shared by Calculus AB and Calculus BC.

## Recap

- A **general solution** describes every solution of a differential equation, using one arbitrary constant.
- If dy/dx = f(x) only, then y = ∫ f(x) dx: any antiderivative plus C.
- **Separable:** dy/dx = g(x) · h(y). Try factoring (xy + 2x = x(y + 2)) and exponent laws (e^(x + y) = eˣeʸ) before deciding.
- **Not separable:** sums such as x + y, or cos(x + y).
- **Method:** (1/h(y)) dy = g(x) dx → integrate both sides → add one C → solve for y (or leave implicit) → check by differentiating.
- The chain rule justifies the method: d/dx [H(y)] = H′(y) · dy/dx.

## Key relationships

| Situation | What to write |
|---|---|
| ln\|y\| = G(x) + C | \|y\| = e^C e^(G(x)), so y = A e^(G(x)) with A any real constant |
| y³ = (expression) + C | y = ∛(expression + C), no sign choice needed |
| eʸ = (expression) + C | y = ln(expression + C), domain needs expression + C > 0 |
| y cannot be isolated | Leave it implicit, e.g. sin y + y³ = x² + C |
| ∫ (1/y²) dy | −1/y, not a logarithm |
| ∫ (1/(1 + y²)) dy | arctan y |

## Assumptions behind the method

- You divide by h(y), so you assume h(y) ≠ 0. Constant solutions where h(y) = 0 (such as y = 0) must be checked separately; often A = 0 covers them.
- Each side is integrated with respect to its own variable only.

## Mistakes to avoid

1. **No constant** (one solution, not the general solution).
2. **Constant added after rearranging:** e^(G(x)) + C instead of A e^(G(x)).
3. **Logarithm for every fraction.**
4. **"Integrating" y with respect to x** without separating, as in ∫ (x + y) dx = x²/2 + xy.
5. **Two constants** where one will do.

## Quick self-check

1. Find the general solution of dy/dx = 2x/y. *(y dy = 2x dx, so y²/2 = x² + C, or y² = 2x² + K)*
2. Find the general solution of dy/dx = y sec²x. *(ln|y| = tan x + C, so y = A e^(tan x))*
3. Is dy/dx = x + y² separable? *(No. It is a sum, and it cannot be factored into an x-part times a y-part.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/7-6-finding-general-solutions-separation-variables-practice/).
