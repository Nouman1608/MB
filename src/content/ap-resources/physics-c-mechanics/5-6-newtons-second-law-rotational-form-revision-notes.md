---
resourceId: "mb-ap-physcm-5.6-revision-notes"
title: "Newton’s Second Law in Rotational Form: Revision Notes (Physics C: Mechanics 5.6)"
description: "One-page recap of rotational dynamics for the calculus-based course: α = Στ/I and its derivation, time-dependent torques by integration, separate linear and rotational equations, and measuring I."
course: "physics-c-mechanics"
unit: 5
topics: ["5.6"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcm-5.6-study-guide"]
learningObjectives:
  - "Recall α = Στ/I, its conditions, and the integral forms for a torque that changes with time"
  - "Spot the common sign, axis and tension errors in rotational dynamics before making them"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcm-5.6-study-guide", "mb-ap-physcm-5.6-practice", "mb-ap-physcm-5.6-checklist"]
next: "mb-ap-physcm-5.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Στ ≠ 0 means ω is changing; α = Στ/I gives the rate."
  - "Write a_cm = ΣF/M and α = Στ/I as two separate equations."
  - "If Στ depends on t, integrate: ω = ω₀ + (1/I)∫Στ dt."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap for the **calculus-based** course (separate from Physics 1). For the derivation, graphs and worked examples, use the [full study guide](/advanced-course-resources/physics-c-mechanics/5-6-newtons-second-law-rotational-form-study-guide/).

## Recap

- A rigid system’s ω changes **only** when the net external torque is not zero.
- **α = Στ/I.** α is proportional to the net torque, has the same sense, and is inversely proportional to I about that axis.
- **Derivation:** F_t = m rα on each piece; multiply by r; add: Στ = (Σmr²)α = Iα. Internal torques cancel in third-law pairs.
- **Two equations, one object:** a_cm = ΣF/M for the center of mass, α = Στ/I for the rotation. Pivot forces appear only in the first.
- State the positive sense of rotation before you start, and keep it.

## Key relationships

| Relationship | Units | Notes |
|---|---|---|
| Στ = Iα | N·m = kg·m²·rad/s² | about a fixed axle or the center of mass |
| I = Σmr² = ∫r² dm; I = I_cm + Md² | kg·m² | depends on the axis (Topic 5.4) |
| α(t) = Στ(t)/I | rad/s² | holds at every instant |
| ω(t) = ω₀ + (1/I)∫₀ᵗ Στ dt | rad/s | area under Στ–t graph ÷ I gives Δω |
| θ(t) = θ₀ + ∫₀ᵗ ω dt | rad | |
| a_t = rα (no slipping string or rim) | m/s² | links a hanging mass to the wheel |
| T = m(g − a) for a mass accelerating downward | N | not mg |

## Assumptions behind the numbers

- Rigid system, one plane of rotation, fixed axis unless stated.
- g = 9.8 m/s². Light strings that do not slip unless stated.
- Constant-α equations only when the net torque is constant.

## Mistakes to avoid

1. **α in the sense of motion.** α follows the net torque.
2. **Wrong axis for I.** Use the parallel axis theorem for an off-center axle.
3. **T = mg for an accelerating hanging mass.**
4. **Leaving out a friction torque** in the net torque.
5. **Ignoring the axle force in ΣF.** It has no torque about the axle, but it is a force.
6. **Greatest ω at greatest torque.** ω peaks when Στ = 0.
7. **Constant-α formulas with Στ(t).** Integrate instead.

## Quick self-check

1. A net torque of 0.60 N·m acts on a wheel with I = 0.15 kg·m². Find α. *(0.60 ÷ 0.15 = 4.0 rad/s²)*
2. The net torque doubles and I halves. By what factor does α change? *(2 ÷ ½ = 4)*
3. A uniform disk (2.0 kg, radius 0.10 m) lies on frictionless ice. A string wound round its rim is pulled with a horizontal 4.0 N force. Find α and a_cm. *(I = 0.010 kg·m², α = 0.40 ÷ 0.010 = 40 rad/s²; a_cm = 4.0 ÷ 2.0 = 2.0 m/s². Two separate equations.)*

Next: [practice questions](/advanced-course-resources/physics-c-mechanics/5-6-newtons-second-law-rotational-form-practice/).
