---
title: "AQA A-Level Computer Science (7517): Queues"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of data structures"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 2.2
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-data-structures"
    subtopic: "queues-7517"
description: "Deeper guide to AQA 7517 section 4.2.2 Queues: add, remove, empty and full tests for linear, circular and priority queues, with algorithms and traces."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers **4.2.2 Queues** in AQA A-Level Computer Science (7517). The specification asks you to **describe and apply** four operations to **linear queues, circular queues and priority queues**: **add an item, remove an item, test for an empty queue and test for a full queue**. That is twelve combinations, and exam questions can ask you to describe, write or trace any of them.

The [abstract data types study guide](/resources/a-level-aqa-computer-science-abstract-data-types/) gives a summary of the three queue types with one circular example. This page writes out every operation for an array-based implementation, traces the same sequence of operations through a linear and a circular queue so that you can see the difference, and sets out two ways to build a priority queue.

Condensed notes are in the [queues revision notes](/resources/aqa-a-level-computer-science-7517-queues-revision-notes/), and exam-style questions are in the [queues practice questions](/resources/aqa-a-level-computer-science-7517-queues-practice/).

## The queue as an abstract data type

A **queue** is a first in, first out (**FIFO**) structure: items join at the **rear** and leave from the **front**, so the item removed is always the one that has waited longest. Uses include print queues, keyboard buffers that hold keystrokes until a program reads them, and processes waiting for the processor.

## Representation used on this page

AQA does not fix a pseudocode standard, so state your conventions in an answer. Here:

- `q` is an array of `maxSize` elements, indexed from 0;
- `front` holds the index of the item that will be removed next;
- `rear` holds the index of the item added most recently;
- `size` counts the items currently held.

On **creation**: `front ← 0`, `rear ← -1`, `size ← 0`.

## Linear queue

In a linear queue the pointers only ever move forward through the array.

```
SUBROUTINE IsEmpty()
    RETURN size = 0
ENDSUBROUTINE

SUBROUTINE IsFull()
    RETURN rear = maxSize - 1
ENDSUBROUTINE

SUBROUTINE EnQueue(item)
    IF IsFull() THEN
        OUTPUT "Queue full"
    ELSE
        rear ← rear + 1
        q[rear] ← item
        size ← size + 1
    ENDIF
ENDSUBROUTINE

SUBROUTINE DeQueue()
    IF IsEmpty() THEN
        OUTPUT "Queue empty"
    ELSE
        item ← q[front]
        front ← front + 1
        size ← size - 1
        RETURN item
    ENDIF
ENDSUBROUTINE
```

The full test checks whether `rear` has reached the **last index**, not whether `size = maxSize`. That is the weakness of a linear queue: once the rear reaches the end, nothing more can be added, even if items have been removed from the front and their slots are unused.

**Shuffling variant.** One fix is to move every remaining item forward one place after each removal, so the front is always at index 0. The full test then becomes `size = maxSize`, but every removal costs time proportional to the number of items, which is slow for a long queue.

## Circular queue

A circular queue treats the array as a ring: when a pointer passes the last index it **wraps round** to 0, so slots freed at the front are reused.

```
SUBROUTINE IsEmpty()
    RETURN size = 0
ENDSUBROUTINE

SUBROUTINE IsFull()
    RETURN size = maxSize
ENDSUBROUTINE

SUBROUTINE EnQueue(item)
    IF IsFull() THEN
        OUTPUT "Queue full"
    ELSE
        rear ← (rear + 1) MOD maxSize
        q[rear] ← item
        size ← size + 1
    ENDIF
ENDSUBROUTINE

SUBROUTINE DeQueue()
    IF IsEmpty() THEN
        OUTPUT "Queue empty"
    ELSE
        item ← q[front]
        front ← (front + 1) MOD maxSize
        size ← size - 1
        RETURN item
    ENDIF
ENDSUBROUTINE
```

**Why a size counter?** Without one, the pointers alone cannot distinguish full from empty: in both cases `(rear + 1) MOD maxSize = front`. The two standard solutions are a `size` variable (used here) or deliberately leaving one slot unused, so that a full queue and an empty queue leave the pointers in different positions. Either is acceptable if your algorithms are consistent.

## Worked example 1: the same operations, two queues

Array of 4 slots. Operations: add A, add B, add C, remove, remove, add K, add L, add M, add N.

**Circular queue**

| Operation | front | rear | size | q[0] q[1] q[2] q[3] | Result |
|---|---|---|---|---|---|
| Add A | 0 | 0 | 1 | A – – – | |
| Add B | 0 | 1 | 2 | A B – – | |
| Add C | 0 | 2 | 3 | A B C – | |
| Remove | 1 | 2 | 2 | A B C – | returns A |
| Remove | 2 | 2 | 1 | A B C – | returns B |
| Add K | 2 | 3 | 2 | A B C K | |
| Add L | 2 | 0 | 3 | L B C K | rear wraps: (3 + 1) MOD 4 = 0 |
| Add M | 2 | 1 | 4 | L M C K | |
| Add N | 2 | 1 | 4 | L M C K | full: size = 4 |

Removed items are not erased: A and B stay in the array until overwritten, but they are no longer part of the queue because they lie outside front to rear. The queue now holds C, K, L, M in that order.

**Linear queue** (same operations)

| Operation | front | rear | size | Result |
|---|---|---|---|---|
| Add A, B, C | 0 | 2 | 3 | |
| Remove, remove | 2 | 2 | 1 | returns A, then B |
| Add K | 2 | 3 | 2 | |
| Add L | 2 | 3 | 2 | full: rear = 3 = maxSize − 1 |
| Add M, add N | 2 | 3 | 2 | full each time |

The linear queue rejects L, M and N while holding only two items, with slots 0 and 1 unused. That comparison is the standard justification for circular queues.

## Priority queue

In a **priority queue** each item has a priority. The item with the **highest priority is removed first**; items with **equal priority leave in the order they arrived**. Two implementations are common.

**Method 1: keep the array in priority order when adding.** Items are held highest priority first in `data[0]` to `data[size − 1]`, with priorities in a parallel array `pri`. To add, start at the back and move every item of **lower** priority one place towards the rear until the correct position is found:

```
SUBROUTINE EnQueue(item, p)
    IF size = maxSize THEN
        OUTPUT "Queue full"
    ELSE
        i ← size - 1
        WHILE i >= 0 AND pri[i] < p
            data[i + 1] ← data[i]
            pri[i + 1] ← pri[i]
            i ← i - 1
        ENDWHILE
        data[i + 1] ← item
        pri[i + 1] ← p
        size ← size + 1
    ENDIF
ENDSUBROUTINE
```

The comparison is strictly `<`, so a new item stops **behind** existing items of the same priority, keeping arrival order. Removal takes `data[0]`; in this simple version the remaining items are then moved forward one place.

**Worked example 2.** Larger numbers mean higher priority. Add (print, 2), (save, 5), (email, 2), (backup, 5):

| After adding | Queue, front first |
|---|---|
| (print, 2) | print 2 |
| (save, 5) | save 5, print 2 |
| (email, 2) | save 5, print 2, email 2 |
| (backup, 5) | save 5, backup 5, print 2, email 2 |

Removals now return save, backup, print, email in that order.

**Method 2: add at the rear, search when removing.** Adding is a normal linear or circular add. Removing scans the whole queue for the highest priority, taking the **first** such item found from the front so that arrival order is kept, then closes the gap. Adding is fast and removing is slow; method 1 is the reverse.

The empty and full tests for a priority queue are the same as for the underlying queue: `size = 0` and `size = maxSize`.

## Common mistakes

- Testing a linear queue for full with `size = maxSize`; unless items are shuffled forward, the test is `rear = maxSize - 1`.
- Forgetting MOD in a circular queue, so the pointer runs off the end of the array.
- Updating the pointer after storing the item in EnQueue (with `rear` starting at −1, increment first).
- Thinking removed items are deleted from the array; only the pointer moves.
- Using `≤` when inserting into a priority queue, which places a new item ahead of earlier items of equal priority.
- Omitting the empty test before removing or the full test before adding.

## Exam technique

- **Describe** an operation: test first (full or empty), then the pointer change, then the data movement, then the counter.
- **Trace**: keep columns for front, rear, size and every array slot; recompute each MOD.
- **Explain why circular is better**: freed slots are reused, so the queue is not reported full while space is available, and no items are moved.
- **Write** an algorithm: state your initial pointer values and keep every subroutine consistent with them.

## Related resources

- [Queues revision notes](/resources/aqa-a-level-computer-science-7517-queues-revision-notes/)
- [Queues practice questions](/resources/aqa-a-level-computer-science-7517-queues-practice/)
- [Stacks study guide](/resources/aqa-a-level-computer-science-7517-stacks/)
- [Abstract data types study guide for 4.2.1.4](/resources/aqa-a-level-computer-science-7517-abstract-data-types-data-structures/)

*Written against the AQA A-level Computer Science (7517) specification, 4.2.2 Queues. Always check the current specification on the AQA website.*
