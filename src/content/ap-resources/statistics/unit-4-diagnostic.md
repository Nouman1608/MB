---
resourceId: "mb-ap-stats-u4-diagnostic"
title: "Inference for Quantitative Data: Means: Unit Diagnostic (Statistics Unit 4)"
description: "A 30-minute check with one short question per topic of Unit 4, from the sampling distribution of x̄ to two-sample t-tests, showing which topics to revisit."
course: "statistics"
unit: 4
topics: []
resourceType: "unit-diagnostic"
prerequisites:
  - "You have studied some or all of Topics 4.1 to 4.10"
learningObjectives:
  - "Find out which Unit 4 topics are secure and which need more work"
  - "Practise short questions on sampling distributions, t-intervals and t-tests for one mean, a mean difference and two means"
  - "Use the answer explanations to see why common wrong answers are tempting"
  - "Choose the study guides to read next"
skills: ["2", "3", "4"]
studyMinutes: 30
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Use normalcdf, invT, tcdf and the t-interval and t-test functions on a graphing calculator, or a t-table. For two-sample procedures choose not to pool. Round t to 2 decimal places and p-values to 4."
related: ["mb-ap-stats-u4-review", "mb-ap-stats-4.2-study-guide", "mb-ap-stats-4.5-study-guide", "mb-ap-stats-4.6-study-guide", "mb-ap-stats-4.10-study-guide"]
next: "mb-ap-stats-u4-review"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Thirteen short questions: at least one for each of the 10 topics in Unit 4."
  - "Ten are multiple choice; three need a short written answer."
  - "Each answer links to the study guide to read if you missed it."
  - "It shows where to focus. It does not give or predict a score."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Use this diagnostic to find **which Unit 4 topics to revisit**: one short question per topic, two for Topics 4.2, 4.5 and 4.10.

These are **original Marlbridge practice questions**, not past exam questions, with fictional data. The diagnostic is not calibrated and gives **no predicted score**.

**How to take it.** Allow 30 minutes; answer everything before opening any answer. Graphing calculator or t-table allowed. Two-sample procedures are not pooled. Otherwise assume samples are random and the 10% condition holds.

## Question 1 (multiple choice · 4.1)

Songs on a fictional streaming platform have mean length 214 seconds and standard deviation 48 seconds. An analyst selects a random sample of 36 of its millions of songs. Which describes the sampling distribution of x̄?

- (A) Mean 214 s, standard deviation 48 s
- (B) Mean 214 s, standard deviation 8 s
- (C) Mean 5.94 s, standard deviation 8 s
- (D) Mean 214 s, standard deviation 1.33 s

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** μx̄ = μ = 214 s and σx̄ = σ/√n = 48/√36 = 8 s (random sample; 36 is far below 10% of millions).

- (A) gives the spread of single songs.
- (C) divides the mean by n; the centre does not change.
- (D) divides σ by n instead of √n.

**If you missed this:** [Topic 4.1 study guide](/advanced-course-resources/statistics/4-1-sampling-distributions-sample-means-study-guide/).
</details>

## Question 2 (multiple choice · 4.2)

A random sample of 16 of a fictional pharmacy's 4,000 monthly prescriptions had mean waiting time 48.3 minutes, s = 6.0 minutes, with no strong skewness or outliers. Which is the 95% confidence interval for the mean waiting time?

- (A) (45.36, 51.24) minutes
- (B) (45.10, 51.50) minutes
- (C) (35.51, 61.09) minutes
- (D) (47.50, 49.10) minutes

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** σ is unknown, so use t with df = 15: t* = 2.131. MOE = 2.131 × 6.0/√16 = 3.197 minutes.

- (A) uses z* = 1.96.
- (C) multiplies t* by s, not by s/√n.
- (D) divides s by n instead of √n.

**If you missed this:** [Topic 4.2 study guide](/advanced-course-resources/statistics/4-2-constructing-confidence-interval-population-mean-study-guide/).
</details>

## Question 3 (short answer · 4.2)

A fictional supermarket sells 5,000 products in store and online. A shopper picks 10 at random and records both prices. The differences d = in-store − online, in cents, are:

12, 5, −3, 8, 15, 0, 6, 9, −2, 10

(a) Why are these matched pairs? Define the parameter.
(b) Check the conditions.
(c) Construct a 95% confidence interval.

<details>
<summary>Answer and explanation</summary>

**(a)** Each product gives **two** linked prices: one sample of 10 differences. μd = the true mean difference (in-store − online) in price, in cents, for all 5,000 products.

**(b)** Random sample of products ✓. 10%: 10 ≤ 500 ✓. n = 10 < 30: Q1 = 0, Q3 = 10, fences −15 and 25; no outliers or strong skew ✓.

**(c)** x̄d = 6.0, sd = 6.0369 cents. df = 9, t* = 2.262. MOE = 2.262 × 6.0369/√10 = 4.3186. Interval: **(1.68, 10.32) cents**.

**If you missed this:** [Topic 4.2 study guide](/advanced-course-resources/statistics/4-2-constructing-confidence-interval-population-mean-study-guide/), "Worked example 2".
</details>

## Question 4 (multiple choice · 4.3)

A fictional soup's label says 600 mg of sodium per can. From a random sample of 30 cans, a 99% t-interval for the true mean sodium content is (612, 655) mg. Is there convincing evidence that the true mean differs from the label?

- (A) Yes: 600 mg is not in the interval, so it is not a plausible mean.
- (B) No: some cans in the sample may contain less than 600 mg.
- (C) Yes: 99% of cans contain between 612 and 655 mg.
- (D) No: only a significance test can judge a claim.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Every plausible value of μ is above 600 mg.

- (B) confuses individual cans with the mean.
- (C) treats the interval as a range for individual cans.
- (D) is wrong: an interval that excludes a claimed value is evidence against it.

**If you missed this:** [Topic 4.3 study guide](/advanced-course-resources/statistics/4-3-justifying-claim-based-on-confidence-study-guide/).
</details>

## Question 5 (multiple choice · 4.4)

A fictional sleep app says its bedtime routine reduces the time users take to fall asleep. Twenty-five randomly chosen users record their mean time to fall asleep for a week before and a week after starting it. With d = before − after, which hypotheses fit the claim?

- (A) H₀: μd = 0, Hₐ: μd < 0
- (B) H₀: x̄d = 0, Hₐ: x̄d > 0
- (C) H₀: μd = 0, Hₐ: μd > 0
- (D) H₀: μd = 0, Hₐ: μd ≠ 0

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** If the routine helps, before − after is positive. μd is the true mean difference (before − after) for all the app's users.

- (A) reverses the direction for this order of subtraction.
- (B) uses the sample statistic x̄d; hypotheses are about parameters.
- (D) is two-sided; the claim names a direction.

**If you missed this:** [Topic 4.4 study guide](/advanced-course-resources/statistics/4-4-setting-up-test-population-mean-study-guide/).
</details>

## Question 6 (multiple choice · 4.5)

A one-sample t-test with n = 14 and Hₐ: μ > μ₀ gives t = 2.05. Find the p-value.

- (A) 0.0202
- (B) 0.0305
- (C) 0.0611
- (D) 0.9695

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** df = 13; p-value = P(t ≥ 2.05) = 0.0305, the upper tail only.

- (A) uses the standard normal instead of t with 13 df.
- (C) doubles for a two-sided test.
- (D) is the area in the wrong tail.

**If you missed this:** [Topic 4.5 study guide](/advanced-course-resources/statistics/4-5-carrying-out-test-population-mean-study-guide/).
</details>

## Question 7 (short answer · 4.5)

A fictional council says its recycling trucks take 95 minutes, on average, to complete a collection route. Residents suspect it takes longer. A random sample of 20 of last year's 1,500 route runs gives x̄ = 99.2 minutes and s = 8.1 minutes; a dotplot shows no strong skewness or outliers. The hypotheses are H₀: μ = 95, Hₐ: μ > 95.

(a) Calculate the test statistic and p-value.
(b) Interpret the p-value in context.
(c) State a conclusion at α = 0.05.

<details>
<summary>Answer and explanation</summary>

**(a)** SE = 8.1/√20 = 1.8112. t = (99.2 − 95)/1.8112 = **2.32**, df = 19. p-value = P(t ≥ 2.32) = **0.0158**.

**(b)** Assuming the true mean route time is 95 minutes, there is a 0.0158 probability of a sample mean of 99.2 minutes or more in a random sample of 20 runs.

**(c)** Because 0.0158 ≤ 0.05, reject H₀. There is convincing evidence that the true mean time of all last year's route runs exceeds 95 minutes.

**If you missed this:** [Topic 4.5 study guide](/advanced-course-resources/statistics/4-5-carrying-out-test-population-mean-study-guide/).
</details>

## Question 8 (multiple choice · 4.6)

Waiting times at fictional theme-park Ride A are normal with mean 32 and standard deviation 9 minutes; at Ride B, normal with mean 27 and standard deviation 6 minutes. Independent random samples of 9 waits at A and 16 at B are taken. What is the probability that the B sample mean is **greater** than the A sample mean?

- (A) 0.0680
- (B) 0.1333
- (C) 0.3220
- (D) 0.9320

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** x̄A − x̄B is normal (both populations are normal) with mean 5 and standard deviation √(81/9 + 36/16) = 3.3541 minutes. P(x̄A − x̄B < 0) = P(z < −1.4907) = 0.0680.

- (B) adds standard deviations (3 + 1.5), not variances.
- (C) forgets to divide each variance by its n.
- (D) is the wrong tail.

**If you missed this:** [Topic 4.6 study guide](/advanced-course-resources/statistics/4-6-sampling-distributions-difference-between-two-study-guide/).
</details>

## Question 9 (multiple choice · 4.7)

A two-sample t-interval uses samples of 14 and 20. Which df could technology report?

- (A) 12.0
- (B) 27.6
- (C) 33.0
- (D) 34.0

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The df lie between the smaller of n₁ − 1 and n₂ − 1 (13) and n₁ + n₂ − 2 (32).

- (A) is below 13.
- (C) is above 32.
- (D) is n₁ + n₂.

**If you missed this:** [Topic 4.7 study guide](/advanced-course-resources/statistics/4-7-constructing-confidence-interval-difference-between-study-guide/).
</details>

## Question 10 (multiple choice · 4.8)

Sixty volunteers were randomly assigned, 30 each, to read a passage in a serif or a sans-serif typeface. A 95% interval for μ_serif − μ_sans, the difference in mean reading time, is (−7.4, −1.2) seconds. A designer claims sans-serif text is read faster. Which is correct?

- (A) Supported, because the interval is entirely negative.
- (B) Not supported: the serif mean time seems shorter, by 1.2 to 7.4 seconds, for volunteers like these.
- (C) No conclusion is possible, because the interval does not contain 0.
- (D) Supported: 95% of volunteers read sans-serif 1.2 to 7.4 seconds faster.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Negative values mean serif times are **smaller**; 0 is not plausible, so the evidence points the other way.

- (A) ignores the order of subtraction.
- (C) is backwards: excluding 0 gives evidence.
- (D) describes individuals and reverses the direction.

**If you missed this:** [Topic 4.8 study guide](/advanced-course-resources/statistics/4-8-justifying-claim-based-on-confidence-study-guide/).
</details>

## Question 11 (multiple choice · 4.9)

A sports scientist randomly assigns 24 volunteer runners, 12 to drink X and 12 to drink Y, and records how far each runs in 30 minutes. She suspects drink X leads to a longer mean distance. Which set-up is correct?

- (A) Two-sample t-test; μ_X and μ_Y are the true mean distances for runners like these with each drink; Hₐ: μ_X − μ_Y > 0
- (B) As (A), but μ_X and μ_Y are the means of the 12 runners in each group
- (C) As (A), but Hₐ: μ_X − μ_Y ≠ 0
- (D) One-sample t-test for μd, the mean of the 12 differences X − Y

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Two independent groups; true means as parameters; a one-sided Hₐ.

- (B) defines sample means, not parameters.
- (C) is two-sided.
- (D) treats unrelated runners as pairs.

**If you missed this:** [Topic 4.9 study guide](/advanced-course-resources/statistics/4-9-setting-up-test-difference-between-study-guide/).
</details>

## Question 12 (multiple choice · 4.10)

A lab suspects fictional Brand 1 smoke alarms sound faster than Brand 2. Random samples of 20 of each give t = −2.48 with df = 37.6 for H₀: μ₁ − μ₂ = 0, Hₐ: μ₁ − μ₂ < 0. Which is correct at α = 0.01?

- (A) p ≈ 0.0089; reject H₀: convincing evidence Brand 1's true mean time is shorter
- (B) p ≈ 0.0177; fail to reject H₀
- (C) p ≈ 0.9911; fail to reject H₀
- (D) p ≈ 0.0089; reject H₀: this proves Brand 1 is faster

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** P(t ≤ −2.48) with df = 37.6 is 0.0089 ≤ 0.01.

- (B) doubles for a two-sided test.
- (C) is the wrong tail.
- (D) uses definite language; tests give evidence, not proof.

**If you missed this:** [Topic 4.10 study guide](/advanced-course-resources/statistics/4-10-carrying-out-test-difference-between-study-guide/).
</details>

## Question 13 (short answer · 4.10)

A fictional streaming service randomly assigned 80 volunteers, 40 each, to a new or old home page and timed how long each took to start a programme. New: x̄ = 3.4, s = 1.6 minutes. Old: x̄ = 4.3, s = 1.9 minutes. H₀: μ_new − μ_old = 0, Hₐ: μ_new − μ_old < 0; the conditions are met.

(a) Find t, df and the p-value.
(b) State a conclusion at α = 0.05.
(c) What does the design allow?

<details>
<summary>Answer and explanation</summary>

**(a)** SE = √(1.6²/40 + 1.9²/40) = 0.3927 minutes. t = (3.4 − 4.3)/0.3927 = **−2.29**. Technology: df = 75.80, p-value = P(t ≤ −2.29) = **0.0124**.

**(b)** Because 0.0124 ≤ 0.05, reject H₀. There is convincing evidence that the true mean time to start a programme is shorter with the new page.

**(c)** Pages were **randomly assigned**, so the new page **caused** the shorter mean time, for volunteers like these.

**If you missed this:** [Topic 4.10 study guide](/advanced-course-resources/statistics/4-10-carrying-out-test-difference-between-study-guide/).
</details>

## Your next step

| Topic | Question(s) | If you missed it, read |
|---|---|---|
| 4.1 | 1 | [Sampling distribution of x̄](/advanced-course-resources/statistics/4-1-sampling-distributions-sample-means-study-guide/) |
| 4.2 | 2, 3 | [One-sample t-interval](/advanced-course-resources/statistics/4-2-constructing-confidence-interval-population-mean-study-guide/) |
| 4.3 | 4 | [Claims from an interval](/advanced-course-resources/statistics/4-3-justifying-claim-based-on-confidence-study-guide/) |
| 4.4 | 5 | [Setting up a t-test](/advanced-course-resources/statistics/4-4-setting-up-test-population-mean-study-guide/) |
| 4.5 | 6, 7 | [Carrying out a t-test](/advanced-course-resources/statistics/4-5-carrying-out-test-population-mean-study-guide/) |
| 4.6 | 8 | [Sampling distribution of x̄₁ − x̄₂](/advanced-course-resources/statistics/4-6-sampling-distributions-difference-between-two-study-guide/) |
| 4.7 | 9 | [Two-sample t-interval](/advanced-course-resources/statistics/4-7-constructing-confidence-interval-difference-between-study-guide/) |
| 4.8 | 10 | [Claims about two means](/advanced-course-resources/statistics/4-8-justifying-claim-based-on-confidence-study-guide/) |
| 4.9 | 11 | [Two-sample test set-up](/advanced-course-resources/statistics/4-9-setting-up-test-difference-between-study-guide/) |
| 4.10 | 12, 13 | [Two-sample test](/advanced-course-resources/statistics/4-10-carrying-out-test-difference-between-study-guide/) |

## How to use your result

- **Mark each question right, partly right or wrong.** A number with no conclusion in context is only partly right.
- **Fix weak topics in order**: tests (4.4, 4.5, 4.9, 4.10) reuse the standard errors and conditions of 4.1, 4.2, 4.6, 4.7.
- **Read the study guide, then do its practice set.**
- **Then try the [Unit 4 mixed review](/advanced-course-resources/statistics/unit-4-review/).**
