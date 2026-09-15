---
title: "A Level Computer Science: Procedural Programming — Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 1 – Procedural Programming"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 1
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "procedural-programming"
description: "Condensed recall notes on constructs, subroutines, scope, recursion, data structures and algorithm complexity for A Level Computer Science."
author: "marlbridge-academic-team"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Procedural Programming study guide](/resources/a-level-oxfordaqa-computer-science-procedural-programming/).

## Constructs and operators

Sequence, selection (`IF`, `CASE`), iteration (`FOR` count-controlled; `WHILE` condition tested **before**; `REPEAT UNTIL` tested **after**, so it always runs at least once).

```
DIV  17 DIV 5 = 3        MOD  17 MOD 5 = 2
```

`n MOD 2 = 0` tests for even; MOD also underpins hashing and check digits.

## Subroutines and scope

**Procedure** returns nothing; **function** returns a value.

- **Parameters** appear in the definition; **arguments** are the values passed.
- **By value** — a copy is passed; the original is unaffected.
- **By reference** — the address is passed; the original can be changed.
- **Local** variables exist only inside the subroutine; **global** variables are visible everywhere.

**Prefer local variables and pass by value.** The reason is what earns the mark: it prevents **side effects**, where one subroutine unintentionally alters data another depends on, and it makes each subroutine independently testable.

## Recursion

*A-level-only content (specification section 3.9.4.2, examined in Unit 3: Advanced Programming), kept here alongside the rest of procedural programming for convenience — not assessed at AS.*

Requires a **base case** that stops the recursion and a **general case** that moves towards it.

```
factorial(n):
    IF n = 0 THEN RETURN 1
    ELSE RETURN n * factorial(n - 1)
```

Each unfinished call is held on the **call stack** with its own local variables and return address. Without a base case, or with too deep a recursion, the stack overflows.

**Recursion versus iteration:** recursion is more elegant and natural for tree and divide-and-conquer problems, but uses more memory and is generally slower because of the stack overhead. Any recursive algorithm can be rewritten iteratively. The specification does not require candidates to distinguish the two, but permits either where a technique is called for — this is background understanding, not an assessed comparison in its own right.

## Data structures

**AS — fundamental data structures (section 3.2)**

| Structure | Behaviour | Typical use |
|---|---|---|
| **Array / list** | Indexed; one- or two-dimensional (lists of lists) | Lists of like items, tables |
| **Record** | Fields of **different** types handled as one entity | One entity with several attributes |
| **Stack** | **LIFO** — push, pop, peek | Call stack, undo, expression evaluation |
| **Queue** | **FIFO** — enqueue, dequeue; linear or circular in a 1-D array | Print spooling, scheduling, buffers |

**Static versus dynamic data structures** is the comparison the specification requires: a static structure (e.g. an array) has a fixed size set when created, giving fast **direct indexed access** but wasting space if under-filled and failing if it overflows; a dynamic structure grows and shrinks as the program runs, using memory efficiently, at the cost of managing that growth at run time.

**A-level only — advanced data structures (section 3.10, examined in Unit 3; not assessed at AS)**

| Structure | Behaviour | Typical use |
|---|---|---|
| **Graph** | Vertices and edges; adjacency matrix or list | Networks, routes |
| **Tree / binary search tree** | Connected, undirected graph with no cycles; a BST keeps an order | Fast search when balanced |
| **Hash table** | Key → position via a hash function (often using MOD) | Near-constant-time lookup |
| **Priority queue** | Items leave in priority order | Dijkstra's algorithm, scheduling |
| **Dictionary** | Key–value pairs, value accessed by key | Look-up tables |

**Hash collisions** occur when two keys compute the same hash. The specification's method is **rehashing**: the second record is stored in the next available position. A good hash function distributes records evenly and is quick to compute.

## Algorithms

*Searching and sorting are AS content (section 3.4). The Big O classification is A-level content (section 3.13.5, examined in Unit 4); the AS searching and sorting sub-sections state that formal comparisons using Big O notation will not be required at AS but may be required at A-level.*

**Searching**

| | Linear | Binary |
|---|---|---|
| Data | Any order | **Must be sorted** |
| Complexity *(A-level)* | O(n) | O(log n) |

**Sorting — the specification names two algorithms**

| Algorithm | What the specification asks | Complexity *(A-level)* |
|---|---|---|
| **Bubble sort** | Know and trace it; know that it can be made more efficient by checking one fewer item each pass and by stopping after a pass with no swaps. **You may be asked to write code for it.** | Worst O(n²), best O(n) |
| **Merge sort** | Know it and demonstrate how it operates on a data set. **You will not be asked to write code for it.** | O(n log n) |

At AS, compare the two on their **efficiency of use of time and memory** without Big O: bubble sort is slow on large lists but sorts in place and stops early on a nearly sorted list; merge sort is much faster on large lists but needs extra memory for the sub-lists.

**Big O describes how the running time grows with input size**, not the time itself. An O(n²) algorithm can beat an O(n log n) one on small inputs; the classification matters as n gets large.

**Traversals** *(A-level only, section 3.11, Unit 3):* breadth-first search uses a **queue**; depth-first uses a **stack** (or recursion). Binary tree traversals: in-order (which outputs a BST in ascending order), pre-order, post-order.

## Testing and errors

**Test data:** normal, **boundary** (on and just past the limits), erroneous. For a valid range of 1–100, test 0, 1, 100 **and** 101 — boundary values catch the off-by-one errors that are the most common bug.

**Errors:** syntax (will not run), logic (runs, wrong output, hardest to find), runtime (fails during execution).

**Strategies:** white box tests every path through the code; black box tests inputs against expected outputs without knowledge of the implementation; regression testing re-runs earlier tests after a change.

## Exam traps

- Saying WHILE always runs at least once.
- Omitting the base case when explaining recursion.
- Confusing a stack with a queue.
- Recommending binary search on unsorted data.
- Treating Big O as a measure of actual running time.
- Giving only normal test data.
- Defining pass by reference without explaining the side-effect risk.

## Self-test

1. Distinguish pass by value from pass by reference, and say which is safer and why.
2. *(A-level)* Why does recursion use more memory than iteration?
3. Compare a static data structure with a dynamic one.
4. *(A-level)* Which data structure does breadth-first traversal use, and which does depth-first use?
5. *(A-level)* What does Big O actually describe?

**Answers:** 1. By value passes a copy so the original is unchanged; by reference passes the address so the original can be modified. By value is safer as it avoids unintended side effects. 2. Every unfinished call remains on the call stack with its own local variables and return address until the base case is reached. 3. A static structure has a fixed size set when created, giving fast direct indexed access but wasting space if under-filled or failing if it overflows; a dynamic structure grows and shrinks as the program runs, using memory efficiently, but costs more to reach an arbitrary element. 4. Breadth-first uses a queue; depth-first uses a stack, or recursion. 5. How the running time or space requirement grows as the input size grows — not the actual execution time.
