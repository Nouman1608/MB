---
title: "IB DP Mathematics: Applications and Interpretation -- Differential equations, slope fields, Euler's method and phase portraits (HL) Study Guide"
seoTitle: "IB Maths AI HL Differential Equations Study Guide"
resourceType: "study-guides"
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
description: "HL study guide for IB DP Maths AI differential equations: separation of variables, slope fields, Euler's method and phase portraits, worked in full."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-27
featured: false
---

This study guide teaches the differential equations unit of IB Diploma Programme Mathematics: Applications and Interpretation. It is aligned to the IB *Mathematics: applications and interpretation guide*, first assessment 2021, syllabus sections 5.14–5.18, and all of it is HL only (AHL). It follows the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so it applies to the May and November 2026, 2027 and 2028 HL sessions.

All three HL papers are "technology required" in the guide's assessment outline: Paper 1 (120 minutes), Paper 2 (120 minutes) and Paper 3 (60 minutes). You still need to show your method, because method marks are given for working, not for a bare GDC value.

When you have worked through this guide, condense it with the [revision notes](/resources/ib-dp-mathematics-ai-hl-differential-equations-revision-notes/) and test yourself with the [practice questions](/resources/ib-dp-mathematics-ai-hl-differential-equations-practice/). The [IB DP Maths AI course hub](/boards/ib/ib-dp/mathematics-applications-and-interpretation/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-applications-and-interpretation/) show where this unit sits. For the whole course, see the [AI syllabus guide](/resources/ib-dp-mathematics-applications-and-interpretation-syllabus-guide/) and the [AI subject guide](/resources/ib-dp-mathematics-applications-and-interpretation-subject-guide/).

## What this unit covers

| Syllabus section | What you must be able to do | SL/HL |
|---|---|---|
| 5.14 | Set up a differential equation from a context; solve it by separation of variables; use the term "general solution" | HL only |
| 5.15 | Use and interpret slope fields | HL only |
| 5.16 | Use Euler's method for dy/dx = f(x, y) and for coupled systems dx/dt = f₁(x, y, t), dy/dt = f₂(x, y, t) | HL only |
| 5.17 | Draw and interpret phase portraits for dx/dt = ax + by, dy/dt = cx + dy using eigenvalues; find exact solutions when the eigenvalues are real and distinct | HL only |
| 5.18 | Solve d²x/dt² = f(x, dx/dt, t) by Euler's method and, for linear cases, exactly or with a phase portrait | HL only |

Section 5.17 builds on eigenvalues and eigenvectors of 2 × 2 matrices (AHL 1.15).

## 5.14 Setting up and separating variables

### Setting up a model

Turn the words into a rate statement. "The rate of growth of G is proportional to G" becomes

```
dG/dt = kG
```

Here k is a constant. It is positive for growth and negative for decay. "Proportional to the difference between T and 20" becomes dT/dt = k(T − 20).

### Separation of variables

If dy/dx = g(x)h(y), move every y to the left and every x to the right, then integrate both sides:

```
(1/h(y)) dy = g(x) dx   →   ∫ (1/h(y)) dy = ∫ g(x) dx
```

Add **one** constant of integration. The answer with the constant still in it is the **general solution**. An initial condition fixes the constant and gives a particular solution.

The key example in the guide is dy/dx = ky. Separating gives ln|y| = kx + c, so y = Ae^(kx). This is the exponential model.

### Worked example 1

An algae population G is 50 units at t = 0 and 80 units at t = 3 days. Its rate of growth is proportional to G. Find G when t = 10.

```
dG/dt = kG
∫ (1/G) dG = ∫ k dt
ln G = kt + c          (G > 0)
G = Ae^(kt)            general solution
t = 0:  A = 50
t = 3:  50e^(3k) = 80  →  k = (1/3) ln 1.6 = 0.156668…
G(10) = 50e^(10k) = 239.535…
```

**G ≈ 240 units.** Keep k unrounded in your GDC until the final line.

### Worked example 2

Solve dy/dx = (x + 1)y, given y = 2 when x = 0.

```
∫ (1/y) dy = ∫ (x + 1) dx
ln y = x²/2 + x + c
x = 0, y = 2:  c = ln 2
y = 2e^(x²/2 + x)
```

So y(1) = 2e^1.5 ≈ **8.96**.

## 5.15 Slope fields

A slope field draws a short line segment at each grid point (x, y). The gradient of the segment is the value of dy/dx at that point. You do not need to solve the equation to draw one.

A solution curve follows the segments. It never crosses them at an angle. Different starting points give different curves, and together they show the family of solutions.

### Worked example 3

For dy/dx = x − y, find the gradients at the grid points with x, y ∈ {−1, 0, 1, 2}.

| | x = −1 | x = 0 | x = 1 | x = 2 |
|---|---|---|---|---|
| y = 2 | −3 | −2 | −1 | 0 |
| y = 1 | −2 | −1 | 0 | 1 |
| y = 0 | −1 | 0 | 1 | 2 |
| y = −1 | 0 | 1 | 2 | 3 |

How to interpret it:

- The segments are horizontal where x − y = 0, that is on the line y = x. Solution curves have turning points there.
- Along the line y = x − 1 every segment has gradient 1, the same as the line itself. So y = x − 1 is itself a solution. Check: dy/dx = 1 and x − y = x − (x − 1) = 1.
- Curves above and below this line bend towards it as x increases. That describes the long-term behaviour of every solution.

To sketch the solution through a given point, start there and follow the segments in both directions.

## 5.16 Euler's method

Euler's method steps along the slope field in small jumps of width h. For dy/dx = f(x, y):

```
x_(n+1) = x_n + h
y_(n+1) = y_n + h × f(x_n, y_n)
```

The guide says spreadsheets should be used, and that in examinations "values will be generated using permissible technology". Set up a table in your GDC or a spreadsheet, but write down the formula you used and the first row or two.

### Worked example 4

Use Euler's method with h = 0.1 to estimate y(0.3) for dy/dx = x² − y, y(0) = 1.

| n | x_n | y_n | f(x_n, y_n) |
|---|---|---|---|
| 0 | 0 | 1 | −1 |
| 1 | 0.1 | 0.9 | −0.89 |
| 2 | 0.2 | 0.811 | −0.771 |
| 3 | 0.3 | 0.7339 | |

**y(0.3) ≈ 0.734.** With h = 0.05 the estimate is 0.742, and the true value is 0.749 to 3 s.f. A smaller step gives a better estimate.

### Coupled systems

For dx/dt = f₁(x, y, t) and dy/dt = f₂(x, y, t), update both variables from the **same** old values:

```
t_(n+1) = t_n + h
x_(n+1) = x_n + h × f₁(x_n, y_n, t_n)
y_(n+1) = y_n + h × f₂(x_n, y_n, t_n)
```

### Worked example 5

Prey x and predators y satisfy dx/dt = 0.5x − 0.01xy and dy/dt = −0.4y + 0.005xy, with x = 100 and y = 20 at t = 0. Use h = 0.1 to estimate both at t = 0.2.

```
Step 1:  dx/dt = 50 − 20 = 30,   dy/dt = −8 + 10 = 2
         x₁ = 100 + 0.1(30) = 103,   y₁ = 20 + 0.1(2) = 20.2
Step 2:  dx/dt = 51.5 − 20.806 = 30.694,   dy/dt = −8.08 + 10.403 = 2.323
         x₂ = 106.0694,   y₂ = 20.4323
```

**x ≈ 106, y ≈ 20.4.**

## 5.17 Phase portraits for coupled linear systems

The system dx/dt = ax + by, dy/dt = cx + dy is written as

```
d/dt (x, y) = M (x, y),   M = [a b; c d]
```

The origin is an equilibrium point. The eigenvalues of M come from the characteristic polynomial:

```
λ² − (a + d)λ + (ad − bc) = 0
```

The guide says systems will have distinct, non-zero eigenvalues. Their type fixes the shape of the phase portrait:

| Eigenvalues | Behaviour of trajectories |
|---|---|
| Both positive, or complex with positive real part | Move away from the origin |
| Both negative, or complex with negative real part | Move towards the origin |
| Complex | Spiral |
| Imaginary (real part 0) | Circle or ellipse around the origin |
| Real, one positive and one negative | The origin is a saddle point |

To find the direction of rotation for complex or imaginary eigenvalues, work out (dx/dt, dy/dt) at a test point such as (1, 0). If dy/dt > 0 there, trajectories go anticlockwise.

### Exact solutions (real distinct eigenvalues only)

If λ₁, λ₂ have eigenvectors p₁, p₂, the general solution is

```
(x, y) = A e^(λ₁t) p₁ + B e^(λ₂t) p₂
```

The guide only requires exact solutions for this case. Straight-line trajectories run along the eigenvector directions.

### Worked example 6

Solve dx/dt = x + 2y, dy/dt = 2x + y with x = 3, y = 1 at t = 0, and describe the phase portrait.

```
λ² − 2λ − 3 = 0  →  λ = 3 or λ = −1
λ = 3:   eigenvector (1, 1)
λ = −1:  eigenvector (1, −1)
(x, y) = A e^(3t)(1, 1) + B e^(−t)(1, −1)
t = 0:  A + B = 3,  A − B = 1  →  A = 2, B = 1
x = 2e^(3t) + e^(−t),   y = 2e^(3t) − e^(−t)
```

The eigenvalues have different signs, so the origin is a **saddle point**. Trajectories come in along y = −x (λ = −1) and leave along y = x (λ = 3). Here A ≠ 0, so the e^(3t) term takes over: x and y both grow without bound and y/x → 1.

### Worked example 7

For dx/dt = −x − 2y, dy/dt = 2x − y:

```
λ² + 2λ + 5 = 0  →  λ = −1 ± 2i
At (1, 0):  dx/dt = −1,  dy/dt = 2
```

The eigenvalues are complex with negative real part, so trajectories **spiral into the origin**. Since dy/dt > 0 at (1, 0), they turn **anticlockwise**.

## 5.18 Second order differential equations

Write d²x/dt² = f(x, dx/dt, t) as two first order equations:

```
dx/dt = y
dy/dt = f(x, y, t)
```

Then use the coupled Euler method from 5.16. The guide says the equation will be given in examinations.

For d²x/dt² + a dx/dt + bx = 0 the system is linear, with M = [0 1; −b −a]. So the 5.17 methods apply: plot x across and y = dx/dt up. Above the x-axis, dx/dt > 0, so trajectories move right.

### Worked example 8

For d²x/dt² + 3 dx/dt + 2x = 0, x(0) = 1, dx/dt(0) = 0:

```
dx/dt = y,  dy/dt = −2x − 3y
λ² + 3λ + 2 = 0  →  λ = −1, −2
λ = −1: (1, −1);   λ = −2: (1, −2)
x = A e^(−t) + B e^(−2t),   y = −A e^(−t) − 2B e^(−2t)
A + B = 1,  −A − 2B = 0  →  A = 2, B = −1
x = 2e^(−t) − e^(−2t)
```

Both eigenvalues are negative. All trajectories go to the origin and x returns to 0 without oscillating.

Euler with h = 0.1: x₁ = 1, y₁ = 0 + 0.1(−2) = −0.2; x₂ = 1 + 0.1(−0.2) = 0.98, y₂ = −0.2 + 0.1(−2 + 0.6) = −0.34. The exact value is x(0.2) = 0.967 to 3 s.f.

For d²x/dt² + 4x = 0, M = [0 1; −4 0] and λ = ±2i. The phase portrait is a set of ellipses: undamped oscillation. At (1, 0), dy/dt = −4, so the motion is clockwise.

## Common errors

- Separating with a constant on both sides and then losing one. Use a single c.
- Rounding k or an Euler value mid-calculation. Keep full values in the GDC.
- In coupled Euler, using the new x to update y in the same step. Both updates use the old values.
- Forgetting that t also increases by h when f₂ depends on t.
- Calling complex eigenvalues "a circle". Only a zero real part gives a closed orbit.
- Giving a saddle point as "stable". Most trajectories leave a saddle.
- Swapping the eigenvectors when fitting A and B. Match each eigenvector to its own eigenvalue.
- For second order equations, plotting dy/dt instead of y = dx/dt on the vertical axis.

## Where to go next

- Condensed recall: [differential equations revision notes](/resources/ib-dp-mathematics-ai-hl-differential-equations-revision-notes/)
- Exam-style practice: [differential equations practice questions](/resources/ib-dp-mathematics-ai-hl-differential-equations-practice/)
- Planning your final weeks: [AI exam preparation guide](/resources/ib-dp-mathematics-applications-and-interpretation-exam-preparation/)

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: applications and interpretation guide*, first assessment 2021.
