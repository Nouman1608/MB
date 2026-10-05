---
resourceId: "mb-ap-stats-4.7-study-guide"
title: "Constructing a Confidence Interval for the Difference Between Two Means: Study Guide (Statistics 4.7)"
description: "Learn when to use a two-sample t-interval, how to define μ₁ − μ₂ in context, check the three conditions, and calculate the standard error, margin of error and interval."
course: "statistics"
unit: 4
topics: ["4.7"]
resourceType: "study-guide"
prerequisites:
  - "The sampling distribution of x̄₁ − x̄₂ and its conditions (Topic 4.6)"
  - "One-sample t-intervals, t-distributions and degrees of freedom (Topic 4.2)"
  - "Checking a small sample for strong skewness and outliers (Topics 1.6 to 1.8)"
prerequisiteResources: ["mb-ap-stats-4.6-study-guide"]
learningObjectives:
  - "Recognise when two independent samples call for a two-sample t-interval, and tell this apart from a paired design"
  - "Define the parameter μ₁ − μ₂ in context, naming the order of subtraction, the response variable and both populations or treatments"
  - "Check the randomization, 10% and sample data conditions for a two-sample t-interval, and say which apply to an experiment"
  - "Calculate the point estimate, standard error, critical value t*, margin of error and interval for μ₁ − μ₂"
  - "Explain where the degrees of freedom come from and why a conservative choice gives a slightly wider interval"
skills: ["2", "3", "4"]
studyMinutes: 45
difficulty: "core"
calculator: "graphing"
calculatorNote: "Use the two-sample t-interval function and choose not to pool the variances. Report the degrees of freedom the calculator gives. Keep unrounded values until the final step and round the interval to 2 decimal places."
related: ["mb-ap-stats-4.7-revision-notes", "mb-ap-stats-4.7-practice", "mb-ap-stats-4.7-checklist"]
next: "mb-ap-stats-4.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Two independent samples of a quantitative variable: use a two-sample t-interval for μ₁ − μ₂."
  - "Interval: (x̄₁ − x̄₂) ± t* √(s₁²/n₁ + s₂²/n₂). Add the two variance terms; never add the standard deviations."
  - "Conditions: two independent random samples or a randomized experiment; 10% for each sample when sampling without replacement; both n ≥ 30 or both samples free from strong skewness and outliers."
  - "Degrees of freedom come from technology and lie between the smaller of n₁ − 1 and n₂ − 1 and n₁ + n₂ − 2."
  - "Define the parameter with the order of subtraction, the response variable and both populations."
faqs:
  - question: "Should I tick 'pooled' on my calculator?"
    answer: "No. The course's two-sample t-interval does not assume the two population standard deviations are equal, so choose the unpooled option. The calculator then gives non-integer degrees of freedom, which is expected."
  - question: "What if my calculator is not allowed to find the degrees of freedom?"
    answer: "Use the smaller of n₁ − 1 and n₂ − 1. This conservative choice gives a slightly larger t* and a slightly wider interval, so it never overstates your precision. Say which degrees of freedom you used."
  - question: "My two groups are the same people measured twice. Is this a two-sample interval?"
    answer: "No. Measurements on the same individuals are paired, not independent. Find the differences and use a one-sample t-interval for the mean difference, as in Topic 4.2."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## From one mean to two

In Topic 4.2 you estimated one population mean with x̄ ± t* (s/√n). Many questions compare two groups instead. Do parcels from one depot take longer to arrive than parcels from another? Does a new fertiliser grow heavier plants than the standard one?

To answer, you take a sample from each group and compare the sample means. The difference x̄₁ − x̄₂ is your best single estimate of the true difference μ₁ − μ₂. But another pair of samples would give a different difference. In Topic 4.6 you saw how much x̄₁ − x̄₂ varies from sample to sample. Now you turn that knowledge into a confidence interval: a range of plausible values for μ₁ − μ₂.

The structure is the same as every interval in the course:

**point estimate ± margin of error**, where **margin of error = critical value × standard error**.

## Step 1: name the procedure and define the parameter

**Which procedure?** Use a **two-sample t-interval for μ₁ − μ₂** when:

- the response variable is **quantitative** (a measurement, not a yes/no answer);
- there are **two groups**; and
- the two samples are **independent**: knowing a value in one group tells you nothing about any particular value in the other.

Independent samples come from two separate random samples, or from a randomized experiment in which each subject receives one treatment only.

**Watch for paired data.** If each value in one group is linked to one value in the other (the same person before and after, twins, two measurements on the same car), the samples are **not** independent. Then you find the differences within each pair and use a one-sample t-interval for the mean difference (Topic 4.2). The test is simple: can you match each value in group 1 to exactly one value in group 2 for a real reason? If yes, the data are paired.

**Define the parameter.** A full definition names three things:

1. the **difference in means**, with the **order of subtraction**;
2. the **response variable**, with units; and
3. **both populations** (or both treatments) in context.

Template: *μ₁ − μ₂ = the difference (group 1 minus group 2) in the mean [response, units] of all [population 1] and all [population 2].*

Choose the order of subtraction at the start and keep it to the end. Either order is correct; only the signs of the interval change.

## Step 2: check the three conditions

| Condition | What to check | Notes |
|---|---|---|
| Randomization | The data come from **two independent random samples**, or from a **randomized experiment** | Name the random process in context |
| 10% | n₁ ≤ 10% of N₁ **and** n₂ ≤ 10% of N₂ | Only when sampling **without replacement**. Not needed for a randomized experiment |
| Sample data | Both n₁ ≥ 30 **and** n₂ ≥ 30, **or** both populations are stated to be approximately normal | If **either** sample has fewer than 30 values, look at **both** samples: each must be free from strong skewness and outliers |

Each condition has its own job. Randomization makes the samples representative and the two groups independent. The 10% condition keeps the values within each sample close to independent, so the standard error formula works. The sample data condition makes the sampling distribution of x̄₁ − x̄₂ approximately normal, which is what the t critical values assume.

Two common slips: mixing up the randomization and 10% conditions, and checking only the smaller sample. Each condition is checked for **both** groups.

## Step 3: point estimate, standard error and critical value

**Point estimate:** x̄₁ − x̄₂.

**Standard error:** the population standard deviations are almost never known, so you replace σ₁ and σ₂ from Topic 4.6 with the sample standard deviations:

**SE = √(s₁²/n₁ + s₂²/n₂)**

Variances add, not standard deviations. Square each s, divide by its own n, add, then take one square root.

**Critical value t\*:** for a C% interval, t* cuts off the central C% of a t-distribution. The degrees of freedom (df) for two samples come from a long formula that technology applies for you. The value is usually not a whole number. It always lies in this range:

**smaller of (n₁ − 1, n₂ − 1) ≤ df ≤ n₁ + n₂ − 2**

If you cannot use technology for df, use the **smaller of n₁ − 1 and n₂ − 1**. This conservative df gives a slightly larger t* and so a slightly wider interval. It never claims more precision than the data support.

**Margin of error:** t* × SE. **Interval:**

**(x̄₁ − x̄₂) ± t* √(s₁²/n₁ + s₂²/n₂)**

On a graphing calculator, use the two-sample t-interval function and choose **not** to pool. Pooling assumes the two population standard deviations are equal, which the course does not assume.

## Worked example 1: courier delivery times (summary statistics)

**Context.** A fictional courier company has two depots. In one month, Depot North sent 6,000 parcels and Depot South sent 4,500. The company selected a random sample of 40 parcels from North and, separately, a random sample of 35 from South, and recorded each delivery time in hours.

| Depot | n | x̄ (hours) | s (hours) |
|---|---|---|---|
| North | 40 | 26.4 | 6.8 |
| South | 35 | 22.9 | 5.1 |

**Question.** Construct a 95% confidence interval for the difference in mean delivery times.

**1. Procedure and parameter.** Two-sample t-interval. Let μ_N − μ_S = the difference (North minus South) in the mean delivery time, in hours, of all parcels sent from Depot North and all parcels sent from Depot South that month.

**2. Conditions.**

- *Randomization:* two independent random samples, one from each depot. ✓
- *10%:* 40 ≤ 10% of 6,000 = 600 and 35 ≤ 10% of 4,500 = 450. ✓
- *Sample data:* n_N = 40 ≥ 30 and n_S = 35 ≥ 30, so the sampling distribution of x̄_N − x̄_S is approximately normal. ✓

**3. Calculate.**

1. Point estimate: 26.4 − 22.9 = **3.5 hours**.
2. Variance terms: 6.8²/40 = 1.1560 and 5.1²/35 = 0.7431. Sum = 1.8991.
3. SE = √1.8991 = **1.3781 hours**.
4. Technology gives df = 71.41 (between 34 and 73, as expected) and t* = **1.9937**.
5. Margin of error = 1.9937 × 1.3781 = **2.7476 hours**.
6. Interval: 3.5 ± 2.7476 = **(0.75, 6.25) hours**.

**Check.** With the conservative df = 34, t* = 2.0322, the margin of error is 2.8006 hours and the interval is (0.70, 6.30) hours: slightly wider, as expected. The point estimate 3.5 sits exactly in the middle of the interval.

<figure>
<svg viewBox="0 0 640 170" role="img" aria-labelledby="anat-title anat-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="anat-title">Parts of the 95% interval for the difference in mean delivery times</title>
<desc id="anat-desc">A horizontal axis labelled difference in mean delivery time, North minus South, in hours, runs from minus 1 to 8. A thick horizontal bar runs from 0.75 to 6.25 with end caps. A dot on the bar at 3.5 is labelled point estimate 3.5. Brackets above the bar show that each half of the bar, from 0.75 to 3.5 and from 3.5 to 6.25, has length 2.75, the margin of error. A dashed vertical line marks 0 on the axis, to the left of the bar.</desc>
<rect x="0" y="0" width="640" height="170" fill="#ffffff"/>
<line x1="60" y1="120" x2="600" y2="120" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="60" y1="120" x2="60" y2="127"/><line x1="120" y1="120" x2="120" y2="127"/><line x1="180" y1="120" x2="180" y2="127"/><line x1="240" y1="120" x2="240" y2="127"/><line x1="300" y1="120" x2="300" y2="127"/><line x1="360" y1="120" x2="360" y2="127"/><line x1="420" y1="120" x2="420" y2="127"/><line x1="480" y1="120" x2="480" y2="127"/><line x1="540" y1="120" x2="540" y2="127"/><line x1="600" y1="120" x2="600" y2="127"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="60" y="142">−1</text><text x="120" y="142">0</text><text x="180" y="142">1</text><text x="240" y="142">2</text><text x="300" y="142">3</text><text x="360" y="142">4</text><text x="420" y="142">5</text><text x="480" y="142">6</text><text x="540" y="142">7</text><text x="600" y="142">8</text>
</g>
<text x="330" y="162" text-anchor="middle" font-size="13" fill="#1d2b44">Difference in mean delivery time, North − South (hours)</text>
<line x1="120" y1="30" x2="120" y2="120" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 4"/>
<text x="126" y="40" font-size="12" fill="#1d2b44">0</text>
<line x1="165" y1="90" x2="495" y2="90" stroke="#1d2b44" stroke-width="5"/>
<line x1="165" y1="80" x2="165" y2="100" stroke="#1d2b44" stroke-width="2"/>
<line x1="495" y1="80" x2="495" y2="100" stroke="#1d2b44" stroke-width="2"/>
<circle cx="330" cy="90" r="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2.5"/>
<text x="165" y="112" text-anchor="middle" font-size="12" fill="#1d2b44">0.75</text>
<text x="495" y="112" text-anchor="middle" font-size="12" fill="#1d2b44">6.25</text>
<path d="M167 66 V58 H328 V66" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M332 66 V58 H493 V66" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<text x="247" y="52" text-anchor="middle" font-size="12" fill="#1d2b44">margin of error 2.75</text>
<text x="413" y="52" text-anchor="middle" font-size="12" fill="#1d2b44">margin of error 2.75</text>
<text x="330" y="24" text-anchor="middle" font-size="13" fill="#1d2b44">point estimate x̄_N − x̄_S = 3.5</text>
<line x1="330" y1="28" x2="330" y2="82" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 3"/>
</svg>
<figcaption>Figure 1. The 95% interval for μ_N − μ_S is the point estimate 3.5 hours plus or minus a margin of error of 2.75 hours. The dashed line marks 0, a difference of no hours, for reference.</figcaption>
</figure>

What the interval tells you about the claim "North is slower" is the job of Topic 4.8.

## Worked example 2: a fertiliser experiment (raw data, small samples)

**Context.** A fictional horticulture class grew 20 basil plants in identical pots. They randomly assigned 10 pots to a new liquid fertiliser and 10 to the standard fertiliser. After six weeks they recorded the fresh leaf mass of each plant, in grams.

- New: 48, 52, 55, 44, 58, 50, 53, 47, 56, 51
- Standard: 41, 46, 50, 39, 44, 48, 43, 52, 45, 42

**Question.** Construct a 90% confidence interval for the difference in mean leaf mass.

**1. Procedure and parameter.** Two-sample t-interval: each pot received one treatment only, so the groups are independent. Let μ_new − μ_std = the true difference (new minus standard) in the mean fresh leaf mass, in grams, of basil plants like these grown with the new fertiliser and with the standard fertiliser.

**2. Conditions.**

- *Randomization:* the fertilisers were randomly assigned to the 20 pots. ✓
- *10%:* not needed, because this is a randomized experiment, not a sample drawn from a population.
- *Sample data:* both groups have n = 10 < 30, so look at both samples (Figure 2). New: Q1 = 48, Q3 = 55, IQR = 7, fences 37.5 and 65.5 g; all values lie between 44 and 58 g. Standard: Q1 = 42, Q3 = 48, IQR = 6, fences 33 and 57 g; all values lie between 39 and 52 g. No outliers, and neither dot plot shows strong skewness. ✓

<figure>
<svg viewBox="0 0 640 230" role="img" aria-labelledby="basil-title basil-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="basil-title">Dot plots of basil leaf mass for two fertilisers</title>
<desc id="basil-desc">Two dot plots share a horizontal axis from 36 to 60 grams. The top row, labelled New, shows ten filled circles at 44, 47, 48, 50, 51, 52, 53, 55, 56 and 58 grams, with a short dashed line marking the mean at 51.4 grams. The bottom row, labelled Standard, shows ten open circles at 39, 41, 42, 43, 44, 45, 46, 48, 50 and 52 grams, with a short dashed line marking the mean at 45.0 grams. Both rows are spread fairly evenly with no gaps or isolated values.</desc>
<rect x="0" y="0" width="640" height="230" fill="#ffffff"/>
<text x="12" y="75" font-size="13" fill="#1d2b44">New</text>
<text x="12" y="135" font-size="13" fill="#1d2b44">Standard</text>
<line x1="60" y1="170" x2="588" y2="170" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="60" y1="170" x2="60" y2="177"/><line x1="148" y1="170" x2="148" y2="177"/><line x1="236" y1="170" x2="236" y2="177"/><line x1="324" y1="170" x2="324" y2="177"/><line x1="412" y1="170" x2="412" y2="177"/><line x1="500" y1="170" x2="500" y2="177"/><line x1="588" y1="170" x2="588" y2="177"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="60" y="193">36</text><text x="148" y="193">40</text><text x="236" y="193">44</text><text x="324" y="193">48</text><text x="412" y="193">52</text><text x="500" y="193">56</text><text x="588" y="193">60</text>
</g>
<text x="324" y="218" text-anchor="middle" font-size="13" fill="#1d2b44">Fresh leaf mass (grams)</text>
<g fill="#1d2b44">
<circle cx="236" cy="70" r="6"/><circle cx="302" cy="70" r="6"/><circle cx="324" cy="70" r="6"/><circle cx="368" cy="70" r="6"/><circle cx="390" cy="70" r="6"/><circle cx="412" cy="70" r="6"/><circle cx="434" cy="70" r="6"/><circle cx="478" cy="70" r="6"/><circle cx="500" cy="70" r="6"/><circle cx="544" cy="70" r="6"/>
</g>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="2">
<circle cx="126" cy="130" r="6"/><circle cx="170" cy="130" r="6"/><circle cx="192" cy="130" r="6"/><circle cx="214" cy="130" r="6"/><circle cx="236" cy="130" r="6"/><circle cx="258" cy="130" r="6"/><circle cx="280" cy="130" r="6"/><circle cx="324" cy="130" r="6"/><circle cx="368" cy="130" r="6"/><circle cx="412" cy="130" r="6"/>
</g>
<line x1="398.8" y1="44" x2="398.8" y2="92" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="4 3"/>
<text x="398.8" y="38" text-anchor="middle" font-size="12" fill="#1d2b44">mean 51.4</text>
<line x1="258" y1="104" x2="258" y2="152" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="4 3"/>
<text x="258" y="100" text-anchor="middle" font-size="12" fill="#1d2b44">mean 45.0</text>
</svg>
<figcaption>Figure 2. Fresh leaf mass of 10 basil plants given the new fertiliser (filled circles) and 10 given the standard fertiliser (open circles). Neither sample shows strong skewness or outliers, so the sample data condition is met even though both samples are small.</figcaption>
</figure>

**3. Calculate.**

1. Means: x̄_new = 514 ÷ 10 = 51.4 g; x̄_std = 450 ÷ 10 = 45.0 g. Point estimate = **6.4 g**.
2. Standard deviations (calculator, Sx): s_new = 4.326 g; s_std = 4.082 g.
3. Variance terms (using the unrounded s values): s_new²/10 = 1.8711 and s_std²/10 = 1.6667. SE = √3.5378 = **1.8809 g**.
4. Technology: df = 17.94 (between 9 and 18), t* for 90% = **1.7344**.
5. Margin of error = 1.7344 × 1.8809 = **3.2622 g**.
6. Interval: 6.4 ± 3.2622 = **(3.14, 9.66) grams**.

**Check.** With the conservative df = 9, t* = 1.8331 and the interval is (2.95, 9.85) g. Because this was a randomized experiment, the parameter is about the two **treatments**, for plants like these, not about a wider population of basil.

## Worked example 3: which procedure?

**Question.** For each study, name the procedure for estimating a difference in means.

**(a)** A café records the time to prepare 30 randomly chosen orders made by hand and 30 randomly chosen orders made with a new machine. **Two-sample t-interval:** two independent random samples of a quantitative variable.

**(b)** Each of 25 runners runs 400 m once in old shoes and once in new shoes, in random order. **One-sample t-interval for the mean difference:** each runner gives a pair of linked times, so the data are paired. Find the 25 differences first.

**(c)** A survey asks random samples of 200 adults in two towns whether they cycle to work. **Not a means procedure:** the response is categorical (yes/no), so it is about proportions (Unit 3).

## Common misconceptions

- **Adding standard deviations.** √(s₁²/n₁ + s₂²/n₂) is not s₁/√n₁ + s₂/√n₂. Square, divide, add, then take one square root.
- **Subtracting the variance terms because the statistic is a difference.** Variability adds for a difference of independent statistics, just as in Topic 4.6.
- **Using z\*.** σ₁ and σ₂ are unknown, so the critical value comes from a t-distribution.
- **Using df = n₁ + n₂ − 2 as the answer.** That is only the upper bound for df. Use technology, or the conservative smaller of n₁ − 1 and n₂ − 1.
- **Pooling.** Do not choose the pooled option; the course does not assume equal population standard deviations.
- **Treating paired data as two independent samples.** Before-and-after measurements on the same people need the paired procedure.
- **Checking only one sample.** The 10% and sample data conditions apply to both groups. If either sample is under 30, look at both distributions.
- **Checking the 10% condition in an experiment.** It is not needed after random assignment.
- **Defining the parameter as "the difference in the sample means".** The parameter is about populations or treatments, and it states the order of subtraction.

## Where this leads

Topic 4.8 shows how to interpret the interval and its confidence level, and how to use an interval to support or reject a claim about μ₁ − μ₂. The [next study guide](/advanced-course-resources/statistics/4-8-justifying-claim-based-on-confidence-study-guide/) starts from exactly the kind of interval you built here. Try the [practice questions](/advanced-course-resources/statistics/4-7-constructing-confidence-interval-difference-between-practice/) now, then use the [revision notes](/advanced-course-resources/statistics/4-7-constructing-confidence-interval-difference-between-revision-notes/) and the [checklist](/advanced-course-resources/statistics/4-7-constructing-confidence-interval-difference-between-checklist/) to consolidate. You can also look back at [Topic 4.6](/advanced-course-resources/statistics/4-6-sampling-distributions-difference-between-two-study-guide/) for where the standard error formula comes from.
