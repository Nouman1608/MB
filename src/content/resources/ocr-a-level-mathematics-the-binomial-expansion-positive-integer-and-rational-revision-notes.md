---
title: "OCR A Level Mathematics A: Binomial expansion: integer and rational powers (H240) -- Revision Notes"
seoTitle: "OCR A Level Maths Binomial Expansion Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed recall notes on the binomial expansion for OCR A Level Mathematics A: formulas, methods, validity, approximations and a quick self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

Condensed for the final weeks. For full explanations and longer worked examples, use the [binomial expansion study guide](/resources/ocr-a-level-mathematics-the-binomial-expansion-positive-integer-and-rational/). These notes follow the OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), for first assessment in 2018, sections 1.04a to 1.04d and the partial fractions use in 1.02y. Positive integer n and the probability link are Stage 1 (common with AS). Rational n and validity are **A Level only**.

Links: [OCR Mathematics A hub](/boards/ocr/a-level/mathematics/), [printable checklist](/checklists/ocr/a-level/mathematics/), [practice set](/resources/ocr-a-level-mathematics-the-binomial-expansion-positive-integer-and-rational-practice/), [Pure Mathematics revision notes](/resources/ocr-a-level-mathematics-pure-revision-notes/) and [free diagnostics](/diagnostics/).

## Key results

| Result | Statement | Stage |
|---|---|---|
| Factorial | n! = n(n−1)…2×1, and 0! = 1 | 1.04a |
| Coefficient | nCr = n! / (r!(n−r)!) | 1.04a |
| Special cases | nC0 = nCn = 1; nCr = nC(n−r) | 1.04a |
| Integer n | (a + bx)ⁿ = aⁿ + nC1 aⁿ⁻¹(bx) + nC2 aⁿ⁻²(bx)² + … + (bx)ⁿ | 1.04a |
| Probability | If X ~ B(n, p), P(X = r) = nCr pʳ(1−p)ⁿ⁻ʳ | 1.04b |
| Rational n | (1 + x)ⁿ = 1 + nx + (x²/2!)n(n−1) + (x³/3!)n(n−1)(n−2) + … | 1.04c, A Level only |
| General bracket | (a + bx)ⁿ = aⁿ(1 + bx/a)ⁿ before expanding | 1.04c, A Level only |
| Validity | bx/a lies between −1 and 1, so x lies between −a/b and a/b (taking a/b as positive) | 1.04d, A Level only |

The specification says you may be asked for a particular term of a rational-power expansion, but not the general term. No proof of validity is required.

## Method for integer n

1. Write the row of coefficients (Pascal's triangle for small n, nCr otherwise).
2. Write each term as coefficient × (power of a) × (power of bx), keeping brackets round bx.
3. Check the powers of a and bx add to n in every term.
4. Check with x = 1: the sum should equal (a + b)ⁿ.

**Reminder.** The coefficient of x² in (2 − x)⁶: 6C2 × 2⁴ × (−1)² = 15 × 16 = **240**. The coefficient of x³ is 6C3 × 2³ × (−1)³ = **−160**.

## Method for rational n

1. Take out aⁿ: (a + bx)ⁿ = aⁿ(1 + bx/a)ⁿ. Work out aⁿ with the root first.
2. Let u = bx/a, including its sign.
3. Write (1 + u)ⁿ = 1 + nu + n(n−1)u²/2! + n(n−1)(n−2)u³/3! + …
4. Substitute for u, simplify each term, then multiply every term by aⁿ.
5. State the validity: |u| < 1, rewritten as a range for x.

**Reminder 1.** (1 − 3x)^(1/2): u = −3x.

```
1 + (1/2)(−3x) + [(1/2)(−1/2)/2](−3x)² + [(1/2)(−1/2)(−3/2)/6](−3x)³
= 1 − 3x/2 − 9x²/8 − 27x³/16 + …        valid |x| < 1/3
```

**Reminder 2.** (4 + x)^(3/2) = 4^(3/2)(1 + x/4)^(3/2) = 8(1 + x/4)^(3/2).

```
(1 + u)^(3/2) = 1 + 3u/2 + 3u²/8 + …   with u = x/4
              = 1 + 3x/8 + 3x²/128 + …
(4 + x)^(3/2) = 8 + 3x + 3x²/16 + …      valid |x| < 4
```

**Reminder 3.** (1 + 2x)⁻³ = 1 − 6x + 24x² − 80x³ + …, valid |x| < 1/2.

## Must-know distinctions

| Idea | Integer n | Rational n (not a positive integer) |
|---|---|---|
| Number of terms | n + 1, so the series stops | Infinite series |
| Valid for | All x | −1 < bx/a < 1 only |
| Form of bracket | (a + bx)ⁿ directly | Factor out aⁿ first |
| Use for approximation | Exact if you use every term | Only if x is within the range and small |

| Often confused | Difference |
|---|---|
| nCr and the full term | nCr is only the coefficient; the powers of a and bx must still be included |
| (bx)² and bx² | The bracket squares the coefficient b as well |
| u and x | u = bx/a is the quantity that must lie between −1 and 1 |
| Range for the sum | For a sum of two fractions, take the intersection (the smaller range) |

## Validity at a glance

Divide the constant term by the coefficient of x, ignoring signs. That quotient is the edge of the range, and the expansion holds for x between minus that value and plus that value.

| Bracket raised to a rational power | u | Valid for |
|---|---|---|
| (2 + x) | x/2 | −2 < x < 2 |
| (3 − 2x) | −2x/3 | −3/2 < x < 3/2 |
| (1 + 5x) | 5x | −1/5 < x < 1/5 |
| (4 − x/2) | −x/8 | −8 < x < 8 |

The sign of b does not change the range, but it does change every odd power in the expansion. When a question asks where the expansion is valid, give an inequality in x. The boundary values themselves are excluded because the condition is strict. Writing the range as |x| < 2 or as −2 < x < 2 says the same thing.

## Approximations

1. Choose x small and inside the validity range.
2. Rewrite the number as a perfect square or cube times a bracket close to 1.
3. Substitute and keep the terms you were asked for.

**Reminder.** Estimate √0.97 using the expansion of (1 − 3x)^(1/2) from Reminder 1.

```
1 − 3x = 0.97, so x = 0.01      (|x| < 1/3, so the series is valid)
1 − 3(0.01)/2 − 9(0.01)²/8 = 1 − 0.015 − 0.0001125 = 0.9848875
√0.97 ≈ 0.98489   (5 d.p.)
```

The next term is about −0.0000017, so three terms already give five decimal places here.

## The link to binomial probabilities

The probability of r successes in n trials is a term of (q + p)ⁿ where q = 1 − p. Since (q + p)ⁿ = 1, the probabilities add to 1.

**Reminder.** X ~ B(4, 0.3).

```
P(X = 1) = 4C1 × 0.3 × 0.7³ = 4 × 0.3 × 0.343 = 0.4116
All five probabilities: 0.2401, 0.4116, 0.2646, 0.0756, 0.0081   (sum = 1)
```

## Finding unknowns and particular terms

Equate the coefficient from the formula to the number given, then solve.

**Reminder 1 (unknown a and n).** The expansion of (1 + ax)ⁿ begins 1 + 10x + 40x². Here n is a positive integer.

```
x:   na = 10
x²:  n(n−1)a²/2 = 40
Substitute a = 10/n:  100(n−1)/(2n) = 40  →  50(n−1) = 40n  →  n = 5, a = 2
```

Check: (1 + 2x)⁵ = 1 + 10x + 40x² + …

**Reminder 2 (product, rational power).** Find the coefficient of x² in (3 − x)(1 + 2x)⁻³.

```
(1 + 2x)⁻³ = 1 − 6x + 24x² − …
x²: 3 × 24 + (−1)(−6) = 72 + 6 = 78
```

## Partial fractions with the expansion

1. Split the fraction: for a repeated factor use A/(1+x) + B/(1+x)² type terms.
2. Rewrite each part as a (1 + u) power, with a negative power for the denominator.
3. Expand each part, add like powers of x.
4. The validity is where every part is valid.

**Reminder.** (5 + x)/((1 + x)²(1 − x)) = 3/(2(1 + x)) + 2/(1 + x)² + 3/(2(1 − x)).

```
3/2 × (1 − x + x² − x³)  +  2 × (1 − 2x + 3x² − 4x³)  +  3/2 × (1 + x + x² + x³)
= 5 − 4x + 9x² − 8x³ + …        valid |x| < 1
```

## Quick self-test

1. Evaluate 9C4.
2. Find n if nC2 = 45.
3. Find the coefficient of x³ in (1 + 2x)⁷.
4. Find the coefficient of x² in (3 + x)⁵.
5. Expand (1 + 2x)⁻³ up to x³ (use the result above).
6. State the range of x for which (4 − 5x)^(1/2) can be expanded.
7. Find the first three terms of (1 − 5x)^(1/5) and the validity.
8. X ~ B(5, 0.2). Find P(X = 2).
9. Find the x² coefficient of (1 + 2x)^(1/3).
10. Use the first three terms of (1 + 2x)⁻³ with x = 0.01 to estimate 1.02⁻³ to 3 d.p.

### Answers

1. 9C4 = (9×8×7×6)/24 = **126**.
2. n(n−1)/2 = 45, so n(n−1) = 90 and n = **10**.
3. 7C3 × 2³ = 35 × 8 = **280**.
4. 5C2 × 3³ = 10 × 27 = **270**.
5. **1 − 6x + 24x² − 80x³**.
6. (4 − 5x)^(1/2) = 2(1 − 5x/4)^(1/2), so |5x/4| < 1 and **|x| < 4/5**.
7. 1 + (1/5)(−5x) + [(1/5)(−4/5)/2](25x²) = **1 − x − 2x²**, valid **|x| < 1/5**.
8. 5C2 × 0.2² × 0.8³ = 10 × 0.04 × 0.512 = **0.2048**.
9. [(1/3)(−2/3)/2] × 4 = **−4/9**.
10. 1 − 6(0.01) + 24(0.0001) = 0.9424, so **0.942** (3 d.p.).

## Where marks are usually lost

- Not taking out aⁿ, or writing the bracket as (1 + bx) instead of (1 + bx/a).
- Dropping brackets: using −3x² where (−3x)² = 9x² is needed.
- A wrong sign on u, so every odd power is wrong.
- Leaving the validity as |u| < 1 rather than a range for x.
- Writing 8^(2/3) as 8 ÷ 3 or giving a root of the wrong order.
- For a sum of partial fractions, giving only one of the two ranges.
- Using a value of x outside the range in an approximation.
- Answering a "find the coefficient" question by expanding the whole bracket and making an arithmetic slip.

## Official syllabus

OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), for first assessment in 2018, published by OCR: sections 1.04a to 1.04d and 1.02y.
