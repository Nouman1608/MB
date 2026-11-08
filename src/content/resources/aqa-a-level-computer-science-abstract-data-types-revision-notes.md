---
title: "AQA A-Level Computer Science: Queues, Stacks, Graphs, Trees, Hash Tables and Vectors — Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed recall notes on files, static and dynamic structures, queues, stacks, graphs, trees, hash tables, dictionaries and vectors for AQA A-Level 7517."
author: "marlbridge-academic-team"
publishedDate: 2026-11-08
featured: false
---

Condensed for the final weeks. These notes cover 4.2.1.3–4.2.8 of AQA
A-Level Computer Science (7517). For the full explanation, use the
[abstract data types study guide](/resources/a-level-aqa-computer-science-abstract-data-types/);
for arrays use the [Data Structures and Arrays revision notes](/resources/aqa-a-level-computer-science-data-structures-revision-notes/).

## Key terms

| Term | Definition |
|---|---|
| **Text file** | Data stored as characters, readable in an editor |
| **Binary file** | Data stored in its internal format; compact, not human-readable |
| **Abstract data type** | Defined by its operations, not by how it is stored |
| **Static structure** | Fixed size set when created |
| **Dynamic structure** | Size changes at run time using heap memory |
| **FIFO / LIFO** | First in first out (queue) / last in first out (stack) |
| **Weighted graph** | Each edge carries a value (cost, distance) |
| **Tree** | Connected, undirected graph with no cycles (root optional) |
| **Binary tree** | Rooted tree; each node has at most two children |
| **Collision** | Two keys compute the same hash |
| **Dictionary** | Key-value pairs; value accessed via its key |

## Static vs dynamic — the trade-off

| Static | Dynamic |
|---|---|
| Memory reserved in advance — may be wasted | Uses only what is needed |
| Cannot grow when full | Grows until the heap runs out |
| No pointer overhead; direct indexing | Extra storage for pointers |

## Queues (4.2.2)

| Type | Key rule |
|---|---|
| Linear | Add at rear, remove at front; freed front slots wasted |
| Circular | `rear ← (rear + 1) MOD maxSize` — slots reused |
| Priority | Highest priority leaves first; equal priority in arrival order |

Operations for all three: **add (enqueue)**, **remove (dequeue)**, **is empty**, **is full**. Check full before adding, empty before removing.

Worked example — circular queue of 4 slots (0–3), empty, front = 0, rear = −1, size = 0:

| Operation | front | rear | size | Slots 0–3 |
|---|---|---|---|---|
| add P | 0 | 0 | 1 | P, –, –, – |
| add Q | 0 | 1 | 2 | P, Q, –, – |
| add R | 0 | 2 | 3 | P, Q, R, – |
| remove (P) | 1 | 2 | 2 | –, Q, R, – |
| add S | 1 | 3 | 3 | –, Q, R, S |
| add T | 1 | 0 | 4 | T, Q, R, S |

The last addition wraps the rear round: (3 + 1) MOD 4 = 0. The queue is now full (size = 4), even though T sits in front of Q in the array.

## Stacks (4.2.3)

**Push** (check full, top + 1, store) · **pop** (check empty, return, top − 1) · **peek/top** (return without removing) · **is empty** · **is full**.

Uses: subroutine return addresses, undo, reversing data.

## Graphs (4.2.4)

| | Adjacency matrix | Adjacency list |
|---|---|---|
| Memory | n² cells | Proportional to edges |
| Edge test | One lookup | Search the list |
| Use when | Dense graph | Sparse graph |

Uses: maps and routes, networks, social connections.

## Trees (4.2.5)

- Tree = connected + undirected + no cycles.
- Rooted tree: one root, parent–child relationships; root has no parent.
- Binary search tree: left < node < right → fast searching when balanced.

## Hash tables (4.2.6)

Hash function → index; collision → **rehash** (e.g. next free slot). Lookup repeats the same steps until the key or an empty slot is found.

Worked example: 7 slots, hash = key MOD 7. Insert 15 (→1), 22 (→1, collision → 2), 8 (→1, 2 taken → 3).

## Dictionaries (4.2.7)

Information retrieval: "The green, green grass grows" → {'grass': 1, 'green': 2, 'grows': 1, 'the': 1}.

## Vectors (4.2.8)

- Representations: list, 1-D array, function f : S → ℝ (dictionary), arrow from the origin.
- All entries from the same field (e.g. ℝ).
- Addition = translation; scalar multiplication = scaling.
- Convex combination: αu + βv, α, β ≥ 0, α + β = 1.
- Dot product: u · v = u₁v₁ + … + uₙvₙ; cos θ = (u · v) ÷ (|u| |v|).

Worked example: u = [1, 0], v = [1, 1]. u · v = 1; |u| = 1, |v| = √2; cos θ = 1/√2, θ = 45°.

## Exam traps

- Circular queue answers without the MOD wrap-round.
- Peek described as removing the item.
- Adjacency list called "faster" without saying for what operation.
- Hash collision answers that store the item but never explain retrieval.
- Convex combination written without both conditions (non-negative, summing to 1).

## Self-test

1. State one advantage of a dynamic structure over a static one.
2. A circular queue has 6 slots (0–5) and rear = 5. Where is the next item added?
3. Which stack operation returns the top item without removing it?
4. Give one reason to prefer an adjacency matrix.
5. Find u · v for u = [2, −1, 3], v = [4, 0, 1].

**Answers:** 1. It only uses the memory it needs and can grow. 2. Slot (5 + 1) MOD 6 = 0, provided the queue is not full. 3. Peek (top). 4. Checking whether an edge exists is a single lookup, which suits a dense graph. 5. 8 + 0 + 3 = 11.

## Frequently asked questions

**What is an abstract data type?**
An abstract data type is defined by the operations that can be carried out on it, not by how it is stored.

**How does a circular queue reuse space?**
The rear pointer wraps round using rear ← (rear + 1) MOD maxSize, so slots freed at the front of the array can be used again. A linear queue wastes those freed slots.

**What is a convex combination of two vectors in AQA 7517?**
A convex combination of u and v is αu + βv where α and β are both at least 0 and α + β = 1. Answers that give only one of these conditions lose marks.

**How does AQA define a tree?**
A tree is a connected, undirected graph with no cycles. A binary tree is a rooted tree in which each node has at most two children.

## Official syllabus

AQA A-level Computer Science (7517) specification, 4.2 —
[aqa.org.uk](https://www.aqa.org.uk/subjects/computer-science/a-level/computer-science-7517/specification/subject-content).
