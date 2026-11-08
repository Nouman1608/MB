---
resourceId: "mb-ap-csp-3.3-practice"
title: "Mathematical Expressions: Practice Questions (Computer Science Principles 3.3)"
description: "Nine original Marlbridge practice questions on evaluating expressions, order of operations and MOD patterns such as parity, digits and clock wrap, with explanations and a suggested rubric."
course: "computer-science-principles"
unit: 3
topics: ["3.3"]
resourceType: "practice-questions"
prerequisiteResources: ["mb-ap-csp-3.3-study-guide"]
learningObjectives:
  - "Evaluate expressions that use +, -, *, / and MOD in the correct order"
  - "Compute a remainder and explain what MOD means"
  - "Use MOD to test for even, odd and divisible numbers and to wrap values"
  - "Explain why each wrong option is wrong, not only why the right one is right"
skills: ["2", "4"]
studyMinutes: 40
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.3-study-guide", "mb-ap-csp-3.3-revision-notes", "mb-ap-csp-3.3-checklist"]
next: "mb-ap-csp-3.3-checklist"
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

What is the value of `17 MOD 5`?

```text
DISPLAY(17 MOD 5)
```

- (A) 2
- (B) 3.4
- (C) 12
- (D) 3

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Five goes into 17 three times (15) with 2 left over, so the remainder is 2.

- (B) 3.4 is `17 / 5`.
- (C) 12 is `17 - 5`.
- (D) 3 is the quotient, not the remainder.

</details>

## Question 2 (multiple choice · core)

What is displayed?

```text
DISPLAY(7 + 6 MOD 4 * 2)
```

- (A) 2
- (B) 9
- (C) 13
- (D) 11

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** `6 MOD 4 = 2`, `2 * 2 = 4` (MOD and `*` share precedence and go left to right), then `7 + 4 = 11`.

- (A) adds first: `(7 + 6) MOD 4 * 2` is `13 MOD 4 * 2 = 1 * 2 = 2`.
- (B) forgets the `* 2`: `7 + 6 MOD 4 = 9`.
- (C) evaluates `4 * 2 = 8` first, then `6 MOD 8 = 6`, then `7 + 6`. That treats MOD as lower precedence than `*`.

</details>

## Question 3 (multiple choice · core)

Which expression evaluates to `true` exactly when the integer `n` is odd?

- (A) `n MOD 1 = 0`
- (B) `n / 2 = 1`
- (C) `n MOD 2 = 0`
- (D) `n MOD 2 = 1`

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** An odd number leaves remainder 1 on division by 2.

- (A) is true for every integer, because 1 divides everything.
- (B) is true only for n = 2.
- (C) tests for even.

</details>

## Question 4 (multiple choice · core)

The variable `h` holds the current hour on a 24-hour clock (0 to 23). Which expression gives the hour `k` hours later?

- (A) `(h + k) MOD 24`
- (B) `h + k MOD 24`
- (C) `(h + k) / 24`
- (D) `h MOD 24 + k`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Adding the hours then taking MOD 24 wraps the result into 0 to 23.

- (B) evaluates `k MOD 24` first, so it does not wrap the sum.
- (C) divides rather than wraps.
- (D) leaves `k` outside the wrap.

</details>

## Question 5 (multiple choice · core)

What is displayed?

```text
n ← 4826
last ← n MOD 10
rest ← (n - last) / 10
DISPLAY(last)
DISPLAY(rest)
```

- (A) 6 4820
- (B) 6 482
- (C) 482 6
- (D) 4826 0

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `last` is `4826 MOD 10 = 6`. `rest` is `(4826 - 6) / 10 = 482`. The two values are displayed in that order.

- (A) forgets to divide by 10: `n - last` is 4820, not 482.
- (C) lists the two values in the wrong order.
- (D) shows the whole number followed by a remainder of 0, which no line produces.

</details>

## Question 6 (multiple choice · core)

What is displayed?

```text
DISPLAY(12 / 4 * 3)
```

- (A) 12
- (B) 9
- (C) 1
- (D) 0.25

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Left to right: `12 / 4 = 3`, then `3 * 3 = 9`.

- (A) ignores the operators and keeps the first number.
- (C) divides 12 by `4 * 3` instead of going left to right.
- (D) reverses the division (`3 / 12`).

</details>

## Question 7 (multiple select, choose two · core)

Which **two** expressions evaluate to 3?

- (A) `(11 - 2) / 3`
- (B) `2 + 8 MOD 6`
- (C) `18 MOD 5 * 2`
- (D) `11 MOD 4`
- (E) `11 / 4`

<details>
<summary>Answer and explanation</summary>

**Answers: (A) and (D).** `11 MOD 4 = 3` and `(11 - 2) / 3 = 9 / 3 = 3`.

- (B) is `2 + 2 = 4`.
- (C) is `3 * 2 = 6`.
- (E) is 2.75.

</details>

## Question 8 (constructed response · core)

A timer holds a number of seconds in the variable `secs`. (a) Write an expression for the whole minutes (use `secs MOD 60` as part of it). (b) Write an expression for the seconds left over. (c) Evaluate both for `secs` = 197.

<details>
<summary>Answer and explanation</summary>

(a) `(secs - secs MOD 60) / 60`

(b) `secs MOD 60`

(c) `197 MOD 60 = 17` (60 fits three times, 180, leaving 17), so the leftover seconds are 17. Whole minutes: `(197 - 17) / 60 = 180 / 60 = 3`. The time is 3 minutes 17 seconds. Check: 3 × 60 + 17 = 197 ✓.

**Suggested Marlbridge rubric (4 marks)**

| Mark point | Marks |
|---|---|
| (a) Subtracts the remainder before dividing by 60 | 1 |
| (b) `secs MOD 60` | 1 |
| (c) Leftover seconds 17 | 1 |
| (c) Whole minutes 3 with the arithmetic shown | 1 |

</details>

## Question 9 (constructed response · stretch)

A student writes `score ← 5 + 20 MOD 6 * 3 - 2` and says the answer is 5. (a) Evaluate the expression, showing each step. (b) Explain the mistake that would give 5.

<details>
<summary>Answer and explanation</summary>

(a) `20 MOD 6 = 2` (6 fits three times, 18, leaving 2). Then `2 * 3 = 6`. The expression becomes `5 + 6 - 2 = 9`. So `score` is 9.

(b) To get 5 the student must have evaluated `6 * 3 = 18` first, then `20 MOD 18 = 2`, then `5 + 2 - 2 = 5`. That is a precedence error: `20 MOD 6 * 3` must be read as `(20 MOD 6) * 3`, because MOD and `*` share precedence and go left to right. Grouping `6 * 3` first is wrong.

**Suggested Marlbridge rubric (4 marks)**

| Mark point | Marks |
|---|---|
| (a) 20 MOD 6 = 2 | 1 |
| (a) 2 * 3 = 6 then 5 + 6 - 2 | 1 |
| (a) Final value 9 | 1 |
| (b) Identifies the precedence or left-to-right error (6 * 3 evaluated first) | 1 |

</details>

## How did you do?

Count the questions you got right first time, then read the explanation for every one you missed, including the wrong options you rejected correctly, because the distractors show you the typical slips. Anything you missed twice goes onto your revision list for the [revision notes](/advanced-course-resources/computer-science-principles/3-3-mathematical-expressions-revision-notes/); re-read the matching section of the [study guide](/advanced-course-resources/computer-science-principles/3-3-mathematical-expressions-study-guide/) before trying again.
