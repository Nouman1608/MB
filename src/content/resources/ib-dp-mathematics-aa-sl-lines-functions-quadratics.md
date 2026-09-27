---
title: "IB DP Mathematics: Analysis and Approaches -- Straight lines, functions, inverses and quadratics Study Guide"
seoTitle: "IB Maths AA Lines, Functions and Quadratics Study Guide"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Straight lines, functions, inverses and quadratics"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 2.1
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-1"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-2"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-3"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-4"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-5"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-6"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-7"
description: "IB Maths AA study guide to straight lines, functions, composites, inverses and quadratics (sections 2.1-2.7), with fully worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-09-27
featured: false
---

This study guide teaches the first seven subtopics of the Functions topic in IB Diploma Programme Mathematics: Analysis and Approaches. It is aligned to the IB *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus sections 2.1–2.7, which are common content for SL and HL. It follows the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so it applies to the May and November 2026, 2027 and 2028 sessions.

For a one-page picture of the whole Functions strand, see the [Functions strand overview](/resources/ib-dp-mathematics-aa-functions/). This page goes deeper, section by section. When you have worked through it, use the [revision notes](/resources/ib-dp-mathematics-aa-sl-lines-functions-quadratics-revision-notes/) for recall and the [practice questions](/resources/ib-dp-mathematics-aa-sl-lines-functions-quadratics-practice/) to test yourself. The [IB DP Maths AA course hub](/boards/ib/ib-dp/mathematics-analysis-and-approaches/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-analysis-and-approaches/) show where this unit sits in the course.

## What this unit covers

| Section | What you must be able to do | SL/HL |
|---|---|---|
| 2.1 | Use y = mx + c, ax + by + d = 0 and y − y₁ = m(x − x₁); find gradients and intercepts; use parallel (m₁ = m₂) and perpendicular (m₁ × m₂ = −1) conditions | SL and HL |
| 2.2 | Use function notation; state domain and range; treat a function as a model; understand f⁻¹ as the reverse of f and as a reflection in y = x | SL and HL |
| 2.3 | Sketch and draw graphs, including from a context or a GDC screen; graph sums and differences of functions with technology | SL and HL |
| 2.4 | Find key features with technology: maxima, minima, intercepts, symmetry, vertex, zeros, asymptotes; find intersections | SL and HL |
| 2.5 | Form composite functions (f ∘ g)(x) = f(g(x)); use the identity function; find f⁻¹(x) | SL and HL |
| 2.6 | Move between f(x) = ax² + bx + c, a(x − p)(x − q) and a(x − h)² + k | SL and HL |
| 2.7 | Solve quadratic equations and inequalities; use the quadratic formula and the discriminant Δ = b² − 4ac | SL and HL |

## 2.1 Straight lines

The gradient between (x₁, y₁) and (x₂, y₂) is m = (y₂ − y₁)/(x₂ − x₁). The three forms you must use are:

- **gradient-intercept form:** y = mx + c, with y-intercept (0, c)
- **general form:** ax + by + d = 0
- **point-gradient form:** y − y₁ = m(x − x₁)

Parallel lines have equal gradients. Perpendicular lines have gradients that multiply to −1, so the perpendicular gradient is the negative reciprocal. In a context, gradient is vertical rise ÷ horizontal distance: a road that climbs 45 m over 600 m of horizontal distance has gradient 45/600 = 0.075.

### Worked example 1

A is (−2, 5) and B is (4, 1). Find the equation of line AB in general form, its intercepts, and the line through B perpendicular to AB.

```
m = (1 − 5)/(4 − (−2)) = −4/6 = −2/3
y − 5 = −(2/3)(x + 2)
3y − 15 = −2x − 4
2x + 3y − 11 = 0
x-intercept: y = 0 → x = 11/2      y-intercept: x = 0 → y = 11/3
Perpendicular gradient = 3/2
y − 1 = (3/2)(x − 4)  →  y = (3/2)x − 5
```

Check by substituting both points into 2x + 3y − 11: −4 + 15 − 11 = 0 and 8 + 3 − 11 = 0.

## 2.2 Functions, domain and range

A function gives exactly one output for each input in its domain. Notation such as f(x), v(t) or C(n) names the function and its input. The **domain** is the set of allowed inputs. Unless a question says otherwise, it is the largest set of real numbers for which the rule is defined. The **range** is the set of outputs. A quick sketch is the safest way to see the range.

For f(x) = 3 + √(x + 4), the square root needs x + 4 ≥ 0, so the domain is x ≥ −4. Since √(x + 4) ≥ 0, the range is f(x) ≥ 3.

A function can be a **model**. A taxi charges C(n) = 12 + 0.8n dollars for an n km trip. The inverse function f⁻¹ reverses what f does, so asking "how far can I go for 30 dollars?" means finding C⁻¹(30):

```
12 + 0.8n = 30  →  0.8n = 18  →  n = 22.5 km
```

This is the guide's point that solving f(x) = 10 is the same as finding f⁻¹(10). An inverse exists only for a **one-to-one** function. The graph of y = f⁻¹(x) is the reflection of y = f(x) in the line y = x, and the domain of f⁻¹ equals the range of f.

## 2.3 and 2.4 Graphs and key features

"Draw" means an accurate, labelled graph with plotted points joined smoothly (ruler for straight lines). "Sketch" means the correct general shape with the relevant features labelled. In both cases label the axes and every key feature: intercepts, maxima and minima, the vertex, and asymptotes. When you copy a graph from a GDC screen, match the window: note where the curve enters and leaves the viewing window and mark end points if the domain is restricted.

Key features the guide lists are maximum and minimum values, intercepts, symmetry, vertex, zeros of functions (roots of equations), and vertical and horizontal asymptotes found with graphing technology. You will also use technology to find where two graphs intersect and to graph sums and differences such as y = f(x) + g(x).

### Worked example 2 (GDC)

f(x) = x³ − 3x + 1 and g(x) = 2 − x. Find the zeros of f, its local maximum and minimum, and the points where the graphs meet.

```
Graph y = x³ − 3x + 1; use the "zero" tool three times:
x = −1.88, 0.347, 1.53   (3 s.f.)
Local maximum (−1, 3); local minimum (1, −1); y-intercept (0, 1)
Graph y = 2 − x as well; use "intersect":
(−1, 3), (−0.618, 2.62), (1.62, 0.382)
```

Write down each value to 3 significant figures. Write the answer as coordinates when the question asks for points. For an asymptote, a GDC graph of y = 3 + 2/(x − 1) shows a vertical asymptote x = 1 and a horizontal asymptote y = 3. Give asymptotes as equations, not numbers.

## 2.5 Composite and inverse functions

(f ∘ g)(x) = f(g(x)): apply g first, then f. Order matters.

### Worked example 3

f(x) = 3x − 2 and g(x) = x² + 1.

```
(f ∘ g)(x) = 3(x² + 1) − 2 = 3x² + 1
(g ∘ f)(x) = (3x − 2)² + 1 = 9x² − 12x + 5
(f ∘ g)(2) = 13,  (g ∘ f)(2) = 17
```

The **identity function** is x ↦ x. An inverse satisfies (f ∘ f⁻¹)(x) = (f⁻¹ ∘ f)(x) = x.

**Method for f⁻¹(x):** write y = f(x), make x the subject, then swap x and y. For f(x) = 5x − 7: y = 5x − 7 gives x = (y + 7)/5, so f⁻¹(x) = (x + 7)/5.

### Worked example 4

h(x) = (x − 1)² + 3, x ≥ 1. Find h⁻¹(x) and its domain.

```
The domain x ≥ 1 makes h one-to-one (right half of the parabola).
Range of h: h(x) ≥ 3
y = (x − 1)² + 3
x − 1 = +√(y − 3)       (positive root, because x ≥ 1)
h⁻¹(x) = 1 + √(x − 3),  x ≥ 3
Check: h(h⁻¹(x)) = (√(x − 3))² + 3 = x
```

Without the restriction x ≥ 1, h would not be one-to-one (h(0) = h(2) = 4), so no inverse would exist.

## 2.6 The quadratic function and its three forms

A quadratic graph is a **parabola**. It opens upwards if a > 0 and downwards if a < 0.

| Form | What it shows |
|---|---|
| f(x) = ax² + bx + c | y-intercept (0, c); axis of symmetry x = −b/(2a) |
| f(x) = a(x − p)(x − q) | x-intercepts (p, 0) and (q, 0); axis x = (p + q)/2 |
| f(x) = a(x − h)² + k | vertex (h, k); axis x = h |

You must be able to change from one form to another.

### Worked example 5

Write f(x) = 2x² − 8x + 6 in the other two forms and state its key features.

```
Factorised: 2(x² − 4x + 3) = 2(x − 1)(x − 3)  → x-intercepts (1, 0), (3, 0)
Vertex form: 2[(x − 2)² − 4] + 6 = 2(x − 2)² − 2  → vertex (2, −2)
y-intercept (0, 6); axis of symmetry x = 2; minimum value −2
```

Going the other way: a parabola has vertex (−1, 5) and passes through (1, −3).

```
f(x) = a(x + 1)² + 5
−3 = a(2)² + 5  →  4a = −8  →  a = −2
f(x) = −2(x + 1)² + 5 = −2x² − 4x + 3
```

## 2.7 Quadratic equations, inequalities and the discriminant

Solve ax² + bx + c = 0 by factorising, completing the square, or the quadratic formula x = (−b ± √(b² − 4ac))/(2a). Solutions are also called roots or zeros.

### Worked example 6

(a) Solve 3x² − 5x − 4 = 0 exactly.

```
x = (5 ± √(25 + 48))/6 = (5 ± √73)/6
```

(b) Solve x² + 6x − 11 = 0 by completing the square.

```
(x + 3)² − 9 − 11 = 0  →  (x + 3)² = 20  →  x = −3 ± 2√5
```

(c) Solve x² − x − 12 > 0.

```
(x − 4)(x + 3) > 0; critical values −3 and 4
The parabola opens upwards, so it is above the axis outside the roots:
x < −3 or x > 4
```

**The discriminant** Δ = b² − 4ac decides the nature of the roots: Δ > 0 two distinct real roots; Δ = 0 two equal real roots; Δ < 0 no real roots.

### Worked example 7

Find the values of k for which kx² + 4x + (k − 3) = 0 has two equal real roots, two distinct real roots, and no real roots.

```
Δ = 16 − 4k(k − 3) = −4k² + 12k + 16 = −4(k − 4)(k + 1)
Equal roots:     Δ = 0 → k = −1 or k = 4
Distinct roots:  Δ > 0 → −1 < k < 4, but k ≠ 0
No real roots:   Δ < 0 → k < −1 or k > 4
```

When k = 0 the equation becomes 4x − 3 = 0, which is linear with one root, so k = 0 must be excluded.

## Using your GDC

Paper 1 allows no technology. Paper 2 requires it (and at HL, so does Paper 3). So you must do these by hand: equations of lines, perpendicular gradients, composites, finding f⁻¹(x), changing quadratic forms, completing the square, the quadratic formula in exact form, quadratic inequalities and discriminant problems. On Paper 2, use the GDC for zeros, maxima and minima, intersections and asymptotes of unfamiliar functions, and to check any algebraic answer. Write down what you graphed and what you found. A bare number with no stated method is risky if it is wrong.

## Common errors

- Using the gradient of the given line, not its negative reciprocal, for a perpendicular.
- Reading b as the gradient of ax + by + d = 0. The gradient is −a/b.
- Stating the range as "all real numbers" without sketching; for f(x) = 3 + √(x + 4) the range starts at 3.
- Working out (f ∘ g)(x) as g(f(x)).
- Keeping both ± roots when finding an inverse on a restricted domain.
- Forgetting to state the domain of f⁻¹ (it is the range of f).
- Sign slips in vertex form: a(x − h)² + k has vertex (h, k), so 2(x + 3)² − 1 has vertex (−3, −1).
- Solving a quadratic inequality and giving the region between the roots when it should be outside them.
- Ignoring the case where the coefficient of x² contains k and could be zero.

## Next steps

Condense this into the [revision notes](/resources/ib-dp-mathematics-aa-sl-lines-functions-quadratics-revision-notes/), then try the [practice questions](/resources/ib-dp-mathematics-aa-sl-lines-functions-quadratics-practice/). For how the course is assessed, read the [syllabus guide](/resources/ib-dp-mathematics-analysis-and-approaches-syllabus-guide/) and the [exam preparation guide](/resources/ib-dp-mathematics-analysis-and-approaches-exam-preparation/). These skills feed directly into the [Calculus strand](/resources/ib-dp-mathematics-aa-calculus/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), syllabus sections SL 2.1–2.7.
