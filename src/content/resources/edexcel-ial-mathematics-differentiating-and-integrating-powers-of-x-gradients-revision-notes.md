---
title: "Pearson Edexcel International Advanced Level Mathematics: Differentiating and integrating powers of x: gradients, tangents, normals and indefinite integrals (YMA01) -- Revision Notes"
seoTitle: "Edexcel IAL Maths P1 Calculus Basics Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Differentiating and integrating powers of x: gradients, tangents, normals and indefinite integrals"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 140
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p1-pure-mathematics-1-edexcel-alevel-maths"
    subtopic: "p1-differentiation-edexcel-alevel-maths"
  - qualification: "a-level"
    topic: "unit-p1-pure-mathematics-1-edexcel-alevel-maths"
    subtopic: "p1-integration-edexcel-alevel-maths"
description: "Condensed revision notes for Edexcel International Advanced Level Maths P1 differentiation and integration of powers of x, with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense Unit P1: Pure Mathematics 1, sections 4.1 to 4.3 and 5.1 to 5.2 of the Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics specification (Issue 3, April 2019). P1 is a compulsory unit for IAS and IAL Mathematics and Pure Mathematics, as the specification states. For full explanations and longer worked examples, read the [study guide](/resources/edexcel-ial-mathematics-differentiating-and-integrating-powers-of-x-gradients/).

Test yourself with the [practice questions](/resources/edexcel-ial-mathematics-differentiating-and-integrating-powers-of-x-gradients-practice/). The course sits on the [Edexcel A Level Mathematics hub](/boards/edexcel/a-level/mathematics/), the [checklist](/checklists/edexcel/a-level/mathematics/) lets you track progress, and the [free 10-minute diagnostics](/diagnostics/) find weak spots. Broader recall is in the [Pure 1 revision notes](/resources/edexcel-a-level-mathematics-pure1-revision-notes/).

## Key definitions (4.1, 5.1)

| Term | Meaning |
|---|---|
| Derivative f′(x) or dy/dx | Gradient of the tangent at a point; how fast y changes as x changes |
| Limit definition | f′(x) = lim (h → 0) of [f(x + h) − f(x)]/h |
| Second derivative f″(x) or d²y/dx² | Derivative of the derivative; rate of change of the gradient |
| Tangent | Straight line touching the curve at a point, with the curve's gradient there |
| Normal | Line through the same point, perpendicular to the tangent |
| Indefinite integral | Reverse of differentiation, always with + c |

## Core rules (4.2, 5.2)

| Operation | Rule | Condition |
|---|---|---|
| Differentiate | xⁿ → nxⁿ⁻¹ | n any rational number |
| Differentiate | kxⁿ → knxⁿ⁻¹; constant → 0 | term by term for sums and differences |
| Integrate | xⁿ → xⁿ⁺¹/(n + 1) + c | n ≠ −1 |
| Integrate | kxⁿ → k xⁿ⁺¹/(n + 1) + c | constants come outside |

No chain rule, product rule or quotient rule is needed here. Expand products and split fractions.

## Method boxes

**Differentiating a messy expression**

1. Expand any brackets.
2. Divide each numerator term by the denominator, subtracting powers.
3. Rewrite every term as axⁿ (roots and reciprocals as powers).
4. Differentiate term by term.
5. Tidy the answer, and substitute if a value is asked for.

**Tangent and normal at x = a**

1. Find y when x = a.
2. Differentiate and find m = dy/dx at x = a.
3. Tangent: y − y₁ = m(x − a).
4. Normal: gradient −1/m, same point.
5. Rearrange into the form requested.

**Finding the curve from f′(x)**

1. Rewrite f′(x) as powers.
2. Integrate each term, adding 1 to the power and dividing by the new power.
3. Write + c.
4. Substitute the given point and solve for c.
5. State y = f(x) in full.

## Worked reminders

**First principles.** For f(x) = x³ − 2x:

```
[f(x + h) − f(x)]/h = 3x² + 3xh + h² − 2  →  3x² − 2 as h → 0
```

**Fraction.** y = (x² − 1)/x = x − x⁻¹, so dy/dx = 1 + x⁻².

**Tangent and normal.** y = x³ − 5x at x = 2:

```
y = 8 − 10 = −2;  dy/dx = 3x² − 5 = 7
Tangent: y + 2 = 7(x − 2)  →  y = 7x − 16
Normal:  y + 2 = −(1/7)(x − 2)  →  x + 7y + 12 = 0
```

**Integral.** ∫(4x³ − 6√x + 2/x²) dx:

```
= x⁴ − 6 · x^(3/2)/(3/2) + 2 · x⁻¹/(−1) + c = x⁴ − 4x^(3/2) − 2/x + c
```

**Gradient given, point wanted.** For y = x³ + 4x, find the points where the gradient is 16:

```
dy/dx = 3x² + 4 = 16  →  x² = 4  →  x = 2 or x = −2
y(2) = 8 + 8 = 16;  y(−2) = −8 − 8 = −16
Points: (2, 16) and (−2, −16)
```

**Second derivative.** For y = x⁴/2 − 3x² + x:

```
dy/dx = 2x³ − 6x + 1;  d²y/dx² = 6x² − 6;  at x = 2: 24 − 6 = 18
```

**Curve from the gradient.** If f′(x) = 12x³ − 6x^(−1/2) and the curve passes through (1, 5):

```
f(x) = 3x⁴ − 12x^(1/2) + c;  3 − 12 + c = 5  →  c = 14
f(x) = 3x⁴ − 12√x + 14
```

## Index laws to have ready

These carry most of the algebra in this unit, and the specification lists them under algebra and functions:

| Law | Example |
|---|---|
| aᵐ × aⁿ = aᵐ⁺ⁿ | x² · x^(−1/2) = x^(3/2) |
| aᵐ ÷ aⁿ = aᵐ⁻ⁿ | x³ ÷ x^(1/2) = x^(5/2) |
| a⁻ⁿ = 1/aⁿ | 3/x² = 3x⁻² |
| a^(1/n) is the nth root | 5/√x = 5x^(−1/2) |
| a^(m/n) = (ⁿ√a)ᵐ | x^(3/2) = (√x)³ |

A fraction with a single term in the denominator is split into separate powers. A sum in the denominator is not: 1/(x + 1) cannot be split, and it is outside this unit.

## Reading the wording

| The question says | You do |
|---|---|
| Find the gradient of the curve at the point where x = a | Differentiate, substitute x = a |
| Find the rate of change of y with respect to x | Differentiate y with respect to x |
| Show that the tangent has equation … | Show y, dy/dx, and the point-gradient line, with every step |
| The tangent is parallel to the line y = mx + k | Set dy/dx = m |
| The normal is parallel to … | Set −1/(dy/dx) equal to the gradient of the given line |
| Find f(x) | Integrate f′(x) and use the point to find c |
| Find the general solution or the family of curves | Integrate and keep + c |

## Must-know distinctions

- **dy/dx versus d²y/dx².** The first is the gradient. The second is how fast the gradient changes. They are not powers of one another.
- **Tangent versus normal.** Same point, gradients m and −1/m. Use the correct one for the line asked for.
- **Differentiating versus integrating a power.** Differentiating multiplies by n and lowers the power. Integrating raises the power and divides by the new one.
- **Indefinite integral versus a specific curve.** The family of curves has + c. A point on the curve fixes one value of c.
- **Finding the gradient versus finding the point.** Gradient needs dy/dx. The y-coordinate comes from the original equation.

## Checking your work

- **Differentiate your integral.** If the result is not the original integrand, find the slip before moving on.
- **Substitute the point back.** After finding c, put the given point into your final equation and confirm it holds.
- **Check the sign of the gradient.** If a curve is rising at the point, a tangent gradient of −4 cannot be right.
- **Check perpendicularity.** The product of the tangent and normal gradients must be −1.
- **Check the domain.** Terms such as √x and 1/x restrict x, so a solution outside the domain must be rejected.
- **Keep fractions exact** unless the question asks for a decimal.

## Quick self-test

1. Differentiate x⁵ − 3x² + 7.
2. Differentiate 4/x³.
3. Differentiate 9x^(2/3).
4. Find dy/dx for y = (x + 3)(2x − 1).
5. Find dy/dx for y = (x² − 1)/x.
6. If f(x) = x³ − 2x², find f″(x).
7. Find the equation of the tangent to y = 2x² − x at x = 1.
8. Find the equation of the normal to the same curve at x = 1, in the form ax + by + c = 0.
9. Find ∫(6x² − 4x + 1) dx.
10. Find ∫(10x^(3/2) − x⁻²) dx.
11. A curve has gradient f′(x) = 2x + 3 and passes through (1, 6). Find f(x).
12. The depth of water is h = 4t + t²/2 cm after t minutes. State the rate of change at t = 6, with units.

### Answers

1. 5x⁴ − 6x
2. −12x⁻⁴, which is −12/x⁴
3. 6x^(−1/3)
4. 2x² + 5x − 3 gives 4x + 5
5. x − x⁻¹ gives 1 + 1/x²
6. f′(x) = 3x² − 4x, so f″(x) = 6x − 4
7. y = 1 and dy/dx = 4x − 1 = 3 at x = 1, so y − 1 = 3(x − 1), which is y = 3x − 2
8. Gradient −1/3: y − 1 = −(1/3)(x − 1), so x + 3y − 4 = 0
9. 2x³ − 2x² + x + c
10. 4x^(5/2) + x⁻¹ + c
11. f(x) = x² + 3x + c; 1 + 3 + c = 6, so c = 2 and f(x) = x² + 3x + 2
12. dh/dt = 4 + t = 10, so 10 cm per minute

## Where marks are usually lost

- Not expanding brackets before differentiating, or integrating a product term by term.
- Differentiating 1/x² as if it were x², with the power sign lost.
- Dividing by the old power instead of the new one when integrating.
- Missing + c, or losing it when substituting a point.
- Arithmetic slips with fractional powers, especially x^(3/2) divided by 3/2.
- Leaving a tangent or normal in a different form from the one requested.
- Using the tangent's gradient for the normal, or forgetting the minus sign.
- Writing a first-principles proof with the limit applied too early, or without the limit notation at all.
- Giving a rate of change with no units. State the units, and say whether the quantity is increasing or decreasing.
- Stopping at "the gradient is 23" when the question asks for an equation.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification Issue 3, April 2019, published by Pearson Education Limited. Unit P1 sections 4.1 to 4.3 and 5.1 to 5.2.
