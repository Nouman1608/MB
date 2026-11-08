---
title: "Pearson Edexcel International Advanced Level Mathematics: Product, quotient and chain rules (YMA01) -- Revision Notes"
seoTitle: "Edexcel IAL Maths P3 Differentiation Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes for Edexcel International Advanced Level Maths P3 section 4: standard derivatives, three rules, dy/dx = 1/(dx/dy), a^x and models."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes are aligned to the Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics specification (Issue 3, April 2019). They cover Unit P3: Pure Mathematics 3, section 4 (Differentiation, 4.1 to 4.4). The specification states that P3 is compulsory for IAL Mathematics and Pure Mathematics and has no IAS weighting.

For full explanations and worked examples, read the [study guide](/resources/edexcel-ial-mathematics-differentiation-of-exponential-logarithmic-and/). When you are ready to practise, use the [practice questions](/resources/edexcel-ial-mathematics-differentiation-of-exponential-logarithmic-and-practice/). The [Edexcel A Level Mathematics hub](/boards/edexcel/a-level/mathematics/) and the [printable checklist](/checklists/edexcel/a-level/mathematics/) show the rest of the course, and the [free 10-minute diagnostics](/diagnostics/) show which topics need work first. Related earlier work is in [differentiating powers of x](/resources/edexcel-ial-mathematics-differentiating-and-integrating-powers-of-x-gradients-revision-notes/).

## 4.1 Standard derivatives (radians)

| f(x) | f′(x) |
|---|---|
| e^kx | k e^kx |
| ln kx | 1/x |
| sin kx | k cos kx |
| cos kx | −k sin kx |
| tan kx | k sec² kx |
| sec x | sec x tan x |
| cosec x | −cosec x cot x |
| cot x | −cosec² x |
| a^x | a^x ln a |

Differentiate sums and differences term by term. Constant multipliers stay.

**Reminder.** f(x) = 5e^(2x) − 3 sin 4x + 2 ln 3x gives f′(x) = 10e^(2x) − 12 cos 4x + 2/x.

## 4.2 The three rules

| Rule | Use when | Formula |
|---|---|---|
| Product | two functions multiplied | y = uv, dy/dx = u′v + uv′ |
| Quotient | one function divided by another | y = u/v, dy/dx = (v u′ − u v′) / v² |
| Chain | function of a function | dy/dx = dy/du × du/dx |

### Method in steps

1. Decide the outermost operation: sum, product, quotient or composition.
2. Name u and v (or the inner function) and write their derivatives separately.
3. Substitute into the rule, using brackets.
4. Factorise common factors, especially e^kx, which is never zero.
5. Check that every chain-rule factor has been included.

### Quick chain rule patterns

| y | dy/dx |
|---|---|
| (f(x))ⁿ | n (f(x))ⁿ⁻¹ f′(x) |
| e^f(x) | f′(x) e^f(x) |
| ln f(x) | f′(x) / f(x) |
| sin f(x) | f′(x) cos f(x) |
| cos f(x) | −f′(x) sin f(x) |
| tan f(x) | f′(x) sec² f(x) |

**Reminders.**

```
y = x² cos 3x:  dy/dx = 2x cos 3x − 3x² sin 3x
y = (2x + 1)/e^x:  dy/dx = [2e^x − (2x + 1)e^x] / e^(2x) = (1 − 2x)/e^x
y = ln(cos x):  dy/dx = −sin x / cos x = −tan x
y = sec 3x:  dy/dx = 3 sec 3x tan 3x
y = tan² 2x:  dy/dx = 2 tan 2x × 2 sec² 2x = 4 tan 2x sec² 2x
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--04-log-ruler-laws.webp" width="900" height="940" alt="A log ruler marks 1 to 10 at their base-10 logs. Bars of length lg 2 and lg 3 end at 6, so lg 2 + lg 3 = lg 6. A bar lg 8 minus lg 2 has length lg 4. Two bars of lg 3 end at 9, so 2 lg 3 = lg 9." loading="lazy">
  <figcaption>Logarithms turn products into sums: lengths on a log ruler add.</figcaption>
</figure>


## 4.3 Inverse relationship

**dy/dx = 1 / (dx/dy)**

1. Differentiate x with respect to y.
2. Take the reciprocal.
3. If asked for dy/dx in terms of x, rewrite the y-terms using x. A common route is 1 + tan² θ = sec² θ.

**Reminder.** x = y³ + 2y: dx/dy = 3y² + 2, so dy/dx = 1/(3y² + 2).

**Reminder.** x = tan 2y: dy/dx = 1/(2 sec² 2y) = 1/(2(1 + x²)).

## 4.4 Exponential models and a^x

- N = A e^(kt): A is the initial value (t = 0). k > 0 is growth and k < 0 is decay.
- dN/dt = kN: the rate is proportional to N.
- Half-life or doubling time: solve N = ½A or N = 2A, giving t = ln 2 / |k|.
- d/dx(a^x) = a^x ln a. For a^(kx), the chain rule gives k a^(kx) ln a.
- Large t: an exponential growth model grows without limit, and a decay model tends to zero. A model of the form N = P − Q e^(−kt) tends to the limit P.
- Evaluate a model by substituting a time and comparing with data. Refine it by changing the form so that it behaves sensibly for large t.

**Reminder.** For N = 300e^(−0.05t): initial value 300, rate at t = 0 is −15, half-life = ln 2 / 0.05 = 13.9 (3 s.f.).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--01-inverse-graphs.webp" width="900" height="900" alt="The orange curve y = e^x passes through (0, 1) and (1, e) and approaches the x-axis. The blue curve y = ln x passes through (1, 0) and (e, 1) and approaches the y-axis. They are mirror images in the dashed line y = x, so the functions are inverses." loading="lazy">
  <figcaption>The graph of ln x is the reflection of eˣ in y = x.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--07-linear-form.webp" width="900" height="1110" alt="ln y against ln x is a straight line for y = ax^n: through (0.5, 1.85) and (2.5, 4.85), gradient n = 1.5 and intercept ln a = 1.10. lg y against x is a straight line for y = kb^x with intercept lg k = 0.70 and gradient lg b = 0.14." loading="lazy">
  <figcaption>A straight line on log axes gives gradient and intercept for power and exponential laws.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--09-decay-half-life.webp" width="900" height="1020" alt="C = 15e^(-0.2t) falls from 15 mg/L. It halves to 7.5 after 3.47 hours and to 3.75 after another 3.47 hours, so the half-life is constant (ln 2 divided by k). It reaches 2 mg/L at t = 10.1 hours." loading="lazy">
  <figcaption>Exponential decay has a constant half-life of ln 2 ÷ k.</figcaption>
</figure>


## Rebuilding results you forget

- tan x = sin x / cos x. The quotient rule gives (cos² x + sin² x) / cos² x = sec² x.
- sec x = (cos x)⁻¹. The chain rule gives sin x / cos² x = sec x tan x.
- cosec x = (sin x)⁻¹. The chain rule gives −cos x / sin² x = −cosec x cot x.
- cot x = cos x / sin x. The quotient rule gives −1 / sin² x = −cosec² x.
- ln x: put y = ln x, so x = e^y. Then dx/dy = e^y = x and dy/dx = 1/x.
- a^x = e^(x ln a), so the chain rule gives a^x ln a.

**Worked reminder (quotient, with simplification).** Differentiate y = sin x / (1 + cos x).

```
u = sin x, u′ = cos x;  v = 1 + cos x, v′ = −sin x
dy/dx = [cos x (1 + cos x) + sin x sin x] / (1 + cos x)²
      = [cos x + cos² x + sin² x] / (1 + cos x)²
      = (cos x + 1) / (1 + cos x)²  =  1 / (1 + cos x)
```

Show the use of sin² x + cos² x = 1 explicitly, so that a reader can follow the simplification.

## Tangents, normals and stationary points

1. Differentiate to get dy/dx.
2. Substitute the x-value to get the gradient m. Substitute again into y to get the point.
3. Tangent: y − y₁ = m(x − x₁). Normal: gradient −1/m.
4. For stationary points, solve dy/dx = 0 after factorising.

**Worked reminder.** The curve y = x² ln x meets the line x = e at (e, e²).

```
dy/dx = 2x ln x + x  (product rule)
At x = e: gradient = 2e + e = 3e
Tangent: y − e² = 3e(x − e), so y = 3e x − 2e²
Normal:  y − e² = −(1/(3e))(x − e)
```

**Worked reminder.** Stationary points of y = x² e^(−2x):

```
dy/dx = 2x e^(−2x) − 2x² e^(−2x) = 2x(1 − x) e^(−2x)
dy/dx = 0 at x = 0 and x = 1, giving (0, 0) and (1, e^(−2))
```

**Worked reminder (a model).** A town's population is P = 5000e^(0.04t), with t in years.

```
Rate at t = 10: dP/dt = 0.04 × 5000e^(0.4) = 200e^(0.4) = 298 people per year (3 s.f.)
Doubling time: e^(0.04t) = 2, so t = ln 2 / 0.04 = 17.3 years (3 s.f.)
```

After 10 years the model gives P = 7459, so about 7460 people. A comment on validity: unlimited growth is unrealistic over a long period, so a refined model might add an upper limit.

## Checking your answer

- Test a derivative at an easy value. For y = x³ sin 2x, the derivative x²(3 sin 2x + 2x cos 2x) should give 0 at x = 0, which you can confirm by substituting.
- Check signs. A decay model must have a negative rate of change.
- Check the structure. Every term in a chain rule answer should carry one factor for each layer of the function.
- In a model question, finish with a sentence that answers the context, with units, rather than a bare number.

## Must-know distinctions

- ln kx differentiates to 1/x, but e^kx differentiates to k e^kx.
- sin kx and tan kx give positive multipliers. cos kx gives a negative one.
- d/dx(sin² x) = 2 sin x cos x uses the chain rule. The expression sin x² means sin(x²), so its derivative is 2x cos x².
- Product rule is for multiplying. Chain rule is for composing. Some questions need both.
- dy/dx and dx/dy are reciprocals, but only at the same point.

## Quick self-test

1. Differentiate e^(5x).
2. Differentiate ln 7x.
3. Differentiate sin(x/2).
4. Differentiate x e^(2x).
5. Differentiate (sin x)/x.
6. Differentiate cos(x²).
7. Differentiate tan² x.
8. Given x = y³ + 2y, find dy/dx in terms of y.
9. Differentiate 2^x.
10. N = 300e^(−0.05t). Find the initial value and the half-life to 3 s.f.

### Answers

1. 5e^(5x)
2. 1/x
3. ½ cos(x/2)
4. (2x + 1)e^(2x)
5. (x cos x − sin x) / x²
6. −2x sin(x²)
7. 2 tan x sec² x
8. 1/(3y² + 2)
9. 2^x ln 2
10. 300; half-life = ln 2 / 0.05 = **13.9**

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials--08-ln-calculus.webp" width="900" height="1050" alt="The tangent to y = ln x at x = 2 has gradient one half, equal to 1/x. Below, the area under y = 1/x from 1 to e is shaded and equals 1, because the integral is ln x and ln e minus ln 1 is 1." loading="lazy">
  <figcaption>ln x differentiates to 1/x and the area under 1/x from 1 to e is 1.</figcaption>
</figure>


## Where marks are usually lost

- Using the wrong sign for the derivative of cos kx, or of cot x and cosec x.
- Forgetting to multiply by the derivative of the bracket, or of the angle, in a composite function.
- Mixing up the order of terms in the quotient rule numerator.
- Writing 1/(kx) or k/x for the derivative of ln kx.
- Differentiating a^x as x a^(x−1).
- Giving dx/dy when dy/dx is asked for, or not simplifying when the answer is wanted in terms of x.
- Using degrees for a trigonometric derivative or a gradient calculation.
- Giving a rate of change without its sign or units.
- Not commenting on a model's behaviour for large t when asked to evaluate it.

## Frequently asked questions

**How do you differentiate a to the power x?**
Use d/dx(aˣ) = aˣ ln a. For a^(kx), the chain rule gives k a^(kx) ln a. Treating aˣ as a power of x is wrong.

**What does dN/dt = kN mean in an exponential model?**
It means the rate of change is proportional to the size of the quantity. For N = Ae^(kt), A is the initial value and k > 0 means growth while k < 0 means decay.

**How do you find a half-life from an exponential model?**
Solve N = ½A for an exponential decay model N = Ae^(kt), which gives t = ln 2 / |k|.

**Should trigonometric derivatives be worked in degrees or radians?**
In radians. The standard derivative results only hold when angles are in radians.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification Issue 3, April 2019, published by Pearson Education Limited. Unit P3 section 4, topics 4.1 to 4.4.
