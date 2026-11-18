---
title: "IB DP Mathematics: Analysis and Approaches (AA): 2.4 Key features of graphs and points of intersection"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Functions"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 2.04
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-4"
description: "Study guide to IB Maths AA 2.4: finding maxima, minima, zeros, symmetry, vertices and asymptotes with a GDC, and points of intersection, with worked examples."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This study guide covers section 2.4 of IB Diploma Programme Mathematics: Analysis and Approaches, common to SL and HL. The IB *Mathematics: analysis and approaches guide* (first assessment 2021) asks you to determine key features of graphs and to find the point of intersection of two curves or lines using technology. The key features it lists are maximum and minimum values, intercepts, symmetry, the vertex, zeros of functions or roots of equations, and vertical and horizontal asymptotes found with graphing technology.

The [straight lines, functions, inverses and quadratics guide](/resources/ib-dp-mathematics-aa-sl-lines-functions-quadratics/) gives one GDC example. This page works through every feature on the list, shows how to report each one for full marks, and explains the calculator traps that hide intersections and invent asymptotes. Pair it with the [2.4 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-4-revision-notes/) and the [2.4 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-4-practice/).

## The features and how to report them

| Feature | What it is | How to report it |
|---|---|---|
| Maximum / minimum | Highest or lowest point locally, or over the whole domain | Coordinates, or "the maximum value is …" if a value is asked for |
| y-intercept | Where x = 0 | (0, f(0)) |
| Zeros / x-intercepts | x-values where f(x) = 0 | "x = …" for zeros or roots; (x, 0) for intercepts |
| Vertex | The turning point of a parabola (or of an absolute-value graph) | Coordinates |
| Symmetry | A line or point the graph is symmetric about | Equation of the line, e.g. x = 2, or the centre point |
| Vertical asymptote | Line x = a that the graph approaches as y grows without limit | Equation x = a |
| Horizontal asymptote | Line y = b approached as x → ±∞ | Equation y = b |
| Point of intersection | Point lying on both graphs | Coordinates |

**Zeros and roots.** A function has zeros; an equation has roots. The zeros of f are the roots of f(x) = 0, and they are the x-coordinates of the x-intercepts. Answer in the language of the question.

**Value or point.** "Find the maximum value" wants a y-value. "Find the coordinates of the maximum point" wants (x, y). Mixing them up loses the accuracy mark.

## Local and global extremes

On a restricted domain, the largest output may occur at an end point, not at a turning point. For f(x) = x³ − 12x on −3 ≤ x ≤ 5, the local maximum is (−2, 16), but f(5) = 65 is the greatest value. The range is −16 ≤ f(x) ≤ 65. Always evaluate the end points as well as the turning points.

## Worked example 1: a full feature list

Use technology to describe the key features of f(x) = 4x/(x² + 1).

```
y-intercept and only zero:   (0, 0)
Local maximum:               (1, 2)
Local minimum:               (−1, −2)
Horizontal asymptote:        y = 0   (f(x) → 0 as x → ±∞)
Vertical asymptotes:         none    (x² + 1 is never 0)
Symmetry:                    rotational symmetry of order 2 about the origin
Range:                       −2 ≤ f(x) ≤ 2
```

Two checks by hand support the GDC: f(1) = 4/2 = 2, and f(−x) = −f(x), which gives the symmetry about the origin. A table of values at x = 100 gives f(100) ≈ 0.04, supporting the asymptote y = 0.

## Asymptotes with technology

A GDC does not label asymptotes, so you infer them.

- **Vertical:** the graph shoots up or down near some x = a. Confirm that the function is undefined at a (usually a zero denominator), and use the table of values close to a.
- **Horizontal:** the graph levels off for large |x|. Confirm with values such as x = 1000 and x = −1000.
- **Fake vertical lines:** in connected mode, some calculators join the two branches across a vertical asymptote with a near-vertical line. That line is not part of the graph; do not copy it.

## Worked example 2: asymptotes and symmetry

Let g(x) = 3/(x² − 4).

```
Vertical asymptotes:   x = −2 and x = 2   (x² − 4 = 0)
Horizontal asymptote:  y = 0
Zeros:                 none (the numerator is never 0)
y-intercept:           (0, −0.75), which is also a local maximum
Symmetry:              about the y-axis, because g(−x) = g(x)
```

The graph has three parts: positive branches for x < −2 and x > 2, and a downward arch between the asymptotes with its top at (0, −0.75). So the line y = k meets the graph twice if k > 0 or k < −0.75, once if k = −0.75, and not at all if −0.75 < k ≤ 0. Questions about the number of solutions of g(x) = k are answered this way.

## Points of intersection

To find where y = f(x) and y = g(x) meet, graph both and use the intersect tool for each point. Alternatively, graph y = f(x) − g(x) and find its zeros, which gives the x-coordinates.

### Worked example 3

Find the points where y = x³ − 6x² + 9x + 1 meets y = x + 1.

```
GDC intersections: (0, 1), (2, 3), (4, 5)
Check: the values look exact, so test by algebra:
x³ − 6x² + 9x + 1 = x + 1
x³ − 6x² + 8x = 0
x(x − 2)(x − 4) = 0   ✓
```

When GDC output looks like a whole number or a simple fraction, a quick substitution confirms it, and you can then give exact values. The same cubic has a local maximum (1, 5), a local minimum (3, 1), y-intercept (0, 1) and one zero at x = −0.104.

### Worked example 4: symmetric intersections

Solve x² − 1 = 2 cos x (x in radians).

```
GDC: x = −1.27 and x = 1.27; y = 0.601 at both
```

Both functions are symmetric about the y-axis, so solutions come in pairs ±a. Spotting this halves the work and checks the GDC. Set the calculator to radians: in degree mode, cos x hardly changes over this window and the answers are wrong.

## Calculator traps

- **Hidden intersections:** a default window may cut off a solution far out or squeezed against an asymptote. Zoom out, then in.
- **Near-tangency:** two graphs that almost touch may look like one point. Zoom in to see whether they cross twice or not at all.
- **Rounding too early:** if you reuse an intersection value, keep the full calculator value and round only the final answer.
- **Wrong mode:** trigonometric functions need radian mode unless degrees are stated.

## Common mistakes

- Giving a maximum value when coordinates were asked for, or the reverse.
- Ignoring end points of a restricted domain when stating the greatest or least value.
- Writing an asymptote as a number ("2") instead of an equation ("x = 2").
- Copying the GDC's joining line as an asymptote or as part of the curve.
- Stopping after one intersection when the graphs meet again outside the window.
- Answers to more or fewer than 3 significant figures without being asked.

## Exam technique

- **Write down:** on Paper 2 these are often one-mark GDC answers; no working is needed, but a misread costs the mark, so check the coordinates.
- **Find the coordinates:** give (x, y) to 3 s.f.
- **Hence find the number of solutions:** refer to your graph and the intersections you can see, giving a reason.
- **Show that:** a GDC answer alone does not prove anything; add the algebra, as in worked example 3.

## Where to go next

Use the [2.4 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-4-revision-notes/) to fix the feature list in memory, then work through the [2.4 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-4-practice/). Graph sketching itself is covered in the [2.3 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-3/), and solving equations graphically in the [2.10 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-10/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus section SL 2.4.
