---
resourceId: "mb-ap-physcm-1.4-revision-notes"
title: "Reference Frames and Relative Motion: Revision Notes (Physics C: Mechanics 1.4)"
description: "One-page recap of reference frames and relative motion: subscript notation, vector addition of velocities between frames, and why inertial observers agree on acceleration."
course: "physics-c-mechanics"
unit: 1
topics: ["1.4"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-physcm-1.4-study-guide"]
learningObjectives:
  - "Recall the chain rule for relative velocities and the reversal rule, with correct subscripts"
  - "Spot the common vector and sign errors in relative-motion problems before making them"
skills: ["1", "2"]
studyMinutes: 10
difficulty: "core"
calculator: "scientific"
related: ["mb-ap-physcm-1.4-study-guide", "mb-ap-physcm-1.4-practice", "mb-ap-physcm-1.4-checklist"]
next: "mb-ap-physcm-1.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Name the frame for every measurement: v_PA is P relative to A."
  - "v_PA = v_PB + v_BA, added as vectors; v_BA = −v_AB."
  - "Inertial frames disagree on position and velocity but agree on acceleration."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap for the **calculus-based** course (separate from Physics 1, which limits relative velocity to one dimension). For explanations, diagrams and worked examples, use the [full study guide](/advanced-course-resources/physics-c-mechanics/1-4-reference-frames-relative-motion-study-guide/).

## Recap

- A **reference frame** is an observer's origin, axes, clock and motion. State it before any number, for example "+x east, measured from the ground".
- The frame decides both the **size** and the **direction** of a measured position or velocity.
- **Subscripts:** v_PA means the velocity of P as measured in frame A.
- **Converting:** add or subtract **vectors**, not speeds. Use components when the vectors are not parallel.
- **Inertial** frames do not accelerate. Assume a frame is inertial unless told otherwise.

## Key relationships

| Relationship | Meaning | Condition |
|---|---|---|
| r_PA = r_PB + r_BA | positions link through frame B | always |
| v_PA = v_PB + v_BA | inner letters match and drop out | everyday speeds |
| v_BA = −v_AB | swapping the order flips the vector | always |
| x′ = x − Vt, v′ = v − V | one-dimensional frame change | S′ moves at constant V along +x; origins match at t = 0 |
| a_PA = a_PB + a_BA | derivative of the velocity link | always |
| a_PA = a_PB | same acceleration in both frames | a_BA = 0 (both inertial) |
| Track straight across a crosswind w at airspeed u | point into the wind at θ from the track, sin θ = w/u; ground speed √(u² − w²) | w < u |

## Assumptions behind the numbers

- Frames are inertial (constant velocity relative to the ground) unless stated.
- Speeds are far below the speed of light, so velocities add as vectors.
- Free fall: a_y = −g with g = 9.8 m/s² (+y upward), air resistance ignored.

## Mistakes to avoid

1. **Adding speeds as numbers** when the velocities are not parallel. Use components.
2. **Wrong subscript order.** Write the chain so the inner letters match.
3. **Dropping a sign.** v_BA = −v_AB, so the minus sign carries direction.
4. **Pointing = travelling.** The heading (relative to air or water) is not the track over the ground.
5. **Different accelerations in different inertial frames.** They are the same.
6. **Forgetting the initial velocity** an object shares with the frame it leaves.

## Quick self-check

1. A boat moves at 3.0 m/s relative to the water in a river flowing at 1.0 m/s. What is its speed relative to the bank going downstream, and upstream? *(4.0 m/s and 2.0 m/s)*
2. A plane flies north at 80 m/s relative to the air; the wind blows east at 60 m/s. What is its ground velocity? *(100 m/s at 36.9° east of north)*
3. v_AB = +4.0 m/s along +x. What is v_BA? *(−4.0 m/s)*

Next: [practice questions](/advanced-course-resources/physics-c-mechanics/1-4-reference-frames-relative-motion-practice/).
