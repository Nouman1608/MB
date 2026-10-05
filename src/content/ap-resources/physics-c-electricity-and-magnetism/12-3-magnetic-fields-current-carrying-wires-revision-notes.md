---
resourceId: "mb-ap-physcem-12.3-revision-notes"
title: "Magnetic Fields of Current-Carrying Wires and the Biot-Savart Law: Revision Notes (Physics C: E&M 12.3)"
description: "One-page recap of the Biot-Savart law for the calculus-based course: field direction, finite and long wires, loops, arcs, the loop axis and forces on wires."
course: "physics-c-electricity-and-magnetism"
unit: 12
topics: ["12.3"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcem-12.3-study-guide"]
learningObjectives:
  - "Recall the Biot-Savart law and the standard fields of wires, loops and arcs"
  - "Recall the force on a current-carrying wire and spot direction and unit errors"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcem-12.3-study-guide", "mb-ap-physcem-12.3-practice", "mb-ap-physcem-12.3-checklist"]
next: "mb-ap-physcem-12.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism"]
keyPoints:
  - "dB = (μ₀/4π) I dℓ × r̂ / r²; integrate over the wire."
  - "B circles a wire: right thumb along I, fingers along B."
  - "F = Iℓ × B; parallel currents attract."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the derivations, the figures and the worked examples, use the [full study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/12-3-magnetic-fields-current-carrying-wires-study-guide/). This topic is in the calculus-based course.

## Recap

- Every small piece of current-carrying wire makes a small magnetic field. The Biot-Savart law gives its size and direction; the total field is the integral over the wire.
- The field around a wire is made of circles centred on the wire. It has no component toward, away from or along the wire.
- A piece of wire aimed straight at the point (dℓ parallel to r̂) contributes nothing.
- When contributions point in different directions, use components and symmetry before integrating.
- The course expects calculations on the perpendicular bisector of a straight wire, on the axis of a circular loop, and at the centre of a loop or arc.
- μ₀ = 4π × 10⁻⁷ T·m/A, so μ₀/(2π) = 2 × 10⁻⁷ T·m/A.

## Key relationships

| Situation | Result |
|---|---|
| Biot-Savart law | dB = (μ₀/4π) I dℓ sin θ / r², direction of dℓ × r̂ |
| Finite wire, length L, on its perpendicular bisector at distance a | B = μ₀IL / [2πa√(L² + 4a²)] |
| Long straight wire, distance r | B = μ₀I/(2πr) |
| Centre of a circular loop, radius R (N turns: multiply by N) | B = μ₀I/(2R) |
| Centre of an arc of angle φ in radians | B = μ₀Iφ/(4πR) |
| Axis of a loop, distance z from its centre | B = μ₀IR² / [2(R² + z²)^(3/2)]; ≈ μ₀IR²/(2z³) for z ≫ R |
| Force on a straight wire | F = Iℓ × B, size IℓB sin θ |
| Force on a curved wire | F = ∫ I dℓ × B |
| Two parallel wires, distance d | F/ℓ = μ₀I₁I₂/(2πd); same direction attract |

## Assumptions behind the results

- Steady (constant) currents in thin wires.
- "Long" means the wire's length is much greater than the distance to the point.
- The force results assume the field B is due to other sources; a wire exerts no net force on itself.

## Mistakes to avoid

1. **B pointing away from the wire.** It circles the wire.
2. **Forgetting sin θ.** Leads aimed at the centre give zero field there.
3. **μ₀I/(2πR) at a loop's centre.** The loop result is μ₀I/(2R).
4. **Arc angle in degrees.** Use radians.
5. **Adding magnitudes on the loop axis.** Only the axial components survive.
6. **"Parallel currents repel."** They attract.

## Quick self-check

1. A quarter-circle arc of radius 0.20 m carries 5.0 A. What is B at its centre? *(μ₀I/(8R) = 3.9 × 10⁻⁶ T)*
2. By what factor does B on the axis of a loop fall from z = 0 to z = R? *(1/(2√2) ≈ 0.35)*
3. What is the net force on a closed loop in a uniform field? *(Zero)*

Next: [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/12-3-magnetic-fields-current-carrying-wires-practice/).
