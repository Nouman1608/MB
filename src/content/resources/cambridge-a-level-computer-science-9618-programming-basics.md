---
title: "Cambridge A Level Computer Science (9618): Programming Basics"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 11: Programming"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 11.1
syllabusTopics:
  - qualification: "a-level"
    topic: "programming"
    subtopic: "programming-basics"
description: "Study guide to 9618 section 11.1: turning flowcharts and structured English into pseudocode, constants, variables, expressions and built-in functions."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379). Earlier review flag resolved per owner, 2026-11-18: Please check the constant declaration syntax and the built-in function names (TO_UPPER, TO_LOWER, UCASE, LCASE, IS_NUM) against the current 9618 pseudocode guide and insert."
publishedDate: 2026-11-18
featured: false
---

Section 11.1 Programming Basics of Cambridge International AS & A Level Computer Science 9618 is about writing correct individual statements: declaring constants and variables, assigning values, building expressions, taking input from the keyboard, sending output to the console and calling built-in functions. It also asks you to "implement and write pseudocode from a given design presented as either a program flowchart or structured English". It is AS content, examined in Paper 2.

Related: [Programming Basics revision notes](/resources/cambridge-a-level-computer-science-9618-programming-basics-revision-notes/) · [Programming Basics practice questions](/resources/cambridge-a-level-computer-science-9618-programming-basics-practice/) · [Programming study guide (all of Topic 11)](/resources/cambridge-a-level-computer-science-programming-study-guide/)

## What the specification asks

- Implement and write pseudocode from a design given as a program flowchart or structured English.
- Write pseudocode statements for the declaration and initialisation of constants, the declaration of variables, the assignment of values to variables, and expressions involving any of the arithmetic or logical operators, with input from the keyboard and output to the console.
- Use built-in functions and library routines. The notes and guidance add that any function not given in the pseudocode guide will be provided, and string manipulation functions will always be given.

Paper 2 candidates receive an insert listing the built-in functions and operators, so the skill being tested is **using** them correctly, not memorising their parameter lists.

## Declarations and assignment

Every variable is declared with an identifier and a data type before it is used. Assignment uses the arrow, read as "becomes".

```
DECLARE Count : INTEGER
DECLARE Average : REAL
DECLARE Surname : STRING
DECLARE Found : BOOLEAN
Count ← 0
Found ← FALSE
```

The declaration only reserves the variable; the assignments that follow give it a starting value, which is what **initialisation** means. Initialise any variable that is used before it is given a value by input or calculation, such as a running total or a counter. A **constant** is declared and given its value in a single statement and cannot be assigned again:

```
CONSTANT MaxSeats = 120
CONSTANT Greeting = "Welcome"
```

Use a constant for any value that is fixed while the program runs but might be revised by a programmer later, such as a seat limit or a rate. It is then changed in one place and the code reads as an explanation.

## Expressions

An **expression** is a combination of values, variables and operators that evaluates to a single value.

| Operator group | Operators | Result type |
|---|---|---|
| Arithmetic | + − * / | / always gives a REAL, even for 8 / 4 |
| Integer | DIV, MOD | INTEGER quotient and remainder |
| Relational | = <> < > <= >= | BOOLEAN |
| Logical | AND, OR, NOT | BOOLEAN |
| String | & | STRING (concatenation) |

Two habits prevent most errors. First, choose division deliberately: 7 / 2 is 3.5, while 7 DIV 2 is 3 and 7 MOD 2 is 1. Second, use brackets so that the order of evaluation is never in doubt. (A + B) / 2 is the mean of two numbers; A + B / 2 halves only B.

Logical expressions combine conditions. With Age = 17 and HasTicket = FALSE:

- (Age >= 16) AND HasTicket evaluates to TRUE AND FALSE, which is FALSE.
- (Age >= 16) OR HasTicket evaluates to TRUE.
- NOT HasTicket evaluates to TRUE.

## Input and output

INPUT reads a value from the keyboard into a variable. OUTPUT displays one or more values on the console, separated by commas.

```
OUTPUT "Enter the distance in km"
INPUT Distance
OUTPUT "That is ", Distance * 1000, " metres"
```

A prompt before an INPUT is good practice and is often expected when a question says "with a suitable message".

## Built-in functions and library routines

A **built-in function** is supplied with the language and returns a value; a **library routine** is a pre-written, pre-tested module that a program can call. Using them saves writing and testing code that already exists. Typical functions in the Cambridge pseudocode insert include:

| Function | Returns |
|---|---|
| LENGTH(s) | The number of characters in s |
| LEFT(s, n), RIGHT(s, n) | The leftmost or rightmost n characters |
| MID(s, x, n) | n characters starting at position x (positions start at 1) |
| TO_UPPER(x), TO_LOWER(x) | x (a string or a character) in upper or lower case; UCASE and LCASE do the same for a single character |
| NUM_TO_STR(x), STR_TO_NUM(s) | A number as a string, or a numeric string as a number |
| IS_NUM(s) | TRUE if s represents a valid number |
| ASC(c), CHR(n) | The character code of c, or the character with code n |
| INT(x) | The integer part of x |
| RAND(x) | A random REAL from 0 up to, but not including, x |

Functions can be **nested**: the result of one becomes the argument of another. INT(RAND(6)) + 1 gives a whole number from 1 to 6, because RAND(6) gives a value from 0 to just under 6, INT removes the fraction to leave 0 to 5, and adding 1 shifts the range.

Always check the insert in the exam: if a question uses a function you have not met, its description will be provided, and you should follow it exactly.

## Worked example 1: from structured English to pseudocode

A design is given in structured English:

1. Ask the user for a number of seconds.
2. Work out the whole hours, then the whole minutes left over, then the seconds left over.
3. Output the result in the form "2h 3m 5s".

**Model answer**

```
DECLARE TotalSeconds, Hours, Minutes, Seconds, Remainder : INTEGER
OUTPUT "Enter a number of seconds"
INPUT TotalSeconds
Hours ← TotalSeconds DIV 3600
Remainder ← TotalSeconds MOD 3600
Minutes ← Remainder DIV 60
Seconds ← Remainder MOD 60
OUTPUT Hours, "h ", Minutes, "m ", Seconds, "s"
```

**Check with 7385:** 7385 DIV 3600 = 2 and 7385 MOD 3600 = 185; 185 DIV 60 = 3 and 185 MOD 60 = 5. The output is 2h 3m 5s, and 2 × 3600 + 3 × 60 + 5 = 7385, so the working is consistent.

*Why it scores:* each line of the structured English maps to one or more statements in the same order; integer operators are used because the design asks for whole hours and minutes; the variables are declared with suitable types; and a prompt precedes the input.

## Worked example 2: from a flowchart using built-in functions

A flowchart has these boxes in sequence: an input box "INPUT FirstName, Surname, YearJoined"; a process box "UserID = first four letters of Surname in lower case, then first letter of FirstName in upper case, then last two digits of YearJoined"; and an output box "OUTPUT UserID".

**Model answer**

```
DECLARE FirstName, Surname, UserID : STRING
DECLARE YearJoined : INTEGER
INPUT FirstName
INPUT Surname
INPUT YearJoined
UserID ← TO_LOWER(LEFT(Surname, 4)) & TO_UPPER(LEFT(FirstName, 1)) & RIGHT(NUM_TO_STR(YearJoined), 2)
OUTPUT UserID
```

**Check with Ngozi, Okafor, 2009:** LEFT("Okafor", 4) is "Okaf", which becomes "okaf"; LEFT("Ngozi", 1) is "N"; NUM_TO_STR(2009) is "2009" and its rightmost two characters are "09". UserID is "okafN09".

*Why it scores:* YearJoined is converted to a string before RIGHT is applied, because RIGHT works on strings; the parts are joined with &; and each flowchart box becomes the matching INPUT, assignment or OUTPUT. Converting the year with arithmetic (YearJoined MOD 100) would give 9, not "09", and lose the leading zero, which is a point an examiner may test.

## Common mistakes

- Using = to assign or ← to compare.
- Assigning a new value to a constant, or declaring a constant with a type and no value.
- Using / where a whole-number answer is needed, then storing the REAL result in an INTEGER variable.
- Missing brackets, so that A + B / 2 is written for an average.
- Applying a string function to a number without converting it first with NUM_TO_STR.
- Starting string positions at 0. In Cambridge pseudocode the first character is position 1.
- Forgetting to initialise a running total before adding to it.

## Exam technique

**Write pseudocode** questions are marked line by line against the design, so keep the design's order and use the identifier names the question gives. **State** the value of an expression: show the evaluated result exactly, with quotation marks for a string result such as "okafN09". **Identify** the built-in function needed: name it and give its arguments. When a question gives a flowchart, work through it box by box, so that no input, process or output is left out, and declare every variable you use even if the flowchart does not show declarations.
