---
title: "Cambridge A Level Information Technology (ICT): Algorithms and flowcharts (9626)"
seoTitle: "Cambridge 9626 ICT Algorithms and Flowcharts Study Guide"
resourceType: "study-guides"
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
description: "Cambridge 9626 IT Topic 4 study guide: pseudocode with IF, CASE, FOR, WHILE and REPEAT, nested loops, procedures and flowcharts, with examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This guide teaches **Topic 4 Algorithms and flowcharts** from the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027. It covers sections **4.1 Algorithms** and **4.2 Flowcharts**. This is **AS Level** content (topics 1–11), so it is part of both the AS and the full A Level. Paper 1 Theory questions are based on sections 1–11, so this topic is examined there; Paper 2 Practical also expects you to apply knowledge from sections 1–7.

Use it with the [revision notes](/resources/a-level-cambridge-ict-algorithms-and-flowcharts-revision-notes/) and the [practice questions](/resources/a-level-cambridge-ict-algorithms-and-flowcharts-practice/). For the whole course, see the [Cambridge A Level ICT hub](/boards/cambridge/a-level/ict/) and the [printable checklist](/checklists/cambridge/a-level/ict/).

## What this topic covers

| Section | What you must be able to do | Level |
|---|---|---|
| 4.1 | Write and edit an algorithm that shows decision-making: conditional branching, looping, nested loops, procedures/subroutines | AS |
| 4.1 | Write pseudocode using INPUT/READ, WRITE/PRINT, FOR…NEXT, FOR…NEXT…STEP, IF…ELSE…ENDIF, WHILE…ENDWHILE, REPEAT…UNTIL, CASE…ENDCASE, comparison operators >, <, = and arithmetic operators +, -, *, / | AS |
| 4.2 | Draw a basic program flowchart to solve a problem and to show decision-making, using input/output, decision, terminator, process, subroutine, connector and flowline symbols | AS |
| 4.2 | Edit a given flowchart; identify errors in an algorithm or flowchart for a given scenario | AS |

Other topics point back here. Section 1.5 asks you to write an algorithm for different methods of processing (see [Data processing and information](/resources/a-level-cambridge-ict-data-processing-and-information/)), and section 3.2 asks for an algorithm or flowchart for control technologies (see [Monitoring and control](/resources/a-level-cambridge-ict-monitoring-and-control/)).

## 4.1 Algorithms: the building blocks

An **algorithm** is a precise, ordered set of steps that solves a problem. **Pseudocode** writes those steps in structured English using keywords, so any reader can follow the logic without knowing a programming language.

A few conventions used on this page:

- **Assignment** uses `←`, so `Total ← Total + Price` means "work out Total + Price and store it back in Total". The syllabus does not fix an assignment symbol; `=` is also common. Pick one and stay consistent.
- **INPUT** and **READ** both bring a value in. **PRINT** and **WRITE** both send a value out. The syllabus lists each pair together.
- Keywords are in capitals and the lines inside a structure are indented.
- The syllabus lists three comparison operators: **>**, **<** and **=**. "16 or over" is the same as "not less than 16", so you can usually handle it with an ELSE branch, as Example 1 shows.

## Conditional branching

### IF…ELSE…ENDIF

The program takes one of two paths depending on a condition. IF statements can be **nested** (one inside another) to give more than two outcomes.

**Worked example 1.** A cinema charges £6 for under-16s, £7 for anyone over 64, and £10 otherwise.

```
INPUT Age
IF Age < 16 THEN
    Price ← 6
ELSE
    IF Age > 64 THEN
        Price ← 7
    ELSE
        Price ← 10
    ENDIF
ENDIF
PRINT Price
```

Test the boundaries. Age 15 gives 6. Age 16 fails `Age < 16` and fails `Age > 64`, so it gives 10. Age 64 gives 10. Age 65 gives 7. Each IF needs its own ENDIF.

### CASE…ENDCASE

CASE picks one branch from several possible values of a single variable. It is neater than a long chain of nested IFs.

**Worked example 2.** A records menu.

```
INPUT Choice
CASE OF Choice
    "A" : PRINT "Add a record"
    "D" : PRINT "Delete a record"
    "S" : PRINT "Search records"
    OTHERWISE PRINT "Invalid choice"
ENDCASE
```

The OTHERWISE line catches every value not listed. Without it, an invalid entry would do nothing at all.

## Looping

### FOR…NEXT: a fixed number of repeats

Use FOR when you know in advance how many times to repeat.

**Worked example 3.** Input six daily rainfall readings (mm) and output the total and the average.

```
Total ← 0
FOR Day ← 1 TO 6
    INPUT Rain
    Total ← Total + Rain
NEXT Day
Average ← Total / 6
PRINT Total, Average
```

Trace it with the readings 4, 0, 12, 7, 3, 10:

| Day | Rain | Total |
|---|---|---|
| 1 | 4 | 4 |
| 2 | 0 | 4 |
| 3 | 12 | 16 |
| 4 | 7 | 23 |
| 5 | 3 | 26 |
| 6 | 10 | 36 |

Output: **36** and **6**. `Total ← 0` must come **before** the loop. Inside the loop it would reset every time.

### FOR…NEXT…STEP

STEP changes how much the counter goes up (or down) each time.

**Worked example 4.** A Celsius-to-Fahrenheit table from 0 to 100 in steps of 25.

```
FOR Celsius ← 0 TO 100 STEP 25
    Fahrenheit ← Celsius * 9 / 5 + 32
    PRINT Celsius, Fahrenheit
NEXT Celsius
```

Output pairs: 0, 32; 25, 77; 50, 122; 75, 167; 100, 212. A negative step counts down: `FOR Count ← 10 TO 0 STEP -2` gives 10, 8, 6, 4, 2, 0, which is six passes.

### WHILE…ENDWHILE: condition tested first

WHILE repeats as long as its condition is true. The test is at the **top**, so if it is false at the start the loop body runs **zero** times. It suits a **rogue value** (an end-of-data marker) because you read the first value before the loop and the next value at the end of the body.

**Worked example 5.** Input parcel weights (kg) until -1 is entered. Output how many parcels there were, their total weight, and the heaviest.

```
Count ← 0
Total ← 0
Heaviest ← 0
INPUT Weight
WHILE Weight > -1
    Count ← Count + 1
    Total ← Total + Weight
    IF Weight > Heaviest THEN
        Heaviest ← Weight
    ENDIF
    INPUT Weight
ENDWHILE
PRINT Count, Total, Heaviest
```

Inputs 52, 47, 60, -1:

| Weight | Count | Total | Heaviest |
|---|---|---|---|
| 52 | 1 | 52 | 52 |
| 47 | 2 | 99 | 52 |
| 60 | 3 | 159 | 60 |
| -1 | (loop ends) | | |

Output: **3, 159, 60**. The rogue value -1 is never counted, because the test happens before it can be processed.

### REPEAT…UNTIL: condition tested last

REPEAT runs the body, then tests. The body always runs **at least once**, and the loop stops when the condition becomes **true**. That makes it the natural choice for validation: ask, check, ask again if wrong.

**Worked example 6.** Make sure an order quantity is above zero.

```
REPEAT
    INPUT Quantity
    IF Quantity < 1 THEN
        PRINT "Quantity must be at least 1"
    ENDIF
UNTIL Quantity > 0
```

Note the logic is the opposite way round to WHILE: WHILE keeps going while the condition is true; REPEAT keeps going until it becomes true.

### Nested loops

A loop inside another loop. The inner loop runs completely for **every** pass of the outer loop.

**Worked example 7.** Print a multiplication grid with 3 rows and 4 columns, and add up every entry.

```
GrandTotal ← 0
FOR Row ← 1 TO 3
    FOR Col ← 1 TO 4
        PRINT Row * Col
        GrandTotal ← GrandTotal + Row * Col
    NEXT Col
NEXT Row
PRINT GrandTotal
```

The inner body runs 3 × 4 = **12** times. Row totals are 10, 20 and 30, so GrandTotal is **60**. The inner NEXT must close before the outer NEXT.

## Procedures and subroutines

A **procedure** (or subroutine) is a named block of steps written once and **called** whenever it is needed. Procedures make an algorithm shorter, easier to read, and easier to edit: change the procedure once and every call uses the new version.

**Worked example 8.** A freezer monitor (a control context from topic 3) sounds an alarm when the temperature rises above -15 °C.

```
PROCEDURE SoundAlarm
    PRINT "Freezer too warm"
    Switch on buzzer
ENDPROCEDURE

REPEAT
    READ Temperature from sensor
    IF Temperature > -15 THEN
        CALL SoundAlarm
    ENDIF
    INPUT Power
UNTIL Power = 0
```

The main loop reads the sensor, compares with the set value, calls the procedure if needed, and keeps going until the monitor is switched off.

## 4.2 Program flowcharts

The syllabus gives the symbols at the end of its subject content. Learn them exactly.

| Element | Symbol | Use |
|---|---|---|
| Terminator | Rounded-end rectangle | START and STOP |
| Input/output | Parallelogram | INPUT a value, OUTPUT a result |
| Process | Rectangle | Calculation or assignment, e.g. Total ← Total + Price |
| Decision | Diamond | A question using >, < or =; two exits labelled Yes and No |
| Subroutine | Rectangle with a double line down each side | Call a named procedure |
| Connector | Small circle with a letter, e.g. A | Joins two parts of a chart without a long line |
| Flowline | Arrow | Shows the order of steps |

A loop in a flowchart is a flowline that runs **back** from a decision to an earlier box.

**Worked example 9.** A shop till inputs item prices until 0 is entered. If the total is over £50, it takes 10% off. It then prints a receipt (a subroutine) and outputs the total.

The flowchart, box by box:

```
(START)
   |
[Total ← 0]                     process
   |
/INPUT Price/  <-------+        input
   |                   |
<Price = 0?>  --No-->[Total ← Total + Price]
   | Yes
<Total > 50?> --Yes-->[Total ← Total * 0.9]--+
   | No                                      |
   +<----------------------------------------+
   |
[|PrintReceipt|]                subroutine
   |
/OUTPUT Total/
   |
(STOP)
```

Check with 20, 18, 25, 0: Total = 63, which is over 50, so the output is **56.70**. With 12, 30, 0: Total = 42, so no discount and the output is **42**. If the chart had to continue on a new page, you would end the first part at a connector circle labelled A and start the next part from another circle labelled A.

## Editing and finding errors

Exam tasks often give you an algorithm or flowchart and ask you to correct or extend it. Work like this:

1. Read the scenario and say what the output **should** be.
2. Trace the algorithm with simple test data.
3. Compare the trace with the expected result. Every difference points to an error.
4. State the error **and** the corrected line.

**Worked example 10.** This should output the average of ten numbers.

```
Total ← 0
FOR Count ← 1 TO 10
    INPUT Num
    Total ← Total + Count
NEXT Count
Average ← Total / 9
PRINT Average
```

Test with ten 1s: the expected average is 1. The trace gives Total = 55 and an output of about 6.1. Two errors:

- Line 4 adds the loop counter, not the input. Correct to `Total ← Total + Num`.
- Line 6 divides by 9. Correct to `Average ← Total / 10`.

**Editing to meet a new need.** To make Worked example 3 also count dry days, add `Dry ← 0` before the loop, add `IF Rain = 0 THEN Dry ← Dry + 1 ENDIF` inside the loop after the INPUT, and add Dry to the PRINT line. With the same six readings, Dry is **1**.

Other errors to look for: a counter or total set to zero inside the loop; a loop with no way to end (WHILE condition never changes); the wrong comparison (`>` where the scenario says "at least"); a missing ENDIF or NEXT; a decision box with only one exit; a flowline with no arrowhead.

## Common errors

- Using `=` in a stopping test when the value can jump past it. `UNTIL Count = 10` never stops a count that goes 7, 9, 11; `UNTIL Count > 9` does.
- Forgetting the second INPUT at the end of a WHILE body, so the loop never ends.
- Mixing up WHILE and REPEAT conditions: they work in opposite directions.
- Writing a FOR loop with STEP -1 but a start value smaller than the end value, so it never runs.
- Drawing a decision box without labelling both exits Yes and No.
- Putting a calculation in a parallelogram or an input in a rectangle.

## Next steps

Condense this into the [revision notes](/resources/a-level-cambridge-ict-algorithms-and-flowcharts-revision-notes/), then try the [practice questions](/resources/a-level-cambridge-ict-algorithms-and-flowcharts-practice/). For a quick check of your gaps, take one of the free [diagnostics](/diagnostics/).

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 3), Cambridge International Education. Topic 4: Algorithms and flowcharts (4.1 Algorithms, 4.2 Flowcharts) and the flowchart symbols table at the end of the subject content.
