---
resourceId: "mb-ap-calcbc-9.2-revision-notes"
title: "Second Derivatives of Parametric Equations: Revision Notes (Calculus BC 9.2)"
description: "One-page recap of d²y/dx² for parametric curves: the correct method, why the shortcut fails, concavity, tangent-line estimates and the mistakes that cost marks."
course: "calculus-bc"
unit: 9
topics: ["9.2"]
resourceType: "revision-notes"
calculusScope: "bc-only"
prerequisiteResources: ["mb-ap-calcbc-9.2-study-guide"]
learningObjectives:
  - "Recall the method for d²y/dx² of a parametric curve and use its sign"
  - "Spot the common errors with parametric second derivatives before making them"
skills: ["1"]
studyMinutes: 10
difficulty: "stretch"
calculator: "mixed"
calculatorNote: "Derivatives by hand; a calculator may only evaluate expressions where one is allowed. Angles in radians."
related: ["mb-ap-calcbc-9.2-study-guide", "mb-ap-calcbc-9.2-practice", "mb-ap-calcbc-9.2-checklist"]
next: "mb-ap-calcbc-9.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only."
  - "d²y/dx² = [d/dt (dy/dx)] ÷ (dx/dt)."
  - "Never divide d²y/dt² by d²x/dt²."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the derivation, the graph and the worked examples, use the [full study guide](/advanced-course-resources/calculus-bc/9-2-second-derivatives-parametric-equations-study-guide/). **BC-only material.** You need [Topic 9.1](/advanced-course-resources/calculus-bc/9-1-defining-differentiating-parametric-equations-study-guide/) first; the other prerequisites (quotient rule 2.9, chain rule 3.1, concavity 5.6) are on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

## Recap

- d²y/dx² is the derivative **with respect to x** of the slope dy/dx.
- In a parametric problem dy/dx is a function of t, so use the chain rule again: differentiate it with respect to t, then **divide by dx/dt**.
- Four steps: dx/dt and dy/dt → dy/dx (simplify!) → d/dt (dy/dx) → divide by dx/dt.
- The sign of d²y/dx² gives the concavity, exactly as for y = f(x).

## Key relationships

| Quantity | Formula | Note |
|---|---|---|
| Slope | dy/dx = (dy/dt) ÷ (dx/dt) | dx/dt ≠ 0 |
| Second derivative | d²y/dx² = [d/dt (dy/dx)] ÷ (dx/dt) | Divide by dx/dt, not by d²x/dt² |
| Optional check | d²y/dx² = (x′y″ − y′x″) ÷ (x′)³ | Primes are t-derivatives |
| Concave up | d²y/dx² > 0 | Tangent line below the curve: underestimate |
| Concave down | d²y/dx² < 0 | Tangent line above the curve: overestimate |

## The sign trap

If dx/dt < 0, the sign of d²y/dx² is the **opposite** of the sign of d/dt (dy/dx). Example: x = t² + 2t, y = t³ − 3t has d/dt (dy/dx) = 3/2 for all t, but d²y/dx² = 3/(4(t + 1)) is negative for t < −1.

## Mistakes to avoid

1. **The shortcut (d²y/dt²) ÷ (d²x/dt²).** For x = 2t, y = t² it gives 2 ÷ 0, but the true answer is ½.
2. **Forgetting the second division** by dx/dt.
3. **Not simplifying dy/dx** before differentiating it.
4. **Reading concavity from d/dt (dy/dx)** without checking the sign of dx/dt.
5. **Chain-rule slips**, for example d/dt [cos 2t] = −2 sin 2t.
6. **Over/under mixed up.** Concave down means the estimate is too big.

## Quick self-check

1. For x = t², y = 4t³, find d²y/dx² at t = 1. *(dy/dx = 6t; d/dt = 6; 6 ÷ 2t = 3/t, so 3)*
2. For x = 2t + 1, y = t² + t, find d²y/dx². *(dy/dx = (2t + 1)/2; d/dt = 1; 1 ÷ 2 = ½)*
3. For x = cos t, y = sin t, is the curve concave up or down at t = π/2? *(dy/dx = −cot t; d/dt = csc²t; ÷ (−sin t) gives −1/sin³t = −1, so concave down: the top of the circle)*

Next: [practice questions](/advanced-course-resources/calculus-bc/9-2-second-derivatives-parametric-equations-practice/).
