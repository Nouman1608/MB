---
resourceId: "mb-ap-stats-2.2-practice"
title: "Summary Statistics for Two Categorical Variables: Practice Questions (Statistics 2.2)"
description: "Seven original Marlbridge practice questions on joint, marginal and conditional relative frequencies, association and claims from two-way tables, with worked solutions and suggested rubrics."
course: "statistics"
unit: 2
topics: ["2.2"]
resourceType: "practice-questions"
prerequisites:
  - "Reading and completing two-way tables"
prerequisiteResources: ["mb-ap-stats-2.2-study-guide"]
learningObjectives:
  - "Calculate joint, marginal and conditional relative frequencies with the correct denominator"
  - "Interpret each relative frequency in context"
  - "Compare conditional distributions to judge association"
  - "Evaluate claims, including claims that swap the direction of a conditional or assume cause"
skills: ["3", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "four-function"
calculatorNote: "Round relative frequencies to 2 or 3 decimal places unless they are exact."
related: ["mb-ap-stats-2.2-study-guide", "mb-ap-stats-2.2-revision-notes", "mb-ap-stats-2.2-checklist"]
next: "mb-ap-stats-2.2-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-statistics", "page-statistics", "cb-statistics-revisions"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Say which total you divide by, and why."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. All data sets and organisations are fictional. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: each individual is in exactly one cell of the table; round relative frequencies to 2 or 3 decimal places unless they are exact.

Questions 1 and 2 use this table of 200 sales at a fictional ice-cream stall.

| Size | Cone | Cup | **Total** |
|---|---|---|---|
| Small | 48 | 72 | **120** |
| Large | 50 | 30 | **80** |
| **Total** | **98** | **102** | **200** |

## Question 1 (multiple choice · foundation)

What proportion of all sales were large cups?

- (A) 0.150
- (B) 0.294
- (C) 0.375
- (D) 0.400

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** "Of all sales … large **and** cup" is a joint relative frequency: cell ÷ grand total = 30 ÷ 200 = 0.150.

- (B) is 30 ÷ 102, the proportion of **cup** sales that were large (a conditional relative frequency).
- (C) is 30 ÷ 80, the proportion of **large** sales that were cups (a conditional relative frequency in the other direction).
- (D) is 80 ÷ 200, the marginal relative frequency of large sales, which ignores cone or cup.
</details>

## Question 2 (multiple choice · core)

Of the cup sales, what proportion were small?

- (A) 0.360
- (B) 0.510
- (C) 0.600
- (D) 0.706

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** "Of the cup sales" restricts you to the Cup column, whose total is 102. Small cups: 72. So 72 ÷ 102 ≈ 0.706.

- (A) is 72 ÷ 200, the joint relative frequency of small cups among **all** sales.
- (B) is 102 ÷ 200, the marginal relative frequency of cup sales.
- (C) is 72 ÷ 120, the proportion of **small** sales that were cups. This swaps the direction of the conditional.
</details>

## Question 3 (multiple choice · core)

A fictional estate has 300 households: 100 live in flats and 200 live in houses. Overall, 40% of the households own a pet. If housing type and pet ownership are **not** associated, how many of the flat households own a pet?

- (A) 40
- (B) 60
- (C) 100
- (D) 120

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** No association means the conditional proportion of pet owners is the same in every group, and so equals the overall proportion, 0.40. For flats: 0.40 × 100 = 40 households. (For houses: 0.40 × 200 = 80. Check: 40 + 80 = 120 pet owners = 0.40 × 300.)

- (B) splits the 120 pet owners equally between flats and houses. Equal counts are not "no association" when the groups have different sizes.
- (C) is the number of flat households, not the number that own a pet.
- (D) is the total number of pet owners on the whole estate.
</details>

## Question 4 (calculation · core)

A fictional music school asked its 160 students whether they practise every day.

| Practice | Piano | Guitar | Violin | **Total** |
|---|---|---|---|---|
| Daily | 36 | 28 | 24 | **88** |
| Not daily | 24 | 42 | 6 | **72** |
| **Total** | **60** | **70** | **30** | **160** |

Find each of the following, name the kind of relative frequency, and interpret it in context.

(a) The proportion of all students who play violin and practise daily.
(b) The proportion of all students who practise daily.
(c) The proportion of guitar students who practise daily.
(d) The proportion of daily practisers who play violin.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Joint: 24 ÷ 160 = **0.15**. 15% of the school's students play violin and practise daily.

**(b)** Marginal: 88 ÷ 160 = **0.55**. 55% of the students practise daily.

**(c)** Conditional, within guitar students: 28 ÷ 70 = **0.40**. 40% of guitar students practise daily.

**(d)** Conditional, within daily practisers: 24 ÷ 88 ≈ **0.273**. About 27% of the students who practise daily play violin.

| Point | What earns it |
|---|---|
| 1 | (a) 0.15, named as joint, with interpretation |
| 1 | (b) 0.55, named as marginal, with interpretation |
| 1 | (c) 0.40 with denominator 70, named as conditional, with interpretation |
| 1 | (d) 0.273 with denominator 88, named as conditional, with interpretation |

Answers as percentages or fractions (for example, 3/11 in (d)) are fine. An interpretation must name the group and the context; "0.40 of them" alone does not earn the point.
</details>

## Question 5 (constructed response · core)

A fictional company asked its 400 staff whether they are satisfied with their work–life balance. The results by work pattern are:

| Satisfied | Office | Hybrid | Remote | **Total** |
|---|---|---|---|---|
| Yes | 54 | 150 | 56 | **260** |
| No | 66 | 50 | 24 | **140** |
| **Total** | **120** | **200** | **80** | **400** |

(a) Find the conditional distribution of satisfaction for each work pattern.
(b) Do work pattern and satisfaction appear to be associated? Justify your answer.
(c) A manager says: "Moving everyone to remote work would raise satisfaction to at least 70%." Explain why these data do not support this claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Office: Yes 54 ÷ 120 = 0.45, No 0.55. Hybrid: Yes 150 ÷ 200 = 0.75, No 0.25. Remote: Yes 56 ÷ 80 = 0.70, No 0.30.

**(b)** **Yes.** The conditional distributions differ. Only 45% of office staff are satisfied, against 75% of hybrid staff and 70% of remote staff. Hybrid and remote staff have similar rates, but office staff are clearly lower. Overall, 260 ÷ 400 = 0.65 are satisfied, and the office rate is well below this.

**(c)** These are observational data: staff were not randomly assigned to work patterns. Staff who chose or were given remote work may differ in other ways, such as their role, commute or family situation, and those differences could explain their higher satisfaction. The data show association only, so they cannot predict what would happen if everyone were moved to remote work.

| Point | What earns it |
|---|---|
| 1 | All three conditional distributions correct (Yes and No, or Yes with No implied) |
| 1 | States association by comparing at least two conditional proportions with values |
| 1 | Comment in context, for example that office staff are the least satisfied group |
| 1 | Rejects the causal claim: no random assignment **and** a plausible confounding variable |

Do not award point 2 for comparing the counts 54, 150 and 56.
</details>

## Question 6 (constructed response · stretch)

A fictional airport handled 2,000 flights in one month. 25% of flights left from Terminal A and the rest from Terminal B. Of the Terminal A flights, 12% were delayed. Of the Terminal B flights, 20% were delayed.

(a) Build the two-way table of counts with totals.
(b) What proportion of all flights were delayed?
(c) Of the delayed flights, what proportion left from Terminal A?
(d) A reporter writes: "Terminal A caused more than its share of delays this month." Use (c) and the marginal distribution of terminal to judge this claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Terminal A: 0.25 × 2,000 = 500 flights; delayed 0.12 × 500 = 60; on time 440. Terminal B: 1,500 flights; delayed 0.20 × 1,500 = 300; on time 1,200.

| Status | Terminal A | Terminal B | **Total** |
|---|---|---|---|
| Delayed | 60 | 300 | **360** |
| On time | 440 | 1,200 | **1,640** |
| **Total** | **500** | **1,500** | **2,000** |

**(b)** Marginal: 360 ÷ 2,000 = **0.18**.

**(c)** Conditional, within delayed flights: 60 ÷ 360 ≈ **0.167**.

**(d)** **Not supported.** Terminal A had 25% of all flights (500 ÷ 2,000) but only about 16.7% of the delayed flights. That is **less** than its share, which matches its lower delay rate (12% against 20%). The word "caused" is also not justified: these are observational data, and other differences between the terminals could explain the delay rates.

| Point | What earns it |
|---|---|
| 1 | Correct table: 500 and 1,500 flights, with 60 and 300 delayed |
| 1 | (b) 0.18 |
| 1 | (c) 0.167, with denominator 360 (the delayed flights) |
| 1 | (d) Compares 0.167 with 0.25 and rejects the claim in context |
</details>

## Question 7 (explanation · stretch)

A fictional school has 300 students. Of the 40 students in the chess club, 30 got an A in their last maths test. Of the other 260 students, 78 got an A. A student writes: "75% of A-grade students are in the chess club, so joining chess club makes you better at maths."

(a) Explain the error in the first part of the statement, and give the correct proportion of A-grade students who are in the chess club.
(b) Are chess club membership and getting an A associated for these students? Justify your answer.
(c) Explain why the second part of the statement is not justified.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** 30 ÷ 40 = 0.75 is the proportion of **chess club members** who got an A. The statement swaps the direction of the conditional. The A-grade students number 30 + 78 = 108, and 30 of them are in the chess club, so the proportion of A-grade students in the club is 30 ÷ 108 ≈ **0.278**.

**(b)** **Yes.** Of chess club members, 0.75 got an A; of non-members, 78 ÷ 260 = 0.30 did. These conditional proportions are very different, so club membership and getting an A are associated in these data.

**(c)** The students chose whether to join the club; nobody was randomly assigned. Students who already enjoy or are strong at maths may be more likely to join chess club, so prior interest or ability could explain both. An association in observational data does not show that joining the club causes better maths results.

| Point | What earns it |
|---|---|
| 1 | Identifies the swapped direction (0.75 is "of members, the proportion with an A") |
| 1 | Correct proportion 30 ÷ 108 ≈ 0.278 |
| 1 | Association justified by comparing 0.75 and 0.30, in context |
| 1 | Explains no random assignment **and** gives a plausible confounding variable |
</details>

## How did you do?

- **Q1, Q2 or Q4 wrong:** re-read "Joint relative frequencies", "Marginal relative frequencies" and "Conditional relative frequencies" in the [study guide](/advanced-course-resources/statistics/2-2-summary-statistics-two-categorical-variables-study-guide/), then redo Worked example 1.
- **Q3 or Q5(b) wrong:** revisit "Conditional distributions and association".
- **Q6 wrong:** practise turning percentages into counts first, then build the table.
- **Q7(a) wrong:** the direction of a conditional is the most common error in this topic. Find the group after "of the".
- **Q5(c), Q6(d) or Q7(c) incomplete:** revisit Claim D in Worked example 2.

Then tick off the [topic checklist](/advanced-course-resources/statistics/2-2-summary-statistics-two-categorical-variables-checklist/).
