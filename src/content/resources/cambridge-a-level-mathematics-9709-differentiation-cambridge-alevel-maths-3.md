---
title: "Cambridge A Level Mathematics (9709): Differentiation (Pure Mathematics 3)"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 3 – Pure Mathematics 3"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 3.4
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-3-cambridge-alevel"
    subtopic: "differentiation-cambridge-alevel-maths-3"
description: "Study guide to Cambridge 9709 Paper 3 section 3.4 Differentiation: tan⁻¹ x, products, quotients, parametric and implicit curves, tangents and normals."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers section **3.4 Differentiation** of Pure Mathematics 3 in the Cambridge International AS & A Level Mathematics 9709 syllabus for 2026 and 2027, examined on Paper 3 (1 hour 50 minutes, 75 marks). The [Pure Mathematics 3 study guide](/resources/a-level-maths-9709-pure-mathematics-3/) shows one quotient and one implicit example. This page covers the full section with more demanding cases: the derivative of tan⁻¹ x, stationary points of products and quotients, parametric tangents and normals, and implicit curves where you must find points with a given gradient. Afterwards use the [3.4 revision notes](/resources/cambridge-a-level-mathematics-9709-differentiation-cambridge-alevel-maths-3-revision-notes/) and the [3.4 practice questions](/resources/cambridge-a-level-mathematics-9709-differentiation-cambridge-alevel-maths-3-practice/).

## What section 3.4 asks for

| Syllabus statement | In practice |
|---|---|
| Use the derivatives of eˣ, ln x, sin x, cos x, tan x and tan⁻¹ x, with constant multiples, sums, differences and composites | Apply the chain rule to any of these; the derivatives of sin⁻¹ x and cos⁻¹ x are not required |
| Differentiate products and quotients | Product and quotient rules, often followed by finding stationary points |
| First derivative of a function defined parametrically or implicitly | Find dy/dx, then use it for tangents, normals and points with a given gradient |

The content matches Pure Mathematics 2 section 2.4 except for **tan⁻¹ x**, which is new at Paper 3; the [Paper 2 differentiation guide](/resources/a-level-maths-9709-pure-mathematics-2-differentiation/) teaches the shared rules from the start. Paper 3 questions often combine this section with logarithms, trigonometry or numerical methods.

## The standard derivatives and the chain rule

| f(x) | f′(x) | With the chain rule |
|---|---|---|
| eˣ | eˣ | e^(g(x)) → g′(x)e^(g(x)) |
| ln x | 1/x | ln g(x) → g′(x)/g(x) |
| sin x | cos x | sin g(x) → g′(x) cos g(x) |
| cos x | −sin x | cos g(x) → −g′(x) sin g(x) |
| tan x | sec²x | tan g(x) → g′(x) sec² g(x) |
| tan⁻¹ x | 1/(1 + x²) | tan⁻¹ g(x) → g′(x)/(1 + g(x)²) |

All are in MF19. Trigonometric derivatives assume x is in **radians**.

*Worked example 1.* Differentiate (a) tan⁻¹(2x) and (b) x tan⁻¹ x.

```text
(a) d/dx tan⁻¹(2x) = 2/(1 + (2x)²) = 2/(1 + 4x²)
(b) product rule: tan⁻¹ x × 1 + x × 1/(1 + x²) = tan⁻¹ x + x/(1 + x²)
```

In (a), the common slip is writing 2/(1 + 2x²): the whole inner function is squared.

## Products and quotients

```text
Product:   d(uv)/dx = u dv/dx + v du/dx
Quotient:  d(u/v)/dx = (v du/dx − u dv/dx)/v²
```

*Worked example 2.* Find the coordinates of the stationary point of y = e^(2x)/(1 + x), x > −1.

```text
u = e^(2x), du/dx = 2e^(2x);  v = 1 + x, dv/dx = 1
dy/dx = [(1 + x)(2e^(2x)) − e^(2x)]/(1 + x)²
      = e^(2x)(2x + 1)/(1 + x)²
e^(2x) > 0, so dy/dx = 0 only when 2x + 1 = 0:  x = −½
y = e^(−1)/(½) = 2/e
Stationary point: (−½, 2/e)
```

Factorising e^(2x) out of the numerator is what makes the equation solvable. The statement "e^(2x) > 0" justifies dividing it out.

*Worked example 3.* Find the exact x-coordinate of the stationary point of y = x² ln(3x).

```text
dy/dx = 2x ln(3x) + x² × (3/(3x)) = 2x ln(3x) + x = x(2 ln(3x) + 1)
x > 0 for ln(3x) to exist, so 2 ln(3x) + 1 = 0
ln(3x) = −½   →   3x = e^(−½)   →   x = (1/3)e^(−½)
```

Note that d/dx ln(3x) = 1/x, because ln(3x) = ln 3 + ln x.

## Parametric differentiation

If x and y are both functions of a parameter t, then dy/dx = (dy/dt) ÷ (dx/dt). This is in MF19.

*Worked example 4.* A curve has parametric equations x = eᵗ cos t, y = eᵗ sin t.

(a) Find the equation of the tangent at the point where t = 0. (b) Find the value of t, with 0 < t < π, at which the tangent is parallel to the y-axis.

```text
dx/dt = eᵗ cos t − eᵗ sin t = eᵗ(cos t − sin t)
dy/dt = eᵗ sin t + eᵗ cos t = eᵗ(sin t + cos t)
dy/dx = (sin t + cos t)/(cos t − sin t)

(a) t = 0: point (1, 0), gradient (0 + 1)/(1 − 0) = 1
    Tangent: y = x − 1
(b) Parallel to the y-axis when dx/dt = 0 and dy/dt ≠ 0:
    cos t = sin t   →   t = π/4
```

For a tangent parallel to the x-axis set dy/dt = 0; for one parallel to the y-axis set dx/dt = 0.

## Implicit differentiation

Differentiate every term with respect to x. A function of y picks up a factor dy/dx: d/dx(y³) = 3y² dy/dx. A product such as xy needs the product rule: d/dx(xy) = y + x dy/dx.

*Worked example 5.* The curve x³ + y³ = 6xy passes through (3, 3).

(a) Find the gradient at (3, 3). (b) Find the exact coordinates of the point, other than the origin, where the tangent is parallel to the x-axis.

```text
3x² + 3y² dy/dx = 6y + 6x dy/dx
dy/dx (3y² − 6x) = 6y − 3x²
dy/dx = (2y − x²)/(y² − 2x)

(a) At (3, 3): (6 − 9)/(9 − 6) = −1

(b) dy/dx = 0 when 2y = x², so y = x²/2. Substitute:
    x³ + x⁶/8 = 3x³   →   x⁶ = 16x³   →   x³ = 16  (x ≠ 0)
    x = ∛16 = 2∛2,   y = x²/2 = 2∛4
```

Setting the numerator to zero gives a relation between x and y. You must substitute back into the curve's equation to find the actual point.

## Tangents and normals

At a point (x₁, y₁) with gradient m, the tangent is y − y₁ = m(x − x₁). The normal is perpendicular, with gradient −1/m. From worked example 4(a), the normal at (1, 0) has gradient −1, so its equation is y = 1 − x.

## Common mistakes

- Writing the derivative of tan⁻¹(2x) as 2/(1 + 2x²).
- Reversing the numerator of the quotient rule: v du/dx comes first.
- Differentiating ln(3x) as 3/x.
- Forgetting the dy/dx on a y-term, or the product rule on xy, in implicit work.
- Using (dx/dt) ÷ (dy/dt) instead of (dy/dt) ÷ (dx/dt).
- Stopping at "2y = x²" without substituting back into the curve.
- Using degrees in trigonometric calculus.

## Exam technique

- **Find the exact coordinates**: keep e, ln and surds; a decimal answer loses the accuracy mark.
- **Show that dy/dx = …**: give each differentiated term before rearranging, because the rearrangement is checked against your terms.
- **Hence**: if the question gives dy/dx, use it in the next part even if your own attempt differs.
- **Normal** means gradient −1/m; state the gradient you are using before writing the equation.
- When dividing by a factor such as e^(2x) or cos t, say why it is non-zero.

## Frequently asked questions

**Do I need the derivatives of sin⁻¹ x and cos⁻¹ x for 9709 Paper 3?**
No. The syllabus requires tan⁻¹ x but states that the derivatives of sin⁻¹ x and cos⁻¹ x are not required.

**How do I find where a parametric curve has a vertical tangent?**
Set dx/dt = 0 and check that dy/dt is not also zero at that value of t.

**What changes in implicit differentiation when a term is xy?**
Use the product rule: d/dx(xy) = y + x dy/dx. Treating it as just y or x dy/dx loses the method mark.

## Where to go next

- [3.4 revision notes](/resources/cambridge-a-level-mathematics-9709-differentiation-cambridge-alevel-maths-3-revision-notes/)
- [3.4 practice questions](/resources/cambridge-a-level-mathematics-9709-differentiation-cambridge-alevel-maths-3-practice/)
- Reverse the process in [3.5 Integration](/resources/cambridge-a-level-mathematics-9709-integration-cambridge-alevel-maths-3/)

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus for examination in 2026 and 2027, Cambridge University Press & Assessment. Topic 3, Pure Mathematics 3 (for Paper 3): section 3.4 Differentiation.
