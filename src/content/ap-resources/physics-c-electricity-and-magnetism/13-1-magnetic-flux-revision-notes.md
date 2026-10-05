---
resourceId: "mb-ap-physcem-13.1-revision-notes"
title: "Magnetic Flux: Revision Notes (Physics C: E&M 13.1)"
description: "One-page recap of magnetic flux for the calculus-based course: area vectors and signs, BA cos θ, surface integrals, solenoid flux and zero net flux through closed surfaces."
course: "physics-c-electricity-and-magnetism"
unit: 13
topics: ["13.1"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcem-13.1-study-guide"]
learningObjectives:
  - "Recall the definition of magnetic flux and the rules for its sign"
  - "Spot angle, sign and area errors before making them"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcem-13.1-study-guide", "mb-ap-physcem-13.1-practice", "mb-ap-physcem-13.1-checklist"]
next: "mb-ap-physcem-13.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Φ_B = ∫B·dA; for a uniform field and a flat surface, Φ_B = BA cos θ."
  - "θ is measured from the area vector (the normal), not from the surface."
  - "∮B·dA = 0 for every closed surface."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the diagrams, the derivations and the worked examples, use the [full study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/13-1-magnetic-flux-study-guide/). The surface-integral form is part of the calculus-based course.

## Recap

- **Magnetic flux** measures how much magnetic field passes through a surface. It is a **scalar**, measured in webers: 1 Wb = 1 T·m².
- The **area vector** A is perpendicular to the surface, with size equal to the area. For an open surface you choose its direction; on a closed surface it points **outward**.
- The **sign** of the flux comes from the dot product: positive when B has a component along A, negative when B points against A, zero when B runs along the surface.
- When B varies over the surface, split the surface into strips or rings where B is constant and integrate.
- μ₀ = 4π × 10⁻⁷ T·m/A.

## Key relationships

| Situation | Flux |
|---|---|
| Uniform B, flat surface | Φ_B = B·A = BA cos θ |
| Surface in the xy-plane, A = A k̂ | Φ_B = B_z A |
| General surface or varying B | Φ_B = ∫B·dA |
| Rectangle beside a long wire (near side d, width b, length ℓ) | Φ_B = (μ₀Iℓ/2π) ln[(d + b)/d] |
| B depends only on radius r, flat disc | Φ_B = ∫B(r) 2πr dr |
| One turn of a long solenoid, radius R | Φ_B = μ₀nI πR² |
| Any closed surface | ∮B·dA = 0 |

## Assumptions

- "Uniform" means B has the same size and direction at every point of the surface.
- The ideal long solenoid has uniform B inside and B ≈ 0 outside.
- "Long" wires are much longer than the distances involved.

## Mistakes to avoid

1. **Angle from the surface.** If B makes 25° with the plane, use θ = 65°.
2. **Dropping the sign.** A half turn changes +BA into −BA; the change is 2BA.
3. **Too much area.** Around a solenoid, only the solenoid's own cross-section carries flux.
4. **Middle-value shortcut.** For B ∝ 1/x, the field at the middle times the area is wrong; integrate.
5. **Zero net flux ⇒ zero field.** Wrong: it means every line that enters also leaves.

## Quick self-check

1. A flat surface of area 0.050 m² is perpendicular to a uniform 0.20 T field. What is the flux through it? *(1.0 × 10⁻² Wb)*
2. The same surface is turned so that its plane lies along the field. What is the flux now? *(Zero: θ = 90°)*
3. What is the net magnetic flux through a closed box that surrounds the north end of a bar magnet? *(Zero, as for every closed surface)*

Next: [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/13-1-magnetic-flux-practice/).
