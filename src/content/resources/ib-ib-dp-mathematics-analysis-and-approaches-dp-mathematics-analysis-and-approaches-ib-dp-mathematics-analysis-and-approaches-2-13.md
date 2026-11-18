---
title: "IB DP Mathematics: Analysis and Approaches (DP Mathematics: Analysis and Approaches): Rational functions of higher degree (AHL only)"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Topic 2 – Functions"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 2.13
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-13"
description: "HL study guide to IB Maths AA 2.13: sketching rational functions with quadratic numerators or denominators, oblique asymptotes, ranges and full worked sketches."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers **section 2.13 of IB DP Mathematics: Analysis and Approaches** (first assessment 2021), which is **HL only** (AHL). The section extends the SL work on (ax + b)/(cx + d) to two new families:

- f(x) = (ax + b)/(cx² + dx + e), a linear expression over a quadratic;
- f(x) = (ax² + bx + c)/(dx + e), a quadratic over a linear expression.

You must sketch these graphs with all their asymptotes and intercepts. The short summary of both types is in the [further functions study guide](/resources/ib-dp-mathematics-aa-hl-further-functions/); here you will see why the asymptotes are what they are, how the denominator's discriminant changes the picture, which side of an asymptote the curve lies on, and how to find the range by hand. Use the [rational functions revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-13-revision-notes/) and [rational functions practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-13-practice/) afterwards.

## Why the asymptotes appear

**Vertical asymptotes** come from values of x where the denominator is zero and the numerator is not. Near such a value the fraction is a non-zero number divided by something tiny, so |f(x)| grows without bound.

**Behaviour for large |x|** depends on comparing degrees:

- Numerator degree less than denominator degree (linear over quadratic): the denominator wins, so f(x) → 0 and the horizontal asymptote is **y = 0**.
- Numerator degree one more than denominator degree (quadratic over linear): divide to get f(x) = mx + k + R/(dx + e). The fraction part tends to 0, so the graph approaches the **oblique asymptote** y = mx + k.

Always check first that the numerator and denominator share no common factor. If they do, cancel it; the graph then has a missing point rather than an asymptote at that value.

## Linear over quadratic: three cases

The denominator cx² + dx + e decides how many vertical asymptotes there are. Use its discriminant Δ = d² − 4ce.

| Denominator | Vertical asymptotes | Typical shape |
|---|---|---|
| Δ > 0, two distinct roots | two | three branches |
| Δ = 0, a repeated root | one | both sides of the asymptote go the same way |
| Δ < 0, no real roots | none | one continuous curve with a maximum and a minimum |

In every case y = 0 is the horizontal asymptote, and the graph **crosses** it once, at the zero of the numerator x = −b/a (if a ≠ 0).

### Worked example 1: a repeated root in the denominator

Sketch y = (x + 1)/(x − 2)².

```
Vertical asymptote: x = 2 (repeated root)
Horizontal asymptote: y = 0
x-intercept: (−1, 0)       y-intercept: (0, 1/4)
Signs: x < −1 negative;  −1 < x < 2 positive;  x > 2 positive
```

Because (x − 2)² is never negative, the sign of y is the sign of x + 1. Near x = 2 the numerator is close to 3, so y → +∞ on **both** sides of the asymptote. For x < −1 the curve is below the axis and returns towards y = 0 as x → −∞, so it must have a minimum to the left of −1. Calculus (or a GDC on Paper 2) places it at (−4, −1/12).

### Worked example 2: no vertical asymptote and the range by hand

Find the range of y = x/(x² + 1).

x² + 1 has no real roots, so there is no vertical asymptote. To find the range without calculus, ask which values of y are possible:

```
y(x² + 1) = x
yx² − x + y = 0
For y ≠ 0 this quadratic in x has real solutions only if
  Δ = (−1)² − 4(y)(y) ≥ 0,  so 1 − 4y² ≥ 0
  −1/2 ≤ y ≤ 1/2   (y = 0 is reached at x = 0)
```

So the range is −1/2 ≤ y ≤ 1/2, with a maximum (1, 1/2) and a minimum (−1, −1/2). This **discriminant method** is a calculator-free way to find turning values, useful on Paper 1 when a sketch or a range needs them.

## Quadratic over linear: the oblique asymptote

Divide (by long division or by comparing coefficients) to write

f(x) = mx + k + R/(dx + e).

- Vertical asymptote: x = −e/d.
- Oblique asymptote: y = mx + k.
- If R ≠ 0, the term R/(dx + e) is never zero, so the curve **never crosses** its oblique asymptote. Its sign tells you which side the curve is on.

### Worked example 3: a full sketch with range

Let f(x) = (2x² − 3x − 1)/(x − 2), x ≠ 2. Find the asymptotes, intercepts and range.

```
Divide: 2x² − 3x − 1 = (x − 2)(2x + 1) + 1
So f(x) = 2x + 1 + 1/(x − 2)

Vertical asymptote: x = 2
Oblique asymptote: y = 2x + 1
x > 2: 1/(x − 2) > 0, curve ABOVE the oblique asymptote
x < 2: 1/(x − 2) < 0, curve BELOW it

x-intercepts: 2x² − 3x − 1 = 0, x = (3 ± √17)/4
             about (−0.281, 0) and (1.78, 0)
y-intercept: (−1)/(−2) = 1/2, so (0, 1/2)
```

For the range, use the discriminant method again:

```
y(x − 2) = 2x² − 3x − 1
2x² − (3 + y)x + (2y − 1) = 0
Δ = (3 + y)² − 8(2y − 1) = y² − 10y + 17 ≥ 0
Roots of y² − 10y + 17: y = 5 ± 2√2
Range: y ≤ 5 − 2√2  or  y ≥ 5 + 2√2
```

So there is a local maximum value 5 − 2√2 ≈ 2.17 on the left branch and a local minimum value 5 + 2√2 ≈ 7.83 on the right branch. Values strictly between them are never taken.

## A sketching checklist

1. Cancel any common factor.
2. Vertical asymptotes from the denominator (state them as equations x = …).
3. Horizontal asymptote y = 0, or oblique asymptote by division.
4. Intercepts as coordinates.
5. Signs between the critical x-values, to place each branch.
6. Turning points, if asked or needed for the range: calculus, the discriminant method, or a GDC.
7. Draw asymptotes as dashed lines, and make each branch approach them without crossing a vertical one.

## Common mistakes

- Giving y = 0 as the asymptote of a quadratic over a linear function.
- Giving y = a/d (ratio of leading coefficients) as a horizontal asymptote when the degrees differ.
- Missing that a denominator with Δ < 0 gives no vertical asymptote.
- Assuming the curve cannot cross y = 0. A linear-over-quadratic graph crosses it at the numerator's zero.
- Drawing the curve crossing its oblique asymptote.
- Writing asymptotes as numbers ("2") instead of equations ("x = 2").
- Dividing incorrectly and then giving a wrong oblique asymptote; check by expanding.

## Exam technique: command words

- **Write down the equations of the asymptotes**: equations only, all of them. Missing the oblique one is the usual loss.
- **Sketch**: label asymptotes as equations and intercepts as coordinates; branches must show the correct behaviour near each asymptote.
- **Show that f(x) = mx + k + R/(dx + e)**: show the division or the coefficient comparison, ending with the given form.
- **Find the range**: give it as inequalities; a sketch alone is not an answer.
- **Hence**: if a previous part gave the divided form, use it to read off the oblique asymptote.

## Where to go next

Condense this with the [rational functions revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-13-revision-notes/), then try the [rational functions practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-13-practice/). The reciprocal graph y = 1/f(x), which also produces vertical asymptotes from zeros, is in the [modulus and related graphs guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-16/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus section AHL 2.13.
