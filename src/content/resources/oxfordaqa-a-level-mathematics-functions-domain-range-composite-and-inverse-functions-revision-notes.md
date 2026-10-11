---
title: "OxfordAQA International AS and A-level Mathematics: Functions, composites, inverses and modulus (9660) -- Revision Notes"
seoTitle: "OxfordAQA A-level Maths P2 Functions Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Functions: domain, range, composite and inverse functions, modulus"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 187
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "p2-algebra-and-functions-oxfordaqa-alevel-maths"
description: "Condensed revision notes on domain and range, composite and inverse functions and the modulus for OxfordAQA International A-level Mathematics Unit P2."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

Condensed recall for the first part of content area P2.1 (Algebra and functions) in the OxfordAQA *International AS and A-level Mathematics* specification, Version 5.2. This content is in International A-level (A2) Unit P2 (Pure Maths) and is not examined at International AS. For full explanations, use the [study guide](/resources/oxfordaqa-a-level-mathematics-functions-domain-range-composite-and-inverse-functions/).

Related pages: the [practice questions](/resources/oxfordaqa-a-level-mathematics-functions-domain-range-composite-and-inverse-functions-practice/), the [course hub](/boards/oxfordaqa/a-level/mathematics/), the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/) and the [free 10-minute diagnostics](/diagnostics/).

## Key definitions

| Term | Meaning |
|---|---|
| Function | A rule giving exactly one output for each allowed input |
| Domain | The set of allowed inputs |
| Range | The set of outputs actually produced |
| One-one | Each output comes from exactly one input |
| Many-one | Some output comes from two or more inputs |
| Composite fg(x) | f(g(x)): g acts first, then f |
| Inverse f⁻¹ | The function that undoes f; exists only if f is one-one |
| Self-inverse | f⁻¹ = f, so ff(x) = x |
| Modulus | The size of x: the value is x if x ≥ 0 and −x if x < 0 |

The specification writes a domain such as x > 1 and a range such as f(x) > −3. Use that style.

## Domain and range

Method for the range:

1. Complete the square or sketch the curve.
2. Find the turning point and check whether its x-value is inside the domain.
3. Compare the outputs at the ends of the domain.
4. Write the range as an inequality in f(x).

Reminder: f(x) = x² − 10x + 29 equals (x − 5)² + 4.

```
Domain x ≥ 6 (turning point at x = 5 is outside)  →  range f(x) ≥ 5
Domain x ∈ ℝ                                       →  range f(x) ≥ 4
Domain 1 ≤ x ≤ 8                                   →  least 4, greatest f(1) = 20,  range 4 ≤ f(x) ≤ 20
```

Restricting the domain can change the range.

## Composite functions

```
fg(x) = f(g(x))     gf(x) = g(f(x))     fg and gf are usually different
```

Reminder: f(x) = 3x − 5 and g(x) = x² + 2 give fg(x) = 3x² + 1 and gf(x) = 9x² − 30x + 27.

* The output of g must lie in the domain of f.
* To find the domain of fg, ask which x make g(x) a legal input for f.
* Reminder: f(x) = √(x − 1) and g(x) = x² − 10 give fg(x) = √(x² − 11), which needs x ≤ −√11 or x ≥ √11.

## Inverse functions

Method in steps:

1. Check f is one-one (restrict the domain if needed).
2. Write y = f(x) and make x the subject.
3. Rename y as x.
4. Domain of f⁻¹ = range of f. Range of f⁻¹ = domain of f.

| Fact | Statement |
|---|---|
| Composition | f⁻¹f(x) = x and ff⁻¹(x) = x |
| Graph | y = f⁻¹(x) is the reflection of y = f(x) in y = x |
| Points | (a, b) on f gives (b, a) on f⁻¹ |
| Meeting points | For increasing f, solve f(x) = x |
| Inverse of a composite | (fg)⁻¹ = g⁻¹f⁻¹ |

Worked reminder: f(x) = (4x + 1)/(x − 2), x ≠ 2.

```
y(x − 2) = 4x + 1
x(y − 4) = 2y + 1
f⁻¹(x) = (2x + 1)/(x − 4),  x ≠ 4
```

Worked reminder: f(x) = x² − 10x + 29, x ≥ 6 gives f⁻¹(x) = 5 + √(x − 4), x ≥ 5. Take the positive root because x − 5 ≥ 1.

For a decreasing branch, such as x ≤ 5 in the same quadratic, you would take the negative root: f⁻¹(x) = 5 − √(x − 4), with x ≥ 4.

## Modulus function and graphs

* y = |f(x)|: keep the part above the x-axis and reflect the part below it upwards.
* y = |ax + b|: a V shape with its vertex on the x-axis at x = −b/a.
* The range of any y = |f(x)| lies in y ≥ 0.

Equation methods:

```
|a| = |b|   →  a = b  or  a = −b
|a| = c     →  a = c  or  a = −c    (needs c ≥ 0)
|a| = g(x)  →  split into cases, then test each answer in g(x) ≥ 0
```

Worked reminder: |x − 4| = 2x + 1.

```
x − 4 = 2x + 1  →  x = −5; the right side is −9, so reject
4 − x = 2x + 1  →  x = 1; both sides equal 3, so accept
```

## Modulus inequalities

Method in steps:

1. Solve the matching equation. This gives the crossing points.
2. Sketch both sides.
3. Test one value in each region, or read the sketch.
4. Write "between" answers as one interval and "outside" answers with "or".

Worked reminder: |x + 5| < 2|x − 1|.

```
x + 5 = 2(x − 1)    →  x = 7
x + 5 = −2(x − 1)   →  x = −1
Test x = 0: 5 < 2 is false, so the answer lies outside the crossings.
Answer: x < −1 or x > 7
```

The specification's own type, |x + 2| < 3|x|, works the same way: the equation |x + 2| = 3|x| gives x = 1 and x = −1/2. At x = 0 the inequality reads 2 < 0, which is false, so the solution is the outside regions: x < −1/2 or x > 1.

For |f(x)| < k, you can also write −k < f(x) < k and solve both parts. Reminder: |x² + 4x − 5| < 7 gives −6 < x < −2 − √2 or −2 + √2 < x < 2.

## Worked examples to rehearse

**Reflection in y = x.** The curve y = f(x) passes through (1, 7) and (4, −2), and f is one-one. Then y = f⁻¹(x) passes through (7, 1) and (−2, 4). The domain of f⁻¹ is the range of f, so any value in the range of f is a legal input for f⁻¹.

**Composite with a restricted domain.** f(x) = 2x + 1 for x ≥ 0 and g(x) = x − 6 for all real x.

```
fg(x) = 2(x − 6) + 1 = 2x − 11
g(x) must be in the domain of f, so x − 6 ≥ 0, giving x ≥ 6.
Domain of fg: x ≥ 6.   Range of fg: fg(x) ≥ 1.
```

The formula 2x − 11 alone would suggest every real x is allowed. The domain statement matters.

**Modulus with a quadratic.** Solve |x² − 6x + 5| < 3, using f(x) = (x − 1)(x − 5).

```
f(x) = 3:   x² − 6x + 2 = 0   →  x = 3 ± √7
f(x) = −3:  x² − 6x + 8 = 0   →  x = 2 or x = 4
```

The reflected hump between x = 1 and x = 5 reaches a height of 4 at x = 3, so it rises above y = 3 between x = 2 and x = 4. The curve is below y = 3 for 3 − √7 < x < 2 and for 4 < x < 3 + √7.

**Inverse and composite together.** If f(x) = x + 4 and g(x) = 5x, then fg(x) = 5x + 4 and (fg)⁻¹(x) = (x − 4)/5. Also g⁻¹f⁻¹(x) = (x − 4)/5, because the inverse of a composite undoes the last step first.

## Must-know distinctions

* fg is not gf. Check the order each time.
* f⁻¹(x) is not 1/f(x).
* Range of f is the domain of f⁻¹. Domain of f is the range of f⁻¹.
* |f(x)| reflects the graph. It does not change the sign of the formula for every x.
* "Solve the equation" and "solve the inequality" need different final statements: points versus intervals.

## Quick self-test

1. State the range of f(x) = (x + 2)² − 7 for x ≥ 0.
2. If f(x) = 2x − 3 and g(x) = x², write fg(x) and gf(x).
3. Find the inverse of f(x) = 5x + 4.
4. A function has f(2) = 9. What point lies on y = f⁻¹(x)?
5. Solve |3x − 6| = 12.
6. Solve |x − 2| = 3x + 10.
7. Show that f(x) = (x + 1)/(x − 1), x ≠ 1, is self-inverse.
8. Solve |x + 5| < 2|x − 1| using the equation first.
9. State the range of y = |2x − 5|.
10. f(x) = x² − 10x + 29, x ≥ 6. Find f⁻¹(8).

### Answers

1. Turning point at x = −2 is outside the domain, f(0) = −3, increasing: **f(x) ≥ −3**.
2. fg(x) = 2x² − 3 and gf(x) = (2x − 3)² = **4x² − 12x + 9**.
3. y = 5x + 4, so x = (y − 4)/5: **f⁻¹(x) = (x − 4)/5**.
4. **(9, 2)**.
5. 3x − 6 = 12 gives x = 6. 3x − 6 = −12 gives x = −2. **x = 6 or x = −2**.
6. x − 2 = 3x + 10 gives x = −6, rejected as the right side is −8. 2 − x = 3x + 10 gives x = −2, and both sides equal 4. **x = −2**.
7. ff(x) = ((x + 1)/(x − 1) + 1) / ((x + 1)/(x − 1) − 1) = (2x/(x − 1)) / (2/(x − 1)) = **x**, so f = f⁻¹.
8. Crossings at x = −1 and x = 7, and x = 0 fails: **x < −1 or x > 7**.
9. **y ≥ 0**.
10. f⁻¹(x) = 5 + √(x − 4), so f⁻¹(8) = 5 + √4 = **7**. (Check: f(7) = 49 − 70 + 29 = 8.)

## Where marks are usually lost

* Reversing the order in fg(x).
* Not testing solutions of a modulus equation when one side is not a modulus.
* Forgetting to state the domain of an inverse, or stating it from the wrong function.
* Choosing the wrong square root when inverting a restricted quadratic.
* Stating a range with the wrong end behaviour, for example including a value the domain excludes.
* Giving only the crossing points when a question asks for an inequality.
* Writing a "between" answer with the word "or", or an "outside" answer as one interval.
* Sketches that show a modulus graph dipping below the x-axis.

## Official syllabus

OxfordAQA, *International AS and A-level Mathematics (9660)* specification, Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019), content area P2.1.
