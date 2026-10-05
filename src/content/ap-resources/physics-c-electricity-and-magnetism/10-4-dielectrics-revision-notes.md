---
resourceId: "mb-ap-physcem-10.4-revision-notes"
title: "Dielectrics: Revision Notes (Physics C: E&M 10.4)"
description: "One-page recap of dielectrics for the calculus-based course: polarization, κ = ε/ε₀, E = E₀/κ, C = κC₀ and what changes with Q fixed or ΔV fixed."
course: "physics-c-electricity-and-magnetism"
unit: 10
topics: ["10.4"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcem-10.4-study-guide"]
learningObjectives:
  - "Recall how a dielectric changes the field, potential difference, capacitance and energy"
  - "Decide whether Q or ΔV is fixed before predicting a change"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcem-10.4-study-guide", "mb-ap-physcem-10.4-practice", "mb-ap-physcem-10.4-checklist"]
next: "mb-ap-physcem-10.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "A polarized dielectric makes a field opposite to the applied field."
  - "Isolated capacitor filled with a dielectric: E = E₀/κ and C = κC₀."
  - "Q fixed: U falls by κ. ΔV fixed: U rises by κ."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the explanations, Figures 1 and 2 and the worked examples, use the [full study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/10-4-dielectrics-study-guide/). This version of the topic is for the calculus-based course.

## Recap

- A dielectric is an insulator. Its charges are bound, so a field only shifts them slightly: the material **polarizes**.
- Non-polar molecules gain induced dipoles; polar molecules partly line up.
- Bound charge appears on the faces: negative next to the positive plate, positive next to the negative plate.
- The field of this bound charge opposes the applied field, so the net field is smaller, but not zero.
- κ = ε/ε₀ has no unit. κ = 1 for a vacuum, about 1.0006 for air, larger for other insulators.
- Filling the gap multiplies C by κ, for any capacitor shape.

## Key relationships

| Quantity | Result |
|---|---|
| Dielectric constant | κ = ε/ε₀ |
| Field in a filled, isolated capacitor | E = E₀/κ |
| Induced surface charge density | σᵢ = σ(1 − 1/κ) |
| Capacitance, parallel plates | C = κC₀ = κε₀A/d = εA/d |
| Isolated (Q fixed), slab inserted | ΔV ÷ κ, E ÷ κ, U ÷ κ |
| Connected (ΔV fixed), slab inserted | Q × κ, E unchanged, U × κ |

## Assumptions behind the results

- The dielectric fills the whole gap and is uniform.
- The plates are large compared with the gap, so edge effects are ignored.
- κ is a constant for the material: it does not depend on the field.

## Mistakes to avoid

1. **Saying the dielectric adds free charge.** Bound charge stays in the dielectric.
2. **Treating a dielectric like a conductor.** It reduces E by κ; it does not make E zero.
3. **"E always falls."** Only when Q is fixed.
4. **"U always rises with C."** With Q fixed, U = Q²/(2C) falls.
5. **Dividing C by κ.** C goes up.

## Quick self-check

1. A 40 pF air capacitor is filled with a material of κ = 2.5. New C? *(100 pF)*
2. An isolated capacitor at 30 V is filled with κ = 3.0. New ΔV? *(10 V)*
3. With a battery connected, what happens to E when a slab is inserted? *(No change)*

Next: [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/10-4-dielectrics-practice/).
