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

Requires a **base case** that stops the recursion and a **general case** that moves towards it.

```
factorial(n):
    IF n = 0 THEN RETURN 1
    ELSE RETURN n * factorial(n - 1)
```

Each unfinished call is held on the **call stack** with its own local variables and return address. Without a base case, or with too deep a recursion, the stack overflows.

**Recursion versus iteration:** recursion is more elegant and natural for tree and divide-and-conquer problems, but uses more memory and is generally slower because of the stack overhead. Any recursive algorithm can be rewritten iteratively.

## Data structures

| Structure | Behaviour | Typical use |
|---|---|---|
| **Array** | Fixed size, same type, indexed | Lists of like items |
| **Record** | Fields of **different** types | One entity with several attributes |
| **Stack** | **LIFO** — push, pop, peek | Call stack, undo, expression evaluation |
| **Queue** | **FIFO** — enqueue, dequeue | Print spooling, scheduling, buffers |
| **Linked list** | Nodes with pointers | Frequent insertion and deletion |
| **Binary search tree** | Ordered hierarchy | Fast search when balanced |
| **Hash table** | Key → index via hash function | Near-constant-time lookup |
| **Graph** | Nodes and edges | Networks, routes |

**Array versus linked list** is the standard comparison: an array gives **direct indexed access** but is fixed in size and costly to insert into; a linked list grows dynamically and inserts cheaply but must be **traversed** from the start to reach an element.

**Hash collisions** are handled by chaining (a linked list at each index) or open addressing (probing for the next free slot). A good hash function distributes keys evenly to minimise them.

## Algorithms

**Searching**

| | Linear | Binary |
|---|---|---|
| Data | Any order | **Must be sorted** |
| Complexity | O(n) | O(log n) |

**Sorting**

| Algorithm | Complexity | Note |
|---|---|---|
| **Bubble** | O(n²) | Simple, slow |
| **Insertion** | O(n²) | Efficient on nearly sorted data |
| **Merge** | O(n log n) | Divide and conquer; needs extra memory |
| **Quick** | O(n log n) average, O(n²) worst | In place; worst case on poor pivot choice |

**Big O describes how the running time grows with input size**, not the time itself. An O(n²) algorithm can beat an O(n log n) one on small inputs; the classification matters as n gets large.

**Traversals:** breadth-first uses a **queue**; depth-first uses a **stack** (or recursion). Binary tree traversals: in-order (which outputs a BST in sorted order), pre-order, post-order.

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
2. Why does recursion use more memory than iteration?
3. Compare an array with a linked list.
4. Which data structure does breadth-first traversal use, and which does depth-first use?
5. What does Big O actually describe?

**Answers:** 1. By value passes a copy so the original is unchanged; by reference passes the address so the original can be modified. By value is safer as it avoids unintended side effects. 2. Every unfinished call remains on the call stack with its own local variables and return address until the base case is reached. 3. An array offers direct indexed access but has fixed size and costly insertion; a linked list grows dynamically and inserts cheaply but must be traversed sequentially to reach an element. 4. Breadth-first uses a queue; depth-first uses a stack, or recursion. 5. How the running time or space requirement grows as the input size grows — not the actual execution time.
