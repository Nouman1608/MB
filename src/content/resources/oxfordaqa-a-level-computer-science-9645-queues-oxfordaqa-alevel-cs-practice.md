---
title: "OxfordAQA A-Level Computer Science (9645): Queues -- Practice Questions"
resourceType: "practice-questions"
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
description: "Twelve original OxfordAQA 9645 questions on sub-topic 3.2.3 Queues: linear and circular traces, empty and full tests and library queues, with full answers."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions practise sub-topic **3.2.3 Queues** of OxfordAQA International AS and A-level Computer
Science (9645), Version 1.1: FIFO behaviour, enqueue and dequeue, appropriate uses, linear and circular
queues in a one-dimensional array with empty and full tests, and library queues. Code is Python. Array
indexes start at 0.

Related pages: [queues study guide](/resources/oxfordaqa-a-level-computer-science-9645-queues-oxfordaqa-alevel-cs/) ·
[queues revision notes](/resources/oxfordaqa-a-level-computer-science-9645-queues-oxfordaqa-alevel-cs-revision-notes/) ·
[records, queues and stacks practice questions](/resources/oxfordaqa-a-level-computer-science-records-queues-stacks-practice/)

## Section A

**1.** State what FIFO means and name the operation that removes an item from a queue. **[2]**

**2.** Explain why a keyboard buffer is implemented as a queue rather than a stack. **[2]**

**3.** A circular queue of size 5 uses `front`, `rear` and `count`. Currently `front` = 3, `rear` = 1 and
`count` = 4.

**(a)** List the indexes that hold queued items, in queue order. **[1]**
**(b)** State the index where the next enqueued item will be stored. **[1]**
**(c)** State whether the queue is full, with a reason. **[1]**

**4.** **(a)** Name the method of Python's `collections.deque` that removes an item from the front. **[1]**
**(b)** A deque is created with `deque(maxlen=4)`. State what happens when a fifth item is appended. **[1]**

## Section B

**5.** A linear queue of size 5 starts with `front` = 0 and `rear` = −1. Enqueue increments `rear` then
stores the item; dequeue returns the item at `front` then increments `front`. The queue is full when
`rear` = size − 1.

Operations: enqueue 8, enqueue 3, enqueue 6, dequeue, enqueue 1, enqueue 9, dequeue, enqueue 4.

Give the two values dequeued, the final values of `front` and `rear`, and state what happens to the last
operation and why. **[4]**

**6.** Repeat the operations in question 5 on a **circular** queue of size 5 that starts with `front` = 0,
`rear` = −1 and `count` = 0, and is full when `count` = size. Give the final contents of the array (index 0
to 4) and the final values of `front`, `rear` and `count`. **[4]**

**7.** A circular queue leaves one slot empty. It has attributes `self.front`, `self.rear` (the index of the
next free slot) and `self.size` (the array length).

**(a)** Write the methods `is_empty` and `is_full`. **[2]**
**(b)** Explain why one slot must always be left empty in this design. **[2]**

**8.** For the queue in question 7, write a Python function `queue_length(front, rear, size)` that returns
the number of items in the queue, including when the pointers have wrapped round. **[3]**

**9.** Write Python code that uses `collections.deque` to model a print queue. It should add the jobs
"report.pdf", "photo.png" and "notes.txt", then repeatedly remove and display the next job until the
queue is empty. **[4]**

**10.** Compare a linear queue that shuffles items forward on each dequeue with a circular queue, for a queue
that may hold 10 000 items. **[4]**

**11.** State the output of this program.

```python
from collections import deque

q = deque()
for name in ["Ali", "Bea", "Cal", "Dev"]:
    q.append(name)
while len(q) > 1:
    for k in range(2):
        q.append(q.popleft())
    print(q.popleft())
print("Left:", q.popleft())
```

**[4]**

**12.** A programmer uses `deque(maxlen=50)` as the print queue for a busy office printer. Explain the
problem with this choice and suggest how to fix it. **[3]**

## Answers

**1.** First in, first out: the first item added is the first removed [1]; **dequeue** [1]. **[2]**

**2.** Keystrokes must be processed in the **order they were typed** [1]; a queue gives FIFO order, while a
stack would return the most recent keystroke first and reverse the text [1]. **[2]**

**3. (a)** **3, 4, 0, 1** [1]
**(b)** (1 + 1) MOD 5 = **index 2** [1]
**(c)** **Not full**: `count` (4) is less than the size (5) [1]

**4. (a)** `popleft()` [1]
**(b)** The item at the **front (left) is discarded** to make room, without any error [1]

**5.** Dequeued values: **8 and 3** [1]. Final `front` = **2** [1], `rear` = **4** [1]. Enqueue 4 is
**rejected** because `rear` = size − 1, so the queue reports full even though indexes 0 and 1 are free [1].
**[4]**

**6.** Array: **4, 3, 6, 1, 9** [1]; `front` = **2** [1]; `rear` = **0** (it wrapped from 4) [1];
`count` = **4** [1]. **[4]**
*Examiner insight:* The 3 at index 1 is a dequeued value left behind; the logical queue is 6, 1, 9, 4.

**7. (a)** Example answer:

```python
def is_empty(self):
    return self.front == self.rear                      # [1]

def is_full(self):
    return (self.rear + 1) % self.size == self.front    # [1]
```

**[2]**
**(b)** If every slot could be filled, `rear` would wrap round to equal `front` when full [1], which is
the same condition as empty, so the two states could not be told apart [1]. **[2]**

**8.** Example answer:

```python
def queue_length(front, rear, size):
    return (rear - front) % size
```

Uses the difference between `rear` and `front` [1]; applies MOD size so a wrapped queue (rear < front)
gives a positive answer [1]; returns the value [1]. **[3]**
*Examiner insight:* An `if rear >= front` with `rear − front`, else `size − front + rear`, is equally
valid.

**9.** Example answer:

```python
from collections import deque           # [1] import and create the deque

jobs = deque()
for job in ["report.pdf", "photo.png", "notes.txt"]:
    jobs.append(job)                    # [1] enqueue at the rear
while len(jobs) > 0:                    # [1] loop until empty
    print("Printing", jobs.popleft())   # [1] dequeue from the front and display
```

**[4]**

**10.** Shuffling: each dequeue moves **every remaining item** (up to 9 999 moves), so it is slow for a large
queue [1]; but it never wastes space and is simple to code [1]. Circular: enqueue and dequeue take
**constant time**, because only a pointer changes [1]; freed slots are reused by wrapping with MOD, so it is
the better choice for 10 000 items [1]. **[4]**

**11.** `Cal` [1], `Bea` [1], `Dev` [1], `Left: Ali` [1]. **[4]**
*Examiner insight:* Each round moves two people from front to rear, then removes the third. Write the
queue contents after each step to avoid slips.

**12.** When 50 jobs are waiting, appending another **silently discards the oldest job** at the front [1],
so documents are lost without an error [1]. Fix: use a deque **without `maxlen`**, or `queue.Queue` with a
size check that reports a full queue to the user instead of losing jobs [1]. **[3]**

## Frequently asked questions

**Which full test should I use in the exam?**
The one that matches the implementation in the question. Read the starting values and how `rear` is used
before you trace.

**Do I need to clear a slot after a dequeue?**
No. Moving `front` removes the item from the queue; the old value stays in the array until overwritten.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS
exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.2.3 Queues.
