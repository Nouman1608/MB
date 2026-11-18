---
title: "Cambridge A Level Computer Science (9618): Introduction to Abstract Data Types (ADT) -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original 9618 section 10.4 questions with mark-scheme answers on stacks, circular queues and linked lists held in arrays, pointer tables and justifying ADTs."
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
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [ADT study guide](/resources/cambridge-a-level-computer-science-9618-introduction-to-abstract-data-types-adt/) · [ADT revision notes](/resources/cambridge-a-level-computer-science-9618-introduction-to-abstract-data-types-adt-revision-notes/)

---

## Section A

**1.** State what is meant by an abstract data type (ADT). **[2]**

**2.** Give **two** differences between a stack and a queue. **[2]**

**3.** Identify the most suitable ADT (stack, queue or linked list) for each situation.

**(a)** Jobs sent by several users to one shared printer. **[1]**

**(b)** The undo feature of a drawing application. **[1]**

**(c)** A list of appointments kept in time order, where appointments are often booked and cancelled. **[1]**

**4.** Explain the terms stack overflow and stack underflow. **[2]**

**5.** A circular queue is held in an array. State why a count of the number of items in the queue is also stored. **[1]**

**6.** Give **two** benefits of a programmer using a stack through its push and pop operations only, rather than working directly on the array that holds it. **[2]**

## Section B

**7.** A stack is held in the array Stack[1:6]. TopPointer holds the index of the top item and is 0 when the stack is empty. The stack holds 15, 8 and 23, with 23 at the top.

**(a)** State the value of TopPointer. **[1]**

**(b)** The operations pop, push 11, push 6, push 40, push 2 are carried out. State the value returned by the pop, the final contents of the stack from bottom to top, and the final value of TopPointer. **[3]**

**(c)** A further push 19 is attempted. Explain what happens. **[2]**

**8.** A circular queue is held in the array Queue[1:5] with FrontPointer, RearPointer and NumberInQueue. Slots 3, 4 and 5 of the array hold P, Q and R respectively. FrontPointer = 3, RearPointer = 5 and NumberInQueue = 3.

**(a)** Describe the steps taken to add S to the queue, giving the new values of the pointer and the count. **[3]**

**(b)** Two items are then removed. State the items returned, and the final values of FrontPointer and NumberInQueue. **[3]**

**(c)** Explain why a linear queue in the same starting state could not add S. **[1]**

**9.** A linked list stores fruit names in alphabetical order. StartPointer = 6, FreePointer = 2 and −1 is the null pointer.

| Index | Data | Pointer |
|---|---|---|
| 1 | Lime | 5 |
| 2 | | 4 |
| 3 | Fig | 1 |
| 4 | | −1 |
| 5 | Pear | −1 |
| 6 | Apple | 3 |

**(a)** Write the fruit names in the order they are linked. **[1]**

**(b)** Kiwi is added to the list. Describe the changes to the table and the pointers. **[4]**

**(c)** Pear is then deleted from the list. Describe the changes to the table and the pointers. **[3]**

**10.** The list is now in the state left after Question 9(c). Fig is to be changed to Plum. Explain why overwriting the data stored at index 3 is not enough, and describe how the change should be made. **[3]**

**11.** Describe how a linked list can be implemented using arrays. **[4]**

**12.** An online grocery shop processes delivery orders in the order they are placed. It also keeps a list of drivers sorted by surname; drivers join and leave the company often. Justify the choice of ADT for **each** of these. **[4]**

---

## Answers

**1.** A collection of data [1] together with a set of operations on those data, described without stating how it is implemented [1].

**2.** Any two, 1 mark each: a stack is last in, first out but a queue is first in, first out [1]; a stack adds and removes items at the same end (the top) but a queue adds at the rear and removes from the front [1]; a stack needs one pointer to the top but a queue needs a front pointer and a rear pointer [1].

**3.** **(a)** Queue [1].

**(b)** Stack [1].

**(c)** Linked list [1].

**4.** Stack overflow is an attempt to push an item onto a stack that is already full [1]. Stack underflow is an attempt to pop an item from a stack that is empty [1].

**5.** The front and rear pointers can be in the same relative positions when the queue is full and when it is empty, so the count is needed to tell them apart [1].

**6.** Any two, 1 mark each: the programmer only needs to know the operations, not the implementation, so the program is simpler to write [1]; the implementation can be changed without changing the programs that use the stack [1]; the data can only be changed through push and pop, so it cannot be left in an invalid state [1].

**7.** **(a)** 3 [1].

**(b)** The pop returns 23 [1]. The stack from bottom to top is 15, 8, 11, 6, 40, 2 [1]. TopPointer = 6 [1].

**(c)** TopPointer is 6, the upper bound of the array, so the stack is full [1]. The push is refused / stack overflow is reported and 19 is not stored [1].

**8.** **(a)** Check that NumberInQueue (3) is less than 5, so there is room [1]. RearPointer is at the last index, so it wraps round to 1 [1]. S is stored in Queue[1] and NumberInQueue becomes 4 [1].

**(b)** P is returned first, then Q [1]. FrontPointer = 5 [1]. NumberInQueue = 2 [1].

**(c)** In a linear queue the rear pointer is already at the end of the array and cannot wrap round, so slots 1 and 2 cannot be reused [1].

**9.** **(a)** Apple, Fig, Lime, Pear [1].

**(b)** Kiwi is stored in the free node, Data[2] [1]. FreePointer becomes 4, the old value of Pointer[2] [1]. Kiwi belongs after Fig, so Pointer[2] is set to Fig's pointer value, 1 [1]. Pointer[3] (Fig) is set to 2 [1]. The order is now Apple, Fig, Kiwi, Lime, Pear.

**(c)** Lime (index 1) is the node before Pear, so Pointer[1] is set to Pear's pointer value, −1 [1]. Pointer[5] is set to the old FreePointer value, 4 [1]. FreePointer becomes 5 [1]. StartPointer stays 6.

**10.** The list is in alphabetical order, so Plum in Data[3] would sit between Apple and Kiwi, out of order [1]. The node holding Fig should be deleted (Pointer[6] ← Pointer[3] and the node returned to the free list) [1], and Plum added as a new node in the correct position, after Lime at the end of the list, so Lime's pointer points to the new node and the new node holds −1 [1].

**11.** One array holds the data of each node [1]. A second (parallel) array holds the pointer for each node, the index of the next node, or the nodes are an array of records with a data field and a pointer field [1]. A start pointer holds the index of the first node and a null value such as −1 marks the last node [1]. Unused nodes are linked into a free list, with a free pointer giving the first free node [1].

**12.** Orders: a queue [1], because it is first in, first out, so orders are processed in the order they were placed [1]. Drivers: a linked list [1], because drivers can be added and removed in surname order by changing pointers only, without moving the other items [1].

---

## Where marks are usually lost

- Defining an ADT as just "a way to store data", with no mention of operations.
- Leaving the free pointer unchanged after a node is used or released.
- Changing the previous node's pointer before copying its value into the new node.
- Forgetting the wrap-around in a circular queue, or the check for full or empty.
- Justifying a choice with a reason that does not mention LIFO, FIFO or pointer changes.
