---
resourceId: "mb-ap-csp-1.4-practice"
title: "Identifying and Correcting Errors: Practice Questions (Computer Science Principles 1.4)"
description: "Ten original practice questions on error types, test case design, boundary inputs and finding errors by tracing, with full explanations and suggested rubrics."
course: "computer-science-principles"
unit: 1
topics: ["1.4"]
resourceType: "practice-questions"
prerequisites: 
  - "Topic 1.2 (inputs, outputs and tracing short code)"
prerequisiteResources: ["mb-ap-csp-1.4-study-guide"]
learningObjectives: 
  - "Apply identifying and correcting errors to unfamiliar situations"
  - "Explain your reasoning in full sentences, as constructed responses require"
skills: ["2", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-1.4-study-guide", "mb-ap-csp-1.4-revision-notes", "mb-ap-csp-1.4-checklist"]
next: "mb-ap-csp-1.4-checklist"
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "Original questions with fictional scenarios and Marlbridge-rendered pseudocode where code appears."
  - "Every answer explains why each wrong option is wrong."
  - "Rubrics are a suggested Marlbridge rubric, not official scoring."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

These are **original Marlbridge practice questions**, not past exam questions. All scenarios are fictional. Code is written in Marlbridge's rendering of the course's reference notation (assignment `←`, `DISPLAY`, `INPUT`, `*` for multiply). The rubrics are a suggested Marlbridge rubric, not an official scoring guideline. No calculator is needed.

## Question 1 (multiple choice · foundation)

A fictional student's program runs to the end but displays 12 when the correct answer is 21. Which kind of error is most likely?

- (A) Syntax error
- (B) Logic error
- (C) A rule of the language was not followed
- (D) The program is correct because it ran to the end

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The program follows the language's rules and finishes, but its behavior is wrong: a logic error.

- (A) and (C) are the same idea; a syntax error would usually prevent the program from running at all.
- (D) confuses running with being correct.
</details>

## Question 2 (multiple choice · foundation)

A program has the statement `DISPLAY(total / count)`. When `count` is 0 the program stops with a message. This is

- (A) a syntax error
- (B) a run-time error
- (C) a comment
- (D) an incremental process

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The problem only appears while the program is executing with a certain input.

- (A) the line is valid in the language; the problem depends on the data.
- (C) and (D) are unrelated ideas.
</details>

## Question 3 (multiple choice · core)

The requirement says: "A user is old enough to register if their age is 13 or over." The code is `IF (age > 13)`. Which input is the **best** single test to expose the error?

- (A) 5
- (B) 13
- (C) 30
- (D) 100

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** At 13 the expected result is "old enough", but `13 > 13` is false, so the code gives the wrong result. 12 and 14 would behave correctly.

- (A) is below the boundary; both correct and faulty code agree it is not old enough.
- (C) and (D) are above; both agree they are old enough.
</details>

## Question 4 (multiple choice · core)

```text
n ← 3
result ← 1
REPEAT 3 TIMES
{
  result ← result * n
}
DISPLAY(result)
```

The code is meant to display 3 × 3 × 3. What does it display?

- (A) 9
- (B) 27
- (C) 3
- (D) 81

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Trace: result starts at 1. After pass 1: 3. After pass 2: 9. After pass 3: 27.

- (A) is two passes.
- (C) is one pass.
- (D) is four passes.
</details>

## Question 5 (multiple choice, select two · core)

Which **two** actions are effective ways to find an error in a program?

- (A) Hand tracing the code with a table of variable values
- (B) Adding an extra `DISPLAY` statement to show a variable's value at a chosen point
- (C) Deleting all comments
- (D) Renaming every variable

<details>
<summary>Answer and explanation</summary>

**Answer: (A) and (B).** Hand tracing and extra output statements both reveal what the program is really doing.

- (C) comments do not affect execution, so deleting them reveals nothing about errors.
- (D) renaming does not change behavior.
</details>

## Question 6 (multiple choice · core)

A fictional app stores a score in a number that can hold at most 255. A player's score is 255 and they earn 1 more point. The app shows 0. This is best described as

- (A) a syntax error
- (B) an overflow error
- (C) good test coverage
- (D) an incremental design

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The result is outside the range the stored number can represent.

- (A) the code follows the language rules.
- (C) and (D) are not error types.
</details>

## Question 7 (multiple choice · stretch)

A requirement: "A password must have 8 to 20 characters." Which set of test lengths is **best**?

- (A) 10, 12, 15
- (B) 7, 8, 20, 21
- (C) 1, 2, 3
- (D) 8 only

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** It tests at and just beyond each extreme: 7 and 21 should be rejected; 8 and 20 should be accepted.

- (A) only tests typical accepted values.
- (C) only tests rejected values far from the boundary.
- (D) tests one boundary value and one outcome.
</details>

## Question 8 (constructed response · core)

```text
a ← INPUT()
IF (a < 10)
{
  DISPLAY("small")
}
IF (a > 10)
{
  DISPLAY("large")
}
```

The requirement is: display "small" for numbers below 10 and "large" for 10 or more.

(a) Give a test input that shows the code is wrong, with the expected and actual outputs. (2 points) (b) Name the type of error. (1 point) (c) Rewrite the second condition so the code meets the requirement. (1 point)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (4 points).**

| Point | Award when the response… |
|---|---|
| 1 | chooses the input 10 |
| 2 | states expected "large" and actual no output |
| 3 | names a logic error |
| 4 | changes the second condition to `a >= 10` (or replaces it with an ELSE) |

**Sample response.** (a) Input 10: expected "large", actual output is nothing, because 10 is neither less than 10 nor greater than 10. (b) A logic error. (c) `IF (a >= 10)`.
</details>

## Question 9 (constructed response · core)

```text
total ← 0
i ← 2
REPEAT 3 TIMES
{
  total ← total + i
  i ← i * 2
}
DISPLAY(total)
```

(a) Complete a trace table for `total` and `i` after each pass. (3 points) (b) State the output. (1 point) (c) The intention was to display the sum 2 + 4 + 8 + 16. Explain what is wrong and how to fix it. (2 points)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (6 points), with the expected trace table.**

| After pass | `total` | `i` |
|---|---|---|
| start | 0 | 2 |
| 1 | 2 | 4 |
| 2 | 6 | 8 |
| 3 | 14 | 16 |

| Point | Award when the response… |
|---|---|
| 1 | shows pass 1 as total 2, i 4 |
| 2 | shows pass 2 as total 6, i 8 |
| 3 | shows pass 3 as total 14, i 16 |
| 4 | states the output 14 |
| 5 | explains that the loop runs three times, adding only 2, 4 and 8 (the term 16 is never added) |
| 6 | gives a fix: repeat four times (the sum is then 30) |

**Sample response.** (b) 14. (c) The loop runs only three times, so the last term, 16, is never added. Changing to `REPEAT 4 TIMES` gives 2 + 4 + 8 + 16 = 30.
</details>

## Question 10 (constructed response · stretch)

A fictional tester says: "I tested my grading program with the scores 55, 70 and 95. All passed, so there are no errors." The requirement is: grades A for 90 to 100, B for 70 to 89, C for 50 to 69, F for 0 to 49.

(a) Explain why the tester's conclusion is not justified. (2 points) (b) Give **three** more test inputs with expected outputs that would test the boundaries. (3 points)

<details>
<summary>Answer and explanation</summary>

**Suggested Marlbridge rubric (5 points).**

| Point | Award when the response… |
|---|---|
| 1 | says the tests only cover typical values and passing them does not prove correctness for every input |
| 2 | says the boundaries, where one grade changes to another, were not tested |
| 3 to 5 | gives three valid boundary tests with correct expected grades (one point each), for example 89 gives B, 90 gives A, 49 gives F, 50 gives C, 69 gives C, 100 gives A, 0 gives F |

**Sample response.** (a) The three inputs are in the middle of the ranges. A condition such as `>= 90` written as `> 90` would still pass them. (b) 90 should give A; 89 should give B; 49 should give F.
</details>

## How did you do?

Questions 1 to 7 are multiple choice; 8 to 10 are written. If you missed Question 4, re-trace with a table. If you lost points in a written question, check that your tests came from the requirement, not from the code. Re-read "Testing: defined inputs and expected outputs" in the [study guide](/advanced-course-resources/computer-science-principles/1-4-identifying-correcting-errors-study-guide/) if needed, then use the [checklist](/advanced-course-resources/computer-science-principles/1-4-identifying-correcting-errors-checklist/).
