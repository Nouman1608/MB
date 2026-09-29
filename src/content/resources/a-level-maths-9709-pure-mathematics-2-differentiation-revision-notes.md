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
reviewStatus: "reviewed"
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

## Next steps

Try the [practice questions](/resources/a-level-maths-9709-pure-mathematics-2-differentiation-practice/), then check your AS readiness with the free [AS diagnostic](/practice/9709/diagnostic/as/) or the [9709 self-check bank](/practice/9709/). For eˣ and ln x themselves, see the [logarithms and exponentials revision notes](/resources/a-level-maths-9709-pure-mathematics-2-logarithms-and-exponentials-revision-notes/). A Level candidates meet this content again, with tan⁻¹ x added, in the [Pure Mathematics 3 revision notes](/resources/a-level-maths-9709-pure-mathematics-3-revision-notes/).

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus, for exams in 2026 and 2027 (Version 4), Cambridge University Press & Assessment. Topic 2, Pure Mathematics 2 (for Paper 2): section 2.4 Differentiation.
