---
title: "Cambridge O Level Computer Science (2210): Programming concepts"
seoTitle: "Cambridge O Level CS 2210 Programming Concepts Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["o-levels"]
topic: "Topic 8 – Programming"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 8.1
syllabusTopics:
  - qualification: "o-level"
    topic: "programming-2210"
  - qualification: "o-level"
    topic: "programming-2210"
    subtopic: "programming-concepts-2210"
description: "Study guide to Cambridge O Level Computer Science 2210 section 8.1: variables, data types, selection, iteration, operators, procedures and functions, library routines and maintainable code, in Cambridge pseudocode."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

Section 8.1 of Cambridge O Level Computer Science 2210 is the largest part of the programming topic. It covers eight learning statements: declaring and using **variables and constants**; **data types**; **input and output**; **sequence, selection and iteration** (with totalling, counting, string handling and operators); **nested statements**; **procedures, functions and parameters**; **library routines**; and writing **maintainable programs**. The syllabus says that where a solution involves coding, candidates must write it in **pseudocode** (the one exception is the 15-mark scenario question, where a named language may also be used). This guide uses the Cambridge pseudocode conventions throughout.

## Part 1: pseudocode conventions

- **Keywords** are in upper case, for example IF, WHILE, PROCEDURE.
- **Identifiers** (names of variables, constants, procedures and functions) use mixed case with a capital letter starting each word, such as `NumberOfPlayers`. They contain only letters and digits, start with a capital letter and never use keywords.
- **Assignment** uses the arrow `←`, for example `Counter ← 0`.
- **Comments** start with two forward slashes `//`.
- **Indentation** shows structure. Lines inside a statement are indented, and the THEN and ELSE parts of an IF statement are indented only a little from the IF.

## Part 2: variables, constants and data types

A **variable** is a named storage location whose value can change while the program runs. A **constant** is a named value that is fixed when the program is written and does not change while it runs.

| Data type | Holds | Example literal |
|---|---|---|
| INTEGER | A whole number | 5, −3 |
| REAL | A number that may have a fractional part | 4.7, 0.0 |
| CHAR | A single character in single quotes | 'x' |
| STRING | Zero or more characters in double quotes | "Hello" |
| BOOLEAN | TRUE or FALSE | TRUE |

Variables are declared with `DECLARE <identifier> : <data type>`. Constants are declared with `CONSTANT <identifier> ← <value>`, and only a literal may be used as the value.

```
CONSTANT HourlyRate ← 6.50
DECLARE Hours : INTEGER
DECLARE Pay : REAL
INPUT Hours
Pay ← Hours * HourlyRate
OUTPUT "Pay is ", Pay
```

If the user enters 8, `Pay` becomes 8 × 6.50 = 52.0, and the program outputs `Pay is 52.0`. Using a constant for the rate means the value is changed in one place if the rate rises.

## Part 3: input, output and sequence

`INPUT` reads a value into a variable. `OUTPUT` displays one or more values, separated by commas. **Sequence** means that statements run one after another in the order they are written. The Pay program above is a sequence: declare, input, calculate, output.

## Part 4: operators

| Type | Operators | Notes |
|---|---|---|
| Arithmetic | `+` `-` `*` `/` `^` | `^` is "raised to the power of" |
| Integer division | `DIV` and `MOD` | `DIV(10, 3)` is 3. `MOD(10, 3)` is 1 |
| Relational | `=` `<` `<=` `>` `>=` `<>` | Always give a BOOLEAN result |
| Logical | `AND` `OR` `NOT` | Work on BOOLEAN values |

Multiplication and division are done before addition and subtraction. Use brackets to make the order clear.

**Worked example:** a duration of 135 minutes is shown in hours and minutes.

```
Hours ← DIV(135, 60)
Minutes ← MOD(135, 60)
OUTPUT Hours, " h ", Minutes, " min"
```

`DIV(135, 60)` is 2 and `MOD(135, 60)` is 15, so the output is `2 h 15 min`.

## Part 5: selection

### IF statements

```
IF Score >= 50
   THEN
      OUTPUT "Pass"
   ELSE
      OUTPUT "Fail"
ENDIF
```

The ELSE part is optional. IF statements can be nested (see Part 8).

### CASE statements

A CASE statement chooses one branch depending on the value of one variable. An OTHERWISE clause, if used, must be last.

```
INPUT Move
CASE OF Move
   'L' : OUTPUT "Turn left"
   'R' : OUTPUT "Turn right"
   OTHERWISE OUTPUT "Unknown move"
ENDCASE
```

## Part 6: iteration

| Loop | Pseudocode | When used | Test |
|---|---|---|---|
| Count-controlled | `FOR ... TO ... NEXT` | Number of repeats is known | None: counts from start to end |
| Pre-condition | `WHILE ... DO ... ENDWHILE` | Repeats while a condition is true; may run zero times | Before each repeat |
| Post-condition | `REPEAT ... UNTIL` | Runs at least once; stops when the condition is true | After each repeat |

```
FOR Count ← 1 TO 5
   OUTPUT Count * Count
NEXT Count
```

This outputs 1, 4, 9, 16, 25. A `STEP` can be added, for example `STEP 2`, and can be negative.

**Post-condition example (validation):**

```
REPEAT
   OUTPUT "Enter a number from 1 to 10"
   INPUT Number
UNTIL Number >= 1 AND Number <= 10
```

**Pre-condition example (digit sum):** add up the digits of 4729.

```
Total ← 0
WHILE Number > 0 DO
   Total ← Total + MOD(Number, 10)
   Number ← DIV(Number, 10)
ENDWHILE
OUTPUT Total
```

With Number starting at 4729, the loop runs four times:

| Pass | MOD(Number, 10) | Total | Number after |
|---|---|---|---|
| 1 | 9 | 9 | 472 |
| 2 | 2 | 11 | 47 |
| 3 | 7 | 18 | 4 |
| 4 | 4 | 22 | 0 |

The output is 22.

### Totalling and counting

**Totalling** adds each new value to a running total, which starts at zero. **Counting** adds 1 to a counter each time something happens.

```
Total ← 0
Passes ← 0
FOR Student ← 1 TO 5
   INPUT Mark
   Total ← Total + Mark
   IF Mark >= 50
      THEN
         Passes ← Passes + 1
   ENDIF
NEXT Student
OUTPUT "Total ", Total, " passes ", Passes, " average ", Total / 5
```

For the marks 62, 45, 50, 78 and 39 the total is 274, the number of passes is 3 and the average is 54.8.

## Part 7: string handling

| Routine | Returns | Example |
|---|---|---|
| `LENGTH(S)` | Number of characters | `LENGTH("Ada Lovelace")` is 12 |
| `SUBSTRING(S, Start, Len)` | Part of a string | `SUBSTRING("Ada Lovelace", 1, 3)` is "Ada" |
| `UCASE(S)` | Upper case version | `UCASE("Ada")` is "ADA" |
| `LCASE(S)` | Lower case version | `LCASE('W')` is 'w' |

The first character can be position zero or one. Cambridge pseudocode generally uses position 1. State your choice if the question does not.

## Part 8: nested statements

A selection or loop can be placed inside another. The syllabus does not require more than three levels.

```
FOR Row ← 1 TO 3
   FOR Column ← 1 TO 3
      OUTPUT Row * Column
   NEXT Column
NEXT Row
```

The inner loop runs completely for every pass of the outer loop. It outputs 1, 2, 3, 2, 4, 6, 3, 6, 9, which is nine outputs (3 × 3).

## Part 9: procedures, functions and parameters

A **procedure** is a named block of code that does a job. A **function** is similar but **returns a single value**. A **parameter** is a value passed into the procedure or function when it is called. They can have up to three parameters.

```
PROCEDURE ShowLine(Size : INTEGER)
   DECLARE Position : INTEGER
   FOR Position ← 1 TO Size
      OUTPUT '-'
   NEXT Position
ENDPROCEDURE

FUNCTION Average(Number1 : INTEGER, Number2 : INTEGER) RETURNS REAL
   RETURN (Number1 + Number2) / 2
ENDFUNCTION

CALL ShowLine(20)
OUTPUT Average(7, 12)
```

- A procedure is called with `CALL`. A function is **not** called with CALL; it is used inside an expression. `Average(7, 12)` returns 9.5.
- A **local variable** is declared inside a procedure or function and exists only there (`Position` above). A **global variable** is declared in the main program and can be used anywhere.
- Using procedures and functions avoids repeating code and makes it easier to test and change.

## Part 10: library routines

A **library routine** is a ready-made routine that is supplied with the language. The syllabus includes `MOD`, `DIV`, `ROUND` and `RANDOM`.

- `ROUND(7.456, 2)` returns 7.46.
- `RANDOM()` returns a random number between 0 and 1 inclusive. `ROUND(RANDOM() * 6, 0)` gives a whole number from 0 to 6.

## Part 11: maintainable programs

A **maintainable** program is one that another programmer can read, understand and change. Use:

- **meaningful identifiers** for variables, constants, arrays, procedures and functions (`TotalMark`, not `x`);
- **comments** (`//`) to explain what code does;
- **procedures and functions** to break the program into parts;
- **appropriate commenting of syntax**, such as what a loop or condition is for.

## Common mistakes

- **Using `=` for assignment.** Use `←`. The `=` sign tests equality.
- **Counting from the wrong value.** Initialise totals and counters to 0 before the loop.
- **Using CALL for a function.** Functions are part of an expression.
- **Mixing pre- and post-condition loops.** WHILE tests first. REPEAT tests last and runs at least once.
- **A condition that is reversed.** `UNTIL` stops when the condition is TRUE. `WHILE` continues while it is TRUE.
- **Poor identifiers.** Single letters and unclear names lose marks in a maintainability question.
- **Writing a language other than pseudocode** (outside the 15-mark question).

## Exam technique

- **Write complete, correct pseudocode** with keywords in capitals and consistent indentation.
- **Trace a program** with a table of the variable values after each pass.
- **For "explain" questions about loops**, say when the condition is tested.
- **Use meaningful names** and comments when asked for a maintainable program.

## Quick check

1. What is the value of `MOD(17, 5)`? *2.*
2. What is the value of `DIV(17, 5)`? *3.*
3. Which loop always runs at least once? *REPEAT ... UNTIL.*
4. What is the difference between a function and a procedure? *A function returns a value.*
5. Where can a local variable be used? *Only in the procedure or function where it is declared.*

## Continue with

Revise with the [Programming concepts revision notes](/resources/cambridge-o-level-computer-science-2210-programming-concepts-revision-notes/) and practise with the [Programming concepts practice questions](/resources/cambridge-o-level-computer-science-2210-programming-concepts-practice/).
