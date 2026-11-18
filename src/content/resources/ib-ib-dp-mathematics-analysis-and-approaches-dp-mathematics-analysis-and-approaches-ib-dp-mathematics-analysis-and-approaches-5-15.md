---
title: "IB DP Mathematics: Analysis and Approaches (AA): 5.15 Derivatives and indefinite integrals of further functions (AHL only)"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Calculus"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5.15
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-15"
description: "IB DP Maths AA HL section 5.15 study guide: derivatives of reciprocal trig, inverse trig, aˣ and logₐ x, their integrals, and partial fractions."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deep on one syllabus section of IB Diploma Programme Mathematics: Analysis and Approaches: **section 5.15, the derivatives of tan x, sec x, cosec x, cot x, aˣ, logₐ x, arcsin x, arccos x and arctan x; indefinite integrals of the derivatives of any of these functions; the composites of any of these with a linear function; and the use of partial fractions to rearrange the integrand**. It is AHL content, examined at HL only, and it follows the IB *Mathematics: analysis and approaches guide* for first assessment 2021.

The [AA HL further calculus study guide](/resources/ib-dp-mathematics-aa-hl-further-calculus/) lists the results. This page shows where each one comes from, so that a forgotten sign can be rebuilt in the exam, and works through the integrals that each result unlocks.

## What section 5.15 asks of you

- Differentiate the nine functions listed above, and their composites with other functions (chain, product and quotient rules).
- Integrate the derivative of each, including composites with ax + b.
- Use partial fractions to split a rational integrand before integrating.
- Interpret an indefinite integral as a family of curves.

## Where the derivatives come from

**Reciprocal trigonometric functions.** Use the quotient rule or the chain rule on the SL results for sin and cos.

```
tan x = sin x / cos x:
  d/dx = (cos x · cos x − sin x · (−sin x))/cos²x = 1/cos²x = sec²x

sec x = (cos x)⁻¹:
  d/dx = −(cos x)⁻² · (−sin x) = sin x / cos²x = sec x tan x

cosec x = (sin x)⁻¹:   d/dx = −cosec x cot x
cot x = cos x / sin x:  d/dx = −cosec²x
```

Memory aid: the "co-" functions all have a minus sign.

**Exponentials and logarithms in base a.** Rewrite in base e.

```
aˣ = e^(x ln a)       → d/dx aˣ = (ln a) aˣ
logₐ x = ln x / ln a  → d/dx logₐ x = 1/(x ln a)
```

**Inverse trigonometric functions.** Use implicit differentiation (section 5.14).

```
y = arcsin x  →  sin y = x  →  cos y · dy/dx = 1
dy/dx = 1/cos y = 1/√(1 − sin²y) = 1/√(1 − x²)
```

cos y is positive because arcsin takes values in [−π/2, π/2]. The same method gives d/dx arccos x = −1/√(1 − x²) and d/dx arctan x = 1/(1 + x²), using sec²y = 1 + tan²y.

## Differentiating composites

### Worked example 1 (calculator-free)

```
(a) y = arctan(2x)         dy/dx = 2/(1 + 4x²)
(b) y = 3^(x²)             dy/dx = 2x ln 3 · 3^(x²)
(c) y = log₂(5x)           dy/dx = 5/(5x ln 2) = 1/(x ln 2)
(d) y = x arcsin x         dy/dx = arcsin x + x/√(1 − x²)
(e) y = sec²(2x)           dy/dx = 2 sec(2x) · sec(2x) tan(2x) · 2 = 4 sec²(2x) tan(2x)
```

In (c), log₂(5x) = log₂ 5 + log₂ x, which explains why the 5 disappears. In (e), the chain rule is used twice: once for the square, once for the 2x inside.

## The integrals each derivative gives

Reading each derivative backwards:

| Integrand | Integral |
|---|---|
| sec²x | tan x + C |
| sec x tan x | sec x + C |
| cosec x cot x | −cosec x + C |
| cosec²x | −cot x + C |
| aˣ | aˣ/ln a + C |
| 1/√(a² − x²) | arcsin(x/a) + C, for \|x\| < a |
| 1/(a² + x²) | (1/a) arctan(x/a) + C |

With a linear function ax + b inside, divide by the coefficient of x, as at SL.

### Worked example 2 (calculator-free)

```
(a) ∫ 1/√(9 − x²) dx  = arcsin(x/3) + C
(b) ∫ 1/(4 + x²) dx   = (1/2) arctan(x/2) + C
(c) ∫ 1/(9 + 4x²) dx  = (1/4)∫ 1/(9/4 + x²) dx = (1/4)(2/3) arctan(2x/3) + C
                      = (1/6) arctan(2x/3) + C
(d) ∫ 5^(2x) dx      = 5^(2x)/(2 ln 5) + C
(e) ∫ tan²x dx       = ∫ (sec²x − 1) dx = tan x − x + C
```

In (c), take the coefficient of x² out first so that the integrand matches 1/(a² + x²). In (e), the identity 1 + tan²x = sec²x turns an unknown integral into a known one.

### Completing the square

A quadratic denominator with no real roots leads to arctan:

```
∫ 1/(x² + 2x + 5) dx = ∫ 1/((x + 1)² + 2²) dx = (1/2) arctan((x + 1)/2) + C
```

## Partial fractions

When the denominator factorises into distinct linear factors, split the fraction, then integrate each part to a logarithm.

### Worked example 3 (calculator-free)

Find ∫ (3x + 5)/((x − 1)(x + 3)) dx.

```
(3x + 5)/((x − 1)(x + 3)) = A/(x − 1) + B/(x + 3)
3x + 5 = A(x + 3) + B(x − 1)
x = 1:  8 = 4A   → A = 2
x = −3: −4 = −4B → B = 1
∫ = 2 ln|x − 1| + ln|x + 3| + C
```

Substituting the roots of each factor ("cover-up") finds the constants fastest. The answer can be combined: ln|(x − 1)²(x + 3)| + C.

A difference of squares works the same way: 1/(x² − 4) = (1/4)[1/(x − 2) − 1/(x + 2)], so the integral is (1/4) ln|(x − 2)/(x + 2)| + C.

**Choosing between arctan and partial fractions.** Test the discriminant of the quadratic denominator. If it factorises (discriminant positive), use partial fractions and logarithms. If it has no real roots, complete the square and use arctan.

## Checking by differentiation

Every integral in this section can be checked in a few seconds by differentiating the answer. For (1/6) arctan(2x/3), the chain rule gives (1/6) × (2/3) × 1/(1 + 4x²/9) = (1/9) × 9/(9 + 4x²) = 1/(9 + 4x²), the original integrand. The check catches the most common slip in arctan and arcsin integrals, a wrong constant in front.

## A family of curves

∫ 1/(1 + x²) dx = arctan x + C describes infinitely many curves, all vertical translations of y = arctan x. A point picks one: if f′(x) = 1/(1 + x²) and f(1) = π, then π/4 + C = π, so f(x) = arctan x + 3π/4.

## Common mistakes

- Sign errors on the "co-" functions, or on arccos.
- Writing d/dx aˣ = x aˣ⁻¹: the power rule needs a variable base and a constant exponent.
- Forgetting the 1/a in (1/a) arctan(x/a).
- Integrating 1/(9 + 4x²) without first taking out the 4.
- Using arctan when the denominator factorises, or logarithms when it does not.
- Dropping the modulus signs in partial fraction logarithms.

## Exam technique: the command words

- **Show that** d/dx(…) = …: derive the result, for example by implicit differentiation, rather than quoting it.
- **Hence find** the integral: use the derivative just shown, read backwards.
- **Express in partial fractions**, then **hence find**: the constants found first are the method marks for the integral.

## Where next

Condense this section with the [section 5.15 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-15-revision-notes/) and practise with the [section 5.15 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-15-practice/). These integrals are used again with substitution and parts in the [section 5.16 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-16/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section AHL 5.15.
