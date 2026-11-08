---
resourceId: "mb-ap-csp-3.14-practice"
title: "Libraries: Practice Questions (Computer Science Principles 3.14)"
description: "Nine original Marlbridge practice questions on libraries, APIs, documentation and using a documented procedure correctly, with explanations and a suggested rubric. Uses an original fictional library."
course: "computer-science-principles"
unit: 3
topics: ["3.14"]
resourceType: "practice-questions"
prerequisiteResources: ["mb-ap-csp-3.14-study-guide"]
learningObjectives:
  - "Explain what a library and an API are and why documentation is needed"
  - "Predict the result of calling a library procedure from its documentation"
  - "Use documented conditions to guard a call"
  - "Explain why each wrong option is wrong, not only why the right one is right"
skills: ["2"]
studyMinutes: 40
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.14-study-guide", "mb-ap-csp-3.14-revision-notes", "mb-ap-csp-3.14-checklist"]
next: "mb-ap-csp-3.14-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "9 original questions: multiple choice, multiple select and constructed response."
  - "Every answer explains why each wrong option fails."
  - "Constructed-response answers come with a suggested Marlbridge rubric."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

These are **original Marlbridge practice questions**, not past exam questions. All scenarios are fictional. The code is Marlbridge's rendering of the exam reference notation (`←` assignment, `=` equality test, lists start at index 1, `DISPLAY` shows a value). Mark points are a **suggested Marlbridge rubric**, not an official scoring guideline. No calculator is needed or allowed. Try each question before opening its answer.

## Question 1 (multiple choice · foundation)

What is a software library?

- (A) The area of memory where a program is stored.
- (B) A program that can only be run once.
- (C) A list of all the variables in a program.
- (D) A collection of procedures that can be used to create new programs.

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** A library supplies reusable, usually tested, procedures.

- (A), (B) and (C) are unrelated.

</details>

## Question 2 (multiple choice · foundation)

What is an application program interface (API)?

- (A) A copy of a program's source code.
- (B) A specification of how the procedures in a library behave and can be used.
- (C) The window that a program shows to the user.
- (D) A programming language.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** An API describes the procedures, their parameters and their results.

- (A) An API need not reveal source code.
- (C) describes a user interface.
- (D) A language is not an API.

</details>

## Question 3 (multiple choice · core)

Why is documentation for a library necessary?

- (A) It lets the programmer change the library code.
- (B) It explains the behaviours the library provides and how to use them.
- (C) It removes the need to test the program.
- (D) It makes the library run faster.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** You normally cannot see the library code, so documentation is the source of truth about its behaviour.

- (A), (C) and (D) are not effects of documentation.

</details>

## Question 4 (multiple choice · core)

NumberKit documentation: `clamp(value, low, high)` returns `low` if `value < low`, `high` if `value > high`, otherwise `value`. What is displayed?

```text
x ← 12
DISPLAY(clamp(x, 0, 5))
```

- (A) 0
- (B) 5
- (C) 12
- (D) 7

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `clamp(12, 0, 5)`: 12 > 5, so it returns `high` (5). `clamp` returns a new value; `x` is unchanged but the call is displayed.

- (A) is `low`.
- (C) is the unchanged value.
- (D) subtracts the limit (12 − 5) instead of applying the rule.

</details>

## Question 5 (multiple choice · core)

`average(aList)` requires a non-empty list. Which code is the safest way to display the average of `scores`?

- (A) `IF(LENGTH(scores) > 0) { DISPLAY(average(scores)) }`
- (B) `DISPLAY(average([]))`
- (C) `DISPLAY(average(scores))`
- (D) `DISPLAY(average(scores)) DISPLAY(average([]))`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The IF protects the call from an empty list, matching the documented condition.

- (B) and (D) call the procedure with an empty list.
- (C) breaks the condition when `scores` is empty.

</details>

## Question 6 (multiple choice · core)

A student needs to draw a line chart of 200 values. Which approach is most sensible?

- (A) Write all the drawing code from scratch.
- (B) Use a text-formatting library.
- (C) Look for a graphing library and read its documentation.
- (D) Avoid drawing anything.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Graphing libraries exist precisely to make complex tasks like charts simpler and more reliable.

- (A) is slower and riskier.
- (B) does not suit the task.
- (D) does not solve the problem.

</details>

## Question 7 (multiple select, choose two · core)

Which **two** are benefits of using a library of existing procedures?

- (A) It can reduce development time.
- (B) It can reduce the amount of testing of the new code.
- (C) It makes the program independent of any computer.
- (D) It means the programmer does not need to read any documentation.
- (E) It guarantees that the new program has no errors.

<details>
<summary>Answer and explanation</summary>

**Answers: (A) and (B).** Ready-made, tested procedures save development time and testing.

- (C) Programs still run on computers.
- (D) Documentation is needed.
- (E) Errors in your own code can still occur.

</details>

## Question 8 (constructed response · core)

Using only the NumberKit documentation in this guide, state what each line displays: `DISPLAY(largest([3, 9, 4]))`, `DISPLAY(repeatText("ha", 3))`, `DISPLAY(clamp(average([2, 4, 6]) * 3, 0, 10))`. Show your working for the third.

<details>
<summary>Answer and explanation</summary>

Line 1: `largest([3, 9, 4])` returns the largest value, 9.

Line 2: `repeatText("ha", 3)` joins "ha" to itself 3 times: `hahaha`.

Line 3: `average([2, 4, 6])` is (2 + 4 + 6) / 3 = 4. Then 4 × 3 = 12. `clamp(12, 0, 10)`: 12 > high (10), so it returns 10.

Displayed: `9 hahaha 10`.

**Suggested Marlbridge rubric (4 marks)**

| Mark point | Marks |
|---|---|
| Line 1: 9 | 1 |
| Line 2: hahaha | 1 |
| Line 3: average evaluated as 4 first | 1 |
| Line 3: argument 12 then clamp returns high (10) | 1 |

</details>

## Question 9 (constructed response · core)

A game keeps `health` between 0 and 100. A hit reduces it by `damage`. (a) Write one statement using `clamp` that updates `health` after a hit. (b) The player has 30 health and takes 45 damage: what is `health` afterwards? (c) The player has 20 health and picks up a heal of 90: write the statement and state the result. (d) Explain one advantage of using `clamp` rather than writing two IF statements.

<details>
<summary>Answer and explanation</summary>

(a) `health ← clamp(health - damage, 0, 100)`

(b) `30 - 45 = -15`; −15 < low (0), so `clamp` returns 0. `health` is 0.

(c) `health ← clamp(health + 90, 0, 100)`: 20 + 90 = 110 > 100, so the result is 100.

(d) The intent is clear in one line, the procedure is already tested, and the same call handles both ends of the range, so there is less code to write and check.

**Suggested Marlbridge rubric (5 marks)**

| Mark point | Marks |
|---|---|
| (a) Uses clamp with `health - damage` and the range 0 to 100, assigned back to `health` | 1 |
| (b) 0 with the reason | 1 |
| (c) Correct statement for the heal | 1 |
| (c) Result 100 with the reason | 1 |
| (d) A valid advantage (clarity, already tested, less code) | 1 |

</details>

## How did you do?

Count the questions you got right first time, then read the explanation for every one you missed, including the wrong options you rejected correctly, because the distractors show you the typical slips. Anything you missed twice goes onto your revision list for the [revision notes](/advanced-course-resources/computer-science-principles/3-14-libraries-revision-notes/); re-read the matching section of the [study guide](/advanced-course-resources/computer-science-principles/3-14-libraries-study-guide/) before trying again.
