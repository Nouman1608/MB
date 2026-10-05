---
resourceId: "mb-ap-physcem-8.5-revision-notes"
title: "Electric Flux: Revision Notes (Physics C: E&M 8.5)"
description: "One-page recap of electric flux for the calculus-based course: the area vector, Φ = E·A, sign rules, surface integrals and closed surfaces in uniform fields."
course: "physics-c-electricity-and-magnetism"
unit: 8
topics: ["8.5"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcem-8.5-study-guide"]
learningObjectives:
  - "Recall the definition of electric flux and the rules for the area vector"
  - "Spot angle and sign errors before making them"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcem-8.5-study-guide", "mb-ap-physcem-8.5-practice", "mb-ap-physcem-8.5-checklist"]
next: "mb-ap-physcem-8.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Φ_E = E·A = EA cos θ for a uniform field and a flat surface; θ is measured from the area vector."
  - "Closed surface: area vectors point outward, so leaving field lines give positive flux."
  - "Non-uniform E: Φ_E = ∫E·dA, using strips on which E is constant."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the figures, derivations and worked examples, use the [full study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/8-5-electric-flux-study-guide/). This topic is part of the calculus-based Physics C: E&M course.

## Recap

- **Flux** describes how much of a quantity passes through an area. Electric flux is proportional to the number of field lines crossing a surface.
- The **area vector** A has the size of the area and points **perpendicular** to the surface. For an open surface you choose one side; for a closed surface it points **outward**.
- Flux is a **scalar** with a sign. Unit: N·m²/C.
- In a uniform field, the net flux through any closed surface is zero: every line that enters also leaves.

## Key relationships

| Situation | Flux |
|---|---|
| Uniform E, flat surface | Φ_E = E·A = EA cos θ |
| Angle α given between E and the surface | θ = 90° − α, so Φ_E = EA sin α |
| Components, surface in the xy-plane, A = A k̂ | Φ_E = E_z A |
| E varies, or the surface curves | Φ_E = ∫E·dA (strips with constant E) |
| Closed surface | Φ_E = ∮E·dA, outward dA |
| Curved open surface in uniform E | same size as the flux through the flat area across its rim |

## Assumptions behind the results

- "Uniform" means the same size and direction at every point of the surface.
- In the strip method, E must be constant along each strip; choose strips perpendicular to the direction in which E changes.
- Signs depend on the stated area vector. Always say which way A points.

## Mistakes to avoid

1. **Angle from the surface.** θ is measured from the normal.
2. **Dropping the sign.** Entering field lines give negative flux on a closed surface.
3. **Inward normals on closed surfaces.** Always outward.
4. **One value of E for a varying field.** Integrate instead.
5. **Curved area for a dome in a uniform field.** Use the flat rim area, πR².
6. **"Zero net flux means zero field."** A uniform field gives zero net flux through a closed surface, yet E is not zero.

## Quick self-check

1. A uniform 200 N/C field makes 60° with the area vector of a 0.50 m² flat surface. Flux? *(+50 N·m²/C)*
2. What is the flux through a surface parallel to the field? *(Zero)*
3. A cube of side 0.10 m has two faces perpendicular to a uniform 400 N/C field along +x. Flux through each of these faces, and the net flux? *(+4.0 N·m²/C on the +x face, −4.0 N·m²/C on the −x face; net zero)*

Next: [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/8-5-electric-flux-practice/).
