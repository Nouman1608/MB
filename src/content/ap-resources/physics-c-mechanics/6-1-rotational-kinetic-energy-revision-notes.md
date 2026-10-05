---
resourceId: "mb-ap-physcm-6.1-revision-notes"
title: "Rotational Kinetic Energy: Revision Notes (Physics C: Mechanics 6.1)"
description: "One-page calculus recap of rotational kinetic energy: K = ½Iω² from ½v² dm, the translation-plus-rotation split, energy with the centre of mass at rest, and the usual errors."
course: "physics-c-mechanics"
unit: 6
topics: ["6.1"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcm-6.1-study-guide"]
learningObjectives:
  - "Recall K = ½Iω² and K = ½Mv_cm² + ½I_cm ω², and when each applies"
  - "Spot double counting, unit and sign errors in rotational kinetic energy before making them"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcm-6.1-study-guide", "mb-ap-physcm-6.1-practice", "mb-ap-physcm-6.1-checklist"]
next: "mb-ap-physcm-6.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics"]
keyPoints:
  - "Fixed axis: K = ½Iω² is the whole kinetic energy."
  - "Moving and spinning: K = ½Mv_cm² + ½I_cm ω², with I about the centre of mass."
  - "Zero momentum does not mean zero kinetic energy."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap for the **calculus-based** course (separate from Physics 1, which does not integrate over continuous bodies). For the derivations, graphs and worked examples, use the [full study guide](/advanced-course-resources/physics-c-mechanics/6-1-rotational-kinetic-energy-study-guide/).

## Recap

- Every piece of a rigid body shares one ω. A piece at distance r from the axis moves at **v = rω** (ω in rad/s).
- Adding ½v² dm over the body gives **K = ½ω²∫r² dm = ½Iω²**. For a fixed axis this is the total kinetic energy, not an extra amount.
- For a body that moves and spins, the total splits into **translation of the centre of mass plus rotation about it**. The cross term vanishes because ∫v′ dm = 0 in the centre-of-mass frame.
- A body can have kinetic energy with its **centre of mass at rest** (a flywheel on a fixed axle). Its momentum is zero; its kinetic energy is not.
- Rotational kinetic energy is a **scalar** and never negative. Opposite spins add.

## Key relationships

| Relationship | When to use it | Note |
|---|---|---|
| K = ∫½v² dm | Always | Start here for non-uniform bodies |
| K = ½Iω² | Fixed axis | I about **that** axis |
| K = ½Mv_cm² + ½I_cm ω² | Any rigid motion | I about the **centre of mass** |
| I_pivot = I_cm + Md² | Linking the two | Shows both methods agree |
| ω (rad/s) = rev/min × 2π/60 | Before any calculation | Unit: kg·m²·rad²/s² = J |
| Constant α from rest: K = ½Iα²t² = Iαθ | Graphs | K–t parabola; K–θ straight line |

## Assumptions behind the numbers

- The body is rigid: every piece has the same ω.
- I is about the stated axis; for the split formula, about a parallel axis through the centre of mass.
- Inertial reference frame; air resistance ignored unless stated.

## Mistakes to avoid

1. **Double counting:** ½I_pivot ω² + ½Mv_cm² is wrong.
2. **Tip or rim speed in ½Mv².** Pieces move at different speeds.
3. **rev/min or degrees in K = ½Iω².**
4. **"Centre of mass at rest, so K = 0."**
5. **Giving K a sign or letting opposite spins cancel.**
6. **Uniform-rod formulas for a non-uniform rod.** Integrate with λ(x).
7. **"Larger I always means larger K."** Only at the same ω.

## Quick self-check

1. I = 0.20 kg·m², ω = 5.0 rad/s. Find K. *(½ × 0.20 × 25 = 2.5 J)*
2. M = 2.0 kg, v_cm = 3.0 m/s, I_cm = 0.10 kg·m², ω = 10 rad/s. Find the total K. *(9.0 J + 5.0 J = 14 J)*
3. A flywheel with I = 0.050 kg·m² spins at 600 rev/min. Find K. *(ω = 62.8 rad/s; K = 98.7 J ≈ 99 J)*

Next: [practice questions](/advanced-course-resources/physics-c-mechanics/6-1-rotational-kinetic-energy-practice/).
