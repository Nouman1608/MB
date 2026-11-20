---
title: "Cambridge IGCSE Computer Science (0478): Programming concepts"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 8: Programming"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 8.1
syllabusTopics:
  - qualification: "igcse"
    topic: "programming-0478"
  - qualification: "igcse"
    topic: "programming-0478"
    subtopic: "programming-concepts-0478"
description: "Study guide to Cambridge IGCSE Computer Science 0478 section 8.1: variables, data types, input and output, selection, iteration, totalling and counting, string handling, operators, subroutines and maintainable code in Cambridge pseudocode."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---
Section 8.1 of the Cambridge IGCSE Computer Science 0478 syllabus covers the building blocks of every program. You must declare and use **variables and constants**, understand the basic **data types** (integer, real, char, string, Boolean), use **input and output**, and use **sequence, selection and iteration**, **totalling and counting**, **string handling**, and **arithmetic, relational and logical operators**. You must also use **nested statements**, define and use **procedures and functions** with up to three parameters, understand **local and global variables**, use **library routines** (MOD, DIV, ROUND, RANDOM) and know how to write a **maintainable program**.

In the examination, solutions are written in the syllabus **pseudocode**. Keywords are in capitals, identifiers are in mixed case such as `NumberOfPlayers`, and the assignment arrow is `←`. Knowledge of programming language syntax is not examined: the logic matters more than the syntax.

## Variables, constants and data types

A **variable** is a named memory location whose value can change while the program runs. A **constant** is a named value that is set once and does not change.

```
DECLARE Score : INTEGER
DECLARE Price : REAL
CONSTANT PassMark ← 50
Score ← 0
```

Only a literal value can be given to a constant, never an expression or another variable.

| Data type | Holds | Literal example |
|---|---|---|
| INTEGER | A whole number | `5`, `-3` |
| REAL | A number that can have a fractional part (at least one digit each side of the point) | `4.7`, `0.0` |
| CHAR | A single character in single quotes | `'x'`, `'@'` |
| STRING | Zero or more characters in double quotes | `"Hello"`, `""` |
| BOOLEAN | TRUE or FALSE | `TRUE` |

Choose the type that fits the data. A telephone number, which is never added up and may start with zero, is held as a STRING. A number of items is an INTEGER. A price is REAL.

## Input and output

```
INPUT Answer
OUTPUT Score
OUTPUT "You have ", Lives, " lives left"
```

`INPUT` stores what the user types in a variable. `OUTPUT` shows values, and several can be output on one line separated by commas.

## Sequence, selection and iteration

**Sequence** means statements run one after another in the order written.

### Selection

```
IF Mark >= PassMark
   THEN
     OUTPUT "Pass"
   ELSE
     OUTPUT "Fail"
ENDIF
```

A `CASE` statement chooses between several single values:

```
CASE OF Grade
  'A' : OUTPUT "Excellent"
  'B' : OUTPUT "Good"
  OTHERWISE OUTPUT "See your teacher"
ENDCASE
```

### Iteration (loops)

| Loop | Use | When the test is made |
|---|---|---|
| `FOR ... TO ... NEXT` | Count-controlled: repeat a known number of times | Counts from start to end value |
| `WHILE ... DO ... ENDWHILE` | Pre-condition: repeat while a condition is true | Before each pass; may run zero times |
| `REPEAT ... UNTIL` | Post-condition: repeat until a condition is true | After each pass; always runs at least once |

```
FOR Index ← 1 TO 5
    OUTPUT Index * Index
NEXT Index
```

This outputs 1, 4, 9, 16, 25. An optional `STEP` changes the increment, which can be negative: `FOR Index ← 10 TO 0 STEP -2` gives 10, 8, 6, 4, 2, 0.

```
Number ← 30
WHILE Number > 9 DO
    Number ← Number - 9
ENDWHILE
```

Trace: Number is 30, then 21, then 12, then 3. At 3 the condition `Number > 9` is false, so the loop ends with Number = 3.

```
REPEAT
    OUTPUT "Enter the password"
    INPUT Password
UNTIL Password = "Maple"
```

## Totalling and counting

**Totalling** adds each value to a running total. **Counting** adds 1 each time something happens. Both variables must be set to 0 before the loop.

```
Total ← 0
PassCount ← 0
FOR Index ← 1 TO 5
    INPUT Mark
    Total ← Total + Mark
    IF Mark >= 50
       THEN
         PassCount ← PassCount + 1
    ENDIF
NEXT Index
OUTPUT "Average ", Total / 5
OUTPUT "Passes ", PassCount
```

With marks 62, 45, 78, 50 and 33:

| Mark | Total | PassCount |
|---|---|---|
| 62 | 62 | 1 |
| 45 | 107 | 1 |
| 78 | 185 | 2 |
| 50 | 235 | 3 |
| 33 | 268 | 3 |

The average is 268 / 5 = 53.6.

## String handling

| Operation | Meaning | Example | Result |
|---|---|---|---|
| `LENGTH(s)` | Number of characters | `LENGTH("Computer")` | 8 |
| `SUBSTRING(s, start, length)` | Part of a string | `SUBSTRING("Computer", 1, 3)` | `"Com"` |
| `UCASE(s)` | Upper case | `UCASE("Happy")` | `"HAPPY"` |
| `LCASE(s)` | Lower case | `LCASE('W')` | `'w'` |

The first character may be at position 0 or 1, so state which you use. These notes use 1.

## Operators

| Type | Operators |
|---|---|
| Arithmetic | `+ - * / ^` and `MOD` (remainder), `DIV` (whole-number quotient) |
| Relational | `= < <= > >= <>` |
| Logical | `AND OR NOT` |

`DIV(47, 10)` is 4 and `MOD(47, 10)` is 7. To change 135 minutes into hours and minutes: `Hours ← DIV(135, 60)` gives 2 and `Minutes ← MOD(135, 60)` gives 15. Multiplication and division are done before addition and subtraction, so `2 + 3 * 4 ^ 2` is 2 + 3 × 16 = 50, whereas `(2 + 3) * 4` is 20. Use brackets to make the order clear.

A relational or logical operator gives a BOOLEAN result: `Age >= 13 AND Age <= 19` is TRUE only when both parts are true.

## Nested statements

A statement inside another is **nested**. You will not be asked for more than three levels.

```
Evens ← 0
FOR Number ← 1 TO 10
    IF Number MOD 2 = 0
       THEN
         Evens ← Evens + 1
    ENDIF
NEXT Number
```

The IF is nested inside the FOR. Evens finishes as 5 (2, 4, 6, 8 and 10).

## Procedures, functions and parameters

A **procedure** is a named block of code that carries out a task. A **function** also returns a single value. A **parameter** is a value passed in. Up to three parameters are used.

```
PROCEDURE ShowLine(Size : INTEGER)
    DECLARE Count : INTEGER
    FOR Count ← 1 TO Size
        OUTPUT "-"
    NEXT Count
ENDPROCEDURE

FUNCTION Average(A : INTEGER, B : INTEGER, C : INTEGER) RETURNS REAL
    RETURN (A + B + C) / 3
ENDFUNCTION

CALL ShowLine(20)
OUTPUT Average(4, 7, 10)
```

The procedure is called with `CALL`. The function is not: it is used inside an expression. `Average(4, 7, 10)` returns 21 / 3 = 7.0.

**Local variables** exist only inside the subroutine where they are declared. **Global variables** can be used anywhere in the program. Prefer local variables and parameters because they stop one part of a program changing another by accident.

## Library routines

| Routine | Result |
|---|---|
| `MOD(a, b)` and `DIV(a, b)` | Remainder and whole-number quotient |
| `ROUND(x, places)` | `ROUND(7.456, 1)` is 7.5 |
| `RANDOM()` | A random number between 0 and 1 |

`ROUND(RANDOM() * 6, 0)` gives a whole number from 0 to 6. Library routines are code already written and tested, so you do not have to write them yourself.

## Writing maintainable programs

A program is **maintainable** if another person can read, change and correct it later. Use:

- **meaningful identifiers** for variables, constants, arrays, procedures and functions (`TotalToPay` not `x`);
- **comments**, which in the pseudocode start with `//`, to explain what the code does;
- **procedures and functions** to break the program into small, reusable parts;
- **constants** for fixed values, so a value changes in one place only.

## Worked example: putting it together

*Problem:* a quiz asks for a score from 0 to 20 for each of 3 players, rejects scores outside that range, and outputs the highest score.

```
CONSTANT MaxScore ← 20
Highest ← 0
FOR Player ← 1 TO 3
    REPEAT
        OUTPUT "Enter score for player ", Player
        INPUT Score
    UNTIL Score >= 0 AND Score <= MaxScore
    IF Score > Highest
       THEN
         Highest ← Score
    ENDIF
NEXT Player
OUTPUT "Highest score is ", Highest
```

Choices explained:

1. A `FOR` loop is used because the number of players (3) is known.
2. A `REPEAT ... UNTIL` loop is used for the check because the question must be asked at least once, and again if the score is invalid.
3. `AND` joins the two conditions, so a score is accepted only when it is both 0 or more **and** 20 or less.
4. `Highest` starts at 0, which is safe because no valid score is lower than 0.

With the inputs 15, then 25 (rejected), then 18, then 12, the loop for player 2 asks twice. The scores accepted are 15, 18 and 12, and the output is "Highest score is 18".

## Common mistakes

- Not setting a total or counter to 0 before the loop.
- Putting the assignment the wrong way round. `Total + Mark ← Total` is wrong; the variable being changed is on the left.
- Using `=` to assign. Assignment uses `←`; `=` compares.
- Confusing `WHILE` (may run zero times) and `REPEAT` (runs at least once).
- Using `/` when you want a whole number. Use `DIV`.
- Calling a function with `CALL`.
- Off-by-one errors in `FOR` and `SUBSTRING`.

## Exam technique

- Write a trace table for every dry-run question, one row per change.
- Use the exact keywords from the syllabus pseudocode.
- Give identifiers meaningful names and indent loops and selections.

## Practise this sub-topic

Use the [Programming concepts revision notes](/resources/cambridge-igcse-computer-science-0478-programming-concepts-revision-notes/) for quick recall and the [Programming concepts practice questions](/resources/cambridge-igcse-computer-science-0478-programming-concepts-practice/) to test yourself.

## Official syllabus

Cambridge IGCSE Computer Science (0478) syllabus for 2026, 2027 and 2028, section 8.1 Programming concepts:
[official syllabus PDF](https://www.cambridgeinternational.org/Images/697167-2026-2028-syllabus.pdf).
