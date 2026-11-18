---
title: "IB DP Mathematics: Analysis and Approaches (DP Mathematics: Analysis and Approaches): Graphs of |f(x)|, f(|x|) and related functions; modulus equations (AHL only)"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Topic 2 – Functions"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 2.16
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-16"
description: "HL study guide to IB Maths AA 2.16: sketching |f(x)|, f(|x|), 1/f(x), f(ax + b) and [f(x)]², and solving modulus equations and inequalities with checks."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers **section 2.16 of IB DP Mathematics: Analysis and Approaches** (first assessment 2021), which is **HL only** (AHL). You must sketch five graphs related to y = f(x):

- y = |f(x)| and y = f(|x|);
- y = 1/f(x);
- y = f(ax + b);
- y = [f(x)]²;

and solve modulus equations and inequalities. The [further functions study guide](/resources/ib-dp-mathematics-aa-hl-further-functions/) has a summary table and a worked example using x² − 2x − 3. Here every graph is built from one different base function so you can compare them, and the modulus methods are set out with the checks that examiners reward.

Afterwards, use the [modulus and related graphs revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-16-revision-notes/) and the [modulus and related graphs practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-16-practice/).

## One base function, five graphs

Throughout, let f(x) = x² − 4x = x(x − 4). Its graph is a parabola with zeros at x = 0 and x = 4, vertex (2, −4) and y-intercept (0, 0).

### y = |f(x)|: reflect what is below the axis

The modulus makes every output non-negative. Keep the parts of the graph on or above the x-axis, and reflect the parts below it in the x-axis.

For x² − 4x, the section 0 < x < 4 is below the axis. After reflection:

- the minimum (2, −4) becomes a local **maximum (2, 4)**;
- the zeros (0, 0) and (4, 0) become sharp corners, where the graph is not smooth;
- the range becomes y ≥ 0.

### y = f(|x|): copy the right half to the left

For x ≥ 0, |x| = x, so the graph is unchanged on the right. For x < 0, f(|x|) = f(−x), so the left side is the mirror image of the right side. Method: delete the graph for x < 0, then reflect the remaining part in the y-axis.

For x² − 4|x|:

- zeros at x = −4, 0 and 4;
- minima at (2, −4) and (−2, −4);
- a corner at (0, 0), which is now a local maximum.

y = f(|x|) is always an **even** function, a link to section 2.14.

### y = 1/f(x): swap zeros and asymptotes

| Feature of y = f(x) | Feature of y = 1/f(x) |
|---|---|
| Zero at x = p | Vertical asymptote x = p |
| Vertical asymptote x = p | Zero at x = p (approached, if in the domain) |
| f(x) → ±∞ as x → ±∞ | Horizontal asymptote y = 0 |
| Maximum (p, q), q ≠ 0 | Minimum (p, 1/q) |
| Minimum (p, q), q ≠ 0 | Maximum (p, 1/q) |
| Point with y = 1 or y = −1 | Same point (invariant) |
| Sign of f | Same sign |
| Large \|f\| | Small \|1/f\|, and vice versa |

For 1/(x² − 4x): vertical asymptotes x = 0 and x = 4, horizontal asymptote y = 0, and the minimum (2, −4) becomes a local **maximum (2, −1/4)** on the middle branch, which lies below the axis because f is negative there. The outer branches are positive.

### y = f(ax + b): translate, then stretch

A point (p, q) on y = f(x) moves to ((p − b)/a, q). In words: a translation by b units to the left (the vector (−b, 0)), followed by a horizontal stretch with scale factor 1/a. Working the other way round, stretch first and then translate by b/a to the left.

For f(2x + 1):

```
(p, q) → ((p − 1)/2, q)
Vertex (2, −4) → (1/2, −4)
Zeros 0 and 4 → −1/2 and 3/2
Check: f(2x + 1) = (2x + 1)² − 4(2x + 1) = 4x² − 4x − 3 = (2x + 1)(2x − 3)
```

The heights do not change; only x-coordinates move.

### y = [f(x)]²: square every height

- Never negative.
- Zeros of f become points where the graph **touches** the x-axis (minima on the axis).
- Points with f(x) = ±1 move to height 1.
- Where |f| > 1 the graph rises; where |f| < 1 it is pulled towards the axis.

For (x² − 4x)²: minima at (0, 0) and (4, 0), and the vertex (2, −4) becomes a local **maximum (2, 16)**. Unlike |f(x)|, the graph is smooth at the zeros.

## Solving modulus equations

|A| = B means A = B or A = −B, **provided B ≥ 0**. Three reliable methods:

1. **Cases with a check.** Solve both A = B and A = −B, then reject any solution with B < 0.
2. **Squaring.** If both sides are moduli, |A| = |B| ⇔ A² = B², which needs no check.
3. **Graphs.** Sketch y = |A| and y = B; the number of intersections tells you how many solutions to expect.

### Worked example 1: a quadratic inside the modulus

Solve |x² − 4| = 3x.

```
Case 1: x² − 4 = 3x   → x² − 3x − 4 = 0 → x = 4 or x = −1
Case 2: x² − 4 = −3x  → x² + 3x − 4 = 0 → x = 1 or x = −4
Need 3x ≥ 0, so reject x = −1 and x = −4.
Solutions: x = 1 and x = 4
Check: |1 − 4| = 3 = 3(1);  |16 − 4| = 12 = 3(4)
```

A sketch confirms it: y = 3x only meets the W-shaped graph of |x² − 4| for x > 0.

## Solving modulus inequalities

- |A| < k (k > 0) ⇔ −k < A < k.
- |A| > k ⇔ A < −k or A > k.
- |A| < |B| ⇔ A² < B², since both sides are non-negative.
- For |A| ≥ B with B a function, find the boundary points by the case method (with checks), then decide the regions from a sketch.

### Worked example 2: a double inequality

Solve |x² − 5| < 4.

```
−4 < x² − 5 < 4
1 < x² < 9
x² > 1 gives x < −1 or x > 1;  x² < 9 gives −3 < x < 3
Solution: −3 < x < −1 or 1 < x < 3
```

### Worked example 3: a rejected boundary

Solve |x + 1| ≥ 2x − 4.

```
x + 1 = 2x − 4      → x = 5   (2x − 4 = 6 ≥ 0, valid)
−(x + 1) = 2x − 4   → x = 1   (2x − 4 = −2 < 0, reject)
```

There is only one intersection. The V-shaped graph of |x + 1| is above the line y = 2x − 4 to the left of x = 5 and below it to the right (the line is steeper). So the solution is **x ≤ 5**. Keeping x = 1 as a boundary would split the answer into a wrong pair of intervals.

## Common mistakes

- Reflecting in the y-axis for |f(x)|, or in the x-axis for f(|x|).
- Keeping the left half of the original graph in y = f(|x|).
- Drawing y = |f(x)| smooth at the zeros; it has corners there.
- For 1/f(x), forgetting that a zero of f gives an asymptote, or changing the sign of a branch.
- For f(ax + b), translating by b after stretching, instead of by b/a.
- For [f(x)]², making it cross the axis instead of touching it.
- Not rejecting modulus solutions that make the right-hand side negative.
- Squaring both sides when one side could be negative.

## Exam technique: command words

- **Sketch**: label intercepts and turning points as coordinates and asymptotes as equations; show corners clearly on modulus graphs.
- **On the same axes, sketch y = f(x) and y = |f(x)|**: draw the unchanged parts once and the reflected parts clearly, so the examiner can see what moved.
- **Solve** a modulus equation: show both cases and the check; a written rejection ("x = −1 is rejected since 3x < 0") earns the reasoning mark.
- **Hence solve** an inequality: use your sketch, and state the intervals.
- **Write down** the image of a point under f(ax + b): no working is needed, but use ((p − b)/a, q) carefully.

## Where to go next

Fix the rules in the [modulus and related graphs revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-16-revision-notes/), then try the [modulus and related graphs practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-16-practice/). The SL transformations behind f(ax + b) are in the [transformations of graphs guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-11/), and the sign methods for inequalities in the [inequalities guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-15/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus section AHL 2.16.
