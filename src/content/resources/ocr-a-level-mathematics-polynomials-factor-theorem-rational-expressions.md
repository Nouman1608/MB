---
title: "OCR A Level Mathematics A: Polynomials, factor theorem, rational expressions, partial fractions and modelling with functions (H240)"
seoTitle: "OCR A Level Maths Polynomials and Partial Fractions Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Polynomials, factor theorem, rational expressions, partial fractions and modelling with functions"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 105
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-ocr-alevel-maths"
    subtopic: "algebra-and-functions-ocr-alevel-maths"
description: "Study guide to OCR A Level Maths A polynomials, the factor theorem, rational expressions, partial fractions and modelling, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide follows the OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), and covers content references 1.02j, 1.02k, 1.02y and 1.02z in Algebra and functions. It teaches polynomial manipulation, the factor theorem, algebraic division, rational expressions, partial fractions and the use of functions in modelling. Pure Mathematics is examined in Papers 1, 2 and 3 of the A Level. Content is labelled Stage 1 (common with AS) or A Level only (Stage 2), as the specification marks it.

Links: [course hub](/boards/ocr/a-level/mathematics/) | [printable checklist](/checklists/ocr/a-level/mathematics/) | [revision notes](/resources/ocr-a-level-mathematics-polynomials-factor-theorem-rational-expressions-revision-notes/) | [practice questions](/resources/ocr-a-level-mathematics-polynomials-factor-theorem-rational-expressions-practice/) | [free 10-minute diagnostics](/diagnostics/) | [Pure Mathematics overview](/resources/ocr-a-level-mathematics-pure-mathematics/)

## What this unit covers

| Reference | What you must be able to do | Stage |
|---|---|---|
| 1.02j | Expand, collect like terms, factorise, use simple algebraic division and the factor theorem | Stage 1 (AS and A Level) |
| 1.02j | Use the factor theorem to find a linear factor, normally of a polynomial of degree 3 or less, and find other factors by any valid method | Stage 1 |
| 1.02k | Simplify rational expressions by factorising and cancelling and by algebraic division | A Level only |
| 1.02k | Divide a polynomial of degree 2 or more by (ax − b), identify the quotient and remainder, solve equations of degree 4 or less | A Level only |
| 1.02y | Decompose rational functions into partial fractions; use them with the binomial expansion or in integration | A Level only |
| 1.02z | Use functions in modelling: assumptions, limitations, refinements, comparing models | A Level only |

Learn the vocabulary first. A polynomial is a sum of terms axⁿ with n a whole number of at least 0. Its degree is the highest power. Degree 2 is a quadratic and degree 3 is a cubic. The graph of a quadratic is a parabola.

## 1. Expanding and collecting (1.02j, Stage 1)

Multiply every term in one bracket by every term in the next, then collect like terms.

**Example 1.** Expand and simplify (x + 2)(2x − 3)(x + 5).

```
(x + 2)(2x − 3) = 2x² − 3x + 4x − 6 = 2x² + x − 6
(2x² + x − 6)(x + 5) = 2x³ + 10x² + x² + 5x − 6x − 30
                     = 2x³ + 11x² − x − 30
```

Multiply two brackets first, then bring in the third. Check by substituting x = 1 into both forms: 3 × (−1) × 6 = −18 and 2 + 11 − 1 − 30 = −18.

## 2. The factor theorem and the remainder (1.02j, Stage 1)

Write f(x) for the polynomial. The specification gives the factor theorem in two forms:

1. f(a) = 0 if and only if (x − a) is a factor of f(x).
2. f(b/a) = 0 if and only if (ax − b) is a factor of f(x).

To test (2x − 1), substitute x = 1/2, the value that makes the bracket zero.

**Example 2.** Factorise f(x) = 2x³ + x² − 13x + 6 completely.

Try small factors of 6. f(2) = 16 + 4 − 26 + 6 = 0, so (x − 2) is a factor. Divide, or match coefficients:

```
2x³ + x² − 13x + 6 = (x − 2)(2x² + 5x − 3)
2x² + 5x − 3 = (2x − 1)(x + 3)
```

So f(x) = (x − 2)(2x − 1)(x + 3). Check: f(1/2) = 1/4 + 1/4 − 13/2 + 6 = 0.

The specification allows any valid method for the remaining factors, including inspection.

## 3. Algebraic division and the remainder (1.02k, A Level only)

Dividing f(x) by (ax − b) gives a quotient and a remainder:

f(x) = (ax − b) × quotient + remainder

The remainder is a constant. Put x = b/a in the identity and the bracket vanishes, so the remainder is f(b/a). A zero remainder means the bracket is a factor.

**Example 3.** Divide 6x³ + x² − 7x + 6 by (3x − 1).

Work term by term, always dividing the leading term of what is left by 3x.

```
6x³ ÷ 3x = 2x²      subtract 2x²(3x − 1) = 6x³ − 2x²    leaves 3x² − 7x
3x²  ÷ 3x = x       subtract x(3x − 1)   = 3x² − x      leaves −6x + 6
−6x  ÷ 3x = −2      subtract −2(3x − 1)  = −6x + 2      leaves 4
```

Quotient 2x² + x − 2, remainder 4. Check with the remainder rule: f(1/3) = 6/27 + 1/9 − 7/3 + 6 = 4.

**Example 4 (finding an unknown; the divisor (2x − 1) in the last part is A Level only).** The polynomial p(x) = 2x³ + kx² − 5x + 4 leaves remainder 6 when divided by (x + 2). Find k, then find the remainder on division by (2x − 1).

```
p(−2) = −16 + 4k + 10 + 4 = 4k − 2 = 6, so k = 2
p(1/2) = 2/8 + 2/4 − 5/2 + 4 = 9/4
```

The remainder on division by (2x − 1) is 9/4. Substitute the root of the divisor, not the number in the bracket.

## 4. Solving polynomial equations of degree 4 or less (1.02k, A Level only)

Find one factor with the factor theorem, divide, and repeat on the quotient until you reach a quadratic.

**Example 5.** Solve x⁴ − 3x³ − 6x² + 28x − 24 = 0.

```
f(2) = 16 − 24 − 24 + 56 − 24 = 0, so (x − 2) is a factor
f(x) = (x − 2)(x³ − x² − 8x + 12)
g(2) = 8 − 4 − 16 + 12 = 0, so (x − 2) divides the cubic again
g(x) = (x − 2)(x² + x − 6) = (x − 2)(x − 2)(x + 3)
```

So f(x) = (x − 2)³(x + 3). The solutions are x = 2 (a repeated root) and x = −3. Test a value again on the quotient before moving on, because a root can repeat.

## 5. Rational expressions (1.02k, A Level only)

A rational expression is a polynomial divided by a polynomial. Factorise top and bottom, then cancel common factors. Only cancel brackets, never terms.

**Example 6.** Simplify (2x² − x − 6)/(x² − 4) and state the values of x that cannot be used.

```
2x² − x − 6 = (2x + 3)(x − 2)
x² − 4      = (x − 2)(x + 2)
Result: (2x + 3)/(x + 2)
```

The original expression is undefined at x = 2 and x = −2, so the simplified form has to be read with x ≠ 2 and x ≠ −2.

**Multiplying and dividing.** To divide, multiply by the reciprocal, then factorise everything before multiplying out.

```
(x² − x − 6)(x² + 4x + 3) / [(x² − 9)(x + 3)]
= (x − 3)(x + 2)(x + 1)(x + 3) / [(x − 3)(x + 3)(x + 3)]
= (x + 1)(x + 2)/(x + 3)
```

**Adding and subtracting.** Use a common denominator.

```
3/(x − 1) − 2/(x + 4) = [3(x + 4) − 2(x − 1)] / [(x − 1)(x + 4)]
                      = (x + 14)/[(x − 1)(x + 4)]
```

**Dividing a cubic by a linear expression.** When the top has higher degree than the bottom, divide first.

**Example 7.** Write (x³ − 2x² − 5x + 7)/(x − 3) as a polynomial plus a fraction.

Dividing gives quotient x² + x − 2 and remainder 1, because (x − 3)(x² + x − 2) = x³ − 2x² − 5x + 6. The check is f(3) = 27 − 18 − 15 + 7 = 1. So

(x³ − 2x² − 5x + 7)/(x − 3) = x² + x − 2 + 1/(x − 3).

## 6. Partial fractions (1.02y, A Level only)

Partial fractions undo the addition of fractions. The specification limits denominators to forms no more complicated than (ax + b)(cx + d)² or (ax + b)(cx + d)(ex + f), with a constant or linear numerator.

| Denominator contains | Partial fractions have the form |
|---|---|
| Distinct factors (x + p)(x + q) | A/(x + p) + B/(x + q) |
| A repeated factor (x + p)² | A/(x + p) + B/(x + p)² |
| Three distinct linear factors | A/(·) + B/(·) + C/(·) |

**Example 8 (distinct factors).** Express (10x − 5)/[(x + 1)(2x − 3)] in partial fractions.

Write 10x − 5 ≡ A(2x − 3) + B(x + 1).

```
x = −1:    −15 = −5A,  so A = 3
x = 3/2:    10 = (5/2)B, so B = 4
```

Result: 3/(x + 1) + 4/(2x − 3). Check at x = 0: left side 5/3, right side 3 − 4/3 = 5/3.

**Example 9 (repeated factor).** Express (6x − 2)/[(x − 3)(x + 1)²] in the form A/(x − 3) + B/(x + 1) + C/(x + 1)².

6x − 2 ≡ A(x + 1)² + B(x − 3)(x + 1) + C(x − 3).

```
x = 3:     16 = 16A,     A = 1
x = −1:    −8 = −4C,     C = 2
x² terms:  0 = A + B,    B = −1
```

Result: 1/(x − 3) − 1/(x + 1) + 2/(x + 1)². Substitution finds A and C. Comparing coefficients finds B.

**Example 10 (improper fraction).** Express (2x² + 7x + 1)/[(x + 1)(x + 2)] in partial fractions.

The top and bottom have the same degree, so divide first. The denominator expands to x² + 3x + 2, and 2x² + 7x + 1 = 2(x² + 3x + 2) + (x − 3). Then (x − 3)/[(x + 1)(x + 2)] = A/(x + 1) + B/(x + 2) gives A = −4 and B = 5.

Result: 2 − 4/(x + 1) + 5/(x + 2). The specification states numerators are constant or linear; division first is the usual route when a numerator reaches the degree of the denominator.

**Use 1: integration.** ∫ (10x − 5)/[(x + 1)(2x − 3)] dx = ∫ 3/(x + 1) + 4/(2x − 3) dx = 3 ln|x + 1| + 2 ln|2x − 3| + c.

**Use 2: binomial series.** Take 1/[(1 − x)(1 + 2x)] = (1/3)/(1 − x) + (2/3)/(1 + 2x). Expand each fraction as a series: (1/3)(1 + x + x²) + (2/3)(1 − 2x + 4x²) = 1 − x + 3x² + …, valid for |x| < 1/2, the narrower of the two ranges.

## 7. Functions in modelling (1.02z, A Level only)

A model describes a real situation with a function. The specification asks you to consider assumptions, limitations and refinements, and to compare models.

**Example 11.** A packaging firm makes cuboid boxes with a square base of side x cm. The height is chosen so that the base side plus the height is 12 cm.

Volume: V = x²(12 − x) = 12x² − x³.

**Domain.** The base side and the height must both be positive, so 0 < x < 12.

**Solving V = 128.** Rearrange to x³ − 12x² + 128 = 0. Try x = 4: 64 − 192 + 128 = 0. So (x − 4) is a factor:

```
(x − 4)(x² − 8x − 32) = 0
x = 4 ± 4√3, so x ≈ 10.9 or x ≈ −2.93
```

Only x = 4 and x ≈ 10.9 lie in the domain, so two box shapes give this volume: a 4 cm base with height 8 cm, and a 10.9 cm base with height about 1.1 cm.

**Assumptions and refinement.** The model assumes the walls have no thickness and the dimensions are exact. A refinement allows for the thickness of the material or for an overlap where the lid closes. To compare two models, check each against the data and against the situation, as in the table below.

| Model | Strength | Limitation |
|---|---|---|
| Linear | Simple; fits data over a short range | Grows without limit |
| Quadratic | Allows a maximum or a turning point | May predict impossible values later |

Always state what a result means in context and whether it lies in the domain.

## Common errors

- Substituting the number in the bracket instead of the root: for (2x − 1) use x = 1/2.
- Cancelling terms, as in (x + 3)/(x + 5), instead of cancelling factors.
- Missing the repeated root in a quartic by testing each value only once.
- Forgetting the B/(x + p) term when a factor is squared.
- Using partial fractions on an improper fraction without dividing first.
- Leaving a solution outside the domain of a model.

Next, test yourself with the [revision notes](/resources/ocr-a-level-mathematics-polynomials-factor-theorem-rational-expressions-revision-notes/) and the [practice questions](/resources/ocr-a-level-mathematics-polynomials-factor-theorem-rational-expressions-practice/). Find weak points with the [diagnostics](/diagnostics/).

## Official syllabus

OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), for first assessment in 2018, published by OCR. This guide covers content references 1.02j, 1.02k, 1.02y and 1.02z.
