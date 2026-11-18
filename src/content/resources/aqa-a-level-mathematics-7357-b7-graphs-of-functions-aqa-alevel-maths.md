---
title: "AQA A-Level Mathematics (7357): Graphs of functions"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "B: Algebra and functions"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 3.07
syllabusTopics:
  - qualification: "a-level"
    topic: "b-algebra-and-functions-aqa-alevel-maths"
    subtopic: "b7-graphs-of-functions-aqa-alevel-maths"
description: "AQA A-level Maths 7357 B7 in depth: equations from sketches, multiple roots, two-modulus equations, line-hyperbola counts and tangency, proportion tests."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers content statement **B7** of AQA A-level Mathematics (7357), Section B: Algebra and functions: "Understand and use graphs of functions; sketch curves defined by simple equations including polynomials, the modulus of a linear function, y = a/x and y = a/x² (including their vertical and horizontal asymptotes); interpret algebraic solution of equations graphically; use intersection points of graphs to solve equations. Understand and use proportional relationships and their graphs."

The [graphs, composite and inverse functions study guide](/resources/aqa-a-level-mathematics-graphs-of-functions-composite-functions-and-inverse/) teaches the basic sketches and solves single-modulus equations. This page takes each strand of B7 one step further: working backwards from a sketch to an equation, reading the meaning of repeated roots, equations with a modulus on both sides, counting intersections with a parameter, and testing data for proportionality. Use the [B7 revision notes](/resources/aqa-a-level-mathematics-7357-b7-graphs-of-functions-aqa-alevel-maths-revision-notes/) for recall and the [B7 practice questions](/resources/aqa-a-level-mathematics-7357-b7-graphs-of-functions-aqa-alevel-maths-practice/) to test yourself.

## What a sketch must show

A sketch is not an accurate plot, but the examiner checks specific features. For every B7 curve, show:

- the correct overall shape and the behaviour at both ends;
- every intersection with the axes, as coordinates;
- each asymptote, drawn as a dashed line and labelled with its equation;
- whether the curve crosses or touches the x-axis at each root.

Missing a labelled intercept or asymptote is the usual reason a correct-looking sketch loses marks.

## Polynomials: multiplicity of a root

The power of a factor controls what the curve does at that root.

| Factor | Behaviour at x = a | Sign of y either side of a |
|---|---|---|
| (x − a) | Crosses the axis | Changes |
| (x − a)² | Touches the axis and turns back | Stays the same |
| (x − a)³ | Crosses, flattening as it goes through | Changes |

So an odd power crosses and an even power touches. Combine this with the end behaviour from the leading term.

**Worked example 1.** Sketch y = x(x − 2)³.

```
Roots:         x = 0 (single, crosses), x = 2 (triple, crosses with a flat section)
y-intercept:   (0, 0)
Leading term:  x × x³ = x⁴, positive, so both ends go up
Test a point:  x = 1 gives 1 × (−1)³ = −1, so the curve is below the axis between 0 and 2
```

The curve comes down from the top left, crosses at the origin, dips below the axis, then rises and passes through (2, 0) with a flattened, horizontal crossing, and climbs to the top right.

## Working backwards: an equation from a sketch

Questions often show a sketch with intercepts marked and ask for the equation. Build the factors from the roots, then use one more point to find the scale factor.

**Worked example 2.** A cubic crosses the x-axis at (−2, 0), touches it at (1, 0) and meets the y-axis at (0, 4). Find its equation in expanded form.

```
Touches at 1, so (x − 1)² is a factor; crosses at −2, so (x + 2) is a factor.
y = a(x + 2)(x − 1)²
At (0, 4):  4 = a(2)(1), so a = 2
y = 2(x + 2)(x − 1)² = 2x³ − 6x + 4
```

Forgetting the constant a, and assuming it is 1, is the commonest error. Always check the y-intercept with your final equation.

## Modulus of a linear function: both sides

The broader guide solves |ax + b| = (a line) by taking each arm in turn. When there is a modulus on **both** sides, squaring is quicker, because both sides are non-negative and squaring keeps equality.

**Worked example 3.** Solve |x − 3| = |2x + 1|, and hence solve |x − 3| < |2x + 1|.

```
(x − 3)² = (2x + 1)²
x² − 6x + 9 = 4x² + 4x + 1
0 = 3x² + 10x − 8 = (3x − 2)(x + 4)
x = 2/3  or  x = −4
```

Check: at x = 2/3 both sides equal 7/3; at x = −4 both sides equal 7.

For the inequality, squaring is still valid because both sides are non-negative: (x − 3)² < (2x + 1)² becomes 3x² + 10x − 8 > 0. The quadratic is positive outside its roots, so **x < −4 or x > 2/3**.

Graphically, the two V-shapes have vertices at (3, 0) and (−1/2, 0). The steeper V, y = |2x + 1|, is above the other except between the crossing points. Sketching both confirms the answer.

Only square when both sides are moduli (or are known to be non-negative). Squaring |x − 3| = 2x − 1 can introduce a false root where 2x − 1 is negative, so check every answer in the original equation.

## y = a/x and y = a/x²: counting intersections

Equating a hyperbola with a line gives a quadratic, so the discriminant counts the intersection points, as long as x = 0 is excluded.

**Worked example 4.** Find the values of k for which the line y = x + 3 meets the curve y = k/x at two points.

```
k/x = x + 3   →   x² + 3x − k = 0,   x ≠ 0
Two distinct roots:  9 + 4k > 0,  so  k > −9/4
```

Now check the excluded value. If k = 0 the "curve" is y = 0 (for x ≠ 0), and it meets the line only at x = −3. So the answer is **k > −9/4, k ≠ 0**. At k = −9/4 the line is a tangent to the curve at x = −3/2.

## Interpreting an algebraic solution graphically

Each real root of f(x) = g(x) is the x-coordinate of an intersection. A **repeated** root means the graphs touch there.

**Worked example 5.** Solve 4/x² = x + 3 and interpret the result.

```
4 = x³ + 3x²   →   x³ + 3x² − 4 = 0
x = 1 is a root (1 + 3 − 4 = 0), and the factor theorem gives
(x − 1)(x + 2)² = 0
x = 1  or  x = −2 (repeated)
```

At x = 1 the line crosses the curve at (1, 4). At x = −2 both give y = 1, and because the root is repeated, the line **touches** the curve there instead of crossing it. So the graphs meet at exactly two points, and the line is a tangent at (−2, 1). This is the kind of reasoning "interpret algebraic solution of equations graphically" asks for.

## Choosing graphs to solve an equation

When an equation is hard to solve exactly, rearrange it so that each side is a curve you can sketch. Good choices are a line, a quadratic, y = a/x, y = a/x² or a modulus.

- x³ + x − 1 = 0 can be written x² + 1 = 1/x (dividing by x, valid since x = 0 is not a root). An upward parabola above y = 1 and a hyperbola meet once, for x > 0, so there is one real root.
- |2x − 1| = 3/x: for x < 0 the right side is negative, so no solutions there; for x > 0 the V and the hyperbola meet once, giving one solution.

State the rearranged equation and the curves you drew. The marks are for the reasoning.

## Proportional relationships from data

Two quick tests identify the relationship in a table:

| Test | Constant result means |
|---|---|
| y ÷ xⁿ is constant | y ∝ xⁿ (direct proportion to xⁿ) |
| y × xⁿ is constant | y ∝ 1/xⁿ (inverse proportion) |

**Worked example 6.** Decide how y depends on x, and write the equation.

| x | 2 | 4 | 6 | 10 |
|---|---|---|---|---|
| y | 45 | 11.25 | 5 | 1.8 |

xy gives 90, 45, 30, 18: not constant. x²y gives 180, 180, 180, 180: constant. So y is inversely proportional to x², and **y = 180/x²**. A graph of y against 1/x² is a straight line through the origin with gradient 180.

The graph to remember: y ∝ xⁿ means a plot of y against xⁿ is a straight line **through the origin**. A straight line that misses the origin shows a linear relationship, not proportion.

## Common mistakes

- Drawing a crossing at a squared factor, or a touch at a single factor.
- Assuming a sketch's equation has leading coefficient 1.
- Leaving asymptotes unlabelled, or letting y = a/x² cross the x-axis.
- Squaring an equation with a modulus on one side only, and not checking for false roots.
- Forgetting to exclude x = 0 when a hyperbola is involved.
- Treating a repeated root as two separate intersection points.
- Calling any straight-line graph "proportional".

## Exam technique for AQA command words

- **"Sketch"**: shape, intercepts as coordinates, asymptotes as equations. Accuracy of scale is not required.
- **"Hence"**: use the sketch or factorisation just found to count or locate solutions.
- **"Show that ... has exactly one real root"**: name the two curves and explain why they meet once; a single calculator value does not prove it.
- **"Find the set of values"**: give the inequality and any excluded values, as in worked example 4.
- **"Interpret"**: say what the algebraic result means for the graphs, such as "the line is a tangent at (−2, 1)".

## Where to go next

Condense these ideas with the [B7 revision notes](/resources/aqa-a-level-mathematics-7357-b7-graphs-of-functions-aqa-alevel-maths-revision-notes/) and test them with the [B7 practice questions](/resources/aqa-a-level-mathematics-7357-b7-graphs-of-functions-aqa-alevel-maths-practice/). Moving these graphs around is the next statement, covered in [transformations of graphs](/resources/aqa-a-level-mathematics-transformations-of-graphs/).

## Official syllabus

AQA A-level Mathematics (7357) specification, first teaching 2017, Section B: Algebra and functions, content statement B7.
