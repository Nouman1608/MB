---
title: "IB DP Mathematics: Analysis and Approaches (AA): 5.3 Derivative of f(x) = axⁿ"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Calculus"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5.03
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-3"
description: "Study guide to IB DP Maths AA section 5.3: differentiating axⁿ for integer n, rewriting before differentiating, finding unknown coefficients and gradients."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 5.3 of IB DP Mathematics: Analysis and Approaches (first assessment 2021) is the
**derivative of f(x) = axⁿ**, which is f′(x) = anxⁿ⁻¹ for n ∈ ℤ, and the derivative of functions made
of several such terms, f(x) = axⁿ + bxⁿ⁻¹ + …, where all exponents are integers. It is SL content,
examined at SL and HL. Rational powers such as x^(1/2), and the derivatives of sin x, cos x, eˣ and
ln x, come later, in section 5.6.

The [differentiation study guide](/resources/ib-dp-mathematics-aa-sl-differentiation/) states the
rule with two short examples. This page goes further: why the rule works, how to prepare an
expression so the rule can be applied, and the question types that use it, from finding a point with
a given gradient to finding unknown coefficients. Afterwards, use the
[5.3 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-5-3-revision-notes/)
and the
[5.3 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-5-3-practice/).

## The rule

```
f(x) = axⁿ   →   f'(x) = anxⁿ⁻¹,   n ∈ ℤ
```

Multiply by the power, then reduce the power by one. Three consequences:

- **Constants.** A constant c is cx⁰, so its derivative is 0 × cx⁻¹ = 0. A horizontal line has
  gradient zero.
- **Linear terms.** ax = ax¹ differentiates to a, the gradient of the line y = ax.
- **Sums and multiples.** Differentiate term by term, and a constant multiple stays in front:
  the derivative of 3x⁴ − 5x² + 2 is 12x³ − 10x.

### Why the pattern holds

Section 5.1 showed that the gradient of y = x² is 2x and that of y = x³ is 3x². The chord tables
suggest the general pattern nxⁿ⁻¹. For negative powers, a chord table for y = x⁻¹ at x = 2 gives
gradients approaching −0.25, and the rule gives (−1)(2)⁻² = −1/4. Proving the rule from first
principles is HL content (section 5.12); at SL you apply it.

## Preparing an expression: rewrite first

The rule applies only to terms of the form axⁿ. Many expressions must be rewritten first.

| Given | Rewrite as | Derivative |
|---|---|---|
| 5/x³ | 5x⁻³ | −15x⁻⁴ = −15/x⁴ |
| 1/(2x²) | (1/2)x⁻² | −x⁻³ = −1/x³ |
| (2x − 1)(x² + 3) | 2x³ − x² + 6x − 3 | 6x² − 2x + 6 |
| (x³ − 4x)/(2x²) | x/2 − 2x⁻¹ | 1/2 + 2x⁻² |
| (x + 1)²/x | x + 2 + x⁻¹ | 1 − x⁻² |

Two warnings from this table. First, 1/(2x²) is (1/2)x⁻², not 2x⁻²: the 2 stays in the denominator.
Second, a product or quotient must be expanded or divided out first; you cannot differentiate each
factor separately and multiply. (The product and quotient rules in 5.6 handle cases that cannot be
expanded.)

### Worked example 1

Differentiate y = 3x⁴ − 2/x³ + 7/x + 5.

```
y = 3x⁴ − 2x⁻³ + 7x⁻¹ + 5
dy/dx = 12x³ − 2(−3)x⁻⁴ + 7(−1)x⁻² + 0
      = 12x³ + 6x⁻⁴ − 7x⁻²
      = 12x³ + 6/x⁴ − 7/x²
```

Take care with the double negative: −2 × −3 = +6.

## Using the derivative

### Worked example 2: points with a given gradient

Find the points on y = x³ − 3x² + 4 where the gradient is 9.

```
dy/dx = 3x² − 6x
3x² − 6x = 9
x² − 2x − 3 = 0
(x − 3)(x + 1) = 0,  so x = 3 or x = −1
y(3)  = 27 − 27 + 4 = 4
y(−1) = −1 − 3 + 4 = 0
Points: (3, 4) and (−1, 0)
```

Always finish by finding the y-coordinates when the question asks for points.

### Worked example 3: unknown coefficients

The curve y = ax² + b/x has gradient 2 at x = 1 and gradient 11 at x = 2. Find a and b.

```
y = ax² + bx⁻¹,  dy/dx = 2ax − bx⁻²
x = 1:  2a − b = 2
x = 2:  4a − b/4 = 11,  so 16a − b = 44
Subtract:  14a = 42,  a = 3,  b = 4
```

Check: at x = 2, dy/dx = 12 − 4/4 = 11. Correct.

### Worked example 4: rate of change in context

The cost per item, C dollars, of producing an order of x items is modelled by C = 5x + 2000/x.
(Model invented.) Find dC/dx when x = 10 and x = 20 and interpret both.

```
C = 5x + 2000x⁻¹
dC/dx = 5 − 2000x⁻²
x = 10:  5 − 2000/100 = −15
x = 20:  5 − 2000/400 = 0
```

For an order of 10, the cost per item is falling by about 15 dollars for each extra item in the
order. At 20 items the rate of change is zero, so increasing the order size no longer reduces the
cost per item at that instant; beyond 20 it starts to rise. (Section 5.8 would confirm this is a
minimum.)

### Worked example 5: evaluating a gradient

f(x) = (x² − 6)/x. Find f′(−2).

```
f(x) = x − 6x⁻¹
f'(x) = 1 + 6x⁻² = 1 + 6/x²
f'(−2) = 1 + 6/4 = 5/2
```

A negative x does not change the sign of x⁻², because (−2)² = 4.

### Worked example 6: the gradient as a check on a sketch

The curve y = x⁴ − 4x passes through (0, 0) and (1, −3). Without plotting, decide whether it is
rising or falling at each point.

```
dy/dx = 4x³ − 4
x = 0: dy/dx = −4, so the curve is falling through the origin
x = 1: dy/dx = 0, so the tangent at (1, −3) is horizontal
```

A quick gradient check like this is how you test a sketch, or a GDC graph, against the algebra.

## Common mistakes

- Differentiating 5/x³ as 5/(3x²), treating the denominator as if it were the numerator.
- Writing 1/(2x²) as 2x⁻².
- Differentiating a product factor by factor: the derivative of (2x − 1)(x² + 3) is **not** 2 × 2x.
- Reducing a negative power the wrong way: x⁻³ becomes x⁻⁴, not x⁻².
- Leaving a constant term in the derivative.
- Mixing up f(a) and f′(a) when asked for a gradient or a point.

## Exam technique and command words

- **Find** f′(x) or dy/dx: show the rewritten form first; it often earns a method mark by itself.
- **Show that** a gradient takes a value: substitute into f′, not f, and show the arithmetic.
- **Hence**: use the derivative you have just found to answer the next part, such as finding a point
  with a given gradient or the equation of a tangent (section 5.4).
- Leave answers with positive indices where natural (6/x⁴ rather than 6x⁻⁴), unless told otherwise;
  either form is mathematically correct.

## Where to go next

Condense the section with the
[5.3 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-5-3-revision-notes/),
then try the
[5.3 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-5-3-practice/).
Next, use derivatives to find the equations of tangents and normals in the
[5.4 study guide](/resources/ib-dp-mathematics-analysis-and-approaches-5-4/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches
guide*, first assessment 2021. Section SL 5.3: derivative of f(x) = axⁿ is f′(x) = anxⁿ⁻¹, n ∈ ℤ;
the derivative of functions of the form f(x) = axⁿ + bxⁿ⁻¹ + … where all exponents are integers.
