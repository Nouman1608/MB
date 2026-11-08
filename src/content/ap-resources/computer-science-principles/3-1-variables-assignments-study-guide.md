---
resourceId: "mb-ap-csp-3.1-study-guide"
title: "Variables and Assignments: Study Guide (Computer Science Principles 3.1)"
description: "How variables store values, how the assignment operator updates them, how to trace code with a table, and why names and types matter. Two fully worked examples and misconceptions."
course: "computer-science-principles"
unit: 3
topics: ["3.1"]
resourceType: "study-guide"
prerequisites:
  - "Using a letter or word to stand for a number in algebra"
learningObjectives:
  - "Explain what a variable is and why programs need them"
  - "Determine the value of a variable after a sequence of assignments"
  - "Use a trace table and the swap pattern correctly"
  - "Choose meaningful names and suitable types for stored values"
skills: ["2", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed on the exam, and none is needed here. Code is written in Marlbridge's rendering of the exam reference notation."
related: ["mb-ap-csp-3.1-revision-notes", "mb-ap-csp-3.1-practice", "mb-ap-csp-3.1-checklist"]
next: "mb-ap-csp-3.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints:
  - "A variable is a named abstraction that holds one value at a time; the value can be a list."
  - "Assignment (←) evaluates the right side first, then stores a copy in the variable, replacing the old value."
  - "A variable keeps the most recent value assigned; copying b ← a does not link the two variables."
  - "To overwrite a value you still need, save it in a temporary variable first."
  - "Meaningful names make code readable; the type should suit the job."
faqs:
  - question: "What is the difference between ← and = in the exam pseudocode?"
    answer: "The arrow ← is assignment: it stores a value in a variable. The equals sign = is a comparison that evaluates to true or false."
  - question: "Can a variable store a list?"
    answer: "Yes. A variable holds one value at a time, but that one value can be a list that contains many elements."
  - question: "Why does count ← count + 1 work?"
    answer: "The right side is evaluated first using the current value of count, and the result is then stored back into count."
  - question: "Do variable names affect how the program runs?"
    answer: "No, but meaningful names make code easier to read, debug and maintain, and the course expects you to value that."
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

A program is a set of instructions that works on data, and data has to live somewhere while the instructions run. A **variable** is the program's answer to that problem: a named place that holds one value at a time. This topic covers what a variable is, how the assignment operator changes it, how to work out the value a variable holds after a code segment runs, and why the names you choose matter. The rest of Unit 3 builds on this: conditionals test variables, loops update them, and procedures receive them as parameters.

**Notation.** The exam uses its own pseudocode, not a real programming language. The code in this pack is Marlbridge's rendering of that reference notation, not a copy of the official sheet: `←` is assignment, `=` tests equality, lists start at index 1, `DISPLAY` shows a value, and braces mark blocks. Use the Exam Reference Sheet from your teacher for the official wording.

## Why programs need variables

Imagine adding up the prices at a till. You see one price, add it to what you already have, then move on. To do that you must *remember* the running total between steps. In a program, the remembered thing is a variable.

A variable is an **abstraction**: you do not need to know which part of the computer's memory holds the value, only the name you gave it. Each variable stores **one value at a time**. That value can be a number, a Boolean (`true` or `false`), a string (text) or a list. A list is still one value from the variable's point of view, even though the list itself contains many items.

Because a variable has a name, the name should say what the value *means*. `secondsLeft` tells the next reader what is stored. `s` or `thing` does not. Meaningful names do not change what the program does, but they make code far easier to read, test and fix, which is why the course treats them as part of good practice.

## The assignment operator

The assignment operator is written `←` in the reference notation. It gives a variable a value:

```text
x ← 12
```

Read it as "x **gets** 12" or "x is set to 12". The right-hand side can be any expression: a value, another variable, an arithmetic expression, or a procedure call that returns a value. Assignment always works in two steps:

1. **Evaluate** the expression on the right, using the values variables hold *right now*.
2. **Store a copy** of the result in the variable on the left, replacing whatever was there.

Two consequences follow. First, a variable holds the **most recent value assigned** to it; older values are gone. Second, a variable can appear on both sides, as in `count ← count + 1`. That is not a false equation. It means "work out count plus one using the current value, then store the answer back in count".

Because the result is a *copy*, assigning one variable to another does not link them. After `b ← a`, the variable `b` holds the same value `a` held at that moment, and later changes to `a` do not touch `b`.

<figure>
<svg viewBox="0 0 690 114" role="img" aria-labelledby="f31-t f31-d" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif" font-size="14">
<title id="f31-t">Assignment copies a value; it does not link variables</title>
<desc id="f31-d">Four boxes in a row joined by arrows. Box 1: a gets 1, so a holds 1 and b holds nothing yet. Box 2: b gets a, so a holds 1 and b holds 1. Box 3: a gets 2, so a holds 2 and b still holds 1. Box 4: DISPLAY of b shows 1.</desc>
<rect x="0" y="0" width="690" height="114" fill="#ffffff"/>
<defs><marker id="f31-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="20" y="25" width="140" height="64" rx="8" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="90.0" y="54.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">1. a ← 1</text><text x="90.0" y="71.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">a = 1, b = ?</text><line x1="160" y1="57.0" x2="187" y2="57.0" stroke="#1d2b44" stroke-width="2" marker-end="url(#f31-a)"/><rect x="190" y="25" width="140" height="64" rx="8" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="260.0" y="54.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">2. b ← a</text><text x="260.0" y="71.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">a = 1, b = 1</text><line x1="330" y1="57.0" x2="357" y2="57.0" stroke="#1d2b44" stroke-width="2" marker-end="url(#f31-a)"/><rect x="360" y="25" width="140" height="64" rx="8" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="430.0" y="54.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">3. a ← 2</text><text x="430.0" y="71.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">a = 2, b = 1</text><line x1="500" y1="57.0" x2="527" y2="57.0" stroke="#1d2b44" stroke-width="2" marker-end="url(#f31-a)"/><rect x="530" y="25" width="140" height="64" rx="8" fill="#eef3fb" stroke="#1d2b44" stroke-width="2"/><text x="600.0" y="54.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">4. DISPLAY(b)</text><text x="600.0" y="71.0" text-anchor="middle" font-size="14" font-weight="normal" fill="#1d2b44">shows 1</text>
</svg>
<figcaption>Figure 1. Tracing four statements. The change to a in step 3 does not reach b.</figcaption>
</figure>

Note the difference between the two symbols. In the exam notation `←` is assignment (an instruction that changes a variable) and `=` is a **test** that evaluates to `true` or `false`. In many real languages `=` is assignment, so be ready to switch between the two meanings.

## Data types and choosing a representation

Many languages give values a **type**. The four you need are numbers, Booleans, strings and lists. A variable can be given one type of value now and another later in some languages, but you should think about which type suits the job:

| Information | Better representation | Why |
|---|---|---|
| Number of lives left | Number | You will add and subtract |
| Has the player finished the level? | Boolean | Only two states, and conditions need `true` or `false` |
| A phone number such as 0412 555 019 | String | You never do arithmetic on it, and a leading 0 must survive |
| Five quiz scores | List | Several related values handled under one name |

Some values are better suited to one type than another, and choosing badly makes code clumsy or wrong. A phone number stored as a number would lose its leading zero.

## Tracing a program

**Tracing** means working through code one statement at a time and recording the value of each variable after each step. A trace table is the safest method. Draw one column per variable, add one row per statement, and always evaluate the right-hand side using the *previous* row.

## Worked example 1: the order of assignments

Find what this segment displays.

```text
a ← 4
b ← a + 3
a ← b * 2
b ← a - b
DISPLAY(a)
DISPLAY(b)
```

Output: `14 7`

**Step 1.** Build the trace table. Each row shows the values *after* that statement runs.

| After line | a | b | Reasoning |
|---|---|---|---|
| 1  `a ← 4` | 4 | not set | Store 4 in a. |
| 2  `b ← a + 3` | 4 | 7 | Right side: 4 + 3 = 7. |
| 3  `a ← b * 2` | 14 | 7 | Right side uses the **current** b: 7 × 2 = 14. The old a (4) is overwritten. |
| 4  `b ← a - b` | 14 | 7 | Right side uses the **new** a: 14 − 7 = 7. |

**Step 2.** `DISPLAY(a)` shows 14 and `DISPLAY(b)` shows 7. `DISPLAY` follows each value with a space, so the screen shows `14 7`.

**Check.** The easy slip is using the old `a = 4` on line 4. A statement always uses values as they are at that moment, never values from before an earlier assignment.

## Worked example 2: swapping two values

Two variables, `first` and `second`, hold 10 and 25. A student wants to swap them and writes:

*Attempt 1 (incorrect)*

```text
first ← 10
second ← 25
first ← second
second ← first
DISPLAY(first)
DISPLAY(second)
```

Output: `25 25`

**Step 1. Trace the attempt.** Line 3 stores 25 in `first`, which destroys the 10. Line 4 then copies the *new* `first` (25) into `second`. Both end up as 25 and the original 10 is lost.

**Step 2. Keep the value that would be overwritten.** A third variable holds it temporarily:

*Attempt 2 (correct)*

```text
first ← 10
second ← 25
temp ← first
first ← second
second ← temp
DISPLAY(first)
DISPLAY(second)
```

Output: `25 10`

| After line | first | second | temp |
|---|---|---|---|
| 1 | 10 | not set | not set |
| 2 | 10 | 25 | not set |
| 3  `temp ← first` | 10 | 25 | 10 |
| 4  `first ← second` | 25 | 25 | 10 |
| 5  `second ← temp` | 25 | 10 | 10 |

**Step 3. Generalise.** Any time you overwrite a value you still need, save it first. The same pattern reappears when you swap two list elements in Topic 3.10.

**Another common update: a running total.** The statement `total ← total + price` is the standard way to accumulate:

```text
total ← 0
price ← 5
total ← total + price
price ← 8
total ← total + price
DISPLAY(total)
```

Output: `13`

Trace: total becomes 0, then 0 + 5 = 5, then (price changes to 8, total unaffected) 5 + 8 = 13. The variable `total` remembers the sum between steps, which is the reason variables exist.

## Lists and copies

A list stored in a variable is assigned just like any value. The reference notation says that assigning one list variable to another stores a **copy** of the list, so the two lists are independent afterwards:

```text
bList ← [20, 40, 60]
aList ← bList
bList[1] ← 99
DISPLAY(aList[1])
DISPLAY(bList[1])
```

Output: `20 99`

`aList` received a copy of `[20, 40, 60]`. Changing the first element of `bList` afterwards does not alter `aList`. (Some real languages behave differently; on the exam, follow the reference sheet's rule.)

## How to answer "what does this display?" questions

Use the same routine every time. Write the variables across the top of a small table. Execute one line at a time and fill in one row. Evaluate the right-hand side completely before changing the variable. Only then read off what `DISPLAY` shows. If a question gives several options, trace first and look at the options second; the wrong options are written to match typical slips.

## Common misconceptions

- **"`b ← a` makes b follow a."** It copies the current value once. A later change to `a` leaves `b` alone (Figure 1).
- **"`a ← b` and `b ← a` do the same thing."** They are opposites. The variable on the *left* changes; the one on the right is only read.
- **"`count ← count + 1` is impossible."** It is an update: evaluate the right side with the old value, then store the result.
- **"A variable can hold several values at once."** It holds one value at a time. A list is one value that contains many items.
- **"Variable names do not matter."** The computer ignores meaning, but people do not, and unclear names cause bugs and slow down testing.
- **"`=` assigns."** In the exam notation `=` asks a question (are these equal?). Assignment is `←`.


## Where this leads

Variables are the raw material of Topic 3.2, where lists let you give a whole collection of data one name, and of Topic 3.3, where expressions compute new values to assign.

Next steps: try the [practice questions](/advanced-course-resources/computer-science-principles/3-1-variables-assignments-practice/), skim the [revision notes](/advanced-course-resources/computer-science-principles/3-1-variables-assignments-revision-notes/) the night before, and tick off the [topic checklist](/advanced-course-resources/computer-science-principles/3-1-variables-assignments-checklist/). The next topic is [Topic 3.2, Data Abstraction](/advanced-course-resources/computer-science-principles/3-2-data-abstraction-study-guide/).
