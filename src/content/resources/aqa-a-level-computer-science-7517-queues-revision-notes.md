---
title: "AQA A-Level Computer Science (7517): Queues -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed AQA 7517 section 4.2.2 recall: linear, circular and priority queue operations, empty and full tests, pointer rules, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

Condensed recall for **4.2.2 Queues**, AQA A-Level Computer Science (7517): add an item, remove an item, test for empty and test for full, for **linear, circular and priority** queues. Full algorithms and side-by-side traces are in the [queues study guide](/resources/aqa-a-level-computer-science-7517-queues/); exam-style questions are in the [queues practice questions](/resources/aqa-a-level-computer-science-7517-queues-practice/).

## The queue rule

**FIFO**: first in, first out. Add at the **rear**, remove from the **front**. Uses: print queues, keyboard buffers, processes waiting for the processor.

## Array representation

```
q[0 … maxSize-1]   the items
front              index of the next item to remove
rear               index of the item added most recently
size               number of items held

creation:  front ← 0   rear ← -1   size ← 0
```

State your own starting values in an answer, and keep every operation consistent with them.

## The twelve operations at a glance

| | Add | Remove | Empty test | Full test |
|---|---|---|---|---|
| Linear | Full test; rear ← rear + 1; store; size + 1 | Empty test; read q[front]; front ← front + 1; size − 1 | size = 0 | rear = maxSize − 1 |
| Circular | Full test; rear ← (rear + 1) MOD maxSize; store; size + 1 | Empty test; read q[front]; front ← (front + 1) MOD maxSize; size − 1 | size = 0 | size = maxSize |
| Priority (kept in order) | Full test; shift lower-priority items back; insert behind equal priorities; size + 1 | Empty test; take the front item | size = 0 | size = maxSize |

## Linear queue facts

- Pointers only move forward.
- Can report **full while slots at the front are free**.
- **Shuffling** remaining items forward after each removal fixes this, but every removal then takes time proportional to the queue length.

## Circular queue facts

- The array is treated as a ring; pointers wrap with **MOD maxSize**.
- Freed slots are reused; no items are moved.
- Pointers alone cannot tell full from empty: use a **size** counter or leave **one slot unused**.

**Wrap check:** maxSize 5, rear = 4. Add: rear ← (4 + 1) MOD 5 = 0.

**Trace check:** circular queue of 4 slots; add A, B, C; remove twice (A, then B); add K, L, M. Now front = 2, rear = 1, size = 4, and the queue holds C, K, L, M. A further add is rejected. The same operations on a linear queue fail at L, with only two items held.

## Priority queue facts

- Highest priority removed first; **equal priorities leave in arrival order**.
- **Method 1:** keep items ordered on adding (insert with a strict `<` comparison so a new item goes behind equal priorities). Fast removal, slower adding.
- **Method 2:** add at the rear; on removal, scan for the first item with the highest priority. Fast adding, slower removal.

**Example:** add (print, 2), (save, 5), (email, 2), (backup, 5) → front first: save 5, backup 5, print 2, email 2.

## What DeQueue does not do

It does **not** erase the slot. It moves `front` and reduces `size`; the old value stays until overwritten but lies outside the queue.

## Key terms

| Term | Definition |
|---|---|
| Queue | FIFO abstract data type: add at the rear, remove from the front |
| Front pointer | Index of the next item to be removed |
| Rear pointer | Index of the most recently added item |
| Linear queue | Queue whose pointers only move forward through the array |
| Circular queue | Queue whose pointers wrap from the last index to the first, reusing slots |
| Priority queue | Queue where the highest-priority item is removed first, equal priorities in arrival order |
| Overflow | Attempting to add to a full queue |
| Underflow | Attempting to remove from an empty queue |

## Exam traps

- **No MOD** in a circular queue: the pointer runs off the end.
- **Wrong full test** for a linear queue: it is `rear = maxSize - 1`, not `size = maxSize`, unless items are shuffled.
- **Order inside EnQueue**: with rear starting at −1, move the pointer first, then store.
- **Order inside DeQueue**: read `q[front]` before moving front.
- **Equal priorities**: arrival order must be kept.
- **Empty and full tests** must come before remove and add.

## Self-test

1. What does FIFO stand for?
2. Give the creation values of front, rear and size used above.
3. Write the line that advances rear in a circular queue.
4. Give the full test for a circular queue with a size counter.
5. Why can a linear queue report full when it is not?
6. What is the cost of fixing that by shuffling?
7. Why are pointers alone not enough to tell full from empty in a circular queue?
8. In a circular queue of 6 slots, front = 4 and size = 3. Which indices are occupied?
9. In a priority queue, what decides the order of two items with the same priority?
10. In method 1, why is the comparison `<` rather than `≤`?
11. What happens to the value in a slot when its item is removed?
12. Name one use of a queue.

**Answers**

1. First in, first out.
2. front = 0, rear = −1, size = 0.
3. `rear ← (rear + 1) MOD maxSize`.
4. size = maxSize.
5. Its rear pointer has reached the last index; slots freed at the front cannot be reused.
6. Every removal moves all remaining items, so removal time grows with the length of the queue.
7. In both states `(rear + 1) MOD maxSize = front`.
8. 4, 5 and 0.
9. Arrival order: the earlier item leaves first.
10. So a new item stops behind items of equal priority that arrived earlier.
11. It stays in the array until overwritten, but it is no longer part of the queue.
12. Any one: print queue; keyboard buffer; processes waiting for the processor.

## More resources on this topic

- [Queues study guide](/resources/aqa-a-level-computer-science-7517-queues/)
- [Queues practice questions](/resources/aqa-a-level-computer-science-7517-queues-practice/)
- [Stacks revision notes](/resources/aqa-a-level-computer-science-7517-stacks-revision-notes/)
- [Abstract data types revision notes for 4.2.1.4](/resources/aqa-a-level-computer-science-7517-abstract-data-types-data-structures-revision-notes/)
