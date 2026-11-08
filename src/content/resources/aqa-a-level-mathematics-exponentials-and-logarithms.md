---
title: "AQA A-Level Mathematics: F: Exponentials and logarithms (7357)"
seoTitle: "AQA A-Level Maths Exponentials and Logarithms Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "F: Exponentials and logarithms"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 7
syllabusTopics:
  - qualification: "a-level"
    topic: "f-exponentials-and-logarithms-aqa-alevel-maths"
description: "Study guide to exponentials and logarithms for AQA A-Level Maths (7357): graphs, laws of logs, solving equations, log graphs and growth models."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This guide teaches **Section F: Exponentials and logarithms** (content references F1 to F7) of
the AQA A-level Mathematics (7357) specification, version 1.3 (31 January 2018), for A-level
exams from June 2018 onwards. Section F is listed under Paper 1, and Papers 2 and 3 can each
assess any Paper 1 content, so these skills can appear on all three papers. A calculator is
required in every 7357 paper, but many questions here ask for **exact** answers, so you still
need to work with ln, e and log notation by hand.

Condensed recall is in the [revision notes](/resources/aqa-a-level-mathematics-exponentials-and-logarithms-revision-notes/),
and original questions with worked answers are in the
[practice set](/resources/aqa-a-level-mathematics-exponentials-and-logarithms-practice/).
Course hub: [AQA A-Level Mathematics](/boards/aqa/a-level/mathematics/). Printable
checklist: [AQA A-Level Mathematics checklist](/checklists/aqa/a-level/mathematics/).
To find your weak spots first, try a [free 10-minute diagnostic](/diagnostics/).

## What this section covers

| Ref | What you must be able to do |
|---|---|
| F1 | Know and use the function aˣ (a positive) and its graph; know and use eˣ and its graph |
| F2 | Know that the gradient of eᵏˣ is keᵏˣ, and why this makes exponential models suitable |
| F3 | Know log_a x as the inverse of aˣ; know ln x, its graph, and ln x as the inverse of eˣ |
| F4 | Use the laws of logarithms, including k log_a x ≡ log_a xᵏ for k = −1 and k = −½ |
| F5 | Solve equations of the form aˣ = b |
| F6 | Use logarithmic graphs to estimate a and n in y = axⁿ, and k and b in y = kbˣ |
| F7 | Use exponential growth and decay in modelling, and judge limitations and refinements |

Appendix B of the specification lists the laws of logarithms, and the link x = aⁿ ⇔ n = log_a x
(for a > 0 and x > 0), among the formulae you must be able to use **without** them being
provided. Learn them.

## F1: The graphs of aˣ and eˣ

<!-- marlbridge-diagram:maths-aqa-exponential-transform-asymptote -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/mathematics/maths-aqa-exponential-transform-asymptote.svg" aria-label="Open full-size diagram: maths-aqa-exponential-transform-asymptote"><img src="/images/learning/mathematics/maths-aqa-exponential-transform-asymptote.svg" width="1600" height="1050" alt="Source example y=3+2e^(−x) has y-intercept 5, decreases, remains above 3 and approaches asymptote y=3." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>Source example y=3+2e^(−x) has y-intercept 5, decreases, remains above 3 and approaches asymptote y=3. Select the image to enlarge it.</figcaption>
</figure>
<!-- /marlbridge-diagram:maths-aqa-exponential-transform-asymptote -->


For any positive a, the graph of y = aˣ:

- passes through **(0, 1)**, because a⁰ = 1
- lies entirely above the x-axis: aˣ > 0 for every x
- has the **x-axis (y = 0) as an asymptote**
- is **increasing** when a > 1 and **decreasing** when 0 < a < 1 (since (1/2)ˣ = 2⁻ˣ, the graph of
  (1/a)ˣ is the reflection of aˣ in the y-axis)

The number **e ≈ 2.718** gives the exponential function y = eˣ. Its graph has the same shape as
2ˣ or 3ˣ, and sits between them.

**Worked example 1.** Describe the graph of y = 3 + 2e⁻ˣ.

```
y-intercept:  x = 0  ->  y = 3 + 2e⁰ = 3 + 2 = 5        so (0, 5)
As x -> ∞,    e⁻ˣ -> 0   ->  y -> 3                     asymptote y = 3
e⁻ˣ > 0 for all x, so y > 3: no x-intercept
e⁻ˣ decreases as x increases, so the curve is decreasing
```

This is y = e⁻ˣ stretched by scale factor 2 parallel to the y-axis, then translated 3 up. The
range is y > 3.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--01-inverse-graphs.webp" width="900" height="900" alt="The orange curve y = e^x passes through (0, 1) and (1, e) and approaches the x-axis. The blue curve y = ln x passes through (1, 0) and (e, 1) and approaches the y-axis. They are mirror images in the dashed line y = x, so the functions are inverses." loading="lazy">
  <figcaption>The graph of ln x is the reflection of eˣ in y = x.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--02-base-family.webp" width="900" height="1000" alt="Curves 2^x, e^x, 3^x and (1/2)^x all pass through (0, 1), lie above the x-axis and have it as an asymptote. Bases above 1 give growth, with e^x between 2^x and 3^x; (1/2)^x decays and mirrors 2^x in the y-axis." loading="lazy">
  <figcaption>Every aˣ passes through (0, 1); a &gt; 1 grows and a &lt; 1 decays.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--06-hidden-quadratic.webp" width="900" height="1080" alt="The parabola u^2 - 5u + 6 crosses the u-axis at 2 and 3; u &lt; 0 is shaded as impossible since e^x &gt; 0. The curve y = e^(2x) - 5e^x + 6 crosses the x-axis at x = ln 2 and ln 3." loading="lazy">
  <figcaption>Substituting u = eˣ turns e²ˣ − 5eˣ + 6 = 0 into a quadratic with roots ln 2 and ln 3.</figcaption>
</figure>


## F2: The gradient of eᵏˣ

The defining property of e is that **the gradient of eᵏˣ is keᵏˣ**:

```
y = eᵏˣ   ->   dy/dx = k eᵏˣ = k y
```

So the rate of change of the quantity is **proportional to the quantity itself**. That is why
exponential models suit so many situations: a population that grows in proportion to its size,
a radioactive sample that decays in proportion to the amount left, money earning interest on
its current value. If k > 0 you get growth; if k < 0, decay. (Differentiating eᵏˣ, aᵏˣ and ln x
in general is Section G, covered in the [differentiation study guide](/resources/aqa-a-level-mathematics-differentiation/).)

**Worked example 2.** A culture has N = 200e^(0.3t) cells after t hours. Find the rate of
growth when t = 5 and show that it is 0.3N.

```
dN/dt = 200 × 0.3 e^(0.3t) = 60 e^(0.3t)
t = 5:  dN/dt = 60 e^1.5 = 268.9...  ≈ 269 cells per hour
N(5) = 200 e^1.5 = 896.3...,   0.3 × 896.3... = 268.9...   ✓
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--03-gradient-ekx.webp" width="900" height="1040" alt="On y = e^(2x), the tangent at (0, 1) has gradient 2 and at x = 0.6 (height 3.32) has gradient 6.64, shown by a triangle with run 0.4 and rise 2.66. Each gradient is 2 times the height, so dy/dx = ky." loading="lazy">
  <figcaption>The gradient of e^kx is k times its height, so growth is proportional to size.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--07-linear-form.webp" width="900" height="1110" alt="ln y against ln x is a straight line for y = ax^n: through (0.5, 1.85) and (2.5, 4.85), gradient n = 1.5 and intercept ln a = 1.10. lg y against x is a straight line for y = kb^x with intercept lg k = 0.70 and gradient lg b = 0.14." loading="lazy">
  <figcaption>A straight line on log axes gives gradient and intercept for power and exponential laws.</figcaption>
</figure>


## F3: Logarithms as inverses

**Definition:** for a > 0 and x > 0,

```
y = log_a x   ⇔   aʸ = x
```

The logarithm answers "what power of a gives x?" For example, log₂ 32 = 5 because 2⁵ = 32.
Two results follow at once: log_a 1 = 0 and log_a a = 1.

**ln x** means log_e x, the **natural logarithm**. Because ln x and eˣ are inverse functions:

```
e^(ln x) = x  (x > 0)        ln(eˣ) = x  (all x)
```

The graph of **y = ln x** is the reflection of y = eˣ in the line y = x. It:

- passes through **(1, 0)**
- has the **y-axis (x = 0) as an asymptote**
- exists only for **x > 0**, and is increasing, but ever more slowly

**Worked example 3.** Solve (a) e^(2x − 1) = 7 and (b) ln(3x) = 2. Give exact answers, then
values to 3 significant figures.

```
(a) take ln of both sides:  2x − 1 = ln 7
    x = (1 + ln 7)/2 = 1.47 (3 s.f.)

(b) apply e to both sides:  3x = e²
    x = e²/3 = 2.46 (3 s.f.)
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--08-ln-calculus.webp" width="900" height="1050" alt="The tangent to y = ln x at x = 2 has gradient one half, equal to 1/x. Below, the area under y = 1/x from 1 to e is shaded and equals 1, because the integral is ln x and ln e minus ln 1 is 1." loading="lazy">
  <figcaption>ln x differentiates to 1/x and the area under 1/x from 1 to e is 1.</figcaption>
</figure>


## F4: Laws of logarithms

For a > 0 and x, y > 0:

| Law | Statement |
|---|---|
| Multiplication | log_a x + log_a y ≡ log_a xy |
| Division | log_a x − log_a y ≡ log_a (x/y) |
| Power | k log_a x ≡ log_a xᵏ |

The specification names two power cases you must handle:

- **k = −1:** log_a (1/x) = −log_a x
- **k = −½:** log_a (1/√x) = −½ log_a x

**Worked example 4.** (a) Write 2 log₃ 6 − log₃ 4 as an integer. (b) Solve
log₂(x + 2) + log₂ x = 3.

```
(a) 2 log₃ 6 = log₃ 36
    log₃ 36 − log₃ 4 = log₃ (36/4) = log₃ 9 = 2

(b) log₂ [x(x + 2)] = 3
    x(x + 2) = 2³ = 8
    x² + 2x − 8 = 0  ->  (x + 4)(x − 2) = 0  ->  x = 2 or x = −4
    log₂ x needs x > 0, so reject x = −4.   x = 2
```

Always check solutions against the original equation: a logarithm of a negative number or zero
is undefined.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--04-log-ruler-laws.webp" width="900" height="940" alt="A log ruler marks 1 to 10 at their base-10 logs. Bars of length lg 2 and lg 3 end at 6, so lg 2 + lg 3 = lg 6. A bar lg 8 minus lg 2 has length lg 4. Two bars of lg 3 end at 9, so 2 lg 3 = lg 9." loading="lazy">
  <figcaption>Logarithms turn products into sums: lengths on a log ruler add.</figcaption>
</figure>


## F5: Solving aˣ = b

Take logs (base 10 or base e) of both sides, then use the power law:

```
aˣ = b   ->   x ln a = ln b   ->   x = ln b / ln a
```

**Worked example 5.** (a) Solve 5ˣ = 40 to 3 s.f. (b) Solve 2²ˣ − 6 × 2ˣ + 8 = 0.

```
(a) x = ln 40 / ln 5 = 2.29 (3 s.f.)

(b) 2²ˣ = (2ˣ)², so let u = 2ˣ:
    u² − 6u + 8 = 0  ->  (u − 2)(u − 4) = 0  ->  u = 2 or u = 4
    2ˣ = 2  ->  x = 1          2ˣ = 4  ->  x = 2
```

In (b), if one root for u had been negative, you would reject it: 2ˣ is never negative. This
"hidden quadratic" pattern also appears with e²ˣ and eˣ.

## F6: Using logarithmic graphs

Taking logs turns two non-linear relationships into straight lines. You can use log base 10 or
ln, as long as you are consistent.

| Model | Take logs | Plot | Gradient | Intercept |
|---|---|---|---|---|
| y = axⁿ | log y = log a + n log x | log y against log x | n | log a |
| y = kbˣ | log y = log k + x log b | log y against x | log b | log k |

Spot which one by the horizontal axis: **log x** for a power law, **plain x** for an exponential.

**Worked example 6.** (a) Data for x and y give a line of best fit for ln y against ln x
passing through (0.5, 1.85) and (2.5, 4.85). Estimate a and n in y = axⁿ.
(b) Data give a line of best fit for log₁₀ y against x with intercept 0.70 and passing through
(10, 2.10). Estimate k and b in y = kbˣ.

```
(a) gradient n = (4.85 − 1.85)/(2.5 − 0.5) = 3/2 = 1.5
    ln a = 1.85 − 1.5 × 0.5 = 1.10  ->  a = e^1.10 = 3.00 (3 s.f.)
    y ≈ 3.00 x^1.5

(b) gradient log₁₀ b = (2.10 − 0.70)/10 = 0.14  ->  b = 10^0.14 = 1.38 (3 s.f.)
    log₁₀ k = 0.70  ->  k = 10^0.70 = 5.01 (3 s.f.)
    y ≈ 5.01 × 1.38ˣ
```

Because the values come from a line of best fit, these are **estimates**.

## F7: Exponential growth and decay in modelling

A general model is **y = Aeᵏᵗ**: A is the value at t = 0, k > 0 means growth and k < 0 means
decay. Contexts named in the specification include continuous compound interest, radioactive
decay, drug concentration decay and population growth.

- **Continuous compound interest:** £P invested at rate r per year compounded continuously
  grows to Pe^(rt) after t years.
- **Half-life:** for y = Ae^(−kt), the time to halve satisfies e^(−kt) = ½, so t = ln 2 / k.

**Worked example 7.** (a) £2000 is invested at 4% per year compounded continuously. Find its
value after 5 years and the time for it to double. (b) A drug's concentration is
C = 15e^(−0.2t) mg/L, t hours after a dose. Find when it first falls to 2 mg/L.

```
(a) V = 2000 e^(0.04 × 5) = 2000 e^0.2 = £2442.81
    double: e^(0.04t) = 2  ->  t = ln 2 / 0.04 = 17.3 years (3 s.f.)

(b) 15 e^(−0.2t) = 2  ->  e^(−0.2t) = 2/15
    −0.2t = ln(2/15)  ->  t = 5 ln 7.5 = 10.1 hours (3 s.f.)
```

### Limitations and refinements

You must be able to criticise a model, not just use it.

- **Unlimited growth:** y = Aeᵏᵗ with k > 0 grows without bound. Real populations are limited
  by food, space and disease, so long-term predictions overestimate. A refinement is a model
  whose growth slows and levels off at a maximum value.
- **Constant rate assumed:** interest rates, birth rates and how fast the body clears a drug
  may change over time.
- **Continuous values:** a model can give 896.3 cells; real counts are whole numbers.
- **Extrapolation:** predictions far outside the data range are unreliable.
- **Decay never reaches zero:** Ae^(−kt) > 0 for every t, but in reality the quantity will
  eventually be negligible or gone. A refinement might add a constant, as in C = Ae^(−kt) + c,
  if the quantity settles at a non-zero level.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--09-decay-half-life.webp" width="900" height="1020" alt="C = 15e^(-0.2t) falls from 15 mg/L. It halves to 7.5 after 3.47 hours and to 3.75 after another 3.47 hours, so the half-life is constant (ln 2 divided by k). It reaches 2 mg/L at t = 10.1 hours." loading="lazy">
  <figcaption>Exponential decay has a constant half-life of ln 2 ÷ k.</figcaption>
</figure>


## Common errors

- Writing log(x + y) = log x + log y. There is **no** law for the log of a sum.
- Writing ln x / ln y = ln(x/y). The division law is about a **difference** of logs, not a
  quotient of logs.
- Forgetting that ln x, and log_a x, need x > 0, so keeping an invalid root.
- In the hidden quadratic, forgetting to go back from u to x, or keeping 2ˣ = −3.
- Mixing up the two log graphs: plotting log y against x for a power law.
- Taking the intercept of a log graph as a or k, instead of log a or log k.
- Rounding ln values early. Keep full calculator values until the final answer.

## Frequently asked questions

**Why are exponential models so common?**
The gradient of eᵏˣ is keᵏˣ, so the rate of change of the quantity is proportional to the quantity itself. That fits populations, radioactive decay, drug concentrations and continuously compounded interest.

**What is the graph of y = ln x like?**
It passes through (1, 0), has the y-axis as an asymptote, exists only for x > 0 and increases ever more slowly. It is the reflection of y = eˣ in the line y = x.

**What are the two power-law cases named in AQA 7357 F4?**
With k = −1, log_a (1/x) = −log_a x, and with k = −½, log_a (1/√x) = −½ log_a x.

**How do you tell which log graph to use?**
Look at the horizontal axis. log y against log x straightens a power law y = axⁿ, while log y against plain x straightens an exponential y = kbˣ.

**Does an exponential decay model ever reach zero?**
No. Ae^(−kt) is positive for every t, even though in reality the quantity may become negligible or disappear. A refinement can add a constant if it settles above zero.

## Next steps

Work through the [practice questions](/resources/aqa-a-level-mathematics-exponentials-and-logarithms-practice/),
then use the [revision notes](/resources/aqa-a-level-mathematics-exponentials-and-logarithms-revision-notes/)
for final review. The [overarching themes guide](/resources/aqa-a-level-mathematics-overarching-themes/)
covers modelling language (assumptions, refining a model) that F7 relies on, and the
[exam preparation guide](/resources/aqa-a-level-mathematics-exam-preparation/) covers the three
papers. Check gaps with a [free diagnostic](/diagnostics/).

## Official syllabus

AQA A-level Mathematics (7357) specification, version 1.3, 31 January 2018 (A-level exams June
2018 onwards), published by AQA. Section 3.7 F: Exponentials and logarithms, content F1 to F7.
