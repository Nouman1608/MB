---
resourceId: "mb-ap-stats-3.3-study-guide"
title: "Constructing a Confidence Interval for a Population Proportion: Study Guide (Statistics 3.3)"
description: "Learn to name the one-sample z-interval, define the parameter in context, check the three conditions, find z*, the standard error and margin of error, and plan a sample size."
course: "statistics"
unit: 3
topics: ["3.3"]
resourceType: "study-guide"
prerequisites:
  - "The sampling distribution of a sample proportion: mean p and standard deviation √[p(1 − p)/n] (Topic 3.2)"
  - "Finding areas and boundary values under a normal distribution with a calculator"
prerequisiteResources: ["mb-ap-stats-3.2-study-guide"]
learningObjectives:
  - "Name the one-sample z-interval for a population proportion and define the parameter with the proportion, the response variable and the population"
  - "Check the random, 10% and large-counts conditions, linking each one to the context"
  - "Find the critical value z* for any confidence level and use it to build p̂ ± z* √[p̂(1 − p̂)/n]"
  - "Calculate and explain the standard error and the margin of error of a sample proportion"
  - "Work back from an interval to its point estimate and margin of error, and find the smallest sample size that gives a chosen margin of error"
skills: ["2", "3", "4"]
studyMinutes: 45
difficulty: "core"
calculator: "graphing"
calculatorNote: "Find z* with the inverse normal function, using the area to the left of z*, which is (1 + C)/2. Keep p̂ unrounded until the end; give interval endpoints to 3 decimal places. A calculator's one-proportion z-interval function is a good check."
related: ["mb-ap-stats-3.3-revision-notes", "mb-ap-stats-3.3-practice", "mb-ap-stats-3.3-checklist"]
next: "mb-ap-stats-3.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "The procedure is a one-sample z-interval for p: p̂ ± z* √[p̂(1 − p̂)/n]."
  - "Define p in context: the proportion of [population] who [response]."
  - "Conditions: a random sample; n ≤ 10% of the population; at least 10 observed successes and 10 observed failures."
  - "Standard error SE = √[p̂(1 − p̂)/n]; margin of error = z* × SE, which is half the width of the interval."
  - "For a planned margin of error, n ≥ (z*/MOE)² × p̂(1 − p̂); use p̂ = 0.5 if you have no estimate, and always round n up."
faqs:
  - question: "Why do the conditions use p̂ and not p?"
    answer: "You are estimating p because you do not know it. So the large-counts check uses the observed numbers of successes and failures, np̂ and n(1 − p̂), which you can count from the sample."
  - question: "Why use p̂ = 0.5 when planning a sample size?"
    answer: "The product p̂(1 − p̂) is largest when p̂ = 0.5 (it equals 0.25). Using 0.5 gives the biggest sample size you could need, so the margin of error will be no larger than planned whatever the true proportion turns out to be."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## From one number to a range of values

In Topic 3.2 you saw that a sample proportion p̂ varies from sample to sample. So when you use one sample to estimate a population proportion p, a single number (a **point estimate**) is almost certainly a little wrong. You do not know by how much.

A **confidence interval** fixes this. It is an **interval estimate**: a range of plausible values for the parameter, built from the sample. It has the form

**point estimate ± margin of error**

For one population proportion, the course uses the **one-sample z-interval for a population proportion**:

**p̂ ± z* √[ p̂(1 − p̂) / n ]**

Here p̂ is the sample proportion, n is the sample size and z* is a critical value from the standard normal distribution. This guide explains each piece, the conditions you must check first, and how to plan a sample size. Interpreting the interval and using it to judge a claim is Topic 3.4.

## Step 1: name the procedure and define the parameter

On an exam, you are expected to identify the method by **name** (or by formula). Write: "one-sample z-interval for a population proportion".

Then define the **parameter** p in words. A good definition has three parts:

- **the proportion** (not "the number" or "the percentage of the sample");
- **the response variable**, i.e. what counts as a "success";
- **the population**, not the sample.

Weak: "p = proportion who said yes."
Strong: "p = the proportion of **all adult residents of Hollin Vale** who **used the town library in the past month**."

The parameter is always about the population. The sample gives you p̂, which is a statistic, not the parameter.

## Step 2: check the three conditions

The interval is only trustworthy when these conditions hold. Check each one **in context**, with numbers.

| Condition | What to check | Why it matters |
|---|---|---|
| Random | The data come from a random sample. | Without randomness, p̂ may be biased and the interval's confidence level means nothing. |
| 10% | When sampling without replacement, n ≤ 10% of the population size N, that is, N ≥ 10n. | Keeps the observations close enough to independent for the standard-error formula to hold. |
| Large counts (normality) | The observed successes np̂ and observed failures n(1 − p̂) are **both at least 10**. | Makes the sampling distribution of p̂ approximately normal, so z* is the right multiplier. |

Two points students often miss:

- The large-counts check uses **observed counts** from the sample. In Topic 3.2 you used np and n(1 − p) because p was known. Here p is unknown, so you use p̂.
- Writing "SRS ✓" earns little. Say *what* was random: "The 750 adults were selected at random from the town's electoral roll."

## Step 3: the critical value z*

The critical value z* is the number of standard errors you go out on each side of p̂. It comes from the **standard normal distribution**: −z* and z* are the boundaries of the **middle C%** of the curve, where C% is the confidence level.

<figure>
<svg viewBox="0 0 640 240" role="img" aria-labelledby="zstar-title zstar-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="zstar-title">Standard normal curve showing the middle 95% between z = −1.96 and z = 1.96</title>
<desc id="zstar-desc">A bell-shaped standard normal curve over a horizontal z-axis from −3 to 3. The region under the curve between z = −1.96 and z = 1.96 is shaded and labelled "middle 95%". Each unshaded tail is labelled 0.025. Vertical lines mark −z* = −1.96 and z* = 1.96. The area to the left of z* is 0.975.</desc>
<rect x="0" y="0" width="640" height="240" fill="#ffffff"/>
<path d="M174.4 180 L174.4 160.7 L183.5 155.7 L192.6 149.7 L201.7 143 L210.8 135.3 L219.9 126.9 L229 117.8 L238.1 108.3 L247.2 98.6 L256.3 88.9 L265.4 79.5 L274.5 70.9 L283.6 63.2 L292.7 56.9 L301.8 52.2 L310.9 49.3 L320 48.3 L329.1 49.3 L338.2 52.2 L347.3 56.9 L356.4 63.2 L365.5 70.9 L374.6 79.5 L383.7 88.9 L392.8 98.6 L401.9 108.3 L411 117.8 L420.1 126.9 L429.2 135.3 L438.3 143 L447.4 149.7 L456.5 155.7 L465.6 160.7 L465.6 180 Z" fill="#c9d6ea"/>
<path d="M60 179.7 L69.3 179.6 L78.6 179.3 L87.9 179 L97.1 178.5 L106.4 177.9 L115.7 177 L125 175.8 L134.3 174.2 L143.6 172.2 L152.9 169.5 L162.1 166.2 L171.4 162.2 L180.7 157.3 L190 151.5 L199.3 144.8 L208.6 137.3 L217.9 128.8 L227.1 119.7 L236.4 110.1 L245.7 100.1 L255 90.2 L264.3 80.6 L273.6 71.7 L282.9 63.8 L292.1 57.3 L301.4 52.4 L310.7 49.4 L320 48.3 L329.3 49.4 L338.6 52.4 L347.9 57.3 L357.1 63.8 L366.4 71.7 L375.7 80.6 L385 90.2 L394.3 100.1 L403.6 110.1 L412.9 119.7 L422.1 128.8 L431.4 137.3 L440.7 144.8 L450 151.5 L459.3 157.3 L468.6 162.2 L477.9 166.2 L487.1 169.5 L496.4 172.2 L505.7 174.2 L515 175.8 L524.3 177 L533.6 177.9 L542.9 178.5 L552.1 179 L561.4 179.3 L570.7 179.6 L580 179.7" fill="none" stroke="#1d2b44" stroke-width="2"/>
<line x1="60" y1="180" x2="580" y2="180" stroke="#1d2b44" stroke-width="2"/>
<line x1="174.4" y1="40" x2="174.4" y2="180" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<line x1="465.6" y1="40" x2="465.6" y2="180" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="97.1" y="198">−3</text><text x="245.7" y="198">−1</text><text x="320" y="198">0</text><text x="394.3" y="198">1</text><text x="542.9" y="198">3</text>
<text x="174.4" y="216">−z* = −1.96</text><text x="465.6" y="216">z* = 1.96</text>
<text x="320" y="140" font-size="15">middle 95%</text>
<text x="120" y="160">0.025</text><text x="520" y="160">0.025</text>
<text x="465.6" y="34">area to the left of z* = 0.975</text>
</g>
<text x="590" y="184" font-size="13" fill="#1d2b44">z</text>
</svg>
<figcaption>Figure 1. For 95% confidence, the middle 95% of the standard normal curve (shaded and labelled) lies between −1.96 and 1.96. Each tail holds (1 − 0.95)/2 = 0.025.</figcaption>
</figure>

To find z* for any confidence level C:

1. Each tail holds (1 − C)/2.
2. So the area to the **left** of z* is (1 + C)/2.
3. Use the inverse normal function with that area, mean 0 and standard deviation 1.

| Confidence level C | Area in each tail | Area to the left of z* | z* |
|---|---|---|---|
| 80% | 0.10 | 0.90 | 1.282 |
| 90% | 0.05 | 0.95 | 1.645 |
| 95% | 0.025 | 0.975 | 1.960 |
| 98% | 0.01 | 0.99 | 2.326 |
| 99% | 0.005 | 0.995 | 2.576 |

A common slip is to put C itself into the inverse normal function. For 90%, invNorm(0.90) gives 1.282, which is the 80% critical value.

## Step 4: standard error and margin of error

**Standard error.** In Topic 3.2 the standard deviation of p̂ was √[p(1 − p)/n]. We cannot calculate it now, because p is unknown. So we replace p with p̂. The result is the **standard error** of p̂:

**SE(p̂) = √[ p̂(1 − p̂) / n ]**

The standard error estimates the standard deviation of the sampling distribution of p̂. In words: it is roughly how far p̂ typically lands from the true p in repeated random samples of this size.

**Margin of error.** The margin of error (MOE) is the critical value times the standard error:

**MOE = z* × SE(p̂) = z* √[ p̂(1 − p̂) / n ]**

The margin of error is **half the width** of the interval. The interval runs from p̂ − MOE to p̂ + MOE.

**Working backwards.** Because the interval is symmetric about p̂, you can recover both pieces from any reported interval (a, b):

- point estimate p̂ = (a + b) ÷ 2
- margin of error = (b − a) ÷ 2

For example, a report gives the 95% interval (0.312, 0.388). Then p̂ = 0.700 ÷ 2 = 0.350 and MOE = 0.076 ÷ 2 = 0.038. The standard error is 0.038 ÷ 1.96 ≈ 0.01939, and solving 0.35 × 0.65 ÷ n = 0.01939² gives n ≈ 605 people.

<figure>
<svg viewBox="0 0 640 170" role="img" aria-labelledby="ci-title ci-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ci-title">A confidence interval drawn on a number line</title>
<desc id="ci-desc">A number line from 0.30 to 0.45. A thick horizontal bar runs from 0.337 to 0.407. A dot in the middle of the bar marks the point estimate p-hat = 0.372. Brackets above the bar show the margin of error, 0.035, on each side of the dot. A brace below labels the full width as 2 times the margin of error.</desc>
<rect x="0" y="0" width="640" height="170" fill="#ffffff"/>
<line x1="60" y1="110" x2="580" y2="110" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="60" y1="110" x2="60" y2="117"/><line x1="129.3" y1="110" x2="129.3" y2="117"/><line x1="198.7" y1="110" x2="198.7" y2="117"/><line x1="268" y1="110" x2="268" y2="117"/><line x1="337.3" y1="110" x2="337.3" y2="117"/><line x1="406.7" y1="110" x2="406.7" y2="117"/><line x1="476" y1="110" x2="476" y2="117"/><line x1="545.3" y1="110" x2="545.3" y2="117"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="60" y="133">0.30</text><text x="129.3" y="133">0.32</text><text x="198.7" y="133">0.34</text><text x="268" y="133">0.36</text><text x="337.3" y="133">0.38</text><text x="406.7" y="133">0.40</text><text x="476" y="133">0.42</text><text x="545.3" y="133">0.44</text>
</g>
<line x1="188.3" y1="85" x2="430.9" y2="85" stroke="#1d2b44" stroke-width="6"/>
<line x1="188.3" y1="75" x2="188.3" y2="95" stroke="#1d2b44" stroke-width="2"/>
<line x1="430.9" y1="75" x2="430.9" y2="95" stroke="#1d2b44" stroke-width="2"/>
<circle cx="309.6" cy="85" r="7" fill="#ffffff" stroke="#1d2b44" stroke-width="2.5"/>
<path d="M188.3 62 V54 H307 V62" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M312 62 V54 H430.9 V62" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="248" y="47">MOE ≈ 0.035</text><text x="371" y="47">MOE ≈ 0.035</text>
<text x="309.6" y="22">p̂ = 0.372</text>
<text x="188.3" y="155">0.337</text><text x="430.9" y="155">0.407</text>
<text x="309.6" y="155">width = 2 × MOE</text>
</g>
<line x1="309.6" y1="28" x2="309.6" y2="76" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 3"/>
</svg>
<figcaption>Figure 2. The 95% interval from Worked example 1. The point estimate p̂ = 0.372 sits in the middle; the margin of error (about 0.035) is added and subtracted, so the width is twice the margin of error.</figcaption>
</figure>

## Worked example 1: a 95% interval from start to finish

**Question.** Hollin Vale, a fictional town, has about 42,000 adult residents. The council selected 750 adults at random from the electoral roll and asked whether they had used the town library in the past month. 279 said yes. Construct a 95% confidence interval for the proportion of all adult residents who used the library in the past month.

**Identify.** One-sample z-interval for a population proportion. Let p = the proportion of all adult residents of Hollin Vale who used the town library in the past month.

**Check conditions.**

1. **Random:** the 750 adults were chosen at random from the electoral roll.
2. **10%:** 750 ≤ 10% of 42,000 = 4,200. ✓
3. **Large counts:** 279 successes and 750 − 279 = 471 failures, both at least 10. ✓

**Calculate.**

1. p̂ = 279 ÷ 750 = 0.372.
2. SE = √(0.372 × 0.628 ÷ 750) = 0.01765.
3. For 95% confidence, z* = 1.960.
4. MOE = 1.960 × 0.01765 = 0.0346.
5. Interval: 0.372 ± 0.0346 = **(0.337, 0.407)**.

**Check.** A calculator's one-proportion z-interval with x = 279, n = 750 and C-level 0.95 gives the same interval. The interval is centred on 0.372, and its half-width is the margin of error.

**Conclude (preview of Topic 3.4).** We are 95% confident that the interval from 0.337 to 0.407 captures the proportion of all adult residents of Hollin Vale who used the library in the past month.

## Worked example 2: a different confidence level and a small success count

**Question.** A fictional online shop sent 15,000 orders last month. A manager took a random sample of 200 of these orders; 23 of them arrived late. (a) Construct a 99% confidence interval for the proportion of last month's orders that arrived late. (b) Without recalculating, would a 95% interval be wider or narrower?

**(a) Identify.** One-sample z-interval for p, where p = the proportion of all orders sent last month that arrived late.

**Check conditions.**

1. **Random:** the 200 orders were a random sample of last month's orders.
2. **10%:** 200 ≤ 10% of 15,000 = 1,500. ✓
3. **Large counts:** 23 late (successes) and 177 on time (failures). Both are at least 10. ✓ (23 is not far above 10, but the condition is met.)

**Calculate.**

1. p̂ = 23 ÷ 200 = 0.115.
2. SE = √(0.115 × 0.885 ÷ 200) = 0.02256.
3. For 99% confidence, the area to the left of z* is 0.995, so z* = 2.576.
4. MOE = 2.576 × 0.02256 = 0.0581.
5. Interval: 0.115 ± 0.0581 = **(0.057, 0.173)**.

**(b)** Narrower. A 95% interval uses z* = 1.960 instead of 2.576, so the margin of error is smaller. (The 95% interval is (0.071, 0.159).) Topic 3.4 explores this trade-off.

**What if the condition had failed?** Suppose only 6 of the 200 orders had been late. Then np̂ = 6 < 10, the sampling distribution of p̂ would be noticeably skewed, and the z-interval should not be used. Say so clearly rather than calculating anyway.

## Worked example 3: choosing a sample size

**Question.** A fictional sports club wants to estimate the proportion of its members who would pay for a new indoor court, with 90% confidence and a margin of error of no more than 0.03 (3 percentage points). (a) How many members should it survey if it has no prior estimate? (b) A pilot survey suggests about 20% would pay. How many now?

**Set up.** Start from MOE = z* √[p̂(1 − p̂)/n] and solve for n:

**n = (z* / MOE)² × p̂(1 − p̂)**

For 90% confidence, z* = 1.645.

**(a)** With no estimate, use p̂ = 0.5, so p̂(1 − p̂) = 0.25.

n = (1.645 ÷ 0.03)² × 0.25 = 751.67…

Round **up** to **752 members**. Rounding down to 751 would give a margin of error slightly above 0.03.

**(b)** With p̂ = 0.2, p̂(1 − p̂) = 0.16.

n = (1.645 ÷ 0.03)² × 0.16 = 481.07…

Round up to **482 members**.

**Why p̂ = 0.5 is the safe choice.** The product p̂(1 − p̂) is 0.09 at 0.1, 0.21 at 0.3, 0.25 at 0.5 and 0.21 at 0.7. It is largest at 0.5. So using 0.5 gives an upper bound on the sample size: 752 members is enough whatever the true proportion is.

**Check.** The 10% condition still matters. If the club has only 3,000 members, a sample of 752 is more than 300, so the 10% condition would fail and the plan should be rethought.

## Common misconceptions

- **"The parameter is p̂."** p̂ is the sample proportion you calculate. The parameter p is the unknown population proportion you are estimating.
- **Defining p as "the proportion of the 750 adults".** That is p̂. The parameter refers to all adults in the population.
- **Checking large counts with n ≥ 30.** For proportions the check is about counts: at least 10 successes **and** at least 10 failures in the sample.
- **Using np and n(1 − p) with a made-up p.** For a confidence interval, use the observed counts np̂ and n(1 − p̂).
- **Using invNorm(C) for z*.** Use the area to the left, (1 + C)/2. For 95%, that is invNorm(0.975) = 1.960.
- **"The margin of error is the width."** The width is 2 × MOE. The MOE is the distance from p̂ to either end.
- **Rounding a required sample size to the nearest whole number.** Always round up, or the margin of error will be a little too big.
- **"The margin of error covers every kind of mistake."** It only allows for random sampling variation. It does not fix bias from a poor sampling method, non-response or a leading question.

## Where this leads

Next, Topic 3.4 shows how to interpret the interval and the confidence level in context, how to use an interval to judge a claim, and how sample size and confidence level change the width: see [Justifying a Claim Based on a Confidence Interval for a Population Proportion](/advanced-course-resources/statistics/3-4-justifying-claim-based-on-confidence-study-guide/). Try the [practice questions](/advanced-course-resources/statistics/3-3-constructing-confidence-interval-population-proportion-practice/) now, then use the [revision notes](/advanced-course-resources/statistics/3-3-constructing-confidence-interval-population-proportion-revision-notes/) and the [checklist](/advanced-course-resources/statistics/3-3-constructing-confidence-interval-population-proportion-checklist/) to consolidate. If the sampling distribution of p̂ still feels shaky, revisit [Topic 3.2](/advanced-course-resources/statistics/3-2-sampling-distributions-sample-proportions-study-guide/).
