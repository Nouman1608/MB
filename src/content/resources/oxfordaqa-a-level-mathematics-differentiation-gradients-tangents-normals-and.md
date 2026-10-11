---
title: "OxfordAQA International AS and A-level Mathematics: Differentiation: gradients, tangents, normals and stationary points (9660)"
seoTitle: "OxfordAQA Maths 9660 Differentiation Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Differentiation: gradients, tangents, normals and stationary points"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 176
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p1-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "p1-differentiation-oxfordaqa-alevel-maths"
description: "Study guide to OxfordAQA 9660 differentiation: gradients, rational powers, tangents, normals, stationary points, second derivatives and optimisation."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide covers specification section P1.3 (Differentiation) of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. The content belongs to International AS Unit P1 (Pure Maths), which also counts towards the International A-level. The series line on this page reads: International AS exams from May/June 2018, A-level from May/June 2019. The spec labels no part of P1.3 as Core, Extension or Higher.

Work through the guide in order, then use the [revision notes](/resources/oxfordaqa-a-level-mathematics-differentiation-gradients-tangents-normals-and-revision-notes/) and the [practice questions](/resources/oxfordaqa-a-level-mathematics-differentiation-gradients-tangents-normals-and-practice/). Broader context is in the [Unit P1 overview](/resources/a-level-oxfordaqa-mathematics-unit-p1/). See the [course hub](/boards/oxfordaqa/a-level/mathematics/) and the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/). To find out where you stand first, take one of the [free diagnostics](/diagnostics/).

## What P1.3 asks you to do

| Spec content | What you must be able to do |
|---|---|
| Derivative as gradient of the tangent; limit idea; rate of change | Explain dy/dx and f'(x) as the gradient of the tangent at a point and as a rate of change. A general appreciation is enough. |
| Differentiation of xⁿ, rational n | Differentiate sums and differences of terms such as 2x² − 5x³, x³/2 + 3/x², x√x, after rewriting as powers. |
| Tangents and normals | Find gradients, then equations of tangents and normals. |
| Stationary points, increasing and decreasing functions | Locate stationary points; find where a function is increasing or decreasing. |
| Second derivative | Use it to decide between a maximum and a minimum. |
| Optimisation | Build a function of one variable from a practical problem and optimise it. |

The spec says differentiation from first principles is not tested. It also says questions will not require you to find or know points of inflection. The limit idea itself is part of the content.

## The derivative as a gradient

The gradient of a straight line is constant. A curve's gradient changes, so we use the gradient of the tangent at a point. To see why that is well defined, take a chord from a point on the curve to a second point a small distance h away and let h shrink.

For y = x² at x = 5, the chord from x = 5 to x = 5 + h has gradient

```
[(5 + h)² − 25] / h = (10h + h²) / h = 10 + h
```

| h | 1 | 0.1 | 0.01 |
|---|---|---|---|
| chord gradient | 11 | 10.1 | 10.01 |

As h → 0 the chord gradient tends to the limit 10. That limit is the gradient of the tangent at x = 5, written f'(5). You will not be asked to run this argument as a method. You do need to know what the limit means.

The notations f'(x) and dy/dx both appear. If y = f(x), the second derivative is f''(x) or d²y/dx².

The derivative is also a rate of change. If h is a height in metres and t a time in seconds, dh/dt is metres per second. The unit of dy/dx is the unit of y divided by the unit of x.

## Differentiating powers of x

The rule: if y = axⁿ, then dy/dx = anxⁿ⁻¹. It works for any rational n, including negative and fractional values. A constant differentiates to 0, and you differentiate sums and differences term by term.

Rewrite first. Roots and reciprocals are powers.

| Expression | As a power |
|---|---|
| √x | x^(1/2) |
| x√x | x^(3/2) |
| 1/x³ | x^(−3) |
| 2/√x | 2x^(−1/2) |
| x³/2 | (1/2)x³ |

You cannot differentiate a product or quotient term by term. A term such as (x³ + 4)/x must be split into x² + 4x⁻¹ before you start.

**Worked example 1.** Differentiate y = 5x√x − 8/x³ + 2/√x and find the gradient where x = 4.

```
y = 5x^(3/2) − 8x^(−3) + 2x^(−1/2)
dy/dx = (15/2)x^(1/2) + 24x^(−4) − x^(−3/2)
```

At x = 4: x^(1/2) = 2, x⁻⁴ = 1/256 and x^(−3/2) = 1/8.

```
dy/dx = (15/2)(2) + 24/256 − 1/8
      = 15 + 3/32 − 4/32
      = 15 − 1/32 = 479/32
```

The gradient is 479/32. Leave it exact unless the question asks for a decimal.

## Tangents and normals

At a point (a, f(a)) the tangent has gradient m = f'(a). The normal is perpendicular to the tangent, so its gradient is −1/m, from the product-of-gradients result for perpendicular lines. Both lines pass through the point, so use y − y₁ = m(x − x₁).

Method:

1. Find the y-coordinate by substituting the x-value into the curve.
2. Differentiate and substitute to get m.
3. Write the tangent with m and the normal with −1/m.
4. Tidy into the form the question asks for, such as ax + by + c = 0.

**Worked example 2.** The curve is y = 2x^(3/2) − 5x + 1. Find the equations of the tangent and normal at the point where x = 9. These two lines and the x-axis enclose a triangle with the point; find its area.

```
y = 2(27) − 45 + 1 = 10        so the point is (9, 10)
dy/dx = 3x^(1/2) − 5 = 9 − 5 = 4
```

Tangent: y − 10 = 4(x − 9), so **y = 4x − 26**.

Normal gradient −1/4: y − 10 = −(1/4)(x − 9). Multiply by 4: 4y − 40 = −x + 9, so **x + 4y = 49**.

Set y = 0. The tangent meets the x-axis at x = 13/2. The normal meets it at x = 49. The base of the triangle is 49 − 13/2 = 85/2 and its height is 10 (the y-coordinate of the point).

```
Area = (1/2) × (85/2) × 10 = 425/2 = 212.5
```

## Increasing and decreasing functions

A function is increasing on an interval where f'(x) > 0 and decreasing where f'(x) < 0. To find these intervals, solve f'(x) = 0 and then test the sign of f'(x) in each section. Check the domain: a function with x^(1/2) is only defined for x ≥ 0.

**Worked example 3.** Find where g(x) = x^(3/2) − 6x^(1/2), for x > 0, is decreasing.

```
g'(x) = (3/2)x^(1/2) − 3x^(−1/2) = (3/2)x^(−1/2)(x − 2)
```

For x > 0 the factor (3/2)x^(−1/2) is positive. So g'(x) < 0 exactly when x − 2 < 0. The function is decreasing for **0 < x < 2** and increasing for x > 2.

## Stationary points and the second derivative

A stationary point is where dy/dx = 0. The usual types in this unit are maxima and minima. Always give both coordinates unless the question asks for x only.

To classify, differentiate again and substitute:

| Value of f''(x) at the point | Conclusion |
|---|---|
| f''(x) < 0 | maximum |
| f''(x) > 0 | minimum |
| f''(x) = 0 | test fails; check the sign of f'(x) on either side |

The alternative is to test the sign of the gradient just before and just after the point: positive then negative is a maximum, negative then positive is a minimum.

**Worked example 4.** Find and classify the stationary points of f(x) = x³ − 6x² − 36x + 9.

```
f'(x) = 3x² − 12x − 36 = 3(x − 6)(x + 2)
```

f'(x) = 0 gives x = 6 or x = −2.

```
f(−2) = −8 − 24 + 72 + 9 = 49
f(6)  = 216 − 216 − 216 + 9 = −207
f''(x) = 6x − 12
f''(−2) = −24 < 0    f''(6) = 24 > 0
```

So (−2, 49) is a maximum and (6, −207) is a minimum.

The "maximum" here is a local maximum: it is the greatest value near that point, not the greatest value of the function. With other functions a local maximum can even lie below a local minimum.

**Worked example 5.** When f'' = 0. For y = x⁴ − 4x³:

```
dy/dx = 4x³ − 12x² = 4x²(x − 3)
```

Stationary points at x = 0 and x = 3. Here d²y/dx² = 12x² − 24x, which is 0 at x = 0 and 36 at x = 3. So (3, −27) is a minimum. At x = 0 the test fails. Check the gradient: at x = −1 it is −16, and at x = 1 it is −8. It is negative on both sides, so the point is neither a maximum nor a minimum. You are not asked to name or find points of inflection, so state only what you have shown.

## Optimisation in practical problems

The spec says a question may be a practical problem where a function of a single variable has to be optimised. The steps are always the same.

1. Define your variables and write down any fixed quantity (volume, length of fencing).
2. Use the fixed quantity to eliminate all but one variable.
3. Differentiate, set the derivative to 0 and solve.
4. Prove the type with the second derivative (or the sign of the gradient).
5. Answer the question asked, with units, and reject values outside the sensible domain.

**Worked example 6.** An open tank has a square base of side x metres and height h metres. It must hold 32 m³. Find the dimensions that use the least sheet material, and that least area.

Volume: x²h = 32, so h = 32/x². The material is the base plus four sides:

```
A = x² + 4xh = x² + 128/x
dA/dx = 2x − 128/x² = 0   →   x³ = 64   →   x = 4
```

Then h = 32/16 = 2 and A = 16 + 32 = 48.

```
d²A/dx² = 2 + 256/x³ = 2 + 4 = 6 > 0
```

The second derivative is positive, so this is a minimum. The base is 4 m by 4 m, the height is 2 m and the least area is **48 m²**.

## Common errors

- Differentiating 1/x³ as if it were x³. Write it as x⁻³ first, then the answer is −3x⁻⁴.
- Forgetting to subtract 1 from a fractional power: the derivative of x^(1/2) is (1/2)x^(−1/2), not (1/2)x^(1/2).
- Using the tangent's gradient for the normal, or forgetting to take the negative reciprocal.
- Finding the gradient but never finding the y-coordinate, so the line has no point to pass through.
- Calling a point a minimum because f'(x) = 0, without any check.
- Treating f''(x) = 0 as proof that a point is neither a maximum nor a minimum. It only means the test is inconclusive.
- In optimisation, reporting x and stopping, when the question asked for the area, cost or volume.
- Ignoring the domain: a side length of −4 m is not a solution.

## Next steps

Use the [revision notes](/resources/oxfordaqa-a-level-mathematics-differentiation-gradients-tangents-normals-and-revision-notes/) to compress this into recall sheets, then try the [practice questions](/resources/oxfordaqa-a-level-mathematics-differentiation-gradients-tangents-normals-and-practice/) under timed conditions. For mixed Unit P1 work, see the [Unit P1 practice set](/resources/oxfordaqa-a-level-mathematics-p1-practice/). The [free diagnostics](/diagnostics/) show which topics need attention first.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, published by OxfordAQA: section 3.1, International AS Unit P1 (Pure Maths), content P1.3 Differentiation.
