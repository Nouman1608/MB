---
resourceId: "mb-ap-stats-2.12-practice"
title: "Sampling Distributions and the Central Limit Theorem: Practice Questions (Statistics 2.12)"
description: "Seven original Marlbridge practice questions on sampling distributions, simulation, randomization distributions and the central limit theorem, with worked solutions and suggested rubrics."
course: "statistics"
unit: 2
topics: ["2.12"]
resourceType: "practice-questions"
prerequisites:
  - "Describing a distribution by shape, centre and variability"
prerequisiteResources: ["mb-ap-stats-2.12-study-guide"]
learningObjectives:
  - "Distinguish the population distribution, the distribution of one sample and a sampling distribution"
  - "Build an exact sampling distribution for a small population"
  - "Describe and use simulated sampling and randomization distributions in context"
  - "Explain what the central limit theorem does and does not say"
skills: ["4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Simulation results are given; you do not need to run your own."
related: ["mb-ap-stats-2.12-study-guide", "mb-ap-stats-2.12-revision-notes", "mb-ap-stats-2.12-checklist"]
next: "mb-ap-stats-2.12-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every description of a distribution needs shape, centre and variability in context."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All contexts, data and simulation results are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: samples are random; "n" is the number of individuals in each sample; simulation results were produced with technology and are given to you.

## Question 1 (multiple choice · foundation)

An ecologist measures the heights of a random sample of 25 trees in a large fictional forest. The sample mean height is 14.2 m. Which of the following is the sampling distribution of the sample mean?

- (A) The distribution of the heights of the 25 trees in the sample.
- (B) The distribution of the heights of all the trees in the forest.
- (C) The distribution of the values of x̄ from all possible random samples of 25 trees from the forest.
- (D) A normal distribution centred at 14.2 m.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** A sampling distribution is the distribution of a **statistic** (here x̄) over all possible samples of the same size (25) from the same population (the forest).

- (A) is the distribution of one sample's data. Each value is one tree, not one sample mean.
- (B) is the population distribution of individual tree heights.
- (D) centres the distribution on one sample's result; the sampling distribution of x̄ is centred on the unknown population mean μ.
</details>

## Question 2 (multiple choice · core)

The lengths of calls to a fictional broadband company's support line are strongly skewed to the right. A manager takes many random samples of 60 calls and records the mean call length of each sample. Which statement best describes the sampling distribution of the sample mean?

- (A) It is strongly skewed to the right, like the population.
- (B) It shows that the 60 call lengths in each sample will be approximately normal.
- (C) It is exactly normal, because the sample size is large.
- (D) It is approximately normal, because each sample mean comes from a large random sample.

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** By the central limit theorem, the sampling distribution of the mean of a random sample is approximately normal, and the approximation is better for larger samples.

- (A) describes the population, not the distribution of sample means.
- (B) confuses the data in one sample with the sampling distribution. Each sample of 60 calls is still right-skewed.
- (C) overstates the CLT: the sampling distribution is **approximately** normal, not exactly normal.
</details>

## Question 3 (multiple choice · core)

The time a fictional warehouse robot takes to pick an order has mean 30 seconds and standard deviation 4.7 seconds. A student simulates 500 random samples of size 5 and records each sample mean. She then simulates 500 random samples of size 50 and does the same. Which result is most likely?

- (A) Both sets of means are centred near 30 s; the n = 5 means have standard deviation about 0.66 s and the n = 50 means about 2.10 s.
- (B) Both sets of means have standard deviation about 4.7 s, because the population standard deviation is 4.7 s.
- (C) Both sets of means are centred near 30 s; the n = 5 means have standard deviation about 2.10 s and the n = 50 means about 0.66 s.
- (D) The n = 50 means are centred much closer to 30 s, while the n = 5 means are centred well away from 30 s.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** For any sample size, the sample means are centred near the population mean. Larger samples give means that vary less, so the n = 50 means have the smaller standard deviation.

- (A) reverses the effect of sample size.
- (B) gives the variability of individual times, not of sample means.
- (D) is wrong because sample size changes the spread, not the centre.
</details>

## Question 4 (calculation · core)

A fictional tutorial group has 6 pupils. Exactly 2 of them are left-handed, so the population proportion of left-handers is p = 2/6 = 1/3. A teacher picks a random sample of 3 pupils (without replacement) and records p̂, the proportion of left-handers in the sample.

(a) How many different samples of 3 pupils are possible?
(b) Find the sampling distribution of p̂.
(c) Find P(p̂ ≥ 2/3).
(d) Find the mean of the sampling distribution and compare it with p.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The number of ways to choose 3 of 6 pupils is **20**.

**(b)** Count the samples by the number of left-handers:

- 0 left-handers: choose 3 of the 4 right-handers, 4 samples, so p̂ = 0.
- 1 left-hander: 2 choices of left-hander × 6 ways to choose 2 of the 4 right-handers = 12 samples, so p̂ = 1/3.
- 2 left-handers: both left-handers and 1 of 4 right-handers, 4 samples, so p̂ = 2/3.

Check: 4 + 12 + 4 = 20.

| p̂ | 0 | 1/3 | 2/3 |
|---|---|---|---|
| Probability | 4/20 = 0.2 | 12/20 = 0.6 | 4/20 = 0.2 |

**(c)** P(p̂ ≥ 2/3) = P(p̂ = 2/3) = **0.2**.

**(d)** Mean = 0(0.2) + (1/3)(0.6) + (2/3)(0.2) = 0.2 + 0.1333… = **1/3**. This equals p: the sampling distribution of p̂ is centred on the population proportion.

| Point | What earns it |
|---|---|
| 1 | 20 possible samples, with a method (listing or counting) |
| 1 | Correct values of p̂ with correct probabilities 0.2, 0.6, 0.2 |
| 1 | P(p̂ ≥ 2/3) = 0.2 |
| 1 | Mean = 1/3 with working, and the statement that it equals p |
</details>

## Question 5 (constructed response · core)

A fictional cinema chain claims that 70% of its customers buy snacks. A manager at one cinema takes a random sample of 50 customers; 31 buy snacks, so p̂ = 31 ÷ 50 = 0.62. To judge the claim, the manager simulates 200 random samples of 50 customers, assuming p = 0.70, and records p̂ for each. The results are:

| p̂ | 0.50 | 0.52 | 0.56 | 0.58 | 0.60 | 0.62 | 0.64 | 0.66 | 0.68 |
|---|---|---|---|---|---|---|---|---|---|
| Count | 1 | 1 | 1 | 6 | 2 | 13 | 22 | 21 | 18 |

| p̂ | 0.70 | 0.72 | 0.74 | 0.76 | 0.78 | 0.80 | 0.84 | 0.86 |
|---|---|---|---|---|---|---|---|---|
| Count | 35 | 25 | 16 | 10 | 13 | 8 | 7 | 1 |

(a) Describe how to carry out **one** trial of this simulation with a random number generator.
(b) Describe the simulated distribution of p̂.
(c) Is a sample proportion of 0.62 unusual if the claim is true? What should the manager conclude?
(d) How would the simulated distribution change if each sample had 200 customers instead of 50?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Generate 50 random integers from 1 to 100; 1–70 = buys snacks, 71–100 = does not. Count the snack buyers, divide by 50 to get p̂, and record it.

**(b)** The simulated distribution of p̂ is roughly **symmetric** and unimodal, **centred** near 0.70 (the most common value is 0.70, and the mean of the 200 values is 0.6986). The values **vary** from 0.50 to 0.86, with a standard deviation of about 0.063.

**(c)** Count the simulated values of 0.62 or less: 1 + 1 + 1 + 6 + 2 + 13 = **24** of 200, which is 0.12. About 12% of samples of 50 would give a proportion this low even if the claim were true, so 0.62 is **not unusual**. The manager does **not** have convincing evidence against the claim that 70% of customers buy snacks.

**(d)** It would still be centred near 0.70, but it would be **less spread out**, because larger samples give sample proportions that vary less from sample to sample.

| Point | What earns it |
|---|---|
| 1 | A complete trial: correct assignment of digits to outcomes, sample of 50, statistic recorded |
| 1 | Shape, centre and variability all described, in context |
| 1 | Counts 24 of 200 (0.12) and concludes "not unusual", so no convincing evidence against the claim |
| 1 | Same centre, smaller variability for n = 200 |

Counting only the values **equal to** 0.62 (13), or saying the claim is "proved true", does not earn point 3.
</details>

## Question 6 (constructed response · stretch)

In a fictional experiment, 12 seedlings were randomly assigned, 6 to a new fertiliser and 6 to no fertiliser. Growth over three weeks, in cm:

- Fertiliser: 9.5, 11.0, 8.0, 12.5, 10.0, 13.0 (mean 10.67 cm)
- No fertiliser: 7.5, 9.0, 6.0, 10.5, 8.0, 7.0 (mean 8.00 cm)

The observed difference in means (fertiliser − none) is 2.67 cm. A researcher carried out 500 random reallocations of the 12 growth values and recorded the difference in means each time:

| Difference (cm) | −3.5 to −2.5 | −2.5 to −1.5 | −1.5 to −0.5 | −0.5 to 0.5 | 0.5 to 1.5 | 1.5 to 2.5 | 2.5 to 3.5 |
|---|---|---|---|---|---|---|---|
| Count | 6 | 38 | 99 | 166 | 119 | 64 | 8 |

(Each interval includes its lower end but not its upper end.) Exactly 4 of the 500 differences were 2.67 cm or more.

(a) Describe how one reallocation is carried out.
(b) Describe the randomization distribution, and explain why it is centred where it is.
(c) What does the randomization distribution suggest about the fertiliser?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Write the 12 growth values on cards, shuffle, and deal 6 to "fertiliser" and 6 to "no fertiliser". Calculate (mean of the fertiliser group) − (mean of the no-fertiliser group) and record it.

**(b)** The distribution is roughly **symmetric** and unimodal, **centred** near 0 cm (the mean of the 500 differences is 0.08 cm). The differences **vary** from about −3.5 cm to about 3.2 cm, with standard deviation about 1.21 cm. It is centred near 0 because each reallocation keeps every seedling's growth the same and only moves the labels at random.

**(c)** Only 4 of 500 reallocations (0.008, or 0.8%) gave a difference of 2.67 cm or more. A difference as large as the observed one would be very unusual if the fertiliser had no effect. So the experiment gives strong evidence that the fertiliser increases growth for seedlings like these. Random assignment supports a cause-and-effect conclusion.

| Point | What earns it |
|---|---|
| 1 | Reallocation keeps the 12 observed values and the group sizes (6 and 6), assigns labels at random, records the difference in means |
| 1 | Shape, centre and variability described in context |
| 1 | Explains the centre near 0: random relabelling, as if the fertiliser had no effect |
| 1 | Uses 4 of 500 to call the observed difference unusual and links this to evidence that the fertiliser increases growth |

A reallocation that invents new growth values or changes the group sizes does not earn point 1.
</details>

## Question 7 (explanation · stretch)

House prices in a fictional town are strongly skewed to the right. Two students discuss a project.

- Student A: "I took a random sample of 100 house prices. Because n is large, the central limit theorem says my 100 prices will be approximately normal."
- Student B: "If I simulate 10,000 samples of size 20 instead of 1,000 samples of size 20, the sample means will be less spread out."

(a) Explain what is wrong with Student A's statement.
(b) Explain what is wrong with Student B's statement.
(c) What **would** make the sample means less spread out? Explain.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** The CLT is about the **sampling distribution of the sample mean**, not about the data in one sample. A random sample of 100 house prices will look like the population: strongly right-skewed. What is approximately normal is the distribution of x̄ over many samples of 100.

**(b)** The number of simulated samples (repetitions) does not change the spread of the sampling distribution. More repetitions give a smoother picture of the same distribution; each mean is still based on 20 houses, so the means vary by about the same amount.

**(c)** Increasing the **sample size n**, the number of houses in each sample. A mean of more houses averages out more of the variation between individual prices, so sample means vary less and are closer to the population mean more often.

| Point | What earns it |
|---|---|
| 1 | Student A: the CLT applies to the distribution of sample means; the sample data stay skewed |
| 1 | Student B: more repetitions give a clearer picture but do not reduce variability |
| 1 | Larger n reduces the variability of x̄, with a reason |
</details>

## How did you do?

- **Q1 or Q7(a) wrong:** re-read "Three different distributions" in the [study guide](/advanced-course-resources/statistics/2-12-sampling-distributions-central-limit-theorem-study-guide/).
- **Q2 wrong:** revisit "The central limit theorem" and Worked example 4.
- **Q3 or Q7(b–c) wrong:** revisit Worked examples 1 and 4: sample size changes the spread, not the centre.
- **Q4 wrong:** redo Worked example 1, listing every sample.
- **Q5 wrong:** revisit Worked example 2. Count values as extreme as or more extreme than the observed one.
- **Q6 wrong:** revisit "Randomization distributions for experiments" and Worked example 3.

Then tick off the [topic checklist](/advanced-course-resources/statistics/2-12-sampling-distributions-central-limit-theorem-checklist/).
