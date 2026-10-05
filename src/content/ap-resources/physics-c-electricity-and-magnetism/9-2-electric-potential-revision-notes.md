---
resourceId: "mb-ap-physcem-9.2-revision-notes"
title: "Electric Potential: Revision Notes (Physics C: E&M 9.2)"
description: "One-page recap of electric potential for the calculus-based course: V = U/q, superposition, standard integrated results, E = −dV/dx and equipotentials."
course: "physics-c-electricity-and-magnetism"
unit: 9
topics: ["9.2"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcem-9.2-study-guide"]
learningObjectives:
  - "Recall the definitions of potential and potential difference and the standard potentials"
  - "Spot sign, scalar-versus-vector and reference-point errors before making them"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcem-9.2-study-guide", "mb-ap-physcem-9.2-practice", "mb-ap-physcem-9.2-checklist"]
next: "mb-ap-physcem-9.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism"]
keyPoints:
  - "V = U/q in volts; ΔU = qΔV."
  - "V adds as a scalar: V = Σkq_i/r_i or ∫k dq/r."
  - "ΔV = −∫E·dl and E_x = −dV/dx; E points to lower V."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the derivations, Figure 1 and the worked examples, use the [full study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/9-2-electric-potential-study-guide/). The integrals here are part of the calculus-based course.

## Recap

- Electric potential V at a point is the potential energy per unit charge a test charge would have there. It depends only on the source charges.
- Potential difference ΔV = V_B − V_A is the change in potential energy per unit charge between two points.
- 1 V = 1 J/C, and 1 V/m = 1 N/C.
- V = 0 at infinity for charge of finite size; for an infinite line or cylinder use differences only.
- Equipotentials are perpendicular to field lines; no work is done moving along one.
- Batteries keep a potential difference between their terminals by separating charge chemically.

## Key relationships

| Situation | Relationship |
|---|---|
| Definition | V = U/q; ΔU = qΔV |
| Point charge | V = kq/r |
| Several point charges | V = Σ kq_i/r_i (scalar sum) |
| Continuous charge | V = ∫ k dq/r |
| Ring on its axis | V = kQ/√(R² + x²) |
| Arc of any angle, at its centre | V = kQ/R |
| Rod on its line, d beyond one end | V = kλ ln[(d + L)/d] |
| Rod on its perpendicular bisector | V = kλ ln{[√(L²/4 + y²) + L/2]/[√(L²/4 + y²) − L/2]} |
| Long wire or outside a long cylinder | V(a) − V(b) = (λ/2πε₀) ln(b/a) |
| Field to potential | V_B − V_A = −∫_A^B E·dl; uniform field: ΔV = −EΔx |
| Potential to field | E_x = −dV/dx |

## Mistakes to avoid

1. **Resolving V into components.** It is a scalar.
2. **V = 0 ⇒ E = 0.** E depends on the slope of V, not its value.
3. **1/r² in V.** Potential goes as 1/r.
4. **Dropping minus signs** in ΔV = −∫E·dl and E_x = −dV/dx.
5. **V(∞) = 0 for an infinite line.** It diverges.
6. **Centimetres in V/m.** Convert to metres before dividing.

## Quick self-check

1. V at 0.30 m from +2.0 nC? *(59.9 V)*
2. How much energy does a 9 V battery give to 2.0 C of charge passing through it? *(18 J)*
3. Equipotentials 20 V apart are 0.050 m apart. Estimate E. *(400 V/m, from high V to low V)*
4. Where does V = 0 between +q and −q? *(Midway; E there is not zero)*

Next: [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/9-2-electric-potential-practice/).
