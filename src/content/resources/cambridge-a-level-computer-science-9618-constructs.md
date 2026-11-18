---
title: "Cambridge A Level Computer Science (9618): Constructs"
resourceType: "study-guides"
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
description: "Study guide to 9618 section 11.2: IF with ELSE, nested IF, CASE with ranges, count-controlled, pre-condition and post-condition loops, and justifying loop choice."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Section 11.2 Constructs of Cambridge International AS & A Level Computer Science 9618 asks you to "use pseudocode to write" an IF statement including the ELSE clause and nested IF statements, a CASE structure, and the three loops (count-controlled, post-condition and pre-condition). You must also "justify why one loop structure may be better suited to solve a problem than the others". It is AS content, examined in Paper 2.

Related: [Constructs revision notes](/resources/cambridge-a-level-computer-science-9618-constructs-revision-notes/) · [Constructs practice questions](/resources/cambridge-a-level-computer-science-9618-constructs-practice/) · [Programming study guide (all of Topic 11)](/resources/cambridge-a-level-computer-science-programming-study-guide/)

## Selection with IF

An IF statement runs one block when a condition is TRUE and, with an ELSE clause, a different block when it is FALSE.

```
IF Stock < ReorderLevel THEN
   OUTPUT "Reorder"
ELSE
   OUTPUT "Stock OK"
ENDIF
```

A **nested IF** places one IF inside the THEN or ELSE block of another. It is needed when a second decision only makes sense after the first has been made, or when a value must be placed into one of several bands.

The order of the conditions is what makes a nested IF correct. Each ELSE already knows that every earlier condition was FALSE, so later conditions need only test the remaining boundary. Testing ranges in order, from lowest to highest or highest to lowest, avoids writing double conditions such as Age >= 5 AND Age < 16, and avoids gaps or overlaps between bands.

## Selection with CASE

CASE compares one variable with a list of values or ranges and runs the first branch that matches. OTHERWISE catches every value not listed.

```
CASE OF Month
   12, 1, 2 : Season ← "Winter"
   3 TO 5   : Season ← "Spring"
   6 TO 8   : Season ← "Summer"
   9 TO 11  : Season ← "Autumn"
   OTHERWISE : Season ← "Invalid"
ENDCASE
```

Use CASE when **one** variable is tested against several fixed values or ranges. Use IF when conditions involve more than one variable, or comparisons such as Total > Limit that a list of values cannot express.

## Iteration: three loops

| Loop | Pseudocode | When the condition is checked | Minimum number of runs |
|---|---|---|---|
| Count-controlled | FOR ... TO ... (STEP ...) ... NEXT | Count fixed before the loop starts | 0 if the start value is beyond the end value, otherwise the full count |
| Pre-condition | WHILE ... ENDWHILE | Before each pass; loop continues while TRUE | 0 |
| Post-condition | REPEAT ... UNTIL | After each pass; loop stops when TRUE | 1 |

### Count-controlled

```
FOR Index ← 10 TO 0 STEP -2
   OUTPUT Index
NEXT Index
```

This outputs 10, 8, 6, 4, 2 and 0. Without STEP the counter goes up by 1, and the number of passes is end − start + 1. Do not change the counter inside the loop body; the loop controls it.

### Pre-condition

```
WHILE Balance < Target
   Balance ← Balance * 1.05
   Years ← Years + 1
ENDWHILE
```

The condition is tested first, so if Balance already meets the target the body never runs. Something inside the body must eventually make the condition FALSE, or the loop never ends.

### Post-condition

```
REPEAT
   OUTPUT "Enter a PIN of four digits"
   INPUT Pin
UNTIL LENGTH(Pin) = 4 AND IS_NUM(Pin)
```

The body always runs once, which is exactly what input needs: there is nothing to test until the user has typed something.

## Justifying a loop choice

A justification has two parts: a fact about the problem, and the loop feature that matches it.

- **Count-controlled**: the number of repetitions is known before the loop starts, such as processing every element of an array of 30 items. The counter also gives the index, so there is no separate variable to update.
- **Pre-condition**: the number of repetitions is not known, and it may be zero, such as reading a file that might be empty or processing items in a basket that might have none.
- **Post-condition**: the number of repetitions is not known, but the body must run at least once, such as asking for input until it is valid, or playing a game round before asking "again?".

Any loop can be rewritten as either of the others, but the result usually needs an extra variable or a duplicated statement. That extra code is a reason the original choice was better suited, and you can quote it in a justification.

## Worked example 1: nested IF and CASE for the same problem

A cinema charges by age: under 5 is free, 5 to 15 pays 6.00, 16 to 64 pays 9.50, and 65 or over pays 7.00. Age is an INTEGER.

**Nested IF**

```
IF Age < 5 THEN
   Price ← 0
ELSE
   IF Age < 16 THEN
      Price ← 6.00
   ELSE
      IF Age < 65 THEN
         Price ← 9.50
      ELSE
         Price ← 7.00
      ENDIF
   ENDIF
ENDIF
```

**CASE**

```
CASE OF Age
   0 TO 4    : Price ← 0
   5 TO 15   : Price ← 6.00
   16 TO 64  : Price ← 9.50
   OTHERWISE : Price ← 7.00
ENDCASE
```

Test with the boundary ages. Age 4 gives 0 and 5 gives 6.00; 15 gives 6.00 and 16 gives 9.50; 64 gives 9.50 and 65 gives 7.00. Both versions agree. The nested IF tests only one boundary at each level because the ELSE has ruled out the lower bands. The CASE is easier to read here because one variable is tested against ranges, but it relies on Age being a whole number; with a REAL value such as 15.5 the ranges would leave gaps, and the nested IF would be the safer choice.

## Worked example 2: choosing and tracing a loop

A savings account starts at 1000 and grows by 5% each year. A program must output how many whole years it takes to reach at least 2000.

The number of years is not known in advance, so a count-controlled loop is unsuitable. A pre-condition loop is chosen because if the starting balance were already 2000 or more, the answer should be 0 years and the body should not run.

```
Balance ← 1000
Years ← 0
WHILE Balance < 2000
   Balance ← Balance * 1.05
   Years ← Years + 1
ENDWHILE
OUTPUT Years
```

After 14 years the balance is about 1979.93, still below 2000, so the loop runs again. After 15 years it is about 2078.93, the condition is FALSE and the output is 15.

Rewriting this as REPEAT ... UNTIL Balance >= 2000 would give 1 instead of 0 for a starting balance of 2000, because the body would run once before any test. That is the justification an examiner looks for: a specific case where the other loop would behave wrongly.

## Common mistakes

- Writing ELSE IF on one line without the matching ENDIF for each IF.
- Leaving a gap between bands, such as Age < 15 then Age > 15, so that 15 matches nothing.
- Using CASE to compare two variables, or for conditions such as Total > Limit.
- Reversing the condition of a REPEAT loop: it stops when the condition becomes TRUE, whereas WHILE continues while it is TRUE.
- A WHILE loop whose body never changes the variables in its condition.
- Justifying a loop with "it is more efficient" without saying why for this problem.

## Exam technique

**Write pseudocode** using a stated construct: use that construct even if another would work, and close every structure (ENDIF, ENDCASE, NEXT, ENDWHILE, UNTIL). Indent each block so the examiner can see which statements belong where. **Justify** a loop choice: state whether the number of iterations is known, and whether the body must run at least once or might need to run zero times, linked to the scenario. **Rewrite** a loop as a different type: check the new version with the first value, the last value and a case where the loop should not run at all.
