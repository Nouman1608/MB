---
title: "IB DP Mathematics: Analysis and Approaches (AA): 5.15 Derivatives and indefinite integrals of further functions (AHL only) -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for IB DP Maths AA HL section 5.15: further derivatives and integrals, arctan and arcsin forms, partial fractions, traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense **section 5.15 of IB DP Mathematics: Analysis and Approaches: derivatives of tan x, sec x, cosec x, cot x, aˣ, logₐ x, arcsin x, arccos x and arctan x, the integrals of those derivatives, composites with a linear function, and partial fractions**. It is AHL content, examined at HL only. Derivations and worked examples are in the [section 5.15 study guide](/resources/ib-dp-mathematics-analysis-and-approaches-5-15/).

## Derivatives

| f(x) | f′(x) | How to rebuild it |
|---|---|---|
| tan x | sec²x | quotient rule on sin x/cos x |
| sec x | sec x tan x | chain rule on (cos x)⁻¹ |
| cosec x | −cosec x cot x | chain rule on (sin x)⁻¹ |
| cot x | −cosec²x | quotient rule on cos x/sin x |
| aˣ | aˣ ln a | aˣ = e^(x ln a) |
| logₐ x | 1/(x ln a) | logₐ x = ln x/ln a |
| arcsin x | 1/√(1 − x²) | implicit: sin y = x |
| arccos x | −1/√(1 − x²) | implicit: cos y = x |
| arctan x | 1/(1 + x²) | implicit: tan y = x |

## Integrals

| Integrand | Integral (+ C) |
|---|---|
| sec²(ax + b) | (1/a) tan(ax + b) |
| sec x tan x | sec x |
| cosec x cot x | −cosec x |
| cosec²x | −cot x |
| aˣ | aˣ/ln a |
| 1/√(a² − x²) | arcsin(x/a), \|x\| < a |
| 1/(a² + x²) | (1/a) arctan(x/a) |
| tan²x | tan x − x (via sec²x − 1) |
| cot²x | −cot x − x (via cosec²x − 1) |

## Rational integrands: decision

1. Is the numerator a multiple of the derivative of the denominator? → logarithm (reverse chain rule).
2. Does the quadratic denominator factorise? → partial fractions → logarithms.
3. No real roots? → complete the square → arctan.

Partial fractions: px + q over (x − α)(x − β) equals A/(x − α) + B/(x − β); substitute x = α and x = β to find A and B.

## Worked mini-examples

**Chain rule with a new derivative.** d/dx arctan(2x) = 2/(1 + 4x²); d/dx 3^(x²) = 2x ln 3 · 3^(x²); d/dx sec²(2x) = 4 sec²(2x) tan(2x).

**Logarithm in another base.** log₂(5x) = log₂ 5 + log₂ x, so its derivative is 1/(x ln 2): the 5 disappears.

**Taking out a coefficient.** ∫ 1/(9 + 4x²) dx = (1/4)∫ 1/(9/4 + x²) dx = (1/4)(2/3) arctan(2x/3) + C = (1/6) arctan(2x/3) + C.

**Completing the square.** ∫ 1/(x² + 2x + 5) dx = ∫ 1/((x + 1)² + 4) dx = (1/2) arctan((x + 1)/2) + C.

**Using an identity.** ∫ tan²x dx = ∫ (sec²x − 1) dx = tan x − x + C.

**Partial fractions.** (3x + 5)/((x − 1)(x + 3)): cover-up gives A = 8/4 = 2 at x = 1 and B = −4/−4 = 1 at x = −3, so the integral is 2 ln|x − 1| + ln|x + 3| + C.

**Boundary condition.** If f′(x) = 1/(1 + x²) and f(1) = π, then π/4 + C = π, so f(x) = arctan x + 3π/4.

**Check by differentiating.** Differentiate any answer; the derivative should return the integrand exactly, constant included.

## Key terms

| Term | Meaning |
|---|---|
| Reciprocal trigonometric functions | sec x = 1/cos x, cosec x = 1/sin x, cot x = 1/tan x |
| Inverse trigonometric functions | arcsin, arccos, arctan: give the angle from a ratio |
| Partial fractions | a sum of simpler fractions equal to a rational expression |
| Completing the square | rewriting x² + bx + c as (x + b/2)² + (c − b²/4) |
| Family of curves | the set of graphs F(x) + C given by an indefinite integral |

## Exam traps

- **Signs:** d/dx cot x = −cosec²x and d/dx arccos x = −1/√(1 − x²).
- **aˣ is not a power function:** d/dx 2ˣ = 2ˣ ln 2, not x2ˣ⁻¹.
- **Missing 1/a:** ∫ 1/(16 + x²) dx = (1/4) arctan(x/4) + C.
- **Coefficient of x²:** for 1/(9 + 4x²), take 1/4 out first.
- **Domain of arcsin results:** only for |x| < a.
- **Modulus signs** in logarithms from partial fractions.

## Self-test

1. Differentiate tan(3x).
2. Differentiate arccos(x/2).
3. Differentiate x 2ˣ.
4. Differentiate log₁₀(x² + 1).
5. Show that d/dx arctan(1/x) = −1/(1 + x²).
6. ∫ sec 3x tan 3x dx
7. ∫ 1/√(1 − 4x²) dx
8. ∫ cosec 2x cot 2x dx
9. ∫ 4/(x² − 1) dx, x > 1
10. ∫ 1/((2x + 1)(x + 1)) dx, x > 0
11. Find ∫₀¹ 1/(1 + x²) dx and ∫₀¹ 1/√(4 − x²) dx exactly.
12. ∫ (x + 5)/(x² + x − 2) dx, x > 1

## Answers

1. 3 sec²(3x)
2. −(1/2)/√(1 − x²/4) = −1/√(4 − x²)
3. 2ˣ + x 2ˣ ln 2 = 2ˣ(1 + x ln 2)
4. 2x/((x² + 1) ln 10)
5. Chain rule: [1/(1 + 1/x²)] × (−1/x²) = −1/(x² + 1)
6. (1/3) sec 3x + C
7. (1/2) arcsin 2x + C
8. −(1/2) cosec 2x + C
9. 4/(x² − 1) = 2/(x − 1) − 2/(x + 1): 2 ln(x − 1) − 2 ln(x + 1) + C
10. 1/((2x + 1)(x + 1)) = 2/(2x + 1) − 1/(x + 1): ln(2x + 1) − ln(x + 1) + C
11. [arctan x]₀¹ = π/4; [arcsin(x/2)]₀¹ = π/6
12. A/(x − 1) + B/(x + 2): A = 6/3 = 2, B = 3/(−3) = −1; 2 ln(x − 1) − ln(x + 2) + C

## Where next

Practise exam-style questions with the [section 5.15 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-5-15-practice/), and see the [AA HL further calculus revision notes](/resources/ib-dp-mathematics-aa-hl-further-calculus-revision-notes/) for the wider unit.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section AHL 5.15.
