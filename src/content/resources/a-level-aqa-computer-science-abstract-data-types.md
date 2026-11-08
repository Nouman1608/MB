---
title: "AQA A-Level Computer Science: Files, Queues, Stacks, Graphs, Trees, Hash Tables and Vectors (7517)"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of data structures"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 1
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-data-structures"
    subtopic: "fields-records-and-files-7517"
  - qualification: "a-level"
    topic: "fundamentals-of-data-structures"
    subtopic: "abstract-data-types-data-structures-7517"
  - qualification: "a-level"
    topic: "fundamentals-of-data-structures"
    subtopic: "queues-7517"
  - qualification: "a-level"
    topic: "fundamentals-of-data-structures"
    subtopic: "stacks-7517"
  - qualification: "a-level"
    topic: "fundamentals-of-data-structures"
    subtopic: "graphs-7517"
  - qualification: "a-level"
    topic: "fundamentals-of-data-structures"
    subtopic: "trees-7517"
  - qualification: "a-level"
    topic: "fundamentals-of-data-structures"
    subtopic: "hash-tables-7517"
  - qualification: "a-level"
    topic: "fundamentals-of-data-structures"
    subtopic: "dictionaries-7517"
  - qualification: "a-level"
    topic: "fundamentals-of-data-structures"
    subtopic: "vectors-7517"
description: "Text and binary files, static vs dynamic structures, queues, stacks, graphs, trees, hash tables, dictionaries and vectors for AQA A-Level Computer Science 7517."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

This guide covers the rest of 4.2 Fundamentals of data structures in
AQA A-Level Computer Science (7517): files (4.2.1.3), abstract data
types and the static/dynamic distinction (4.2.1.4), and the seven named
structures — queues, stacks, graphs, trees, hash tables, dictionaries
and vectors (4.2.2–4.2.8). AQA expects you to know what each structure
is for, to carry out its operations by hand, and to explain how it can
be built when a language does not provide it. The concept of a data
structure and arrays (4.2.1.1–4.2.1.2) are in the [Data Structures and
Arrays study guide](/resources/a-level-aqa-computer-science-data-structures-and-arrays/).

## Syllabus coverage

**AQA A-LEVEL COMPUTER SCIENCE (7517) — 4.2 FUNDAMENTALS OF DATA STRUCTURES**

- 4.2.1.3 Fields, records and files — read/write from/to a text file; read/write data from/to a binary (non-text) file
- 4.2.1.4 Abstract data types/data structures — the concept and uses of queues, stacks, graphs, trees, hash tables, dictionaries and vectors; using them and their equivalent data structures in simple contexts, and representing them when a language has no built-in support; static versus dynamic structures; creating and maintaining data in queues (linear, circular, priority), stacks and hash tables
- 4.2.2 Queues — add an item, remove an item, test for empty and full, for linear, circular and priority queues
- 4.2.3 Stacks — push, pop, peek (or top), test for empty and full
- 4.2.4 Graphs — uses; graph, weighted graph, vertex/node, edge/arc, undirected and directed graph; adjacency matrix and adjacency list, and comparing them
- 4.2.5 Trees — a tree as a connected, undirected graph with no cycles; rooted trees; binary trees; binary search trees; uses of rooted trees
- 4.2.6 Hash tables — concept and uses; simple hashing algorithms; collisions and rehashing
- 4.2.7 Dictionaries — key-value pairs; simple applications such as information retrieval
- 4.2.8 Vectors — notations and representations; addition, scalar multiplication, convex combination and dot product; finding the angle between two vectors

## Text and binary files (4.2.1.3)

A **field** is one item of data, a **record** is a collection of related
fields, and a **file** stores records permanently. A **text file**
stores data as characters, usually one record per line, so it can be
opened in a text editor. A **binary file** stores data in the same
internal format the program uses (for example a 32-bit integer stored as
four bytes), so it cannot be read sensibly as text but is often more
compact and faster to load. In both cases the pattern is: open the file
in the right mode, read or write, and close it.

## What is an abstract data type, and static vs dynamic? (4.2.1.4)

An **abstract data type (ADT)** is defined by the operations it supports
(for a stack: push, pop, peek), not by how it is stored. When a language
has no built-in queue or stack, you implement it yourself, usually with
an array plus one or more pointer variables.

| | Static structure | Dynamic structure |
|---|---|---|
| Size | Fixed when created | Grows and shrinks while the program runs |
| Memory | Reserved in advance, so it may be wasted if not full, and it cannot grow when full | Uses only what it needs, taken from the heap |
| Speed and simplicity | Direct indexing, no pointer overhead | Extra memory for pointers; heap can run out |
| Example | Array-based queue of 10 slots | List that grows as items are appended |

## How do linear, circular and priority queues work? (4.2.2)

A **queue** is first in, first out (FIFO). An array-based queue keeps a
**front** pointer (next item to remove) and a **rear** pointer (last
item added).

- **Linear queue:** add at the rear, remove from the front. Removed
  slots at the front are not reused, so the queue can report full while
  empty space exists (unless items are shuffled forward, which is slow).
- **Circular queue:** the rear wraps round to the start, so freed slots
  are reused: `rear ← (rear + 1) MOD maxSize`. A count of items (or a
  comparison of the pointers) tests for empty and full.
- **Priority queue:** each item has a priority; the item with the
  highest priority is removed first, and items of equal priority leave
  in arrival order. It can be kept in priority order when items are
  added.

**Worked example (circular queue, 5 slots, indices 0–4).** Front = 0,
rear = 4, size = 5 (full). Remove one item: front becomes 1, size 4. Add
"K": rear = (4 + 1) MOD 5 = 0, so "K" goes into slot 0, size 5. A linear
queue in the same state would have reported full.

Before **adding**, test for full; before **removing**, test for empty.

## Stack operations (4.2.3)

A **stack** is last in, first out (LIFO), with a **top** pointer.

| Operation | Effect |
|---|---|
| Push | Test for full; increment top; store the item |
| Pop | Test for empty; return the top item; decrement top |
| Peek / top | Return the top item **without removing it** |
| Is empty / is full | Compare top with its start value or with the maximum size |

Typical uses are storing return addresses when subroutines are called,
undo features, and reversing the order of items.

## Graphs and how to represent them (4.2.4)

A **graph** represents more complex relationships than a list or tree:
**vertices (nodes)** joined by **edges (arcs)**. In an **undirected
graph** edges go both ways; in a **directed graph** each edge has a
direction. A **weighted graph** gives each edge a value, such as a
distance or cost. Typical uses: road and rail networks, computer
networks, social networks and web page links.

**Adjacency matrix:** a 2-D grid with a row and column per vertex; a
cell holds 1 (or the weight) if an edge exists. **Adjacency list:** for
each vertex, a list of the vertices it connects to (with weights if
needed).

| | Adjacency matrix | Adjacency list |
|---|---|---|
| Memory | Always n × n cells | Only the edges that exist |
| Testing whether an edge exists | Immediate — look up one cell | Must search the vertex's list |
| Best for | Dense graphs with many edges | Sparse graphs with few edges |

## Trees, binary trees and binary search trees (4.2.5)

A **tree** is a **connected, undirected graph with no cycles**; it does
not have to have a root. A **rooted tree** has one vertex designated as
the **root**, which gives parent–child relationships: the root is the
only node with no parent. A **binary tree** is a rooted tree in which
each node has **at most two children**. A common application is a
**binary search tree**, where everything in a node's left subtree is
smaller than it and everything in its right subtree is larger, so a
search can discard half of the remaining tree at each step when it is
balanced. Rooted trees are also used for hierarchies such as folder
structures.

## Hash tables and collisions (4.2.6)

A **hash table** maps **keys to values**. A **hashing algorithm** turns
a key into the address (index) where its record is stored, giving very
fast lookup without searching. A **collision** occurs when two keys
compute the same hash; it is handled by **rehashing**, for example by
trying the next free slot.

**Worked example.** Table of 11 slots, hash = key MOD 11. Key 23 → slot
1. Key 45 → 45 MOD 11 = 1, a collision, so rehash to slot 2. Key 34 →
slot 1, taken; slot 2, taken; stored in slot 3. To look up 34 later, the
same sequence is followed until 34 or an empty slot is found.

## Dictionaries (4.2.7)

A **dictionary** is a collection of **key-value pairs** in which the
value is accessed through its key. A simple application is
**information retrieval**: AQA's example represents the document "The
green, green grass grows" as {'grass': 1, 'green': 2, 'grows': 1, 'the':
1}, ignoring case, so word frequencies can be compared between
documents.

## Vectors (4.2.8)

A **vector** can be written as a list of numbers, for example [2.0,
3.14, −1.0, 2.72] as a 4-vector over ℝ (written ℝ⁴); all entries must
come from the same field. It can also be viewed as a **function** f : S
→ ℝ with S = {0, 1, 2, 3}, mapping 0 ↦ 2.0 and so on — and then a
**dictionary** is a natural representation. Lists and 1-D arrays are
other representations, and a vector can be visualised as an arrow from
the origin to a point.

- **Addition** achieves **translation**; **scalar–vector
  multiplication** achieves **scaling**.
- A **convex combination** of u and v is αu + βv with α, β ≥ 0 and
  α + β = 1; it lies on the line segment between them.
- The **dot product** u · v = u₁v₁ + u₂v₂ + … + uₙvₙ, and it is used to
  find the angle between two vectors.

**Worked example.** u = [3, 4], v = [4, 3]. u · v = 12 + 12 = 24. Each
has length 5, so cos θ = 24 ÷ (5 × 5) = 0.96 and θ ≈ 16.3°.

## Common mistakes

- Describing a circular queue without the MOD wrap-round of the pointer.
- Saying pop and peek do the same thing — peek does not remove the item.
- Calling every graph without a cycle a binary tree; a binary tree must be rooted with at most two children per node.
- Describing a collision without saying how the item is found again.
- Using an adjacency matrix for a large sparse graph without noting the wasted memory.

## Frequently asked questions

**What is the difference between a hash table and a dictionary?**
A
dictionary is the abstract idea of key-value pairs; a hash table is a
common way of implementing it, using a hashing algorithm to place each
key.

**Why is a circular queue better than a linear queue?**
It reuses slots
freed at the front, so it does not report full while there is unused
space, and no items need shuffling.

**Does a tree need a root?**
Not in AQA's definition. A tree is any
connected, undirected graph with no cycles; a rooted tree is one where a
root has been chosen.

## Related resources

- [Revision notes for these structures](/resources/aqa-a-level-computer-science-abstract-data-types-revision-notes/)
- [Practice questions for these structures](/resources/aqa-a-level-computer-science-abstract-data-types-practice/)
- [Data Structures and Arrays study guide](/resources/a-level-aqa-computer-science-data-structures-and-arrays/)

## Official syllabus

AQA A-level Computer Science (7517) specification, 4.2 Fundamentals of
data structures —
[aqa.org.uk](https://www.aqa.org.uk/subjects/computer-science/a-level/computer-science-7517/specification/subject-content).
