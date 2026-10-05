---
resourceId: "mb-ap-physcm-7.4-revision-notes"
title: "Energy of Simple Harmonic Oscillators: Revision Notes (Physics C: Mechanics 7.4)"
description: "One-page recap of energy in simple harmonic motion: E = K + U = ½kA², energy against position and time, amplitude from energy, and the effect of changing A, m or k."
course: "physics-c-mechanics"
unit: 7
topics: ["7.4"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcm-7.4-study-guide"]
learningObjectives:
  - "Recall E = ½kA², K = ½k(A² − x²) and how K and U vary with position and time"
  - "Spot the common scaling and system errors in oscillator energy before making them"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcm-7.4-study-guide", "mb-ap-physcm-7.4-practice", "mb-ap-physcm-7.4-checklist"]
next: "mb-ap-physcm-7.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics"]
keyPoints:
  - "E = K + U = ½kA² = ½mv_max², constant with no friction."
  - "K is greatest where U is least (equilibrium); K = 0 at the turning points."
  - "E ∝ A². K and U each repeat every T/2."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap for the **calculus-based** course (separate from Physics 1). For the proofs, graphs and worked examples, use the [full study guide](/advanced-course-resources/physics-c-mechanics/7-4-energy-simple-harmonic-oscillators-study-guide/).

## Recap

- Take the **object–spring system**, so the spring's energy is inside it.
- **E = K + U** is constant: dE/dt = v_x(m dv_x/dt + kx) = 0 by Newton's second law.
- At a turning point, E is all potential: **E = ½kA²**. At equilibrium, E is all kinetic: **E = ½mv_max²**.
- K is a maximum when U is a minimum, and the other way round. The minimum K is zero.
- Changing the amplitude changes the total energy; it does not change the period.

## Key relationships

| Relationship | Units | Notes |
|---|---|---|
| E = K + U | J | constant with no friction or external work |
| U = ½kx² | J | x from equilibrium |
| E = ½kA² = ½mv_max² | J | gives v_max = A√(k/m) = Aω |
| K = ½k(A² − x²) | J | speed at any position |
| K = U at x = ±A/√2 | m | not at ±A/2 |
| U = ½E[1 + cos 2ωt], K = ½E[1 − cos 2ωt] | J | for x = A cos(ωt); each repeats every T/2 |
| A = √(2E/k) = √(x₀² + mv_x0²/k) | m | amplitude from any starting state |
| Vertical spring: U_total = ½ky² + constant | J | y from the hanging equilibrium |

## Assumptions

- Ideal spring, no friction or air resistance, so no energy leaves the system.
- x (or y) measured from the equilibrium position.
- Pendulums: small angles, so U ≈ ½(mg/L)s².

## Mistakes to avoid

1. **E ∝ A.** It is E ∝ A²: double A, four times the energy.
2. **K = U at A/2.** At A/2, U = E/4 and K = 3E/4.
3. **K repeats every T.** K and U repeat every T/2.
4. **More mass, more energy.** At fixed A and k, E is the same; v_max is smaller.
5. **System without the spring.** Then the block's energy changes.
6. **Vertical spring measured from natural length.** Measure from the hanging equilibrium.

## Quick self-check

1. k = 200 N/m, A = 0.050 m. What is E? *(½ × 200 × 0.050² = 0.25 J)*
2. At what fraction of A is U = E/9? *(x = A/3)*
3. A block has v_max = 0.90 m/s. What is its speed at x = A/2? *(v = v_max√(1 − ¼) = 0.78 m/s)*

Next: [practice questions](/advanced-course-resources/physics-c-mechanics/7-4-energy-simple-harmonic-oscillators-practice/).
