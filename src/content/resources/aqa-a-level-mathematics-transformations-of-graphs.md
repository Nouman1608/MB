---
title: "AQA A-level Mathematics: Transformations of Graphs (7357)"
seoTitle: "AQA A-Level Maths Transformations of Graphs Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Transformations of Graphs"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 13
syllabusTopics:
  - qualification: "a-level"
    topic: "b-algebra-and-functions-aqa-alevel-maths"
    subtopic: "b9-transformations-of-graphs-aqa-alevel-maths"
description: "Study guide to AQA A-level Maths content reference B9: translations, stretches and reflections of y = f(x), combined in order, with asymptotes tracked."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This study guide covers content reference **B9** of the AQA A-level Mathematics (7357) specification, version 1.3 (31 January 2018), for A-level exams from June 2018 onwards. B9 sits in section B: Algebra and functions. It asks you to understand the effect of simple transformations on the graph of y = f(x) and to sketch the associated graphs y = af(x), y = f(x) + a, y = f(x + a) and y = f(ax), including combinations. Section B is part of the Paper 1 content, and Papers 2 and 3 can each assess any Paper 1 content.

Use this page with the [Transformations of Graphs revision notes](/resources/aqa-a-level-mathematics-transformations-of-graphs-revision-notes/) and the [practice questions](/resources/aqa-a-level-mathematics-transformations-of-graphs-practice/). Curve sketching is in B7 and functions in B8, so see the [Mathematical language, set notation and functions guide](/resources/aqa-a-level-mathematics-mathematical-language-set-notation-functions-and/) too. For the full course, use the [AQA A-level Mathematics hub](/boards/aqa/a-level/mathematics/) and the [printable checklist](/checklists/aqa/a-level/mathematics/). To find your weak spots first, try the [free 10-minute diagnostics](/diagnostics/).

## What B9 covers

| Reference | What you must be able to do |
|---|---|
| B9 | Understand the effect of simple transformations on the graph of y = f(x) |
| B9 | Sketch y = f(x) + a and y = f(x + a) |
| B9 | Sketch y = af(x) and y = f(ax) |
| B9 | Sketch combinations of these transformations |

The specification does not name the transformations or the order of working. The labels below (translation, stretch, reflection) are the standard ones, and they are the ones to use when you describe a transformation in words.

## The four building blocks

Start from one graph, y = f(x). Each change to the formula does one thing to every point (x, y) on it.

| New graph | Change to the formula | Effect on the graph | Point (x, y) becomes |
|---|---|---|---|
| y = f(x) + a | outside, added | translation by (0, a) | (x, y + a) |
| y = f(x + a) | inside, added | translation by (−a, 0) | (x − a, y) |
| y = af(x) | outside, multiplied | stretch, scale factor a, parallel to the y-axis | (x, ay) |
| y = f(ax) | inside, multiplied | stretch, scale factor 1/a, parallel to the x-axis | (x/a, y) |

Two rules cover almost everything.

1. A change **outside** the brackets acts on y and does what you expect. Adding 2 moves the graph up 2. Multiplying by 3 makes it three times as tall.
2. A change **inside** the brackets acts on x and does the opposite of what you expect. f(x + 1) moves the graph left. f(2x) squashes it towards the y-axis.

Reflections are the case a = −1. y = −f(x) reflects in the x-axis, and y = f(−x) reflects in the y-axis.

**Why inside changes reverse.** On y = f(x + 1), the output at x = 4 is f(5). The graph reaches the value that f had at 5 when x is 4, one place earlier. So every feature appears 1 to the left.

### Worked example 1: all the building blocks on one curve

The curve C has equation y = f(x), where f(x) = x²(x − 3) = x³ − 3x². It has a maximum at (0, 0), a minimum at (2, −4) and crosses the x-axis at (3, 0). Find the images of these three points and the equation of each new curve.

```
Transformation        Equation               (0,0) max   (2,-4) min   (3,0)
y = f(x) + 2          x³ − 3x² + 2           (0, 2)      (2, −2)      (3, 2)
y = f(x − 1)          (x − 1)²(x − 4)        (1, 0)      (3, −4)      (4, 0)
y = 3f(x)             3x³ − 9x²              (0, 0)      (2, −12)     (3, 0)
y = f(2x)             8x³ − 12x²             (0, 0)      (1, −4)      (3/2, 0)
y = −f(x)             −x³ + 3x²              (0, 0)      (2, 4)       (3, 0)
y = f(−x)             −x³ − 3x²              (0, 0)      (−2, −4)     (−3, 0)
```

Things to notice:

- In y = f(x − 1) the point (3, 0) goes to (4, 0), so the translation is 1 to the **right**.
- Stretching in the y direction keeps every x-intercept. Stretching in the x direction keeps every y-intercept.
- In y = −f(x) the maximum at (0, 0) becomes a **minimum** and the minimum becomes a maximum. In y = f(−x), the turning point at (2, −4) moves to (−2, −4), still a minimum.
- The point (3, 0) stays put under y = 3f(x) and y = −f(x), because neither changes x. It moves under every other row.

## Combining transformations

For a combination, track each key point through the stages. The order matters, so settle it before you start.

**Rule for the order.** Take the formula y = af(b(x + c)) + d. The stretches and translations in each direction happen in this order:

```
1. b(...)     stretch, scale factor 1/b, parallel to the x-axis
2. x + c      translation by (−c, 0)
3. a f(...)   stretch, scale factor a, parallel to the y-axis
4. ... + d    translation by (0, d)
```

In the y direction this is the order of operations you would use to evaluate the formula from f outwards. In the x direction it is the reverse: the bracket b(x + c) is built by stretching first and then translating, because x is replaced by x + c in the graph y = f(bx). The x-changes (1 and 2) do not interfere with the y-changes (3 and 4), so the pair 1, 2 can be done before or after the pair 3, 4. Within a pair, keep the order above.

### Worked example 2: tracking points through several stages

Using the same curve, sketch y = −2f(x + 1) + 5. Give the coordinates of the images of the three key points and the y-intercept.

Build the map for the point (x, y). Inside first: x + 1 means x becomes x − 1. Then multiply by −2 and add 5.

```
(x, y)  →  (x − 1, −2y + 5)

(0, 0)   →  (−1, 5)     was a maximum, now a minimum
(2, −4)  →  (1, 13)     was a minimum, now a maximum
(3, 0)   →  (2, 5)
```

Check the multiplication by −2: it stretches by scale factor 2 and reflects in the x-axis, which turns the maximum into a minimum. The y-intercept is at x = 0. The equation is y = −2f(x + 1) + 5, so y = −2f(1) + 5 = −2(−2) + 5 = 9. The y-intercept is **(0, 9)**. It is not one of the images, because the old y-intercept (0, 0) moved to (−1, 5).

The sketch: a cubic with a minimum at (−1, 5), a maximum at (1, 13), passing through (0, 9) and (2, 5), going up on the left and down on the right.

### Worked example 3: when the x-changes are not separate

Describe how to get from y = f(x) to y = f(2x − 1).

Write 2x − 1 = 2(x − ½). Working from inside, there are two correct descriptions:

- Stretch with scale factor ½ parallel to the x-axis, then translate by (½, 0).
- Translate by (1, 0), then stretch with scale factor ½ parallel to the x-axis.

Check with the point (3, 0), which is a root of f. Method one: 3 → 3/2 → 3/2 + ½ = 2. Method two: 3 → 4 → 2. Both give (2, 0). Substituting x = 2 into f(2x − 1) gives f(3) = 0, which confirms it. The same transformation can be built two ways, but the size of the translation depends on the order, ½ in one and 1 in the other. State the order with the number.

Applying this to all three points of C gives (½, 0), (3/2, −4) and (2, 0).

## Asymptotes

An asymptote moves like any other feature, so treat it as a line and apply the same map.

- A horizontal asymptote y = k becomes y = ak + d under y = af(x) + d.
- A vertical asymptote x = h becomes x = h/b − c under y = f(b(x + c)).

### Worked example 4: a reciprocal graph

Sketch y = 4/(x + 3) − 2, starting from y = 1/x.

The equation is 4f(x + 3) − 2 with f(x) = 1/x. Stages: translate by (−3, 0), stretch with scale factor 4 parallel to the y-axis, translate by (0, −2).

- Asymptotes: x = 0 becomes **x = −3**. y = 0 becomes y = 4(0) − 2 = **−2**.
- The point (1, 1) on y = 1/x goes to (−2, 2). Check: 4/(−2 + 3) − 2 = 2.
- y-intercept: 4/3 − 2 = **−2/3**.
- x-intercept: 4/(x + 3) = 2, so x + 3 = 2 and x = **−1**.

The two branches lie in the top-right and bottom-left sections made by the asymptotes, as for y = 1/x. Label both asymptotes and both intercepts on the sketch.

### Worked example 5: an exponential graph

Sketch y = 5 − 2 × 3ˣ. Write it as −2f(x) + 5 with f(x) = 3ˣ. The graph of 3ˣ has horizontal asymptote y = 0 and passes through (0, 1).

- Stretch by scale factor 2, reflect in the x-axis, translate by (0, 5).
- Asymptote: y = 0 becomes **y = 5**.
- (0, 1) becomes (0, 3), so the y-intercept is **3**.
- x-intercept: 3ˣ = 5/2, so x = log₃(5/2) ≈ **0.834**.

The curve starts just below y = 5 on the left, passes through (0, 3) and falls steeply through the x-axis. It never reaches y = 5.

## Working in both directions

### Reading a transformation from an equation

Complete the square. For y = x² − 6x + 14 = (x − 3)² + 5, the graph is y = x² translated by (3, 5), with vertex (3, 5). For y = 2x² + 8x + 3 = 2(x + 2)² − 5, it is y = x² stretched by scale factor 2 parallel to the y-axis, then translated by (−2, −5).

### Writing an equation from a transformation

Replace x or y in the formula, following the rules above. For a stretch with scale factor 3 parallel to the x-axis of y = x² − x, replace x by x/3:

```
y = (x/3)² − (x/3) = x²/9 − x/3
```

### Worked example 6: a trigonometric graph

Sketch y = 2 sin(3x) − 1 for 0° ≤ x ≤ 120°. Take the key points of y = sin x as (0, 0), (90, 1), (180, 0), (270, −1), (360, 0). The map is (x, y) → (x/3, 2y − 1).

```
(0, 0) → (0, −1)    (90, 1) → (30, 1)    (180, 0) → (60, −1)
(270, −1) → (90, −3)    (360, 0) → (120, −1)
```

One full cycle fits in 120°, the midline is y = −1, the maximum is 1 and the minimum is −3.

## Common errors

- Moving f(x + 3) to the right. It moves 3 to the **left**.
- Using scale factor 2 for f(2x). The scale factor is ½.
- Applying a stretch before a translation when the formula says the opposite, for example treating 2f(x) + 1 as "add 1, then double". Doubling comes first.
- Forgetting that the y-intercept changes under a translation in x. Recalculate it from the new equation.
- Leaving asymptotes unlabelled, or leaving the asymptote unchanged after a vertical translation.
- Writing "move" for a stretch. Use translation, stretch and reflection, with the scale factor or vector.

Now try the [practice questions](/resources/aqa-a-level-mathematics-transformations-of-graphs-practice/) and use the [revision notes](/resources/aqa-a-level-mathematics-transformations-of-graphs-revision-notes/) for the final weeks.

## Official syllabus

AQA, *A-level Mathematics (7357) specification*, for teaching from September 2017 onwards, version 1.3 (31 January 2018), section 3.3 (B: Algebra and functions), content reference B9.
