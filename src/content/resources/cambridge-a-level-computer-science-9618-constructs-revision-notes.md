---
title: "Cambridge A Level Computer Science (9618): Constructs -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for 9618 section 11.2: IF, nested IF and CASE syntax, the three loop types, how to justify a loop choice, exam traps and a 12-question self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Condensed notes for 11.2 Constructs, AS content in Cambridge International AS & A Level Computer Science 9618, examined in Paper 2. You must write IF statements with ELSE and nesting, CASE structures and the three loop types in pseudocode, and justify why one loop suits a problem better than the others.

Related: [Constructs study guide](/resources/cambridge-a-level-computer-science-9618-constructs/) · [Constructs practice questions](/resources/cambridge-a-level-computer-science-9618-constructs-practice/) · [Programming revision notes (all of Topic 11)](/resources/cambridge-a-level-computer-science-programming-revision-notes/)

## Syntax to reproduce

```
IF <condition> THEN
   <statements>
ELSE
   <statements>
ENDIF

CASE OF <identifier>
   <value>            : <statement>
   <value>, <value>   : <statement>
   <value> TO <value> : <statement>
   OTHERWISE          : <statement>
ENDCASE

FOR <counter> ← <start> TO <end> STEP <increment>
   <statements>
NEXT <counter>

WHILE <condition>
   <statements>
ENDWHILE

REPEAT
   <statements>
UNTIL <condition>
```

## Selection in brief

- **IF ... ELSE**: two paths, one of which always runs.
- **Nested IF**: an IF inside a THEN or ELSE block; each inner IF needs its own ENDIF.
- Bands are tested in order. Each ELSE has already ruled out earlier bands, so test one boundary per level.
- **CASE**: one variable against values, lists of values or ranges; the first matching branch runs; OTHERWISE handles the rest.
- Choose CASE for one variable with many fixed values; choose IF for conditions involving several variables or comparisons with other variables.

## Iteration in brief

| | FOR | WHILE | REPEAT ... UNTIL |
|---|---|---|---|
| Type | Count-controlled | Pre-condition | Post-condition |
| Test | Count set at start | Before each pass | After each pass |
| Ends when | Counter passes end value | Condition FALSE | Condition TRUE |
| Fewest passes | 0 if start is beyond end | 0 | 1 |
| Suits | Known number of repetitions, array processing | Unknown number, possibly none | Unknown number, at least one |

- FOR passes (step 1) = end − start + 1. FOR I ← 3 TO 19 STEP 4 gives 3, 7, 11, 15, 19.
- A negative STEP counts down.
- WHILE and REPEAT need a statement in the body that changes the condition, or they never end.

## How to justify a loop

Fact about the problem + matching loop feature, in the scenario's terms.

- "The class always has 30 students, so the number of iterations is known: a FOR loop, with the counter as the array index."
- "The user must enter a value before it can be checked, so the body must run at least once: a REPEAT loop."
- "The file may be empty, so the loop may need to run zero times: a WHILE loop testing NOT EOF before each read."

## Key terms

| Term | Meaning |
|---|---|
| Selection | Choosing which statements run, based on a condition |
| Nested IF | An IF statement placed inside another IF statement |
| CASE structure | Selection that compares one variable with a list of values or ranges |
| OTHERWISE | The CASE branch run when no listed value matches |
| Iteration | Repeating a block of statements |
| Count-controlled loop | Runs a set number of times using a counter (FOR) |
| Pre-condition loop | Tests its condition before each pass (WHILE) |
| Post-condition loop | Tests its condition after each pass (REPEAT ... UNTIL) |
| Infinite loop | A loop whose exit condition is never met |
| Rogue value | A special input, such as −1, that signals the end of the data |

## Exam traps

- REPEAT ... UNTIL Valid stops when Valid becomes TRUE; WHILE NOT Valid continues while it is FALSE. Mixing the two reverses the logic.
- Gaps and overlaps between bands: Mark < 40 followed by Mark > 40 leaves 40 out.
- CASE ranges suit INTEGER values; a REAL such as 15.5 can fall between 5 TO 15 and 16 TO 64.
- Changing the FOR counter inside the loop.
- A missing ENDIF in a nested IF; count IFs and ENDIFs.
- An off-by-one error: FOR I ← 0 TO 10 runs 11 times, not 10.
- "A WHILE loop is faster" is not a justification.

## Self-test

1. How many times does FOR K ← 5 TO 14 run?
2. List the values output by FOR N ← 20 TO 5 STEP -5 with OUTPUT N in the body.
3. Which loop always runs at least once?
4. State when a WHILE loop stops.
5. When is CASE more suitable than nested IF?
6. A CASE statement has 1 TO 3 : OUTPUT "Low" and OTHERWISE : OUTPUT "High". What is output for 0?
7. Give a situation where a pre-condition loop is better than a post-condition loop.
8. What does a rogue value do?
9. X ← 10, then WHILE X > 10 ... ENDWHILE. How many times does the body run?
10. X ← 10, then REPEAT X ← X + 1 UNTIL X > 10. What is X afterwards?
11. Why does each nested IF need its own ENDIF?
12. Bands are: under 50 Fail, 50 to 69 Pass, 70 or over Merit. Write the first two conditions of a nested IF that tests from the lowest band.

**Answers:** 1. 10 (14 − 5 + 1). 2. 20, 15, 10, 5. 3. The post-condition loop, REPEAT ... UNTIL. 4. When its condition is FALSE at the start of a pass. 5. When one variable is compared with several fixed values or ranges. 6. "High", because 0 matches no listed range. 7. Reading records from a file that might be empty, since the body might need to run zero times. 8. It marks the end of the input data so that the loop can stop without knowing the count in advance. 9. None, because 10 > 10 is FALSE. 10. 11; the body runs once and then the condition is TRUE. 11. Each IF opens a structure that must be closed, so the translator knows which statements belong to which IF. 12. IF Mark < 50 THEN Result ← "Fail" ELSE IF Mark < 70 THEN Result ← "Pass" (each inner IF then closed with its own ENDIF).
