---
title: "Cambridge A Level Mathematics (9709): Continuous random variables -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 6 – Probability & Statistics 2"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 6.3
syllabusTopics:
  - qualification: "a-level"
    topic: "probability-and-statistics-2-cambridge-alevel"
    subtopic: "continuous-random-variables-cambridge-alevel-maths"
description: "Condensed 9709 Paper 6 notes on 6.3: density function properties, areas as probabilities, mean, variance, medians, infinite domains and a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Condensed recall for subtopic 6.3 of Cambridge 9709 Paper 6. The [continuous random variables study guide](/resources/cambridge-a-level-mathematics-9709-continuous-random-variables-cambridge-alevel-maths/) works through every calculation in full; the [continuous random variables practice questions](/resources/cambridge-a-level-mathematics-9709-continuous-random-variables-cambridge-alevel-maths-practice/) give exam-style questions with mark schemes.

## Scope

- Density functions on a **single interval** (finite or infinite, such as x ≥ 1).
- Probabilities, mean and variance from the density function.
- Median and other percentiles **by direct consideration of an area**.
- **Not included:** explicit use of the cumulative distribution function.

## Formula sheet

```
Validity            f(x) ≥ 0 on the interval,   ∫ f(x) dx = 1 over the interval
Probability         P(a < X < b) = ∫ₐᵇ f(x) dx
Single value        P(X = a) = 0,  so  P(X < a) = P(X ≤ a)
Mean                E(X) = ∫ x f(x) dx
Second moment       E(X²) = ∫ x² f(x) dx
Variance            Var(X) = E(X²) − [E(X)]²
Median m            ∫ (lower end to m) f(x) dx = 0.5
pth percentile      ∫ (lower end to q) f(x) dx = p/100
```

## Standard procedure

1. **Constant:** integrate f over the interval, set equal to 1, solve.
2. **Probability:** integrate between the required limits (clip them to the interval).
3. **Mean:** check symmetry first; otherwise integrate x f(x).
4. **Variance:** integrate x² f(x), then subtract the square of the mean.
5. **Median or percentile:** area from the lower end equal to the required proportion; keep the root inside the interval.

## Infinite domains

- Write the integral with ∞ as the upper limit; terms like 1/xⁿ (n > 0) tend to 0 as x → ∞.
- Example: f(x) = 3/x⁴, x ≥ 1 gives E(X) = 3/2, Var(X) = 3/4, median 2^(1/3) ≈ 1.26.
- Watch the signs: [−x⁻³]₁^∞ = 0 − (−1) = 1.

## Interpreting shape

| Shape of f | Consequence |
|---|---|
| symmetrical about x = c | E(X) = c and median = c |
| increasing across the interval | mean < median; more area at the upper end |
| decreasing across the interval | mean > median; more area at the lower end |
| f(x) > 1 somewhere | allowed, if the total area is 1 |

## Two unknown constants

Use both conditions:

- total area = 1;
- the given fact, such as E(X) = a value, or P(X < c) = a value.

Then check f(x) ≥ 0 across the interval.

## Worked mini-examples

**Constant and probability.** f(x) = k(2 − x) for 0 ≤ x ≤ 2. Area = k[2x − x²/2]₀² = 2k = 1, so k = 1/2. P(X < 1) = (1/2)[2x − x²/2]₀¹ = 3/4.

**Mean and variance.** For the same f: E(X) = (1/2)∫₀² (2x − x²) dx = (1/2)(4 − 8/3) = 2/3. E(X²) = (1/2)∫₀² (2x² − x³) dx = (1/2)(16/3 − 4) = 2/3. Var(X) = 2/3 − 4/9 = 2/9.

**Median.** (1/2)(2m − m²/2) = 1/2 gives m² − 4m + 2 = 0, so m = 2 ± √2. Only 2 − √2 ≈ 0.586 lies in the interval.

**Clipped limits.** For the same f, P(X > 1.5) = (1/2)[2x − x²/2] from 1.5 to 2 = (1/2)(2 − 1.875) = 1/16, while P(X > 3) = 0 because 3 is outside the interval.

## Validity check in two lines

To show that a given function is **not** a valid density function, one failure is enough: either find a value of x in the interval where f(x) < 0, or show that the total area is not 1. To show that a function **is** valid, both conditions must be shown. For f(x) = (2x − 1)/4 on 0 ≤ x ≤ 2, f(0) = −1/4 already rules it out.

## Key terms

| Term | Meaning |
|---|---|
| Continuous random variable | can take any value in an interval |
| Probability density function | f(x) whose area over an interval gives the probability |
| Median | value with half of the area on each side |
| Percentile | value below which a given proportion of the area lies |
| Infinite domain | an interval such as x ≥ 1 with no upper limit |

## Exam traps

- **f(a) used as a probability.** Only areas are probabilities.
- **Integrand not expanded.** Expand products such as x(4 − x) before integrating.
- **Var(X) = E(X²) − E(X).** The mean must be squared.
- **Median from f(m) = 0.5.** The median is an area condition.
- **Root outside the interval.** Reject it and say why.
- **Limits outside the interval.** P(X < 5) for an interval 0 to 4 is 1.
- **Validity checked by area only.** A function with total area 1 but negative values is not valid.
- **Rounded moments.** Keep exact fractions for E(X) and E(X²).

## Self-test

1. f(x) = kx for 0 ≤ x ≤ 2. Find k.
2. For question 1, find P(X < 1).
3. For question 1, find E(X).
4. For question 1, find Var(X).
5. For question 1, find the median.
6. f(x) = k/x² for x ≥ 1. Find k.
7. f(x) = 2 for 0 ≤ x ≤ 0.5. Is this a valid density function, even though f(x) > 1?
8. X is continuous. What is P(X = 1.5)?
9. The graph of f is symmetrical about x = 3. State E(X).
10. f(x) = k for 1 ≤ x ≤ 5. Find k and E(X).
11. f(x) = 3/x⁴ for x ≥ 1. Find P(X > 3).
12. For question 10, find the upper quartile.

### Answers

1. k[x²/2]₀² = 2k = 1, so **k = 1/2**.
2. [x²/4]₀¹ = **1/4**.
3. ∫₀² x²/2 dx = **4/3**.
4. E(X²) = ∫₀² x³/2 dx = 2; Var = 2 − 16/9 = **2/9**.
5. m²/4 = 1/2, so **m = √2 ≈ 1.41**.
6. k[−1/x]₁^∞ = k = 1, so **k = 1**.
7. **Yes**: f ≥ 0 and the area is 2 × 0.5 = 1.
8. **0**.
9. **3**.
10. 4k = 1, so **k = 1/4**; by symmetry **E(X) = 3**.
11. [−x⁻³]₃^∞ = **1/27**.
12. (q − 1)/4 = 0.75, so **q = 4**.
