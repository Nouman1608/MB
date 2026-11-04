---
title: "Pearson Edexcel International Advanced Level Mathematics: Product, quotient and chain rules (YMA01)"
seoTitle: "Edexcel IAL Maths P3 Differentiation Rules Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Differentiation of exponential, logarithmic and trigonometric functions: product, quotient and chain rules"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 148
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p3-pure-mathematics-3-edexcel-alevel-maths"
    subtopic: "p3-differentiation-edexcel-alevel-maths"
description: "Study guide to Edexcel International Advanced Level Maths P3 section 4: derivatives of e^kx, ln kx and trig, the three rules, a^x and growth models."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide is aligned to the Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics specification (Issue 3, April 2019). It covers Unit P3: Pure Mathematics 3, section 4 (Differentiation, 4.1 to 4.4). The specification states that P3 and P4 are compulsory for IAL Mathematics and Pure Mathematics, and that P3 has no IAS weighting (it is not part of IAS). There are no tiers inside this content.

Use it with the [revision notes](/resources/edexcel-ial-mathematics-differentiation-of-exponential-logarithmic-and-revision-notes/) and the [practice questions](/resources/edexcel-ial-mathematics-differentiation-of-exponential-logarithmic-and-practice/). The wider course sits on the [Edexcel A Level Mathematics hub](/boards/edexcel/a-level/mathematics/), the [printable checklist](/checklists/edexcel/a-level/mathematics/) lists every topic, and the [free 10-minute diagnostics](/diagnostics/) show where to start. Earlier work is in [differentiating powers of x](/resources/edexcel-ial-mathematics-differentiating-and-integrating-powers-of-x-gradients/) and the [Pure Mathematics 2 overview](/resources/a-level-edexcel-mathematics-pure-mathematics-2/). The [exam preparation page](/resources/edexcel-ial-mathematics-exam-preparation/) covers planning for the course as a whole.

## What this unit covers

| Spec | What you must be able to do |
|---|---|
| 4.1 | Differentiate e^kx, ln kx, sin kx, cos kx, tan kx and sums and differences of them |
| 4.2 | Use the product, quotient and chain rules, including cosec x, cot x and sec x |
| 4.3 | Use dy/dx = 1 / (dx/dy), for example when x is given as a function of y |
| 4.4 | Use exponential growth and decay; know d/dx(a^x) = a^x ln a; evaluate and refine models |

## 4.1 Standard derivatives

| f(x) | f′(x) |
|---|---|
| e^kx | k e^kx |
| ln kx | 1/x |
| sin kx | k cos kx |
| cos kx | −k sin kx |
| tan kx | k sec² kx |

Angles are in radians. The constant k comes out as a multiplier for e^kx, sin kx, cos kx and tan kx. For ln kx it does not appear, because ln kx = ln k + ln x and ln k is a constant. Derivatives of sums and differences are found term by term, and a constant multiplier stays in place.

**Worked example 1.** Differentiate f(x) = 4e^(3x) + 6 ln 5x − cos 2x + tan 4x.

```
4e^(3x)  →  4 × 3e^(3x) = 12e^(3x)
6 ln 5x  →  6 × (1/x) = 6/x
−cos 2x  →  −(−2 sin 2x) = 2 sin 2x
tan 4x   →  4 sec² 4x
f′(x) = 12e^(3x) + 6/x + 2 sin 2x + 4 sec² 4x
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--08-ln-calculus.webp" width="900" height="1050" alt="The tangent to y = ln x at x = 2 has gradient one half, equal to 1/x. Below, the area under y = 1/x from 1 to e is shaded and equals 1, because the integral is ln x and ln e minus ln 1 is 1." loading="lazy">
  <figcaption>ln x differentiates to 1/x and the area under 1/x from 1 to e is 1.</figcaption>
</figure>


## 4.2 Product, quotient and chain rules

<!-- marlbridge-diagram:maths-b17-differentiation-rules -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/mathematics/maths-b17-differentiation-rules.svg" aria-label="Open full-size diagram: maths-b17-differentiation-rules"><img src="/images/learning/mathematics/maths-b17-differentiation-rules.svg" width="1600" height="1050" alt="Product, quotient and chain rule cards plus derivative of x squared times sine x." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>Product, quotient and chain rule cards plus derivative of x squared times sine x. Select the image to enlarge it.</figcaption>
</figure>
<!-- /marlbridge-diagram:maths-b17-differentiation-rules -->


### Product rule

If y = uv, then dy/dx = u′v + uv′. Use it when two functions of x are multiplied.

**Worked example 2.** Find the stationary points of y = 3x² e^(−x).

```
u = 3x², u′ = 6x;   v = e^(−x), v′ = −e^(−x)
dy/dx = 6x e^(−x) − 3x² e^(−x) = 3x(2 − x) e^(−x)
```

Since e^(−x) is never zero, dy/dx = 0 when x = 0 or x = 2. The points are (0, 0) and (2, 12e^(−2)).

### Quotient rule

If y = u/v, then dy/dx = (v u′ − u v′) / v². The order in the numerator matters.

**Worked example 3.** Differentiate y = e^(2x) / (x² + 1) and say whether the curve has stationary points.

```
u = e^(2x), u′ = 2e^(2x);   v = x² + 1, v′ = 2x
dy/dx = [2e^(2x)(x² + 1) − 2x e^(2x)] / (x² + 1)²
      = 2e^(2x)(x² − x + 1) / (x² + 1)²
```

The discriminant of x² − x + 1 is (−1)² − 4(1)(1) = −3, so x² − x + 1 is never zero. With e^(2x) never zero, dy/dx is never zero, so the curve has no stationary points.

### Chain rule

<!-- marlbridge-diagram:maths-b22-chain-rule-cosine-power -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/mathematics/maths-b22-chain-rule-cosine-power.svg" aria-label="Open full-size diagram: maths-b22-chain-rule-cosine-power"><img src="/images/learning/mathematics/maths-b22-chain-rule-cosine-power.svg" width="1600" height="1050" alt="For y = cos⁴(3x), the outer power gives 4(cos 3x)³, differentiating cosine gives −sin 3x, and differentiating the inner 3x gives 3; multiplying gives dy/dx = −12 cos³(3x) sin(3x)." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>For y = cos⁴(3x), the outer power gives 4(cos 3x)³, differentiating cosine gives −sin 3x, and differentiating the inner 3x gives 3; multiplying gives dy/dx = −12 cos³(3x) sin(3x). Select the image to enlarge it.</figcaption>
</figure>
<!-- /marlbridge-diagram:maths-b22-chain-rule-cosine-power -->


If y is a function of u and u is a function of x, then dy/dx = (dy/du) × (du/dx). In practice: differentiate the outer function, leave the inside alone, then multiply by the derivative of the inside.

**Worked example 4.** Differentiate (a) y = cos⁴ 3x, (b) y = ln(3x² + 1), (c) y = e^(sin x), (d) y = (1 + e^(2x))⁵.

```
(a) y = (cos 3x)⁴:   dy/dx = 4(cos 3x)³ × (−3 sin 3x) = −12 cos³ 3x sin 3x
(b) dy/dx = (1/(3x² + 1)) × 6x = 6x/(3x² + 1)
(c) dy/dx = e^(sin x) × cos x
(d) dy/dx = 5(1 + e^(2x))⁴ × 2e^(2x) = 10e^(2x)(1 + e^(2x))⁴
```

For (b) there is a shortcut worth knowing: d/dx(ln f(x)) = f′(x)/f(x), which is just the chain rule written once.

### Combining the rules

Many questions use two rules at once. Work from the outside in and name the pieces first.

**Worked example 5.** Differentiate y = x³ sin 2x.

```
Product rule: u = x³, u′ = 3x²;  v = sin 2x, v′ = 2 cos 2x (chain rule)
dy/dx = 3x² sin 2x + 2x³ cos 2x = x²(3 sin 2x + 2x cos 2x)
```

### Reciprocal trigonometric functions

You need the derivatives of sec x, cosec x and cot x. They follow from the rules above, so you can rebuild them if you forget.

```
sec x = (cos x)⁻¹:   d/dx = −(cos x)⁻² × (−sin x) = sin x / cos² x = sec x tan x
cosec x = (sin x)⁻¹: d/dx = −(sin x)⁻² × cos x = −cosec x cot x
cot x = cos x / sin x: d/dx = [−sin x · sin x − cos x · cos x] / sin² x
                            = −1/sin² x = −cosec² x
```

| f(x) | f′(x) |
|---|---|
| sec x | sec x tan x |
| cosec x | −cosec x cot x |
| cot x | −cosec² x |

With a linear inside, the chain rule gives, for example, d/dx(sec 3x) = 3 sec 3x tan 3x.

**Worked example 6.** Find the gradient of y = cosec 2x at x = π/6.

```
dy/dx = −2 cosec 2x cot 2x
At x = π/6, 2x = π/3: cosec(π/3) = 2/√3, cot(π/3) = 1/√3
dy/dx = −2 × (2/√3) × (1/√3) = −4/3
```

## 4.3 Differentiating when x is given in terms of y

Since dy/dx and dx/dy are reciprocals, **dy/dx = 1 / (dx/dy)**. Use it when x = g(y) is easy to differentiate but cannot be rearranged neatly for y.

**Worked example 7.** Given x = tan 2y, find dy/dx (a) in terms of y, (b) in terms of x.

```
(a) dx/dy = 2 sec² 2y, so dy/dx = 1 / (2 sec² 2y) = ½ cos² 2y
(b) sec² 2y = 1 + tan² 2y = 1 + x²
    dy/dx = 1 / (2(1 + x²))
```

**Worked example 8.** Given x = y e^y, find dy/dx when y = 1.

```
dx/dy = e^y + y e^y = e^y (1 + y)      (product rule)
At y = 1: dx/dy = 2e, so dy/dx = 1/(2e)
```

The same idea proves that d/dx(ln x) = 1/x: if y = ln x then x = e^y, dx/dy = e^y = x, so dy/dx = 1/x.

## 4.4 Exponential models and a^x

### The derivative of a^x

Write a^x = e^(x ln a), because e^(x ln a) = (e^(ln a))^x = a^x. The chain rule gives

**d/dx(a^x) = a^x ln a**, for a > 0.

For y = 5^x the gradient at x = 2 is 25 ln 5.

### Growth and decay

A quantity that grows or decays by a constant proportion in equal times can be modelled as N = A e^(kt). Then dN/dt = kN, so the rate of change is proportional to the amount present. Growth has k > 0 and decay has k < 0. The word "initial" means t = 0, which gives N = A.

**Worked example 9.** The mass of a drug in the body is M = 80e^(−0.15t) mg, t in hours.

```
Initial mass: t = 0 gives 80 mg
Rate at t = 4: dM/dt = −0.15 × 80e^(−0.15t) = −12e^(−0.6) = −6.59 mg per hour (3 s.f.)
Half-life: 40 = 80e^(−0.15t) → e^(−0.15t) = ½ → t = ln 2 / 0.15 = 4.62 hours (3 s.f.)
```

The negative sign means the mass is falling.

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


### Evaluating and refining a model

Check what the model predicts for large t and ask whether that is sensible. A growth model N = 120e^(0.4t) for bacteria gives about 6550 at t = 10 but about 19.5 million at t = 30, which no culture in a dish could reach. An improved model might level off:

N = 2000 − 1880e^(−0.25t)

```
t = 0:   N = 2000 − 1880 = 120      (matches the first model at the start)
t → ∞:   e^(−0.25t) → 0, so N → 2000   (a limiting value)
dN/dt = 470e^(−0.25t), which is positive but decreasing
t = 10:  N = 2000 − 1880e^(−2.5) = 1845.7, so about 1850
```

If a count of 1850 were observed at t = 10, the second model fits much better than the first. Say this in words: compare the prediction with the data, and comment on the range of values the model allows.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--01-inverse-graphs.webp" width="900" height="900" alt="The orange curve y = e^x passes through (0, 1) and (1, e) and approaches the x-axis. The blue curve y = ln x passes through (1, 0) and (e, 1) and approaches the y-axis. They are mirror images in the dashed line y = x, so the functions are inverses." loading="lazy">
  <figcaption>The graph of ln x is the reflection of eˣ in y = x.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--07-linear-form.webp" width="900" height="1110" alt="ln y against ln x is a straight line for y = ax^n: through (0.5, 1.85) and (2.5, 4.85), gradient n = 1.5 and intercept ln a = 1.10. lg y against x is a straight line for y = kb^x with intercept lg k = 0.70 and gradient lg b = 0.14." loading="lazy">
  <figcaption>A straight line on log axes gives gradient and intercept for power and exponential laws.</figcaption>
</figure>


## Common errors

- Writing d/dx(cos kx) = k sin kx. The sign is negative: −k sin kx.
- Forgetting the inside derivative in a chain rule, for example writing d/dx(sin² 3x) = 2 sin 3x.
- Writing d/dx(ln kx) = k/x or 1/(kx).
- Swapping the numerator terms in the quotient rule.
- Treating a^x like a power rule: d/dx(a^x) is not x a^(x−1).
- Reporting dy/dx as dx/dy when x = g(y) is given.
- Working in degrees. The derivative results above assume radians.
- Not stating what a negative rate of change means in a model.

## Next steps

Rebuild each derivative from memory, then test yourself with the [revision notes](/resources/edexcel-ial-mathematics-differentiation-of-exponential-logarithmic-and-revision-notes/) and try the [practice questions](/resources/edexcel-ial-mathematics-differentiation-of-exponential-logarithmic-and-practice/).

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification Issue 3, April 2019, published by Pearson Education Limited. Unit P3 section 4, topics 4.1 to 4.4.
