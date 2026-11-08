---
title: "Pearson Edexcel International Advanced Level Mathematics: Differentiating and integrating powers of x: gradients, tangents, normals and indefinite integrals (YMA01)"
seoTitle: "Edexcel IAL Maths P1 Differentiation and Integration Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Differentiating and integrating powers of x: gradients, tangents, normals and indefinite integrals"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 140
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p1-pure-mathematics-1-edexcel-alevel-maths"
    subtopic: "p1-differentiation-edexcel-alevel-maths"
  - qualification: "a-level"
    topic: "unit-p1-pure-mathematics-1-edexcel-alevel-maths"
    subtopic: "p1-integration-edexcel-alevel-maths"
description: "Study guide to Edexcel International Advanced Level Maths P1 sections 4 and 5: derivatives of powers of x, tangents, normals and indefinite integrals."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide is aligned to the Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics specification (Issue 3, April 2019). It covers Unit P1: Pure Mathematics 1, section 4 (Differentiation, 4.1 to 4.3) and section 5 (Integration, 5.1 and 5.2). As the specification states, P1 is a compulsory unit for IAS Mathematics and Pure Mathematics and for IAL Mathematics and Pure Mathematics. There are no tiers or optional strands inside this content.

Use it with the [revision notes](/resources/edexcel-ial-mathematics-differentiating-and-integrating-powers-of-x-gradients-revision-notes/) and the [practice questions](/resources/edexcel-ial-mathematics-differentiating-and-integrating-powers-of-x-gradients-practice/). The wider course sits on the [Edexcel A Level Mathematics hub](/boards/edexcel/a-level/mathematics/), the [printable checklist](/checklists/edexcel/a-level/mathematics/) lists every topic, and the [free 10-minute diagnostics](/diagnostics/) show where to start. The older [Pure Mathematics 1 overview](/resources/a-level-edexcel-mathematics-pure-mathematics-1/) gives the unit as a whole.

## What this unit covers

| Spec | What you must be able to do |
|---|---|
| 4.1 | Know the derivative as the gradient of the tangent, the limit definition, the rate-of-change meaning, and second derivatives; use f′(x), f″(x) and dy/dx |
| 4.2 | Differentiate xⁿ and sums, differences and constant multiples, including products you must expand and fractions you must split |
| 4.3 | Work out gradients at given points, and write down tangent and normal equations |
| 5.1 | Know that integration reverses differentiation and that a constant of integration is needed |
| 5.2 | Integrate xⁿ (n ≠ −1) and related sums, differences and multiples; given f′(x) and a point on the curve, find y = f(x) |

The specification states that knowledge of the chain rule is not required for 4.1. Integrating 1/x, which is the case n = −1, is excluded here.

## 1. The derivative as a gradient (4.1)

A curve has a different gradient at every point. The gradient at a point means the gradient of the tangent there. Take a point A at x and a second point B at x + h on y = f(x). The chord AB has gradient

```
[f(x + h) − f(x)] / h
```

Let h shrink and B closes in on A, so the chord approaches the tangent. The derivative is the value the chord gradient settles at:

```
f′(x) = lim (h → 0) [f(x + h) − f(x)] / h
```

**Worked example 1.** Find the derivative of f(x) = x³ − 2x from the definition, then the gradient at x = 2.

```
f(x + h) = (x + h)³ − 2(x + h) = x³ + 3x²h + 3xh² + h³ − 2x − 2h
f(x + h) − f(x) = 3x²h + 3xh² + h³ − 2h
divide by h:       3x² + 3xh + h² − 2
let h → 0:         f′(x) = 3x² − 2
f′(2) = 3(4) − 2 = 10
```

The gradient at x = 2 is 10. The steps matter: expand, subtract, divide by h, and only then let h tend to 0. Setting h = 0 earlier gives 0/0.

**Rate of change.** The derivative dy/dx measures how quickly y changes as x changes. If the depth h cm of water in a tank is h = 4t + t²/2 after t minutes, then dh/dt = 4 + t. At t = 6 the depth is increasing at 10 cm per minute. Always give the units of the rate: units of y per unit of x.

**Second derivatives.** Differentiating f′(x) again gives f″(x), also written d²y/dx². It tells you how quickly the gradient itself is changing.

**Worked example 2.** For y = x⁴ − 6x² + 8/x, find dy/dx and d²y/dx², and the value of d²y/dx² at x = 2.

```
y = x⁴ − 6x² + 8x⁻¹
dy/dx = 4x³ − 12x − 8x⁻²
d²y/dx² = 12x² − 12 + 16x⁻³
at x = 2: 12(4) − 12 + 16/8 = 48 − 12 + 2 = 38
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--01-chord-to-tangent.webp" width="900" height="880" alt="Graph of y = 2x squared. Point P is at x = 3, y = 18. Three chords from P to points a distance h to the right (h = 1, 0.5, 0.25) get closer to the gold tangent line as h shrinks. The chord gradient is 12 + 2h: 14, 13, 12.2 and 12.02 for h = 1, 0.5, 0.1 and 0.01. As h tends to 0 the gradient tends to 12, the gradient of the curve at x = 3, which agrees with dy/dx = 4x." loading="lazy">
  <figcaption>How chord gradients 12 + 2h approach the tangent gradient 12 at x = 3 on y = 2x².</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--02-gradient-function.webp" width="900" height="1110" alt="Two graphs aligned on the same x values. Top: the cubic f(x) = x cubed minus 3x squared minus 9x plus 4, rising to a maximum (minus 1, 9), falling to a minimum (3, minus 23), then rising. Bottom: its gradient function f dash = 3(x + 1)(x minus 3), a U-shaped parabola crossing zero at x = minus 1 and x = 3. Where f dash is positive f is rising, where negative f is falling, and f dash = 0 at the maximum and minimum." loading="lazy">
  <figcaption>The sign of f′ tells you where f rises or falls, and f′ = 0 at turning points.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--08-parametric-gradient.webp" width="900" height="967" alt="The curve x = t squared + 2t, y = t cubed minus 3t, drawn with equal scales. At t = 2 the point is (8, 2). Its horizontal rate dx/dt = 6 and vertical rate dy/dt = 9 form a right triangle whose slope is the gradient dy/dx = 9 over 6 = 3 over 2. The gold tangent has that gradient and the teal normal has gradient minus two thirds. Grey dots mark t = minus 1, 0 and 1." loading="lazy">
  <figcaption>At t = 2 the gradient is dy/dt ÷ dx/dt = 9/6, with the normal gradient −2/3.</figcaption>
</figure>


## 2. Differentiating xⁿ (4.2)

The rule is: if f(x) = xⁿ then f′(x) = nxⁿ⁻¹. Multiply by the power, then reduce the power by 1. It works for any rational n, including negatives and fractions. Constants differentiate to 0, and a term kxⁿ becomes knxⁿ⁻¹. Sums and differences are differentiated term by term.

The skill is rewriting first. Put every term into the form axⁿ before you differentiate:

| Written as | Rewrite as |
|---|---|
| √x | x^(1/2) |
| 1/x³ | x⁻³ |
| 1/√x | x^(−1/2) |
| 5/(2x²) | (5/2)x⁻² |
| ³√(x²) | x^(2/3) |

There is no product rule or quotient rule in this unit. You get round products by expanding brackets and round fractions by dividing each term by the denominator.

**Worked example 3 (a product).** Differentiate y = (3x + 2)(2x − 5).

```
y = 6x² − 15x + 4x − 10 = 6x² − 11x − 10
dy/dx = 12x − 11
```

**Worked example 4 (a fraction).** Find g′(x) for g(x) = (x³ + 4x − 8)/(2√x), and evaluate g′(4).

```
g(x) = (1/2)x³·x^(−1/2) + 2x·x^(−1/2) − 4x^(−1/2)
     = (1/2)x^(5/2) + 2x^(1/2) − 4x^(−1/2)
g′(x) = (5/4)x^(3/2) + x^(−1/2) + 2x^(−3/2)
g′(4) = (5/4)(8) + 1/2 + 2/8 = 10 + 0.5 + 0.25 = 43/4
```

Note that each term of the numerator is divided by the denominator, and the powers are added as indices: x³ ÷ x^(1/2) = x^(5/2).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--05-chain-rule-gradients.webp" width="900" height="1250" alt="Three graphs show y = square root of (4x squared + 9) built in two steps. Top: u = 4x squared + 9 has gradient 16 at x = 2 where u = 25. Middle: y = square root of u has gradient 0.1 at u = 25 where y = 5. Bottom: the combined curve y = square root of (4x squared + 9) has gradient 1.6 at x = 2, and 16 times 0.1 equals 1.6, so dy/dx = dy/du times du/dx." loading="lazy">
  <figcaption>The gradient of the composite is the product of the two gradients: 16 × 0.1 = 1.6.</figcaption>
</figure>


## 3. Gradients, tangents and normals (4.3)

To find the gradient at a point, differentiate and substitute the x-coordinate. The **tangent** at a point has that gradient m and passes through the point. The **normal** is perpendicular to the tangent, so its gradient is −1/m, provided m ≠ 0.

Use y − y₁ = m(x − x₁) for both lines. If a question asks for a particular form such as ax + by + c = 0 with integer coefficients, finish by rearranging.

**Worked example 5.** The curve C has equation y = 3x² − 4√x for x > 0. Find the equations of the tangent and the normal at the point where x = 4.

<!-- marlbridge-diagram:maths-b16-differentiation-tangent-normal -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/mathematics/maths-b16-differentiation-tangent-normal.svg" aria-label="Open full-size diagram: maths-b16-differentiation-tangent-normal"><img src="/images/learning/mathematics/maths-b16-differentiation-tangent-normal.svg" width="1600" height="1050" alt="For y=3x²−4√x at x=4, the point is (4,40), the tangent gradient is 23 and the normal gradient is −1/23." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>For y=3x²−4√x at x=4, the point is (4,40), the tangent gradient is 23 and the normal gradient is −1/23. Select the image to enlarge it.</figcaption>
</figure>
<!-- /marlbridge-diagram:maths-b16-differentiation-tangent-normal -->


```
y = 3x² − 4x^(1/2)
dy/dx = 6x − 2x^(−1/2)
at x = 4: y = 3(16) − 4(2) = 40; dy/dx = 24 − 1 = 23
Tangent: y − 40 = 23(x − 4)  →  y = 23x − 52
Normal gradient = −1/23
Normal: y − 40 = −(1/23)(x − 4)
        23y − 920 = −x + 4
        x + 23y − 924 = 0
```

A common variation gives you the gradient and asks for the point. Set dy/dx equal to the required value, solve for x, then find y from the original equation. Lines are parallel when their gradients are equal.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--04-tangent-and-normal.webp" width="900" height="942" alt="Graph of y = square root of (2x + 5) with equal scales on both axes. At P(2, 3) the gradient is one third, so the gold tangent is 3y = x + 7. The teal normal is perpendicular, with gradient minus 3, y = 9 minus 3x, and crosses the x-axis at (3, 0). A right-angle mark at P shows the lines are perpendicular because one third times minus 3 equals minus 1." loading="lazy">
  <figcaption>The tangent and normal at P(2, 3) are perpendicular because their gradients multiply to −1.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--07-exp-and-ln-slopes.webp" width="900" height="1200" alt="Top: the graph of y = e to the x with gold tangents at x = 0, 1 and 2. The slope at each point equals its height: 1, e and e squared, so the derivative of e to the x is e to the x. Bottom: the graph of y = ln x with tangents at x = 1, 2 and 4 having slopes 1, one half and one quarter, so the derivative of ln x is 1 over x." loading="lazy">
  <figcaption>The slope of eˣ equals its height and the slope of ln x at x is 1/x.</figcaption>
</figure>


## 4. Indefinite integration (5.1 and 5.2)

Integration reverses differentiation. If F′(x) = f(x), then ∫f(x) dx = F(x) + c. The constant c is the **constant of integration**: many curves have the same gradient function, and they differ by a vertical shift. An indefinite integral without + c is incomplete, and you should write it every time.

The rule for powers is, for n ≠ −1:

```
∫ xⁿ dx = xⁿ⁺¹/(n + 1) + c
```

Add 1 to the power, then divide by the new power. Check by differentiating: the result must return the integrand. Constant multiples come outside and sums are integrated term by term. As with differentiation, rewrite roots and reciprocals as powers first, and expand brackets before integrating.

**Worked example 6.** Find ∫(x²/2 − 3/√x) dx.

```
x²/2 − 3x^(−1/2)
∫ = (1/2)(x³/3) − 3 · x^(1/2)/(1/2) + c
  = x³/6 − 6√x + c
```

Dividing by 1/2 means multiplying by 2, which is where the 6 comes from.

**Worked example 7 (expanding first).** Find ∫(3x + 1)(x − 2)/√x dx.

```
(3x + 1)(x − 2) = 3x² − 5x − 2
divide by x^(1/2): 3x^(3/2) − 5x^(1/2) − 2x^(−1/2)
∫ = 3 · x^(5/2)/(5/2) − 5 · x^(3/2)/(3/2) − 2 · x^(1/2)/(1/2) + c
  = (6/5)x^(5/2) − (10/3)x^(3/2) − 4x^(1/2) + c
```

## 5. Finding a curve from its gradient (5.2)

If you know f′(x) and one point on the curve, integrate, then use the point to find c.

**Worked example 8.** A curve has f′(x) = 6√x − 4/x² and passes through (4, 20). Find f(x).

```
f′(x) = 6x^(1/2) − 4x⁻²
f(x) = 6 · x^(3/2)/(3/2) − 4 · x⁻¹/(−1) + c
     = 4x^(3/2) + 4/x + c
at (4, 20): 4(8) + 4/4 + c = 20  →  33 + c = 20  →  c = −13
f(x) = 4x^(3/2) + 4/x − 13
```

Check by differentiating: 6x^(1/2) − 4x⁻², which matches. A single point fixes one constant. A question that asks for f(x) from f″(x) needs two integrations and two conditions.

## Common errors

- Differentiating a product by multiplying the derivatives of the factors. Expand first.
- Leaving 1/x² or √x unconverted, then applying the rule to the wrong power.
- Writing the new power as n − 1 when integrating, or forgetting to divide by the new power.
- Dividing by n + 1 incorrectly when it is a fraction. Dividing by 3/2 means multiplying by 2/3.
- Forgetting + c, or finding c and then dropping it from the final equation.
- Using the tangent gradient as the normal gradient, or taking the reciprocal and forgetting the sign change.
- Substituting into the original function instead of dy/dx when the gradient is wanted (or the reverse for the y-coordinate).
- Letting h = 0 too soon in a first-principles argument.

## Frequently asked questions

**What does the derivative of a function mean?**
The derivative gives the gradient of the tangent to the curve at each point, and measures how quickly y changes as x changes.

**What is the rule for differentiating xⁿ?**
If f(x) = xⁿ, then f′(x) = nxⁿ⁻¹: multiply by the power, then reduce the power by 1. Rewrite roots and reciprocals as powers of x first.

**Do you need the chain rule for Edexcel IAL Pure 1?**
No. The specification states that knowledge of the chain rule is not required for this section, so products and fractions are handled by expanding and splitting.

**Why do you add + c to an indefinite integral?**
Differentiating a constant gives zero, so integration can only find the function up to a constant. A known point on the curve is needed to find its value.

## Where to go next

Practise with the [practice questions](/resources/edexcel-ial-mathematics-differentiating-and-integrating-powers-of-x-gradients-practice/), then condense with the [revision notes](/resources/edexcel-ial-mathematics-differentiating-and-integrating-powers-of-x-gradients-revision-notes/). For wider P1 recall use the [Pure 1 revision notes](/resources/edexcel-a-level-mathematics-pure1-revision-notes/) and the [Pure 1 practice set](/resources/edexcel-a-level-mathematics-pure1-practice/).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--03-convex-concave-inflection.webp" width="900" height="970" alt="A quartic curve f(x) = x to the 4 minus 8x cubed plus 18x squared plus 5. It is convex (bends upwards, teal) for x less than 1, concave (bends downwards, copper) between x = 1 and x = 3, and convex again for x greater than 3. The points of inflection (1, 16) and (3, 32) are ringed; dashed tangents there cross the curve, and at (3, 32) the tangent is horizontal. The second derivative 12(x minus 1)(x minus 3) is zero and changes sign at each." loading="lazy">
  <figcaption>Convex and concave sections of a curve and the inflection points where f″ changes sign.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--09-implicit-flat-vertical.webp" width="900" height="1084" alt="The tilted ellipse x squared minus xy plus y squared = 12, drawn from its equation. Implicit differentiation gives dy/dx = (y minus 2x) over (2y minus x). The numerator is zero when y = 2x, giving horizontal tangents (teal) at (2, 4) and (minus 2, minus 4). The denominator is zero when x = 2y, giving vertical tangents (copper) at (4, 2) and (minus 4, minus 2)." loading="lazy">
  <figcaption>Horizontal tangents occur where the numerator of dy/dx is zero and vertical tangents where the denominator is zero.</figcaption>
</figure>


## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification Issue 3, April 2019, published by Pearson Education Limited. This page covers Unit P1 sections 4.1 to 4.3 and 5.1 to 5.2.
