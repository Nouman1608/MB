---
resourceId: "mb-ap-stats-3.8-practice"
title: "Potential Errors When Performing Tests: Practice Questions (Statistics 3.8)"
description: "Seven original Marlbridge practice questions on Type I and Type II errors, α, power, the factors that affect power and the consequences of errors, with worked solutions and suggested rubrics."
course: "statistics"
unit: 3
topics: ["3.8"]
resourceType: "practice-questions"
prerequisites:
  - "Writing hypotheses and making a decision in a test for a proportion"
prerequisiteResources: ["mb-ap-stats-3.8-study-guide"]
learningObjectives:
  - "Identify and describe Type I and Type II errors in context"
  - "Find the probabilities of Type I and Type II errors from α and power"
  - "Predict how changes to a study affect power and error probabilities"
  - "Use the consequences of errors to justify α and sample size"
skills: ["2", "3", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "none-needed"
calculatorNote: "Only subtraction is needed: P(Type II) = 1 − power. Power values are given."
related: ["mb-ap-stats-3.8-study-guide", "mb-ap-stats-3.8-revision-notes", "mb-ap-stats-3.8-checklist"]
next: "mb-ap-stats-3.8-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written answers."
  - "Every error description must say what the test concluded and what is actually true, in context."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All contexts and numbers are fictional. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: tests are one-sample z-tests for a population proportion whose conditions are met; power values are given (they come from software) and refer to the stated true value of p; "others held constant" applies whenever one feature of a study changes.

## Question 1 (multiple choice · foundation)

The canteen at the fictional Hollin School will add a vegetarian lunch every day if more than 40% of students would choose it. The manager tests H₀: p = 0.40 against Hₐ: p > 0.40, where p is the proportion of all Hollin students who would choose the vegetarian lunch. Which of these is a Type I error?

- (A) The test finds convincing evidence that more than 40% of students would choose it, when really 40% would.
- (B) The test does not find convincing evidence that more than 40% would choose it, when really more than 40% would.
- (C) The test finds convincing evidence that more than 40% would choose it, when really more than 40% would.
- (D) The test does not find convincing evidence that more than 40% would choose it, when really 40% would.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** A Type I error is rejecting H₀ (finding convincing evidence for Hₐ) when H₀ is true.

- (B) is a Type II error: H₀ is not rejected, but Hₐ is true.
- (C) is a correct decision: the test finds evidence for Hₐ, and Hₐ is true.
- (D) is also a correct decision: the test does not reject H₀, and H₀ is true.
</details>

## Question 2 (multiple choice · foundation)

A test is carried out at α = 0.05. If the true proportion is 0.62, its power is 0.86. If the true proportion is 0.62, what is the probability of a Type II error?

- (A) 0.05
- (B) 0.14
- (C) 0.86
- (D) 0.95

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** P(Type II error) = 1 − power = 1 − 0.86 = 0.14.

- (A) is α, the probability of a Type I error.
- (C) is the power itself: the probability of correctly rejecting H₀ when p = 0.62.
- (D) is 1 − α, the probability of correctly failing to reject H₀ when H₀ is true. It has nothing to do with a Type II error.
</details>

## Question 3 (multiple choice · core)

A researcher plans a test for a population proportion. Which change would decrease the probability of a Type II error **without** increasing the probability of a Type I error?

- (A) Increasing the significance level from 0.05 to 0.10
- (B) Decreasing the significance level from 0.05 to 0.01
- (C) Increasing the sample size from 150 to 400
- (D) Decreasing the sample size from 150 to 100

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** A larger sample makes the standard error smaller, so the power increases and the Type II error probability decreases. The Type I error probability stays equal to α, which has not changed.

- (A) does lower the Type II error probability, but it raises the Type I error probability from 0.05 to 0.10.
- (B) lowers the Type I error probability but makes rejection harder, so the Type II error probability rises.
- (D) increases the standard error, which lowers the power and raises the Type II error probability.
</details>

## Question 4 (constructed response · core)

The fictional Marsh Lane School will run a late bus if more than 30% of its students would use it. A random sample of students is surveyed, and the school tests H₀: p = 0.30 against Hₐ: p > 0.30, where p is the proportion of all Marsh Lane students who would use a late bus.

(a) Describe a Type I error and a Type II error in context.
(b) Give one consequence of each error for the school or its students.
(c) The head teacher says the budget is very tight. Which error is she more worried about, and should she choose α = 0.01 or α = 0.10? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** **Type I:** the school finds convincing evidence that more than 30% of its students would use a late bus, when really the proportion is 30%. **Type II:** the school does not find convincing evidence that more than 30% would use it, when really more than 30% would.

**(b)** **Type I consequence:** the school pays for a late bus that fewer students use than planned, wasting money. **Type II consequence:** the school does not run a bus that enough students need, so those students cannot stay for clubs or must find other transport.

**(c)** With a tight budget, wasting money on an under-used bus (a **Type I error**) is the bigger worry. She should choose the smaller significance level, **α = 0.01**, because α is the probability of a Type I error.

| Point | What earns it |
|---|---|
| 1 | Type I error described with both the conclusion and the truth, in context |
| 1 | Type II error described with both the conclusion and the truth, in context |
| 1 | A sensible consequence for each error, linked to the correct error |
| 1 | Identifies the Type I error **and** links it to choosing α = 0.01 because α = P(Type I) |

Do not award point 1 or 2 for "rejecting H₀ when it is true" with no context.
</details>

## Question 5 (calculation · core)

The fictional FitWell gym chain will run a loyalty scheme if more than 45% of members attend at least twice a week. It plans a test of H₀: p = 0.45 against Hₐ: p > 0.45 at α = 0.10, using a random sample of 66 members. Software shows that if the true proportion is 0.55, the power of the test is 0.64.

(a) What is the probability of a Type I error?
(b) If p = 0.55, what is the probability of a Type II error?
(c) Interpret the power of 0.64 in context.
(d) The gym changes α to 0.05 and keeps n = 66. State what happens to the probability of a Type I error, the power and the probability of a Type II error.
(e) Instead, the gym keeps α = 0.10 and doubles the sample size. What happens to the power? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** P(Type I error) = α = **0.10**.

**(b)** P(Type II error) = 1 − 0.64 = **0.36**.

**(c)** If the true proportion of FitWell members who attend at least twice a week is 0.55, there is a 0.64 probability that the test will find convincing evidence that the proportion is greater than 0.45.

**(d)** P(Type I error) falls to 0.05. Rejecting H₀ becomes harder, so the power **decreases** and the probability of a Type II error **increases**. (For reference, the software gives power ≈ 0.50 at α = 0.05.)

**(e)** The power **increases**. A larger sample gives a smaller standard error, so the sampling distribution of p̂ is narrower and a true proportion of 0.55 is easier to tell apart from 0.45. (For reference, the software gives power ≈ 0.85 with n = 132.)

| Point | What earns it |
|---|---|
| 1 | P(Type I) = 0.10 and P(Type II) = 0.36 |
| 1 | Power interpreted in context: probability of finding convincing evidence for Hₐ, given p = 0.55 |
| 1 | All three directions correct in (d) |
| 1 | Power increases in (e), with a reason (smaller standard error or less variability in p̂) |

Exact power values are not needed in (d) and (e); the direction and the reason are what count.
</details>

## Question 6 (constructed response · stretch)

An ice-cream van owner in the fictional seaside town of Porth Ellin tests whether more than 25% of her customers choose her new lemon flavour. She uses H₀: p = 0.25 and Hₐ: p > 0.25 with α = 0.05.

(a) On Saturday a random sample gives a p-value of 0.023. State the decision. Which type of error could she have made? Describe it in context.
(b) On Sunday a different random sample gives a p-value of 0.31. State the decision. Which type of error could she have made? Describe it in context.
(c) A friend says, "With a p-value of 0.023 the chance that you made an error is 0.023." Explain why this is wrong.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** 0.023 < 0.05, so she rejects H₀. Only a **Type I error** is possible: she has found convincing evidence that more than 25% of her customers choose lemon, when really the proportion is 25%.

**(b)** 0.31 > 0.05, so she fails to reject H₀. Only a **Type II error** is possible: she has not found convincing evidence that more than 25% of her customers choose lemon, when really more than 25% do.

**(c)** The p-value is calculated *assuming* H₀ is true. It is the probability of a sample result at least as extreme as hers if p = 0.25; it is not the probability that H₀ is true or that she made an error. The probability of a Type I error was fixed in advance at α = 0.05, and whether an error actually happened depends on the true proportion, which she does not know.

| Point | What earns it |
|---|---|
| 1 | Correct decision in (a) and identifies Type I as the only possible error |
| 1 | Type I error described in context with conclusion and truth |
| 1 | Correct decision in (b) and Type II error described in context |
| 1 | Explains that the p-value assumes H₀ is true and is not the probability of an error |
</details>

## Question 7 (explanation · stretch)

A conservation group in the fictional Ardley Forest will start a nest-protection programme if more than 20% of the forest's songbird nests are damaged by a parasite. It plans to inspect a random sample of nests and test H₀: p = 0.20 against Hₐ: p > 0.20.

(a) The group says that a Type II error would be the more serious mistake. Explain why it might think this.
(b) Based on (a), recommend a significance level and a sample-size strategy. Justify each.
(c) With its chosen plan, the power against p = 0.30 is 0.90. Interpret this value and find the probability of a Type II error if p = 0.30.
(d) Explain why the group should think about the consequences of each error **before** inspecting any nests.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** A Type II error means the group does not find convincing evidence that more than 20% of nests are damaged when really more than 20% are. The programme would not start, and bird populations could fall, which may be hard to reverse. A Type I error would only mean spending money on a programme that is not strictly needed.

**(b)** Use a **larger α, such as 0.10**, because a larger α makes rejection easier and so lowers the probability of a Type II error. Also inspect **as many nests as possible**, because a larger sample increases the power without increasing the Type I error probability.

**(c)** If the true proportion of damaged nests in Ardley Forest is 0.30, there is a 0.90 probability that the test will find convincing evidence that more than 20% are damaged. P(Type II error) = 1 − 0.90 = **0.10**.

**(d)** α must be chosen before the data are collected, and the consequences of a Type I error decide how small it should be. The sample size must also be fixed before data collection, and the consequences of a Type II error decide how large it needs to be. Choosing these after seeing the data would make the test's error probabilities meaningless.

| Point | What earns it |
|---|---|
| 1 | Type II consequence described in context and compared with the Type I consequence |
| 1 | Recommends a larger α **and** a larger sample, each with a correct reason |
| 1 | Power interpreted in context and P(Type II) = 0.10 |
| 1 | Links α to Type I consequences and n to Type II consequences, both decided in advance |
</details>

## How did you do?

- **Q1 or Q4(a) wrong:** re-read "Type I and Type II errors" and the four-outcome table in the [study guide](/advanced-course-resources/statistics/3-8-potential-errors-when-performing-tests-study-guide/).
- **Q2 or Q5(a)–(c) wrong:** revisit "The probability of each error" and Worked example 2.
- **Q3 or Q5(d)–(e) wrong:** revisit "What affects the power" and Figure 1.
- **Q4(c) or Q7 wrong:** revisit "Consequences decide the design" and Worked example 1.
- **Q6 wrong:** remember that the decision tells you which error is possible.

Then tick off the [topic checklist](/advanced-course-resources/statistics/3-8-potential-errors-when-performing-tests-checklist/).
