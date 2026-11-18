---
title: "AQA A-Level Computer Science (7517): Stacks -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of data structures"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 2.3
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-data-structures"
    subtopic: "stacks-7517"
description: "Condensed AQA 7517 section 4.2.3 recall: push, pop, peek, empty and full tests, pointer order, stack uses, overflow and underflow, traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Condensed recall for **4.2.3 Stacks**, AQA A-Level Computer Science (7517): **push, pop, peek or top, test for empty stack, test for stack full**. Peek or top returns the value of the top element **without removing it**. Algorithms and traced examples are in the [stacks study guide](/resources/aqa-a-level-computer-science-7517-stacks/); exam-style questions are in the [stacks practice questions](/resources/aqa-a-level-computer-science-7517-stacks-practice/).

## The stack rule

**LIFO**: last in, first out. One end only, the **top**. The item removed is the one added most recently.

## Array representation

```
s[0 … maxSize-1]   the items
top                index of the top item
creation:          top ← -1
```

Alternative convention: `top` = next free slot, starting at 0. Then empty is `top = 0`, full is `top = maxSize`, and Push stores first, then increments. State whichever you use.

## The five operations (top starts at −1)

| Operation | Steps | Changes top? |
|---|---|---|
| Is empty | top = −1 | No |
| Is full | top = maxSize − 1 | No |
| Push(item) | Full test; top ← top + 1; s[top] ← item | Yes, +1 |
| Pop | Empty test; item ← s[top]; top ← top − 1; return item | Yes, −1 |
| Peek / top | Empty test; return s[top] | No |

**Order matters:** push increments then stores; pop reads then decrements.

## Trace check

`maxSize` = 3, stack empty.

| Operation | top after | Stack, bottom → top | Returned or message |
|---|---|---|---|
| Push(A) | 0 | A | |
| Push(B) | 1 | A, B | |
| Push(C) | 2 | A, B, C | |
| Push(D) | 2 | A, B, C | overflow: top = maxSize − 1 |
| Pop | 1 | A, B | C |
| Peek | 1 | A, B | B |
| Pop | 0 | A | B |
| Pop | −1 | empty | A |
| Pop | −1 | empty | underflow |

Peek returned B and the next Pop also returned B, because Peek left it in place.

## Overflow and underflow

- **Overflow:** push onto a full stack.
- **Underflow:** pop (or peek) from an empty stack.
- Recursion without a base case causes call-stack overflow.

## Popped values in memory

A popped value stays in the array until a later push overwrites it, but it is **not in the stack**, because it lies above `top`.

## Uses

| Use | Why a stack |
|---|---|
| Subroutine calls | Frames (return address, parameters, local variables) must be removed in reverse order of the calls |
| Undo | Most recent action reversed first |
| Reversing data | Push all, pop all: order is reversed |
| Bracket matching | Brackets close in reverse order of opening |
| Reverse Polish evaluation | Operands waiting for an operator are taken most recent first (section 4.3) |

## Bracket-matching rules

1. Opening bracket → push.
2. Closing bracket → if the stack is empty, unbalanced; otherwise pop and check the types match.
3. End of text → balanced only if the stack is empty.

Example: `( [ ) ]` fails at `)` because the popped `[` does not match.

## Reversal in one line

Push every character of "STACK", then pop until empty: "KCATS". The stack must hold at least as many items as the input.

## Static vs dynamic stacks

- **Static (array):** fixed size; needs the full test.
- **Dynamic (linked nodes):** grows from the heap; empty when the top reference is null; "full" only if memory runs out.

## Stack vs queue

| | Stack | Queue |
|---|---|---|
| Rule | LIFO | FIFO |
| Pointers | top | front, rear |
| Removes | Newest item | Oldest item |

## Key terms

| Term | Definition |
|---|---|
| Stack | LIFO abstract data type with access only at the top |
| Push | Add an item to the top |
| Pop | Remove and return the top item |
| Peek / top | Return the top item without removing it |
| Top pointer | Index of the top item (or next free slot, by convention) |
| Stack overflow | Pushing onto a full stack |
| Stack underflow | Popping from an empty stack |
| Call stack | Stack of frames for active subroutine calls |

## Exam traps

- Peek does **not** remove the item.
- Full test is `maxSize − 1`, not `maxSize`, when top starts at −1.
- Push: increment **before** storing. Pop: read **before** decrementing.
- Test before every operation: full before push, empty before pop and peek.
- A popped value still in the array is not part of the stack.
- A bracket checker must also check the stack is empty at the end.

## Self-test

1. What does LIFO stand for?
2. What is the value of top for an empty stack in the convention above?
3. State the full test for a stack of 8 elements.
4. In Push, which comes first: incrementing top or storing the item?
5. What does Peek return, and what does it change?
6. Push(3), Push(5), Pop, Push(1), Peek. What does Peek return?
7. After those operations, what does the stack hold, bottom to top?
8. Define stack underflow.
9. Why is a stack suitable for storing return addresses?
10. Push every letter of "TOP" and pop all. What is output?
11. What must be true at the end of the text for brackets to be balanced?
12. When is a dynamic stack full?

**Answers**

1. Last in, first out.
2. −1.
3. top = 7.
4. Incrementing top.
5. The value of the top item; nothing changes.
6. 1.
7. 3, 1.
8. Attempting to pop (or peek) when the stack is empty.
9. Subroutines return in the reverse order to which they were called, so the most recent return address is needed first.
10. "POT".
11. The stack must be empty.
12. Only when the heap has no memory left for a new node.

## Related resources

- [Stacks study guide](/resources/aqa-a-level-computer-science-7517-stacks/)
- [Stacks practice questions](/resources/aqa-a-level-computer-science-7517-stacks-practice/)
- [Queues revision notes](/resources/aqa-a-level-computer-science-7517-queues-revision-notes/)
