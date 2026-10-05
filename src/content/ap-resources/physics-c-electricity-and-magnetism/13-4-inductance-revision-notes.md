---
resourceId: "mb-ap-physcem-13.4-revision-notes"
title: "Inductance: Revision Notes (Physics C: E&M 13.4)"
description: "One-page recap of inductance for the calculus-based course: L = NΦ/I, the solenoid formula and its core, ℰ = −L dI/dt, stored energy ½LI² and where that energy goes."
course: "physics-c-electricity-and-magnetism"
unit: 13
topics: ["13.4"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcem-13.4-study-guide"]
learningObjectives:
  - "Recall the definition of inductance, the solenoid result and the energy formula"
  - "Spot sign, squaring and energy errors before making them"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcem-13.4-study-guide", "mb-ap-physcem-13.4-practice", "mb-ap-physcem-13.4-checklist"]
next: "mb-ap-physcem-13.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism"]
keyPoints:
  - "L = NΦ_B/I; for a long solenoid L = μN²A/ℓ."
  - "ℰ = −L dI/dt: only a changing current gives an emf."
  - "U = ½LI², stored in the magnetic field."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the derivations, Figure 1 and the worked examples, use the [full study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/13-4-inductance-study-guide/). This topic is in the calculus-based course.

## Recap

- **Inductance** is a conductor's tendency to oppose a change in its own current (self-induction, from Faraday's and Lenz's laws).
- It depends on the conductor's physical form. Straight wires are modelled as having zero inductance; a solenoid is an **inductor**.
- A solenoid's inductance depends on the number of turns, the length, the cross-sectional area and the permeability of the core.
- The self-induced emf depends on the **rate of change** of current, not on the current.
- An inductor stores energy in its magnetic field. The energy can later be dissipated in a resistor or passed to a capacitor, with total energy conserved.
- μ₀ = 4π × 10⁻⁷ T·m/A; 1 H = 1 V·s/A = 1 Wb/A = 1 Ω·s.

## Key relationships

| Quantity | Expression | Notes |
|---|---|---|
| Definition of inductance | L = NΦ_B/I | flux linkage per ampere |
| Long solenoid | L = μ_core N²A/ℓ | μ_core = μ₀ for air; L ∝ N² |
| Self-induced emf | ℰ = −L dI/dt | minus sign = Lenz's law |
| Power into the inductor | P = LI dI/dt | positive while the current rises |
| Stored energy | U = ½LI² | from integrating P dt |
| Energy released, I₁ → I₂ | ½L(I₁² − I₂²) | not ½L(I₁ − I₂)² |

## Assumptions behind the results

- The solenoid is long compared with its radius, so the field inside is uniform and the field outside is negligible.
- The core's permeability is constant (L does not depend on I).
- An "ideal" inductor has no resistance.

## Mistakes to avoid

1. **"An inductor opposes current."** It opposes a change in current.
2. **Using I instead of dI/dt** for the emf.
3. **Forgetting N²** in the solenoid formula.
4. **Energy released as ½L(ΔI)².** Subtract the two energies instead.
5. **Wrong emf direction.** Against the current while it rises; along it while it falls.

## Quick self-check

1. The current in a 2.0 H inductor rises at 5.0 A/s. What is the size of the self-induced emf? *(10 V, opposing the current)*
2. How much energy does a 0.50 H inductor store at 4.0 A? *(4.0 J)*
3. A solenoid's turns are tripled with nothing else changed. By what factor does L change? *(× 9)*

Next: [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/13-4-inductance-practice/).
