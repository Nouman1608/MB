---
title: "Pearson Edexcel International Advanced Level Mathematics: Functions, modulus and graph transformations (YMA01) -- Revision Notes"
seoTitle: "Edexcel IAL Maths P3 Functions and Modulus Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Functions, the modulus function and combined graph transformations"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 145
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p3-pure-mathematics-3-edexcel-alevel-maths"
    subtopic: "p3-algebra-and-functions-edexcel-alevel-maths"
description: "Condensed revision notes for Edexcel IAL Mathematics P3 section 1: rational expressions, composites, inverses, modulus graphs and transformations."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense topics 1.1 to 1.4 of Unit P3 in the Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics specification, Issue 3 (April 2019). For full explanations and worked examples, read the [study guide](/resources/edexcel-ial-mathematics-functions-the-modulus-function-and-combined-graph/). The specification lists P3 as compulsory for IAL Mathematics and IAL Pure Mathematics, with IAS weighting N/A.

When you are ready to test yourself, use the [practice questions](/resources/edexcel-ial-mathematics-functions-the-modulus-function-and-combined-graph-practice/). The course pages are the [Edexcel A-level Mathematics hub](/boards/edexcel/a-level/mathematics/) and the [printable checklist](/checklists/edexcel/a-level/mathematics/). The [free 10-minute diagnostics](/diagnostics/) show which topics need work first.

## 1.1 Rational expressions

Method in steps:

1. Factorise numerator and denominator fully.
2. Cancel common factors only.
3. If the numerator's degree is at least the denominator's and nothing cancels, divide.
4. Write numerator/denominator = quotient + remainder/denominator.

Useful factorisations: difference of two squares a² − b² = (a − b)(a + b), and a³ − b³ = (a − b)(a² + ab + b²).

**Reminder.** Divide 2x² + x − 1 by x + 2:

```
2x² ÷ x = 2x;     2x(x + 2) = 2x² + 4x;   remainder −3x − 1
−3x ÷ x = −3;     −3(x + 2) = −3x − 6;    remainder 5
(2x² + x − 1)/(x + 2) = 2x − 3 + 5/(x + 2)
```

## 1.2 Functions

| Term | Meaning |
|---|---|
| Domain | The set of allowed inputs x |
| Range | The set of outputs f(x) |
| One-one | Each output comes from exactly one input |
| Many-one | At least two inputs give the same output |
| fg(x) | f(g(x)): do g first, then f |
| f⁻¹ | The inverse, which exists only if f is one-one |

**Inverse in steps:**

1. Put y = f(x).
2. Rearrange for x.
3. Rename y as x to get f⁻¹(x).
4. The domain of f⁻¹ comes from the outputs of f, and the range of f⁻¹ comes from the inputs of f.

**Facts to know**

- f⁻¹f(x) = ff⁻¹(x) = x
- The graph of y = f⁻¹(x) is the graph of y = f(x) reflected in y = x.
- A many-one function needs its domain restricted before it has an inverse.

**Domain and range of a composite.** The domain of fg is the set of x that g accepts and for which g(x) lies in the domain of f. The range of fg is f applied to the outputs of g. For f(x) = √x and g(x) = x − 5, fg(x) = √(x − 5) needs x ≥ 5. For f(x) = 3/x and g(x) = x² + 1, the outputs of g are at least 1, so fg(x) = 3/(x² + 1) takes every value with 0 < fg(x) ≤ 3.

**Reminder.** f(x) = 4x − 3 gives y = 4x − 3, x = (y + 3)/4, so f⁻¹(x) = (x + 3)/4. For f(x) = 1/(x + 3), x ≠ −3, the value 0 is never reached, so the range is f(x) ≠ 0 and f⁻¹(x) = 1/x − 3 has domain x ≠ 0.

## 1.3 The modulus function

| Graph | How to draw it from y = f(x) |
|---|---|
| y = \|ax + b\| | Draw the line, reflect the part below the x-axis. Vertex at x = −b/a. |
| y = \|f(x)\| | Reflect every part below the x-axis in the x-axis. |
| y = f(\|x\|) | Keep x ≥ 0, delete x < 0, mirror the kept part in the y-axis. |

**Solving |ax + b| = cx + d**

1. Sketch both graphs and see how many intersections to expect.
2. Solve ax + b = cx + d and −(ax + b) = cx + d.
3. Substitute each answer back into the original. Reject any that fail.
4. For an inequality, use the sketch to see where the V sits higher than the other graph (for >) or lower (for <).

**Sketch reminder.** Let f(x) = x² + 4x − 21 = (x + 7)(x − 3), with minimum (−2, −25) and y-intercept −21.

```
y = |f(x)|:   x-intercepts (−7, 0), (3, 0); y-intercept (0, 21);
              the minimum becomes a local maximum at (−2, 25).
y = f(|x|):   keep x ≥ 0 only. x-intercepts (−3, 0), (3, 0);
              y-intercept (0, −21), a corner there,
              because the gradient at x = 0 from the right is 4, not 0.
              The old minimum at x = −2 is discarded.
```

**Reminder.** |2x + 1| = 5 gives 2x + 1 = 5, so x = 2, or 2x + 1 = −5, so x = −3. Both work. Also |x + 1| > 4 means x + 1 > 4 or x + 1 < −4, so x > 3 or x < −5.

## 1.4 Combined transformations

| Equation | What happens to y = f(x) |
|---|---|
| y = f(x) + a | translation up by a, vector (0, a) |
| y = f(x + a) | translation left by a, vector (−a, 0) |
| y = af(x) | stretch in the y-direction, scale factor a |
| y = f(ax) | stretch in the x-direction, scale factor 1/a |
| y = −f(x) | mirror image in the x-axis |
| y = f(−x) | mirror image in the y-axis |

The specification says that y = f(ax + b) will not be required.

Order for several steps:

1. Work in the order you would evaluate the expression for a given x.
2. Changes inside the brackets act on x-coordinates. Changes outside act on y-coordinates.
3. Move key points, intercepts and asymptotes together.

**Trigonometric reminder.** For y = 1 + 2 sin(x/2), the factor 1/2 inside stretches the x-direction by scale factor 2, so the period is 4π. The 2 outside stretches the y-direction, so the amplitude is 2. The +1 lifts the midline to y = 1. The graph runs between −1 and 3, passing through (0, 1), and reaches its maximum 3 at x = π.

To sketch y = −f(x + a) on a trig graph, translate first, then reflect in the x-axis. Mark the first maximum, minimum and axis crossings on the sketch.

**Reminder.** A point (6, −2) on y = f(x) goes to (3, −4) on y = 2f(2x), and to (−6, 5) on y = 3 − f(−x).

**Sketching checklist.** Whatever the transformation, a full sketch shows:

1. The axes and the shape of the curve.
2. Coordinates of intercepts and turning points, after transforming them.
3. Equations of any asymptotes, after transforming them.
4. Which part of the curve changed (for a modulus graph, the part that was reflected).

## Must-know distinctions

- f(x + a) moves the graph left by a, but f(x) + a moves it up by a.
- fg means "g first". gf means "f first".
- The domain of f⁻¹ is the range of f.
- y = |f(x)| reflects the negative part up. y = f(|x|) copies the positive-x part across the y-axis.
- Stretch scale factor for af(x) is a, but for f(ax) it is 1/a.
- A rational expression and its simplified form can differ at a point you cancelled, so keep the restriction.
- Solving a modulus equation needs two cases. Squaring both sides is another route, but it can introduce extra roots, so check each one.

## Quick self-test

1. Simplify (x² − 16)/(x² + x − 12).
2. Write (x² + 5x + 7)/(x + 2) as a quotient plus a remainder term.
3. Given f(x) = 2x + 5 and g(x) = x² − 3, work out fg(x) and gf(x).
4. Find f⁻¹ when f(x) = 1/(x + 3), x ≠ −3, and state the domain of f⁻¹.
5. f(x) = x² − 4 for x ≥ 0. State the domain of f⁻¹.
6. Solve |2x + 1| = 5.
7. State the vertex and y-intercept of y = |2x − 6|.
8. Name the transformation that takes y = f(x) to y = f(2x).
9. The point (4, −2) is on y = f(x). What are the coordinates of the matching point on y = 3 − f(x)?
10. Solve |x + 1| > 4.
11. State the maximum value, minimum value and period of y = 2 + cos 3x.

### Answers

1. (x − 4)/(x − 3)
2. x + 3 + 1/(x + 2)
3. fg(x) = 2x² − 1 and gf(x) = (2x + 5)² − 3
4. f⁻¹(x) = 1/x − 3, with domain x ≠ 0
5. The range of f is f(x) ≥ −4, so f⁻¹ has domain x ≥ −4
6. x = 2 or x = −3
7. Vertex (3, 0) and y-intercept (0, 6)
8. A horizontal stretch with scale factor 1/2
9. (4, 5)
10. x < −5 or x > 3
11. Maximum 3, minimum 1, period 2π/3

## Where marks are usually lost

- Cancelling single terms when only whole factors can cancel.
- Leaving out a restriction such as x ≠ 3 when asked for the domain.
- Writing fg(x) when gf(x) is meant.
- Using the domain of f as the domain of f⁻¹.
- Not showing the algebra when a question says "show that" or asks you to verify.
- Not checking modulus solutions in the original equation.
- Sketching y = |f(x)| without the reflected turning point or the new y-intercept.
- Moving f(x + a) the wrong way, or stretching by a instead of 1/a.
- Leaving key coordinates and asymptote equations off a sketch.
- Using a decimal when the question wants an exact value such as √2/2 or π/4.
- Not stating the range of a function that is restricted by its domain, or the range of a composite.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification Issue 3, April 2019, Unit P3 content section 1 (Algebra and functions), topics 1.1 to 1.4. Pearson Education Limited.
