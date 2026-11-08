---
resourceId: "mb-ap-csp-3.12-practice"
title: "Calling Procedures: Practice Questions (Computer Science Principles 3.12)"
description: "Nine original Marlbridge practice questions on calling procedures: parameters and arguments, return values, nested calls, early return, INPUT and tracing flow of control, with explanations and a rubric."
course: "computer-science-principles"
unit: 3
topics: ["3.12"]
resourceType: "practice-questions"
prerequisiteResources: ["mb-ap-csp-3.12-study-guide"]
learningObjectives:
  - "Distinguish parameters from arguments and match them by position"
  - "Trace a procedure call, including the value returned and where control resumes"
  - "Distinguish DISPLAY from RETURN, and a call used as a statement from a call used as an expression"
  - "Explain why each wrong option is wrong, not only why the right one is right"
skills: ["3", "4"]
studyMinutes: 40
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.12-study-guide", "mb-ap-csp-3.12-revision-notes", "mb-ap-csp-3.12-checklist"]
next: "mb-ap-csp-3.12-checklist"
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

In the procedure definition `PROCEDURE total(a, b)` and the call `total(2, 5)`, which statement is correct?

- (A) All four items are parameters.
- (B) `a` and `b` are parameters; 2 and 5 are arguments.
- (C) All four items are arguments.
- (D) `a` and `b` are arguments; 2 and 5 are parameters.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Parameters are the input variables in the definition; arguments are the values supplied in the call.

- (A) and (C) ignore the distinction.
- (D) reverses the terms.

</details>

## Question 2 (multiple choice · core)

What is displayed?

```text
PROCEDURE sq(n)
{
  RETURN(n * n)
}
DISPLAY(sq(sq(2)))
```

- (A) 16
- (B) 8
- (C) Nothing is displayed.
- (D) 4

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The inner call `sq(2)` returns 4; the outer call `sq(4)` returns 16.

- (B) is 2 × 4.
- (C) The outer `DISPLAY` shows the value returned.
- (D) is only the inner call.

</details>

## Question 3 (multiple choice · core)

The procedure `diff(first, second)` returns `first - second`. What does `diff(4, 10)` return?

```text
PROCEDURE diff(first, second)
{
  RETURN(first - second)
}
DISPLAY(diff(4, 10))
```

- (A) 14
- (B) -6
- (C) 40
- (D) 6

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `first` is 4 and `second` is 10, so 4 − 10 = −6. Arguments are matched by position.

- (A) adds the numbers.
- (C) multiplies them.
- (D) swaps the arguments.

</details>

## Question 4 (multiple choice · core)

What is displayed?

```text
PROCEDURE f(n)
{
  DISPLAY(n)
  RETURN(n + 1)
}
DISPLAY(f(7))
```

- (A) 8
- (B) 7 8
- (C) 7
- (D) 8 7

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `f(7)` runs first. Inside it `DISPLAY(n)` shows 7, then it returns 8. The outer `DISPLAY` then shows 8.

- (A) ignores the display inside the procedure.
- (C) ignores the outer display.
- (D) reverses the order of events.

</details>

## Question 5 (multiple choice · core)

What is displayed?

```text
PROCEDURE g(n)
{
  IF(n < 0)
  {
    DISPLAY("ok")
    RETURN(0)
  }
  DISPLAY("done")
  RETURN(1)
}
x ← g(-1)
```

- (A) done
- (B) Nothing is displayed.
- (C) ok done
- (D) ok

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** `g(-1)` takes the IF branch (`n < 0`), displays `ok` and returns at once. The line `DISPLAY("done")` after the return is never reached.

- (A) is the display for a non-negative argument.
- (B) The first `DISPLAY` runs.
- (C) assumes code after `RETURN` still runs.

</details>

## Question 6 (multiple choice · foundation)

The user types 7 when asked for input. What is displayed?

```text
n ← INPUT()
DISPLAY(n * 2)
```

- (A) Nothing is displayed.
- (B) 7
- (C) 14
- (D) n

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `INPUT()` returns 7, which is stored in `n`; `n * 2` is 14.

- (A) The last line displays the value.
- (B) forgets the doubling.
- (D) `n` is a variable, not text.

</details>

## Question 7 (multiple select, choose two · core)

Which **two** statements about procedures are true?

- (A) `RETURN` ends the procedure immediately.
- (B) A procedure runs as soon as it is defined.
- (C) A call interrupts sequential execution; control returns to the point just after the call.
- (D) Arguments are matched to parameters in any order.
- (E) `DISPLAY` returns a value to the calling code.

<details>
<summary>Answer and explanation</summary>

**Answers: (A) and (C).** These are the basic rules of calls and returns.

- (B) A procedure runs only when called.
- (D) Arguments match parameters by position.
- (E) `DISPLAY` shows a value; it does not return one.

</details>

## Question 8 (constructed response · core)

(a) Write a procedure `average(a, b)` that returns the mean of its two parameters. (b) Write a statement that stores the average of 6 and 9 in `m` and displays it. (c) State what is displayed.

<details>
<summary>Answer and explanation</summary>

(a)

```text
PROCEDURE average(a, b)
{
  RETURN((a + b) / 2)
}
```

(b)

```text
m ← average(6, 9)
DISPLAY(m)
```

(c) `(6 + 9) / 2 = 7.5`, so `7.5` is displayed.

**Suggested Marlbridge rubric (5 marks)**

| Mark point | Marks |
|---|---|
| (a) Procedure header with two parameters | 1 |
| (a) Returns (a + b) / 2 with correct brackets | 1 |
| (b) Calls with the arguments 6 and 9 and stores the result | 1 |
| (b) Displays `m` | 1 |
| (c) 7.5 | 1 |

</details>

## Question 9 (constructed response · stretch)

The procedure `lastItem(aList)` returns the last element of a list, and `firstItem(aList)` returns the first. For `nums` equal to `[4, 8, 15]`, trace `DISPLAY(lastItem(nums) - firstItem(nums))`, listing each call in the order it runs, with its returned value, and state the displayed result. Explain what would happen if `lastItem` were called with an empty list `[]`.

<details>
<summary>Answer and explanation</summary>

```text
PROCEDURE lastItem(aList)
{
  RETURN(aList[LENGTH(aList)])
}

PROCEDURE firstItem(aList)
{
  RETURN(aList[1])
}
```

Evaluation order (left to right): `lastItem(nums)`: `LENGTH(nums)` is 3, so it returns `nums[3]`, which is 15. Then `firstItem(nums)` returns `nums[1]`, which is 4. The expression becomes `15 - 4 = 11`, so `11` is displayed.

With an empty list, `LENGTH` is 0 and `aList[0]` is an invalid index, so an error message is produced and the program terminates.

**Suggested Marlbridge rubric (5 marks)**

| Mark point | Marks |
|---|---|
| `lastItem(nums)` evaluated with LENGTH 3 and returns 15 | 1 |
| `firstItem(nums)` returns 4 | 1 |
| Combines the returned values: 15 − 4 | 1 |
| Displays 11 | 1 |
| Explains the error for an empty list (index 0 is invalid) | 1 |

</details>

## How did you do?

Count the questions you got right first time, then read the explanation for every one you missed, including the wrong options you rejected correctly, because the distractors show you the typical slips. Anything you missed twice goes onto your revision list for the [revision notes](/advanced-course-resources/computer-science-principles/3-12-calling-procedures-revision-notes/); re-read the matching section of the [study guide](/advanced-course-resources/computer-science-principles/3-12-calling-procedures-study-guide/) before trying again.
