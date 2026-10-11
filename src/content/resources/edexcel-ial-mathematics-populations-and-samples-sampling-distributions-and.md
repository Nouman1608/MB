---
title: "Pearson Edexcel International Advanced Level Mathematics: Samples and hypothesis tests (YMA01)"
seoTitle: "Edexcel IAL Maths S2 Samples & Hypothesis Tests Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Populations and samples, sampling distributions and hypothesis tests for binomial p and Poisson mean"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 168
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-s2-statistics-2-edexcel-alevel-maths"
    subtopic: "s2-samples-edexcel-alevel-maths"
  - qualification: "a-level"
    topic: "unit-s2-statistics-2-edexcel-alevel-maths"
    subtopic: "s2-hypothesis-tests-edexcel-alevel-maths"
description: "Study guide to Edexcel IAL Mathematics Statistics 2 section 4: samples, sampling distributions, and hypothesis tests for binomial p and Poisson mean."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

Here is section 4 (topics 4.1 to 4.6, headed "Hypothesis tests") of Unit S2: Statistics 2 in the
**Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics, Further Mathematics and Pure
Mathematics specification (YMA01), Issue 3, April 2019**. The specification states that S2 is an optional unit
for IAS Further Mathematics and for IAL Mathematics and Further Mathematics. It assumes you know Statistics 1
and the earlier S2 sections on the binomial and Poisson distributions.

Pair it with the [revision notes](/resources/edexcel-ial-mathematics-populations-and-samples-sampling-distributions-and-revision-notes/)
and the [practice questions](/resources/edexcel-ial-mathematics-populations-and-samples-sampling-distributions-and-practice/).
Course links: [hub](/boards/edexcel/a-level/mathematics/), [checklist](/checklists/edexcel/a-level/mathematics/), and the free [10-minute diagnostics](/diagnostics/).

## What this unit covers

| Spec ref | Skill |
|---|---|
| 4.1 | Define population, census, sample, sampling unit, sampling frame. Give advantages and disadvantages of a census and a sample survey |
| 4.2 | Explain a statistic and its sampling distribution |
| 4.3 | Explain what a hypothesis test does. Write null and alternative hypotheses. Interpret the result |
| 4.4 | Find a critical region. Use a statistic as a test statistic |
| 4.5 | Choose and carry out one-tailed and two-tailed tests |
| 4.6 | Test p of a binomial distribution and the mean of a Poisson distribution, using tables. A normal approximation may be used for binomial tests |

The specification says questions may also be set that do not involve tabular values. Where a question needs
a cumulative probability, this guide gives it as data, worked out by calculation.

## 4.1 Populations, censuses and samples

A **population** is the whole collection of items you want information about. A **census** observes every member
of it. A **sample** is a subset. A **sampling unit** is one individual member that can be selected. A **sampling
frame** is the list of all sampling units from which the sample is taken.

**Example.** A music college has 1,200 students and wants their views on practice room bookings. The population is
all 1,200 students. The sampling unit is one student. A good sampling frame is the full enrolment list, because it
names every student once. A list of students who use the library is a poor frame: it leaves some students out.

| | Census | Sample survey |
|---|---|---|
| Advantages | Gives the true population value. No sampling error | Cheaper and quicker. Needed when testing destroys the item. Fewer people to contact |
| Disadvantages | Time-consuming and costly. Impractical for large populations. Impossible if testing destroys the item | Results vary from sample to sample. A biased frame or method gives a biased answer |

Always link the point to the context. "Testing the breaking load of a cable destroys it, so a census would leave
nothing to sell" scores better than "a census takes too long".

## 4.2 Statistics and sampling distributions

A **statistic** is a quantity calculated only from the sample values, with no unknown parameter in it. If
X₁, X₂, X₃ is a sample from a population with unknown mean μ, then (X₁ + X₂ + X₃)/3 and the largest of the three are
statistics. The expression X₁ − μ is not, because μ is unknown.

The **sampling distribution** of a statistic is the probability distribution of the values the statistic takes over
all possible samples of a fixed size.

**Worked example.** A population has values 1, 3 and 5, each equally likely. Samples of size 2 are taken with
replacement. Find the sampling distribution of M, the larger of the two values.

```
Pairs (9 equally likely): 11, 13, 15, 31, 33, 35, 51, 53, 55
M = 1 for 11                    1 pair
M = 3 for 13, 31, 33            3 pairs
M = 5 for 15, 35, 51, 53, 55    5 pairs

m          1     3     5
P(M = m)  1/9   3/9   5/9
```

E(M) = (1×1 + 3×3 + 5×5)/9 = (1 + 9 + 25)/9 = 35/9 ≈ 3.89. The population mean is 3, so M is a biased guide to the mean. That is the
point of a sampling distribution: you can see how a statistic behaves before you use it.

## 4.3 The idea of a hypothesis test

A **hypothesis test** decides whether sample data give enough evidence to doubt a stated belief about a parameter.

- The **null hypothesis** H₀ is the belief you test. It gives the parameter one value, for example H₀: p = 0.2.
- The **alternative hypothesis** H₁ says how the parameter differs from that value.
- The **test statistic** is the statistic you calculate from the sample (here the count X).
- The **significance level** is the probability you accept of rejecting H₀ when it is true, for example 5%.

You assume H₀ is true and ask how likely a result as unusual as yours, or more so, would be. If that probability is
no more than the significance level, you reject H₀. If it is larger, you do not reject H₀. Never say you have
"proved" H₀ or H₁. Say there is, or is not, sufficient evidence at that level, and put the conclusion in context.

The specification notes that hypothesis tests are used to refine mathematical models. A model that keeps failing a
test is a model to change.

## 4.4 and 4.5 Critical regions and tails

The **critical region** holds every outcome of the test statistic for which you reject H₀. Its boundary is the
**critical value**. The **actual significance level** is the probability of landing in the critical region when H₀
is true. It is usually a little below the nominal level, because a discrete variable cannot hit the level exactly.

- **One-tailed test:** H₁ is p > p₀ or p < p₀. The whole significance level goes in one tail.
- **Two-tailed test:** H₁ is p ≠ p₀. Split the level equally: 2.5% in each tail for a 5% test.

Choose the tail from the wording. "Has increased" or "is higher" gives a one-tailed test. "Has changed" or
"is different" gives a two-tailed test. Decide before you see the data.

## 4.6 Testing p for a binomial distribution

Let X ~ B(n, p). Under H₀, X ~ B(n, p₀).

**Method**

1. State H₀ and H₁ in terms of p.
2. Give the distribution of the test statistic when H₀ holds.
3. Find the critical region (or the probability of a result as extreme as the observed value, or more so).
4. Compare with the significance level and state whether H₀ is rejected.
5. Write a conclusion in context.

**Worked example 1 (one-tailed, critical region).** A phone game claims that 20% of players reach level 5. After
an update, the developer thinks the proportion has gone up. A random sample of 30 players is taken and X reach
level 5. Test at the 5% level, given that 11 players in the sample reach level 5.

```
H0: p = 0.2     H1: p > 0.2      X ~ B(30, 0.2) under H0
P(X >= 10) = 0.0611   > 0.05   (10 is not in the critical region)
P(X >= 11) = 0.0256   < 0.05   (11 is in)
Critical region: X >= 11.  Actual significance level 0.0256 (2.56%).
Observed 11 is in the critical region: reject H0.
```

At the 5% level the sample gives enough evidence that the proportion of players reaching level 5 has increased.
Had the observed value been 10, you would not reject H₀. The boundary matters.

**Worked example 2 (two-tailed).** A county says 35% of households recycle glass. A council tests H₀: p = 0.35
against H₁: p ≠ 0.35 at the 10% level, using 24 households. X ~ B(24, 0.35).

```
Each tail: 5% = 0.05
Lower tail: P(X <= 4) = 0.0422 (<0.05),  P(X <= 5) = 0.1044 (>0.05)
  so lower region X <= 4
Upper tail: P(X >= 12) = 0.0942 (>0.05),  P(X >= 13) = 0.0423 (<0.05)
  so upper region X >= 13
Critical region: X <= 4 or X >= 13
Actual significance level = 0.0422 + 0.0423 = 0.0845 (8.45%)
```

For each tail choose the region with probability as large as possible without exceeding the tail's share. The
actual level is the sum of the two tails, not the nominal 10%.

**Using a p-value instead.** Find the probability of a result as extreme as, or more extreme than, the one seen,
and compare it with the level. For the two-tailed case compare the one-tail probability with half the level. In
example 2, if 15 households recycle, P(X ≥ 15) = 0.0055, which is below 0.05, so reject H₀. Both methods give the same decision.

## Normal approximation for a binomial test

When n is large the tables or the calculation become long. The specification says tests for p may use a normal
approximation. If X ~ B(n, p₀) with n large, use X ≈ N(np₀, np₀(1 − p₀)) with a **continuity correction**, because
you are approximating a discrete variable by a continuous one.

**Worked example 3.** Past records say 40% of parcels arrive within one day. A courier changes its routes and
claims the proportion is higher. Of 180 parcels, 85 arrive within one day. Test at the 5% level.

```
H0: p = 0.4    H1: p > 0.4
X ~ B(180, 0.4) approx N(72, 43.2), standard deviation 6.573
P(X >= 85) = P(X > 84.5) approx P(Z > (84.5 - 72)/6.573) = P(Z > 1.902) = 0.0286
0.0286 < 0.05: reject H0
```

For the critical region, P(X ≥ 84) ≈ 0.0401 (≤ 0.05) and P(X ≥ 83) ≈ 0.0551 (> 0.05), so the region is X ≥ 84. The exact
binomial probability of X ≥ 85 is 0.0293, close to the approximation. At the 5% level the sample gives enough evidence
that the proportion arriving within one day has increased.

Do not drop the correction. "At least 85" means starting from 84.5.

## 4.6 Testing the mean of a Poisson distribution

Let X ~ Po(λ) count events in a fixed interval. Under H₀, λ = λ₀. If the test counts over a longer or shorter
interval, **scale the mean first**. The number of events in t units has mean tλ₀.

**Worked example 4.** A help desk logs an average of 4.5 urgent tickets per hour. After new software is installed,
the manager believes the rate has fallen. Over a 2-hour period, 4 urgent tickets are logged. Test at the 5% level.

```
Let lambda = mean urgent tickets per hour.
H0: lambda = 4.5     H1: lambda < 4.5
Over 2 hours, X ~ Po(9) under H0
P(X <= 4) = 0.0550 > 0.05
P(X <= 3) = 0.0212 < 0.05
Critical region: X <= 3.  Observed 4 is not in it.
```

Do not reject H₀. At the 5% level the sample does not give enough evidence that the hourly rate of urgent tickets has fallen.
Note how close it is: 0.0550 against 0.05. A value just outside the region is a "no", not a "maybe".

## Common errors

- Writing hypotheses about the sample count (H₀: X = 6) instead of the parameter (H₀: p = 0.2).
- Using a two-tailed test because the question says "different", then writing a one-tailed alternative, or the other way round.
- Picking the wrong boundary value. In example 1, P(X ≥ 10) is 0.0611, above 0.05, so the region starts at 11, not 10.
- For a two-tailed test, comparing a one-tail probability with the whole level instead of half.
- Forgetting to rescale the Poisson mean when the interval changes.
- Leaving out the continuity correction, or shifting by 0.5 the wrong way.
- Concluding "the claim is true" or "H₀ is true". A test never proves either.
- Giving the conclusion in symbols only, with no reference to the context.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure
Mathematics, Specification, Issue 3, April 2019, Unit S2: Statistics 2, section 4 (Hypothesis tests), topics 4.1 to 4.6.
Published by Pearson Education Limited.
