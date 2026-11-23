---
title: "IB DP Mathematics: Analysis and Approaches (AA): 2.11 Transformations of graphs"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Functions"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 2.11
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-11"
description: "Study guide to IB Maths AA section 2.11: translations, reflections, stretches and composite transformations, with mapped points, domains and ranges."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deep on one section of IB Diploma Programme Mathematics: Analysis and Approaches (first assessment 2021): **section 2.11, transformations of graphs**. It is SL content, so it is examined at both SL and HL. The wider unit, including rational, exponential and logarithmic graphs, is in the [rational, exponential and logarithmic functions study guide](/resources/ib-dp-mathematics-aa-sl-rational-exponential-log-functions-transformations/); this page concentrates on the reasoning behind transformations, how to describe them for full marks, and how they change domains, ranges and key points.

Condense it afterwards with the [transformations revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-2-11-revision-notes/) and test yourself on the [transformations practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-2-11-practice/).

## What section 2.11 asks for

The guide lists:

- translations y = f(x) + b and y = f(x − a);
- reflections in both axes, y = −f(x) and y = f(−x);
- a vertical stretch with scale factor p, y = p f(x);
- a horizontal stretch with scale factor 1/q, y = f(qx);
- composite transformations, built from the four types above.

At SL, a single bracket that combines a horizontal stretch and a translation, such as f(2x − 6), is not required. HL students meet y = f(ax + b) in section 2.16, so this section is the foundation for that work too.

## Why "inside" changes act the opposite way

Students often memorise "inside the bracket is the opposite" without knowing why. The reason makes it impossible to forget.

Take g(x) = f(x − 3). Ask: where does g take the value that f takes at x = 5? We need x − 3 = 5, so x = 8. Every output of f now happens 3 units **later** on the x-axis, so the graph moves 3 to the **right**.

Take h(x) = f(2x). h takes the value f(6) when 2x = 6, that is at x = 3. Every output arrives at **half** the x-value, so the graph is squashed towards the y-axis: a horizontal stretch with scale factor 1/2.

Outside changes, such as f(x) + 4 or 3f(x), act directly on the output, so they behave exactly as they look.

## Mapping points: the one rule you need

Write the transformed equation, then ask what happens to a general point (x, y) on y = f(x).

| New graph | Image of (x, y) | Points that do not move |
|---|---|---|
| y = f(x) + b | (x, y + b) | none (if b ≠ 0) |
| y = f(x − a) | (x + a, y) | none (if a ≠ 0) |
| y = −f(x) | (x, −y) | points on the x-axis |
| y = f(−x) | (−x, y) | points on the y-axis |
| y = p f(x) | (x, py) | points on the x-axis |
| y = f(qx) | (x/q, y) | points on the y-axis |

The last column is useful when sketching. Under a vertical stretch the x-intercepts stay fixed; under a horizontal stretch the y-intercept stays fixed. If your sketch moves one of these, something has gone wrong.

## Describing a transformation for full marks

A description earns marks only if it names the type **and** gives the full detail:

- **Translation:** give the vector, for example "translation by the vector (−2, 5)", which IB writes as a column vector, or say "2 units left and 5 units up".
- **Reflection:** name the axis: "reflection in the x-axis".
- **Stretch:** name the direction **and** the scale factor: "vertical stretch with scale factor 3" or "horizontal stretch with scale factor 1/2".

"Moves left", "shrinks" and "flips" do not earn marks on their own.

## Composite transformations and order

Horizontal transformations act on x and vertical ones act on y, so a horizontal change and a vertical change can be applied in either order. Order matters **within** one direction.

- **Vertical:** y = p f(x) + b means stretch (or reflect) first, then translate. Translating first gives p(f(x) + b) = p f(x) + pb, which is a different graph.
- **Horizontal:** at SL each horizontal step is one of f(x − a), f(−x) or f(qx). Combining two of them inside one bracket, such as f(2x − 6) or f(3 − x), is the HL form f(ax + b) from section 2.16.

When a question gives a sequence in words, build the equation one step at a time, replacing the whole current expression each time.

### Worked example 1: from words to equation

Let f(x) = x² + 2x. The graph of g is obtained from the graph of f by a reflection in the y-axis, then a vertical stretch with scale factor 3, then a translation by the vector (0, −5). Find g(x) and the image of the vertex of f.

```
Reflect in y-axis:      f(−x) = x² − 2x
Stretch, factor 3:      3f(−x) = 3x² − 6x
Translate 5 down:       g(x) = 3x² − 6x − 5

Vertex of f: x² + 2x = (x + 1)² − 1, so (−1, −1)
(−1, −1) → (1, −1) → (1, −3) → (1, −8)
Check: g(1) = 3 − 6 − 5 = −8
```

Tracking the vertex separately and checking it in g(x) catches sign errors in the algebra.

### Worked example 2: domain and range under a composite

A function f has domain −2 ≤ x ≤ 4 and range −3 ≤ f(x) ≤ 5, with a maximum point at (1, 5). Let g(x) = −2f(x + 1) + 3. Find the domain and range of g and the image of the maximum.

```
A point (x, y) maps to (x − 1, −2y + 3).

Domain: x-values shift 1 left:   −3 ≤ x ≤ 3
Range:  y = −3 gives −2(−3) + 3 = 9
        y = 5  gives −2(5) + 3 = −7
        so −7 ≤ g(x) ≤ 9
Maximum (1, 5) → (0, −7), which is now a MINIMUM.
```

Two points to notice. The domain only responds to horizontal changes and the range only to vertical ones. And a reflection in the x-axis swaps the ends of the range and turns maxima into minima.

### Worked example 3: describing an unfamiliar graph

Describe a sequence of transformations that maps y = √x onto y = 5 − 2√(x + 3).

Rewrite it as y = −2√(x + 3) + 5, then read it in the order the operations act:

1. Translation 3 units left, by the vector (−3, 0).
2. Vertical stretch with scale factor 2.
3. Reflection in the x-axis.
4. Translation 5 units up, by the vector (0, 5).

Steps 2 and 3 can swap, since both are vertical scalings, but both must come before step 4. Step 1 can go anywhere, since it is horizontal. A safe check: the endpoint (0, 0) of y = √x should map to (−3, 5), and indeed 5 − 2√0 = 5 at x = −3.

## Transforming asymptotes and intercepts

Treat an asymptote as a line of points.

- A horizontal asymptote y = k responds only to vertical transformations: under y = p f(x) + b it becomes y = pk + b.
- A vertical asymptote x = c responds only to horizontal transformations: under y = f(x − a) it becomes x = c + a, and under y = f(qx) it becomes x = c/q.

Intercepts are not simply carried across. The y-intercept of y = f(x − 2) is f(−2), not f(0), so it must be recalculated. Work out new intercepts from the new equation.

## Common mistakes

- Moving y = f(x + 4) four units right. A "+" inside the bracket moves left.
- Calling y = f(3x) a horizontal stretch with scale factor 3. The scale factor is 1/3.
- Writing "stretch by 2" without saying vertical or horizontal.
- Applying a translation before a stretch when the equation is y = p f(x) + b.
- Assuming the y-intercept stays the same under a horizontal translation.
- Forgetting that y = −f(x) turns a maximum into a minimum and reverses the range.
- Leaving the domain unchanged under y = f(x − a) or y = f(qx).

## Exam technique: command words

- **Write down** the image of a point or an asymptote: one line, no working needed, but the answer must be exact.
- **Describe** a transformation: type, direction and scale factor or vector for each step, in a valid order.
- **Sketch** a transformed graph: label the images of the given key points and the new asymptotes as equations, and keep the general shape.
- **Find** g(x) from a description: show each step's expression, as in worked example 1, so method marks survive an algebra slip.
- **Hence**: use the transformation you have just described rather than starting again.

Paper 1 is calculator-free, so all of this must be fluent by hand. On Paper 2, a GDC is a quick way to check a sketch, but descriptions must still be written in words.

## Where to go next

Revise the key facts in the [transformations revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-2-11-revision-notes/), then work through the [transformations practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-2-11-practice/). The same ideas drive the trigonometric models y = a sin(b(x + c)) + d in the [circular functions study guide](/resources/ib-dp-mathematics-aa-circular-functions-trig-identities/). HL students should continue to the [modulus and related graphs study guide](/resources/ib-dp-mathematics-analysis-and-approaches-2-16/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus section SL 2.11.
