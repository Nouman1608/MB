---
resourceId: "mb-ap-calcbc-9.9-revision-notes"
title: "Finding the Area of the Region Bounded by Two Polar Curves: Revision Notes (Calculus BC 9.9)"
description: "One-page recap of area between two polar curves: the ½ ∫ (R² − r²) dθ formula, finding intersections and the pole, regions inside both curves, and the mistakes that cost marks."
course: "calculus-bc"
unit: 9
topics: ["9.9"]
resourceType: "revision-notes"
calculusScope: "bc-only"
prerequisiteResources: ["mb-ap-calcbc-9.9-study-guide"]
learningObjectives:
  - "Recall the area formula for the region between two polar curves and when it applies"
  - "Spot the common errors in polar area set-ups before making them"
skills: ["1"]
studyMinutes: 10
difficulty: "stretch"
calculator: "mixed"
calculatorNote: "Standard angles by hand; with a calculator, store intersection angles and give areas to 3 decimal places."
related: ["mb-ap-calcbc-9.9-study-guide", "mb-ap-calcbc-9.9-practice", "mb-ap-calcbc-9.9-checklist"]
next: "mb-ap-calcbc-9.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only."
  - "Area between two polar curves = ½ ∫ (R² − r²) dθ, outer R and inner r."
  - "Solve r₁ = r₂ for the limits, then check the pole separately."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the sector argument, the diagrams and the worked examples, use the [full study guide](/advanced-course-resources/calculus-bc/9-9-finding-area-region-bounded-two-study-guide/). **BC-only material.** Prerequisites (polar coordinates 9.7, single-curve polar area 9.8, area between curves 8.4) are on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

## Recap

- A thin slice between two polar curves is a big sector minus a small sector: ½ R² dθ − ½ r² dθ.
- So the area between them is **½ ∫ from α to β of (R² − r²) dθ**, with R ≥ r ≥ 0 on [α, β].
- Three ingredients every time: **limits**, **outer curve**, **inner curve**.
- A region **inside both** curves needs no subtraction. Split it at the intersection angle and use the curve nearer the pole on each piece.

## Key relationships

| Situation | Set-up | Note |
|---|---|---|
| Inside f, outside g | ½ ∫ (f² − g²) dθ | Only over the angles where f ≥ g |
| Inside both f and g | ½ ∫ (nearer curve)² dθ, piece by piece | Split at each intersection angle |
| One curve only | ½ ∫ f² dθ | Topic 9.8 |
| Example: inside r = 2 + 2 cos θ, outside r = 3 | ½ ∫ from −π/3 to π/3 of [(2 + 2 cos θ)² − 9] dθ = 9√3/2 − π | Curves meet where cos θ = ½ |

## Method

1. **Sketch** both curves.
2. **Solve** f(θ) = g(θ) for the intersection angles.
3. **Check the pole**: where is each r equal to 0? Curves can share the pole at different angles.
4. **Test an angle** in each interval to see which curve is outer (or nearer the pole).
5. **Write** the integral(s), using symmetry if it is genuine.
6. **Evaluate** by hand (standard angles) or by calculator (store the angles; 3 decimal places).

## Mistakes to avoid

1. **½ ∫ (R − r)² dθ.** Square each radius first, then subtract.
2. **Forgetting the ½.**
3. **Missing the pole** as a shared point.
4. **Farther curve for "inside both".** Use the nearer one on each piece.
5. **0 to 2π by habit.** Some curves (r = a sin θ) are traced twice in a full turn.
6. **Rounded limits.** Store the calculator's angles; round only the final answer.

## Quick self-check

1. Find the area between r = 4 and r = 2. *(½ ∫ from 0 to 2π of (16 − 4) dθ = 12π)*
2. Where do r = 2 + 2 sin θ and r = 3 meet? *(sin θ = ½, so θ = π/6 and 5π/6)*
3. Find the area between r = 2θ and r = θ for 0 ≤ θ ≤ π. *(½ ∫ from 0 to π of 3θ² dθ = π³/2, about 15.503)*

Next: [practice questions](/advanced-course-resources/calculus-bc/9-9-finding-area-region-bounded-two-practice/).
