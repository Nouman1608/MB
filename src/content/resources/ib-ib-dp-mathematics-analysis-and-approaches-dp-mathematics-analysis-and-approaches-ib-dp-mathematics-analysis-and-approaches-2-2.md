---
title: "IB DP Mathematics: Analysis and Approaches (AA): 2.2 Concept of a function, domain, range and inverse"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Functions"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 2.02
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-2"
description: "Study guide to IB Maths AA 2.2: what makes a function, notation, finding domain and range, functions as models, and the inverse as a reflection in y = x."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This study guide covers section 2.2 of IB Diploma Programme Mathematics: Analysis and Approaches, common to SL and HL. The IB *Mathematics: analysis and approaches guide* (first assessment 2021) lists here the concept of a function, its domain, range and graph; function notation such as f(x), v(t) and C(n); the function as a mathematical model; the informal idea that an inverse function reverses or undoes the effect of a function; and the inverse as a reflection in the line y = x, with the notation f⁻¹(x).

The [straight lines, functions, inverses and quadratics guide](/resources/ib-dp-mathematics-aa-sl-lines-functions-quadratics/) treats 2.2 briefly. This page builds the ideas carefully: how to test whether a relation is a function, a routine for finding any domain and range, choosing a sensible domain in a model, and what an inverse means before you find its formula (formulas for inverses are section 2.5). Afterwards, use the [2.2 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-2-revision-notes/) and the [2.2 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-2-practice/).

## What a function is

A **function** assigns to each input in its domain **exactly one** output. Two parts matter:

- every allowed input has an output, and
- no input has two outputs.

Different inputs may share an output: f(x) = x² gives f(−3) = f(3) = 9, and it is still a function.

**Vertical line test.** A graph represents a function of x if every vertical line meets it at most once. The circle x² + y² = 25 fails: x = 3 meets it at (3, 4) and (3, −4). The curve y = x³ − x passes, even though a horizontal line can meet it three times.

### Notation

- f(x) = 3x − 1 and f: x ↦ 3x − 1 say the same thing.
- The letter can match the context: v(t) for velocity at time t, C(n) for the cost of n items.
- f(a + 1) means "replace every x by (a + 1)". For f(x) = x² − 2x, f(a + 1) = (a + 1)² − 2(a + 1) = a² − 1.

## Domain and range

The **domain** is the set of inputs. Unless a question states otherwise, it is the largest set of real numbers for which the rule makes sense. The **range** is the set of outputs that actually occur.

### Routine for the domain

Look for three restrictions:

| Feature in the rule | Restriction | Example |
|---|---|---|
| Denominator | Denominator ≠ 0 | 1/(x + 5): x ≠ −5 |
| Square root (even root) | Expression inside ≥ 0 | √(2x − 6): x ≥ 3 |
| Logarithm | Expression inside > 0 | ln(4 − x): x < 4 |

### Routine for the range

1. Find the domain.
2. Sketch the graph over that domain (by hand or with a GDC).
3. Read the lowest and highest y-values, including values at the ends of a restricted domain and any asymptote the graph approaches but never reaches.

### Notation for sets

The IB uses inequalities such as x ≥ 3, set notation such as {x : x ≥ 3}, and interval notation in which an outward-facing bracket means "not included": ]2, 7] means 2 < x ≤ 7, and [3, ∞[ means x ≥ 3. Any clear notation earns the mark, but be consistent.

## Worked example 1: domain and range from a formula

Find the domain and range of g(x) = 5 − √(3 − x).

```
Domain:  3 − x ≥ 0  →  x ≤ 3
√(3 − x) takes every value ≥ 0 (0 when x = 3, growing as x decreases)
So 5 − √(3 − x) takes every value ≤ 5
Range:   g(x) ≤ 5
```

A sketch confirms this: the graph starts at (3, 5) and falls to the left without limit.

## Worked example 2: a restricted domain

Find the range of f(x) = x² − 4 for −1 ≤ x ≤ 3.

```
f(−1) = −3,  f(3) = 5
The vertex (0, −4) is inside the domain, so the minimum is −4
Range:  −4 ≤ f(x) ≤ 5
```

Using only the end points gives −3 ≤ f(x) ≤ 5, which is wrong. Always check for a turning point inside the domain.

## Worked example 3: a function as a model

A rectangle has perimeter 40 cm and width w cm. Its area is A(w) = w(20 − w).

(a) State a suitable domain. (b) Find the range.

```
(a) Both sides must be positive: w > 0 and 20 − w > 0
    Domain: 0 < w < 20
(b) A(w) = −(w − 10)² + 100, so the maximum is 100 at w = 10
    As w → 0 or 20, A → 0, but those values are excluded
    Range: 0 < A ≤ 100
```

In a model, the domain comes from the context, not only from the algebra. If the input counts objects, the domain contains whole numbers only: for an invented printing price C(n) = 40 + 2.5n with 1 ≤ n ≤ 200 and n ∈ ℤ, the graph is a set of separate points, not a line.

## The inverse function: undoing f

An inverse function f⁻¹ reverses what f does. If f takes 2 to 12, then f⁻¹ takes 12 back to 2. This gives the guide's key link:

**Solving f(x) = 10 is the same as finding f⁻¹(10).**

### Worked example 4

Let f(x) = x³ + 2x. Find f⁻¹(12).

```
f⁻¹(12) is the x with f(x) = 12
x³ + 2x = 12  →  try x = 2: 8 + 4 = 12  ✓
f⁻¹(12) = 2
```

You did not need a formula for f⁻¹(x), which would be very hard to find here. You only needed to solve one equation.

### When does an inverse exist?

f⁻¹ exists only if f is **one-to-one**: each output comes from exactly one input. Test with a horizontal line: if any horizontal line meets the graph more than once, f has no inverse on that domain. f(x) = (x − 3)² is not one-to-one on ℝ because f(1) = f(5) = 4, but restricting the domain to x ≥ 3 makes it one-to-one.

### Graphs and swapped sets

- If (a, b) lies on y = f(x), then (b, a) lies on y = f⁻¹(x).
- So the graph of f⁻¹ is the reflection of the graph of f in **y = x**.
- The domain of f⁻¹ is the range of f, and the range of f⁻¹ is the domain of f.

For f(x) = √(x − 2) + 1, the domain is x ≥ 2 and the range is f(x) ≥ 1. So f⁻¹ has domain x ≥ 1 and range f⁻¹(x) ≥ 2, without any algebra.

**Notation warning.** f⁻¹(x) means the inverse function, not 1/f(x). For f(x) = 2x, f⁻¹(x) = x/2 but 1/f(x) = 1/(2x).

## Common mistakes

- Giving the range of a function on a restricted domain from the end points only.
- Writing the domain of √(3 − x) as x ≥ 3.
- Treating a graph that fails the horizontal line test as having an inverse.
- Reading f⁻¹(x) as 1/f(x).
- Ignoring the context when choosing the domain of a model, for example allowing negative lengths.
- Forgetting that the domain and range swap for the inverse.

## Exam technique

- **Write down the domain/range:** a sketch in the margin is quick insurance even when no working is required.
- **State:** give the answer with correct inequality signs; strict (<) and non-strict (≤) are marked.
- **Explain why f has no inverse:** give two inputs with the same output, such as f(1) = f(5).
- **Find f⁻¹(k):** solve f(x) = k; on Paper 2 a GDC intersection with y = k is acceptable.

## Where to go next

Revise with the [2.2 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-2-revision-notes/), then try the [2.2 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-2-practice/). Finding inverse formulas and composing functions follow in the [2.5 composite and inverse functions guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-5/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus section SL 2.2.
