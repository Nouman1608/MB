---
resourceId: "mb-ap-stats-3.2-practice"
title: "Sampling Distributions for Sample Proportions: Practice Questions (Statistics 3.2)"
description: "Seven original Marlbridge practice questions on the mean, standard deviation, conditions and normal probabilities for a sample proportion, with worked solutions and suggested rubrics."
course: "statistics"
unit: 3
topics: ["3.2"]
resourceType: "practice-questions"
prerequisites:
  - "Normal probabilities with z-scores (Topic 2.11)"
prerequisiteResources: ["mb-ap-stats-3.2-study-guide"]
learningObjectives:
  - "Calculate the mean and standard deviation of the sampling distribution of p̂"
  - "Check the random, 10% and large-counts conditions in context"
  - "Calculate and interpret normal probabilities for p̂"
  - "Use the sampling distribution to judge a claim and to plan a sample size"
skills: ["3", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Use normalcdf for probabilities. Keep 4 decimal places in σp̂ and z; round probabilities to 4 decimal places."
related: ["mb-ap-stats-3.2-study-guide", "mb-ap-stats-3.2-revision-notes", "mb-ap-stats-3.2-checklist"]
next: "mb-ap-stats-3.2-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every condition must be checked with numbers from the context."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All data, organisations and places are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: samples are simple random samples taken without replacement unless stated; p is the population proportion; σp̂ = √(p(1 − p)/n); round probabilities to 4 decimal places. A graphing calculator is assumed.

## Question 1 (multiple choice · foundation)

Of the 85,000 customers of the fictional online shop Pellow, 60% use its mobile app. A random sample of 150 customers is selected. What is the standard deviation of the sampling distribution of the sample proportion who use the app?

- (A) 0.0016
- (B) 0.04
- (C) 0.0632
- (D) 6

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** σp̂ = √(0.6 × 0.4 / 150) = √(0.24 / 150) = √0.0016 = 0.04. (150 ≤ 10% of 85,000, so the formula applies.)

- (A) is p(1 − p)/n, the **variance**. The square root was not taken.
- (C) is √(p / n) = √(0.6 / 150); it leaves out the factor (1 − p).
- (D) is √(np(1 − p)) = √36, the standard deviation of the **count** of app users, not of the proportion.
</details>

## Question 2 (multiple choice · foundation)

A researcher plans to increase the sample size in a survey from 100 to 400, with the population proportion unchanged. What happens to the sampling distribution of p̂?

- (A) Its mean decreases and its standard deviation is divided by 4.
- (B) Its mean is unchanged and its standard deviation is divided by 4.
- (C) Its mean is unchanged and its standard deviation is divided by 2.
- (D) Its mean is unchanged and its standard deviation is unchanged, because p is unchanged.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The mean is always p, whatever n is. σp̂ = √(p(1 − p)/n); multiplying n by 4 multiplies the denominator by 4, which divides the square root by √4 = 2.

- (A) suggests the centre moves. p̂ is unbiased for every sample size, so the mean stays at p.
- (B) forgets the square root.
- (D) forgets that n is in the formula. Larger samples give less variable sample proportions.
</details>

## Question 3 (multiple choice · core)

In a fictional country, 5% of adults are left-handed. A researcher will take a random sample of adults. What is the smallest sample size for which the sampling distribution of p̂ (the sample proportion who are left-handed) can be treated as approximately normal?

- (A) 11
- (B) 30
- (C) 150
- (D) 200

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Both np ≥ 10 and n(1 − p) ≥ 10 are needed. np = 0.05n ≥ 10 gives n ≥ 200. With n = 200, np = 10 and n(1 − p) = 190, both at least 10.

- (A) checks only the failures: 0.95n ≥ 10 gives n ≥ 10.53, so 11. The successes would then be 0.55, far below 10.
- (B) uses the "n ≥ 30" rule of thumb for sample means. It does not apply to proportions.
- (C) gives np = 7.5, which is less than 10, so the distribution would still be noticeably skewed to the right.
</details>

## Question 4 (calculation · core)

In the fictional city of Tolham, which has 60,000 households, 22% of households own an electric car. A random sample of 300 households is selected.

(a) Check the conditions for using a normal model for the sampling distribution of p̂.
(b) Find the probability that less than 18% of the sampled households own an electric car.
(c) Find the probability that the sample proportion is between 0.18 and 0.25.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Random: a random sample of Tolham households. 10%: 300 ≤ 10% of 60,000 = 6,000. Large counts: np = 300 × 0.22 = 66 and n(1 − p) = 300 × 0.78 = 234, both at least 10. So p̂ is approximately normal with mean 0.22 and σp̂ = √(0.22 × 0.78 / 300) ≈ 0.02392.

**(b)** z = (0.18 − 0.22) / 0.02392 ≈ −1.6725. P(p̂ < 0.18) ≈ **0.0472**.

**(c)** z for 0.25 = (0.25 − 0.22) / 0.02392 ≈ 1.2544. P(0.18 < p̂ < 0.25) ≈ **0.8479**.

| Point | What earns it |
|---|---|
| 1 | All three conditions checked with numbers from the context (6,000; 66; 234) |
| 1 | Correct mean 0.22 and σp̂ ≈ 0.0239 |
| 1 | P(p̂ < 0.18) ≈ 0.0472 with the z-score or calculator inputs shown |
| 1 | P(0.18 < p̂ < 0.25) ≈ 0.8479 |

Calculator syntax alone, such as "normalcdf(−1, 0.18, 0.22, 0.02392)", is acceptable only if the mean and standard deviation are labelled.
</details>

## Question 5 (constructed response · core)

The fictional Hollins School has 900 students, and 40% of them walk to school. A teacher plans to select a random sample of 100 students and find p̂, the proportion who walk.

(a) Calculate the mean and the standard deviation of the sampling distribution of p̂, using the usual formulas.
(b) Interpret the mean in context.
(c) Check the conditions. Explain what the result of the 10% check means for your answer to (a).
(d) What is the largest sample size that meets the 10% condition? Find σp̂ for that sample size.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** μp̂ = 0.40. σp̂ = √(0.40 × 0.60 / 100) = √0.0024 ≈ **0.0490**.

**(b)** If the teacher took many random samples of 100 Hollins students, the sample proportions who walk to school would average 0.40, the proportion for the whole school.

**(c)** Random: the sample is random. ✓ Large counts: np = 40 and n(1 − p) = 60, both at least 10. ✓ 10%: 10% of 900 is 90, and 100 > 90, so the condition is **not** met. ✗ The sample is too large a part of the school for the observations to be treated as independent. The formula in (a) is then not accurate: it **overstates** the true variability of p̂, because when a large share of the school is sampled, the samples are more alike than the formula assumes.

**(d)** n ≤ 90. With n = 90: σp̂ = √(0.24 / 90) ≈ **0.0516**. (Large counts still hold: 36 and 54.)

| Point | What earns it |
|---|---|
| 1 | μp̂ = 0.40 and σp̂ ≈ 0.0490 |
| 1 | Interpretation of the mean that refers to repeated random samples of 100 Hollins students |
| 1 | Shows 100 > 90, concludes the 10% condition fails, **and** explains the formula is not reliable (overstates the variability) |
| 1 | n = 90 with σp̂ ≈ 0.0516 |
</details>

## Question 6 (constructed response · stretch)

The fictional broadband company Lumenet says that 90% of its 20,000 customers are satisfied with their service. A consumer group surveys a random sample of 250 Lumenet customers and finds that 210 are satisfied.

(a) Calculate p̂.
(b) Assuming the company's claim is true, describe the sampling distribution of p̂ for samples of 250 customers (centre, variability and shape), checking conditions.
(c) Assuming the claim is true, find the probability that a random sample of 250 customers gives p̂ as low as, or lower than, the consumer group's result.
(d) Does the consumer group's result give reason to doubt the company's claim? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** p̂ = 210 ÷ 250 = **0.84**.

**(b)** Centre: μp̂ = 0.90. Variability: 250 ≤ 10% of 20,000 = 2,000, so σp̂ = √(0.90 × 0.10 / 250) ≈ 0.01897. Shape: np = 225 and n(1 − p) = 25, both at least 10, so approximately normal. (Random: the customers were a random sample.)

**(c)** z = (0.84 − 0.90) / 0.01897 ≈ −3.1623. P(p̂ ≤ 0.84) ≈ **0.0008**.

**(d)** Yes. If 90% of all Lumenet customers were satisfied, a sample proportion of 0.84 or lower would happen in only about 8 of every 10,000 random samples of 250. This is very unlikely, so the result gives convincing reason to doubt the claim and suggests that fewer than 90% of customers are satisfied. It does not prove the claim false.

| Point | What earns it |
|---|---|
| 1 | p̂ = 0.84 and centre 0.90 with σp̂ ≈ 0.0190 (10% condition checked) |
| 1 | Shape approximately normal, justified with np = 225 and n(1 − p) = 25 |
| 1 | Probability ≈ 0.0008 with z or calculator inputs shown |
| 1 | Conclusion linked to the small probability **and** to the assumption that the claim is true, in context, without saying "proved" |

The exact binomial probability, P(X ≤ 210) ≈ 0.0021, is also acceptable for (c); the conclusion is the same.
</details>

## Question 7 (explanation · stretch)

A polling company plans a random sample of voters in a fictional city. It does not know the population proportion p it will be estimating, so it uses p = 0.5, which gives the largest possible σp̂.

(a) Find the smallest sample size that makes σp̂ at most 0.015.
(b) Using that sample size and p = 0.5, find the probability that p̂ is within 0.03 of p.
(c) A rival company uses a sample of 400. Find the same probability for its sample, and explain the difference in context.
(d) What does the 10% condition require of the city's population for the sample size in (a)?

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** √(0.25 / n) ≤ 0.015 gives 0.25 / n ≤ 0.000225, so n ≥ 1,111.1. Round up: **n = 1,112**.

**(b)** σp̂ = √(0.25 / 1,112) ≈ 0.01499. Large counts: 556 and 556. z = 0.03 / 0.01499 ≈ 2.0008. P(−2.0008 < z < 2.0008) ≈ **0.9546**.

**(c)** With n = 400, σp̂ = √(0.25 / 400) = 0.025 and z = 0.03 / 0.025 = 1.2, so the probability is ≈ **0.7699**. The rival's sample proportions vary more from sample to sample, so only about 77% of its samples land within 3 percentage points of the true proportion, compared with about 95% for samples of 1,112.

**(d)** 1,112 ≤ 10% of N, so the city must have at least **11,120** voters.

| Point | What earns it |
|---|---|
| 1 | n = 1,112, with rounding up justified |
| 1 | Probability ≈ 0.9546 with σp̂ and z shown |
| 1 | Probability ≈ 0.7699 for n = 400 **and** an explanation in terms of variability of p̂ in repeated samples |
| 1 | N ≥ 11,120 |
</details>

## How did you do?

- **Q1 or Q5(a) wrong:** re-read "Mean and standard deviation of p̂" in the [study guide](/advanced-course-resources/statistics/3-2-sampling-distributions-sample-proportions-study-guide/).
- **Q2 or Q7 wrong:** revisit Worked example 3 on sample size.
- **Q3 or Q5(c) wrong:** revisit "The conditions and what each one is for" and "When the large-counts condition fails".
- **Q4 or Q6 wrong:** work through Worked example 2 again; standardise with σp̂, not with the count.
- **Q5(b) or Q6(d) incomplete:** use the interpretation templates in the [revision notes](/advanced-course-resources/statistics/3-2-sampling-distributions-sample-proportions-revision-notes/).

Then tick off the [topic checklist](/advanced-course-resources/statistics/3-2-sampling-distributions-sample-proportions-checklist/).
