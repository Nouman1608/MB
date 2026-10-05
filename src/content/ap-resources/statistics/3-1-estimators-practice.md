---
resourceId: "mb-ap-stats-3.1-practice"
title: "Estimators: Practice Questions (Statistics 3.1)"
description: "Seven original Marlbridge practice questions on point estimates, notation and unbiased estimators, using listed samples and simulation results, with worked solutions and suggested rubrics."
course: "statistics"
unit: 3
topics: ["3.1"]
resourceType: "practice-questions"
prerequisites:
  - "Calculating a mean, median and sample standard deviation"
prerequisiteResources: ["mb-ap-stats-3.1-study-guide"]
learningObjectives:
  - "Calculate point estimates and name the parameter each estimates, in context"
  - "Use correct notation for parameters and statistics"
  - "Justify whether an estimator is unbiased from a complete list of samples or from simulation results"
  - "Explain the difference between estimator bias, sampling bias and sampling variability"
skills: ["3", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Use Sx (n − 1) for the sample standard deviation. Round final answers to 2 decimal places unless told otherwise."
related: ["mb-ap-stats-3.1-study-guide", "mb-ap-stats-3.1-revision-notes", "mb-ap-stats-3.1-checklist"]
next: "mb-ap-stats-3.1-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Bias questions need a comparison between the centre of a sampling distribution and the parameter."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All data sets, organisations and places are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: s means the **sample** standard deviation (divide by n − 1; Sx on a calculator); "random sample" means a simple random sample; round final answers to 2 decimal places unless stated. A graphing calculator is assumed.

## Question 1 (multiple choice · foundation)

The fictional airline Skyrell operated 12,000 flights last year. An analyst selects a random sample of 400 of these flights and finds that 52 arrived more than 15 minutes late. Which statement is correct?

- (A) The parameter is 0.13, the proportion of the 400 sampled flights that were late.
- (B) p̂ = 0.13 is a point estimate of p, the proportion of all 12,000 flights last year that were late.
- (C) p = 0.13 is the proportion of all 12,000 flights last year that were late.
- (D) The point estimate is 52, and it estimates the number of late flights in the sample.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** p̂ = 52 ÷ 400 = 0.13 is a statistic calculated from the sample. It estimates the parameter p, which describes all 12,000 flights.

- (A) calls a sample value a parameter. A value calculated from the 400 sampled flights is a statistic.
- (C) claims the population proportion is known to be 0.13. We only have an estimate; p itself is unknown and is very unlikely to equal 0.13 exactly.
- (D) gives a count, not a proportion, and "the number of late flights in the sample" is already known exactly (52), so nothing is being estimated.
</details>

## Question 2 (multiple choice · foundation)

An estimator is described as **unbiased**. Which statement must be true?

- (A) Every random sample gives an estimate equal to the parameter.
- (B) The mean of the estimator's sampling distribution equals the parameter.
- (C) The estimator's sampling distribution has a small standard deviation.
- (D) Because it is unbiased, it gives an accurate estimate even from a voluntary-response sample.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Unbiased means that, over all possible samples, the estimates average out to the parameter: no tendency to overestimate or underestimate.

- (A) confuses "unbiased" with "exact". Individual estimates still vary and usually miss the parameter.
- (C) describes low variability, which is a different property. An unbiased estimator can have a large standard deviation.
- (D) ignores the sampling method. Unbiasedness assumes random sampling; a voluntary-response sample is biased however the estimate is calculated.
</details>

## Question 3 (multiple choice · core)

A researcher knows that a fictional population has mean μ = 40. She simulates 500 random samples of size 15 and calculates three different estimators of μ for each sample. Her results are:

| Estimator | Mean of the 500 simulated values | Standard deviation of the 500 simulated values |
|---|---|---|
| R | 40.1 | 2.9 |
| S | 36.8 | 1.5 |
| T | 39.9 | 5.2 |

Which estimators appear to be unbiased?

- (A) R only
- (B) S only
- (C) R and T only
- (D) R, S and T

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** R and T both have simulated sampling distributions centred very close to 40 (40.1 and 39.9). Differences of 0.1 are what chance variation in a simulation would produce. S is centred at 36.8, well below 40, so S is biased and tends to underestimate μ.

- (A) rejects T because of its large standard deviation. Spread is variability, not bias. T is unbiased but imprecise.
- (B) chooses S because it has the smallest standard deviation. S is the most precise, but it is precise around the wrong value.
- (D) treats S as unbiased. A centre 3.2 below the parameter is a consistent underestimate, not chance.
</details>

## Question 4 (calculation · core)

A fictional battery factory takes a random sample of 8 batteries from one day's production and records each battery's lifetime, in hours:

31.5, 28.0, 33.2, 29.4, 30.8, 35.1, 27.6, 32.4

(a) Calculate point estimates of the mean lifetime and the standard deviation of lifetimes for that day's production.
(b) Calculate a point estimate of the proportion of that day's batteries that last more than 30 hours.
(c) Use correct notation to name the parameter each estimate in (a) and (b) estimates.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Sum = 248.0, so x̄ = 248.0 ÷ 8 = **31.00 hours**. Deviations from 31.0: 0.5, −3.0, 2.2, −1.6, −0.2, 4.1, −3.4, 1.4. Squares add to 47.02. s² = 47.02 ÷ 7 = 6.7171…, so s = **2.59 hours**.

**(b)** Five batteries last more than 30 hours (31.5, 33.2, 30.8, 35.1, 32.4). p̂ = 5 ÷ 8 = **0.625**.

**(c)** x̄ = 31.00 h estimates **μ**, the mean lifetime of all batteries made that day. s = 2.59 h estimates **σ**, the standard deviation of the lifetimes of all batteries made that day. p̂ = 0.625 estimates **p**, the proportion of all batteries made that day that last more than 30 hours.

| Point | What earns it |
|---|---|
| 1 | x̄ = 31.00 h and s = 2.59 h (dividing by n − 1 = 7) |
| 1 | p̂ = 0.625 with the count 5 out of 8 shown |
| 1 | Correct symbols μ, σ and p, each described as a value for **all** of that day's batteries |

Dividing by 8 instead of 7 gives 2.42 h; this does not earn point 1.
</details>

## Question 5 (constructed response · core)

A fictional courier firm owns 4 vans, aged 1, 4, 6 and 9 years. An inspector chooses a random sample of 2 vans (without replacement).

(a) List all possible samples of size 2. For each, give the sample mean age and the sample minimum age.
(b) Use your list to show that the sample mean is an unbiased estimator of the population mean age.
(c) Is the sample minimum an unbiased estimator of the population minimum age? Justify your answer, including the direction of any bias.
(d) The inspector suggests using samples of 3 vans instead. Does this remove the bias in (c)? Show your reasoning.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** There are 6 equally likely samples.

| Sample | {1,4} | {1,6} | {1,9} | {4,6} | {4,9} | {6,9} |
|---|---|---|---|---|---|---|
| Sample mean | 2.5 | 3.5 | 5 | 5 | 6.5 | 7.5 |
| Sample minimum | 1 | 1 | 1 | 4 | 4 | 6 |

**(b)** Population mean μ = (1 + 4 + 6 + 9) ÷ 4 = 5 years. The six sample means add to 30, so their mean is 30 ÷ 6 = 5 years, which equals μ. The sampling distribution of the sample mean is centred on the parameter, so the sample mean is unbiased.

**(c)** No. The population minimum is 1 year. The six sample minima add to 17, so their mean is 17 ÷ 6 ≈ 2.83 years, which is greater than 1. The sample minimum can never be below 1 and is above 1 in half the samples, so it is biased and tends to **overestimate** the population minimum.

**(d)** No. The four samples of size 3 are {1,4,6}, {1,4,9}, {1,6,9} and {4,6,9}, with minima 1, 1, 1 and 4. Their mean is 7 ÷ 4 = 1.75 years, still greater than 1. The bias is smaller, but the estimator is still biased upwards.

| Point | What earns it |
|---|---|
| 1 | All 6 samples listed with correct means and minima |
| 1 | Mean of sample means = 5 compared with μ = 5, with the conclusion "unbiased" |
| 1 | Mean of sample minima ≈ 2.83 compared with 1, concluding biased **and** overestimates |
| 1 | Samples of 3 give mean minimum 1.75 > 1, so still biased (bias reduced but not removed) |

A response that says "biased because one sample minimum is 6" does not earn point 3: bias is about the centre of the whole sampling distribution.
</details>

## Question 6 (constructed response · stretch)

A fictional market-research company estimates proportions from random samples of n = 20 people. Instead of p̂ = X / 20, where X is the number of "yes" answers, it uses the **adjusted estimator** A = (X + 2) / 24.

From Topic 2.10, X has a binomial distribution with mean np. Adding a constant to every value adds it to the mean, and dividing every value by a constant divides the mean by it (Topic 1.7).

(a) Suppose the population proportion is p = 0.10. Find the mean of the sampling distribution of p̂ and of A.
(b) Is A an unbiased estimator of p when p = 0.10? Justify your answer and give the direction of any bias.
(c) Show that A is unbiased when p = 0.50, and explain why this does not make A an unbiased estimator in general.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The mean of X is np = 20 × 0.10 = 2. So the mean of p̂ is 2 ÷ 20 = **0.10**, and the mean of A is (2 + 2) ÷ 24 = 4 ÷ 24 ≈ **0.1667**.

**(b)** No. The mean of A's sampling distribution (0.1667) is greater than the parameter (0.10), so A is biased and tends to **overestimate** p when p = 0.10. (By contrast, p̂ has mean 0.10 = p, so p̂ is unbiased.)

**(c)** If p = 0.50, the mean of X is 10, so the mean of A is (10 + 2) ÷ 24 = 12 ÷ 24 = 0.50 = p. But an unbiased estimator must average to the parameter **whatever** the parameter's value. For p = 0.80, for example, the mean of X is 16 and the mean of A is 18 ÷ 24 = 0.75, below 0.80. A pulls estimates towards 0.5, so it is biased for every p except 0.50.

| Point | What earns it |
|---|---|
| 1 | Mean of X = 2, mean of p̂ = 0.10 and mean of A ≈ 0.1667 |
| 1 | Compares 0.1667 with p = 0.10 and concludes biased, overestimates |
| 1 | Shows A has mean 0.50 when p = 0.50 |
| 1 | Explains unbiasedness must hold for all values of p, with a counter-example or the "pulled towards 0.5" argument |
</details>

## Question 7 (explanation · stretch)

A fictional local radio station asked listeners to text "yes" or "no" to the question "Should the town centre be closed to cars on Saturdays?" It received 4,800 texts, and 71% said yes. In the same week, a council researcher asked a random sample of 300 adults in the town the same question; 138 said yes.

(a) Calculate the researcher's point estimate.
(b) A presenter says: "Our sample proportion is unbiased because p̂ is always an unbiased estimator, and with 4,800 replies it is far more accurate than the council's." Explain two things wrong with this statement.
(c) Which estimate should the council use? Explain.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** p̂ = 138 ÷ 300 = **0.46**: an estimated 46% of all adults in the town support Saturday closure.

**(b)** First, p̂ is unbiased only for **random** samples. The text poll is a voluntary-response sample: people with strong opinions, and people who listen to this station, choose to reply. Its sampling method is biased, so its p̂ is a biased estimate of the proportion of all adults. Second, a large sample reduces **variability**, not **bias**. 4,800 replies from a biased method give a precise estimate of the wrong group's opinion.

**(c)** The council should use **0.46** from the random sample of 300. Random selection makes p̂ an unbiased estimator of the town-wide proportion, even though the sample is smaller.

| Point | What earns it |
|---|---|
| 1 | p̂ = 0.46 with a context sentence about all adults in the town |
| 1 | Explains that unbiasedness of p̂ needs random sampling, and the text poll is voluntary response |
| 1 | Explains that a larger sample does not remove bias (it reduces variability only) |
| 1 | Chooses the random-sample estimate with a reason linked to random selection |
</details>

## How did you do?

- **Q1 or Q4(c) wrong:** re-read "From a sample to a population value" and "Estimator or estimate?" in the [study guide](/advanced-course-resources/statistics/3-1-estimators-study-guide/).
- **Q2 or Q3 wrong:** revisit "What makes an estimator unbiased?" and Worked example 3.
- **Q4(a) wrong:** work through Worked example 1 again, especially the n − 1 step.
- **Q5 or Q6 wrong:** revisit Worked example 2. Always compare the mean of the whole sampling distribution with the parameter.
- **Q7 wrong:** revisit "Bias and variability are different ideas" and the misconception about unbiased estimators and poor sampling.

Then tick off the [topic checklist](/advanced-course-resources/statistics/3-1-estimators-checklist/).
