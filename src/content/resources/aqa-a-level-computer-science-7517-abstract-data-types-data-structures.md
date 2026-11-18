---
title: "AQA A-Level Computer Science (7517): Abstract Data Types and Data Structures"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of data structures"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 2.14
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-data-structures"
    subtopic: "abstract-data-types-data-structures-7517"
description: "Deeper guide to AQA 7517 section 4.2.1.4: abstract data types, building them without built-in support, static versus dynamic, and maintaining their data."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers **4.2.1.4 Abstract data types/data structures** in AQA A-Level Computer Science (7517). The specification asks you to:

- be familiar with the concept and uses of a **queue, stack, graph, tree, hash table, dictionary and vector**, and use these abstract data types and their equivalent data structures in simple contexts;
- be familiar with **methods for representing them when a programming language does not support them as built-in types**;
- **distinguish between static and dynamic structures**, compare their uses and explain the advantages and disadvantages of each;
- **describe the creation and maintenance of data** within queues (linear, circular, priority), stacks and hash tables.

The [abstract data types study guide](/resources/a-level-aqa-computer-science-abstract-data-types/) surveys every structure in 4.2. This page concentrates on the ideas that belong to 4.2.1.4 itself: what makes a type "abstract", how each one is built from simpler parts, how static and dynamic implementations differ in practice, and what "creation and maintenance" involves.

Condensed notes are in the [abstract data types revision notes](/resources/aqa-a-level-computer-science-7517-abstract-data-types-data-structures-revision-notes/), and exam-style questions are in the [abstract data types practice questions](/resources/aqa-a-level-computer-science-7517-abstract-data-types-data-structures-practice/).

## What makes a data type "abstract"

An **abstract data type (ADT)** is defined by **what it does**, the set of operations and their behaviour, and says nothing about **how** the data is stored. A stack, for example, is "a collection where push adds an item, pop removes and returns the most recently added item, and peek returns it without removing it". Whether the items sit in an array or in linked nodes is an implementation decision.

Separating the two gives three benefits:

1. **Simpler use.** Code that uses a stack needs only the operations, not the details.
2. **Replaceable implementation.** A fixed-size array version can be swapped for a growable version without changing the code that calls push and pop.
3. **Protection.** If the data can be reached only through the operations, it cannot be put into an invalid state (for example, a queue whose rear pointer is wrong).

This is the same idea as encapsulation in 4.1.2.3, and an ADT is often written as a class.

## Uses of the seven named ADTs

| ADT | Defined by | Typical uses |
|---|---|---|
| Queue | Add at the rear, remove from the front (FIFO) | Print jobs, keyboard buffers, processes waiting for the processor |
| Stack | Push and pop at the top (LIFO) | Subroutine return addresses, undo, reversing data, evaluating expressions |
| Graph | Vertices joined by edges, possibly directed or weighted | Road, rail and computer networks, social networks |
| Tree | Connected, undirected, no cycles; rooted trees have parent–child links | File systems, binary search trees, syntax of expressions |
| Hash table | Key mapped to a storage location by a hashing algorithm | Fast lookup by key, such as a stock code or username |
| Dictionary | Collection of key-value pairs, value accessed through its key | Word counts in information retrieval, configuration settings |
| Vector | Ordered list of numbers from one field, such as the reals | Positions and directions in graphics, lists of measurements |

## Building ADTs without built-in support

When a language does not provide a structure, you build it from **arrays, records and pointers or references**. The table gives the usual representations.

| ADT | Static representation | Dynamic representation |
|---|---|---|
| Queue | Array plus front and rear pointers (and often a size counter) | Linked nodes with references to the front and rear nodes |
| Stack | Array plus a top pointer | Linked nodes with a reference to the top node |
| Graph | Adjacency matrix (2-D array) | Adjacency list: for each vertex, a list of its neighbours |
| Tree | Arrays of data, left pointers and right pointers | Node records holding references to their children |
| Hash table | Array of slots, each holding a record or marked empty | Array of slots, each holding a linked list of the records that hash there |
| Dictionary | Implemented with a hash table, or an array of key-value records | Hash table with linked lists |
| Vector | 1-D array | List, or a dictionary from index to value |

A **pointer** (index into an array) or a **reference** (memory address of an object created at runtime, 4.1.1.1) is what holds the structure together.

**Worked example 1: a dynamic stack built from nodes.** Each node is a record with two fields: `data` and `next`, a reference to the node below. `top` refers to the top node, or is `null` when the stack is empty.

```
SUBROUTINE Push(item)
    node ← NEW Node
    node.data ← item
    node.next ← top
    top ← node
ENDSUBROUTINE

SUBROUTINE Pop()
    IF top = null THEN
        OUTPUT "Stack empty"
    ELSE
        item ← top.data
        top ← top.next
        RETURN item
    ENDIF
ENDSUBROUTINE
```

Starting empty, `Push(4)`, `Push(9)`, `Pop()`, `Push(2)`:

| Operation | Nodes from top | Returned |
|---|---|---|
| Push(4) | 4 | |
| Push(9) | 9 → 4 | |
| Pop() | 4 | 9 |
| Push(2) | 2 → 4 | |

There is no "test for full" in the usual sense: the stack is full only when the heap cannot supply memory for another node. The array version on the [stacks study guide](/resources/aqa-a-level-computer-science-7517-stacks/) must test for full explicitly.

## Static versus dynamic structures

A **static** structure has its size fixed when it is created; the memory is reserved in one block in advance. A **dynamic** structure changes size while the program runs, taking memory from the **heap** when it grows and returning it when it shrinks.

| | Static | Dynamic |
|---|---|---|
| Size | Fixed | Grows and shrinks at run time |
| Memory use | Whole block reserved, even if mostly empty | Only what is currently needed, plus pointer overhead per item |
| Running out | Becomes full at its declared size | Fails only if the heap is exhausted |
| Access to item n | Direct, by index, if stored in an array | Usually by following references from the start |
| Implementation | Simpler; no pointer handling | More complex; references must be updated correctly |
| Good for | A known, stable number of items | An unpredictable or widely varying number of items |

**Comparing uses.** A theatre's seat map (a fixed number of seats) suits a static array: size known, direct access by seat number. A list of users currently online suits a dynamic structure: the number varies widely and no maximum can sensibly be reserved.

## Creation and maintenance of data

"Creation" means setting up an empty structure in a valid state; "maintenance" means keeping it valid as items are added and removed, including detecting when an operation is impossible.

**Queues (linear, circular, priority).**

- Creation: reserve the array; set front to the first index, rear to one before it (or to −1) and size to 0.
- Maintenance: test for full before adding and for empty before removing; move rear on add and front on remove. In a **circular** queue both pointers wrap with MOD. In a **priority** queue, insertion places each item according to its priority (or removal searches for the highest priority). Full algorithms are on the [queues study guide](/resources/aqa-a-level-computer-science-7517-queues/).

**Stacks.**

- Creation: reserve the array; set top to −1 (empty).
- Maintenance: test for full before push and for empty before pop or peek; move top by one in each direction.

**Hash tables.**

- Creation: reserve an array of slots and mark every slot empty (for example with a special value), so a search can tell an unused slot from a stored key.
- Maintenance: to insert, hash the key; if the slot is occupied (a **collision**), **rehash**, for example by trying the next slot until a free one is found. To retrieve, follow the same sequence until the key or an empty slot is found.

**Worked example 2: maintaining a hash table.** Seven slots (0–6), hash = key MOD 7, rehash to the next slot. Insert 15, 22, 8, 29.

| Key | key MOD 7 | Slots tried | Stored in |
|---|---|---|---|
| 15 | 1 | 1 | 1 |
| 22 | 1 | 1, 2 | 2 |
| 8 | 1 | 1, 2, 3 | 3 |
| 29 | 1 | 1, 2, 3, 4 | 4 |

All four keys hash to slot 1, so each insertion takes longer than the last: **clustering**. A poor hashing algorithm for the data, or a table that is too full, makes maintenance slow. More on hashing algorithms is in the [hash tables study guide](/resources/aqa-a-level-computer-science-7517-hash-tables/).

## Common mistakes

- Describing an ADT by its storage ("a stack is an array") rather than its operations.
- Saying a dynamic structure "never runs out of memory"; it can exhaust the heap.
- Saying static structures are "slower"; indexed access is direct, so often faster.
- Leaving out the "test for full / empty" steps when describing maintenance.
- Creating a hash table without marking slots empty, so a search cannot stop.
- Forgetting the extra memory a dynamic structure uses for its references.

## Exam technique

- **Describe how to represent** an ADT without built-in support: name the underlying structure (array, records, references) and the pointer variables, and say what each pointer holds.
- **Compare static and dynamic**: one point for each side on the same property (memory, size, access, complexity).
- **Explain an advantage**: give the consequence ("no memory is wasted on unused slots").
- **Describe creation and maintenance**: initial pointer values, the tests before each operation, and how pointers change.

## Related resources

- [Abstract data types revision notes](/resources/aqa-a-level-computer-science-7517-abstract-data-types-data-structures-revision-notes/)
- [Abstract data types practice questions](/resources/aqa-a-level-computer-science-7517-abstract-data-types-data-structures-practice/)
- [Queues study guide](/resources/aqa-a-level-computer-science-7517-queues/)
- [Stacks study guide](/resources/aqa-a-level-computer-science-7517-stacks/)
- [Graphs study guide](/resources/aqa-a-level-computer-science-7517-graphs/)

*Written against the AQA A-level Computer Science (7517) specification, 4.2.1.4 Abstract data types/data structures. Always check the current specification on the AQA website.*
