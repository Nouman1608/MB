---
title: "Cambridge A Level Computer Science (9618): Structured Programming -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for 9618 section 11.3: procedure and function syntax, BYVAL and BYREF, headers, interfaces and arguments, efficient pseudocode, traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Condensed notes for 11.3 Structured Programming, AS content in Cambridge International AS & A Level Computer Science 9618, examined in Paper 2. You must define and use procedures and functions, say where each is appropriate in an algorithm, pass parameters by value and by reference, use the terms header, interface, parameter, argument and return value, and write efficient pseudocode.

Related: [Structured Programming study guide](/resources/cambridge-a-level-computer-science-9618-structured-programming/) · [Structured Programming practice questions](/resources/cambridge-a-level-computer-science-9618-structured-programming-practice/) · [Programming revision notes (all of Topic 11)](/resources/cambridge-a-level-computer-science-programming-revision-notes/)

## Syntax

```
PROCEDURE <name>(<parameter> : <type>, ...)
   <statements>
ENDPROCEDURE
CALL <name>(<argument>, ...)

FUNCTION <name>(<parameter> : <type>, ...) RETURNS <type>
   <statements>
   RETURN <value>
ENDFUNCTION
<variable> ← <name>(<argument>, ...)
```

- Put BYVAL or BYREF before a parameter to state how it is passed; unstated means by value.
- A module with no parameters still has empty brackets: PROCEDURE ShowMenu().

## Procedure or function?

| | Procedure | Function |
|---|---|---|
| Purpose | Carries out a task | Calculates and returns one value |
| How it is used | CALL statement on its own line | Inside an expression; the return value replaces the call |
| Ends with | ENDPROCEDURE | RETURN, then ENDFUNCTION |
| Header has | Name and parameters | Name, parameters and RETURNS type |
| Sends results back by | BYREF parameters, output or file writes | Its return value |
| Example uses | Display a menu, write a record, swap two values | Calculate a discount, validate an input, find a maximum |

**Appropriate places in an algorithm**: a procedure for a self-contained task or one repeated in several places; a function wherever one value is needed in an expression.

## BYVAL and BYREF

- **BYVAL**: a copy is passed; the caller's variable cannot be changed by the module. Use for inputs to the module.
- **BYREF**: a reference (address) is passed; the parameter and the argument are the same location, so changes are seen by the caller. Use when a procedure must return one or more results. The argument must be a variable.
- Swap needs BYREF on both parameters, or nothing changes for the caller.

## Terminology

| Term | Meaning |
|---|---|
| Procedure | A named module that performs a task and is run with CALL |
| Function | A named module that returns a single value and is used in an expression |
| Header | The first line of a module: name, parameters and, for a function, the return type |
| Interface | The name, parameters (number, order, types, passing method) and return type needed to use a module |
| Parameter | A variable in the header that receives data when the module is called |
| Argument | The actual value or variable supplied in a call |
| Return value | The value a function sends back to replace its call |
| Local variable | A variable declared inside a module, existing only while it runs |
| Global variable | A variable declared in the main program, available to every module |

## Efficient pseudocode checklist

- Exit a search loop as soon as the item is found.
- Move calculations that do not change out of the loop.
- Use ELSE so known-FALSE conditions are not re-tested.
- Replace repeated blocks with one module and different arguments.
- Use local variables and parameters rather than globals.

## Exam traps

- CALL used with a function, or a procedure used in an assignment.
- A RETURNS type that does not match the value returned, such as RETURNS INTEGER for an average.
- A function with a path that reaches ENDFUNCTION without a RETURN.
- Arguments in the wrong order: the first argument goes to the first parameter.
- A literal passed BYREF.
- Saying "parameter" when the question asks for the argument in a call.
- Claiming efficiency without stating which work is avoided.

## Self-test

1. State the difference between a parameter and an argument.
2. In CALL Display(Name, 3), identify the arguments.
3. What does "the return value replaces the call" mean?
4. Write the header for a function Area that takes Length and Width as REAL values and returns a REAL.
5. When must a parameter be passed by reference?
6. X ← 5. PROCEDURE P(BYVAL N : INTEGER) sets N ← N + 1. After CALL P(X), what is X?
7. Repeat Question 6 with BYREF instead of BYVAL.
8. Why can CALL Swap(2, 9) not work if Swap uses BYREF parameters?
9. Give two items that make up a module's interface.
10. Give one reason to use a local variable rather than a global one.
11. A search uses FOR I ← 1 TO 1000 and the item is at position 4. How could it be made more efficient?
12. Should a module that outputs a formatted receipt be a procedure or a function? Why?

**Answers:** 1. A parameter is the variable named in the module header; an argument is the actual value or variable passed in the call. 2. Name and 3. 3. When the function finishes, its returned value is used in the expression at the point where the function was called. 4. FUNCTION Area(Length : REAL, Width : REAL) RETURNS REAL 5. When the module must change the caller's variable, for example to send back more than one result from a procedure. 6. 5, because only a copy was changed. 7. 6, because N refers to X itself. 8. A reference needs a variable's storage location, and a literal has none to change. 9. Any two: the module's name, its parameters, their data types, their order, how each is passed, the return type. 10. It cannot be changed accidentally by other modules, and the same name can be reused elsewhere. 11. Use a conditional loop that stops once the item is found, so only 4 comparisons are made. 12. A procedure, because it carries out a task (output) rather than returning one value for use in an expression.
