---
title: "IB DP Mathematics: Analysis and Approaches (AA): 5.7 The second derivative and graphical behaviour of functions"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Calculus"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5.07
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-7"
description: "IB DP Maths AA section 5.7 study guide: the second derivative, concavity, and reading the graphs of f, f′ and f″ together, with worked examples."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deep on one syllabus section of IB Diploma Programme Mathematics: Analysis and Approaches: **section 5.7, the second derivative and the graphical behaviour of functions**, including the relationship between the graphs of f, f′ and f″. It is SL content, so it is examined at both SL and HL, and it follows the IB *Mathematics: analysis and approaches guide* for first assessment 2021.

Section 5.7 supplies the tools that section 5.8 then uses to classify stationary points and find points of inflexion; that next step has its own [study guide on maxima, minima, optimisation and inflexion](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-8/). For the whole differentiation unit in one place, see the [AA differentiation study guide](/resources/ib-dp-mathematics-aa-sl-differentiation/).

## What section 5.7 asks of you

- Find the second derivative, written either d²y/dx² or f″(x). You need to recognise and use both notations.
- Understand what the second derivative says about a graph: whether the gradient is increasing or decreasing, so whether the curve is concave-up or concave-down.
- Move between the graphs of f, f′ and f″: given one, describe or sketch features of the others.
- Interpret a second derivative in context, as the rate of change of a rate of change.

## What the second derivative measures

The first derivative f′(x) is the gradient of y = f(x). The second derivative f″(x) is the derivative of f′(x), so it is the **rate at which the gradient changes** as x increases.

- If f″(x) > 0 on an interval, the gradient is increasing there. The curve bends upwards: it is **concave-up**, and each tangent lies below the curve near the point of contact.
- If f″(x) < 0 on an interval, the gradient is decreasing. The curve is **concave-down**, and each tangent lies above the curve.

Concavity is independent of whether f itself is increasing or decreasing. A curve can be rising and concave-down (rising more and more slowly, like the start of a hill's summit) or falling and concave-up (falling more and more slowly, like the approach to the bottom of a valley). Keep the two questions separate: the sign of f′ answers "up or down?", the sign of f″ answers "bending which way?".

To find f″, differentiate twice using any of the rules from section 5.6. Simplify f′ before differentiating again, and factorise f″ at the end, because the sign of a factorised expression is far easier to read.

## Worked example 1 (calculator-free): concavity of a cubic

Let f(x) = x³ − 6x² + 9x + 1. Find the intervals on which f is concave-up and concave-down, and describe the gradient of f at the point where the concavity changes.

```
f'(x)  = 3x² − 12x + 9 = 3(x − 1)(x − 3)
f''(x) = 6x − 12 = 6(x − 2)

f''(x) < 0 for x < 2   → concave-down
f''(x) > 0 for x > 2   → concave-up

At x = 2: f(2) = 8 − 24 + 18 + 1 = 3
          f'(2) = 12 − 24 + 9 = −3
```

So f is concave-down for x < 2 and concave-up for x > 2. At (2, 3) the gradient is −3. Because f″ changes sign at x = 2, the gradient f′ reaches its least value there: the curve is falling most steeply at (2, 3). That is the link with section 5.8, where a change of concavity is called a point of inflexion.

Every cubic behaves like this: f″ is linear, so it has exactly one zero and the concavity changes exactly once.

## Reading f, f′ and f″ together

Exam questions often give the graph of f′ (not f) and ask about f. The rule to hold on to is that **each graph is the gradient of the one before it**. So features of f′ tell you about f in two different ways: the *sign* of f′ (above or below the x-axis) tells you whether f is increasing, and the *slope* of f′ (rising or falling) tells you the concavity of f.

| If the graph of f′… | then f… | and f″… |
|---|---|---|
| is above the x-axis | is increasing | — |
| is below the x-axis | is decreasing | — |
| crosses the x-axis from + to − | has a local maximum | is negative there (or zero) |
| crosses the x-axis from − to + | has a local minimum | is positive there (or zero) |
| touches the x-axis without crossing | has a stationary point that is not a max or min | is zero there |
| is rising | is concave-up | is positive |
| is falling | is concave-down | is negative |
| has a local max or min | changes concavity (point of inflexion) | crosses the x-axis |

The common trap is to look at the *shape* of the f′ graph and copy it onto f. A hump on the graph of f′ is not a hump on f; it marks where f is steepest.

## Worked example 2: deducing f from a description of f′

The graph of y = f′(x) is a parabola that crosses the x-axis at x = −1 and x = 3 and has its vertex at (1, −4). Describe the behaviour of f.

```
Sign of f':   + for x < −1,   − for −1 < x < 3,   + for x > 3
              → f increasing, then decreasing, then increasing
              → local maximum of f at x = −1 (f' changes + to −)
              → local minimum of f at x = 3  (f' changes − to +)

Slope of f':  falling for x < 1, rising for x > 1 (vertex at x = 1)
              → f concave-down for x < 1, concave-up for x > 1
              → concavity changes at x = 1
```

A suitable rule is f′(x) = (x + 1)(x − 3), and then f″(x) = 2x − 2, which is negative for x < 1 and positive for x > 1, confirming the reasoning. You cannot give the y-coordinates of points on f, because adding any constant to f leaves f′ unchanged; a sketch of f shows the shape only, unless a point on f is given.

## Worked example 3 (calculator-free): a curve with two changes of concavity

Let f(x) = ln(x² + 1). Find the intervals on which f is concave-up.

```
f'(x)  = 2x/(x² + 1)                       (chain rule)

f''(x) = [2(x² + 1) − 2x · 2x]/(x² + 1)²   (quotient rule)
       = (2 − 2x²)/(x² + 1)²
       = 2(1 − x)(1 + x)/(x² + 1)²
```

The denominator (x² + 1)² is always positive, so the sign of f″ is the sign of 2(1 − x)(1 + x). That is positive for −1 < x < 1 and negative for x < −1 and x > 1.

So f is **concave-up for −1 < x < 1** and concave-down for |x| > 1. The concavity changes at x = ±1, where y = ln 2. The graph is a smooth valley with its minimum at the origin that flattens out as |x| grows: f′ → 0 as x → ±∞, which is consistent with the gradient decreasing in size once |x| > 1.

## The second derivative in context

In applied questions the second derivative is a rate of change of a rate of change. If N(t) is the number of downloads of an app after t days:

- dN/dt > 0 and d²N/dt² > 0: downloads are rising at an increasing rate (accelerating growth).
- dN/dt > 0 and d²N/dt² < 0: downloads are still rising, but more slowly each day.

A typical Paper 2 question gives a model such as N(t) = 2000/(1 + 9e^(−0.5t)) and asks when the number of downloads is increasing fastest. "Fastest increase" means dN/dt is a maximum, which happens where d²N/dt² = 0 and changes sign. With technology, plot dN/dt and find its maximum, or solve d²N/dt² = 0: t = 2 ln 9 ≈ 4.39 days, when N = 1000. In kinematics (section 5.9), the same idea appears as acceleration, the second derivative of displacement.

When you interpret, use the units: d²N/dt² is measured in downloads per day per day. Phrases like "increasing at a decreasing rate" earn the reasoning mark; "the graph goes down" does not.

## Common mistakes

- Reading concavity from the sign of f′ instead of f″. A decreasing function can be concave-up.
- Not simplifying f′ before differentiating again, which turns a two-line quotient rule into a page of algebra and sign errors.
- Leaving f″ unfactorised, then guessing its sign. Factorise and test each interval, or argue that a factor such as eˣ or (x² + 1)² is always positive.
- Copying the shape of the f′ graph onto f. A maximum on f′ is a point of steepest increase on f, not a maximum of f.
- Giving y-coordinates for f when only f′ is known.
- Writing f″ = 0 and stopping. A zero of f″ is only a candidate for a change of concavity; section 5.8 requires a sign change.

## Exam technique: the command words

- **Write down** f″(x): no working is expected, but the expression must be fully correct.
- **Find** the interval on which f is concave-down: show f″, its zeros and the sign test, then state the interval with correct inequality signs.
- **Show that** f″(x) = …: every algebraic step must appear, ending at the printed expression. Simplifying the quotient rule numerator is usually where the marks are.
- **Justify** or **explain**: refer to the sign of the relevant derivative in words, such as "f′ is increasing on this interval, so f″ > 0 and f is concave-up".
- **Sketch**: show the correct concavity, the x-coordinates of turning points and changes of concavity, and asymptotic behaviour where relevant.

On Paper 1 all of this is by hand. On Paper 2 you can graph f′ or f″ on the GDC to find where it is zero or where it reaches a maximum, but you still write the reason in words.

## Where next

Condense this section with the [section 5.7 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-7-revision-notes/), then test yourself with the [section 5.7 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-7-practice/). The [AA calculus strand overview](/resources/ib-dp-mathematics-aa-calculus/) shows where the section fits in the course.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section SL 5.7.
