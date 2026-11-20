---
title: "Cambridge A Level Information Technology (9626): Algorithms -- Practice Questions"
resourceType: "practice-questions"
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
description: "Twelve original Cambridge 9626 IT section 4.1 questions with answers on pseudocode, selection, loops, nested loops, trace tables and subroutines."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs; examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Algorithms study guide](/resources/cambridge-a-level-ict-9626-algorithms/)

These questions are for **section 4.1 Algorithms** (Topic 4, AS Level) of Cambridge International AS & A Level Information Technology (9626), 2025–2027. Assignment is written with an arrow. All organisations are invented.

---

## Section A

**1.** Define the term algorithm. **[2]**

**2.** State **one** difference between a WHILE...ENDWHILE loop and a REPEAT...UNTIL loop. **[2]**

**3.** Write down the output of this algorithm.

```
x ← 5
y ← 3
x ← x + y
y ← x * 2
WRITE x, y
```

**[2]**

**4.** Write down the values output by this loop.

```
FOR n ← 2 TO 14 STEP 4
    WRITE n
NEXT n
```

**[2]**

**5.** Identify the pseudocode structure that is best for choosing between several fixed values of one variable, and give a reason. **[2]**

## Section B

**6.** Complete a trace table for this algorithm and state the output.

```
n ← 1
total ← 0
WHILE total < 20
    total ← total + n
    n ← n * 2
ENDWHILE
WRITE n, total
```

**[4]**

**7.** State the values written by this algorithm and the number of times the inner loop body runs.

```
FOR a ← 1 TO 3
    FOR b ← 1 TO a
        WRITE a + b
    NEXT b
NEXT a
```

**[4]**

**8.** A shop gives a 10 per cent discount when the bill is over 100 pounds. Write an algorithm in pseudocode that inputs the bill, applies the discount if needed and outputs the amount to pay. **[5]**

**9.** This algorithm should input three numbers and output their average.

```
total ← 0
FOR i ← 1 TO 3
    INPUT num
    total ← total + num
NEXT i
average ← total / 2
WRITE average
```

**(a)** Identify the error. **[1]**

**(b)** Write the corrected line. **[1]**

**10.** A game menu offers 1 for Play, 2 for Options and 3 for Quit. Write an algorithm using a CASE statement that inputs the choice and outputs the matching word, or an error message for any other number. **[4]**

**11.** Write an algorithm using REPEAT...UNTIL that asks the user to enter a number from 1 to 10 and repeats until a valid number is entered. It must also count and output the number of attempts. **[5]**

**12.** Write a procedure called Area that is given a length and a width and outputs the area of the rectangle. Then write the lines that use a loop to call the procedure for three rectangles entered by the user. **[5]**

**13.** Explain **two** advantages of using subroutines when writing a large program. **[4]**

---

## Answers

**1.** A set of clear, ordered steps [1] that solves a problem or completes a task [1]. **[2]**

**2.** WHILE tests its condition before the body, so the body may never run, whereas REPEAT...UNTIL tests after the body, so it always runs at least once [1]. Any one other correct difference, such as that WHILE continues while the condition is true but REPEAT...UNTIL stops when the condition is true [1]. **[2]**

**3.** x becomes 5 + 3 = 8 [1]. y becomes 8 × 2 = 16, so the output is 8 and 16 [1]. **[2]**

**4.** 2, 6, 10, 14 [2] (one mark if only one error). **[2]**

**5.** CASE...ENDCASE [1], because it tests one variable against several exact values more clearly than many nested IF statements [1]. **[2]**

**6.** Trace table:

| n | total |
|---|---|
| 1 | 0 |
| 2 | 1 |
| 4 | 3 |
| 8 | 7 |
| 16 | 15 |
| 32 | 31 |

One mark for each pair of correct updates up to a maximum of three [3]. The loop stops because 31 is not less than 20, and the output is 32 and 31 [1]. **[4]**

**7.** The values written are 2, 3, 4, 4, 5, 6 [3] (lose one mark for each wrong or missing value). The inner loop body runs 1 + 2 + 3 = 6 times [1]. **[4]**

**8.** Sample answer:

```
INPUT bill
IF bill > 100 THEN
    amount ← bill * 0.9
ELSE
    amount ← bill
ENDIF
WRITE amount
```

One mark each for: input of the bill [1]; a correct test for over 100 [1]; discounted amount calculated as 90 per cent of the bill (or bill minus 10 per cent) [1]; amount unchanged otherwise [1]; output of the amount to pay [1]. **[5]**

**9. (a)** The total is divided by 2 instead of 3 [1].

**(b)** `average ← total / 3` [1]. **[2]**

**10.** Sample answer:

```
INPUT choice
CASE choice OF
    1: WRITE "Play"
    2: WRITE "Options"
    3: WRITE "Quit"
    OTHERWISE: WRITE "Invalid choice"
ENDCASE
```

One mark each for: input [1]; CASE on the variable [1]; three correct cases with outputs [1]; a default case with an error message [1]. **[4]**

**11.** Sample answer:

```
attempts ← 0
REPEAT
    INPUT number
    attempts ← attempts + 1
UNTIL number > 0 AND number < 11
WRITE attempts
```

One mark each for: counter set to 0 before the loop [1]; REPEAT...UNTIL structure [1]; input inside the loop [1]; counter increased inside the loop [1]; correct condition for 1 to 10 and output of the attempts after the loop [1]. **[5]**

**12.** Sample answer:

```
PROCEDURE Area(length, width)
    WRITE length * width
ENDPROCEDURE

FOR rectangle ← 1 TO 3
    INPUT l
    INPUT w
    CALL Area(l, w)
NEXT rectangle
```

One mark each for: procedure header with two parameters [1]; area calculated by multiplying [1]; area output [1]; loop that runs three times with the inputs inside [1]; the procedure called with the two values [1]. **[5]**

**13.** Any two from, each with a development: the code is written once and can be reused [1], which saves time and reduces errors [1]; a subroutine can be tested separately [1], so faults are easier to find [1]; the program is easier to read because the main program is short [1], so it is easier to maintain [1]; different programmers can write different subroutines at the same time [1], so the program is finished sooner [1]. **[4]**

## Where marks are usually lost

- Confusing the stopping conditions of WHILE and REPEAT...UNTIL.
- Not setting totals and counters to 0 before a loop.
- Writing trace tables with the values out of step with the loop passes.
- Missing the default case in a CASE statement.
- Stopping a FOR loop one value too early or too late.
