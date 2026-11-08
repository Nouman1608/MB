---
resourceId: "mb-ap-csp-3.9-practice"
title: "Developing Algorithms: Practice Questions (Computer Science Principles 3.9)"
description: "Nine original Marlbridge practice questions on expressing, combining, modifying and comparing algorithms, including equivalent conditionals and Boolean expressions, with explanations and a suggested rubric."
course: "computer-science-principles"
unit: 3
topics: ["3.9"]
resourceType: "practice-questions"
prerequisiteResources: ["mb-ap-csp-3.9-study-guide"]
learningObjectives:
  - "Describe an algorithm and the ways it can be expressed"
  - "Create algorithms from an idea, by combining and by modifying existing algorithms"
  - "Use standard algorithms for maximum, minimum, sum, average and divisibility"
  - "Explain why each wrong option is wrong, not only why the right one is right"
skills: ["1", "2"]
studyMinutes: 40
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.9-study-guide", "mb-ap-csp-3.9-revision-notes", "mb-ap-csp-3.9-checklist"]
next: "mb-ap-csp-3.9-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "9 original questions: multiple choice, multiple select and constructed response."
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

Which statement best describes an algorithm?

- (A) The result a program displays when it is run.
- (B) A finite set of instructions that accomplish a specific task.
- (C) A list of all the variables used in a program.
- (D) A program written in a specific programming language.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** An algorithm is defined by what it does, not by the language it is in.

- (A) Output is a result, not the algorithm.
- (C) Variables are part of a program, not its definition.
- (D) A program can implement an algorithm, but an algorithm can also be written as natural language or a diagram.

</details>

## Question 2 (multiple choice · core)

Algorithm 1 is `IF(n MOD 2 = 0) { r ← true } ELSE { r ← false }`. Which of these stores the same value in `r` for every whole number `n ≥ 0`?

- (A) `r ← NOT(n MOD 2 = 0)`
- (B) `r ← (n MOD 2 = 0)`
- (C) `r ← (n MOD 2 = 1)`
- (D) `r ← (n / 2 = 0)`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Both store whether the remainder is 0.

- (A) is the negation, so it disagrees on every input.
- (C) stores whether n is odd: the opposite.
- (D) is true only for n = 0.

</details>

## Question 3 (multiple choice · core)

What does Algorithm D (two separate IF statements, one testing `x > y` and one testing `y > x`) store in `big` when `big` starts at 0 and both `x` and `y` are 4?

```text
big ← 0
x ← 4
y ← 4
IF(x > y)
{
  big ← x
}
IF(y > x)
{
  big ← y
}
DISPLAY(big)
```

- (A) 0
- (B) 8
- (C) 4
- (D) An error occurs.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Neither condition is true when the two numbers are equal, so `big` is never assigned and keeps its starting value of 0.

- (B) nothing adds the numbers.
- (C) is what an IF ... ELSE version would give.
- (D) The code is valid; it simply does not change `big`.

</details>

## Question 4 (multiple choice · core)

What is displayed?

```text
a ← 9
b ← 2
c ← 4
big ← a
IF(b > big)
{
  big ← b
}
IF(c > big)
{
  big ← c
}
DISPLAY(big)
```

- (A) 4
- (B) 9
- (C) 2
- (D) 15

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `big` starts at 9. `b > big` (2 > 9) is false and `c > big` (4 > 9) is false, so `big` stays 9.

- (A) and (C) are the other numbers, which would be chosen only if they were larger.
- (D) is the sum.

</details>

## Question 5 (multiple choice · foundation)

A programmer wants a program that displays the average of four test scores. Which existing algorithm should be reused as part of the solution?

- (A) Finding a robot's path through a maze
- (B) Testing whether an integer is divisible by another
- (C) Finding the minimum of two numbers
- (D) Computing the sum of the numbers

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** An average is a sum divided by the count, so the sum algorithm is the building block.

- (A) is unrelated.
- (B) answers a divisibility question.
- (C) gives the lowest score, not the average.

</details>

## Question 6 (multiple choice · core)

Which is a benefit of building a new algorithm from existing, correct algorithms?

- (A) It guarantees the new algorithm is the fastest possible.
- (B) It reduces testing and simplifies finding errors.
- (C) It removes the need to understand what the existing algorithm does.
- (D) It makes the algorithm independent of the programming language.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Trusted parts need less testing, and a fault is more likely to be in the new part.

- (A) Reuse does not guarantee speed.
- (C) You still need to understand what the part does.
- (D) The algorithm still has to be written in some language or notation.

</details>

## Question 7 (multiple select, choose two · foundation)

Which **two** of these are ways to express an algorithm without using a programming language?

- (A) A running application
- (B) A compiled program
- (C) Natural language steps
- (D) A flowchart
- (E) Machine code

<details>
<summary>Answer and explanation</summary>

**Answers: (C) and (D).** Natural language and diagrams such as flowcharts are language-free.

- (A), (B) and (E) are program forms that a computer runs.

</details>

## Question 8 (constructed response · core)

Using the "largest of three" and "smallest of three" code from the guide as a starting point, write code that stores in `spread` the difference between the largest and smallest of `a`, `b` and `c`, and displays it. Trace it for `a` = 3, `b` = 8, `c` = 8.

<details>
<summary>Answer and explanation</summary>

One correct answer:

```text
big ← a
IF(b > big)
{
  big ← b
}
IF(c > big)
{
  big ← c
}
small ← a
IF(b < small)
{
  small ← b
}
IF(c < small)
{
  small ← c
}
spread ← big - small
DISPLAY(spread)
```

Trace for 3, 8, 8: `big` starts at 3; `8 > 3` so `big` is 8; `8 > 8` is false, so `big` stays 8. `small` starts at 3; `8 < 3` false; `8 < 3` false; `small` stays 3. `spread` is 8 − 3 = 5, so `5` is displayed. The tie between `b` and `c` causes no problem.

**Suggested Marlbridge rubric (5 marks)**

| Mark point | Marks |
|---|---|
| Largest of the three computed correctly | 1 |
| Smallest of the three computed correctly (uses < not >) | 1 |
| Combines them with big - small and displays it | 1 |
| Trace shows big = 8, small = 3 | 1 |
| Result 5, and comments on the tie | 1 |

</details>

## Question 9 (constructed response · core)

A shop gives free delivery when the order total is 100 or more. Two programmers write: Algorithm P `IF(total ≥ 100) { free ← true } ELSE { free ← false }` and Algorithm Q `IF(total > 100) { free ← true } ELSE { free ← false }`. (a) Give one value of `total` for which they give different results and state each result. (b) Which algorithm matches the requirement? (c) Write a one-line replacement for P that uses no IF statement.

<details>
<summary>Answer and explanation</summary>

(a) `total` equal to 100. P gives `true` because 100 ≥ 100. Q gives `false` because 100 > 100 is false.

(b) P matches "100 or more", because the boundary value 100 must qualify.

(c) `free ← (total ≥ 100)`.

**Suggested Marlbridge rubric (4 marks)**

| Mark point | Marks |
|---|---|
| (a) Identifies 100 as the differing input | 1 |
| (a) Correct result for each algorithm | 1 |
| (b) Chooses P with the boundary reason | 1 |
| (c) A correct Boolean assignment with no IF | 1 |

</details>

## How did you do?

Count the questions you got right first time, then read the explanation for every one you missed, including the wrong options you rejected correctly, because the distractors show you the typical slips. Anything you missed twice goes onto your revision list for the [revision notes](/advanced-course-resources/computer-science-principles/3-9-developing-algorithms-revision-notes/); re-read the matching section of the [study guide](/advanced-course-resources/computer-science-principles/3-9-developing-algorithms-study-guide/) before trying again.
