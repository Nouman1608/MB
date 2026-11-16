---
title: "IB DP Computer Science B.4: Abstract Data Types -- Revision Notes"
seoTitle: "IB DP Computer Science Abstract Data Types Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["ib"]
topic: "B.4 -- Abstract data types (HL only)"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Computer Science"]
syllabusSeries: "First assessment 2027"
order: 3
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-computer-science-theme-b"
    subtopic: "ib-dp-computer-science-b-4"
description: "Revision notes on IB DP Computer Science B.4 Abstract data types (HL only): what the 2027 subject brief says on hours, HL Paper 2 questions and how to revise."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: new overview page written only from the IB DP Computer Science subject brief (first assessment 2027); detailed B.4 outcomes follow the full IB guide; please review; 2026-11-08: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-08
updatedDate: 2026-11-16
featured: false
---

B.4 Abstract data types is the HL-only sub-topic of Theme B in IB DP Computer Science (first assessment 2027): 23 recommended teaching hours at HL, none at SL, assessed through additional HL questions on Paper 2. These notes summarise what the IB's public subject brief says. The brief does not list the ADTs studied; they are in the full DP guide, so build your checklist from your school's copy.

Full explanation: [B.4 Abstract data types study guide](/resources/ib-dp-computer-science-b4-abstract-data-types/).

## Key facts from the subject brief

| Item | What the brief says |
|---|---|
| Level | HL only |
| Teaching hours | 0 SL / 23 HL |
| Assessed in | HL Paper 2: additional questions focused on OOP and abstract data types |
| HL Paper 2 | 2 hours, 40% of the final grade |
| Languages | Java or Python; programming questions have equivalent versions |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-computer-science-b4-abstract-data-types--12-b4-extra-hl-time.webp" width="900" height="840" alt="Theme B totals 52 hours at SL and 93 at HL when the hours table is added up. HL gets 41 more hours: B.2 plus 2, B.3 plus 16 and B.4 plus 23. B.3 and B.4 supply 39 of the 41." loading="lazy">
  <figcaption>Most of the extra Theme B time at HL comes from B.3 and B.4.</figcaption>
</figure>


## What the numbers mean for revision

- B.4 has the same HL allocation as B.3 OOP (23 hours) and is assessed alongside it in the additional HL questions, so revise the two together.
- At HL, Paper 2 (40%) carries the same weight as Paper 1 (40%), so Theme B, including B.4, is half of the external assessment.

## General background (not the IB outcome list)

An **abstract data type** is defined by its possible values and the operations allowed on it, not by how it is implemented. This is abstraction applied to data, which links B.4 to the B.1 computational thinking process. Check the full guide for which ADTs and operations are required.

*The rest of this section is general computer-science background, to help you think about any ADT the full guide names. It is not the IB's outcome list.*

### Interface and implementation

Every ADT has two sides. The **interface** is what a user of the type sees: the name of each operation, what it takes in, what it gives back and how it changes the stored values. The **implementation** is the code and storage that make those operations work, for example an array, a list of linked nodes or a class with private attributes. A program that uses only the interface does not need to change if the implementation is replaced, as long as each operation still behaves as described. This is why an exam answer that defines an ADT by saying "it is an array" loses marks: the array is one possible implementation, not the type itself.

### Describing an operation precisely

A clear description of an operation says:

- **what it needs** (its parameters and any condition that must be true first, such as "the structure is not empty");
- **what it returns**, if anything;
- **how the stored values change**, if they do;
- **what happens in the unusual case**, for example removing from an empty structure or adding a value that is already present.

Operations are often grouped into those that **create** or reset the data, those that **query** it without changing it (such as a size or an "is it empty?" check), and those that **modify** it (adding or removing items). Spotting which group an operation belongs to helps when you trace: a query never changes the state, so the state in your trace table should be the same on the line before and the line after.

### Worked example: tracing a stack and a queue

Two widely taught ADTs show why the operations, not the storage, define the type. A **stack** removes the item added most recently (last in, first out). A **queue** removes the item that has waited longest (first in, first out). Apply the same four operations, add 5, add 8, remove, remove, to each:

| Step | Stack after step | Stack returns | Queue after step | Queue returns |
|---|---|---|---|---|
| add 5 | 5 | -- | 5 | -- |
| add 8 | 5, 8 (8 on top) | -- | 5, 8 (5 at front) | -- |
| remove | 5 | 8 | 8 | 5 |
| remove | empty | 5 | empty | 8 |

The inputs are identical, but the outputs differ because the rule for removal differs. Either type could be stored in an array or in linked nodes; the table would not change. Check whether these particular types appear in your full guide before revising them in depth.

### How ADTs connect to B.3

In both Java and Python an ADT is commonly written as a **class**: the stored data become private (or conventionally hidden) attributes, and each operation becomes a public method. This is **encapsulation**, and it is one reason the brief groups the additional HL Paper 2 questions on OOP and abstract data types. When you practise, write the class, then write a short program that uses it only through its methods.

## Revision checklist to build with your teacher

1. List every ADT and operation in the B.4 outcomes of the full guide.
2. For each, write an implementation in your course language and a set of test cases.
3. Practise tracing operations by hand, recording the state of the data after each step.
4. Practise questions that combine an ADT with a class (B.3), since HL Paper 2 groups the two.

## Common mistakes and exam traps

- SL students revising B.4: it is not examined at SL.
- Revising from another syllabus's data-structure list and assuming it matches B.4. Use the full guide.
- Learning definitions without practising implementation and tracing.
- Leaving out the empty case: an answer describing a remove operation should say what happens when there is nothing to remove.
- Changing the state in a trace table on a query operation such as a size check.
- Describing an ADT only in terms of code. Many questions ask what an operation does; answer in terms of values and effects first.

## Key terms

| Term | Meaning |
|---|---|
| Abstract data type | A type defined by its values and operations, independent of implementation |
| Interface | The set of operations a user of the type can call, with their inputs, outputs and effects |
| Implementation | The particular storage and code that carry out the operations |
| Encapsulation | Keeping the stored data hidden inside a class so it is reached only through methods |
| Trace table | A table recording each operation, its return value and the state of the data afterwards |
| Last in, first out | Removal rule in which the most recently added item leaves first (general example: stack) |
| First in, first out | Removal rule in which the earliest added item leaves first (general example: queue) |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-computer-science-b4-abstract-data-types--13-b4-what-not-how.webp" width="900" height="1070" alt="An ADT is defined by the values it can hold and the operations on it, not by how it is implemented. In this illustrative example the same operations give the same results whether items are held in an array or in linked nodes." loading="lazy">
  <figcaption>An ADT separates what it does from how it is stored (illustrative example).</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-computer-science-b4-abstract-data-types--14-b4-tracing-operations.webp" width="900" height="850" alt="A trace table records each operation, what it returns and what the data type holds afterwards. Here six operations are traced: add(5), add(8), size() returns 2, remove() returns 8, remove() returns 5, and is_empty() returns true." loading="lazy">
  <figcaption>A trace table for operations on an illustrative abstract data type.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-computer-science-b4-abstract-data-types--15-b4-preparing.webp" width="900" height="940" alt="HL students should list every data type and operation named in the full guide, implement each in Java or Python, trace the operations on paper, and expect Paper 2 HL questions that combine B.4 with OOP." loading="lazy">
  <figcaption>Four steps to prepare for B.4 at HL.</figcaption>
</figure>


## Frequently asked questions

**Is B.4 examined at SL?**
No. The brief labels it HL only, with 0 SL hours.

**What is the link between B.4 and B.3?**
The brief describes the additional HL Paper 2 questions as focused on OOP and abstract data types, so both are assessed together at HL.

## Self-test

1. At which level is B.4 studied?
2. How many teaching hours does the brief recommend for B.4?
3. On which paper is B.4 assessed?
4. What weighting does HL Paper 2 carry?
5. Define an abstract data type.
6. What is the difference between an ADT's interface and its implementation?
7. Why can a program keep working when an ADT's implementation is replaced?
8. Give the four things a precise description of an operation should state.
9. Starting from empty, a stack receives add 3, add 6, remove. What does the remove return?
10. A queue receives the same three operations. What does the remove return?
11. Which B.3 idea describes keeping an ADT's data hidden inside a class?
12. How long is HL Paper 2?

**Answers:** 1. HL only. 2. 23 hours (HL). 3. Paper 2, in the additional HL questions. 4. 40%. 5. A data type defined by the values it can hold and the operations on it, independently of how it is implemented. 6. The interface is what the operations do (inputs, outputs, effects); the implementation is how they are carried out and the data stored. 7. Because the program uses only the operations, and they still behave as described. 8. What it needs, what it returns, how the stored values change, and what happens in the unusual case (such as an empty structure). 9. 6 (last in, first out). 10. 3 (first in, first out). 11. Encapsulation. 12. 2 hours.

## Related pages

- [B.4 Abstract data types practice questions](/resources/ib-dp-computer-science-b4-abstract-data-types-practice/)
- [B.3 Object oriented programming revision notes](/resources/ib-dp-computer-science-b3-object-oriented-programming-revision-notes/)

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-computer-science-b4-abstract-data-types--11-b4-how-big.webp" width="900" height="690" alt="B.4 has 23 teaching hours at HL and none at SL. That is more than four times B.1 (5 hours) and over half of B.2 (42 hours)." loading="lazy">
  <figcaption>B.4 is HL only and its 23 hours is more than four times B.1 and over half of B.2.</figcaption>
</figure>


## Source

International Baccalaureate Organization, *Diploma Programme Subject Brief, Sciences: Computer science, first assessment 2027* (© 2024).
