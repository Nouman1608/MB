---
title: "Cambridge A Level Computer Science (9618): Data Types and Records -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed notes on choosing pseudocode data types and on defining, filling and reading records for Cambridge AS Computer Science 9618 10.1."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Quick-recall notes for **10.1 Data Types and Records** (AS content, mainly Paper 2). The [Data Types and Records study guide](/resources/cambridge-a-level-computer-science-9618-data-types-and-records/) has full worked examples; the [Data Types and Records practice questions](/resources/cambridge-a-level-computer-science-9618-data-types-and-records-practice/) give exam-style practice. The rest of Topic 10 is summarised in the [Data Types and Structures revision notes](/resources/cambridge-a-level-computer-science-data-types-and-structures-revision-notes/).

## Pseudocode data types

| Type | Holds | Literal |
|---|---|---|
| INTEGER | Whole number | `25`, `-3` |
| REAL | Number with fractional part | `4.75`, `0.0` |
| CHAR | One character | `'K'` |
| STRING | Any number of characters, including none | `"Kiran"`, `""` |
| BOOLEAN | TRUE / FALSE | `TRUE` |
| DATE | Calendar date | dd/mm/yyyy |

The syllabus also lists ARRAY (10.2) and FILE (10.3) as pseudocode types.

## Choosing a type: decision list

1. No arithmetic, or leading zeros matter → **STRING** (phone numbers, IDs, postcodes).
2. Fractional part possible → **REAL** (money, mass, averages).
3. Whole numbers only → **INTEGER** (counts, years, scores).
4. Exactly two states → **BOOLEAN** (paid, present).
5. Exactly one character → **CHAR** (grade, code letter).
6. A date to compare or sort → **DATE**.

## Common type choices

| Data | Type | Not... | Because |
|---|---|---|---|
| Telephone number | STRING | INTEGER | Leading zero lost; no arithmetic |
| Price | REAL | INTEGER | Has pence/cents |
| Number of tickets | INTEGER | REAL | Cannot be fractional |
| Member? | BOOLEAN | STRING | Only two states; avoids "Y"/"yes" mismatches |
| Shirt size S/M/L | CHAR | STRING | One character only |
| Date of birth | DATE | STRING | Dates as strings do not sort correctly |
| Product code "A17" | STRING | CHAR | More than one character |
| Distance run in km | REAL | INTEGER | 5.4 km must keep its decimal part |
| Year of manufacture | INTEGER | STRING | Used in arithmetic, e.g. age of a car |

## Records: the essentials

- **Purpose**: hold related data of **different types** under **one identifier**.
- **Field**: one item in the record.
- **Dot notation**: `Variable.Field`.
- An **array of records** stores a table: one element per row.

```
TYPE TBook
   DECLARE ISBN : STRING
   DECLARE Title : STRING
   DECLARE Pages : INTEGER
   DECLARE Price : REAL
   DECLARE OnLoan : BOOLEAN
ENDTYPE

DECLARE ThisBook : TBook
DECLARE Library : ARRAY[1:2000] OF TBook
```

**Save data to a record**

```
INPUT ThisBook.Title
ThisBook.OnLoan ← FALSE
Library[12].Title ← "Tide Tables"
Library[12].OnLoan ← TRUE
```

**Read data from a record**

```
OUTPUT Library[12].Title
IF Library[12].OnLoan = TRUE THEN
   OUTPUT "On loan"
ENDIF
```

## Filling an array of records from input

```
DECLARE Index : INTEGER
FOR Index ← 1 TO 3
   OUTPUT "Book ", Index
   INPUT Library[Index].ISBN
   INPUT Library[Index].Title
   INPUT Library[Index].Pages
   INPUT Library[Index].Price
   Library[Index].OnLoan ← FALSE
NEXT Index
```

**Reading back with a condition**: count the books over 300 pages.

```
Count ← 0
FOR Index ← 1 TO 3
   IF Library[Index].Pages > 300 THEN
      Count ← Count + 1
   ENDIF
NEXT Index
OUTPUT Count
```

The loop variable picks the **record**; the field name after the dot picks the **item** inside it. Fields that are not input (OnLoan here) still need a starting value.

## Why records rather than separate arrays

| Separate (parallel) arrays | Array of records |
|---|---|
| One array per field, kept in step by index | One array; each element holds all fields |
| Easy to sort one array and forget the others | Whole record moves together |
| Many identifiers to pass to a subroutine | One identifier passed |

## Key terms

| Term | Meaning |
|---|---|
| Data type | Defines the values a variable can hold and the operations allowed |
| Record | Composite structure grouping fields of different types under one identifier |
| Field | One named item within a record |
| Record type | User-defined type created with TYPE ... ENDTYPE |
| Dot notation | Accessing a field as Variable.Field |
| Composite type | Type built from other types, such as a record or array |

## Exam traps

- CHAR in **single** quotes, STRING in **double** quotes.
- TYPE defines the structure; you still need `DECLARE Var : TypeName`.
- The dot follows the **variable** (`ThisBook.Title`), never the type (`TBook.Title`).
- With arrays of records, the index comes **before** the dot: `Library[12].Title`.
- Every field in TYPE needs its own DECLARE with a type.
- "It is a number" is not enough to choose INTEGER; ask whether arithmetic is done on it.

## Self-test

1. Give the data type for a mean exam mark.
2. Why should a bank account number with leading zeros be a STRING?
3. Which type would you use for whether a seat is booked?
4. Write a valid CHAR literal and a valid STRING literal.
5. State the purpose of a record structure.
6. What is a field?
7. Write the TYPE definition for TPet with Name (STRING), Species (STRING), Age (INTEGER) and Vaccinated (BOOLEAN).
8. Declare a variable MyPet of type TPet.
9. Write a statement that sets MyPet's age to 4.
10. Pets is an ARRAY[1:50] OF TPet. Write a statement that outputs the name of the 7th pet.
11. Give one advantage of an array of records over parallel arrays.
12. Why is DATE better than STRING for a due date?

**Answers**

1. REAL.
2. INTEGER would drop the leading zeros, and no arithmetic is done on it.
3. BOOLEAN.
4. `'Q'` and `"Queue"`.
5. To hold a set of related data of different data types under one identifier.
6. One named data item within a record.
7. `TYPE TPet` / `DECLARE Name : STRING` / `DECLARE Species : STRING` / `DECLARE Age : INTEGER` / `DECLARE Vaccinated : BOOLEAN` / `ENDTYPE`
8. `DECLARE MyPet : TPet`
9. `MyPet.Age ← 4`
10. `OUTPUT Pets[7].Name`
11. Any one: all fields of a record stay together (e.g. when sorting); only one identifier to manage or pass to a subroutine.
12. Dates can be compared and sorted correctly; as strings, "02/03/2026" would sort before "15/01/2026".
