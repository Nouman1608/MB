---
title: "OCR A Level Mathematics A: Binomial expansion: integer and rational powers (H240)"
seoTitle: "OCR A Level Maths Binomial Expansion Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "The binomial expansion: positive integer and rational powers"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 110
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-ocr-alevel-maths"
    subtopic: "sequences-and-series-ocr-alevel-maths"
description: "Study guide to the binomial expansion for OCR A Level Mathematics A: positive integer and rational powers, validity, approximations and partial fractions."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This study guide follows the OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), for first assessment in 2018. It covers 1.04a to 1.04d, the binomial expansion, together with the way the specification asks you to combine it with partial fractions (1.02y). Positive integer powers and the link to binomial probabilities (1.04a and 1.04b) sit in Stage 1, which is common with AS. Rational powers and validity (1.04c and 1.04d) are **A Level only**. Each of the specification's three components assesses Pure Mathematics content.

Related pages: the [OCR Mathematics A hub](/boards/ocr/a-level/mathematics/), the [printable checklist](/checklists/ocr/a-level/mathematics/), the [revision notes](/resources/ocr-a-level-mathematics-the-binomial-expansion-positive-integer-and-rational-revision-notes/), the [practice set](/resources/ocr-a-level-mathematics-the-binomial-expansion-positive-integer-and-rational-practice/), the wider [Pure Mathematics guide](/resources/ocr-a-level-mathematics-pure-mathematics/) and the [free diagnostics](/diagnostics/).

## What this unit covers

| Ref | What you must be able to do | Stage |
|---|---|---|
| 1.04a | Expand (a + bx)ⁿ for positive integer n; use n!, nCr, Pascal's triangle; know 0! = 1 and nC0 = nCn = 1 | Stage 1 (common with AS) |
| 1.04b | Know the link to binomial probabilities | Stage 1 (common with AS) |
| 1.04c | Expand (a + bx)ⁿ for any rational n, including for approximation | A Level only |
| 1.04d | Know the expansion is valid when bx/a lies between −1 and 1 (no proof needed) | A Level only |
| 1.02y (use) | Use partial fractions with the expansion to find a power series | A Level only |

For rational n the specification says you may be asked for a particular term, but not for the general term.

## Factorials and binomial coefficients (1.04a)

n! is the product of the integers from 1 to n, and 0! = 1. The number of ways of choosing r items from n is

```
nCr = n! / ( r! (n − r)! )
```

You will also see it written as ⁿCr, or as n over r in a bracket (the column form). Two facts save work: nC0 = nCn = 1, and nCr = nC(n−r).

Pascal's triangle builds the coefficients. Each entry is the sum of the two above it.

```
n=0:          1
n=1:        1   1
n=2:      1   2   1
n=3:    1   3   3   1
n=4:  1   4   6   4   1
n=5: 1  5  10  10  5  1
n=6: 1 6 15 20 15 6 1
```

**Worked example 1.** Find 7C2 and 10C4 by hand.

```
7C2  = (7 × 6)/(2 × 1) = 21
10C4 = (10 × 9 × 8 × 7)/(4 × 3 × 2 × 1) = 5040/24 = 210
```

Cancel before multiplying. Write only as many factors on top as there are on the bottom.

## Expanding (a + bx)ⁿ for positive integer n (1.04a)

```
(a + bx)ⁿ = aⁿ + nC1 aⁿ⁻¹(bx) + nC2 aⁿ⁻²(bx)² + … + (bx)ⁿ
```

The powers of a fall by one each term, the powers of bx rise by one, and the two powers always add to n. The expansion has n + 1 terms and is valid for every x.

**Worked example 2.** Expand (4 + 3x)⁵ in full.

```
Coefficients from row 5: 1, 5, 10, 10, 5, 1
Term in x⁰:  4⁵ = 1024
Term in x¹:  5 × 4⁴ × 3x        = 3840x
Term in x²:  10 × 4³ × (3x)²    = 10 × 64 × 9 x² = 5760x²
Term in x³:  10 × 4² × (3x)³    = 10 × 16 × 27 x³ = 4320x³
Term in x⁴:  5 × 4 × (3x)⁴      = 5 × 4 × 81 x⁴ = 1620x⁴
Term in x⁵:  (3x)⁵              = 243x⁵
```

(4 + 3x)⁵ = 1024 + 3840x + 5760x² + 4320x³ + 1620x⁴ + 243x⁵.

Check: put x = 1. Then (4 + 3)⁵ = 7⁵ = 16807, and the six coefficients add to 16807.

**Worked example 3 (unknown constant).** In the expansion of (1 + kx)⁸, k ≠ 0, the coefficient of x² is 7 times the coefficient of x. Find k.

```
Coefficient of x:  8C1 k  = 8k
Coefficient of x²: 8C2 k² = 28k²
28k² = 7 × 8k
28k² = 56k
k = 2        (k ≠ 0, so divide by 28k)
```

**Worked example 4 (a product).** Find the coefficient of x² in (2 + x)(1 − 3x)⁵.

```
(1 − 3x)⁵ = 1 − 15x + 90x² − …      (5C1(−3) = −15; 5C2(−3)² = 90)
x² terms: 2 × 90x²  and  x × (−15x)
Coefficient = 180 − 15 = 165
```

Only multiply the pairs that give x². Do not expand everything.

## The link to binomial probabilities (1.04b)

If X ~ B(n, p) and q = 1 − p, then P(X = r) = nCr pʳ qⁿ⁻ʳ. This is the term in pʳ of the expansion of (q + p)ⁿ. Because (q + p)ⁿ = 1ⁿ = 1, the probabilities add to 1. The coefficients nCr count the arrangements of r successes among n trials.

**Worked example 5.** X ~ B(7, 0.4). Find P(X = 3).

```
P(X = 3) = 7C3 × 0.4³ × 0.6⁴
         = 35 × 0.064 × 0.1296
         = 0.290304  = 0.290 (3 s.f.)
```

## Rational powers (1.04c, A Level only)

For any rational n (negative or fractional) and |x| < 1:

```
(1 + x)ⁿ = 1 + nx + (x²/2!)n(n−1) + (x³/3!)n(n−1)(n−2) + …
```

The series does not stop for negative or fractional n. For a positive integer n one factor in the numerator becomes zero, so the series stops, which matches 1.04a.

To expand (a + bx)ⁿ, take out aⁿ first. The specification expects you to write it as

```
(a + bx)ⁿ = aⁿ (1 + bx/a)ⁿ
```

then substitute u = bx/a into the (1 + u)ⁿ series. Keep the sign of b inside u.

**Worked example 6.** Expand (2 + 3x)⁻² up to the term in x³.

```
(2 + 3x)⁻² = 2⁻² (1 + 3x/2)⁻² = (1/4)(1 + u)⁻²,  u = 3x/2
(1 + u)⁻² = 1 − 2u + 3u² − 4u³ + …
          = 1 − 3x + 27x²/4 − 27x³/2 + …
(2 + 3x)⁻² = 1/4 − 3x/4 + 27x²/16 − 27x³/8 + …
```

**Worked example 7.** Expand (9 − 4x)^(−1/2) up to the term in x³.

```
(9 − 4x)^(−1/2) = 9^(−1/2) (1 − 4x/9)^(−1/2) = (1/3)(1 + u)^(−1/2),  u = −4x/9
(1 + u)^(−1/2) = 1 − u/2 + 3u²/8 − 5u³/16 + …
  −u/2   = 2x/9
  3u²/8  = (3/8)(16x²/81) = 2x²/27
  −5u³/16 = −(5/16)(−64x³/729) = 20x³/729
Multiply by 1/3:
(9 − 4x)^(−1/2) = 1/3 + 2x/27 + 2x²/81 + 20x³/2187 + …
```

**Worked example 7b (positive fractional power).** Find the first three terms of (8 + x)^(2/3) and state when the expansion is valid.

```
(8 + x)^(2/3) = 8^(2/3) (1 + x/8)^(2/3) = 4 (1 + u)^(2/3),  u = x/8
(1 + u)^(2/3) = 1 + (2/3)u + [(2/3)(−1/3)/2] u² + …
              = 1 + 2u/3 − u²/9 + …
              = 1 + x/12 − x²/576 + …
(8 + x)^(2/3) = 4 + x/3 − x²/144 + …        valid for |x| < 8
```

Work out aⁿ first, using the root before the power: 8^(2/3) = (∛8)² = 4.

## Validity (1.04d, A Level only)

The expansion of (1 + u)ⁿ for rational n is valid when |u| < 1. The proof is not required. With u = bx/a the condition is |bx/a| < 1, so

```
|x| < |a/b|
```

In Worked example 6, |3x/2| < 1 gives |x| < 2/3. In Worked example 7, |4x/9| < 1 gives |x| < 9/4.

For a positive integer n there is no restriction, because the expansion is finite. State the range whenever the question asks for it, and always as an inequality on x, not on u.

## Approximations

A series gives a good estimate when x is small, so choose the substitution that makes it small.

**Worked example 8.** Use √(1 + x) = 1 + x/2 − x²/8 + … to estimate √17.

```
√17 = √16 × √(1 + 1/16) = 4 √(1 + x),  x = 1/16
Check |x| < 1: yes
√(1 + 1/16) ≈ 1 + 1/32 − 1/2048
√17 ≈ 4 (1 + 1/32 − 1/2048) = 4.123046875 ≈ 4.12305
```

The true value is 4.12311 to 5 decimal places, so the two differ by about 0.00006. Writing √17 = √(1 + 16) would fail, because x = 16 breaks |x| < 1.

## Partial fractions with the expansion (1.02y)

Split the fraction, expand each part, then add. The result is valid only where all parts are valid, so take the **smallest** range.

**Worked example 9.** Write (1 + 8x)/((1 − x)(1 + 2x)) in partial fractions, expand to x³ and state the validity.

```
(1 + 8x) = A(1 + 2x) + B(1 − x)
x = 1:      9 = 3A      so A = 3
x = −1/2:  −3 = (3/2)B  so B = −2
f(x) = 3/(1 − x) − 2/(1 + 2x)

3(1 − x)⁻¹ = 3 + 3x + 3x² + 3x³ + …            valid |x| < 1
−2(1 + 2x)⁻¹ = −2 + 4x − 8x² + 16x³ − …        valid |x| < 1/2

f(x) = 1 + 7x − 5x² + 19x³ + …
```

Both parts hold when |x| < 1/2, so the expansion is valid for |x| < 1/2.

## Common errors

- Writing (2 + 3x)ⁿ = 2ⁿ(1 + 3x)ⁿ. The bracket must be (1 + 3x/2).
- Using 3x as u when the bracket is (3 + 2x): u is 2x/3.
- Forgetting that (3x)² = 9x², so squaring only the x.
- Losing a minus sign when u is negative and an odd power is taken.
- Giving the validity as |x| < 1 for every question. Divide by the coefficient of x.
- Expanding a rational power and then saying "valid for all x".
- In an approximation, choosing x outside the validity range.

## Next steps

Condense with the [revision notes](/resources/ocr-a-level-mathematics-the-binomial-expansion-positive-integer-and-rational-revision-notes/), then try the [practice set](/resources/ocr-a-level-mathematics-the-binomial-expansion-positive-integer-and-rational-practice/). Tick off 1.04a to 1.04d on the [checklist](/checklists/ocr/a-level/mathematics/).

## Official syllabus

OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), for first assessment in 2018, published by OCR: sections 1.04a to 1.04d and 1.02y.
