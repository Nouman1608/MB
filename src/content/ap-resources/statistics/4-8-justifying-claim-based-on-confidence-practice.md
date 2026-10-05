---
resourceId: "mb-ap-stats-4.8-practice"
title: "Justifying a Claim With a Confidence Interval for Two Means: Practice Questions (Statistics 4.8)"
description: "Seven original Marlbridge practice questions on interpreting intervals for μ₁ − μ₂ and confidence levels, and using intervals to justify claims, with worked solutions and suggested rubrics."
course: "statistics"
unit: 4
topics: ["4.8"]
resourceType: "practice-questions"
prerequisites:
  - "Constructing a two-sample t-interval (Topic 4.7)"
prerequisiteResources: ["mb-ap-stats-4.8-study-guide"]
learningObjectives:
  - "Interpret an interval for μ₁ − μ₂ and a confidence level in context"
  - "Decide whether an interval gives convincing evidence of a difference"
  - "Judge claims about the direction and size of a difference in means"
  - "Explain how intervals at different confidence levels can lead to different conclusions"
skills: ["4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Use the two-sample t-interval function (not pooled) where you need to build an interval. Round intervals to 2 decimal places."
related: ["mb-ap-stats-4.8-study-guide", "mb-ap-stats-4.8-revision-notes", "mb-ap-stats-4.8-checklist"]
next: "mb-ap-stats-4.8-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written answers."
  - "Every conclusion must refer to the interval and be in context."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All data sets and studies are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: the conditions for a two-sample t-interval are met unless the question says otherwise; degrees of freedom come from technology (the conservative df is also accepted); intervals are rounded to 2 decimal places. A graphing calculator is assumed.

## Question 1 (multiple choice · foundation)

Independent random samples of apples were taken from two fictional orchards, West and East. A 95% confidence interval for μ_W − μ_E, the difference in mean apple mass, is (4.2, 11.8) grams. Which is a correct interpretation?

- (A) We are 95% confident that the mean masses of the apples in the two samples differ by between 4.2 and 11.8 g.
- (B) 95% of West apples are between 4.2 and 11.8 g heavier than East apples.
- (C) We are 95% confident that the interval from 4.2 to 11.8 g captures the difference (West minus East) in the mean mass of all apples from the two orchards.
- (D) There is a 95% probability that the true difference in mean mass is between 4.2 and 11.8 g.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** It gives the level, the interval with units, the order of subtraction, and the population means in context.

- (A) is about the sample means. Their difference is known exactly (8.0 g, the centre of the interval).
- (B) is about individual apples, not means.
- (D) attaches the probability to this one interval. The 95% describes the long-run success rate of the method.
</details>

## Question 2 (multiple choice · core)

A 90% confidence interval for μ₁ − μ₂ is (−2.7, 5.3). Which conclusion is correct?

- (A) There is convincing evidence that μ₁ > μ₂, because most of the interval is positive.
- (B) There is convincing evidence that μ₁ = μ₂, because the interval contains 0.
- (C) There is not convincing evidence of a difference between μ₁ and μ₂, because 0 is a plausible value.
- (D) There is convincing evidence that μ₁ < μ₂, because the interval contains negative values.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The interval contains 0, so "no difference" is plausible. It also contains positive and negative values, so neither direction is supported.

- (A) judges by how much of the interval is positive. Any interval containing 0 leaves "no difference" plausible.
- (B) treats a plausible value as proven. Many non-zero values are also plausible.
- (D) ignores the positive values, which are plausible too.
</details>

## Question 3 (multiple choice · core)

A researcher reports a 99% confidence interval for the difference in mean reaction times of two age groups. What does "99% confident" mean?

- (A) 99% of the people in the two samples have reaction times inside the interval.
- (B) If many pairs of random samples of the same sizes were taken and a 99% interval built from each, about 99% of the intervals would capture the true difference in mean reaction times.
- (C) The interval contains 99% of all possible values of x̄₁ − x̄₂.
- (D) There is a 1% chance that the researcher made a calculation error.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The confidence level is the long-run capture rate of the method under repeated random sampling.

- (A) is about individuals, and the interval is about a difference in means, not individual times.
- (C) describes sample differences, not the parameter. The interval is built to capture μ₁ − μ₂, not to contain 99% of sample statistics.
- (D) confuses sampling variability with mistakes. The confidence level assumes the calculation is correct.
</details>

## Question 4 (multiple choice · core)

A 95% confidence interval for μ_A − μ_B is (3.1, 7.9) seconds. What is the 95% confidence interval for μ_B − μ_A from the same data?

- (A) (3.1, 7.9) seconds
- (B) (−7.9, −3.1) seconds
- (C) (−3.1, 7.9) seconds
- (D) (−7.9, 7.9) seconds

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Reversing the order changes the sign of every plausible value: (a, b) becomes (−b, −a). Both intervals say the same thing: μ_A is between 3.1 and 7.9 seconds larger than μ_B.

- (A) ignores the change of sign.
- (C) changes the sign of only one limit.
- (D) is not centred on the new point estimate, −5.5 seconds, and is much too wide.
</details>

## Question 5 (constructed response · core)

In a fictional experiment, 50 adult volunteers were randomly assigned to learn touch-typing with an **old** tutorial or a **new** tutorial, 25 each. After four weeks each volunteer's typing speed was measured in words per minute (wpm). A 95% confidence interval for μ_old − μ_new is (−9.3, −2.5) wpm.

(a) Interpret the interval in context.
(b) Do the data give convincing evidence that the new tutorial leads to a higher mean typing speed? Justify your answer.
(c) Can the company conclude that the new tutorial **causes** the higher mean speed? Explain.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** We are 95% confident that the interval from −9.3 to −2.5 wpm captures the true difference (old minus new) in mean typing speed after four weeks for adults like these taught with the old tutorial and with the new tutorial.

**(b)** Yes. Both limits are negative, so every plausible value of μ_old − μ_new is below 0: the new tutorial's mean is plausibly between 2.5 and 9.3 wpm higher. Because 0 is not in the interval, there is convincing evidence that the new tutorial gives a higher mean speed.

**(c)** Yes, for volunteers like these. The tutorials were randomly assigned, so other variables should be balanced between the groups and the difference can be attributed to the tutorial. The volunteers were not a random sample of all adults, so the result may not generalise to everyone.

| Point | What earns it |
|---|---|
| 1 | Interpretation with level, interval, units, order of subtraction, response and treatments |
| 1 | Notes that the whole interval is below 0 (0 not included) and links this to the new tutorial having the higher mean |
| 1 | Cause and effect justified by random assignment |
| 1 | Notes the limit on generalising because the volunteers were not randomly sampled |

A correct conclusion with no reference to the interval does not earn point 2.
</details>

## Question 6 (constructed response · stretch)

A fictional transport authority took a random sample of 32 weekday trips and an independent random sample of 30 weekend trips on one tram line and recorded the end-to-end journey time, in minutes. Thousands of trips run each month.

| Day type | n | x̄ (minutes) | s (minutes) |
|---|---|---|---|
| Weekday | 32 | 41.6 | 6.0 |
| Weekend | 30 | 37.4 | 4.4 |

(a) Construct a 95% confidence interval for μ_D − μ_E (weekday minus weekend). Show the SE, df and t*.
(b) Judge claim (i): "Weekday journeys take longer on average than weekend journeys."
(c) Judge claim (ii): "Weekday journeys take at least 5 minutes longer on average."

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Conditions: two independent random samples; 32 and 30 are far below 10% of the trips each month; both n ≥ 30. Point estimate 41.6 − 37.4 = 4.2 minutes. SE = √(6.0²/32 + 4.4²/30) = 1.3305 minutes. Technology: df = 56.79, t* = 2.0026, margin of error = 2.6646. Interval: **(1.54, 6.86) minutes**. (Conservative df = 29: t* = 2.0452, interval (1.48, 6.92) minutes.)

**(b)** Claim (i) says μ_D − μ_E > 0. The whole interval is above 0, so the interval gives **convincing evidence for** claim (i): the mean weekday journey on this line is plausibly between 1.54 and 6.86 minutes longer.

**(c)** Claim (ii) says μ_D − μ_E ≥ 5. The interval contains values below 5 (from 1.54 to 5) and values above 5. Both "at least 5" and "less than 5" are plausible, so there is **not convincing evidence** for claim (ii), and not convincing evidence against it either.

| Point | What earns it |
|---|---|
| 1 | Conditions noted and correct SE, df (technology or 29) and t* |
| 1 | Correct interval with units |
| 1 | Claim (i) supported because the interval lies entirely above 0, in context |
| 1 | Claim (ii) not supported because the interval contains values below 5 (straddles 5), in context |
</details>

## Question 7 (explanation · stretch)

Independent random samples of 35 adults from each of two fictional regions, P and Q, recorded daily minutes spent reading. From the **same** data, a researcher reports:

- 90% interval for μ_P − μ_Q: (0.51, 5.49) minutes
- 99% interval for μ_P − μ_Q: (−0.96, 6.96) minutes

(a) Explain how the same data can give both intervals, and why the 99% interval is wider.
(b) What can be concluded about a difference in mean reading time from each interval?
(c) A reader says: "The 99% interval contains 0, so the 90% interval must be wrong." Respond.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Both intervals have the same centre, the point estimate x̄_P − x̄_Q = 3.0 minutes, and the same standard error (1.4952 minutes). Only the critical value changes: t* = 1.668 for 90% and 2.651 for 99% (df = 67.57). A larger t* gives a larger margin of error (2.49 against 3.96 minutes), so the 99% interval is wider. More confidence costs precision.

**(b)** At 90%, the interval lies entirely above 0, so there is convincing evidence that adults in Region P read for longer on average than adults in Region Q. At 99%, the interval contains 0, so at that confidence level there is not convincing evidence of a difference.

**(c)** Neither interval is wrong; they answer the question with different levels of confidence. The evidence of a difference is convincing at 90% confidence but not at 99%. The researcher should decide the confidence level before seeing the data and report the conclusion for that level.

| Point | What earns it |
|---|---|
| 1 | Same point estimate and SE; wider because t* is larger at 99% |
| 1 | Correct conclusion for each interval, referring to 0, in context |
| 1 | Explains that the conclusions differ because of the confidence level, not an error, and that the level should be chosen in advance |
</details>

## How did you do?

- **Q1 or Q5(a) wrong:** re-read "Interpreting the interval" and Worked example 3 in the [study guide](/advanced-course-resources/statistics/4-8-justifying-claim-based-on-confidence-study-guide/).
- **Q3 wrong:** re-read "Interpreting the confidence level".
- **Q2, Q5(b) or Q6(b) wrong:** revisit the table and Figure 1 in "Using an interval to justify a claim".
- **Q4 wrong:** re-read the paragraph on the order of subtraction and Worked example 2(d).
- **Q5(c) wrong:** revisit Worked example 2(b) on cause and effect.
- **Q6(c) or Q7 wrong:** revisit "Claims about a size" and Worked examples 1(d) and 2(c).

Then tick off the [topic checklist](/advanced-course-resources/statistics/4-8-justifying-claim-based-on-confidence-checklist/).
