---
title: "OxfordAQA A-Level Computer Science: Records, Queues and Stacks (9645)"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamental data structures"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 4
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
description: "Study guide to 9645 sub-topics 3.2.2 to 3.2.4: records, linear and circular queues, and stacks in one-dimensional arrays, with Python code and library use."
author: "marlbridge-academic-team"
publishedDate: 2026-11-08
featured: false
---

**Records, queues and stacks are sub-topics 3.2.2, 3.2.3 and 3.2.4 of OxfordAQA International AS and
A-level Computer Science 9645, within topic 3.2 Fundamental data structures (AS).** A record groups
named fields into one entity; a queue is a first-in first-out (FIFO) structure; a stack is a
last-in first-out (LIFO) structure. You must be able to apply their operations, choose when each is
appropriate, implement queues and stacks in a one-dimensional array with empty and full tests, and
use a language library that provides them.

## Syllabus coverage

**OXFORDAQA INTERNATIONAL AS AND A-LEVEL COMPUTER SCIENCE (9645), VERSION 1.1**

**3.2.2 Records**
- Be familiar with grouping values (fields) into a record that can be manipulated as a single entity
- The specification notes that Python classes can be used in a non-object-oriented way, or data classes from Python 3.7, and that C# and Visual Basic use struct and Structure

**3.2.3 Queues**
- A queue is a first-in first-out (FIFO) data structure
- Apply enqueue (add) and dequeue (remove)
- Describe situations where a queue is appropriate
- Implement a linear queue and a circular queue in a one-dimensional array, including testing whether the queue is empty or full
- Experience of a programming language library that implements a queue

**3.2.4 Stacks**
- A stack is a last-in first-out (LIFO) data structure
- Apply push, pop and peek (also called top), where peek returns the top item without removing it
- Describe situations where a stack is appropriate
- Implement a stack in a one-dimensional array, including testing whether it is empty or full
- Experience of a programming language library that implements a stack

## What is a record?

A **record** is a collection of related values, called **fields**, that may be of different data
types and are treated as one item. A student record might hold a name (string), a year group
(integer) and a score (real). Unlike an array, whose elements are the same type and accessed by
index, a record's fields are accessed by name.

In Python, the specification suggests a class used simply to hold fields, or a data class:

```python
from dataclasses import dataclass

@dataclass
class Student:
    name: str = ""
    year: int = 0
    score: float = 0.0

s = Student("Aisha", 12, 87.5)
print(s.name, s.score)   # Aisha 87.5
```

An array (list) of records is a common way to store a table of data, such as `students = [Student(...), ...]`,
then loop through and access `students[i].score`.

## What is a queue and when is it used?

A queue adds items at the **rear** and removes them from the **front**, so the first item in is the
first out. Typical uses:

- **Print queues:** documents are printed in the order they were sent.
- **Keyboard buffers:** keystrokes are processed in the order typed.
- **Task scheduling:** processes waiting for the processor in a simple round-robin system.
- **Simulations:** customers waiting at a checkout.
- **Breadth-first traversal** of a graph (met later in the course).

## How is a linear queue implemented in an array?

A **linear queue** uses an array plus two pointers, `front` and `rear`. Enqueue increments `rear`
and stores the item; dequeue reads the item at `front` and increments `front`.

```python
class LinearQueue:
    def __init__(self, size):
        self.items = [None] * size
        self.size = size
        self.front = 0
        self.rear = -1

    def is_empty(self):
        return self.rear < self.front

    def is_full(self):
        return self.rear == self.size - 1

    def enqueue(self, item):
        if self.is_full():
            return False
        self.rear += 1
        self.items[self.rear] = item
        return True

    def dequeue(self):
        if self.is_empty():
            return None
        item = self.items[self.front]
        self.front += 1
        return item
```

**The weakness:** once `rear` reaches the last index the queue reports full, even if items have been
dequeued from the front and spaces are free. Shuffling all items forward after each dequeue fixes
this, but costs time proportional to the number of items.

## How does a circular queue solve the problem?

A **circular queue** treats the array as a ring: when a pointer reaches the end it wraps to index 0
using the modulus operator. A `count` of items makes the empty and full tests simple.

```python
class CircularQueue:
    def __init__(self, size):
        self.items = [None] * size
        self.size = size
        self.front = 0
        self.rear = -1
        self.count = 0

    def is_empty(self):
        return self.count == 0

    def is_full(self):
        return self.count == self.size

    def enqueue(self, item):
        if self.is_full():
            return False
        self.rear = (self.rear + 1) % self.size
        self.items[self.rear] = item
        self.count += 1
        return True

    def dequeue(self):
        if self.is_empty():
            return None
        item = self.items[self.front]
        self.front = (self.front + 1) % self.size
        self.count -= 1
        return item
```

**Trace (size 4):** enqueue 10, 20, 30; dequeue twice (returns 10 then 20); enqueue 40, 50, 60. The
array is now `[50, 60, 30, 40]`, with `front = 2`, `rear = 1`, `count = 4`, so the queue is full and
the freed spaces have been reused.

## What is a stack and when is it used?

A stack adds and removes items only at the **top**, so the last item pushed is the first popped.
Typical uses:

- **Subroutine calls:** the call stack stores return addresses, parameters and local variables.
- **Undo** in editors: the most recent action is undone first.
- **Browser back button.**
- **Reversing** a sequence, such as a string.
- **Evaluating expressions** and checking matched brackets.

## How is a stack implemented in an array?

A single pointer, `top`, holds the index of the most recently pushed item; it starts at -1 for an
empty stack.

```python
class Stack:
    def __init__(self, size):
        self.items = [None] * size
        self.size = size
        self.top = -1

    def is_empty(self):
        return self.top == -1

    def is_full(self):
        return self.top == self.size - 1

    def push(self, item):
        if self.is_full():
            return False      # stack overflow
        self.top += 1
        self.items[self.top] = item
        return True

    def pop(self):
        if self.is_empty():
            return None       # stack underflow
        item = self.items[self.top]
        self.top -= 1
        return item

    def peek(self):
        if self.is_empty():
            return None
        return self.items[self.top]
```

Trying to push onto a full stack is **overflow**; trying to pop from an empty stack is **underflow**.

## Which libraries implement queues and stacks?

In Python, `collections.deque` gives fast `append` and `popleft` for a queue, and `append` and `pop`
for a stack; `queue.Queue` and `queue.LifoQueue` provide thread-safe versions; a plain list works as a
stack with `append` and `pop`. In C# and Visual Basic, `Queue<T>` and `Stack<T>` (in
`System.Collections.Generic`) offer `Enqueue`/`Dequeue` and `Push`/`Pop`/`Peek`.

## Frequently asked questions

**What is the difference between pop and peek?** Pop returns the top item and removes it; peek
returns it without removing it.

**Why use a circular queue rather than a linear one?** It reuses space freed by dequeuing without
moving items, so a fixed-size array can keep operating.

**Is a record the same as an object?** A record only stores data; an object in object-oriented
programming also bundles methods. The specification uses classes without methods to create records.

## Related pages

- [Records, Queues and Stacks revision notes](/resources/oxfordaqa-a-level-computer-science-records-queues-stacks-revision-notes/)
- [Records, Queues and Stacks practice questions](/resources/oxfordaqa-a-level-computer-science-records-queues-stacks-practice/)
- [Arrays and Lists study guide](/resources/a-level-oxfordaqa-computer-science-arrays-and-lists/)

*Source: OxfordAQA, International AS and A-level Computer Science (9645) specification, Version 1.1,
sub-topics 3.2.2 to 3.2.4.*
