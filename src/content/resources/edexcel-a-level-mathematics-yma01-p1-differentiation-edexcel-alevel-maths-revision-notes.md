---
title: "Edexcel International A Level Mathematics (YMA01): P1 Differentiation -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Edexcel IAL Maths P1 differentiation: first principles, powers of x, rewriting, second derivatives, tangents and normals, with a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Condensed notes for section 4, Differentiation, of Unit P1: Pure Mathematics 1 in Pearson Edexcel International A Level Mathematics (YMA01), Specification Issue 3. For the explanations and worked examples, read the [P1 differentiation study guide](/resources/edexcel-a-level-mathematics-yma01-p1-differentiation-edexcel-alevel-maths/), then test yourself with the [P1 differentiation practice questions](/resources/edexcel-a-level-mathematics-yma01-p1-differentiation-edexcel-alevel-maths-practice/).

## What is in P1 and what is not

| In P1 | Not in P1 |
|---|---|
| Derivative as gradient of the tangent and as a limit | Chain, product and quotient rules |
| dy/dx as a rate of change | Stationary points and their nature |
| Second derivatives | Increasing and decreasing functions |
| Differentiating xⁿ, sums, differences, multiples | Derivatives of eˣ, ln x, sin x |
| Gradients, tangents and normals | |

## Key terms

| Term | Meaning |
|---|---|
| Derivative, dy/dx or f′(x) | The gradient function: the gradient of the tangent at each point |
| Tangent | The straight line touching the curve at a point, with the curve's gradient there |
| Normal | The line through the same point perpendicular to the tangent |
| First principles | Finding f′(x) as the limit of [f(x + h) − f(x)] ÷ h as h → 0 |
| Second derivative, d²y/dx² or f″(x) | The derivative of the derivative: the rate of change of the gradient |
| Rate of change | dy/dx in units of y per unit of x |

## Core rules

```
y = axⁿ            dy/dx = anxⁿ⁻¹     (n rational)
y = constant       dy/dx = 0
y = ax             dy/dx = a
f′(x) = lim(h→0) [f(x + h) − f(x)] / h
```

## Rewrite before you differentiate

| Expression | Ready-to-differentiate form | Derivative |
|---|---|---|
| 3√x | 3x^(1/2) | (3/2)x^(−1/2) |
| 4/x² | 4x^(−2) | −8x^(−3) |
| 1/(2x³) | ½x^(−3) | −(3/2)x^(−4) |
| x²√x | x^(5/2) | (5/2)x^(3/2) |
| (x + 3)² | x² + 6x + 9 | 2x + 6 |
| (x² − 4)/√x | x^(3/2) − 4x^(−1/2) | (3/2)x^(1/2) + 2x^(−3/2) |

## First principles: the method

1. Write f(x + h) and expand fully.
2. Subtract f(x); every term without h cancels.
3. Divide every remaining term by h.
4. Let h → 0, writing the limit, to leave f′(x).

Example: f(x) = 5x². f(x + h) − f(x) = 10xh + 5h². Divide by h: 10x + 5h. As h → 0, f′(x) = 10x.

## Tangent and normal: the method

1. dy/dx, then substitute x to get m.
2. y from the curve, not from dy/dx.
3. Tangent: y − y₁ = m(x − x₁).
4. Normal: y − y₁ = −(1/m)(x − x₁).
5. Rearrange to the form requested.

## Worked reminders

- y = x² − 4√x at x = 4: y = 16 − 8 = 8; dy/dx = 2x − 2x^(−1/2) = 8 − 1 = 7; tangent y = 7x − 20.
- Normal to the same curve at x = 4: y − 8 = −(1/7)(x − 4), so x + 7y − 60 = 0.
- Gradient condition: where is the gradient of y = x³ − 12x equal to 15? 3x² − 12 = 15, so x = ±3.
- Rate of change: s = 4t² − t³ (s in m, t in s), ds/dt = 8t − 3t²; at t = 2 this is 4 m s⁻¹.

## Exam traps

- √x differentiated as ½x^(1/2).
- Fractions differentiated top and bottom separately.
- Brackets differentiated without expanding.
- y-coordinate taken from dy/dx.
- Normal gradient written as −m or 1/m.
- First-principles answer with h set to 0 before dividing, or with no limit notation.
- ax + by + c = 0 left with fractional coefficients.

## Quick self-test

1. Differentiate y = 7x⁴ − 3x + 2.
2. Differentiate y = 6/x³.
3. Differentiate y = 8√x.
4. Differentiate y = (2x − 1)(x + 5).
5. Differentiate y = (x³ + 2x)/x².
6. Find f″(x) for f(x) = x⁴ − 2x^(3/2).
7. Find the gradient of y = x³ − 4x at x = −1.
8. State the gradient of a normal where the tangent gradient is −3/4.
9. Find the equation of the tangent to y = 3x² − 2x at x = 1.
10. From first principles, show the derivative of 3x² is 6x.
11. Find the x-values where the gradient of y = x³ + 3x² is 9.
12. Why is (2x + 1)³ expanded before differentiating in P1?

### Answers

1. **28x³ − 3**.
2. 6x^(−3), so **−18x^(−4)**.
3. 8x^(1/2), so **4x^(−1/2)**.
4. 2x² + 9x − 5, so **4x + 9**.
5. x + 2x^(−1), so **1 − 2x^(−2)**.
6. f′(x) = 4x³ − 3x^(1/2), so **f″(x) = 12x² − (3/2)x^(−1/2)**.
7. 3x² − 4 at x = −1 is **−1**.
8. **4/3**.
9. y = 1 at x = 1; dy/dx = 6x − 2 = 4; **y = 4x − 3**.
10. 3(x + h)² − 3x² = 6xh + 3h². Divide by h: 6x + 3h. As h → 0, the limit is **6x**.
11. 3x² + 6x = 9, so x² + 2x − 3 = 0, (x + 3)(x − 1) = 0: **x = −3 or x = 1**.
12. The chain rule is not part of P1, so the bracket is expanded into powers of x first.

## Frequently asked questions

**What does f″(x) tell me in P1?**
It is the rate of change of the gradient. P1 asks you to find it; using its sign to decide whether a stationary point is a maximum or minimum is part of Pure Mathematics 2.

**Do I need to know first principles?**
Yes. Reference 4.1 includes the gradient of the tangent as a limit, so you should be able to find the derivative of simple polynomials from the definition, writing the limit clearly.

**What form should a tangent equation be in?**
Whatever the question states, such as y = mx + c or ax + by + c = 0 with integers. If no form is given, any correct equation of the line is acceptable, but a tidy form is easier to check.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification, Issue 3, April 2019: Unit P1 Pure Mathematics 1, section 4, Differentiation, references 4.1 to 4.3.
