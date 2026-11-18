---
title: "AQA A-Level Computer Science (7517): Data Structures -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Fundamentals of data structures"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7517"]
syllabusSeries: "2015-onwards"
order: 2.11
syllabusTopics:
  - qualification: "a-level"
    topic: "fundamentals-of-data-structures"
    subtopic: "data-structures-7517"
description: "Original AQA 7517 section 4.2.1.1 questions with mark-scheme answers on the concept of a data structure and choosing and justifying structures in context."
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

Related: [Data structures study guide](/resources/aqa-a-level-computer-science-7517-data-structures/) | [Data structures revision notes](/resources/aqa-a-level-computer-science-7517-data-structures-revision-notes/)

---

## Section A

**1.** Define the term **data structure**. **[2]**

**2.** Explain the difference between a **data type** and a **data structure**. **[2]**

**3.** State what is meant by an **abstract data type**. **[1]**

**4.** State whether each structure is homogeneous or heterogeneous.

**(a)** A one-dimensional array of integers. **[1]**
**(b)** A record holding a name, an age and a Boolean flag. **[1]**

**5.** Distinguish **direct access** from **sequential access**. **[2]**

**6.** Explain **one** advantage of a dynamic data structure over a static one. **[1]**

## Section B

**7.** A hospital writes software for its accident and emergency department. For each requirement, identify a suitable data structure and justify your choice.

**(a)** Patients wait to be seen; a patient with a more urgent condition must be seen before a less urgent one who arrived earlier. **[2]**
**(b)** Each patient's NHS number, name, date of birth and whether they have allergies must be kept together. **[2]**
**(c)** Staff type in an NHS number and the patient's details must appear without searching every record. **[2]**

**8.** A programmer stores the daily sales of a shop for one year in 365 separate variables. Explain **three** reasons why an array would be better. **[3]**

**9.** A delivery firm wants to store which of its depots are directly connected by road, and the driving time for each connection.

**(a)** Name a suitable data structure. **[1]**
**(b)** Explain why a one-dimensional array of depot names is not suitable. **[2]**

**10.** A word processor keeps a history of edits so that the user can undo them, most recent first.

**(a)** Identify the data structure that should be used. **[1]**
**(b)** Explain why a queue would be unsuitable. **[2]**

**11.** A weather station records the temperature every hour for 7 days.

**(a)** Identify a suitable data structure, giving its dimensions. **[2]**
**(b)** Explain how the structure allows the program to find the average temperature at 12:00 across the week. **[2]**

**12.** Compare an array and a record as ways of storing data about one student, referring to the types of data each can hold and how an item is accessed. **[4]**

**13.** A program must keep a list of currently connected users of an online game. Users join and leave at any time and the number online varies from a few to many thousands. Discuss whether a static or a dynamic structure is more appropriate. **[3]**

---

## Answers

**1.** A way of organising related data items in memory (with defined ways of accessing them) [1] so that they can be used efficiently for a particular task [1].

**2.** A data type describes the kind of a single value and the operations allowed on it (for example integer) [1]; a data structure organises many data items together, with defined relationships and access (for example an array) [1].

**3.** A logical description of data defined by the operations that can be performed on it, independent of how it is implemented [1].

**4. (a)** Homogeneous [1]. **(b)** Heterogeneous [1].

**5.** Direct access goes straight to an item using its index or key [1]; sequential access reaches an item by moving through the preceding items in order [1].

**6.** It can grow and shrink at run time, so it uses only the memory it needs and does not run out of space when more items arrive than expected [1].

**7. (a)** A priority queue [1]: items are removed in order of priority (urgency), not simply arrival order, while equal priorities are seen in arrival order [1].
**(b)** A record [1]: the fields have different data types (string or integer, string, date/time, Boolean) and all describe one patient [1].
**(c)** A hash table or dictionary keyed on NHS number [1]: the key gives direct access to the patient's details without a sequential search [1].

**8.** Any three [1 each]: a loop can process all 365 values with a few statements instead of 365; the whole year can be passed to a subroutine as one parameter; each day is still directly accessible by its index; totals, averages or maximums need one algorithm rather than separate code; changing the number of days changes one declaration.

**9. (a)** A (weighted) graph [1].
**(b)** A one-dimensional array records only the depot names [1]; it cannot represent which depots are connected or the driving time for each connection, which a graph's edges and weights store [1].

**10. (a)** A stack [1].
**(b)** A queue removes the item that was added first (first in, first out) [1], so undo would reverse the oldest edit instead of the most recent one, which needs last in, first out [1].

**11. (a)** A two-dimensional array [1] of 7 × 24 (days by hours) [1].
**(b)** Fix the hour index at the value for 12:00 [1] and loop through the day index from the first to the seventh day, adding each value and dividing the total by 7 [1].

**12.** An array is homogeneous: all its elements must be of the same type [1], so it cannot hold a name, a date of birth and a mark together as different types [1]. A record is heterogeneous: its fields can be of different types, suiting one student's details [1]. Array elements are accessed by an index number, whereas record fields are accessed by field name (for example `student.name`) [1].

**13.** A dynamic structure is more appropriate [1]. The number of users is unknown and changes constantly; a static structure would have to be sized for the maximum, wasting memory when few are online, or could overflow if more join than expected [1]. A dynamic structure grows and shrinks with the number of users, though it uses extra memory for pointers and takes memory from the heap as it grows [1].

---

## Where marks are usually lost

- Defining a data structure without referring to organisation or efficient use.
- Choosing an ordinary queue where priority matters.
- Naming "an array" without its dimensions when the data clearly has two.
- Justifying with "it is more efficient" and no reason.
- Treating a record and an array as interchangeable.
