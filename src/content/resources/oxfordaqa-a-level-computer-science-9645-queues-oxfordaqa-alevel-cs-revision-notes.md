---
title: "OxfordAQA A-Level Computer Science (9645): Queues -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 2 – Fundamental data structures"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 2.3
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamental-data-structures"
    subtopic: "queues-oxfordaqa-alevel-cs"
description: "Recall notes for OxfordAQA 9645 sub-topic 3.2.3 Queues: FIFO, pointer conventions, empty and full tests, circular wrap, library methods and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense sub-topic **3.2.3 Queues** of OxfordAQA International AS and A-level Computer Science
(9645), Version 1.1 (AS content in topic 3.2 Fundamental data structures). For explanations, code and full
traces, see the [queues study guide](/resources/oxfordaqa-a-level-computer-science-9645-queues-oxfordaqa-alevel-cs/);
then practise with the
[queues practice questions](/resources/oxfordaqa-a-level-computer-science-9645-queues-oxfordaqa-alevel-cs-practice/).

## What the specification requires

- A queue is a **first-in first-out (FIFO)** structure.
- Apply **enqueue** (add) and **dequeue** (remove).
- Describe situations where a queue is **appropriate**.
- Implement a **linear** and a **circular** queue in a **one-dimensional array**.
- Test whether an array queue is **empty** or **full**.
- Use a **library** implementation of a queue.

## Key terms

| Term | Meaning |
|---|---|
| FIFO | The first item added is the first removed |
| Front | The end items are removed from |
| Rear | The end items are added at |
| Enqueue | Add an item at the rear |
| Dequeue | Remove and return the item at the front |
| Linear queue | Array queue whose pointers never wrap round |
| Circular queue | Array queue whose pointers wrap to index 0 using MOD |
| Buffer | Temporary store that holds data in arrival order until it can be processed |
| Overflow / underflow | Enqueue on a full queue / dequeue on an empty queue |

## Array implementations compared

| Version | Empty test | Full test | Weakness |
|---|---|---|---|
| Linear, moving front (front = 0, rear = −1) | rear < front | rear = size − 1 | Space at the start is wasted after dequeues |
| Linear, shuffling (front fixed at 0, rear = −1) | rear = −1 | rear = size − 1 | Each dequeue moves every remaining item |
| Circular with count | count = 0 | count = size | Needs an extra variable |
| Circular, one slot spare (front = rear = 0, rear = next free) | front = rear | (rear + 1) MOD size = front | Holds only size − 1 items |

**Always use the convention the question gives.** Read the starting values of the pointers before
tracing.

## Circular pointer arithmetic

```
pointer ← (pointer + 1) MOD size
```

Size 5: 3 → 4 → 0 → 1. Without MOD, the pointer runs off the end of the array.

Logical contents of a circular queue: start at `front`, move forward with wrap, stop before `rear` (or after
`count` items). Values left in the array outside that range are **not** in the queue.

## When a queue fits

| Situation | Why FIFO matters |
|---|---|
| Print jobs to one printer | Jobs are served fairly in the order sent |
| Keyboard buffer | Keys must be processed in the order typed |
| Processes waiting for a processor | Each waits its turn |
| Packets waiting to be sent | Data must not be reordered |
| Checkout simulation | Models first-come, first-served |

## Library methods

| Library | Add | Remove | Watch out for |
|---|---|---|---|
| Python `collections.deque` | `append` | `popleft` | `IndexError` when empty; `maxlen` discards the oldest item silently |
| Python `queue.Queue` | `put` | `get` | `get` waits when empty; `put_nowait` raises `queue.Full` |
| C# `Queue<T>` | `Enqueue` | `Dequeue` | `InvalidOperationException` when empty; `Peek` reads the front |

## Exam traps

- **Wrong end.** Dequeue is always from the front.
- **Check first.** Test full or empty before changing a pointer.
- **Linear full test in a circular queue.** `rear = size − 1` does not mean full once the pointers wrap.
- **Reading the array left to right.** Read from `front`, wrapping round.
- **Mixed conventions.** Decide whether `rear` is the last item or the next free slot, and stick to it.
- **Library `pop()`.** On a deque, `pop()` removes from the right (the rear), which breaks FIFO.

## Quick self-test

1. What does FIFO stand for?
2. At which end does enqueue add an item?
3. Give the full test for a circular queue that uses a count.
4. In a size-6 circular queue, `rear` is 5. Where does the next item go?
5. Why does a linear moving-front queue report full when it is not?
6. What is the disadvantage of the shuffling linear queue?
7. Why does the "one slot spare" circular queue never fill its last slot?
8. Give one situation where a queue is appropriate, with a reason.
9. Which `deque` method removes from the front?
10. What happens if you call `Dequeue()` on an empty C# `Queue<T>`?
11. A circular queue of size 4 has front = 3 and count = 2. Which indexes hold the items?
12. What is a buffer?

### Answers

1. First in, first out.
2. The rear.
3. count = size.
4. Index 0, because (5 + 1) MOD 6 = 0.
5. `rear` has reached the last index even though dequeued slots at the start are free.
6. Every dequeue moves all remaining items, so it is slow for large queues.
7. So that front = rear can only mean empty, not full.
8. Print jobs: they should be printed in the order they were sent (or any valid example with reason).
9. `popleft()`
10. It throws an `InvalidOperationException`.
11. Indexes 3 and 0.
12. A temporary store that holds data in arrival order until it can be processed.

## Next steps

- [Queues study guide](/resources/oxfordaqa-a-level-computer-science-9645-queues-oxfordaqa-alevel-cs/)
- [Queues practice questions](/resources/oxfordaqa-a-level-computer-science-9645-queues-oxfordaqa-alevel-cs-practice/)
- [Stacks revision notes](/resources/oxfordaqa-a-level-computer-science-9645-stacks-oxfordaqa-alevel-cs-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS
exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.2.3 Queues.
