---
title: "Cambridge A Level Information Technology (ICT): Algorithms and flowcharts (9626) -- Revision Notes"
seoTitle: "Cambridge 9626 ICT Algorithms and Flowcharts Revision Notes"
resourceType: "revision-notes"
subject: "ict"
level: ["a-levels"]
topic: "Algorithms and flowcharts"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 4
syllabusTopics:
  - qualification: "a-level"
    topic: "algorithms-and-flowcharts"
description: "Revision notes for Cambridge 9626 IT Topic 4: pseudocode keywords, loop choice, trace tables, flowchart symbols, error spotting and a quick self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

These notes condense **Topic 4 Algorithms and flowcharts** (sections 4.1 and 4.2) of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027. It is **AS Level** content (topics 1–11), examined in Paper 1 Theory, and Paper 2 Practical expects you to apply knowledge from sections 1–7. For full explanations and worked examples, use the [study guide](/resources/a-level-cambridge-ict-algorithms-and-flowcharts/). To test yourself properly, use the [practice questions](/resources/a-level-cambridge-ict-algorithms-and-flowcharts-practice/).

Course links: [Cambridge A Level ICT hub](/boards/cambridge/a-level/ict/) · [printable checklist](/checklists/cambridge/a-level/ict/) · related: [Monitoring and control](/resources/a-level-ict-monitoring-control-revision-notes/) (3.2 asks for control algorithms and flowcharts) and [Data processing](/resources/a-ict-data-processing-revision-notes/) (1.5 asks for processing algorithms).

## Key definitions

- **Algorithm**: a precise, ordered set of steps that solves a problem.
- **Pseudocode**: structured English with keywords, used to write an algorithm without a real programming language.
- **Conditional branching**: choosing a path based on a condition (IF, CASE).
- **Looping (iteration)**: repeating a set of steps (FOR, WHILE, REPEAT).
- **Nested loop**: a loop inside another loop; the inner one runs fully for every outer pass.
- **Procedure/subroutine**: a named block of steps written once and called when needed.
- **Rogue value**: a value that marks the end of the data (for example -1 or 0) and is not processed.
- **Trace table**: a table that records the value of each variable after each step, used to test an algorithm.

## 4.1 Pseudocode keywords at a glance

| Keyword(s) | Job | Pattern |
|---|---|---|
| INPUT / READ | Bring a value in | `INPUT Mark` |
| WRITE / PRINT | Send a value out | `PRINT Total` |
| IF…ELSE…ENDIF | Two-way choice | `IF Mark > 49 THEN … ELSE … ENDIF` |
| CASE…ENDCASE | Choose from many values of one variable | `CASE OF Code` … `OTHERWISE` … `ENDCASE` |
| FOR…NEXT | Fixed number of repeats | `FOR i ← 1 TO 10` … `NEXT i` |
| FOR…NEXT…STEP | Fixed repeats, counter changes by the step | `FOR i ← 0 TO 30 STEP 5` |
| WHILE…ENDWHILE | Repeat while true; test first; may run 0 times | `WHILE Num > 0` … `ENDWHILE` |
| REPEAT…UNTIL | Repeat until true; test last; runs at least once | `REPEAT` … `UNTIL Num > 0` |
| > < = | Comparison operators listed in the syllabus | `Speed > 70` |
| + - * / | Arithmetic operators listed in the syllabus | `Area ← Length * Width` |

Assignment: this page uses `←`. The syllabus does not fix a symbol; just be consistent.

## Choosing the right structure

| Situation | Use |
|---|---|
| You know how many times to repeat | FOR…NEXT |
| Counting in 2s, 5s, or backwards | FOR…NEXT…STEP |
| Data ends with a rogue value; there might be no data at all | WHILE…ENDWHILE |
| You must ask at least once, then re-ask if wrong (validation) | REPEAT…UNTIL |
| Two outcomes, or a range test | IF…ELSE…ENDIF (nest for more) |
| Several fixed values of one variable (menus, codes) | CASE…ENDCASE |
| The same steps are needed in several places | Procedure + CALL |

## Method boxes

**Running total**
1. Set `Total ← 0` before the loop.
2. Inside the loop, `INPUT Value` then `Total ← Total + Value`.
3. Output after the loop ends.

**Counting items that meet a condition**
1. Set `Count ← 0` before the loop.
2. Inside the loop: `IF Value > Limit THEN Count ← Count + 1 ENDIF`.

**Highest so far**
1. Start `Highest` at a value lower than any real input (or at the first input).
2. Inside the loop: `IF Value > Highest THEN Highest ← Value ENDIF`.

**Rogue value with WHILE**
1. `INPUT` the first value **before** the loop.
2. `WHILE Value > -1` (or whatever marks the end).
3. Process, then `INPUT` the next value as the **last line** of the body.

**Validation with REPEAT**
1. `REPEAT`
2. `INPUT Value` (optionally an error message inside an IF).
3. `UNTIL` the condition for a **valid** value.

**Trace table**
1. One column per variable, plus one for output.
2. Write a new row each time a value changes.
3. Check each decision against the current values, not the values you expect.

## 4.2 Flowchart symbols

These are the shapes in the syllabus's own symbols table.

| Element | Shape | Holds |
|---|---|---|
| Terminator | Rounded-end rectangle | START, STOP |
| Input/output | Parallelogram | INPUT x, OUTPUT y |
| Process | Rectangle | A calculation or assignment |
| Decision | Diamond | A comparison with >, < or =; exits Yes and No |
| Subroutine | Rectangle with double vertical side lines | The name of a procedure being called |
| Connector | Small circle with a letter | Links two parts of a chart |
| Flowline | Arrow | Direction of flow |

Rules that earn the marks:
- Exactly one START and at least one STOP.
- Every decision has two labelled exits.
- Loops are drawn as a flowline going back up to an earlier symbol.
- Every flowline has an arrowhead; no box is left with no way out.

## Small worked reminders

**FOR…STEP.** `FOR N ← 5 TO 25 STEP 10` runs with N = 5, 15, 25: three passes.

**Nested loop count.** An outer loop of 5 and an inner loop of 3: the inner body runs 15 times.

**WHILE vs REPEAT on the same start.** With `X ← 0`: `WHILE X > 0` runs 0 times; `REPEAT … UNTIL X = 0` runs once.

**Error spot.** `Count ← 0` written inside a FOR loop means Count can never be more than 1.

**Procedure.** Define it once between `PROCEDURE Name` and `ENDPROCEDURE`, then write `CALL Name` wherever it is needed. In a flowchart the call is a subroutine box holding the procedure's name.

**Boundary with three operators.** "At least 50" becomes `Mark > 49`; "no more than 10" becomes `Items < 11`.

## Must-know distinctions

- **WHILE vs REPEAT.** WHILE tests at the start and continues while the condition is **true**. REPEAT tests at the end and continues until the condition is **true**. Only REPEAT is guaranteed to run once.
- **FOR vs condition-controlled loops.** FOR is count-controlled: the number of passes is fixed when the loop starts. WHILE and REPEAT are condition-controlled.
- **IF vs CASE.** IF tests any condition; CASE matches the value of one variable against a list, with OTHERWISE catching the rest.
- **Input/output vs process.** Data crossing into or out of the system goes in a parallelogram; work done on data goes in a rectangle.
- **Subroutine vs process.** A process box does one step; a subroutine box calls a named block defined elsewhere.
- **Editing vs identifying errors.** Editing changes a working algorithm to meet a new need; identifying errors means stating what is wrong **and** what it should be.

## Quick self-test

1. Which flowchart symbol is a diamond, and what must its exits show?
2. Which flowchart element is a rectangle with double lines on each side?
3. What is a connector used for?
4. List the values of K produced by `FOR K ← 2 TO 20 STEP 6`.
5. How many times does the body of `FOR X ← 5 TO 1 STEP -1` run?
6. An outer loop runs 4 times and an inner loop runs 6 times. How many times does the inner body run?
7. `X ← 10`, then `REPEAT X ← X - 3 UNTIL X < 0`. How many passes, and what is X at the end?
8. `X ← 10`, then `WHILE X > 12` … `ENDWHILE`. How many times does the body run?
9. `Total ← 0`, `FOR i ← 1 TO 4`, `Total ← Total + i * i`, `NEXT i`. What is Total?
10. What does OTHERWISE do in a CASE structure?
11. Which loop is best for re-asking until a valid PIN is typed, and why?

### Answers

1. Decision; two exits labelled Yes and No.
2. Subroutine.
3. To join two parts of a flowchart (for example across a page) without a long flowline; matching letters show the link.
4. 2, 8, 14, 20.
5. 5 times (X = 5, 4, 3, 2, 1).
6. 24.
7. 4 passes; X = -2 (10 → 7 → 4 → 1 → -2).
8. 0 times; the test is false at the start.
9. 30 (1 + 4 + 9 + 16).
10. It runs when the value matches none of the listed cases, so invalid values are handled.
11. REPEAT…UNTIL, because the PIN must be asked for at least once and the test comes after the input.

## Where marks are usually lost

- Initialising a total or counter inside the loop, so it resets every pass.
- Missing the second INPUT at the end of a WHILE body, giving a loop that never ends.
- Processing the rogue value as if it were real data.
- Writing a REPEAT condition the wrong way round (the condition for carrying on, not for stopping).
- Using `=` to stop a loop whose counter can jump past the target value.
- Leaving out ENDIF, ENDWHILE, ENDCASE or NEXT, or closing an outer loop before the inner one.
- Drawing a decision with one exit, or exits with no Yes/No labels.
- Putting a calculation in a parallelogram, or a START in a plain rectangle.
- Naming an error without writing the corrected line.
- Trace tables that skip rows or show the values you expected, not the ones the algorithm produces.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 3), Cambridge International Education. Topic 4: Algorithms and flowcharts (4.1 Algorithms, 4.2 Flowcharts) and the flowchart symbols table at the end of the subject content.
