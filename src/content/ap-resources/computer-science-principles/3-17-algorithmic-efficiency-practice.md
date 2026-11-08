---
resourceId: "mb-ap-csp-3.17-practice"
title: "Algorithmic Efficiency: Practice Questions (Computer Science Principles 3.17)"
description: "Ten original Marlbridge practice questions on efficiency: counting executions, comparing algorithms, reasonable versus unreasonable time, decision and optimization problems, and heuristics, with a suggested rubric."
course: "computer-science-principles"
unit: 3
topics: ["3.17"]
resourceType: "practice-questions"
prerequisiteResources: ["mb-ap-csp-3.17-study-guide"]
learningObjectives:
  - "Distinguish a problem from an instance, and decision from optimization problems"
  - "Compare algorithms by counting how many times statements execute"
  - "Explain the difference between reasonable and unreasonable running time"
  - "Explain why each wrong option is wrong, not only why the right one is right"
skills: ["1"]
studyMinutes: 40
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.17-study-guide", "mb-ap-csp-3.17-revision-notes", "mb-ap-csp-3.17-checklist"]
next: "mb-ap-csp-3.17-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "10 original questions: multiple choice, multiple select and constructed response."
  - "Every answer explains why each wrong option fails."
  - "Constructed-response answers come with a suggested Marlbridge rubric."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
editorialStatus: "drafted"
author: "marlbridge-academic-team"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-11-08
---

These are **original Marlbridge practice questions**, not past exam questions. All scenarios are fictional. The code is Marlbridge's rendering of the exam reference notation (`←` assignment, `=` equality test, lists start at index 1, `DISPLAY` shows a value). Mark points are a **suggested Marlbridge rubric**, not an official scoring guideline. No calculator is needed or allowed. Try each question before opening its answer.

## Question 1 (multiple choice · foundation)

How can the efficiency of an algorithm be estimated informally?

- (A) By counting the lines of code in the program.
- (B) By counting the number of times a statement or group of statements executes.
- (C) By measuring the size of the screen.
- (D) By counting how many variables are declared.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Efficiency concerns the work done, measured by the number of executions as the input grows.

- (A) A short program can run for a long time.
- (C) and (D) are unrelated to running time.

</details>

## Question 2 (multiple choice · core)

Segment P runs a single loop `n` times. Segment Q runs a loop inside a loop, each `n` times. For `n` = 20, how many times does the innermost statement of each run?

```text
n ← 20
count ← 0
REPEAT n TIMES
{
  REPEAT n TIMES
  {
    count ← count + 1
  }
}
DISPLAY(count)
```

- (A) P: 400, Q: 20
- (B) P: 20, Q: 40
- (C) P: 40, Q: 400
- (D) P: 20, Q: 400

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** A single loop runs n times; a loop inside a loop runs n × n times: 20 × 20 = 400.

- (A) swaps them.
- (B) adds instead of multiplying.
- (C) doubles P and adds.

</details>

## Question 3 (multiple choice · core)

Which algorithms run in a reasonable amount of time?

- (A) Algorithms whose steps grow like 2 to the power n.
- (B) Algorithms whose steps grow like n, n squared or n cubed.
- (C) Algorithms whose steps grow like n factorial.
- (D) Only algorithms that take no steps at all.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Polynomial (and slower-growing) algorithms are reasonable.

- (A) and (C) are exponential and factorial: unreasonable for large inputs.
- (D) is meaningless.

</details>

## Question 4 (multiple choice · core)

"What is the shortest route from A to B?" is an example of which kind of problem?

- (A) An optimization problem
- (B) A decision problem
- (C) An instance
- (D) An undecidable problem

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** It asks for the best of many solutions.

- (B) A decision problem would ask "Is there a route?" with a yes/no answer.
- (C) An instance includes specific input; this is the general problem.
- (D) Not suggested by the question.

</details>

## Question 5 (multiple choice · foundation)

Sorting is a problem. Which is an **instance** of the sorting problem?

- (A) Sorting lists faster
- (B) Sorting any list into order
- (C) Sorting the list (2, 3, 1, 7)
- (D) Sorting by hand

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** An instance has specific input.

- (A) and (D) are not instances.
- (B) is the general problem.

</details>

## Question 6 (multiple choice · core)

When is a heuristic most appropriate?

- (A) When the best answer must be guaranteed.
- (B) When no efficient algorithm that always finds the best answer is known, and a good approximate answer is acceptable.
- (C) When the input is tiny and an exact algorithm is quick.
- (D) When the problem is a simple yes/no question about one number.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Heuristics trade a guarantee of optimality for speed.

- (A) A heuristic does not guarantee the best answer.
- (C) and (D) are easy to solve exactly.

</details>

## Question 7 (multiple choice · core)

An algorithm needs 2 to the power n steps. By what factor does the number of steps increase when n increases by 1?

- (A) 1
- (B) n
- (C) 2 plus n
- (D) 2

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** 2^(n+1) = 2 × 2^n.

- (A) would mean no change.
- (B) and (C) do not describe exponential growth.

</details>

## Question 8 (multiple select, choose two · core)

Which **two** statements are true?

- (A) A faster computer turns an exponential algorithm into a polynomial one.
- (B) An algorithm that takes 2 to the power n steps runs in reasonable time for large n.
- (C) Algorithms with exponential or factorial growth are unreasonable for large inputs.
- (D) Different correct algorithms for the same problem can have different efficiencies.
- (E) The efficiency of an algorithm is the number of lines in its code.

<details>
<summary>Answer and explanation</summary>

**Answers: (C) and (D).** These are two of the standard ideas of the topic.

- (A) Speed of the computer does not change growth.
- (B) is the opposite of what is true.
- (E) Efficiency is about executions, not code length.

</details>

## Question 9 (constructed response · core)

Consider the segment, with `n` assigned before it. (a) How many times does `count ← count + 1` run when `n` is 4? (b) When `n` is 8? (c) Describe the pattern when `n` doubles. (d) A second segment has only one loop that runs `n` times. For which segment does the work grow faster, and by how much when `n` doubles?

```text
count ← 0
REPEAT n TIMES
{
  REPEAT n TIMES
  {
    count ← count + 1
  }
}
```

<details>
<summary>Answer and explanation</summary>

(a) `4 × 4 = 16`.

(b) `8 × 8 = 64`.

(c) Doubling `n` from 4 to 8 made the work grow from 16 to 64: **four times** as large. The number of runs is `n × n`.

(d) The nested segment grows faster: its work quadruples when `n` doubles, while the single-loop segment only doubles.

**Suggested Marlbridge rubric (5 marks)**

| Mark point | Marks |
|---|---|
| (a) 16 | 1 |
| (b) 64 | 1 |
| (c) States that the work quadruples (or is n squared) | 1 |
| (d) Identifies the nested segment as growing faster | 1 |
| (d) Compares quadrupling with doubling | 1 |

</details>

## Question 10 (constructed response · stretch)

An algorithm needs 2 to the power n steps for an input of size n, on a computer that does one billion (1,000,000,000) steps per second. (a) Approximately how long does it take for n = 30? (b) For n = 60? (c) Explain why this algorithm is described as running in an unreasonable amount of time, and why buying a computer ten times faster does not solve the problem.

<details>
<summary>Answer and explanation</summary>

(a) 2<sup>30</sup> = 1,073,741,824 steps, which is about **1.07 seconds** (a reasonable wait).

(b) 2<sup>60</sup> = 1,152,921,504,606,846,976 steps, which is about 1.15 × 10<sup>9</sup> seconds, or roughly **36.6 years**.

(c) Each increase of n by 1 **doubles** the time, so the time explodes as the input grows: it goes from about a second to decades when n doubles from 30 to 60. A computer ten times faster reduces 36.6 years to about 3.7 years, but then *n* only has to increase by about 3 (2<sup>3</sup> = 8) to win back most of the loss: 3.7 × 8 is about 29 years. The growth pattern, not the speed of the computer, is the problem.

**Suggested Marlbridge rubric (5 marks)**

| Mark point | Marks |
|---|---|
| (a) 2^30 ≈ 1.07 billion steps, about 1 second | 1 |
| (b) 2^60 ≈ 1.15 × 10^18 steps | 1 |
| (b) About 36 years (36.6) | 1 |
| (c) Each extra input doubles the time | 1 |
| (c) A faster computer only shifts the problem slightly | 1 |

</details>

## How did you do?

Count the questions you got right first time, then read the explanation for every one you missed, including the wrong options you rejected correctly, because the distractors show you the typical slips. Anything you missed twice goes onto your revision list for the [revision notes](/advanced-course-resources/computer-science-principles/3-17-algorithmic-efficiency-revision-notes/); re-read the matching section of the [study guide](/advanced-course-resources/computer-science-principles/3-17-algorithmic-efficiency-study-guide/) before trying again.
