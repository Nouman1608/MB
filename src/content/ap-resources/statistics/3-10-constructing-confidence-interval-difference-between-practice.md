---
resourceId: "mb-ap-stats-3.10-practice"
title: "Constructing a Confidence Interval for a Difference in Two Proportions: Practice Questions (Statistics 3.10)"
description: "Seven original Marlbridge practice questions on the two-sample z-interval for p1 − p2: choosing the procedure, conditions, standard error, building and reading intervals, with suggested rubrics."
course: "statistics"
unit: 3
topics: ["3.10"]
resourceType: "practice-questions"
prerequisites:
  - "Finding z* for a confidence level, and the one-sample z-interval for a proportion"
prerequisiteResources: ["mb-ap-stats-3.10-study-guide"]
learningObjectives:
  - "Choose the two-sample z-interval for a difference in proportions and define its parameter"
  - "Check the randomization, 10% and normality conditions for samples and experiments"
  - "Construct an interval for p1 − p2 with every step shown, and recover its parts from a reported interval"
  - "Find and correct errors in someone else's interval"
skills: ["2", "3", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Use the inverse normal function for z* and a two-proportion z-interval function to check. Give endpoints to 3 decimal places."
related: ["mb-ap-stats-3.10-study-guide", "mb-ap-stats-3.10-revision-notes", "mb-ap-stats-3.10-checklist"]
next: "mb-ap-stats-3.10-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Name the procedure, define p1 − p2 with an order, check conditions in context, then calculate."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All contexts and data are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: z* comes from the standard normal distribution (1.645 for 90%, 1.960 for 95%, 2.576 for 99%); the standard error is √[p̂1(1 − p̂1)/n1 + p̂2(1 − p̂2)/n2] with no pooling; keep p̂1 and p̂2 unrounded until the end and give endpoints to 3 decimal places. A graphing calculator is assumed.

## Question 1 (multiple choice · foundation)

A regional council selects a random sample of 300 adults from the North district and an independent random sample of 250 adults from the South district. It asks each adult whether they support a new cycle lane. The council wants to estimate how much the proportion of supporters differs between the two districts. Which procedure should it use?

- (A) One-sample z-interval for a population proportion
- (B) Two-sample z-interval for a difference between population proportions
- (C) Two-sample z-test for a difference between population proportions
- (D) One-sample z-interval for each district, then subtract the endpoints

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** There are two independent random samples, a categorical response (support or not), and the goal is to **estimate** a **difference** between two population proportions. That calls for a two-sample z-interval for pN − pS.

- (A) estimates one proportion. It cannot estimate a difference between two populations.
- (C) is a significance test. It decides whether there is evidence of a difference; it does not give an interval estimate of its size.
- (D) Subtracting the endpoints of two separate intervals does not give a correctly sized interval for the difference. The two-sample interval uses one combined standard error.
</details>

## Question 2 (multiple choice · core)

In independent random samples, 54 of 120 adults in one town and 39 of 130 adults in another town own an electric bike. What is the standard error of p̂1 − p̂2 for a confidence interval?

- (A) 0.0428
- (B) 0.0606
- (C) 0.0612
- (D) 0.0856

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** p̂1 = 54 ÷ 120 = 0.45 and p̂2 = 39 ÷ 130 = 0.30. SE = √(0.45 × 0.55 ÷ 120 + 0.30 × 0.70 ÷ 130) = √(0.0020625 + 0.0016154) ≈ 0.0606.

- (A) puts both products over the combined sample size 250. Each variance term needs its own sample size.
- (C) uses the pooled proportion 93 ÷ 250 = 0.372. Pooling is for a significance test that assumes p1 = p2, not for an interval.
- (D) adds the two separate standard errors (0.0454 + 0.0402). Add the variance terms first, then take one square root.
</details>

## Question 3 (multiple choice · core)

A coach randomly assigns 100 swimmers to two training plans, 50 to each. After six weeks, 42 swimmers on Plan A and 30 on Plan B have improved their time. Which statement about a two-sample z-interval for pA − pB is correct?

- (A) All the conditions are met, so the interval can be constructed.
- (B) The 10% condition fails, because 50 is more than 10% of the 100 swimmers.
- (C) The normality condition is met, because each group has at least 30 swimmers.
- (D) The normality condition fails, because Plan A has only 8 swimmers who did not improve.

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The four observed counts are 42 and 8 (Plan A) and 30 and 20 (Plan B). One count, 8, is below 10, so the sampling distribution of p̂A − p̂B may not be approximately normal.

- (A) ignores the count of 8.
- (B) applies the 10% condition to an experiment. Random assignment meets the randomization condition, and the 10% condition is not needed.
- (C) uses a "30 or more" rule. For proportions, the check is at least 10 successes and 10 failures in each group.
</details>

## Question 4 (calculation · core)

A report gives the 99% confidence interval (−0.052, 0.188) for p1 − p2. Find, showing your working, (a) the point estimate p̂1 − p̂2, (b) the margin of error, (c) the standard error, and (d) the interval for p2 − p1.

<details>
<summary>Worked solution</summary>

1. **(a)** Point estimate = (−0.052 + 0.188) ÷ 2 = 0.136 ÷ 2 = **0.068**.
2. **(b)** Margin of error = (0.188 − (−0.052)) ÷ 2 = 0.240 ÷ 2 = **0.120**.
3. **(c)** For 99%, z* = 2.576, so SE = 0.120 ÷ 2.576 ≈ **0.0466**.
4. **(d)** Reverse and negate the endpoints: **(−0.188, 0.052)**.

Suggested mark points (3): 1 for the point estimate as the midpoint; 1 for the margin of error as half the width and the standard error using z* = 2.576 (not 1.960); 1 for the reversed interval with both signs changed and the endpoints swapped.
</details>

## Question 5 (constructed response · core)

Ridgeway University (18,000 students) and Calder University (24,000 students) are fictional. A survey takes a random sample of 220 Ridgeway students, of whom 77 cycle to campus, and an independent random sample of 260 Calder students, of whom 65 cycle. Construct a 95% confidence interval for the difference in the proportions of all students at the two universities who cycle to campus. Show the identify, check and calculate steps.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**Identify.** Two-sample z-interval for a difference between population proportions. pR − pC = the proportion of all Ridgeway students who cycle to campus, minus the proportion of all Calder students who do.

**Check.** Randomization: independent random samples from each university. 10%: 220 ≤ 1,800 and 260 ≤ 2,400. Normality: 77 and 143 (Ridgeway), 65 and 195 (Calder), all at least 10.

**Calculate.** p̂R = 77 ÷ 220 = 0.35 and p̂C = 65 ÷ 260 = 0.25, so the point estimate is 0.10. SE = √(0.35 × 0.65 ÷ 220 + 0.25 × 0.75 ÷ 260) ≈ 0.0419. MOE = 1.960 × 0.0419 ≈ 0.0821. Interval: 0.10 ± 0.0821 = **(0.018, 0.182)**.

| Point | What earns it |
|---|---|
| 1 | Names the two-sample z-interval for p1 − p2 **and** defines the parameter with the order, the response and both populations |
| 1 | Randomization and 10% conditions checked with numbers from the context |
| 1 | All four observed counts shown and compared with 10 |
| 1 | Correct point estimate, standard error and interval (0.018, 0.182) |

Accept the order Calder − Ridgeway with interval (−0.182, −0.018) if the parameter is defined in that order. Do not award point 1 for a parameter about "the students sampled".
</details>

## Question 6 (constructed response · core)

A fictional language-learning company runs an experiment with 180 volunteers. It randomly assigns 90 to an app version with daily reminders and 90 to a version without reminders. After 30 days, 61 volunteers in the reminder group and 44 in the no-reminder group have completed the course.

(a) Construct a 99% confidence interval for the difference in completion proportions (reminders − no reminders).
(b) A colleague reports the interval for (no reminders − reminders). What should it be, and does it contain different information?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a) Identify.** Two-sample z-interval for p1 − p2, where pR − pN = the proportion of learners like these who would complete the course with reminders, minus the proportion who would complete it without reminders.

**Check.** Randomization: the app versions were randomly assigned. The 10% condition is not needed in a randomized experiment. Normality: 61 and 29, 44 and 46, all at least 10.

**Calculate.** p̂R = 61 ÷ 90 ≈ 0.6778 and p̂N = 44 ÷ 90 ≈ 0.4889, so the point estimate is about 0.1889. SE = √(0.6778 × 0.3222 ÷ 90 + 0.4889 × 0.5111 ÷ 90) ≈ 0.07213. For 99%, z* = 2.576, so MOE ≈ 0.1858. Interval: **(0.003, 0.375)**.

**(b)** **(−0.375, −0.003).** It contains exactly the same information: the signs change and the endpoints swap because the order of subtraction is reversed. The width is the same.

| Point | What earns it |
|---|---|
| 1 | Parameter defined for the two treatments with the order stated |
| 1 | Random assignment named and four observed counts checked; no 10% check required |
| 1 | Correct z* = 2.576, standard error and interval (0.003, 0.375) |
| 1 | Correct reversed interval and the statement that it carries the same information |

Using z* = 1.960 gives (0.048, 0.330), which is the 95% interval and does not earn point 3.
</details>

## Question 7 (explanation · stretch)

Avonbridge (24,000 adults) and Bexmoor (20,000 adults) are fictional towns. Independent random samples found that 132 of 240 Avonbridge adults and 98 of 200 Bexmoor adults attended a summer event. A student's 95% interval is shown.

> p1 − p2 = the difference between the proportions of the 240 Avonbridge adults and the 200 Bexmoor adults who attended.
> Conditions: n1 = 240 and n2 = 200 are both at least 30. ✓
> Pooled p̂ = 230 ÷ 440 = 0.5227. SE = √[0.5227 × 0.4773 × (1/240 + 1/200)] = 0.04782.
> For 95%, z* = 1.645. Interval: 0.06 ± 1.645 × 0.04782 = (−0.019, 0.139).

(a) Identify four errors in the student's work.
(b) Give the correct interval.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)**

1. **Parameter:** it describes the samples. It should be the proportion of **all Avonbridge adults** who attended minus the proportion of **all Bexmoor adults** who attended.
2. **Conditions:** "at least 30" is the wrong check. The student should check randomization (independent random samples), 10% (240 ≤ 2,400 and 200 ≤ 2,000) and the four observed counts (132, 108, 98 and 102, all at least 10).
3. **Standard error:** pooling is for a test that assumes p1 = p2. The interval uses √(0.55 × 0.45 ÷ 240 + 0.49 × 0.51 ÷ 200) ≈ 0.04776.
4. **Critical value:** 1.645 is for 90% confidence. For 95%, z* = 1.960.

**(b)** p̂1 = 0.55 and p̂2 = 0.49, so the point estimate is 0.06. MOE = 1.960 × 0.04776 ≈ 0.0936. Interval: **(−0.034, 0.154)**.

| Point | What earns it |
|---|---|
| 1 | Identifies the parameter error and rewrites it for the populations |
| 1 | Identifies the conditions error and states the correct checks with numbers |
| 1 | Identifies both the pooling error and the z* error |
| 1 | Correct interval (−0.034, 0.154) |
</details>

## How did you do?

- **Q1 wrong:** re-read "From one proportion to a difference" in the [study guide](/advanced-course-resources/statistics/3-10-constructing-confidence-interval-difference-between-study-guide/).
- **Q2 or Q7(a) wrong:** revisit "Step 3: standard error, margin of error and the interval". Do not pool; add the variance terms under one root.
- **Q3 wrong:** revisit "Step 2: check the three conditions" and Worked example 3(b).
- **Q4 wrong:** revisit Worked example 3(a) and Figure 1.
- **Q5 or Q6 incomplete:** follow Worked examples 1 and 2 step by step: identify, define, check, calculate.

Then tick off the [topic checklist](/advanced-course-resources/statistics/3-10-constructing-confidence-interval-difference-between-checklist/).
