---
title: "Cambridge A Level Computer Science (9618): Structured Programming"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 11: Programming"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 11.3
syllabusTopics:
  - qualification: "a-level"
    topic: "programming"
    subtopic: "structured-programming"
description: "Study guide to 9618 section 11.3: procedures and functions, parameters by value and by reference, headers, interfaces, arguments and efficient code."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 11.3 Structured Programming of Cambridge International AS & A Level Computer Science 9618 is about building programs from named modules. You must define and use procedures and functions, explain where in an algorithm each is appropriate, use parameters passed by value and by reference, use the correct terminology (header, interface, parameter, argument, return value) and "write efficient pseudocode". It is AS content, examined in Paper 2.

Related: [Structured Programming revision notes](/resources/cambridge-a-level-computer-science-9618-structured-programming-revision-notes/) · [Structured Programming practice questions](/resources/cambridge-a-level-computer-science-9618-structured-programming-practice/) · [Programming study guide (all of Topic 11)](/resources/cambridge-a-level-computer-science-programming-study-guide/)

## Procedures

A **procedure** is a named block of statements that performs a task. It is defined once and run by a CALL statement wherever the task is needed. It does not return a value through its name.

```
PROCEDURE PrintLine(Symbol : CHAR, Length : INTEGER)
   DECLARE Line : STRING
   DECLARE Count : INTEGER
   Line ← ""
   FOR Count ← 1 TO Length
      Line ← Line & Symbol
   NEXT Count
   OUTPUT Line
ENDPROCEDURE

CALL PrintLine('=', 20)
```

The notes and guidance point out that a procedure may have none, one or more parameters. A procedure with none, such as PROCEDURE ShowMenu(), still has brackets.

**Where a procedure is appropriate**: when a task is repeated at several points in an algorithm, when a section of an algorithm forms a self-contained task (displaying a menu, writing a record to a file, swapping two values), or when the task produces output or changes variables rather than producing one value.

## Functions

A **function** is a named block that **returns a single value**. It is called inside an expression, and, as the notes and guidance put it, "the return value replaces the call".

```
FUNCTION IsLeapYear(Year : INTEGER) RETURNS BOOLEAN
   RETURN (Year MOD 4 = 0 AND Year MOD 100 <> 0) OR Year MOD 400 = 0
ENDFUNCTION

IF IsLeapYear(2024) THEN
   Days ← 366
ENDIF
```

When IsLeapYear(2024) runs, it returns TRUE, and TRUE takes the place of the call in the IF condition. A function is therefore never used with CALL, and its result must be used: assigned, output, compared or passed on.

**Where a function is appropriate**: when a calculation or test produces exactly one value that is then used in an expression, such as working out a price, checking whether an input is valid, or finding the largest value in an array.

## The terminology

| Term | Meaning | In the IsLeapYear example |
|---|---|---|
| Header | The first line, giving the name, parameters and (for a function) the return type | FUNCTION IsLeapYear(Year : INTEGER) RETURNS BOOLEAN |
| Interface | What the rest of the program needs to know to use the module: its name, its parameters with their types and order, and its return type | IsLeapYear takes one INTEGER and returns a BOOLEAN |
| Parameter | A variable in the header that receives a value when the module is called | Year |
| Argument | The actual value or variable passed in the call | 2024 |
| Return value | The value a function sends back to the place where it was called | TRUE |

Parameters belong to the definition; arguments belong to the call. The arguments must match the parameters in number, order and type.

## Passing by value and by reference

- **By value (BYVAL)**: the module receives a copy of the argument. Changes to the parameter inside the module do not affect the caller's variable. If no method is stated, passing by value is assumed.
- **By reference (BYREF)**: the module receives the address of the caller's variable, so the parameter and the argument are the same storage location. Changes inside the module change the caller's variable. The argument must therefore be a variable, not a literal or an expression.

Use BYVAL when the module only needs to read a value; this protects the caller's data. Use BYREF when a procedure must send results back, for example when it updates two or more values, as a procedure has no return value.

## Writing efficient pseudocode

"Write efficient pseudocode" means solving the problem without unnecessary work. Typical improvements an examiner credits:

- Stopping a search as soon as the item is found, using a conditional loop and a flag, instead of a FOR loop that always runs to the end.
- Calculating a value once, before a loop, rather than on every pass if it does not change.
- Using ELSE or a nested IF so that conditions already known to be FALSE are not tested again.
- Replacing repeated blocks of near-identical code with one module called with different arguments.
- Using a function's return value directly instead of storing it in a variable that is used only once.

## Worked example 1: tracing BYVAL and BYREF

```
PROCEDURE Adjust(BYVAL A : INTEGER, BYREF B : INTEGER)
   A ← A * 2
   B ← B + A
ENDPROCEDURE

X ← 3
Y ← 10
CALL Adjust(X, Y)
OUTPUT X, " ", Y
```

| Step | A | B (same location as Y) | X | Y |
|---|---|---|---|---|
| Before call | | | 3 | 10 |
| Call: A gets a copy of X | 3 | 10 | 3 | 10 |
| A ← A * 2 | 6 | 10 | 3 | 10 |
| B ← B + A | 6 | 16 | 3 | 16 |
| After call | | | 3 | 16 |

The output is 3 16. A was a copy, so doubling it left X unchanged; B referred to Y, so adding to B changed Y. If both parameters were BYREF, X would become 6 and the output would be 6 16.

## Worked example 2: making a search efficient

The following code finds whether Target is in Names[1:500], but it always checks all 500 elements.

```
Found ← FALSE
FOR Index ← 1 TO 500
   IF Names[Index] = Target THEN
      Found ← TRUE
   ENDIF
NEXT Index
```

**Improved version as a function**

```
FUNCTION Contains(Target : STRING) RETURNS BOOLEAN
   DECLARE Index : INTEGER
   DECLARE Found : BOOLEAN
   Index ← 1
   Found ← FALSE
   WHILE Index <= 500 AND NOT Found
      IF Names[Index] = Target THEN
         Found ← TRUE
      ELSE
         Index ← Index + 1
      ENDIF
   ENDWHILE
   RETURN Found
ENDFUNCTION
```

*Why it scores:* the loop stops as soon as the target is found, so a name in position 3 needs 3 comparisons instead of 500; the variables are local, so the module cannot interfere with the rest of the program; and the result is a single BOOLEAN, so a function is the right kind of module. It can be used directly: IF Contains("Priya") THEN ...

## Common mistakes

- Using CALL with a function, or using a procedure inside an expression.
- A function without a RETURN on every path, or with a RETURNS type that does not match the value returned.
- Swapping the words parameter and argument.
- Passing a literal to a BYREF parameter, such as CALL Swap(4, 7).
- Assuming a BYVAL parameter sends a change back to the caller.
- Calling something "efficient" without saying what unnecessary work it avoids.

## Exam technique

**Write** a procedure or function: start with a correct header, including parameter types, BYREF where needed, and RETURNS for a function; end with ENDPROCEDURE or ENDFUNCTION. **Explain** where a procedure or function is appropriate: tie it to the algorithm, for example "a function, because the module calculates one value that is used in the assignment on line 6". **Identify** terminology in given code: quote the exact line or identifier. For efficiency questions, rewrite the code and state the work that is no longer done.
