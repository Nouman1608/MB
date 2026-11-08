---
title: "Cambridge A Level Computer Science (9618): Programming -- Study Guide"
resourceType: "study-guides"
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
description: "AS study guide to variables, constants, selection, iteration, string handling, procedures, functions and parameters for Cambridge Computer Science 9618."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

Programming is the skill that Paper 2 tests most directly. You must write correct code in a language you have studied (Cambridge allows Python, Java or Visual Basic for the practical paper) and read and write Cambridge pseudocode in the theory papers. This guide uses Cambridge pseudocode and covers the basic building blocks, the three constructs and the structured approach using procedures and functions.

## Where this fits in the specification

Topic 11 is AS Level. It depends on the thinking skills in the algorithm design topic and on the data structures topic, and it leads straight into the further programming topics at A Level, such as recursion, object-oriented programming and file handling beyond text files. Everything here can be tested both by short-answer questions and by writing a program under timed conditions.

## Programming basics

A **variable** is a named storage location whose value can change while a program runs. A **constant** is a named value that is set once and cannot change, such as a rate of tax, and using one means a value is changed in one place only. Use **meaningful identifiers** such as TotalMarks, not x1, so the code explains itself.

Declare each variable with its type and assign with the arrow; a constant is declared with an equals sign.

```
CONSTANT VatRate = 0.20
DECLARE Price, Total : REAL
DECLARE Quantity : INTEGER
INPUT Quantity
INPUT Price
Total ← Quantity * Price * (1 + VatRate)
OUTPUT "Total: ", Total
```

The arithmetic operators are +, -, *, / and the integer operators DIV (whole-number quotient) and MOD (remainder). For example, 17 DIV 5 is 3 and 17 MOD 5 is 2. Comparison operators are =, <>, <, >, <= and >=, and Boolean operators are AND, OR and NOT. The **ampersand** & joins strings together.

### String handling

Strings are processed with library functions: LENGTH(s), LEFT(s, n), RIGHT(s, n), MID(s, start, n), UCASE(s), LCASE(s), and conversion functions such as INT, STR and CHAR/ASC for characters and codes. Positions in Cambridge pseudocode strings start at 1. So MID("COMPUTER", 4, 3) returns "PUT". A common use is checking the first letter of a name or building a user ID from parts of several fields.

## Constructs

Every program is built from three constructs: **sequence**, **selection** and **iteration**.

### Selection

Selection chooses between paths. IF ... THEN ... ELSE ... ENDIF handles one or two conditions, and nested IFs handle more. CASE OF is cleaner when one variable is compared with several fixed values.

```
CASE OF Grade
  'A' : OUTPUT "Excellent"
  'B' : OUTPUT "Good"
  OTHERWISE : OUTPUT "See your teacher"
ENDCASE
```

### Iteration

Choose the loop that fits what you know.

- **FOR ... TO ... NEXT** (count-controlled): use when the number of repetitions is known in advance.
- **WHILE ... ENDWHILE** (pre-condition): the condition is tested first, so the body might never run.
- **REPEAT ... UNTIL** (post-condition): the body always runs at least once, and the loop ends when the condition becomes true.

A very common error is mixing the exit conditions. WHILE continues while the condition is true; REPEAT UNTIL stops when it is true. For input validation, REPEAT UNTIL is natural because you must ask at least once.

```
REPEAT
  INPUT Age
UNTIL Age >= 0 AND Age <= 120
```

## Structured programming

Structured programming means breaking a program into named, self-contained modules. A **procedure** carries out a task and does not return a value; a **function** returns exactly one value and is called inside an expression. Each has an **interface**, which is its name and parameters.

```
FUNCTION DigitSum(Number : INTEGER) RETURNS INTEGER
  DECLARE Total : INTEGER
  Total ← 0
  WHILE Number > 0
    Total ← Total + Number MOD 10
    Number ← Number DIV 10
  ENDWHILE
  RETURN Total
ENDFUNCTION

PROCEDURE ShowResult(Value : INTEGER)
  OUTPUT "The digit sum is ", Value
ENDPROCEDURE

CALL ShowResult(DigitSum(4827))
```

**Parameters** pass data into a module. **BYVAL** passes a copy, so changes inside the module do not affect the original; **BYREF** passes a reference, so changes do alter the caller's variable. A variable declared inside a module is **local** and exists only while the module runs; a **global** variable can be used anywhere but makes programs harder to debug, so prefer local variables and parameters. Advantages of modules include reuse, easier testing of one part at a time, and shared work across a team.

## Worked example 1: tracing DigitSum

Trace DigitSum(4827).

| Step | Number | Number MOD 10 | Total | Number after DIV 10 |
|---|---|---|---|---|
| start | 4827 | | 0 | |
| loop 1 | 4827 | 7 | 7 | 482 |
| loop 2 | 482 | 2 | 9 | 48 |
| loop 3 | 48 | 8 | 17 | 4 |
| loop 4 | 4 | 4 | 21 | 0 |

The condition Number > 0 is now false and the function returns 21. A second call, DigitSum(90514), gives 4 + 1 + 5 + 0 + 9 = 19. Notice that a zero digit still works, because 0 is added and the loop continues while the remaining number is positive. What happens for an input of 0? The loop body never runs, so the function returns 0, which is the right answer.

## Worked example 2: choosing a loop and validating

A program must ask for a mark from 0 to 100, repeat until a valid mark is entered, then keep reading valid marks until -1, and finally print the count of marks of 50 or more.

```
PassCount ← 0
REPEAT
  INPUT Mark
UNTIL (Mark >= 0 AND Mark <= 100) OR Mark = -1
WHILE Mark <> -1
  IF Mark >= 50 THEN
    PassCount ← PassCount + 1
  ENDIF
  REPEAT
    INPUT Mark
  UNTIL (Mark >= 0 AND Mark <= 100) OR Mark = -1
ENDWHILE
OUTPUT PassCount
```

Take the input 72, 140, 45, 50, -1. The first 72 is valid and so is read into the WHILE; it is 50 or more, so PassCount becomes 1. The next input 140 fails the check, so the inner REPEAT asks again and reads 45. That is below 50, so the count stays at 1. Then 50 is read and counted, giving 2, and -1 ends the loop. The output is 2. The sample shows why REPEAT suits validation and WHILE suits a rogue-value loop.

## Common mistakes

- Using = for assignment, or ← for comparison. Pseudocode uses ← to assign and = to compare.
- Off-by-one errors with FOR loops, for instance FOR i ← 1 TO 9 when ten items are required.
- Forgetting that a function must RETURN a value on every path.
- Declaring everything as global, or relying on a procedure changing a variable without BYREF.
- Mixing up DIV and MOD, or using / and expecting a whole number.
- Writing a WHILE loop that never changes the variable in its condition.

## Exam technique

For program-writing questions, plan inputs, processing and outputs before coding. Use the identifier names given in the question exactly. Add short comments only if they help; marks are for working code. When tracing, write a trace table with one column per variable and one row per change, and show output separately. If asked to **state the purpose** of a code segment, describe the overall effect in one line rather than reading it statement by statement.

## Check your understanding

1. Give one reason for using a constant instead of typing a value several times. *If the value changes, it needs updating in only one place, and the code is clearer.*
2. Evaluate 23 DIV 4 and 23 MOD 4. *5 and 3.*
3. What does MID("PROGRAMMING", 4, 4) return? *"GRAM".*
4. State one difference between WHILE and REPEAT UNTIL. *WHILE tests before the body and may not run at all; REPEAT UNTIL tests after and runs at least once.*
5. State the difference between a procedure and a function. *A function returns a value and is used in an expression; a procedure does not return a value and is called with CALL.*
6. Explain BYVAL and BYREF. *BYVAL passes a copy so the caller's variable is unchanged; BYREF passes a reference so changes affect the caller's variable.*
7. Give two benefits of local variables. *They avoid unwanted changes from other parts of the program, and a name can be reused without conflict.*
8. What is the output of DigitSum(306)? *3 + 0 + 6 = 9.*

## Frequently asked questions

**Which programming languages can be used for Cambridge 9618 Computer Science?**
According to this guide, Cambridge allows Python, Java or Visual Basic for the practical paper, while the theory papers use Cambridge pseudocode.

**What is the difference between BYVAL and BYREF in Cambridge pseudocode?**
BYVAL passes a copy, so changes inside the module do not affect the original variable. BYREF passes a reference, so changes alter the caller's variable.

**When should you use REPEAT UNTIL instead of WHILE?**
Use REPEAT UNTIL when the body must run at least once, such as input validation, because the condition is tested after the body. WHILE tests first, so its body might never run.

**Do string positions start at 0 or 1 in Cambridge pseudocode?**
String positions start at 1 in Cambridge pseudocode, so MID("COMPUTER", 4, 3) returns "PUT".
