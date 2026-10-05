---
resourceId: "mb-ap-stats-3.3-practice"
title: "Constructing a Confidence Interval for a Population Proportion: Practice Questions (Statistics 3.3)"
description: "Seven original Marlbridge practice questions on the one-sample z-interval for a proportion: critical values, conditions, margin of error, sample size and spotting errors, with suggested rubrics."
course: "statistics"
unit: 3
topics: ["3.3"]
resourceType: "practice-questions"
prerequisites:
  - "Finding boundary values under the standard normal curve"
prerequisiteResources: ["mb-ap-stats-3.3-study-guide"]
learningObjectives:
  - "Find z* for any confidence level and recover p̂ and the margin of error from an interval"
  - "Check the random, 10% and large-counts conditions in context"
  - "Construct a one-sample z-interval for a population proportion with every step shown"
  - "Calculate the smallest sample size for a chosen margin of error"
skills: ["2", "3", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Use the inverse normal function for z* and a one-proportion z-interval function to check. Give interval endpoints to 3 decimal places; round sample sizes up."
related: ["mb-ap-stats-3.3-study-guide", "mb-ap-stats-3.3-revision-notes", "mb-ap-stats-3.3-checklist"]
next: "mb-ap-stats-3.3-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Name the procedure, define p, check conditions in context, then calculate."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All contexts and data are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: z* comes from the standard normal distribution (1.645 for 90%, 1.960 for 95%, 2.576 for 99%); keep p̂ unrounded until the end; give interval endpoints to 3 decimal places and round sample sizes up. A graphing calculator is assumed.

## Question 1 (multiple choice · foundation)

A researcher wants a 92% confidence interval for a population proportion. Which critical value z* should she use?

- (A) 1.405
- (B) 1.751
- (C) 1.960
- (D) 2.054

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** For 92% confidence, each tail holds (1 − 0.92)/2 = 0.04, so the area to the left of z* is 0.96. invNorm(0.96) = 1.751.

- (A) is invNorm(0.92). It puts the confidence level in as the left area, which leaves 8% in one tail instead of 4% in each.
- (C) is the critical value for 95% confidence, not 92%.
- (D) is invNorm(0.98), the critical value for 96% confidence. It uses a tail of 0.02 instead of 0.04.
</details>

## Question 2 (multiple choice · core)

A school has 2,400 students. A random sample of 60 students is selected and 8 of them have a part-time job. A student plans to construct a 95% z-interval for the proportion of all students at the school with a part-time job. Which statement is correct?

- (A) All the conditions are met, because the sample size of 60 is at least 30.
- (B) The 10% condition is not met, because 60 is more than 10% of the sample.
- (C) The large-counts condition is not met, because only 8 students in the sample have a part-time job.
- (D) The large-counts condition is met, because 52 students in the sample do not have a part-time job.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The large-counts condition needs at least 10 observed successes **and** at least 10 observed failures. Here there are 8 successes, which is fewer than 10, so the sampling distribution of p̂ may not be approximately normal.

- (A) uses the n ≥ 30 rule, which belongs to means, not proportions. For proportions the check is on the success and failure counts.
- (B) compares the sample with itself. The 10% condition compares n with the **population**: 60 ≤ 10% of 2,400 = 240, so it is met.
- (D) checks only the failures. Both counts must be at least 10.
</details>

## Question 3 (multiple choice · core)

A news website reports that a 95% confidence interval for the proportion of adults in a fictional region who own an electric bicycle is (0.414, 0.506). What are the point estimate and the margin of error?

- (A) p̂ = 0.414, margin of error = 0.092
- (B) p̂ = 0.460, margin of error = 0.046
- (C) p̂ = 0.460, margin of error = 0.092
- (D) p̂ = 0.460, margin of error = 0.023

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The interval is centred on p̂, so p̂ = (0.414 + 0.506) ÷ 2 = 0.460. The margin of error is half the width: (0.506 − 0.414) ÷ 2 = 0.046.

- (A) takes the lower endpoint as the estimate and the full width as the margin of error.
- (C) has the right centre but gives the full width, 0.092, which is twice the margin of error.
- (D) halves the margin of error again; 0.023 is a quarter of the width.
</details>

## Question 4 (calculation · core)

In a random sample of 420 cars passing a fictional toll bridge, 147 were electric or hybrid. The conditions for inference have been checked and are met. Construct a 99% confidence interval for the proportion of all cars using the bridge that are electric or hybrid. Show the standard error, the critical value and the margin of error.

<details>
<summary>Worked solution</summary>

1. p̂ = 147 ÷ 420 = 0.35.
2. SE = √(0.35 × 0.65 ÷ 420) = 0.02327.
3. For 99%, the area to the left of z* is 0.995, so z* = 2.576.
4. MOE = 2.576 × 0.02327 = 0.0599.
5. Interval: 0.35 ± 0.0599 = **(0.290, 0.410)**.

Suggested mark points (3): 1 for p̂ and the standard error; 1 for z* = 2.576 with the margin of error; 1 for the correct interval. Using z* = 1.960 gives (0.304, 0.396), which is a 95% interval and does not earn the second or third point.
</details>

## Question 5 (constructed response · core)

Calder College, a fictional college, has 5,200 students. The student union selected 320 students at random from the enrolment list and asked whether they had used the campus bike-share scheme this term. 108 said yes.

(a) Name the appropriate inference procedure and define the parameter.
(b) Check the conditions for this procedure.
(c) Construct a 90% confidence interval for the parameter.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** A one-sample z-interval for a population proportion. Let p = the proportion of all Calder College students who used the campus bike-share scheme this term.

**(b)**
- **Random:** the 320 students were selected at random from the enrolment list.
- **10%:** 320 ≤ 10% of 5,200 = 520.
- **Large counts:** 108 successes and 320 − 108 = 212 failures, both at least 10.

**(c)** p̂ = 108 ÷ 320 = 0.3375. SE = √(0.3375 × 0.6625 ÷ 320) = 0.02643. For 90%, z* = 1.645. MOE = 1.645 × 0.02643 = 0.0435. Interval: 0.3375 ± 0.0435 = **(0.294, 0.381)**.

| Point | What earns it |
|---|---|
| 1 | Names the one-sample z-interval for p (or gives the formula) **and** defines p as a proportion of all Calder College students, with the response |
| 1 | Random and 10% conditions checked with reference to the context and the numbers 320 and 520 |
| 1 | Large-counts condition checked with the observed counts 108 and 212 |
| 1 | Correct z*, standard error and interval (0.294, 0.381) |

Do not award the first point if the parameter is described as "the proportion of the 320 students" (that is p̂). A calculator result with no working may earn point 4 only if the inputs (x = 108, n = 320, C = 0.90) are stated.
</details>

## Question 6 (constructed response · core)

A fictional health charity wants to estimate the proportion of adults in a large city who have donated blood in the past year. It wants 95% confidence and a margin of error of no more than 0.025.

(a) Find the smallest sample size needed if the charity has no prior estimate of the proportion.
(b) A national survey suggests the proportion is about 0.12. Find the smallest sample size using this estimate.
(c) Explain why the answer to (a) is larger, and why using it is the safer choice.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** With no estimate, use p̂ = 0.5. n = (1.960 ÷ 0.025)² × 0.25 = 1,536.64. Round up: **1,537 adults**.

**(b)** p̂(1 − p̂) = 0.12 × 0.88 = 0.1056. n = (1.960 ÷ 0.025)² × 0.1056 = 649.08. Round up: **650 adults**.

**(c)** The product p̂(1 − p̂) is largest when p̂ = 0.5, where it equals 0.25. A larger product means a larger standard error, so more people are needed for the same margin of error. Using 0.5 gives an upper bound: 1,537 adults keeps the margin of error at or below 0.025 whatever the true proportion is. If the true proportion is not close to 0.12, a sample of 650 might give a larger margin of error than planned.

| Point | What earns it |
|---|---|
| 1 | Correct formula with z* = 1.960 and p̂ = 0.5, and n = 1,537 (rounded up) |
| 1 | Correct n = 650 using 0.12 × 0.88, rounded up |
| 1 | Explains that p̂(1 − p̂) is largest at 0.5, so (a) is an upper bound that guarantees the margin of error |

Rounding to 1,536 or 649 loses the relevant point: those samples give a margin of error slightly above 0.025.
</details>

## Question 7 (explanation · stretch)

A school of 2,400 students selected 120 students at random; 54 said they read for pleasure every week. A student's work for a 95% confidence interval is shown.

> Parameter: p̂ = the proportion of the 120 students who read for pleasure every week.
> Conditions: random sample ✓; 120 < 10% of 2,400 ✓; n = 120 ≥ 30, so the sampling distribution is normal ✓.
> p̂ = 0.45, SE = √(0.45 × 0.55 ÷ 120) = 0.04541.
> Interval: 0.45 ± 1.645 × 0.04541 = (0.375, 0.525).

(a) Identify **three** errors in the student's work and correct each one.
(b) Give the correct 95% interval.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)**
1. **The parameter.** p̂ is the sample statistic, and "the 120 students" is the sample. Correct: p = the proportion of **all 2,400 students at the school** who read for pleasure every week.
2. **The normality check.** n ≥ 30 is not the condition for proportions. Correct: 54 successes and 120 − 54 = 66 failures are both at least 10. (The 10% check is fine: 120 ≤ 240.)
3. **The critical value.** 1.645 is for 90% confidence. For 95%, z* = 1.960.

**(b)** MOE = 1.960 × 0.04541 = 0.0890. Interval: 0.45 ± 0.0890 = **(0.361, 0.539)**.

| Point | What earns it |
|---|---|
| 1 | Parameter error found and corrected to a population proportion in context |
| 1 | Normality error found and corrected with the counts 54 and 66 |
| 1 | Critical-value error found and corrected to 1.960 |
| 1 | Correct interval (0.361, 0.539) |
</details>

## How did you do?

- **Q1 wrong:** re-read "Step 3: the critical value z*" in the [study guide](/advanced-course-resources/statistics/3-3-constructing-confidence-interval-population-proportion-study-guide/). Use (1 + C)/2.
- **Q2 or Q7 wrong:** revisit "Step 2: check the three conditions" and Worked example 2.
- **Q3 wrong:** revisit "Working backwards" in Step 4.
- **Q4 or Q5 wrong:** work through Worked example 1 again, keeping p̂ unrounded.
- **Q6 wrong:** revisit Worked example 3; always round sample sizes up.

Then tick off the [topic checklist](/advanced-course-resources/statistics/3-3-constructing-confidence-interval-population-proportion-checklist/).
