---
resourceId: "mb-ap-stats-3.4-practice"
title: "Justifying a Claim Based on a Confidence Interval for a Population Proportion: Practice Questions (Statistics 3.4)"
description: "Seven original Marlbridge practice questions on interpreting confidence intervals and levels, judging claims, and the effects of sample size and confidence level, with suggested rubrics."
course: "statistics"
unit: 3
topics: ["3.4"]
resourceType: "practice-questions"
prerequisites:
  - "Constructing a one-sample z-interval for a proportion"
prerequisiteResources: ["mb-ap-stats-3.4-study-guide"]
learningObjectives:
  - "Interpret a confidence interval and a confidence level in context"
  - "Use an interval to decide whether there is convincing evidence for or against a claim"
  - "Predict and explain how the confidence level and sample size change the margin of error"
  - "Correct common wrong interpretations of confidence"
skills: ["2", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "z* = 1.645 (90%), 1.960 (95%), 2.576 (99%). Give interval endpoints to 3 decimal places."
related: ["mb-ap-stats-3.4-study-guide", "mb-ap-stats-3.4-revision-notes", "mb-ap-stats-3.4-checklist"]
next: "mb-ap-stats-3.4-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written answers."
  - "Every interpretation names the proportion, the response and the population."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All contexts and data are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: intervals are one-sample z-intervals for a population proportion and the conditions are met unless a question says otherwise; z* = 1.645 (90%), 1.960 (95%) or 2.576 (99%); give endpoints to 3 decimal places. A graphing calculator is assumed.

## Question 1 (multiple choice · foundation)

From a random sample of commuters in a fictional city, a 95% confidence interval for the proportion of all the city's commuters who share a car to work is (0.41, 0.49). Which statement correctly interprets the **confidence level**?

- (A) There is a 95% probability that the proportion of all the city's commuters who share a car is between 0.41 and 0.49.
- (B) 95% of the commuters in the sample share a car between 41% and 49% of the time.
- (C) If many random samples of the same size were taken and a 95% interval built from each, about 95% of the intervals would capture the proportion of all the city's commuters who share a car.
- (D) About 95% of all possible sample proportions lie between 0.41 and 0.49.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The confidence level describes the method: the long-run proportion of intervals, from repeated random samples of the same size, that capture the true population proportion.

- (A) gives a probability for one interval that has already been calculated. The proportion is fixed, so this interval either contains it or does not.
- (B) describes individual commuters. The interval estimates one population proportion, not how often people share cars.
- (D) is about where sample proportions land. The 95% refers to intervals capturing p, and this particular interval is centred on one p̂, not on p.
</details>

## Question 2 (multiple choice · core)

A researcher builds a 90% interval for a population proportion and then, using the same sample, a 99% interval. Compared with the 90% interval, the 99% interval has

- (A) a smaller critical value and is narrower.
- (B) a larger critical value, a larger margin of error and is wider.
- (C) a larger standard error and is wider.
- (D) the same width, because the data have not changed.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Higher confidence needs a larger z* (2.576 instead of 1.645). The standard error is the same, so the margin of error, and therefore the width, increase.

- (A) has the direction backwards. Capturing p more often needs a wider net, not a narrower one.
- (C) gives the wrong reason. The standard error depends only on p̂ and n, which have not changed; only z* changes.
- (D) forgets that the width depends on z* as well as on the data.
</details>

## Question 3 (multiple choice · core)

A polling company plans to increase its sample size from 250 to 1,000. Assuming p̂ and the confidence level stay about the same, what happens to the margin of error?

- (A) It is divided by about 4.
- (B) It is divided by about 2.
- (C) It stays the same, because the confidence level is the same.
- (D) It doubles.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The margin of error is proportional to 1/√n. The sample is 4 times larger, so the margin of error is multiplied by 1/√4 = 1/2.

- (A) treats the margin of error as proportional to 1/n, forgetting the square root.
- (C) ignores the n in the standard error; the confidence level is not the only thing that sets the margin of error.
- (D) has the direction backwards. Larger samples give more precise estimates.
</details>

## Question 4 (multiple choice · core)

A random sample of customers of a fictional phone company gives a 95% confidence interval of (0.181, 0.259) for the proportion of all its customers who contacted customer support last year. A company report claims that "more than 30% of our customers contacted support last year". Which conclusion is best?

- (A) The interval supports the claim, because 0.30 is close to the upper limit of 0.259.
- (B) The interval gives convincing evidence against the claim, because every plausible value is below 0.30.
- (C) The interval proves that exactly 22% of customers contacted support.
- (D) The interval cannot be used, because 0.30 is not the point estimate.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Every value in the interval is less than 0.30, so proportions above 30% are not plausible. The interval gives convincing evidence against the claim.

- (A) treats "close to" as "inside". 0.30 is outside the interval, so it is not a plausible value.
- (C) treats the point estimate (0.22) as the true value. The interval gives a range of plausible values; it proves nothing exact.
- (D) is wrong because any claimed value can be compared with the interval, not only p̂.
</details>

## Question 5 (constructed response · core)

Marrow County, a fictional county, has 24,000 households. A random sample of 500 households found that 215 grow some of their own vegetables. A local newspaper claims that fewer than half of the county's households grow vegetables.

(a) Construct a 95% confidence interval for the proportion of all Marrow County households that grow vegetables. Check the conditions.
(b) Interpret the interval in context.
(c) Does the interval give convincing evidence for the newspaper's claim? Justify your answer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** One-sample z-interval for p, where p = the proportion of all Marrow County households that grow vegetables. Conditions: random sample of households; 500 ≤ 10% of 24,000 = 2,400; 215 successes and 285 failures, both at least 10.
p̂ = 215 ÷ 500 = 0.43. SE = √(0.43 × 0.57 ÷ 500) = 0.02214. MOE = 1.960 × 0.02214 = 0.0434. Interval: **(0.387, 0.473)**.

**(b)** We are 95% confident that the interval from 0.387 to 0.473 captures the proportion of all Marrow County households that grow some of their own vegetables.

**(c)** Yes. Every value in the interval is below 0.5, so a proportion of one half or more is not plausible. The interval gives convincing evidence that fewer than half of the county's households grow vegetables.

| Point | What earns it |
|---|---|
| 1 | Conditions checked in context (random, 500 ≤ 2,400, counts 215 and 285) |
| 1 | Correct interval (0.387, 0.473) with working |
| 1 | Interpretation with confidence level, both endpoints and the population proportion in context |
| 1 | Correct conclusion linked to the whole interval lying below 0.5 |

Point 4 needs the link to the interval. "Yes, because 0.43 < 0.5" uses only the point estimate and does not earn it.
</details>

## Question 6 (constructed response · stretch)

A fictional polling company asked a random sample of 665 voters whether they support a new transport tax. From the same data it reported two intervals for the proportion of all voters who support the tax: Interval A is (0.462, 0.538) and Interval B is (0.450, 0.550). One is a 95% interval and the other is a 99% interval.

(a) Which interval is the 99% interval? Explain.
(b) Find the sample proportion and each margin of error.
(c) A campaign group claims that 54% of voters support the tax. What does each interval say about this claim?
(d) Explain how the same data can lead to the two conclusions in (c).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** **Interval B.** Both intervals use the same p̂ and standard error, so the wider interval must use the larger critical value, which belongs to the higher confidence level. B is wider (width 0.100 against 0.076).

**(b)** Both are centred on p̂ = (0.462 + 0.538) ÷ 2 = 0.500. Margin of error: A, 0.038; B, 0.050. Check: 0.050 ÷ 0.038 ≈ 1.32, close to 2.576 ÷ 1.960 ≈ 1.31.

**(c)** 0.54 is **outside** Interval A (95%), so at 95% confidence it is not plausible: convincing evidence against the claim. 0.54 is **inside** Interval B (99%), so at 99% confidence it is plausible: no convincing evidence against the claim.

**(d)** A higher confidence level gives a wider interval, so more values count as plausible. 0.54 lies between the upper limits 0.538 and 0.550, so the conclusion depends on the confidence level chosen. The level should be chosen before looking at the data, and the report should state which level it used.

| Point | What earns it |
|---|---|
| 1 | Chooses B and links greater width to a larger z* at the higher confidence level |
| 1 | p̂ = 0.500 and both margins of error (0.038 and 0.050) |
| 1 | Correct conclusion for each interval, using inside/outside |
| 1 | Explains that wider intervals contain more plausible values, so the conclusion depends on the confidence level |
</details>

## Question 7 (explanation · stretch)

A teacher's computer takes 50 random samples of 200 from a large population with a known proportion and builds a 90% interval from each.

(a) About how many of the 50 intervals would you expect to capture the population proportion? Must exactly that many capture it? Explain.
(b) A student uses one real sample to get the 90% interval (0.21, 0.29) for the proportion of all students at a school who walk to school. She writes: "There is a 90% chance that the true proportion is between 0.21 and 0.29." Explain what is wrong and write a correct interpretation of the interval.
(c) Write a correct interpretation of the 90% confidence level for her study.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** About 0.90 × 50 = **45** intervals. Not exactly 45: the number that capture p varies from one set of 50 samples to another. The 90% is a long-run rate, so 43 or 47 would not be surprising.

**(b)** After the interval is calculated, the true proportion is either between 0.21 and 0.29 or it is not; there is no chance left in it. The 90% belongs to the method, not to this one interval. Correct: "We are 90% confident that the interval from 0.21 to 0.29 captures the proportion of all students at the school who walk to school."

**(c)** If many random samples of the same size were taken from the school's students and a 90% interval built from each, about 90% of those intervals would capture the true proportion of students at the school who walk to school.

| Point | What earns it |
|---|---|
| 1 | 45 intervals, with the explanation that the actual number varies |
| 1 | Explains why "90% chance" is wrong for one computed interval |
| 1 | Correct interpretation of the interval in context |
| 1 | Correct interpretation of the confidence level, referring to repeated samples and capturing p |
</details>

## How did you do?

- **Q1 or Q7 wrong:** re-read "Interpreting the confidence level" and Figure 1 in the [study guide](/advanced-course-resources/statistics/3-4-justifying-claim-based-on-confidence-study-guide/).
- **Q2, Q3 or Q6(a) wrong:** revisit "How confidence level and sample size change the interval" and Worked example 2.
- **Q4, Q5(c) or Q6(c) wrong:** revisit "Using an interval to justify a claim" and Worked example 1.
- **Q5(a) wrong:** review the steps in [Topic 3.3](/advanced-course-resources/statistics/3-3-constructing-confidence-interval-population-proportion-study-guide/).

Then tick off the [topic checklist](/advanced-course-resources/statistics/3-4-justifying-claim-based-on-confidence-checklist/).
