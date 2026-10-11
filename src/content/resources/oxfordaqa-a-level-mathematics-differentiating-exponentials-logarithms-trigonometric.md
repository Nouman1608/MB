---
title: "OxfordAQA International AS and A-level Mathematics: Product, quotient and chain rules; e^x, ln x, trig (9660)"
seoTitle: "OxfordAQA Maths P2 Differentiating e^x, ln x, Trig Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Differentiating exponentials, logarithms, trigonometric functions and the product, quotient and chain rules"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 193
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "p2-differentiation-oxfordaqa-alevel-maths"
description: "Study guide to OxfordAQA 9660 P2.6: derivatives of e^x, ln x and trig functions, product, quotient and chain rules, and dy/dx = 1/(dx/dy)."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide covers the first part of specification section P2.6 (Differentiation) of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. The specification states that this content is part of International A-level (A2) Unit P2 (Pure Maths) and is not examined at International AS. The series line on this page reads: International AS exams from May/June 2018, A-level from May/June 2019. The later parts of P2.6, implicit and parametric differentiation and the related tangents and normals, are separate topics and are not taught here.

Work through the guide in order, then use the [revision notes](/resources/oxfordaqa-a-level-mathematics-differentiating-exponentials-logarithms-trigonometric-revision-notes/) and the [practice questions](/resources/oxfordaqa-a-level-mathematics-differentiating-exponentials-logarithms-trigonometric-practice/). Differentiating powers of x is covered in the [P1 differentiation guide](/resources/oxfordaqa-a-level-mathematics-differentiation-gradients-tangents-normals-and/), and the functions themselves are in the [exponentials and logarithms guide](/resources/oxfordaqa-a-level-mathematics-exponential-functions-logarithms-and-solving-a-x-b/). See the [course hub](/boards/oxfordaqa/a-level/mathematics/), the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/) and the [free diagnostics](/diagnostics/).

## What you need to be able to do

| Spec content | What you must be able to do |
|---|---|
| Differentiation of e^x, ln x, sin x, cos x, tan x | Write each derivative down without working. |
| Linear combinations of these functions | Differentiate sums and constant multiples, including e^(kx) and sin(kx). |
| Product rule | Differentiate a product such as (x² + 1) ln x. |
| Quotient rule | Differentiate a quotient such as (4x − 3)/(x + 5). |
| Chain rule | Differentiate a function of a function, such as ln(x² + 3x). |
| dy/dx = 1/(dx/dy) | Find a gradient from a curve written as x in terms of y. |

All the trigonometric results below assume that x is in radians.

## The standard derivatives

| y | dy/dx |
|---|---|
| e^x | e^x |
| ln x (x > 0) | 1/x |
| sin x | cos x |
| cos x | −sin x |
| tan x | 1/cos²x, also written sec²x |

The function e^x is its own derivative, which is why it appears in growth and decay models. Notice the minus sign in the derivative of cos x. It is the single most dropped sign in this topic.

Derivatives of sums and constant multiples work term by term. For a constant k, the rules for e^(kx), sin(kx), cos(kx) and tan(kx) are the standard results with a factor k brought out front (the chain rule below explains why):

| y | dy/dx |
|---|---|
| e^(kx) | k e^(kx) |
| sin(kx) | k cos(kx) |
| cos(kx) | −k sin(kx) |
| tan(kx) | k sec²(kx) |
| ln(ax + b) | a/(ax + b) |

Since ln(5x) = ln 5 + ln x, the derivative of ln(5x) is 1/x, not 1/(5x).

**Worked example 1.** Let g(x) = 3e^(2x) + 4 sin(3x) − 2 cos(x/2). Find g′(x) and g′(0).

```
g′(x) = 3(2e^(2x)) + 4(3 cos 3x) − 2(−(1/2) sin(x/2))
      = 6e^(2x) + 12 cos 3x + sin(x/2)
g′(0) = 6(1) + 12(1) + 0 = 18
```

## The chain rule

For a function of a function, put y = f(u) with u = g(x). Then

```
dy/dx = dy/du × du/dx
```

In words: differentiate the outer function with the inner one left as it is, then multiply by the rate at which the inner one changes.

**Worked example 2.** Differentiate y = ln(x² + 3x).

```
u = x² + 3x, so y = ln u
dy/du = 1/u, du/dx = 2x + 3
dy/dx = (2x + 3)/(x² + 3x)
```

**Worked example 3.** Differentiate y = (sin 3x)⁴ and find its gradient at x = π/18.

```
u = sin 3x, y = u⁴
dy/du = 4u³, du/dx = 3 cos 3x
dy/dx = 12 sin³(3x) cos(3x)
At x = π/18: 3x = π/6, sin = 1/2, cos = √3/2
dy/dx = 12 × (1/8) × (√3/2) = 3√3/4
```

**Worked example 4.** Differentiate y = √(1 + e^(4x)).

```
y = (1 + e^(4x))^(1/2)
dy/dx = (1/2)(1 + e^(4x))^(−1/2) × 4e^(4x)
      = 2e^(4x)/√(1 + e^(4x))
```

When a function has three layers, work from the outside inwards and multiply the three derivatives.

## The product rule

Suppose y = uv with u and v each a function of x. Then

```
dy/dx = u (dv/dx) + v (du/dx)
```

Use it when two functions that each contain x are multiplied. A constant multiplier does not need it.

**Worked example 5.** Differentiate y = (x² + 1) ln x and find the gradient when x = 1.

```
u = x² + 1, v = ln x
du/dx = 2x, dv/dx = 1/x
dy/dx = (x² + 1)(1/x) + ln x (2x)
      = (x² + 1)/x + 2x ln x
At x = 1: (2)/1 + 2(1)(0) = 2
```

**Worked example 6.** Differentiate y = e^(−2x) cos 3x.

```
u = e^(−2x), v = cos 3x
du/dx = −2e^(−2x), dv/dx = −3 sin 3x
dy/dx = e^(−2x)(−3 sin 3x) + cos 3x (−2e^(−2x))
      = −e^(−2x)(3 sin 3x + 2 cos 3x)
```

Taking out the common factor e^(−2x) makes the next step, setting dy/dx = 0, much easier.

**Worked example 7.** Find the x-coordinate where y = (2x − 1)e^(−3x) has gradient zero.

```
dy/dx = (2x − 1)(−3e^(−3x)) + e^(−3x)(2)
      = e^(−3x)(−6x + 3 + 2) = e^(−3x)(5 − 6x)
e^(−3x) is never zero, so 5 − 6x = 0, giving x = 5/6
```

## The quotient rule

For y = u/v:

```
dy/dx = (v (du/dx) − u (dv/dx)) / v²
```

The order in the numerator matters: the denominator times the derivative of the top comes first, with a minus sign between.

**Worked example 8.** Differentiate y = (4x − 3)/(x + 5).

```
u = 4x − 3, v = x + 5, du/dx = 4, dv/dx = 1
dy/dx = (4(x + 5) − (4x − 3)(1)) / (x + 5)²
      = (4x + 20 − 4x + 3)/(x + 5)² = 23/(x + 5)²
```

**Worked example 9.** Differentiate y = (e^(3x) + 2)/(e^(3x) − 1).

```
u = e^(3x) + 2, v = e^(3x) − 1
du/dx = 3e^(3x), dv/dx = 3e^(3x)
numerator = 3e^(3x)(e^(3x) − 1) − (e^(3x) + 2)(3e^(3x))
          = 3e^(3x)[(e^(3x) − 1) − (e^(3x) + 2)] = −9e^(3x)
dy/dx = −9e^(3x)/(e^(3x) − 1)²
```

**Worked example 10.** Apply the quotient rule to y = sin x / cos x to obtain the derivative of tan x.

```
dy/dx = (cos x · cos x − sin x · (−sin x)) / cos²x
      = (cos²x + sin²x)/cos²x = 1/cos²x
```

A quotient with an exponential denominator can also be written as a product with a negative power. For example, sin x / e^x = e^(−x) sin x, and the product rule gives dy/dx = e^(−x)(cos x − sin x).

## The inverse rule: dy/dx = 1/(dx/dy)

Sometimes x is given as a function of y. Differentiate with respect to y to get dx/dy, then take the reciprocal:

```
dy/dx = 1 / (dx/dy)
```

The answer is usually in terms of y. If you need it at a point, use the y-value of that point.

**Worked example 11.** A curve has equation x = 3y² − 10y + 2. Find dy/dx at the point where y = 4.

```
dx/dy = 6y − 10 = 14 when y = 4
dy/dx = 1/14
```

**Worked example 12.** A curve has equation x = y⁴ + 5y. Find dy/dx at the point where y = 1.

```
dx/dy = 4y³ + 5 = 9 when y = 1
dy/dx = 1/9
```

**Worked example 13.** Use the rule to differentiate y = (1/2) ln x. Rewrite as x = e^(2y).

```
dx/dy = 2e^(2y) = 2x
dy/dx = 1/(2x)
```

This agrees with differentiating (1/2) ln x directly.

## Choosing the method

| Function looks like | Use |
|---|---|
| A function inside another, such as sin(x²) | Chain rule |
| Two x-functions multiplied, such as x e^(2x) | Product rule |
| Two x-functions divided, such as e^x/x | Quotient rule |
| x given in terms of y | dy/dx = 1/(dx/dy) |

Many questions need two rules. For y = x³ sin(2x), use the product rule and, inside it, the chain rule for sin(2x):

```
dy/dx = x³ (2 cos 2x) + sin(2x)(3x²) = 2x³ cos 2x + 3x² sin 2x
```

**Worked example 14.** Differentiate y = e^(2x)/(x² + 1), using the quotient rule with the chain rule inside it.

```
u = e^(2x), v = x² + 1, du/dx = 2e^(2x), dv/dx = 2x
dy/dx = (2e^(2x)(x² + 1) − e^(2x)(2x)) / (x² + 1)²
      = 2e^(2x)(x² − x + 1)/(x² + 1)²
```

Write u, v, du/dx and dv/dx down before you substitute. It keeps the signs under control and shows which rule you chose.

## Common errors

- Writing d/dx of cos x as sin x. The result is −sin x.
- Forgetting the inside derivative: d/dx of e^(3x) is 3e^(3x), not e^(3x).
- Differentiating a product by differentiating each factor and multiplying.
- Reversing the quotient-rule numerator, giving the wrong sign.
- Writing 1/(5x) for the derivative of ln(5x).
- Forgetting that x is in radians when substituting values.
- Taking dx/dy, then forgetting to flip it.

Test yourself with the [practice questions](/resources/oxfordaqa-a-level-mathematics-differentiating-exponentials-logarithms-trigonometric-practice/) and see how you do on the [diagnostics](/diagnostics/).

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, published by OxfordAQA: section 3.3, International A-level Unit P2 (Pure Maths), content P2.6 Differentiation (differentiation of e^x, ln x, sin x, cos x and tan x, and the product, quotient and chain rules, and dy/dx = 1/(dx/dy)).
