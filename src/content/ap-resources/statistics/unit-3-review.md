---
resourceId: "mb-ap-stats-u3-review"
title: "Inference for Categorical Data: Proportions: Mixed Unit Review (Statistics Unit 3)"
description: "Big ideas, a one-table method summary and seven original exam-style questions that each combine two or more Unit 3 topics, with worked solutions and suggested rubrics."
course: "statistics"
unit: 3
topics: []
resourceType: "unit-review"
prerequisites:
  - "You have studied Topics 3.1 to 3.15"
  - "You have tried the Unit 3 diagnostic and closed any gaps it showed"
prerequisiteResources: ["mb-ap-stats-u3-diagnostic"]
learningObjectives:
  - "Connect sampling distributions, confidence intervals, significance tests and chi-square tests for categorical data"
  - "Choose the right inference procedure for a question and a study design, and justify the choice"
  - "Carry out complete intervals and tests: procedure, conditions, calculation and conclusion in context"
  - "Link a test's decision to the possible error, power and the scope of the conclusion"
skills: ["2", "3", "4"]
studyMinutes: 60
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Use normal cdf, inverse normal, chi-square cdf and the built-in interval and test functions to check your work. z* is 1.645 for 90%, 1.960 for 95% and 2.576 for 99%. Give endpoints to 3 decimal places, z and χ² to 2 and p-values to 4."
related: ["mb-ap-stats-u3-diagnostic", "mb-ap-stats-3.1-checklist", "mb-ap-stats-3.2-checklist", "mb-ap-stats-3.3-checklist", "mb-ap-stats-3.4-checklist", "mb-ap-stats-3.5-checklist", "mb-ap-stats-3.6-checklist", "mb-ap-stats-3.7-checklist", "mb-ap-stats-3.8-checklist", "mb-ap-stats-3.9-checklist", "mb-ap-stats-3.10-checklist", "mb-ap-stats-3.11-checklist", "mb-ap-stats-3.12-checklist", "mb-ap-stats-3.13-checklist", "mb-ap-stats-3.14-checklist", "mb-ap-stats-3.15-checklist"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Every procedure in this unit rests on a sampling distribution: of p̂, of p̂1 − p̂2, or of the χ² statistic."
  - "Intervals estimate with p̂ in the standard error; tests assume H₀, so they use p₀, the pooled p̂c or expected counts."
  - "Check randomization, the 10% condition (when sampling without replacement) and large counts, with numbers."
  - "Conclude about the parameter, in context, with non-definitive language; random assignment allows cause and effect."
  - "Every decision can be wrong: rejecting risks a Type I error, failing to reject risks a Type II error."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Read the big ideas and method table, then try the seven questions without notes; each combines two or more topics.

These are **original Marlbridge practice questions**, not past exam questions, with fictional data. The rubrics are a **suggested Marlbridge rubric**, not official scoring.

## Big ideas of the unit

- **A statistic estimates a parameter.** For random samples p̂ is unbiased for p, but any one estimate misses ([3.1](/advanced-course-resources/statistics/3-1-estimators-study-guide/)).
- **Sampling distributions describe that miss.** p̂ has mean p and standard deviation √(p(1 − p)/n); p̂1 − p̂2 has mean p1 − p2, and its variances add ([3.2](/advanced-course-resources/statistics/3-2-sampling-distributions-sample-proportions-study-guide/), [3.9](/advanced-course-resources/statistics/3-9-sampling-distributions-difference-between-sample-study-guide/)).
- **An interval is statistic ± (critical value)(standard error).** It gives plausible values of the parameter ([3.3](/advanced-course-resources/statistics/3-3-constructing-confidence-interval-population-proportion-study-guide/), [3.10](/advanced-course-resources/statistics/3-10-constructing-confidence-interval-difference-between-study-guide/)).
- **Intervals judge claims.** A claimed value inside the interval is plausible, not proved; a claim needs every plausible value on its side ([3.4](/advanced-course-resources/statistics/3-4-justifying-claim-based-on-confidence-study-guide/), [3.11](/advanced-course-resources/statistics/3-11-justifying-claim-based-on-confidence-study-guide/)).
- **A test asks how surprising the data are if H₀ is true.** Set up the parameter, hypotheses and conditions first ([3.5](/advanced-course-resources/statistics/3-5-setting-up-test-population-proportion-study-guide/), [3.12](/advanced-course-resources/statistics/3-12-setting-up-test-difference-between-study-guide/), [3.14](/advanced-course-resources/statistics/3-14-setting-up-chi-square-test-study-guide/)).
- **The p-value is found assuming H₀.** Compare it with α, chosen in advance; conclude in terms of Hₐ ([3.6](/advanced-course-resources/statistics/3-6-p-values-study-guide/), [3.7](/advanced-course-resources/statistics/3-7-carrying-out-test-population-proportion-study-guide/), [3.13](/advanced-course-resources/statistics/3-13-carrying-out-test-difference-between-study-guide/), [3.15](/advanced-course-resources/statistics/3-15-carrying-out-chi-square-test-study-guide/)).
- **Decisions can be wrong.** P(Type I) = α; P(Type II) = 1 − power; larger n raises power without raising α ([3.8](/advanced-course-resources/statistics/3-8-potential-errors-when-performing-tests-study-guide/)).
- **Design sets the scope.** Random sampling lets you generalise; random assignment lets you claim cause and effect.

## Key relationships and methods

| Question | Procedure | Standard error or statistic | Conditions (with numbers) |
|---|---|---|---|
| Estimate one p | One-sample z-interval | √(p̂(1 − p̂)/n) | Random; n ≤ 10%N; np̂, n(1 − p̂) ≥ 10 |
| Test a claimed p₀ | One-sample z-test | z = (p̂ − p₀) ÷ √(p₀(1 − p₀)/n) | Random; 10%; np₀, n(1 − p₀) ≥ 10 |
| Estimate p1 − p2 | Two-sample z-interval | √(p̂1(1 − p̂1)/n1 + p̂2(1 − p̂2)/n2) | Independent random samples or random assignment; 10% for samples; four observed counts ≥ 10 |
| Test p1 = p2 | Two-sample z-test | z = (p̂1 − p̂2) ÷ √(p̂c(1 − p̂c)(1/n1 + 1/n2)) | As above, with counts from the pooled p̂c ≥ 10 |
| Compare distributions of several groups | χ² test for homogeneity | χ² = Σ(O − E)²/E, df = (r − 1)(c − 1) | Separate random samples or random assignment; 10%; all E > 5 |
| Association between two variables | χ² test for independence | As above | One random sample; 10%; all E > 5 |
| Plan a sample size | Sample-size formula | n ≥ (z*/ME)² p̂(1 − p̂); p̂ = 0.5 with no estimate | Round up |

## Question 1 (multiple choice · mixed)

In a random sample of 600 adults in a fictional county, 342 recycle food waste. The 95% confidence interval for p, the proportion of all the county's adults who do, is (0.530, 0.610). The same data test H₀: p = 0.50 against Hₐ: p ≠ 0.50 at α = 0.05. Which is correct?

- (A) Reject H₀: 0.50 is not a plausible value, and the p-value is below 0.05.
- (B) Fail to reject H₀, because 0.57 is close to 0.50.
- (C) Reject H₀ and conclude that p = 0.57.
- (D) No decision is possible, because an interval and a test answer different questions.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** z = (0.57 − 0.50) ÷ √(0.50 × 0.50 ÷ 600) = 3.43, and the two-sided p-value is about 0.0006. This agrees with the interval, which lies entirely above 0.50. (Near an endpoint they can rarely disagree, as their standard errors differ.)

- (B) judges "close" by eye, not by standard errors.
- (C) treats p̂ as p.
- (D) They are two views of the same evidence.

Topics: 3.3, 3.4, 3.7.
</details>

## Question 2 (multiple choice · mixed)

A fictional orchard randomly assigns 100 young trees to each of two pruning methods. It tests H₀: p1 = p2 against Hₐ: p1 ≠ p2 at α = 0.05, where p1 and p2 are the proportions of trees like these that would fruit in their second year. The p-value is 0.18. Which is correct?

- (A) A Type II error may have been made; a larger experiment would make that error less likely.
- (B) A Type I error may have been made; lowering α would make it less likely.
- (C) A Type II error may have been made; lowering α to 0.01 would make it less likely.
- (D) No error is possible, because H₀ was not rejected.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** 0.18 > 0.05, so the orchard fails to reject H₀. If the methods really differ, that is a Type II error. More trees per group raise the power.

- (B) A Type I error needs H₀ to be rejected.
- (C) Lowering α makes rejecting harder, so the Type II error probability **rises**.
- (D) Failing to reject can also be wrong.

Topics: 3.8, 3.13.
</details>

## Question 3 (multiple choice · mixed)

A fictional council wants to know whether the proportion of households that compost differs among its **three** districts. From each district it selects its own random sample of households, recording "composts" or "does not". Which procedure is most appropriate?

- (A) A two-sample z-test for a difference between proportions
- (B) Three two-sample z-intervals, one for each pair of districts
- (C) A chi-square test for homogeneity
- (D) A chi-square test for independence

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Three populations, one categorical variable with two categories: a 3 × 2 table testing whether the distribution is the same in every district, df = (3 − 1)(2 − 1) = 2.

- (A) compares only two groups.
- (B) gives no single test, and several procedures raise the chance of a false alarm.
- (D) needs **one** sample classified on two variables.

Topics: 3.12, 3.14.
</details>

## Question 4 (constructed response · mixed)

The fictional Ravelin water company says it fixes 85% of reported leaks within 48 hours. A residents' group thinks the figure is lower. It selects a random sample of 160 of last year's 4,000 leak reports; 128 were fixed within 48 hours.

(a) If 85% really is correct, what are the centre, spread and shape of the sampling distribution of p̂ for random samples of 160 reports? Check the conditions.
(b) Using (a), find the probability that p̂ is 0.80 or less.
(c) State the hypotheses for the group's test. Explain why your answer to (b) is the p-value, and interpret it.
(d) State a conclusion at α = 0.05. Which type of error could have been made? Describe it in context.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Mean: μp̂ = 0.85. Standard deviation: σp̂ = √(0.85 × 0.15 ÷ 160) = 0.0282. Conditions: random sample; 160 ≤ 10% of 4,000 = 400; np = 136 and n(1 − p) = 24 are both at least 10. So the distribution is approximately normal.

**(b)** p̂ = 128 ÷ 160 = 0.80. z = (0.80 − 0.85) ÷ 0.0282 = −1.77. P(p̂ ≤ 0.80) = P(Z ≤ −1.77) = **0.0383**.

**(c)** p = the true proportion of all last year's Ravelin leak reports that were fixed within 48 hours. H₀: p = 0.85; Hₐ: p < 0.85. The p-value is the probability, assuming H₀, of a result at least as extreme as the observed one in the direction of Hₐ: exactly what (b) found. Interpretation: assuming 85% of the reported leaks were fixed within 48 hours, there is a 0.0383 probability of getting a sample proportion of 0.80 or lower in a random sample of 160 reports.

**(d)** 0.0383 < 0.05, so reject H₀. There is convincing statistical evidence that the true proportion of Ravelin's leak reports fixed within 48 hours is less than 0.85. Because H₀ was rejected, a **Type I error** is possible: concluding that fewer than 85% of leaks are fixed within 48 hours when 85% really are.

| Point | What earns it |
|---|---|
| 1 | Mean 0.85 and standard deviation 0.0282 |
| 1 | All three conditions checked with numbers; approximately normal |
| 1 | z = −1.77 and probability 0.0383 |
| 1 | Correct hypotheses with the parameter defined |
| 1 | (b) identified as the p-value **and** interpretation includes "assuming p = 0.85" |
| 1 | Reject H₀ with a conclusion about p in context **and** Type I error described in context |

**Total: 6 points.** Topics: 3.2, 3.5, 3.6, 3.7, 3.8.
</details>

## Question 5 (constructed response · mixed)

The fictional district of Kelmore has 24,000 households. The council selects a random sample of 500 households; 185 have a rainwater tank.

(a) Give the point estimate, using correct notation, and name the parameter it estimates. Why is it a reasonable estimate?
(b) Construct a 95% confidence interval for the parameter. Check the conditions.
(c) Interpret the interval. A councillor claims that fewer than 40% of households have a tank; another claims that more than a quarter do. Comment on each claim.
(d) How many households should the council sample to estimate the proportion to within 0.03 with 95% confidence, using the sample result as a guess?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** p̂ = 185 ÷ 500 = **0.37** estimates p, the proportion of all 24,000 Kelmore households with a rainwater tank. For a random sample, p̂ is an **unbiased** estimator of p: its sampling distribution is centred at p.

**(b)** One-sample z-interval for p. Conditions: random sample; 500 ≤ 10% of 24,000 = 2,400; 185 successes and 315 failures, both at least 10. SE = √(0.37 × 0.63 ÷ 500) = 0.02159. Margin of error = 1.960 × 0.02159 = 0.0423. Interval: **(0.328, 0.412)**.

**(c)** We are 95% confident that the interval from 0.328 to 0.412 captures the proportion of all Kelmore households with a rainwater tank. "Fewer than 40%": 0.40 is inside the interval, so 40% or more is plausible: **not** convincing evidence. "More than a quarter": every plausible value is above 0.25: convincing evidence.

**(d)** n ≥ (1.960 ÷ 0.03)² × 0.37 × 0.63 = 994.97, so **995 households** (round up). 995 is still at most 10% of 24,000.

| Point | What earns it |
|---|---|
| 1 | p̂ = 0.37, parameter defined in context, unbiased for a random sample |
| 1 | Three conditions checked with numbers |
| 1 | Interval (0.328, 0.412) with working |
| 1 | Interpretation about all Kelmore households, with "95% confident" |
| 1 | Both claims judged correctly from the interval |
| 1 | n = 995, rounded up |

**Total: 6 points.** Topics: 3.1, 3.3, 3.4.
</details>

## Question 6 (constructed response · mixed)

A fictional animal shelter randomly assigns 240 adoption listings: 120 include a short video and 120 show photos only. Within two weeks, 66 video-listed animals and 48 photo-only animals are adopted.

(a) Before the study, a staff member guessed that pV = 0.55 and pP = 0.40 for listings like these. Using these guesses, find the standard deviation of the sampling distribution of p̂V − p̂P for groups of 120. What would it be for groups of 240?
(b) Check the conditions for a two-sample z-interval for pV − pP.
(c) Construct a 95% confidence interval for pV − pP.
(d) Does the interval give convincing evidence that adding a video **increases** the adoption rate? May the shelter claim cause and effect? The manager also claims a video raises the rate by at least 20 percentage points. Comment.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** σ = √(0.55 × 0.45 ÷ 120 + 0.40 × 0.60 ÷ 120) = **0.0637**. With 240 per group: √(0.55 × 0.45 ÷ 240 + 0.40 × 0.60 ÷ 240) = **0.0451**, smaller by a factor of √2.

**(b)** Random assignment of listings to the two versions (no 10% check is needed for an experiment). Observed counts: 66 and 54 for video, 48 and 72 for photos, all at least 10.

**(c)** p̂V = 0.55, p̂P = 0.40. SE = √(0.55 × 0.45 ÷ 120 + 0.40 × 0.60 ÷ 120) = 0.06374. 0.15 ± 1.960 × 0.06374 = 0.15 ± 0.1249, so **(0.025, 0.275)**.

**(d)** We are 95% confident that the interval from 0.025 to 0.275 captures the true difference in two-week adoption proportions (video − photo only) for listings like these. Every plausible value is positive, so there is convincing evidence that a video increases the adoption rate. Because listings were **randomly assigned**, the shelter may conclude the video **caused** the increase, for listings like these. The "at least 20 points" claim is not supported: values from 0.025 to 0.20 are also plausible.

| Point | What earns it |
|---|---|
| 1 | 0.0637 and 0.0451, with the variances added |
| 1 | Random assignment **and** four counts at least 10 |
| 1 | SE 0.06374 and interval (0.025, 0.275) |
| 1 | Interpretation in context about the true difference |
| 1 | Convincing evidence of an increase because 0 is not in the interval, **and** cause and effect from random assignment |
| 1 | "At least 0.20" not supported, because smaller values are plausible |

**Total: 6 points.** Topics: 3.9, 3.10, 3.11.
</details>

## Question 7 (constructed response · mixed)

Ashgrove (12,000 students) and Bellmont (8,000 students) are fictional universities. A bookshop takes independent random samples of 150 Ashgrove and 100 Bellmont students and records how each mainly gets textbooks.

| | New | Second-hand | Digital | Total |
|---|---|---|---|---|
| Ashgrove | 36 | 66 | 48 | 150 |
| Bellmont | 39 | 34 | 27 | 100 |
| Total | 75 | 100 | 75 | 250 |

(a) Name the appropriate chi-square test and state the hypotheses.
(b) Find the expected counts and check all the conditions.
(c) Find χ², the degrees of freedom and the p-value. State a conclusion at α = 0.05.
(d) Before collecting data, the bookshop also planned to test whether the proportion buying **new** textbooks differs between the universities. Carry out this test at α = 0.05.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** **Chi-square test for homogeneity**: two separate samples, one categorical variable. H₀: the distribution of main textbook source (new, second-hand, digital) is the same for Ashgrove and Bellmont students. Hₐ: the distributions differ.

**(b)** Expected = row total × column total ÷ 250. Ashgrove: 45, 60, 45. Bellmont: 30, 40, 30. Conditions: independent random samples; 150 ≤ 1,200 and 100 ≤ 800 (10% of each population); all expected counts are greater than 5.

**(c)** Components: 1.80, 0.60, 0.20, 2.70, 0.90, 0.30. χ² = **6.50**, df = (2 − 1)(3 − 1) = **2**, p-value = P(χ² ≥ 6.50) = **0.0388**. 0.0388 < 0.05, so reject H₀. There is convincing statistical evidence that the distribution of main textbook source differs between Ashgrove and Bellmont students.

**(d)** pA, pB = the true proportions of all Ashgrove and Bellmont students who mainly buy new textbooks. H₀: pA = pB; Hₐ: pA ≠ pB. p̂A = 0.24, p̂B = 0.39, p̂c = 75 ÷ 250 = 0.30. Normality: 150(0.30) = 45, 150(0.70) = 105, 100(0.30) = 30, 100(0.70) = 70, all at least 10. z = (0.24 − 0.39) ÷ √[0.30 × 0.70 × (1/150 + 1/100)] = −0.15 ÷ 0.05916 = **−2.54**. p-value = 2 × P(Z ≤ −2.54) = **0.0112**. 0.0112 < 0.05, so reject H₀: there is convincing statistical evidence that the proportion who mainly buy new textbooks differs between the universities (lower at Ashgrove).

| Point | What earns it |
|---|---|
| 1 | Homogeneity, justified by two samples, with hypotheses about the populations |
| 1 | All six expected counts **and** the three conditions checked |
| 1 | χ² = 6.50, df = 2, p-value 0.0388 |
| 1 | Conclusion with linkage to α, in context |
| 1 | Two-sample hypotheses **and** normality check using p̂c = 0.30 |
| 1 | z = −2.54, p-value 0.0112 and conclusion in context |

**Total: 6 points.** Topics: 3.12, 3.13, 3.14, 3.15.
</details>

## How did you do?

Mark your answers with the rubrics; note the topics of each question you missed. Re-read those study guides, then tick off the checklists. If many topics went wrong, use the [Unit 3 diagnostic](/advanced-course-resources/statistics/unit-3-diagnostic/) to find the gaps.

Topic checklists: [3.1](/advanced-course-resources/statistics/3-1-estimators-checklist/) · [3.2](/advanced-course-resources/statistics/3-2-sampling-distributions-sample-proportions-checklist/) · [3.3](/advanced-course-resources/statistics/3-3-constructing-confidence-interval-population-proportion-checklist/) · [3.4](/advanced-course-resources/statistics/3-4-justifying-claim-based-on-confidence-checklist/) · [3.5](/advanced-course-resources/statistics/3-5-setting-up-test-population-proportion-checklist/) · [3.6](/advanced-course-resources/statistics/3-6-p-values-checklist/) · [3.7](/advanced-course-resources/statistics/3-7-carrying-out-test-population-proportion-checklist/) · [3.8](/advanced-course-resources/statistics/3-8-potential-errors-when-performing-tests-checklist/) · [3.9](/advanced-course-resources/statistics/3-9-sampling-distributions-difference-between-sample-checklist/) · [3.10](/advanced-course-resources/statistics/3-10-constructing-confidence-interval-difference-between-checklist/) · [3.11](/advanced-course-resources/statistics/3-11-justifying-claim-based-on-confidence-checklist/) · [3.12](/advanced-course-resources/statistics/3-12-setting-up-test-difference-between-checklist/) · [3.13](/advanced-course-resources/statistics/3-13-carrying-out-test-difference-between-checklist/) · [3.14](/advanced-course-resources/statistics/3-14-setting-up-chi-square-test-checklist/) · [3.15](/advanced-course-resources/statistics/3-15-carrying-out-chi-square-test-checklist/)
