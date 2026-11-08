---
title: "OxfordAQA A Level Computer Science: Records, Queues and Stacks — Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamental data structures"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 6
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
description: "Original questions with worked answers on records, linear and circular queues and stacks, with traces and Python code, for OxfordAQA Computer Science 9645."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Records, Queues and Stacks study guide](/resources/a-level-oxfordaqa-computer-science-records-queues-and-stacks/) · [Records, Queues and Stacks revision notes](/resources/oxfordaqa-a-level-computer-science-records-queues-stacks-revision-notes/)

---

**What do these questions practise?** Sub-topics 3.2.2 (Records), 3.2.3 (Queues) and 3.2.4 (Stacks)
of OxfordAQA International AS and A-level Computer Science 9645: definitions and operations,
appropriate uses, array implementations with empty and full tests, traces and library use.

## Section A

**1.** Explain what is meant by a *record* and a *field*. **[2]**

**2.** State whether a queue and a stack are FIFO or LIFO structures. **[2]**

**3.** State the difference between the stack operations *pop* and *peek*. **[2]**

**4.** Give **one** situation where a queue is appropriate and **one** where a stack is appropriate,
explaining each. **[4]**

## Section B

**5.** A stack of size 5 is implemented in a one-dimensional array with pointer `top`, initially −1.
The following operations are carried out: push 4, push 7, pop, push 1, push 3, pop, peek.
**(a)** State the value returned by each pop and by the peek. **[3]**
**(b)** State the final value of `top`. **[1]**

**6.** A circular queue of size 4 uses `front`, `rear` and `count`, initially 0, −1 and 0. The
operations are: enqueue 10, 20, 30; dequeue; dequeue; enqueue 40, 50, 60.
**(a)** Give the contents of the array and the values of `front`, `rear` and `count` at the end. **[4]**
**(b)** State whether the queue is full. **[1]**

**7.** Explain why a linear queue implemented in an array may report that it is full when there are
unused spaces in the array, and describe how a circular queue overcomes this. **[4]**

**8.** Write Python code for the `push` method of a stack class that stores items in `self.items`,
has capacity `self.size` and pointer `self.top`. It should return `False` if the stack is full. **[4]**

**9.** A program stores details of products: a product code (string), a price (real) and a quantity in
stock (integer). Describe how a record could be used, and how many products could be stored. **[3]**

## Section C

**10.** Describe how a stack could be used to reverse the string "QUEUE", and state the output. **[3]**

**11.** Evaluate whether a programmer should implement their own queue in an array or use a language
library queue. **[6]**

---

## Answers

**1.** A record is a collection of related data items treated as a single entity [1]; each data item
in it is a field, which has a name and may have its own data type [1].

**2.** Queue: FIFO (first in, first out) [1]. Stack: LIFO (last in, first out) [1].

**3.** Pop returns the top item and removes it from the stack, decrementing `top` [1]; peek returns
the top item without removing it, so `top` is unchanged [1].

**4.** Queue, any one with reason: print queue, so documents print in the order sent [2]; keyboard
buffer, so keys are processed in order [2]. Stack, any one with reason: undo, because the most recent
action must be reversed first [2]; subroutine calls, because the most recent call returns first [2].

**5. (a)** First pop returns 7 [1]; second pop returns 3 [1]; peek returns 1 [1].
**(b)** `top` = 1 [1].

**6. (a)** Array `[50, 60, 30, 40]` [1]; `front` = 2 [1]; `rear` = 1 [1]; `count` = 4 [1].
**(b)** Yes, the queue is full because `count` equals the size [1].

**7.** In a linear queue `rear` only moves forward, so once it reaches the last index the queue is
treated as full [1], even though dequeued items at the front have left free spaces [1]. A circular
queue lets the pointers wrap around to index 0 using `(pointer + 1) MOD size` [1], so freed spaces at
the start of the array can be reused without moving any items [1].

**8.** Example answer:

```python
def push(self, item):
    if self.top == self.size - 1:   # full test [1]
        return False                # [1]
    self.top += 1                   # increment pointer [1]
    self.items[self.top] = item     # store at new top [1]
    return True
```

**9.** Define a record type, for example a data class `Product`, with fields `code: str`,
`price: float` and `quantity: int` [1]; each product is one record, so its fields can be passed and
updated together [1]; store the records in an array or list, so the number of products is limited
only by the array size, or is unlimited for a dynamic list [1].

**10.** Push each character in order: Q, U, E, U, E [1]. Then pop repeatedly until the stack is
empty, appending each popped character to the output [1]. Output: "EUEUQ" [1].

**11.** Own implementation, for: shows understanding of how the structure works [1]; full control
over size and behaviour, such as a fixed-size buffer [1]; useful where no library exists [1].
Against: takes time to write and test [1]; risk of errors in pointer handling [1]. Library, for:
already tested, efficient and documented, such as Python's `collections.deque` [1]; less code to
write [1]. Against: less control over memory and may hide behaviour [1]. A justified conclusion, for
example that libraries are preferable in production code but own implementations aid learning or
special requirements, is needed for full marks. Maximum 6.

## Frequently asked questions

**Will I have to write code in the exam?**
Programming questions can ask you to write or complete
code in your chosen language; practise the empty and full tests until they are automatic.

**Should my code clear the array slot after a pop?**
It is not required; moving the pointer is what
removes the item from the stack's logical contents.

*Based on the OxfordAQA International AS and A-level Computer Science (9645) specification,
Version 1.1, sub-topics 3.2.2 to 3.2.4.*
