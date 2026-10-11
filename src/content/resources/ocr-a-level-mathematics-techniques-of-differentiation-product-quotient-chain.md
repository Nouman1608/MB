---
title: "OCR A Level Mathematics A: Differentiation techniques and differential equations (H240)"
seoTitle: "OCR A Level Maths Differentiation Techniques Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Techniques of differentiation: product, quotient, chain rule, implicit, parametric and differential equations"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 118
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-ocr-alevel-maths"
    subtopic: "differentiation-ocr-alevel-maths"
description: "Product, quotient and chain rules, connected rates, implicit and parametric differentiation and modelling equations, with worked examples for OCR H240."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide teaches differentiation techniques for the OCR A Level Mathematics A course (H240), written against specification Version 3.1 (August 2026). It teaches content statements 1.07q, 1.07r, 1.07s and 1.07t in Pure Mathematics section 1.07, Differentiation. All four are listed under Stage 2 only, so treat them as **A Level only**: AS Level (H230) learners do not need them.

Gradients, first principles, standard derivatives, tangents, stationary points and increasing or decreasing functions are covered on other pages, so this guide assumes you can already differentiate xⁿ, eᵏˣ, ln x, sin kx, cos kx and tan kx. The [OCR A Level Mathematics hub](/boards/ocr/a-level/mathematics/) lists the rest of the course, and the [printable checklist](/checklists/ocr/a-level/mathematics/) lets you tick off skills. Then try the [revision notes](/resources/ocr-a-level-mathematics-techniques-of-differentiation-product-quotient-chain-revision-notes/) and the [practice questions](/resources/ocr-a-level-mathematics-techniques-of-differentiation-product-quotient-chain-practice/), or take a [free 10-minute diagnostic](/diagnostics/) first. Related course pages are the [Pure Mathematics study guide](/resources/ocr-a-level-mathematics-pure-mathematics/) and the [Pure Mathematics practice set](/resources/ocr-a-level-mathematics-pure-practice/).

## What you must be able to do

| Ref | Statement (A Level only) | Section below |
|---|---|---|
| 1.07q | Differentiate using the product rule and the quotient rule | Product and quotient rules |
| 1.07r | Differentiate using the chain rule, including connected rates of change and inverse functions | Chain rule, connected rates, inverse functions |
| 1.07s | Differentiate functions and relations defined implicitly or parametrically (first derivative only); find the gradient at a point and use it for tangents and normals | Implicit and parametric differentiation |
| 1.07t | Construct simple differential equations in pure mathematics and in context (kinematics, population growth, price and demand are the contexts the specification names) | Constructing differential equations |

## Product and quotient rules (1.07q)

Use the **product rule** when two functions of x are multiplied. Write y = uv, where u and v are both functions of x.

```
dy/dx = u (dv/dx) + v (du/dx)
```

Use the **quotient rule** when one function is divided by another. Write y = u/v.

```
dy/dx = ( v (du/dx) − u (dv/dx) ) / v²
```

The order matters in the quotient rule because of the minus sign. Many people remember "bottom times derivative of top, minus top times derivative of bottom, over bottom squared".

**Worked example 1.** Differentiate y = x³ e²ˣ.

Let u = x³ and v = e²ˣ. Then du/dx = 3x² and dv/dx = 2e²ˣ.

```
dy/dx = x³ · 2e²ˣ + e²ˣ · 3x²
      = x² e²ˣ (2x + 3)
```

Taking out the common factor x² e²ˣ makes the answer easier to use later, for example when you set dy/dx = 0.

**Worked example 2.** Differentiate y = √x cos 4x.

Let u = x^(1/2) and v = cos 4x. Then du/dx = (1/2)x^(−1/2) and dv/dx = −4 sin 4x.

```
dy/dx = (1/2)x^(−1/2) cos 4x − 4√x sin 4x
```

**Worked example 3.** Differentiate y = (4x + 1)/(x² + 3).

Let u = 4x + 1 and v = x² + 3. Then du/dx = 4 and dv/dx = 2x.

```
dy/dx = ( (x² + 3)(4) − (4x + 1)(2x) ) / (x² + 3)²
      = ( 4x² + 12 − 8x² − 2x ) / (x² + 3)²
      = (12 − 2x − 4x²) / (x² + 3)²
```

**Worked example 4.** Differentiate y = ln x / x².

Let u = ln x and v = x². Then du/dx = 1/x and dv/dx = 2x.

```
dy/dx = ( x² (1/x) − ln x (2x) ) / x⁴
      = ( x − 2x ln x ) / x⁴
      = (1 − 2 ln x) / x³
```

Cancelling a common factor of x is the step people forget. An alternative is to write y = x⁻² ln x and use the product rule.

## Chain rule, connected rates and inverse functions (1.07r)

If y is a function of u and u is a function of x, then

```
dy/dx = (dy/du) × (du/dx)
```

In words: differentiate the outer function, leave the inside alone, then multiply by the derivative of the inside. Identify the inside function first.

**Worked example 5.** Differentiate y = (3x² + 1)⁵. Let u = 3x² + 1, so y = u⁵.

```
dy/dx = 5u⁴ × 6x = 30x (3x² + 1)⁴
```

**Worked example 6.** Differentiate (a) y = e^(sin 2x), (b) y = ln(x² + 4x), (c) y = sin² 3x.

```
(a) u = sin 2x:      dy/dx = e^(sin 2x) × 2 cos 2x
(b) u = x² + 4x:     dy/dx = (2x + 4)/(x² + 4x)
(c) y = (sin 3x)²:   dy/dx = 2 sin 3x × 3 cos 3x = 6 sin 3x cos 3x
```

Part (c) needs the chain rule twice, once for the square and once for the 3x. The double angle formula turns the answer into 3 sin 6x if you want a simpler form.

**Worked example 7 (chain rule with product rule).** Differentiate y = x²√(1 + 4x).

```
dy/dx = x² × (1/2)(1 + 4x)^(−1/2) × 4 + 2x √(1 + 4x)
      = 2x² / √(1 + 4x) + 2x √(1 + 4x)
      = ( 2x² + 2x(1 + 4x) ) / √(1 + 4x)
      = 2x (1 + 5x) / √(1 + 4x)
```

### Connected rates of change

When two quantities both change with time t, the chain rule links their rates:

```
dV/dt = (dV/dr) × (dr/dt)
```

**Method.** (1) Write down what you are given and what you want as derivatives with respect to t. (2) Write a formula connecting the quantities. (3) Differentiate it with respect to the variable that links them. (4) Substitute. Keep the sign: a decreasing quantity has a negative rate.

**Worked example 8.** A cube of ice melts so that its volume decreases at 3 cm³ per minute. Find the rate at which its surface area is decreasing when the edge is 6 cm.

Let the edge be x cm. Then V = x³ and S = 6x². Given dV/dt = −3.

```
dV/dx = 3x²,  so  −3 = 3x² (dx/dt)
At x = 6:     dx/dt = −3/108 = −1/36
dS/dt = (dS/dx)(dx/dt) = 12x (dx/dt) = 72 × (−1/36) = −2
```

The surface area is decreasing at 2 cm² per minute.

### Inverse functions

The two derivatives of a function and its inverse are reciprocals:

```
dy/dx = 1 / (dx/dy)
```

This is useful when x is given as a function of y that you cannot rearrange.

**Worked example 9.** Given x = y³ + 2y, find dy/dx when y = 1.

```
dx/dy = 3y² + 2 = 5 when y = 1
dy/dx = 1/5
```

## Implicit and parametric differentiation (1.07s)

### Implicit differentiation

A relation is **implicit** when y is not written as "y = a function of x". Differentiate every term with respect to x. A term in y needs the chain rule: d/dx(yⁿ) = n yⁿ⁻¹ (dy/dx). A product such as xy needs the product rule. Then collect the dy/dx terms on one side.

**Worked example 10.** The curve x² + 3xy − y² = 3 passes through P(1, 2). Find the equation of the tangent and the normal at P.

Differentiate each term with respect to x:

```
2x + 3y + 3x (dy/dx) − 2y (dy/dx) = 0
dy/dx (3x − 2y) = −(2x + 3y)
dy/dx = −(2x + 3y)/(3x − 2y)
```

At P, dy/dx = −(2 + 6)/(3 − 4) = 8. The tangent is y − 2 = 8(x − 1). The normal has gradient −1/8, so y − 2 = −(1/8)(x − 1), which rearranges to x + 8y − 17 = 0.

**Worked example 11.** Find dy/dx for x e²ʸ = y + 1, then evaluate it at (1, 0).

```
e²ʸ + x · 2e²ʸ (dy/dx) = dy/dx
dy/dx (1 − 2x e²ʸ) = e²ʸ
dy/dx = e²ʸ / (1 − 2x e²ʸ)
At (1, 0): 1/(1 − 2) = −1
```

### Parametric differentiation

If x = f(t) and y = g(t), the chain rule gives

```
dy/dx = (dy/dt) / (dx/dt)
```

Find both derivatives with respect to t, divide, and simplify. Leave the gradient in terms of t until you are given a value of t. To get a point on the curve, substitute t into both x and y.

**Worked example 12.** A curve has x = t² + 2t and y = t³ − 3t. Find the normal to the curve at t = 2.

```
dx/dt = 2t + 2,   dy/dt = 3t² − 3
dy/dx = 3(t − 1)(t + 1) / (2(t + 1)) = 3(t − 1)/2    (t ≠ −1)
At t = 2: x = 8, y = 2, gradient = 3/2
```

The normal has gradient −2/3, so y − 2 = −(2/3)(x − 8), which gives 2x + 3y − 22 = 0.

**Worked example 13.** A curve has x = t + 1/t and y = t − 1/t for t > 0. Find dy/dx.

```
dx/dt = 1 − 1/t² = (t² − 1)/t²,   dy/dt = 1 + 1/t² = (t² + 1)/t²
dy/dx = (t² + 1)/(t² − 1)    (t ≠ 1)
```

At t = 2 the gradient is 5/3.

## Constructing differential equations (1.07t)

A **differential equation** links a quantity to its own rate of change. To construct one, turn each phrase into a derivative and each "proportional to" into a constant k.

| Words | Equation |
|---|---|
| "P grows at a rate proportional to P" | dP/dt = kP, with k > 0 |
| "m decays at a rate proportional to m" | dm/dt = −km, with k > 0 |
| "θ falls at a rate proportional to its excess over 20" | dθ/dt = −k(θ − 20) |
| "the gradient at (x, y) is twice the y-coordinate" | dy/dx = 2y |
| "demand D falls as price p rises, at a rate proportional to D" | dD/dp = −kD |
| "inflow 5 units/min, outflow proportional to V" | dV/dt = 5 − kV |

Look for the independent variable (usually time) and the sign of the rate. Rates "of change with respect to p" use dp in the denominator. "Net rate" means inflow minus outflow. Unknown constants such as k are found from data given in the question.

**Worked example 14.** A parachutist falls with velocity v m/s. The acceleration is 6 − 0.2v. Write a differential equation and show that v = 30(1 − e^(−0.2t)) satisfies it.

Acceleration is dv/dt, so dv/dt = 6 − 0.2v. Differentiate the proposed solution: dv/dt = 30 × 0.2 e^(−0.2t) = 6e^(−0.2t). The right-hand side is 6 − 0.2 × 30(1 − e^(−0.2t)) = 6 − 6 + 6e^(−0.2t) = 6e^(−0.2t). The two sides agree, and v = 0 when t = 0. As t becomes large, v approaches 30, so the model gives a limiting speed of 30 m/s.

**Connecting to separable equations (1.08k).** Equations of the form dP/dt = kP are solved by separating the variables, giving P = P₀eᵏᵗ. The solving is taught under 1.08k, but you need 1.07t to build the equation correctly first. Combining the chain rule with construction is common: if water leaves a tank of cross-section 4 m² at a rate proportional to the square root of the depth h, then 4(dh/dt) = −c√h, because dV/dt = (dV/dh)(dh/dt) with V = 4h.

## Common errors

- Using the quotient rule with the numerator terms the wrong way round.
- Forgetting the inside derivative in the chain rule, for example differentiating sin 3x as cos 3x.
- Dropping dy/dx from a y term in implicit differentiation, or forgetting the product rule on xy.
- Differentiating x with respect to t and y with respect to x in a parametric question, then dividing.
- Taking the normal gradient as the negative of the tangent gradient instead of the negative reciprocal.
- Losing the sign for a decreasing quantity in a connected rate question.
- Treating "proportional to" as an equals sign without a constant k.

Practise each technique on the [practice questions](/resources/ocr-a-level-mathematics-techniques-of-differentiation-product-quotient-chain-practice/), and use the [printable checklist](/checklists/ocr/a-level/mathematics/) to record what is secure.

## Official syllabus

Source: OCR, A Level Mathematics A (H240) specification, Version 3.1 (August 2026), for first assessment in 2018. Statements taught: 1.07q to 1.07t, linked to 1.08k.
