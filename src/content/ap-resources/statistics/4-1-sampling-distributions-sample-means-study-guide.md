---
resourceId: "mb-ap-stats-4.1-study-guide"
title: "Sampling Distributions for Sample Means: Study Guide (Statistics 4.1)"
description: "Find the mean and standard deviation of the sampling distribution of a sample mean, check the randomization, 10% and normality conditions, and calculate and interpret probabilities about x̄."
course: "statistics"
unit: 4
topics: ["4.1"]
resourceType: "study-guide"
prerequisites:
  - "Normal distributions, z-scores and normal probabilities (Topic 2.11)"
  - "Sampling distributions and the central limit theorem (Topic 2.12)"
  - "The sampling distribution of a sample proportion and its conditions (Topic 3.2)"
prerequisiteResources: ["mb-ap-stats-3.15-study-guide"]
learningObjectives:
  - "Calculate the mean and standard deviation of the sampling distribution of a sample mean from the population mean, the population standard deviation and the sample size"
  - "Check the randomization and 10% conditions that make the standard deviation formula accurate when sampling without replacement"
  - "Decide whether the sampling distribution of x̄ can be modelled by a normal distribution, using the population shape or the sample size"
  - "Calculate probabilities about a sample mean with a normal model and interpret them for a specific population"
  - "Explain how the variability of x̄ changes as the sample size changes"
skills: ["3", "4"]
studyMinutes: 45
difficulty: "core"
calculator: "graphing"
calculatorNote: "Use normalcdf (or a z-table) for normal probabilities and invNorm for cut-off values. Keep at least 4 decimal places for σx̄ and z; round probabilities to 4 decimal places."
related: ["mb-ap-stats-4.1-revision-notes", "mb-ap-stats-4.1-practice", "mb-ap-stats-4.1-checklist"]
next: "mb-ap-stats-4.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "The sampling distribution of x̄ has mean μx̄ = μ, so x̄ is an unbiased estimator of the population mean."
  - "Its standard deviation is σx̄ = σ/√n when the sampled values are independent: a random sample, and n ≤ 10% of N when sampling without replacement."
  - "If the population is normal, x̄ is normal for any n. If not, x̄ is approximately normal when n ≥ 30; extreme skew needs a larger n."
  - "To find a probability, standardise with σx̄, not σ: z = (x̄ − μ) / (σ/√n)."
  - "Multiplying n by 4 halves σx̄. Means of larger samples vary less."
faqs:
  - question: "Why does the sample size not appear in the mean of x̄?"
    answer: "Every sample size gives sample means that balance at μ. A larger sample changes how tightly the sample means cluster around μ, not where they are centred. That is why n appears only in the standard deviation, σ/√n."
  - question: "Do I need n ≥ 30 for the formula σ/√n?"
    answer: "No. The formula needs independent values: a random sample, and the 10% condition when sampling without replacement. The n ≥ 30 rule is only about the shape: it lets you use a normal model when the population is not normal."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## From proportions to means

Unit 3 was about a categorical variable and the sample proportion p̂. Unit 4 is about a **quantitative** variable, such as a mass, a time or a distance, and the **sample mean** x̄.

Suppose a poultry farm's eggs have a mean mass of 62 g. If an inspector weighs a random sample of 8 eggs, the sample mean will rarely be exactly 62 g. One sample might give 60.4 g, the next 63.1 g. The **sampling distribution of x̄** is the distribution of x̄ over all possible random samples of the same size (Topic 2.12). This topic gives you its centre, its spread and the conditions that tell you when its shape is normal.

Keep the three distributions apart:

| Distribution of… | What the values are | Egg example |
|---|---|---|
| the **population** | one value per individual | mass of every egg laid that day; mean μ, standard deviation σ |
| a **sample** | one value per sampled individual | 8 masses, with sample mean x̄ and standard deviation s |
| the **sampling distribution** | one x̄ per possible sample | many values of x̄, centred at μ |

## Mean and standard deviation of x̄

For a population with mean μ and standard deviation σ, when the sampled values are independent:

- **Mean:** μx̄ = **μ**
- **Standard deviation:** σx̄ = **σ / √n**

The first result says that **x̄ is an unbiased estimator of μ**. Sample means do not tend to be too high or too low; they balance at the population mean.

The second says that **sample means vary less than individual values**, and less again as n grows. Averaging lets high and low values cancel out. Because of the square root, you must multiply n by **4** to **halve** σx̄, and by 9 to divide it by 3.

| Sample size n | 1 | 4 | 8 | 16 | 64 |
|---|---|---|---|---|---|
| σx̄ = 5/√n (g), for eggs with σ = 5 g | 5 | 2.5 | 1.7678 | 1.25 | 0.625 |

With n = 1, x̄ is just one egg, so σx̄ = σ. Every column after that is narrower.

## The conditions

There are two separate questions. Is the **standard deviation formula** accurate? And is the **shape** normal?

| Condition | What to check | What it gives you |
|---|---|---|
| Randomization | The data come from a random sample. | Independent values and an unbiased x̄. |
| 10% | When sampling without replacement, n ≤ 10% of N, where N is the population size. | Values close enough to independent for σ/√n to be accurate. |
| Normal shape (one of these) | The population can be modelled by a normal distribution, **or** n ≥ 30. | The sampling distribution of x̄ is normal (exactly) or approximately normal. |

**The shape rule in detail.**

- **Normal population:** x̄ is normal for **any** sample size, even n = 2.
- **Non-normal population:** the central limit theorem (Topic 2.12) says x̄ is approximately normal when n is large. The course's guideline is **n ≥ 30**.
- **Extremely skewed population:** n = 30 may not be enough. A sample size well above 30 may be needed before x̄ looks normal.
- **Non-normal population and n < 30:** do **not** use a normal model. The sampling distribution keeps some of the population's skew.

Check every condition **in context with numbers**: "Random: the inspector chose 8 of the day's eggs at random. 10%: 8 ≤ 10% of 12,000 = 1,200" earns more than a tick.

## Picturing the sampling distribution

<figure>
<svg viewBox="0 0 640 310" role="img" aria-labelledby="xbar-title xbar-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="xbar-title">Population distribution of egg masses compared with the sampling distribution of the mean of 8 eggs</title>
<desc id="xbar-desc">A horizontal axis of egg mass in grams runs from 48 to 76. Two bell-shaped curves are both centred at 62 grams. The solid curve is low and wide: it is the population of single eggs, with standard deviation 5 grams. The dashed curve is tall and narrow: it is the sampling distribution of the sample mean for samples of 8 eggs, with standard deviation 1.77 grams. A vertical dotted line rises at 60 grams. The area under the dashed curve to the left of 60 is hatched and labelled P of x-bar less than 60 is about 0.129. A label beside the solid curve says P of one egg less than 60 is about 0.345.</desc>
<defs>
<pattern id="xbar-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
<line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="2"/>
</pattern>
</defs>
<rect x="0" y="0" width="640" height="310" fill="#ffffff"/>
<path d="M195.0,240 L195.0,239.9 L199.8,239.9 L204.6,239.8 L209.5,239.7 L214.3,239.4 L219.1,239.1 L223.9,238.6 L228.8,237.9 L233.6,236.8 L238.4,235.3 L243.2,233.1 L248.0,230.3 L252.9,226.5 L257.7,221.6 L262.5,215.3 L267.3,207.7 L272.1,198.5 L277.0,187.8 L281.8,175.6 L286.6,162.1 L291.4,147.7 L291.4,240 Z" fill="url(#xbar-hatch)" stroke="none"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="60.0,238.8 69.6,238.4 79.3,237.9 88.9,237.3 98.6,236.5 108.2,235.6 117.9,234.5 127.5,233.2 137.1,231.6 146.8,229.8 156.4,227.8 166.1,225.4 175.7,222.8 185.4,219.9 195.0,216.8 204.6,213.4 214.3,209.9 223.9,206.2 233.6,202.5 243.2,198.7 252.9,195.1 262.5,191.6 272.1,188.3 281.8,185.4 291.4,182.9 301.1,180.9 310.7,179.4 320.4,178.4 330.0,178.1 339.6,178.4 349.3,179.4 358.9,180.9 368.6,182.9 378.2,185.4 387.9,188.3 397.5,191.6 407.1,195.1 416.8,198.7 426.4,202.5 436.1,206.2 445.7,209.9 455.4,213.4 465.0,216.8 474.6,219.9 484.3,222.8 493.9,225.4 503.6,227.8 513.2,229.8 522.9,231.6 532.5,233.2 542.1,234.5 551.8,235.6 561.4,236.5 571.1,237.3 580.7,237.9 590.4,238.4 600.0,238.8"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="7 4" points="195.0,239.9 199.8,239.9 204.6,239.8 209.5,239.7 214.3,239.4 219.1,239.1 223.9,238.6 228.8,237.9 233.6,236.8 238.4,235.3 243.2,233.1 248.0,230.3 252.9,226.5 257.7,221.6 262.5,215.3 267.3,207.7 272.1,198.5 277.0,187.8 281.8,175.6 286.6,162.1 291.4,147.7 296.2,132.8 301.1,117.9 305.9,103.7 310.7,90.9 315.5,80.1 320.4,71.9 325.2,66.7 330.0,65.0 334.8,66.7 339.6,71.9 344.5,80.1 349.3,90.9 354.1,103.7 358.9,117.9 363.8,132.8 368.6,147.7 373.4,162.1 378.2,175.6 383.0,187.8 387.9,198.5 392.7,207.7 397.5,215.3 402.3,221.6 407.1,226.5 412.0,230.3 416.8,233.1 421.6,235.3 426.4,236.8 431.2,237.9 436.1,238.6 440.9,239.1 445.7,239.4 450.5,239.7 455.4,239.8 460.2,239.9 465.0,239.9"/>
<line x1="40" y1="240" x2="600" y2="240" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="60" y1="240" x2="60" y2="247"/><line x1="137.1" y1="240" x2="137.1" y2="247"/><line x1="214.3" y1="240" x2="214.3" y2="247"/><line x1="291.4" y1="240" x2="291.4" y2="247"/><line x1="368.6" y1="240" x2="368.6" y2="247"/><line x1="445.7" y1="240" x2="445.7" y2="247"/><line x1="522.9" y1="240" x2="522.9" y2="247"/><line x1="600" y1="240" x2="600" y2="247"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="60" y="263">48</text><text x="137.1" y="263">52</text><text x="214.3" y="263">56</text><text x="291.4" y="263">60</text><text x="368.6" y="263">64</text><text x="445.7" y="263">68</text><text x="522.9" y="263">72</text><text x="600" y="263">76</text>
</g>
<text x="330" y="290" text-anchor="middle" font-size="14" fill="#1d2b44">Egg mass (g)</text>
<line x1="291.4" y1="110" x2="291.4" y2="240" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 3"/>
<text x="345" y="52" text-anchor="start" font-size="13" fill="#1d2b44">dashed: x̄ for n = 8, σx̄ ≈ 1.77 g</text>
<text x="470" y="200" text-anchor="start" font-size="13" fill="#1d2b44">solid: one egg, σ = 5 g</text>
<text x="40" y="120" text-anchor="start" font-size="13" fill="#1d2b44">hatched: P(x̄ &lt; 60) ≈ 0.129</text>
<text x="40" y="160" text-anchor="start" font-size="13" fill="#1d2b44">P(one egg &lt; 60) ≈ 0.345</text>
</svg>
<figcaption>Figure 1. Egg masses at a fictional farm are normal with μ = 62 g and σ = 5 g (solid curve). Means of random samples of 8 eggs (dashed curve) have the same centre but a standard deviation of 5/√8 ≈ 1.77 g. A light average is less likely than a light single egg (Worked example 1).</figcaption>
</figure>

## Worked example 1: a normal population and a small sample

**Question.** At the fictional Brackenfield poultry farm, the masses of the 12,000 eggs laid each day can be modelled by a normal distribution with mean 62 g and standard deviation 5 g. An inspector selects a random sample of 8 eggs.

(a) Find the mean and standard deviation of the sampling distribution of x̄, and check the conditions.
(b) Find the probability that the sample mean mass is less than 60 g. Compare it with the probability that **one** randomly chosen egg has a mass less than 60 g.
(c) Interpret σx̄ in context.

**(a)**

1. μx̄ = μ = **62 g**.
2. σx̄ = 5/√8 = 5/2.8284 ≈ **1.7678 g**.
3. **Randomization:** the inspector selects the 8 eggs at random. ✓
4. **10%:** 8 ≤ 10% of 12,000 = 1,200. ✓ So the formula σ/√n is accurate.
5. **Shape:** the population is normal, so the sampling distribution of x̄ is normal, even though n = 8 is small. ✓

**(b)**

1. Sample mean: z = (60 − 62)/1.7678 ≈ −1.1314, so P(x̄ < 60) ≈ **0.1289**.
2. One egg: z = (60 − 62)/5 = −0.4, so P(X < 60) ≈ **0.3446**.

About 34% of single eggs weigh less than 60 g, but only about 13% of random samples of 8 eggs have a **mean** below 60 g. Light and heavy eggs tend to cancel out in an average.

**(c)** In random samples of 8 eggs from a day's production at Brackenfield, the sample mean mass typically differs from the population mean of 62 g by about 1.77 g.

**Check.** The same idea works for a middle interval. P(61 < x̄ < 63) ≈ 0.4284, but P(61 < X < 63) ≈ 0.1585 for one egg. Sample means cluster much more tightly around 62 g.

## Worked example 2: a skewed population and a larger sample

**Question.** The fictional city of Danbury runs a shared e-scooter scheme. In one week there were 30,000 trips. Trip distances are **strongly skewed to the right**: most trips are short, a few are long. The mean distance is 2.6 km and the standard deviation is 1.9 km. An analyst selects a random sample of 50 trips.

(a) Describe the sampling distribution of x̄, the sample mean distance, with checks.
(b) Find the probability that the sample mean is greater than 3.0 km, and interpret it.
(c) Between which two values do the middle 95% of sample means lie (approximately)?
(d) How large a sample would make σx̄ at most 0.2 km?
(e) A colleague suggests a sample of 12 trips instead. Could you still use a normal model for x̄? Explain.

**(a)**

1. Centre: μx̄ = **2.6 km**.
2. Spread: σx̄ = 1.9/√50 ≈ **0.2687 km**.
3. **Randomization:** random sample of trips. ✓ **10%:** 50 ≤ 10% of 30,000 = 3,000. ✓
4. **Shape:** the population is not normal, but n = 50 ≥ 30, so by the central limit theorem the sampling distribution of x̄ is **approximately normal**. ✓

**(b)** z = (3.0 − 2.6)/0.2687 ≈ 1.4886, so P(x̄ > 3.0) ≈ **0.0683**.

Interpretation: if the analyst took many random samples of 50 trips from that week, about 6.8% of them would have a mean distance greater than 3.0 km.

**(c)** About 95% of a normal distribution lies within 1.96 standard deviations of its mean: 2.6 ± 1.96(0.2687) = 2.6 ± 0.5267, so from about **2.07 km to 3.13 km**.

**(d)** Solve 1.9/√n ≤ 0.2. Then √n ≥ 9.5, so n ≥ 90.25. Round **up**: n = **91** trips. (Check: 1.9/√91 ≈ 0.1992, but 1.9/√90 ≈ 0.2003.)

**(e)** No. The population is strongly skewed and n = 12 is less than 30. The sampling distribution of x̄ would still be skewed to the right, so normal probabilities would be unreliable. The formula σx̄ = 1.9/√12 ≈ 0.5485 km is still correct, because it depends only on independence, not on the shape.

## Interpreting results in context

Every interpretation names the statistic, the population and the sample size, and refers to repeated random sampling.

- **Mean of x̄:** "If we took many random samples of [n] [individuals] from [population], the sample means would average [μ, units]."
- **Standard deviation of x̄:** "In random samples of [n] [individuals], the sample mean [variable] typically differs from the population mean of [μ] by about [σx̄, units]."
- **Probability:** "About [P × 100]% of random samples of [n] [individuals] would have a mean [variable] [above/below] [value]."

A probability about x̄ can also test a claim. If a claimed μ makes your observed x̄ very unlikely, you have reason to doubt the claim. This idea becomes the significance test for a mean in Topic 4.5.

## Common misconceptions

- **Using σ instead of σ/√n.** A question about an **average** needs σx̄. Using σ answers a question about one individual.
- **"The central limit theorem makes the data normal."** It makes the **sampling distribution of x̄** approximately normal. The 50 trip distances in one sample are still skewed.
- **"n ≥ 30 is needed for every normal calculation."** If the population is normal, x̄ is normal for any n.
- **"n ≥ 30 is always enough."** For an extremely skewed population, a much larger n may be needed.
- **Mixing up the 10% condition and the normal-shape condition.** The 10% condition is about independence and the standard deviation formula. It says nothing about shape.
- **Thinking a bigger sample moves the centre.** n changes the spread of x̄, never its mean.
- **Halving σx̄ by doubling n.** The square root means you need four times the sample size.
- **Rounding n down.** When a sample size must meet a target, always round **up**.

## Where this leads

Topic 4.2 uses the sample standard deviation s in place of the unknown σ, which leads to t-distributions and a confidence interval for μ: [Constructing a Confidence Interval for a Population Mean or Population Mean Difference](/advanced-course-resources/statistics/4-2-constructing-confidence-interval-population-mean-study-guide/). Try the [practice questions](/advanced-course-resources/statistics/4-1-sampling-distributions-sample-means-practice/) now, then use the [revision notes](/advanced-course-resources/statistics/4-1-sampling-distributions-sample-means-revision-notes/) and the [checklist](/advanced-course-resources/statistics/4-1-sampling-distributions-sample-means-checklist/) to consolidate. To review the proportion version of these ideas, return to [Topic 3.2](/advanced-course-resources/statistics/3-2-sampling-distributions-sample-proportions-study-guide/).
