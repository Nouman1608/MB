---
resourceId: "mb-ap-physcem-13.2-revision-notes"
title: "Electromagnetic Induction: Revision Notes (Physics C: E&M 13.2)"
description: "One-page recap of Faraday's and Lenz's laws for the calculus-based course: emf from changing field, area or angle, coils, flux graphs and induced electric fields."
course: "physics-c-electricity-and-magnetism"
unit: 13
topics: ["13.2"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcem-13.2-study-guide"]
learningObjectives:
  - "Recall Faraday's law, Lenz's law and the special cases for changing field, area and angle"
  - "Spot direction, sign and turns errors before making them"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcem-13.2-study-guide", "mb-ap-physcem-13.2-practice", "mb-ap-physcem-13.2-checklist"]
next: "mb-ap-physcem-13.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism"]
keyPoints:
  - "ℰ = −N dΦ_B/dt: only a changing flux induces an emf."
  - "Lenz's law: the induced current opposes the change in flux."
  - "∮E·dl = −dΦ_B/dt: a changing B creates a circulating, non-conservative E."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the figures, the derivations and the worked examples, use the [full study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/13-2-electromagnetic-induction-study-guide/). Differentiating a time-dependent flux and the induced electric field belong to the calculus-based course.

## Recap

- A **changing magnetic flux** through a loop induces an **emf** around it (Faraday's law). Steady flux, however large, induces nothing.
- In a coil or long solenoid of N turns, the total emf is N times the emf of one turn.
- The flux Φ_B = BA cos θ can change through B, through A or through θ.
- **Lenz's law:** the induced current creates a field that opposes the **change** in flux. Find the direction with the right-hand rule.
- The emf graph is −N times the gradient of the flux-per-turn graph.
- A changing magnetic field creates an **induced electric field** that circulates round it, even in empty space.
- Maxwell's equations predict electromagnetic waves at c = 1/√(μ₀ε₀) = 3.00 × 10⁸ m/s (not derived in the course).

## Key relationships

| Situation | Emf |
|---|---|
| General (N turns) | ℰ = −N dΦ_B/dt |
| Field changes, area fixed | size of ℰ = NA dB⊥/dt |
| Area changes, field fixed | size of ℰ = NB dA⊥/dt |
| Rod of length L sliding at speed v on rails | size of ℰ = BLv |
| Coil rotating at ω (θ = ωt) | ℰ = NBAω sin ωt; peak NBAω |
| Induced current in a loop of resistance R | I = (size of ℰ)/R |
| Field form (Maxwell's third equation) | ∮E·dl = −dΦ_B/dt |
| Induced E, inside / outside a solenoid of radius R | E = (r/2) dB/dt / E = (R²/2r) dB/dt |

## Lenz's law in four steps

1. Direction of the external field through the loop.
2. Is that flux increasing or decreasing?
3. Increasing: induced field opposite. Decreasing: induced field the same way.
4. Right-hand rule: thumb along the induced field inside the loop, fingers give the current.

## Mistakes to avoid

1. **"Big B means big emf."** Only dΦ_B/dt matters.
2. **"Induced field always opposes B."** It opposes the change.
3. **Forgetting N**, or forgetting that +Φ to −Φ is a change of 2Φ.
4. **Maximum flux ⇒ maximum emf.** For a rotating coil the emf peaks when the flux is zero.
5. **Treating the induced E as conservative.** Its loop integral is the emf, not zero.

## Quick self-check

1. The flux through each turn of a 100-turn coil changes at 2.0 × 10⁻³ Wb/s. What is the size of the emf? *(0.20 V)*
2. A rod 0.50 m long slides at 3.0 m/s on rails in a perpendicular 0.20 T field. What is the emf? *(0.30 V)*
3. The flux out of the page through a loop is decreasing. Which way does the induced current flow, as you look at the page? *(Anticlockwise, so that its field inside points out of the page)*

Next: [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/13-2-electromagnetic-induction-practice/).
