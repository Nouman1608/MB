---
title: "OxfordAQA IGCSE Computer Science: Data Structures, Subroutines and Translators (9210)"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Programming"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 1
syllabusTopics:
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "data-structures-9210"
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "input-output-and-file-handling-9210"
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "string-handling-operations-9210"
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "random-number-generation-9210"
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "subroutines-procedures-and-functions-9210"
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "structured-programming-9210"
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "robust-and-secure-programming-9210"
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "classification-of-programming-languages-and-translators-9210"
description: "Arrays and records, file handling, string operations, random numbers, subroutines, validation and authentication, and translators for OxfordAQA IGCSE 9210."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

This guide covers the second half of Topic 2 Programming in OxfordAQA
International GCSE Computer Science (9210): sections 3.2.6 to 3.2.13 of
the specification (version 3.3). These sections take the basic
constructs from 3.2.1 to 3.2.5 and use them to build real programs:
storing data in arrays and records, reading and writing files, working
with strings and random numbers, breaking a program into subroutines,
making it robust against bad input, and understanding how the code you
write is turned into machine code. Paper 1 tests most of this through
programming, and Paper 2 asks you to explain it in words.

If data types, iteration, selection and the operators are not yet
secure, start with the [Programming Fundamentals study
guide](/resources/igcse-oxfordaqa-computer-science-programming-fundamentals/)
first.

## Syllabus coverage

**OXFORDAQA INTERNATIONAL GCSE COMPUTER SCIENCE (9210) — TOPIC 2
PROGRAMMING, SECTIONS 3.2.6–3.2.13**

- 3.2.6 Data structures — the concept of a data structure; using arrays
(one- and two-dimensional only) and records in the design of solutions
to simple problems
- 3.2.7 Input/output and file handling — obtaining user input from a
keyboard, outputting to the display, and reading from and writing to a
text file
- 3.2.8 String handling operations — length, position, substring,
concatenation, converting a character to its character code and back,
and string conversion (string to integer, string to real, integer to
string, real to string)
- 3.2.9 Random number generation — using random numbers in programs
(how pseudo-random numbers are generated is not required)
- 3.2.10 Subroutines — the concept of a subroutine, its advantages,
passing data in with parameters (including more than one) and passing
data out with return values
- 3.2.11 Structured programming — describing the structured approach
(modularised programming, clear documented interfaces, local
variables, parameters and return values) and its advantages
- 3.2.12 Robust and secure programming — simple validation routines,
simple plain-text username and password authentication routines, and
selecting and justifying normal, boundary and erroneous test data
- 3.2.13 Classification of programming languages and translators —
low-level (machine code, assembly language) versus high-level
languages, and the three translators: interpreter, compiler and
assembler

## What is a data structure? (3.2.6)

A **data structure** is a way of organising related data under one name
so a program can store and process it together. The two structures
9210 requires are arrays and records.

An **array** holds a fixed number of items of the **same data type**,
each reached by an index. A one-dimensional array suits a list, such as
the marks of 30 students. A two-dimensional array suits a table, such
as the marks of 30 students in 5 tests, reached as `marks[student][test]`.
Only one- and two-dimensional arrays are required. In Python a list is
an accepted alternative to an array.

```
total <- 0
FOR i <- 0 TO 29
  total <- total + marks[i]
ENDFOR
average <- total / 30
```

A **record** groups several **fields** that can be of **different data
types** and that describe one thing. A record for a book might hold
`title` (string), `pages` (integer), `price` (real) and `onLoan`
(Boolean). The specification notes that C# structs, Visual Basic
structures and Python classes used in a non-object-oriented way can all
create records. An array of records is a common way to store a table of
data, such as every book in a library.

**Choosing between them:** use an array when every item is the same
kind of value; use a record when one item has several attributes of
different types.

## Input, output and text files (3.2.7)

Programs take **input from the keyboard** and **output to the display**.
Keyboard input usually arrives as a string, so it often needs converting
before arithmetic (see 3.2.8).

**Text files** let data survive after the program ends. The pattern is
always the same: open the file, read or write, then close it.
Reading usually happens line by line inside a loop that stops at the
end of the file; writing either creates a new file or adds lines to
an existing one. Closing the file makes sure the data is saved and
releases the file for other programs. Because the exact commands differ
between languages, exam answers are judged on the logic: open, loop
through the lines, process, close.

## String handling operations (3.2.8)

The specification lists the operations you must understand and use:

| Operation | What it does | Example |
|---|---|---|
| Length | Number of characters | length of "Lagos" is 5 |
| Position | Where a character first appears | position of "g" in "Lagos" |
| Substring | Part of a string from a start position | the first three characters of "Lagos" are "Lag" |
| Concatenation | Joins strings | "Ada" + "Lovelace" gives "AdaLovelace" |
| Character to code | Returns the character code | "A" gives 65 in ASCII |
| Code to character | Returns the character | 97 gives "a" |
| String conversion | string ↔ integer, string ↔ real | "42" becomes the integer 42 |

Check whether the language or exam pseudocode counts positions from 0 or
1, and state it in your answer if it matters. A classic use of these
operations is building a username from the first three letters of a
surname and a number converted to a string.

## Random number generation (3.2.9)

You must be able to **use** random numbers in a program — for example,
to simulate a dice roll (a random integer from 1 to 6), pick a random
question from an array, or generate a target for a guessing game. You
are not expected to explain how pseudo-random numbers are generated.

## Subroutines, parameters and return values (3.2.10)

A **subroutine** is a named, "out of line" block of code that runs
when its name is written in a program statement (when it is
**called**). A **procedure** carries out a task; a **function** returns
a value to the calling routine.

**Parameters** pass data into a subroutine, and a subroutine can take
more than one. A **return value** passes data back out. In examined
material OxfordAQA uses the word "parameter" for both the values in the
definition and the values in the call.

```
FUNCTION area(length, width)
  RETURN length * width
ENDFUNCTION

roomArea <- area(4, 3)
```

**Advantages of subroutines:** code written once can be called many
times, so programs are shorter; each subroutine can be tested on its
own; a bug is fixed in one place; work can be split between
programmers; and a well-named subroutine makes the main program easier
to read.

## The structured approach (3.2.11)

**Structured programming** means building a program from **modules**
(subroutines), each with a clear, well-documented **interface**: the
parameters it takes and the value it returns. Each module uses **local
variables** that exist only inside it, so modules do not interfere with
each other.

Its **advantages** follow from that: modules are easier to understand,
test and maintain individually; they can be reused in other programs;
teams can work on separate modules at the same time; and errors are
easier to locate because each module has one job.

## Validation, authentication and test data (3.2.12)

**Validation** checks that data entered by a user is sensible before it
is used. The specification's examples are checking a string has a
minimum length, checking a string is not empty, and checking a number
lies within a range (for example 1 to 10). A validation routine
usually repeats until the input is acceptable:

```
REPEAT
  OUTPUT "Enter a rating from 1 to 10"
  rating <- STRING_TO_INT(USERINPUT)
UNTIL rating >= 1 AND rating <= 10
```

**Authentication** checks who the user is. At this level it compares an
entered username and password with stored plain-text values; you do not
need to encrypt passwords.

```
valid <- FALSE
WHILE valid = FALSE
  user <- USERINPUT
  pass <- USERINPUT
  IF user = "amina" AND pass = "Kite2025" THEN
    valid <- TRUE
  ELSE
    OUTPUT "Try again"
  ENDIF
ENDWHILE
```

**Test data** must cover three kinds, and you must be able to justify
each choice:

| Type | Meaning | For a rating 1–10 |
|---|---|---|
| Normal (typical) | Valid data the program should accept | 6 |
| Boundary | Values at the edge of the valid range | 1 and 10 (and 0 and 11 just outside) |
| Erroneous | Data that should be rejected | 25, or "six" |

## Low-level and high-level languages (3.2.13)

Processors only execute **machine code**, which is expressed in binary
and is specific to a processor or family of processors (each has its
own instruction set). **Assembly language** uses short mnemonics and has
a **1:1 correspondence** with machine code: each line becomes one
machine code instruction. Machine code and assembly language are both
**low-level languages**.

Most programs are written in **high-level languages**, because they are
closer to English, easier to write, read and debug, and portable between
processor types. Low-level languages give direct control of the
hardware and can produce fast, compact code, which is why assembly
language is often used for embedded systems and for controlling
specific hardware components — but they are harder to write and tied to
one processor.

All high-level and assembly code must ultimately be translated into
machine code. There are three types of translator:

| Translator | Translates | How |
|---|---|---|
| Compiler | High-level language | Translates the whole program into machine code before it runs |
| Interpreter | High-level language | Translates and runs one statement at a time; does not generate machine code directly but calls its own machine code subroutines to carry out each statement |
| Assembler | Assembly language | Converts each assembly instruction into one machine code instruction |

Use an **interpreter** during development, because it stops at the
first error and lets you test parts of a program quickly. Use a
**compiler** to distribute a finished program, because it produces a
standalone executable that runs faster and does not reveal the source
code. Use an **assembler** when the program is written in assembly
language.

## Common mistakes

- Saying an array can hold mixed data types; that is a record.
- Forgetting to close a file, or to convert keyboard input before doing arithmetic.
- Describing validation as checking that data is "correct" rather than reasonable.
- Giving only valid values as boundary data; include the values just outside the range too.
- Writing that an interpreter "produces machine code"; the specification says it does not.

## Frequently asked questions

**Do I need three-dimensional arrays for 9210?**
No. The specification
states that only one- and two-dimensional arrays are required.

**Do I need to encrypt passwords in an authentication routine?**
No.
OxfordAQA states that plain-text usernames and passwords are used at
this level.

**What is the difference between a procedure and a function?**
Both are
subroutines. A function returns a value to the part of the program that
called it; a procedure carries out a task without returning a value.

**Why is assembly language still used?**
It gives direct control of
specific hardware and is often used for embedded systems, where speed
and small program size matter.

## Related resources

- [Programming Fundamentals study guide](/resources/igcse-oxfordaqa-computer-science-programming-fundamentals/) (3.2.1–3.2.5)
- [Data structures, subroutines and translators revision notes](/resources/oxfordaqa-igcse-computer-science-programming-structures-and-translators-revision-notes/)
- [Data structures, subroutines and translators practice questions](/resources/oxfordaqa-igcse-computer-science-programming-structures-and-translators-practice/)

## Official syllabus

OxfordAQA International GCSE Computer Science (9210) specification,
version 3.3, for exams from May/June 2019 —
[oxfordaqa.com](https://www.oxfordaqa.com/wp-content/uploads/2025/02/oxfordaqa-gcse-computer-science-specification.pdf).
