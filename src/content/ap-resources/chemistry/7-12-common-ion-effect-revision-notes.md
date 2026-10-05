---
resourceId: "mb-ap-chem-7.12-revision-notes"
title: "Common-Ion Effect: Revision Notes (Chemistry 7.12)"
description: "One-page recap of the common-ion effect: the Le Châtelier explanation, what changes and what stays constant, the calculation method and the mistakes that cost marks."
course: "chemistry"
unit: 7
topics: ["7.12"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-chem-7.12-study-guide"]
learningObjectives:
  - "Recall how a common ion changes solubility and why K_sp stays the same"
  - "Spot the common errors in common-ion calculations before making them"
skills: ["2", "5"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-chem-7.12-study-guide", "mb-ap-chem-7.12-practice", "mb-ap-chem-7.12-checklist"]
next: "mb-ap-chem-7.12-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "A common ion shifts the dissolving equilibrium to the left: less salt dissolves."
  - "K_sp is unchanged; s and the other ion's concentration fall."
  - "Include the common ion in the K_sp expression, then use c + s ≈ c and check."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/chemistry/7-12-common-ion-effect-study-guide/).

## Recap

- A **common ion** is an ion that a dissolving salt shares with something already in the solution (for AgCl: Cl⁻ from NaCl, or Ag⁺ from AgNO₃).
- **Le Châtelier:** adding a product ion pushes the dissolving equilibrium back towards the solid.
- **Q and K:** the added ion makes Q > K_sp, so ions precipitate until Q = K_sp again.
- Result: the salt is **less soluble** than in pure water. This is the common-ion effect.
- **K_sp does not change** at constant temperature. The molar solubility falls, the other ion's concentration falls, and the common ion's concentration is higher.
- An ion that is not in the K_sp expression (for AgCl, Na⁺ or NO₃⁻) does not cause this effect.
- **Removing** one of the salt's ions has the opposite effect: more solid dissolves.

## Key relationships

| Situation | Set-up | Simplified (s ≪ c) |
|---|---|---|
| MX in c M of X⁻ | K_sp = s(c + s) | s ≈ K_sp ÷ c |
| MX₂ in c M of X⁻ | K_sp = s(c + 2s)² | s ≈ K_sp ÷ c² |
| MX₂ in c M of M²⁺ | K_sp = (c + s)(2s)² | s ≈ √(K_sp ÷ 4c) |
| K_sp from common-ion data | K_sp = [measured ion]ᵐ × [common ion]ⁿ (powers from the formula) | use the common-ion concentration, not s, for that ion |

## Assumptions

- The added salt that supplies the common ion is soluble and fully dissociated.
- The salt's own contribution to the common ion is tiny (check: xs or ys under about 5% of c).
- Temperature is constant, so K_sp is constant.

## Mistakes to avoid

1. **Saying K_sp decreases.** Solubility decreases; K_sp does not.
2. **Writing K_sp = s²** when a common ion is present. The common ion must appear as c.
3. **Dropping the power.** For MX₂ in X⁻ solution, use c², not c.
4. **Not checking the approximation** after solving.
5. **Treating every added salt as a common ion.** Only ions in the K_sp expression count.
6. **Using the pure-water formula on data from a common-ion solution.** It gives a K_sp far too small.

## Quick self-check

1. A 1:1 salt has K_sp = 1.0 × 10⁻¹². What is its molar solubility in 0.010 M of a common ion? *(1.0 × 10⁻¹⁰ M)*
2. MX₂ has K_sp = 2.0 × 10⁻¹⁰. What is its molar solubility in 0.020 M X⁻? *(K_sp ÷ c² = 5.0 × 10⁻⁷ M)*
3. Same salt, in 0.020 M M²⁺? *(√(K_sp ÷ 0.080) = 5.0 × 10⁻⁵ M)*
4. Adding solid NaCl to saturated AgCl: what happens to [Ag⁺] and to K_sp? *([Ag⁺] falls; K_sp unchanged)*

Next: [practice questions](/advanced-course-resources/chemistry/7-12-common-ion-effect-practice/).
