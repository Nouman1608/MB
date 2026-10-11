---
title: "OxfordAQA International AS and A-level Mathematics: Hypothesis tests for means: z-tests and t-tests (9660)"
seoTitle: "OxfordAQA A-level Maths: z-tests and t-tests for Means"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Hypothesis tests for means: z-tests and t-tests"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 207
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s2-statistics-oxfordaqa-alevel-maths"
    subtopic: "s2-hypothesis-testing-oxfordaqa-alevel-maths"
description: "Study guide to z-tests and t-tests for a population mean in OxfordAQA International A-level Mathematics Unit S2, with fully worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide is aligned to the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. It covers the second part of S2.6 (Hypothesis testing): tests for a mean using a z-statistic or a t-statistic. The spec states that this content belongs to International A-level (A2) Unit S2 (Statistics) and is not examined at International AS. Tests for a proportion and for a Poisson mean are separate topics and are not repeated here.

Use it with the [revision notes](/resources/oxfordaqa-a-level-mathematics-hypothesis-tests-for-means-z-tests-and-t-tests-revision-notes/) and the [practice questions](/resources/oxfordaqa-a-level-mathematics-hypothesis-tests-for-means-z-tests-and-t-tests-practice/). Course pages: the [OxfordAQA A-level Mathematics hub](/boards/oxfordaqa/a-level/mathematics/) and the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/). Not sure where you stand? Try the [free 10-minute diagnostics](/diagnostics/).

## What this unit covers

| Spec outcome (S2.6) | What you must be able to do |
|---|---|
| Mean of a normal distribution, known variance | Carry out a test using a z-statistic |
| Mean using a normal approximation | Large samples only; variance known or unknown; z-statistic |
| Mean of a normal distribution, unknown variance | Carry out a test using a t-statistic |
| General language of testing | Hypotheses, one- and two-tailed tests, critical value and region, p-value, Type I and Type II errors |

The spec says the significance level will be given. It also says you should understand Type I and Type II errors, but that you will not be asked to calculate the risk of a Type II error.

## Ideas you need from earlier work

From S2.5 (Estimation) you need three results. The sample mean x̄ is an unbiased estimator of the population mean μ. The sample variance s² = Σ(x − x̄)²/(n − 1) is an unbiased estimator of the population variance. If the population is normal, N(μ, σ²), then the mean of a random sample of size n has the sampling distribution

```
X̄ ~ N(μ, σ²/n)      standard error = σ/√n
```

When σ is unknown, the standard error is estimated by s/√n.

You also need the shortcut for the sample variance from summarised data:

```
s² = [ Σx² − (Σx)²/n ] / (n − 1)
```

Remember the divisor n − 1, not n.

## The structure of every test

1. State H₀ and H₁ in terms of the population mean μ. H₀ is always μ = a stated value. H₁ is μ > value, μ < value (one-tailed) or μ ≠ value (two-tailed). Choose from the wording of the question, not from the data.
2. Say what is assumed true under H₀ (for example X̄ ~ N(μ₀, σ²/n)).
3. Calculate the test statistic.
4. Compare with the critical value, or find the p-value.
5. Decide: reject H₀ or do not reject H₀.
6. Conclude in the context of the question, in cautious wording.

You may compare in either of two ways. Critical region: reject H₀ if the statistic falls beyond the critical value. p-value: reject H₀ if the p-value is less than the significance level. For a two-tailed test at significance level α, each tail has α/2, so compare the one-tail probability with α/2 or double it and compare with α.

## z-test: normal population, known variance

When the population is normal and σ is known, the sampling distribution of X̄ is exactly normal for any n. The test statistic is

```
z = (x̄ − μ₀) / (σ/√n)      which is N(0, 1) under H₀
```

Useful critical values (computed from the normal distribution): one-tailed 5% is 1.645, one-tailed 1% is 2.326, two-tailed 5% is ±1.960, two-tailed 10% is ±1.645.

**Worked example 1 (one-tailed).** A torch battery is sold as lasting 42.0 hours on average. Lifetimes are normal with a known standard deviation of 3.5 hours. After a change in the process, a sample of 16 batteries has mean life 40.6 hours. Test at the 5% level whether the mean life has fallen.

```
H₀: μ = 42.0      H₁: μ < 42.0      (one-tailed)
Under H₀: X̄ ~ N(42.0, 3.5²/16), standard error = 3.5/4 = 0.875
z = (40.6 − 42.0)/0.875 = −1.600
Critical value for a lower-tail 5% test: −1.645
p-value = P(Z < −1.600) = 0.0548
```

−1.600 is not below −1.645, and 0.0548 is greater than 0.05. Do not reject H₀. There is not enough evidence at the 5% level that the mean battery life has fallen.

**Worked example 2 (two-tailed, critical region for the mean).** A machine fills honey jars with weights normally distributed, standard deviation 1.8 g, target mean 250 g. A sample of 25 jars has mean 250.7 g. Test at the 10% level whether the mean has changed, and give the critical region for x̄.

```
H₀: μ = 250      H₁: μ ≠ 250      (two-tailed, 5% in each tail)
Standard error = 1.8/√25 = 0.36
Critical z = ±1.645, so the cut-offs for x̄ are 250 ± 1.645 × 0.36
           = 250 ± 0.592
Critical region: x̄ ≤ 249.41 or x̄ ≥ 250.59
```

The sample mean 250.7 is in the critical region, so reject H₀. Check with the statistic: z = 0.7/0.36 = 1.944, which is beyond 1.645. The two-tailed p-value is 2 × P(Z > 1.944) = 0.0518, less than 0.10. There is evidence at the 10% level that the mean fill has changed. Note that the same result would not be significant at 5%, because 1.944 is below 1.960.

## Large samples: the normal approximation

If the population is not known to be normal, the Central Limit Theorem says X̄ is approximately N(μ, σ²/n) when n is large. The spec limits this version to large samples only. It covers both cases:

- σ known: use z = (x̄ − μ₀)/(σ/√n).
- σ unknown: replace σ by s, and use z = (x̄ − μ₀)/(s/√n), compared with N(0, 1).

Replacing σ by s is acceptable here only because n is large, so s is a reliable estimate. The spec does not set a numerical value for "large", so treat a sample as large when the question calls it large or its size makes the approximation clearly reasonable. Your conclusion is then approximate, and you should say that the result relies on the normal approximation.

**Worked example 3 (large sample, unknown variance, no normality assumed).** A courier says its parcels take 36 minutes on average from collection to delivery. A sample of 80 deliveries gives Σx = 3016 and Σx² = 115 800. Test at the 5% level whether the mean time is greater than 36 minutes.

```
x̄ = 3016/80 = 37.7
s² = [115 800 − 3016²/80]/79 = 26.54,   s = 5.152
Standard error estimate = 5.152/√80 = 0.576
H₀: μ = 36      H₁: μ > 36
z = (37.7 − 36)/0.576 = 2.95
Critical value 1.645;  p-value = P(Z > 2.95) = 0.0016
```

2.95 exceeds 1.645. Reject H₀. There is strong evidence that the mean delivery time is more than 36 minutes (using the normal approximation because n is large).

## t-test: normal population, unknown variance

When the population is normal but σ is unknown, and the sample may be small, replacing σ by s changes the distribution. The statistic

```
t = (x̄ − μ₀) / (s/√n)      follows a t-distribution with ν = n − 1 degrees of freedom under H₀
```

The t-distribution is symmetrical about 0 like the normal, but with heavier tails, so the critical values are larger. For example, a one-tailed 5% test needs t > 1.860 with 8 degrees of freedom, compared with 1.645 for z. As ν increases, the t-distribution approaches N(0, 1), which is why the z version is acceptable for large samples.

The t critical values in this guide are given with each example, as they would be supplied in a question. They were computed with software. You must state the degrees of freedom and the assumption that the population is normal.

**Worked example 4 (t-test, one-tailed, raw data).** A capsule is labelled as containing a mean of 123 mg of an ingredient. Nine capsules contain 118, 124, 131, 121, 127, 135, 122, 129 and 126 mg. Assuming a normal population, test at the 5% level whether the mean content exceeds 123 mg. The critical value for t with 8 degrees of freedom, one-tailed 5%, is 1.860.

```
n = 9, Σx = 1133, Σx² = 142 857
x̄ = 1133/9 = 125.89
s² = [142 857 − 1133²/9]/8 = 28.11,   s = 5.302
Standard error estimate = 5.302/3 = 1.767
H₀: μ = 123      H₁: μ > 123
t = (125.89 − 123)/1.767 = 1.635      (ν = 8)
```

1.635 is less than 1.860 (the p-value is about 0.070). Do not reject H₀. At the 5% level there is insufficient evidence that the mean content is above 123 mg.

**Worked example 5 (t-test, two-tailed, summarised data).** A technician measures the pH of 12 samples from a water supply, assumed normal. The sum is 87.6 and the sum of squares is 650.5. Test at the 5% level whether the mean pH differs from 7.0. The critical values for 11 degrees of freedom, two-tailed 5%, are ±2.201.

```
x̄ = 87.6/12 = 7.30
s² = [650.5 − 87.6²/12]/11 = 1.0018,   s = 1.001
t = (7.30 − 7.0)/(1.001/√12) = 0.30/0.2889 = 1.038
```

1.038 lies between −2.201 and 2.201 (two-tailed p-value about 0.32). Do not reject H₀. There is no evidence that the mean pH differs from 7.0.

## Choosing the right test

| Situation | Statistic | Compare with |
|---|---|---|
| Normal population, σ known, any n | z = (x̄ − μ₀)/(σ/√n) | N(0, 1) |
| Any population, large n, σ known | z (approximate) | N(0, 1) |
| Any population, large n, σ unknown | z with s in place of σ (approximate) | N(0, 1) |
| Normal population, σ unknown, n small | t = (x̄ − μ₀)/(s/√n) | t with n − 1 degrees of freedom |

## Type I and Type II errors

A Type I error is rejecting H₀ when H₀ is true. Its probability equals the significance level of the test (for a test with a fixed critical region). A Type II error is accepting H₀ when H₀ is false. You must understand both ideas, but the spec says calculating the risk of a Type II error will not be set.

## Common errors

- Dividing by σ instead of σ/√n. Always use the standard error.
- Using the divisor n instead of n − 1 when finding s² from summary data.
- Using a z critical value when the sample is small and σ is unknown. That needs t.
- Using n instead of n − 1 for the degrees of freedom.
- Choosing H₁ after looking at the data. The direction comes from the question wording.
- Using a one-tailed critical value for a two-tailed test.
- Writing "H₀ is true" or "the claim is proved". Write "not enough evidence to reject H₀".
- Forgetting context. The last line must mention the quantity being tested.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019), published by OxfordAQA. Content: S2.6 Hypothesis testing, tests for the mean (z-statistic and t-statistic), within Unit S2 (Statistics).
