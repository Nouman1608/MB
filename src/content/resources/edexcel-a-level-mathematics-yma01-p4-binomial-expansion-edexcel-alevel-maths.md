---
title: "Edexcel International A Level Mathematics (YMA01): P4 Binomial expansion"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit P4: Pure Mathematics 4"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 4.4
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p4-pure-mathematics-4-edexcel-alevel-maths"
    subtopic: "p4-binomial-expansion-edexcel-alevel-maths"
description: "Edexcel IAL Maths P4 binomial series for rational n: expanding (a + bx)^n, validity, approximations, unknown constants and partial fraction expansions."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers section 4 of Unit P4: Pure Mathematics 4 in the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification (YMA01), Issue 3. The specification asks for the "Binomial Series for any rational n", and its guidance adds that you should be able to expand (ax + b)ⁿ for |x| < b/a and expand rational functions "by decomposition into partial fractions".

In Pure Mathematics 2 the power n was a positive integer, so the expansion stopped. In P4, n can be negative or a fraction. The series then never stops, and it only works for some values of x. Those two facts are behind most of the marks in this topic.

## What the specification asks for

| Skill | What it means in a question |
|---|---|
| Series for rational n | Expand (1 + x)ⁿ in ascending powers of x up to a stated term |
| Expanding (a + bx)ⁿ | Take out the factor aⁿ first, then expand (1 + bx/a)ⁿ |
| Validity | State the range of x for which the series converges |
| Rational functions | Split into partial fractions, expand each one, then add |

The formulae booklet gives the series:

```
(1 + x)^n = 1 + nx + n(n-1)/2! x^2 + n(n-1)(n-2)/3! x^3 + ...      |x| < 1
```

The coefficient of xʳ is n(n − 1)(n − 2)…(n − r + 1)/r!. There are r factors on the top, each one less than the last. When n is a negative integer or a fraction, no factor ever becomes zero, so the series is infinite.

## Replacing x by a multiple of x

Most questions do not give (1 + x)ⁿ. They give something like (1 − 3x)⁻². Replace every x in the booklet formula by the whole term −3x, in brackets:

```
(1 - 3x)^-2 = 1 + (-2)(-3x) + (-2)(-3)/2 (-3x)^2 + (-2)(-3)(-4)/6 (-3x)^3 + ...
            = 1 + 6x + 27x^2 + 108x^3 + ...
```

The brackets matter. (−3x)² is 9x², but −3x² is not. Writing the brackets on the first line is how examiners see that your method is right even if the arithmetic slips.

## Taking out a factor: (a + bx)ⁿ

The series only works when the bracket starts with 1. For (a + bx)ⁿ, take out the factor a, and remember that it is raised to the power n:

```
(a + bx)^n = a^n (1 + bx/a)^n
```

So (9 + 2x)^(1/2) = 3(1 + 2x/9)^(1/2), and (2 − x)⁻³ = (1/8)(1 − x/2)⁻³. The most common error is writing 9(1 + 2x/9)^(1/2), forgetting to apply the power to the factor.

## Validity

The series for (1 + u)ⁿ converges only when |u| < 1. With u = bx/a this becomes:

```
|bx/a| < 1,   so   |x| < |a/b|
```

For (1 − 3x)⁻², validity is |3x| < 1, so |x| < 1/3. For (9 + 2x)^(1/2) it is |2x/9| < 1, so |x| < 9/2. If n is a positive integer the expansion is finite and valid for all x, so no condition is needed.

When two series are combined, by adding or multiplying them, the result is valid only where both are. Give the narrower interval.

## Worked example 1: an expansion and an approximation

**(a)** Expand (4 − x)^(1/2) in ascending powers of x up to and including the term in x³, and state the values of x for which it is valid. **(b)** Use x = 0.4 to estimate √10.

```
(4 - x)^(1/2) = 2(1 - x/4)^(1/2)
(1 + u)^(1/2) = 1 + u/2 - u^2/8 + u^3/16 - ...     with u = -x/4
             = 1 - x/8 - x^2/128 - x^3/1024
(4 - x)^(1/2) = 2 - x/4 - x^2/64 - x^3/512
valid for |x/4| < 1, so |x| < 4
```

For (b), x = 0.4 gives √3.6 ≈ 2 − 0.1 − 0.0025 − 0.000125 = 1.897375. Now link √3.6 to √10. Since 3.6 = 36/10, √3.6 = 6/√10, so √10 ≈ 6 ÷ 1.897375 = 3.16226. The true value is 3.16228, so the estimate is correct to 4 decimal places.

Two points earn the marks in (b). First, x = 0.4 lies inside |x| < 4. Second, you must show the link between √3.6 and √10 in writing. The smaller x is compared with the edge of the interval, the faster the terms shrink and the better the estimate.

## Worked example 2: a rational function

f(x) = (5 − x)/((1 + x)(2 − x)). **(a)** Express f(x) in partial fractions. **(b)** Hence expand f(x) up to the term in x³ and state the range of validity.

**(a)** Write 5 − x = A(2 − x) + B(1 + x). Put x = 2: 3 = 3B, so B = 1. Put x = −1: 6 = 3A, so A = 2. So f(x) = 2/(1 + x) + 1/(2 − x).

**(b)** Expand each part.

```
2(1 + x)^-1 = 2 - 2x + 2x^2 - 2x^3                      valid |x| < 1
(2 - x)^-1  = (1/2)(1 - x/2)^-1
            = 1/2 + x/4 + x^2/8 + x^3/16                 valid |x| < 2
f(x)        = 5/2 - 7x/4 + 17x^2/8 - 31x^3/16
```

Both expansions must hold, so f(x) is valid for |x| < 1. A quick check: putting x = 0 in f(x) gives 5/2, which matches the constant term.

## Worked example 3: finding unknown constants

The expansion of (1 + ax)ⁿ begins 1 − 6x + 27x² + …. Find a and n.

Comparing coefficients gives two equations:

```
x:    na = -6
x^2:  n(n - 1)a^2 / 2 = 27
```

Square the first equation: n²a² = 36. Divide the second equation by it: (n − 1)/(2n) = 27/36 = 3/4. So 4(n − 1) = 6n, which gives n = −2. Then a = −6/(−2) = 3. Check: (1 + 3x)⁻² = 1 − 6x + 27x² − 108x³ + …, which matches. Dividing one equation by the other removes a, and that is the usual way in.

## Products and quotients

To expand (1 + 2x)/(1 − x)², write it as (1 + 2x)(1 − x)⁻². Expand (1 − x)⁻² = 1 + 2x + 3x² + 4x³ + …, then multiply by (1 + 2x). Keep only the terms up to the power asked for:

```
(1 + 2x)(1 + 2x + 3x^2 + 4x^3) = 1 + 4x + 7x^2 + 10x^3 + ...
```

Collect each power in turn. The x² term, for example, comes from 1 × 3x² and 2x × 2x. Missing one of these pairs is a common error.

## Common mistakes

- Forgetting to raise the factor to the power: (8 + x)^(1/3) = 2(1 + x/8)^(1/3), not 8(1 + x/8)^(1/3).
- Losing the sign inside a bracket. With u = −x/4, the u³ term is negative because (−x/4)³ is negative.
- Writing r! as r. The x³ coefficient divides by 6, not 3.
- Stating validity as |x| < 1 by habit, whatever the bracket. Work it out from |bx/a| < 1.
- Giving the union of two validity intervals instead of the overlap.
- Substituting an x value for an approximation that lies outside the interval, or not showing how the estimate links to the number asked for.

## Exam technique

- **"Find the first four terms, in ascending powers of x"** means the constant term and the terms in x, x² and x³. Simplify each coefficient, usually to a fraction.
- **"State the values of x for which the expansion is valid"** is a separate mark. Write it as an inequality in modulus form, or as −k < x < k.
- **"Hence"** means use the expansion you have just found. In an approximation part, write down the value of x you chose and show the substitution.
- **"Show that"** gives you the answer. Every step to it must be visible, including the line with the binomial coefficients.
- **"Give your answer as a simplified fraction"** rules out decimals such as 0.1875.

## Where next

- [Binomial expansion revision notes](/resources/edexcel-a-level-mathematics-yma01-p4-binomial-expansion-edexcel-alevel-maths-revision-notes/) for a condensed summary and a self-test.
- [Binomial expansion practice questions](/resources/edexcel-a-level-mathematics-yma01-p4-binomial-expansion-edexcel-alevel-maths-practice/) with full mark schemes.
- [Proof, partial fractions and the binomial series](/resources/edexcel-ial-mathematics-proof-by-contradiction-partial-fractions-and-the/), the broader P4 guide, for partial fraction methods in full.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification, Issue 3, April 2019 —
[qualifications.pearson.com](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf).
