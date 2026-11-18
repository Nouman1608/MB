---
title: "AQA A-Level Computer Science (7517): Data Structures -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of data structures"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 2.11
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-data-structures"
    subtopic: "data-structures-7517"
description: "Condensed AQA 7517 section 4.2.1.1 recall: data structure versus data type and ADT, comparison properties, contexts, justification method and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Condensed recall for **4.2.1.1 Data structures**, AQA A-Level Computer Science (7517). The specification asks you to be familiar with the concept of data structures and to see them in practical settings. Full worked examples are in the [Data structures study guide](/resources/aqa-a-level-computer-science-7517-data-structures/); exam-style questions are in the [Data structures practice questions](/resources/aqa-a-level-computer-science-7517-data-structures-practice/).

## The definition to learn

A **data structure** is a way of **organising** related data items in memory, with defined ways of **accessing** them, so that a program can use them **efficiently for a particular task**.

Three marks are commonly available in a definition: organising many items, how they are accessed, and efficiency for a task.

## Three terms not to confuse

| Term | One line | Example |
|---|---|---|
| Data type | Kind of a single value and its allowed operations | Integer, string |
| Data structure | Concrete arrangement of many values in memory | Array of 20 reals; array plus top pointer |
| Abstract data type | Logical model defined by its operations, not by its storage | Stack (push, pop, peek) |

The same abstract data type can be implemented with different data structures.

## Properties for comparing structures

```
ELEMENT TYPES   homogeneous (array)        heterogeneous (record)
ORGANISATION    linear | hierarchical | network | key-based
ACCESS          direct (by index or key)   sequential (move through in order)
SIZE            static (fixed)             dynamic (grows and shrinks at run time)
ORDER RULE      insertion | FIFO | LIFO | sorted | priority
```

Use one property per justification point.

## Structure-to-context map

| If the data… | …use | Because |
|---|---|---|
| is a fixed number of same-type values | 1-D array | Direct access by index |
| has rows and columns | 2-D array | Two indices locate each item |
| describes one entity with mixed field types | Record | Groups different types under one name |
| must be processed in arrival order | Queue | FIFO |
| must be reversed or undone, most recent first | Stack | LIFO |
| is a network of connections | Graph | Vertices and edges, optionally weighted |
| is a hierarchy | Tree | Parent–child relationships from a root |
| is looked up by a key | Hash table / dictionary | Direct access by key |
| is an ordered list of numbers from one field, for geometry | Vector | Supports addition, scaling and dot product |

## Why structures beat separate variables

- One loop processes every item.
- The whole collection passes to a subroutine as one parameter.
- Changing the number of items changes one declaration.
- Individual items remain directly accessible.

## How to justify a choice

1. **Name** the structure precisely (not just "an array" when you mean a two-dimensional array).
2. **State a property of the data** (mixed types, arrival order, lookup by key, rows and columns).
3. **Link** it to the matching property of the structure.
4. If asked, **compare** with an alternative on the same property.

Example: "A queue, because jobs must be printed in the order they arrive and a queue removes items in first-in, first-out order."

## Warning signs of a poor choice

- The access method does not match how the data is used (sequential search for frequent key lookups).
- The organisation loses relationships in the data (a road network as a plain list).
- The size behaviour does not match the data (a static array for an unknown, growing number of items).

## Key terms

| Term | Definition |
|---|---|
| Data structure | Organisation of related data in memory with defined access, for efficient use in a task |
| Homogeneous | All elements of the same data type |
| Heterogeneous | Elements of different data types |
| Linear structure | Items arranged one after another |
| Direct access | Reaching an item immediately through its index or key |
| Sequential access | Reaching an item by moving through others in order |
| Static structure | Size fixed when created |
| Dynamic structure | Size changes while the program runs |
| Abstract data type | Model defined by its operations, independent of implementation |

## Exam traps

- "A way of storing data" alone is too vague for full marks.
- A record, not an array, holds fields of different types.
- "Efficient" needs a reason: which operation, and why it is fast.
- Data type ≠ data structure ≠ abstract data type.
- "Or equivalent" in the specification means language features such as lists count as arrays.

## Self-test

1. Define a data structure.
2. Distinguish a data type from a data structure.
3. What is an abstract data type?
4. Is an array homogeneous or heterogeneous?
5. Name a structure suited to storing one book's title, price and number in stock, and justify it.
6. Name a structure for the order of moves in a game where the last move must be undone first.
7. What property makes a hash table suitable for barcode lookups?
8. Give two reasons to use an array rather than 12 separate variables for monthly sales.
9. Distinguish direct access from sequential access.
10. Why would a single list of town names be a poor structure for a route planner?
11. A program must store an unknown and changing number of messages. Static or dynamic, and why?
12. Name a structure for storing the moves on a chessboard by rank and file.

**Answers**

1. A way of organising related data items in memory, with defined ways of accessing them, so they can be used efficiently for a particular task.
2. A data type describes a single value and its allowed operations; a data structure organises many values.
3. A logical description of data defined by the operations on it, independent of how it is stored.
4. Homogeneous.
5. A record, because the fields have different types (string, real, integer) and all describe one book.
6. A stack (last in, first out).
7. Direct access by key, so no search through all items is needed.
8. Any two: one loop processes all months; the set passes to a subroutine as one parameter; each month is still directly accessible by index; changing the number of items needs one change.
9. Direct access goes straight to an item by index or key; sequential access passes through items in order until the one needed is reached.
10. It loses which towns are connected and the distances between them; a graph represents those relationships.
11. Dynamic, because its size can grow and shrink as messages arrive and are deleted.
12. A two-dimensional (8 × 8) array, with one index for the rank and one for the file.

## Related resources

- [Data structures study guide](/resources/aqa-a-level-computer-science-7517-data-structures/)
- [Data structures practice questions](/resources/aqa-a-level-computer-science-7517-data-structures-practice/)
- [Data Structures and Arrays revision notes](/resources/aqa-a-level-computer-science-data-structures-revision-notes/)
