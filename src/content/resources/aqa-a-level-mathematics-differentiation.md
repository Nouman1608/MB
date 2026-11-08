---
title: "AQA A-Level Mathematics: Differentiation (7357)"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "G: Differentiation"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 2
syllabusTopics:
  - qualification: "a-level"
    topic: "g-differentiation-aqa-alevel-maths"
description: "AQA A-Level Maths (7357) Section G guide: first principles, standard derivatives, stationary points, calculus rules, implicit and parametric curves."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by sajawal-zahid on 2026-09-29."
publishedDate: 2026-09-06
featured: false
---

This guide covers **Section G: Differentiation**, G1 through G6, of
AQA A-Level Mathematics (7357), first teaching September 2017. Like
the rest of the Pure content, Section G is Department for Education
(DfE) prescribed content shared across every exam board offering
A-level Mathematics, not set independently by AQA. Section G is
Paper 1 content, and Paper 2 (which adds mechanics) and Paper 3 (which
adds statistics) can each assess any Paper 1 content, so fluency here
underpins marks across the whole qualification, not just one exam
paper.

## Where this fits in 7357

Differentiation builds directly on Section B (Algebra and Functions)
and Section C (Coordinate Geometry), applying the algebraic and
graph-sketching skills developed there to the new question of how a
function's rate of change behaves. It also underpins Section H
(Integration), which reverses the operation, and appears throughout
the mechanics content (rates of change of displacement and velocity,
examined on Paper 2) and statistics content (examined on Paper 3).

## Syllabus coverage

**AQA A-LEVEL MATHEMATICS (7357) — SECTION G: DIFFERENTIATION**

- **G1** — understand and use the derivative as the gradient of the
  tangent to a curve, understand the gradient function and the second
  derivative, and understand differentiation from first principles for
  small positive integer powers of x and for sin x and cos x
- **G2** — differentiate xⁿ, eᵏˣ, aᵏˣ, sin kx, cos kx, tan kx and
  ln x, and their sums and constant multiples
- **G3** — apply differentiation to find gradients, tangents and
  normals, maxima and minima, stationary points, points of inflection,
  and where a function is increasing or decreasing
- **G4** — differentiate using the product rule, the quotient rule
  and the chain rule, including problems involving connected rates of
  change and inverse functions
- **G5** — differentiate simple functions defined implicitly or
  parametrically, for first derivatives only
- **G6** — construct simple differential equations in pure mathematics
  and in a variety of contexts, including kinematics, population
  growth, and the relationship between price and demand

## G1: what a derivative actually is

The derivative of f(x) at a point is the gradient of the tangent to
y = f(x) at that point, formally defined as the limit of the gradient
of a chord as the two points on the curve move together:

```
f'(x) = lim(h->0) [f(x+h) - f(x)] / h
```

Keep two interpretations of this same quantity distinct: geometrically
it is the gradient of the tangent line; physically it is the
instantaneous rate of change of the quantity the function represents.
You are expected to sketch a gradient function from a given curve --
where the original function is increasing, its gradient function is
positive; where the original has a turning point, its gradient
function crosses zero -- and to use the second derivative as the rate
of change of the gradient itself, which connects directly to
identifying convex or concave sections of a curve and points of
inflection. First-principles differentiation is examinable specifically
for small positive integer powers of x and for sin x and cos x, not
for arbitrary functions.

## G2: standard derivatives

| Function | Derivative |
|---|---|
| xⁿ (n rational) | nxⁿ⁻¹ |
| eᵏˣ | k eᵏˣ |
| aᵏˣ | k aᵏˣ ln a |
| sin kx | k cos kx |
| cos kx | -k sin kx |
| tan kx | k sec²kx |
| ln x | 1/x |

These extend to constant multiples, sums and differences by linearity
-- differentiate term by term. The aᵏˣ result is the one most often
mis-recalled under exam pressure, since it needs an extra ln a factor
that eᵏˣ does not, arising because aᵏˣ can itself be rewritten as
e^(kx ln a) before the chain rule is applied.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--07-exp-and-ln-slopes.webp" width="900" height="1200" alt="Top: the graph of y = e to the x with gold tangents at x = 0, 1 and 2. The slope at each point equals its height: 1, e and e squared, so the derivative of e to the x is e to the x. Bottom: the graph of y = ln x with tangents at x = 1, 2 and 4 having slopes 1, one half and one quarter, so the derivative of ln x is 1 over x." loading="lazy">
  <figcaption>The slope of eˣ equals its height and the slope of ln x at x is 1/x.</figcaption>
</figure>


## G3: gradients, tangents and stationary points

Beyond finding a gradient at a point (and the corresponding normal
gradient, which is -1 divided by the tangent gradient), G3 covers
finding and classifying stationary points. Setting f'(x) = 0 and
solving locates candidate stationary points; classifying them uses the
second derivative -- f''(x) > 0 indicates a minimum, f''(x) < 0
indicates a maximum, and f''(x) = 0 requires further investigation,
typically by checking the sign of f'(x) on either side of the point. A
point of inflection occurs where f''(x) = 0 and the concavity of the
curve genuinely changes either side of that point, which is a
distinct condition from f''(x) = 0 alone. G3 also covers determining
where a function is increasing (f'(x) > 0) or decreasing (f'(x) < 0)
across an interval.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--02-gradient-function.webp" width="900" height="1110" alt="Two graphs aligned on the same x values. Top: the cubic f(x) = x cubed minus 3x squared minus 9x plus 4, rising to a maximum (minus 1, 9), falling to a minimum (3, minus 23), then rising. Bottom: its gradient function f dash = 3(x + 1)(x minus 3), a U-shaped parabola crossing zero at x = minus 1 and x = 3. Where f dash is positive f is rising, where negative f is falling, and f dash = 0 at the maximum and minimum." loading="lazy">
  <figcaption>The sign of f′ tells you where f rises or falls, and f′ = 0 at turning points.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--03-convex-concave-inflection.webp" width="900" height="970" alt="A quartic curve f(x) = x to the 4 minus 8x cubed plus 18x squared plus 5. It is convex (bends upwards, teal) for x less than 1, concave (bends downwards, copper) between x = 1 and x = 3, and convex again for x greater than 3. The points of inflection (1, 16) and (3, 32) are ringed; dashed tangents there cross the curve, and at (3, 32) the tangent is horizontal. The second derivative 12(x minus 1)(x minus 3) is zero and changes sign at each." loading="lazy">
  <figcaption>Convex and concave sections of a curve and the inflection points where f″ changes sign.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--04-tangent-and-normal.webp" width="900" height="942" alt="Graph of y = square root of (2x + 5) with equal scales on both axes. At P(2, 3) the gradient is one third, so the gold tangent is 3y = x + 7. The teal normal is perpendicular, with gradient minus 3, y = 9 minus 3x, and crosses the x-axis at (3, 0). A right-angle mark at P shows the lines are perpendicular because one third times minus 3 equals minus 1." loading="lazy">
  <figcaption>The tangent and normal at P(2, 3) are perpendicular because their gradients multiply to −1.</figcaption>
</figure>


## Worked example: classifying a stationary point

<!-- marlbridge-diagram:maths-aqa-differentiation-stationary-test -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/mathematics/maths-aqa-differentiation-stationary-test.svg" aria-label="Open full-size diagram: maths-aqa-differentiation-stationary-test"><img src="/images/learning/mathematics/maths-aqa-differentiation-stationary-test.svg" width="1600" height="1050" alt="The diagram graphs the AQA lesson cubic, locating its maximum (−1,10) and minimum (3,−22) and showing the second-derivative test." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>The diagram graphs the AQA lesson cubic, locating its maximum (−1,10) and minimum (3,−22) and showing the second-derivative test. Select the image to enlarge it.</figcaption>
</figure>
<!-- /marlbridge-diagram:maths-aqa-differentiation-stationary-test -->


Find and classify the stationary points of f(x) = x³ - 3x² - 9x + 5.

```
f'(x) = 3x² - 6x - 9 = 3(x² - 2x - 3) = 3(x - 3)(x + 1)
f'(x) = 0  =>  x = 3 or x = -1

f''(x) = 6x - 6
f''(3)  = 18 - 6 = 12 > 0   =>  minimum at x = 3
f''(-1) = -6 - 6 = -12 < 0  =>  maximum at x = -1
```

Stopping at f'(x) = 0 without applying the second-derivative test is
the single most common way marks are lost on this sub-topic when a
question explicitly asks for the nature of each stationary point.

## G4: product, quotient and chain rules

| Rule | Formula |
|---|---|
| Product | (uv)' = u'v + uv' |
| Quotient | (u/v)' = (u'v - uv') / v² |
| Chain | dy/dx = dy/du x du/dx |

These extend to connected rates of change (using the chain rule to
relate, for example, dV/dt to dV/dr x dr/dt) and to differentiating
inverse functions. Connected-rates-of-change problems are a classic
source of lost marks purely through not identifying which two rates
the chain rule needs to link -- write out explicitly which variable
each given rate is with respect to before attempting the chain-rule
step, rather than attempting the algebra before the relationship
between variables is clear.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--05-chain-rule-gradients.webp" width="900" height="1250" alt="Three graphs show y = square root of (4x squared + 9) built in two steps. Top: u = 4x squared + 9 has gradient 16 at x = 2 where u = 25. Middle: y = square root of u has gradient 0.1 at u = 25 where y = 5. Bottom: the combined curve y = square root of (4x squared + 9) has gradient 1.6 at x = 2, and 16 times 0.1 equals 1.6, so dy/dx = dy/du times du/dx." loading="lazy">
  <figcaption>The gradient of the composite is the product of the two gradients: 16 × 0.1 = 1.6.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--06-product-rule-area.webp" width="900" height="650" alt="A rectangle of width u and height v has area uv. When x increases a little, u grows by du and v by dv, adding a strip of area v du on the right, a strip u dv on the top, and a tiny corner du dv which vanishes in the limit. So the change in uv is v du + u dv, giving (uv)′ = u′v + uv′. Example: y = x cubed times e to the 2x at x = 1 has gradient 3e squared + 2e squared = 5e squared, about 36.9." loading="lazy">
  <figcaption>Why the product rule has two terms: the rectangle area uv grows by v du + u dv.</figcaption>
</figure>


## G5: implicit and parametric differentiation

For an implicitly-defined relation such as x² + y² = r², differentiate
both sides term by term with respect to x, treating y as a function of
x -- so d(y²)/dx becomes 2y dy/dx via the chain rule -- then rearrange
for dy/dx. For a parametrically-defined curve, with x = f(t) and
y = g(t), find dy/dx via dy/dx = (dy/dt) divided by (dx/dt). Only the
first derivative is required for implicit and parametric relations at
this level; second derivatives for these two specific techniques are
not part of the specification's requirements here.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--08-parametric-gradient.webp" width="900" height="967" alt="The curve x = t squared + 2t, y = t cubed minus 3t, drawn with equal scales. At t = 2 the point is (8, 2). Its horizontal rate dx/dt = 6 and vertical rate dy/dt = 9 form a right triangle whose slope is the gradient dy/dx = 9 over 6 = 3 over 2. The gold tangent has that gradient and the teal normal has gradient minus two thirds. Grey dots mark t = minus 1, 0 and 1." loading="lazy">
  <figcaption>At t = 2 the gradient is dy/dt ÷ dx/dt = 9/6, with the normal gradient −2/3.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--09-implicit-flat-vertical.webp" width="900" height="1084" alt="The tilted ellipse x squared minus xy plus y squared = 12, drawn from its equation. Implicit differentiation gives dy/dx = (y minus 2x) over (2y minus x). The numerator is zero when y = 2x, giving horizontal tangents (teal) at (2, 4) and (minus 2, minus 4). The denominator is zero when x = 2y, giving vertical tangents (copper) at (4, 2) and (minus 4, minus 2)." loading="lazy">
  <figcaption>Horizontal tangents occur where the numerator of dy/dx is zero and vertical tangents where the denominator is zero.</figcaption>
</figure>


## G6: forming differential equations

The specification expects candidates to construct simple differential
equations, both in pure mathematics contexts and in named modelling
contexts: kinematics, population growth, and the relationship between
price and demand. The skill genuinely being tested is translating a
verbal rate-of-change statement into a correct equation -- for
example, "the rate of increase of a population is proportional to the
population's current size" becomes dP/dt = kP -- not necessarily
solving the resulting equation, since differential-equation solving
methods belong to Section H, Integration, rather than Section G.

## How to approach it

Because Section G spans first principles, a table of standard
derivatives, several differentiation rules, and two distinct
non-standard forms (implicit and parametric), the most efficient
revision structure separates "recall" content (the standard
derivatives table, the rule formulas) from "apply" content (classifying
stationary points, connected rates of change, constructing differential
equations), since exam questions test both in combination but they
are learned differently -- one through repetition until automatic, the
other through worked practice on varied scenarios. Because G6
deliberately stops short of solving the equations it asks you to
construct, resist the instinct to solve a constructed differential
equation using G-section techniques; recognise where G6's task
actually ends.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--01-chord-to-tangent.webp" width="900" height="880" alt="Graph of y = 2x squared. Point P is at x = 3, y = 18. Three chords from P to points a distance h to the right (h = 1, 0.5, 0.25) get closer to the gold tangent line as h shrinks. The chord gradient is 12 + 2h: 14, 13, 12.2 and 12.02 for h = 1, 0.5, 0.1 and 0.01. As h tends to 0 the gradient tends to 12, the gradient of the curve at x = 3, which agrees with dy/dx = 4x." loading="lazy">
  <figcaption>How chord gradients 12 + 2h approach the tangent gradient 12 at x = 3 on y = 2x².</figcaption>
</figure>

## Frequently asked questions

**What does AQA A-level Maths 7357 Section G cover?**
Section G covers the derivative as a gradient and first principles (G1), standard derivatives (G2), tangents, normals and stationary points (G3), the product, quotient and chain rules (G4), implicit and parametric differentiation (G5) and forming differential equations (G6).

**Which AQA 7357 papers can test differentiation?**
Section G is Paper 1 content, but Paper 2 and Paper 3 can each assess any Paper 1 content, so differentiation can earn marks across the whole qualification.

**What are the two interpretations of a derivative?**
Geometrically it is the gradient of the tangent to the curve; physically it is the instantaneous rate of change of the quantity the function represents.

**How do you avoid mistakes in connected rates of change?**
Write out which variable each given rate is with respect to before using the chain rule, for example dV/dt = dV/dr × dr/dt, so that you link the right two rates.

**How do you find where a function is increasing?**
Differentiate and find where f′(x) > 0. The function is decreasing where f′(x) < 0.

## Official syllabus

AQA A-Level Mathematics (7357) specification, Section G Differentiation, for first teaching from September 2017 -- [aqa.org.uk](https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357/specification/subject-content), content shared with the Department for Education's prescribed A-level Mathematics content and content shared across exam boards. Verified 2026-09-05.
