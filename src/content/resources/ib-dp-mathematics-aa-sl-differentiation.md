---
title: "IB DP Mathematics: Analysis and Approaches -- Limits, derivatives, tangents, rules of differentiation and graph behaviour Study Guide"
seoTitle: "IB Maths AA Differentiation Study Guide (SL and HL)"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Limits, derivatives, tangents, rules of differentiation and graph behaviour"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5.1
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-1"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-2"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-3"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-4"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-6"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-7"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-8"
description: "Study guide for IB DP Maths AA differentiation: limits, gradient, tangents, chain, product and quotient rules, stationary points and inflexion."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "review-pending"
reviewedDate: 2026-09-29
publishedDate: 2026-09-27
featured: false
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review."
---

This study guide teaches the differentiation unit of IB Diploma Programme Mathematics: Analysis and Approaches. It is aligned to the IB *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus sections 5.1–5.4 and 5.6–5.8. All of it is SL content, so it is required at both SL and HL. It follows the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so it applies to the May and November 2026, 2027 and 2028 sessions.

The [calculus strand overview](/resources/ib-dp-mathematics-aa-calculus/) gives the big picture of the whole strand. This page goes section by section through differentiation only. Section 5.5 (anti-differentiation and area) is not part of this unit. When you have worked through it, test your recall with the [revision notes](/resources/ib-dp-mathematics-aa-sl-differentiation-revision-notes/) and the [practice questions](/resources/ib-dp-mathematics-aa-sl-differentiation-practice/). The [IB DP Maths AA course hub](/boards/ib/ib-dp/mathematics-analysis-and-approaches/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-analysis-and-approaches/) show where the unit sits in the course.

## What this unit covers

| Section | What you must be able to do | SL/HL |
|---|---|---|
| 5.1 | Estimate a limit from a table or graph; read a derivative as a gradient function and a rate of change; use dy/dx, f′(x), dV/dr, ds/dt | SL and HL |
| 5.2 | Find intervals where f is increasing (f′(x) > 0) or decreasing (f′(x) < 0) | SL and HL |
| 5.3 | Differentiate axⁿ and sums of such terms, n ∈ ℤ | SL and HL |
| 5.4 | Find equations of tangents and normals, by hand and with technology | SL and HL |
| 5.6 | Differentiate xⁿ (n ∈ ℚ), sin x, cos x, eˣ, ln x; use the chain, product and quotient rules | SL and HL |
| 5.7 | Use the second derivative; link the graphs of f, f′ and f″ | SL and HL |
| 5.8 | Find and test local maxima and minima; solve optimisation problems; find points of inflexion with zero and non-zero gradient | SL and HL |

The guide says formal analytic methods of calculating limits are not required at SL. Differentiation from first principles is an HL-only section (5.12) and is not covered here.

## 5.1 Limits and the meaning of a derivative

A limit is the value a function's output approaches as the input approaches some value. At SL you estimate it from a table or graph.

The gradient of a curve at a point is the limit of the gradients of chords. Take a chord from the point to a nearby point, then move the nearby point closer and closer.

### Worked example: gradient of y = x³ at x = 2

The chord from (2, 8) to (2 + h, (2 + h)³) has gradient ((2 + h)³ − 8)/h.

| h | chord gradient |
|---|---|
| 0.1 | 12.61 |
| 0.01 | 12.0601 |
| 0.001 | 12.006001 |

As h → 0 the chord gradients approach 12. So the gradient of the curve at x = 2 is 12.

### Notation and meaning

The derivative is the **gradient function**. It gives the gradient of the tangent at any point. It is also the **rate of change** of one variable with respect to another. The guide lists these forms:

- dy/dx or f′(x) — gradient of y = f(x)
- dV/dr — rate of change of volume V with respect to radius r
- ds/dt — rate of change of displacement s with respect to time t

State units for a rate in context: dV/dr in cm³ per cm.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-sl-differentiation--01-limit-chord-to-tangent.webp" width="900" height="946" alt="Graph of y = x cubed for x between 1.4 and 3.3 with the point P (2, 8). Three copper chords from P to points a distance h = 1, 0.5 and 0.25 to the right get closer and closer to the gold tangent at P. A table gives the chord gradients ((2 + h) cubed minus 8) over h: 12.61 for h = 0.1, 12.0601 for h = 0.01 and 12.006001 for h = 0.001. They approach 12, so the gradient of the curve at x = 2 is 12." loading="lazy">
  <figcaption>How chord gradients for y = x³ from P(2, 8) approach 12 as h shrinks.</figcaption>
</figure>


## 5.2 Increasing and decreasing functions

- f is **increasing** on an interval where f′(x) > 0.
- f is **decreasing** on an interval where f′(x) < 0.
- Where f′(x) = 0 the tangent is horizontal.

### Worked example

Find the intervals where f(x) = x³ − 3x² − 9x + 2 is decreasing.

```
f'(x) = 3x² − 6x − 9 = 3(x − 3)(x + 1)
f'(x) = 0 at x = −1 and x = 3
test x = −2: f'(−2) = 15 > 0
test x = 0:  f'(0)  = −9 < 0
test x = 4:  f'(4)  = 15 > 0
```

f is decreasing for −1 < x < 3, and increasing for x < −1 and for x > 3.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-sl-differentiation--02-increasing-decreasing.webp" width="900" height="900" alt="Graph of the cubic f(x) = x cubed minus 3x squared minus 9x plus 2 with a sign line beneath it on the same x scale. The gradient f dash = 3(x minus 3)(x + 1) is zero at x = minus 1 and x = 3. Test values f dash of minus 2 = 15, f dash of 0 = minus 9, f dash of 4 = 15 show f increasing for x less than minus 1, decreasing between minus 1 and 3, increasing for x greater than 3. The turning points are (minus 1, 7) and (3, minus 25)." loading="lazy">
  <figcaption>f is decreasing exactly where f′ &lt; 0, here for −1 &lt; x &lt; 3.</figcaption>
</figure>


## 5.3 Differentiating powers of x

If f(x) = axⁿ then f′(x) = anxⁿ⁻¹, for n ∈ ℤ. Differentiate a sum term by term. A constant differentiates to 0.

Rewrite before you differentiate: 5/x² = 5x⁻², and (x² − 3)/x = x − 3x⁻¹.

### Worked example

```
y = 4x³ − 5/x² + 7 = 4x³ − 5x⁻² + 7
dy/dx = 12x² + 10x⁻³ = 12x² + 10/x³
```

```
f(x) = (x² − 3)/x = x − 3x⁻¹
f'(x) = 1 + 3x⁻² = 1 + 3/x²
f'(3) = 1 + 3/9 = 4/3
```

## 5.4 Tangents and normals

At the point (x₁, y₁) on y = f(x):

- the **tangent** has gradient m = f′(x₁), so y − y₁ = m(x − x₁)
- the **normal** is perpendicular to the tangent, so its gradient is −1/m (when m ≠ 0)

### Worked example

Find the tangent and normal to y = x³ − 4x + 1 at x = 2.

```
y(2) = 8 − 8 + 1 = 1, so the point is (2, 1)
dy/dx = 3x² − 4, so m = 3(4) − 4 = 8
tangent: y − 1 = 8(x − 2)  →  y = 8x − 15
normal gradient = −1/8
normal:  y − 1 = −(1/8)(x − 2)  →  x + 8y − 10 = 0
```

The guide expects both analytic methods and technology here. On Paper 2 a GDC can give the gradient at a point, but you still write the equation of the line yourself.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-sl-differentiation--03-tangent-and-normal.webp" width="900" height="1090" alt="Graph of y = x cubed minus 4x plus 1 with the point P (2, 1). The gold tangent at P has gradient 3x squared minus 4 = 8 and equation y = 8x minus 15. The teal normal has gradient minus 1 over 8 and equation x + 8y minus 10 = 0. The main graph uses different x and y scales, so a second small panel with equal scales shows the two lines meeting at a right angle, because 8 times minus 1 over 8 equals minus 1." loading="lazy">
  <figcaption>Tangent (gradient 8) and normal (gradient −1/8) at (2, 1) are perpendicular.</figcaption>
</figure>


## 5.6 Standard derivatives and the rules

### Standard derivatives

| f(x) | f′(x) |
|---|---|
| xⁿ (n ∈ ℚ) | nxⁿ⁻¹ |
| sin x | cos x |
| cos x | −sin x |
| eˣ | eˣ |
| ln x | 1/x |

The trigonometric results need x in radians. Multiples and sums work as before: d/dx(3 sin x − 2eˣ) = 3 cos x − 2eˣ.

Rational powers: write roots as powers first.

```
y = x^(3/2) − 6x^(−1/3)
dy/dx = (3/2)x^(1/2) + 2x^(−4/3)
```

### The chain rule

For a composite function y = f(g(x)), let u = g(x). Then

```
dy/dx = (dy/du) × (du/dx)
```

Differentiate the outer function, keep the inside unchanged, then multiply by the derivative of the inside.

```
y = sin(4x + 1)      dy/dx = 4cos(4x + 1)
y = √(2x + 5)        dy/dx = (1/2)(2x + 5)^(−1/2) × 2 = 1/√(2x + 5)
y = ln(x² + 1)       dy/dx = 2x/(x² + 1)
```

### The product rule

If y = uv, where u and v are functions of x, then

```
dy/dx = u(dv/dx) + v(du/dx)
```

Worked example: y = x²e³ˣ.

```
u = x²,   du/dx = 2x
v = e^(3x), dv/dx = 3e^(3x)   (chain rule)
dy/dx = x²(3e^(3x)) + e^(3x)(2x) = xe^(3x)(3x + 2)
```

### The quotient rule

If y = u/v, then

```
dy/dx = (v(du/dx) − u(dv/dx)) / v²
```

Worked example: y = (ln x)/x.

```
u = ln x, du/dx = 1/x
v = x,    dv/dx = 1
dy/dx = (x(1/x) − ln x(1)) / x² = (1 − ln x)/x²
```

The order in the numerator matters: swapping it changes the sign.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-sl-differentiation--04-chain-rule-inner-factor.webp" width="900" height="1030" alt="Two graphs drawn at the same size. Top: y = sin u near u = pi, where the gradient is cos pi = minus 1. Bottom: y = sin(4x + 1) near x = (pi minus 1)/4, about 0.54, which is the same wave repeating 4 times faster, so the gold tangent is 4 times steeper with gradient minus 4. This is the chain rule: dy/dx = cos(4x + 1) times 4, and at this point cos pi times 4 = minus 4." loading="lazy">
  <figcaption>The inner function 4x + 1 makes y = sin(4x + 1) four times steeper than sin u.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-sl-differentiation--05-quotient-rule-ln-x-over-x.webp" width="900" height="860" alt="Graph of y = ln x divided by x for x from 0.4 to 6.4. At x = 1 the curve crosses the x-axis with gold tangent of gradient 1. The curve peaks at x = e, y = 1 over e, about 0.37, where the copper tangent is horizontal. With u = ln x and v = x, the quotient rule gives dy/dx = (1 minus ln x) over x squared, which is 1 at x = 1 and 0 at x = e." loading="lazy">
  <figcaption>The quotient rule gives dy/dx = (1 − ln x)/x², zero at the maximum x = e.</figcaption>
</figure>


## 5.7 The second derivative and graph behaviour

The second derivative is the derivative of the derivative. Write it as d²y/dx² or f″(x); you need both notations.

- f″(x) > 0: the gradient is increasing, and the curve is **concave-up**.
- f″(x) < 0: the gradient is decreasing, and the curve is **concave-down**.

How the three graphs relate:

| On the graph of f | On the graph of f′ | On the graph of f″ |
|---|---|---|
| increasing | above the x-axis | — |
| decreasing | below the x-axis | — |
| stationary point | crosses or touches the x-axis | — |
| concave-up | increasing | above the x-axis |
| point of inflexion | local maximum or minimum | crosses the x-axis |

### Worked example

Let f(x) = xe⁻ˣ.

```
f'(x)  = e^(−x) − xe^(−x) = (1 − x)e^(−x)
f''(x) = −e^(−x) − (1 − x)e^(−x) = (x − 2)e^(−x)
```

Since e⁻ˣ > 0 for all x, the signs depend only on the brackets. f is increasing for x < 1 and decreasing for x > 1, so there is a maximum at (1, e⁻¹). f is concave-down for x < 2 and concave-up for x > 2, so there is a point of inflexion at (2, 2e⁻²).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-sl-differentiation--06-f-f-prime-f-double-prime.webp" width="900" height="1120" alt="Three aligned graphs for f(x) = x e to the minus x, drawn from its derivatives f dash = (1 minus x) e to the minus x and f double dash = (x minus 2) e to the minus x. Dashed vertical guides at x = 1 and x = 2. At x = 1, f dash crosses zero and f has a maximum at (1, e to the minus 1). At x = 2, f double dash crosses zero and changes sign, f dash is at its minimum, and f has a point of inflexion at (2, 2e to the minus 2). The curves are copper where f is concave-down and teal where it is concave-up." loading="lazy">
  <figcaption>How f, f′ and f″ of xe⁻ˣ line up: maximum at x = 1, inflexion at x = 2.</figcaption>
</figure>


## 5.8 Maxima, minima, inflexion and optimisation

### Testing a stationary point

Solve f′(x) = 0, then use either test:

1. **First derivative (sign change).** f′ changes from + to −: local maximum. From − to +: local minimum. No change of sign: not a maximum or minimum.
2. **Second derivative.** f″(x) > 0: minimum. f″(x) < 0: maximum. If f″(x) = 0 the test tells you nothing; use the sign-change test.

### Points of inflexion

At a point of inflexion f″(x) = 0 **and** f″ changes sign. The guide stresses that f″(x) = 0 alone is not enough: for y = x⁴, f″(0) = 0 but (0, 0) is a minimum, not an inflexion. An inflexion can have zero gradient (a stationary, or horizontal, point of inflexion) or non-zero gradient.

### Worked example: both kinds of inflexion

f(x) = x⁴ − 4x³.

```
f'(x)  = 4x³ − 12x² = 4x²(x − 3)    zero at x = 0, x = 3
f''(x) = 12x² − 24x = 12x(x − 2)    zero at x = 0, x = 2
```

- x = 3: f″(3) = 36 > 0, so (3, −27) is a local minimum.
- x = 0: f″(0) = 0, so use signs. f′(−1) = −16 and f′(1) = −8: no sign change, so not a max or min. f″ changes from + (at x = −1, f″ = 36) to − (at x = 1, f″ = −12). So (0, 0) is a point of inflexion with zero gradient.
- x = 2: f″ changes from − to + and f′(2) = −16 ≠ 0. So (2, −16) is a point of inflexion with non-zero gradient.

### Optimisation

1. Write the quantity to optimise as a function of one variable (use a constraint to remove the other).
2. Differentiate and solve derivative = 0.
3. Justify max or min (second derivative or sign change).
4. Answer the question asked, with units.

Worked example: a closed cylinder has volume 250π cm³. Find the radius that minimises its surface area S.

```
V = πr²h = 250π  →  h = 250/r²
S = 2πr² + 2πrh = 2πr² + 500π/r
dS/dr = 4πr − 500π/r² = 0  →  r³ = 125  →  r = 5
d²S/dr² = 4π + 1000π/r³ = 12π > 0 at r = 5, so minimum
h = 250/25 = 10,  S = 50π + 100π = 150π cm²
```

The minimum surface area is 150π cm², when r = 5 cm and h = 10 cm.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-sl-differentiation--07-two-kinds-of-inflexion.webp" width="900" height="950" alt="Graph of f(x) = x to the fourth minus 4x cubed, coloured teal where f double dash is positive (concave-up, for x less than 0 and x greater than 2) and copper where it is negative (concave-down, between 0 and 2). At (0, 0) the gradient is zero and f double dash changes sign, a stationary point of inflexion with a horizontal tangent. At (2, minus 16) f double dash changes sign but the gradient is minus 16, a point of inflexion with non-zero gradient. At (3, minus 27) the gradient is zero and f double dash is 36, a local minimum." loading="lazy">
  <figcaption>f(x) = x⁴ − 4x³ has a minimum and two points of inflexion, one with zero gradient.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-sl-differentiation--08-optimisation-cylinder.webp" width="900" height="1020" alt="Graph of the surface area S = 2 pi r squared + 500 pi over r of a closed cylinder of fixed volume 250 pi cubic centimetres, against radius r. The curve falls to a single minimum at r = 5 cm where S = 150 pi, about 471 square centimetres, then rises. A cylinder drawn to scale beside it has r = 5 and h = 10. Steps: h = 250 over r squared, dS/dr = 4 pi r minus 500 pi over r squared = 0 gives r cubed = 125, and d2S/dr2 = 12 pi is positive so it is a minimum." loading="lazy">
  <figcaption>Surface area of a closed cylinder of volume 250π cm³ is least at r = 5 cm.</figcaption>
</figure>


## Using your GDC

Paper 1 allows no technology, so every rule in 5.3 and 5.6, and all the algebra of stationary points, must be done by hand. On Paper 2 the guide expects technology for:

- tables of values to estimate limits (5.1)
- the numerical gradient at a point and the equation of a tangent (5.4)
- sketching f, f′ and f″ and locating maxima, minima and zeros of f″ (5.7, 5.8)

Write the expression you are evaluating before the GDC value, so method marks are available.

## Common errors

- Differentiating 5/x² as 5/(2x) instead of rewriting as 5x⁻² first.
- Using f′(x₁) as the gradient of the normal instead of −1/f′(x₁).
- Dropping the inner derivative: d/dx(e^(3x)) is 3e^(3x), not e^(3x).
- Reversing the quotient rule numerator.
- Calling a point an inflexion because f″(x) = 0, without checking a sign change.
- Finding x for a stationary point and never giving the y-coordinate or the value asked for.
- Giving an optimisation answer with no justification that it is a maximum or minimum.
- Using degrees with sin x and cos x in calculus.

Go on to the [revision notes](/resources/ib-dp-mathematics-aa-sl-differentiation-revision-notes/) for condensed recall, then the [practice questions](/resources/ib-dp-mathematics-aa-sl-differentiation-practice/). For how calculus links to graph work, see the [functions strand overview](/resources/ib-dp-mathematics-aa-functions/). The [syllabus guide](/resources/ib-dp-mathematics-analysis-and-approaches-syllabus-guide/), [subject guide](/resources/ib-dp-mathematics-analysis-and-approaches-subject-guide/) and [exam preparation page](/resources/ib-dp-mathematics-analysis-and-approaches-exam-preparation/) cover the course as a whole.

## Frequently asked questions

**Do you need to calculate limits algebraically in IB Maths AA SL?**
No. The IB DP Mathematics: Analysis and Approaches guide says formal analytic methods of calculating limits are not required at SL; you estimate limits from a table or graph. Differentiation from first principles is HL only.

**Is f″(x) = 0 enough to show a point of inflexion?**
No. f″ must also change sign. For y = x⁴, f″(0) = 0 but (0, 0) is a minimum, not a point of inflexion.

**Does the order matter in the quotient rule?**
Yes. For y = u/v, dy/dx = (v du/dx − u dv/dx)/v², and swapping the order of the numerator changes the sign of the answer.

**What does concave-up mean?**
A curve is concave-up where f″(x) > 0, meaning the gradient is increasing. It is concave-down where f″(x) < 0.

**What does it mean for a function to be increasing?**
f is increasing on an interval where f′(x) > 0 and decreasing where f′(x) < 0. Where f′(x) = 0 the tangent is horizontal.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020). This page covers syllabus sections 5.1, 5.2, 5.3, 5.4, 5.6, 5.7 and 5.8.
