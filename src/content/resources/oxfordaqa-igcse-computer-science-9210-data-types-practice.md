---
title: "OxfordAQA IGCSE Computer Science (9210): Data types -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 2 – Programming"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9210"]
syllabusSeries: "For teaching from September 2017, exams from May/June 2019"
order: 2.01
syllabusTopics:
  - qualification: "igcse"
    topic: "programming-9210"
    subtopic: "data-types-9210"
description: "Original practice questions with mark-scheme answers on OxfordAQA IGCSE Computer Science 9210 data types: choosing and justifying integer, real and string."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-17
reviewNote: "2026-11-17: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-17
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Data types study guide](/resources/oxfordaqa-igcse-computer-science-9210-data-types/) | [Data types revision notes](/resources/oxfordaqa-igcse-computer-science-9210-data-types-revision-notes/)

These questions cover section 3.2.1 Data types of the OxfordAQA International GCSE Computer Science (9210)
specification. Use the specification's general type names (integer, real, Boolean, character, string) in every
answer.

---

## Section A

**1.** State what is meant by the term **data type**. **[1]**

**2.** State the most appropriate data type for each of the following:
**(a)** the number of pages in a book **(b)** the mass of a parcel in kilograms **(c)** whether a parcel has been
delivered **(d)** a single-letter size code such as `'M'`. **[4]**

**3.** Some programming languages call one of the specification's data types `float`. State the name the exam
uses for this type. **[1]**

**4.** A variable `code` is given the value `'X'` and a variable `word` is given the value `"X"`. State the data
type of each variable. **[2]**

**5.** A program contains these statements:

```
first ← "20"
second ← "25"
result ← first + second
```

**(a)** State the value of `result`. **[1]**
**(b)** Explain why the value is not 45. **[2]**

## Section B

**6.** A school stores the following details about each student:

| Field | Example |
|---|---|
| StudentID | `007123` |
| FamilyName | `Mensah` |
| YearGroup | `9` |
| AverageScore | `71.4` |
| HasLunchPass | `True` |

For each field, state the most appropriate data type and justify your choice. **[10]**

**7.** A programmer stores mobile telephone numbers as integers. Explain **two** problems this could cause. **[4]**

**8.** A cinema program records the number of seats sold for a showing and the total takings in dollars.

**(a)** State the most appropriate data type for each value. **[2]**
**(b)** Explain why using the same data type for both values would be a poor choice. **[2]**

**9.** A quiz program stores each player's answer to a question with four options, A, B, C or D. One programmer
suggests a character variable; another suggests a string variable. Discuss which is more appropriate. **[3]**

**10.** Explain why a programming language needs to know the data type of a variable. **[3]**

**11.** A weather station records the following each hour: the temperature, the wind direction as one of the
sixteen compass points (for example `"NNE"`), whether it is raining, and the number of the hour (0 to 23).
State the most appropriate data type for each item. **[4]**

**12.** A program calculates the mean of a list of whole-number test marks.

**(a)** State the data type of the variable that stores the sum of the marks, and give a reason. **[2]**
**(b)** State the data type of the variable that stores the mean, and give a reason. **[2]**

---

## Answers

**1.** The kind of value a variable or constant holds, which determines the values allowed and the operations that
can be carried out on it [1].

**2.** (a) Integer [1] (b) Real [1] (c) Boolean [1] (d) Character [1].

**3.** Real [1].

**4.** `code` is a character [1]; `word` is a string [1]. (Accept that some languages store both the same way,
but the double quotation marks show a string and single quotation marks a character in the specification's
pseudocode.)

**5.** **(a)** `"2025"` [1].
**(b)** Both values are strings [1], so `+` joins (concatenates) them instead of adding them as numbers [1].

**6.** One mark for each type and one for each justification:
- StudentID: **string** [1]; it has leading zeros that would be lost, and no arithmetic is done on an ID [1].
- FamilyName: **string** [1]; it is text made of several characters [1].
- YearGroup: **integer** [1]; it is always a whole number and may be compared or used in calculations [1].
- AverageScore: **real** [1]; an average can have a fractional part [1].
- HasLunchPass: **Boolean** [1]; there are only two possible states, true or false [1].

**7.** Any two problems, each with an explanation, for example:
- The leading zero would be lost [1], so the stored number would be wrong and could not be dialled [1].
- Phone numbers can contain spaces or a `+` sign [1], which an integer cannot hold [1].

Also accept, with the same two-mark split: arithmetic on a phone number is meaningless, so an integer allows
operations that should never happen; long numbers might exceed the range an integer can store in some languages,
causing an error or a wrong value.

**8.** **(a)** Seats sold: integer [1]; takings: real [1].
**(b)** If both were integers, the cents in the takings would be lost [1]; if both were real, impossible values
such as 12.5 seats could be stored [1].

**9.** A character is more appropriate [1] because each answer is always exactly one symbol from a small set [1].
A string would work but allows answers of any length, such as `"AB"`, so it is less precise [1].

**10.** The data type determines how the value is stored in memory (how its binary pattern is interpreted) [1],
which operations can be performed on it, for example arithmetic on numbers but concatenation on strings [1], and
it allows invalid values or operations to be detected [1].

**11.** Temperature: real [1]; wind direction: string [1]; raining: Boolean [1]; hour: integer [1].

**12.** **(a)** Integer [1], because the sum of whole numbers is always a whole number [1].
**(b)** Real [1], because dividing the sum by the number of marks may give a fractional part [1].

---

## Where marks are usually lost

- Writing "float" or "double" instead of **real**.
- Justifying integer with "because it is a number": say why it is **whole** and why it is **calculated with**.
- Treating IDs, phone numbers and postcodes as integers.
- Forgetting that `+` between two strings joins them.
- Giving two possible types when the question asks for the most appropriate one.
