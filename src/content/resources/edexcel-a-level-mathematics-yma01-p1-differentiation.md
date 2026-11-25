---
title: "Pearson Edexcel International A Level Mathematics (YMA01): P1 Differentiation"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit P1: Pure Mathematics 1"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 1.4
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p1-pure-mathematics-1-edexcel-alevel-maths"
    subtopic: "p1-differentiation-edexcel-alevel-maths"
description: "Study guide to Edexcel IAL Maths Pure 1 differentiation: the gradient as a limit, first principles, powers of x, second derivatives, tangents and normals."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 4, Differentiation, of **Unit P1: Pure Mathematics 1** (WMA11) in Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics (YMA01), Specification Issue 3, April 2019. P1 differentiation is deliberately narrow: powers of x and their sums, the meaning of the derivative, second derivatives, and tangents and normals. Stationary points, increasing and decreasing functions, and the chain, product and quotient rules all belong to later units.

Use it with the [P1 differentiation revision notes](/resources/edexcel-a-level-mathematics-yma01-p1-differentiation-revision-notes/) and the [P1 differentiation practice questions](/resources/edexcel-a-level-mathematics-yma01-p1-differentiation-practice/). The whole unit is summarised in the [Pure Mathematics 1 study guide](/resources/a-level-edexcel-mathematics-pure-mathematics-1/), and the reverse process is in the [P1 integration study guide](/resources/edexcel-a-level-mathematics-yma01-p1-integration/).

## What the specification asks

| Ref | Content | Guidance in the specification |
|---|---|---|
| 4.1 | The derivative of f(x) as the gradient of the tangent to y = f(x) at a point; the gradient of the tangent as a limit; interpretation as a rate of change; second order derivatives | dy/dx is the rate of change of y with respect to x; the chain rule is not required; f′(x) and f″(x) notation may be used |
| 4.2 | Differentiation of xⁿ, and related sums, differences and constant multiples | Includes products of brackets and fractions such as a sum divided by a power of x |
| 4.3 | Applications to gradients, tangents and normals | Equations of tangents and normals at specific points on a curve |

## The gradient as a limit (4.1)

The gradient of a curve at a point P is the gradient of the tangent there. Take a second point Q on the curve a small step h further along. The chord PQ has gradient

[f(x + h) − f(x)] ÷ h

As h → 0, Q slides towards P and the chord turns into the tangent. So

f′(x) = lim (h → 0) [f(x + h) − f(x)] ÷ h

Finding a derivative this way is called **differentiating from first principles**.

### Worked example 1: first principles

Find, from first principles, the derivative of f(x) = x³ − 2x.

```
f(x + h) = (x + h)³ − 2(x + h)
         = x³ + 3x²h + 3xh² + h³ − 2x − 2h
f(x + h) − f(x) = 3x²h + 3xh² + h³ − 2h
divide by h      : 3x² + 3xh + h² − 2
as h → 0         : f′(x) = 3x² − 2
```

Marks depend on the limit being written. Write "as h → 0" (or lim) before the final line; do not simply put h = 0 in the original fraction, which would divide by zero.

### The derivative as a rate of change

dy/dx measures how fast y changes as x changes, in units of y per unit of x. If A = πr² is the area of a circle in cm² and r its radius in cm, then dA/dr = 2πr. At r = 5 the area is increasing at 10π cm² per cm of radius.

### Second derivatives

Differentiating f′(x) again gives the **second derivative**, written d²y/dx² or f″(x). It is the rate of change of the gradient. In P1 you need to find it; using it to classify stationary points comes in Pure Mathematics 2.

## Differentiating powers of x (4.2)

If y = axⁿ then dy/dx = anxⁿ⁻¹, for any rational n. Differentiate sums and differences term by term. A constant term has derivative 0; ax has derivative a.

The rule only works on terms of the form axⁿ, so **rewrite first**:

| Form | Rewrite as |
|---|---|
| √x | x^(1/2) |
| 1 ÷ x³ | x^(−3) |
| 5 ÷ (2√x) | (5/2)x^(−1/2) |
| (3x − 2)(x + 4) | 3x² + 10x − 8 (expand) |
| (4x³ − 6√x + 1) ÷ (2x) | 2x² − 3x^(−1/2) + ½x^(−1) (divide each term) |

There is no product rule or quotient rule in P1. Brackets are expanded and fractions are split before you differentiate.

### Worked example 2: rewriting before differentiating

Differentiate y = (4x³ − 6√x + 1) ÷ (2x).

```
y      = 2x² − 3x^(−1/2) + ½x^(−1)
dy/dx  = 4x + (3/2)x^(−3/2) − ½x^(−2)
```

A common error is to differentiate the top and the bottom separately, which has no meaning.

### Worked example 3: a second derivative

Find d²y/dx² for y = 6x^(5/2) − 4/x.

```
y        = 6x^(5/2) − 4x^(−1)
dy/dx    = 15x^(3/2) + 4x^(−2)
d²y/dx²  = (45/2)x^(1/2) − 8x^(−3)
```

## Gradients, tangents and normals (4.3)

1. Differentiate.
2. Substitute the x-value into dy/dx to get the gradient m of the tangent.
3. Find the y-value from the equation of the curve.
4. Tangent: y − y₁ = m(x − x₁). Normal: gradient −1/m, through the same point.
5. Rearrange into the form asked for.

### Worked example 4: tangent and normal

The curve C has equation y = 2x² − 8/x, x ≠ 0. Find the equations of the tangent and the normal at the point where x = 2.

```
y(2)       = 8 − 4 = 4
dy/dx      = 4x + 8x^(−2)
at x = 2   : 8 + 2 = 10
tangent    : y − 4 = 10(x − 2)       →  y = 10x − 16
normal     : y − 4 = −(1/10)(x − 2)  →  x + 10y − 42 = 0
```

### Worked example 5: a tangent with a given gradient

Find the points on y = x³ − 3x² + 2 where the tangent is parallel to the line y = 9x + 1.

```
dy/dx = 3x² − 6x = 9
3x² − 6x − 9 = 0  →  x² − 2x − 3 = 0  →  (x − 3)(x + 1) = 0
x = 3 : y = 27 − 27 + 2 = 2
x = −1: y = −1 − 3 + 2 = −2
```

The points are (3, 2) and (−1, −2). Parallel lines have equal gradients, so this is a "gradient equals 9" question in disguise.

### Worked example 6: finding constants

The curve y = ax² + b/x passes through (1, 5) and has gradient 4 at that point. Find a and b.

```
through (1, 5) : a + b = 5
dy/dx = 2ax − bx^(−2), at x = 1 : 2a − b = 4
add            : 3a = 9  →  a = 3,  b = 2
```

## Common mistakes

- Differentiating √x as ½x^(1/2) instead of ½x^(−1/2).
- Differentiating a fraction or product without expanding or splitting it first.
- Using the derivative to find the y-coordinate of the point.
- Writing the normal gradient as −m or 1/m instead of −1/m.
- Leaving out "h → 0" in a first-principles proof.
- Giving ax + by + c = 0 with fractions when integers are asked for.

## Exam technique

- **Find** dy/dx: show the rewritten powers on their own line, so a slip in the indices can still earn method marks.
- **Prove from first principles**: start from the limit definition, expand fully, cancel, divide by h, then take the limit.
- **Hence**: use the result you have just found; do not start again.
- **Give your answer in the form ax + by + c = 0**: clear fractions and make a, b and c integers.

## Frequently asked questions

**Is the chain rule needed in Edexcel IAL P1?**
No. The specification states that knowledge of the chain rule is not required for P1. Expressions such as (2x + 5)(x − 1) are expanded first, and the chain rule appears in a later unit.

**Are stationary points in P1?**
No. P1 differentiation stops at gradients, tangents and normals. Finding and classifying stationary points, and increasing and decreasing functions, are introduced in Pure Mathematics 2.

**Can I use a calculator to find a derivative?**
Calculators may be used in the P1 examination, but you must show the differentiation itself; a numerical gradient from a calculator does not show the method.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification, Issue 3, April 2019: Unit P1 Pure Mathematics 1, section 4, Differentiation, references 4.1 to 4.3.
