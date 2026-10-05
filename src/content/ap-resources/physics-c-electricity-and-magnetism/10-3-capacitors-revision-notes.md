---
resourceId: "mb-ap-physcem-10.3-revision-notes"
title: "Capacitors: Revision Notes (Physics C: E&M 10.3)"
description: "One-page recap of capacitors for the calculus-based course: C = Q/ΔV, parallel-plate, spherical and coaxial results, particles between plates and stored energy."
course: "physics-c-electricity-and-magnetism"
unit: 10
topics: ["10.3"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcem-10.3-study-guide"]
learningObjectives:
  - "Recall the capacitance of the three standard shapes and the stored-energy formulas"
  - "Decide whether Q or ΔV is fixed before predicting a change"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcem-10.3-study-guide", "mb-ap-physcem-10.3-practice", "mb-ap-physcem-10.3-checklist"]
next: "mb-ap-physcem-10.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "C = Q/ΔV, set only by geometry and material."
  - "Parallel plates: E = σ/ε₀ and C = ε₀A/d."
  - "U = Q²/(2C) = ½QΔV = ½C(ΔV)²."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the derivations, Figures 1 and 2 and the worked examples, use the [full study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/10-3-capacitors-study-guide/). This version of the topic is for the calculus-based course.

## Recap

- A capacitor is two separated conductors holding +Q and −Q. Its net charge is zero.
- Capacitance C = Q/ΔV, measured in farads (1 F = 1 C/V). It depends on shape, size and the gap material only.
- Between large parallel plates the two sheet fields, each σ/(2ε₀), add to σ/ε₀. Outside they cancel. The field is uniform except for fringing near the edges.
- Any shape: assume ±Q → Gauss's law for E → integrate for ΔV → C = Q/ΔV.
- A charged particle between plates has constant acceleration qE/m: projectile-style motion, parabolic path.
- The work done to separate the charge is stored as potential energy.
- ε₀ = 8.85 × 10⁻¹² C²/(N·m²); assume an air gap (κ = 1) unless told otherwise.

## Key relationships

| Situation | Result |
|---|---|
| Definition | C = Q/ΔV |
| Parallel plates, field | E = σ/ε₀ = Q/(ε₀A); ΔV = Ed |
| Parallel plates, capacitance | C = ε₀A/d (κε₀A/d with a dielectric) |
| Concentric spheres, radii a < b | C = 4πε₀ab/(b − a); b → ∞ gives 4πε₀a |
| Coaxial cylinders, radii a < b, length L | C = 2πε₀L/ln(b/a) |
| Stored energy | U = ∫(q/C)dq = Q²/(2C) = ½QΔV = ½C(ΔV)² |
| Particle between plates | a = qE/m, constant; across the gap y = ½at² |

## Assumptions behind the results

- Plate separation is much smaller than plate size, so edge effects are ignored.
- Conductors are in electrostatic equilibrium; charge sits on the facing surfaces.
- Gravity is negligible for electrons, protons and ions in typical fields.

## Mistakes to avoid

1. **σ/(2ε₀) between two plates.** Two plates give σ/ε₀.
2. **Thinking C depends on Q or ΔV.** It does not.
3. **Not asking what is fixed.** Isolated: Q fixed. Battery connected: ΔV fixed.
4. **U = QΔV.** Charging stores only ½QΔV.
5. **ε₀A/d for spheres or cylinders.** Use the matching formula unless the gap is thin.

## Quick self-check

1. Plates of area 0.010 m² are 0.50 mm apart in air. What is C? *(1.77 × 10⁻¹⁰ F, or 177 pF)*
2. An isolated capacitor's plate gap is doubled. What happens to E and to U? *(E unchanged; U doubles)*
3. How much energy does a 2.0 μF capacitor store at 50 V? *(2.5 × 10⁻³ J)*

Next: [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/10-3-capacitors-practice/).
