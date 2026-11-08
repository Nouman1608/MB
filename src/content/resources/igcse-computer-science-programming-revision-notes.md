---
title: "IGCSE Computer Science: Programming — Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Programming"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 8
syllabusTopics:
  - qualification: "igcse"
    topic: "programming-0478"
description: "Revision notes on data types, selection, loops, string handling, operators, subroutines, library routines, arrays and files for Cambridge IGCSE CS 0478."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

Topic 8 Programming covers the building blocks of every program: variables and constants, data types, sequence, selection and iteration, string handling, operators, subroutines, library routines, arrays and file handling. In Cambridge IGCSE Computer Science (0478) it is examined on Paper 2, where you write and read Cambridge-style pseudocode; the syllabus says the logic matters more than the syntax of any one language.

Condensed for the final weeks. For the full explanations, use the
[Programming study guide](/resources/cambridge-igcse-computer-science-programming-study-guide/); then practise with the
[Programming practice questions](/resources/igcse-computer-science-programming-practice/).

## Syllabus coverage

Learning outcomes from the Cambridge IGCSE Computer Science 0478 syllabus for 2026, 2027 and 2028:

| Ref | Learning outcome (summarised) |
|---|---|
| 8.1.1 | Declare and use variables and constants |
| 8.1.2 | Basic data types: integer, real, char, string, Boolean |
| 8.1.3 | Input and output |
| 8.1.4 | Sequence; selection (IF, CASE); iteration (count-controlled, pre-condition, post-condition); totalling and counting; string handling; arithmetic, relational and logical operators |
| 8.1.5 | Nested statements (up to three levels) |
| 8.1.6 | Procedures, functions, parameters; local and global variables |
| 8.1.7 | Library routines: MOD, DIV, ROUND, RANDOM |
| 8.1.8 | Creating a maintainable program |
| 8.2 | 1D and 2D arrays, using variables as indexes, reading and writing with iteration |
| 8.3 | File handling: purpose, open, close, read and write |

## 8.1 Variables, constants and data types

```
DECLARE Score : INTEGER
CONSTANT Pi ← 3.142
```

A **variable** can change while the program runs; a **constant** cannot. Constants make code easier to read and update — change the value once and every use changes.

| Data type | Holds | Example |
|---|---|---|
| INTEGER | Whole numbers | 42 |
| REAL | Numbers with a fractional part | 3.75 |
| CHAR | A single character | 'Y' |
| STRING | A sequence of characters | "Lahore" |
| BOOLEAN | TRUE or FALSE | TRUE |

## Selection and iteration

| Construct | Pseudocode | Use when |
|---|---|---|
| IF | `IF ... THEN ... ELSE ... ENDIF` | One or two conditions |
| CASE | `CASE OF Choice ... OTHERWISE ... ENDCASE` | One variable compared with several values |
| Count-controlled | `FOR Count ← 1 TO 10 ... NEXT Count` | Number of repeats is known |
| Pre-condition | `WHILE Condition DO ... ENDWHILE` | Condition tested first; may run zero times |
| Post-condition | `REPEAT ... UNTIL Condition` | Condition tested last; always runs at least once |

```
CASE OF Grade
    'A' : OUTPUT "Excellent"
    'B' : OUTPUT "Good"
    OTHERWISE OUTPUT "Keep practising"
ENDCASE
```

## Operators

| Type | Operators |
|---|---|
| Arithmetic | `+  -  /  *  ^` (power), `MOD`, `DIV` |
| Relational | `=  <  <=  >  >=  <>` (not equal) |
| Logical | `AND  OR  NOT` |

## String handling

| Function | Returns | Example |
|---|---|---|
| `LENGTH(S)` | Number of characters | `LENGTH("Happy Days")` → 10 |
| `SUBSTRING(S, Start, Len)` | Part of the string | `SUBSTRING("Happy Days", 1, 5)` → "Happy" |
| `UCASE(S)` | Upper case | `UCASE("Happy")` → "HAPPY" |
| `LCASE(S)` | Lower case | `LCASE('W')` → 'w' |

The syllabus allows the first character to be position 0 or 1; in Cambridge pseudocode it is generally 1. State which you are using if it matters.

## Library routines

| Routine | Returns | Example |
|---|---|---|
| `DIV(A, B)` | Whole-number quotient | `DIV(10, 3)` → 3 |
| `MOD(A, B)` | Remainder | `MOD(10, 3)` → 1 |
| `ROUND(X, Places)` | X rounded to that many decimal places | `ROUND(7.468, 1)` → 7.5 |
| `RANDOM()` | Random number from 0 to 1 inclusive | `ROUND(RANDOM() * 6, 0)` → whole number 0 to 6 |

MOD is useful for testing even numbers (`MOD(N, 2) = 0`); DIV for converting units, such as minutes into whole hours.

## Procedures, functions and scope

- A **procedure** is a named block of code that performs a task; it is run with `CALL`.
- A **function** is a named block of code that **returns a value**, so it is used in an expression.
- A **parameter** is a value passed into the subroutine (up to three in the exam).
- A **local variable** exists only inside the subroutine where it is declared; a **global variable** can be used anywhere in the program.

```
FUNCTION Area(Length : REAL, Width : REAL) RETURNS REAL
    RETURN Length * Width
ENDFUNCTION

PROCEDURE Stars(Number : INTEGER)
    FOR Count ← 1 TO Number
        OUTPUT "*"
    NEXT Count
ENDPROCEDURE

CALL Stars(5)
Floor ← Area(4.5, 3.0)
```

## Maintainable programs

Use meaningful identifiers (for variables, constants, arrays, procedures and functions), comments (`//` in pseudocode) that explain what sections do, and procedures and functions so code is reused rather than repeated.

## 8.2 Arrays

```
DECLARE Temps : ARRAY[1:7] OF REAL
DECLARE Seats : ARRAY[1:10, 1:20] OF CHAR
```

A 2D array is read with nested loops — the outer loop for rows, the inner loop for columns:

```
FOR Row ← 1 TO 10
    FOR Col ← 1 TO 20
        Seats[Row, Col] ← 'E'
    NEXT Col
NEXT Row
```

## 8.3 File handling

Data stored in a file is kept after the program closes, so it can be used next time or by another program.

```
OPENFILE "Scores.txt" FOR WRITE
WRITEFILE "Scores.txt", PlayerName
CLOSEFILE "Scores.txt"

OPENFILE "Scores.txt" FOR READ
READFILE "Scores.txt", LineOfText
CLOSEFILE "Scores.txt"
```

Opening a file FOR WRITE creates a new file and any existing data in it is lost.

## Worked example: a procedure with a parameter and library routines

Write a procedure that takes a whole number of seconds and outputs it in minutes and seconds, such as 135 → 2 min 15 s.

```
PROCEDURE ShowTime(Total : INTEGER)
    DECLARE Mins : INTEGER
    DECLARE Secs : INTEGER
    Mins ← DIV(Total, 60)
    Secs ← MOD(Total, 60)
    OUTPUT Mins, " min ", Secs, " s"
ENDPROCEDURE

CALL ShowTime(135)
```

DIV(135, 60) = 2 and MOD(135, 60) = 15, so the output is "2 min 15 s". `Mins` and `Secs` are local variables: they exist only while the procedure runs. If the program needed the minutes value afterwards, a function returning `Mins` would be the better choice.

## Common mistakes / exam traps

- Using a FOR loop when the number of repeats is not known in advance.
- Confusing DIV (quotient) with MOD (remainder).
- Writing `=` for assignment; Cambridge pseudocode uses `←` for assignment and `=` for comparison.
- Choosing INTEGER for money or measurements that need decimals; choose REAL.
- Storing a phone number as INTEGER — it should be STRING (leading zeros, no arithmetic).
- Forgetting `RETURN` in a function, or calling a function with `CALL` as if it were a procedure.
- Opening a file FOR WRITE when you meant to keep its existing contents.
- Forgetting to close a file.

## Frequently asked questions

**What is the difference between a procedure and a function?**
Both are named subroutines. A function returns a single value to the point where it was called, so it is used in an expression; a procedure does not return a value and is run with CALL.

**When should I use a WHILE loop rather than a REPEAT loop?**
Use WHILE when the loop might not need to run at all, because its condition is tested first. REPEAT always runs at least once, which suits input validation.

**Can I write Paper 2 answers in Python?**
Only in the 15-mark scenario question, where 0478 accepts pseudocode, Python, Visual Basic or Java. Elsewhere on Paper 2, use pseudocode.

## Self-test

1. State the most suitable data type for a person's initial.
2. Give the value of `MOD(29, 4)` and `DIV(29, 4)`.
3. Which loop always runs at least once?
4. State one reason for using a global variable and one problem it can cause.
5. What does `SUBSTRING("Computer", 4, 3)` return?

**Answers:** 1. CHAR. 2. 1 and 7. 3. The post-condition (REPEAT ... UNTIL) loop. 4. It can be used by every subroutine without passing it as a parameter; any part of the program can change it, which makes errors harder to trace. 5. "put".
