---
resourceId: "mb-ap-calcbc-6.11-revision-notes"
title: "Integrating Using Integration by Parts: Revision Notes (Calculus BC 6.11)"
description: "One-page recap of integration by parts: the formula and where it comes from, choosing u, definite, repeated and self-returning integrals, and the mistakes that cost marks."
course: "calculus-bc"
unit: 6
topics: ["6.11"]
resourceType: "revision-notes"
calculusScope: "bc-only"
prerequisiteResources: ["mb-ap-calcbc-6.11-study-guide"]
learningObjectives:
  - "Recall the integration by parts formula in indefinite and definite form"
  - "Spot the common errors in integration by parts before making them"
skills: ["1"]
studyMinutes: 10
difficulty: "stretch"
calculator: "mixed"
calculatorNote: "Antiderivatives by hand; a calculator may only check a definite value where one is allowed."
related: ["mb-ap-calcbc-6.11-study-guide", "mb-ap-calcbc-6.11-practice", "mb-ap-calcbc-6.11-checklist"]
next: "mb-ap-calcbc-6.11-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "BC only."
  - "∫u dv = uv − ∫v du."
  - "Check every answer by differentiating it."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the derivation, the graph and worked examples, use the [full study guide](/advanced-course-resources/calculus-bc/6-11-integration-by-parts-study-guide/). **BC-only material.** Prerequisites (product rule 2.8, FTC 6.7, basic antiderivatives 6.8, substitution 6.9) are on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

## Recap

- Integration by parts **undoes the product rule**: d/dx[uv] = u′v + uv′, so ∫ uv′ dx = uv − ∫ vu′ dx.
- It trades ∫ u dv for ∫ v du. Worth it only if the new integral is easier.
- **Try substitution first.** Use parts for products of unrelated functions (x cos x, x eˣ, ln x).
- No + C when you find v; one + C at the end of an indefinite integral.

## Key relationships

| Form | Formula | Note |
|---|---|---|
| Indefinite | ∫ u dv = uv − ∫ v du | Choose u so du is simpler; dv must be integrable |
| Definite | ∫ from a to b of u dv = [uv] from a to b − ∫ from a to b of v du | Limits go on both pieces |
| Single hard function | ∫ ln x dx = x ln x − x + C | Take u = ln x, dv = dx |
| Repeated | ∫ x² eˣ dx = eˣ(x² − 2x + 2) + C | Each step lowers the power of x |
| Self-returning | ∫ eˣ sin x dx = ½ eˣ(sin x − cos x) + C | Apply twice, keep the same type of u, solve for the integral |

## Choosing u: the honest version

- LIATE (Log, Inverse trig, Algebraic, Trig, Exponential) is a **starting guess**.
- Then test it: can you integrate dv? Is du simpler than u?
- Counter-example to LIATE: ∫ x³ e^(x²) dx needs u = x², dv = x e^(x²) dx.

## Mistakes to avoid

1. **Product of integrals.** ∫ fg dx ≠ (∫ f dx)(∫ g dx).
2. **Lost minus signs**, in the formula or inside v (∫ sin x dx = −cos x).
3. **Missing chain-rule factor in v.** dv = e^(2x) dx gives v = ½ e^(2x).
4. **Limits on one piece only** in a definite integral.
5. **Swapping u halfway** through a self-returning integral.
6. **Forgetting to divide** after solving 2I = …

## Quick self-check

1. Find ∫ x sin x dx. *(−x cos x + sin x + C)*
2. Evaluate ∫ from 0 to π/2 of x cos x dx. *(π/2 − 1, about 0.571)*
3. Find ∫ x ln x dx. *(½x² ln x − ¼x² + C, with u = ln x, dv = x dx)*

Next: [practice questions](/advanced-course-resources/calculus-bc/6-11-integration-by-parts-practice/).
