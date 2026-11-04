---
title: "OxfordAQA International GCSE Mathematics: Differentiation, tangents and stationary points (9260) -- Revision Notes"
seoTitle: "OxfordAQA IGCSE Maths Differentiation Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes with a self-test on gradient functions, tangents and stationary points for OxfordAQA International GCSE Mathematics Extension."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
Quick recall for OxfordAQA International GCSE Mathematics (9260), specification Version 5.1 (for exams May/June 2018 onwards), section 3.2.2, statements A13 to A15. All of it is **Extension only**. For full explanations, start with the [study guide](/resources/oxfordaqa-igcse-mathematics-differentiation-tangents-and-stationary-points/), then test yourself on the [practice questions](/resources/oxfordaqa-igcse-mathematics-differentiation-tangents-and-stationary-points-practice/). Course pages: the [OxfordAQA IGCSE Mathematics hub](/boards/oxfordaqa/igcse/mathematics/) and the [checklist](/checklists/oxfordaqa/igcse/mathematics/). Not sure what to revise first? Take a [free 10-minute diagnostic](/diagnostics/).

## Key results

| Ref | Result | Tier |
|---|---|---|
| A13 | dy/dx is the gradient function: the gradient of the curve at any x | Extension only |
| A13 | kxⁿ → k × n × xⁿ⁻¹ (multiply by the power, then reduce the power by 1) | Extension only |
| A13 | A term kx → k. A constant → 0. Differentiate sums term by term | Extension only |
| A14 | Gradient of the curve at a point = gradient of the tangent there | Extension only |
| A14 | Tangent: y − y₁ = m(x − x₁), with m = dy/dx at that point | Extension only |
| A15 | Stationary point: dy/dx = 0 | Extension only |
| A15 | Maximum, minimum, point of inflection; sketch with known stationary points | Extension only |

## Reading the gradient

- Positive dy/dx: the curve is rising as x increases.
- Negative dy/dx: the curve is falling as x increases.
- Zero dy/dx: the tangent is horizontal, so the point is stationary.
- A larger gradient value, positive or negative, means a steeper curve at that point.

You can use this to check an answer. A maximum must have the curve rising to its left and falling to its right, so the gradient values you tested should be positive then negative.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-differentiation-tangents-and-stationary-points--01-gradient-function.webp" width="900" height="1070" alt="Two graphs share one x axis. The upper graph is y = x squared minus 6x plus 4, with its lowest point at (3, minus 5). The lower graph is its gradient function dy/dx = 2x minus 6, which crosses zero at x = 3. A dashed line at gradient 2 meets the gradient line at x = 4, and reading down to the curve gives the point (4, minus 4), where a tangent has gradient 2." loading="lazy">
  <figcaption>The gradient function is the gradient of the curve at every x; setting it equal to 2 finds the point.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-differentiation-tangents-and-stationary-points--04-quartic-inflection.webp" width="900" height="880" alt="The quartic y = 3x to the power 4 minus 4x cubed is flat at x = 0 and x = 1. The gradient is minus 24 at x = minus 1, minus 1.5 at x = 0.5 and +48 at x = 2. At (0, 0) the gradient is negative on both sides, so it is an inflection; at (1, minus 1) it changes from negative to positive, so it is a minimum." loading="lazy">
  <figcaption>A flat point where the gradient does not change sign is an inflection, not a turning point.</figcaption>
</figure>


## A13: differentiating

Method in steps:

1. Multiply out brackets, or divide each term by the denominator, until every term has the form kxⁿ.
2. Differentiate each term: multiply by the power, then subtract 1 from the power.
3. Keep the signs between terms. Constants vanish.

Worked reminders:

```
y = 4x³ − x² + 6          →  dy/dx = 12x² − 2x
y = (x + 5)(x − 1)        →  y = x² + 4x − 5   →  dy/dx = 2x + 4
y = (10x⁴ + 5x²)/(5x)     →  y = 2x³ + x       →  dy/dx = 6x² + 1
y = 8 − x⁵                →  dy/dx = −5x⁴
```

The last one shows that the minus sign stays attached to the term: −x⁵ gives −5x⁴.

## A14: tangents

Method in steps:

1. Put the x-value into y = f(x) to get the y-coordinate of the point.
2. Put the x-value into dy/dx to get the gradient m.
3. Write y − y₁ = m(x − x₁) and tidy.

Worked reminder: tangent to y = x² − 4x + 7 at x = 3.

```
y = 9 − 12 + 7 = 4        point (3, 4)
dy/dx = 2x − 4  →  m = 2
y − 4 = 2(x − 3)  →  y = 2x − 2
```

If the question gives the gradient instead of the x-value, solve dy/dx = that gradient first, then find y.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-differentiation-tangents-and-stationary-points--02-tangent-equation.webp" width="900" height="910" alt="The cubic y = x cubed minus 4x squared plus 3x plus 2 passes through (3, 2). The gradient there is 6, so a tangent with a step triangle of across 1 and up 6 touches the curve at that point. Its equation is y minus 2 = 6(x minus 3), which gives y = 6x minus 16." loading="lazy">
  <figcaption>The tangent touches the curve at (3, 2) and has the same gradient, 6, as the curve there.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-graphs-in-practical-situations--05-tangent-speed.webp" width="900" height="930" alt="A curved distance-time graph through (0, 0), (1, 1), (2, 4), (3, 9), (4, 16), (5, 25). A tangent at (3, 9) passes through (2, 3) and (5, 21), so its gradient is 18 divided by 3 = 6 m/s. A chord to (5, 25) has gradient 8 and only gives an average." loading="lazy">
  <figcaption>Speed at one instant is the gradient of the tangent, not of a chord.</figcaption>
</figure>


## A15: stationary points

Method in steps:

1. Solve dy/dx = 0 for x. Factorise where possible.
2. Substitute into y = f(x) for the y-coordinate.
3. Find the sign of dy/dx just before and just after each x-value.
4. Classify using the table.

| Signs of dy/dx (before, after) | Type |
|---|---|
| +, − | Maximum |
| −, + | Minimum |
| +, + or −, − | Point of inflection |

Worked reminder: y = 2x³ − 3x² − 36x + 10.

```
dy/dx = 6x² − 6x − 36 = 6(x − 3)(x + 2)
x = 3:   y = 54 − 27 − 108 + 10 = −71
x = −2:  y = −16 − 12 + 72 + 10 = 54
```

Test x = −3, 0, 4: dy/dx = 36, −36, 36. So (−2, 54) is a maximum and (3, −71) is a minimum.

Inflection reminder: y = x³ has dy/dx = 3x², which is zero at x = 0 but positive either side. The origin is a stationary point of inflection.

### Sketching

1. Plot the stationary points with their coordinates.
2. Find the y-intercept (put x = 0).
3. Use the highest power to decide what happens at each end.
4. Draw a smooth curve with a horizontal tangent at each stationary point.

For a quartic with a positive x⁴ term, both ends go up. For a cubic with a positive x³ term, the left end goes down and the right end goes up.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-differentiation-tangents-and-stationary-points--03-stationary-kinds.webp" width="900" height="1090" alt="Three panels show tangents just before, at and just after a stationary point. At the maximum (minus 3, 29) the gradient goes +15, 0, minus 9. At the minimum (1, minus 3) it goes minus 9, 0, +15. At the stationary inflection (2, 9) it goes +3, 0, +3, so it keeps the same sign and the curve keeps rising." loading="lazy">
  <figcaption>A stationary point is classified by the sign of the gradient either side of it.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-mathematics-differentiation-tangents-and-stationary-points--04-sketch-cubic-steps.webp" width="900" height="850" alt="The cubic y = x cubed + 3x squared minus 9x + 2 drawn from its equation with the three sketching steps marked: the stationary points (minus 3, 29) and (1, minus 3) with flat tangents, the y-intercept (0, 2), and arrows showing the curve falling to the left and rising to the right because the x cubed term is positive." loading="lazy">
  <figcaption>A sketch uses the stationary points, the y-intercept and the end behaviour set by the highest power.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-algebra-and-graphs--07-gradient-turning-points.webp" width="900" height="980" alt="The curve y = x cubed minus 12x has a maximum at (minus 2, 16) and a minimum at (2, minus 16), where the tangent is flat and the gradient is 0. At x = 3 the tangent has gradient 15. The gradient is positive, negative, positive across the three sections." loading="lazy">
  <figcaption>Turning points are where the gradient dy/dx is zero.</figcaption>
</figure>


## Worked reminders for harder questions

### Tangent with a given gradient

Find the equations of the tangents to y = x³ − 3x that have gradient 9.

```
dy/dx = 3x² − 3 = 9   →   x² = 4   →   x = 2 or x = −2
x = 2:   y = 8 − 6 = 2       y − 2 = 9(x − 2)   →  y = 9x − 16
x = −2:  y = −8 + 6 = −2     y + 2 = 9(x + 2)   →  y = 9x + 16
```

Two points, two tangents. Do not stop after the positive root.

### Finding an unknown constant

The curve y = x³ + ax + 5 has a stationary point where x = 2. Find a, then the point and its type.

```
dy/dx = 3x² + a
x = 2 gives dy/dx = 0:  12 + a = 0   →   a = −12
y = 8 − 24 + 5 = −11    point (2, −11)
```

Test x = 1: dy/dx = 3 − 12 = −9. Test x = 3: dy/dx = 27 − 12 = 15. The gradient goes − then +, so (2, −11) is a **minimum**.

The key idea is that "stationary at x = 2" means "put x = 2 into dy/dx and set it equal to 0".

### Sign-table template

For fast, tidy working, copy this layout and fill it in for each stationary x-value:

```
x        | a (just below) | stationary x | b (just above)
dy/dx    | value          | 0            | value
sign     | + or −         |              | + or −
```

Choose a and b so that no other stationary x-value lies between them and the one you are testing.

## Must-know distinctions

| Idea | Compare |
|---|---|
| y-value and gradient | y = f(x) gives height. dy/dx gives steepness. Stationary points use dy/dx = 0 to find x and y = f(x) to find the height |
| Stationary point and turning point | Every maximum and minimum is stationary. A stationary point of inflection is stationary but the curve does not turn round |
| Gradient of curve and tangent | Same number at the point of contact. The tangent is a line, the gradient function belongs to the curve |
| Expanding and differentiating | Expand first. The product of the derivatives of two brackets is not the derivative of the product |

## Quick self-test

1. Differentiate y = 9x² − 5x + 11.
2. Differentiate y = x⁴/x.
3. What is the derivative of the constant 7?
4. Find the gradient of y = x³ − 2x² at x = 3.
5. Find the x-values of the stationary points of y = x³ − x² − x.
6. Find the equation of the tangent to y = x² + 5 at x = 2.
7. Find and classify the stationary points of y = x³ − 3x.
8. For y = x⁴ − 2x², state the coordinates of the stationary points and their types.
9. The gradient of a curve at the point P is 0. What can you say about the tangent at P?
10. For y = x² − 6x, find the x-value where the gradient is 0 and state whether it is a maximum, minimum or inflection.

### Answers

1. dy/dx = 18x − 5.
2. y = x³ after simplifying, so dy/dx = 3x².
3. 0.
4. dy/dx = 3x² − 4x = 27 − 12 = 15.
5. dy/dx = 3x² − 2x − 1 = (3x + 1)(x − 1) = 0, so x = −1/3 or x = 1.
6. Point (2, 9). dy/dx = 2x = 4. y − 9 = 4(x − 2), so y = 4x + 1.
7. dy/dx = 3x² − 3 = 3(x − 1)(x + 1). At x = −1, y = 2. At x = 1, y = −2. Testing x = −2, 0, 2 gives gradients 9, −3, 9. So (−1, 2) is a maximum and (1, −2) is a minimum.
8. dy/dx = 4x³ − 4x = 4x(x − 1)(x + 1). Points: (−1, −1), (0, 0), (1, −1). Testing x = −2, −0.5, 0.5, 2 gives gradients −24, 1.5, −1.5, 24. So (−1, −1) and (1, −1) are minima, and (0, 0) is a maximum.
9. The tangent at P is horizontal (parallel to the x-axis).
10. dy/dx = 2x − 6 = 0 gives x = 3. The gradient goes from negative to positive (try x = 2 and x = 4), so it is a minimum, at (3, −9).

## Where marks are usually lost

- Not expanding brackets before differentiating.
- Forgetting to subtract 1 from the power, or forgetting to multiply by the old power.
- Leaving off the y-coordinate when the question asks for the coordinates of a point.
- Putting stationary x-values into dy/dx when finding y.
- Naming a maximum or minimum with no sign test or no working shown. Show the gradient values you tested.
- Choosing test values that jump past a second stationary point.
- Writing a tangent equation with the wrong sign, for example y − 2 = 6(x + 3) when the point is x = 3.
- Leaving a tangent equation as y − y₁ = m(x − x₁) with numbers in it when asked for the form y = mx + c.
- Sketching a stationary point as a sharp corner instead of a smooth curve with a flat tangent.

## Official syllabus

These notes follow the OxfordAQA International GCSE Mathematics (9260) specification, Version 5.1 (for exams May/June 2018 onwards), published by OxfordAQA: section 3.2.2, statements A13, A14 and A15.
