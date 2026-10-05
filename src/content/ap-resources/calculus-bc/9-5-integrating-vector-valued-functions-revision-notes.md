---
resourceId: "mb-ap-calcbc-9.5-revision-notes"
title: "Integrating Vector-Valued Functions: Revision Notes (Calculus BC 9.5)"
description: "One-page recap of integrating vector-valued and parametric rates: component-by-component integration, constant vectors, net change and initial value problems."
course: "calculus-bc"
unit: 9
topics: ["9.5"]
resourceType: "revision-notes"
calculusScope: "bc-only"
prerequisiteResources: ["mb-ap-calcbc-9.5-study-guide"]
learningObjectives:
  - "Recall how to integrate a vector-valued function and how to use an initial condition"
  - "Spot the common errors in vector initial value problems before making them"
skills: ["1"]
studyMinutes: 10
difficulty: "core"
calculator: "mixed"
calculatorNote: "Antiderivatives by hand where they exist; a graphing calculator for definite integrals with no elementary antiderivative, rounded to 3 decimal places at the end."
related: ["mb-ap-calcbc-9.5-study-guide", "mb-ap-calcbc-9.5-practice", "mb-ap-calcbc-9.5-checklist"]
next: "mb-ap-calcbc-9.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only."
  - "Integrate each component separately; the constant is a vector ⟨C₁, C₂⟩."
  - "r(b) = r(a) + ∫ from a to b of r′(t) dt."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the explanations, the path diagram and three worked examples, use the [full study guide](/advanced-course-resources/calculus-bc/9-5-integrating-vector-valued-functions-study-guide/). **BC-only material.** Prerequisites (vector derivatives 9.4, FTC 6.7, antiderivatives and substitution 6.8–6.9, particular solutions 7.7) are on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

## Recap

- You differentiate a vector one component at a time, so you **integrate it one component at a time** too.
- An indefinite integral of a vector has a **constant vector** C = ⟨C₁, C₂⟩. The two constants are usually different.
- A definite integral of a vector is a **vector**: one number per component.
- Being given dx/dt and dy/dt is the same as being given the vector ⟨dx/dt, dy/dt⟩.
- An initial condition (a known position or velocity at one time) fixes the constants.

## Key relationships

| Idea | Formula | Note |
|---|---|---|
| Indefinite integral | ∫ ⟨f(t), g(t)⟩ dt = ⟨F(t) + C₁, G(t) + C₂⟩ | F′ = f, G′ = g |
| Definite integral | ∫ from a to b of ⟨f, g⟩ dt = ⟨∫ from a to b of f dt, ∫ from a to b of g dt⟩ | Answer is a vector |
| Net change | ∫ from a to b of r′(t) dt = r(b) − r(a) | FTC, applied to each component |
| Position from velocity | r(b) = r(a) + ∫ from a to b of v(t) dt | Add the known position |
| Velocity from acceleration | v(b) = v(a) + ∫ from a to b of a(t) dt | Then integrate again for position |
| Accumulation form | r(t) = r(t₀) + ∫ from t₀ to t of r′(s) ds | Use when no antiderivative can be written |

## Assumptions

- Angles are in radians.
- Calculator integrals: keep 4 or more decimal places, round to 3 at the end.
- An earlier time works too: r(0) = r(1) − ∫ from 0 to 1 of r′(t) dt.

## Mistakes to avoid

1. **One shared constant** for both components.
2. **Using t = 0** when the condition is given at another time.
3. **Stopping at the net change** and calling it the position.
4. **Skipping v(t₀)** when working up from acceleration.
5. **Adding the components** of a definite integral to get one number.
6. **Missing a chain-rule factor**: ∫ sin(3t) dt = −⅓ cos(3t).
7. **A lost minus sign** when going back in time.

## Quick self-check

1. Evaluate ∫ from 0 to π/2 of ⟨cos t, 2t⟩ dt. *(⟨1, π²/4⟩)*
2. r′(t) = ⟨4t, 3⟩ and r(0) = ⟨1, −2⟩. Find r(2). *(⟨9, 4⟩)*
3. r′(t) = ⟨1/t, 2t⟩ for t > 0 and r(1) = ⟨0, 3⟩. Find r(e). *(⟨1, e² + 2⟩, since r(t) = ⟨ln t, t² + 2⟩)*

Next: [practice questions](/advanced-course-resources/calculus-bc/9-5-integrating-vector-valued-functions-practice/).
