---
title: "Cambridge A Level Mathematics (9709): Sampling and estimation"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 6 – Probability & Statistics 2"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 6.4
syllabusTopics:
  - qualification: "a-level"
    topic: "probability-and-statistics-2-cambridge-alevel"
    subtopic: "sampling-and-estimation-cambridge-alevel-maths"
description: "Cambridge 9709 Paper 6 guide to section 6.4: random sampling, the distribution of the sample mean, the CLT, unbiased estimates and confidence intervals."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into section **6.4 Sampling and estimation** of Probability & Statistics 2 (Paper 6) in the Cambridge International AS & A Level Mathematics 9709 syllabus for 2026 and 2027. The [Probability & Statistics 2 study guide](/resources/a-level-maths-9709-probability-statistics-2/) gives the core formulae; this page concentrates on the question types that turn those formulae into marks: criticising a sampling method, finding a sample size, choosing between an exact normal result and the Central Limit Theorem, working from coded data, and reading a confidence interval backwards.

## What section 6.4 asks for

The syllabus lists seven things you must be able to do:

- distinguish a sample from a population and appreciate why samples must be random
- explain simply why a given sampling method may be unsatisfactory, including an elementary understanding of using random numbers (named methods such as quota or stratified sampling are **not** required)
- treat the sample mean X̄ as a random variable with E(X̄) = μ and Var(X̄) = σ²/n
- use the fact that X̄ is normal when X is normal
- use the Central Limit Theorem where appropriate (an informal understanding is enough)
- calculate unbiased estimates of the population mean and variance from raw or summarised data
- find and interpret a confidence interval for a population mean (normal population with known variance, or a large sample) and an approximate interval for a proportion from a large sample.

## Criticising a sampling method

A sample is unsatisfactory when some members of the population have no chance, or a smaller chance, of being chosen, so that the sample is likely to differ systematically from the population. Marks come from naming **who is left out** and **why that matters for the quantity being measured**.

**Example.** A college wants the mean time its 650 students spend travelling to college. It asks the first 40 students through the gate one morning. Students who arrive late, who have afternoon-only timetables or who are absent that day cannot be chosen, and early arrivals may well be those who live closest or travel by a fixed bus. The sample is not random, so its mean may be biased.

**Using random numbers.** Number the students 001 to 650. Read three-digit groups from a random number table (or generate them on a calculator). Use a group if it lies between 001 and 650 and has not already appeared; ignore 000, groups above 650 and repeats. Continue until 40 students are chosen. Every student then has the same chance of selection, and every possible group of 40 is equally likely.

## The sample mean as a random variable

Each sample gives a different value of x̄, so X̄ has its own distribution. Its mean equals the population mean, but its spread shrinks as n grows: the standard deviation of X̄ is σ/√n. Multiplying n by 4 halves this standard deviation; multiplying n by 9 divides it by 3.

**Worked example 1 (normal population).** Masses of a type of melon are X ~ N(120, 9²) grams. A random sample of 12 melons is weighed.

```
X̄ ~ N(120, 9²/12) exactly, because X is normal
P(X̄ < 117): z = (117 − 120)/(9/√12) = −1.155
P = 1 − Φ(1.155) = 0.124 (3 s.f.)
Compare one melon: P(X < 117) = Φ(−0.333) = 0.369 (3 s.f.)
```

The single melon is three times as likely to weigh under 117 g, because the mean of 12 values varies much less than one value does.

**Worked example 2 (finding n).** How large must the sample be so that P(|X̄ − 120| < 2) is at least 0.95?

```
Need 1.96 × 9/√n ≤ 2
√n ≥ 8.82   so   n ≥ 77.79
Smallest sample size: n = 78
```

Always round **up** for a sample size, even when the decimal part is small, because rounding down would leave the probability just below the target.

## Exact result or Central Limit Theorem?

Ask two questions in order. Is the population normal? If so, X̄ is exactly normal for any n and the CLT is not needed. If not (or if the distribution is unknown), is n large? If so, the CLT says X̄ is **approximately** N(μ, σ²/n).

**Worked example 3 (CLT).** Waiting times at a clinic have mean 4.2 minutes and standard deviation 3.0 minutes. The distribution is strongly skewed, since most waits are short and a few are very long. A random sample of 60 waits is taken.

```
n = 60 is large, so by the CLT  X̄ ≈ N(4.2, 3.0²/60)
P(X̄ > 4.5): z = 0.3/(3.0/√60) = 0.775
P = 1 − Φ(0.775) = 0.219 (3 s.f.)
```

A common question asks whether the CLT was needed. Here it was, because waiting times are not normal. In worked example 1 it was not, because the melon masses are normal.

## Unbiased estimates from raw and summarised data

The unbiased estimate of μ is x̄. The unbiased estimate of σ² divides by n − 1:

```
s² = (Σx² − (Σx)²/n)/(n − 1)   which equals   n/(n − 1) × (variance of the sample)
```

**Worked example 4 (raw data).** Eight lengths, in cm: 12.4, 11.8, 13.1, 12.9, 12.0, 12.6, 11.5, 12.7.

```
n = 8,  Σx = 99.0,  Σx² = 1227.32
x̄ = 99.0/8 = 12.375
s² = (1227.32 − 99.0²/8)/7 = 2.195/7 = 0.314 (3 s.f.)
```

Dividing by 8 instead would give 0.274, which is the variance of the sample, not the unbiased estimate of the population variance.

**Worked example 5 (coded data).** For 20 values, Σ(x − 50) = 36 and Σ(x − 50)² = 410.

```
x̄ = 50 + 36/20 = 51.8
s² = (410 − 36²/20)/19 = 345.2/19 = 18.2 (3 s.f.)
```

Subtracting 50 from every value moves the mean by 50 but does not change the spread, so the variance formula is applied directly to the coded sums.

## Confidence intervals: forwards and backwards

**When each interval is valid.** A mean interval x̄ ± z σ/√n needs either a normal population with known σ (any n), or a large sample, where the CLT justifies normality and s may replace σ. A proportion interval p̂ ± z√(p̂(1 − p̂)/n) needs a large sample.

**Worked example 6 (small sample, normal, known σ).** A machine fills bottles with volumes that are normally distributed with standard deviation 2.5 ml. A sample of 10 bottles has mean 31.6 ml. A 99% interval is

```
31.6 ± 2.576 × 2.5/√10 = 31.6 ± 2.036
(29.6, 33.6) ml to 3 s.f.
```

The sample is small, so the interval relies on volumes being normal; the CLT cannot be used.

**Worked example 7 (finding the confidence level).** From a sample of 50 with known σ = 5, an interval for μ is (22.24, 24.56). Find the confidence level.

```
centre x̄ = 23.4,  half-width = 1.16
z × 5/√50 = 1.16   so   z = 1.640
Φ(1.640) = 0.9495, so the level is 2 × 0.9495 − 1 = 0.899, about 90%
```

**Worked example 8 (proportion).** In a random sample of 300 voters, 87 support a proposal. p̂ = 0.29.

```
95% interval: 0.29 ± 1.96 × √(0.29 × 0.71/300) = 0.29 ± 0.0513
(0.239, 0.341) to 3 s.f.
```

If someone claims that a quarter of voters support it, 0.25 lies inside the interval, so the sample does not contradict the claim.

**Interpreting an interval.** A 95% interval comes from a method that captures μ in 95% of repeated samples. If two independent 95% intervals are calculated, the probability both contain μ is 0.95² = 0.9025. In 20 independent 90% intervals the expected number that **fail** to contain μ is 20 × 0.1 = 2.

## Common mistakes

- Using σ instead of σ/√n when the question is about a sample mean.
- Rounding a required sample size down.
- Saying "by the CLT" when the population is already normal, or forgetting it when the population is not.
- Dividing by n for the unbiased variance, or forgetting to adjust coded data for the mean but not the variance.
- Using z = 1.645 for a 95% two-sided interval (it is 1.960; 1.645 gives 90%).
- Writing "there is a 95% probability that μ lies in (55.2, 57.8)" without explaining the repeated-sampling meaning when an interpretation is asked for.

## Exam technique for Paper 6

- **"Explain why the sample is not random"**: name a group that cannot be chosen and link it to the variable.
- **"State an assumption"**: usually that the sample is random, or that the population is normal when n is small.
- **"Calculate unbiased estimates"**: show the formula with numbers substituted, then give 3 significant figures.
- **"Determine a confidence interval"**: write the critical z value, the standard error and both limits; give the interval as (lower, upper).

## Practise next

Recall the formulae with the [Sampling and estimation revision notes](/resources/cambridge-a-level-mathematics-9709-sampling-and-estimation-cambridge-alevel-maths-revision-notes/), then work through the [Sampling and estimation practice questions](/resources/cambridge-a-level-mathematics-9709-sampling-and-estimation-cambridge-alevel-maths-practice/). The next section is covered in the [Hypothesis tests study guide](/resources/cambridge-a-level-mathematics-9709-hypothesis-tests-cambridge-alevel-maths/).

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus for 2026 and 2027, Topic 6 Probability & Statistics 2 (Paper 6), section 6.4 Sampling and estimation.
