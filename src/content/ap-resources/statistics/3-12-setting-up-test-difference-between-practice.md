---
resourceId: "mb-ap-stats-3.12-practice"
title: "Setting Up a Test for the Difference Between Two Population Proportions: Practice Questions (Statistics 3.12)"
description: "Seven original Marlbridge practice questions on choosing the two-sample z-test for p₁ − p₂, defining parameters, writing hypotheses and checking conditions, with worked solutions and suggested rubrics."
course: "statistics"
unit: 3
topics: ["3.12"]
resourceType: "practice-questions"
prerequisites:
  - "Setting up a one-sample z-test for a proportion (Topic 3.5)"
prerequisiteResources: ["mb-ap-stats-3.12-study-guide"]
learningObjectives:
  - "Identify the two-sample z-test for p₁ − p₂ and define its parameters in context"
  - "Write correct null and alternative hypotheses from the wording of a question"
  - "Calculate the pooled proportion and check all three conditions with numbers"
  - "Find and correct errors in a test set-up"
skills: ["2", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Give the pooled proportion to 4 decimal places and condition counts to 1 decimal place."
related: ["mb-ap-stats-3.12-study-guide", "mb-ap-stats-3.12-revision-notes", "mb-ap-stats-3.12-checklist"]
next: "mb-ap-stats-3.12-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every parameter definition names the response and the population or treatment."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All contexts and data are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: the pooled proportion is p̂c = (x₁ + x₂)/(n₁ + n₂); the normality condition requires n₁p̂c, n₁(1 − p̂c), n₂p̂c and n₂(1 − p̂c) all to be at least 10; the 10% condition applies only when sampling without replacement. A calculator is useful for the arithmetic.

## Question 1 (multiple choice · foundation)

A fictional county council wants to know whether the proportion of households with a vegetable garden is higher in its rural areas than in its towns. It takes an independent random sample of households from each. Which procedure should it use?

- (A) One-sample z-interval for a population proportion
- (B) One-sample z-test for a population proportion
- (C) Two-sample z-interval for a difference between population proportions
- (D) Two-sample z-test for the difference between two population proportions

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** There are two populations (rural and town households), a yes/no response, and the question asks for evidence that one proportion is **higher**, which calls for a test.

- (A) and (B) handle a single population, but this question compares two.
- (C) would estimate the size of the difference. The council's question asks whether there is evidence of a difference in a stated direction, which is a test. (An interval could support a conclusion, as in Topic 3.11, but the question is phrased as a test.)
</details>

## Question 2 (multiple choice · core)

A fictional phone maker randomly assigns phones to have either a new screen coating or the old coating, then drops each phone from the same height. It wants to know whether the new coating **reduces** the proportion of screens that crack. Let p_N and p_O be the true proportions of phones like these that would crack with the new and old coatings. Which hypotheses are correct?

- (A) H₀: p_N = p_O; Hₐ: p_N < p_O
- (B) H₀: p̂_N = p̂_O; Hₐ: p̂_N < p̂_O
- (C) H₀: p_N = p_O; Hₐ: p_N ≠ p_O
- (D) H₀: p_N < p_O; Hₐ: p_N = p_O

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** H₀ states no difference. "Reduces" means the new coating's crack proportion is lower, so Hₐ: p_N < p_O (equivalently p_N − p_O < 0).

- (B) uses sample proportions. Hypotheses are about the true proportions.
- (C) is two-sided, but the question names a direction ("reduces").
- (D) swaps the roles. The null hypothesis is always the statement of no difference.
</details>

## Question 3 (multiple choice · core)

Two fictional plant nurseries are compared. In a random sample of 80 seedlings from Nursery 1, 12 have a leaf disease; in an independent random sample of 120 seedlings from Nursery 2, 6 do. A test of H₀: p₁ = p₂ is planned. Which statement about the normality condition is correct?

- (A) It is met: p̂c = 0.09, and n₁p̂c, n₁(1 − p̂c), n₂p̂c and n₂(1 − p̂c) are all at least 10.
- (B) It is not met: p̂c = 0.09, so n₁p̂c = 7.2, which is less than 10.
- (C) It is met, because the total number of seedlings with the disease, 18, is at least 10.
- (D) It is met, because both samples have more than 30 seedlings.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** p̂c = (12 + 6) ÷ (80 + 120) = 18 ÷ 200 = 0.09. The four counts are 80 × 0.09 = 7.2, 80 × 0.91 = 72.8, 120 × 0.09 = 10.8 and 120 × 0.91 = 109.2. One count, 7.2, is below 10, so the condition fails.

- (A) has the right p̂c but misses that n₁p̂c = 7.2 is below 10. All four counts must be checked.
- (C) checks a combined total. The condition applies to each group separately.
- (D) uses "n ≥ 30", which is not the condition for proportions.
</details>

## Question 4 (calculation · core)

Two fictional online stores compare product returns. Store K processes about 30,000 orders a year and Store L about 45,000. Independent random samples of last year's orders show that 44 of 400 Store K orders and 40 of 500 Store L orders were returned. The question is: *Is the proportion of orders returned higher at Store K than at Store L?*

Define the parameters, write the hypotheses and check all three conditions for an appropriate test.

<details>
<summary>Worked solution</summary>

**Parameters.** p_K = the true proportion of all last year's Store K orders that were returned; p_L = the true proportion of all last year's Store L orders that were returned.

**Hypotheses.** H₀: p_K = p_L; Hₐ: p_K > p_L (or H₀: p_K − p_L = 0; Hₐ: p_K − p_L > 0).

**Conditions.**

1. Randomization: independent random samples of orders from each store.
2. 10%: 400 ≤ 10% of 30,000 = 3,000 and 500 ≤ 10% of 45,000 = 4,500.
3. Normality: p̂c = (44 + 40) ÷ (400 + 500) = 84 ÷ 900 ≈ 0.0933. Counts: 400 × 0.0933 ≈ 37.3, 400 × 0.9067 ≈ 362.7, 500 × 0.0933 ≈ 46.7 and 500 × 0.9067 ≈ 453.3. All at least 10.

A two-sample z-test for the difference between two population proportions is appropriate.

Suggested mark points (3): 1 for both parameters defined in context; 1 for correct one-sided hypotheses about p_K and p_L; 1 for all three conditions checked with numbers, including p̂c ≈ 0.0933 and the four counts.
</details>

## Question 5 (constructed response · core)

A fictional hotel chain tests two messages on cards that ask guests to reuse their towels. It randomly assigns 300 guest rooms, 150 to Message X and 150 to Message Y. Towels were reused in 81 Message X rooms and 63 Message Y rooms. The manager asks: *Does the message affect the proportion of rooms in which towels are reused?*

(a) Name the appropriate procedure and define the parameters.
(b) State the hypotheses.
(c) Check the conditions.
(d) Explain why the 10% condition is not needed here.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Two-sample z-test for the difference between two population proportions. p_X = the true proportion of rooms like these in which towels would be reused with Message X; p_Y = the true proportion with Message Y.

**(b)** H₀: p_X − p_Y = 0; Hₐ: p_X − p_Y ≠ 0. "Affect" gives no direction, so the test is two-sided.

**(c)** Randomization: the messages were randomly assigned to rooms. Normality: p̂c = (81 + 63) ÷ 300 = 144 ÷ 300 = 0.48. Each group has n = 150, so the counts are 150 × 0.48 = 72 and 150 × 0.52 = 78 in each group, all at least 10.

**(d)** The 10% condition protects independence when you sample without replacement from a finite population. Here the rooms were not sampled from a population; the treatments were randomly assigned, and random assignment is what the inference relies on.

| Point | What earns it |
|---|---|
| 1 | Procedure named in full, and both parameters defined with the response and the treatment |
| 1 | H₀ of no difference and a two-sided Hₐ, justified by "affect" |
| 1 | Random assignment stated and p̂c = 0.48 with all four counts (72, 78, 72, 78) checked |
| 1 | Explains that the 10% condition is for sampling without replacement, and this is a randomized experiment |

Do not award point 2 for a one-sided Hₐ chosen because p̂_X = 0.54 is larger than p̂_Y = 0.42.
</details>

## Question 6 (constructed response · stretch)

Two fictional cities, Rendle (about 60,000 households) and Stowford (about 75,000 households), are compared. Independent random samples found that 63 of 180 Rendle households and 55 of 220 Stowford households own a dog. The question is: *Is there a difference between the two cities in the proportion of households that own a dog?* A student wrote this set-up:

> "Two-sample z-interval. p̂_R = proportion of the 180 sampled Rendle households that own a dog; p̂_S = proportion of the 220 sampled Stowford households that own a dog. H₀: p̂_R = p̂_S; Hₐ: p̂_R > p̂_S, because 0.35 > 0.25. Conditions: random samples, and both samples are bigger than 30, so the distribution is normal."

(a) Identify **four** errors in the student's set-up.
(b) Write a correct set-up: procedure, parameters, hypotheses and conditions.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Errors (any four):

1. The procedure is an **interval**, but the question asks whether there is a difference, which calls for a **test**.
2. The parameters are defined as **sample** proportions; they should be the true proportions of all households in each city.
3. The hypotheses use **p̂** instead of p.
4. The direction of Hₐ is chosen **from the data** (0.35 > 0.25). The question asks about "a difference", so Hₐ should be two-sided.
5. The **10% condition** is not checked.
6. "Bigger than 30" is **not** the normality condition for proportions; the four pooled counts must be checked.

**(b)** Two-sample z-test for the difference between two population proportions. p_R = the true proportion of all Rendle households that own a dog; p_S = the true proportion of all Stowford households that own a dog. H₀: p_R = p_S; Hₐ: p_R ≠ p_S.

Conditions: independent random samples from each city. 180 ≤ 10% of 60,000 = 6,000 and 220 ≤ 10% of 75,000 = 7,500. p̂c = (63 + 55) ÷ 400 = 118 ÷ 400 = 0.295; counts 180 × 0.295 = 53.1, 180 × 0.705 = 126.9, 220 × 0.295 = 64.9 and 220 × 0.705 = 155.1, all at least 10.

| Point | What earns it |
|---|---|
| 1 | Two correct errors identified with a reason |
| 1 | Two more correct errors identified with a reason |
| 1 | Correct procedure, parameters in context and two-sided hypotheses about p_R and p_S |
| 1 | All three conditions checked with numbers, including p̂c = 0.295 and the four counts |
</details>

## Question 7 (explanation · stretch)

(a) Explain why the normality condition for a two-sample z-test uses the pooled proportion p̂c, while the condition for a two-sample z-interval uses p̂₁ and p̂₂.
(b) A researcher takes a random sample of 50 of the 300 teachers in a fictional district and a random sample of 50 of the 900 nurses in the same district, to compare the proportions who cycle to work. Which condition fails, and why does it matter?
(c) A survey of 100 fictional married couples asks each husband and each wife whether they voted in a local election. Explain why a two-sample z-test is not appropriate for comparing the proportions of husbands and wives who voted.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** The test is carried out assuming H₀ is true, so p₁ = p₂: both groups share one proportion, and the best estimate of it combines both samples. The interval makes no assumption about p₁ and p₂, so each group's own sample proportion is used.

**(b)** The 10% condition fails for the teachers: 50 is more than 10% of 300 (that is, 30); the sample is about 16.7% of the population. When you sample this large a fraction without replacement, the observations are not close enough to independent, and the usual standard error overstates the variability. (For the nurses, 50 ≤ 90, so that sample is fine.)

**(c)** The two samples are not independent. Each husband is paired with his wife, and couples' voting behaviour is likely to be linked. The two-sample z-test requires two independent random samples (or a randomized experiment), so it is not appropriate.

| Point | What earns it |
|---|---|
| 1 | Links pooling to assuming H₀: p₁ = p₂ is true, and says the interval makes no such assumption |
| 1 | Identifies the 10% condition for teachers (50 > 30) with a reason about independence |
| 1 | Explains that paired husband–wife responses are not independent samples |
</details>

## How did you do?

- **Q1 wrong:** re-read "When the question compares two proportions" in the [study guide](/advanced-course-resources/statistics/3-12-setting-up-test-difference-between-study-guide/).
- **Q2 or Q6 hypotheses wrong:** revisit "Writing the hypotheses" and Figure 1.
- **Q3 or Q4 conditions wrong:** revisit "The pooled proportion", "The three conditions" and Worked example 1.
- **Q5 wrong:** work through Worked example 2, the randomized experiment.
- **Q7 wrong:** revisit Worked example 3 and the FAQ on pooling.

Then tick off the [topic checklist](/advanced-course-resources/statistics/3-12-setting-up-test-difference-between-checklist/).
