---
title: "IB DP Mathematics: Applications and Interpretation -- Differential equations, slope fields, Euler's method and phase portraits (HL) Revision Notes"
seoTitle: "IB Maths AI HL Differential Equations Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-applications-and-interpretation"
level: ["ib"]
topic: "Differential equations, slope fields, Euler's method and phase portraits (HL)"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Applications and Interpretation"]
syllabusSeries: "First assessments for SL and HL—2021"
order: 5.14
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-calculus"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-5-14"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-calculus"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-5-15"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-calculus"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-5-16"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-calculus"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-5-17"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-calculus"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-5-18"
description: "Condensed IB DP Maths AI HL revision notes on differential equations, Euler's method, slope fields and eigenvalue phase portraits, with a quick self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-09-27
featured: false
---

These notes condense the HL differential equations unit of IB Diploma Programme Mathematics: Applications and Interpretation for your final weeks of revision. For full explanations and longer worked examples, use the [differential equations study guide](/resources/ib-dp-mathematics-ai-hl-differential-equations/).

The notes are aligned to the IB *Mathematics: applications and interpretation guide*, first assessment 2021, syllabus sections 5.14–5.18. All of this content is HL only (AHL). It follows the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so it applies to the May and November 2026, 2027 and 2028 HL sessions. The guide lists all three HL papers as "technology required".

When you can answer the self-test without looking, move on to the [practice questions](/resources/ib-dp-mathematics-ai-hl-differential-equations-practice/). Track the rest of the course with the [IB DP Maths AI course hub](/boards/ib/ib-dp/mathematics-applications-and-interpretation/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-applications-and-interpretation/).

## Key definitions

- **Differential equation**: an equation linking a function and its derivatives, for example dy/dx = ky.
- **General solution**: the solution with the arbitrary constant still in it, for example y = Ae^(kx).
- **Particular solution**: the general solution with the constant fixed by an initial condition.
- **Slope field**: short segments at grid points, each with gradient equal to dy/dx there.
- **Euler's method**: a step-by-step numerical approximation using the gradient at the start of each step.
- **Coupled system**: two equations dx/dt and dy/dt that each depend on x and y.
- **Phase portrait**: a sketch of trajectories in the (x, y) plane, with arrows showing the direction of motion as t increases.
- **Equilibrium point**: a point where dx/dt = 0 and dy/dt = 0. For dx/dt = ax + by, dy/dt = cx + dy it is the origin.
- **Saddle point**: an equilibrium that trajectories approach along one direction and leave along another.

## Formulas and results

| Topic | Result |
|---|---|
| Exponential model | dy/dx = ky gives y = Ae^(kx) |
| Separation | ∫ (1/h(y)) dy = ∫ g(x) dx when dy/dx = g(x)h(y) |
| Euler, one equation | x_(n+1) = x_n + h, y_(n+1) = y_n + h f(x_n, y_n) |
| Euler, coupled | x_(n+1) = x_n + h f₁(x_n, y_n, t_n), y_(n+1) = y_n + h f₂(x_n, y_n, t_n), t_(n+1) = t_n + h |
| Characteristic polynomial | λ² − (a + d)λ + (ad − bc) = 0 for M = [a b; c d] |
| Exact solution (real distinct λ) | (x, y) = A e^(λ₁t) p₁ + B e^(λ₂t) p₂ |
| Second order to first order | d²x/dt² = f(x, dx/dt, t) becomes dx/dt = y, dy/dt = f(x, y, t) |
| Linear second order | d²x/dt² + a dx/dt + bx = 0 gives M = [0 1; −b −a] |

## Eigenvalues and phase portraits

| Eigenvalues of M | Phase portrait |
|---|---|
| Real, both positive | All trajectories move away from the origin |
| Real, both negative | All trajectories move towards the origin |
| Real, opposite signs | Saddle point at the origin |
| Complex, positive real part | Spiral outwards |
| Complex, negative real part | Spiral inwards |
| Imaginary (±bi) | Closed circles or ellipses |

The guide says systems will have distinct, non-zero eigenvalues, and exact solutions are only required when they are real and distinct.

## Method in steps

**Separating variables**

1. Write the equation as dy/dx = g(x)h(y).
2. Rearrange to (1/h(y)) dy = g(x) dx.
3. Integrate both sides. Add one constant.
4. Use the initial condition to find the constant.
5. Rearrange to y = … if asked.

**Euler's method on a GDC or spreadsheet**

1. Write down f, h and the starting values.
2. Enter columns for n, x (or t), y (and a second variable if coupled).
3. Fill down using the update formulas. Keep full accuracy.
4. Write down at least the first step by hand in your answer.
5. Round only the final answer to 3 s.f.

**Phase portrait for dx/dt = ax + by, dy/dt = cx + dy**

1. Write down M and find its eigenvalues.
2. Classify using the table above.
3. For real eigenvalues, find eigenvectors and draw the straight-line trajectories along them.
4. For complex or imaginary eigenvalues, check direction at (1, 0).
5. Add arrows to every trajectory you draw.

**Exact solution (real distinct eigenvalues)**

1. Find λ₁, λ₂ and eigenvectors p₁, p₂.
2. Write (x, y) = A e^(λ₁t) p₁ + B e^(λ₂t) p₂.
3. Put t = 0 and solve for A and B.
4. Read off x and y separately.

## Small worked reminders

- dy/dx = −0.2y, y(0) = 40 gives y = 40e^(−0.2x).
- dy/dx = x/y: y dy = x dx, so y²/2 = x²/2 + c. The general solution is y² = x² + C.
- One Euler step for dy/dx = y − x from (0, 2) with h = 0.5: y₁ = 2 + 0.5(2) = 3.
- M = [1 2; 2 1]: λ² − 2λ − 3 = 0, so λ = 3, −1. Saddle.
- M = [−1 −2; 2 −1]: λ = −1 ± 2i. Spiral in, anticlockwise (dy/dt = 2 at (1, 0)).
- d²x/dt² + 4x = 0: M = [0 1; −4 0], λ = ±2i. Ellipses, clockwise.
- Slope field of dy/dx = x − y: segments are horizontal on y = x, and every segment on y = x − 1 has gradient 1, so that line is itself a solution curve.
- Coupled Euler for dx/dt = 0.5x − 0.01xy, dy/dt = −0.4y + 0.005xy from (100, 20) with h = 0.1: x₁ = 100 + 0.1(30) = 103 and y₁ = 20 + 0.1(2) = 20.2, both from the old values.

## Must-know distinctions

- **General vs particular solution**: the general solution keeps the constant; the particular solution does not.
- **Complex vs imaginary eigenvalues**: complex with non-zero real part gives a spiral; purely imaginary gives a closed orbit.
- **Spiral in vs spiral out**: set by the sign of the real part, not the imaginary part.
- **Sign of the real part vs direction of rotation**: the real part decides in or out; a test point decides clockwise or anticlockwise.
- **Saddle vs node**: opposite-sign real eigenvalues give a saddle; same-sign real eigenvalues give all trajectories moving in or all moving out.
- **Euler estimate vs exact value**: Euler is an approximation; a smaller h usually reduces the error.
- **y in a second order system**: y means dx/dt, the velocity, not a second unknown function.

## Quick self-test

1. Write down the general solution of dy/dx = ky.
2. Solve dy/dx = 2y/x for x > 0, given y = 3 when x = 1.
3. Find the gradient of the slope field of dy/dx = xy − 1 at (2, 1).
4. Use one step of Euler's method with h = 0.1 to estimate y(0.1) for dy/dx = x + y, y(0) = 1.
5. A system has eigenvalues 2 and −3. Describe the origin.
6. A system has eigenvalues −1 ± 3i. Describe the trajectories.
7. A system has eigenvalues ±2i. Describe the trajectories.
8. Write d²x/dt² + 4 dx/dt − 5x = 0 as a coupled system and find the eigenvalues of its matrix.
9. For dx/dt = x − 5y, dy/dt = x − y, find the eigenvalues and the direction of motion.
10. For dx/dt = x + y, dy/dt = 2x, the eigenvalues are 2 and −1 with eigenvectors (1, 1) and (1, −2). Find x and y given x = 3, y = 0 at t = 0.

### Answers

1. y = Ae^(kx).
2. ∫ (1/y) dy = ∫ (2/x) dx, ln y = 2 ln x + c, so y = Ax². With y(1) = 3: **y = 3x²**.
3. (2)(1) − 1 = **1**.
4. y₁ = 1 + 0.1(0 + 1) = **1.1**.
5. Real with opposite signs: the origin is a **saddle point**.
6. Complex with negative real part: trajectories **spiral into the origin**.
7. Imaginary: trajectories are **closed circles or ellipses** around the origin.
8. dx/dt = y, dy/dt = 5x − 4y. M = [0 1; 5 −4], λ² + 4λ − 5 = 0, so **λ = 1 or −5** (a saddle).
9. λ² − 0λ + 4 = 0, so **λ = ±2i**: ellipses. At (1, 0), dy/dt = 1 > 0, so **anticlockwise**.
10. A + B = 3 and A − 2B = 0, so A = 2, B = 1. **x = 2e^(2t) + e^(−t), y = 2e^(2t) − 2e^(−t)**.

## Where marks are usually lost

- Leaving out the constant of integration, then being unable to use the initial condition.
- Writing ln y = kx + c and then y = e^(kx) + c instead of y = Ae^(kx).
- Giving only a GDC value for an Euler estimate with no formula or first step shown.
- Rounding intermediate Euler values to 3 s.f., which changes the final answer.
- Updating y with the new x in a coupled Euler step.
- Getting the characteristic polynomial sign wrong: it is −(a + d)λ, then +(ad − bc).
- Describing a spiral without saying "towards" or "away from" the origin.
- Drawing trajectories with no arrows, or with arrows going the wrong way.
- Stating the long-term ratio y/x from the wrong eigenvector. When its coefficient is non-zero, the term with the larger eigenvalue takes over as t grows.
- Treating dy/dt in a second order system as d²y/dt² rather than d²x/dt².

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: applications and interpretation guide*, first assessment 2021.
