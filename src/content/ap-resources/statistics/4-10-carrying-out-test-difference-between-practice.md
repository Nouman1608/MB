---
resourceId: "mb-ap-stats-4.10-practice"
title: "Carrying Out a Test for the Difference Between Two Population Means: Practice Questions (Statistics 4.10)"
description: "Seven original Marlbridge practice questions on the two-sample t-statistic, degrees of freedom, p-values, decisions and conclusions in context, with worked solutions and suggested rubrics."
course: "statistics"
unit: 4
topics: ["4.10"]
resourceType: "practice-questions"
prerequisites:
  - "Setting up a two-sample t-test (Topic 4.9)"
prerequisiteResources: ["mb-ap-stats-4.10-study-guide"]
learningObjectives:
  - "Calculate a two-sample t-statistic and p-value"
  - "Interpret a p-value in context, assuming equal population means"
  - "Make a decision and write a conclusion in context about Hₐ"
  - "Explain how degrees of freedom, test results and confidence intervals relate"
skills: ["3", "4"]
studyMinutes: 50
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Use the two-sample t-test function (not pooled). Round t to 2 decimal places and p-values to 4 decimal places. Conservative df with a t-table is also accepted."
related: ["mb-ap-stats-4.10-study-guide", "mb-ap-stats-4.10-revision-notes", "mb-ap-stats-4.10-checklist"]
next: "mb-ap-stats-4.10-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "Every conclusion must compare the p-value with α and be in context."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All data sets and studies are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: the conditions for a two-sample t-test are met unless the question asks you to check them; degrees of freedom come from technology (the conservative df with a t-table is also accepted, with a p-value range); α = 0.05 unless stated. A graphing calculator is assumed.

## Question 1 (multiple choice · foundation)

Independent random samples of students in two fictional districts took the same reading test.

| District | n | x̄ (points) | s (points) |
|---|---|---|---|
| Ardley | 40 | 84.0 | 10 |
| Bexford | 50 | 79.5 | 12 |

What is the value of the two-sample t-statistic for H₀: μ_A − μ_B = 0?

- (A) 1.37
- (B) 1.94
- (C) 2.73
- (D) 6.43

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** SE = √(10²/40 + 12²/50) = √(2.5 + 2.88) = √5.38 = 2.3195 points. t = (84.0 − 79.5 − 0) ÷ 2.3195 = 4.5 ÷ 2.3195 = 1.94.

- (A) adds the two standard errors: 10/√40 + 12/√50 = 3.278, giving t = 1.37. Variances add, not standard deviations.
- (C) divides the sum of the variances by n₁ + n₂ = 90: √(244/90) = 1.6465, giving t = 2.73. Each variance must be divided by its own sample size.
- (D) forgets to square the standard deviations: √(10/40 + 12/50) = 0.7, giving t = 6.43.
</details>

## Question 2 (multiple choice · core)

A consumer group took random samples of customers of two fictional internet providers, Fibrelink and Gridnet, and measured download speeds in megabits per second (Mbps). The hypotheses were H₀: μ_F − μ_G = 0 and Hₐ: μ_F − μ_G > 0. The sample means differed by 6.2 Mbps (Fibrelink higher), and the p-value was 0.031. Which is a correct interpretation of the p-value?

- (A) There is a 0.031 probability that the two providers have the same mean download speed.
- (B) Assuming the mean download speeds of all customers of the two providers are equal, there is a 0.031 probability of getting a difference in sample means (Fibrelink minus Gridnet) of 6.2 Mbps or more.
- (C) There is a 0.031 probability that Fibrelink's mean download speed is greater than Gridnet's.
- (D) Assuming Fibrelink has the greater mean download speed, there is a 0.031 probability of getting a difference in sample means of 6.2 Mbps or more.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The p-value is calculated assuming H₀ (equal population means) is true. It is the probability of a sample difference at least as large as the one observed, in the direction of Hₐ.

- (A) treats the p-value as the probability that H₀ is true. A p-value cannot give that.
- (C) treats the p-value as the probability that Hₐ is true, which is equally wrong.
- (D) assumes Hₐ instead of H₀. The whole calculation is done in the "no difference" world.
</details>

## Question 3 (multiple choice · core)

A furniture company randomly assigned volunteers to assemble a shelf using one of two instruction designs and recorded the assembly times. A two-sample t-test of H₀: μ₁ − μ₂ = 0 against Hₐ: μ₁ − μ₂ ≠ 0 gave a p-value of 0.083. Which conclusion is correct at α = 0.05?

- (A) Reject H₀. There is convincing evidence that the true mean assembly times differ for the two designs.
- (B) Fail to reject H₀. There is convincing evidence that the true mean assembly times are the same for the two designs.
- (C) Fail to reject H₀. There is not convincing evidence that the true mean assembly times differ for the two designs.
- (D) Accept H₀. The instruction design has no effect on the mean assembly time.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Since 0.083 > 0.05, we fail to reject H₀, and the conclusion is stated in terms of Hₐ with non-definitive language.

- (A) rejects H₀ even though the p-value is greater than α.
- (B) turns "not enough evidence of a difference" into "evidence of no difference". A test cannot show that means are equal.
- (D) "accepts" H₀ and claims there is no effect. Failing to reject H₀ does not prove it.
</details>

## Question 4 (multiple choice · stretch)

Two independent samples have sizes 15 and 22. A two-sided two-sample t-test gives t = 2.10, and technology reports df = 23.31 and a p-value of 0.047. A student without technology for df uses the conservative degrees of freedom instead. Which statement is correct?

- (A) The student uses df = 14, and gets a larger p-value, about 0.054.
- (B) The student uses df = 35, and gets a smaller p-value, about 0.043.
- (C) The student uses df = 14, and gets a smaller p-value, about 0.043.
- (D) The student uses df = 21, and the p-value is unchanged, because df does not affect the p-value.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Conservative df = the smaller of 15 − 1 and 22 − 1 = 14. A t-distribution with fewer df has heavier tails, so the same t gives a larger p-value: 2 × P(t ≥ 2.10) with df 14 is about 0.054. At α = 0.05 this would change the decision, which shows why the conservative choice never overstates the evidence.

- (B) uses n₁ + n₂ − 2 = 35, the upper limit for df, not the conservative value.
- (C) has the right df but the wrong direction: fewer df means heavier tails and a larger p-value.
- (D) uses the larger sample's n − 1, and df does affect the p-value.
</details>

## Question 5 (calculation · core)

A fruit buyer believes apples from the fictional Vale orchard are heavier on average than apples from the Westbrook orchard. She weighs a random sample of apples from this season's harvest at each orchard.

| Orchard | n | x̄ (g) | s (g) |
|---|---|---|---|
| Vale | 35 | 182.4 | 21.6 |
| Westbrook | 40 | 171.9 | 24.8 |

The hypotheses are H₀: μ_V − μ_W = 0 and Hₐ: μ_V − μ_W > 0, and the conditions are met.

(a) Calculate the test statistic and p-value.
(b) Interpret the p-value in context.
(c) State your decision and conclusion at α = 0.05.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Difference = 182.4 − 171.9 = 10.5 g. SE = √(21.6²/35 + 24.8²/40) = √(13.3303 + 15.3760) = √28.7063 = 5.3578 g. t = 10.5 ÷ 5.3578 = **1.96**. Technology: df = 73.00, p-value = P(t ≥ 1.96) = **0.0269**.

With a table: conservative df = 34; using the df = 30 row, 1.697 < 1.96 < 2.042, so 0.025 < p-value < 0.05.

**(b)** Assuming the mean mass of all this season's apples from the two orchards is the same, there is about a 0.0269 probability of getting a difference in sample means (Vale minus Westbrook) of 10.5 g or more by random sampling alone.

**(c)** Because 0.0269 ≤ 0.05, reject H₀. There is convincing evidence that the mean mass of all this season's Vale apples is greater than the mean mass of all this season's Westbrook apples.

| Point | What earns it |
|---|---|
| 1 | Correct SE (or its parts) and t = 1.96 |
| 1 | Correct p-value (0.0269, or a correct range from a table with the df stated) |
| 1 | p-value interpreted as a probability **assuming equal population means**, with the observed difference, direction and context |
| 1 | Explicit comparison with α, correct decision, and a conclusion in context about Hₐ using non-definitive language |

Do not award point 4 for "this proves Vale apples are heavier".
</details>

## Question 6 (constructed response · stretch)

A paint manufacturer wants to know whether two formulas **differ** in mean drying time. Eighteen identical wooden boards were randomly assigned, 9 to formula A and 9 to formula B. The drying times, in minutes, were:

- Formula A: 42, 38, 45, 40, 44, 39, 41, 43, 37
- Formula B: 36, 39, 34, 37, 33, 38, 35, 41, 31

Carry out an appropriate test at α = 0.05. Include all four steps.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**State.** μ_A and μ_B = the true mean drying time (minutes) of boards like these painted with formula A and with formula B. H₀: μ_A − μ_B = 0. Hₐ: μ_A − μ_B ≠ 0.

**Plan.** Two-sample t-test for μ_A − μ_B. Randomization: formulas randomly assigned to boards ✓. 10%: not needed (experiment). Sample data: both samples have 9 < 30, so check both. A: Q1 = 38.5, Q3 = 43.5, IQR = 5, fences 31 and 51. B: Q1 = 33.5, Q3 = 38.5, IQR = 5, fences 26 and 46. No outliers, and neither sample is strongly skewed ✓.

**Do.** x̄_A = 369 ÷ 9 = 41.0 min, s_A = 2.7386 min; x̄_B = 324 ÷ 9 = 36.0 min, s_B = 3.1225 min. SE = √(2.7386²/9 + 3.1225²/9) = √(0.8333 + 1.0833) = √1.9167 = 1.3844 min. t = 5.0 ÷ 1.3844 = **3.61**. Technology: df = 15.73, p-value = 2 × P(t ≥ 3.61) = **0.0024**. (Conservative df = 8 gives p-value = 0.0069.)

**Conclude.** Because 0.0024 ≤ 0.05, reject H₀. There is convincing evidence that the true mean drying time differs for the two formulas, for boards like these. The formulas were randomly assigned, so we can conclude that the formula **causes** the difference; the sample means suggest formula B dries faster on average.

| Point | What earns it |
|---|---|
| 1 | Parameters defined in context and two-sided hypotheses in μ |
| 1 | Procedure named, random assignment stated, and sample data condition checked for **both** samples |
| 1 | Correct t (3.61) and p-value (0.0024, or a correct range with df stated) |
| 1 | Explicit comparison with α, decision and conclusion in context about Hₐ, with a cause-and-effect statement justified by random assignment |
</details>

## Question 7 (explanation · stretch)

Random samples of 30 students at fictional School X and 28 at School Y recorded their mean homework time per night, in minutes. A two-sided two-sample t-test of H₀: μ_X − μ_Y = 0 gave t = 1.57 and a p-value of 0.1226. A student wrote:

> "Since 0.1226 > 0.05, we accept H₀. This proves that the mean homework times at the two schools are equal. There is a 12.26% probability that H₀ is true."

(a) Explain **two** errors in the student's statement.
(b) Without calculating it, say whether a 95% confidence interval for μ_X − μ_Y from the same data would contain 0. Explain.
(c) Write a correct conclusion.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** The two errors are below. ("Accept H₀" and "proves … equal" are the same error, so they count once.)

1. "Accept H₀" and "proves … are equal" are wrong. Failing to reject H₀ only means the data do not give convincing evidence of a difference; the means might still differ.
2. The p-value is **not** the probability that H₀ is true. It is the probability, **assuming** H₀ is true, of a difference in sample means at least as extreme as the one observed.

**(b)** Yes. A two-sided test at α = 0.05 that fails to reject H₀ matches a 95% interval that contains 0, when both use the same degrees of freedom. (For these data the interval is about (−0.58, 4.78) minutes.)

**(c)** Because 0.1226 > 0.05, we fail to reject H₀. There is not convincing evidence that the mean nightly homework time of all students at School X differs from that of all students at School Y.

| Point | What earns it |
|---|---|
| 1 | Explains why "accept H₀" or "proves equal" is wrong |
| 1 | Explains the correct meaning of the p-value as a probability calculated assuming H₀ |
| 1 | Says the interval contains 0, linked to the two-sided test failing to reject at α = 0.05 |
| 1 | Correct conclusion: comparison with α, decision, and "not convincing evidence" of a difference in population means, in context |
</details>

## How did you do?

- **Q1 wrong:** re-read "The test statistic" in the [study guide](/advanced-course-resources/statistics/4-10-carrying-out-test-difference-between-study-guide/). Square, divide by each n, add, then take one square root.
- **Q2 or Q5(b) wrong:** revisit "Interpreting the p-value" and its template.
- **Q3 or Q7 wrong:** revisit "Decision and conclusion" and the misconceptions list.
- **Q4 wrong:** revisit "Degrees of freedom and the p-value".
- **Q6 incomplete:** compare your four steps with Worked example 2.

Then tick off the [topic checklist](/advanced-course-resources/statistics/4-10-carrying-out-test-difference-between-checklist/).
