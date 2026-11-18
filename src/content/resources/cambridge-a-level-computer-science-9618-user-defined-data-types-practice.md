---
title: "Cambridge A Level Computer Science (9618): User-defined Data Types -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 13: Data Representation"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "A"
order: 13.1
syllabusTopics:
  - qualification: "a-level"
    topic: "a-data-representation"
    subtopic: "user-defined-data-types"
description: "Original 9618 section 13.1 questions with answers on enumerated, pointer, set, record and class types, pointer traces, set operations and designing types."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
reviewNeeded: true
reviewNote: "Please check the pseudocode for set definitions, pointer dereferencing and class declarations against the current 9618 pseudocode guide."
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [User-defined Data Types study guide](/resources/cambridge-a-level-computer-science-9618-user-defined-data-types/) · [User-defined Data Types revision notes](/resources/cambridge-a-level-computer-science-9618-user-defined-data-types-revision-notes/)

---

## Section A

**1.** Explain why user-defined data types are necessary. **[2]**

**2.** State whether each type is composite or non-composite.

**(a)** Enumerated **[1]**

**(b)** Record **[1]**

**(c)** Pointer **[1]**

**(d)** Set **[1]**

**3.** Write a pseudocode statement to define an enumerated type TDay that holds the seven days of the week, starting with Monday. **[2]**

**4.** Ptr is a pointer variable. State the difference between Ptr and Ptr^. **[2]**

## Section B

**5.** A library stores data about each of its books: the ISBN (13 digits, which may begin with 0), the title, the year of publication, and the status, which is one of OnLoan, Available, Reserved or Lost.

**(a)** Write pseudocode to define a type TStatus for the status. **[2]**

**(b)** Write pseudocode to define a record type TBook for a book. **[4]**

**(c)** Write a declaration for an array Books of 5000 books, and a statement that sets the status of the 10th book to Lost. **[2]**

**6.** A and B are INTEGER variables, and P and Q are variables of type TIntPointer, defined as TYPE TIntPointer = ^INTEGER.

```
A ← 7
B ← 3
P ← ^A
Q ← ^B
P^ ← P^ + Q^
Q ← P
Q^ ← Q^ * 2
OUTPUT A, " ", B
```

State the values of A and B after each of the last three assignments, and the output. **[4]**

**7.** Two sets of integers are S1 = {2, 4, 6, 8} and S2 = {3, 6, 9}.

**(a)** State the union of S1 and S2, the intersection of S1 and S2, and the difference S1 − S2. **[3]**

**(b)** A chat program checks each word of a message against a list of banned words. Explain why a set is a suitable type for the banned words. **[2]**

**8.** Explain how a class differs from a record, and describe a situation in which a class would be the better choice. **[3]**

**9.** A weather station records, for each reading, the date, the time, the temperature in °C to one decimal place, and the wind direction, which is one of N, NE, E, SE, S, SW, W or NW. Design suitable user-defined types for a reading, using pseudocode. **[5]**

**10.** Explain why an enumerated type is a better choice than a STRING for the wind direction in Question 9. **[2]**

**11.** Explain why pointer types are needed to build a linked list in dynamic memory. **[2]**

---

## Answers

**1.** Any two, 1 mark each: built-in types cannot represent all the data a problem needs, so the programmer models the data directly [1]; a variable can be restricted to valid values, so the translator rejects invalid ones [1]; related items can be grouped and handled as one unit [1]; the type is defined once and reused, so data is handled consistently [1].

**2.** **(a)** Non-composite [1].

**(b)** Composite [1].

**(c)** Non-composite [1].

**(d)** Composite [1].

**3.** TYPE TDay = (Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday): TYPE TDay = with brackets [1]; the seven values in order without quotation marks [1].

**4.** Ptr holds a memory address [1]. Ptr^ is the value stored at the address held in Ptr [1].

**5.** **(a)** TYPE TStatus = (OnLoan, Available, Reserved, Lost): correct syntax [1]; four values without quotation marks [1].

**(b)** Model answer:

```
TYPE TBook
   DECLARE ISBN : STRING
   DECLARE Title : STRING
   DECLARE Year : INTEGER
   DECLARE Status : TStatus
ENDTYPE
```

TYPE TBook ... ENDTYPE [1]; ISBN as STRING, to keep a leading zero [1]; Title STRING and Year INTEGER [1]; Status of type TStatus [1].

**(c)** DECLARE Books : ARRAY[1:5000] OF TBook [1]. Books[10].Status ← Lost [1].

**6.** After P^ ← P^ + Q^: A = 10, B = 3 [1]. After Q ← P: Q now holds the address of A; A and B unchanged [1]. After Q^ ← Q^ * 2: A = 20, B = 3 [1]. Output: 20 3 [1].

**7.** **(a)** Union {2, 3, 4, 6, 8, 9} [1]; intersection {6} [1]; difference S1 − S2 = {2, 4, 8} [1].

**(b)** The only question asked is whether a word is a member of the collection, which is a set operation [1]; the banned words are distinct and their order does not matter [1].

**8.** A record groups data fields only, but a class groups attributes with the methods that operate on them [1]; a class's attributes can be private, so they can only be changed through its methods [1]. A class is better when data must be kept valid by controlling how it is changed, for example a bank account whose balance may only change through Deposit and Withdraw methods [1].

**9.** Model answer:

```
TYPE TDirection = (N, NE, E, SE, S, SW, W, NW)

TYPE TReading
   DECLARE ReadingDate : DATE
   DECLARE ReadingTime : STRING
   DECLARE Temperature : REAL
   DECLARE Wind : TDirection
ENDTYPE
```

Enumerated type for direction with all eight values [1]; record type with TYPE ... ENDTYPE [1]; date field of type DATE [1]; temperature as REAL [1]; wind field of the enumerated type [1]. (Accept a suitable type for time, such as STRING.)

**10.** The variable can only hold one of the eight valid directions, so a value such as "North-east" or "NNE" cannot be stored by mistake [1]. The values have a defined order and a fixed spelling, so comparisons are reliable and the code is easier to read [1].

**11.** The nodes are created anywhere in memory while the program runs, so they are not next to each other [1]. Each node must store the address of the next node, and only a pointer type can hold an address [1].

---

## Where marks are usually lost

- Enumerated values written in quotation marks.
- Pointer traces that confuse the address with the value.
- A record field without a type, or a numeric type for an identifier with leading zeros.
- Justifying a type choice without referring to the data.
