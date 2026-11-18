---
title: "Cambridge A Level Computer Science (9618): Algorithms"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 9: Algorithm Design and Problem-solving"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 9.2
syllabusTopics:
  - qualification: "a-level"
    topic: "algorithm-design-and-problem-solving"
    subtopic: "algorithms-9-2"
description: "Identifier tables, the three constructs, converting between structured English, flowcharts and pseudocode, stepwise refinement and logic statements for Cambridge 9618 9.2."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers **9.2 Algorithms** in the Cambridge International AS & A Level Computer Science 9618 syllabus. It is AS content, assessed mainly on Paper 2, and all pseudocode follows the Cambridge Pseudocode Guide. The [Algorithm Design and Problem-solving study guide](/resources/cambridge-a-level-computer-science-algorithm-design-and-problem-solving-study-guide/) introduces the whole of Topic 9, including the flowchart symbols; this page takes one new problem through every skill in 9.2, from identifier table to trace table. Condensed notes are in the [Algorithms revision notes](/resources/cambridge-a-level-computer-science-9618-algorithms-9-2-revision-notes/), and the [Algorithms practice questions](/resources/cambridge-a-level-computer-science-9618-algorithms-9-2-practice/) let you test yourself.

## What 9.2 asks you to do

- understand that an **algorithm** is a solution to a problem expressed as a sequence of defined steps
- use suitable **identifier names** and represent them in an **identifier table**
- write pseudocode that contains **input, process and output**, using the three basic constructs of **sequence, selection and iteration**
- document a simple algorithm using **structured English**, a **flowchart** or **pseudocode**
- write pseudocode from structured English or from a flowchart, and draw a flowchart from structured English or from pseudocode
- describe and use **stepwise refinement** to express an algorithm in enough detail to be programmed
- use **logic statements** to define parts of an algorithm.

Abstraction and decomposition, which come before algorithm design, are in the [Computational Thinking Skills guide](/resources/cambridge-a-level-computer-science-9618-computational-thinking-skills/).

## The problem

An invented car park charges **3.00** for a stay of up to 2 hours, then **1.50** for each extra hour, with a maximum charge of **12.00**. At the end of the day the attendant enters the number of whole hours each car stayed, one at a time, and enters 0 to finish. The program outputs each charge and then the total takings.

## Step 1: the identifier table

Good identifiers say what they hold, use no spaces, and follow one consistent style.

| Identifier | Data type | Description |
|---|---|---|
| Hours | INTEGER | Hours stayed by one car, input; 0 ends input |
| Charge | REAL | Charge for one car |
| Total | REAL | Running total of all charges |
| BaseCharge | REAL | Constant 3.00, charge for up to 2 hours |
| HourlyRate | REAL | Constant 1.50, charge per extra hour |
| MaxCharge | REAL | Constant 12.00, highest charge |

Using constants means a price change is made in one place, and the code says *why* a number is there.

## Step 2: structured English

1. SET total to 0.
2. INPUT hours.
3. REPEAT steps 4 to 8 WHILE hours is not 0.
4. IF hours is 2 or less, SET charge to the base charge.
5. OTHERWISE SET charge to the base charge plus the hourly rate times (hours minus 2); IF charge is more than the maximum, SET charge to the maximum.
6. OUTPUT charge.
7. ADD charge to total.
8. INPUT hours.
9. OUTPUT total.

Structured English uses short, numbered instructions with a small set of keywords, so it is precise enough to convert but still readable by someone who does not program.

## Step 3: pseudocode

```
CONSTANT BaseCharge = 3.00
CONSTANT HourlyRate = 1.50
CONSTANT MaxCharge = 12.00
DECLARE Hours : INTEGER
DECLARE Charge : REAL
DECLARE Total : REAL

Total ← 0
INPUT Hours
WHILE Hours <> 0
   IF Hours <= 2 THEN
      Charge ← BaseCharge
   ELSE
      Charge ← BaseCharge + (Hours - 2) * HourlyRate
      IF Charge > MaxCharge THEN
         Charge ← MaxCharge
      ENDIF
   ENDIF
   OUTPUT Charge
   Total ← Total + Charge
   INPUT Hours
ENDWHILE
OUTPUT "Total takings: ", Total
```

All three constructs appear: **sequence** (the statements run in order), **selection** (the IF statements) and **iteration** (the WHILE loop). It has **input** (INPUT Hours), **process** (calculating Charge and Total) and **output**.

### Why WHILE and not FOR or REPEAT?

| Loop | Use when | Here? |
|---|---|---|
| FOR ... NEXT | The number of repetitions is known before the loop starts | No: the number of cars is not known |
| REPEAT ... UNTIL | The body must run at least once; condition tested at the end | No: the first value could be 0 |
| WHILE ... ENDWHILE | The body may run zero times; condition tested at the start | Yes |

Notice the two INPUT statements: one before the loop, so there is a value to test, and one at the end of the body. This "read ahead" pattern is what stops the rogue value 0 from being charged.

## Step 4: testing with a trace table

Test data: 1, 5, 9, 0. Expected charges 3.00, 7.50 and 12.00 (since 3.00 + 7 × 1.50 = 13.50 is over the maximum), total 22.50.

| Hours | Hours <= 2? | Charge | Charge > MaxCharge? | Total | Output |
|---|---|---|---|---|---|
| 1 | TRUE | 3.00 | | 3.00 | 3.00 |
| 5 | FALSE | 7.50 | FALSE | 10.50 | 7.50 |
| 9 | FALSE | 13.50 then 12.00 | TRUE | 22.50 | 12.00 |
| 0 | | | | | Total takings: 22.50 |

The data covers each path: a short stay, a normal longer stay, a stay that hits the maximum, and the rogue value.

## Step 5: drawing the flowchart from the pseudocode

Convert one construct at a time, top to bottom:

1. **Terminator**: START.
2. **Process** box: Total ← 0.
3. **Input/output** parallelogram: INPUT Hours.
4. **Decision** diamond: Hours <> 0? The **No** exit goes to step 10; the **Yes** exit continues.
5. **Decision**: Hours <= 2? **Yes** leads to a process box Charge ← BaseCharge; **No** leads to a process box Charge ← BaseCharge + (Hours − 2) × HourlyRate, then a decision Charge > MaxCharge? whose **Yes** exit passes through Charge ← MaxCharge. All these paths **join** before step 6.
6. **Output**: OUTPUT Charge.
7. **Process**: Total ← Total + Charge.
8. **Input**: INPUT Hours.
9. A flow line from step 8 goes **back** to the decision at step 4. This loop-back line is how a WHILE loop appears on a flowchart.
10. **Output**: OUTPUT Total, then a **terminator**: STOP.

Going the other way, from a flowchart to pseudocode, look at each decision diamond and ask: does a line from it lead **back up** the chart? If so it is a loop; if its condition is tested before the body it becomes WHILE, and if after the body, REPEAT ... UNTIL. If both exits lead **down** and rejoin, it is an IF.

## Stepwise refinement

**Stepwise refinement** means starting with the problem stated as a few broad steps and repeatedly breaking each step into more detailed steps, until every step is detailed enough to be written directly as program code.

**Level 1**

1. Process each car's stay.
2. Output total takings.

**Level 2** (refining step 1)

1.1 Get the first number of hours.
1.2 While the hours are not 0: calculate the charge, output it, add it to the total, get the next number of hours.

**Level 3** (refining "calculate the charge")

1.2.1 If hours ≤ 2, charge is 3.00.
1.2.2 Otherwise, charge is 3.00 + (hours − 2) × 1.50.
1.2.3 If charge > 12.00, charge is 12.00.

Level 3 maps line for line onto the pseudocode in Step 3, which is the sign that refinement is complete.

## Logic statements

A **logic statement** defines a condition precisely, using comparison operators (=, <>, <, <=, >, >=) and the Boolean operators AND, OR and NOT. Rules given in words are turned into logic statements to define parts of an algorithm.

Suppose the car park adds two rules: blue-badge holders park free, and stays of more than 24 hours are rejected for checking.

```
IF BlueBadge = TRUE THEN
   Charge ← 0
ELSE
   IF Hours >= 1 AND Hours <= 24 THEN
      // calculate the charge as before
   ELSE
      OUTPUT "Check this entry"
   ENDIF
ENDIF
```

`Hours >= 1 AND Hours <= 24` is TRUE only when **both** parts are true. A common error is writing `Hours >= 1 OR Hours <= 24`, which is TRUE for every whole number, so nothing would ever be rejected. Testing a logic statement with a value just inside and just outside each boundary (0, 1, 24, 25) shows whether it is right.

## Common mistakes

- Forgetting the second INPUT inside a WHILE loop, which gives an infinite loop.
- Using a FOR loop when the number of repetitions is not known in advance.
- Writing `=` for assignment; Cambridge pseudocode uses `←`.
- Drawing a decision diamond with unlabelled exits, or with three exits.
- Refining one level only, so the steps are still too vague to code.
- Using OR where the rule needs AND.

## Exam technique

When asked to **write pseudocode from** structured English or a flowchart, keep the same order and identifiers as the source; examiners mark against it. When asked to **draw a flowchart**, label every decision exit and draw the loop-back line clearly. For **trace table** questions, add a row each time a variable changes, and record outputs in their own column.
