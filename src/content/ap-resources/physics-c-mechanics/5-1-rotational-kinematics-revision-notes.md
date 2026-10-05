---
resourceId: "mb-ap-physcm-5.1-revision-notes"
title: "Rotational Kinematics: Revision Notes (Physics C: Mechanics 5.1)"
description: "One-page calculus recap of rotational kinematics about a fixed axis: ω = dθ/dt, α = dω/dt, integrals with initial conditions, rotation graphs, and when the constant-α equations apply."
course: "physics-c-mechanics"
unit: 5
topics: ["5.1"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcm-5.1-study-guide"]
learningObjectives:
  - "Recall ω = dθ/dt, α = dω/dt and the integral forms with initial conditions"
  - "Spot the common unit, sign and calculus errors in rotational kinematics before making them"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcm-5.1-study-guide", "mb-ap-physcm-5.1-practice", "mb-ap-physcm-5.1-checklist"]
next: "mb-ap-physcm-5.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Differentiate down: θ → ω → α. Integrate up, adding initial conditions."
  - "Constant-α equations only when α is constant."
  - "Work in radians; state which sense (clockwise or counterclockwise) is positive."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap for the **calculus-based** course (separate from Physics 1, which uses no calculus). For explanations, graphs and worked examples, use the [full study guide](/advanced-course-resources/physics-c-mechanics/5-1-rotational-kinematics-study-guide/).

## Recap

- A **rigid system** keeps its shape, but its points move in different directions as it turns, so it cannot be modelled as one object. If the rotation does not matter for the question, track the centre of mass and use the object model instead.
- Rotation about **one fixed axis** is one-dimensional: θ plays the part of x.
- State the **positive sense** first, for example "counterclockwise, seen from above, is positive". Directions are only ever clockwise or counterclockwise.
- All points of a rigid system share the **same θ, ω and α**.
- **Same signs of ω and α: spinning faster. Opposite signs: spinning slower.**

## Key relationships

| Relationship | Units | Graph meaning |
|---|---|---|
| Δθ = θ − θ₀ | rad | change in θ–t graph |
| ω = dθ/dt | rad/s | tangent slope of θ–t graph |
| α = dω/dt = d²θ/dt² | rad/s² | tangent slope of ω–t graph |
| ω(t) = ω₀ + ∫₀ᵗ α dt | rad/s | signed area under α–t graph gives Δω |
| θ(t) = θ₀ + ∫₀ᵗ ω dt | rad | signed area under ω–t graph gives Δθ |
| ω = ω₀ + αt; θ = θ₀ + ω₀t + ½αt²; ω² = ω₀² + 2α(θ − θ₀) | — | constant α only |
| 1 rev = 2π rad = 360°; rpm × 2π/60 = rad/s | — | convert before calculus |

## Assumptions behind the numbers

- One fixed axis; the system is rigid (it does not bend or stretch).
- Coefficients in θ(t) or α(t) carry units (in θ = 0.60t², the 0.60 is in rad/s²).
- From rest at constant α: t = ω/α and Δθ = ω²/(2α). So doubling the final ω doubles the time and quadruples the angle.

## Mistakes to avoid

1. **Constant-α equations with α(t).** Integrate instead.
2. **Missing ω₀ or θ₀** after integrating.
3. **rpm or degrees inside a derivative or integral.** Convert to rad/s and rad.
4. **Negative α = slowing down.** Compare the signs of ω and α.
5. **ω = 0 so α = 0.** Check α separately.
6. **∫ω dt as total angle turned.** Split where ω = 0 and add sizes.
7. **Giving outer points a bigger ω.** Same ω for all points; only linear speeds differ (Topic 5.2).

## Quick self-check

1. θ(t) = 2.0t³ (rad, t in s). What is ω at t = 1.5 s? *(dθ/dt = 6.0t² = 13.5 rad/s, about 14 rad/s)*
2. Counterclockwise positive: ω₀ = −6.0 rad/s, α = +2.0 rad/s² (constant). Describe the motion and find ω at 5.0 s. *(Clockwise, slowing, stops at 3.0 s, then counterclockwise and speeding up; ω = +4.0 rad/s at 5.0 s)*
3. Convert 450 rpm to rad/s. *(450 × 2π/60 ≈ 47 rad/s)*

Next: [practice questions](/advanced-course-resources/physics-c-mechanics/5-1-rotational-kinematics-practice/).
