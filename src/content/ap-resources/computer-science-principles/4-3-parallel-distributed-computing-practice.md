---
resourceId: "mb-ap-csp-4.3-practice"
title: "Parallel and Distributed Computing: Practice Questions (Computer Science Principles 4.3)"
description: "Ten original practice questions on sequential and parallel run time, speedup, the sequential limit and distributed computing, with explanations and suggested rubrics."
course: "computer-science-principles"
unit: 4
topics: ["4.3"]
resourceType: "practice-questions"
prerequisites: 
  - "Topic 4.1 (networks)"
prerequisiteResources: ["mb-ap-csp-4.3-study-guide"]
learningObjectives: 
  - "Apply parallel and distributed computing to unfamiliar situations"
  - "Explain your reasoning in full sentences, as constructed responses require"
skills: ["1", "4", "5"]
studyMinutes: 50
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-4.3-study-guide", "mb-ap-csp-4.3-revision-notes", "mb-ap-csp-4.3-checklist"]
next: "mb-ap-csp-4.3-checklist"
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "Original questions with fictional scenarios and Marlbridge-rendered pseudocode where code appears."
  - "Every answer explains why each wrong option is wrong."
  - "Rubrics are a suggested Marlbridge rubric, not official scoring."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "drafted"
---

These are **original Marlbridge practice questions**, not past exam questions. All scenarios are fictional. Tasks in a parallel group are independent and each has its own processor unless stated. The rubrics are a suggested Marlbridge rubric, not an official scoring guideline. No calculator is needed.

## Question 1 (multiple choice · foundation)

Which statement correctly describes **distributed computing**?

- (A) Operations are performed in order, one at a time.
- (B) Multiple devices are used to run a program.
- (C) A program is run only on one processor.
- (D) Data are always compressed before sending.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Distributed computing uses multiple devices to run a program.

- (A) describes sequential computing.
- (C) is the opposite of distributing.
- (D) is unrelated.
</details>

## Question 2 (multiple choice · foundation)

A fictional sequential program has three steps that take 10, 15 and 25 seconds. How long does it take to run?

- (A) 15 seconds
- (B) 25 seconds
- (C) 50 seconds
- (D) 3750 seconds

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** 10 + 15 + 25 = 50 seconds.

- (A) is the average.
- (B) is the longest step, which only applies to parallel steps.
- (D) multiplies the numbers.
</details>

## Question 3 (multiple choice · core)

A task takes 20 seconds and must run first. Then three independent tasks of 30, 45 and 15 seconds run at the same time on separate processors. How long does the whole job take?

- (A) 20 seconds
- (B) 65 seconds
- (C) 90 seconds
- (D) 110 seconds

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** 20 + the longest of (30, 45, 15) = 20 + 45 = 65.

- (A) leaves out the parallel tasks.
- (C) is 30 + 45 + 15, the sum of the parallel tasks only.
- (D) is the sequential total: 20 + 30 + 45 + 15.
</details>

## Question 4 (multiple choice · core)

A job takes 90 seconds sequentially and 30 seconds in a parallel solution. What is the speedup?

- (A) 0.33
- (B) 3
- (C) 60
- (D) 120

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Speedup = sequential time ÷ parallel time = 90 ÷ 30 = 3.

- (A) is the inverse, 30 ÷ 90.
- (C) is the time saved (90 - 30), not the speedup.
- (D) is the sum of the times.
</details>

## Question 5 (multiple choice, select two · core)

Which **two** are benefits of distributed computing?

- (A) It can solve problems that a single computer could not because of the processing time or storage needed.
- (B) It can solve much larger problems more quickly than a single computer.
- (C) It guarantees that a task is never delayed by communication.
- (D) It removes the sequential portion of every program.

<details>
<summary>Answer and explanation</summary>

**Answer: (A) and (B).**

- (C) communication between devices takes time.
- (D) the sequential portion remains.
</details>

## Question 6 (multiple choice · core)

A program has a sequential portion that takes 40 seconds and a parallel portion that takes 60 seconds on one processor. What is the shortest time the whole program could ever take, however many processors are added?

- (A) 0 seconds
- (B) 40 seconds
- (C) 60 seconds
- (D) 100 seconds

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The parallel portion can shrink but the sequential portion cannot, so the time cannot go below 40 seconds.

- (A) would need the sequential portion to vanish.
- (C) is the parallel portion, not the limit.
- (D) is the time on one processor.
</details>

## Question 7 (multiple choice · stretch)

Solution X runs three tasks of 40 s, 40 s and 40 s one after another. Solution Y runs a 10 s sequential task and then two parallel tasks of 40 s and 30 s. Which statement is correct?

- (A) X takes 120 s, Y takes 50 s, and the speedup of Y over X is 2.4.
- (B) X takes 40 s, Y takes 80 s.
- (C) X takes 120 s, Y takes 80 s, and the speedup is 1.5.
- (D) X and Y take the same time.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** X: 40 + 40 + 40 = 120 s. Y: 10 + the longest of (40, 30) = 10 + 40 = 50 s. Speedup of Y over X: 120 ÷ 50 = 2.4.

- (B) misreads X as parallel and adds the Y parallel tasks.
- (C) adds both parallel tasks (10 + 40 + 30 = 80).
- (D) the times differ.
</details>

## Question 8 (constructed response · core)

A fictional video-editing job has four tasks. Task A (12 s) runs first. Tasks B (18 s) and C (24 s) then run at the same time. Task D (6 s) runs last, after B and C are both finished.

(a) Calculate the time if all four tasks are run one after another. (1 point)

(b) Calculate the time if B and C are run in parallel. (2 points)

(c) Calculate the speedup, to 2 decimal places. (1 point)

(d) Explain why adding a third parallel task of 5 s alongside B and C would not change the time. (1 point)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (5 points).**

| Point | Award when the response… |
|---|---|
| 1 | gives 60 seconds (12 + 18 + 24 + 6) |
| 2 | identifies A and D as sequential and the longest of B and C as 24 |
| 3 | gives 12 + 24 + 6 = 42 seconds |
| 4 | gives speedup 60 ÷ 42 ≈ 1.43 |
| 5 | explains that the parallel group lasts as long as its longest task (24 s) and 5 s is shorter, so the time is unchanged |

**Sample response.** (a) 60 s. (b) A and D are sequential, B and C run together and take 24 s: 12 + 24 + 6 = 42 s. (c) 60 ÷ 42 is about 1.43. (d) The group still ends when the 24 s task ends, so a 5 s task adds nothing.
</details>

## Question 9 (constructed response · core)

A fictional program takes 100 seconds on one processor. Ten seconds is a sequential portion and 90 seconds can be divided equally among any number of processors.

(a) Calculate the time and the speedup with 3 processors. (2 points)

(b) Calculate the time with 9 processors. (1 point)

(c) State the greatest possible speedup and explain. (2 points)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (5 points).**

| Point | Award when the response… |
|---|---|
| 1 | calculates the time with 3 processors: 10 + 90 ÷ 3 = 40 s |
| 2 | calculates the speedup: 100 ÷ 40 = 2.5 |
| 3 | calculates the time with 9 processors: 10 + 90 ÷ 9 = 20 s |
| 4 | gives the greatest speedup as 100 ÷ 10 = 10 |
| 5 | explains that the sequential 10 s cannot be shortened by adding processors |

**Sample response.** (a) 10 + 30 = 40 s; speedup 2.5. (b) 10 + 10 = 20 s. (c) 10: even with unlimited processors the 10 s sequential portion remains, so the time cannot be less than 10 s and 100 ÷ 10 = 10.
</details>

## Question 10 (constructed response · stretch)

A fictional observatory collects 8 terabytes of sky images each night. Each of its computers can store only 2 terabytes and takes 20 hours to analyse 2 terabytes.

(a) Explain why the observatory could not process one night's data on a single computer, and state the minimum number of computers needed to **store** it. (2 points)

(b) If the data are divided equally among that number of computers working at the same time, estimate the analysis time, ignoring communication. (1 point)

(c) Describe **one** challenge of a distributed solution. (1 point)

(d) The results must then be combined by a 2-hour sequential step. State the total time. (1 point)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (5 points).**

| Point | Award when the response… |
|---|---|
| 1 | says one computer's storage (2 TB) is too small for 8 TB |
| 2 | gives 4 computers (8 ÷ 2) |
| 3 | says 20 hours (each analyses 2 TB at the same time) |
| 4 | gives a valid challenge (communication delays, coordination, failure of one computer, combining results) |
| 5 | gives total 20 + 2 = 22 hours |

**Sample response.** (a) A single computer holds only 2 TB, so 8 TB does not fit; at least 4 computers are needed. (b) Each analyses 2 TB in parallel, so about 20 hours. (c) A computer or connection may fail, so the work must be re-assigned. (d) 22 hours.
</details>

## How did you do?

Questions 1 to 7 are multiple choice; 8 to 10 are written. If you missed Question 3 or 7, check that you added only the **longest** task of each parallel group. Re-read "Calculating the time" in the [study guide](/advanced-course-resources/computer-science-principles/4-3-parallel-distributed-computing-study-guide/) if needed, then use the [checklist](/advanced-course-resources/computer-science-principles/4-3-parallel-distributed-computing-checklist/).
