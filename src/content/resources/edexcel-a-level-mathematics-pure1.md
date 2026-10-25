---
title: "Edexcel A Level Mathematics: Straight-Line Coordinate Geometry (YMA01)"
seoTitle: "Edexcel IAL Maths P1 Straight Lines Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit P1: Pure Mathematics 1"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 525
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p1-pure-mathematics-1-edexcel-alevel-maths"
    subtopic: "p1-coordinate-geometry-edexcel-alevel-maths"
description: "Study guide to straight-line equations and the parallel and perpendicular conditions in Unit P1 of Pearson Edexcel International A Level Maths (YMA01)."
author: "marlbridge-academic-team"
publishedDate: 2026-10-25
featured: false
---

This guide covers the heading "Coordinate geometry in the (x, y) plane" in the Unit P1: Pure Mathematics 1 content of the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification (YMA01), Specification Issue 3, April 2019. It teaches items 2.1 (the equation of a straight line) and 2.2 (conditions for two lines to be parallel or perpendicular) from scratch, with fully worked examples.

For condensed recall use the [Pure Mathematics 1 revision notes](/resources/edexcel-a-level-mathematics-pure1-revision-notes/), and for questions use the [Pure Mathematics 1 practice set](/resources/edexcel-a-level-mathematics-pure1-practice/). The wider unit overview is in the [Pure Mathematics 1 study guide](/resources/a-level-edexcel-mathematics-pure-mathematics-1/). See also the [Edexcel A Level Mathematics hub](/boards/edexcel/a-level/mathematics/), the [printable checklist](/checklists/edexcel/a-level/mathematics/) and the [free 10-minute diagnostics](/diagnostics/).

## What the specification asks for

| Item | What you must be able to do |
|---|---|
| 2.1 | Write the equation of a straight line, including the forms y − y₁ = m(x − x₁) and ax + by + c = 0 |
| 2.1 (i) | Find the equation of a line through two given points |
| 2.1 (ii) | Find the equation of a line parallel (or perpendicular) to a given line through a given point |
| 2.2 | State and use the conditions for two straight lines to be parallel or perpendicular |

The specification also says calculators may be used in the Unit P1 examination. The skills below are short enough to do by hand, and doing them by hand is the safest way to avoid slips with signs and fractions.

## Gradient: the one idea underneath everything

The gradient m of a line measures how far it rises for each unit moved to the right. Take any two points on the line, called (x₁, y₁) and (x₂, y₂). Then:

```
m = (y₂ − y₁) / (x₂ − x₁)
```

You may subtract in either order, but you must use the same order on the top and the bottom. A positive gradient means the line rises from left to right and a negative gradient means it falls. A gradient of 0 is a horizontal line.

**Example 1.** Find the gradient of the line through P(−2, 7) and Q(4, −5).

```
m = (−5 − 7) / (4 − (−2)) = −12 / 6 = −2
```

The brackets round −2 matter. Writing 4 − 2 in the denominator is a very common slip and gives the wrong gradient.

## The forms of a straight-line equation

The specification names two forms you must be able to work with.

| Form | Use it when |
|---|---|
| y − y₁ = m(x − x₁) | You know the gradient m and one point (x₁, y₁) on the line |
| ax + by + c = 0 | A question asks for the answer "in the form ax + by + c = 0", where a, b and c are usually integers |

You will also meet y = mx + c, where c is the y-intercept. It is useful for reading off a gradient, and you can move between all three forms. The form y − y₁ = m(x − x₁) is the most useful for building an equation, because you never need to find the intercept first.

### Why y − y₁ = m(x − x₁) works

Take a fixed point (x₁, y₁) on the line and any other point (x, y) on it. The gradient between them is (y − y₁)/(x − x₁), and this must equal m. Multiplying both sides by (x − x₁) gives the formula. This also shows you why the point you choose does not matter: any point on the line gives the same final equation.

### Converting to ax + by + c = 0

1. Multiply through to clear every fraction.
2. Move all terms to one side so the other side is 0.
3. If the question asks for integer coefficients, check that a, b and c are whole numbers. Divide by any common factor if that makes them simpler.
4. Making the x coefficient positive is a tidy habit.

### Reading information from ax + by + c = 0

To find the gradient, rearrange to y = −(a/b)x − c/b, so m = −a/b when b ≠ 0. To find where the line crosses the axes, put x = 0 to find the y-intercept and y = 0 to find the x-intercept. To test whether a point lies on the line, substitute its coordinates and see whether the left side equals 0.

## Line through two given points (item 2.1 i)

**Method.**

1. Find the gradient from the two points.
2. Substitute the gradient and either point into y − y₁ = m(x − x₁).
3. Tidy the result into whichever form the question wants.
4. Check by substituting the other point.

**Example 2.** Find the equation of the line through A(3, −1) and B(8, 5), giving your answer in the form ax + by + c = 0 with a, b and c integers.

```
m = (5 − (−1)) / (8 − 3) = 6/5
y − (−1) = (6/5)(x − 3)
y + 1 = (6/5)(x − 3)
5y + 5 = 6(x − 3)
5y + 5 = 6x − 18
6x − 5y − 23 = 0
```

Check with B: 6(8) − 5(5) − 23 = 48 − 25 − 23 = 0, so B lies on the line. 

The intercepts follow from the final equation. Putting y = 0 gives 6x = 23, so the line crosses the x-axis at (23/6, 0). Putting x = 0 gives −5y = 23, so it crosses the y-axis at (0, −23/5).

If the two points have the same x-coordinate, the denominator of the gradient is 0 and the line is vertical, with equation x = that value. If they have the same y-coordinate, the gradient is 0 and the line is horizontal, with equation y = that value. Neither case needs the formula, so recognise them early.

## Parallel lines (item 2.2, first condition)

Two lines are parallel when they have the same gradient. Lines with different gradients must cross, so they cannot be parallel. Two lines with the same gradient and the same intercept are the same line.

```
parallel:  m₁ = m₂
```

## Perpendicular lines (item 2.2, second condition)

Two lines with gradients m₁ and m₂ are perpendicular when:

```
m₁ × m₂ = −1      equivalently      m₂ = −1/m₁
```

You find the perpendicular gradient by turning the gradient upside down and changing its sign, which is called the negative reciprocal. So 2/3 becomes −3/2, and −5 becomes 1/5.

### Where the −1 comes from

A line with gradient m has direction (1, m): one step right and m steps up. Turning that direction through a right angle gives (−m, 1), which is one step up and m steps to the left. The gradient of the turned direction is 1/(−m) = −1/m. Check with m = 3/5: the turned direction is (−3/5, 1), with gradient 1 ÷ (−3/5) = −5/3, which is the negative reciprocal of 3/5.

### The special cases

The product rule fails when a gradient is 0 or undefined, because you cannot take the reciprocal of 0. A horizontal line (y = k) is perpendicular to every vertical line (x = h). So the line perpendicular to y = 4 through (5, 1) is x = 5, and the line perpendicular to x = 2 through (−3, 6) is y = 6.

## Parallel or perpendicular line through a given point (item 2.1 ii)

This is the most common type of question. Use the same four steps each time.

1. Rearrange the given line to find its gradient.
2. Decide which condition applies: same gradient for parallel, negative reciprocal for perpendicular.
3. Put the new gradient and the given point into y − y₁ = m(x − x₁).
4. Finish by writing the answer in the form the question asks for.

**Example 3 (parallel).** Find the equation of the line parallel to 5x − 3y = 12 that passes through (−6, 4).

```
5x − 3y = 12  →  3y = 5x − 12  →  y = (5/3)x − 4
gradient = 5/3
y − 4 = (5/3)(x + 6)
3y − 12 = 5(x + 6)
3y − 12 = 5x + 30
5x − 3y + 42 = 0
```

Check: 5(−6) − 3(4) + 42 = −30 − 12 + 42 = 0.

**Example 4 (perpendicular).** Find the equation of the line perpendicular to 2x + 7y = 21 that passes through (4, −3).

```
2x + 7y = 21  →  7y = −2x + 21  →  y = −(2/7)x + 3
gradient of given line = −2/7
perpendicular gradient = 7/2           [(−2/7) × (7/2) = −1]
y − (−3) = (7/2)(x − 4)
2y + 6 = 7(x − 4)
2y + 6 = 7x − 28
7x − 2y − 34 = 0
```

Check: 7(4) − 2(−3) − 34 = 28 + 6 − 34 = 0.

## Using the conditions with an unknown

Some questions give a line containing a letter and ask for its value so that a parallel or perpendicular condition holds. Write each gradient in terms of the letter, then use the condition as an equation.

**Example 5.** The line l₁ has equation kx + 4y = 9 and the line l₂ has equation 3x − 2y = 5. Find the value of k for which (a) l₁ is parallel to l₂, (b) l₁ is perpendicular to l₂.

Gradient of l₁: 4y = −kx + 9, so m₁ = −k/4. Gradient of l₂: 2y = 3x − 5, so m₂ = 3/2.

```
(a) parallel:        −k/4 = 3/2    →   k = −6
(b) perpendicular:   (−k/4)(3/2) = −1   →   −3k/8 = −1   →   k = 8/3
```

Check (b): with k = 8/3 the gradient of l₁ is −(8/3)/4 = −2/3, and (−2/3)(3/2) = −1.

## Combined problems

Longer questions combine the skills. Typical tasks are showing that three points lie on one line, showing a right angle, and finding a perpendicular bisector.

**Collinear points.** Points are collinear when the gradient between the first two equals the gradient between the second and third. For A(1, 2), B(5, 4) and C(11, 7), the gradient AB = 2/4 = 1/2 and the gradient BC = 3/6 = 1/2. The gradients are equal and B is shared, so the three points lie on one line.

**Showing a right angle.** The points D(1, 1), E(7, 3) and F(0, 4) form a triangle. The gradient DE = 2/6 = 1/3 and the gradient DF = (4 − 1)/(0 − 1) = −3. Since (1/3)(−3) = −1, DE is perpendicular to DF and angle EDF is 90°.

Now find the line through E parallel to DF. The gradient is −3, so y − 3 = −3(x − 7), which gives y = −3x + 24, or 3x + y − 24 = 0.

**Example 6 (perpendicular bisector).** The segment AB has endpoints A(−1, 6) and B(5, 2). Find the equation of its perpendicular bisector.

The midpoint of AB is the average of the coordinates. The midpoint formula is not listed as a separate item in this part of the specification, so it is treated here as a standard result you may already know.

```
midpoint = ((−1 + 5)/2, (6 + 2)/2) = (2, 4)
gradient AB = (2 − 6)/(5 − (−1)) = −4/6 = −2/3
perpendicular gradient = 3/2
y − 4 = (3/2)(x − 2)
2y − 8 = 3x − 6
3x − 2y + 2 = 0
```

Check that the midpoint lies on the line: 3(2) − 2(4) + 2 = 6 − 8 + 2 = 0.

## Common errors

- Subtracting the coordinates in a different order on the top and the bottom of the gradient formula.
- Losing a negative sign when a coordinate is negative, for example writing y − 7 when the point has y = −7. Use brackets: y − (−7) = y + 7.
- Using the same gradient where the question asks for perpendicular, or the negative reciprocal where it asks for parallel. Underline the word in the question before you start.
- Taking the reciprocal but forgetting to change the sign, or changing the sign but forgetting to invert.
- Reading the gradient of 2x + 7y = 21 as 2 or 7. Rearrange to y = mx + c first, or use m = −a/b.
- Giving the answer as y = mx + c where the question wants the ax + by + c = 0 layout, or giving non-integer coefficients when integers are requested.
- Not checking the answer. Substituting the given point into the final equation takes seconds and catches most slips.

## Where to go next

Try the [practice set](/resources/edexcel-a-level-mathematics-pure1-practice/), then use the [revision notes](/resources/edexcel-a-level-mathematics-pure1-revision-notes/) to keep the methods fresh. The [diagnostics](/diagnostics/) can show you which unit to revise next.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019 (Pearson Education Limited). This guide follows Unit P1: Pure Mathematics 1, the content heading "Coordinate geometry in the (x, y) plane", items 2.1 and 2.2.
