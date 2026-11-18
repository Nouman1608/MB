---
title: "Cambridge IGCSE Mathematics (0580): Parallel lines"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Topic 3 – Coordinate geometry"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 3.6
syllabusTopics:
  - qualification: "igcse"
    topic: "coordinate-geometry-cambridge-igcse-maths"
    subtopic: "parallel-lines-cambridge-igcse-maths"
description: "Study guide to 0580 subtopic 3.6 Parallel lines: equal gradients, equations through a point, lines parallel to the axes, ax + by = c and shape proofs."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **3.6 Parallel lines** in the Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027. The Core (C3.6) and Extended (E3.6) statements are identical: "Find the gradient and equation of a straight line parallel to a given line." The syllabus example for both tiers is to find the equation of the line parallel to y = 4x – 1 that passes through (1, –3). The difference between the tiers comes from the neighbouring subtopics: Extended candidates may meet the given line in the form ax + by = c (E3.5), and may need to calculate gradients from coordinates (E3.3).

A short summary of the rule is in the [Coordinate geometry revision notes](/resources/igcse-mathematics-coordinate-geometry-revision-notes/). This page covers every way the idea is tested: spotting parallel lines, writing their equations, lines parallel to the axes, unknown coefficients and using parallel sides to identify shapes. Afterwards, use the [parallel lines revision notes](/resources/cambridge-igcse-mathematics-0580-parallel-lines-cambridge-igcse-maths-revision-notes/) and the [parallel lines practice questions](/resources/cambridge-igcse-mathematics-0580-parallel-lines-cambridge-igcse-maths-practice/).

## The one rule

**Parallel lines have equal gradients.** Two straight lines with the same gradient rise by the same amount for every step across, so the gap between them never changes and they never meet.

The converse is also true: two different straight lines with equal gradients are parallel. If two equations have the same gradient **and** the same y-intercept, they describe the same line, not two parallel lines.

| Line | Gradient | Parallel to y = 3x + 1? |
|---|---|---|
| y = 3x – 5 | 3 | yes |
| y = 1 + 3x | 3 | it is the **same line** |
| y = –3x + 1 | –3 | no (opposite slope) |
| y = (1/3)x + 1 | 1/3 | no |
| y = 3 | 0 | no (horizontal) |

## Finding the equation of a parallel line

1. Find the gradient of the given line (rearrange first if y is not the subject).
2. The new line has the **same gradient**, m.
3. Substitute the given point into y = mx + c to find the **new** c.
4. Write the equation in a fully simplified form.

### Worked example 1: the intercept is given

Find the equation of the line parallel to y = –2x + 3 that passes through (0, 5).

```
Gradient of the given line = -2, so m = -2.
(0, 5) is on the y-axis, so c = 5.
y = -2x + 5
```

When the given point has x = 0, its y-coordinate is c straight away.

### Worked example 2: substituting a point

Find the equation of the line parallel to y = 5x + 2 that passes through (2, 4).

```
m = 5
4 = 5(2) + c
4 = 10 + c
c = -6
y = 5x - 6
```

Check: 5(2) – 6 = 4. The y-intercept changed from 2 to –6; the gradient did not.

## Lines parallel to the axes

- A line parallel to the **x-axis** is horizontal: y = k. Through (2, –1), it is **y = –1**.
- A line parallel to the **y-axis** is vertical: x = k. Through (2, –1), it is **x = 2**.

These have no "c" to calculate. The coordinate that stays fixed gives the equation directly. A line parallel to y = 4 is also horizontal, so through (2, –1) it is y = –1.

## Extended: parallel to a line in the form ax + by = c

Rearrange first to read the gradient, or use a shortcut: lines parallel to ax + by = c all have the form **ax + by = d** with the same a and b. Only the constant changes.

### Worked example 3

Find the equation of the line parallel to 2x + 3y = 6 that passes through (3, 4).

```
Method 1 (rearrange):
  3y = -2x + 6,  so  y = -(2/3)x + 2,  gradient -2/3
  4 = -(2/3)(3) + c = -2 + c,  so c = 6
  y = -(2/3)x + 6

Method 2 (keep the form):
  2x + 3y = d
  2(3) + 3(4) = d,  so d = 18
  2x + 3y = 18
```

Both answers describe the same line: multiplying y = –(2/3)x + 6 by 3 gives 3y = –2x + 18, which is 2x + 3y = 18. Use the form the question asks for.

## Unknown coefficients

### Worked example 4

The line y = (k – 1)x + 4 is parallel to the line y = 3x – 2. Find k.

```
Parallel, so the gradients are equal:
k - 1 = 3
k = 4
```

The y-intercepts (4 and –2) play no part; they only confirm that the lines are different.

## Parallel sides and shapes

Parallel sides identify quadrilaterals:

| Shape | Parallel sides |
|---|---|
| Trapezium | exactly one pair |
| Parallelogram (including rhombus, rectangle, square) | two pairs |

### Worked example 5 (Extended): showing a quadrilateral is a parallelogram

A(0, 1), B(4, 3), C(5, 6) and D(1, 4) are the vertices of quadrilateral ABCD. Show that ABCD is a parallelogram.

```
Gradient AB = (3 - 1)/(4 - 0) = 2/4 = 1/2
Gradient DC = (6 - 4)/(5 - 1) = 2/4 = 1/2
Gradient BC = (6 - 3)/(5 - 4) = 3/1 = 3
Gradient AD = (4 - 1)/(1 - 0) = 3/1 = 3
AB is parallel to DC, and BC is parallel to AD.
Two pairs of parallel sides, so ABCD is a parallelogram.
```

A Core version of this question gives the shape on a grid, and you count squares for each gradient instead.

## Common mistakes

- **Keeping the original c.** The new line goes through a new point, so c almost always changes.
- **Changing the gradient**, for example using the negative reciprocal. That rule is for perpendicular lines (Extended 3.7), not parallel ones.
- **Reading the gradient of 2x + 3y = 6 as 2.** Rearrange first: it is –2/3.
- **Writing the answer as "m = 5, c = –6"** instead of the equation.
- **Calling identical equations parallel.** y = 3x + 1 and y = 1 + 3x are the same line.
- **Mixing up "parallel to the x-axis"** (horizontal, y = k) with "parallel to the y-axis" (vertical, x = k).

## Exam technique

- **Write down the gradient** of a parallel line: one number, copied from the given line. No working is needed if y is already the subject.
- **Find the equation**: show the substitution, such as 4 = 5(2) + c, so a slip in arithmetic still earns method credit.
- **Show that** two lines are parallel: find both gradients, show they are equal, and say so. If the lines could be the same, show their intercepts differ.
- Check your equation by substituting the given point: it must fit exactly.

## Next steps

- Recap with the [parallel lines revision notes](/resources/cambridge-igcse-mathematics-0580-parallel-lines-cambridge-igcse-maths-revision-notes/) and practise with the [parallel lines practice questions](/resources/cambridge-igcse-mathematics-0580-parallel-lines-cambridge-igcse-maths-practice/).
- Extended candidates should continue with the [perpendicular lines study guide](/resources/cambridge-igcse-mathematics-0580-perpendicular-lines-cambridge-igcse-maths/).
- Other resources for syllabus 0580 are on the [Cambridge IGCSE Mathematics hub](/boards/cambridge/igcse/mathematics/).

## Official syllabus

Cambridge International, *Cambridge IGCSE Mathematics 0580 syllabus for 2025, 2026 and 2027*, Topic 3 Coordinate geometry, C3.6 and E3.6 Parallel lines: "Find the gradient and equation of a straight line parallel to a given line."
