---
resourceId: "mb-ap-stats-4.2-study-guide"
title: "Constructing a Confidence Interval for a Mean or Mean Difference: Study Guide (Statistics 4.2)"
description: "Learn how t-distributions work, when to use a one-sample t-interval for μ or for a matched-pairs mean difference μd, how to check the conditions and how to calculate the interval."
course: "statistics"
unit: 4
topics: ["4.2"]
resourceType: "study-guide"
prerequisites:
  - "The sampling distribution of a sample mean and its conditions (Topic 4.1)"
  - "Constructing a confidence interval for a proportion: point estimate ± margin of error (Topic 3.3)"
  - "Checking a small data set for skewness and outliers (Topics 1.6 to 1.8)"
prerequisiteResources: ["mb-ap-stats-4.1-study-guide"]
learningObjectives:
  - "Describe t-distributions and explain how their shape depends on the degrees of freedom"
  - "Explain why a t critical value replaces z* when the population standard deviation is unknown"
  - "Identify a one-sample t-interval for a population mean, or for a population mean difference in a matched-pairs design, and define the parameter in context"
  - "Check the randomization, 10% and sample data conditions in context, including for a sample of differences"
  - "Calculate the point estimate, standard error, critical value, margin of error and interval for a population mean or mean difference"
skills: ["2", "3", "4"]
studyMinutes: 50
difficulty: "core"
calculator: "graphing"
calculatorNote: "Find t* with the inverse t function (invT on many graphing calculators) using df = n − 1, and check intervals with the one-sample t-interval function. Keep 4 decimal places in working and give endpoints to 2 decimal places."
related: ["mb-ap-stats-4.2-revision-notes", "mb-ap-stats-4.2-practice", "mb-ap-stats-4.2-checklist"]
next: "mb-ap-stats-4.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "When σ is unknown, use s and a t-distribution with df = n − 1: interval x̄ ± t* × s/√n."
  - "t-distributions are symmetric and bell-shaped with heavier tails than the standard normal; they approach it as df increases."
  - "Matched pairs: subtract within each pair, then build a one-sample t-interval for μd from the differences."
  - "Conditions: random sample or randomized experiment; n ≤ 10% of N when sampling without replacement; normal population, n ≥ 30, or a sample free from strong skewness and outliers."
  - "Standard error = s/√n; margin of error = t* × s/√n."
faqs:
  - question: "Why not use z* = 1.96 with s?"
    answer: "Because s changes from sample to sample, (x̄ − μ)/(s/√n) varies more than a z-score. Its distribution is a t-distribution, with heavier tails. Using z* would make the interval too narrow, so it would capture μ less often than the stated confidence level."
  - question: "How do I find t* if my table does not list my degrees of freedom?"
    answer: "Use technology (invT) for the exact value. If you must use a table, use the next smaller listed df. It gives a slightly larger t* and a slightly wider interval, which is the safe direction."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## Why a new distribution?

In Topic 4.1 you used σx̄ = σ/√n. That needs the **population** standard deviation σ. In real studies of a quantitative variable, σ is almost never known. If you knew everything about the population, you would not need to estimate its mean.

So you replace σ with the **sample** standard deviation s. The estimated standard deviation of x̄ is called the **standard error**:

**SE = s / √n**

Standardising with SE instead of σx̄ gives the statistic

**t = (x̄ − μ) / (s/√n)**

This is not a z-score. Both x̄ and s change from sample to sample. When a sample happens to have a small s, t can be far from 0. So t varies **more** than z, and its distribution has heavier tails. That distribution is a **t-distribution**.

## t-distributions

The t-distributions (often called Student's t-distributions) are a family of curves. Each member is set by one number, the **degrees of freedom (df)**. For one sample, or one sample of differences:

**df = n − 1**

Every t-distribution is:

- **symmetric** and **bell-shaped**, centred at 0;
- **standardised**, like the standard normal;
- **heavier in the tails** and **lower in the peak** than the standard normal.

With few degrees of freedom the difference is large. As df increases, s becomes a more reliable estimate of σ and the t-distribution moves closer to the standard normal (mean 0, standard deviation 1).

<figure>
<svg viewBox="0 0 640 300" role="img" aria-labelledby="tdist-title tdist-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="tdist-title">Standard normal curve compared with a t-distribution with 3 degrees of freedom</title>
<desc id="tdist-desc">A horizontal axis from minus 4 to 4. A solid bell curve, the standard normal, has a higher, narrower peak and tails that almost reach the axis by minus 3 and 3. A dashed bell curve, the t-distribution with 3 degrees of freedom, has a lower peak and tails that stay clearly above the axis out to minus 4 and 4. Short solid tick marks below the axis at minus 1.96 and 1.96 are labelled z star. Short dashed tick marks at minus 3.18 and 3.18 are labelled t star for 3 degrees of freedom. Each pair of critical values cuts off the central 95 percent of its own curve.</desc>
<rect x="0" y="0" width="640" height="300" fill="#ffffff"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="60.0,229.9 66.5,229.9 73.0,229.9 79.5,229.8 86.0,229.7 92.5,229.6 99.0,229.5 105.5,229.3 112.0,229.0 118.5,228.6 125.0,228.1 131.5,227.5 138.0,226.6 144.5,225.6 151.0,224.2 157.5,222.5 164.0,220.5 170.5,217.9 177.0,214.9 183.5,211.3 190.0,207.0 196.5,202.0 203.0,196.4 209.5,189.9 216.0,182.7 222.5,174.8 229.0,166.2 235.5,157.0 242.0,147.3 248.5,137.2 255.0,126.9 261.5,116.6 268.0,106.6 274.5,96.9 281.0,88.0 287.5,80.0 294.0,73.1 300.5,67.5 307.0,63.4 313.5,60.8 320.0,60.0 326.5,60.8 333.0,63.4 339.5,67.5 346.0,73.1 352.5,80.0 359.0,88.0 365.5,96.9 372.0,106.6 378.5,116.6 385.0,126.9 391.5,137.2 398.0,147.3 404.5,157.0 411.0,166.2 417.5,174.8 424.0,182.7 430.5,189.9 437.0,196.4 443.5,202.0 450.0,207.0 456.5,211.3 463.0,214.9 469.5,217.9 476.0,220.5 482.5,222.5 489.0,224.2 495.5,225.6 502.0,226.6 508.5,227.5 515.0,228.1 521.5,228.6 528.0,229.0 534.5,229.3 541.0,229.5 547.5,229.6 554.0,229.7 560.5,229.8 567.0,229.9 573.5,229.9 580.0,229.9"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="7 4" points="60.0,226.1 66.5,225.7 73.0,225.4 79.5,224.9 86.0,224.5 92.5,223.9 99.0,223.4 105.5,222.7 112.0,222.0 118.5,221.1 125.0,220.2 131.5,219.2 138.0,218.0 144.5,216.7 151.0,215.2 157.5,213.5 164.0,211.6 170.5,209.5 177.0,207.1 183.5,204.3 190.0,201.2 196.5,197.7 203.0,193.8 209.5,189.4 216.0,184.4 222.5,178.9 229.0,172.7 235.5,165.9 242.0,158.5 248.5,150.5 255.0,141.9 261.5,132.9 268.0,123.6 274.5,114.3 281.0,105.1 287.5,96.5 294.0,88.8 300.5,82.4 307.0,77.5 313.5,74.4 320.0,73.4 326.5,74.4 333.0,77.5 339.5,82.4 346.0,88.8 352.5,96.5 359.0,105.1 365.5,114.3 372.0,123.6 378.5,132.9 385.0,141.9 391.5,150.5 398.0,158.5 404.5,165.9 411.0,172.7 417.5,178.9 424.0,184.4 430.5,189.4 437.0,193.8 443.5,197.7 450.0,201.2 456.5,204.3 463.0,207.1 469.5,209.5 476.0,211.6 482.5,213.5 489.0,215.2 495.5,216.7 502.0,218.0 508.5,219.2 515.0,220.2 521.5,221.1 528.0,222.0 534.5,222.7 541.0,223.4 547.5,223.9 554.0,224.5 560.5,224.9 567.0,225.4 573.5,225.7 580.0,226.1"/>
<line x1="40" y1="230" x2="600" y2="230" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="60" y1="230" x2="60" y2="236"/><line x1="125" y1="230" x2="125" y2="236"/><line x1="190" y1="230" x2="190" y2="236"/><line x1="255" y1="230" x2="255" y2="236"/><line x1="320" y1="230" x2="320" y2="236"/><line x1="385" y1="230" x2="385" y2="236"/><line x1="450" y1="230" x2="450" y2="236"/><line x1="515" y1="230" x2="515" y2="236"/><line x1="580" y1="230" x2="580" y2="236"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="60" y="252">−4</text><text x="125" y="252">−3</text><text x="190" y="252">−2</text><text x="255" y="252">−1</text><text x="320" y="252">0</text><text x="385" y="252">1</text><text x="450" y="252">2</text><text x="515" y="252">3</text><text x="580" y="252">4</text>
</g>
<g stroke="#1d2b44" stroke-width="2.5">
<line x1="192.6" y1="256" x2="192.6" y2="272"/><line x1="447.4" y1="256" x2="447.4" y2="272"/>
</g>
<g stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="3 2">
<line x1="113.1" y1="256" x2="113.1" y2="272"/><line x1="526.9" y1="256" x2="526.9" y2="272"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="192.6" y="288">z* −1.96</text><text x="447.4" y="288">z* 1.96</text><text x="113.1" y="288">t* −3.18</text><text x="526.9" y="288">t* 3.18</text>
</g>
<text x="350" y="50" text-anchor="start" font-size="13" fill="#1d2b44">solid: standard normal</text>
<text x="420" y="160" text-anchor="start" font-size="13" fill="#1d2b44">dashed: t, df = 3</text>
<text x="60" y="190" text-anchor="start" font-size="12" fill="#1d2b44">heavier tail</text>
</svg>
<figcaption>Figure 1. The t-distribution with 3 degrees of freedom (dashed) has a lower peak and heavier tails than the standard normal (solid). To cut off the central 95%, it needs critical values of ±3.18 instead of ±1.96.</figcaption>
</figure>

Heavier tails mean **larger critical values**. For 95% confidence:

| df | 2 | 4 | 9 | 19 | 29 | 99 | standard normal |
|---|---|---|---|---|---|---|---|
| t* | 4.303 | 2.776 | 2.262 | 2.093 | 2.045 | 1.984 | z* = 1.960 |

Small samples pay a price: a larger t* and a wider interval. t-distributions are also used for **test statistics** about μ when σ is unknown (Topics 4.4 and 4.5).

## Choosing the procedure and defining the parameter

**One sample, one quantitative variable:** use a **one-sample t-interval for a population mean, μ**.

**Matched pairs:** each value in one set is linked to one value in the other for a real reason: the same person measured twice, the same car tested two ways, twins. The two sets are **dependent**. Do not treat them as two separate samples. Instead:

1. subtract within each pair, in a fixed order, to get **one sample of differences**;
2. build a **one-sample t-interval for the population mean difference, μd**, from those differences.

**Define the parameter in context.** Name the mean, the response variable with units, and the population. For a mean difference, also state the **order of subtraction**.

- μ = the true mean response time, in minutes, of all emergency calls to the service that month.
- μd = the true mean difference in fuel economy (low-resistance tyres minus standard tyres), in km per litre, for all vans in the fleet.

## The three conditions

| Condition | What to check | Why it matters |
|---|---|---|
| Randomization | The data come from a random sample **or** a randomized experiment. | Makes the values independent and the estimate unbiased. |
| 10% | When sampling without replacement, n ≤ 10% of N. | Keeps the values close enough to independent for s/√n to be the right standard error. |
| Sample data | You are told the population is approximately normal; **or** the sample size is at least 30; **or**, for a smaller sample, a graph of the data shows no strong skewness and no outliers. | Makes the sampling distribution of x̄ close enough to normal for t* to be accurate. |

For **matched pairs**, apply the sample data condition to the **differences**: the number of differences is at least 30, or the differences show no strong skewness or outliers. The two original columns do not need to pass on their own.

When n < 30, **look at the data**: make a dot plot or boxplot, or use the 1.5 × IQR rule, and describe what you see. "The dot plot of the 14 times is roughly symmetric with no outliers" is a check. "n is big enough" is not.

## The calculation

1. **Point estimate:** x̄ (or x̄d for differences).
2. **Standard error:** SE = s/√n (or s_d/√n).
3. **Critical value:** t* for the central C% of a t-distribution with df = n − 1. On a calculator, t* = invT(1 − (1 − C)/2, df). For 95%, that is invT(0.975, df).
4. **Margin of error:** ME = t* × SE.
5. **Interval:** **x̄ ± t* × s/√n**.

Keep unrounded values until the final step. Check with the one-sample t-interval function on your calculator.

## Worked example 1: one sample from raw data

**Context.** A fictional county ambulance service received 2,600 emergency calls in March. An analyst selected a random sample of 14 calls and recorded each response time in minutes:

8.2, 11.5, 9.7, 13.1, 10.4, 7.6, 12.3, 9.1, 10.9, 14.0, 8.8, 11.2, 10.1, 12.7

**Question.** Construct a 95% confidence interval for the mean response time.

**1. Procedure and parameter.** One-sample t-interval for μ = the true mean response time, in minutes, of all 2,600 emergency calls in March.

**2. Conditions.**

- *Randomization:* a random sample of calls. ✓
- *10%:* 14 ≤ 10% of 2,600 = 260. ✓
- *Sample data:* n = 14 < 30, so check the data. Ordered: 7.6, 8.2, 8.8, 9.1, 9.7, 10.1, 10.4, 10.9, 11.2, 11.5, 12.3, 12.7, 13.1, 14.0. Five-number summary: 7.6, 9.1, 10.65, 12.3, 14.0. The median is near the middle of the box, so there is no strong skew. IQR = 3.2, fences 4.3 and 17.1, so there are no outliers. ✓

**3. Calculate.**

1. x̄ = 149.6 ÷ 14 ≈ **10.6857 minutes**; s ≈ **1.9139 minutes**.
2. SE = 1.9139/√14 ≈ **0.5115 minutes**.
3. df = 13, so t* = invT(0.975, 13) ≈ **2.160**.
4. ME = 2.160 × 0.5115 ≈ **1.105 minutes**.
5. Interval: 10.6857 ± 1.105 = **(9.58, 11.79) minutes**.

**Check.** The point estimate sits in the middle: (9.58 + 11.79)/2 ≈ 10.69. Using z* = 1.96 by mistake would give a margin of error of only 1.0025 minutes: too narrow. What the interval tells you about the service is Topic 4.3's job.

## Worked example 2: matched pairs

**Context.** A delivery company has 180 vans. It selected 10 at random. Each van was driven on the same route once with standard tyres and once with low-resistance tyres; a coin toss decided which set came first. Fuel economy is in km per litre.

| Van | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Standard | 9.8 | 10.4 | 8.9 | 11.2 | 10.0 | 9.5 | 10.7 | 9.1 | 10.9 | 9.6 |
| Low-resistance | 10.3 | 10.6 | 9.5 | 11.5 | 10.6 | 9.6 | 11.3 | 9.4 | 11.2 | 10.3 |
| d = low − standard | 0.5 | 0.2 | 0.6 | 0.3 | 0.6 | 0.1 | 0.6 | 0.3 | 0.3 | 0.7 |

**Question.** Construct a 90% confidence interval for the mean difference in fuel economy.

**1. Procedure and parameter.** Each van gives two linked measurements, so the data are **paired**. One-sample t-interval for μd = the true mean difference in fuel economy (low-resistance minus standard), in km per litre, for all 180 vans in the fleet.

**2. Conditions.**

- *Randomization:* the 10 vans were a random sample of the fleet, and the order of tyres was randomly assigned. ✓
- *10%:* 10 ≤ 10% of 180 = 18. ✓
- *Sample data:* only 10 differences, so check them. Ordered: 0.1, 0.2, 0.3, 0.3, 0.3, 0.5, 0.6, 0.6, 0.6, 0.7. Q1 = 0.3, Q3 = 0.6, IQR = 0.3; fences −0.15 and 1.05. No outliers and no strong skew. ✓

**3. Calculate.**

1. x̄d = 4.2 ÷ 10 = **0.42 km/L**; s_d ≈ **0.2044 km/L**.
2. SE = 0.2044/√10 ≈ **0.0646 km/L**.
3. df = 9, so t* = invT(0.95, 9) ≈ **1.833**.
4. ME = 1.833 × 0.0646 ≈ **0.1185 km/L**.
5. Interval: 0.42 ± 0.1185 = **(0.30, 0.54) km/L**.

**Check.** The two columns have standard deviations of about 0.77 and 0.76 km/L, because vans differ a lot. A two-sample method would wrongly give a standard error of about 0.3427 km/L. Pairing removes the van-to-van variation, which is why the paired interval is so much narrower.

## Worked example 3: summary statistics and a large sample

**Context.** A fictional gym chain selected a random sample of 48 of its 9,000 members and recorded the length of each member's most recent visit. The sample is skewed to the right with no extreme values. x̄ = 41.8 minutes and s = 15.6 minutes.

**Question.** Construct a 99% confidence interval for the mean visit length.

1. **Procedure:** one-sample t-interval for μ = the true mean length, in minutes, of the most recent visit for all 9,000 members.
2. **Conditions:** random sample ✓; 48 ≤ 10% of 9,000 = 900 ✓; n = 48 ≥ 30, so the skew in the sample does not stop the procedure ✓.
3. SE = 15.6/√48 ≈ 2.2517 minutes. df = 47, t* = invT(0.995, 47) ≈ 2.685. ME = 2.685 × 2.2517 ≈ 6.0447 minutes.
4. Interval: 41.8 ± 6.0447 = **(35.76, 47.84) minutes**.

## Common misconceptions

- **Using z* with s.** When σ is unknown, the critical value comes from a t-distribution with n − 1 df.
- **Using df = n.** For one sample, or one sample of differences, df = n − 1.
- **Treating paired data as two independent samples.** If the values are linked in pairs, subtract first and work with one sample of differences.
- **Forgetting the order of subtraction.** State it in the parameter, and keep it the same throughout.
- **Checking the sample data condition on the wrong values.** For matched pairs, check the differences.
- **Writing "n ≥ 30" when n is 14.** For a small sample you must look at the data and describe its shape and any outliers.
- **Citing the 10% condition for an experiment with volunteers.** The 10% condition applies to sampling without replacement from a population.
- **Rounding too early.** Rounding x̄, s or t* early can move the endpoints in the second decimal place.

## Where this leads

Topic 4.3 shows how to interpret a t-interval and its confidence level, and how to use one to judge a claim: [Justifying a Claim Based on a Confidence Interval for a Population Mean or Population Mean Difference](/advanced-course-resources/statistics/4-3-justifying-claim-based-on-confidence-study-guide/). Try the [practice questions](/advanced-course-resources/statistics/4-2-constructing-confidence-interval-population-mean-practice/) now, then use the [revision notes](/advanced-course-resources/statistics/4-2-constructing-confidence-interval-population-mean-revision-notes/) and the [checklist](/advanced-course-resources/statistics/4-2-constructing-confidence-interval-population-mean-checklist/) to consolidate. To review the sampling distribution of x̄, return to [Topic 4.1](/advanced-course-resources/statistics/4-1-sampling-distributions-sample-means-study-guide/).
