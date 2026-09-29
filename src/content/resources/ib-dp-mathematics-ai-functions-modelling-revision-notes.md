---
title: "IB DP Mathematics: Applications and Interpretation -- Functions and modelling Revision Notes"
seoTitle: "IB Maths AI Functions and Modelling Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-applications-and-interpretation"
level: ["ib"]
topic: "Functions and modelling"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Applications and Interpretation"]
syllabusSeries: "First assessments for SL and HL—2021"
order: 2.1
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-functions"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-2-1"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-functions"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-2-2"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-functions"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-2-3"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-functions"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-2-4"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-functions"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-2-5"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-functions"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-2-6"
description: "Condensed IB Maths AI revision notes for functions and modelling (SL 2.1–2.6): model forms, GDC methods, key distinctions and a quick self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-27
featured: false
---

For full explanations and worked examples, read the [functions and modelling study guide](/resources/ib-dp-mathematics-ai-functions-modelling/) first. These notes are for the final weeks.

These revision notes cover the functions and modelling unit of IB DP Mathematics: applications and interpretation. They are aligned to the IB *Mathematics: applications and interpretation guide*, first assessment 2021, syllabus sections SL 2.1–2.6, which is common content for SL and HL. They follow the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so they apply to the May and November 2026, 2027 and 2028 sessions.

Course links: [IB Maths AI course hub](/boards/ib/ib-dp/mathematics-applications-and-interpretation/) · [printable checklist](/checklists/ib/ib-dp/mathematics-applications-and-interpretation/) · [practice questions for this unit](/resources/ib-dp-mathematics-ai-functions-modelling-practice/).

## Definitions

- **Function:** a rule that gives exactly one output for each input.
- **Domain:** the set of inputs. Default is the largest set for which the function is defined, usually the real numbers. In a model it is also limited by the context.
- **Range:** the set of outputs, written in terms of f(x) or y.
- **Inverse function f⁻¹:** reverses f. Exists only when f is one-to-one. Graph is the reflection of y = f(x) in y = x. Domain of f⁻¹ = range of f.
- **Zero of a function:** an x-value where f(x) = 0. It is a root of the equation f(x) = 0.
- **Vertex:** the turning point of a parabola.
- **Horizontal asymptote:** a line y = k that the graph approaches as x gets large in size.
- **Vertical asymptote:** a line x = k where the graph grows without bound.
- **Principal axis:** the line y = d midway between the maximum and minimum of a sinusoidal graph.
- **Extrapolation:** using a model outside the range of the data used to build it.

## Straight lines (2.1)

| Form | Equation | Read off |
|---|---|---|
| Gradient-intercept | y = mx + c | gradient m, y-intercept (0, c) |
| General | ax + by + d = 0 | gradient −a/b |
| Point-gradient | y − y₁ = m(x − x₁) | passes through (x₁, y₁) |

- Gradient from two points: m = (y₂ − y₁)/(x₂ − x₁).
- Parallel: m₁ = m₂. Perpendicular: m₁ × m₂ = −1.
- Gradient of a ramp or road = vertical rise ÷ horizontal run.

## The six models (2.5)

| Model | Form | Key facts |
|---|---|---|
| Linear | f(x) = mx + c | constant rate m; piecewise versions have a domain for each piece |
| Quadratic | f(x) = ax² + bx + c, a ≠ 0 | axis of symmetry x = −b/(2a); vertex on that axis; y-intercept c |
| Exponential | kaˣ + c, ka⁻ˣ + c (a > 0), keʳˣ + c | horizontal asymptote y = c; value at x = 0 is k + c |
| Variation | f(x) = axⁿ, n ∈ ℤ | n < 0 gives the y-axis as a vertical asymptote |
| Cubic | f(x) = ax³ + bx² + cx + d | up to two turning points and three zeros |
| Sinusoidal | a sin(bx) + d, a cos(bx) + d | amplitude a; period 360°/b; principal axis y = d |

Choosing a model from the shape or context:

- steady increase or decrease → linear;
- one turning point, symmetric → quadratic;
- growth or decay by a constant factor, levelling off → exponential;
- "proportional to" or "inversely proportional to" → variation;
- two turning points → cubic;
- repeating pattern (tides, temperatures, wheels) → sinusoidal.

## Method in steps

**Find an inverse function**

```
1. Write y = f(x).
2. Rearrange to make x the subject.
3. Swap x and y (or rename): f⁻¹(x) = ...
4. State the domain of f⁻¹ = range of f.
```

Reminder: f(x) = 4x − 7 → x = (y + 7)/4 → f⁻¹(x) = (x + 7)/4.

**Key features on a GDC**

```
1. Enter the function. Choose a window that shows every feature.
2. Use zero / root for x-intercepts; evaluate at x = 0 for the y-intercept.
3. Use max / min for turning points (and the vertex).
4. Trace to large |x| and near excluded values to confirm asymptotes.
5. Write each feature as coordinates or as an equation, to 3 s.f.
```

**Intersection of two graphs**

```
1. Graph y = f(x) and y = g(x).
2. Use intersect, once for each point.
3. Write "f(x) = g(x) solved on GDC" plus both coordinates.
```

**Fit a model**

```
1. Choose the model type and name its parameters.
2. Use initial conditions first (value at x = 0 often gives k or c).
3. Substitute the other points to get equations.
4. Solve simultaneously on the GDC (up to three unknowns at SL).
5. Write the model in full with the parameter values.
6. State a sensible domain, then check one point.
```

Small reminder: a quadratic through (1, 4), (3, 10), (5, 24) gives a + b + c = 4, 9a + 3b + c = 10, 25a + 5b + c = 24, so y = x² − x + 4.

**Read a sinusoidal model**

```
y = a sin(bx) + d   (GDC in degrees)
max = d + |a|,  min = d − |a|
period = 360°/b
```

Example: h(t) = −12 cos(18t) + 15 has amplitude 12, period 20, principal axis h = 15, maximum 27 and minimum 3.

## Must-know distinctions

- **Sketch vs draw.** A sketch shows shape and labelled key features. A drawing is accurate and to scale.
- **Domain vs range.** Domain is about inputs (x). Range is about outputs (f(x) or y).
- **Zero vs y-intercept.** A zero is where the graph meets the x-axis. The y-intercept is f(0).
- **f⁻¹(x) vs 1/f(x).** f⁻¹ is the inverse function, not a reciprocal.
- **kaˣ + c vs ka⁻ˣ + c.** With a > 1 the first grows and the second decays.
- **Direct vs inverse variation.** n > 0: y grows as x grows. n < 0: y shrinks as x grows, and the y-axis is an asymptote.
- **Interpolation vs extrapolation.** Inside the data range is safer. Outside it, the model may break down.
- **Linear vs exponential change.** Linear adds the same amount each step (constant difference). Exponential multiplies by the same factor each step (constant ratio). Check the data both ways before choosing.
- **Parameter vs variable.** Parameters (a, b, c, k) are fixed numbers you find. Variables (x, t) change.

## Quick self-test

1. Find the gradient of 4x − 2y + 7 = 0.
2. A line has equation y = −3x + 1. State the gradient of any line perpendicular to it.
3. f(x) = 3 + √(x − 1). State the domain and range.
4. f(x) = 4x − 7. Find f⁻¹(x).
5. State the horizontal asymptote of y = 5e^(−0.3x) + 2.
6. For y = 4 sin(15x) − 1, state the amplitude, period and principal axis.
7. Find the vertex of y = 2x² − 12x + 5.
8. y = axⁿ with n = −1 passes through (2, 6). Find a.
9. Find where y = x² meets y = 2x + 3.
10. A culture of 50 cells doubles every 4 hours. Write N(t) = k·aᵗ with a to 3 s.f., and find N(10).
11. A line passes through (0, 3) and (4, 11). Write it in the form y = mx + c.
12. Give one reason a model fitted to data from 2015 to 2024 may give a poor prediction for 2040.

### Answers

1. 2y = 4x + 7, so gradient **2**.
2. **1/3** (negative reciprocal of −3).
3. Domain **x ≥ 1**; range **f(x) ≥ 3**.
4. **f⁻¹(x) = (x + 7)/4**.
5. **y = 2**.
6. Amplitude **4**, period 360/15 = **24**, principal axis **y = −1**.
7. x = 12/4 = 3, y = 18 − 36 + 5 = −13, vertex **(3, −13)**.
8. 6 = a/2, so **a = 12**.
9. x² − 2x − 3 = 0 gives x = 3 or x = −1: **(3, 9) and (−1, 1)**.
10. k = 50, a = 2^(1/4) = **1.19**; N(10) = 50 × 2^2.5 = **283** (3 s.f.).
11. m = (11 − 3)/4 = 2, so **y = 2x + 3**.
12. **2040 is outside the data range (extrapolation)**; conditions may change, so the pattern may not continue.

## Where marks are usually lost

- Rearranging ax + by + d = 0 wrongly, so the gradient has the wrong sign.
- Giving a range in terms of x, or giving the domain when the range was asked for.
- Leaving an asymptote as a number rather than an equation such as y = 20 or x = 2.
- Running the GDC in radians for a sinusoidal model written in degrees.
- Giving a period of b instead of 360°/b.
- Rounding parameters early, then using the rounded values in a prediction.
- Writing only the final GDC answer, with no equation set up, so no method mark can be given if the answer is wrong.
- Stating a domain for a model that includes impossible values (negative time, lengths ≤ 0).
- Missing the second intersection point because the viewing window was too narrow.
- Giving an answer to 2 s.f. or to an unrequested number of decimal places instead of 3 s.f.

## Next steps

Try the full [functions and modelling practice set](/resources/ib-dp-mathematics-ai-functions-modelling-practice/) with worked answers. Go back to the [study guide](/resources/ib-dp-mathematics-ai-functions-modelling/) for any topic you missed. For paper structure and exam technique, see [IB Maths AI exam preparation](/resources/ib-dp-mathematics-applications-and-interpretation-exam-preparation/) and the [syllabus guide](/resources/ib-dp-mathematics-applications-and-interpretation-syllabus-guide/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: applications and interpretation guide*, first assessment 2021. Sections SL 2.1–2.6.
