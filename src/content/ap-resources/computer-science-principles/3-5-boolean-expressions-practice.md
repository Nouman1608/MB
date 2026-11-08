---
resourceId: "mb-ap-csp-3.5-practice"
title: "Boolean Expressions: Practice Questions (Computer Science Principles 3.5)"
description: "Nine original Marlbridge practice questions on relational and logical operators, ranges, equivalent expressions and truth tables, with explanations and a suggested rubric."
course: "computer-science-principles"
unit: 3
topics: ["3.5"]
resourceType: "practice-questions"
prerequisiteResources: ["mb-ap-csp-3.5-study-guide"]
learningObjectives:
  - "Evaluate expressions with =, ≠, >, <, ≥ and ≤"
  - "Evaluate and write expressions with NOT, AND and OR using truth tables"
  - "Translate a requirement such as \"between 13 and 19\" into a correct Boolean expression"
  - "Explain why each wrong option is wrong, not only why the right one is right"
skills: ["2", "4"]
studyMinutes: 40
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.5-study-guide", "mb-ap-csp-3.5-revision-notes", "mb-ap-csp-3.5-checklist"]
next: "mb-ap-csp-3.5-checklist"
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

What is the value of `5 ≥ 5`?

```text
DISPLAY(5 ≥ 5)
```

- (A) The expression produces an error.
- (B) 5
- (C) true
- (D) false

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `≥` means greater than **or equal to**, so equal values make it true.

- (A) Comparing equal numbers is valid.
- (B) A comparison produces a Boolean, never a number.
- (D) would be the answer for `5 > 5`.

</details>

## Question 2 (multiple choice · core)

The variables `x` and `y` hold 5 and 2. What is displayed?

```text
x ← 5
y ← 2
DISPLAY(NOT(x > 3 AND y = 2))
```

- (A) 2
- (B) 5
- (C) false
- (D) true

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `x > 3` is true and `y = 2` is true, so `x > 3 AND y = 2` is true. `NOT(true)` is false.

- (A) and (B) are variable values; a Boolean expression produces true or false.
- (D) forgets the NOT.

</details>

## Question 3 (multiple choice · core)

Which expression is true exactly when `n` is from 1 to 10, including both ends?

- (A) `n ≥ 1 AND n ≤ 10`
- (B) `n ≥ 1 AND n ≥ 10`
- (C) `n ≥ 1 OR n ≤ 10`
- (D) `n > 1 AND n < 10`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Both bounds must hold, and `≥` and `≤` include the end values.

- (B) is true only for numbers that are at least 10.
- (C) is true for every number.
- (D) excludes 1 and 10.

</details>

## Question 4 (multiple choice · core)

Which expression is equivalent to `NOT(a OR b)`?

- (A) `NOT a OR NOT b`
- (B) `a AND b`
- (C) `NOT(a AND b)`
- (D) `NOT a AND NOT b`

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** De Morgan: negating an OR gives the AND of the negations.

- (A) is the equivalent of `NOT(a AND b)`.
- (B) is true for a different set of cases (when both are true, whereas `NOT(a OR b)` is true only when both are false).
- (C) differs when exactly one of a, b is true: `NOT(a AND b)` is true there but `NOT(a OR b)` is false.

</details>

## Question 5 (multiple choice · core)

What is displayed?

```text
p ← true
q ← false
r ← true
DISPLAY((p OR q) AND NOT r)
```

- (A) r
- (B) true
- (C) p
- (D) false

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** `p OR q` is true; `NOT r` is `NOT true`, which is false; true AND false is false.

- (A) and (C) are variable names, not values.
- (B) ignores the NOT.

</details>

## Question 6 (multiple choice · foundation)

The variable `score` holds 10. What does `score ≠ 10` evaluate to?

```text
score ← 10
DISPLAY(score ≠ 10)
```

- (A) 10
- (B) true
- (C) false
- (D) 0

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** `≠` means "not equal", and 10 equals 10, so the comparison is false.

- (A) and (D) are numbers, not Booleans.
- (B) would be correct for `score = 10`.

</details>

## Question 7 (multiple select, choose two · stretch)

Which **two** expressions are equivalent to `NOT(a ≥ b)`?

- (A) `a < b`
- (B) `NOT(a > b) AND a ≠ b`
- (C) `a ≤ b`
- (D) `(a < b) OR (a = b)`
- (E) `a > b`

<details>
<summary>Answer and explanation</summary>

**Answers: (A) and (B).** `NOT(a ≥ b)` means a is strictly smaller than b. `a < b` says that directly. `NOT(a > b)` means a ≤ b, and `a ≠ b` removes the equal case, leaving a < b.

- (C) includes a = b.
- (D) is the same as `a ≤ b`.
- (E) is the opposite direction.

</details>

## Question 8 (constructed response · core)

A cinema gives a discount to a customer if (they are a student and under 26) or (they are a member and have been a member for at least 2 years). The variables are `isStudent` (Boolean), `age`, `isMember` (Boolean) and `years`. (a) Write a Boolean expression that is true exactly when the customer gets the discount. (b) State its value for a 24-year-old non-student who has been a member for 3 years. (c) State its value for a 30-year-old student with no membership.

<details>
<summary>Answer and explanation</summary>

(a) `(isStudent AND age < 26) OR (isMember AND years ≥ 2)`

(b) `isStudent` is false, so the first bracket is false. `isMember` is true and `years ≥ 2` is true (3 ≥ 2), so the second bracket is true. false OR true is **true**: the customer gets the discount.

(c) The student is 30, so `age < 26` is false and the first bracket is false. Not a member, so the second bracket is false. false OR false is **false**.

**Suggested Marlbridge rubric (5 marks)**

| Mark point | Marks |
|---|---|
| (a) Correct AND grouping for the student condition (`isStudent AND age < 26`) | 1 |
| (a) Correct AND grouping for the member condition with `years ≥ 2` (not `>`) | 1 |
| (a) The two groups joined by OR, bracketed | 1 |
| (b) true with reasoning | 1 |
| (c) false with reasoning | 1 |

</details>

## Question 9 (constructed response · core)

Complete a truth table for the expression `p AND NOT q` for all four combinations of p and q. State the single row in which it is true, and write one sentence in words describing when it is true.

<details>
<summary>Answer and explanation</summary>

| p | q | NOT q | p AND NOT q |
|---|---|---|---|
| true | true | false | false |
| true | false | true | **true** |
| false | true | false | false |
| false | false | true | false |

It is true only when p is true and q is false. In words: "p holds but q does not".

**Suggested Marlbridge rubric (4 marks)**

| Mark point | Marks |
|---|---|
| Correct NOT q column | 1 |
| Correct p AND NOT q column (one true row) | 1 |
| Identifies the true row (p true, q false) | 1 |
| Correct description in words | 1 |

</details>

## How did you do?

Count the questions you got right first time, then read the explanation for every one you missed, including the wrong options you rejected correctly, because the distractors show you the typical slips. Anything you missed twice goes onto your revision list for the [revision notes](/advanced-course-resources/computer-science-principles/3-5-boolean-expressions-revision-notes/); re-read the matching section of the [study guide](/advanced-course-resources/computer-science-principles/3-5-boolean-expressions-study-guide/) before trying again.
