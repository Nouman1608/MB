---
title: "Cambridge A Level Computer Science (9618): Data Types and Structures -- Revision Notes"
seoTitle: "Cambridge 9618 Data Types and Structures Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 10: Data Types and Structures"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 10
syllabusTopics:
  - qualification: "a-level"
    topic: "data-types-and-structures"
  - qualification: "a-level"
    topic: "data-types-and-structures"
    subtopic: "data-types-and-records"
  - qualification: "a-level"
    topic: "data-types-and-structures"
    subtopic: "arrays"
  - qualification: "a-level"
    topic: "data-types-and-structures"
    subtopic: "files"
  - qualification: "a-level"
    topic: "data-types-and-structures"
    subtopic: "introduction-to-abstract-data-types-adt"
description: "Revision notes on data types, records, 1D and 2D arrays, bubble sort, linear search, text files, stacks, queues and linked lists for Cambridge AS 9618 Topic 10."
author: "marlbridge-academic-team"
publishedDate: 2026-11-08
featured: false
---

Topic 10 Data Types and Structures covers choosing data types, grouping data in records and arrays, keeping data in text files, and the stack, queue and linked list abstract data types (ADTs). In Cambridge International AS & A Level Computer Science 9618 it is examined in Paper 2, where you write pseudocode for records, arrays, a bubble sort, a linear search and text-file handling, and show how ADTs are stored in arrays.

Related: [Data Types and Structures study guide](/resources/cambridge-a-level-computer-science-data-types-and-structures-study-guide/) · [practice questions](/resources/cambridge-a-level-computer-science-data-types-and-structures-practice/) · [Computer Science course hub](/boards/cambridge/a-level/computer-science/)

## Syllabus coverage

| Section | Candidates should be able to |
|---|---|
| 10.1 | Select and use appropriate data types: INTEGER, REAL, CHAR, STRING, BOOLEAN, DATE, ARRAY, FILE |
| 10.1 | Show understanding of a record structure; write pseudocode to define a record, read data from it and save data to it |
| 10.2 | Use the terms index, upper bound and lower bound; select a 1D or 2D array for a task; write pseudocode for 1D and 2D arrays |
| 10.2 | Process array data: sort using a bubble sort, search using a linear search |
| 10.3 | Show understanding of why files are needed; write pseudocode to handle text files of one or more lines |
| 10.4 | Understand that an ADT is a collection of data and a set of operations on those data |
| 10.4 | Describe stacks, queues and linked lists, justify their use, and add, edit and delete data in them (no pseudocode required) |
| 10.4 | Describe how a queue, stack and linked list can be implemented using arrays |

## Choosing a data type

| Type | Holds | Example |
|---|---|---|
| INTEGER | Whole numbers | Number of tickets: 4 |
| REAL | Numbers with a fractional part | Price: 12.50 |
| CHAR | One character, in single quotes | Grade: 'B' |
| STRING | Zero or more characters, in double quotes | Phone: "07700900123" (keeps leading zero) |
| BOOLEAN | TRUE or FALSE | IsMember |
| DATE | A calendar date | DateJoined: 14/03/2026 |

An average should be REAL even if the inputs are integers (June 2025 examiners penalised averages declared as INTEGER).

## Records

A record holds related data of **different** types under one identifier; each item is a field accessed with dot notation.

```
TYPE BookRecord
   DECLARE Title : STRING
   DECLARE Pages : INTEGER
   DECLARE Price : REAL
   DECLARE OnLoan : BOOLEAN
ENDTYPE

DECLARE Book : BookRecord
DECLARE Library : ARRAY[1:500] OF BookRecord
Book.Title ← "Dune"
Library[1] ← Book
OUTPUT Library[1].Pages
```

## Arrays

| Term | Meaning |
|---|---|
| Index | The position number used to access an element |
| Lower bound | The index of the first element |
| Upper bound | The index of the last element |

- Use a **1D array** for a single list (30 names); a **2D array** for a table (7 days × 24 hours of readings).
- `DECLARE Readings : ARRAY[1:7, 1:24] OF REAL`; access with `Readings[Day, Hour]`.
- An array holds elements of **one** data type; an array of records holds mixed data per element.

## Linear search and bubble sort

```
// linear search of Names[1:100] for SearchName
Found ← FALSE
Index ← 1
WHILE Found = FALSE AND Index <= 100
   IF Names[Index] = SearchName THEN
      Found ← TRUE
   ELSE
      Index ← Index + 1
   ENDIF
ENDWHILE
```

```
// bubble sort of Nums[1:10] into ascending order
Boundary ← 9
REPEAT
   NoSwaps ← TRUE
   FOR J ← 1 TO Boundary
      IF Nums[J] > Nums[J + 1] THEN
         Temp ← Nums[J]
         Nums[J] ← Nums[J + 1]
         Nums[J + 1] ← Temp
         NoSwaps ← FALSE
      ENDIF
   NEXT J
   Boundary ← Boundary - 1
UNTIL NoSwaps = TRUE OR Boundary = 0
```

The flag stops the sort early when a pass makes no swaps; reducing Boundary skips the values already in place. June 2025 examiners noted bubble sorts with one loop, wrong bounds or no early exit.

## Text files

Files keep data **after the program ends** (variables in RAM are lost), and let data be shared with other programs.

```
DECLARE LineOfText : STRING
OPENFILE "Scores.txt" FOR READ
WHILE NOT EOF("Scores.txt")
   READFILE "Scores.txt", LineOfText
   OUTPUT LineOfText
ENDWHILE
CLOSEFILE "Scores.txt"

OPENFILE "Scores.txt" FOR APPEND
WRITEFILE "Scores.txt", "Lina,87"
CLOSEFILE "Scores.txt"
```

| Mode | Effect |
|---|---|
| READ | Read lines from the start of the file |
| WRITE | Create a new file; any existing data is lost |
| APPEND | Add lines after the existing data |

## Abstract data types

| ADT | Order | Operations | Typical use |
|---|---|---|---|
| Stack | LIFO: last in, first out; one end (top) | Push, pop; check empty / full | Undo; storing return addresses; reversing data |
| Queue | FIFO: first in, first out; join at rear, leave at front | Enqueue, dequeue; check empty / full | Print queue; keyboard buffer; customers waiting |
| Linked list | Nodes in logical order set by pointers | Insert, delete, find, by changing pointers | Ordered data that changes often |

### How each ADT is stored in arrays

- **Stack**: a 1D array plus a **top-of-stack pointer**. Push: check not full, add 1 to the pointer, store the item. Pop: check not empty, read the item, subtract 1.
- **Queue**: a 1D array plus **front** and **rear** pointers (and often a count). Enqueue at rear, dequeue from front. In a **circular** queue, a pointer that passes the upper bound wraps round to the lower bound, so freed space is reused; a linear queue does not wrap (June 2025, Papers 41 and 43).
- **Linked list**: an array of data, a parallel array of **next pointers**, a **start pointer**, a **free list pointer** to unused nodes, and a null value (e.g. −1 or 0) marking the end.

## Worked example: inserting into a linked list held in arrays

Start pointer = 3; free pointer = 4. Null is −1.

| Index | Data | Next |
|---|---|---|
| 1 | Lima | 2 |
| 2 | Oslo | −1 |
| 3 | Cairo | 1 |
| 4 | (free) | 5 |
| 5 | (free) | −1 |

The list in order is Cairo → Lima → Oslo. Insert **Madrid** in alphabetical order:

1. Take the free node 4; the free pointer becomes 5. Store Madrid in Data[4].
2. Find the position: Madrid comes after Lima (index 1) and before Oslo (index 2).
3. Set Next[4] ← Next[1], which is 2; then Next[1] ← 4.

New order: Cairo → Lima → Madrid → Oslo. No data was moved, only pointers changed. To **delete** Lima, set Next[3] ← Next[1] and return node 1 to the free list.

## Common mistakes and exam traps

- Storing phone numbers or codes with leading zeros as INTEGER.
- Using WRITE where APPEND was needed, losing the old data; not closing a file before reopening it in another mode (June 2025).
- Writing `EOF()` without the filename, or quoting a parameter that holds a filename (June 2024, November 2024, June 2025).
- Checking whether a queue is empty only when it is first set up, not before every dequeue (examiner reports June 2024 to June 2025).
- Saying data is "removed" from a stack array on pop; only the pointer changes.

## Frequently asked questions

**When should I use a record rather than parallel arrays?** When each item has several fields of different types. A record keeps them together under one identifier and an array of records is easier to sort and pass to a module.

**Do I have to write pseudocode for a stack or queue at AS?** No. The 9618 syllabus says you will not write pseudocode for these structures at AS, but you must add, edit and delete data and describe how they are held in arrays. Writing the algorithms is A Level (Topic 19).

**Why does a bubble sort need n − 1 comparisons per pass?** Each comparison looks at an element and the one after it, so with n elements the last valid pair starts at position n − 1.

## Official syllabus

Cambridge International AS & A Level Computer Science 9618, syllabus for 2026 and syllabus for 2027, 2028 and 2029, Topic 10 (10.1 to 10.4), with syntax from the Cambridge 9618 Pseudocode Guide for Teachers. Examiner points are summarised on our [9618 past papers page](/resources/cambridge-a-level-computer-science-9618-past-papers/).
