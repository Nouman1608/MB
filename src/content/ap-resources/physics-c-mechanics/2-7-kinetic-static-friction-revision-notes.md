---
resourceId: "mb-ap-physcm-2.7-revision-notes"
title: "Kinetic and Static Friction: Revision Notes (Physics C: Mechanics 2.7)"
description: "One-page recap of kinetic and static friction: μ_k F_N, the static limit μ_s F_N, finding the normal force, the slip test, and slope results."
course: "physics-c-mechanics"
unit: 2
topics: ["2.7"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcm-2.7-study-guide"]
learningObjectives:
  - "Recall the kinetic friction equation, the static friction inequality and the direction rules"
  - "Spot the common normal-force and direction errors in friction problems before making them"
skills: ["2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcm-2.7-study-guide", "mb-ap-physcm-2.7-practice", "mb-ap-physcm-2.7-checklist"]
next: "mb-ap-physcm-2.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics"]
keyPoints:
  - "Kinetic: F_f,k = μ_k F_N, opposite the relative motion."
  - "Static: |F_f,s| ≤ μ_s F_N, whatever value stops slipping."
  - "Find F_N from Newton's second law perpendicular to the surface."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap for the **calculus-based** course (separate from Physics 1, which uses the same friction model without calculus). For explanations, diagrams and worked examples, use the [full study guide](/advanced-course-resources/physics-c-mechanics/2-7-kinetic-static-friction-study-guide/).

## Recap

- A contact force has a **normal** part F_N (perpendicular, pointing away from the surface) and a **friction** part (parallel to the surface).
- **Kinetic friction** acts when the surfaces slide relative to each other. On each surface it points opposite that surface's motion relative to the other.
- **Static friction** acts when they do not slide. It takes the size and direction needed to prevent slipping, up to a maximum.
- μ_k and μ_s have no unit and depend on the two materials. Usually μ_s > μ_k.
- Friction does not depend on the area of contact.

## Key relationships

| Relationship | When it applies |
|---|---|
| F_f,k = μ_k F_N | surfaces sliding |
| \|F_f,s\| ≤ μ_s F_N | surfaces not sliding |
| F_f,s,max = μ_s F_N | slipping about to start |
| F_N = mg cos θ | block on a slope at θ, no other force perpendicular to it |
| at rest on a slope needs tan θ ≤ μ_s | static, mass cancels |
| a_x = g(sin θ − μ_k cos θ) | sliding down a slope, +x down the slope |

## Assumptions behind the numbers

- g = 9.8 m/s². Objects are treated as point objects or rigid blocks.
- μ_k does not depend on speed, and μ values are constant over the surface unless stated.
- Strings are light, and floors described as frictionless have μ = 0.

## Mistakes to avoid

1. **F_N = mg without checking.** Angled pulls, extra pushes, slopes and lifts all change F_N.
2. **Writing F_f,s = μ_s F_N** when slipping is not about to start.
3. **"Friction opposes motion."** It opposes **relative** motion; it can speed an object up.
4. **Skipping the slip test.** Assume no slip, find the friction needed, compare with μ_s F_N.
5. **Constant-a equations when the force changes with time.** Integrate a_x(t) from the moment slipping starts.
6. **Forgetting the third-law partner** on the other surface.

## Quick self-check

1. A 2.0 kg block on a level bench (μ_s = 0.60) is pulled horizontally with 10 N and stays still. What is the friction? *(10 N, opposite the pull; the maximum would be 11.76 N)*
2. A block slides down a 30° slope with μ_k = 0.20. What is its acceleration? *(g(sin 30° − 0.20 cos 30°) ≈ 3.2 m/s² down the slope)*
3. A 1.0 kg block on a level floor (μ_s = 0.50) is pushed with P = (3.0 N/s)t. When does it start to slide? *(0.50 × 9.8 ÷ 3.0 ≈ 1.6 s)*

Next: [practice questions](/advanced-course-resources/physics-c-mechanics/2-7-kinetic-static-friction-practice/).
