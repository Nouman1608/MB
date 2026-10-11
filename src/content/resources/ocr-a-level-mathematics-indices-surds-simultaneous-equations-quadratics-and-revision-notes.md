---
title: "OCR A Level Mathematics A: Indices, surds, simultaneous equations, quadratics and inequalities (H240) -- Revision Notes"
seoTitle: "OCR A Level Maths Indices and Quadratics Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Indices, surds, simultaneous equations, quadratics and inequalities"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 104
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-ocr-alevel-maths"
    subtopic: "algebra-and-functions-ocr-alevel-maths"
description: "Condensed recall notes for OCR A Level Mathematics A H240 sections 1.02a-1.02i, with methods, a self-test and the most common lost marks."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
These revision notes follow the OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), sections 1.02a to 1.02i. All of this is Stage 1 content. For full explanations and worked examples, start with the [study guide](/resources/ocr-a-level-mathematics-indices-surds-simultaneous-equations-quadratics-and/). Afterwards, test yourself with the [practice questions](/resources/ocr-a-level-mathematics-indices-surds-simultaneous-equations-quadratics-and-practice/).

Links: [course hub](/boards/ocr/a-level/mathematics/), [printable checklist](/checklists/ocr/a-level/mathematics/), [Pure Mathematics revision notes](/resources/ocr-a-level-mathematics-pure-revision-notes/), [free diagnostics](/diagnostics/).

## 1.02a Indices

| Rule | Example |
|---|---|
| xᵃ × xᵇ = xᵃ⁺ᵇ | x⁵ × x⁻² = x³ |
| xᵃ ÷ xᵇ = xᵃ⁻ᵇ | x³ ÷ x⁷ = x⁻⁴ |
| (xᵃ)ᵇ = xᵃᵇ | (x⁶)^(1/3) = x² |
| x⁻ᵃ = 1/xᵃ | 4⁻² = 1/16 |
| x^(m/n) = ⁿ√(xᵐ) = (ⁿ√x)ᵐ | 32^(3/5) = 2³ = 8 |
| x⁰ = 1 | (−7)⁰ = 1 |

Method for x^(m/n): take the root, then the power, then flip the fraction if the index is negative.

```
16^(−3/4):  ⁴√16 = 2, cube it: 8, flip: 1/8
(9/4)^(3/2): √(9/4) = 3/2, cube it: 27/8
32^(−2/5) = 1/(⁵√32)² = 1/4
```

Bases must match before you add or subtract indices. Write roots as powers (√x = x^(1/2)) before multiplying.

## 1.02b Surds

| Skill | Key move | Reminder |
|---|---|---|
| Simplify | Pull out the largest square factor | √75 = √25 × √3 = 5√3 |
| Add and subtract | Simplify first, then collect | 3√8 + √18 = 6√2 + 3√2 = 9√2 |
| Expand | Treat as brackets | (1 + √3)² = 4 + 2√3 |
| Rationalise, one surd | Multiply by the same surd | 8/√12 = 4√3/3 |
| Rationalise, a ± b√c | Multiply by the conjugate | 6/(√7 − 1) = 6(√7 + 1)/6 = 1 + √7 |

Conjugate pairs give a rational product: (a + b√c)(a − b√c) = a² − b²c. A surd is irrational, so a + b√c = d + e√c only if a = d and b = e.

## 1.02c Simultaneous equations

1. Rearrange the linear equation to y = … or x = ….
2. Substitute into the quadratic and expand carefully.
3. Rearrange to the form ax² + bx + c = 0 and solve.
4. Substitute each root back into the linear equation.
5. Write answers as coordinate pairs.

Reminder: y = x + 1 and y = x² − 5 give x² − x − 6 = 0, so (−2, −1) and (3, 4). For 2x + y = 5 and xy = 2: y = 5 − 2x gives 2x² − 5x + 2 = 0, so (1/2, 4) and (2, 1).

Graphically, the solutions are the intersection points. The number of solutions comes from the discriminant of the combined quadratic.

## 1.02d–e Quadratic functions, the discriminant and completing the square

| Discriminant b² − 4ac | Roots | Graph |
|---|---|---|
| positive | two real, distinct | crosses the x-axis twice |
| zero | one repeated | touches the x-axis |
| negative | not real | stays above or below the axis |

Completing the square:

```
x² + 8x + 3  = (x + 4)² − 13
2x² + 8x + 1 = 2(x + 2)² − 7
```

In a(x + p)² + q, the vertex is (−p, q) and the line of symmetry is x = −p. The graph is ∪-shaped if a > 0, so q is the minimum value. It is ∩-shaped if a < 0, so q is the maximum.

Sketching reminder: mark the vertex, the y-intercept (0, c), and the x-intercepts if they exist.

Tangent conditions: set the line equal to the curve, then set the discriminant to zero.

## 1.02f Solving quadratics

| Method | Use it when |
|---|---|
| Factorising | The discriminant is a perfect square |
| Formula | Roots are surds or the quadratic is awkward |
| Completing the square | You need the vertex as well, or you are asked to |

Quadratics in a function of the unknown: spot the repeated pattern, substitute, solve, go back.

| Pattern | Substitution | Reminder |
|---|---|---|
| x⁴ − 13x² + 36 = 0 | u = x² | x² = 4 or 9, so x = ±2, ±3 |
| x − 5√x + 6 = 0 | u = √x | √x = 2 or 3 |
| fractions in (x + a) | u = 1/(x + a) | solve for u, then invert |

Reject any value of u that cannot be a square or a root, such as √x = −2.

## 1.02g–h Inequalities and notation

- Linear: as for equations, but reverse the sign when you multiply or divide by a negative. −2x + 3 < 9 gives x > −3.
- Quadratic: find the roots, sketch, read off.
- ∪-shaped, "< 0": between the roots. ∪-shaped, "> 0": outside the roots, written with "or".
- Double inequality: do the same operation to all three parts.

```
x² − 8x + 12 ≤ 0  →  (x − 2)(x − 6) ≤ 0  →  2 ≤ x ≤ 6
x² > 9            →  x < −3 or x > 3
```

| Meaning | Set notation | Interval notation |
|---|---|---|
| x > 3 | {x : x > 3} | (3, ∞) |
| −2 ≤ x ≤ 4 | {x : −2 ≤ x ≤ 4} | [−2, 4] |
| x < −3 or x > 3 | {x : x < −3} ∪ {x : x > 3} | (−∞, −3) ∪ (3, ∞) |
| overlap of two sets | {x : x > 3} ∩ {x : x ≤ 4} | (3, 4] |

"And" corresponds to ∩, "or" to ∪. Round bracket: end value excluded. Square bracket: included.

## 1.02i Regions

1. Draw the boundary curve or line.
2. Dashed for < and >, solid for ≤ and ≥.
3. Test a point not on the boundary, such as (0, 0).
4. Shade, or shade out, the side that fits, as the question asks.
5. For two or more inequalities, the region is where all hold. Find the corners by solving the boundary equations together.

## Worked reminders

**Solve x² + 6x − 1 = 0 by completing the square.**

```
(x + 3)² − 10 = 0  →  x + 3 = ±√10  →  x = −3 ± √10
```

**Find k so that x² + kx + 9 = 0 has a repeated root.**

```
k² − 36 = 0  →  k = 6 or k = −6
```

**Classify the roots.** For 3x² − 5x + 4 the discriminant is 25 − 48 = −23, so there are no real roots. For x² − 5x + 4 it is 25 − 16 = 9, so there are two real roots (and 9 is a perfect square, so it factorises: (x − 1)(x − 4)).

**Quadratic inequality in four moves.**

```
1. Move everything to one side:      x² − 5x − 14 > 0
2. Factorise to get the roots:       (x − 7)(x + 2) > 0  →  −2 and 7
3. Sketch a ∪ with those roots
4. "> 0" means above the axis:       x < −2 or x > 7
```

## Must-know distinctions

| Pair | Difference |
|---|---|
| Discriminant and roots | The discriminant counts the roots. It is not the roots themselves. |
| "And" and "or" | "And" means both conditions hold (∩). "Or" means either does (∪). |
| < and ≤ | Strict: the end value is excluded (round bracket, dashed line). Not strict: included (square bracket, solid line). |
| Equation and inequality | An equation gives separate values. An inequality gives a range, so check by testing a value. |
| Rationalising a single surd and a binomial | One surd on its own uses that surd. A sum or difference uses the conjugate. |
| Roots and intercepts | The roots are the x-intercepts. The y-intercept is c. |

## Reading graphs

- The solutions of f(x) = 0 are where the curve meets the x-axis.
- The solutions of f(x) > 0 are the x-values where the curve is above the axis.
- A line meets a parabola twice, once (tangent) or not at all, depending on the sign of the discriminant of the combined quadratic.
- The turning point of y = a(x + p)² + q is (−p, q). The line of symmetry is x = −p, halfway between any pair of roots.
- If a > 0 and q > 0, the graph never reaches the x-axis. If a < 0 and q < 0, the same is true.

## Quick self-test

1. Evaluate 49^(−3/2).
2. Write √72 in the form k√2.
3. Write 12/√6 in the form k√6.
4. Rationalise 1/(2 + √3).
5. How many real roots does 2x² − 3x + 5 = 0 have? Give the discriminant.
6. Complete the square for x² − 10x + 7.
7. Solve x² − 5x − 14 > 0.
8. Solve y = 3x and y = x² − 10 simultaneously.
9. Write (−3, 2] in set notation.
10. Find the values of k for which x² + kx + 16 = 0 has equal roots.
11. Solve x⁴ − 13x² + 36 = 0.
12. Rationalise 4/(3 − √5).

### Answers

1. 1/343
2. 6√2
3. 2√6
4. 2 − √3
5. Discriminant 9 − 40 = −31, so no real roots
6. (x − 5)² − 18
7. x < −2 or x > 7
8. x = −2, y = −6 and x = 5, y = 15
9. {x : −3 < x ≤ 2}
10. k = 8 or k = −8
11. x = ±2 or x = ±3
12. 3 + √5

## Where marks are usually lost

- Sign slips when expanding (x − 4)² or (2 − √3)².
- Treating a negative index as a negative number.
- Leaving a surd in the denominator after a question has asked you to rationalise.
- Stopping after finding x, without finding y.
- Cancelling a common factor containing x, which can lose a solution.
- Writing the discriminant condition for the wrong sign: real roots needs b² − 4ac ≥ 0.
- Forgetting to reverse an inequality sign after dividing by a negative.
- Writing "−3 > x > 2" or similar, which says nothing sensible. Use "or" or two separate inequalities.
- Using a solid line for a strict inequality when shading regions.
- Forgetting that the substitution value must be checked, for example √x = −2.

## Official syllabus

OCR, *A Level Mathematics A (H240)* specification, Version 3.1 (August 2026), for first assessment in 2018. Content references 1.02a to 1.02i.
