---
title: "OxfordAQA International AS and A-level Mathematics: Numerical methods: roots, iteration, mid-ordinate rule and Simpson's rule (9660)"
seoTitle: "OxfordAQA 9660 Numerical Methods Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Numerical methods: roots, iteration, mid-ordinate rule and Simpson's rule"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 198
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "p2-numerical-methods-oxfordaqa-alevel-maths"
description: "Study guide to P2.9 numerical methods for OxfordAQA International A-level Maths 9660: sign change, iteration, cobweb, mid-ordinate and Simpson's rules."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
This guide covers section P2.9 (Numerical methods) of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. The specification places this content in International A-level (A2) Unit P2 (Pure Maths); it is not examined at International AS. Use it with the [revision notes](/resources/oxfordaqa-a-level-mathematics-numerical-methods-roots-iteration-mid-ordinate-rule-revision-notes/) and the [practice questions](/resources/oxfordaqa-a-level-mathematics-numerical-methods-roots-iteration-mid-ordinate-rule-practice/). Course pages: [hub](/boards/oxfordaqa/a-level/mathematics/) and [checklist](/checklists/oxfordaqa/a-level/mathematics/). To find out where you stand first, try the [free diagnostics](/diagnostics/).

## What P2.9 asks you to do

| Strand | What you must be able to do |
|---|---|
| Locating roots | Find where f(x) = 0 by a change of sign of f(x) in an interval where f is continuous |
| Iteration | Rearrange an equation to x = g(x) and use a recurrence relation xₙ₊₁ = f(xₙ) to find approximate solutions |
| Staircase and cobweb diagrams | Draw them to illustrate an iteration and use them when discussing convergence |
| Mid-ordinate rule | Estimate a definite integral, and give its geometrical interpretation |
| Simpson's rule | Estimate a definite integral |
| Better estimates | Improve an estimate by increasing the number of steps |

The trapezium rule belongs to P1 (integration), so it is not listed here. Mentioning it can still help you compare estimates.

## Locating a root by a change of sign

Suppose f is continuous on [a, b]. If f(a) and f(b) have opposite signs, then f(x) = 0 has at least one root between a and b. The graph cannot get from one side of the x-axis to the other without crossing it.

A proper conclusion has four parts: the values of f at both ends, a statement that they have opposite signs, a statement that f is continuous, and the conclusion about a root in the interval.

**Worked example 1.** Show that x³ + 2x² − 5 = 0 has a root between 1 and 2, then find it correct to 2 decimal places.

```
f(x) = x³ + 2x² − 5
f(1) = 1 + 2 − 5 = −2
f(2) = 8 + 8 − 5 = 11
```

f is a polynomial, so it is continuous. The sign changes from negative to positive, so there is a root between 1 and 2.

To narrow it down, try values: f(1.2) = −0.392 and f(1.3) = 0.577, so the root is in (1.2, 1.3). Then f(1.25) = 0.078 (positive), so the root is below 1.25. To fix the second decimal place, test the two values that would round to 1.24: f(1.235) = −0.066 and f(1.245) = 0.030. These have opposite signs, so the root lies in (1.235, 1.245), which means **α = 1.24** to 2 decimal places.

### When the test fails or misleads

- **A discontinuity.** tan x is positive at x = 1 (about 1.557) and negative at x = 2 (about −2.185), but there is no root: tan x is undefined at x = π/2 ≈ 1.571, between the two. The sign change comes from a jump, not a crossing.
- **A touching root.** f(x) = (2x − 5)² has a root at x = 2.5, yet f(2) = 1 and f(3) = 1 have the same sign. No sign change does not prove no root.
- **An even number of roots.** If two roots lie in the interval, the signs at the ends can match. A sign change guarantees at least one root, and could hide three.

## Iteration: rearranging to x = g(x)

Rearrange f(x) = 0 into the form x = g(x). Choose a starting value x₁ and generate xₙ₊₁ = g(xₙ). If the values settle down, the limit α satisfies α = g(α), so α is a root of the original equation.

**Worked example 2.** For f(x) = x³ + 2x² − 5, write x²(x + 2) = 5, so x² = 5/(x + 2), giving

xₙ₊₁ = √(5/(xₙ + 2)), with x₁ = 1.

```
x₂ = √(5/3)      = 1.2910
x₃ = √(5/3.2910) = 1.2326
x₄ = 1.2437
x₅ = 1.2416
x₆ = 1.2420
x₇ = 1.2419
```

The values close in from both sides, and 1.2419 agrees with the root found by sign change. Give iterates to more decimal places than the accuracy you need, and carry full values between steps rather than rounded ones.

A different rearrangement of the same equation can fail. From x³ + 2x² = 5 we also get x = 5/x² − 2. Starting at x₁ = 1.3:

```
x₂ = 5/1.69 − 2 = 0.9586
x₃ = 3.4414
x₄ = −1.5778
x₅ = 0.0084
x₆ = 70 754.76
```

These values leap about and run away. The root has not changed; the rearrangement is unsuitable.

## Staircase and cobweb diagrams, and convergence

Draw y = x and y = g(x) on the same axes. Their intersection is the root α. To show an iteration:

1. Start at x₁ on the x-axis and go vertically to the curve y = g(x). The height is x₂.
2. Go horizontally to the line y = x. This moves x₂ across to the x-axis position.
3. Repeat from the new point on the line.

Two patterns follow, depending on the gradient of g near the root.

| Gradient of g at α | Picture | Behaviour |
|---|---|---|
| 0 < g′(α) < 1 | Staircase, moving one way | Converges, from one side |
| −1 < g′(α) < 0 | Cobweb, spiralling inwards | Converges, alternating either side of α |
| g′(α) > 1 | Staircase, moving away | Diverges |
| g′(α) < −1 | Cobweb, spiralling outwards | Diverges |

So the iteration converges when the curve is flatter than the line y = x at the root, that is |g′(α)| < 1, and the starting value is close enough. A value of |g′(α)| near zero means fast convergence.

**Worked example 3 (staircase).** The equation eˣ = x + 2 has a positive root α ≈ 1.1462. Rearrange to x = ln(x + 2), so g(x) = ln(x + 2) and g′(x) = 1/(x + 2). At the root, g′(α) ≈ 0.318, which lies between 0 and 1. With x₁ = 2:

```
x₂ = 1.3863
x₃ = 1.2197
x₄ = 1.1693
x₅ = 1.1535
x₆ = 1.1485
```

Each value is smaller than the last and the gap shrinks by roughly a third every step: a staircase down towards α.

**Worked example 4 (cobweb).** For xₙ₊₁ = √(5/(xₙ + 2)), g′(x) is negative, and g′(α) ≈ −0.192. Because it lies between −1 and 0, the iterates alternate either side of the root (1, 1.2910, 1.2326, 1.2437 ...): a cobweb spiralling inwards. In example 2 the other rearrangement has g′(α) ≈ −5.22, which is below −1, so it spirals outwards, matching the numbers.

**Worked example 5 (divergence).** Another rearrangement of eˣ = x + 2 is x = eˣ − 2, with g′(α) = eᵅ ≈ 3.146, above 1. Starting just above the root at x₁ = 1.2:

```
x₂ = 1.3201
x₃ = 1.7439
x₄ = 3.7194
x₅ = 39.2385
```

The values climb away from α in a diverging staircase.

## The mid-ordinate rule

To estimate ∫ₐᵇ y dx, split [a, b] into n strips of equal width h = (b − a)/n. Take the y-value at the midpoint of each strip as the height of a rectangle.

Mid-ordinate rule: ∫ₐᵇ y dx ≈ h(y½ + y₁½ + y₂½ + … ), the sum of the n midpoint heights multiplied by h.

**Geometrical interpretation.** Each strip becomes a rectangle whose top touches the curve at the middle of the strip. The rectangle has the same area as the trapezium under the tangent to the curve at that midpoint, because the tangent's height at the centre equals the midpoint height. If the curve is convex (curving upwards), the tangent lies below it, so the rule **underestimates**. If the curve is concave (curving downwards), it **overestimates**.

**Worked example 6.** Estimate ∫₀² x/(1 + x²) dx using 4 strips.

h = (2 − 0)/4 = 0.5. Midpoints: 0.25, 0.75, 1.25, 1.75.

| x | 0.25 | 0.75 | 1.25 | 1.75 |
|---|---|---|---|---|
| y = x/(1 + x²) | 0.23529 | 0.48000 | 0.48780 | 0.43077 |

Sum = 1.63386. Estimate = 0.5 × 1.63386 = **0.817** (3 d.p.). The exact value is ½ ln 5 = 0.805, so the estimate is slightly high.

## Simpson's rule

Simpson's rule needs an **even** number of strips, 2m, each of width h = (b − a)/(2m). With ordinates y₀, y₁, … , yₙ at the strip edges:

∫ₐᵇ y dx ≈ (h/3)[y₀ + yₙ + 4(y₁ + y₃ + y₅ + …) + 2(y₂ + y₄ + …)]

Ends once, odd positions by 4, even interior positions by 2. It fits a parabola through each pair of strips, so it is exact for any polynomial up to cubic. For instance, ∫₀² x³ dx = 4 and Simpson with 2 strips also gives 4.

**Worked example 7.** Estimate the integral in example 6 with Simpson's rule and 4 strips.

h = 0.5, ordinates at x = 0, 0.5, 1, 1.5, 2:

| x | 0 | 0.5 | 1 | 1.5 | 2 |
|---|---|---|---|---|---|
| y | 0 | 0.4 | 0.5 | 0.46154 | 0.4 |

```
(0.5/3)[0 + 0.4 + 4(0.4 + 0.46154) + 2(0.5)]
= (1/6)(0.4 + 3.44615 + 1)
= 0.80769
```

The estimate is **0.808**, closer to 0.805 than the mid-ordinate result.

**Check the strip count.** A table with 4 ordinates has only 3 strips, so Simpson's rule cannot be applied directly. You need an odd number of ordinates (5, 7, 9 ...). Check the count before you start.

## Improving an estimate by increasing the number of steps

More strips make each piece fit the curve better. Compare the estimates for ∫₁³ (1/x) dx, whose exact value is ln 3 = 1.0986:

| Strips | Mid-ordinate | Error | Simpson |
|---|---|---|---|
| 2 | 1.0667 | 0.0319 | 1.1111 |
| 4 | 1.0898 | 0.0089 | 1.1000 |
| 8 | 1.0963 | 0.0023 | 1.0987 |

Each doubling of strips cuts the mid-ordinate error to roughly a quarter here, while Simpson's estimate settles quickly. 1/x is convex, so every mid-ordinate value is below ln 3, as the interpretation predicts. To justify a given accuracy without knowing the exact value, double the strips until successive estimates agree to the required number of decimal places.

## Common errors

- Writing "f(a) < 0 and f(b) > 0, so there is a root" with no mention of continuity.
- Treating a sign change across an asymptote as a root.
- Starting an iteration from the wrong subscript, or rounding every iterate to 2 decimal places and drifting off.
- Reading g′(α) off the wrong equation; it is the gradient of g, not of f.
- Using h = (b − a)/n with n counting ordinates instead of strips.
- In the mid-ordinate rule, substituting the strip edges instead of the midpoints.
- In Simpson's rule, giving 4 to every interior ordinate, or using it with an odd number of strips.
- Claiming over- or under-estimate without referring to whether the curve is convex or concave.

## Next steps

Try the [practice questions](/resources/oxfordaqa-a-level-mathematics-numerical-methods-roots-iteration-mid-ordinate-rule-practice/), keep the [revision notes](/resources/oxfordaqa-a-level-mathematics-numerical-methods-roots-iteration-mid-ordinate-rule-revision-notes/) to hand, and see the P1 [integration guide](/resources/oxfordaqa-a-level-mathematics-integration-indefinite-definite-integrals-areas-and/) for the trapezium rule.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2, published by OxfordAQA. This content is listed under P2.9 in International A-level Unit P2 (Pure Maths).
