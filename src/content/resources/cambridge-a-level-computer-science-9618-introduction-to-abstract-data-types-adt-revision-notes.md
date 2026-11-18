---
title: "Cambridge A Level Computer Science (9618): Introduction to Abstract Data Types (ADT) -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for 9618 section 10.4: ADT definition, stack, queue and linked list features, pointer rules for array implementations, traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Condensed notes for 10.4 Introduction to Abstract Data Types, AS content in Cambridge International AS & A Level Computer Science 9618, examined in Paper 2. You need to define an ADT, describe and justify a stack, queue and linked list, add, edit and delete data in each, and describe how each is built from arrays. You will not be asked to write pseudocode for these structures.

Related: [ADT study guide](/resources/cambridge-a-level-computer-science-9618-introduction-to-abstract-data-types-adt/) · [ADT practice questions](/resources/cambridge-a-level-computer-science-9618-introduction-to-abstract-data-types-adt-practice/) · [Data Types and Structures revision notes](/resources/cambridge-a-level-computer-science-data-types-and-structures-revision-notes/)

## The definition to learn

An **abstract data type** is a collection of data together with a set of operations on that data. It is described by its behaviour, not its implementation. Benefits: users of the ADT need only its operations; its implementation can change without changing the programs that use it; the data can only be altered through its operations.

## Stack at a glance

- **LIFO**: last in, first out. One end only, the top.
- **Push** adds at the top; **pop** removes and returns the top item.
- Pushing onto a full stack is **overflow**; popping an empty stack is **underflow**.
- **Array version**: one array plus a **base pointer** and a **top pointer**.
  - If TopPointer holds the index of the top item: push = increment then store; pop = read then decrement; empty when TopPointer is below the base.
  - If TopPointer holds the next free slot: push = store then increment; pop = decrement then read.
- **Uses**: return addresses for nested subroutine calls, undo, browser back button, reversing a sequence.

## Queue at a glance

- **FIFO**: first in, first out. Join at the **rear**, leave from the **front**.
- **Enqueue** adds at the rear; **dequeue** removes and returns the front item.
- **Linear queue in an array**: pointers only move forward, so slots freed at the start cannot be reused.
- **Circular queue in an array**: a pointer that passes the last index wraps back to the first. Keep a count of items so that full and empty can be told apart.
  - Enqueue: check count < size; move RearPointer on (wrapping); store; add 1 to count.
  - Dequeue: check count > 0; read item at FrontPointer; move FrontPointer on (wrapping); subtract 1 from count.
- **Uses**: print queue, keyboard buffer, processes waiting for the processor, data waiting to be sent.

## Linked list at a glance

- Each **node** = data + pointer to the next node. **Start pointer** to the first node; last node holds the **null pointer**.
- Order comes from the pointers, not the positions in memory.
- **Array version**: parallel Data and Pointer arrays (or an array of records), a start pointer, and a **free list** of unused nodes with a **free pointer**.
- **Add**: take the node at FreePointer; FreePointer ← that node's pointer; store data; find the previous node; new node's pointer ← previous node's pointer; previous node's pointer ← new node.
- **Add at the front**: new node's pointer ← StartPointer; StartPointer ← new node.
- **Delete**: previous node's pointer (or StartPointer) ← deleted node's pointer; deleted node's pointer ← FreePointer; FreePointer ← deleted node.
- **Edit**: traverse from StartPointer, overwrite the data; in an ordered list, a changed key means delete and re-add.
- **Uses**: ordered data with frequent insertions and deletions. Cost: no direct access to the nth item; extra memory for pointers.

## Key terms

| Term | Meaning |
|---|---|
| Abstract data type | A collection of data and a set of operations on those data |
| Stack | LIFO structure; items added and removed at the top |
| Queue | FIFO structure; items added at the rear, removed from the front |
| Linked list | Nodes holding data and a pointer to the next node, in logical order |
| Node | One element of a linked list: data plus a pointer |
| Null pointer | A value showing there is no next node, such as −1 |
| Start pointer | Holds the index of the first node in a linked list |
| Free list | The unused nodes, linked together so a new node can be found |
| Circular queue | A queue whose pointers wrap from the last array slot to the first |
| Stack overflow | An attempt to push onto a full stack |
| Stack underflow | An attempt to pop from an empty stack |

## Exam traps

- An ADT definition without the word "operations" will not score.
- Data does not move in an array-based stack or queue. Only the pointers change, and old values stay in memory until overwritten.
- In a linked list, set the new node's pointer before redirecting the previous node, or the rest of the list is lost.
- Using a node from the free list without moving the free pointer, or deleting a node without returning it to the free list.
- Confusing the two stack pointer conventions. Use the one the question defines.
- In a circular queue, forgetting the wrap-around when the rear pointer is at the last index.
- Justifications that ignore the scenario. Link LIFO or FIFO to what the situation needs.

## Self-test

1. Define an abstract data type.
2. A stack holds 4, 9, 2 with 2 on top. Give the contents after push 7, pop, pop.
3. What is stack underflow?
4. State the two pointers needed for a queue held in an array.
5. Why does a linear queue in an array waste space?
6. Why does a circular queue keep a count of items?
7. Queue[1:5] has RearPointer = 5 and NumberInQueue = 3. Where does the next item go?
8. State the purpose of the free pointer in an array-based linked list.
9. What value marks the end of a linked list?
10. A node is deleted from the middle of a linked list. Which pointer of which node changes?
11. Give one reason for choosing a linked list rather than a sorted array.
12. Which ADT suits storing return addresses for nested subroutine calls, and why?

**Answers:** 1. A collection of data and a set of operations on those data, defined without saying how it is implemented. 2. Push 7 gives 4, 9, 2, 7; the pops remove 7 then 2, leaving 4, 9 with 9 on top. 3. An attempt to pop an item from an empty stack. 4. A front pointer and a rear pointer. 5. Slots at the start are freed by dequeuing but the pointers only move forward, so those slots are never reused. 6. The front and rear pointers alone can look the same when the queue is full and when it is empty. 7. Slot 1, because the rear pointer wraps round (there is room, as 3 is less than 5). 8. It gives the index of the first unused node, where a new item can be stored. 9. The null pointer, such as −1. 10. The pointer of the node before it, which takes the deleted node's pointer value. 11. Insertion and deletion only change pointers, so no items need to be shifted. 12. A stack, because the most recently called subroutine must return first (LIFO).
