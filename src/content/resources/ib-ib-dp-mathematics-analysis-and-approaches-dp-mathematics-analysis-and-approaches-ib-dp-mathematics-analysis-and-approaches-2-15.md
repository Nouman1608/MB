---
title: "IB DP Mathematics: Analysis and Approaches (AA): 2.15 Solutions of inequalities g(x) ≥ f(x) (AHL only)"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Functions"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 2.15
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-15"
description: "HL study guide to IB Maths AA 2.15: solving g(x) ≥ f(x) with sign tables and graphs, cubics by hand, double roots and GDC methods for other functions."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers **section 2.15 of IB DP Mathematics: Analysis and Approaches** (first assessment 2021): solutions of g(x) ≥ f(x), both graphically and analytically. It is **HL only** (AHL). By hand, you are expected to handle polynomial inequalities up to degree 3; for other functions, technology is the expected tool. The [further functions study guide](/resources/ib-dp-mathematics-aa-hl-further-functions/) shows one example of each approach. This page builds the full method: sign tables, the effect of repeated roots, the classic errors that come from dividing or multiplying by an expression, and how to present a GDC solution.

Then use the [inequalities revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-15-revision-notes/) and the [inequalities practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-15-practice/).

## The idea in one picture

g(x) ≥ f(x) holds exactly where the graph of y = g(x) is **on or above** the graph of y = f(x). The boundaries of the solution are the x-coordinates of the intersection points, where g(x) = f(x).

Equivalently, define h(x) = g(x) − f(x). Then the inequality is h(x) ≥ 0: find where the single graph y = h(x) is on or above the x-axis. This one-sided form is the basis of the analytic method.

## The analytic method for polynomials

1. **Collect everything on one side**: h(x) = g(x) − f(x) ≥ 0.
2. **Factorise h(x) completely**. For a cubic, use the factor theorem from section 2.12 to find a first root.
3. **Mark the zeros** on a number line. They split it into intervals.
4. **Find the sign** of h in each interval, by a sign table or by sketching y = h(x).
5. **Select** the intervals that match the inequality sign. Include the zeros for ≥ or ≤; exclude them for > or <.

### Worked example 1: a cubic

Solve 2x³ + 3x² ≥ 11x + 6.

```
h(x) = 2x³ + 3x² − 11x − 6 ≥ 0
h(2) = 16 + 12 − 22 − 6 = 0, so (x − 2) is a factor
h(x) = (x − 2)(2x² + 7x + 3) = (x − 2)(2x + 1)(x + 3)
```

| Interval | x + 3 | 2x + 1 | x − 2 | h(x) |
|---|---|---|---|---|
| x < −3 | − | − | − | − |
| −3 < x < −1/2 | + | − | − | + |
| −1/2 < x < 2 | + | + | − | − |
| x > 2 | + | + | + | + |

So **−3 ≤ x ≤ −1/2 or x ≥ 2**.

A quicker check: a cubic with a positive leading coefficient and three single roots goes −, +, −, + from left to right. Knowing the end behaviour lets you fill a sign table in seconds.

## Repeated roots change the pattern

At a single root the sign changes. At a **double** root it does not: the graph touches the axis and turns back. This matters most when the inequality includes equality.

### Worked example 2: a double root

Solve (a) x³ − 3x + 2 > 0 and (b) x³ − 3x + 2 ≤ 0.

```
x = 1: 1 − 3 + 2 = 0
x³ − 3x + 2 = (x − 1)(x² + x − 2) = (x − 1)²(x + 2)
(x − 1)² ≥ 0 always, so the sign is the sign of (x + 2),
except that h(1) = 0.
```

(a) h(x) > 0 when x > −2, **except** x = 1, where h = 0. So **−2 < x < 1 or x > 1**.

(b) h(x) ≤ 0 when x ≤ −2, **and also** at the single point x = 1. So **x ≤ −2 or x = 1**.

Both answers are easy to get wrong: in (a) students forget to remove x = 1, and in (b) they forget to include it.

## The two operations that break inequalities

**Dividing by an expression.** Solving x³ > 4x by dividing by x gives x² > 4, which wrongly keeps x < −2 (where x is negative and the inequality should flip) and loses −2 < x < 0. Correct method:

```
x³ − 4x > 0
x(x − 2)(x + 2) > 0
Signs (positive cubic): −, +, −, + across −2, 0, 2
Solution: −2 < x < 0 or x > 2
```

**Multiplying by a denominator.** The same issue arises with an inequality such as (x + 3)/(x − 1) ≥ 2, because x − 1 may be negative. Bring everything to one side over a common denominator instead:

```
(x + 3)/(x − 1) − 2 ≥ 0
(x + 3 − 2x + 2)/(x − 1) ≥ 0
(5 − x)/(x − 1) ≥ 0
Critical values 1 and 5; signs: −, +, − across 1, 5
Solution: 1 < x ≤ 5   (x = 1 is excluded: the expression is undefined)
```

The sign-table method works for any expression you can write as a product or quotient of simple factors.

## The graphical method with technology

For inequalities that mix function types, such as exponentials, logarithms or trigonometric functions with polynomials, no algebraic rearrangement isolates x. The guide expects technology here.

1. Graph y = g(x) and y = f(x) (or the single graph y = g(x) − f(x)).
2. Check the domain of each function first.
3. Use the intersect (or zero) tool to find every boundary value.
4. Read off where g is on or above f.
5. Give the answer as inequalities with endpoints to 3 significant figures, unless a value is exact.

### Worked example 3: a logarithm and a quadratic

Solve ln(x + 2) ≥ x² − 1.

```
Domain: x + 2 > 0, so x > −2
Intersections (GDC): x = −1 and x = 1.50 (3 s.f.)
At x = 0: ln 2 ≈ 0.69 ≥ −1, so the log graph is above between them.
At x = −1.5: ln 0.5 ≈ −0.69 < 1.25, below to the left.
Solution: −1 ≤ x ≤ 1.50
```

x = −1 is exact (ln 1 = 0 and (−1)² − 1 = 0), so write it exactly. Testing one value in each region confirms which side is which; a sketch from the GDC screen is acceptable support.

## Common mistakes

- Dividing both sides by x or by a bracket whose sign is unknown.
- Multiplying by a denominator that could be negative.
- Treating a double root as a sign change.
- Forgetting the isolated solution x = r in an inequality such as (x − r)²(…) ≤ 0.
- Including a value where the expression is undefined.
- Giving the intersection points only, instead of the intervals.
- Ignoring the domain (for example ln(x + 2) needs x > −2) when reading a GDC graph.
- Joining two intervals with "and" instead of "or": "x < −3 and x > 2" describes no numbers.

## Exam technique: command words

- **Solve** an inequality by hand: show the rearranged form, the factorisation, and a sign table or sketch. The final answer earns its mark only if every interval and endpoint is right.
- **Hence solve**: use the factorisation or graph from the previous part; do not start again.
- **Using technology, solve** (Paper 2 or 3): write the equation you solved for the boundaries and give both values; state the interval clearly.
- **Find the set of values of k for which…**: often a discriminant inequality, solved with the same sign method.

On HL Paper 1, polynomial inequalities up to degree 3 must be done fully by hand.

## Where to go next

Summarise the method with the [inequalities revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-15-revision-notes/) and practise it with the [inequalities practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-15-practice/). Factorising cubics is covered in the [polynomials study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-12/), and modulus inequalities in the [modulus and related graphs guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-2-16/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus section AHL 2.15.
