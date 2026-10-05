---
resourceId: "mb-ap-stats-3.2-study-guide"
title: "Sampling Distributions for Sample Proportions: Study Guide (Statistics 3.2)"
description: "Find the mean and standard deviation of the sampling distribution of a sample proportion, check the random, 10% and large-counts conditions, and calculate and interpret normal probabilities."
course: "statistics"
unit: 3
topics: ["3.2"]
resourceType: "study-guide"
prerequisites:
  - "Binomial random variables and their mean np and standard deviation √(np(1 − p)) (Topic 2.10)"
  - "Normal distributions, z-scores and normal probabilities (Topic 2.11)"
  - "Sampling distributions and unbiased estimators (Topics 2.12 and 3.1)"
prerequisiteResources: ["mb-ap-stats-3.1-study-guide"]
learningObjectives:
  - "Calculate the mean and standard deviation of the sampling distribution of a sample proportion"
  - "Check the random and 10% conditions for the standard deviation formula, and the large-counts condition for approximate normality, in context"
  - "Interpret the mean and standard deviation of the sampling distribution of p̂ for a specific population"
  - "Calculate probabilities about p̂ with a normal model and interpret them in context"
  - "Describe how the standard deviation of p̂ changes as the sample size changes"
skills: ["3", "4"]
studyMinutes: 45
difficulty: "core"
calculator: "graphing"
calculatorNote: "Use normalcdf (or a z-table) for normal probabilities. Keep at least 4 decimal places for the standard deviation and z-scores; round probabilities to 4 decimal places."
related: ["mb-ap-stats-3.2-revision-notes", "mb-ap-stats-3.2-practice", "mb-ap-stats-3.2-checklist"]
next: "mb-ap-stats-3.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "The sampling distribution of p̂ has mean μp̂ = p, so p̂ is an unbiased estimator of p."
  - "Its standard deviation is σp̂ = √(p(1 − p)/n), valid when observations are independent: a random sample, and n ≤ 10% of the population when sampling without replacement."
  - "The shape is approximately normal when np ≥ 10 and n(1 − p) ≥ 10, the expected numbers of successes and failures."
  - "To find a probability, standardise: z = (p̂ − p) / σp̂, then use the normal distribution."
  - "Quadrupling the sample size halves the standard deviation of p̂."
faqs:
  - question: "Do I use p or p̂ in the conditions and the formula?"
    answer: "In this topic the population proportion p is known (or claimed), so use p: σp̂ = √(p(1 − p)/n) and the counts np and n(1 − p). When p is unknown, as in a confidence interval (Topic 3.3), you will use p̂ instead."
  - question: "Why does the 10% condition matter?"
    answer: "Sampling without replacement makes the observations slightly dependent. If the sample is no more than 10% of the population, the effect is small and √(p(1 − p)/n) is accurate enough. If the sample is a larger fraction, the formula overstates the true variability."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Why sample proportions vary

Suppose 35% of the adults in a city cycle to work at least once a week. If you take a random sample of 120 adults, you will not get exactly 35% cyclists every time. One sample might give 31%, another 38%, another 40%. The **sample proportion** p̂ changes from sample to sample.

The distribution of p̂ over all possible random samples of the same size is the **sampling distribution of p̂** (Topic 2.12). This topic gives you a formula for its centre and spread, and a condition that tells you when its shape is approximately normal. With these you can say how far p̂ is likely to be from p, which is the basis of every inference method in this unit.

Be clear about the three distributions involved:

| Distribution of… | What the values are | Example |
|---|---|---|
| the **population** | one response per adult in the city | cycles / does not cycle, with proportion p = 0.35 |
| a **sample** | one response per sampled adult | 120 responses, with sample proportion p̂ |
| the **sampling distribution** | one p̂ per possible sample | many values of p̂, centred at 0.35 |

## Mean and standard deviation of p̂

Count the successes in the sample and call the count X. When the observations are independent, X is a **binomial** random variable with n trials and success probability p (Topic 2.10), so its mean is np and its standard deviation is √(np(1 − p)). The sample proportion is p̂ = X / n. Dividing by n divides both the mean and the standard deviation by n:

- **Mean:** μp̂ = np ÷ n = **p**
- **Standard deviation:** σp̂ = √(np(1 − p)) ÷ n = **√(p(1 − p) / n)**

Two consequences:

1. The mean of p̂ equals p, so **p̂ is an unbiased estimator of p**. This confirms what you saw by listing samples and simulating in Topic 3.1.
2. n is in the **denominator** under the square root. Larger samples give less variable values of p̂. Because of the square root, you must multiply n by **4** to **halve** σp̂.

## The conditions and what each one is for

| Condition | Check | What it guarantees |
|---|---|---|
| Random | The data come from a random sample (or a randomised experiment). | Observations are independent of one another, and p̂ is unbiased. |
| 10% | When sampling without replacement, n ≤ 10% of the population size N (that is, N ≥ 10n). | Observations are close enough to independent for σp̂ = √(p(1 − p)/n) to be accurate. |
| Large counts | np ≥ 10 **and** n(1 − p) ≥ 10. | The sampling distribution of p̂ is approximately normal. |

np is the **expected** number of successes and n(1 − p) is the expected number of failures. Both must be at least 10. The formulas for the mean and standard deviation do **not** need large counts; only the normal shape does.

Verify each condition **in context with numbers**. "Random: the 120 adults were a simple random sample of the city's adults" is better than "SRS ✓".

## Picturing the sampling distribution

<figure>
<svg viewBox="0 0 640 310" role="img" aria-labelledby="phat-title phat-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="phat-title">Approximately normal sampling distribution of the sample proportion for p = 0.35 and n = 120</title>
<desc id="phat-desc">A bell-shaped curve centred at 0.35 on a horizontal axis labelled sample proportion of adults who cycle. Tick marks show the mean plus or minus one and two standard deviations: 0.263, 0.306, 0.350, 0.394 and 0.437. A dashed vertical line rises from the axis at 0.42. The area under the curve to the right of 0.42 is hatched with diagonal lines and labelled P of p-hat at least 0.42 is approximately 0.054. A label above the peak reads mean 0.35, standard deviation 0.0435.</desc>
<defs>
<pattern id="phat-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
<line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="2"/>
</pattern>
</defs>
<rect x="0" y="0" width="640" height="310" fill="#ffffff"/>
<path d="M446.0,240 L446.0,193.3 L455.0,201.4 L464.0,208.6 L473.0,214.7 L482.0,219.9 L491.0,224.3 L500.0,227.8 L509.0,230.7 L518.0,233.0 L527.0,234.8 L536.0,236.2 L545.0,237.2 L554.0,238.0 L563.0,238.6 L572.0,239.0 L581.0,239.3 L590.0,239.5 L590,240 Z" fill="url(#phat-hatch)" stroke="none"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="50.0,239.5 59.0,239.3 68.0,239.0 77.0,238.6 86.0,238.0 95.0,237.2 104.0,236.2 113.0,234.8 122.0,233.0 131.0,230.7 140.0,227.8 149.0,224.3 158.0,219.9 167.0,214.7 176.0,208.6 185.0,201.4 194.0,193.3 203.0,184.2 212.0,174.2 221.0,163.4 230.0,152.1 239.0,140.3 248.0,128.5 257.0,116.9 266.0,105.9 275.0,95.8 284.0,87.0 293.0,79.8 302.0,74.4 311.0,71.1 320.0,70.0 329.0,71.1 338.0,74.4 347.0,79.8 356.0,87.0 365.0,95.8 374.0,105.9 383.0,116.9 392.0,128.5 401.0,140.3 410.0,152.1 419.0,163.4 428.0,174.2 437.0,184.2 446.0,193.3 455.0,201.4 464.0,208.6 473.0,214.7 482.0,219.9 491.0,224.3 500.0,227.8 509.0,230.7 518.0,233.0 527.0,234.8 536.0,236.2 545.0,237.2 554.0,238.0 563.0,238.6 572.0,239.0 581.0,239.3 590.0,239.5"/>
<line x1="40" y1="240" x2="600" y2="240" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="163.3" y1="240" x2="163.3" y2="247"/><line x1="241.6" y1="240" x2="241.6" y2="247"/><line x1="320" y1="240" x2="320" y2="247"/><line x1="398.4" y1="240" x2="398.4" y2="247"/><line x1="476.7" y1="240" x2="476.7" y2="247"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="163.3" y="263">0.263</text><text x="241.6" y="263">0.306</text><text x="320" y="263">0.350</text><text x="398.4" y="263">0.394</text><text x="476.7" y="263">0.437</text>
</g>
<g font-size="11" fill="#1d2b44" text-anchor="middle">
<text x="163.3" y="278">−2σ</text><text x="241.6" y="278">−1σ</text><text x="320" y="278">mean</text><text x="398.4" y="278">+1σ</text><text x="476.7" y="278">+2σ</text>
</g>
<text x="320" y="302" text-anchor="middle" font-size="14" fill="#1d2b44">Sample proportion of adults who cycle, p̂ (n = 120)</text>
<line x1="446" y1="150" x2="446" y2="240" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/>
<text x="452" y="146" text-anchor="start" font-size="13" fill="#1d2b44">p̂ = 0.42</text>
<text x="484" y="182" text-anchor="start" font-size="13" fill="#1d2b44">hatched area:</text>
<text x="484" y="198" text-anchor="start" font-size="13" fill="#1d2b44">P(p̂ ≥ 0.42) ≈ 0.054</text>
<text x="320" y="56" text-anchor="middle" font-size="13" fill="#1d2b44">mean μp̂ = 0.35, standard deviation σp̂ ≈ 0.0435</text>
</svg>
<figcaption>Figure 1. Sampling distribution of p̂ for random samples of 120 adults from the fictional city of Marrowby, where p = 0.35. The curve is centred at p. The hatched tail is the probability that a sample gives 42% or more cyclists (Worked example 2).</figcaption>
</figure>

## Worked example 1: mean, standard deviation and conditions

**Question.** The fictional city of Marrowby has 48,000 adults, and 35% of them cycle to work at least once a week. A transport officer will take a simple random sample of 120 adults. (a) Find the mean and standard deviation of the sampling distribution of p̂, the proportion of the sample who cycle. (b) Check the conditions. (c) Interpret the mean and the standard deviation in context.

**(a)**

1. Mean: μp̂ = p = **0.35**.
2. Standard deviation: σp̂ = √(0.35 × 0.65 / 120) = √(0.2275 / 120) = √0.0018958… ≈ **0.0435**.

**(b)**

1. **Random:** the officer takes a simple random sample of Marrowby adults. ✓
2. **10%:** 120 ≤ 10% of 48,000 = 4,800. ✓ So the standard deviation formula is accurate.
3. **Large counts:** np = 120 × 0.35 = 42 and n(1 − p) = 120 × 0.65 = 78. Both are at least 10. ✓ So the sampling distribution of p̂ is approximately normal.

**(c)**

- **Mean:** if the officer took many random samples of 120 Marrowby adults, the sample proportions who cycle would average 0.35, the true proportion for the whole city.
- **Standard deviation:** in random samples of 120 Marrowby adults, the sample proportion who cycle typically differs from the true proportion of 0.35 by about 0.0435 (about 4.4 percentage points).

**Check.** The interpretation names the statistic (sample proportion), the population (Marrowby adults), the sample size (120) and repeated sampling.

## Worked example 2: probabilities with the normal model

**Question.** Use the sampling distribution in Worked example 1. (a) Find the probability that the sample proportion of cyclists is at least 0.42. (b) Find the probability that it is between 0.30 and 0.40. (c) The officer's sample in fact contains 54 cyclists. Does this give reason to doubt that 35% of Marrowby adults cycle? Explain.

**(a)** The large-counts condition is met, so use a normal model with mean 0.35 and standard deviation 0.04354.

1. z = (0.42 − 0.35) / 0.04354 ≈ 1.6077.
2. P(p̂ ≥ 0.42) = P(z ≥ 1.6077) ≈ **0.0540**.

Interpretation: if 35% of Marrowby adults cycle, about 5.4% of random samples of 120 adults would contain 42% or more cyclists.

**(b)** z for 0.30 is (0.30 − 0.35) / 0.04354 ≈ −1.1483 and z for 0.40 is about +1.1483. P(0.30 < p̂ < 0.40) ≈ **0.7492**. About 75% of samples of 120 give a sample proportion within 0.05 of 0.35.

**(c)** p̂ = 54 ÷ 120 = 0.45. z = (0.45 − 0.35) / 0.04354 ≈ 2.2967, so P(p̂ ≥ 0.45) ≈ **0.0108**. If p really were 0.35, a sample proportion as high as 0.45 would happen in only about 1 in 100 random samples of 120 adults. That is unusual, so the sample **gives reason to doubt** the 35% figure and suggests the true proportion may be higher. It does not prove the figure is wrong: unusual samples do sometimes happen.

**Check.** On a calculator: normalcdf(0.42, 1, 0.35, 0.04354) ≈ 0.0540. The exact binomial probability P(X ≥ 51) is about 0.053, so the normal model is a good approximation here.

## Worked example 3: how sample size changes the spread

**Question.** For the Marrowby survey (p = 0.35): (a) What happens to σp̂ if the sample size is increased from 120 to 480? (b) What is the smallest sample size that makes σp̂ at most 0.02? Check the 10% condition for that sample size.

**(a)** σp̂ = √(0.35 × 0.65 / 480) ≈ 0.0218. This is exactly half of 0.0435. Multiplying n by 4 divides the standard deviation by √4 = 2. The centre stays at 0.35.

**(b)** Solve √(0.35 × 0.65 / n) ≤ 0.02.

1. Square both sides: 0.2275 / n ≤ 0.0004.
2. Rearrange: n ≥ 0.2275 / 0.0004 = 568.75.
3. n must be a whole number, so round **up**: **n = 569**. (With n = 568, σp̂ ≈ 0.02001, just above 0.02.)
4. **10%:** 569 ≤ 4,800, so the formula is still valid.

## When the large-counts condition fails

Suppose 4% of the parts from a fictional factory are faulty, and you take random samples of 100 parts. Then np = 100 × 0.04 = 4, which is less than 10. The sampling distribution of p̂ is **skewed to the right**: p̂ cannot be below 0, but it can be well above 0.04. A normal model with mean 0.04 and standard deviation 0.0196 gets this wrong. It gives a probability of about 0.021 to a negative sample proportion, which is impossible. It also says P(p̂ ≥ 0.08) ≈ 0.021, when the binomial distribution gives about 0.048. Do not use a normal model here. You could still find exact probabilities with the binomial distribution, or take a larger sample: n = 250 gives np = 10.

## Common misconceptions

- **Using p̂ when p is given.** In this topic the population proportion is known or claimed. Use p in σp̂ and in the large-counts check.
- **Checking "n ≥ 30" for proportions.** The normality check for proportions uses the expected counts: np ≥ 10 and n(1 − p) ≥ 10.
- **Mixing up the conditions' jobs.** The 10% condition is about the standard deviation formula (independence). Large counts is about the normal shape.
- **"Doubling the sample halves the standard deviation."** It divides it by √2 ≈ 1.41. You need four times the sample to halve it.
- **"Larger samples have less variability."** Too vague. The values of p̂ from larger samples vary less. The responses **within** a sample do not become less variable.
- **Saying "it" or "the proportion" without saying which one.** Say "the sample proportion" or "the population proportion", and name the population.
- **"A small probability proves the claim is false."** It gives reason to doubt the claim. Formal tests come in Topics 3.5 to 3.7.
- **Rounding a required sample size down.** 568.75 must become 569, or the target is missed.

## Where this leads

In Topic 3.3 you will reverse the reasoning: p is unknown, so you use p̂ and the same standard deviation formula to build a confidence interval. Continue with [Constructing a Confidence Interval for a Population Proportion](/advanced-course-resources/statistics/3-3-constructing-confidence-interval-population-proportion-study-guide/). First try the [practice questions](/advanced-course-resources/statistics/3-2-sampling-distributions-sample-proportions-practice/), then use the [revision notes](/advanced-course-resources/statistics/3-2-sampling-distributions-sample-proportions-revision-notes/) and the [checklist](/advanced-course-resources/statistics/3-2-sampling-distributions-sample-proportions-checklist/). For unbiased estimators, look back at [Estimators](/advanced-course-resources/statistics/3-1-estimators-study-guide/).
