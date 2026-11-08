---
resourceId: "mb-ap-csp-3.1-revision-notes"
title: "Variables and Assignments: Revision Notes (Computer Science Principles 3.1)"
description: "One-page recap of variables, assignment, tracing and swapping, with the notation, a key-relationships table and the mistakes that cost marks."
course: "computer-science-principles"
unit: 3
topics: ["3.1"]
resourceType: "revision-notes"
prerequisiteResources: ["mb-ap-csp-3.1-study-guide"]
learningObjectives:
  - "Recall the key ideas and notation of this topic quickly"
  - "Spot the common errors before making them"
skills: ["2", "4"]
studyMinutes: 12
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.1-study-guide", "mb-ap-csp-3.1-practice", "mb-ap-csp-3.1-checklist"]
next: "mb-ap-csp-3.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "A variable is a named abstraction that holds one value at a time; the value can be a list."
  - "Assignment (←) evaluates the right side first, then stores a copy in the variable, replacing the old value."
  - "A variable keeps the most recent value assigned; copying b ← a does not link the two variables."
  - "To overwrite a value you still need, save it in a temporary variable first."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## Recap

- A **variable** is a named abstraction that holds **one value** at a time (number, Boolean, string or list).
- `a ← expression` **evaluates** the expression, then **stores a copy** of the result in `a`, replacing the old value.
- A variable always holds the **most recent** value assigned. Earlier values are lost.
- `b ← a` copies the value once. Later changes to `a` do not change `b`.
- Assigning a list to a list variable stores a **copy** of the list.
- Meaningful names (`secondsLeft`, not `s`) help readers; they do not change behaviour.

## Key relationships

| Idea | Notation or rule | Example |
|---|---|---|
| Assignment | `variable ← expression` | `total ← 0` |
| Update using itself | Right side uses the old value | `count ← count + 1` |
| Equality test | `a = b` evaluates to true or false | `score = 10` |
| Swap | Save the overwritten value first | `temp ← a`, `a ← b`, `b ← temp` |
| List copy | `aList ← bList` copies the list | Later edits to `bList` do not alter `aList` |

## Assumptions

- Statements run top to bottom, one at a time.
- `DISPLAY` shows a value followed by a space.
- On the exam, a variable that has not been given a value is not used before assignment.

## Mistakes to avoid

- Using an **old** value when a variable has since been reassigned.
- Reading `a ← b` backwards. The variable on the **left** is the one that changes.
- Swapping with two assignments and no temporary variable, which leaves both with the same value.
- Treating `←` as a lasting link ("b follows a").
- Confusing `←` (assignment) with `=` (comparison).

## Method for "what is displayed?" questions

1. List every variable across the top of a small table.
2. Run **one line at a time**. Work out the whole right-hand side using the current values, then store it.
3. Put the new value in a new row so that old values stay visible.
4. Only when the last line has run, read off what `DISPLAY` shows (remember each value is followed by a space).
5. Look at the answer options last. Wrong options are built from the typical slips above.

## Worked mini-example

```text
a ← 2
b ← a * 5
a ← b - a
b ← a + b
DISPLAY(b)
```

Output: `18`

Row 1: a = 2. Row 2: b = 2 × 5 = 10. Row 3: a = 10 − 2 = 8. Row 4: b = 8 + 10 = 18 (the *new* a). A student who kept using the original a = 2 on line 4 would wrongly get 12.

## Quick self-check

1. After `x ← 6`, `y ← x`, `x ← 2`, what does `y` hold?
2. After `n ← 3`, `n ← n * n + 1`, what does `n` hold?
3. Why does `a ← b` then `b ← a` fail to swap?

<details>
<summary>Answers</summary>

1. 6. The copy was made before `x` changed.
2. 10 (3 × 3 + 1, using the old n on the right).
3. The first line overwrites `a`, so the second line copies the new `a` back into `b`; both hold the original `b`.

</details>

## Where marks are won and lost

Typical questions give a short code segment and ask what it displays or what a variable holds at the end. Marks go to candidates who evaluate the right-hand side with *current* values and who remember that assignment copies. Questions about naming or types ask you to pick the most meaningful name or the most suitable type. In the Create task, expect to identify variables or lists that represent data in your own program and explain what they store.


Back to the full [study guide](/advanced-course-resources/computer-science-principles/3-1-variables-assignments-study-guide/) for worked examples and explanations.
