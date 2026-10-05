---
resourceId: "mb-ap-stats-4.3-study-guide"
title: "Justifying a Claim Based on a Confidence Interval for a Mean: Study Guide (Statistics 4.3)"
description: "Learn to interpret a t-interval and its confidence level in context, use the interval to judge a claim about a mean or a matched-pairs mean difference, and predict how n and C change the width."
course: "statistics"
unit: 4
topics: ["4.3"]
resourceType: "study-guide"
prerequisites:
  - "Constructing a one-sample t-interval for a population mean or mean difference (Topic 4.2)"
  - "Using a confidence interval to judge a claim about a proportion (Topic 3.4)"
prerequisiteResources: ["mb-ap-stats-4.2-study-guide"]
learningObjectives:
  - "Interpret a t-interval for a population mean or a population mean difference in context, naming the parameter, the population and the units"
  - "Interpret the confidence level as the long-run capture rate of the method in repeated random sampling"
  - "Explain why one calculated interval may or may not contain the population mean or mean difference"
  - "Use the plausible values in an interval to decide whether there is convincing evidence for or against a claim, including a claim of no difference"
  - "Predict how changing the confidence level or the sample size changes t*, the standard error, the margin of error and the width"
skills: ["2", "4"]
studyMinutes: 45
difficulty: "core"
calculator: "graphing"
calculatorNote: "Find t* with the inverse t function (invT on many graphing calculators) using df = n − 1, and check intervals with a one-sample t-interval function. Give endpoints to 2 decimal places."
related: ["mb-ap-stats-4.3-revision-notes", "mb-ap-stats-4.3-practice", "mb-ap-stats-4.3-checklist"]
next: "mb-ap-stats-4.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Interval: “We are C% confident that the interval from a to b captures the true mean [variable, units] of all [population].”"
  - "For matched pairs, name the mean difference and the order of subtraction, for example “mean of (old − new) times”."
  - "Confidence level: in repeated random samples of the same size, about C% of intervals built this way capture μ (or μd)."
  - "A value outside the interval is not plausible. If 0 is outside an interval for μd, there is convincing evidence of a difference."
  - "Higher C means a larger t* and a wider interval. A larger n gives a smaller s/√n and a narrower interval, roughly in proportion to 1/√n."
faqs:
  - question: "Can I say there is a 95% probability that μ is in my interval?"
    answer: "No. The population mean is a fixed number, so a calculated interval either contains it or does not. The 95% describes the method: about 95% of intervals built this way, from many random samples, capture μ."
  - question: "Why does the sign of a matched-pairs interval matter?"
    answer: "It tells you the direction of the difference. If d = before − after and the whole interval is above 0, the mean was higher before. Reverse the subtraction and every value changes sign, so always say which way you subtracted."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## What a t-interval does and does not tell you

In Topic 4.2 you built intervals of the form x̄ ± t* × s/√n. This topic is about what such an interval **means**, and how to use it to make a decision.

The logic is the same as for proportions in Topic 3.4. The population mean μ is a fixed number. The interval changes from sample to sample, because x̄ changes. With means there is a second source of change: the sample standard deviation s also changes, so **the width changes too**. Any one interval you calculate **may or may not** contain μ, and you cannot tell which, because you do not know μ.

So for one calculated interval we talk about **confidence**, not probability. Confidence describes how reliable the **method** is.

## Interpreting the interval

An interpretation of a C% interval has three parts:

1. the confidence level, C%;
2. the interval, from the lower limit a to the upper limit b, **with units**;
3. the parameter **in context**: a mean, the response variable and the population.

**One-sample template:**

> **We are C% confident that the interval from a to b [units] captures the true mean [variable] of all [population].**

**Matched-pairs template.** For paired data the parameter is μd, the true mean of the differences. State the order of subtraction:

> **We are C% confident that the interval from a to b [units] captures the true mean difference in [variable] (first − second) for all [population or individuals like these].**

The sample mean x̄ (or x̄d) sits at the centre of the interval, so the interval always contains it. An interpretation about x̄, or about "the 16 loaves we weighed", is not an interpretation of the interval.

## Interpreting the confidence level

> **If we took many random samples of the same size from this population and built a C% t-interval from each, about C% of those intervals would capture the true mean.**

Figure 1 shows this. A computer took 20 random samples of size 10 from a normal population with μ = 50 and σ = 8, and built a 95% t-interval from each.

<figure>
<svg viewBox="0 0 640 330" role="img" aria-labelledby="tsim-title tsim-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="tsim-title">Twenty simulated 95% t-intervals for a population mean of 50</title>
<desc id="tsim-desc">Twenty horizontal line segments, one per simulated sample of size 10, stacked from top to bottom over a horizontal axis from 36 to 64. A dot on each segment marks its sample mean. A vertical dotted line marks the true mean, 50. The segments have different lengths: the shortest, sample 16, runs from 43.77 to 50.32 and the longest, sample 1, runs from 39.14 to 59.06. Nineteen segments are solid and cross the line at 50. Sample 18 is drawn dashed, runs from 50.40 to 60.34, lies entirely to the right of 50 and is labelled "misses μ".</desc>
<rect x="0" y="0" width="640" height="330" fill="#ffffff"/>
<line x1="340" y1="22" x2="340" y2="280" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 3"/>
<text x="340" y="16" text-anchor="middle" font-size="13" fill="#1d2b44">true μ = 50</text>
<g stroke="#1d2b44" stroke-width="2.5">
<line x1="138.3" y1="34" x2="508.2" y2="34"/><line x1="256.2" y1="46" x2="378.6" y2="46"/><line x1="316.9" y1="58" x2="493.6" y2="58"/><line x1="156.9" y1="70" x2="422.4" y2="70"/><line x1="304.5" y1="82" x2="461.3" y2="82"/><line x1="204.5" y1="94" x2="414.8" y2="94"/><line x1="130.9" y1="106" x2="385.0" y2="106"/><line x1="205.9" y1="118" x2="436.1" y2="118"/><line x1="259.9" y1="130" x2="489.8" y2="130"/><line x1="230.0" y1="142" x2="422.8" y2="142"/><line x1="289.2" y1="154" x2="482.8" y2="154"/><line x1="174.7" y1="166" x2="481.6" y2="166"/><line x1="297.3" y1="178" x2="507.0" y2="178"/><line x1="250.4" y1="190" x2="443.6" y2="190"/><line x1="220.2" y1="202" x2="462.5" y2="202"/><line x1="224.2" y1="214" x2="345.9" y2="214"/><line x1="256.4" y1="226" x2="479.0" y2="226"/><line x1="321.7" y1="250" x2="509.2" y2="250"/><line x1="234.9" y1="262" x2="410.8" y2="262"/>
</g>
<line x1="347.4" y1="238" x2="531.9" y2="238" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="5 3"/>
<text x="538" y="242" font-size="12" fill="#1d2b44">18: misses μ</text>
<g fill="#1d2b44">
<circle cx="323.3" cy="34" r="3"/><circle cx="317.4" cy="46" r="3"/><circle cx="405.3" cy="58" r="3"/><circle cx="289.7" cy="70" r="3"/><circle cx="382.9" cy="82" r="3"/><circle cx="309.6" cy="94" r="3"/><circle cx="257.9" cy="106" r="3"/><circle cx="321.0" cy="118" r="3"/><circle cx="374.8" cy="130" r="3"/><circle cx="326.4" cy="142" r="3"/><circle cx="386.0" cy="154" r="3"/><circle cx="328.1" cy="166" r="3"/><circle cx="402.1" cy="178" r="3"/><circle cx="347.0" cy="190" r="3"/><circle cx="341.3" cy="202" r="3"/><circle cx="285.1" cy="214" r="3"/><circle cx="367.7" cy="226" r="3"/><circle cx="439.7" cy="238" r="3"/><circle cx="415.4" cy="250" r="3"/><circle cx="322.8" cy="262" r="3"/>
</g>
<line x1="80" y1="280" x2="600" y2="280" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="80" y1="280" x2="80" y2="287"/><line x1="154.3" y1="280" x2="154.3" y2="287"/><line x1="228.6" y1="280" x2="228.6" y2="287"/><line x1="302.9" y1="280" x2="302.9" y2="287"/><line x1="377.1" y1="280" x2="377.1" y2="287"/><line x1="451.4" y1="280" x2="451.4" y2="287"/><line x1="525.7" y1="280" x2="525.7" y2="287"/><line x1="600" y1="280" x2="600" y2="287"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="80" y="302">36</text><text x="154.3" y="302">40</text><text x="228.6" y="302">44</text><text x="302.9" y="302">48</text><text x="377.1" y="302">52</text><text x="451.4" y="302">56</text><text x="525.7" y="302">60</text><text x="600" y="302">64</text>
</g>
<text x="340" y="322" text-anchor="middle" font-size="13" fill="#1d2b44">Value of the variable</text>
</svg>
<figcaption>Figure 1. Twenty simulated 95% t-intervals (n = 10) when μ = 50. Nineteen (solid) capture 50; one (dashed, sample 18) does not. Widths range from 6.55 to 19.91 because s changes from sample to sample.</figcaption>
</figure>

Three things to notice:

- 19 of the 20 intervals capture μ. Another run might give 18 or 20. The 95% is a **long-run** rate.
- Interval 18 looks ordinary. With only that sample, nothing would warn you that it missed.
- The intervals are **not all the same width**. A sample with a large s gives a wide interval; a sample with a small s gives a narrow one.

## Using an interval to justify a claim

An interval is a set of **plausible values** for the parameter. Compare the claimed value with it.

| Where the claimed value lies | What you can conclude |
|---|---|
| **Outside** the interval | Not plausible. **Convincing evidence against** the claim that the parameter equals it. |
| **Inside** the interval | Plausible. **No convincing evidence against** the claim. It is **not proved**: other values are plausible too. |

For a directional claim ("more than 800 g", "reduces the time"), check where the **whole interval** lies. If every plausible value satisfies the claim, the interval gives convincing evidence **for** it. If the interval straddles the boundary, it gives no convincing evidence either way.

**The special role of 0 for matched pairs.** A claim of "no difference on average" is the claim μd = 0.

- Interval entirely above 0: convincing evidence that the mean of (first − second) is **positive**.
- Interval entirely below 0: convincing evidence that it is **negative**.
- Interval contains 0: "no difference" is plausible, so there is **no convincing evidence of a difference**.

## How the confidence level and the sample size change the interval

The margin of error is t* × s/√n.

| Change (all else the same) | t* | Standard error s/√n | Margin of error and width |
|---|---|---|---|
| Increase the confidence level | increases | no change | increase |
| Decrease the confidence level | decreases | no change | decrease |
| Increase the sample size n | decreases slightly (more df) | decreases | decrease |

The width is roughly proportional to **1/√n**. Multiplying n by 4 roughly halves the width. With a t-interval it does a little better than half, because a larger sample also has more degrees of freedom and a smaller t*.

## Worked example 1: judging a claim about a mean

**Context.** The fictional Hollins Bakery labels its large loaves "800 g". A trading-standards officer weighs a random sample of 16 loaves from one week's production of about 2,000. The weights show no strong skewness and no outliers. The sample mean is x̄ = 792.4 g and s = 11.2 g. Conditions: random sample; 16 ≤ 10% of 2,000 = 200; n < 30 but the sample data show no strong skew or outliers.

**(a) 95% interval.** df = 15, t* = 2.131. SE = 11.2/√16 = 2.8 g. MOE = 2.131 × 2.8 = 5.968 g. Interval: 792.4 ± 5.968 = **(786.43, 798.37) g**.

**(b) Interpret it.** We are 95% confident that the interval from 786.43 g to 798.37 g captures the true mean weight of all large loaves Hollins Bakery produced that week.

**(c) Interpret the confidence level.** If the officer took many random samples of 16 loaves from that week and built a 95% t-interval from each, about 95% of the intervals would capture the true mean weight of the loaves.

**(d) Judge the label.** 800 g is above the whole interval, so a mean of 800 g is not plausible. The interval gives **convincing evidence** that the true mean weight of that week's large loaves is less than 800 g.

**Check at other levels.** At 90% the interval is (787.49, 797.31) g, which also excludes 800. At 99% (t* = 2.947, MOE = 8.251 g) it is (784.15, 800.65) g, which **includes** 800. At 99% confidence the label is still plausible. Always state the confidence level with the conclusion.

## Worked example 2: a matched-pairs interval and a claim of no difference

**Context.** A fictional running club tested a new shoe. Each of 10 club members ran a 5 km time trial in their old shoes and in the new shoes, a week apart. A coin toss decided which shoes each runner wore first. Times are in seconds.

| Runner | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Old shoes | 1512 | 1388 | 1645 | 1470 | 1590 | 1423 | 1555 | 1608 | 1497 | 1442 |
| New shoes | 1494 | 1363 | 1636 | 1439 | 1576 | 1401 | 1559 | 1581 | 1478 | 1430 |
| d = old − new | 18 | 25 | 9 | 31 | 14 | 22 | −4 | 27 | 19 | 12 |

**Step 1: one sample of differences.** The data are paired (each runner gives two times), so work with d. x̄d = 173 ÷ 10 = 17.3 s and sd = 10.155 s. A positive d means the runner was faster in the new shoes.

**Step 2: conditions.** Random: the order of the shoes was randomly assigned. The 10% condition does not apply, because the runners were not sampled from a population. Sample data: there are only 10 differences, so check them. Ordered: −4, 9, 12, 14, 18, 19, 22, 25, 27, 31. Q1 = 12, Q3 = 25, IQR = 13, so the fences are −7.5 and 44.5. No difference is an outlier and there is no strong skew.

**Step 3: 95% interval.** df = 9, t* = 2.262. SE = 10.155/√10 = 3.211 s. MOE = 2.262 × 3.211 = 7.26 s. Interval: **(10.04, 24.56) s**.

**Step 4: interpret.** We are 95% confident that the interval from 10.04 to 24.56 seconds captures the true mean difference in 5 km time (old shoes − new shoes) for runners like these.

**Step 5: judge three claims.**

1. *"The new shoes make no difference on average."* That is μd = 0. 0 is below the whole interval, so it is not plausible. There is **convincing evidence** that the mean time is lower in the new shoes. Because the order was randomly assigned, this supports a cause-and-effect conclusion, but only for runners like these volunteers, not for all runners.
2. *"The new shoes save about 20 seconds."* 20 is inside the interval, so it is plausible. There is no convincing evidence against it, but it is not proved.
3. *"The new shoes save at least 30 seconds on average."* Every plausible value is below 30, so the interval gives **convincing evidence against** this claim.

<figure>
<svg viewBox="0 0 640 230" role="img" aria-labelledby="shoe-title shoe-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="shoe-title">90%, 95% and 99% intervals for the mean difference in 5 km time</title>
<desc id="shoe-desc">A horizontal axis of mean difference, old minus new, in seconds, from minus 5 to 35. Three horizontal segments are centred on the sample mean difference 17.3 seconds, shown by an open circle. The 90% interval runs from 11.41 to 23.19, the 95% interval from 10.04 to 24.56 and the 99% interval from 6.86 to 27.74. Dotted vertical reference lines mark 0 (no difference), 20 and 30 seconds. All three intervals lie entirely to the right of 0 and entirely to the left of 30. The line at 20 crosses all three intervals.</desc>
<rect x="0" y="0" width="640" height="230" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="2 3">
<line x1="145" y1="30" x2="145" y2="170"/><line x1="405" y1="30" x2="405" y2="170"/><line x1="535" y1="30" x2="535" y2="170"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="145" y="22">0 (no difference)</text><text x="405" y="22">20</text><text x="535" y="22">30</text>
</g>
<line x1="293.4" y1="60" x2="446.4" y2="60" stroke="#1d2b44" stroke-width="4"/>
<line x1="275.5" y1="95" x2="464.3" y2="95" stroke="#1d2b44" stroke-width="4"/>
<line x1="234.2" y1="130" x2="505.6" y2="130" stroke="#1d2b44" stroke-width="4"/>
<circle cx="369.9" cy="60" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="369.9" cy="95" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="369.9" cy="130" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="228" y="64">90%: 11.41 to 23.19</text><text x="228" y="99">95%: 10.04 to 24.56</text><text x="228" y="134">99%: 6.86 to 27.74</text>
</g>
<line x1="80" y1="170" x2="600" y2="170" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="80" y1="170" x2="80" y2="177"/><line x1="145" y1="170" x2="145" y2="177"/><line x1="210" y1="170" x2="210" y2="177"/><line x1="275" y1="170" x2="275" y2="177"/><line x1="340" y1="170" x2="340" y2="177"/><line x1="405" y1="170" x2="405" y2="177"/><line x1="470" y1="170" x2="470" y2="177"/><line x1="535" y1="170" x2="535" y2="177"/><line x1="600" y1="170" x2="600" y2="177"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="80" y="193">−5</text><text x="145" y="193">0</text><text x="210" y="193">5</text><text x="275" y="193">10</text><text x="340" y="193">15</text><text x="405" y="193">20</text><text x="470" y="193">25</text><text x="535" y="193">30</text><text x="600" y="193">35</text>
<text x="340" y="215">Mean difference in 5 km time, old − new (seconds)</text>
</g>
</svg>
<figcaption>Figure 2. The running-club differences give wider intervals at higher confidence, all centred on x̄d = 17.3 s. Every interval excludes 0 and 30 and includes 20, so the three conclusions above hold at all three levels. Text labels name each level, so the figure does not rely on colour.</figcaption>
</figure>

**Check.** The mean of the old times is 1513.0 s and the mean of the new times is 1495.7 s. Their difference, 17.3 s, equals x̄d, as it must. But you cannot get sd from the two separate standard deviations; you need the differences themselves.

## Worked example 3: predicting the effect of changes

Use the Hollins Bakery sample (x̄ = 792.4 g, s = 11.2 g, n = 16). The 95% interval had MOE 5.968 g and width 11.94 g.

**(a) 99% instead of 95%, same data.** t* rises from 2.131 to 2.947; SE stays 2.8 g. MOE = 8.251 g, which is 1.382 times as large. Wider interval.

**(b) 90% instead of 95%.** t* = 1.753, MOE = 4.909 g. Narrower interval.

**(c) n = 64 instead of 16, same x̄ and s, 95%.** The sample is 4 times larger, so SE = 11.2/√64 = 1.4 g, half of 2.8 g. Also df = 63, so t* falls to 1.998. MOE = 1.998 × 1.4 = 2.798 g, giving (789.60, 795.20) g. The new width, 5.60 g, is 0.469 of the old width: a little less than half.

**Lesson.** More confidence costs width. Only a larger sample gives more confidence and a narrow interval together.

## Conditions still matter

The long-run capture rate only holds if the Topic 4.2 conditions are met. Without random sampling or random assignment, the confidence level has no meaning. With a small sample from a strongly skewed population, the true capture rate can be well below C%. The margin of error covers only random variation; it cannot fix a biased sample or a poor measuring method.

## Common misconceptions

- **"There is a 95% probability that μ is between a and b."** The calculated interval either contains μ or not. Say "95% confident" and explain the 95% as the long-run capture rate.
- **"95% of the loaves weigh between 786.43 and 798.37 g."** The interval estimates the **mean** weight. Individual loaves vary far more than this.
- **"The interval captures x̄."** It always does; x̄ is its centre. The interpretation is about μ.
- **"800 g is inside the 99% interval, so the loaves really average 800 g."** Inside means plausible, not proved.
- **Forgetting the order of subtraction** in a matched-pairs interpretation. "(10.04, 24.56)" means nothing until you say it is old − new.
- **"0 is in the interval, so there is no difference."** It means there is no **convincing evidence** of a difference.
- **"Doubling n halves the width."** You need about 4 times the sample size.
- **"A higher confidence level changes the standard error."** The confidence level changes only t*.

## Where this leads

Topic 4.4 asks the same kind of question with a significance test instead of an interval: [Setting Up a Test for a Population Mean or Population Mean Difference](/advanced-course-resources/statistics/4-4-setting-up-test-population-mean-study-guide/). Try the [practice questions](/advanced-course-resources/statistics/4-3-justifying-claim-based-on-confidence-practice/) now, then use the [revision notes](/advanced-course-resources/statistics/4-3-justifying-claim-based-on-confidence-revision-notes/) and the [checklist](/advanced-course-resources/statistics/4-3-justifying-claim-based-on-confidence-checklist/) to consolidate. To review how the interval is built, return to [Topic 4.2](/advanced-course-resources/statistics/4-2-constructing-confidence-interval-population-mean-study-guide/).
