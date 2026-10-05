---
resourceId: "mb-ap-calcbc-7.5-revision-notes"
title: "Approximating Solutions Using Euler’s Method: Revision Notes (Calculus BC 7.5)"
description: "One-page recap of Euler’s method: the step rule, a table layout, step size and accuracy, backward steps, and how concavity tells you if an estimate is too high or too low."
course: "calculus-bc"
unit: 7
topics: ["7.5"]
resourceType: "revision-notes"
calculusScope: "bc-only"
prerequisiteResources: ["mb-ap-calcbc-7.5-study-guide"]
learningObjectives:
  - "Recall the Euler step rule and lay out the steps in a table"
  - "Spot the common errors in Euler’s method before making them"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "mixed"
calculatorNote: "Simple steps by hand; with a calculator, keep full values between steps and round the final answer to 3 decimal places."
related: ["mb-ap-calcbc-7.5-study-guide", "mb-ap-calcbc-7.5-practice", "mb-ap-calcbc-7.5-checklist"]
next: "mb-ap-calcbc-7.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only."
  - "New y = old y + h × (slope at the old point)."
  - "Concave up → underestimate; concave down → overestimate."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the graph, the step-size table and worked examples, use the [full study guide](/advanced-course-resources/calculus-bc/7-5-approximating-solutions-eulers-method-study-guide/). **BC-only material.** Prerequisites (tangent lines 4.6, differential equations 7.1–7.4, concavity in Unit 5) are on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

## Recap

- Euler’s method **approximates** a particular solution of dy/dx = f(x, y) from a known point.
- Each step is a **tangent-line approximation**: move h in x and h × slope in y.
- After each step, find the **new slope** at the new point. That is what makes it better than one long tangent line.
- Use it when you cannot find, or are not asked for, an exact solution.

## Key relationships

| Idea | Rule | Note |
|---|---|---|
| Step rule | xₙ₊₁ = xₙ + h, yₙ₊₁ = yₙ + h · f(xₙ, yₙ) | Slope at the point you leave |
| Number of steps | (target x − start x) ÷ h | From 0 to 1 with h = 0.25: 4 steps |
| Step backwards | Use h < 0 | Same rule, negative h |
| Accuracy | Smaller h usually means smaller error | Never exactly zero error |
| Concave up (d²y/dx² > 0) | Euler underestimates | Tangent segments lie below the curve |
| Concave down (d²y/dx² < 0) | Euler overestimates | Tangent segments lie above the curve |
| Second derivative | Differentiate dy/dx implicitly | Substitute dy/dx before evaluating |

## Table layout

| Step | (xₙ, yₙ) | Slope | h × slope | New point |
|---|---|---|---|---|

One row per step. Fill the new point, then copy it into the next row.

## Mistakes to avoid

1. **Slope at the new point** instead of the old one.
2. **Forgetting h**: adding the slope itself.
3. **Giving the change**, not the new y-value.
4. **Rounding every step.** Round once, at the end.
5. **Judging over/under from "increasing"**. Use the sign of d²y/dx².
6. **Wrong number of steps** for the given h.

## Quick self-check

1. For dy/dx = 3 − y with y(0) = 0, use two steps of 0.5 to approximate y(1). *(Step 1: slope 3, y = 1.5. Step 2: slope 1.5, y = 2.25.)*
2. For dy/dx = xy with y(1) = 2, use one step of 0.1 to approximate y(1.1). *(2 + 0.1 × 2 = 2.2)*
3. In question 2, d²y/dx² = y + x · dy/dx = y + x²y, which is 4 at (1, 2). Over or under? *(Positive, so concave up: 2.2 is an underestimate.)*
4. Why is a smaller step usually more accurate? *(Each tangent segment is shorter, so it has less room to drift away from the curving solution.)*

Next: [practice questions](/advanced-course-resources/calculus-bc/7-5-approximating-solutions-eulers-method-practice/).
