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
description: "First principles, standard derivatives, stationary points, the product/quotient/chain rules, implicit and parametric differentiation, and forming differential equations -- Section G of AQA A-Level Mathematics (7357)."
author: "marlbridge-academic-team"
publishedDate: 2026-09-06
featured: false
---

This guide covers **Section G: Differentiation**, G1 through G6, of
AQA A-Level Mathematics (7357), first teaching September 2017. Like
the rest of the Pure content, Section G is Department for Education
(DfE) prescribed content shared across every exam board offering
A-level Mathematics, not set independently by AQA. Section G runs
across both Paper 1 (pure) and Paper 2 (pure and mechanics/statistics),
so fluency here underpins marks across the whole qualification, not
just one exam paper.

## Where this fits in 7357

Differentiation builds directly on Section B (Algebra and Functions)
and Section D (Coordinate Geometry), applying the algebraic and
graph-sketching skills developed there to the new question of how a
function's rate of change behaves. It also underpins Section H
(Integration), which reverses the operation, and appears throughout
the mechanics content (rates of change of displacement and velocity)
and statistics content examined on Paper 2 and Paper 3.

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
eᵏˣ ln a before the chain rule is applied.

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

## Worked example: classifying a stationary point

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

## G5: implicit and parametric differentiation

For an implicitly-defined relation such as x² + y² = r², differentiate
both sides term by term with respect to x, treating y as a function of
x -- so d(y²)/dx becomes 2y dy/dx via the chain rule -- then rearrange
for dy/dx. For a parametrically-defined curve, with x = f(t) and
y = g(t), find dy/dx via dy/dx = (dy/dt) divided by (dx/dt). Only the
first derivative is required for implicit and parametric relations at
this level; second derivatives for these two specific techniques are
not part of the specification's requirements here.

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

## Official syllabus

AQA A-Level Mathematics (7357) specification, Section G Differentiation, for first teaching from September 2017 -- [aqa.org.uk](https://www.aqa.org.uk/subjects/mathematics/a-level/mathematics-7357/specification/subject-content), content shared with the Department for Education's prescribed A-level Mathematics content and content shared across exam boards. Verified 2026-09-05.
