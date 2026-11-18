---
title: "OCR GCSE Mathematics (J560): Transformations of curves and their equations"
resourceType: "study-guides"
subject: "mathematics"
level: ["gcse"]
topic: "Topic 7 – Graphs of equations and functions"
boards: ["ocr"]
qualifications: ["gcse"]
syllabusCodes: ["J560"]
syllabusSeries: "Version 2.1 (August 2026), for first assessment in 2017"
order: 7.3
syllabusTopics:
  - qualification: "gcse"
    topic: "graphs-of-equations-and-functions-ocr-gcse-maths"
    subtopic: "transformations-of-curves-and-their-equations-ocr-gcse-maths"
description: "OCR GCSE Maths J560 section 7.03 in depth (Higher tier): translations and reflections of curves, tracking key points, asymptotes and equations."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers section 7.03, Transformations of curves and their equations, of the OCR GCSE (9-1) Mathematics J560 specification, Version 2.1 (August 2026), for first assessment in 2017. The whole of this section sits in the Higher column of the specification, so it is **Higher tier only**.

The [exponential and trigonometric graphs and transformations guide](/resources/ocr-gcse-mathematics-exponential-and-trigonometric-graphs-and/) introduces 7.03 alongside the graphs it uses. This page goes further on 7.03 alone: the four rules stated without function notation, tracking key points and asymptotes, why the horizontal shift goes the "wrong" way, how the order of a reflection and a translation changes the result, translating trigonometric and reciprocal graphs, and working backwards from a graph to its equation. Condense it with the [7.03 revision notes](/resources/ocr-gcse-mathematics-j560-transformations-of-curves-and-their-equations-ocr-gcse-maths-revision-notes/) and test yourself with the [7.03 practice questions](/resources/ocr-gcse-mathematics-j560-transformations-of-curves-and-their-equations-ocr-gcse-maths-practice/).

## What the specification asks

Section 7.03a, Translations and reflections: "Identify and sketch translations and reflections of a given graph (or the graph of a given equation)." The specification's examples are sketching y = sin x + 2, y = (x + 2)² − 1 and y = −x².

Two notes in the specification shape how questions are written:

- **Knowledge of function notation will not be required.** So questions give equations such as y = x² or y = sin x and ask about related equations, rather than using f(x).
- It links to 6.05a (functions). Thinking of a transformation as an extra step before or after the original rule helps explain the rules below.

Stretches are not listed in 7.03a, so this page covers translations and reflections only.

## The four rules

Start from any graph y = (expression in x).

| Change to the equation | Effect on the graph | Point (p, q) moves to |
|---|---|---|
| Add a to the whole right-hand side: y = (expression) + a | Translation by vector (0 over a): up a (down if a is negative) | (p, q + a) |
| Replace every x by (x + a) | Translation by vector (−a over 0): left a (right if a is negative) | (p − a, q) |
| Make the whole right-hand side negative: y = −(expression) | Reflection in the x-axis | (p, −q) |
| Replace every x by −x | Reflection in the y-axis | (−p, q) |

Changes **outside** the expression act on y and behave as you would expect. Changes **inside**, to x, act on x and behave the opposite way: x + 2 moves the graph left, x − 2 moves it right.

**Why the horizontal shift is "backwards".** On y = x², the turning point is where the inside of the bracket is 0. For y = (x + 2)², the inside is 0 when x = −2. So the turning point has moved to x = −2, which is to the left. The +2 means the graph reaches each height 2 units sooner.

## Tracking key points

Sketching a transformed curve means moving its key features: turning points, intercepts and asymptotes. Move them first, then draw the shape through them.

**Worked example 1.** The curve y = x² passes through (0, 0) and (2, 4). Give the images of these points for each equation.

| Equation | Transformation | (0, 0) → | (2, 4) → |
|---|---|---|---|
| y = x² − 5 | Translation (0 over −5) | (0, −5) | (2, −1) |
| y = (x − 3)² | Translation (3 over 0) | (3, 0) | (5, 4) |
| y = −x² | Reflection in the x-axis | (0, 0) | (2, −4) |
| y = (−x)² | Reflection in the y-axis | (0, 0) | (−2, 4) |

The last row gives back y = x², because the parabola is symmetrical about the y-axis. Reflecting it in the y-axis changes nothing.

**Worked example 2.** Sketch y = (x − 3)² + 2. State the turning point and the y-intercept.

```
from y = x²:  replace x by x − 3  →  right 3
              add 2               →  up 2
translation by vector (3 over 2)
turning point (0, 0) → (3, 2)
y-intercept: x = 0 gives (0 − 3)² + 2 = 11, so (0, 11)
```

The minimum point (3, 2) is above the x-axis, so the curve does not cross the x-axis. A sketch should show the U shape, the turning point and the intercept (0, 11).

## Order matters when reflecting and translating

**Worked example 3.** Compare y = −x² + 4 with y = −(x² + 4).

```
y = −x² + 4:     reflect y = x² in the x-axis, then up 4
                 maximum (0, 4); crosses the x-axis where x² = 4, at (−2, 0) and (2, 0)

y = −(x² + 4):   up 4 first, then reflect in the x-axis
                 this is y = −x² − 4; maximum (0, −4); never crosses the x-axis
```

Expand or simplify the equation before deciding which transformations are happening and in what order. A minus sign in front of a bracket reflects everything inside it.

## Curves with several roots

**Worked example 4.** The curve y = x³ − 4x crosses the x-axis at −2, 0 and 2. Find where y = (x − 1)³ − 4(x − 1) crosses the x-axis.

Every x has been replaced by (x − 1), so the curve is translated 1 unit right. Each root moves right 1: the new roots are −1, 1 and 3.

Check one: x = 3 gives 2³ − 4(2) = 8 − 8 = 0.

Notice that (x − 1) replaces **every** x. Writing y = (x − 1)³ − 4x would be a different curve, not a translation.

## Trigonometric graphs

The specification's example y = sin x + 2 is a translation by (0 over 2): the wave now runs between 1 and 3 and crosses the y-axis at (0, 2).

**Worked example 5.** Describe the transformation from y = sin x to y = sin(x + 90°), and explain why the result is the graph of y = cos x.

```
x replaced by x + 90  →  translation by (−90 over 0), 90° to the left
key points of y = sin x:   (0, 0)   (90, 1)   (180, 0)   (270, −1)   (360, 0)
after moving left 90:      (−90, 0) (0, 1)    (90, 0)    (180, −1)   (270, 0)
```

The moved points (0, 1), (90, 0), (180, −1) and (270, 0) are exactly the key points of y = cos x. Because these graphs repeat every 360°, a translation by (360 over 0) maps each onto itself.

Reflecting y = cos x in the x-axis gives y = −cos x, which starts at (0, −1) and reaches its maximum of 1 at 180°.

## Asymptotes

An asymptote moves with the graph.

**Worked example 6.** Sketch y = 1/(x + 2) − 1, giving the asymptotes and the intercepts.

```
from y = 1/x:  x → x + 2   left 2      asymptote x = 0 becomes x = −2
               − 1         down 1      asymptote y = 0 becomes y = −1
y-intercept:   x = 0: 1/2 − 1 = −1/2, so (0, −1/2)
x-intercept:   0 = 1/(x + 2) − 1, so x + 2 = 1, x = −1, giving (−1, 0)
```

The two branches sit in the regions to the top right and bottom left of the new asymptotes, just as y = 1/x sits relative to the axes.

For y = 2ˣ, the horizontal asymptote y = 0 moves to y = −3 for y = 2ˣ − 3. Reflecting in the y-axis gives y = 2⁻ˣ, which falls from left to right but keeps the asymptote y = 0 and the intercept (0, 1).

## Working backwards to an equation

**Worked example 7.** The graph of y = x² is translated so that its turning point is at (2, −3). Write its equation, and show that it is y = x² − 4x + 1.

```
right 2, down 3:  translation by (2 over −3)
y = (x − 2)² − 3
  = x² − 4x + 4 − 3
  = x² − 4x + 1
```

Completing the square reverses this: it turns x² − 4x + 1 back into (x − 2)² − 3 and reveals the translation.

For a cubic y = x³ translated by (−1 over 4), replace x by x + 1 and add 4: y = (x + 1)³ + 4.

## Common mistakes

- Moving the graph right for (x + a) instead of left.
- Replacing only some of the x terms when translating horizontally.
- Treating y = −x² + 4 and y = −(x² + 4) as the same curve.
- Forgetting to move asymptotes, or moving them the wrong way.
- Sketching without labelling the new turning point, intercepts or asymptotes.
- Describing a transformation as "moving" or "shifting" without the vector or mirror line.
- Assuming a reflection always changes the graph; a symmetrical graph can map onto itself.

## Exam technique for OCR command words

- **Sketch**: correct shape and position, with key points labelled with coordinates. Accuracy of scale is not expected, but positions relative to the axes must be right.
- **Describe fully the transformation**: name it and give its details, for example "translation by vector (−3 over 0)" or "reflection in the x-axis". Both parts carry marks.
- **Write down the coordinates of the turning point** (or another point) of a transformed curve: apply the point rule; there is usually no need to redo any algebra.
- **Show that**: expand or simplify step by step from the transformed equation to the given form.
- **Write down the equation of the asymptote**: give the full equation, such as y = −1, not just the number.

## Next steps

- Condense the rules with the [transformations of curves revision notes](/resources/ocr-gcse-mathematics-j560-transformations-of-curves-and-their-equations-ocr-gcse-maths-revision-notes/).
- Test yourself with the [transformations of curves practice questions](/resources/ocr-gcse-mathematics-j560-transformations-of-curves-and-their-equations-ocr-gcse-maths-practice/).
- Revise the base graphs in the [plotting and sketching graphs guide](/resources/ocr-gcse-mathematics-plotting-and-sketching-linear-quadratic-cubic-and/).

## Official syllabus

OCR GCSE (9-1) Mathematics J560, Version 2.1 (August 2026), for first assessment in 2017, published by OCR. Section 7.03, Transformations of curves and their equations.
