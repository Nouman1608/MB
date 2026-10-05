---
resourceId: "mb-ap-physcem-12.4-revision-notes"
title: "Ampère's Law: Revision Notes (Physics C: E&M 12.4)"
description: "One-page recap of Ampère's law for the calculus-based course: Amperian loops, the sign rule, wires, cylinders, slabs, solenoids, superposition and Maxwell's addition."
course: "physics-c-electricity-and-magnetism"
unit: 12
topics: ["12.4"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcem-12.4-study-guide"]
learningObjectives:
  - "Recall Ampère's law and the standard fields of wires, cylinders, slabs and solenoids"
  - "Spot enclosed-current, sign and symmetry errors before making them"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcem-12.4-study-guide", "mb-ap-physcem-12.4-practice", "mb-ap-physcem-12.4-checklist"]
next: "mb-ap-physcem-12.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism"]
keyPoints:
  - "∮B·dℓ = μ₀I_enc for any closed loop (steady currents)."
  - "Symmetry first: coaxial circle, solenoid rectangle or slab rectangle."
  - "Non-uniform J: I_enc = ∫J 2πr dr."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the derivations, the figures and the worked examples, use the [full study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/12-4-amp-res-law-study-guide/). This topic is in the calculus-based course.

## Recap

- Ampère's law links the **line integral of B** round a closed path (an Amperian loop) to the **net current through** it.
- Sign rule: curl your right fingers along the direction of travel round the loop; current along your thumb is positive.
- The law is always true, but it gives B directly only when symmetry makes B constant and parallel to parts of the path, and perpendicular (or zero) on the rest.
- The course applies it quantitatively to long straight wires, long solenoids, and conducting slabs or cylinders carrying a current density.
- Treat solenoids as ideal unless told otherwise: uniform field inside, negligible field outside.
- μ₀ = 4π × 10⁻⁷ T·m/A; μ₀/(2π) = 2 × 10⁻⁷ T·m/A.

## Key relationships

| Current distribution | Amperian loop | Field |
|---|---|---|
| Long wire, or outside any long cylinder | coaxial circle | B = μ₀I/(2πr) |
| Inside a uniform solid cylinder (r < R) | coaxial circle | B = μ₀Ir/(2πR²) |
| Non-uniform J(r) in a cylinder | coaxial circle | I_enc = ∫₀ʳ J(r′)2πr′ dr′, then B = μ₀I_enc/(2πr) |
| Inside an empty tube, or outside a coaxial cable | coaxial circle | B = 0 |
| Slab, thickness t, inside at distance z from the mid-plane | rectangle | B = μ₀Jz |
| Slab, outside | rectangle | B = μ₀Jt/2, independent of distance |
| Long solenoid, n = N/L | rectangle | B = μ₀nI inside, ≈ 0 outside |
| Maxwell's fourth equation | any | ∮B·dℓ = μ₀I_enc + μ₀ε₀ dΦ_E/dt (idea only) |

## Assumptions behind the results

- Steady currents, and exact symmetry: "infinite" wires, slabs and solenoids.
- For the uniform-cylinder results, current is spread evenly over the cross-section.
- No magnetic materials nearby; the space has permeability μ₀.

## Mistakes to avoid

1. **Total I inside a conductor.** Use I_enc(r).
2. **J × area when J varies.** Integrate J 2πr dr.
3. **∮B·dℓ = 0 ⇒ B = 0.** Wrong: it means zero net enclosed current.
4. **Ignoring the sign rule.** Opposite currents through the loop subtract.
5. **N instead of n.** Use turns per metre.
6. **Ampère's law on a single loop or short wire.** No usable symmetry; use Biot-Savart.

## Quick self-check

1. An Amperian loop encloses 5.0 A one way and 2.0 A the other. What is ∮B·dℓ? *(μ₀ × 3.0 A = 3.8 × 10⁻⁶ T·m)*
2. Inside a uniform solid wire, how does B change if r is halved? *(It halves, since B ∝ r)*
3. A solenoid has 1000 turns per metre and carries 2.0 A. What is B inside? *(2.5 × 10⁻³ T)*

Next: [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/12-4-amp-res-law-practice/).
