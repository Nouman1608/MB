---
title: "Cambridge A Level Information Technology (9626): Algorithms"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Topic 4 – Algorithms and flowcharts"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 4.1
syllabusTopics:
  - qualification: "a-level"
    topic: "algorithms-and-flowcharts"
  - qualification: "a-level"
    topic: "algorithms-and-flowcharts"
    subtopic: "algorithms"
description: "Cambridge 9626 IT section 4.1 study guide: writing and editing pseudocode algorithms with selection, iteration, nested loops and subroutines, with traced worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide teaches **section 4.1 Algorithms** of Topic 4 Algorithms and flowcharts in the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. It is AS Level content. It is examined in Paper 1 Theory and applied in Paper 2 Practical, and it is also used to describe processing in section 1.5 and in control systems. The [Algorithms and flowcharts overview](/resources/a-level-cambridge-ict-algorithms-and-flowcharts/) introduces the topic; this page teaches each construct with traced examples. Use it with the [algorithms practice questions](/resources/cambridge-a-level-ict-9626-algorithms-practice/) and the [flowcharts study guide](/resources/cambridge-a-level-ict-9626-flowcharts/).

## What section 4.1 covers

| Syllabus point | What you must be able to do |
|---|---|
| Writing and editing a given algorithm that shows a decision-making process | Use conditional branching, looping, nested loops and procedures/subroutines |
| Writing an algorithm in pseudocode to solve a problem | Use INPUT/READ, WRITE/PRINT, FOR...NEXT, FOR...NEXT...STEP, IF...ELSE...ENDIF, WHILE...ENDWHILE, REPEAT...UNTIL, CASE...ENDCASE, the comparison operators >, < and =, and the arithmetic operators +, -, * and / |

An **algorithm** is a set of clear, ordered steps that solves a problem. **Pseudocode** is a way of writing an algorithm in structured, English-like statements that is not tied to one programming language. Your answer must be **unambiguous** and **ordered**, and it must use the **structures** consistently.

In this guide, assignment is written with an arrow, for example `total ← total + mark`. Use one assignment style consistently throughout an answer, and keep the symbols for comparison (`=`, `<`, `>`) separate from assignment.

## Input and output

- `INPUT x` or `READ x` takes a value from the user (or a file) and stores it in the variable `x`.
- `WRITE "Total is", total` or `PRINT total` displays text and values.

Give variables meaningful names such as `mark` or `price`, and say what each stores in a comment if the algorithm is long.

## Sequence

Statements run one after another in the order written. This is the simplest construct.

```
INPUT price
INPUT quantity
total ← price * quantity
WRITE total
```

If the price is 4 and the quantity is 3, the output is 12.

## Selection (conditional branching)

Selection chooses between paths, depending on a **condition** that is true or false. Conditions use the comparison operators `>`, `<` and `=` (and combinations).

### IF...ELSE...ENDIF

```
INPUT mark
IF mark > 49 THEN
    WRITE "Pass"
ELSE
    WRITE "Fail"
ENDIF
```

The ELSE part is optional. An IF inside another IF is a **nested IF**, used to test more than two outcomes:

```
IF mark > 79 THEN
    WRITE "Distinction"
ELSE
    IF mark > 49 THEN
        WRITE "Pass"
    ELSE
        WRITE "Fail"
    ENDIF
ENDIF
```

Tracing mark = 65: the first test is false, so the nested test runs. 65 > 49 is true, so the output is "Pass".

### CASE...ENDCASE

A CASE statement chooses between many fixed values of one variable. It is neater than many nested IFs.

```
INPUT day
CASE day OF
    1: WRITE "Monday"
    2: WRITE "Tuesday"
    3: WRITE "Wednesday"
    OTHERWISE: WRITE "Not a valid day"
ENDCASE
```

Use CASE when one variable is compared against several exact values. Use IF when conditions are ranges or involve more than one variable.

## Iteration (looping)

### FOR...NEXT

Use a count-controlled loop when you know **how many times** to repeat.

```
total ← 0
FOR count ← 1 TO 5
    INPUT number
    total ← total + number
NEXT count
average ← total / 5
WRITE average
```

### Worked example 1: tracing a FOR loop

The user enters 12, 7, 20, 3 and 18.

| count | number | total |
|---|---|---|
| (start) | | 0 |
| 1 | 12 | 12 |
| 2 | 7 | 19 |
| 3 | 20 | 39 |
| 4 | 3 | 42 |
| 5 | 18 | 60 |

After the loop, `average ← 60 / 5`, so the output is **12**.

### FOR...NEXT...STEP

STEP changes the amount the counter changes by each time. It can also count backwards.

```
FOR n ← 10 TO 1 STEP -3
    WRITE n
NEXT n
```

The values written are 10, 7, 4 and 1. After 1, the next value would be -2, which is outside the range, so the loop ends.

### WHILE...ENDWHILE

A **pre-condition** loop tests the condition **before** each pass. If the condition is false at the start, the body never runs.

### Worked example 2: a WHILE loop

A savings account starts with 100 pounds and earns 5 per cent interest each year. How many years until it reaches at least 120 pounds?

```
balance ← 100
years ← 0
WHILE balance < 120
    balance ← balance * 1.05
    years ← years + 1
ENDWHILE
WRITE years
```

| years | balance after the pass | balance < 120? |
|---|---|---|
| 0 | 100 | Yes |
| 1 | 105 | Yes |
| 2 | 110.25 | Yes |
| 3 | 115.7625 | Yes |
| 4 | 121.55 | No, stop |

The algorithm writes **4**.

### REPEAT...UNTIL

A **post-condition** loop tests the condition **after** each pass, so the body always runs **at least once**. It stops when the condition becomes true.

```
REPEAT
    INPUT age
    IF age < 1 THEN
        WRITE "Enter an age greater than 0"
    ENDIF
UNTIL age > 0
```

Note that WHILE continues while the condition is **true**, whereas REPEAT...UNTIL stops when the condition is **true**. Mixing these up is the most common loop error.

| Loop | Tests | Minimum runs | Use when |
|---|---|---|---|
| FOR...NEXT | Count | Depends on range | The number of repeats is known |
| WHILE...ENDWHILE | Before the body | 0 | The body may not be needed at all |
| REPEAT...UNTIL | After the body | 1 | The body must run at least once, such as input validation |

## Nested loops

A **nested loop** is a loop inside another loop. The inner loop completes all its passes for every single pass of the outer loop.

### Worked example 3: a small multiplication table

```
FOR row ← 1 TO 3
    FOR column ← 1 TO 3
        WRITE row * column
    NEXT column
NEXT row
```

For row 1, the inner loop writes 1, 2, 3. For row 2 it writes 2, 4, 6. For row 3 it writes 3, 6, 9. The body of the inner loop runs 3 × 3 = **9 times** in total.

## Procedures and subroutines

A **subroutine** is a named block of code that carries out one task. It can be called from anywhere in the program. A **procedure** carries out a task; a **function** also returns a value. The syllabus names procedures/subroutines as part of the decision-making structures. Exact keywords are not prescribed, so use clear ones such as `PROCEDURE`, `ENDPROCEDURE` and `CALL`.

```
PROCEDURE ShowResult(mark)
    IF mark > 49 THEN
        WRITE "Pass"
    ELSE
        WRITE "Fail"
    ENDIF
ENDPROCEDURE

FOR student ← 1 TO 3
    INPUT mark
    CALL ShowResult(mark)
NEXT student
```

**Why use subroutines:** the code is written once and reused, which saves time; it is easier to test, read and correct; and a team can work on separate parts at the same time.

## Worked example 4: writing an algorithm for a problem

**Problem.** A teacher enters the marks of six students. The algorithm must count how many passed (50 or more) and output the highest mark.

**Plan.** Use a FOR loop for six students, a counter for passes, and a variable to hold the highest mark seen so far.

```
passes ← 0
highest ← 0
FOR student ← 1 TO 6
    INPUT mark
    IF mark > 49 THEN
        passes ← passes + 1
    ENDIF
    IF mark > highest THEN
        highest ← mark
    ENDIF
NEXT student
WRITE "Passes:", passes
WRITE "Highest mark:", highest
```

**Test with the marks 45, 72, 68, 30, 81 and 55.**

| mark | passes | highest |
|---|---|---|
| 45 | 0 | 45 |
| 72 | 1 | 72 |
| 68 | 2 | 72 |
| 30 | 2 | 72 |
| 81 | 3 | 81 |
| 55 | 4 | 81 |

The output is "Passes: 4" and "Highest mark: 81". Starting `highest` at 0 works because the marks cannot be negative.

## Editing and correcting a given algorithm

You may be given an algorithm with errors or a change request. A reliable method is:

1. Read the problem and state in one sentence what the algorithm should do.
2. **Trace** the algorithm with a normal value, then a boundary value.
3. Look for the usual errors: wrong comparison (`>` instead of `<`), a loop that never ends because the variable is not updated, a counter not set to 0, a loop that runs one time too many or too few, and a condition tested in the wrong place.
4. Make the smallest change that fixes it and re-trace.

**Example.** This algorithm is meant to total the numbers 1 to 10:

```
total ← 0
FOR n ← 1 TO 9
    total ← total + n
NEXT n
WRITE total
```

It writes 45, not 55. The loop ends at 9, so 10 is missed. The fix is to change `TO 9` into `TO 10`.

## Common mistakes

- Not initialising totals and counters to 0 before a loop.
- Confusing WHILE (continues while true) with REPEAT...UNTIL (stops when true).
- Forgetting to update the variable in a WHILE loop, which makes it run forever.
- Off-by-one errors in the limits of a FOR loop.
- Missing ENDIF, ENDWHILE or NEXT, so the structure is unclear.
- Using `=` for both assignment and comparison in the same answer.
- Writing a flowchart-style answer when the question asks for pseudocode, or the reverse.

## Exam technique

- Read whether the question asks you to **write**, **complete**, **edit** or **identify errors** in an algorithm.
- Indent the body of every loop and selection so the structure is visible.
- Show a **trace table** when asked to work out an output, with one column per variable and one row per step.
- Use the structure the question names: if it asks for a loop that always runs once, use REPEAT...UNTIL.
- Check an algorithm with at least one normal value and one boundary value before you finish.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, Cambridge International Education. Topic 4 Algorithms and flowcharts, section 4.1 Algorithms.
