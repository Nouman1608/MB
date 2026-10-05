---
resourceId: "mb-ap-stats-3.9-study-guide"
title: "Sampling Distributions for the Difference Between Sample Proportions: Study Guide (Statistics 3.9)"
description: "Find the mean and standard deviation of the sampling distribution of p̂1 − p̂2, check the randomization, 10% and large-counts conditions, and calculate and interpret normal probabilities."
course: "statistics"
unit: 3
topics: ["3.9"]
resourceType: "study-guide"
prerequisites:
  - "The sampling distribution of one sample proportion: mean p and standard deviation √[p(1 − p)/n] (Topic 3.2)"
  - "Normal distributions, z-scores and normal probabilities (Topic 2.11)"
  - "Random sampling and random assignment of treatments (Topics 1.11 and 1.13)"
prerequisiteResources: ["mb-ap-stats-3.8-study-guide"]
learningObjectives:
  - "Calculate the mean and standard deviation of the sampling distribution of the difference between two sample proportions"
  - "Check the randomization and 10% conditions for two independent samples, and the randomization condition for an experiment"
  - "Use the four expected counts to decide whether the sampling distribution of p̂1 − p̂2 is approximately normal"
  - "Calculate probabilities about p̂1 − p̂2 with a normal model"
  - "Interpret the mean, the standard deviation and a probability for p̂1 − p̂2 in the context of the two populations"
skills: ["3", "4"]
studyMinutes: 45
difficulty: "core"
calculator: "graphing"
calculatorNote: "Use normalcdf (or a z-table) for normal probabilities. Keep at least 4 decimal places for the standard deviation and z-scores; round probabilities to 4 decimal places."
related: ["mb-ap-stats-3.9-revision-notes", "mb-ap-stats-3.9-practice", "mb-ap-stats-3.9-checklist"]
next: "mb-ap-stats-3.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "The sampling distribution of p̂1 − p̂2 has mean p1 − p2, so the difference in sample proportions is an unbiased estimator of the difference in population proportions."
  - "Its standard deviation is √[p1(1 − p1)/n1 + p2(1 − p2)/n2]: the two variances add, even though the proportions are subtracted."
  - "Randomization: two independent random samples, or random assignment of treatments in an experiment. 10%: each sample is at most 10% of its population (not needed for an experiment)."
  - "The shape is approximately normal when all four expected counts n1p1, n1(1 − p1), n2p2 and n2(1 − p2) are at least 10."
  - "Interpret every value for the two named populations, for example: 'the difference (Brackenford − Thornley) in sample proportions'."
faqs:
  - question: "Why do the variances add when the proportions are subtracted?"
    answer: "Each sample proportion varies on its own. When you subtract one from the other, the random variation from both samples ends up in the difference, so the difference is more variable than either proportion. Variability cannot cancel out. As background: for independent random variables, the variance of a difference is the sum of the variances."
  - question: "Does it matter which proportion I subtract from which?"
    answer: "The order is your choice, but you must state it and keep it. Swapping the order changes the sign of the mean and of every value of the difference, but the standard deviation stays the same."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## Why compare two proportions?

Many statistical questions compare two groups. Do more adults in one town recycle food waste than in another? Does a text reminder get more patients to their appointments than an email? Each question is about a **difference between two population proportions**, p1 − p2.

You cannot usually measure everyone, so you take a sample from each group and calculate two sample proportions, p̂1 and p̂2. Their difference, **p̂1 − p̂2**, is your estimate of p1 − p2. Just like one sample proportion (Topic 3.2), this difference changes from sample to sample. The distribution of p̂1 − p̂2 over all possible pairs of samples is its **sampling distribution**. This topic gives you its centre, its spread and the conditions under which its shape is approximately normal.

Keep the notation straight:

| Symbol | Meaning | Type |
|---|---|---|
| p1, p2 | proportion of successes in population 1 and population 2 | parameters |
| N1, N2 | sizes of population 1 and population 2 | population sizes |
| n1, n2 | sizes of sample 1 and sample 2 | sample sizes |
| p̂1, p̂2 | proportion of successes in sample 1 and sample 2 | statistics |
| p̂1 − p̂2 | difference in sample proportions | statistic (estimates p1 − p2) |

Choose an order of subtraction at the start, say what it is, and keep it. "Brackenford − Thornley" is clear; "the difference" on its own is not.

## Mean and standard deviation of p̂1 − p̂2

Suppose the two samples are **independent** of each other and the observations within each sample are independent. Then the sampling distribution of p̂1 − p̂2 has:

- **Mean:** μ(p̂1 − p̂2) = **p1 − p2**
- **Standard deviation:** σ(p̂1 − p̂2) = **√[ p1(1 − p1)/n1 + p2(1 − p2)/n2 ]**

Why these make sense:

1. **The mean.** From Topic 3.2, the mean of p̂1 is p1 and the mean of p̂2 is p2. On average, the difference is the difference of the averages: p1 − p2. So p̂1 − p̂2 is an **unbiased estimator** of p1 − p2.
2. **The standard deviation.** The quantity under the square root is the variance of p̂1, p1(1 − p1)/n1, **plus** the variance of p̂2, p2(1 − p2)/n2. The variances **add**, even though the proportions are subtracted. Each sample brings its own random error, and those errors do not cancel. (Background: for two independent random variables X and Y, the variance of X − Y is the variance of X plus the variance of Y.)

Two warnings follow from the formula:

- Do **not** add or subtract the two standard deviations. Add the two **variances**, then take one square root.
- The standard deviation of the difference is always **larger** than the standard deviation of either sample proportion alone.

Larger samples still give less variability. If you multiply **both** sample sizes by 4, both variances are divided by 4, so the standard deviation is halved.

## The conditions and what each one is for

The course groups the checks into three conditions. Verify each one **in context, with numbers**.

| Condition | What to check | What it guarantees |
|---|---|---|
| Randomization | Two **independent random samples**, one from each population; or, in an experiment, treatments **randomly assigned** to the experimental units. | The samples are independent of each other and p̂1 − p̂2 is unbiased. |
| 10% | When sampling without replacement: n1 ≤ 10% of N1 **and** n2 ≤ 10% of N2. | Observations within each sample are close enough to independent for the standard deviation formula to be accurate. |
| Large counts | All four expected counts are at least 10: n1p1, n1(1 − p1), n2p2 and n2(1 − p2). | The sampling distribution of p̂1 − p̂2 is approximately normal. |

Points that cost marks:

- **Experiments.** If the data come from an experiment, the independence requirement is met by **random assignment** of the treatments. The 10% condition is not needed, because no one is sampled from a larger population. You still need large counts if you want a normal model.
- **Four counts, not two.** Check expected successes **and** failures in **both** samples.
- **Expected counts use p.** In this topic the population proportions are given (or assumed), so the counts use p1 and p2. In Topic 3.10, where they are unknown, you will use the observed counts instead.
- **"Independent" means two things.** The two samples must not be linked (for example, the same people measured twice), and the observations within each sample must be independent (random selection plus the 10% condition).

## Picturing the sampling distribution

<figure>
<svg viewBox="0 0 640 310" role="img" aria-labelledby="diff-title diff-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="diff-title">Approximately normal sampling distribution of the difference in sample proportions, Brackenford minus Thornley</title>
<desc id="diff-desc">A bell-shaped curve over a horizontal axis labelled difference in sample proportions, Brackenford minus Thornley, from about −0.06 to 0.32. The curve peaks at the mean, 0.13. A label above the peak reads mean 0.13, standard deviation 0.0548. A dashed vertical line at 0.20 marks the start of a region to its right that is hatched with diagonal lines and labelled P of the difference at least 0.20 is about 0.10. A dotted vertical line at 0 is labelled "no difference"; very little of the curve lies to its left.</desc>
<defs>
<pattern id="diff-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
<line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="2"/>
</pattern>
</defs>
<rect x="0" y="0" width="640" height="310" fill="#ffffff"/>
<path d="M423.2,240 L423.2,164.9 L430.5,173.4 L437.9,181.5 L445.3,189.0 L452.6,195.9 L460.0,202.2 L467.4,207.9 L474.7,213.0 L482.1,217.4 L489.5,221.3 L496.8,224.6 L504.2,227.4 L511.6,229.8 L518.9,231.9 L526.3,233.5 L533.7,234.9 L541.1,236.0 L548.4,236.9 L555.8,237.6 L563.2,238.2 L570.5,238.6 L577.9,239.0 L585.3,239.2 L592.6,239.4 L600.0,239.6 L600.0,240 Z" fill="url(#diff-hatch)" stroke="none"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="40.0,239.6 47.0,239.4 54.0,239.3 61.0,239.0 68.0,238.7 75.0,238.3 82.0,237.8 89.0,237.2 96.0,236.4 103.0,235.4 110.0,234.2 117.0,232.8 124.0,231.1 131.0,229.0 138.0,226.6 145.0,223.8 152.0,220.5 159.0,216.8 166.0,212.5 173.0,207.6 180.0,202.2 187.0,196.3 194.0,189.7 201.0,182.7 208.0,175.1 215.0,167.1 222.0,158.7 229.0,150.0 236.0,141.1 243.0,132.2 250.0,123.3 257.0,114.7 264.0,106.4 271.0,98.6 278.0,91.5 285.0,85.3 292.0,79.9 299.0,75.7 306.0,72.5 313.0,70.6 320.0,70.0 327.0,70.6 334.0,72.5 341.0,75.7 348.0,79.9 355.0,85.3 362.0,91.5 369.0,98.6 376.0,106.4 383.0,114.7 390.0,123.3 397.0,132.2 404.0,141.1 411.0,150.0 418.0,158.7 425.0,167.1 432.0,175.1 439.0,182.7 446.0,189.7 453.0,196.3 460.0,202.2 467.0,207.6 474.0,212.5 481.0,216.8 488.0,220.5 495.0,223.8 502.0,226.6 509.0,229.0 516.0,231.1 523.0,232.8 530.0,234.2 537.0,235.4 544.0,236.4 551.0,237.2 558.0,237.8 565.0,238.3 572.0,238.7 579.0,239.0 586.0,239.3 593.0,239.4 600.0,239.6"/>
<line x1="30" y1="240" x2="610" y2="240" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="54.7" y1="240" x2="54.7" y2="247"/><line x1="128.4" y1="240" x2="128.4" y2="247"/><line x1="202.1" y1="240" x2="202.1" y2="247"/><line x1="275.8" y1="240" x2="275.8" y2="247"/><line x1="349.5" y1="240" x2="349.5" y2="247"/><line x1="423.2" y1="240" x2="423.2" y2="247"/><line x1="496.8" y1="240" x2="496.8" y2="247"/><line x1="570.5" y1="240" x2="570.5" y2="247"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="54.7" y="263">−0.05</text><text x="128.4" y="263">0</text><text x="202.1" y="263">0.05</text><text x="275.8" y="263">0.10</text><text x="349.5" y="263">0.15</text><text x="423.2" y="263">0.20</text><text x="496.8" y="263">0.25</text><text x="570.5" y="263">0.30</text>
</g>
<text x="320" y="296" text-anchor="middle" font-size="14" fill="#1d2b44">Difference in sample proportions, p̂B − p̂T (Brackenford − Thornley)</text>
<line x1="128.4" y1="150" x2="128.4" y2="240" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 4"/>
<text x="128.4" y="143" text-anchor="middle" font-size="13" fill="#1d2b44">no difference</text>
<line x1="320" y1="70" x2="320" y2="240" stroke="#1d2b44" stroke-width="1" stroke-dasharray="1 3"/>
<line x1="423.2" y1="120" x2="423.2" y2="240" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/>
<text x="429" y="116" text-anchor="start" font-size="13" fill="#1d2b44">0.20</text>
<text x="470" y="170" text-anchor="start" font-size="13" fill="#1d2b44">hatched area:</text>
<text x="470" y="186" text-anchor="start" font-size="13" fill="#1d2b44">P(p̂B − p̂T ≥ 0.20) ≈ 0.10</text>
<text x="320" y="56" text-anchor="middle" font-size="13" fill="#1d2b44">mean 0.13, standard deviation ≈ 0.0548</text>
</svg>
<figcaption>Figure 1. Sampling distribution of p̂B − p̂T for independent random samples of 150 Brackenford adults and 180 Thornley adults, when pB = 0.58 and pT = 0.45 (Worked examples 1 and 2). The curve is centred at the true difference, 0.13. The hatched tail is the probability that the sample difference is 0.20 or more.</figcaption>
</figure>

## Worked example 1: mean, standard deviation and conditions

**Question.** Two fictional towns run food-waste collections. In Brackenford (36,000 adults), 58% of adults use the collection every week. In Thornley (25,000 adults), 45% do. A researcher will take independent simple random samples of 150 Brackenford adults and 180 Thornley adults. Let p̂B and p̂T be the sample proportions who use the collection every week.

(a) Find the mean and standard deviation of the sampling distribution of p̂B − p̂T. (b) Check the conditions. (c) Interpret the mean and the standard deviation in context.

**(a)**

1. Mean: pB − pT = 0.58 − 0.45 = **0.13**.
2. Variance of p̂B: 0.58 × 0.42 ÷ 150 = 0.001624.
3. Variance of p̂T: 0.45 × 0.55 ÷ 180 = 0.001375.
4. Add the variances: 0.001624 + 0.001375 = 0.002999.
5. Standard deviation: √0.002999 ≈ **0.0548**.

**(b)**

1. **Randomization:** the two samples are independent simple random samples, one from each town. ✓
2. **10%:** 150 ≤ 10% of 36,000 = 3,600 and 180 ≤ 10% of 25,000 = 2,500. ✓ So the standard deviation formula is accurate.
3. **Large counts:** 150 × 0.58 = 87, 150 × 0.42 = 63, 180 × 0.45 = 81 and 180 × 0.55 = 99. All four are at least 10. ✓ So the sampling distribution of p̂B − p̂T is approximately normal.

**(c)**

- **Mean:** if the researcher took many pairs of random samples (150 from Brackenford, 180 from Thornley), the differences in sample proportions (Brackenford − Thornley) who use the collection weekly would average 0.13, the true difference between the towns.
- **Standard deviation:** in such pairs of samples, the difference in sample proportions (Brackenford − Thornley) typically varies from the true difference of 0.13 by about 0.0548, or about 5.5 percentage points.

**Check.** The two separate standard deviations are about 0.0403 and 0.0371. Our answer, 0.0548, is larger than each but smaller than their sum (0.0774), as it must be when variances add.

## Worked example 2: probabilities with the normal model

**Question.** Use the sampling distribution from Worked example 1. (a) Find the probability that the sample proportion in Brackenford is at least 0.20 greater than the sample proportion in Thornley. (b) Find the probability that the Thornley sample proportion is greater than the Brackenford one. (c) The researcher's samples contain 96 weekly users out of 150 in Brackenford and 72 out of 180 in Thornley. Is this difference surprising if the stated town proportions are correct?

**(a)** The large-counts condition is met, so use a normal model with mean 0.13 and standard deviation 0.05476.

1. z = (0.20 − 0.13) ÷ 0.05476 ≈ 1.2783.
2. P(p̂B − p̂T ≥ 0.20) = P(z ≥ 1.2783) ≈ **0.1006**.

Interpretation: if the stated proportions are true, about 10% of pairs of random samples of these sizes would show a Brackenford proportion at least 20 percentage points above the Thornley proportion.

**(b)** "Thornley greater" means p̂B − p̂T < 0.

1. z = (0 − 0.13) ÷ 0.05476 ≈ −2.3740.
2. P(p̂B − p̂T < 0) ≈ **0.0088**.

So in fewer than 1 in 100 pairs of samples would the order of the towns be reversed. This is the small area to the left of the "no difference" line in Figure 1.

**(c)** p̂B = 96 ÷ 150 = 0.64 and p̂T = 72 ÷ 180 = 0.40, so p̂B − p̂T = 0.24.

1. z = (0.24 − 0.13) ÷ 0.05476 ≈ 2.0088.
2. P(p̂B − p̂T ≥ 0.24) ≈ **0.0223**.

If the true difference were 0.13, a sample difference of 0.24 or more would happen in only about 2% of pairs of samples. That is fairly unusual, so the samples **give some reason to doubt** that the true difference is as small as 0.13. They do not prove it: unusual samples do happen. Formal tests for a difference come in Topics 3.12 and 3.13.

**Check.** normalcdf(0.20, 1, 0.13, 0.05476) ≈ 0.1006 and normalcdf(−1, 0, 0.13, 0.05476) ≈ 0.0088.

## Worked example 3: an experiment

**Question.** A fictional health clinic runs an experiment with 240 patients who have booked an appointment. It randomly assigns 120 to receive a **text** reminder and 120 to receive an **email** reminder. Suppose that, for patients like these, 85% attend after a text reminder and 75% attend after an email reminder. Let p̂T and p̂E be the proportions of each group who attend.

(a) Check the conditions for a normal model for p̂T − p̂E. (b) Find the mean and standard deviation. (c) Find the probability that the email group's attendance rate is at least as high as the text group's. (d) What would this probability become with 240 patients in each group?

**(a)**

1. **Randomization:** the treatments (text or email) were randomly assigned to the patients. ✓ The 10% condition is not needed, because this is an experiment, not a sample from a population.
2. **Large counts:** 120 × 0.85 = 102, 120 × 0.15 = 18, 120 × 0.75 = 90 and 120 × 0.25 = 30. All at least 10. ✓

**(b)** Mean = 0.85 − 0.75 = **0.10**. Standard deviation = √(0.85 × 0.15 ÷ 120 + 0.75 × 0.25 ÷ 120) ≈ **0.0512**.

**(c)** "Email at least as high" means p̂T − p̂E ≤ 0. z = (0 − 0.10) ÷ 0.0512 ≈ −1.9518, so the probability is about **0.0255**. Even if text reminders really work better by 10 percentage points, about 2.5% of experiments like this would show email doing as well or better.

**(d)** With 240 per group, both variances halve, so the standard deviation is divided by √2: it becomes about **0.0362**. Then z ≈ −2.7603 and the probability falls to about **0.0029**. Larger groups make a misleading result much less likely.

## When the large-counts condition fails

Suppose a fictional factory has two production lines. Line A makes 10% faulty parts and Line B makes 4%, and you take random samples of 150 parts from each line. For Line B, n2p2 = 150 × 0.04 = 6, which is less than 10. The sampling distribution of p̂2 is skewed to the right, so the distribution of p̂1 − p̂2 is not reliably normal. The mean and standard deviation formulas still hold (they need only independence), but **do not use a normal model** for probabilities. A larger sample from Line B fixes this: n2 = 250 gives n2p2 = 10.

## Common misconceptions

- **"Subtract the standard deviations" or "subtract the variances".** Add the variances: √[p1(1 − p1)/n1 + p2(1 − p2)/n2]. Subtracting can even give zero spread when the two groups match, which is impossible.
- **Using n1 + n2 as one sample size.** Each variance uses its own sample size.
- **Checking only two counts.** You need four: successes and failures in each sample.
- **Checking the 10% condition for an experiment.** Random assignment replaces it.
- **"Independent samples" when the same people are in both groups.** Measuring one group twice gives paired data, and this formula does not apply.
- **Not stating the order of subtraction.** A mean of −0.13 and a mean of 0.13 describe the same situation in different orders. Say which group comes first.
- **Interpreting without both populations.** "The difference varies by about 0.055" is incomplete. Name both towns, the variable and the sample sizes.
- **"A small probability proves the stated proportions are wrong."** It gives reason to doubt them; it is not proof.

## Where this leads

In Topic 3.10 the population proportions are unknown. You will use p̂1 and p̂2 in the same standard deviation formula to build a confidence interval for p1 − p2: see [Constructing a Confidence Interval for a Difference in Two Proportions](/advanced-course-resources/statistics/3-10-constructing-confidence-interval-difference-between-study-guide/). First try the [practice questions](/advanced-course-resources/statistics/3-9-sampling-distributions-difference-between-sample-practice/), then use the [revision notes](/advanced-course-resources/statistics/3-9-sampling-distributions-difference-between-sample-revision-notes/) and the [checklist](/advanced-course-resources/statistics/3-9-sampling-distributions-difference-between-sample-checklist/). If one sample proportion still feels shaky, revisit [Topic 3.2](/advanced-course-resources/statistics/3-2-sampling-distributions-sample-proportions-study-guide/). For the errors that tests can make, look back at [Topic 3.8](/advanced-course-resources/statistics/3-8-potential-errors-when-performing-tests-study-guide/).
