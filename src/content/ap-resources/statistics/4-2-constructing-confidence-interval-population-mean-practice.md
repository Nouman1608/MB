---
resourceId: "mb-ap-stats-4.2-practice"
title: "Constructing a Confidence Interval for a Mean or Mean Difference: Practice Questions (Statistics 4.2)"
description: "Seven original Marlbridge practice questions on t-distributions, choosing a one-sample t-interval, matched pairs, checking conditions and calculating intervals, with worked solutions and rubrics."
course: "statistics"
unit: 4
topics: ["4.2"]
resourceType: "practice-questions"
prerequisites:
  - "The sampling distribution of x̄ (Topic 4.1)"
prerequisiteResources: ["mb-ap-stats-4.2-study-guide"]
learningObjectives:
  - "Describe t-distributions and find t* for a given confidence level and sample size"
  - "Identify a one-sample t-interval for μ or for a matched-pairs μd, and define the parameter in context"
  - "Check the randomization, 10% and sample data conditions with numbers and context"
  - "Calculate the standard error, margin of error and interval for a mean or mean difference"
skills: ["2", "3", "4"]
studyMinutes: 50
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Use invT for t* with df = n − 1 and the one-sample t-interval function to check. Keep 4 decimal places in working; give t* to 3 decimal places and endpoints to 2 decimal places."
related: ["mb-ap-stats-4.2-study-guide", "mb-ap-stats-4.2-revision-notes", "mb-ap-stats-4.2-checklist"]
next: "mb-ap-stats-4.2-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every interval needs a named procedure, a parameter in context and checked conditions."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All contexts and data are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: s is the sample standard deviation (n − 1); t* comes from a t-distribution with df = n − 1; keep 4 decimal places in working, give t* to 3 decimal places and interval endpoints to 2 decimal places. A graphing calculator is assumed. Interpreting the intervals is practised in Topic 4.3.

## Question 1 (multiple choice · foundation)

Which statement about t-distributions is true?

- (A) A t-distribution with 5 degrees of freedom has a higher peak than the standard normal distribution.
- (B) As the degrees of freedom increase, the tails of a t-distribution become heavier.
- (C) For the same confidence level, t* with 8 degrees of freedom is larger than t* with 25 degrees of freedom.
- (D) When the sample is small, a t-distribution is skewed to the right.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Fewer degrees of freedom mean heavier tails, so you must go further out to cut off the central C%. For 95%, t* is 2.306 with 8 df and 2.060 with 25 df.

- (A) is backwards. Every t-distribution has a **lower** peak than the standard normal (about 0.380 against 0.399 for 5 df), because more of its area is in the tails.
- (B) is backwards. As df increases, the tails get **lighter** and the curve approaches the standard normal.
- (D) is false. Every t-distribution is symmetric about 0, whatever the df.
</details>

## Question 2 (multiple choice · core)

A random sample of 15 values is used to build a 95% confidence interval for a population mean. The population standard deviation is unknown. Which critical value should be used?

- (A) 1.960
- (B) 1.761
- (C) 2.131
- (D) 2.145

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** df = 15 − 1 = 14, and invT(0.975, 14) ≈ 2.145.

- (A) is z*, which assumes σ is known.
- (B) is t* for **90%** confidence with 14 df.
- (C) uses df = 15 instead of n − 1 = 14.
</details>

## Question 3 (multiple choice · core)

A teacher selects 20 students at random from a large school. Each student types a passage once on a standard keyboard and once on a split keyboard, in an order decided by a coin toss. The teacher wants to estimate the mean difference in typing speed (words per minute) between the two keyboards. Which procedure is appropriate?

- (A) A two-sample t-interval for the difference between two population means
- (B) A one-sample t-interval for the population mean difference
- (C) A one-sample z-interval for a population proportion
- (D) A one-sample t-interval for the mean speed on the split keyboard only

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Each student gives two linked speeds, so the data are matched pairs. Subtract within each student (for example, split − standard) and build a one-sample t-interval for μd from the 20 differences.

- (A) treats the two sets of speeds as independent samples. They come from the same students, so they are dependent.
- (C) is for a categorical variable. Typing speed is quantitative.
- (D) ignores the standard-keyboard speeds, so it cannot estimate a difference.
</details>

## Question 4 (calculation · core)

A fictional solar farm has 3,000 panels. An engineer selects a random sample of 25 panels and measures each panel's power output at noon. A dot plot of the 25 outputs is roughly symmetric with no outliers. The sample mean is 286.4 watts and the sample standard deviation is 12.5 watts.

(a) Check the conditions for a one-sample t-interval.
(b) Calculate the standard error, the critical value and the margin of error for a 99% confidence interval for the mean noon output.
(c) Write down the interval.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Random sample of panels ✓. 25 ≤ 10% of 3,000 = 300 ✓. n = 25 < 30, but the dot plot is roughly symmetric with no outliers ✓.

**(b)** SE = 12.5/√25 = **2.5 W**. df = 24, t* = invT(0.995, 24) ≈ **2.797**. ME = 2.797 × 2.5 ≈ **6.9923 W**.

**(c)** 286.4 ± 6.9923 = **(279.41, 293.39) W**.

| Point | What earns it |
|---|---|
| 1 | All three conditions, with the 10% numbers and the dot-plot description used for n < 30 |
| 1 | SE = 2.5 W and t* ≈ 2.797 with df = 24 |
| 1 | Correct margin of error and interval with units |

Using z* = 2.576 gives a margin of error of about 6.44 W; this does not earn point 2.
</details>

## Question 5 (constructed response · core)

A fictional boarding school has 640 students. The nurse selects a random sample of 12 students and records how many hours each slept on Sunday night:

7.2, 6.4, 8.1, 7.6, 6.9, 7.8, 5.9, 7.3, 6.7, 8.4, 7.0, 7.5

(a) Name the procedure and define the parameter for estimating the mean sleep time.
(b) Check the conditions. Show how you checked the sample data.
(c) Construct a 95% confidence interval.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** One-sample t-interval for μ = the true mean number of hours slept on Sunday night by all 640 students at the school.

**(b)** Random sample ✓. 12 ≤ 10% of 640 = 64 ✓. n = 12 < 30, so check the data. Ordered: 5.9, 6.4, 6.7, 6.9, 7.0, 7.2, 7.3, 7.5, 7.6, 7.8, 8.1, 8.4. Five-number summary: 5.9, 6.8, 7.25, 7.7, 8.4. The median is in the middle of the box (0.45 h from each quartile), so there is no strong skew. IQR = 0.9 h, fences 5.45 h and 9.05 h, so there are no outliers ✓.

**(c)** x̄ = 86.8 ÷ 12 ≈ 7.2333 h, s ≈ 0.7114 h. SE = 0.7114/√12 ≈ 0.2054 h. df = 11, t* ≈ 2.201. ME ≈ 2.201 × 0.2054 ≈ 0.452 h. Interval: **(6.78, 7.69) hours**.

| Point | What earns it |
|---|---|
| 1 | Names a one-sample t-interval **and** defines μ with the variable, units and the population of 640 students |
| 1 | Randomization and 10% conditions with numbers |
| 1 | Sample data condition checked with a method (fences, graph or shape description), not just "n is large" |
| 1 | Correct x̄, s, df, t* and interval with units |
</details>

## Question 6 (constructed response · stretch)

A fictional car rental firm has 400 cars. A mechanic selects 9 cars at random and measures the front-left tyre pressure of each car with a digital gauge and with an analogue gauge, in random order. The differences d = digital − analogue, in kPa, are:

3, −1, 4, 2, 5, 1, 3, 0, 2

(a) Explain why these data should be analysed as matched pairs.
(b) Define the parameter.
(c) Check the conditions.
(d) Construct a 95% confidence interval for the parameter.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Each car's tyre was measured with both gauges, so each digital reading is linked to one analogue reading on the same tyre. Tyres differ in pressure, so the two readings are dependent. Subtracting removes the tyre-to-tyre variation.

**(b)** μd = the true mean difference in tyre-pressure reading (digital minus analogue), in kPa, for the front-left tyres of all 400 cars in the fleet.

**(c)** The 9 cars were a random sample, and the gauge order was random ✓. 9 ≤ 10% of 400 = 40 ✓. Only 9 differences, so check them. Ordered: −1, 0, 1, 2, 2, 3, 3, 4, 5. Q1 = 0.5, median 2, Q3 = 3.5; fences −4 and 8. No outliers, and the differences are roughly symmetric ✓.

**(d)** x̄d = 19 ÷ 9 ≈ 2.1111 kPa, s_d ≈ 1.9003 kPa. SE = 1.9003/√9 ≈ 0.6334 kPa. df = 8, t* ≈ 2.306. ME ≈ 1.4607 kPa. Interval: **(0.65, 3.57) kPa**.

| Point | What earns it |
|---|---|
| 1 | Pairing explained by two readings on the same tyre (dependent measurements) |
| 1 | μd defined with the order of subtraction, variable, units and population |
| 1 | Conditions checked, with the sample data check on the **differences** |
| 1 | Correct x̄d, s_d, df = 8, t* and interval with units |

If the student subtracts analogue − digital throughout, accept (−3.57, −0.65) kPa with a matching parameter definition.
</details>

## Question 7 (explanation · stretch)

A fictional furniture shop sold a flat-pack desk to 1,200 customers last month. A random sample of 8 of them recorded how long the desk took to assemble. The sample dot plot is roughly symmetric with no outliers; x̄ = 52.5 minutes and s = 9.6 minutes. A student writes the 95% interval as

52.5 ± 1.96 × 9.6/√8 = (45.85, 59.15) minutes.

(a) Identify the student's error and explain why it matters.
(b) Construct the correct interval.
(c) Suppose one of the 8 customers had instead taken 140 minutes. Which condition would this affect, and why?

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** The student used z* = 1.96, but σ is unknown and s was used. The critical value should come from a t-distribution with df = 7. Because t-distributions have heavier tails, t* is larger than 1.96. The student's interval is too narrow: with 7 df, intervals built with 1.96 capture μ only about 91% of the time, not 95%.

**(b)** SE = 9.6/√8 ≈ 3.3941 minutes. t* = invT(0.975, 7) ≈ 2.365. ME ≈ 8.0258 minutes. Interval: **(44.47, 60.53) minutes**, about 16.05 minutes wide compared with the student's 13.30.

**(c)** The **sample data** condition. With n = 8 < 30 and no information that the population is normal, the sample must be free from strong skewness and outliers. A value of 140 minutes would be a clear outlier, so the t-interval would not be appropriate. (It would also inflate both x̄ and s.)

| Point | What earns it |
|---|---|
| 1 | Identifies z* used in place of t* because σ is unknown |
| 1 | Explains that the interval is too narrow, so its capture rate is below 95% |
| 1 | Correct interval (44.47, 60.53) minutes with df = 7 and t* ≈ 2.365 |
| 1 | Names the sample data condition and links failure to the outlier with n < 30 |
</details>

## How did you do?

- **Q1 or Q2 wrong:** revisit "t-distributions" in the [study guide](/advanced-course-resources/statistics/4-2-constructing-confidence-interval-population-mean-study-guide/), including the t* table.
- **Q3 or Q6(a) wrong:** revisit "Choosing the procedure and defining the parameter".
- **Q4 or Q5 wrong:** work through Worked examples 1 and 3 again.
- **Q6 wrong:** work through Worked example 2, checking conditions on the differences.
- **Q7 wrong:** revisit "Why a new distribution?" and "The three conditions".

Then tick off the [topic checklist](/advanced-course-resources/statistics/4-2-constructing-confidence-interval-population-mean-checklist/).
