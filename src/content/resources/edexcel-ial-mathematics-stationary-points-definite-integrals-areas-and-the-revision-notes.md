---
title: "Pearson Edexcel International Advanced Level Mathematics: Stationary points, definite integrals, areas and the trapezium rule (YMA01) -- Revision Notes"
seoTitle: "Edexcel IAL Maths P2 Stationary Points Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes for Edexcel International Advanced Level Maths P2 stationary points, areas and the trapezium rule, with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense Unit P2: Pure Mathematics 2, sections 7.1 and 8.1 to 8.3 of the Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics specification (Issue 3, April 2019). P1 and P2 are compulsory units for IAS and IAL Mathematics (and Pure Mathematics), as the specification states. Longer explanations and worked examples are in the [study guide](/resources/edexcel-ial-mathematics-stationary-points-definite-integrals-areas-and-the/).

Then test yourself with the [practice questions](/resources/edexcel-ial-mathematics-stationary-points-definite-integrals-areas-and-the-practice/). Course links: the [Edexcel A Level Mathematics hub](/boards/edexcel/a-level/mathematics/), the [printable checklist](/checklists/edexcel/a-level/mathematics/) and the [free 10-minute diagnostics](/diagnostics/).

## Key ideas and formulas

| Topic (spec) | Result |
|---|---|
| Stationary point (7.1) | dy/dx = 0; find the y-value by substituting back |
| Nature by f″ (7.1) | f″ > 0 minimum; f″ < 0 maximum; f″ = 0 inconclusive |
| Nature by gradient (7.1) | − then + minimum; + then − maximum; same sign both sides inflection |
| Increasing / decreasing (7.1) | f′(x) > 0 increasing; f′(x) < 0 decreasing |
| Definite integral (8.1) | ∫ from a to b of f(x) dx = F(b) − F(a), no constant needed |
| Area under a curve (8.2) | ∫ y dx between the limits, for y ≥ 0 |
| Area between curves (8.2) | ∫ (upper − lower) dx between the intersections |
| Trapezium rule (8.3) | Area ≈ (h/2)[y₀ + yₙ + 2(y₁ + … + yₙ₋₁)], where h = (b − a)/n |

The specification says ∫ x dy will not be required, so all areas use dx.

## Method boxes

### Find and classify stationary points

1. Rewrite the function as powers of x. Differentiate.
2. Solve dy/dx = 0.
3. Substitute each root into y to get the coordinates.
4. Find d²y/dx² and test the sign at each root.
5. If it is zero, test the sign of dy/dx either side.

### Optimisation problem

1. Define variables; write the quantity to optimise.
2. Use the constraint to leave one variable.
3. Differentiate and set to zero.
4. Prove maximum or minimum.
5. Give the answer with units, in the words of the question.

### Area bounded by a curve and the x-axis

1. Find where the curve meets the x-axis.
2. Split the integral at every root inside the interval.
3. Integrate each part. Make every part positive before adding.

### Area between two graphs

1. Equate the equations to find intersections.
2. Decide which graph is higher on each stretch.
3. Integrate (upper − lower). Split wherever they cross.

### Trapezium rule

1. Choose n strips, then h = (b − a)/n.
2. List n + 1 values of y.
3. Substitute into the formula; keep full figures until the final line.
4. Comment on over- or under-estimate if asked.

## Worked reminders

### Stationary points

y = x³ + 3x² − 24x + 1.

```
dy/dx = 3x² + 6x − 24 = 3(x + 4)(x − 2)
x = 2: y = −27, d²y/dx² = 6x + 6 = 18 > 0     minimum at (2, −27)
x = −4: y = 81, d²y/dx² = −18 < 0             maximum at (−4, 81)
```

### Optimisation

A rectangle has area 64 m². Find the least possible perimeter.

```
sides x and 64/x, so P = 2x + 128/x
dP/dx = 2 − 128/x² = 0  →  x² = 64  →  x = 8  (x > 0)
d²P/dx² = 256/x³ = 1/2 > 0   minimum
P = 16 + 16 = 32 m
```

### Area when the curve crosses the axis

Find the area between y = x² − 3x − 10 and the x-axis for 0 ≤ x ≤ 6. The roots are −2 and 5, so split at x = 5.

```
F(x) = x³/3 − 3x²/2 − 10x
F(5) − F(0) = −275/6     (below the axis, so area 275/6)
F(6) − F(5) = −42 + 275/6 = 23/6
Total area = 275/6 + 23/6 = 149/3
```

The single integral from 0 to 6 gives −42, which is not the area.

### Curve and line

Work out the area enclosed by y = x² and the line y = 4x + 5.

```
x² = 4x + 5  →  x² − 4x − 5 = 0  →  x = −1 or x = 5
∫ from −1 to 5 of (4x + 5 − x²) dx = [2x² + 5x − x³/3] from −1 to 5
= (50 + 25 − 125/3) − (2 − 5 + 1/3)
= 100/3 − (−8/3)
= 36
```

### Trapezium rule and error estimate

Estimate ∫ from 0 to 1 of √(1 + x²) dx.

With 2 strips, h = 0.5 and the y-values are 1, 1.1180, 1.4142:

(0.5/2)[1 + 1.4142 + 2(1.1180)] = 0.25 × 4.6502 = 1.1626

With 4 strips, h = 0.25 and the y-values are 1, 1.0308, 1.1180, 1.2500, 1.4142:

(0.25/2)[1 + 1.4142 + 2(1.0308 + 1.1180 + 1.2500)] = 0.125 × 9.2118 = 1.1515

The curve bends upwards, so both are over-estimates, and the 4-strip value is the better one. The two estimates differ by about 0.011, which gives a rough idea of the error in the 2-strip value.

## Must-know distinctions

- **Stationary point or turning point.** Every turning point is stationary. A point of inflection can be stationary without turning.
- **Value of integral or area.** A definite integral is signed. An area is never negative.
- **Local or global.** A local maximum is only the highest point nearby. The curve may go higher elsewhere.
- **Strips or ordinates.** n strips need n + 1 y-values.
- **Which curve is above.** Check with a test value. Do not assume the first named graph is the upper one.
- **Estimate or exact value.** The trapezium rule gives an approximation. Never present it as an exact area.

## Quick self-test

Do these without notes, then check below.

1. Find the coordinates of the stationary point of y = x² + 10x − 4 and state its nature.
2. For what values of x is f(x) = x³ − 12x² increasing?
3. Evaluate ∫ from 0 to 3 of (x² + 1) dx.
4. Evaluate ∫ from 1 to 2 of (4x³ − 6/x²) dx.
5. Find the area enclosed by y = x(x − 4) and the x-axis.
6. Use the trapezium rule with 2 strips to estimate ∫ from 1 to 3 of 1/x dx. Is it an over-estimate or under-estimate?
7. How many y-values are needed for a trapezium rule estimate with 5 strips?
8. What should you do if f″(x) = 0 at a stationary point?
9. Find the minimum point of y = 2x³ − 21x² + 60x.
10. A rectangle has perimeter 20 m. What is its greatest possible area?
11. Find the area between y = x³ and the x-axis for −1 ≤ x ≤ 1.

### Answers

1. dy/dx = 2x + 10 = 0 gives x = −5 and y = 25 − 50 − 4 = −29. d²y/dx² = 2 > 0, so a **minimum at (−5, −29)**.
2. f′(x) = 3x² − 24x = 3x(x − 8) > 0 for **x < 0 or x > 8**.
3. [x³/3 + x] from 0 to 3 = 9 + 3 = **12**.
4. [x⁴ + 6/x] from 1 to 2 = (16 + 3) − (1 + 6) = **12**.
5. ∫ from 0 to 4 of (x² − 4x) dx = 64/3 − 32 = −32/3. The curve is below the axis, so the area is **32/3**.
6. h = 1; y-values are 1, 1/2, 1/3. Area ≈ (1/2)[1 + 1/3 + 2(1/2)] = 7/6 ≈ **1.17**. The curve bends upwards, so it is an **over-estimate**.
7. **6**.
8. The test is inconclusive. Check the sign of dy/dx on either side.
9. dy/dx = 6x² − 42x + 60 = 6(x − 2)(x − 5). d²y/dx² = 12x − 42 is positive at x = 5, where y = 25. The minimum point is **(5, 25)**.
10. Sides x and 10 − x give area A = 10x − x². dA/dx = 10 − 2x = 0 at x = 5, so the greatest area is **25 m²**.
11. The curve is below the axis for x < 0 and above it for x > 0. Area = 2 × ∫ from 0 to 1 of x³ dx = 2 × 1/4 = **1/2**. The signed integral is 0.

## Where marks are usually lost

- Finding x only and not the y-coordinate of a stationary point.
- Calling a point a minimum without showing the sign of f″ or the gradient test.
- Differentiating 1/x² as if it were x², or integrating √x without raising the power.
- Subtracting limits the wrong way, or forgetting to substitute the lower limit.
- Treating a negative integral as an area, or combining positive and negative sections into one integral.
- Not solving for the intersection points before integrating between two curves.
- Subtracting the lower curve from the upper curve the wrong way round.
- Using n y-values instead of n + 1 in the trapezium rule, or the wrong value of h.
- Rounding y-values too early, so the final estimate is off.
- Leaving an optimisation answer as a value of x when the question asked for a volume, area or cost.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification Issue 3, April 2019, published by Pearson Education Limited. Unit P2 sections 7.1 and 8.1 to 8.3.
