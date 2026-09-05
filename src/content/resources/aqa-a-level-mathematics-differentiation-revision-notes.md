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
publishedDate: 2026-09-05
featured: false
---

Section G runs across both Paper 1 (pure) and Paper 2 (pure and
mechanics/statistics), so fluency here underpins marks across the
whole exam, not just one paper. These notes are condensed for the
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
aᵏˣ = eᵏˣ ln a, so the chain rule introduces ln a when differentiating.
3. f''(x) > 0 indicates a minimum, f''(x) < 0 indicates a maximum, and
f''(x) = 0 requires further investigation (e.g. checking the sign of
f' on either side). 4. Both use the chain rule, but only the first
derivative is required for implicit and parametric relations at this
level — second derivatives are not expected. 5. Kinematics, population
growth, and the relationship between price and demand.
