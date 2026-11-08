---
title: "OxfordAQA IGCSE Computer Science: Data Structures, Subroutines and Translators — Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed recall notes on arrays, records, files, strings, random numbers, subroutines, validation and translators for OxfordAQA IGCSE 9210, 3.2.6-3.2.13."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

Condensed for the final weeks. These notes cover sections 3.2.6 to
3.2.13 of Topic 2 Programming in OxfordAQA International GCSE Computer
Science (9210). For the full explanation, use the [Data Structures,
Subroutines and Translators study
guide](/resources/igcse-oxfordaqa-computer-science-programming-structures-subroutines-translators/);
for 3.2.1–3.2.5 use the [Programming Fundamentals revision
notes](/resources/oxfordaqa-igcse-computer-science-programming-revision-notes/).

## Key definitions

| Term | Definition |
|---|---|
| **Data structure** | An organised way of storing related data under one name |
| **Array** | Fixed number of items of the **same** data type, reached by index (1-D or 2-D only for 9210) |
| **Record** | A group of **fields** of possibly **different** data types describing one item |
| **Subroutine** | A named, out-of-line block of code that runs when called by name |
| **Parameter** | A value passed into a subroutine (OxfordAQA uses this word for both sides of the call) |
| **Return value** | Data passed back out of a function to the calling routine |
| **Local variable** | A variable that exists only inside its subroutine |
| **Validation** | Checking input is reasonable before it is used |
| **Authentication** | Checking the identity of a user, e.g. username and password |
| **Machine code** | Binary instructions a processor executes; specific to a processor family |
| **Assembly language** | Mnemonics with a 1:1 correspondence to machine code |

## Data structures (3.2.6)

- 1-D array = a list (marks of 30 students). 2-D array = a table (`marks[student][test]`).
- Record = one item with mixed fields (title: string, pages: integer, price: real).
- Array of records = a table of items, e.g. every book in a library.
- Python lists are an accepted alternative to arrays.

## Input/output and files (3.2.7)

- Keyboard input arrives as text: **convert before calculating**.
- Text file pattern: **open → read or write → close**.
- Read inside a loop that stops at the end of the file.

## String handling (3.2.8)

Know all of: **length, position, substring, concatenation, character → code, code → character**, and the four conversions **string → integer, string → real, integer → string, real → string**.

Worked example: build a username from the first three letters of "Mensah" and the number 7.

```
part <- substring of "Mensah" (first 3 characters)    -> "Men"
user <- part + INT_TO_STRING(7)                       -> "Men7"
```

The integer must be converted to a string before concatenation.

## Random numbers (3.2.9)

Use them (dice rolls, random quiz questions, guessing games). How pseudo-random numbers are produced is **not** required.

## Subroutines and structured programming (3.2.10–3.2.11)

**Advantages of subroutines** — any three, each with its reason:

1. Written once, called many times → shorter programs.
2. Tested separately → errors found and fixed more easily.
3. Fixed in one place → every call benefits.
4. Shared between programmers → faster team development.
5. Named clearly → main program easier to read.

**Structured approach** = modularised program + clear, documented interfaces (parameters, return values) + local variables. Advantages: easier to understand, test, maintain and reuse.

## Robust and secure programming (3.2.12)

Specification examples of validation: **minimum length**, **not empty**, **number in range**.

| Test data | Rating must be 1–10 |
|---|---|
| Normal | 4, 7 |
| Boundary | 1, 10 (and 0, 11 just outside) |
| Erroneous | -3, 50, "ten" |

Authentication at this level compares plain-text username and password; no encryption needed.

## Languages and translators (3.2.13)

| | Low-level | High-level |
|---|---|---|
| Examples | Machine code, assembly language | Python, C#, Visual Basic |
| Portable? | No — tied to one processor family | Yes, once translated for each platform |
| Ease of use | Hard to write and debug | Closer to English, easier to write and debug |
| Strength | Direct hardware control, fast, compact code | Faster development |

| Translator | Input | Key fact |
|---|---|---|
| **Compiler** | High-level | Whole program → machine code before running; standalone executable |
| **Interpreter** | High-level | One statement at a time; does **not** generate machine code directly |
| **Assembler** | Assembly | Each line → one machine code instruction |

When to use: interpreter while developing and testing; compiler to distribute a finished program; assembler for assembly-language code such as embedded systems.

## Exam traps

- Calling a mixed-type structure an array — it is a record.
- Concatenating a number with a string without converting it.
- Boundary data that only lists the valid end values.
- Saying an interpreter produces an executable file.
- Listing advantages of subroutines without the reason that earns the mark.

## Self-test

1. State one difference between an array and a record.
2. Name the four string conversion operations in 9210.
3. Give two advantages of using subroutines.
4. Give normal, boundary and erroneous test data for an age from 11 to 18.
5. Explain why each line of assembly language becomes one machine code instruction.

**Answers:** 1. An array holds items of one data type; a record holds fields that can be different types. 2. String to integer, string to real, integer to string, real to string. 3. Code can be reused by calling it many times; each subroutine can be tested separately. 4. Normal 14; boundary 11 and 18 (and 10, 19 just outside); erroneous 25 or "twelve". 5. Assembly language has a 1:1 correspondence with machine code: each mnemonic stands for one processor instruction.

## Frequently asked questions

**What sections of OxfordAQA 9210 do these programming revision notes cover?**
They cover sections 3.2.6 to 3.2.13 of Topic 2 Programming in OxfordAQA International GCSE Computer Science 9210: data structures, input/output and files, string handling, random numbers, subroutines, robust and secure programming, and languages and translators.

**What validation checks are given as examples in the 9210 specification?**
The specification's examples of validation are minimum length, not empty, and number in range. Validation checks that input is reasonable before it is used.

**Do you need to know how random numbers are generated for 9210?**
No. You need to be able to use random numbers, for example for dice rolls or guessing games, but how pseudo-random numbers are produced is not required.

**When should you use a compiler, an interpreter or an assembler?**
An interpreter suits developing and testing, a compiler suits distributing a finished program, and an assembler is used to translate assembly language, with each line becoming one machine code instruction.

**Why must a number be converted before concatenating it with a string?**
Concatenation joins strings, so an integer must be converted to a string first. Concatenating a number with a string without converting it is a common exam trap.

## Official syllabus

OxfordAQA International GCSE Computer Science (9210) specification,
version 3.3 —
[oxfordaqa.com](https://www.oxfordaqa.com/wp-content/uploads/2025/02/oxfordaqa-gcse-computer-science-specification.pdf).
