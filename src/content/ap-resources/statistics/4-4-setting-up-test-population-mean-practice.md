---
resourceId: "mb-ap-stats-4.4-practice"
title: "Setting Up a Test for a Population Mean or Population Mean Difference: Practice Questions (Statistics 4.4)"
description: "Seven original Marlbridge practice questions on choosing a t-test for a mean or mean difference, defining the parameter, writing hypotheses and checking conditions, with suggested rubrics."
course: "statistics"
unit: 4
topics: ["4.4"]
resourceType: "practice-questions"
prerequisites:
  - "Writing hypotheses for a test about a proportion"
  - "Finding quartiles and using the 1.5 × IQR rule"
prerequisiteResources: ["mb-ap-stats-4.4-study-guide"]
learningObjectives:
  - "Choose between a one-sample t-test for a mean, a matched-pairs t-test and other procedures"
  - "Define μ or μd in context and write correct hypotheses"
  - "Check the random, 10% and sample data conditions, using differences for paired data"
  - "Find and correct errors in a test set-up"
skills: ["2", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Use one-variable statistics for quartiles. Quartiles split the ordered data at the median, leaving the median out of both halves when n is odd."
related: ["mb-ap-stats-4.4-study-guide", "mb-ap-stats-4.4-revision-notes", "mb-ap-stats-4.4-checklist"]
next: "mb-ap-stats-4.4-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written answers."
  - "Set up only: no test statistics or p-values are needed."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All contexts and data are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: σ is unknown; quartiles split the ordered data at the median, leaving the median out of both halves when n is odd; potential outliers are checked with the 1.5 × IQR rule. You are asked to **set up** tests only. A graphing calculator is assumed.

## Question 1 (multiple choice · foundation)

A fitness app company selects a random sample of 50 of its users and records each user's mean daily step count over one month. It wants to test whether the mean for all its users is below 8,000 steps. Which is the best definition of the parameter?

- (A) μ = the mean daily step count of the 50 sampled users.
- (B) μ = the true mean daily step count of all the app's users over that month.
- (C) μ = 8,000 steps.
- (D) μ = the proportion of the app's users who walk fewer than 8,000 steps a day.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** It names a population mean, the variable and the population.

- (A) describes x̄, the statistic. It is already known, so there is nothing to test about it.
- (C) is the null value μ₀, not a definition of the parameter.
- (D) defines a proportion. The question is about a mean of a quantitative variable.
</details>

## Question 2 (multiple choice · core)

Which study should be analysed with a one-sample t-test for a population **mean difference**?

- (A) 30 randomly chosen adults from one town and 30 from another town each report their weekly screen time.
- (B) 40 randomly chosen cars each have their fuel use measured once with a standard fuel and once with a new fuel, in a random order.
- (C) 60 randomly chosen students report whether they own a bicycle.
- (D) 25 randomly chosen loaves are weighed to test a claim about the mean weight.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Each car gives two measurements, so the data come in pairs. Take the 40 differences and test μd.

- (A) has two separate, independent groups. Nothing links an adult in one town to a particular adult in the other; that needs a two-sample procedure.
- (C) gives a categorical variable, so a proportion procedure is needed.
- (D) is one sample with one value each: a one-sample t-test for μ, not μd.
</details>

## Question 3 (multiple choice · core)

A fictional cereal box is labelled "375 g". A consumer group weighs a random sample of 20 boxes, finds x̄ = 371.2 g, and wants to know whether the true mean weight is **different** from the label. Which hypotheses are correct?

- (A) H₀: μ = 375, Hₐ: μ ≠ 375
- (B) H₀: μ = 375, Hₐ: μ < 375
- (C) H₀: x̄ = 375, Hₐ: x̄ ≠ 375
- (D) H₀: μ = 371.2, Hₐ: μ ≠ 371.2

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The claimed value is 375 g, and "different" gives a two-sided alternative.

- (B) chooses the direction from the sample (371.2 < 375). The question asks about "different", so the test is two-sided.
- (C) writes the hypotheses about x̄, which is known. They must be about μ.
- (D) uses the sample mean as μ₀. The null value comes from the claim.
</details>

## Question 4 (multiple choice · core)

A random sample of 18 of a city's 500 cafés records the price of a cup of tea. A dotplot of the 18 prices is strongly skewed to the right with one high outlier. Which statement about a one-sample t-test for the mean price is correct?

- (A) The conditions are met, because 18 ≤ 10% of 500.
- (B) The conditions are met, because the sample is random.
- (C) The sample data condition is not met: n < 30 and the data show strong skew and an outlier.
- (D) The sample data condition is not met, because n < 30, whatever the data look like.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** With fewer than 30 values, the t-procedure needs sample data free from strong skewness and outliers. These data fail that check.

- (A) checks only the 10% condition. All three conditions must hold.
- (B) checks only the random condition.
- (D) is too strong. A small sample is acceptable if the data show no strong skew or outliers.
</details>

## Question 5 (constructed response · core)

The fictional Riverside Clinic says patients wait 45 minutes on average to be seen. A patients' group suspects the wait is longer. It selects a random sample of 40 of the clinic's 3,000 visits last year and records each wait. A histogram of the 40 waits is moderately skewed to the right.

(a) Name the procedure.
(b) Define the parameter and state the hypotheses.
(c) Check the conditions.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** One-sample t-test for a population mean.

**(b)** μ = the true mean waiting time, in minutes, of all visits to Riverside Clinic last year. H₀: μ = 45. Hₐ: μ > 45 ("suspects the wait is longer").

**(c)**

1. **Random:** the 40 visits were a random sample of last year's visits. ✓
2. **10%:** 40 ≤ 10% of 3,000 = 300. ✓
3. **Sample data:** n = 40 ≥ 30, so the sampling distribution of x̄ is approximately normal even though the waits are skewed. ✓

| Point | What earns it |
|---|---|
| 1 | Correct procedure named in full |
| 1 | Parameter defined with mean, variable, units and population |
| 1 | H₀: μ = 45 and Hₐ: μ > 45 |
| 1 | All three conditions checked in context, using n ≥ 30 for the sample data condition |

Point 4 is not earned for "the waits are skewed, so the condition fails". With n ≥ 30, moderate skew is acceptable.
</details>

## Question 6 (constructed response · stretch)

A random sample of 8 of the 160 students on a fictional revision course took a practice test before and after the course. Scores are out of 80.

| Student | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| Before | 54 | 61 | 47 | 70 | 58 | 66 | 52 | 63 |
| After | 59 | 64 | 55 | 71 | 63 | 65 | 60 | 69 |

The course organiser wants to know whether the course **improves** scores on average.

(a) Explain why a two-sample procedure would be wrong here.
(b) Define the parameter, including the order of subtraction, and write the hypotheses.
(c) Check the conditions, showing your work for the sample data condition.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Each student has a before score and an after score, so the data are paired. A two-sample procedure treats the groups as independent and ignores the pairing. The right analysis is a one-sample t-test on the 8 differences.

**(b)** With d = after − before: μd = the true mean difference in practice-test score (after − before) for all 160 students on the course. H₀: μd = 0. Hₐ: μd > 0.

**(c)** Differences (after − before): 5, 3, 8, 1, 5, −1, 8, 6.

1. **Random:** random sample of 8 students from the course. ✓
2. **10%:** 8 ≤ 10% of 160 = 16. ✓
3. **Sample data:** only 8 differences, so check them. Ordered: −1, 1, 3, 5, 5, 6, 8, 8. Q1 = 2, Q3 = 7, IQR = 5. Fences: 2 − 7.5 = −5.5 and 7 + 7.5 = 14.5. No outliers, and no strong skew. ✓

| Point | What earns it |
|---|---|
| 1 | Explains the pairing (same students measured twice) |
| 1 | μd defined with order of subtraction and population |
| 1 | H₀: μd = 0 and Hₐ consistent with the order (μd > 0 for after − before) |
| 1 | Random and 10% conditions in context |
| 1 | Differences found and checked for outliers/skew with fences shown |

With d = before − after, accept Hₐ: μd < 0. Do not award point 5 for checking the before and after scores separately.
</details>

## Question 7 (explanation · stretch)

A sports scientist wants to know whether a new warm-up routine changes 20 m sprint times. Fifteen randomly chosen members of a fictional athletics club each sprint once after the old routine and once after the new one, in a random order. A student writes this set-up:

> "Two-sample t-test. H₀: x̄d = 0, Hₐ: x̄d < 0, because most of the new times were faster. Conditions: random ✓; np₀ = 15 × 0.5 = 7.5 is less than 10, so the test cannot be used."

(a) Identify **four** errors in the student's set-up.
(b) Write a correct State and Plan. You may assume a dotplot of the 15 differences shows no strong skew and no outliers, and that the club has 400 members.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)**

1. The procedure is wrong: each athlete gives two times, so it is a **one-sample t-test for a population mean difference**, not a two-sample test.
2. The hypotheses use x̄d, a statistic. They must use **μd**.
3. The direction was chosen from the data ("most of the new times were faster"). The question asks whether the routine **changes** times, so Hₐ should be two-sided.
4. "np₀ ≥ 10" is a check for proportions. For a mean, the sample data condition is about the differences: here, fewer than 30 with no strong skew or outliers.

(Also accept: the parameter was never defined, and the order of subtraction was not stated.)

**(b)** μd = the true mean difference in 20 m sprint time, in seconds (new routine − old routine), for all members of the club. H₀: μd = 0. Hₐ: μd ≠ 0. Procedure: one-sample t-test for a population mean difference. Random: random sample of members, and random order of routines ✓. 10%: 15 ≤ 10% of 400 = 40 ✓. Sample data: 15 differences, fewer than 30, but the dotplot shows no strong skew or outliers ✓.

| Point | What earns it |
|---|---|
| 1 | Identifies the wrong procedure (paired data) |
| 1 | Identifies hypotheses written with a statistic |
| 1 | Identifies the data-driven direction and says it should be two-sided |
| 1 | Identifies the proportion condition used for a mean |
| 1 | Correct State and Plan, with order of subtraction and all three conditions |
</details>

## How did you do?

- **Q1 wrong:** re-read "Defining the parameter" in the [study guide](/advanced-course-resources/statistics/4-4-setting-up-test-population-mean-study-guide/).
- **Q2 or Q6(a) wrong:** revisit "Recognising matched pairs" and Figure 1.
- **Q3 wrong:** revisit "Writing the hypotheses".
- **Q4, Q5(c) or Q6(c) wrong:** revisit "The three conditions" and Worked examples 1 and 2.
- **Q7 incomplete:** work through Worked example 3, then the misconceptions list.

Then tick off the [topic checklist](/advanced-course-resources/statistics/4-4-setting-up-test-population-mean-checklist/).
