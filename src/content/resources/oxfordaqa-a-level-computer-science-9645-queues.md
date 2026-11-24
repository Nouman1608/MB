---
title: "OxfordAQA A-Level Computer Science (9645): Queues"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.2.3 in depth: FIFO queues, shuffling and circular array queues, empty and full tests, traces and Python and C# libraries."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide covers sub-topic **3.2.3 Queues** of OxfordAQA International AS and A-level Computer Science
(9645), Version 1.1, in topic 3.2 Fundamental data structures (AS). The specification asks you to understand
that "a queue is a first-in first-out (FIFO) data structure", to apply **enqueue** and **dequeue**, to
describe situations where a queue is appropriate, to implement a **linear** and a **circular** queue in a
one-dimensional array, to test whether such a queue is **empty or full**, and to have used a language
library that implements a queue.

For quick recall use the [queues revision notes](/resources/oxfordaqa-a-level-computer-science-9645-queues-revision-notes/),
and test yourself with the [queues practice questions](/resources/oxfordaqa-a-level-computer-science-9645-queues-practice/).
The [records, queues and stacks study guide](/resources/a-level-oxfordaqa-computer-science-records-queues-and-stacks/)
shows the standard count-based array queues; this page adds two further implementations, longer traces and
library behaviour you need to know.

## FIFO and the two pointers

A queue has two ends. Items join at the **rear** and leave from the **front**, so they leave in the order
they arrived. Any array implementation needs to know where the front item is and where the next item will
go; the different implementations differ only in how they track those two positions.

| Implementation | Front | Rear | Cost of dequeue |
|---|---|---|---|
| Linear, moving front | Pointer moves forward | Pointer moves forward | Constant |
| Linear, shuffling | Always index 0 | Pointer | Grows with the number of items |
| Circular | Pointer wraps with MOD | Pointer wraps with MOD | Constant |

## Describing when a queue is appropriate

A good answer names the situation **and** the reason that FIFO order is needed.

- **Several requests share one resource** and should be served fairly in arrival order: print jobs sent to
  one printer, or processes waiting for the processor.
- **Data arrives faster than it can be processed** and must not be reordered: keystrokes held in a keyboard
  buffer, or data packets waiting to be sent. Here the queue acts as a **buffer**.
- **Simulating real waiting lines**, such as customers at checkouts, where the model must reproduce
  first-come, first-served behaviour.

"A queue is used for printing" alone is a situation without a reason, and usually earns half the credit.

## Implementation 1: a linear queue that shuffles

In this version the front item is **always at index 0**. Dequeue removes it and moves every other item one
place forward, so no space is wasted.

```python
class ShuffleQueue:
    def __init__(self, capacity):
        self.data = [None] * capacity
        self.capacity = capacity
        self.rear = -1                      # front is always index 0

    def is_empty(self):
        return self.rear == -1

    def is_full(self):
        return self.rear == self.capacity - 1

    def enqueue(self, item):
        if self.is_full():
            return False
        self.rear = self.rear + 1
        self.data[self.rear] = item
        return True

    def dequeue(self):
        if self.is_empty():
            return None
        item = self.data[0]
        for i in range(self.rear):          # move each item one place forward
            self.data[i] = self.data[i + 1]
        self.data[self.rear] = None
        self.rear = self.rear - 1
        return item
```

With capacity 3, after enqueuing A, B and C the queue is full and enqueue D returns `False`. Dequeue
returns A and shuffles B and C to indexes 0 and 1, setting `rear` to 1; enqueue D then succeeds.

The trade-off: this queue never reports full while space is free, but every dequeue moves up to
`capacity − 1` items, which is slow for a large queue.

## Implementation 2: a circular queue with one spare slot

The circular queue on the broader guide keeps a `count`. A common alternative uses only `front` and
`rear`, with `rear` holding the index of the **next free** slot. Without a count there is a problem: if
`front == rear` could mean both "empty" and "full", the tests would be ambiguous. The fix is to **never fill
the last slot**, so an array of size *n* holds at most *n* − 1 items.

```python
class RingQueue:
    def __init__(self, capacity):
        self.size = capacity + 1            # one slot is always left empty
        self.data = [None] * self.size
        self.front = 0
        self.rear = 0                       # index of the next free slot

    def is_empty(self):
        return self.front == self.rear

    def is_full(self):
        return (self.rear + 1) % self.size == self.front

    def enqueue(self, item):
        if self.is_full():
            return False
        self.data[self.rear] = item
        self.rear = (self.rear + 1) % self.size
        return True

    def dequeue(self):
        if self.is_empty():
            return None
        item = self.data[self.front]
        self.front = (self.front + 1) % self.size
        return item
```

### Worked example: tracing the ring queue

*`RingQueue(3)` gives an array of size 4. Trace: enqueue P, Q, R, S; dequeue twice; enqueue T, V, W.*

| Operation | Returns | front | rear | Array (index 0 to 3) |
|---|---|---|---|---|
| start | | 0 | 0 | –, –, –, – |
| enqueue P | True | 0 | 1 | P, –, –, – |
| enqueue Q | True | 0 | 2 | P, Q, –, – |
| enqueue R | True | 0 | 3 | P, Q, R, – |
| enqueue S | False (full: (3 + 1) MOD 4 = 0 = front) | 0 | 3 | P, Q, R, – |
| dequeue | P | 1 | 3 | P, Q, R, – |
| dequeue | Q | 2 | 3 | P, Q, R, – |
| enqueue T | True | 2 | 0 | P, Q, R, T |
| enqueue V | True | 2 | 1 | V, Q, R, T |
| enqueue W | False (full: (1 + 1) MOD 4 = 2 = front) | 2 | 1 | V, Q, R, T |

Two points the trace makes visible:

- **Dequeued values stay in the array.** P and Q are still stored after they leave; they are outside the
  logical queue, which runs from `front` up to (not including) `rear`. V later overwrites P.
- **The logical contents at the end are R, T, V**, in that order, even though the array reads V, Q, R, T.
  Always read a circular queue from `front`, wrapping round.

## Using a library queue

The specification expects experience of a library implementation. Know these behaviours, because they
differ from a hand-made array queue.

| Library | Enqueue | Dequeue | Empty / full behaviour |
|---|---|---|---|
| Python `collections.deque` | `append(x)` | `popleft()` | `popleft()` on an empty deque raises `IndexError`; with `maxlen` set, appending to a full deque silently **discards an item from the front** |
| Python `queue.Queue(maxsize=n)` | `put(x)` | `get()` | `empty()` and `full()` methods; `put_nowait` raises `queue.Full`; `get()` waits if empty |
| C# `Queue<T>` | `Enqueue(x)` | `Dequeue()` | `Count` property; `Dequeue()` on an empty queue throws `InvalidOperationException`; `Peek()` reads the front |

The `maxlen` behaviour is a trap: a deque created with `deque(maxlen=3)` that receives A, B, C, D keeps B, C,
D. That suits a "last three readings" buffer but is wrong for print jobs, where nothing may be lost.

## Exam technique

- **Trace:** draw a table with a column for every pointer and for the array; update one row per operation.
- **Explain a full test:** state the condition and what it means, for example "`count` equals the array
  size, so every slot holds a queued item".
- **Write code:** check empty or full **before** changing anything, and update pointers in the right order
  for the convention used in the question.
- **Compare implementations:** linear queues are simple but waste space or time; circular queues reuse
  space with constant-time operations but need MOD arithmetic.

## Common mistakes

- Removing from the rear, or adding at the front.
- Testing for full with `rear == size − 1` in a circular queue.
- Forgetting MOD when advancing a pointer, causing an index error.
- Reading the circular array left to right instead of from `front`.
- Mixing conventions: `rear` as "last item" in one method and "next free slot" in another.

## More on this topic

- [Queues revision notes](/resources/oxfordaqa-a-level-computer-science-9645-queues-revision-notes/)
- [Queues practice questions](/resources/oxfordaqa-a-level-computer-science-9645-queues-practice/)
- [Stacks study guide](/resources/oxfordaqa-a-level-computer-science-9645-stacks/)
- [Records study guide](/resources/oxfordaqa-a-level-computer-science-9645-records/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS
exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.2.3 Queues.
