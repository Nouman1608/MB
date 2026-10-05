---
resourceId: "mb-ap-physcem-11.1-revision-notes"
title: "Electric Current: Revision Notes (Physics C: E&M 11.1)"
description: "One-page recap of electric current for the calculus-based course: I = dq/dt, drift velocity, I = nqv_dA, current density, E = ρJ, integrating J and conventional current."
course: "physics-c-electricity-and-magnetism"
unit: 11
topics: ["11.1"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcem-11.1-study-guide"]
learningObjectives:
  - "Recall the definitions and relationships for current, drift velocity and current density"
  - "Spot direction, area and integration errors before making them"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcem-11.1-study-guide", "mb-ap-physcem-11.1-practice", "mb-ap-physcem-11.1-checklist"]
next: "mb-ap-physcem-11.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism"]
keyPoints:
  - "I = dq/dt; q = ∫I dt is the area under an I–t graph."
  - "I = nqv_dA; J = nqv_d is a vector; E = ρJ."
  - "Non-uniform J: I = ∫J·dA, with dA = 2πr dr for a round wire."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the derivations, Figures 1 and 2 and the worked examples, use the [full study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/11-1-electric-current-study-guide/). This guide is for the calculus-based course.

## Recap

- **Current** is the rate at which charge crosses a cross-section of a conductor. 1 A = 1 C/s.
- Charge moves because a potential difference (from a source of emf, ℰ) sets up a field inside the conductor.
- Free electrons move randomly at about 10⁶ m/s. The field adds a tiny average **drift velocity**, often below 1 mm/s.
- **Zero current** means zero **net** motion of the carriers, not carriers at rest.
- **Current density** J is a vector pointing the way positive charge flows. For electrons it points opposite to their drift.
- Current has a direction along the wire but is a **scalar**: currents at a junction add as numbers.
- **Conventional current** is the direction positive charge would move. In metal wires, electrons move the other way.

## Key relationships

| Quantity | Relationship | Notes |
|---|---|---|
| Current | I = dq/dt | Charge passed: q = ∫I dt |
| Current in terms of carriers | I = nqv_dA | n in m⁻³, q is one carrier's charge |
| Uniform current density | J = I/A | A/m², A perpendicular to the flow |
| Current density (vector) | J = nqv_d | For electrons, q = −e, so J is opposite to v_d |
| Field in a conductor | E = ρJ | ρ is resistivity (Ω·m), not charge density |
| Non-uniform current density | I = ∫J·dA | Round wire: I = ∫₀ᴿ J(r) 2πr dr |

## Assumptions behind the results

- All carriers have the same charge and the same average drift velocity.
- J is perpendicular to the cross-section you choose (otherwise use the dot product).
- The material is uniform, so n and ρ are the same everywhere in it.

## Mistakes to avoid

1. **Treating current as a vector.** 2 A and 3 A into a junction give 5 A out, not 3.6 A.
2. **Electron direction = current direction.** They are opposite.
3. **I = JA for a varying J.** Integrate over rings.
4. **Unit slips.** 1 mm² = 10⁻⁶ m²; use the radius, not the diameter, in πr².
5. **"Charges are at rest when I = 0."** They move randomly with no net flow.

## Quick self-check

1. A steady 0.50 A flows for 60 s. How much charge passes? *(30 C)*
2. The same current flows through a wire with three times the area, same material. What happens to v_d? *(It falls to one third)*
3. How many electrons carry 1.0 C? *(6.25 × 10¹⁸)*

Next: [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/11-1-electric-current-practice/).
