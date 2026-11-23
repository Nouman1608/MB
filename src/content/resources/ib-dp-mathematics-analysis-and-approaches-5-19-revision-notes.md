---
title: "IB DP Mathematics: Analysis and Approaches (AA): 5.19 The Maclaurin series (AHL only) -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Calculus"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5.19
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-19"
description: "Revision notes for IB DP Maths AA HL section 5.19: Maclaurin formula, standard series and their validity, building new series, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense **syllabus section 5.19** of IB DP Mathematics: Analysis and Approaches (first assessment 2021): Maclaurin series for standard functions, new series built from them, and series developed from differential equations. It is HL-only (AHL) content. For full explanations and worked examples, use the [section 5.19 study guide](/resources/ib-dp-mathematics-analysis-and-approaches-5-19/).

## Condensed recall: the formula

f(x) = f(0) + x f′(0) + x² f″(0)/2! + x³ f‴(0)/3! + … + xⁿ f⁽ⁿ⁾(0)/n! + …

- Coefficient of xⁿ = f⁽ⁿ⁾(0)/n!.
- f and every derivative must exist at x = 0 (so ln x has no Maclaurin series; ln(1 + x) does).
- Factorials to know: 2! = 2, 3! = 6, 4! = 24, 5! = 120, 6! = 720.

**Deriving a series by hand:** list f, f′, f″, … in one column and their values at 0 in another, then substitute.

## Condensed recall: standard series

| Function | First terms | Valid for |
|---|---|---|
| eˣ | 1 + x + x²/2 + x³/6 + x⁴/24 + … | all x |
| sin x | x − x³/6 + x⁵/120 − … | all x |
| cos x | 1 − x²/2 + x⁴/24 − … | all x |
| ln(1 + x) | x − x²/2 + x³/3 − x⁴/4 + … | −1 < x ≤ 1 |
| (1 + x)ᵖ, p ∈ ℚ | 1 + px + p(p − 1)x²/2 + p(p − 1)(p − 2)x³/6 + … | \|x\| < 1 |

Quick checks: sin is odd (odd powers only), cos is even (even powers only), and the derivative of the sin series is the cos series.

## Condensed recall: building new series

- **Substitution:** replace every x, inside brackets: e^(2x) needs (2x)² = 4x², (2x)³ = 8x³. The interval changes: ln(1 + kx) is valid for −1 < kx ≤ 1.
- **Products:** multiply, keeping only terms up to the power required; collect every pair whose powers add to that power.
- **Composition:** treat a whole series u (with no constant term) as the variable in another series, such as (1 + u)⁻¹ or eᵘ.
- **Differentiation / integration term by term:** differentiate or integrate each term; when integrating, find the constant by putting x = 0.
- **From a differential equation:** differentiate the equation repeatedly (product and chain rules), evaluate y, y′, y″, … at x = 0, and substitute into the formula.

**Uses:** approximations for small x, definite integrals with no elementary antiderivative, and limits of the form 0/0 (section 5.13).

## Key terms

| Term | Meaning |
|---|---|
| Maclaurin series | A power series for f(x) built from the derivatives of f at x = 0 |
| Maclaurin polynomial | The series cut off after a stated power, used as an approximation |
| Term in xⁿ | The single term c xⁿ after all contributions are collected |
| Non-zero terms | Terms whose coefficient is not zero; skipped powers are not counted |
| Interval of convergence | The set of x for which the infinite series sums to f(x) |
| Truncation | Stopping a series after a chosen number of terms |
| Term-by-term differentiation | Differentiating each term of a series to get the series of f′(x) |
| Odd / even function | f(−x) = −f(x) gives only odd powers; f(−x) = f(x) gives only even powers |

## Exam traps

- **Missing factorials.** x³/3, not x³/6, is the third term of ln(1 + x); x³/6 belongs to eˣ and sin x. Learn which is which.
- **Powers of a coefficient.** In e^(−2x), the x² term is (−2x)²/2 = 2x², not −2x².
- **Lost cross-terms.** In (1 − x + x²/2)(x − x³/6), the series for e^(−x) sin x, the x³ coefficient is 1/2 − 1/6 = 1/3: two products contribute.
- **"First three non-zero terms".** For cos 2x you need up to x⁴: 1 − 2x² + 2x⁴/3.
- **Outside the interval.** ln(1 + x) with x = 3, or (1 + x)^(1/2) with x = 2, does not converge to the right value.
- **Constant after integrating.** Integrating a series from 0 to x avoids it; an indefinite integral needs +C found from f(0).
- **DE series.** d/dx(y²) = 2y y′, not 2y; d/dx(xy) = y + xy′.

## Self-test

1. Write down the first three non-zero terms of the series for sin 3x.
2. Write down the series for (1 − x)⁻¹ up to x³, and state where it is valid.
3. Find √(1 + 4x) up to the term in x², and state where it is valid.
4. Find the series for xeˣ up to x⁴.
5. Differentiate the series for ln(1 + x) to obtain the series for 1/(1 + x).
6. Find the coefficient of x³ in the series for eˣ cos x.
7. Use series to find lim (x → 0) (sin x − x)/x³.
8. y satisfies y′ = x + y with y(0) = 1. Find the series for y up to x².
9. Explain why ln x has no Maclaurin series.
10. State the interval for which the series for ln(1 − 2x) is valid.
11. Use the first two terms of the cos x series to estimate cos 0.2.
12. Use ln((1 + x)/(1 − x)) = ln(1 + x) − ln(1 − x) to find its series up to x³.

**Answers**

1. 3x − 9x³/2 + 81x⁵/40, from (3x)³/6 = 27x³/6 and (3x)⁵/120 = 243x⁵/120.
2. 1 + x + x² + x³ + …, valid for |x| < 1.
3. With u = 4x: 1 + u/2 − u²/8 = 1 + 2x − 2x², valid for |x| < 1/4.
4. x(1 + x + x²/2 + x³/6) = x + x² + x³/2 + x⁴/6.
5. d/dx(x − x²/2 + x³/3 − x⁴/4) = 1 − x + x² − x³ + …
6. (1 + x + x²/2 + x³/6)(1 − x²/2): x³ terms are x³/6 and x × (−x²/2), so the coefficient is 1/6 − 1/2 = −1/3.
7. sin x − x = −x³/6 + x⁵/120 − …, so the quotient → −1/6.
8. y′(0) = 0 + 1 = 1; y″ = 1 + y′, so y″(0) = 2. y = 1 + x + x² + …
9. ln x is undefined at x = 0 (and ln x → −∞ as x → 0⁺), so f(0) does not exist.
10. −1 < −2x ≤ 1, so −1/2 ≤ x < 1/2.
11. 1 − 0.2²/2 = 0.98 (the true value is 0.98007 to 5 d.p.).
12. (x − x²/2 + x³/3) − (−x − x²/2 − x³/3) = 2x + 2x³/3 + …

## Where next

Practise exam-style questions in the [section 5.19 practice set](/resources/ib-dp-mathematics-analysis-and-approaches-5-19-practice/). Differential equations that produce these series are summarised in the [section 5.18 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-5-18-revision-notes/), and all HL calculus is condensed in the [further calculus revision notes](/resources/ib-dp-mathematics-aa-hl-further-calculus-revision-notes/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section 5.19.
