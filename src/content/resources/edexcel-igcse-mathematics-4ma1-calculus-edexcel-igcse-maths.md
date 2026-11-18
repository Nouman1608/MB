---
title: "Edexcel International GCSE Mathematics A (4MA1): Calculus"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Sequences, functions and graphs"
boards: ["edexcel"]
qualifications: ["igcse"]
syllabusCodes: ["4MA1"]
syllabusSeries: "Specification Issue 2, November 2017"
order: 3.4
syllabusTopics:
  - qualification: "igcse"
    topic: "sequences-functions-and-graphs-edexcel-igcse-maths"
    subtopic: "calculus-edexcel-igcse-maths"
description: "Study guide to Higher tier 4MA1 section 3.4: rates of change, differentiating integer powers, gradients, tangents, turning points, kinematics and maxima."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers section 3.4, Calculus, in topic 3 (Sequences, functions and graphs) of the Pearson Edexcel International GCSE Mathematics A (4MA1) specification, Issue 2. The whole section is **Higher tier only**: the Foundation Tier lists 3.4 as "Higher Tier only". It is differentiation only; integration is not in this specification.

The topic-level [Sequences, functions and graphs study guide](/resources/edexcel-igcse-maths-4ma1-sequences-functions-and-graphs/) introduces calculus briefly. This page goes further: why the rule works, how to prepare an expression before differentiating, tangents, and the two main kinds of applied problem. Afterwards, use the [calculus revision notes](/resources/edexcel-igcse-mathematics-4ma1-calculus-edexcel-igcse-maths-revision-notes/) and the [calculus practice questions](/resources/edexcel-igcse-mathematics-4ma1-calculus-edexcel-igcse-maths-practice/).

## What the specification says

| Statement | Students should be taught to |
|---|---|
| Higher 3.4 A | understand the concept of a variable rate of change |
| Higher 3.4 B | differentiate integer powers of x |
| Higher 3.4 C | determine gradients, rates of change, stationary points, turning points (maxima and minima) by differentiation and relate these to graphs |
| Higher 3.4 D | distinguish between maxima and minima by considering the general shape of the graph only |
| Higher 3.4 E | apply calculus to linear kinematics and to other simple practical problems |

Statement D matters: you decide whether a turning point is a maximum or a minimum from the shape of the graph. A second-derivative test is not required.

## A variable rate of change

The gradient of a straight line is the same everywhere. The gradient of a curve changes from point to point; at any point it equals the gradient of the tangent there. On a distance–time curve, that gradient is the speed at that instant, so the speed is a variable rate of change.

Differentiation finds a formula for the gradient. If y is a function of x, the gradient function is written dy/dx ("the derivative of y with respect to x").

## Differentiating integer powers

```
y = xⁿ       →   dy/dx = nxⁿ⁻¹
y = axⁿ      →   dy/dx = naxⁿ⁻¹
y = ax       →   dy/dx = a
y = constant →   dy/dx = 0
```

Multiply by the power, then reduce the power by 1. Differentiate a sum term by term.

**Worked example 1.** Find dy/dx for (a) y = 4x³ − 5x² + 7x − 2 (b) y = 3x − 12/x (c) y = (x + 2)(x − 5) (d) y = (x³ − 4x)/x.

```
(a) dy/dx = 12x² − 10x + 7

(b) rewrite: y = 3x − 12x⁻¹
    dy/dx = 3 − 12 × (−1)x⁻² = 3 + 12x⁻² = 3 + 12/x²

(c) expand first: y = x² − 3x − 10
    dy/dx = 2x − 3

(d) divide first: y = x² − 4
    dy/dx = 2x
```

Products and quotients must be expanded or divided out first: the rule only works term by term on powers of x. In (b), the power of 1/x is −1, and reducing it by 1 gives −2, not 0.

## Gradients and tangents

Substitute the x-coordinate into dy/dx to get the gradient at that point.

**Worked example 2.** The curve C has equation y = x³ − 3x² − 9x + 5. (a) Find the gradient of C at the point where x = 2. (b) Find the equation of the tangent to C at that point.

```
(a) dy/dx = 3x² − 6x − 9
    at x = 2:  12 − 12 − 9 = −9

(b) y at x = 2:  8 − 12 − 18 + 5 = −17, so the point is (2, −17)
    tangent: y = −9x + c;  −17 = −18 + c;  c = 1
    y = −9x + 1
```

The tangent is a straight line, so it uses y = mx + c from section 3.3 with m from the derivative.

## Stationary points and turning points

At a stationary point the gradient is zero, so solve dy/dx = 0. A turning point is a stationary point where the curve changes from going up to going down (a maximum) or from down to up (a minimum).

**Worked example 3.** Find the turning points of C: y = x³ − 3x² − 9x + 5, and state which is the maximum.

```
dy/dx = 3x² − 6x − 9 = 0
x² − 2x − 3 = 0
(x − 3)(x + 1) = 0
x = 3:   y = 27 − 27 − 27 + 5 = −22
x = −1:  y = −1 − 3 + 9 + 5 = 10
```

C is a cubic with a positive x³ coefficient, so it rises, falls, then rises again. The left-hand turning point is the maximum and the right-hand one is the minimum: **(−1, 10) is a maximum** and **(3, −22) is a minimum**.

Shape rules you can quote:

| Curve | Turning points |
|---|---|
| quadratic, positive x² coefficient | one minimum |
| quadratic, negative x² coefficient | one maximum |
| cubic, positive x³ coefficient, two turning points | maximum on the left, minimum on the right |
| cubic, negative x³ coefficient, two turning points | minimum on the left, maximum on the right |
| y = x + k/x (k > 0), for x > 0 | one minimum (the curve is large near x = 0 and for large x) |

## Kinematics

For a particle moving in a straight line, with displacement s from a fixed point O at time t:

```
velocity      v = ds/dt
acceleration  a = dv/dt
```

"At rest" means v = 0. "Initial" means t = 0.

**Worked example 4.** A particle moves along a straight line. Its displacement from O after t seconds is s = 30t − 5t² metres. Find (a) the initial velocity (b) when the particle is at rest, and its displacement then (c) its acceleration.

```
v = ds/dt = 30 − 10t
(a) t = 0:  v = 30 m/s
(b) 30 − 10t = 0  →  t = 3 s;  s = 90 − 45 = 45 m
(c) a = dv/dt = −10 m/s²  (constant)
```

The negative acceleration means the velocity is decreasing. At t = 3 the particle is momentarily at rest at its greatest distance from O, then moves back.

## Simple practical problems

The pattern: write the quantity to maximise or minimise in terms of one variable, differentiate, set the derivative equal to zero, solve, and use the shape to confirm.

**Worked example 5.** A farmer uses 60 m of fencing to make three sides of a rectangular pen; a wall forms the fourth side. The two sides perpendicular to the wall are each x m. Find the maximum area.

```
side parallel to the wall = 60 − 2x
area A = x(60 − 2x) = 60x − 2x²
dA/dx = 60 − 4x = 0  →  x = 15
A = 15 × 30 = 450 m²
```

A is a quadratic in x with a negative x² coefficient, so its graph is an upside-down parabola and x = 15 gives a **maximum**: 450 m².

## Common mistakes

- Differentiating a product or a fraction directly instead of expanding or dividing first.
- Differentiating 12/x as 12 or as −12x⁻¹, instead of −12x⁻².
- Leaving a constant in the derivative: the derivative of 5 is 0.
- Giving the gradient function when a numerical gradient at a point is asked for.
- Finding x at a turning point but not the y-coordinate.
- Not justifying maximum or minimum with the shape of the graph.
- In kinematics, mixing up displacement, velocity and acceleration, or setting s = 0 for "at rest".

## Exam technique

- **"Find dy/dx"**: differentiate each term separately and check its sign; one slip changes every later answer.
- **"Find the coordinates of the turning points"**: give both coordinates of each point.
- **"Determine whether each is a maximum or a minimum. Give a reason"**: refer to the shape, for example "positive cubic, so the left turning point is a maximum".
- **"Show that"** a formula for area or volume: start from the given lengths and build the expression step by step before differentiating.
- Use units in context: velocity in m/s, acceleration in m/s², area in m².

## Next steps

Revise with the [calculus revision notes](/resources/edexcel-igcse-mathematics-4ma1-calculus-edexcel-igcse-maths-revision-notes/), then try the [calculus practice questions](/resources/edexcel-igcse-mathematics-4ma1-calculus-edexcel-igcse-maths-practice/). For drawing tangents and recognising curve shapes, see the [graphs study guide](/resources/edexcel-igcse-mathematics-4ma1-graphs-edexcel-igcse-maths/).

## Official syllabus

Pearson Edexcel International GCSE in Mathematics (Specification A) (4MA1), Specification Issue 2, November 2017. Topic 3, Sequences, functions and graphs: 3.4 Calculus, Higher Tier statements A to E (the Foundation Tier lists 3.4 as Higher Tier only).
