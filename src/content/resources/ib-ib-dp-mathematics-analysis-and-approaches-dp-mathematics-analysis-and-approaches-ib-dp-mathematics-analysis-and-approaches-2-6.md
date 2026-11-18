---
title: "IB DP Mathematics: Analysis and Approaches (AA): 2.6 The quadratic function"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Topic 2 -- Functions"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 2.06
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-6"
description: "Study guide to IB Maths AA 2.6: the three forms of a quadratic, completing the square, finding a quadratic from its features, and quadratic models in context."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This study guide covers section 2.6 of IB Diploma Programme Mathematics: Analysis and Approaches, common to SL and HL. The IB *Mathematics: analysis and approaches guide* (first assessment 2021) lists the quadratic function f(x) = ax² + bx + c, its graph, y-intercept (0, c) and axis of symmetry; the form f(x) = a(x − p)(x − q), with x-intercepts (p, 0) and (q, 0); and the form f(x) = a(x − h)² + k, with vertex (h, k). You are expected to change from one form to another.

The [straight lines, functions, inverses and quadratics guide](/resources/ib-dp-mathematics-aa-sl-lines-functions-quadratics/) shows one conversion in each direction. This page builds the skill fully: completing the square when a ≠ 1, choosing the best form to build a quadratic from given facts, reading a parabola as a transformed y = x², and using the vertex in contexts. Solving quadratic equations and inequalities is the next section, covered in the [2.7 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-7/). Afterwards, use the [2.6 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-6-revision-notes/) and the [2.6 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-6-practice/).

## The shape

The graph of a quadratic is a **parabola**. If a > 0 it opens upwards and has a minimum; if a < 0 it opens downwards and has a maximum. The larger |a| is, the narrower the parabola. Every parabola is symmetric about a vertical line through its vertex, the **axis of symmetry**.

## The three forms

| Form | Shows directly | Axis of symmetry |
|---|---|---|
| ax² + bx + c | y-intercept (0, c) | x = −b/(2a) |
| a(x − p)(x − q) | x-intercepts (p, 0) and (q, 0) | x = (p + q)/2, halfway between the roots |
| a(x − h)² + k | vertex (h, k); maximum or minimum value k | x = h |

The value of a is the same in all three forms. The factorised form exists over the real numbers only if the graph meets the x-axis.

## Completing the square

To change ax² + bx + c into a(x − h)² + k:

1. Take a out of the x² and x terms: a(x² + (b/a)x) + c.
2. Halve the coefficient of x inside the bracket: x² + (b/a)x = (x + b/(2a))² − (b/(2a))².
3. Multiply the subtracted square by a and combine with c.

### Worked example 1: a negative a

Write f(x) = −3x² + 12x − 5 in vertex form, and state its key features.

```
f(x) = −3(x² − 4x) − 5
     = −3[(x − 2)² − 4] − 5
     = −3(x − 2)² + 12 − 5
     = −3(x − 2)² + 7
Vertex (2, 7): a maximum, since a = −3 < 0
Axis of symmetry x = 2;  y-intercept (0, −5)
x-intercepts: (x − 2)² = 7/3, so x = 2 ± √21/3
```

The commonest slip is in the third line: the −4 inside the square bracket is multiplied by −3, giving +12. Check by expanding: −3(x² − 4x + 4) + 7 = −3x² + 12x − 5.

This f has no factorised form with integers, so here the vertex form is the route to the x-intercepts.

## Building a quadratic from given facts

Choose the form that uses the facts you are given, then find a from one more point.

| You are given | Start with |
|---|---|
| Both x-intercepts | a(x − p)(x − q) |
| The vertex | a(x − h)² + k |
| The y-intercept and two other points | ax² + bx + c, with c known |

### Worked example 2: intercepts given

A parabola has x-intercepts (−1, 0) and (5, 0) and y-intercept (0, −10). Find its equation in all three forms.

```
f(x) = a(x + 1)(x − 5)
f(0) = a(1)(−5) = −10, so a = 2
Factorised:  f(x) = 2(x + 1)(x − 5)
Expanded:    f(x) = 2x² − 8x − 10
Axis x = (−1 + 5)/2 = 2;  f(2) = 2(3)(−3) = −18
Vertex form: f(x) = 2(x − 2)² − 18
```

### Using symmetry

If f(1) = f(7), the axis of symmetry lies halfway: x = 4. So two points with equal y-values give the axis immediately. For points (0, 7), (2, −1) and (4, 7), the axis is x = 2, so the vertex is (2, −1); then f(0) = 4a − 1 = 7 gives a = 2 and f(x) = 2(x − 2)² − 1.

## The vertex form as a transformation

y = a(x − h)² + k is y = x² after:

- a vertical stretch with scale factor a (with a reflection in the x-axis if a < 0),
- a horizontal translation of h,
- a vertical translation of k.

For example, y = 2(x + 3)² − 7 is y = x² stretched vertically by factor 2, then translated 3 units left and 7 units down. The vertex moves from (0, 0) to (−3, −7). Transformations in general are section 2.11.

## Quadratic models

When a quantity is modelled by a quadratic, the vertex gives the greatest or least value and where it occurs.

### Worked example 3: projectile

A ball's height is h(t) = −5t² + 20t + 2 metres after t seconds.

```
h(t) = −5(t² − 4t) + 2 = −5(t − 2)² + 22
Maximum height 22 m at t = 2 s
h(0) = 2: the ball is thrown from 2 m above the ground
Lands when −5(t − 2)² + 22 = 0: (t − 2)² = 4.4, t = 2 + √4.4 = 4.10 s
```

The root 2 − √4.4 is negative and is rejected because t ≥ 0.

### Worked example 4: revenue

In an invented model, a stall sells 400 − 20p items per day at a price of p dollars. Find the price that maximises revenue.

```
R(p) = p(400 − 20p) = −20p² + 400p = −20p(p − 20)
Zeros p = 0 and p = 20, so the axis is p = 10
R(10) = 10 × 200 = 2000
```

The best price is $10, giving revenue $2000 per day. Using the zeros to find the axis avoids completing the square entirely.

## Common mistakes

- Sign of h: a(x + 3)² + k has vertex at x = −3, not 3.
- Completing the square with a ≠ 1 without multiplying the subtracted square by a.
- Using c as the vertex's y-coordinate; c is the y-intercept.
- Forgetting a when building a quadratic from its roots, writing (x + 1)(x − 5) only.
- Keeping a negative time or length in a model.
- Giving a vertex as a maximum when a > 0.

## Exam technique

- **Write down the vertex / intercepts:** read directly from the right form; no working needed.
- **Write in the form a(x − h)² + k:** show the completing-the-square steps on Paper 1.
- **Find the equation:** state the form you start from, substitute the point, and give a.
- **Hence:** use the form you have just found, for example to write down the maximum value.
- Check any conversion by expanding back.

## Where to go next

Condense this with the [2.6 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-6-revision-notes/), then try the [2.6 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-6-practice/). Move on to the quadratic formula and the discriminant in the [2.7 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-7/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus section SL 2.6.
