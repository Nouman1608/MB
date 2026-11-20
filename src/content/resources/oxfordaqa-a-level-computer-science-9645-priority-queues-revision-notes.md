---
title: "OxfordAQA A-Level Computer Science (9645): Priority Queues -- Revision Notes"
seoTitle: "OxfordAQA A-Level CS 9645 Priority Queues Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 10 – Advanced data structures"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 10.4
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "advanced-data-structures"
  - qualification: "a-level"
    topic: "advanced-data-structures"
    subtopic: "priority-queues-oxfordaqa-alevel-cs"
description: "Recall notes for OxfordAQA 9645 sub-topic 3.10.4 Priority Queues: enqueue and dequeue, uses, ordered and unordered array designs, empty and full tests, self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

These notes condense sub-topic **3.10.4 Priority Queues** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1 (A-level content in topic 3.10 Advanced data structures). For explanations, code and traces, see the [priority queues study guide](/resources/oxfordaqa-a-level-computer-science-9645-priority-queues/); then practise with the [priority queues practice questions](/resources/oxfordaqa-a-level-computer-science-9645-priority-queues-practice/). Code is Python.

## What the specification requires

- Know **what a priority queue is**.
- Apply **enqueue** (add an item) and **dequeue** (remove an item).
- Describe **situations** in which it is appropriate. (Priority queues can be used to implement graph algorithms such as breadth-first search and Dijkstra's algorithm.)
- Understand how to **implement** one using a **one-dimensional array**.
- For array implementations, **test whether it is empty or full**.

## Key terms

| Term | Meaning |
|---|---|
| Priority queue | A queue in which the item with the highest priority leaves first |
| Priority | A value attached to an item that says how urgent it is |
| Enqueue | Add an item with its priority |
| Dequeue | Remove and return the item with the highest priority |
| Capacity | The length of the array |
| Count | The number of items currently stored |

**Convention in these notes:** a smaller number means a higher priority. A question will state its own convention, so read it.

## How it differs from an ordinary queue

| | Ordinary queue | Priority queue |
|---|---|---|
| Leaves next | The oldest item | The highest priority item |
| Equal priority | n/a | The oldest of the equal items first |

## Two array designs

| | Design 1: ordered array | Design 2: unordered array |
|---|---|---|
| Enqueue | Find the place after items of equal or higher priority, shift the rest right, insert | Put at the next free position |
| Dequeue | Take index 0, shift the rest left | Scan for the highest priority (first one if tied), remove it, close the gap |
| Work done | When adding | When removing |
| Good when | Removal is frequent | Adding is frequent |

## Empty and full tests

- Empty: `count == 0`.
- Full: `count == capacity`.
- Check **before** each operation: refuse a dequeue from an empty queue and an enqueue into a full one.

## Worked reminder: ordered array, capacity 4

Priority 1 is highest. Entries are shown as priority:item.

| Operation | Result | Array |
|---|---|---|
| enqueue 2:B | True | 2:B, -, -, - |
| enqueue 5:E | True | 2:B, 5:E, -, - |
| enqueue 1:A | True | 1:A, 2:B, 5:E, - |
| enqueue 2:C | True | 1:A, 2:B, 2:C, 5:E |
| enqueue 4:X | False (full) | unchanged |
| dequeue | 1:A | 2:B, 2:C, 5:E, - |
| enqueue 3:D | True | 2:B, 2:C, 3:D, 5:E |
| dequeue | 2:B | 2:C, 3:D, 5:E, - |

`2:C` goes after `2:B` because it arrived later.

## When a priority queue fits

| Situation | Why priority order matters |
|---|---|
| Operating system scheduling | Urgent processes must get the processor first |
| Emergency department triage | The most serious patient is treated first, not the first to arrive |
| Print queue with urgent jobs | An urgent job goes ahead of a routine one |
| Event and interrupt handling | An alarm outranks a keystroke |
| Dijkstra's algorithm | The next vertex is the one with the smallest distance so far |

## Enqueue and dequeue in words (ordered array)

**Enqueue(priority, item)**

1. If the queue is full, stop and report that it is full.
2. Start at index 0 and move along while the entry there has a priority less than or equal to the new priority.
3. Shift every entry from that position onwards one place to the right.
4. Store the new entry in the gap.
5. Add 1 to the count.

**Dequeue**

1. If the queue is empty, stop and report that it is empty.
2. Take the entry at index 0.
3. Shift every other entry one place to the left.
4. Take 1 from the count and return the entry.

## Worked reminder: unordered array

Add 4:P, 2:Q, 4:R, 2:S in that order. The array is 4:P, 2:Q, 4:R, 2:S.

| Dequeue | Entry chosen | Array afterwards |
|---|---|---|
| 1 | 2:Q (the first of the 2s) | 4:P, 4:R, 2:S |
| 2 | 2:S | 4:P, 4:R |
| 3 | 4:P (the first 4) | 4:R |
| 4 | 4:R | empty |

Choosing the **first** entry found with the best priority keeps equal items in arrival order, as long as the gap left by each removal is closed up.

## Code for the tests

```python
def is_empty(self):
    return self.count == 0

def is_full(self):
    return self.count == self.capacity
```

## Comparing the work done

| Operation | Ordered array | Unordered array |
|---|---|---|
| Enqueue | Search for the place and shift entries | One assignment at the next free position |
| Dequeue | Take index 0 and shift the rest left | Scan every entry for the best priority, then close the gap |

If a program adds items far more often than it removes them, the unordered design wastes less effort. If it removes items constantly, the ordered design keeps the next item ready at the front.

## Tracing technique

1. Write the convention at the top (smaller number = higher priority).
2. Draw one row per operation with a column for the result and one for the array.
3. For an enqueue, place the new entry after every entry of equal or higher priority.
4. For a dequeue, remove index 0 (ordered) and close the gap.
5. Before each operation, check the count against 0 and the capacity.
6. Write "refused" in the result column if the check fails.

## Exam traps

- **Not first in, first out.** Priority decides, with arrival time only breaking ties.
- **Ties.** Equal priorities leave in arrival order.
- **Shifting.** An ordered array needs items moved when inserting or removing.
- **Full test.** `count == capacity`, not `capacity - 1`.
- **Convention.** Check whether a large or small number is the high priority.
- **Giving a use without a reason.** Say why the priority order matters.

## Quick self-test

1. What is a priority queue?
2. Which item does dequeue return?
3. What happens to two items of equal priority?
4. State the test for an empty array queue.
5. State the test for a full array queue.
6. What is the main difference between the ordered and unordered designs?
7. In the ordered design, where is the highest priority item?
8. Give one situation where a priority queue is appropriate, with a reason.
9. In the capacity 4 example, why did enqueue 4:X fail?
10. Which graph algorithm uses a priority queue to pick the next vertex?
11. What must you do before dequeuing?
12. Why does inserting into an ordered array involve shifting?

### Answers

1. A queue in which the item with the highest priority is removed first.
2. The item with the highest priority.
3. They leave in the order they arrived.
4. `count == 0`.
5. `count == capacity`.
6. The ordered design does its work when adding; the unordered design does it when removing.
7. At index 0 (the front).
8. For example, emergency department triage: the most serious patient must be treated before others who arrived earlier.
9. The queue was full: count was equal to capacity (4).
10. Dijkstra's algorithm (also breadth-first search is mentioned in the specification).
11. Check that the queue is not empty.
12. To make room for the new item in the correct place, the items after it must move along by one position.

## Next steps

- [Priority queues study guide](/resources/oxfordaqa-a-level-computer-science-9645-priority-queues/)
- [Priority queues practice questions](/resources/oxfordaqa-a-level-computer-science-9645-priority-queues-practice/)
- [Dictionaries revision notes](/resources/oxfordaqa-a-level-computer-science-9645-dictionaries-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.10.4 Priority Queues.
