---
resourceId: "mb-ap-physcem-10.2-revision-notes"
title: "Redistribution of Charge Between Conductors: Revision Notes (Physics C: E&M 10.2)"
description: "One-page recap of charge sharing between conductors: equal potential on contact, spheres joined by a wire, nested conductors, ground and the induced charge on a grounded sphere."
course: "physics-c-electricity-and-magnetism"
unit: 10
topics: ["10.2"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcem-10.2-study-guide"]
learningObjectives:
  - "Recall the equal-potential and conservation rules for conductors in contact"
  - "Predict charge flow on connecting or grounding conductors"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcem-10.2-study-guide", "mb-ap-physcem-10.2-practice", "mb-ap-physcem-10.2-checklist"]
next: "mb-ap-physcem-10.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Contact: equal potential plus conservation of charge."
  - "Spheres on a wire: q ∝ R, σ ∝ 1/R, surface E ∝ 1/R."
  - "Ground: V = 0, unlimited charge supply."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the derivations, Figure 1 and the worked examples, use the [full study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/10-2-redistribution-charge-between-conductors-study-guide/). This topic is part of the calculus-based course.

## Recap

- Conductors in electrical contact become one conductor, so they end at **one potential**. The flow is effectively instant.
- Total charge is conserved. Electrons move towards higher potential (positive charge "flows" from high V to low V).
- Equal charges result only for identical conductors.
- A charged conductor joined to a hollow conductor that surrounds it loses **all** its charge to the outer surface.
- **Ground** is an ideal reference at V = 0 that can absorb or supply any amount of charge without changing its potential.
- Grounding an isolated conductor makes it neutral. Grounding a conductor near a charge leaves an **induced charge of opposite sign**.
- To keep an induced charge: break the ground first, then remove the nearby charge.

## Key relationships

| Situation | Result |
|---|---|
| Any conductors in contact | V₁ = V₂; q₁ + q₂ = Q_total |
| Distant spheres joined by a thin wire | q₁/R₁ = q₂/R₂; q₁ = QR₁/(R₁ + R₂) |
| Same pair: densities and fields | σ₁/σ₂ = E₁/E₂ = R₂/R₁; E = V/R at each surface |
| Grounded sphere (radius R), point charge q at distance d from centre | Q′ = −qR/d |
| Grounded shell around a charge q | outer surface charge → 0; no field outside |

## Assumptions

- "Far apart": each sphere's potential comes only from its own charge.
- "Thin wire": the wire holds negligible charge.
- Ground is ideal: its potential never changes.

## Mistakes to avoid

1. **Sharing equally between different-sized conductors.** Use equal V.
2. **Bigger sphere → bigger surface field.** It is the smaller sphere.
3. **Grounding always gives zero charge.** Not with a charge nearby.
4. **Wrong order of steps.** Remove the ground before the inducing charge.
5. **Using the uneven spread of Q′ to block the calculation.** At the centre, all of Q′ is at distance R, so its potential is kQ′/R.

## Quick self-check

1. Distant spheres of radii 1.0 cm and 4.0 cm share 10 nC through a wire. Charges? *(2.0 nC and 8.0 nC)*
2. Which of those spheres has the stronger surface field, and by what factor? *(The 1.0 cm sphere, 4 times stronger)*
3. A grounded sphere of radius 0.10 m is 0.50 m (centre to charge) from +2.0 nC. Induced charge? *(−0.40 nC)*

Next: [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/10-2-redistribution-charge-between-conductors-practice/).
