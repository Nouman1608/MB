---
resourceId: "mb-ap-stats-4.6-practice"
title: "Sampling Distributions for the Difference Between Two Sample Means: Practice Questions (Statistics 4.6)"
description: "Seven original Marlbridge practice questions on the mean, standard deviation, conditions and normal probabilities for a difference in sample means, with worked solutions and suggested rubrics."
course: "statistics"
unit: 4
topics: ["4.6"]
resourceType: "practice-questions"
prerequisites:
  - "Normal probabilities with z-scores or normalcdf (Topic 2.11)"
prerequisiteResources: ["mb-ap-stats-4.6-study-guide"]
learningObjectives:
  - "Calculate the mean and standard deviation of the sampling distribution of x̄₁ − x̄₂"
  - "Decide whether a normal model for x̄₁ − x̄₂ is justified"
  - "Calculate and interpret probabilities about a difference in sample means"
  - "Explain why the variances add and when the formula does not apply"
skills: ["3", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Use normalcdf or a z-table. Keep 4 decimal places for standard deviations and z-scores; round probabilities to 4 decimal places."
related: ["mb-ap-stats-4.6-study-guide", "mb-ap-stats-4.6-revision-notes", "mb-ap-stats-4.6-checklist"]
next: "mb-ap-stats-4.6-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "Every interpretation must name both populations and the order of subtraction."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All contexts and data are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: the two samples are independent unless stated; population means and standard deviations are given; keep 4 decimal places in working and round probabilities to 4 decimal places. A graphing calculator is assumed.

## Question 1 (multiple choice · foundation)

Times to run 1 km have standard deviation 12 seconds for students at the fictional School M and 9 seconds at School N. Independent random samples of 36 School M students and 25 School N students are timed. What is the standard deviation of the sampling distribution of x̄M − x̄N?

- (A) 0.87 seconds
- (B) 1.92 seconds
- (C) 2.69 seconds
- (D) 3.80 seconds

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** √(12²/36 + 9²/25) = √(4 + 3.24) = √7.24 ≈ 2.69 seconds.

- (A) subtracts the variances: √(4 − 3.24) ≈ 0.87. Variances add even when the means are subtracted.
- (B) treats the two samples as one: √[(144 + 81) / 61] ≈ 1.92. Each variance needs its own sample size.
- (D) adds the standard deviations: 12/6 + 9/5 = 3.8. Add the variances, then take one square root.
</details>

## Question 2 (multiple choice · core)

In each situation below, both population distributions are strongly skewed. In which situation is the sampling distribution of x̄₁ − x̄₂ approximately normal?

- (A) Independent random samples of 40 and 20
- (B) Independent random samples of 35 and 50
- (C) Independent random samples of 25 and 25, a total of 50
- (D) 40 people, each measured once before and once after a programme

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** When the populations are not normal, the sampling distribution of x̄₁ − x̄₂ is approximately normal if n₁ ≥ 30 **and** n₂ ≥ 30. Only (B) meets this.

- (A) has n₂ = 20 < 30, so the second sample mean may still be skewed.
- (C) adds the sample sizes. The rule applies to each sample separately.
- (D) is paired data from the same people, not two independent samples, so this sampling distribution does not apply.
</details>

## Question 3 (multiple choice · core)

A biologist plans independent random samples of fish from two fictional lakes. Fish lengths are normally distributed in both lakes. With her planned sample sizes, the standard deviation of x̄₁ − x̄₂ is 2.4 cm. If she multiplies **both** sample sizes by 4, what will the standard deviation be?

- (A) 0.6 cm
- (B) 1.2 cm
- (C) 2.4 cm
- (D) 4.8 cm

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Each variance term σ²/n is divided by 4, so their sum is divided by 4 and the standard deviation is divided by √4 = 2: 2.4 ÷ 2 = 1.2 cm.

- (A) divides the standard deviation by 4 instead of by √4.
- (C) assumes the spread depends only on σ₁ and σ₂. Larger samples make sample means less variable.
- (D) moves in the wrong direction: larger samples give less variability, not more.
</details>

## Question 4 (multiple choice · core)

Independent random samples of 50 commuters from the fictional City F and 60 from City G record their commute times. The sampling distribution of x̄F − x̄G has mean 5 minutes and standard deviation 1.8 minutes. Which statement correctly interprets the 1.8 minutes?

- (A) Commute times of individual people in City F typically differ from those in City G by about 1.8 minutes.
- (B) In repeated pairs of random samples of 50 City F and 60 City G commuters, the difference in sample mean commute times (F − G) typically varies from 5 minutes by about 1.8 minutes.
- (C) The difference between the two sample mean commute times is 1.8 minutes.
- (D) In repeated random samples of 50 City F commuters, the sample mean commute time typically varies from the true mean by about 1.8 minutes.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** A standard deviation of a sampling distribution describes how the **statistic** (here x̄F − x̄G) varies from its mean (5 minutes) over repeated pairs of samples of the stated sizes.

- (A) describes individuals, not sample means. Individual commutes vary far more.
- (C) confuses the spread of the sampling distribution with one observed difference.
- (D) describes only one sample mean. The 1.8 minutes includes variation from both samples.
</details>

## Question 5 (constructed response · core)

Egg masses at the fictional Farm R are normally distributed with mean 62 g and standard deviation 4 g. At Farm S they are normally distributed with mean 59 g and standard deviation 5 g. Each farm produces thousands of eggs a day. An inspector takes a random sample of 8 eggs from Farm R and, independently, a random sample of 10 eggs from Farm S.

(a) Find the mean and standard deviation of the sampling distribution of x̄R − x̄S.
(b) The samples are small. Explain why a normal model is still appropriate, and check the other conditions.
(c) Find the probability that the Farm S sample mean is greater than the Farm R sample mean. Interpret it in context.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Mean = 62 − 59 = **3 g**. Standard deviation = √(4²/8 + 5²/10) = √(2 + 2.5) = √4.5 ≈ **2.1213 g**.

**(b)** Both populations of egg masses are normal, so the sampling distribution of x̄R − x̄S is normal for any sample sizes. Randomization: independent random samples from the two farms ✓. 10%: 8 and 10 are far less than 10% of the thousands of eggs each farm produces ✓.

**(c)** "S greater than R" means x̄R − x̄S < 0. z = (0 − 3) ÷ 2.1213 ≈ −1.4142, so P ≈ **0.0786**. If the stated distributions are correct, about 7.9% of pairs of random samples (8 Farm R eggs, 10 Farm S eggs) would give a larger sample mean mass for Farm S than for Farm R.

| Point | What earns it |
|---|---|
| 1 | Mean 3 g with the order R − S, and standard deviation ≈ 2.12 g from added variances |
| 1 | Normal shape justified by both populations being normal (not by sample size) |
| 1 | Randomization and 10% conditions checked in context |
| 1 | Correct inequality (x̄R − x̄S < 0), probability ≈ 0.079 and an interpretation naming both farms and the sample sizes |

Claiming the normal model fails because n < 30 loses point 2.
</details>

## Question 6 (constructed response · stretch)

Call durations at two fictional call centres are skewed to the right. Last month Centre X handled 12,000 calls, with mean 8.5 minutes and standard deviation 5.2 minutes. Centre Y handled 15,000 calls, with mean 7.0 minutes and standard deviation 4.0 minutes. An analyst takes independent random samples of 45 calls from X and 60 calls from Y.

(a) Find the mean and standard deviation of the sampling distribution of x̄X − x̄Y.
(b) Justify the use of a normal model. Explain why the sample sizes matter here.
(c) The analyst's samples give x̄X = 10.4 minutes and x̄Y = 7.1 minutes. Find the probability of a difference at least this large if the stated values are correct. Does this cast doubt on them?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Mean = 8.5 − 7.0 = **1.5 minutes**. Standard deviation = √(5.2²/45 + 4.0²/60) = √(0.6009 + 0.2667) = √0.8676 ≈ **0.9314 minutes**.

**(b)** Randomization: independent random samples ✓. 10%: 45 ≤ 1,200 and 60 ≤ 1,500 ✓. The populations are skewed, so the shape of each sample mean's distribution depends on sample size. Because nX = 45 ≥ 30 and nY = 60 ≥ 30, the sampling distribution of x̄X − x̄Y is approximately normal. With small samples from these skewed populations, a normal model would not be justified.

**(c)** Observed difference = 10.4 − 7.1 = 3.3 minutes. z = (3.3 − 1.5) ÷ 0.9314 ≈ 1.9325, so P(x̄X − x̄Y ≥ 3.3) ≈ **0.0266**. A difference this large would happen in only about 2.7% of pairs of samples if the stated means were correct. That is fairly unusual, so it gives some reason to doubt the stated values, but it does not prove them wrong.

| Point | What earns it |
|---|---|
| 1 | Mean 1.5 minutes and standard deviation ≈ 0.93 minutes |
| 1 | All three conditions in context, with both n ≥ 30 linked to the skewed populations |
| 1 | Correct observed difference, z and probability ≈ 0.027 |
| 1 | Judgement ("reason to doubt", not "proves") linked to the small probability |
</details>

## Question 7 (explanation · stretch)

Use the call centres in Question 6.

(a) A student writes: "σ(x̄X − x̄Y) = 5.2/√45 + 4.0/√60 ≈ 1.29 minutes." Explain the error and why the correct method adds variances.
(b) A manager wants to compare the mean durations of two kinds of call for the **same** 45 agents, using each agent's average for each kind. Can the formula from this topic be used? Explain.
(c) The analyst increases the Centre X sample to 180 calls but keeps 60 from Centre Y. Does the standard deviation halve? Show your working.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** The student added the two standard deviations. Each sample mean varies independently, and the variation from both ends up in the difference. For independent variables, it is the **variances** that add, so σ = √(5.2²/45 + 4.0²/60) ≈ 0.93 minutes. Adding standard deviations overstates the spread.

**(b)** No. The two values for each agent come from the same person, so the samples are paired, not independent. The manager should find each agent's difference and use one-sample methods on the differences.

**(c)** No. Only the first term changes: √(5.2²/180 + 4.0²/60) = √(0.1502 + 0.2667) ≈ 0.6457 minutes, which is more than half of 0.9314 (0.4657). The standard deviation halves only if **both** sample sizes are multiplied by 4.

| Point | What earns it |
|---|---|
| 1 | Identifies adding the standard deviations as the error and explains that the variances of independent sample means add |
| 1 | Recognises the paired design and says the formula needs independent samples |
| 1 | Correct new standard deviation (≈ 0.646) and explanation that only one variance term shrank |
</details>

## How did you do?

- **Q1 or Q7(a) wrong:** revisit "Mean and standard deviation of x̄₁ − x̄₂" in the [study guide](/advanced-course-resources/statistics/4-6-sampling-distributions-difference-between-two-study-guide/).
- **Q2, Q5(b) or Q6(b) wrong:** revisit "The conditions and what each one is for".
- **Q3 or Q7(c) wrong:** revisit Worked example 3(c). Each variance term has its own sample size.
- **Q4 or Q5(c) wrong:** revisit the interpretations in Worked examples 1 and 2.
- **Q6(c) wrong:** revisit Worked example 2(c).

Then tick off the [topic checklist](/advanced-course-resources/statistics/4-6-sampling-distributions-difference-between-two-checklist/).
