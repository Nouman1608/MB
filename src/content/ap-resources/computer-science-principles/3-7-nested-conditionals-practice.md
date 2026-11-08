---
resourceId: "mb-ap-csp-3.7-practice"
title: "Nested Conditionals: Practice Questions (Computer Science Principles 3.7)"
description: "Nine original Marlbridge practice questions on tracing nested conditionals, ordering tests in chains, ELSE pairing and flattening nested conditions, with explanations and a suggested rubric."
course: "computer-science-principles"
unit: 3
topics: ["3.7"]
resourceType: "practice-questions"
prerequisiteResources: ["mb-ap-csp-3.7-study-guide"]
learningObjectives:
  - "Describe how a nested conditional is evaluated"
  - "Trace nested conditionals for given inputs, including chains of ranges"
  - "Write a nested conditional for a description and choose test values for each path"
  - "Explain why each wrong option is wrong, not only why the right one is right"
skills: ["2", "4"]
studyMinutes: 40
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.7-study-guide", "mb-ap-csp-3.7-revision-notes", "mb-ap-csp-3.7-checklist"]
next: "mb-ap-csp-3.7-checklist"
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
x ← 8
y ← 3
IF(x > 5)
{
  IF(y > 5)
  {
    DISPLAY("P")
  }
  ELSE
  {
    DISPLAY("Q")
  }
}
ELSE
{
  DISPLAY("R")
}
```

- (A) R
- (B) Q
- (C) Q R
- (D) P

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `x > 5` is true, so control enters the first block. There `y > 5` is false (3 is not greater than 5), so the inner ELSE runs and displays Q.

- (A) needs `x > 5` to be false.
- (C) only one block runs.
- (D) needs `y > 5` to be true.

</details>

## Question 2 (multiple choice · core)

The same program is run with `x` equal to 2 and `y` equal to 9. What is displayed?

- (A) Q
- (B) R
- (C) Nothing is displayed.
- (D) P

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** `x > 5` is false, so the outer ELSE runs and displays R. The inner conditional is never evaluated, so the large value of `y` is irrelevant.

- (A) assumes the inner ELSE runs when the outer test fails.
- (C) one of the outer blocks always runs.
- (D) assumes `y > 5` alone decides the result.

</details>

## Question 3 (multiple choice · core)

A teacher intends scores of 80 or more to earn A, 60 to 79 to earn B, and below 60 to earn C. The code below is run with `score` equal to 90. What is displayed, and what is the problem?

```text
score ← 90
IF(score ≥ 60)
{
  grade ← "B"
}
ELSE
{
  IF(score ≥ 80)
  {
    grade ← "A"
  }
  ELSE
  {
    grade ← "C"
  }
}
DISPLAY(grade)
```

- (A) C, because the ELSE runs last.
- (B) B, because the tests overlap and `score ≥ 60` is tested first.
- (C) Nothing, because the nested IF is never reached.
- (D) A, because 90 is the highest score.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** 90 satisfies `score ≥ 60`, so the first block runs and sets B. The `≥ 80` test is inside the ELSE and is never reached. Putting the most demanding test first fixes the code.

- (A) ELSE blocks run only when the earlier condition is false.
- (C) A block does run: the first.
- (D) ignores the order of the tests.

</details>

## Question 4 (multiple choice · core)

Which single IF statement is equivalent to the nested code `IF(a) { IF(b) { DISPLAY("go") } }`?

- (A) `IF(a) { DISPLAY("go") } ELSE { IF(b) { DISPLAY("go") } }`
- (B) `IF(a OR b) { DISPLAY("go") }`
- (C) `IF(a AND b) { DISPLAY("go") }`
- (D) `IF(NOT a AND b) { DISPLAY("go") }`

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `go` is displayed only when both a and b are true, which is AND.

- (A) displays `go` when a is false but b is true.
- (B) displays `go` when only one is true.
- (D) requires a to be false.

</details>

## Question 5 (multiple choice · stretch)

In the code below, `x` is 2. What is displayed?

```text
x ← 2
IF(x > 5)
{
  IF(x > 10)
  {
    DISPLAY("big")
  }
  ELSE
  {
    DISPLAY("small")
  }
}
```

- (A) small big
- (B) Nothing is displayed.
- (C) big
- (D) small

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The ELSE pairs with the inner `IF(x > 10)`, because that block closes just before it. The outer condition `x > 5` is false, so the inner conditional, and its ELSE, is never reached. Nothing is displayed.

- (A) and (C) are not produced by any path with x = 2.
- (D) assumes the ELSE belongs to the outer IF.

</details>

## Question 6 (multiple choice · core)

`year` is 1900. What does the leap-year conditional store in `leap`?

```text
year ← 1900
IF(year MOD 4 = 0)
{
  IF(year MOD 100 = 0)
  {
    IF(year MOD 400 = 0)
    {
      leap ← true
    }
    ELSE
    {
      leap ← false
    }
  }
  ELSE
  {
    leap ← true
  }
}
ELSE
{
  leap ← false
}
DISPLAY(leap)
```

- (A) Nothing; the program ends.
- (B) true
- (C) 1900
- (D) false

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** 1900 is divisible by 4 (true), divisible by 100 (true) and not divisible by 400 (false), so the innermost ELSE sets `leap` to false.

- (A) a block always runs.
- (B) would be the result for 2000.
- (C) `leap` stores a Boolean.

</details>

## Question 7 (multiple select, choose two · core)

Which **two** statements about a nested conditional are true?

- (A) The order of tests in a chain of ranges never changes the result.
- (B) The inner condition is evaluated only when control enters the block that contains it.
- (C) A nested conditional can only be used with Boolean variables.
- (D) Both the inner and outer ELSE blocks run when both conditions are false.
- (E) An ELSE belongs to the IF whose block closes just before it.

<details>
<summary>Answer and explanation</summary>

**Answers: (B) and (E).** These are the two structural rules of nesting.

- (A) The order matters when the tests overlap.
- (C) Any Boolean expression can be a condition.
- (D) Only one block runs for a given input.

</details>

## Question 8 (constructed response · core)

A system checks a login. The variable `user` holds the user name and `passOk` holds a Boolean that is `true` if the passcode entered was correct. Write a nested conditional that displays `"Welcome"` if `user = "admin"` and the passcode is correct, `"Wrong passcode"` if `user = "admin"` and the passcode is wrong, and `"Unknown user"` otherwise. State which inputs reach each message.

<details>
<summary>Answer and explanation</summary>

One correct answer:

```text
IF(user = "admin")
{
  IF(passOk)
  {
    DISPLAY("Welcome")
  }
  ELSE
  {
    DISPLAY("Wrong passcode")
  }
}
ELSE
{
  DISPLAY("Unknown user")
}
```

`"Welcome"`: user is admin and the passcode is correct. `"Wrong passcode"`: user is admin and the passcode is wrong. `"Unknown user"`: any other user name, whatever the passcode.

**Suggested Marlbridge rubric (4 marks)**

| Mark point | Marks |
|---|---|
| Outer test on the user name with the other users in the outer ELSE | 1 |
| Inner test on the passcode inside the first block | 1 |
| Each of the three messages in the correct block | 1 |
| Identifies the input for each message | 1 |

</details>

## Question 9 (constructed response · stretch)

(a) Write a single IF statement, with no nesting, that is equivalent to `IF(m > 0) { IF(m MOD 2 = 0) { DISPLAY("positive even") } }`. (b) Explain why the nested conditional in Question 1 of this set (the one with outcomes P, Q and R) cannot be replaced by one IF with an AND.

<details>
<summary>Answer and explanation</summary>

(a) `IF(m > 0 AND m MOD 2 = 0) { DISPLAY("positive even") }`. The message is shown only when both conditions hold, which is what AND means.

(b) That code has **three** different results: P, Q and R. A single `IF ... AND ...` has only two outcomes (the block runs or not), so it cannot separate Q (outer true, inner false) from R (outer false) without extra tests. Flattening works only when there is one outcome and no ELSE blocks.

**Suggested Marlbridge rubric (4 marks)**

| Mark point | Marks |
|---|---|
| (a) Uses AND to combine the two conditions | 1 |
| (a) Keeps the single DISPLAY block with the same message | 1 |
| (b) States that the original has three outcomes | 1 |
| (b) Explains that a single AND condition gives only two outcomes / flattening needs one outcome and no ELSE | 1 |

</details>

## How did you do?

Count the questions you got right first time, then read the explanation for every one you missed, including the wrong options you rejected correctly, because the distractors show you the typical slips. Anything you missed twice goes onto your revision list for the [revision notes](/advanced-course-resources/computer-science-principles/3-7-nested-conditionals-revision-notes/); re-read the matching section of the [study guide](/advanced-course-resources/computer-science-principles/3-7-nested-conditionals-study-guide/) before trying again.
