---
title: "OxfordAQA International AS and A-level Mathematics: Product, quotient and chain rules; e^x, ln x, trig (9660) -- Revision Notes"
seoTitle: "OxfordAQA Maths P2 Differentiating e^x, ln x, Trig Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes for OxfordAQA 9660 P2.6: standard derivatives, product, quotient and chain rules, dy/dx = 1/(dx/dy) and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense the first part of specification section P2.6 (Differentiation) of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. The specification states that this content is part of International A-level (A2) Unit P2 (Pure Maths) and is not examined at International AS. For full explanations and fully worked examples, read the [study guide](/resources/oxfordaqa-a-level-mathematics-differentiating-exponentials-logarithms-trigonometric/). When you are ready to test yourself, use the [practice questions](/resources/oxfordaqa-a-level-mathematics-differentiating-exponentials-logarithms-trigonometric-practice/). Related pages are the [P1 differentiation notes](/resources/oxfordaqa-a-level-mathematics-differentiation-gradients-tangents-normals-and-revision-notes/), the [course hub](/boards/oxfordaqa/a-level/mathematics/) and the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/). To find your weak spots, try the [free diagnostics](/diagnostics/).

## Standard results (x in radians)

| y | dy/dx |
|---|---|
| e^x | e^x |
| ln x | 1/x |
| sin x | cos x |
| cos x | −sin x |
| tan x | sec²x = 1/cos²x |
| e^(kx) | k e^(kx) |
| sin(kx) | k cos(kx) |
| cos(kx) | −k sin(kx) |
| tan(kx) | k sec²(kx) |
| ln(ax + b) | a/(ax + b) |

Sums, differences and constant multiples are differentiated term by term. The derivative of ln(kx) is 1/x, because ln(kx) = ln k + ln x.

## The three rules

| Rule | Statement | Use when |
|---|---|---|
| Chain | dy/dx = dy/du × du/dx | One function inside another |
| Product | If y = uv then dy/dx = u v′ + v u′ | Two x-functions multiplied |
| Quotient | If y = u/v then dy/dx = (v u′ − u v′)/v² | Two x-functions divided |
| Inverse | dy/dx = 1/(dx/dy) | x given as a function of y |

### Method in steps: product or quotient rule

1. Name u and v.
2. Write down u′ and v′ (use the chain rule here if needed).
3. Substitute into the rule, with the quotient numerator in the order v u′ − u v′.
4. Take out common factors. Check whether the result simplifies.

### Method in steps: chain rule

1. Identify the inner function u (the bracket, the power, the angle, the exponent).
2. Differentiate the outer function with respect to u.
3. Multiply the two derivatives together, using du/dx.
4. Write the result in terms of x only.

### Method in steps: inverse rule

1. Differentiate x with respect to y.
2. Substitute the given y-value (or keep the expression).
3. Flip the fraction.

## Small worked reminders

Product with a trig function: y = x² cos x.

```
dy/dx = x²(−sin x) + cos x (2x) = 2x cos x − x² sin x
```

Quotient: y = (5 − x)/(2x + 3).

```
dy/dx = (−1(2x + 3) − (5 − x)(2))/(2x + 3)² = −13/(2x + 3)²
```

Chain: y = e^(x²) gives dy/dx = 2x e^(x²). Also y = tan(4x − 1) gives dy/dx = 4 sec²(4x − 1).

Product with a linear exponent: y = x e^(4x).

```
dy/dx = x(4e^(4x)) + e^(4x)(1) = e^(4x)(4x + 1)
```

Inverse: x = y² + 7y at the point where y = 2 (so x = 18).

```
dx/dy = 2y + 7 = 11, so dy/dx = 1/11
```

## Must-know distinctions

- d/dx of e^(3x) is 3e^(3x), while d/dx of e^(x³) is 3x² e^(x³). The inner function decides the factor.
- sin²x means (sin x)². Its derivative uses the chain rule: 2 sin x cos x.
- The derivative of a product is not the product of the derivatives.
- The derivative of a quotient is not the quotient of the derivatives.
- dy/dx = 1/(dx/dy) gives the reciprocal of the gradient value. It does not say dy/dx = −1/(dx/dy).
- ln(x²) and (ln x)² differ: d/dx ln(x²) = 2x/x² = 2/x, but d/dx (ln x)² = 2 ln x / x.
- If a question asks for a value, put x in radians for trigonometric functions.

## Linear combinations and constants

Differentiate each term separately, and write each constant factor outside before you differentiate. Take y = 4e^(x/3) − 6 cos 2x + 9 ln x − tan 5x.

```
dy/dx = 4(1/3)e^(x/3) − 6(−2 sin 2x) + 9(1/x) − 5 sec²(5x)
      = (4/3)e^(x/3) + 12 sin 2x + 9/x − 5 sec²(5x)
```

Two signs interact here: the minus in front of the cosine term and the minus in the derivative of cos. They multiply to give a plus.

## Which rule?

| Function | Rule | Result |
|---|---|---|
| sin(x²) | Chain | 2x cos(x²) |
| cos²x | Chain (power of a function) | −2 sin x cos x |
| √x e^(−x) | Product | e^(−x)(1 − 2x)/(2√x) |
| x²/(1 + e^x) | Quotient | (2x(1 + e^x) − x² e^x)/(1 + e^x)² |
| x ln(3x + 1) | Product, with chain inside | ln(3x + 1) + 3x/(3x + 1) |

The last row is a typical combined question. The gradient at x = 1 is 3/4 + ln 4. Leave it exact unless the question asks for decimals.

## How the results link together

You do not need to memorise every result separately.

- Writing tan x as a fraction, sin x over cos x, and using the quotient rule produces sec²x.
- If y = ln x then x = e^y. The inverse rule gives dy/dx = 1/e^y = 1/x.
- The derivative of e^(kx) comes from the chain rule with u = kx.
- The derivative of ln(ax + b) is the chain rule with u = ax + b and dy/du = 1/u.

If you forget a result in an exam, derive it from a rule you do remember and check it with a quick test value.

## Checking your answer

1. Substitute a simple value such as x = 0 or x = 1 into your derivative. Does the sign of the gradient agree with what you expect from the original function?
2. Check the form. A product-rule answer has two terms, and a quotient-rule answer has a squared denominator.
3. Check that the power of e or the angle is unchanged in the answer, since only the factor outside changes.
4. If the question asks you to show a given result, work towards it and finish on the printed form.

## Using the derivative

Two short patterns use these derivatives again and again.

**Gradient equal to zero.** Find the x-coordinate where y = e^(2x) − 8e^x has zero gradient.

```
dy/dx = 2e^(2x) − 8e^x = 2e^x(e^x − 4)
e^x is never zero, so e^x = 4 and x = ln 4
y = 16 − 32 = −16
```

**Rate of change in context.** The mass of a sample is M = 500e^(−0.02t) grams after t days.

```
dM/dt = 500(−0.02)e^(−0.02t) = −10e^(−0.02t)
At t = 30: dM/dt = −10e^(−0.6) = −5.49 g per day (3 s.f.)
```

The negative sign shows that the mass is decreasing. Include the unit in your answer.

## Quick self-test

Differentiate each of these with respect to x, unless told otherwise.

1. y = 5e^(−x)
2. y = cos 5x
3. y = ln(4x − 1)
4. y = tan 3x
5. y = x² sin x
6. y = e^x/x
7. y = sin(e^x)
8. A curve has equation x = 3y² − 2y + 4. Find dy/dx where y = 1.
9. Find the gradient of y = (x + 1)/(x − 2) at x = 3.
10. y = ln(sin x)
11. Find the value of the gradient of y = e^(2x) ln x at x = 1.
12. y = x e^x − e^x. Simplify your answer.

### Answers

1. −5e^(−x)
2. −5 sin 5x
3. 4/(4x − 1)
4. 3 sec²(3x)
5. 2x sin x + x² cos x
6. e^x(x − 1)/x²
7. e^x cos(e^x)
8. dx/dy = 6y − 2 = 4 at y = 1, so dy/dx = **1/4** (the point is (5, 1))
9. dy/dx = −3/(x − 2)², which is **−3** at x = 3
10. cos x / sin x
11. 2e² ln 1 + e² × 1 = **e²**
12. x e^x

## Where marks are usually lost

- Missing a minus sign on cos x, or on the second term of a quotient numerator.
- Omitting the factor from the inner function in e^(3x), sin(2x) or (4x − 1)⁵.
- Writing the product-rule answer as u′v′.
- Leaving the answer unsimplified when a factor such as e^(−2x) can be taken out, then failing to spot the zero.
- Not showing u, v, u′ and v′, so one slip hides the method.
- Substituting degrees instead of radians into a trigonometric derivative.
- Forgetting to flip dx/dy at the end of an inverse-rule question.
- Treating e^x − 4 = 0 as if e^x could be zero, or cancelling a common factor that may be zero, instead of factorising and reading off the solutions.
- Losing a bracket when a minus sign sits in front of a product, so that only the first term changes sign.
- Using the product rule when only a constant multiplies the function, which wastes time and invites slips.
- Giving a rounded decimal when the question implies an exact answer such as 3√3/4 or e².

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, published by OxfordAQA: section 3.3, International A-level Unit P2 (Pure Maths), content P2.6 Differentiation (differentiation of e^x, ln x, sin x, cos x and tan x, and the product, quotient and chain rules, and dy/dx = 1/(dx/dy)).
