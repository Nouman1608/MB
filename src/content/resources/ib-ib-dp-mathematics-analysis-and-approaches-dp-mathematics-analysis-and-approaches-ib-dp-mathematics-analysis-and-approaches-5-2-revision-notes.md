---
title: "IB DP Mathematics: Analysis and Approaches (AA): 5.2 Increasing and decreasing functions -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes on IB DP Maths AA section 5.2: the sign of f′(x), sign tables, reading f′ graphs, interval notation, exam traps and a 12-question self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Quick-recall notes for **section 5.2, increasing and decreasing functions**, in IB DP Mathematics:
Analysis and Approaches (first assessment 2021), examined at SL and HL. The
[5.2 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-2/)
works through cubic, parameter and asymptote examples in full; the
[5.2 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-2-practice/)
test them. For the wider differentiation unit, see the
[differentiation revision notes](/resources/ib-dp-mathematics-aa-sl-differentiation-revision-notes/).

## The core facts

- f′(x) > 0 on an interval: f is **increasing** there (graph rises left to right).
- f′(x) < 0 on an interval: f is **decreasing** there (graph falls left to right).
- f′(x) = 0 at a point: the tangent is **horizontal**; f is stationary there.

## The four-step method

1. Differentiate and factorise f′(x).
2. Find the **critical values**: where f′(x) = 0, and where f′ or f is undefined.
3. Draw a sign table with one column per interval.
4. State the intervals with inequalities, keeping separate pieces separate.

## Condensed recall

- **Sign changes happen only at critical values.** Between two neighbouring critical values f′ keeps
  one sign, so one test value per interval is enough.
- **Quadratic f′.** If f′ is a quadratic with positive leading coefficient and two roots, it is
  negative between the roots and positive outside them. With a negative leading coefficient the
  pattern reverses.
- **Always increasing.** Show f′(x) > 0 for every x: for example, a square plus a positive constant,
  or a quadratic with negative discriminant and positive leading coefficient.
- **Repeated roots.** At a repeated root of f′, such as (x − 2)², f′ touches zero but does not
  change sign. The function is stationary there but keeps the same direction.
- **Gaps in the domain.** Never join intervals across a value where f is undefined.
- **Graph of f′.** f′ above the axis: f increasing. f′ below: f decreasing. f′ crossing the axis: f
  turns. f′ touching the axis: f has a stationary point but does not turn.
- **Graph of f.** Where f has a local maximum or minimum, f′ is zero; where f is steepest, f′ has a
  turning point.

## Key terms

| Term | Meaning |
|---|---|
| Increasing function | Output gets larger as input gets larger on the interval |
| Decreasing function | Output gets smaller as input gets larger on the interval |
| Stationary point | A point where f′(x) = 0 and the tangent is horizontal |
| Critical value | An x-value where f′(x) = 0 or f′ is undefined |
| Sign table | A table showing the sign of each factor of f′(x) on each interval |
| Interval | A set of x-values written with inequalities, such as −2 < x < 1 |

## Mini-example

f(x) = x⁴ − 8x²: find where f is increasing.

```
f'(x) = 4x³ − 16x = 4x(x − 2)(x + 2)
critical values: −2, 0, 2

interval    x < −2   −2 < x < 0   0 < x < 2   x > 2
f'(x)          −          +           −          +
```

f is increasing for −2 < x < 0 and for x > 2.

## Exam traps

- **Trap: sign of f instead of f′.** Where the graph is above the x-axis is irrelevant; the
  gradient matters.
- **Trap: no sign test.** Two roots of f′ do not tell you which interval is positive without a test
  or a reason.
- **Trap: "and" for a union.** Write "x < −2 or x > 2", or "for x < −2 and for x > 2".
- **Trap: asymptotes.** For 1/x, f′(x) = −1/x² < 0 for all x ≠ 0, so f is decreasing on x < 0 and on
  x > 0 separately, but f(−1) < f(1).
- **Trap: reading f′ as f.** The maximum point of the graph of f′ is where f is increasing fastest.
- **Trap: dropping the factor.** In 4x(x − 2)(x + 2), forgetting the x gives the wrong number of
  intervals.

## Self-test

1. What does f′(x) < 0 on an interval tell you about f?
2. f′(x) = (x − 1)(x − 5). Where is f decreasing?
3. f′(x) = −(x − 1)(x − 5). Where is f decreasing?
4. f(x) = x³ − 12x. Find the intervals where f is increasing.
5. Determine whether f(x) = 5x − x³ − x⁵ is decreasing for all x.
6. f′(x) = (x + 3)². Is f ever decreasing?
7. f(x) = 1/x², x ≠ 0. Where is f increasing?
8. The graph of f′ is below the x-axis for 1 < x < 4 and above it otherwise. Where does f have a
   local maximum?
9. The graph of f′ touches the x-axis at x = 2 from above. What happens to f at x = 2?
10. For which values of k is f(x) = x³ + kx increasing for all x?
11. f(x) = x² − 6x + 1. Write down the interval on which f is decreasing.
12. Why must "−3 < x < 3" not be given as a decreasing interval for f(x) = x + 9/x?

**Answers**

1. f is decreasing on that interval.
2. For 1 < x < 5 (the quadratic is negative between its roots).
3. For x < 1 and for x > 5.
4. f′(x) = 3x² − 12 = 3(x − 2)(x + 2), so f is increasing for x < −2 and for x > 2.
5. No: f′(x) = 5 − 3x² − 5x⁴, and f′(0) = 5 > 0, so f is increasing near x = 0.
6. No. (x + 3)² ≥ 0, so f is never decreasing; it is stationary at x = −3.
7. f′(x) = −2/x³, which is positive for x < 0, so f is increasing for x < 0.
8. At x = 1, where f′ changes from positive to negative.
9. f has a stationary point at x = 2 but continues increasing (f′ does not change sign).
10. f′(x) = 3x² + k ≥ 0 for all x when k ≥ 0.
11. f′(x) = 2x − 6 < 0 for x < 3.
12. f is undefined at x = 0, so the decreasing set is −3 < x < 0 and 0 < x < 3, two separate
    intervals.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches
guide*, first assessment 2021. Section SL 5.2: increasing and decreasing functions; graphical
interpretation of f′(x) > 0, f′(x) = 0 and f′(x) < 0.
