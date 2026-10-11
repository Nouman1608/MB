---
title: "Pearson Edexcel International Advanced Level Mathematics: Stationary points, definite integrals, areas and the trapezium rule (YMA01)"
seoTitle: "Edexcel IAL Maths P2 Stationary Points and Areas Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Stationary points, definite integrals, areas and the trapezium rule"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 144
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-mathematics-2-edexcel-alevel-maths"
    subtopic: "p2-differentiation-edexcel-alevel-maths"
  - qualification: "a-level"
    topic: "unit-p2-pure-mathematics-2-edexcel-alevel-maths"
    subtopic: "p2-integration-edexcel-alevel-maths"
description: "Study guide to Edexcel International Advanced Level Maths P2 sections 7 and 8: stationary points, optimisation, definite integrals, areas, trapezium rule."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide is aligned to the Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics specification (Issue 3, April 2019). It covers Unit P2: Pure Mathematics 2, section 7 (Differentiation, 7.1) and section 8 (Integration, 8.1 to 8.3). As the specification states, P1 and P2 are compulsory units for both IAS Mathematics and IAL Mathematics (and Pure Mathematics). There are no tiers inside this content.

Use it with the [revision notes](/resources/edexcel-ial-mathematics-stationary-points-definite-integrals-areas-and-the-revision-notes/) and the [practice questions](/resources/edexcel-ial-mathematics-stationary-points-definite-integrals-areas-and-the-practice/). The wider course sits on the [Edexcel A Level Mathematics hub](/boards/edexcel/a-level/mathematics/), the [printable checklist](/checklists/edexcel/a-level/mathematics/) lists every topic, and the [free 10-minute diagnostics](/diagnostics/) show where to start. The rules for differentiating and integrating powers of x are in the [P1 differentiation and integration guide](/resources/edexcel-ial-mathematics-differentiating-and-integrating-powers-of-x-gradients/).

## What this unit covers

| Spec | What you must be able to do |
|---|---|
| 7.1 | Find maxima, minima and stationary points; decide where a function is increasing or decreasing; use this in curve sketching; solve maxima and minima problems set in a practical context |
| 8.1 | Evaluate definite integrals |
| 8.2 | Use a definite integral as the area under a curve; find the area bounded by a curve and given straight lines, or by two curves |
| 8.3 | Approximate an area with the trapezium rule; use more trapezia to improve accuracy; estimate the error |

The specification notes that ∫ x dy will not be required, so every area here uses dx.

## 1. Stationary points (7.1)

A stationary point of y = f(x) is a point where the gradient is zero: dy/dx = f′(x) = 0. Solve that equation, then substitute each root into the original function for the y-coordinate.

There are two ways to decide the nature of a stationary point.

**Second derivative test.** Find f″(x) and substitute the x-value.

| f″ at the point | Nature |
|---|---|
| f″(x) > 0 | local minimum |
| f″(x) < 0 | local maximum |
| f″(x) = 0 | test is inconclusive: use the gradient test |

**Gradient test.** Work out the sign of f′(x) just before and just after the point.

| Gradient before → after | Nature |
|---|---|
| negative → positive | local minimum |
| positive → negative | local maximum |
| same sign on both sides | point of inflection (not a turning point) |

### Worked example 1

Find the stationary points of y = x³ − 9x² + 15x + 8 and determine their nature.

```
dy/dx = 3x² − 18x + 15 = 3(x² − 6x + 5) = 3(x − 1)(x − 5)
Solving dy/dx = 0 gives x = 1 or x = 5
d²y/dx² = 6x − 18
```

When x = 1: y = 1 − 9 + 15 + 8 = 15, and d²y/dx² = −12 < 0, so (1, 15) is a maximum.

When x = 5: y = 125 − 225 + 75 + 8 = −17, and d²y/dx² = 12 > 0, so (5, −17) is a minimum.

### Worked example 2: the second derivative is zero

Find and classify the stationary points of y = 3x⁵ − 5x³.

```
dy/dx = 15x⁴ − 15x² = 15x²(x − 1)(x + 1)
dy/dx = 0  →  x = 0, x = 1 or x = −1
d²y/dx² = 60x³ − 30x
```

At x = 1: y = −2 and d²y/dx² = 30 > 0, so (1, −2) is a minimum. At x = −1: y = 2 and d²y/dx² = −30 < 0, so (−1, 2) is a maximum.

At x = 0: y = 0 and d²y/dx² = 0, so the test fails. Use the gradient instead.

| x | −0.5 | 0 | 0.5 |
|---|---|---|---|
| dy/dx | −2.8125 | 0 | −2.8125 |

The gradient is negative either side, so (0, 0) is a point of inflection with a horizontal tangent.

### Negative and fractional powers

Rewrite first. For y = x² + 54/x, write y = x² + 54x⁻¹.

```
dy/dx = 2x − 54x⁻² = 2x − 54/x²
2x − 54/x² = 0  →  2x³ = 54  →  x = 3
d²y/dx² = 2 + 108/x³ = 2 + 4 = 6 > 0
```

So (3, 27) is a minimum, and the only stationary point.

## 2. Increasing and decreasing functions (7.1)

A function is **increasing** on an interval where f′(x) > 0 and **decreasing** where f′(x) < 0. Find the roots of f′(x), then test its sign between and beyond them.

### Worked example 3

Find the values of x for which f(x) = 4x³ − 15x² + 12x is increasing.

```
f′(x) = 12x² − 30x + 12 = 6(2x − 1)(x − 2)
```

The roots are 1/2 and 2. The quadratic f′ opens upwards, so it is positive for x < 1/2, negative for 1/2 < x < 2 and positive for x > 2.

f is increasing for **x < 1/2 and x > 2**. It is decreasing for 1/2 < x < 2.

Give the two intervals separately.

## 3. Curve sketching with calculus (7.1)

Use the gradient to place turning points exactly. A sketch should show where the curve crosses or touches the axes, each stationary point with its coordinates, and the end behaviour from the highest power of x.

### Worked example 4

Sketch y = x²(9 − x) = 9x² − x³.

The curve touches the x-axis at x = 0 (a repeated root) and crosses it at x = 9. 

```
dy/dx = 18x − 3x² = 3x(6 − x)
d²y/dx² = 18 − 6x
```

At x = 0: y = 0 and d²y/dx² = 18, a minimum at the origin. At x = 6: y = 108 and d²y/dx² = −18, a maximum at (6, 108).

The curve comes down from +∞ on the left, touches the axis at the origin, rises to (6, 108), then falls through (9, 0) without limit.

## 4. Maxima and minima in context (7.1)

The specification says these problems may be set in a practical context. Follow these steps.

1. Write the quantity to optimise in terms of two variables, then use the constraint to eliminate one.
2. Differentiate, set the gradient to zero and solve.
3. Show it is the maximum or minimum asked for.
4. Answer in the context, with units.

### Worked example 5

An open box has a rectangular base measuring 2x cm by x cm and vertical sides of height h cm. Its volume is 288 cm³. Find the least possible area of card needed.

Volume: 2x²h = 288, so h = 144/x².

Surface area: S = 2x² + 2(2xh) + 2(xh) = 2x² + 6xh = 2x² + 864/x.

```
dS/dx = 4x − 864/x² = 0  →  x³ = 216  →  x = 6
d²S/dx² = 4 + 1728/x³ = 12 > 0
```

The second derivative is positive, so this is a minimum. S = 72 + 144 = **216 cm²**.

## 5. Definite integrals (8.1)

If F′(x) = f(x), then

∫ from a to b of f(x) dx = [F(x)] from a to b = F(b) − F(a)

The constant of integration cancels, so leave it out.

### Worked example 6

Evaluate ∫ from 1 to 4 of (3√x − 2/x²) dx.

Rewrite: 3x^(1/2) − 2x⁻².

```
[ 2x^(3/2) + 2x⁻¹ ] from 1 to 4
= (2 × 8 + 2/4) − (2 + 2)
= 16.5 − 4
= 12.5
```

The answer is **25/2**.

## 6. Area under a curve (8.2)

For a curve above the x-axis, the area bounded by the curve, the x-axis, x = a and x = b is ∫ from a to b of y dx. A definite integral is **signed**: where the curve is below the x-axis, it is negative.

So if the curve crosses the axis between a and b, find the roots, integrate each section separately and add the **magnitudes**.

### Worked example 7

Find the total area enclosed by y = x(x − 2)(x − 5) and the x-axis, for 0 ≤ x ≤ 5.

Expand: y = x³ − 7x² + 10x. The roots are 0, 2 and 5. The curve is positive on 0 < x < 2 and negative on 2 < x < 5.

```
F(x) = x⁴/4 − 7x³/3 + 5x²
F(2) = 4 − 56/3 + 20 = 16/3
F(5) = 625/4 − 875/3 + 125 = −125/12
```

First section: F(2) − F(0) = 16/3.

Second section: F(5) − F(2) = −125/12 − 64/12 = −63/4, so its area is 63/4.

Total area = 16/3 + 63/4 = 64/12 + 189/12 = **253/12**.

Integrating straight from 0 to 5 gives −125/12, which is the signed value and not an area.

### Area between a curve and a line

For two graphs, the area between them is

area = ∫ from a to b of (upper − lower) dx

with a and b the x-coordinates of the intersections.

### Worked example 8

Find the finite area enclosed by y = x² + 1 and y = 7 − x.

Intersections: x² + 1 = 7 − x gives x² + x − 6 = 0, so (x + 3)(x − 2) = 0 and x = −3 or x = 2. The line is above the curve between these.

```
upper − lower = (7 − x) − (x² + 1) = 6 − x − x²
∫ from −3 to 2 of (6 − x − x²) dx = [6x − x²/2 − x³/3] from −3 to 2
= (12 − 2 − 8/3) − (−18 − 9/2 + 9)
= 22/3 − (−27/2)
= 125/6
```

The area is **125/6**.

### Two curves that cross

If the upper curve changes, split at each crossing point.

### Worked example 9

Work out the total area of the regions bounded by the curves y = x³ and y = 4x − 3x².

Solve x³ = 4x − 3x²: x³ + 3x² − 4x = x(x − 1)(x + 4) = 0, so x = −4, 0 or 1.

At x = −1 the cubic gives −1 and the quadratic −7, so the cubic is above on −4 < x < 0. At x = 0.5 the values are 0.125 and 1.25, so the quadratic is above on 0 < x < 1.

```
Region 1: ∫ from −4 to 0 of (x³ + 3x² − 4x) dx = [x⁴/4 + x³ − 2x²] from −4 to 0 = 32
Region 2: ∫ from 0 to 1 of (4x − 3x² − x³) dx = [2x² − x³ − x⁴/4] from 0 to 1 = 3/4
```

Total area = 32 + 3/4 = **131/4**. One integral of (x³ + 3x² − 4x) from −4 to 1 would be wrong.

## 7. The trapezium rule (8.3)

Divide the range a to b into n equal strips, each of width h = (b − a)/n. Take the y-values y₀, y₁, …, yₙ at the strip edges:

Area ≈ (h/2) × [ y₀ + yₙ + 2(y₁ + y₂ + … + yₙ₋₁) ]

The number of y-values is one more than the number of strips. You can practise on integrable functions, because then you can check the error.

### Worked example 10

Use the trapezium rule with 3 strips to estimate ∫ from 1 to 4 of √x dx. Compare it with the exact value.

h = 1. The y-values are √1 = 1, √2 = 1.4142, √3 = 1.7321 and √4 = 2.

```
Area ≈ (1/2)[1 + 2 + 2(1.4142 + 1.7321)]
     = (1/2)(3 + 6.2926)
     = 4.646 (3 d.p.)
```

Exact value: [ (2/3)x^(3/2) ] from 1 to 4 = 16/3 − 2/3 = 14/3 = 4.667 (3 d.p.).

The estimate is too small by about 0.020, because the curve bends downwards and each trapezium lies under it.

**Over or under?** If the curve bends upwards (f″ > 0 over the interval), the chords lie above the curve and the rule over-estimates. If it bends downwards (f″ < 0), the rule under-estimates.

### More strips, smaller error

Use y = x² on 1 ≤ x ≤ 3, where the exact area is 26/3.

| Strips | Estimate | Error |
|---|---|---|
| 4 | 35/4 = 8.75 | +1/12 ≈ 0.0833 |
| 8 | 139/16 = 8.6875 | +1/48 ≈ 0.0208 |

Doubling the strips cut the error to a quarter. For smooth curves this is roughly what happens. When no exact value is known, compare two estimates: the one with more strips is usually closer, and the gap between them gives a rough size for the error in the cruder one.

## Common errors

- Treating f″(x) = 0 as proof of an inflection.
- Integrating across a root of the curve and calling the signed answer an area.
- Missing a crossing point between two curves and using one integral throughout.
- Using n y-values for n strips. There are n + 1.

## Where to go next

Work through the [practice questions](/resources/edexcel-ial-mathematics-stationary-points-definite-integrals-areas-and-the-practice/) and keep the [revision notes](/resources/edexcel-ial-mathematics-stationary-points-definite-integrals-areas-and-the-revision-notes/) open for the formulas. The [Pure Mathematics 2 overview](/resources/a-level-edexcel-mathematics-pure-mathematics-2/) places this unit within P2.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification Issue 3, April 2019, published by Pearson Education Limited. Unit P2 sections 7.1 and 8.1 to 8.3.
