---
resourceId: "mb-ap-physcem-9.1-revision-notes"
title: "Electric Potential Energy: Revision Notes (Physics C: E&M 9.1)"
description: "One-page recap of electric potential energy for the calculus-based course: U = kq₁q₂/r, signs, the U(r) graph, work done and the sum over pairs."
course: "physics-c-electricity-and-magnetism"
unit: 9
topics: ["9.1"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcem-9.1-study-guide"]
learningObjectives:
  - "Recall the definition and formula for the electric potential energy of a pair of charges"
  - "Spot sign, pair-counting and 1/r versus 1/r² errors before making them"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcem-9.1-study-guide", "mb-ap-physcem-9.1-practice", "mb-ap-physcem-9.1-checklist"]
next: "mb-ap-physcem-9.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism"]
keyPoints:
  - "U = kq₁q₂/r: the external work to assemble the pair from infinite separation."
  - "Signs in: like charges U > 0, unlike charges U < 0."
  - "Several charges: add every pair once."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the derivation, Figure 1 and the worked examples, use the [full study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/9-1-electric-potential-energy-study-guide/). The calculus derivation is part of the calculus-based course.

## Recap

- The electric potential energy of two point charges is the work an **external** force does to bring them slowly from infinitely far apart to their present separation.
- U belongs to the **system** of charges, not to one charge.
- The electric force is conservative, so U depends only on the separation, not on the path.
- Zero of U: the charges infinitely far apart.
- For uniformly charged spheres that do not overlap, use the centre-to-centre distance.
- k = 8.99 × 10⁹ N·m²/C²; e = 1.60 × 10⁻¹⁹ C.

## Key relationships

| Idea | Relationship |
|---|---|
| Pair of point charges | U = q₁q₂/(4πε₀r) = kq₁q₂/r |
| Derivation | U(R) = ∫_∞^R (−kq₁q₂/r²) dr |
| Force from energy | F_r = −dU/dr |
| System of N charges | U_total = Σ kq_iq_j/r_ij over the N(N − 1)/2 pairs |
| Work, start and end at rest | W_ext = ΔU; W_electric = −ΔU |
| Scaling | U ∝ 1/r; F ∝ 1/r² |

## Assumptions

- Point charges, or spherically symmetric charges treated from their centres.
- Charges moved slowly, so no kinetic energy is gained (changes in kinetic energy are Topic 9.3).
- No other forces store energy in the system.

## Mistakes to avoid

1. **Leaving out signs.** Substitute q₁ and q₂ with their signs.
2. **Using 1/r².** That is the force; energy goes as 1/r.
3. **Double-counting pairs.** List each pair once.
4. **Reading force from height.** Force is the negative slope of U(r).
5. **Mixing up external and electric work.** They have opposite signs.

## Quick self-check

1. How many pairs do 5 charges make? *(10)*
2. Find U for +1.0 nC and −1.0 nC at 0.10 m. *(−8.99 × 10⁻⁸ J)*
3. A pair's separation doubles. What happens to U and to F? *(U halves; F falls to a quarter)*
4. Like charges are released from rest. Does U rise or fall? *(It falls towards zero as they move apart)*
5. Three equal charges +q sit at the corners of an equilateral triangle of side a. What is U_total? *(3kq²/a, one term for each of the 3 pairs)*
6. Removing one charge from a system: which pair terms change? *(Only the pairs that include the charge being removed)*

Next: [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/9-1-electric-potential-energy-practice/).
