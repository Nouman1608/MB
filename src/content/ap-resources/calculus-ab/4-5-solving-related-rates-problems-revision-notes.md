---
resourceId: "mb-ap-calcab-4.5-revision-notes"
title: "Solving Related Rates Problems: Revision Notes (Calculus AB 4.5)"
description: "One-page recap of related rates problem solving: the six-step method, which equation to choose, removing a variable with similar triangles, and how to interpret the answer."
course: "calculus-ab"
unit: 4
topics: ["4.5"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-4.5-study-guide"]
learningObjectives:
  - "Recall the six steps for a related rates problem and the relationships most often used"
  - "Spot the set-up and interpretation errors that cost marks"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-4.5-study-guide", "mb-ap-calcab-4.5-practice", "mb-ap-calcab-4.5-checklist"]
next: "mb-ap-calcab-4.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Draw, label, write an equation true at all times, differentiate, substitute, interpret."
  - "Remove a variable whose rate is unknown before differentiating, often with similar triangles."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, diagrams and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/4-5-solving-related-rates-problems-study-guide/). This topic is shared by Calculus AB and Calculus BC.

## Recap

- A related rates problem finds **one rate from others that are known**, using an equation that links the quantities.
- **Six steps:** (1) draw and label; (2) list known rates (with signs), the instant and the rate wanted; (3) write an equation true at all times; (4) remove any extra variable; (5) differentiate with respect to t, then substitute; (6) answer with units and interpret.
- **Letters for anything that changes**, numbers only for quantities that never change.
- Find **missing instant values** (a hypotenuse, sec²θ) from the original equation or the triangle.

## Key relationships

| Situation | Equation | After d/dt |
|---|---|---|
| Right triangle, one leg fixed at k | x² + k² = D² | 2x · dx/dt = 2D · dD/dt |
| Angle from a fixed point, adjacent side k | tan θ = x/k | sec²θ · dθ/dt = (1/k) · dx/dt |
| Cone, point down, rim radius R, depth H | r = (R/H)h, so V = (1/3)π(R/H)²h³ | dV/dt = π(R/H)²h² · dh/dt |
| Shadow from a lamp of height L, person of height p | s/p = (x + s)/L | solve for s first, then differentiate |
| Sphere | V = (4/3)πr³ | dV/dt = 4πr² · dr/dt |

Useful fact: for a container, dh/dt = (dV/dt) ÷ (area of the liquid surface).

## Assumptions behind the method

- Every changing quantity is a differentiable function of time.
- The equation holds at **all** times near the instant, so it can be differentiated.
- Angles are in **radians** when you differentiate trig functions.

## Mistakes to avoid

1. **Writing an instant value as a constant** (x = 30 in the equation before differentiating).
2. **Fixing a radius that changes**: the rim of a cone is fixed, the water's radius is not.
3. **Keeping a variable whose rate is unknown** instead of removing it.
4. **Missing sec²θ** when differentiating tan θ.
5. **Answering with a number only.** Say what changes, the direction, the units and the instant.
6. **Double negatives**: write "decreasing at 0.5 cm/s", not "decreasing at −0.5".

## Quick self-check

1. A right triangle has one leg fixed at 12 and the other leg x increasing at 2 units/s. Find the rate of change of the hypotenuse when x = 9. *(D = 15; dD/dt = (9/15)(2) = 1.2 units/s)*
2. A cone with its point down has rim radius 2 and depth 8. Write the volume of liquid in terms of the depth h. *(r = h/4, so V = πh³/48)*
3. You find dh/dt = −0.5 m/min when h = 3 m. Interpret it. *(At the moment the depth is 3 m, the depth is decreasing at 0.5 metres per minute.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/4-5-solving-related-rates-problems-practice/).
