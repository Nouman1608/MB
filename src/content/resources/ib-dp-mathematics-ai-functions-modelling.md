---
title: "IB DP Mathematics: Applications and Interpretation -- Functions and modelling Study Guide"
seoTitle: "IB Maths AI Functions and Modelling Study Guide (SL/HL)"
resourceType: "study-guides"
subject: "mathematics-applications-and-interpretation"
level: ["ib"]
topic: "Functions and modelling"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Applications and Interpretation"]
syllabusSeries: "First assessments for SL and HL—2021"
order: 2.1
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-functions"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-2-1"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-functions"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-2-2"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-functions"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-2-3"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-functions"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-2-4"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-functions"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-2-5"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-functions"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-2-6"
description: "Study guide for IB Maths AI functions and modelling: straight lines, functions and inverses, graphs, the six SL models and fitting them."
author: "marlbridge-academic-team"
publishedDate: 2026-09-27
featured: false
---

This study guide teaches the functions and modelling unit of IB DP Mathematics: applications and interpretation. It is aligned to the IB *Mathematics: applications and interpretation guide*, first assessment 2021, and covers syllabus sections SL 2.1–2.6. This is common content for SL and HL. It follows the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so it applies to the May and November 2026, 2027 and 2028 sessions.

For the whole course, see the [IB Maths AI course hub](/boards/ib/ib-dp/mathematics-applications-and-interpretation/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-applications-and-interpretation/). When you have worked through this page, use the [revision notes](/resources/ib-dp-mathematics-ai-functions-modelling-revision-notes/) and then the [practice questions](/resources/ib-dp-mathematics-ai-functions-modelling-practice/).

## What this unit covers

| Syllabus section | What you must be able to do | SL/HL |
|---|---|---|
| 2.1 | Use y = mx + c, ax + by + d = 0 and y − y₁ = m(x − x₁); find gradients and intercepts; use m₁ = m₂ (parallel) and m₁ × m₂ = −1 (perpendicular) | SL and HL |
| 2.2 | Use function notation; find domain and range; treat a function as a model; understand f⁻¹ as the function that undoes f | SL and HL |
| 2.3 | Draw or sketch graphs from an equation, information or a context; graph sums and differences with technology | SL and HL |
| 2.4 | Find key features with technology: maxima, minima, intercepts, symmetry, vertex, zeros, asymptotes; find intersections | SL and HL |
| 2.5 | Model with linear (including piecewise), quadratic, exponential, direct/inverse variation, cubic and sinusoidal functions | SL and HL |
| 2.6 | Choose, fit, test and use a model; state a sensible domain; know the dangers of extrapolation | SL and HL |

Every paper (two at SL, three at HL) requires a graphic display calculator (GDC). The guide asks for technology "rather than using elaborate analytical techniques". Set up the equation by hand, let the GDC solve it, and write down what you entered.

## 2.1 Straight lines

The three forms you must use:

- **Gradient-intercept form:** y = mx + c, where m is the gradient and c the y-intercept.
- **General form:** ax + by + d = 0.
- **Point-gradient form:** y − y₁ = m(x − x₁).

Gradient between two points: m = (y₂ − y₁)/(x₂ − x₁). Parallel lines have m₁ = m₂. Perpendicular lines have m₁ × m₂ = −1, so the perpendicular gradient is the negative reciprocal.

**Worked example.** A is (2, 5) and B is (6, −3). Find the line AB, then the line through B perpendicular to AB.

```
m = (−3 − 5)/(6 − 2) = −8/4 = −2
y − 5 = −2(x − 2)
y = −2x + 9            (general form: 2x + y − 9 = 0)

Perpendicular gradient = 1/2
y + 3 = (1/2)(x − 6)
y = 0.5x − 6           (general form: x − 2y − 12 = 0)
```

Gradient in context is rise ÷ horizontal run. An access ramp that rises 0.5 m over a horizontal distance of 6 m has gradient 0.5/6 = 0.0833 (3 s.f.), about 1 in 12.

## 2.2 Functions, domain, range and inverses

A **function** gives exactly one output for each input. Notation such as f(x), v(t) or C(n) names the input variable. The **domain** is the set of allowed inputs. The **range** is the set of outputs. Unless told otherwise, take the largest domain for which the function is defined. A graph is the easiest way to see the range.

Example: f(x) = 3 + √(x − 1). You need x − 1 ≥ 0, so the domain is x ≥ 1. The smallest output is f(1) = 3, so the range is f(x) ≥ 3.

In a model, the domain is also limited by the context. A cost function C(n) for n tickets only makes sense for whole numbers n ≥ 0.

**Inverse functions.** The inverse f⁻¹ reverses the effect of f. Its graph is the reflection of y = f(x) in the line y = x. An inverse exists only for a one-to-one function. The domain of f⁻¹ is the range of f.

Solving f(x) = k is the same as finding f⁻¹(k). If g(x) = 2x + 5, then g⁻¹(17) is the x with 2x + 5 = 17, so g⁻¹(17) = 6.

**Worked example.** Temperature conversion: F(C) = 1.8C + 32. Find the inverse and use it for 77 °F.

```
y = 1.8x + 32
Swap and rearrange: x = (y − 32)/1.8
F⁻¹(x) = (x − 32)/1.8
F⁻¹(77) = (77 − 32)/1.8 = 25    → 77 °F is 25 °C
```

## 2.3 Drawing and sketching graphs

The guide expects you to know the difference between the command terms:

- **Sketch:** show the general shape and the key features (intercepts, turning points, asymptotes) in roughly the right places.
- **Draw:** plot accurately, to scale, usually on given axes.

In both, label the axes and label every key feature with its coordinates or equation. When you copy a graph from your GDC screen to paper, match the viewing window you used and mark the window values on your axes.

You may be asked to graph functions not named in the syllabus. The method is the same.

**Sums and differences.** Your GDC can graph y = f(x) + g(x) or y = f(x) − g(x) directly. A common use is profit = revenue − cost.

**Worked example.** Revenue R(x) = 30x − 0.1x² and cost C(x) = 200 + 4x, for x items. Find the profit function and the break-even points.

```
P(x) = R(x) − C(x) = −0.1x² + 26x − 200
GDC zeros of P: x = 7.93 and x = 252 (3 s.f.)
GDC maximum:    (130, 1490)
```

The business makes a profit for 8 ≤ x ≤ 252 items (x is a whole number), and the maximum profit is 1490 at 130 items.

## 2.4 Key features and intersections

With technology you must find:

- **maximum and minimum values** (local and on a given domain);
- **intercepts** with both axes;
- **symmetry** (for example the axis of symmetry of a parabola);
- the **vertex** of a quadratic;
- **zeros** of a function, which are the **roots** of f(x) = 0;
- **vertical and horizontal asymptotes**.

**Worked example.** f(x) = (2x + 1)/(x − 3).

```
Vertical asymptote:   x = 3      (denominator is zero)
Horizontal asymptote: y = 2      (graph levels off at 2 for large |x|)
y-intercept:          f(0) = 1/(−3) → (0, −1/3)
Zero:                 2x + 1 = 0  → (−0.5, 0)
```

Confirm each asymptote by tracing the graph on the GDC. Write asymptotes as equations, not as numbers.

**Intersections.** To solve f(x) = g(x), graph both and use the intersect tool. For y = 2ˣ and y = x + 3 the GDC gives (−2.86, 0.137) and (2.44, 5.44). Write down both functions you entered.

## 2.5 The six modelling functions

| Model | Form in the guide | Features to know |
|---|---|---|
| Linear | f(x) = mx + c | constant rate of change m; piecewise linear models |
| Quadratic | f(x) = ax² + bx + c, a ≠ 0 | axis of symmetry, vertex, zeros, x- and y-intercepts |
| Exponential | f(x) = kaˣ + c, f(x) = ka⁻ˣ + c (a > 0), f(x) = keʳˣ + c | horizontal asymptote y = c |
| Direct/inverse variation | f(x) = axⁿ, n ∈ ℤ | y-axis is a vertical asymptote when n < 0 |
| Cubic | f(x) = ax³ + bx² + cx + d | turning points, zeros |
| Sinusoidal | f(x) = a sin(bx) + d, f(x) = a cos(bx) + d | amplitude a, period 360°/b, principal axis y = d |

**Linear and piecewise linear.** A mobile plan costs 15 for up to 300 minutes, then 0.05 per extra minute. For 420 minutes the cost is 15 + 0.05 × 120 = 21. Each piece has its own domain.

**Quadratic.** A ball thrown upwards has height h(t) = −4.9t² + 14.7t + 1.5 metres after t seconds. The vertex is at t = −14.7/(2 × −4.9) = 1.5, so the maximum height is h(1.5) = 12.5 m (3 s.f.). The positive zero from the GDC is t = 3.10 s, when the ball lands.

**Exponential.** A drink cools as T(t) = 70e^(−0.05t) + 20 °C after t minutes.

```
T(0) = 70 + 20 = 90 °C            (initial temperature)
Horizontal asymptote: T = 20      (room temperature)
T(t) = 50: 70e^(−0.05t) = 30
t = ln(70/30)/0.05 = 16.9 minutes (3 s.f.)
```

**Direct and inverse variation.** Light intensity I = k/d² = kd⁻². If I = 45 when d = 2, then k = 180 and I(6) = 180/36 = 5. The y-axis is a vertical asymptote because n = −2 < 0.

**Cubic.** Squares of side x cm are cut from each corner of a 30 cm × 20 cm sheet, and the sides are folded up to make an open box.

```
V(x) = x(30 − 2x)(20 − 2x)
Domain: 0 < x < 10      (the 20 cm side must stay positive)
GDC maximum: x = 3.92 cm, V = 1060 cm³ (3 s.f.)
```

**Sinusoidal.** The depth of water in a harbour is D(t) = 3 sin(30t) + 8 metres, t hours after midnight, with the angle in degrees. Amplitude = 3 m. Period = 360°/30 = 12 hours. Principal axis D = 8. So the depth runs from 5 m to 11 m. The guide says you will not need to convert between sin and cos, and you will be asked for amplitude, period or principal axis.

## 2.6 Developing, fitting and using a model

The guide splits modelling into three stages.

**Develop and fit the model.** From the context, choose a model type and decide which parameters it needs. State a reasonable domain. Find the parameters by:

- substituting given points into the function;
- using initial conditions (the value at t = 0);
- setting up and solving simultaneous equations with technology. At SL you must handle up to three linear equations in three unknowns. You will not be asked to do non-linear regression here; regression belongs to topic 4.

**Worked example.** A quadratic y = ax² + bx + c passes through (1, 4), (3, 10) and (5, 24).

```
a + b + c = 4
9a + 3b + c = 10
25a + 5b + c = 24
GDC simultaneous solver: a = 1, b = −1, c = 4
Model: y = x² − x + 4
```

**Worked example.** A bacteria count is modelled by N(t) = k·aᵗ. N(0) = 120 and N(5) = 300.

```
Initial condition: k = 120
120a⁵ = 300 → a⁵ = 2.5 → a = 2.5^(1/5) = 1.20 (3 s.f.)
N(12) = 120 × 2.5^(12/5) = 1080 (3 s.f.)
```

Keep the unrounded a in your GDC for the prediction.

**Test and reflect.** Say whether the model is appropriate and reasonable. Justify the model choice from the shape of the data (steady rate → linear; one turning point → quadratic; repeats → sinusoidal; levels off → exponential with asymptote), from properties of the curve, or from the context.

**Use the model.** Read values, interpret them in context and make predictions. Be wary of **extrapolation**: a prediction outside the data range assumes the pattern continues, and it often does not. The bacteria model above gives huge values for large t, which a real dish of nutrients cannot support.

## Common errors

- Giving the gradient of ax + by + d = 0 as a/b. It is −a/b.
- Using the perpendicular gradient as −m instead of −1/m.
- Stating a range as an x-interval. The range is about output values: write f(x) ≥ 3, not x ≥ 3.
- Forgetting that the domain of f⁻¹ is the range of f.
- Writing an asymptote as "2" instead of the equation y = 2.
- Reading the period of a sin(bx) + d as b. It is 360°/b, with the GDC in degrees.
- Rounding a parameter to 3 s.f. and then reusing it, so the final answer drifts.
- Giving a model's domain that includes impossible values, such as negative time or a negative length.

## Where to go next

Condense this page with the [revision notes](/resources/ib-dp-mathematics-ai-functions-modelling-revision-notes/), then test yourself on the [practice questions](/resources/ib-dp-mathematics-ai-functions-modelling-practice/). For the rest of the course, see the [syllabus guide](/resources/ib-dp-mathematics-applications-and-interpretation-syllabus-guide/), the [subject guide](/resources/ib-dp-mathematics-applications-and-interpretation-subject-guide/), [exam preparation](/resources/ib-dp-mathematics-applications-and-interpretation-exam-preparation/), [geometry and trigonometry](/resources/ib-dp-mathematics-ai-geometry-trigonometry/) (for sinusoidal work) and [statistics and probability](/resources/ib-dp-mathematics-ai-statistics-probability/) (for regression).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: applications and interpretation guide*, first assessment 2021. Sections SL 2.1–2.6.
