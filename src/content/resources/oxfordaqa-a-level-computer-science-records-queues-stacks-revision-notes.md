---
title: "OxfordAQA A Level Computer Science: Records, Queues and Stacks — Revision Notes"
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
publishedDate: 2026-11-08
featured: false
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

## Records

- Fields may have different data types; accessed by name (`s.score`), not by index.
- Python: class without methods, or `@dataclass`; C#: `struct`; VB: `Structure`.
- An array of records stores a table, such as a class list.

## Pointer rules

| Structure | Start state | Add | Remove | Empty test | Full test |
|---|---|---|---|---|---|
| Linear queue | front = 0, rear = −1 | rear += 1 | front += 1 | rear < front | rear = size − 1 |
| Circular queue | front = 0, rear = −1, count = 0 | rear = (rear + 1) MOD size; count += 1 | front = (front + 1) MOD size; count −= 1 | count = 0 | count = size |
| Stack | top = −1 | top += 1 | top −= 1 | top = −1 | top = size − 1 |

**Without a count:** some textbooks detect a full circular queue when `(rear + 1) MOD size = front`
and leave one space empty. Read the question's own algorithm carefully.

## Linear vs circular queue

- **Linear:** simple, but space at the front is wasted after dequeues; it can report full while empty slots exist.
- **Shuffling** items forward fixes this but is slow for large queues.
- **Circular:** reuses freed space using MOD; constant-time operations.

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

## Common mistakes and exam traps

- **Saying a queue removes from the rear.** Dequeue always takes from the front.
- **Forgetting to check full or empty first.** Mark schemes credit the test before the change.
- **Updating the pointer after storing in a stack push.** Increment `top` first, then store.
- **Clearing the slot on dequeue or pop.** Data is usually left in the array; only the pointer moves.
- **Confusing peek with pop.** Peek does not change `top`.

## Frequently asked questions

**Why does `top` start at −1?** So that the first push moves it to index 0, the first element of the
array, and `top = −1` can mean empty.

**Can a record contain another record or an array?** Yes; fields can be any type, including arrays
or other records.

## Related pages

- [Records, Queues and Stacks study guide](/resources/a-level-oxfordaqa-computer-science-records-queues-and-stacks/)
- [Records, Queues and Stacks practice questions](/resources/oxfordaqa-a-level-computer-science-records-queues-stacks-practice/)
- [Arrays and Lists revision notes](/resources/oxfordaqa-a-level-computer-science-arrays-lists-revision-notes/)

*Source: OxfordAQA, International AS and A-level Computer Science (9645) specification, Version 1.1,
sub-topics 3.2.2 to 3.2.4.*
