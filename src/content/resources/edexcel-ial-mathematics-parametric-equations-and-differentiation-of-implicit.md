---
title: "Pearson Edexcel International Advanced Level Mathematics: Parametric and implicit differentiation (YMA01)"
seoTitle: "Edexcel IAL Maths Parametric and Implicit Differentiation"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Parametric equations and differentiation of implicit and parametric functions, rates of change and differential equations"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 151
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p4-pure-mathematics-4-edexcel-alevel-maths"
    subtopic: "p4-coordinate-geometry-edexcel-alevel-maths"
  - qualification: "a-level"
    topic: "unit-p4-pure-mathematics-4-edexcel-alevel-maths"
    subtopic: "p4-differentiation-edexcel-alevel-maths"
description: "Study guide to parametric equations, implicit and parametric differentiation, forming differential equations and connected rates for Edexcel IAL Maths."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-11
featured: false
reviewNote: "2026-11-08: reviewed by sajawal-zahid."
---

This guide follows the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification (Issue 3, April 2019) and covers Pure Mathematics 4 (P4) sections 3.1, 5.1 and 5.2. P4 is a compulsory unit for IAL Mathematics and Pure Mathematics; the specification gives its IAS weighting as N/A, so it is not part of IAS. The specification assumes P1, P2 and P3 knowledge, so the chain, product and quotient rules are taken as known.

Use it with the [revision notes](/resources/edexcel-ial-mathematics-parametric-equations-and-differentiation-of-implicit-revision-notes/) and the [practice questions](/resources/edexcel-ial-mathematics-parametric-equations-and-differentiation-of-implicit-practice/). See the [Edexcel A-level Mathematics hub](/boards/edexcel/a-level/mathematics/), the [printable checklist](/checklists/edexcel/a-level/mathematics/) and the [free 10-minute diagnostics](/diagnostics/). Gradients, tangents and normals from P1 are in [differentiating powers of x](/resources/edexcel-ial-mathematics-differentiating-and-integrating-powers-of-x-gradients/).

## What this unit covers

| Spec | You must be able to | Where |
|---|---|---|
| 3.1 | Use parametric equations of curves; convert between cartesian and parametric forms | Section 1 |
| 5.1 | Differentiate simple functions defined implicitly; find tangents and normals | Section 2 |
| 5.1 | Differentiate simple functions defined parametrically; find tangents and normals | Section 3 |
| 5.2 | Form simple differential equations | Section 4 |
| 5.2 | Solve connected rates of change problems | Section 5 |

Solving a differential equation is spec 6.4, and volume of revolution (6.1) and area under a curve (6.5) from parametric equations are integration topics. None of these is covered here.

## 1. Parametric equations (3.1)

A curve is given parametrically when x and y are both functions of a third variable, the parameter, usually t or θ. Every parameter value picks out a single point (x, y). The parameter often has a range, such as 0 ≤ t ≤ 2π, and that range limits which part of the curve you get.

To convert to a cartesian equation, eliminate the parameter. Three routes cover most questions:

- Make t the subject of one equation and substitute into the other.
- Use sin²t + cos²t = 1 (or 1 + tan²t = sec²t) when the equations contain trig functions.
- Use a double-angle formula first if one equation has 2t and the other t.

### Worked example 1: algebraic elimination

A curve has x = 3t − 1 and y = 2t² − 5t. Find y in terms of x.

```
t = (x + 1)/3
y = 2(x + 1)²/9 − 5(x + 1)/3
  = [2(x² + 2x + 1) − 15(x + 1)]/9
  = (2x² − 11x − 13)/9
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--06-product-rule-area.webp" width="900" height="650" alt="A rectangle of width u and height v has area uv. When x increases a little, u grows by du and v by dv, adding a strip of area v du on the right, a strip u dv on the top, and a tiny corner du dv which vanishes in the limit. So the change in uv is v du + u dv, giving (uv)′ = u′v + uv′. Example: y = x cubed times e to the 2x at x = 1 has gradient 3e squared + 2e squared = 5e squared, about 36.9." loading="lazy">
  <figcaption>Why the product rule has two terms: the rectangle area uv grows by v du + u dv.</figcaption>
</figure>


### Worked example 2: trig elimination

<!-- marlbridge-diagram:maths-b23-parametric-ellipse-sin-cos -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/mathematics/maths-b23-parametric-ellipse-sin-cos.svg" aria-label="Open full-size diagram: maths-b23-parametric-ellipse-sin-cos"><img src="/images/learning/mathematics/maths-b23-parametric-ellipse-sin-cos.svg" width="1600" height="1050" alt="For x=2 sin t+1 and y=3 cos t−2, the identity sin²t+cos²t=1 gives ((x−1)/2)²+((y+2)/3)²=1, an ellipse centred at (1,−2), with horizontal semi-axis 2 and vertical semi-axis 3." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>For x=2 sin t+1 and y=3 cos t−2, the identity sin²t+cos²t=1 gives ((x−1)/2)²+((y+2)/3)²=1, an ellipse centred at (1,−2), with horizontal semi-axis 2 and vertical semi-axis 3. Select the image to enlarge it.</figcaption>
</figure>
<!-- /marlbridge-diagram:maths-b23-parametric-ellipse-sin-cos -->


A curve has x = 2 sin t + 1 and y = 3 cos t − 2. Find its cartesian equation.

```
sin t = (x − 1)/2     cos t = (y + 2)/3
sin²t + cos²t = 1
((x − 1)/2)² + ((y + 2)/3)² = 1
```

This is an ellipse with centre (1, −2).

### Worked example 3: double angle

A curve has x = 3 cos 2t and y = 4 sin t. Find x in terms of y.

```
cos 2t = 1 − 2 sin²t
x = 3(1 − 2 sin²t) = 3 − 6(y/4)² = 3 − 3y²/8
```

So 8x = 24 − 3y². Because −1 ≤ sin t ≤ 1, y lies between −4 and 4, so the cartesian curve is limited to that part.

### Going from cartesian to parametric

Choose a parameter that makes both coordinates simple. For y = x³ − 2x you can write x = t, y = t³ − 2t. For x² + y² = 25 write x = 5 cos θ, y = 5 sin θ. Always check that your equations reproduce the original.

### Domain matters

Eliminating t can lose a restriction. If x = 1/(t + 2) and y = t/(t + 2), then t = 1/x − 2 and y = 1 − 2x. But x can never be 0, so the point (0, 1) is not on the curve.

## 2. Implicit differentiation (5.1)

A curve is defined implicitly when x and y are mixed in one equation, such as x² + 2xy + 3y² = 18. You differentiate every term with respect to x. The key rule, from the chain rule, is:

d/dx [f(y)] = f ′(y) × dy/dx

| Term | Derivative with respect to x |
|---|---|
| y² | 2y dy/dx |
| sin y | cos y dy/dx |
| e^y | e^y dy/dx |
| ln y | (1/y) dy/dx |
| xy | y + x dy/dx (product rule) |
| x²y³ | 2xy³ + 3x²y² dy/dx |

After differentiating, collect every dy/dx term on one side, factorise, then divide.

### Worked example 4: tangent and normal

The curve C has equation x² + 2xy + 3y² = 18. Find the tangent and normal at (3, 1).

```
Check: 9 + 6 + 3 = 18, so (3, 1) is on C.
2x + 2y + 2x dy/dx + 6y dy/dx = 0   (the 2xy term gives 2y + 2x dy/dx)
dy/dx = −(x + y)/(x + 3y)
At (3, 1): dy/dx = −4/6 = −2/3
Tangent: y − 1 = −(2/3)(x − 3)   →   2x + 3y = 9
Normal gradient 3/2: y − 1 = (3/2)(x − 3)   →   3x − 2y = 7
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--04-tangent-and-normal.webp" width="900" height="942" alt="Graph of y = square root of (2x + 5) with equal scales on both axes. At P(2, 3) the gradient is one third, so the gold tangent is 3y = x + 7. The teal normal is perpendicular, with gradient minus 3, y = 9 minus 3x, and crosses the x-axis at (3, 0). A right-angle mark at P shows the lines are perpendicular because one third times minus 3 equals minus 1." loading="lazy">
  <figcaption>The tangent and normal at P(2, 3) are perpendicular because their gradients multiply to −1.</figcaption>
</figure>


### Worked example 5: stationary points

For the same curve, stationary points need dy/dx = 0, so x + y = 0 and y = −x. Substitute into the equation:

```
x² + 2x(−x) + 3x² = 18
2x² = 18
x = ±3,   y = ∓3
```

The stationary points are (3, −3) and (−3, 3). The denominator x + 3y is not zero at either.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--02-gradient-function.webp" width="900" height="1110" alt="Two graphs aligned on the same x values. Top: the cubic f(x) = x cubed minus 3x squared minus 9x plus 4, rising to a maximum (minus 1, 9), falling to a minimum (3, minus 23), then rising. Bottom: its gradient function f dash = 3(x + 1)(x minus 3), a U-shaped parabola crossing zero at x = minus 1 and x = 3. Where f dash is positive f is rising, where negative f is falling, and f dash = 0 at the maximum and minimum." loading="lazy">
  <figcaption>The sign of f′ tells you where f rises or falls, and f′ = 0 at turning points.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--03-convex-concave-inflection.webp" width="900" height="970" alt="A quartic curve f(x) = x to the 4 minus 8x cubed plus 18x squared plus 5. It is convex (bends upwards, teal) for x less than 1, concave (bends downwards, copper) between x = 1 and x = 3, and convex again for x greater than 3. The points of inflection (1, 16) and (3, 32) are ringed; dashed tangents there cross the curve, and at (3, 32) the tangent is horizontal. The second derivative 12(x minus 1)(x minus 3) is zero and changes sign at each." loading="lazy">
  <figcaption>Convex and concave sections of a curve and the inflection points where f″ changes sign.</figcaption>
</figure>


### Worked example 6: exponentials

Find dy/dx at (0, 1) on e^(2x) y + y³ = 2.

```
Check: e⁰ × 1 + 1 = 2.
2e^(2x) y + e^(2x) dy/dx + 3y² dy/dx = 0
At (0, 1): 2 + dy/dx + 3 dy/dx = 0
dy/dx = −1/2
```

You can also use dy/dx = 1/(dx/dy) when x is easier to write in terms of y.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--07-exp-and-ln-slopes.webp" width="900" height="1200" alt="Top: the graph of y = e to the x with gold tangents at x = 0, 1 and 2. The slope at each point equals its height: 1, e and e squared, so the derivative of e to the x is e to the x. Bottom: the graph of y = ln x with tangents at x = 1, 2 and 4 having slopes 1, one half and one quarter, so the derivative of ln x is 1 over x." loading="lazy">
  <figcaption>The slope of eˣ equals its height and the slope of ln x at x is 1/x.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--09-implicit-flat-vertical.webp" width="900" height="1084" alt="The tilted ellipse x squared minus xy plus y squared = 12, drawn from its equation. Implicit differentiation gives dy/dx = (y minus 2x) over (2y minus x). The numerator is zero when y = 2x, giving horizontal tangents (teal) at (2, 4) and (minus 2, minus 4). The denominator is zero when x = 2y, giving vertical tangents (copper) at (4, 2) and (minus 4, minus 2)." loading="lazy">
  <figcaption>Horizontal tangents occur where the numerator of dy/dx is zero and vertical tangents where the denominator is zero.</figcaption>
</figure>


## 3. Parametric differentiation (5.1)

For a curve with x = f(t) and y = g(t), apply the chain rule to get:

dy/dx = (dy/dt) ÷ (dx/dt)

The result is usually a function of t. The tangent is horizontal where dy/dt = 0 (and dx/dt ≠ 0), and vertical where dx/dt = 0 (and dy/dt ≠ 0).

### Worked example 7: tangent and normal

A curve has x = t² + t and y = t³ − 9t. Find the tangent and normal at t = 2.

```
dx/dt = 2t + 1     dy/dt = 3t² − 9
At t = 2: dx/dt = 5, dy/dt = 3, so dy/dx = 3/5
Point: x = 4 + 2 = 6,  y = 8 − 18 = −10
Tangent: y + 10 = (3/5)(x − 6)    →   3x − 5y = 68
Normal gradient −5/3: y + 10 = −(5/3)(x − 6)   →   5x + 3y = 0
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--05-chain-rule-gradients.webp" width="900" height="1250" alt="Three graphs show y = square root of (4x squared + 9) built in two steps. Top: u = 4x squared + 9 has gradient 16 at x = 2 where u = 25. Middle: y = square root of u has gradient 0.1 at u = 25 where y = 5. Bottom: the combined curve y = square root of (4x squared + 9) has gradient 1.6 at x = 2, and 16 times 0.1 equals 1.6, so dy/dx = dy/du times du/dx." loading="lazy">
  <figcaption>The gradient of the composite is the product of the two gradients: 16 × 0.1 = 1.6.</figcaption>
</figure>


### Worked example 8: stationary point

A curve has x = e^(2t) and y = t e^t. Find its stationary point.

```
dx/dt = 2e^(2t)     dy/dt = e^t (1 + t)
dy/dx = e^t (1 + t) / 2e^(2t) = (1 + t)e^(−t)/2
```

dy/dx = 0 when t = −1. Then x = e⁻² and y = −e⁻¹, so the stationary point is (e⁻², −e⁻¹). Since dx/dt is never 0, the tangent is never vertical.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--01-chord-to-tangent.webp" width="900" height="880" alt="Graph of y = 2x squared. Point P is at x = 3, y = 18. Three chords from P to points a distance h to the right (h = 1, 0.5, 0.25) get closer to the gold tangent line as h shrinks. The chord gradient is 12 + 2h: 14, 13, 12.2 and 12.02 for h = 1, 0.5, 0.1 and 0.01. As h tends to 0 the gradient tends to 12, the gradient of the curve at x = 3, which agrees with dy/dx = 4x." loading="lazy">
  <figcaption>How chord gradients 12 + 2h approach the tangent gradient 12 at x = 3 on y = 2x².</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--08-parametric-gradient.webp" width="900" height="967" alt="The curve x = t squared + 2t, y = t cubed minus 3t, drawn with equal scales. At t = 2 the point is (8, 2). Its horizontal rate dx/dt = 6 and vertical rate dy/dt = 9 form a right triangle whose slope is the gradient dy/dx = 9 over 6 = 3 over 2. The gold tangent has that gradient and the teal normal has gradient minus two thirds. Grey dots mark t = minus 1, 0 and 1." loading="lazy">
  <figcaption>At t = 2 the gradient is dy/dt ÷ dx/dt = 9/6, with the normal gradient −2/3.</figcaption>
</figure>


## 4. Forming differential equations (5.2)

A differential equation (DE) links a rate of change to the quantities involved. Translate the wording like this:

| Statement | Equation |
|---|---|
| Rate of increase of N is proportional to N | dN/dt = kN, k > 0 |
| Mass M decreases at a rate proportional to M | dM/dt = −kM, k > 0 |
| Rate of change of V is inversely proportional to √V | dV/dt = k/√V |
| Temperature θ falls at a rate proportional to the excess over 20 | dθ/dt = −k(θ − 20) |
| Inflow 20, outflow proportional to √h | dV/dt = 20 − k√h |

The word "decreases" or "falls" puts a minus sign in the equation when k is positive. If the question gives the rate at one instant, substitute to find k.

### Worked example 9: a dissolving cube

A sugar cube of side x cm dissolves so that its volume V decreases at a rate proportional to its surface area. Show that dx/dt is constant.

```
V = x³,  surface area S = 6x²
dV/dt = −λ(6x²)       (λ > 0)
dV/dt = 3x² dx/dt     (chain rule)
3x² dx/dt = −6λx²   →   dx/dt = −2λ
```

## 5. Connected rates of change (5.2)

Connect the changing quantities through a chain of derivatives:

dy/dt = dy/dx × dx/dt

Method: write the quantity whose rate you want, find a formula linking it to the quantity whose rate you know, differentiate that formula, then substitute.

### Worked example 10: a balloon

A spherical balloon is inflated at 30 cm³ s⁻¹. Find the rates of change of radius and surface area when r = 6.

```
V = (4/3)πr³    dV/dr = 4πr²
dV/dt = dV/dr × dr/dt   →   30 = 4π(36) dr/dt
dr/dt = 5/(24π) cm s⁻¹
S = 4πr²    dS/dt = 8πr × dr/dt = 8π(6) × 5/(24π) = 10 cm² s⁻¹
```

### Worked example 11: a conical tank with a leak

A tank is an inverted cone with radius equal to h/3 when the water depth is h. Water enters at 20 cm³ s⁻¹.

(a) Find dh/dt when h = 12 with no leak.

```
V = (1/3)π(h/3)²h = πh³/27     dV/dh = πh²/9
20 = (πh²/9) dh/dt   →   dh/dt = 180/(πh²)
At h = 12: dh/dt = 180/(144π) = 5/(4π) cm s⁻¹
```

(b) Water also leaks out at a rate k√h. Form a DE for h.

```
dV/dt = 20 − k√h
(πh²/9) dh/dt = 20 − k√h
dh/dt = 9(20 − k√h)/(πh²)
```

## Common errors

- Forgetting dy/dx on a y term, or writing 2y without it.
- Missing the product rule on xy.
- Putting the fraction upside down in parametric differentiation (it is dy/dt over dx/dt).
- Using the gradient of the tangent as the gradient of the normal.
- Substituting a value of t into dy/dx but using the wrong point for the line.
- Giving a decreasing rate without a minus sign.
- Differentiating a volume formula that still has two variables in it.
- Ignoring a restriction on t after eliminating the parameter.

## Frequently asked questions

**What is a parametric equation?**
A curve is given parametrically when x and y are both written as functions of a third variable, the parameter, usually t or θ. Each value of the parameter gives one point on the curve.

**How do you differentiate y² with respect to x?**
Use the chain rule: d/dx (y²) = 2y dy/dx. In general d/dx [f(y)] = f′(y) × dy/dx.

**How do you find stationary points on an implicit curve?**
Find dy/dx, set its numerator equal to zero to get a relation between x and y, then substitute that relation into the curve's equation to find the coordinates.

**Is solving differential equations part of this P4 topic?**
Not in this section. Forming differential equations is topic 5.2 of Edexcel IAL Unit P4, while solving them is topic 6.4 and is covered separately.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019, unit P4 sections 3.1, 5.1 and 5.2.
