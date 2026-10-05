---
resourceId: "mb-ap-stats-3.9-practice"
title: "Sampling Distributions for the Difference Between Sample Proportions: Practice Questions (Statistics 3.9)"
description: "Seven original Marlbridge practice questions on the mean, standard deviation, conditions and normal probabilities for a difference in sample proportions, with worked solutions and suggested rubrics."
course: "statistics"
unit: 3
topics: ["3.9"]
resourceType: "practice-questions"
prerequisites:
  - "Normal probabilities with z-scores or normalcdf"
prerequisiteResources: ["mb-ap-stats-3.9-study-guide"]
learningObjectives:
  - "Calculate the mean and standard deviation of the sampling distribution of p̂1 − p̂2"
  - "Check the randomization, 10% and large-counts conditions for samples and for experiments"
  - "Calculate and interpret normal probabilities for a difference in sample proportions"
  - "Find and correct errors in someone else's working, and plan sample sizes for a target standard deviation"
skills: ["3", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "graphing"
calculatorNote: "Use normalcdf for probabilities. Keep at least 4 decimal places for standard deviations and z-scores; round probabilities to 4 decimal places."
related: ["mb-ap-stats-3.9-study-guide", "mb-ap-stats-3.9-revision-notes", "mb-ap-stats-3.9-checklist"]
next: "mb-ap-stats-3.9-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "State the order of subtraction, check conditions in context, then calculate."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All contexts and data are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: the standard deviation of p̂1 − p̂2 is √[p1(1 − p1)/n1 + p2(1 − p2)/n2]; keep at least 4 decimal places in working and round probabilities to 4 decimal places. A graphing calculator is assumed.

## Question 1 (multiple choice · foundation)

In the fictional town of Oakvale, 72% of households have a garden. In the nearby town of Dunmore, 55% do. Independent random samples of 100 Oakvale households and 120 Dunmore households are taken. What is the mean of the sampling distribution of p̂O − p̂D, the difference in sample proportions (Oakvale − Dunmore) with a garden?

- (A) −0.17
- (B) 0
- (C) 0.17
- (D) 0.635

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The mean of p̂O − p̂D is pO − pD = 0.72 − 0.55 = 0.17. The sample sizes do not affect the mean.

- (A) subtracts in the wrong order (Dunmore − Oakvale). The question fixes the order as Oakvale − Dunmore.
- (B) confuses "unbiased" with "zero". The difference is unbiased for pO − pD, which is 0.17, not 0.
- (D) is the average of the two proportions, (0.72 + 0.55) ÷ 2, not their difference.
</details>

## Question 2 (multiple choice · core)

For two independent random samples, p1 = 0.30 with n1 = 200, and p2 = 0.20 with n2 = 250. What is the standard deviation of the sampling distribution of p̂1 − p̂2?

- (A) 0.0202
- (B) 0.0287
- (C) 0.0411
- (D) 0.0577

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The variances are 0.30 × 0.70 ÷ 200 = 0.00105 and 0.20 × 0.80 ÷ 250 = 0.00064. Add them: 0.00169. The square root is 0.0411.

- (A) subtracts the variances: √(0.00105 − 0.00064) = 0.0202. Variances add even when the proportions are subtracted.
- (B) puts both products over one combined sample size: √(0.37 ÷ 450) = 0.0287. Each variance needs its own sample size.
- (D) adds the two standard deviations, 0.0324 + 0.0253 = 0.0577. Add the variances first, then take one square root.
</details>

## Question 3 (multiple choice · core)

A researcher has 120 volunteers. She randomly assigns 60 to a new study method and 60 to the usual method. Suppose that 45% of learners like these pass a test with the new method and 12% with the usual method. Which statement about the sampling distribution of p̂new − p̂usual is correct?

- (A) The 10% condition fails, because 60 is more than 10% of the 120 volunteers.
- (B) The randomization condition fails, because the volunteers were not a random sample.
- (C) The large-counts condition fails, because 60 × 0.12 = 7.2 is less than 10.
- (D) All the conditions are met, so a normal model is appropriate.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The four expected counts are 60 × 0.45 = 27, 60 × 0.55 = 33, 60 × 0.12 = 7.2 and 60 × 0.88 = 52.8. One is below 10, so the sampling distribution may not be approximately normal.

- (A) applies the 10% condition to an experiment. It is not needed when treatments are randomly assigned.
- (B) In an experiment, random assignment of treatments meets the randomization condition. A random sample is not required.
- (D) ignores the expected count of 7.2.
</details>

## Question 4 (calculation · core)

At the fictional Larchmere School (1,200 students), 40% of students walk to school. At Fenby School (1,500 students), 25% walk. A survey takes independent random samples of 80 students from Larchmere and 90 from Fenby. Find the mean and standard deviation of the sampling distribution of p̂L − p̂F, showing each step, and interpret the standard deviation in context.

<details>
<summary>Worked solution</summary>

1. Mean: 0.40 − 0.25 = **0.15**.
2. Variance for Larchmere: 0.40 × 0.60 ÷ 80 = 0.003.
3. Variance for Fenby: 0.25 × 0.75 ÷ 90 = 0.002083.
4. Standard deviation: √(0.003 + 0.002083) = √0.005083 ≈ **0.0713**.
5. 10% check: 80 ≤ 120 and 90 ≤ 150, so the formula is accurate.

**Interpretation.** In repeated pairs of random samples (80 Larchmere students, 90 Fenby students), the difference in sample proportions who walk (Larchmere − Fenby) typically varies from the true difference of 0.15 by about 0.0713.

Suggested mark points (3): 1 for the mean with the order stated; 1 for adding the two variances and taking one square root; 1 for an interpretation that names both schools, the variable and repeated sampling.
</details>

## Question 5 (constructed response · core)

In the fictional coastal town of Saltmarsh (30,000 residents), 38% of residents swim in the sea at least once a week in summer. In Kelby (18,000 residents), 30% do. Independent random samples of 250 Saltmarsh residents and 200 Kelby residents are taken.

(a) Find the mean and standard deviation of the sampling distribution of p̂S − p̂K.
(b) Check the conditions for a normal model, in context.
(c) Find the probability that the Kelby sample proportion is at least as large as the Saltmarsh sample proportion. Interpret it.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Mean = 0.38 − 0.30 = **0.08**. Standard deviation = √(0.38 × 0.62 ÷ 250 + 0.30 × 0.70 ÷ 200) ≈ **0.0446**.

**(b)** Randomization: independent random samples from each town. 10%: 250 ≤ 3,000 and 200 ≤ 1,800. Large counts: 95, 155, 60 and 140 are all at least 10. So the sampling distribution is approximately normal.

**(c)** "Kelby at least as large" means p̂S − p̂K ≤ 0. z = (0 − 0.08) ÷ 0.0446 ≈ −1.7923, so P ≈ **0.0365**. If the stated proportions are true, about 3.7% of pairs of random samples of these sizes would show Kelby's sample proportion at least as high as Saltmarsh's.

| Point | What earns it |
|---|---|
| 1 | Mean 0.08 and standard deviation 0.0446, with the variances added |
| 1 | All three conditions checked with numbers and linked to the context |
| 1 | Translates the event into p̂S − p̂K ≤ 0 and finds the probability 0.0365 with a normal model |
| 1 | Interpretation names both towns and repeated sampling |

Accept 0.0366 from a rounded standard deviation. Accept working in the order Kelby − Saltmarsh if the event becomes p̂K − p̂S ≥ 0 with mean −0.08.
</details>

## Question 6 (constructed response · core)

A fictional plant nursery tests a new fertiliser. It randomly assigns 100 tomato seedlings to the new fertiliser and 100 to the old one. Suppose that 65% of seedlings like these produce fruit within 60 days with the new fertiliser and 50% with the old one.

(a) Check the conditions for a normal model for p̂new − p̂old.
(b) Find the mean and standard deviation of the sampling distribution.
(c) Find the probability that the difference in sample proportions (new − old) is at least 0.25. Interpret it in context.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Randomization: the fertilisers were randomly assigned to the seedlings. The 10% condition is not needed in an experiment. Large counts: 65, 35, 50 and 50 are all at least 10.

**(b)** Mean = 0.65 − 0.50 = **0.15**. Standard deviation = √(0.65 × 0.35 ÷ 100 + 0.50 × 0.50 ÷ 100) = √0.004775 ≈ **0.0691**.

**(c)** z = (0.25 − 0.15) ÷ 0.0691 ≈ 1.4471, so P ≈ **0.0739**. In about 7.4% of repetitions of this experiment, the new fertiliser group's fruiting proportion would be at least 25 percentage points above the old fertiliser group's.

| Point | What earns it |
|---|---|
| 1 | Random assignment named as the randomization condition, and no 10% check required (or stated as not needed) |
| 1 | Four expected counts shown, all at least 10 |
| 1 | Mean 0.15 and standard deviation 0.0691 |
| 1 | Probability 0.0739 with an interpretation about repeating the experiment |

Do not award point 1 for "the seedlings were a random sample": they were randomly assigned.
</details>

## Question 7 (explanation · stretch)

Two fictional colleges have p1 = 0.6 and p2 = 0.4 for the proportion of students who own a tablet. A student plans to take independent random samples of 150 from each college and writes:

"Standard deviation of p̂1 − p̂2 = √(0.6 × 0.4 ÷ 150) − √(0.4 × 0.6 ÷ 150) = 0."

(a) Explain why the student's answer cannot be right, and find the correct standard deviation.
(b) The researchers want the standard deviation of p̂1 − p̂2 to be at most 0.05, using the same sample size n in each college. Find the smallest n.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** A standard deviation of 0 would mean every pair of samples gives exactly the same difference, which is impossible: each sample proportion varies. The student subtracted the standard deviations. The variances must be **added**: √(0.24 ÷ 150 + 0.24 ÷ 150) = √0.0032 ≈ **0.0566**.

**(b)** With equal sizes, the standard deviation is √(0.24/n + 0.24/n) = √(0.48/n). Solve √(0.48/n) ≤ 0.05: 0.48/n ≤ 0.0025, so n ≥ 192. The smallest sample size is **192 from each college**. Check: √(0.48 ÷ 192) = 0.05 exactly, while n = 191 gives about 0.0501.

| Point | What earns it |
|---|---|
| 1 | Explains that a zero standard deviation is impossible and that the variances must add, not the standard deviations subtract |
| 1 | Correct standard deviation 0.0566 |
| 1 | Sets up √(0.48/n) ≤ 0.05 and finds n = 192 in each sample |
</details>

## How did you do?

- **Q1 wrong:** re-read "Mean and standard deviation of p̂1 − p̂2" in the [study guide](/advanced-course-resources/statistics/3-9-sampling-distributions-difference-between-sample-study-guide/), and always state the order of subtraction.
- **Q2, Q4 or Q7(a) wrong:** add the variances, then take one square root. Work through Worked example 1 again.
- **Q3 or Q6(a) wrong:** revisit "The conditions and what each one is for", especially the experiment case, and Worked example 3.
- **Q5 or Q6(c) wrong:** revisit Worked example 2. Turn the words into an inequality about p̂1 − p̂2 first.
- **Q7(b) wrong:** both variances shrink as n grows; set up the inequality and round up.

Then tick off the [topic checklist](/advanced-course-resources/statistics/3-9-sampling-distributions-difference-between-sample-checklist/).
