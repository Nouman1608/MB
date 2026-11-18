---
title: "Cambridge A Level Computer Science (9618): Data Types and Records"
resourceType: "study-guides"
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
description: "Choosing INTEGER, REAL, CHAR, STRING, BOOLEAN and DATE, and defining and using record structures in pseudocode, for Cambridge 9618 section 10.1."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers **10.1 Data Types and Records** in the Cambridge International AS & A Level Computer Science 9618 syllabus. It is AS content, assessed mainly on Paper 2, and all pseudocode follows the Cambridge Pseudocode Guide. The [Data Types and Structures study guide](/resources/cambridge-a-level-computer-science-data-types-and-structures-study-guide/) introduces the whole of Topic 10; this page goes further into 10.1, with the reasoning behind each type choice and new worked examples of record structures. Condensed notes are in the [Data Types and Records revision notes](/resources/cambridge-a-level-computer-science-9618-data-types-and-records-revision-notes/), and the [Data Types and Records practice questions](/resources/cambridge-a-level-computer-science-9618-data-types-and-records-practice/) let you test yourself.

## What 10.1 asks you to do

- **select and use appropriate data types** for a problem solution, including integer, real, char, string, Boolean and date; the pseudocode types are INTEGER, REAL, CHAR, STRING, BOOLEAN, DATE, ARRAY and FILE
- show understanding of the purpose of a **record structure** to hold a set of data of different data types under **one identifier**
- write pseudocode to **define** a record structure, and to **read data from** and **save data to** a record structure.

Arrays are section 10.2 ([Arrays guide](/resources/cambridge-a-level-computer-science-9618-arrays/)) and files are 10.3 ([Files guide](/resources/cambridge-a-level-computer-science-9618-files/)). User-defined types in general, such as enumerated and pointer types, are A Level section 13.1.

## The data types

| Type | Holds | Literal in pseudocode | Typical operations |
|---|---|---|---|
| INTEGER | Whole numbers, positive or negative | `42`, `-7` | Arithmetic, counting, comparison |
| REAL | Numbers with a fractional part | `3.75`, `0.0` (a digit on both sides of the point) | Arithmetic, comparison |
| CHAR | Exactly one character | `'Y'` (single quotes) | Comparison |
| STRING | Zero or more characters | `"Hello"` (double quotes); `""` is the empty string | Joining with `&`, LENGTH, MID, comparison |
| BOOLEAN | TRUE or FALSE | `TRUE`, `FALSE` | AND, OR, NOT, conditions |
| DATE | A calendar date | Normally written dd/mm/yyyy | Comparison, sorting, date arithmetic |

## Selecting a type: the questions to ask

Choosing a type is a decision about **what values** the data can take and **what you will do** with it.

1. **Will arithmetic be done on it?** If not, a "number" such as a phone number, an ID with leading zeros or a postcode is a **STRING**. An INTEGER would lose a leading zero (01632 becomes 1632) and would allow nonsense such as adding two phone numbers.
2. **Can it have a fractional part?** A price, a mass or an average needs **REAL**. A count of items, a year or a score out of 20 is **INTEGER**.
3. **Is it only ever one of two states?** Paid or not paid, present or absent: **BOOLEAN**. Storing "Yes"/"No" as a STRING invites spelling variations ("yes", "Y") that break comparisons.
4. **Is it one character?** A grade 'A', a size code 'M', a gender code: **CHAR**. More than one character means STRING.
5. **Is it a date?** Use **DATE**, so that dates can be compared and sorted correctly. As a STRING, "02/03/2026" sorts before "15/01/2026", which is wrong for dates.

### Worked example 1: justifying types

*A courier records the following for each parcel. Choose a data type for each and justify it.*

| Data item | Example | Type | Justification |
|---|---|---|---|
| Tracking code | "CX004917" | STRING | Mix of letters and digits; leading zeros kept; no arithmetic |
| Weight in kg | 2.35 | REAL | Has a fractional part and is used in price calculations |
| Number of pieces | 3 | INTEGER | Always a whole number, may be added up |
| Service level | 'E' (express) or 'S' (standard) | CHAR | Always exactly one character |
| Delivered | FALSE | BOOLEAN | Only two possible states |
| Due date | 14/03/2026 | DATE | Needs to be compared with today's date |

Each justification says why the **other** types are unsuitable as much as why this one fits. "STRING because it is text" is weaker than "STRING because no arithmetic is done and the leading zeros must be kept".

## Records

A **record** is a data structure that holds a set of related data items, which can be of **different** data types, under **one identifier**. Each item is a **field**. The purpose is to keep everything about one thing (one parcel, one customer) together, so that it can be stored, passed to a subroutine or put into an array as a single unit.

Without records, a program storing 500 parcels would need six separate arrays (codes, weights, pieces...) kept in step by index. One array of records is clearer and much less error-prone.

### Defining a record type

```
TYPE TParcel
   DECLARE TrackingCode : STRING
   DECLARE WeightKg : REAL
   DECLARE Pieces : INTEGER
   DECLARE Service : CHAR
   DECLARE Delivered : BOOLEAN
   DECLARE DueDate : DATE
ENDTYPE
```

The TYPE statement defines a new data type; it does **not** create any variable. A variable of the type is declared separately:

```
DECLARE Parcel : TParcel
```

### Saving data to a record

Each field is accessed with **dot notation**, `Variable.Field`:

```
INPUT Parcel.TrackingCode
INPUT Parcel.WeightKg
INPUT Parcel.Pieces
INPUT Parcel.Service
INPUT Parcel.DueDate
Parcel.Delivered ← FALSE
```

### Reading data from a record

```
OUTPUT "Parcel ", Parcel.TrackingCode, " has ", Parcel.Pieces, " piece(s)"
IF Parcel.Service = 'E' AND Parcel.Delivered = FALSE THEN
   OUTPUT "Express parcel still to deliver"
ENDIF
```

## Worked example 2: an array of records

A depot holds up to 500 parcels in `Parcels : ARRAY[1:500] OF TParcel`, with `ParcelCount` holding how many are in use. Two tasks show reading from and saving to records inside an array.

**Task A: total weight of undelivered express parcels.**

```
DECLARE Index : INTEGER
DECLARE TotalWeight : REAL
TotalWeight ← 0.0
FOR Index ← 1 TO ParcelCount
   IF Parcels[Index].Service = 'E' AND NOT Parcels[Index].Delivered THEN
      TotalWeight ← TotalWeight + Parcels[Index].WeightKg
   ENDIF
NEXT Index
OUTPUT "Express weight still on vans: ", TotalWeight
```

**Task B: mark a parcel delivered, given its tracking code.**

```
PROCEDURE MarkDelivered(Code : STRING)
   DECLARE Index : INTEGER
   DECLARE Found : BOOLEAN
   Found ← FALSE
   Index ← 1
   WHILE Found = FALSE AND Index <= ParcelCount
      IF Parcels[Index].TrackingCode = Code THEN
         Parcels[Index].Delivered ← TRUE
         Found ← TRUE
      ELSE
         Index ← Index + 1
      ENDIF
   ENDWHILE
   IF Found = FALSE THEN
      OUTPUT "No parcel with code ", Code
   ENDIF
ENDPROCEDURE
```

The notation `Parcels[Index].Delivered` reads from left to right: the array, then the element, then the field within that element.

Testing Task A with three invented parcels makes the logic concrete:

| Index | Service | Delivered | WeightKg | Added? | TotalWeight |
|---|---|---|---|---|---|
| 1 | 'E' | FALSE | 2.35 | Yes | 2.35 |
| 2 | 'S' | FALSE | 4.10 | No (standard) | 2.35 |
| 3 | 'E' | TRUE | 1.20 | No (delivered) | 2.35 |

## Common mistakes

- Choosing INTEGER for phone numbers or codes with leading zeros.
- Putting a CHAR in double quotes, or a STRING in single quotes.
- Writing `TParcel.WeightKg`: the dot follows the **variable**, not the type name.
- Forgetting to declare a variable of the record type after defining it.
- Writing the field type in the wrong place: `DECLARE WeightKg : REAL` inside TYPE, not `REAL WeightKg`.

## Exam technique

For **select** or **state** questions, give the type name exactly as in the Pseudocode Guide (INTEGER, not "int"). For **justify**, link the choice to the data's values and the operations needed. When asked to **write pseudocode** for a record, include TYPE ... ENDTYPE, a DECLARE for every field, and then use dot notation consistently. Read the question for the identifiers it wants you to use, and do not rename them.
