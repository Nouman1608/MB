---
title: "OCR A Level Mathematics A: Differentiation techniques and differential equations (H240) -- Revision Notes"
seoTitle: "OCR A Level Maths Differentiation Techniques Notes"
resourceType: "revision-notes"
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
description: "Condensed rules, method boxes, a self-test and common slips for product, quotient, chain, implicit and parametric differentiation in OCR H240."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense the differentiation techniques for OCR A Level Mathematics A (H240), written against specification Version 3.1 (August 2026), statements 1.07q to 1.07t, linked to 1.08k. The specification lists them under Stage 2 only, so they are **A Level only**. For full explanations and longer worked examples, read the [study guide](/resources/ocr-a-level-mathematics-techniques-of-differentiation-product-quotient-chain/). When you are ready, test yourself with the [practice questions](/resources/ocr-a-level-mathematics-techniques-of-differentiation-product-quotient-chain-practice/), find the rest of the course on the [OCR A Level Mathematics hub](/boards/ocr/a-level/mathematics/), and tick off skills on the [printable checklist](/checklists/ocr/a-level/mathematics/). The [free 10-minute diagnostics](/diagnostics/) show where to focus first.

## Rules at a glance

| Ref | Rule | Form |
|---|---|---|
| 1.07q | Product rule | y = uv gives dy/dx = u v′ + v u′ |
| 1.07q | Quotient rule | y = u/v gives dy/dx = (v u′ − u v′)/v² |
| 1.07r | Chain rule | dy/dx = (dy/du) × (du/dx) |
| 1.07r | Connected rates | dV/dt = (dV/dr) × (dr/dt) |
| 1.07r | Inverse | dy/dx = 1 / (dx/dy) |
| 1.07s | Implicit | differentiate each term in x; d/dx(yⁿ) = n yⁿ⁻¹ dy/dx |
| 1.07s | Parametric | dy/dx = (dy/dt) / (dx/dt) |
| 1.07t | Construct a differential equation | words become derivatives; "proportional to" gives a constant k |

The standard derivatives you combine with these rules are xⁿ, eᵏˣ, aᵏˣ, ln x, sin kx, cos kx and tan kx. They are revised on the differentiation fundamentals pages, not here.

## Product and quotient rules

**Method in steps**

1. Name the two parts: u and v.
2. Differentiate each part separately. Write u′ and v′ down.
3. Substitute into the rule. For a quotient, put the minus sign in the right order.
4. Factorise. Take out any common factor of the form (power of x) × (exponential).

**Worked reminders**

```
y = (2x + 1) e^(−3x):  dy/dx = 2e^(−3x) − 3(2x + 1)e^(−3x) = −(6x + 1) e^(−3x)
y = e^(2x)/(x − 1):    dy/dx = ( 2e^(2x)(x − 1) − e^(2x) )/(x − 1)² = e^(2x)(2x − 3)/(x − 1)²
```

**When to choose which.** A quotient can often be rewritten as a product with a negative power. Use whichever has the neater working. For a quotient with a constant numerator, such as 5/(x² + 1), it is quicker to write 5(x² + 1)⁻¹ and use the chain rule.

## Chain rule

**Method in steps**

1. Identify the inside function u.
2. Differentiate the outside function with respect to u.
3. Multiply by du/dx.
4. Replace u by its expression in x.

| Function | Derivative |
|---|---|
| (ax + b)ⁿ | n a (ax + b)ⁿ⁻¹ |
| e^(f(x)) | f′(x) e^(f(x)) |
| ln f(x) | f′(x)/f(x) |
| sin f(x) | f′(x) cos f(x) |
| cos f(x) | −f′(x) sin f(x) |
| (sin kx)ⁿ | n k (sin kx)ⁿ⁻¹ cos kx |

**Reminder.** sin³ 4x means (sin 4x)³, so d/dx(sin³ 4x) = 3(sin 4x)² × 4 cos 4x = 12 sin² 4x cos 4x.

### Connected rates

**Method in steps**

1. List what is given and what is wanted, each as a rate with respect to time.
2. Write the formula connecting the quantities (volume, area, length).
3. Differentiate it with respect to the variable that is not time.
4. Use the chain rule to link the rates, then substitute the given values.

```
Circle of radius r cm, dr/dt = 0.2:  A = πr²,  dA/dt = 2πr (dr/dt)
At r = 10:  dA/dt = 2π × 10 × 0.2 = 4π cm² per unit time
```

Use a negative sign for a quantity that is decreasing. Check that the answer has the right units: a rate of volume has units like cm³ per second.

**Volume in terms of one variable.** For a cylinder whose height always equals its radius r, V = πr²·r = πr³. You must eliminate the second variable before differentiating, or you will need another connected rate.

### Inverse

```
x = y⁴ + 3y:  dx/dy = 4y³ + 3 = 7 at y = 1,  so dy/dx = 1/7
```

## Implicit differentiation

**Method in steps**

1. Differentiate every term with respect to x, including terms on the right.
2. For a y term, use the chain rule and write dy/dx.
3. For a product such as xy, use the product rule.
4. Collect the dy/dx terms on one side, factorise and divide.
5. Substitute the coordinates. Both x and y usually appear in the answer.

```
x² + xy = 6 at (2, 1):  2x + y + x dy/dx = 0,  dy/dx = −(2x + y)/x = −5/2
```

The tangent at the point has the gradient dy/dx. The normal has the negative reciprocal gradient. If the tangent gradient is 4/3, the normal gradient is −3/4. For a horizontal tangent you would set the numerator of dy/dx equal to zero, but finding and classifying stationary points belongs to the applications of differentiation page.

## Parametric differentiation

**Method in steps**

1. Differentiate x and y with respect to the parameter.
2. Divide: dy/dx = (dy/dt)/(dx/dt).
3. Simplify and cancel common factors, noting any excluded value.
4. Substitute the parameter value. Find x and y from the original equations for the point.

```
x = 3t², y = 2t³:  dy/dx = 6t²/(6t) = t.   At t = 3 the gradient is 3.
```

Trigonometric parameters often simplify with a double angle identity. For x = 2 + 3 sin θ, y = 1 − 2 cos 2θ, dy/dx = 4 sin 2θ/(3 cos θ) = (8/3) sin θ.

## Constructing differential equations

| Situation | Equation | Notes |
|---|---|---|
| Population growth | dP/dt = kP | k > 0; solution P = P₀eᵏᵗ |
| Radioactive decay | dm/dt = −km | k > 0; the minus sign shows decrease |
| Cooling to a surroundings temperature of 20 | dθ/dt = −k(θ − 20) | rate depends on the difference |
| Tank with inflow and leak | dV/dt = inflow − kV | net rate = in minus out |
| Demand against price | dD/dp = −kD | independent variable is p |
| Kinematics | dv/dt = a, with a given in terms of v | acceleration is a rate |
| Curve with a gradient rule | dy/dx = 2y | gradient is a rate |

**Method in steps**

1. Name the variables and units.
2. Identify the rate and its variable (time, price, x).
3. Write the rate as a derivative.
4. Translate "proportional to" as "= k × quantity".
5. Use given data to find k if asked.
6. Check the sign against the story.

To verify a given solution, differentiate it and substitute into both sides. These are the same checks you would use after solving by separation of variables (1.08k). For an interpretation question, comment on long-term behaviour and on where the model stops being sensible.

## Must-know distinctions

- **Product rule versus chain rule:** a product has two factors in x; a composite has a function inside another function. Many questions need both.
- **dy/dx versus dx/dy:** they are reciprocals, not negatives.
- **Tangent versus normal gradient:** negative reciprocal.
- **dy/dt versus dy/dx:** in a parametric question, dy/dx is the quotient, not either derivative alone.
- **Rate of change of V versus rate of change of r:** the chain rule connects them through dV/dr.

## Quick self-test

1. Differentiate x e^(−x).
2. Differentiate x/(x + 2).
3. Differentiate cos(x²).
4. Differentiate (2x + 5)⁻³.
5. A circle's radius increases at 0.2 cm/s. How fast is the area increasing when r = 10 cm?
6. Given x = y⁴ + 3y, find dy/dx at y = 1.
7. For x² + xy = 6, find dy/dx at (2, 1).
8. For x = 3t² and y = 2t³, find dy/dx at t = 3.
9. A radioactive sample loses mass at a rate proportional to its mass m. Write the differential equation.
10. Water drains from a tank so that its volume V falls at a rate proportional to √V. Write the differential equation.
11. A tangent has gradient 4/3. State the gradient of the normal.

### Answers

1. (1 − x)e^(−x)
2. 2/(x + 2)²
3. −2x sin(x²)
4. −6(2x + 5)⁻⁴
5. 4π cm²/s (about 12.6 cm²/s)
6. 1/7
7. −5/2
8. 3
9. dm/dt = −km, with k > 0
10. dV/dt = −k√V, with k > 0
11. −3/4

## Where marks are usually lost

- Missing the minus sign or the squared denominator in the quotient rule.
- Differentiating a composite function without the inside derivative.
- Forgetting dy/dx on a y term, or the product rule on xy, when differentiating implicitly.
- Giving an implicit gradient in terms of x only when the question wants a value at a point.
- Dividing dx/dt by dy/dt instead of dy/dt by dx/dt.
- Using the wrong sign in a decreasing-rate problem.
- Not eliminating a second variable before differentiating a volume formula.
- Writing "proportional to" with no constant, or a growth equation with the wrong sign.
- Leaving an answer unfactorised when the question says "simplify" or "show that".

## Official syllabus

Source: OCR, A Level Mathematics A (H240) specification, Version 3.1 (August 2026), for first assessment in 2018. Statements covered: 1.07q to 1.07t, linked to 1.08k.
