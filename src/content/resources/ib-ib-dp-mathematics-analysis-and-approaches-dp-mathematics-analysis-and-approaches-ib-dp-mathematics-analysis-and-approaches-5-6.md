---
title: "IB DP Mathematics: Analysis and Approaches (AA): 5.6 Standard derivatives and the chain, product and quotient rules"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Topic 5 – Calculus"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5.06
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-6"
description: "Study guide to IB DP Maths AA section 5.6: derivatives of xⁿ, sin x, cos x, eˣ and ln x, choosing and combining the chain, product and quotient rules."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Section 5.6 of IB DP Mathematics: Analysis and Approaches (first assessment 2021) covers the
**derivatives of xⁿ (n ∈ ℚ), sin x, cos x, eˣ and ln x**, the **differentiation of a sum and a
multiple** of these functions, the **chain rule** for composite functions, and the **product and
quotient rules**. It is SL content, examined at SL and HL, and it is the toolkit behind almost every
calculus question in the course.

The [differentiation study guide](/resources/ib-dp-mathematics-aa-sl-differentiation/) introduces
each rule with one example. This page concentrates on what students find hardest: deciding which rule
a function needs, combining rules in one derivative, and simplifying the result. Afterwards, use the
[5.6 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-6-revision-notes/)
and the
[5.6 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-6-practice/).

## The standard derivatives

| f(x) | f′(x) | Note |
|---|---|---|
| xⁿ, n ∈ ℚ | nxⁿ⁻¹ | includes roots: √x = x^(1/2) |
| sin x | cos x | x in radians |
| cos x | −sin x | the minus sign is the common slip |
| eˣ | eˣ | the only function here equal to its own derivative |
| ln x | 1/x | for x > 0 |

Sums and constant multiples are differentiated term by term, as in 5.3.

### Worked example 1: standard derivatives together

Differentiate y = 4√x − 3/∛x + 2 cos x − 5eˣ + ln x.

```
y = 4x^(1/2) − 3x^(−1/3) + 2 cos x − 5eˣ + ln x
dy/dx = 2x^(−1/2) + x^(−4/3) − 2 sin x − 5eˣ + 1/x
```

For −3x^(−1/3): multiply by −1/3 to get +1, and the power drops to −4/3.

## The three rules

**Chain rule** (a function of a function): if y = f(u) and u = g(x), then

```
dy/dx = (dy/du) × (du/dx)
```

**Product rule** (two functions multiplied): if y = uv, then

```
dy/dx = u (dv/dx) + v (du/dx)
```

**Quotient rule** (one function divided by another): if y = u/v, then

```
dy/dx = [v (du/dx) − u (dv/dx)] / v²
```

All three are in the formula booklet; the skill is recognising which one a function needs.

## Choosing the rule

Ask what the **last operation** would be if you evaluated the function for a number.

| Function | Last operation | Rule |
|---|---|---|
| e^(x²) | exponential of x² | chain |
| (3x² − 1)⁵ | fifth power of a bracket | chain |
| x³ cos 2x | multiplication | product (with chain for cos 2x) |
| eˣ/(x + 1) | division | quotient |
| cos³x = (cos x)³ | cube of cos x | chain |
| x√(1 + 4x²) | multiplication | product, with chain inside |

Before using a rule, check whether **simplifying** removes the need for it. (x² + 1)/x is
x + x⁻¹, so no quotient rule is needed. ln(x³) = 3 ln x, with derivative 3/x. ln(5x) = ln 5 + ln x,
with derivative 1/x.

## Worked examples

### Worked example 2: the chain rule

```
y = e^(x²):        u = x², du/dx = 2x       dy/dx = 2x e^(x²)
y = (3x² − 1)⁵:    u = 3x² − 1, du/dx = 6x  dy/dx = 5(3x² − 1)⁴ × 6x = 30x(3x² − 1)⁴
y = cos³x:         u = cos x, du/dx = −sin x dy/dx = 3cos²x × (−sin x) = −3 sin x cos²x
```

In each case: differentiate the outer function, keep the inside unchanged, multiply by the derivative
of the inside.

### Worked example 3: product rule with a chain inside

Differentiate y = x³ cos 2x.

```
u = x³,      du/dx = 3x²
v = cos 2x,  dv/dx = −2 sin 2x      (chain rule)
dy/dx = x³(−2 sin 2x) + cos 2x (3x²)
      = x²(3 cos 2x − 2x sin 2x)
```

Factorising the common x² is good practice: it often makes a later step, such as solving
dy/dx = 0, possible.

### Worked example 4: the quotient rule

Differentiate y = eˣ/(x + 1), x ≠ −1.

```
u = eˣ,     du/dx = eˣ
v = x + 1,  dv/dx = 1
dy/dx = [(x + 1)eˣ − eˣ(1)] / (x + 1)²
      = x eˣ / (x + 1)²
```

Since eˣ > 0 and (x + 1)² > 0, the gradient has the sign of x, so the curve has a stationary point
only at x = 0.

### Worked example 5: simplifying a combined derivative

Differentiate y = x√(1 + 4x²) and write the answer as a single fraction.

```
u = x,                 du/dx = 1
v = (1 + 4x²)^(1/2),   dv/dx = (1/2)(1 + 4x²)^(−1/2) × 8x = 4x/√(1 + 4x²)
dy/dx = x × 4x/√(1 + 4x²) + √(1 + 4x²)
      = [4x² + (1 + 4x²)] / √(1 + 4x²)
      = (1 + 8x²)/√(1 + 4x²)
```

To combine, multiply √(1 + 4x²) by √(1 + 4x²)/√(1 + 4x²), giving (1 + 4x²) over the common
denominator.

### Worked example 6: using the derivative

Find the coordinates of the stationary point of y = x e^(−2x).

```
u = x, du/dx = 1;   v = e^(−2x), dv/dx = −2e^(−2x)
dy/dx = e^(−2x) − 2x e^(−2x) = e^(−2x)(1 − 2x)
e^(−2x) is never zero, so 1 − 2x = 0 and x = 1/2
y = (1/2)e^(−1) = 1/(2e)
Stationary point: (1/2, 1/(2e))
```

## Common mistakes

- Forgetting the inner derivative: d/dx sin(x²) is 2x cos(x²), not cos(x²).
- Differentiating a product by multiplying the two derivatives: d/dx(x eˣ) is not 1 × eˣ.
- Reversing the quotient rule numerator, which changes the sign.
- Squaring the wrong thing: the quotient rule denominator is v², not (dv/dx)².
- Writing d/dx(cos x) = sin x.
- Using degrees: the derivatives of sin x and cos x hold only in radians.
- Treating ln(x + 3) as ln x + ln 3.

## Exam technique and command words

- **Find** dy/dx or **differentiate**: state u, v and their derivatives before applying a rule; each
  line can earn marks.
- **Show that** f′(x) equals a given form: simplify step by step until the expression matches exactly.
- **Hence**: use the simplified derivative, for example to solve f′(x) = 0 or to find a tangent.
- On Paper 1 all of this is by hand. On Paper 2 a GDC can check a derivative value at a point, but
  questions asking for f′(x) need the algebra.

## Where to go next

Condense the section with the
[5.6 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-6-revision-notes/),
then try the
[5.6 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-6-practice/).
For how these derivatives are used to find tangents, see the
[5.4 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-4/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches
guide*, first assessment 2021. Section SL 5.6: derivative of xⁿ (n ∈ ℚ), sin x, cos x, eˣ and ln x;
differentiation of a sum and a multiple of these functions; the chain rule for composite functions;
the product and quotient rules.
