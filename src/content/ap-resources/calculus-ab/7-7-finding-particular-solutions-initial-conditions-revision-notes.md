---
resourceId: "mb-ap-calcab-7.7-revision-notes"
title: "Finding Particular Solutions Using Initial Conditions and Separation of Variables: Revision Notes (Calculus AB 7.7)"
description: "One-page recap of particular solutions: finding the constant from an initial condition, choosing the sign, stating the domain, and the integral form of a solution."
course: "calculus-ab"
unit: 7
topics: ["7.7"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-7.7-study-guide"]
learningObjectives:
  - "Recall the steps for finding a particular solution, including sign and domain"
  - "Spot the common errors with initial conditions before making them"
skills: ["1"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-7.7-study-guide", "mb-ap-calcab-7.7-practice", "mb-ap-calcab-7.7-checklist"]
next: "mb-ap-calcab-7.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "Separate, integrate, add C, substitute the initial point, solve for y, choose the sign, state the domain."
  - "For dy/dx = f(x) through (a, y₀): y = y₀ + ∫ (a to x) f(t) dt."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the domain graph and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/7-7-finding-particular-solutions-initial-conditions-study-guide/). This topic is shared by Calculus AB and Calculus BC.

## Recap

- A **general solution** is a family with one constant. An **initial condition** y(a) = y₀ picks the **one** particular solution through (a, y₀).
- **Steps:** separate → integrate both sides → add one C → substitute (a, y₀) → solve for y → choose the sign → state the domain → check.
- Substitute into the **integrated** equation, not into dy/dx.
- After y² = … take the root whose sign matches y₀. After |y| = …, y keeps the sign of y₀ (it cannot pass through 0).
- **Domain:** the largest open interval containing a on which the formula is defined and satisfies the equation. Watch for division by zero, square roots of negatives and logs of non-positive numbers.

## Key relationships

| Situation | What to do |
|---|---|
| y²/2 = G(x) + C, y₀ < 0 | y = −√(2G(x) + 2C) |
| ln\|y\| = G(x) + C, y₀ < 0 | y = −e^C e^(G(x)), with C from the initial point |
| −1/y = G(x) + C | y = −1/(G(x) + C); domain stops where G(x) + C = 0 |
| dy/dx = f(x), y(a) = y₀ | y = y₀ + ∫ (a to x) f(t) dt |
| Value of the integral form | Use a calculator for the definite integral if no antiderivative is available |

## Assumptions behind the method

- The solution is a differentiable function on one interval containing a.
- The family of solutions has exactly one member through the given point.

## Mistakes to avoid

1. **Putting (a, y₀) into dy/dx** to "find C". That gives only a slope.
2. **Assuming C = y₀** without substituting.
3. **Adding C after rearranging.** The curve hits the point but fails the equation.
4. **Writing ± in the final answer.** Choose one sign.
5. **A domain with a gap** ("all x except ±1"). Give one interval.
6. **Swapping a and y₀** in the integral form.

## Quick self-check

1. Solve dy/dx = 6x², y(1) = 4. *(y = 2x³ + C; 4 = 2 + C; y = 2x³ + 2)*
2. Solve dy/dx = x/y, y(0) = −2. *(y² = x² + 4, and y₀ < 0, so y = −√(x² + 4), all real x)*
3. dy/dx = y², y(0) = 1 gives y = 1/(1 − x). State the domain. *(x < 1, the interval containing 0)*

Next: [practice questions](/advanced-course-resources/calculus-ab/7-7-finding-particular-solutions-initial-conditions-practice/).
