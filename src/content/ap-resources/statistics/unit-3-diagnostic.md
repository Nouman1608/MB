---
resourceId: "mb-ap-stats-u3-diagnostic"
title: "Inference for Categorical Data: Proportions: Unit Diagnostic (Statistics Unit 3)"
description: "A 30-minute check with one short question per topic of Unit 3, from estimators and sampling distributions to intervals, tests and chi-square, showing which topics to revisit."
course: "statistics"
unit: 3
topics: []
resourceType: "unit-diagnostic"
prerequisites:
  - "You have studied some or all of Topics 3.1 to 3.15"
learningObjectives:
  - "Find out which Unit 3 topics are secure and which need more work"
  - "Practise short questions on sampling distributions, confidence intervals, significance tests and chi-square tests for categorical data"
  - "Use the answer explanations to see why common wrong answers are tempting"
  - "Choose the study guides to read next"
skills: ["2", "3", "4"]
studyMinutes: 30
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Use normal cdf, inverse normal and chi-square cdf (or the built-in interval and test functions). z* is 1.645 for 90%, 1.960 for 95% and 2.576 for 99%. Give endpoints to 3 decimal places, z and χ² to 2 and p-values to 4."
related: ["mb-ap-stats-u3-review", "mb-ap-stats-3.3-study-guide", "mb-ap-stats-3.7-study-guide", "mb-ap-stats-3.13-study-guide", "mb-ap-stats-3.15-study-guide"]
next: "mb-ap-stats-u3-review"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Fifteen short questions: one for each of the 15 topics in Unit 3."
  - "Twelve are multiple choice; three need a short written answer."
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

Use this diagnostic to find **which Unit 3 topics to revisit**: one question per topic.

These are **original Marlbridge practice questions** with fictional data, not past exam questions. It is not calibrated and gives **no predicted score**.

**How to take it.** Allow 30 minutes; answer everything before opening the answers. Graphing calculator allowed; z* is 1.645 (90%), 1.960 (95%), 2.576 (99%).

## Question 1 (multiple choice · 3.1)

For p = 0.40, 1,000 simulated random samples give estimator P mean 0.400, standard deviation 0.07, and estimator Q mean 0.430, standard deviation 0.03. Which is correct?

- (A) P appears unbiased; Q appears biased but less variable.
- (B) Q is unbiased, because its values cluster.
- (C) Both are biased: neither standard deviation is 0.
- (D) P is biased: one value could be 0.33.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Bias is about the **centre**: P's matches 0.40; Q's is 0.03 too high.

- (B) confuses bias with variability.
- (C) forgets that unbiased estimators vary.
- (D) judges bias from one value.

**If you missed this:** [3.1 study guide](/advanced-course-resources/statistics/3-1-estimators-study-guide/).
</details>

## Question 2 (multiple choice · 3.2)

In a fictional region, 4% of adults have a heat pump. For random samples of 150 adults, the sampling distribution of p̂ has:

- (A) Mean 0.04, standard deviation 0.016, approximately normal
- (B) Mean 0.04, standard deviation 0.016, skewed right
- (C) Mean 6, standard deviation 2.4, approximately normal
- (D) Mean 0.04, standard deviation 0.000256, skewed right

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** σp̂ = √(0.04 × 0.96 ÷ 150) = 0.016, but np = 6 < 10, so the large-counts condition fails: skewed right.

- (A) ignores the failed condition.
- (C) describes the **count**.
- (D) forgets the square root.

**If you missed this:** [3.2 study guide](/advanced-course-resources/statistics/3-2-sampling-distributions-sample-proportions-study-guide/).
</details>

## Question 3 (multiple choice · 3.3)

In a random sample of 640 passengers on a fictional tram network, 208 had a monthly pass. Which is the 95% confidence interval for p, the proportion of all passengers with one?

- (A) (0.289, 0.361)
- (B) (0.295, 0.355)
- (C) (0.324, 0.326)
- (D) (0.277, 0.373)

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** p̂ = 0.325; SE = √(0.325 × 0.675 ÷ 640) = 0.01851; margin of error = 1.960 × 0.01851 = 0.0363.

- (B) uses 1.645, the 90% value.
- (C) forgets the square root.
- (D) uses 2.576, the 99% value.

**If you missed this:** [3.3 study guide](/advanced-course-resources/statistics/3-3-constructing-confidence-interval-population-proportion-study-guide/).
</details>

## Question 4 (multiple choice · 3.4)

A 95% interval for the proportion of a fictional town's residents supporting a new market is (0.47, 0.55). A councillor says exactly half do. Which is best?

- (A) The interval proves the claim: 0.50 is inside it.
- (B) 0.50 is plausible, so the claim is not contradicted, but it is not proved.
- (C) The point estimate is 0.51, so a majority supports it.
- (D) 95% of residents' answers lie between 0.47 and 0.55.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** 0.50 is inside the interval, but so are 0.48 and 0.53.

- (A) treats "plausible" as "proven".
- (C) ignores plausible values below 0.50.
- (D) describes individuals, not p.

**If you missed this:** [3.4 study guide](/advanced-course-resources/statistics/3-4-justifying-claim-based-on-confidence-study-guide/).
</details>

## Question 5 (multiple choice · 3.5)

Which situation calls for a **one-sample z-test for a population proportion**?

- (A) Estimating the proportion of students who own a bike
- (B) Checking a claim that 30% of drivers use winter tyres, suspecting fewer do
- (C) Comparing two schools' proportions of students who walk
- (D) Asking whether age group and favourite sport are associated

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** One population, one categorical variable and a claimed value, p₀ = 0.30.

- (A) needs a confidence interval.
- (C) needs a two-sample test.
- (D) needs a chi-square test for independence.

**If you missed this:** [3.5 study guide](/advanced-course-resources/statistics/3-5-setting-up-test-population-proportion-study-guide/).
</details>

## Question 6 (multiple choice · 3.6)

Random samples X (n = 100) and Y (n = 400) both give p̂ = 0.56 for H₀: p = 0.50, Hₐ: p > 0.50. Which is correct?

- (A) Y gives the smaller p-value.
- (B) The p-values are equal, because p̂ is the same.
- (C) X gives the smaller p-value, because small samples vary more.
- (D) The p-values cannot be compared without α.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** For X, z = 0.06 ÷ 0.05 = 1.20 (p-value 0.1151); for Y, z = 0.06 ÷ 0.025 = 2.40 (p-value 0.0082).

- (B) ignores n.
- (C) More variability makes 0.56 **less** surprising.
- (D) α only matters for the decision.

**If you missed this:** [3.6 study guide](/advanced-course-resources/statistics/3-6-p-values-study-guide/).
</details>

## Question 7 (short answer · 3.7)

A fictional council says 30% of residents use its leisure centre. A random sample of 400 residents includes 140 users. Is the proportion different from 30%? Conditions are met; α = 0.05.

(a) State the hypotheses, defining the parameter.
(b) Find z and the p-value.
(c) Conclude in context.

<details>
<summary>Answer and explanation</summary>

**(a)** p = the true proportion of all residents who use the centre. H₀: p = 0.30; Hₐ: p ≠ 0.30.

**(b)** p̂ = 0.35. z = (0.35 − 0.30) ÷ √(0.30 × 0.70 ÷ 400) = **2.18**. p-value = 2 × P(Z ≥ 2.18) = **0.0291**.

**(c)** 0.0291 < 0.05, so reject H₀. There is convincing statistical evidence that the true proportion of residents using the centre differs from 0.30.

**If you missed this:** [3.7 study guide](/advanced-course-resources/statistics/3-7-carrying-out-test-population-proportion-study-guide/).
</details>

## Question 8 (multiple choice · 3.8)

A test of H₀: p = 0.50 against Hₐ: p > 0.50 uses n = 150 and α = 0.05. Its power is 0.34 if p = 0.55. What could its power be if p = 0.60?

- (A) 0.05
- (B) 0.21
- (C) 0.34
- (D) 0.79

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** With n and α fixed, a true value **further** from p₀ is easier to detect, so power rises.

- (A) is α.
- (B) has power falling.
- (C) ignores the true value.

**If you missed this:** [3.8 study guide](/advanced-course-resources/statistics/3-8-potential-errors-when-performing-tests-study-guide/).
</details>

## Question 9 (multiple choice · 3.9)

For independent random samples of 300 from A (pA = 0.62) and 250 from B (pB = 0.48), the sampling distribution of p̂A − p̂B has

- (A) mean 0.14, standard deviation larger than σp̂A and σp̂B
- (B) mean 0.14, standard deviation σp̂A − σp̂B
- (C) mean 0, as the samples are independent
- (D) mean 0.14, standard deviation smaller than σp̂A and σp̂B

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** **Variances add**: σp̂A = 0.0280, σp̂B = 0.0316 and σ for the difference = √(0.0280² + 0.0316²) = 0.0422.

- (B) subtracts standard deviations.
- (C) confuses independence with equal proportions.
- (D) Variability adds, not shrinks.

**If you missed this:** [3.9 study guide](/advanced-course-resources/statistics/3-9-sampling-distributions-difference-between-sample-study-guide/).
</details>

## Question 10 (multiple choice · 3.10)

Independent random samples show 168 of 280 drivers in fictional Town P and 130 of 260 in Town Q use winter tyres. Which is the 90% confidence interval for pP − pQ?

- (A) (0.016, 0.184)
- (B) (0.001, 0.199)
- (C) (0.030, 0.170)
- (D) (−0.170, −0.030)

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** SE = √(0.60 × 0.40 ÷ 280 + 0.50 × 0.50 ÷ 260) = 0.04265; 0.10 ± 1.645 × 0.04265.

- (A) uses 1.960.
- (B) adds standard errors, not variances.
- (D) estimates pQ − pP.

**If you missed this:** [3.10 study guide](/advanced-course-resources/statistics/3-10-constructing-confidence-interval-difference-between-study-guide/).
</details>

## Question 11 (multiple choice · 3.11)

For the proportions of students who cycle at fictional East and West colleges, a 95% interval for pE − pW is (−0.21, −0.04). A report says pW exceeds pE by more than 0.05. Which is best?

- (A) Convincing evidence for the report
- (B) Convincing evidence that pW > pE, but not of the report's claim
- (C) No convincing evidence of a difference, because the interval is negative
- (D) Convincing evidence that pE > pW

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** All plausible values are negative, so pW > pE; but a difference of 0.04 is plausible.

- (A) ignores differences from 0.04 to 0.05.
- (C) 0 is not in the interval.
- (D) reverses the direction.

**If you missed this:** [3.11 study guide](/advanced-course-resources/statistics/3-11-justifying-claim-based-on-confidence-study-guide/).
</details>

## Question 12 (multiple choice · 3.12)

A fictional nursery randomly assigns 120 seedlings to feed A and 160 to feed B; 78 and 88 flower. Which correctly checks the conditions for a two-sample z-test?

- (A) Both groups exceed 30, so normality is met.
- (B) Not met: the seedlings are not a random sample.
- (C) p̂c = (0.65 + 0.55) ÷ 2 = 0.60; 120 is under 10% of all seedlings.
- (D) Random assignment; p̂c ≈ 0.593 gives 71.1, 48.9, 94.9, 65.1, all at least 10.

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** p̂c = 166 ÷ 280. A test assumes H₀, so normality uses the pooled proportion.

- (A) is a rule for means.
- (B) forgets that random assignment is enough.
- (C) averages unequal groups; experiments need no 10% check.

**If you missed this:** [3.12 study guide](/advanced-course-resources/statistics/3-12-setting-up-test-difference-between-study-guide/).
</details>

## Question 13 (short answer · 3.13)

A fictional charity randomly assigns 250 learner cyclists to an on-road course (R) and 250 to a classroom course (C). Within three months, 30 R and 45 C learners have an accident. Does R reduce accidents? Conditions are met; α = 0.05.

(a) State the hypotheses, defining the parameters.
(b) Find p̂c, z and the p-value.
(c) Conclude. Is cause and effect justified?

<details>
<summary>Answer and explanation</summary>

**(a)** pR, pC = the true three-month accident proportions for learners like these after each course. H₀: pR = pC; Hₐ: pR < pC.

**(b)** p̂c = 75 ÷ 500 = **0.15**. z = (0.12 − 0.18) ÷ √[0.15 × 0.85 × (1/250 + 1/250)] = **−1.88**. p-value = P(Z ≤ −1.88) = **0.0301**.

**(c)** 0.0301 < 0.05, so reject H₀: convincing statistical evidence that course R reduces accidents. Random **assignment** justifies cause and effect, for learners like these.

**If you missed this:** [3.13 study guide](/advanced-course-resources/statistics/3-13-carrying-out-test-difference-between-study-guide/).
</details>

## Question 14 (multiple choice · 3.14)

A random sample of 600 adults in a fictional region records age group and main transport. Which null hypothesis is correct?

- (A) Age group and transport are associated among the region's adults
- (B) Each type of transport is used by 25% of the region's adults
- (C) Age group and transport are independent among the region's adults
- (D) Age group and transport are independent in the sample

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** One sample, two categorical variables: a chi-square test for independence.

- (A) is Hₐ.
- (B) is about one variable.
- (D) is about the sample.

**If you missed this:** [3.14 study guide](/advanced-course-resources/statistics/3-14-setting-up-chi-square-test-study-guide/).
</details>

## Question 15 (short answer · 3.15)

A random sample of 300 visitors to a fictional park records trip type and main activity.

| | Hiking | Cycling | Water sports | Total |
|---|---|---|---|---|
| Day trip | 102 | 48 | 30 | 180 |
| Overnight | 48 | 42 | 30 | 120 |
| Total | 150 | 90 | 60 | 300 |

(a) Name the test, find the expected counts and check the condition.
(b) Find χ², df and the p-value; conclude at α = 0.01.

<details>
<summary>Answer and explanation</summary>

**(a)** Chi-square test for independence (one sample). Expected = row total × column total ÷ 300: Day trip 90, 54, 36; Overnight 60, 36, 24. All exceed 5.

**(b)** χ² = 1.60 + 0.67 + 1.00 + 2.40 + 1.00 + 1.50 = **8.17**; df = (2 − 1)(3 − 1) = **2**; p-value = **0.0169**. 0.0169 > 0.01, so fail to reject H₀. There is not convincing statistical evidence of an association between trip type and main activity among park visitors.

**If you missed this:** [3.15 study guide](/advanced-course-resources/statistics/3-15-carrying-out-chi-square-test-study-guide/).
</details>

## Your next step

| Topic | Question(s) | If you missed it, read |
|---|---|---|
| 3.1 | 1 | [Estimators](/advanced-course-resources/statistics/3-1-estimators-study-guide/) |
| 3.2 | 2 | [Distribution of p̂](/advanced-course-resources/statistics/3-2-sampling-distributions-sample-proportions-study-guide/) |
| 3.3 | 3 | [Interval for p](/advanced-course-resources/statistics/3-3-constructing-confidence-interval-population-proportion-study-guide/) |
| 3.4 | 4 | [Interval claims](/advanced-course-resources/statistics/3-4-justifying-claim-based-on-confidence-study-guide/) |
| 3.5 | 5 | [Test set-up](/advanced-course-resources/statistics/3-5-setting-up-test-population-proportion-study-guide/) |
| 3.6 | 6 | [p-values](/advanced-course-resources/statistics/3-6-p-values-study-guide/) |
| 3.7 | 7 | [One-sample test](/advanced-course-resources/statistics/3-7-carrying-out-test-population-proportion-study-guide/) |
| 3.8 | 8 | [Errors and power](/advanced-course-resources/statistics/3-8-potential-errors-when-performing-tests-study-guide/) |
| 3.9 | 9 | [Difference of p̂s](/advanced-course-resources/statistics/3-9-sampling-distributions-difference-between-sample-study-guide/) |
| 3.10 | 10 | [Two-sample interval](/advanced-course-resources/statistics/3-10-constructing-confidence-interval-difference-between-study-guide/) |
| 3.11 | 11 | [Two-sample claims](/advanced-course-resources/statistics/3-11-justifying-claim-based-on-confidence-study-guide/) |
| 3.12 | 12 | [Two-sample test set-up](/advanced-course-resources/statistics/3-12-setting-up-test-difference-between-study-guide/) |
| 3.13 | 13 | [Two-sample test](/advanced-course-resources/statistics/3-13-carrying-out-test-difference-between-study-guide/) |
| 3.14 | 14 | [Chi-square set-up](/advanced-course-resources/statistics/3-14-setting-up-chi-square-test-study-guide/) |
| 3.15 | 15 | [Chi-square test](/advanced-course-resources/statistics/3-15-carrying-out-chi-square-test-study-guide/) |

## How to use your result

- **Mark each answer right, partly right or wrong.** A conclusion without context is only partly right.
- **Fix weak topics in order**: tests (3.5 to 3.7) build on 3.2; two-sample work repeats one-sample steps.
- **Read the guide, do its practice set, then try the [Unit 3 mixed review](/advanced-course-resources/statistics/unit-3-review/)**, which combines topics.
