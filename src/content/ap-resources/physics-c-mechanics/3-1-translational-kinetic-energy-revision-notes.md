---
resourceId: "mb-ap-physcm-3.1-revision-notes"
title: "Translational Kinetic Energy: Revision Notes (Physics C: Mechanics 3.1)"
description: "One-page recap of translational kinetic energy for the calculus-based course: K = ½mv² from components, factor-of-change rules, dK/dt = m v_x a_x, graph shapes and frame dependence."
course: "physics-c-mechanics"
unit: 3
topics: ["3.1"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcm-3.1-study-guide"]
learningObjectives:
  - "Recall K = ½mv², its unit and how to use velocity components"
  - "Spot the common kinetic-energy errors before making them"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcm-3.1-study-guide", "mb-ap-physcm-3.1-practice", "mb-ap-physcm-3.1-checklist"]
next: "mb-ap-physcm-3.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "K = ½mv² is a scalar and never negative; square the components first."
  - "K ∝ v²: speed × 2 means K × 4."
  - "dK/dt = m v_x a_x: K rises when v_x and a_x share a sign."
  - "Different frames give different K, and can give different ΔK."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap for the **calculus-based** course (separate from Physics 1). For explanations, a graph and worked examples, use the [full study guide](/advanced-course-resources/physics-c-mechanics/3-1-translational-kinetic-energy-study-guide/).

## Recap

- **Translational kinetic energy** is the energy of motion from place to place: K = ½mv². For a system, use the speed of its centre of mass.
- Unit: the joule, 1 J = 1 kg·m²/s². Mass in kg, speed in m/s.
- K is a **scalar**. It depends on speed only, never on direction. K ≥ 0; ΔK can have either sign.
- K depends on the **reference frame**: observers moving relative to each other measure different speeds, so different K.

## Key relationships

| Relationship | Meaning |
|---|---|
| K = ½mv² | definition; v is speed |
| v² = v_x² + v_y² + v_z² | square components, then add |
| v = √(2K/m) | speed from K |
| K ∝ m (fixed v); K ∝ v² (fixed m) | factor-of-change rules |
| dK/dt = m v_x a_x (1D); m **v** · **a** in general | sign tells whether K rises or falls |
| K′ = ½m\|**v** − **u**\|² | K seen from a frame moving at **u** |

**Graph shapes.** K–v: parabola through the origin. K–v²: straight line, slope ½m. K–m at fixed v: straight line, slope ½v². K–t for a projectile: U-shape with a minimum of ½mv_x² at the top, not zero.

## Assumptions behind the numbers

- The object is modelled as a point (or a system's centre of mass); rotation is ignored until Unit 6.
- One inertial frame for the whole problem unless the question compares frames.
- Free fall: a_y = −g with g = 9.8 m/s² (+y upward), air resistance ignored.

## Mistakes to avoid

1. **K with a sign or direction.** It has neither.
2. **Doubling v doubles K.** It quadruples K.
3. **ΔK = ½m(Δv)².** Compute K_f − K_i.
4. **Adding velocity components as numbers.** Use v² = v_x² + v_y².
5. **K = 0 at the top of a projectile path.** K_top = ½mv_x².
6. **Mass in grams.** Convert to kg.
7. **Mixing frames.** Measure every speed relative to the same observer.

## Quick self-check

1. What is K for a 0.060 kg ball at 25 m/s? *(½ × 0.060 × 625 = 19 J; 18.75 J)*
2. A 2.0 kg object has **v** = (3.0, −4.0, 12) m/s. Find K. *(v² = 9 + 16 + 144 = 169 m²/s², so K = 169 J ≈ 170 J)*
3. K of a cart is multiplied by 4 at the same mass. By what factor did its speed change? *(× 2)*
4. A 1.5 kg cart has v_x = +4.0 m/s and a_x = −2.0 m/s². Find dK/dt. *(1.5 × 4.0 × (−2.0) = −12 J/s; K is falling)*

Next: [practice questions](/advanced-course-resources/physics-c-mechanics/3-1-translational-kinetic-energy-practice/).
