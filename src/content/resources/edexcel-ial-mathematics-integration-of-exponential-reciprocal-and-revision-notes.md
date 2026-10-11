---
title: "Pearson Edexcel International Advanced Level Mathematics: Exponential, reciprocal and trig integration (YMA01) -- Revision Notes"
seoTitle: "Edexcel IAL Maths P3 Integration Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Integration of exponential, reciprocal and trigonometric functions, and integration by recognition"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 149
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p3-pure-mathematics-3-edexcel-alevel-maths"
    subtopic: "p3-integration-edexcel-alevel-maths"
description: "Condensed revision notes on P3 integration for Edexcel International Advanced Level Maths: standard integrals, recognition, identities and a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These revision notes condense Pearson Edexcel International Advanced Level Mathematics (YMA01) Pure Mathematics 3, topics 5.1 and 5.2, from the *International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics* specification (Issue 3, April 2019). The specification states P3 is compulsory for IAL Mathematics and Pure Mathematics only, and is not part of IAS.

For full explanations and worked examples, read the [study guide](/resources/edexcel-ial-mathematics-integration-of-exponential-reciprocal-and/). To test yourself, use the [practice questions](/resources/edexcel-ial-mathematics-integration-of-exponential-reciprocal-and-practice/). The [Edexcel IAL Mathematics hub](/boards/edexcel/a-level/mathematics/), the [printable checklist](/checklists/edexcel/a-level/mathematics/) and the [free diagnostics](/diagnostics/) help you decide what to revise next.

## 5.1 Standard integrals

| Integrand | Integral | Note |
|---|---|---|
| e^kx | (1/k) e^kx + c | divide by k |
| 1/x | ln|x| + c | modulus unless x > 0 is given |
| 1/(2x) | ½ ln|x| + c | constant multiple comes out |
| sin kx | −(1/k) cos kx + c | minus sign |
| cos kx | (1/k) sin kx + c | no sign change |

Integrate sums and differences term by term. Constants multiply through.

### Method in steps

1. Split the integrand into separate terms.
2. Take out any constant multiplier.
3. Integrate each term with the table, dividing by k.
4. Add a single constant c (indefinite) or substitute limits (definite).
5. Differentiate your answer to check it.

### Small reminder

∫ (6e^(2x) − 4 sin 3x) dx = 3e^(2x) + (4/3) cos 3x + c. The sign flips twice: once from the minus in the integrand and once from the integral of sin.

## 5.2 Recognition

| Form | Result | Condition |
|---|---|---|
| f′(x)/f(x) | ln|f(x)| + c | numerator is f′(x), or a constant multiple of it |
| f′(x)[f(x)]ⁿ | [f(x)]ⁿ⁺¹/(n + 1) + c | n ≠ −1 |
| tan x | −ln|cos x| + c = ln|sec x| + c | from sin x / cos x |
| sec² kx | (1/k) tan kx + c | d/dx (tan x) = sec² x |

### Method in steps for recognition

1. Choose f(x): usually the denominator, the bracket or the inner function.
2. Differentiate it to get f′(x).
3. Compare f′(x) with what is in the integrand. Note the constant needed to match.
4. Multiply the answer by the reciprocal of that constant.
5. Differentiate to check.

### Small reminders

```
∫ 5/(2x + 1) dx : f = 2x + 1, f′ = 2, so 5/(2x + 1) = (5/2) × 2/(2x + 1)
                  answer (5/2) ln|2x + 1| + c

∫ x e^(x²) dx   : f = x², the e^(f) form (derivative of e^(x²) is 2x e^(x²))
                  answer ½ e^(x²) + c

∫ 3x²(x³ − 1)³ dx : f = x³ − 1, f′ = 3x², n = 3
                  answer (x³ − 1)⁴/4 + c
```

The second example uses the fact that e^(f(x)) differentiates to f′(x) e^(f(x)). It follows from the chain rule rather than from either of the two named forms, but recognition works the same way.

## Trigonometric identities for integrating

| Integrand | Rewrite as | Integral |
|---|---|---|
| sin² kx | ½(1 − cos 2kx) | x/2 − (sin 2kx)/(4k) + c |
| cos² kx | ½(1 + cos 2kx) | x/2 + (sin 2kx)/(4k) + c |
| tan² kx | sec² kx − 1 | (1/k) tan kx − x + c |
| sin x cos x | ½ sin 2x | −¼ cos 2x + c |

The first two rows come from cos 2A = 1 − 2 sin² A and cos 2A = 2 cos² A − 1. The third comes from sec² A = 1 + tan² A. Expanding a bracket such as (1 + tan x)² gives sec² x + 2 tan x.

### Worked reminder

∫ from 0 to π/3 of sin² 3x dx.

```
sin² 3x = ½(1 − cos 6x)
Antiderivative: x/2 − (sin 6x)/12
At π/3: π/6 − (sin 2π)/12 = π/6
At 0:   0
Answer: π/6
```

## Exact values you need at hand

Definite integrals in this topic usually have limits such as 0, π/6, π/4, π/3 and π/2, so the exact values must be automatic.

| Angle | sin | cos | tan |
|---|---|---|---|
| 0 | 0 | 1 | 0 |
| π/6 | ½ | √3/2 | 1/√3 |
| π/4 | √2/2 | √2/2 | 1 |
| π/3 | √3/2 | ½ | √3 |
| π/2 | 1 | 0 | undefined |

Check the limits against the function. For example, ∫ tan x dx has an undefined integrand at π/2, so a limit of π/2 would be a warning sign.

## More worked reminders

### A definite integral with tan and sec²

Evaluate ∫ from 0 to π/16 of sec² 4x dx.

```
∫ from 0 to π/16 of sec² 4x dx = [ (1/4) tan 4x ]
                               = (1/4) tan(π/4) − (1/4) tan 0
                               = 1/4
```

### Two routes to the same integral

The integral of sin x cos x can be found by recognition or by an identity.

```
Recognition: f = sin x, f′ = cos x, n = 1   gives  (sin² x)/2 + c
Identity:    ½ sin 2x                       gives  −¼ cos 2x + c
```

The two answers look different but differ by a constant, because −¼ cos 2x = (sin² x)/2 − ¼. Both are correct. Pick whichever the question's limits make simpler.

### A negative coefficient in a logarithm

```
∫ from 0 to 2 of 8/(5 − 2x) dx = [ −4 ln|5 − 2x| ]
                                = −4 ln 1 + 4 ln 5
                                = 4 ln 5
```

The denominator stays positive on this interval, so the modulus does not change any value.

## Reading a question: what to do first

Most errors come from starting to integrate before reading the shape of the integrand. Take ten seconds to sort the question.

| What you see | What to do |
|---|---|
| A sum of e^kx, 1/x, sin kx, cos kx terms | Integrate each term, dividing by k |
| A fraction with an obvious inner function | Differentiate the denominator and compare with the numerator |
| A bracket raised to a power, with a related term outside | Test whether the outside term is the derivative of the bracket |
| sin², cos² or tan² | Apply the identity first |
| A bracket squared containing sin and cos | Expand, then use sin² x + cos² x = 1 and sin 2x |
| Limits given in terms of π | Keep radians and use exact values |

If two methods seem to apply, choose the one with fewer steps. If neither fits, look for an algebraic rewrite, such as splitting a fraction or adding and subtracting a term in the numerator.

## Checking an answer by differentiating

Differentiation is the fastest check. Work backwards through your result and confirm that it returns the integrand.

```
Result: 2 ln|5x + 3| + c
Check:  2 × 5/(5x + 3) = 10/(5x + 3)
```

For a definite integral, a rough check is also useful. If the integrand is positive on the interval, the value must be positive. If the interval is short and the integrand is near 1, the value should be near the interval length.

## Must-know distinctions

- Derivative versus integral of tan x: d/dx (tan x) = sec² x, but ∫ tan x dx = −ln|cos x| + c.
- Derivative versus integral of sin kx: differentiating gives k cos kx. Integrating gives −(1/k) cos kx.
- ln|f(x)| (the f′/f form) versus [f(x)]ⁿ⁺¹/(n + 1) (the power form). The case n = −1 switches between them.
- Indefinite integral (needs + c) versus definite integral (no constant, limits substituted).
- Forms that look similar: 1/(x² + 3) is not of the f′/f form, because the numerator is not a multiple of 2x.

## Quick self-test

Answer each question, then check below. Assume x > 0 where a logarithm of x appears.

1. Find ∫ (10e^(5x) + 1/(3x)) dx.
2. Find ∫ (cos 4x − sin(x/3)) dx.
3. Evaluate ∫ from 0 to 1 of (e^(2x) + e^(−2x)) dx, giving an exact answer.
4. Find ∫ 2x/(x² + 9) dx.
5. Find ∫ 4/(2x + 1) dx, for x > 0.
6. Find ∫ sin x cos² x dx.
7. Find ∫ sec²(x/2) dx.
8. Evaluate ∫ from 0 to π/3 of sin² 3x dx.
9. Evaluate ∫ from 0 to π/4 of (tan² x + 1) dx.
10. Show that ∫ from 0 to π/6 of tan x dx = ½ ln(4/3).
11. Find ∫ 3x²(x³ − 1)³ dx.

### Answers

1. 2e^(5x) + (1/3) ln x + c
2. (sin 4x)/4 + 3 cos(x/3) + c
3. (e² − e^(−2))/2
4. ln(x² + 9) + c
5. 2 ln(2x + 1) + c
6. −(cos³ x)/3 + c
7. 2 tan(x/2) + c
8. π/6
9. 1, since tan² x + 1 = sec² x and ∫ sec² x dx = tan x, so the value is tan(π/4) − tan 0.
10. [−ln cos x] from 0 to π/6 = −ln(√3/2) = ln(2/√3) = ½ ln(4/3).
11. (x³ − 1)⁴/4 + c

## Where marks are usually lost

- Leaving out the 1/k when integrating e^kx, sin kx or cos kx with a linear argument.
- Missing the minus sign in the integral of sin kx, or adding one to the integral of cos kx.
- Writing ln x without a modulus where x could be negative.
- Mishandling a negative coefficient of x, for example 6/(3 − 2x), where the sign in front of the logarithm changes.
- Forgetting the arbitrary constant in an indefinite integral.
- Trying to integrate sin² x, cos² x or tan² x without first applying an identity.
- Working in degrees when a limit is given in terms of π.
- Leaving an unsimplified exact answer, such as 6 ln 4 instead of 12 ln 2, or a trigonometric value that should be exact.
- Giving a bare answer to a "show that" question. Write each stage so the route from the integral to the stated result is visible.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019, first teaching September 2018, published by Pearson Education Limited. These notes cover Unit P3 topics 5.1 and 5.2.
