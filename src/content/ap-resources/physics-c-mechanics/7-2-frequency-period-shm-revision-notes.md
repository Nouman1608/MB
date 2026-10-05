---
resourceId: "mb-ap-physcm-7.2-revision-notes"
title: "Frequency and Period of SHM: Revision Notes (Physics C: Mechanics 7.2)"
description: "One-page recap of SHM period and frequency: T = 1/f = 2π/ω, reading ω from d²x/dt² = −ω²x, spring and small-angle pendulum periods, and factors of change."
course: "physics-c-mechanics"
unit: 7
topics: ["7.2"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcm-7.2-study-guide"]
learningObjectives:
  - "Recall the period relationships for SHM, springs and small-angle pendulums"
  - "Spot the common errors with ω, square roots and pendulum conditions"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcm-7.2-study-guide", "mb-ap-physcm-7.2-practice", "mb-ap-physcm-7.2-checklist"]
next: "mb-ap-physcm-7.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "T = 1/f = 2π/ω. Read ω² as the constant in d²x/dt² = −ω²x."
  - "Spring: T = 2π√(m/k). Small-angle pendulum: T = 2π√(ℓ/g)."
  - "Neither depends on amplitude; the pendulum does not depend on mass."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap for the **calculus-based** course (separate from Physics 1). For derivations, figures and worked examples, use the [full study guide](/advanced-course-resources/physics-c-mechanics/7-2-frequency-period-shm-study-guide/).

## Recap

- **Period T**: time for one full cycle (s). **Frequency f**: cycles per second (Hz). **Angular frequency ω**: rad/s.
- Method: apply Newton's second law (or τ = Iα), reach d²x/dt² = −ω²x, read off ω, then T = 2π/ω.
- **Spring**: ω² = k/m. Use the effective k for springs in series or parallel. Gravity does not change T.
- **Simple pendulum**: ω² = g/ℓ for small angles in radians (sin θ ≈ θ). The bob's mass cancels.
- Neither period depends on the amplitude while the SHM model holds.

## Key relationships

| Relationship | Notes |
|---|---|
| f = 1/T; ω = 2πf = 2π/T | units: s, Hz, rad/s |
| d²x/dt² = −ω²x | the constant multiplying x is ω² |
| T = 2π√(m/k) | object on an ideal spring, any orientation |
| T = 2π√(d/g) | vertical spring with static stretch d = mg/k |
| T = 2π√(ℓ/g) | simple pendulum, small angles only |
| T² = (4π²/k)m; T² = (4π²/g)ℓ | straight-line graphs: slope gives k or g |
| k_eff = k₁ + k₂ (parallel); 1/k_eff = 1/k₁ + 1/k₂ (series) | from Topic 2.8 |

## Assumptions behind the numbers

- Ideal, massless springs and light, inextensible strings unless stated.
- No friction or air resistance; g = 9.8 m/s² near Earth's surface.
- A small angle is one where sin θ ≈ θ (θ in radians) is accurate enough.

## Mistakes to avoid

1. **Mixing f and ω.** ω = 2πf.
2. **Forgetting the square root** in factor-of-change questions.
3. **Giving a pendulum a mass dependence** or a spring a g dependence.
4. **Using T = 2π√(ℓ/g) at large angles.**
5. **Dividing one total time by the wrong number of cycles.** Count cycles, not swings past the middle.
6. **Finding k from one reading** when the T²–m graph has an intercept.

## Quick self-check

1. f = 2.5 Hz. Find T and ω. *(0.40 s; 16 rad/s)*
2. m = 0.50 kg on a spring with k = 50 N/m. Find T. *(2π√0.010 = 0.63 s)*
3. A pendulum has ℓ = 2.45 m. Find its small-angle period. *(2π√0.25 = 3.1 s)*
4. A spring oscillator's mass is multiplied by 9. What happens to T? *(× 3)*

Next: [practice questions](/advanced-course-resources/physics-c-mechanics/7-2-frequency-period-shm-practice/).
