---
title: "Cambridge O Level Computer Science (2210): Programming concepts -- Revision Notes"
seoTitle: "Cambridge O Level CS 2210 Programming Concepts Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge O Level Computer Science 2210 section 8.1: pseudocode syntax for variables, selection, loops, operators, string handling, procedures, functions and library routines, with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

Condensed notes for syllabus section 8.1, Programming concepts. For the full explanations and worked examples, use the [Programming concepts study guide](/resources/cambridge-o-level-computer-science-2210-programming-concepts/).

## Syllabus checklist

- Declare and use variables and constants.
- Basic data types: integer, real, char, string and Boolean.
- Input and output.
- Sequence, selection (IF and CASE), iteration (count-controlled, pre-condition, post-condition), totalling and counting, and string handling (length, substring, upper, lower).
- Arithmetic, relational and logical operators.
- Nested statements (no more than three levels are required).
- Procedures, functions and parameters (up to three), and local and global variables.
- Library routines: MOD, DIV, ROUND and RANDOM.
- Creating a maintainable program.

## Pseudocode cheat sheet

| Item | Form |
|---|---|
| Declare variable | `DECLARE Counter : INTEGER` |
| Declare constant | `CONSTANT HourlyRate ← 6.50` |
| Assignment | `Total ← Total + Mark` |
| Input / output | `INPUT Mark` and `OUTPUT "Total ", Total` |
| Comment | `// text` |
| Equality test | `=` |
| Not equal | `<>` |

## Data types

| Type | Holds | Literal |
|---|---|---|
| INTEGER | Whole number | 7 |
| REAL | Number with possible fraction | 7.0 |
| CHAR | One character | 'Y' |
| STRING | Text | "Yes" |
| BOOLEAN | TRUE or FALSE | TRUE |

A real literal always has digits on both sides of the point: 0.5, not .5.

## Operators

| Group | Operators |
|---|---|
| Arithmetic | `+` `-` `*` `/` `^` `MOD` `DIV` |
| Relational | `=` `<` `<=` `>` `>=` `<>` |
| Logical | `AND` `OR` `NOT` |

- `DIV(a, b)` is the whole-number quotient. `MOD(a, b)` is the remainder.
- Multiplication and division come before addition and subtraction.
- Use `MOD(Number, 2) = 0` to test for an even number.

## Selection

```
IF Mark >= 70
   THEN
      OUTPUT "Distinction"
   ELSE
      IF Mark >= 50
         THEN
            OUTPUT "Pass"
         ELSE
            OUTPUT "Fail"
      ENDIF
ENDIF
```

```
CASE OF Choice
   'A' : OUTPUT "Add"
   'D' : OUTPUT "Delete"
   OTHERWISE OUTPUT "Invalid"
ENDCASE
```

## Iteration

| Loop | Form | Key fact |
|---|---|---|
| FOR | `FOR i ← 1 TO 10` ... `NEXT i` | Known number of repeats; STEP is optional |
| WHILE | `WHILE <condition> DO` ... `ENDWHILE` | Tests first; may run zero times |
| REPEAT | `REPEAT` ... `UNTIL <condition>` | Tests last; runs at least once; stops when condition is TRUE |

### Totalling and counting pattern

```
Total ← 0
Count ← 0
FOR Index ← 1 TO 10
   INPUT Number
   Total ← Total + Number
   IF Number > 50
      THEN
         Count ← Count + 1
   ENDIF
NEXT Index
```

Always set Total and Count to 0 before the loop.

## String handling

| Routine | Result for "Marlbridge" |
|---|---|
| `LENGTH("Marlbridge")` | 10 |
| `SUBSTRING("Marlbridge", 1, 4)` | "Marl" |
| `UCASE("Marlbridge")` | "MARLBRIDGE" |
| `LCASE("Marlbridge")` | "marlbridge" |

## Procedures and functions

```
PROCEDURE Greet(Name : STRING)
   OUTPUT "Hello ", Name
ENDPROCEDURE

FUNCTION Double(Number : INTEGER) RETURNS INTEGER
   RETURN Number * 2
ENDFUNCTION

CALL Greet("Sam")
OUTPUT Double(8)
```

| | Procedure | Function |
|---|---|---|
| Returns a value? | No | Yes, one value, with RETURN |
| How it is used | `CALL Name(...)` | Inside an expression |
| Parameters | Up to three | Up to three |

- **Parameter:** a value passed in when it is called.
- **Local variable:** declared inside, usable only there.
- **Global variable:** declared in the main program, usable everywhere.

## Library routines

| Routine | Use |
|---|---|
| `MOD`, `DIV` | Remainder and whole-number quotient |
| `ROUND(x, places)` | Rounds to a number of decimal places |
| `RANDOM()` | Random number between 0 and 1 inclusive |

`ROUND(RANDOM() * 6, 0)` gives a whole number from 0 to 6.

## Maintainable programs

- Meaningful identifiers for variables, constants, arrays, procedures and functions.
- Comments on code that is not obvious.
- Procedures and functions to split the program into small parts.
- Constants for fixed values.
- Consistent indentation.

## Trace-table method

1. List every variable and output as a column.
2. Go through the code one statement at a time.
3. Write a new row each time a value changes.
4. Check the loop condition each time.

## Answer templates

**Difference between WHILE and REPEAT (2 marks):** WHILE tests the condition before the loop body so it may not run at all; REPEAT tests after the body so it always runs at least once.

**Difference between a procedure and a function (2 marks):** a function returns a value and is used in an expression; a procedure does not return a value and is called with CALL.

**Why use constants (2 marks):** the value is named, so the program is easier to read; it is changed in one place only.

**Why use meaningful identifiers and comments (2 marks):** makes the code easier to read and understand; easier for another programmer to maintain.

## Exam traps

- **`=` instead of `←` for assignment.**
- **Missing initialisation.** A total that does not start at 0 gives a wrong answer.
- **Wrong loop test.** REPEAT ends when the condition is TRUE.
- **Using CALL on a function.**
- **Off-by-one in FOR loops.** `FOR i ← 1 TO 5` runs five times.
- **No ENDIF, NEXT, ENDWHILE or ENDPROCEDURE.** Close every structure.
- **Programming language syntax.** Write pseudocode unless the 15-mark question lets you choose.

## Self-test

1. State the difference between a variable and a constant.
2. Which data type holds TRUE or FALSE?
3. What is the value of `MOD(20, 6)`?
4. What is the value of `DIV(20, 6)`?
5. How many times does `FOR i ← 3 TO 7` run its loop body?
6. Which loop is guaranteed to run at least once?
7. Write the pseudocode condition for a number that is between 10 and 20 inclusive.
8. What does `LENGTH("pseudo")` return?
9. What does `SUBSTRING("pseudocode", 1, 6)` return?
10. How does a function differ from a procedure?
11. What is a local variable?
12. Give two ways of making a program maintainable.

**Answers**

1. A variable's value can change while the program runs; a constant's value is fixed.
2. BOOLEAN.
3. 2.
4. 3.
5. Five times (3, 4, 5, 6, 7).
6. REPEAT ... UNTIL.
7. `Number >= 10 AND Number <= 20`
8. 6.
9. "pseudo".
10. A function returns a value and is used in an expression; a procedure does not return a value.
11. A variable declared inside a procedure or function that can only be used there.
12. Any two: meaningful identifiers; comments; procedures and functions; constants; consistent indentation.
