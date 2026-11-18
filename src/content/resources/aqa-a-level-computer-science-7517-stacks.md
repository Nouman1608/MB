---
title: "AQA A-Level Computer Science (7517): Stacks"
resourceType: "study-guides"
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
description: "Deeper guide to AQA 7517 section 4.2.3 Stacks: push, pop, peek, empty and full tests as array algorithms, with traces and stack-based problem solving."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers **4.2.3 Stacks** in AQA A-Level Computer Science (7517). The specification asks you to **describe and apply** five operations: **push, pop, peek or top, test for empty stack and test for stack full**. Its additional information adds that **peek or top returns the value of the top element without removing it**.

The [abstract data types study guide](/resources/a-level-aqa-computer-science-abstract-data-types/) summarises these operations in a table. This page writes each one as an algorithm, traces a sequence step by step, and then uses a stack to solve two problems of the kind exam questions set: reversing data and checking that brackets are balanced.

Condensed notes are in the [stacks revision notes](/resources/aqa-a-level-computer-science-7517-stacks-revision-notes/), and exam-style questions are in the [stacks practice questions](/resources/aqa-a-level-computer-science-7517-stacks-practice/).

## The stack as an abstract data type

A **stack** is a last in, first out (**LIFO**) structure. Items are added and removed at one end only, the **top**. The item removed is always the one added most recently.

Typical uses:

- holding **return addresses**, parameters and local variables when subroutines are called (the stack frames of 4.1.1.15);
- **undo** in editors, where the most recent action is reversed first;
- **reversing** the order of a sequence;
- checking **nested structures** such as brackets;
- evaluating expressions (Reverse Polish notation, in section 4.3).

## Representation used on this page

- `s` is an array of `maxSize` elements, indexed from 0;
- `top` holds the index of the top item;
- on **creation**, `top ← -1`, meaning the stack is empty.

Some textbooks let `top` point to the next free slot and start it at 0. That is equally valid; what matters is that every operation is consistent with the convention you state.

## The five operations

```
SUBROUTINE IsEmpty()
    RETURN top = -1
ENDSUBROUTINE

SUBROUTINE IsFull()
    RETURN top = maxSize - 1
ENDSUBROUTINE

SUBROUTINE Push(item)
    IF IsFull() THEN
        OUTPUT "Stack overflow: stack is full"
    ELSE
        top ← top + 1
        s[top] ← item
    ENDIF
ENDSUBROUTINE

SUBROUTINE Pop()
    IF IsEmpty() THEN
        OUTPUT "Stack underflow: stack is empty"
    ELSE
        item ← s[top]
        top ← top - 1
        RETURN item
    ENDIF
ENDSUBROUTINE

SUBROUTINE Peek()
    IF IsEmpty() THEN
        OUTPUT "Stack is empty"
    ELSE
        RETURN s[top]
    ENDIF
ENDSUBROUTINE
```

Three details carry marks:

1. **Push** increments `top` **before** storing (because `top` starts at −1 and points at the current top item).
2. **Pop** reads `s[top]` **before** decrementing.
3. **Peek** does not change `top` at all.

Trying to push onto a full stack is **stack overflow**; trying to pop from an empty stack is **stack underflow**.

## Worked example 1: tracing a sequence

`maxSize` = 4, stack empty. Operations: Push(12), Push(7), Peek, Push(30), Pop, Push(5), Push(9), Push(1), Pop, Pop.

| Operation | top after | Stack, bottom → top | Returned or message |
|---|---|---|---|
| Push(12) | 0 | 12 | |
| Push(7) | 1 | 12, 7 | |
| Peek | 1 | 12, 7 | 7 |
| Push(30) | 2 | 12, 7, 30 | |
| Pop | 1 | 12, 7 | 30 |
| Push(5) | 2 | 12, 7, 5 | |
| Push(9) | 3 | 12, 7, 5, 9 | |
| Push(1) | 3 | 12, 7, 5, 9 | overflow: top = 3 = maxSize − 1 |
| Pop | 2 | 12, 7, 5 | 9 |
| Pop | 1 | 12, 7 | 5 |

Notice that after the first Pop, 30 is still physically in `s[2]` until Push(5) overwrites it. A popped value is no longer **in the stack** because it lies above `top`, even if it remains in memory.

## Worked example 2: reversing a string

Because the last item pushed is the first popped, pushing every character and then popping them all reverses the order.

```
SUBROUTINE Reverse(word)
    FOR i ← 0 TO LEN(word) - 1
        Push(word[i])
    ENDFOR
    result ← ""
    WHILE NOT IsEmpty()
        result ← result + Pop()
    ENDWHILE
    RETURN result
ENDSUBROUTINE
```

`Reverse("STACK")` pushes S, T, A, C, K, with K on top, and pops K, C, A, T, S, returning "KCATS". The stack must be at least as large as the word, or the push will overflow.

## Worked example 3: are the brackets balanced?

Every opening bracket must be closed by the matching type, in the reverse order to which they were opened. That "reverse order" is the signal to use a stack.

```
SUBROUTINE Balanced(text)
    FOR EACH ch IN text
        IF ch is "(" OR ch is "[" OR ch is "{" THEN
            Push(ch)
        ELSE IF ch is ")" OR ch is "]" OR ch is "}" THEN
            IF IsEmpty() THEN
                RETURN FALSE
            ENDIF
            IF Pop() does not match ch THEN
                RETURN FALSE
            ENDIF
        ENDIF
    ENDFOR
    RETURN IsEmpty()
ENDSUBROUTINE
```

Trace for `( [ ] { ( ) } )`:

| Character | Action | Stack after, bottom → top |
|---|---|---|
| ( | push | ( |
| [ | push | ( [ |
| ] | pop [, matches | ( |
| { | push | ( { |
| ( | push | ( { ( |
| ) | pop (, matches | ( { |
| } | pop {, matches | ( |
| ) | pop (, matches | empty |

The text ends with the stack empty, so the result is TRUE. For `( [ ) ]`, the third character `)` pops `[`, which does not match, so the result is FALSE at once. The final `RETURN IsEmpty()` catches the remaining case, an opening bracket that is never closed, as in `( ( )`.

## Stacks and subroutine calls

When a subroutine is called, a **stack frame** holding the return address, parameters and local variables is **pushed** onto the call stack; when it ends, the frame is **popped** and execution resumes at the return address. Nested calls therefore return in the reverse order to which they were made. Unbounded recursion keeps pushing frames until the call stack is full: stack overflow. This is the most commonly examined application of a stack, and it links 4.2.3 to 4.1.1.15.

## Stack or queue?

| | Stack | Queue |
|---|---|---|
| Rule | LIFO | FIFO |
| Pointers | One: top | Two: front and rear |
| Item removed | Most recently added | Least recently added |
| Wrap-round needed | No | Yes, for a circular queue |
| Typical use | Undo, return addresses, reversal | Printing, buffering, scheduling |

## Static and dynamic stacks

The array version above is **static**: its size is fixed, so it needs a full test. A **dynamic** stack built from linked nodes grows as needed and is full only when no more memory is available; its empty test is "top reference is null". The [abstract data types study guide for 4.2.1.4](/resources/aqa-a-level-computer-science-7517-abstract-data-types-data-structures/) traces a dynamic stack.

## Common mistakes

- Saying peek removes the top item.
- Storing before incrementing `top` in push, which overwrites the current top item.
- Decrementing before reading in pop, which returns the wrong item.
- Omitting the full test before push or the empty test before pop and peek.
- Listing a popped value as still in the stack because it is still in the array.
- Using the full test `top = maxSize` with `top` starting at −1; it should be `maxSize − 1`.

## Exam technique

- **Describe** push or pop: the test, then the pointer change and the data movement, in the right order.
- **Trace**: one row per operation, with `top`, the contents and anything returned.
- **Explain why a stack is suitable**: point to the need for the most recent item first (reverse order).
- **State the result of peek**: the value only; the stack is unchanged.

## Related resources

- [Stacks revision notes](/resources/aqa-a-level-computer-science-7517-stacks-revision-notes/)
- [Stacks practice questions](/resources/aqa-a-level-computer-science-7517-stacks-practice/)
- [Queues study guide](/resources/aqa-a-level-computer-science-7517-queues/)
- [Programming study guide, including stack frames](/resources/aqa-a-level-computer-science-7517-programming-aqa-alevel-cs/)

*Written against the AQA A-level Computer Science (7517) specification, 4.2.3 Stacks. Always check the current specification on the AQA website.*
