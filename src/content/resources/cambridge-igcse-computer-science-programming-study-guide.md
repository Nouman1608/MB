---
title: "Cambridge IGCSE Computer Science (0478): Programming -- Study Guide"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 8: Programming"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 8
syllabusTopics:
  - qualification: "igcse"
    topic: "programming-0478"
description: "Variables, data types, selection, iteration, string handling, procedures and functions, arrays and file handling in Cambridge pseudocode for IGCSE 0478."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

Programming is where the planning from the previous topic becomes working code. In Cambridge IGCSE Computer Science 0478 you are expected to read, write, complete and correct programs, and you can answer practical questions in the language you have learned (Python, Visual Basic and Java are the usual choices) or in Cambridge pseudocode. The examples here use pseudocode, because the written paper uses it, and the ideas carry straight across to any language.

## Where this fits in the specification

This topic follows [Algorithm design and problem-solving](/resources/cambridge-igcse-computer-science-algorithm-design-and-problem-solving-study-guide/), which covers flowcharts, trace tables and standard algorithms. Programming is its practical partner: the same totalling, counting, searching and sorting ideas are now written using real constructs. It also leads on to the databases topic, because file handling and data types come back when you store and query records.

## Variables, constants and data types

A **variable** is a named memory location whose value can change while the program runs. A **constant** is a named value that is fixed for the whole run, such as `VATRate ← 0.2`. Using constants makes a program easier to maintain, because the value is changed in one place only.

Every variable has a **data type**:

| Type | Stores | Example |
|---|---|---|
| INTEGER | Whole numbers | 42 |
| REAL | Numbers with a fractional part | 3.75 |
| CHAR | A single character | "A" |
| STRING | Zero or more characters | "Cambridge" |
| BOOLEAN | TRUE or FALSE | TRUE |

In Cambridge pseudocode you declare a variable with `DECLARE Total : INTEGER`, and assign with the arrow: `Total ← 0`. Choose the type that fits the data: a telephone number should be a STRING because you do not do arithmetic on it and it may start with 0.

## Input, output and the three constructs

`INPUT Name` reads a value into a variable and `OUTPUT "Hello ", Name` displays values. A program is built from three constructs.

**Sequence** runs statements in the order written.

**Selection** chooses a path:

```
IF Score >= 50 THEN
    OUTPUT "Pass"
ELSE
    OUTPUT "Fail"
ENDIF

CASE OF Grade
    "A" : OUTPUT "Excellent"
    "B" : OUTPUT "Good"
    OTHERWISE OUTPUT "Check with teacher"
ENDCASE
```

**Iteration** repeats statements. A count-controlled loop is `FOR Index ← 1 TO 10 ... NEXT Index`. A pre-condition loop is `WHILE Total < 100 DO ... ENDWHILE`, which may run zero times. A post-condition loop is `REPEAT ... UNTIL Answer = "yes"`, which always runs at least once. Statements can be **nested**: a selection inside a loop, or a loop inside a loop.

## Operators

- Arithmetic: `+`, `-`, `*`, `/`, and `^` for powers. `DIV` gives the whole-number part of a division and `MOD` gives the remainder. So 17 DIV 5 is 3 and 17 MOD 5 is 2. `MOD` is the standard way to test for even numbers (`Number MOD 2 = 0`).
- Comparison: `=`, `<>`, `<`, `>`, `<=`, `>=`.
- Logical: `AND`, `OR`, `NOT`, used to combine conditions, as in `IF Age >= 11 AND Age <= 16 THEN`.

Programs also use library routines supplied with the language, such as `ROUND(Value, 2)` to round to two decimal places and `RANDOM()` to generate a random number, so you do not have to write them yourself.

## String handling

Strings are processed with a small set of operations. You should know how to find the **length** of a string (`LENGTH(Word)`), take a **substring** (`SUBSTRING(Word, 1, 4)` returns four characters starting at position 1), and convert to **upper** or **lower** case (`UCASE`, `LCASE`). The first character of a string is at position 1 in Cambridge pseudocode, though in Python it is at index 0, so be careful if you move between them.

## Procedures, functions and scope

A **procedure** is a named block of code that performs a task and is called by name. A **function** is the same, but it **returns** a value that can be used in an expression. Both can take **parameters**, which are the values passed in.

```
FUNCTION AreaOfRectangle(Width : REAL, Length : REAL) RETURNS REAL
    RETURN Width * Length
ENDFUNCTION

PROCEDURE ShowGreeting(Name : STRING)
    OUTPUT "Welcome, ", Name
ENDPROCEDURE
```

A **local variable** exists only inside the procedure or function where it is declared. A **global variable** can be used anywhere in the program. Prefer local variables and parameters: they stop one part of the program from changing another by accident and they make the code easier to test. Using procedures and functions also reduces repeated code and makes a program easier to maintain.

## Arrays

An **array** stores several items of the same data type under one name, accessed by an index. A one-dimensional array: `DECLARE Marks : ARRAY[1:5] OF INTEGER`, with `Marks[3] ← 75`. A two-dimensional array is like a table: `DECLARE Grid : ARRAY[1:3, 1:4] OF INTEGER`, with `Grid[2, 4]` meaning row 2, column 4. Arrays are normally processed with a FOR loop whose counter is the index.

## File handling

Programs use text files to keep data after they stop. The pattern is always open, process, close:

```
OPENFILE "scores.txt" FOR WRITE
WRITEFILE "scores.txt", Name
CLOSEFILE "scores.txt"

OPENFILE "scores.txt" FOR READ
WHILE NOT EOF("scores.txt") DO
    READFILE "scores.txt", Line
    OUTPUT Line
ENDWHILE
CLOSEFILE "scores.txt"
```

Opening for write replaces the old contents. Forgetting to close a file can lose data.

## Writing maintainable programs

Examiners award marks for code that others can understand: meaningful identifier names, comments that explain why, indentation, constants rather than repeated numbers, and subroutines for repeated jobs. Validation inside a program is also part of this topic. A common structure is a REPEAT loop that keeps asking until the input is in range.

## Worked example 1: totalling, counting and finding the maximum

A teacher enters five test marks. The program must output the total, the average, how many pupils scored 50 or more, and the highest mark. The marks entered are 62, 48, 75, 50 and 39.

```
DECLARE Marks : ARRAY[1:5] OF INTEGER
Total ← 0
PassCount ← 0
Highest ← 0
FOR Index ← 1 TO 5
    INPUT Marks[Index]
    Total ← Total + Marks[Index]
    IF Marks[Index] >= 50 THEN
        PassCount ← PassCount + 1
    ENDIF
    IF Marks[Index] > Highest THEN
        Highest ← Marks[Index]
    ENDIF
NEXT Index
Average ← Total / 5
OUTPUT Total, Average, PassCount, Highest
```

Working: Total = 62 + 48 + 75 + 50 + 39 = 274. Average = 274 / 5 = 54.8. Marks of 50 or more are 62, 75 and 50, so PassCount = 3. The highest value is 75. Note that 50 counts as a pass because the condition is `>=`; using `>` would give 2. The output is 274, 54.8, 3, 75.

## Worked example 2: a validation loop with a function

A program asks for a whole number between 1 and 10 and then outputs its square, using a function.

```
FUNCTION Square(Number : INTEGER) RETURNS INTEGER
    RETURN Number * Number
ENDFUNCTION

REPEAT
    INPUT Value
UNTIL Value >= 1 AND Value <= 10
OUTPUT Square(Value)
```

If the user types 14, then 0, then 7, the loop rejects the first two values because the UNTIL condition is false, and accepts 7. The output is 49. If you wrote `UNTIL Value >= 1 OR Value <= 10`, every number would be accepted, because every number is either at least 1 or at most 10, so the validation would never reject anything.

## Common mistakes

- Using `=` where an assignment arrow is needed, or the reverse.
- Off-by-one errors in `FOR` loops and in substring positions.
- Using `AND` where `OR` is needed in a range check on the outside of a range, and the reverse.
- Treating `/` and `DIV` as the same operation: 17 / 5 is 3.4, while 17 DIV 5 is 3.
- Trying to use a procedure's result in an expression, or forgetting that a function must return a value.
- Reading a file without testing for the end of the file.
- Using a variable before giving it a value.

## Exam technique

Questions on this topic are often "write", "complete" or "identify the error". Read the data types and variable names the question gives you and reuse them exactly. If the question says "use a FOR loop", do not use a WHILE loop. Write neat, indented pseudocode: a correct but unreadable answer can lose marks. For "state the data type" answers, name the exact type (INTEGER, REAL, CHAR, STRING, BOOLEAN) rather than "number" or "text". Before you finish, trace your own program with one small example.

## Check your understanding

1. Give the result of 29 DIV 4 and 29 MOD 4. *7 and 1.*
2. Which data type should be used for a postcode and why? *STRING, because it contains letters and digits and is not used in calculations.*
3. What is the difference between a WHILE loop and a REPEAT...UNTIL loop? *WHILE tests before each iteration so may not run at all; REPEAT tests after each iteration so runs at least once.*
4. State the difference between a procedure and a function. *A function returns a value; a procedure does not.*
5. Why are local variables preferred to global variables? *They exist only where needed, so they cannot be changed accidentally elsewhere, which makes programs easier to test and maintain.*
6. What does SUBSTRING("Cambridge", 1, 4) return? *"Camb".*
7. Write a condition that is true when Age is from 11 to 16 inclusive. *Age >= 11 AND Age <= 16.*
8. Why must a file be closed after use? *To make sure all data is written and to free the file for other use.*

## Frequently asked questions

**What is the difference between DIV and MOD?**
DIV gives the whole-number part of a division and MOD gives the remainder, so 17 DIV 5 is 3 and 17 MOD 5 is 2. The / operator gives 3.4.

**Can I answer IGCSE Computer Science programming questions in Python?**
Practical questions can be answered in the language you have learned, with Python, Visual Basic and Java the usual choices, or in Cambridge pseudocode. The written paper itself uses pseudocode.

**Do strings start at position 0 or 1 in Cambridge pseudocode?**
The first character of a string is at position 1 in Cambridge pseudocode, while in Python it is at index 0, so take care when moving between them.

**What is a common mistake in range validation conditions?**
Using OR instead of AND, for example UNTIL Value >= 1 OR Value <= 10, which accepts every number. A range check inside the limits needs AND.
