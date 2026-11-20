---
title: "Cambridge A Level Information Technology (9626): Flowcharts -- Practice Questions"
resourceType: "practice-questions"
subject: "ict"
level: ["a-levels"]
topic: "Topic 4 – Algorithms and flowcharts"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 4.2
syllabusTopics:
  - qualification: "a-level"
    topic: "algorithms-and-flowcharts"
  - qualification: "a-level"
    topic: "algorithms-and-flowcharts"
    subtopic: "flowcharts"
description: "Twelve original Cambridge 9626 IT section 4.2 questions with answers on flowchart symbols, tracing, drawing, editing and finding errors."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs; examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Flowcharts study guide](/resources/cambridge-a-level-ict-9626-flowcharts/) | [Flowcharts revision notes](/resources/cambridge-a-level-ict-9626-flowcharts-revision-notes/)

These questions are for **section 4.2 Flowcharts** (Topic 4, AS Level) of Cambridge International AS & A Level Information Technology (9626), 2025–2027. Flowcharts are shown as tables of numbered boxes. When you are asked to draw one, use the standard symbols. All organisations are invented.

---

## Section A

**1.** Name the flowchart symbol used for each of these.

**(a)** Showing START. **[1]**

**(b)** Asking a question with two possible answers. **[1]**

**(c)** Showing `total ← total + 1`. **[1]**

**2.** State what is meant by a connector in a flowchart. **[2]**

**3.** State **two** rules about the flow lines leaving a decision symbol. **[2]**

**4.** Explain how a loop is shown on a flowchart. **[2]**

## Section B

**5.** Flowchart A is shown below.

| Box | Symbol | Contents | Next |
|---|---|---|---|
| 1 | Terminator | START | 2 |
| 2 | Process | n ← 1 | 3 |
| 3 | Process | total ← 0 | 4 |
| 4 | Decision | n > 4? | Yes: 7. No: 5 |
| 5 | Process | total ← total + n * n | 6 |
| 6 | Process | n ← n + 1 | 4 |
| 7 | Input/output | OUTPUT total | 8 |
| 8 | Terminator | STOP | none |

**(a)** Complete a trace table with columns for n and total and write down the output. **[4]**

**(b)** State the change needed to the flowchart so that it outputs the total of the squares of the numbers from 1 to 6. State the new output. **[2]**

**6.** A cinema charges nothing for children under 5, 6 pounds for people aged 5 to 64 and 4 pounds for people aged 65 or over. Draw a flowchart, or write it as a table of numbered boxes like Flowchart A, that inputs an age and outputs the price. **[6]**

**7.** Flowchart B is meant to input a number and output "Big" if it is over 10 and "Small" otherwise.

| Box | Symbol | Contents | Next |
|---|---|---|---|
| 1 | Input/output | INPUT number | 2 |
| 2 | Decision | number > 10? | Yes: 3 |
| 3 | Input/output | OUTPUT "Big" | 4 |
| 4 | Input/output | OUTPUT "Small" | none |

Identify **three** errors and say how each should be corrected. **[6]**

**8.** Flowchart C is meant to output the multiples of 4 that are less than 20.

| Box | Symbol | Contents | Next |
|---|---|---|---|
| 1 | Terminator | START | 2 |
| 2 | Process | m ← 4 | 3 |
| 3 | Decision | m < 20? | Yes: 4. No: 5 |
| 4 | Input/output | OUTPUT m | 3 |
| 5 | Terminator | STOP | none |

**(a)** Explain what will happen when Flowchart C is followed. **[2]**

**(b)** Describe the change that corrects it. **[1]**

**(c)** State the values output by the corrected flowchart. **[2]**

**9.** A flowchart contains a subroutine symbol labelled `CheckPIN`. Explain **two** reasons for using a subroutine symbol rather than drawing all the steps in the main flowchart. **[4]**

**10.** A flowchart for a lift controller has a decision `weight > 600?` with the Yes branch leading to `OUTPUT "Overloaded"` and the No branch leading to `OUTPUT "Go"`. A tester wants to check the boundary.

**(a)** State the values of weight that should be tested. **[2]**

**(b)** Explain why the value 600 is an important test. **[2]**

**11.** Draw, or write as a table of numbered boxes, a flowchart that repeatedly inputs a number until the number entered is between 1 and 10 inclusive, then outputs "Accepted". **[5]**

**12.** Write a pseudocode algorithm equivalent to Flowchart A in Question 5. **[4]**

---

## Answers

**1. (a)** Terminator (rounded rectangle) [1].

**(b)** Decision (diamond) [1].

**(c)** Process box (rectangle) [1]. **[3]**

**2.** A small circle containing a letter or number [1] that joins one part of a flowchart to another with the matching connector, for example on another page [1]. **[2]**

**3.** Any two from: there must be exactly two flow lines leaving a decision [1]; each must be labelled (Yes/No or True/False) [1]; one line enters the decision [1]. **[2]**

**4.** A flow line is drawn back to an earlier box [1], and a decision controls whether the flow goes back or leaves the loop [1]. **[2]**

**5. (a)**

| n | total |
|---|---|
| 1 | 0 |
| 2 | 1 |
| 3 | 5 |
| 4 | 14 |
| 5 | 30 |

Correct values of total after each pass, 1, 5, 14, 30 [3]. Output 30 [1].

**(b)** Change box 4 to `n > 6?` [1]. The new output is 91 (1 + 4 + 9 + 16 + 25 + 36) [1]. **[6]**

**6.** One possible answer: START [1]; INPUT age [1]; decision `age < 5?` with Yes to OUTPUT 0 and No to the next decision [1]; decision `age < 65?` with Yes to OUTPUT 6 and No to OUTPUT 4 [2]; all outputs lead to STOP, and decisions have both exits labelled [1]. **[6]**

**7.** Any three from: the flowchart has no START terminator [1], add one before box 1 [1]; the decision has no No exit [1], add a No branch to OUTPUT "Small" [1]; box 3 leads to box 4, so "Big" is followed by "Small" [1], box 3 should lead to STOP [1]; there is no STOP terminator at the end [1], add one after the outputs [1]. **[6]**

**8. (a)** m is never changed inside the loop [1], so m stays at 4 and the flowchart outputs 4 forever (an endless loop) [1].

**(b)** Add a process box `m ← m + 4` between box 4 and box 3 [1].

**(c)** 4, 8, 12, 16 [2]. **[5]**

**9.** Any two from, each with a development: the steps are drawn once and the symbol can be reused wherever the task is needed [1], which saves space and avoids repeating work [1]; the main flowchart is shorter and easier to follow [1], because the detail is separated [1]; the subroutine can be drawn and tested separately [1], so errors are easier to find [1]. **[4]**

**10. (a)** 599, 600 and 601 (accept 600 and 601) [2].

**(b)** The condition is `>`, not `>=`, so 600 itself must give "Go" [1]. If the comparison was wrong, 600 would wrongly be output as overloaded, and boundary errors are the most common [1]. **[4]**

**11.** Sample answer: START [1]; INPUT number [1]; decision `number > 0 AND number < 11?` [1]; Yes leads to OUTPUT "Accepted" then STOP [1]; No leads back to the INPUT box (loop) [1]. **[5]**

**12.** Sample answer:

```
n ← 1
total ← 0
WHILE n < 5
    total ← total + n * n
    n ← n + 1
ENDWHILE
WRITE total
```

One mark each for: initialising n and total [1]; a loop that stops when n is greater than 4 (the condition `n < 5` or equivalent) [1]; total increased by n squared inside the loop [1]; n increased inside the loop and total output after the loop [1]. **[4]**

## Where marks are usually lost

- Drawing a decision with one exit, or with exits not labelled.
- Using the wrong symbol for a calculation or an input.
- Leaving out START or STOP.
- Making loops that do not change the tested value.
- Testing only one normal value and missing the boundary.
