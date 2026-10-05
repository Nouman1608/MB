---
resourceId: "mb-ap-phys1-5.6-revision-notes"
title: "Newton's Second Law in Rotational Form: Revision Notes (Physics 1 5.6)"
description: "One-page recap of the rotational second law for the algebra-based course: α = τ_net / I, functional dependence, separate linear and rotational analyses, and the pulley mistakes that cost marks."
course: "physics-1"
unit: 5
topics: ["5.6"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-phys1-5.6-study-guide"]
learningObjectives:
  - "Recall α = τ_net / I and use it with signs and proportional reasoning"
  - "Spot the common tension, direction and rotational-inertia errors before making them"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-phys1-5.6-study-guide", "mb-ap-phys1-5.6-practice", "mb-ap-phys1-5.6-checklist"]
next: "mb-ap-phys1-5.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1"]
keyPoints:
  - "α = τ_net / I, in the same sense as the net torque."
  - "α ∝ τ_net and α ∝ 1/I."
  - "Write ΣF = ma and Στ = Iα separately; link them with a = Rα."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the derivation, diagrams and worked examples, use the [full study guide](/advanced-course-resources/physics-1/5-6-newtons-second-law-rotational-form-study-guide/). This is the algebra-based course: no calculus is needed.

## Recap

- A non-zero net torque changes a rigid system's angular velocity. **α = τ_net / I.**
- α is **directly proportional** to the net torque and **inversely proportional** to the rotational inertia.
- α has the **same sense** as the net torque (clockwise or counterclockwise), not necessarily the same sense as ω.
- The law comes from F = ma for a point mass: F = m(rα), so rF = (mr²)α.
- A rotating object obeys **two separate laws**: ΣF = m a_cm for its centre of mass and Στ = Iα for its spin.
- A rope that does not slip links them: **a = Rα**.

## Key relationships

| Relationship | Symbols and units | Use it to |
|---|---|---|
| α = τ_net / I, Στ = Iα | rad/s², N·m, kg·m² | find angular acceleration or net torque |
| I = Σmr² | kg·m² | rotational inertia of point masses (extended objects are given) |
| a_T = rα | m/s² | link a rope or rim to the rotation |
| ω = ω₀ + αt, ω² = ω₀² + 2αΔθ | rad/s, rad | follow up with rotational kinematics (constant α) |
| a = mg / (m + I/R²) | hanging mass on a drum | a typical derived result, not one to memorise |

## Assumptions behind the numbers

- The system is **rigid**, so every part has the same α.
- The rope is light and does **not slip**, so a = Rα.
- Axles are frictionless unless a friction torque is stated.
- g = 9.8 m/s².

## Mistakes to avoid

1. **T = mg for an accelerating hanging mass.** T is smaller when the mass speeds up downward.
2. **Equal tensions on both sides of a massive pulley.** They differ; their difference times R equals Iα.
3. **α in the direction of ω.** It follows the net torque.
4. **Counting the axle force's torque.** It acts at the axis: zero lever arm.
5. **Doubling r doubles I.** For point masses, I ∝ r², so it quadruples.
6. **Mixed sign conventions.** Choose "down positive" for the hanging mass and the matching rotation sense for the drum.

## Quick self-check

1. A net torque of 6.0 N·m acts on a wheel with I = 2.0 kg·m². Find α. *(3.0 rad/s²)*
2. A motor exerts 5.0 N·m on a rotor with I = 0.50 kg·m²; friction exerts 1.0 N·m the other way. Find α. *(8.0 rad/s²)*
3. The net torque is tripled and I is doubled. By what factor does α change? *(× 1.5)*
4. A wheel spins clockwise; the net torque is counterclockwise. Is it speeding up? *(No: it slows down.)*

Next: [practice questions](/advanced-course-resources/physics-1/5-6-newtons-second-law-rotational-form-practice/).
