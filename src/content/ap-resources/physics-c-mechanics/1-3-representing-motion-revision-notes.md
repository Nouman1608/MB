---
resourceId: "mb-ap-physcm-1.3-revision-notes"
title: "Representing Motion: Revision Notes (Physics C: Mechanics 1.3)"
description: "One-page recap of representing motion: motion diagrams, slope and area links between graphs, curvature, the constant-acceleration equations and free fall near Earth."
course: "physics-c-mechanics"
unit: 1
topics: ["1.3"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcm-1.3-study-guide"]
learningObjectives:
  - "Recall the slope and area links between position, velocity and acceleration graphs"
  - "Pick the right constant-acceleration equation and spot the common representation errors"
skills: ["1", "2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcm-1.3-study-guide", "mb-ap-physcm-1.3-practice", "mb-ap-physcm-1.3-checklist"]
next: "mb-ap-physcm-1.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Slopes go down the chain (x → v_x → a_x); areas give changes going up."
  - "x–t curving up means a_x > 0; curving down means a_x < 0."
  - "Constant-acceleration equations: one stage at a time, any single direction."
  - "Free fall: a_y = −g with +y up, even at the top."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap for the **calculus-based** course (separate from Physics 1). For diagrams and worked examples, use the [full study guide](/advanced-course-resources/physics-c-mechanics/1-3-representing-motion-study-guide/).

## Recap

- One motion can be shown as **words, a figure, a motion diagram, graphs or equations**. Be ready to turn any one into any other.
- State the axis first, for example "+y upward, origin at the launch point".
- **Motion diagram:** dots at equal time steps. Growing gaps mean speeding up; shrinking gaps mean slowing down. Equal changes in the gaps mean constant acceleration.
- At a turning point, v = 0 but the acceleration need not be zero.

## Key relationships

| Relationship | Graph meaning |
|---|---|
| v_x = dx/dt | slope of tangent to x–t |
| a_x = dv_x/dt = d²x/dt² | slope of tangent to v_x–t; curvature of x–t |
| Δx = ∫ v_x dt | signed area under v_x–t |
| Δv_x = ∫ a_x dt | signed area under a_x–t |
| v_x = v_x0 + a_x t | no x; constant a_x only |
| x = x₀ + v_x0 t + ½a_x t² | no v_x; constant a_x only |
| v_x² = v_x0² + 2a_x(x − x₀) | no t; constant a_x only |

## Assumptions behind the numbers

- Point object, one straight line, one stage of constant acceleration at a time.
- Free fall near Earth: a = g ≈ 9.8 m/s², downward and constant; no air resistance. The course accepts g = 10 m/s², 9.8 m/s² or 9.81 m/s². State your choice.
- Factors of change: write the result as a proportion first, for example h = v₀²/(2g), so h ∝ v₀².

## Mistakes to avoid

1. **Reading the height of x–t as the velocity.** Velocity is the slope.
2. **Area under a_x–t = v_x.** It is Δv_x; add v_x0.
3. **a = 0 at the top of a throw.** It stays −g.
4. **One equation across stages.** Restart at each change of acceleration.
5. **Corners on x–t.** Velocity cannot jump, so x–t bends smoothly.
6. **Double negatives with g.** With +y up, a_y = −9.8 m/s², not −(−9.8).
7. **Keeping both quadratic roots.** Reject the root that is before the motion starts.

## Quick self-check

1. A ball is thrown straight up at 7.0 m/s. How high does it rise? *(h = v₀²/(2g) = 49 ÷ 19.6 = 2.5 m)*
2. An a_x–t graph is flat at 1.5 m/s² for 4.0 s, and v_x0 = −2.0 m/s. What is v_x at the end? *(Area 6.0 m/s, so v_x = −2.0 + 6.0 = 4.0 m/s)*
3. A stone dropped from rest falls a height h in time T. How long does it take to fall 4h? *(t ∝ √h, so 2T)*

Next: [practice questions](/advanced-course-resources/physics-c-mechanics/1-3-representing-motion-practice/).
