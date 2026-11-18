---
title: "OxfordAQA A-Level Computer Science (9645): Stacks -- Practice Questions"
resourceType: "practice-questions"
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
description: "Twelve original OxfordAQA 9645 questions on sub-topic 3.2.4 Stacks: push, pop and peek traces, array code, bracket matching and stack uses, with answers."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions practise sub-topic **3.2.4 Stacks** of OxfordAQA International AS and A-level Computer
Science (9645), Version 1.1: LIFO behaviour, push, pop and peek, appropriate uses, a stack in a
one-dimensional array with empty and full tests, and library stacks. Code is Python. Array indexes start
at 0.

Related pages: [stacks study guide](/resources/oxfordaqa-a-level-computer-science-9645-stacks-oxfordaqa-alevel-cs/) ·
[stacks revision notes](/resources/oxfordaqa-a-level-computer-science-9645-stacks-oxfordaqa-alevel-cs-revision-notes/) ·
[records, queues and stacks practice questions](/resources/oxfordaqa-a-level-computer-science-records-queues-stacks-practice/)

## Section A

**1.** State what LIFO means and name the operation that adds an item to a stack. **[2]**

**2.** A stack holds, from bottom to top, the values 4, 9, 2. Starting from this state each time, give the
value returned and the stack contents (bottom to top) after:

**(a)** a peek **[1]**
**(b)** a pop **[1]**

**3.** An array stack of size 6 uses a pointer `top`, which holds the index of the top item and starts at −1.
Currently `top` = 5.

**(a)** State whether the stack is full, with a reason. **[1]**
**(b)** State how many items are in the stack. **[1]**

**4.** Explain why a stack is the appropriate structure for managing subroutine calls. **[2]**

## Section B

**5.** A stack of size 4 uses `next_free`, which starts at 0. Push stores the item at `next_free` then adds
1; pop subtracts 1 then returns the item at `next_free`; peek returns the item at `next_free` − 1. The stack
is full when `next_free` = 4.

Operations: push 7, push 2, pop, push 5, push 8, push 1, push 6, pop, peek.

Give the values returned by both pops and the peek, state what happens to push 6, and give the final value of
`next_free`. **[5]**

**6.** A stack class has attributes `self.items` (a fixed-size list), `self.size` and `self.top`, where `top`
is the index of the top item and is −1 when the stack is empty. Write the `pop` method. It should return
`None` if the stack is empty. **[4]**

**7.** Write a Python function `reverse_words(sentence)` that uses a list as a stack to return the words of
`sentence` in reverse order, separated by single spaces. For example, "stacks are last in first out" should
give "out first in last are stacks". **[4]**

**8.** A bracket checker pushes each opening bracket. For each closing bracket it pops and checks that the
popped bracket is the matching type. The text is balanced only if every check passes and the stack is empty
at the end.

Trace the checker on the text `{[()]}(`. Show the stack after each character and give the result. **[4]**

**9.** A text editor pushes each action onto an undo stack. A user performs these actions in order: types
"cat", types "dog", deletes "dog", types "eel".

**(a)** The user presses undo twice. State which two actions are undone, in order. **[2]**
**(b)** Explain why a queue would be unsuitable for the undo feature. **[1]**

**10.** A programmer uses a Python list as a stack instead of a fixed-size array.

**(a)** Explain why the list version does not need a full test. **[1]**
**(b)** State what happens if `pop()` is called on an empty list. **[1]**
**(c)** Give **one** reason the specification still expects you to implement a full test. **[1]**

**11.** An array stack has size 10. Give the empty test and the full test for:

**(a)** a stack using `top` (index of the top item, starting at −1) **[2]**
**(b)** a stack using `next_free` (index of the next empty slot, starting at 0) **[2]**

**12.** This function converts a positive integer to binary.

```python
def to_binary(n):
    stack = []
    while n > 0:
        stack.append(n % 2)
        n = n // 2
    result = ""
    while len(stack) > 0:
        result = result + str(stack.pop())
    return result
```

**(a)** State the value returned by `to_binary(13)`. **[1]**
**(b)** Explain why a stack is used to build the result. **[2]**

## Answers

**1.** Last in, first out: the most recently added item is removed first [1]; **push** [1]. **[2]**

**2. (a)** Returns **2**; stack unchanged: 4, 9, 2 [1]
**(b)** Returns **2**; stack becomes 4, 9 [1]

**3. (a)** **Full**: `top` = size − 1 = 5 [1]
**(b)** top + 1 = **6** items [1]

**4.** The most recently called subroutine must **finish and return first** [1]; a stack frame (return
address, parameters, local variables) is pushed on each call and popped on return, which is LIFO order [1].
**[2]**

**5.** First pop returns **2** [1]. Push 6 **fails (overflow)** because `next_free` = 4, so the stack is full
[1]. Second pop returns **1** [1]. Peek returns **8** [1]. Final `next_free` = **3** [1]. **[5]**
*Examiner insight:* After the first pop, 5 is stored at index 1, overwriting the old 2; the final array is
7, 5, 8, 1, and the logical stack is 7, 5, 8.

**6.** Example answer:

```python
def pop(self):
    if self.top == -1:                 # [1] empty test
        return None                    # [1] underflow handled
    item = self.items[self.top]        # [1] read the top item first
    self.top = self.top - 1            # [1] then move the pointer down
    return item
```

**[4]**

**7.** Example answer:

```python
def reverse_words(sentence):
    stack = []
    for word in sentence.split():      # [1] split into words
        stack.append(word)             # [1] push each word
    reversed_words = []
    while len(stack) > 0:              # [1] pop until empty
        reversed_words.append(stack.pop())
    return " ".join(reversed_words)    # [1] join with spaces and return
```

**[4]**

**8.**

| Character | Stack after (bottom → top) |
|---|---|
| { | { |
| [ | {, [ |
| ( | {, [, ( |
| ) | {, [ (popped ( matches) |
| ] | { (popped [ matches) |
| } | empty (popped { matches) |
| ( | ( |

Pushes for the three openers correct [1]; three correct matching pops [1]; final push of ( [1]; result
**unbalanced (False)** because the stack is not empty at the end [1]. **[4]**

**9. (a)** **Type "eel"** is undone first [1], then **delete "dog"** [1]. **[2]**
**(b)** A queue would undo the **oldest** action first (typing "cat"), not the most recent [1].

**10. (a)** A Python list **grows dynamically**, so it has no fixed capacity to fill [1].
**(b)** It raises an **`IndexError`** [1].
**(c)** Any one [1]: array implementations have a **fixed size** set in advance; the specification requires
implementation in a **one-dimensional array** with empty and full tests; memory-limited systems such as a
call stack can overflow.

**11. (a)** Empty: `top == -1` [1]; full: `top == 9` [1]. **[2]**
**(b)** Empty: `next_free == 0` [1]; full: `next_free == 10` [1]. **[2]**

**12. (a)** **"1101"** [1]
**(b)** Repeated division produces the binary digits **least significant first** [1]; popping them from a
stack returns them in **reverse order**, most significant first, which is the order they must be written [1].
**[2]**

## Frequently asked questions

**Do I have to use a particular pointer convention?**
Use the one the question gives. If you design your own, state the starting value and keep the empty and
full tests consistent with it.

**Is peek on an empty stack an error?**
Yes. It is treated like underflow, so check for an empty stack before reading the top item.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS
exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.2.4 Stacks.
