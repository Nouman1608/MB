---
title: "Cambridge A Level Information Technology (9626): Flowcharts"
resourceType: "study-guides"
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
description: "Cambridge 9626 IT section 4.2 study guide: flowchart symbols, drawing, editing and error-finding for decision-making flowcharts, with traced worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide teaches **section 4.2 Flowcharts** of Topic 4 Algorithms and flowcharts in the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. It is AS Level content, examined in Paper 1 Theory and used in the practical papers when you plan solutions. The [Algorithms and flowcharts overview](/resources/a-level-cambridge-ict-algorithms-and-flowcharts/) covers both sections of the topic; this page concentrates on flowcharts. Use it with the [flowcharts revision notes](/resources/cambridge-a-level-ict-9626-flowcharts-revision-notes/), the [flowcharts practice questions](/resources/cambridge-a-level-ict-9626-flowcharts-practice/) and the [algorithms study guide](/resources/cambridge-a-level-ict-9626-algorithms/).

## What section 4.2 covers

| Syllabus point | What you must be able to do |
|---|---|
| Drawing a basic program flowchart | Solve a given problem with a flowchart |
| Drawing a decision-making flowchart | Use input/output, decision (with comparison operators), terminator, process boxes (with arithmetic operators), subroutine, connector and flow line |
| Editing a given flowchart | Change a basic flowchart that shows a decision-making process |
| Identifying errors | Find errors in an algorithm or program flowchart for a given scenario |

A **flowchart** is a diagram that shows the steps of an algorithm as standard symbols joined by arrows. It makes the **order** of the steps and the **decisions** easy to see, without needing any programming language.

## The flowchart symbols

| Element | Shape | Used for | What to write inside |
|---|---|---|---|
| Terminator (start, stop) | Rounded rectangle (oval) | The beginning and the end of the flowchart | `START` or `STOP` |
| Input/output | Parallelogram | Entering or displaying data | `INPUT mark` or `OUTPUT "Pass"` |
| Process box | Rectangle | A calculation or an assignment | `total ← total + mark` |
| Decision | Diamond | A question with two outcomes (Yes/No or True/False) | `mark > 49?` |
| Subroutine | Rectangle with double vertical lines on the sides | A call to a named procedure or function | `CalculateTax` |
| Connector | Small circle with a letter or number | Joining one part of the flowchart to another, such as on a new page | `A` |
| Flow line | Arrow | The direction in which the flowchart is followed | (none) |

**Rules to follow:**
1. Every flowchart has **one START** and at least one **STOP**.
2. A **decision** has one flow line in and **two out**, each labelled (Yes/No).
3. Boxes other than a decision have **one flow line out**.
4. Flow lines should run **top to bottom and left to right** where possible, and should not cross if it can be avoided.
5. Keep the text short, and use the comparison operators `>`, `<` and `=`, and the arithmetic operators `+`, `-`, `*` and `/`.
6. A subroutine symbol means that the steps inside are shown in a separate flowchart.

## Describing a flowchart in words

In this guide each flowchart is written as a table so that you can follow the same box numbers when drawing it yourself. Read it like a map: start at box 1, follow the "Next" column, and for a decision choose the column that matches the answer.

## Selection: a decision

### Worked example 1: pass or fail

**Problem.** A student's mark is entered. Output "Pass" if it is 50 or more and "Fail" otherwise.

| Box | Symbol | Contents | Next |
|---|---|---|---|
| 1 | Terminator | START | 2 |
| 2 | Input/output | INPUT mark | 3 |
| 3 | Decision | mark > 49? | Yes: 4. No: 5 |
| 4 | Input/output | OUTPUT "Pass" | 6 |
| 5 | Input/output | OUTPUT "Fail" | 6 |
| 6 | Terminator | STOP | none |

Test with mark = 49: box 3 answers No, box 5 outputs "Fail". Test with mark = 50: box 3 answers Yes, box 4 outputs "Pass". Always test the **boundary** values in this way.

Boxes 4 and 5 both lead to box 6, so the two paths **rejoin** at STOP.

## Iteration: a loop

A loop on a flowchart is drawn by making a flow line go **back up** to an earlier box. A decision controls whether to go round again.

### Worked example 2: totalling numbers until zero is entered

**Problem.** The user enters positive numbers. Entering 0 means there are no more numbers. Output the total.

| Box | Symbol | Contents | Next |
|---|---|---|---|
| 1 | Terminator | START | 2 |
| 2 | Process | total ← 0 | 3 |
| 3 | Input/output | INPUT number | 4 |
| 4 | Decision | number = 0? | Yes: 6. No: 5 |
| 5 | Process | total ← total + number | 3 |
| 6 | Input/output | OUTPUT total | 7 |
| 7 | Terminator | STOP | none |

The flow line from box 5 back to box 3 forms the loop. Trace with the inputs 4, 9, 2 and 0:

| Box visited | number | total |
|---|---|---|
| 2 | | 0 |
| 3, 4, 5 | 4 | 4 |
| 3, 4, 5 | 9 | 13 |
| 3, 4, 5 | 2 | 15 |
| 3, 4 | 0 | 15 (loop ends) |
| 6 | | OUTPUT 15 |

The output is **15**. Note that 0 itself is never added, because box 4 sends the flow to box 6 before box 5 is reached.

### Counting loops

To repeat a fixed number of times, use a counter and a decision.

| Box | Symbol | Contents | Next |
|---|---|---|---|
| 1 | Terminator | START | 2 |
| 2 | Process | count ← 1 | 3 |
| 3 | Decision | count > 5? | Yes: 6. No: 4 |
| 4 | Input/output | OUTPUT count * 2 | 5 |
| 5 | Process | count ← count + 1 | 3 |
| 6 | Terminator | STOP | none |

This outputs 2, 4, 6, 8 and 10. The decision is placed **before** the output, so it behaves like a WHILE loop. If the counter was not increased in box 5, the loop would never end.

## Using a subroutine symbol

If part of the process is a separate task, such as working out postage, draw one subroutine box and show its steps in a different flowchart that also has its own START and STOP (or RETURN).

In the main flowchart:

| Box | Symbol | Contents |
|---|---|---|
| 1 | Terminator | START |
| 2 | Input/output | INPUT weight |
| 3 | Subroutine | CalculatePostage |
| 4 | Input/output | OUTPUT cost |
| 5 | Terminator | STOP |

Use this when the same task is needed more than once, because the same box can be reused. In the exam, state clearly what the subroutine receives and what it produces.

## Using connectors

A connector is a small circle containing a letter. Two connectors with the **same letter** mean "continue at the matching circle". They are used when a flowchart is too large for one page, or when drawing a long flow line back to the start would cross the others and make the chart hard to read. A connector with the letter A at the bottom of page 1 continues at the connector with the letter A at the top of page 2.

## Converting between a flowchart and pseudocode

Each flowchart pattern has a pseudocode equivalent.

| Flowchart pattern | Pseudocode |
|---|---|
| Decision with two branches that rejoin | IF...ELSE...ENDIF |
| Decision with an arrow back to an earlier box, test before the body | WHILE...ENDWHILE |
| Body, then decision with an arrow back if false | REPEAT...UNTIL |
| Counter set, tested, increased and arrow back | FOR...NEXT |

For example, the totalling flowchart above is equivalent to this pseudocode:

```
total ← 0
INPUT number
WHILE number <> 0
    total ← total + number
    INPUT number
ENDWHILE
WRITE total
```

The flowchart's decision asks `number = 0?` and leaves the loop on Yes. The WHILE loop uses the opposite test, `number <> 0` (not equal to), because it continues while the flowchart's answer would be No. The two give the same output.

## Editing a flowchart

Editing means changing a given flowchart to meet a new requirement. A good method:

1. Read the existing flowchart and trace it with a sample value.
2. Decide which boxes need to **change**, **be added** or **be removed**.
3. Change the smallest number of boxes, and keep START, STOP and the flow lines consistent.
4. Re-trace with the new requirement.

**Example.** The pass or fail flowchart in Worked example 1 must now output "Merit" for marks of 70 or more. Add a decision after box 3's Yes branch:

| New box | Symbol | Contents | Next |
|---|---|---|---|
| 3a | Decision | mark > 69? | Yes: 3b. No: 4 |
| 3b | Input/output | OUTPUT "Merit" | 6 |

Box 3's Yes arrow is changed to point to box 3a, and the original box 4 is reached only through the No branch of 3a. Test with mark = 70 (Merit), 69 (Pass) and 49 (Fail).

## Identifying errors

Typical errors the examiner builds into a flowchart or algorithm are:

- A **decision with only one exit**, or exits that are not labelled.
- A **missing START or STOP**, or a path that has no end.
- An **endless loop**: the counter or input is never changed inside the loop.
- A **wrong comparison**, such as `>` instead of `<`, or `>` where `>=` is needed (the boundary is missed).
- A **variable not initialised**, such as the total used before it is set to 0.
- A **wrong symbol**, such as a calculation in a parallelogram or an input in a rectangle.
- **Output in the wrong place**, such as inside the loop when it should come after.
- **Flow lines pointing the wrong way** or joining the wrong box.

### Worked example 3: find the errors

A flowchart is meant to input 10 numbers and output their average.

| Box | Symbol | Contents | Next |
|---|---|---|---|
| 1 | Terminator | START | 2 |
| 2 | Process | count ← 0 | 3 |
| 3 | Input/output | INPUT number | 4 |
| 4 | Process | total ← total + number | 5 |
| 5 | Process | count ← count + 1 | 6 |
| 6 | Decision | count = 10? | Yes: 7. No: 4 |
| 7 | Process | average ← total / 10 | 8 |
| 8 | Input/output | OUTPUT average | 9 |
| 9 | Terminator | STOP | none |

Errors found:
1. `total` is never set to 0 before the loop, so the first addition uses an unknown value. Fix: add `total ← 0` in box 2.
2. The No arrow from box 6 goes to box 4, not box 3, so the next number is never input and the same number is added again. Fix: the No arrow should go to box 3.

After the fixes, the flowchart totals ten different numbers, then divides the total by 10.

## Common mistakes

- Drawing a decision with one exit, or forgetting to label Yes and No.
- Putting a calculation in an input/output box, or an input in a process box.
- Forgetting START or STOP.
- Making a loop that never changes the value being tested.
- Using the wrong comparison, so the boundary value goes the wrong way.
- Joining flow lines into the middle of a box instead of to the box.
- Using a flowchart symbol for subroutines but writing the steps inside the same box.

## Exam technique

- Use only the symbols listed in the syllabus, and draw each shape clearly. A decision must be a diamond.
- Write the text inside the shapes in short pseudocode style.
- Label **every** decision exit.
- If asked to **draw** a flowchart from a description, plan on rough paper first, then check it with sample data.
- For **errors**, state where the error is, what is wrong, and how to fix it.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, Cambridge International Education. Topic 4 Algorithms and flowcharts, section 4.2 Flowcharts, including the flowchart symbols given at the end of the subject content.
