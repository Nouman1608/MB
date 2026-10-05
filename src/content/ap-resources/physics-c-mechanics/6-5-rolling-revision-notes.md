---
resourceId: "mb-ap-physcm-6.5-revision-notes"
title: "Rolling: Revision Notes (Physics C: Mechanics 6.5)"
description: "One-page recap of rolling: total kinetic energy, the rolling condition by calculus, slope dynamics with static friction, why rolling dissipates no energy, and slipping with kinetic friction."
course: "physics-c-mechanics"
unit: 6
topics: ["6.5"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcm-6.5-study-guide"]
learningObjectives:
  - "Recall the rolling condition, the rolling kinetic energy and the slope results in terms of β"
  - "Spot the common friction and energy errors in rolling and slipping problems before making them"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcm-6.5-study-guide", "mb-ap-physcm-6.5-practice", "mb-ap-physcm-6.5-checklist"]
next: "mb-ap-physcm-6.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "K_tot = ½Mv_cm² + ½I_cm ω², which is ½M(1 + β)v_cm² when rolling."
  - "Rolling without slipping: Δx_cm = rΔθ, v_cm = rω, a_cm = rα."
  - "Static friction on an ideal rolling body dissipates no energy; kinetic friction on a slipping body does."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap for the **calculus-based** course (separate from Physics 1). For derivations, diagrams and worked examples, use the [full study guide](/advanced-course-resources/physics-c-mechanics/6-5-rolling-study-guide/).

## Recap

- Any moving, spinning rigid body: **K_tot = K_trans + K_rot**, with I about the centre of mass in K_rot.
- **Rolling without slipping:** the arc that touches the ground equals the distance moved, Δx_cm = rΔθ. Differentiate once and twice for the speed and acceleration links.
- The contact point is momentarily at rest; the top moves at 2v_cm.
- **Static friction** supplies the torque that keeps ω matched to v_cm/r. It acts at a point that is not moving, so it does no work.
- **Slipping:** v_cm ≠ rω. Use F_net = Ma_cm and τ_net = I_cm α separately, with kinetic friction μ_k N opposing the sliding of the contact point. Slipping stops when v_cm = rω.

## Key relationships

| Relationship | When it applies |
|---|---|
| K_tot = ½Mv_cm² + ½I_cm ω² | any moving, spinning rigid body |
| Δx_cm = rΔθ, v_cm = rω, a_cm = rα | rolling without slipping only |
| K = ½M(1 + β)v_cm², with I_cm = βMr² | rolling without slipping |
| a_cm = g sin θ ÷ (1 + β); f = βMg sin θ ÷ (1 + β) | rolling down a slope |
| μ_s ≥ β tan θ ÷ (1 + β) | condition to roll without slipping on a slope |
| v = √(2gh ÷ (1 + β)) | rolling from rest through a drop h |
| energy dissipated = f_k × (distance the contact point slides) | slipping |
| β: hoop 1, spherical shell 2/3, solid cylinder 1/2, solid sphere 2/5 | about the central axis |

## Assumptions behind the numbers

- Rigid bodies on rigid surfaces: no rolling friction (outside the course).
- Angular quantities in radians; g = 9.8 m/s².
- Choose +x and the positive sense of rotation so that a_cm = rα with matching signs.

## Mistakes to avoid

1. **v_cm = rω while slipping.** Only after slipping stops.
2. **Friction "wastes" energy in rolling.** Not static friction on an ideal rolling body.
3. **f = μ_s N automatically.** That is the maximum; find f from Newton's laws.
4. **Dissipated energy from the centre's distance.** Use the sliding distance of the contact point.
5. **Double counting.** ½I_P ω² about the contact point is already the total.
6. **Assuming friction's direction.** Let the sign of your answer decide.

## Quick self-check

1. A 2.0 kg hoop rolls without slipping at 3.0 m/s. What is its total kinetic energy? *(β = 1, so K = Mv² = 18 J)*
2. A solid sphere rolls from rest down a slope; its centre drops 0.70 m. How fast is it moving at the bottom? *(v = √(2 × 9.8 × 0.70 ÷ 1.4) = 3.1 m/s)*
3. A wheel of radius 0.30 m rolls at 6.0 m/s. Find ω and the speed of the top of the wheel. *(20 rad/s; 12 m/s)*

Next: [practice questions](/advanced-course-resources/physics-c-mechanics/6-5-rolling-practice/).
