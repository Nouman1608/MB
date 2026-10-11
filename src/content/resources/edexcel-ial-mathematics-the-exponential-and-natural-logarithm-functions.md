---
title: "Pearson Edexcel International Advanced Level Mathematics: Exponentials, logs and numerical methods (YMA01)"
seoTitle: "Edexcel IAL Maths P3 Exponentials and Logs Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "The exponential and natural logarithm functions, logarithmic graphs and numerical methods"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 147
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p3-pure-mathematics-3-edexcel-alevel-maths"
    subtopic: "p3-exponentials-and-logarithms-edexcel-alevel-maths"
  - qualification: "a-level"
    topic: "unit-p3-pure-mathematics-3-edexcel-alevel-maths"
    subtopic: "p3-numerical-methods-edexcel-alevel-maths"
description: "Study guide to eˣ, ln x, logarithmic graphs, sign-change root location and iteration for Pearson Edexcel IAL Mathematics Unit P3, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide teaches P3 sections 3 and 6 (topics 3.1 to 3.3 and 6.1 to 6.2) of the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification (YMA01), Issue 3, April 2019. The specification states that P3 is compulsory for IAL Mathematics and Pure Mathematics, and that its IAS weighting is N/A, so it is not part of IAS. It also says P1 and P2 knowledge is assumed, including the laws of logarithms, so revisit the [Unit P2 overview](/resources/a-level-edexcel-mathematics-pure-mathematics-2/) if those feel rusty.

Pair it with the [revision notes](/resources/edexcel-ial-mathematics-the-exponential-and-natural-logarithm-functions-revision-notes/) for recall and the [practice questions](/resources/edexcel-ial-mathematics-the-exponential-and-natural-logarithm-functions-practice/) for testing. Course links: the [Edexcel A Level Mathematics hub](/boards/edexcel/a-level/mathematics/), the [printable checklist](/checklists/edexcel/a-level/mathematics/) and [all free 10-minute diagnostics](/diagnostics/).

## What the sections cover

| Topic | What you must be able to do |
|---|---|
| 3.1 | Know the function eˣ and its graph, including graphs of the form y = e^(ax + b) + c |
| 3.2 | Know ln x and its graph, and that ln x is the inverse function of eˣ; solve e^(ax + b) = p and ln(ax + b) = q |
| 3.3 | Estimate the constants in y = axⁿ and y = kbˣ from straight-line logarithmic graphs |
| 6.1 | Locate roots of f(x) = 0 by looking for a change of sign in an interval where f(x) is continuous |
| 6.2 | Find approximate solutions with simple iterative methods, including xₙ₊₁ = f(xₙ) |

## 3.1 The function eˣ and its graph

The number e is about 2.718. The graph of y = eˣ has four features to learn.

- It passes through (0, 1).
- It is always positive, so the range is y > 0.
- The x-axis (y = 0) is a horizontal asymptote on the left: as x → −∞, eˣ → 0.
- It is increasing everywhere, and it grows faster than any power of x as x → ∞.

**The family y = e^(ax + b) + c.** Read it as a sequence of changes to y = eˣ. The constant c lifts the whole curve, so the asymptote moves from y = 0 to y = c and the range becomes y > c. The constants a and b change the horizontal position and scale but do not change the asymptote. If a is negative, the curve is a mirror image and decreases.

**Worked example 1.** Sketch the key features of y = e^(3x + 2) − 4.

```
Asymptote: y = −4, and the range is y > −4.
y-intercept (x = 0): y = e² − 4 = 3.389 (3 d.p.)
x-intercept (y = 0): e^(3x + 2) = 4
                     3x + 2 = ln 4
                     x = (ln 4 − 2)/3 = −0.205 (3 d.p.)
Shape: increasing, because a = 3 is positive.
```

Mark the asymptote as a dashed line and label both intercepts. A curve that crosses its own asymptote, or that dips below y = −4, is wrong.

## 3.2 The function ln x and its graph

The natural logarithm ln x is the inverse function of eˣ. That gives two cancelling rules, valid wherever both sides exist:

```
e^(ln x) = x   (x > 0 only)
ln(eˣ) = x       (any real x)
```

Inverse graphs are reflections in the line y = x, so reflect y = eˣ in that line to get y = ln x. The new curve passes through (1, 0), approaches the y-axis (x = 0) without touching it, exists only for x > 0, and takes every real value of y. The point (a, b) on y = eˣ maps to (b, a) on y = ln x.

**Solving e^(ax + b) = p.** Take ln of both sides, then rearrange. This needs p > 0.

**Solving ln(ax + b) = q.** Write both sides as powers of e, so ax + b = e^q. This is positive automatically; the domain check matters when you combine logarithms first.

**Worked example 2.** Solve (a) e^(5 − 2x) = 12, (b) e^(2x − 5) = 40, giving exact answers and then 3 significant figures.

```
(a) 5 − 2x = ln 12
    x = (5 − ln 12)/2 = 1.26

(b) 2x − 5 = ln 40
    x = (5 + ln 40)/2 = 4.34
```

**Worked example 3.** Solve (a) ln(3x + 4) = 2, (b) ln(5 − 2x) = −1.

```
(a) 3x + 4 = e²
    x = (e² − 4)/3 = 1.13

(b) 5 − 2x = e⁻¹
    x = (5 − e⁻¹)/2 = 2.32
```

In (b) the argument 5 − 2x equals e⁻¹, which is positive, so the answer is valid; substituting x = 2.32 back is a sensible check. Leave answers exact (such as (e² − 4)/3) unless the question asks for a decimal.

## 3.3 Logarithmic graphs

Some relationships become straight lines when you take logarithms of the data. Use either lg (base 10) or ln, but use the same base throughout.

**The power law y = axⁿ.** Take logs of both sides:

```
log y = n log x + log a
```

Compare with a line Y = mX + c, where Y is log y and X is log x. Plot log y against log x. The gradient is n, and the intercept on the vertical axis is log a.

**The exponential law y = kbˣ.** Take logs again:

```
log y = (log b) x + log k
```

Plot log y against x. The gradient is log b, and the intercept is log k.

**Which graph?** If a straight line appears when you plot log y against log x, the data fit a power law. If it appears against x, they fit an exponential law. The first form needs both variables logged; the second logs only y.

**Worked example 4 (power law).** Readings of x and y are modelled by y = axⁿ. Values of lg x and lg y are:

| x | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| lg x | 0 | 0.301 | 0.477 | 0.602 | 0.699 | 0.778 |
| lg y | 0.398 | 0.820 | 1.064 | 1.241 | 1.377 | 1.487 |

The points lie on a straight line. Use the first and last points to find a and n.

```
gradient = (1.487 − 0.398)/(0.778 − 0) = 1.40   so n = 1.40
intercept on the lg y axis = 0.398
lg a = 0.398   so a = 10^0.398 = 2.50
Model: y = 2.50x^1.4
```

Using two points that are far apart gives a more reliable gradient than using two that are close together.

**Worked example 5 (exponential law).** A mass of y grams of a substance is measured x days after the start. Values of lg y are:

| x | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| lg y | 1.903 | 1.833 | 1.762 | 1.691 | 1.621 | 1.550 |

The graph of lg y against x is a straight line. Find k and b in y = kbˣ.

```
intercept = 1.903        lg k = 1.903    k = 10^1.903 = 80.0
gradient = (1.550 − 1.903)/5 = −0.0706   lg b = −0.0706
b = 10^(−0.0706) = 0.850
Model: y = 80 × 0.85ˣ
```

A negative gradient means b < 1, so the quantity decays. The value k is the value of y when x = 0.

## 6.1 Locating roots by sign change

Suppose f(x) is continuous on [a, b]. If f(a) < 0 < f(b), or f(b) < 0 < f(a), then f(x) = 0 has at least one root in that interval. Continuous means the graph can be drawn without lifting the pen.

**Worked example 6.** Show that e^x = 5x has a root in [2.5, 2.6].

```
f(x) = eˣ − 5x
f(2.5) = −0.3175 (negative)
f(2.6) = +0.4637 (positive)
f is continuous and changes sign across [2.5, 2.6], so it has a root there.
```

Always state the values, the sign change and the continuity. To justify a root to 2 d.p., find the interval of width 0.01 either side. Here f(2.54) = −0.0203 and f(2.55) = 0.0571, so the root is 2.54 to 2 d.p.

**When a sign change misleads.**

```
f(x) = 1/(x − 2):  f(1) = −1, f(3) = 1, but there is no root.
The function is not continuous at x = 2.
```

**When no sign change hides a root.** For f(x) = (x − 1)² there is a root at x = 1 but f(x) ≥ 0 on both sides, so no sign change appears. Two roots inside one interval also give the same sign at both ends. So the absence of a sign change proves nothing: for f(x) = eˣ − 5x, f(0) = 1 and f(3) = 5.09 are both positive, although the interval [0, 3] contains two roots.

## 6.2 Approximate solutions by iteration

An iterative formula xₙ₊₁ = f(xₙ) generates a sequence from a starting value x₀. If the sequence settles on a number, that number α satisfies α = f(α), so it is a root of the rearranged equation. The guidance for 6.2 says that leads will be given, so a formula is normally supplied.

**Worked example 7.** The equation eˣ − 5x = 0 can be rearranged to x = ln(5x). Use xₙ₊₁ = ln(5xₙ) with x₀ = 2.5.

```
x₁ = ln 12.5      = 2.5257
x₂ = ln 12.6287   = 2.5360
x₃ = 2.5400,  x₄ = 2.5416,  x₅ = 2.5422,  x₆ = 2.5425
```

The differences shrink, and the values approach 2.543. To confirm 2.543 to 3 d.p., test f(2.5425) = −0.0011 and f(2.5435) = 0.0066, a sign change.

**Convergence depends on the formula and the start.** The same equation also rearranges to x = eˣ/5. Starting at x₀ = 0.3 the terms are 0.2700, 0.2620, 0.2599, 0.2594 and settle near 0.2592, the smaller root. Starting at x₀ = 2.6 the terms are 2.69, 2.95, 3.84, 9.29 and grow without limit, so that formula cannot find the larger root.

A staircase diagram shows this: draw y = f(x) and y = x, step vertically to the curve, then horizontally to the line. If the curve is shallow at the root, the steps close in; if it is steep, they move away.

## Common errors

- Writing ln(x + y) as ln x + ln y, or e^(a + b) as e^a + e^b.
- Taking ln of both sides of an equation but forgetting to rearrange the remaining linear equation.
- Accepting a solution of an equation involving ln(ax + b), after combining logarithms, without checking that ax + b is positive.
- Reading the gradient of a log graph as a, or the intercept as n; for y = axⁿ the gradient is n and the intercept is log a.
- Plotting log y against x for a power law, or log y against log x for an exponential law.
- Rounding in the middle of iteration; keep at least two more decimal places than you need.
- Claiming a root from a sign change without saying f is continuous.

Next, try the [practice set](/resources/edexcel-ial-mathematics-the-exponential-and-natural-logarithm-functions-practice/), and keep the [revision notes](/resources/edexcel-ial-mathematics-the-exponential-and-natural-logarithm-functions-revision-notes/) for last-minute recall.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019, Unit P3, sections 3 and 6 (Pearson Education Limited).
