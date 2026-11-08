---
title: "Cambridge A Level Computer Science (9618): Programming -- Revision Notes"
seoTitle: "Cambridge 9618 Programming Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 11: Programming"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 11
syllabusTopics:
  - qualification: "a-level"
    topic: "programming"
  - qualification: "a-level"
    topic: "programming"
    subtopic: "programming-basics"
  - qualification: "a-level"
    topic: "programming"
    subtopic: "constructs"
  - qualification: "a-level"
    topic: "programming"
    subtopic: "structured-programming"
description: "Revision notes on constants, operators, built-in functions, IF and CASE, the three loop types, procedures, functions and parameters for Cambridge 9618."
author: "marlbridge-academic-team"
publishedDate: 2026-11-08
featured: false
---

Topic 11 Programming covers writing Cambridge pseudocode: declaring constants and variables, using operators and built-in functions, choosing between IF and CASE, choosing the right loop, and structuring a program into procedures and functions with parameters passed by value or by reference. In Cambridge International AS & A Level Computer Science 9618 it is examined in Paper 2, which is marked against the 9618 Pseudocode Guide and the function Insert given in the exam.

Related: [Programming study guide](/resources/cambridge-a-level-computer-science-programming-study-guide/) · [Programming practice questions](/resources/cambridge-a-level-computer-science-programming-practice/) · [Computer Science course hub](/boards/cambridge/a-level/computer-science/)

## Syllabus coverage

| Section | Candidates should be able to |
|---|---|
| 11.1 | Implement and write pseudocode from a design given as a flowchart or structured English |
| 11.1 | Write pseudocode for declaring and initialising constants, declaring variables, assignment, and expressions with arithmetic or logical operators, keyboard input and console output |
| 11.1 | Use built-in functions and library routines (those not in the pseudocode guide, and all string functions, will be given) |
| 11.2 | Use pseudocode for IF with ELSE and nested IF; CASE; count-controlled, post-condition and pre-condition loops |
| 11.2 | Justify why one loop structure suits a problem better than the others |
| 11.3 | Define and use a procedure and a function; explain where each is appropriate |
| 11.3 | Use parameters, passed by value or by reference |
| 11.3 | Use the terminology: procedure/function header, interface, parameter, argument, return value |
| 11.3 | Write efficient pseudocode |

## Declarations and assignment

```
CONSTANT VatRate = 0.2
DECLARE Quantity : INTEGER
DECLARE Price, Total : REAL
DECLARE Name : STRING
Quantity ← 3
Total ← Quantity * Price * (1 + VatRate)
```

- A **constant**'s value is fixed when it is declared and cannot be changed while the program runs. Using one makes code easier to read and to update (change it in one place). Only a literal value may be used.
- Assignment uses `←`. Input with `INPUT Name`; output with `OUTPUT "Hello ", Name`.

## Operators

| Type | Operators | Notes |
|---|---|---|
| Arithmetic | `+ - * /` | `/` always gives a REAL result |
| Integer | `DIV`, `MOD` | 17 DIV 5 = 3; 17 MOD 5 = 2 |
| Relational | `= <> < > <= >=` | Result is BOOLEAN |
| Logical | `AND OR NOT` | Use brackets to show the order |
| String | `&` | Concatenation: "Ali" & " " & "Khan" |

## Built-in functions (examples from the pseudocode guide)

| Function | Returns | Example |
|---|---|---|
| `LENGTH(s)` | Number of characters | LENGTH("Happy Days") = 10 |
| `MID(s, x, y)` | y characters starting at position x | MID("ABCDEFGH", 2, 3) = "BCD" |
| `RIGHT(s, x)` | Rightmost x characters | RIGHT("ABCDEFGH", 3) = "FGH" |
| `UCASE(c)` / `LCASE(c)` | Upper / lower case of a character | UCASE('h') = 'H' |
| `INT(x)` | Integer part of a real | INT(27.5415) = 27 |
| `RAND(x)` | Random REAL from 0 up to (not including) x | RAND(87) might give 35.43 |

RAND takes **one** parameter; June 2025 examiners saw it given two. A random whole number from 1 to 6 is `INT(RAND(6)) + 1`.

## Selection

```
IF Mark >= 70 THEN
   Grade ← 'A'
ELSE
   IF Mark >= 50 THEN
      Grade ← 'B'
   ELSE
      Grade ← 'U'
   ENDIF
ENDIF

CASE OF Choice
   1 : CALL AddItem()
   2 : CALL RemoveItem()
   3 TO 5 : OUTPUT "Not available yet"
   OTHERWISE : OUTPUT "Invalid choice"
ENDCASE
```

Use **CASE** when one variable is compared with several fixed values or ranges; cases are tested in order and only the first match runs. Use **IF** for conditions on different variables or complex Boolean expressions.

## Which loop should you use?

| Loop | Pseudocode | Condition tested | Use when |
|---|---|---|---|
| Count-controlled | `FOR i ← 1 TO n` ... `NEXT i` | Number of repetitions fixed by the bounds | The number of repetitions is known before the loop starts |
| Post-condition | `REPEAT` ... `UNTIL condition` | After the body, so the body runs at least once | The body must run at least once, e.g. input validation |
| Pre-condition | `WHILE condition` ... `ENDWHILE` | Before the body, so it may run zero times | The loop may not need to run at all, e.g. reading a file that may be empty |

A REPEAT loop stops when its condition becomes TRUE; a WHILE loop stops when its condition becomes FALSE.

## Procedures and functions

| | Procedure | Function |
|---|---|---|
| Returns a value? | No (may change BYREF parameters) | Yes, exactly one, with RETURN |
| Called by | `CALL ProcName(args)` as a statement | Use in an expression, e.g. `Total ← Total + Area(L, W)` |
| Use when | A task is carried out, such as outputting a menu | A single value is calculated |

```
PROCEDURE SwapValues(BYREF A : INTEGER, B : INTEGER)
   DECLARE Temp : INTEGER
   Temp ← A
   A ← B
   B ← Temp
ENDPROCEDURE

FUNCTION Area(Length : REAL, Width : REAL) RETURNS REAL
   RETURN Length * Width
ENDFUNCTION
```

| Term | Meaning |
|---|---|
| Header | The first line, giving the identifier, parameters with their types, and (for a function) the return type |
| Interface | The information needed to use a module: its name, the parameters with their data types and order, and the return type |
| Parameter | A variable in the header that receives a value when the module is called |
| Argument | The actual value or variable passed in the call |
| Return value | The value a function sends back to replace the call |
| By value (BYVAL) | A copy of the argument is passed; changes inside the module do not affect the caller (the default) |
| By reference (BYREF) | The address of the argument is passed; changes inside the module change the caller's variable |

Parameters should not be passed by reference to a function.

## Worked example: choosing a loop and writing efficient code

*Input a PIN until it has exactly 4 characters, then output a greeting.*

```
DECLARE Pin : STRING
REPEAT
   OUTPUT "Enter a 4-digit PIN"
   INPUT Pin
UNTIL LENGTH(Pin) = 4
OUTPUT "PIN accepted"
```

REPEAT suits this because the PIN must be input at least once and the number of attempts is not known. Efficiency points: the length is checked once per input, and there is no separate input before the loop and repeated inside it.

## Common mistakes and exam traps

- OUTPUT where a function must RETURN its value (in every series June 2024 to June 2025).
- Using `+` to join strings instead of `&`.
- Reserved words or built-in function names used as identifiers.
- INPUT of a value that is already passed in as a parameter (June 2024 to June 2025).
- Treating a CASE structure as if every matching case runs; only the first does.
- Declaring an average as INTEGER (June 2025). `/` gives a REAL.
- Using CALL with a function; CALL is only for procedures.

## Frequently asked questions

**What is the difference between a parameter and an argument?** The parameter is the name in the module's header; the argument is the value supplied when the module is called. In `CALL Greet("Ola")`, "Ola" is the argument and the parameter might be `Name`.

**When must I use BYREF?** When the procedure needs to change the caller's variable, for example swapping two values or returning more than one result from a procedure.

**What makes pseudocode efficient?** No unnecessary repetition (use loops and modules), loops that stop as soon as the result is known, and calculations moved out of loops when they do not change inside them.

## Official syllabus

Cambridge International AS & A Level Computer Science 9618, syllabus for 2026 and syllabus for 2027, 2028 and 2029, Topic 11 (11.1 to 11.3), with syntax from the Cambridge 9618 Pseudocode Guide for Teachers. Examiner points are summarised on our [9618 past papers page](/resources/cambridge-a-level-computer-science-9618-past-papers/).
