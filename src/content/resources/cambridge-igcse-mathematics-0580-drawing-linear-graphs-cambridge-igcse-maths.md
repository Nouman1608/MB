---
title: "Cambridge IGCSE Mathematics (0580): Drawing linear graphs"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Topic 3 – Coordinate geometry"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 3.2
syllabusTopics:
  - qualification: "igcse"
    topic: "coordinate-geometry-cambridge-igcse-maths"
    subtopic: "drawing-linear-graphs-cambridge-igcse-maths"
description: "Study guide to 0580 subtopic 3.2: choosing x-values, decimal gradients, horizontal and vertical lines, spotting table errors and ax + by = c lines."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **3.2 Drawing linear graphs** in the Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027. Both tiers must "Draw straight-line graphs for linear equations." The tiers differ only in the form of the equation:

| Tier | What the syllabus notes say |
|---|---|
| Core (C3.2) | Equations will be given in the form y = mx + c (e.g. y = –2x + 5), unless a table of values is given |
| Extended (E3.2) | Examples include y = –2x + 5, y = 7 – 4x and 3x + 2y = 5 |

The standard table-of-values method, with integer gradients and the intercept method for 4x + 3y = 12, is set out in the [coordinates and drawing linear graphs study guide](/resources/igcse-mathematics-0580-coordinates-and-drawing-linear-graphs/). This page deals with the cases that cause trouble: awkward coefficients, choosing sensible x-values, checking a table, lines parallel to the axes and lines that must fit a printed grid. Afterwards, use the [drawing linear graphs revision notes](/resources/cambridge-igcse-mathematics-0580-drawing-linear-graphs-cambridge-igcse-maths-revision-notes/) and the [drawing linear graphs practice questions](/resources/cambridge-igcse-mathematics-0580-drawing-linear-graphs-cambridge-igcse-maths-practice/).

## Why three points, and which three

A linear equation has a straight-line graph, so two points fix it. Examiners expect a third as a check. The three should be:

- the **two end values** of the x-range given in the question, so the line is drawn across the full range;
- one value **in between**, usually x = 0 if it is in the range.

Points far apart give a more accurate line than points bunched together, because a small plotting error tilts a short line more than a long one.

## Choosing x-values that give easy y-values

Your aim is whole-number (or simple) y-values. Look at the coefficient of x:

| Equation | Good x-values | Reason |
|---|---|---|
| y = ½x + 3 | even numbers | halving an even number gives a whole number |
| y = 0.4x + 1 | multiples of 5 | 0.4 × 5 = 2 |
| y = –(3/4)x + 2 | multiples of 4 | the 4 cancels |
| 3x + 2y = 5 (Extended) | odd numbers | 5 – 3x is then even, so dividing by 2 works |

If a table is printed with x-values already chosen, you must use them, even when the y-values are decimals.

### Worked example 1: a decimal gradient

Draw the graph of y = 0.4x + 1 for –5 ≤ x ≤ 5.

```
x = -5:  y = 0.4(-5) + 1 = -2 + 1 = -1
x =  0:  y = 0.4(0)  + 1 =  0 + 1 =  1
x =  5:  y = 0.4(5)  + 1 =  2 + 1 =  3
```

Plot (–5, –1), (0, 1) and (5, 3), and rule a line from x = –5 to x = 5. The y-values go up by 2 each time x goes up by 5, which confirms the points are in line.

## Checking a table before you plot

In a linear table with equally spaced x-values, the y-values change by the **same amount** each time. One value that breaks the pattern is an arithmetic slip. Find it before you plot, not after.

### Worked example 2: finding the error in a table

A student's table for y = –2x + 5 is shown. One y-value is wrong. Find it and correct it.

| x | –1 | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|---|
| y | 7 | 5 | 3 | 1 | –1 | –2 |

```
Differences: 7 -> 5 -> 3 -> 1 -> -1 are each -2.
-1 -> -2 is only -1, so the last value is wrong.
x = 4:  y = -2(4) + 5 = -8 + 5 = -3
```

The correct value is –3. If you had plotted –2, the last point would sit off the line, and a ruled line through the other five points would show it.

## Lines parallel to the axes

Two kinds of linear equation contain only one letter:

- **y = k** is a **horizontal** line through every point with y-coordinate k. For example, y = –2 passes through (–4, –2), (0, –2) and (5, –2).
- **x = k** is a **vertical** line through every point with x-coordinate k. For example, x = 3 passes through (3, –1), (3, 0) and (3, 6).

The commonest mistake is drawing y = 3 as a vertical line because "3 is on the x-axis". Write two or three points first: y = 3 means the y-coordinate is always 3, so the points go across, not up.

The x-axis itself is the line y = 0, and the y-axis is the line x = 0.

## Lines on a printed grid

Exam grids are drawn before you see the equation, so check that your line fits. If a y-value in your table is beyond the printed y-axis, recheck that value first: it is often an arithmetic error. If it is right, the line leaves the grid and you draw it only as far as the edge.

### Worked example 3: two lines and where they cross

On a grid with –1 ≤ x ≤ 4 and –2 ≤ y ≤ 8, draw the lines y = x + 1 and y = –2x + 7. Write down the coordinates of the point where they cross.

```
y = x + 1:      x = -1 -> 0,   x = 0 -> 1,   x = 4 -> 5
y = -2x + 7:    x = -1 -> 9,   x = 0 -> 7,   x = 4 -> -1
```

The point (–1, 9) is above the top of the grid (y = 8). Check it: –2 × (–1) + 7 = 2 + 7 = 9, so it is correct. Find where the line meets the top edge instead: y = 8 gives –2x + 7 = 8, so x = –0.5. Plot (–0.5, 8), (0, 7), (2, 3) and (4, –1), and rule the line from the top edge to x = 4.

The lines cross at **(2, 3)**. Check by substituting: 2 + 1 = 3 and –2(2) + 7 = 3. Reading a crossing point from a graph is accepted to within a small tolerance, but checking it in both equations shows whether your drawing is accurate.

## Extended: equations not in the form y = mx + c

With Extended equations such as y = 7 – 4x, substitute directly: multiply first, then subtract from 7. With x and y on the same side, either rearrange to make y the subject or substitute values of x and solve for y.

### Worked example 4 (Extended): 3x + 2y = 5 for –1 ≤ x ≤ 3

The axis-crossing method gives x = 5/3 when y = 0, which is awkward to plot. Use odd values of x instead, so that 5 – 3x is even.

```
2y = 5 - 3x,  so  y = (5 - 3x) / 2
x = -1:  y = (5 + 3) / 2 = 4
x =  1:  y = (5 - 3) / 2 = 1
x =  3:  y = (5 - 9) / 2 = -2
```

Plot (–1, 4), (1, 1) and (3, –2). The y-values fall by 3 each time x rises by 2, so the points are in line. Rule the line from x = –1 to x = 3.

### Worked example 5 (Extended): x – 2y = 4 for –2 ≤ x ≤ 6

```
x - 2y = 4
   -2y = 4 - x
     y = (x - 4) / 2

x = -2:  y = (-2 - 4) / 2 = -3
x =  0:  y = (0 - 4) / 2  = -2
x =  6:  y = (6 - 4) / 2  =  1
```

Dividing by –2 changes the sign of every term: –2y = 4 – x becomes y = –2 + x/2, the same as (x – 4)/2. A check point that is quick to find mentally: x = 4 gives y = 0, so the line crosses the x-axis at (4, 0).

## Common mistakes

- **Plotting large dots or circles.** Use small crosses so the centre of each point is clear.
- **Joining points dot to dot** with a slightly bent line. If the points are not in a straight line, a value is wrong; fix it rather than bending the line.
- **Drawing short of the range.** The line must reach both ends of the range given, or the edge of the grid.
- **Confusing y = k and x = k.**
- **Reading y = 7 – 4x as (7 – 4)x = 3x.** Multiplication comes before subtraction.
- **Ignoring a printed table's x-values** and using your own instead.

## Exam technique

- **Complete the table**: every gap must be filled. A missing value can cost a mark even if your line is right.
- **Draw the graph**: use a ruler and a sharp pencil; one ruled line through all the plotted points.
- **Write down** the coordinates of a crossing point: read it from your graph, then check it in both equations if time allows.
- If two lines are drawn on the same grid, label each with its equation.
- On Paper 1 or Paper 2 there is no calculator, so choose x-values that keep the arithmetic simple.

## Next steps

- Recap with the [drawing linear graphs revision notes](/resources/cambridge-igcse-mathematics-0580-drawing-linear-graphs-cambridge-igcse-maths-revision-notes/) and practise with the [drawing linear graphs practice questions](/resources/cambridge-igcse-mathematics-0580-drawing-linear-graphs-cambridge-igcse-maths-practice/).
- The next skill is reading a gradient from your line: see the [gradient of linear graphs study guide](/resources/cambridge-igcse-mathematics-0580-gradient-of-linear-graphs-cambridge-igcse-maths/).
- Other resources for syllabus 0580 are on the [Cambridge IGCSE Mathematics hub](/boards/cambridge/igcse/mathematics/).

## Official syllabus

Cambridge International, *Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027*, Topic 3 Coordinate geometry, C3.2 and E3.2 Drawing linear graphs: "Draw straight-line graphs for linear equations."
