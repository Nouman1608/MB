---
resourceId: "mb-ap-stats-4.1-practice"
title: "Sampling Distributions for Sample Means: Practice Questions (Statistics 4.1)"
description: "Seven original Marlbridge practice questions on the mean, standard deviation and shape of the sampling distribution of x̄, its conditions and normal probabilities, with worked solutions and rubrics."
course: "statistics"
unit: 4
topics: ["4.1"]
resourceType: "practice-questions"
prerequisites:
  - "Normal probabilities with z-scores (Topic 2.11)"
prerequisiteResources: ["mb-ap-stats-4.1-study-guide"]
learningObjectives:
  - "Calculate the mean and standard deviation of the sampling distribution of x̄"
  - "Check the randomization, 10% and normal-shape conditions in context"
  - "Calculate and interpret normal probabilities and cut-off values for a sample mean"
  - "Use a probability about x̄ to judge whether a claimed population mean is believable"
skills: ["3", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Use normalcdf and invNorm, or a z-table. Keep 4 decimal places for σx̄ and z, and round probabilities to 4 decimal places."
related: ["mb-ap-stats-4.1-study-guide", "mb-ap-stats-4.1-revision-notes", "mb-ap-stats-4.1-checklist"]
next: "mb-ap-stats-4.1-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "State the conditions with numbers and context before any normal calculation."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All contexts and data are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: μ and σ are population values; x̄ is the mean of a sample of size n; σx̄ = σ/√n; keep 4 decimal places in working and round probabilities to 4 decimal places. A graphing calculator is assumed.

## Question 1 (multiple choice · foundation)

A machine fills bags of cement. The fill masses have mean 25.0 kg and standard deviation 0.4 kg. A quality team takes a random sample of 16 bags from a day's output of 3,000 bags. What is the standard deviation of the sampling distribution of the sample mean?

- (A) 0.025 kg
- (B) 0.1 kg
- (C) 0.1033 kg
- (D) 0.4 kg

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** σx̄ = σ/√n = 0.4/√16 = 0.4/4 = 0.1 kg. The 10% condition holds (16 ≤ 300), so the formula is accurate.

- (A) divides by n = 16 instead of √16.
- (C) divides by √15, mixing up σ/√n with the n − 1 used in a sample standard deviation.
- (D) is the standard deviation of **one** bag, not of the mean of 16 bags.
</details>

## Question 2 (multiple choice · core)

The late-payment fees paid by customers of a fictional phone company are strongly skewed to the right. An analyst takes a random sample of 12 customers who paid a fee. Which statement about the sampling distribution of the sample mean fee is correct?

- (A) It is approximately normal, because the sample was selected at random.
- (B) It is approximately normal by the central limit theorem, because n is more than 10.
- (C) It is centred at the population mean but is likely to be skewed to the right, so a normal model should not be used.
- (D) Its standard deviation equals the population standard deviation, because n is less than 30.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** μx̄ = μ for any n, so the centre is right. But the population is strongly skewed and n = 12 < 30, so the sampling distribution keeps some of the right skew. A normal model is not justified.

- (A) confuses the randomization condition (independence, no bias) with the shape condition.
- (B) borrows the number 10 from the large-counts condition for proportions, which is about expected counts, not n. For means, the guideline is n ≥ 30, and strong skew may need more.
- (D) is false: σx̄ = σ/√12 whatever the shape. The n ≥ 30 guideline is about shape, not about the standard deviation.
</details>

## Question 3 (multiple choice · core)

For random samples of 20 plants, the sample mean height has standard deviation 4.5 cm. The researcher wants a standard deviation of 1.5 cm for the sample mean. Which sample size is needed?

- (A) 60
- (B) 80
- (C) 180
- (D) 400

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** To divide σx̄ by 3, multiply √n by 3, so multiply n by 3² = 9: 20 × 9 = 180. Check: σ = 4.5 × √20 ≈ 20.1246 cm and 20.1246/√180 = 1.5 cm.

- (A) multiplies n by 3, which only divides σx̄ by √3 (giving about 2.60 cm).
- (B) multiplies n by 4, which halves σx̄ (2.25 cm), but a third is needed.
- (D) squares n. It gives about 1.01 cm, smaller than needed.
</details>

## Question 4 (calculation · core)

In a fictional seed trial, the heights of the 900 sunflower plants in one plot are approximately normal with mean 168 cm and standard deviation 14 cm. A student measures a random sample of 5 plants.

(a) Find the probability that the mean height of the 5 plants is more than 175 cm.
(b) Find the probability that one randomly chosen plant is more than 175 cm tall, and explain why the two answers differ.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Conditions: random sample; 5 ≤ 10% of 900 = 90; the population is normal, so x̄ is normal even with n = 5.

σx̄ = 14/√5 ≈ 6.2610 cm. z = (175 − 168)/6.2610 ≈ 1.1180. P(x̄ > 175) ≈ **0.1318**.

**(b)** z = (175 − 168)/14 = 0.5. P(X > 175) ≈ **0.3085**.

A sample mean varies less than one plant's height (6.26 cm against 14 cm), so a mean far above 168 cm is less likely than a single tall plant. Tall and short plants in the sample partly cancel out.

| Point | What earns it |
|---|---|
| 1 | Conditions, including normal population as the reason a normal model works with n = 5 |
| 1 | σx̄ = 14/√5 and P(x̄ > 175) ≈ 0.1318 |
| 1 | P(X > 175) ≈ 0.3085 and an explanation based on the smaller variability of x̄ |
</details>

## Question 5 (constructed response · core)

The times visitors spend in the fictional Harrow Valley Museum are skewed to the right, with mean 94 minutes and standard deviation 38 minutes. Last month the museum had 6,000 visitors. The manager selects a random sample of 45 of them.

(a) Describe the shape, centre and variability of the sampling distribution of x̄, the sample mean visit time. Justify the shape.
(b) Find the probability that the sample mean time is less than 85 minutes.
(c) Interpret your answer to (b) in context.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Centre: μx̄ = **94 minutes**. Variability: σx̄ = 38/√45 ≈ **5.6647 minutes**, which is accurate because the sample is random and 45 ≤ 10% of 6,000 = 600. Shape: the population is skewed, but n = 45 ≥ 30, so by the central limit theorem the sampling distribution is **approximately normal**.

**(b)** z = (85 − 94)/5.6647 ≈ −1.5888. P(x̄ < 85) ≈ **0.0561**.

**(c)** If the manager took many random samples of 45 visitors from last month, about 5.6% of the samples would have a mean visit time of less than 85 minutes.

| Point | What earns it |
|---|---|
| 1 | Mean 94 min and σx̄ ≈ 5.66 min, with the 10% check |
| 1 | Approximately normal **because** n = 45 ≥ 30 (not because the population is normal) |
| 1 | Correct z and P(x̄ < 85) ≈ 0.0561 |
| 1 | Interpretation that refers to repeated random samples of 45 visitors and sample **mean** times |

Using σ = 38 instead of σx̄ gives about 0.4064; this does not earn point 3.
</details>

## Question 6 (constructed response · stretch)

Four researchers plan to use a normal model with σx̄ = σ/√n for a sample mean.

| Plan | Population and sample |
|---|---|
| A | Heights of the 5,000 pine seedlings in a nursery, approximately normal with μ = 42 cm and σ = 7.2 cm. Random sample of 20 seedlings. |
| B | Commute times of the 400 employees of a firm (shape unknown). Random sample of 60 employees. |
| C | Amounts spent by shoppers at a market stall. The first 35 shoppers on Monday morning. |
| D | Monthly electricity bills of 10,000 households, strongly skewed to the right. Random sample of 15 households. |

(a) For each plan, say whether the normal model with σ/√n is appropriate. If not, name the condition that fails and explain why it matters.
(b) For Plan A, find P(x̄ > 45 cm).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)**

- **Plan A: appropriate.** Random sample; 20 ≤ 10% of 5,000 = 500; the population is normal, so x̄ is normal for any n.
- **Plan B: 10% condition fails.** 60 > 10% of 400 = 40. Sampling a large fraction of a population without replacement makes the values dependent, and σ/√60 would overstate the variability of x̄. (n = 60 ≥ 30 would be fine for the shape.)
- **Plan C: randomization condition fails.** The first 35 shoppers are a convenience sample. Early shoppers may spend differently from others, so x̄ could be biased, and the probability model does not apply.
- **Plan D: normal-shape condition fails.** The population is strongly skewed and n = 15 < 30, so x̄ will still be skewed and normal probabilities would be unreliable.

**(b)** σx̄ = 7.2/√20 ≈ 1.6100 cm. z = (45 − 42)/1.6100 ≈ 1.8634. P(x̄ > 45) ≈ **0.0312**.

| Point | What earns it |
|---|---|
| 1 | Plan A appropriate, with all three conditions checked |
| 1 | Plan B: 10% fails, with 60 > 40 shown |
| 1 | Plans C and D: randomization fails for C; shape fails for D, citing skew **and** n < 30 |
| 1 | Plan A probability ≈ 0.0312 with σx̄ = 7.2/√20 |
</details>

## Question 7 (explanation · stretch)

A fictional council says its online permit form takes a mean of 12.0 minutes to complete, with standard deviation 4.5 minutes. The shape of the distribution of completion times is unknown. A researcher selects a random sample of 36 of the 20,000 people who used the form last month. Their mean completion time is 13.6 minutes.

(a) Assuming the council's figures are correct, describe the sampling distribution of x̄ for samples of 36 users, with conditions.
(b) Find P(x̄ ≥ 13.6) and interpret it.
(c) Does the sample give reason to doubt the council's mean of 12.0 minutes? Explain.
(d) Above what value would only 5% of sample means lie, if the council is correct?

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** μx̄ = 12.0 minutes, σx̄ = 4.5/√36 = **0.75 minutes**. Random sample; 36 ≤ 10% of 20,000 = 2,000; the population shape is unknown but n = 36 ≥ 30, so the sampling distribution is approximately normal.

**(b)** z = (13.6 − 12.0)/0.75 ≈ 2.1333. P(x̄ ≥ 13.6) ≈ **0.0164**. If the true mean is 12.0 minutes, only about 1.6% of random samples of 36 users would have a mean completion time of 13.6 minutes or more.

**(c)** Yes. A sample mean this large would be unusual (probability about 0.0164) if the council's figure were right. This gives some reason to think the true mean completion time is more than 12.0 minutes. It is not proof: unusual samples do happen. (A formal test comes in Topics 4.4 and 4.5.)

**(d)** invNorm(0.95) ≈ 1.6449. Cut-off = 12.0 + 1.6449 × 0.75 ≈ **13.23 minutes**.

| Point | What earns it |
|---|---|
| 1 | Mean, σx̄ = 0.75 and approximate normality justified by n ≥ 30, with the 10% check |
| 1 | P ≈ 0.0164 with an interpretation about repeated samples of 36 users, assuming μ = 12.0 |
| 1 | Conclusion that the result casts doubt on the claim, linked to the small probability, without claiming proof |
| 1 | Cut-off ≈ 13.23 minutes |
</details>

## How did you do?

- **Q1 or Q3 wrong:** revisit "Mean and standard deviation of x̄" in the [study guide](/advanced-course-resources/statistics/4-1-sampling-distributions-sample-means-study-guide/). Divide σ by √n, and remember the square-root law.
- **Q2 or Q6 wrong:** revisit "The conditions". Each condition has a different job.
- **Q4 wrong:** work through Worked example 1 again, comparing one value with a mean.
- **Q5 or Q7 wrong:** work through Worked example 2 and "Interpreting results in context".

Then tick off the [topic checklist](/advanced-course-resources/statistics/4-1-sampling-distributions-sample-means-checklist/).
