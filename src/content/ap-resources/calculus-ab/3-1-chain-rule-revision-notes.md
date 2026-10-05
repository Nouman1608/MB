---
resourceId: "mb-ap-calcab-3.1-revision-notes"
title: "The Chain Rule: Revision Notes (Calculus AB 3.1)"
description: "One-page recap of the chain rule: outer and inner functions, function and Leibniz forms, tables of values, several layers, and the mistakes that cost marks."
course: "calculus-ab"
unit: 3
topics: ["3.1"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-3.1-study-guide"]
learningObjectives:
  - "Recall the chain rule in function and Leibniz notation"
  - "Spot the common chain-rule errors before making them"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-3.1-study-guide", "mb-ap-calcab-3.1-practice", "mb-ap-calcab-3.1-checklist"]
next: "mb-ap-calcab-3.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "h(x) = f(g(x)) gives h′(x) = f′(g(x)) · g′(x)."
  - "Always multiply by the derivative of the inside."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the flow diagram and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/3-1-chain-rule-study-guide/). This topic is shared by Calculus AB and Calculus BC.

## Recap

- A **composite** is a function of a function. The **inner** function is what you would calculate first; the **outer** is what you do last.
- **Chain rule:** if h(x) = f(g(x)), then **h′(x) = f′(g(x)) · g′(x)**.
- Three moves: differentiate the outside, leave the inside alone, multiply by the derivative of the inside.
- **Leibniz form:** dy/dx = (dy/du) · (du/dx). Rates multiply; units cancel like fractions.
- Several layers: work outside in, one factor per layer.
- With products or quotients, decide the **last** operation first; that sets the outer structure.
- Hidden composites are everywhere: sin²x, e^(4x), ln(3x) and 1/(x² + 1) all need the chain rule. Ask "is the input exactly x?" If not, there is an inner function.

## Key relationships

| Function | Derivative |
|---|---|
| [g(x)]ⁿ | n[g(x)]ⁿ⁻¹ · g′(x) |
| √g(x) | g′(x)/(2√g(x)) |
| sin(g(x)) | cos(g(x)) · g′(x) |
| cos(g(x)) | −sin(g(x)) · g′(x) |
| tan(g(x)) | sec²(g(x)) · g′(x) |
| e^(g(x)) | e^(g(x)) · g′(x) |
| ln(g(x)), g(x) > 0 | g′(x)/g(x) |
| f(g(x)) at x = a, from a table | f′(g(a)) · g′(a): find g(a) first |

## Assumptions behind the rule

- g must be differentiable at x, and f must be differentiable at the value g(x).
- f′ is evaluated at the **output of g**, not at x.
- Angles are in radians; the trig derivatives above rely on it.

## Mistakes to avoid

1. **Forgetting g′(x).** d/dx [sin(5x)] = 5 cos(5x).
2. **Changing the inside.** d/dx [cos(x²)] = −2x sin(x²), not −sin(2x).
3. **Using f′(a) instead of f′(g(a))** with a table.
4. **Confusing sin²x with sin(x²).** Their derivatives are 2 sin x cos x and 2x cos(x²).
5. **Squaring the derivative** instead of differentiating the square: d/dx [g(x)]² = 2g(x)g′(x), not [g′(x)]² or 2g′(x).
6. **Using the quotient rule on 1/(stuff)** when (stuff)⁻¹ with the chain rule is faster.

## Quick self-check

1. Differentiate (4x − 1)⁵. *(20(4x − 1)⁴)*
2. Differentiate sin(x³). *(3x² cos(x³))*
3. Find the derivative of e^(5x) at x = 0. *(5)*
4. In Leibniz form, a rate in metres per second times a rate in kelvin per metre gives what units? *(kelvin per second)*
5. If g(2) = 7, g′(2) = 3 and f′(7) = −1, find the derivative of f(g(x)) at x = 2. *(f′(7) · g′(2) = −3)*

Next: [practice questions](/advanced-course-resources/calculus-ab/3-1-chain-rule-practice/).
