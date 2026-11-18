---
title: "Cambridge A Level Computer Science (9618): Algorithms -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed notes on identifier tables, loop choice, flowchart conversion, stepwise refinement and logic statements for Cambridge AS 9618 section 9.2."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Quick-recall notes for **9.2 Algorithms** (AS content, mainly Paper 2). The [Algorithms study guide](/resources/cambridge-a-level-computer-science-9618-algorithms-9-2/) takes one problem through every skill; the [Algorithms practice questions](/resources/cambridge-a-level-computer-science-9618-algorithms-9-2-practice/) give exam-style practice. Section 9.1 is in the [Computational Thinking Skills revision notes](/resources/cambridge-a-level-computer-science-9618-computational-thinking-skills-revision-notes/).

## Definitions to quote

- **Algorithm**: a solution to a problem expressed as a sequence of defined steps.
- **Identifier table**: a table of the identifiers used, with each one's data type and description.
- **Stepwise refinement**: breaking each step of an algorithm into more detailed steps, repeatedly, until each can be programmed directly.
- **Logic statement**: a condition built from comparisons and AND, OR, NOT that defines part of an algorithm.

## Identifier names

- Meaningful: `TotalCost`, not `x`.
- No spaces; start with a letter.
- One consistent style (e.g. capital at the start of each word).
- Not a keyword (`INPUT`, `OUTPUT`, `FOR`...).
- Constants for fixed values: `CONSTANT VatRate = 0.2`.

## Input, process, output and the three constructs

| Construct | Pseudocode |
|---|---|
| Sequence | Statements one after another |
| Selection | `IF ... THEN ... ELSE ... ENDIF`; `CASE OF Var ... OTHERWISE ... ENDCASE` |
| Iteration | `FOR Index ← 1 TO 10 ... NEXT Index`; `REPEAT ... UNTIL condition`; `WHILE condition ... ENDWHILE` |

Assignment `←`; comparison `=`, `<>`, `<`, `<=`, `>`, `>=`; join strings with `&`.

## Choosing a loop

| Situation | Loop |
|---|---|
| Number of repetitions known in advance | FOR |
| Must run at least once (e.g. input until valid) | REPEAT ... UNTIL |
| May run zero times (e.g. rogue value could come first) | WHILE ... ENDWHILE |

**Rogue value with WHILE**: INPUT before the loop **and** at the end of the loop body.

**REPEAT ... UNTIL** stops when the condition becomes TRUE; **WHILE** continues while it is TRUE.

## Flowchart symbols

| Symbol | Meaning |
|---|---|
| Terminator (rounded) | START / STOP |
| Parallelogram | INPUT / OUTPUT |
| Rectangle | Process (assignment, calculation) |
| Diamond | Decision, two labelled exits |
| Arrow | Flow of control |

## Converting between forms

| From → to | What to look for |
|---|---|
| Flowchart → pseudocode | A decision whose exit goes **back up** is a loop: tested before the body → WHILE; after → REPEAT ... UNTIL. Exits that go **down** and rejoin → IF |
| Pseudocode → flowchart | One symbol per statement; every IF and loop condition becomes a diamond; WHILE/REPEAT need a loop-back arrow |
| Structured English → pseudocode | Keep the step order; each SET becomes `←`, each REPEAT/WHILE/IF becomes the matching construct |
| Pseudocode → structured English | Short numbered instructions in plain words, same order |

## Mini example: structured English to pseudocode

Structured English: 1. SET count to 0. 2. REPEAT 3 and 4 UNTIL the number entered is negative. 3. INPUT a number. 4. IF it is even and not negative, ADD 1 to count. 5. OUTPUT count.

```
Count ← 0
REPEAT
   INPUT Num
   IF Num MOD 2 = 0 AND Num >= 0 THEN
      Count ← Count + 1
   ENDIF
UNTIL Num < 0
OUTPUT Count
```

Step 4's "not negative" becomes `Num >= 0`; without it, a rogue value such as −2 would be counted, because REPEAT processes the value before testing the UNTIL condition.

## Stepwise refinement: pattern

```
Level 1: Produce a payslip
Level 2: 1 Get hours and rate  2 Calculate pay  3 Output payslip
Level 3: 2.1 Basic ← min(hours, 40) × rate
         2.2 Overtime ← (hours − 40) × rate × 1.5 if hours > 40
         2.3 Pay ← Basic + Overtime
```

Stop when each step maps onto one or two lines of code.

## Logic statements

| Rule in words | Logic statement |
|---|---|
| Age from 13 to 19 inclusive | `Age >= 13 AND Age <= 19` |
| Weekend | `Day = "Sat" OR Day = "Sun"` |
| Not a member | `NOT Member` or `Member = FALSE` |
| Under 5 or 65 and over | `Age < 5 OR Age >= 65` |

Test each boundary with a value just inside and just outside.

## Trace tables

- One column per variable, plus one for the condition if useful, plus OUTPUT.
- New row when a value changes.
- Record values only when they change; do not repeat unchanged ones unless the question's table requires it.

## Exam traps

- `=` is comparison; `←` is assignment.
- Missing the second INPUT in a WHILE loop gives an infinite loop.
- REPEAT ... UNTIL always runs once, so a rogue value entered first is processed.
- `Mark >= 0 OR Mark <= 100` is always TRUE; use AND.
- Decision diamonds need both exits labelled (Yes/No or TRUE/FALSE).
- Keep the identifiers given in the question.

## Self-test

1. Define algorithm.
2. What three columns does an identifier table have?
3. Which loop is best for processing exactly 30 exam marks?
4. Which loop should you use to keep asking until a valid PIN is entered?
5. Why does a WHILE loop with a rogue value need two INPUT statements?
6. On a flowchart, how do you tell a loop from a selection?
7. Write a logic statement for "Score between 0 and 50 inclusive".
8. Write a logic statement for "Colour is red or blue".
9. What is stepwise refinement?
10. When is stepwise refinement complete?
11. Which flowchart symbol is used for OUTPUT?
12. Give two features of a good identifier.

**Answers**

1. A solution to a problem expressed as a sequence of defined steps.
2. Identifier, data type, description.
3. FOR (the count is known).
4. REPEAT ... UNTIL (must run at least once).
5. One gives a value to test before the loop starts; one gets the next value at the end of each pass.
6. A loop has a flow line from the decision going back to an earlier point; a selection's paths go forward and rejoin.
7. `Score >= 0 AND Score <= 50`
8. `Colour = "Red" OR Colour = "Blue"`
9. Breaking each step of an algorithm into more detailed steps, repeatedly.
10. When each step is detailed enough to be programmed directly.
11. Parallelogram.
12. Any two: meaningful; no spaces; consistent style; not a keyword.
