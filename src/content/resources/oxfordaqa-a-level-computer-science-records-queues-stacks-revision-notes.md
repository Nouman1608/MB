---
title: "OxfordAQA A Level Computer Science: Records, Queues and Stacks — Revision Notes"
seoTitle: "OxfordAQA A Level CS Records, Queues and Stacks Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamental data structures"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 5
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamental-data-structures"
    subtopic: "records-oxfordaqa-alevel-cs"
  - qualification: "a-level"
    topic: "fundamental-data-structures"
    subtopic: "queues-oxfordaqa-alevel-cs"
  - qualification: "a-level"
    topic: "fundamental-data-structures"
    subtopic: "stacks-oxfordaqa-alevel-cs"
description: "Recall notes for 9645 sub-topics 3.2.2 to 3.2.4: records and fields, FIFO queues, circular queue pointers, LIFO stacks, empty and full tests, and traces."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: credited to harris-khan (accountable teacher, D-379)."
---

**These notes condense sub-topics 3.2.2 (Records), 3.2.3 (Queues) and 3.2.4 (Stacks) of OxfordAQA
International AS and A-level Computer Science 9645.** Learn the definitions, the pointer rules for
each array implementation, the exact empty and full tests, and how to trace operations, because exam
questions often give a starting state and a sequence of operations.

## Syllabus coverage

**9645 Version 1.1, topic 3.2 Fundamental data structures**
- **3.2.2** Fields grouped into a record handled as a single entity
- **3.2.3** FIFO; enqueue and dequeue; appropriate uses; linear and circular queues in a 1D array; empty and full tests; library queue
- **3.2.4** LIFO; push, pop, peek/top; appropriate uses; stack in a 1D array; empty and full tests; library stack

## Key terms

| Term | Meaning |
|---|---|
| Record | Group of related fields treated as one entity |
| Field | One named item of data within a record |
| Queue | FIFO structure: add at rear, remove from front |
| Enqueue / dequeue | Add to rear / remove from front |
| Linear queue | Queue whose pointers only move forward through the array |
| Circular queue | Queue whose pointers wrap around to index 0 |
| Stack | LIFO structure: add and remove at the top |
| Push / pop | Add to top / remove from top |
| Peek (top) | Return top item without removing it |
| Overflow | Adding to a full structure |
| Underflow | Removing from an empty structure |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-computer-science-records-queues-and-stacks--02-fifo-vs-lifo.webp" width="900" height="1070" alt="Items 1, 2, 3 are added in order. In the queue they leave from the front in the order 1, 2, 3. In the stack they are pushed and popped at the top, so they leave in the order 3, 2, 1." loading="lazy">
  <figcaption>A queue gives items back first in, first out; a stack gives them back last in, first out.</figcaption>
</figure>

## Records

- Fields may have different data types; accessed by name (`s.score`), not by index.
- Python: class without methods, or `@dataclass`; C#: `struct`; VB: `Structure`.
- An array of records stores a table, such as a class list.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-computer-science-records-queues-and-stacks--01-record-vs-array.webp" width="900" height="910" alt="An array is a row of same-type values reached by index; the example shows 72, 85, 90, 64 at positions 0 to 3. A record groups named fields of different types: name &quot;Aisha&quot; (string), year 12 (integer), score 87.5 (real), reached by name such as s.score." loading="lazy">
  <figcaption>A record holds differently typed fields found by name; an array holds same-type elements found by index.</figcaption>
</figure>

## Pointer rules

| Structure | Start state | Add | Remove | Empty test | Full test |
|---|---|---|---|---|---|
| Linear queue | front = 0, rear = −1 | rear += 1 | front += 1 | rear < front | rear = size − 1 |
| Circular queue | front = 0, rear = −1, count = 0 | rear = (rear + 1) MOD size; count += 1 | front = (front + 1) MOD size; count −= 1 | count = 0 | count = size |
| Stack | top = −1 | top += 1 | top −= 1 | top = −1 | top = size − 1 |

**Without a count:** some textbooks detect a full circular queue when `(rear + 1) MOD size = front`
and leave one space empty. Read the question's own algorithm carefully.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-computer-science-records-queues-and-stacks--05-stack-array.webp" width="900" height="850" alt="A size-4 stack starts with top at -1. Push 5 then 8 gives top 1, and peek returns 8 without removing it. Pop returns 8 and top falls to 0. Pushing on a full stack is overflow; popping from an empty stack is underflow." loading="lazy">
  <figcaption>One pointer, top, tracks the most recent item; overflow and underflow are the full and empty errors.</figcaption>
</figure>

## Linear vs circular queue

- **Linear:** simple, but space at the front is wasted after dequeues; it can report full while empty slots exist.
- **Shuffling** items forward fixes this but is slow for large queues.
- **Circular:** reuses freed space using MOD; constant-time operations.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-computer-science-records-queues-and-stacks--03-linear-queue-limit.webp" width="900" height="1030" alt="A four-cell array with front and rear pointers. After enqueuing 10, 20, 30, 40 front is 0 and rear is 3. After two dequeues front is 2 and cells 0 and 1 are free, but rear is still 3 so is_full is true and enqueuing 50 is refused." loading="lazy">
  <figcaption>A linear queue reports full when rear reaches the last index, even though cells at the front are free.</figcaption>
</figure>

## When to use each

| Structure | Good uses |
|---|---|
| Record | Storing details of one customer, product or student |
| Queue | Print spooling, keyboard buffer, scheduling, simulations, breadth-first search |
| Stack | Subroutine call stack, undo, back button, reversing data, bracket matching, expression evaluation |

## Library support

- Python: `collections.deque` (queue: `append`, `popleft`; stack: `append`, `pop`); `queue.Queue`; `queue.LifoQueue`; `list` as a stack.
- C# / VB: `Queue<T>` (`Enqueue`, `Dequeue`, `Peek`), `Stack<T>` (`Push`, `Pop`, `Peek`).

## Worked example: stack trace

Stack of size 5, initially empty. Operations: push 4, push 7, pop, push 1, push 3, pop, peek.

| Operation | Stack (bottom → top) | top | Returned |
|---|---|---|---|
| push 4 | 4 | 0 | — |
| push 7 | 4, 7 | 1 | — |
| pop | 4 | 0 | 7 |
| push 1 | 4, 1 | 1 | — |
| push 3 | 4, 1, 3 | 2 | — |
| pop | 4, 1 | 1 | 3 |
| peek | 4, 1 | 1 | 1 |

## Worked example: circular queue trace

Size 4, front = 0, rear = −1, count = 0. Enqueue 10, 20, 30; dequeue, dequeue; enqueue 40, 50, 60.

- After three enqueues: items [10, 20, 30, –], front 0, rear 2, count 3.
- Two dequeues return 10, 20: front 2, count 1.
- Enqueue 40 → index 3; enqueue 50 → index (3 + 1) MOD 4 = 0; enqueue 60 → index 1.
- Final: items [50, 60, 30, 40], front 2, rear 1, count 4 → full.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-computer-science-records-queues-and-stacks--04-circular-queue-trace.webp" width="900" height="1140" alt="Two rings of four cells. After enqueuing 10, 20, 30 and dequeuing twice, only cell 2 holds 30, with front and rear both 2 and count 1. Enqueuing 40, 50, 60 moves rear to 3, then wraps to 0, then 1, giving 50, 60, 30, 40 with front 2, rear 1, count 4: full, with freed cells reused." loading="lazy">
  <figcaption>A circular queue wraps its pointers with the modulus operator, so freed cells are reused without moving items.</figcaption>
</figure>

## Common mistakes and exam traps

- **Saying a queue removes from the rear.** Dequeue always takes from the front.
- **Forgetting to check full or empty first.** Mark schemes credit the test before the change.
- **Updating the pointer after storing in a stack push.** Increment `top` first, then store.
- **Clearing the slot on dequeue or pop.** Data is usually left in the array; only the pointer moves.
- **Confusing peek with pop.** Peek does not change `top`.

## Frequently asked questions

**Why does `top` start at −1?**
So that the first push moves it to index 0, the first element of the
array, and `top = −1` can mean empty.

**Can a record contain another record or an array?**
Yes; fields can be any type, including arrays
or other records.

## Related pages

- [Records, Queues and Stacks study guide](/resources/a-level-oxfordaqa-computer-science-records-queues-and-stacks/)
- [Records, Queues and Stacks practice questions](/resources/oxfordaqa-a-level-computer-science-records-queues-stacks-practice/)
- [Arrays and Lists revision notes](/resources/oxfordaqa-a-level-computer-science-arrays-lists-revision-notes/)

*Source: OxfordAQA, International AS and A-level Computer Science (9645) specification, Version 1.1,
sub-topics 3.2.2 to 3.2.4.*
