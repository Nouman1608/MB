---
title: "OxfordAQA A-Level Computer Science (9645): Priority Queues -- Practice Questions"
seoTitle: "OxfordAQA A-Level CS 9645 Priority Queues Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 10 – Advanced data structures"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9645"]
syllabusSeries: "2024-onwards"
order: 10.4
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "advanced-data-structures"
  - qualification: "a-level"
    topic: "advanced-data-structures"
    subtopic: "priority-queues-oxfordaqa-alevel-cs"
description: "Ten original OxfordAQA 9645 questions on sub-topic 3.10.4 Priority Queues: traces on ordered and unordered arrays, empty and full tests and uses, with answers."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions practise sub-topic **3.10.4 Priority Queues** of OxfordAQA International AS and A-level Computer Science (9645), Version 1.1: enqueue and dequeue, uses, and implementations in a one-dimensional array with empty and full tests. In every question **a smaller number means a higher priority**, and items of equal priority leave in the order they arrived. Entries are written priority:item.

Related pages: [priority queues study guide](/resources/oxfordaqa-a-level-computer-science-9645-priority-queues/) ·
[priority queues revision notes](/resources/oxfordaqa-a-level-computer-science-9645-priority-queues-revision-notes/) ·
[advanced data structures practice questions](/resources/oxfordaqa-a-level-computer-science-advanced-data-structures-practice/)

## Section A

**1.** State how a priority queue differs from an ordinary queue. **[2]**

**2.** State how an array-based priority queue can be tested to see whether it is empty and whether it is full. **[2]**

**3.** Describe one situation in which a priority queue is appropriate and explain why. **[2]**

**4.** State the name of one graph algorithm in which a priority queue is used. **[1]**

## Section B

**5.** A priority queue is held in an array of capacity 4. The array is kept in priority order, with the highest priority at index 0. The queue starts empty. These operations are carried out in order:

enqueue 2:B, enqueue 5:E, enqueue 1:A, enqueue 2:C, enqueue 4:X, dequeue, enqueue 3:D, dequeue.

**(a)** Complete a table showing the result of each operation and the array contents (index 0 to 3) after it. **[6]**
**(b)** State why one of the operations did not change the queue. **[1]**

**6.** Continue from the end of question 5 with these operations: enqueue 1:F, dequeue, dequeue, dequeue, dequeue, dequeue.

**(a)** State the value returned by each dequeue. **[3]**
**(b)** State what happens on the last dequeue and why. **[2]**

**7.** A priority queue uses an **unordered** array of capacity 4. The items 4:P, 2:Q, 4:R and 2:S are added in that order.

**(a)** State the contents of the array. **[1]**
**(b)** State the items returned by four successive dequeues, assuming that the first entry found with the highest priority is chosen. **[2]**
**(c)** Explain how the work done by enqueue and dequeue differs from an ordered array. **[2]**

**8.** Write a Python method `is_full` and a method `is_empty` for a priority queue class that has attributes `count` and `capacity`. **[2]**

**9.** Describe the steps of the enqueue operation for the ordered array design, including the case where the queue is full. **[4]**

**10.** A hospital emergency department sees patients in the order of urgency, with 1 the most urgent. Two patients with the same urgency are seen in order of arrival. Explain why a priority queue is more suitable than an ordinary queue, and give one difficulty of implementing it in an array. **[4]**

## Answers

**1.** In an ordinary queue the item that has waited longest leaves first [1]. In a priority queue the item with the highest priority leaves first, whatever its arrival time [1]. **[2]**

**2.** Empty: the count of items is 0 [1]. Full: the count of items equals the capacity (length) of the array [1]. **[2]**

**3.** Any valid situation with a reason [1 for the situation, 1 for the reason]. For example, emergency department triage: the most serious patient must be treated before others who arrived earlier. **[2]**

**4.** Dijkstra's shortest path algorithm (accept breadth-first search) [1]. **[1]**

**5. (a)**

| Operation | Result | Array |
|---|---|---|
| enqueue 2:B | True | 2:B, -, -, - |
| enqueue 5:E | True | 2:B, 5:E, -, - |
| enqueue 1:A | True | 1:A, 2:B, 5:E, - |
| enqueue 2:C | True | 1:A, 2:B, 2:C, 5:E |
| enqueue 4:X | False | 1:A, 2:B, 2:C, 5:E |
| dequeue | 1:A | 2:B, 2:C, 5:E, - |
| enqueue 3:D | True | 2:B, 2:C, 3:D, 5:E |
| dequeue | 2:B | 2:C, 3:D, 5:E, - |

Marks: 1:A inserted at the front [1]; 2:C placed after 2:B [1]; enqueue 4:X refused [1]; first dequeue returns 1:A [1]; 3:D placed between 2:C and 5:E [1]; second dequeue returns 2:B [1]. **[6]**
**(b)** enqueue 4:X did not change the queue because the queue was full (count 4 equals capacity 4) [1]. **[1]**

**6. (a)** After enqueue 1:F the array is 1:F, 2:C, 3:D, 5:E. The four dequeues return **1:F** [1], **2:C** [1], **3:D** and then **5:E** [1]. **[3]**
**(b)** The fifth dequeue is attempted on an empty queue [1], so it returns nothing (the empty test must be applied first and no item is removed) [1]. **[2]**

**7. (a)** 4:P, 2:Q, 4:R, 2:S (arrival order) [1]. **[1]**
**(b)** 2:Q [1] then 2:S, 4:P and 4:R [1]. **[2]**
**(c)** In the unordered array, enqueue is quick, because the item is simply placed in the next free position, but dequeue must scan the whole array to find the highest priority [1]. In an ordered array, enqueue must find the right position and shift items, but dequeue takes the item at index 0 and does not need to search [1]. **[2]**

**8.** Example answer:

```python
def is_empty(self):
    return self.count == 0                 # [1]

def is_full(self):
    return self.count == self.capacity     # [1]
```

**[2]**

**9.** If the queue is full, it is not changed (and False or an error is returned) [1]. Otherwise find the position for the new item: move along past items whose priority is less than or equal to that of the new item [1]. Move the items from that position onwards one place along to make a gap [1]. Insert the new item in the gap and increase the count by 1 [1]. **[4]**

**10.** An ordinary queue would treat patients in order of arrival, so a seriously ill patient could wait behind a minor case [1]. A priority queue serves the most urgent patient first [1] and uses arrival order to decide between equals, which is fair [1]. Difficulty: the array has a fixed size so it can become full; or the items must be kept in order or searched, which means shifting items or scanning the array [1]. **[4]**

## Frequently asked questions

**Does a larger number always mean a higher priority?**
No. It depends on the question. Some questions treat 1 as the highest priority, others treat the largest number as the highest. Read the question before tracing.

**Do I need a linked list to implement a priority queue?**
No. The specification asks for an implementation in a one-dimensional array, with empty and full tests.

## Official syllabus

OxfordAQA International AS and A-level Computer Science (9645) specification, Version 1.1, for International AS exams May/June 2025 onwards and International A-level exams May/June 2026 onwards: sub-topic 3.10.4 Priority Queues.
