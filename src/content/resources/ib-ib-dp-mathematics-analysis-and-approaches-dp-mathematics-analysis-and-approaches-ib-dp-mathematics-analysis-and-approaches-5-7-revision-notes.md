---
title: "IB DP Mathematics: Analysis and Approaches (AA): 5.7 The second derivative and graphical behaviour of functions -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for IB DP Maths AA section 5.7: second derivative notation, concavity, linking f, f′ and f″ graphs, exam traps and a 12-question self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense **section 5.7 of IB DP Mathematics: Analysis and Approaches: the second derivative and graphical behaviour of functions**, including the relationship between the graphs of f, f′ and f″. It is SL content, examined at SL and HL. For full explanations and worked examples, use the [section 5.7 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-7/).

## Core recall

- The second derivative is the derivative of the first derivative: d²y/dx² = d/dx(dy/dx), also written f″(x).
- f″ measures how fast the gradient is changing.
- **f″(x) > 0** on an interval: gradient increasing, curve **concave-up**, tangents lie below the curve.
- **f″(x) < 0** on an interval: gradient decreasing, curve **concave-down**, tangents lie above the curve.
- Concavity and increasing/decreasing are separate properties. Check f′ for direction and f″ for bending.
- A polynomial of degree n has a second derivative of degree n − 2. So a quadratic has constant concavity, a cubic changes concavity exactly once, and a quartic can change it at most twice.
- eˣ, (x² + 1)², and any square of a non-zero expression are always positive: use this to read the sign of f″ from its other factors.

## Standard second derivatives worth knowing

| f(x) | f′(x) | f″(x) | Concavity |
|---|---|---|---|
| eᵏˣ | keᵏˣ | k²eᵏˣ | concave-up everywhere |
| ln x (x > 0) | 1/x | −1/x² | concave-down everywhere |
| sin x | cos x | −sin x | concave-down where sin x > 0 |
| cos x | −sin x | −cos x | concave-down where cos x > 0 |
| √x (x > 0) | (1/2)x^(−1/2) | −(1/4)x^(−3/2) | concave-down everywhere |
| 1/x (x > 0) | −1/x² | 2/x³ | concave-up for x > 0 |

## Linking the three graphs

Each graph is the gradient of the one before. Two separate readings of the graph of f′:

1. **Where it is** (above or below the x-axis) → whether f is increasing or decreasing.
2. **Which way it slopes** (rising or falling) → whether f is concave-up or concave-down.

| Feature of f′ | Meaning for f |
|---|---|
| zero, changing from + to − | local maximum |
| zero, changing from − to + | local minimum |
| zero, no change of sign | stationary point that is not a turning point |
| local max or min of f′ | concavity of f changes (steepest point of f) |
| f′ rising | f concave-up |
| f′ falling | f concave-down |

Knowing f′ fixes the shape of f, not its height: f + c has the same derivative for any constant c.

## Key terms

| Term | Meaning |
|---|---|
| Second derivative | d²y/dx² or f″(x): the derivative of f′(x) |
| Concave-up | f″(x) > 0 on the interval; the gradient increases |
| Concave-down | f″(x) < 0 on the interval; the gradient decreases |
| Change of concavity | where f″ changes sign; named a point of inflexion in section 5.8 |
| Rate of change of a rate | the meaning of a second derivative in context, such as acceleration |
| Increasing at a decreasing rate | dy/dx > 0 and d²y/dx² < 0 |

## Method: find where f is concave-up or concave-down

1. Differentiate twice. Simplify f′ first.
2. Factorise f″ fully.
3. Find the zeros of f″ and any values where f″ is undefined.
4. Test the sign of f″ in each interval, or argue from factors that are always positive.
5. State the intervals with the correct inequality signs, inside the domain of f.

## Exam traps

- **Wrong derivative.** Concavity comes from f″, not f′. A falling curve can be concave-up.
- **Graph copying.** A maximum on the graph of f′ is the steepest point of f, not a maximum of f.
- **Unsimplified quotient rule.** Expand and collect the numerator before reading signs; the denominator of a quotient-rule result is a square and is positive wherever f is defined.
- **Domain.** For f(x) = ln x or √x, only x > 0 (or x ≥ 0) counts; do not quote an interval that includes values outside the domain.
- **"Increasing fastest".** This means f′ is at a maximum, so f″ = 0 there, not f′ = 0.
- **Units in context.** A second derivative with respect to time has units per time per time, such as m s⁻² or cm per minute per minute.

## Self-test

1. Write down d²y/dx² for y = 5x³ − 2x² + 7x.
2. Find f″(x) for f(x) = e^(−2x).
3. For f(x) = x⁴ − 6x², find the interval on which f is concave-down.
4. Explain why g(x) = eˣ − x is concave-up for all x.
5. For f(x) = sin x, 0 < x < 2π, state the interval on which f is concave-up.
6. A function has f′(x) > 0 and f″(x) < 0 on an interval. Describe the graph there.
7. The graph of f′ has a local minimum at x = 4. What happens on the graph of f at x = 4?
8. The graph of f′ touches the x-axis at x = 2 without crossing it. Describe the point on f at x = 2.
9. Show that f(x) = x + 1/x is concave-up for x > 0.
10. A population P(t) satisfies dP/dt > 0 and d²P/dt² < 0 for t > 10. Interpret this in words.
11. Find the value of k for which f(x) = x³ + kx² + 5 changes concavity at x = 2.
12. For f(x) = ln(x² + 4), find the values of x where f″(x) = 0.

## Answers

1. dy/dx = 15x² − 4x + 7, so d²y/dx² = 30x − 4.
2. f′(x) = −2e^(−2x), so f″(x) = 4e^(−2x).
3. f″(x) = 12x² − 12 = 12(x − 1)(x + 1) < 0 for −1 < x < 1.
4. g″(x) = eˣ, which is positive for every real x, so the gradient is always increasing.
5. f″(x) = −sin x > 0 when sin x < 0, so π < x < 2π.
6. The curve is rising, but its gradient is decreasing: it is increasing at a decreasing rate (concave-down).
7. f″ changes sign from − to + there, so the concavity of f changes from concave-down to concave-up; f is decreasing most steeply at x = 4 if f′(4) < 0, or increasing least steeply if f′(4) > 0.
8. f′(2) = 0 and f′ does not change sign, so f has a stationary point at x = 2 that is neither a maximum nor a minimum.
9. f′(x) = 1 − x⁻², f″(x) = 2x⁻³ = 2/x³, which is positive for every x > 0.
10. The population is still growing after t = 10, but the growth rate is falling.
11. f″(x) = 6x + 2k; f″(2) = 12 + 2k = 0 gives k = −6. (Check: f″ = 6x − 12 changes sign at x = 2.)
12. f″(x) = (8 − 2x²)/(x² + 4)², which is zero when x² = 4, so x = −2 and x = 2.

## Where next

Practise exam-style questions on the [section 5.7 practice page](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-7-practice/), then carry the same ideas into stationary points and inflexion with the [section 5.8 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-8-revision-notes/). The [AA differentiation revision notes](/resources/ib-dp-mathematics-aa-sl-differentiation-revision-notes/) summarise the whole unit.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section SL 5.7.
