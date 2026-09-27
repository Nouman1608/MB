---
title: "IB DP Mathematics: Applications and Interpretation -- Composite and inverse functions, transformations, further models and logarithmic scales (HL) Study Guide"
seoTitle: "IB Maths AI HL Functions, Transformations & Models Guide"
resourceType: "study-guides"
subject: "mathematics-applications-and-interpretation"
level: ["ib"]
topic: "Composite and inverse functions, transformations, further models and logarithmic scales (HL)"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Applications and Interpretation"]
syllabusSeries: "First assessments for SL and HL—2021"
order: 2.7
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-functions"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-2-7"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-functions"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-2-8"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-functions"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-2-9"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-functions"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-2-10"
description: "Study guide for IB Maths AI HL sections 2.7-2.10: composite and inverse functions, transformations, further models and log scales, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-09-27
featured: false
---

This study guide covers the HL-only functions content of IB Diploma Programme Mathematics: Applications and Interpretation, aligned to the IB *Mathematics: applications and interpretation guide*, first assessment 2021. It teaches syllabus sections AHL 2.7–2.10: composite and inverse functions, transformations of graphs, further modelling functions, and logarithmic scales and linearizing data. All of this content is HL only. It follows the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so it applies to the May and November 2026, 2027 and 2028 sessions.

For the full course, see the [Maths AI course hub](/boards/ib/ib-dp/mathematics-applications-and-interpretation/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-applications-and-interpretation/). When you have worked through this guide, test your recall with the [revision notes](/resources/ib-dp-mathematics-ai-hl-further-functions-modelling-revision-notes/) and then the [practice questions](/resources/ib-dp-mathematics-ai-hl-further-functions-modelling-practice/).

## What this unit covers

| Syllabus section | What you must be able to do | SL/HL |
|---|---|---|
| AHL 2.7 | Form composite functions (f ∘ g)(x) = f(g(x)) in context; find an inverse function f⁻¹, restricting the domain where needed | HL only |
| AHL 2.8 | Apply translations, reflections, vertical and horizontal stretches, and composite transformations, in the correct order | HL only |
| AHL 2.9 | Model with half-life, f(x) = a + b ln x, f(x) = a sin(b(x − c)) + d, logistic and piecewise functions | HL only |
| AHL 2.10 | Use logarithms to scale data; linearize data to decide between an exponential and a power model; interpret log-log and semi-log graphs | HL only |

All three HL papers require technology, so you have your GDC throughout. Finding an inverse, describing a transformation and fitting parameters still need written working.

## AHL 2.7 Composite and inverse functions

### Composite functions

The notation (f ∘ g)(x) = f(g(x)) means "apply g first, then f". The function written nearest the x acts first.

In context, the output of the first process must make sense as the input of the second.

**Worked example.** A kiosk converts US dollars to euros with c(d) = 0.92d. It then charges a fee, so you receive k(e) = 0.98e − 2 euros.

```
(k ∘ c)(d) = k(0.92d)
           = 0.98(0.92d) − 2
           = 0.9016d − 2
(k ∘ c)(500) = 0.9016 × 500 − 2 = 448.8
```

So you receive **€448.80** for $500. Note that (c ∘ k) would make no sense here: k expects euros, not dollars.

### Inverse functions

An inverse function f⁻¹ undoes f. The guide gives the key identity:

(f ∘ f⁻¹)(x) = (f⁻¹ ∘ f)(x) = x

An inverse exists only for a one-to-one function. The domain of f⁻¹ is the range of f, and the range of f⁻¹ is the domain of f. The graph of y = f⁻¹(x) is the reflection of y = f(x) in the line y = x.

**Method for finding f⁻¹(x):**

1. Write y = f(x).
2. Rearrange to make x the subject.
3. Swap x and y (or rename), and state the domain of f⁻¹.

**Worked example (context).** Temperature in Fahrenheit is F(C) = 1.8C + 32. Then y = 1.8x + 32 gives x = (y − 32)/1.8, so F⁻¹(x) = (x − 32)/1.8. F⁻¹(77) = 45/1.8 = **25**, so 77 °F is 25 °C.

### Domain restriction

A many-to-one function, such as a quadratic, has no inverse on its full domain. You restrict the domain to one side of the vertex so that the function becomes one-to-one.

**Worked example.** f(x) = (x − 2)² + 1 has its vertex at (2, 1). Restrict to x ≥ 2.

```
y = (x − 2)² + 1
y − 1 = (x − 2)²
x − 2 = +√(y − 1)     (positive root because x ≥ 2)
f⁻¹(x) = 2 + √(x − 1),   x ≥ 1
```

The range of f is f(x) ≥ 1, so the domain of f⁻¹ is x ≥ 1. The range of f⁻¹ is f⁻¹(x) ≥ 2. Check: f(f⁻¹(5)) = f(4) = 2² + 1 = 5. If you had restricted to x ≤ 2 instead, you would take the negative root: f⁻¹(x) = 2 − √(x − 1).

## AHL 2.8 Transformations of graphs

You must be able to apply these to any function in the topic, and to others met in modelling contexts.

| Equation | Transformation |
|---|---|
| y = f(x) + b | Vertical translation by b |
| y = f(x − a) | Horizontal translation by a (to the right if a > 0) |
| y = −f(x) | Reflection in the x-axis |
| y = f(−x) | Reflection in the y-axis |
| y = p f(x) | Vertical stretch, scale factor p (the x-axis is invariant) |
| y = f(qx) | Horizontal stretch, scale factor 1/q (the y-axis is invariant) |

A translation can be given as a vector. The vector with top entry 3 and bottom entry −2 means 3 units right and 2 units down.

The two traps: f(x − a) moves the graph right, not left, and f(qx) stretches by 1/q, not q.

### Following a single point

To find the image of a point (x, y), undo the change inside the bracket for x, and apply the change outside for y.

**Worked example.** (4, 6) lies on y = f(x).

- On y = 3f(x + 2) − 1: x becomes 4 − 2 = 2, y becomes 3 × 6 − 1 = 17. Image **(2, 17)**.
- On y = f(2x): x becomes 4/2 = 2, y stays 6. Image **(2, 6)**.

### Order matters

Start with y = f(x).

- Vertical stretch scale factor 2, then translate up 3: y = 2f(x) + 3.
- Translate up 3, then vertical stretch scale factor 2: y = 2(f(x) + 3) = 2f(x) + 6.

Different results. When you describe a composite transformation, give the steps in an order that produces the given equation.

## AHL 2.9 Further modelling

This section extends the SL models (linear, quadratic, exponential, direct and inverse variation, cubic, sinusoidal in degrees) with five more. You use the SL 2.6 modelling skills throughout: choose a model, find its parameters, give a sensible domain, and comment on how reasonable it is.

### Exponential models and half-life

The half-life is the time for a quantity to halve. For A(t) = A₀e^(−kt), setting A = A₀/2 gives e^(−kt) = 1/2, so

k = (ln 2)/(half-life)

**Worked example.** 80 mg of a substance has a half-life of 5.2 years. Then k = ln 2/5.2 = 0.1333 (4 s.f.). After 12 years:

A(12) = 80e^(−0.1333 × 12) = **16.2 mg** (3 s.f.)

You can also write A(t) = 80(0.5)^(t/5.2), which gives the same value.

### Natural logarithmic models: f(x) = a + b ln x

These grow ever more slowly with no upper limit. Two known points give a and b.

**Worked example.** A plant's height is h(t) = a + b ln t cm, t weeks after planting, with h(2) = 10 and h(8) = 16.

```
a + b ln 8 − (a + b ln 2) = 16 − 10
b ln 4 = 6        →  b = 6/ln 4 = 4.33 (3 s.f.)
a = 10 − b ln 2 = 10 − 3 = 7
h(20) = 7 + 4.328… × ln 20 = 20.0 cm (3 s.f.)
```

Keep b unrounded in your GDC for the last line.

### Sinusoidal models in radians: f(x) = a sin(b(x − c)) + d

At HL, radians are assumed unless you see a degree symbol.

- Amplitude |a| = (max − min)/2
- Principal axis y = d, where d = (max + min)/2
- Period = 2π/b
- c is the horizontal translation, also called the phase shift

**Worked example.** Harbour depth D(t) m, t hours after midnight, has a maximum of 8.4 m at t = 5 and a minimum of 2.0 m. The period is 12.4 hours.

```
a = (8.4 − 2.0)/2 = 3.2        d = (8.4 + 2.0)/2 = 5.2
b = 2π/12.4 = 0.507 (3 s.f.)
Maximum when b(t − c) = π/2:  5 − c = (π/2)/b = 3.1  →  c = 1.9
D(t) = 3.2 sin(0.507(t − 1.9)) + 5.2
```

Using a GDC, D(t) = 7 at t = 3.08 and t = 6.92, so the depth is above 7 m for **3.84 hours** in that cycle.

### Logistic models: f(x) = L/(1 + Ce^(−kx)), with L, C, k > 0

Use a logistic model when growth is restricted, such as a population on an island. The horizontal asymptote y = L is the carrying capacity.

**Worked example.** P(t) = 2400/(1 + Ce^(−kt)), with P(0) = 150 and P(4) = 600.

```
P(0): 2400/(1 + C) = 150  →  C = 15
P(4): 1 + 15e^(−4k) = 4   →  e^(−4k) = 0.2  →  k = (ln 5)/4 = 0.402 (3 s.f.)
P = 2000: 1 + 15e^(−kt) = 1.2  →  e^(−kt) = 1/75  →  t = (ln 75)/k = 10.7
```

The population reaches 2000 after about **10.7 years**. It never exceeds 2400.

### Piecewise models

A piecewise model uses different rules on different parts of the domain. You may need to choose a parameter so the pieces join (continuity). Set the two rules equal at the boundary.

**Worked example.** A hire cost is C(d) = 4 + 1.5d for 0 ≤ d < 10 and C(d) = 1.2d + k for d ≥ 10.

At d = 10: 4 + 15 = 12 + k, so **k = 7**. Then C(14) = 1.2 × 14 + 7 = 23.8.

In the exam you may also be given an unfamiliar model in the question. Read its definition carefully and use it as instructed.

## AHL 2.10 Logarithmic scales and linearizing data

### Scaling with logarithms

When data range over many orders of magnitude, plot log₁₀ of the values. For example, 0.001 and 1 000 000 become −3 and 6. Equal steps on a log scale mean equal multiplying factors, so the graph shows the rate of growth rather than absolute size.

### Linearizing

Take logs of both sides of each model (laws of logarithms, AHL 1.9):

| Model | Linear form | Plot | Gradient | Intercept |
|---|---|---|---|---|
| Exponential y = ka^x | ln y = ln k + x ln a | ln y against x (semi-log) | ln a | ln k |
| Power y = ax^b | ln y = ln a + b ln x | ln y against ln x (log-log) | b | ln a |

The same works with log₁₀. To decide which model fits, compute Pearson's r for both linearized data sets. The one closer to ±1 is the better fit.

**Worked example.** Data:

| x | 1 | 2 | 4 | 6 | 8 | 10 |
|---|---|---|---|---|---|---|
| y | 2.6 | 7.1 | 20.3 | 36.8 | 57.2 | 79.4 |

On a GDC, for ln y against x, r = 0.957. For ln y against ln x, r = 0.99997. The power model is better.

Linear regression of ln y on ln x gives ln y = 1.49 ln x + 0.944 (3 s.f.). So b = 1.49 and a = e^0.944 = 2.57, giving **y = 2.57x^1.49**. At x = 5 this predicts y = 28.2.

### Reading log graphs

You will not be asked to draw these graphs, but you must interpret them. If a graph of log₁₀ y against x is a straight line through (0, 1.3) and (5, 2.8), the gradient is 0.3. So log₁₀ y = 0.3x + 1.3, and

y = 10^1.3 × (10^0.3)^x = 20.0 × 2.00^x (3 s.f.)

A straight line on a semi-log graph means exponential; a straight line on a log-log graph means power.

## Common errors

- Writing (f ∘ g)(x) as g(f(x)). The inner function acts first.
- Giving an inverse without its domain, or taking ± when the restricted domain fixes the sign.
- Leaving your GDC in degrees for a radian sinusoidal model.
- Rounding k or b early and carrying the error into a final answer.
- Reporting the gradient of a log-log line as a, not b.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: applications and interpretation guide*, first assessment 2021. Sections AHL 2.7, 2.8, 2.9 and 2.10. Related pages: [syllabus guide](/resources/ib-dp-mathematics-applications-and-interpretation-syllabus-guide/), [subject guide](/resources/ib-dp-mathematics-applications-and-interpretation-subject-guide/), [exam preparation](/resources/ib-dp-mathematics-applications-and-interpretation-exam-preparation/), [statistics and probability](/resources/ib-dp-mathematics-ai-statistics-probability/) and [geometry and trigonometry](/resources/ib-dp-mathematics-ai-geometry-trigonometry/).
