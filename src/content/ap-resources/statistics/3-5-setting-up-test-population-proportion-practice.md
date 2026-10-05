---
resourceId: "mb-ap-stats-3.5-practice"
title: "Setting Up a Test for a Population Proportion: Practice Questions (Statistics 3.5)"
description: "Seven original Marlbridge practice questions on defining the parameter, writing hypotheses and checking conditions for a one-sample z-test for a proportion, with suggested rubrics."
course: "statistics"
unit: 3
topics: ["3.5"]
resourceType: "practice-questions"
prerequisites:
  - "The sampling distribution of a sample proportion (Topic 3.2)"
prerequisiteResources: ["mb-ap-stats-3.5-study-guide"]
learningObjectives:
  - "Write a parameter definition and hypotheses for a one-sample z-test for a proportion"
  - "Choose a one-sided or two-sided alternative from the wording of a question"
  - "Verify the random, 10% and normality conditions in context and recognise when one fails"
  - "Find and correct errors in a student's test set-up"
skills: ["2", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Only multiplication is needed. Show each condition as a calculation with its result."
related: ["mb-ap-stats-3.5-study-guide", "mb-ap-stats-3.5-revision-notes", "mb-ap-stats-3.5-checklist"]
next: "mb-ap-stats-3.5-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written answers."
  - "Every parameter and every condition must be stated in context."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All organisations, places and data are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: p is the true population proportion; p₀ is the claimed value; the normality condition for a test is np₀ ≥ 10 and n(1 − p₀) ≥ 10; the 10% condition is n ≤ 0.10N when sampling without replacement. None of these questions asks you to carry out the test.

## Question 1 (multiple choice · foundation)

The fictional streaming service Lumen says that 30% of its subscribers watch at least one documentary each week. An analyst believes the true proportion is lower. Which pair of hypotheses should the analyst test?

- (A) H₀: p̂ = 0.30, Hₐ: p̂ < 0.30
- (B) H₀: p < 0.30, Hₐ: p = 0.30
- (C) H₀: p = 0.30, Hₐ: p < 0.30
- (D) H₀: p = 0.30, Hₐ: p ≠ 0.30

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** H₀ is Lumen's claim, the status quo, with an equals sign. The analyst's belief, "lower", is the one-sided alternative p < 0.30. Here p is the true proportion of all Lumen subscribers who watch at least one documentary a week.

- (A) uses the sample statistic p̂. Hypotheses are always about the population parameter p.
- (B) swaps the hypotheses. The equals sign belongs in H₀, and the researcher's belief belongs in Hₐ.
- (D) is two-sided. The analyst has a direction ("lower"), so the alternative should be one-sided.
</details>

## Question 2 (multiple choice · core)

A fictional museum says that 15% of its visitors buy something in the gift shop. A researcher plans a test of this claim using a random sample of 120 visitors, of whom 24 bought something. Which statement correctly checks the normality condition for the test?

- (A) 24 ≥ 10 and 96 ≥ 10, so the condition is met.
- (B) 120 × 0.15 = 18 ≥ 10 and 120 × 0.85 = 102 ≥ 10, so the condition is met.
- (C) n = 120 ≥ 30, so the condition is met.
- (D) 120 is less than 10% of all visitors to the museum, so the condition is met.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** A test assumes H₀ is true, so the normality check uses the expected counts under p₀ = 0.15: np₀ = 18 and n(1 − p₀) = 102. Both are at least 10.

- (A) uses the observed counts (np̂ and n(1 − p̂)). That is the check for a confidence interval, not for a test.
- (C) uses "n ≥ 30", which is not a condition for proportions.
- (D) is the 10% condition. It is needed, but it is a different condition and does not show normality.
</details>

## Question 3 (multiple choice · core)

A rail company runs the fictional Fenwick Line. It surveys a random sample of 240 of the line's weekday commuters to test whether more than 60% of them are satisfied with the service. Which is the best definition of the parameter?

- (A) p = the proportion of the 240 sampled commuters who are satisfied with the service
- (B) p = 0.60
- (C) p = the true proportion of all rail passengers in the country who are satisfied with their service
- (D) p = the true proportion of all weekday Fenwick Line commuters who are satisfied with the service

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The parameter is the unknown population value. This definition names the population (all weekday Fenwick Line commuters) and the response (satisfied with the service).

- (A) describes the sample statistic p̂, which is already known from the survey.
- (B) is the null value p₀, not the definition of the parameter.
- (C) names the wrong population. The sample came only from Fenwick Line commuters, so the test can only be about them.
</details>

## Question 4 (constructed response · foundation)

For each situation, define the parameter and write the null and alternative hypotheses. Say whether the test is one-sided or two-sided.

(a) A spice company claims that at least 95% of its jars are filled to the correct weight. A trading-standards officer suspects the true figure is lower.
(b) A school once found that 50% of its students walk to school. A new head teacher wants to know whether this proportion has changed.
(c) A garden centre found that 20% of first-time customers bought a plant. After a redesign, the manager believes the proportion has increased.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** p = the true proportion of all the company's jars that are filled to the correct weight. H₀: p = 0.95, Hₐ: p < 0.95. One-sided. "At least 95%" is tested at the boundary value 0.95.

**(b)** p = the true proportion of all students at the school who walk to school. H₀: p = 0.50, Hₐ: p ≠ 0.50. Two-sided, because "changed" could be in either direction.

**(c)** p = the true proportion of all first-time customers (after the redesign) who buy a plant. H₀: p = 0.20, Hₐ: p > 0.20. One-sided.

| Point | What earns it |
|---|---|
| 1 | (a) parameter in context, with H₀: p = 0.95 and Hₐ: p < 0.95 |
| 1 | (b) parameter in context, with H₀: p = 0.50 and Hₐ: p ≠ 0.50, identified as two-sided |
| 1 | (c) parameter in context, with H₀: p = 0.20 and Hₐ: p > 0.20 |

Do not award a point if the hypotheses use p̂, if H₀ uses an inequality without an equals sign, or if the parameter does not name a population. Accept H₀: p ≥ 0.95 in (a) if Hₐ is correct.
</details>

## Question 5 (constructed response · core)

The secretary of a fictional cycling club with 1,150 members says that 45% of members cycle to work at least once a week. The treasurer suspects that the true proportion is lower. She selects a random sample of 90 members, and 33 of them cycle to work at least once a week.

(a) Define the parameter and state the hypotheses.
(b) Name the appropriate test.
(c) Verify that the conditions for the test are met.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** p = the true proportion of all members of the club who cycle to work at least once a week. H₀: p = 0.45; Hₐ: p < 0.45.

**(b)** A one-sample z-test for a population proportion.

**(c)**

1. **Random:** the 90 members were a random sample of the club's members. ✓
2. **10%:** sampling is without replacement, and 90 ≤ 0.10 × 1,150 = 115. ✓
3. **Normality:** np₀ = 90 × 0.45 = 40.5 ≥ 10 and n(1 − p₀) = 90 × 0.55 = 49.5 ≥ 10. ✓

The sample count of 33 (p̂ ≈ 0.367) is not used in any of these steps.

| Point | What earns it |
|---|---|
| 1 | Parameter in context **and** correct one-sided hypotheses |
| 1 | Names the one-sample z-test for a population proportion (name or formula) |
| 1 | Random and 10% conditions both checked in context, with 115 shown |
| 1 | Normality checked with p₀: both 40.5 and 49.5 shown and compared with 10 |

Using 33 and 57 (the observed counts) does not earn point 4 for a test. Expected counts that are not whole numbers, such as 40.5, are fine.
</details>

## Question 6 (constructed response · stretch)

A fictional lighting factory says that only 2% of its LED bulbs are faulty. A quality inspector suspects that the true proportion of faulty bulbs is higher. She plans to test a random sample of 300 bulbs, taken without replacement from a shipment of 2,500 bulbs.

(a) State the hypotheses.
(b) Check the 10% and normality conditions. Which conditions fail?
(c) Find the smallest sample size that would meet the normality condition.
(d) Explain why no sample size can meet both conditions with this shipment, and how the inspector could fix the problem.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** p = the true proportion of all bulbs in the shipment that are faulty. H₀: p = 0.02; Hₐ: p > 0.02.

**(b)** 10%: 0.10 × 2,500 = 250, and 300 > 250. ✗ The sample is more than 10% of the shipment.
Normality: np₀ = 300 × 0.02 = 6 < 10. ✗ (n(1 − p₀) = 294 is fine.) **Both** conditions fail.

**(c)** We need n × 0.02 ≥ 10, so n ≥ 10 ÷ 0.02 = **500**. Then np₀ = 10 and n(1 − p₀) = 490.

**(d)** Normality needs n ≥ 500, but the 10% condition allows at most n = 250 from 2,500 bulbs. Both cannot be true at once. The inspector could sample from a larger population: a shipment, or a combined set of shipments, of at least 500 × 10 = 5,000 bulbs. Then a random sample of 500 would meet both conditions, although the conclusion would then be about that larger population, not this one shipment. (A method that does not need a normal model would be another option, but it is outside this course.)

| Point | What earns it |
|---|---|
| 1 | Correct hypotheses with p defined in context |
| 1 | Shows 250 and 6 and says both the 10% and normality conditions fail |
| 1 | n = 500 from n × 0.02 ≥ 10 |
| 1 | Explains the conflict (500 > 250) **and** gives a valid fix, such as a population of at least 5,000 |
</details>

## Question 7 (explanation · stretch)

The fictional puzzle game Tangram Trail claims that 70% of new players finish its tutorial. A researcher wants to know whether the true proportion is different from 70%. She takes a random sample of 200 of the game's 48,000 new players from last month, and 152 of them finished the tutorial. A student sets up the test like this:

> p̂ = proportion of the 200 players who finished the tutorial.
> H₀: p̂ = 0.70, Hₐ: p̂ > 0.70, because the sample gave 0.76.
> Conditions: SRS ✓. n = 200 ≥ 30 ✓. np̂ = 152 ≥ 10 and n(1 − p̂) = 48 ≥ 10 ✓.

(a) Identify **three** different errors in the student's set-up.
(b) Write a correct set-up.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Any three of:

1. The parameter and hypotheses use the **statistic p̂**. They must be about p, the true proportion of all new players.
2. The alternative is **one-sided because of the sample result**. The researcher asked whether the proportion is "different", so Hₐ must be two-sided.
3. **"n ≥ 30"** is not a condition for proportions.
4. The normality check uses the **observed** counts. For a test, use the expected counts np₀ and n(1 − p₀).
5. **"SRS ✓"** has no context, and the **10% condition** is missing.

**(b)** p = the true proportion of all new Tangram Trail players from last month who finished the tutorial. H₀: p = 0.70; Hₐ: p ≠ 0.70. Procedure: one-sample z-test for a population proportion.

- Random: the 200 players were a random sample of last month's new players. ✓
- 10%: 200 ≤ 0.10 × 48,000 = 4,800. ✓
- Normality: np₀ = 200 × 0.70 = 140 ≥ 10 and n(1 − p₀) = 200 × 0.30 = 60 ≥ 10. ✓

| Point | What earns it |
|---|---|
| 1 | Identifies three distinct errors with a reason for each |
| 1 | Correct parameter in context and two-sided hypotheses with p₀ = 0.70 |
| 1 | Random and 10% conditions in context, with 4,800 shown |
| 1 | Normality with 140 and 60 |
</details>

## How did you do?

- **Q1 or Q4 wrong:** re-read "Writing the hypotheses" in the [study guide](/advanced-course-resources/statistics/3-5-setting-up-test-population-proportion-study-guide/), especially the wording table and the boundary rule.
- **Q3 wrong:** revisit "Defining the parameter".
- **Q2 or Q5(c) wrong:** revisit "The three conditions" and Worked example 1. Use p₀, not p̂.
- **Q6 wrong:** work through Worked example 2 again; it also finds a minimum sample size.
- **Q7 incomplete:** check your answer against the "Common misconceptions" list.

Then tick off the [topic checklist](/advanced-course-resources/statistics/3-5-setting-up-test-population-proportion-checklist/).
