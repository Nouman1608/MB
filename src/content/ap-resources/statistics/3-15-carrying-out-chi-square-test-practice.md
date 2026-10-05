---
resourceId: "mb-ap-stats-3.15-practice"
title: "Carrying Out a Chi-Square Test for Homogeneity or Independence: Practice Questions (Statistics 3.15)"
description: "Seven original Marlbridge practice questions on expected counts, the chi-square statistic, degrees of freedom, p-values and conclusions, with worked solutions and suggested rubrics."
course: "statistics"
unit: 3
topics: ["3.15"]
resourceType: "practice-questions"
prerequisites:
  - "Writing hypotheses and checking conditions for a chi-square test (Topic 3.14)"
prerequisiteResources: ["mb-ap-stats-3.15-study-guide"]
learningObjectives:
  - "Calculate expected counts, the chi-square statistic, degrees of freedom and the p-value for a two-way table"
  - "Interpret a chi-square p-value in context, assuming the null hypothesis is true"
  - "Carry out a complete chi-square test for homogeneity or independence and conclude in context"
  - "Explain how sample size affects the chi-square statistic and the p-value"
skills: ["3", "4"]
studyMinutes: 50
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Use the chi-square test function or a chi-square cdf to check your work. Round χ² to 2 decimal places and p-values to 4 decimal places unless told otherwise."
related: ["mb-ap-stats-3.15-study-guide", "mb-ap-stats-3.15-revision-notes", "mb-ap-stats-3.15-checklist"]
next: "mb-ap-stats-3.15-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
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

These are **original Marlbridge practice questions**, not past exam questions. All contexts and data are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: expected count = (row total × column total) ÷ table total; the expected counts condition requires **all** expected counts to be greater than 5; χ² has (rows − 1)(columns − 1) degrees of freedom; round χ² to 2 decimal places and p-values to 4 decimal places. A graphing calculator is assumed.

## Question 1 (multiple choice · foundation)

A fictional gym takes a random sample of 250 members and records each member's membership type and preferred workout time.

| | Morning | Afternoon | Evening | Total |
|---|---|---|---|---|
| Standard | 60 | 35 | 65 | 160 |
| Premium | 40 | 15 | 35 | 90 |
| Total | 100 | 50 | 100 | 250 |

For a chi-square test for independence, what is the expected count for Premium members who prefer the evening?

- (A) 30
- (B) 35
- (C) 36
- (D) 64

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Expected count = (row total × column total) ÷ table total = (90 × 100) ÷ 250 = 36.

- (A) splits the 90 Premium members equally across the three times (90 ÷ 3), ignoring the column totals.
- (B) is the **observed** count, not the expected count.
- (D) uses the Standard row total: (160 × 100) ÷ 250 = 64. That is the expected count for Standard–Evening.
</details>

## Question 2 (multiple choice · core)

A chi-square test for independence is carried out on a two-way table with 4 rows and 3 columns of categories. All conditions are met and χ² = 13.1. Which gives the correct degrees of freedom and p-value?

- (A) df = 12, p-value ≈ 0.3618
- (B) df = 11, p-value ≈ 0.2868
- (C) df = 6, p-value ≈ 0.0415
- (D) df = 6, p-value ≈ 0.9585

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** df = (4 − 1)(3 − 1) = 6. The p-value is the right-tail area P(χ² ≥ 13.1) with df = 6, which is about 0.0415. (With a table: 12.592 < 13.1 < 14.449, so 0.025 < p-value < 0.05.)

- (A) uses df = rows × columns = 12.
- (B) uses df = number of cells − 1 = 11.
- (D) has the right df but gives the **left**-tail area P(χ² ≤ 13.1). Large χ² values are the evidence against H₀, so the p-value is the right tail.
</details>

## Question 3 (multiple choice · core)

A researcher takes independent random samples of customers at three fictional cafés and records the drink each orders (coffee, tea or other). A chi-square test for homogeneity gives χ² = 11.9, df = 4 and p-value = 0.018. Which is a correct interpretation of the p-value?

- (A) There is a 0.018 probability that the distribution of drink choice is the same at the three cafés.
- (B) Assuming the distribution of drink choice is the same for customers at all three cafés, there is a 0.018 probability of getting a χ² statistic of 11.9 or larger by chance in random sampling.
- (C) Assuming the distribution of drink choice is different at the three cafés, there is a 0.018 probability of getting a χ² statistic of 11.9 or larger by chance in random sampling.
- (D) Assuming the distribution of drink choice is the same for customers at all three cafés, there is a 0.018 probability of getting a χ² statistic of 11.9 or smaller by chance in random sampling.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** A p-value is calculated by assuming H₀ is true (the distributions are the same) and gives the probability of a χ² statistic at least as large as the one observed.

- (A) treats the p-value as the probability that H₀ is true. The p-value assumes H₀; it cannot give its probability.
- (C) assumes Hₐ instead of H₀.
- (D) describes the left tail. "As extreme or more extreme" means **larger** values of χ².
</details>

## Question 4 (calculation · core)

A random sample of 200 students at the fictional Brennick College was asked whether they live on campus and whether they cycle to classes.

| | Cycles | Does not cycle | Total |
|---|---|---|---|
| Lives on campus | 44 | 36 | 80 |
| Lives off campus | 46 | 74 | 120 |
| Total | 90 | 110 | 200 |

(a) Calculate the four expected counts for a chi-square test for independence.
(b) Calculate the chi-square statistic, showing the components.
(c) State the degrees of freedom and find the p-value.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** On campus–Cycles: 80 × 90 ÷ 200 = 36. On campus–Does not cycle: 80 × 110 ÷ 200 = 44. Off campus–Cycles: 120 × 90 ÷ 200 = 54. Off campus–Does not cycle: 120 × 110 ÷ 200 = 66. (Check: 36 + 44 = 80 and 36 + 54 = 90.)

**(b)** Components: (44 − 36)² ÷ 36 = 1.7778; (36 − 44)² ÷ 44 = 1.4545; (46 − 54)² ÷ 54 = 1.1852; (74 − 66)² ÷ 66 = 0.9697.
χ² = 1.7778 + 1.4545 + 1.1852 + 0.9697 ≈ **5.39**.

**(c)** df = (2 − 1)(2 − 1) = **1**. p-value = P(χ² ≥ 5.39) with df = 1 ≈ **0.0203**. A table gives 0.02 < p-value < 0.025 (5.412 > 5.39 > 5.024).

| Point | What earns it |
|---|---|
| 1 | All four expected counts correct, with the formula shown at least once |
| 1 | χ² ≈ 5.39 with the components (or the formula with values) shown |
| 1 | df = 1 **and** a right-tail p-value of about 0.0203 (or the correct table range) |

Do not award point 2 for χ² from percentages, or point 3 for a left-tail area (about 0.9797).
</details>

## Question 5 (constructed response · core)

A fictional plant nursery wants to know whether seedlings grow differently in three soil mixes. It randomly assigns 150 seedlings to Mix A, Mix B and Mix C, 50 per mix. After six weeks each seedling is classified as thriving, surviving or died.

| | Thriving | Surviving | Died | Total |
|---|---|---|---|---|
| Mix A | 33 | 12 | 5 | 50 |
| Mix B | 24 | 17 | 9 | 50 |
| Mix C | 18 | 16 | 16 | 50 |
| Total | 75 | 45 | 30 | 150 |

Do the data give convincing evidence that the distribution of six-week outcomes differs across the three soil mixes for seedlings like these? Carry out an appropriate test at α = 0.05.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**Hypotheses.** H₀: there is no difference in the distribution of six-week outcome for seedlings grown in Mix A, Mix B and Mix C. Hₐ: there is a difference in the distribution of six-week outcome across the three mixes. α = 0.05.

**Method and conditions.** Chi-square test for homogeneity (three treatments, one categorical variable).

- Randomization: the seedlings were randomly assigned to the mixes (a randomized experiment), so the 10% condition is not needed.
- Expected counts: each row has 50 seedlings, so every row has expected counts 50 × 75 ÷ 150 = 25, 50 × 45 ÷ 150 = 15 and 50 × 30 ÷ 150 = 10. All are greater than 5.

**Calculations.**

- Components: Mix A 2.56, 0.6, 2.5; Mix B 0.04, 0.2667, 0.1; Mix C 1.96, 0.0667, 3.6.
- χ² ≈ **11.69**, df = (3 − 1)(3 − 1) = **4**.
- p-value = P(χ² ≥ 11.69) ≈ **0.0198** (table: 0.01 < p-value < 0.02).

**Conclusion.** Because the p-value of 0.0198 is less than α = 0.05, we reject H₀. There is convincing statistical evidence that the distribution of six-week outcome differs across the three soil mixes for seedlings like these.

| Point | What earns it |
|---|---|
| 1 | Correct hypotheses in context, about the distribution of outcomes across the three mixes |
| 1 | Names the chi-square test for homogeneity **and** checks random assignment and that all expected counts are greater than 5 |
| 1 | Correct χ² ≈ 11.69, df = 4 and p-value ≈ 0.0198 (or table range), with expected counts or formula shown |
| 1 | Compares the p-value with α, rejects H₀ and concludes in context in terms of Hₐ, with non-definitive language |

A conclusion such as "this proves Mix A is best" does not earn point 4: the test shows the distributions differ, not which mix is best, and it never proves anything.
</details>

## Question 6 (constructed response · stretch)

A fictional streaming service has about 2 million subscribers. An analyst selects a random sample of 300 subscribers and records each one's plan and main viewing device.

| | TV | Laptop | Phone | Total |
|---|---|---|---|---|
| Basic | 52 | 20 | 28 | 100 |
| Standard | 44 | 36 | 40 | 120 |
| Family | 24 | 28 | 28 | 80 |
| Total | 120 | 84 | 96 | 300 |

Software output: χ² = 10.58, df = 4, p-value = 0.0317.

(a) Explain why a chi-square test for independence is appropriate, and state the hypotheses.
(b) Show that the expected count for Family–Laptop is 22.4. Given that this is the smallest expected count, check all the conditions.
(c) Interpret the p-value in context.
(d) The analyst chose α = 0.01 before collecting the data. What should she conclude?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** There is **one** random sample from **one** population (the service's subscribers), and **two** categorical variables are recorded for each subscriber (plan and device). That is the set-up for a test for independence. H₀: there is no association between plan and main viewing device among the service's subscribers. Hₐ: there is an association between plan and main viewing device among the service's subscribers.

**(b)** Expected count = 80 × 84 ÷ 300 = 22.4. Conditions: random sample of subscribers; 300 is far less than 10% of about 2 million; the smallest expected count is 22.4, so all expected counts are greater than 5.

**(c)** Assuming there is no association between plan and main viewing device among the service's subscribers, there is a 0.0317 probability of getting a χ² statistic of 10.58 or larger by chance in random sampling.

**(d)** Because the p-value of 0.0317 is greater than α = 0.01, we fail to reject H₀. There is not convincing statistical evidence of an association between plan and main viewing device among the service's subscribers.

| Point | What earns it |
|---|---|
| 1 | Justifies independence (one sample, two variables) **and** states both hypotheses in context |
| 1 | Shows 80 × 84 ÷ 300 = 22.4 and checks all three conditions |
| 1 | Interprets the p-value as a probability of χ² ≥ 10.58 assuming no association, in context |
| 1 | Compares 0.0317 with α = 0.01, fails to reject H₀ and concludes in context with "not convincing evidence" |

Rejecting H₀ because 0.0317 < 0.05 does not earn point 4: α was set at 0.01 in advance.
</details>

## Question 7 (explanation · stretch)

In Worked example 2 of the [study guide](/advanced-course-resources/statistics/3-15-carrying-out-chi-square-test-study-guide/), a random sample of 240 Ashby Lane Library members gave χ² = 4.03, df = 2 and p-value = 0.1331, so H₀ (no association between age group and preferred format) was not rejected at α = 0.05.

(a) Explain why the p-value of a chi-square test is always found from the right tail.
(b) Suppose instead the librarian had sampled 480 members, and **every** observed count came out exactly twice as large (so all the sample percentages are the same). What happens to the expected counts, χ², the degrees of freedom and the p-value?
(c) What would the conclusion be at α = 0.05? What does this show about the original result?

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Each component is a squared difference divided by a positive expected count, so χ² is never negative. Any departure from the expected counts, in any direction, makes χ² larger. So only large values of χ² are evidence for Hₐ, and the p-value is P(χ² ≥ observed value).

**(b)** Every row and column total doubles, so every expected count doubles (for example, 52.5 becomes 105). Each component becomes (2O − 2E)² ÷ 2E = 2 × (O − E)² ÷ E, so χ² doubles to about 8.07. The table still has 3 rows and 2 columns, so df = 2. The p-value falls to P(χ² ≥ 8.07) ≈ 0.0177.

**(c)** Because 0.0177 < 0.05, we would reject H₀: there would be convincing statistical evidence of an association between age group and preferred format among the library's members. The same percentages give convincing evidence with a larger sample. So the original "fail to reject" was a lack of evidence, not evidence of independence: 240 members were too few to rule out chance.

| Point | What earns it |
|---|---|
| 1 | Explains that χ² cannot be negative and grows with any departure from H₀, so only the right tail is evidence against H₀ |
| 1 | Expected counts double, χ² doubles to about 8.07, df stays 2 and p-value ≈ 0.0177 |
| 1 | Rejects H₀ at α = 0.05 in context **and** explains that failing to reject with n = 240 was a lack of evidence, not evidence of independence |
</details>

## How did you do?

- **Q1 or Q4(a) wrong:** re-read "Expected counts" in the [study guide](/advanced-course-resources/statistics/3-15-carrying-out-chi-square-test-study-guide/).
- **Q2 wrong:** revisit "Degrees of freedom and the null distribution" and "Finding the p-value".
- **Q3 or Q6(c) wrong:** revisit "Interpreting the p-value". Always start with "Assuming [H₀ in context]".
- **Q5 or Q6(d) incomplete:** a conclusion needs linkage (p-value and α), a decision and context in terms of Hₐ. Revisit "Decision and conclusion".
- **Q7 wrong:** revisit the misconceptions on right tails and on "accepting" H₀.

Then tick off the [topic checklist](/advanced-course-resources/statistics/3-15-carrying-out-chi-square-test-checklist/).
