---
title: "AQA A-level Mathematics: Transformations of Graphs (7357) -- Revision Notes"
seoTitle: "AQA A-Level Maths Graph Transformations Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Transformations of Graphs"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 13
syllabusTopics:
  - qualification: "a-level"
    topic: "b-algebra-and-functions-aqa-alevel-maths"
    subtopic: "b9-transformations-of-graphs-aqa-alevel-maths"
description: "Revision notes for AQA A-level Maths B9: the four transformations of y = f(x), order of combinations, asymptotes, a self-test and common lost marks."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These revision notes condense content reference **B9** of the AQA A-level Mathematics (7357) specification, version 1.3 (31 January 2018): the effect of simple transformations on the graph of y = f(x), including y = af(x), y = f(x) + a, y = f(x + a), y = f(ax) and combinations. For the explanations and fully worked examples, read the [Transformations of Graphs study guide](/resources/aqa-a-level-mathematics-transformations-of-graphs/) first.

When you are ready to test yourself, use the [practice questions](/resources/aqa-a-level-mathematics-transformations-of-graphs-practice/). The full course is at the [AQA A-level Mathematics hub](/boards/aqa/a-level/mathematics/), with a [printable checklist](/checklists/aqa/a-level/mathematics/). The [free 10-minute diagnostics](/diagnostics/) show which topics need work.

## The four transformations

| Graph | Describe it as | Point (x, y) becomes |
|---|---|---|
| y = f(x) + a | translation by (0, a) | (x, y + a) |
| y = f(x + a) | translation by (−a, 0) | (x − a, y) |
| y = af(x) | stretch, scale factor a, parallel to the y-axis | (x, ay) |
| y = f(ax) | stretch, scale factor 1/a, parallel to the x-axis | (x/a, y) |
| y = −f(x) | reflection in the x-axis | (x, −y) |
| y = f(−x) | reflection in the y-axis | (−x, y) |

**Inside or outside?**

- Outside the brackets: acts on y, does the obvious thing.
- Inside the brackets: acts on x, does the opposite.

A full description needs the type, the direction or axis, and the number. "Stretch" alone, or "move", is not a full description.

## What stays fixed

| Transformation | Unchanged |
|---|---|
| Stretch parallel to the y-axis | x-intercepts |
| Stretch parallel to the x-axis | y-intercept |
| Reflection in the x-axis | x-intercepts |
| Reflection in the y-axis | y-intercept |
| Any translation | nothing (recalculate the intercepts) |

Under a reflection or a negative scale factor, maxima and minima swap when the reflection is in the x-axis. A reflection in the y-axis does not swap them.

## Method for a sketch

1. Sketch or read y = f(x). List the key points: intercepts, turning points, endpoints, and the equations of any asymptotes.
2. Write the new equation in the form y = af(b(x + c)) + d if it is not already.
3. Write the point map: (x, y) → (x/b − c, ay + d).
4. Apply the map to every key point and to every asymptote.
5. Recalculate any intercept that is not a mapped key point. For the y-intercept, substitute x = 0 in the new equation.
6. Label every mapped point and every asymptote on the sketch.

## Order of combined transformations

For y = af(b(x + c)) + d, write the bracket as b(x + c) and apply the changes in this order.

```
y = a f( b (x + c) ) + d

1. stretch parallel to the x-axis, scale factor 1/b
2. translate by (−c, 0)
3. stretch parallel to the y-axis, scale factor a
4. translate by (0, d)
```

- The x pair (1, 2) and the y pair (3, 4) do not interfere, so either pair can come first.
- Within a pair the order matters. Stretch then translate in the same direction gives a different translation from translate then stretch. For example, f(2x − 1) = f(2(x − ½)) is "stretch, scale factor ½, then translate by (½, 0)" or "translate by (1, 0), then stretch, scale factor ½". Check one point.

## Asymptotes

| Graph | Horizontal asymptote y = k becomes | Vertical asymptote x = h becomes |
|---|---|---|
| y = af(x) + d | y = ak + d | x = h |
| y = f(b(x + c)) | y = k | x = h/b − c |

Example: if y = f(x) has asymptotes x = 3 and y = 1, then y = 2f(x) − 5 has asymptotes x = 3 and y = −3.

## Reading and writing equations

- Completing the square gives a translation of y = x². For y = x² − 10x + 31 = (x − 5)² + 6, the vertex is (5, 6).
- For y = a(x + p)² + q, stretch first, then translate by (−p, q).
- To write the new equation, replace x with the expression that reverses the change. A stretch with scale factor 2 parallel to the x-axis replaces x by x/2. A translation by (3, 0) replaces x by x − 3.

### Worked reminder

The curve y = x² − 4x + 1 has its minimum at (2, −3). Find the equation of the image under a translation by (5, 2) and the new minimum.

```
y = (x − 5)² − 4(x − 5) + 1 + 2 = x² − 14x + 48
minimum: (2 + 5, −3 + 2) = (7, −1)
check: 49 − 98 + 48 = −1
```

## Must-know distinctions

| Compare | Key difference |
|---|---|
| f(x) + 3 and f(x + 3) | Up 3, and left 3. One acts on y, the other on x. |
| 2f(x) and f(2x) | Twice as tall, and half as wide. |
| −f(x) and f(−x) | Reflection in the x-axis, and in the y-axis. |
| f(x) + a and af(x) | A translation moves every point by the same amount. A stretch moves points by amounts that depend on their distance from the axis. |
| Translation and stretch | A translation keeps the shape. A stretch changes it, and points on the invariant axis do not move. |

## Worked reminder: a curve with asymptotes

Sketch y = 2 − 6/(x − 4), starting from y = 1/x.

Write it as −6f(x − 4) + 2 with f(x) = 1/x. Translate by (4, 0), stretch with scale factor 6 parallel to the y-axis, reflect in the x-axis, translate by (0, 2).

```
asymptotes:   x = 0 → x = 4         y = 0 → y = 2
y-intercept:  x = 0 gives 2 − 6/(−4) = 2 + 3/2 = 7/2
x-intercept:  2 − 6/(x − 4) = 0, so x − 4 = 3 and x = 7
```

Because of the reflection, the branches lie in the top-left and bottom-right regions made by the asymptotes, the opposite way round from y = 1/x. The point (1, 1) goes to (5, −4).

## Worked reminder: a trigonometric graph

Describe y = 4 − 3cos(2x) as a transformation of y = cos x, and give its greatest and least values.

- Stretch, scale factor ½, parallel to the x-axis.
- Stretch, scale factor 3, parallel to the y-axis.
- Reflect in the x-axis.
- Translate by (0, 4).

The greatest value is 4 + 3 = 7 and the least is 4 − 3 = 1. In degrees, the period is 180°, so y = 1 at x = 0, 180 and 360, and y = 7 at x = 90 and 270.

## Checking your sketch

- Does each mapped point lie where the map says it should? Test one by substituting its new x-value into the new equation.
- Has every maximum, minimum and asymptote been moved the same way as the rest of the curve?
- If the curve goes through the origin, did the transformation keep it there? Only a stretch or a reflection does.
- Does the sketch show the correct behaviour at the ends, going up or down for large positive and large negative x?

## Quick self-test

1. The point (−2, 5) lies on y = f(x). Give its image on y = f(x) − 3.
2. Give its image on y = f(x + 4).
3. Give its image on y = ½f(x).
4. Give its image on y = f(3x).
5. Give its image on y = f(−x).
6. Give its image on y = −f(x − 1).
7. Describe the graph of y = (x − 2)² − 9 as a transformation of y = x², and give its x-intercepts.
8. State the asymptotes of y = 3/(x − 1) + 2.
9. The curve y = √x is stretched with scale factor ¼ parallel to the x-axis. Write its new equation.
10. Describe fully the transformations that map y = f(x) to y = 3f(x/2).
11. If y = g(x) has the asymptote y = −3, state the horizontal asymptote of y = 2g(x) + 1.
12. State the period of y = cos(4x), in degrees.

### Answers

1. (−2, 2).
2. (−6, 5). The translation is 4 to the left.
3. (−2, 2.5).
4. (−2/3, 5).
5. (2, 5).
6. Translate right by 1: (−1, 5). Then reflect in the x-axis: (−1, −5).
7. Translation by (2, −9). The x-intercepts come from (x − 2)² = 9, so x = 5 and x = −1.
8. x = 1 and y = 2.
9. y = √(4x), which equals 2√x.
10. Stretch, scale factor 2, parallel to the x-axis, and stretch, scale factor 3, parallel to the y-axis. The order of these two does not matter.
11. y = 2(−3) + 1 = −5.
12. 360°/4 = 90°.

## Where marks are usually lost

- Describing a transformation with a single word such as "move" or "stretch", without the direction, axis, vector or scale factor.
- Treating f(x + a) as a translation to the right.
- Writing scale factor 2 for f(2x), when the scale factor is ½.
- Giving two transformations in the wrong order when the order changes the numbers, for example f(2x − 1).
- Translating an asymptote and leaving the intercepts as they were. After a translation, recalculate the intercepts from the new equation.
- Forgetting that a negative multiplier swaps maxima and minima.
- Labelling the images of key points but not the new asymptotes, or sketching a curve that crosses an asymptote.
- Combining a vertical stretch with a vertical translation in the wrong order, so that 2f(x) + 1 becomes 2f(x) + 2.
- Reading the sketch's y-intercept from the old curve instead of substituting x = 0 into the new equation.

## Official syllabus

AQA, *A-level Mathematics (7357) specification*, for teaching from September 2017 onwards, version 1.3 (31 January 2018), section 3.3 (B: Algebra and functions), content reference B9.
