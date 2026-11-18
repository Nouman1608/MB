---
title: "Cambridge O Level Mathematics (4024): Graphs of Functions"
resourceType: "study-guides"
subject: "mathematics"
level: ["o-levels"]
topic: "Algebra and graphs"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 2.10
syllabusTopics:
  - qualification: "o-level"
    topic: "algebra-and-graphs"
    subtopic: "graphs-of-functions"
description: "Study guide to section 2.10 of Cambridge O Level Mathematics 4024: tables of values, plotting axⁿ and abˣ + c curves, graphical solutions and tangents."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into section 2.10, Graphs of functions, in the Algebra and graphs topic of the Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027. The syllabus is not tiered, so every candidate meets all of it. For a wider overview that also covers sketching, see [Graphs of Functions and Sketching Curves](/resources/graphs-of-functions-and-sketching-curves/). When you have worked through this page, use the [graphs of functions revision notes](/resources/cambridge-o-level-mathematics-4024-graphs-of-functions-revision-notes/) and the [graphs of functions practice questions](/resources/cambridge-o-level-mathematics-4024-graphs-of-functions-practice/).

## What section 2.10 asks for

| Outcome | What you must be able to do |
|---|---|
| 2.10 (1) | Construct tables of values, and draw, recognise and interpret graphs of functions of the form axⁿ (sums of no more than three such terms) and abˣ + c |
| 2.10 (2) | Solve associated equations graphically, including finding and interpreting roots, for example where a line meets a curve |
| 2.10 (3) | Draw and interpret graphs representing exponential growth and decay problems |
| 2.10 (4) | Estimate gradients of curves by drawing tangents |

In the axⁿ terms, n can be −2, −1, −½, 0, ½, 1, 2 or 3, and a is a rational number. In abˣ + c, a and c are rational and b is a positive integer. So y = x³ − 2x + 1, y = 2x + 5/x and y = 3 × 2ˣ − 4 are all in range.

## Knowing what each power does

Before you calculate anything, it helps to know how each kind of term behaves, because that tells you whether your table "looks right".

| Term | Meaning | Behaviour to expect |
|---|---|---|
| ax⁰ | the constant a | shifts the whole curve up or down |
| ax, ax², ax³ | straight line, parabola, cubic | defined for every x |
| ax^½ | a√x | only defined for x ≥ 0; rises more and more slowly |
| ax⁻¹ | a/x | not defined at x = 0; large when x is near 0 |
| ax^−½ | a/√x | only defined for x > 0; large near 0, falls towards 0 |
| ax⁻² | a/x² | not defined at x = 0; same sign either side of 0 |
| abˣ + c | exponential | approaches the line y = c on one side |

Two consequences matter in the exam. First, a table for a function with a negative power never includes x = 0, and the graph must not be drawn across x = 0. Second, a term with a square root restricts x to positive values, so the table will start at 0 or above.

## Building a table of values

When a function has two or three terms, work out each term in its own row, then add the rows. This makes slips easy to find and lets you check against any values the question has already filled in.

### Worked example 1

Complete a table of values for y = x² − 3/x for x = 0.5, 1, 1.5, 2, 2.5 and 3.

| x | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 |
|---|---|---|---|---|---|---|
| x² | 0.25 | 1 | 2.25 | 4 | 6.25 | 9 |
| −3/x | −6 | −3 | −2 | −1.5 | −1.2 | −1 |
| y | −5.75 | −2 | 0.25 | 2.5 | 5.05 | 8 |

For small x the −3/x term dominates, so y is very negative at x = 0.5; for larger x the x² term takes over. The x-axis is crossed between x = 1 and x = 1.5, because y changes sign there.

**Plotting.** Plot each point with a small cross, then join the points with one smooth curve. Do not use a ruler between points, and do not flatten the curve between the plotted crosses. Most questions give the scale; if you choose it, make the graph fill at least half the grid in each direction.

## Solving equations graphically

A graph lets you solve an equation by reading x-coordinates where two graphs meet. There are three standard situations.

- **Roots of the function itself.** To solve x² − 3/x = 0, read where the curve meets the x-axis. From the graph in worked example 1 this is x ≈ 1.4 (the exact value is the cube root of 3, about 1.44).
- **A horizontal line.** To solve x² − 3/x = 2, draw y = 2 and read the x-coordinate where it meets the curve.
- **A sloping line.** To solve x² − 3/x = x + 1, draw y = x + 1 and read where it meets the curve.

The skill examiners test most is rearranging an unfamiliar equation into "curve = line".

### Worked example 2

Using the graph of y = x² − 3/x, find the straight line you would draw to solve x³ − 2x − 3 = 0, and estimate the solution for x > 0.

The curve has a 3/x term, so divide every term of the equation by x (allowed because x ≠ 0):

```
x³ − 2x − 3 = 0
x² − 2 − 3/x = 0
x² − 3/x = 2
```

The left-hand side is the curve, so draw the line **y = 2**. It meets the curve at x ≈ 1.9. A careful drawing gives 1.9; the true value is about 1.89.

The same method with x³ − x² − x − 3 = 0 gives x² − x − 1 − 3/x = 0, so x² − 3/x = x + 1, and the line to draw is **y = x + 1**. It meets the curve at x ≈ 2.1.

**Interpreting roots.** In context, state what a root means in words, and reject roots that make no sense, such as a negative time.

## Exponential growth and decay

In outcome 1, b in abˣ + c is a positive integer, so with a > 0 the curve shows growth. Outcome 3 applies the same idea to growth and decay problems in context, where the multiplier is often a decimal: greater than 1 (such as 1.05) for growth, between 0 and 1 (such as 0.9) for decay. The constant c is the level the curve approaches. In these problems you draw the graph from a table, then read values and rates from it.

### Worked example 3

A cup of tea cools in a room. Its temperature T °C after t minutes is modelled by T = 60 × 0.9ᵗ + 20 (an invented model).

| t | 0 | 5 | 10 | 15 | 20 | 25 | 30 |
|---|---|---|---|---|---|---|---|
| T | 80 | 55.4 | 40.9 | 32.4 | 27.3 | 24.3 | 22.5 |

(a) **Initial temperature.** At t = 0, 0.9⁰ = 1, so T = 60 + 20 = 80 °C.

(b) **When is the tea 50 °C?** Draw T = 50 across to the curve and read down: t ≈ 6.6 minutes.

(c) **Long-term behaviour.** As t increases, 0.9ᵗ gets closer to 0, so T gets closer to 20 °C, the room temperature. The curve approaches T = 20 but never reaches it.

The multiplier 0.9 means the excess over 20 °C falls by 10% every minute. That is why the curve falls steeply at first and then levels off.

## Estimating a gradient with a tangent

The gradient of a curve changes from point to point. At a chosen point it equals the gradient of the tangent there: the straight line that touches the curve at that point and has the same direction.

**Method.**

1. Mark the point on the curve.
2. Place a ruler so it touches the curve at that point without cutting across it. Check that the curve sits on the same side of the ruler just before and just after the point.
3. Draw a long tangent line, so the two points you read from it are far apart.
4. Pick two points on the tangent (not on the curve) and calculate change in y ÷ change in x.

### Worked example 4

Estimate the rate of cooling at t = 10 minutes in worked example 3.

The point on the curve is (10, 40.9). A tangent drawn there passes close to (0, 63) and (20, 19).

```
gradient ≈ (19 − 63) ÷ (20 − 0) = −44 ÷ 20 = −2.2
```

The tea is cooling at about **2.2 °C per minute** at that moment. The negative sign shows the temperature is decreasing. Tangent answers are estimates; a value far from −2.2 suggests the line cuts the curve rather than touching it.

Always give the units of a gradient in context: units of y per unit of x.

## Common mistakes

- Including x = 0 in a table for a function with a 1/x or 1/x² term, or joining the two branches of such a graph across x = 0.
- Calculator errors with negative values, for example squaring −2 without brackets and getting −4.
- Joining points with straight segments, or drawing a curve that does not pass through the plotted points.
- Drawing the wrong line because the equation was rearranged with an error. Check by substituting a point from your line back into both sides.
- Reading a gradient from two points on the curve. That gives the gradient of a chord, not of the tangent.
- Leaving out the context and units when interpreting a gradient or a root.

## Exam technique for the command words

- **Complete the table:** give values to the accuracy the table already uses, usually 1 or 2 decimal places.
- **Draw the graph:** plot every point accurately (examiners check them) and draw a single smooth curve through them over the stated range only.
- **Use your graph to solve:** draw any line you need on the grid and read the answer from your graph, not from a calculator. Show the line.
- **By drawing a suitable straight line:** write the rearrangement so the line's equation is clear, then draw it.
- **Estimate the gradient:** the tangent must be visible on the graph, with the two points you used clear.

## Next steps

Test yourself with the [graphs of functions practice questions](/resources/cambridge-o-level-mathematics-4024-graphs-of-functions-practice/), then use the [graphs of functions revision notes](/resources/cambridge-o-level-mathematics-4024-graphs-of-functions-revision-notes/) for quick recall. Section 2.11 follows on with recognising shapes without a table; see [sketching curves](/resources/cambridge-o-level-mathematics-4024-sketching-curves/).

## Syllabus reference

Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027, published by Cambridge University Press & Assessment. The relevant section is 2.10 Graphs of functions.
