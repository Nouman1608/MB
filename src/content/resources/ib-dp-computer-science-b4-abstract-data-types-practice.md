---
title: "IB DP Computer Science B.4: Abstract Data Types -- Practice Questions"
seoTitle: "IB DP Computer Science Abstract Data Types Practice"
resourceType: "practice-questions"
subject: "computer-science"
level: ["ib"]
topic: "B.4 -- Abstract data types (HL only)"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Computer Science"]
syllabusSeries: "First assessment 2027"
order: 4
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-computer-science-theme-b"
    subtopic: "ib-dp-computer-science-b-4"
description: "Original warm-up questions with answers for IB DP Computer Science B.4 Abstract data types (HL only): ADT ideas, abstraction and what the 2027 brief says."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: new overview practice page; the subject brief lists no B.4 ADTs or outcomes, so questions are brief-based plus general ADT warm-ups, clearly labelled; replace or extend once checked against the full IB guide; please review; 2026-11-08: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-08
updatedDate: 2026-11-16
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- the IB holds copyright in its own papers. Use these alongside
> the official past papers available through your school or the IB store.

Related: [B.4 Abstract data types study guide](/resources/ib-dp-computer-science-b4-abstract-data-types/)
and [revision notes](/resources/ib-dp-computer-science-b4-abstract-data-types-revision-notes/).

B.4 is HL only. The IB's public subject brief for the 2027 course does not list which abstract data types B.4 covers; that is in the full DP guide. Section A checks what the brief says. Section B contains **general** warm-up questions on the idea of an abstract data type, not mapped to specific IB outcomes, to use while you work through the full guide. Section C applies the same idea to data types that are widely taught in computer science courses (stacks, queues, lists and sets); they are **general practice only**, so check each one against the B.4 outcomes in your school's copy of the guide before relying on it.

## Section A: the course and assessment

**1.** State the level at which B.4 is studied and its recommended teaching hours. **[2]**

**2.** Describe how B.4 is assessed. **[2]**

**3.** Explain why an HL student should revise B.3 and B.4 together. **[2]**

## Section B: general ADT warm-ups

**4.** Explain what is meant by an abstract data type. **[2]**

**5.** Explain how an abstract data type is an example of abstraction. **[2]**

**6.** A programmer designs an ADT called `Counter` with the operations `reset()` (sets the value to 0), `increment()` (adds 1) and `getValue()` (returns the value). Starting from a new `Counter` after `reset()`, the operations `increment()`, `increment()`, `reset()`, `increment()` are carried out. State the value returned by `getValue()`. **[1]**

**7.** Give one advantage of separating an ADT's operations from its implementation. **[2]**

**8.** A team implements the same ADT twice: once storing its items in an array and once in linked nodes. Explain why a program that uses only the ADT's operations gives the same results with either version. **[2]**

## Section C: general practice with common ADTs

**9.** A **stack** ADT has the operations `push(x)` (adds `x` to the top), `pop()` (removes and returns the top item) and `isEmpty()`. Starting from an empty stack, these operations are carried out: `push(4)`, `push(9)`, `pop()`, `push(2)`, `push(7)`, `pop()`. State the value returned by each `pop()` and the contents of the stack at the end, top item first. **[3]**

**10.** A **queue** ADT has the operations `enqueue(x)` (adds `x` at the rear), `dequeue()` (removes and returns the front item) and `isEmpty()`. Starting from an empty queue: `enqueue("A")`, `enqueue("B")`, `dequeue()`, `enqueue("C")`, `dequeue()`, `dequeue()`. State the value returned by each `dequeue()` and the value `isEmpty()` would then return. **[4]**

**11.** For each situation, state whether a stack or a queue is more suitable and give a reason.

**(a)** An "undo" feature in a text editor. **[2]**
**(b)** Print jobs sent by several users to one shared printer. **[2]**

**12.** Explain what should happen when `pop()` is called on an empty stack, and why the ADT's description should say so. **[2]**

**13.** A **set** ADT stores values with no duplicates and no fixed order. It has `add(x)`, `remove(x)`, `contains(x)` and `size()`. Starting from an empty set: `add(3)`, `add(5)`, `add(3)`, `add(8)`, `remove(5)`. State the value returned by `size()` and by `contains(5)`. **[2]**

**14.** A list of items is held in linked nodes, where each node stores a value and a reference to the next node. Describe the steps needed to insert a new node between two existing nodes, and state one advantage of this over inserting into the middle of an array. **[4]**

## Answers

**1.** HL only [1]; 23 hours at HL (0 at SL) [1].

**2.** On Paper 2 [1], through additional questions for HL focused on OOP and abstract data types [1].

**3.** The brief describes the additional HL Paper 2 questions as focused on OOP and abstract data types together [1], and each has 23 HL teaching hours, so questions may combine a class (B.3) with an ADT (B.4) [1].

**4.** A data type defined by the values it can hold and the operations that can be performed on it [1], independently of how it is implemented [1].

**5.** The user of the ADT works only with what it does (its operations) [1], and the detail of how the data is stored is hidden or ignored, which is abstraction: keeping only the detail needed [1].

**6.** After reset 0; increment 1; increment 2; reset 0; increment 1. `getValue()` returns **1** [1].

**7.** The implementation can be changed or improved without changing the programs that use the ADT [1], because they only use its operations; it also lets programmers use the ADT without knowing its internal details [1].

**8.** The program depends only on what each operation does (its inputs, outputs and effect on the stored values) [1], and both versions carry out those operations with the same behaviour, so the storage method is hidden from the program [1].

**9.** First `pop()` returns **9** [1]; second `pop()` returns **7** [1]; the stack finishes holding 2 (top) then 4 [1]. Trace: 4; 4, 9; 4; 4, 2; 4, 2, 7; 4, 2.

**10.** First `dequeue()` returns **"A"** [1]; second returns **"B"** [1]; third returns **"C"** [1]; the queue is now empty, so `isEmpty()` returns **true** [1].

**11. (a)** Stack [1], because the most recent action must be undone first: last in, first out [1].
**(b)** Queue [1], because jobs should be printed in the order they arrived: first in, first out [1].

**12.** The operation cannot return an item because there is none, so it should signal an error (for example raise an exception or return an agreed value) rather than return invalid data [1]. Stating this in the ADT's description means every implementation behaves the same way and programs using it can check `isEmpty()` first or handle the error [1].

**13.** `size()` returns **2** (the set holds 3 and 8; the second `add(3)` has no effect and 5 was removed) [1]; `contains(5)` returns **false** [1].

**14.** Create a new node holding the value [1]; set the new node's next reference to the node that should follow it [1]; change the next reference of the node before it to point to the new node [1]. Advantage: no existing items have to be shifted along to make room, as they would in an array [1]. Accept: the list can grow without a fixed size being set in advance.

## Where marks are usually lost

- Defining an ADT by one particular implementation.
- Losing track of state when tracing a sequence of operations; write the value after every step.
- Mixing up last in, first out (stack) and first in, first out (queue) when a question asks you to justify a choice.
- Giving the order of the linked-node steps wrongly: if the previous node is re-pointed before the new node is linked to its successor, the rest of the list is lost.
- Forgetting that a set ignores a duplicate `add`, so its size does not change.
- Not saying what an operation does when the structure is empty.

## Frequently asked questions

**Why are some questions labelled general?**
The public subject brief does not list the B.4 data types, so general warm-ups are used until you check the full guide's outcomes.

**Are stacks, queues and sets definitely in B.4?**
Do not assume so from this page. They are used here because they are standard examples for practising ADT thinking. Use the full guide to confirm which data types, operations and depth B.4 requires.

**Do SL students need these questions?**
No. B.4 is HL only.

**Should I answer in Java or Python?**
These questions are language-neutral. The brief says Paper 2 programming questions have equivalent Java and Python versions, so practise writing the same operations in the language your school uses.
