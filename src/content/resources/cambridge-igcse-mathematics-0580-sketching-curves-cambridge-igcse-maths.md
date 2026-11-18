---
title: "Cambridge IGCSE Mathematics (0580): Sketching curves"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Topic 2 – Algebra and graphs"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 2.11
syllabusTopics:
  - qualification: "igcse"
    topic: "algebra-and-graphs-cambridge-igcse-maths"
    subtopic: "sketching-curves-cambridge-igcse-maths"
description: "Study guide to 0580 subtopic 2.11 Sketching curves: roots, intercepts, symmetry, turning points and asymptotes for every curve family in the syllabus."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **2.11 Sketching curves** in the Cambridge IGCSE Mathematics 0580 syllabus for examination in 2025, 2026 and 2027. The statement for both tiers is to **recognise, sketch and interpret** graphs of given functions; the tiers differ in which functions and which features.

| | Core (C2.11) | Extended (E2.11) |
|---|---|---|
| Functions | (a) linear, (b) quadratic | (a) linear, (b) quadratic, (c) cubic, (d) reciprocal, (e) exponential |
| Forms | | ax + by = c; y = ax² + bx + c; y = ax³ + b; y = ax³ + bx² + cx; y = a/x + b; y = arˣ + b (a, b, c rational; r rational and positive) |
| Features | symmetry and roots; turning points **not** required | turning points, roots and symmetry; vertical and horizontal asymptotes; turning points of quadratics by completing the square |

A sketch is **not** an accurate graph. You do not need a table of values or graph paper. You need the right **shape** in the right **position**, with the key points **labelled**. The labels carry most of the marks. Accurate plotted graphs belong to subtopic 2.10: see the [graphs of functions study guide](/resources/cambridge-igcse-mathematics-0580-graphs-of-functions-cambridge-igcse-maths/). Afterwards, use the [sketching curves revision notes](/resources/cambridge-igcse-mathematics-0580-sketching-curves-cambridge-igcse-maths-revision-notes/) and the [sketching curves practice questions](/resources/cambridge-igcse-mathematics-0580-sketching-curves-cambridge-igcse-maths-practice/).

## The sketching checklist

For any function, work out:

1. **Shape**: which family is it, and which way up?
2. **y-intercept**: put x = 0.
3. **Roots (x-intercepts)**: put y = 0 and solve, usually by factorising.
4. **Symmetry** (quadratics): the line halfway between the roots.
5. **Turning points** *(Extended)*: from completed square form for quadratics.
6. **Asymptotes** *(Extended)*: for reciprocal and exponential graphs.

Then draw the shape through the points and label each one with its coordinates or equation.

## Linear graphs

A line in the form ax + by = c is fastest to sketch from its two intercepts.

### Worked example 1

Sketch 3x + 2y = 12.

```
x = 0:  2y = 12  ->  (0, 6)
y = 0:  3x = 12  ->  (4, 0)
Join with a straight line and label both intercepts.
```

Rearranged, y = −1.5x + 6, so the gradient is negative and the line slopes down from left to right, which matches the sketch.

## Quadratic graphs (Core and Extended)

The sign of x² gives the shape: positive is a **U** (minimum), negative is an **n** (maximum). The line of symmetry is halfway between the roots.

### Worked example 2: two quadratics

Sketch (a) y = x² − 2x − 8 and (b) y = 5 + 4x − x², showing the roots, the y-intercept and the line of symmetry.

```
(a) Positive x^2: U-shape.
    y-intercept: (0, -8)
    Roots: (x - 4)(x + 2) = 0  ->  (-2, 0) and (4, 0)
    Symmetry: x = (-2 + 4)/2 = 1

(b) Negative x^2: n-shape.
    y-intercept: (0, 5)
    Roots: -(x^2 - 4x - 5) = -(x - 5)(x + 1) = 0  ->  (-1, 0) and (5, 0)
    Symmetry: x = (-1 + 5)/2 = 2
```

In (b), take out −1 before factorising, so that the bracket has a positive x².

### Worked example 3 (Extended): turning points by completing the square

(a) Find the turning point of y = x² − 2x − 8. (b) Sketch y = 2x² + 4x + 5.

```
(a) x^2 - 2x - 8 = (x - 1)^2 - 1 - 8 = (x - 1)^2 - 9
    Minimum point (1, -9), on the line of symmetry x = 1.

(b) 2x^2 + 4x + 5 = 2(x^2 + 2x) + 5
                  = 2[(x + 1)^2 - 1] + 5
                  = 2(x + 1)^2 + 3
    Minimum point (-1, 3). The minimum is above the x-axis,
    so there are NO roots. y-intercept (0, 5).
```

In form a(x + p)² + q, the turning point is (−p, q). The x-coordinate changes sign; the y-coordinate does not. Completed square form also tells you about roots: if a > 0 and q > 0, the whole curve is above the x-axis.

## Cubic graphs (Extended)

| Form | What to look for |
|---|---|
| y = ax³ + b | Like y = x³ moved up by b (and stretched by a). One root, where ax³ = −b. If a < 0 the curve falls from left to right. |
| y = ax³ + bx² + cx | Every term has x, so it always passes through the origin. Take out x, factorise the quadratic, find up to three roots. |

For a > 0 the curve comes up from the bottom left and leaves at the top right; for a < 0 it comes down from the top left and leaves at the bottom right.

### Worked example 4: three cubics

Sketch (a) y = 8 − x³, (b) y = x³ − 4x² + 3x, (c) y = x³ − 6x² + 9x.

```
(a) y-intercept (0, 8).  Root: x^3 = 8 -> (2, 0).
    Negative x^3: falls from top left to bottom right,
    flattening momentarily as it passes (0, 8).

(b) x(x^2 - 4x + 3) = x(x - 1)(x - 3)
    Roots (0, 0), (1, 0), (3, 0). Positive x^3:
    up through 0, turn, down through 1, turn, up through 3.

(c) x(x^2 - 6x + 9) = x(x - 3)^2
    Roots (0, 0) and (3, 0); the squared bracket means the
    curve TOUCHES the x-axis at x = 3 and turns there,
    without crossing it.
```

A repeated factor such as (x − 3)² is a turning point on the x-axis. Sketches for (c) that cross at x = 3 lose the shape mark.

## Reciprocal graphs y = a/x + b (Extended)

- **Vertical asymptote**: x = 0 (the y-axis), because a/0 is undefined.
- **Horizontal asymptote**: y = b, because a/x gets closer to 0 as x gets large.
- If a > 0, the branches lie top right and bottom left of the point where the asymptotes cross; if a < 0, top left and bottom right.
- Root: solve a/x + b = 0. There is no y-intercept.

### Worked example 5

Sketch y = 2/x + 1.

```
Asymptotes: x = 0 and y = 1 (draw as dashed lines, labelled)
Root: 2/x = -1  ->  x = -2, giving (-2, 0)
a = 2 > 0: branches top right and bottom left of (0, 1)
The bottom-left branch crosses the x-axis at (-2, 0).
```

## Exponential graphs y = arˣ + b (Extended)

- **y-intercept**: (0, a + b), since r⁰ = 1.
- **Horizontal asymptote**: y = b.
- r > 1 (with a > 0): rises steeply to the right, flattens towards y = b on the left. 0 < r < 1: the mirror image.

### Worked example 6

Sketch y = 4 × (0.5)ˣ − 2.

```
y-intercept: 4 × 1 - 2 = 2  ->  (0, 2)
Asymptote:   y = -2
Root:        4 × 0.5^x = 2  ->  0.5^x = 0.5  ->  x = 1, giving (1, 0)
r = 0.5 < 1: the curve falls from left to right towards y = -2.
```

## Interpreting sketches

A sketch can count solutions without solving anything. For example, how many solutions does x³ − 4x = 1 have? Sketch y = x³ − 4x = x(x − 2)(x + 2), roots −2, 0 and 2, and the line y = 1. The curve rises above 1 between −2 and 0, comes back down through 1 before reaching 0, and rises through 1 again after x = 2, so the line meets it **three** times.

## Common mistakes

- Drawing a U-shape for a negative x² coefficient.
- Writing the turning point of (x − 1)² − 9 as (−1, −9).
- Crossing the x-axis at a repeated root instead of touching it.
- Letting a reciprocal or exponential curve cross its asymptote.
- Leaving roots, intercepts or asymptotes unlabelled.
- Forgetting that y = ax³ + bx² + cx passes through the origin.

## Exam technique

- **"Sketch"**: shape and labelled key features only; neatness counts, accuracy of scale does not.
- **"Show the coordinates of"**: write coordinates next to each point, not just x-values.
- **"Show any asymptotes"**: dashed lines with their equations.
- **"Recognise"**: matching questions; decide from one feature at a time (sign of the leading term, constant term, form a/x).

## Next steps

- [Sketching curves revision notes](/resources/cambridge-igcse-mathematics-0580-sketching-curves-cambridge-igcse-maths-revision-notes/) for the features of each family on one page.
- [Sketching curves practice questions](/resources/cambridge-igcse-mathematics-0580-sketching-curves-cambridge-igcse-maths-practice/) with marked answers.
- Completing the square: [algebraic manipulation study guide](/resources/cambridge-igcse-mathematics-0580-algebraic-manipulation-cambridge-igcse-maths/).
- Exact turning points of cubics: [differentiation study guide](/resources/cambridge-igcse-mathematics-0580-differentiation-cambridge-igcse-maths/).

## Official syllabus

Cambridge International: *Cambridge IGCSE Mathematics 0580 syllabus* for examination in 2025, 2026 and 2027, Topic 2 Algebra and graphs, C2.11 and E2.11 Sketching curves.
