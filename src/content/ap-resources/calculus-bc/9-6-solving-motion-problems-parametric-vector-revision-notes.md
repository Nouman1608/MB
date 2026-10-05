---
resourceId: "mb-ap-calcbc-9.6-revision-notes"
title: "Solving Motion Problems Using Parametric and Vector-Valued Functions: Revision Notes (Calculus BC 9.6)"
description: "One-page recap of planar motion: velocity, acceleration and speed, direction and rest, speeding up, and displacement, position and distance from integrals."
course: "calculus-bc"
unit: 9
topics: ["9.6"]
resourceType: "revision-notes"
calculusScope: "bc-only"
prerequisiteResources: ["mb-ap-calcbc-9.6-study-guide"]
learningObjectives:
  - "Recall the derivative and integral formulas for motion in the plane"
  - "Spot the common errors in planar motion problems before making them"
skills: ["1"]
studyMinutes: 10
difficulty: "core"
calculator: "mixed"
calculatorNote: "Derivatives by hand; total distance usually by graphing calculator, rounded to 3 decimal places at the end."
related: ["mb-ap-calcbc-9.6-study-guide", "mb-ap-calcbc-9.6-practice", "mb-ap-calcbc-9.6-checklist"]
next: "mb-ap-calcbc-9.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only."
  - "Velocity and displacement are vectors; speed and distance are numbers."
  - "Distance = ∫ speed dt; displacement = ∫ v(t) dt."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the explanations, the hovercraft diagram and the worked examples, use the [full study guide](/advanced-course-resources/calculus-bc/9-6-solving-motion-problems-parametric-vector-study-guide/). **BC-only material.** Prerequisites (vector derivatives 9.4, vector integrals 9.5, arc length 9.3, line motion 4.2 and 8.2) are on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

## Recap

- **Differentiate** position to get velocity and acceleration. **Integrate** velocity to get displacement and position.
- Speed is the length of the velocity vector. It is never negative.
- Signs of x′ and y′ give the direction: right/left and up/down.
- **At rest** only when x′ = 0 and y′ = 0 at the same time.
- **Distance** integrates speed; **displacement** integrates velocity. Distance ≥ length of displacement.

## Key relationships

| Quantity | Formula | Type |
|---|---|---|
| Velocity | v(t) = ⟨x′(t), y′(t)⟩ | vector |
| Acceleration | a(t) = ⟨x″(t), y″(t)⟩ | vector |
| Speed | √((x′)² + (y′)²) | number |
| Speed increasing? | sign of x′x″ + y′y″ (positive: increasing) | test |
| Displacement on [a, b] | ∫ from a to b of v(t) dt = r(b) − r(a) | vector |
| Position | r(b) = r(a) + ∫ from a to b of v(t) dt | point |
| Total distance on [a, b] | ∫ from a to b of √((x′)² + (y′)²) dt | number |
| Average speed | distance ÷ time | number |

## Assumptions

- Radians in every trigonometric velocity component.
- Calculator values: keep 4 or more decimal places, round to 3 at the end.
- Units: if position is in metres and t in seconds, speed is in m/s and distance in m.

## Mistakes to avoid

1. **Speed = x′ + y′.** It is √((x′)² + (y′)²).
2. **"At rest" from one zero component.** Check both.
3. **∫ v dt as distance.** That is displacement; distance needs the speed.
4. **Forgetting r(a)** when asked for a position.
5. **Judging speeding up from the size of a(t).** Use the sign of x′x″ + y′y″.
6. **Degree mode** on the calculator.

## Quick self-check

1. r(t) = ⟨t², 3t − t³⟩. Find the speed at t = 2. *(v(2) = ⟨4, −9⟩, speed √97 ≈ 9.849)*
2. A particle has constant velocity ⟨4, 3⟩ for 0 ≤ t ≤ 2. How far does it travel? *(speed 5, distance 10)*
3. v(t) = ⟨cos t, −sin t⟩ for 0 ≤ t ≤ π. Find the displacement and the distance. *(displacement ⟨0, −2⟩; speed is 1, so distance π)*

Next: [practice questions](/advanced-course-resources/calculus-bc/9-6-solving-motion-problems-parametric-vector-practice/).
