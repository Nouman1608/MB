---
title: "AQA A-Level Mathematics: I: Numerical methods (7357)"
seoTitle: "AQA A-Level Maths 7357 Numerical Methods Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "I: Numerical methods"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 10
syllabusTopics:
  - qualification: "a-level"
    topic: "i-numerical-methods-aqa-alevel-maths"
description: "Study guide to AQA A-Level Maths Section I: change of sign, iteration, cobweb diagrams, Newton-Raphson and the trapezium rule, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This guide teaches **Section I: Numerical methods** (content references I1 to I4) of the
**AQA A-level Mathematics (7357) specification**, version 1.3, for A-level exams from June 2018
onwards. Section I is listed under Paper 1 in the specification, and Papers 2 and 3 can each
assess any Paper 1 content as well. A calculator is required in every 7357 paper, and the
specification says it must have an iterative function, so the methods here are always done
with a calculator to hand.

Use it with the [Numerical methods revision notes](/resources/aqa-a-level-mathematics-numerical-methods-revision-notes/)
and the [Numerical methods practice questions](/resources/aqa-a-level-mathematics-numerical-methods-practice/).
The [7357 course hub](/boards/aqa/a-level/mathematics/) lists every topic, the
[printable checklist](/checklists/aqa/a-level/mathematics/) lets you tick off outcomes, and the
free [10-minute diagnostics](/diagnostics/) show where to start.

## What Section I covers

| Ref | What you must be able to do |
|---|---|
| I1 | Locate roots of f(x) = 0 by a change of sign of f(x) over an interval where f is sufficiently well-behaved; understand how change of sign methods can fail |
| I2 | Solve equations approximately with simple iterative methods; draw cobweb and staircase diagrams; use Newton-Raphson and other recurrence relations x_(n+1) = g(x_n); understand how these methods can fail |
| I3 | Understand and use numerical integration, including the trapezium rule, estimating the area under a curve and the limits it must lie between |
| I4 | Use numerical methods to solve problems in context |

Why bother? Many equations, such as e^(−x) = x or ln x + x = 3, cannot be solved with algebra.
The overarching theme OT2.4 says you should understand that numerical methods give a solution
to a required level of accuracy instead. OT2.5 adds that you should judge how accurate such a
solution is. The [overarching themes guide](/resources/aqa-a-level-mathematics-overarching-themes/)
covers those themes across the course.

## I1: Change of sign

If f is **continuous** on the interval [a, b], and f(a) and f(b) have opposite signs, the
graph must cross the x-axis somewhere between a and b. So there is at least one root of
f(x) = 0 in (a, b).

### Worked example 1

Show that x³ − 4x − 2 = 0 has a root α between 2.2 and 2.3, then show that α = 2.21 to 2
decimal places.

```
f(x) = x³ − 4x − 2
f(2.2) = 10.648 − 8.8 − 2 = −0.152    (negative)
f(2.3) = 12.167 − 9.2 − 2 =  0.967    (positive)
```

f is a polynomial, so it is continuous. There is a change of sign, so 2.2 < α < 2.3.

To show α = 2.21 to 2 d.p., test the **bounds** of that rounding interval, 2.205 and 2.215:

```
f(2.205) = −0.0992   (negative)
f(2.215) =  0.0073   (positive)
```

The change of sign means 2.205 < α < 2.215, so α rounds to **2.21**. Always finish with a
conclusion sentence of this kind.

### How change of sign can fail

- **Discontinuity.** f(x) = 1/(x − 2) is negative at x = 1 and positive at x = 3, but there is
  no root. The graph jumps across an asymptote at x = 2. This is why the function must be
  well-behaved (continuous) on the interval.
- **Repeated root or touching.** f(x) = (x − 1)² has a root at x = 1, but f is positive on
  both sides, so no sign change shows it.
- **Two roots close together.** If the interval holds two roots, f(a) and f(b) can have the
  same sign. No change of sign does **not** prove there is no root.
- **Interval too wide.** A wide interval can hide several roots, or roots that cancel in
  sign. Use narrow intervals and a sketch.

## I2: Iteration x_(n+1) = g(x_n)

Rearrange f(x) = 0 into the form x = g(x). A root α satisfies α = g(α). Start with a value
x₁ (or x₀) and feed each output back in. If the sequence converges, its limit is a root.

### Worked example 2

The same equation x³ − 4x − 2 = 0 can be written x³ = 4x + 2, so x = ∛(4x + 2). Use
x_(n+1) = ∛(4x_n + 2) with x₀ = 2.

```
x₁ = ∛(10)       = 2.15443
x₂ = ∛(10.6177)  = 2.19791
x₃ = 2.20985
x₄ = 2.21310
x₅ = 2.21399
```

On a calculator, type 2, press =, then enter ∛(4 × Ans + 2) and press = repeatedly. Write
down each value the question asks for. The sequence climbs steadily towards 2.214.

### Staircase and cobweb diagrams

Draw y = x and y = g(x) on the same axes. The root is where they meet. From x₁, go vertically
to the curve y = g(x), then horizontally to y = x, then vertically to the curve again.

- If the iterates approach the root **from one side**, the path looks like a **staircase**.
  This happens when 0 < g′(x) < 1 near the root. In example 2, g′(2.214) ≈ 0.27.
- If the iterates **alternate either side** of the root, the path spirals in like a
  **cobweb**. This happens when −1 < g′(x) < 0 near the root.

Example of a cobweb: x = e^(−x) with x₀ = 0.5 gives 0.6065, 0.5452, 0.5797, 0.5601, 0.5712,
... above and below the root 0.5671 in turn. Here g′(x) = −e^(−x) ≈ −0.57 near the root.

### How iteration can fail

When |g′(x)| > 1 near the root, the iterates move **away** from it. Try the other rearrangement
of example 2, x = (x³ − 2)/4, with x₀ = 2:

```
x₁ = 1.5,  x₂ = 0.34375,  x₃ = −0.48985,  x₄ = −0.52938,  x₅ = −0.53709
```

Near 2.214, g′(x) = 3x²/4 ≈ 3.7, so the sequence leaves that root. It settles on a
**different root**, −0.539. The same equation can give a useful or a useless iteration
depending on the rearrangement. Check your answer against the root you were asked for.

## I2: Newton-Raphson

Newton-Raphson follows the tangent at x_n down to the x-axis and uses that crossing as the
next approximation:

```
x_(n+1) = x_n − f(x_n) / f′(x_n)
```

It needs f′, so you must differentiate first (see
[Section G: Differentiation](/resources/aqa-a-level-mathematics-differentiation/)).

### Worked example 3

Use Newton-Raphson with x₁ = 2 to find a root of ln x + x − 3 = 0 to 4 decimal places.

```
f(x)  = ln x + x − 3
f′(x) = 1/x + 1

f(2)  = ln 2 − 1 = −0.30685
f′(2) = 1.5
x₂ = 2 − (−0.30685)/1.5 = 2.204569
x₃ = 2.207939
x₄ = 2.207940
```

x₃ and x₄ agree to 4 d.p., so the root is **2.2079** (4 d.p.). A change of sign check on
f(2.20785) and f(2.20795) would confirm it.

### How Newton-Raphson can fail

- **f′(x_n) = 0.** The tangent is horizontal and never meets the x-axis, so the formula
  divides by zero. For f(x) = x³ − 3x + 1, f′(1) = 0, so x₁ = 1 cannot be used.
- **Starting near a turning point.** f′ is small, so the step f/f′ is huge. For the same f,
  x₁ = 0.9 gives f(0.9) = −0.971 and f′(0.9) = −0.57, so x₂ = 0.9 − 1.7035 = −0.8035. The
  sequence then runs to the root 1.532, not the nearer root 0.347.
- **Poor starting value or discontinuity.** The iterates may jump to another root, cycle, or
  diverge.

## I3: The trapezium rule

Split [a, b] into n strips of equal width h = (b − a)/n. Join the tops of the ordinates
y₀, y₁, ..., y_n with straight lines and add the trapezium areas:

```
∫ from a to b of y dx ≈ (h/2) [ y₀ + y_n + 2(y₁ + y₂ + ... + y_(n−1)) ]
```

There are n strips but n + 1 ordinates.

### Worked example 4

Estimate ∫ from 0 to 1 of e^(x²) dx using 4 strips. Say whether it is an over- or
underestimate, and find limits the integral must lie between.

h = 0.25.

| x | 0 | 0.25 | 0.5 | 0.75 | 1 |
|---|---|---|---|---|---|
| y = e^(x²) | 1 | 1.0645 | 1.2840 | 1.7551 | 2.7183 |

```
T = 0.125 × [1 + 2.7183 + 2(1.0645 + 1.2840 + 1.7551)]
  = 0.125 × 11.9255
  = 1.4907 (4 d.p.)
```

**Over or under?** f″(x) = (2 + 4x²)e^(x²) > 0, so the curve is convex (bends upwards). Each
straight chord lies above the curve, so the trapezium rule gives an **overestimate**. For a
concave curve (f″ < 0) it gives an underestimate.

**Limits.** f is increasing on [0, 1], so rectangles using the left-hand heights sit under the
curve and rectangles using the right-hand heights sit over it:

```
Lower sum = 0.25 × (1 + 1.0645 + 1.2840 + 1.7551) = 1.2759
Upper sum = 0.25 × (1.0645 + 1.2840 + 1.7551 + 2.7183) = 1.7055
```

So 1.2759 < I < 1.7055. Because the trapezium value is an overestimate, the tighter statement
is **1.2759 < I < 1.4907**. (A calculator's numerical integration gives 1.4627, which agrees.)
More strips narrow the gap.

## I4: Numerical methods in context

A drug's concentration is modelled by C = 12t e^(−0.4t) mg per litre, t hours after a dose. It
is effective while C ≥ 8. Find when it stops being effective.

C peaks at t = 2.5 (C ≈ 11.04), so the second crossing of C = 8 is after that. Solve
f(t) = 12t e^(−0.4t) − 8 = 0, which has no algebraic solution.

```
f′(t) = 12e^(−0.4t)(1 − 0.4t)
t₁ = 6:  f(6) = −1.46831,  f′(6) = −1.52406
t₂ = 6 − (−1.46831)/(−1.52406) = 5.0366
t₃ = 5.0740
```

Check to 2 d.p.: f(5.065) = 0.0146 > 0 and f(5.075) = −0.0017 < 0, so t = 5.07. The drug stops
being effective about **5.07 hours** (about 5 hours 4 minutes) after the dose.

Interpret the answer: the model ignores differences between patients, so a precision of
seconds would be meaningless. State an answer to a sensible accuracy and note the model's
limits. The trapezium rule appears in context too, for example estimating distance from a
table of velocity readings.

## Common errors

- Showing a change of sign but giving no conclusion, or not saying f is continuous.
- Testing 2.21 and 2.22 to "show α = 2.21 to 2 d.p.". Test 2.205 and 2.215.
- Calculator in **degrees** for an equation involving sin or cos. Use radians.
- Writing only the final iterate when the question asks for x₂, x₃ and x₄.
- Using n + 1 as the number of strips, or the wrong h.
- Calling a trapezium estimate an overestimate without a reason based on the curve's shape.
- Rounding iterates early, which drifts the final answer.

## Official syllabus

AQA A-level Mathematics (7357) specification, version 1.3 (31 January 2018), for A-level exams
June 2018 onwards, published by AQA. Section 3.10, I: Numerical methods.
