---
title: "Cambridge International AS & A Level Mathematics 9709: Series -- Study Guide"
seoTitle: "A Level Maths 9709 Series (Pure 1) Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Series"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 34
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-1-cambridge-alevel"
  - qualification: "a-level"
    topic: "pure-mathematics-1-cambridge-alevel"
    subtopic: "series-cambridge-alevel-maths"
description: "Study guide to Cambridge 9709 Pure Mathematics 1 section 1.6 Series: binomial expansion, arithmetic and geometric progressions, sum to infinity."
author: "marlbridge-academic-team"
publishedDate: 2026-09-28
featured: false
---

This guide teaches section 1.6, Series, of the Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027. It covers every learning outcome in that section: the binomial expansion of (a + b)ⁿ for a positive integer n, arithmetic and geometric progressions, and the sum to infinity of a convergent geometric progression. Section 1.6 is part of Pure Mathematics 1, so it is examined on Paper 1, and the syllabus says Paper 1 content is assumed knowledge for Papers 2 and 3. It is AS Level content.

Paper 1 lasts 1 hour 50 minutes and carries 75 marks. A scientific calculator is allowed in every 9709 paper, but the syllabus states that no marks are given for unsupported answers from a calculator, so every step below is shown. The formula list (MF19) gives the binomial series and the nth-term and sum formulae for both types of progression.

Once you have worked through this page, go to the [Series revision notes](/resources/a-level-maths-9709-pure-mathematics-1-series-revision-notes/) and the [Series practice questions](/resources/a-level-maths-9709-pure-mathematics-1-series-practice/). The [9709 course hub](/boards/cambridge/a-level/mathematics/) and the [printable checklist](/checklists/cambridge/a-level/mathematics/) show where this section sits, and the free [9709 AS diagnostic](/practice/9709/diagnostic/as/) tests it alongside the other AS topics.

## What this section covers

| Syllabus 1.6 | What you must be able to do | Paper |
|---|---|---|
| Binomial expansion | Use the expansion of (a + b)ⁿ, n a positive integer, including the notations ⁿCᵣ and n! | Paper 1 |
| Recognising progressions | Tell an arithmetic progression (AP) from a geometric progression (GP) | Paper 1 |
| nth term and sum | Use the nth-term and sum formulae for APs and GPs, including "a, b, c in AP if 2b = a + c" and "in GP if b² = ac"; questions may involve more than one progression | Paper 1 |
| Sum to infinity | Use the condition for convergence of a GP and the formula for its sum to infinity | Paper 1 |

The syllabus notes say you do not need the greatest term of an expansion or properties of the binomial coefficients. The expansion of (1 + x)ⁿ for a rational n belongs to Pure Mathematics 3 -- see the [Pure Mathematics 3 study guide](/resources/a-level-maths-9709-pure-mathematics-3/).

## 1. The binomial expansion

### Factorials and ⁿCᵣ

n! = n × (n − 1) × … × 2 × 1, and 0! = 1. The binomial coefficient is

```
ⁿCᵣ = n! / (r!(n − r)!)
```

Cambridge also writes ⁿCᵣ as n above r in large brackets. It counts how many ways r items can be chosen from n. You can read small values from Pascal's triangle, but for n above about 6 the formula or the calculator's nCr key is quicker. Two useful facts: ⁿC₀ = ⁿCₙ = 1, and ⁿCᵣ = ⁿCₙ₋ᵣ.

### The expansion

For a positive integer n (given in MF19):

```
(a + b)ⁿ = aⁿ + ⁿC₁ aⁿ⁻¹b + ⁿC₂ aⁿ⁻²b² + ⁿC₃ aⁿ⁻³b³ + … + bⁿ
```

There are n + 1 terms. The general term is ⁿCᵣ aⁿ⁻ʳ bʳ. The powers of a fall by one each term while the powers of b rise by one, and the two powers always add up to n.

**Worked example 1.** Find the first four terms, in ascending powers of x, of (3 + 2x)⁶.

Here a = 3, b = 2x and n = 6. Put brackets round 2x so the 2 is raised to the power too.

```
6C0 × 3⁶            = 729
6C1 × 3⁵ × (2x)     = 6 × 243 × 2x   = 2916x
6C2 × 3⁴ × (2x)²    = 15 × 81 × 4x²  = 4860x²
6C3 × 3³ × (2x)³    = 20 × 27 × 8x³  = 4320x³
```

So (3 + 2x)⁶ = **729 + 2916x + 4860x² + 4320x³ + …**

"Ascending powers of x" means start with the constant term. "Descending powers" means start with the highest power.

### Finding one term

When you need a single term, write the general term and simplify its power of x before you touch any numbers.

**Worked example 2.** Find the term independent of x in the expansion of (x² + 3/x)⁶.

General term:

```
6Cr × (x²)⁶⁻ʳ × (3/x)ʳ = 6Cr × 3ʳ × x¹²⁻²ʳ⁻ʳ = 6Cr × 3ʳ × x¹²⁻³ʳ
```

Independent of x means the power of x is 0, so 12 − 3r = 0 and r = 4. The term is ⁶C₄ × 3⁴ = 15 × 81 = **1215**.

### Products with a bracket

To find one coefficient in a product such as (1 − 2x)(2 + x)⁵, expand only as far as you need, then collect every way of making that power.

**Worked example 3.** Find the coefficient of x² in (1 − 2x)(2 + x)⁵.

First, (2 + x)⁵ = 32 + 80x + 80x² + … (from ⁵C₁ × 2⁴ = 80 and ⁵C₂ × 2³ = 80).

An x² term comes from 1 × 80x² and from (−2x) × 80x. The coefficient is 80 − 160 = **−80**.

## 2. Recognising arithmetic and geometric progressions

A **progression** (or sequence) is an ordered list of terms u₁, u₂, u₃, …

- In an **arithmetic progression** you add the same number each time. That number is the **common difference** d = uₙ₊₁ − uₙ. Example: 11, 8, 5, 2, … has d = −3.
- In a **geometric progression** you multiply by the same number each time. That number is the **common ratio** r = uₙ₊₁ / uₙ. Example: 40, 10, 2.5, … has r = 1/4.

To decide which you have, test the differences first, then the ratios. A sequence such as 1, 3, 6, 10, … is neither: the differences change and so do the ratios.

The syllabus also expects the three-term tests:

- a, b, c are **in arithmetic progression** if 2b = a + c (b is the mean of a and c).
- a, b, c are **in geometric progression** if b² = ac.

**Worked example 4.** The numbers k, k + 6 and 4k are consecutive terms of a geometric progression. Find the possible values of k.

```
(k + 6)² = k × 4k
k + 6 = ±2k
k = 6  or  k = −2
```

With k = 6 the terms are 6, 12, 24 (r = 2). With k = −2 they are −2, 4, −8 (r = −2). Both are valid unless the question adds a condition. Square-rooting both sides (with ±) is quicker than expanding here, but expanding to 3k² − 12k − 36 = 0 gives the same two roots.

## 3. Arithmetic progressions: nth term and sum

With first term a and common difference d (both in MF19):

```
uₙ = a + (n − 1)d
Sₙ = ½n(a + l) = ½n{2a + (n − 1)d}
```

Here l is the last term. Use ½n(a + l) when you know the last term, and ½n{2a + (n − 1)d} otherwise.

**Worked example 5.** The fifth term of an arithmetic progression is 17 and the sum of the first ten terms is 185.

(a) Find the first term and the common difference.

```
a + 4d = 17
½ × 10 × (2a + 9d) = 185  →  2a + 9d = 37
Double the first:  2a + 8d = 34
Subtract:  d = 3,  then a = 17 − 12 = 5
```

So **a = 5, d = 3**.

(b) Find the least number of terms for which the sum exceeds 1000.

```
Sₙ = ½n{10 + 3(n − 1)} = ½n(3n + 7)
½n(3n + 7) > 1000
3n² + 7n − 2000 > 0
```

The positive root of 3n² + 7n − 2000 = 0 is n = (−7 + √24049)/6 ≈ 24.7. Since n is a whole number, n = 25. Check: S₂₄ = 948 and S₂₅ = 1025. So the answer is **25 terms**.

Always check the integers either side of the root. It confirms you have the inequality the right way round.

## 4. Geometric progressions: nth term and sum

With first term a and common ratio r (in MF19):

```
uₙ = arⁿ⁻¹
Sₙ = a(1 − rⁿ)/(1 − r),   r ≠ 1
```

The form a(rⁿ − 1)/(r − 1) is the same thing and avoids negatives when r > 1.

**Worked example 6.** A geometric progression has first term 80 and the sum of its first three terms is 140. Find the possible values of the common ratio.

```
80 + 80r + 80r² = 140
80r² + 80r − 60 = 0
4r² + 4r − 3 = 0
(2r − 1)(2r + 3) = 0
r = ½  or  r = −3/2
```

For a small number of terms, writing the terms out is simpler than using the Sₙ formula, which would give a cubic over (1 − r).

## 5. Convergence and the sum to infinity

If |r| < 1, then rⁿ gets closer and closer to 0 as n increases. So Sₙ = a(1 − rⁿ)/(1 − r) approaches a fixed value, and the GP is **convergent**. Its **sum to infinity** is (in MF19):

```
S∞ = a/(1 − r),   |r| < 1
```

The condition for convergence is **|r| < 1**, which is the same as −1 < r < 1. If |r| ≥ 1, the terms do not shrink and there is no sum to infinity. An AP never has a sum to infinity (unless every term is 0).

Continuing worked example 6: only r = ½ satisfies |r| < 1, so only that progression converges. Its sum to infinity is 80/(1 − ½) = **160**. The progression with r = −3/2 has no sum to infinity.

**When r contains x.** If a GP is 1 + 2x + 4x² + …, then r = 2x, and it converges when |2x| < 1, that is **−½ < x < ½**.

## 6. Problems with more than one progression

The syllabus says questions may involve more than one progression. The usual link is that some terms of one progression are also terms of another.

**Worked example 7.** An arithmetic progression has first term 4 and a non-zero common difference d. Its first, second and fifth terms are the first three terms of a geometric progression. Find d and the common ratio.

The terms are 4, 4 + d and 4 + 4d. Use b² = ac:

```
(4 + d)² = 4(4 + 4d)
16 + 8d + d² = 16 + 16d
d² − 8d = 0
d(d − 8) = 0
```

d is non-zero, so **d = 8**. The AP is 4, 12, 20, 28, 36, … and the GP is 4, 12, 36, … so **r = 3**.

State why you reject d = 0. It would make every term equal, which the question rules out.

## Common errors

- Writing 2x⁴ instead of (2x)⁴ = 16x⁴ inside a binomial term. Keep brackets round the whole of b.
- Losing the sign when b is negative: in (x − 2/x)⁶, odd powers of (−2/x) are negative.
- Using ⁿCᵣ with r counted from 1 instead of 0. The first term uses ⁿC₀, so the fourth term uses ⁿC₃.
- Confusing the 10th term with the sum of 10 terms. Read "term" and "sum" carefully.
- Using n instead of n − 1 in uₙ = a + (n − 1)d or uₙ = arⁿ⁻¹.
- Quoting a sum to infinity without checking |r| < 1, or keeping a value of r that fails the check.
- Giving a non-integer n for a number of terms, or rounding 24.7 down to 24 when the sum must exceed a value.
- Dropping the ± when square-rooting in a GP condition, and losing a valid answer.

## Next steps

Test your recall with the [Series revision notes](/resources/a-level-maths-9709-pure-mathematics-1-series-revision-notes/), then try the [Series practice questions](/resources/a-level-maths-9709-pure-mathematics-1-series-practice/). For wider Paper 1 practice, the [Pure Mathematics 1 mixed practice](/resources/a-level-mathematics-pure-1-mixed-practice/) includes binomial and progression questions alongside other topics. Earlier Paper 1 sections are covered in [Quadratics](/resources/a-level-mathematics-pure-mathematics-1-quadratics/), [Functions](/resources/a-level-mathematics-pure-mathematics-1-functions/) and [Coordinate geometry](/resources/a-level-mathematics-pure-mathematics-1-coordinate-geometry/); solving the quadratics in sections 3 to 6 above uses the skills from Quadratics.

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027, Version 4, Cambridge Assessment International Education (part of Cambridge University Press & Assessment). Section 1.6, Series (Pure Mathematics 1, for Paper 1).
