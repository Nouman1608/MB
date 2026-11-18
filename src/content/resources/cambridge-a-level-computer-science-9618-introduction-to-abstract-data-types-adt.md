---
title: "Cambridge A Level Computer Science (9618): Introduction to Abstract Data Types (ADT)"
resourceType: "study-guides"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 10: Data Types and Structures"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 10.4
syllabusTopics:
  - qualification: "a-level"
    topic: "data-types-and-structures"
    subtopic: "introduction-to-abstract-data-types-adt"
description: "Study guide to 9618 section 10.4: what an ADT is, stacks, queues and linked lists, adding and deleting data, and implementing each one with arrays."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Section 10.4 of Cambridge International AS & A Level Computer Science 9618 introduces the abstract data type (ADT). You must show that an ADT is "a collection of data and a set of operations on those data", recognise the stack, queue and linked list as ADTs, use each one to store data, and describe how each can be built from arrays. It is AS content, examined in Paper 2.

Related: [ADT revision notes](/resources/cambridge-a-level-computer-science-9618-introduction-to-abstract-data-types-adt-revision-notes/) · [ADT practice questions](/resources/cambridge-a-level-computer-science-9618-introduction-to-abstract-data-types-adt-practice/) · [Data Types and Structures study guide](/resources/cambridge-a-level-computer-science-data-types-and-structures-study-guide/)

## What the specification asks

| Candidates should be able to | What that means in an answer |
|---|---|
| Show understanding that an ADT is a collection of data and a set of operations on those data | Define the ADT by what it stores and what can be done to it, not by how it is coded |
| Show understanding that a stack, queue and linked list are examples of ADTs | Describe the key features of each and justify its use for a given situation |
| Use a stack, queue and linked list to store data | Add, edit and delete data, usually by completing diagrams or tables of pointers |
| Describe how a queue, stack and linked list can be implemented using arrays | Name the arrays and pointers needed and say how each pointer changes |

The notes and guidance say you will **not** be asked to write pseudocode for these structures. The marks come from accurate descriptions, correct pointer values and well-drawn tables.

## The idea of abstraction

An ADT separates **what** a structure does from **how** it does it. A program that uses a stack only calls operations such as push and pop; it never touches the array behind them. This has three benefits you can quote:

- the programmer using the ADT needs to know only the operations, which reduces complexity;
- the implementation can be changed (for example from a fixed array to dynamic memory) without changing the code that uses it;
- the data can only be changed through the defined operations, so it cannot be put into an invalid state by accident.

## Stack

A **stack** is a last in, first out (LIFO) structure. Items are added and removed at the same end, the **top**. The bottom item was added first and leaves last.

- **Push** adds an item to the top. If the stack is already full, this causes **stack overflow** and the item cannot be added.
- **Pop** removes and returns the top item. Popping an empty stack causes **stack underflow**.
- Some designs also let you look at the top item without removing it.

**Array implementation**: a one-dimensional array holds the items, a **base pointer** gives the index of the bottom slot, and a **top pointer** gives the index of the current top item. With Stack[1:8], an empty stack can be shown by TopPointer = 0. Push increments TopPointer then stores the item; pop returns Stack[TopPointer] then decrements it. Some questions instead define the pointer as the **next free** slot; read the question's definition and apply it consistently.

**When to use a stack**: whenever the most recent item must be dealt with first. Examples are storing return addresses when one subroutine calls another (the latest call must return first), undo in an editor, the back button of a browser, and reversing the order of a list of items.

## Queue

A **queue** is a first in, first out (FIFO) structure. Items join at the **rear** and leave from the **front**, so they are served in arrival order.

- **Enqueue** adds an item at the rear (impossible if the queue is full).
- **Dequeue** removes and returns the item at the front (impossible if it is empty).

**Linear queue in an array**: a front pointer and a rear pointer move along the array as items join and leave. The problem is that slots at the start become unusable once their items have been dequeued, so the queue can report "full" while the array has empty spaces.

**Circular queue in an array**: when the rear pointer passes the last index it wraps round to the first, and so does the front pointer. A counter of the number of items is kept so that a full queue can be told apart from an empty one, because in both cases the pointers alone can look similar.

**When to use a queue**: whenever items must be processed in the order they arrive and fairly, such as documents waiting for a printer, key presses held in a keyboard buffer, or processes waiting for time on the processor.

## Linked list

A **linked list** is an ordered set of **nodes**. Each node holds data and a **pointer** to the next node. A **start pointer** gives the first node and the last node holds a **null pointer** (often shown as −1 or 0). The logical order comes from the pointers, not from where the nodes sit in memory.

**Array implementation**: use one array for the data and a parallel array for the pointers, or one array of records with a Data field and a Pointer field. Unused nodes are linked together into a **free list** with its own **free pointer**, so the program always knows where a new node can go.

- **Add**: take the node at the free pointer, move the free pointer on, store the data, then find the node that should come before the new one. Copy that node's pointer into the new node, then point that node at the new one. If the new item belongs first, the new node takes the old start pointer and the start pointer changes.
- **Delete**: find the node and the one before it. Copy the deleted node's pointer into the node before it (or into the start pointer if it was first), then return the deleted node to the free list.
- **Edit**: traverse from the start pointer until the data is found and overwrite it. In an ordered list, changing the data that sets the order means deleting the node and adding it again.

**When to use a linked list**: when items are inserted and removed often and must stay in order, because no data is shifted, only pointers change. The cost is that finding the tenth item means following nine pointers, and the pointers take extra memory.

## Worked example 1: a circular queue

Queue[1:6] starts empty with FrontPointer = 1, RearPointer = 0 and NumberInQueue = 0. Enqueue A, B, C, D, E; dequeue twice; then enqueue F, G, H and I.

| Operation | FrontPointer | RearPointer | NumberInQueue | Note |
|---|---|---|---|---|
| Enqueue A to E | 1 | 5 | 5 | Slots 1 to 5 filled |
| Dequeue | 2 | 5 | 4 | Returns A |
| Dequeue | 3 | 5 | 3 | Returns B |
| Enqueue F | 3 | 6 | 4 | Slot 6 |
| Enqueue G | 3 | 1 | 5 | Rear wraps to slot 1 |
| Enqueue H | 3 | 2 | 6 | Slot 2; queue is full |
| Enqueue I | 3 | 2 | 6 | Rejected: NumberInQueue = 6 |

The array now holds G, H, C, D, E, F in slots 1 to 6, but the queue order is C, D, E, F, G, H, starting at the front pointer. A and B were never erased; their slots were simply reused. A linear queue would have refused G, because its rear pointer would already be at the last slot.

## Worked example 2: adding and deleting in a linked list

A list of integers in ascending order is held in two arrays. StartPointer = 5, FreePointer = 3 and −1 is the null pointer.

| Index | Data | Pointer |
|---|---|---|
| 1 | 42 | 4 |
| 2 | 17 | 1 |
| 3 | | 6 |
| 4 | 58 | −1 |
| 5 | 9 | 2 |
| 6 | | −1 |

Following the pointers from index 5 gives 9, 17, 42, 58. The free list is 3 then 6.

**Add 30.** Use node 3 and move FreePointer to Pointer[3], which is 6. Store 30 in Data[3]. Traversing shows 30 belongs after 17 (index 2), so Pointer[3] ← Pointer[2] = 1, then Pointer[2] ← 3. The order is now 9, 17, 30, 42, 58.

**Delete 9.** It is the first node, so StartPointer ← Pointer[5] = 2. Node 5 joins the free list: Pointer[5] ← FreePointer (6), then FreePointer ← 5.

| Index | Data | Pointer |
|---|---|---|
| 1 | 42 | 4 |
| 2 | 17 | 3 |
| 3 | 30 | 1 |
| 4 | 58 | −1 |
| 5 | 9 | 6 |
| 6 | | −1 |

StartPointer = 2 and FreePointer = 5. The value 9 is still in Data[5], but no pointer from the start reaches it, so it is no longer in the list.

## Common mistakes

- Defining an ADT as "a data structure" without mentioning the operations on the data.
- Moving the data in a stack or queue instead of the pointers. In an array implementation, items stay where they were written.
- Writing the new node's pointer after changing the previous node's pointer, which loses the rest of the list. Copy first, then redirect.
- Forgetting to update the free pointer when a node is used or released.
- Giving a reason for a choice that would apply to any structure, such as "it stores data efficiently".

## Exam technique

**Describe** a stack or queue: give the ordering rule (LIFO or FIFO), where items are added and removed, and the pointers used. **Justify** the use of a structure: link its ordering rule to the scenario, for example "the most recent page visited must be the first one returned to, so a stack's LIFO order fits". **Complete** a table: change only the cells the operation affects and show the final pointer values clearly. When asked how to implement with arrays, name every pointer and say how it changes on each operation, including the full and empty checks.
