---
title: "Cambridge International AS & A Level Mathematics 9709: Pure Mathematics 2 Differentiation -- Revision Notes"
seoTitle: "9709 P2 Differentiation Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Pure Mathematics 2: Differentiation"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 40
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-2-cambridge-alevel"
  - qualification: "a-level"
    topic: "pure-mathematics-2-cambridge-alevel"
    subtopic: "differentiation-cambridge-alevel-maths-2"
description: "Condensed revision notes for Cambridge 9709 Paper 2 differentiation: standard results, chain, product and quotient rules, parametric, implicit, self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review."
reviewedDate: 2026-09-29
publishedDate: 2026-09-28
featured: false
---

For full explanations and longer worked examples, use the [study guide](/resources/a-level-maths-9709-pure-mathematics-2-differentiation/).

These notes cover section 2.4, Differentiation, of the Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027 (Version 4). Section 2.4 is part of Pure Mathematics 2 and is examined on Paper 2 (1 hour 15 minutes, 50 marks), the AS Level Pure Mathematics route. Paper 1 knowledge is assumed, so tangents, normals and stationary points from section 1.7 are used freely. The same outcomes are section 3.4 of Pure Mathematics 3. A scientific calculator is allowed, but unsupported calculator answers earn no marks.

Course links: [A Level Mathematics hub](/boards/cambridge/a-level/mathematics/), [printable 9709 checklist](/checklists/cambridge/a-level/mathematics/), [practice questions for this unit](/resources/a-level-maths-9709-pure-mathematics-2-differentiation-practice/), the whole-paper [Pure Mathematics 2 revision notes](/resources/a-level-mathematics-pure-mathematics-2-revision-notes/), and the Paper 1 [differentiation revision notes](/resources/a-level-maths-9709-pure-mathematics-1-differentiation-revision-notes/) for the chain rule and stationary points.

## 2.4 at a glance

| Outcome | In one line |
|---|---|
| Standard derivatives | eˣ, ln x, sin x, cos x, tan x, with multiples, sums, differences and composites |
| Products and quotients | Product rule and quotient rule, often combined with the chain rule |
| Parametric and implicit | First derivative only; used for gradients, tangents and normals |

Paper 1 tools still apply on top of these rules. For an explicit curve y = f(x), classify a stationary point with d²y/dx² or with the sign of dy/dx either side, and use whichever method the question names. For parametric and implicit curves you only ever need dy/dx.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--07-exp-and-ln-slopes.webp" width="900" height="1200" alt="Top: the graph of y = e to the x with gold tangents at x = 0, 1 and 2. The slope at each point equals its height: 1, e and e squared, so the derivative of e to the x is e to the x. Bottom: the graph of y = ln x with tangents at x = 1, 2 and 4 having slopes 1, one half and one quarter, so the derivative of ln x is 1 over x." loading="lazy">
  <figcaption>The slope of eˣ equals its height and the slope of ln x at x is 1/x.</figcaption>
</figure>


## Formulas

| Result | In MF19? |
|---|---|
| d/dx eˣ = eˣ | Yes |
| d/dx ln x = 1/x | Yes |
| d/dx sin x = cos x; d/dx cos x = −sin x | Yes |
| d/dx tan x = sec²x | Yes |
| Product: d/dx (uv) = v du/dx + u dv/dx | Yes |
| Quotient: d/dx (u/v) = (v du/dx − u dv/dx)/v² | Yes |
| Parametric: dy/dx = (dy/dt) ÷ (dx/dt) | Yes |
| Chain rule: dy/dx = (dy/du) × (du/dx) | No (learn) |
| d/dx e^(f(x)) = f′(x)e^(f(x)); d/dx ln f(x) = f′(x)/f(x) | No (learn as chain-rule patterns) |

Trig derivatives hold only with x in **radians**.

## Composite patterns to know on sight

```
e^(kx)        →  k e^(kx)
ln(ax + b)    →  a/(ax + b)
ln(kx)        →  1/x              (ln k is a constant)
sin(kx)       →  k cos(kx)
cos(kx)       →  -k sin(kx)
tan(kx)       →  k sec²(kx)
sinⁿx         →  n sinⁿ⁻¹x cos x
```

Small reminders:

- d/dx (ln x)² = 2 ln x × (1/x) = (2 ln x)/x. This is not the same as ln(x²), whose derivative is 2/x.
- d/dx e^(x²) = 2x e^(x²). The power stays; only a factor appears in front.
- d/dx sin²(3x) = 2 sin(3x) × 3 cos(3x) = 3 sin(6x) after the double-angle identity.

## Method in steps

**Product rule**

1. Name u and v.
2. Write du/dx and dv/dx separately (chain rule inside each if needed).
3. Substitute into u dv/dx + v du/dx.
4. Take out common factors, such as a power of x or an exponential.

Example: y = x e^(−x). dy/dx = x(−e^(−x)) + e^(−x) = e^(−x)(1 − x). Stationary at x = 1, because e^(−x) is never 0.

**Quotient rule**

1. u is the top, v is the bottom.
2. Top of the answer: v du/dx **minus** u dv/dx.
3. Bottom of the answer: v².
4. Simplify the numerator only; leave v² factorised.

**Parametric**

1. Find dx/dt and dy/dt.
2. dy/dx = (dy/dt) ÷ (dx/dt); simplify, leaving it in t.
3. For a point: find t first, then x, y and the gradient from that t.

Example: x = ln t, y = t³. dx/dt = 1/t, dy/dt = 3t², so dy/dx = 3t² ÷ (1/t) = 3t³.

**Implicit**

1. Differentiate every term with respect to x, both sides.
2. Each y-term gets × dy/dx; each xy-type term needs the product rule.
3. Collect the dy/dx terms on one side, factorise, divide.
4. Substitute the point's x and y (both are needed).

Example: y eˣ + y³ = 10. Product rule on y eˣ: y eˣ + eˣ dy/dx. Then 3y² dy/dx. So dy/dx (eˣ + 3y²) = −y eˣ, giving dy/dx = −y eˣ/(eˣ + 3y²).

**Tangent and normal at a point**

1. Gradient m from dy/dx at the point.
2. Tangent: y − y₁ = m(x − x₁). Normal: gradient −1/m.
3. Give the form asked for, such as ax + by + c = 0 with integers.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--05-chain-rule-gradients.webp" width="900" height="1250" alt="Three graphs show y = square root of (4x squared + 9) built in two steps. Top: u = 4x squared + 9 has gradient 16 at x = 2 where u = 25. Middle: y = square root of u has gradient 0.1 at u = 25 where y = 5. Bottom: the combined curve y = square root of (4x squared + 9) has gradient 1.6 at x = 2, and 16 times 0.1 equals 1.6, so dy/dx = dy/du times du/dx." loading="lazy">
  <figcaption>The gradient of the composite is the product of the two gradients: 16 × 0.1 = 1.6.</figcaption>
</figure>


## Two more worked reminders

**Quotient to stationary point.** y = eˣ/(x − 2), for x ≠ 2.

```
dy/dx = ((x - 2)eˣ - eˣ × 1) / (x - 2)²
      = eˣ(x - 3) / (x - 2)²
eˣ > 0, so dy/dx = 0 only when x = 3;  y = e³
```

The stationary point is (3, e³). Take out the common eˣ before setting the top equal to zero.

**Parametric special points.** x = t² + 1, y = t³ − 3t.

```
dx/dt = 2t,   dy/dt = 3t² - 3
Horizontal tangent: 3t² - 3 = 0  →  t = ±1  →  points (2, -2) and (2, 2)
Vertical tangent:   2t = 0       →  t = 0   →  point (1, 0)   (dy/dt = -3 ≠ 0)
```

Find t first, then turn each t into a pair of coordinates. Two values of t can give the same x.

## Must-know distinctions

- **ln(x²) vs (ln x)².** The first is 2 ln x, derivative 2/x. The second needs the chain rule: (2 ln x)/x.
- **sin x² vs sin²x.** sin(x²) differentiates to 2x cos(x²). sin²x = (sin x)² differentiates to 2 sin x cos x.
- **Product vs constant multiple.** 4 tan x is a constant multiple: derivative 4 sec²x. No product rule is needed.
- **Parametric vs implicit.** Parametric gives x and y in terms of t: divide dy/dt by dx/dt. Implicit links x and y directly: differentiate term by term with respect to x.
- **Horizontal vs vertical tangent (parametric).** Horizontal where dy/dt = 0; vertical where dx/dt = 0.
- **Tangent vs normal gradient.** Normal gradient is −1/m, not −m and not 1/m.
- **Exact vs 3 s.f.** "Exact" means leave e, ln, π or surds in the answer. Otherwise give 3 significant figures.

## Quick self-test

Differentiate with respect to x (questions 1 to 9).

1. e^(4x + 1)
2. ln(7x)
3. ln √(x + 2)
4. sin 5x
5. cos²x
6. x eˣ
7. x² sin x
8. (cos x)/x
9. ln(cos x)
10. Find the gradient of y = tan 3x at x = 0.
11. A curve has x = t³, y = t². Find dy/dx in terms of t.
12. The curve x² + y³ = 9 passes through (1, 2). Find the gradient there.

### Answers

1. **4e^(4x + 1)**
2. ln 7 + ln x, so **1/x**
3. ½ ln(x + 2), so **1/(2(x + 2))**
4. **5 cos 5x**
5. 2 cos x × (−sin x) = **−2 sin x cos x**, or **−sin 2x**
6. x eˣ + eˣ = **eˣ(x + 1)**
7. **2x sin x + x² cos x**
8. (x(−sin x) − cos x × 1)/x² = **−(x sin x + cos x)/x²**
9. (−sin x)/(cos x) = **−tan x**
10. 3 sec²(0) = **3**
11. 2t ÷ 3t² = **2/(3t)**
12. 2x + 3y² dy/dx = 0, so dy/dx = −2x/(3y²) = **−1/6**

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--06-product-rule-area.webp" width="900" height="650" alt="A rectangle of width u and height v has area uv. When x increases a little, u grows by du and v by dv, adding a strip of area v du on the right, a strip u dv on the top, and a tiny corner du dv which vanishes in the limit. So the change in uv is v du + u dv, giving (uv)′ = u′v + uv′. Example: y = x cubed times e to the 2x at x = 1 has gradient 3e squared + 2e squared = 5e squared, about 36.9." loading="lazy">
  <figcaption>Why the product rule has two terms: the rectangle area uv grows by v du + u dv.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--08-parametric-gradient.webp" width="900" height="967" alt="The curve x = t squared + 2t, y = t cubed minus 3t, drawn with equal scales. At t = 2 the point is (8, 2). Its horizontal rate dx/dt = 6 and vertical rate dy/dt = 9 form a right triangle whose slope is the gradient dy/dx = 9 over 6 = 3 over 2. The gold tangent has that gradient and the teal normal has gradient minus two thirds. Grey dots mark t = minus 1, 0 and 1." loading="lazy">
  <figcaption>At t = 2 the gradient is dy/dt ÷ dx/dt = 9/6, with the normal gradient −2/3.</figcaption>
</figure>


## Where marks are usually lost

- The inside derivative is missed: d/dx e^(3 − 2x) written as e^(3 − 2x) instead of −2e^(3 − 2x).
- The quotient rule is written with the top reversed, giving the negative of the correct answer.
- dy/dx left off a y-term in implicit work, such as d/dx (y²) written as 2y.
- The product rule skipped on an xy term, so only x dy/dx appears.
- A minus sign in front of a product term not applied to both parts of the product-rule result.
- In parametric questions, x-values substituted into a gradient that is written in terms of t.
- Trig derivatives used with degrees: dy/dx = cos x is only true when x is in radians.
- Solutions lost when dy/dx = 0 is divided by a factor such as cos x without checking whether that factor could be zero.
- Exact answers turned into decimals, or an exponential such as e^(ln 3) not simplified to 3.
- A "show that" result reached with a step missing, such as the unsimplified quotient-rule line.

## Frequently asked questions

**What is the quotient rule?**
For y = u/v, dy/dx = (v du/dx − u dv/dx)/v². The order in the numerator matters: reversing it gives the negative of the correct answer.

**What is the difference between ln(x²) and (ln x)²?**
ln(x²) = 2 ln x, which differentiates to 2/x. (ln x)² needs the chain rule and differentiates to (2 ln x)/x.

**Where does a parametric curve have a horizontal or vertical tangent?**
A horizontal tangent is where dy/dt = 0, and a vertical tangent is where dx/dt = 0. Find t first, then turn it into coordinates.

**Do trigonometric derivatives work in degrees?**
No. Results such as d/dx sin x = cos x hold only when x is measured in radians.

**Do you need second derivatives of parametric or implicit curves in Cambridge 9709 Paper 2?**
No. For parametric and implicit curves you only need the first derivative dy/dx, for gradients, tangents and normals.

## Next steps

Try the [practice questions](/resources/a-level-maths-9709-pure-mathematics-2-differentiation-practice/), then check your AS readiness with the free [AS diagnostic](/practice/9709/diagnostic/as/) or the [9709 self-check bank](/practice/9709/). For eˣ and ln x themselves, see the [logarithms and exponentials revision notes](/resources/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials-revision-notes/). A Level candidates meet this content again, with tan⁻¹ x added, in the [Pure Mathematics 3 revision notes](/resources/a-level-maths-9709-pure-mathematics-3-revision-notes/).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--02-gradient-function.webp" width="900" height="1110" alt="Two graphs aligned on the same x values. Top: the cubic f(x) = x cubed minus 3x squared minus 9x plus 4, rising to a maximum (minus 1, 9), falling to a minimum (3, minus 23), then rising. Bottom: its gradient function f dash = 3(x + 1)(x minus 3), a U-shaped parabola crossing zero at x = minus 1 and x = 3. Where f dash is positive f is rising, where negative f is falling, and f dash = 0 at the maximum and minimum." loading="lazy">
  <figcaption>The sign of f′ tells you where f rises or falls, and f′ = 0 at turning points.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--09-implicit-flat-vertical.webp" width="900" height="1084" alt="The tilted ellipse x squared minus xy plus y squared = 12, drawn from its equation. Implicit differentiation gives dy/dx = (y minus 2x) over (2y minus x). The numerator is zero when y = 2x, giving horizontal tangents (teal) at (2, 4) and (minus 2, minus 4). The denominator is zero when x = 2y, giving vertical tangents (copper) at (4, 2) and (minus 4, minus 2)." loading="lazy">
  <figcaption>Horizontal tangents occur where the numerator of dy/dx is zero and vertical tangents where the denominator is zero.</figcaption>
</figure>


## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus, for exams in 2026 and 2027 (Version 4), Cambridge University Press & Assessment. Topic 2, Pure Mathematics 2 (for Paper 2): section 2.4 Differentiation.
