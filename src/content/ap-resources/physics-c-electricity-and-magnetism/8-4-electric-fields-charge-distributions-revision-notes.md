---
resourceId: "mb-ap-physcem-8.4-revision-notes"
title: "Electric Fields of Charge Distributions: Revision Notes (Physics C: E&M 8.4)"
description: "One-page recap of fields of continuous charge for the calculus-based course: the dq method, symmetry, and standard results for rods, rings, arcs and lines."
course: "physics-c-electricity-and-magnetism"
unit: 8
topics: ["8.4"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcem-8.4-study-guide"]
learningObjectives:
  - "Recall the dq method and the standard fields of rods, rings, arcs and long lines"
  - "Spot symmetry, variable and charge-density errors before making them"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcem-8.4-study-guide", "mb-ap-physcem-8.4-practice", "mb-ap-physcem-8.4-checklist"]
next: "mb-ap-physcem-8.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "E = ∫ k dq/r² r̂: add the fields of tiny point charges, one component at a time."
  - "Symmetry first: cancel paired components before you integrate."
  - "Far from any finite object, E must become kQ/r²."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the derivations, Figures 1 and 2 and the worked examples, use the [full study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/8-4-electric-fields-charge-distributions-study-guide/). This topic is in the calculus-based course only.

## Recap

- A continuous charge is a sum of tiny point charges dq. Each gives dE = k dq/r², and **E = ∫ k dq/r² r̂** (superposition).
- E is a vector. Integrate components, not magnitudes, unless every dE points the same way.
- For a line or arc, dq = λ dx or dq = λR dθ. Uniform rod: λ = Q/L. Uniform semicircle: λ = Q/(πR).
- Write r and every cos θ or sin θ in the **one** variable you integrate over.
- Symmetry tells you the direction and which components cancel.
- k = 1/(4πε₀) = 8.99 × 10⁹ N·m²/C²; ε₀ = 8.85 × 10⁻¹² C²/(N·m²).

## Key relationships

| Distribution | Point | Field | Direction (positive charge) |
|---|---|---|---|
| Finite rod, Q, length L | On its line, d from near end | kQ/[d(d + L)] | Along the line, away from the rod |
| Finite rod, Q, length L | Perpendicular bisector, distance x | kQ/[x√(x² + L²/4)] | Perpendicular to the rod |
| Infinite line or long cylinder, λ | Distance r from axis | λ/(2πε₀r) = 2kλ/r | Radially outward |
| Ring, Q, radius a | Axis, distance z | kQz/(z² + a²)^(3/2); zero at centre; maximum at z = a/√2 | Along the axis |
| Semicircle, λ, radius R | Centre | 2kλ/R = 2kQ/(πR²) | Along the symmetry line, away from the arc |
| Quarter circle, λ, radius R | Centre | √2 kλ/R | Along the arc's symmetry line (45° to each end radius), away from the arc |

## Assumptions behind the results

- The objects are thin: all charge lies on a line or arc.
- The charge is uniform unless a density function is given.
- "Infinite" means the object is much longer than its distance from P.

## Mistakes to avoid

1. **Adding magnitudes** of dE vectors that point in different directions.
2. **Point-charge shortcut close up.** kQ/r² from the centre is only valid far away.
3. **Two variables in one integral.** Express r and the angle in x (or θ).
4. **λ = Q/(2πR) for a semicircle.** Its length is πR.
5. **1/r² for a long line.** It is 1/r.
6. **Skipping the check.** Test the far-away limit and the direction.

## Quick self-check

1. What is E at the centre of a uniformly charged full ring? *(Zero: every piece is cancelled by the one opposite it)*
2. A semicircle of radius 0.20 m carries λ = 2.0 × 10⁻⁸ C/m. Find E at its centre. *(2kλ/R = 1.8 × 10³ N/C)*
3. A finite rod's field on its bisector is kQ/[x√(x² + L²/4)]. What does it become when L is much larger than x? *(2kλ/x, the infinite-line field)*

Next: [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/8-4-electric-fields-charge-distributions-practice/).
