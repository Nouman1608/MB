---
title: "OxfordAQA International AS and A-level Mathematics: Surds, indices, quadratics, simultaneous equations (9660)"
seoTitle: "OxfordAQA Maths Surds, Quadratics Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Surds, indices, quadratics and simultaneous equations"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 173
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p1-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "p1-algebra-oxfordaqa-alevel-maths"
description: "Study guide to surds, rational indices, quadratics, the discriminant, simultaneous equations and inequalities for OxfordAQA International AS Maths."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide teaches the first half of specification content P1.1 (Algebra) in the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. The specification places this content in International AS Unit P1 (Pure Maths, section 3.1) (no Core or Extension labels). It covers surds, indices, quadratics, simultaneous equations and inequalities. Polynomial division, the factor theorem and curve sketching are separate parts of P1.1 and are taught elsewhere.

Use it with the [revision notes](/resources/oxfordaqa-a-level-mathematics-surds-indices-quadratics-and-simultaneous-equations-revision-notes/) and the [practice questions](/resources/oxfordaqa-a-level-mathematics-surds-indices-quadratics-and-simultaneous-equations-practice/). The wider unit is in the [Pure Maths 1 study guide](/resources/a-level-oxfordaqa-mathematics-unit-p1/). Course links: [OxfordAQA Mathematics hub](/boards/oxfordaqa/a-level/mathematics/), [printable checklist](/checklists/oxfordaqa/a-level/mathematics/) and [free 10-minute diagnostics](/diagnostics/).

## What this unit covers

| P1.1 outcome | What you need to be able to do |
|---|---|
| Surds | Simplify surds, collect like surds, expand brackets with surds, rationalise a denominator |
| Indices | Use the laws of indices with any rational exponent |
| Quadratic functions and graphs | Describe the vertex and line of symmetry of a parabola |
| Discriminant | Link b² − 4ac to equal, distinct real or no real roots |
| Factorising | Factorise quadratics where the x² coefficient is not 1 |
| Completing the square | Write ax² + bx + c as a(x + p)² + q |
| Solving quadratics | Use factorising, the formula or completing the square |
| Simultaneous equations | Solve one linear and one quadratic equation by substitution |
| Inequalities | Solve linear and quadratic inequalities |

## 1. Surds

Surds are roots whose value is not a whole number or a fraction, such as √3 or √7. Two rules do most of the work: the root of a product is the product of the roots, and the root of a quotient is the quotient of the roots. To simplify, pull out the largest square factor. Like surds (same number under the root) can then be added and subtracted, exactly as like terms are.

**Worked example 1.** Simplify √72 + √50 − √18.

```
√72 = √(36 × 2) = 6√2
√50 = √(25 × 2) = 5√2
√18 = √(9 × 2)  = 3√2
Total: 6√2 + 5√2 − 3√2 = 8√2
```

Brackets with surds expand like any other brackets, and √5 × √5 = 5.

**Worked example 2.** Expand and simplify (4 + √3)(2 − √3).

```
= 8 − 4√3 + 2√3 − (√3 × √3)
= 8 − 4√3 + 2√3 − 3
= 5 − 2√3
```

### Rationalising the denominator

To remove a surd from the bottom of a fraction, multiply top and bottom by something that makes the denominator rational.

- Denominator √a: multiply by √a / √a.
- Denominator p + √q: multiply by the conjugate (p − √q). The difference of two squares gives p² − q.

**Worked example 3.** Write 5/(√7 − 2) in the form (a + b√7)/c.

```
5/(√7 − 2) × (√7 + 2)/(√7 + 2)
= 5(√7 + 2) / (7 − 4)
= (5√7 + 10)/3
```

**Worked example 4.** Simplify (√7 + √3)/(√7 − √3).

```
Multiply top and bottom by (√7 + √3).
Numerator: (√7 + √3)² = 7 + 2√21 + 3 = 10 + 2√21
Denominator: 7 − 3 = 4
Result: (10 + 2√21)/4 = (5 + √21)/2
```

## 2. Laws of indices for rational exponents

| Law | Statement |
|---|---|
| Multiply, same base | add the exponents |
| Divide, same base | subtract the exponents |
| Power of a power | multiply the exponents |
| Zero exponent | a⁰ = 1 |
| Negative exponent | a⁻ⁿ = 1/aⁿ |
| Unit fraction exponent | a^(1/n) is the nth root of a |
| General rational exponent | a^(m/n) = (nth root of a) raised to the power m |

With a fractional power, do the root before the power, because that keeps the numbers small. A negative exponent means "take the reciprocal"; it does not make the value negative.

**Worked example 5.** Evaluate 64^(2/3) and (27/8)^(−2/3).

```
64^(2/3) = (∛64)² = 4² = 16
(27/8)^(−2/3) = (8/27)^(2/3) = (∛(8/27))² = (2/3)² = 4/9
```

**Worked example 6.** Simplify (8x⁶)^(1/3) ÷ x^(−1/2).

```
(8x⁶)^(1/3) = 2x²
2x² ÷ x^(−1/2) = 2x^(2 + 1/2) = 2x^(5/2)
```

**Worked example 7.** Solve 9ˣ = 27^(x − 1).

Write both sides with base 3: 9 = 3² and 27 = 3³.

```
3^(2x) = 3^(3(x − 1))
2x = 3x − 3
x = 3
```

## 3. Quadratics: factorising

When the x² coefficient is not 1, look for a pair of numbers whose product is a × c and whose sum is b. Rewrite the middle term as the sum of those two numbers of x, then take a common factor from each half.

**Worked example 8.** Factorise 10x² − 9x − 9, then solve 7x² + 10x − 8 = 0.

```
ac = 10 × (−9) = −90. Need product −90, sum −9: the numbers are −15 and 6.
10x² − 15x + 6x − 9 = 5x(2x − 3) + 3(2x − 3) = (2x − 3)(5x + 3)

7x² + 10x − 8: ac = −56, sum 10, numbers 14 and −4.
7x² + 14x − 4x − 8 = 7x(x + 2) − 4(x + 2) = (7x − 4)(x + 2)
Roots: x = 4/7 and x = −2
```

Always check by expanding. A quadratic must equal zero before you factorise to solve it.

## 4. Completing the square, vertex and line of symmetry

When a = 1, halve the coefficient of x: x² + bx + c = (x + b/2)² − b²/4 + c. When a ≠ 1, take a out of the x² and x terms first.

**Worked example 9.** Write x² − 10x + 7 and 4x² + 8x − 3 in completed-square form.

```
x² − 10x + 7 = (x − 5)² − 25 + 7 = (x − 5)² − 18

4x² + 8x − 3 = 4(x² + 2x) − 3
             = 4[(x + 1)² − 1] − 3
             = 4(x + 1)² − 4 − 3
             = 4(x + 1)² − 7
```

The graph of y = a(x + p)² + q is a parabola with vertex (−p, q) and line of symmetry x = −p. For y = 4x² + 8x − 3:

- vertex (−1, −7), the minimum point because a > 0 (a < 0 would give a maximum);
- line of symmetry x = −1;
- y-intercept (0, −3), found by setting x = 0.

| Feature of y = 4x² + 8x − 3 | Value |
|---|---|
| Shape | opens upward (a > 0), U-shaped |
| Vertex | (−1, −7) |
| Roots | x ≈ 0.323 and x ≈ −2.32 |
| y-intercept | (0, −3) |


## 5. The quadratic formula and the discriminant

For ax² + bx + c = 0:

```
x = (−b ± √(b² − 4ac)) / 2a
```

**Worked example 10.** Solve 4x² + 8x − 3 = 0, leaving surds in your answer.

```
b² − 4ac = 64 − 4(4)(−3) = 64 + 48 = 112
x = (−8 ± √112)/8 and √112 = 4√7
x = (−8 ± 4√7)/8 = (−2 ± √7)/2
```

The two roots sit symmetrically either side of the line x = −1, as they must. Numerically, x ≈ 0.323 or x ≈ −2.32.

The discriminant is b² − 4ac, the part under the root.

| Value of b² − 4ac | What it means | Picture |
|---|---|---|
| b² − 4ac > 0 | two distinct real roots | meets the x-axis at two points |
| b² − 4ac = 0 | equal (repeated) roots | just touches the x-axis |
| b² − 4ac < 0 | no real roots | lies wholly above or wholly below the axis |

**Worked example 11.** Find the values of k for which x² + 2kx + (3k + 10) = 0 has (a) equal roots, (b) two distinct real roots, (c) no real roots.

```
b² − 4ac = (2k)² − 4(1)(3k + 10) = 4k² − 12k − 40 = 4(k − 5)(k + 2)
(a) Equal roots: 4(k − 5)(k + 2) = 0, so k = 5 or k = −2
(b) Distinct real roots: (k − 5)(k + 2) > 0, so k < −2 or k > 5
(c) No real roots: (k − 5)(k + 2) < 0, so −2 < k < 5
```

## 6. Simultaneous equations by substitution

When one equation is linear, rearrange it so that one variable stands alone, substitute that into the quadratic, solve, then return to the linear equation for the other variable. Do not use the quadratic for the second variable: it can create false pairs.

**Worked example 12.** Solve x − 2y = 1 and x² − 2xy + 2y² = 5.

```
x = 2y + 1
(2y + 1)² − 2(2y + 1)y + 2y² = 5
4y² + 4y + 1 − 4y² − 2y + 2y² = 5
2y² + 2y − 4 = 0
y² + y − 2 = 0
(y + 2)(y − 1) = 0, so y = −2 or y = 1
x = 2y + 1 gives x = −3 and x = 3
```

Solutions: (x, y) = (−3, −2) and (3, 1). Check each pair in the original quadratic.

The same discriminant ideas apply: after substitution, one repeated root means the line touches the curve, and a negative discriminant means they never meet.

## 7. Inequalities

**Linear.** Rearrange as you would an equation, but turn the inequality sign round whenever you multiply or divide by a negative number.

**Worked example 13.** Solve 5 − 2x < 11 + x.

```
5 − 11 < x + 2x
−6 < 3x
x > −2
```

**Quadratic.** Move everything to one side so the other side is 0, find the roots, picture the parabola, and read off where the curve is above or below the axis.

**Worked example 14.** Solve 7x² + 10x − 8 ≥ 0 and x² − 6x + 4 < 0.

```
7x² + 10x − 8 = (7x − 4)(x + 2), roots x = −2 and x = 4/7.
The parabola opens upward, so it is above or on the axis outside the roots.
Solution: x ≤ −2 or x ≥ 4/7

x² − 6x + 4 does not factorise. Complete the square:
(x − 3)² − 5 < 0, so (x − 3)² < 5
Roots of the equation: x = 3 ± √5.
This parabola also opens upward, so the curve lies under the axis only between its roots.
Solution: 3 − √5 < x < 3 + √5
```

Write "or" for two separate regions and a single chain for one region.

## Common errors

- Writing √(a + b) = √a + √b. It is not.
- Rationalising 1/(p + √q) with the wrong sign, so the surd stays.
- Treating a⁻ⁿ as a negative number instead of a reciprocal.
- Splitting the middle term with numbers that give the right sum but the wrong product.
- Forgetting to take the factor a out of the x term before completing the square.
- Substituting back into the quadratic and getting extra false solutions.
- Writing x² < 9 as x < ±3. The answer is −3 < x < 3.
- Cancelling a common factor of x from both sides of an equation and losing the root x = 0.

## Next steps

Work through the [practice questions](/resources/oxfordaqa-a-level-mathematics-surds-indices-quadratics-and-simultaneous-equations-practice/), then use the [revision notes](/resources/oxfordaqa-a-level-mathematics-surds-indices-quadratics-and-simultaneous-equations-revision-notes/) for quick recall. For the rest of the unit, see the [Pure Maths 1 revision notes](/resources/oxfordaqa-a-level-mathematics-p1-revision-notes/) and [practice questions](/resources/oxfordaqa-a-level-mathematics-p1-practice/). To find gaps, take a [free 10-minute diagnostic](/diagnostics/).

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, published by OxfordAQA. Content P1.1 (Algebra), International AS Unit P1 (Pure Maths).
