---
resourceId: "mb-ap-stats-3.10-study-guide"
title: "Constructing a Confidence Interval for the Difference Between Two Population Proportions: Study Guide (Statistics 3.10)"
description: "Learn to name the two-sample z-interval, define p1 − p2 in context, check the three conditions, and calculate the standard error, margin of error and interval for a difference in proportions."
course: "statistics"
unit: 3
topics: ["3.10"]
resourceType: "study-guide"
prerequisites:
  - "The one-sample z-interval for a population proportion, critical values z* and margin of error (Topic 3.3)"
  - "The sampling distribution of p̂1 − p̂2: mean p1 − p2 and standard deviation √[p1(1 − p1)/n1 + p2(1 − p2)/n2] (Topic 3.9)"
prerequisiteResources: ["mb-ap-stats-3.9-study-guide"]
learningObjectives:
  - "Name the two-sample z-interval for a difference between population proportions and define the parameter with the difference, the response variable and both populations"
  - "Check the randomization, 10% and normality conditions for two independent samples or a randomized experiment"
  - "Calculate the point estimate p̂1 − p̂2, its standard error and the margin of error"
  - "Construct the interval (p̂1 − p̂2) ± z* × SE for any confidence level"
  - "Work back from a reported interval to its point estimate, margin of error and standard error"
skills: ["2", "3", "4"]
studyMinutes: 45
difficulty: "core"
calculator: "graphing"
calculatorNote: "Find z* with the inverse normal function, using the area (1 + C)/2 to the left. Keep p̂1 and p̂2 unrounded; give endpoints to 3 decimal places. A calculator's two-proportion z-interval function is a good check."
related: ["mb-ap-stats-3.10-revision-notes", "mb-ap-stats-3.10-practice", "mb-ap-stats-3.10-checklist"]
next: "mb-ap-stats-3.10-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "The procedure is a two-sample z-interval for p1 − p2: (p̂1 − p̂2) ± z* √[p̂1(1 − p̂1)/n1 + p̂2(1 − p̂2)/n2]."
  - "Define the parameter as the difference (in a stated order) between the proportions of two named populations with a named response."
  - "Conditions: two independent random samples or a randomized experiment; each sample at most 10% of its population (not needed for an experiment); at least 10 observed successes and 10 observed failures in each group."
  - "Standard error SE = √[p̂1(1 − p̂1)/n1 + p̂2(1 − p̂2)/n2]; margin of error = z* × SE."
  - "Reversing the order of subtraction flips the signs and swaps the endpoints; the width does not change."
faqs:
  - question: "Do I pool the two sample proportions for a confidence interval?"
    answer: "No. For a confidence interval for p1 − p2, use each sample's own proportion in the standard error. A pooled (combined) proportion is used only in a significance test that assumes p1 = p2, which comes in Topics 3.12 and 3.13."
  - question: "The interval contains negative values. Have I made a mistake?"
    answer: "Not necessarily. The parameter is a difference, so it can be negative. A negative value means the second population's proportion is the larger. Topic 3.11 shows how to use the interval, including whether it contains 0, to judge a claim."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## From one proportion to a difference

In Topic 3.3 you estimated one population proportion with an interval of the form **point estimate ± margin of error**. Now the question compares two groups: how much larger (or smaller) is the proportion in one population than in another? The parameter is the **difference** p1 − p2.

The point estimate is the difference in sample proportions, **p̂1 − p̂2**. In Topic 3.9 you saw that, with independent samples, p̂1 − p̂2 is unbiased for p1 − p2 and has standard deviation √[p1(1 − p1)/n1 + p2(1 − p2)/n2]. You cannot calculate that standard deviation now, because p1 and p2 are unknown. So, as in Topic 3.3, you replace each p with its sample estimate. This gives the **two-sample z-interval for a difference between population proportions**:

**(p̂1 − p̂2) ± z* √[ p̂1(1 − p̂1)/n1 + p̂2(1 − p̂2)/n2 ]**

This guide builds the interval in four steps: identify the procedure and the parameter, check the conditions, calculate, and check the result. What the interval and the confidence level **mean**, and how to use them to judge a claim, is Topic 3.11.

## Step 1: name the procedure and define the parameter

Write the procedure by name: "**two-sample z-interval for a difference between population proportions**" (or for p1 − p2).

Then define the parameter. A full definition has four parts:

- that it is a **difference in proportions**, with the **order** stated;
- the **response variable** (what counts as a success);
- **population 1**, named in context;
- **population 2**, named in context.

Weak: "p1 − p2 = difference in the proportions who said yes."
Strong: "p1 − p2 = the proportion of **all workers in Fenwick** who **work from home at least one day a week**, minus the proportion of **all workers in Harrowgate** who do."

Use subscripts that remind you of the groups (pF − pH) if that helps. The parameter is always about the **populations** (or, in an experiment, the treatments), never the samples.

## Step 2: check the three conditions

| Condition | What to check | Why it matters |
|---|---|---|
| Randomization | Two **independent random samples**, one from each population, **or** a **randomized experiment** (treatments randomly assigned). | Makes p̂1 − p̂2 unbiased and the two groups independent. |
| 10% | When sampling without replacement: n1 ≤ 10% of N1 **and** n2 ≤ 10% of N2. **Not needed** for a randomized experiment. | Keeps observations within each sample close enough to independent for the standard-error formula. |
| Normality (large counts) | The **observed** successes and failures in **both** groups are at least 10: n1p̂1, n1(1 − p̂1), n2p̂2, n2(1 − p̂2). | Makes the sampling distribution of p̂1 − p̂2 approximately normal, so z* is the right multiplier. |

Two reminders:

- The large-counts check uses the **observed** counts, because p1 and p2 are unknown. In Topic 3.9 the proportions were given, so you used expected counts.
- There are **four** counts. One count below 10 is enough to make the z-interval unreliable.

## Step 3: standard error, margin of error and the interval

**Standard error.** Replacing p1 and p2 by p̂1 and p̂2 in the standard deviation formula gives the standard error of the difference:

**SE(p̂1 − p̂2) = √[ p̂1(1 − p̂1)/n1 + p̂2(1 − p̂2)/n2 ]**

It estimates how far p̂1 − p̂2 typically lands from p1 − p2 in repeated sampling. Add the two variance terms, then take one square root.

**Critical value.** z* comes from the standard normal distribution exactly as in Topic 3.3: the area to the left of z* is (1 + C)/2. Common values are 1.645 (90%), 1.960 (95%), 2.326 (98%) and 2.576 (99%).

**Margin of error.** MOE = z* × SE. It is half the width of the interval.

**Interval.** (p̂1 − p̂2) − MOE to (p̂1 − p̂2) + MOE.

<figure>
<svg viewBox="0 0 640 230" role="img" aria-labelledby="dci-title dci-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="dci-title">The same 95% interval for a difference in proportions drawn in both orders of subtraction</title>
<desc id="dci-desc">A number line from −0.20 to 0.20 with a vertical dotted line at 0 labelled "no difference". The upper bar, labelled Fenwick minus Harrowgate, runs from 0.021 to 0.159 with an open circle at the point estimate 0.09. The lower bar, labelled Harrowgate minus Fenwick, runs from −0.159 to −0.021 with an open circle at −0.09. The two bars are mirror images of each other about 0 and have the same width, about 0.14, which is twice the margin of error of about 0.069.</desc>
<rect x="0" y="0" width="640" height="230" fill="#ffffff"/>
<line x1="40" y1="170" x2="600" y2="170" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="60" y1="170" x2="60" y2="177"/><line x1="125" y1="170" x2="125" y2="177"/><line x1="190" y1="170" x2="190" y2="177"/><line x1="255" y1="170" x2="255" y2="177"/><line x1="320" y1="170" x2="320" y2="177"/><line x1="385" y1="170" x2="385" y2="177"/><line x1="450" y1="170" x2="450" y2="177"/><line x1="515" y1="170" x2="515" y2="177"/><line x1="580" y1="170" x2="580" y2="177"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="60" y="193">−0.20</text><text x="125" y="193">−0.15</text><text x="190" y="193">−0.10</text><text x="255" y="193">−0.05</text><text x="320" y="193">0</text><text x="385" y="193">0.05</text><text x="450" y="193">0.10</text><text x="515" y="193">0.15</text><text x="580" y="193">0.20</text>
</g>
<text x="320" y="220" text-anchor="middle" font-size="14" fill="#1d2b44">Difference in proportions working from home at least one day a week</text>
<line x1="320" y1="30" x2="320" y2="170" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 4"/>
<text x="320" y="22" text-anchor="middle" font-size="12" fill="#1d2b44">no difference</text>
<line x1="347.3" y1="65" x2="526.7" y2="65" stroke="#1d2b44" stroke-width="6"/>
<line x1="347.3" y1="55" x2="347.3" y2="75" stroke="#1d2b44" stroke-width="2"/>
<line x1="526.7" y1="55" x2="526.7" y2="75" stroke="#1d2b44" stroke-width="2"/>
<circle cx="437" cy="65" r="7" fill="#ffffff" stroke="#1d2b44" stroke-width="2.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="437" y="46">Fenwick − Harrowgate: 0.09</text>
<text x="347.3" y="92">0.021</text><text x="526.7" y="92">0.159</text>
</g>
<line x1="113.3" y1="130" x2="292.7" y2="130" stroke="#1d2b44" stroke-width="6" stroke-dasharray="10 4"/>
<line x1="113.3" y1="120" x2="113.3" y2="140" stroke="#1d2b44" stroke-width="2"/>
<line x1="292.7" y1="120" x2="292.7" y2="140" stroke="#1d2b44" stroke-width="2"/>
<circle cx="203" cy="130" r="7" fill="#ffffff" stroke="#1d2b44" stroke-width="2.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="203" y="111">Harrowgate − Fenwick: −0.09</text>
<text x="113.3" y="157">−0.159</text><text x="292.7" y="157">−0.021</text>
</g>
</svg>
<figcaption>Figure 1. The 95% interval from Worked example 1, drawn in both orders of subtraction. Solid bar: Fenwick − Harrowgate, (0.021, 0.159). Dashed bar: Harrowgate − Fenwick, (−0.159, −0.021). Reversing the order reflects the interval in 0; the point estimate changes sign and the width stays the same.</figcaption>
</figure>

## Worked example 1: two independent random samples, 95%

**Question.** Two fictional cities want to compare home working. In Fenwick (52,000 workers), a random sample of 400 workers found 172 who work from home at least one day a week. In Harrowgate (41,000 workers), an independent random sample of 350 workers found 119. Construct a 95% confidence interval for the difference in the proportions of all workers in the two cities who work from home at least one day a week.

**Identify.** Two-sample z-interval for a difference between population proportions. Let pF − pH = the proportion of all Fenwick workers who work from home at least one day a week, minus the proportion of all Harrowgate workers who do.

**Check conditions.**

1. **Randomization:** independent random samples were taken from the workers of each city.
2. **10%:** 400 ≤ 10% of 52,000 = 5,200 and 350 ≤ 10% of 41,000 = 4,100. ✓
3. **Normality:** Fenwick has 172 successes and 228 failures; Harrowgate has 119 successes and 231 failures. All four are at least 10. ✓

**Calculate.**

1. p̂F = 172 ÷ 400 = 0.43 and p̂H = 119 ÷ 350 = 0.34.
2. Point estimate: p̂F − p̂H = 0.09.
3. SE = √(0.43 × 0.57 ÷ 400 + 0.34 × 0.66 ÷ 350) = √(0.0006128 + 0.0006411) ≈ 0.03541.
4. For 95% confidence, z* = 1.960.
5. MOE = 1.960 × 0.03541 ≈ 0.0694.
6. Interval: 0.09 ± 0.0694 = **(0.021, 0.159)**.

**Check.** A calculator's two-proportion z-interval with x1 = 172, n1 = 400, x2 = 119, n2 = 350 and C-level 0.95 gives the same interval. It is centred on 0.09 and its half-width is the margin of error.

**Conclude (preview of Topic 3.11).** We are 95% confident that the interval from 0.021 to 0.159 captures the difference (Fenwick − Harrowgate) in the proportions of all workers who work from home at least one day a week.

## Worked example 2: a randomized experiment, 90%

**Question.** A fictional garden centre tests whether soaking seeds overnight helps them germinate. It randomly assigns 300 seeds to two treatments: 150 are soaked and 150 are planted dry. After two weeks, 126 soaked seeds and 108 dry seeds have germinated. (a) Construct a 90% confidence interval for the difference in germination proportions (soaked − dry). (b) What interval do you get for dry − soaked? (c) Would a 95% interval be wider or narrower?

**(a) Identify.** Two-sample z-interval for p1 − p2. Let pS − pD = the proportion of seeds like these that would germinate if soaked, minus the proportion that would germinate if planted dry.

**Check conditions.**

1. **Randomization:** the two treatments were randomly assigned to the seeds.
2. **10%:** not needed, because this is a randomized experiment and the seeds were not sampled from a population.
3. **Normality:** 126 and 24 (soaked), 108 and 42 (dry). All four are at least 10. ✓

**Calculate.**

1. p̂S = 126 ÷ 150 = 0.84 and p̂D = 108 ÷ 150 = 0.72. Point estimate 0.12.
2. SE = √(0.84 × 0.16 ÷ 150 + 0.72 × 0.28 ÷ 150) = √(0.000896 + 0.001344) ≈ 0.04733.
3. For 90% confidence, z* = 1.645.
4. MOE = 1.645 × 0.04733 ≈ 0.0778.
5. Interval: 0.12 ± 0.0778 = **(0.042, 0.198)**.

**(b)** Reversing the order gives point estimate −0.12 and interval **(−0.198, −0.042)**. Both intervals say the same thing: soaked seeds germinated at a higher rate in this experiment. Choose one order, state it, and keep it.

**(c)** Wider. A 95% interval uses z* = 1.960 instead of 1.645, so the margin of error grows to about 0.0928 and the interval becomes (0.027, 0.213).

## Worked example 3: reading an interval, and when not to build one

**Question.** (a) A report gives a 95% confidence interval of (−0.018, 0.142) for p1 − p2. Find the point estimate, the margin of error and the standard error. (b) In a small trial, 40 volunteers are randomly assigned to each of two exercise plans; 33 and 24 complete their plans. Should you construct a two-sample z-interval?

**(a)** The interval is symmetric about the point estimate.

1. Point estimate: (−0.018 + 0.142) ÷ 2 = **0.062**.
2. Margin of error: (0.142 − (−0.018)) ÷ 2 = 0.160 ÷ 2 = **0.080**.
3. Standard error: 0.080 ÷ 1.960 ≈ **0.0408**.

The interval contains negative and positive values. Topic 3.11 explains what that tells you about the claim "the proportions differ".

**(b)** Count successes and failures in both groups: 33 and 7, 24 and 16. The first group has only **7 failures**, which is less than 10. The normality condition fails, so the sampling distribution of p̂1 − p̂2 may not be approximately normal and a z-interval is not appropriate. Say this clearly. A larger experiment would fix the problem.

## Common misconceptions

- **Pooling the proportions.** For a confidence interval, each sample keeps its own p̂ in the standard error. Pooling is for a significance test that assumes p1 = p2.
- **Defining the parameter with the samples.** "The difference between the 400 Fenwick workers and the 350 Harrowgate workers" is p̂F − p̂H, a statistic. The parameter is about all workers in each city.
- **No order of subtraction.** Without it, a reader cannot tell what a positive or negative endpoint means.
- **Checking only two counts, or using n ≥ 30.** Check all four observed counts against 10.
- **Checking the 10% condition in an experiment.** It is not needed; random assignment is what matters.
- **Adding the two standard errors or the two margins of error.** Add the variance terms under one square root.
- **"A negative endpoint is impossible."** The parameter is a difference, so negative values are possible.
- **Using a t critical value.** Intervals for proportions use z*.

## Where this leads

Next, Topic 3.11 shows how to interpret the interval and the confidence level in context, and how to use the interval (for example, whether it contains 0) to justify a claim about two populations: see [Justifying a Claim Based on a Confidence Interval for the Difference Between Two Population Proportions](/advanced-course-resources/statistics/3-11-justifying-claim-based-on-confidence-study-guide/). Try the [practice questions](/advanced-course-resources/statistics/3-10-constructing-confidence-interval-difference-between-practice/) now, then use the [revision notes](/advanced-course-resources/statistics/3-10-constructing-confidence-interval-difference-between-revision-notes/) and the [checklist](/advanced-course-resources/statistics/3-10-constructing-confidence-interval-difference-between-checklist/). For the sampling distribution behind the interval, revisit [Topic 3.9](/advanced-course-resources/statistics/3-9-sampling-distributions-difference-between-sample-study-guide/); for critical values, revisit [Topic 3.3](/advanced-course-resources/statistics/3-3-constructing-confidence-interval-population-proportion-study-guide/).
