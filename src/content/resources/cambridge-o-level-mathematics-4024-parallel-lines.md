---
title: "Cambridge O Level Mathematics (4024): Parallel Lines"
resourceType: "study-guides"
subject: "mathematics"
level: ["o-levels"]
topic: "Coordinate geometry"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 3.6
syllabusTopics:
  - qualification: "o-level"
    topic: "coordinate-geometry"
  - qualification: "o-level"
    topic: "coordinate-geometry"
    subtopic: "parallel-lines-4024"
description: "Study guide to 4024 section 3.6: the gradient and equation of a straight line parallel to a given line, with rearranging, worked examples and common mistakes."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to sajawal-zahid (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-20
featured: false
---

This guide covers section 3.6, Parallel lines, in the Coordinate geometry topic of the Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027. The syllabus asks one thing here: **find the gradient and equation of a straight line parallel to a given line**. Its own example is to find the equation of the line parallel to y = 4x − 1 that passes through (1, −3). After this guide, use the [parallel lines revision notes](/resources/cambridge-o-level-mathematics-4024-parallel-lines-revision-notes/) and the [parallel lines practice questions](/resources/cambridge-o-level-mathematics-4024-parallel-lines-practice/).

## What section 3.6 asks for

Two jobs appear again and again.

1. Given a line, state the gradient of any line parallel to it.
2. Given a line and a point, write the equation of the parallel line through that point.

Both rest on one fact, so the section is short. The skill is in the algebra that surrounds it: rearranging an equation into the form y = mx + c, handling fractions, and keeping signs under control.

## The key fact

Parallel lines never meet, because they slope in exactly the same way. In coordinate geometry this means:

**Parallel lines have equal gradients.**

If a line has gradient m, every line parallel to it also has gradient m. The reverse is also true: two different lines with the same gradient are parallel. The lines y = 4x − 1 and y = 4x + 6 are parallel because both have gradient 4. Their y-intercepts (−1 and 6) are different, so they are different lines. If both the gradient and the intercept matched, the equations would describe one and the same line.

A line of the form y = c is horizontal with gradient 0, and any other horizontal line is parallel to it. A line of the form x = k is vertical. Its gradient is undefined, but every vertical line is parallel to every other vertical line.

## Reading the gradient from an equation

The form y = mx + c shows the gradient m straight away and the y-intercept c. When an equation is written another way, rearrange it first. Make y the subject, then read the number multiplying x.

### Worked example 1

Write down the gradient of a line parallel to 2y = 3x + 1. (This is the type of line used in the syllabus notes for perpendicular lines, so it is worth being fluent with it.)

```
2y = 3x + 1
y = 3/2 x + 1/2
gradient = 3/2
```

Any line parallel to it has gradient 3/2. Dividing only the first term by 2 and writing y = 3x/2 + 1 is the classic slip: divide every term.

### Worked example 2

Find the gradient of a line parallel to 3x + 2y = 7.

```
2y = −3x + 7
y = −3/2 x + 7/2
gradient = −3/2
```

Moving 3x across changes its sign. The gradient is negative here, even though the equation shows a plus sign.

If the equation is given as ax + by = c, the gradient is −a/b. That shortcut is handy as a check, but the rearrangement is safer when you must show working.

## Finding the equation of the parallel line

You know the gradient m from the given line. You also know one point (x₁, y₁) on the new line. There are two reliable methods.

**Method 1: substitute into y = mx + c.** Put in m, then put in the x and y of the point and solve for c.

**Method 2: use y − y₁ = m(x − x₁).** Substitute m and the point, then tidy up.

Both give the same result. Pick one and use it every time.

### Worked example 3

Find the equation of the line parallel to y = 4x − 1 that passes through (1, −3).

```
gradient of the new line = 4
y = 4x + c
−3 = 4(1) + c
c = −7
y = 4x − 7
```

Check with the point: when x = 1, y = 4 − 7 = −3. The point lies on the line. Check the gradient too: it is 4, the same as the given line.

### Worked example 4

Find the equation of the line parallel to 2y = 3x + 1 that passes through (4, 5).

```
gradient = 3/2
y − 5 = 3/2 (x − 4)
y − 5 = 3/2 x − 6
y = 3/2 x − 1
```

If you are asked for the answer in the form ax + by = c, multiply by 2: 2y = 3x − 2, which becomes 3x − 2y = 2. Check: when x = 4 and y = 5, 12 − 10 = 2. Correct.

### Worked example 5

Find the equation of the line parallel to 3x + 2y = 7 that passes through (−2, 6).

```
gradient = −3/2
y − 6 = −3/2 (x + 2)
y − 6 = −3/2 x − 3
y = −3/2 x + 3
```

In standard form, 3x + 2y = 6. Notice that the left side, 3x + 2y, is the same as in the original equation. Parallel lines written as ax + by = c share the same a and b, and only c changes. That gives a quick way to find c: substitute the point into 3x + 2y, which gives −6 + 12 = 6.

### Worked example 6

Find the equation of the line parallel to 5x − 2y = 9 through (3, −1).

```
Using the shortcut: 5x − 2y = 5(3) − 2(−1) = 15 + 2 = 17
Equation: 5x − 2y = 17
```

Confirm by rearranging: y = 5/2 x − 17/2, so the gradient is 5/2. The original, 5x − 2y = 9, also has gradient 5/2. 

## Lines through two points

Sometimes the line you must copy the gradient from is not given as an equation. It is the line joining two points.

### Worked example 7

Find the equation of the line through (0, 3) that is parallel to the line joining (1, 2) and (4, 8).

```
gradient = (8 − 2) / (4 − 1) = 6/3 = 2
the point (0, 3) is on the y-axis, so c = 3
y = 2x + 3
```

When the given point is on the y-axis, the y-value is the intercept, so no further work is needed.

## Using parallel gradients to prove shapes

A quadrilateral with two pairs of parallel sides is a parallelogram. You can test this with gradients.

### Worked example 8

A is (1, 2), B is (5, 3), C is (6, 7) and D is (2, 6). Show that ABCD is a parallelogram.

```
gradient of AB = (3 − 2)/(5 − 1) = 1/4
gradient of DC = (7 − 6)/(6 − 2) = 1/4
gradient of AD = (6 − 2)/(2 − 1) = 4
gradient of BC = (7 − 3)/(6 − 5) = 4
```

AB is parallel to DC and AD is parallel to BC, because the gradients match. So ABCD is a parallelogram. Be careful to compare opposite sides: AB with DC, and AD with BC. Writing a short conclusion gives the final mark.

A quick check on the fourth vertex: D = A + C − B = (1 + 6 − 5, 2 + 7 − 3) = (2, 6). 

## A parameter in the equation

Questions sometimes include an unknown letter.

### Worked example 9

The line 4x + ky = 11 is parallel to y = 2x + 5. Find k.

```
ky = −4x + 11
y = −4/k x + 11/k
gradient = −4/k
−4/k = 2
k = −2
```

Check: with k = −2 the line is 4x − 2y = 11, so y = 2x − 11/2. The gradient is 2. Correct.

## A line parallel to an axis

A line parallel to the x-axis through (a, b) is y = b. A line parallel to the y-axis through (a, b) is x = a. For example, the line through (3, 8) parallel to the y-axis is x = 3. Do not try to write these as y = mx + c; there is no x in the first and no finite gradient in the second.

## Common mistakes

- Dividing only some terms when rearranging, for example turning 2y = 3x + 1 into y = 3x + 1/2.
- Reading the gradient from 3x + 2y = 7 as 3 or as 3/2, instead of −3/2.
- Using the gradient of the given line but the intercept of the given line too. Only the gradient is shared.
- Making a sign error with a negative point, such as y − 6 = m(x − 2) when the point is (−2, 6). The bracket should be (x + 2).
- Comparing the wrong pairs of sides when showing a quadrilateral is a parallelogram.
- Leaving the answer as an unsimplified fraction when a neater form is asked for.

## Exam technique

- **Find** or **work out** the equation: show the gradient, the substitution and the final line.
- **Write down** the gradient: the answer can be given with no working, but only if you can see it at once.
- **Show that** two lines are parallel: calculate both gradients and state that they are equal.
- Always test your answer by substituting the given point into the final equation.

## More on this topic

Try the [parallel lines practice questions](/resources/cambridge-o-level-mathematics-4024-parallel-lines-practice/) and then recap with the [parallel lines revision notes](/resources/cambridge-o-level-mathematics-4024-parallel-lines-revision-notes/).


## Syllabus reference

Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027, published by Cambridge University Press & Assessment. The relevant section is 3.6 Parallel lines.
