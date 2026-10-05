---
resourceId: "mb-ap-stats-3.7-practice"
title: "Carrying Out a Test for a Population Proportion: Practice Questions (Statistics 3.7)"
description: "Seven original Marlbridge practice questions on the one-proportion z-test: test statistic, p-values for each alternative, decisions at a significance level and conclusions in context."
course: "statistics"
unit: 3
topics: ["3.7"]
resourceType: "practice-questions"
prerequisites:
  - "Writing hypotheses and checking conditions for a one-proportion test"
prerequisiteResources: ["mb-ap-stats-3.7-study-guide"]
learningObjectives:
  - "Calculate the z test statistic and p-value for a test about one proportion"
  - "Choose the correct tail or tails from the alternative hypothesis"
  - "Make a decision by comparing the p-value with α"
  - "Write and critique conclusions that are in context, in terms of Hₐ and non-definitive"
skills: ["3", "4"]
studyMinutes: 50
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Use 1-PropZTest or a normal cdf to check your work. Round z to 2 decimal places and p-values to 4 decimal places."
related: ["mb-ap-stats-3.7-study-guide", "mb-ap-stats-3.7-revision-notes", "mb-ap-stats-3.7-checklist"]
next: "mb-ap-stats-3.7-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every conclusion must link the p-value to α and be in context."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All contexts and data are fictional. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: the test is a one-sample z-test for a population proportion; the standard error uses p₀; p-values come from the standard normal distribution (technology with unrounded z, so a table may differ in the last decimal place); round z to 2 decimal places and p-values to 4. A graphing calculator is assumed.

## Question 1 (multiple choice · foundation)

A fictional phone-repair chain, FixPoint, says that 90% of its repairs are finished on the same day. A consumer group takes a random sample of 120 recent repairs and finds that 102 were finished on the same day. It tests H₀: p = 0.90 against Hₐ: p < 0.90. What is the value of the test statistic?

- (A) z ≈ −1.83
- (B) z ≈ −1.53
- (C) z ≈ −0.17
- (D) z ≈ 1.83

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** p̂ = 102 ÷ 120 = 0.85. Standard error = √[0.90 × 0.10 ÷ 120] ≈ 0.02739. z = (0.85 − 0.90) ÷ 0.02739 ≈ −1.83.

- (B) uses p̂ in the standard error: √[0.85 × 0.15 ÷ 120] ≈ 0.0326. A test assumes H₀ is true, so the standard error must use p₀ = 0.90.
- (C) forgets to divide by n inside the square root: −0.05 ÷ √0.09 ≈ −0.17.
- (D) subtracts the wrong way round (p₀ − p̂). The sample proportion is below 0.90, so z must be negative.
</details>

## Question 2 (multiple choice · core)

In a test of H₀: p = p₀ against Hₐ: p ≠ p₀, the test statistic is z = 1.70. What is the p-value?

- (A) 0.0446
- (B) 0.0891
- (C) 0.9109
- (D) 0.9554

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The alternative is two-sided, so the p-value counts both tails: P(Z ≤ −1.70) + P(Z ≥ 1.70) = 2 × 0.0446 = 0.0891.

- (A) is only the right tail, P(Z ≥ 1.70). That would be the p-value for Hₐ: p > p₀.
- (C) is 1 − 0.0891, the area **between** −1.70 and 1.70, which is the area that is *less* extreme than z.
- (D) is P(Z ≤ 1.70), the area to the left of z. That would be the p-value for Hₐ: p < p₀.
</details>

## Question 3 (multiple choice · core)

A fictional garden-centre chain, Bloomfield, claims that 30% of its customers buy compost. A manager suspects the true proportion is higher. A random sample of customers gives a test of H₀: p = 0.30 against Hₐ: p > 0.30 with p-value 0.12. The significance level is α = 0.05. Which conclusion is correct?

- (A) Because 0.12 > 0.05, we accept H₀. The proportion of Bloomfield's customers who buy compost is 0.30.
- (B) There is a 12% probability that H₀ is true, so we fail to reject H₀.
- (C) Because 0.12 > 0.05, we fail to reject H₀. There is not convincing statistical evidence that the true proportion of Bloomfield's customers who buy compost is greater than 0.30.
- (D) Because 0.12 > 0.05, we reject H₀. There is convincing statistical evidence that the true proportion of Bloomfield's customers who buy compost is greater than 0.30.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The p-value is greater than α, so we fail to reject H₀, and the conclusion is stated in terms of Hₐ, in context, about the true proportion.

- (A) "accepts" H₀ and claims the proportion *is* 0.30. A large p-value is not evidence that H₀ is true.
- (B) misinterprets the p-value. It is a probability about the data, calculated assuming H₀ is true; it is not the probability that H₀ is true.
- (D) has the decision rule backwards. We reject H₀ only when the p-value is less than or equal to α.
</details>

## Question 4 (calculation · core)

A fictional charity, Greenway Trust, knows that 8% of people on its mailing list of 40,000 usually reply to a printed appeal. It designs a new appeal and wants to know whether the reply rate is higher. It sends the new appeal to a random sample of 600 people from the list; 63 reply. The conditions for the test have been checked.

(a) State the hypotheses, defining the parameter.
(b) Calculate the test statistic and the p-value.
(c) State a conclusion at α = 0.05.
(d) Would the conclusion be different at α = 0.01? Explain.

<details>
<summary>Worked solution</summary>

**(a)** Let p = the true proportion of people on Greenway Trust's mailing list who would reply to the new appeal. H₀: p = 0.08; Hₐ: p > 0.08.

**(b)** p̂ = 63 ÷ 600 = 0.105. Standard error = √[0.08 × 0.92 ÷ 600] ≈ 0.01108. z = (0.105 − 0.08) ÷ 0.01108 ≈ **2.26**. p-value = P(Z ≥ 2.26) ≈ **0.0120**.

(For reference, the conditions: random sample; 600 ≤ 10% of 40,000 = 4,000; np₀ = 48 and n(1 − p₀) = 552 are both at least 10.)

**(c)** Because the p-value of 0.0120 is less than α = 0.05, we reject H₀. There is convincing statistical evidence that the true proportion of people on the mailing list who would reply to the new appeal is greater than 0.08.

**(d)** Yes. 0.0120 > 0.01, so at α = 0.01 we would fail to reject H₀: there would not be convincing statistical evidence that the reply rate is greater than 0.08. This is why α must be chosen **before** the data are collected.

Suggested mark points (4): 1 for hypotheses with p defined in context; 1 for z with the formula and p₀ in the standard error; 1 for the right-tail p-value; 1 for both decisions linked to α and stated in context.
</details>

## Question 5 (constructed response · core)

The registrar of the fictional Halvering College (6,400 students) states that 35% of its students live on campus. A student journalist asks: *Is the proportion of Halvering students who live on campus different from 35%?* She selects a random sample of 220 students; 66 of them live on campus.

Carry out an appropriate test at α = 0.05 and answer the journalist's question.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**Hypotheses.** Let p = the true proportion of all Halvering College students who live on campus. H₀: p = 0.35; Hₐ: p ≠ 0.35; α = 0.05.

**Method and conditions.** One-sample z-test for a population proportion.

- Random sample of students: stated.
- 10%: 220 ≤ 10% of 6,400 = 640.
- Normality: np₀ = 220(0.35) = 77 ≥ 10 and n(1 − p₀) = 220(0.65) = 143 ≥ 10.

**Calculations.** p̂ = 66 ÷ 220 = 0.30. Standard error = √[0.35 × 0.65 ÷ 220] ≈ 0.03216. z = (0.30 − 0.35) ÷ 0.03216 ≈ **−1.55**. p-value = 2 × P(Z ≤ −1.55) ≈ **0.1200**. (A table with z = −1.55 gives about 0.1211.)

**Conclusion.** Because the p-value of 0.1200 is greater than α = 0.05, we fail to reject H₀. There is not convincing statistical evidence that the true proportion of Halvering College students who live on campus is different from 0.35.

**Answer to the question.** The sample does not give convincing evidence that the registrar's figure of 35% is wrong. It does not prove that the figure is exactly 35%.

| Point | What earns it |
|---|---|
| 1 | Hypotheses with p defined in context (true proportion, students, on campus) and a two-sided Hₐ |
| 1 | Names the one-sample z-test for a proportion and checks all three conditions with numbers |
| 1 | Correct z (with p₀ in the standard error) and a two-sided p-value |
| 1 | Decision linked to α, conclusion in context in terms of Hₐ, with no claim that H₀ is true |

Do not award point 3 for a one-sided p-value (about 0.06); the question asks "different from". Do not award point 4 for "the proportion is 35%" or "we accept H₀".
</details>

## Question 6 (constructed response · stretch)

A fictional city transport office believes that more than half of its residents would use a new night-bus route. It plans a test of H₀: p = 0.50 against Hₐ: p > 0.50 at α = 0.05. In a random sample of 250 residents, 115 say they would use the route.

(a) Calculate the test statistic and the p-value.
(b) Explain why the p-value is so large.
(c) After seeing the data, an officer suggests changing the alternative to Hₐ: p < 0.50 "because that would give a small p-value". Explain why this is not acceptable.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** p̂ = 115 ÷ 250 = 0.46. Standard error = √[0.50 × 0.50 ÷ 250] ≈ 0.03162. z = (0.46 − 0.50) ÷ 0.03162 ≈ **−1.26**. Because Hₐ is p > 0.50, the p-value is the **right** tail: P(Z ≥ −1.26) ≈ **0.8970**. (A table with z = −1.26 gives about 0.8962.)

**(b)** The alternative says p is greater than 0.50, but the sample proportion (0.46) is *below* 0.50. Evidence for Hₐ would be a large positive z. Almost 90% of the null distribution lies at or above −1.26, so data like these are very common when p = 0.50. The data give no support at all to the office's belief.

**(c)** Hypotheses and α must be set **before** looking at the data, from the question the study was designed to answer. Choosing Hₐ to match the data makes the result look more surprising than it really is, so the p-value no longer means what it claims to mean. The office's question was "more than half", so Hₐ: p > 0.50 is the correct alternative.

| Point | What earns it |
|---|---|
| 1 | Correct z ≈ −1.26 with p₀ in the standard error |
| 1 | Right-tail p-value ≈ 0.897 (not 0.103) |
| 1 | Explains that p̂ is on the opposite side of p₀ from Hₐ |
| 1 | Explains that hypotheses must be chosen before the data, so switching Hₐ is not valid |
</details>

## Question 7 (explanation · stretch)

A fictional library service asks: *Do more than 40% of its members borrow at least one e-book per month?* It tests H₀: p = 0.40 against Hₐ: p > 0.40 at α = 0.01, using a random sample of members. The p-value is 0.003.

(a) Write a full conclusion for the test.
(b) Explain, in context, what the significance level α = 0.01 means.
(c) A student writes: "Since the p-value is 0.003, there is a 0.3% chance that 40% of members borrow e-books." Explain what is wrong with this statement.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Because the p-value of 0.003 is less than α = 0.01, we reject H₀. There is convincing statistical evidence that the true proportion of the library service's members who borrow at least one e-book per month is greater than 0.40. So the answer to the investigative question is yes: the data give convincing evidence that more than 40% of members do this. The result is statistically significant at the 1% level.

**(b)** α = 0.01 is the probability, chosen in advance, of rejecting H₀ when it is actually true. If exactly 40% of members borrowed e-books, a test like this would wrongly conclude "more than 40%" only 1% of the time.

**(c)** The p-value is not the probability that H₀ is true. It is the probability of getting a sample result at least as extreme as this one (this far above 0.40, or further) **assuming** that the true proportion is 0.40. A correct version: "If 40% of members borrowed e-books, there would be only a 0.003 probability of a sample proportion at least as large as the one observed."

| Point | What earns it |
|---|---|
| 1 | Decision linked to α with both values |
| 1 | Conclusion in context about the true proportion of members, in terms of Hₐ, non-definitive |
| 1 | α described as the probability of rejecting H₀ when H₀ is true, in context |
| 1 | Identifies that the p-value assumes H₀ and is about the data, not about H₀ being true |
</details>

## How did you do?

- **Q1 wrong:** re-read "The test statistic" in the [study guide](/advanced-course-resources/statistics/3-7-carrying-out-test-population-proportion-study-guide/). Use p₀ in the standard error.
- **Q2 or Q6(a) wrong:** revisit "Finding the p-value" and Figure 1. The tail comes from Hₐ.
- **Q3 or Q7 wrong:** revisit "Writing the conclusion" and the misconceptions list.
- **Q4(d) or Q6(c) wrong:** revisit "Significance level and the decision": α and Hₐ are fixed in advance.
- **Q5 incomplete:** compare your answer with Worked example 2, part by part.

Then tick off the [topic checklist](/advanced-course-resources/statistics/3-7-carrying-out-test-population-proportion-checklist/).
