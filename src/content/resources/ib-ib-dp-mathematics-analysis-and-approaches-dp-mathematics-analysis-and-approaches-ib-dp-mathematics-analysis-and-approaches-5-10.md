---
title: "IB DP Mathematics: Analysis and Approaches (DP Mathematics: Analysis and Approaches): Indefinite integration by inspection or substitution"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Calculus"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5.10
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-10"
description: "IB DP Maths AA section 5.10 study guide: standard indefinite integrals, composites with ax + b, and the reverse chain rule by inspection or substitution."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deep on one syllabus section of IB Diploma Programme Mathematics: Analysis and Approaches: **section 5.10, indefinite integration**. It covers integrating xⁿ (n ∈ ℚ), sin x, cos x, 1/x and eˣ, the composites of these with a linear function ax + b, and integration by inspection (the reverse chain rule) or by substitution for integrals of the form ∫ k g′(x) f(g(x)) dx. It is SL content, examined at SL and HL, and it follows the IB *Mathematics: analysis and approaches guide* for first assessment 2021.

The [AA integration and kinematics study guide](/resources/ib-dp-mathematics-aa-sl-integration-kinematics/) introduces each of these techniques with one example. This page is about recognition: deciding quickly which pattern an integral fits, adjusting the constant, and spotting when a technique does not apply.

## What section 5.10 asks of you

| Integrand | Indefinite integral |
|---|---|
| xⁿ, n ∈ ℚ, n ≠ −1 | xⁿ⁺¹/(n + 1) + C |
| 1/x | ln x + C (for x > 0) |
| sin x | −cos x + C |
| cos x | sin x + C |
| eˣ | eˣ + C |

You must also handle each of these with x replaced by ax + b, and recognise integrands of the form k g′(x) f(g(x)). Because Paper 1 allows no technology, all of this has to be fluent by hand.

## Rewrite first, then integrate

Most errors in this section come from integrating an expression in the wrong form. Before integrating, rewrite roots and reciprocals as powers, and split fractions over a single-term denominator.

```
3/√x      = 3x^(−1/2)          → ∫ = 6x^(1/2) + C = 6√x + C
2/x³      = 2x^(−3)            → ∫ = −x^(−2) + C = −1/x² + C
(x + 4)/x = 1 + 4x^(−1)        → ∫ = x + 4 ln x + C
5/(3x)    = (5/3) × (1/x)      → ∫ = (5/3) ln x + C
```

Only x⁻¹ integrates to a logarithm. The power rule fails at n = −1 because it would divide by zero, which is exactly the case ln x fills.

## Composites with ax + b

If F′(x) = f(x), then the integral of f(ax + b) is (1/a)F(ax + b) + C. Integrate as if the bracket were a single x, then **divide by a**, the coefficient of x. Differentiating the answer multiplies by a (chain rule), which cancels the 1/a.

### Worked example 1 (calculator-free)

```
(a) ∫ 6/(2 − 3x) dx,  x < 2/3
    = 6 × (1/(−3)) ln(2 − 3x) + C = −2 ln(2 − 3x) + C

(b) ∫ 10/√(5x − 1) dx = ∫ 10(5x − 1)^(−1/2) dx
    = 10 × (5x − 1)^(1/2) / ((1/2) × 5) + C = 4√(5x − 1) + C

(c) ∫ 3 sin(2x + π/3) dx = −(3/2) cos(2x + π/3) + C

(d) ∫ e^((1 − x)/2) dx      (here a = −1/2)
    = e^((1 − x)/2) / (−1/2) + C = −2e^((1 − x)/2) + C
```

Watch the sign whenever a is negative, as in (a) and (d). In (a), the condition x < 2/3 keeps 2 − 3x positive, so the logarithm is defined.

## Integration by inspection: the reverse chain rule

The chain rule says d/dx[F(g(x))] = g′(x) F′(g(x)). Reading it backwards: if an integrand is a function of an inner expression g(x), **multiplied by the derivative of that inner expression** (up to a constant k), it can be integrated directly.

| Integrand pattern | Integral |
|---|---|
| g′(x) [g(x)]ⁿ, n ≠ −1 | [g(x)]ⁿ⁺¹/(n + 1) + C |
| g′(x)/g(x) | ln g(x) + C (where g(x) > 0) |
| g′(x) e^(g(x)) | e^(g(x)) + C |
| g′(x) cos(g(x)) | sin(g(x)) + C |
| g′(x) sin(g(x)) | −cos(g(x)) + C |

The method: identify g(x); check that g′(x) is present apart from a constant; write down a trial answer; differentiate it; adjust the constant.

### Worked example 2 (calculator-free)

```
(a) ∫ x² e^(x³) dx
    g = x³, g' = 3x²; x² = (1/3)(3x²)
    Answer: (1/3)e^(x³) + C

(b) ∫ cos x sin⁴x dx
    g = sin x, g' = cos x; pattern g'gⁿ with n = 4
    Answer: (1/5)sin⁵x + C

(c) ∫ (ln x)/x dx,  x > 0
    g = ln x, g' = 1/x; pattern g'g¹
    Answer: (1/2)(ln x)² + C

(d) ∫ (sin x)/(cos x) dx,  for cos x > 0
    g = cos x, g' = −sin x; integrand = −g'/g
    Answer: −ln(cos x) + C
```

Example (d) shows why the reverse chain rule matters: there is no direct rule for this quotient, but it is a g′/g pattern in disguise.

## Integration by substitution

Substitution does the same job formally, and is safer when the pattern is harder to see. Let u = g(x), find du/dx, and replace every x and the dx.

### Worked example 3 (calculator-free)

Find ∫ x√(x² + 9) dx.

```
Let u = x² + 9, so du/dx = 2x and x dx = (1/2) du
∫ x√(x² + 9) dx = ∫ (1/2) u^(1/2) du
                = (1/2) × (2/3) u^(3/2) + C
                = (1/3)(x² + 9)^(3/2) + C
```

Return the answer in terms of x. Check: d/dx[(1/3)(x² + 9)^(3/2)] = (1/3)(3/2)(x² + 9)^(1/2)(2x) = x√(x² + 9).

The same steps show that ∫ eˣ/(1 + eˣ) dx = ln(1 + eˣ) + C, with u = 1 + eˣ. No modulus is needed because 1 + eˣ is always positive.

## When the technique does not apply

At SL, inspection and substitution are only for the form ∫ k g′(x) f(g(x)) dx, where any leftover factor is a **constant**. Compare:

- ∫ x(x² + 1)⁴ dx: g = x² + 1, g′ = 2x, and x is a constant multiple of 2x. Answer (1/10)(x² + 1)⁵ + C.
- ∫ x²(x² + 1)⁴ dx: x² is not a constant multiple of 2x, so inspection fails. Expand and integrate term by term.
- ∫ e^(x²) dx: the factor 2x is missing entirely. This integral has no answer in terms of standard functions, so it could only appear as a definite integral evaluated with technology on Paper 2.

Substitutions that are not of the standard form (such as u = x + 1 for ∫ x(x + 1)⁵ dx) are HL content in section 5.16.

## Finding the constant from a boundary condition

An indefinite integral is a family of curves; a point on the curve picks one. If f′(x) = x/(x² + 1) and f(0) = 2:

```
f(x) = (1/2) ln(x² + 1) + C
f(0) = (1/2) ln 1 + C = C = 2
f(x) = (1/2) ln(x² + 1) + 2
```

## Common mistakes

- Multiplying by a instead of dividing when the inside is ax + b.
- Integrating 1/(2x + 1) as ln(2x + 1) without the factor 1/2.
- Using ln for any reciprocal: ∫ 1/x² dx is −1/x + C, not ln x².
- Forcing inspection on ∫ x²(x² + 1)⁴ dx, where the leftover factor is not a constant.
- Leaving the answer in u after a substitution, or forgetting + C.
- Ignoring the domain of a logarithm: ln(2 − 3x) needs x < 2/3.

## Exam technique: the command words

- **Find** ∫ … dx: give a simplified answer with + C; a missing + C on an indefinite integral can cost the final mark.
- **Show that** the integral equals a printed expression: show the choice of g(x) or u and the adjusted constant explicitly.
- **Hence**: the previous part normally gives the derivative you need, read backwards. If part (a) asks for d/dx of (x² + 9)^(3/2), part (b) is an inspection integral.
- **Using the substitution u = …**: you must use it; a correct answer by inspection may not earn the method marks.

## Where next

Condense the section with the [section 5.10 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-10-revision-notes/) and test yourself with the [section 5.10 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-10-practice/). Definite integrals and areas built on these results are in the [section 5.11 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-11/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section SL 5.10.
