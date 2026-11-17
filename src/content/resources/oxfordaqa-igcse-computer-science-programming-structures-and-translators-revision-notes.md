---
title: "OxfordAQA IGCSE Computer Science: Data Structures, Subroutines and Translators — Revision Notes"
seoTitle: "OxfordAQA IGCSE CS Data Structures and Subroutines Notes"
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
updatedDate: 2026-11-17
featured: false
reviewNote: "2026-11-08: credited to harris-khan (accountable teacher, D-379)."
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-oxfordaqa-computer-science-programming-structures-subroutines-translators--01-cs-arrays-1d-2d.webp" width="900" height="960" alt="A one-dimensional array of six illustrative marks is reached with one index, so marks[2] is 88; a loop adds every item to give total 447 and average 74.5. A two-dimensional array is a table reached with student and test indices, so marks[2][1] is 83. Only one- and two-dimensional arrays are needed." loading="lazy">
  <figcaption>An array item is reached by one index, or two for a table.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-oxfordaqa-computer-science-programming-structures-subroutines-translators--02-cs-records.webp" width="900" height="910" alt="A record groups fields of different types: here title (string), pages (integer), price (real) and onLoan (Boolean). An array of records stores a table in which each row is one record. Arrays hold one type, records mixed types." loading="lazy">
  <figcaption>A record holds mixed types; an array of records forms a table.</figcaption>
</figure>

## Input/output and files (3.2.7)

- Keyboard input arrives as text: **convert before calculating**.
- Text file pattern: **open → read or write → close**.
- Read inside a loop that stops at the end of the file.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-input-output-and-file-handling--04-reading-a-file.webp" width="900" height="700" alt="A flowchart: open the file for reading, test for the end of the file, and while it is not reached read a line, process it and test again; at the end, close the file. Beside it, pseudocode that totals and counts the numbers in scores.txt and outputs total / count, with a note to check count > 0 so an empty file does not divide by zero." loading="lazy">
  <figcaption>Open, loop until end of file reading one line at a time, then close.</figcaption>
</figure>

## String handling (3.2.8)

Know all of: **length, position, substring, concatenation, character → code, code → character**, and the four conversions **string → integer, string → real, integer → string, real → string**.

Worked example: build a username from the first three letters of "Mensah" and the number 7.

```
part <- substring of "Mensah" (first 3 characters)    -> "Men"
user <- part + INT_TO_STRING(7)                       -> "Men7"
```

The integer must be converted to a string before concatenation.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-oxfordaqa-computer-science-programming-structures-subroutines-translators--03-cs-string-handling.webp" width="900" height="880" alt="Six string operations shown on the word Lagos: length 5, the position of g (2 when counting from 0), the substring Lag, joining Ada and Lovelace, character codes 65 and 97, and string conversion. The lesson tells students to check whether positions count from 0 or 1." loading="lazy">
  <figcaption>Each string operation shown on a short example.</figcaption>
</figure>

## Random numbers (3.2.9)

Use them (dice rolls, random quiz questions, guessing games). How pseudo-random numbers are produced is **not** required.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/oxfordaqa-igcse-computer-science-9210-random-number-generation--01-inclusive-ranges.webp" width="900" height="762" alt="RANDOM_INT(1, 6) in pseudocode and random.randint(1, 6) in Python can each return 1, 2, 3, 4, 5 or 6, with both ends included. In C#, rnd.Next(1, 7) excludes the upper value 7, so its maximum is 6." loading="lazy">
  <figcaption>Pseudocode and Python include both ends; C# excludes the upper value.</figcaption>
</figure>

## Subroutines and structured programming (3.2.10–3.2.11)

**Advantages of subroutines** — any three, each with its reason:

1. Written once, called many times → shorter programs.
2. Tested separately → errors found and fixed more easily.
3. Fixed in one place → every call benefits.
4. Shared between programmers → faster team development.
5. Named clearly → main program easier to read.

**Structured approach** = modularised program + clear, documented interfaces (parameters, return values) + local variables. Advantages: easier to understand, test, maintain and reuse.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-oxfordaqa-computer-science-programming-structures-subroutines-translators--04-cs-subroutine-parameters-return.webp" width="900" height="680" alt="The main program calls area(4, 3): the parameters 4 and 3 go into the function, whose local variables exist only inside it, and the value 12 is returned to roomArea. A second call area(5, 2) gives 10, showing reuse." loading="lazy">
  <figcaption>Parameters pass data in and a return value passes data out.</figcaption>
</figure>

## Robust and secure programming (3.2.12)

Specification examples of validation: **minimum length**, **not empty**, **number in range**.

| Test data | Rating must be 1–10 |
|---|---|
| Normal | 4, 7 |
| Boundary | 1, 10 (and 0, 11 just outside) |
| Erroneous | -3, 50, "ten" |

Authentication at this level compares plain-text username and password; no encryption needed.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-oxfordaqa-computer-science-programming-structures-subroutines-translators--05-cs-rating-test-data.webp" width="900" height="820" alt="For a rating of 1 to 10, normal data 6 is accepted, boundary data 1 and 10 are accepted while 0 and 11 just outside are rejected, and erroneous data 25 and the word six are rejected." loading="lazy">
  <figcaption>Test data for a range check covers normal, boundary and erroneous values.</figcaption>
</figure>

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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-oxfordaqa-computer-science-programming-structures-subroutines-translators--06-cs-translators.webp" width="900" height="1120" alt="A compiler translates the whole high-level program into machine code before it runs. An interpreter translates and runs one statement at a time, makes no machine code file of its own and stops at the first error. An assembler converts each assembly line into one machine code instruction. The code shown is illustrative." loading="lazy">
  <figcaption>Three translators: compiler (whole program), interpreter (one line at a time) and assembler (1:1).</figcaption>
</figure>

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
version 3.4 —
[oxfordaqa.com](https://www.oxfordaqa.com/wp-content/uploads/2026/06/oxfordaqa-gcse-computer-science-specification.pdf).
