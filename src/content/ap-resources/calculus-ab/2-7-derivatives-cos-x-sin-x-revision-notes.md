---
resourceId: "mb-ap-calcab-2.7-revision-notes"
title: "Derivatives of cos x, sin x, eˣ and ln x: Revision Notes (Calculus AB 2.7)"
description: "One-page recap of the derivatives of sin x, cos x, eˣ and ln x, the conditions behind them, limits that are derivatives in disguise, and the sign slips to avoid."
course: "calculus-ab"
unit: 2
topics: ["2.7"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-2.7-study-guide"]
learningObjectives:
  - "Recall the four derivatives and the condition for each"
  - "Spot the common sign and constant errors before making them"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-2.7-study-guide", "mb-ap-calcab-2.7-practice", "mb-ap-calcab-2.7-checklist"]
next: "mb-ap-calcab-2.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "sin x → cos x; cos x → −sin x; eˣ → eˣ; ln x → 1/x (x > 0)."
  - "A limit of the form [f(a + h) − f(a)]/h equals f′(a)."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the proofs, graphs and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/2-7-derivatives-cos-x-sin-x-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **f′(x)** and **d/dx f(x)** both mean the derivative of f. **lim (h → 0)** means "the limit as h approaches 0".

## Recap

- Four new derivatives join the power, sum and constant multiple rules.
- Differentiate term by term. Constants such as e², ln 4 or sin(π/6) have derivative **0**.
- The trig rules come from the limit definition plus the Topic 1.8 limits (sin h)/h → 1 and (cos h − 1)/h → 0.
- eˣ is its own derivative because e is the base for which (eʰ − 1)/h → 1.
- ln x is the reflection of eˣ in y = x, so its slopes are reciprocals: 1/x.
- If a 0/0 limit is a difference quotient of a familiar function, name f and a, then the limit is f′(a).

## Key relationships

| Function | Derivative | Condition or note |
|---|---|---|
| sin x | cos x | radians |
| cos x | −sin x | radians; note the minus sign |
| eˣ | eˣ | slope equals height; always positive |
| ln x | 1/x | only for x > 0 |
| constant c | 0 | includes e², ln 5, cos 1 |
| lim (h → 0) [f(a + h) − f(a)]/h | f′(a) | also lim (x → a) [f(x) − f(a)]/(x − a) |

Useful rewrites: ln(kx) = ln k + ln x; ln(xⁿ) = n ln x; e^(x + k) = eᵏ · eˣ.

## Assumptions behind the rules

- Angles are measured in **radians**. In degrees every trig slope gains a factor of π/180.
- The input is plain x. sin(3x) or e^(x²) need the chain rule (Topic 3.1).
- ln x needs x > 0, so its derivative 1/x is only used there.

## Mistakes to avoid

1. **Sign slip:** writing d/dx cos x = sin x, or d/dx sin x = −cos x.
2. **Power rule on eˣ:** d/dx eˣ is not x·e^(x − 1).
3. **Constant confusion:** d/dx e² = 0, not e²; d/dx ln 7 = 0, not 1/7.
4. **Mixing eˣ and xᵉ:** d/dx xᵉ = e·x^(e − 1).
5. **Missing the derivative in a limit** and trying long algebra instead.

## Quick self-check

1. Differentiate 4 cos x − ln x. *(−4 sin x − 1/x)*
2. Find lim (h → 0) [e^(3 + h) − e³]/h. *(e³: it is f′(3) for f(x) = eˣ)*
3. What is the slope of y = sin x at x = π/3? *(cos(π/3) = 1/2)*
4. Differentiate xᵉ + eˣ. *(e·x^(e − 1) + eˣ)*

Next: [practice questions](/advanced-course-resources/calculus-ab/2-7-derivatives-cos-x-sin-x-practice/).
