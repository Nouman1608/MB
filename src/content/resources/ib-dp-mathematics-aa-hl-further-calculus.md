---
title: "IB DP Mathematics: Analysis and Approaches -- Limits, further differentiation and integration, differential equations and Maclaurin series (HL) Study Guide"
seoTitle: "IB Maths AA HL Further Calculus Study Guide"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Limits, further differentiation and integration, differential equations and Maclaurin series (HL)"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5.12
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-12"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-13"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-14"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-15"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-16"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-17"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-18"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-19"
description: "Learn IB DP Maths AA HL further calculus from scratch: limits, l'Hôpital, further integration, differential equations and Maclaurin series."
author: "marlbridge-academic-team"
publishedDate: 2026-09-27
featured: false
---

This study guide teaches the HL further calculus unit of IB Diploma Programme Mathematics: Analysis and Approaches from scratch. It is aligned to the IB *Mathematics: analysis and approaches guide*, first assessment 2021, and covers syllabus sections 5.12–5.19. All of this content is HL only (AHL). It follows the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so it applies to the May and November 2026, 2027 and 2028 HL sessions.

It assumes the SL calculus in the [AA calculus study guide](/resources/ib-dp-mathematics-aa-calculus/) and the function work in the [AA functions study guide](/resources/ib-dp-mathematics-aa-functions/). When you have worked through it, use the [further calculus revision notes](/resources/ib-dp-mathematics-aa-hl-further-calculus-revision-notes/) and the [further calculus practice questions](/resources/ib-dp-mathematics-aa-hl-further-calculus-practice/). For the whole course, see the [IB DP Maths AA course hub](/boards/ib/ib-dp/mathematics-analysis-and-approaches/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-analysis-and-approaches/).

## What this unit covers

| Section | What you must be able to do | SL/HL |
|---|---|---|
| 5.12 | Understand continuity, differentiability and limits informally; differentiate polynomials from first principles; use higher derivatives | HL only |
| 5.13 | Evaluate limits of the forms 0/0 and ∞/∞ with l'Hôpital's rule (repeated if needed) or Maclaurin series | HL only |
| 5.14 | Implicit differentiation, related rates of change, optimisation (including end-point optima) | HL only |
| 5.15 | Differentiate tan x, sec x, cosec x, cot x, aˣ, logₐ x, arcsin x, arccos x, arctan x; integrate their derivatives; use partial fractions | HL only |
| 5.16 | Integration by substitution and by parts, including repeated parts | HL only |
| 5.17 | Area between a curve and the y-axis; volumes of revolution about either axis | HL only |
| 5.18 | Euler's method; separable, homogeneous and integrating-factor differential equations | HL only |
| 5.19 | Maclaurin series of standard functions and series built from them | HL only |

HL Paper 1 allows no technology; Papers 2 and 3 require it. Almost everything here must be possible by hand. Your GDC is for evaluating definite integrals and volumes, running Euler's method over many steps, and solving equations such as N(t) = 240.

## 5.12 Limits and first principles

A function is continuous at a point if its graph has no break there, and differentiable if it also has no sharp corner. The guide says you will not be asked to test for either. A sequence or expression converges if it approaches a finite limit and diverges otherwise; for example (0.5)ⁿ → 0, which is why a geometric series with |r| < 1 has a sum S∞.

The derivative from first principles is

f′(x) = lim (h→0) [f(x + h) − f(x)] / h.

The guide limits this to polynomials.

### Worked example 1

Find f′(x) from first principles for f(x) = 2x² − 3x.

```
f(x + h) − f(x) = 2(x + h)² − 3(x + h) − 2x² + 3x
                = 4xh + 2h² − 3h
[f(x + h) − f(x)]/h = 4x + 2h − 3
f′(x) = lim (h→0) (4x + 2h − 3) = 4x − 3
```

Divide by h **before** letting h → 0, or you get 0/0.

Higher derivatives are written dⁿy/dxⁿ or f⁽ⁿ⁾(x). For y = xeˣ you get y′ = (x + 1)eˣ, y″ = (x + 2)eˣ, y‴ = (x + 3)eˣ, which suggests f⁽ⁿ⁾(x) = (x + n)eˣ. That kind of pattern is proved by mathematical induction.

## 5.13 l'Hôpital's rule

If lim f(x)/g(x) as x → a (or x → ∞) has the form 0/0 or ∞/∞, then

lim f(x)/g(x) = lim f′(x)/g′(x),

provided the new limit exists. If the new limit is still 0/0 or ∞/∞, apply the rule again. Differentiate top and bottom **separately** — this is not the quotient rule. The standard result lim (θ→0) (sin θ)/θ = 1 follows in one step.

### Worked example 2

Find lim (x→0) (1 − cos 2x)/x².

```
Form 0/0. Differentiate: (2 sin 2x)/(2x)      still 0/0
Again:                   (4 cos 2x)/2 → 4/2 = 2
```

With Maclaurin series instead: 1 − cos 2x = 1 − (1 − 2x² + …) = 2x² − …, so the quotient → **2**.

Limits at infinity link to horizontal asymptotes: lim (x→∞) (ln x)/x has form ∞/∞, and one application gives (1/x)/1 → 0.

## 5.14 Implicit differentiation, related rates, optimisation

When y is not given explicitly, differentiate every term with respect to x and use the chain rule on terms in y: d/dx(y²) = 2y dy/dx, and d/dx(xy) = y + x dy/dx.

### Worked example 3

Find the gradient of x² + xy + y² = 7 at (1, 2).

```
2x + y + x(dy/dx) + 2y(dy/dx) = 0
dy/dx = −(2x + y)/(x + 2y) = −4/5 at (1, 2)
```

**Related rates.** Write a formula linking the quantities, differentiate with respect to t, then substitute. A spherical balloon gains volume at 50 cm³ s⁻¹. Since V = (4/3)πr³, dV/dt = 4πr² dr/dt. When r = 5, 50 = 100π dr/dt, so dr/dt = 1/(2π) ≈ 0.159 cm s⁻¹.

**Optimisation.** Find stationary points, then check the ends of the allowed interval. If A = x(20 − 2x) with 0 ≤ x ≤ 4, the stationary point x = 5 lies outside the domain, so the maximum is at the end point: A(4) = 48.

## 5.15 Further derivatives and integrals

| f(x) | f′(x) |
|---|---|
| tan x | sec²x |
| sec x | sec x tan x |
| cosec x | −cosec x cot x |
| cot x | −cosec²x |
| aˣ | aˣ ln a |
| logₐ x | 1/(x ln a) |
| arcsin x | 1/√(1 − x²) |
| arccos x | −1/√(1 − x²) |
| arctan x | 1/(1 + x²) |

Reverse each row for integrals, and use composites with a linear function ax + b by dividing by a. For example ∫ sec²(3x − 1) dx = (1/3) tan(3x − 1) + C. An indefinite integral is a family of curves, one for each value of C.

### Worked example 4

Find ∫ 1/(x² + 6x + 13) dx.

```
x² + 6x + 13 = (x + 3)² + 4
∫ 1/((x + 3)² + 2²) dx = (1/2) arctan((x + 3)/2) + C
```

**Partial fractions** rearrange a rational integrand. For ∫ (x + 7)/(x² − x − 2) dx, write (x + 7)/((x − 2)(x + 1)) = A/(x − 2) + B/(x + 1). Cover-up at x = 2 gives A = 3; at x = −1 gives B = −2. So the integral is 3 ln|x − 2| − 2 ln|x + 1| + C.

## 5.16 Substitution and parts

**Substitution.** The guide says a substitution will be given unless the integral is of the form ∫ k g′(x) f(g(x)) dx. Change the limits as well as the variable.

Find ∫₀³ x/√(x + 1) dx using u = x + 1. Then x = u − 1, dx = du, and the limits become 1 and 4:

```
∫₁⁴ (u − 1)/√u du = [(2/3)u^(3/2) − 2u^(1/2)]₁⁴
                   = (16/3 − 4) − (2/3 − 2) = 8/3
```

**Parts.** ∫ u (dv/dx) dx = uv − ∫ v (du/dx) dx. Choose u to be the factor that gets simpler when differentiated (x, x², ln x, arcsin x).

### Worked example 5

Find ∫ x e³ˣ dx. Take u = x, dv/dx = e³ˣ, so v = (1/3)e³ˣ:

```
∫ x e³ˣ dx = (x/3)e³ˣ − ∫ (1/3)e³ˣ dx = (x/3)e³ˣ − (1/9)e³ˣ + C
```

For ∫ ln x dx or ∫ arcsin x dx, write the integrand as 1 × ln x and differentiate the logarithm. Repeated parts handles x² eˣ (parts twice). For ∫ eˣ cos x dx, parts twice returns the original integral I, so solve for it: I = (1/2)eˣ(sin x + cos x) + C.

## 5.17 Areas with the y-axis and volumes of revolution

Area between a curve and the y-axis from y = a to y = b is ∫ₐᵇ |x| dy. Volumes of revolution through 2π:

- about the x-axis: V = π ∫ₐᵇ y² dx
- about the y-axis: V = π ∫ₐᵇ x² dy

### Worked example 6

For y = x³ between y = 1 and y = 8, x = y^(1/3). The area to the y-axis is ∫₁⁸ y^(1/3) dy = (3/4)(16 − 1) = 45/4. Rotating the same region about the y-axis gives π ∫₁⁸ y^(2/3) dy = (3π/5)(32 − 1) = 93π/5. Rotating y = 1/x, 1 ≤ x ≤ 3, about the x-axis gives π ∫₁³ x⁻² dx = 2π/3.

## 5.18 Differential equations

**Euler's method** for dy/dx = f(x, y) uses xₙ₊₁ = xₙ + h and yₙ₊₁ = yₙ + h f(xₙ, yₙ). For dy/dx = x + y, y(0) = 1, h = 0.1:

| n | xₙ | yₙ |
|---|---|---|
| 0 | 0 | 1 |
| 1 | 0.1 | 1.1 |
| 2 | 0.2 | 1.22 |
| 3 | 0.3 | 1.362 |

The exact value y(0.3) ≈ 1.40, so Euler underestimates here. A smaller h improves accuracy.

**Variables separable.** Rearrange to g(y) dy = f(x) dx and integrate both sides. The logistic equation dn/dt = kn(a − n) needs partial fractions.

### Worked example 7

Solve dn/dt = 0.001n(500 − n), n(0) = 50.

```
1/(n(500 − n)) = (1/500)(1/n + 1/(500 − n))
(1/500) ln(n/(500 − n)) = 0.001t + c
ln(n/(500 − n)) = 0.5t + C;  t = 0 gives C = ln(50/450) = −ln 9
n/(500 − n) = e^(0.5t)/9
n = 500/(1 + 9e^(−0.5t))
```

**Homogeneous equations** dy/dx = f(y/x): substitute y = vx, so dy/dx = v + x dv/dx, then separate. For dy/dx = (x² + y²)/(xy), y(1) = 2, you get v + x dv/dx = 1/v + v, so v dv = dx/x, v²/2 = ln x + c and, with c = 2, **y² = x²(2 ln x + 4)**.

**Integrating factor.** For y′ + P(x)y = Q(x), multiply by I(x) = e^(∫P dx); the left side becomes d/dx(I y). For y′ + (2/x)y = 3x, x > 0: I = x², so (x²y)′ = 3x³, x²y = (3/4)x⁴ + C and y = (3/4)x² + C/x². With y(1) = 1, C = 1/4.

## 5.19 Maclaurin series

f(x) = f(0) + x f′(0) + (x²/2!) f″(0) + (x³/3!) f‴(0) + …

The expansions you need:

- eˣ = 1 + x + x²/2! + x³/3! + …
- sin x = x − x³/3! + x⁵/5! − …
- cos x = 1 − x²/2! + x⁴/4! − …
- arctan x = x − x³/3 + x⁵/5 − …
- ln(1 + x) = x − x²/2 + x³/3 − …
- (1 + x)ᵖ = 1 + px + p(p − 1)x²/2! + …, p ∈ ℚ; for example √(1 + x) = 1 + x/2 − x²/8 + …

Build new series by substitution (x → x² gives e^(x²) = 1 + x² + x⁴/2 + …), by multiplying, differentiating or integrating term by term.

### Worked example 8

Find eˣ sin x up to x³.

```
(1 + x + x²/2 + …)(x − x³/6 + …) = x + x² + (1/2 − 1/6)x³ + …
                                 = x + x² + x³/3 + …
```

**From a differential equation.** If dy/dx = 2x − y², y(0) = 1, differentiate repeatedly: y′(0) = −1; y″ = 2 − 2yy′ gives y″(0) = 4; y‴ = −2(y′)² − 2yy″ gives y‴(0) = −10. So y ≈ 1 − x + 2x² − (5/3)x³.

## Common errors

- Using the quotient rule inside l'Hôpital's rule, or applying the rule when the limit is not 0/0 or ∞/∞.
- Forgetting dy/dx on terms in y, especially products like xy.
- Missing the end point in an optimisation problem on a closed interval.
- Writing ∫ 1/(x² + 9) dx = arctan(x/3) + C: the factor 1/3 is missing.
- Leaving old limits after a substitution.
- Using π ∫ y² dx for a rotation about the y-axis.
- Dropping the constant before exponentiating in a separable equation.
- Using the wrong sign in P(x) when forming the integrating factor.

Test yourself with the [further calculus practice questions](/resources/ib-dp-mathematics-aa-hl-further-calculus-practice/), and see the [AA exam preparation guide](/resources/ib-dp-mathematics-analysis-and-approaches-exam-preparation/) and [AA syllabus guide](/resources/ib-dp-mathematics-analysis-and-approaches-syllabus-guide/) for the course structure.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020).
