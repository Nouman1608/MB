---
title: "OxfordAQA A-Level Computer Science (9645): Stacks -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 2 – Fundamental data structures"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 2.4
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamental-data-structures"
    subtopic: "stacks-oxfordaqa-alevel-cs"
description: "Recall notes for OxfordAQA 9645 sub-topic 3.2.4 Stacks: LIFO, push, pop and peek, both pointer conventions, empty and full tests, uses and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense sub-topic **3.2.4 Stacks** of OxfordAQA International AS and A-level Computer Science
(9645), Version 1.1 (AS content in topic 3.2 Fundamental data structures). For code, traces and the
bracket-matching algorithm, see the
[stacks study guide](/resources/oxfordaqa-a-level-computer-science-9645-stacks-oxfordaqa-alevel-cs/); then
practise with the [stacks practice questions](/resources/oxfordaqa-a-level-computer-science-9645-stacks-oxfordaqa-alevel-cs-practice/).

## What the specification requires

- A stack is a **last-in first-out (LIFO)** structure.
- Apply **push**, **pop** and **peek** (also called **top**).
- Peek returns the top (most recently pushed) value **without removing it**.
- Describe situations where a stack is **appropriate**.
- Implement a stack in a **one-dimensional array**, with **empty** and **full** tests.
- Use a **library** implementation of a stack.

## Key terms

| Term | Meaning |
|---|---|
| LIFO | The last item added is the first removed |
| Top | The only end where items are added and removed |
| Push | Add an item to the top |
| Pop | Remove and return the top item |
| Peek / top | Return the top item without removing it |
| Stack pointer | The variable that tracks the top position |
| Overflow | Pushing onto a full stack |
| Underflow | Popping from (or peeking at) an empty stack |
| Stack frame | Data pushed for a subroutine call: return address, parameters, local variables |

## Pointer conventions

| | `top` (index of top item) | `next_free` (next empty slot) |
|---|---|---|
| Start | −1 | 0 |
| Push | top ← top + 1, then store at top | store at next_free, then next_free ← next_free + 1 |
| Pop | read at top, then top ← top − 1 | next_free ← next_free − 1, then read |
| Peek | read at top | read at next_free − 1 |
| Empty | top = −1 | next_free = 0 |
| Full | top = size − 1 | next_free = size |
| Number of items | top + 1 | next_free |

Use whichever convention the question sets up; check the starting value first.

## Worked reminder: a `top` trace

Size 3, `top` = −1. Push K, push M, pop, push N, push P, push R, peek.

| Operation | Returns | top | Logical stack (bottom → top) |
|---|---|---|---|
| push K | | 0 | K |
| push M | | 1 | K, M |
| pop | M | 0 | K |
| push N | | 1 | K, N |
| push P | | 2 | K, N, P (full) |
| push R | overflow | 2 | K, N, P |
| peek | P | 2 | K, N, P |

Every pop or peek returns the most recently pushed item still in the stack.

## When a stack fits

| Situation | Why LIFO |
|---|---|
| Subroutine calls | The most recent call returns first |
| Undo in an editor | The latest action is reversed first |
| Browser back button | Returns to the most recently visited page |
| Reversing a list or string | Popping returns items in reverse order |
| Bracket matching | The last bracket opened must be closed first |
| Backtracking | Return to the most recent choice point |

## Bracket-matching algorithm in words

1. Read each character.
2. Opening bracket: push it.
3. Closing bracket: if the stack is empty, or the popped bracket is the wrong type, the text is unbalanced.
4. At the end, the text is balanced only if the stack is empty.

## Library stacks

| Library | Push | Pop | Peek |
|---|---|---|---|
| Python `list` | `append` | `pop` | `s[-1]` |
| Python `collections.deque` | `append` | `pop` | `d[-1]` |
| Python `queue.LifoQueue` | `put` | `get` | (none) |
| C# `Stack<T>` | `Push` | `Pop` | `Peek` |

Empty pops: Python raises `IndexError` (list, deque); C# throws `InvalidOperationException`.

## Exam traps

- **Bottom versus top.** Never pop from index 0 of the array.
- **Full test with the wrong convention.** `top = size − 1` and `next_free = size` are not interchangeable.
- **Step order.** Push and pop must update the pointer and the array in the order your convention needs.
- **Peek removes nothing.** The pointer does not change.
- **Popped values stay in the array** until overwritten; they are no longer in the stack.
- **Library lists never fill**, so a "full" test only applies to the fixed-size array version.

## Quick self-test

1. What does LIFO stand for?
2. State the difference between pop and peek.
3. A stack uses `top`, starting at −1, in an array of size 8. Give the full test.
4. In the `next_free` convention, what does `next_free` equal besides the next empty index?
5. What is underflow?
6. Name the three items stored in a stack frame.
7. Give one situation where a stack is appropriate, with a reason.
8. Push X, push Y, pop, push Z, peek. What does the peek return?
9. Which Python list expression peeks at the top?
10. Why does the bracket checker return False for "((x)"?
11. Name the C# method that removes the top item.
12. A stack with `top` = 4 is popped twice. What is `top` now?

### Answers

1. Last in, first out.
2. Pop removes the top item and returns it; peek returns it without removing it.
3. `top = 7` (size − 1).
4. The number of items in the stack.
5. Trying to pop from an empty stack.
6. Return address, parameters and local variables.
7. Undo: the most recent action must be reversed first (or any valid example with reason).
8. Z.
9. `s[-1]`
10. One opening bracket remains on the stack at the end.
11. `Pop()`
12. 2.

## Next steps

- [Stacks study guide](/resources/oxfordaqa-a-level-computer-science-9645-stacks-oxfordaqa-alevel-cs/)
- [Stacks practice questions](/resources/oxfordaqa-a-level-computer-science-9645-stacks-oxfordaqa-alevel-cs-practice/)
- [Queues revision notes](/resources/oxfordaqa-a-level-computer-science-9645-queues-oxfordaqa-alevel-cs-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS
exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.2.4 Stacks.
