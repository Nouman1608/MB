---
resourceId: "mb-ap-stats-4.3-practice"
title: "Justifying a Claim Based on a Confidence Interval for a Mean: Practice Questions (Statistics 4.3)"
description: "Seven original Marlbridge practice questions on interpreting t-intervals and confidence levels, judging claims about a mean or mean difference, and the effects of n and C, with suggested rubrics."
course: "statistics"
unit: 4
topics: ["4.3"]
resourceType: "practice-questions"
prerequisites:
  - "Constructing a one-sample t-interval for a mean or mean difference"
prerequisiteResources: ["mb-ap-stats-4.3-study-guide"]
learningObjectives:
  - "Interpret a t-interval and its confidence level in context"
  - "Use an interval to decide whether there is convincing evidence for or against a claim about μ or μd"
  - "Predict and explain how the confidence level and sample size change the margin of error"
  - "Correct common wrong interpretations, including errors in the order of subtraction"
skills: ["2", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Find t* with the inverse t function and df = n − 1. Give endpoints to 2 decimal places."
related: ["mb-ap-stats-4.3-study-guide", "mb-ap-stats-4.3-revision-notes", "mb-ap-stats-4.3-checklist"]
next: "mb-ap-stats-4.3-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written answers."
  - "Every interpretation names the mean (or mean difference), the variable, the population and the units."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All contexts and data are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: intervals are one-sample t-intervals for a population mean or a population mean difference, with df = n − 1, and the conditions are met unless a question says otherwise; give endpoints to 2 decimal places. A graphing calculator is assumed.

## Question 1 (multiple choice · foundation)

A random sample of 40 delivery vans from a fictional company's fleet gives a 95% confidence interval of (142.6, 158.3) km for the mean distance driven per day. Which statement correctly interprets the **interval**?

- (A) We are 95% confident that the interval from 142.6 to 158.3 km captures the true mean daily distance driven by all vans in the fleet.
- (B) 95% of the vans in the fleet drive between 142.6 and 158.3 km a day.
- (C) There is a 95% probability that the sample mean daily distance is between 142.6 and 158.3 km.
- (D) We are 95% confident that the mean daily distance of the 40 sampled vans is between 142.6 and 158.3 km.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** It names the confidence level, both endpoints with units, and the population mean in context.

- (B) describes individual vans. The interval estimates the mean; single vans vary much more.
- (C) is about the sample mean, which is the centre of the interval and is certainly inside it. It also uses "probability" for one calculated interval.
- (D) is about the 40 sampled vans. Their mean is known exactly; the interval estimates the fleet's mean.
</details>

## Question 2 (multiple choice · core)

From the same sample of 12 measurements, a researcher builds a 95% t-interval and a 99% t-interval for μ. Compared with the 95% interval, the 99% interval

- (A) has a larger t*, the same standard error and is wider.
- (B) has a larger standard error and is wider.
- (C) has a smaller t* and is narrower.
- (D) has more degrees of freedom and is wider.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** With df = 11 in both cases, a higher confidence level needs a larger t*. The standard error s/√n depends only on the data, so it is unchanged. A larger t* gives a larger margin of error and a wider interval.

- (B) gives the wrong reason. s and n have not changed, so s/√n has not changed.
- (C) has the direction backwards. Capturing μ more often needs a wider interval.
- (D) is wrong because df = n − 1 = 11 for both intervals. The confidence level does not change df.
</details>

## Question 3 (multiple choice · core)

A random sample of 18 members of a fictional sports club had their resting heart rate measured before and after a ten-minute breathing exercise. With d = after − before, a 95% interval for the true mean difference is (−3.1, 1.4) beats per minute. Which conclusion is best?

- (A) There is convincing evidence that the exercise lowers mean heart rate, because most of the interval is negative.
- (B) There is no convincing evidence of a change in mean heart rate, because 0 is a plausible value for the mean difference.
- (C) The interval proves that the exercise has no effect on heart rate.
- (D) There is convincing evidence that heart rate rises, because the upper limit is positive.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The interval contains 0, so "no change on average" is plausible. The data do not give convincing evidence of a change in either direction.

- (A) judges by "most of the interval". Convincing evidence of a decrease needs the **whole** interval below 0.
- (C) treats a plausible value as proved. Many non-zero values, such as −2 or 1, are plausible too.
- (D) uses one endpoint. Negative values are also plausible, so there is no convincing evidence of a rise.
</details>

## Question 4 (multiple choice · core)

A researcher increases the sample size from 20 to 80. The sample mean, the sample standard deviation and the 95% confidence level stay about the same. What happens to the width of the t-interval?

- (A) It is divided by about 4.
- (B) It is roughly halved, and in fact becomes slightly less than half, because t* also falls.
- (C) It stays the same, because the confidence level is the same.
- (D) It doubles.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The standard error s/√n is multiplied by 1/√4 = 1/2. In addition, df rises from 19 to 79, so t* falls from 2.093 to 1.990. The new width is about 0.475 of the old one.

- (A) uses 1/n instead of 1/√n.
- (C) ignores the n in the standard error.
- (D) has the direction backwards. A larger sample gives a more precise estimate.
</details>

## Question 5 (constructed response · core)

The timetable for bus route 9 in the fictional town of Pellbury says the journey takes 35 minutes on average. A passenger group selected a random sample of 25 of the 1,200 route 9 journeys made last term. A dotplot of the journey times is roughly symmetric with no outliers. The sample mean is 37.8 minutes and the sample standard deviation is 4.6 minutes.

(a) Check the conditions and construct a 95% confidence interval for the true mean journey time.
(b) Interpret the interval in context.
(c) Interpret the confidence level in context.
(d) Does the interval give convincing evidence that the mean journey time last term was longer than the timetable says? Justify your answer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** One-sample t-interval for μ, the true mean journey time of all route 9 journeys last term. Random: random sample of journeys. 10%: 25 ≤ 10% of 1,200 = 120. Sample data: n = 25 < 30, but the dotplot shows no strong skew or outliers.
df = 24, t* = 2.064. SE = 4.6/√25 = 0.92 min. MOE = 2.064 × 0.92 = 1.899 min. Interval: 37.8 ± 1.899 = **(35.90, 39.70) minutes**.

**(b)** We are 95% confident that the interval from 35.90 to 39.70 minutes captures the true mean journey time of all route 9 journeys last term.

**(c)** If the group took many random samples of 25 journeys from last term and built a 95% t-interval from each, about 95% of those intervals would capture the true mean journey time.

**(d)** Yes. Every value in the interval is above 35 minutes, so a mean of 35 minutes (or less) is not plausible. The interval gives convincing evidence that the mean journey time last term was longer than the timetable's 35 minutes.

| Point | What earns it |
|---|---|
| 1 | Conditions checked in context, and correct interval (35.90, 39.70) with t* and SE shown |
| 1 | Interval interpretation with level, both endpoints, units and the population mean in context |
| 1 | Confidence-level interpretation as the long-run capture rate in repeated random samples of 25 |
| 1 | Correct conclusion linked to the whole interval lying above 35 |

Point 4 needs the link to the interval. "Yes, because 37.8 > 35" uses only the point estimate and does not earn it.
</details>

## Question 6 (constructed response · stretch)

A consumer group timed how long a random sample of 15 phones of a fictional model took to charge fully, in minutes. From the same data it reported two intervals for the true mean charging time: Interval A is (48.12, 53.88) and Interval B is (47.00, 55.00). One is a 95% interval and the other a 99% interval. The conditions are met.

(a) Which interval is the 99% interval? Explain.
(b) Find the sample mean and the margin of error of each interval.
(c) Use the 95% interval to find the sample standard deviation.
(d) The manufacturer advertises a mean charging time of 54 minutes. What does each interval say about this claim?
(e) Explain how the same data can lead to the two conclusions in (d).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Interval B. Both use the same x̄, s and n, so the wider interval has the larger t* and the higher confidence level.

**(b)** x̄ is the midpoint: (48.12 + 53.88) ÷ 2 = (47.00 + 55.00) ÷ 2 = **51.0 minutes**. MOE for A = 53.88 − 51.0 = **2.88 minutes**; MOE for B = 55.00 − 51.0 = **4.00 minutes**.

**(c)** For 95% with df = 14, t* = 2.145. MOE = t* × s/√n, so s = 2.88 × √15 ÷ 2.145 = **5.20 minutes**. (Check: at 99%, t* = 2.977 and 2.977 × 5.20/√15 = 4.00.)

**(d)** At 95%, 54 is above the interval (48.12, 53.88), so it is not plausible: convincing evidence that the true mean charging time is less than 54 minutes. At 99%, 54 is inside (47.00, 55.00), so it is plausible: no convincing evidence against the claim.

**(e)** The 99% interval must capture μ in a higher share of samples, so it is wider and includes more plausible values. 54 lies between the two upper limits. A conclusion must always state the confidence level used.

| Point | What earns it |
|---|---|
| 1 | Identifies B, linked to a larger t* (or a wider interval) for the same data |
| 1 | x̄ = 51.0 and both margins of error correct |
| 1 | s = 5.20 with t* = 2.145 and √15 shown |
| 1 | Correct and different conclusions at 95% and 99%, each linked to whether 54 is inside |
| 1 | Explains the difference by the extra width at higher confidence |
</details>

## Question 7 (explanation · stretch)

A random sample of 30 students at a fictional college each had the grip strength of both hands measured, in kilograms. With d = dominant − non-dominant, a 90% interval for the true mean difference is (1.2, 4.6) kg.

(a) Student A writes: "90% of students at the college have a dominant hand between 1.2 and 4.6 kg stronger than their other hand." Explain what is wrong and write a correct interpretation.
(b) Student B subtracted the other way, d = non-dominant − dominant. What 90% interval would Student B get? Would B's conclusion about the claim in (c) be different?
(c) Does the interval give convincing evidence that, on average, students' dominant hands are stronger? Justify.
(d) Find x̄d and the margin of error.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Student A describes individual students. The interval estimates one number, the mean difference for all students; individual differences vary much more. Correct: "We are 90% confident that the interval from 1.2 to 4.6 kg captures the true mean difference in grip strength (dominant hand − non-dominant hand) for all students at the college."

**(b)** Every difference changes sign, so the interval becomes **(−4.6, −1.2) kg**. The conclusion is the same: B's whole interval is below 0, which says the non-dominant hand is weaker on average.

**(c)** Yes. Every plausible value of μd (dominant − non-dominant) is positive, and 0 is not in the interval. At 90% confidence there is convincing evidence that, on average, students at the college have a stronger dominant hand.

**(d)** x̄d = (1.2 + 4.6) ÷ 2 = **2.9 kg**; MOE = (4.6 − 1.2) ÷ 2 = **1.7 kg**.

| Point | What earns it |
|---|---|
| 1 | Explains that the interval is about the mean difference, not individuals, and gives a correct interpretation with the order of subtraction |
| 1 | Reversed interval (−4.6, −1.2) and the same conclusion |
| 1 | Correct conclusion linked to 0 lying outside (below) the whole interval |
| 1 | x̄d = 2.9 kg and MOE = 1.7 kg |
</details>

## How did you do?

- **Q1 or Q7(a) wrong:** re-read "Interpreting the interval" in the [study guide](/advanced-course-resources/statistics/4-3-justifying-claim-based-on-confidence-study-guide/).
- **Q3, Q5(d) or Q7(c) wrong:** revisit "Using an interval to justify a claim" and Worked example 2.
- **Q2, Q4 or Q6 wrong:** revisit "How the confidence level and the sample size change the interval" and Worked example 3.
- **Q5(c) wrong:** revisit "Interpreting the confidence level" and Figure 1.

Then tick off the [topic checklist](/advanced-course-resources/statistics/4-3-justifying-claim-based-on-confidence-checklist/).
