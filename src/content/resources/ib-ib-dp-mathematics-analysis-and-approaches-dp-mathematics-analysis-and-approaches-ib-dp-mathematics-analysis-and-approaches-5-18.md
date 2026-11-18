---
title: "IB DP Mathematics: Analysis and Approaches (AA): 5.18 First order differential equations (AHL only)"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Calculus"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5.18
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-18"
description: "IB DP Maths AA HL section 5.18 study guide: Euler's method, separable and homogeneous equations, and the integrating factor, with worked examples."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deep on one syllabus section of IB Diploma Programme Mathematics: Analysis and Approaches: **section 5.18, first order differential equations**. It is additional higher level (AHL) content, so it is examined at HL only, and it follows the IB *Mathematics: analysis and approaches guide* for first assessment 2021.

For the whole HL calculus unit in one place, see the [further calculus study guide](/resources/ib-dp-mathematics-aa-hl-further-calculus/). This page spends its time on one thing: choosing the right method for a first order equation and carrying it through without losing marks.

## What section 5.18 asks of you

- Find a **numerical solution** of dy/dx = f(x, y) using **Euler's method**: xₙ₊₁ = xₙ + h and yₙ₊₁ = yₙ + h f(xₙ, yₙ).
- Solve equations where the **variables are separable**.
- Solve **homogeneous** equations dy/dx = f(y/x) with the substitution **y = vx**.
- Solve linear equations **y′ + P(x)y = Q(x)** using the **integrating factor**.

"First order" means only the first derivative appears. A **general solution** contains an arbitrary constant and describes a family of curves. A **particular solution** uses a given condition, such as y = 1 when x = 0, to fix the constant.

## Step one: decide what kind of equation it is

Most lost marks come from starting the wrong method. Rearrange to dy/dx = … and ask three questions in order.

| Test | If yes | Method |
|---|---|---|
| Can the right-hand side be written as g(x) × h(y)? | Separable | Divide by h(y), integrate both sides |
| Does the right-hand side depend only on the ratio y/x? | Homogeneous | Put y = vx, then separate v and x |
| Can it be written y′ + P(x)y = Q(x)? | Linear | Multiply by I(x) = e^(∫P(x) dx) |
| None of these, or the question asks for a numerical value | — | Euler's method |

Some equations belong to more than one class. dy/dx = (x + y)/x is homogeneous (it equals 1 + y/x) and linear (y′ − y/x = 1). Either method works, and the question will usually tell you which one to use.

A quick test for homogeneous: replace x by λx and y by λy. If every λ cancels, the right-hand side depends only on y/x.

## Euler's method

Euler's method follows the tangent line for a short step h, recalculates the gradient at the new point, and repeats. Each step uses the gradient at the **start** of that step.

### Worked example 1 (calculator allowed)

Use Euler's method with h = 0.2 to estimate y when x = 0.6, given dy/dx = y − x² and y = 1 when x = 0.

```
n   xₙ    yₙ       f(xₙ, yₙ) = yₙ − xₙ²   yₙ₊₁ = yₙ + 0.2f
0   0     1        1                      1.2
1   0.2   1.2      1.16                   1.432
2   0.4   1.432    1.272                  1.6864
3   0.6   1.6864
```

So y(0.6) ≈ **1.69** (3 s.f.).

This equation is also linear, so its exact solution can be found later in this guide: y = x² + 2x + 2 − eˣ, giving y(0.6) = 1.7379 to 4 d.p. The estimate is too small by about 3%. The curve is concave up here, so each tangent step falls below it. Halving h roughly halves the error, which is why questions often ask what you could do to improve the estimate.

On Paper 2, use the GDC's sequence or table mode to run many steps; write down the table of values you used, not only the final answer.

## Variables separable

Rearrange to h(y) dy = g(x) dx, integrate both sides, and put a single constant on one side only.

### Worked example 2 (calculator allowed)

A cup of tea cools in a room at 18 °C. Its temperature T °C after t minutes satisfies dT/dt = −k(T − 18), where k > 0. Initially T = 85, and after 4 minutes T = 65. Find how long it takes to cool to 30 °C.

```
∫ 1/(T − 18) dT = ∫ −k dt
ln|T − 18| = −kt + c
T − 18 = A e^(−kt),   where A = e^c
t = 0:  T = 85, so A = 67      ->   T = 18 + 67e^(−kt)
t = 4:  65 = 18 + 67e^(−4k)    ->   e^(−4k) = 47/67
                                    k = (1/4) ln(67/47) = 0.08864...
T = 30: 12 = 67e^(−kt)          ->   t = ln(67/12)/k = 19.4 minutes (3 s.f.)
```

Two habits earn marks here. First, keep the modulus in ln|T − 18| until the context shows T − 18 > 0. Second, write e^(−kt + c) as Ae^(−kt). Writing e^(−kt) + c is a common, costly error.

## Homogeneous equations: y = vx

With y = vx, the product rule gives dy/dx = v + x dv/dx. Substituting into dy/dx = f(v) gives

x dv/dx = f(v) − v,

which is always separable in v and x. Finish by replacing v with y/x.

### Worked example 3 (calculator-free)

Solve dy/dx = (x² + 3y²)/(2xy) for x > 0, given y = 1 when x = 1.

Dividing top and bottom by x² shows the right-hand side is (1 + 3v²)/(2v), so the equation is homogeneous.

```
v + x dv/dx = (1 + 3v²)/(2v)
x dv/dx     = (1 + 3v² − 2v²)/(2v) = (1 + v²)/(2v)
∫ 2v/(1 + v²) dv = ∫ 1/x dx
ln(1 + v²) = ln x + c
1 + v² = Ax
1 + y²/x² = Ax
x = 1, y = 1:  2 = A
x² + y² = 2x³,   so y = x√(2x − 1)  (taking the positive root, since y = 1 > 0)
```

Note the integral of 2v/(1 + v²): the numerator is the derivative of the denominator, so it is a logarithm by inspection.

## Linear equations: the integrating factor

For y′ + P(x)y = Q(x), multiply every term by I(x) = e^(∫P(x) dx). The left-hand side then becomes the derivative of a product:

I y′ + I P y = d/dx (I y), because I′ = P I.

So d/dx(I y) = I Q, and y = (1/I) ∫ I Q dx. The constant of integration must be added **before** dividing by I.

### Worked example 4 (calculator-free)

Find the particular solution of x dy/dx − 2y = x³ cos x, x > 0, given y = π²/2 when x = π/2.

First divide by x so the coefficient of y′ is 1:

```
y′ − (2/x) y = x² cos x            P(x) = −2/x
I = e^(∫ −2/x dx) = e^(−2 ln x) = x⁻²
d/dx (y/x²) = cos x
y/x² = sin x + C
y = x² sin x + Cx²
x = π/2:  π²/2 = (π²/4)(1) + C(π²/4)   ->   C = 1
y = x²(sin x + 1)
```

The same method gives the exact answer quoted in worked example 1: for y′ − y = −x², I = e^(−x), so (ye^(−x))′ = −x²e^(−x). Integrating by parts twice and using y(0) = 1 gives y = x² + 2x + 2 − eˣ.

## Common mistakes

- Using the integrating factor before dividing through, so P(x) is wrong.
- Losing the sign of P(x): for y′ − (2/x)y, the integrating factor is x⁻², not x².
- Adding C after dividing by I, which gives y = x² sin x + C instead of y = x² sin x + Cx².
- Writing ln|y| = f(x) + c as y = e^(f(x)) + c.
- Forgetting the v in dy/dx = v + x dv/dx, so the homogeneous equation does not separate.
- Leaving the final answer in v instead of returning to y and x.
- In Euler's method, using the gradient at the end of the step, or rounding y at each step so the error builds up.

## Exam technique: the command words

- **Show that** the integrating factor is …: write e^(∫P dx), integrate P, and simplify to the printed form.
- **Hence** solve: use the result you were just given or found; another method may not earn full marks.
- **Find** the general solution: include the arbitrary constant; **find** y in terms of x: make y the subject if possible.
- **Use Euler's method**: set out xₙ, yₙ and the gradient in a table; give the final value to 3 significant figures unless told otherwise.
- **Verify** that a function satisfies an equation: differentiate it and substitute both sides, rather than solving from scratch.
- **Comment** or **explain** why an estimate is an under- or overestimate: refer to the concavity of the curve or the size of h.

HL Paper 1 allows no technology, so separable, homogeneous and integrating-factor solutions must be done by hand. Paper 2 and Paper 3 require technology, which is where long Euler tables and contexts like worked example 2 tend to appear.

## Where next

Condense this section with the [section 5.18 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-18-revision-notes/), then test yourself with the [section 5.18 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-18-practice/). Differential equations also generate Maclaurin series, which is the next section: see the [section 5.19 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-19/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section 5.18.
