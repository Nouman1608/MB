---
title: "OxfordAQA A-Level Computer Science (9645): Stacks"
resourceType: "study-guides"
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
description: "OxfordAQA 9645 sub-topic 3.2.4 in depth: LIFO stacks, push, pop and peek, two array pointer conventions, bracket matching and Python and C# libraries."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers sub-topic **3.2.4 Stacks** of OxfordAQA International AS and A-level Computer Science
(9645), Version 1.1, in topic 3.2 Fundamental data structures (AS). The specification asks you to understand
that "a stack is a last-in first-out (LIFO) data structure", to apply **push**, **pop** and **peek** (also
known as **top**), to describe situations where a stack is appropriate, to implement a stack in a
one-dimensional array, to test whether it is **empty or full**, and to have used a language library that
implements a stack. Its additional information defines peek: it "returns the value of the top (most
recently pushed) element without removing it".

For quick recall use the [stacks revision notes](/resources/oxfordaqa-a-level-computer-science-9645-stacks-oxfordaqa-alevel-cs-revision-notes/),
and test yourself with the [stacks practice questions](/resources/oxfordaqa-a-level-computer-science-9645-stacks-oxfordaqa-alevel-cs-practice/).
The [records, queues and stacks study guide](/resources/a-level-oxfordaqa-computer-science-records-queues-and-stacks/)
shows the standard array stack with a `top` pointer; this page adds the other common pointer convention, an
algorithm that depends on a stack, and the behaviour of library stacks.

## LIFO and the three operations

A stack has one open end, the **top**. Every addition and every removal happens there, so the most recently
added item is always the first to leave.

| Operation | Effect on the stack | Returns |
|---|---|---|
| push(x) | x becomes the new top | Nothing (or a success flag) |
| pop() | The top item is removed | The removed item |
| peek() / top() | No change | The top item |

The contrast between pop and peek is a frequent short question: both return the top value, but only pop
changes the stack.

## Two pointer conventions for an array stack

An array stack needs one integer to track the top. Textbooks and exam questions use two conventions, and the
empty and full tests differ between them.

| Convention | Starting value | Push | Pop | Empty test | Full test |
|---|---|---|---|---|---|
| `top` = index of the top item | −1 | increment, then store | read, then decrement | `top == -1` | `top == size - 1` |
| `next_free` = index of the next empty slot | 0 | store, then increment | decrement, then read | `next_free == 0` | `next_free == size` |

The broader guide codes the first convention. Here is the second, which some find easier because
`next_free` also equals the number of items in the stack.

```python
class ArrayStack:
    def __init__(self, max_size):
        self.data = [None] * max_size
        self.max_size = max_size
        self.next_free = 0                  # also the number of items

    def is_empty(self):
        return self.next_free == 0

    def is_full(self):
        return self.next_free == self.max_size

    def push(self, item):
        if self.is_full():
            return False                    # overflow
        self.data[self.next_free] = item
        self.next_free = self.next_free + 1
        return True

    def pop(self):
        if self.is_empty():
            return None                     # underflow
        self.next_free = self.next_free - 1
        return self.data[self.next_free]

    def peek(self):
        if self.is_empty():
            return None
        return self.data[self.next_free - 1]
```

The order of the two steps inside push and pop is the part most often reversed. In this convention, push
stores **before** moving the pointer and pop moves the pointer **before** reading.

### Worked example 1: tracing the array stack

*`ArrayStack(3)`: push A, push B, peek, pop, push C, push D, push E.*

| Operation | Returns | next_free | Array | Logical stack (bottom → top) |
|---|---|---|---|---|
| start | | 0 | –, –, – | empty |
| push A | True | 1 | A, –, – | A |
| push B | True | 2 | A, B, – | A, B |
| peek | B | 2 | A, B, – | A, B |
| pop | B | 1 | A, B, – | A |
| push C | True | 2 | A, C, – | A, C |
| push D | True | 3 | A, C, D | A, C, D |
| push E | False (overflow) | 3 | A, C, D | A, C, D |

After the pop, B is still in the array but is no longer part of the stack; push C overwrites it.

## Describing when a stack is appropriate

As with queues, name the situation and the reason that LIFO order is needed.

- **Subroutine calls.** When a subroutine is called, a stack frame holding the **return address**,
  **parameters** and **local variables** is pushed; when it finishes, the frame is popped. The most recent
  call must finish first, which is exactly LIFO. (The specification lists these three contents of a stack
  frame in 3.1.2.7 Subroutines.)
- **Undo.** The most recent action is the first one to reverse.
- **Reversing data.** Pushing items then popping them all returns them in reverse order.
- **Checking matched brackets.** The most recently opened bracket must be the first one closed.
- **Backtracking**, such as retracing steps through a maze, where you return first to the most recent
  choice point.

## Worked example 2: matching brackets with a stack

```python
def balanced(text):
    pairs = {")": "(", "]": "[", "}": "{"}
    stack = []
    for ch in text:
        if ch in "([{":
            stack.append(ch)                       # push an opening bracket
        elif ch in ")]}":
            if len(stack) == 0 or stack.pop() != pairs[ch]:
                return False                       # nothing to match, or wrong type
    return len(stack) == 0                         # leftover openers mean unbalanced
```

*Trace `balanced("(a[b)c]")`.*

| Character | Action | Stack after (bottom → top) |
|---|---|---|
| ( | push | ( |
| a | ignored | ( |
| [ | push | (, [ |
| b | ignored | (, [ |
| ) | pop gives [, which does not match ( | returns False |

The function also returns `False` for `"((x)"`, because one opener is left on the stack at the end, and for
`"x)"`, because the stack is empty when `)` arrives. It returns `True` for `"(a[b]{c})"`.

## Using a library stack

| Library | Push | Pop | Peek | Empty behaviour |
|---|---|---|---|---|
| Python `list` | `append(x)` | `pop()` | `s[-1]` | `pop()` raises `IndexError` |
| Python `collections.deque` | `append(x)` | `pop()` | `d[-1]` | `pop()` raises `IndexError` |
| Python `queue.LifoQueue` | `put(x)` | `get()` | none built in | `get()` waits if empty |
| C# `Stack<T>` | `Push(x)` | `Pop()` | `Peek()` | `Pop()` and `Peek()` throw `InvalidOperationException` |

A Python list grows as needed, so it has no full state. The fixed-size array version is still examined
because the specification requires you to test for full.

## Exam technique

- **Trace:** keep a column for the pointer and one for the logical stack; note what each pop or peek
  returns.
- **Write push or pop:** test full or empty first, then update the pointer and the array in the order
  your convention needs, then return.
- **Describe a use:** give the situation and say why the most recent item must be processed first.

## Common mistakes

- Popping from the bottom (index 0) instead of the top.
- Using `top == size` as the full test when `top` holds the index of the top item.
- Reversing the store and increment steps for the convention in use.
- Treating peek as removing the item.
- Forgetting to test for an empty stack before pop, which is underflow.

## Next steps

- [Stacks revision notes](/resources/oxfordaqa-a-level-computer-science-9645-stacks-oxfordaqa-alevel-cs-revision-notes/)
- [Stacks practice questions](/resources/oxfordaqa-a-level-computer-science-9645-stacks-oxfordaqa-alevel-cs-practice/)
- [Queues study guide](/resources/oxfordaqa-a-level-computer-science-9645-queues-oxfordaqa-alevel-cs/)
- [Procedural programming study guide](/resources/a-level-oxfordaqa-computer-science-procedural-programming/)
- [OxfordAQA A-level Computer Science course hub](/boards/oxfordaqa/a-level/computer-science/)

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS
exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.2.4 Stacks.
