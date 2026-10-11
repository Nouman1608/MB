---
title: "OxfordAQA International AS and A-level Mathematics: Sampling, unbiased estimators and the Central Limit Theorem (9660) -- Revision Notes"
seoTitle: "OxfordAQA A-level Maths Sampling and CLT Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Sampling, unbiased estimators and the Central Limit Theorem"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 205
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s2-statistics-oxfordaqa-alevel-maths"
    subtopic: "s2-estimation-oxfordaqa-alevel-maths"
description: "Revision notes on population and sample, unbiased estimators, standard error and the Central Limit Theorem for OxfordAQA International A-level Maths."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
These notes condense section S2.5 (Estimation) of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. The specification places this content in International A-level (A2) Unit S2 (Statistics); it is not examined at International AS. For full explanations and longer worked examples, read the [study guide](/resources/oxfordaqa-a-level-mathematics-sampling-unbiased-estimators-and-the-central-limit/).

Links: [course hub](/boards/oxfordaqa/a-level/mathematics/) · [printable checklist](/checklists/oxfordaqa/a-level/mathematics/) · [practice questions](/resources/oxfordaqa-a-level-mathematics-sampling-unbiased-estimators-and-the-central-limit-practice/) · [free diagnostics](/diagnostics/)

## Definitions

| Term | Meaning |
|---|---|
| Population | The whole collection of items of interest |
| Sample | The part of the population actually observed |
| Parameter | A fixed (usually unknown) number describing the population, such as μ or σ² |
| Statistic | A number calculated from a sample, such as x̄ or s². It varies from sample to sample |
| Simple random sample | Every possible sample of size n is equally likely to be chosen |
| Estimator | A statistic used to estimate a parameter |
| Unbiased estimator T of θ | E(T) = θ |
| Sampling distribution | The probability distribution of a statistic over all possible samples |
| Standard error | The standard deviation of the sample mean, σ/√n |

The specification says methods for obtaining simple random samples are not tested directly. Know what the term means and why a biased selection fails it.

## Formulae

| Quantity | Result |
|---|---|
| Estimate of μ | x̄ = Σx / n |
| Estimate of σ² | s² = Σ(x − x̄)² / (n − 1) |
| Summary-data form | s² = (Σx² − n x̄²) / (n − 1) |
| Normal parent | X̄ ~ N(μ, σ²/n), exact for any n |
| Standard error | σ/√n |
| Estimated standard error | s/√n |
| CLT, large n, any parent | X̄ ≈ N(μ, σ²/n) |
| Total of n values (CLT) | T ≈ N(nμ, nσ²) |

Always check the question's wording: "variance of X̄" is σ²/n, while "standard error" is its square root.

## Method boxes

**Unbiased estimates from raw data**

1. Find Σx and divide by n for x̄.
2. Find Σx² (or Σ(x − x̄)²).
3. Compute Σx² − n x̄², then divide by n − 1.
4. Give units, and keep the unrounded value for later steps.

**Probability about a sample mean (normal parent)**

1. Write X̄ ~ N(μ, σ²/n), with the numbers substituted.
2. Standardise with z = (value − μ) / (σ/√n).
3. Read off the probability, using the symmetry of the normal curve where needed.
4. Answer in context.

**Probability about a sample mean (any parent, large n)**

1. Find μ and σ² of one observation.
2. State "n is large, so by the CLT X̄ is approximately N(μ, σ²/n)".
3. Standardise and find the probability.
4. If σ² is unknown, replace it by s² and say so.

**Choosing the sample size**

1. Write the condition as z-value × σ/√n ≤ required margin.
2. Solve for √n, then square.
3. Round **up** to a whole number, and check the probability at n and n − 1.

## Worked reminders

**Estimate from summaries.** n = 20, Σx = 164, Σx² = 1,420.

```
x̄ = 164 / 20 = 8.2
s² = (1420 − 20 × 8.2²) / 19 = (1420 − 1344.8) / 19 = 75.2 / 19 = 3.958 (3 d.p.)
estimated standard error = √(3.958 / 20) = 0.445
```

**Normal parent.** X ~ N(100, 15²) and n = 25, so X̄ ~ N(100, 3²). P(X̄ > 104) = 1 − Φ(1.333) = 0.0912.

**CLT.** A parent has mean 10 and standard deviation 5. For n = 100, X̄ ≈ N(10, 0.5²). P(X̄ < 9) = Φ(−2) = 0.0228.

**Unbiased check.** Let T = (X₁ + 3X₂)/4, where each Xᵢ has mean μ. Then E(T) = (μ + 3μ)/4 = μ, so T is unbiased. If instead T = (X₁ + X₂)/3, then E(T) = 2μ/3, which is biased.

## Why the results hold (short reasons)

You do not need to prove these, but a quick reason makes them easier to remember.

- **Mean.** E(X̄) = (E(X₁) + … + E(Xₙ))/n = nμ/n = μ, so X̄ is unbiased for μ.
- **Variance of the mean.** The Xᵢ are independent, so Var(X̄) = (σ² + … + σ²)/n² = nσ²/n² = σ²/n.
- **Why n − 1.** Deviations are measured from x̄, which is itself calculated from the data, so they are slightly too small. Dividing by n − 1 instead of n corrects this exactly on average.
- **Why the CLT matters.** It lets you use normal-distribution methods for a mean without knowing the shape of the parent. You only need its mean and variance.

## Phrases worth writing down

Short, accurate statements help a reader see your reasoning.

- "The sample is random, so the observations are independent."
- "X is normal, so X̄ ~ N(μ, σ²/n)."
- "n is large, so by the Central Limit Theorem X̄ is approximately normally distributed."
- "σ is unknown, so use s as an estimate. The standard error is estimated by s/√n."
- "T is unbiased because E(T) = μ."

## Another worked reminder: finding n

A population has σ = 10. Find the smallest n so that the standard error is below 1.5.

```
10 / √n < 1.5
√n > 6.667
n > 44.4
```

So the smallest sample size is **45**. Round up, because n must be a whole number and a smaller n would not meet the condition.

## One more worked reminder: a total

Each item has mean 20 and standard deviation 3, from a skewed distribution. A random sample of 36 is taken. Find P(total > 735).

```
T ≈ N(36 × 20, 36 × 3²) = N(720, 324), standard deviation 18
z = (735 − 720) / 18 = 0.833
P(T > 735) = 1 − Φ(0.833) = 0.202
```

Equivalent check using the mean: X̄ ≈ N(20, 0.5²) and P(X̄ > 20.417) gives the same z-value of 0.833.

## Must-know distinctions

| Compare | Key point |
|---|---|
| Parameter and statistic | Parameter describes the population (fixed). Statistic describes the sample (random) |
| Σ(x − x̄)²/n and Σ(x − x̄)²/(n − 1) | Dividing by n − 1 gives the unbiased estimate of σ² |
| Variance of X̄ and standard error | σ²/n and σ/√n |
| Normal parent and non-normal parent | Normal: X̄ is exactly normal for all n. Non-normal: only approximately normal, and only for large n |
| Individual values and the mean | The CLT concerns X̄ (or the total). It does not make single values normal |
| Unbiased and accurate | Unbiased means correct on average. A smaller variance of the estimator makes single estimates more reliable |

## Quick self-test

1. Name the parameter and the statistic: a company's average delivery time over all 5,000 orders, and the average over 80 chosen orders.
2. Data: 5, 7, 8, 10, 15. Find unbiased estimates of the mean and variance.
3. A sample of 16 has Σx = 200 and Σx² = 2,600. Find the unbiased estimate of the variance.
4. X ~ N(30, 4²). State the distribution of the mean of 16 observations.
5. What is the standard error when σ = 12 and n = 36?
6. If σ is unknown, what estimates the standard error?
7. X ~ N(80, 10²), n = 25. Find P(X̄ < 77).
8. A parent distribution is skewed with mean 50 and variance 64. State the approximate distribution of X̄ for n = 100.
9. Each Xᵢ has mean μ. Show that T = (X₁ + X₂ + X₃)/3 is an unbiased estimator of μ.
10. Waiting times have mean 6 and standard deviation 6. For a sample of 36, find P(X̄ > 7).
11. How does the standard error change if the sample size is multiplied by 9?
12. Why is "the sample mean is normal" justified for a large sample from a skewed population?

### Answers

1. Parameter: the population mean delivery time (all 5,000). Statistic: the mean of the 80.
2. Σx = 45, x̄ = 9. Σx² = 463. s² = (463 − 5 × 81)/4 = 58/4 = 14.5. **x̄ = 9, s² = 14.5.**
3. x̄ = 12.5. s² = (2600 − 16 × 156.25)/15 = 100/15 = **6.67** (3 s.f.).
4. X̄ ~ N(30, 1²), since 4²/16 = 1.
5. 12/√36 = **2**.
6. s/√n, where s is the sample standard deviation from the unbiased variance estimate.
7. X̄ ~ N(80, 2²). z = −1.5. P = **0.0668**.
8. X̄ ≈ N(50, 0.8²) by the CLT, since 64/100 = 0.64.
9. E(T) = (μ + μ + μ)/3 = **μ**, so T is unbiased.
10. Standard error 6/√36 = 1. X̄ ≈ N(6, 1²). P(X̄ > 7) = 1 − Φ(1) = **0.159** (3 s.f.).
11. Multiplying n by 9 divides the standard error by √9, so it becomes **one third** of its size.
12. By the Central Limit Theorem, the mean of a large random sample is approximately normally distributed, whatever the parent distribution.

## Where marks are usually lost

- Dividing by n instead of n − 1 for an unbiased variance estimate.
- Using σ rather than σ/√n when standardising a sample mean.
- Mixing up variance (σ²/n) and standard error (σ/√n) when writing N(μ, …).
- Starting from a rounded x̄ and carrying a rounding error into s².
- Not writing why the CLT can be used, for example omitting "n is large" or "the sample is random".
- Calling the sample mean a parameter, or the population mean a statistic.
- Rounding a required sample size to the nearest whole number rather than up.
- Applying the CLT to one observation or to a small sample from a skewed distribution.
- Writing a final answer with no link to the context, such as the unit or the claim being tested.

## Official syllabus

These notes follow section S2.5 of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019), published by OxfordAQA.
