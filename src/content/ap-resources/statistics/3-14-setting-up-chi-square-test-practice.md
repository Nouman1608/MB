---
resourceId: "mb-ap-stats-3.14-practice"
title: "Setting Up a Chi-Square Test for Homogeneity or Independence: Practice Questions (Statistics 3.14)"
description: "Seven original Marlbridge practice questions on chi-square distributions, choosing homogeneity or independence, writing hypotheses and checking conditions, with suggested rubrics."
course: "statistics"
unit: 3
topics: ["3.14"]
resourceType: "practice-questions"
prerequisites:
  - "Reading two-way tables (Topics 2.1 and 2.2)"
prerequisiteResources: ["mb-ap-stats-3.14-study-guide"]
learningObjectives:
  - "Describe chi-square distributions and what large and small values of the statistic mean"
  - "Choose the correct chi-square test from the study design"
  - "Write hypotheses in context and check all three conditions"
  - "Decide what to do when the expected counts condition fails"
skills: ["2", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Expected counts are given where you need them. Round expected counts to 2 decimal places."
related: ["mb-ap-stats-3.14-study-guide", "mb-ap-stats-3.14-revision-notes", "mb-ap-stats-3.14-checklist"]
next: "mb-ap-stats-3.14-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written answers."
  - "Decide the test from the design, then write hypotheses about populations in context."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All contexts and data are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: the expected counts condition requires **all** expected counts to be greater than 5; expected counts are given to 2 decimal places where you need them (they come from (row total × column total) ÷ table total, which you will practise in Topic 3.15). You do not need to calculate a chi-square statistic or p-value in this set.

## Question 1 (multiple choice · foundation)

Which statement about chi-square distributions is correct?

- (A) They are symmetric and centred at 0.
- (B) They take only positive values and are skewed right, and the skew becomes less pronounced as the degrees of freedom increase.
- (C) They take only positive values and are skewed right, and the skew becomes more pronounced as the degrees of freedom increase.
- (D) They are skewed left, because most values of the statistic are large.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The statistic adds squared distances divided by positive expected counts, so it cannot be negative. The curves have a long right tail, and with more degrees of freedom they become less skewed.

- (A) describes the standard normal distribution, used for z-tests, not chi-square distributions.
- (C) reverses the effect of the degrees of freedom.
- (D) gets the direction of skew wrong. Most values are small and a few are large, which gives a long **right** tail.
</details>

## Question 2 (multiple choice · core)

A fictional town council selects a random sample of 500 adult residents. Each resident is asked their type of home (house, flat, other) and how often they recycle (always, sometimes, never). The council wants to know whether type of home and recycling habit are related among the town's adults. Which procedure is appropriate?

- (A) A chi-square test for homogeneity
- (B) A chi-square test for independence
- (C) A two-sample z-test for the difference between two proportions
- (D) A one-sample z-test for a proportion

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** There is one random sample from one population, and two categorical variables are recorded for each resident. The question is about an association.

- (A) needs separate samples (or treatment groups) compared on one variable. Here the council did not choose how many residents of each home type to sample.
- (C) compares one proportion in two groups. Both variables here have three categories.
- (D) tests a single proportion against a claimed value; there is no claimed value here.
</details>

## Question 3 (multiple choice · core)

A fictional language school randomly assigns 120 volunteer learners to three vocabulary apps, 40 per app. After six weeks each learner's test result is recorded as fail, pass or distinction. Which pair of hypotheses is appropriate?

- (A) H₀: The distribution of test result is the same for the three apps in this sample. Hₐ: It is different in this sample.
- (B) H₀: There is no association between the app and the test result among all learners. Hₐ: The app causes the test result.
- (C) H₀: There is no difference in the distribution of test result (fail, pass, distinction) across the three apps for learners like these. Hₐ: There is a difference in the distribution of test result across the three apps for learners like these.
- (D) H₀: The distributions of test result for the three apps are all different. Hₐ: They are all the same.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** This is a randomized experiment with three treatments and one categorical response, so it is a test for homogeneity. (C) names the variable, its categories and the treatments, and refers to learners like these rather than to the sample.

- (A) is about the sample. You can see the sample; hypotheses are about the treatments' effects on learners like these.
- (B) uses the language of independence and puts "causes" into Hₐ. The test asks whether the distributions differ; causation comes from the design when you conclude.
- (D) swaps H₀ and Hₐ. H₀ is always the "no difference" statement.
</details>

## Question 4 (multiple choice · core)

Two random samples of the same size are each summarised in a two-way table with the same rows and columns, and a chi-square statistic is found for each. The values are 1.3 and 17.8. Which is correct?

- (A) The value 1.3 gives stronger evidence against H₀, because it is closer to 0.
- (B) The value 17.8 gives stronger evidence against H₀, because its observed counts are further from the expected counts, relative to those expected counts.
- (C) Neither value can be interpreted, because chi-square statistics must be between −1 and 1.
- (D) The value 17.8 shows that H₀ is false.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** χ² grows as the observed counts move away from the counts expected under H₀. A larger value is stronger evidence against H₀.

- (A) reverses the meaning. A value near 0 means the data are close to what H₀ predicts.
- (C) confuses χ² with a correlation coefficient. χ² has no upper limit and is never negative.
- (D) uses definitive language. Even a large χ² is evidence, judged by a p-value; it does not prove anything.
</details>

## Question 5 (constructed response · core)

A fictional town has about 40,000 adults. A vet practice wants to know whether pet ownership is related to the type of home among the town's adults. It takes a random sample of 250 adults and records each person's type of home and pet ownership.

| | Dog | Cat | No pet | Total |
|---|---|---|---|---|
| House | 62 | 38 | 50 | 150 |
| Flat | 18 | 30 | 52 | 100 |
| Total | 80 | 68 | 102 | 250 |

The expected counts are: House 48.00, 40.80, 61.20; Flat 32.00, 27.20, 40.80.

(a) Name the appropriate test and justify your choice.
(b) State the hypotheses.
(c) Check the conditions.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** A **chi-square test for independence**: there is one random sample from one population (the town's adults), and two categorical variables (type of home and pet ownership) are recorded for each person.

**(b)** H₀: There is no association between type of home and pet ownership among adults in the town. Hₐ: There is an association between type of home and pet ownership among adults in the town.

**(c)** Randomization: a random sample of the town's adults. 10% condition: 250 ≤ 10% of 40,000 = 4,000. Expected counts: the smallest is 27.20, so all are greater than 5. All conditions are met.

| Point | What earns it |
|---|---|
| 1 | Independence, justified by one sample and two variables recorded per individual |
| 1 | Both hypotheses in context, naming both variables and the population |
| 1 | Randomization and 10% conditions checked with numbers |
| 1 | Expected counts condition checked by comparing the smallest expected count (27.20) with 5 |

Point 4 is not earned for checking the observed counts.
</details>

## Question 6 (constructed response · stretch)

A fictional school runs a smaller version of the experiment in Question 3: 90 volunteer learners are randomly assigned to App A, App B or App C, 30 per app.

| | Fail | Pass | Distinction | Total |
|---|---|---|---|---|
| App A | 6 | 20 | 4 | 30 |
| App B | 3 | 19 | 8 | 30 |
| App C | 5 | 17 | 8 | 30 |
| Total | 14 | 56 | 20 | 90 |

The expected counts are 4.67 (fail), 18.67 (pass) and 6.67 (distinction) for every app.

(a) Name the appropriate test and state the hypotheses.
(b) A student checks the 10% condition: "90 is less than 10% of all learners." Comment on this.
(c) Check the expected counts condition. What should the school do?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** A **chi-square test for homogeneity**, because the learners were randomly assigned to three treatments and one categorical response is recorded. H₀: There is no difference in the distribution of test result (fail, pass, distinction) across the three apps for learners like these. Hₐ: There is a difference in the distribution of test result across the three apps for learners like these.

**(b)** The check is not needed. The 10% condition applies when sampling without replacement from a population. Here the data come from a randomized experiment with volunteers, so the condition is unnecessary (and the volunteers were not a random sample of "all learners" anyway).

**(c)** The expected count for fail is 4.67 for each app, which is not greater than 5. The expected counts condition is **not** met, so the school should not carry out a chi-square test on this table. It could run a larger experiment: with 40 learners per app and the same overall proportions, the expected count for fail would be about 6.22. Combining "fail" with "pass" would hide the fail category, which is probably what the school cares about most, so a larger experiment is the better fix.

| Point | What earns it |
|---|---|
| 1 | Homogeneity with hypotheses in context, naming the response variable and the treatments |
| 1 | Explains that the 10% condition is unnecessary for a randomized experiment |
| 1 | Identifies 4.67 < 5 (not greater than 5) and states the condition fails |
| 1 | A sensible remedy (larger groups, or a justified combination of categories) |
</details>

## Question 7 (explanation · stretch)

A fictional cinema chain wants to know about film-genre preference (action, comedy, drama) and age group (under 30, 30 and over) among its loyalty-card members. Two analysts propose different designs.

- **Design 1:** take one random sample of 400 members and record both the age group and the preferred genre of each.
- **Design 2:** take a random sample of 200 members under 30 and a separate random sample of 200 members aged 30 and over, and record each person's preferred genre.

(a) Which chi-square test suits each design? Explain.
(b) Write the null hypothesis for each design.
(c) A student says: "The two designs give the same kind of two-way table, so it does not matter which test you name." Explain why the student is wrong.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Design 1: **independence**. One sample from one population, with two variables recorded for each member; the number in each age group is not fixed in advance. Design 2: **homogeneity**. Two separate random samples, one from each age-group population, compared on one variable (preferred genre); the analysts fixed the sample sizes at 200 each.

**(b)** Design 1: H₀: There is no association between age group and preferred film genre among the chain's loyalty-card members. Design 2: H₀: There is no difference in the distribution of preferred film genre between loyalty-card members under 30 and those aged 30 and over.

**(c)** The calculations are the same, but the tests answer differently worded questions about different things: an association between two variables in one population, or a comparison of one variable's distribution across populations. The hypotheses, the randomization condition and the conclusion all depend on the design, so naming the wrong test gives the wrong hypotheses and the wrong conclusion.

| Point | What earns it |
|---|---|
| 1 | Both tests correct, with design-based reasons |
| 1 | Both null hypotheses in context, each in the correct form |
| 1 | Explains that the design, not the table, decides the test and changes the hypotheses and conclusion |
</details>

## How did you do?

- **Q1 or Q4 wrong:** re-read "What the chi-square statistic measures" and "Chi-square distributions" in the [study guide](/advanced-course-resources/statistics/3-14-setting-up-chi-square-test-study-guide/), with Figure 1.
- **Q2, Q5(a) or Q7(a) wrong:** revisit "Homogeneity or independence?". Ask how the data were collected.
- **Q3 or a hypothesis wrong:** revisit "Writing the hypotheses". Talk about populations, in context.
- **Q5(c) or Q6 wrong:** revisit "The three conditions" and Worked example 2.

Then tick off the [topic checklist](/advanced-course-resources/statistics/3-14-setting-up-chi-square-test-checklist/).
