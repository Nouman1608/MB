---
title: "Cambridge A Level Computer Science (9618): Data Types and Records -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 10: Data Types and Structures"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 10.1
syllabusTopics:
  - qualification: "a-level"
    topic: "data-types-and-structures"
    subtopic: "data-types-and-records"
description: "Original questions with mark-scheme answers on choosing data types and writing record structures in pseudocode for Cambridge AS Computer Science 9618."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [Data Types and Records study guide](/resources/cambridge-a-level-computer-science-9618-data-types-and-records/) · [Data Types and Records revision notes](/resources/cambridge-a-level-computer-science-9618-data-types-and-records-revision-notes/) · [Data Types and Structures practice questions](/resources/cambridge-a-level-computer-science-data-types-and-structures-practice/)

These questions practise section 10.1 of Cambridge International AS & A Level Computer Science 9618. Write pseudocode in the style of the Cambridge Pseudocode Guide. All scenarios are invented. Answers are in mark-scheme style, with [1] for each creditable point.

---

## Section A

**1.** State the most appropriate data type for each item.

**(a)** a postcode such as "KT2 6LH" **[1]**

**(b)** the mean temperature in a week **[1]**

**(c)** the date a library book is due back **[1]**

**2.** Explain why a telephone number should not be stored as an INTEGER. **[2]**

**3.** Which of these is a valid CHAR literal in Cambridge pseudocode?

A: "B"

B: 'B'

C: 'BB'

D: B

**[1]**

**4.** State the purpose of a record structure. **[2]**

**5.** Identify **two** errors in this record definition. **[2]**

```
TYPE TCar
   DECLARE Registration : STRING
   Mileage : INTEGER
   DECLARE Price : REAL
END TYPE
```

**6.** Explain the difference between `TYPE TRoom ... ENDTYPE` and `DECLARE NewRoom : TRoom`. **[2]**

## Section B

**7.** A hotel stores data about each of its 40 rooms: the room number (such as "101A"), the nightly rate, the number of beds, whether the room is occupied, and its category, which is 'S' (standard) or 'D' (deluxe).

**(a)** Write pseudocode to define a record type TRoom. **[4]**

**(b)** Write a declaration for an array Rooms to hold the 40 rooms. **[1]**

**(c)** Write pseudocode to output the room number of every room that is not occupied and has at least 2 beds. **[4]**

**8.** Write pseudocode that inputs the room number, rate, beds and category of a new room into a variable NewRoom of type TRoom, and sets it to not occupied. **[3]**

**9.** Write a function TonightIncome() that returns the total of the nightly rates of all occupied rooms in Rooms. **[4]**

**10.** A school stores the following about each student. Choose a data type for each and justify your choice.

**(a)** candidate number, such as 0417 **[2]**

**(b)** whether the student has paid for a trip **[1]**

**(c)** the student's average test percentage **[1]**

**(d)** the student's house, one of 'N', 'E', 'S' or 'W' **[1]**

**11.** Write a procedure RaiseRate(RoomNo : STRING, Percent : REAL) that finds the room with the given room number in Rooms and increases its rate by the given percentage. If the room is not found, output a message. **[5]**

**12.** A programmer could store the hotel data in five separate one-dimensional arrays instead of one array of records. Explain **two** advantages of using the array of records. **[2]**

---

## Answers

**1. (a)** STRING [1].

**(b)** REAL [1].

**(c)** DATE [1].

**2.** A telephone number may start with 0, which would be lost if stored as an INTEGER [1]; no arithmetic is carried out on it / it may contain spaces or a + sign [1].

**3.** **B** [1].

**4.** To hold a set of related data items [1] of different data types under one identifier [1].

**5.** `Mileage : INTEGER` is missing DECLARE [1]; `END TYPE` should be `ENDTYPE` [1].

**6.** The TYPE statement defines a new data type / the structure of the record, but creates no variable [1]; the DECLARE statement creates a variable, NewRoom, that has that structure [1].

**7. (a)**

```
TYPE TRoom
   DECLARE RoomNo : STRING
   DECLARE Rate : REAL
   DECLARE Beds : INTEGER
   DECLARE Occupied : BOOLEAN
   DECLARE Category : CHAR
ENDTYPE
```

TYPE TRoom ... ENDTYPE [1]; all five fields declared [1]; RoomNo STRING and Rate REAL [1]; Beds INTEGER, Occupied BOOLEAN and Category CHAR [1].

**(b)** `DECLARE Rooms : ARRAY[1:40] OF TRoom` [1].

**(c)**

```
FOR Index ← 1 TO 40
   IF Rooms[Index].Occupied = FALSE AND Rooms[Index].Beds >= 2 THEN
      OUTPUT Rooms[Index].RoomNo
   ENDIF
NEXT Index
```

FOR loop 1 to 40 [1]; test of Occupied = FALSE [1]; test of Beds >= 2 joined with AND [1]; OUTPUT of RoomNo using correct notation [1].

**8.**

```
DECLARE NewRoom : TRoom
INPUT NewRoom.RoomNo
INPUT NewRoom.Rate
INPUT NewRoom.Beds
INPUT NewRoom.Category
NewRoom.Occupied ← FALSE
```

INPUT into fields using dot notation [1]; all four fields input [1]; Occupied assigned FALSE [1].

**9.**

```
FUNCTION TonightIncome() RETURNS REAL
   DECLARE Total : REAL
   DECLARE Index : INTEGER
   Total ← 0.0
   FOR Index ← 1 TO 40
      IF Rooms[Index].Occupied = TRUE THEN
         Total ← Total + Rooms[Index].Rate
      ENDIF
   NEXT Index
   RETURN Total
ENDFUNCTION
```

Function header with RETURNS REAL [1]; Total initialised to 0 [1]; loop with test of Occupied and add Rate [1]; RETURN Total after the loop [1].

**10. (a)** STRING [1], because the leading zero must be kept and no arithmetic is done on it [1].

**(b)** BOOLEAN, because there are only two states, paid or not paid [1].

**(c)** REAL, because an average can have a fractional part [1].

**(d)** CHAR, because it is always exactly one character [1].

**11.**

```
PROCEDURE RaiseRate(RoomNo : STRING, Percent : REAL)
   DECLARE Index : INTEGER
   DECLARE Found : BOOLEAN
   Found ← FALSE
   Index ← 1
   WHILE Found = FALSE AND Index <= 40
      IF Rooms[Index].RoomNo = RoomNo THEN
         Rooms[Index].Rate ← Rooms[Index].Rate * (1 + Percent / 100)
         Found ← TRUE
      ELSE
         Index ← Index + 1
      ENDIF
   ENDWHILE
   IF Found = FALSE THEN
      OUTPUT "Room not found"
   ENDIF
ENDPROCEDURE
```

Procedure header with both parameters [1]; loop through the array that stops when found or at the end [1]; comparison of Rooms[Index].RoomNo with the parameter [1]; correct calculation and assignment of the new rate [1]; message if not found [1].

**12.** Any two: all the data about one room is kept together, so it cannot get out of step, e.g. when sorting [1]; only one identifier needs to be declared and passed to subroutines [1]; the program is easier to read because each element represents one whole room [1].

---

## Where marks are usually lost

- Using double quotes for a CHAR, or single quotes for a STRING.
- Writing the type name instead of the variable before the dot.
- Missing DECLARE before each field inside TYPE.
- Giving a type without a reason when "justify" is asked.
- Forgetting to initialise a total before the loop.
