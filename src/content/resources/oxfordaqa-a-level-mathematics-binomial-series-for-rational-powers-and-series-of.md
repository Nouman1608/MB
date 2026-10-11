---
title: "OxfordAQA International AS and A-level Mathematics: Binomial series for rational powers and series of rational functions (9660)"
seoTitle: "OxfordAQA A-level Maths Binomial Series Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Binomial series for rational powers and series of rational functions"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 189
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "p2-sequences-and-series-oxfordaqa-alevel-maths"
description: "Study guide to the binomial series for any rational power and to series of rational functions using partial fractions, for OxfordAQA 9660 Unit P2."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This study guide covers specification section P2.2 (Sequences and series) of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2: the binomial series for any rational power, and the series expansion of rational functions using partial fractions. The specification states that this content is part of International A-level (A2) Unit P2 (Pure Maths) and is not examined at International AS. It applies to International A-level exams from May/June 2019.

Use it with the [revision notes](/resources/oxfordaqa-a-level-mathematics-binomial-series-for-rational-powers-and-series-of-revision-notes/) and the [practice questions](/resources/oxfordaqa-a-level-mathematics-binomial-series-for-rational-powers-and-series-of-practice/). Integer powers are taught in [sequences, series and binomial expansion](/resources/oxfordaqa-a-level-mathematics-sequences-arithmetic-and-geometric-series-and-binomial/). The course hub is [OxfordAQA A-level Mathematics](/boards/oxfordaqa/a-level/mathematics/) and the printable [checklist](/checklists/oxfordaqa/a-level/mathematics/) lists every outcome. If you are not sure where to start, take a free [10-minute diagnostic](/diagnostics/).

## What this unit covers

| Spec | What you must be able to do |
|---|---|
| P2.2 | Expand (1 + x)ⁿ as a series for any rational n, with |x| < 1 |
| P2.2 | Expand (a + bx)ⁿ by taking out a factor, and state the range of x for which it is valid |
| P2.2 | Expand a rational function as a series, including by using partial fractions |

The specification gives the hardest binomial case as a power such as (2 + 3x)⁻², valid for |x| < 2/3. The hardest rational function it names has the shape (3 + 2x²) / ((2x + 1)(x − 3)²): a linear factor and a repeated linear factor. You do not need to handle irreducible quadratic factors in the denominator.

## 1. The binomial series for any rational n

For a positive integer n, (1 + x)ⁿ has n + 1 terms and is true for every x. When n is negative or a fraction, the expansion never stops. It is an infinite series, and it only equals (1 + x)ⁿ when |x| < 1.

```
(1 + x)ⁿ = 1 + nx + n(n − 1)/2! x² + n(n − 1)(n − 2)/3! x³ + …     for |x| < 1
```

Here n! means n factorial: 2! = 2 and 3! = 6. The same pattern continues: each new term multiplies the previous coefficient by the next lower value of n and divides by the next integer.

Work with brackets. A fraction or a negative number must be bracketed every time it is multiplied, or the signs go wrong.

### Worked example 1

Expand (1 − 3x)^(−1/2) in ascending powers of x up to and including x³. State the values of x for which the expansion is valid.

Write the expression as (1 + u)ⁿ with u = −3x and n = −1/2.

```
Term 1:  1
Term 2:  n u = (−1/2)(−3x) = 3x/2
Term 3:  n(n − 1)/2! · u² = (−1/2)(−3/2)/2 · 9x² = (3/8)(9x²) = 27x²/8
Term 4:  n(n − 1)(n − 2)/3! · u³ = (−1/2)(−3/2)(−5/2)/6 · (−27x³)
         = (−5/16)(−27x³) = 135x³/16
```

So (1 − 3x)^(−1/2) = 1 + 3x/2 + 27x²/8 + 135x³/16 + …

The series needs |u| < 1, so |−3x| < 1, which gives |x| < 1/3.

## 2. Expanding (a + bx)ⁿ

The series is for (1 + something)ⁿ only. If the first term is not 1, take it out:

```
(a + bx)ⁿ = aⁿ (1 + (b/a)x)ⁿ
```

Then expand with u = (b/a)x. The condition |u| < 1 becomes |x| < |a/b|. Remember to raise the constant a to the power n as well. With a fractional power, aⁿ is a root, so choose a only when it is simple to evaluate, or leave it as a surd.

### Worked example 2

(a) Expand √(9 + 2x) up to the term in x³. (b) State the range of validity. (c) Use x = 0.1 to estimate √9.2.

```
√(9 + 2x) = (9 + 2x)^(1/2) = 9^(1/2) (1 + 2x/9)^(1/2) = 3 (1 + 2x/9)^(1/2)
```

Let u = 2x/9 and n = 1/2.

```
(1 + u)^(1/2) = 1 + u/2 − u²/8 + u³/16 − …
```

The third and fourth coefficients are (1/2)(−1/2)/2 = −1/8 and (1/2)(−1/2)(−3/2)/6 = 1/16. Substitute u:

```
= 1 + x/9 − (1/8)(4x²/81) + (1/16)(8x³/729)
= 1 + x/9 − x²/162 + x³/1458
```

Multiply by 3:

**(a)** √(9 + 2x) = 3 + x/3 − x²/54 + x³/486 + …

**(b)** |2x/9| < 1, so |x| < 9/2.

**(c)** x = 0.1 is inside the range. Then 9 + 2x = 9.2 and the series gives 3 + 0.03333… − 0.000185… + 0.0000002… ≈ 3.03315. Rounded to 5 decimal places, the series value is 3.03315 and √9.2 is 3.03315.

Estimates like this work best when x is small, because the higher powers shrink quickly.

### Worked example 3

Expand (5 − 4x)⁻² up to the term in x² and state the range of validity.

```
(5 − 4x)⁻² = 5⁻² (1 − 4x/5)⁻² = (1/25)(1 + u)⁻²,   u = −4x/5
(1 + u)⁻² = 1 − 2u + 3u² − …
          = 1 + 8x/5 + 3(16x²/25)
          = 1 + 8x/5 + 48x²/25
```

Multiplying by 1/25: (5 − 4x)⁻² = 1/25 + 8x/125 + 48x²/625 + …

Validity: |4x/5| < 1, so |x| < 5/4.

The coefficients 1, −2, 3, −4 in (1 + u)⁻² are a quick check on any negative-integer power. In general (1 + u)⁻ᵏ starts 1 − ku + k(k + 1)/2 u².

### Why the range matters

The series for (1 + x)⁻¹ is 1 − x + x² − x³ + …, a geometric series with first term 1 and common ratio −x. A geometric series has a sum only if the ratio has modulus less than 1, which is exactly |x| < 1. At x = 2 the terms are 1, −2, 4, −8, … and they grow, so the series cannot equal 1/3. The binomial series has the same limit for every rational n. Outside the range the series is not a valid representation of the function, whatever it looks like.

## 3. Products of a polynomial and a binomial series

When the expression is a product, expand the binomial part to one order higher than you think you need, then multiply out and collect like powers.

### Worked example 4

Expand (3 + x)(1 + 4x)^(−1/2) up to the term in x³ and state the range of validity.

```
(1 + 4x)^(−1/2): u = 4x, n = −1/2
= 1 + (−1/2)(4x) + (−1/2)(−3/2)/2 (16x²) + (−1/2)(−3/2)(−5/2)/6 (64x³)
= 1 − 2x + 6x² − 20x³
```

Multiply by (3 + x):

```
3(1 − 2x + 6x² − 20x³) = 3 − 6x + 18x² − 60x³
x(1 − 2x + 6x² − …)   =     x −  2x² +  6x³
Sum:                     3 − 5x + 16x² − 54x³
```

The expansion is **3 − 5x + 16x² − 54x³ + …**. The factor (3 + x) is a polynomial and has no restriction, so the range comes from 1 + 4x only: |4x| < 1, so |x| < 1/4.

## 4. Series of rational functions

A rational function is a fraction of two polynomials. If the denominator is a product of factors, a single binomial series cannot be used. Split the fraction into partial fractions, expand each part, and add.

Method:

1. Check the numerator has lower degree than the denominator (the cases in the specification do).
2. Write the partial-fraction form. A repeated factor (2 − x)² needs both B/(2 − x) and C/(2 − x)².
3. Find the constants by substitution and comparing coefficients.
4. Rewrite each part as a constant times (1 + u)ⁿ and expand.
5. Add the series term by term.
6. The result is valid only where every part is valid. Take the narrowest range.

### Worked example 5

Express f(x) = (13 + 6x − x²) / ((1 + 3x)(2 − x)²) in partial fractions. Hence expand f(x) up to the term in x³ and state the range of validity.

```
f(x) = A/(1 + 3x) + B/(2 − x) + C/(2 − x)²
13 + 6x − x² = A(2 − x)² + B(1 + 3x)(2 − x) + C(1 + 3x)
```

Put x = −1/3: 13 − 2 − 1/9 = A(7/3)², so 98/9 = 49A/9, which gives A = 2.
Put x = 2: 13 + 12 − 4 = 21 = 7C, so C = 3.
Compare x²: −1 = A − 3B, so −1 = 2 − 3B and B = 1.

So f(x) = 2/(1 + 3x) + 1/(2 − x) + 3/(2 − x)².

Expand each part:

```
2/(1 + 3x)     = 2(1 − 3x + 9x² − 27x³)           = 2 − 6x + 18x² − 54x³
1/(2 − x)      = (1/2)(1 − x/2)⁻¹ = (1/2)(1 + x/2 + x²/4 + x³/8)
               = 1/2 + x/4 + x²/8 + x³/16
3/(2 − x)²     = (3/4)(1 − x/2)⁻² = (3/4)(1 + x + 3x²/4 + x³/2)
               = 3/4 + 3x/4 + 9x²/16 + 3x³/8
```

Here (1 − x/2)⁻² uses 1 + 2u + 3u² + 4u³ with u = x/2.

Add the columns:

```
constant: 2 + 1/2 + 3/4 = 13/4
x:        −6 + 1/4 + 3/4 = −5
x²:       18 + 1/8 + 9/16 = 299/16
x³:       −54 + 1/16 + 3/8 = −857/16
```

**f(x) = 13/4 − 5x + 299x²/16 − 857x³/16 + …**

Validity: the first part needs |3x| < 1, so |x| < 1/3. The others need |x/2| < 1, so |x| < 2. Both must hold, so **|x| < 1/3**.

A quick check: f(0) = 13/(1 × 4) = 13/4, which matches the constant term.

### Factors written as (x − 3)

A denominator such as (x − 3)² is the same as (3 − x)², so 1/(x − 3)² = 1/(9(1 − x/3)²) = (1/9)(1 + 2x/3 + x²/3 + …). A single factor flips its sign: 1/(x − 3) = −1/(3 − x). Always put the constant first and the x-term second, so each part can be written as a constant times (1 + u)ⁿ.

For the specification's own example, (3 + 2x²)/((2x + 1)(x − 3)²) = 2/(7(1 + 2x)) − 6/(7(3 − x)) + 3/(3 − x)². Expanding each part and adding gives 1/3 − 4x/9 + 11x²/9 + …, valid for |x| < 1/2. The specification's binomial example is (2 + 3x)⁻² = (1/4)(1 + 3x/2)⁻² = 1/4 − 3x/4 + 27x²/16 − …, valid for |x| < 2/3.

## Common errors

- Forgetting to raise the constant to the power. In (4 + x)^(−1/2) the leading factor is 4^(−1/2) = 1/2, not 4.
- Dropping a bracket on a negative u. In (1 − 3x)^(−1/2) the u² term uses (−3x)² = +9x², and the u³ term is negative.
- Giving the validity as |x| < 1 for every expression. It is |u| < 1, so for (1 + 4x) it is |x| < 1/4.
- Stopping at the first partial fraction found, or using only B/(2 − x) for a squared factor.
- Mixing up the sign of the series for a factor written as (x − 3).
- Stating the range of one partial fraction rather than the narrowest range for all of them.

## Next steps

Try the [practice questions](/resources/oxfordaqa-a-level-mathematics-binomial-series-for-rational-powers-and-series-of-practice/), check the key results in the [revision notes](/resources/oxfordaqa-a-level-mathematics-binomial-series-for-rational-powers-and-series-of-revision-notes/), and tick the outcome off on the [checklist](/checklists/oxfordaqa/a-level/mathematics/). Take the [diagnostic](/diagnostics/) to find your weakest area.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, section P2.2 (International AS exams from May/June 2018, A-level from May/June 2019), published by OxfordAQA.
