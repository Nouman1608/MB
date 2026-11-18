---
title: "IB DP Mathematics: Analysis and Approaches (AA): 2.10 Solving equations graphically and analytically -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Topic 2 -- Functions"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 2.10
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-10"
description: "Revision notes for IB Maths AA 2.10: algebra or graph, exponential and log equation types, false roots, the GDC routine and a 12-question self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense section 2.10 of the IB *Mathematics: analysis and approaches guide* (first assessment 2021): solving equations both graphically and analytically, using technology where there is no appropriate analytic approach, and applying these skills to real-life situations. It is common to SL and HL. For explanations and worked examples, see the [2.10 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-10/); for exam-style questions, see the [2.10 practice set](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-10-practice/).

## Core recall

- **Analytic** = exact algebra; required on Paper 1 and whenever "exact" or "algebraically" appears.
- **Graphical** = intersections of two graphs, or zeros of f(x) − g(x), usually with a GDC.
- Equations mixing types (exponential with polynomial, log with polynomial, trigonometric with linear) usually have **no analytic method**.
- Roots of an equation = zeros of a function.
- Check every analytic root in the **original** equation; logarithms, square roots and denominators can create false roots.
- Decide how many solutions to expect before reading GDC values.

## Key terms

| Term | Meaning |
|---|---|
| Analytic solution | Found by algebraic manipulation, often exact |
| Graphical solution | Read from where graphs meet or cross the axis |
| Root | A solution of an equation |
| Zero | An input giving output 0 |
| False (extraneous) root | A value produced by the working that does not satisfy the original equation |
| Exact answer | A form such as ln 3, √5 or 2/3, not a rounded decimal |
| Viewing window | The part of the plane shown on the GDC |

## Analytic types

| Type | Method | Watch for |
|---|---|---|
| aˣ = k | x = ln k / ln a | k must be positive |
| a^(px) = b^(qx + r) | Take ln of both sides, collect x terms | Factorise x out |
| a^(2x) + b·aˣ + c = 0 | u = aˣ, solve the quadratic | Reject u ≤ 0 |
| logₐ(f(x)) = k | f(x) = aᵏ | Check f(x) > 0 |
| log A + log B = k | Combine to log(AB) = k | Check each original log |
| √f(x) = g(x) | Square both sides | Check g(x) ≥ 0 |
| Rational = line | Multiply by the denominator | Excluded value |

**Quick example.** log₃(x − 1) + log₃(x + 1) = 1 gives x² − 1 = 3, so x = ±2; x = −2 makes log₃(x − 1) undefined, so x = 2.

## GDC routine

1. Enter both sides as separate functions (or one as f − g).
2. Sketch mentally first: how many crossings should there be?
3. Use intersect (or zero) for each one, zooming out to find any outside the window.
4. Use radian mode for trigonometric functions unless degrees are stated.
5. Write the equation graphed and each solution to 3 s.f.

**Quick example.** eˣ = −x: eˣ is increasing and positive, −x is decreasing, so there is exactly one solution, x = −0.567.

## Counting solutions without solving

| Situation | Number of solutions |
|---|---|
| One side increasing, the other decreasing | At most one |
| Line meets a parabola | 0, 1 or 2 (use the discriminant) |
| Exponential meets a downward parabola with maximum above the exponential | Usually two; check both sides |

**Quick example.** 3ˣ = 4 − x: 3ˣ increases and 4 − x decreases, so there is exactly one solution, and x = 1 works (3 = 3).

## In context

- Set up the equation from the model, such as 20 + 70e^(−0.1t) = 45.
- Solve analytically if the model has one exponential term; otherwise use the GDC.
- Reject answers outside the model's domain, and give units.

## Exam traps

- False roots kept from log, root or rational equations.
- u = aˣ < 0 accepted.
- ln(a + b) split into ln a + ln b.
- A decimal given when the exact value was asked for.
- A second intersection missed outside the GDC window.
- Dividing by x and losing x = 0.
- Degree mode used for a trigonometric equation in radians.

## Self-test

1. Solve 2ˣ = 12 exactly.
2. Solve e^(2x) − 5eˣ + 6 = 0.
3. Solve ln x + ln(x + 3) = ln 10.
4. Solve √(x + 2) = x.
5. Give an example of an equation that needs technology.
6. What is the difference between a root and a zero?
7. How many solutions has eˣ = −x?
8. Describe two graphical ways to solve f(x) = g(x).
9. Solve 10ˣ = 0.01.
10. Solve log₃(2x − 1) = 2.
11. Give two reasons a GDC might miss a solution.
12. Solve 4ˣ = 8.

### Answers

1. x = ln 12/ln 2 (= log₂ 12)
2. eˣ = 2 or 3: x = ln 2, ln 3
3. x(x + 3) = 10, so x = 2 or x = −5; reject −5 (ln of a negative): x = 2
4. x + 2 = x² gives x = 2 or x = −1; √1 = 1 ≠ −1, so x = 2
5. Any mixed-type equation, such as eˣ = 4 − x² or ln x = x − 3
6. A root solves an equation; a zero is an input where a function equals 0
7. One
8. Intersect y = f(x) with y = g(x), or find the zeros of y = f(x) − g(x)
9. x = −2
10. 2x − 1 = 9, so x = 5
11. The window is too small; two graphs nearly touch; the wrong angle mode is set
12. 2^(2x) = 2³, so x = 3/2

## Where to go next

Return to the [2.10 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-10/) for the longer examples, then complete the [2.10 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-10-practice/). Graph features and intersections are revised in the [2.4 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-4-revision-notes/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus section SL 2.10.
