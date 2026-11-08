---
resourceId: "mb-ap-csp-3.1-practice"
title: "Variables and Assignments: Practice Questions (Computer Science Principles 3.1)"
description: "Nine original Marlbridge practice questions on assignment, tracing, swapping, running totals, naming and list copies, with explanations and a suggested rubric."
course: "computer-science-principles"
unit: 3
topics: ["3.1"]
resourceType: "practice-questions"
prerequisiteResources: ["mb-ap-csp-3.1-study-guide"]
learningObjectives:
  - "Explain what a variable is and why programs need them"
  - "Determine the value of a variable after a sequence of assignments"
  - "Use a trace table and the swap pattern correctly"
  - "Explain why each wrong option is wrong, not only why the right one is right"
skills: ["2", "4"]
studyMinutes: 40
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.1-study-guide", "mb-ap-csp-3.1-revision-notes", "mb-ap-csp-3.1-checklist"]
next: "mb-ap-csp-3.1-checklist"
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

What is displayed by the code segment?

```text
x ← 3
y ← x
x ← x + 4
DISPLAY(y)
```

- (A) 10
- (B) 4
- (C) 7
- (D) 3

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Trace: `x` is 3, `y` copies 3, `x` becomes 7 (3 + 4). `y` was a copy, so it still holds 3.

- (A) 10 adds 3 + 7, which no line does.
- (B) 4 is the amount added, not a variable value.
- (C) 7 treats `y` as linked to `x`.

</details>

## Question 2 (multiple choice · core)

A programmer wants to swap the values of `p` and `q`. Which segment does this correctly?

- (A) `temp ← p`  then  `p ← q`  then  `q ← temp`
- (B) `p ← temp`  then  `temp ← q`  then  `q ← p`
- (C) `p ← q`  then  `q ← p`
- (D) `temp ← p`  then  `q ← temp`  then  `p ← q`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Check (A) with p = 1, q = 2: temp = 1, p = 2, q = 1. Swapped.

- (B) Uses `temp` before it has been given a value.
- (C) Overwrites `p`, then copies the new `p` back, so both become the original `q`.
- (D) After `temp ← p` and `q ← temp`, `q` is the original `p`; the original `q` is lost, so `p ← q` sets p to the same value. Both end as the original `p`.

</details>

## Question 3 (multiple choice · foundation)

What is displayed?

```text
total ← 0
price ← 5
total ← total + price
price ← 8
total ← total + price
DISPLAY(total)
```

- (A) 5
- (B) 18
- (C) 8
- (D) 13

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** `total` starts at 0. After the first update it is 5. `price` changes to 8 but `total` is unchanged. The second update gives 5 + 8 = 13.

- (A) 5 stops after the first update.
- (B) 18 adds 5 twice and 8, or double counts.
- (C) 8 is just the latest price.

</details>

## Question 4 (multiple choice · foundation)

A program keeps track of how many seconds remain in a game. Which variable name is best?

- (A) `secondsLeft`
- (B) `s`
- (C) `x1`
- (D) `thing`

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** A meaningful name tells a reader what the value represents, which helps readability and maintenance. The others say nothing about the data.

- (B) A single letter is acceptable in tiny examples but communicates little.
- (C) A numbered placeholder hides the meaning.
- (D) Too vague to be useful.

</details>

## Question 5 (multiple choice · core)

Which piece of information is best stored as a string rather than a number?

- (A) The number of items in a shopping basket
- (B) A phone number that begins with a zero
- (C) The average temperature for a week
- (D) The price of an item

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** You never do arithmetic on a phone number, and stored as a number its leading zero would be lost, so a string suits it.

- (A), (C) and (D) are quantities you would add, compare or average, so a number is the better choice.

</details>

## Question 6 (multiple select, choose two · core)

After the code runs, which **two** statements are true?

```text
a ← 5
b ← a
a ← a + b
DISPLAY(a)
DISPLAY(b)
```

- (A) `a` holds 10
- (B) `b` holds 5
- (C) `b` was changed by the last line
- (D) `b` holds 10
- (E) `a` and `b` are linked and always equal

<details>
<summary>Answer and explanation</summary>

**Answers: (A) and (B).** `a ← 5`, `b ← a` copies 5 into `b`, then `a ← a + b` is 5 + 5 = 10.

- (C) is false: only `a` was assigned on the last line.
- (D) is false: `b` still holds 5.
- (E) is false: assignment copies a value once.

</details>

## Question 7 (multiple choice · core)

What is displayed?

```text
bList ← [20, 40, 60]
aList ← bList
bList[1] ← 99
DISPLAY(aList[1])
DISPLAY(bList[1])
```

- (A) 99 99
- (B) 99 20
- (C) 20 20
- (D) 20 99

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Assigning `bList` to `aList` stores a copy of the list. Changing the first element of `bList` afterwards does not change `aList`, so `aList[1]` is still 20 and `bList[1]` is 99.

- (A) assumes the two names refer to the same list.
- (B) swaps the order of the two displays.
- (C) forgets the change to `bList`.

</details>

## Question 8 (constructed response · core)

(a) Copy the code and complete a trace table showing `m` and `n` after each line. (b) State what is displayed. (c) Explain, in one sentence, why line 3 uses the value of `m` that it does.

```text
m ← 6
n ← m * 2
m ← n - m
n ← n - 1
DISPLAY(m)
DISPLAY(n)
```

<details>
<summary>Answer and explanation</summary>

(a)

| After line | m | n |
|---|---|---|
| 1 `m ← 6` | 6 | not set |
| 2 `n ← m * 2` | 6 | 12 |
| 3 `m ← n - m` | 6 | 12 |
| 4 `n ← n - 1` | 6 | 11 |

Line 3 gives m = 12 − 6 = 6, so `m` happens not to change. Line 4 gives n = 12 − 1 = 11.

(b) `6 11`.

(c) The right side is evaluated using the values the variables hold *at that moment* (m = 6, n = 12), before the result is stored in `m`.

**Suggested Marlbridge rubric (4 marks)**

| Mark point | Marks |
|---|---|
| Trace table with correct values after lines 1 and 2 (m = 6; n = 12) | 1 |
| Correct values after lines 3 and 4 (m = 6 then 6; n = 12 then 11) | 1 |
| Displays `6 11` | 1 |
| Explains that the right side is evaluated with current values before the store | 1 |

</details>

## Question 9 (constructed response · core)

A shop program must record that a customer's balance starts at 40, then a deposit of 15 is made, then a withdrawal of 22. (a) Write a code segment that uses the variable `balance` and displays the final balance. (b) State the displayed value. (c) Explain why line `balance ← balance + 15` does not mean that `balance` equals itself plus 15 forever.

<details>
<summary>Answer and explanation</summary>

(a) One correct segment:

```text
balance ← 40
balance ← balance + 15
balance ← balance - 22
DISPLAY(balance)
```

(b) 40 + 15 = 55, then 55 − 22 = 33, so `33` is displayed.

(c) `←` is an instruction carried out once. The right side is evaluated with the current value (40), and the result (55) replaces the old value. It is not an equation.

**Suggested Marlbridge rubric (5 marks)**

| Mark point | Marks |
|---|---|
| Initialises `balance` to 40 | 1 |
| Two updates using `balance` on both sides with correct signs | 1 |
| `DISPLAY(balance)` after the updates | 1 |
| Final value 33 | 1 |
| Explains assignment as evaluate-then-store, not a lasting equation | 1 |

</details>

## How did you do?

Count the questions you got right first time, then read the explanation for every one you missed, including the wrong options you rejected correctly, because the distractors show you the typical slips. Anything you missed twice goes onto your revision list for the [revision notes](/advanced-course-resources/computer-science-principles/3-1-variables-assignments-revision-notes/); re-read the matching section of the [study guide](/advanced-course-resources/computer-science-principles/3-1-variables-assignments-study-guide/) before trying again.
