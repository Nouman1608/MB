---
resourceId: "mb-ap-physcm-7.3-revision-notes"
title: "Representing and Analyzing SHM: Revision Notes (Physics C: Mechanics 7.3)"
description: "One-page calculus recap of simple harmonic motion: d²x/dt² = −ω²x, x = A cos(ωt + φ₀), velocity and acceleration by differentiation, zeros and extremes, and resonance."
course: "physics-c-mechanics"
unit: 7
topics: ["7.3"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcm-7.3-study-guide"]
learningObjectives:
  - "Recall the SHM differential equation, its solution and the derived results for v_x, a_x, v_max and a_max"
  - "Spot the common phase, unit and graph errors in SHM before making them"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcm-7.3-study-guide", "mb-ap-physcm-7.3-practice", "mb-ap-physcm-7.3-checklist"]
next: "mb-ap-physcm-7.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics"]
keyPoints:
  - "Newton's second law → d²x/dt² = −ω²x → x = A cos(ωt + φ₀)."
  - "v_max = Aω at equilibrium; a_max = Aω² at the turning points."
  - "Period is independent of amplitude. Resonance: driving at the natural frequency makes the amplitude grow."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap for the **calculus-based** course (separate from Physics 1, which uses no calculus). For explanations, graphs and worked examples, use the [full study guide](/advanced-course-resources/physics-c-mechanics/7-3-representing-analyzing-shm-study-guide/).

## Recap

- Measure x from **equilibrium** (net force zero) and state the positive direction.
- Newton's second law with a restoring force F_x = −kx gives **d²x/dt² = −ω²x**, ω = √(k/m). Any system that reduces to this form is SHM.
- The solution is **x = A cos(ωt + φ₀)**. You must know it and use it; you do not have to prove it.
- A and φ₀ come from the start (x₀ and v_x0). ω comes from the system.
- Differentiate for v_x and a_x. Read zeros and extremes from the table below.
- **Resonance:** a sinusoidal driving force at the natural frequency adds energy every cycle, so the amplitude grows.

## Key relationships

| Relationship | Units | Notes |
|---|---|---|
| d²x/dt² = −ω²x | m/s² | from Newton's second law; ω² is the constant |
| x = A cos(ωt + φ₀) | m | sine form: φ₁ = φ₀ + π/2 |
| v_x = −Aω sin(ωt + φ₀) | m/s | slope of x–t graph |
| a_x = −Aω² cos(ωt + φ₀) = −ω²x | m/s² | a_x–x graph: straight line, slope −ω² |
| v_max = Aω; a_max = Aω² | m/s; m/s² | at x = 0 and at x = ±A |
| \|v_x\| = ω√(A² − x²) | m/s | speed at any position |
| A = √(x₀² + (v_x0/ω)²); cos φ₀ = x₀/A, sin φ₀ = −v_x0/(Aω) | m; rad | use both signs for the quadrant |
| T = 2π/ω = 1/f | s | no A in it |

## Assumptions

- Restoring force exactly proportional to displacement; no friction.
- Angles in radians (ω in rad/s).
- Equilibrium is the origin, so x(t) has no constant offset.

## Mistakes to avoid

1. **Fastest at the ends.** The object is at rest at x = ±A.
2. **a_x = 0 so v_x = 0.** At equilibrium a_x = 0 and the speed is greatest.
3. **Bigger A, longer T.** T does not depend on A in SHM.
4. **v_max = Af.** It is Aω, with ω = 2πf.
5. **Degree mode.** ωt + φ₀ is in radians.
6. **φ₀ from tan alone.** Check the signs of cos φ₀ and sin φ₀.
7. **Any periodic motion is SHM.** Only if the restoring force is proportional to displacement.

## Quick self-check

1. x = (0.20 m) cos(5.0t). What are v_max and a_max? *(Aω = 1.0 m/s; Aω² = 5.0 m/s²)*
2. A cart starts at x₀ = 0 with v_x0 = −0.60 m/s, and ω = 4.0 rad/s. What is A, and which form of x(t) is simplest? *(A = 0.15 m; x = −(0.15 m) sin(4.0t))*
3. An a_x–x graph is a straight line through the origin with slope −49 s⁻². What is the period? *(ω = 7.0 rad/s, T = 2π/7.0 = 0.90 s)*

Next: [practice questions](/advanced-course-resources/physics-c-mechanics/7-3-representing-analyzing-shm-practice/).
