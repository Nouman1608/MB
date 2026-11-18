---
title: "AQA A-Level Computer Science (7517): Stacks -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original AQA 7517 section 4.2.3 questions with mark-scheme answers: push, pop, peek, empty and full tests, stack traces and stack-based algorithms."
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
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Stacks study guide](/resources/aqa-a-level-computer-science-7517-stacks/) | [Stacks revision notes](/resources/aqa-a-level-computer-science-7517-stacks-revision-notes/)

Unless a question says otherwise, a stack is held in an array `s` indexed from 0, with a pointer `top` that holds the index of the top item and is −1 when the stack is empty.

---

## Section A

**1.** State the meaning of **LIFO** and explain how it applies to a stack. **[2]**

**2.** State the difference between the **pop** and **peek** operations. **[2]**

**3.** Give the test for an empty stack and the test for a full stack in an array of `maxSize` elements. **[2]**

**4.** Define **stack overflow** and **stack underflow**. **[2]**

**5.** State **two** uses of a stack in computer systems. **[2]**

## Section B

**6.** A stack has `maxSize` = 5 and is empty. The following operations are carried out in order:

Push(4), Push(8), Pop, Push(6), Peek, Push(2), Push(9), Pop, Push(3)

**(a)** State the values returned by the two Pop operations and by Peek. **[3]**
**(b)** State the contents of the stack from bottom to top, and the value of top, at the end. **[2]**
**(c)** State the value held in `s[3]` immediately after the second Pop, and explain why that value is no longer part of the stack. **[2]**

**7.** Write the Push and Pop subroutines for an array-based stack, including the appropriate tests. **[6]**

**8.** A different implementation lets `top` hold the index of the **next free** slot, starting at 0. State the empty test and the full test for this version, and describe how Push must change. **[3]**

**9.** The bracket-checking algorithm in the study guide is applied to `{ [ ( ) ] [ }`.

**(a)** Show the contents of the stack after each of the first six characters. **[3]**
**(b)** State the result of the algorithm and the character at which it is decided, with a reason. **[2]**

**10.** Write an algorithm that uses a stack to decide whether a word is a palindrome (reads the same forwards and backwards). You may use the subroutines Push, Pop and IsEmpty. **[5]**

**11.** In a program, Main calls subroutine A. A calls B. B returns. A then calls C. C returns, then A returns.

**(a)** Show the contents of the call stack, bottom to top, immediately after A calls C. **[2]**
**(b)** State **three** items held in each stack frame. **[3]**

**12.** Explain why a stack, rather than a queue, is used to implement an undo feature in a drawing program. **[2]**

---

## Answers

**1.** Last in, first out [1]: the item removed (popped) is always the one that was most recently added (pushed), since both happen at the top [1].

**2.** Pop removes the top item and returns it [1]; peek returns the value of the top item without removing it, so the stack is unchanged [1].

**3.** Empty: top = −1 [1]. Full: top = maxSize − 1 [1].

**4.** Overflow: trying to push an item onto a stack that is full [1]. Underflow: trying to pop (or peek) from a stack that is empty [1].

**5.** Any two [1 each]: storing return addresses, parameters and local variables for subroutine calls; undo features; reversing the order of data; checking balanced brackets; evaluating Reverse Polish expressions.

**6. (a)** First Pop returns 8 [1]; Peek returns 6 [1]; second Pop returns 9 [1].
**(b)** 4, 6, 2, 3 [1]; top = 3 [1].
**(c)** 9 [1]; top has moved down to 2, so index 3 lies above the top of the stack and the value will be overwritten by the next push (as it is by 3) [1].

**7.**
```
SUBROUTINE Push(item)
    IF top = maxSize - 1 THEN
        OUTPUT "Stack full"
    ELSE
        top ← top + 1
        s[top] ← item
    ENDIF
ENDSUBROUTINE

SUBROUTINE Pop()
    IF top = -1 THEN
        OUTPUT "Stack empty"
    ELSE
        item ← s[top]
        top ← top - 1
        RETURN item
    ENDIF
ENDSUBROUTINE
```
Push: full test [1]; top incremented before storing [1]; item stored at s[top] [1]. Pop: empty test [1]; item read from s[top] before top is decremented [1]; top decremented and item returned [1].

**8.** Empty: top = 0 [1]; full: top = maxSize [1]; Push stores the item at s[top] first and then increments top (after a full test) [1].

**9. (a)** After `{`: { ; after `[`: { [ ; after `(`: { [ ( [1]; after `)`: { [ ; after `]`: { [1]; after `[`: { [ [1].
**(b)** FALSE [1], decided at `}`: it pops `[`, which does not match `}` [1].

**10.**
```
FOR i ← 0 TO LEN(word) - 1
    Push(word[i])
ENDFOR
isPal ← TRUE
FOR i ← 0 TO LEN(word) - 1
    IF Pop() ≠ word[i] THEN
        isPal ← FALSE
    ENDIF
ENDFOR
OUTPUT isPal
```
Every character pushed in order [1]; flag initialised to true [1]; characters popped one at a time, giving them in reverse order [1]; each popped character compared with the character at the same position from the start [1]; flag set false on any mismatch and output at the end [1]. (Accept building the reversed string by popping and comparing it with the original.)

**11. (a)** Main, A, C (bottom to top) [1]; B's frame has already been popped [1].
**(b)** The return address [1]; the parameters [1]; the local variables [1].

**12.** Undo must reverse the most recent action first, then the one before it [1]; a stack returns the most recently added item first (LIFO), whereas a queue would return the oldest action first (FIFO) [1].

---

## Where marks are usually lost

- Treating Peek as if it removed the item, which changes every later answer in a trace.
- Storing before incrementing in Push, or decrementing before reading in Pop.
- Using `top = maxSize` as the full test when top starts at −1.
- Forgetting the final empty-stack check in a bracket-matching algorithm.
- Leaving B's frame on the call stack after B has returned.
