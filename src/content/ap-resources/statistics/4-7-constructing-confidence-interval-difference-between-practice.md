---
resourceId: "mb-ap-stats-4.7-practice"
title: "Constructing a Confidence Interval for the Difference Between Two Means: Practice Questions (Statistics 4.7)"
description: "Seven original Marlbridge practice questions on two-sample t-intervals: choosing the procedure, conditions, standard error, degrees of freedom and full intervals, with suggested rubrics."
course: "statistics"
unit: 4
topics: ["4.7"]
resourceType: "practice-questions"
prerequisites:
  - "One-sample t-intervals (Topic 4.2) and the sampling distribution of x̄₁ − x̄₂ (Topic 4.6)"
prerequisiteResources: ["mb-ap-stats-4.7-study-guide"]
learningObjectives:
  - "Choose a two-sample t-interval and tell it apart from paired and proportion procedures"
  - "Check the conditions for a two-sample t-interval in a sampling study and in an experiment"
  - "Calculate the standard error, margin of error and interval for μ₁ − μ₂"
  - "Find and correct errors in a two-sample interval calculation"
skills: ["2", "3", "4"]
studyMinutes: 50
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Use the two-sample t-interval function, not pooled. Keep unrounded values and round intervals to 2 decimal places unless told otherwise."
related: ["mb-ap-stats-4.7-study-guide", "mb-ap-stats-4.7-revision-notes", "mb-ap-stats-4.7-checklist"]
next: "mb-ap-stats-4.7-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every parameter needs an order of subtraction, a response variable and both groups."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All data sets are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: s is the sample standard deviation; degrees of freedom (df) come from technology unless stated, with the conservative alternative (smaller of n₁ − 1 and n₂ − 1) also accepted; intervals are rounded to 2 decimal places. A graphing calculator is assumed.

## Question 1 (multiple choice · foundation)

A food scientist selects a random sample of 36 loaves from Bakery P's output and a separate random sample of 40 loaves from Bakery Q's output. She weighs each loaf in grams and wants to estimate how much the mean loaf weights of the two bakeries differ. Which procedure should she use?

- (A) A one-sample t-interval for a population mean difference
- (B) A two-sample t-interval for μ_P − μ_Q
- (C) A two-sample z-interval for p_P − p_Q
- (D) A one-sample t-interval for μ_P

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The response (weight in grams) is quantitative, there are two groups, and the two random samples are independent: no loaf from P is linked to a particular loaf from Q.

- (A) is for paired data. The loaves cannot be matched in pairs, and the samples even have different sizes.
- (C) is for a categorical response (proportions), not a measurement.
- (D) estimates one bakery's mean only; it cannot estimate a difference.
</details>

## Question 2 (multiple choice · core)

Two independent random samples give n₁ = 16, s₁ = 4.0 and n₂ = 25, s₂ = 5.0. What is the standard error of x̄₁ − x̄₂?

- (A) 0.67
- (B) 1.00
- (C) 1.41
- (D) 2.00

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** SE = √(4.0²/16 + 5.0²/25) = √(1 + 1) = √2 ≈ 1.41.

- (A) forgets to square the standard deviations: √(4/16 + 5/25) = √0.45 ≈ 0.67.
- (B) combines the groups as √[(s₁² + s₂²)/(n₁ + n₂)] = √(41/41) = 1. Each variance must be divided by its own sample size.
- (D) adds the two standard errors: 4/√16 + 5/√25 = 1 + 1 = 2. Variances add, not standard deviations.
</details>

## Question 3 (multiple choice · core)

In a fictional trial, 28 volunteers with sore muscles were randomly assigned, 14 to each of two creams. The response is the time, in minutes, until the volunteer reports relief. Which checks are needed before constructing a two-sample t-interval for the difference in mean times?

- (A) Random assignment; each group is at most 10% of a population; both groups have at least 30 volunteers
- (B) Random assignment; neither group's data show strong skewness or outliers
- (C) Two independent random samples; each sample is at most 10% of its population
- (D) Random assignment; at least 10 successes and 10 failures in each group

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** This is a randomized experiment, so randomization is met by random assignment and the 10% condition is not needed. Both groups have 14 < 30 volunteers, so both samples must be free from strong skewness and outliers.

- (A) adds the 10% condition, which does not apply to an experiment, and demands n ≥ 30, which is only one way to meet the sample data condition.
- (C) describes a sampling study, not an experiment, and leaves out the sample data condition.
- (D) is the large-counts condition for proportions, not for means.
</details>

## Question 4 (calculation · core)

A fictional health clinic has two branches. A random sample of 22 visits to Branch K had a mean waiting time of 18.2 minutes with s = 6.1 minutes. A separate random sample of 18 visits to Branch L had a mean of 14.6 minutes with s = 4.3 minutes. Dot plots of both samples show no strong skewness and no outliers. Each branch has thousands of visits a year.

Calculate a 95% confidence interval for μ_K − μ_L, showing the point estimate, standard error, df, t* and margin of error.

<details>
<summary>Worked solution</summary>

1. Point estimate: 18.2 − 14.6 = **3.6 minutes**.
2. SE = √(6.1²/22 + 4.3²/18) = √(1.6914 + 1.0272) = **1.6488 minutes**.
3. Technology: df = 37.27, t* = **2.0257**.
4. Margin of error = 2.0257 × 1.6488 = **3.3400 minutes**.
5. Interval: 3.6 ± 3.34 = **(0.26, 6.94) minutes**.

**Conservative alternative:** df = 18 − 1 = 17, t* = 2.1098, margin of error 3.4787, interval (0.12, 7.08) minutes.

Suggested mark points (3): 1 for the point estimate and correct SE; 1 for a t* consistent with the df stated (technology or 17); 1 for the correct interval with units.
</details>

## Question 5 (constructed response · core)

A fictional public-health office took a random sample of 60 adults from City A (adult population 210,000) and an independent random sample of 55 adults from City B (adult population 95,000). Each adult recorded their minutes of moderate exercise in one week.

| City | n | x̄ (minutes) | s (minutes) |
|---|---|---|---|
| A | 60 | 152 | 64 |
| B | 55 | 128 | 71 |

Dot plots of both samples are skewed to the right.

(a) Name the procedure and define the parameter.
(b) Check the conditions. Explain whether the skewness is a problem.
(c) Construct a 99% confidence interval.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Two-sample t-interval for μ_A − μ_B, where μ_A − μ_B = the difference (City A minus City B) in the mean weekly minutes of moderate exercise of all adults in City A and all adults in City B.

**(b)** *Randomization:* two independent random samples. *10%:* 60 ≤ 21,000 and 55 ≤ 9,500. *Sample data:* both samples have n ≥ 30 (60 and 55), so the sampling distribution of x̄_A − x̄_B is approximately normal even though the samples are skewed. The skewness is not a problem here.

**(c)** Point estimate 152 − 128 = 24 minutes. SE = √(64²/60 + 71²/55) = 12.646 minutes. Technology: df = 109.04, t* = 2.6217, margin of error = 33.15 minutes. Interval: **(−9.15, 57.15) minutes**. (Conservative df = 54: t* = 2.6700, interval (−9.76, 57.76) minutes.)

| Point | What earns it |
|---|---|
| 1 | Names a two-sample t-interval and defines μ_A − μ_B with order, response and both populations |
| 1 | Randomization and 10% checked for both cities, with numbers |
| 1 | Sample data condition met because both n ≥ 30, explaining why the skewness does not matter |
| 1 | Correct SE, t* (99%) and interval with units |

A parameter written as "the difference in mean exercise" with no populations or order does not earn point 1.
</details>

## Question 6 (constructed response · stretch)

Twenty-two fictional volunteers were randomly assigned, 11 to each group, to learn a list of 40 words while listening to music (M) or in silence (S). The numbers of words recalled the next day were:

- M: 27, 31, 24, 29, 33, 26, 30, 28, 35, 25, 30
- S: 22, 26, 30, 21, 24, 27, 19, 25, 28, 23, 24

(a) Define the parameter.
(b) Check the conditions, using the 1.5 × IQR rule for outliers.
(c) Construct a 95% confidence interval.
(d) Explain why the 10% condition is not checked.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** μ_M − μ_S = the true difference (music minus silence) in the mean number of words recalled by volunteers like these when learning with music and when learning in silence.

**(b)** *Randomization:* treatments randomly assigned. *Sample data:* both n = 11 < 30, so check both samples. M ordered: 24, 25, 26, 27, 28, 29, 30, 30, 31, 33, 35; Q1 = 26, Q3 = 31, IQR = 5, fences 18.5 and 38.5: no outliers. S ordered: 19, 21, 22, 23, 24, 24, 25, 26, 27, 28, 30; Q1 = 22, Q3 = 27, IQR = 5, fences 14.5 and 34.5: no outliers. Neither sample shows strong skewness (each median is close to the middle of its range).

**(c)** x̄_M = 318/11 = 28.909, s_M = 3.360; x̄_S = 269/11 = 24.455, s_S = 3.205. Point estimate = 4.455 words. SE = 1.4001. Technology: df = 19.96, t* = 2.0863, margin of error = 2.921. Interval: 4.455 ± 2.921 = **(1.53, 7.38) words**. (Conservative df = 10: t* = 2.2281, interval (1.33, 7.57) words.)

**(d)** The 10% condition protects independence when sampling without replacement from a population. Here no population was sampled: volunteers were randomly assigned to treatments, so the condition does not apply.

| Point | What earns it |
|---|---|
| 1 | Parameter with order of subtraction, response and both treatments |
| 1 | Random assignment named and both samples checked, with correct fences and no outliers |
| 1 | Correct means, standard deviations and SE |
| 1 | Correct t* and interval with units |
| 1 | Explains that the 10% condition is for sampling without replacement and this is an experiment |
</details>

## Question 7 (explanation · stretch)

Independent random samples gave n₁ = 25, x̄₁ = 63.0, s₁ = 9.0 and n₂ = 30, x̄₂ = 57.5, s₂ = 12.0. Dot plots of both samples show no strong skewness or outliers. A student wrote:

> SE = 9.0/√25 + 12.0/√30 = 3.991. Interval: 5.5 ± 1.96(3.991) = (−2.32, 13.32).

(a) Identify the two errors in the student's work.
(b) Calculate the correct 95% interval.
(c) Another student used df = n₁ + n₂ − 2 = 53. Explain why this is not the conservative choice.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Error 1: the student added the two standard errors. The correct SE adds variance terms: √(s₁²/n₁ + s₂²/n₂). Error 2: the student used z* = 1.96. The population standard deviations are unknown, so t* from a t-distribution is needed.

**(b)** SE = √(81/25 + 144/30) = √(3.24 + 4.80) = 2.8355. Technology: df = 52.47, t* = 2.0062, margin of error = 5.6886. Interval: **(−0.19, 11.19)**. (Conservative df = 24: t* = 2.0639, interval (−0.35, 11.35).)

**(c)** The true df lies between 24 and 53. Using 53, the largest possible value, gives the smallest t* (2.0057) and so the narrowest interval, which may claim more precision than the data support. The conservative choice is the smallest value, 24.

| Point | What earns it |
|---|---|
| 1 | Identifies adding standard deviations/standard errors as wrong and states the correct SE form |
| 1 | Identifies z* as wrong and says why t* is needed |
| 1 | Correct SE, t* and interval |
| 1 | Explains that 53 is the upper bound, gives the narrowest interval, and the conservative df is 24 |
</details>

## How did you do?

- **Q1 wrong:** re-read "Step 1: name the procedure" and Worked example 3 in the [study guide](/advanced-course-resources/statistics/4-7-constructing-confidence-interval-difference-between-study-guide/).
- **Q2 or Q7(a) wrong:** revisit "Step 3" and the first two misconceptions.
- **Q3, Q5(b) or Q6(b) wrong:** revisit "Step 2: check the three conditions" and Worked example 2.
- **Q4, Q5(c) or Q6(c) wrong:** work through Worked example 1 again, step by step.
- **Q7(c) wrong:** re-read the degrees-of-freedom range in Step 3.

Then tick off the [topic checklist](/advanced-course-resources/statistics/4-7-constructing-confidence-interval-difference-between-checklist/).
