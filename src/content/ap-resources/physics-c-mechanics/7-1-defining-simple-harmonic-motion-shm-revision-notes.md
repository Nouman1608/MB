---
resourceId: "mb-ap-physcm-7.1-revision-notes"
title: "Defining Simple Harmonic Motion (SHM): Revision Notes (Physics C: Mechanics 7.1)"
description: "One-page recap of what makes motion simple harmonic: equilibrium, restoring force F = −kx, the equation d²x/dt² = −(k/m)x, shifted equilibria and k_eff from d²U/dx²."
course: "physics-c-mechanics"
unit: 7
topics: ["7.1"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcm-7.1-study-guide"]
learningObjectives:
  - "Recall the SHM condition and the equation of motion it leads to"
  - "Spot the common errors in deciding whether a system is in SHM"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcm-7.1-study-guide", "mb-ap-physcm-7.1-practice", "mb-ap-physcm-7.1-checklist"]
next: "mb-ap-physcm-7.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "SHM: m a_x = −kΔx, with Δx measured from equilibrium and k constant."
  - "Newton's second law gives d²x/dt² = −(k/m)x, the signature of SHM."
  - "Near a stable minimum of U(x), k_eff = d²U/dx²."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap for the **calculus-based** course (separate from Physics 1). For explanations, figures and worked examples, use the [full study guide](/advanced-course-resources/physics-c-mechanics/7-1-defining-simple-harmonic-motion-shm-study-guide/).

## Recap

- **Periodic motion** repeats in equal time intervals. **SHM** is a special case of it.
- The **equilibrium position** is where the net force is zero. Measure displacement x from there.
- A **restoring force** points opposite to the displacement, back toward equilibrium.
- **SHM** happens when the restoring (net) force is **proportional** to the displacement: m a_x = −kΔx, with Δx measured from equilibrium (F_net = −kx when x = 0 is at equilibrium).
- A **constant** extra force (such as gravity on a vertical spring) only shifts the equilibrium; the motion is still SHM with the same k.
- Near a **stable** equilibrium of any smooth U(x), small oscillations are approximately SHM.

## Key relationships

| Relationship | Meaning |
|---|---|
| m a_x = −kΔx | SHM condition: Newton's second law with a restoring force (Δx from equilibrium, k > 0 and constant) |
| F_net,x = −kx | the same condition with the origin at equilibrium |
| d²x/dt² = −(k/m)x | Newton's second law for SHM; any variable obeying this form is in SHM |
| F₀ − kx = −k(x − F₀/k) | constant force F₀ shifts equilibrium to x_e = F₀/k |
| d = mg/k | static stretch of a vertical spring; net force about equilibrium is −ky |
| F_x = −dU/dx; k_eff = d²U/dx² at a minimum | small oscillations about a stable equilibrium |
| d²θ/dt² = −(g/ℓ) sin θ ≈ −(g/ℓ)θ | simple pendulum, small angles in radians |

## Assumptions behind the numbers

- Ideal (massless, linear) springs; smooth surfaces; no air resistance unless stated.
- g = 9.8 m/s². Angles in radians for sin θ ≈ θ.
- "Small oscillation" means displacements small enough that the linear force model is accurate.

## Mistakes to avoid

1. **Calling any periodic motion SHM.** Test the force law.
2. **Using the spring force as the restoring force** when gravity also acts. Use the net force.
3. **Measuring x from the relaxed spring length** when a constant force shifts equilibrium.
4. **Missing the sign.** F = +kx is not restoring; the equilibrium is unstable.
5. **Applying k_eff = U″ at a maximum.** U″ < 0 there: no oscillation.
6. **Using degrees** in sin θ ≈ θ.

## Quick self-check

1. A 0.25 kg object has F_net = −(50 N/m)x. What is its acceleration at x = 0.040 m? *(−8.0 m/s²)*
2. A 0.50 kg block hangs from a spring with k = 98 N/m. How far is the spring stretched at equilibrium? *(0.050 m)*
3. U(x) = (5.0 J/m²)(x − 0.20 m)². Is this SHM? About where, and with what k? *(Yes, about x = 0.20 m, k = d²U/dx² = 10 N/m)*

Next: [practice questions](/advanced-course-resources/physics-c-mechanics/7-1-defining-simple-harmonic-motion-shm-practice/).
