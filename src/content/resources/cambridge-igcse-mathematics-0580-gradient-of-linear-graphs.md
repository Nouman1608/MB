---
title: "Cambridge IGCSE Mathematics (0580): Gradient of linear graphs"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Topic 3 – Coordinate geometry"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 3.3
syllabusTopics:
  - qualification: "igcse"
    topic: "coordinate-geometry-cambridge-igcse-maths"
    subtopic: "gradient-of-linear-graphs-cambridge-igcse-maths"
description: "Study guide to Cambridge IGCSE Maths 0580 subtopic 3.3: gradients from a grid with unequal scales, and (Extended) from two coordinates, with worked examples."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **3.3 Gradient of linear graphs** in the Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027. The two tiers are worded differently:

| Tier | Syllabus statement | Note |
|---|---|---|
| Core (C3.3) | Find the gradient of a straight line. | "From a grid only." |
| Extended (E3.3) | 1 Find the gradient of a straight line. 2 Calculate the gradient of a straight line from the coordinates of two points on it. | No grid needed for part 2 |

So Core candidates read gradients from a drawn line on a grid, and Extended candidates must also calculate them from coordinates alone. A short overview of gradient sits in the [Coordinate geometry revision notes](/resources/igcse-mathematics-coordinate-geometry-revision-notes/); this page goes into the detail that decides marks: scales, signs, choosing points, unknown coordinates and collinear points. Afterwards, use the [gradient revision notes](/resources/cambridge-igcse-mathematics-0580-gradient-of-linear-graphs-revision-notes/) and the [gradient practice questions](/resources/cambridge-igcse-mathematics-0580-gradient-of-linear-graphs-practice/).

## What gradient measures

The gradient of a straight line measures its steepness and direction:

```
gradient = change in y / change in x
         = vertical change / horizontal change
```

Always move **left to right** (x increasing) when you measure. Then:

| Line | Vertical change as x increases | Gradient |
|---|---|---|
| Slopes up | positive | positive |
| Slopes down | negative | negative |
| Horizontal | zero | 0 |
| Vertical | x does not change | not defined (you cannot divide by 0) |

A straight line has the **same gradient everywhere**, so any two points on it give the same answer. A gradient of 3 means y increases by 3 for every 1 that x increases; a gradient of –½ means y decreases by 1 for every 2 that x increases.

## Core: gradient from a grid

### Choosing your two points

Pick two points where the line passes **exactly** through a grid intersection, as far apart as the grid allows. A long triangle under the line reduces reading errors. Draw the right-angled triangle on the diagram and write its horizontal and vertical sides in axis units.

### Worked example 1: a downhill line

A line on a grid passes through (–2, 7) and (4, –2). Find its gradient.

```
Moving left to right: from x = -2 to x = 4.
Horizontal change = 4 - (-2) = 6
Vertical change   = -2 - 7  = -9   (the line goes down)
Gradient = -9 / 6 = -3/2  = -1.5
```

Give the answer as a simplified fraction or an exact decimal: –3/2 or –1.5. Leaving it as –9/6 may lose the accuracy mark.

### Worked example 2: different scales on the two axes

On a printed grid, 2 small squares on the x-axis represent 1 unit, and 1 small square on the y-axis represents 2 units. A line rises 6 small squares while moving 4 small squares to the right. Find its gradient.

```
Horizontal change: 4 squares x 0.5 = 2 units
Vertical change:   6 squares x 2   = 12 units
Gradient = 12 / 2 = 6
```

Counting squares alone gives 6 ÷ 4 = 1.5, which is wrong. Always convert squares into axis units first. This is the most common way to lose marks on a Core gradient question.

## Extended: gradient from two coordinates

For points (x₁, y₁) and (x₂, y₂):

```
m = (y2 - y1) / (x2 - x1)
```

This is the same rise-over-run calculation without the grid. The formula is not on the list printed in the exam paper, so learn it. Subtract in the **same order** on top and bottom; which point you call "1" does not matter, as long as you are consistent.

### Worked example 3: negative coordinates

Calculate the gradient of the line through (–3, 5) and (6, –1).

```
m = (-1 - 5) / (6 - (-3))
  = -6 / 9
  = -2/3
```

Check by swapping the order: (5 – (–1)) / (–3 – 6) = 6 / –9 = –2/3. Same answer.

### Worked example 4: an unknown coordinate

The line through (2, k) and (6, 11) has gradient 1.5. Find k.

```
(11 - k) / (6 - 2) = 1.5
(11 - k) / 4       = 1.5
 11 - k            = 6
      k            = 5
```

Check: (11 – 5)/4 = 6/4 = 1.5.

### Worked example 5: three points in a line

Show that A(–1, –4), B(2, 2) and C(5, 8) lie on a straight line.

```
Gradient AB = (2 - (-4)) / (2 - (-1)) = 6 / 3 = 2
Gradient BC = (8 - 2) / (5 - 2)       = 6 / 3 = 2
```

AB and BC have the same gradient and share the point B, so A, B and C lie on one straight line. Both facts belong in your answer: two lines with equal gradients that do not share a point are parallel, not the same line.

## Gradient as a rate

When the axes are real quantities, the gradient has units: the y-unit **per** x-unit. A line on a graph of cost ($) against number of items with gradient 2.5 means $2.50 per item. This links to graphs in practical situations, Topic 2, where the gradient of a distance–time graph is a speed. In 3.3 you simply need to find the number; when a question also asks what it represents, give the units.

## Common mistakes

- **Run over rise.** Dividing the change in x by the change in y gives the reciprocal. Say "up over across" as you write it.
- **Lost negative sign.** If the line goes down from left to right, the gradient must be negative. Check the sign against the picture.
- **Counting squares** without converting to axis units when the scales differ.
- **Choosing points that are not on grid intersections**, so the readings are guesses.
- **Mixing the order** of subtraction: (y₂ – y₁)/(x₁ – x₂) flips the sign.
- **Calling a vertical line's gradient 0.** A horizontal line has gradient 0; a vertical line has no defined gradient.
- **Leaving a fraction unsimplified**, such as 4/6 instead of 2/3.

## Exam technique

- **Find the gradient** (Core, grid): draw the triangle on the diagram, label its sides in axis units, then divide. The triangle is evidence of method.
- **Calculate the gradient** (Extended): write the formula with the numbers substituted before simplifying. One wrong sign then costs one mark, not all of them.
- **Show that** three points are collinear: give both gradients and say that the lines share a point.
- On Paper 2 (Extended, non-calculator), leave answers as fractions in lowest terms. On Paper 4 a decimal is fine if it is exact; otherwise give 3 significant figures.

## More on this topic

- Recap with the [gradient revision notes](/resources/cambridge-igcse-mathematics-0580-gradient-of-linear-graphs-revision-notes/) and test yourself with the [gradient practice questions](/resources/cambridge-igcse-mathematics-0580-gradient-of-linear-graphs-practice/).
- Gradient feeds straight into the [equations of linear graphs study guide](/resources/cambridge-igcse-mathematics-0580-equations-of-linear-graphs/) and the [parallel lines study guide](/resources/cambridge-igcse-mathematics-0580-parallel-lines/).
- Other resources for syllabus 0580 are on the [Cambridge IGCSE Mathematics hub](/boards/cambridge/igcse/mathematics/).

## Official syllabus

Cambridge International, *Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027*, Topic 3 Coordinate geometry, C3.3 Gradient of linear graphs ("Find the gradient of a straight line", from a grid only) and E3.3 Gradient of linear graphs (also "Calculate the gradient of a straight line from the coordinates of two points on it").
