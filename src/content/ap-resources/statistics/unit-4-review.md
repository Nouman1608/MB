---
resourceId: "mb-ap-stats-u4-review"
title: "Inference for Quantitative Data: Means: Mixed Unit Review (Statistics Unit 4)"
description: "Big ideas, a one-table method summary and seven original exam-style questions that each combine two or more Unit 4 topics, with worked solutions and suggested rubrics."
course: "statistics"
unit: 4
topics: []
resourceType: "unit-review"
prerequisites:
  - "You have studied Topics 4.1 to 4.10"
  - "You have tried the Unit 4 diagnostic and closed any gaps it showed"
prerequisiteResources: ["mb-ap-stats-u4-diagnostic"]
learningObjectives:
  - "Connect the ideas of Unit 4: sampling distributions of means, t-intervals and t-tests for one mean, a mean difference and two means"
  - "Choose between one-sample, matched-pairs and two-sample t procedures and justify the choice"
  - "Answer multi-part questions that move between sampling distributions, intervals and tests"
  - "Write conclusions in context that match the study design, separating generalisation from cause and effect"
skills: ["2", "3", "4"]
studyMinutes: 60
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Use normalcdf, invT, tcdf and the t-interval and t-test functions on a graphing calculator, or a t-table with conservative degrees of freedom. For two-sample procedures choose not to pool. s is the sample standard deviation (Sx). Round t to 2 decimal places and p-values to 4."
related: ["mb-ap-stats-u4-diagnostic", "mb-ap-stats-4.1-checklist", "mb-ap-stats-4.2-checklist", "mb-ap-stats-4.3-checklist", "mb-ap-stats-4.4-checklist", "mb-ap-stats-4.5-checklist", "mb-ap-stats-4.6-checklist", "mb-ap-stats-4.7-checklist", "mb-ap-stats-4.8-checklist", "mb-ap-stats-4.9-checklist", "mb-ap-stats-4.10-checklist"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Every procedure in the unit has the same shape: statistic ± (critical value) × (standard error), or t = (statistic − null value) / standard error."
  - "Use t, not z, whenever s replaces an unknown σ; df is n − 1 for one sample, and comes from technology for two samples."
  - "Paired data are one sample of differences; two independent groups need the two-sample procedure. The design decides, not the number of columns."
  - "The same three conditions appear every time: randomization, 10% (when sampling without replacement) and the sample data condition."
  - "Random samples let you generalise to the populations sampled; random assignment lets you claim cause and effect."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Read the big ideas and the method table, then try the seven questions without notes. Each combines two or more Unit 4 topics.

These are **original Marlbridge practice questions**, not past exam questions, with fictional data. The rubrics are a **suggested Marlbridge rubric**, not official scoring.

## Big ideas of the unit

- **Sample means vary in a predictable way.** x̄ is centred at μ with standard deviation σ/√n when values are independent, and is normal or approximately normal when the population is normal or n ≥ 30 ([4.1](/advanced-course-resources/statistics/4-1-sampling-distributions-sample-means-study-guide/)).
- **Differences of independent means add variances.** x̄₁ − x̄₂ has mean μ₁ − μ₂ and standard deviation √(σ₁²/n₁ + σ₂²/n₂) ([4.6](/advanced-course-resources/statistics/4-6-sampling-distributions-difference-between-two-study-guide/)).
- **Using s for σ means using t.** t-distributions have heavier tails than the normal, so t* > z*; they approach the normal as df grows ([4.2](/advanced-course-resources/statistics/4-2-constructing-confidence-interval-population-mean-study-guide/)).
- **The design picks the procedure.** Two linked measurements per individual give one sample of differences; two separate groups give a two-sample procedure ([4.4](/advanced-course-resources/statistics/4-4-setting-up-test-population-mean-study-guide/), [4.9](/advanced-course-resources/statistics/4-9-setting-up-test-difference-between-study-guide/)).
- **Intervals estimate; tests weigh a claim.** An interval gives plausible values of a parameter; a test asks how surprising the data would be under H₀ ([4.2](/advanced-course-resources/statistics/4-2-constructing-confidence-interval-population-mean-study-guide/), [4.7](/advanced-course-resources/statistics/4-7-constructing-confidence-interval-difference-between-study-guide/), [4.5](/advanced-course-resources/statistics/4-5-carrying-out-test-population-mean-study-guide/), [4.10](/advanced-course-resources/statistics/4-10-carrying-out-test-difference-between-study-guide/)).
- **Intervals and tests agree.** A claimed value outside a C% interval would be rejected by a two-sided test at α = 1 − C/100; for differences, the key value is 0 ([4.3](/advanced-course-resources/statistics/4-3-justifying-claim-based-on-confidence-study-guide/), [4.8](/advanced-course-resources/statistics/4-8-justifying-claim-based-on-confidence-study-guide/)).
- **Width depends on confidence and n.** Higher confidence widens the interval; width is roughly proportional to 1/√n ([4.3](/advanced-course-resources/statistics/4-3-justifying-claim-based-on-confidence-study-guide/)).
- **Conclusions follow the design.** Random sampling supports generalising; random assignment supports cause and effect. Conclusions use "convincing evidence", never "proves" ([4.5](/advanced-course-resources/statistics/4-5-carrying-out-test-population-mean-study-guide/), [4.10](/advanced-course-resources/statistics/4-10-carrying-out-test-difference-between-study-guide/)).

## Key relationships and methods

| If the question asks you to… | Use… | Watch out for… |
|---|---|---|
| Find a probability about x̄ (σ known) | Normal model, σx̄ = σ/√n | Using σ instead of σ/√n |
| Find a probability about x̄₁ − x̄₂ | Normal model, √(σ₁²/n₁ + σ₂²/n₂) | Adding standard deviations |
| Estimate one mean or a mean difference | One-sample t-interval, x̄ ± t* s/√n, df = n − 1 | z* in place of t*; treating paired data as two samples |
| Estimate μ₁ − μ₂ | Two-sample t-interval, (x̄₁ − x̄₂) ± t* √(s₁²/n₁ + s₂²/n₂) | Stating no order of subtraction |
| Test a claim about μ or μd | One-sample t-test, t = (x̄ − μ₀)/(s/√n) | Hypotheses written with x̄ |
| Test whether two means differ | Two-sample t-test, t = (x̄₁ − x̄₂)/SE | df = n₁ + n₂ − 2 (that is only the upper limit) |
| Check conditions | Random; n ≤ 10% of N; normal population, n ≥ 30, or no strong skew or outliers | Checking only one group of two |
| Judge a claim from an interval | Is the claimed value (or 0) inside the interval? | "Most of the interval is positive" |
| State what can be concluded | Random sample: generalise. Random assignment: cause and effect | Causation from random samples |

## Question 1 (multiple choice · mixed)

From a random sample of 25 days, a 95% t-interval for the true mean number of customers per hour at a fictional bakery is (18.2, 23.8). What would a two-sided t-test of H₀: μ = 24 at α = 0.05 on the same data give?

- (A) p-value < 0.05, so reject H₀
- (B) p-value > 0.05, so fail to reject H₀, because 24 is very close to the interval
- (C) p-value exactly 0.05
- (D) It cannot be predicted without carrying out the test.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** 24 is outside the 95% interval, so a two-sided test at α = 0.05 rejects it. Check: x̄ = 21.0, MOE = 2.8, t* = 2.064, so SE = 1.3567; t = (21.0 − 24)/1.3567 = −2.21 and p-value = 0.0368.

- (B) treats "close" as "inside".
- (C) would happen only if 24 were exactly an endpoint.
- (D) misses the interval–test link.

Topics: 4.3 (justifying a claim), 4.5 (carrying out a test).
</details>

## Question 2 (multiple choice · mixed)

A fictional agronomist will compare the mean yields of two maize varieties using independent random samples of plots, 100 plots in total. From past seasons, σ₁ = 10 kg and σ₂ = 20 kg. Which split gives the **smallest** standard deviation of x̄₁ − x̄₂?

- (A) 50 and 50
- (B) 33 and 67
- (C) 67 and 33
- (D) 20 and 80

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** √(10²/33 + 20²/67) = 3.0001 kg, the smallest. More plots go where yields vary more.

- (A) gives √(2 + 8) = 3.1623 kg.
- (C) gives 3.6897 kg.
- (D) gives √(5 + 5) = 3.1623 kg.

Topics: 4.1 (σ/√n), 4.6 (adding variances).
</details>

## Question 3 (multiple choice · mixed)

Which study is matched with the correct procedure?

- (A) Twenty randomly chosen cyclists each ride a course with a heavy helmet and with a light helmet, in random order; compare mean times with a two-sample t-test.
- (B) A random sample of 200 voters; estimate the proportion who support a plan with a one-sample t-interval for a mean.
- (C) Independent random samples of 40 flats in each of two towns; estimate the difference in mean monthly rent with a two-sample t-interval for μ₁ − μ₂.
- (D) A random sample of 35 batteries; test whether the mean life is below 10 hours with a two-sample t-test comparing the sample with 10.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Two independent groups and a quantitative response.

- (A) is paired: use a one-sample t-test on the differences.
- (B) is a categorical variable, so it needs a one-sample z-interval for a proportion (Unit 3).
- (D) is one sample compared with a claimed value: a one-sample t-test.

Topics: 4.2, 4.4, 4.7, 4.9 (choosing a procedure).
</details>

## Question 4 (constructed response · mixed)

A fictional drone company made 8,000 delivery flights last year. It claims flight times have mean 42 minutes and standard deviation 5 minutes, with a left-skewed distribution. An engineer will select a random sample of 40 flights.

(a) Assuming the claim is true, describe the sampling distribution of x̄ and find P(x̄ ≤ 40.5).
(b) The sample gives x̄ = 40.1 minutes and s = 5.6 minutes. Construct a 95% confidence interval for the true mean flight time.
(c) Does the interval support the company's claimed mean? Explain.
(d) Explain why (a) uses a normal model with σ but (b) uses t with s.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Mean μx̄ = **42 minutes**. Standard deviation σx̄ = 5/√40 = **0.7906 minutes** (random sample; 40 ≤ 800 ✓). Shape **approximately normal**: the population is skewed, but n = 40 ≥ 30. z = (40.5 − 42)/0.7906 = −1.897, so P(x̄ ≤ 40.5) = **0.0289**.

**(b)** One-sample t-interval for μ = the true mean flight time of all 8,000 flights. Conditions: random ✓; 40 ≤ 800 ✓; n = 40 ≥ 30 ✓. df = 39, t* = 2.023. SE = 5.6/√40 = 0.8854. MOE = 2.023 × 0.8854 = 1.7910. Interval: **(38.31, 41.89) minutes**.

**(c)** **No.** 42 minutes is above the whole interval, so it is not plausible: convincing evidence that the true mean is less than 42 minutes. This agrees with (a): a sample mean of 40.1 would be rare if the claim were true.

**(d)** In (a), σ is part of the claim, so x̄ is standardised with σ/√n and a normal model. In (b), σ is unknown and s replaces it, adding variability, so the heavier-tailed t-distribution with 39 df gives the critical value.

| Point | What earns it |
|---|---|
| 1 | Mean 42 and standard deviation 0.7906, with independence checks |
| 1 | Approximately normal because n ≥ 30, and P(x̄ ≤ 40.5) ≈ 0.0289 |
| 1 | Correct t-interval (38.31, 41.89) with df, t* and SE |
| 1 | 42 outside the interval, so convincing evidence the mean is below 42 |
| 1 | σ known gives z; s for unknown σ gives t with heavier tails |

**Total: 5 points.** Topics: 4.1, 4.2, 4.3.
</details>

## Question 5 (constructed response · mixed)

A fictional baking competition had 300 entries. Twelve were chosen at random and each was scored out of 20 by two judges, A and B.

| Entry | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Judge A | 15 | 12 | 17 | 14 | 16 | 11 | 18 | 13 | 15 | 16 | 14 | 17 |
| Judge B | 14 | 12 | 15 | 15 | 16 | 10 | 16 | 13 | 14 | 14 | 15 | 15 |

(a) Explain why a two-sample t-test is not appropriate.
(b) Define the parameter, state hypotheses to test whether the judges differ on average, and check conditions.
(c) Carry out the test at α = 0.05 and conclude.
(d) Construct a 95% confidence interval. Is it consistent with (c)?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Both scores come from the **same entry**, so they are linked. Pairing removes the large variation between entries (11 to 18). A two-sample test ignores it; here it would give p ≈ 0.35 and hide the difference.

**(b)** d = A − B: 1, 0, 2, −1, 0, 1, 2, 0, 1, 2, −1, 2. μd = the true mean difference (Judge A − Judge B) in score for all 300 entries. H₀: μd = 0, Hₐ: μd ≠ 0. Random sample ✓. 12 ≤ 30 ✓. n = 12 < 30: Q1 = 0, Q3 = 2, IQR = 2, fences −3 and 5; no outliers and no strong skew ✓.

**(c)** x̄d = 0.75 points, sd = 1.1382. SE = 1.1382/√12 = 0.3286. t = 0.75/0.3286 = **2.28**, df = 11, p-value = **0.0433**. Because 0.0433 ≤ 0.05, reject H₀. There is convincing evidence that the true mean score differs between Judge A and Judge B for all entries in the competition.

**(d)** t* = 2.201, MOE = 2.201 × 0.3286 = 0.7232. Interval: **(0.03, 1.47) points**. It excludes 0, matching the decision to reject at α = 0.05. All values are positive: Judge A seems to score higher, perhaps only slightly.

| Point | What earns it |
|---|---|
| 1 | Paired because both scores come from the same entry |
| 1 | μd defined with order of subtraction and population; two-sided hypotheses |
| 1 | All three conditions, with the check on the differences |
| 1 | t ≈ 2.28, df = 11, p ≈ 0.0433 |
| 1 | Decision comparing p with α, and conclusion in context about Hₐ |
| 1 | Interval (0.03, 1.47), with 0 excluded linked to the test |

**Total: 6 points.** Topics: 4.2, 4.3, 4.4, 4.5.
</details>

## Question 6 (constructed response · mixed)

A travel website took independent random samples of nightly hotel-room prices in two fictional cities, Alder (2,400 listings) and Birch (3,100). Both samples are right-skewed with no extreme outliers.

| City | n | x̄ ($) | s ($) |
|---|---|---|---|
| Alder | 40 | 118.5 | 32.4 |
| Birch | 45 | 104.2 | 27.9 |

(a) Name the procedure, define the parameter and check conditions.
(b) Construct a 95% confidence interval.
(c) Interpret the interval and the confidence level.
(d) Does it support the claim that Alder rooms cost more on average?
(e) What sample sizes would roughly halve the margin of error?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Two-sample t-interval for μ_A − μ_B, the difference (Alder − Birch) in true mean nightly price of all listings. Two independent random samples ✓. 10%: 40 ≤ 240 and 45 ≤ 310 ✓. Both n ≥ 30, so the skew is acceptable ✓.

**(b)** Point estimate 118.5 − 104.2 = $14.30. SE = √(32.4²/40 + 27.9²/45) = √(26.2440 + 17.2980) = $6.5986. Technology: df = 77.51, t* = 1.991, MOE = $13.14. Interval: **($1.16, $27.44)**. (Conservative df = 39 gives t* = 2.023 and ($0.95, $27.65).)

**(c)** We are 95% confident that the interval from $1.16 to $27.44 captures the true difference (Alder − Birch) in mean nightly price of all listings in the two cities. In repeated pairs of random samples of these sizes, about 95% of intervals built this way would capture the true difference.

**(d)** **Yes.** Every value is positive and 0 is excluded: convincing evidence that Alder's mean price is higher.

**(e)** Width is roughly proportional to 1/√n, so **multiply both sample sizes by 4**: about 160 and 180 listings (still within 10%: 160 ≤ 240, 180 ≤ 310).

| Point | What earns it |
|---|---|
| 1 | Procedure, parameter with order and populations, all three conditions |
| 1 | Correct SE and interval with df and t* |
| 1 | Interval interpreted about the population mean difference |
| 1 | Confidence level interpreted as a long-run capture rate |
| 1 | Claim supported because 0 is outside and all values are positive |
| 1 | Four times each sample size, linked to 1/√n |

**Total: 6 points.** Topics: 4.3, 4.6, 4.7, 4.8.
</details>

## Question 7 (constructed response · mixed)

A fictional materials lab made 20 identical concrete test blocks and randomly assigned 10 to a mix with a new additive and 10 to the standard mix. Compressive strength after 28 days, in megapascals (MPa):

- **Additive:** 41.2, 43.5, 39.8, 44.1, 42.7, 40.9, 45.3, 42.0, 43.8, 41.6
- **Standard:** 39.5, 41.8, 38.2, 40.6, 42.3, 39.1, 40.0, 41.2, 37.9, 40.4

(a) Set up a test of whether the additive increases mean strength at α = 0.05: parameters, hypotheses, conditions.
(b) Find t, df and the p-value.
(c) State the decision and conclusion, and what the design allows.
(d) Would a 90% interval for μ_add − μ_std contain 0? Explain, then check.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** μ_add and μ_std = the true mean 28-day strength (MPa) of blocks like these with each mix. H₀: μ_add − μ_std = 0, Hₐ: μ_add − μ_std > 0. Two-sample t-test. Random assignment ✓. 10%: not needed (experiment). Both n = 10 < 30, so check both groups. Additive: Q1 = 41.2, Q3 = 43.8, fences 37.30 and 47.70. Standard: Q1 = 39.1, Q3 = 41.2, fences 35.95 and 44.35. No outliers and no strong skew ✓.

**(b)** x̄_add = 42.49, s = 1.6908; x̄_std = 40.10, s = 1.4568 MPa. Difference 2.39 MPa. SE = √(1.6908²/10 + 1.4568²/10) = 0.7058. t = 2.39/0.7058 = **3.39**. Technology: df = 17.61, p-value = **0.0017**. (Conservative df = 9: 3.250 < 3.39 < 3.690, so 0.0025 < p < 0.005.)

**(c)** Because 0.0017 ≤ 0.05, reject H₀. There is convincing evidence that the true mean strength is greater with the additive. With random assignment, the additive **caused** the higher mean strength, for blocks like these.

**(d)** **No.** A one-sided test at α = 0.05 matches a 90% interval (5% in each tail). The test rejected H₀ in the positive direction, so the 90% interval should lie above 0. Check: t* = 1.736, MOE = 1.2253, interval **(1.16, 3.62) MPa**.

| Point | What earns it |
|---|---|
| 1 | Parameters in context with one-sided hypotheses |
| 1 | Random assignment, 10% not needed, both groups checked |
| 1 | t ≈ 3.39 with SE shown |
| 1 | df and p ≈ 0.0017 (or a correct table range) |
| 1 | Decision with comparison and conclusion about Hₐ in context |
| 1 | Cause and effect from random assignment, limited to blocks like these |
| 1 | 90% interval excludes 0, linked to the one-sided test at 0.05 |

**Total: 7 points.** Topics: 4.8, 4.9, 4.10.
</details>

## How did you do?

Mark your answers with the rubrics and note the topics under each question you missed. Re-read those study guides, then tick off each checklist. If many topics went wrong, use the [Unit 4 diagnostic](/advanced-course-resources/statistics/unit-4-diagnostic/) to find the gaps.

Topic checklists: [4.1](/advanced-course-resources/statistics/4-1-sampling-distributions-sample-means-checklist/) · [4.2](/advanced-course-resources/statistics/4-2-constructing-confidence-interval-population-mean-checklist/) · [4.3](/advanced-course-resources/statistics/4-3-justifying-claim-based-on-confidence-checklist/) · [4.4](/advanced-course-resources/statistics/4-4-setting-up-test-population-mean-checklist/) · [4.5](/advanced-course-resources/statistics/4-5-carrying-out-test-population-mean-checklist/) · [4.6](/advanced-course-resources/statistics/4-6-sampling-distributions-difference-between-two-checklist/) · [4.7](/advanced-course-resources/statistics/4-7-constructing-confidence-interval-difference-between-checklist/) · [4.8](/advanced-course-resources/statistics/4-8-justifying-claim-based-on-confidence-checklist/) · [4.9](/advanced-course-resources/statistics/4-9-setting-up-test-difference-between-checklist/) · [4.10](/advanced-course-resources/statistics/4-10-carrying-out-test-difference-between-checklist/)
