---
resourceId: "mb-ap-stats-4.10-study-guide"
title: "Carrying Out a Test for the Difference Between Two Population Means: Study Guide (Statistics 4.10)"
description: "Learn to calculate the two-sample t-statistic and p-value, interpret the p-value in context, compare it with α and write a conclusion about μ₁ − μ₂ that answers the question."
course: "statistics"
unit: 4
topics: ["4.10"]
resourceType: "study-guide"
prerequisites:
  - "Setting up a two-sample t-test: parameters, hypotheses and conditions (Topic 4.9)"
  - "Carrying out a one-sample t-test and interpreting a p-value (Topic 4.5)"
  - "The standard error of x̄₁ − x̄₂ (Topics 4.6 and 4.7)"
prerequisiteResources: ["mb-ap-stats-4.9-study-guide"]
learningObjectives:
  - "Calculate the two-sample t-statistic from summary statistics or raw data, showing the standard error"
  - "Find the p-value from technology, or bound it with a t-table and conservative degrees of freedom, using the tail or tails set by the alternative"
  - "Interpret the p-value in context as a probability calculated by assuming the two population means are equal"
  - "Make a formal decision by comparing the p-value with α, and write a conclusion in context about the alternative hypothesis using non-definitive language"
  - "Use the test result to answer the original investigative question, including what the study design allows you to conclude"
skills: ["3", "4"]
studyMinutes: 45
difficulty: "core"
calculator: "graphing"
calculatorNote: "Use the two-sample t-test function and choose not to pool. Report t to 2 decimal places, the degrees of freedom the calculator gives, and the p-value to 3 or 4 decimal places."
related: ["mb-ap-stats-4.10-revision-notes", "mb-ap-stats-4.10-practice", "mb-ap-stats-4.10-checklist"]
next: "mb-ap-stats-4.10-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Test statistic: t = ((x̄₁ − x̄₂) − 0) / √(s₁²/n₁ + s₂²/n₂). It counts how many standard errors the observed difference is from 0."
  - "Degrees of freedom come from technology and lie between the smaller of n₁ − 1 and n₂ − 1 and n₁ + n₂ − 2. The conservative choice is the smaller of n₁ − 1 and n₂ − 1."
  - "The p-value is the probability, assuming the population means are equal, of a difference in sample means at least as extreme as the one observed, in the direction of Hₐ."
  - "If p-value ≤ α, reject H₀; if p-value > α, fail to reject H₀. Say which, and compare the numbers."
  - "Conclude in context about Hₐ with non-definitive words: 'convincing evidence' or 'not convincing evidence', never 'proves' or 'accept H₀'."
faqs:
  - question: "Why are my degrees of freedom not a whole number?"
    answer: "The two-sample t-test uses an approximation for the degrees of freedom that depends on both sample sizes and both standard deviations. The result is usually a decimal, and it always lies between the smaller of n₁ − 1 and n₂ − 1 and n₁ + n₂ − 2."
  - question: "What if I cannot use technology for the p-value?"
    answer: "Use the conservative degrees of freedom, the smaller of n₁ − 1 and n₂ − 1, and a t-table. The table gives a range for the p-value, for example between 0.01 and 0.025, which is usually enough to compare with α."
  - question: "If I fail to reject H₀, have I shown the two means are equal?"
    answer: "No. You have only failed to find convincing evidence of a difference. A real difference might exist that your samples were too small or too variable to detect."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## Where you are in the test

In Topic 4.9 you set up a two-sample t-test: you defined μ₁ and μ₂, wrote the hypotheses and checked the conditions. That was **State** and **Plan**. This topic finishes the job with **Do** (test statistic and p-value) and **Conclude** (decision and conclusion in context).

The logic is the same as every test you have met. Assume H₀ is true, so the two population means are equal and μ₁ − μ₂ = 0. Ask how surprising your observed difference x̄₁ − x̄₂ would be in that world. If it would be very surprising, you have evidence against H₀.

## The test statistic

The two-sample t-statistic measures how far the observed difference is from the hypothesised difference of 0, in standard errors:

**t = ((x̄₁ − x̄₂) − 0) / √(s₁²/n₁ + s₂²/n₂)**

- The numerator is the **observed difference** minus the **null value** 0.
- The denominator is the **standard error** of x̄₁ − x̄₂, the same one you used for the interval in Topic 4.7. Square each s, divide by its own n, add, then take one square root.

A t of 2.5 means the sample means differ by 2.5 standard errors. A t near 0 means the samples are close to what H₀ predicts.

**Keep the order of subtraction from your hypotheses.** If Hₐ is μ_E − μ_B > 0, calculate x̄_E − x̄_B. Reversing the order flips the sign of t, and you could end up shading the wrong tail.

## Degrees of freedom and the p-value

When H₀ is true and the conditions hold, the t-statistic has approximately a **t-distribution**. Its degrees of freedom (df) come from a long formula that technology applies for you. The result:

**smaller of (n₁ − 1, n₂ − 1) ≤ df ≤ n₁ + n₂ − 2**

The **p-value** is the area in the tail (or tails) of that t-distribution, beyond the observed t, in the direction of Hₐ:

| Hₐ | p-value |
|---|---|
| μ₁ − μ₂ > 0 | P(t ≥ observed t), the upper tail |
| μ₁ − μ₂ < 0 | P(t ≤ observed t), the lower tail |
| μ₁ − μ₂ ≠ 0 | 2 × P(t ≥ \|observed t\|), both tails |

Two ways to find it:

1. **Technology (preferred).** A graphing calculator's two-sample t-test gives t, df and the p-value together. Choose **not** to pool: the course does not assume the population standard deviations are equal.
2. **A t-table.** Use the conservative df, the smaller of n₁ − 1 and n₂ − 1. If that row is not printed, use the next **lower** df in the table. Find the two critical values that the observed t lies between and read off a range for the p-value. A smaller df gives a slightly **larger** p-value, so this never overstates your evidence.

<figure>
<svg viewBox="0 0 640 220" role="img" aria-labelledby="tails-title tails-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="tails-title">One-sided and two-sided p-values on t-distributions</title>
<desc id="tails-desc">Two bell-shaped t-distribution curves side by side, each centred at 0 on an axis from minus 4 to 4. Left panel, labelled one-sided, H a greater than: the area under the curve to the right of t equals 2.31 is hatched and labelled p-value about 0.012. Right panel, labelled two-sided, H a not equal: the areas to the left of minus 1.26 and to the right of 1.26 are both hatched and labelled together p-value about 0.222.</desc>
<rect x="0" y="0" width="640" height="220" fill="#ffffff"/>
<defs><pattern id="hatch410" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="6" stroke="#1d2b44" stroke-width="2"/></pattern></defs>
<polygon points="242.9,150 242.9,142.2 246.4,143.8 250.0,145.2 253.6,146.3 257.1,147.1 260.7,147.8 264.3,148.4 267.9,148.8 271.4,149.1 275.0,149.3 278.6,149.5 282.1,149.7 285.7,149.8 289.3,149.8 292.9,149.9 296.4,149.9 300.0,149.9 300.0,150" fill="url(#hatch410)" stroke="none"/>
<polygon points="360.0,150 360.0,149.8 363.4,149.7 366.9,149.7 370.3,149.6 373.7,149.5 377.1,149.3 380.6,149.1 384.0,148.9 387.4,148.6 390.9,148.3 394.3,147.8 397.7,147.3 401.2,146.6 404.6,145.8 408.0,144.9 411.4,143.7 414.9,142.3 418.3,140.6 421.7,138.6 425.2,136.2 428.6,133.5 432.0,130.3 435.5,126.7 438.9,122.7 442.3,118.2 445.8,113.2 449.2,107.8 452.6,102.0 452.6,150" fill="url(#hatch410)" stroke="none"/>
<polygon points="537.4,150 537.4,102.0 540.8,107.8 544.2,113.2 547.7,118.2 551.1,122.7 554.5,126.7 558.0,130.3 561.4,133.5 564.8,136.2 568.3,138.6 571.7,140.6 575.1,142.3 578.5,143.7 582.0,144.9 585.4,145.8 588.8,146.6 592.3,147.3 595.7,147.8 599.1,148.3 602.6,148.6 606.0,148.9 609.4,149.1 612.9,149.3 616.3,149.5 619.7,149.6 623.1,149.7 626.6,149.7 630.0,149.8 630.0,150" fill="url(#hatch410)" stroke="none"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2" points="30.0,149.9 33.4,149.9 36.8,149.9 40.1,149.8 43.5,149.8 46.9,149.7 50.2,149.6 53.6,149.4 57.0,149.2 60.4,148.9 63.8,148.6 67.1,148.2 70.5,147.6 73.9,146.9 77.3,146.0 80.6,145.0 84.0,143.6 87.4,142.0 90.8,140.1 94.1,137.8 97.5,135.2 100.9,132.1 104.2,128.5 107.6,124.5 111.0,120.0 114.4,115.1 117.8,109.7 121.1,103.9 124.5,97.8 127.9,91.5 131.2,85.0 134.6,78.5 138.0,72.2 141.4,66.1 144.8,60.4 148.1,55.3 151.5,50.9 154.9,47.3 158.2,44.7 161.6,43.1 165.0,42.6 168.4,43.1 171.8,44.7 175.1,47.3 178.5,50.9 181.9,55.3 185.3,60.4 188.6,66.1 192.0,72.2 195.4,78.5 198.8,85.0 202.1,91.5 205.5,97.8 208.9,103.9 212.2,109.7 215.6,115.1 219.0,120.0 222.4,124.5 225.8,128.5 229.1,132.1 232.5,135.2 235.9,137.8 239.2,140.1 242.6,142.0 246.0,143.6 249.4,145.0 252.8,146.0 256.1,146.9 259.5,147.6 262.9,148.2 266.2,148.6 269.6,148.9 273.0,149.2 276.4,149.4 279.8,149.6 283.1,149.7 286.5,149.8 289.9,149.8 293.2,149.9 296.6,149.9 300.0,149.9"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2" points="360.0,149.8 363.4,149.7 366.8,149.7 370.1,149.6 373.5,149.5 376.9,149.3 380.2,149.2 383.6,148.9 387.0,148.7 390.4,148.3 393.8,147.9 397.1,147.4 400.5,146.8 403.9,146.0 407.2,145.1 410.6,144.0 414.0,142.6 417.4,141.0 420.8,139.2 424.1,137.0 427.5,134.4 430.9,131.4 434.2,128.1 437.6,124.2 441.0,120.0 444.4,115.2 447.8,110.1 451.1,104.5 454.5,98.6 457.9,92.5 461.2,86.1 464.6,79.8 468.0,73.4 471.4,67.4 474.8,61.7 478.1,56.5 481.5,52.0 484.9,48.4 488.2,45.7 491.6,44.1 495.0,43.5 498.4,44.1 501.8,45.7 505.1,48.4 508.5,52.0 511.9,56.5 515.2,61.7 518.6,67.4 522.0,73.4 525.4,79.8 528.8,86.1 532.1,92.5 535.5,98.6 538.9,104.5 542.2,110.1 545.6,115.2 549.0,120.0 552.4,124.2 555.8,128.1 559.1,131.4 562.5,134.4 565.9,137.0 569.2,139.2 572.6,141.0 576.0,142.6 579.4,144.0 582.8,145.1 586.1,146.0 589.5,146.8 592.9,147.4 596.2,147.9 599.6,148.3 603.0,148.7 606.4,148.9 609.8,149.2 613.1,149.3 616.5,149.5 619.9,149.6 623.2,149.7 626.6,149.7 630.0,149.8"/>
<g stroke="#1d2b44" stroke-width="2"><line x1="30" y1="150" x2="300" y2="150"/><line x1="360" y1="150" x2="630" y2="150"/></g>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="30" y1="150" x2="30" y2="156"/><line x1="97.5" y1="150" x2="97.5" y2="156"/><line x1="165" y1="150" x2="165" y2="156"/><line x1="232.5" y1="150" x2="232.5" y2="156"/><line x1="300" y1="150" x2="300" y2="156"/>
<line x1="360" y1="150" x2="360" y2="156"/><line x1="427.5" y1="150" x2="427.5" y2="156"/><line x1="495" y1="150" x2="495" y2="156"/><line x1="562.5" y1="150" x2="562.5" y2="156"/><line x1="630" y1="150" x2="630" y2="156"/>
<line x1="242.9" y1="100" x2="242.9" y2="150" stroke-dasharray="4 3"/>
<line x1="452.6" y1="80" x2="452.6" y2="150" stroke-dasharray="4 3"/>
<line x1="537.4" y1="80" x2="537.4" y2="150" stroke-dasharray="4 3"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="30" y="170">−4</text><text x="97.5" y="170">−2</text><text x="165" y="170">0</text><text x="232.5" y="170">2</text><text x="300" y="170">4</text>
<text x="360" y="170">−4</text><text x="427.5" y="170">−2</text><text x="495" y="170">0</text><text x="562.5" y="170">2</text><text x="630" y="170">4</text>
<text x="242.9" y="94">t = 2.31</text>
<text x="452.6" y="74">t = −1.26</text><text x="537.4" y="74">+1.26</text>
<text x="262" y="122" text-anchor="start">p ≈ 0.012</text>
<text x="495" y="200">both hatched tails together: p ≈ 0.222</text>
<text x="165" y="200">hatched upper tail only</text>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="165" y="22">One-sided, Hₐ: μ₁ − μ₂ &gt; 0</text>
<text x="495" y="22">Two-sided, Hₐ: μ₁ − μ₂ ≠ 0</text>
</g>
</svg>
<figcaption>Figure 1. Left: for a one-sided "greater than" alternative, the p-value is the hatched area above the observed t (Worked example 1). Right: for a two-sided alternative, the p-value is the total hatched area in both tails, beyond −|t| and +|t| (Worked example 2).</figcaption>
</figure>

## Interpreting the p-value

The p-value is a **conditional** probability. It is calculated **assuming H₀ is true**, and an interpretation must say so. A reliable template:

> **Assuming the true mean [response] of [population 1] and [population 2] are equal, there is a [p-value] probability of getting a difference in sample means (1 minus 2) of [observed difference] or [more extreme, in the direction of Hₐ] by chance alone.**

For a two-sided test, "more extreme" means "at least as far from 0 in either direction".

The p-value is **not** the probability that H₀ is true, and it is **not** the probability that the result happened by chance. It describes how unusual your data would be **if** the means were equal.

## Decision and conclusion

**Formal decision.** Compare the p-value with the significance level α, which was chosen before the data were seen:

- **p-value ≤ α:** reject H₀.
- **p-value > α:** fail to reject H₀.

Write the comparison explicitly, for example "Because 0.012 ≤ 0.05, we reject H₀."

**Conclusion in context.** The conclusion is about **Hₐ**, uses **non-definitive** language and names the **parameters** and **populations**:

- Reject H₀: "There is **convincing evidence** that the mean [response] of all [population 1] is greater than (less than, different from) that of all [population 2]."
- Fail to reject H₀: "There is **not convincing evidence** that the mean [response] of all [population 1] is greater than (less than, different from) that of all [population 2]."

Never write "proves", "accept H₀" or "the means are equal".

**Answering the investigative question.** A study begins with a question in plain words, such as "Do students at the later-starting school sleep longer?" The test result is the statistical reasoning behind your answer. Finish with a sentence that answers that question directly, and say what the design allows: random samples let you generalise to the populations sampled; random assignment lets you talk about cause and effect.

## Worked example 1: two random samples, one-sided

**Context.** Two fictional secondary schools: Brookfield (1,400 students) starts at 8:00 and Elmstead (1,650 students) starts at 8:45. A researcher believes that Elmstead students sleep longer on school nights. She selects a random sample of 48 Brookfield students and, separately, 52 Elmstead students. Each keeps a sleep diary for one school week, and she records each student's mean nightly sleep in hours.

| School | n | x̄ (hours) | s (hours) |
|---|---|---|---|
| Elmstead | 52 | 7.62 | 0.84 |
| Brookfield | 48 | 7.21 | 0.93 |

**Question.** Do the data give convincing evidence, at α = 0.05, that Elmstead students sleep longer on average?

**State.** μ_E and μ_B = the mean nightly school-night sleep (hours) of all students at Elmstead and at Brookfield. H₀: μ_E − μ_B = 0. Hₐ: μ_E − μ_B > 0.

**Plan.** Two-sample t-test for μ_E − μ_B. Randomization: two independent random samples ✓. 10%: 52 ≤ 165 and 48 ≤ 140 ✓. Sample data: 52 ≥ 30 and 48 ≥ 30 ✓.

**Do.**

1. Observed difference: 7.62 − 7.21 = 0.41 hours.
2. Variance terms: 0.84²/52 = 0.013569 and 0.93²/48 = 0.018019. Sum = 0.031588.
3. SE = √0.031588 = 0.17773 hours.
4. t = (0.41 − 0) / 0.17773 = **2.31**.
5. Technology: df = 94.86 (between 47 and 98, as expected). p-value = P(t ≥ 2.31) = **0.0116**.

**Interpret the p-value.** Assuming the mean nightly sleep of all Elmstead students and all Brookfield students is the same, there is about a 0.0116 probability of getting a difference in sample means (Elmstead minus Brookfield) of 0.41 hours or more by random sampling alone.

**Conclude.** Because 0.0116 ≤ 0.05, we reject H₀. There is convincing evidence that the mean school-night sleep of all Elmstead students is greater than that of all Brookfield students.

**Answer the question.** Yes: the data support the researcher's belief that Elmstead students sleep longer on average. But this is an **observational** study. The schools differ in more than start time (catchment, homework policy, travel), so we **cannot** conclude that the later start **causes** the extra sleep.

**Check with a table.** Conservative df = 48 − 1 = 47. Using the df = 40 row, the one-tail critical values are 2.021 (tail 0.025) and 2.423 (tail 0.01). Since 2.021 < 2.31 < 2.423, 0.01 < p-value < 0.025. Same decision. Note that at α = 0.01 the decision would change (0.0116 > 0.01), which is why α must be fixed before you look at the data.

## Worked example 2: a randomized experiment, two-sided

**Context.** A fictional psychology class asks whether background music **affects** memory. Twenty-four volunteers were randomly assigned, 12 to study a list of 30 words for five minutes with instrumental music playing and 12 to study the same list in silence. Each then wrote down as many words as they could remember.

- Music: 14, 18, 12, 16, 15, 19, 13, 17, 15, 11, 16, 20
- Silence: 16, 19, 15, 18, 13, 21, 17, 14, 18, 16, 20, 15

**Question.** Carry out a test at α = 0.05.

**State.** μ_M and μ_S = the true mean number of words recalled by volunteers like these who study with music and who study in silence. H₀: μ_M − μ_S = 0. Hₐ: μ_M − μ_S ≠ 0.

**Plan.** Two-sample t-test for μ_M − μ_S. Randomization: conditions randomly assigned ✓. 10%: not needed (experiment). Sample data: both groups have 12 < 30, so check both. Music: Q1 = 13.5, Q3 = 17.5, fences 7.5 and 23.5. Silence: Q1 = 15, Q3 = 18.5, fences 9.75 and 23.75. All values lie inside the fences and neither sample is strongly skewed ✓.

**Do.**

1. Means: x̄_M = 186 ÷ 12 = 15.5 words; x̄_S = 202 ÷ 12 = 16.83 words. Difference = −1.33 words.
2. Standard deviations (Sx): s_M = 2.7469 and s_S = 2.4433 words.
3. SE = √(2.7469²/12 + 2.4433²/12) = √(0.628788 + 0.497475) = √1.126263 = 1.0613 words.
4. t = (−1.3333 − 0) / 1.0613 = **−1.26**.
5. Technology: df = 21.70. p-value = 2 × P(t ≤ −1.26) = **0.222**.

**Interpret the p-value.** Assuming the true mean recall is the same with music and in silence, there is about a 0.222 probability that random assignment alone would produce a difference in group means of 1.33 words or more, in either direction.

**Conclude.** Because 0.222 > 0.05, we fail to reject H₀. There is not convincing evidence that the true mean number of words recalled differs between studying with music and studying in silence, for volunteers like these.

**Answer the question.** These data do not show that background music affects memory. They do **not** show that it has no effect: a small effect could exist that 24 volunteers could not detect.

**Check against an interval.** The 95% two-sample t-interval for μ_M − μ_S is (−3.54, 0.87) words. It contains 0, which matches the decision. A two-sided test at α and a (1 − α) confidence interval calculated with the same df always agree in this way, as Topic 4.8 suggested.

## Common misconceptions

- **"The p-value is the probability that H₀ is true."** It is the probability of data like yours, or more extreme, **assuming** H₀ is true.
- **"We accept H₀" or "the means are equal."** Failing to reject H₀ only means the evidence was not convincing.
- **"The test proves the means differ."** Use "convincing evidence"; samples can mislead.
- **Forgetting to double for a two-sided test,** or doubling for a one-sided test.
- **Using df = n₁ + n₂ − 2.** That is the upper limit and belongs to the pooled test, which the course does not use. Use technology or the conservative smaller n − 1.
- **Adding standard deviations** in the denominator instead of variance terms.
- **Comparing t with α.** Compare the **p-value** with α.
- **A conclusion about H₀ or the samples.** Write it about Hₐ and the population means, in context.
- **Claiming cause and effect from two random samples.** Only random assignment supports a causal conclusion.

## Where this leads

This completes inference for means. Unit 5, Regression Analysis, turns to relationships between two quantitative variables, starting with [Topic 5.1, Graphical Representations Between Two Quantitative Variables](/advanced-course-resources/statistics/5-1-graphical-representations-between-two-quantitative-study-guide/). First, try the [practice questions](/advanced-course-resources/statistics/4-10-carrying-out-test-difference-between-practice/), then use the [revision notes](/advanced-course-resources/statistics/4-10-carrying-out-test-difference-between-revision-notes/) and the [checklist](/advanced-course-resources/statistics/4-10-carrying-out-test-difference-between-checklist/) to consolidate. To revise the set-up, go back to [Topic 4.9](/advanced-course-resources/statistics/4-9-setting-up-test-difference-between-study-guide/).
