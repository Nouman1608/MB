---
title: "Pearson Edexcel International A Level Mathematics (YMA01): P1 Integration"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit P1: Pure Mathematics 1"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 1.5
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p1-pure-mathematics-1-edexcel-alevel-maths"
    subtopic: "p1-integration-edexcel-alevel-maths"
description: "Study guide to Edexcel IAL Maths Pure 1 integration: reversing differentiation, the constant c, integrating powers of x and finding a curve from its gradient."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 5, Integration, of **Unit P1: Pure Mathematics 1** (WMA11) in Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics (YMA01), Specification Issue 3, April 2019. In P1, integration means **indefinite** integration of powers of x, as the reverse of differentiation. Definite integrals and areas under curves are introduced in Pure Mathematics 2, and ∫x⁻¹ dx is excluded because it needs logarithms.

Use it with the [P1 integration revision notes](/resources/edexcel-a-level-mathematics-yma01-p1-integration-revision-notes/) and the [P1 integration practice questions](/resources/edexcel-a-level-mathematics-yma01-p1-integration-practice/). Differentiation, which this section reverses, is in the [P1 differentiation study guide](/resources/edexcel-a-level-mathematics-yma01-p1-differentiation/), and the whole unit in the [Pure Mathematics 1 study guide](/resources/a-level-edexcel-mathematics-pure-mathematics-1/).

## What the specification asks

| Ref | Content | Guidance in the specification |
|---|---|---|
| 5.1 | Indefinite integration as the reverse of differentiation | Students should know that a constant of integration is required |
| 5.2 | Integration of xⁿ and related sums, differences and constant multiples | Excluding n = −1; includes expressions with fractional and negative powers, and products or quotients that simplify to powers; given f′(x) and a point on the curve, find y = f(x) |

## Integration reverses differentiation (5.1)

If dy/dx = 6x², then y could be 2x³, or 2x³ + 5, or 2x³ − 1, because the derivative of any constant is zero. All of these are described by

∫6x² dx = 2x³ + c

where **c is the constant of integration**. The symbol ∫ … dx means "integrate with respect to x". Each value of c gives a different curve, and the curves are vertical translations of one another. That is why a question needs one extra piece of information, such as a point on the curve, to fix c.

## The rule for powers of x (5.2)

```
∫ axⁿ dx = a xⁿ⁺¹ / (n + 1) + c,   n ≠ −1
```

Raise the power by one, then divide by the new power. Integrate a sum or difference term by term, with one constant c for the whole answer. A constant k integrates to kx.

Why n ≠ −1? The rule would divide by n + 1 = 0. The integral of x⁻¹ needs the natural logarithm, which is not part of P1.

**Check by differentiating.** Differentiating your answer must give back the expression you started with. This takes a few seconds and catches most slips with fractional powers.

## Rewrite before you integrate

As with differentiation, the rule only works on terms axⁿ. There is no rule in P1 for integrating a product or a quotient directly.

| Expression | Rewrite as | Integral |
|---|---|---|
| 5√x | 5x^(1/2) | (10/3)x^(3/2) + c |
| 2/x³ | 2x^(−3) | −x^(−2) + c |
| 3/√x | 3x^(−1/2) | 6x^(1/2) + c |
| (2x + 3)² | 4x² + 12x + 9 | (4/3)x³ + 6x² + 9x + c |
| (3x² − 4)/(2√x) | (3/2)x^(3/2) − 2x^(−1/2) | (3/5)x^(5/2) − 4x^(1/2) + c |

Dividing by a fraction is the step most often done wrongly: x^(3/2) ÷ (3/2) = (2/3)x^(3/2), so multiply by the reciprocal of the new power.

### Worked example 1: mixed powers

Find ∫(5√x − 2/x³) dx.

```
= ∫(5x^(1/2) − 2x^(−3)) dx
= 5 × x^(3/2) / (3/2) − 2 × x^(−2) / (−2) + c
= (10/3)x^(3/2) + x^(−2) + c
```

Check: d/dx[(10/3)x^(3/2)] = 5x^(1/2) and d/dx[x^(−2)] = −2x^(−3). Both terms come back.

### Worked example 2: a quotient that simplifies

Find ∫ (3x² − 4)/(2√x) dx, x > 0.

```
(3x² − 4)/(2x^(1/2)) = (3/2)x^(3/2) − 2x^(−1/2)
∫ = (3/2) × x^(5/2)/(5/2) − 2 × x^(1/2)/(1/2) + c
  = (3/5)x^(5/2) − 4x^(1/2) + c
```

## Finding a curve from its gradient

Integrating a gradient function gives a **family of curves**, y = F(x) + c. They all have the same gradient at any given x, and each one is a vertical translation of the others. Knowing a single point on the curve picks out exactly one member of the family.

Given f′(x) and a point on the curve:

1. Integrate f′(x), including + c.
2. Substitute the coordinates of the given point.
3. Solve for c.
4. Write the full equation y = f(x).

### Worked example 3

A curve has gradient function dy/dx = 3x² − 4/x², x ≠ 0, and passes through (2, 7). Find its equation.

```
y = x³ + 4x^(−1) + c           (∫ −4x^(−2) dx = 4x^(−1))
at (2, 7):  7 = 8 + 2 + c   →   c = −3
y = x³ + 4/x − 3
```

### Worked example 4: integrating twice

f″(x) = 12x − 6, f′(1) = 2 and f(0) = 5. Find f(x).

```
f′(x) = 6x² − 6x + c₁       f′(1) = 0 + c₁ = 2   →  c₁ = 2
f(x)  = 2x³ − 3x² + 2x + c₂  f(0) = c₂ = 5
f(x)  = 2x³ − 3x² + 2x + 5
```

Each integration needs its own constant and its own condition. Every step here is still indefinite integration.

### Worked example 5: a rate of change in context

Water flows into a tank so that dV/dt = 6t^(1/2), where V cm³ is the volume after t seconds. When t = 0, V = 10. Find V when t = 9.

```
V = 6 × t^(3/2) / (3/2) + c = 4t^(3/2) + c
t = 0, V = 10  →  c = 10
t = 9 : V = 4 × 27 + 10 = 118 cm³
```

Here t replaces x, and the condition at t = 0 fixes c.

## Common mistakes

- Leaving out + c on an indefinite integral, which loses a mark.
- Multiplying by the new power instead of dividing: ∫x^(1/2) dx is (2/3)x^(3/2), not (3/2)x^(3/2).
- Integrating the top and bottom of a fraction separately, or a product factor by factor.
- Treating 1/x as x and integrating it to ½x²; it is x⁻¹ and is excluded from P1.
- Writing ∫(2x + 3)² dx = (2x + 3)³/3 + c, which differentiates back to 2(2x + 3)², not (2x + 3)².
- Using a point on the curve before integrating, or substituting it into f′(x).

## Exam technique

- **Find ∫ … dx** or **integrate**: rewrite as powers on one line, integrate on the next, simplify, then write + c.
- **Find y in terms of x** (or **find f(x)**): integrate, then use the given point to find c, and give the complete equation.
- **Simplify fully**: combine coefficients into single fractions such as (10/3)x^(3/2), and keep surds or powers in the form asked.
- **Show that**: differentiate your result to confirm it matches when the answer is given.

## Frequently asked questions

**Are definite integrals in Edexcel IAL P1?**
No. P1 integration is indefinite only. Definite integration, and using it to find the area under a curve or between curves, is introduced in Pure Mathematics 2.

**Why must I write + c?**
Because many functions have the same derivative, differing only by a constant. The specification states that students should know a constant of integration is required, so an answer without it is incomplete.

**Can I integrate 1/x in P1?**
No. ∫x⁻¹ dx needs the natural logarithm, so n = −1 is excluded in P1. Check that no term in your rewritten expression is a multiple of x⁻¹.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification, Issue 3, April 2019: Unit P1 Pure Mathematics 1, section 5, Integration, references 5.1 and 5.2.
