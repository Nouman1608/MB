---
title: "AQA A-Level Mathematics: Differentiation — Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "G: Differentiation"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 1
syllabusTopics:
  - qualification: "a-level"
    topic: "g-differentiation-aqa-alevel-maths"
description: "Condensed recall notes on first principles, the chain/product/quotient rules, stationary points, implicit and parametric differentiation, and forming differential equations for AQA A-Level Mathematics (7357), G1-G6."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-05
featured: false
---

Section G is Paper 1 content, and Papers 2 (adding mechanics) and 3
(adding statistics) can each assess any Paper 1 content, so fluency
here underpins marks across the whole exam, not just one paper. These notes are condensed for the
final weeks — build understanding first from full teaching material.

## G1 — What a derivative actually is

The derivative of f(x) is the **gradient of the tangent** to y = f(x)
at a point (x, y), defined formally as the **limit** of the gradient
of a chord as the two points on the curve move together. Two
interpretations to keep separate:

- **Geometric**: gradient of the tangent line.
- **Physical**: instantaneous **rate of change**.

You are expected to **sketch a gradient function** from a given curve
(where the original is increasing, the gradient function is positive;
where it has a turning point, the gradient function crosses zero) and
to use the **second derivative** as the rate of change of gradient —
this connects directly to identifying **convex/concave** sections and
**points of inflection**. First-principles differentiation is required
for small positive integer powers of x and for sin x and cos x.

```
f'(x) = lim(h→0) [f(x+h) - f(x)] / h
```

## G2 — Standard derivatives to know cold

| Function | Derivative |
|---|---|
| xⁿ (n rational) | nxⁿ⁻¹ |
| eᵏˣ | k eᵏˣ |
| aᵏˣ | k aᵏˣ ln a |
| sin kx | k cos kx |
| cos kx | −k sin kx |
| tan kx | k sec²kx |
| ln x | 1/x |

These extend to constant multiples, sums and differences by linearity
— differentiate term-by-term. The aᵏˣ result (needing an extra ln a
factor compared with eᵏˣ) is the one most often mis-recalled under
exam pressure.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--07-exp-and-ln-slopes.webp" width="900" height="1200" alt="Top: the graph of y = e to the x with gold tangents at x = 0, 1 and 2. The slope at each point equals its height: 1, e and e squared, so the derivative of e to the x is e to the x. Bottom: the graph of y = ln x with tangents at x = 1, 2 and 4 having slopes 1, one half and one quarter, so the derivative of ln x is 1 over x." loading="lazy">
  <figcaption>The slope of eˣ equals its height and the slope of ln x at x is 1/x.</figcaption>
</figure>


## G3 — Using derivatives: gradients, tangents, turning points

Applying differentiation, you're expected to find:

- Gradients of tangents and normals at a given point (normal gradient
= −1 ÷ tangent gradient).
- **Maxima, minima and stationary points** — set f'(x) = 0 and solve;
classify using the second derivative (f''(x) > 0 → minimum, f''(x) < 0
→ maximum, f''(x) = 0 → test further, e.g. via the sign of f' either
side).
- **Points of inflection** — where f''(x) = 0 and concavity changes.
- Where a function is **increasing** (f'(x) > 0) or **decreasing**
(f'(x) < 0).

A frequent exam-trap: finding f'(x) = 0 and stopping, without
classifying which stationary point type it is — always follow through
with the second-derivative (or sign) test unless the question only
asks for the location.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--01-chord-to-tangent.webp" width="900" height="880" alt="Graph of y = 2x squared. Point P is at x = 3, y = 18. Three chords from P to points a distance h to the right (h = 1, 0.5, 0.25) get closer to the gold tangent line as h shrinks. The chord gradient is 12 + 2h: 14, 13, 12.2 and 12.02 for h = 1, 0.5, 0.1 and 0.01. As h tends to 0 the gradient tends to 12, the gradient of the curve at x = 3, which agrees with dy/dx = 4x." loading="lazy">
  <figcaption>How chord gradients 12 + 2h approach the tangent gradient 12 at x = 3 on y = 2x².</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--02-gradient-function.webp" width="900" height="1110" alt="Two graphs aligned on the same x values. Top: the cubic f(x) = x cubed minus 3x squared minus 9x plus 4, rising to a maximum (minus 1, 9), falling to a minimum (3, minus 23), then rising. Bottom: its gradient function f dash = 3(x + 1)(x minus 3), a U-shaped parabola crossing zero at x = minus 1 and x = 3. Where f dash is positive f is rising, where negative f is falling, and f dash = 0 at the maximum and minimum." loading="lazy">
  <figcaption>The sign of f′ tells you where f rises or falls, and f′ = 0 at turning points.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--04-tangent-and-normal.webp" width="900" height="942" alt="Graph of y = square root of (2x + 5) with equal scales on both axes. At P(2, 3) the gradient is one third, so the gold tangent is 3y = x + 7. The teal normal is perpendicular, with gradient minus 3, y = 9 minus 3x, and crosses the x-axis at (3, 0). A right-angle mark at P shows the lines are perpendicular because one third times minus 3 equals minus 1." loading="lazy">
  <figcaption>The tangent and normal at P(2, 3) are perpendicular because their gradients multiply to −1.</figcaption>
</figure>


## G4 — Product, quotient and chain rules

| Rule | Formula |
|---|---|
| Product | (uv)' = u'v + uv' |
| Quotient | (u/v)' = (u'v − uv') / v² |
| Chain | dy/dx = dy/du × du/dx |

These extend to **connected rates of change** (using the chain rule
to relate dV/dt to dV/dr × dr/dt, for example) and to differentiating
**inverse functions**. Connected-rates-of-change problems are a
classic source of marks lost purely through not identifying which two
rates the chain rule needs to link — write out explicitly which
variable each given rate is with respect to before attempting the
chain-rule step.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--05-chain-rule-gradients.webp" width="900" height="1250" alt="Three graphs show y = square root of (4x squared + 9) built in two steps. Top: u = 4x squared + 9 has gradient 16 at x = 2 where u = 25. Middle: y = square root of u has gradient 0.1 at u = 25 where y = 5. Bottom: the combined curve y = square root of (4x squared + 9) has gradient 1.6 at x = 2, and 16 times 0.1 equals 1.6, so dy/dx = dy/du times du/dx." loading="lazy">
  <figcaption>The gradient of the composite is the product of the two gradients: 16 × 0.1 = 1.6.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--06-product-rule-area.webp" width="900" height="650" alt="A rectangle of width u and height v has area uv. When x increases a little, u grows by du and v by dv, adding a strip of area v du on the right, a strip u dv on the top, and a tiny corner du dv which vanishes in the limit. So the change in uv is v du + u dv, giving (uv)′ = u′v + uv′. Example: y = x cubed times e to the 2x at x = 1 has gradient 3e squared + 2e squared = 5e squared, about 36.9." loading="lazy">
  <figcaption>Why the product rule has two terms: the rectangle area uv grows by v du + u dv.</figcaption>
</figure>


## G5 — Implicit and parametric differentiation (first derivative only)

- **Implicit**: differentiate both sides of an equation like
x² + y² = r² term by term with respect to x, treating y as a function
of x (so d(y²)/dx = 2y dy/dx via the chain rule), then rearrange for
dy/dx.
- **Parametric**: given x = f(t) and y = g(t), find dy/dx via
dy/dx = (dy/dt) ÷ (dx/dt).

Only the **first derivative** is required for implicit/parametric
relations at this level — do not spend revision time on second
derivatives for these two techniques specifically.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--08-parametric-gradient.webp" width="900" height="967" alt="The curve x = t squared + 2t, y = t cubed minus 3t, drawn with equal scales. At t = 2 the point is (8, 2). Its horizontal rate dx/dt = 6 and vertical rate dy/dt = 9 form a right triangle whose slope is the gradient dy/dx = 9 over 6 = 3 over 2. The gold tangent has that gradient and the teal normal has gradient minus two thirds. Grey dots mark t = minus 1, 0 and 1." loading="lazy">
  <figcaption>At t = 2 the gradient is dy/dt ÷ dx/dt = 9/6, with the normal gradient −2/3.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--09-implicit-flat-vertical.webp" width="900" height="1084" alt="The tilted ellipse x squared minus xy plus y squared = 12, drawn from its equation. Implicit differentiation gives dy/dx = (y minus 2x) over (2y minus x). The numerator is zero when y = 2x, giving horizontal tangents (teal) at (2, 4) and (minus 2, minus 4). The denominator is zero when x = 2y, giving vertical tangents (copper) at (4, 2) and (minus 4, minus 2)." loading="lazy">
  <figcaption>Horizontal tangents occur where the numerator of dy/dx is zero and vertical tangents where the denominator is zero.</figcaption>
</figure>


## G6 — Forming differential equations

You're expected to **construct** simple differential equations, both
in pure contexts and in modelling contexts the specification names
explicitly: **kinematics**, **population growth**, and the
**relationship between price and demand**. The skill tested is
translating a verbal rate-of-change statement ("the rate of increase
of population is proportional to the population size") into a correct
equation (dP/dt = kP) — not necessarily solving it, since differential
equation *solving* methods sit in Section H (Integration).

## Exam traps

- Confusing which rule applies: product rule needs both factors
differentiated and summed with cross-terms; chain rule needs a
composite function unpacked into outer/inner parts first.
- Missing the extra ln a factor when differentiating aᵏˣ (as opposed
to eᵏˣ, which needs no such factor).
- Finding a stationary point but never classifying it as max/min/point
of inflection when the question requires this.
- Applying implicit differentiation but forgetting the chain-rule
factor of dy/dx when differentiating a y-term.
- Attempting to *solve* a constructed differential equation from G6
using G-section techniques, when solving belongs to Section H.

## Self-test

1. What are the two interpretations of a derivative at a point?
2. What extra factor appears when differentiating aᵏˣ compared with
eᵏˣ, and why?
3. How do you classify a stationary point using the second derivative?
4. What is the key difference between implicit and parametric
differentiation at this level in terms of what's required?
5. Name the three modelling contexts the specification explicitly
names for constructing differential equations.

**Answers:** 1. The gradient of the tangent to the curve at that point,
and the instantaneous rate of change. 2. A factor of ln a, because
aᵏˣ = e^(kx ln a), so the chain rule introduces ln a when differentiating.
3. f''(x) > 0 indicates a minimum, f''(x) < 0 indicates a maximum, and
f''(x) = 0 requires further investigation (e.g. checking the sign of
f' on either side). 4. Both use the chain rule, but only the first
derivative is required for implicit and parametric relations at this
level — second derivatives are not expected. 5. Kinematics, population
growth, and the relationship between price and demand.
