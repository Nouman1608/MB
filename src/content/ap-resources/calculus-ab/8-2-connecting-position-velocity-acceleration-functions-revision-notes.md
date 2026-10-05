---
resourceId: "mb-ap-calcab-8.2-revision-notes"
title: "Connecting Position, Velocity, and Acceleration Using Integrals: Revision Notes (Calculus AB 8.2)"
description: "One-page recap of motion with integrals: position from velocity, velocity from acceleration, displacement versus total distance, and average velocity versus average speed."
course: "calculus-ab"
unit: 8
topics: ["8.2"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-8.2-study-guide"]
learningObjectives:
  - "Recall the integral formulas for position, velocity, displacement and distance"
  - "Spot the common errors in motion questions before making them"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "mixed"
related: ["mb-ap-calcab-8.2-study-guide", "mb-ap-calcab-8.2-practice", "mb-ap-calcab-8.2-checklist"]
next: "mb-ap-calcab-8.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "Integral of velocity = displacement; integral of speed |v| = total distance."
  - "Add a starting value: x(b) = x(a) + ∫ (a to b) v(t) dt."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, figures and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/8-2-connecting-position-velocity-acceleration-functions-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **∫ (a to b) v(t) dt** means the definite integral of v(t) from t = a to t = b.

## Recap

- Differentiating goes x → v → a. Integrating goes back, a → v → x, but gives only the **change**, so you need a starting value.
- **Displacement** = ∫ (a to b) v(t) dt = x(b) − x(a). Signed: backward motion cancels forward motion.
- **Total distance** = ∫ (a to b) |v(t)| dt. Never negative.
- By hand: split at the times where v **changes sign**, integrate v on each piece, take absolute values, add. With a calculator: integrate |v| directly.
- On a velocity graph, area above the t-axis is forward motion and area below is backward motion.

## Key relationships

| Want | Use | Units (m, s) |
|---|---|---|
| Position at time b | x(b) = x(a) + ∫ (a to b) v(t) dt | m |
| Velocity at time b | v(b) = v(a) + ∫ (a to b) a(t) dt | m/s |
| Displacement | ∫ (a to b) v(t) dt | m |
| Total distance | ∫ (a to b) \|v(t)\| dt | m |
| Average velocity | (1/(b − a)) ∫ (a to b) v(t) dt | m/s |
| Average speed | (total distance)/(b − a) | m/s |

## Assumptions behind the method

- Motion is along a straight line, with a chosen positive direction.
- v and a are continuous on the interval, so the Fundamental Theorem applies.
- Direction changes happen only where v changes sign.

## Mistakes to avoid

1. **Calling ∫ v dt the distance.** It is displacement.
2. **Writing |∫ v dt| for distance.** The absolute value goes inside.
3. **Forgetting x(a)** when asked for a position.
4. **Splitting where a = 0** instead of where v changes sign.
5. **Average speed from displacement** instead of distance.
6. **Wrong units:** ∫ a dt is a velocity, not a distance.

## Quick self-check

1. v(t) = 4 − 2t on [0, 3]. Find the displacement and the total distance. *(Displacement 3; distance 5: 4 forward on [0, 2], then 1 back on [2, 3])*
2. x(0) = 5 and ∫ (0 to 2) v(t) dt = −7. Find x(2). *(−2)*
3. v(0) = 3 m/s and a(t) = 2 m/s² for all t. Find v(5). *(13 m/s = 3 + 2 × 5)*

Next: [practice questions](/advanced-course-resources/calculus-ab/8-2-connecting-position-velocity-acceleration-functions-practice/).
