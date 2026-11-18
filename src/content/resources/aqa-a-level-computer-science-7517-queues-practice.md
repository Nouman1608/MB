---
title: "AQA A-Level Computer Science (7517): Queues -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of data structures"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 2.2
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-data-structures"
    subtopic: "queues-7517"
description: "Original AQA 7517 section 4.2.2 questions with answers: tracing and writing add, remove, empty and full tests for linear, circular and priority queues."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Queues study guide](/resources/aqa-a-level-computer-science-7517-queues/) | [Queues revision notes](/resources/aqa-a-level-computer-science-7517-queues-revision-notes/)

Unless a question says otherwise, queues are held in an array `q` indexed from 0, with variables `front`, `rear` and `size`. On creation, `front = 0`, `rear = -1` and `size = 0`.

---

## Section A

**1.** State the order in which items leave a queue, and name this property. **[2]**

**2.** State the condition that shows a circular queue is empty. **[1]**

**3.** State the condition that shows a linear queue (without shuffling) is full. **[1]**

**4.** Explain how a priority queue decides which item to remove next. **[2]**

**5.** Explain why a removed item is still present in the array after DeQueue in an array-based queue, and why this does not matter. **[2]**

## Section B

**6.** A circular queue has 5 slots. Starting from creation, these operations are carried out:

add 10, add 20, add 30, add 40, remove, remove, add 50, add 60, add 70, add 80

**(a)** State the values returned by the two removals. **[1]**
**(b)** Give the values of front, rear and size after add 70. **[3]**
**(c)** State what happens when 80 is added, and why. **[2]**
**(d)** List the items in the queue, front first, after all the operations. **[1]**

**7.** The same operations as in Question 6 are carried out on a **linear** queue of 5 slots.

**(a)** State the first operation that fails, and explain why it fails. **[2]**
**(b)** State how many slots are unused at that point. **[1]**

**8.** Write the EnQueue subroutine for a circular queue, including the full test. **[4]**

**9.** Write the DeQueue subroutine for a circular queue, including the empty test, returning the item removed. **[4]**

**10.** A priority queue is kept in priority order, highest first; larger numbers are higher priorities. Items are added in this order:

(J, 1), (K, 3), (L, 1), (M, 2), (N, 3)

**(a)** Show the contents of the queue, front first, after all five have been added. **[3]**
**(b)** State the order in which the items will be removed. **[1]**

**11.** A circular queue of 5 slots has front = 3, rear = 1 and size = 4.

**(a)** State the indices of the occupied slots, front first. **[1]**
**(b)** One item is added. State the new values of rear and size, and whether the queue is now full. **[2]**

**12.** A priority queue is implemented by adding every item at the rear, and searching when removing. Describe how the removal operation must work so that items of equal priority still leave in arrival order. **[3]**

**13.** Compare a linear queue that shuffles items forward after each removal with a circular queue, in terms of the full test and the time taken by each removal. **[4]**

---

## Answers

**1.** The first item added is the first removed (in order of arrival) [1]; first in, first out (FIFO) [1].

**2.** size = 0 [1].

**3.** rear = maxSize − 1 (the rear pointer is at the last index of the array) [1].

**4.** Each item has a priority; the item with the highest priority is removed first [1], and items with equal priority are removed in the order they arrived [1].

**5.** DeQueue only moves the front pointer (and reduces the size); it does not erase the slot [1]; the old value lies outside the range front to rear, so it is no longer part of the queue and will be overwritten when the slot is reused [1].

**6. (a)** 10, then 20 [1].
**(b)** front = 2 [1]; rear = 1 [1]; size = 5 [1].
**(c)** It is rejected (the queue reports full) [1], because size = maxSize = 5 [1].
**(d)** 30, 40, 50, 60, 70 [1].

**7. (a)** Adding 60 fails [1]: after 50 is added, rear = 4, the last index, so the linear queue reports full even though items have been removed [1].
**(b)** Two (slots 0 and 1) [1].

**8.**
```
SUBROUTINE EnQueue(item)
    IF size = maxSize THEN
        OUTPUT "Queue full"
    ELSE
        rear ← (rear + 1) MOD maxSize
        q[rear] ← item
        size ← size + 1
    ENDIF
ENDSUBROUTINE
```
Full test before adding [1]; rear advanced with MOD wrap-round [1]; item stored at the new rear position [1]; size incremented [1].

**9.**
```
SUBROUTINE DeQueue()
    IF size = 0 THEN
        OUTPUT "Queue empty"
    ELSE
        item ← q[front]
        front ← (front + 1) MOD maxSize
        size ← size - 1
        RETURN item
    ENDIF
ENDSUBROUTINE
```
Empty test before removing [1]; item read from the front position before the pointer moves [1]; front advanced with MOD wrap-round [1]; size decremented and item returned [1].

**10. (a)** (K, 3), (N, 3), (M, 2), (J, 1), (L, 1). K and N at the front with N behind K [1]; M next [1]; J ahead of L [1].
**(b)** K, N, M, J, L [1].

**11. (a)** 3, 4, 0, 1 [1].
**(b)** rear = (1 + 1) MOD 5 = 2 and size = 5 [1]; the queue is now full [1].

**12.** Test for empty first [1]; scan every item from the front to the rear, recording the position of the highest priority found, replacing it only when a strictly higher priority is found, so the first (earliest) item of that priority is kept [1]; remove and return that item and close the gap by moving the later items forward one place (then update rear and size) [1].

**13.** Full test: the shuffling queue is full when size = maxSize, so no space is wasted [1]; the circular queue is also full only when size = maxSize, so both reuse all slots [1]. Removal time: the shuffling queue moves every remaining item one place on each removal, so the time grows with the number of items [1]; the circular queue only changes the front pointer and the size, so each removal takes the same short time whatever the length [1].

---

## Where marks are usually lost

- Forgetting the MOD wrap when rear or front passes the last index.
- Treating a linear queue as full only when size = maxSize.
- Placing a new priority item ahead of existing items of equal priority.
- Reading `q[front]` after moving the front pointer.
- Listing removed items as still in the queue.
