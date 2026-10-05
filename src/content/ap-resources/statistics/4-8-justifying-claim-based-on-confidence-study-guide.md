---
resourceId: "mb-ap-stats-4.8-study-guide"
title: "Justifying a Claim With a Confidence Interval for Two Means: Study Guide (Statistics 4.8)"
description: "Learn to interpret a confidence interval for μ₁ − μ₂ and its confidence level in context, and to use the interval, and where 0 lies, to support or reject a claim."
course: "statistics"
unit: 4
topics: ["4.8"]
resourceType: "study-guide"
prerequisites:
  - "Constructing a two-sample t-interval for μ₁ − μ₂ (Topic 4.7)"
  - "Interpreting a confidence interval and confidence level for one mean (Topic 4.3)"
prerequisiteResources: ["mb-ap-stats-4.7-study-guide"]
learningObjectives:
  - "Interpret a confidence interval for μ₁ − μ₂ in context, naming the order of subtraction, the response variable and both populations"
  - "Interpret the confidence level as the long-run capture rate of the method under repeated sampling"
  - "Explain why one computed interval may or may not contain the true difference in means"
  - "Use whether 0 lies inside the interval to decide if there is convincing evidence of a difference in population means"
  - "Judge claims about the direction or size of a difference by comparing the claim with the whole interval"
skills: ["4"]
studyMinutes: 40
difficulty: "core"
calculator: "graphing"
calculatorNote: "Intervals are given or come from the two-sample t-interval function (not pooled). Keep the order of subtraction fixed throughout."
related: ["mb-ap-stats-4.8-revision-notes", "mb-ap-stats-4.8-practice", "mb-ap-stats-4.8-checklist"]
next: "mb-ap-stats-4.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Interpretation: we are C% confident that the interval from a to b captures the difference (group 1 minus group 2) in the population mean [response] of [population 1] and [population 2]."
  - "Confidence level: in repeated random sampling, about C% of intervals built this way capture μ₁ − μ₂."
  - "0 inside the interval: no convincing evidence of a difference. 0 outside: convincing evidence of a difference, in the direction the interval shows."
  - "For a claim about direction or size, check where the whole interval lies relative to the claimed value."
  - "Reversing the order of subtraction changes the signs of both limits, not the conclusion."
faqs:
  - question: "If the interval contains 0, have I shown the two means are equal?"
    answer: "No. 0 is one plausible value among many. The interval also contains non-zero values, so a difference is possible. You can only say there is not convincing evidence of a difference."
  - question: "Can I say there is a 95% probability that the true difference is in my interval?"
    answer: "No. Once the interval is calculated, it either contains μ₁ − μ₂ or it does not. The 95% describes how often the method works over many samples, so say you are 95% confident."
  - question: "Does an interval that excludes 0 prove one treatment causes a higher mean?"
    answer: "Only if the data come from a randomized experiment. With two random samples from populations you can generalise to those populations, but you cannot claim cause and effect."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## What a two-sample interval can and cannot tell you

In Topic 4.7 you built intervals of the form (x̄₁ − x̄₂) ± t* √(s₁²/n₁ + s₂²/n₂). Now you need to say what such an interval **means** and use it to judge a claim.

Start from one fact. The true difference μ₁ − μ₂ is a fixed number. The interval is not fixed: it depends on which two samples you happened to get. A different pair of samples gives a different x̄₁ − x̄₂ and different standard deviations, so a different interval. Any one interval you calculate **may or may not** contain μ₁ − μ₂, and you cannot check, because you do not know μ₁ − μ₂.

That is why the word is **confidence**. Confidence describes the reliability of the **method**, not the success of one particular interval.

## Interpreting the interval

An interpretation of a C% confidence interval for μ₁ − μ₂ has four parts:

1. the confidence level, C%;
2. the interval, from a to b, with units;
3. the **difference in population means**, with the **order of subtraction**;
4. the **response variable** and **both populations** (or treatments) in context.

A reliable template:

> **We are C% confident that the interval from a to b [units] captures the difference (group 1 minus group 2) in the mean [response] of all [population 1] and all [population 2].**

For an experiment, replace "all [population]" with the treatments: "the true difference in the mean [response] for [subjects like these] given treatment 1 and given treatment 2".

Avoid these:

- **"…the difference in the sample means."** The sample difference x̄₁ − x̄₂ is the centre of the interval, so it is always inside. The interpretation is about population means.
- **"C% of individuals differ by between a and b."** The interval is about means, not individual values.
- **Leaving out the order of subtraction.** An interval (−4, 9) means nothing until you know which group was subtracted from which.

## Interpreting the confidence level

The confidence level answers: "How often does this method work?"

> **If we took many random samples of the same sizes from these two populations and built a C% interval from each pair, about C% of those intervals would capture the true difference μ₁ − μ₂.**

So "95% confident" is a statement about the long-run success rate of the procedure, which gives you a reason to trust it. It is **not** the probability that this one interval is right. It also does not mean 95% of sample differences fall inside your interval.

A higher confidence level uses a larger t*, so the interval is wider. You buy more confidence with less precision (you met this for one mean in Topic 4.3).

## Using an interval to justify a claim

The interval is a set of **plausible values** for μ₁ − μ₂. The most common claim is "the two population means are different". Look at where **0** lies, because μ₁ − μ₂ = 0 means "no difference".

| Where the interval lies | What you can conclude |
|---|---|
| Entirely **above** 0 (both limits positive) | Convincing evidence that μ₁ > μ₂ |
| Entirely **below** 0 (both limits negative) | Convincing evidence that μ₁ < μ₂ |
| **Contains** 0 | 0 is plausible: **not** convincing evidence of a difference. This does **not** show the means are equal |

<figure>
<svg viewBox="0 0 640 250" role="img" aria-labelledby="zero-title zero-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="zero-title">Three confidence intervals for a difference in means compared with zero</title>
<desc id="zero-desc">A horizontal axis labelled mu 1 minus mu 2 runs from minus 10 to 10, with a dashed vertical line at 0. Interval A, drawn as a solid bar, runs from minus 8 to minus 2, entirely left of 0, and is labelled evidence that mu 1 is less than mu 2. Interval B, drawn as a dashed bar, runs from minus 3 to 5 and crosses 0; it is labelled 0 plausible, no convincing evidence of a difference. Interval C, drawn as a solid bar, runs from 1 to 7, entirely right of 0, and is labelled evidence that mu 1 is greater than mu 2.</desc>
<rect x="0" y="0" width="640" height="250" fill="#ffffff"/>
<line x1="320" y1="20" x2="320" y2="190" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 4"/>
<text x="320" y="14" text-anchor="middle" font-size="13" fill="#1d2b44">0 = no difference</text>
<line x1="96" y1="50" x2="264" y2="50" stroke="#1d2b44" stroke-width="5"/>
<line x1="96" y1="42" x2="96" y2="58" stroke="#1d2b44" stroke-width="2"/><line x1="264" y1="42" x2="264" y2="58" stroke="#1d2b44" stroke-width="2"/>
<text x="180" y="36" text-anchor="middle" font-size="12" fill="#1d2b44">A: (−8, −2)</text>
<text x="96" y="76" font-size="12" fill="#1d2b44">all below 0: evidence μ₁ &lt; μ₂</text>
<line x1="236" y1="110" x2="460" y2="110" stroke="#1d2b44" stroke-width="5" stroke-dasharray="10 5"/>
<line x1="236" y1="102" x2="236" y2="118" stroke="#1d2b44" stroke-width="2"/><line x1="460" y1="102" x2="460" y2="118" stroke="#1d2b44" stroke-width="2"/>
<text x="348" y="96" text-anchor="middle" font-size="12" fill="#1d2b44">B: (−3, 5)</text>
<text x="348" y="136" text-anchor="middle" font-size="12" fill="#1d2b44">contains 0: no convincing evidence of a difference</text>
<line x1="348" y1="166" x2="516" y2="166" stroke="#1d2b44" stroke-width="5"/>
<line x1="348" y1="158" x2="348" y2="174" stroke="#1d2b44" stroke-width="2"/><line x1="516" y1="158" x2="516" y2="174" stroke="#1d2b44" stroke-width="2"/>
<text x="432" y="152" text-anchor="middle" font-size="12" fill="#1d2b44">C: (1, 7)</text>
<text x="524" y="170" font-size="12" fill="#1d2b44">all above 0:</text>
<text x="524" y="184" font-size="12" fill="#1d2b44">evidence μ₁ &gt; μ₂</text>
<line x1="40" y1="200" x2="600" y2="200" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="40" y1="200" x2="40" y2="207"/><line x1="96" y1="200" x2="96" y2="207"/><line x1="152" y1="200" x2="152" y2="207"/><line x1="208" y1="200" x2="208" y2="207"/><line x1="264" y1="200" x2="264" y2="207"/><line x1="320" y1="200" x2="320" y2="207"/><line x1="376" y1="200" x2="376" y2="207"/><line x1="432" y1="200" x2="432" y2="207"/><line x1="488" y1="200" x2="488" y2="207"/><line x1="544" y1="200" x2="544" y2="207"/><line x1="600" y1="200" x2="600" y2="207"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="40" y="222">−10</text><text x="96" y="222">−8</text><text x="152" y="222">−6</text><text x="208" y="222">−4</text><text x="264" y="222">−2</text><text x="320" y="222">0</text><text x="376" y="222">2</text><text x="432" y="222">4</text><text x="488" y="222">6</text><text x="544" y="222">8</text><text x="600" y="222">10</text>
</g>
<text x="320" y="244" text-anchor="middle" font-size="13" fill="#1d2b44">Difference in population means, μ₁ − μ₂</text>
</svg>
<figcaption>Figure 1. Three possible intervals for μ₁ − μ₂. A and C (solid bars) exclude 0, so each gives convincing evidence of a difference, in opposite directions. B (dashed bar) contains 0, so a difference of zero is plausible.</figcaption>
</figure>

**Claims about a size.** Some claims name a value other than 0, such as "on average, group 1 scores at least 10 points higher". Translate the claim into a statement about μ₁ − μ₂ (here μ₁ − μ₂ ≥ 10), then compare it with the whole interval:

- every plausible value satisfies the claim → convincing evidence **for** it;
- the interval straddles the claimed boundary → not convincing evidence either way;
- no plausible value satisfies the claim → convincing evidence **against** it.

**Order of subtraction.** If you reverse the order, the interval for μ₂ − μ₁ is the interval for μ₁ − μ₂ with both signs changed and the limits swapped: (a, b) becomes (−b, −a). The conclusion does not change.

**What kind of conclusion?** (Reminder from Unit 1.) With independent **random samples**, you can generalise to the two populations sampled. With a **randomized experiment**, a difference shown by the interval can be attributed to the treatments (cause and effect), for subjects like those in the study.

Always finish with a sentence in context that refers to the interval.

## Worked example 1: electricity use in two districts

**Context.** A fictional city council took independent random samples of households in two districts and recorded each household's electricity use in one month, in kilowatt-hours (kWh). Each district has several thousand households, so the 10% condition holds, and both samples have at least 30 households.

| District | n | x̄ (kWh) | s (kWh) |
|---|---|---|---|
| Ashgrove | 45 | 412 | 88 |
| Fenmoor | 50 | 401 | 95 |

A 95% two-sample t-interval for μ_A − μ_F (Ashgrove minus Fenmoor) is **(−26.3, 48.3) kWh**. (Point estimate 11 kWh, SE 18.78 kWh, df 92.9, t* 1.986, margin of error 37.3 kWh.)

**(a) Interpret the interval.** We are 95% confident that the interval from −26.3 to 48.3 kWh captures the difference (Ashgrove minus Fenmoor) in the mean monthly electricity use of all households in Ashgrove and all households in Fenmoor.

**(b) Interpret the confidence level.** If the council took many pairs of random samples of 45 Ashgrove and 50 Fenmoor households and built a 95% interval from each pair, about 95% of the intervals would capture the true difference in mean monthly use.

**(c) A councillor claims that Ashgrove households use more electricity, on average.** The claim is μ_A − μ_F > 0. The interval contains 0, and also negative values. A difference of zero, or Fenmoor using more, is plausible. So the interval does **not** give convincing evidence that Ashgrove households use more electricity on average.

**(d) A second councillor claims Fenmoor households use at least 50 kWh more per month, on average.** Translate: μ_F − μ_A ≥ 50, which means μ_A − μ_F ≤ −50. Every value in the interval is greater than −50 (the lower limit is −26.3). So the interval gives convincing evidence **against** this claim.

**Check.** The interval for μ_F − μ_A would be (−48.3, 26.3) kWh. It still contains 0, and its upper limit 26.3 is below 50: same conclusions.

## Worked example 2: an experiment on study schedules

**Context.** A fictional school asked 64 volunteer students to learn a topic for a quiz scored out of 50. The students were randomly assigned, 32 to a **spaced** schedule (short sessions over a week) and 32 to a **block** schedule (one long session).

| Schedule | n | x̄ (points) | s (points) |
|---|---|---|---|
| Spaced | 32 | 36.8 | 6.2 |
| Block | 32 | 31.5 | 7.0 |

The schedules were randomly assigned and both groups have 32 ≥ 30 students, so the conditions are met (the 10% condition is not needed in an experiment). A 99% two-sample t-interval for μ_S − μ_B is **(0.91, 9.69) points**. (Point estimate 5.3, SE 1.653, df 61.1, t* 2.659, margin of error 4.39.)

**(a) Interpret the interval.** We are 99% confident that the interval from 0.91 to 9.69 points captures the true difference (spaced minus block) in the mean quiz score for students like these who use the spaced schedule and who use the block schedule.

**(b) Do the data give convincing evidence that the spaced schedule leads to a higher mean score?** Yes. Both limits are positive, so every plausible value of μ_S − μ_B is greater than 0. Because the schedules were **randomly assigned**, we can conclude that the spaced schedule **causes** a higher mean score for students like these volunteers. The volunteers were not a random sample, so we should be careful about generalising to all students.

**(c) A website claims spaced practice raises the mean score by more than 10 points.** The whole interval lies below 10 (upper limit 9.69). So the interval gives convincing evidence **against** this claim, at the 99% level.

**(d) Reverse the order.** The 99% interval for μ_B − μ_S is (−9.69, −0.91) points. Both limits are negative: the block schedule has the lower mean. Same conclusion, different signs.

**Check.** At 95% the same data give (1.99, 8.61) points, and at 90% (2.54, 8.06). Lower confidence gives a narrower interval, and all three exclude 0.

## Worked example 3: judging written interpretations

**Question.** Four students interpret the 95% interval (−26.3, 48.3) kWh from Worked example 1. Which statements are acceptable?

1. "We are 95% confident that the difference in the mean electricity use of the 45 and 50 households sampled is between −26.3 and 48.3 kWh." **Not acceptable.** It describes the samples. The sample difference is exactly 11 kWh; there is nothing to estimate.
2. "There is a 95% chance that μ_A − μ_F is between −26.3 and 48.3 kWh." **Not acceptable.** The 95% belongs to the method, not this interval.
3. "95% of Ashgrove households use between 26.3 kWh less and 48.3 kWh more than Fenmoor households." **Not acceptable.** It talks about individual households, not means.
4. "We are 95% confident that the interval from −26.3 to 48.3 kWh captures the difference in mean monthly electricity use, Ashgrove minus Fenmoor, for all households in the two districts." **Acceptable.** It has the level, the interval with units, the order, the response and both populations.

## Common misconceptions

- **"The interval contains 0, so the means are equal."** 0 is plausible, not proven. Other values in the interval are just as plausible.
- **"Most of the interval is positive, so group 1 is higher."** If the interval contains 0, there is no convincing evidence of a difference, however much of it is positive.
- **"A 95% confidence interval has a 95% probability of containing μ₁ − μ₂."** The method captures μ₁ − μ₂ about 95% of the time in the long run; one interval either does or does not.
- **Interpreting the sample means.** The interval estimates the difference in **population** means; x̄₁ − x̄₂ is always its centre.
- **Forgetting the order of subtraction.** A negative interval means the second group has the larger mean; you can only say which group if you stated the order.
- **Claiming cause and effect from two random samples.** Causal conclusions need random assignment of treatments.
- **Ignoring the conditions.** An interval built when the conditions fail (for example, small, strongly skewed samples) cannot support any claim, however tidy its limits look.

## Where this leads

Next, Topic 4.9 sets up a significance test for μ₁ − μ₂. You will see that a two-sided test and a confidence interval usually tell a consistent story about whether 0 is plausible. Go to the [next study guide](/advanced-course-resources/statistics/4-9-setting-up-test-difference-between-study-guide/) when you are ready. First, try the [practice questions](/advanced-course-resources/statistics/4-8-justifying-claim-based-on-confidence-practice/), then use the [revision notes](/advanced-course-resources/statistics/4-8-justifying-claim-based-on-confidence-revision-notes/) and the [checklist](/advanced-course-resources/statistics/4-8-justifying-claim-based-on-confidence-checklist/). To revise how the intervals are built, return to [Topic 4.7](/advanced-course-resources/statistics/4-7-constructing-confidence-interval-difference-between-study-guide/).
