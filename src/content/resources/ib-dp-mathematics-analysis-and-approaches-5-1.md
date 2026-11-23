---
title: "IB DP Mathematics: Analysis and Approaches (AA): 5.1 Limits and the derivative as a gradient function"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Calculus"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5.01
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-1"
description: "Study guide to IB DP Maths AA section 5.1: estimating limits from tables and graphs, gradients as limits of chords, and derivatives as rates of change."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 5.1 of IB DP Mathematics: Analysis and Approaches (first assessment 2021) is the
**introduction to the concept of a limit** and the **derivative interpreted as gradient function and
as rate of change**. It is SL content, examined at SL and HL, and it is the starting point for every
other calculus section. The guide expects an informal understanding of the gradient of a curve as a
limit, estimation of limits from a table or graph, and the notations dy/dx, f′(x), dV/dr and ds/dt.
Formal analytic methods of calculating limits are not required at SL; differentiation from first
principles is HL-only content in section 5.12.

The [differentiation study guide](/resources/ib-dp-mathematics-aa-sl-differentiation/) covers 5.1
alongside the rules of differentiation, with one chord table. This page spends longer on what a
limit is, why the derivative is a function, and how to interpret it in context. Afterwards, use the
[5.1 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-5-1-revision-notes/)
and the
[5.1 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-5-1-practice/).

## What a limit is

The limit of f(x) as x approaches a is the value that f(x) gets closer and closer to as x gets
closer and closer to a, from both sides. It is written

```
lim (x → a) f(x)
```

The key point is that the limit describes what happens **near** a, not **at** a. The function does
not even need to be defined at a.

### Worked example 1: a limit where the function is undefined

f(x) = (x² − 9)/(x − 3) is undefined at x = 3, because the denominator is zero. Estimate the limit as
x → 3 from a table.

| x | 2.9 | 2.99 | 2.999 | 3.001 | 3.01 | 3.1 |
|---|---|---|---|---|---|---|
| f(x) | 5.9 | 5.99 | 5.999 | 6.001 | 6.01 | 6.1 |

From both sides the values approach 6, so the limit is 6. On a graph, y = f(x) looks like the line
y = x + 3 with a single missing point (a "hole") at (3, 6).

### Reading a limit from a graph

On a graph, follow the curve towards x = a from the left and from the right and read the y-value
both paths approach. If the two sides approach different values, the limit does not exist. A filled
or open circle at x = a tells you the value of f(a), which may be different from the limit, or may
not exist at all.

## The gradient of a curve as a limit

A straight line has one gradient. A curve does not, so we define its gradient at a point P using
**chords**: lines joining P to a nearby point Q on the curve. As Q slides towards P, the chord
gradients approach a limiting value, and the chord approaches the **tangent** at P. That limiting
value is the gradient of the curve at P.

### Worked example 2: the gradient of y = 2ˣ at (0, 1)

The chord from (0, 1) to (h, 2ʰ) has gradient (2ʰ − 1)/h.

| h | 0.1 | 0.01 | 0.001 | −0.001 | −0.01 | −0.1 |
|---|---|---|---|---|---|---|
| chord gradient | 0.7177 | 0.6956 | 0.6934 | 0.6929 | 0.6908 | 0.6697 |

From both sides the chord gradients approach about 0.693, so the gradient of y = 2ˣ at (0, 1) is
approximately 0.693. You do not need to identify this number exactly; the table is the method the
guide expects.

## The derivative as a gradient function

Repeat the chord process at every point and you get a new function: the gradient at each value of
x. This is the **derivative** or **gradient function**. For y = x², the chord from (x, x²) to
(x + h, (x + h)²) has gradient 2x + h, which approaches 2x as h → 0. So the gradient function of x²
is 2x:

| x | −2 | −1 | 0 | 1 | 2 |
|---|---|---|---|---|---|
| gradient of y = x² | −4 | −2 | 0 | 2 | 4 |

Reading the table as a function, each gradient is double the x-value. The graph of y = x² slopes
down for x < 0 (negative gradient), is flat at x = 0, and slopes up for x > 0.

### Notation

| Notation | Read as | Meaning |
|---|---|---|
| dy/dx | "dee y by dee x" | gradient of y with respect to x |
| f′(x) | "f dash of x" | the gradient function of f |
| f′(3) | "f dash of 3" | the gradient of the curve where x = 3 (a number) |
| dV/dr | "dee V by dee r" | rate of change of volume V with respect to radius r |
| ds/dt | "dee s by dee t" | rate of change of displacement s with respect to time t |

dy/dx is a single symbol, not a fraction to be cancelled.

## The derivative as a rate of change

A gradient measures how fast one quantity changes compared with another, so a derivative is a
**rate of change**. Its units are the units of the top variable per unit of the bottom variable.

- The **average** rate of change over an interval is the gradient of a chord: change in y divided by
  change in x.
- The **instantaneous** rate of change at a point is the gradient of the tangent: the limit of the
  average rates over smaller and smaller intervals.

### Worked example 3: average and instantaneous speed

A ball rolls down a slope so that its distance travelled after t seconds is s = 5t² metres. Estimate
its speed at t = 2.

```
Average speed from t = 2 to t = 2 + h:   (5(2 + h)² − 20)/h
h = 0.1:    20.5 m s⁻¹
h = 0.01:   20.05 m s⁻¹
h = 0.001:  20.005 m s⁻¹
```

The average speeds approach 20, so the instantaneous speed, ds/dt at t = 2, is 20 m s⁻¹.

### Worked example 4: interpreting a derivative in context

Water drains from a tank. V is the volume in litres and t is the time in minutes. At t = 5,
dV/dt = −12.

Interpretation: at the instant t = 5, the volume of water is decreasing at a rate of 12 litres per
minute. The negative sign means decreasing; the units are litres per minute because V is in litres
and t is in minutes. It does **not** mean that 12 litres remain, or that 12 litres drain in total.

## Common mistakes

- **Substituting into a formula that is undefined.** For (x² − 9)/(x − 3) at x = 3, substitution gives
  0/0, which is not the limit. Use a table or graph.
- **Using one side only.** A limit needs the same value from the left and the right.
- **Confusing f(a) and f′(a).** f(3) is a height on the curve; f′(3) is a gradient.
- **Missing units or direction.** A rate of change answer needs units (per minute, per centimetre)
  and, in context, whether the quantity is increasing or decreasing.
- **Mixing up average and instantaneous rates.** "Between t = 1 and t = 3" asks for a chord gradient;
  "at t = 2" asks for a derivative.

## Exam technique and command words

- **Estimate** a limit or gradient: show a table with values on both sides that approach the answer;
  on Paper 2 the GDC table function is ideal.
- **Write down**: a value read from a graph or a table with no further working.
- **Interpret** a derivative: give the quantity, the rate, the units and whether it is increasing or
  decreasing, at the stated instant.
- On Paper 1 you may be given the table and asked to complete it, or given a graph to read.

## Where to go next

Condense the section with the
[5.1 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-5-1-revision-notes/),
then work through the
[5.1 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-5-1-practice/).
Section 5.2 uses the sign of the derivative to describe where a function is increasing or
decreasing: see the
[5.2 study guide](/resources/ib-dp-mathematics-analysis-and-approaches-5-2/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches
guide*, first assessment 2021. Section SL 5.1: introduction to the concept of a limit; derivative
interpreted as gradient function and as rate of change.
