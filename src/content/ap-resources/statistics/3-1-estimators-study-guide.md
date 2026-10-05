---
resourceId: "mb-ap-stats-3.1-study-guide"
title: "Estimators: Study Guide (Statistics 3.1)"
description: "Learn the difference between an estimator and an estimate, calculate point estimates from sample data, and justify whether an estimator is unbiased using its sampling distribution."
course: "statistics"
unit: 3
topics: ["3.1"]
resourceType: "study-guide"
prerequisites:
  - "Parameters and statistics (Topic 1.2), and the idea of bias in a sampling method (Topic 1.12)"
  - "Mean, median and sample standard deviation (Topic 1.7)"
  - "What a sampling distribution is, and how simulation approximates one (Topic 2.12)"
prerequisiteResources: ["mb-ap-stats-2.12-study-guide"]
learningObjectives:
  - "Tell apart a parameter, an estimator (a rule) and an estimate (the number one sample gives)"
  - "Calculate point estimates such as a sample proportion, sample mean or sample standard deviation and say which parameter each estimates, in context"
  - "Decide whether an estimator is unbiased by comparing the centre of its sampling distribution with the parameter"
  - "Justify a claim of bias or unbiasedness from a list of all possible samples or from simulation results"
  - "Explain why an unbiased estimator still gives estimates that differ from the parameter"
skills: ["3", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "graphing"
calculatorNote: "Use one-variable statistics for point estimates; report Sx (n − 1) for the sample standard deviation. Keep at least 4 decimal places in working."
related: ["mb-ap-stats-3.1-revision-notes", "mb-ap-stats-3.1-practice", "mb-ap-stats-3.1-checklist"]
next: "mb-ap-stats-3.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "A parameter describes the population and is fixed. A statistic is calculated from a sample and changes from sample to sample."
  - "An estimator is the rule (for example p̂ = x / n); an estimate, or point estimate, is the number that rule gives for one sample."
  - "An estimator is unbiased if the mean of its sampling distribution equals the parameter: on average it neither overestimates nor underestimates."
  - "The sample proportion p̂ and the sample mean x̄ are unbiased estimators of p and μ. The sample maximum is a biased estimator of the population maximum."
  - "Unbiased does not mean exact. Any single estimate can miss the parameter; unbiasedness is about the long-run average."
faqs:
  - question: "Can I tell whether an estimator is biased from one sample?"
    answer: "No. Bias is a property of the sampling distribution, so you need all possible samples or many simulated samples. One estimate that misses the parameter does not show bias."
  - question: "Is the sample standard deviation s unbiased?"
    answer: "The sample variance s², which divides by n − 1, is an unbiased estimator of the population variance σ². Dividing by n gives a variance estimator that is too small on average. Strictly, s itself slightly underestimates σ on average, but the course uses s as the standard point estimate of σ."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## From a sample to a population value

Unit 3 is about **inference**: using a sample to say something about a whole population. The first step is to make a single best guess at the population value. This topic is about that guess and about how to judge the rule that produces it.

Recall two words from Unit 1:

- A **parameter** is a number that describes a population. It has one fixed value, but you usually do not know it.
- A **statistic** is a number calculated from a sample. Its value depends on which individuals happen to be in the sample, so it changes from sample to sample.

We use a statistic to estimate a parameter. The matching pairs you will use most are:

| Population parameter | Sample statistic that estimates it |
|---|---|
| proportion p | sample proportion p̂ ("p-hat") = x / n, where x is the number of successes |
| mean μ | sample mean x̄ |
| standard deviation σ | sample standard deviation s |
| median | sample median |

A simple memory aid: parameters go with **p**opulations, statistics go with **s**amples. Greek letters (μ, σ) are parameters; letters with a hat or a bar (p̂, x̄) are statistics.

## Estimator or estimate?

These two words sound alike but mean different things.

- An **estimator** is the **rule** or formula: "take the sample proportion", "take the sample mean". It is a statistic thought of before any data are collected, so it is a random quantity with a sampling distribution.
- An **estimate**, or **point estimate**, is the **number** the rule gives for the sample you actually took. It is a single value, which is why it is called a *point* estimate.

For example, p̂ is an estimator of p. If 52 of 160 people in your sample say yes, then p̂ = 52 ÷ 160 = 0.325 is a point estimate of p.

Later in this unit you will add a margin of error around a point estimate to make an interval estimate (a confidence interval). For now, the point estimate is the whole answer.

## What makes an estimator unbiased?

Imagine taking every possible random sample of a given size from the population and calculating the estimator for each one. Those values form the **sampling distribution** of the estimator (Topic 2.12). Now compare its centre with the parameter.

- The estimator is **unbiased** if the mean of its sampling distribution **equals** the parameter. On average, it does not overestimate or underestimate.
- The estimator is **biased** if the mean of its sampling distribution is **not equal** to the parameter. It tends to miss in one direction.

Three things to notice:

1. Unbiased does **not** mean that every estimate is correct. Individual estimates still scatter above and below the parameter. They balance out on average.
2. Bias is a property of the **rule**, judged over all samples. One sample cannot show it.
3. Unbiasedness assumes the samples are **random**. An unbiased estimator applied to a biased sampling method (Topic 1.12), such as a voluntary-response survey, still gives biased estimates.

Some facts you can rely on, for random samples:

- p̂ is an unbiased estimator of p, and x̄ is an unbiased estimator of μ.
- The sample variance s², which divides by n − 1, is an unbiased estimator of σ². This is the reason for the n − 1 you met in Topic 1.7.
- The **sample maximum** is a biased estimator of the population maximum: it can never be larger than the population maximum, and it is usually smaller. For the same reason the sample range underestimates the population range.

## Worked example 1: calculating point estimates

**Question.** The fictional Wrenfield Sports Centre has 3,200 members. The manager chooses a simple random sample of 10 members and records how many times each visited last month:

**4, 9, 12, 6, 0, 15, 8, 7, 10, 9**

In a separate simple random sample of 160 members, 52 said they would use a new early-morning class.

(a) Calculate point estimates of the mean number of visits, the standard deviation of the number of visits, and the median number of visits for all members. (b) Calculate a point estimate of the proportion of all members who would use the early-morning class. (c) Name each parameter in context.

**(a)**

1. Sum = 80, so x̄ = 80 ÷ 10 = **8 visits**.
2. Deviations from 8: −4, 1, 4, −2, −8, 7, 0, −1, 2, 1. Squares add to 156.
3. s² = 156 ÷ (10 − 1) = 17.33…, so s = √17.33… ≈ **4.16 visits**.
4. Ordered: 0, 4, 6, 7, 8, 9, 9, 10, 12, 15. Median = (8 + 9) ÷ 2 = **8.5 visits**.

**(b)** p̂ = 52 ÷ 160 = **0.325**.

**(c)** x̄ = 8 estimates μ, the mean number of visits last month for **all 3,200 members**. s ≈ 4.16 estimates σ, the standard deviation of the number of visits for all members. The sample median 8.5 estimates the median for all members. p̂ = 0.325 estimates p, the proportion of **all members** who would use the early-morning class.

**Check.** A calculator's one-variable statistics gives x̄ = 8 and Sx ≈ 4.163. Each estimate is described as a value for the population, but calculated from the sample.

## Seeing bias in a sampling distribution

You can find an exact sampling distribution when the population is tiny, by listing every possible sample. Worked example 2 does this. Figure 1 shows the result for two estimators.

<figure>
<svg viewBox="0 0 640 360" role="img" aria-labelledby="est-title est-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="est-title">Sampling distributions of the sample mean and the sample maximum for all ten samples of size 2</title>
<desc id="est-desc">Two dot plots on axes running from 0 to 10 books. The upper plot shows the ten sample means as circles at 2.5, 3.5, 4, 4, 4.5, 5.5, 5.5, 6, 7 and 7.5. A dashed vertical line at 5 marks the population mean, and the mean of the ten sample means is also 5, so the plot is centred on the parameter. The lower plot shows the ten sample maxima as squares at 3, 5, 5, 6, 6, 6, 9, 9, 9 and 9. A dashed vertical line at 9 marks the population maximum. A solid triangle at 6.7 marks the mean of the sample maxima, which is to the left of 9. No square lies to the right of 9.</desc>
<rect x="0" y="0" width="640" height="360" fill="#ffffff"/>
<text x="60" y="24" font-size="14" font-weight="bold" fill="#1d2b44">(a) Sample means (circles)</text>
<line x1="60" y1="130" x2="580" y2="130" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="60" y1="130" x2="60" y2="137"/><line x1="112" y1="130" x2="112" y2="137"/><line x1="164" y1="130" x2="164" y2="137"/><line x1="216" y1="130" x2="216" y2="137"/><line x1="268" y1="130" x2="268" y2="137"/><line x1="320" y1="130" x2="320" y2="137"/><line x1="372" y1="130" x2="372" y2="137"/><line x1="424" y1="130" x2="424" y2="137"/><line x1="476" y1="130" x2="476" y2="137"/><line x1="528" y1="130" x2="528" y2="137"/><line x1="580" y1="130" x2="580" y2="137"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="60" y="152">0</text><text x="112" y="152">1</text><text x="164" y="152">2</text><text x="216" y="152">3</text><text x="268" y="152">4</text><text x="320" y="152">5</text><text x="372" y="152">6</text><text x="424" y="152">7</text><text x="476" y="152">8</text><text x="528" y="152">9</text><text x="580" y="152">10</text>
</g>
<line x1="320" y1="44" x2="320" y2="130" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/>
<text x="326" y="54" text-anchor="start" font-size="13" fill="#1d2b44">μ = 5 = mean of the sample means</text>
<g fill="#1d2b44">
<circle cx="190" cy="120" r="6"/><circle cx="242" cy="120" r="6"/><circle cx="268" cy="120" r="6"/><circle cx="268" cy="106" r="6"/><circle cx="294" cy="120" r="6"/><circle cx="346" cy="120" r="6"/><circle cx="346" cy="106" r="6"/><circle cx="372" cy="120" r="6"/><circle cx="424" cy="120" r="6"/><circle cx="450" cy="120" r="6"/>
</g>
<text x="60" y="194" font-size="14" font-weight="bold" fill="#1d2b44">(b) Sample maxima (squares)</text>
<line x1="60" y1="300" x2="580" y2="300" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="60" y1="300" x2="60" y2="307"/><line x1="112" y1="300" x2="112" y2="307"/><line x1="164" y1="300" x2="164" y2="307"/><line x1="216" y1="300" x2="216" y2="307"/><line x1="268" y1="300" x2="268" y2="307"/><line x1="320" y1="300" x2="320" y2="307"/><line x1="372" y1="300" x2="372" y2="307"/><line x1="424" y1="300" x2="424" y2="307"/><line x1="476" y1="300" x2="476" y2="307"/><line x1="528" y1="300" x2="528" y2="307"/><line x1="580" y1="300" x2="580" y2="307"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="60" y="322">0</text><text x="112" y="322">1</text><text x="164" y="322">2</text><text x="216" y="322">3</text><text x="268" y="322">4</text><text x="320" y="322">5</text><text x="372" y="322">6</text><text x="424" y="322">7</text><text x="476" y="322">8</text><text x="528" y="322">9</text><text x="580" y="322">10</text>
</g>
<text x="320" y="348" text-anchor="middle" font-size="14" fill="#1d2b44">Number of books (value of the estimator)</text>
<line x1="528" y1="214" x2="528" y2="300" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/>
<text x="522" y="210" text-anchor="end" font-size="13" fill="#1d2b44">population maximum = 9</text>
<g fill="none" stroke="#1d2b44" stroke-width="2">
<rect x="210" y="282" width="12" height="12"/><rect x="314" y="282" width="12" height="12"/><rect x="314" y="268" width="12" height="12"/><rect x="366" y="282" width="12" height="12"/><rect x="366" y="268" width="12" height="12"/><rect x="366" y="254" width="12" height="12"/><rect x="522" y="282" width="12" height="12"/><rect x="522" y="268" width="12" height="12"/><rect x="522" y="254" width="12" height="12"/><rect x="522" y="240" width="12" height="12"/>
</g>
<path d="M408.4 286 L401.4 298 L415.4 298 Z" fill="#1d2b44"/>
<text x="446" y="250" text-anchor="middle" font-size="13" fill="#1d2b44">mean of maxima</text>
<text x="446" y="266" text-anchor="middle" font-size="13" fill="#1d2b44">6.7 (triangle)</text>
<line x1="432" y1="271" x2="414" y2="286" stroke="#1d2b44" stroke-width="1.5"/>
</svg>
<figcaption>Figure 1. Exact sampling distributions for the fictional Brook Lane reading club (population values 2, 3, 5, 6 and 9 books; all ten samples of size 2). Panel (a): the sample means balance at the population mean, 5, so the sample mean is unbiased. Panel (b): the sample maxima average 6.7, below the population maximum of 9, so the sample maximum is biased and underestimates.</figcaption>
</figure>

## Worked example 2: listing every sample

**Question.** The fictional Brook Lane reading club has 5 members. Last term they read 2, 3, 5, 6 and 9 books. Suppose you take a simple random sample of 2 members (without replacement). (a) Find the sampling distribution of the sample mean and use it to show that the sample mean is an unbiased estimator of the population mean. (b) Do the same for the sample maximum as an estimator of the population maximum.

**Parameters.** μ = (2 + 3 + 5 + 6 + 9) ÷ 5 = 25 ÷ 5 = 5 books. Population maximum = 9 books.

**All possible samples.** There are 10 samples of size 2, each equally likely:

| Sample | {2,3} | {2,5} | {2,6} | {2,9} | {3,5} | {3,6} | {3,9} | {5,6} | {5,9} | {6,9} |
|---|---|---|---|---|---|---|---|---|---|---|
| Sample mean | 2.5 | 3.5 | 4 | 5.5 | 4 | 4.5 | 6 | 5.5 | 7 | 7.5 |
| Sample maximum | 3 | 5 | 6 | 9 | 5 | 6 | 9 | 6 | 9 | 9 |

**(a)** The ten sample means add to 50, so their mean is 50 ÷ 10 = **5 books**. This equals μ = 5. None of the ten estimates equals 5 exactly: five are above and five are below. On average, though, the sample mean hits the parameter exactly. So **the sample mean is an unbiased estimator of μ**.

**(b)** The ten sample maxima add to 67, so their mean is 67 ÷ 10 = **6.7 books**. This is less than the population maximum of 9. Only 4 of the 10 samples give 9, and no sample can give more than 9. So **the sample maximum is a biased estimator** of the population maximum. It tends to **underestimate** it.

**Check.** The same reasoning shows why: a sample of 2 includes the member who read 9 books only some of the time, and when it does not, the estimate must be too small. Nothing can balance this out with values above 9.

## Worked example 3: judging bias from a simulation

Real populations are too large to list every sample, so we simulate (Topic 2.12).

**Question.** A fictional machine fills bags of rice. The fill weights follow a normal distribution with mean 500 g and standard deviation σ = 4 g, so the population variance is σ² = 16 g². A student simulated 1,000 random samples of 5 bags. For each sample she calculated two estimators of σ²:

- **Estimator V₁:** Σ(xᵢ − x̄)² ÷ (n − 1), the sample variance s².
- **Estimator V₂:** Σ(xᵢ − x̄)² ÷ n.

The mean of the 1,000 values of V₁ was **16.18 g²**. The mean of the 1,000 values of V₂ was **12.94 g²**. Which estimator appears to be unbiased? Justify your answer.

**Answer.**

1. The parameter is σ² = 16 g².
2. The 1,000 simulated values approximate each estimator's sampling distribution.
3. V₁: the simulated values centre at 16.18 g², very close to 16. The small difference of 0.18 g² is what chance variation in 1,000 simulated samples would produce. So V₁ **appears unbiased**.
4. V₂: the simulated values centre at 12.94 g², well below 16. So V₂ is **biased**: it tends to underestimate σ².

**Check.** V₂ = V₁ × (n − 1)/n = V₁ × 4/5 for every sample, so its mean is 4/5 of V₁'s: 16.18 × 0.8 ≈ 12.94. In theory V₂ averages 16 × 4/5 = 12.8 g². This is why the course's sample standard deviation divides by n − 1.

Notice the wording: with a simulation, we say an estimator **appears** unbiased. A simulation gives an approximate sampling distribution, so we expect its mean to be close to, but not exactly equal to, the parameter.

## Bias and variability are different ideas

An unbiased estimator can still be imprecise: its estimates may be widely scattered around the parameter. Bias is about **where the sampling distribution is centred**. Variability is about **how spread out it is**. You will see in Topic 3.2 that the spread of the sampling distribution of p̂ gets smaller as the sample size increases. Bias does not: a larger sample from a biased method gives a more precise estimate of the wrong value.

## Common misconceptions

- **"Unbiased means the estimate equals the parameter."** No. In Worked example 2, not one of the ten sample means equals 5. Unbiased means correct **on average** over all possible samples.
- **"My estimate missed the parameter, so the estimator is biased."** One sample cannot show bias. You need the whole sampling distribution, or a good simulation of it.
- **"A bigger sample removes bias."** A bigger sample reduces variability. It does not move the centre of a biased estimator's sampling distribution to the parameter, and it does not fix a biased sampling method.
- **Mixing up notation.** p and μ are parameters; p̂ and x̄ are statistics. Writing "p = 0.325" for a sample result is wrong; write p̂ = 0.325.
- **Describing the estimate without the population.** "x̄ = 8 estimates the mean" is incomplete. Say "x̄ = 8 visits estimates the mean number of visits last month for all 3,200 members".
- **"A simulated mean of 16.18 is not 16, so V₁ is biased."** Simulation results contain chance variation. Judge whether the simulated centre is close to the parameter, and look for a consistent difference in one direction.
- **"Unbiased estimators protect against poor sampling."** p̂ and x̄ are unbiased only for random samples. With a convenience or voluntary-response sample, the estimates are biased however you calculate them.

## Where this leads

Topic 3.2 finds the mean and standard deviation of the sampling distribution of p̂, and shows that its mean is exactly p, which confirms that p̂ is unbiased. Continue with [Sampling Distributions for Sample Proportions](/advanced-course-resources/statistics/3-2-sampling-distributions-sample-proportions-study-guide/). Before that, try the [practice questions](/advanced-course-resources/statistics/3-1-estimators-practice/), then use the [revision notes](/advanced-course-resources/statistics/3-1-estimators-revision-notes/) and the [checklist](/advanced-course-resources/statistics/3-1-estimators-checklist/). For the idea of a sampling distribution, look back at [Sampling Distributions and the Central Limit Theorem](/advanced-course-resources/statistics/2-12-sampling-distributions-central-limit-theorem-study-guide/).
