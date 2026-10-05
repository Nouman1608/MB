---
resourceId: "mb-ap-stats-3.11-study-guide"
title: "Justifying a Claim Based on a Confidence Interval for Two Proportions: Study Guide (Statistics 3.11)"
description: "Learn to interpret a confidence interval and confidence level for p₁ − p₂ in context, and use whether the interval contains 0 to justify a claim about two populations or treatments."
course: "statistics"
unit: 3
topics: ["3.11"]
resourceType: "study-guide"
prerequisites:
  - "Constructing a two-sample z-interval for a difference between population proportions (Topic 3.10)"
  - "Interpreting a confidence interval and confidence level for one proportion (Topic 3.4)"
prerequisiteResources: ["mb-ap-stats-3.10-study-guide"]
learningObjectives:
  - "Interpret a confidence interval for p₁ − p₂ in context, naming the order of subtraction, the response and both populations or treatments"
  - "Explain why one computed interval may or may not capture the true difference in proportions"
  - "Interpret the confidence level as the long-run capture rate in repeated random sampling with the same sample sizes"
  - "Use whether the interval contains 0 to decide whether there is convincing evidence of a difference, and use the signs of the endpoints to judge a claim about direction"
  - "Judge claims about the size of a difference, and explain how the confidence level and the study design affect the conclusion"
skills: ["4"]
studyMinutes: 40
difficulty: "core"
calculator: "graphing"
calculatorNote: "Use the same steps as Topic 3.10: z* = invNorm((1 + C)/2) and a two-proportion z-interval function to check. Give endpoints to 3 decimal places."
related: ["mb-ap-stats-3.11-revision-notes", "mb-ap-stats-3.11-practice", "mb-ap-stats-3.11-checklist"]
next: "mb-ap-stats-3.11-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Interval: “We are C% confident that the interval from a to b captures the difference (population 1 − population 2) in the proportions of [response].”"
  - "Confidence level: in repeated random sampling with the same sample sizes from the same populations, about C% of intervals built this way capture p₁ − p₂."
  - "If the interval contains 0, there is not convincing evidence of a difference. If it does not contain 0, there is convincing evidence of a difference."
  - "If every value in the interval is positive, there is convincing evidence that p₁ > p₂; if every value is negative, that p₁ < p₂."
  - "An interval that contains 0 does not prove the proportions are equal: 0 is only one of many plausible values."
faqs:
  - question: "Does an interval that contains 0 show that the two proportions are the same?"
    answer: "No. It shows that 0 (no difference) is a plausible value for p₁ − p₂. Other values in the interval, some of them far from 0, are plausible too. The data simply do not give convincing evidence of a difference."
  - question: "Will a confidence interval and a two-sided significance test always agree?"
    answer: "Usually, when the confidence level matches the significance level (95% with α = 0.05, for example). They can disagree in borderline cases, because the interval uses each sample's own proportion in the standard error while the test pools the samples. Topics 3.12 and 3.13 cover the test."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## What the interval is estimating

In Topic 3.10 you built intervals of the form

**(p̂₁ − p̂₂) ± z* √[ p̂₁(1 − p̂₁)/n₁ + p̂₂(1 − p̂₂)/n₂ ]**

This topic is about what such an interval **means** and how to use it to answer a question.

The parameter is the **difference** p₁ − p₂. It is a fixed number: the proportion in population 1 minus the proportion in population 2. In an experiment, the two "populations" are the two treatments: the proportion of subjects like these who would respond with treatment 1, minus the proportion with treatment 2.

The interval is built from two random samples (or one random assignment). Change the samples and p̂₁ − p̂₂ changes, so the interval moves. Any one interval you calculate **may or may not** capture p₁ − p₂, and you cannot tell which, because the true difference is unknown. That is why you describe a single interval with **confidence**, and keep the word **probability** for the method.

## Interpreting the interval in context

A full interpretation of a C% interval for p₁ − p₂ has four parts:

1. the confidence level, C%;
2. the interval, from the lower limit a to the upper limit b;
3. the **order of subtraction**, so the reader knows what a positive value means;
4. the parameter in context: the **response** and **both populations** (or both treatments).

A reliable template:

> **We are C% confident that the interval from a to b captures the difference (population 1 − population 2) in the proportions of all [individuals] who [response].**

The signs of the endpoints carry meaning:

- A **positive** value means population 1 has the larger proportion.
- A **negative** value means population 2 has the larger proportion.
- **0** means no difference.

It often helps to translate into **percentage points**. An interval of (0.058, 0.182) says population 1's proportion is between about 5.8 and 18.2 percentage points higher than population 2's. Say "percentage points", not "percent": a rise from 36% to 48% is 12 percentage points, not 12%.

Two parts are easy to forget. The interpretation is about the **populations**, not the samples: the interval always contains p̂₁ − p̂₂, because that is its centre. And it is about **one number**, the difference in proportions. It says nothing about individual people.

## Interpreting the confidence level

The confidence level describes the **method**:

> **If we took many pairs of random samples, with the same sample sizes, from the same two populations, and built a C% interval from each pair, about C% of those intervals would capture the true difference p₁ − p₂.**

In an experiment, replace "pairs of random samples" with "random assignments of the same subjects to the two treatments".

So 95% confidence does not mean "a 95% chance that p₁ − p₂ is in this interval". Once the interval is calculated it either captures the difference or it does not. The 95% is the long-run success rate of the procedure that produced it.

## Using the interval to justify a claim

The interval gives a range of **plausible values** for p₁ − p₂. The key value is **0**, because p₁ − p₂ = 0 means the two proportions are equal.

| What the interval looks like | What you can conclude |
|---|---|
| **Contains 0** (one endpoint negative, one positive) | 0 is plausible. There is **not convincing evidence** of a difference between the two population proportions. |
| **Every value positive** (0 is below the interval) | 0 is not plausible. There is **convincing evidence** of a difference, and in particular that p₁ > p₂. |
| **Every value negative** (0 is above the interval) | 0 is not plausible. There is **convincing evidence** of a difference, and in particular that p₁ < p₂. |

The same idea works for claims about the **size** of the difference. If someone claims p₁ is 10 percentage points higher than p₂, check whether 0.10 is inside the interval. Inside means plausible (no convincing evidence against the claim, but not proof). Outside means there is convincing evidence against it. For a claim such as "at least 20 percentage points higher", look at where the whole interval lies relative to 0.20.

Finish with a sentence in context that **refers to the interval** and its confidence level.

<figure>
<svg viewBox="0 0 640 280" role="img" aria-labelledby="zero-title zero-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="zero-title">Three 95% intervals for a difference in proportions compared with zero</title>
<desc id="zero-desc">A number line from −0.20 to 0.20 with a vertical dotted line at 0 labelled "no difference". Interval A, from Worked example 1, runs from 0.058 to 0.182 and lies entirely to the right of 0; its label reads "A: all positive, evidence that p₁ &gt; p₂". Interval B, from Worked example 2, is drawn dashed, runs from −0.037 to 0.157 and crosses 0; its label reads "B: contains 0, no convincing evidence of a difference". Interval C, an illustration, runs from −0.162 to −0.048 and lies entirely to the left of 0; its label reads "C: all negative, evidence that p₁ &lt; p₂". An open circle on each bar marks its point estimate: 0.12, 0.06 and −0.105.</desc>
<rect x="0" y="0" width="640" height="280" fill="#ffffff"/>
<line x1="40" y1="215" x2="600" y2="215" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="40" y1="215" x2="40" y2="222"/><line x1="110" y1="215" x2="110" y2="222"/><line x1="180" y1="215" x2="180" y2="222"/><line x1="250" y1="215" x2="250" y2="222"/><line x1="320" y1="215" x2="320" y2="222"/><line x1="390" y1="215" x2="390" y2="222"/><line x1="460" y1="215" x2="460" y2="222"/><line x1="530" y1="215" x2="530" y2="222"/><line x1="600" y1="215" x2="600" y2="222"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="40" y="238">−0.20</text><text x="110" y="238">−0.15</text><text x="180" y="238">−0.10</text><text x="250" y="238">−0.05</text><text x="320" y="238">0</text><text x="390" y="238">0.05</text><text x="460" y="238">0.10</text><text x="530" y="238">0.15</text><text x="600" y="238">0.20</text>
</g>
<text x="320" y="268" text-anchor="middle" font-size="14" fill="#1d2b44">Difference in proportions, p₁ − p₂</text>
<line x1="320" y1="28" x2="320" y2="215" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 4"/>
<text x="320" y="20" text-anchor="middle" font-size="12" fill="#1d2b44">no difference</text>
<line x1="401.2" y1="55" x2="574.8" y2="55" stroke="#1d2b44" stroke-width="6"/>
<line x1="401.2" y1="45" x2="401.2" y2="65" stroke="#1d2b44" stroke-width="2"/><line x1="574.8" y1="45" x2="574.8" y2="65" stroke="#1d2b44" stroke-width="2"/>
<circle cx="488" cy="55" r="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2.5"/>
<text x="488" y="84" text-anchor="middle" font-size="12" fill="#1d2b44">A: all positive, evidence that p₁ &gt; p₂</text>
<line x1="268.2" y1="112" x2="539.8" y2="112" stroke="#1d2b44" stroke-width="6" stroke-dasharray="10 4"/>
<line x1="268.2" y1="102" x2="268.2" y2="122" stroke="#1d2b44" stroke-width="2"/><line x1="539.8" y1="102" x2="539.8" y2="122" stroke="#1d2b44" stroke-width="2"/>
<circle cx="404" cy="112" r="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2.5"/>
<text x="404" y="141" text-anchor="middle" font-size="12" fill="#1d2b44">B: contains 0, no convincing evidence of a difference</text>
<line x1="93.2" y1="168" x2="252.8" y2="168" stroke="#1d2b44" stroke-width="6"/>
<line x1="93.2" y1="158" x2="93.2" y2="178" stroke="#1d2b44" stroke-width="2"/><line x1="252.8" y1="158" x2="252.8" y2="178" stroke="#1d2b44" stroke-width="2"/>
<circle cx="173" cy="168" r="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2.5"/>
<text x="173" y="197" text-anchor="middle" font-size="12" fill="#1d2b44">C: all negative, evidence that p₁ &lt; p₂</text>
</svg>
<figcaption>Figure 1. Three 95% intervals for p₁ − p₂. A (0.058 to 0.182) is from Worked example 1; B (−0.037 to 0.157, dashed) is from Worked example 2; C (−0.162 to −0.048) is an illustration. What matters is where 0 falls: below, inside or above the interval. Labels, not colour, identify each case.</figcaption>
</figure>

## Worked example 1: independent random samples, three claims

**Context (fictional).** An energy regulator compares two districts, Oldmere (about 30,000 households) and Kestwick (about 26,000 households). Independent random samples found that 240 of 500 Oldmere households and 162 of 450 Kestwick households have a smart meter. The conditions are met: independent random samples; 500 ≤ 3,000 and 450 ≤ 2,600 (10% of each population); counts 240, 260, 162 and 288 are all at least 10.

**(a) Construct and interpret a 95% interval for p_O − p_K.**

1. p̂_O = 240 ÷ 500 = 0.48 and p̂_K = 162 ÷ 450 = 0.36. Point estimate 0.12.
2. SE = √(0.48 × 0.52 ÷ 500 + 0.36 × 0.64 ÷ 450) ≈ 0.0318.
3. MOE = 1.960 × 0.0318 ≈ 0.0623.
4. Interval: 0.12 ± 0.0623 = **(0.058, 0.182)**.

**Interpretation.** We are 95% confident that the interval from 0.058 to 0.182 captures the difference (Oldmere − Kestwick) in the proportions of all households with a smart meter. In words: Oldmere's proportion is plausibly between about 5.8 and 18.2 percentage points higher.

**(b) Interpret the confidence level.** If the regulator took many pairs of independent random samples of 500 Oldmere households and 450 Kestwick households and built a 95% interval from each pair, about 95% of the intervals would capture the true difference in the proportions with a smart meter.

**(c) Judge three claims.**

1. *"The proportions differ."* The interval does not contain 0. There is **convincing evidence** of a difference.
2. *"A higher proportion of Oldmere households have a smart meter."* Every value in the interval is positive. There is **convincing evidence** that p_O > p_K.
3. *"Oldmere's proportion is at least 20 percentage points higher."* 0.20 is above the whole interval. The interval gives **convincing evidence against** this claim. (A claim of "10 percentage points higher" would be plausible, because 0.10 is inside.)

**Check.** Reversing the order gives (−0.182, −0.058), which is all negative: Kestwick's proportion is lower. Same conclusion, different words. The 90% interval (0.068, 0.172) and the 99% interval (0.038, 0.202) also exclude 0. Note that the 99% interval includes 0.20, so claim 3 is judged differently at 99% confidence; state the confidence level with every conclusion.

## Worked example 2: a randomized experiment where the interval contains 0

**Context (fictional).** A council wants more households to use their food-waste caddies. It randomly assigns 400 households to receive the caddy with either a printed instruction booklet (200 households) or a picture-only leaflet (200 households). After a month, 118 booklet households and 106 leaflet households use the caddy every week. The conditions are met: random assignment; the 10% condition is not needed for an experiment; counts 118, 82, 106 and 94 are all at least 10.

**(a)** p̂_B = 0.59 and p̂_L = 0.53, a difference of 0.06. SE = √(0.59 × 0.41 ÷ 200 + 0.53 × 0.47 ÷ 200) ≈ 0.04955. MOE = 1.960 × 0.04955 ≈ 0.0971. The 95% interval for p_B − p_L is **(−0.037, 0.157)**.

**Interpretation.** We are 95% confident that the interval from −0.037 to 0.157 captures the difference (booklet − leaflet) in the proportions of households like these that would use their caddy every week.

**(b) Does the booklet lead to more weekly use?** The interval contains 0, so 0 is a plausible value for p_B − p_L. The experiment does **not** give convincing evidence that the booklet changes the proportion of households using their caddy weekly.

**(c) A councillor says: "So the booklet makes no difference."** This goes too far. The interval also contains values as large as 0.157: the booklet might raise weekly use by about 15 percentage points, or lower it by about 4. The data cannot tell these apart. "No convincing evidence of a difference" is not the same as "evidence of no difference".

**(d) What would help?** A larger experiment gives a narrower interval. If the sample proportions stayed at 0.59 and 0.53, about 600 households per treatment would give a margin of error of about 0.056, small enough to exclude 0. And because the treatments were **randomly assigned**, an interval that excluded 0 would support a cause-and-effect conclusion: the booklet causes a change in use for households like these.

## Worked example 3: judging interpretations, and how the confidence level matters

**Context (fictional).** A bank selects independent random samples of 700 customers from each of its two largest branches. At the Riverside branch 315 rate the service "excellent" (0.45); at the Market Street branch 273 do (0.39). The conditions are met. The 95% interval for p_R − p_M is **(0.008, 0.112)** and the 99% interval is **(−0.008, 0.128)**.

**Which of these sentences are correct?**

1. *"We are 95% confident that the interval from 0.008 to 0.112 captures the difference (Riverside − Market Street) in the proportions of all customers at each branch who rate the service excellent."* **Correct.** Level, endpoints, order and both populations are all there.
2. *"There is a 95% probability that the true difference is between 0.008 and 0.112."* **Wrong.** The true difference is fixed. The 95% describes the method.
3. *"95% of Riverside customers are between 0.8 and 11.2 percentage points more satisfied than Market Street customers."* **Wrong.** The interval estimates one difference in proportions, not a range for individual customers.
4. *"Riverside's sample proportion is between 0.008 and 0.112 higher."* **Wrong.** The sample difference is exactly 0.06. The interval is about the populations.

**Is there convincing evidence that the branches differ?**

- At 95% confidence: the interval (0.008, 0.112) does not contain 0, so **yes**, there is convincing evidence that a higher proportion of all Riverside customers rate the service excellent.
- At 99% confidence: the interval (−0.008, 0.128) contains 0, so **no**, there is not convincing evidence of a difference.

The data have not changed. A higher confidence level gives a wider interval, which here just reaches past 0. Decide the confidence level **before** looking at the data, and state it with the conclusion.

**Scope.** These are independent random samples, not an experiment. So the conclusion can be generalised to all customers of the two branches, but it cannot say **why** the branches differ.

## Common misconceptions

- **"There is a 95% chance p₁ − p₂ is in this interval."** After calculation, the interval either captures the difference or not. The 95% belongs to the method.
- **"The interval contains 0, so the proportions are equal."** 0 is plausible, not proved. Other values in the interval are plausible too.
- **Giving no order of subtraction.** Without it, a reader cannot tell which group a positive value favours.
- **"The interval is (0.058, 0.182), so the difference is 5.8% to 18.2%."** These are **percentage points**, not percentages of something.
- **Interpreting the interval for the samples.** You already know p̂₁ − p̂₂. The interval is about the populations or treatments.
- **Judging the claim from the point estimate.** "The difference is 0.06, which is not 0, so there is a difference" ignores sampling variability. Use the whole interval.
- **Claiming cause from independent samples.** Only random assignment of treatments supports a cause-and-effect conclusion.
- **Changing the confidence level after seeing the result** to get the conclusion you want.

## Where this leads

Next, Topic 3.12 sets up a significance test that asks the same question, "is there a difference?", in a different way: see [Setting Up a Test for the Difference Between Two Population Proportions](/advanced-course-resources/statistics/3-12-setting-up-test-difference-between-study-guide/). Topic 3.13 then [carries out that test](/advanced-course-resources/statistics/3-13-carrying-out-test-difference-between-study-guide/). Try the [practice questions](/advanced-course-resources/statistics/3-11-justifying-claim-based-on-confidence-practice/) now, then use the [revision notes](/advanced-course-resources/statistics/3-11-justifying-claim-based-on-confidence-revision-notes/) and the [checklist](/advanced-course-resources/statistics/3-11-justifying-claim-based-on-confidence-checklist/). To review how the interval is built, return to [Topic 3.10](/advanced-course-resources/statistics/3-10-constructing-confidence-interval-difference-between-study-guide/); for the one-proportion version of these ideas, see [Topic 3.4](/advanced-course-resources/statistics/3-4-justifying-claim-based-on-confidence-study-guide/).
