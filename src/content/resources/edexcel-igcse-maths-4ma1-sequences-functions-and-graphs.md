---
title: "Edexcel International GCSE Mathematics A 4MA1: Sequences, functions and graphs -- Study Guide"
seoTitle: "Edexcel IGCSE Maths 4MA1 Sequences and Graphs Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Sequences, functions and graphs"
boards: ["edexcel"]
qualifications: ["igcse"]
syllabusCodes: ["4MA1"]
syllabusSeries: "Specification Issue 2, November 2017"
order: 3
syllabusTopics:
  - qualification: "igcse"
    topic: "sequences-functions-and-graphs-edexcel-igcse-maths"
  - qualification: "igcse"
    topic: "sequences-functions-and-graphs-edexcel-igcse-maths"
    subtopic: "sequences-edexcel-igcse-maths"
  - qualification: "igcse"
    topic: "sequences-functions-and-graphs-edexcel-igcse-maths"
    subtopic: "function-notation-edexcel-igcse-maths"
  - qualification: "igcse"
    topic: "sequences-functions-and-graphs-edexcel-igcse-maths"
    subtopic: "graphs-edexcel-igcse-maths"
  - qualification: "igcse"
    topic: "sequences-functions-and-graphs-edexcel-igcse-maths"
    subtopic: "calculus-edexcel-igcse-maths"
description: "Study guide for Edexcel IGCSE Maths A 4MA1 Topic 3: sequences, functions, straight-line and curved graphs, and calculus, with full worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-09-27
featured: false
---

This study guide covers Topic 3, **Sequences, functions and graphs** (sections 3.1–3.4), of the Pearson Edexcel International GCSE Mathematics A (4MA1) specification, Issue 2 (November 2017), for the January and June series examined on that specification. 4MA1 is tiered: Foundation papers 1F and 2F, Higher papers 1H and 2H, and a calculator may be used on all of them. Sections 3.2 (function notation) and 3.4 (calculus) are **Higher tier only**, as are the extra Higher statements in 3.1 and 3.3; the rest is on both tiers, and Higher questions assume the Foundation content.

When you have worked through it, test your recall with the [revision notes](/resources/edexcel-igcse-maths-4ma1-sequences-functions-and-graphs-revision-notes/) and then try the [practice questions](/resources/edexcel-igcse-maths-4ma1-sequences-functions-and-graphs-practice/). The [Edexcel IGCSE Mathematics course hub](/boards/edexcel/igcse/mathematics/) links the rest of the course, and the [printable checklist](/checklists/edexcel/igcse/mathematics/) lists every specification statement.

## What this topic covers

| Section | What you must be able to do | Tier |
|---|---|---|
| 3.1 Sequences | Generate terms from term-to-term and position-to-term rules; find the rule; write the nth term of an arithmetic sequence | Both |
| 3.1 Sequences | Use first term a and common difference d; nth term = a + (n − 1)d; sum of n terms Sₙ | Higher tier only |
| 3.2 Function notation | Functions as mappings; f(x) and f : x ↦ notation; domain and range; composite fg; inverse f⁻¹ | Higher tier only |
| 3.3 Graphs | Coordinates, midpoints, gradient, y = mx + c, conversion and travel graphs, plotting linear and quadratic graphs | Both |
| 3.3 Graphs | Cubic, reciprocal and trig graphs; transformations; tangents to curves; intersections; parallel and perpendicular lines | Higher tier only |
| 3.4 Calculus | Differentiate integer powers of x; gradients, turning points, kinematics | Higher tier only |

## 3.1 Sequences

A **term-to-term** rule tells you how to get from one term to the next. A **position-to-term** rule gives the nth term directly from n.

- Start at 2 and multiply by 3: 2, 6, 18, 54, …
- nth term n² + 1: substitute n = 1, 2, 3, 4 to get 2, 5, 10, 17.

You should recognise odd numbers, even numbers, square numbers, multiples and powers (such as 1, 2, 4, 8, …) on sight.

In an **arithmetic sequence** the terms go up or down by the same amount each time. The nth term is a linear expression: (difference) × n + (adjustment).

**Worked example (both tiers).** Find the nth term of 5, 11, 17, 23, … Is 95 a term? Is 200?

```
Difference = 6, so the nth term starts 6n.
6n for n = 1 gives 6; the first term is 5, so subtract 1.
nth term = 6n − 1
6n − 1 = 95  →  6n = 96  →  n = 16      95 is the 16th term.
6n − 1 = 200 →  6n = 201 →  n = 33.5    not a whole number, so 200 is not a term.
```

### Higher tier only: a, d and Sₙ

For an arithmetic sequence with first term a and common difference d:

- nth term = a + (n − 1)d (you must know this; it is not on the formulae sheet)
- Sₙ = (n/2)[2a + (n − 1)d] (this is on the Higher tier formulae sheet)

**Worked example.** The 3rd term of an arithmetic sequence is 11 and the 8th term is 31. Find a and d, then the sum of the first 20 terms. How many terms are needed for the sum to exceed 1000?

```
a + 2d = 11
a + 7d = 31
Subtract: 5d = 20, so d = 4 and a = 11 − 8 = 3.
S₂₀ = (20/2)[2(3) + 19(4)] = 10 × 82 = 820
Sₙ = (n/2)[6 + 4(n − 1)] = n(2n + 1)
n = 22: 22 × 45 = 990   (not enough)
n = 23: 23 × 47 = 1081  (exceeds 1000)
```

**23 terms** are needed. Always check the whole numbers either side rather than rounding a decimal solution.

## 3.2 Function notation (Higher tier only)

A **function** maps each element of one set (the inputs) to exactly one element of another set (the outputs). You will see two notations that mean the same thing: f(x) = 3x − 5 and f : x ↦ 3x − 5.

- The **domain** is the set of allowed inputs. Exclude any value that makes you divide by zero or take the square root of a negative number. For h(x) = 4/(x + 3), exclude x = −3. For k(x) = √(x − 2), the domain is x ≥ 2.
- The **range** is the set of outputs. For g(x) = x² + 1, x² is never negative, so the range is g(x) ≥ 1.

**Composite functions.** fg(x) means "do g first, then f". Work from the inside out.

**Inverse functions.** f⁻¹ undoes f. Write y = f(x), rearrange to make x the subject, then swap the letters.

**Worked example.** f(x) = 3x − 5 and g(x) = x² + 1.

```
fg(2): g(2) = 5, then f(5) = 10
gf(2): f(2) = 1, then g(1) = 2        (so fg and gf are usually different)
fg(x) = 3(x² + 1) − 5 = 3x² − 2
f⁻¹: y = 3x − 5  →  x = (y + 5)/3  →  f⁻¹(x) = (x + 5)/3
```

## 3.3 Graphs

### Both tiers

- Coordinates are written (x, y): across first, then up. Points can lie in any of the four quadrants.
- **Midpoint** of (x₁, y₁) and (x₂, y₂) is ((x₁ + x₂)/2, (y₁ + y₂)/2). For (−3, 4) and (5, −2) the midpoint is (1, 1).
- **Gradient** = (increase in y) ÷ (increase in x). Higher tier only: calculate it from two given points, e.g. from (−1, 7) to (3, −5): (−5 − 7) ÷ (3 − (−1)) = −12 ÷ 4 = −3.
- **y = mx + c** is a straight line with gradient m and y-intercept (0, c): gradient 6 through (0, 2) gives y = 6x + 2. Higher tier only: the line with gradient −3 through (2, 1) has 1 = −3(2) + c, so c = 7 and the equation is y = −3x + 7.
- Special lines: x = k is vertical, y = c is horizontal, y = x passes through the origin at 45°. An equation such as 2x + 5y = 10 is also a straight line; rearrange to y = −(2/5)x + 2 to read off m and c.
- **Distance–time graphs**: the gradient is the speed; a horizontal section means stationary. **Speed–time graphs**: the gradient is the acceleration. **Conversion graphs** (for example currency) are straight lines through the origin; read across and down carefully.

To plot a quadratic, complete a table of values, plot the points and join them with a smooth curve (never straight segments). For y = x² − 2x − 3:

| x | −2 | −1 | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|---|---|
| y | 5 | 0 | −3 | −4 | −3 | 0 | 5 |

The curve is symmetrical about x = 1, with minimum point (1, −4).

### Higher tier only: curves you must recognise

- **Cubics** y = Ax³ + Bx² + Cx + D: for A > 0 the curve rises from bottom left to top right, often with one maximum then one minimum.
- **Reciprocal** curves such as y = 1/x (x ≠ 0) have two branches and never touch the axes. Terms in 1/x² also appear (for example w = 5/d², d ≠ 0).
- **y = sin x**: period 360°, maximum 1 at 90°, minimum −1 at 270°, crosses zero at 0°, 180°, 360°.
- **y = cos x**: period 360°, maximum 1 at 0° and 360°, minimum −1 at 180°.
- **y = tan x**: period 180°, zero at 0° and 180°, with vertical asymptotes at 90° and 270°.

Use symmetry to find second solutions. sin x = 0.5 gives x = 30° from the calculator; the sine curve is symmetrical about x = 90°, so the other solution between 0° and 360° is 180° − 30° = 150°.

### Higher tier only: transformations

| New graph | Effect on y = f(x) |
|---|---|
| y = f(x) + a | translation by vector (0, a): up a |
| y = f(x + a) | translation by vector (−a, 0): left a |
| y = af(x) | stretch parallel to the y-axis, scale factor a |
| y = f(ax) | stretch parallel to the x-axis, scale factor 1/a |

The specification applies these to linear, quadratic, sine and cosine functions. For example, y = (x − 3)² + 2 is y = x² translated 3 right and 2 up, so its minimum is (3, 2). The graph of y = x² translated by the vector (−1, 4) is y = (x + 1)² + 4. y = 2 sin x has maximum (90°, 2), and y = sin 2x repeats every 180°.

### Higher tier only: tangents, intersections and perpendicular lines

**Gradient of a curve at a point:** draw the tangent at that point with a ruler, pick two points far apart on the tangent, and calculate (change in y) ÷ (change in x).

**Intersections.** Where y₁ (linear) meets y₂ (non-linear), the x-coordinates solve y₂ − y₁ = 0.

**Worked example.** Find where y = x² − 4x + 1 meets y = 2x − 7.

```
x² − 4x + 1 = 2x − 7
x² − 6x + 8 = 0
(x − 2)(x − 4) = 0  →  x = 2 or x = 4
y = 2(2) − 7 = −3 and y = 2(4) − 7 = 1
Points: (2, −3) and (4, 1)
```

**Parallel and perpendicular lines.** Parallel lines have equal gradients. If two lines are perpendicular, the product of their gradients is −1, so the new gradient is the negative reciprocal.

**Worked example.** Find the line through (6, 1) perpendicular to 3x + 2y = 6.

```
2y = −3x + 6  →  gradient −3/2
Perpendicular gradient = 2/3
y − 1 = (2/3)(x − 6)  →  y = (2/3)x − 3
```

## 3.4 Calculus (Higher tier only)

The gradient of a curve changes from point to point: it is a **variable rate of change**. Differentiating gives a formula for that gradient.

If y = axⁿ, then dy/dx = naxⁿ⁻¹, for any integer n (including negative powers). A constant differentiates to 0. Rewrite 16/x as 16x⁻¹ before differentiating.

**Stationary (turning) points** are where dy/dx = 0. The specification asks you to decide maximum or minimum **from the general shape of the graph**.

**Worked example.** Find the turning points of y = 2x³ − 9x² + 12x − 4 and say which is which.

```
dy/dx = 6x² − 18x + 12 = 6(x − 1)(x − 2)
dy/dx = 0  →  x = 1 or x = 2
x = 1: y = 2 − 9 + 12 − 4 = 1
x = 2: y = 16 − 36 + 24 − 4 = 0
```

The x³ coefficient is positive, so the curve rises, turns down, then rises again: **(1, 1) is a maximum and (2, 0) is a minimum**.

**Worked example with a negative power.** For y = x² + 16/x, dy/dx = 2x − 16x⁻² = 2x − 16/x². Setting 2x = 16/x² gives x³ = 8, so x = 2 and y = 4 + 8 = 12. For x > 0 the curve is large near x = 0 and large for big x, so (2, 12) is a minimum.

### Kinematics

For a particle moving in a straight line with displacement s at time t:

- velocity v = ds/dt
- acceleration a = dv/dt
- "at rest" means v = 0.

**Worked example.** s = t³ − 9t² + 24t metres, t seconds.

```
v = 3t² − 18t + 24 = 3(t − 2)(t − 4)   at rest when t = 2 s and t = 4 s
a = 6t − 18                            a = −6 m/s² at t = 2, a = 6 m/s² at t = 4
s(2) = 8 − 36 + 48 = 20 m;  s(4) = 64 − 144 + 96 = 16 m
```

The same method solves other practical problems: write the quantity as a function of one variable, differentiate, set the derivative to zero and interpret the answer in context.

## Common errors

- Writing the nth term of 5, 11, 17, … as n + 6. The difference goes in front of n.
- Using Sₙ when the question asks for a single term, or the nth-term formula when it asks for a sum.
- Working out fg(x) as g first applied last. In fg, g acts first.
- Forgetting to swap x and y at the end when finding f⁻¹.
- Reading y = f(x + 3) as a shift of 3 to the right. It moves the graph 3 to the left.
- Joining plotted points on a quadratic with straight lines, or drawing a flat-bottomed "U".
- Differentiating 16/x as 16 instead of −16/x².
- Stopping at the x-coordinate of a turning point when the question asks for the coordinates.

## Next steps

- Condensed recall and a self-test: [revision notes](/resources/edexcel-igcse-maths-4ma1-sequences-functions-and-graphs-revision-notes/)
- Twelve mark-scheme style questions: [practice questions](/resources/edexcel-igcse-maths-4ma1-sequences-functions-and-graphs-practice/)
- Find your weak spots quickly: [free diagnostics](/diagnostics/)

## Official syllabus

Pearson Edexcel International GCSE in Mathematics (Specification A) (4MA1), Specification, Issue 2, November 2017, Pearson Education Limited (first assessment June 2018). Topic 3, Sequences, functions and graphs, sections 3.1–3.4 (Foundation and Higher tier content).
