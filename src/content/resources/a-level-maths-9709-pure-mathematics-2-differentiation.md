---
title: "Cambridge International AS & A Level Mathematics 9709: Pure Mathematics 2 Differentiation -- Study Guide"
seoTitle: "9709 P2 Differentiation Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Pure Mathematics 2: Differentiation"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 40
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-2-cambridge-alevel"
  - qualification: "a-level"
    topic: "pure-mathematics-2-cambridge-alevel"
    subtopic: "differentiation-cambridge-alevel-maths-2"
description: "Study guide for Cambridge 9709 Pure Mathematics 2 section 2.4: derivatives of eˣ, ln x and trig, product and quotient rules, parametric and implicit."
author: "marlbridge-academic-team"
publishedDate: 2026-09-28
featured: false
---

This study guide teaches section 2.4, Differentiation, of the Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027 (Version 4). Section 2.4 is part of Pure Mathematics 2 and is examined on Paper 2 (1 hour 15 minutes, 50 marks), which is taken only in the AS Level Pure Mathematics route of Paper 1 plus Paper 2. The syllabus says knowledge of Paper 1 is assumed, so the chain rule, tangents, normals and stationary points from section 1.7 are all fair game here. The same three learning outcomes appear again in section 3.4 of Pure Mathematics 3, which adds tan⁻¹ x.

A scientific calculator is allowed in every 9709 examination, but no marks are given for unsupported answers from a calculator. Show each differentiation step. Give exact answers when asked (π, e, ln 3, √3 left in), and 3 significant figures otherwise.

Use this page with the [revision notes](/resources/a-level-maths-9709-pure-mathematics-2-differentiation-revision-notes/) and the [practice questions](/resources/a-level-maths-9709-pure-mathematics-2-differentiation-practice/). The basics you need first are in the [Pure Mathematics 1 differentiation guide](/resources/a-level-maths-9709-pure-mathematics-1-differentiation/) and the [logarithms and exponentials guide](/resources/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials/). For the whole paper, see the [Pure Mathematics 2 guide](/resources/a-level-mathematics-pure-mathematics-2/). Course links: the [A Level Mathematics hub](/boards/cambridge/a-level/mathematics/) and the [printable 9709 checklist](/checklists/cambridge/a-level/mathematics/).

## What this unit covers

| Syllabus 2.4 | What you must be able to do | Paper |
|---|---|---|
| Standard derivatives | Use the derivatives of eˣ, ln x, sin x, cos x and tan x, with constant multiples, sums, differences and composites | Paper 2 |
| Products and quotients | Differentiate products and quotients, such as a fraction of two linear expressions, x² ln x or a product with an exponential | Paper 2 |
| Parametric and implicit | Find and use the first derivative of a curve given parametrically or implicitly, including tangents and normals | Paper 2 |

Only the **first** derivative is required for parametric and implicit curves. Second derivatives of explicit functions (from Paper 1) can still be used, for example to classify a stationary point.

## 1. The five standard derivatives

| f(x) | f′(x) |
|---|---|
| eˣ | eˣ |
| ln x | 1/x |
| sin x | cos x |
| cos x | −sin x |
| tan x | sec²x |

All five are printed in the list of formulae (MF19). MF19 also prints sec x, cosec x, cot x and tan⁻¹ x; section 2.4 does not name those, but you can still reach sec x by treating it as (cos x)⁻¹ and using the chain rule. For every trig result, **x must be in radians**.

### Composites: the chain rule again

The chain rule from Paper 1 extends to these functions. Differentiate the outer function, keep the inside as it is, then multiply by the derivative of the inside.

```
d/dx e^(f(x))  = f'(x) e^(f(x))
d/dx ln(f(x))  = f'(x) / f(x)
d/dx sin(f(x)) = f'(x) cos(f(x))
d/dx cos(f(x)) = -f'(x) sin(f(x))
d/dx tan(f(x)) = f'(x) sec^2(f(x))
```

*Worked example 1.* Differentiate each with respect to x.

```
(a) y = 3e^(1 - 4x)       dy/dx = 3 × (-4) e^(1 - 4x)   = -12e^(1 - 4x)
(b) y = ln(5 - 2x)        dy/dx = -2/(5 - 2x)           =  2/(2x - 5)
(c) y = cos³x = (cos x)³  dy/dx = 3(cos x)² × (-sin x)  = -3cos²x sin x
(d) y = tan(3x + π/4)     dy/dx = 3sec²(3x + π/4)
```

In (c), cos³x means (cos x)³, so the outer function is a cube and the inner is cos x.

**Simplify logs first.** ln(x⁴) = 4 ln x, so its derivative is 4/x. ln(3x) = ln 3 + ln x, so its derivative is just 1/x; the ln 3 is a constant. Using a log law before differentiating often removes the chain rule entirely.

*Worked example 2.* Find the exact coordinates of the stationary point of y = e^(2x) − 6x, and determine its nature.

```
dy/dx = 2e^(2x) - 6 = 0
e^(2x) = 3   →   2x = ln 3   →   x = ½ ln 3
y = e^(ln 3) - 6(½ ln 3) = 3 - 3 ln 3
d²y/dx² = 4e^(2x) = 4 × 3 = 12 > 0   →   minimum
```

The minimum point is (½ ln 3, 3 − 3 ln 3). Note e^(2x) = e^(ln 3) = 3 exactly; there is no need for decimals.

## 2. The product rule

If y = uv, where u and v are both functions of x:

```
dy/dx = u (dv/dx) + v (du/dx)
```

This is in MF19. Name u and v, write down du/dx and dv/dx, then substitute. Factorise the answer when you need to solve dy/dx = 0.

*Worked example 3.* Find the exact coordinates of the stationary point of y = x³ ln x, for x > 0.

```
u = x³       du/dx = 3x²
v = ln x     dv/dx = 1/x

dy/dx = x³ × (1/x) + ln x × 3x² = x² + 3x² ln x = x²(1 + 3 ln x)
```

x² ≠ 0 for x > 0, so 1 + 3 ln x = 0, giving ln x = −1/3 and x = e^(−1/3). Then y = (e^(−1/3))³ × (−1/3) = e⁻¹ × (−1/3). The stationary point is **(e^(−1/3), −1/(3e))**.

To classify it, differentiate again: d²y/dx² = 2x(1 + 3 ln x) + x² × 3/x. At the stationary point the first term is zero, so d²y/dx² = 3x = 3e^(−1/3) > 0: a **minimum**.

*Worked example 4.* Find the exact gradient of y = x tan x at x = π/4.

```
dy/dx = tan x + x sec²x
At x = π/4: tan(π/4) = 1, sec²(π/4) = 1/cos²(π/4) = 1/(½) = 2
dy/dx = 1 + (π/4)(2) = 1 + π/2
```

## 3. The quotient rule

If y = u/v:

```
dy/dx = (v (du/dx) - u (dv/dx)) / v²
```

This is also in MF19. The order on the top matters: **v du/dx comes first**. Getting it the wrong way round changes the sign of the whole answer.

The quotient rule shows where the tan x result comes from. With u = sin x and v = cos x:

```
d/dx (sin x / cos x) = (cos x × cos x - sin x × (-sin x)) / cos²x
                     = (cos²x + sin²x) / cos²x = 1/cos²x = sec²x
```

*Worked example 5.* The curve y = (sin x)/(2 + cos x) is defined for 0 ≤ x ≤ 2π. Find the exact coordinates of the stationary points.

```
u = sin x         du/dx = cos x
v = 2 + cos x     dv/dx = -sin x

dy/dx = ((2 + cos x) cos x - sin x (-sin x)) / (2 + cos x)²
      = (2 cos x + cos²x + sin²x) / (2 + cos x)²
      = (2 cos x + 1) / (2 + cos x)²
```

The denominator is never zero, since 2 + cos x ≥ 1. So dy/dx = 0 when cos x = −½, giving x = 2π/3 or x = 4π/3.

```
x = 2π/3:  y = (√3/2) / (3/2) = √3/3
x = 4π/3:  y = (-√3/2) / (3/2) = -√3/3
```

The stationary points are (2π/3, √3/3) and (4π/3, −√3/3). The identity cos²x + sin²x = 1 did the key simplification; look for it whenever sin² and cos² both appear on the top.

**Product or quotient?** Any quotient can be rewritten as a product: (x² + 1)/eˣ = (x² + 1)e^(−x). Choose whichever keeps the algebra shortest. If the denominator is a single power such as x³, rewriting as x⁻³ is usually quicker.

## 4. Parametric differentiation

A curve is defined parametrically when x and y are both given in terms of a third variable, the parameter (usually t or θ). The chain rule gives:

```
dy/dx = (dy/dt) ÷ (dx/dt)
```

This result is in MF19. The gradient is normally left in terms of t. To use it at a point, find the value of t first, then get x, y and the gradient from that t.

*Worked example 6.* A curve has parametric equations x = 4 sin t, y = 3 cos 2t, for 0 ≤ t ≤ ½π. Find the equation of the normal at the point where t = π/6.

```
dx/dt = 4 cos t
dy/dt = -6 sin 2t = -12 sin t cos t      (double angle, section 2.3)
dy/dx = -12 sin t cos t / (4 cos t) = -3 sin t

At t = π/6:  x = 4 × ½ = 2,  y = 3 cos(π/3) = 3/2,  dy/dx = -3/2
Normal gradient = 2/3
y - 3/2 = (2/3)(x - 2)
6y - 9 = 4x - 8   →   4x - 6y + 1 = 0
```

The same method finds special points. The tangent is parallel to the x-axis where dy/dt = 0 (and dx/dt ≠ 0). It is parallel to the y-axis where dx/dt = 0 (and dy/dt ≠ 0).

## 5. Implicit differentiation

An implicit equation mixes x and y and is not rearranged into y = f(x). Differentiate every term with respect to x. A term in y alone is differentiated as normal and then multiplied by dy/dx, which is the chain rule:

```
d/dx (y²)    = 2y dy/dx
d/dx (e^y)   = e^y dy/dx
d/dx (ln y)  = (1/y) dy/dx
d/dx (sin y) = cos y dy/dx
d/dx (xy)    = y + x dy/dx        (product rule)
```

Then collect every dy/dx term on one side, factorise, and divide. Constants on the right differentiate to 0.

*Worked example 7.* The curve 2x² − xy + y² = 16 has two points with x = 2. Find them, and find the equation of the tangent at the point where y > 0.

```
x = 2:  8 - 2y + y² = 16  →  y² - 2y - 8 = 0  →  (y - 4)(y + 2) = 0
Points: (2, 4) and (2, -2)

Differentiate:  4x - (y + x dy/dx) + 2y dy/dx = 0
                dy/dx (2y - x) = y - 4x
                dy/dx = (y - 4x) / (2y - x)

At (2, 4):  dy/dx = (4 - 8)/(8 - 2) = -2/3
Tangent:  y - 4 = -(2/3)(x - 2)  →  3y - 12 = -2x + 4  →  2x + 3y = 16
```

The minus sign in front of xy applies to both parts of the product rule: −(y + x dy/dx). Dropping the bracket is one of the most common ways to lose the method mark.

## Common errors

- Writing d/dx ln(5 − 2x) as 1/(5 − 2x) with no factor −2 from the inside.
- Treating cos³x as cos(x³), or differentiating sin²x as cos²x.
- Using degrees in a trig derivative. sin x differentiates to cos x only for x in radians.
- Reversing the top of the quotient rule, u dv/dx − v du/dx, so the sign of every stationary-point test flips.
- Cancelling terms across the fraction line before the quotient rule is finished.
- Forgetting dy/dx on a y term in implicit work, especially on y² or e^y.
- Using the product rule on a constant multiple: d/dx (5 sin x) is just 5 cos x.
- In parametric questions, substituting x = 2 into the t-expression for the gradient instead of first finding the value of t.
- Giving the tangent's gradient when the question asks for the normal, or using −m instead of −1/m.
- Leaving answers as decimals when "exact" was asked for, such as 0.549 for ½ ln 3.

## Next steps

Condense this with the [revision notes](/resources/a-level-maths-9709-pure-mathematics-2-differentiation-revision-notes/), then test yourself on the [practice questions](/resources/a-level-maths-9709-pure-mathematics-2-differentiation-practice/). Check your AS readiness with the free [AS diagnostic](/practice/9709/diagnostic/as/) or the [9709 self-check bank](/practice/9709/). For mixed Paper 2 practice, use the [Pure Mathematics 2 practice set](/resources/a-level-mathematics-pure-mathematics-2-practice/). If you move on to Paper 3, the same skills continue in the [Pure Mathematics 3 guide](/resources/a-level-maths-9709-pure-mathematics-3/).

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus, for exams in 2026 and 2027 (Version 4), Cambridge University Press & Assessment. Topic 2, Pure Mathematics 2 (for Paper 2): section 2.4 Differentiation.
