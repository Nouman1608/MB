---
resourceId: "mb-ap-stats-4.6-study-guide"
title: "Sampling Distributions for the Difference Between Two Sample Means: Study Guide (Statistics 4.6)"
description: "Find the mean and standard deviation of the sampling distribution of x̄₁ − x̄₂, check when it is normal or approximately normal, and calculate and interpret probabilities in context."
course: "statistics"
unit: 4
topics: ["4.6"]
resourceType: "study-guide"
prerequisites:
  - "The sampling distribution of one sample mean: mean μ and standard deviation σ/√n (Topic 4.1)"
  - "The sampling distribution of a difference in sample proportions (Topic 3.9)"
  - "Normal distributions, z-scores and normal probabilities (Topic 2.11)"
prerequisiteResources: ["mb-ap-stats-4.5-study-guide"]
learningObjectives:
  - "Calculate the mean and standard deviation of the sampling distribution of the difference between two sample means"
  - "Check the randomization and 10% conditions for two independent samples, and the randomization condition for an experiment"
  - "Decide whether the sampling distribution of x̄₁ − x̄₂ is normal or approximately normal from the population shapes and the sample sizes"
  - "Calculate probabilities about x̄₁ − x̄₂ with a normal model"
  - "Interpret the mean, the standard deviation and a probability for x̄₁ − x̄₂ in the context of the two populations"
skills: ["3", "4"]
studyMinutes: 45
difficulty: "core"
calculator: "graphing"
calculatorNote: "Use normalcdf (or a z-table) for normal probabilities. Keep at least 4 decimal places for the standard deviation and z-scores; round probabilities to 4 decimal places."
related: ["mb-ap-stats-4.6-revision-notes", "mb-ap-stats-4.6-practice", "mb-ap-stats-4.6-checklist"]
next: "mb-ap-stats-4.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "The sampling distribution of x̄₁ − x̄₂ has mean μ₁ − μ₂, so the difference in sample means is an unbiased estimator of the difference in population means."
  - "Its standard deviation is √(σ₁²/n₁ + σ₂²/n₂): add the two variances, then take one square root."
  - "Randomization: two independent random samples, or random assignment of treatments in an experiment. 10%: n₁ ≤ 10% of N₁ and n₂ ≤ 10% of N₂ (not needed for an experiment)."
  - "Shape: normal if both populations are normal; approximately normal if they are not but n₁ ≥ 30 and n₂ ≥ 30."
  - "Interpret every value for the two named populations, with the order of subtraction and units."
faqs:
  - question: "Why do the variances add when the means are subtracted?"
    answer: "Each sample mean varies on its own, and the two samples are independent. When you subtract, the random variation from both samples ends up in the difference, so it cannot cancel out. As background: for independent random variables, the variance of a difference is the sum of the variances."
  - question: "What if only one of the samples has 30 or more values?"
    answer: "For populations that are not normal, the course rule needs both n₁ ≥ 30 and n₂ ≥ 30. If one sample is small and its population is skewed, do not use a normal model for x̄₁ − x̄₂."
  - question: "Does this topic use s or σ?"
    answer: "σ. Here the population means and standard deviations are given, and you describe how x̄₁ − x̄₂ behaves. From Topic 4.7 onwards the parameters are unknown, so you estimate the standard deviation with s₁ and s₂ and use t-procedures."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Why compare two means?

Many questions compare two groups on a quantitative variable. Do bags from one factory weigh more than bags from another? Are gym sessions at one branch longer than at another? Does a caffeine drink help people cycle further? Each question is about a **difference between two population means**, μ₁ − μ₂.

You usually cannot measure everyone, so you take a sample from each group and find the two sample means, x̄₁ and x̄₂. Their difference, **x̄₁ − x̄₂**, estimates μ₁ − μ₂. Just like one sample mean (Topic 4.1), this difference changes from sample to sample. The distribution of x̄₁ − x̄₂ over all possible pairs of samples is its **sampling distribution**. This topic gives you its centre, its spread and the conditions for its shape to be normal.

Keep the notation straight:

| Symbol | Meaning | Type |
|---|---|---|
| μ₁, μ₂ | mean of population 1 and population 2 | parameters |
| σ₁, σ₂ | standard deviation of population 1 and population 2 | parameters |
| N₁, N₂ | sizes of population 1 and population 2 | population sizes |
| n₁, n₂ | sizes of sample 1 and sample 2 | sample sizes |
| x̄₁, x̄₂ | mean of sample 1 and sample 2 | statistics |
| x̄₁ − x̄₂ | difference in sample means | statistic (estimates μ₁ − μ₂) |

Choose an order of subtraction at the start, state it, and keep it. "Gym A − Gym B" is clear; "the difference" on its own is not.

## Mean and standard deviation of x̄₁ − x̄₂

Suppose the two samples are **independent** of each other and the values within each sample are independent. Then the sampling distribution of x̄₁ − x̄₂ has:

- **Mean:** μ(x̄₁ − x̄₂) = **μ₁ − μ₂**
- **Standard deviation:** σ(x̄₁ − x̄₂) = **√(σ₁²/n₁ + σ₂²/n₂)**

Why these make sense:

1. **The mean.** From Topic 4.1, the mean of x̄₁ is μ₁ and the mean of x̄₂ is μ₂. On average, the difference is the difference of the averages. So x̄₁ − x̄₂ is an **unbiased estimator** of μ₁ − μ₂.
2. **The standard deviation.** σ₁²/n₁ is the variance of x̄₁ and σ₂²/n₂ is the variance of x̄₂. The variances **add**, even though the means are subtracted, because each sample brings its own random error and the errors do not cancel.

Two warnings follow:

- Do **not** add or subtract the two standard deviations. Add the two **variances**, then take one square root.
- The standard deviation of the difference is always **larger** than the standard deviation of either sample mean on its own.

Larger samples still give less variability. If you multiply **both** sample sizes by 4, both variances are divided by 4, so the standard deviation is halved.

## The conditions and what each one is for

Check each condition **in context, with numbers**.

| Condition | What to check | What it guarantees |
|---|---|---|
| Randomization | Two **independent random samples**, one from each population; or, in an experiment, treatments **randomly assigned** to the experimental units | The samples are independent and x̄₁ − x̄₂ is unbiased |
| 10% | When sampling without replacement: n₁ ≤ 10% of N₁ **and** n₂ ≤ 10% of N₂ | Values within each sample are close enough to independent for the standard deviation formula |
| Shape | Both populations normal → the sampling distribution is **normal** (any sample sizes). Populations not normal → it is **approximately normal** if n₁ ≥ 30 **and** n₂ ≥ 30 | You may use a normal model for probabilities |

Points that cost marks:

- **Experiments.** If the data come from an experiment, the independence requirement is met by **random assignment** of the treatments. The 10% condition is not needed, because no one is sampled from a larger population. You still need the shape condition before using a normal model.
- **Both samples.** "n₁ + n₂ ≥ 30" is not the rule. Each sample must have at least 30 values when the populations are not normal.
- **Paired data are not independent samples.** If the same individuals are measured twice, take differences and use one-sample methods (Topics 4.2 to 4.5). The formula in this topic does not apply.

## Picturing the sampling distribution

<figure>
<svg viewBox="0 0 640 300" role="img" aria-labelledby="d46-title d46-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="d46-title">Approximately normal sampling distribution of the difference in sample mean session lengths, Gym A minus Gym B</title>
<desc id="d46-desc">A bell-shaped curve over a horizontal axis labelled difference in sample mean session length, Gym A minus Gym B, in minutes, marked from minus 5 to 15. The curve peaks at the mean, 7 minutes. A label above the peak reads mean 7, standard deviation 3.55. A dashed vertical line at 10 minutes marks the start of a region to its right that is hatched with diagonal lines and labelled P of the difference at least 10 is about 0.199. A dotted vertical line at 0 is labelled no difference; only a small part of the curve lies to its left.</desc>
<defs><pattern id="hatch46" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" fill="#d9dee8"/><line x1="0" y1="0" x2="0" y2="6" stroke="#1d2b44" stroke-width="1.5"/></pattern></defs>
<rect x="0" y="0" width="640" height="300" fill="#ffffff"/>
<path d="M385.0 220 L385.0 115.0 L390.4 121.3 L395.8 127.7 L401.2 134.1 L406.7 140.5 L412.1 146.7 L417.5 152.8 L422.9 158.7 L428.3 164.4 L433.8 169.7 L439.2 174.8 L444.6 179.6 L450.0 184.0 L455.4 188.2 L460.8 191.9 L466.2 195.4 L471.7 198.5 L477.1 201.4 L482.5 203.9 L487.9 206.2 L493.3 208.2 L498.8 209.9 L504.2 211.5 L509.6 212.8 L515.0 214.0 L520.4 215.0 L525.8 215.8 L531.2 216.5 L536.7 217.2 L542.1 217.7 L547.5 218.1 L552.9 218.5 L558.3 218.8 L563.8 219.0 L569.2 219.2 L574.6 219.4 L580.0 219.5 L580.0 220 Z" fill="url(#hatch46)" stroke="#1d2b44" stroke-width="1"/>
<path d="M60.0 219.5 L65.4 219.4 L70.8 219.2 L76.2 219.0 L81.7 218.8 L87.1 218.5 L92.5 218.1 L97.9 217.7 L103.3 217.2 L108.8 216.5 L114.2 215.8 L119.6 215.0 L125.0 214.0 L130.4 212.8 L135.8 211.5 L141.2 209.9 L146.7 208.2 L152.1 206.2 L157.5 203.9 L162.9 201.4 L168.3 198.5 L173.8 195.4 L179.2 191.9 L184.6 188.2 L190.0 184.0 L195.4 179.6 L200.8 174.8 L206.2 169.7 L211.7 164.4 L217.1 158.7 L222.5 152.8 L227.9 146.7 L233.3 140.5 L238.8 134.1 L244.2 127.7 L249.6 121.3 L255.0 115.0 L260.4 108.9 L265.8 102.9 L271.2 97.3 L276.7 92.0 L282.1 87.1 L287.5 82.8 L292.9 79.0 L298.3 75.8 L303.8 73.3 L309.2 71.4 L314.6 70.3 L320.0 70.0 L325.4 70.3 L330.8 71.4 L336.2 73.3 L341.7 75.8 L347.1 79.0 L352.5 82.8 L357.9 87.1 L363.3 92.0 L368.8 97.3 L374.2 102.9 L379.6 108.9 L385.0 115.0 L390.4 121.3 L395.8 127.7 L401.2 134.1 L406.7 140.5 L412.1 146.7 L417.5 152.8 L422.9 158.7 L428.3 164.4 L433.8 169.7 L439.2 174.8 L444.6 179.6 L450.0 184.0 L455.4 188.2 L460.8 191.9 L466.2 195.4 L471.7 198.5 L477.1 201.4 L482.5 203.9 L487.9 206.2 L493.3 208.2 L498.8 209.9 L504.2 211.5 L509.6 212.8 L515.0 214.0 L520.4 215.0 L525.8 215.8 L531.2 216.5 L536.7 217.2 L542.1 217.7 L547.5 218.1 L552.9 218.5 L558.3 218.8 L563.8 219.0 L569.2 219.2 L574.6 219.4 L580.0 219.5" fill="none" stroke="#1d2b44" stroke-width="2"/>
<line x1="40" y1="220" x2="600" y2="220" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5"><line x1="60.0" y1="220" x2="60.0" y2="227"/><line x1="168.3" y1="220" x2="168.3" y2="227"/><line x1="276.7" y1="220" x2="276.7" y2="227"/><line x1="385.0" y1="220" x2="385.0" y2="227"/><line x1="493.3" y1="220" x2="493.3" y2="227"/></g>
<g font-size="13" fill="#1d2b44" text-anchor="middle"><text x="60.0" y="242">−5</text><text x="168.3" y="242">0</text><text x="276.7" y="242">5</text><text x="385.0" y="242">10</text><text x="493.3" y="242">15</text></g>
<text x="320" y="268" text-anchor="middle" font-size="13" fill="#1d2b44">Difference in sample mean session length, Gym A − Gym B (minutes)</text>
<line x1="320.0" y1="70.0" x2="320.0" y2="220" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 3"/>
<text x="320.0" y="46.0" text-anchor="middle" font-size="13" fill="#1d2b44">mean 7</text>
<text x="320.0" y="62.0" text-anchor="middle" font-size="13" fill="#1d2b44">standard deviation 3.55</text>
<line x1="385.0" y1="92" x2="385.0" y2="220" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/>
<text x="393.0" y="100" text-anchor="start" font-size="13" fill="#1d2b44">hatched: P(difference ≥ 10) ≈ 0.199</text>
<line x1="168.3" y1="110" x2="168.3" y2="220" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 4"/>
<text x="168.3" y="104" text-anchor="middle" font-size="13" fill="#1d2b44">no difference</text>
</svg>
<figcaption>Figure 1. Sampling distribution of x̄A − x̄B for independent random samples of 40 Gym A sessions and 50 Gym B sessions, when μA = 62, σA = 18, μB = 55 and σB = 15 minutes (Worked example 2). The curve is centred at the true difference, 7 minutes. The hatched tail is the probability that the sample difference is 10 minutes or more.</figcaption>
</figure>

## Worked example 1: normal populations, small samples

**Question.** Two fictional factories fill bags of rice labelled 1 kg. At Factory P, fill weights are normally distributed with mean 1,004 g and standard deviation 6 g. At Factory Q, they are normally distributed with mean 1,000 g and standard deviation 8 g. An inspector selects a random sample of 10 of the 5,000 bags Factory P filled on one day and, independently, a random sample of 12 of the 8,000 bags Factory Q filled that day.

(a) Find the mean and standard deviation of the sampling distribution of x̄P − x̄Q. (b) Check the conditions for a normal model. (c) Interpret the mean and the standard deviation. (d) Find the probability that the Factory Q sample mean is greater than the Factory P sample mean.

**(a)**

1. Mean: μP − μQ = 1,004 − 1,000 = **4 g**.
2. Variance of x̄P: 6² ÷ 10 = 3.6. Variance of x̄Q: 8² ÷ 12 ≈ 5.3333.
3. Add: 3.6 + 5.3333 = 8.9333.
4. Standard deviation: √8.9333 ≈ **2.9889 g**.

**(b)**

1. **Randomization:** independent random samples from the two factories. ✓
2. **10%:** 10 ≤ 10% of 5,000 = 500 and 12 ≤ 10% of 8,000 = 800. ✓
3. **Shape:** both populations of fill weights are normal, so the sampling distribution of x̄P − x̄Q is normal, even though both samples are small. ✓

**(c)** Mean: over all possible pairs of random samples (10 bags from P, 12 from Q), the difference in sample mean fill weights (P − Q) averages 4 g, the true difference between the two factories' mean fill weights. Standard deviation: the difference in sample means (P − Q) typically varies from 4 g by about 2.99 g.

**(d)** "Q greater than P" means x̄P − x̄Q < 0.

1. z = (0 − 4) ÷ 2.9889 ≈ −1.3383.
2. P(x̄P − x̄Q < 0) ≈ **0.0904**.

So in about 9% of such pairs of samples, the Factory Q sample would have the larger mean, even though Factory P's true mean is 4 g higher.

**Check.** The separate standard deviations are 6/√10 ≈ 1.8974 g and 8/√12 ≈ 2.3094 g. The answer, 2.9889 g, is larger than each but smaller than their sum (4.2068 g), as it must be when variances add.

## Worked example 2: skewed populations, large samples

**Question.** Two branches of a fictional gym record how long each session lasts. Session lengths are skewed to the right at both branches. At Gym A (9,000 sessions last month), μA = 62 minutes and σA = 18 minutes. At Gym B (7,500 sessions), μB = 55 minutes and σB = 15 minutes. A manager takes independent random samples of 40 Gym A sessions and 50 Gym B sessions from last month.

(a) Find the mean and standard deviation of x̄A − x̄B and justify a normal model. (b) Find the probability that the Gym A sample mean is at least 10 minutes greater than the Gym B sample mean. (c) The manager's samples give x̄A = 71.4 and x̄B = 56.2 minutes. Is this difference surprising?

**(a)** Mean = 62 − 55 = **7 minutes**. Standard deviation = √(18²/40 + 15²/50) = √(8.1 + 4.5) = √12.6 ≈ **3.5496 minutes**.

- **Randomization:** independent random samples from each gym. ✓
- **10%:** 40 ≤ 900 and 50 ≤ 750. ✓
- **Shape:** the populations are skewed, not normal, but nA = 40 ≥ 30 and nB = 50 ≥ 30, so the sampling distribution is approximately normal. ✓

**(b)**

1. z = (10 − 7) ÷ 3.5496 ≈ 0.8452.
2. P(x̄A − x̄B ≥ 10) ≈ **0.1990** (the hatched tail in Figure 1).

Interpretation: if the stated means and standard deviations are correct, about 20% of pairs of random samples of these sizes would show a Gym A mean at least 10 minutes greater than the Gym B mean.

**(c)** x̄A − x̄B = 71.4 − 56.2 = 15.2 minutes.

1. z = (15.2 − 7) ÷ 3.5496 ≈ 2.3101.
2. P(x̄A − x̄B ≥ 15.2) ≈ **0.0104**.

If the true difference were 7 minutes, a sample difference of 15.2 minutes or more would happen in only about 1% of pairs of samples. That is unusual, so the samples **give reason to doubt** the stated values. They do not prove them wrong: unusual samples do happen. Formal tests come in Topics 4.9 and 4.10.

**Check.** normalcdf(10, 1000, 7, 3.5496) ≈ 0.1990. The chance that the Gym B sample mean is the larger one is P(x̄A − x̄B ≤ 0) ≈ 0.0243, the small area left of "no difference" in Figure 1.

## Worked example 3: an experiment

**Question.** A fictional sports scientist randomly assigns 70 volunteers, 35 to a caffeine drink (C) and 35 to a placebo drink (P). Each then cycles for 20 minutes on a static bike. Suppose that, for people like these volunteers, distance cycled has mean 9.4 km and standard deviation 1.2 km with caffeine, and mean 8.9 km and standard deviation 1.1 km with the placebo.

(a) Check the conditions for a normal model for x̄C − x̄P. (b) Find the probability that the placebo group cycles at least as far, on average, as the caffeine group. (c) What happens with 70 volunteers in each group?

**(a)**

1. **Randomization:** the drinks were randomly assigned to the volunteers. ✓ The 10% condition is not needed: this is an experiment, not a sample from a population.
2. **Shape:** the distance distributions are not stated to be normal, but both groups have 35 ≥ 30 volunteers, so the sampling distribution is approximately normal. ✓

**(b)** Mean = 9.4 − 8.9 = 0.5 km. Standard deviation = √(1.2²/35 + 1.1²/35) ≈ 0.2752 km. "Placebo at least as far" means x̄C − x̄P ≤ 0. z = (0 − 0.5) ÷ 0.2752 ≈ −1.8171, so the probability is about **0.0346**. Even if caffeine adds 0.5 km on average, about 3.5% of experiments like this would show no advantage.

**(c)** With 70 per group, both variances halve, so the standard deviation is divided by √2: about **0.1946 km**. Then z ≈ −2.5698 and the probability falls to about **0.0051**. Larger groups make a misleading result much less likely.

## When the normal model is not justified

Suppose the gyms in Worked example 2 had samples of only 15 and 20 sessions. The populations are skewed and neither sample has 30 values, so you cannot assume x̄A − x̄B is approximately normal. The mean (7 minutes) and standard deviation formulas still hold, because they need only independence, but **do not use a normal model** for probabilities.

## Common misconceptions

- **Adding the standard deviations** or **subtracting the variances.** Use √(σ₁²/n₁ + σ₂²/n₂).
- **Using n₁ + n₂ as one sample size.** Each variance uses its own sample size.
- **"n₁ + n₂ ≥ 30 is enough."** For non-normal populations, each sample needs at least 30 values.
- **Requiring large samples when both populations are normal.** If both populations are normal, x̄₁ − x̄₂ is normal for any sample sizes.
- **Checking the 10% condition for an experiment.** Random assignment replaces it.
- **Using this formula for paired data.** The same individuals measured twice give one sample of differences.
- **Not stating the order of subtraction.** A mean of −4 g and a mean of 4 g describe the same situation in different orders.
- **"A small probability proves the stated values are wrong."** It gives reason to doubt them; it is not proof.

## Where this leads

In practice μ₁, μ₂, σ₁ and σ₂ are unknown. Next, in [Topic 4.7, Constructing a Confidence Interval for the Difference Between Two Population Means](/advanced-course-resources/statistics/4-7-constructing-confidence-interval-difference-between-study-guide/), you replace σ₁ and σ₂ with s₁ and s₂ and use a t critical value. Try the [practice questions](/advanced-course-resources/statistics/4-6-sampling-distributions-difference-between-two-practice/) now, then use the [revision notes](/advanced-course-resources/statistics/4-6-sampling-distributions-difference-between-two-revision-notes/) and the [checklist](/advanced-course-resources/statistics/4-6-sampling-distributions-difference-between-two-checklist/) to consolidate. For the same ideas with proportions, see the [Topic 3.9 study guide](/advanced-course-resources/statistics/3-9-sampling-distributions-difference-between-sample-study-guide/).
