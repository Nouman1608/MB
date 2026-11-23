---
title: "IB DP Mathematics: Analysis and Approaches (AA): 2.7 Solving quadratic equations and inequalities; the discriminant"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Functions"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 2.07
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-7"
description: "Study guide to IB Maths AA 2.7: solving quadratic equations and inequalities, the quadratic formula, and the discriminant in parameter and tangency problems."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This study guide covers section 2.7 of IB Diploma Programme Mathematics: Analysis and Approaches, common to SL and HL. The IB *Mathematics: analysis and approaches guide* (first assessment 2021) lists the solution of quadratic equations and inequalities, the quadratic formula, and the discriminant Δ = b² − 4ac with the nature of the roots: two distinct real roots, two equal real roots, or no real roots. Solutions may be called roots of an equation or zeros of a function.

The [straight lines, functions, inverses and quadratics guide](/resources/ib-dp-mathematics-aa-sl-lines-functions-quadratics/) gives one example of each technique. This page goes further: choosing the fastest method, inequalities where both sides contain x, equations that are quadratic in disguise, and the main discriminant problems examiners set: tangency, "for all k" proofs and functions that are always positive or always negative. The three forms of a quadratic are in the [2.6 study guide](/resources/ib-dp-mathematics-analysis-and-approaches-2-6/). Afterwards, use the [2.7 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-2-7-revision-notes/) and the [2.7 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-2-7-practice/).

## Choosing a method

| Method | Use when | Example |
|---|---|---|
| Factorising | The roots are rational and easy to spot | x² − 7x + 10 = (x − 2)(x − 5) |
| Completing the square | b is even and a = 1, or the vertex form is wanted anyway | x² − 4x − 1 = 0 gives (x − 2)² = 5 |
| Quadratic formula | Anything else, especially surd answers | 3x² + 4x − 2 = 0 |
| GDC | Paper 2, decimal answers acceptable | Any quadratic |

The quadratic formula for ax² + bx + c = 0 is

**x = (−b ± √(b² − 4ac)) / (2a).**

### Worked example 1: exact surd roots

Solve 2x² − 6x + 1 = 0, giving exact answers.

```
a = 2, b = −6, c = 1
Δ = 36 − 8 = 28
x = (6 ± √28)/4 = (6 ± 2√7)/4 = (3 ± √7)/2
```

Simplify the surd (√28 = 2√7) and cancel common factors; mark schemes usually accept any equivalent exact form, but a decimal on Paper 1 does not earn the final mark if "exact" was asked for.

## Quadratic inequalities

Never solve a quadratic inequality by "dividing through" or by treating it like an equation and stopping. Use the graph:

1. Rearrange so one side is 0: ax² + bx + c < 0 (or >, ≤, ≥).
2. Find the critical values, the roots of ax² + bx + c = 0.
3. Sketch the parabola through them, opening up if a > 0.
4. Read off where the graph is below (< 0) or above (> 0) the x-axis.

For a > 0, "< 0" gives the region **between** the roots and "> 0" gives the regions **outside** them. Use ≤ or ≥ to include the roots themselves.

### Worked example 2

Solve 2x² + 3x − 9 ≤ 0.

```
(2x − 3)(x + 3) ≤ 0, critical values x = −3 and x = 3/2
Parabola opens upwards, so it is on or below the axis between the roots
−3 ≤ x ≤ 3/2
```

### Worked example 3: x on both sides

Solve x² < 3x + 10.

```
x² − 3x − 10 < 0
(x − 5)(x + 2) < 0
−2 < x < 5
```

The outside region would be wrong here: the inequality is "< 0" after rearranging.

## Equations that are quadratic in disguise

If an equation contains only x⁴ and x² (or x and √x, or e^(2x) and eˣ), substitute to get a quadratic.

```
x⁴ − 5x² + 4 = 0, let u = x²:  u² − 5u + 4 = 0
(u − 1)(u − 4) = 0, so x² = 1 or x² = 4
x = ±1, ±2
```

If one value of u were negative, such as x² = −3, it would give no real x and must be rejected with a reason.

## The discriminant

| Δ = b² − 4ac | Roots of ax² + bx + c = 0 | Graph of y = ax² + bx + c |
|---|---|---|
| Δ > 0 | Two distinct real roots | Crosses the x-axis twice |
| Δ = 0 | Two equal real roots (one repeated root) | Touches the x-axis at its vertex |
| Δ < 0 | No real roots | Does not meet the x-axis |

"Real roots" (with no other word) means Δ ≥ 0.

### Worked example 4: tangency

Find the values of k for which the line y = kx − 1 is a tangent to the curve y = x² + 3.

```
x² + 3 = kx − 1
x² − kx + 4 = 0
Tangent means exactly one point of contact: Δ = 0
k² − 16 = 0, so k = 4 or k = −4
```

For k = 4 the repeated root is x = 2, so the point of contact is (2, 7); for k = −4 it is (−2, 7). Equating the line and curve and then using Δ is the standard route for any line–parabola question: Δ > 0 means two intersections, Δ < 0 means none.

### Worked example 5: real roots for every k

Show that x² + kx + (k − 1) = 0 has real roots for all values of k.

```
Δ = k² − 4(1)(k − 1) = k² − 4k + 4 = (k − 2)²
A square is never negative, so Δ ≥ 0 for every k
Hence the equation always has real roots.
```

Writing Δ as a perfect square, or as a square plus a positive number, is the usual way to prove a "for all k" result. For instance, k² − 6k + 13 = (k − 3)² + 4 > 0, so an equation with that discriminant always has two distinct real roots.

### Worked example 6: always positive

Find the values of p for which px² − 4x + p > 0 for all real x.

```
The parabola must open upwards:      p > 0
It must never meet the x-axis:        Δ < 0
Δ = 16 − 4p² < 0, so p² > 4, so p > 2 or p < −2
Combine with p > 0:                    p > 2
```

Both conditions are needed. With p < −2, Δ < 0 too, but the parabola opens downwards and is always negative.

## A coefficient that could be zero

If the x² coefficient contains a parameter, the equation is only quadratic when that coefficient is non-zero. For (m + 1)x² − 4x + 2 = 0, the case m = −1 gives the linear equation −4x + 2 = 0, with exactly one root, x = 1/2. Treat such a value separately before using the discriminant.

## Common mistakes

- Giving "x < −3 and x > 5" (impossible) instead of "x < −3 or x > 5".
- Choosing the region between the roots when the inequality needs the outside, or the reverse.
- Sign errors in −b when b is negative: for b = −6, −b = 6.
- Forgetting that "real roots" includes the equal-roots case Δ = 0.
- Using only Δ < 0 for an "always positive" question, without a > 0.
- Ignoring the case where the coefficient of x² is zero.
- Rejecting a negative value of u = x² without saying why.

## Exam technique

- **Solve:** show the factorisation or the formula substitution; on Paper 2 a GDC answer to 3 s.f. is fine unless exact values are requested.
- **Show that ... has real roots for all k:** find Δ, rewrite it as a square (or square plus positive), and write a concluding sentence.
- **Find the values of k for which the line is a tangent:** equate, rearrange to = 0, set Δ = 0.
- **Find the range of values:** give the answer as an inequality, not a single value.

## Where to go next

Condense the methods with the [2.7 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-2-7-revision-notes/), then test yourself with the [2.7 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-2-7-practice/). Disguised quadratics in eˣ appear again in the [2.10 study guide](/resources/ib-dp-mathematics-analysis-and-approaches-2-10/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus section SL 2.7.
