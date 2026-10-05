---
resourceId: "mb-ap-stats-3.13-practice"
title: "Carrying Out a Test for the Difference Between Two Proportions: Practice Questions (Statistics 3.13)"
description: "Seven original Marlbridge practice questions on pooled proportions, two-sample z statistics, p-values, interpretations and conclusions, with worked solutions and suggested rubrics."
course: "statistics"
unit: 3
topics: ["3.13"]
resourceType: "practice-questions"
prerequisites:
  - "Setting up a two-sample z-test for proportions (Topic 3.12)"
prerequisiteResources: ["mb-ap-stats-3.13-study-guide"]
learningObjectives:
  - "Calculate the pooled proportion, the two-sample z statistic and the p-value correctly"
  - "Interpret a p-value for a difference in proportions in context"
  - "Make a decision linked to α and write a conclusion in context in terms of Hₐ"
  - "Identify and correct errors in another student's test"
skills: ["3", "4"]
studyMinutes: 50
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Use 2-PropZTest or a normal cdf to check your work. Round z to 2 decimal places and p-values to 4 unless told otherwise."
related: ["mb-ap-stats-3.13-study-guide", "mb-ap-stats-3.13-revision-notes", "mb-ap-stats-3.13-checklist"]
next: "mb-ap-stats-3.13-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every p-value interpretation states the assumption that the true proportions are equal."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All contexts and data are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: p̂c is the pooled proportion (x₁ + x₂) / (n₁ + n₂); p-values come from the standard normal distribution using technology with unrounded z (a table with z rounded to 2 decimal places may differ in the fourth decimal place, which is acceptable); round z to 2 decimal places and p-values to 4. A graphing calculator is assumed.

## Question 1 (multiple choice · foundation)

In a random sample of 120 customers of one fictional gym, 42 attend a class each week. In an independent random sample of 150 customers of a second gym, 63 do. A test of H₀: p₁ = p₂ is planned. What is the pooled proportion p̂c?

- (A) 0.070
- (B) 0.385
- (C) 0.389
- (D) 0.770

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** p̂c = (42 + 63) ÷ (120 + 150) = 105 ÷ 270 ≈ 0.389.

- (A) is the difference p̂₂ − p̂₁ = 0.42 − 0.35 = 0.07, which goes in the numerator of z, not in the standard error.
- (B) is the simple average of 0.35 and 0.42. It gives the two samples equal weight, but the second sample is larger, so it must count more.
- (D) adds the two proportions, 0.35 + 0.42 = 0.77. A proportion of successes in the combined sample must lie between p̂₁ and p̂₂.
</details>

## Question 2 (multiple choice · core)

A two-sample z-test for proportions has Hₐ: p₁ ≠ p₂. The test statistic is z = −2.17. What is the p-value?

- (A) 0.0150
- (B) 0.0300
- (C) 0.9700
- (D) 0.9850

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** For a two-sided alternative, count both tails: 2 × P(Z ≤ −2.17) = 2 × 0.0150 = 0.0300.

- (A) is only the left tail. It would be correct for Hₐ: p₁ < p₂.
- (C) is 1 − 0.0300, the area *between* −2.17 and 2.17: the less extreme results, not the more extreme ones.
- (D) is P(Z ≥ −2.17), the right tail from −2.17. It would be the p-value for Hₐ: p₁ > p₂.
</details>

## Question 3 (multiple choice · core)

A fictional school randomly assigned 400 students who borrowed library books to receive a reminder by text message (200 students) or by email (200 students). Of the text group, 130 returned their books on time (0.65); of the email group, 112 did (0.56). For H₀: p₁ = p₂ against Hₐ: p₁ > p₂, where p₁ is for text reminders, the p-value is 0.0328. Which is a correct interpretation of this p-value?

- (A) There is a 0.0328 probability that text and email reminders are equally effective.
- (B) There is a 0.0328 probability that the difference of 0.09 happened by chance.
- (C) Assuming the true proportions returning books on time are the same for text and email reminders, there is a 0.0328 probability of getting a difference in sample proportions (text minus email) of 0.09 or more by chance in the random assignment.
- (D) Assuming text reminders work better, there is a 0.0328 probability of getting a difference in sample proportions of 0.09 or more.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** It states the assumption (H₀ in context), the probability, and the event in the direction of Hₐ (0.09 or more).

- (A) treats the p-value as the probability that H₀ is true. A p-value is calculated assuming H₀; it cannot also be the probability of H₀.
- (B) leaves out the assumption that the true proportions are equal, and does not say "or more".
- (D) assumes Hₐ instead of H₀. The p-value is always calculated in the world where H₀ is true.
</details>

## Question 4 (calculation · core)

A fictional energy agency took independent random samples of households in two regions. In the North, 54 of 300 households had solar panels; in the South, 84 of 350 did. The conditions for inference have been checked. Test H₀: p_N = p_S against Hₐ: p_N < p_S. Calculate the pooled proportion, the test statistic and the p-value, showing your substitution.

<details>
<summary>Worked solution</summary>

1. p̂_N = 54 ÷ 300 = 0.18 and p̂_S = 84 ÷ 350 = 0.24. Difference p̂_N − p̂_S = −0.06.
2. p̂c = (54 + 84) ÷ (300 + 350) = 138 ÷ 650 ≈ 0.2123.
3. Standard error: √[0.2123 × 0.7877 × (1/300 + 1/350)] ≈ 0.03218.
4. z = (−0.06 − 0) ÷ 0.03218 ≈ **−1.86**.
5. p-value = P(Z ≤ −1.86) ≈ **0.0311** (left tail, because Hₐ uses <). A table with z = −1.86 gives 0.0314.

Suggested mark points (3): 1 for p̂c = 0.2123 from pooled counts; 1 for z ≈ −1.86 with the pooled standard error shown; 1 for the left-tail p-value ≈ 0.0311. An answer of 0.9689 (the right tail) does not earn the third point.
</details>

## Question 5 (constructed response · core)

A fictional university has about 2,400 first-year students and 2,100 final-year students. A researcher asks: *Is there a difference between first-year and final-year students in the proportion who eat breakfast every day?* She takes independent random samples of 150 first-year students and 140 final-year students. Of these, 69 first-years and 50 final-years eat breakfast every day. Carry out an appropriate test at α = 0.05.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**Hypotheses.** Let p₁ = the true proportion of all first-year students at the university who eat breakfast every day, and p₂ = the true proportion of all final-year students who do. H₀: p₁ − p₂ = 0; Hₐ: p₁ − p₂ ≠ 0; α = 0.05.

**Method and conditions.** Two-sample z-test for the difference between two population proportions. Independent random samples. 150 ≤ 10% of 2,400 = 240 and 140 ≤ 10% of 2,100 = 210. p̂c = 119 ÷ 290 ≈ 0.4103, so n₁p̂c ≈ 61.55, n₁(1 − p̂c) ≈ 88.45, n₂p̂c ≈ 57.45, n₂(1 − p̂c) ≈ 82.55, all at least 10.

**Calculations.** p̂₁ = 0.46, p̂₂ ≈ 0.3571, difference ≈ 0.1029. Standard error = √[0.4103 × 0.5897 × (1/150 + 1/140)] ≈ 0.05780. z ≈ 0.1029 ÷ 0.05780 ≈ **1.78**. p-value = 2 × P(Z ≥ 1.78) ≈ **0.0752**.

**Conclusion.** Because the p-value of 0.0752 is greater than α = 0.05, we fail to reject H₀. There is not convincing statistical evidence that the true proportion of students who eat breakfast every day differs between first-year and final-year students at this university.

| Point | What earns it |
|---|---|
| 1 | Hypotheses with p₁ and p₂ defined in context (true proportions, breakfast every day, each year group) and a two-sided Hₐ |
| 1 | Names the two-sample z-test for proportions and checks all three conditions with numbers, using p̂c |
| 1 | Correct z ≈ 1.78 with the pooled standard error and a two-sided p-value ≈ 0.0752 |
| 1 | Decision linked to α with both values, conclusion in context in terms of Hₐ, with no claim that the proportions are equal |

A one-sided p-value (0.0376) loses point 3 and leads to the wrong decision, so it also loses point 4.
</details>

## Question 6 (constructed response · stretch)

In a fictional trial, 160 tomato plants were randomly assigned to be treated with a new organic spray (80 plants) or the standard spray (80 plants). By the end of the season, 14 plants with the new spray and 26 plants with the standard spray showed fungal disease. The grower wants to know whether the new spray reduces the proportion of plants that develop the disease. Use α = 0.05. The conditions have been checked.

(a) Let p₁ = the true proportion of plants like these that would develop disease with the new spray and p₂ = the same with the standard spray. Calculate the test statistic and p-value for H₀: p₁ = p₂ against Hₐ: p₁ < p₂.
(b) Interpret the p-value in context.
(c) State your conclusion. Can the grower say that the new spray *causes* a lower disease rate? Explain.
(d) Another student defines the difference as p₂ − p₁ and uses Hₐ: p₂ − p₁ > 0. What z and p-value does this student get?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** p̂₁ = 14 ÷ 80 = 0.175 and p̂₂ = 26 ÷ 80 = 0.325. p̂c = 40 ÷ 160 = 0.25. Standard error = √[0.25 × 0.75 × (1/80 + 1/80)] ≈ 0.06847. z = (0.175 − 0.325) ÷ 0.06847 ≈ **−2.19**. p-value = P(Z ≤ −2.19) ≈ **0.0142**.

**(b)** Assuming the new and standard sprays give the same true proportion of plants that develop fungal disease, there is about a 0.0142 probability of getting a difference in sample proportions (new minus standard) of −0.15 or less by chance in the random assignment.

**(c)** Because 0.0142 < 0.05, reject H₀. There is convincing statistical evidence that the true proportion of plants like these that develop fungal disease is lower with the new spray than with the standard spray. Yes: the plants were randomly assigned to sprays, so the experiment supports a cause-and-effect conclusion, for plants like those in the trial.

**(d)** z ≈ **+2.19** and the p-value is still **0.0142** (now the right tail). Swapping the order changes the sign of z and the direction of Hₐ, but not the evidence.

| Point | What earns it |
|---|---|
| 1 | Correct p̂c = 0.25, z ≈ −2.19 and left-tail p-value ≈ 0.0142 |
| 1 | Interpretation assumes equal true proportions, in context, with "−0.15 or less" (or "a reduction of 0.15 or more") |
| 1 | Decision linked to α and a causal conclusion justified by random assignment |
| 1 | z ≈ 2.19 with the same p-value, with a reason |
</details>

## Question 7 (explanation · stretch)

A fictional bus company compares two routes. It takes independent random samples of 200 trips from each route (each route runs about 3,000 trips a year). On Route 7, 168 sampled trips were on time; on Route 12, 150 were. The company had chosen α = 0.01. A student writes:

> SE = √[0.84(0.16)/200 + 0.75(0.25)/200] ≈ 0.0401, so z = 0.09 ÷ 0.0401 ≈ 2.24 and the two-sided p-value is 0.0249. Since 0.0249 > 0.01, we accept H₀. The two routes have the same on-time rate.

(a) Identify the error in the student's calculation and give the correct z and p-value.
(b) Identify two errors in the student's conclusion and write a correct conclusion.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** The student used the unpooled standard error, which belongs to a confidence interval. A test assumes p₁ = p₂, so it uses p̂c = (168 + 150) ÷ 400 = 0.795. Standard error = √[0.795 × 0.205 × (1/200 + 1/200)] ≈ 0.04037. z ≈ 0.09 ÷ 0.04037 ≈ **2.23**, and the two-sided p-value ≈ **0.0258**.

**(b)** "Accept H₀" is wrong: a test can only fail to reject H₀. "The two routes have the same on-time rate" is wrong: a lack of evidence of a difference does not show the rates are equal (and it talks about certainty, not evidence). Correct conclusion: because the p-value of 0.0258 is greater than α = 0.01, we fail to reject H₀. There is not convincing statistical evidence that the true proportion of on-time trips differs between Route 7 and Route 12.

| Point | What earns it |
|---|---|
| 1 | Identifies the unpooled standard error as the error and explains that the test assumes p₁ = p₂ |
| 1 | Correct p̂c, z ≈ 2.23 and p-value ≈ 0.0258 |
| 1 | Identifies "accept H₀" and the claim of equal rates as errors |
| 1 | Correct linked conclusion in context about the true proportions, in terms of Hₐ |
</details>

## How did you do?

- **Q1 or Q4 wrong:** re-read "The pooled proportion" in the [study guide](/advanced-course-resources/statistics/3-13-carrying-out-test-difference-between-study-guide/). Add the counts; do not average the proportions.
- **Q2 wrong:** revisit "Finding the p-value" and Figure 1. The tail comes from Hₐ.
- **Q3 or Q6(b) wrong:** revisit "Interpreting the p-value". Always assume H₀ in context.
- **Q5 incomplete:** compare your answer with Worked example 1, part by part.
- **Q6(c) wrong:** revisit Worked example 2 on what a randomized experiment lets you claim.
- **Q7 wrong:** revisit "Common misconceptions".

Then tick off the [topic checklist](/advanced-course-resources/statistics/3-13-carrying-out-test-difference-between-checklist/).
