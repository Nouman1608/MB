---
title: "Cambridge International AS & A Level Mathematics 9709: Probability & Statistics 2 -- Revision Notes"
seoTitle: "A Level Maths 9709 Probability & Statistics 2 Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Probability & Statistics 2"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 6
syllabusTopics:
  - qualification: "a-level"
    topic: "probability-and-statistics-2-cambridge-alevel"
  - qualification: "a-level"
    topic: "probability-and-statistics-2-cambridge-alevel"
    subtopic: "the-poisson-distribution-cambridge-alevel-maths"
  - qualification: "a-level"
    topic: "probability-and-statistics-2-cambridge-alevel"
    subtopic: "linear-combinations-of-random-variables-cambridge"
  - qualification: "a-level"
    topic: "probability-and-statistics-2-cambridge-alevel"
    subtopic: "continuous-random-variables-cambridge-alevel-maths"
  - qualification: "a-level"
    topic: "probability-and-statistics-2-cambridge-alevel"
    subtopic: "sampling-and-estimation-cambridge-alevel-maths"
  - qualification: "a-level"
    topic: "probability-and-statistics-2-cambridge-alevel"
    subtopic: "hypothesis-tests-cambridge-alevel-maths"
description: "Condensed Cambridge 9709 Paper 6 revision notes: Poisson, linear combinations, PDFs, confidence intervals, hypothesis tests and a quick self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-09-27
featured: false
---

These notes condense topic 6, Probability & Statistics 2, of the Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027 (Version 4): sections 6.1 to 6.5. All of it is examined on **Paper 6** (1 hour 15 minutes, 50 marks, 20% of the A Level; A Level only, and not combinable with Paper 4). Probability & Statistics 1 and the Pure Mathematics 3 calculus are assumed. For full explanations and worked examples, use the [Probability & Statistics 2 study guide](/resources/a-level-maths-9709-probability-statistics-2/).

Other links: [Probability & Statistics 2 practice questions](/resources/a-level-maths-9709-probability-statistics-2-practice/), the [Probability & Statistics 1 revision notes](/resources/a-level-maths-9709-probability-statistics-1-revision-notes/), the [A Level Mathematics hub](/boards/cambridge/a-level/mathematics/), the [printable 9709 checklist](/checklists/cambridge/a-level/mathematics/) and the free [A Level diagnostic](/practice/9709/diagnostic/a-level/).

## Formulas

| Result | Formula | In MF19? |
|---|---|---|
| Poisson Po(λ) | P(X = r) = e^(−λ) λʳ / r!; mean λ; variance λ | Yes |
| Linear function | E(aX + b) = aE(X) + b; Var(aX + b) = a²Var(X) | No |
| Sum of variables | E(aX + bY) = aE(X) + bE(Y) | No |
| Variance of sum (independent) | Var(aX + bY) = a²Var(X) + b²Var(Y) | No |
| Continuous mean | E(X) = ∫ x f(x) dx | Yes |
| Continuous variance | Var(X) = ∫ x² f(x) dx − {E(X)}² | Yes |
| Unbiased mean | x̄ = Σx / n | Yes |
| Unbiased variance | s² = (1/(n − 1))(Σx² − (Σx)²/n) | Yes |
| Central Limit Theorem | X̄ ~ N(μ, σ²/n) approximately | Yes |
| Sample proportion | approximately N(p, p(1 − p)/n) | Yes |
| CI for a mean | x̄ ± z σ/√n (or s/√n, large sample) | No |
| CI for a proportion | p̂ ± z √(p̂(1 − p̂)/n) | No |

## 6.1 The Poisson distribution

**Conditions for Po(λ).** Events occur singly, independently, at random, at a constant mean rate. Scale λ with the interval: rate 0.8 per metre → 2.4 in 3 metres.

**Approximations.**

| From | To | When (syllabus guide) | Continuity correction? |
|---|---|---|---|
| B(n, p) | Po(np) | n > 50 and np < 5, approximately | No |
| Po(λ) | N(λ, λ) | λ > 15, approximately | Yes |
| B(n, p) | N(np, npq) | np > 5 and nq > 5 | Yes |

**Worked reminder (normal approximation).** X ~ Po(18). Find P(X ≤ 12).

```
λ = 18 > 15, so use N(18, 18)
P(X ≤ 12) ≈ P(Y < 12.5)
z = (12.5 − 18)/√18 = −1.296
P = 1 − Φ(1.296) = 0.0974 (3 s.f.)
```

**Sums.** Independent X ~ Po(λ₁) and Y ~ Po(λ₂) give X + Y ~ Po(λ₁ + λ₂). Only sums: 2X is not Poisson.

## 6.2 Linear combinations

**Method in steps.**

1. Write the combination in symbols first (T = X₁ + X₂ + Y, or D = 2B − A).
2. Mean: combine the means with the same coefficients.
3. Variance: square each coefficient, then **add** (independent variables).
4. State the distribution (normal if the parts are normal).
5. Standardise and use Φ.

**Must-know distinction.**

| X₁ + X₂ + X₃ (three separate items) | 3X (one item, tripled) |
|---|---|
| mean 3μ | mean 3μ |
| variance 3σ² | variance 9σ² |

Small reminder: if Var(X) = 3, then Var(5 − 2X) = (−2)² × 3 = 12. The constant 5 does not change the variance.

## 6.3 Continuous random variables

**Checklist for a PDF on one interval.**

1. f(x) ≥ 0 everywhere on the interval.
2. Total area = 1 (use it to find k).
3. P(a < X < b) = area between a and b.
4. E(X) and Var(X) from the MF19 integrals.
5. Median m: area from the lower limit up to m = 1/2. Quartiles: 1/4 and 3/4.

**Worked reminder.** f(x) = (3/8)x² for 0 ≤ x ≤ 2.

```
area:   (3/8) × [x³/3]₀² = (3/8)(8/3) = 1   ✓
E(X)  = (3/8) ∫₀² x³ dx = (3/8)(4) = 1.5
E(X²) = (3/8) ∫₀² x⁴ dx = (3/8)(32/5) = 2.4
Var(X) = 2.4 − 1.5² = 0.15
median: (3/8)(m³/3) = 1/2  →  m³ = 4  →  m = 1.59 (3 s.f.)
```

For an infinite domain, e.g. x ≥ 2, evaluate the improper integral as a limit: terms such as 1/x³ → 0 as x → ∞.

The cumulative distribution function is not required explicitly; integrate f(x) directly.

## 6.4 Sampling and estimation

**Unbiased, in simple terms.** Each sample gives a different estimate, but the method is right on average. That is why s² divides by n − 1: dividing by n would, on average, underestimate the population variance.

**Why randomness matters.** A random sample gives every member an equal chance of selection, so results are not biased. A method is unsatisfactory when part of the population cannot be chosen (one time, one place, volunteers only).

**Distribution of X̄.**

| Population | n | X̄ |
|---|---|---|
| Normal | any | exactly N(μ, σ²/n) |
| Not normal or unknown | large | approximately N(μ, σ²/n) by the CLT |
| Not normal or unknown | small | no result available |

**Confidence interval, method in steps.**

1. Find x̄ (or p̂) and, if needed, s² with divisor n − 1.
2. Pick z from the critical values table: 90% → 1.645, 95% → 1.960, 98% → 2.326, 99% → 2.576.
3. Standard error: σ/√n, s/√n, or √(p̂(1 − p̂)/n).
4. Interval = estimate ± z × standard error, to 3 s.f.
5. Interpret: about 95% of intervals built this way contain the true value.

**Worked reminder (sample size).** σ = 5. How large must n be for a 95% interval for μ to have width less than 2?

```
width = 2 × 1.96 × 5/√n < 2  →  √n > 9.8  →  n > 96.04
smallest n = 97
```

## 6.5 Hypothesis tests

**Method in steps (every test).**

1. State H₀ and H₁ in terms of the parameter (p, λ or μ), not the sample value.
2. State the distribution under H₀.
3. Calculate the tail probability (or the z-value).
4. Compare with the significance level (or critical value). For a two-tailed test, compare the tail with half the level.
5. Conclude in context, without overstating: "evidence that…" or "insufficient evidence that…".

**Which test?**

| Situation | Test statistic |
|---|---|
| Single observation, binomial | Direct P(X ≤ x) or P(X ≥ x); normal approximation if n large |
| Single observation, Poisson | Direct tail probability; normal approximation if λ large |
| Population mean, σ known, normal population | z = (x̄ − μ)/(σ/√n) |
| Population mean, large sample | z = (x̄ − μ)/(s/√n) |

**Finding a discrete rejection region.** H₀: p = 0.4, H₁: p > 0.4, n = 15, 5% level. Under H₀, P(X ≥ 9) = 0.0950 and P(X ≥ 10) = 0.0338. The first tail below 0.05 starts at 10, so the rejection region is **X ≥ 10** and P(Type I error) = 0.0338.

**Errors.**

| | H₀ true | H₀ false |
|---|---|---|
| Reject H₀ | Type I error | Correct |
| Accept H₀ | Correct | Type II error |

- P(Type I) = P(in rejection region | H₀ true). For a normal test it equals the significance level; for binomial or Poisson it is the actual tail probability of the rejection region.
- P(Type II) = P(in acceptance region | a stated alternative value is true).

## Quick self-test

1. X ~ Po(4). Find P(X = 4).
2. X ~ Po(1.5) and Y ~ Po(2.3) are independent. Find P(X + Y = 0).
3. Var(X) = 3. Find Var(5 − 2X).
4. X ~ N(20, 9) and Y ~ N(15, 16) are independent. State the distribution of X − Y.
5. f(x) = kx for 0 ≤ x ≤ 2. Find k and E(X).
6. Find unbiased estimates of μ and σ² from the sample 4, 7, 9, 10, 5.
7. A random sample of 25 is taken from N(60, 10²). State the distribution of X̄.
8. What value of z is used for a 99% confidence interval?
9. Define a Type I error.
10. Which distribution approximates B(100, 0.03)? Justify it.
11. Which distribution approximates Po(20)?

### Answers

1. e^(−4) × 4⁴/4! = **0.195** (3 s.f.).
2. X + Y ~ Po(3.8), so P = e^(−3.8) = **0.0224** (3 s.f.).
3. (−2)² × 3 = **12**.
4. **X − Y ~ N(5, 25)**: mean 20 − 15, variance 9 + 16.
5. 2k = 1, so **k = 1/2**; E(X) = ∫₀² x²/2 dx = **4/3**.
6. x̄ = 35/5 = **7**; s² = (9 + 0 + 4 + 9 + 4)/4 = **6.5**.
7. **X̄ ~ N(60, 4)**, since 100/25 = 4. It is exactly normal because the population is normal.
8. **2.576**.
9. **Rejecting H₀ when H₀ is true.**
10. **Po(3)**: n = 100 > 50 and np = 3 < 5.
11. **N(20, 20)**, with a continuity correction, because λ > 15.

## Where marks are usually lost

- λ not rescaled when the interval changes.
- Normal approximation to a Poisson used without a continuity correction.
- Variances subtracted for a difference of two variables.
- nX used instead of X₁ + … + Xₙ for separate items.
- k found, but E(X) then worked out with f(x) missing the k.
- A median equation set equal to 0.5 over the wrong limits.
- Biased variance (divisor n) given when the unbiased estimate was asked for.
- Hypotheses written in terms of x̄ or the observed count instead of μ, p or λ.
- Two-tailed test compared with the full significance level in one tail.
- Type II error probability found under H₀ instead of the stated alternative value.

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus, for exams in 2026 and 2027 (Version 4), Cambridge University Press & Assessment. Topic 6, Probability & Statistics 2 (for Paper 6): sections 6.1 to 6.5.
