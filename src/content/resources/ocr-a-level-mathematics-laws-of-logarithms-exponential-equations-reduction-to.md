---
title: "OCR A Level Mathematics A: Laws of logarithms, exponential equations, linear form and modelling (H240)"
seoTitle: "OCR A Level Maths Log Laws and Linear Form Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Laws of logarithms, exponential equations, reduction to linear form and growth/decay modelling"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 115
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-ocr-alevel-maths"
    subtopic: "exponentials-and-logarithms-ocr-alevel-maths"
description: "Study guide to the laws of logarithms, exponential equations, log graphs and exponential growth and decay modelling for OCR A Level Mathematics A."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
This study guide follows the OCR A Level Mathematics A specification (Version 3.1, August 2026, for first assessment in 2018). It covers sections 1.06f to 1.06i of the Pure Mathematics content: the laws of logarithms, equations involving exponentials, reduction to linear form using logarithmic graphs, and modelling with exponential functions. The specification lists all four as Stage 1, so they are common to the AS and A Level courses. Pure Mathematics content is assessed in all three written papers.

Pair it with the [revision notes](/resources/ocr-a-level-mathematics-laws-of-logarithms-exponential-equations-reduction-to-revision-notes/) and the [practice questions](/resources/ocr-a-level-mathematics-laws-of-logarithms-exponential-equations-reduction-to-practice/). The course page is [OCR A Level Mathematics](/boards/ocr/a-level/mathematics/) and the printable list is the [checklist](/checklists/ocr/a-level/mathematics/). The [free diagnostics](/diagnostics/) can show where to start. The graphs of a^x, e^x and ln x and the gradient of e^kx are separate outcomes and are not taught here. You should already know that log_a x is the inverse of a^x and that ln x is the inverse of e^x.

## What you must be able to do

| Section | Outcome | Stage |
|---|---|---|
| 1.06f | Use the three laws of logarithms to simplify expressions and solve equations | Common to AS and A Level |
| 1.06g | Solve a^x = b (a > 0), including equations that reduce to this form | Common to AS and A Level |
| 1.06h | Use logarithmic graphs to estimate the parameters in y = ax^n and y = kb^x from data | Common to AS and A Level |
| 1.06i | Use exponential growth and decay in modelling, with limitations and refinements | Common to AS and A Level |

## The laws of logarithms (1.06f)

For a > 0 with a ≠ 1, x > 0 and y > 0:

```
log_a x + log_a y = log_a (xy)
log_a x − log_a y = log_a (x/y)
k log_a x = log_a (x^k)
```

The third law holds for every real k, so it includes k = −1 (which gives −log_a x = log_a (1/x)) and k = −½ (which gives −½ log_a x = log_a (1/√x)). You should also know log_a a = 1 and log_a 1 = 0. Change of base is excluded from this outcome.

Two warnings. These laws combine logs of the same base only. And log_a (x + y) does not simplify: it is not log_a x + log_a y.

### Worked example 1: simplifying

Write ½ log₃ 36 + log₃ 15 − log₃ 10 as a single logarithm and evaluate it.

```
½ log₃ 36 = log₃ (36^½) = log₃ 6
log₃ 6 + log₃ 15 = log₃ 90
log₃ 90 − log₃ 10 = log₃ 9 = 2
```

The answer is **2**, because 3² = 9.

### Worked example 2: expressing in terms of letters

Given log_a 2 = p and log_a 3 = q, express log_a 18 and log_a (√8 / 27) in terms of p and q.

```
log_a 18 = log_a (2 × 3²) = p + 2q
log_a (√8 / 27) = log_a (2^(3/2)) − log_a (3³) = (3/2)p − 3q
```

### Worked example 3: an equation with a logarithm of each side

Solve log₂ (x + 3) + log₂ (x − 1) = 5.

```
log₂ [(x + 3)(x − 1)] = 5
(x + 3)(x − 1) = 2⁵ = 32
x² + 2x − 35 = 0
(x + 7)(x − 5) = 0
x = −7 or x = 5
```

A logarithm only exists for a positive input. When x = −7, both x + 3 and x − 1 are negative, so reject it. The solution is **x = 5**.

Always state which roots you reject and why.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--04-log-ruler-laws.webp" width="900" height="940" alt="A log ruler marks 1 to 10 at their base-10 logs. Bars of length lg 2 and lg 3 end at 6, so lg 2 + lg 3 = lg 6. A bar lg 8 minus lg 2 has length lg 4. Two bars of lg 3 end at 9, so 2 lg 3 = lg 9." loading="lazy">
  <figcaption>Logarithms turn products into sums: lengths on a log ruler add.</figcaption>
</figure>


## Exponential equations (1.06g)

To solve a^x = b with b > 0, take logarithms of both sides. Any base works if you use it on both sides, and natural logs are the usual choice:

```
a^x = b  →  x ln a = ln b  →  x = ln b / ln a
e^x = b  →  x = ln b
```

### Worked example 4: a^x = b

Solve 3^x = 20, giving x to 3 significant figures.

```
x ln 3 = ln 20
x = ln 20 / ln 3 = 2.7268...
```

So **x = 2.73**.

### Worked example 5: the unknown appears on both sides

Solve 5^(x+1) = 2^(3x). Give the answer exactly, then to 3 significant figures.

```
(x + 1) ln 5 = 3x ln 2
x ln 5 + ln 5 = 3x ln 2
ln 5 = x (3 ln 2 − ln 5)
x = ln 5 / (3 ln 2 − ln 5)
```

Numerically x = 3.4243..., so **x = 3.42**. The key move is to collect every term in x on one side and factorise.

### Worked example 6: e^x with a linear exponent

Solve e^(5x−2) = 12.

```
5x − 2 = ln 12
x = (2 + ln 12) / 5 = 0.897 (3 s.f.)
```

Using ln as the inverse of e^x means no division by ln e is needed.

### Equations that reduce to this form

Some equations are not yet in the form a^x = b. You can sometimes rewrite both sides with a common base, or treat the powers as a quadratic.

Common base: solve 4^x = 8^(x−1).

```
(2²)^x = (2³)^(x−1)  →  2^(2x) = 2^(3x−3)
2x = 3x − 3  →  x = 3
```

The same equation by logs gives 2x ln 2 = (3x − 3) ln 2, so the answer agrees.

Solve 9^x − 3^(x+1) − 10 = 0.

```
9^x = (3^x)²   and   3^(x+1) = 3 × 3^x
Let t = 3^x:   t² − 3t − 10 = 0
(t − 5)(t + 2) = 0
t = 5 or t = −2
```

Since 3^x > 0 for every x, t = −2 gives no solution. Then 3^x = 5, so x = ln 5 / ln 3 = **1.46** (3 s.f.).

## Reduction to linear form (1.06h)

Experimental data often follows y = ax^n or y = kb^x. You turn each curve into a straight line by taking logs, then read the parameters from the gradient and intercept. The specification expects you to estimate the parameters by drawing graphs from given data, using appropriate calculator functions to find the logarithms.

### Power law: y = ax^n

```
y = ax^n
lg y = lg a + n lg x          (any base works; lg means log₁₀)
```

Plot **lg y against lg x**. You get a straight line with gradient **n** and vertical intercept **lg a**. So a = 10^(intercept).

### Exponential law: y = kb^x

```
y = kb^x
lg y = lg k + x lg b
```

Plot **lg y against x**. The gradient is **lg b** and the intercept is **lg k**. With natural logs, the gradient is ln b and the intercept is ln k, so b = e^(gradient) and k = e^(intercept).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--01-inverse-graphs.webp" width="900" height="900" alt="The orange curve y = e^x passes through (0, 1) and (1, e) and approaches the x-axis. The blue curve y = ln x passes through (1, 0) and (e, 1) and approaches the y-axis. They are mirror images in the dashed line y = x, so the functions are inverses." loading="lazy">
  <figcaption>The graph of ln x is the reflection of eˣ in y = x.</figcaption>
</figure>


### Which graph is straight?

| If this graph is a straight line | The relationship is |
|---|---|
| lg y against lg x | y = ax^n (power) |
| lg y (or ln y) against x | y = kb^x (exponential) |

### Worked example 7: estimating a and n from data

A quantity y is believed to follow y = ax^n.

| x | 2 | 4 | 6 | 8 | 10 |
|---|---|---|---|---|---|
| y | 8.44 | 22.29 | 39.32 | 58.81 | 80.38 |
| lg x | 0.301 | 0.602 | 0.778 | 0.903 | 1.000 |
| lg y | 0.926 | 1.348 | 1.595 | 1.769 | 1.905 |

The points (lg x, lg y) lie close to a straight line. Draw a line of best fit through the cloud, then use two points far apart on the line. Here the line passes through (0.301, 0.926) and (1.000, 1.905).

```
gradient = (1.905 − 0.926) / (1.000 − 0.301) = 1.40
intercept = 0.926 − 1.40 × 0.301 = 0.505
n = 1.4
a = 10^0.505 = 3.2
```

So y ≈ **3.2 x^1.4**. Your values depend on the line you draw, so quote them as estimates.

### Worked example 8: reading parameters from a line

Plotting ln y against x gives a straight line passing through (0, 1.2) and (4, 3.6). Find k and b in y = kb^x.

```
gradient = (3.6 − 1.2) / 4 = 0.6 = ln b   →  b = e^0.6 = 1.82
intercept = 1.2 = ln k                      →  k = e^1.2 = 3.32
```

So y = **3.32 × 1.82^x**. Remember that the intercept is ln k, not k.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--07-linear-form.webp" width="900" height="1110" alt="ln y against ln x is a straight line for y = ax^n: through (0.5, 1.85) and (2.5, 4.85), gradient n = 1.5 and intercept ln a = 1.10. lg y against x is a straight line for y = kb^x with intercept lg k = 0.70 and gradient lg b = 0.14." loading="lazy">
  <figcaption>A straight line on log axes gives gradient and intercept for power and exponential laws.</figcaption>
</figure>


## Exponential growth and decay in modelling (1.06i)

A quantity grows or decays exponentially when its rate of change is proportional to its size. The standard models are:

```
N = N₀ e^(kt)    growth when k > 0, decay when k < 0
N = N₀ e^(−kt)   decay written with k > 0
```

N₀ is the value at t = 0. The doubling time for growth is ln 2 / k. The half-life for decay is ln 2 / k when written with e^(−kt). Where the spec lists contexts, they include continuous compound interest (A = Pe^(rt)), radioactive decay, drug concentration decay and population growth.

### Worked example 9: growth

A bacterial culture is modelled by N = 200e^(0.35t), where t is in hours.

```
Time to reach 1000:  200e^(0.35t) = 1000
e^(0.35t) = 5
t = ln 5 / 0.35 = 4.60 hours
Doubling time = ln 2 / 0.35 = 1.98 hours
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--02-base-family.webp" width="900" height="1000" alt="Curves 2^x, e^x, 3^x and (1/2)^x all pass through (0, 1), lie above the x-axis and have it as an asymptote. Bases above 1 give growth, with e^x between 2^x and 3^x; (1/2)^x decays and mirrors 2^x in the y-axis." loading="lazy">
  <figcaption>Every aˣ passes through (0, 1); a &gt; 1 grows and a &lt; 1 decays.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--03-gradient-ekx.webp" width="900" height="1040" alt="On y = e^(2x), the tangent at (0, 1) has gradient 2 and at x = 0.6 (height 3.32) has gradient 6.64, shown by a triangle with run 0.4 and rise 2.66. Each gradient is 2 times the height, so dy/dx = ky." loading="lazy">
  <figcaption>The gradient of e^kx is k times its height, so growth is proportional to size.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--09-decay-half-life.webp" width="900" height="1020" alt="C = 15e^(-0.2t) falls from 15 mg/L. It halves to 7.5 after 3.47 hours and to 3.75 after another 3.47 hours, so the half-life is constant (ln 2 divided by k). It reaches 2 mg/L at t = 10.1 hours." loading="lazy">
  <figcaption>Exponential decay has a constant half-life of ln 2 ÷ k.</figcaption>
</figure>


### Worked example 10: finding the constants from two readings

A radioactive sample has mass m grams after t days, modelled by m = m₀e^(−kt). It is 80 g at t = 0 and 55 g at t = 3. Find k, the half-life, and the mass after 10 days.

```
m₀ = 80
55 = 80e^(−3k)  →  e^(3k) = 80/55  →  k = ln(16/11) / 3 = 0.125
Half-life = ln 2 / k = 5.55 days
m(10) = 80e^(−10k) = 22.9 g
```

### Worked example 11: continuous compound interest

£2000 is invested at 3.2% a year with interest added continuously, so A = 2000e^(0.032t). How long until it has trebled?

```
e^(0.032t) = 3  →  t = ln 3 / 0.032 = 34.3 years
```

### Limitations and refinements

A model is a simplification, and the specification asks you to consider where an exponential model fails. Be ready to comment in context.

- **Unlimited growth.** N = N₀e^(kt) grows without bound. A real population meets limits on food, space and disease, so the model suits only the early stage.
- **Decay to zero.** A model m = m₀e^(−kt) never reaches zero and ignores any background level.
- **Continuous values.** Counts of individuals are whole numbers, but the model gives decimals.
- **Parameters from limited data.** Predicting far outside the data you used (extrapolation) is unreliable.

Typical refinements are a model that levels off at a maximum value, adding a constant so a quantity decays to a non-zero level, or allowing k to change over time. Name the refinement and link it to the context.

## Common errors

- Writing log_a (x + y) = log_a x + log_a y.
- Cancelling "log" in log x / log y to leave x / y.
- Forgetting to reject a root that makes a logarithm's input negative.
- Writing x = ln b × ln a instead of x = ln b / ln a.
- Plotting y against x for data that needs log axes.
- Reading the intercept as k or a instead of ln k or lg a.
- Using a model far outside the range of the data and saying nothing about it.

## Next steps

Work through the [practice questions](/resources/ocr-a-level-mathematics-laws-of-logarithms-exponential-equations-reduction-to-practice/), then use the [revision notes](/resources/ocr-a-level-mathematics-laws-of-logarithms-exponential-equations-reduction-to-revision-notes/) for the final weeks.

## Official syllabus

OCR, *A Level Mathematics A (H240) specification*, Version 3.1 (August 2026), for first assessment in 2018, published by OCR. This guide covers section 1.06f to 1.06i.
