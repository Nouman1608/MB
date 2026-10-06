---
title: "AQA A-Level Mathematics: O: Statistical hypothesis testing (7357)"
seoTitle: "AQA A-Level Maths 7357 Hypothesis Testing Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "O: Statistical hypothesis testing"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 16
syllabusTopics:
  - qualification: "a-level"
    topic: "o-statistical-hypothesis-testing-aqa-alevel-maths"
description: "Study guide to AQA A-Level Maths Section O: hypothesis test language, binomial tests, Normal mean tests and correlation tests, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This guide teaches **Section O: Statistical hypothesis testing** (content references O1 to O3) of the
**AQA A-level Mathematics (7357) specification**, version 1.3, for A-level exams from June 2018
onwards. Section O is listed under Paper 3 in the specification, with the rest of the statistics
content (Sections K to O). A calculator is required in every 7357 paper, and for Sections K to O the
specification says you must be able to use calculator technology to access probabilities from
standard statistical distributions.

Use it with the [hypothesis testing revision notes](/resources/aqa-a-level-mathematics-statistical-hypothesis-testing-revision-notes/)
and the [hypothesis testing practice questions](/resources/aqa-a-level-mathematics-statistical-hypothesis-testing-practice/).
The [7357 course hub](/boards/aqa/a-level/mathematics/) lists every topic, the
[printable checklist](/checklists/aqa/a-level/mathematics/) lets you tick off outcomes, and the
free [10-minute diagnostics](/diagnostics/) show where to start. Testing builds on sampling, so read
the [statistical sampling guide](/resources/aqa-a-level-mathematics-statistical-sampling/) first if
"population" and "sample" are not secure. Scatter diagrams and describing correlation informally are
in the [data presentation and interpretation guide](/resources/aqa-a-level-mathematics-data-presentation-and-interpretation/).

## What Section O covers

| Ref | What you must be able to do |
|---|---|
| O1 | Understand and apply the language of hypothesis testing, developed through a binomial model: null hypothesis, alternative hypothesis, significance level, test statistic, 1-tail test, 2-tail test, critical value, critical region, acceptance region, p-value. Extend to correlation coefficients as measures of how close data points lie to a straight line, and interpret a given correlation coefficient using a given p-value or critical value (calculating correlation coefficients is excluded). |
| O2 | Conduct a hypothesis test for the proportion in the binomial distribution and interpret the result in context. Understand that a sample is used to make an inference about the population, and that the significance level is the probability of incorrectly rejecting the null hypothesis. |
| O3 | Conduct a hypothesis test for the mean of a Normal distribution with known, given or assumed variance and interpret the result in context. |

The specification's notation is H₀ for the null hypothesis, H₁ for the alternative hypothesis,
B(n, p) for the binomial distribution, N(μ, σ²) for the Normal distribution, r for the sample
product moment correlation coefficient and ρ for the population one.

## O1: The language of hypothesis testing

A hypothesis test uses a **sample** to decide whether there is enough evidence to change a belief
about a **population parameter**, such as a proportion p, a mean μ or a correlation coefficient ρ.

- **Null hypothesis, H₀**: the belief you start from. It always states one value of the parameter,
  for example H₀: p = 0.2.
- **Alternative hypothesis, H₁**: what you accept if the evidence is strong enough. It is written
  with <, > or ≠, for example H₁: p > 0.2.
- **Test statistic**: the quantity calculated from the sample that you use to decide, for example
  X, the number of successes in the sample, or X̄, the sample mean.
- **1-tail test**: H₁ looks in one direction only (p > 0.2 or p < 0.2).
- **2-tail test**: H₁ is p ≠ 0.2. The significance level is split equally between the two tails.
- **Significance level**: the threshold probability for rejecting H₀, such as 5% or 1%. It is the
  probability of incorrectly rejecting H₀ when H₀ is true.
- **Critical region**: the set of values of the test statistic that lead you to reject H₀.
- **Critical value**: the first value inside the critical region (its boundary).
- **Acceptance region**: all values not in the critical region. If the test statistic lands here,
  you do not reject H₀.
- **p-value**: the probability, assuming H₀ is true, of a result at least as extreme as the one
  observed. If the p-value is less than the significance level, reject H₀.

Two points about wording. First, you never "prove" H₀ or H₁; the sample gives evidence. Write
"there is sufficient evidence to suggest..." or "there is insufficient evidence to suggest...".
Second, the hypotheses are about the **population** parameter, never the sample value.

## O2: Testing a binomial proportion

### Method

1. Define the parameter: "let p be the proportion of ... in the population".
2. Write H₀ and H₁ in terms of p.
3. Define the test statistic and its distribution under H₀: X ~ B(n, p₀).
4. Either find the p-value and compare it with the significance level, or find the critical region
   and see whether the observed value lies in it.
5. Conclude in context, with non-definite language.

### Worked example 1: one-tail test using a p-value

Historically, 20% of a shop's customers buy an extended warranty. After a new display is installed,
9 of a random sample of 25 customers buy one. Test at the 5% significance level whether the
proportion has increased.

```
Let p = proportion of all customers who buy a warranty.
H₀: p = 0.2     H₁: p > 0.2
Under H₀, X ~ B(25, 0.2), where X = number in the sample who buy.
p-value = P(X ≥ 9) = 1 − P(X ≤ 8) = 0.0468 (3 s.f.)
0.0468 < 0.05, so reject H₀.
```

There is sufficient evidence at the 5% level to suggest that the proportion of customers buying an
extended warranty has increased.

For H₁: p > 0.2 you find P(X ≥ 9), not P(X = 9).

### Worked example 2: two-tail critical region

A spinner should land on red with probability 0.25. It is spun 40 times to test whether this is
true, at the 10% significance level. Find the critical region and the actual significance level.

For a 2-tail test at 10%, each tail gets 5%. Find the largest lower value and the smallest upper
value whose tail probabilities do not exceed 0.05. Under H₀, X ~ B(40, 0.25).

```
Lower tail: P(X ≤ 5) = 0.0433   P(X ≤ 6) = 0.0962  → X ≤ 5
Upper tail: P(X ≥ 16) = 0.0262  P(X ≥ 15) = 0.0544 → X ≥ 16
Critical region: X ≤ 5 or X ≥ 16
Actual significance level = 0.0433 + 0.0262 = 0.0695 (3 s.f.), about 6.95%
```

Showing the probability either side of each boundary (0.0433 and 0.0962; 0.0262 and 0.0544) is what
proves your boundary is correct.

### Significance level and wrong decisions

Because X is discrete, the critical region rarely has a probability of exactly 10%. The **actual
significance level** is P(X in critical region | H₀ true), here 0.0695. This is the probability of
incorrectly rejecting H₀. With a discrete test statistic it is usually below the stated level.

A different random sample of 40 spins could give a different count, so a conclusion is an inference
about the population, with a known chance of being wrong.

## O3: Testing the mean of a Normal distribution

If X ~ N(μ, σ²) and you take a random sample of size n, the sample mean has the distribution

```
X̄ ~ N(μ, σ²/n)
```

so the standard deviation of X̄ is σ/√n. The variance σ² is known, given in the question, or assumed
to be unchanged from a previous value. You can test using the standardised value

```
z = (x̄ − μ₀) / (σ/√n)
```

and compare it with a critical z value, or find the p-value directly from the N(μ₀, σ²/n)
distribution on your calculator.

### Worked example 3: 2-tail test

A machine fills bags of flour. The masses are Normally distributed with mean 500 g and standard
deviation 4 g. After a repair, a random sample of 16 bags has mean 497.8 g. Assuming the standard
deviation is unchanged, test at the 5% level whether the mean mass has changed.

```
Let μ = mean mass of all bags filled after the repair.
H₀: μ = 500     H₁: μ ≠ 500
Under H₀, X̄ ~ N(500, 4²/16) = N(500, 1²)
z = (497.8 − 500)/1 = −2.2
2-tail at 5%: critical values z = ±1.960
−2.2 < −1.960, so reject H₀.
(Equivalently, P(X̄ ≤ 497.8) = 0.0139 < 0.025.)
```

There is sufficient evidence at the 5% level to suggest that the mean mass has changed. When you
use a p-value in a 2-tail test, compare the one-tail probability with half the significance level,
as in the bracketed line.

### Worked example 4: critical region for the sample mean

Reaction times in a population are N(72, 9²) in milliseconds. A coach claims a training programme
increases mean reaction time. A random sample of 36 trained people is taken. Find the critical
region for X̄ at the 1% level, then test a sample mean of 75.2.

```
H₀: μ = 72     H₁: μ > 72
Under H₀, X̄ ~ N(72, 9²/36), so σ/√n = 1.5
Upper 1% point: z = 2.326
Critical value = 72 + 2.326 × 1.5 = 75.49 (2 d.p.)
Critical region: X̄ > 75.49
75.2 is not in the critical region, so do not reject H₀.
```

There is insufficient evidence at the 1% level to suggest the mean reaction time has increased. For
a continuous test statistic, the probability of incorrectly rejecting H₀ is exactly the significance
level, 1%.

## O1 extended: testing a correlation coefficient

The product moment correlation coefficient measures how close data points lie to a straight line.
It takes values from −1 to 1. Values near ±1 mean points lie close to a line; values near 0 mean
there is little linear relationship. You are not asked to calculate r in this section: it is given,
together with either a critical value or a p-value.

Hypotheses are about the population coefficient ρ:

- H₀: ρ = 0 (no linear correlation in the population)
- H₁: ρ > 0, ρ < 0 (1-tail) or ρ ≠ 0 (2-tail)

### Worked example 5: using a critical value

For a random sample of 20 students, the correlation between hours of revision and test score is
r = 0.412. Test at the 5% level whether there is positive correlation in the population. The critical
value for a 1-tail test at 5% with a sample of 20 is given as 0.3783.

```
H₀: ρ = 0     H₁: ρ > 0
r = 0.412 > 0.3783, so reject H₀.
```

There is sufficient evidence at the 5% level to suggest positive correlation between revision time
and test score for students in the population. For H₁: ρ < 0, compare a negative r with the negative
critical value: reject H₀ if r < −0.3783.

### Worked example 6: using a p-value

For 30 towns, r = 0.31 between population density and bus use, and software gives a 2-tail p-value
of 0.095 for H₁: ρ ≠ 0. At 5%: 0.095 > 0.05, so do not reject H₀; there is insufficient evidence of
correlation. At 10%: 0.095 < 0.10, so you would reject H₀. The same data can lead to different
conclusions at different significance levels, which is why the level is chosen before the test.

## Using your calculator

The specification requires a calculator in every paper, with the ability to access probabilities
from standard statistical distributions and an inverse Normal function.

- Binomial cumulative: P(X ≤ k) directly. For P(X ≥ k), use 1 − P(X ≤ k − 1).
- Critical regions: tabulate cumulative probabilities near the boundary and write the two values
  either side down.
- Normal: enter the mean μ₀ and the standard deviation σ/√n (not σ) to get P(X̄ ≤ x̄).
- Inverse Normal: gives critical z values (1.645, 1.960, 2.326, 2.576) or critical sample means.

Always write down the distribution and the probability you found.

## Common errors

- Writing hypotheses with the sample value: "H₀: p = 9/25" is wrong.
- Using P(X = k) instead of P(X ≥ k) or P(X ≤ k) as the p-value.
- Using P(X ≥ k) = 1 − P(X ≤ k), which drops the value k itself.
- In a 2-tail test, comparing each tail with the full significance level.
- Using σ instead of σ/√n for the sample mean.
- Stating a definite conclusion ("the mean has changed") or missing the context.
- Testing r against ρ = r, or claiming the test proves causation.

## Next steps

Go through the [revision notes](/resources/aqa-a-level-mathematics-statistical-hypothesis-testing-revision-notes/)
for a condensed version and a quick self-test, then try the
[practice questions](/resources/aqa-a-level-mathematics-statistical-hypothesis-testing-practice/).
The [exam preparation guide](/resources/aqa-a-level-mathematics-exam-preparation/) covers the three
papers.

## Official syllabus

AQA A-level Mathematics (7357) specification, version 1.3, 31 January 2018, for A-level exams June
2018 onwards, Section 3.16 O: Statistical hypothesis testing. Published by AQA.
