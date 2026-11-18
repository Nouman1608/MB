---
title: "AQA A-Level Computer Science (7517): Abstract Data Types and Data Structures -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of data structures"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 2.14
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-data-structures"
    subtopic: "abstract-data-types-data-structures-7517"
description: "Original AQA 7517 section 4.2.1.4 questions with answers: ADTs, representations, static versus dynamic, and maintaining stacks, queues and hash tables."
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

Related: [Abstract data types study guide](/resources/aqa-a-level-computer-science-7517-abstract-data-types-data-structures/) | [Abstract data types revision notes](/resources/aqa-a-level-computer-science-7517-abstract-data-types-data-structures-revision-notes/)

---

## Section A

**1.** State what is meant by an **abstract data type**. **[1]**

**2.** Give **two** benefits of keeping the operations of an abstract data type separate from its implementation. **[2]**

**3.** Distinguish between a **static** and a **dynamic** data structure. **[2]**

**4.** State **two** typical uses of a stack. **[2]**

**5.** Explain why a dictionary is often implemented using a hash table. **[2]**

## Section B

**6.** A stack is implemented dynamically. Each node holds `data` and `next`, and `top` refers to the top node. The stack is empty. The following operations are carried out in order:

Push(7), Push(3), Push(5), Pop(), Pop(), Push(8)

**(a)** State the values returned by the two Pop() operations. **[2]**
**(b)** List the nodes from top to bottom after the final operation. **[1]**
**(c)** State the value of `top.next.data` after the final operation. **[1]**

**7.** A programming language has no built-in queue type. Describe how a queue of up to 50 items could be represented using an array, including the variables needed and their values when the queue is created. **[4]**

**8.** For each scenario, state whether a static or a dynamic structure is more suitable and justify your answer.

**(a)** The 64 squares of a chessboard in a chess program. **[2]**
**(b)** The items in a customer's online shopping basket. **[2]**

**9.** A hash table has 11 slots (0–10). It is created with every slot marked empty. Keys are placed using hash = key MOD 11, and collisions are resolved by trying the next slot.

**(a)** The keys 23, 14, 36 and 25 are inserted in that order. State the slot in which each is stored. **[4]**
**(b)** Describe how the table is searched for the key 47, and state the result. **[2]**
**(c)** Explain why the slots must be marked empty when the table is created. **[1]**

**10.** A priority queue is held in an array in priority order, highest priority first (a larger number is a higher priority; equal priorities keep arrival order). It currently holds:

(A, 3), (B, 2), (C, 2)

**(a)** Task (D, 2) is added, then task (E, 4). Show the contents of the queue. **[2]**
**(b)** State which task is removed next. **[1]**

**11.** Describe how a binary tree could be represented in a language with no built-in tree or reference types. **[3]**

**12.** Explain why a dynamically implemented stack does not normally need a "test for full" operation, and state the condition under which pushing could still fail. **[2]**

**13.** An office's print queue usually holds a handful of jobs but occasionally several hundred. Discuss whether the queue should be implemented as a static or a dynamic structure. **[4]**

---

## Answers

**1.** A data type defined by the operations that can be performed on it and their behaviour, independent of how it is implemented [1].

**2.** Any two [1 each]: code that uses the ADT is simpler, as it needs only the operations; the implementation can be changed without altering the code that uses it; the data can only be changed through the operations, so it stays in a valid state.

**3.** A static structure's size is fixed when it is created (memory reserved in advance) [1]; a dynamic structure's size can change while the program runs, using memory from the heap [1].

**4.** Any two [1 each]: storing return addresses (stack frames) for subroutine calls; undo features; reversing the order of items; evaluating expressions.

**5.** A dictionary accesses a value through its key [1]; a hash table turns the key into a storage location, so the value can be found directly without searching all the pairs [1].

**6. (a)** 5 [1], then 3 [1].
**(b)** 8 → 7 [1].
**(c)** 7 [1].

**7.** An array of 50 elements holds the items [1]; a front pointer holds the index of the item to be removed next, and a rear pointer the index of the last item added [1]; a size (count) variable records how many items are held, for the empty and full tests [1]; on creation front = 0, rear = −1 and size = 0 (or equivalent values consistent with the algorithms) [1].

**8. (a)** Static [1]: the number of squares never changes, and each square can be accessed directly by its row and column in a 2-D array [1].
**(b)** Dynamic [1]: the number of items is unknown and changes as items are added and removed, so memory is used only for items actually in the basket [1].

**9. (a)** 23 MOD 11 = 1 → slot **1** [1]; 14 MOD 11 = 3 → slot **3** [1]; 36 MOD 11 = 3, occupied → slot **4** [1]; 25 MOD 11 = 3, slots 3 and 4 occupied → slot **5** [1].
**(b)** 47 MOD 11 = 3, so slot 3 (14), then slot 4 (36), then slot 5 (25) are checked [1]; slot 6 is empty, so the search stops: 47 is not in the table [1].
**(c)** So that a search can tell an unused slot from an occupied one and stop when it reaches an empty slot (and insertion can find a free slot) [1].

**10. (a)** (E, 4), (A, 3), (B, 2), (C, 2), (D, 2): D placed after B and C because equal priorities keep arrival order [1]; E placed at the front because it has the highest priority [1].
**(b)** E [1].

**11.** Use three arrays of the same length (or an array of records) [1]: one holds each node's data, one the index of its left child and one the index of its right child [1]; a special value such as −1 marks no child, and a variable holds the index of the root [1].

**12.** New nodes are created from the heap only when needed, so there is no fixed maximum size to reach [1]; pushing fails only if the heap has no free memory for another node [1].

**13.** A static array would have to be sized for the largest likely number of jobs, so most of the reserved memory would be wasted most of the time [1], and it would still reject jobs if that size were exceeded [1]. A dynamic queue grows and shrinks with the number of jobs, so memory matches demand [1]. However, each job needs extra memory for a reference and the implementation is more complex; on balance, dynamic is more suitable because demand varies so widely [1].

---

## Where marks are usually lost

- Describing an ADT as "an array" instead of by its operations.
- Forgetting the size (count) variable or the initial pointer values when describing representation.
- Stopping a hash table search too early, or not at all when an empty slot is reached.
- Ignoring arrival order for equal priorities.
- Claiming a dynamic structure can never fail to grow.
