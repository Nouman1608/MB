---
title: "OxfordAQA International GCSE Mathematics: Differentiation, tangents and stationary points (9260)"
seoTitle: "OxfordAQA IGCSE Maths Differentiation Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Differentiation, tangents and stationary points"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9260"]
syllabusSeries: "Version 5.1 (for exams May/June 2018 onwards)"
order: 80
syllabusTopics:
  - qualification: "igcse"
    topic: "algebra-oxfordaqa-igcse-maths"
    subtopic: "functions-graphs-and-calculus-oxfordaqa-igcse-maths"
description: "Study guide to differentiating kxⁿ, finding tangents and locating and classifying stationary points for OxfordAQA International GCSE Mathematics Extension."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
This guide is written for the OxfordAQA International GCSE Mathematics (9260) specification, Version 5.1 (for exams May/June 2018 onwards). It covers the calculus statements A13, A14 and A15 in section 3.2.2, Functions, graphs and calculus. Every statement in this unit is **Extension only**: the specification lists no Core content for A13 to A15. The specification also says all content can be assessed on the Extension papers.

Work through the guide in order, then use the [revision notes](/resources/oxfordaqa-igcse-mathematics-differentiation-tangents-and-stationary-points-revision-notes/) and the [practice questions](/resources/oxfordaqa-igcse-mathematics-differentiation-tangents-and-stationary-points-practice/). Course pages: the [OxfordAQA IGCSE Mathematics hub](/boards/oxfordaqa/igcse/mathematics/) and the [printable checklist](/checklists/oxfordaqa/igcse/mathematics/). To find out where you stand first, try the [free 10-minute diagnostics](/diagnostics/).

## What this unit covers

| Ref | What you must be able to do | Tier |
|---|---|---|
| A13 | Understand and use the gradient function dy/dx | Extension only |
| A13 | Differentiate kxⁿ where n is a positive integer or 0, and sums of such terms, including expressions that need simplifying first | Extension only |
| A14 | Know that the gradient of a function is the gradient of the tangent at that point | Extension only |
| A14 | Work out the equation of a tangent at any point on a curve | Extension only |
| A15 | Use differentiation to find stationary points: maxima, minima and points of inflection | Extension only |
| A15 | Sketch a curve with known stationary points | Extension only |

Straight-line equations (y = mx + c, and finding a line through a point with a given gradient) are taught in A11. Here you simply use them.

## A13: the gradient function

A straight line has one gradient everywhere. A curve does not: it gets steeper and shallower. The **gradient function** tells you the gradient of the curve at any value of x. It is written dy/dx and read "dy by dx". If the curve is y = f(x), the gradient function is also written f′(x). Finding it is called **differentiating**.

### The rule

For a term kxⁿ, where k is a number and n is 0 or a positive integer:

```
y = kxⁿ   →   dy/dx = k × n × xⁿ⁻¹
```

In words: multiply by the power, then reduce the power by 1. Three special cases come up constantly:

- A term in x, such as 7x, differentiates to 7. This is the gradient of the line y = 7x.
- A constant, such as 9, differentiates to 0. A constant is k × x⁰, and 0 × anything is 0. Its graph is a flat line with gradient 0.
- You differentiate each term of a sum separately and keep the + and − signs.

### Worked example 1

Differentiate y = 5x⁴ − 3x² + 7x − 9.

```
5x⁴  →  5 × 4 × x³ = 20x³
−3x² →  −3 × 2 × x = −6x
7x   →  7
−9   →  0
dy/dx = 20x³ − 6x + 7
```

### Simplify first

The rule works on terms of the form kxⁿ only. If the expression is a product in brackets, or a fraction with a single term underneath, multiply out or divide first. Differentiating the brackets "factor by factor" gives the wrong answer.

### Worked example 2

Find dy/dx for each of the following.

(a) y = (2x + 3)(x − 4)

```
Expand:  y = 2x² − 8x + 3x − 12 = 2x² − 5x − 12
dy/dx = 4x − 5
```

(b) y = (6x⁴ − 9x³)/(3x)

```
Divide each term by 3x:  y = 2x³ − 3x²
dy/dx = 6x² − 6x
```

(c) y = x²(5x − 2)

```
Expand:  y = 5x³ − 2x²
dy/dx = 15x² − 4x
```

### Using the gradient function

To find the gradient of the curve at a point, substitute the x-value into dy/dx.

### Worked example 3

The curve is y = 2x³ − 5x + 1. Find the gradient where x = −2.

```
dy/dx = 6x² − 5
x = −2:  6 × (−2)² − 5 = 6 × 4 − 5 = 19
```

The gradient is **19**. Take care with the bracket around −2 before you square it.

To find where a curve has a given gradient, set dy/dx equal to that number and solve for x. This is a direct link to the equation-solving you already know.

### Worked example 4

For y = x² − 6x + 4, find the point where the gradient is 2.

```
dy/dx = 2x − 6
2x − 6 = 2   →   x = 4
y = 16 − 24 + 4 = −4
```

The point is **(4, −4)**. Always find the y-coordinate as well, because the question asks for a point.

## A14: tangents

A **tangent** to a curve at a point is the straight line that touches the curve there and has the same direction as the curve. The key fact:

> The gradient of a curve at a point equals the gradient of the tangent at that point.

So dy/dx at x = a gives the gradient m of the tangent. You then need a point on the line. The tangent passes through the point on the curve, (a, y₁), so you can use y − y₁ = m(x − a).

### Method in steps

1. Find the y-coordinate on the curve at the given x-value.
2. Differentiate and substitute the x-value to get the gradient m.
3. Write y − y₁ = m(x − x₁) and rearrange to y = mx + c, unless the question asks for another form.

### Worked example 5

Find the equation of the tangent to y = x³ − 4x² + 3x + 2 at the point where x = 3.

```
y when x = 3:  27 − 36 + 9 + 2 = 2        point (3, 2)
dy/dx = 3x² − 8x + 3
gradient at x = 3:  27 − 24 + 3 = 6
y − 2 = 6(x − 3)
y = 6x − 16
```

The tangent is **y = 6x − 16**.

You can check by substituting x = 3 into the answer: 6 × 3 − 16 = 2, which matches the point.

### Worked example 6

Find the equation of the tangent to y = x² − 6x + 4 at the point where the gradient is 2.

From worked example 4, the point is (4, −4) and the gradient is 2.

```
y − (−4) = 2(x − 4)
y + 4 = 2x − 8
y = 2x − 12
```

The tangent is **y = 2x − 12**.

## A15: stationary points

A **stationary point** is a point on a curve where the gradient is zero, so dy/dx = 0. The tangent there is horizontal. There are three kinds.

| Kind | Shape near the point | Gradient just before | Gradient just after |
|---|---|---|---|
| Maximum | top of a hill | positive | negative |
| Minimum | bottom of a valley | negative | positive |
| Point of inflection (stationary) | flattens, then carries on the same way | same sign as after | same sign as before |

At a stationary point of inflection the gradient is zero but does not change sign: it is positive on both sides or negative on both sides.

### Method in steps

1. Differentiate and set dy/dx = 0.
2. Solve to find the x-values. Factorising usually makes this easiest.
3. Substitute each x-value into the original equation y = f(x), not into dy/dx, to get the y-coordinate.
4. Work out dy/dx at a value just below and a value just above each stationary x-value. Use values that do not cross another stationary point. Record the signs.
5. Decide the type from the signs, using the table above.

### Worked example 7

Find and classify the stationary points of y = x³ + 3x² − 9x + 2.

```
dy/dx = 3x² + 6x − 9 = 3(x² + 2x − 3) = 3(x − 1)(x + 3)
dy/dx = 0   →   x = 1 or x = −3
x = 1:   y = 1 + 3 − 9 + 2 = −3
x = −3:  y = −27 + 27 + 27 + 2 = 29
```

Now test the gradient either side. The stationary x-values are −3 and 1, so test x = −4, x = 0 and x = 2.

| x | −4 | −3 | 0 | 1 | 2 |
|---|---|---|---|---|---|
| dy/dx | 15 | 0 | −9 | 0 | 15 |
| Sign | + | | − | | + |

Around x = −3 the gradient goes + then −, so (−3, 29) is a **maximum**. Around x = 1 it goes − then +, so (1, −3) is a **minimum**.

### Worked example 8: a point of inflection

Find the stationary point of y = x³ − 6x² + 12x + 1 and say what type it is.

```
dy/dx = 3x² − 12x + 12 = 3(x − 2)²
dy/dx = 0   →   x = 2
y = 8 − 24 + 24 + 1 = 9
```

At x = 1, dy/dx = 3 × 1 = 3, which is positive. At x = 3, dy/dx = 3 × 1 = 3, which is also positive. The gradient is positive on both sides, so **(2, 9) is a point of inflection**. The curve keeps rising, with a momentary flat spot.

Notice that dy/dx = 3(x − 2)² never goes negative. A repeated factor in dy/dx often signals an inflection, but you must still test the signs to be sure.

### Sketching a curve with known stationary points

A sketch shows the overall shape, the stationary points and any intercepts you can find easily. It does not need a scale. To sketch:

1. Mark each stationary point with its coordinates.
2. Find the y-intercept by putting x = 0 into y = f(x).
3. Decide the end behaviour from the highest power. A cubic with a positive x³ term rises on the right and falls on the left. A quartic with a positive x⁴ term rises at both ends.
4. Join the points with a smooth curve that has a horizontal tangent at each stationary point.

### Worked example 9

Sketch y = x³ + 3x² − 9x + 2, using worked example 7.

- Maximum at (−3, 29), minimum at (1, −3).
- y-intercept: x = 0 gives y = 2, so the curve passes through (0, 2).
- Positive x³ term: the curve comes from far down on the left, rises to the maximum at (−3, 29), falls through (0, 2) to the minimum at (1, −3), then rises forever.

```
  y
  |  (-3, 29)
  |    . .
  |   /   \
  |  /     \ (0, 2)
 -+-/-------\---.-----> x
  |          \ /
  |           '
  |         (1, -3)
```

### Worked example 10: a quartic with an inflection

Find and classify the stationary points of y = 3x⁴ − 4x³.

```
dy/dx = 12x³ − 12x² = 12x²(x − 1)
dy/dx = 0   →   x = 0 or x = 1
x = 0:  y = 0        x = 1:  y = 3 − 4 = −1
```

Test x = −1, x = 0.5 and x = 2:

| x | −1 | 0 | 0.5 | 1 | 2 |
|---|---|---|---|---|---|
| dy/dx | −24 | 0 | −1.5 | 0 | 48 |

At x = 0 the gradient is negative on both sides, so **(0, 0) is a stationary point of inflection**. At x = 1 the gradient goes − then +, so **(1, −1) is a minimum**. Sketch: the curve falls from the top left, flattens momentarily at the origin, keeps falling to the minimum at (1, −1), then rises steeply.

## Common errors

- Differentiating a product of brackets factor by factor. Expand first.
- Forgetting that a constant term disappears, or leaving a term in x as 7x instead of 7.
- Writing the new power but forgetting to multiply by the old one, for example 5x⁴ → 5x³.
- Sign slips with negative x-values: (−2)² is 4, not −4.
- Finding the stationary x-value and stopping, so the point has no y-coordinate.
- Substituting stationary x-values into dy/dx instead of y to find the y-coordinate.
- Declaring a maximum or minimum without testing signs. Say what you tested, for example "dy/dx at x = −2 is 15 (positive)".
- Using one gradient for the whole curve. dy/dx changes with x, so substitute the x-value of the point you are asked about.

## Official syllabus

This guide follows the OxfordAQA International GCSE Mathematics (9260) specification, Version 5.1 (for exams May/June 2018 onwards), published by OxfordAQA: section 3.2.2, statements A13, A14 and A15. Check the current specification at oxfordaqa.com for the latest version.
