---
resourceId: "mb-ap-phys1-6.1-revision-notes"
title: "Rotational Kinetic Energy: Revision Notes (Physics 1 6.1)"
description: "One-page recap of rotational kinetic energy for the algebra-based course: K = ½Iω², total kinetic energy of a system that moves and spins, units, scalar nature and the mistakes that cost marks."
course: "physics-1"
unit: 6
topics: ["6.1"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-phys1-6.1-study-guide"]
learningObjectives:
  - "Recall K = ½Iω² and K_total = ½Mv_cm² + ½I_cm ω² and use them with ω in rad/s"
  - "Spot unit, double-counting and factor-of-change errors before making them"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-phys1-6.1-study-guide", "mb-ap-phys1-6.1-practice", "mb-ap-phys1-6.1-checklist"]
next: "mb-ap-phys1-6.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1"]
keyPoints:
  - "K_rot = ½Iω², with ω in rad/s."
  - "Moving and spinning: K_total = ½Mv_cm² + ½I_cm ω²."
  - "K is a scalar: never negative, and it adds as plain numbers."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the derivation, diagrams and worked examples, use the [full study guide](/advanced-course-resources/physics-1/6-1-rotational-kinetic-energy-study-guide/). This is the algebra-based course: no calculus is needed.

## Recap

- Every piece of a spinning rigid system moves at v = rω, so every piece has ordinary kinetic energy ½mv².
- Adding those energies gives **K = ½Iω²**, where I = Σmr². For a fixed axis, this is the object's whole kinetic energy, not an extra amount.
- A system that moves **and** spins has translational kinetic energy (centre of mass) plus rotational kinetic energy (spin about the centre of mass).
- A flywheel on a fixed axle has kinetic energy even though its centre of mass is at rest and its total momentum is zero.
- Rotational kinetic energy is a **scalar**. Spinning clockwise or counterclockwise makes no difference to K.

## Key relationships

| Relationship | Symbols and units | Use it to |
|---|---|---|
| v = rω | v in m/s, r in m, ω in rad/s | find the speed of a point at distance r |
| I = Σmr² | kg·m² | rotational inertia of a few point objects |
| K = ½Iω² | J | rotational kinetic energy about a given axis |
| K_total = ½Mv_cm² + ½I_cm ω² | J | an object that moves and spins |
| I = I_cm + Md² | kg·m² | link the pivot and centre-of-mass descriptions |
| ω = rev/min × 2π ÷ 60 | rad/s | convert machine speeds |

**Factors of change:** ω × 2 → K × 4; ω × 3 → K × 9; I × 2 → K × 2. A hoop (MR²) stores twice the energy of a disc (½MR²) of the same mass and radius at the same ω.

## Assumptions behind the numbers

- The system is **rigid**: every part has the same ω and keeps its distance from the axis.
- Small objects are treated as **points**, so I = mr² for each one.
- Rotational inertias of extended objects (hoops, discs, rods) are **given**.
- Rotation happens in one plane about one axis.

## Mistakes to avoid

1. **Using rev/min or degrees per second.** Convert to rad/s first.
2. **Double counting.** About a fixed pivot use ½I_pivot ω² alone; otherwise use ½Mv_cm² + ½I_cm ω². Never mix the two.
3. **"No centre-of-mass motion, so no kinetic energy."** Spinning objects have kinetic energy.
4. **Making K negative** for clockwise rotation.
5. **Treating K as proportional to ω.** It is proportional to ω².
6. **Ignoring mass distribution.** Same mass, same ω, different I gives different K.

## Quick self-check

1. A wheel with I = 0.40 kg·m² spins at 5.0 rad/s. What is its kinetic energy? *(5.0 J)*
2. Its angular velocity is halved. By what factor does K change? *(× ¼)*
3. A 2.0 kg ball moves at 3.0 m/s and spins at 30 rad/s, with I_cm = 0.010 kg·m². What is its total kinetic energy? *(9.0 J + 4.5 J = 13.5 J)*

Next: [practice questions](/advanced-course-resources/physics-1/6-1-rotational-kinetic-energy-practice/).
