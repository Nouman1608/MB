---
resourceId: "mb-ap-calcab-7.2-revision-notes"
title: "Verifying Solutions for Differential Equations: Revision Notes (Calculus AB 7.2)"
description: "One-page recap of checking solutions to differential equations: the four-step method, families of solutions, second-order checks and the mistakes that cost marks."
course: "calculus-ab"
unit: 7
topics: ["7.2"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-7.2-study-guide"]
learningObjectives:
  - "Recall the steps for verifying a solution and how to set them out"
  - "Spot the common errors in verification before making them"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-7.2-study-guide", "mb-ap-calcab-7.2-practice", "mb-ap-calcab-7.2-checklist"]
next: "mb-ap-calcab-7.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "Differentiate, substitute, simplify each side separately, compare for all x."
  - "There may be infinitely many solutions; one condition picks one."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the family-of-curves graph and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/7-2-verifying-solutions-differential-equations-study-guide/). This topic is shared by Calculus AB and Calculus BC.

## Recap

- A **solution** of a differential equation is a function that makes both sides equal for **every** input in an interval.
- **Method:** (1) find y′ (and y″ if needed); (2) substitute into the left side and the right side separately; (3) simplify each side; (4) show they are identical.
- Agreement at one x value **does not** prove a solution. Disagreement at one x value **does** disprove it.
- A differential equation can have **infinitely many solutions**, often written with an arbitrary constant C (or two constants for a second-order equation).
- A constant function y = c is a solution when substituting y = c makes the right side 0 for every x (its derivative is 0).
- A solution must be differentiable on its whole interval, so avoid points where the formula is undefined.

## Key relationships

| Differential equation | Family of solutions | Check |
|---|---|---|
| dy/dx = ky | y = Ce^(kx) | y′ = kCe^(kx) = ky |
| dy/dt = k(M − y) | y = M + Ce^(−kt) | y′ = −kCe^(−kt); k(M − y) = −kCe^(−kt) |
| y″ + ω²y = 0 (ω a positive constant) | y = A sin(ωx) + B cos(ωx) | y″ = −ω²y |
| ay″ + by′ + cy = 0 | try y = e^(rx) | needs ar² + br + c = 0 |

To find a constant that makes a form work, substitute and match coefficients so the equation holds for **all** x.

## Assumptions

- C, A, B and k are constants: differentiate them as constants.
- Differentiate with respect to the variable the equation uses (x or t).
- State the interval when the formula has points where it is undefined.

## Mistakes to avoid

1. **Checking at one point** and calling it a proof.
2. **Working across the equals sign** as if the equation were already true.
3. **Missing the chain-rule factor**, for example in e^(−3t) or sin(3x).
4. **Forgetting y″** in a second-order equation.
5. **Adding a constant to a solution** and assuming the result is still a solution.
6. **Saying "the" solution** when there is a whole family.

## Quick self-check

1. Is y = 7e^(−2x) a solution of dy/dx = −2y? *(Yes: both sides are −14e^(−2x).)*
2. Is y = x² a solution of dy/dx = 2y/x for x > 0? *(Yes: both sides are 2x.)*
3. Find r so that y = e^(rx) solves y″ = 9y. *(r² = 9, so r = 3 or r = −3.)*
4. Both sides of a differential equation equal 5 at x = 1. Is the function a solution? *(Not proven; you must show equality for all x.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/7-2-verifying-solutions-differential-equations-practice/).
