---
resourceId: "mb-ap-calcab-4.2-revision-notes"
title: "Straight-Line Motion: Connecting Position, Velocity, and Acceleration: Revision Notes (Calculus AB 4.2)"
description: "One-page recap of straight-line motion: velocity and acceleration as derivatives, direction, speed, speeding up or slowing down, and total distance."
course: "calculus-ab"
unit: 4
topics: ["4.2"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-4.2-study-guide"]
learningObjectives:
  - "Recall how position, velocity, acceleration and speed are related"
  - "Apply the sign rules for direction and for speeding up or slowing down"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "mixed"
related: ["mb-ap-calcab-4.2-study-guide", "mb-ap-calcab-4.2-practice", "mb-ap-calcab-4.2-checklist"]
next: "mb-ap-calcab-4.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "v = x′ and a = v′ = x″; speed = |v|."
  - "Same signs of v and a: speeding up. Opposite signs: slowing down."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, diagrams and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/4-2-straight-line-motion-connecting-position-study-guide/). This topic is shared by Calculus AB and Calculus BC.

## Recap

- Fix an origin and a positive direction. Position x(t) can be negative.
- **Velocity** v(t) = x′(t). **Acceleration** a(t) = v′(t) = x″(t). **Speed** = |v(t)|.
- v > 0: moving in the positive direction. v < 0: moving in the negative direction. v = 0: at rest.
- The object **changes direction** only where v **changes sign**.
- On a velocity graph, the slope is the acceleration and the distance from the t-axis is the speed.

## Key relationships

| Signs | Result |
|---|---|
| v and a both positive, or both negative | speeding up |
| v and a with opposite signs | slowing down |
| a = 0 on an interval | constant velocity |

| Quantity | Formula | Units (m, s) |
|---|---|---|
| Average velocity on [t₁, t₂] | (x(t₂) − x(t₁))/(t₂ − t₁) | m/s |
| Average acceleration on [t₁, t₂] | (v(t₂) − v(t₁))/(t₂ − t₁) | m/s² |
| Displacement | x(t₂) − x(t₁) | m |
| Total distance | sum of \|change in x\| between turning points | m |

## Assumptions behind the method

- Position is differentiable, so velocity exists. Where a velocity graph has a corner, a(t) does not exist.
- To find total distance from positions, you must know every time where v changes sign in the interval.
- "Up" or "right" is positive only if the problem says so. Check the convention.

## Mistakes to avoid

1. **"Negative acceleration means slowing down."** Compare signs with v first.
2. **Taking v = 0 as a change of direction** without checking the sign on each side.
3. **Using a = 0 to find turning points.** Turning points come from v.
4. **Giving speed as a negative number.**
5. **Using |final − initial| as total distance** when the object turns.
6. **Wrong units:** acceleration is m/s², not m/s.

## Quick self-check

1. x(t) = t² − 6t + 5. Find v(1), a(1) and the speed at t = 1. Is the particle speeding up? *(v(1) = −4, a = 2, speed 4. Opposite signs, so slowing down.)*
2. When is that particle at rest? Does it change direction then? *(t = 3. Yes: v = 2t − 6 changes from negative to positive.)*
3. A stone falls with up as positive: v < 0 and a < 0. Speeding up or slowing down? *(Speeding up: same signs.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/4-2-straight-line-motion-connecting-position-practice/).
