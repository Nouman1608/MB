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
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: credited to harris-khan (accountable teacher, D-379)."
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-a-level-computer-science-programming-study-guide--01-pg-div-mod.webp" width="900" height="700" alt="Seventeen dots are shared into three full groups of five with two left over. So 17 DIV 5 is 3 and 17 MOD 5 is 2, and 5 x 3 + 2 gives back 17." loading="lazy">
  <figcaption>DIV counts whole groups; MOD is what is left over.</figcaption>
</figure>

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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-a-level-computer-science-programming-study-guide--02-pg-string-positions.webp" width="900" height="800" alt="The word COMPUTER is drawn as eight boxes numbered 1 to 8. MID(s, 4, 3) highlights positions 4 to 6 giving PUT; LEFT(s, 3) gives COM and RIGHT(s, 3) gives TER." loading="lazy">
  <figcaption>Positions start at 1, so MID(&quot;COMPUTER&quot;, 4, 3) returns &quot;PUT&quot;.</figcaption>
</figure>

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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-a-level-computer-science-programming-study-guide--03-pg-loops.webp" width="900" height="1060" alt="Three flowcharts with n starting at 5. WHILE n &lt; 3 tests first and runs the body 0 times. REPEAT UNTIL n &gt;= 3 runs the body once before testing. FOR i from 1 to 3 runs the body exactly 3 times." loading="lazy">
  <figcaption>WHILE tests first, REPEAT UNTIL runs at least once, FOR is used when the count is known.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-a-level-computer-science-programming-study-guide--06-pg-validate-loop.webp" width="900" height="880" alt="Inputs 72, 140, 45, 50 and -1 are traced: 72 is counted (PassCount 1); 140 is out of range so the program asks again; 45 is not counted; 50 is counted (PassCount 2); -1 ends the loop. The output is 2." loading="lazy">
  <figcaption>PassCount ends at 2 for the inputs 72, 140, 45, 50, -1.</figcaption>
</figure>

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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-a-level-computer-science-programming-study-guide--05-pg-byval-byref.webp" width="900" height="950" alt="Two rows with an illustrative variable X = 5 and a module that adds 1 to its parameter P. With BYVAL, P is a copy and X stays 5. With BYREF, P refers to X so X becomes 6." loading="lazy">
  <figcaption>BYVAL passes a copy; BYREF lets the module change the caller’s variable.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-a-level-computer-science-programming-study-guide--04-pg-digitsum-trace.webp" width="900" height="915" alt="Four loops each take the last digit with MOD 10 and add it to Total (7, 9, 17, 21) while DIV 10 shrinks Number to 482, 48, 4 and 0. The function returns 21 and ShowResult outputs it." loading="lazy">
  <figcaption>Each loop peels off the last digit and adds it to Total, giving 21.</figcaption>
</figure>

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

**What is the difference between a parameter and an argument?**
The parameter is the name in the module's header; the argument is the value supplied when the module is called. In `CALL Greet("Ola")`, "Ola" is the argument and the parameter might be `Name`.

**When must I use BYREF?**
When the procedure needs to change the caller's variable, for example swapping two values or returning more than one result from a procedure.

**What makes pseudocode efficient?**
No unnecessary repetition (use loops and modules), loops that stop as soon as the result is known, and calculations moved out of loops when they do not change inside them.

## Official syllabus

Cambridge International AS & A Level Computer Science 9618, syllabus for 2026 and syllabus for 2027, 2028 and 2029, Topic 11 (11.1 to 11.3), with syntax from the Cambridge 9618 Pseudocode Guide for Teachers. Examiner points are summarised on our [9618 past papers page](/resources/cambridge-a-level-computer-science-9618-past-papers/).
