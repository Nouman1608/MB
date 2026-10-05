---
resourceId: "mb-ap-chem-5.9-revision-notes"
title: "Pre-Equilibrium Approximation: Revision Notes (Chemistry 5.9)"
description: "One-page recap of the pre-equilibrium approximation: when you need it, the four-step recipe for removing an intermediate from a rate law, and the mistakes that cost marks."
course: "chemistry"
unit: 5
topics: ["5.9"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-chem-5.9-study-guide"]
learningObjectives:
  - "Recall the four-step recipe for deriving a rate law when the first step is a fast equilibrium"
  - "Spot the common errors in pre-equilibrium derivations before making them"
skills: ["5"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-chem-5.9-study-guide", "mb-ap-chem-5.9-practice", "mb-ap-chem-5.9-checklist"]
next: "mb-ap-chem-5.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "Slow step first: its rate law is the answer. Slow step later: remove the intermediate."
  - "Fast reversible step: k₁[reactants] = k₋₁[intermediate]."
  - "The final rate law never contains an intermediate."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations and worked examples, use the [full study guide](/advanced-course-resources/chemistry/5-9-pre-equilibrium-approximation-study-guide/).

## Recap

- The slowest elementary step sets the rate of a reaction.
- If the **first** step is slow, its rate law is the rate law of the reaction (Topic 5.8).
- If a **later** step is slow, its rate law usually contains an **intermediate**. You cannot set an intermediate's concentration in an experiment, so it must not appear in the final rate law.
- When the step before the slow step is **fast and reversible**, assume it stays at equilibrium: its forward and reverse rates are equal. This is the **pre-equilibrium approximation**.

## The recipe

1. Write the slow step's rate law from its molecularity.
2. Find the intermediate in it.
3. Fast step: forward rate = reverse rate. Solve for [intermediate].
4. Substitute, then combine the constants into one k.

## Key relationships

| Mechanism pattern | Intermediate | Rate law |
|---|---|---|
| A + B ⇌ I (fast); I + B → P (slow) | [I] = (k₁ / k₋₁)[A][B] | rate = (k₂k₁ / k₋₁)[A][B]² |
| X₂ ⇌ 2X (fast); X + Y → XY (slow) | [X] = (K₁[X₂])^½ | rate = k₂K₁^½[X₂]^½[Y] |
| A + Cat ⇌ ACat (fast); ACat + B → AB + Cat (slow) | [ACat] = K₁[A][Cat] | rate = k₂K₁[A][Cat][B] |

K₁ = k₁ / k₋₁ (forward over reverse).

## Assumptions

- The fast step goes back and forth much faster than the slow step uses up the intermediate.
- Every step is elementary, so its rate law follows from its molecularity.
- Steps **after** the slow step do not affect the rate law.

## Mistakes to avoid

1. **Leaving the intermediate in.** The slow step's rate law alone is not the answer.
2. **Using overall coefficients as orders.**
3. **Flipping K₁.** Forward constant on top.
4. **Losing the square root.** X₂ ⇌ 2X gives [X] proportional to [X₂]^½.
5. **Claiming proof.** A matching rate law means "consistent with", not "proven".

## Quick self-check

1. A fast step has k₁ = 6.0 × 10³ M⁻¹ s⁻¹ and k₋₁ = 2.0 × 10⁵ s⁻¹. What is K₁? *(0.030 M⁻¹)*
2. Rate = k[X₂]^½. By what factor does the rate change if [X₂] is multiplied by 9? *(3)*
3. Fast: M + N ⇌ MN. Slow: MN → P + Q. Rate law? *(rate = k[M][N], with k = k₂k₁ / k₋₁)*

Next: [practice questions](/advanced-course-resources/chemistry/5-9-pre-equilibrium-approximation-practice/).
