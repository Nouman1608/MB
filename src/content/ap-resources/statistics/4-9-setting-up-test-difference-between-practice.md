---
resourceId: "mb-ap-stats-4.9-practice"
title: "Setting Up a Test for the Difference Between Two Population Means: Practice Questions (Statistics 4.9)"
description: "Seven original Marlbridge practice questions on choosing a two-sample t-test, defining μ₁ and μ₂, writing hypotheses and checking conditions, with worked solutions and suggested rubrics."
course: "statistics"
unit: 4
topics: ["4.9"]
resourceType: "practice-questions"
prerequisites:
  - "Setting up a one-sample t-test (Topic 4.4)"
prerequisiteResources: ["mb-ap-stats-4.9-study-guide"]
learningObjectives:
  - "Choose a two-sample t-test and tell it apart from paired and proportion procedures"
  - "Write hypotheses about μ₁ − μ₂ from the wording of a question"
  - "Check the randomization, 10% and sample data conditions for both groups"
  - "Find and correct errors in a written set-up"
skills: ["2", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Use one-variable statistics for quartiles. Quartiles split the ordered data at the median; with an odd n, leave the median out of both halves."
related: ["mb-ap-stats-4.9-study-guide", "mb-ap-stats-4.9-revision-notes", "mb-ap-stats-4.9-checklist"]
next: "mb-ap-stats-4.9-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written answers."
  - "Every parameter definition must be in context, with units."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All data sets and studies are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: you are only asked to set up tests (State and Plan), not to carry them out; quartiles are found by splitting the ordered data at the median; α = 0.05 unless stated. A graphing calculator is assumed.

## Question 1 (multiple choice · foundation)

A ferry company runs two boats, the *Kestrel* and the *Osprey*, on the same route. A manager wants to know whether the mean crossing time **differs** between the two boats. She records the times of a random sample of crossings by each boat. Which hypotheses are correct?

- (A) H₀: μ_K − μ_O = 0; Hₐ: μ_K − μ_O ≠ 0
- (B) H₀: x̄_K = x̄_O; Hₐ: x̄_K ≠ x̄_O
- (C) H₀: μ_K − μ_O ≠ 0; Hₐ: μ_K − μ_O = 0
- (D) H₀: μ_K − μ_O = 0; Hₐ: μ_K − μ_O > 0

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** "Differs" gives no direction, so the alternative is two-sided. The hypotheses are about the population mean crossing times μ_K and μ_O, and H₀ states no difference.

- (B) uses the sample means. They are known numbers from the data, so there is nothing to test.
- (C) swaps the hypotheses. H₀ always states equality; the claim you look for evidence of goes in Hₐ.
- (D) is one-sided. The manager did not say which boat she expects to be slower.
</details>

## Question 2 (multiple choice · core)

A nutritionist selects a random sample of 50 adults in one fictional country and a separate random sample of 50 adults in another. She records each adult's daily sugar intake in grams. She wants to know whether the mean daily sugar intake is higher in the first country. Which procedure should she use?

- (A) A one-sample t-test for a population mean difference
- (B) A two-sample t-test for a difference between two population means
- (C) A two-sample z-test for a difference between two population proportions
- (D) A one-sample t-test for a population mean

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The response (grams of sugar) is quantitative, there are two populations, and the samples were selected separately, so they are independent. The question is about a difference in means.

- (A) is for paired data. No adult in one country is matched with a particular adult in the other.
- (C) is for a categorical response, such as "eats more than 50 g: yes or no".
- (D) compares one mean with a claimed value. Here there are two groups and no claimed value.
</details>

## Question 3 (multiple choice · core)

A factory has 350 night-shift workers and 1,200 day-shift workers. A health officer selects a random sample of 40 workers from each shift, without replacement, and records their hours of sleep. Which statement about the 10% condition is correct?

- (A) It is met for both shifts.
- (B) It is met for the day shift but not for the night shift.
- (C) It is not needed, because both samples have at least 30 workers.
- (D) It is met, because 80 is less than 10% of the 1,550 workers in total.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Day shift: 40 ≤ 10% of 1,200 = 120, so it is met. Night shift: 10% of 350 = 35, and 40 > 35, so it is not met.

- (A) does not check the night shift against its own population.
- (C) mixes up two conditions. n ≥ 30 is part of the sample data condition; the 10% condition is about sampling without replacement.
- (D) combines the groups. Each sample is checked against its own population.
</details>

## Question 4 (multiple choice · core)

Two independent random samples have sizes 24 and 60. Nothing is known about the shapes of the two population distributions. What does the sample data condition for a two-sample t-test require?

- (A) Nothing more, because 24 + 60 = 84 is at least 30.
- (B) Nothing more, because the larger sample has at least 30 values.
- (C) A check that the sample distributions are free from strong skewness and outliers.
- (D) The condition cannot be met, because one sample has fewer than 30 values.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** One sample has fewer than 30 values and the populations are not known to be approximately normal, so you must look at the data. The course's condition asks for both sample distributions to be free from strong skewness and outliers.

- (A) adds the sample sizes. The condition is about each sample, not the total.
- (B) ignores the small sample. Its sample mean could be badly affected by skewness or an outlier.
- (D) treats a small sample as an automatic failure. A sample of 24 with no strong skewness and no outliers is acceptable.
</details>

## Question 5 (constructed response · core)

A fictional national park manages two lakes. Lake Corrin holds about 5,000 trout and Lake Dunmore about 8,000. A ranger suspects that trout in Lake Dunmore are **shorter on average**. She catches a random sample of 36 trout from Lake Corrin and, separately, 42 trout from Lake Dunmore, measures their lengths in centimetres and releases them.

(a) Name the procedure and define the parameters.
(b) State the hypotheses.
(c) Check the conditions.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Two-sample t-test for a difference between two population means. μ_C = the mean length (cm) of all trout in Lake Corrin; μ_D = the mean length (cm) of all trout in Lake Dunmore.

**(b)** H₀: μ_D − μ_C = 0. Hₐ: μ_D − μ_C < 0. (Equivalently H₀: μ_D = μ_C and Hₐ: μ_D < μ_C.)

**(c)**

1. Randomization: two independent random samples, one from each lake. ✓
2. 10%: 36 ≤ 10% of 5,000 = 500 and 42 ≤ 10% of 8,000 = 800. ✓
3. Sample data: 36 ≥ 30 and 42 ≥ 30. ✓

All conditions are met.

| Point | What earns it |
|---|---|
| 1 | Names a two-sample t-test **and** defines both parameters as population means of length, in cm, for each lake |
| 1 | Correct hypotheses in μ, with a one-sided alternative in the right direction for the order used |
| 1 | Randomization and 10% conditions checked for both lakes, with numbers |
| 1 | Sample data condition checked for both samples, with the reason |

Accept Hₐ: μ_C − μ_D > 0. Do not award point 2 for hypotheses written with x̄, or for a two-sided alternative.
</details>

## Question 6 (constructed response · stretch)

A fictional robotics club wants to know whether battery brand **affects** how long a robot runs. Sixteen identical robots were randomly assigned, 8 to brand P batteries and 8 to brand Q. The running times, in minutes, were:

- Brand P: 52, 55, 49, 58, 53, 51, 56, 54
- Brand Q: 47, 50, 46, 49, 71, 48, 51, 45

(a) Define the parameters and state the hypotheses.
(b) Check the conditions for a two-sample t-test.
(c) Is a two-sample t-test appropriate for these data? Explain, and suggest what the club could do.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** μ_P = the true mean running time (minutes) of robots like these with brand P batteries; μ_Q = the same for brand Q. H₀: μ_P − μ_Q = 0. Hₐ: μ_P − μ_Q ≠ 0 ("affects" gives no direction).

**(b)**

1. Randomization: the brands were randomly assigned to the robots. ✓
2. 10%: not needed; this is a randomized experiment.
3. Sample data: both samples have 8 < 30 values, so check both.
   - Brand P, ordered: 49, 51, 52, 53, 54, 55, 56, 58. Q1 = 51.5, Q3 = 55.5, IQR = 4. Fences 45.5 and 61.5 minutes. No outliers. ✓
   - Brand Q, ordered: 45, 46, 47, 48, 49, 50, 51, 71. Q1 = 46.5, Q3 = 50.5, IQR = 4. Upper fence = 50.5 + 6 = 56.5 minutes. **71 > 56.5, so 71 minutes is an outlier.** ✗

**(c)** Not as it stands. Both samples are small and the brand Q sample has an outlier, so the sample data condition is not met. The outlier has a large effect: the brand Q mean is 50.875 minutes with it and 48 minutes without it. The club should first check whether 71 minutes was a recording or equipment error. If it is genuine, it should run more robots with each brand (at least 30 per brand would meet the condition without relying on the shape of the samples).

| Point | What earns it |
|---|---|
| 1 | Both parameters defined as true mean running times for each brand, and a two-sided Hₐ in μ |
| 1 | Randomization stated and 10% correctly said to be unnecessary |
| 1 | Correct quartiles and fences for brand Q, identifying 71 minutes as an outlier |
| 1 | Concludes the test is not appropriate because a small sample has an outlier, **and** gives a sensible remedy |

Accept any correct method of showing the outlier (for example, a dot plot with a clear gap). Do not award point 4 for "n < 30, so it fails" without reference to the outlier.
</details>

## Question 7 (explanation · stretch)

A teacher randomly assigned 30 volunteer students to two revision apps: 14 used app A and 16 used app B. She then gave everyone the same test. Because app A's sample mean was higher, a student wrote this set-up for a test of whether **the apps lead to different mean scores**:

> H₀: x̄_A − x̄_B = 0. Hₐ: x̄_A − x̄_B > 0.
> Conditions: random assignment ✓. 10%: 14 and 16 are less than 10% of all students at the school ✓. Sample data: n₁ + n₂ = 30 ≥ 30 ✓.

(a) Identify **three** errors in the student's set-up.
(b) Write a correct set-up, including what the teacher must check for the sample data condition.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)**

1. The hypotheses use **sample means**. They must use the population (true) means μ_A and μ_B.
2. The alternative is **one-sided** and was chosen because of the data. The question asks whether the apps lead to **different** means, so Hₐ must be two-sided, decided before looking at the data.
3. The **sample data check adds the sample sizes.** Each sample is below 30, so the data must be checked.

(Also accept: the 10% condition is not needed, because this is a randomized experiment with volunteers, not a sample drawn from the school.)

**(b)** μ_A = the true mean test score for students like these who revise with app A; μ_B = the same for app B. H₀: μ_A − μ_B = 0. Hₐ: μ_A − μ_B ≠ 0. Procedure: two-sample t-test for μ_A − μ_B. Randomization: apps randomly assigned ✓. 10%: not needed (experiment). Sample data: 14 < 30 and 16 < 30, so the teacher must graph both sets of scores (or use the 1.5 × IQR rule) and check that neither shows strong skewness or outliers.

| Point | What earns it |
|---|---|
| 1 | Identifies the use of x̄ in the hypotheses as an error |
| 1 | Identifies the one-sided Hₐ chosen from the data as an error |
| 1 | Identifies the added sample sizes (or the unnecessary 10% check) as an error |
| 1 | Correct parameters in context, two-sided hypotheses in μ, and a correct description of the sample data check for both groups |
</details>

## How did you do?

- **Q1 or Q7 wrong:** re-read "Writing the hypotheses" in the [study guide](/advanced-course-resources/statistics/4-9-setting-up-test-difference-between-study-guide/).
- **Q2 wrong:** revisit "Choosing the procedure" and Figure 1.
- **Q3 or Q5(c) wrong:** revisit the 10% row in "The three conditions" and Worked example 3(d).
- **Q4 or Q6 wrong:** revisit the sample data condition and Worked example 2.
- **Q5(a) incomplete:** a parameter definition needs the population mean, the variable, units and the population.

Then tick off the [topic checklist](/advanced-course-resources/statistics/4-9-setting-up-test-difference-between-checklist/).
