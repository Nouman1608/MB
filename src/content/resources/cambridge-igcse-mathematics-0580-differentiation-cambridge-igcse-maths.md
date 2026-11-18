---
title: "Cambridge IGCSE Mathematics (0580): Differentiation"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Topic 2 – Algebra and graphs"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 2.12
syllabusTopics:
  - qualification: "igcse"
    topic: "algebra-and-graphs-cambridge-igcse-maths"
    subtopic: "differentiation-cambridge-igcse-maths"
description: "Study guide to 0580 subtopic 2.12 Differentiation (Extended): tangents, derivatives of ax^n, gradients, stationary points and telling maxima from minima."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **2.12 Differentiation** in the Cambridge IGCSE Mathematics 0580 syllabus for examination in 2025, 2026 and 2027. It is **Extended only** (E2.12); there is no Core content at C2.12. It can appear on Paper 2 (non-calculator) and Paper 4 (calculator).

| Statement | What it means |
|---|---|
| 1 Estimate gradients of curves by drawing tangents | Rule a tangent at a point and find its gradient from two points on it |
| 2 Use the derivatives of functions of the form axⁿ, where a is a rational constant and n is a positive integer or zero, and simple sums of not more than three of these | Differentiate expressions such as 4x³ − 5x² + 7; dy/dx notation is expected |
| 3 Apply differentiation to gradients and stationary points (turning points) | Find the gradient at a point; find where the gradient is zero |
| 4 Discriminate between maxima and minima by any method | An accurate sketch, the second derivative, or the gradient either side |

The syllabus also states that candidates are **not** expected to identify points of inflection. When you have worked through this guide, use the [differentiation revision notes](/resources/cambridge-igcse-mathematics-0580-differentiation-cambridge-igcse-maths-revision-notes/) and the [differentiation practice questions](/resources/cambridge-igcse-mathematics-0580-differentiation-cambridge-igcse-maths-practice/).

## The gradient of a curve

A straight line has the same gradient everywhere. A curve does not: its gradient at a point is the gradient of the **tangent** there, the straight line that just touches the curve at that point.

**By drawing (statement 1).** Rule a tangent at the point, choose two points on the tangent far apart, and calculate rise ÷ run. The answer is an estimate, because a tangent drawn by eye is never exact. This is the same skill as estimating a speed from a distance–time curve in the [graphs in practical situations guide](/resources/igcse-mathematics-0580-graphs-in-practical-situations/).

**By calculation (statement 2).** Differentiation gives a formula for the gradient at any point, called the **derivative**, written dy/dx.

## The rule

```
y = ax^n          dy/dx = anx^(n-1)
y = ax            dy/dx = a
y = a (constant)  dy/dx = 0
```

Multiply by the power, then reduce the power by one. Differentiate a sum one term at a time.

| y | dy/dx |
|---|---|
| x⁴ | 4x³ |
| 5x³ | 15x² |
| −3x² | −6x |
| ½x² | x |
| 7x | 7 |
| −9 | 0 |

The constant disappears because a horizontal line such as y = −9 has gradient 0.

### Worked example 1: expand first

Find dy/dx for (a) y = 4x³ − 5x² + 7, (b) y = (x − 2)(x + 5), (c) y = (2x + 1)².

```
(a) dy/dx = 12x^2 - 10x

(b) Expand first: y = x^2 + 3x - 10
    dy/dx = 2x + 3

(c) Expand first: y = 4x^2 + 4x + 1
    dy/dx = 8x + 4
```

The rule applies to single terms axⁿ only. A bracket must be multiplied out first, and each part of the product cannot be differentiated separately: in (b), differentiating each bracket and multiplying gives 1 × 1 = 1, which is wrong.

## Gradient at a point

Substitute the x-coordinate into dy/dx, not into y.

### Worked example 2

Find the gradient of y = x³ − 2x at the point (2, 4).

```
dy/dx = 3x^2 - 2
At x = 2: 3(4) - 2 = 10
The gradient is 10.
```

### Worked example 3: working backwards

Find the coordinates of the point on y = x² − 6x + 1 where the gradient is 4.

```
dy/dx = 2x - 6
2x - 6 = 4  ->  x = 5
y = 25 - 30 + 1 = -4
The point is (5, -4).
```

The question asked for coordinates, so the y-value is found from the original equation.

## Stationary (turning) points

At a turning point the tangent is horizontal, so **dy/dx = 0**. The method:

```
1. Differentiate.
2. Set dy/dx = 0 and solve for x.
3. Substitute each x into y (the original equation) to get the coordinates.
4. Decide whether each is a maximum or a minimum.
```

### Worked example 4

Find the stationary points of y = x³ − 3x² − 9x + 5 and determine their nature.

```
dy/dx = 3x^2 - 6x - 9
3x^2 - 6x - 9 = 0
3(x^2 - 2x - 3) = 0
3(x - 3)(x + 1) = 0  ->  x = 3 or x = -1

x = 3:  y = 27 - 27 - 27 + 5 = -22   ->  (3, -22)
x = -1: y = -1 - 3 + 9 + 5 = 10      ->  (-1, 10)
```

**Nature, method 1: the second derivative.** Differentiate dy/dx again to get d²y/dx² = 6x − 6.

```
At x = 3:  6(3) - 6 = 12   positive  ->  minimum
At x = -1: 6(-1) - 6 = -12 negative  ->  maximum
```

**Nature, method 2: the gradient either side.** Choose x-values just either side of each point and look at the sign of dy/dx.

```
x                 -2      -1      0       3       4
dy/dx = 3x^2-6x-9 +15      0     -9       0     +15
shape              /       —      \       —      /
```

Positive, zero, negative is a **maximum** at x = −1; negative, zero, positive is a **minimum** at x = 3. Both methods agree.

**Method 3: shape.** A positive cubic rises, turns, falls, turns and rises, so the first turning point (smaller x) is the maximum. This is quick, but a calculation is safer when a question asks you to show your method.

The [sketching curves guide](/resources/cambridge-igcse-mathematics-0580-sketching-curves-cambridge-igcse-maths/) uses these results to label the turning points of a cubic sketch.

### Worked example 5: a maximum in context

A ball is thrown upwards. Its height after t seconds is h = 20t − 5t² metres. Find the greatest height.

```
dh/dt = 20 - 10t
20 - 10t = 0  ->  t = 2
h = 20(2) - 5(4) = 40 - 20 = 20
d^2h/dt^2 = -10, negative, so this is a maximum.
Greatest height: 20 m, after 2 seconds.
```

Different letters work the same way: dh/dt is the rate of change of h with respect to t.

## Connections to quadratics

For a quadratic, the turning point found by differentiation is the same as the one found by completing the square. For y = 2x² − 8x + 11: dy/dx = 4x − 8 = 0 gives x = 2 and y = 3, matching 2(x − 2)² + 3. Use whichever the question asks for; where it says "by completing the square", that method is required.

## Common mistakes

- Leaving the constant in: the derivative of x² + 5 is 2x, not 2x + 5.
- Reducing the power but not multiplying by it: the derivative of 4x³ is 12x², not 4x².
- Differentiating brackets without expanding.
- Substituting into y instead of dy/dx when asked for a gradient.
- Giving only the x-coordinates of stationary points.
- Mixing up the second-derivative test: **positive** means **minimum** (the curve bends upwards like a U).

## Exam technique

- **"Find dy/dx"**: simplify each term; no need to factorise.
- **"Find the gradient of the curve at"**: a single number.
- **"Find the coordinates of the turning points"**: both coordinates for each point.
- **"Determine whether each is a maximum or a minimum. Show your working"**: one of the three methods, written out.
- **"Estimate the gradient"** with a graph: a ruled tangent is required, and the answer is accepted within a range.

## Next steps

- [Differentiation revision notes](/resources/cambridge-igcse-mathematics-0580-differentiation-cambridge-igcse-maths-revision-notes/) for the rule and method in brief.
- [Differentiation practice questions](/resources/cambridge-igcse-mathematics-0580-differentiation-cambridge-igcse-maths-practice/) with marked answers.
- [Graphs of functions study guide](/resources/cambridge-igcse-mathematics-0580-graphs-of-functions-cambridge-igcse-maths/) for drawing the curves you differentiate.
- The whole topic: [Algebra and graphs study guide](/resources/igcse-mathematics-algebra-and-graphs/).

## Official syllabus

Cambridge International: *Cambridge IGCSE Mathematics 0580 syllabus* for examination in 2025, 2026 and 2027, Topic 2 Algebra and graphs, E2.12 Differentiation (Extended content only).
