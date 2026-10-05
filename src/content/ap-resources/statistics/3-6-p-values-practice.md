---
resourceId: "mb-ap-stats-3.6-practice"
title: "p-Values: Practice Questions (Statistics 3.6)"
description: "Seven original Marlbridge practice questions on finding and interpreting p-values for tests about a proportion, from normal models and simulations, with suggested rubrics."
course: "statistics"
unit: 3
topics: ["3.6"]
resourceType: "practice-questions"
prerequisites:
  - "Writing hypotheses for a test about a proportion (Topic 3.5)"
  - "Standard normal areas with a table or calculator (Topic 2.11)"
prerequisiteResources: ["mb-ap-stats-3.6-study-guide"]
learningObjectives:
  - "Find p-values from the standard normal distribution for each type of alternative"
  - "Estimate p-values from a simulated null distribution, including two-sided ones"
  - "Interpret a p-value in context and explain what it does and does not show"
skills: ["4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Use normalcdf(lower, upper, 0, 1) with ±99 for an open end. Give p-values to 4 decimal places unless told otherwise."
related: ["mb-ap-stats-3.6-study-guide", "mb-ap-stats-3.6-revision-notes", "mb-ap-stats-3.6-checklist"]
next: "mb-ap-stats-3.6-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written answers."
  - "Every interpretation must state the assumption that H₀ is true, in context."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All organisations, places and data are fictional, and the simulation results were produced for these questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: p is the true population proportion; where a test statistic z is given, the conditions for a standard normal null distribution are met; you do not need to calculate z yourself (that is Topic 3.7). A graphing calculator is assumed.

## Question 1 (multiple choice · foundation)

The fictional Hollyfield Rescue says that 60% of its dogs are adopted within a month of arriving. A volunteer believes the true proportion is higher. In a random sample of 125 dogs, 85 were adopted within a month (p̂ = 0.68). For H₀: p = 0.60 and Hₐ: p > 0.60, the p-value is 0.034. Which is a correct interpretation of the p-value?

- (A) There is a 0.034 probability that the true proportion of dogs adopted within a month is 0.60.
- (B) There is a 0.034 probability that the volunteer is wrong.
- (C) Assuming the true proportion of Hollyfield dogs adopted within a month is 0.60, there is a 0.034 probability of getting a sample proportion of 0.68 or higher in a random sample of 125 dogs.
- (D) There is a 0.966 probability that more than 60% of Hollyfield dogs are adopted within a month.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** It contains all three parts: the assumption that p = 0.60, the probability, and the event "0.68 or higher" (the direction of Hₐ) in a random sample of 125.

- (A) treats the p-value as the probability that H₀ is true. The p-value is calculated *assuming* H₀ is true, so it cannot be that.
- (B) treats the p-value as the probability of a wrong conclusion. It is not a probability about the volunteer's belief.
- (D) uses 1 − p-value as the probability that Hₐ is true. A test does not produce that probability.
</details>

## Question 2 (multiple choice · core)

A test has H₀: p = 0.25 and Hₐ: p < 0.25. The test statistic is z = −1.52. What is the p-value?

- (A) 0.0643
- (B) 0.1285
- (C) 0.4357
- (D) 0.9357

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Hₐ is "less than", so the p-value is the area at or below the observed z: P(Z ≤ −1.52) = normalcdf(−99, −1.52, 0, 1) ≈ 0.0643.

- (B) doubles the tail area, 2 × 0.0643. That is the p-value for a two-sided test, but this alternative is one-sided.
- (C) is the area between 0 and 1.52, a common table-reading error.
- (D) is the area at or above −1.52, the wrong tail for a "less than" alternative.
</details>

## Question 3 (multiple choice · core)

A test has H₀: p = 0.50 and Hₐ: p ≠ 0.50. In a random sample of 40, the sample proportion is p̂ = 0.65. A student simulates 500 random samples of 40 from a population with p = 0.50. Of the 500 simulated sample proportions, 17 are at or above 0.65 and 21 are at or below 0.35. What is the estimated p-value?

- (A) 0.034
- (B) 0.076
- (C) 0.042
- (D) 0.924

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The observed p̂ is 0.15 above 0.50. For a two-sided alternative, count simulated values at least 0.15 from 0.50 on **either** side: at or above 0.65 and at or below 0.35. That gives 17 + 21 = 38, and 38 ÷ 500 = 0.076.

- (A) uses only the upper tail, 17 ÷ 500. That would be the p-value for Hₐ: p > 0.50.
- (C) uses only the lower tail, 21 ÷ 500, the side away from the observed value.
- (D) is the proportion of simulated values that are **less** extreme, (500 − 38) ÷ 500.
</details>

## Question 4 (calculation · core)

A test has H₀: p = 0.45, and the test statistic is z = 1.88.

(a) Find the p-value for each alternative: (i) Hₐ: p > 0.45, (ii) Hₐ: p < 0.45, (iii) Hₐ: p ≠ 0.45.
(b) Explain why the p-value in (ii) is so large.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)**

1. Hₐ: p > 0.45: P(Z ≥ 1.88) = normalcdf(1.88, 99, 0, 1) ≈ **0.0301**.
2. Hₐ: p < 0.45: P(Z ≤ 1.88) = normalcdf(−99, 1.88, 0, 1) ≈ **0.9699**.
3. Hₐ: p ≠ 0.45: P(Z ≤ −1.88) + P(Z ≥ 1.88) = 2 × 0.0301 ≈ **0.0601**.

**(b)** z = 1.88 means the sample proportion was **above** 0.45. A "less than" alternative counts results below 0.45 as evidence. A result above 0.45 gives no support to "less than", so almost the whole distribution is "at least as extreme" in that direction.

| Point | What earns it |
|---|---|
| 1 | Correct upper-tail p-value, 0.0301 |
| 1 | Correct lower-tail p-value 0.9699 **and** two-sided p-value 0.0601 |
| 1 | Explains that the sample result is on the opposite side of p₀ from Hₐ |

Answers from a standard normal table (0.0301, 0.9699, 0.0602) are acceptable.
</details>

## Question 5 (constructed response · core)

The fictional Bramwell Orchard says that 10% of its apples have skin blemishes. A buyer suspects the true proportion is higher. In a random sample of 60 apples, 11 have blemishes (p̂ ≈ 0.183). The hypotheses are H₀: p = 0.10 and Hₐ: p > 0.10.

The buyer simulates 200 random samples of 60 apples from a population with p = 0.10. The table shows how many blemished apples were in each simulated sample.

| Blemished apples in sample | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Number of simulated samples | 0 | 0 | 12 | 21 | 30 | 30 | 32 | 29 | 23 | 13 | 5 | 3 | 0 | 1 | 1 |

(a) Explain why the buyer used a simulation rather than a normal model.
(b) Estimate the p-value.
(c) Interpret the p-value in context.
(d) Do the data give convincing evidence that more than 10% of Bramwell apples have blemishes? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The normality condition is not met: np₀ = 60 × 0.10 = 6, which is less than 10. The null distribution is right-skewed, so a normal model would not be appropriate. A simulation does not need that condition.

**(b)** Hₐ is "greater than", so count simulated samples with **11 or more** blemished apples: 3 + 0 + 1 + 1 = 5. Estimated p-value = 5 ÷ 200 = **0.025**.

**(c)** Assuming the true proportion of Bramwell apples with blemishes is 0.10, there is about a 0.025 probability of getting 11 or more blemished apples (a sample proportion of about 0.183 or higher) in a random sample of 60 apples, by chance alone.

**(d)** Yes. A result this high happened in only about 2.5% of simulated samples when p = 0.10, so it would be unusual if the orchard's claim were true. The data give convincing evidence that the true proportion of blemished apples is greater than 0.10.

| Point | What earns it |
|---|---|
| 1 | Normality condition fails, with np₀ = 6 < 10 shown |
| 1 | Counts samples with 11 or more (5) and gives 5/200 = 0.025 |
| 1 | Interpretation includes the assumption p = 0.10, the probability, and "11 or more (or p̂ ≥ 0.183) in a random sample of 60" |
| 1 | Conclusion in context, linked to the small p-value |

Counting only samples with exactly 11 (giving 0.015) does not earn point 2. An interpretation without the assumption that p = 0.10 does not earn point 3.
</details>

## Question 6 (constructed response · core)

A transport authority says that 75% of buses on the fictional Route 12 run on time. A passenger group suspects the true proportion is lower. In a random sample of 80 Route 12 buses, 58 ran on time (p̂ = 0.725). For H₀: p = 0.75 and Hₐ: p < 0.75, the test statistic is z = −0.52 and the p-value is about 0.30.

(a) Interpret the p-value in context.
(b) A member of the group says: "The p-value is large, so this proves that 75% of Route 12 buses run on time." Explain what is wrong with this statement.
(c) Write a correct statement of what the data show.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Assuming the true proportion of Route 12 buses that run on time is 0.75, there is about a 0.30 probability of getting a sample proportion of 0.725 or lower in a random sample of 80 buses, by chance alone.

**(b)** A large p-value means that the sample result would not be unusual **if** H₀ were true. It does not show that H₀ **is** true. Many values of p, including some below 0.75, would also make a sample proportion of 0.725 quite likely. The test can fail to find evidence against the claim, but it can never prove the claim.

**(c)** The data do not give convincing evidence that fewer than 75% of Route 12 buses run on time.

| Point | What earns it |
|---|---|
| 1 | Interpretation with the assumption p = 0.75, the probability 0.30, and "0.725 or lower" in a sample of 80 |
| 1 | Explains that a large p-value is not evidence that H₀ is true |
| 1 | Correct non-definitive statement in context, in terms of Hₐ |

Statements such as "we accept H₀" or "the data show 75% run on time" do not earn point 3.
</details>

## Question 7 (explanation · stretch)

A researcher tests H₀: p = 0.40 against Hₐ: p > 0.40 using a random sample of 150. The sample proportion is p̂ = 0.36, and the test statistic is z = −1.00.

(a) Without any calculation, explain why the p-value must be greater than 0.5.
(b) Find the p-value.
(c) A classmate reports the p-value as 0.1587. Explain the classmate's error.
(d) Two other random samples of 150 from the same population, tested with the same hypotheses, give p-values of 0.004 and 0.09. Which sample gives more convincing evidence that p > 0.40? Explain.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** The sample proportion, 0.36, is **below** 0.40, but Hₐ says the proportion is above 0.40. "At least as extreme in the direction of Hₐ" means at or above z = −1.00, which includes everything above 0, more than half of the distribution.

**(b)** p-value = P(Z ≥ −1.00) = normalcdf(−1, 99, 0, 1) ≈ **0.8413**.

**(c)** 0.1587 is P(Z ≤ −1.00), the **lower** tail. The classmate used the tail that matches the sign of z instead of the direction of Hₐ.

**(d)** The sample with p-value **0.004**. A smaller p-value means the observed result would be rarer if p were 0.40. A result that would happen only 0.4% of the time under H₀ is more convincing evidence for Hₐ than one that would happen 9% of the time.

| Point | What earns it |
|---|---|
| 1 | (a) links p̂ < p₀ with an upper-tail alternative, so the area includes more than half the curve |
| 1 | (b) 0.8413 |
| 1 | (c) identifies the wrong (lower) tail |
| 1 | (d) chooses 0.004 **and** explains that a lower p-value is more convincing evidence for Hₐ |
</details>

## How did you do?

- **Q1 or Q6(a) wrong:** re-read "Interpreting a p-value in context" in the [study guide](/advanced-course-resources/statistics/3-6-p-values-study-guide/). Start with the assumption.
- **Q2, Q4 or Q7(b)–(c) wrong:** revisit "Which tail? The rule for each alternative" and Worked example 2(c).
- **Q3 or Q5(b) wrong:** work through Worked example 1 again. Count "at least as extreme", and use both tails for ≠.
- **Q6(b) or Q7(d) wrong:** revisit "What small and not-small p-values tell you".

Then tick off the [topic checklist](/advanced-course-resources/statistics/3-6-p-values-checklist/).
