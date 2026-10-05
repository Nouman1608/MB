---
resourceId: "mb-ap-stats-3.11-practice"
title: "Justifying a Claim Based on a Confidence Interval for a Difference in Proportions: Practice Questions (Statistics 3.11)"
description: "Seven original Marlbridge practice questions on interpreting intervals and confidence levels for p₁ − p₂ and using them to justify claims, with worked solutions and suggested rubrics."
course: "statistics"
unit: 3
topics: ["3.11"]
resourceType: "practice-questions"
prerequisites:
  - "Constructing a two-sample z-interval for p₁ − p₂ (Topic 3.10)"
prerequisiteResources: ["mb-ap-stats-3.11-study-guide"]
learningObjectives:
  - "Interpret an interval and a confidence level for p₁ − p₂ in context"
  - "Use whether an interval contains 0, and the signs of its endpoints, to judge claims"
  - "Explain how the confidence level and the study design affect a conclusion"
skills: ["3", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "z* = 1.645 (90%), 1.960 (95%), 2.576 (99%). Keep p̂₁ and p̂₂ unrounded; give endpoints to 3 decimal places."
related: ["mb-ap-stats-3.11-study-guide", "mb-ap-stats-3.11-revision-notes", "mb-ap-stats-3.11-checklist"]
next: "mb-ap-stats-3.11-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every interpretation names the order of subtraction, the response and both populations or treatments."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All contexts and data are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: intervals are two-sample z-intervals for p₁ − p₂ with the standard error √[p̂₁(1 − p̂₁)/n₁ + p̂₂(1 − p̂₂)/n₂]; z* is 1.645 for 90%, 1.960 for 95% and 2.576 for 99%; endpoints are given to 3 decimal places. A graphing calculator is assumed.

## Question 1 (multiple choice · foundation)

Four fictional studies each compare the proportion of students who walk to school at two schools. Each reports a 95% confidence interval for p₁ − p₂. Which interval gives convincing evidence that the two population proportions differ?

- (A) (−0.08, 0.02)
- (B) (−0.01, 0.07)
- (C) (0.015, 0.085)
- (D) (−0.12, 0.12)

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Only (C) does not contain 0. Every plausible value of p₁ − p₂ is positive, so there is convincing evidence of a difference (with p₁ > p₂).

- (A) contains 0. Its point estimate (−0.03) is negative, but 0 is still plausible.
- (B) contains 0, only just. A positive point estimate (0.03) is not enough; the whole interval must exclude 0.
- (D) is centred on 0 and is very wide. It gives no convincing evidence either way.
</details>

## Question 2 (multiple choice · core)

Independent random samples of visitors to two fictional museums, the Harbour Museum (H) and the Hill Museum (L), were asked whether they would recommend the museum. A 90% confidence interval for p_H − p_L is (0.031, 0.149). Which statement correctly interprets the **90% confidence level**?

- (A) There is a 90% probability that p_H − p_L is between 0.031 and 0.149.
- (B) About 90% of all visitors' answers differ by between 3.1 and 14.9 percentage points.
- (C) If many pairs of random samples of the same sizes were taken from the two museums' visitors and a 90% interval were built from each pair, about 90% of the intervals would capture the true difference p_H − p_L.
- (D) If many pairs of random samples were taken, about 90% of the sample differences p̂_H − p̂_L would lie between 0.031 and 0.149.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The confidence level is the long-run capture rate of the method, in repeated random sampling with the same sample sizes from the same populations.

- (A) treats the fixed parameter as random. Once calculated, this interval either captures p_H − p_L or it does not.
- (B) describes individual visitors. The interval estimates one difference in proportions.
- (D) is about where sample differences land. The confidence level describes how often intervals capture the parameter, not how often p̂_H − p̂_L falls inside one particular interval.
</details>

## Question 3 (multiple choice · core)

A fictional delivery company randomly assigns parcels to be sent in either new packaging or the old packaging. It records whether each parcel arrives damaged. The 95% confidence interval for p_new − p_old, the difference in the proportions of parcels like these that would arrive damaged, is (−0.142, −0.038). Which conclusion is best supported?

- (A) There is convincing evidence that the new packaging reduces the proportion of parcels like these that arrive damaged.
- (B) There is no convincing evidence of a difference, because the interval contains only negative values.
- (C) There is convincing evidence that the new packaging increases damage, because the interval lies below 0.
- (D) The new packaging reduces the proportion damaged by exactly 9 percentage points.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The interval does not contain 0, and every value is negative, so p_new < p_old is supported: the new packaging is plausibly between about 3.8 and 14.2 percentage points better. Because packaging was randomly assigned, a cause-and-effect conclusion is reasonable for parcels like these.

- (B) misreads the rule. An interval of negative values excludes 0, which is convincing evidence of a difference.
- (C) gets the direction wrong. p_new − p_old < 0 means the new packaging has the **smaller** damage proportion.
- (D) treats the point estimate (−0.09, the centre of the interval) as the exact true difference. Any value in the interval is plausible.
</details>

## Question 4 (calculation · core)

A fictional transport survey compares the proportions of commuters who car-share in two cities. It reports a 99% confidence interval for p₁ − p₂ of (−0.012, 0.152).

(a) Find the point estimate, the margin of error and the standard error.
(b) Find the 95% confidence interval from the same data.
(c) Does the conclusion about whether the proportions differ depend on the confidence level? Explain.

<details>
<summary>Worked solution</summary>

**(a)** Point estimate = (−0.012 + 0.152) ÷ 2 = **0.07**. Margin of error = (0.152 − (−0.012)) ÷ 2 = **0.082**. Standard error = 0.082 ÷ 2.576 ≈ **0.0318**.

**(b)** 95% margin of error = 1.960 × 0.0318 ≈ 0.0624. Interval: 0.07 ± 0.0624 = **(0.008, 0.132)**.

**(c)** Yes. The 99% interval contains 0, so at 99% confidence there is not convincing evidence of a difference. The 95% interval does not contain 0, so at 95% confidence there is convincing evidence that a higher proportion of commuters car-share in city 1. The confidence level must be chosen before the analysis and stated with the conclusion.

Suggested mark points (3): 1 for the point estimate and margin of error; 1 for the standard error and the 95% interval; 1 for comparing both intervals with 0 and stating that the conclusion changes. Using 1.960 ÷ 2.576 to scale the margin of error directly is an acceptable method.
</details>

## Question 5 (constructed response · core)

Northfield College (4,200 students) and Southcombe College (5,600 students) are fictional. Independent random samples found that 110 of 250 Northfield students and 99 of 300 Southcombe students have a part-time job.

(a) Construct a 95% confidence interval for p_N − p_S. Check the conditions.
(b) Interpret the interval in context.
(c) Interpret the 95% confidence level in context.
(d) A newspaper claims: "Students at the two colleges are equally likely to have part-time jobs." A second claims: "Northfield students are more than 20 percentage points more likely to have a part-time job." Use the interval to comment on both claims.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Conditions: independent random samples; 250 ≤ 10% of 4,200 = 420 and 300 ≤ 10% of 5,600 = 560; counts 110, 140, 99 and 201 are all at least 10.

p̂_N = 110 ÷ 250 = 0.44, p̂_S = 99 ÷ 300 = 0.33, difference 0.11. SE = √(0.44 × 0.56 ÷ 250 + 0.33 × 0.67 ÷ 300) ≈ 0.0415. MOE = 1.960 × 0.0415 ≈ 0.0813. Interval: **(0.029, 0.191)**.

**(b)** We are 95% confident that the interval from 0.029 to 0.191 captures the difference (Northfield − Southcombe) in the proportions of all students at each college who have a part-time job.

**(c)** If we took many pairs of independent random samples of 250 Northfield and 300 Southcombe students and built a 95% interval from each pair, about 95% of the intervals would capture the true difference in the proportions with a part-time job.

**(d)** Claim 1: the interval does not contain 0, so there is convincing evidence **against** the claim that the proportions are equal; in fact every plausible value is positive, so Northfield has the higher proportion. Claim 2: 0.20 is above the whole interval (the upper limit is 0.191), so there is convincing evidence **against** a difference of more than 20 percentage points.

| Point | What earns it |
|---|---|
| 1 | Conditions checked with numbers and a correct interval (0.029, 0.191) |
| 1 | Interval interpretation with confidence, order of subtraction, response and both populations |
| 1 | Confidence level interpreted as a long-run capture rate in repeated random sampling with the same sample sizes |
| 1 | Both claims judged by reference to the interval (0 outside; 0.20 above the upper limit) |

Do not award point 2 for "the difference in sample proportions". Do not award point 3 for any statement using "probability that the true difference is in this interval".
</details>

## Question 6 (constructed response · stretch)

A fictional online shop randomly assigns 320 visitors to see its home page with a free-delivery banner (160 visitors) or without it (160 visitors). Of the banner group, 72 buy something; of the no-banner group, 61 do. The conditions are met. The 95% confidence interval for p_B − p_N is (−0.039, 0.176).

(a) Interpret the interval in context.
(b) Does the experiment give convincing evidence that the banner increases the proportion of visitors who buy something? Explain.
(c) The manager says: "The banner makes no difference, so we should remove it." Comment on this reasoning.
(d) A much larger experiment later gives a 95% interval of (0.021, 0.089). What can the shop now conclude? Include whether a cause-and-effect conclusion is justified.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** We are 95% confident that the interval from −0.039 to 0.176 captures the difference (banner − no banner) in the proportions of visitors like these who would buy something.

**(b)** No. The interval contains 0, so no difference is plausible. The point estimate (about 0.069) is positive, but the interval also includes negative values.

**(c)** The reasoning goes too far. An interval that contains 0 means there is not convincing evidence of a difference; it does not show there is no difference. Values up to 0.176 are plausible, so the banner might raise buying by more than 17 percentage points. The experiment was too small to decide. A larger experiment would be a better basis for the decision.

**(d)** Every value in (0.021, 0.089) is positive, so there is convincing evidence that the banner increases the proportion of visitors who buy, by plausibly between about 2.1 and 8.9 percentage points. Because visitors were randomly assigned to the two versions, a cause-and-effect conclusion is justified for visitors like these.

| Point | What earns it |
|---|---|
| 1 | Interval interpreted with the treatments, the order of subtraction and the response |
| 1 | Correct "no" in (b), justified by 0 lying in the interval |
| 1 | Explains that "no convincing evidence of a difference" is not evidence of no difference, citing a plausible value well above 0 |
| 1 | Correct conclusion in (d) from the interval **and** cause-and-effect justified by random assignment |
</details>

## Question 7 (explanation · stretch)

Forty fictional research teams each study the same two populations. Each team takes its own pair of independent random samples, with the same sample sizes, and builds a 95% confidence interval for the same p₁ − p₂.

(a) About how many of the 40 intervals would you expect to capture the true difference? About how many would miss it?
(b) One team's interval is (0.012, 0.064). The team writes: "Our interval is all positive, so p₁ is definitely greater than p₂." Explain what is wrong with this statement, and rewrite it correctly.
(c) Explain why the team cannot find out whether its own interval is one of those that missed.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** About 95% of 40, that is **about 38**, would capture p₁ − p₂, and about 2 would miss it. The actual numbers will vary from one set of 40 to another.

**(b)** The interval gives convincing evidence, not certainty. The interval might be one of the roughly 5% that miss the true difference. A correct statement: "Because every value in our 95% interval (0.012, 0.064) is positive, we have convincing evidence that p₁ is greater than p₂."

**(c)** Checking would require knowing the true value of p₁ − p₂, which is unknown; that is why it is being estimated. An interval that misses looks just like one that captures.

| Point | What earns it |
|---|---|
| 1 | About 38 capture and about 2 miss, with the idea that the count varies |
| 1 | Replaces "definitely" with "convincing evidence" and refers to the interval excluding 0 |
| 1 | Explains that the true difference is unknown, so a single interval may or may not capture it |
</details>

## How did you do?

- **Q1 or Q3 wrong:** re-read "Using the interval to justify a claim" and Figure 1 in the [study guide](/advanced-course-resources/statistics/3-11-justifying-claim-based-on-confidence-study-guide/).
- **Q2 or Q7 wrong:** revisit "Interpreting the confidence level" and Worked example 3.
- **Q4 wrong:** revisit Worked example 3, where the conclusion changes between 95% and 99%.
- **Q5 incomplete:** compare your interpretation with the template in "Interpreting the interval in context".
- **Q6 wrong:** work through Worked example 2 again, especially part (c).

Then tick off the [topic checklist](/advanced-course-resources/statistics/3-11-justifying-claim-based-on-confidence-checklist/).
