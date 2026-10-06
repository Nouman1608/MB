---
title: "AQA A-Level Mathematics: D: Sequences and series (7357)"
seoTitle: "AQA A-Level Maths 7357 Sequences and Series Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "D: Sequences and series"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 5
syllabusTopics:
  - qualification: "a-level"
    topic: "d-sequences-and-series-aqa-alevel-maths"
description: "Study guide to Section D of AQA A-Level Maths 7357: binomial expansion, recurrence relations, sigma notation, arithmetic and geometric series, modelling."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This guide teaches **Section D: Sequences and series** of AQA A-Level Mathematics (7357), as set out in the AQA A-level Mathematics specification, version 1.3 (31 January 2018), for exams from June 2018 onwards. It covers every content statement from D1 to D6. The specification lists Section D under **Paper 1**, and Papers 2 and 3 can assess any Paper 1 content, so these skills can earn marks on all three papers. A calculator is required in every 7357 paper, but most of this section is algebra you must show by hand.

Use it with the [revision notes](/resources/aqa-a-level-mathematics-sequences-and-series-revision-notes/) and the [practice questions](/resources/aqa-a-level-mathematics-sequences-and-series-practice/). For the whole course, see the [AQA A-Level Mathematics hub](/boards/aqa/a-level/mathematics/) and the [printable checklist](/checklists/aqa/a-level/mathematics/).

## What this section covers

| Ref | What you must be able to do |
|---|---|
| D1 | Use the binomial expansion of (a + bx)ⁿ for positive integer n; use n!, ⁿCᵣ and (n r) notation; link to binomial probabilities. Extend to any rational n, use it for approximation, and know the expansion is valid for \|bx/a\| < 1 (proof not required) |
| D2 | Work with sequences given by an nth-term formula or by a relation xₙ₊₁ = f(xₙ); recognise increasing, decreasing and periodic sequences |
| D3 | Understand and use sigma notation for sums of series |
| D4 | Arithmetic sequences and series: nth term and sum to n terms |
| D5 | Geometric sequences and series: nth term, finite sum, sum to infinity of a convergent series, the condition \|r\| < 1, modulus notation |
| D6 | Use sequences and series in modelling |

The specification's Appendix B lists two results in this section that you must recall without being given them: uₙ = a + (n − 1)d and uₙ = arⁿ⁻¹. Learn the sum formulas just as well.

## D1 -- The binomial expansion

### Factorials and binomial coefficients

n! = n × (n − 1) × … × 2 × 1, with 0! = 1. The binomial coefficient is

```
ⁿCᵣ = (n r) = n! / (r!(n − r)!)
```

For a positive integer n,

```
(a + b)ⁿ = aⁿ + ⁿC₁aⁿ⁻¹b + ⁿC₂aⁿ⁻²b² + … + ⁿCᵣaⁿ⁻ʳbʳ + … + bⁿ
```

There are n + 1 terms and the expansion is exact.

**Worked example 1.** Expand (3 + 2x)⁵ fully.

```
(3 + 2x)⁵ = 3⁵ + 5(3⁴)(2x) + 10(3³)(2x)² + 10(3²)(2x)³ + 5(3)(2x)⁴ + (2x)⁵
          = 243 + 810x + 1080x² + 720x³ + 240x⁴ + 32x⁵
```

Bracket the whole term (2x) before you raise it to a power. Writing 2x² instead of (2x)² is the commonest slip.

### Link to binomial probabilities

If X ~ B(n, p) and q = 1 − p, then P(X = r) = ⁿCᵣ pʳ qⁿ⁻ʳ. These are exactly the terms of (q + p)ⁿ, which is why the probabilities add to (q + p)ⁿ = 1ⁿ = 1. For X ~ B(6, 0.3):

```
P(X = 2) = ⁶C₂ (0.3)² (0.7)⁴ = 15 × 0.09 × 0.2401 = 0.324 (3 s.f.)
```

### Rational n and approximation

When n is negative or a fraction, the expansion of (1 + x)ⁿ never stops:

```
(1 + x)ⁿ = 1 + nx + n(n − 1)x²/2! + n(n − 1)(n − 2)x³/3! + …
```

The general coefficient is n(n − 1)…(n − r + 1)/r!, which is how the specification defines ⁿCᵣ for rational n. The series is valid only when |x| < 1. For (a + bx)ⁿ, take out aⁿ first:

```
(a + bx)ⁿ = aⁿ(1 + (b/a)x)ⁿ,   valid for |bx/a| < 1
```

**Worked example 2.** Expand √(4 − x) in ascending powers of x up to x², state the range of validity, and use it to estimate √3.96.

```
√(4 − x) = 4^(1/2) (1 − x/4)^(1/2) = 2(1 − x/4)^(1/2)

(1 − x/4)^(1/2) = 1 + (1/2)(−x/4) + (1/2)(−1/2)(−x/4)²/2! + …
                = 1 − x/8 − x²/128 + …

√(4 − x) ≈ 2 − x/4 − x²/64
```

Valid for |−x/4| < 1, that is |x| < 4. For √3.96, put x = 0.04:

```
2 − 0.01 − 0.000025 = 1.989975
```

A calculator gives 1.989975 to 6 d.p. The estimate is good because x is small, so the x³ and later terms are tiny. A value of x near the edge of the valid range gives a poor approximation, and a value outside it gives nonsense.

**Worked example 3.** Expand (1 + 2x)⁻² up to x³.

```
1 + (−2)(2x) + (−2)(−3)(2x)²/2! + (−2)(−3)(−4)(2x)³/3!
= 1 − 4x + 12x² − 32x³,   valid for |x| < 1/2
```

## D2 -- Sequences: nth term, recurrence, behaviour

A sequence can be defined in two ways.

- **By a formula for the nth term**, such as uₙ = (n + 3)/n. Substitute n = 1, 2, 3, … to get 4, 5/2, 2, 7/4, …
- **By a recurrence relation** xₙ₊₁ = f(xₙ) with a starting value. For xₙ₊₁ = 2xₙ − 3 with x₁ = 5, you get 5, 7, 11, 19, 35, …

Describe the behaviour using the specification's terms.

- **Increasing:** uₙ₊₁ > uₙ for all n. Show it by proving uₙ₊₁ − uₙ > 0.
- **Decreasing:** uₙ₊₁ < uₙ for all n. Rewriting uₙ = (n + 3)/n as 1 + 3/n shows it is decreasing, because 3/n gets smaller as n grows.
- **Periodic:** the terms repeat in a cycle. The order (period) is the length of the cycle.

**Worked example 4.** u₁ = 2 and uₙ₊₁ = 1/(1 − uₙ). Find u₂ to u₄ and describe the sequence.

```
u₂ = 1/(1 − 2) = −1
u₃ = 1/(1 − (−1)) = 1/2
u₄ = 1/(1 − 1/2) = 2
```

u₄ = u₁, so the sequence repeats 2, −1, 1/2, 2, −1, 1/2, … It is periodic with order 3. To find a far-off term, use the cycle: u₁₀₀ = u₁ because 100 = 3 × 33 + 1, so u₁₀₀ = 2.

## D3 -- Sigma notation

Σ (sigma) means "add up". The expression

```
 20
 Σ (3r + 2)
r=1
```

means substitute r = 1, 2, …, 20 into (3r + 2) and add: 5 + 8 + 11 + … + 62. Count terms carefully: from r = k to r = m there are m − k + 1 terms.

**Worked example 5.** Evaluate Σ from r = 1 to 20 of (3r + 2).

The terms form an arithmetic series with first term 5, last term 62 and 20 terms:

```
S = (20/2)(5 + 62) = 10 × 67 = 670
```

Splitting also works: 3 × Σr + Σ2 = 3 × (20 × 21/2) + 20 × 2 = 630 + 40 = 670. Note that Σ2 over 20 terms is 40, not 2.

## D4 -- Arithmetic sequences and series

An arithmetic sequence has a common difference d. Using the specification's notation (a = first term, l = last term, Sₙ = sum to n terms):

```
uₙ = a + (n − 1)d
Sₙ = (n/2)(2a + (n − 1)d) = (n/2)(a + l)
```

Proof of the sum formula: write Sₙ forwards and backwards and add. Each pair sums to a + l, there are n pairs, so 2Sₙ = n(a + l).

**Worked example 6.** The 3rd term of an arithmetic sequence is 17 and the 10th term is 52. Find the 20th term and the sum of the first 20 terms.

```
a + 2d = 17
a + 9d = 52
Subtract: 7d = 35, so d = 5 and a = 7

u₂₀ = 7 + 19 × 5 = 102
S₂₀ = (20/2)(7 + 102) = 1090
```

Questions that ask for the least n with Sₙ above a target lead to a quadratic inequality in n. Solve it, then check whole-number values either side.

## D5 -- Geometric sequences and series

A geometric sequence has a common ratio r: each term is the previous one multiplied by r.

```
uₙ = arⁿ⁻¹
Sₙ = a(1 − rⁿ)/(1 − r)      (r ≠ 1)
S∞ = a/(1 − r)              only when |r| < 1
```

|r| is the modulus of r, its size ignoring sign, so |r| < 1 means −1 < r < 1. When |r| < 1, rⁿ → 0 as n → ∞, so Sₙ → a/(1 − r). The series is then **convergent**. If |r| ≥ 1 the series has no sum to infinity.

Proof of Sₙ: write Sₙ = a + ar + … + arⁿ⁻¹, multiply by r, and subtract: Sₙ − rSₙ = a − arⁿ.

**Worked example 7.** A geometric series has first term 81 and common ratio 2/3. Find S∞, S₅, and the least n for which S∞ − Sₙ < 1.

```
S∞ = 81/(1 − 2/3) = 243
S₅ = 81(1 − (2/3)⁵)/(1/3) = 243(1 − 32/243) = 211

S∞ − Sₙ = 243(2/3)ⁿ < 1
(2/3)ⁿ < 1/243
n ln(2/3) < ln(1/243)
n > ln 243 / ln 1.5 = 13.55…     (the inequality flips: ln(2/3) is negative)
```

So **n = 14**. Check: 243(2/3)¹³ ≈ 1.25 and 243(2/3)¹⁴ ≈ 0.832.

**Worked example 8.** For which x does 1 + (2x − 1) + (2x − 1)² + … converge?

Here r = 2x − 1, so you need |2x − 1| < 1, giving −1 < 2x − 1 < 1, so **0 < x < 1**. At x = 0.75, r = 0.5 and S∞ = 1/(1 − 0.5) = 2.

## D6 -- Sequences and series in modelling

A constant **amount** of change each step gives an arithmetic model. A constant **percentage** change gives a geometric model. Define what n counts (weeks, years) and whether term 1 is at the start or after one step.

**Worked example 9.** A car bought for £18 000 loses 15% of its value each year.

```
Value after n years: Vₙ = 18000 × 0.85ⁿ
After 5 years: 18000 × 0.85⁵ = £7986.70 (nearest penny)
Below £5000 when 0.85ⁿ < 5000/18000
n > ln(5000/18000) / ln 0.85 = 7.88
```

So the value first drops below £5000 after **8 years** (about £4904.83). A limitation: real depreciation is steeper in the first year and depends on mileage and condition, so a fixed 15% is a simplification.

A runner who covers 5 km in week 1 and adds 0.5 km each week follows an arithmetic model. Week 12 is 5 + 11 × 0.5 = 10.5 km, and the 12-week total is (12/2)(5 + 10.5) = 93 km. The model fails eventually, because no runner can increase distance forever. Saying where a model stops being realistic is a skill AQA expects in every section (see [overarching themes](/resources/aqa-a-level-mathematics-overarching-themes/)).

## Common errors

- Forgetting to bracket the whole term: (−3x)² is 9x², not −3x².
- Expanding (a + bx)ⁿ for rational n without taking out aⁿ first, then quoting the wrong validity range.
- Treating Sₙ as the nth term, or uₙ as a running total.
- Losing the inequality direction when dividing by the log of a number less than 1.
- Quoting S∞ for a series with |r| ≥ 1.
- Miscounting terms in sigma notation when the lower limit is not 1.
- In models, being one term out because term 1 is "after one year" in one question and "now" in another.

## Next steps

Condense this into the [Section D revision notes](/resources/aqa-a-level-mathematics-sequences-and-series-revision-notes/), then test yourself with the [Section D practice questions](/resources/aqa-a-level-mathematics-sequences-and-series-practice/). For timing and paper strategy, read the [7357 exam preparation guide](/resources/aqa-a-level-mathematics-exam-preparation/). To find your weakest topics quickly, try the [free diagnostics](/diagnostics/).

## Official syllabus

AQA A-level Mathematics (7357) specification, version 1.3, 31 January 2018, for teaching from September 2017 and exams from June 2018 onwards, published by AQA. Section 3.5, D: Sequences and series (D1 to D6).
