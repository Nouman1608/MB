---
title: "Cambridge A Level Computer Science (9618): Constructs -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 11: Programming"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 11.2
syllabusTopics:
  - qualification: "a-level"
    topic: "programming"
    subtopic: "constructs"
description: "Original 9618 section 11.2 questions with answers on IF, nested IF, CASE, FOR with STEP, WHILE and REPEAT loops, loop rewriting and loop justification."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [Constructs study guide](/resources/cambridge-a-level-computer-science-9618-constructs/) · [Constructs revision notes](/resources/cambridge-a-level-computer-science-9618-constructs-revision-notes/)

---

## Section A

**1.** State the purpose of the ELSE clause in an IF statement. **[1]**

**2.** State how many times the body of each loop runs.

**(a)** FOR J ← 2 TO 11 **[1]**

**(b)** FOR J ← 30 TO 0 STEP -10 **[1]**

**(c)** Count ← 5, followed by WHILE Count < 5 with Count ← Count + 1 in the body **[1]**

**(d)** Count ← 5, followed by REPEAT with Count ← Count + 1 in the body, UNTIL Count >= 5 **[1]**

**3.** Give **two** differences between a pre-condition loop and a post-condition loop. **[2]**

**4.** Explain why a CASE structure cannot be used in place of the statement IF Weight > Limit AND Fragile THEN. **[2]**

## Section B

**5.** Day holds an integer, where 1 is Monday and 7 is Sunday. Write a CASE structure that outputs "Weekday" for 1 to 5, "Weekend" for 6 or 7, and "Error" for any other value. **[3]**

**6.** A theme park ride has these rules: riders under 120 cm tall are refused; riders 120 cm or taller who are under 12 years old may ride only with an adult; all other riders may ride alone. Height and Age are integers.

**(a)** Write pseudocode using a nested IF that outputs "Refused", "With adult" or "Allowed". **[4]**

**(b)** Explain why a single CASE structure is not suitable for this problem. **[1]**

**7.** Study this pseudocode, which totals values until the rogue value −1 is entered.

```
Total ← 0
INPUT Value
WHILE Value <> -1
   Total ← Total + Value
   INPUT Value
ENDWHILE
OUTPUT Total
```

**(a)** State the output when the inputs are 4, 9, 0, −1. **[1]**

**(b)** Rewrite the pseudocode using a post-condition loop so that it gives the same output for every possible input. **[4]**

**(c)** Explain why the pre-condition loop is better suited to this problem. **[2]**

**8.** Write pseudocode using a count-controlled loop to output the seven times table in reverse, from 12 × 7 = 84 down to 1 × 7 = 7, one line per calculation. **[3]**

**9.** Study this pseudocode.

```
Count ← 0
FOR Row ← 1 TO 3
   FOR Col ← Row TO 3
      Count ← Count + 1
   NEXT Col
NEXT Row
OUTPUT Count
```

State the output and show how you reached it. **[2]**

**10.** Write pseudocode that asks the user for a month number, repeating until a value from 1 to 12 is entered, and then uses a CASE structure to output the number of days in that month. Assume February has 28 days; April, June, September and November have 30; the rest have 31. **[6]**

**11.** Justify the most suitable loop structure for **each** task.

**(a)** A game asks "Play again (Y/N)?" after each round and stops when the player enters N. **[2]**

**(b)** A program reads temperature readings from a file of unknown length, which may be empty. **[2]**

**12.** This code is meant to give "Distinction" for scores of 80 or more, "Pass" for 50 to 79 and "Fail" below 50.

```
IF Score >= 50 THEN
   Grade ← "Pass"
ELSE IF Score >= 80 THEN
   Grade ← "Distinction"
ENDIF
```

**(a)** Identify **two** errors in the code. **[2]**

**(b)** Write a corrected version. **[3]**

---

## Answers

**1.** It gives the statements to run when the condition is FALSE [1].

**2.** **(a)** 10 [1].

**(b)** 4 (30, 20, 10, 0) [1].

**(c)** 0, because 5 < 5 is FALSE at the first test [1].

**(d)** 1; the body runs before the test, Count becomes 6 and the condition is TRUE [1].

**3.** Any two, 1 mark each: a pre-condition loop tests its condition before the body, a post-condition loop after it [1]; a pre-condition loop may run zero times, a post-condition loop always runs at least once [1]; a WHILE loop continues while its condition is TRUE, a REPEAT loop stops when its condition becomes TRUE [1].

**4.** CASE compares a single variable with fixed values or ranges [1]; this condition compares two variables with each other (Weight with Limit) and combines it with a second, BOOLEAN condition, which a list of values cannot express [1].

**5.** Model answer:

```
CASE OF Day
   1 TO 5    : OUTPUT "Weekday"
   6, 7      : OUTPUT "Weekend"
   OTHERWISE : OUTPUT "Error"
ENDCASE
```

CASE OF Day with ENDCASE [1]; 1 TO 5 and 6, 7 branches correct [1]; OTHERWISE outputs "Error" [1].

**6.** **(a)** Model answer:

```
IF Height < 120 THEN
   OUTPUT "Refused"
ELSE
   IF Age < 12 THEN
      OUTPUT "With adult"
   ELSE
      OUTPUT "Allowed"
   ENDIF
ENDIF
```

Height tested first with "Refused" [1]; Age test nested inside the ELSE [1]; correct outputs for the two age cases [1]; both IFs closed with ENDIF [1].

**(b)** The decision depends on two variables, Height and Age, but a CASE structure tests only one [1].

**7.** **(a)** 13 (4 + 9 + 0) [1].

**(b)** Model answer:

```
Total ← 0
REPEAT
   INPUT Value
   IF Value <> -1 THEN
      Total ← Total + Value
   ENDIF
UNTIL Value = -1
OUTPUT Total
```

Total initialised before the loop [1]; INPUT inside a REPEAT ... UNTIL [1]; IF that stops −1 being added [1]; UNTIL Value = −1 and the total output after the loop [1].

**(c)** The first input might be the rogue value, so the loop might need to run zero times, which a pre-condition loop allows [1]. The rogue value is tested before it is added, so no extra IF statement is needed inside the loop [1].

**8.** Model answer:

```
FOR N ← 12 TO 1 STEP -1
   OUTPUT N, " x 7 = ", N * 7
NEXT N
```

FOR loop from 12 to 1 [1]; STEP -1 [1]; output of the calculation and result on each pass [1].

**9.** 6 [1]. Row 1 runs Col from 1 to 3 (3 passes), Row 2 from 2 to 3 (2 passes), Row 3 from 3 to 3 (1 pass): 3 + 2 + 1 = 6 [1].

**10.** Model answer:

```
REPEAT
   OUTPUT "Enter a month number (1 to 12)"
   INPUT Month
UNTIL Month >= 1 AND Month <= 12
CASE OF Month
   2             : Days ← 28
   4, 6, 9, 11   : Days ← 30
   OTHERWISE     : Days ← 31
ENDCASE
OUTPUT "Days in month: ", Days
```

REPEAT loop containing a prompt and INPUT [1]; UNTIL condition accepting exactly 1 to 12 [1]; CASE OF Month with ENDCASE [1]; February given 28 [1]; the four 30-day months given 30 and the rest 31 [1]; result output [1].

**11.** **(a)** A post-condition loop (REPEAT ... UNTIL Answer = "N") [1], because at least one round is always played before the player can be asked whether to play again [1].

**(b)** A pre-condition loop (WHILE NOT EOF) [1], because the number of readings is not known and the file may be empty, so the body may need to run zero times [1].

**12.** **(a)** The conditions are in the wrong order: a score of 80 or more is caught by Score >= 50 first, so it gets "Pass" [1]. There is no branch for scores below 50, and the nested IF has no ENDIF of its own [1].

**(b)** Model answer:

```
IF Score >= 80 THEN
   Grade ← "Distinction"
ELSE
   IF Score >= 50 THEN
      Grade ← "Pass"
   ELSE
      Grade ← "Fail"
   ENDIF
ENDIF
```

Highest band tested first [1]; "Fail" in the final ELSE [1]; every IF closed with its own ENDIF [1].

---

## Where marks are usually lost

- Reversing the exit condition when converting between WHILE and REPEAT.
- Testing bands in an order that lets a wider condition catch values first.
- Missing ENDIF, ENDCASE or NEXT.
- Justifying a loop choice without linking it to the scenario.
