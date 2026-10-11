---
title: "OxfordAQA International AS and A-level Mathematics: Sequences, series and binomial expansion (9660) -- Revision Notes"
seoTitle: "OxfordAQA Maths Sequences & Series Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Sequences, arithmetic and geometric series, and binomial expansion"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 178
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p1-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "p1-sequences-and-series-oxfordaqa-alevel-maths"
description: "Condensed formulae, methods and a self-test on sequences, series and binomial expansion for OxfordAQA International AS and A-level Mathematics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

Quick recall for section P1.5 of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. The specification places it in International AS Unit P1 (Pure Maths). For full explanations, read the [study guide](/resources/oxfordaqa-a-level-mathematics-sequences-arithmetic-and-geometric-series-and-binomial/), then test yourself with the [practice set](/resources/oxfordaqa-a-level-mathematics-sequences-arithmetic-and-geometric-series-and-binomial-practice/).

Related pages: the [Unit P1 revision notes](/resources/oxfordaqa-a-level-mathematics-p1-revision-notes/), the [course hub](/boards/oxfordaqa/a-level/mathematics/), the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/) and the [free 10-minute diagnostics](/diagnostics/).

## Formulae to learn

Check your formulae booklet to see which of these it gives, but know them all.

| Topic | Result |
|---|---|
| Arithmetic nth term | x(n) = a + (n − 1)d |
| Arithmetic sum | S(n) = n/2 × (2a + (n − 1)d) = n/2 × (a + l) |
| Sum of 1 to n | 1 + 2 + ... + n = n(n + 1)/2 |
| Geometric nth term | x(n) = a rⁿ⁻¹ |
| Geometric sum | S(n) = a(1 − rⁿ)/(1 − r), r ≠ 1 |
| Sum to infinity | S∞ = a/(1 − r), only when −1 < r < 1 |
| Limit of x(n+1) = f(x(n)) | Solve L = f(L) |
| Factorial | n! = n(n − 1)...2 × 1, and 0! = 1 |
| Choose | nCr = n!/(r!(n − r)!), with nC0 = nCn = 1 |
| Binomial | (a + b)ⁿ = Σ nCr aⁿ⁻ʳ bʳ, r from 0 to n |

## Must-know distinctions

| | Arithmetic | Geometric |
|---|---|---|
| Rule | Add the common difference d | Multiply by the common ratio r |
| Test | Differences are equal | Ratios are equal |
| nth term | a + (n − 1)d | a rⁿ⁻¹ |
| Sum to infinity | Never exists (unless every term is 0) | Exists only if |r| < 1 |

A sequence is the list of terms. A series is the sum of the terms. Σ notation describes a series.

## Which result do I use?

| The question gives you | Reach for |
|---|---|
| A formula in n | Substitution, or solve formula = value |
| x(n+1) in terms of x(n) | Repeated substitution; L = f(L) for a limit |
| A constant difference | Arithmetic formulae |
| A constant ratio | Geometric formulae |
| "Sum to infinity" or "converges" | |r| < 1, then a/(1 − r) |
| A bracket raised to a small power | Pascal's triangle |
| A bracket raised to a larger power, or one coefficient | nCr |

## Sequences from a formula

Substitute n = 1, 2, 3, ... To find which term equals a value, set the formula equal to it and solve. Keep only positive integer solutions of n.

Worked reminder: x(n) = n(n + 2). The first terms are 3, 8, 15. To find which term is 120, solve n² + 2n − 120 = 0, so (n + 12)(n − 10) = 0. Reject n = −12, so it is the 10th term. If a solution is not a positive integer, the value is not a term of the sequence.

## Recurrence relations: method

```
1. Write x(n+1) = f(x(n)) and the start value x(1).
2. Find terms by repeated substitution. Keep full accuracy until the end.
3. For a limit, replace both x(n+1) and x(n) by L.
4. Solve L = f(L).
5. Reject any root that cannot fit the sequence (a negative value of a
   square root, for example).
```

Worked reminder: x(n+1) = 0.75x(n) + 7. Put L = 0.75L + 7, so 0.25L = 7 and L = 28.

A recurrence that cycles (for example 3, −1/2, 2/3, 3, ...) has a period. It has no limit.

## Arithmetic series: method

```
1. Write down what you know: a, d, n, l, S(n).
2. Pick the formula that contains exactly the unknown you want.
3. For two conditions, form two equations in a and d and solve.
4. For "least n" questions, form an inequality, solve the boundary,
   then test the whole numbers either side.
```

Worked reminder: a = 10, d = −3. Find the sum of the 6th to 15th terms.

```
S(15) = 15/2 × (20 + 14(-3)) = 15/2 × (-22) = -165
S(5)  = 5/2 × (20 + 4(-3))  = 5/2 × 8        = 20
Sum of 6th to 15th = S(15) - S(5) = -185
```

The same idea works for any block of terms: subtract the first part from the whole.

## Σ notation

Σ from r = 1 to N of (pr + q) is arithmetic with first term p + q and common difference p. Split sums when it helps: Σ(pr + q) = pΣr + qN, using Σr = N(N + 1)/2.

Worked reminder: Σ from r = 1 to 10 of (3r + 2) = 3 × 55 + 2 × 10 = 185.

Note that the lower limit matters. If the sum starts at r = 6, subtract the first five terms from the total.

## Geometric series: method

```
1. Find r by dividing a term by the one before it.
2. Use ar^(n-1) for a term and a(1 - r^n)/(1 - r) for a sum.
3. "Sum exceeds a value" needs an inequality in r^n.
   Take logs and keep the inequality the right way round
   (dividing by ln r flips it only if ln r < 0).
4. If two terms are given, divide them to get a power of r.
```

Worked reminder: the 3rd term is 20 and the 6th term is 160.

```
ar² = 20 and ar⁵ = 160
r³ = 160/20 = 8, so r = 2
a = 20/4 = 5
S(8) = 5(2⁸ - 1)/(2 - 1) = 5 × 255 = 1275
```

If r could be positive or negative, use any extra information (all terms positive, for instance) to choose.

## Sum to infinity

```
S∞ = a/(1 - r)    valid only for |r| < 1, that is -1 < r < 1
```

Worked reminder: a = 81, r = 1/3 gives S∞ = 81/(2/3) = 121.5.

For "find the range of x for which the series converges", write the ratio r in terms of x and solve |r| < 1 as a double inequality.

Recurring decimals: write as a geometric series. For 0.4545... use a = 0.45, r = 0.01, so S∞ = 0.45/0.99 = 5/11.

## Binomial expansion: method

```
1. Choose Pascal's triangle (small n) or nCr (larger n).
2. Write each term as nCr × (first)^(n-r) × (second)^r.
3. Put brackets around negative or numerical terms, then simplify.
4. Check by substituting a simple value such as x = 1.
```

Pascal's triangle rows:

```
n=3:  1 3 3 1
n=4:  1 4 6 4 1
n=5:  1 5 10 10 5 1
n=6:  1 6 15 20 15 6 1
```

Worked reminder: (x − 2)⁴ = x⁴ − 8x³ + 24x² − 32x + 16. The x³ term is 4 × x³ × (−2) = −8x³.

Worked reminder: the coefficient of x² in (1 + kx)⁵ is 90. Find k.

```
5C2 × k² = 90
10k² = 90
k² = 9, so k = 3 or k = -3
```

Both values satisfy the condition unless the question says k > 0 or similar. Read the wording for any restriction before you discard a root.

For a product such as (p + qx)(1 + sx)ⁿ, find each combination of terms that gives the power you want, then add the contributions.

For (1 + x)ⁿ, the first three terms are 1 + nx + n(n − 1)/2 × x². They give a good estimate when x is small.

## Quick self-test

Try each before you look at the answers.

1. A sequence has x(n) = 4n − 7. Find x(10).
2. x(n+1) = x(n)/2 + 3. Find the limit.
3. An arithmetic series has a = 2 and d = 3. Find S(15).
4. Find 1 + 2 + 3 + ... + 60.
5. A geometric series has a = 3 and r = 2. Find S(7).
6. A geometric series has a = 18 and r = −1/3. Find S∞.
7. Evaluate 9C4.
8. Find the coefficient of x² in (1 + 3x)⁵.
9. Expand (1 − x)⁴.
10. State the values of r for which a geometric series converges.
11. Evaluate Σ from r = 1 to 6 of 2^r.

### Answers

1. x(10) = 40 − 7 = **33**.
2. L = L/2 + 3, so L/2 = 3 and **L = 6**.
3. S(15) = 15/2 × (4 + 14 × 3) = 15/2 × 46 = **345**.
4. 60 × 61/2 = **1830**.
5. S(7) = 3(2⁷ − 1)/(2 − 1) = 3 × 127 = **381**.
6. S∞ = 18/(1 + 1/3) = 18/(4/3) = **27/2**, which is 13.5.
7. 9C4 = 9!/(4! 5!) = **126**.
8. 5C2 × 3² = 10 × 9 = **90**.
9. **1 − 4x + 6x² − 4x³ + x⁴**.
10. **−1 < r < 1**, written |r| < 1.
11. Geometric with a = 2, r = 2, six terms: 2(2⁶ − 1)/(2 − 1) = **126**.

## Where marks are usually lost

- Taking n = 0 as the first term, or mixing up "the nth term" with "the sum of n terms".
- Using a rⁿ instead of a rⁿ⁻¹ for the nth term.
- Applying S∞ = a/(1 − r) without showing |r| < 1.
- Leaving a false root from squaring in a limit question.
- Rounding n to the nearest whole number instead of the next whole number that satisfies the inequality.
- Losing a negative sign in (−2)³ or (−3x)².
- Forgetting that nCr multiplies the numerical coefficient too, as in (2x)³ = 8x³.
- Stopping a Σ question at the formula without evaluating, or ignoring a lower limit other than 1.
- Not giving an exact answer when the question asks for one.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, published by OxfordAQA: section P1.5, Sequences and series, under International AS Unit P1 (Pure Maths).
