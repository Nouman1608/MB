---
title: "OxfordAQA IGCSE Computer Science: Data Structures, Subroutines and Translators — Practice Questions (9210)"
resourceType: "practice-questions"
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
description: "Original practice questions with worked answers on arrays, records, files, strings, subroutines, validation and translators for OxfordAQA IGCSE 9210."
author: "marlbridge-academic-team"
publishedDate: 2026-11-08
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Data structures, subroutines and translators revision notes](/resources/oxfordaqa-igcse-computer-science-programming-structures-and-translators-revision-notes/) · [study guide](/resources/igcse-oxfordaqa-computer-science-programming-structures-subroutines-translators/)

These questions cover sections 3.2.6 to 3.2.13 of Topic 2 Programming in
OxfordAQA International GCSE Computer Science (9210). For 3.2.1–3.2.5,
use the [Programming Fundamentals practice
questions](/resources/oxfordaqa-igcse-computer-science-programming-practice/).

---

## Section A

**1.** State **one** difference between an array and a record. **[2]**

**2.** A program stores the scores of 8 players in each of 3 rounds of a quiz. State the most suitable data structure and give its dimensions. **[2]**

**3.** State the result of each string operation:
**(a)** the length of "Nairobi" **(b)** "Data" concatenated with "Base" **(c)** converting the string "17" to an integer and adding 3. **[3]**

**4.** Name the **three** types of program translator. **[3]**

**5.** State what is meant by a **local variable**. **[1]**

## Section B

**6.** A library stores details about each book: its title, the number of pages, its price and whether it is currently on loan.

**(a)** Explain why a record is more suitable than a single array for storing the details of one book. **[2]**
**(b)** Suggest a suitable data type for each of the four fields. **[4]**

**7.** A text file `scores.txt` holds one integer score per line. Describe, step by step, how a program would find the total of all the scores in the file. **[4]**

**8.** A program asks a user to enter a password when creating an account. The password must not be empty and must be at least 8 characters long.

**(a)** Write pseudocode that keeps asking for a password until it meets both rules. **[4]**
**(b)** Give **one** item of erroneous test data and **one** item of boundary test data for this routine, and justify each. **[4]**

**9.** A game needs to simulate rolling two six-sided dice and output their total.

**(a)** Write pseudocode for a function `rollTwo` that returns the total of two dice. You may use `RANDOM_INT(1, 6)` to give a random integer from 1 to 6. **[3]**
**(b)** Explain how data is passed out of `rollTwo` to the part of the program that calls it. **[1]**

## Section C

**10.** A team is writing a large school timetable program. Explain **three** advantages of using a structured approach with subroutines. **[6]**

**11.** A company is writing software for a washing machine controller.

**(a)** Explain why the programmers might choose assembly language for part of this software. **[2]**
**(b)** State **two** disadvantages of writing in assembly language rather than a high-level language. **[2]**

**12.** A developer is testing a new program and will later sell it to customers. Explain which translator is most suitable during testing and which is most suitable for the version sold to customers. **[4]**

**13.** Explain the difference between how an assembler and an interpreter carry out their work. **[3]**

---

## Answers

**1.** An array holds items that must all be the **same data type** [1]; a record holds fields that can be **different data types** [1]. (Accept: array items reached by index, record fields reached by name.)

**2.** A **two-dimensional array** [1] with dimensions 8 × 3 (players by rounds), or 3 × 8 [1].

**3.** **(a)** 7 [1] **(b)** "DataBase" [1] **(c)** 20 [1].

**4.** Compiler [1], interpreter [1], assembler [1].

**5.** A variable that exists, and can be used, only inside the subroutine where it is declared [1].

**6.** **(a)** The details are of **different data types** (text, whole number, decimal, true/false) [1]; a record groups related fields of different types under one name, whereas an array can only hold items of one type [1].
**(b)** Title: **string** [1]; pages: **integer** [1]; price: **real** [1]; on loan: **Boolean** [1].

**7.** Set a total to 0 [1]; **open** the file for reading [1]; in a loop until the end of the file, read a line, **convert it to an integer** and add it to the total [1]; **close** the file and output the total [1].

**8.** **(a)** One possible answer:
```
REPEAT
  OUTPUT "Enter a password"
  password <- USERINPUT
UNTIL LEN(password) <> 0 AND LEN(password) >= 8
```
Repeat loop that re-asks until valid [1]; input inside the loop [1]; empty-string check [1]; minimum length 8 check combined correctly with AND [1]. (Because a length of at least 8 is never empty, the length check alone is also credited, provided the loop and input are correct.)
**(b)** Erroneous: an empty string, or "cat" (3 characters), which should be **rejected** because it breaks a rule [1 + 1]. Boundary: a password of exactly 8 characters, which should be **accepted** (or exactly 7, which should be rejected), because it tests the edge of the length rule [1 + 1].

**9.** **(a)**
```
FUNCTION rollTwo()
  die1 <- RANDOM_INT(1, 6)
  die2 <- RANDOM_INT(1, 6)
  RETURN die1 + die2
ENDFUNCTION
```
Two separate random values [1]; added together [1]; returned [1].
**(b)** Through a **return value**: the total is returned to the calling statement, for example `total <- rollTwo()` [1].

**10.** Any three, each with an explanation [2 each]:
- Each subroutine can be **tested separately**, so errors are found and fixed more easily before modules are combined.
- Work can be **divided between programmers**, so the timetable program is finished sooner.
- Code is **reused** by calling a subroutine many times (for example, a routine that checks a room is free), so the program is shorter and a fix is made in one place.
- Clear **interfaces** (parameters and return values) and local variables mean modules do not interfere with each other, so the program is easier to understand and maintain.

**11.** **(a)** Assembly language gives **direct control of the hardware** (motors, valves, sensors) [1] and produces fast, compact code suited to an **embedded system** with limited memory [1].
**(b)** Any two: harder to write, read and debug [1]; specific to one processor family, so not portable [1]; takes longer to develop [1].

**12.** During testing: an **interpreter** [1], because it runs statement by statement and stops at the first error, so problems are found and fixed quickly without recompiling [1]. For customers: a **compiler** [1], because it produces a standalone executable that runs faster, does not need the translator installed, and does not give away the source code [1].

**13.** An assembler **translates each assembly language instruction into one machine code instruction** directly [1], producing machine code that is then run [1]. An interpreter **does not generate machine code directly**; it carries out each high-level statement by calling machine code subroutines within its own code [1].

---

## Where marks are usually lost

- Naming a data type for a field without matching it to the data (price is real, not integer).
- Describing file handling without closing the file, or without converting each line to a number.
- Boundary test data given only as valid values; the edge on both sides earns credit.
- Advantages of subroutines listed without saying *why* each helps.
- Claiming an interpreter "creates an executable" or "translates the whole program first".
