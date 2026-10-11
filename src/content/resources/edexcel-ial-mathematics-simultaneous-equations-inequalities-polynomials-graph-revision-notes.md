---
title: "Pearson Edexcel International Advanced Level Mathematics: Inequalities, polynomials and graphs (YMA01) -- Revision Notes"
seoTitle: "Edexcel IAL Maths P1 Inequalities & Graphs Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Simultaneous equations, inequalities, polynomials, graph sketching and transformations"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 138
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p1-pure-mathematics-1-edexcel-alevel-maths"
    subtopic: "p1-algebra-and-functions-edexcel-alevel-maths"
description: "Condensed revision notes for Edexcel IAL Maths P1 topics 1.6 to 1.12 with method boxes, a graph and transformation cheat sheet and a quick self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes are aligned to the Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics specification (YMA01), Issue 3, April 2019, Unit P1: Pure Mathematics 1, topics 1.6 to 1.12. The specification makes P1 and P2 compulsory for IAS Mathematics, IAL Mathematics and IAL Pure Mathematics. For full explanations read the [study guide](/resources/edexcel-ial-mathematics-simultaneous-equations-inequalities-polynomials-graph/), then test yourself with the [practice questions](/resources/edexcel-ial-mathematics-simultaneous-equations-inequalities-polynomials-graph-practice/).

Course pages: the [Edexcel A Level Mathematics hub](/boards/edexcel/a-level/mathematics/), the [printable checklist](/checklists/edexcel/a-level/mathematics/), the [free 10-minute diagnostics](/diagnostics/), [Pure Mathematics 1 revision notes](/resources/edexcel-a-level-mathematics-pure1-revision-notes/) and [Pure Mathematics 2 revision notes](/resources/edexcel-a-level-mathematics-pure2-revision-notes/).

## 1.6 Simultaneous equations by substitution

Method in steps:

1. Rearrange so that x or y is alone on one side of the linear equation.
2. Put that expression into the non-linear equation. Expand and collect.
3. Solve the quadratic.
4. Put each root back into the linear equation.
5. Write the answers as pairs.

**Reminder.** Solve x + y = 8 and xy = 15. Then y = 8 − x, so x(8 − x) = 15 and x² − 8x + 15 = 0, so (x − 3)(x − 5) = 0. The solutions are **(3, 5) and (5, 3)**.

If the quadratic has no real roots, the line and curve do not meet. If it has one repeated root, the line touches the curve.

## 1.7 and 1.9 Inequalities

| Situation | Rule |
|---|---|
| Multiply or divide by a negative | Reverse the sign |
| Bracket in the inequality | Expand first, then collect |
| Fraction with x below | Multiply by x² (positive), state x ≠ 0 |
| Quadratic, x² coefficient positive, "< 0" | Between the roots |
| Quadratic, x² coefficient positive, "> 0" | Outside the roots: two ranges joined by "or" |

Method for quadratics:

1. Rearrange to have 0 on one side.
2. Factorise (or use the formula) to find the roots.
3. Sketch the curve with its roots.
4. Read off the region asked for.

**Reminders.**

```
5 − 2x ≤ 11        →  −2x ≤ 6  →  x ≥ −3
x² + 4x − 21 > 0   →  (x + 7)(x − 3) > 0  →  x < −7 or x > 3
x² + 3 < 4x        →  x² − 4x + 3 < 0  →  1 < x < 3
4/x > 1            →  4x > x²  →  x² − 4x < 0  →  0 < x < 4
```

The last line needs a check, because x ≠ 0 was assumed: x = 2 gives 2 > 1 (true), x = 5 gives 0.8 > 1 (false), x = −1 gives −4 > 1 (false).

**Graphical reading.** px² + qx + r < ax + b means "curve below line". Find the intersection x-values, sketch both, then choose the interval where the curve is lower. For "curve above line" choose the outer or inner region the sketch shows.

## 1.8 Regions

| Inequality | Boundary line | Shade |
|---|---|---|
| y > f(x) | Dotted | Above the boundary |
| y ≥ f(x) | Solid | Above, and the boundary is included |
| y < f(x) | Dotted | Below the boundary |
| y ≤ f(x) | Solid | Below, and the boundary is included |

Check every region with a test point such as (0, 0), unless it lies on a boundary. For a region bounded by a curve and a line, find where they meet by solving simultaneously, then mark those points.

**Reminder.** Region y ≥ x² − 2x and y < 3. The boundaries meet where x² − 2x = 3, so x = −1 or 3, at (−1, 3) and (3, 3). The parabola is solid and the line is dotted. The test point (1, 0) gives 0 ≥ −1 and 0 < 3, both true, so shade above the parabola and below the line.

## 1.10 Polynomials and f(x)

| Result | Use |
|---|---|
| Difference of two squares | 9x² − 16 = (3x − 4)(3x + 4) |
| Common factor first | x³ − 6x² + 8x = x(x² − 6x + 8) = x(x − 2)(x − 4) |
| Grouping | Pair terms, then take out the shared bracket |
| Degree | Highest power of x |

**Reminder.** (x + 3)² − (x − 2)² = (x² + 6x + 9) − (x² − 4x + 4) = **10x + 5**.

For f(x) = x² − 2x: f(3) = 3, f(x − 1) = (x − 1)² − 2(x − 1) = **x² − 4x + 3**, and f(2x) = 4x² − 4x. Replace every x, including the ones inside brackets.

## 1.11 Sketching graphs

Cubic checklist: sign of the x³ coefficient (end behaviour), roots from factors, a double root touches the axis, y-intercept from x = 0, and label all intercepts.

**Reminder.** y = x(3 − x)(x + 2): the roots are −2, 0 and 3. The coefficient of x³ is −1, so the curve falls to the right and rises to the left. It is positive for x < −2, negative between −2 and 0, positive between 0 and 3, and negative after 3. Expanded, it is −x³ + x² + 6x. The y-intercept is the origin.

| Graph | Asymptotes | Position |
|---|---|---|
| y = k/x, k > 0 | x = 0, y = 0 | Quadrants 1 and 3 |
| y = k/x, k < 0 | x = 0, y = 0 | Quadrants 2 and 4 |
| y = k/x², k > 0 | x = 0, y = 0 | Above the x-axis, symmetric |
| y = k/x², k < 0 | x = 0, y = 0 | Below the x-axis, symmetric |

| Graph | Period | Features |
|---|---|---|
| y = sin x | 360° (2π) | Through the origin; first peak at 90° |
| y = cos x | 360° (2π) | Begins at its peak of 1; first zero at 90° |
| y = tan x | 180° (π) | Through the origin; asymptotes at 90° and 270° |

**Solving by intersection.** Rewrite the equation as two simple graphs, sketch both on one set of axes, and count the crossings. Each crossing is a real solution. The x-coordinates are the solutions of the equation.

## 1.12 Transformations

| Equation | Move | Memory aid |
|---|---|---|
| y = af(x) | y-values times a | Outside: as written |
| y = f(x) + a | Up a | Outside: as written |
| y = f(x + a) | Left a | Inside: opposite |
| y = f(ax) | x-values divided by a | Inside: opposite |

Asymptotes move with the curve. For y = 3/(x − 4) + 1 start from y = 3/x, move 4 right and 1 up, so the asymptotes are x = 4 and y = 1.

For trigonometric curves: y = 4 cos x has amplitude 4. y = cos 3x has period 120°. y = sin(x − 30°) is sin x moved 30° to the right. y = tan 2x has period 90°.

Given any graph, apply the rule to each labelled point: maximum, minimum, intercepts, asymptotes. Mark the new coordinates and join with the same shape.

**Reminder.** The curve y = f(x) has a minimum at (2, −5) and crosses the y-axis at (0, 3). For y = 2f(x): minimum (2, −10), y-intercept (0, 6). For y = f(x + 1): minimum (1, −5), the new y-intercept is f(1), which the given points do not show. For y = f(x/2): minimum (4, −5), y-intercept (0, 3), because x = 0 does not move.


## Must-know distinctions

- **Roots versus intercepts:** roots are x-values where y = 0; the y-intercept is found by putting x = 0.
- **Strict versus inclusive:** < and > use a dotted line and exclude the boundary; ≤ and ≥ use a solid line.
- **"Or" versus "and":** two separate ranges use "or"; a single interval is written a < x < b.
- **Inside versus outside the bracket:** inside changes x and acts in reverse; outside changes y and acts as written.
- **k/x versus k/x²:** the first has two branches in opposite quadrants; the second has two branches on the same side of the x-axis.

## Quick self-test

1. Solve x + 2y = 5 and xy = 3.
2. Solve 4 − 3x > 16.
3. Solve x² − x − 20 < 0.
4. Solve x² − 11x + 24 ≥ 0.
5. Factorise 4x³ − 9x.
6. Expand (x − 2)(x² + 2x + 4).
7. For f(x) = x³ − x, find f(2) and expand f(x − 1).
8. State the asymptotes of y = 3/x² − 4 and where it meets the x-axis.
9. The point (2, −5) lies on y = f(x). Where is its image on y = f(x − 3) + 1? (Apply the two changes in turn.)
10. State the period of y = tan 2x in degrees.
11. Describe the transformation from y = x³ to y = (x − 4)³.
12. Is the boundary of y ≥ x − 2 solid or dotted?

### Answers

1. x = 5 − 2y, so (5 − 2y)y = 3 and 2y² − 5y + 3 = 0, giving y = 1 or 3/2. Solutions: **(3, 1) and (2, 3/2)**.
2. −3x > 12, so **x < −4**.
3. (x + 4)(x − 5) < 0, so **−4 < x < 5**.
4. (x − 3)(x − 8) ≥ 0, so **x ≤ 3 or x ≥ 8**.
5. **x(2x − 3)(2x + 3)**.
6. **x³ − 8**.
7. f(2) = **6**; f(x − 1) = (x − 1)³ − (x − 1) = **x³ − 3x² + 2x**.
8. Asymptotes **x = 0 and y = −4**; 3/x² = 4 gives **x = ±√3/2** (about ±0.866).
9. f(x − 3) moves it right 3 to (5, −5); the +1 raises it to **(5, −4)**.
10. **90°**.
11. **Translation 4 units to the right** (vector (4, 0)).
12. **Solid**, because ≥ includes the line.

## Where marks are usually lost

- Writing x-values only, without the matching y-values, in simultaneous equations.
- Not reversing the inequality sign after dividing by a negative.
- Cancelling or multiplying by x in a fraction inequality, which can lose solutions or reverse the sign.
- Giving a quadratic inequality answer as one long range when the region is two separate parts.
- Leaving out intercepts or asymptote equations from a sketch that asks for them.
- Moving f(x + 3) to the right.
- Applying f(2x) as a doubling of x-coordinates rather than halving.
- Forgetting that a double root touches rather than crosses the axis.
- Treating a dotted boundary as part of the region.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics specification, Issue 3, April 2019, published by Pearson Education Limited. Unit P1, topics 1.6 to 1.12.
