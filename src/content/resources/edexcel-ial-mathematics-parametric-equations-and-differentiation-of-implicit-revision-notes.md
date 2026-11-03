---
title: "Pearson Edexcel International Advanced Level Mathematics: Parametric and implicit differentiation (YMA01) -- Revision Notes"
seoTitle: "Edexcel IAL Maths Parametric and Implicit Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on parametric equations, implicit and parametric differentiation, forming DEs and connected rates for Edexcel IAL Maths."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense Pearson Edexcel International Advanced Level Mathematics (Specification Issue 3, April 2019), unit P4 sections 3.1, 5.1 and 5.2. P4 is compulsory for IAL Mathematics and Pure Mathematics and carries no IAS weighting. For full explanations and longer worked examples, read the [study guide](/resources/edexcel-ial-mathematics-parametric-equations-and-differentiation-of-implicit/), then test yourself with the [practice questions](/resources/edexcel-ial-mathematics-parametric-equations-and-differentiation-of-implicit-practice/).

Related pages: the [Edexcel A-level Mathematics hub](/boards/edexcel/a-level/mathematics/), the [printable checklist](/checklists/edexcel/a-level/mathematics/) and the [free 10-minute diagnostics](/diagnostics/). Solving differential equations (6.4) and volume or area from parametric equations (6.1, 6.5) are separate topics.

## Key results

| Spec | Result |
|---|---|
| 3.1 | Parametric: x = f(t), y = g(t). Eliminate t to get a cartesian equation |
| 3.1 | sin²t + cos²t = 1, 1 + tan²t = sec²t, cos 2t = 1 − 2 sin²t = 2 cos²t − 1 |
| 5.1 | Implicit: d/dx [f(y)] = f ′(y) dy/dx |
| 5.1 | Product: d/dx (xy) = y + x dy/dx |
| 5.1 | Parametric: dy/dx = (dy/dt) ÷ (dx/dt) |
| 5.1 | Normal gradient = −1 ÷ tangent gradient |
| 5.2 | Connected rates: dy/dt = dy/dx × dx/dt |

## Method boxes

### Parametric to cartesian

1. Look at the functions. Algebraic: rearrange for t in the simpler equation.
2. Trig with the same angle: write sin and cos (or tan and sec) in terms of x and y, then use the identity.
3. Trig with different angles (t and 2t): use a double-angle formula first.
4. Substitute and simplify. Then state any restriction on x or y.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--08-parametric-gradient.webp" width="900" height="967" alt="The curve x = t squared + 2t, y = t cubed minus 3t, drawn with equal scales. At t = 2 the point is (8, 2). Its horizontal rate dx/dt = 6 and vertical rate dy/dt = 9 form a right triangle whose slope is the gradient dy/dx = 9 over 6 = 3 over 2. The gold tangent has that gradient and the teal normal has gradient minus two thirds. Grey dots mark t = minus 1, 0 and 1." loading="lazy">
  <figcaption>At t = 2 the gradient is dy/dt ÷ dx/dt = 9/6, with the normal gradient −2/3.</figcaption>
</figure>


### Tangent or normal, implicit curve

1. Check the point lies on the curve.
2. Differentiate every term with respect to x.
3. Collect dy/dx terms, factorise, divide.
4. Substitute x and y for the gradient.
5. Use y − y₁ = m(x − x₁). For the normal, use −1/m.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--01-chord-to-tangent.webp" width="900" height="880" alt="Graph of y = 2x squared. Point P is at x = 3, y = 18. Three chords from P to points a distance h to the right (h = 1, 0.5, 0.25) get closer to the gold tangent line as h shrinks. The chord gradient is 12 + 2h: 14, 13, 12.2 and 12.02 for h = 1, 0.5, 0.1 and 0.01. As h tends to 0 the gradient tends to 12, the gradient of the curve at x = 3, which agrees with dy/dx = 4x." loading="lazy">
  <figcaption>How chord gradients 12 + 2h approach the tangent gradient 12 at x = 3 on y = 2x².</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--04-tangent-and-normal.webp" width="900" height="942" alt="Graph of y = square root of (2x + 5) with equal scales on both axes. At P(2, 3) the gradient is one third, so the gold tangent is 3y = x + 7. The teal normal is perpendicular, with gradient minus 3, y = 9 minus 3x, and crosses the x-axis at (3, 0). A right-angle mark at P shows the lines are perpendicular because one third times minus 3 equals minus 1." loading="lazy">
  <figcaption>The tangent and normal at P(2, 3) are perpendicular because their gradients multiply to −1.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--09-implicit-flat-vertical.webp" width="900" height="1084" alt="The tilted ellipse x squared minus xy plus y squared = 12, drawn from its equation. Implicit differentiation gives dy/dx = (y minus 2x) over (2y minus x). The numerator is zero when y = 2x, giving horizontal tangents (teal) at (2, 4) and (minus 2, minus 4). The denominator is zero when x = 2y, giving vertical tangents (copper) at (4, 2) and (minus 4, minus 2)." loading="lazy">
  <figcaption>Horizontal tangents occur where the numerator of dy/dx is zero and vertical tangents where the denominator is zero.</figcaption>
</figure>


### Tangent or normal, parametric curve

1. Find dx/dt and dy/dt.
2. Substitute the parameter value to get dy/dx and the point (x, y).
3. Use y − y₁ = m(x − x₁).
4. For stationary points, solve dy/dt = 0. For vertical tangents, solve dx/dt = 0.

### Connected rates

1. List the given rate and the wanted rate with units.
2. Write the chain: wanted = (link) × (given).
3. Find a formula connecting the two quantities in one variable, then differentiate.
4. Substitute the instant's values. Check the sign and units.

## Small worked reminders

Implicit: the curve y³ + 2xy = 12 passes through (1, 2).

```
3y² dy/dx + 2y + 2x dy/dx = 0
dy/dx = −2y/(2x + 3y²)
At (1, 2): −4/14 = −2/7
```

Parametric: x = 1/t, y = t² + t (t > 0).

```
dx/dt = −1/t²    dy/dt = 2t + 1
dy/dx = (2t + 1) ÷ (−1/t²) = −t²(2t + 1)
At t = 2: dy/dx = −20
Check: t = 1/x, so y = 1/x² + 1/x and dy/dx = −2/x³ − 1/x² = −2t³ − t²
```

Restriction: x = sin t, y = cos²t gives y = 1 − x², but only for −1 ≤ x ≤ 1.

Trig parametric: x = 2 sin t + 3, y = cos 2t. Find the tangent and normal at t = π/6.

```
dx/dt = 2 cos t     dy/dt = −2 sin 2t = −4 sin t cos t
dy/dx = −2 sin t    At t = π/6: dy/dx = −1
Point: x = 2(1/2) + 3 = 4,  y = cos(π/3) = 1/2
Tangent: y − 1/2 = −(x − 4)   →   2x + 2y = 9
Normal (gradient 1): y − 1/2 = x − 4   →   2x − 2y = 7
```

Tangent meeting the axes: the tangent to y³ + 2xy = 12 at (1, 2) has gradient −2/7, so y − 2 = −(2/7)(x − 1), which is 2x + 7y = 16. Put y = 0 for the x-intercept, (8, 0). Put x = 0 for the y-intercept, (0, 16/7). Only then can you find lengths or areas of the triangle formed with the axes.

Net rate: a tank is filled at 12 litres per minute and drains at a rate 0.04V litres per minute when it holds V litres.

```
dV/dt = 12 − 0.04V
dV/dt = 0 when V = 300
```

At V = 300 the volume is not changing. Below 300 the tank fills, and above 300 it empties.

Connected rates: a circular stain has radius r growing at 0.4 cm s⁻¹.

```
A = πr²    dA/dt = 2πr × dr/dt
At r = 7: dA/dt = 2π(7)(0.4) = 5.6π cm² s⁻¹
```

## Forming differential equations

| Wording | Equation (k > 0) |
|---|---|
| Rate of growth proportional to P | dP/dt = kP |
| Rate of decrease proportional to √h | dh/dt = −k√h |
| Rate proportional to the square of x | dx/dt = kx² |
| Rate inversely proportional to y | dy/dt = k/y |
| Net rate = inflow − outflow | dV/dt = inflow − outflow |

If a question gives numbers at one instant, put them in to find k. If it asks for a DE in h but the rates are for V, divide by dV/dh to get dh/dt.

## Must-know distinctions

- Tangent has gradient m. Normal has gradient −1/m. Both pass through the point.
- Implicit: y is not the subject, so every y term needs dy/dx. Parametric: both x and y are given in terms of t.
- "Increasing at a rate" gives a positive derivative. "Decreasing" gives a negative one, so dN/dt = −kN with k > 0.
- dV/dt is a rate with time. dV/dh is a link between two lengths and volumes. Do not mix them up.
- Horizontal tangent: numerator dy/dt = 0. Vertical tangent: denominator dx/dt = 0.

## Typical question set-ups

- A curve is given parametrically. Find dy/dx in terms of t, then the tangent or normal at a stated t.
- Show that a cartesian equation holds, then find where a line meets the curve by substituting x and y in terms of t.
- Find a point where the tangent has a stated gradient. Set dy/dx equal to that gradient and solve for t.
- Show that dy/dx takes a simple form, using a double-angle or Pythagorean identity to simplify.
- An implicit curve is given. Find dy/dx, then the coordinates where dy/dx = 0, using the curve's equation to find the other coordinate.
- A statement about a rate is given in words. Form the differential equation, find k from one set of values, then use it.
- A shape changes in size at a known rate. Find the rate of change of a second quantity at a given instant.

## Quick self-test

1. Find y in terms of x when x = 2t + 5 and y = t² − 1.
2. Find the cartesian equation of x = 5 cos θ, y = 2 sin θ.
3. Differentiate y⁴ with respect to x.
4. Differentiate x²y with respect to x.
5. Find the tangent to x² + y² = 20 at (4, 2).
6. Find dy/dx when x = t³ and y = 3t, at t = −2.
7. A curve has x = t² + 4t and y = t² − 2t. Find the coordinates of the point where the tangent is horizontal.
8. The depth h of water falls at a rate proportional to √h. Write a differential equation.
9. The tangent to a curve has gradient 2/3. What is the gradient of the normal?
10. A cube's edge x grows at 0.5 cm s⁻¹. Find dV/dt when x = 4.

### Answers

1. t = (x − 5)/2, so y = (x − 5)²/4 − 1 = (x² − 10x + 21)/4.
2. cos θ = x/5, sin θ = y/2, so x²/25 + y²/4 = 1.
3. 4y³ dy/dx.
4. 2xy + x² dy/dx.
5. 2x + 2y dy/dx = 0, so dy/dx = −x/y = −2 at (4, 2). Tangent: y − 2 = −2(x − 4), so 2x + y = 10.
6. dy/dx = 3 ÷ 3t² = 1/t². At t = −2: 1/4.
7. dy/dt = 2t − 2 = 0 gives t = 1, so the point is (5, −1). Here dx/dt = 6, which is not 0.
8. dh/dt = −k√h, with k > 0.
9. −3/2.
10. V = x³, dV/dt = 3x² dx/dt = 3(16)(0.5) = 24 cm³ s⁻¹.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--06-product-rule-area.webp" width="900" height="650" alt="A rectangle of width u and height v has area uv. When x increases a little, u grows by du and v by dv, adding a strip of area v du on the right, a strip u dv on the top, and a tiny corner du dv which vanishes in the limit. So the change in uv is v du + u dv, giving (uv)′ = u′v + uv′. Example: y = x cubed times e to the 2x at x = 1 has gradient 3e squared + 2e squared = 5e squared, about 36.9." loading="lazy">
  <figcaption>Why the product rule has two terms: the rectangle area uv grows by v du + u dv.</figcaption>
</figure>


## Quick checks before you move on

- Does your tangent pass through the point you used? Substitute the coordinates back in.
- Is your normal perpendicular to the tangent? The two gradients should multiply to give −1.
- For a parametric curve, does the cartesian form you found give the same gradient as dy/dt over dx/dt?
- For a rate, does the sign match the story: growing is positive, shrinking is negative?
- Are the units for the final rate the units of the quantity divided by time?

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--02-gradient-function.webp" width="900" height="1110" alt="Two graphs aligned on the same x values. Top: the cubic f(x) = x cubed minus 3x squared minus 9x plus 4, rising to a maximum (minus 1, 9), falling to a minimum (3, minus 23), then rising. Bottom: its gradient function f dash = 3(x + 1)(x minus 3), a U-shaped parabola crossing zero at x = minus 1 and x = 3. Where f dash is positive f is rising, where negative f is falling, and f dash = 0 at the maximum and minimum." loading="lazy">
  <figcaption>The sign of f′ tells you where f rises or falls, and f′ = 0 at turning points.</figcaption>
</figure>


## Where marks are usually lost

- Leaving out dy/dx when differentiating a y term, or leaving out the product rule on xy.
- Not factorising dy/dx before dividing, then dividing term by term.
- Inverting dy/dt over dx/dt.
- Using the tangent gradient for the normal, or taking the reciprocal without the sign change.
- Finding a gradient but writing the line through the wrong point.
- Dropping the minus sign for a decreasing quantity, or writing the DE with no constant k.
- Substituting the instant's value before differentiating a volume or area formula.
- Missing units on a rate, such as cm s⁻¹ or cm² s⁻¹.
- Ignoring the range of the parameter when the cartesian equation is only part of a curve.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--03-convex-concave-inflection.webp" width="900" height="970" alt="A quartic curve f(x) = x to the 4 minus 8x cubed plus 18x squared plus 5. It is convex (bends upwards, teal) for x less than 1, concave (bends downwards, copper) between x = 1 and x = 3, and convex again for x greater than 3. The points of inflection (1, 16) and (3, 32) are ringed; dashed tangents there cross the curve, and at (3, 32) the tangent is horizontal. The second derivative 12(x minus 1)(x minus 3) is zero and changes sign at each." loading="lazy">
  <figcaption>Convex and concave sections of a curve and the inflection points where f″ changes sign.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--05-chain-rule-gradients.webp" width="900" height="1250" alt="Three graphs show y = square root of (4x squared + 9) built in two steps. Top: u = 4x squared + 9 has gradient 16 at x = 2 where u = 25. Middle: y = square root of u has gradient 0.1 at u = 25 where y = 5. Bottom: the combined curve y = square root of (4x squared + 9) has gradient 1.6 at x = 2, and 16 times 0.1 equals 1.6, so dy/dx = dy/du times du/dx." loading="lazy">
  <figcaption>The gradient of the composite is the product of the two gradients: 16 × 0.1 = 1.6.</figcaption>
</figure>


## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019, unit P4 sections 3.1, 5.1 and 5.2.
