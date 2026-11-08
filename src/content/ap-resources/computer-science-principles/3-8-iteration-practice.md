---
resourceId: "mb-ap-csp-3.8-practice"
title: "Iteration: Practice Questions (Computer Science Principles 3.8)"
description: "Nine original Marlbridge practice questions on tracing loops, zero-pass and infinite loops, counters, accumulators and robot loops, with explanations and a suggested rubric."
course: "computer-science-principles"
unit: 3
topics: ["3.8"]
resourceType: "practice-questions"
prerequisiteResources: ["mb-ap-csp-3.8-study-guide"]
learningObjectives:
  - "Explain iteration as repetition zero or more times until a stopping condition"
  - "Trace REPEAT n TIMES and REPEAT UNTIL loops with a table"
  - "Identify when a REPEAT UNTIL loop runs zero times or forever"
  - "Explain why each wrong option is wrong, not only why the right one is right"
skills: ["2", "4"]
studyMinutes: 40
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.8-study-guide", "mb-ap-csp-3.8-revision-notes", "mb-ap-csp-3.8-checklist"]
next: "mb-ap-csp-3.8-checklist"
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

What is displayed?

```text
x ← 1
REPEAT 3 TIMES
{
  x ← x + 2
}
DISPLAY(x)
```

- (A) 9
- (B) 5
- (C) 7
- (D) 3

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The block runs three times and adds 2 each time: 1 → 3 → 5 → 7.

- (A) is four passes.
- (B) stops after two passes.
- (D) is one pass.

</details>

## Question 2 (multiple choice · core)

What is displayed?

```text
n ← 10
REPEAT UNTIL(n > 5)
{
  n ← n + 1
}
DISPLAY(n)
```

- (A) 16
- (B) 10
- (C) 6
- (D) 11

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The condition `n > 5` is already true at the start (10 > 5), so the loop body never runs and `n` stays 10.

- (A) and (C) assume the loop counts toward or away from 5.
- (D) assumes the block ran once.

</details>

## Question 3 (multiple choice · core)

Which segment will **never** finish?

- (A) `n ← 9` then `REPEAT UNTIL(n = 0) { n ← n - 3 }`
- (B) `n ← 0` then `REPEAT UNTIL(n = 0) { n ← n - 3 }`
- (C) `n ← 10` then `REPEAT UNTIL(n = 0) { n ← n - 3 }`
- (D) `n ← 10` then `REPEAT UNTIL(n ≤ 0) { n ← n - 3 }`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** From 10 the values are 10, 7, 4, 1, −2, ... and never equal 0.

- (A) goes 9, 6, 3, 0 and stops.
- (B) is already true, so the block never runs and the program finishes at once.
- (D) stops as soon as `n ≤ 0`.

</details>

## Question 4 (multiple choice · core)

What is displayed?

```text
n ← 1
count ← 0
REPEAT UNTIL(n ≥ 100)
{
  n ← n * 2
  count ← count + 1
}
DISPLAY(count)
DISPLAY(n)
```

- (A) 7 64
- (B) 6 64
- (C) 7 128
- (D) 8 256

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `n` is doubled each pass: 2, 4, 8, 16, 32, 64, 128. The loop stops only when `n ≥ 100`, which first happens at 128 after 7 passes.

- (A) pairs the pass count with the wrong value.
- (B) stops at 64, which is still below 100.
- (D) goes one pass too far.

</details>

## Question 5 (multiple choice · core)

What is displayed?

```text
count ← 0
i ← 1
REPEAT 10 TIMES
{
  IF(i MOD 3 = 0)
  {
    count ← count + 1
  }
  i ← i + 1
}
DISPLAY(count)
```

- (A) 10
- (B) 0
- (C) 4
- (D) 3

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** `i` takes the values 1 to 10. The condition `i MOD 3 = 0` is true for 3, 6 and 9, so `count` becomes 3.

- (A) counts every pass.
- (B) would be the result only if the condition were never true.
- (C) needs a fourth multiple of 3 between 1 and 10, and there is none.

</details>

## Question 6 (multiple choice · core)

A robot starts in the first square of a straight corridor facing the far wall. Which segment moves it forward until it is next to the wall, whatever the length of the corridor?

- (A) `IF(CAN_MOVE(forward)) { MOVE_FORWARD() }`
- (B) `REPEAT UNTIL(NOT CAN_MOVE(forward)) { MOVE_FORWARD() }`
- (C) `REPEAT UNTIL(CAN_MOVE(forward)) { MOVE_FORWARD() }`
- (D) `REPEAT 5 TIMES { MOVE_FORWARD() }`

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The loop tests the square ahead before each move and stops when it cannot move, so it works for any length.

- (A) moves at most one square.
- (C) stops immediately because the robot *can* move at the start.
- (D) works only when the corridor needs exactly 5 moves.

</details>

## Question 7 (multiple select, choose two · core)

Which **two** statements about `REPEAT UNTIL(condition)` are true?

- (A) The condition is checked before each pass through the block.
- (B) The block always runs at least once.
- (C) The condition is checked after every statement in the block.
- (D) The loop runs while the condition is true.
- (E) The loop stops when the condition becomes true.

<details>
<summary>Answer and explanation</summary>

**Answers: (A) and (E).** REPEAT UNTIL tests first and stops on true.

- (B) The block may run zero times.
- (C) The condition is only checked before each pass.
- (D) It is the opposite: it runs while the condition is false.

</details>

## Question 8 (constructed response · core)

Write a code segment that uses a loop to find the sum of the first five even numbers (2, 4, 6, 8, 10) and displays it. Show a trace table of the variable that holds the total after each pass.

<details>
<summary>Answer and explanation</summary>

One correct answer:

```text
total ← 0
even ← 2
REPEAT 5 TIMES
{
  total ← total + even
  even ← even + 2
}
DISPLAY(total)
```

| Pass | `even` used | `total` after |
|---|---|---|
| 1 | 2 | 2 |
| 2 | 4 | 6 |
| 3 | 6 | 12 |
| 4 | 8 | 20 |
| 5 | 10 | 30 |

`30` is displayed. Check: 2 + 4 + 6 + 8 + 10 = 30 ✓.

**Suggested Marlbridge rubric (5 marks)**

| Mark point | Marks |
|---|---|
| Initialises the total to 0 and the first even number to 2 | 1 |
| A loop that runs five times (or until the 5th number is used) | 1 |
| Adds the current even number to the total and increases it by 2 inside the loop | 1 |
| Displays the total after the loop | 1 |
| Trace table values 2, 6, 12, 20, 30 | 1 |

</details>

## Question 9 (constructed response · core)

A programmer writes the loop below to count how many weeks it takes for a plant that is 12 cm tall and grows 5 cm a week to reach at least 40 cm. It runs forever. (a) Explain why. (b) Rewrite it so that it works, and state how many weeks and what final height your code reports.

```text
height ← 12
weeks ← 0
REPEAT UNTIL(height ≥ 40)
{
  weeks ← weeks + 1
}
```

<details>
<summary>Answer and explanation</summary>

(a) The loop body changes `weeks` but never changes `height`. The condition `height ≥ 40` depends on `height`, which stays at 12, so the condition never becomes true.

(b) Corrected code:

```text
height ← 12
weeks ← 0
REPEAT UNTIL(height ≥ 40)
{
  height ← height + 5
  weeks ← weeks + 1
}
DISPLAY(weeks)
DISPLAY(height)
```

Heights after each week: 17, 22, 27, 32, 37, 42. The loop stops when the height is 42 after 6 weeks. It displays `6 42`.

**Suggested Marlbridge rubric (5 marks)**

| Mark point | Marks |
|---|---|
| (a) The stopping condition depends on `height`, which never changes | 1 |
| (b) Adds the growth to `height` inside the loop | 1 |
| (b) Keeps the counter `weeks` increasing by 1 each pass | 1 |
| (b) States 6 weeks | 1 |
| (b) States the final height 42 | 1 |

</details>

## How did you do?

Count the questions you got right first time, then read the explanation for every one you missed, including the wrong options you rejected correctly, because the distractors show you the typical slips. Anything you missed twice goes onto your revision list for the [revision notes](/advanced-course-resources/computer-science-principles/3-8-iteration-revision-notes/); re-read the matching section of the [study guide](/advanced-course-resources/computer-science-principles/3-8-iteration-study-guide/) before trying again.
