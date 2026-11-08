---
resourceId: "mb-ap-csa-4.2-practice"
title: "Introduction to Using Data Sets: Practice Questions (Computer Science A 4.2)"
description: "Nine original Marlbridge practice questions on data sets, planning algorithms with tables and flowcharts, tracing plans and spotting flaws such as a counter reset inside a loop, with rubrics."
course: "computer-science-a"
unit: 4
topics: ["4.2"]
resourceType: "practice-questions"
prerequisiteResources: ["mb-ap-csa-4.2-study-guide"]
learningObjectives:
  - "Say what a data set is and give examples from everyday life"
  - "Explain that a program processes a data set by accessing its values one at a time"
  - "Represent a pattern or algorithm for a data set in written language, a table or a flowchart"
  - "Trace a planned algorithm on a data set and record the result"
  - "Find a flaw in a plan, such as resetting a running count inside a loop"
skills: ["1", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on either section of the exam. Work every trace by hand."
related: ["mb-ap-csa-4.2-study-guide", "mb-ap-csa-4.2-revision-notes", "mb-ap-csa-4.2-checklist"]
next: "mb-ap-csa-4.2-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-a", "page-computer-science-a"]
keyPoints:
  - "Questions 1 to 6 are multiple choice; Questions 7 to 9 need written code, a trace or an explanation."
  - "Every answer explains why the wrong options are wrong."
  - "Mark points are a suggested Marlbridge rubric, not an official scoring guideline."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

These are **original Marlbridge practice questions**, not past exam questions. All data sets are fictional. Mark points are a suggested Marlbridge rubric, not an official scoring guideline. No calculator is allowed. The rainfall data is 0, 12, 5, 20, 0, 8, 15 mm for Monday to Sunday, as in the [study guide](/advanced-course-resources/computer-science-a/4-2-introduction-using-data-sets-study-guide/). All numerical answers were also checked by running Java.

## Question 1 (multiple choice · foundation)

Which of the following is the best description of a **data set**?

- (A) A loop that repeats a block of code
- (B) A collection of specific pieces of information
- (C) A method that returns an integer
- (D) A keyword that creates an object

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** A data set is a collection of specific pieces of information, such as readings or records.

- (A) describes iteration.
- (C) describes a method.
- (D) describes `new`.
</details>

## Question 2 (multiple choice · foundation)

When a program analyses a data set, how are the values usually processed?

- (A) All at once, as a single block
- (B) One at a time, each processed according to the desired outcome
- (C) Only the first value is ever used
- (D) In a random order that cannot be controlled

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The values within the set are accessed and used one at a time and then processed.

- (A) is not how a program reads a collection.
- (C) would ignore most of the data.
- (D) is false: a plan chooses the order, often first to last.
</details>

## Question 3 (multiple choice · core)

A student wants to plan an algorithm that counts how many marks in a table are at least 50. Which is the **best** first step?

- (A) Write the Java code immediately.
- (B) Draw a table or flowchart showing the counter, the repeated step for each mark and what is reported at the end.
- (C) Sort the marks so that the answer is obvious.
- (D) Replace each mark by 1.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** A table or diagram is used to plan the algorithm that will manipulate the data.

- (A) skips the plan.
- (C) is unnecessary for a count and does not plan the algorithm.
- (D) changes the data and does not answer the question.
</details>

## Question 4 (multiple choice · core)

Plan: "Set `below` to 0. For each value, if it is less than 5, add 1 to `below`. Report `below`." What is reported for the data 3, 8, 2, 9, 4?

- (A) 2
- (B) 3
- (C) 4
- (D) 5

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The values less than 5 are 3, 2 and 4, so `below` ends at 3. This was confirmed by running Java.

- (A) leaves out one of the three qualifying values (4 is less than 5).
- (C) counts a value that is not below 5, such as 8.
- (D) counts every value.
</details>

## Question 5 (multiple choice · core)

A plan reads: "For each reading: set `count` to 0. If the reading is at least 10, add 1 to `count`. After all readings, report `count`." It is used on the rainfall data 0, 12, 5, 20, 0, 8, 15. What is reported?

- (A) 0
- (B) 1
- (C) 3
- (D) 4

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `count` is reset to 0 on every pass, so only the last reading matters. The last reading, 15, is at least 10, so `count` ends at 1. The coded version printed `1`.

- (A) would be correct only if the last reading were below 10.
- (C) is the answer the plan was meant to give; the reset prevents it.
- (D) is not possible from the data.
</details>

## Question 6 (multiple choice · core)

A plan finds the largest value in a data set of temperatures that can all be below zero. Which starting step is most reliable?

- (A) Set `best` to 0.
- (B) Set `best` to the first value.
- (C) Set `best` to the number of values.
- (D) Set `best` to -1.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The first value is always a valid candidate, so the plan works for any data.

- (A) would report 0 for data such as -5, -2, -9 even though 0 is not in the data.
- (C) has no relation to the values.
- (D) fails if the values are all below -1.
</details>

## Question 7 (constructed response · core)

A quiz has five marks: 14, 9, 17, 12, 8. A mark of 10 or more is a pass.

(a) Write a plan, as numbered steps, that finds the number of passes and the mean of all five marks.

(b) Trace it in a table.

(c) State the results.

<details>
<summary>Answer and explanation</summary>

**(a)** 1. Set `passes` to 0 and `total` to 0. 2. For each mark: add the mark to `total`; if the mark is at least 10, add 1 to `passes`. 3. After the last mark, divide `total` by 5 to get the mean. 4. Report `passes` and the mean.

**(b)**

| Mark | Pass? | `passes` | `total` |
|---|---|---|---|
| (start) | | 0 | 0 |
| 14 | yes | 1 | 14 |
| 9 | no | 1 | 23 |
| 17 | yes | 2 | 40 |
| 12 | yes | 3 | 52 |
| 8 | no | 3 | 60 |

**(c)** 3 passes; mean = 60 ÷ 5 = 12.0.

**Suggested Marlbridge rubric (6 marks).**

| Mark | Requirement |
|---|---|
| 1 | Both `passes` and `total` are set up to 0 before the repetition |
| 1 | The repeated step looks at each mark in turn |
| 1 | Total updated for every mark and `passes` only for marks of at least 10 |
| 1 | Mean computed after the loop as total ÷ 5 |
| 1 | Trace table values correct |
| 1 | Results 3 and 12.0 |
</details>

## Question 8 (constructed response · core)

Using the rainfall data 0, 12, 5, 20, 0, 8, 15, plan an algorithm that finds the **mean rainfall of the wet days only** (days with at least 10 mm).

(a) List what you must remember while processing the values.

(b) Write the plan.

(c) Trace it and give the result to two decimal places.

<details>
<summary>Answer and explanation</summary>

**(a)** The total rainfall of the wet days and the number of wet days.

**(b)** 1. Set `wetTotal` to 0 and `wetDays` to 0. 2. For each reading: if it is at least 10, add it to `wetTotal` and add 1 to `wetDays`. 3. After the last reading, if `wetDays` is more than 0, report `wetTotal` ÷ `wetDays`.

**(c)**

| Reading | At least 10? | `wetTotal` | `wetDays` |
|---|---|---|---|
| (start) | | 0 | 0 |
| 0 | no | 0 | 0 |
| 12 | yes | 12 | 1 |
| 5 | no | 12 | 1 |
| 20 | yes | 32 | 2 |
| 0 | no | 32 | 2 |
| 8 | no | 32 | 2 |
| 15 | yes | 47 | 3 |

Mean = 47 ÷ 3 = 15.67 (to two decimal places).

**Suggested Marlbridge rubric (5 marks).**

| Mark | Requirement |
|---|---|
| 1 | Part (a): remembers a total and a count |
| 1 | Part (b): both set to 0 before the loop |
| 1 | Part (b): both updated only for qualifying readings |
| 1 | Part (b): guards the division with a count above 0 and divides at the end |
| 1 | Part (c): 47, 3 and 15.67 |
</details>

## Question 9 (constructed response · stretch)

A shop records each sale as a customer name and an amount (in pounds). The data set is:

| Customer | Ola | Ben | Ola | Cy | Ola | Ben |
|---|---|---|---|---|---|---|
| Amount | 12 | 5 | 8 | 20 | 3 | 7 |

(a) Draw or write a plan that finds the total spent by Ola.

(b) Trace it.

(c) Explain what would change if the question were "who spent the most in a single sale?"

<details>
<summary>Answer and explanation</summary>

**(a)** 1. Set `olaTotal` to 0. 2. For each sale in order: if the customer is Ola, add the amount to `olaTotal`. 3. Report `olaTotal`.

**(b)** Ola's sales are 12, 8 and 3: `olaTotal` goes 0, 12, 12 (Ben ignored), 20, 20 (Cy ignored), 23, 23 (Ben ignored). The result is 23.

**(c)** The plan would remember the best amount so far and who made that sale. It would start from the first sale (Ola, 12) and replace them when a larger amount is found: the only replacement is Cy, 20. The answer would be Cy.

**Suggested Marlbridge rubric (5 marks).**

| Mark | Requirement |
|---|---|
| 1 | Part (a): total starts at 0 before the repetition |
| 1 | Part (a): adds the amount only when the customer is Ola |
| 1 | Part (b): result 23 with the correct sequence of totals |
| 1 | Part (c): remembers the best amount and the customer |
| 1 | Part (c): starts from the first sale and gives Cy (20) |
</details>

## How did you do?

- Questions 1 to 6 right and the rubrics mostly met: move on to the [Array Creation and Access study guide](/advanced-course-resources/computer-science-a/4-3-array-creation-access-study-guide/).
- Missed Questions 1 or 2: reread "What is a data set?" and "Values are used one at a time" in the [study guide](/advanced-course-resources/computer-science-a/4-2-introduction-using-data-sets-study-guide/).
- Missed Questions 3, 4 or 7: reread "Representing a data set and a plan" and Worked example 1.
- Missed Questions 5, 6, 8 or 9: reread Worked example 2, then tick the [topic checklist](/advanced-course-resources/computer-science-a/4-2-introduction-using-data-sets-checklist/).
