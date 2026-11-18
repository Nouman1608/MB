---
title: "IB DP Mathematics: Analysis and Approaches (AA): 5.2 Increasing and decreasing functions"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Calculus"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5.02
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-2"
description: "Study guide to IB DP Maths AA section 5.2: using the sign of f′(x) to find where a function increases or decreases, reading f′ graphs and worked examples."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 5.2 of IB DP Mathematics: Analysis and Approaches (first assessment 2021) covers
**increasing and decreasing functions** and the **graphical interpretation of f′(x) > 0, f′(x) = 0
and f′(x) < 0**. It is SL content, examined at SL and HL. It turns the idea from section 5.1, that
the derivative is a gradient, into a tool for describing the shape of a graph without plotting it.

The [differentiation study guide](/resources/ib-dp-mathematics-aa-sl-differentiation/) gives one
worked example of finding decreasing intervals for a cubic. This page adds functions that are
increasing everywhere, functions with a gap in the domain, a parameter problem and the skill of
reading the behaviour of f from the graph of f′. Afterwards, use the
[5.2 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-2-revision-notes/)
and the
[5.2 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-2-practice/).

## The key facts

| On an interval where… | the function f is… | its graph… |
|---|---|---|
| f′(x) > 0 | increasing | rises from left to right |
| f′(x) < 0 | decreasing | falls from left to right |
| f′(x) = 0 at a point | stationary there | has a horizontal tangent |

"Increasing" always means increasing as x increases, reading the graph from left to right.

A function changes from increasing to decreasing (or the reverse) only where f′(x) = 0 or where
f′ is undefined, for example at a vertical asymptote. So the method is always the same:

1. Find f′(x) and factorise it if possible.
2. Find the values of x where f′(x) = 0 or f′(x) is undefined. These split the number line.
3. Test the sign of f′(x) in each interval, using a test value or the factors.
4. State the intervals, in inequality notation, in the form the question asks.

## Worked example 1: a cubic

Find the intervals on which f(x) = 2x³ + 3x² − 12x + 1 is increasing and decreasing.

```
f'(x) = 6x² + 6x − 12 = 6(x² + x − 2) = 6(x + 2)(x − 1)
f'(x) = 0 at x = −2 and x = 1

Sign table:
interval        x < −2    −2 < x < 1    x > 1
(x + 2)           −           +           +
(x − 1)           −           −           +
f'(x)             +           −           +
```

f is increasing for x < −2 and for x > 1, and decreasing for −2 < x < 1.

A sign table of the factors is faster and safer than substituting test values, and it shows the
examiner your reasoning. Because the leading coefficient of f′ is positive, the parabola y = f′(x)
is positive outside its roots and negative between them, which matches the table.

## Worked example 2: a function that is always increasing

Show that f(x) = x³ + 3x − 5 is increasing for all x.

```
f'(x) = 3x² + 3
x² ≥ 0 for all x, so 3x² + 3 ≥ 3 > 0
```

Since f′(x) > 0 for every real x, f is increasing everywhere. A "show that" question like this needs
the reason that f′(x) is positive, not just a statement.

## Worked example 3: a parameter

f(x) = x³ + kx² + 12x. Find the values of k for which f is increasing for all x.

The derivative f′(x) = 3x² + 2kx + 12 is a quadratic with positive leading coefficient. It is never
negative when it has at most one real root, so the discriminant must be less than or equal to zero:

```
(2k)² − 4(3)(12) ≤ 0
4k² − 144 ≤ 0
k² ≤ 36
−6 ≤ k ≤ 6
```

At k = ±6 the derivative touches zero at a single point. For example, with k = 6,
f′(x) = 3(x + 2)², which is zero only at x = −2: the graph has a horizontal point of inflexion there
but never falls, so f is still increasing. This question combines 5.2 with the discriminant from the
functions work in Topic 2.

## Worked example 4: a gap in the domain

f(x) = x + 4/x, x ≠ 0. Find where f is decreasing.

```
f(x) = x + 4x⁻¹
f'(x) = 1 − 4x⁻² = 1 − 4/x² = (x² − 4)/x²
f'(x) = 0 at x = ±2;  f'(x) is undefined at x = 0

interval      x < −2    −2 < x < 0    0 < x < 2    x > 2
f'(x)            +           −            −           +
```

f is decreasing for −2 < x < 0 and for 0 < x < 2. These must be written as **two separate intervals**:
"−2 < x < 2" would wrongly include x = 0, where f is not defined. Indeed f(−1) = −5 and f(1) = 5, so
f is not decreasing across the gap.

## Worked example 5: reading the graph of f′

A question shows the graph of y = f′(x), not y = f(x). Suppose it shows that:

- f′(x) is positive for x < −1, crosses the x-axis at x = −1 and is negative for −1 < x < 3;
- crosses again at x = 3 and is positive for 3 < x < 5;
- touches the x-axis at x = 5 and is positive for x > 5.

Then:

```
f is increasing for x < −1, decreasing for −1 < x < 3, increasing for x > 3
x = −1: f′ changes from + to −, so f has a local maximum
x = 3:  f′ changes from − to +, so f has a local minimum
x = 5:  f′ = 0 but does not change sign, so f is stationary but keeps increasing
```

The common error is to read the graph of f′ as if it were f: a point where f′ has a maximum is
where f is steepest, not a maximum of f. Classifying stationary points in full is section 5.8;
5.2 needs only the increasing and decreasing intervals.

## Technology

On Paper 2 you can graph y = f′(x) on the GDC and read where it is above or below the x-axis, or graph
y = f(x) and find its turning points. Write down the intervals and the x-values you found, to three
significant figures if they are not exact. On Paper 1 every step must be algebraic.

## Common mistakes

- Giving the intervals of f where **f** is positive, instead of where **f′** is positive.
- Solving f′(x) = 0 correctly but not testing the signs, then guessing the pattern.
- Combining intervals across an asymptote or a gap in the domain.
- Writing "increasing at x = 3" when the question asks for an interval.
- Reading a graph of f′ as a graph of f.
- Using "and" and "or" carelessly: "x < −2 and x > 1" describes no number; write "x < −2 or x > 1",
  or "for x < −2 and for x > 1".

## Exam technique and command words

- **Find** the intervals: show f′(x), its zeros and a sign table or test values.
- **Show that** f is increasing (or decreasing): prove the sign of f′(x) for all x in the domain.
- **Hence**: use the derivative or factorisation from the previous part.
- **Write down** from a graph: give intervals read from the graph without calculation.

## Where to go next

Condense the section with the
[5.2 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-2-revision-notes/),
then try the
[5.2 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-2-practice/).
The power rule used in every example here is developed in the
[5.3 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-3/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches
guide*, first assessment 2021. Section SL 5.2: increasing and decreasing functions; graphical
interpretation of f′(x) > 0, f′(x) = 0 and f′(x) < 0.
