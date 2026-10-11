---
title: "OxfordAQA International AS and A-level Mathematics: Surds, indices, quadratics, simultaneous equations (9660) -- Revision Notes"
seoTitle: "OxfordAQA Maths Surds and Quadratics Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on surds, rational indices, quadratics, the discriminant, substitution and inequalities for OxfordAQA International AS Maths."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

Condensed recall for specification content P1.1 (Algebra) of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. The specification states this content is part of International AS Unit P1 (Pure Maths, section 3.1). The [study guide](/resources/oxfordaqa-a-level-mathematics-surds-indices-quadratics-and-simultaneous-equations/), with full explanations and worked examples, sits behind these notes. Then test yourself with the [practice questions](/resources/oxfordaqa-a-level-mathematics-surds-indices-quadratics-and-simultaneous-equations-practice/).

Course links: [OxfordAQA Mathematics hub](/boards/oxfordaqa/a-level/mathematics/), [printable checklist](/checklists/oxfordaqa/a-level/mathematics/), [free 10-minute diagnostics](/diagnostics/) and the [Pure Maths 1 revision notes](/resources/oxfordaqa-a-level-mathematics-p1-revision-notes/) for the rest of the unit.

## Key results at a glance

| Topic | Result to remember |
|---|---|
| Surd products | √(ab) = √a × √b; √a × √a = a |
| Simplifying | Pull out the largest square factor: √48 = 4√3 |
| Rationalising √a | Multiply top and bottom by √a |
| Rationalising p + √q | Multiply by p − √q; the denominator becomes p² − q |
| Index laws | add exponents to multiply, subtract to divide, multiply for a power of a power |
| Special powers | a⁰ = 1; a⁻ⁿ = 1/aⁿ; a^(1/n) is the nth root of a; a^(m/n) is that root raised to m |
| Completing the square | x² + bx + c = (x + b/2)² + (c − b²/4) |
| Vertex of a(x + p)² + q | (−p, q); line of symmetry x = −p |
| Formula gives | x = [−b ± √(b² − 4ac)] / (2a) |
| Discriminant | b² − 4ac |

## Surds: method in steps

1. Simplify each surd by pulling out the largest square factor.
2. Collect like surds (same number under the root).
3. When expanding, remember √a × √a = a, so the surd term can vanish.
4. To rationalise, choose the conjugate (change the sign between the terms).

**Reminder example.** Rationalise 6/(2 + √3).

```
6/(2 + √3) × (2 − √3)/(2 − √3) = 6(2 − √3)/(4 − 3) = 12 − 6√3
```

Check: 12 − 6√3 ≈ 1.61, and 6/(2 + 1.732) ≈ 1.61.

**Reminder example.** Express (√3 − 1)² in the form a + b√3.

```
3 − 2√3 + 1 = 4 − 2√3
```

## Indices: method in steps

1. Rewrite roots as powers, and put numbers over a common base if you are solving.
2. Deal with the negative sign first (reciprocal), then the root, then the power.
3. For a fraction in brackets, invert it when the power is negative.

| Expression | Working | Value |
|---|---|---|
| 16^(3/4) | (⁴√16)³ = 2³ | 8 |
| (1/4)^(−3/2) | 4^(3/2) = (√4)³ | 8 |
| 125^(−2/3) | 1/(∛125)² = 1/25 | 1/25 |

To solve 2^(x + 3) = 32, write 32 = 2⁵, so x + 3 = 5 and x = 2. This works because equal bases need equal exponents.

## Quadratics: which method?

| Situation | Best choice |
|---|---|
| Integer roots, small coefficients | Factorise |
| a ≠ 1, factors not obvious | Split the middle term with a pair of numbers whose product is ac and sum is b |
| Exact answer wanted, or vertex needed | Complete the square |
| Messy coefficients | Formula |
| Question says "leave in surd form" | Formula or completing the square |

**Completing the square in steps** (for ax² + bx + c):

1. Take out a from the x² and x terms: a(x² + (b/a)x) + c.
2. Inside the bracket, halve the x coefficient and subtract the square of that half.
3. Write a[(x + b/2a)² − (b/2a)²] + c and tidy up.

**Reminder example.** x² + 14x + 10 = (x + 7)² − 39. The vertex is (−7, −39), the line of symmetry is x = −7, and the minimum value of y is −39.

If a < 0 the parabola opens downward and the vertex is a maximum.

## Discriminant: must-know table

| b² − 4ac | Number of real roots | Graph and the x-axis |
|---|---|---|
| > 0 | two distinct | meets the axis at two points |
| = 0 | one repeated (equal) | vertex lies on the axis |
| < 0 | none | curve misses the axis |

**Reminder example.** For x² − 4x + k = 0, b² − 4ac = 16 − 4k. Equal roots: k = 4. Distinct real roots: k < 4. No real roots: k > 4.

When a question says "show that the equation has real roots for all k", write the discriminant as a perfect square or a sum of a square and a positive number.

## Simultaneous equations (linear and quadratic)

1. Rearrange the linear equation to isolate x or y.
2. Put that into the quadratic and collect terms into a single quadratic.
3. Solve it (usually two values).
4. Return to the linear equation to get the partner of each value.
5. Write the answers as pairs.

**Reminder example.** y = x + 2 and y = x². Then x² = x + 2, so x² − x − 2 = 0, giving (x − 2)(x + 1) = 0. The solutions are (2, 4) and (−1, 1).

Geometrically, the solutions are where the line meets the curve. One solution means a tangent; none means no intersection.

## Inequalities: must-know distinctions

| Type | Rule |
|---|---|
| Linear | Rearrange as usual, but turn the sign round when multiplying or dividing by a negative |
| Quadratic, a > 0, "> 0" | Outside the roots: x < α or x > β |
| Quadratic, a > 0, "< 0" | Between the roots: α < x < β |
| x² < k (k > 0) | −√k < x < √k |
| x² > k (k > 0) | x < −√k or x > √k |

For a quadratic inequality, always rearrange to have 0 on one side, find the critical values, then picture or sketch the parabola. Never divide both sides by an expression that contains x without considering its sign.

## Reading a parabola from its equation

| Feature | How to find it |
|---|---|
| Direction | Sign of a: upward if a > 0, downward if a < 0 |
| y-intercept | Put x = 0, giving the constant term c |
| x-intercepts | Solve the equation; the discriminant tells you how many |
| Line of symmetry | x = −b/2a, or x = −p from the completed square |
| Vertex | Substitute the line of symmetry into the equation, or read (−p, q) |

Example: y = −x² + 6x − 5 = −(x − 3)² + 4. The parabola opens downward, the vertex (3, 4) is a maximum, the line of symmetry is x = 3, the y-intercept is −5, and the roots are x = 1 and x = 5.

## Index traps

- (2x)³ = 8x³, not 2x³. The power applies to the number and the letter.
- 3x⁻² means 3 × (1/x²), so it equals 3/x², not 1/(3x²).
- √x = x^(1/2) and 1/√x = x^(−1/2). Convert before you multiply or divide.
- a^(m/n) can be worked as the nth root of a, raised to m, or the nth root of aᵐ. The first keeps numbers small.
- 2⁻³ = 1/8. A negative power never makes the value negative.

## Two combined reminders

**Solve by completing the square, exact answer.** Solve 2x² − 4x − 3 = 0.

```
2(x² − 2x) − 3 = 0
2[(x − 1)² − 1] − 3 = 0
2(x − 1)² − 5 = 0
(x − 1)² = 5/2
x = 1 ± √(5/2) = 1 ± √10/2
```

The step √(5/2) = √10/2 is a rationalisation. A tidy final surd is easier to check against a decimal.

**Tangent condition.** Find k so that the line y = x + k touches the curve y = x² − 5x + 11.

```
x + k = x² − 5x + 11
x² − 6x + (11 − k) = 0
b² − 4ac = 36 − 4(11 − k) = 4k − 8
Touching means exactly one solution: 4k − 8 = 0, so k = 2
With k = 2 the equation is (x − 3)² = 0, so x = 3 and y = 5
```

The line meets the curve at one point only, (3, 5). A value of k above 2 gives two intersections; below 2 gives none.

## Speed checks for the exam

- After rationalising, estimate both forms as decimals. They must agree.
- After factorising, expand mentally to confirm the middle term.
- After solving a quadratic inequality, test one value from each region in the original inequality.
- After solving simultaneous equations, put both pairs into the equation you did not use for substitution.
- For the discriminant, write a, b and c in a list before you substitute, especially when b or c is negative.

## Quick self-test

1. Simplify √75 − √12.
2. Rationalise 1/(√5 − √3).
3. Simplify (√3 − 1)² in the form a + b√3.
4. Evaluate 16^(3/4).
5. Evaluate (1/4)^(−3/2).
6. Solve 2^(x + 3) = 32.
7. Express x² + 14x + 10 as (x + p)² + q and give the vertex.
8. Find the values of k for which x² − 4x + k = 0 has no real roots.
9. Solve x² − 5x + 6 ≤ 0.
10. Solve y = x + 2 and y = x² simultaneously.
11. Solve x² + x − 12 > 0.
12. Solve −2x > 6.

### Answers

1. 5√3 − 2√3 = **3√3**
2. (√5 + √3)/(5 − 3) = **(√5 + √3)/2**
3. **4 − 2√3**
4. **8**
5. **8**
6. **x = 2**
7. **(x + 7)² − 39**, vertex **(−7, −39)**
8. 16 − 4k < 0, so **k > 4**
9. (x − 2)(x − 3) ≤ 0, so **2 ≤ x ≤ 3**
10. **(2, 4) and (−1, 1)**
11. The product (x + 4)(x − 3) is positive outside its roots: **x < −4 or x > 3**
12. **x < −3**

## Where marks are usually lost

- Leaving a surd in the denominator when the question says "rationalise" or "exact form".
- Errors in the sign of the conjugate or in squaring (√6 + √2)² as 6 + 2 only.
- Applying the power before the root when numbers get large, then making an arithmetic slip.
- Treating a⁻ⁿ as negative.
- Completing the square without taking out the factor a first.
- Stating the vertex as (p, q) instead of (−p, q) from a(x + p)² + q.
- Writing a discriminant condition as an equation when the question asks for a range.
- Solving a quadratic inequality as if it were an equation and giving only the critical values.
- Giving only the x-values for simultaneous equations when the question asks for coordinates or pairs.
- Rounding too early in a multi-step question that asks for an exact value.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, published by OxfordAQA. Content P1.1 (Algebra), International AS Unit P1 (Pure Maths).
