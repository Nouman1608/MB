---
title: "IB DP Mathematics: Analysis and Approaches (AA): 3.7 The circular functions sin x, cos x and tan x"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Geometry and trigonometry"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 3.07
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-7"
description: "IB Maths AA 3.7 study guide: graphs of sin x, cos x and tan x, amplitude and period, f(x) = a sin(b(x + c)) + d and a worked tide model."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 3.7 of the IB *Mathematics: analysis and approaches guide* (first assessment 2021) covers the circular functions sin x, cos x and tan x: their amplitude, their periodic nature and their graphs; composite functions of the form f(x) = a sin(b(x + c)) + d; transformations; and real-life contexts. It is SL and HL content. Radians are assumed on examination papers unless a question says otherwise.

This page goes deeper on 3.7 alone. The [circular functions and identities study guide](/resources/ib-dp-mathematics-aa-circular-functions-trig-identities/) places it in the whole unit. Condense this page with the [3.7 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-7-revision-notes/) and test yourself with the [3.7 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-7-practice/).

## From the unit circle to a graph

As the angle x increases, the point (cos x, sin x) travels round the unit circle. Plotting its height against x gives the graph of y = sin x; plotting its horizontal position gives y = cos x. After one full turn (2π) the point is back where it started, so both graphs repeat every 2π. That repetition is what "periodic" means: f(x + p) = f(x) for every x, and the smallest such positive p is the **period**.

tan x = sin x / cos x is undefined wherever cos x = 0, so its graph has vertical asymptotes there. Because tan(x + π) = tan x, its period is π, half that of sine and cosine.

## Key features to know without a calculator

| Feature | y = sin x | y = cos x | y = tan x |
|---|---|---|---|
| Domain | all real x | all real x | x ≠ π/2 + kπ |
| Range | −1 ≤ y ≤ 1 | −1 ≤ y ≤ 1 | all real y |
| Period | 2π | 2π | π |
| Zeros | x = kπ | x = π/2 + kπ | x = kπ |
| Maximum value 1 at | x = π/2 + 2kπ | x = 2kπ | none |
| Minimum value −1 at | x = 3π/2 + 2kπ | x = π + 2kπ | none |
| Symmetry | odd: sin(−x) = −sin x | even: cos(−x) = cos x | odd |

Here k is any integer. The graph of y = cos x is the graph of y = sin x translated π/2 to the left, so the two curves have the same shape.

**Amplitude** is half the distance between the maximum and minimum values. sin x and cos x have amplitude 1; tan x has no amplitude because it has no maximum or minimum.

## The general form f(x) = a sin(b(x + c)) + d

Each parameter is one of the transformations from the functions topic, applied to a circular function. The same applies to a cos(b(x + c)) + d and, without amplitude, to a tan(b(x + c)) + d.

| Parameter | Transformation | What it changes |
|---|---|---|
| a | vertical stretch, scale factor a (a reflection in the x-axis as well if a < 0) | amplitude \|a\| |
| b | horizontal stretch, scale factor 1/b | period 2π/b (π/b for tan) |
| c | horizontal translation by −c | position of the maxima, minima and zeros |
| d | vertical translation by d | principal axis y = d |

So the maximum value is d + |a|, the minimum value is d − |a| and the range is d − |a| ≤ f(x) ≤ d + |a|. In degrees the period of a sin(bx) is 360°/b.

If the bracket is not factorised, factorise it before reading c. In cos(3x − π/2) = cos(3(x − π/6)) the translation is π/6 to the right, not π/2.

## Worked examples

### Example 1: reading and locating key points

Let f(x) = −2cos(3(x − π/6)) + 1 for 0 ≤ x ≤ 2π/3.

```
Amplitude |−2| = 2       Period 2π/3       Principal axis y = 1
Range: 1 − 2 ≤ f(x) ≤ 1 + 2, so −1 ≤ f(x) ≤ 3
y-intercept: f(0) = −2cos(−π/2) + 1 = 1
Because a < 0, maxima occur where cos(3(x − π/6)) = −1:
   3(x − π/6) = π  →  x = π/2, maximum point (π/2, 3)
Minima occur where cos(3(x − π/6)) = 1:
   3(x − π/6) = 0  →  x = π/6, minimum point (π/6, −1)
```

From y = cos x the transformations are: a horizontal stretch with scale factor 1/3, a translation π/6 to the right, a vertical stretch with scale factor 2 combined with a reflection in the x-axis, then a translation 1 unit up. The negative a swaps where maxima and minima appear, which is why the maximum is not at the start of a cycle.

### Example 2: transformed tangent graphs

For y = 3 tan 2x + 1:

- The period is π/2.
- Asymptotes occur where 2x = π/2 + kπ, so x = π/4 + kπ/2. On 0 ≤ x ≤ π these are x = π/4 and x = 3π/4.
- The graph passes through (0, 1), the point where tan 2x = 0, and it has no amplitude.

For y = tan(x + π/3), the curve is y = tan x translated π/3 to the left. On 0 ≤ x ≤ π the asymptote is at x + π/3 = π/2, so x = π/6, and the zero is at x + π/3 = π, so x = 2π/3.

### Example 3: a tide model

*Invented data.* At a harbour, high tide is 9.2 m at 03:00 and the next low tide is 2.4 m at 09:15. Model the depth D metres at t hours after midnight by D(t) = a cos(b(t − c)) + d.

```
d = (9.2 + 2.4)/2 = 5.8           a = (9.2 − 2.4)/2 = 3.4
half a period = 9.25 − 3 = 6.25 h, so the period is 12.5 h
b = 2π/12.5 = 4π/25 ≈ 0.503
cos is greatest when its argument is 0, so c = 3
D(t) = 3.4 cos((4π/25)(t − 3)) + 5.8
```

Depth at noon: D(12) = 3.4 cos(36π/25) + 5.8 = **5.16 m** (3 s.f.).

A boat needs at least 4 m of water. Solve D(t) = 4 on a GDC, or analytically:

```
cos((4π/25)(t − 3)) = −1.8/3.4 = −0.5294
(4π/25)(t − 3) = 2.1287 or 2π − 2.1287 = 4.1545
t = 7.235 or t = 11.265
```

So the depth is below 4 m from about 07:14 to 11:16, a period of **4.03 hours**. Write down the equation you solved; a bare answer read off a graph risks the method marks.

The same tide can be written with sine: D(t) = 3.4 sin((4π/25)(t + 0.125)) + 5.8 also has its maximum at t = 3. A sinusoidal model has many correct values of c, because adding any whole number of periods to c gives the same graph. This is why the guide notes that not every regression tool gives a trigonometric model in the form a sin(b(x + c)) + d: check the form your GDC uses before comparing parameters.

## Sketching checklist

When a question says **sketch**, the examiner looks for the shape and the key features, labelled:

- the correct number of cycles across the given domain;
- maximum and minimum points, with coordinates where they can be found;
- intercepts with both axes;
- asymptotes for tan, drawn as dashed lines with their equations;
- endpoints of the domain, with their values if the domain is restricted.

## Common mistakes

- Giving the period as b, or as 2πb, instead of 2π/b.
- Using 2π/b for a tangent graph; its period is π/b.
- Reading the translation from an unfactorised bracket.
- Writing the amplitude as a negative number when a < 0.
- Starting a cosine model at a maximum when the context starts at a minimum; use a negative a instead.
- Using degree mode for a radian model on the GDC, or the reverse.
- Drawing tan x as if it reaches a maximum between asymptotes.

## Exam technique

- **Write down** the amplitude or period: no working is needed, but give the exact value, such as 2π/3.
- **Find** the parameters of a model: show how each comes from the maximum, minimum and period.
- **Describe** a transformation: name it and give its scale factor or translation vector. "Stretch" alone scores nothing.
- **Hence** after a model has been found: use your model, not the original data, in the next part.
- **Interpret** a parameter in context: d is the mean level, |a| is half the range, and 2π/b is the time for one cycle.

## Where to go next

- Condense this page with the [3.7 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-7-revision-notes/) and practise with the [3.7 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-7-practice/).
- The graphs are the starting point for the [3.8 solving trigonometric equations guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-8/).
- HL students study the symmetry of these graphs in the [3.11 graph symmetry guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-11/).
