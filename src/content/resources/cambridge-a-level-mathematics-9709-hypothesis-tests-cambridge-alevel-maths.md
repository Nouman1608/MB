---
title: "Cambridge A Level Mathematics (9709): Hypothesis tests"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 6 – Probability & Statistics 2"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 6.5
syllabusTopics:
  - qualification: "a-level"
    topic: "probability-and-statistics-2-cambridge-alevel"
    subtopic: "hypothesis-tests-cambridge-alevel-maths"
description: "Cambridge 9709 Paper 6 guide to section 6.5: critical regions, binomial, Poisson and normal-mean tests, normal approximations, Type I and Type II errors."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into section **6.5 Hypothesis tests** of Probability & Statistics 2 (Paper 6) in the Cambridge International AS & A Level Mathematics 9709 syllabus for 2026 and 2027. The [Probability & Statistics 2 study guide](/resources/a-level-maths-9709-probability-statistics-2/) shows one test of each kind. This page adds the variations that Paper 6 questions build on: finding a critical region before any data arrive, two-tailed discrete tests, tests that need a normal approximation, a large-sample mean test with an estimated variance, and error probabilities when a decision rule is given to you.

## What section 6.5 asks for

- the nature of a hypothesis test; one-tailed and two-tailed tests; the terms null hypothesis, alternative hypothesis, significance level, rejection (critical) region, acceptance region and test statistic
- tests based on a **single observation** from a binomial or Poisson distribution, by direct evaluation of probabilities or by a normal approximation where appropriate
- tests for a population mean when the population is normal with known variance, or when the sample is large
- the meaning of Type I and Type II errors, and their probabilities for tests based on a normal distribution or on direct binomial or Poisson probabilities.

The syllabus expects every outcome to be interpreted in the context of the question.

## The five-line structure

Every test, whatever the distribution, earns its marks in the same order:

1. **Hypotheses** in terms of a parameter: p, λ or μ. Never write them in terms of X or x̄.
2. **Distribution under H₀**, for example X ~ B(20, 0.25).
3. **Probability or test statistic**: a tail probability, or a z value.
4. **Comparison** with the significance level (or with a critical value).
5. **Conclusion in context**, worded with "evidence", not "proof".

## Finding a critical region for a binomial test

A question may ask for the rejection region before the observation is known. You must find the boundary where the tail probability first drops below the significance level.

**Worked example 1.** A spinner is thought to land on red with probability 0.25. Someone suspects it lands on red more often. It is spun 20 times. Find the rejection region at the 5% level.

```
H₀: p = 0.25    H₁: p > 0.25    X ~ B(20, 0.25) under H₀
P(X ≥ 8) = 0.1018  > 0.05
P(X ≥ 9) = 0.0409  < 0.05
Rejection region: X ≥ 9
```

Show **both** probabilities either side of the boundary; that is how the examiner sees that 9 is the first value that works. If the spinner gives 8 reds, 8 is not in the region, so there is insufficient evidence at the 5% level that red comes up more often than a quarter of the time.

The probability of a Type I error is the actual probability of landing in the region when H₀ is true: **0.0409**, not 0.05, because a discrete distribution cannot usually hit the stated level exactly.

## Two-tailed discrete tests

For a two-tailed test, compare the tail on the side of the observation with **half** the significance level.

**Worked example 2.** A coin is tossed 12 times and shows 2 heads. Test at the 10% level whether it is biased.

```
H₀: p = 0.5    H₁: p ≠ 0.5    X ~ B(12, 0.5)
Observation is in the lower tail: P(X ≤ 2) = 0.0193
Compare with 0.05 (half of 10%): 0.0193 < 0.05
Reject H₀: evidence at the 10% level that the coin is biased.
```

A common error is to compare 0.0193 with 0.10, which happens to give the same decision here but loses the comparison mark, and gives the wrong decision whenever the tail lies between the half-level and the full level.

## When to use a normal approximation

Use direct evaluation when it is practical. When n is large, a binomial observation can be approximated by N(np, npq) provided np and nq are both greater than 5; when λ is large (greater than 15), a Poisson observation can be approximated by N(λ, λ). Both approximations need a **continuity correction** because a discrete count is replaced by a continuous variable.

**Worked example 3 (binomial).** Historically 15% of a firm's customers complain. After a change of supplier, 40 out of 200 customers complain. Test at the 2% level whether the proportion has increased.

```
H₀: p = 0.15    H₁: p > 0.15    X ~ B(200, 0.15) ≈ N(30, 25.5)
P(X ≥ 40) ≈ P(Y > 39.5)
z = (39.5 − 30)/√25.5 = 1.881
P = 1 − Φ(1.881) = 0.0300 > 0.02
Do not reject H₀: insufficient evidence at the 2% level that the proportion has increased.
```

Equivalently, compare z = 1.881 with the 2% one-tailed critical value 2.054.

**Worked example 4 (Poisson, with rate scaling).** A website receives error reports at random at a mean rate of 5 per day. After an update, 12 reports arrive in 4 days. Test at the 5% level whether the rate has fallen.

```
Over 4 days: H₀: λ = 20    H₁: λ < 20
X ~ Po(20) ≈ N(20, 20)
P(X ≤ 12) ≈ P(Y < 12.5)
z = (12.5 − 20)/√20 = −1.677
P = Φ(−1.677) = 0.0468 < 0.05
Reject H₀: evidence at the 5% level that the mean rate of error reports has fallen.
```

Scale the rate to the period observed **before** writing the hypotheses, and state them using the scaled mean or the daily rate consistently.

## A large-sample test for a mean

When σ is unknown but n is large, estimate σ² by s² and use the Central Limit Theorem.

**Worked example 5.** A machine is set to fill bags of nuts with a mean mass of 50 g. The distribution of masses is unknown. A random sample of 64 bags gives a sample mean of 49.2 g and an unbiased variance estimate of 4.4². Test at the 5% level whether the mean mass is less than 50 g.

```
H₀: μ = 50    H₁: μ < 50
X̄ ≈ N(50, 4.4²/64) by the CLT
z = (49.2 − 50)/(4.4/8) = −1.455
Critical value −1.645; −1.455 > −1.645
Do not reject H₀: insufficient evidence at the 5% level that the mean is less than 50 g.
```

## Type I and Type II errors from a decision rule

A **Type I error** is rejecting H₀ when it is true. For a test using a continuous normal distribution, its probability equals the significance level. For a discrete test it is the actual probability of the rejection region under H₀.

A **Type II error** is accepting H₀ when it is false. Its probability needs a stated true value of the parameter, and it is the probability of landing in the acceptance region under that value.

**Worked example 6 (binomial, continued).** Using the region X ≥ 9 from worked example 1, find P(Type II error) if in fact p = 0.4.

```
Accept H₀ when X ≤ 8.   P(X ≤ 8 | p = 0.4) = 0.596 (3 s.f.)
```

**Worked example 7 (Poisson rule given).** Complaints arrive at a mean rate of 6.5 per week. A manager will conclude the rate has fallen if there are at most 2 complaints in a week.

```
P(Type I) = P(X ≤ 2 | λ = 6.5) = e^(−6.5)(1 + 6.5 + 6.5²/2) = 0.0430
If the true rate is 3: P(Type II) = P(X ≥ 3 | λ = 3) = 1 − e^(−3)(1 + 3 + 4.5) = 0.577
```

**Worked example 8 (normal).** In worked example 5, treat σ = 4.4 as known. H₀ is rejected when x̄ < 50 − 1.645 × 0.55 = 49.095. If the true mean is 48.5:

```
P(Type II) = P(X̄ > 49.095 | μ = 48.5) = 1 − Φ((49.095 − 48.5)/0.55)
           = 1 − Φ(1.082) = 0.140 (3 s.f.)
```

Lowering the significance level makes a Type I error less likely but, for the same sample size, makes a Type II error more likely. A larger sample can reduce both.

## Common mistakes

- Hypotheses written as "H₀: X = 8" or "H₀: x̄ = 50" instead of a parameter.
- Using P(X = 9) instead of the tail P(X ≥ 9).
- Forgetting to halve the level in a two-tailed test.
- Leaving out the continuity correction, or applying it in the wrong direction.
- Not scaling a Poisson rate to the period observed.
- Giving 0.05 as P(Type I) for a discrete test.
- Conclusions that say H₁ is "proved" or that omit the context.

## Exam technique for Paper 6

- **"Test, at the α% significance level, whether…"**: all five lines are needed; the final line carries the context mark.
- **"Find the critical region"**: show the two probabilities either side of the boundary.
- **"Explain what is meant by a Type I error in this context"**: rewrite the definition using the story, for example "concluding the rate of complaints has fallen when it has not".
- **"State an assumption"**: often that the observations are independent, or that the sample is random.

## Practise next

Use the [Hypothesis tests revision notes](/resources/cambridge-a-level-mathematics-9709-hypothesis-tests-cambridge-alevel-maths-revision-notes/) for quick recall, then try the [Hypothesis tests practice questions](/resources/cambridge-a-level-mathematics-9709-hypothesis-tests-cambridge-alevel-maths-practice/). The sampling ideas these tests rely on are in the [Sampling and estimation study guide](/resources/cambridge-a-level-mathematics-9709-sampling-and-estimation-cambridge-alevel-maths/).

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus for 2026 and 2027, Topic 6 Probability & Statistics 2 (Paper 6), section 6.5 Hypothesis tests.
