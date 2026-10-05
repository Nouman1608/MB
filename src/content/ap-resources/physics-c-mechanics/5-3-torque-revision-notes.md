---
resourceId: "mb-ap-physcm-5.3-revision-notes"
title: "Torque: Revision Notes (Physics C: Mechanics 5.3)"
description: "One-page recap of torque for the calculus-based course: rF sin θ, lever arms, force diagrams, τ = r × F with the right-hand rule, and signed net torque about one stated axis."
course: "physics-c-mechanics"
unit: 5
topics: ["5.3"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcm-5.3-study-guide"]
learningObjectives:
  - "Recall the three equivalent forms of the size of a torque and the cross-product definition"
  - "Spot the common axis, sign and lever-arm errors before making them"
skills: ["1", "2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcm-5.3-study-guide", "mb-ap-physcm-5.3-practice", "mb-ap-physcm-5.3-checklist"]
next: "mb-ap-physcm-5.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "τ = r × F about a stated axis; size rF sin θ = rF⊥ = r⊥F."
  - "Out of the page = counterclockwise = positive (usual convention)."
  - "A force whose line of action passes through the axis gives zero torque."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This is the recap for the **calculus-based** course, which treats torque as a vector (Physics 1 uses only its size). For diagrams and worked examples, use the [full study guide](/advanced-course-resources/physics-c-mechanics/5-3-torque-study-guide/).

## Recap

- Torque is the turning effect of a force **about a chosen axis**. State the axis first.
- **r** runs from the axis to the point where the force acts. θ is the angle between r and F, tail to tail.
- Only the component of F **perpendicular to r** turns the object. The component along r gives no torque.
- The **lever arm** r⊥ is the perpendicular distance from the axis to the **line of action** of the force.
- A **force diagram** shows each force starting at the point where it acts, with distances from the axis.
- Weight acts at the centre of mass (uniform g).
- **Net torque** is the signed sum of torques about **one** axis.

## Key relationships

| Relationship | Units | Meaning |
|---|---|---|
| τ = r × F | N·m | vector, perpendicular to the plane of r and F |
| \|τ\| = rF sin θ | N·m | size from r, F and the angle between them |
| τ = rF⊥, F⊥ = F sin θ | N·m | perpendicular component × distance |
| τ = r⊥F, r⊥ = r sin θ | N·m | lever arm × force |
| τ_z = xF_y − yF_x | N·m | component form for forces in the xy-plane |
| î × ĵ = k̂, ĵ × î = −k̂ | — | order matters: B × A = −(A × B) |
| τ_net = Στ (one axis) | N·m | counterclockwise +, clockwise − |

## Right-hand rule

Fingers along r, curl towards F through the smaller angle: your thumb gives τ. For forces in the page, thumb **out** = counterclockwise, thumb **in** = clockwise.

## Assumptions

- The system is rigid: every part turns through the same angle.
- Forces and r lie in one plane unless stated, so τ is along ±z.
- g = 9.8 m/s², uniform, so weight acts at the centre of mass.

## Mistakes to avoid

1. **τ = rF for any angle.** Include sin θ.
2. **Lever arm = distance to the point of application.** It is the distance to the line of action.
3. **F × r instead of r × F.** The sign flips.
4. **Hinge forces in the torque sum about the hinge.** They give zero torque there.
5. **Adding torques about different axes.**
6. **Dropping the minus sign on clockwise torques.**
7. **Using the obtuse angle wrongly.** sin(180° − θ) = sin θ, so both give the same size; the direction comes from the right-hand rule.

## Quick self-check

1. A 60 N force acts 0.25 m from an axis at 40° to r. Size of torque? *(0.25 × 60 × sin 40° = 9.6 N·m)*
2. r = 0.30î m, F = −20ĵ N. Find τ. *(τ_z = (0.30)(−20) − 0 = −6.0 N·m, so −6.0k̂ N·m, clockwise)*
3. A 45 N force acts 0.80 m from an axis; its line of action makes 30° with r. Lever arm and torque? *(r⊥ = 0.80 sin 30° = 0.40 m; τ = 18 N·m)*

Next: [practice questions](/advanced-course-resources/physics-c-mechanics/5-3-torque-practice/).
