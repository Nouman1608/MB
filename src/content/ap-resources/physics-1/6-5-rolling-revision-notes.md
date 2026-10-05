---
resourceId: "mb-ap-phys1-6.5-revision-notes"
title: "Rolling: Revision Notes (Physics 1 6.5)"
description: "One-page recap of rolling: total kinetic energy, the rolling-without-slipping links v = rω and a = rα, why static friction does no work, the ramp race and slipping."
course: "physics-1"
unit: 6
topics: ["6.5"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-phys1-6.5-study-guide"]
learningObjectives:
  - "Recall K_total = ½Mv_cm² + ½I_cm ω² and the rolling-without-slipping links, and say when each applies"
  - "Spot the common errors with friction, mass and missing rotational energy before making them"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "foundation"
calculator: "scientific"
related: ["mb-ap-phys1-6.5-study-guide", "mb-ap-phys1-6.5-practice", "mb-ap-phys1-6.5-checklist"]
next: "mb-ap-phys1-6.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Rolling object: K_total = translational + rotational."
  - "No slipping: v_cm = rω, the contact point is at rest and static friction does no work."
  - "Slipping: v_cm and ω are not linked, and kinetic friction dissipates energy."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For diagrams, derivations and worked examples, use the [full study guide](/advanced-course-resources/physics-1/6-5-rolling-study-guide/). This is the algebra-based course: no calculus is needed.

## Recap

- A rolling object **translates** (its centre of mass moves) and **rotates** (it spins about its centre of mass). Its kinetic energy is the sum of both kinds.
- **Rolling without slipping:** the object turns through Δθ while its centre moves rΔθ. The contact point is **momentarily at rest**; the top moves at 2v_cm.
- In ideal rolling without slipping, **static friction does no work**, so mechanical energy is conserved. Friction's torque shares gravity's energy between translation and rotation.
- **Rolling while slipping:** the contact point slides, so v_cm ≠ rω. Kinetic friction opposes the sliding, changes v_cm and ω until rolling starts, and **dissipates energy** while it does.
- Rolling friction (rolling resistance) is outside the course.

## Key relationships

| Relationship | When it applies | Use it to |
|---|---|---|
| K_total = ½Mv_cm² + ½I_cm ω² | any object that moves and spins | add the two kinds of kinetic energy |
| Δx_cm = rΔθ, v_cm = rω, a_cm = rα | rolling **without** slipping only | swap rotational and translational quantities |
| K_total = ½(1 + β)Mv_cm², with I_cm = βMr² | rolling without slipping | energy in one step |
| v = √(2gh / (1 + β)) | rolling from rest down height h, no slipping | speed at the bottom (no M or r) |
| a_cm = g sin θ / (1 + β) | rolling down a ramp at angle θ | acceleration and time |
| h = (1 + β)v² / (2g) | rolling up a ramp until it stops | greatest height |

Shape factors (given in questions): hoop 1, hollow sphere ⅔, disc or solid cylinder ½, solid sphere ⅖. Lower β means a larger share of energy in translation and a faster roll.

## Assumptions behind the numbers

- Objects are **rigid** and surfaces are hard: no rolling friction, no air resistance.
- "Rolls without slipping" means static friction is large enough. You do not use μ_s F_N unless slipping is about to start.
- g = 9.8 m/s².

## Mistakes to avoid

1. **Leaving out ½Iω².** Mgh = ½Mv² gives the frictionless-block speed, which is too high.
2. **Saying friction removes energy in ideal rolling.** The contact point is at rest, so static friction does no work.
3. **Using v = rω for a skidding wheel.**
4. **Thinking heavier or bigger means faster.** Only β matters.
5. **Assuming friction always points backwards.** It opposes sliding of the contact point: up a slope for a ball rolling down; forwards for a wheel spinning too fast.
6. **Justifying with a law's name only.** "Because of conservation of energy" is not enough. Explain where the energy goes.

## Quick self-check

1. A wheel of radius 0.25 m rolls without slipping at 4.0 m/s. What are its angular speed and the speed of its top point? *(16 rad/s; 8.0 m/s)*
2. What fraction of a rolling disc's kinetic energy is rotational? *(1/3)*
3. A hoop rolls from rest down a 0.45 m drop. What is its speed at the bottom? *(√(gh) = 2.1 m/s; a sliding frictionless block would reach 3.0 m/s.)*

Next: [practice questions](/advanced-course-resources/physics-1/6-5-rolling-practice/).
