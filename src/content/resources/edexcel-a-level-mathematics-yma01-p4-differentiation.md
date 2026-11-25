---
title: "Pearson Edexcel International A Level Mathematics (YMA01): P4 Differentiation"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit P4: Pure Mathematics 4"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 4.5
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p4-pure-mathematics-4-edexcel-alevel-maths"
    subtopic: "p4-differentiation-edexcel-alevel-maths"
description: "Edexcel IAL Maths P4 differentiation: implicit and parametric gradients, tangents and normals, forming differential equations and connected rates of change."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 5 of Unit P4: Pure Mathematics 4 (WMA14) in the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification (YMA01), Issue 3. There are two statements: "Differentiation of simple functions defined implicitly or parametrically", where "the finding of equations of tangents and normals to curves given parametrically or implicitly is required", and "Formation of simple differential equations", where "questions involving connected rates of change may be set". Solving differential equations belongs to section 6, Integration. Here you only set them up.

## What the specification asks for

| Statement | You must be able to |
|---|---|
| 5.1 Implicit | Differentiate an equation in x and y term by term and make dy/dx the subject |
| 5.1 Parametric | Find dy/dx from dy/dt and dx/dt |
| 5.1 Tangents and normals | Use either gradient to write the equation of a tangent or normal |
| 5.2 Forming equations | Turn a sentence about a rate of change into a differential equation |
| 5.2 Connected rates | Link two rates with the chain rule |

Every technique from P3 is assumed: the chain, product and quotient rules, and the derivatives of eˣ, ln x and the trigonometric functions.

## Implicit differentiation

In an implicit equation such as x² + xy + y² = 12, y is not the subject. Differentiate every term with respect to x. A term in y alone is differentiated by the chain rule, so each one picks up a factor dy/dx:

| Term | Derivative with respect to x |
|---|---|
| y² | 2y dy/dx |
| y³ | 3y² dy/dx |
| eʸ | eʸ dy/dx |
| sin y | cos y dy/dx |
| ln y | (1/y) dy/dx |
| xy | y + x dy/dx (product rule) |
| x²y | 2xy + x² dy/dx (product rule) |
| a constant | 0 |

Then collect the dy/dx terms on one side, factorise, and divide. The answer will usually contain both x and y, so you need both coordinates of a point to find the gradient there.

## Worked example 1: horizontal tangents on an implicit curve

Find the coordinates of the points on x² + xy + y² = 12 where the tangent is parallel to the x-axis.

```
2x + (y + x dy/dx) + 2y dy/dx = 0
dy/dx (x + 2y) = -(2x + y)
dy/dx = -(2x + y)/(x + 2y)
```

The tangent is horizontal when dy/dx = 0, so the numerator is zero: y = −2x. That is a line, not a point. Substitute it into the curve:

```
x^2 + x(-2x) + (-2x)^2 = 12
3x^2 = 12,  so x = 2 or x = -2
points: (2, -4) and (-2, 4)
```

Check the denominator at each point. At (2, −4), x + 2y = −6, which is not zero, so dy/dx = 0 is valid. The same holds at (−2, 4). A vertical tangent works the other way round: set the denominator to zero instead.

## Parametric differentiation

If x and y are both given in terms of t:

```
dy/dx = (dy/dt) / (dx/dt)
```

The gradient comes out in terms of t. To find a tangent or normal at a point, find the value of t first, then work out both the coordinates and the gradient from it.

- Horizontal tangent: dy/dt = 0 (with dx/dt ≠ 0).
- Vertical tangent: dx/dt = 0 (with dy/dt ≠ 0).

## Worked example 2: a normal meets the curve again

The curve C has parametric equations x = t², y = 2t. The normal to C at the point P, where t = 2, meets C again at Q. Find the coordinates of Q.

```
dx/dt = 2t,  dy/dt = 2,  dy/dx = 2/(2t) = 1/t
at t = 2: P = (4, 4), tangent gradient 1/2, normal gradient -2
normal: y - 4 = -2(x - 4), so y = 12 - 2x
```

Now substitute the parametric equations into the normal's equation:

```
2t = 12 - 2t^2
t^2 + t - 6 = 0
(t + 3)(t - 2) = 0
```

t = 2 is P itself, which is a useful check. So t = −3 gives Q = (9, −6). Substituting the parameter into the line gives one equation in t, and the root you already know helps you factorise it.

## Forming differential equations

Each phrase in a question becomes one part of the equation. Introduce the constant k and say that it is positive.

| Wording | Equation |
|---|---|
| "The rate of increase of N is proportional to N" | dN/dt = kN |
| "V decreases at a rate proportional to √V" | dV/dt = −k√V |
| "The rate of change of θ is proportional to the difference between θ and 20" (cooling) | dθ/dt = −k(θ − 20) |
| "Liquid is added at 5 cm³ s⁻¹ and leaks at a rate proportional to h" | dV/dt = 5 − kh |
| "x increases at a rate inversely proportional to x²" | dx/dt = k/x² |

The sign carries the direction. With k > 0, a decreasing quantity needs a minus sign in front.

## Connected rates of change

If two quantities both depend on time, the chain rule links their rates:

```
dV/dt = dV/dr × dr/dt
```

Write a formula linking the two quantities, differentiate it with respect to the variable it contains, then multiply or divide by the rate you are given. Units help: (cm³ per cm) × (cm per s) gives cm³ per s.

## Worked example 3: a sphere

The surface area of a sphere increases at 8 cm² s⁻¹. Find the rate at which its volume increases when the radius is 5 cm.

```
S = 4πr^2,  dS/dr = 8πr = 40π  when r = 5
dr/dt = (dS/dt) / (dS/dr) = 8 / (40π) = 1/(5π)
V = (4/3)πr^3,  dV/dr = 4πr^2 = 100π
dV/dt = 100π × 1/(5π) = 20 cm^3 s^-1
```

The radius is the link between surface area and volume, so the method finds dr/dt first. Leaving π in until the last line keeps the arithmetic exact.

## Worked example 4: forming an equation with inflow and outflow

Water is poured into a tank at a constant rate of 0.2 m³ per minute. Water leaks out at a rate proportional to the square root of the depth h metres. The tank has a horizontal cross-section of area 2 m². Show that dh/dt = 0.1 − k√h for a positive constant k.

```
volume V = 2h,  so dV/dt = 2 dh/dt
dV/dt = 0.2 - c√h,  where c > 0
2 dh/dt = 0.2 - c√h
dh/dt = 0.1 - (c/2)√h = 0.1 - k√h,  with k = c/2
```

The constant changes when you divide, so rename it and say so. This is where "show that" marks are often lost.

## Common mistakes

- Differentiating y² as 2y and forgetting the dy/dx.
- Treating xy as if it were x times a constant, and so losing the product rule.
- Finding dy/dx in terms of t and then substituting an x value instead of the matching t.
- Using the tangent's gradient for the normal, or forgetting the negative reciprocal.
- In a rates question, multiplying by dr/dt when you should divide.
- Writing dV/dt = k√V for a quantity that decreases, or not stating that k > 0.

## Exam technique

- **"Find dy/dx in terms of x and y"** accepts any correct rearrangement, but simplify the signs.
- **"Find an equation of the tangent"** wants a final equation; a form such as ax + by + c = 0 with integers may be asked for.
- **"Show that"** in a differential equation question means write each phrase as a term, define the constant, and finish exactly on the given equation.
- **"Hence"** after a gradient part tells you to use that gradient, not to start again.
- Give exact answers (with π or surds) unless the question asks for a decimal.

## Where next

- [P4 differentiation revision notes](/resources/edexcel-a-level-mathematics-yma01-p4-differentiation-revision-notes/) for the derivative tables and a self-test.
- [P4 differentiation practice questions](/resources/edexcel-a-level-mathematics-yma01-p4-differentiation-practice/) with mark schemes.
- [P4 coordinate geometry study guide](/resources/edexcel-a-level-mathematics-yma01-p4-coordinate-geometry/) for converting between parametric and cartesian forms.
- [Parametric and implicit differentiation](/resources/edexcel-ial-mathematics-parametric-equations-and-differentiation-of-implicit/), the broader P4 guide.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification, Issue 3, April 2019 —
[qualifications.pearson.com](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf).
