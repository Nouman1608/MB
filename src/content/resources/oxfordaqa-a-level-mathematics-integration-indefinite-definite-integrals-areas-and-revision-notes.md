---
title: "OxfordAQA International AS and A-level Mathematics: Integration, areas and the trapezium rule (9660) -- Revision Notes"
seoTitle: "OxfordAQA 9660 Integration and Areas Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Integration: indefinite, definite integrals, areas and the trapezium rule"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 177
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p1-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "p1-integration-oxfordaqa-alevel-maths"
description: "Condensed revision notes for P1.4 integration in OxfordAQA International AS and A-level Mathematics 9660, with methods, a self-test and common slips."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
These notes condense section P1.4 (Integration) of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. The specification places the content in International AS, Unit P1 (Pure Maths); there are no Core, Extension or Higher labels. The [study guide](/resources/oxfordaqa-a-level-mathematics-integration-indefinite-definite-integrals-areas-and/) has the explanations and longer worked examples. Then use the [practice questions](/resources/oxfordaqa-a-level-mathematics-integration-indefinite-definite-integrals-areas-and-practice/), the [course hub](/boards/oxfordaqa/a-level/mathematics/), the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/) and the [free diagnostics](/diagnostics/) to find weak spots.

## Key results

| Topic | Result |
|---|---|
| Power rule | ∫ xⁿ dx = xⁿ⁺¹/(n + 1) + c, for rational n ≠ −1 |
| Constant | ∫ k dx = kx + c |
| Sums and differences | Integrate term by term; constants multiply through |
| Definite integral | ∫ₐᵇ f(x) dx = F(b) − F(a); no + c |
| Area under a curve above the axis | Area = ∫ₐᵇ y dx |
| Region below the axis | Integral is negative; area = magnitude |
| Between two graphs | Area = ∫ (upper − lower) dx between the intersection x-values |
| Trapezium rule | (h/2)[y₀ + yₙ + 2(y₁ + … + yₙ₋₁)], h = (b − a)/n |

## Indefinite integration: method

1. Rewrite as a sum of powers of x: roots as fractional powers, 1/xᵏ as x^(−k), brackets expanded.
2. For each term, add 1 to the power and divide by the new power.
3. Simplify the coefficient (dividing by a fraction means multiplying by its reciprocal).
4. Add + c.
5. Check by differentiating.

**Reminder.** ∫ 5x^(−3) dx = 5x^(−2)/(−2) + c = −5/(2x²) + c.

**Reminder.** (x + 2)/x^(1/2) = x^(1/2) + 2x^(−1/2), so the integral is (2/3)x^(3/2) + 4x^(1/2) + c.

### Rewriting table

| Written as | Rewrite as | Integral (without + c) |
|---|---|---|
| √x | x^(1/2) | (2/3)x^(3/2) |
| 1/√x | x^(−1/2) | 2x^(1/2) |
| x√x | x^(3/2) | (2/5)x^(5/2) |
| 1/x³ | x^(−3) | −1/(2x²) |
| ∛x | x^(1/3) | (3/4)x^(4/3) |
| 3/(2x²) | (3/2)x^(−2) | −3/(2x) |

**Gradient to curve.** Integrate the gradient function, then use the known point on the curve to fix c.

## Definite integrals: method

1. Integrate (drop + c).
2. Substitute b, then a, and subtract: F(b) − F(a).
3. Keep fractions and surds exact unless the question asks for a decimal.

**Reminder.** ∫₁⁸ x^(−1/3) dx = [(3/2)x^(2/3)]₁⁸ = (3/2)(4) − (3/2)(1) = 9/2.

Swap the limits and the answer changes sign. If both limits are equal the integral is zero.

## Areas

### Under a curve

Check the curve is above the x-axis on the interval, then integrate between the limits. If the question names the region as "between the curve and the x-axis" with no limits, the limits are where the curve meets the axis.

### Below the axis

The definite integral is negative. Give the area as the positive magnitude.

**Reminder.** y = x³ − 4x on [0, 2]: x(x² − 4) is negative there, so ∫₀² (x³ − 4x) dx = [x⁴/4 − 2x²]₀² = 4 − 8 = −4. The area is 4.

Regions that lie partly above and partly below the axis are not set in P1.4.

### Line and curve, or two curves

1. Set the equations equal; solve for the x-values of the intersections.
2. Sketch, or test a value between them, to see which graph is on top.
3. Integrate (upper − lower) between the intersections.
4. Do not find two areas under each graph separately unless you subtract carefully.

**Reminder.** The curve y = 3x² and the line y = 12 meet where 3x² = 12, so x = −2 and x = 2. The line is above the curve between them:

```
Area = ∫ from −2 to 2 of (12 − 3x²) dx = [12x − x³] = (24 − 8) − (−24 + 8) = 32
```

### Finding an unknown limit

Integrate, substitute the unknown limit, set equal to the given value, then solve.

**Reminder.** ∫₀ᵏ 6x^(1/2) dx = 108: [4x^(3/2)]₀ᵏ = 4k^(3/2) = 108, so k^(3/2) = 27 and k = 27^(2/3) = 9.

## Trapezium rule

### Method

1. Strip width h = (b − a)/n, where n is the number of strips.
2. List n + 1 ordinates (the y-values at x = a, a + h, …, b).
3. Add the first and last ordinates; add twice the sum of the rest.
4. Multiply by h/2.

**Reminder.** Table of values:

| x | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| y | 2.0 | 2.4 | 2.7 | 2.9 | 3.0 |

h = 1. Estimate = (1/2)[2.0 + 3.0 + 2(2.4 + 2.7 + 2.9)] = (1/2)(5 + 16) = 10.5.

### Over or under

| Shape of curve on the interval | Chords relative to curve | Rule gives |
|---|---|---|
| Bends upwards (convex) | Above | Over-estimate |
| Bends downwards (concave) | Below | Under-estimate |

Say what the curve does, not only the result. A sketch of a few strips with the chords drawn in makes the case clearly.

A model sentence: "The curve bends downwards, so each chord lies below the curve, and the rule under-estimates the area." Without the reason, the statement is incomplete.

### Improving the estimate

Use more strips (a smaller h). The estimate moves towards the true value, from the same side as before for a curve that does not change its bend.

## Must-know distinctions

- **Indefinite vs definite.** The indefinite integral is a family of functions with + c. The definite integral is a number.
- **Integral vs area.** The integral is signed. Area is not. They agree only when the curve is above the axis.
- **Strips vs ordinates.** Strips = ordinates − 1.
- **Limits vs intersections.** Given limits are used as stated; unnamed limits come from where graphs meet.
- **Exact vs estimate.** The trapezium rule gives an approximation; an integral done by hand gives the exact value.
- **Integrating vs differentiating a power.** Integrating divides by the new power; differentiating multiplies by the old one.

## A routine for any area question

1. Sketch the graph or graphs, marking where they meet the axis or each other.
2. Decide which graph is on top, or whether the region is above or below the x-axis.
3. Write the integral with its limits before you integrate, so the setup can be seen.
4. Integrate each power carefully, then substitute the upper limit and the lower limit.
5. Subtract, simplify, and state the area as a positive number with units if given.
6. Look at the size of the answer. An area that is far larger than the rectangle around the region has a slip in it.

## Checking your work

- Differentiate any indefinite integral; you should get the original function back.
- For a definite integral over a region above the axis, the answer must be positive.
- For the trapezium rule, compare with a rough count of the squares or with a rectangle of the average height. The estimate should be close.
- Keep four or more significant figures in the ordinates and round only the final estimate.

## Quick self-test

1. Find ∫ (6x² − 4x^(1/2)) dx.
2. Find ∫ (2x^(−3/2) + 3) dx.
3. Find ∫ (x³ + 5)/x² dx.
4. A curve has dy/dx = 3x^(1/2) and passes through (4, 10). Find y.
5. Evaluate ∫₀⁴ (x^(1/2) + 2x) dx.
6. Evaluate ∫₁₆¹ x^(−1/2) dx, with the limits as written.
7. Find the area enclosed between y = x² − 4x and the x-axis.
8. The line y = 2x and curve y = x² meet at x = 0 and x = 2. Find the area between them.
9. Use the trapezium rule with the four ordinates 4, 6, 7 and 7 (strip width h = 2) to estimate an area.
10. A curve bends downwards on [1, 5]. The trapezium rule is used with two strips. Over- or under-estimate?

### Answers

1. 2x³ − (8/3)x^(3/2) + c
2. −4x^(−1/2) + 3x + c
3. x²/2 − 5/x + c (rewrite as x + 5x^(−2))
4. y = 2x^(3/2) + c; at x = 4, 16 + c = 10, so y = 2x^(3/2) − 6
5. [(2/3)x^(3/2) + x²]₀⁴ = 16/3 + 16 = 64/3
6. [2x^(1/2)] from 16 to 1 = 2 − 8 = −6
7. The curve x(x − 4) is below the axis on (0, 4). ∫₀⁴ (x² − 4x) dx = 64/3 − 32 = −32/3, so the area is 32/3
8. ∫₀² (2x − x²) dx = 4 − 8/3 = 4/3
9. Three strips: (2/2)[4 + 7 + 2(6 + 7)] = 37
10. Under-estimate: the chords lie below a downward-bending curve

## Where marks are usually lost

- Dividing by n instead of n + 1 after raising the power.
- Leaving a bracket or root in the integrand instead of rewriting it as powers.
- Omitting + c in indefinite integration.
- Putting the lower limit in first, so the sign is reversed.
- Handing in a negative number for an area.
- Integrating the wrong way round for the area between a line and a curve.
- Counting n ordinates rather than n + 1 in the trapezium rule.
- Doubling the end ordinates.
- Saying "over-estimate" with no reference to the shape of the curve.
- Rounding ordinates too early and losing accuracy in the final estimate.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, section P1.4 Integration (International AS exams from May/June 2018, International A-level from May/June 2019), published by OxfordAQA.
