---
title: "Cambridge A Level Computer Science (9618): Data Types and Structures -- Study Guide"
resourceType: "study-guides"
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
description: "AS study guide to data types, records, arrays, text files and the stack, queue and linked list abstract data types for Cambridge Computer Science 9618."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-08
featured: false
---

Programs are only as good as the way they store their data. This topic covers the basic data types, how to group related values into records and arrays, how to keep data in files between runs, and the idea of an abstract data type (ADT) such as a stack or a queue. You are expected both to explain these ideas and to write Cambridge-style pseudocode that uses them.

## Where this fits in the specification

Topic 10 is AS Level content. It supports almost every program you write in Paper 2 and connects forward to the A Level work on linked lists, binary trees and file organisation. For background on how numbers and characters are stored in binary, see the [information representation study guide](/resources/a-level-computer-science-information-representation/).

## Data types and records

A **data type** defines what values a variable can hold and what operations are allowed on it. The Cambridge pseudocode types are INTEGER (whole numbers), REAL (numbers with a fractional part), CHAR (a single character), STRING (text), BOOLEAN (TRUE or FALSE), and DATE. Choosing the right type matters: a phone number is a STRING, not an INTEGER, because leading zeros must be kept and you will never do arithmetic on it.

A **record** (a user-defined type) groups values of different types under one name. Each part is a **field**.

```
TYPE TStudent
  DECLARE Name : STRING
  DECLARE Year : INTEGER
  DECLARE Average : REAL
ENDTYPE

DECLARE Pupil : TStudent
Pupil.Name ← "Amira"
Pupil.Year ← 12
Pupil.Average ← 71.5
```

You access a field using dot notation. A **composite** data type is one built from other types, and records and arrays are both composite. A user-defined type can also be an **enumerated** type, which lists the allowed values (for example the days of the week), or a **pointer** type, which holds the address of a variable. Naming a type makes a program easier to read and lets the compiler reject values that make no sense.

## Arrays

An **array** is a fixed-size collection of items of the same data type stored under one identifier and accessed by an index. A one-dimensional array holds a list, and a two-dimensional array holds a table with rows and columns.

```
DECLARE Scores : ARRAY[1:5] OF INTEGER
DECLARE Grid : ARRAY[1:3, 1:4] OF INTEGER
Scores[2] ← 40
Grid[2, 3] ← 7
```

The bounds are part of the declaration, and you must keep inside them; an index outside them is an error. To process every element use a FOR loop, and for a two-dimensional array use nested loops, one for rows and one for columns.

```
Total ← 0
FOR Row ← 1 TO 3
  FOR Col ← 1 TO 4
    Total ← Total + Grid[Row, Col]
  NEXT Col
NEXT Row
```

Arrays are useful for searching, sorting and storing lists in memory. Their limits are the fixed size and that every item has the same type. An array of records lets you keep a whole table of mixed data, for example 30 TStudent records.

## Files

Variables vanish when a program ends, so data that must last is kept in a **file**. Cambridge expects you to handle **text files**. A file must be opened for a mode before use, and closed afterwards.

```
OPENFILE "Marks.txt" FOR WRITE
WRITEFILE "Marks.txt", "Amira,71"
CLOSEFILE "Marks.txt"

OPENFILE "Marks.txt" FOR READ
WHILE NOT EOF("Marks.txt") DO
  READFILE "Marks.txt", Line
  OUTPUT Line
ENDWHILE
CLOSEFILE "Marks.txt"
```

The three modes are READ, WRITE and APPEND. WRITE replaces anything already in the file; APPEND adds new lines at the end and keeps the old ones; READ reads from the first line onwards. EOF tests for the end of the file. A frequent source of lost marks is forgetting to close the file, or using WRITE when the data should be added with APPEND.

## Abstract data types

An **abstract data type** is a collection of data together with the operations that can be performed on it, described without saying how it is implemented. A programmer using a stack does not need to know whether it is stored in an array or a linked list.

### Stack

A **stack** is a last in, first out (LIFO) structure. Items are added and removed at one end, the top. Operations: **push** (add), **pop** (remove and return), and tests for empty and full. Uses include undo features and the call stack of a running program.

### Queue

A **queue** is a first in, first out (FIFO) structure. Items join at the rear and leave from the front. Operations: **enqueue** and **dequeue**. Uses include print queues and keyboard buffers.

### Linked list

A **linked list** is a list of nodes, each holding data and a pointer to the next node. The list has a start pointer and the last node's pointer is null. Inserting or removing an item only changes pointers, with no need to shift other items, which is its main advantage over an array. Its disadvantages are that you cannot jump straight to item n and that the pointers use extra memory. A linked list can also be held in two parallel arrays, one for the data and one for the next-node pointers, with a free list that tracks unused slots.

An ADT can be built on arrays by using a pointer variable. For a stack held in an array, the pointer (often called TopOfStack) holds the index of the next free position.

## Worked example 1: a stack in an array

A stack uses an array Stack[1:5] and a pointer TopOfStack that starts at 1 and shows the next free place. Trace these operations: push 7, push 12, push 5, pop, push 9.

```
PROCEDURE Push(Item : INTEGER)
  IF TopOfStack > 5 THEN
    OUTPUT "Stack full"
  ELSE
    Stack[TopOfStack] ← Item
    TopOfStack ← TopOfStack + 1
  ENDIF
ENDPROCEDURE

FUNCTION Pop() RETURNS INTEGER
  IF TopOfStack = 1 THEN
    OUTPUT "Stack empty"
    RETURN -1
  ELSE
    TopOfStack ← TopOfStack - 1
    RETURN Stack[TopOfStack]
  ENDIF
ENDFUNCTION
```

| Operation | Stack[1] | Stack[2] | Stack[3] | TopOfStack |
|---|---|---|---|---|
| start | empty | empty | empty | 1 |
| push 7 | 7 | empty | empty | 2 |
| push 12 | 7 | 12 | empty | 3 |
| push 5 | 7 | 12 | 5 | 4 |
| pop (returns 5) | 7 | 12 | 5 | 3 |
| push 9 | 7 | 12 | 9 | 4 |

The pop returns 5, the most recent item, and decrements the pointer; the value 5 remains in memory but is treated as free and is overwritten by the push of 9. I ran an equivalent Python version to confirm the final state: items 7, 12, 9 and a pointer showing the next free position. In an exam, state clearly that the pointer moves and the data does not.

## Worked example 2: totals in a two-dimensional array

A 2D array Sales[1:3, 1:4] records units sold by three staff (rows) over four weeks (columns). Row 2 holds 12, 8, 15, 9. To find that member's total: 12 + 8 = 20, 20 + 15 = 35, 35 + 9 = 44. A loop over the columns for Row = 2 does the same by adding each Sales[2, Col] to a running total. To total all staff, put this loop inside an outer loop over Row.

## Common mistakes

- Using INTEGER for telephone numbers or product codes with leading zeros.
- Writing array indexes outside the declared bounds, or forgetting whether an array starts at 0 or 1; follow the declaration.
- Using WRITE when APPEND is needed, which erases previous data.
- Mixing up stack and queue ends: a stack uses one end for both operations, a queue uses two.
- Forgetting to test for empty before a pop, or full before a push.

## Exam technique

**Declare** questions need the right type and, for arrays, the bounds. **Trace** questions are best answered with a table that shows pointers as well as data. When asked to **describe** an ADT, give both the ordering rule (LIFO or FIFO) and the operations. When comparing an array with a linked list, give a point about insertion, a point about direct access and one about memory.

## Check your understanding

1. Give a suitable data type for a postcode and explain why. *STRING, because it contains letters and digits and is not used in arithmetic.*
2. State two differences between a record and an array. *A record can hold fields of different types, accessed by field name; an array holds items of one type, accessed by index.*
3. Write a declaration for an array of 30 names. *DECLARE Names : ARRAY[1:30] OF STRING*
4. State the difference between WRITE and APPEND. *WRITE overwrites existing content; APPEND adds to the end and keeps what is already there.*
5. A queue has items 4, 8, 1 (4 joined first). Which item is dequeued? *4, because queues are first in, first out.*
6. Give one advantage and one disadvantage of a linked list compared with an array. *Advantage: inserting or deleting only changes pointers; disadvantage: no direct access to the nth item and extra memory for pointers.*
7. After push 3, push 6, pop, pop on an empty stack, what does the stack hold? *Nothing; both items are removed and it is empty again.*
8. Add the values in a row of a 2D array holding 5, 11, 2 and 7. *5 + 11 + 2 + 7 = 25.*
