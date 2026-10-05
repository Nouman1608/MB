---
resourceId: "mb-ap-stats-4.5-practice"
title: "Carrying Out a Test for a Population Mean or Population Mean Difference: Practice Questions (Statistics 4.5)"
description: "Seven original Marlbridge practice questions on t test statistics, p-values, their interpretation and conclusions for a mean or matched-pairs mean difference, with worked solutions and rubrics."
course: "statistics"
unit: 4
topics: ["4.5"]
resourceType: "practice-questions"
prerequisites:
  - "Setting up a one-sample t-test (Topic 4.4)"
prerequisiteResources: ["mb-ap-stats-4.5-study-guide"]
learningObjectives:
  - "Calculate the t test statistic, degrees of freedom and p-value for a mean or a mean difference"
  - "Interpret a p-value in context, assuming the null hypothesis is true"
  - "Make a decision by comparing the p-value with α and write a conclusion in terms of Hₐ"
  - "Find and correct errors in a student's test"
skills: ["3", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Use the T-Test function or a t cdf with df = n − 1. Round t to 2 decimal places and p-values to 4 decimal places."
related: ["mb-ap-stats-4.5-study-guide", "mb-ap-stats-4.5-revision-notes", "mb-ap-stats-4.5-checklist"]
next: "mb-ap-stats-4.5-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "Every p-value interpretation and conclusion must be in context."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All contexts and data are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: σ is unknown; p-values come from a t-distribution with df = n − 1; quartiles split the ordered data at the median, leaving the median out of both halves when n is odd; round t to 2 decimal places and p-values to 4. A graphing calculator is assumed.

## Question 1 (multiple choice · foundation)

A fictional furniture company says its bookshelf takes 50 minutes to assemble, on average. A consumer group times a random sample of 25 buyers and finds x̄ = 52.6 minutes and s = 4.5 minutes. What is the test statistic for H₀: μ = 50?

- (A) t ≈ 0.58
- (B) t ≈ 2.83
- (C) t ≈ 2.89
- (D) t ≈ 14.44

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The standard error is s / √n = 4.5 / √25 = 0.9. So t = (52.6 − 50) / 0.9 = 2.6 / 0.9 ≈ 2.89, with df = 24.

- (A) divides by s = 4.5 instead of the standard error s / √n.
- (B) uses √(n − 1) = √24 in the standard error. The degrees of freedom are n − 1, but the standard error uses √n.
- (D) divides s by n = 25 instead of √25, which makes the standard error far too small.
</details>

## Question 2 (multiple choice · core)

A one-sample t-test with n = 20 and Hₐ: μ ≠ μ₀ gives t = −1.85. What is the p-value?

- (A) 0.0400
- (B) 0.0643
- (C) 0.0799
- (D) 0.9600

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** df = 19. The test is two-sided, so the p-value = 2 × P(T ≤ −1.85) ≈ 2 × 0.0400 = 0.0799 (technology, unrounded).

- (A) is only one tail. A two-sided alternative counts results this extreme in both directions.
- (B) uses the standard normal curve: 2 × P(Z ≤ −1.85) ≈ 0.0643. With σ unknown, the t-distribution has heavier tails, so the correct p-value is larger.
- (D) is 1 − 0.0400, the area on the wrong side of t.
</details>

## Question 3 (multiple choice · core)

A fictional hospital canteen states that its lunchtime queue takes 6 minutes on average. A manager suspects it takes longer. In a random sample of 28 lunchtimes, the mean queue time is 6.9 minutes. A t-test of H₀: μ = 6 against Hₐ: μ > 6 gives a p-value of 0.024. Which is a correct interpretation of the p-value?

- (A) There is a 0.024 probability that the true mean queue time is 6 minutes.
- (B) Assuming the true mean queue time is 6 minutes, there is a 0.024 probability of getting a sample mean of 6.9 minutes or more in a random sample of 28 lunchtimes.
- (C) Assuming the true mean queue time is 6.9 minutes, there is a 0.024 probability of getting a sample mean of 6 minutes or less in a random sample of 28 lunchtimes.
- (D) 2.4% of lunchtime queues take 6.9 minutes or more.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** A p-value is calculated by assuming H₀ is true (μ = 6). It is the probability of a sample result at least as extreme as the one observed, in the direction of Hₐ (6.9 minutes or more).

- (A) treats the p-value as the probability that H₀ is true. The test assumes H₀; it cannot give the probability that H₀ is true.
- (C) assumes the sample value, not the null value, and looks in the wrong direction.
- (D) describes individual queues. The p-value is about the **mean** of a random sample of 28 lunchtimes.
</details>

## Question 4 (multiple choice · core)

A random sample of 22 of the 400 employees at a fictional firm rated their stress (0 to 100) before and after a mindfulness course. With d = before − after, a t-test of H₀: μd = 0 against Hₐ: μd > 0 gives t = 1.75 and a p-value of 0.047. The significance level chosen in advance was α = 0.01. Which conclusion is correct?

- (A) Because 0.047 < 0.05, reject H₀. There is convincing statistical evidence that the true mean stress rating falls after the course.
- (B) Because 0.047 > 0.01, fail to reject H₀. There is not convincing statistical evidence that the true mean difference (before − after) in stress rating for all employees at the firm is greater than 0.
- (C) Because 0.047 > 0.01, fail to reject H₀. There is convincing statistical evidence that the true mean difference (before − after) in stress rating is 0.
- (D) Because 0.047 > 0.01, fail to reject H₀. The sample mean difference in stress rating is not greater than 0.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Compare the p-value with the α chosen in advance: 0.047 > 0.01, so fail to reject H₀. The conclusion is about the parameter and the population, in terms of Hₐ, with "not convincing evidence".

- (A) uses α = 0.05 instead of the stated 0.01. Changing α after seeing the p-value is not allowed.
- (C) treats failing to reject as evidence **for** H₀. A test cannot show that μd = 0.
- (D) is about the sample, not the population, and it is false: t > 0 means the sample mean difference is greater than 0.
</details>

## Question 5 (constructed response · core)

Corvo Foods (fictional) labels its oat bars "210 kcal". A food inspector selects a random sample of 40 bars from a production run of 20,000 bars and measures the energy content of each. The sample gives x̄ = 213.4 kcal and s = 9.6 kcal.

(a) Do the data give convincing statistical evidence, at α = 0.05, that the true mean energy content of the bars in this run is different from 210 kcal? Carry out a complete test.
(b) Interpret the p-value in context.
(c) Would your decision change at α = 0.01? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)**

1. **Hypotheses.** μ = the true mean energy content (kcal) of all bars in this production run. H₀: μ = 210, Hₐ: μ ≠ 210, α = 0.05.
2. **Method and conditions.** One-sample t-test for a population mean. Random sample ✓; 40 ≤ 10% of 20,000 = 2,000 ✓; n = 40 ≥ 30 ✓.
3. **Calculations.** Standard error = 9.6 / √40 ≈ 1.5179 kcal. t = (213.4 − 210) / 1.5179 ≈ **2.24**, df = 39. p-value = 2 × P(T ≥ 2.24) ≈ **0.0309**.
4. **Conclusion.** Because 0.0309 < 0.05, reject H₀. There is convincing statistical evidence that the true mean energy content of all bars in this production run is different from 210 kcal.

**(b)** Assuming the true mean energy content of the bars in this run is 210 kcal, there is about a 0.0309 probability of getting a sample mean at least 3.4 kcal away from 210 kcal (213.4 or more, or 206.6 or less) in a random sample of 40 bars.

**(c)** Yes. 0.0309 > 0.01, so at α = 0.01 you would fail to reject H₀ and there would not be convincing evidence that the mean differs from 210 kcal.

| Point | What earns it |
|---|---|
| 1 | Parameter defined in context and correct two-sided hypotheses; procedure named with all three conditions checked |
| 1 | Correct t (≈ 2.24) with df = 39 and a two-sided p-value (≈ 0.031) |
| 1 | Decision with linkage (p-value compared with α) and a conclusion about the true mean, in context, in terms of Hₐ |
| 1 | p-value interpretation that assumes μ = 210 and describes "at least as far from 210 in either direction"; correct answer to (c) |

A one-sided p-value (0.0154) loses point 2; "proves" loses point 3.
</details>

## Question 6 (constructed response · stretch)

A fictional car-rental company has 400 cars of one model. It selects a random sample of 9 of them. Each car is driven on the same test route once with standard tyres and once with low-resistance tyres, in a random order. The fuel economy (km per litre) is:

| Car | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|
| Standard | 14.2 | 16.8 | 12.5 | 15.1 | 13.9 | 17.4 | 15.6 | 12.9 | 14.7 |
| Low-resistance | 14.9 | 17.1 | 13.4 | 14.9 | 14.8 | 17.1 | 16.5 | 13.0 | 15.0 |

(a) Explain why a matched-pairs analysis is appropriate.
(b) Do the data give convincing evidence, at α = 0.05, that low-resistance tyres increase mean fuel economy for cars of this model? Carry out a complete test.
(c) A classmate analyses the two rows as two independent samples and gets a p-value of about 0.30. Explain why the matched-pairs p-value is much smaller.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Each car was measured with both kinds of tyre, so the two values for one car belong together as a pair.

**(b)**

1. **Hypotheses.** Let d = low-resistance − standard. μd = the true mean difference (low-resistance − standard) in fuel economy, in km per litre, for all 400 cars of this model. H₀: μd = 0, Hₐ: μd > 0, α = 0.05.
2. **Method and conditions.** One-sample t-test for a population mean difference.
   - Random: random sample of cars, with the tyre order randomized. ✓
   - 10%: 9 ≤ 10% of 400 = 40. ✓
   - Sample data: the differences are 0.7, 0.3, 0.9, −0.2, 0.9, −0.3, 0.9, 0.1, 0.3. Ordered: −0.3, −0.2, 0.1, 0.3, 0.3, 0.7, 0.9, 0.9, 0.9. Q1 = −0.05, Q3 = 0.9, IQR = 0.95, fences −1.475 and 2.325. No outliers and no strong skewness. ✓
3. **Calculations.** x̄d = 3.6 / 9 = 0.40 km/L, sd ≈ 0.4743 km/L. Standard error = 0.4743 / √9 ≈ 0.1581. t = 0.40 / 0.1581 ≈ **2.53**, df = 8. p-value = P(T ≥ 2.53) ≈ **0.0176**.
4. **Conclusion.** Because 0.0176 < 0.05, reject H₀. There is convincing statistical evidence that the true mean fuel economy of cars of this model is greater with low-resistance tyres than with standard tyres (μd > 0).

**(c)** Fuel economy varies a lot from car to car (12.5 to 17.4 km/L). The two-sample analysis counts this as random error, so its standard error is large. Pairing compares each car with itself, so the differences vary much less (sd ≈ 0.47 km/L) and t is much larger.

| Point | What earns it |
|---|---|
| 1 | (a) Same car measured under both conditions, so the data are paired |
| 1 | Correct μd with the order of subtraction, one-sided hypotheses, and all conditions checked using the **differences** |
| 1 | Correct x̄d, sd, t ≈ 2.53 with df = 8, and p-value ≈ 0.018 |
| 1 | Decision with linkage and conclusion about the true mean difference for this model, in context; (c) explains that pairing removes car-to-car variation |

Checking the two rows for skewness instead of the differences does not earn the second point.
</details>

## Question 7 (explanation · stretch)

A fictional e-reader is advertised to last 30 hours on one charge. A product tester checks a random sample of 12 e-readers from a large shipment. The battery lives show no strong skewness and no outliers; x̄ = 28.7 hours and s = 2.9 hours. A student tests H₀: μ = 30 against Hₐ: μ < 30 at α = 0.05 and writes:

> z = (28.7 − 30) / (2.9 / √12) = −1.55. p-value = P(Z ≤ −1.55) = 0.0602. Since 0.0602 > 0.05, we accept H₀. The e-readers last 30 hours on average.

(a) Identify the error in the calculation and find the correct p-value.
(b) Identify two problems with the conclusion, then write a correct conclusion.
(c) Does correcting the calculation change the decision? Explain why the correct p-value is larger.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** σ is unknown and the standard error uses s, so the test statistic follows a t-distribution with df = 12 − 1 = 11, not the standard normal. t = −1.3 / 0.8372 ≈ −1.55, and the p-value = P(T ≤ −1.55) ≈ **0.0744**.

**(b)** First, "accept H₀" is wrong: failing to reject is not evidence that H₀ is true. Second, "the e-readers last 30 hours on average" is definitive and not stated in terms of Hₐ. A correct conclusion: because the p-value of 0.0744 is greater than α = 0.05, we fail to reject H₀. There is not convincing statistical evidence that the true mean battery life of e-readers in this shipment is less than 30 hours.

**(c)** No: 0.0744 > 0.05, so the decision is still to fail to reject H₀. The t-distribution has heavier tails than the standard normal, because using s instead of σ adds extra variability, so the same test statistic gives a larger tail area.

| Point | What earns it |
|---|---|
| 1 | Names the t-distribution with df = 11 as the correct reference and gives p-value ≈ 0.074 |
| 1 | Identifies "accept H₀" and the definitive, non-parameter wording as errors, and writes a correct conclusion with linkage, about the true mean, in terms of Hₐ |
| 1 | Decision unchanged, with the heavier-tails reason |
</details>

## How did you do?

- **Q1 wrong:** revisit "The test statistic" in the [study guide](/advanced-course-resources/statistics/4-5-carrying-out-test-population-mean-study-guide/). The standard error is s / √n.
- **Q2 or Q7(a) wrong:** revisit "Finding the p-value" and Worked example 3. Use the t-distribution and the right tail(s).
- **Q3 or Q5(b) wrong:** revisit "Interpreting the p-value". Start with "Assuming the true mean is…".
- **Q4 or Q7(b) wrong:** revisit "Decision and conclusion". Compare with the stated α; never accept H₀.
- **Q6 wrong:** work through Worked example 2 again, especially the differences and the conditions.

Then tick off the [topic checklist](/advanced-course-resources/statistics/4-5-carrying-out-test-population-mean-checklist/).
