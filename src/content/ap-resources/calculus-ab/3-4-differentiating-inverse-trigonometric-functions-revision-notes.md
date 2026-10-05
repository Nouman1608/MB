---
resourceId: "mb-ap-calcab-3.4-revision-notes"
title: "Differentiating Inverse Trigonometric Functions: Revision Notes (Calculus AB 3.4)"
description: "One-page recap of the derivatives of arcsin, arccos and arctan: where they come from, the chain-rule forms, where they fail and the mistakes that cost marks."
course: "calculus-ab"
unit: 3
topics: ["3.4"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-3.4-study-guide"]
learningObjectives:
  - "Recall the inverse trigonometric derivatives and their chain-rule forms"
  - "Spot the common sign, square and domain errors before making them"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-3.4-study-guide", "mb-ap-calcab-3.4-practice", "mb-ap-calcab-3.4-checklist"]
next: "mb-ap-calcab-3.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "arcsin: 1/√(1 − x²); arccos: −1/√(1 − x²); arctan: 1/(1 + x²)."
  - "With an inner function u, put u′ on top and square the whole of u."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the derivations, the reference triangles and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/3-4-differentiating-inverse-trigonometric-functions-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: arcsin x = sin⁻¹ x (an angle in radians), which is **not** 1/sin x.

## Recap

- Each inverse trig function undoes a **restricted** trig function: sin on [−π/2, π/2], cos on [0, π], tan on (−π/2, π/2).
- **Derivation pattern:** y = arcsin x means sin y = x. Differentiate implicitly: cos y · y′ = 1, so y′ = 1/cos y = 1/√(1 − x²).
- The root is positive because cos y ≥ 0 when −π/2 ≤ y ≤ π/2.
- arctan: tan y = x gives sec²y · y′ = 1, and sec²y = 1 + x².
- arccos: from arcsin x + arccos x = π/2, its derivative is the negative of arcsin's.
- arcsin and arccos are **not differentiable at x = ±1** (vertical tangents). arctan is differentiable everywhere.

## Key relationships

| Function | Derivative | Chain-rule form (u a function of x) |
|---|---|---|
| arcsin x | 1/√(1 − x²), −1 < x < 1 | u′/√(1 − u²) |
| arccos x | −1/√(1 − x²), −1 < x < 1 | −u′/√(1 − u²) |
| arctan x | 1/(1 + x²), all x | u′/(1 + u²) |
| Inverse-function rule (3.3) | g′(x) = 1/f′(g(x)) | e.g. arcsin′(x) = 1/cos(arcsin x) |

Useful exact values: arcsin(1/2) = π/6, arccos(1/2) = π/3, arctan 1 = π/4, arctan 0 = 0.

## Assumptions behind the formulas

- Angles are in radians.
- The standard ranges are used (they fix the sign of the square root).
- For arcsin u or arccos u, the inner value u must satisfy −1 < u < 1 for the derivative to exist.

## Mistakes to avoid

1. **Treating sin⁻¹ x as 1/sin x.**
2. **Forgetting the minus sign** on arccos.
3. **Missing the chain-rule factor u′.**
4. **Squaring only part of u**: arcsin(3x) gives √(1 − 9x²), not √(1 − 3x²).
5. **Putting a square root in the arctan formula**, or leaving it out of arcsin.
6. **Using degrees** for exact values.

## Quick self-check

1. Differentiate arcsin(3x). *(3/√(1 − 9x²))*
2. Find the derivative of arctan(x³) at x = 1. *(3x²/(1 + x⁶) at x = 1 is 3/2)*
3. Find the derivative of arccos x at x = 0. *(−1)*
4. Is arcsin x differentiable at x = 1? *(No. The denominator √(1 − x²) is 0 there, and the graph has a vertical tangent.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/3-4-differentiating-inverse-trigonometric-functions-practice/).
