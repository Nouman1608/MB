---
title: "IB DP Mathematics: Analysis and Approaches (DP Mathematics: Analysis and Approaches): Indefinite integration by inspection or substitution -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for IB DP Maths AA section 5.10: standard integrals, composites with ax + b, reverse chain rule patterns, exam traps and a 12-question self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense **section 5.10 of IB DP Mathematics: Analysis and Approaches: indefinite integration of standard functions and their composites with ax + b, and integration by inspection or substitution for ∫ k g′(x) f(g(x)) dx**. It is SL content, examined at SL and HL. The [section 5.10 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-10/) has full explanations and worked examples.

## Core recall

| f(x) | ∫ f(x) dx | with ax + b inside |
|---|---|---|
| xⁿ (n ≠ −1) | xⁿ⁺¹/(n + 1) | (ax + b)ⁿ⁺¹/(a(n + 1)) |
| 1/x | ln x | (1/a) ln(ax + b) |
| eˣ | eˣ | (1/a) e^(ax + b) |
| sin x | −cos x | −(1/a) cos(ax + b) |
| cos x | sin x | (1/a) sin(ax + b) |

Add + C to every indefinite integral.

- Rewrite roots and reciprocals as powers before integrating: 4/√x = 4x^(−1/2).
- Only x⁻¹ (or (ax + b)⁻¹) gives a logarithm.
- Inside ax + b: integrate, then **divide by a**.

## Reverse chain rule patterns

| Spot this | Write this |
|---|---|
| g′(x)[g(x)]ⁿ | [g(x)]ⁿ⁺¹/(n + 1) |
| g′(x)/g(x) | ln g(x) |
| g′(x)e^(g(x)) | e^(g(x)) |
| g′(x)cos(g(x)) | sin(g(x)) |
| g′(x)sin(g(x)) | −cos(g(x)) |

A constant multiple of g′(x) is fine: adjust with a constant factor. A leftover factor involving x is not: expand, or (at HL) use another method.

## Substitution in four steps

1. Choose u = g(x), the inner expression.
2. Find du/dx and write the remaining x-terms and dx in terms of du.
3. Integrate with respect to u.
4. Replace u by g(x) and add + C.

## Recognition drill: which method?

Decide the method before writing anything. The reasoning is what to rehearse.

- ∫ (2x + 3)⁴ dx: linear inside, so integrate as a power and divide by 2: (1/10)(2x + 3)⁵ + C.
- ∫ x(x² − 3)⁴ dx: inner x² − 3 has derivative 2x, and x is a constant multiple of it: (1/10)(x² − 3)⁵ + C.
- ∫ (x² − 3)⁴ dx: no factor of x outside, so this is not a reverse chain rule integral; expand.
- ∫ 3/(x + 2) dx: linear denominator, power −1: 3 ln(x + 2) + C.
- ∫ 3/(x + 2)² dx: power −2, not −1: −3/(x + 2) + C.
- ∫ 2x/(x² + 5) dx: numerator is exactly the derivative of the denominator: ln(x² + 5) + C.
- ∫ 2x/(x² + 5)² dx: same inner function, but now the pattern is g′g⁻²: −1/(x² + 5) + C.
- ∫ sin x e^(cos x) dx: g = cos x, g′ = −sin x: −e^(cos x) + C.
- ∫ sin²x cos x dx: g = sin x, g′ = cos x: (1/3)sin³x + C.
- ∫ (x + 1)/x dx: split into 1 + 1/x first: x + ln x + C.

A useful habit is to differentiate every answer mentally. If the derivative does not return the integrand exactly, adjust the constant factor, not the function.

## Key terms

| Term | Meaning |
|---|---|
| Indefinite integral | a general anti-derivative, F(x) + C |
| Constant of integration | the C that represents every vertical shift of the curve |
| Inner function g(x) | the expression inside a composite function |
| Integration by inspection | writing down the integral of k g′(x) f(g(x)) directly, then adjusting the constant |
| Integration by substitution | changing the variable to u = g(x) to simplify the integral |
| Boundary condition | a known point on the curve, used to find C |

## Exam traps

- **Multiplying instead of dividing by a**: ∫ e^(4x) dx = (1/4)e^(4x) + C, not 4e^(4x) + C.
- **Sign with negative a**: ∫ 1/(5 − x) dx = −ln(5 − x) + C.
- **sin and cos**: ∫ sin x dx = −cos x + C; check by differentiating.
- **Logarithm of a square**: ∫ 1/x² dx = −1/x + C, not ln(x²).
- **Non-constant leftovers**: ∫ x²(x² + 1)⁴ dx is not a reverse chain rule integral.
- **Answers in u**: always substitute back.
- **Missing + C**, or a boundary condition applied before integrating.

## Self-test

1. ∫ √(3x + 1) dx
2. ∫ 1/(5 − x) dx, x < 5
3. ∫ x/(x² + 1) dx
4. ∫ eˣ(eˣ + 1)³ dx
5. ∫ cos(x/2) dx
6. ∫ x cos(x²) dx
7. ∫ (1/x²) e^(1/x) dx
8. ∫ sin 4x dx
9. ∫ (x + 1)/(x² + 2x + 3) dx
10. ∫ cos x / sin²x dx
11. ∫ 12x²(x³ + 1)³ dx
12. Explain why ∫ x²(x² + 1)⁴ dx cannot be found by inspection.

## Answers

1. (3x + 1)^(3/2)/((3/2) × 3) = (2/9)(3x + 1)^(3/2) + C
2. −ln(5 − x) + C
3. g = x² + 1, g′ = 2x: (1/2) ln(x² + 1) + C
4. g = eˣ + 1, g′ = eˣ: (1/4)(eˣ + 1)⁴ + C
5. Divide by 1/2: 2 sin(x/2) + C
6. g = x², g′ = 2x: (1/2) sin(x²) + C
7. g = 1/x, g′ = −1/x²: −e^(1/x) + C
8. −(1/4) cos 4x + C
9. g = x² + 2x + 3, g′ = 2(x + 1): (1/2) ln(x² + 2x + 3) + C (no modulus needed, since x² + 2x + 3 = (x + 1)² + 2 > 0)
10. g = sin x, g′ = cos x, pattern g′g⁻²: −(sin x)⁻¹ + C = −1/sin x + C
11. g = x³ + 1, g′ = 3x², and 12x² = 4g′: (x³ + 1)⁴ + C
12. The derivative of x² + 1 is 2x; the factor x² is not a constant multiple of 2x, so the integrand is not of the form k g′(x) f(g(x)). Expand instead.

## Where next

Work through the [section 5.10 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-10-practice/), then move on to definite integrals with the [section 5.11 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-11-revision-notes/). The [AA integration and kinematics revision notes](/resources/ib-dp-mathematics-aa-sl-integration-kinematics-revision-notes/) summarise the whole unit.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section SL 5.10.
